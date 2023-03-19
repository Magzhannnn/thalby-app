import Container from '../../UI/Container/Container';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<Container className={styles.navbar}>
			<div className={styles['navbar-left_adapt']}>
				<select>
					<option value='Shop'>Shop</option>
					<option value='Collections'>Collections</option>
					<option value='FreeGuide'>Try a Free Guide</option>
					<option value='Stories'>Stories</option>
				</select>
			</div>
			<div className={styles['navbar-left']}>
				<a href='#' className={styles['navbar-left_item']}>
					Shop
				</a>
				<a href='#' className={styles['navbar-left_item']}>
					Collections
				</a>
				<a href='#' className={styles['navbar-left_item']}>
					Try a Free Guide
				</a>
				<a href='#' className={styles['navbar-left_item']}>
					Stories
				</a>
			</div>
			<div className={styles['navbar-center']}></div>
			<div className={styles['navbar-right']}>
				<a href="https://www.instagram.com/thalbyguides/" target="_blank">
					<div className={styles['navbar-right_inst']}></div>
				</a>
				<div className={styles['navbar-right_search']}></div>
				<div className={styles['navbar-right_cart']}></div>
			</div>
		</Container>
	);
};
export default Navbar;
