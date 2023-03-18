import styles from './Shop.module.css';
import shopPersons from '../../data/shopPerson.json';
import ShopPersonItem from './ShopPersonItem';

const ShopPersonList = () => {
	return (
		<div className={styles['shop-person_list']}>
			{shopPersons.map(shopPerson => (
				<ShopPersonItem
					shopPerson={shopPerson}
					key={`shop_person${shopPerson.id}`}
				/>
			))}
		</div>
	);
};
export default ShopPersonList;
