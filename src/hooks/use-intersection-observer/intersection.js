// ref: https://github.com/thebuilder/react-intersection-observer/

const INSTANCE_MAP = new Map()
const OBSERVER_MAP = new Map()
const ROOT_IDS = new Map()

let consecutiveRootId = 0

/**
 * Generate a unique ID for the root element
 * @param {Element} root 
 */
const getRootId = root => {
    if( !root ) return ''
    if( ROOT_IDS.has(root)) return ROOT_IDS.get(root)

    consecutiveRootId += 1
    ROOT_IDS.set(root, consecutiveRootId.toString())
    return ROOT_IDS.get(root)
}

/**
 * Monitor element, and trigger callback when element becomes inView
 * @param {HTMLElement} element 
 * @param {Function} callback 
 * @param {Object} options 
 * @param {Number} options.threshold
 * @param {HTMLElement} options.root
 * @param {String} options.rootMargin
 */
export const observe = ( element, callback, options = {} ) => {
    options.threshold = options.threshold || 0
    const { root, rootMargin, threshold } = options

    if( !element ) return
    let observerId = 
        getRootId(root) + '_' +
        (rootMargin ? 
            `${threshold}_${rootMargin}` : 
            threshold.toString()
        )
    let observerInstance = OBSERVER_MAP.get(observerId)
    if( !observerInstance ) {
        require('intersection-observer')
        observerInstance = new IntersectionObserver(onChange, options)
        OBSERVER_MAP.set(observerId, observerInstance)
    }

    const instance = {
        callback,
        element,
        inView: false,
        observerId,
        observer: observerInstance,
        thresholds:
            observerInstance.thresholds ||
            (Array.isArray(threshold) ? threshold : [threshold]),
    }

    INSTANCE_MAP.set(element, instance)
    observerInstance.observe(element)

    return instance
}

/**
 * Stop observing an element.
 * @param {HTMLElement} element 
 */
export const unobserve = ( element ) => {
    if( !element ) return
    const instance = INSTANCE_MAP.get(element)

    if( instance ) {
        const { observerId, observer } = instance
        const { root } = observer

        observer.unobserve(element)

        let itemsLeft = false
        let rootObserved = false

        if( observerId ) {
            INSTANCE_MAP.forEach((item, key) => {
                if( key !== element ) {
                    if( item.observerId === observerId ) {
                        itemsLeft = true
                        rootObserved = true
                    }
                    if( item.observer.root === root ) {
                        rootObserved = true
                    }
                }
            })
        }

        if( !rootObserved && root ) ROOT_IDS.delete(root)
        if( observer && !itemsLeft ) {
            observer.disconnect()
        }

        INSTANCE_MAP.delete(element)
    }
}

/**
 * Destroy all IntersectionObservers currently connected
 */
export const destroy = () => {
    OBSERVER_MAP.forEach( observer => observer.disconnect() )

    OBSERVER_MAP.clear()
    INSTANCE_MAP.clear()
    ROOT_IDS.clear()

    consecutiveRootId = 0
}

const onChange = ( changes ) => {
    changes.forEach( intersection => {
        const { iseIntersecting, intersectionRatio, target } = intersection
        const instance = INSTANCE_MAP.get(target)
        let inView = false 
        
        if( instance && intersectionRatio >= 0 ) {
            inView = instance.thresholds.some( threshold => {
                return instance.inView ? intersectionRatio > threshold : intersectionRatio >= threshold
            })
        }

        if( iseIntersecting !== undefined ) {
            inView = inView && iseIntersecting
        }

        if( instance ) {
            instance.inView = inView
            instance.callback(inView, intersection)
        }
    })
}

export default {
    observe,
    unobserve,
    destroy
}