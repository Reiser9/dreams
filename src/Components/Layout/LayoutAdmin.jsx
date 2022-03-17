import React from 'react';
import {Outlet} from 'react-router-dom';



const LayoutAdmin = () => {
	return(
		<div className="admin__body">
			<Outlet />
		</div>
	)
}

export default LayoutAdmin;