import React from 'react';
import styles from '../Styles/UpcomingEvents.module.css'; // Import the CSS module
import joinimage from '../../assets/upcomingevents.svg'; // Update this path to your actual image path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const UpcomingEvents = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Join us in our Upcoming Event</h1>
        <div className={styles.imageContainer}>
          <img src={joinimage} alt="Event" className={styles.image} />
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h2 className={styles.eventTitle}>Lorem ipsum odor amet , lorem adipiscing elit.</h2>
            <div className={styles.details}>
              <span className={styles.date}>
                <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} /> {/* Calendar Icon */}
                22nd October, 2024
              </span>
              <span className={styles.location}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} /> {/* Location Icon */}
                Google Meet
              </span>
            </div>
            <p className={styles.description}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus pulvinar. Vestibulum elementum eget nibh varius; fames conubia posuere rhoncus. Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus.
            </p>
            <div className={styles.buttons}>
              <button className={styles.registerButton}>Register Now</button>
              <button className={styles.eventsButton}>See All Events</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
