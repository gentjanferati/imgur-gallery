import idReducer from './id';
import isClickedReducer from './isClicked';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    id: idReducer,
    clicked: isClickedReducer
});

export default allReducers;