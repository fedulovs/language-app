export interface Word {
    name: string;
    answer: string;
    url: string;
    isOpened: boolean;
}

export interface Category {
    category: string;
    words: Word[];
}

export const categories: Category[] = [
    {
        category: 'Numbers',
        words: [
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
        ],
    },
    {
        category: 'Questions',
        words: [
            {
                name: 'Where?',
                answer: 'Missä?',
                url: './img/questions.jpg',
                isOpened: false,
            },
            // other words
        ],
    },

    {
        category: 'Food',
        words: [
            {
                name: 'Food',
                answer: 'Ruoka',
                url: './img/questions.jpg',
                isOpened: false,
            },
            // other words
        ],
    },

    {
        category: 'Directions',
        words: [
            {
                name: 'Left',
                answer: 'Vasemalla',
                url: './img/questions.jpg',
                isOpened: false,
            },
            {
                name: 'Right',
                answer: 'Oikealla',
                url: './img/questions.jpg',
                isOpened: false,
            },
        ],
    },
    {
        category: 'Countries',
        words: [
            {
                name: 'Finland',
                answer: 'Suomi',
                url: './img/questions.jpg',
                isOpened: false,
            },
            {
                name: 'Sweden',
                answer: 'Ruotsi',
                url: './img/questions.jpg',
                isOpened: false,
            },
        ],
    },
    {
        category: 'Body Parts',
        words: [
            {
                name: 'Hand',
                answer: 'Käsi',
                url: './img/questions.jpg',
                isOpened: false,
            },
            {
                name: 'Leg',
                answer: 'Jalka',
                url: './img/questions.jpg',
                isOpened: false,
            },
        ],
    },

    {
        category: 'Top verbs',
        words: [
            {
                name: 'To go',
                answer: 'Menna',
                url: './img/questions.jpg',
                isOpened: false,
            },
            {
                name: 'To leave',
                answer: 'Lähteä',
                url: './img/questions.jpg',
                isOpened: false,
            },
        ],
    },
];
