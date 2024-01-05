// styles
import styles from './Tracker.module.scss'

const Tracker = ({ hero }) => {
	return (
		<div className={styles.tracker}>
			<div className={styles.heroReport}>
				<p>
					<b>{hero.fields.report.fields.title}</b>
				</p>
				<p>{hero.fields.report.fields.description.slice(0, 120) + '...'}</p>
				<a
					target='_blank'
					rel='noreferrer'
					href={'https:' + hero.fields.report.fields.link.fields.file.url}
				>
					<p className='underlineButton'>MORE INFO</p>
				</a>
			</div>
			<div className={styles.heroRates}>
				<p>
					<b>INDEX RATES</b>
				</p>
				<iframe src='https://www.thefinancials.com/Widget.aspx?pid=HKS&wid=0344406736&style=tile_wide'></iframe>
			</div>
		</div>
	)
}

export default Tracker
