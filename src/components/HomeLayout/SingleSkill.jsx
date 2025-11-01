import React from 'react';
import { Link } from 'react-router';

const SingleSkill = ({singleSkill}) => {
   // console.log(singleApp)

    const {skillName,providerName,price,rating,slotsAvailable,image,category
 } = singleSkill
    return (

    <div>
        <div className='p-10 space-y-4 bg-base-200 hover:scale-105 duration-375 rounded'>
            <img className='rounded' src={image} alt="" />
            <p className='font-semibold'>{skillName}</p>
            <p className='text-blue-500 font-semibold'>Provider:{providerName}</p>
           <div className='flex justify-between'>
             <p>Available Slot:{slotsAvailable}</p>
            <p className='bg-green-200 p-2 rounded-3xl'>{category}</p>
           </div>
            <div className='flex font-semibold text-orange-400 justify-between'>
                <p>Price:{price}$</p>
            <h1>Rating:{rating}</h1>
            </div>
            <Link className='mt-5 btn bg-primary w-full rounded-3xl hover:bg-secondary text-white'>View Details</Link>
           
        </div>
    </div>
    );
};

export default SingleSkill;