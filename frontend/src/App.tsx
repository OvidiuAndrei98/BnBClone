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
import './App.css'

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

    return (
        <div className="app-container">
            Navigation
            <Outlet />
            Footer
        </div>
    );
}

/**
 * A browser router that contains the root-level application routes.
 * @returns         A router.
 */
export function ApplicationRouter(): ReactNode {
    return (
        <RouterProvider
            router={createBrowserRouter(
                createRoutesFromElements(
                    <Route path="/" element={<Application />}>
                    </Route>
                ),
            )}
        />
    );
}
