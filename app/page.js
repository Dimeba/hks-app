// contentful
import { createClient } from 'contentful'

// components
import Hero from '@/components/homepage/Hero'
import About from '@/components/homepage/About'
import Transactions from '@/components/homepage/Transactions'
import Careers from '@/components/global/Careers'

export default async function Home() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const hero = await client.getEntries({
		content_type: 'heroSection'
	})

	const about = await client.getEntries({
		content_type: 'aboutSection'
	})

	const transactions = await client.getEntries({
		content_type: 'notableTransactionsSection'
	})

	const careers = await client.getEntries({
		content_type: 'careersSection'
	})

	return (
		<main>
			<Hero hero={hero.items[0]} />
			<About about={about.items[0]} />
			<Transactions
				transactions={transactions.items[0]}
				grayBackground
				showFilters
			/>
			<Careers careers={careers.items[0]} />
		</main>
	)
}
