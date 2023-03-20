import MyButton from '../Button/MyButton'
import styles from './MyFooter.module.css';

interface MyFooterProps {
	footTitle: string;
	footBtnTitle: string;
	handleFooterClick: () => void;
}

const MyFooter: React.FC<MyFooterProps> = ({
	footTitle,
	footBtnTitle,
	handleFooterClick,
}) => {
	return (
		<div className={styles['footer']}>
			<div className={styles['footer_title']}>{footTitle}</div>
			<MyButton title={footBtnTitle} onClickHandle={handleFooterClick} />
		</div>
	);
};
export default MyFooter;
