'use client';

import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import styles from './card.module.css';
import { categories, Word } from '@/data/categories';

interface CardClientProps {
    categoryName: string;
}

const CardClient: React.FC<CardClientProps> = ({ categoryName }) => {
    const [characters, setCharacters] = useState<Word[]>([]);
    const [lastDirection, setLastDirection] = useState<string | undefined>();

    const decodedCategoryName = decodeURIComponent(categoryName || '');

    useEffect(() => {
        const selectedCategory = categories.find(
            (cat) => cat.category === decodedCategoryName
        );
        if (selectedCategory) {
            setCharacters(selectedCategory.words);
        }
    }, [categoryName]);

    const swiped = (direction: any, nameToDelete: any) => {
        console.log('removing: ' + nameToDelete);
        setLastDirection(direction);
    };

    const outOfFrame = (name: string) => {
        console.log(name + ' left the screen!');
    };

    const openCard = (characterName: string): void => {
        setCharacters((prevCharacters) =>
            prevCharacters.map((character) =>
                character.name === characterName
                    ? { ...character, isOpened: !character.isOpened }
                    : character
            )
        );
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.cardContainer}>
                {characters.map((character) => (
                    <TinderCard
                        className={styles.swipe}
                        key={character.name}
                        onSwipe={(dir) => swiped(dir, character.name)}
                        onCardLeftScreen={() => outOfFrame(character.name)}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            className={styles.cardWrapper}
                            onClick={() => openCard(character.name)}
                            /* For mobile devices */
                            onTouchEnd={() => openCard(character.name)}
                        >
                            <div className={styles.card}>
                                {character.isOpened ? (
                                    <h3 className={styles.word}>
                                        {character.answer}
                                    </h3>
                                ) : (
                                    <h3 className={styles.word}>
                                        {character.name}
                                    </h3>
                                )}
                            </div>
                        </div>
                    </TinderCard>
                ))}
            </div>
            {lastDirection ? (
                <h2 className={styles.infoText}>You swiped {lastDirection}</h2>
            ) : (
                <h2 className={styles.infoText} />
            )}
        </div>
    );
};

export default CardClient;
