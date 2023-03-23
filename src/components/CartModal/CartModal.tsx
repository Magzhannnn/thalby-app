import { useSelector } from 'react-redux';
import { selectCartVisible } from '../../store/cart/cart-selectors';
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';
import CartList from './CartList';
import styles from './CartModal.module.css';

const CartModal = () => {
	const visible = useSelector(selectCartVisible);

	return (
		<div
			className={
				visible
					? `${styles['cart-modal']} ${styles.activate}`
					: styles['cart-modal']
			}
		>
			<div
				className={
					visible
						? `${styles['cart-wrapper']} ${styles.active}`
						: styles['cart-wrapper']
				}
			>
				<CartHeader />
				<hr />
				<CartList />
				<CartFooter />
			</div>
		</div>
	);
};
export default CartModal;
