/** @jsxImportSource theme-ui */

import { Box, Flex } from '@theme-ui/components';
import { ThemeUIStyleObject } from '@theme-ui/css';
import { FunctionComponent } from 'react';

export const TimelineChunk: FunctionComponent<{ minutes: number; isLast: boolean }> = ({ minutes, isLast }) => {
    console.log(minutes);

    const getHour = (minutes: number): string => (minutes / 60).toFixed(0).padStart(2, '0');
    const getMinutes = (minutes: number): string => (parseInt(minutes.toString()) % 60).toString().padStart(2, '0');

    const legendTheme: ThemeUIStyleObject = {
        fontSize: 1,
        fontWeight: 600,
        width: 'fit-content',
    };

    return (
        <Box sx={{ flex: 1 }}>
            <Flex sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ ...legendTheme, transform: 'translateX(-50%)' }}>
                    {getHour(minutes)}:{getMinutes(minutes)}
                </Box>
                {isLast && <Box sx={{ ...legendTheme, transform: 'translateX(50%)' }}>24:00</Box>}
            </Flex>
            <Flex>
                <Box sx={{ width: '2px', height: '7px', backgroundColor: 'black' }} />
                <Box
                    sx={{
                        borderBottom: 'solid 2px black',
                        height: '7px',
                        width: '100%',
                    }}
                ></Box>
                {isLast && <Box sx={{ width: '2px', height: '7px', backgroundColor: 'black' }} />}
            </Flex>
        </Box>
    );
};
