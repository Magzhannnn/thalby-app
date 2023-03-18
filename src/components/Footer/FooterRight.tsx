import styles from './Footer.module.css';
import FooterAbout from './FooterAbout';
import FooterContact from './FooterContact';

const FooterRight = () => {
	return (
		<div className={styles['footer-right']}>
			<FooterAbout />
			<FooterContact />
		</div>
	);
};
export default FooterRight;
