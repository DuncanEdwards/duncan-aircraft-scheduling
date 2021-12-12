import { createAction, createReducer } from '@reduxjs/toolkit';

import { IFlightDetails } from './flightDetails';

export interface RotationState {
    currentPlane?: string;
    assignedFlights: IFlightDetails[];
}

const initialState: RotationState = {
    assignedFlights: [],
};

const rotationStore = 'ROTATION_STORE';

const assignFlight = 'ASSIGN_FLIGHT';
const assignFlightAction = createAction(`${rotationStore}/${assignFlight}`);

const setAllFlights = 'SET_ALL_FLIGHTS';
const setAllFlightsAction = createAction<IFlightDetails[]>(`${rotationStore}/${setAllFlights}`);

const rotationReducer = createReducer<RotationState>(initialState, (builder) => {
    builder.addCase(assignFlightAction, (state, action) => {
        if (action.payload) {
            state.assignedFlights = [...state.assignedFlights, action.payload];
        }
    });
    builder.addCase(setAllFlightsAction, (state, action) => {
        if (action.payload) {
            state.assignedFlights = action.payload;
        }
    });
});

export { rotationStore, rotationReducer, assignFlightAction, setAllFlightsAction };
