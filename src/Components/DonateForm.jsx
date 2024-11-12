import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DonateForm = () => {
  const navigate = useNavigate();

  // Function to check for form submission
  useEffect(() => {
    const iframe = document.getElementById('googleForm');
    
    const checkFormSubmission = () => {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const confirmationMessage = iframeDoc.querySelector('.freebirdFormviewerViewResponseConfirmationMessage');
      
      if (confirmationMessage) {
        console.log('Form submitted');
        navigate('/'); // Redirect to home page after submission
      }
    };

    const interval = setInterval(checkFormSubmission, 1000); // Check every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [navigate]);


  return (
    <div className="w-full h-full flex justify-center items-center">
      <iframe
        id="googleForm"
        src="https://docs.google.com/forms/d/e/1FAIpQLSedi3BUUQStBv6btYHU9GXW5-PN08kngGzPXUcu58mXOOaubQ/viewform?embedded=true"
        width="640"
        height="956"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        onLoad={() => {
          console.log('Form loaded');
        }}
      >
        Loading…
      </iframe>
    </div>
  );
};

export default DonateForm;
