/** @jsxImportSource theme-ui */

import { Box, Flex } from '@theme-ui/components';

import { FunctionComponent } from 'react';
import { FlightAssignments } from '../assignments/FlightAssignments';
import { Timeline } from '../timeline';

export const MainContainer: FunctionComponent = () => {
    return (
        <Flex
            sx={{
                width: '1280px',
                margin: 'auto',
                p: 3,
                flex: 1,
                alignItems: 'top',
            }}
        >
            <Box sx={{ width: '250px', backgroundColor: 'lightBlue' }}>Aircraft</Box>
            <Flex sx={{ flexDirection: 'column', flex: 1 }}>
                <Box sx={{ flex: 1, px: 3 }}>
                    <FlightAssignments />
                </Box>
                <Timeline />
            </Flex>
            <Box sx={{ width: '250px', backgroundColor: 'lightYellow' }}>Aircraft</Box>
        </Flex>
    );
};
