/** @jsxImportSource theme-ui */

import { Box, Flex } from '@theme-ui/components';
import { FC } from 'react';
import { IFlightDetails } from '../../reducers/flightDetails';
import { FlightOrDestinationSection } from '../common/FlightOrDestinationSection';

const getDurationDisplayTime = (durationInSeconds: number) => {
    return (
        parseInt((durationInSeconds / 60 / 60).toString()).toString() +
        'h ' +
        ((durationInSeconds / 60) % 60).toString()
    );
};

export const FlightAssignment: FC<{ flight: IFlightDetails }> = ({ flight }) => {
    return (
        <Box
            sx={{
                backgroundColor: 'sectionBackground',
                mb: 3,
                p: 3,
                fontSize: 3,
                borderRadius: 4,
                boxShadow: 'rgb(0 0 0 / 0.1) 0px 4px 8px 0px',
            }}
        >
            <Flex sx={{ justifyContent: 'space-between' }}>
                <FlightOrDestinationSection time={flight.departureTime} airportCode={flight.origin} />
                <Flex sx={{ flex: 1, justifyContent: 'center' }}>
                    <Flex sx={{ backgroundColor: 'background', alignItems: 'center', p: 1, px: 3, borderRadius: 8 }}>
                        <Box sx={{ fontSize: 1, mr: 2 }}>
                            <Box>Flight: {flight.id}</Box>
                        </Box>
                        <Box sx={{ fill: 'planeService', width: '16px' }}>
                            <svg viewBox="0 0 28 28">
                                <g>
                                    <path d="M25.847 15.986a1.54 1.54 0 00-.47-1.124 1.54 1.54 0 00-1.124-.47h-6.012l-6.026-10.23h-2.169l2.439 10.23-5.813.028-2.304-2.786h-2.17l1.18 4.352-1.231 4.394h2.139l2.384-2.798 5.785-.027L9.83 27.84h2.156l6.226-10.286h6.043c.441 0 .818-.148 1.124-.455.31-.31.47-.686.47-1.114h-.002z"></path>
                                </g>
                            </svg>
                        </Box>
                        <Box sx={{ fontSize: 1, ml: 2 }}>
                            <Box>{getDurationDisplayTime(flight.arrivalTime - flight.departureTime)}</Box>
                        </Box>
                    </Flex>
                </Flex>
                <FlightOrDestinationSection time={flight.arrivalTime} airportCode={flight.destination} />
            </Flex>
        </Box>
    );
};
