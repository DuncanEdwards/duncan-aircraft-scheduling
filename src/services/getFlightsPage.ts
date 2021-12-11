import { IFlightDetails } from '../reducers/flightDetails';
import config from '../config.json';

interface IPagination {
    offset: number;
    limit: number;
    total: number;
}

export const getFlightsPage = async (limit: number, offset: number): Promise<IFlightDetails[]> => {
    const response = await fetch(
        config.flightsApi.baseUrl + config.flightsApi.flightsSubdirectory + `?limit=${limit}&offset=${offset}`
    );
    if (response.ok) {
        const json = await response.json();
        return json.data.map((row: any) => ({
            id: row.id,
            arrivalTime: row.arrivaltime,
            departureTime: row.departuretime,
            destination: row.destination,
            origin: row.origin,
        }));
    }

    return [];
};
