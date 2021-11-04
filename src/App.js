import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { StylesProvider } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from '../src/components/views/Homepage/Homepage';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Tables from '../src/components/views/Tables/Tables';
import Waiter from '../src/components/views/Waiter/WaiterContainer';
import Booking from '../src/components/views/Booking/Booking';
import BookingId from '../src/components/views/Booking/BookingId';
import BookingNew from '../src/components/views/Booking/BookingNew';
import PizzaEvents from '../src/components/views/PizzaEvents/PizzaEvents';
import PizzaEventsNew from '../src/components/views/PizzaEvents/PizzaEventsNew';
import PizzaEventsId from '../src/components/views/PizzaEvents/PizzaEventsId';
import Ordering from './components/views/Ordering/Ordering';
import OrderNew from './components/views/Ordering/OrderNew';
import OrderId from './components/views/Ordering/OrderId';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    secondary: {
      main: '#fff',
    },
  },
});

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
              {/* <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} /> */}
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />

              <Route exact path={process.env.PUBLIC_URL + '/waiter/ordering'} component={Ordering} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/ordering/new'} component={OrderNew} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/ordering/order/:id'} component={OrderId} />

              <Route exact path={process.env.PUBLIC_URL + '/tables/booking'} component={Booking} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={BookingNew} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={BookingId} />

              <Route exact path={process.env.PUBLIC_URL + '/tables/pizzaEvents'} component={PizzaEvents} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/pizzaEvents/new'} component={PizzaEventsNew} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/pizzaEvents/:id'} component={PizzaEventsId} />
            </Switch>

          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
