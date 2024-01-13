// contentful
import { createClient } from 'contentful'

// components
import Container from '@/components/global/Container'
import SectionTitle from '@/components/global/SectionTitle'
import Reports from '@/components/reports/Reports'

export default async function Home() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const reports = await client.getEntries({
		content_type: 'reportsSection'
	})

	return (
		<main>
			<section className='section-gray'>
				<Container>
					<SectionTitle
						text={reports.items[0].fields.title}
						subtitle={reports.items[0].fields.description}
					/>
					<Reports reports={reports.items[0].fields.reports} />
				</Container>
			</section>
		</main>
	)
}
