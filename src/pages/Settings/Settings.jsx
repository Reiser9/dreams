import React from 'react';

const Settings = () => {
	return(
		<>
			<div className="admin__content--content flex w100">
				<div className="w100 flex">
					<h3 className="admin__title--inner w100">
						<img className="admin__title--icon" src="/assets/img/settings-red.svg" alt="Иконка" />

						Настройки
					</h3>

					<div className="content__margin w100 flex settings__content">
						<div className="w100 flexbet flexw trans__input--inner">
							<div className="trans__item flex mt1">
								<p className="setting__side--title">
									ФИО
								</p>

								<input className="mt1 w100 input select trans__input" />
							</div>

							<div className="trans__item flex mt1">
								<p className="setting__side--title">
									Телеграм
								</p>

								<input className="mt1 w100 input select trans__input" />
							</div>
						</div>

						<div className="w100 flexbet flexw trans__input--inner mt1">
							<div className="trans__item flex mt1">
								<p className="setting__side--title">
									Ютуб
								</p>

								<input className="mt1 w100 input select trans__input" />
							</div>

							<div className="trans__item flex mt1">
								<p className="setting__side--title">
									Ватсапп
								</p>

								<input className="mt1 w100 input select trans__input" />
							</div>
						</div>

						<div className="w100 centerflex flexw trans__input--inner content__margin">
							<div className="trans__item flex mt1">
								<button className="button w100 draw__button trans__button">
									Сохранить
								</button>
							</div>
						</div>

						<div className="w100 flexbet flexw trans__input--inner content__margin">
							<div className="trans__item flex mt1">
								<p className="setting__side--title">
									Новый пароль
								</p>

								<input className="mt1 w100 input select trans__input" type="password" />
							</div>

							<div className="trans__item flex mt1">
								<p className="setting__side--title">
									Повторите пароль
								</p>

								<input className="mt1 w100 input select trans__input" type="password" />
							</div>
						</div>

						<div className="w100 flexbet flexw trans__input--inner mt1">
							<div className="trans__item flex mt1">
								<p className="setting__side--title">
									Код безопасности
								</p>

								<input className="mt1 w100 input select trans__input" />
							</div>
						</div>

						<div className="w100 centerflex flexw trans__input--inner content__margin">
							<div className="trans__item flex mt1">
								<button className="button w100 draw__button trans__button">
									Сохранить
								</button>
							</div>
						</div>

						<div className="w100 flexbet flexw trans__input--inner content__margin">
							<div className="trans__item flex mt1">
								<p className="setting__side--title">
									Новая почта
								</p>

								<input className="mt1 w100 input select trans__input" />
							</div>

							<div className="trans__item flex mt1">
								<p className="setting__side--title">
									Повторите почту
								</p>

								<input className="mt1 w100 input select trans__input" />
							</div>
						</div>

						<div className="w100 flexbet flexw trans__input--inner mt1">
							<div className="trans__item flex mt1">
								<p className="setting__side--title">
									Код безопасности
								</p>

								<input className="mt1 w100 input select trans__input" />
							</div>
						</div>

						<div className="w100 centerflex flexw trans__input--inner content__margin">
							<div className="trans__item flex mt1">
								<button className="button w100 draw__button trans__button">
									Сохранить
								</button>
							</div>
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

export default Settings;