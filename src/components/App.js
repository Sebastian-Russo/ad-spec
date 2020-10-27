import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './navbar';
import LandingPage from './pages/landing-page';
import About from './pages/about';
import Hotmelt from './pages/hotmelt';
import Liquid from './pages/liquid';
import PressureSensitive from './pages/pressure-sensitive';
import Products from './pages/products';
import Equipment from './pages/equipment';
import Careers from './pages/careers';
import Contact from './pages/contact';
import SingleAdhesive from './single-adhesive';
import Footer from './footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/hotmelt" component={Hotmelt} />
              <Route exact path="/hotmelt/:id" component={SingleAdhesive} />
              <Route exact path="/liquid" component={Liquid} />
              <Route exact path="/liquid/:id" component={SingleAdhesive} />
              <Route exact path="/pressure-sensitive" component={PressureSensitive} />
              <Route exact path="/pressure-sensitive/:id" component={SingleAdhesive} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/equipment" component={Equipment} />
              <Route exact path="/careers" component={Careers} />
              <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;