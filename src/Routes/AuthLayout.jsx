import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';


const AuthLayout = () => {
    return (
        <div className=' min-h-screen bg-gradient-to-br from-green-400 to-black' >
            <header className='mx-auto pb-4'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;