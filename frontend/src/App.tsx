import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useLocation,
  useMatch,
  useNavigate,
} from 'react-router';
import React, { ReactNode, useEffect } from 'react';
import './App.css';
import Navbar from './core/components/navigation/Navbar';
import Home from './main_app/home_page/Home';
import { ConfigProvider, message } from 'antd';
import { DataProvider } from './core/DataProvider';
import { AuthenticationBoundary } from './core/AuthenticationBoundary';
import PrivateRoutes from './login/ProtectedRoute';
import { Login } from './login/Login';
import { authenticate } from './service/AuthenticationService';

export const DataProviderContext = React.createContext(new DataProvider());

/**
 * A component that renders the main navigation sidebar and contains
 * the routes that navigate to the root application sections.
 * @returns     A react element.
 */
export function Application() {
  const match = useMatch('/:root/*');
  const location = useLocation();
  const navigate = useNavigate();

  // By default, navigate to administration if no other root component is present
  useEffect(() => {
    if (!match) {
      navigate('/');
    }
  }, [location.pathname]);
  // #e31c5f roz-mov
  // #FF385C roze
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF385C',
        },
        components: {
          Slider: {
            handleColor: '#e31c5f',
            handleSize: 15,
          },
        },
      }}
    >
      <div className="app-container bnb-clone-root">
        <Navbar />
        <Outlet />
        {/* Footer */}
      </div>
    </ConfigProvider>
  );
}

/**
 * Redirects to the SSO login page to obtain the authorization token.
 * @param provider authorization provider
 */
async function login(provider: string) {
  // Obtain the URL to the SSO authentication page and redirect to it
  try {
    await authenticate(`/sso/auth?provider=${provider}`);
    // Store the temporary request token and use it after the redirect to obtain an authentication token
  } catch (e) {
    message.error('login failed');
  }
}

/**
 * A browser router that contains the root-level application routes.
 * @returns         A router.
 */
export function ApplicationRouter(): ReactNode {
  const dataProvider = new DataProvider();
  return (
    <DataProviderContext.Provider value={dataProvider}>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<Application />}>
              <Route index element={<Home />}></Route>
              <Route path="/login" element={<Login onLogin={login} />}></Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/user-profile" element={<Home />} />
              </Route>
            </Route>,
          ),
        )}
      />
    </DataProviderContext.Provider>
  );
}
