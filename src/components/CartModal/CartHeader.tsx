import { useDispatch } from 'react-redux';
import { visibleToCart } from '../../store/cart/cart-actions';
import styles from './CartModal.module.css';

const CartHeader = () => {
	const dispatch = useDispatch();

	const handleCartClose = () => {
		dispatch(visibleToCart);
		// alert('cart header')
	};

	return (
		<div className={styles['cart-header-wrapper']}>
			<div className={styles.container}>
				<div className={styles['cart-header']}>
					<div className={styles['cart-header_title']}>Shopping Cart</div>
					<div
						className={styles['cart-header_close']}
						onClick={handleCartClose}
					>
						x
					</div>
				</div>
			</div>
		</div>
	);
};
export default CartHeader;
