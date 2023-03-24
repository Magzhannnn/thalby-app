import { useDispatch, useSelector } from 'react-redux';
import { visibleToCart } from '../../store/cart/cart-actions';
import {
	selectAllCart,
	selectCartVisible,
} from '../../store/cart/cart-selectors';
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';
import CartList from './CartList';
import styles from './CartModal.module.css';
import CartEmpty from './CartEmpty'

const CartModal = () => {
	const dispatch = useDispatch();
	const visible = useSelector(selectCartVisible);
	const carts = useSelector(selectAllCart);

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
				<hr style={{ margin: 0 }} />
				{carts.length ? (
					<CartList />
				) : (
					<CartEmpty />
				)}
				{carts.length ? <CartFooter /> : <></>}
			</div>
		</div>
	);
};
export default CartModal;
