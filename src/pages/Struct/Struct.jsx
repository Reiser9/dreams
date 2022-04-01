import React from 'react';

const Struct = () => {
	return(
		<>
			<div className="admin__content--content flex w100">
				<div className="w100 flex">
					<h3 className="admin__title--inner w100">
						<img className="admin__title--icon" src="/assets/img/user-red.svg" alt="Иконка" />

						Личный кабинет
					</h3>

					<div className="profile__content content__margin flex w100">
						<div className="profile__content--item w100 flexdef">
							<div className="profile__content--info--inner flexdef">
								<img className="profile__content--info--img" src="/assets/img/ava.png" alt="Аватарка" />

								<div className="flex">
									<p className="profile__content--info--img--change">
										Сменить фото
									</p>

									<p className="profile__content--info--name">
										Александр Петров
									</p>

									<a href="mailto:alexanderpetrov@ya.ru" className="profile__content--info--mail admin flexdef">
										<img className="icon__def" src="/assets/img/mail-admin.svg" alt="Почта" />
										alexanderpetrov@ya.ru
									</a>
								</div>
							</div>

							<div className="flexdef profile__text--wrapper">
								<p className="profile__info--text">
									Всего партнеров:
								</p>

								<p className="profile__info--value">
									28
								</p>
							</div>

							<div className="flexdef profile__text--wrapper">
								<p className="profile__info--text">
									Активировано партнеров:
								</p>

								<p className="profile__info--value">
									5%
								</p>
							</div>
						</div>

						<div className="profile__content--item w100 flexdef">
							<p className="profile__info--text profile__ref--text">
								Реферальная ссылка:
							</p>

							<input className="input profile__ref--input admin" placeholder="domain.com/referal/492832" />

							<button className="button profile__ref--button admin">
								Скопировать
							</button>
						</div>
					</div>
				</div>

				<div className="w100 flex default__margin">
					<h3 className="admin__title--inner w100">
						<img className="admin__title--icon" src="/assets/img/partners-red.svg" alt="Иконка" />

						Ваши партнеры
					</h3>

					<div className="content__margin w100 flex admin__last">
						<div className="w100 flexdef admin__last--item">
							<p className="admin__last--text admin__last--blue admin__last--program">
								Программа
							</p>

							<p className="admin__last--text admin__last--blue admin__last--sum">
								Сумма
							</p>

							<p className="admin__last--text admin__last--blue admin__last--date">
								Дата регистрации
							</p>
						</div>

						<div className="w100 flexdef admin__last--item">
							<p className="admin__last--text admin__last--program">
								Название программы
							</p>

							<p className="admin__last--text admin__last--sum">
								0,002356 BTC
							</p>

							<p className="admin__last--text admin__last--date">
								25/12/2022
							</p>
						</div>

						<div className="w100 flexdef admin__last--item">
							<p className="admin__last--text admin__last--program">
								Название программы
							</p>

							<p className="admin__last--text admin__last--sum">
								0,002356 BTC
							</p>

							<p className="admin__last--text admin__last--date">
								25/12/2022
							</p>
						</div>

						<div className="w100 flexdef admin__last--item">
							<p className="admin__last--text admin__last--program">
								Название программы
							</p>

							<p className="admin__last--text admin__last--sum">
								0,002356 BTC
							</p>

							<p className="admin__last--text admin__last--date">
								25/12/2022
							</p>
						</div>

						<div className="w100 flexdef admin__last--item">
							<p className="admin__last--text admin__last--program">
								Название программы
							</p>

							<p className="admin__last--text admin__last--sum">
								0,002356 BTC
							</p>

							<p className="admin__last--text admin__last--date">
								25/12/2022
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

				<div className="w100 flex default__margin">
					<h3 className="admin__title--inner w100">
						<img className="admin__title--icon" src="/assets/img/message-red.svg" alt="Иконка" />

						Онлайн чат
					</h3>

					<div className="admin__chat flex w100 content__margin">
						<div className="admin__chat--item flexdef w100">
							<div className="admin__chat--item--img--inner">
								<img src="/assets/img/ava.png" className="img" alt="Аватарка" />
							</div>

							<div className="admin__chat--item--text w100">
								Привет, как сам?
							</div>
						</div>

						<div className="admin__chat--item flexdef w100">
							<div className="admin__chat--item--img--inner">
								<img src="/assets/img/ava.png" className="img" alt="Аватарка" />
							</div>

							<div className="admin__chat--item--text w100">
								Отлично, ты как?
							</div>
						</div>

						<div className="admin__chat--item flexdef w100">
							<div className="admin__chat--item--img--inner">
								<img src="/assets/img/ava.png" className="img" alt="Аватарка" />
							</div>

							<div className="admin__chat--item--text w100">
								Я вообще по кайфу
							</div>
						</div>

						<div className="admin__chat--item flexdef w100">
							<div className="admin__chat--item--img--inner">
								<img src="/assets/img/ava.png" className="img" alt="Аватарка" />
							</div>

							<div className="admin__chat--item--text w100">
								Понял, пока!
							</div>
						</div>

						<div className="admin__chat--send flexdef w100">
							<input className="input admin__chat--input w100 admin" placeholder="Ваше сообщение..." />

							<img className="admin__send--button" src="/assets/img/send.svg" alt="Отправить" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Struct;