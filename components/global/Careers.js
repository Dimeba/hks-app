// styles
import styles from './Careers.module.scss'

// components
import Container from './Container'
import SectionTitle from './SectionTitle'
import Link from 'next/link'
import { BiPlus } from 'react-icons/bi'
import { BiMinus } from 'react-icons/bi'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Careers = ({ careers }) => {
	return (
		<section id='careers'>
			<Container>
				<SectionTitle text={careers.fields.title} />

				<div className={styles.careersContainer}>
					<div className={styles.careers}>
						{careers.fields.careers.map(item => (
							<Link
								key={item.sys.id}
								href={'https:' + item.fields.file.fields.file.url}
								target='_blank'
								aria-label='Link to document'
							>
								<div>
									<BiPlus color='#e63122' size='24px' />

									<h4>{item.fields.title}</h4>
								</div>
							</Link>
						))}
					</div>

					<div className={styles.description}>
						{documentToReactComponents(careers.fields.description)}
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Careers
