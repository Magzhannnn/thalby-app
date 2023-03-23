import { useDispatch } from 'react-redux';
import { ICart } from '../../types/cart';
import { IShopPerson } from '../../types/shopPerson';
import MyButton from '../../UI/Button/MyButton';
// import MyFooter from '../../UI/Footer/MyFooter';
import styles from './SingleGuide.module.css';
import { addToCart } from '../../store/cart/cart-actions';

interface SingleGuideWrapProps {
	person: IShopPerson;
}

const SingleGuideWrap: React.FC<SingleGuideWrapProps> = ({ person }) => {
	const dispatch = useDispatch();

	const series = `The ${person?.country} Series`;
	const ebook = `Ebook Guide (Epub) - $${person?.price}`;
	const title = `Thalby Guide to ${person?.language} ${person?.prof_job}`;

	const handleAddToCart = () => {
		const addItem: ICart = {
			id: person.id,
			title: title,
			image: person.image,
			price: person.price,
			count: 1,
		};

		dispatch(addToCart(addItem));
	};

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
				<div className={styles['single-guide_ebook']}>
					<span></span>
					{ebook}
				</div>
				<div className={styles['single-guide_price']}>USD {person?.price}</div>
				<MyButton
					title='Add to cart'
					className={styles['single-guide_btn']}
					onClickHandle={handleAddToCart}
				/>
			</div>
		</div>
	);
};
export default SingleGuideWrap;
