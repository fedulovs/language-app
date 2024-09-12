import React, { useState } from 'react';
import './style.css';

const Categories: React.FC = () => {
    const categories = [
        'Numbers',
        'Questions',
        'Food',
        'Directions',
        'Countries',
        'Top verbs',
    ];

    return (
        <div className='pageContainer'>
            <div className='headerContainer'>
                <h3 className='categoriesHeader'>Categories</h3>
            </div>
            <div className='categoryGrid'>
                {categories.map((category) => (
                    <div className='category' key={category}>
                        <p className='categoryName'>{category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
