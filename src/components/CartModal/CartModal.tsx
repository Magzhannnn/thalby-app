import { useDispatch, useSelector } from 'react-redux';
import { visibleToCart } from '../../store/cart/cart-actions'
import { selectCartVisible } from '../../store/cart/cart-selectors';
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';
import CartList from './CartList';
import styles from './CartModal.module.css';

const CartModal = () => {
	const dispatch = useDispatch()
	const visible = useSelector(selectCartVisible);

	return (
		<div
			className={
				visible
					? `${styles['cart-modal']} ${styles.activate}`
					: styles['cart-modal']
			}
			// onClick={() => dispatch(visibleToCart)}
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
				<CartList />
				<CartFooter />
			</div>
		</div>
	);
};
export default CartModal;
