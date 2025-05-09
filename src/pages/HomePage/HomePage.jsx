import useFirebaseData from '../../hooks/useFireBase.js';

const HomePage = () => {
  const { data, loading, error } = useFirebaseData();

  if (loading) {
    return <p>Завантаження даних...</p>;
  }

  if (error) {
    return <p>Помилка отримання даних: {error}</p>;
  }

  return <div>{data && typeof data === 'object' && 'HomePage'}</div>;
};

export default HomePage;
