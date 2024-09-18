'use client';
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { categories, Word } from '@/data/categories';
import Navigation from '@/app/navigation/navigation';
import './style.css';

interface CardProps {
    params: {
        categoryName: string;
    };
}

const Card: React.FC<CardProps> = ({ params }) => {
    const [characters, setCharacters] = useState<Word[]>([]);
    const [lastDirection, setLastDirection] = useState<string | undefined>();

    // Decode the parameter to replace '%20' with spaces
    const undecodedHeaderText = params.categoryName;
    const headerText = decodeURIComponent(undecodedHeaderText || '');

    useEffect(() => {
        const selectedCategory = categories.find(
            (cat) => cat.category === params.categoryName
        );
        if (selectedCategory) {
            setCharacters(selectedCategory.words);
        }
    }, [params.categoryName]);

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
        <div className='pageContainer'>
            <Navigation headerText={headerText} />
            <div className='cardContainer'>
                {characters.map((character) => (
                    <TinderCard
                        className='swipe'
                        key={character.name}
                        onSwipe={(dir) => swiped(dir, character.name)}
                        onCardLeftScreen={() => outOfFrame(character.name)}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            className='cardWrapper'
                            onClick={() => openCard(character.name)}
                        >
                            <div
                                style={
                                    {
                                        // backgroundImage: 'url(' + character.url + ')',
                                    }
                                }
                                className='card'
                            >
                                {character.isOpened ? (
                                    <h3 className='word'>{character.answer}</h3>
                                ) : (
                                    <h3 className='word'>{character.name}</h3>
                                )}
                            </div>
                        </div>
                    </TinderCard>
                ))}
            </div>
            {lastDirection ? (
                <h2 className='infoText'>You swiped {lastDirection}</h2>
            ) : (
                <h2 className='infoText' />
            )}
        </div>
    );
};

export default Card;
