import Container from '../../UI/Container/Container';
import styles from './Navbar.module.css';
import CartModal from '../CartModal/CartModal';
import NavbarLeft from './NavbarLeft';
import NavbarMobileBtn from './NavbarMobileBtn';
import NavbarCenter from './NavbarCenter'
import NavbarRight from './NavbarRight'
import { useState } from 'react'

const Navbar = () => {
	const [isMenu, setIsMenu] = useState(false);
	// const navigate = useNavigate();
	// const dispatch = useDispatch();
	// const cartInfo = useSelector(selectAllCartInfo);

	// useEffect(() => {
	// 	console.log(cartInfo);
	// }, [cartInfo]);

	const handleMenu = () => {
		setIsMenu(!isMenu);
	};

	return (
		<div className={styles.navbar}>
			<Container className={styles['navbar-wrapper']}>
				<NavbarLeft isMenu={isMenu} handleMenu={handleMenu} />
				<NavbarMobileBtn isMenu={isMenu} handleMenu={handleMenu} />
				<NavbarCenter />
				<NavbarRight />
			</Container>
			<CartModal />
		</div>
	);
};
export default Navbar;
