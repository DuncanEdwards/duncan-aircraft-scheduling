/** @jsxImportSource theme-ui */

import { Box, Flex } from '@theme-ui/components';

import { FunctionComponent } from 'react';
import { Timeline } from '../timeline';

export const MainContainer: FunctionComponent = () => {
    return (
        <Flex sx={{ width: '1280px', margin: 'auto', p: 3, flex: 1, backgroundColor: 'orange' }}>
            <Box sx={{ width: '250px', backgroundColor: 'lightBlue' }}>Aircraft</Box>
            <Box sx={{ flex: 1 }}>
                <Timeline />
            </Box>
            <Box sx={{ width: '250px', backgroundColor: 'lightYellow' }}>Aircraft</Box>
        </Flex>
    );
};
