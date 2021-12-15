/** @jsxImportSource theme-ui */

import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import { RotationState, setAssignedFlightsAction } from '../../reducers/rotationReducer';
import { FlightAssignment } from './FlightAssignment';
import flightList from '../../services/allFlights.json';
import { IFlightDetails } from '../../reducers/flightDetails';
import { getHighestUtilizationRotation } from '../../services/getHighestUtilizationRotation';
import { Box, Button } from 'theme-ui';

export const FlightAssignments: FC = () => {
    const { currentAircraft, assignedFlights } = useSelector<RootState, RotationState>((state) => state.ROTATION_STORE);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    const isConfirm = (): boolean => {
        if (assignedFlights.length > 0) {
            return window.confirm('This will remove existing flights. Are you sure?');
        }
        return true;
    };

    const getBestFlightRotation = () => {
        if (!isConfirm()) {
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            const results = getHighestUtilizationRotation(currentAircraft!.base, flightList as IFlightDetails[]);
            setIsLoading(false);
            dispatch(setAssignedFlightsAction(results));
        });
    };

    return (
        <>
            {isLoading && <Box sx={{ pb: 3 }}>Loading best flights...</Box>}
            {!isLoading &&
                assignedFlights.map((flight, index) => (
                    <FlightAssignment key={index} flight={flight} isLast={index === assignedFlights.length - 1} />
                ))}
            <Button
                disabled={isLoading || currentAircraft === undefined}
                variant="primary"
                onClick={getBestFlightRotation}
            >
                Autocreate best
            </Button>
            <Button
                sx={{ ml: 2 }}
                disabled={isLoading || currentAircraft === undefined || assignedFlights.length === 0}
                onClick={() => isConfirm() && dispatch(setAssignedFlightsAction([]))}
            >
                Clear all flights
            </Button>
        </>
    );
};
