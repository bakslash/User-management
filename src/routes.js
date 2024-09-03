import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy load the pages
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UserDetails = lazy(() => import('./pages/UserDetails'));
const AddUser = lazy(() => import('./pages/AddUser')); // Import the AddUser page

function AppRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/add-user' element={<AddUser />} /> {/* Add route for AddUser page */}
                <Route path='/user/:id' element={<UserDetails />} />
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;
