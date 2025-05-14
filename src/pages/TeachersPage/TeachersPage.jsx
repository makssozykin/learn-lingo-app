import useFirebaseData from '../../hooks/useFireBase.js';
import { Loader } from '../../components/Loader/Loader.jsx';
import { Container } from '../../components/Container/Container.jsx';
import { TeacherList } from '../../components/TeacherList/TeacherList.jsx';
import { Button } from '../../components/Button/Button.jsx';

const TeachersPage = () => {
  const { data, loading, error, loadMore, hasMore, isFetchingMore } =
    useFirebaseData();

  return (
    <Container>
      {loading && !error && <Loader />}
      {error && <p>Помилка отримання даних: {error}</p>}
      {data && (
        <section>
          <TeacherList teachers={data} />
        </section>
      )}
      {isFetchingMore && <Loader />}
      {hasMore && (
        <Button title="Load more" onClick={loadMore} disabled={isFetchingMore}>
          Load more
        </Button>
      )}
    </Container>
  );
};

export default TeachersPage;
