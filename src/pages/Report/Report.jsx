import React from 'react';

const Report = () => {
	return(
		<section className="section__padding report">
			<div className="rep__box">
				<div className="container news__contained">
					<img src="/assets/img/report-img.png" alt="Картинка" className="news__box--img" />

					<div className="report__box--text--inner">
						<h2 className="title">
							<span className="black blue">Финансовые </span> отчеты
						</h2>

						<div className="rep__box--text--inner">
							<p className="rep__box--text">
								Сохранение и приумножение своих денег всегда являлось желанием человека к лучшей жизни. Поэтому инвестирование в активы всегда было популярно и требовались услуги профессионалов, которые могли бы этим заниматься на профессиональной основе. Это справедливо, так как риск для новичка все потерять в самом начале крайне велик.
							</p>

							<p className="rep__box--text">
								В последние несколько лет помимо традиционных акций компаний появились криптопроекты, которые действуют по совершенно иному уровню и требуют еще большей квалифицированности.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="report__inner">
					<div className="report__content">
						<div className="report__item">
							<p className="report__date">
								01.11.2021 - 01.12.2021
							</p>

							<div className="report__box">
								<div className="report__box--item">
									<p className="report__box--date grey">
										Дата и время
									</p>

									<p className="report__box--type grey">
										Тип
									</p>

									<p className="report__box--operate grey">
										Операция
									</p>

									<p className="report__box--price grey">
										Цена ($)
									</p>

									<p className="report__box--val grey">
										Кол-во Bitex
									</p>

									<p className="report__box--total grey">
										Всего ($)
									</p>
								</div>

								<div className="report__box--item">
									<p className="report__box--date">
										01.12.2021
									</p>

									<p className="report__box--type">
										A
									</p>

									<p className="report__box--operate">
										Покупка
									</p>

									<p className="report__box--price">
										1450
									</p>

									<p className="report__box--val">
										12
									</p>

									<p className="report__box--total">
										125423
									</p>
								</div>

								<div className="report__box--item">
									<p className="report__box--date">
										01.12.2021
									</p>

									<p className="report__box--type">
										A
									</p>

									<p className="report__box--operate">
										Покупка
									</p>

									<p className="report__box--price">
										1450
									</p>

									<p className="report__box--val">
										12
									</p>

									<p className="report__box--total">
										125423
									</p>
								</div>

								<div className="report__box--item">
									<p className="report__box--date">
										01.12.2021
									</p>

									<p className="report__box--type">
										A
									</p>

									<p className="report__box--operate">
										Покупка
									</p>

									<p className="report__box--price">
										1450
									</p>

									<p className="report__box--val">
										12
									</p>

									<p className="report__box--total">
										125423
									</p>
								</div>

								<img src="/assets/img/analitic.svg" alt="График" className="report__analitic" />
							</div>
						</div>
					</div>

					<button className="button default__button smi__button">
						стать участником
					</button>
				</div>
			</div>
		</section>
	)
}

export default Report;