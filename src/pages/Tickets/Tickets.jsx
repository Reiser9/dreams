import React from 'react';


const Tickets = () => {
	return(
		<>
			<div className="admin__content--content flex w100">
				<div className="w100 flex">
					<h3 className="admin__title--inner w100">
						<img className="admin__title--icon" src="/assets/img/ticket-red.svg" alt="Иконка" />

						Тикеты
					</h3>

					<div className="content__margin w100 ticket__content">
						<div className="w100 flex ticket__dialogs flexs">
							<div className="ticket__dialogs--item w100 flexdef">
								<img className="ticket__dialogs--img flexs" src="/assets/img/ava2.png" alt="Аватарка" />

								<div className="w100 flex ticket__dialogs--text--inner">
									<p className="ticket__dialogs--title">
										user 123
									</p>

									<p className="ticket__dialogs--text">
										Привет. Я покупал тут валю..
									</p>
								</div>

								<div className="ticket__dialogs--index flexs">
									23
								</div>
							</div>

							<div className="ticket__dialogs--item w100 flexdef">
								<img className="ticket__dialogs--img flexs" src="/assets/img/ava2.png" alt="Аватарка" />

								<div className="w100 flex ticket__dialogs--text--inner">
									<p className="ticket__dialogs--title">
										user 123
									</p>

									<p className="ticket__dialogs--text">
										Привет. Я покупал тут валю..
									</p>
								</div>

								<div className="ticket__dialogs--index flexs">
									23
								</div>
							</div>

							<div className="ticket__dialogs--item w100 flexdef active">
								<img className="ticket__dialogs--img flexs" src="/assets/img/ava2.png" alt="Аватарка" />

								<div className="w100 flex ticket__dialogs--text--inner">
									<p className="ticket__dialogs--title">
										user 123
									</p>

									<p className="ticket__dialogs--text">
										Привет. Я покупал тут валю..
									</p>
								</div>

								<div className="ticket__dialogs--index flexs">
									23
								</div>
							</div>

							<div className="ticket__dialogs--item w100 flexdef">
								<img className="ticket__dialogs--img flexs" src="/assets/img/ava2.png" alt="Аватарка" />

								<div className="w100 flex ticket__dialogs--text--inner">
									<p className="ticket__dialogs--title">
										user 123
									</p>

									<p className="ticket__dialogs--text">
										Привет. Я покупал тут валю..
									</p>
								</div>

								<div className="ticket__dialogs--index flexs">
									23
								</div>
							</div>
						</div>

						<div className="w100 flex ticket__wrapper">
							<div className="w100 flex ticket__dialog--content">
								<div className="w100 flexdef ticket__message--inner opponent">
									<div className="ticket__ava--inner">
										<img className="ticket__ava" src="/assets/img/ava.png" alt="Аватарка" />
									</div>

									<p className="ticket__message">
										Привет, как сам?
									</p>
								</div>

								<div className="w100 flexdef ticket__message--inner me">
									<p className="ticket__message">
										Привет, норм..
									</p>
								</div>

								<div className="w100 flexdef ticket__message--inner opponent">
									<div className="ticket__ava--inner">
										<img className="ticket__ava" src="/assets/img/ava.png" alt="Аватарка" />
									</div>

									<p className="ticket__message">
										Привет, как сам?
									</p>
								</div>
							</div>

							<div className="w100 flex ticket__send--content">
								<textarea className="input ticket__input w100 admin" placeholder="Ваше сообщение..."></textarea>

								<button className="button pay__button ticket__send--button">
									Отправить
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

export default Tickets;