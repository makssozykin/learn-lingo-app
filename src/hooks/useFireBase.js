import { useState, useEffect, useCallback } from 'react';
import {
  ref,
  query,
  orderByKey,
  limitToFirst,
  startAfter,
  get,
} from 'firebase/database';
import { db } from '../firebaseConfig.js';

const TEACHERS_PER_PAGE = 3;

const useFirebaseData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastKey, setLastKey] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const fetchData = useCallback(
    async (initialLoad = true) => {
      setLoading(initialLoad && true);
      setIsFetchingMore(!initialLoad && true);
      setError(null);

      const dataRef = ref(db);
      const queryPerPage = [orderByKey(), limitToFirst(TEACHERS_PER_PAGE)];

      if (lastKey && !initialLoad) {
        queryPerPage.push(startAfter(lastKey));
      }

      const dataQuery = query(dataRef, ...queryPerPage);

      try {
        const snapshot = await get(dataQuery);
        if (snapshot.exists()) {
          const newData = [];
          let newLastKey = null;
          snapshot.forEach(childSnapshot => {
            newData.push({ key: childSnapshot.key, ...childSnapshot.val() });
            newLastKey = childSnapshot.key;
          });

          setData(prevData =>
            initialLoad ? newData : [...prevData, ...newData]
          );
          console.log(newData);
          setLastKey(newLastKey);
          setLoading(false);
          setIsFetchingMore(false);
          setHasMore(newData.length === TEACHERS_PER_PAGE);
        } else {
          setLoading(false);
          setIsFetchingMore(false);
          setHasMore(false);
          if (initialLoad) {
            setData([]);
          }
        }
      } catch (err) {
        console.error('Помилка отримання даних:', err);
        setError(err.message);
        setLoading(false);
        setIsFetchingMore(false);
      }
    },
    [lastKey]
  );

  useEffect(() => {
    fetchData(true); // Завантаження першої порції даних при монтуванні
  }, [fetchData]);

  const loadMore = useCallback(() => {
    if (hasMore && !isFetchingMore) {
      fetchData(false);
    }
  }, [fetchData, hasMore, isFetchingMore]);

  return { data, loading, error, loadMore, hasMore, isFetchingMore };
};

export default useFirebaseData;
