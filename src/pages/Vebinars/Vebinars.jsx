import React from 'react';

import './Vebinars.css';

import VebinarItem from './VebinarItem/VebinarItem.jsx';

const vebinarsData = [
	{
		title: 'Росстат впервые рассчитал долю нефтегазового сектора в ВВП России',
		status: 'Онлайн',
		date: '01.10.21',
		img: '/assets/img/preview1.jpg'
	},
	{
		title: 'Росстат впервые рассчитал долю нефтегазового сектора в ВВП России',
		status: 'Онлайн',
		date: '01.10.21',
		img: '/assets/img/preview2.jpg'
	},
	{
		title: 'Росстат впервые рассчитал долю нефтегазового сектора в ВВП России',
		status: 'Онлайн',
		date: '01.10.21',
		img: '/assets/img/preview3.jpg'
	},
	{
		title: 'Росстат впервые рассчитал долю нефтегазового сектора в ВВП России',
		status: 'Онлайн',
		date: '01.10.21',
		img: '/assets/img/preview4.jpg'
	},
	{
		title: 'Росстат впервые рассчитал долю нефтегазового сектора в ВВП России',
		status: 'Онлайн',
		date: '01.10.21',
		img: '/assets/img/preview5.jpg'
	},
	{
		title: 'Росстат впервые рассчитал долю нефтегазового сектора в ВВП России',
		status: 'Онлайн',
		date: '01.10.21',
		img: '/assets/img/preview6.jpg'
	}
]

const Vebinars = () => {
	return(
		<section className="section__padding vebinars">
			<img src="/assets/img/wave.png" alt="Фон" className="faq__img" />
			
			<div className="container">
				<div className="vebinars__inner">
					<h2 className="title title__center">
						<span className="black blue">Вебинары</span> и обучающие видео
					</h2>

					<div className="vebinars__content">
						{vebinarsData.map((d, id) => <VebinarItem key={id} data={d} />)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Vebinars;