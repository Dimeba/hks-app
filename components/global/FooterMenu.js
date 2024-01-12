'use client'

// styles
import styles from './Footer.module.scss'

// components
import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

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
					{menu.map(item => (
						<li key={item.name}>
							<Link href={item.url} aria-label={item.name}>
								{item.name}
							</Link>
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
						<BsInstagram color='white' size='24px' />
					</Link>

					<Link
						target='_blank'
						href={contact.fields.linkedIn}
						aria-label='Link to LinkedIn Profile'
					>
						<BsLinkedin color='white' size='24px' />
					</Link>
				</div>

				<div>
					<ul>
						<Link href='/privacy/#privacy' scroll={false} passHref>
							<li>Privacy Policy</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default FooterMenu
