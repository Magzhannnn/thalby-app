import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SingleGuideWrap from '../components/SingleGuide/SingleGuideWrap';
import { IShopPerson } from '../types/shopPerson';
import Container from '../UI/Container/Container';

const SingleGuide = () => {
	const location = useLocation();
	const [data, setData] = useState(localStorage.getItem('shopPerson'));
	const [person, setPerson] = useState<IShopPerson[]>([]);

	useEffect(() => {
		setData(localStorage.getItem('shopPerson'));
	}, [location]);

	useEffect(() => {
		if (data) setPerson([JSON.parse(data)]);
	}, [data]);

	if (!person) <h1 style={{ textAlign: 'center', fontSize: 25 }}>Error</h1>;

	return (
		<Container>
			<SingleGuideWrap person={person[0]} />
		</Container>
	);
};
export default SingleGuide;
