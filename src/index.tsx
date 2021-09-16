import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {Helmet} from "react-helmet";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const manifestUrl = (name: string, scope: string) => `.netlify/functions/manifest?name=${name}&scope=${scope}`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/starbucks">
          <Helmet>
            <link id="teams_manifest" rel="manifest" href={manifestUrl("Starbucks", "/starbucks/")} />
          </Helmet>
          Starbucks
        </Route>
        <Route path="/facebook">
          <Helmet>
            <link id="teams_manifest" rel="manifest" href={manifestUrl("Facebook", "/facebook/")} />
          </Helmet>
          Facebook
        </Route>
        <Route path="/facebook">
            404
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
