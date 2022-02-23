import React from 'react';

const Recovery = () => {
	return(
		<section className="section__padding auth">
			<img src="/assets/img/wave.png" alt="Фон" className="faq__img" />

			<div className="container">
				<div className="auth__inner">
					<h2 className="title title__center">
					    <span className="black blue">Восстановление</span> доступа
					</h2>

					<div className="auth__content">
						<div className="auth__input--inner full">
							<input placeholder="Логин" className="input auth__input" />
						</div>
					</div>

					<button className="button default__button auth__button">
						Восстановить
					</button>
				</div>
			</div>
		</section>
	)
}

export default Recovery;