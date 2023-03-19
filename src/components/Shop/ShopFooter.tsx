import MyFooter from '../../UI/Footer/MyFooter';
import styles from './Shop.module.css';

const ShopFooter = () => {
	return (
		<MyFooter
			footTitle='Check out our collections'
			footBtnTitle='See collections'
			handleFooterClick={() => console.log('Footer Start Shop')}
		/>
	);
};
export default ShopFooter;
