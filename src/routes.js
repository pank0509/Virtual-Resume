import React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import App from './pages/App';

const Routes = () => (
    <Switch>
        <Route path="/" component={App} changeLanguage={() => {}} />
    </Switch>
);
export default hot(module)(Routes);
