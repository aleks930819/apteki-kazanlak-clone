import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './ui/AppLayout';

import HomeScreen from './screens/Home';
import NotFoundScreen from './screens/NotFound';
import PharmaciesScreen from './screens/Pharmacies';
import AboutUsScreen from './screens/AboutUs';
import InterestingScreen from './screens/Interesting';
import PromoScreen from './screens/Promo';
import HistoryScreen from './screens/History';
import Pharmacie from './screens/Pharmacie';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFoundScreen />,

    children: [
      {
        path: '/',
        element: <HomeScreen />,
      },
      {
        path: '/pharmacies',
        element: <PharmaciesScreen />,
      },
      {
        path: '/pharmacies/:name',
        element: <Pharmacie />,
      },
      {
        path: '/za-nas',
        element: <AboutUsScreen />,
      },
      {
        path: '/interesno',
        element: <InterestingScreen />,
      },
      {
        path: '/promo',
        element: <PromoScreen />,
      },
      {
        path: '/history',
        element: <HistoryScreen />,
      },

      // {
      //   path: '*',
      //   element: <NotFoundScreen />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
