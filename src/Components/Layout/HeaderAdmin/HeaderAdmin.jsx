import React from 'react';
import {Link} from 'react-router-dom';

const HeaderAdmin = () => {
	return(
		<header className="admin__header">
			<div className="admin__header--inner">
				<div className="admin__header--wrapper">
					<Link to="/admin" className="admin__header--logo--inner">
						<img className="img" src="/assets/img/logo-admin.svg" alt="Лого" />
					</Link>

					<p className="admin__balance">
						ВАШ БАЛАНС: <span className="green__color">2000 МТВ 1 МТВ = 1$</span>
					</p>
				</div>

				<div className="admin__header--wrapper">
					<div className="admin__header--settings">
						<div className="admin__lang--inner">
							<img className="admin__lang--icon" src="/assets/img/ru.svg" alt="Язык" />

							RU

							<img className="admin__lang--arrow" src="/assets/img/arrow-bottom-white.svg" alt="Стрелка" />
						</div>

						<Link to="notify" className="admin__control control">
							<img className="admin__logout--icon" src="/assets/img/notify.svg" alt="Иконка" />
						</Link>

						<Link to="messages" className="admin__control control">
							<img className="admin__logout--icon" src="/assets/img/message.svg" alt="Иконка" />
						</Link>

						<Link to="settings" className="admin__control control">
							<img className="admin__logout--icon" src="/assets/img/settings.svg" alt="Иконка" />
						</Link>
					</div>

					<div className="admin__header--data--wrapper">
						<Link to="profile" className="admin admin__name">
							Александр Р.
						</Link>

						<Link to="profile" className="admin__img">
							<img src="/assets/img/ava.png" className="img" alt="Аватар" />
						</Link>

						<div className="admin__control admin__logout">
							<img className="admin__logout--icon" src="/assets/img/logout.svg" alt="Иконка" />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderAdmin;