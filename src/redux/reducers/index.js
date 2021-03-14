// reducers combination
import { combineReducers } from "redux";

const initialState = {
    inputText: ''
}

// updating state
const inputTextUpdateReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case 'INPUT_TEXT_UPDATED':
            return {...state, inputText: payload.text }
        default:
            return state;
    }
}

export default inputTextUpdateReducer;