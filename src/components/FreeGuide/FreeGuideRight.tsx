import styles from './FreeGuide.module.css';
import frenchGuide from '../../image/person2.png';

interface FreeGuideRightProps {
	image: string;
}

const FreeGuideRight: React.FC<FreeGuideRightProps> = ({ image }) => {
	return frenchGuide.includes(image) ? (
		<div>
			<img src={frenchGuide} alt='/' className={styles['free-guide_right']} />
		</div>
	) : null;
};
export default FreeGuideRight;
