import React from 'react';

const Register = () => {
	return(
		<section className="section__padding auth">
			<img src="/assets/img/wave.png" alt="Фон" className="faq__img" />

			<div className="container">
				<div className="auth__inner">
					<h2 className="title title__center">
					    <span className="black blue">Регистрация</span> в системе
					</h2>

					<div className="auth__content">
						<div className="auth__input--inner">
							<input placeholder="Логин" className="input auth__input" />
						</div>

						<div className="auth__input--inner">
							<input placeholder="Email" className="input auth__input" />
						</div>

						<div className="auth__input--inner">
							<input id="save__account" className="auth__checkbox" type="checkbox" />

							<label for="save__account" className="auth__label">
								Безопасный аккаунт
							</label>
						</div>

						<div className="auth__input--inner">
							<input placeholder="Whatsapp/Telegram" className="input auth__input" />
						</div>

						<div className="auth__input--inner">
							<input placeholder="Пароль" className="input auth__input" />
						</div>

						<div className="auth__input--inner">
							<input placeholder="Повторить пароль" className="input auth__input" />
						</div>

						<div className="auth__input--inner">
							<input placeholder="ФИО" className="input auth__input" />
						</div>

						<div className="auth__input--inner">
							<input placeholder="Спонсор" className="input auth__input" />
						</div>
					</div>

					<button className="button default__button auth__button">
						Зарегистрироваться
					</button>
				</div>
			</div>
		</section>
	)
}

export default Register;