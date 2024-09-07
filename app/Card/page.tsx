import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './style.css';

const db = [
    {
        name: 'Richard Hendricks',
        url: './img/richard.jpg',
    },
    {
        name: 'Erlich Bachman',
        url: './img/erlich.jpg',
    },
    {
        name: 'Monica Hall',
        url: './img/monica.jpg',
    },
    {
        name: 'Jared Dunn',
        url: './img/jared.jpg',
    },
    {
        name: 'Dinesh Chugtai',
        url: './img/dinesh.jpg',
    },
];

function Card() {
    const characters = db;
    const [lastDirection, setLastDirection] = useState();

    const swiped = (direction: any, nameToDelete: any) => {
        console.log('removing: ' + nameToDelete);
        setLastDirection(direction);
    };

    const outOfFrame = (name: string) => {
        console.log(name + ' left the screen!');
    };

    return (
        <div className='pageContainer'>
            <div className='titleContainer'></div>
            <div className='cardContainer'>
                {characters.map((character) => (
                    <TinderCard
                        className='swipe'
                        key={character.name}
                        onSwipe={(dir) => swiped(dir, character.name)}
                        onCardLeftScreen={() => outOfFrame(character.name)}
                    >
                        <div className='cardWrapper'>
                            <div
                                style={{
                                    backgroundImage:
                                        'url(' + character.url + ')',
                                }}
                                className='card'
                            >
                                <h3>{character.name}</h3>
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
}

export default Card;
