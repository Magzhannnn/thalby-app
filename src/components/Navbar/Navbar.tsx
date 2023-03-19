import Container from '../../UI/Container/Container';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {
	COLLECTIONS_ROUTE,
	SHOP_ROUTE,
	STORIES_ROUTE,
} from '../../utils/consts';

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<Container className={styles.navbar}>
			<div className={styles['navbar-left_adapt']}>
				<select>
					<option value='Shop'>
						<Link to={SHOP_ROUTE} className={styles['navbar-left_item']}>
							Shop
						</Link>
					</option>
					<option value='Collections'>
						<Link to={COLLECTIONS_ROUTE} className={styles['navbar-left_item']}>
							Collections
						</Link>
					</option>
					<option value='FreeGuide'>Try a Free Guide</option>
					<option value='Stories' onSelect={() => navigate(STORIES_ROUTE)}>
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
			</div>
		</Container>
	);
};
export default Navbar;
