/** @jsxImportSource theme-ui */

import { Theme } from 'theme-ui';

export const theme: Theme = {
    buttons: {
        primary: {
            color: 'text',
            bg: 'lightblue',
            cursor: 'pointer',
            ':hover': {
                bg: '#5fb15f',
            },
            ':disabled': {
                opacity: 0.5,
            },
        },
    },
    colors: {
        text: '#000',
        secondaryText: '#6F6F6F',
        background: '#eee',
        primary: '#ecf4be',
        secondary: '#F5F5F5',

        planeIdle: '#b8b8b8',
        planeService: '#70acb4',
        planeTurnaround: '#7573b6',

        sectionBackground: 'white',
        optionSelectedColor: '#5fb15f',
        sideItemsBackground: '#ddd',
    },
    fontSizes: [12, 14, 16, 20, 24],
    fontWeights: {
        heading: 600,
    },
    space: [0, 4, 8, 16, 24, 32, 64, 128],
    styles: {
        root: {
            '*': {
                fontFamily: '"Rubik", sans-serif',
                fontWeight: 400,
            },
        },
    },
};
