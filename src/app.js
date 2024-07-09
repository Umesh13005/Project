import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PatientPage from './pages/PatientPage';
import AppointmentPage from './pages/AppointmentPage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/patients" component={PatientPage} />
                <Route path="/appointments" component={AppointmentPage} />
            </Switch>
        </Router>
    );
};

export default App;
