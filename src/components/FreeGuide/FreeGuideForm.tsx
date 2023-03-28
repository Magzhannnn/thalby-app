import React from 'react';
import {
	emptyFormFreeGuide,
	IEmptyInput,
	isObject,
	MyObject,
} from '../../helpers/freeGuideHelper';
import { IPersonInfo } from '../../types/freeGuide';
import MyButton from '../../UI/Button/MyButton';
import styles from './FreeGuide.module.css';

const FreeGuideForm = () => {
	const [isError, setIsError] = React.useState<IEmptyInput>({
		fname: false,
		lname: false,
		email: false,
	});
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
		const result = emptyFormFreeGuide(personInfo);

		if (!isObject(result)) {
			setPersonInfo({
				fname: '',
				lname: '',
				email: '',
			});
			alert('Your request has been sent! We will send you an email!')
			setIsError({ fname: false, lname: false, email: false });
			return;
		}
		setIsError(prev => ({ ...prev, ...result }));
	};

	return (
		<>
			<form className={styles['free-guide_form']}>
				<input
					type='text'
					placeholder={isError.fname ? 'Fill in this field' : 'First Name'}
					value={personInfo.fname}
					onChange={handleFName}
					className={
						isError.fname
							? `${styles['guide-first_name']} ${styles['error']}`
							: styles['guide-first_name']
					}
				/>
				<input
					type='text'
					placeholder={isError.lname ? 'Fill in this field' : 'Last Name'}
					value={personInfo.lname}
					onChange={handleLName}
					className={
						isError.lname
							? `${styles['guide-last_name']} ${styles['error']}`
							: styles['guide-last_name']
					}
				/>
				<input
					type='email'
					placeholder={isError.email ? 'Fill in this field' : 'Email'}
					value={personInfo.email}
					onChange={handleEmail}
					className={
						isError.email
							? `${styles['guide-email']} ${styles['error']}`
							: styles['guide-email']
					}
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
