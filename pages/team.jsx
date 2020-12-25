import { SmoothScrollProvider } from '../src/contexts/SmoothScroll.context'
import SlideScroll from '../containers/SlideScroll/custom'

import { Eivaz, Masoud } from '../src/sections/OurTeam.section'

const ICAutoTekTeam = () => {
	return (
		<SmoothScrollProvider options={{ smooth: true }}>
			<SlideScroll>
				<Eivaz />
                <Masoud />
			</SlideScroll>
		</SmoothScrollProvider>
	)
}

export default ICAutoTekTeam