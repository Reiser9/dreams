import React from 'react';
import {Outlet, Link} from 'react-router-dom';

import HeaderAdmin from './HeaderAdmin/HeaderAdmin.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';

const LayoutAdmin = () => {
	return(
		<div className="admin__body">
			<HeaderAdmin />

			<div className="admin__container">
				<Sidebar />

				<div className="admin__content">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default LayoutAdmin;