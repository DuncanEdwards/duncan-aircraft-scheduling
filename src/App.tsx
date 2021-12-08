import { Header } from './components/layout/Header';
import { MainContainer } from './components/layout/MainContainer';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'theme-ui';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import { theme } from './theme';

const store = configureStore({
    reducer: rootReducer,
});

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Header />
                <MainContainer />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
