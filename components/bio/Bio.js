// styles
import styles from './Bio.module.scss'

// components
import ImageContainer from '../global/ImageContainer'

const Bio = ({ member }) => {
	return (
		<div className={styles.bio}>
			<ImageContainer
				src={'https:' + member.fields.photo.fields.file.url}
				alt={`${member.fields.name}'s photo.`}
				className={styles.photo}
			/>

			<div className={styles.text}>
				<div>
					<h3>{member.fields.name}</h3>
					<p>{member.fields.title}</p>
				</div>

				<p>{member.fields.bio}</p>

				<div>
					<p>Phone: {member.fields.phone}</p>
					<p>Email: {member.fields.email}</p>
				</div>
			</div>
		</div>
	)
}

export default Bio
