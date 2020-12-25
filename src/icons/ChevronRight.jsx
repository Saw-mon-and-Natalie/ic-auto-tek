import Icon from './index'

export const ChevronRightIcon = ({ className, style }) => (
	<Icon className={className} style={style}>
		<path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
        />
	</Icon>
)

export default ChevronRightIcon