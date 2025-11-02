import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise=fetch('/Categories.json').then(res=>res.json())
const Categories = () => {
    //console.log(categoryPromise)
    const categories =use(categoryPromise)
    return (
        <div>
            <h2 className='font-bold mt-5'>All Categories {categories.length}</h2>

            <div className='flex flex-wrap gap-4 mt-6'> 
                {
                    categories.map(category=> <NavLink to={`/category/${category.id}`}  key={category.id} className={'btn bg-base-100 border-0 hover:bg-base-200 rounded-3xl'} >{category.name}</NavLink>)
                }
            </div>

        </div>
    );
};

export default Categories;