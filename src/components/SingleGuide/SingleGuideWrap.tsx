import { IShopPerson } from '../../types/shopPerson';
import MyButton from '../../UI/Button/MyButton';
import MyFooter from '../../UI/Footer/MyFooter';
import styles from './SingleGuide.module.css';

interface SingleGuideWrapProps {
	person: IShopPerson;
}

const SingleGuideWrap: React.FC<SingleGuideWrapProps> = ({ person }) => {
	const series = `The ${person?.country} Series`;
	const ebook = `Ebook Guide (Epub) - $${person?.price}`;
	const title = `Thalby Guide to ${person?.language} ${person?.prof_job}`;
	console.log(person);

	return (
		<div className={styles['single-guide-wrap']}>
			<div className={styles[`single-guide_${person?.image}`]}></div>
			<div className={styles['single-guide_right']}>
				<div className={styles['single-guide_title']}>{title}</div>
				<div className={styles['single-guide_series']}>{series}</div>
				<div className={styles['single-guide_stars']}>Stars)</div>
				<div className={styles['single-guide_annatation']}>
					{person?.annatation}
				</div>
				<div className={styles['single-guide_works']}>
					{person?.work.map(w => (
						<div className={styles['single-guide_work']} key={`single_${w}`}>
							<span></span> {w}
						</div>
					))}
				</div>
				<div className={styles['single-guide_ebook']}>{ebook}</div>
				<div className={styles['single-guide_price']}>USD {person?.price}</div>
				<MyButton
					title='Add to cart'
					className={styles['single-guide_btn']}
					onClickHandle={() => alert('Start Button')}
				/>
			</div>
		</div>
	);
};
export default SingleGuideWrap;
