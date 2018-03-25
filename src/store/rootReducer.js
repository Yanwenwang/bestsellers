import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import list from '../reducers/list';

export default combineReducers({
    routing: routerReducer,
    list
});