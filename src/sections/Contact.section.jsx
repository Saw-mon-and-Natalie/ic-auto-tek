import InboxIcon from '../icons/inbox'
import LocationMarkerIcon from '../icons/location-marker'
import PhoneIcon from '../icons/phone'

const ContactSection = ({ className }) => {
	return (
		<section
			className={
				className
					? className
					: 'md:h-auto relative min-w-screen min-h-screen flex flex-col md:flex-row'
			}
		>
			<div className="flex-shrink-0 md:flex-shrink w-auto h-screen md:w-3/4 md:h-auto order-last md:order-1">
				<Map />
			</div>
			<div className="order-2 flex-grow bg-white text-indigo-600 py-40 md:py-0 flex flex-col justify-center items-center px-8 xs:px-12 text-md font-medium">
				<div>
					<OpenHours />
					<a className="flex" href="tel:+1 (604) 980-5311">
						<PhoneIcon />
						<div className="ml-4">+1 (604) 980-5311</div>
					</a>
					<br />
					<a className="flex" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
						<InboxIcon />
						<div className="ml-4">{process.env.NEXT_PUBLIC_EMAIL}</div>
					</a>
					<div className="flex mt-24">
						<LocationMarkerIcon />
						<p className="ml-4">
							330 East Esplanade <br />
							North Vancouver <br />
							BC, V7L 1A4
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactSection

const Map = () => (
	<iframe
		title="IC Auto Tek location on Google Map"
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41616.71191077172!2d-123.08872281122679!3d49.31344101966784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548670527e5c2099%3A0xefc083d24c10a6fe!2sIC%20Auto%20Tek!5e0!3m2!1sen!2sca!4v1608619625704!5m2!1sen!2sca"
		className="bg-indigo-600"
		width="100%"
		height="100%"
		frameBorder="0"
		style={{ border: 0 }}
		allowFullScreen=""
		aria-hidden="false"
		tabIndex="0"
	></iframe>
)

const OpenHours = () => (
	<div className="mb-20">
		<h1 className="mb-2">Work Hours</h1>
		<ul className="text-indigo-300 font-normal">
			<Day name="Mon" />
			<Day name="Tue" />
			<Day name="Wed" />
			<Day name="Thu" />
			<Day name="Fri" />
			<Day name="Sat" time="10:00 AM - 4:00 PM"/>
			<Day name="Sun" time="Closed"/>
		</ul>
	</div>
)

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const Day = ({ name, time="9:00 AM - 6:00 PM" }) => {
	const day = new Date().getDay()
	
	return (
		<li className={ days[day] == name ? "bg-indigo-600 flex w-64 justify-between font-medium text-white px-4 rounded-md" : "flex w-64 justify-between px-4"}>
			<div>{name}</div>
			<div>{time}</div>
		</li>
	)
}