import React from 'react';

import NewsItem from './NewsItem/NewsItem.jsx';

const newsData = [
	{
		title: 'Росстат впервые рассчитал долю нефтегазового сектора в ВВП России',
		text: 'Наши инвесторы в рамках сотрудничества с компанией получают надежного партнера, который будет приносить стабильную прибыль.Наши инвесторы в рамках сотрудничества с компанией получают надежного партнера, который будет приносить стабильную прибыль.',
		date: '01.10.21',
		img: '/assets/img/news1.png'
	},
	{
		title: 'Росстат впервые рассчитал долю нефтегазового сектора в ВВП России',
		text: 'Наши инвесторы в рамках сотрудничества с компанией получают надежного партнера, который будет приносить стабильную прибыль.Наши инвесторы в рамках сотрудничества с компанией получают надежного партнера, который будет приносить стабильную прибыль.',
		date: '01.10.21',
		img: '/assets/img/news2.png'
	},
	{
		title: 'Росстат впервые рассчитал долю нефтегазового сектора в ВВП России',
		text: 'Наши инвесторы в рамках сотрудничества с компанией получают надежного партнера, который будет приносить стабильную прибыль.Наши инвесторы в рамках сотрудничества с компанией получают надежного партнера, который будет приносить стабильную прибыль.',
		date: '01.10.21',
		img: '/assets/img/news3.png'
	},
	{
		title: 'Росстат впервые рассчитал долю нефтегазового сектора в ВВП России',
		text: 'Наши инвесторы в рамках сотрудничества с компанией получают надежного партнера, который будет приносить стабильную прибыль.Наши инвесторы в рамках сотрудничества с компанией получают надежного партнера, который будет приносить стабильную прибыль.',
		date: '01.10.21',
		img: '/assets/img/news4.png'
	},
]

const News = () => {
	return(
		<section className="section__padding news">
			<div className="container">
				<div className="news__inner">
					<h2 className="title title__center">
						<span className="black blue">Новости</span> мира финансов
					</h2>
				</div>
			</div>

			<div className="news__box">
				<div className="container news__contained">
					<img src="/assets/img/news-img.png" alt="Картинка" className="news__box--img" />

					<div className="news__box--text--inner">
						<p className="news__box--text--title">
							Росстат впервые рассчитал долю нефтегазового сектора в ВВП России
						</p>

						<p className="news__box--text--text">
							Любая инвестиционная деятельность сопряжена с рисками, поэтому чтобы достигать стабильного успеха в этой сфере, необходимо минимизировать риски за счет применения эффективных стратегий и комплексного подхода к каждому этапу работы.
						</p>

						<p className="news__box--text--text">
							Компания WayUP эффективно использует собственные ресурсы, чтобы достигать максимального уровня доходности на фондовых рынках.
						</p>

						<div className="news__wrapper">
							<p className="text__date white">
								<img src="/assets/img/date-blue.svg" alt="Календарь" className="text__date--img" />

								01.10.21
							</p>

							<div className="news__social--inner">
								<a href="https://google.com" className="news__social--link" target="_Blanc">
									<img className="news__social--icon" src="/assets/img/facebook-white.svg" alt="Соц сеть" />
								</a>

								<a href="https://google.com" className="news__social--link" target="_Blanc">
									<img className="news__social--icon" src="/assets/img/google-white.svg" alt="Соц сеть" />
								</a>

								<a href="https://google.com" className="news__social--link" target="_Blanc">
									<img className="news__social--icon" src="/assets/img/playmarket-white.svg" alt="Соц сеть" />
								</a>

								<a href="https://google.com" className="news__social--link" target="_Blanc">
									<img className="news__social--icon" src="/assets/img/insta-white.svg" alt="Соц сеть" />
								</a>

								<a href="https://google.com" className="news__social--link" target="_Blanc">
									<img className="news__social--icon" src="/assets/img/twitter-white.svg" alt="Соц сеть" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="news__inner">
					<div className="news__content">
						{newsData.map((d, id) => <NewsItem key={id} data={d} />)}
					</div>

					<button className="button default__button news__button">
						смотреть еще
					</button>
				</div>
			</div>
		</section>
	)
}

export default News;