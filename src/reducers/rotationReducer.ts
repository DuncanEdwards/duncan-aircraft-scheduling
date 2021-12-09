import { createAction, createReducer } from '@reduxjs/toolkit';

import { IFlightDetails } from './flightDetails';

export interface RotationState {
    currentPlane?: string;
    assignedFlights: IFlightDetails[];
}

const initialState: RotationState = {
    assignedFlights: [
        { id: 'AS1234', departureTime: 27000, arrivalTime: 33300, origin: 'LHBP', destination: 'LFSB' },
        { id: 'AS1126', departureTime: 35100, arrivalTime: 41700, origin: 'LIRN', destination: 'LFSB' },
        { id: 'AS1179', departureTime: 56100, arrivalTime: 84000, origin: 'LFSB', destination: 'LEST' },
    ],
};

const rotationStore = 'ROTATION_STORE';

const assignFlight = 'ASSIGN_FLIGHT';
const assignFlightAction = createAction(`${rotationStore}/${assignFlight}`);

const rotationReducer = createReducer<RotationState>(initialState, (builder) => {
    builder.addCase(assignFlightAction, (state, action) => {
        if (action.payload) {
            state.assignedFlights = [...state.assignedFlights, action.payload];
        }
    });
});

export { rotationStore, rotationReducer, assignFlightAction };
