import React from 'react';

const Operation = () => {
	return(
		<>
			<div className="admin__content--content flex w100">
				<div className="w100 flex">
					<h3 className="admin__title--inner w100">
						<img className="admin__title--icon" src="/assets/img/operation-red.svg" alt="Иконка" />

						Операции
					</h3>

					<div className="content__margin flex w100 mall">
						<p className="operation__text">
							Счет
						</p>

						<select className="select operation__select admin">
							<option>Лицевой</option>
							<option>Физический</option>
						</select>
					</div>

					<div className="content__margin flexdefend w100 flexw operation__filter">
						<div className="flex mall">
							<p className="operation__text">
								Статья
							</p>

							<select className="select operation__select admin">
								<option>Все</option>
								<option>Определенные</option>
							</select>
						</div>

						<div className="flex mall">
							<p className="operation__text">
								Период от:
							</p>

							<input type="date" className="operation__date admin" />
						</div>

						<div className="flex mall">
							<p className="operation__text">
								до:
							</p>

							<input type="date" className="operation__date admin" />
						</div>

						<button className="button pay__button mall">
							Показать
						</button>
					</div>

					<div className="flexw w100 flexdef content__margin">
						<div className="flexdef mall">
							<p className="operation__text">
								Приход
							</p>

							<input className="input admin operation__input" placeholder="325 365$" />
						</div>

						<div className="flexdef mall">
							<p className="operation__text">
								Расход
							</p>

							<input className="input admin operation__input" placeholder="325 365$" />
						</div>

						<div className="flexdef mall">
							<p className="operation__text">
								Сальдо
							</p>

							<input className="input admin operation__input" placeholder="325 365$" />
						</div>
					</div>

					<div className="content__margin w100 flex admin__last">
						<div className="w100 flexdef admin__last--item">
							<p className="admin__last--text admin__last--blue operation__item--num">
								№
							</p>

							<p className="admin__last--text admin__last--blue operation__item--date">
								Дата и время
							</p>

							<p className="admin__last--text admin__last--blue operation__item--desc">
								Описание
							</p>

							<p className="admin__last--text admin__last--blue operation__item--in">
								Приход
							</p>

							<p className="admin__last--text admin__last--blue operation__item--out">
								Расход
							</p>
						</div>

						<div className="w100 flexdef admin__last--item">
							<p className="admin__last--text operation__item--num">
								123
							</p>

							<p className="admin__last--text operation__item--date">
								12/12/2022 14:56
							</p>

							<p className="admin__last--text operation__item--desc">
								Cold Matrix развитие проекта
								[1258468] Samuil
							</p>

							<p className="admin__last--text operation__item--in">
								+56$
							</p>

							<p className="admin__last--text operation__item--out">
								-19$
							</p>
						</div>

						<div className="w100 flexdef admin__last--item">
							<p className="admin__last--text operation__item--num">
								123
							</p>

							<p className="admin__last--text operation__item--date">
								12/12/2022 14:56
							</p>

							<p className="admin__last--text operation__item--desc">
								Cold Matrix развитие проекта
								[1258468] Samuil
							</p>

							<p className="admin__last--text operation__item--in">
								+56$
							</p>

							<p className="admin__last--text operation__item--out">
								-19$
							</p>
						</div>

						<div className="w100 flexdef admin__last--item">
							<p className="admin__last--text operation__item--num">
								123
							</p>

							<p className="admin__last--text operation__item--date">
								12/12/2022 14:56
							</p>

							<p className="admin__last--text operation__item--desc">
								Cold Matrix развитие проекта
								[1258468] Samuil
							</p>

							<p className="admin__last--text operation__item--in">
								+56$
							</p>

							<p className="admin__last--text operation__item--out">
								-19$
							</p>
						</div>

						<div className="w100 flexdef admin__last--item">
							<p className="admin__last--text operation__item--num">
								123
							</p>

							<p className="admin__last--text operation__item--date">
								12/12/2022 14:56
							</p>

							<p className="admin__last--text operation__item--desc">
								Cold Matrix развитие проекта
								[1258468] Samuil
							</p>

							<p className="admin__last--text operation__item--in">
								+56$
							</p>

							<p className="admin__last--text operation__item--out">
								-19$
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="admin__content--right flex w100">
				<div className="w100 flex">
					<h3 className="admin__title--inner w100">
						<img className="admin__title--icon" src="/assets/img/gift-red.svg" alt="Иконка" />

						Новости
					</h3>

					<div className="flex w100 content__margin">
						<div className="admin__news--item flex w100">
							<img className="admin__news--item--img" src="/assets/img/new-img.png" alt="Картинка новости" />

							<div className="admin__news--text--inner flex w100">
								<p className="admin__news--text--title">
									Акция от ОЛИМПБЕТ Лига чемпионов ждет тебя!
								</p>

								<p className="admin__news--text--text">
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
								</p>
							</div>
						</div>

						<div className="admin__news--item flex w100">
							<img className="admin__news--item--img" src="/assets/img/new-img.png" alt="Картинка новости" />

							<div className="admin__news--text--inner flex w100">
								<p className="admin__news--text--title">
									Акция от ОЛИМПБЕТ Лига чемпионов ждет тебя!
								</p>

								<p className="admin__news--text--text">
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Operation;