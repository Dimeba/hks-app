'use client'

// styles
import styles from './AboutSection.module.scss'

// components
import Services from './Services'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// hooks
import { useState } from 'react'

const AboutSection = ({ about }) => {
	const [selectedService, setSelectedService] = useState(0)

	const toggleService = index => {
		setSelectedService(selectedService === index ? null : index)
	}

	return (
		<div className={styles.about}>
			{/* Text */}
			<div className={styles.text}>
				{documentToReactComponents(about.fields.aboutPageDescription)}
			</div>

			{/* Services */}
			<div className={styles.services}>
				<h3>Services</h3>
				<Services
					services={about.fields.services}
					toggleService={toggleService}
					selectedService={selectedService}
				/>
			</div>
		</div>
	)
}

export default AboutSection
