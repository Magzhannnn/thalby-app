import styles from './Footer.module.css';

const FooterContact = () => {
	return (
		<div className={styles['footer-contact']}>
			<div className={styles['footer-contact_title']}>CONTACT</div>
			<br /> <br />
			<div className={styles['footer-contact_email']}>Email hi@thalby.com</div>
			<div className={styles['footer-contact_help']}>Help</div>
		</div>
	);
};
export default FooterContact;
