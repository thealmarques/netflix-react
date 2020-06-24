import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { user } from './reducers/user.reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    user
});


export default createStore(rootReducer, composeWithDevTools());