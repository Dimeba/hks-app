'use client'

// styles
import styles from './Investments.module.scss'

// components
import ImageContainer from '../global/ImageContainer'
import Filter from '../global/Filter'
import Link from 'next/link'

// hooks
import { useState } from 'react'

const Investments = ({ investments }) => {
	return (
		<div className={styles.investments}>
			{/* Filters */}

			{/* Investments */}
			{investments.map(investment => (
				<div key={investment.sys.id} className={styles.investment}>
					<ImageContainer
						src={'https:' + investment.fields.photo.fields.file.url}
						alt='Report Cover Image'
						className={styles.image}
					/>
					<div className={styles.content}>
						<h4>{investment.fields.title}</h4>
						<p>
							{investment.fields.description.length > 250
								? investment.fields.description.slice(0, 250) + '...'
								: investment.fields.description}
						</p>

						<div className={styles.highlights}>
							<p>
								<span>
									{investment.fields.l1}: <b>{investment.fields.h1}</b>
									{' / '}
								</span>

								<span>
									{investment.fields.l2}: <b>{investment.fields.h2}</b>
									{' / '}
								</span>

								<span>
									{investment.fields.l3}: <b>{investment.fields.h3}</b>
								</span>
							</p>
						</div>

						<div className={styles.documents}>
							{/* Contact */}
							<Link href='mailto:pcarillo@hks.com'>
								<button className='buttonBlue'>Contact Us</button>
							</Link>

							{/* Flyer */}
							{investment.fields.flyer && (
								<Link
									href={'https:' + investment.fields.flyer.fields.file.url}
									target='_blank'
								>
									<button className='buttonRed'>See Flyer</button>
								</Link>
							)}

							{/* Website */}
							{investment.fields.web && (
								<Link href={investment.fields.web} target='_blank'>
									<button className='buttonRed'>See Website</button>
								</Link>
							)}

							{/* Confidential / Broker */}
							{investment.fields.confiBroker && (
								<Link
									href={
										'https:' + investment.fields.confiBroker.fields.file.url
									}
									target='_blank'
								>
									<button className='buttonRed'>Broker</button>
								</Link>
							)}

							{/* Confidential / Principal */}
							{investment.fields.confiPrincipal && (
								<Link
									href={
										'https:' + investment.fields.confiPrincipal.fields.file.url
									}
									target='_blank'
								>
									<button className='buttonRed'>Principal</button>
								</Link>
							)}
						</div>

						{/* <Link
								href={'https:' + report.fields.link.fields.file.url}
								target='_blank'
							>
								<button className='buttonRed'>Download Report</button>
							</Link> */}
					</div>
				</div>
			))}
		</div>
	)
}

export default Investments
