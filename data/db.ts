import Dexie, { type EntityTable } from 'dexie';

interface Word {
    id: number;
    name: string;
    answer: string;
    url: string;
    isOpened: boolean;
}

const db = new Dexie('WordsDatabase') as Dexie & {
    words: EntityTable<
        Word,
        'id' // primary key "id" (for the typings only)
    >;
};

// Schema declaration:
db.version(1).stores({
    words: '++id, name, answer, url, isOpened', // primary key "id" (for the runtime!)
});

export type { Word };
export { db };
