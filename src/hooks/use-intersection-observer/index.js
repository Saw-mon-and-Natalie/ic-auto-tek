import { useCallback, useRef, useState, useDebugValue } from 'react'
import { observe, unobserve } from './intersection'

/**
 * 
 * @param {Object} options: { threshold, root, rootMargin, triggerOnce } 
 */
export const useIntersectionObserver = options => {
    const ref = useRef()
    const [state, setState] = useState({
        inView: false,
        entry: undefined,
    })

    const setRef = useCallback(
        node => {
            if( ref.current ) {
                unobserve(ref.current)
            }

            if( node ) {
                observe(
                    node,
                    (inView, intersection) => {
                        setState({ inView, entry: intersection })
                        if( inView && options.triggerOnce ) {
                            unobserve(node)
                        }
                    },
                    options,
                )
            }

            ref.current = node
        },
        [options.threshold, options.root, options.rootMargin, options.triggerOnce],
    )

    useDebugValue(state.inView)

    return [setRef, state.inView, state.entry]
}