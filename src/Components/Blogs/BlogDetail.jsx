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
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      {/* Top Section: Main Image and Details */}
      <div className=" lg:items-start ">
      
        <div className="w-full  flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-800">{blog.title}</h1>
          <div className="flex items-center space-x-4 text-gray-500">
            <p className="text-sm"><strong>Author: </strong>{blog.author}</p>
            <p className="text-sm"><strong>Published on: </strong>{new Date(blog.timestamp.seconds * 1000).toLocaleDateString()}</p>
            {/* <p className="text-sm"><strong>ERT: </strong>3 minutes</p> */}
          </div>
        </div>
      </div>

      {/* Content Blocks with Wrapped Image */}
      {blog.contentBlocks.map((block, index) => (
        <div key={index} className="space-y-4 mb-8">
          {block.subHeading && <h2 className="text-2xl font-semibold text-gray-800 mb-2">{block.subHeading}</h2>}
          
          <div className="text-lg text-gray-700 leading-relaxed">
            {block.image && (
              <img
                src={block.image}
                alt={`Block Image ${index + 1}`}
                className={`max-w-[500px] h-auto rounded-lg shadow-lg ${
                  index % 2 === 0 ? 'float-left mr-4 mb-2' : 'float-right ml-4 mb-2'
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
