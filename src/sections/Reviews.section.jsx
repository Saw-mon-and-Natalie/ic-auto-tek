import React, { useState, useRef, useEffect } from 'react'
import ReviewCard from '../../components/ReviewCard'
import ResponsivePicture from '../../components/Media/ResponsivePicture'
import { ChevronLeftIcon, ChevronRightIcon } from '../icons'

const ReviewsSection = () => {
	return (
		<section className="relative min-w-screen min-h-screen flex bg-red-400 justify-center items-center">
			<ResponsivePicture
				className="absolute top-0 left-0"
				position="absolute"
				src="/img/ic-auto-tek-inside-04.jpg"
				alt="Eivaz Hashemi playing with a dog after he has finished helping all the customers with their vehicle issues in IC Auto Tek garage shop in North Vancouver, BC."
				width="100%"
				height="100vh"
				backgroundColor="#273d5f"
			/>
			<div className="absolute bottom-8 left-0 bg-indigo-600 px-4 py-8 text-white font-medium" style={{ writingMode: 'vertical-lr' }}>
				Happy Clients
			</div>
			<ReviewsSlide>
				<ReviewCard author="Toby Butler" carType="BMW Z4">
					Definitely the smartest and fastest mechanic I have had in a
					long time. He diagnosed my dashboard issues and had it
					repaired with time to spare.
				</ReviewCard>
				<ReviewCard author="Donn Smith" carType="Maclaren">
					Haven't hestitated in recommending Eivaz's business to
					anyone. Incredibly reasonable for a high end mechanic and
					electrical engineer, but also extremely efficient.
				</ReviewCard>
				<ReviewCard author="Christian McLeod" carType="Dodge RAM Van">
					The most honest and trustworthy mechanic I have been too,
					not to mention the most reasonable. His knowledge of
					mechanics as well as electronics is something we have lacked
					with 4 other mechanic along our Journey from California to
					Alaska. Finally our van is running.
				</ReviewCard>
				<ReviewCard author="Oana Simmons" carType="Audi A5">
					Struggled to find a mechanic that would resolve our
					electrical issues for over a week, then we spotted Eivaz
					online. Only a day and he had solved the issue and also some
					other issues, we didn't even know we had.
				</ReviewCard>
				<ReviewCard author="Richard Sutcliffe" carType="VW Passat">
					Stumbled onto this hidden gem of a service company.
					Absolutely blew me away finding out this mechanic could sort
					out my electrical issues also. Embrace the journey
				</ReviewCard>
				<ReviewCard author="Debbie Gibson" carType="BMW 7 Series">
					Fast, smart, and honest. Couldn't ask for more. most definitely a return customer.
				</ReviewCard>
			</ReviewsSlide>
		</section>
	)
}

export default ReviewsSection

const ReviewsSlide = ({ children }) => {
	const numSlides = React.Children.count(children)
	const [currentSlide, setCurrentSlide] = useState(0)
	const cID = useRef(null)

	const onNext = () => {
		clearInterval(cID.current)
		setCurrentSlide((c) => (c + 1) % numSlides)
	}

	const onPrevious = () => {
		clearInterval(cID.current)
		setCurrentSlide((c) => (c + numSlides - 1) % numSlides)
	}

	useEffect(() => {
		const cyclyingID = setInterval(() => {
			setCurrentSlide((c) => (c + 1) % numSlides)
		}, 3000)

		cID.current = cyclyingID
		return () => {
			clearInterval(cyclyingID)
		}
	}, [])
	return (
		<div className="relative flex flex-col items-center w-4/5 xs:w-3/4 lg:w-1/2">
			<div className="relative flex-grow-0 w-full max-w-xl h-96">
				{React.Children.map(children, (child, i) => {
					return (
						<div
							className={`absolute top-0 left-0 text-sm lg:text-base transition-opacity duration-500 ${currentSlide == i ? 'delay-500 opacity-100' : 'opacity-0'}`}
						>
							{child}
						</div>
					)
				})}
			</div>
			<div className="flex w-32 justify-around">
				<div
					onClick={onPrevious}
					className="w-12 h-12 bg-indigo-600 text-white rounded-full hover:bg-white hover:text-indigo-600 cursor-pointer"
				>
					<ChevronLeftIcon className="w-6 h-6 mt-3 ml-3"/>
				</div>
				<div
					onClick={onNext}
					className="w-12 h-12 bg-indigo-600 text-white rounded-full hover:bg-white hover:text-indigo-600 cursor-pointer"
				>
					<ChevronRightIcon className="w-6 h-6 mt-3 ml-3"/>
				</div>
			</div>
		</div>
	)
}
