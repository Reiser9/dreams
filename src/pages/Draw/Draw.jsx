import React from 'react';

const Draw = () => {
	return(
		<>
			<div className="admin__content--content flex w100">
				<div className="w100 flexcenter">
					<h3 className="admin__title--inner w100">
						<img className="admin__title--icon" src="/assets/img/gift-red.svg" alt="Иконка" />

						Розыгрыши
					</h3>

					<div className="draw__content flex w100">
						<img className="img" src="/assets/img/draw.png" alt="Картинка" />

						<p className="draw__title">
							А ещё элементы политического процесса, вне зависимости от их уровня
						</p>

						<p className="draw__text">
							Следует отметить, что перспективное планирование напрямую зависит от системы массового участия. Безусловно, консультация с широким активом не даёт нам иного выбора, кроме определения системы массового участия. А ещё элементы политического процесса, вне зависимости от их уровня, должны быть в равной степени предоставлены сами себе. Но действия представителей оппозиции будут в равной степени предоставлены сами себе.
						</p>

						<p className="draw__text">
							Следует отметить, что перспективное планирование напрямую зависит от системы массового участия. Безусловно, консультация с широким активом не даёт нам иного выбора, кроме определения системы массового участия. А ещё элементы политического процесса, вне зависимости от их уровня, должны быть в равной степени предоставлены сами себе. Но действия представителей оппозиции будут в равной степени предоставлены сами себе.
							Безусловно, консультация с широким активом не даёт нам иного выбора, кроме определения системы массового участия. А ещё элементы политического процесса, вне зависимости от их уровня, должны быть в равной степени предоставлены сами себе. Но действия представителей оппозиции будут в равной степени предоставлены сами себе.
						</p>

						<button className="button draw__button">
							Играть
						</button>
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

export default Draw;