import { legacy_createStore, combineReducers } from 'redux';
import serviceListReducer from '../components/reducers/serviceListReducer';
import serviceAddReducer from '../components/reducers/serviceAddReducer';
import serviceFilterFieldReducer from '../components/reducers/serviceFilterFieldReducer';
const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
    serviceFilterField: serviceFilterFieldReducer,
});
const store = legacy_createStore(reducer);
export default store;