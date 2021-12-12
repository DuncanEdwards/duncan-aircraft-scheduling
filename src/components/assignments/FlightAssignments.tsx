/** @jsxImportSource theme-ui */

import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import { RotationState, setAllFlightsAction } from '../../reducers/rotationReducer';
import { FlightAssignment } from './FlightAssignment';
import flightList from '../../services/allFlights.json';
import { IFlightDetails } from '../../reducers/flightDetails';
import { getHighestUtilizationRotation } from '../../services/getHighestUtilizationRotation';
import { Box, Button } from 'theme-ui';

export const FlightAssignments: FC = () => {
    const { currentAircraft, assignedFlights } = useSelector<RootState, RotationState>((state) => state.ROTATION_STORE);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    const getBestFlightRotation = () => {
        if (assignedFlights.length > 0) {
            if (!window.confirm('This will remove existing flights. Are you sure?')) {
                return;
            }
        }
        setIsLoading(true);
        setTimeout(() => {
            const results = getHighestUtilizationRotation(currentAircraft!.base, flightList as IFlightDetails[]);
            setIsLoading(false);
            dispatch(setAllFlightsAction(results));
        });
    };

    return (
        <>
            {isLoading && <Box sx={{ pb: 3 }}>Loading best flights...</Box>}
            {!isLoading && assignedFlights.map((flight, index) => <FlightAssignment key={index} flight={flight} />)}
            <Button
                disabled={isLoading || currentAircraft === undefined}
                variant="primary"
                onClick={getBestFlightRotation}
            >
                Autoselect optimal rotation
            </Button>
        </>
    );
};
