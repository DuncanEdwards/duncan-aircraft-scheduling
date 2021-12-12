/** @jsxImportSource theme-ui */

import { Box, Flex, Switch } from '@theme-ui/components';
import { FunctionComponent } from 'react';
import { IsAutoContext } from '../../context/IsAutoContext';

export const Header: FunctionComponent = () => {
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
                        {(context) => (
                            <Switch
                                id="enable-auto-mode"
                                sx={{
                                    alignItems: 'center',
                                    'input:checked ~ &': { backgroundColor: 'optionSelectedColor' },
                                }}
                                checked={context?.isAuto}
                                label={'Auto mode'}
                                onChange={() => context?.setIsAuto(!context?.isAuto)}
                            />
                        )}
                    </IsAutoContext.Consumer>
                </Flex>
            </Flex>
        </Box>
    );
};
