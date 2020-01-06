import {createStore, combineReducers, applyMiddleware} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';
import mapReducer from './mapReducer';

const rootReducer = combineReducers({
    reducer,
    mapReducer
})

export default createStore(rootReducer, applyMiddleware(reduxPromiseMiddleware));