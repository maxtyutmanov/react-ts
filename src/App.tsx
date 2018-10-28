import * as React from 'react';
import HomePage from './HomePage';
import ApplicationState from './models/AppState';
import { connect } from 'react-redux';
import { UserState } from 'redux-oidc';
import userManager from './_oidc/userManager';

interface AppProps {
  userState: UserState
}

class App extends React.Component<AppProps> {
  public render() {
    const userState = this.props.userState;

    if (userState.user && !userState.user.expired) {
      return (
        <HomePage />
      );
    }

    if (!userState.isLoadingUser) {
      userManager.signinRedirect();  
    }

    return null;
  }
}

const mapStateToProps = (appState: ApplicationState) : AppProps => {
  return {
    userState: appState.userState
  };
}

export default connect(mapStateToProps)(App);
