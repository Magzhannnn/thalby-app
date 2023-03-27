import React from 'react';
import { emptyFormFreeGuide, MyObject } from '../../helpers/freeGuideHelper';
import { IPersonInfo } from '../../types/freeGuide';
import MyButton from '../../UI/Button/MyButton';
import styles from './FreeGuide.module.css';

const FreeGuideForm = () => {
	const [personInfo, setPersonInfo] = React.useState<MyObject>({
		fname: '',
		lname: '',
		email: '',
	});

	const handleFName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPersonInfo(prev => ({ ...prev, fname: e.target.value }));
	};

	const handleLName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPersonInfo(prev => ({ ...prev, lname: e.target.value }));
	};

	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPersonInfo(prev => ({ ...prev, email: e.target.value }));
	};

	const handleFreeGuide = () => {
		if (!emptyFormFreeGuide(personInfo)) {
			setPersonInfo({
				fname: '',
				lname: '',
				email: '',
			});
			return;
		}

		alert('Заполните полностью!');
	};

	return (
		<>
			<form className={styles['free-guide_form']}>
				<input
					type='text'
					placeholder='First Name'
					value={personInfo.fname}
					onChange={handleFName}
					className={styles['guide-first_name']}
				/>
				<input
					type='text'
					placeholder='Last Name'
					value={personInfo.lname}
					onChange={handleLName}
					className={styles['guide-last_name']}
				/>
				<input
					type='email'
					placeholder='Email'
					value={personInfo.email}
					onChange={handleEmail}
					className={styles['guide-email']}
				/>
			</form>
			<MyButton
				title='Get the guide'
				onClickHandle={handleFreeGuide}
				className={styles['free-guide_btn']}
			/>
		</>
	);
};
export default FreeGuideForm;
