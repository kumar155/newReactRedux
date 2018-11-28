import { combineReducers } from 'redux';
import { simpleReducer, incrementReducer, myComponentReducer } from './simpleReducer';
import { IncrementCountReducer, DecrementCountReducer, MixingCountReducer } from './reducers';

export default combineReducers({
    simpleReducer,
    incrementReducer,
    myComponentReducer,
    IncrementCountReducer,
    DecrementCountReducer,
    MixingCountReducer,
});