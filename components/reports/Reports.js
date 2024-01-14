'use client'

// styles
import styles from './Reports.module.scss'

// components
import ImageContainer from '../global/ImageContainer'
import Link from 'next/link'
import Filter from '../global/Filter'

// hooks
import { useState } from 'react'

const Reports = ({ reports }) => {
	const [option, setOption] = useState()
	const years = [...new Set(reports.map(report => report.fields.year))]

	return (
		<div className={styles.reports}>
			{/* Filter */}
			<Filter values={years} setOptionValue={setOption} placeholder='Year' />

			{/* Reports */}
			{reports
				.filter(report => (option ? report.fields.year == option : report))
				.map(report => (
					<div key={report.sys.id} className={styles.report}>
						<ImageContainer
							src={'https:' + report.fields.photo.fields.file.url}
							alt='Report Cover Image'
							className={styles.image}
							contain
						/>

						<div className={styles.content}>
							<h4>{report.fields.title}</h4>
							<p>
								{report.fields.description.length > 350
									? report.fields.description.slice(0, 350) + '...'
									: report.fields.description}
							</p>

							<Link
								href={'https:' + report.fields.link.fields.file.url}
								target='_blank'
							>
								<button className='buttonRed'>Download Report</button>
							</Link>
						</div>
					</div>
				))}
		</div>
	)
}

export default Reports
