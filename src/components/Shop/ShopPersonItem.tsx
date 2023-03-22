import { IShopPerson } from '../../types/shopPerson';
import styles from './Shop.module.css';
import { useNavigate } from 'react-router-dom';
import { SINGLE_GUIDE } from '../../utils/consts';
import { useDispatch } from 'react-redux';
import { ICart } from '../../types/cart';
import { addToCart } from '../../store/cart/cart-actions';

interface ShopPersonItemProps {
	shopPerson: IShopPerson;
}

const ShopPersonItem: React.FC<ShopPersonItemProps> = ({ shopPerson }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const title = `Thalby Guide to ${shopPerson.language} ${shopPerson.prof_job}`;

	const handleSingleGuide = () => {
		localStorage.setItem('shopPerson', JSON.stringify(shopPerson));
		navigate(SINGLE_GUIDE);
	};

	const handleAddToCart = async () => {
		const addItem: ICart = {
			id: shopPerson.id,
			title: title,
			image: shopPerson.image,
			price: shopPerson.price,
			count: 1,
		};

		dispatch(addToCart(addItem));
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
			<button className={styles['shop-person_btn']} onClick={handleAddToCart}>
				Add to cart
			</button>
		</div>
	);
};
export default ShopPersonItem;
