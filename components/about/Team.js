// styles
import styles from './Team.module.scss'

// components
import ImageContainer from '../global/ImageContainer'
import Link from 'next/link'

const Team = ({ team }) => {
	return (
		<div className={styles.team}>
			{team.map(member => (
				<div key={member.sys.id} className={styles.member}>
					<ImageContainer
						src={'https:' + member.fields.photo.fields.file.url}
						alt={`${member.fields.name}'s photo.`}
						className={styles.photo}
					/>
					<div className={styles.content}>
						<div>
							<h4>{member.fields.name}</h4>
							<p>{member.fields.title}</p>
						</div>

						<div>
							<p>Phone: {member.fields.phone}</p>
							<p>Email: {member.fields.email}</p>
						</div>

						<Link
							href={
								'/team/' +
								member.fields.name
									.toLowerCase()
									.replace(/[^a-z0-9\s-]/g, '')
									.replace(/\s+/g, '-')
							}
							aria-label='Link to Bio'
						>
							<p className='underlineButton'>Read Bio</p>
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}

export default Team
