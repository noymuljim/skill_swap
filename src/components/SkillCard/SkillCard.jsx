import React from 'react';

const SkillCard = ({skills}) => {
    return (
        <div className='p-5 rounded-3xl bg-white space-y-4'>
            <img className='w-[400px] mx-auto rounded-2xl' src={skills.image} alt="" />
            <h1 className='text-2xl font-semibold text-accent'>{skills.skillName}</h1>
            <h1 className=''>Provider:{skills.providerName}</h1>
            
            <div className='flex justify-between'>
                <p className='font-semibold text-green-700'>Available Slot: {skills.slotsAvailable}</p>
                <p>Rating:{skills.rating}</p>
            </div>
            <h1 className='font-semibold text-green-500'>Price:{skills.price}$</h1>
            <button className='btn w-full'>View Details</button>
        </div>
    );
};

export default SkillCard;


