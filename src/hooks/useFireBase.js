import { useState, useEffect } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { db } from '../firebaseConfig.js';

const useFirebaseData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataRef = ref(db);

    const unsubscribe = onValue(
      dataRef,
      snapshot => {
        console.log(snapshot.val());
        if (snapshot.exists()) {
          setData(snapshot.val());
          setLoading(false);
          setError(null);
        } else {
          setData(null);
          setLoading(false);
          setError('Дані відсутні');
        }
      },
      error => {
        console.error('Помилка отримання даних:', error);
        setError(error.message);
        setLoading(false);
      }
    );

    return () => {
      off(dataRef, 'value', unsubscribe);
    };
  }, []);

  return { data, loading, error };
};

export default useFirebaseData;
