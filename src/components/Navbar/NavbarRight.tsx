import { useDispatch, useSelector } from 'react-redux';
import { visibleToCart } from '../../store/cart/cart-actions'
import { selectAllCart } from '../../store/cart/cart-selectors';
import styles from './Navbar.module.css';

const NavbarRight = () => {
	const dispatch = useDispatch()
	const allCart = useSelector(selectAllCart);

	const handleCartModal = () => {
		dispatch(visibleToCart);
	};

	return (
		<div className={styles['navbar-right']}>
			<a href='https://www.instagram.com/thalbyguides/' target='_blank'>
				<div className={styles['navbar-right_inst']}></div>
			</a>
			<div className={styles['navbar-right_search']}></div>
			<div
				className={styles['navbar-right_cart']}
				onClick={handleCartModal}
			></div>
			<div
				className={
					allCart.length
						? `${styles['navbar-right_cart_dot']} ${styles.activate}`
						: styles['navbar-right_cart_dot']
				}
			></div>
		</div>
	);
};
export default NavbarRight;
