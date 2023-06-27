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
import AddNewPromoProductScreen from './screens/AddNewPromoProduct';
import EditPromoScreeen from './screens/EditPromoProduct';
import AddNewNewsScreen from './screens/AddNewNews';

import AdminPromoProducts from './components/Admin/AdminPromoProducts';
import AdminInteresno from './components/Admin/adminInteresno';
import AdminPharmacies from './components/Admin/adminPharmacies';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import EditNewsScreen from './screens/EditNews';
import AddNewPharmacieScreen from './screens/AddNewPharmacie';
import EditPharmacieScreen from './screens/EditPharmacie';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

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
        path: '/admin/login',
        element: <LoginScreen />,
      },
      {
        path: '/admin',
        element: (
          <ProtectedRoute>
            <AdminPanelScreen />
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'pharmacies',
            element: (
              <ProtectedRoute>
                <AdminPharmacies />
              </ProtectedRoute>
            ),
          },
          {
            path: 'pharmacies/add',
            element: (
              <ProtectedRoute>
                <AddNewPharmacieScreen />,
              </ProtectedRoute>
            ),
          },
          {
            path: 'pharmacies/edit/:slug',
            element: (
              <ProtectedRoute>
                <EditPharmacieScreen />,
              </ProtectedRoute>
            ),
          },
          {
            path: 'promo-products',
            element: (
              <ProtectedRoute>
                <AdminPromoProducts />,
              </ProtectedRoute>
            ),
          },
          {
            path: 'promo-products/add',
            element: (
              <ProtectedRoute>
                <AddNewPromoProductScreen />,
              </ProtectedRoute>
            ),
          },
          {
            path: 'promo-products/edit/:id',
            element: (
              <ProtectedRoute>
                <EditPromoScreeen />,
              </ProtectedRoute>
            ),
          },
          {
            path: 'interesno',
            element: (
              <ProtectedRoute>
                <AdminInteresno />,
              </ProtectedRoute>
            ),
          },
          {
            path: 'interesno/add',
            element: (
              <ProtectedRoute>
                <AddNewNewsScreen />,
              </ProtectedRoute>
            ),
          },
          {
            path: 'interesno/edit/:slug',
            element: (
              <ProtectedRoute>
                <EditNewsScreen />,
              </ProtectedRoute>
            ),
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
      <AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={12}
          containerStyle={{ top: 80 }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '1rem',
              color: 'white',
              padding: '16px',
              background: '#00686c',
            },
          }}
        />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
