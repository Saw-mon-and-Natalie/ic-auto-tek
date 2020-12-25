import CheckIcon from '../../src/icons/check'

const PricingBlock = ({ title, price, items, icon }) => {
    return (
        <div className="group relative max-w-xs mt-0 xs:mt-auto m-4 pointer-events-none">
            <ul className="absolute -top-4 transform -translate-y-full bg-white opacity-0 text-sm transition-opacity group-hover:opacity-100 m-4 mb-0 px-6 pt-6 pb-5 rounded-t-md border">
                {
                    items.map( item => (
                        <li className="flex items-start" key={item}>
                            <CheckIcon className="w-4 h-4 text-green-600 mr-4 flex-shrink-0"/>
                            <p className="text-xs text-indigo-400">{item}</p>
                        </li>
                    ))
                }
            </ul>
            <div className="flex max-w-xs items-center bg-white rounded-md  pl-2 pr-4 py-3 xs:pl-8 xs:pr-10 xs:py-5 cursor-pointer shadow-2xl pointer-events-auto">
                <div className="flex items-center flex-grow">
                    {icon}
                    <h1 className="font-bold ml-2 mr-10 text-xs xs:text-base">{title}</h1>
                </div>
                
                <div className="flex flex-col items-end">
                    <div className="text-indigo-400 text-right text-xs">from</div>
                    <div className="text-sm xs:text-3xl font-bold">${price}</div>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default PricingBlock