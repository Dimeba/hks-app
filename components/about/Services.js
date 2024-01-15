// styles
import styles from './Services.module.scss'

// components
import { BiPlus } from 'react-icons/bi'
import { BiMinus } from 'react-icons/bi'

const Services = ({ services, toggleService, selectedService }) => {
	return (
		<div className={styles.services}>
			{services.map((service, index) => (
				<div
					key={service.sys.id}
					className={styles.service}
					onClick={() => toggleService(index)}
				>
					<div className={styles.title}>
						{selectedService === index ? (
							<BiMinus color='#e63122' size='24px' />
						) : (
							<BiPlus color='#e63122' size='24px' />
						)}
						<h4>{service.fields.title}</h4>
					</div>

					{selectedService === index ? (
						<p className={styles.serviceText}>{service.fields.description}</p>
					) : (
						''
					)}
				</div>
			))}
		</div>
	)
}

export default Services
