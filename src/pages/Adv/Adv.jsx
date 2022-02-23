import React from 'react';

import './Adv.css';

const Adv = () => {
	return(
		<section className="section__padding adv">
			<img src="/assets/img/wave.png" alt="Фон" className="faq__img" />

			<div className="container">
				<div className="adv__inner">
					<h2 className="title title__center">
						<span className="black blue">Рекламные</span> материалы
					</h2>

					<p className="medium__text adv__text">
						Мы подготовили набор рекламных материалов, которые позволят участникам эффективнее приглашать новых инвесторов на более выгодных условиях.
					</p>

					<p className="medium__text adv__text">
						Каждый участник программы получит в распоряжение уникальную партнерскую ссылку и набор баннеров, которые можно размещать на тематических форумах, сайтах, в социальных сетях и т. д.
					</p>

					<p className="medium__text adv__text">
						Использовать графические материалы и свою партнерскую ссылку с применением спам-технологий запрещено. Администрация компании постоянно ведет контроль по соблюдению правил партнерской программы. В случае если факт нарушения будет обнаружен, аккаунт партнера может быть заблокирован, а все привлеченные партнеры будут закреплены за компанией. То же касается и начисленных комиссионных.
					</p>

					<div className="adv__content">
						<p className="adv__suptext">
							Введите логин для генерации кода баннера
						</p>

						<input className="input adv__input" />
					</div>

					<div className="adv__content adv__generate">
						<div className="adv__size--inner">
							<div className="adv__size--select--wrapper">
								<select className="select adv__size--select">
									<option>240 x 400</option>
									<option>480 x 600</option>
									<option>720 x 800</option>
								</select>

								<img src="/assets/img/arrow-down.svg" alt="Стрелка" className="adv__size--select--arrow" />
							</div>

							<p className="adv__size--text">
								выберите размер
							</p>
						</div>

						<div className="adv__code--inner">
							<input className="input adv__code--input" />

							<button className="button adv__code--button">
								копировать код
							</button>
						</div>
					</div>

					<div className="adv__img--inner">
						<img className="adv__img" src="/assets/img/adv-img.png" alt="Картинка" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Adv;