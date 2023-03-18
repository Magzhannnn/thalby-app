import styles from './Shop.module.css';
import shopPersons from '../../data/shopPerson.json';

const ShopOffEurope = () => {
	const uniqueProfJob = shopPersons
		.filter(item => item.prof_job === 'Culture and Heritage')
		.slice(0, 3);

	console.log(uniqueProfJob);

	return (
		<div className={styles['shop-europe']}>
			<div className={styles['show-europe_left']}>
				<div className={styles['show-europe_title']}>
					Off to Europe? <br /> Check out our European <br /> Culture Collection
				</div>
				<div className={styles['show-europe_text']}>
					Packed with culture, amazing architecture and fascinating <br />{' '}
					cuisines, Europe is a culture-lover's paradise. Gain a deeper <br />{' '}
					understanding with these three guides.
				</div>
				<div className={styles['shop-europe_includes']}>
					Includes:{' '}
					{uniqueProfJob.map(item => (
						<span key={`item_${item.id}`}>
							{item.language} {item.prof_job},
						</span>
					))}
				</div>
				<div className={styles['shop-europe_collection']}>
					<span>{uniqueProfJob.length}</span>Guides in this Collection
				</div>
				<div className={styles['shop-europe_price']}>
					<span>USD 12.99</span> Save $3.00 (19%)
				</div>
			</div>
			<div className={styles['shop-europe_right']}>
				{uniqueProfJob.map(item => (
					<div
						key={`image_${item.id}`}
						className={styles[`shop-europe_${item.image}`]}
					></div>
				))}
			</div>
		</div>
	);
};
export default ShopOffEurope;
