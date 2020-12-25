import { createContext, useEffect, useState } from 'react'

export const SmoothScrollContext = createContext({
    scroll: null,
})

export const SmoothScrollProvider = ({ children, options }) => {
    const [scroll, setScroll] = useState(null)

    useEffect(() => {
        if(!scroll) {
            initScroll()
        }
        return () => {
            scroll && scroll.destroy()
        }
    }, [scroll]) 

    const initScroll = async () => {
        try {
            const LocomotiveScroll = (await import('locomotive-scroll')).default

            setScroll(
                new LocomotiveScroll({
                    el: document.querySelector('[data-scroll-container]') ?? undefined,
                    ...options,
                })
            )
        } catch (error) {
            throw Error(`[SmoothScrollProvider]: ${error}`)
        }
    }

    return (
        <SmoothScrollContext.Provider value={{ scroll }}>{children}</SmoothScrollContext.Provider>
    )
}