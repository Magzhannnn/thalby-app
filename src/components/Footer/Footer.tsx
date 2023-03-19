import Container from '../../UI/Container/Container';
import styles from './Footer.module.css';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<Container className={styles['footer-wrapper']}>
				<FooterLeft />
				<FooterRight />
			</Container>
		</div>
	);
};
export default Footer;
