import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from '../src/components/views/Homepage/Homepage';
import Login from '../src/components/views/Login/Login';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Tables from '../src/components/views/Tables/Tables';
import Waiter from '../src/components/views/Waiter/Waiter';
import Booking from '../src/components/views/Booking/Booking';
import BookingId from '../src/components/views/Booking/BookingId';
import BookingNew from '../src/components/views/Booking/BookingNew';
import PizzaEvents from '../src/components/views/PizzaEvents/PizzaEvents';
import PizzaEventsNew from '../src/components/views/PizzaEvents/PizzaEventsNew';
import PizzaEventsId from '../src/components/views/PizzaEvents/PizzaEventsId';
import Ordering from './components/views/Ordering/Ordering';
import OrderNew from './components/views/Ordering/OrderNew';
import OrderId from './components/views/Ordering/OrderId';

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
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
    </BrowserRouter>
  );
}

export default App;
