import styles from './CartModal.module.css';

const CartHeader = () => {
	return (
		<div className={styles.container}>
			<div className={styles['cart-heder_title']}>Shopping Cart</div>
			<div className={styles['cart-heder_close']}>x</div>
		</div>
	);
};
export default CartHeader;
