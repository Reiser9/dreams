import React from 'react';

const Balance = () => {
	return(
		<>
			<div className="admin__content--content flex w100">
				<div className="w100 flex">
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

				<div className="w100 flex">
					<h3 className="admin__title--inner w100 default__margin">
						<img className="admin__title--icon" src="/assets/img/trans.svg" alt="Иконка" />

						Последние транзакции
					</h3>

					<div className="content__margin w100">
						<table className="admin__last w100">
							<tr className="last__item">
								<th>Тип операции</th>
								<th>Дата и время</th>
								<th>ЭПС</th>
								<th>Приход</th>
								<th>Расход</th>
								<th>Статус платежа</th>
							</tr>

							<tr className="last__item">
								<td>Начисление</td>
								<td>12/12/2022 14:56</td>
								<td>BTC</td>
								<td>+56$</td>
								<td>-19$</td>
								<td>Выполнено</td>
							</tr>

							<tr className="last__item">
								<td>Начисление</td>
								<td>12/12/2022 14:56</td>
								<td>BTC</td>
								<td>+56$</td>
								<td>-19$</td>
								<td>Выполнено</td>
							</tr>

							<tr className="last__item">
								<td>Начисление</td>
								<td>12/12/2022 14:56</td>
								<td>BTC</td>
								<td>+56$</td>
								<td>-19$</td>
								<td>Выполнено</td>
							</tr>

							<tr className="last__item">
								<td>Начисление</td>
								<td>12/12/2022 14:56</td>
								<td>BTC</td>
								<td>+56$</td>
								<td>-19$</td>
								<td>Выполнено</td>
							</tr>

							<tr className="last__item">
								<td>Начисление</td>
								<td>12/12/2022 14:56</td>
								<td>BTC</td>
								<td>+56$</td>
								<td>-19$</td>
								<td>Выполнено</td>
							</tr>

							<tr className="last__item">
								<td>Начисление</td>
								<td>12/12/2022 14:56</td>
								<td>BTC</td>
								<td>+56$</td>
								<td>-19$</td>
								<td>Выполнено</td>
							</tr>
						</table>
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

export default Balance;