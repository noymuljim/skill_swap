import React, { use } from 'react';
import { NavLink } from 'react-router';
import CategoryNews from './CategoryNews';
const categoryPromise=fetch('/SkillsData.json').then(res=>res.json())
const Categories = () => {
    const categories=use(categoryPromise)
    return (
        <div>
            <h2 className='font-bold my-6'>All Categories ({categories.length})</h2>

           <div className=''>
             {
                categories.map(category=> <NavLink to={`/category/:${category.id}`} className='btn bg-base-100 border-none hover:bg-base-200 rounded-3xl' key={category.id}> {category.category}</NavLink>)
            }
           
           </div>
        </div>
    );
};

export default Categories;