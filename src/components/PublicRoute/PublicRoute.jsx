import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute({
  isLoggedIn,
  restricted,
  redirectPath = '/',
  children,
}) {
  if (isLoggedIn && restricted) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
}
