import React from 'react';

const OwnerItem = ({data}) => {
	const {name, years, text, support, mail, img} = data;

	return(
		<div className="owner__item--wrapper">
			<img src={img} alt="Картинка" className="owner__item--img" />
			
			<div className="owners__item">
				<div className="owners__item--wrapper">
					<p className="text__name">
						{name}
					</p>

					<div className="owners__item--social--inner">
						<a href={support} className="owners__item--social">
							<img src="/assets/img/telegram-blue.svg" alt="Картинка" className="owners__item--social--icon" />

							Support
						</a>

						<a href={mail} className="owners__item--social">
							<img src="/assets/img/mail.svg" alt="Картинка" className="owners__item--social--icon" />

							{mail}
						</a>
					</div>
				</div>

				<p className="owners__item--years">
					{years} years
				</p>

				<p className="owners__item--text">
					{text}
				</p>
			</div>
		</div>
	)
}

export default OwnerItem;