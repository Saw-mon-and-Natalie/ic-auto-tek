import ResponsivePicture from '../components/Media/ResponsivePicture'


import { SmoothScrollProvider } from '../src/contexts/SmoothScroll.context'
import SlideScroll from '../containers/SlideScroll/custom'

import IndexTopSection from '../src/sections/IndexTop.section'
import AboutCompanySection from '../src/sections/AboutCompany.section'
import OurVisionSection from '../src/sections/OurVision.section'
import ReviewsSection from '../src/sections/Reviews.section'
import { Eivaz, Masoud } from '../src/sections/OurTeam.section'
import ContactSection from '../src/sections/Contact.section'

const Home = () => {
    return (
        <SmoothScrollProvider options={{ smooth: true }}>
            <SlideScroll>
                <IndexTopSection />
                <AboutCompanySection />
                <OurVisionSection />
                <ReviewsSection />
                <Eivaz />
                <Masoud />
                <ContactSection />
            </SlideScroll>
        </SmoothScrollProvider>
    )
}

export default Home