import { Flex, ThemeProvider } from 'theme-ui';

import { Header } from './components/layout/Header';
import { MainContainer } from './components/layout/MainContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import { theme } from './theme';
import { IsAutoProvider } from './context/IsAutoProvider';

const store = configureStore({
    reducer: rootReducer,
});

function App() {
    return (
        <Provider store={store}>
            <IsAutoProvider>
                <ThemeProvider theme={theme}>
                    <Flex sx={{ flexDirection: 'column', height: '100%', maxHeight: '850px' }}>
                        <Header />
                        <MainContainer />
                    </Flex>
                </ThemeProvider>
            </IsAutoProvider>
        </Provider>
    );
}

export default App;
