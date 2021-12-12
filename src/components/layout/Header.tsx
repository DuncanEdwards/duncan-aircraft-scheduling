/** @jsxImportSource theme-ui */

import { Box } from '@theme-ui/components';
import { FC } from 'react';

export const Header: FC = () => {
    return (
        <Box sx={{ backgroundColor: 'primary', textAlign: 'center', fontWeight: 'heading', fontSize: 4, p: 3 }}>
            <Box sx={{ flex: 1, textAlign: 'center' }}>Aircraft Smart Scheduler</Box>
        </Box>
    );
};
