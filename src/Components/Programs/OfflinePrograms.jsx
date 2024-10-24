import React, { useEffect, useState } from 'react';
import { getFirestore, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import Loader from '../Loader'; // Assuming you have a Loader component ready

const db = getFirestore();
const allowedUIDs = ["VhdL12OuVJT5LPWZ57xlWHf1R333", "client-uid-2"];

const OfflineEvents = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for loader
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'offlineEvents'), (snapshot) => {
      const eventsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      // Sort events by timestamp in descending order
      eventsData.sort((a, b) => b.timestamp - a.timestamp);

      setEvents(eventsData);
      setLoading(false); // Hide loader after data is fetched
    });
    return () => unsubscribe();
  }, []);

  const isLoggedIn = user && allowedUIDs.includes(user.uid);

  const deleteEvent = async (id) => {
    await deleteDoc(doc(db, 'offlineEvents', id));
  };

  if (loading) return <Loader />; // Display the loader while loading

  return (
    <div className="p-8 max-w-[1240px] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Offline Events</h1>
        {isLoggedIn && (
          <button
            onClick={() => navigate('/createofflineevent')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Create Event
          </button>
        )}
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white"
          >
            {/* Poster Image Section */}
            <div className="relative w-full h-64 bg-gray-100">
              {event.imageUrl ? (
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-t-lg" // Rounded top corners
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gray-200">
                  <span className="text-gray-500">No Poster Available</span>
                </div>
              )}
            </div>

            {/* Event Information */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h2>

              {/* Conditionally show tag for event status */}
              {new Date(event.eventDateTime.seconds * 1000) < new Date() ? (
                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                  Past
                </span>
              ) : (
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                  Upcoming
                </span>
              )}

              <p className="text-gray-600 mb-2">{event.description.substring(0, 80)}...</p>
              <p className="text-gray-500 text-sm mb-1">
                📅 Uploaded on: {new Date(event.eventDateTime.seconds * 1000).toLocaleDateString()}
              </p>
              <p className="text-gray-500 text-sm mb-2">📍 Venue: {event.venue}</p>

              {/* Know More Button (Redirects to Contact page) */}
              <Link to="/contact">
                <button className="mt-2 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-all w-full">
                  Know More
                </button>
              </Link>
            </div>

            {/* Admin Actions */}
            {isLoggedIn && event.createdBy === user?.uid && (
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => navigate(`/edit/${event.id}`)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteEvent(event.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfflineEvents;
