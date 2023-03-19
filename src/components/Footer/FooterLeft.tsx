import styles from './Footer.module.css';

const FooterLeft = () => {
	return (
		<div className={styles['footer-left']}>
			<div className={styles['footer-icon']}></div>
			<div className={styles['footer-social_media']}>
				<a href='https://www.facebook.com/thalbyguides' target='_blank'>
					<div className={styles['foot_facebook']}></div>
				</a>
				<a href='https://www.instagram.com/thalbyguides' target='_blank'>
					<div className={styles['foot_insta1']}></div>
				</a>
				<a href='https://twitter.com/thalbyguides' target='_blank'>
					<div className={styles['foot_twitter']}></div>
				</a>
			</div>
			<div className={styles['footer-left_title']}>
				Get our travel advice, global views and travel freebies in your inbox
			</div>
		</div>
	);
};
export default FooterLeft;
