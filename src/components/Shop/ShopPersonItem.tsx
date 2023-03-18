import { IShopPerson } from '../../types/shopPerson';
import styles from './Shop.module.css';

interface ShopPersonItemProps {
	shopPerson: IShopPerson;
}

const ShopPersonItem: React.FC<ShopPersonItemProps> = ({ shopPerson }) => {
	const title = `Thalby Guide to ${shopPerson.language} ${shopPerson.prof_job}`;

	return (
		<div className={styles['shop-person_item']}>
			<div className={styles[`shop-${shopPerson.image}`]}></div>
			<div className={styles['shop-person_title']}>{title}</div>
			<div className={styles['shop-person_price']}>
				USD ${shopPerson.price}
			</div>
			<button className={styles['shop-person_btn']}>Add to cart</button>
		</div>
	);
};
export default ShopPersonItem;
