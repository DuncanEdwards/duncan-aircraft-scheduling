/** @jsxImportSource theme-ui */

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import { RotationState } from '../../reducers/rotationReducer';
import { FlightAssignment } from './FlightAssignment';

export const FlightAssignments: FC = () => {
    const assignedFlights = useSelector<RootState, RotationState>((state) => state.ROTATION_STORE).assignedFlights;

    return (
        <>
            {assignedFlights.map((flight, index) => (
                <FlightAssignment key={index} flight={flight} />
            ))}
        </>
    );
};
