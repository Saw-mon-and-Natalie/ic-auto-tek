// action types

export const UPDATE_WINDOW_SIZE = 'UPDATE_WINDOW_SIZE'
export const UPDATE_DEVICE_PIXEL_RATIO = 'UPDATE_DEVICE_PIXEL_RATIO'

// action creators

export function updateWindowSize(windowSize) {
    return {
        type: UPDATE_WINDOW_SIZE,
        windowSize: windowSize,
    }
}

export function updateDevicePixelRatio(devicePixelRatio) {
    return {
        type: UPDATE_DEVICE_PIXEL_RATIO,
        devicePixelRatio: devicePixelRatio,
    }
}

export const mapWindowDispatchProps = dispatch => {
    return {
        onWindowSize: windowSize => dispatch(updateWindowSize(windowSize)),
        onDevicePixelRatio: devicePixelRatio => dispatch(updateDevicePixelRatio(devicePixelRatio))
    }
}