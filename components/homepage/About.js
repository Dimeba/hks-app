// styles
import styles from './About.module.scss'

// components
import Container from '../global/Container'
import SectionTitle from '../global/SectionTitle'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'

const About = ({ about }) => {
	return (
		<section id='about'>
			<Container>
				<SectionTitle text={about.fields.title} />
				<div className={styles.aboutContent}>
					<div className={styles.highlights}>
						{documentToReactComponents(about.fields.highlights)}
					</div>

					<div className={styles.description}>
						{documentToReactComponents(about.fields.homepageDescription)}

						<Link href='/about'>
							<button className='buttonRed'>More Info</button>
						</Link>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default About
