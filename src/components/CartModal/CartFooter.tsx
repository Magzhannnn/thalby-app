import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../../store/cart/cart-selectors';
import MyButton from '../../UI/Button/MyButton';
import styles from './CartModal.module.css';

const CartFooter = () => {
	const totalPrice = useSelector(selectTotalPrice);

	return (
		<div className={styles.container}>
			<div className={styles['cart-footer_content']}>
				<div className={styles['cart-footer_title']}>Subtotal</div>
				<div className={styles['cart-footer_total']}>${totalPrice}</div>
			</div>
			<MyButton
				title='Checkout'
				onClickHandle={() => alert('Cart START')}
				className={styles['cart-footer_btn']}
			/>
		</div>
	);
};
export default CartFooter;
