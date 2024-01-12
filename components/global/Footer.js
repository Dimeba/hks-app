// styles
import styles from './Footer.module.scss'

// components
import Container from './Container'
import Contact from './Contact'
import FooterMenu from './FooterMenu'

const Footer = ({ contact }) => {
	return (
		<footer id='contact' className={styles.footer}>
			<Container newClass={styles.footerContent}>
				<Contact contact={contact} />
				<FooterMenu contact={contact} />
			</Container>
		</footer>
	)
}

export default Footer
