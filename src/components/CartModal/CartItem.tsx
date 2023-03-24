import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeToCart, visibleToCart } from '../../store/cart/cart-actions';
import { ICart } from '../../types/cart';
import { SINGLE_GUIDE } from '../../utils/consts';
import styles from './CartModal.module.css';
import shopPersons from '../../data/shopPerson.json';

interface CartItemProps {
	cart: ICart;
}

const CartItem: React.FC<CartItemProps> = ({ cart }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const shopPerson = shopPersons.filter(person => person.id === cart.id)[0];

	const handleCartItemNaviagte = () => {
		localStorage.setItem('shopPerson', JSON.stringify(shopPerson));
		dispatch(visibleToCart)
		navigate(SINGLE_GUIDE);
	};

	return (
		<>
			<div className={styles['cart-item']}>
				<div className={styles[`cart-item_${cart.image}`]}></div>
				<div className={styles['cart-item_content']}>
					<div
						className={styles['cart-item_title']}
						onClick={handleCartItemNaviagte}
					>
						{cart.title}
					</div>
					<div className={styles['cart-item_ebook']}>Ebook Guide (Epub)</div>
					<div className={styles['cart-item_foot']}>
						<div
							className={styles['cart-item_remove']}
							onClick={() => dispatch(removeToCart(cart.id))}
						>
							Remove
						</div>
						<div className={styles['cart-item_price']}>
							${cart.price * cart.count}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default CartItem;
