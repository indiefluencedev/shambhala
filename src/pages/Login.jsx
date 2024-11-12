import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa'; // Importing Google icon
import { auth } from '../config/firebase'; // Your Firebase config file

const Login = () => {
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("User signed in with Google");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Shambhala Blog</h1>
        <p className="text-gray-700 mb-6 text-center">Sign in to get started with sharing your thoughts</p>
        
        <button 
          onClick={signInWithGoogle} 
          className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg px-4 py-2 shadow hover:bg-gray-100 transition duration-200"
        >
          <FaGoogle className="w-5 h-5 mr-3 text-gray-700" /> {/* Google icon */}
          <span className="font-medium text-gray-700">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
