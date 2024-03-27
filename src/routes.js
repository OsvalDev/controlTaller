import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Reports from './pages/Reports';
import History from './pages/History';
import Inventory from './pages/Inventory';
import Settings from './pages/Settings';

const routes = [
    { path: '/', element: <Login />, isPrivate : false },
    { path: '/home', element: <Home />, isPrivate : true },
    { path: '/reports', element: <Reports /> , isPrivate : true },
    { path: '/history', element: <History /> , isPrivate : true },
    { path: '/inventory', element: <Inventory /> , isPrivate : true },
    { path: '/settings', element: <Settings /> , isPrivate : true }
];

export default routes;