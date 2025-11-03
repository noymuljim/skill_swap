import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';

const SkillCard = ({skills}) => {
    return (
        <div className='p-5 rounded-3xl bg-gradient-to-b from-[#228B22]/90 via-[#228B22]/10 to-white space-y-4'>
            <img className='w-[400px] mx-auto rounded-2xl' src={skills.image} alt="" />
            <h1 className='text-[20px] text-accent'>{skills.skillName}</h1>
            <h1 className='font-semibold text-secondary'>By: {skills.providerName}</h1>
            
            <div className='flex justify-between'>
                <p className=' text-green-700'>Available Slot: <span className='font-semibold'>{skills.slotsAvailable}</span> </p>
                <div className='flex items-center gap-2 text-orange-400'>
                    <p>Rating: <span className='font-semibold'>{skills.rating}</span> </p>
                <FaStar></FaStar>
                </div>
            </div>
            <h1 className='text-2xl font-semibold text-accent'>Price: {skills.price}$</h1>
            <Link to={`/skill-details/${skills.id}`} className='btn btn-secondary btn-outline hover:text-white w-full'>View Details</Link>
        </div>
    );
};

export default SkillCard;


