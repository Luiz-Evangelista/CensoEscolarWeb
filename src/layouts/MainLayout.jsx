
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';

const MainLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Container>
          <Outlet />
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
