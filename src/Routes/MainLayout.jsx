import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopProvider from '../components/TopProvider';
import Marquee from 'react-fast-marquee';
import HowWorks from '../components/HowWorks';
import Banner from '../components/Banner';
import Upper from '../components/HomeLayout/Upper';


const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <section>
                <Banner></Banner>
            </section>
            <main className='w-11/12 mx-auto min-h-[calc(100vh-272px)] '>
              <section>
                <Upper></Upper>
            </section> 
               <section>
                 <Outlet></Outlet>
               </section>
            </main>

            <section className='bg-gradient-to-br from-green-500 to-black my-5' >
                <h1 className='text-3xl font-semibold text-white py-5 flex justify-center'>Our Top Rated Providers</h1>
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