import { Fragment } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Home from './pages/Main';
import Footer from './components/footer/Footer';
import { Switch, Redirect, Route } from 'react-router-dom/';
import BrowsePets from './pages/BrowsePets';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Fragment>
      <Dashboard />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/browse-pet'>
          <BrowsePets />
        </Route>
        <Route path='/terms-and-conditions'>
          <TermsAndConditionsPage />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route path='*'>
          <Redirect to='/home' />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
