/** @jsxImportSource theme-ui */

import { Theme } from 'theme-ui';

export const theme: Theme = {
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
    },
    fontSizes: [12, 14, 16, 20],
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
