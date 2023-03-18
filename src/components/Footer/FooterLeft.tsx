import styles from './Footer.module.css';

const FooterLeft = () => {
	return (
		<div className={styles['footer-left']}>
			<div className={styles['footer-icon']}></div>
			<div className={styles['footer-social_media']}>
				<div className={styles['foot_facebook']}></div>
				<div className={styles['foot_insta1']}></div>
				<div className={styles['foot_twitter']}></div>
			</div>
			<div className={styles['footer-left_title']}>
				Get our travel advice, global views and travel freebies in your inbox
			</div>
		</div>
	);
};
export default FooterLeft;
