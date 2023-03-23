import { ICart } from '../../types/cart';
import styles from './CartModal.module.css';

interface CartItemProps {
	cart: ICart;
}

const CartItem: React.FC<CartItemProps> = ({ cart }) => {
	return (
		<>
			<div className={styles['cart-item_left']}>
				<div className={styles[`cart-item_${cart.image}`]}></div>
				<div className={styles['cart-item_title']}>{cart.title}</div>
				<div className={styles['cart-item_ebook']}>Ebook Guide (Epub)</div>
				<div
					className={styles['cart-item_remove']}
					onClick={() => alert('Remove Cart Item')}
				>
					Remove
				</div>
			</div>
		</>
	);
};
export default CartItem;
