import ResponsivePicture from '../../components/Media/ResponsivePicture'

const AboutCompanySection = () => {
	return (
		<section className="relative min-w-screen min-h-screen flex flex-col md:flex-row">
			<div className="flex-grow w-auto h-2/4 md:w-2/4 md:h-auto bg-indigo-600 text-indigo-100 flex flex-col justify-center items-center px-12 text-sm lg:text-3xl">
				<div className="max-w-lg">
				<p className="mb-6">
					<span className="text-white font-bold">IC Auto Tek</span> is
					a welcoming, local mechanic shop in North Vancouver.
				</p>

				<p className="mb-6">
					Fluent in diagnostic and repair, specializing in Electrical
					issues for Audi, Mercedes, BMW, VW, Porsche, amongst other
					models.
				</p>

				<p className="mb-6">
					We are open every day except sunday and will be happy to
					help.
				</p>
				</div>
			</div>
			<div className="w-auto h-2/4 md:w-2/4 md:h-auto">
				<ResponsivePicture
					position="relative"
					src="/img/ic-auto-tek-inside-07.jpg"
					alt="A BMW car fully rebuilt and fixed in IC Auto Tek automotive shop in North Vancouver, BC."
					width="100%"
					height="100%"
					backgroundColor="rgba(200,200,200, 0.1)"
				/>
			</div>
		</section>
	)
}

export default AboutCompanySection
