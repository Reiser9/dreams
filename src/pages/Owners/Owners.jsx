import React from 'react';

import OwnerItem from './OwnerItem/OwnerItem.jsx';

const ownerData = [
	{
		name: 'JOHN MCCOY',
		years: '43',
		text: 'В прошлом Джон Мак-Кой — финансовый аналитик международных компаний, брокер, исполняющий обязанности начальника направления трейдерских операций и директор департамента инвестиций. Контролировал операции с ценными бумагами частных компаний и государственных предприятий. Имеет юридическое образование, обеспечивал лизинговые, кредитные, ипотечные отношения и разрабатывал внутренние нормативные акты компаний. Осуществлял полное юридическое сопровождение финансовой деятельности предприятий и представительств их дочерних компаний в рамках территориального и международного законодательства.В настоящий момент является директором компании Bitstock Limited.',
		img: '/assets/img/owner1.png',
		mail: 'info@mail.com',
		support: 'https://google.com'
	},
	{
		name: 'BALDRIC OSBORNE',
		years: '43',
		text: 'В прошлом Джон Мак-Кой — финансовый аналитик международных компаний, брокер, исполняющий обязанности начальника направления трейдерских операций и директор департамента инвестиций. Контролировал операции с ценными бумагами частных компаний и государственных предприятий. Имеет юридическое образование, обеспечивал лизинговые, кредитные, ипотечные отношения и разрабатывал внутренние нормативные акты компаний. Осуществлял полное юридическое сопровождение финансовой деятельности предприятий и представительств их дочерних компаний в рамках территориального и международного законодательства.В настоящий момент является директором компании Bitstock Limited.',
		img: '/assets/img/owner2.png',
		mail: 'info@mail.com',
		support: 'https://google.com'
	},
	{
		name: 'RONALD TURNER',
		years: '43',
		text: 'В прошлом Джон Мак-Кой — финансовый аналитик международных компаний, брокер, исполняющий обязанности начальника направления трейдерских операций и директор департамента инвестиций. Контролировал операции с ценными бумагами частных компаний и государственных предприятий. Имеет юридическое образование, обеспечивал лизинговые, кредитные, ипотечные отношения и разрабатывал внутренние нормативные акты компаний. Осуществлял полное юридическое сопровождение финансовой деятельности предприятий и представительств их дочерних компаний в рамках территориального и международного законодательства.В настоящий момент является директором компании Bitstock Limited.',
		img: '/assets/img/owner3.png',
		mail: 'info@mail.com',
		support: 'https://google.com'
	}
]

const Owners = () => {
	return(
		<>
			<section className="section__padding owners">
				<img src="/assets/img/dots.png" alt="Фон" className="dots" />

				<div className="container">
					<div className="owners__inner">
						<h2 className="title title__center">
							<span className="black blue">Основатели</span> компании
						</h2>

						<div className="owners__content">
							{ownerData.map((d, id) => <OwnerItem key={id} data={d} />)}
						</div>
					</div>
				</div>
			</section>

			<section className="team">
				<div className="container">
					<div className="team__inner">
						<h2 className="title title__center">
							<span className="black white">Сотрудники</span> компании
						</h2>

						<div className="team__content">
							<div className="team__item">
								<img src="/assets/img/team1.png" alt="Картинка" className="team__item--img" />

								<div className="team__item--wrapper">
									<p className="text__name">
										BALDRIC OSBORNE
									</p>

									<p className="owners__item--years">
										43 years
									</p>

									<p className="team__item--role">
										Начальник отдела ИТ
									</p>
								</div>

								<p className="owners__item--text">
									Чарльз Монтгомери имеет большой опыт работы на фондовых биржах. Его основная задача — это обработка всей информации, которая поступает от сотрудников аналитического отдела компании. Чарльз Монтгомери непосредственно принимает решение о покупке и продаже акций той или иной компании.
								</p>
							</div>

							<div className="team__item">
								<img src="/assets/img/team2.png" alt="Картинка" className="team__item--img" />

								<div className="team__item--wrapper">
									<p className="text__name">
										BALDRIC OSBORNE
									</p>

									<p className="owners__item--years">
										43 years
									</p>

									<p className="team__item--role">
										Начальник отдела ИТ
									</p>
								</div>

								<p className="owners__item--text">
									Чарльз Монтгомери имеет большой опыт работы на фондовых биржах. Его основная задача — это обработка всей информации, которая поступает от сотрудников аналитического отдела компании. Чарльз Монтгомери непосредственно принимает решение о покупке и продаже акций той или иной компании.
								</p>
							</div>

							<div className="team__item">
								<img src="/assets/img/team3.png" alt="Картинка" className="team__item--img" />

								<div className="team__item--wrapper">
									<p className="text__name">
										BALDRIC OSBORNE
									</p>

									<p className="owners__item--years">
										43 years
									</p>

									<p className="team__item--role">
										Начальник отдела ИТ
									</p>
								</div>

								<p className="owners__item--text">
									Чарльз Монтгомери имеет большой опыт работы на фондовых биржах. Его основная задача — это обработка всей информации, которая поступает от сотрудников аналитического отдела компании. Чарльз Монтгомери непосредственно принимает решение о покупке и продаже акций той или иной компании.
								</p>
							</div>

							<div className="team__item">
								<img src="/assets/img/team4.png" alt="Картинка" className="team__item--img" />

								<div className="team__item--wrapper">
									<p className="text__name">
										BALDRIC OSBORNE
									</p>

									<p className="owners__item--years">
										43 years
									</p>

									<p className="team__item--role">
										Начальник отдела ИТ
									</p>
								</div>

								<p className="owners__item--text">
									Чарльз Монтгомери имеет большой опыт работы на фондовых биржах. Его основная задача — это обработка всей информации, которая поступает от сотрудников аналитического отдела компании. Чарльз Монтгомери непосредственно принимает решение о покупке и продаже акций той или иной компании.
								</p>
							</div>

							<div className="team__item">
								<img src="/assets/img/team5.png" alt="Картинка" className="team__item--img" />

								<div className="team__item--wrapper">
									<p className="text__name">
										BALDRIC OSBORNE
									</p>

									<p className="owners__item--years">
										43 years
									</p>

									<p className="team__item--role">
										Начальник отдела ИТ
									</p>
								</div>

								<p className="owners__item--text">
									Чарльз Монтгомери имеет большой опыт работы на фондовых биржах. Его основная задача — это обработка всей информации, которая поступает от сотрудников аналитического отдела компании. Чарльз Монтгомери непосредственно принимает решение о покупке и продаже акций той или иной компании.
								</p>
							</div>

							<div className="team__item">
								<img src="/assets/img/team6.png" alt="Картинка" className="team__item--img" />

								<div className="team__item--wrapper">
									<p className="text__name">
										BALDRIC OSBORNE
									</p>

									<p className="owners__item--years">
										43 years
									</p>

									<p className="team__item--role">
										Начальник отдела ИТ
									</p>
								</div>

								<p className="owners__item--text">
									Чарльз Монтгомери имеет большой опыт работы на фондовых биржах. Его основная задача — это обработка всей информации, которая поступает от сотрудников аналитического отдела компании. Чарльз Монтгомери непосредственно принимает решение о покупке и продаже акций той или иной компании.
								</p>
							</div>
						</div>

						<button className="button default__button team__button">
							стать участником
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default Owners;