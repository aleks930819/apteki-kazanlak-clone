import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './ui/AppLayout';

import HomeScreen from './screens/Home';
import NotFoundScreen from './screens/NotFound';
import PharmaciesScreen, {
  loader as pharmaciesLoader,
} from './screens/Pharmacies';
import AboutUsScreen from './screens/AboutUs';
import InterestingScreen, {
  loader as interestingLoader,
} from './screens/Interesting';
import PromoScreen, { loader as promoLoader } from './screens/Promo';
import HistoryScreen from './screens/History';
import Pharmacie, { loader as phrmacieLoader } from './screens/Pharmacie';
import NewsScreen, { loader as singleNewsLoader } from './screens/News';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: <NotFoundScreen />,
    children: [
      {
        path: '/',
        element: <HomeScreen />,
      },
      {
        path: '/pharmacies',
        element: <PharmaciesScreen />,
        loader: pharmaciesLoader,
      },
      {
        path: '/pharmacies/:slug',
        element: <Pharmacie />,
        loader: phrmacieLoader,
      },
      {
        path: '/za-nas',
        element: <AboutUsScreen />,
      },
      {
        path: '/interesno',
        element: <InterestingScreen />,
        loader: interestingLoader,
      },
      {
        path: '/interesno/:slug',
        element: <NewsScreen />,
        loader: singleNewsLoader,
      },
      {
        path: '/promo',
        element: <PromoScreen />,
        loader: promoLoader,
      },
      {
        path: '/history',
        element: <HistoryScreen />,
      },

      {
        path: '*',
        element: <NotFoundScreen />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
