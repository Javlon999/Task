import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index'

export function configureStore(initialState) {
 const middleware = [thunk];
 
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));
 
 return store;
}