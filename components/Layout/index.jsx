import Header from './Header'
import Footer from './Footer'
import GetQuote from '../GetQuote'
import React from 'react'
import Head from 'next/head'
import { Provider, connect } from 'react-redux'
import store from './Store'
import WindowContainer from '../Window'

const keywords = [
	"saw-mon & natalie",
	"sawmonandnatalie",
	"sawmon and natalie",
	"saw-monandnatalie"
  ].join(",")

const title = 'IC Auto Tek'
const description = ''

const InnerLayout = ({ children }) => {
    return (
        <>
            <Head>
				<link rel="canonical" key="link_canonical" href={process.env.BASEURL} />
				<title key="meta_title">{title}</title>
				<meta name="description" key="meta_description" content={description}/>
				<meta name="keywords" key="meta_keywords" content={keywords} />
			</Head>
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