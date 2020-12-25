import ResponsivePicture from '../../components/Media/ResponsivePicture'

import PricingBlock from '../../components/PricingBlock'
import ChipIcon from '../icons/chip'
import AdjustmentsIcon from '../icons/adjustments'
import LightningBoltIcon from '../icons/lightning-bolt'

const IndexTopSection = () => {
	return (
		<section>
			<ResponsivePicture
				className="absolute top-0 left-0"
				position="absolute"
				src="/img/ic-auto-tek-outside-05.jpg"
				width="100%"
				height="100vh"
				backgroundColor="#273d5f"
			/>

			<div className="relative min-w-screen min-h-screen flex flex-col justify-end pointer-events-none">
				<div className="flex flex-wrap items-end pointer-events-auto" style={{ maxWidth: '75%'}}>
					<PricingBlock
						title="Free Diagnostic"
						price={0}
						items={[
							'Full Assessment of ALL potential electrical issues',
							'Detailed advice and explanation given',
						]}
						icon={
							<ChipIcon className="flex-shrink-0 flex-grow-0 w-8 h-8 xs:w-12 xs:h-12 text-yellow-500" />
						}
					/>

					<PricingBlock
						title="Electrical Service"
						price={90}
						items={[
							'Assessment of entire system',
							'Shorts in the system',
							'Replacement of defective modules',
							'Computer analysis',
							'Rewiring',
							'Camera installation',
							'etc.',
						]}
						icon={
							<LightningBoltIcon className="flex-shrink-0 flex-grow-0 w-8 h-8 xs:w-12 xs:h-12 text-yellow-500" />
						}
					/>

					<PricingBlock
						title="Full Service &amp; Tune-ups"
						price={80}
						items={[
							'All models tuned up with regular oil',
							'Inspections and replacements',
							'Full advice',
						]}
						icon={
							<AdjustmentsIcon className="flex-shrink-0 flex-grow-0 w-8 h-8 xs:w-12 xs:h-12 text-yellow-500" />
						}
					/>
				</div>
			</div>
		</section>
	)
}

export default IndexTopSection
