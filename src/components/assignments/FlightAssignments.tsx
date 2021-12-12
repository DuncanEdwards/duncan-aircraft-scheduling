/** @jsxImportSource theme-ui */

import { FC, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IsAutoContext } from '../../context/IsAutoContext';
import { RootState } from '../../reducers/rootReducer';
import { RotationState, setAllFlightsAction } from '../../reducers/rotationReducer';
import { FlightAssignment } from './FlightAssignment';
import flightList from '../../services/allFlights.json';
import { IFlightDetails } from '../../reducers/flightDetails';
import { getHighestUtilizationRotation } from '../../services/getHighestUtilizationRotation';

export const FlightAssignments: FC = () => {
    const assignedFlights = useSelector<RootState, RotationState>((state) => state.ROTATION_STORE).assignedFlights;
    const { isAuto } = useContext(IsAutoContext) || {};
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuto) {
            setIsLoading(true);
            setTimeout(() => {
                const results = getHighestUtilizationRotation(flightList as IFlightDetails[]);
                setIsLoading(false);
                dispatch(setAllFlightsAction(results));
            });
        } else {
            setIsLoading(false);
        }
    }, [isAuto, dispatch]);

    return (
        <>
            {isLoading && <div>Loading flights...</div>}
            {!(isLoading && isAuto) &&
                assignedFlights.map((flight, index) => <FlightAssignment key={index} flight={flight} />)}
        </>
    );
};
