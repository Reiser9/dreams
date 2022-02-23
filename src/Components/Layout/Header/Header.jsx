import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import './Header.css';

const Header = () => {
	React.useEffect(() => {
		const close = () => {
			$("body").removeClass("scroll");
			$(".mobile__menu").removeClass("active");
		}

		$(".menu").on("click", function(){
			$("body").addClass("scroll");
			$(".mobile__menu").addClass("active");
		});

		$(".close").on("click", function(){
			close();
		});

		$(window).resize(function(){
			if($(window).width() > 768){
				close();
			}
		});
	}, []);

	return(
		<>
			<div className="mobile__menu">
				<img src="/assets/img/close.svg" alt="Закрыть" className="close" />

				<div className="header__nav">
					<Link to="/about" className="header__nav--link">
						О компании
					</Link>

					<Link to="/marketing" className="header__nav--link">
						Маркетинг
					</Link>

					<Link to="/faq" className="header__nav--link">
						Вопросы - ответы
					</Link>

					<Link to="/start" className="header__nav--link">
						С чего начать
					</Link>

					<Link to="/adv" className="header__nav--link">
						Рекламные материалы
					</Link>
				</div>

				<div className="header__social--inner mobile">
					<a href="https://web.telegram.org" target="_Blanc" className="header__social--link">
						<img src="/assets/img/telegram-blue.svg" alt="Иконка" className="footer__link--icon" />

						Наш телеграмм
					</a>

					<Link to="/news" className="header__social--link">
						<img src="/assets/img/telegram-blue.svg" alt="Иконка" className="footer__link--icon" />

						Новости
					</Link>

					<Link to="/contact" className="header__social--link">
						<img src="/assets/img/telegram-blue.svg" alt="Иконка" className="footer__link--icon" />

						Контакты
					</Link>

					<a href="mailto:info@mail.com" className="header__social--link">
						<img src="/assets/img/mail.svg" alt="Иконка" className="footer__link--icon" />

						info@mail.com
					</a>
				</div>
			</div>

			<header className="header">
				<div className="header__img--inner"></div>

				<img src="/assets/img/circle.png" alt="Круг" className="header__circle" />

				<div className="container">
					<div className="header__inner">
						<div className="header__top">
							<div className="header__wrapper">
								<Link to="/" className="footer__logo--inner">
									<img src="/assets/img/logo.png" alt="Логотип" className="img100" />
								</Link>

								<div className="header__social--inner">
									<a href="https://web.telegram.org" target="_Blanc" className="header__social--link">
										<img src="/assets/img/telegram-blue.svg" alt="Иконка" className="footer__link--icon" />

										Наш телеграмм
									</a>

									<Link to="/news" className="header__social--link">
										<img src="/assets/img/telegram-blue.svg" alt="Иконка" className="footer__link--icon" />

										Новости
									</Link>

									<Link to="/contact" className="header__social--link">
										<img src="/assets/img/telegram-blue.svg" alt="Иконка" className="footer__link--icon" />

										Контакты
									</Link>

									<a href="mailto:info@mail.com" className="header__social--link">
										<img src="/assets/img/mail.svg" alt="Иконка" className="footer__link--icon" />

										info@mail.com
									</a>
								</div>
							</div>

							<div className="header__wrapper">
								<Link to="/register">
									<img src="/assets/img/cabinet.svg" alt="Кабинет" className="cabinet" />
								</Link>

								<div className="header__lang--inner">
									<img src="/assets/img/de.svg" alt="Германия" className="header__lang--item" />
									<img src="/assets/img/ru.svg" alt="Германия" className="header__lang--item" />
								</div>

								<img src="/assets/img/menu.svg" alt="Меню" className="menu" />
							</div>
						</div>

						<div className="header__bottom">
							<div className="header__nav">
								<Link to="/about" className="header__nav--link">
									О компании
								</Link>

								<Link to="/marketing" className="header__nav--link">
									Маркетинг
								</Link>

								<Link to="/faq" className="header__nav--link">
									Вопросы - ответы
								</Link>

								<Link to="/start" className="header__nav--link">
									С чего начать
								</Link>

								<Link to="/adv" className="header__nav--link">
									Рекламные материалы
								</Link>
							</div>

							<div className="header__auth">
								<Link to="/enter" className="header__auth--button">
									Войти
								</Link>

								<Link to="/register" className="header__auth--button">
									Регистрация
								</Link>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header;