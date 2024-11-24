import { useState, useEffect, useCallback } from 'react';
import { fetchPhotos } from '../../../services/unsplashService';

const usePhotoLoader = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [loadedPages, setLoadedPages] = useState(new Set()); 

  const loadMorePhotos = async () => {
    if (isFetching || loading || loadedPages.has(page)) return;
    try {
      setIsFetching(true);
      setLoading(true);

      const newPhotos = await fetchPhotos(page);

      setPhotos((prev) => [...prev, ...newPhotos]);
      setLoadedPages((prevSet) => new Set(prevSet).add(page));
      setLoading(false);
    } catch (err) {
      setError(err.message || 'Failed to load photos');
      setLoading(false);
    } finally {
      setIsFetching(false);
    }
  };

  const loadNextPage = useCallback(() => {
    if (!loading && !isFetching && !loadedPages.has(page + 1)) {
      setPage((prev) => prev + 1);
    }
  }, [loading, isFetching, loadedPages, page]);

  useEffect(() => {
    loadMorePhotos();
  }, [page]); 

  return { photos, loading, error, loadNextPage };
};

export default usePhotoLoader;