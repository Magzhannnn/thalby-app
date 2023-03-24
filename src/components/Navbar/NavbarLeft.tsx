import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {
	COLLECTIONS_ROUTE,
	SHOP_ROUTE,
	STORIES_ROUTE,
} from '../../utils/consts';

interface NavbarLeftProps {
	menu: boolean;
	handleMenu: () => void;
}

const NavbarLeft: React.FC<NavbarLeftProps> = ({ menu, handleMenu }) => {
	return (
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
			<a href='#' className={styles['navbar-left_item']} onClick={handleMenu}>
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
	);
};
export default NavbarLeft;
