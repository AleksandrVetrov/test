import { Box, ThemeProvider } from '@mui/material';
import theme from '../theme';
import './App.css';
import Routers from './routes';

function App() {
  return (
    <Box className="app" width={'100%'}>
      <ThemeProvider theme={theme}>
          <Routers />
      </ThemeProvider>
    </Box>
  );
}

export default App;
