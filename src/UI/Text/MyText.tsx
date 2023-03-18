import styles from './MyText.module.css';

interface MyTextProps {
	text: string;
}

const MyText: React.FC<MyTextProps> = ({ text }) => {
	return <div className={styles.my_text}>{text}</div>;
};
export default MyText;
