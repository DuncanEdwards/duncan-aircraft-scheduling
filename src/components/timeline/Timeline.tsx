/** @jsxImportSource theme-ui */

import { Box, Flex } from '@theme-ui/components';
import { FunctionComponent } from 'react';
import { TimelineChunk } from './TimelineChunk';

export const Timeline: FunctionComponent = () => {
    const segmentCount: number = 8;
    const minutesInDay: number = 24 * 60;

    return (
        <Box>
            <Flex>
                {new Array(segmentCount).fill(null).map((item, i) => (
                    <TimelineChunk
                        key={i}
                        minutes={(minutesInDay / segmentCount) * i}
                        isLast={i + 1 === segmentCount}
                    />
                ))}
            </Flex>
            <Flex sx={{ height: '40px', backgroundColor: 'planeNoBooking', width: '100%' }}>
                <Box sx={{ flex: 0.2, backgroundColor: 'yellow' }}></Box>
                <Box sx={{ flex: 0.7, backgroundColor: 'red' }}></Box>
            </Flex>
        </Box>
    );
};
