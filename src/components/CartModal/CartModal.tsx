import CartFooter from './CartFooter'
import CartHeader from './CartHeader'
import CartList from './CartList'
import styles from './CartModal.module.css';

const CartModal = () => {
	return (
		<div className={styles['cart-modal']}>
			<CartHeader />
			<hr />
			<CartList />
			<CartFooter />
		</div>
	);
};
export default CartModal;
