import Container from '../../UI/Container/Container';
import MyText from '../../UI/Text/MyText';
import MyTitle from '../../UI/Title/MyTitle';
import styles from './Stories.module.css';
import StoriesList from './StoriesList'

const StoriesWrap = () => {
	return (
		<>
			<Container className={styles['stories-wrap']}>
				<MyTitle title='Explore the World with Us' />
				<MyText text='Life stories, journeys, field notes and news updates' />
				<br /> <br />
				<MyTitle title='Life Stories' />
			</Container>
			<StoriesList />
		</>
	);
};
export default StoriesWrap;
