'use client'

// styles
import styles from './Transactions.module.scss'

// components
import Container from '../global/Container'
import SectionTitle from '../global/SectionTitle'
import { BiPlus } from 'react-icons/bi'
import { BiMinus } from 'react-icons/bi'
import ImageContainer from '../global/ImageContainer'

// hooks
import { useState } from 'react'

const Transactions = ({ transactions }) => {
	const [option, setOption] = useState(transactions.fields.investment)

	return (
		<section className='section-gray'>
			<Container>
				<SectionTitle text={transactions.fields.title} />

				<div className={styles.filters}>
					{/* Investment Button */}
					<div className={styles.buttons}>
						<div onClick={() => setOption(transactions.fields.investment)}>
							{option == transactions.fields.investment ? (
								<BiMinus color='#e63122' size='24px' />
							) : (
								<BiPlus color='#e63122' size='24px' />
							)}
							<h4
								style={{
									fontWeight:
										option == transactions.fields.investment ? '700' : ''
								}}
							>
								Investment Sales
							</h4>
						</div>

						{/* Capital Button */}
						<div onClick={() => setOption(transactions.fields.capital)}>
							{option == transactions.fields.capital ? (
								<BiMinus color='#e63122' size='24px' />
							) : (
								<BiPlus color='#e63122' size='24px' />
							)}
							<h4
								style={{
									fontWeight: option == transactions.fields.capital ? '700' : ''
								}}
							>
								Capital Advisory
							</h4>
						</div>
					</div>

					{/* Description */}
					<p className={styles.description}>
						{transactions.fields.description}
					</p>
				</div>

				{/* Transactions */}
				<div className={styles.transactions}>
					{option.map(item => (
						<div key={item.sys.id} className={styles.transaction}>
							<ImageContainer
								src={'https:' + item.fields.image.fields.file.url}
								alt='Property Photo'
								className={styles.photo}
							/>
							<div className={styles.content}>
								<h4>{item.fields.address}</h4>
								<div>
									{item.fields.neighbourhood && (
										<p>{item.fields.neighbourhood}</p>
									)}
									{item.fields.borough && <p>{item.fields.borough}</p>}
								</div>

								<p>
									{item.fields.type} / <b>{item.fields.price}</b>
								</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

export default Transactions
