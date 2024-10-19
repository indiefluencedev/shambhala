import React, { useEffect, useState } from 'react';
import { getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { useAuth } from '../../AuthContext';
import { v4 as uuidv4 } from 'uuid';
import Masonry from 'react-masonry-css';
import Loader from '../Loader';

const db = getFirestore();
const storage = getStorage();
const allowedUIDs = ["VhdL12OuVJT5LPWZ57xlWHf1R333", "client-uid-2"];

const Media = () => {
  const { user } = useAuth();
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingImages, setLoadingImages] = useState(true); // Loader state for images

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'media'), (snapshot) => {
      const imagesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setImages(imagesData);
      setLoadingImages(false); // Stop loader once images are fetched
    });
    return () => unsubscribe();
  }, []);

  const isAdmin = user && allowedUIDs.includes(user.uid);

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setUploading(true);
    try {
      const uploadPromises = files.map(async (file) => {
        const uniqueName = uuidv4() + '-' + file.name;
        const storageRef = ref(storage, `media/${uniqueName}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        return addDoc(collection(db, 'media'), { url: downloadURL, createdBy: user.uid });
      });
      await Promise.all(uploadPromises);
    } catch (error) {
      console.error('Error uploading images:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async (id, imageUrl) => {
    try {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
      await deleteDoc(doc(db, 'media', id));
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const openImageViewer = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeImageViewer = () => setSelectedImage(null);
  const showNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };
  const showPrevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleSwipe = (e) => {
    const touch = e.changedTouches[0];
    const startX = touch.clientX;
    const endX = touch.pageX;

    if (startX - endX > 50) {
      showNextImage();
    } else if (endX - startX > 50) {
      showPrevImage();
    }
  };

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    768: 2,
    500: 1,
  };

  return (
    <div className="p-4 sm:p-8 max-w-[1440px] h-[100vh] mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Media Gallery</h1>
      {isAdmin && (
        <div className="mb-4">
          <input type="file" multiple onChange={handleImageUpload} disabled={uploading} />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">Upload Images</button>
        </div>
      )}
      
      {loadingImages ? (
        <Loader /> // Show loader specifically for the images
      ) : (
        <Masonry breakpointCols={breakpointColumnsObj} className="flex w-auto" columnClassName="masonry-column">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative group m-2 sm:mb-3 border border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => openImageViewer(index)}
            >
              <img src={image.url} alt="Gallery" className="w-full object-cover" />
              {isAdmin && (
                <button
                  onClick={(e) => { e.stopPropagation(); handleDeleteImage(image.id, image.url); }}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </Masonry>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 sm:p-8"
          onTouchStart={handleSwipe}
        >
          <button onClick={closeImageViewer} className="absolute top-4 right-4 text-white text-xl">X</button>
          <div className="relative flex items-center justify-center w-full h-full max-w-[90vw] max-h-[80vh]">
            <button onClick={showPrevImage} className="absolute left-0 sm:left-2 text-black md:text-white text-3xl p-2">&lt;</button>
            <img src={selectedImage.url} alt="Full view" className="max-w-full max-h-full object-contain mx-auto" />
            <button onClick={showNextImage} className="absolute right-0 sm:right-2 text-black md:text-white text-3xl p-2">&gt;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
