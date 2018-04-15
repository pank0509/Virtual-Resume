import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './routes';
import './index.css';


ReactDOM.render(
    <HashRouter>
        <MuiThemeProvider>
            <Routes />
        </MuiThemeProvider>
    </HashRouter>,
    document.getElementById('root'),
);
