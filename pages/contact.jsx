import { SmoothScrollProvider } from '../src/contexts/SmoothScroll.context'
import SlideScroll from '../containers/SlideScroll/custom'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'

import ContactSection from '../src/sections/Contact.section'

const url = process.env.NEXT_PUBLIC_BASEURL + '/contact'
const title = 'Contact | IC Auto Tek - Auto Repairs and Inspections'
const description = 'IC Auto Tek located on lower lonsdale on Northshore is open on Weekdays from 9 AM to 6 PM and Saturdays from 10 AM to 4 PM. We are happy to be your trusted automotive repair, electrical diagnostics and inspection shop in lower mainland, BC.'

const Contacts = () => {
	return (
		<>
			<BreadcrumbJsonLd 
				itemListElements={[
					{
						position: 1,
						name: 'Contact',
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
					<ContactSection />
				</SlideScroll>
			</SmoothScrollProvider>
		</>
	)
}

export default Contacts
