import { UPDATE_WINDOW_SIZE, UPDATE_DEVICE_PIXEL_RATIO } from './WindowActions'

export const initialWindowSize = {
    width: 0,
    height: 0,
}

export const initialDevicePixelRatio = 1

export const initialWindowState = {
    windowSize: initialWindowSize,
    devicePixelRatio: initialDevicePixelRatio,
}

export function windowSizeReducer(state = initialWindowSize, action) {
    switch (action.type) {
        case UPDATE_WINDOW_SIZE:
            return action.windowSize
        default:
            return state
    }
}

export function devicePixelRatioReducer(state = initialDevicePixelRatio, action) {
    switch( action.type) {
        case UPDATE_DEVICE_PIXEL_RATIO:
            return action.devicePixelRatio
        default:
            return state
    }
}

export function windowReducer(state = initialWindowState, action) {
    return {
        windowSize: windowSizeReducer(state.windowSize, action),
        devicePixelRatio: devicePixelRatioReducer(state.devicePixelRatio, action),
    }
}

export default windowReducer