/** @jsxImportSource theme-ui */

import { FC } from 'react';
import { Box } from 'theme-ui';

const getDisplayTime = (secondsFromStartOfDay: number) => {
    return (
        parseInt((secondsFromStartOfDay / 60 / 60).toString())
            .toString()
            .padStart(2, '0') +
        ':' +
        ((secondsFromStartOfDay / 60) % 60).toString()
    );
};

export const FlightOrDestinationSection: FC<{ time: number; airportCode: string }> = ({ time, airportCode }) => {
    return (
        <Box>
            <Box>{getDisplayTime(time)}</Box>
            <Box sx={{ color: 'secondaryText', fontSize: 1 }}>{airportCode}</Box>
        </Box>
    );
};
