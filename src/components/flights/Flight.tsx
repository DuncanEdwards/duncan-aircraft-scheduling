import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Flex } from 'theme-ui';
import { IFlightDetails } from '../../reducers/flightDetails';
import { assignFlightAction } from '../../reducers/rotationReducer';
import { FlightOrDestinationSection } from '../common/FlightOrDestinationSection';

export const Flight: FC<{ flight: IFlightDetails }> = ({ flight }) => {
    const dispatch = useDispatch();

    return (
        <Flex
            sx={{
                backgroundColor: 'sectionBackground',
                mb: 1,
                p: 2,
                fontSize: 1,
                borderRadius: 4,
                boxShadow: 'rgb(0 0 0 / 0.1) 0px 4px 8px 0px',
                justifyContent: 'space-between',
            }}
        >
            <FlightOrDestinationSection airportCode={flight.origin} time={flight.departureTime} />
            <Box sx={{ textAlign: 'center' }}>
                <Box>{flight.id}</Box>
                <Button sx={{ fontSize: 0, p: 1, mt: 1 }} onClick={() => dispatch(assignFlightAction(flight))}>
                    Select
                </Button>
            </Box>
            <FlightOrDestinationSection airportCode={flight.destination} time={flight.arrivalTime} />
        </Flex>
    );
};
