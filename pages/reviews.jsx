import { SmoothScrollProvider } from '../src/contexts/SmoothScroll.context'
import SlideScroll from '../containers/SlideScroll/custom'

import ReviewsSection from '../src/sections/Reviews.section'

const Reviews = () => {
	return (
		<SmoothScrollProvider options={{ smooth: true }}>
			<SlideScroll>
				<ReviewsSection />
			</SlideScroll>
		</SmoothScrollProvider>
	)
}

export default Reviews
