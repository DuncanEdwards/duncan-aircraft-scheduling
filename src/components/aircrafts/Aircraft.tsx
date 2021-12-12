import { FC } from 'react';
import { Box, Donut, Flex } from 'theme-ui';
import { IAircraft } from '../../reducers/aircraft';

export const Aircraft: FC<{ aircraft: IAircraft; isSelected: boolean; utilization: number }> = ({
    aircraft,
    isSelected,
    utilization,
}) => {
    return (
        <Box
            sx={{
                backgroundColor: 'sectionBackground',
                mb: 3,
                p: 3,
                fontSize: 2,
                borderRadius: 4,
                borderRight: isSelected ? 'solid red 4px' : 'none',
                boxShadow: 'rgb(0 0 0 / 0.1) 0px 4px 8px 0px',
            }}
        >
            <Flex sx={{ justifyContent: 'space-evenly' }}>
                <Box>
                    <img src={`/aircraft-types/${aircraft.type}.png`} alt={aircraft.ident} />
                </Box>
                <Box>
                    <Box>{aircraft.ident}</Box>
                    <Box sx={{ fontSize: 0 }}>{`${aircraft.economySeats} economy seats`}</Box>
                    <Box sx={{ fontSize: 0 }}>{`Base:${aircraft.base}`}</Box>
                </Box>
            </Flex>
            <Box sx={{ fontSize: 0 }}>
                <Flex sx={{ justifyContent: 'center', mt: 1 }}>
                    <Donut sx={{ color: 'planeService' }} size={30} strokeWidth={4} value={utilization} />
                </Flex>
                <Flex sx={{ justifyContent: 'center', mt: 1 }}>Utilization {(utilization * 100).toFixed(2) + '%'}</Flex>
            </Box>
        </Box>
    );
};
