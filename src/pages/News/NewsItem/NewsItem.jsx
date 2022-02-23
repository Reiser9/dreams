import React from 'react';

const NewsItem = ({data}) => {
	const {title, text, date, img} = data;
	
	return(
		<div className="news__item">
			<img src={img} alt="Картинка новости" className="news__item--img" />

			<div className="news__item--text--inner">
				<p className="text__name">
					{title}
				</p>

				<p className="medium__text news__text">
					{text}
				</p>

				<div className="news__wrapper">
					<p className="text__date">
						<img src="/assets/img/date.svg" alt="Календарь" className="text__date--img" />

						{date}
					</p>

					<div className="news__social--inner">
						<a href="https://google.com" className="news__social--link" target="_Blanc">
							<img className="news__social--icon" src="/assets/img/facebook.svg" alt="Соц сеть" />
						</a>

						<a href="https://google.com" className="news__social--link" target="_Blanc">
							<img className="news__social--icon" src="/assets/img/google.svg" alt="Соц сеть" />
						</a>

						<a href="https://google.com" className="news__social--link" target="_Blanc">
							<img className="news__social--icon" src="/assets/img/playmarket.svg" alt="Соц сеть" />
						</a>

						<a href="https://google.com" className="news__social--link" target="_Blanc">
							<img className="news__social--icon" src="/assets/img/insta.svg" alt="Соц сеть" />
						</a>

						<a href="https://google.com" className="news__social--link" target="_Blanc">
							<img className="news__social--icon" src="/assets/img/twitter.svg" alt="Соц сеть" />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsItem;