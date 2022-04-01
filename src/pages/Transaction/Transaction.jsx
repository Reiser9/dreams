import React from 'react';

const Transaction = () => {
	return(
		<>
			<div className="admin__content--content flex w100">
				<div className="w100 flex">
					<h3 className="admin__title--inner w100">
						<img className="admin__title--icon" src="/assets/img/transaction-red.svg" alt="Иконка" />

						Перевод средств
					</h3>

					<div className="content__margin w100 trans__inner">
						<div className="trans__side flexs w100 flex">
							<p className="trans__side--title">
								Отдадите
							</p>

							<div className="trans__side--box w100 content__margin">
								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin1.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin2.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin3.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100 active">
									<img className="trans__side--img flexs" src="/assets/img/coin4.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin5.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin6.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin7.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin8.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin9.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin10.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="trans__content w100">
							<div className="profile__content content__margin flex w100">
								<div className="profile__content--info--inner flexdef flexw">
									<img className="profile__content--info--img" src="/assets/img/ava.png" alt="Аватарка" />

									<div className="flex">
										<p className="flexdef green">
											<img className="mr1" src="/assets/img/save.svg" alt="Картинка" />

											Верифицирован
										</p>

										<p className="profile__content--info--name">
											Партнерский процент: 3.75%
										</p>

										<p className="profile__content--info--name">
											Личный счет: 1657 USD
										</p>
									</div>
								</div>
							</div>

							<div className="transaction__content flexcenter w100 content__margin">
								<img className="trans__bg" src="/assets/img/trans-bg.svg" alt="Картинка" />

								<div className="trans__info posr flexbet w100 flexw">
									<div className="flexdef mall5">
										<img className="trans__side--img flexs" src="/assets/img/coin1.svg" alt="Монета" />

										<div className="flex w100">
											<p className="trans__side--item--title">
												Bitcoin
											</p>

											<p className="trans__side--item--text">
												BTC
											</p>
										</div>
									</div>

									<div className="flexend mall5">
										<p className="trans__info--val">
											0,000235689 BTC
										</p>

										<p className="trans__info--comm">
											<span className="green">5%</span> комм.
										</p>
									</div>
								</div>

								<div className="posr flex content__margin w100">
									<div className="w100 flexbet flexw trans__input--inner">
										<div className="trans__item flex mt1">
											<p className="trans__side--title">
												Отдаете
											</p>

											<select className="mt1 w100 select trans__select">
												<option>BTC</option>
												<option>USD</option>
											</select>
										</div>

										<div className="trans__item flex mt1">
											<p className="trans__side--title">
												Поступит
											</p>

											<select className="mt1 w100 select trans__select">
												<option>USD</option>
												<option>ETH</option>
											</select>
										</div>
									</div>

									<div className="w100 flexbet flexw trans__input--inner content__margin">
										<div className="trans__item flex mt1">
											<p className="trans__side--title">
												Логин партнера
											</p>

											<input className="mt1 w100 input select trans__input" />
										</div>

										<div className="trans__item flex mt1">
											<button className="button w100 draw__button trans__button">
												Обмен
											</button>
										</div>
									</div>
								</div>

								<div className="posr flexdef content__margin">
									<input type="checkbox" id="trans" className="checkbox" />

									<label className="trans__label posr" for="trans">Я согласен с условиями</label>
								</div>
							</div>

							<div className="trans__warn flex w100 content__margin">
								<img className="trans__warn--bg" src="/assets/img/warnbg.svg" alt="Картинка" />

								<div className="trans__warn--text--inner w100">
									<img className="flexs mr1" src="/assets/img/warn-red.svg" alt="Иконка" />

									<div className="trans__warn--text w100 flex">
										<p className="trans__warn--text--title">
											Предупреждение
										</p>

										<p className="trans__warn--text--text">
											Следует отметить, что перспективное планирование напрямую зависит от системы массового участия. Безусловно, консультация с широким активом не даёт нам иного выбора, кроме определения системы массового участия. А ещё элементы политического процесса, вне зависимости от их уровня, должны быть в равной степени предоставлены сами себе. Но действия представителей оппозиции будут в равной степени предоставлены сами себе.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="trans__side flexs w100 flex">
							<p className="trans__side--title">
								Получите
							</p>

							<div className="trans__side--box w100 content__margin">
								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin1.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin2.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin3.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin4.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin5.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin6.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin7.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin8.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin9.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>

								<div className="trans__side--item flexdef w100">
									<img className="trans__side--img flexs" src="/assets/img/coin10.svg" alt="Монета" />

									<div className="flex w100">
										<p className="trans__side--item--title">
											Bitcoin
										</p>

										<p className="trans__side--item--text">
											BTC
										</p>
									</div>
								</div>
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

export default Transaction;