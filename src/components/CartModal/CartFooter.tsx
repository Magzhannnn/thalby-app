import MyButton from '../../UI/Button/MyButton';
import styles from './CartModal.module.css';

const CartFooter = () => {
	return (
		<div className={styles.container}>
			<div className={styles['cart-footer_content']}>
				<div className={styles['cart-footer_title']}>Subtotal</div>
				<div className={styles['cart-footer_total']}>$57.23</div>
			</div>
			<MyButton title='Checkout' onClickHandle={() => alert('Cart START')} />
		</div>
	);
};
export default CartFooter;
