import ApplicationState from '../models/AppState';
import { Action } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';

const initialState : ApplicationState = {
    userState: {
        isLoadingUser: false
    }
}

export function appReducer(state = initialState, action: Action): ApplicationState {
    const newUserState = oidcReducer(state.userState, action);
    return { ...state, userState: newUserState };
}