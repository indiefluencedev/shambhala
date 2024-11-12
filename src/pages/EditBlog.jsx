import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const db = getFirestore();
const storage = getStorage();

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [contentBlocks, setContentBlocks] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [newMainImage, setNewMainImage] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogDoc = await getDoc(doc(db, 'blogs', id));
      if (blogDoc.exists()) {
        const data = blogDoc.data();
        setTitle(data.title);
        setContentBlocks(data.contentBlocks || []);
        setMainImage(data.mainImage);
      }
    };
    fetchBlog();
  }, [id]);

  const handleImageUpload = async (file) => {
    const imageRef = ref(storage, `blogs/${file.name}`);
    await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
  };

  const updateBlog = async () => {
    let mainImageUrl = mainImage;
    
    if (newMainImage) {
      mainImageUrl = await handleImageUpload(newMainImage);
    }

    const updatedContentBlocks = [...contentBlocks];

    for (let i = 0; i < contentBlocks.length; i++) {
      if (contentBlocks[i].newImage) {
        updatedContentBlocks[i].image = await handleImageUpload(contentBlocks[i].newImage);
      }
    }

    await updateDoc(doc(db, 'blogs', id), {
      title,
      mainImage: mainImageUrl,
      contentBlocks: updatedContentBlocks.map(({ newImage, ...block }) => block),
    });

    navigate('/blogs');
  };

  const handleContentBlockChange = (index, key, value) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index][key] = value;
    setContentBlocks(updatedBlocks);
  };

  const handleNewImageChange = (index, file) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index].newImage = file;
    setContentBlocks(updatedBlocks);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Edit Blog</h1>
      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded mt-1"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Main Image</span>
          {mainImage && (
            <img src={mainImage} alt="Main" className="w-full h-40 object-cover rounded mt-2 mb-2" />
          )}
          <input
            type="file"
            onChange={(e) => setNewMainImage(e.target.files[0])}
            className="mt-2"
          />
        </label>

        {contentBlocks.map((block, index) => (
          <div key={index} className="border rounded p-4 mb-4 space-y-4">
            <label className="block">
              <span className="text-gray-700">Subheading</span>
              <input
                type="text"
                value={block.subHeading || ''}
                onChange={(e) => handleContentBlockChange(index, 'subHeading', e.target.value)}
                className="w-full border p-2 rounded mt-1"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Paragraph</span>
              <textarea
                value={block.paragraph || ''}
                onChange={(e) => handleContentBlockChange(index, 'paragraph', e.target.value)}
                className="w-full border p-2 rounded mt-1"
              />
            </label>

            {block.image && (
              <img src={block.image} alt="Block" className="w-full h-40 object-cover rounded mt-2 mb-2" />
            )}
            <label className="block">
              <span className="text-gray-700">Image</span>
              <input
                type="file"
                onChange={(e) => handleNewImageChange(index, e.target.files[0])}
                className="mt-2"
              />
            </label>
          </div>
        ))}

        <button
          onClick={updateBlog}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditBlog;
