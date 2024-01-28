// contentful
import { createClient } from 'contentful'

// components
import Container from '@/components/global/Container'
import SectionTitle from '@/components/global/SectionTitle'

export default async function IndexRates() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const rates = await client.getEntries({
		content_type: 'indexRatesSection'
	})
	return (
		<main>
			<section className='section-gray'>
				<Container newClass='rates'>
					<SectionTitle
						text='Index Rates'
						subtitle={rates.items[0].fields.description}
					/>
					<iframe
						id='rates'
						src='https://www.thefinancials.com/Widget.aspx?pid=HKS&wid=0344406736&style=table_tall_graph'
					></iframe>
				</Container>
			</section>
		</main>
	)
}
