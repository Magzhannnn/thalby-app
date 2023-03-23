import Container from '../../UI/Container/Container';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {
	COLLECTIONS_ROUTE,
	SHOP_ROUTE,
	STORIES_ROUTE,
} from '../../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCart } from '../../store/cart/cart-selectors';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import CartModal from '../CartModal/CartModal';
import { visibleToCart } from '../../store/cart/cart-actions'

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const allCart = useSelector(selectAllCart);

	useEffect(() => {
		console.log(allCart);
		localStorage.setItem('carts', JSON.stringify(allCart));
	}, [allCart]);

	const handleMenu = () => {
		setMenu(!menu);
	};

	const handleCartModal = () => {
		dispatch(visibleToCart)
	};

	return (
		<div className={styles.navbar}>
			<Container className={styles['navbar-wrapper']}>
				<div
					className={
						menu
							? `${styles['navbar-left']} ${styles.active}`
							: styles['navbar-left']
					}
				>
					<Link
						to={SHOP_ROUTE}
						className={styles['navbar-left_item']}
						onClick={handleMenu}
					>
						Shop
					</Link>
					<Link
						to={COLLECTIONS_ROUTE}
						className={styles['navbar-left_item']}
						onClick={handleMenu}
					>
						Collections
					</Link>
					<a
						href='#'
						className={styles['navbar-left_item']}
						onClick={handleMenu}
					>
						Try a Free Guide
					</a>
					<Link
						to={STORIES_ROUTE}
						className={styles['navbar-left_item']}
						onClick={handleMenu}
					>
						Stories
					</Link>
				</div>
				<div className={styles.mobile_btn} onClick={handleMenu}>
					{menu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
				</div>
				<div className={styles['navbar-center']}></div>
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
			</Container>
			<CartModal />
		</div>
	);
};
export default Navbar;
