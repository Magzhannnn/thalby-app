import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllCart } from '../../store/cart/cart-selectors';
import { ICart } from '../../types/cart';
import CartItem from './CartItem';
import styles from './CartModal.module.css';

const CartList = () => {
	// const [cart, setCart] = useState(
	// 	JSON.parse(localStorage.getItem('carts') as string)
	// );
	const cart = useSelector(selectAllCart);

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	return (
		<div className={styles.container}>
			<div className={styles['cart-list']}>
				{cart?.map((c: ICart) => (
					<CartItem cart={c} />
				))}
			</div>
		</div>
	);
};
export default CartList;
