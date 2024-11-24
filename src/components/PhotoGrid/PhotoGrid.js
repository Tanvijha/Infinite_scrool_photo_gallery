import React from 'react';
import { useInView } from 'react-intersection-observer';
import usePhotoLoader from './hooks/usePhotoLoader';
import PhotoCard from '../PhotoCard/PhotoCard';
import Spinner from '../Spinner/Spinner';
import { displayFriendlyError, logError } from '../../utils/errorHandler';
import styles from './PhotoGrid.module.css';

const PhotoGrid = () => {
  const { photos, loading, error, loadNextPage } = usePhotoLoader();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  
  React.useEffect(() => {
    let debounceTimeout;
    if (inView && !loading && !error) {
      debounceTimeout = setTimeout(() => {
        loadNextPage(); 
      }, 500); 
    }
    return () => clearTimeout(debounceTimeout); 
  }, [inView, loading, error, loadNextPage]);

  React.useEffect(() => {
    if (error) {
      logError(error);
    }
  }, [error]);

  return (
    <div className={styles.photoGrid}>
      {photos.length > 0 ? (
        photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))
      ) : (
        <p className={styles.noPhotos}>No photos available</p>
      )}

      {loading && <Spinner />}
      {error && <p className={styles.error}>{displayFriendlyError(error)}</p>}
      {!loading && !error && <div ref={ref} className={styles.trigger}></div>}
    </div>
  );
};

export default PhotoGrid;
