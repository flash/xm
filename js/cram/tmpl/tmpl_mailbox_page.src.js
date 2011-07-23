
rr.styles('tmpl:maibox'
	, '.b-page_mailbox-pager {margin-top:20px;}'
	, '.b-mbox_table {overflow: hidden;z-index:0;}'
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
				, "1–50 из 669"
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
					css_icon: 'i-img--remove',
					//icon: 'left', //'only',
					//group: 'new',
					indent: 'left',
					title: "Удалить выделенные письма",
					text: "Удалить"
				})

				, _('ui:uButton', {
					css: '',
					css_icon: 'i-img--spam',
					//first: 'left',
					//group: 'new',
					//icon: 'left', //'only',
					title: "Удалить в спам выделенные письма",
					text: "Это спам"
				})

			)
		) //

		, ns.dialog_bounce = _('ui:page_dialog', {css: 'b-page_mailbox-dialog_bounce', title: "Переадресация",  debug: false } //title: "Test", 
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

				, ns.button_bounce_cansel = _('a.b-page_mailbox-bounce_cansel', {tabIndex:1, href: 'js:cansel'}
					, "Отмена"
					)
			)

		) //


		, ns.dialog_clear_folder = _('ui:page_dialog', {css: 'b-page_mailbox-dialog_clear_folder',  debug: false } //title: "Test", 
			, _('div.b-page_mailbox-clear_folder_wrap'
				,"Вы уверены, что хотите удалить все письма из папки?"
				, ns.clear_folder_go = _('ui:uButton'
					, {
						css: 'b-page_mailbox-clear_folder_go',
						text: "Да"
					}
				)

				, ns.clear_folder_cansel = _('a.b-page_mailbox-clear_folder_cansel', {tabIndex:1, href: 'js:cansel'}
					, "Отмена"
				)
			)
		) //


		, _('div'
			, _('tmpl:mailbox_list')

			, _('ui:uPager'
				, {
					css: 'b-page_mailbox-pager',
					max: 20,
					num: 1,
					url_mask: '#/page/%s'
				}
			)
		)
	)
};

//cram.start()
//cram.go()



tmpl.mailbox_list = function (_, pr) {
	var px = [
		{
			from: "SourceForge Resource New.",
			subj: "Ответ на ваш комментарий к хабратопику \"Хакеры украли письма с Hotmail благодаря ошибке...",
			text: " - Пользователь skaut8 ответил на ваш комментарий к …",
			date: "28 июл 2008"
		}

		, {
			from: "INTUIT.RU",
			subj: "INTUIT.ru: ИНТУИТ получил новую бессрочную лицензию",
			text: " - INTUIT.ru: ИНТУИТ получил новую бессрочную лицензию …",
			date: "1 июл 2008"
		}

		, {
			from: "МойСклад",
			subj: "Посетите наш стенд на ECOM Expo и другие новости",
			text: " - Здравствуйте, уважаемые пользователи сервиса …",
			date: "20 июл 2008"
		}

		, {
			from: "internet_payment",
			subj: "Информация о платеже",
			text: " - Номер платежа: 925876 Название магазина: Аэрофлот …",
			date: "9 июл 2008"
		}

		, {
			from: "McAfee",
			subj: "Скидка 50% при обновлении защиты компьютера Sony",
			text: " - McAfee | VAIO рекомендует McAfee и Sony. Идеальный дуэт. Система …",
			date: "10 июл 2008"
		}
	];

	var ns = this, unread = true;

	ns.node = _('div.b-mbox_table'
		, _.forEach(100, function () {
			var x = Math.floor(Math.random() * (px.length - 0.1))
			x = px[x];

			x.unread = unread ? x.unread = unread = Math.random() > 0.2 : false
			x.icon_domain = ([, '/xm/i/12bezotveta@odnoklassniki.ru.png', '/xm/i/facebook.com.png', '/xm/i/vkontakte.ru.png', '/xm/i/bugzilla.mozilla.org.png'])[Math.round(Math.random() * 10)];

			return _('tmpl:mailbox_listRow', x)
		})
	);
};

rr.styles('tmpl:maibox_row'
	, '.b-mbox_row {position:relative;margin:0;padding: 0px 90px 0px 90px; white-space: nowrap;line-height:30px; height:30px; border-bottom:1px solid #ddd;}'

	, '.b-mbox_row-ap {position: absolute;overflow: hidden;}' //overflow: hidden;


	, '.b-mbox_row-check {cursor: pointer;left:3px; top:5px; width:20px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}' //margin-
	, '.b-mbox_row-read {cursor: pointer;left:70px; top:5px; width:12px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}'
	, '.b-mbox_row-favorite {cursor: pointer;left:30px; top:5px; width:20px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}'
	, '.b-mbox_row-attach {cursor: default;visibility: hidden;right:100px; top:5px; width:20px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}'
	, '.b-mbox_row-date {cursor: default;text-align: right;right: 0px; top:0; width: 85px; height:30px;}'


	, '.b-mbox_row-link {display: inline-block;line-height: 18px;margin-top: 6px;color:#575757;overflow: hidden;max-width:100%;-o-text-overflow: ellipsis; text-overflow: ellipsis;}' // not work -o-text-overflow: ellipsis; text-overflow: ellipsis;
	, '.b-mbox_row-from {color: #888;font-size: 12px;}'
	, '.b-mbox_row-subj {margin-left: 10px;color:#000; font-size: 13px;}'
	, '.b-mbox_row-subj_firstline {color: #575757;font-size: 12px;}'

	, '.b-mbox_row--unread .b-mbox_row-subj {font-weight: bold;}'
	, '.b-mbox_row--unread .b-mbox_row-from  {color: #575757;}'
	, '.b-mbox_row--selected {background-color:#B6E1F3;border-bottom-color:#fff;}'


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

	p.attach = Math.random() > 0.9;




	ns.node = _('div.b-mbox_row' + (p.unread ? ' b-mbox_row--unread' : '') 
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

		, ns.favorite_link = _('a.b-mbox_row-favorite b-mbox_row-ap'
			, {
				css: Math.random() > 0.9 ? 'i-img--mail_marked' : 'i-img--mail_marked-not'
				, onclick: function () {
					rr.css_switch(['i-img--mail_marked', 'i-img--mail_marked-not'], ns.favorite_link)
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

	//, _('span.b-mbox_row-content'
		, _('a.b-mbox_row-link no_underline' + (p.icon_domain ? ' b-mbox_row-link--icon_domain' : '')
			, {
				style: p.icon_domain ? {backgroundImage: 'url('+p.icon_domain+')'} : u,
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

		, _('span.b-mbox_row-date b-mbox_row-ap'
			, _.text(p.date)
		)
	);
};
