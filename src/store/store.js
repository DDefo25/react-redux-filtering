import { legacy_createStore, combineReducers } from 'redux';
import serviceListReducer from './reducers/serviceListReducer';
import serviceAddReducer from './reducers/serviceAddReducer';
import serviceFilterFieldReducer from './reducers/serviceFilterFieldReducer';
const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
    serviceFilterField: serviceFilterFieldReducer,
});
const store = legacy_createStore(reducer);
export default store;