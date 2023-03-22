import Container from '../../UI/Container/Container';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {
	COLLECTIONS_ROUTE,
	SHOP_ROUTE,
	STORIES_ROUTE,
} from '../../utils/consts';
import { useSelector } from 'react-redux';
import { selectAllCart } from '../../store/cart/cart-selectors';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const [load, setLoad] = useState(false);
	const navigate = useNavigate();
	const allCart = useSelector(selectAllCart);

	useEffect(() => {
		console.log(allCart);
	}, [allCart]);

	return (
		<div className={styles.navbar}>
			<Container className={styles['navbar-wrapper']}>
				<div className={styles['navbar-left_adapt']}>
					<select>
						<option value='Shop'>Shop</option>
						<option value='Collections'>Collections</option>
						<option value='FreeGuide'>Try a Free Guide</option>
						<option value='Stories' onClick={() => navigate(STORIES_ROUTE)}>
							Stories
						</option>
					</select>
				</div>
				<div className={styles['navbar-left']}>
					<Link to={SHOP_ROUTE} className={styles['navbar-left_item']}>
						Shop
					</Link>
					<Link to={COLLECTIONS_ROUTE} className={styles['navbar-left_item']}>
						Collections
					</Link>
					<a href='#' className={styles['navbar-left_item']}>
						Try a Free Guide
					</a>
					<Link to={STORIES_ROUTE} className={styles['navbar-left_item']}>
						Stories
					</Link>
				</div>
				<div className={styles['navbar-center']}></div>
				<div className={styles['navbar-right']}>
					<a href='https://www.instagram.com/thalbyguides/' target='_blank'>
						<div className={styles['navbar-right_inst']}></div>
					</a>
					<div className={styles['navbar-right_search']}></div>
					<div className={styles['navbar-right_cart']}></div>
					<div
						className={
							allCart.length
								? `${styles['navbar-right_cart_dot']} ${styles.activate}`
								: styles['navbar-right_cart_dot']
						}
					></div>
				</div>
			</Container>
		</div>
	);
};
export default Navbar;
