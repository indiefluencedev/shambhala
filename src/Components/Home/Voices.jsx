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
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus pulvinar. Vestibulum elementum eget nibh varius; fames conubia posuere rhoncus. Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus. Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus pulvinar. Vestibulum elementum eget nibh varius; fames conubia posuere rhoncus.',
      name: 'Name of the person 1',
    },
    {
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus pulvinar. Vestibulum elementum eget nibh varius; fames conubia posuere rhoncus. Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus. Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus pulvinar. Vestibulum elementum eget nibh varius; fames conubia posuere rhoncus.',
      name: 'Name of the person 2',
    },
    {
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus pulvinar. Vestibulum elementum eget nibh varius; fames conubia posuere rhoncus. Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus. Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus pulvinar. Vestibulum elementum eget nibh varius; fames conubia posuere rhoncus.',
      name: 'Name of the person 3',
    },
    {
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus pulvinar. Vestibulum elementum eget nibh varius; fames conubia posuere rhoncus. Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus. Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus pulvinar. Vestibulum elementum eget nibh varius; fames conubia posuere rhoncus.',
      name: 'Name of the person 4',
    },
    {
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus pulvinar. Vestibulum elementum eget nibh varius; fames conubia posuere rhoncus. Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus. Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus pulvinar. Vestibulum elementum eget nibh varius; fames conubia posuere rhoncus.',
      name: 'Name of the person 5',
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
