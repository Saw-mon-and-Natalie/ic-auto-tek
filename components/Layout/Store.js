import { createStore } from 'redux'
import { initialWindowState, windowReducer } from '../Window/windowReducers'

export const initialStoreState = {
    window: initialWindowState
}

// reducers

export function rootReducer(state = initialStoreState, action) {
    return {
        window: windowReducer(state.window, action),
    }
}

export const mapStateToProps = state => state;

export default createStore(
    rootReducer,
    process.env.NODE_ENV == 'development' &&  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)