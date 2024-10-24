import React, { useEffect, useState } from 'react';
import { auth } from '../../config/firebase';
import { getFirestore, collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Firebase Storage methods
import { useNavigate } from 'react-router-dom';

const db = getFirestore();
const storage = getStorage(); // Initialize Firebase Storage

const CreateOfflineEvents = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [eventDateTime, setEventDateTime] = useState('');
  const [venue, setVenue] = useState('');
  const [author, setAuthor] = useState('');
  const [imageFile, setImageFile] = useState(null); // State for image file
  const [showPopup, setShowPopup] = useState(false); // State for popup
  const user = auth.currentUser;
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    if (user) {
      const fetchAuthor = async () => {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setAuthor(userDoc.data().name); // Adjust field name based on Firestore structure
        }
      };
      fetchAuthor();
    }
  }, [user]);

  const handleImageUpload = async (file) => {
    const imageRef = ref(storage, `offlineEvents/${file.name}`);
    await uploadBytes(imageRef, file);
    return await getDownloadURL(imageRef);
  };

  const createEvent = async () => {
    if (title.trim() === '' || description.trim() === '' || venue.trim() === '' || !eventDateTime) return;

    let imageUrl = null;
    if (imageFile) {
      imageUrl = await handleImageUpload(imageFile); // Upload image and get URL
    }

    await addDoc(collection(db, 'offlineEvents'), {
      title,
      description,
      eventDateTime: new Date(eventDateTime),
      venue,
      author,
      imageUrl, // Save image URL in Firestore
      createdBy: user.uid,
      timestamp: new Date(),
    });

    // Clear input fields and show popup
    setTitle('');
    setDescription('');
    setEventDateTime('');
    setVenue('');
    setAuthor('');
    setImageFile(null); // Clear the image file
    setShowPopup(true); // Show the popup

    // Redirect after a timeout
    setTimeout(() => {
      navigate('/offlineevents'); // Redirect to the offline events page
    }, 2000);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Offline Event</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
        className="w-full border p-2 mb-4"
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author Name"
        className="w-full border p-2 mb-4"
      />
      <input
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        placeholder="Venue"
        className="w-full border p-2 mb-4"
      />
      <div className="mb-4">
        <label className="block mb-2">Event Date & Time:</label>
        <input
          type="datetime-local"
          value={eventDateTime}
          onChange={(e) => setEventDateTime(e.target.value)}
          className="w-full border p-2"
        />
      </div>

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Event Description"
        className="w-full border p-2 mb-4"
      />

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block mb-2">Event Poster (Optional):</label>
        <input
          type="file"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="w-full border p-2"
        />
      </div>

      <button onClick={createEvent} className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Event
      </button>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-lg">Event has been created successfully!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateOfflineEvents;
