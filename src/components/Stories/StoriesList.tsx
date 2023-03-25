import Container from '../../UI/Container/Container';
import styles from './Stories.module.css';
import storiesPersons from '../../data/storiesPerson.json';
import StoriesItem from './StoriesItem';

const StoriesList = () => {
	return (
		<div className={styles['stories-list_wrap']}>
			<Container>
				<div className={styles['stories-list']}>
					{storiesPersons.map(storiesPerson => (
						<StoriesItem
							key={`stories_${storiesPerson.id}`}
							person={storiesPerson}
						/>
					))}
				</div>
			</Container>
		</div>
	);
};
export default StoriesList;
