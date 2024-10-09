import React from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';
import styles from './category.module.css';

const Categories: React.FC = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerContainer}>
                <h2 className={styles.categoriesHeader}>Categories</h2>
            </div>

            <div className={styles.categoryGrid}>
                {categories.map((category) => (
                    <Link
                        className={styles.categoryLink}
                        href={`/card/${category.category}`}
                        key={category.category}
                    >
                        <div
                            className={styles.category}
                            key={category.category}
                        >
                            <p className={styles.categoryName}>
                                {category.category}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
