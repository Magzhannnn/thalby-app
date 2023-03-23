import { useDispatch } from 'react-redux'
import { visibleToCart } from '../../store/cart/cart-actions'
import styles from './CartModal.module.css';

const CartHeader = () => {
	const dispatch = useDispatch()

	const handleCartClose = () => {
		dispatch(visibleToCart)
	}

	return (
		<div className={styles.container}>
			<div className={styles['cart-heder_title']}>Shopping Cart</div>
			<div className={styles['cart-heder_close']} onClick={handleCartClose}>x</div>
		</div>
	);
};
export default CartHeader;
