import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './_redux/store';
import { OidcProvider } from 'redux-oidc';
import userManager from './_oidc/userManager';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CallbackPage from './_oidc/CallbackPage';

const app = (
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <BrowserRouter>
        <Switch>
          <Route path='/signin-callback' component={CallbackPage} />
          <Route component={App} />
        </Switch>
      </BrowserRouter>
    </OidcProvider>
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
