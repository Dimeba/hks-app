// styles
import styles from './Transactions.module.scss'

// components
import Container from '../global/Container'
import SectionTitle from '../global/SectionTitle'

const Transactions = ({ transactions }) => {
	return (
		<section className={styles.transactions}>
			<Container>
				<SectionTitle text={transactions.fields.title} />
				<p>{transactions.fields.description}</p>
			</Container>
		</section>
	)
}

export default Transactions
