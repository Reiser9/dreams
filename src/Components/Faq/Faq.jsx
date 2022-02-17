import React from 'react';
import $ from 'jquery';

import Header from '../Layout/Header/Header.jsx';
import Footer from '../Layout/Footer/Footer.jsx';

const faqData = [
	{
		question: 'Как зарегистрироваться на сайте bitex.company?',
		answer: 'Регистрация займет у вас несколько минут. Все, что Вам необходимо это заполнить все поля в регистрационной форме.'
	},
	{
		question: 'Как зарегистрироваться на сайте bitex.company?',
		answer: 'Регистрация займет у вас несколько минут. Все, что Вам необходимо это заполнить все поля в регистрационной форме.'
	},
	{
		question: 'Как зарегистрироваться на сайте bitex.company?',
		answer: 'Регистрация займет у вас несколько минут. Все, что Вам необходимо это заполнить все поля в регистрационной форме.'
	},
	{
		question: 'Как зарегистрироваться на сайте bitex.company?',
		answer: 'Регистрация займет у вас несколько минут. Все, что Вам необходимо это заполнить все поля в регистрационной форме.'
	},
	{
		question: 'Есть ли гарантия конфиденциальности личных данных вкладчика?',
		answer: 'Регистрация займет у вас несколько минут. Все, что Вам необходимо это заполнить все поля в регистрационной форме.'
	},
	{
		question: 'Как зарегистрироваться на сайте bitex.company?',
		answer: 'Регистрация займет у вас несколько минут. Все, что Вам необходимо это заполнить все поля в регистрационной форме.'
	}
]

const Faq = () => {
	React.useEffect(() => {
		$(".faq__item--left").on("click", function(){
			$(this).children(".faq__item--arrow").toggleClass("disable");
			$(this).siblings(".faq__item--content").children(".faq__item--answer").slideToggle(200);
		});

		$(".faq__tab").on("click", function(){
			$(".faq__tab").removeClass("active");
			$(this).addClass("active");
			$(".faq__content").removeClass("active");
			$(".faq__content[data-tab="+$(this).attr("data-tab")+"]").addClass("active");
		});
	}, []);

	return(
		<>
			<Header />

			<section className="faq">
				<img src="/assets/img/wave.png" alt="Фон" className="faq__img" />

				<div className="container">
					<div className="faq__inner">
						<h2 className="title title__center">
							<span className="black blue">Вопросы</span> и ответы
						</h2>

						<div className="faq__tabs">
							<button className="button faq__tab" data-tab="account">
								Аккаунт
							</button>

							<button className="button faq__tab active" data-tab="invest">
								Инвестиции
							</button>

							<button className="button faq__tab" data-tab="given">
								Выплата средств
							</button>

							<button className="button faq__tab" data-tab="program">
								Партнерская программа
							</button>
						</div>

						<div className="faq__content" data-tab="account">
							Аккаунт
						</div>

						<div className="faq__content active" data-tab="invest">
							{faqData.map((d, id) => <div key={id} className="faq__item">
								<div className="faq__item--left">
									<img src="/assets/img/faq-arrow.svg" alt="Стрелка" className="faq__item--arrow disable" />
								</div>

								<div className="faq__item--content">
									<p className="faq__item--question">
										{d.question}
									</p>

									<p className="faq__item--answer">
										{d.answer}
									</p>
								</div>
							</div>)}
						</div>

						<div className="faq__content" data-tab="given">
							Выплата средств
						</div>

						<div className="faq__content" data-tab="program">
							Партнерская программа
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default Faq;