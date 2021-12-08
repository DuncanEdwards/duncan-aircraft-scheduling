import { TimelineSegment, TimelineSegmentType } from './TimelineBar';

import { Box } from 'theme-ui';
import { FunctionComponent } from 'react';

export const TimelineBarSegment: FunctionComponent<{ segment: TimelineSegment }> = ({ segment }) => (
    <Box
        sx={{
            backgroundColor: `plane${TimelineSegmentType[segment.type]}`,
            flex: segment.fractionOfDay,
        }}
    />
);
