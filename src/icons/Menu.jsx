import Icon from './index'

export const MenuIconOld = ({ className }) => (
	<Icon className={className}>
		<path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8h16M4 16h16"
        />
	</Icon>
)

export const MenuIcon = ({ className, open }) => (
	<div className={className}>
		<span className={open ? "absolute top-1/2 block w-6 h-1 bg-white my-0" : "block w-6 bg-white my-2"} style={{ height: '1px', }}></span>
        <span className={open ? "absolute top-1/2 block w-6 h-1 bg-white my-0" : "block w-6 bg-white my-2"} style={{ height: '1px', }}></span>
	</div>
)

export default MenuIcon