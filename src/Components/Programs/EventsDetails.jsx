import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const db = getFirestore();

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const eventDoc = await getDoc(doc(db, 'offlineEvents', id));
      if (eventDoc.exists()) {
        setEvent(eventDoc.data());
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) return <div>Loading...</div>;

  const { title, details, eventDateTime, venue } = event;

  return (
    <div className="max-w-[1240px] mx-auto p-6 lg:p-12 space-y-8 bg-white">
      {/* Header */}
      <h2 className="text-4xl font-semibold text-[#164453] text-center">Event Details</h2>

      {/* Event Title and Metadata */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
          <div className="flex items-center space-x-4 text-gray-600 text-md">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-[#164453]" />
              <span>{new Date(eventDateTime.seconds * 1000).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#164453]" />
              <span>{venue}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      {details && details.images && details.images[0] && (
        <div className="overflow-hidden rounded-lg shadow-lg mb-8">
          <img
            src={details.images[0]}
            alt="Event Main Image"
            className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Event Description */}
      <div className="text-gray-800 text-lg leading-relaxed space-y-4">
        {details && details.paragraphs && details.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Additional Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {details && details.images && details.images.slice(1, 4).map((url, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={url}
              alt={`Event Image ${index + 2}`}
              className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetails;
