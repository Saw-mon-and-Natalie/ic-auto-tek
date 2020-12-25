import React from 'react'


class SlideScroll extends React.Component {
    constructor(props) {
        super(props)
        this.slideRefs = []
        this.numSlides = React.Children.count(this.props.children),
        this.isAnimating = false,
        this.currentSlide = 0
    }

    stopAnimation = () => setTimeout(() => { this.isAnimating = false }, 300)
    topIsReached = el => {
        if( typeof el.getBoundingClientRect == 'function') {
            const rect = el.getBoundingClientRect()
            return rect.top >=0 
        }

        return false
    }

    bottomIsReached = el => {
        if( typeof el.getBoundingClientRect == 'function' && window?.innerHeight) {
            const rect = el.getBoundingClientRect()
            return rect.bottom <= window.innerHeight
        }

        return false
    }

    listener = event => {
        let currentSlideEl = this.slideRefs[this.currentSlide].current
        if( this.isAnimating ) {
            event.preventDefault()
            return
        }

        const direction = -event.deltaY

        if( direction < 0 ) {
            if( this.currentSlide + 1 >= this.numSlides ) return
            if( !this.bottomIsReached(currentSlideEl) ) return

            event.preventDefault()
            this.currentSlide++
            currentSlideEl = this.slideRefs[this.currentSlide].current
            const offsetTop = currentSlideEl.offsetTop
            this.isAnimating = true
            // animate scrollTop on html.body in 1 seconds, callback stopAnimation

        } else {
            if( this.currentSlide - 1 < 0 ) return
            if( !this.topIsReached(currentSlideEl) ) return

            event.preventDefault()
            this.currentSlide--
            currentSlideEl = this.slideRefs[this.currentSlide].current
            const offsetTop = currentSlideEl.offsetTop
            this.isAnimating = true

            // animate scrollTop on html.body in 1 seconds, callback stopAnimation
        }
    }

    componentDidMount() {
        if( document ) {
            document.addEventListener('wheel', this.listener, { passive: false })
        }
    }
    componentWillUnmount() {
        if( document ) {
            document.removeEventListener('wheel', this.listener)
        }
    }
    render() {
        const children = this.props.children
        return (
            <>
                {
                    React.Children.map(children, child => {
                        const ref = React.createRef()
                        this.slideRefs.push(ref)

                        return <div ref={ref}>{child}</div>
                    })
                }
            </>
        )
    }
}

export default SlideScroll