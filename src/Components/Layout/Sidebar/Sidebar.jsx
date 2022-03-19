import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
	return(
		<div className="admin__sidebar">
			<div className="admin__nav--item">
				<img className="admin__nav--icon" src="/assets/img/user.svg" alt="Иконка" />

				<div className="admin__nav--wrapper">
					<Link to="/profile" className="admin__nav--link admin big">
						Личный кабинет
					</Link>
				</div>
			</div>

			<div className="admin__nav--item">
				<img className="admin__nav--icon" src="/assets/img/platform.svg" alt="Иконка" />

				<div className="admin__nav--wrapper">
					<Link to="/program" className="admin__nav--link admin big">
						Программы
					</Link>

					<Link to="/present" className="admin__nav--link admin">
						Презентация
					</Link>

					<Link to="/partnersprogram" className="admin__nav--link admin">
						Партнерские программы
					</Link>

					<Link to="/struct" className="admin__nav--link admin">
						Структура
					</Link>

					<Link to="/historyoperation" className="admin__nav--link admin">
						История операций
					</Link>
				</div>
			</div>

			<div className="admin__nav--item">
				<img className="admin__nav--icon" src="/assets/img/wallet.svg" alt="Иконка" />

				<div className="admin__nav--wrapper">
					<Link to="/finance" className="admin__nav--link admin big">
						Финансы
					</Link>

					<Link to="/payment" className="admin__nav--link admin">
						Пополнить счет
					</Link>

					<Link to="/outmoney" className="admin__nav--link admin">
						Вывод средств
					</Link>

					<Link to="/struct" className="admin__nav--link admin">
						Обмен
					</Link>
				</div>
			</div>

			<div className="admin__nav--item">
				<img className="admin__nav--icon" src="/assets/img/program.svg" alt="Иконка" />

				<div className="admin__nav--wrapper">
					<Link to="/finance" className="admin__nav--link admin big">
						Платформа
					</Link>

					<Link to="/payment" className="admin__nav--link admin">
						Новости
					</Link>

					<Link to="/outmoney" className="admin__nav--link admin">
						Вебинары
					</Link>

					<Link to="/struct" className="admin__nav--link admin">
						Наши партнеры
					</Link>

					<Link to="/struct" className="admin__nav--link admin">
						Вакансии
					</Link>

					<Link to="/struct" className="admin__nav--link admin">
						Рекламные материалы
					</Link>

					<Link to="/struct" className="admin__nav--link admin">
						Путешествия
					</Link>

					<Link to="/struct" className="admin__nav--link admin">
						Вопрос-ответ
					</Link>
				</div>
			</div>

			<div className="admin__nav--item">
				<img className="admin__nav--icon" src="/assets/img/filter.svg" alt="Иконка" />

				<div className="admin__nav--wrapper">
					<Link to="/finance" className="admin__nav--link admin big">
						Управление
					</Link>

					<Link to="/payment" className="admin__nav--link admin">
						Настройки кабинета
					</Link>

					<Link to="/outmoney" className="admin__nav--link admin">
						Тех. поддержка
					</Link>

					<Link to="/struct" className="admin__nav--link admin">
						Реквизиты
					</Link>
				</div>
			</div>

			<p className="copy">
				© 2020-2022 Все права защищены
			</p>
		</div>
	)
}

export default Sidebar;