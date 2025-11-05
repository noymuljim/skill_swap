import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import downloadImg from '../assets/2775662-removebg-preview.png'

const DownloadApp = () => {
    return (
        <div className='my-4  w-11/12 mx-auto '>
           <h1 className='text-3xl font-bold my-3 flex justify-center'>Download Mobile App</h1>
           
          <div className='flex flex-col md:flex-row items-center justify-between bg-black text-white p-2 md:px-20 rounded-2xl'>
              <div className='space-y-3'>
                <h1>Download the app for exclusive deals and ease of booking</h1>
                <p className='text-2xl font-semibold md:text-3xl md:font-bold'>Search.Find.Learn. <br/> Download the app</p>
                <div className='flex gap-5'>
                    <div className='flex justify-center items-center border rounded-2xl p-2 cursor-pointer'>
                        <IoLogoGooglePlaystore />
                        <h1>Google Store</h1>
                    </div>
                    <div className='flex justify-center items-center  border rounded-2xl p-2 cursor-pointer'>
                        <FaAppStoreIos />
                        <h1>App Store</h1>
                    </div>
                </div>
            </div>

            <div>
                <img src={downloadImg} alt="" />
            </div>
          </div>
        </div>
    );
};

export default DownloadApp;