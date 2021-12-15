import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex } from 'theme-ui';
import { RootState } from '../../reducers/rootReducer';
import { RotationState, setCurrentPageOfFlightsAction } from '../../reducers/rotationReducer';
import { getFakeApiFlightsPage } from '../../services/getFakeApiFlightsPage';
import { Flight } from './Flight';
import { FlightPager } from './FlightPager';
import config from '../../config.json';

export const FlightsList: FC = () => {
    const pageSize = 10;

    const [page, setPage] = useState<number>(1);
    const [totalCount, setTotalCount] = useState<number>(0);
    const { currentAircraft, assignedFlights, currentPageOfFlights } = useSelector<RootState, RotationState>(
        (state) => state.ROTATION_STORE
    );
    const dispatch = useDispatch();

    const getCurrentOriginAirportAndEarliestTime = (): { origin: string; earliestTime: number } => {
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

    useEffect(() => setPage(1), [assignedFlights.length]);

    useEffect(() => {
        const { origin, earliestTime } = getCurrentOriginAirportAndEarliestTime();
        getFakeApiFlightsPage(pageSize, (page - 1) * pageSize, origin, earliestTime).then((results) => {
            dispatch(setCurrentPageOfFlightsAction(results.flights));
            console.log(results, origin);
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
