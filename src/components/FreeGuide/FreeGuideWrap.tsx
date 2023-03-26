import Container from '../../UI/Container/Container';
import styles from './FreeGuide.module.css';
import FreeGuideLeft from './FreeGuideLeft';
import FreeGuideRight from './FreeGuideRight';
import persons from '../../data/shopPerson.json';

const FreeGuideWrap = () => {
	let freeGuide;
	for (const person of persons) {
		if (
			`${person.language} ${person.prof_job}` === 'French People and Society'
		) {
			freeGuide = person;
			break;
		}
	}

	return (
		<div className={styles['free-guide_wrap']}>
			<Container className={styles['free-guide_container']}>
				<FreeGuideLeft
					language={freeGuide?.language as string}
					job={freeGuide?.prof_job as string}
				/>
				<FreeGuideRight image={freeGuide?.image as string} />
			</Container>
		</div>
	);
};
export default FreeGuideWrap;
