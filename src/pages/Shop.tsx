import ShopFooter from '../components/Shop/ShopFooter'
import ShopOffEurope from '../components/Shop/ShopOffEurope'
import ShopPersonList from '../components/Shop/ShopPersonList'
import Container from '../UI/Container/Container';
import MyText from '../UI/Text/MyText';
import MyTitle from '../UI/Title/MyTitle';

const Shop = () => {
	return (
		<Container>
			<MyTitle title='Shop our Guides' />
			<MyText text='Our thematic country guides are engineered for understanding.' />
			<ShopPersonList />
			<ShopOffEurope />
			<ShopFooter />
		</Container>
	);
};
export default Shop;
