import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import routesPath from 'routesPath';

import Header from 'components/Header';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Spinner from 'components/Spinner';
import { Box } from 'components/Box';
import { useFetchCurrentUserQuery } from 'redux/auth/authAPI';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const PhoneBook = lazy(() => import('../PhoneBook'));
const UnknownRoute = lazy(() => import('components/UnknownRoute'));

const App = () => {
  const { isLoading } = useFetchCurrentUserQuery();
  const isLoggedIn = useSelector(state => state?.auth?.isLoggedIn);

  return (
    <>
      {isLoading ? null : (
        <Suspense
          fallback={
            <Box display="flex" justifyContent="center" mt="150px">
              {Spinner.customSpinner}
            </Box>
          }
        >
          <Routes>
            <Route path={routesPath.home} element={<Header />}>
              <Route
                index
                element={
                  <PublicRoute
                    redirectPath={routesPath.contacts}
                    isLoggedIn={isLoggedIn}
                  >
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                element={
                  <PublicRoute
                    redirectPath={routesPath.contacts}
                    isLoggedIn={isLoggedIn}
                    restricted
                  />
                }
              >
                <Route path={routesPath.login} element={<LoginPage />} />
                <Route path={routesPath.register} element={<RegisterPage />} />
              </Route>

              <Route
                path={routesPath.contacts}
                element={
                  <PrivateRoute
                    isLoggedIn={isLoggedIn}
                    redirectPath={routesPath.login}
                  >
                    <PhoneBook />
                  </PrivateRoute>
                }
              />
              <Route path={routesPath.unknown} element={<UnknownRoute />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default App;
