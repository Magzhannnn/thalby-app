import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {
	COLLECTIONS_ROUTE,
	SHOP_ROUTE,
	STORIES_ROUTE,
	FREE_GUIDE,
} from '../../utils/consts';

interface NavbarLeftProps {
	isMenu: boolean;
	handleMenu: () => void;
}

const NavbarLeft: React.FC<NavbarLeftProps> = ({ isMenu, handleMenu }) => {
	return (
		<div
			className={
				isMenu
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
			<Link
				to={FREE_GUIDE}
				className={styles['navbar-left_item']}
				onClick={handleMenu}
			>
				Try a Free Guide
			</Link>
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
