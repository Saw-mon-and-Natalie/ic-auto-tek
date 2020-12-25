import { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { useCombinedRefs, useIntersectionObserver } from '../../src/hooks'

const ResponsivePictureComponent = ({
	src,
	width = '100%',
	height = '100%',
	objectFit = 'cover',
	objectPosition = 'center',
	breakpoints,
	ratio,
	backgroundColor = 'rgba(0,0,0,0.1)',
	transition = 'opacity 0.5s ease-in-out 0.2s, transform 0.5s ease-in-out',
	borderRadius = '0',
	alt = '',
	devicePixelRatio,
	className,
	position = 'relative',
}) => {
	const [box, setBox] = useState({ width: 0, height: 0 })
	const rootDiv = useCallback((node) => {
		if (node !== null) {
			setBox({
				width: node.getBoundingClientRect().width,
				height: node.getBoundingClientRect().height,
			})
		}
	}, [])

	const boxWidth = useMemo(() => {
		let correctedWidth = box.width
		if (ratio && ratio > 0) {
			if (objectFit === 'cover') {
				const proportainedWidth = box.height * ratio
				if (proportainedWidth > box.width) {
					correctedWidth = proportainedWidth
				}
			} else if (objectFit === 'contain') {
				const proportainedWidth = box.height * ratio
				if (proportainedWidth < box.width) {
					correctedWidth = proportainedWidth
				}
			}
		}
		return correctedWidth * devicePixelRatio
	}, [box, objectFit, ratio, devicePixelRatio])

	const breakpoint = useMemo(() => {
		if (!breakpoints || breakpoints.length === 0) return

		const br = breakpoints.find((breakpoint) => breakpoint > boxWidth)
		return br || breakpoints[breakpoints.length - 1]
	}, [breakpoints, boxWidth])

	const modifiedSrc = useMemo(() => {
		const regex = /(.*)\.([^.]*)$/i
		const [match, filePath, fileExtension, ...rest] = regex.exec(src)
		const suffix = breakpoint ? '-' + breakpoint : ''
		return { src: filePath + suffix, ext: fileExtension }
	}, [src, breakpoint])

	const [setPicRef, picInView, picEntry] = useIntersectionObserver({
		threshold: 0.1,
		root: null,
		rootMargin: '600px',
		triggerOnce: true,
	})

	const setRoot = useCallback(useCombinedRefs(rootDiv, setPicRef), [])

	const pictureRef = useRef(null)
	const webpRef = useRef(null)
	const jpegRef = useRef(null)
	const imgRef = useRef(null)
	const srcRef = useRef(null)

	// useEffect(() => {
	//     if( !pictureRef.current ) return
	//     pictureRef.current.style.width = width
	//     imgRef.current.style.width = '100%'
	// }, [width])

	// useEffect(() => {
	//     if( !pictureRef.current ) return
	//     pictureRef.current.style.height = height
	//     imgRef.current.style.height = '100%'
	// }, [height])

	useEffect(() => {
		if (!pictureRef.current) return
		pictureRef.current.style.objectFit = objectFit
		imgRef.current.style.objectFit = objectFit
	}, [objectFit])

	useEffect(() => {
		if (pictureRef.current === null) return
		pictureRef.current.style.objectPosition = objectPosition
		imgRef.current.style.objectPosition = objectPosition
	}, [objectPosition])

	useEffect(() => {
		if (!pictureRef.current) return
		pictureRef.current.style.transition = transition
		imgRef.current.style.transition = transition
	}, [transition])

	useEffect(() => {
		if (!pictureRef.current) return
		pictureRef.current.style.borderRadius = borderRadius
		imgRef.current.style.borderRadius = borderRadius
	}, [borderRadius])

	const firstLoad = useRef(true)

	useEffect(() => {
		if (!picInView) return
		if (
			pictureRef.current !== null &&
			webpRef.current !== null &&
			imgRef.current !== null
		) {
			const picture = pictureRef.current
			const webp = webpRef.current
			const jpeg = jpegRef.current
			const img = imgRef.current

			if (firstLoad.current) {
				picture.style.opacity = 0

				img.addEventListener('load', () => {
					if (img.complete) {
						if (img.naturalWidth === 0 || img.naturalHeight === 0) {
							console.log(
								`picture failed to load. src: ${
									modifiedSrc.src + '.' + modifiedSrc.ext
								}`
							)
						} else {
							picture.style.opacity = 1
						}
					}
				})
				webp.srcset = modifiedSrc.src + '.webp'
				jpeg.srcset = modifiedSrc.src + '.jpg'
				img.src = modifiedSrc.src + '.' + modifiedSrc.ext
				srcRef.current = modifiedSrc.src + '.' + modifiedSrc.ext

				firstLoad.current = false
			} else if (
				srcRef.current !==
				modifiedSrc.src + '.' + modifiedSrc.ext
			) {
				webpRef.srcset = modifiedSrc.src + '.webp'
				jpeg.srcset = modifiedSrc.src + '.jpg'
				imgRef.src = modifiedSrc.src + '.' + modifiedSrc.ext
				srcRef.current = modifiedSrc.src + '.' + modifiedSrc.ext
			}
		}
	}, [picInView, modifiedSrc])

	return (
		<div ref={setRoot} className={className ? `root ${className}` : 'root'}>
			<div className="pic-filler" />
			<picture
				ref={pictureRef}
				style={{
					position: 'relative',
					display: 'flex',
					margin: 'auto',
					opacity: 0,
					width: '100%',
					height: '100%',
				}}

				className="transform hover:scale-125"
			>
				<source ref={webpRef} type="image/webp" style={{ height: 0 }} />
				<source ref={jpegRef} type="image/jpeg" style={{ height: 0 }} />
				<img
					ref={imgRef}
					alt={alt}
					style={{
						position: 'relative',
						margin: 'auto',
						width: '100%',
						height: '100%',
					}}
					crossOrigin="anonymous"
				/>
			</picture>
			<style jsx>{`
				.root {
					position: ${position};
					display: flex;
					width: ${width};
					height: ${height};
					background-color: ${backgroundColor};
					overflow: hidden;
					border-radius: ${borderRadius};
				}
				.pic-filler {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: ${ratio ? Math.round(100 * ratio) + '%' : '100%'};
				}
			`}</style>
		</div>
	)
}

const mapStateToProps = (state) => ({
	devicePixelRatio: state.window.devicePixelRatio,
})

export const ResponsivePicture = connect(
	mapStateToProps,
	null
)(ResponsivePictureComponent)

export default ResponsivePicture
