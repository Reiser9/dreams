import React from 'react';
import {Outlet} from 'react-router-dom';

import HeaderMain from './HeaderMain/HeaderMain.jsx';
import Footer from './Footer/Footer.jsx';

const Layout = () => {
	return(
		<>
			<HeaderMain />

			<Outlet />

			<Footer />
		</>
	)
}

export default Layout;