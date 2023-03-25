import styles from './Stories.module.css';
import stories1 from '../../image/stories1.png';
import stories2 from '../../image/stories2.png';
import stories3 from '../../image/stories3.png';
import { IStoriesPerson } from '../../types/storiesPerson';

interface StoriesItemProps {
	person: IStoriesPerson;
}

const StoriesItem: React.FC<StoriesItemProps> = ({ person }) => {
	const images: string[] = [stories1, stories2, stories3];

	return (
		<div className={styles['stories-item']}>
			<div>
				{images.map(
					image =>
						image.includes(person.image) && (
							<img
								src={image}
								alt={person.image}
								className={styles['stories-item_img']}
							/>
						)
				)}
			</div>
			<div className={styles['stories-item_fullname']}>{person.fullName}</div>
			<div className={styles['stories-item_date']}>{person.date}</div>
			<div className={styles['stories-item_text']}>{person.text}</div>
		</div>
	);
};
export default StoriesItem;
