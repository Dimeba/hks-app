'use client'

// styles
import styles from './News.module.scss'

// components
import Link from 'next/link'
import Filter from '@/components/global/Filter'
import ImageContainer from '../global/ImageContainer'

// hooks
import { useState } from 'react'

const News = ({ news }) => {
	const [option, setOption] = useState()
	const years = [...new Set(news.map(article => article.fields.date.slice(-4)))]

	return (
		<div className={styles.news}>
			<Filter values={years} setOptionValue={setOption} placeholder='Year' />

			{news
				.filter(article =>
					option ? article.fields.date.slice(-4) == option : article
				)
				.map(article => (
					<div key={article.sys.id} className={styles.article}>
						<ImageContainer
							className={styles.image}
							alt='Article Image'
							src={'https:' + article.fields.image.fields.file.url}
						/>
						<p style={{ fontSize: '0.8rem' }}>
							{article.fields.date} |{' '}
							<b>
								<Link
									href={article.fields.publisherLink}
									target='_blank'
									aria-label='Link to the publisher'
								>
									{article.fields.publisher}
								</Link>
							</b>
						</p>

						<Link
							href={article.fields.link}
							target='_blank'
							aria-label='Link to the article'
						>
							<h4>{article.fields.title}</h4>
						</Link>
					</div>
				))}
		</div>
	)
}

export default News
