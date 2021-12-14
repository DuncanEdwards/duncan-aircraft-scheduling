import { FC, useEffect, useState } from 'react';
import { Box, Button, Flex } from 'theme-ui';
import { IFlightDetails } from '../../reducers/flightDetails';
import { getFakeApiFlightsPage } from '../../services/getFakeApiFlightsPage';
import { Flight } from './Flight';
import { FlightPager } from './FlightPager';

export const FlightsList: FC = () => {
    const pageSize = 10;

    const [page, setPage] = useState<number>(1);

    const [flightsData, setFlightsData] = useState<{ flights: IFlightDetails[]; totalCount: number }>({
        flights: [],
        totalCount: 0,
    });

    useEffect(() => {
        getFakeApiFlightsPage(pageSize, (page - 1) * pageSize, 'EGKK', 0).then((results) =>
            setFlightsData({ flights: results.flights, totalCount: results.totalCount })
        );
    }, [setFlightsData, page]);

    const { flights, totalCount } = flightsData;
    return (
        <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <Box sx={{ flex: 1 }}>
                {flights.map((flight, index) => (
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
