import React from 'react';

const Notify = () => {
	return(
		<>
			<div className="admin__content--content flex w100">
				<div className="w100 flex">
					<h3 className="admin__title--inner w100">
						<img className="admin__title--icon" src="/assets/img/notify-red.svg" alt="Иконка" />

						Уведомления
					</h3>

					<div className="content__margin flex w100">
						<div className="notify__tab--inner flexw">
							<button className="button default__button disable mall5">
								Важные
							</button>

							<button className="button default__button mall5">
								Уведомления
							</button>
						</div>
					</div>

					<div className="content__margin flex w100">
						<div className="notify__item w100">
							<div className="notify__item--img--inner flexs">
								<img className="img" src="/assets/img/ava.png" alt="Аватар" />
							</div>

							<div className="notify__item--content flex w100">
								<div className="flexbet w100 flexw">
									<div className="notify__name--inner flexdef mall5">
										<img src="/assets/img/save.svg" alt="Картинка" />

										Александр Петров
									</div>

									<p className="notify__date mall5">
										13/12/2020 16:37
									</p>
								</div>

								<div className="notify__box flex w100">
									<p className="notify__title">
										Привет, как сам?
									</p>

									<p className="notify__text">
										Привет, как сам?
									</p>

									<div className="flexbet w100 notify__wrapper flexw">
										<div className="notify__type mt1">
											Коммерция
										</div>

										<div className="flexdef mt1 flexw">
											<p className="notify__check mall5">
												Посмотрели:
											</p>

											<div className="notify__check--inner mall5">
												<img src="/assets/img/ava.png" className="notify__check--img" alt="Аватарка" />
												<img src="/assets/img/ava.png" className="notify__check--img" alt="Аватарка" />
												<img src="/assets/img/ava.png" className="notify__check--img" alt="Аватарка" />
												<img src="/assets/img/ava.png" className="notify__check--img" alt="Аватарка" />
											</div>

											<img className="notify__icon mall5" src="/assets/img/attach.svg" alt="Картинка" />
											<img className="notify__icon mall5" src="/assets/img/filter-grey.svg" alt="Картинка" />
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="notify__item w100">
							<div className="notify__item--img--inner flexs">
								<img className="img" src="/assets/img/ava.png" alt="Аватар" />
							</div>

							<div className="notify__item--content flex w100">
								<div className="flexbet w100 flexw">
									<div className="notify__name--inner flexdef mall5">
										<img src="/assets/img/save.svg" alt="Картинка" />

										Александр Петров
									</div>

									<p className="notify__date mall5">
										13/12/2020 16:37
									</p>
								</div>

								<div className="notify__box flex w100">
									<p className="notify__title">
										Привет, как сам?
									</p>

									<p className="notify__text">
										Привет, как сам?
									</p>

									<div className="flexbet w100 notify__wrapper flexw">
										<div className="notify__type mt1">
											Коммерция
										</div>

										<div className="flexdef mt1 flexw">
											<p className="notify__check mall5">
												Посмотрели:
											</p>

											<div className="notify__check--inner mall5">
												<img src="/assets/img/ava.png" className="notify__check--img" alt="Аватарка" />
												<img src="/assets/img/ava.png" className="notify__check--img" alt="Аватарка" />
												<img src="/assets/img/ava.png" className="notify__check--img" alt="Аватарка" />
												<img src="/assets/img/ava.png" className="notify__check--img" alt="Аватарка" />
											</div>

											<img className="notify__icon mall5" src="/assets/img/attach.svg" alt="Картинка" />
											<img className="notify__icon mall5" src="/assets/img/filter-grey.svg" alt="Картинка" />
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="notify__item w100">
							<div className="notify__item--img--inner flexs">
								<img className="img" src="/assets/img/ava.png" alt="Аватар" />
							</div>

							<div className="notify__item--content flex w100">
								<div className="flexbet w100 flexw">
									<div className="notify__name--inner flexdef mall5">
										<img src="/assets/img/save.svg" alt="Картинка" />

										Александр Петров
									</div>

									<p className="notify__date mall5">
										13/12/2020 16:37
									</p>
								</div>

								<div className="notify__box flex w100">
									<p className="notify__title">
										Привет, как сам?
									</p>

									<p className="notify__text">
										Привет, как сам?
									</p>

									<div className="flexbet w100 notify__wrapper flexw">
										<div className="notify__type mt1">
											Коммерция
										</div>

										<div className="flexdef mt1 flexw">
											<p className="notify__check mall5">
												Посмотрели:
											</p>

											<div className="notify__check--inner mall5">
												<img src="/assets/img/ava.png" className="notify__check--img" alt="Аватарка" />
												<img src="/assets/img/ava.png" className="notify__check--img" alt="Аватарка" />
												<img src="/assets/img/ava.png" className="notify__check--img" alt="Аватарка" />
												<img src="/assets/img/ava.png" className="notify__check--img" alt="Аватарка" />
											</div>

											<img className="notify__icon mall5" src="/assets/img/attach.svg" alt="Картинка" />
											<img className="notify__icon mall5" src="/assets/img/filter-grey.svg" alt="Картинка" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="admin__content--right flex w100">
				<div className="w100 flex">
					<h3 className="admin__title--inner w100">
						<img className="admin__title--icon" src="/assets/img/gift-red.svg" alt="Иконка" />

						Новости
					</h3>

					<div className="flex w100 content__margin">
						<div className="admin__news--item flex w100">
							<img className="admin__news--item--img" src="/assets/img/new-img.png" alt="Картинка новости" />

							<div className="admin__news--text--inner flex w100">
								<p className="admin__news--text--title">
									Акция от ОЛИМПБЕТ Лига чемпионов ждет тебя!
								</p>

								<p className="admin__news--text--text">
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
								</p>
							</div>
						</div>

						<div className="admin__news--item flex w100">
							<img className="admin__news--item--img" src="/assets/img/new-img.png" alt="Картинка новости" />

							<div className="admin__news--text--inner flex w100">
								<p className="admin__news--text--title">
									Акция от ОЛИМПБЕТ Лига чемпионов ждет тебя!
								</p>

								<p className="admin__news--text--text">
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Notify;