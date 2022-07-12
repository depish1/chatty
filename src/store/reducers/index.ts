import { combineReducers } from 'redux';
import { setAutoFreeze } from 'immer';

import user from 'store/reducers/user';

setAutoFreeze(false);

const rootReducer = combineReducers({ user });

export default rootReducer;
