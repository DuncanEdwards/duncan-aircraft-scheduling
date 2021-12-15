import { createAction, createReducer } from '@reduxjs/toolkit';
import { IAircraft } from './aircraft';

import { IFlightDetails } from './flightDetails';

export interface RotationState {
    currentAircraft?: IAircraft;
    assignedFlights: IFlightDetails[];
    currentPageOfFlights: IFlightDetails[];
}

const initialState: RotationState = {
    assignedFlights: [],
    currentPageOfFlights: [],
};

const rotationStore = 'ROTATION_STORE';

const setCurrentAircraft = 'SET_CURRENT_AIRCRAFT';
const setCurrentAircraftAction = createAction<IAircraft>(`${rotationStore}/${setCurrentAircraft}`);

const assignFlight = 'ASSIGN_FLIGHT';
const assignFlightAction = createAction<IFlightDetails>(`${rotationStore}/${assignFlight}`);

const unassignFlight = 'UNASSIGN_FLIGHT';
const unassignFlightAction = createAction<IFlightDetails>(`${rotationStore}/${unassignFlight}`);

const setAssignedFlights = 'SET_ASSIGNED_FLIGHTS';
const setAssignedFlightsAction = createAction<IFlightDetails[]>(`${rotationStore}/${setAssignedFlights}`);

const setCurrentPageOfFlights = 'SET_CURRENT_PAGE_OF_FLIGHTS';
const setCurrentPageOfFlightsAction = createAction<IFlightDetails[]>(`${rotationStore}/${setCurrentPageOfFlights}`);

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
    builder.addCase(setAssignedFlightsAction, (state, action) => {
        if (action.payload) {
            state.assignedFlights = action.payload;
        }
    });
    builder.addCase(unassignFlightAction, (state, action) => {
        if (action.payload) {
            state.assignedFlights = state.assignedFlights.filter((flight) => flight.id !== action.payload.id);
        }
    });
    builder.addCase(setCurrentPageOfFlightsAction, (state, action) => {
        console.log('action.payload', action.payload);
        if (action.payload) {
            state.currentPageOfFlights = action.payload;
        }
    });
});

export {
    rotationStore,
    rotationReducer,
    setCurrentAircraftAction,
    assignFlightAction,
    setAssignedFlightsAction,
    setCurrentPageOfFlightsAction,
    unassignFlightAction,
};
