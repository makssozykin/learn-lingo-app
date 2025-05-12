import useFirebaseData from '../../hooks/useFireBase.js';

const TeachersPage = () => {
  const { data, loading, error } = useFirebaseData();

  if (loading) {
    return <p>Завантаження даних...</p>;
  }

  if (error) {
    return <p>Помилка отримання даних: {error}</p>;
  }

  return <div>{data && typeof data === 'object' && 'TeachersPage'}</div>;
};

export default TeachersPage;
