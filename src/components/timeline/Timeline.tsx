/** @jsxImportSource theme-ui */

import { Box, Flex } from '@theme-ui/components';
import { TimelineBar, minutesInDay } from './TimelineBar';

import { FunctionComponent } from 'react';
import { TimelineAxisChunk } from './TimelineAxisChunk';

export const Timeline: FunctionComponent = () => {
    const segmentCount: number = 8;
    return (
        <Box sx={{ paddingX: 5 }}>
            <Flex>
                {new Array(segmentCount).fill(null).map((item, i) => (
                    <TimelineAxisChunk
                        key={i}
                        minutes={(minutesInDay / segmentCount) * i}
                        isLast={i + 1 === segmentCount}
                    />
                ))}
            </Flex>
            <TimelineBar />
        </Box>
    );
};
