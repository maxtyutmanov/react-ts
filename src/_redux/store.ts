import { createStore, compose, applyMiddleware } from 'redux';
import { appReducer } from './reducers';
import createOidcMiddleware from 'redux-oidc';
import userManager from 'src/_oidc/userManager';
import initialState from './initialState';

const oidcMiddleware = createOidcMiddleware(userManager);
const createCustomStore = compose(applyMiddleware(oidcMiddleware))(createStore);
const store = createCustomStore(appReducer, initialState);

export default store;