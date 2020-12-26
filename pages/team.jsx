import { SmoothScrollProvider } from '../src/contexts/SmoothScroll.context'
import SlideScroll from '../containers/SlideScroll/custom'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'

import { Eivaz, Masoud } from '../src/sections/OurTeam.section'

const url = process.env.NEXT_PUBLIC_BASEURL + '/team'
const title = 'Team | IC Auto Tek - Auto Repairs and Inspections'
const description = "IC Auto Tek's professional team are waiting to help you fix your automotive issues, inspect your future car or upgrade the electrical components in your motor vehicle. Eivaz Hashemi and Masoud Varghan work around the clock to make sure your vehicle is safe and well maintained for your daily dirving needs."

const ICAutoTekTeam = () => {
	return (
		<>
			<BreadcrumbJsonLd 
				itemListElements={[
					{
						position: 1,
						name: 'Team',
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
					<Eivaz />
					<Masoud />
				</SlideScroll>
			</SmoothScrollProvider>
		</>
	)
}

export default ICAutoTekTeam