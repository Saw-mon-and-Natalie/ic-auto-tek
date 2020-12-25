import { useEffect, useRef } from 'react'

const WindowComponent = ({ onWindowSize, onDevicePixelRatio }) => {
    const onWindowSizeCallbackRef = useRef()
    const onDevicePixelRatioCallbackRef = useRef()

    useEffect(() => {
        onWindowSizeCallbackRef.current = onWindowSize
    }, [onWindowSize])

    useEffect(() => {
        onDevicePixelRatioCallbackRef.current = onDevicePixelRatio
    }, [onDevicePixelRatio])

    useEffect(() => {
        if( typeof window !== 'object' ) return
        const setWindowSize = () => onWindowSizeCallbackRef.current({
            width: window.innerWidth,
            height: window.innerHeight
        })
        setWindowSize()
        window.addEventListener('resize', setWindowSize)

        if( window.devicePixelRatio && typeof window.devicePixelRatio === 'number') {
            onDevicePixelRatioCallbackRef.current(
                parseFloat(window.devicePixelRatio.toFixed(2))
            )
        }

        return () => window.removeEventListener('resize', setWindowSize)
    }, [])

    return <div className='window-monitor' />
}

export default WindowComponent