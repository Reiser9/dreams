import React from 'react';
import {Link} from 'react-router-dom';

const Enter = () => {
	return(
		<section className="section__padding auth">
			<img src="/assets/img/wave.png" alt="Фон" className="faq__img" />

			<div className="container">
				<div className="auth__inner">
					<h2 className="title title__center">
					    <span className="black blue">Вход</span> в систему
					</h2>

					<div className="auth__content">
						<div className="auth__input--inner">
							<input placeholder="Логин" className="input auth__input" />
						</div>

						<div className="auth__input--inner">
							<input placeholder="Пароль" className="input auth__input" />
						</div>

						<div className="auth__input--inner full">
							<input id="aggre" className="auth__checkbox" type="checkbox" />

							<label for="aggre" className="auth__label">
								Я принимаю условия Договор оферты и Пользовательское соглашение
							</label>
						</div>
					</div>

					<div className="auth__links">
						<Link to="/recovery" className="auth__link">
							Забыли пароль?
						</Link>

						<Link to="/register" className="auth__link">
							Еще нет аккаунта?
						</Link>
					</div>

					<button className="button default__button auth__button">
						Войти
					</button>
				</div>
			</div>
		</section>
	)
}

export default Enter;