import { Container } from '../../components/Container/Container.jsx';
import { Picture } from '../../components/Picture/Picture.jsx';
import { Statistics } from '../../components/Statistics/Statistics.jsx';
import { Unlock } from '../../components/Unlock/Unlock.jsx';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <Container>
      <div className={css.sectionHome}>
        <div className={css.unlockContainer}>
          <Unlock />
          <Picture />
        </div>
        <Statistics />
      </div>
    </Container>
  );
};

export default HomePage;
