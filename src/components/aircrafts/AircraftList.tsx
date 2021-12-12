import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAircraft } from '../../reducers/aircraft';
import { RootState } from '../../reducers/rootReducer';
import { RotationState, setCurrentAircraftAction } from '../../reducers/rotationReducer';
import { getAircraftsPage } from '../../services/getAircraftsPage';
import { secondsInDay } from '../../shared/constants';
import { Aircraft } from './Aircraft';

export const AircraftList: FC = () => {
    const [aircrafts, setAircrafts] = useState<IAircraft[]>([]);
    const dispatch = useDispatch();
    const assignedFlights = useSelector<RootState, RotationState>((state) => state.ROTATION_STORE).assignedFlights;

    useEffect(() => {
        getAircraftsPage().then((results) => {
            setAircrafts(results);
            //This is just hardcoded to the first being selected UFN
            if (results.length > 0) {
                dispatch(setCurrentAircraftAction(results[0]));
            }
        });
    }, [dispatch]);

    const utilization =
        assignedFlights.reduce((previous, current) => previous + (current.arrivalTime - current.departureTime), 0) /
        secondsInDay;

    return (
        <>
            {aircrafts.map((aircraft, index) => (
                <Aircraft key={index} aircraft={aircraft} isSelected={true} utilization={utilization} />
            ))}
        </>
    );
};
