import ResponsivePicture from '../../../components/Media/ResponsivePicture'

const OurTeamSection = () => {
	return (
		<>
			<Eivaz /> 
			<Masoud />
		</>
	)
}

export default OurTeamSection

export const Eivaz = () => {
	return (
		<section className="h-screen md:h-auto relative min-w-screen min-h-screen flex flex-col md:flex-row">
			<div className="w-auto h-2/4 md:w-2/4 md:h-auto">
				<ResponsivePicture
					position="relative"
					src="/img/ic-auto-tek-eivaz-hashemi.jpg"
					alt="Eivaz Hashemi, the owner and automotive technician of IC Auto Tek automotive shop in Northshore, BC."
					width="100%"
					height="100%"
					backgroundColor="rgba(200,200,200, 0.1)"
				/>
			</div>
			<div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-8 text-white font-medium" style={{ writingMode: 'vertical-lr' }}>
				Our Team
			</div>
			<PersonInfo name="Eivaz Hashemi" title="Owner/Technician" phone="+1 (604) 960-0398" />
		</section>
	)
}

export const Masoud = () => {
	return (
		<section className="h-screen md:h-auto relative min-w-screen min-h-screen flex flex-col md:flex-row">
			
			<div className="absolute bottom-0 right-0 bg-indigo-600 px-4 py-8 text-white font-medium" style={{ writingMode: 'vertical-lr' }}>
				Our Team
			</div>
			<PersonInfo name="Masoud Varghan" title="Technician" phone="+1 (604) 980-5311" />
			<div className="w-auto h-2/4 md:w-2/4 md:h-auto">
				<ResponsivePicture
					position="relative"
					src="/img/ic-auto-tek-masoud-varghan.jpg"
					alt="Masoud Varghan, an IC Auto Tek technician. North Vancouver, BC."
					width="100%"
					height="100%"
					backgroundColor="rgba(200,200,200, 0.1)"
				/>
			</div>
		</section>
	)
}

const PersonInfo = ({ name, title, phone }) => (
	<div className="w-auto h-2/4 md:w-2/4 md:h-auto text-indigo-600 flex flex-col justify-center items-center px-12 text-sm lg:text-3xl">
		<div>
			<h1 className="mb max-w-lg text-xl lg:text-6xl font-bold">{name}</h1>
			<div className="text-indigo-300 mb-10 lg:mb-40">{title}</div>
			<a href={`tel:${phone}`} className="font-bold hover:text-indigo-800">{phone}</a>
			<br />
			<a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="hover:text-indigo-800">{process.env.NEXT_PUBLIC_EMAIL}</a>
		</div>
	</div>
)
