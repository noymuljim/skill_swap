import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import SkillCard from '../components/SkillCard/SkillCard';

const CategoryNews = () => {
    const { id } = useParams()

    const data = useLoaderData()
    //console.log(id,data)

    const [categorySkills, setCategorySkills] = useState([])


    useEffect(() => {

        if (id == '0') {
            setCategorySkills(data)
            return;
        }
        else {
            const filteredSkills = data.filter(skills => skills.category_id == id)
            setCategorySkills(filteredSkills)
        }

    }, [data, id])

    return (
        <div>
            <h1 className='text-3xl font-bold  my-10'>Popular Skills</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    categorySkills.map(skills=> <SkillCard key={skills.id} skills={skills}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;