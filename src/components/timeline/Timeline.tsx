/** @jsxImportSource theme-ui */

import { Box, Flex } from '@theme-ui/components';

import { FunctionComponent } from 'react';
import { TimelineAxisChunk } from './TimelineAxisChunk';
import { TimelineBar } from './TimelineBar';

export const minutesInDay: number = 24 * 60;

export const Timeline: FunctionComponent = () => {
    const segmentCount: number = 8;
    return (
        <Box>
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
