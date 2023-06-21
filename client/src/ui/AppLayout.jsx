import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../utils/scrollToTop';

const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-grey-lighter-2">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
