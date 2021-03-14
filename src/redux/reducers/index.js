// reducers combination
import { combineReducers } from "redux";

// updating state
const inputTextUpdateReducer = (state={}, { type, payload }) => {
    switch (type) {
        case 'INPUT_TEXT_UPDATED':
            return payload.text
        default:
            return state;
    }
}

export default combineReducers({
    inputText: inputTextUpdateReducer
});