import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NotFound from '../pages/NotFound';

import Secure from '../components/guard/Secure';

import Dashboard from '../pages/Dashboard'

const Routes = () => {
    
    const isLogin = process.env.REACT_APP_IS_AUTH;

    return(

        <Router>

            <Switch>

                <Secure path="/" isLogin={isLogin} exact component={Dashboard} />

                <Route path="*" exact component={NotFound} />

            </Switch>

        </Router>
    )
    
}

export default Routes;