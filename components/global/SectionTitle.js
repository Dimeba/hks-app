'use client'

// styles
import styles from './SectionTitle.module.scss'

// hooks
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const SectionTitle = ({ text, white, left }) => {
	const [targetRef, isIntersecting] = useIntersectionObserver()

	return (
		<div
			ref={targetRef}
			className={styles.titleContainer}
			style={{ margin: left ? '0 0 2rem 0' : '0 auto 2rem auto' }}
		>
			<h2
				data-text={text}
				className={isIntersecting ? styles.animatedTitle : styles.placeholder}
				style={{
					color: white ? 'white' : ''
				}}
			>
				{text}
			</h2>
		</div>
	)
}

export default SectionTitle
