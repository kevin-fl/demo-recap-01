
import MainHeader from './containers/main-header/main-header';
import MainFooter from './containers/main-footer/main-footer';
import { Container, CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { appRoute } from './routes';
import { Box } from '@mui/system';

function App() {

  const routes = useRoutes(appRoute);
  return (
    <>
      <CssBaseline />
      <Box display='flex' minHeight='100vh' flexDirection='column'>
        <MainHeader flex={1} overflow='auto' />
        <Box flex={1}>

          <Container>
            {routes}
          </Container>
        </Box>
        <MainFooter />
      </Box>
    </>
  );
}

export default App;;