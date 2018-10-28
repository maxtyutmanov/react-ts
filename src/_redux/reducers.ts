import ApplicationState from '../models/AppState';
import { Action } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';

export function appReducer(state: ApplicationState, action: Action): ApplicationState {
    const newUserState = oidcReducer(state.userState, action);
    return { ...state, userState: newUserState };
}