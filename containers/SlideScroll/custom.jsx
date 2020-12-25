import { SmoothScrollContext } from '../../src/contexts/SmoothScroll.context'
import React, { useContext, useRef, useEffect, useState } from 'react'

const SlideScroll = ({ children }) => {
    const { scroll } = useContext(SmoothScrollContext)
    const isAnimating = useRef(false)
    const numSlides = useRef(React.Children.count(children))
    const currentSlide = useRef(0)
    const slideRefs = useRef([])

    const stopAnimation = () => setTimeout(() => { isAnimating.current = false }, 1000)
    const topIsReached = el => {
        if( typeof el.getBoundingClientRect == 'function') {
            const rect = el.getBoundingClientRect()
            return rect.top >=0 
        }

        return false
    }

    const bottomIsReached = el => {
        if( typeof el.getBoundingClientRect == 'function' && window?.innerHeight) {

            const rect = el.getBoundingClientRect()
            return rect.bottom <= window.innerHeight
        }

        return false
    }
    const listener = event => {
        let currentSlideEl = slideRefs.current[currentSlide.current].current
        if( isAnimating.current ) {
            event.preventDefault()
            return
        }

        const direction = -event.deltaY

        if( direction < 0 ) {
            if( currentSlide.current + 1 >= numSlides.current ) return
            if( !bottomIsReached(currentSlideEl) ) return
            currentSlide.current++

        } else {
            if( currentSlide.current - 1 < 0 ) return
            if( !topIsReached(currentSlideEl) ) return
            currentSlide.current--
            
        }

        event.preventDefault()
        currentSlideEl = slideRefs.current[currentSlide.current].current
        isAnimating.current = true
        scroll.scrollTo(currentSlideEl)
        stopAnimation()
    }

    useEffect(() => {
        if(!document) return
        document.addEventListener('wheel', listener, { passive: false })
        return () => document.removeEventListener('wheel', listener)
    }, [scroll])
    return (
        <>
        {
            React.Children.map(children, (child, i) => {
                const ref = React.createRef()

                if( i == 0 ) {
                    slideRefs.current = []
                }
                slideRefs.current.push(ref)

                return <div ref={ref}>{child}</div>
            })
        }
    </>
    )
}

export default SlideScroll