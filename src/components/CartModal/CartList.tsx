import { useEffect, useState } from 'react';
import { ICart } from '../../types/cart';
import CartItem from './CartItem';
import styles from './CartModal.module.css';

const CartList = () => {
	const [cart, setCart] = useState(
		JSON.parse(localStorage.getItem('carts') as string)
	);

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	return (
		<div className={styles.container}>
			{cart.map((c: ICart) => (
				<CartItem cart={c} />
			))}
		</div>
	);
};
export default CartList;
