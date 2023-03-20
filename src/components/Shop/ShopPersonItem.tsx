import { IShopPerson } from '../../types/shopPerson';
import styles from './Shop.module.css';
import { useNavigate } from 'react-router-dom';
import { SINGLE_GUIDE } from '../../utils/consts'

interface ShopPersonItemProps {
	shopPerson: IShopPerson;
}

const ShopPersonItem: React.FC<ShopPersonItemProps> = ({ shopPerson }) => {
	const navigate = useNavigate();

	const title = `Thalby Guide to ${shopPerson.language} ${shopPerson.prof_job}`;

	const handleSingleGuide = () => {
		localStorage.setItem('shopPerson', JSON.stringify(shopPerson));
		navigate(SINGLE_GUIDE)
	};

	return (
		<div className={styles['shop-person_item']}>
			<div
				className={styles[`shop-${shopPerson.image}`]}
				onClick={handleSingleGuide}
			></div>
			<div className={styles['shop-person_title']} onClick={handleSingleGuide}>
				{title}
			</div>
			<div className={styles['shop-person_price']}>USD ${shopPerson.price}</div>
			<button className={styles['shop-person_btn']}>Add to cart</button>
		</div>
	);
};
export default ShopPersonItem;
