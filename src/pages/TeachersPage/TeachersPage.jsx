import useFirebaseData from '../../hooks/useFireBase.js';
import { Loader } from '../../components/Loader/Loader.jsx';
import { Container } from '../../components/Container/Container.jsx';
import { TeacherList } from '../../components/TeacherList/TeacherList.jsx';

const TeachersPage = () => {
  const { data, loading, error } = useFirebaseData();

  return (
    <Container>
      {loading && !error && <Loader />}
      {error && <p>Помилка отримання даних: {error}</p>}
      {data && typeof data === 'object' && (
        <section>
          <TeacherList teachers={data} />
        </section>
      )}
    </Container>
  );
};

export default TeachersPage;
