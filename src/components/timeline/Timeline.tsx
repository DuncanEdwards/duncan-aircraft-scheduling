/** @jsxImportSource theme-ui */

import { Box, Flex } from '@theme-ui/components';
import { TimelineBar } from './TimelineBar';

import { FC } from 'react';
import { TimelineAxisChunk } from './TimelineAxisChunk';
import { minutesInDay } from '../../shared/constants';

export const Timeline: FC = () => {
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
