export const Icon = ({ children, className, style }) => (
	<svg className={className ? `${className}` : "w-6 h-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor" style={style}>
		{children}
	</svg>
)

export default Icon

export { AdjustmentsIcon } from './adjustments'
export { CheckCircleIcon } from './check-circle'
export { CheckIcon } from './check'
export { ChevronLeftIcon } from './ChevronLeft'
export { ChevronRightIcon } from './ChevronRight'
export { ChipIcon } from './chip'
export { InboxIcon } from './inbox'
export { LightningBoltIcon } from './lightning-bolt'
export { LocationMarkerIcon } from './location-marker'
export { MenuIcon } from './Menu'
export { PhoneIcon } from './phone'