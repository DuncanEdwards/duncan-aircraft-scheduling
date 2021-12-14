import { IFlightDetails } from '../reducers/flightDetails';
import { secondsInDay } from '../shared/constants';
import allFlights from './allFlights.json';

export const getFakeApiFlightsPage = async (
    limit: number,
    offset: number,
    origin: string,
    earliestTime: number
): Promise<{ flights: IFlightDetails[]; totalCount: number }> => {
    const matchingFlights = allFlights
        .filter(
            (flightDetails) =>
                flightDetails.origin === origin &&
                flightDetails.departureTime >= earliestTime &&
                flightDetails.arrivalTime <= secondsInDay
        )
        .sort((a, b) =>
            a.departureTime !== b.departureTime ? a.departureTime - b.departureTime : b.arrivalTime - a.arrivalTime
        );
    //Note, the sort order is departureTime ASC, arrivalTime DESC (IE I want the longest earliest flights)
    const matchingFlightsPage = matchingFlights.slice(offset, offset + limit);

    //Made async to mimic how it would be with a proper REST api and fetch
    return Promise.resolve({ flights: matchingFlightsPage, totalCount: matchingFlights.length });
};
