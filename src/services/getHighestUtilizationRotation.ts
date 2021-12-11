import { IFlightDetails } from '../reducers/flightDetails';
import config from '../config.json';

interface INodeDetails {
    currentOrigin: string;
    currentStartTime: number;
    bestFlightList: IFlightDetails[];
    bestUtilizedSeconds: number;
    currentFlightList: IFlightDetails[];
    currentUtilizedSeconds: number;
}

export const getHighestUtilizationRotation = (flightDetails: IFlightDetails[]): IFlightDetails[] => {
    let nodeDetails: INodeDetails = {
        currentOrigin: 'EGKK',
        currentStartTime: 0,
        bestFlightList: [],
        bestUtilizedSeconds: 0,
        currentFlightList: [],
        currentUtilizedSeconds: 0,
    };

    recursiveFlightNodeCalculator(flightDetails, nodeDetails);

    console.log('results', nodeDetails.bestUtilizedSeconds, nodeDetails.bestFlightList);

    return [];
};

const recursiveFlightNodeCalculator = (flightDetails: IFlightDetails[], nodeDetails: INodeDetails) => {
    const validFlights = flightDetails.filter(
        (flightDetails) =>
            flightDetails.origin === nodeDetails.currentOrigin &&
            flightDetails.departureTime >= nodeDetails.currentStartTime &&
            flightDetails.arrivalTime <= 24 * 60 * 60 //TODO:Reuse
    );

    if (validFlights.length > 0) {
        validFlights.forEach((flight) => {
            const flightTimeInSeconds = flight.arrivalTime - flight.departureTime;
            nodeDetails.currentOrigin = flight.destination;
            nodeDetails.currentStartTime = flight.arrivalTime + config.turnaroundTimeInSeconds;
            nodeDetails.currentFlightList.push(flight);
            nodeDetails.currentUtilizedSeconds += flightTimeInSeconds;
            recursiveFlightNodeCalculator(flightDetails, nodeDetails);
        });
    }

    if (nodeDetails.currentUtilizedSeconds > nodeDetails.bestUtilizedSeconds) {
        nodeDetails.bestUtilizedSeconds = nodeDetails.currentUtilizedSeconds;
        nodeDetails.bestFlightList = [...nodeDetails.currentFlightList];
    }

    const poppedItem = nodeDetails.currentFlightList.pop();
    if (poppedItem != undefined) {
        nodeDetails.currentUtilizedSeconds -= poppedItem!.arrivalTime - poppedItem!.departureTime;
    }
};