// components
import Container from '@/components/global/Container'
import SectionTitle from '@/components/global/SectionTitle'

export default async function Home() {
	return (
		<main>
			<section className='section-gray'>
				<Container newClass='rates'>
					<SectionTitle text='Index Rates' />
					<iframe
						id='rates'
						src='https://www.thefinancials.com/Widget.aspx?pid=HKS&wid=0344406736&style=table_tall_graph'
						frameborder='0'
					></iframe>
				</Container>
			</section>
		</main>
	)
}
