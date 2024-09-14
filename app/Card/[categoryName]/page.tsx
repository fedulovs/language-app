'use client';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './style.css';

interface Character {
    name: string;
    answer: string;
    url: string;
    isOpened: boolean;
}

interface CardProps {
    params: {
        categoryName: string;
    };
}

const Card: React.FC<CardProps> = ({ params }) => {
    const [characters, setCharacters] = useState<Character[]>([
        {
            name: 'One',
            answer: 'Yksi',
            url: './img/richard.jpg',
            isOpened: false,
        },
        {
            name: 'Two',
            answer: 'Kaksi',
            url: './img/erlich.jpg',
            isOpened: false,
        },
        {
            name: 'Three',
            answer: 'Kolme',
            url: './img/monica.jpg',
            isOpened: false,
        },
        {
            name: 'Four',
            answer: 'Nelja',
            url: './img/jared.jpg',
            isOpened: false,
        },
        {
            name: 'Five',
            answer: 'Viisi',
            url: './img/dinesh.jpg',
            isOpened: false,
        },
    ]);

    const [lastDirection, setLastDirection] = useState();

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
            <h2 className='categoryNameHeader'>{params.categoryName}</h2>
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
                                        /* Image will be added later */
                                        // backgroundImage:
                                        //     'url(' + character.url + ')',
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
