import styles from "./Shop.module.css"

const ShopFooter = () => {
	return <div className={styles["shop-footer"]}>
		<div className={styles["shop-footer_title"]}>Check out our collections</div>
		<div className={styles["shop-footer_btn"]}>See collections</div>
	</div>;
};
export default ShopFooter;