'use client'

// styles
import styles from './Hero.module.scss'

// components
import Container from '../global/Container'
import Tracker from './Tracker'

// hooks
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const Hero = ({ hero }) => {
	const options = {
		root: null,
		rootMargin: '0%',
		threshold: 0
	}

	const [targetRef, isIntersecting] = useIntersectionObserver(options)

	return (
		<section className={styles.hero} id='hero'>
			<video
				ref={targetRef}
				className={styles.heroVideo}
				autoPlay
				loop
				poster={'https:' + hero.fields.videoPlaceholder.fields.file.url}
				muted
				playsInline
				preload='auto'
			>
				{isIntersecting && (
					<source
						src={'https:' + hero.fields.video.fields.file.url}
						type='video/mp4'
					/>
				)}
			</video>

			<Container newClass={styles.heroContent}>
				<div className={styles.heroPlaceholer}></div>

				{/* Title, subtitle and services */}
				<div className={styles.title}>
					<h1>{hero.fields.title}</h1>
					<p>{hero.fields.subtitle}</p>
					<ul className={styles.dynamicText}>
						{hero.fields.services.map(service => (
							<li key={service.sys.id}>
								<span data-text={service.fields.title}>
									{service.fields.title}
								</span>
							</li>
						))}
					</ul>
				</div>

				<Tracker hero={hero} />
			</Container>
		</section>
	)
}

export default Hero
