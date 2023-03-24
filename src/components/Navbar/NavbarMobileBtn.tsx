import styles from './Navbar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

interface NavbarMobileBtnProps {
	menu: boolean;
	handleMenu: () => void;
}

const NavbarMobileBtn: React.FC<NavbarMobileBtnProps> = ({
	menu,
	handleMenu,
}) => {
	return (
		<div className={styles.mobile_btn} onClick={handleMenu}>
			{menu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
		</div>
	);
};
export default NavbarMobileBtn;
