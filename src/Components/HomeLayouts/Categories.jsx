import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json')
    .then(res => res.json())

const Categories = () => {
    const categories = use(categoryPromise);
    console.log(categories)
    return (
        <div>
            <h2 className='font-semibold'>All Categories ({categories.length})</h2>
            <div className="grid grid-cols-1 mt-5">
                {
                    categories.map(category => <NavLink
                        to={`/category/${category.id}`}
                        key={category.id}
                        className='btn border-0 bg-base-100 hover:bg-base-300 my-1 text-accent'
                        >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;