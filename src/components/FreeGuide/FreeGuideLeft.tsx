import styles from './FreeGuide.module.css';
import FreeGuideForm from './FreeGuideForm';

interface FreeGuideLeftProps {
	language: string;
	job: string;
}

const FreeGuideLeft: React.FC<FreeGuideLeftProps> = ({ language, job }) => {
	return (
		<div className={styles['free-guide-left']}>
			<div className={styles['guide_title']}>
				One of our most popular guides. For free.
			</div>
			<div className={styles['guide_text']}>
				Sign up for our newsletter and get our guide to{' '}
				<span>{`${language} ${job}`}</span> for free. <br />
				<br />
				Our monthly newsletter is packed with global views and travel freebies.{' '}
				<br />
				<br />
				At Thalby, we respect our readers and our readers’ inboxes. So don’t
				worry, we won't get spammy. Ever.
			</div>
			<FreeGuideForm />
		</div>
	);
};
export default FreeGuideLeft;
