import styles from './CartModal.module.css';
import cartModalImage from '../../image/cart-modal.png';

const CartEmpty = () => {
	return (
		<div className={styles['cart-list_empty']}>
			<div className={styles['cart-list_image']}>
				<img src={cartModalImage} alt='/' />
			</div>
			<div>Your cart is empty.</div>
		</div>
	);
};
export default CartEmpty;
