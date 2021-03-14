import { createStore } from 'redux'
import rootReducer from './reducers'

const initialState = {};

export default createStore(
    rootReducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension());

