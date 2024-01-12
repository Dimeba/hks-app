// components
import Container from '@/components/global/Container'
import SectionTitle from '@/components/global/SectionTitle'

export default async function Home() {
	return (
		<main>
			<section>
				<Container newClass='privacy'>
					<SectionTitle text='Terms & Conditions of Use' />
					<p>
						The content herein is provided on an “as-is” basis WITHOUT WARRANTY
						of any kind, express or implied, including without limitation, any
						warranties concerning accuracy, usefulness, correctness, timeliness,
						or content of information, and we hereby disclaim any and all such
						warranties.
					</p>
					<br />
					<p>
						We shall not be liable for any damage to, or viruses that may
						infect, your computer equipment or other property on account of your
						access to this site.
						<br />
						<br />
					</p>
				</Container>
			</section>
		</main>
	)
}
