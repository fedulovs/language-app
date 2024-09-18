'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import './style.css';

interface Props {
    headerText: string;
}

const Navigation = (props: Props) => {
    const router = useRouter();
    const path = usePathname();

    const handleBack = () => {
        if (path !== '/') {
            router.back();
        } else {
            router.push('/');
        }
    };

    return (
        <div className='headerContainer'>
            <button className='backButton' onClick={handleBack}>
                ←
            </button>
            <h2 className='categoryNameHeader'>{props.headerText}</h2>
        </div>
    );
};

export default Navigation;
