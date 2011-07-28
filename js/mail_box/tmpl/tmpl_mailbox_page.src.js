
rr.styles('tmpl:maibox'
	, '.b-page_mailbox-pager {margin-top:20px;}'
	, '.b-mbox_table {padding-top: 1px;overflow: hidden;z-index:0;}'
	//, '.b-page_mailbox-menu {margin-left: 3px;}'

	, '.b-page_mailbox-bounce_row {height: 28px;line-height: 26px;position: relative;}'
	, '.b-page_mailbox-bounce_title {color: #666666;left: 0;position: absolute;}'
	, '.b-page_mailbox-bounce_book {background-color: #E2E2E2;vertical-align: top;width: 80px;}'
	, '.b-page_mailbox-bounce_box {margin-left: 85px;}'
	, '.b-page_mailbox-bounce_input {-moz-box-sizing: border-box;box-sizing: border-box; height: 24px;line-height: 1.2 !important;vertical-align: top;width: 100%;}'
	, '.b-page_mailbox-bounce_tools {margin-top: 17px;padding-left: 85px;}'
	, '.b-page_mailbox-bounce_cansel {margin-left: 1em;vertical-align: middle;}'

	, '.b-page_mailbox-clear_folder_wrap {line-height: 24px;}'
	, '.b-page_mailbox-clear_folder_go {margin-left: 1em;}'
	, '.b-page_mailbox-clear_folder_cansel {margin-left: 1em;}'

	, '.b-page_mailbox-button_filter {color: #333 !important;padding: 2px 33px 2px 5px;cursor: pointer;background-position: 100% 50%;border-radius: 2px 2px 2px 2px;}'
	, '.b-page_mailbox-button_filter:hover {background-color: #DDDDDD;}'

	, '.b-page_mailbox-more {margin: 15px 0;}'
	, '.b-page_mailbox-more_link {cursor: pointer;background-color: #FFF;border: 1px solid #DDD;color: #000000 !important;display: block;line-height: 30px;margin: 0 auto;text-align: center;width: 300px;}'
	, '.b-page_mailbox-more_link:hover {background-color: #EEE;border-color: #DDD;}'
	, '.b-page_mailbox-more_text {}'

);


tmpl.mailbox_sidebar = function (_, pr) {
	var ns = this;

	ns.node = _('div'
		, "eeee"
	)
};



tmpl.mailbox_page = function (_, pr) {
	var ns = this;


	ns.page = _('ui:page'
		, {
			extend: ns
			//, pid: 'mailbox'

			, title: "Календарь"

			, css: 'b-page_mailbox'
			, css_capion: 'b-page_mailbox-capion'

			, head: 'bottom'
			, head_name: "Папка «Входящие»"


			, head_right: [

				, _('ui:uMenu'
					, {
						css: 'b-page_mailbox-menu_action',
						position: 'right', //'right/left',
						open: 'click', //auto|click|hover
						//debug: true,

						node: _('a.b-page_mailbox-button_filter no_underline i-img--arrow_down'
							, _('span.b-page_mailbox-filter_textwrap'
								, "Сегодня 25 июля"
							)
						)
					}

					, _('div'
						, {
							style: 'width:250px;height:300px;'
						}

					)
				)

			]
		}

		, _('ui:page_head'
			, _('tmpl:uToolbar'
				, {
					css: 'b-page_mailbox-top_tools',


					right: [
						, _('ui:uInput', {
							//help: "Поиск в папке",
							//first: 'left',
							group: 'left'
						})

						, _('ui:uButton', {
							css: '',
							css_icon: 'i-img--search',
							//icon: 'only',

							first: 'right',
							group: 'right',
							title: "Найти",
							text: "Найти"
						})

					/*
					, _('ui:uButton', {
					css: '',
					icon: 'only',
					css_icon: 'i-img--refresh',
					indent: 'left',
					first: 'right',
					title: "Обновить данные",
					text: "Обновить"
					})
					*/

					]
				}

				, _('ui:uButton', {
					css: '',
					css_icon: 'i-img--checkbox-inactive',
					first: 'left',
					//group: 'left',
					icon: 'only',
					title: "Выделить все письма",
					text: "Выделить"
				})

				, _('ui:uMenu'
					, {
						css: 'b-page_mailbox-menu_action',
						position: 'left', //'right/left',
						open: 'click', //auto|click|hover
						//debug: true,

						node: _('ui:uButton', {
							css: '',
							css_icon: 'i-img--arrow_down',
							icon: 'right',
							//first: 'right',
							//group: 'new',
							//indent: 'left',
							title: "Другие действия",
							text: "Действия"
						})
					}

					, _('div'
						, {
							style: 'width:150px;height:200px;'
						}

					)
				)

				, _('ui:uButton', {
					css: '',
					css_icon: 'i-img--spam',
					//first: 'left',
					//group: 'new',
					//icon: 'left', //'only',
					indent: 'left',
					title: "Удалить в спам выделенные письма",
					text: "Это спам"
				})

				, _('ui:uButton', {
					css: '',
					css_icon: 'i-img--remove',
					//icon: 'left', //'only',
					//group: 'new',
					//indent: 'left',
					title: "Удалить выделенные письма",
					text: "Удалить"
				})

			)
		) //

		, ns.dialog_bounce = _('ui:page_dialog', { css: 'b-page_mailbox-dialog_bounce', title: "Переадресация", debug: false} //title: "Test",
			, _('div.b-page_mailbox-bounce_row'
				, _('span.b-page_mailbox-bounce_title'
					, ns.button_bounce_contacts = _('ui:uButton'
						, {
							css: 'b-page_mailbox-bounce_book',
							icon: true,
							css_icon: 'i-img--contact',
							text: "Кому:"
						}
					)
				)
				, _('div.b-page_mailbox-bounce_box'
					, _('INPUT.b-page_mailbox-bounce_input', { title: "Двойной клик по полю откроет адресную книгу", type: "text", name: "to" })
				)
			)

			, _('div.b-page_mailbox-bounce_tools'
				, ns.button_bounce_contacts = _('ui:uButton'
					, {
						text: "Переадресовать"
					}
				)

				, ns.button_bounce_cansel = _('a.b-page_mailbox-bounce_cansel', { tabIndex: 1, href: 'js:cansel' }
					, "Отмена"
					)
			)

		) //


		, ns.dialog_clear_folder = _('ui:page_dialog', { css: 'b-page_mailbox-dialog_clear_folder', debug: false} //title: "Test",
			, _('div.b-page_mailbox-clear_folder_wrap'
				, "Вы уверены, что хотите удалить все письма из папки?"
				, ns.clear_folder_go = _('ui:uButton'
					, {
						css: 'b-page_mailbox-clear_folder_go',
						text: "Да"
					}
				)

				, ns.clear_folder_cansel = _('a.b-page_mailbox-clear_folder_cansel', { tabIndex: 1, href: 'js:cansel' }
					, "Отмена"
				)
			)
		) //


		, _('div', {style: 'background-color: #DFEFFE;line-height: 24px;margin: 10px 0;padding: 0 10px;overflow: hidden;white-space: nowrap;'}
			, _('a', {href: '/'}
				, "Ищешь стиральную машину?"
				)
			, ' '
			, _('a', {href: '/'}
				, "Фирменный магазин Кайзер! Скидки! Бесплатные доставка и установка!"
				)
		)
		, _('div'
			, _('tmpl:mailbox_list')

			, _('div.b-page_mailbox-more'
				, _('a.b-page_mailbox-more_link no_underline'
					, _('span.b-page_mailbox-more_text'
						, "Ещё"
					)
				)
			)

	/*
	, _('ui:uPager'
	, {
	css: 'b-page_mailbox-pager',
	max: 20,
	num: 1,
	url_mask: '#/page/%s'
	}
	)
	*/
		)
	)
};

//cram.start()
//cram.go()



tmpl.mailbox_list = function (_, pr) {
	var px = [
		{
			id: 713,
			from: "SourceForge Resource New.",
			subj: "Ответ на ваш комментарий к хабратопику \"Хакеры украли письма с Hotmail благодаря ошибке...",
			text: " - Пользователь skaut8 ответил на ваш комментарий к …",
			date: "28 июл 2008"
		}

		, {
			id: 714,
			from: "INTUIT.RU",
			subj: "INTUIT.ru: ИНТУИТ получил новую бессрочную лицензию",
			text: " - INTUIT.ru: ИНТУИТ получил новую бессрочную лицензию …",
			date: "1 июл 2008"
			//time: [1, 6, 2008]
		}

		, {
			id: 715,
			from: "МойСклад",
			subj: "Посетите наш стенд на ECOM Expo и другие новости",
			text: " - Здравствуйте, уважаемые пользователи сервиса …",
			date: "20 июл 2008"
		}

		, {
			id: 716,
			from: "internet_payment",
			subj: "Информация о платеже",
			text: " - Номер платежа: 925876 Название магазина: Аэрофлот …",
			date: "9 июл 2008"
		}

		, {
			id: 717,
			from: "McAfee",
			subj: "Скидка 50% при обновлении защиты компьютера Sony",
			text: " - McAfee | VAIO рекомендует McAfee и Sony. Идеальный дуэт. Система …",
			date: "10 июл 2008"
		}
	];

	var ns = this, unread = true;

	ns.node = _('div.b-mbox_table'
		, _.forEach(50, function () {
			var x = Math.floor(Math.random() * (px.length - 0.1))
			x = px[x];


			x.unread = unread ? x.unread = unread = Math.random() > 0.2 : false
			x.icon_domain = ([, '/xm/i/12bezotveta@odnoklassniki.ru.png', '/xm/i/facebook.com.png', '/xm/i/vkontakte.ru.png', '/xm/i/bugzilla.mozilla.org.png'])[Math.round(Math.random() * 10)];

			return _('tmpl:mailbox_listRow', x)
		})
	);
};

rr.styles('tmpl:maibox_row'
	, '.b-mbox_row {position:relative;margin:-1px 0 0;padding: 0px 120px 0px 60px; white-space: nowrap;line-height:30px; height:30px; border-top:1px solid #ddd;border-bottom:1px solid #ddd;}'

	, '.b-mbox_row-ap {position: absolute;overflow: hidden;}' //overflow: hidden;


	, '.b-mbox_row-check {cursor: pointer;left:3px; top:5px; width:20px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}' //margin-
	, '.b-mbox_row-read {cursor: pointer;left:30px; top:5px; width:16px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}'
	, '.b-mbox_row-attach {cursor: default;visibility: hidden;right:120px; top:5px; width:20px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}'
	, '.b-mbox_row-date {cursor: pointer;text-align: right;right: 30px; top:4px; width: 82px; height:22px;line-height:22px;padding-right:3px;color:#000 !important;}'
	, '.b-mbox_row-favorite {cursor: pointer;right:3px; top:5px; width:16px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}'
	, '.b-mbox_row-replied {pointer-events:none;cursor: default;left:41px; top:16px; width:10px;height:10px;background-position: 50% 50%;background-repeat: no-repeat;position: absolute;overflow: hidden;}'
	, '.b-mbox_row-replied--hide {display:none;}'

	, '.b-mbox_row-date:hover {background-color:#E4E4E4;border-radius: 2px;}'
	, '.b-mbox_row--selected .b-mbox_row-date:hover {background-color:#B6cccc;}'
	


	, '.b-mbox_row-link {display: inline-block;line-height: 18px;margin-top: 6px;color:#575757;overflow: hidden;max-width:100%;-o-text-overflow: ellipsis; text-overflow: ellipsis;}' // not work -o-text-overflow: ellipsis; text-overflow: ellipsis;
	, '.b-mbox_row-from {color: #888;font-size: 12px;}'
	, '.b-mbox_row-subj {margin-left: 10px;color:#000; font-size: 13px;}'
	, '.b-mbox_row-subj_firstline {color: #575757;font-size: 12px;}'

	, '.b-mbox_row--unread .b-mbox_row-subj {font-weight: bold;}'
	, '.b-mbox_row--unread .b-mbox_row-from  {color: #575757;}'
	, '.b-mbox_row--favorite {background-color:#FDFFE6;border-color: #D9E188;z-index:1;}'

	, '.b-mbox_row--selected {background-color:#B6E1F3;border-color:#9EA4B3; z-index: 2;}'
	, '.b-mbox_row--selected + .b-mbox_row--selected {border-top-color:#FFF;}'

	

	, '.b-mbox_row--has_attach {padding-right:160px;}'
	, '.b-mbox_row--has_attach .b-mbox_row-attach {visibility: visible;}'


	, '.b-mbox_row-check.i-img--checkbox-inactive {opacity:0.7;}'
	//, '.b-mbox_row-check.i-img--checkbox-inactive:hover {opacity:0.5;}'
	, '.b-mbox_row-favorite.i-img--mail_marked-not {opacity:0.7;}'

	, '.b-mbox_row-link--icon_domain {background-position: 0 50%;background-repeat: no-repeat;}'
	, '.b-mbox_row-from--icon_domain {margin-left:20px;}'

	/*
	, rr.IE != 8 && false ? false : [ // IE8 fix speed
		, '.b-mbox_row-favorite, .b-mbox_row-read {position: relative;float: left;margin-left: -60px;}'
		, '.b-mbox_row-check, .b-mbox_row-date {position: relative;float: right;margin-right: -120px;}'
		, '.b-mbox_row--has_attach .b-mbox_row-check, .b-mbox_row--has_attach .b-mbox_row-date {margin-right: -160px;}'
		]
		*/

);


tmpl.mailbox_listRow = function (_, p) {
	var ns = this, u;

	p.attach = Math.random() > 0.85;
	p.favorite = Math.random() > 0.95;

	ns.node = _('div.b-mbox_row' + (p.unread ? ' b-mbox_row--unread' : '') + (p.favorite ? ' b-mbox_row--favorite' : '')
		, {
			css: p.attach ? 'b-mbox_row--has_attach' : ''

		}


		, ns.checkbox = _('a.b-mbox_row-check b-mbox_row-ap i-img--checkbox-inactive i-img_hover--checkbox-hover'
			, {
				onclick: function () {
					//var xt = new Date;
					//setTimeout(function () { alert(new Date - xt) }, 1)

					rr.css_switch(['i-img--checkbox-inactive', 'i-img--checkbox-active'], ns.checkbox);
					rr.css_switch(['i-img_hover--checkbox-hover', 'i-img_hover--checkbox-active'], ns.checkbox);
					rr.css_switch(['b-mbox_row--selected', null], ns.node);
				}
			}
		)

		, ns.read_link = _('a.b-mbox_row-read b-mbox_row-ap'
			, {
				css: p.unread ? 'i-img--mail_unread' : 'i-img--mail_read',
				onclick: function () {
					rr.css_switch(['i-img--mail_unread', 'i-img--mail_read'], ns.read_link);
					rr.css_switch(['b-mbox_row--unread', 'b-mbox_row--read'], ns.node);
				}
			}
		)

		
		/*
		, _('span.b-mbox_row-replied i-img--mail_replied' + (Math.random() > 0.05 ? ' b-mbox_row-replied--hide' : '')
			, {
				title: "Отвечено"
			}
		)
		*/

	//, _('span.b-mbox_row-content'
		, _('a.b-mbox_row-link no_underline' + (p.icon_domain ? ' b-mbox_row-link--icon_domain' : '')
			, {
				style: p.icon_domain ? { backgroundImage: 'url(' + p.icon_domain + ')'} : u,
				onclick: function () { },
				href: '#'
			}
			, _('span.b-mbox_row-from hover_underline' + (p.icon_domain ? ' b-mbox_row-from--icon_domain' : '')
				, _.text(p.from || '')
			)

			, _('span.b-mbox_row-subj hover_underline'
				, _.text(p.subj || '')
				, _('span.b-mbox_row-subj_firstline'
					, _.text(p.text || '')
				)
			)
		)
	//)


		, !p.attach ? false : _('span.b-mbox_row-attach i-img--attach_file b-mbox_row-ap'
			, {
				title: "Прикрепленные файлы"
			}
		)

		, _('a.b-mbox_row-date b-mbox_row-ap no_underline'
			, {
				title: 'Фильтр от этого письма',
				href: '#/mailbox/inbox/n' + p.id
				//href: '#/mailbox:date=201107260812/INBOX'
			}
			, _.text(p.date)
		)

		, ns.favorite_link = _('a.b-mbox_row-favorite b-mbox_row-ap'
			, {
				css: p.favorite ? 'i-img--mail_marked' : 'i-img--mail_marked-not'
				, onclick: function () {
					var x = rr.css_flip('b-mbox_row--favorite', ns.node);
					rr.css_switch(['i-img--mail_marked', 'i-img--mail_marked-not'], ns.favorite_link, x ? 0 : 1)
				}
			}
		)
	);
};

