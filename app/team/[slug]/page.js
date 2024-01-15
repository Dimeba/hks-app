// contentful
import { createClient } from 'contentful'

// components
import Container from '@/components/global/Container'
import Bio from '@/components/bio/Bio'

const client = createClient({
	space: process.env.space,
	accessToken: process.env.accessToken
})

const team = await client.getEntries({
	content_type: 'teamMember'
})

export async function generateStaticParams() {
	return team.items.map(member => ({
		slug: member.fields.name
			.toLowerCase()
			.replace(/[^a-z0-9\s-]/g, '')
			.replace(/\s+/g, '-')
	}))
}

export default async function TeamMember({ params }) {
	const { slug } = params

	// member
	const member = team.items.find(
		item =>
			item.fields.name
				.toLowerCase()
				.replace(/[^a-z0-9\s-]/g, '')
				.replace(/\s+/g, '-') == slug
	)

	return (
		<main>
			{/* About */}
			<section className='section-gray'>
				<Container>
					<Bio member={member} />
				</Container>
			</section>
		</main>
	)
}
