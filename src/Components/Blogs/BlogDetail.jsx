import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Loader from '../Loader';

const db = getFirestore();

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogDoc = await getDoc(doc(db, 'blogs', id));
      if (blogDoc.exists()) {
        setBlog(blogDoc.data());
      }
      setLoading(false);
    };
    fetchBlog();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8">
      {/* Top Section: Main Image and Details */}
      <div className="lg:items-start space-y-4">
        <div className="w-full flex flex-col justify-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">{blog.title}</h1>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-500">
            <p className="text-sm"><strong>Author: </strong>{blog.author}</p>
            <p className="text-sm"><strong>Published on: </strong>{new Date(blog.timestamp.seconds * 1000).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Content Blocks with Wrapped Image */}
      {blog.contentBlocks.map((block, index) => (
        <div key={index} className="space-y-4 mb-8">
          {block.subHeading && <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{block.subHeading}</h2>}
          
          <div className="text-base md:text-lg text-gray-700 leading-relaxed">
            {block.image && (
              <img
                src={block.image}
                alt={`Block Image ${index + 1}`}
                className={`w-full max-w-md h-auto rounded-lg shadow-lg mb-4 ${
                  index % 2 === 0 ? 'md:float-left md:mr-4 md:mb-2' : 'md:float-right md:ml-4 md:mb-2'
                }`}
              />
            )}
            <p>
              {block.paragraph}
            </p>
            <div className="clear-both"></div> {/* Ensures wrapping text aligns neatly after image ends */}
          </div>
          
          {block.bulletPoints && (
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-5">
              {block.bulletPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogDetail;
