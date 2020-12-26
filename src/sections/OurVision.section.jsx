import ResponsivePicture from '../../components/Media/ResponsivePicture'

const OurVisionSection = () => {
	return (
		<section className="relative min-w-screen min-h-screen flex flex-col md:flex-row">
			<div className="w-auto h-2/4 md:w-2/4 md:h-auto">
				<ResponsivePicture
					position="relative"
					src="/img/ic-auto-tek-inside-01.jpg"
					alt="Inside of IC Auto Tek automotive car mechanics shop in North Vancouver, BC."
					width="100%"
					height="100%"
					backgroundColor="rgba(200,200,200, 0.1)"
				/>
			</div>

			<div className="flex-grow w-auto h-2/4 md:w-2/4 md:h-auto bg-indigo-600 text-indigo-100 flex flex-col justify-center items-center px-12 text-sm lg:text-3xl">
				<div className="max-w-lg">
					<p className="mb-6">
						We strive to be knowledgeable in the latest in
						technology so our team can quickly diagnose issues and
						perform necessary repairs right, the first time.
					</p>

					<p className="mb-6">
						Have peace of mind, because we won't try to sell you
						service you don’t need.
					</p>
				</div>
			</div>
		</section>
	)
}

export default OurVisionSection
