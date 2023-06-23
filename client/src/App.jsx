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
import PromoScreen from './screens/Promo';
import HistoryScreen from './screens/History';
import Pharmacie, { loader as phrmacieLoader } from './screens/Pharmacie';
import NewsScreen, { loader as singleNewsLoader } from './screens/News';
import LoginScreen from './screens/Login';
import AdminPanelScreen from './screens/AdminPanel';

import AdminPromoProducts, {
  loader as adminPromoProducts,
} from './components/Admin/AdminPromoProducts';
import AdminInteresno, {
  loader as admiIntersnoLoader,
} from './components/Admin/adminInteresno';
import AdminPharmacies, {
  loader as adminPharmaciesLoader,
} from './components/Admin/adminPharmacies';
import AddNewPromoProductScreen, {
  action as createNewPromoProductAction,
} from './screens/AddNewPromoProduct';
import EditPromoScreeen, {
  loader as editPromoProductLoader,
  action as editPromoProductAction,
} from './screens/EditPromoProduct';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

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
        // loader: promoLoader,
      },
      {
        path: '/history',
        element: <HistoryScreen />,
      },
      {
        path: '/login',
        element: <LoginScreen />,
      },
      {
        path: '/admin',
        element: <AdminPanelScreen />,
        children: [
          {
            path: 'pharmacies',
            element: <AdminPharmacies />,
            loader: adminPharmaciesLoader,
          },
          {
            path: 'promo-products',
            element: <AdminPromoProducts />,
            loader: adminPromoProducts,
          },
          {
            path: 'promo-products/add',
            element: <AddNewPromoProductScreen />,
            action: createNewPromoProductAction,
          },
          {
            path: 'promo-products/edit/:id',
            element: <EditPromoScreeen />,
            loader: editPromoProductLoader,
            action: editPromoProductAction,
          },
          {
            path: 'intersno',
            element: <AdminInteresno />,
            loader: admiIntersnoLoader,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundScreen />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
