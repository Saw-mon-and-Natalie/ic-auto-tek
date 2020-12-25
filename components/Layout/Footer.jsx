const Footer = () => {
	return (
		<footer className="fixed z-10 top-1/2 right-0 md:top-auto md:right-auto md:bottom-4 mr-4 md:mr-auto w-auto md:w-full flex justify-center transition-opacity opacity-20 hover:opacity-100 transform -translate-y-1/2 md:translate-y-0">
            <a href="https://www.sawmon-and-natalie.com/" target="_blank" rel="noopener noreferrer" className="writing-mode-vertical md:writing-mode-horizontal">
				<p className="inline bg-indigo-50 mb-2 px-2 py-4 md:px-4 md:py-2 rounded-full text-2xs xs:text-xs text-indigo-400 font-medium shadow-2xl border">
					Copyright © {new Date().getFullYear()} | Design by <span className=" text-indigo-600">Saw-mon &amp; Natalie</span>
					
				</p>
            </a>
		</footer>
	)
}

export default Footer
