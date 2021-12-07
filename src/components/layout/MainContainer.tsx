/** @jsxImportSource theme-ui */

import { Box } from '@theme-ui/components';
import { FunctionComponent } from 'react';
import { Timeline } from '../timeline';

export const MainContainer: FunctionComponent = () => {
    return (
        <Box sx={{ maxWidth: '1400px', margin: 'auto', p: 3 }}>
            <Timeline />
        </Box>
    );
};
