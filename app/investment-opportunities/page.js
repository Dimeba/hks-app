// contentful
import { createClient } from 'contentful'

// components
import Container from '@/components/global/Container'
import SectionTitle from '@/components/global/SectionTitle'
import Investments from '@/components/investments/Investments'

export default async function Home() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const investments = await client.getEntries({
		content_type: 'investmentsSection'
	})

	return (
		<main>
			<section className='section-gray'>
				<Container>
					<SectionTitle
						text={investments.items[0].fields.title}
						subtitle={investments.items[0].fields.description}
					/>
					<Investments investments={investments.items[0].fields.investments} />
				</Container>
			</section>
		</main>
	)
}
