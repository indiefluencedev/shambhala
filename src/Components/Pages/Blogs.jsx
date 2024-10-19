import React, { useEffect, useState } from 'react';
import { getFirestore, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import Loader from '../Loader'; // Assuming you have a Loader component ready

const db = getFirestore();
const allowedUIDs = ["VhdL12OuVJT5LPWZ57xlWHf1R333", "client-uid-2"];

const Blogs = () => {
  const { user } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for loader
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'blogs'), (snapshot) => {
      const blogsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      // Sort blogs by timestamp in descending order
      blogsData.sort((a, b) => b.timestamp - a.timestamp);

      setBlogs(blogsData);
      setLoading(false); // Hide loader after data is fetched
    });
    return () => unsubscribe();
  }, []);

  const isLoggedIn = user && allowedUIDs.includes(user.uid);

  const deleteBlog = async (id) => {
    await deleteDoc(doc(db, 'blogs', id));
  };

  if (loading) return <Loader />; // Display the loader while loading

  return (
    <div className="p-8 max-w-[1240px] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Blogs</h1>
        {isLoggedIn && (
          <button
            onClick={() => navigate('/create')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Create Post
          </button>
        )}
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="relative border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <Link to={`/blogs/${blog.id}`} className="block hover:opacity-90 transition-opacity">
              {blog.mainImage ? (
                <img
                  src={blog.mainImage}
                  alt="Main Blog Banner"
                  className="h-40 w-full object-cover"
                />
              ) : (
                <div className="h-40 w-full flex items-center justify-center bg-gray-200">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                <p className="text-gray-600">
                  {blog.contentBlocks && blog.contentBlocks[0].paragraph
                    ? blog.contentBlocks[0].paragraph.substring(0, 100)
                    : 'No content available'}
                </p>
              </div>
            </Link>
            {isLoggedIn && blog.createdBy === user?.uid && (
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => navigate(`/edit/${blog.id}`)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteBlog(blog.id)}
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

export default Blogs;
