/** @jsxImportSource theme-ui */

import { Box, Flex } from '@theme-ui/components';

import { FC } from 'react';
import { AircraftList } from '../aircrafts/AircraftList';
import { FlightAssignments } from '../assignments/FlightAssignments';
import { FlightsList } from '../flights/FlightsList';
import { Timeline } from '../timeline';

export const MainContainer: FC = () => {
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
            <Box sx={{ width: '250px', backgroundColor: 'sideItemsBackground', borderRadius: 4 }}>
                <AircraftList />
            </Box>
            <Flex sx={{ flexDirection: 'column', flex: 1 }}>
                <Box sx={{ flex: 1, px: 3 }}>
                    <FlightAssignments />
                </Box>
                <Timeline />
            </Flex>
            <Box sx={{ width: '250px', backgroundColor: 'sideItemsBackground', borderRadius: 4 }}>
                <FlightsList />
            </Box>
        </Flex>
    );
};
