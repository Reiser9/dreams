import React from 'react';

import './Payment.css';

const Payment = () => {
	return(
		<section className="section__padding payment">
			<img src="/assets/img/wave.png" alt="Фон" className="faq__img" />
			
			<div className="container">
				<div className="payment__inner">
					<h2 className="title title__center">
						<span className="black blue">Платежные</span> системы
					</h2>

					<p className="medium__text">
						Наша компания работает уже на протяжении многих лет. За годы своего существования мы достигли европейского уровня оказания профессиональных услуг на мировом рынке в данном сегменте.
					</p>

					<p className="medium__text">
						Команда компании состоит из настоящих профессионалов, всегда готовых оказать помощь своим клиентам. Для обеспечения достижения максимально выгодных результатов, компания использует наиболее успешные модели ведения бизнеса, а также разрабатывает свои собственные эффективные методы участия в данном бизнесе. Для удобства функционирования непосредственно системы, а также работы с клиентами, компания использует различные платежные системы, которые можно найти на сайте, при этом каждый клиент может осуществить платеж наиболее удобным для него способом.
					</p>

					<p className="medium__text">
						Как правило, комиссия за обслуживание составляет 0%.
					</p>

					<div className="payment__content">
						<p className="payment__procent">
							0%
						</p>

						<div className="payment__wrapper">
							<div className="payment__button--inner">
								<button className="button payment__button">
									внести
								</button>

								<button className="button payment__button">
									вывести
								</button>
							</div>

							<div className="payment__variant--inner">
								<div className="payment__item">
									<img src="/assets/img/pay1.png" alt="Платежный метод" className="payment__item--img" />
								</div>

								<div className="payment__item">
									<img src="/assets/img/pay2.png" alt="Платежный метод" className="payment__item--img" />
								</div>

								<div className="payment__item">
									<img src="/assets/img/pay3.png" alt="Платежный метод" className="payment__item--img" />
								</div>

								<div className="payment__item">
									<img src="/assets/img/pay4.png" alt="Платежный метод" className="payment__item--img" />
								</div>

								<div className="payment__item">
									<img src="/assets/img/pay5.png" alt="Платежный метод" className="payment__item--img" />
								</div>

								<div className="payment__item">
									<img src="/assets/img/pay6.png" alt="Платежный метод" className="payment__item--img" />
								</div>

								<div className="payment__item">
									<img src="/assets/img/pay7.png" alt="Платежный метод" className="payment__item--img" />
								</div>

								<div className="payment__item">
									<img src="/assets/img/pay8.png" alt="Платежный метод" className="payment__item--img" />
								</div>
							</div>
						</div>
					</div>

					<h2 className="title title__center payment__title">
						<span className="black blue">Безопасность</span>
					</h2>

					<div className="payment__save--inner">
						<div className="payment__save--item">
							<img src="/assets/img/save1.svg" alt="Картинка" className="payment__save--img" />

							<p className="payment__save--title">
								КОНФИДЕНЦИАЛЬНОСТЬ
							</p>

							<p className="payment__save--text">
								Наша компания уделяет большое внимание безопасности и конфиденциальности. Согласно правилам и условиям компании все данные, предоставленные клиентами, хранятся в строгой конфиденциальности, при этом компания обязуется не передавать эти данные никаким третьим лицам. Единственным, кто имеет доступ к полученным данным, является администратор сайта. Но даже он не может знать персональный пароль пользователя. В связи с этим рекомендуется хранить свои персональные данные в строгой секретности. Так, вы убережете свой аккаунт от возможности взлома и вытекающих нежелательных последствий.
							</p>
						</div>

						<div className="payment__save--item">
							<img src="/assets/img/save2.svg" alt="Картинка" className="payment__save--img" />

							<p className="payment__save--title">
								БЕЗОПАСНОСТЬ АККАУНТА
							</p>

							<p className="payment__save--text">
								Основной заботой нашей компании является безопасность аккаунтов пользователей. Для обеспечения сохранности данных в компании используются современные технологии, позволяющие надежно зашифровать полученную информацию. Таким образом, можно быть на 100% уверенным в том, что ваши личные данные не попадут третьим лицам. Дополнительно защита личных данных обеспечивается функционалом скрипта. Если со своей стороны компания сделала все возможное для защиты персональных данных, пользователям также следует приложить некоторые усилия для этого. К примеру, не сообщать никому свой логин и пароль. Таким образом, возможность взлома будет минимальной.
							</p>
						</div>

						<div className="payment__save--item">
							<img src="/assets/img/save3.svg" alt="Картинка" className="payment__save--img" />

							<p className="payment__save--title">
								ЛИЧНЫЕ ПАРОЛИ
							</p>

							<p className="payment__save--text">
								Как правило, регистрация на сайте любой компании предусматривает создание собственной учетной записи. Для этого создается специальный логин и пароль. Важно обеспечить сохранность пароля для безопасности использования своего аккаунта. Наша компания гарантирует конфиденциальность всех данных, полученных от клиента в процессе регистрации, в том числе созданных паролей. Во время верификации, а также сохранения используются специальные коды для шифровки, что обеспечивает дополнительную сохранность паролей. Система компании проверяет соответствие присланного пароля его исходному значению, хранящегося на сервере аутентификации. Таким образом, гарантируется максимальная защита данных пользователя.
							</p>
						</div>

						<div className="payment__save--item">
							<img src="/assets/img/save4.svg" alt="Картинка" className="payment__save--img" />

							<p className="payment__save--title">
								ЭЛЕКТРОННАЯ ПОЧТА
							</p>

							<p className="payment__save--text">
								Во время регистрации на нашем сайте необходимо указать действующий электронный адрес, на который будут приходить письма от компании, одним из первых при этом будет непосредственно письмо о регистрации. В данном письме будет содержаться ссылка, пройдя по которой вы будете перенаправлены для дальнейшего прохождения процесса регистрации. В случая возникновения необходимости, электронный адрес можно поменять. Но для этого потребуется подтверждение данного действия через электронную почту, указанную во время изначальной регистрации. Процедура восстановления не сложная. С ней легко справиться, достаточно только пройти основных два шага. Все это предусмотрено в целях безопасности аккаунта.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Payment;