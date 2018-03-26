import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import list from '../reducers/list';
import mobileLeftNav from '../reducers/mobileLeftNav';

export default combineReducers({
    routing: routerReducer,
    list,
    mobileLeftNav
});