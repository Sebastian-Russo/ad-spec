import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './navbar';
import LandingPage from './pages/landing-page';
import Hotmelt from './pages/hotmelt';
import Liquid from './pages/liquid';
import PressureSensitive from './pages/pressure-sensitive';
import Products from './pages/products';
import Equipment from './pages/equipment';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/hotmelt" component={Hotmelt} />
              <Route exact path="/liquid" component={Liquid} />
              <Route exact path="/pressure-sensitive" component={PressureSensitive} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/equipment" component={Equipment} />
              <Route exact path="/contact" component={Contact} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;