import { IFlightDetails } from '../reducers/flightDetails';
import { getFlightsPage } from './getFlightsPage';

export const getAllFlights = async (): Promise<IFlightDetails[]> => {
    const limit: number = 25;
    let offset: number = 0;
    let allFlights: IFlightDetails[] = [];
    let flightsPage: IFlightDetails[] = [];

    do {
        flightsPage = await getFlightsPage(limit, offset);
        allFlights.push(...flightsPage);
        offset += limit;
    } while (flightsPage.length === limit);

    return allFlights;
};
