/** @jsxImportSource theme-ui */

import { Theme } from 'theme-ui';

export const theme: Theme = {
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#ecf4be',
        secondary: '#90d2c3',

        planeIdle: '#d8d8d8',
        planeService: '#70acb4',
        planeTurnaround: '#7573b6',
    },
    fontSizes: [12, 14, 16, 20],
    fontWeights: {
        heading: 600,
    },
    space: [0, 4, 8, 16, 24, 32, 64, 128],
    styles: {
        root: {
            '*': {
                fontFamily: '"Raleway", sans-serif',
                fontWeight: 400,
            },
        },
    },
};
