import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from '../Styles/Voices.module.css';

const Voices = () => {
  const swiperRef = useRef(null);
  const [isEnd, setIsEnd] = useState(false); // Track if swiper reached the last slide
  const [isStart, setIsStart] = useState(true); // Track if swiper is at the first slide

  const voicesData = [
    {
      text: 'Before I meditate, problems can sometimes feel larger than they really are, and challenges seem overwhelming. However, after practicing Anapanasati meditation, everything feels more manageable and flows smoothly. I find myself resolving issues quickly and effectively, and life seems to unfold with greater ease and joy. I enjoy my work more deeply, appreciate my interactions with my students, and feel a renewed sense of purpose and fulfillment in everything I do.',
      name: 'Sumit Sharma, 35',
    },
    {
      text: 'Anapanasati meditation has brought me a sense of calm and reduced my anxiety, but most importantly, it has helped me manage the increasing stress at work. In the past, feelings of insecurity and loss often got the best of me, yet the guidance from Deepti Ma’am has truly been a blessing. While challenges remain, I now feel relaxed, supported, and cared for—all thanks to my daily Anapanasati practice.',
      name: 'Vandana Tiwari, 42',
    },
    {
      text: 'The past few years have been extremely stressful, both personally and professionally, yet I kept pushing forward for my family and children. Along the way, I accumulated a lot of stress and developed several health issues. Anapanasati meditation became my lifeline, allowing me to reconnect with the present moment and gradually return to a path of healing. This transformation has been possible thanks to the loving and compassionate guidance of Deepti Ma’am.',
      name: 'Rupali Yadav, 45',
    },
    {
      text: 'At just 18, I was diagnosed with a severe thyroid condition, and my doctor recommended surgery. Not only did my body struggle with the illness, but I also faced significant mental strain. However, since beginning Anapanasati meditation four years ago, I’ve transformed into a healthier, happier person—completely without medication or surgery.',
      name: 'Sagar, 28',
    },
  ];
  

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className={styles.voicesContainer}>
      <h2 className={styles.heading}>
        <span className={styles.line}></span>
        Voices of Transformation
        <span className={styles.line}></span>
      </h2>

      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: `.${styles.customPrev}`,
          nextEl: `.${styles.customNext}`,
        }}
        loop={false}
        onSlideChange={(swiper) => {
          // Check if swiper is at the start or end
          setIsStart(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className={styles.swiperContainer}
      >
        {voicesData.map((voice, index) => (
          <SwiperSlide key={index} className={styles.slide}>
          <div className={styles.card}> {/* Shadow is applied through regular CSS */}
            <p className={styles.text}>{voice.text}</p>
            <p className={styles.name}>- {voice.name}</p>
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className={styles.navButtons}>
        <button
          className={isStart ? styles.inactiveButton : styles.customPrev}
          onClick={handlePrev}
        >
          <FaChevronLeft className={styles.icon} />
        </button>
        <button
          className={isEnd ? styles.inactiveButton : styles.customNext}
          onClick={handleNext}
        >
          <FaChevronRight className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Voices;
