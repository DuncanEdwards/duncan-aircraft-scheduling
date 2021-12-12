import { Flex } from 'theme-ui';
import { FunctionComponent } from 'react';
import { IFlightDetails } from '../../reducers/flightDetails';
import { RootState } from '../../reducers/rootReducer';
import { RotationState } from '../../reducers/rotationReducer';
import { TimelineBarSegment } from './TimelineBarSegment';
import config from '../../config.json';
import { useSelector } from 'react-redux';
import { secondsInDay } from '../../shared/constants';

export enum TimelineSegmentType {
    Idle,
    Service,
    Turnaround,
}

export type TimelineSegment = {
    fractionOfDay: number;
    type: TimelineSegmentType;
};

const secondsAsDayFraction = (seconds: number): number => seconds / secondsInDay;

const getTimelineSegments = (assignedFlights: IFlightDetails[]): TimelineSegment[] => {
    let timelineSegments: TimelineSegment[] = [];
    const { turnaroundTimeInSeconds } = config;

    for (let i = 0; i < assignedFlights.length; i++) {
        const previousTime = i === 0 ? 0 : assignedFlights[i - 1].arrivalTime + turnaroundTimeInSeconds;
        const currentAssignedFlight = assignedFlights[i];
        const timeSinceLastFlight = currentAssignedFlight.departureTime - previousTime;
        if (timeSinceLastFlight > 0) {
            timelineSegments.push({
                fractionOfDay: secondsAsDayFraction(timeSinceLastFlight),
                type: TimelineSegmentType.Idle,
            });
        }
        timelineSegments.push({
            fractionOfDay: secondsAsDayFraction(
                currentAssignedFlight.arrivalTime - currentAssignedFlight.departureTime
            ),
            type: TimelineSegmentType.Service,
        });
        timelineSegments.push({
            fractionOfDay: secondsAsDayFraction(
                Math.min(secondsInDay - currentAssignedFlight.arrivalTime, turnaroundTimeInSeconds)
            ),
            type: TimelineSegmentType.Turnaround,
        });
    }

    const finalFlightFinishedTime =
        assignedFlights.length === 0
            ? 0
            : assignedFlights[assignedFlights.length - 1].arrivalTime + turnaroundTimeInSeconds;
    if (finalFlightFinishedTime < secondsInDay) {
        timelineSegments.push({
            fractionOfDay: secondsAsDayFraction(secondsInDay - finalFlightFinishedTime),
            type: TimelineSegmentType.Idle,
        });
    }

    console.log('timelineSegments', timelineSegments);

    return timelineSegments;
};

export const TimelineBar: FunctionComponent = () => {
    const assignedFlights = useSelector<RootState, RotationState>((state) => state.ROTATION_STORE).assignedFlights;

    return (
        <Flex sx={{ height: '40px', backgroundColor: 'planeNoBooking', width: '100%' }}>
            {getTimelineSegments(assignedFlights).map((segment, index) => (
                <TimelineBarSegment segment={segment} key={index} />
            ))}
        </Flex>
    );
};
