import styles from './MyButton.module.css';

interface MyButtonProps {
	title: string;
	className?: string;
	onClickHandle: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({
	title,
	className,
	onClickHandle,
}) => {
	const classes = !className ? styles.btn : `${styles.btn} ${className}`;

	return (
		<div className={classes} onClick={onClickHandle}>
			{title}
		</div>
	);
};
export default MyButton;
