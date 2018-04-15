import React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import App from './pages/App';
import Animation from './Animation';

const Routes = () => (
    <Switch>
        <Route path="/app" component={App} changeLanguage={() => {}} />
        <Route exact path="/animnation" component={Animation} />
    </Switch>
);
export default hot(module)(Routes);
