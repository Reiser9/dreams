import React from 'react';

import './Mission.css';

const Missions = () => {
	return(
		<section className="section__padding mission">
			<img src="/assets/img/dots.png" alt="Фон" className="dots" />

			<div className="container">
				<div className="mission__inner">
					<h2 className="title title__center">
						<span className="black blue">Миссия,</span> видение и ценности
					</h2>
				</div>
			</div>

			<div className="contact__box">
				<div className="container news__contained">
					<img src="/assets/img/mission-img1.png" alt="Картинка" className="news__box--img" />

					<div className="report__box--text--inner">
						<p className="contact__title">
							Наша миссия
						</p>

						<div className="rep__box--text--inner">
							<p className="rep__box--text">
								Развитие компании подразумевает достижение поставленных целей на определенных этапах существования.
							</p>

							<p className="rep__box--text">
								На данный момент наша миссия заключается в:
							</p>

							<div className="mission__point--inner">
								<div className="mission__point">
									<img src="/assets/img/check-blue.svg" alt="Галочка" className="mission__point--check" />

									увеличинии финансовыx возможностей компании
								</div>

								<div className="mission__point">
									<img src="/assets/img/check-blue.svg" alt="Галочка" className="mission__point--check" />

									расширение инвестиционного портфеля
								</div>

								<div className="mission__point">
									<img src="/assets/img/check-blue.svg" alt="Галочка" className="mission__point--check" />

									привлечение к долговременному сотрудничеству инвесторов, которые хотят зарабатывать на фондовых рынках без существенных рисков
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="contact__box">
				<div className="container">
					<img src="/assets/img/mission-img2.png" alt="Картинка" className="smi__box--img" />

					<div className="report__box--text--inner">
						<p className="contact__title">
							Наше видение
						</p>

						<div className="rep__box--text--inner">
							<p className="rep__box--text">
								Развитие компании подразумевает достижение поставленных целей на определенных этапах существования.Любая инвестиционная деятельность сопряжена с рисками, поэтому чтобы достигать стабильного успеха в этой сфере, необходимо минимизировать риски за счет применения эффективных стратегий и комплексного подхода к каждому этапу работы.
							</p>

							<p className="rep__box--text">
								Компания эффективно использует собственные ресурсы, чтобы достигать максимального уровня доходности на фондовых рынках.
							</p>

							<p className="rep__box--text">
								Наше видение будущего компании служит стандартом, исходя из которого мы взвешиваем наши действия и решения.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="value">
				<div className="container">
					<div className="value__inner">
						<p className="value__title">
							Наши ценности
						</p>

						<div className="value__content">
							<div className="value__item">
								<img src="/assets/img/mission1.svg" alt="Иконка" className="value__item--icon" />

								<p className="value__item--title">
									Открытость
								</p>

								<p className="value__item--text">
									Принципы компании прозрачны и понятны сотрудникам, партнёрам, клиентам и рынку. Открытость к мнениям и диалог – основы развития компании.
								</p>
							</div>

							<div className="value__item">
								<img src="/assets/img/mission2.svg" alt="Иконка" className="value__item--icon" />

								<p className="value__item--title">
									Ответственность за результат
								</p>

								<p className="value__item--text">
									Мы стабильно достигаем поставленных целей и выполняем свои обязательства, руководствуясь принципами и нормами профессиональной этики. Мы создаем решения, которые приносят нашим клиентам и обществу реальную пользу. Достижения и конкретные результаты являются основой нашего лидерства.
								</p>
							</div>

							<div className="value__item">
								<img src="/assets/img/mission3.svg" alt="Иконка" className="value__item--icon" />

								<p className="value__item--title">
									Амбициозность
								</p>

								<p className="value__item--text">
									Мы уверены в собственных силах и готовы к преодолению любых препятствий для решения самых сложных задач. Эта уверенность основана на наших возможностях и реальных достижениях, что позволяет нам брать на себя серьезные обязательства, нести ответственность за результат и всегда оставаться победителями.
								</p>
							</div>
						</div>

						<button className="button default__button value__button">
							стать участником
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Missions;