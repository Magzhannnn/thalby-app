import styles from './Footer.module.css';
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<FooterLeft />
			<FooterRight />
		</div>
	);
};
export default Footer;
