import { SmoothScrollProvider } from '../src/contexts/SmoothScroll.context'
import SlideScroll from '../containers/SlideScroll/custom'

import ReviewsSection from '../src/sections/Reviews.section'

import { BreadcrumbJsonLd, NextSeo } from 'next-seo'

const url = process.env.NEXT_PUBLIC_BASEURL + '/reviews'
const title = 'Reviews | IC Auto Tek - Auto Repairs and Inspections'
const description = "We at IC Auto Tek are grateful to our clients and customers. We nourish the relashionships that we have built with are clients and are grateful for their kind testimonials."

const Reviews = () => {
	return (
		<>
			<BreadcrumbJsonLd 
				itemListElements={[
					{
						position: 1,
						name: 'Reviews',
						item: url
					},
				]}
			/>
			<NextSeo 
				title={title}
				description={description}
				canonical={url}

				twitter={{
					title: title,
					description: description,
				}}

				openGraph={{
					url: url,
					title: title,
					description: description,
				}}
			/>
			<SmoothScrollProvider options={{ smooth: true }}>
				<SlideScroll>
					<ReviewsSection />
				</SlideScroll>
			</SmoothScrollProvider>
		</>
	)
}

export default Reviews
