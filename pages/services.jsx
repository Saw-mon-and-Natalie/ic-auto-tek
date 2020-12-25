import { SmoothScrollProvider } from '../src/contexts/SmoothScroll.context'
import SlideScroll from '../containers/SlideScroll/custom'
import ResponsivePicture from '../components/Media/ResponsivePicture'
import { useIntersectionObserver } from '../src/hooks'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const Services = () => {
	return (
		<SmoothScrollProvider options={{ smooth: true }}>
			<SlideScroll>
				<ServiceSection
					name="Full Service &amp; Oil Change"
					img="/img/ic-auto-tek-tools.jpg"
					className="mt-20"
				>
					<Tag name="$60 - $70" />
					<p className="mt-2 mb-4">
						We can work on all models with regular oil, inspect and
						replace, with any extra advice given, if needed.
					</p>
					<Tag name="$80 - $100" />
					<p className="mt-2 mb-4">
						We also work on Premium models eg. Mercedes-Benz, BMW,
						and Audi.
					</p>
				</ServiceSection>
				<ServiceSection
					name="Electrical Service"
					img="/img/ic-auto-tek-inspection-06.jpg"
				>
					<Tag name="from $90" />
					<p className="mt-2 mb-4">
						As two technician’s specialising in Electric’s, an in
						depth assessment is carried out.
					</p>
					<p className="mt-2 mb-4">
						Services fall under a short in system, replacement of
						defective modules, computer analysis, rewiring, camera
						installation, etc.
					</p>
				</ServiceSection>
				<ServiceSection
					name="Engine Service"
					img="/img/ic-auto-tek-inspection-04.jpg"
				>
					<Tag name="from $80" />
					<p className="mt-2 mb-4">
						We run a full assessment for Engine Maintenance and all
						works needed will be discussed and then carried out.
						Cylinder Head gasket change, Valve replacements etc.
					</p>
				</ServiceSection>
				<ServiceSection
					name="Brake Service"
					img="/img/ic-auto-tek-inspection-03.jpg"
				>
					<p className="mt-2 mb-4">
						Here we can change rotors, replace brake pads, change
						hoses, bleed and refill, ABS service, traction control
						adjustment, etc. We are thorough and will have you
						safely on your way in no time.
					</p>
				</ServiceSection>
				<ServiceSection
					name="Suspension Service"
					img="/img/ic-auto-tek-inspection-07.jpg"
				>
					<p className="mt-2 mb-4">
						Mechanical suspension adjustments and fine tuning on all
						models.
					</p>
				</ServiceSection>
				<ServiceSection
					name="Exclusive Parts"
					img="/img/ic-auto-tek-research-04.jpg"
				>
					<Tag name="honest labour fees" />
					<p className="mt-2 mb-4">
						We charge an honest labour fee, all exclusive/extra
						parts are added on top, with a large discount when
						brought through us.
					</p>
				</ServiceSection>
			</SlideScroll>
		</SmoothScrollProvider>
	)
}

export default Services

const ServiceVariant = {
	initial: { opacity: 0 },
	animate: { opacity: 100}
}

const PictureVariant = {
	initial: { width: '100%' },
	animate: { width: '0%' }
}

const ServiceSection = ({ name, img, alt = '', children, className }) => {
	const controls = useAnimation()
	const [ref, inView] = useIntersectionObserver({
		threshold: 0.6,
		root: null,
		rootMargin: '0px',
		triggerOnce: false,
	})

	useEffect(() => {
		if(inView) {
			console.log(inView)
			controls.start("animate")
		} else {
			controls.start("initial")
		}
		return () => {}
	}, [inView])
	return (
		<section
			ref={ref}
			className="h-screen md:h-auto relative min-w-screen min-h-screen flex flex-col md:flex-row"
		>
			<div className="w-auto h-2/4 md:w-2/4 md:h-auto bg-indigo-600 text-indigo-100 flex flex-col justify-center items-center px-4 xs:px-12">
				<motion.div
					initial="initial"
					animate={controls}
					variants={ServiceVariant}
					transition={{ type: "string", damping: 30, stiffness: 10, duration: 1, delay:0.4 }}
					className={`max-w-sm text-xs xs:text-sm md:text-3xl ${
						className ? className : ''
					} md:-mt-0`}
				>
					<h1 className="text-white font-bold mb-8">{name}</h1>
					{children}
				</motion.div>
			</div>
			<div className="relative w-auto h-2/4 md:w-2/4 md:h-auto md:max-h-screen">
				<ResponsivePicture
					position="relative"
					src={img}
					alt={alt}
					width="100%"
					height="100%"
					backgroundColor="rgba(200,200,200, 0.1)"
				/>
				<motion.div
					initial="initial"
					animate={controls}
					variants={PictureVariant}
					transition={{ type: "string", damping: 30, stiffness: 10, duration: 0.5, delay:0 }}
					className="absolute top-0 left-0 h-full pointer-events-none bg-indigo-600"
				></motion.div>
			</div>
		</section>
	)
}

const Tag = ({ name }) => (
	<p className="inline bg-indigo-100 text-indigo-600 text-2xs xs:text-xs md:text-sm font-medium px-2 py-1 rounded-md">
		{name}
	</p>
)
