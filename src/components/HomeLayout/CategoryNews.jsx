import React, { Suspense } from 'react';
import { useLoaderData} from 'react-router';
import SingleSkill from './SingleSkill';
const CategoryNews = () => {
    const data=useLoaderData()
    
    console.log(data)

    return (
        <div>
            <Suspense>
                <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-[24px]'>
                    {
                        data.map((singleSkill) => <SingleSkill key={singleSkill.id} singleSkill={singleSkill}></SingleSkill>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default CategoryNews;