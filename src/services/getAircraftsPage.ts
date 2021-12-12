import config from '../config.json';
import { IAircraft } from '../reducers/aircraft';

export const getAircraftsPage = async (): Promise<IAircraft[]> => {
    const response = await fetch(config.flightsApi.baseUrl + config.flightsApi.aircraftsSubdirectory);
    if (response.ok) {
        const json = await response.json();
        return json.data as IAircraft[];
    }

    return [];
};
