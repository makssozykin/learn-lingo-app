import { useState, useEffect } from 'react';
import { ref, query, orderByKey, limitToFirst, get } from 'firebase/database';
import { db } from '../firebaseConfig.js';
import { useDispatch } from 'react-redux';
import { setTeachers } from '../redux/teachers/slice.js';

const useFirebaseData = () => {
  const [allTeachers, setAllTeachers] = useState([]);
  const [teachersPerPage, setTeachersPerPage] = useState(4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMoreTeachers, setHasMoreTeachers] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllTechers = async () => {
      try {
        const teacherRef = ref(db, '/');
        const snapshot = await get(teacherRef);
        if (snapshot.exists()) {
          const teachers = snapshot.val();
          setAllTeachers(teachers);
        }
        console.log(allTeachers);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAllTechers();
  }, []);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setLoading(true);
        const teacherRef = ref(db, '/');

        let datQuery = query(
          teacherRef,
          orderByKey(),
          limitToFirst(teachersPerPage)
        );
        setLoading(false);
        setIsFetchingMore(true);
        const snapshotLimit = await get(datQuery);

        if (snapshotLimit.exists()) {
          const moreTeachers = snapshotLimit.val();
          console.log(moreTeachers);
          dispatch(setTeachers(moreTeachers));
          setHasMoreTeachers(true);
          if (Object.keys(moreTeachers).length < teachersPerPage) {
            setHasMoreTeachers(false);
          }
        } else {
          setHasMoreTeachers(false);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsFetchingMore(false);
      }
    };
    fetchTeachers();
  }, [teachersPerPage, dispatch]);

  const loadMore = () => setTeachersPerPage(prev => prev + 4);

  return {
    allTeachers,
    loading,
    error,
    loadMore,
    hasMoreTeachers,
    isFetchingMore,
  };
};

export default useFirebaseData;
