import Container from '../UI/Container/Container';
import ShopOffEurope from '../components/Shop/ShopOffEurope';
import MyFooter from '../UI/Footer/MyFooter';
import MyTitle from '../UI/Title/MyTitle'
import MyText from '../UI/Text/MyText'

const Collections = () => {
	return (
		<Container>
			<MyTitle title='Shop our Series and Collections' />
			<MyText text='Travel further with our curated sets' />
			<ShopOffEurope />
			<MyFooter
				footTitle='Check out our individual guides'
				footBtnTitle='Lets go'
				handleFooterClick={() => console.log('Footer Start Collections')}
			/>
		</Container>
	);
};
export default Collections;
