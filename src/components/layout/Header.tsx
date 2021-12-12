/** @jsxImportSource theme-ui */

import { Box, Flex, Switch } from '@theme-ui/components';
import { FunctionComponent, useContext } from 'react';
import { IsAutoContext } from '../../context/IsAutoContext';

export const Header: FunctionComponent = () => {
    const isAutoContext = useContext(IsAutoContext);

    console.log('isAutoContext', isAutoContext);

    return (
        <Box sx={{ backgroundColor: 'primary', textAlign: 'center', fontWeight: 'heading', fontSize: 4, p: 3 }}>
            <Flex sx={{ maxWidth: '1280px', justifyContent: 'space-between', margin: 'auto' }}>
                <Box sx={{ flex: 1, textAlign: 'center' }}>Aircraft Smart Scheduler</Box>
                <Flex
                    sx={{
                        fontSize: 2,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '150px',
                    }}
                >
                    <IsAutoContext.Consumer>
                        {({ isAuto, setIsAuto }) => (
                            <Switch
                                id="enable-auto-mode"
                                sx={{
                                    alignItems: 'center',
                                    'input:checked ~ &': { backgroundColor: 'optionSelectedColor' },
                                }}
                                checked={isAutoContext.isAuto}
                                label={'Auto mode'}
                                onChange={() => toggleIsAuto()}
                            />
                        )}
                    </IsAutoContext.Consumer>
                </Flex>
            </Flex>
        </Box>
    );
};
