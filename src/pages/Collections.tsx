import Container from '../UI/Container/Container';
import ShopOffEurope from '../components/Shop/ShopOffEurope';
import MyTitle from '../UI/Title/MyTitle';
import MyText from '../UI/Text/MyText';
import { useNavigate } from 'react-router-dom';
import MyFooter from '../UI/Footer/MyFooter';
import { SHOP_ROUTE } from '../utils/consts';

const Collections = () => {
	const navigate = useNavigate();
	
	return (
		<Container>
			<MyTitle title='Shop our Series and Collections' />
			<MyText text='Travel further with our curated sets' />
			<ShopOffEurope />
			<MyFooter
				footTitle='Check out our individual guides'
				footBtnTitle='Lets go'
				handleFooterClick={() => navigate(SHOP_ROUTE)}
			/>
		</Container>
	);
};
export default Collections;
