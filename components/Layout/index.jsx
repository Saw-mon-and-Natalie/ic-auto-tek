import Header from './Header'
import Footer from './Footer'
import GetQuote from '../GetQuote'
import React from 'react'
import Head from 'next/head'
import { DefaultSeo, LocalBusinessJsonLd, LogoJsonLd, BreadcrumbJsonLd } from 'next-seo'
import { Provider, connect } from 'react-redux'
import store from './Store'
import WindowContainer from '../Window'

// Vancouver auto repairs – brakes, tuneups, electrical, transmission, clutches, oil and lube, power steering, cooling system, fuel injection, air conditioning

const keywords = [
	'eivaz hashemi',
	'masoud varghan',
	'ic auto tek',
	'ic auto tek vancouver',
	'ic auto tek north vancouver',
	'ic auto tek west vancouver',
	'ic auto tek northshore',
	"saw-mon & natalie",
	"sawmonandnatalie",
	"sawmon and natalie",
	"saw-monandnatalie",
	"saw-mon and natalie design",
	"designed by saw-mon and natalie",
	'oil change vancouver',
    'mechanic vancouver',
    'car service vancouver',
    'auto repair vancouver',
    'mobile mechanic vancouver',
    'car mechanic vancouver',
	'auto mechanic vancouver',

	'brake replacement vancouver',
	'vehicle inspection vancouver',
	'battery replacement vancouver',
	'car battery replacement vancouver',
	'car mechanic reasonable price vancouver',
	'honest car mechanic vancouver',
	'free car diagnotic vancouver',
	'car electrical service vancouver',
	'full service and tune-ups vancouver',
	'car computer analysis vancouver',
	'car rewiring vancouver',
	'car camera installation vancouver',
	'valve replacement vancouver',
	'engine overhaul vancouver',
	'car engine light vancouver',
	'brake pad replacement vancouver',
	'brake shoe replacement vancouver',
	'brake hose replacement vancouver',
	'brake fluid bleed and refill vancouver',
	'car traction control adjustment vancouver',
	'ABS brake service vancouver',
	'suspension service vancouver',
	'car mechanics discounts vancouver',
	'car parts discounts vancouver',
	'honest labour fees vancouver',
	'local mechanic shop vancouver',

	'oil change west vancouver',
    'mechanic west vancouver',
    'car service west vancouver',
    'auto repair west vancouver',
    'mobile mechanic west vancouver',
    'car mechanic west vancouver',
	'auto mechanic west vancouver',

	'brake replacement west vancouver',
	'vehicle inspection west vancouver',
	'battery replacement west vancouver',
	'car battery replacement west vancouver',
	'car mechanic reasonable price west vancouver',
	'honest car mechanic west vancouver',
	'free car diagnotic west vancouver',
	'car electrical service west vancouver',
	'full service and tune-ups west vancouver',
	'car computer analysis west vancouver',
	'car rewiring west vancouver',
	'car camera installation west vancouver',
	'valve replacement west vancouver',
	'engine overhaul west vancouver',
	'car engine light west vancouver',
	'brake pad replacement west vancouver',
	'brake shoe replacement west vancouver',
	'brake hose replacement west vancouver',
	'brake fluid bleed and refill west vancouver',
	'car traction control adjustment west vancouver',
	'ABS brake service west vancouver',
	'suspension service west vancouver',
	'car mechanics discounts west vancouver',
	'car parts discounts west vancouver',
	'honest labour fees west vancouver',
	'local mechanic shop west vancouver',

	'oil change northshore',
    'mechanic northshore',
    'car service northshore',
    'auto repair northshore',
    'mobile mechanic northshore',
    'car mechanic northshore',
	'auto mechanic northshore',

	'brake replacement northshore',
	'vehicle inspection northshore',
	'battery replacement northshore',
	'car battery replacement northshore',
	'car mechanic reasonable price northshore',
	'honest car mechanic northshore',
	'free car diagnotic northshore',
	'car electrical service northshore',
	'full service and tune-ups northshore',
	'car computer analysis northshore',
	'car rewiring northshore',
	'car camera installation northshore',
	'valve replacement northshore',
	'engine overhaul northshore',
	'car engine light northshore',
	'brake pad replacement northshore',
	'brake shoe replacement northshore',
	'brake hose replacement northshore',
	'brake fluid bleed and refill northshore',
	'car traction control adjustment northshore',
	'ABS brake service northshore',
	'suspension service northshore',
	'car mechanics discounts northshore',
	'car parts discounts northshore',
	'honest labour fees northshore',
	'local mechanic shop northshore',
	
	'oil change north vancouver',
    'mechanic north vancouver',
    'car service north vancouver',
    'auto repair north vancouver',
    'mobile mechanic north vancouver',
    'car mechanic north vancouver',
	'auto mechanic north vancouver',
	
	'brake replacement north vancouver',
	'vehicle inspection north vancouver',
	'battery replacement north vancouver',
	'car battery replacement north vancouver',
	'car mechanic reasonable price north vancouver',
	'honest car mechanic north vancouver',
	'free car diagnotic north vancouver',
	'car electrical service north vancouver',
	'full service and tune-ups north vancouver',
	'car computer analysis north vancouver',
	'car rewiring north vancouver',
	'car camera installation north vancouver',
	'valve replacement north vancouver',
	'engine overhaul north vancouver',
	'car engine light north vancouver',
	'brake pad replacement north vancouver',
	'brake shoe replacement north vancouver',
	'brake hose replacement north vancouver',
	'brake fluid bleed and refill north vancouver',
	'car traction control adjustment north vancouver',
	'ABS brake service north vancouver',
	'suspension service north vancouver',
	'car mechanics discounts north vancouver',
	'car parts discounts north vancouver',
	'honest labour fees north vancouver',
	'local mechanic shop north vancouver',

	'Vancouver auto repairs',
	'North Vancouver auto repairs',
	'West Vancouver auto repairs',
	'Northshore auto repairs',
	'brakes', 
	'tuneups', 
	'electrical', 
	'transmission', 
	'clutches', 
	'oil and lube', 
	'power steering', 
	'cooling system', 
	'fuel injection', 
	'air conditioning'
  ].join(",")

const title = "IC Auto Tek | North Vancouver Auto Repairs and Inspections"
const description = "The best most affordable Auto Repair Shop in North Vancouver, West Vancouver, and lower mainland, BC. Located in Northshore with reasonable and honest labour fees."

const url = process.env.NEXT_PUBLIC_BASEURL
const tel = process.env.NEXT_PUBLIC_TEL
const image = process.env.NODE_ENV == 'development' ? url + '/ic-auto-tek-outside-opengraph-image' : '/ic-auto-tek-outside-opengraph-image'

const InnerLayout = ({ children }) => {
    return (
        <>
			<Head>
				<meta name="viewport" content="width=device-width,minimum-scale=1.0,initial-scale=1,user-scalable=yes" />
			</Head>
            <DefaultSeo 
				title={title}
				description={description}
				canonical={url}
				additionalMetaTags={[
					{
						name: 'keywords',
						content: keywords
					},
					{
						name: 'theme-color',
						content: '#5a7092'
					},
				]}

				twitter={{
					cardType: 'summary_large_image',
					handle: 'sw0nt',
					title: title,
					description: description,
					image: image + '.webp'
				}}

				openGraph={{
					type: 'website',
					url: url,
					title: title,
					description: description,
					images: [
						{
							url: image + '.jpg',
							width: 1200,
							height: 1200,
							alt: 'IC Auto Tek - North Vancouver\'s Most Trusted Auto Repair and Inspection Car Shop Street View.'
						},
					]
				}}
			/>

			<LocalBusinessJsonLd 
				type="AutomotiveBusiness"
				id={url}
				name={title}
				description={description}
				url={url}
				telephone={tel}
				address={{
					streetAddress: '330 East Esplanade',
					addressLocality: 'North Vancouver',
					addressRegion: 'BC',
					postalCode: 'V7L 1A4',
					addressCountry: 'Canada'
				}}
				geo={{
					latitude: '49.3080729',
					longitude: '-123.0721326'
				}}
				images={[
					process.env.NEXT_PUBLIC_BASEURL + '/ic-auto-tek-outside-05.jpg',
					process.env.NEXT_PUBLIC_BASEURL + '/ic-auto-tek-inside-04.jpg',
					process.env.NEXT_PUBLIC_BASEURL + '/ic-auto-tek-inspection-06.jpg',
					process.env.NEXT_PUBLIC_BASEURL + '/ic-auto-tek-inspection-07.jpg',
				]}
				openingHours={[
					{
						opens: '09:00',
						closes: '18:00',
						dayOfWeek: [
							'Monday',
							'Tuesday',
							'Wednesday',
							'Thursday',
							'Friday'
						]
					},
					{
						opens: '10:00',
						closes: '16:00',
						dayOfWeek: [
							'Saturday'
						]
					},
				]}
				priceRange='$$'
				rating={{
					ratingValue: '5',
					ratingCount: '24'
				}}
			/>

			<LogoJsonLd 
				url={url}
				logo={url + '/assets/ic-auto-tek-logo.svg'}
			/>

			<BreadcrumbJsonLd 
				itemListElements={[
					{
						position: 1,
						name: 'Home',
						item: url
					},
				]}
			/>
			<GetQuote phone="+1 (604) 960-0389" />
            <div data-scroll-container>
				<main>
					{ children }
				</main>
				<Header />
				
			</div>
			<Footer />
			<WindowContainer />
        </>
    )
}

const mapWindowStateToProps = state => state.window

const InnerLayoutContainer = connect(
	mapWindowStateToProps
)(InnerLayout)

const Layout = ({ children }) => {
	return (
		<Provider store={store}>
			<InnerLayoutContainer>{children}</InnerLayoutContainer>
		</Provider>
	)
}

export default Layout