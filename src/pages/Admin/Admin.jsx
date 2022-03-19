import React from 'react';

const Admin = () => {
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
						<img className="admin__title--icon" src="/assets/img/wallet-red.svg" alt="Иконка" />

						Баланс счетов
					</h3>

					<div className="content__margin admin__wallet w100">
						<div className="admin__wallet--item orange flex">
							<img className="admin__wallet--bg" src="/assets/img/wallet-bg.svg" alt="Картинка" />

							<div className="flexdef w100 admin__wallet--text--inner">
								<div className="flexdef">
									<div className="admin__wallet--coin--inner flexs">
										<img className="img__auto" src="/assets/img/bitcoin-red.svg" alt="Коин" />
									</div>

									<p className="admin__wallet--text ml1">
										Баланс для вывода
									</p>
								</div>

								<div className="flexend ml1 flexs">
									<p className="admin__wallet--text">
										$67869
									</p>

									<p className="admin__wallet--text mt1">
										0.2356 МТВ
									</p>
								</div>
							</div>

							<div className="flexdef w100 admin__wallet--text--inner">
								<p className="admin__wallet--text mr1">
									1 МТВ = 40.000$
								</p>

								<p className="admin__wallet--text">
									+0,235%
								</p>
							</div>
						</div>

						<div className="admin__wallet--item blue flex">
							<img className="admin__wallet--bg" src="/assets/img/people-bg.svg" alt="Картинка" />

							<div className="flexdef w100 admin__wallet--text--inner">
								<div className="flexdef">
									<div className="admin__wallet--coin--inner flexs">
										<img className="img__auto" src="/assets/img/bitcoin-red.svg" alt="Коин" />
									</div>

									<p className="admin__wallet--text ml1">
										Баланс клонов
									</p>
								</div>

								<div className="flexend ml1 flexs">
									<p className="admin__wallet--text">
										$67869
									</p>

									<p className="admin__wallet--text mt1">
										0.2356 МТВ
									</p>
								</div>
							</div>

							<div className="flexdef w100 admin__wallet--text--inner">
								<p className="admin__wallet--text mr1">
									1 МТВ = 40.000$
								</p>

								<p className="admin__wallet--text">
									+0,235%
								</p>
							</div>
						</div>

						<div className="admin__wallet--item green flex">
							<img className="admin__wallet--bg" src="/assets/img/beach-bg.svg" alt="Картинка" />

							<div className="flexdef w100 admin__wallet--text--inner">
								<div className="flexdef">
									<div className="admin__wallet--coin--inner flexs">
										<img className="img__auto" src="/assets/img/bitcoin-red.svg" alt="Коин" />
									</div>

									<p className="admin__wallet--text ml1">
										Баланс для путешествий
									</p>
								</div>

								<div className="flexend ml1 flexs">
									<p className="admin__wallet--text">
										$67869
									</p>

									<p className="admin__wallet--text mt1">
										0.2356 МТВ
									</p>
								</div>
							</div>

							<div className="flexdef w100 admin__wallet--text--inner">
								<p className="admin__wallet--text mr1">
									1 МТВ = 40.000$
								</p>

								<p className="admin__wallet--text">
									+0,235%
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="w100 flex default__margin">
					<h3 className="admin__title--inner w100">
						<img className="admin__title--icon" src="/assets/img/last-red.svg" alt="Иконка" />

						Последние поступления
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
								Дата
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

export default Admin;