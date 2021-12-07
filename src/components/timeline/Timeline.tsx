/** @jsxImportSource theme-ui */

import { Flex } from '@theme-ui/components';
import { FunctionComponent } from 'react';
import { TimelineChunk } from './TimelineChunk';

export const Timeline: FunctionComponent = () => {
    return (
        <Flex
            sx={{
                backgroundColor: 'secondary',
                width: '100%',
            }}
        >
            <TimelineChunk />
            <TimelineChunk />
            <TimelineChunk />
            <TimelineChunk />
            <TimelineChunk />
            <TimelineChunk isLast={true} />
        </Flex>
    );
};
