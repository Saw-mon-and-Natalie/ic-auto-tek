import { SmoothScrollProvider } from '../src/contexts/SmoothScroll.context'
import SlideScroll from '../containers/SlideScroll/custom'

import ContactSection from '../src/sections/Contact.section'

const Contacts = () => {
	return (
		<SmoothScrollProvider options={{ smooth: true }}>
			<SlideScroll>
				<ContactSection />
			</SlideScroll>
		</SmoothScrollProvider>
	)
}

export default Contacts
