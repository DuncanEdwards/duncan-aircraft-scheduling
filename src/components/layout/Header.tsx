/** @jsxImportSource theme-ui */

import { Box } from '@theme-ui/components';
import { FunctionComponent } from 'react';

export const Header: FunctionComponent = () => {
    return (
        <Box sx={{ backgroundColor: 'primary', textAlign: 'center', fontWeight: 'heading', fontSize: 3, p: 3 }}>
            Aircraft Smart Scheduler
        </Box>
    );
};
