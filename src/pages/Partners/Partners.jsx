import React from 'react';

import './Partners.css';

import PartnersItem from './PartnersItem/PartnersItem.jsx';

const partnersData = [
	{
		name: 'Иван Иванов',
		status: 'Онлайн',
		date: '01.10.21',
		money: '123 000',
		img: '/assets/img/partners1.jpg'
	},
	{
		name: 'Иван Иванов',
		status: 'Онлайн',
		date: '01.10.21',
		money: '123 000',
		img: '/assets/img/partners2.jpg'
	},
	{
		name: 'Иван Иванов',
		status: 'Онлайн',
		date: '01.10.21',
		money: '123 000',
		img: '/assets/img/partners3.jpg'
	},
	{
		name: 'Иван Иванов',
		status: 'Онлайн',
		date: '01.10.21',
		money: '123 000',
		img: '/assets/img/partners4.jpg'
	},
	{
		name: 'Иван Иванов',
		status: 'Онлайн',
		date: '01.10.21',
		money: '123 000',
		img: '/assets/img/partners5.jpg'
	},
	{
		name: 'Иван Иванов',
		status: 'Онлайн',
		date: '01.10.21',
		money: '123 000',
		img: '/assets/img/partners6.jpg'
	},
	{
		name: 'Иван Иванов',
		status: 'Онлайн',
		date: '01.10.21',
		money: '123 000',
		img: '/assets/img/partners7.jpg'
	},
	{
		name: 'Иван Иванов',
		status: 'Онлайн',
		date: '01.10.21',
		money: '123 000',
		img: '/assets/img/partners8.jpg'
	},
]

const Partners = () => {
	return(
		<section className="section__padding partners">
			<img src="/assets/img/wave.png" alt="Фон" className="faq__img" />

			<div className="container">
				<div className="partners__inner">
					<h2 className="title title__center">
						<span className="black blue">Представители</span> и партнеры
					</h2>

					<div className="partners__content">
						{partnersData.map((d, id) => <PartnersItem key={id} data={d} />)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Partners;