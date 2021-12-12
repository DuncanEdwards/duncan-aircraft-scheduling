import { createAction, createReducer } from '@reduxjs/toolkit';
import { IAircraft } from './aircraft';

import { IFlightDetails } from './flightDetails';

export interface RotationState {
    currentAircraft?: IAircraft;
    assignedFlights: IFlightDetails[];
}

const initialState: RotationState = {
    assignedFlights: [],
};

const rotationStore = 'ROTATION_STORE';

const setCurrentAircraft = 'SET_CURRENT_AIRCRAFT';
const setCurrentAircraftAction = createAction<IAircraft>(`${rotationStore}/${setCurrentAircraft}`);

const assignFlight = 'ASSIGN_FLIGHT';
const assignFlightAction = createAction(`${rotationStore}/${assignFlight}`);

const setAllFlights = 'SET_ALL_FLIGHTS';
const setAllFlightsAction = createAction<IFlightDetails[]>(`${rotationStore}/${setAllFlights}`);

const rotationReducer = createReducer<RotationState>(initialState, (builder) => {
    builder.addCase(setCurrentAircraftAction, (state, action) => {
        if (action.payload) {
            state.currentAircraft = action.payload;
        }
    });
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

export { rotationStore, rotationReducer, setCurrentAircraftAction, assignFlightAction, setAllFlightsAction };
