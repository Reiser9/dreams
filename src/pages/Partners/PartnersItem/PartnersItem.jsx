import React from 'react';

const PartnersItem = ({data}) => {
	const {name, status, date, money, img} = data;

	return(
		<div className="partners__item">
			<div className="partners__item--img--inner">
				<img src={img} alt="Партнер" className="partners__item--img" />
			</div>

			<div className="partners__item--text--inner">
				<p className="text__name">
					{name}
				</p>

				<p className="text__status partners__text--status">
					{status}
				</p>

				<p className="text__date partners__text--date">
					<img src="/assets/img/date.svg" alt="Календарь" className="text__date--img" />

					{date}
				</p>

				<p className="partners__text--text">
					Доход в компании:
				</p>

				<p className="partners__text--money">
					{money} $
				</p>

				<div className="partners__social--inner">
					<a href="https://google.com" className="partners__social--link">
						<img src="/assets/img/whatsapp.svg" alt="Whatsapp" className="w100" />
					</a>

					<a href="https://google.com" className="partners__social--link">
						<img src="/assets/img/telegram.svg" alt="Telegram" className="w100" />
					</a>

					<a href="https://google.com" className="partners__social--link">
						<img src="/assets/img/youtube.svg" alt="Youtube" className="w100" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default PartnersItem;