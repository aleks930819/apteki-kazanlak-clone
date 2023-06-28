import { Suspense, lazy } from 'react';

import {
  RouterProvider,
  Route,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';

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

// import AdminPanelScreen from './screens/AdminPanel';
// import AdminPharmacies from './components/Admin/adminPharmacies';
// import AdminPromoProducts from './components/Admin/AdminPromoProducts';
// import AdminInteresno from './components/Admin/adminInteresno';
// import AddNewPharmacieScreen from './screens/AddNewPharmacie';
// import EditPharmacieScreen from './screens/EditPharmacie';
// import AddNewPromoProductScreen from './screens/AddNewPromoProduct';
// import EditPromoScreeen from './screens/EditPromoProduct';
// import AddNewNewsScreen from './screens/AddNewNews';
// import EditNewsScreen from './screens/EditNews';

// const AdminPanelScreen = lazy(() => import('./screens/AdminPanel'));
// const AdminPharmacies = lazy(() =>
//   import('./components/Admin/adminPharmacies')
// );
// const AdminPromoProducts = lazy(() =>
//   import('./components/Admin/AdminPromoProducts')
// );
// const AdminInteresno = lazy(() => import('./components/Admin/adminInteresno'));
// const AddNewPharmacieScreen = lazy(() => import('./screens/AddNewPharmacie'));
// const EditPharmacieScreen = lazy(() => import('./screens/EditPharmacie'));
// const AddNewPromoProductScreen = lazy(() =>
//   import('./screens/AddNewPromoProduct')
// );
// const EditPromoScreeen = lazy(() => import('./screens/EditPromoProduct'));
// const AddNewNewsScreen = lazy(() => import('./screens/AddNewNews'));
// const EditNewsScreen = lazy(() => import('./screens/EditNews'));

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Spinner from './ui/Spinner';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     errorElement: <NotFoundScreen />,
//     children: [
//       {
//         path: '/',
//         element: <HomeScreen />,
//       },
//       {
//         path: '/pharmacies',
//         element: <PharmaciesScreen />,
//       },
//       {
//         path: '/pharmacies/:slug',
//         element: <Pharmacie />,
//       },
//       {
//         path: '/za-nas',
//         element: <AboutUsScreen />,
//       },
//       {
//         path: '/interesno',
//         element: <InterestingScreen />,
//       },
//       {
//         path: '/interesno/:slug',
//         element: <NewsScreen />,
//       },
//       {
//         path: '/promo',
//         element: <PromoScreen />,
//       },
//       {
//         path: '/history',
//         element: <HistoryScreen />,
//       },
//       {
//         path: '/admin/login',
//         element: <LoginScreen />,
//       },
//       // {
//       //   path: '/admin',
//       //   element: (
//       //     <ProtectedRoute>
//       //       <AdminPanelScreen />
//       //     </ProtectedRoute>
//       //   ),
//       //   children: [
//       //     {
//       //       path: 'pharmacies',
//       //       element: (
//       //         <ProtectedRoute>
//       //           <AdminPharmacies />
//       //         </ProtectedRoute>
//       //       ),
//       //     },
//       //     {
//       //       path: 'pharmacies/add',
//       //       element: (
//       //         <ProtectedRoute>
//       //           <AddNewPharmacieScreen />,
//       //         </ProtectedRoute>
//       //       ),
//       //     },
//       //     {
//       //       path: 'pharmacies/edit/:slug',
//       //       element: (
//       //         <ProtectedRoute>
//       //           <EditPharmacieScreen />,
//       //         </ProtectedRoute>
//       //       ),
//       //     },
//       //     {
//       //       path: 'promo-products',
//       //       element: (
//       //         <ProtectedRoute>
//       //           <AdminPromoProducts />,
//       //         </ProtectedRoute>
//       //       ),
//       //     },
//       //     {
//       //       path: 'promo-products/add',
//       //       element: (
//       //         <ProtectedRoute>
//       //           <AddNewPromoProductScreen />,
//       //         </ProtectedRoute>
//       //       ),
//       //     },
//       //     {
//       //       path: 'promo-products/edit/:id',
//       //       element: (
//       //         <ProtectedRoute>
//       //           <EditPromoScreeen />,
//       //         </ProtectedRoute>
//       //       ),
//       //     },
//       //     {
//       //       path: 'interesno',
//       //       element: (
//       //         <ProtectedRoute>
//       //           <AdminInteresno />,
//       //         </ProtectedRoute>
//       //       ),
//       //     },
//       //     {
//       //       path: 'interesno/add',
//       //       element: (
//       //         <ProtectedRoute>
//       //           <AddNewNewsScreen />,
//       //         </ProtectedRoute>
//       //       ),
//       //     },
//       //     {
//       //       path: 'interesno/edit/:slug',
//       //       element: (
//       //         <ProtectedRoute>
//       //           <EditNewsScreen />,
//       //         </ProtectedRoute>
//       //       ),
//       //     },
//       //   ],
//       // },
//       {
//         path: '*',
//         element: <NotFoundScreen />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <Suspense fallback={<Spinner />}>
          {/* <RouterProvider router={router} /> */}
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/pharmacies" element={<PharmaciesScreen />} />
            <Route path="/pharmacies/:slug" element={<Pharmacie />} />
            <Route path="/za-nas" element={<AboutUsScreen />} />
            <Route path="/interesno" element={<InterestingScreen />} />
            <Route path="/interesno/:slug" element={<NewsScreen />} />
            <Route path="/promo" element={<PromoScreen />} />
            <Route path="/history" element={<HistoryScreen />} />
            <Route path="/admin/login" element={<LoginScreen />} />
            {/* <ProtectedRoute path="/admin" element={<AdminPanelScreen />}>
              <Route path="pharmacies" element={<AdminPharmacies />} />
              <Route path="pharmacies/add" element={<AddNewPharmacieScreen />} />
              <Route path="pharmacies/edit/:slug" element={<EditPharmacieScreen />} />
              <Route path="promo-products" element={<AdminPromoProducts />} />
              <Route path="promo-products/add" element={<AddNewPromoProductScreen />} />
              <Route path="promo-products/edit/:id" element={<EditPromoScreeen />} />
              <Route path="interesno" element={<AdminInteresno />} />

              <Route path="interesno/add" element={<AddNewNewsScreen />} />
              <Route path="interesno/edit/:slug" element={<EditNewsScreen />} />
            </ProtectedRoute> */}
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </Suspense>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={12}
          containerStyle={{ top: 80 }}
          toastOptions={{
            success: {
              duration: 2000,
            },
            error: {
              duration: 3000,
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
