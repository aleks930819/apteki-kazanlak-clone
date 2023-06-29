import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../utils/scrollToTop';
import { MobileNavMenuProvider } from '../context/MenuCloseContext';

import '../index.css';

const AppLayout = () => {
  const location = useLocation();

  const hideHeaderFooter = location.pathname.includes('admin');

  return (
    <div className="flex min-h-screen flex-col bg-grey-lighter-2">
      <ScrollToTop />
      {!hideHeaderFooter && (
        <MobileNavMenuProvider>
          <Header />
        </MobileNavMenuProvider>
      )}
      <Outlet />
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default AppLayout;
