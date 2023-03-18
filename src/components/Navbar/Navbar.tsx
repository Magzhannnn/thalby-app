import Container from '../../UI/Container/Container';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<Container className={styles.navbar}>
			<div className={styles["navbar-left"]}>
				<a href='#' className={styles["navbar-left_item"]}>Shop</a>
				<a href='#' className={styles["navbar-left_item"]}>Collections</a>
				<a href='#' className={styles["navbar-left_item"]}>Try a Free Guide</a>
				<a href='#' className={styles["navbar-left_item"]}>Stories</a>
			</div>
			<div className={styles["navbar-center"]}></div>
			<div className={styles["navbar-right"]}>
				<div className={styles["navbar-right_inst"]}></div>
				<div className={styles["navbar-right_search"]}></div>
				<div className={styles["navbar-right_cart"]}></div>
			</div>
		</Container>
	);
};
export default Navbar;
