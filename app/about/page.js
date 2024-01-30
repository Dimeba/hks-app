// contentful
import { createClient } from 'contentful'

// components
import Container from '@/components/global/Container'
import SectionTitle from '@/components/global/SectionTitle'
import AboutSection from '@/components/about/AboutSection'
import Team from '@/components/about/Team'

export default async function About() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const about = await client.getEntries({
		content_type: 'aboutSection'
	})

	const team = await client.getEntries({
		content_type: 'teamSection'
	})

	return (
		<main>
			{/* About */}
			<section className='section-gray'>
				<Container>
					<SectionTitle text={about.items[0].fields.title} />
					<AboutSection about={about.items[0]} />
				</Container>
			</section>

			{/* Team */}
			<section id='meet-our-team'>
				<Container>
					<SectionTitle text={team.items[0].fields.title} />
					<Team team={team.items[0].fields.team} />
				</Container>
			</section>
		</main>
	)
}
