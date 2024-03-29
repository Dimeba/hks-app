'use client'

// styles
import styles from './Header.module.scss'

// components
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { Spin as Hamburger } from 'hamburger-react'

// hooks
import { useContext, useState } from 'react'

// context
import { MenuContext } from '@/context/MenuContext'

const Header = ({ contact }) => {
	const { menu } = useContext(MenuContext)
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<header className={styles.header}>
			<Container newClass={styles.navigation}>
				<Link href='/' aria-label='Homepage'>
					<Image
						src='/logo-primary.svg'
						width={60}
						height={60}
						style={{ display: 'block' }}
						alt='Logo'
					/>
				</Link>

				<div className={styles.hamburger}>
					<Hamburger
						color='#152348'
						size={24}
						toggled={openMenu}
						toggle={setOpenMenu}
					/>
				</div>

				<div className={`${styles.menu} ${!openMenu && styles.hidden}`}>
					{menu
						.filter(item => item.name != 'Careers' && item.name != 'Contact')
						.map(item => (
							<div className={styles.menuItem} key={item.name}>
								<Link href={item.url} aria-label={item.name}>
									<p onClick={() => setOpenMenu(false)}>{item.name}</p>
								</Link>
								{item.dropdown && (
									<div className={styles.dropdown}>
										<a href={item.dropdownUrl}>{item.dropdown}</a>
									</div>
								)}
							</div>
						))}

					{menu
						.filter(item => item.name == 'Careers' || item.name == 'Contact')
						.map(item => (
							<div key={item.name}>
								<a href={item.url} aria-label={item.name}>
									<p onClick={() => setOpenMenu(false)}>{item.name}</p>
								</a>
							</div>
						))}
				</div>

				<div className={`${styles.socialMedia} ${!openMenu && styles.hidden}`}>
					<Link
						target='_blank'
						href={contact.fields.instagram}
						aria-label='Link to Instagram Profile'
					>
						<Image
							src='/instagram-blue.svg'
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
							src='/linkedin-blue.svg'
							width={24}
							height={24}
							alt='linkedin'
						/>
					</Link>
				</div>
			</Container>
		</header>
	)
}

export default Header
