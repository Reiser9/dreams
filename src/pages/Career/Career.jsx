import React from 'react';

import './Career.css';

const Career = () => {
	return(
		<section className="section__padding career">
			<img src="/assets/img/wave.png" alt="Картинка" className="contact__img" />

			<div className="container">
				<div className="career__inner">
					<h2 className="title title__center">
						<span className="black blue">Карьера</span> в компании
					</h2>

					<p className="medium__text career__text">
						Наша компания разработала привлекательную партнерскую программу, в рамках которой Вы сможете зарабатывать дополнительный доход. Программа состоит из 4 уровней. Чем выше уровень, тем более привлекательные условия для наших партнеров. Отдельно хотелось бы упомянуть о представителях, которые получат ряд преимуществ с более высокими комиссионными, а их контактные данные будут размещены в открытом доступе. Более подробно ознакомиться с условиями для представителей Вы можете в соответствующем разделе Представители.
					</p>

					<div className="career__content">
						<div className="career__item">
							<p className="career__item--suptitle">
								Реферальная программа
							</p>

							<p className="medium__text career__item--subtext">
								от вклада реферала
							</p>

							<div className="career__item--padding">
								<div className="career__item--item small">
									<p className="career__item--text">
										1й уровень
									</p>

									<p className="career__item--val small">
										5%
									</p>
								</div>

								<div className="career__item--item small">
									<p className="career__item--text">
										2й уровень
									</p>

									<p className="career__item--val small">
										2%
									</p>
								</div>

								<div className="career__item--item small">
									<p className="career__item--text">
										3й уровень
									</p>

									<p className="career__item--val small">
										1%
									</p>
								</div>

								<div className="career__item--item small">
									<p className="career__item--text">
										4й уровень
									</p>

									<p className="career__item--val small">
										0,7%
									</p>
								</div>
							</div>

							<p className="medium__text career__item--subtext">
								от дохода реферала
							</p>

							<div className="career__item--padding">
								<div className="career__item--item small">
									<p className="career__item--text">
										1й уровень
									</p>

									<p className="career__item--val small">
										0,6%
									</p>
								</div>

								<div className="career__item--item small">
									<p className="career__item--text">
										2й уровень
									</p>

									<p className="career__item--val small">
										0,5%
									</p>
								</div>

								<div className="career__item--item small">
									<p className="career__item--text">
										3й уровень
									</p>

									<p className="career__item--val small">
										0,4%
									</p>
								</div>

								<div className="career__item--item small">
									<p className="career__item--text">
										4й уровень
									</p>

									<p className="career__item--val small">
										0,3%
									</p>
								</div>
							</div>
						</div>

						<div className="career__item">
							<p className="career__item--suptitle">
								Партнерам
							</p>

							<p className="career__item--title margin">
								От вклада
							</p>

							<div className="career__item--padding">
								<div className="career__item--item">
									<p className="career__item--text">
										1й уровень
									</p>

									<p className="career__item--val small">
										7%
									</p>
								</div>

								<div className="career__item--item">
									<p className="career__item--text">
										2й уровень
									</p>

									<p className="career__item--val small">
										3%
									</p>
								</div>

								<div className="career__item--item">
									<p className="career__item--text">
										3й уровень
									</p>

									<p className="career__item--val small">
										1%
									</p>
								</div>
							</div>

							<div className="career__item--small">
								<p className="career__item--title">
									От прибыли
								</p>

								<div className="career__item--box">
									<p className="career__item--text">
										30 уровней в глубину
									</p>

									<p className="career__item--val">
										0,1%
									</p>									
								</div>
							</div>
						</div>
					</div>

					<button className="button default__button career__button">
						присоединиться
					</button>

					<h2 className="title title__center career__title">
						<span className="black blue">Уровни карьерной лестницы</span> и прибыль
					</h2>

					<div className="career__wrapper">
						<img src="/assets/img/career-man.png" alt="Человек" className="career__img--man" />

						<img src="/assets/img/career-val.png" alt="Карьера" className="career__img" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Career;