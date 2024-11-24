import React from 'react';
import styles from './PhotoCard.module.css';

const PhotoCard = ({ photo }) => (
  <div className={styles.photoCard}>
    <img src={photo.urls.small} alt={photo.alt_description} loading="lazy" />
    <div className={styles.caption}>Photo by {photo.user.name}</div>
    {photo.user.bio && <div className={styles.bio}>Bio: {photo.user.bio}</div>}
  </div>
);

export default PhotoCard;