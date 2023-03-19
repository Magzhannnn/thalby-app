import styles from './Footer.module.css';

const FooterAbout = () => {
	return (
		<div className={styles['footer-about']}>
			<div className={styles['footer-about_title']}>ABOUT</div>
			<div className={styles['footer-about_subtitle']}>About Us</div>
			<div className={styles['footer-about_privacy']}>Privacy Policy</div>
			<div className={styles['footer-about_terms']}>Terms and Conditions</div>
			<div className={styles['footer-about_write']}>Write for Us</div>
		</div>
	);
};
export default FooterAbout;
