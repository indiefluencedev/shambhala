import React from 'react';
import aboutImage from '../../assets/AboutUsimages/abouttext.png'; // Ensure the path to the image is correct

const AboutText = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-8 py-12 flex flex-col lg:flex-row items-start gap-8">
      {/* Left - Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full h-auto object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Right - Text */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Shambhala Spiritual Foundation: 
          <span className="block text-[#2F8479]">Awakening to Divine Consciousness</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Shambhala is the path of Spiritual Awakening through Meditation, guiding individuals to awaken to their own Godliness. When one becomes spiritually awakened, they become aware of their true natural identity, understanding that spirituality is the inherent state of every human. To realize spiritual awareness, one must accept that they are not the body, not the mind, not their emotions and thoughts, but a divine soul. This realization enables connection with higher spiritual realms.
        </p>

        <h2 className="text-2xl font-bold text-[#2F8479] mb-4">
          The Journey from Dvaita to Advaita: From Duality to Oneness
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Central to Shambhala’s teachings is the transition from Dvaita (duality) to Advaita (oneness). Shambhala helps individuals move beyond the perception of separation to recognize their unity with all creation. This process of discovering, understanding, and knowing one&apos;s true self reflects the fundamental wisdom of compassion, courage, peace, and the aspects of nature that Shambhala embodies.
        </p>
      </div>
    </div>
  );
};

export default AboutText;
