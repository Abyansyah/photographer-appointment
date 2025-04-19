import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { Appointment, Home, Login, MyAppointments, NotFound, Schedule } from './pages';
import PublicRoute from './config/PublicRoute';
import { Toaster } from 'sonner';
import PrivateRoute from './config/PrivateRoute';

function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/schedule"
          element={
            <MainLayout>
              <Schedule />
            </MainLayout>
          }
        />
        <Route
          path="/my-appointments"
          element={
            <MainLayout>
              <MyAppointments />
            </MainLayout>
          }
        />
        <Route
          path="/appointments/:id"
          element={
            <PrivateRoute>
              <MainLayout>
                <Appointment />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
