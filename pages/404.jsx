
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import ResponsivePicture from '../components/Media/ResponsivePicture'
import Link from 'next/link'

const url = process.env.NEXT_PUBLIC_BASEURL + '/404'
const title = 'Page Not Found | IC Auto Tek - Auto Repairs and Inspections'
const description = "We are sorry, the page you have requested does not exist. Perhaps you would like to stop by our shop on lower londsdale in North Vancouver."

const FourOFour = () => {
    return (
        <>
            <BreadcrumbJsonLd 
				itemListElements={[
					{
						position: 1,
						name: '404 - Page Not Found',
						item: url
					},
				]}
			/>
            <NextSeo 
				title={title}
				description={description}
				canonical={url}

				twitter={{
					title: title,
					description: description,
				}}

				openGraph={{
					url: url,
					title: title,
					description: description,
				}}
			/>
            <section className="flex justify-center items-center min-h-screen">
                <ResponsivePicture
                    className="absolute top-0 left-0"
                    position="absolute"
                    src="/img/ic-auto-tek-inside-06.jpg"
                    alt="An old collector Dodge car restored in IC Auto Tek automotive repair shop."
                    width="100%"
                    height="100vh"
                    backgroundColor="#273d5f"
                />
                <div className="relative bg-white max-w-md text-sm xs:text-base p-6 xs:p-8 m-auto xs:rounded-md text-indigo-500">
                    <h1 className="font-bold text-lg mb-4">Page Not Found</h1>
                    <p className="mb-2">Perhaps you were too excited to get your car fixed and entered a wrong url.</p>
                    
                    <p className="mb-2">Give us a call at <a className="text-indigo-600 font-bold" href="tel:+1 (604) 960-0389">+1 (604) 960-0389</a> to discuss more what auto services we can provide. We are always happy to have a chat with you.</p>
                    <p >or you can go back to the <span className="text-indigo-600 font-bold"><Link href="/">home</Link></span> page.</p>
                </div>
            </section>
        </>
    )
}

export default FourOFour