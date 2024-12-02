import { Navigate, Outlet } from 'react-router';
import { useAuth } from 'src/core/AuthenticationBoundary';

const PrivateRoutes = () => {
  const { authenticationState } = useAuth();
  return authenticationState === 2 ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
