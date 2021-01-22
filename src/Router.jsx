import React from 'react';
import App from './App.jsx';
import Login from './pages/LoginPage.jsx';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

function RouterJsx() {
    return (
        <Router>
                <Route exact path="/">
                    {App()}
                </Route>
                <Route path="/login">
                    {Login()}
                </Route>
        </Router>
    );
}

export default RouterJsx;