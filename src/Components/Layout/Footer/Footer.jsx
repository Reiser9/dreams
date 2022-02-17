import React from 'react';
import {Link} from 'react-router-dom';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Footer = () => {
	const pagination = {
	    clickable: true,
	    renderBullet: function (index, className) {
	      return '<span class="slick__dot '+ className +'"></span>';
	    },
	};

	return(
		<>
			<Swiper className="slider" loop modules={[Pagination]} slidesPerView={6} pagination={pagination} breakpoints={{
		        998: {
		        	slidesPerView: 6
		        },
		        768: {
		            slidesPerView: 4
		        },
		        480: {
		            slidesPerView: 3
		        },
		        0: {
		            slidesPerView: 2
		        }
        	}}>
			    <SwiperSlide className="slider__item">
			      	<div className="slider__item">
			      		<img src="/assets/img/slider1.png" alt="binance" />
			      	</div>
			    </SwiperSlide>

			    <SwiperSlide className="slider__item">
			    	<div className="slider__item">
			      		<img src="/assets/img/slider2.png" alt="perfect money" />
			    	</div>
			    </SwiperSlide>

			    <SwiperSlide className="slider__item">
			    	<div className="slider__item">
			      		<img src="/assets/img/slider3.png" alt="visa" />
			    	</div>
			    </SwiperSlide>

			    <SwiperSlide className="slider__item">
			    	<div className="slider__item">
			      		<img src="/assets/img/slider4.png" alt="telegram" />
			    	</div>
			    </SwiperSlide>

			    <SwiperSlide className="slider__item">
			    	<div className="slider__item">
			      		<img src="/assets/img/slider5.png" alt="free kassa" />
			    	</div>
			    </SwiperSlide>

			    <SwiperSlide className="slider__item">
			    	<div className="slider__item">
			      		<img src="/assets/img/slider6.png" alt="coinbase" />
			    	</div>
			    </SwiperSlide>

			    <SwiperSlide className="slider__item">
			    	<div className="slider__item">
			      		<img src="/assets/img/slider3.png" alt="visa" />
			    	</div>
			    </SwiperSlide>
			</Swiper>

			<footer className="footer">
				<div className="container">
					<div className="footer__inner">
						<div className="footer__top">
							<div className="footer__logo--box">
								<Link to="/" className="footer__logo--inner">
									<img src="/assets/img/logo.png" alt="Логотип" className="img100" />
								</Link>

								<p className="footer__title mt2">
									Коротко о компании
								</p>

								<p className="footer__text">
									Компания Limited долгие годы успешно работает в сфере покупки и продаже ценных бумаг на фондовых биржах и вложений в токены криптопроектов. Профессионализм компании позволяет избежать потерь и приумножить вложенные средства.
								</p>
							</div>

							<div className="footer__nav--inner">
								<p className="footer__title">
									Документы
								</p>

								<a href="#" className="footer__nav--link">
									Пользовательское соглашение
								</a>

								<a href="#" className="footer__nav--link">
									Политика конфиденциальности
								</a>

								<a href="#" className="footer__nav--link">
									Договор оферты
								</a>

								<a href="#" className="footer__nav--link">
									Регистрация компании
								</a>
							</div>

							<div className="footer__nav--inner">
								<p className="footer__title">
									Контакты
								</p>

								<p className="footer__nav--text">
									25 Holywell Row, London
								</p>

								<a href="tel:442039338117" className="footer__nav--link">
									+442039338117
								</a>

								<a href="mailto:info@bitex.company" className="footer__nav--link">
									info@bitex.company
								</a>

								<a href="mailto:info@bitex.company" className="footer__nav--link">
									info@bitex.company
								</a>
							</div>
						</div>

						<div className="footer__bottom">
							<div className="footer__social--inner">
								<a href="#" className="footer__social--link">
									<img className="footer__social--icon" alt="Иконка" src="/assets/img/whatsapp.svg" />
								</a>

								<a href="#" className="footer__social--link">
									<img className="footer__social--icon" alt="Иконка" src="/assets/img/telegram.svg" />
								</a>

								<a href="#" className="footer__social--link">
									<img className="footer__social--icon" alt="Иконка" src="/assets/img/youtube.svg" />
								</a>
							</div>

							<div className="footer__wrapper">
								<a href="#" className="footer__link">
									<img src="/assets/img/telegram-blue.svg" alt="Иконка" className="footer__link--icon" />

									Наш телеграмм
								</a>

								<a href="#" className="footer__link">
									<img src="/assets/img/telegram-blue.svg" alt="Иконка" className="footer__link--icon" />

									Новости
								</a>

								<a href="#" className="footer__link">
									<img src="/assets/img/telegram-blue.svg" alt="Иконка" className="footer__link--icon" />

									Контакты
								</a>
							</div>
						</div>

						<p className="footer__copy">
							&copy; 2022 хххххххх. Все права защищены
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer;