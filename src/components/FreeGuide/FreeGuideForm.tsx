import styles from './FreeGuide.module.css';

const FreeGuideForm = () => {
	return (
		<form className={styles['free-guide_form']}>
			<input
				type='text'
				placeholder='First Name'
				className={styles['guide-first_name']}
			/>
			<input
				type='text'
				placeholder='Last Name'
				className={styles['guide-last_name']}
			/>
			<input
				type='email'
				placeholder='Email'
				className={styles['guide-email']}
			/>
		</form>
	);
};
export default FreeGuideForm;
