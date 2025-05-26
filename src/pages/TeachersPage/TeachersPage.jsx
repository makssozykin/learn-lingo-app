import useFirebaseData from '../../hooks/useFireBase.js';
import { Loader } from '../../components/Loader/Loader.jsx';
import { Container } from '../../components/Container/Container.jsx';
import { TeacherList } from '../../components/TeacherList/TeacherList.jsx';
import { Button } from '../../components/Button/Button.jsx';
import css from './TeachersPage.module.css';
import { Filters } from '../../components/Filters/Filters.jsx';
import { useSelector } from 'react-redux';
import { selectTeachers } from '../../redux/teachers/selectors.js';

const TeachersPage = () => {
  const { loading, error, loadMore, hasMoreTeachers, isFetchingMore } =
    useFirebaseData();

  const teachers = useSelector(selectTeachers);

  return (
    <Container title="TeachersPage">
      <section className={css.teachersSection}>
        {loading && !error && <Loader />}
        {error && <p>Помилка отримання даних: {error}</p>}
        <Filters />
        {teachers && <TeacherList teachers={teachers} />}
        {isFetchingMore && <Loader />}
        {!isFetchingMore && hasMoreTeachers && (
          <Button
            title="Load more"
            onClick={loadMore}
            disabled={isFetchingMore}
          >
            Load more
          </Button>
        )}
      </section>
    </Container>
  );
};

export default TeachersPage;
