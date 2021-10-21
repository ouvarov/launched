import { combineReducers, createStore } from 'redux';

import { authReducer } from 'store/reducers';

const reducers = combineReducers({
    auth: authReducer,
});

const store = createStore(reducers);

export default store;
