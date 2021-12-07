/** @jsxImportSource theme-ui */

import { Box, Flex } from '@theme-ui/components';
import { FunctionComponent } from 'react';

export const TimelineChunk: FunctionComponent<{ isLast?: boolean }> = ({ isLast }) => {
    return (
        <Box sx={{ flex: 1 }}>
            <Flex sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ fontSize: 0, width: 'fit-content', transform: 'translateX(-50%)', bg: 'orange' }}>00:00</Box>
                {isLast && (
                    <Box sx={{ fontSize: 0, width: 'fit-content', transform: 'translateX(50%)', bg: 'orange' }}>
                        24:00
                    </Box>
                )}
            </Flex>
            <Flex>
                <Box sx={{ width: '2px', height: '12px', backgroundColor: 'black' }} />
                <Box sx={{ flex: 1, height: '5px', position: 'relative' }}>
                    <Box
                        sx={{
                            borderTop: 'solid 2px black',
                            position: 'absolute',
                            top: '5px',
                            height: '5px',
                            width: '100%',
                        }}
                    ></Box>
                </Box>
                {isLast && <Box sx={{ width: '2px', height: '12px', backgroundColor: 'black' }} />}
            </Flex>
        </Box>
    );
};
