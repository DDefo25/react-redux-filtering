import { legacy_createStore, combineReducers } from 'redux';
import serviceListReducer from '../components/reducers/serviceListReducer';
import serviceAddReducer from '../components/reducers/serviceAddReducer';
const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
});
const store = legacy_createStore(reducer);
export default store;