import { useState, useEffect } from 'react';
import { ref, query, orderByKey, limitToFirst, get } from 'firebase/database';
import { db } from '../firebaseConfig.js';

let TEACHERS_PER_PAGE = 3;

const useFirebaseData = () => {
  const [allTeachers, setAllTeachers] = useState([]);
  const [newTeachers, setNewTeachers] = useState([]);
  const [teachersPerPage, setTeachersPerPage] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMoreTeachers, setHasMoreTeachers] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

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

  console.log(allTeachers);

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
          console.log(snapshotLimit.exists());
          const moreTeachers = snapshotLimit.val();
          console.log(moreTeachers);
          setNewTeachers(moreTeachers);
          setHasMoreTeachers(true);
          if (Object.keys(moreTeachers).length === allTeachers.length) {
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
  }, [teachersPerPage]);

  const loadMore = () => setTeachersPerPage(prev => prev + 3);

  return {
    allTeachers,
    newTeachers,
    loading,
    error,
    loadMore,
    hasMoreTeachers,
    isFetchingMore,
  };
};

export default useFirebaseData;
