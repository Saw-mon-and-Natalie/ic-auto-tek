export const useCombinedRefs = (...refs) => {
    return target => {
        refs.forEach( ref => {
            if( !ref ) return

            if( typeof ref === 'function' ) {
                ref(target)
            } else {
                ref.current = target
            }
        })
    }
}

// ref: https://github.com/facebook/react/issues/13029