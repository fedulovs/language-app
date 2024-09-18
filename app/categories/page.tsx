import React from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';
import './style.css';

const Categories: React.FC = () => {
    return (
        <div className='pageContainer'>
            <div className='headerContainer'>
                <h2 className='categoriesHeader'>Categories</h2>
            </div>

            <div className='categoryGrid'>
                {categories.map((category) => (
                    <Link href={`/card/${category.category}`}>
                        <div className='category' key={category.category}>
                            <p className='categoryName'>{category.category}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
