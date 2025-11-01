import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopProvider from '../components/TopProvider';
import Marquee from 'react-fast-marquee';
import HowWorks from '../components/HowWorks';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main  className='min-h-[calc(100vh-272px)]'>
                <Outlet></Outlet>
            </main>
            
            <section className='bg-gradient-to-br from-green-500 to-black my-5' >
                <Marquee className pauseOnHover={true} speed={150}>
                    <div className='w-11/12 mx-auto p-5'>
                    <TopProvider></TopProvider>
                </div>
                </Marquee>    
            </section>
            <section>
                <HowWorks></HowWorks>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;