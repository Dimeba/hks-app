'use client'

// styles
import styles from './Footer.module.scss'

// components
import Link from 'next/link'
import Image from 'next/image'

// hooks
import { useContext } from 'react'

// context
import { MenuContext } from '@/context/MenuContext'

const FooterMenu = ({ contact }) => {
	const { menu } = useContext(MenuContext)

	return (
		<div className={styles.footerMenu}>
			{/* Contact Info */}
			<div className={styles.singleColumn}>
				<p>Contact Info</p>
				<ul>
					<li>{contact.fields.phone}</li>

					<li>{contact.fields.email}</li>

					<li>
						{contact.fields.street}, {contact.fields.floor}
					</li>

					<li>{contact.fields.location}</li>
				</ul>
			</div>

			<div className={styles.doubleColumn}>
				<p>Site Map</p>
				<ul>
					{menu
						.filter(item => item.name != 'Contact')
						.map(item => (
							<li key={item.name}>
								<a href={item.url} aria-label={item.name}>
									{item.name}
								</a>
							</li>
						))}
				</ul>
			</div>

			<div className={`${styles.singleColumn} ${styles.lastColumn}`}>
				<div className={styles.socialMedia}>
					<Link
						target='_blank'
						href={contact.fields.instagram}
						aria-label='Link to Instagram Profile'
					>
						<Image
							src='/instagram-white.svg'
							width={24}
							height={24}
							alt='instagram'
						/>
					</Link>

					<Link
						target='_blank'
						href={contact.fields.linkedIn}
						aria-label='Link to LinkedIn Profile'
					>
						<Image
							src='/linkedin-white.svg'
							width={24}
							height={24}
							alt='linkedin'
						/>
					</Link>
				</div>

				<div>
					<ul>
						<Link href='/privacy-policy'>
							<li>Privacy Policy</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default FooterMenu
