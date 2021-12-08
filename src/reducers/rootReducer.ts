import { rotationReducer, rotationStore } from './rotationReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    [rotationStore]: rotationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
