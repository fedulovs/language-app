'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Card from './card/[categoryName]/page';
import Categories from './categories/page';

export default function Home() {
    return (
        <>
            <Categories></Categories>
        </>
    );
}
