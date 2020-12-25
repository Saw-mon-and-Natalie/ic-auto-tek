import { PhoneIcon } from '../../src/icons'

const GetQuote = ({ phone }) => (
    <a className="fixed right-4 bottom-4 z-20 bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-indigo-50 rounded-full shadow-xl text-center p-4 sm:px-12 sm:py-6"  href={`tel:${phone}`}>
        <PhoneIcon className="w-6 h-6 block sm:hidden"/>
        <div className="text-sm font-medium hidden sm:block">Call us today for a quote</div>
        <div className="text-lg font-bold hidden sm:block">{phone}</div>
    </a>
)

export default GetQuote