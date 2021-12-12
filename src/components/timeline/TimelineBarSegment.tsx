import { TimelineSegment, TimelineSegmentType } from './TimelineBar';

import { Box } from 'theme-ui';
import { FC } from 'react';

export const TimelineBarSegment: FC<{ segment: TimelineSegment }> = ({ segment }) => (
    <Box
        sx={{
            backgroundColor: `plane${TimelineSegmentType[segment.type]}`,
            flex: segment.fractionOfDay,
        }}
    />
);
