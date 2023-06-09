import { Routes, Route, Navigate } from 'react-router-dom';
import Collections from '../pages/Collections';
import FreeGuide from '../pages/FreeGuide';
import Shop from '../pages/Shop';
import SingleGuide from '../pages/SingleGuide';
import Stories from '../pages/Stories';
import {
	COLLECTIONS_ROUTE,
	FREE_GUIDE,
	SHOP_ROUTE,
	SINGLE_GUIDE,
	STORIES_ROUTE,
} from '../utils/consts';

const AppRouter = () => {
	return (
		<Routes>
			<Route path={SHOP_ROUTE} element={<Shop />} />
			<Route path={COLLECTIONS_ROUTE} element={<Collections />} />
			<Route path={STORIES_ROUTE} element={<Stories />} />
			<Route path={SINGLE_GUIDE} element={<SingleGuide />} />
			<Route path={FREE_GUIDE} element={<FreeGuide />} />
			<Route path='/*' element={<Navigate to={SHOP_ROUTE} />} />
		</Routes>
	);
};
export default AppRouter;
