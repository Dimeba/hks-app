'use client'

// styles
import styles from './Contact.module.scss'

// components
import SectionTitle from './SectionTitle'

// map
import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Contact = ({ contact }) => {
	return (
		<div className={styles.contact}>
			<Map
				initialViewState={{
					longitude: contact.fields.longitude,
					latitude: contact.fields.latitude,
					zoom: 14
				}}
				style={{ minHeight: '400px' }}
				mapStyle='mapbox://styles/mapbox/light-v10'
				mapboxAccessToken={process.env.mapboxToken}
				scrollZoom={false}
			>
				<Marker
					longitude={contact.fields.longitude}
					latitude={contact.fields.latitude}
					color='#152348'
				/>
			</Map>

			<div className={styles.formContainer}>
				<SectionTitle text={contact.fields.title} left />

				<form
					name='contact'
					method='POST'
					// netlify-honeypot='bot-field'
					// data-netlify='true'
					action='/success'
					className={styles.contactForm}
				>
					<input type='hidden' name='form-name' value='contact' />

					<input
						type='text'
						id='firstName'
						name='firstName'
						placeholder='First Name'
					/>

					<input
						type='text'
						id='lastName'
						name='lastName'
						placeholder='Last Name'
					/>

					<input
						type='text'
						id='company'
						name='company'
						placeholder='Company'
					/>

					<input
						type='email'
						id='email'
						name='email'
						placeholder='Email Address'
					/>

					<textarea
						id='message'
						name='message'
						placeholder='Type Something..'
					/>

					<button className='buttonRed' type='submit'>
						Send
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
