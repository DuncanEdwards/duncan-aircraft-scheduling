import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex } from 'theme-ui';
import { RootState } from '../../reducers/rootReducer';
import { RotationState, setCurrentPageOfFlightsAction } from '../../reducers/rotationReducer';
import { getFakeApiFlightsPage } from '../../services/getFakeApiFlightsPage';
import { Flight } from './Flight';
import { FlightPager } from './FlightPager';
import config from '../../config.json';
import { IFlightDetails } from '../../reducers/flightDetails';
import { IAircraft } from '../../reducers/aircraft';

const getCurrentOriginAirportAndEarliestTime = (
    assignedFlights: IFlightDetails[],
    currentAircraft: IAircraft | undefined
): { origin: string; earliestTime: number } => {
    if (assignedFlights.length === 0) {
        const origin = currentAircraft === undefined ? '' : currentAircraft.base;
        return { origin, earliestTime: 0 };
    }

    const lastFlight = assignedFlights[assignedFlights.length - 1];
    return {
        origin: lastFlight.destination,
        earliestTime: lastFlight.arrivalTime + config.turnaroundTimeInSeconds,
    };
};

export const FlightsList: FC = () => {
    const pageSize = 10;

    const [page, setPage] = useState<number>(1);
    //We only need the paging in the flight list, so we store locally and don't need to send to Redux
    const [totalCount, setTotalCount] = useState<number>(0);
    const { currentAircraft, assignedFlights, currentPageOfFlights } = useSelector<RootState, RotationState>(
        (state) => state.ROTATION_STORE
    );
    const dispatch = useDispatch();

    // When an assigned flight is added or removed, the source airport changes, and we reset the page to 1
    useEffect(() => setPage(1), [assignedFlights.length]);

    useEffect(() => {
        const { origin, earliestTime } = getCurrentOriginAirportAndEarliestTime(assignedFlights, currentAircraft);
        getFakeApiFlightsPage(pageSize, (page - 1) * pageSize, origin, earliestTime).then((results) => {
            dispatch(setCurrentPageOfFlightsAction(results.flights));
            setTotalCount(results.totalCount);
        });
    }, [setTotalCount, page, dispatch, assignedFlights, currentAircraft]);
    return (
        <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <Box sx={{ flex: 1 }}>
                {currentPageOfFlights.map((flight, index) => (
                    <Flight key={index} flight={flight} />
                ))}
            </Box>
            <FlightPager
                page={page}
                pageSize={pageSize}
                totalCount={totalCount}
                setCurrentPage={(page) => setPage(page)}
            />
        </Flex>
    );
};
