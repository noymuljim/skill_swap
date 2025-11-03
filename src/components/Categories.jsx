import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise=fetch('/Categories.json').then(res=>res.json())
const Categories = () => {
    //console.log(categoryPromise)
    const categories =use(categoryPromise)
    return (
        <div>
            <h2 className='font-bold mt-5'>All Categories</h2>

            <div className='flex flex-wrap gap-4 mt-6'> 
                {
                    categories.map(category=> <NavLink to={`/category/${category.id}`}  key={category.id} className={'btn  border-0 hover:bg-white rounded-3xl'} >{category.name}</NavLink>)
                }
            </div>

        </div>
    );
};

export default Categories;