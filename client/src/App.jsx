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
import NewsScreen from './screens/News';
import LoginScreen from './screens/Login';
import AdminPanelScreen from './screens/AdminPanel';

import AddNewPromoProductScreen, {
  action as createNewPromoProductAction,
} from './screens/AddNewPromoProduct';
import EditPromoScreeen, {
  loader as editPromoProductLoader,
  action as editPromoProductAction,
} from './screens/EditPromoProduct';

import AdminPromoProducts from './components/Admin/AdminPromoProducts';
import AdminInteresno from './components/Admin/adminInteresno';
import AdminPharmacies from './components/Admin/adminPharmacies';

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
      },
      {
        path: '/pharmacies/:slug',
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
        path: '/interesno/:slug',
        element: <NewsScreen />,
      },
      {
        path: '/promo',
        element: <PromoScreen />,
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
          },
          {
            path: 'promo-products',
            element: <AdminPromoProducts />,
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
