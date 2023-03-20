import { useNavigate } from 'react-router-dom';
import MyFooter from '../../UI/Footer/MyFooter';
import { COLLECTIONS_ROUTE } from '../../utils/consts'

const ShopFooter = () => {
	const navigate = useNavigate();

	return (
		<MyFooter
			footTitle='Check out our collections'
			footBtnTitle='See collections'
			handleFooterClick={() => navigate(COLLECTIONS_ROUTE)}
		/>
	);
};
export default ShopFooter;
