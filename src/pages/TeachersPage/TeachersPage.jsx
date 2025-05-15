import useFirebaseData from '../../hooks/useFireBase.js';
import { Loader } from '../../components/Loader/Loader.jsx';
import { Container } from '../../components/Container/Container.jsx';
import { TeacherList } from '../../components/TeacherList/TeacherList.jsx';
import { Button } from '../../components/Button/Button.jsx';

const TeachersPage = () => {
  const {
    newTeachers,
    loading,
    error,
    loadMore,
    hasMoreTeachers,
    isFetchingMore,
  } = useFirebaseData();
  console.log('hasMoreTeachers:', hasMoreTeachers);
  console.log('isFetchingMore:', hasMoreTeachers);
  return (
    <Container>
      {loading && !error && <Loader />}
      {error && <p>Помилка отримання даних: {error}</p>}
      {newTeachers && (
        <section>
          <TeacherList teachers={newTeachers} />
        </section>
      )}
      {isFetchingMore && <Loader />}
      {!isFetchingMore && hasMoreTeachers && (
        <Button title="Load more" onClick={loadMore} disabled={isFetchingMore}>
          Load more
        </Button>
      )}
    </Container>
  );
};

export default TeachersPage;
