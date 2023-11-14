import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from "./auth0-provider-with-history"
import { Auth0Provider } from "@auth0/auth0-react";
//VitkorBraus2017@
function renderApp() {
    ReactDOM.render(
        <Router>
            <Auth0Provider
                domain="dev-gcabjf7o.eu.auth0.com"
                clientId="aZHmtDdY55BjLbgWTbN4Yfa85h3nRfLr"
                redirectUri={window.location.origin}>
                <App />
            </Auth0Provider>
        </Router>,
        document.getElementById('root')
    );
}
renderApp();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
