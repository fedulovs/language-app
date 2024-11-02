'use client';
import { useState } from 'react';
import { db } from '../../data/db';
import styles from './add-words.module.css';

const AddWordsForm = () => {
    const [name, setName] = useState('');
    const [answer, setAnswer] = useState('');
    const [status, setStatus] = useState('');
    const [url, setUrl] = useState('');
    const [isOpened, setIsOpened] = useState(false);

    async function addWord() {
        try {
            // Add the new word
            const id = await db.words.add({
                name,
                answer,
                url,
                isOpened,
            });

            setStatus(`Word ${name} successfully added. Got id ${id}`);
            setName('');
            setAnswer('');
            setUrl('');
            setIsOpened(false);
        } catch (error) {
            setStatus(`Failed to add ${name}: ${error}`);
        }
    }

    return (
        <>
            <p className={styles.info}>{status}</p>
            <div className={styles.inputContainer}>
                <p className={styles.inputLabel}>Word:</p>
                <input
                    type='text'
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                />
                <p className={styles.inputLabel}>Answer</p>
                <input
                    type='text'
                    value={answer}
                    onChange={(ev) => setAnswer(ev.target.value)}
                />
                <button onClick={addWord}>Add</button>
            </div>
        </>
    );
};

export default AddWordsForm;
