import { ThemeProvider } from 'theme-ui';
import { Header } from './components/layout/Header';
import { MainContainer } from './components/layout/MainContainer';
import { theme } from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <MainContainer />
        </ThemeProvider>
    );
}

export default App;
