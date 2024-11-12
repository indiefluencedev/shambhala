import React, { useEffect, useState } from 'react';
import { auth } from '../../config/firebase';
import { getFirestore, collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const db = getFirestore();
const storage = getStorage();

const CreateOfflineEvents = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [eventDateTime, setEventDateTime] = useState('');
  const [venue, setVenue] = useState('');
  const [author, setAuthor] = useState('');
  const [summaryImages, setSummaryImages] = useState([]); // Images for event summary
  const [showPopup, setShowPopup] = useState(false);

  // Details section fields
  const [detailsParagraphs, setDetailsParagraphs] = useState(['']); // Multiple paragraphs for event details
  const [detailImages, setDetailImages] = useState([]); // Multiple images for event details

  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const fetchAuthor = async () => {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setAuthor(userDoc.data().name);
        }
      };
      fetchAuthor();
    }
  }, [user]);

  const handleImageUpload = async (files) => {
    const imageUrls = [];
    for (const file of files) {
      const imageRef = ref(storage, `offlineEvents/${file.name}`);
      await uploadBytes(imageRef, file);
      const url = await getDownloadURL(imageRef);
      imageUrls.push(url);
    }
    return imageUrls;
  };

  const createEvent = async () => {
    if (title.trim() === '' || description.trim() === '' || venue.trim() === '' || !eventDateTime) return;

    // Upload summary images
    const summaryImageUrls = summaryImages.length > 0 ? await handleImageUpload(summaryImages) : [];

    // Upload detail images
    const detailImageUrls = detailImages.length > 0 ? await handleImageUpload(detailImages) : [];

    await addDoc(collection(db, 'offlineEvents'), {
      title,
      description,
      eventDateTime: new Date(eventDateTime),
      venue,
      author,
      summaryImageUrls, // Summary images for the event card
      details: {
        paragraphs: detailsParagraphs,
        images: detailImageUrls, // Images for the details page
      },
      createdBy: user.uid,
      timestamp: new Date(),
    });

    // Clear input fields and show popup
    setTitle('');
    setDescription('');
    setEventDateTime('');
    setVenue('');
    setAuthor('');
    setSummaryImages([]);
    setDetailsParagraphs(['']);
    setDetailImages([]);
    setShowPopup(true);

    setTimeout(() => {
      navigate('/offlineevents');
    }, 2000);
  };

  const addParagraph = () => setDetailsParagraphs([...detailsParagraphs, '']);
  
  const handleParagraphChange = (index, value) => {
    const updatedParagraphs = [...detailsParagraphs];
    updatedParagraphs[index] = value;
    setDetailsParagraphs(updatedParagraphs);
  };

  const handleDetailImagesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 5) {
      alert('You can only upload a maximum of 5 images for event details.');
      setDetailImages(selectedFiles.slice(0, 5));
    } else {
      setDetailImages(selectedFiles);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Offline Event</h1>

      {/* Event Summary Section */}
      <h2 className="text-xl font-semibold mb-2">Event Summary</h2>
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

      {/* Summary Images Upload */}
      <div className="mb-4">
        <label className="block mb-2">Summary Images (Optional):</label>
        <input
          type="file"
          onChange={(e) => setSummaryImages([...e.target.files])}
          multiple
          className="w-full border p-2"
        />
      </div>

      {/* Event Details Section */}
      <h2 className="text-xl font-semibold mt-8 mb-2">Add Event Details</h2>

      {/* Paragraphs for Detailed Description */}
      {detailsParagraphs.map((paragraph, index) => (
        <textarea
          key={index}
          value={paragraph}
          onChange={(e) => handleParagraphChange(index, e.target.value)}
          placeholder={`Details Paragraph ${index + 1}`}
          className="w-full border p-2 mb-4"
        />
      ))}
      <button
        onClick={addParagraph}
        className="bg-gray-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Another Paragraph
      </button>

      {/* Detailed Images Upload with Limit */}
      <div className="mb-4">
        <label className="block mb-2">Detailed Images (Optional, max 5):</label>
        <input
          type="file"
          onChange={handleDetailImagesChange}
          multiple
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
