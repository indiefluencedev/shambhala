import React, { useEffect, useState } from 'react';
import { auth } from '../../config/firebase';
import { getFirestore, collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const db = getFirestore();
const storage = getStorage();

const CreateBlogs = () => {
  const [title, setTitle] = useState('');
  const [mainImage, setMainImage] = useState(null);
  const [paragraphBlocks, setParagraphBlocks] = useState([{ subHeading: '', paragraph: '', bulletPoints: [''], image: null }]);
  const [author, setAuthor] = useState('');
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
    const imageRef = ref(storage, `blogs/${file.name}`);
    await uploadBytes(imageRef, file);
    return await getDownloadURL(imageRef);
  };

  const handleBlockImageUpload = async (file, blockIndex) => {
    if (file) {
      const downloadURL = await handleImageUpload(file);
      const updatedBlocks = [...paragraphBlocks];
      updatedBlocks[blockIndex].image = downloadURL;
      setParagraphBlocks(updatedBlocks);
    }
  };

  const createBlog = async () => {
    if (title.trim() === '' || paragraphBlocks.every(block => block.paragraph.trim() === '')) return;

    const mainImageURL = mainImage ? await handleImageUpload(mainImage) : null;
    const blockData = paragraphBlocks.map(block => ({
      subHeading: block.subHeading,
      paragraph: block.paragraph,
      bulletPoints: block.bulletPoints.filter(bullet => bullet.trim() !== ''),
      image: block.image,
    }));

    await addDoc(collection(db, 'blogs'), {
      title,
      mainImage: mainImageURL,
      contentBlocks: blockData,
      author,
      createdBy: user.uid,
      timestamp: new Date(),
    });

    // Clear input fields and show popup
    setTitle('');
    setMainImage(null);
    setParagraphBlocks([{ subHeading: '', paragraph: '', bulletPoints: [''], image: null }]);
    setAuthor('');
    setShowPopup(true); // Show the popup

    // Redirect after a timeout
    setTimeout(() => {
      navigate('/blogs'); // Redirect to the blogs page
    }, 2000);
  };

  const addParagraphBlock = () => {
    setParagraphBlocks([...paragraphBlocks, { subHeading: '', paragraph: '', bulletPoints: [''], image: null }]);
  };

  const removeParagraphBlock = (index) => {
    setParagraphBlocks(paragraphBlocks.filter((_, i) => i !== index));
  };

  const updateParagraphBlock = (index, key, value) => {
    const updatedBlocks = [...paragraphBlocks];
    updatedBlocks[index][key] = value;
    setParagraphBlocks(updatedBlocks);
  };

  const addBulletPoint = (blockIndex) => {
    const updatedBlocks = [...paragraphBlocks];
    updatedBlocks[blockIndex].bulletPoints.push('');
    setParagraphBlocks(updatedBlocks);
  };

  const updateBulletPoint = (blockIndex, bulletIndex, value) => {
    const updatedBlocks = [...paragraphBlocks];
    updatedBlocks[blockIndex].bulletPoints[bulletIndex] = value;
    setParagraphBlocks(updatedBlocks);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        className="w-full border p-2 mb-4"
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author Name"
        className="w-full border p-2 mb-4"
      />
      <div className="mb-4">
        <label className="block mb-2">Upload Main Image (Banner):</label>
        <input
          type="file"
          onChange={(e) => setMainImage(e.target.files[0])}
          className="mb-4"
        />
      </div>

      {paragraphBlocks.map((block, index) => (
        <div key={index} className="mb-6 border p-4 rounded">
          <input
            value={block.subHeading}
            onChange={(e) => updateParagraphBlock(index, 'subHeading', e.target.value)}
            placeholder="Sub Heading"
            className="w-full border p-2 mb-4"
          />
          <textarea
            value={block.paragraph}
            onChange={(e) => updateParagraphBlock(index, 'paragraph', e.target.value)}
            placeholder={`Paragraph ${index + 1}`}
            className="w-full border p-2 mb-4"
          />
          {block.bulletPoints.map((bullet, bulletIndex) => (
            <div key={bulletIndex} className="flex items-center mb-2">
              <input
                value={bullet}
                onChange={(e) => updateBulletPoint(index, bulletIndex, e.target.value)}
                placeholder={`Bullet Point ${bulletIndex + 1}`}
                className="w-full border p-2"
              />
              {bulletIndex === block.bulletPoints.length - 1 && (
                <button
                  onClick={() => addBulletPoint(index)}
                  className="bg-gray-300 px-2 py-1 rounded ml-2"
                >
                  Add Bullet
                </button>
              )}
            </div>
          ))}
          <div className="mt-4">
            <label className="block mb-2">Upload Image for this Block:</label>
            <input
              type="file"
              onChange={(e) => handleBlockImageUpload(e.target.files[0], index)}
              className="mb-4"
            />
          </div>
          {paragraphBlocks.length > 1 && (
            <button
              onClick={() => removeParagraphBlock(index)}
              className="bg-red-500 text-white px-2 py-1 mt-4 rounded"
            >
              Remove Block
            </button>
          )}
        </div>
      ))}

      <button onClick={addParagraphBlock} className="bg-gray-300 px-4 py-2 mb-4 rounded">
        Add Paragraph Block
      </button>
      <button onClick={createBlog} className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Blog
      </button>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-lg">Blog has been created successfully!</p>
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

export default CreateBlogs;
