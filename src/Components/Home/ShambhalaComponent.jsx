import React from 'react';
import '../Styles/ShambhalaComponent.css'; // Import the CSS file
import box1 from '../../assets/box1.svg';
import box2 from '../../assets/box2.svg';
import box3 from '../../assets/box3.svg';

const ShambhalaComponent = () => {
  return (
    <div className="shambhala-container">
      <div className="shambhala-inner">
        
        <div className="shambhala-content">
          <h4 style={{ letterSpacing: '0.10em', marginBottom: '0.25rem', color: '#417578', fontWeight: '600', marginTop: '200px' }}>
            Welcome to Shambhala Spiritual Foundation
          </h4>
          <h1 className='second-heading' style={{ marginBottom: '1rem', fontWeight: '700' }}>
          Discover the Path to Spiritual Awakening
          </h1>
          <p style={{ lineHeight: '1.6', letterSpacing: '0.10em', marginBottom: '1.5rem', color: '#666', marginTop: '40px' }}>
            At Shambhala Spiritual Foundation, we believe in the profound potential of every soul to achieve enlightenment and inner peace through meditation and mindful living. Our mission is to guide individuals on a spiritual journey of self-discovery, fostering a sense of unity, compassion, and purpose. Join us in creating a compassionate, enlightened society where everyone can realize their highest potential.
          </p>
          <p>
            To Learn More, please <a href="#learn-more" style={{ color: '#3498db', textDecoration: 'underline' }}>click here</a>.
          </p>
        </div>

        {/* Box 1 - Left Side */}
        <img 
          src={box1} 
          alt="Box 1"
          className='box1' 
          style={{ position: 'absolute' }} 
        />

        {/* Box 2 - Top Right of H1 */}
        <img 
          src={box2} 
          alt="Box 2" 
          className='box2'
          style={{ position: 'absolute' }} 
        />

        {/* Box 3 - Bottom Right of Text */}
        <img 
          src={box3} 
          alt="Box 3" 
          className='box3'
          style={{ position: 'absolute' }} 
        />
      </div>
    </div>
  );
}

export default ShambhalaComponent;
