// contentful
import { createClient } from 'contentful'

// components
import Container from '@/components/global/Container'
import SectionTitle from '@/components/global/SectionTitle'
import News from '@/components/news/News'

export default async function Home() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const news = await client.getEntries({
		content_type: 'newsSection'
	})

	return (
		<main>
			<section className='section-gray'>
				<Container>
					<SectionTitle
						text={news.items[0].fields.title}
						subtitle={news.items[0].fields.description}
					/>

					<News news={news.items[0].fields.articles} />
				</Container>
			</section>
		</main>
	)
}
