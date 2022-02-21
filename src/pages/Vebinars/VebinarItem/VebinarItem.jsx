import React from 'react';

const VebinarItem = ({data}) => {
	const {title, status, date, img} = data;

	return(
		<div className="vebinars__item">
			<div className="vebinars__item--img--inner">
				<img src={img} alt="Превью" className="vebinars__item--img" />
			</div>

			<div className="vebinars__item--text--inner">
				<p className="text__name">
					{title}
				</p>

				<p className="text__status vebinars__text--status">
					{status}
				</p>

				<p className="text__date vebinars__text--date">
					<img src="/assets/img/date.svg" alt="Календарь" className="text__date--img" />

					{date}
				</p>

				<div className="vebinars__item--button--inner">
					<button className="button vebinars__item--button">
						перейти в комнату
					</button>

					<div className="vebinars__social--inner">
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
		</div>
	)
}

export default VebinarItem;