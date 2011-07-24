
rr.styles('tmpl:maibox'
	, '.b-page_mailbox-pager {margin-top:20px;}'
	, '.b-mbox_table {overflow: hidden;z-index:0;}'
	, '.b-page_mailbox-menu {margin-left: 3px;}'
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
					css: 'b-block_feeds-controls',


					right: [
						, _('ui:uButton', {
							css: '',
							css_icon: 'i-img--remove',
							//icon: 'left', //'only',
							//group: 'new',
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

						, _('ui:uMenu'
							, {
								css: 'b-page_mailbox-menu',
								position: 'right', //'right/left',
								open: 'click', //auto|click|hover
								//debug: true,

								node: _('ui:uButton', {
									css: '',
									css_icon: 'i-img--arrow_down',
									icon: 'right',
									//first: 'right',
									//group: 'new',
									indent: 'left',
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
							css_icon: 'i-img--checkbox-inactive',
							first: 'right',
							//group: 'left',
							icon: 'only',
							title: "Выделить все письма",
							text: "Выделить"
						})


					]
				}

				, _('ui:uInput', {
					//help: "Поиск в папке",
					first: 'left',
					group: 'left'
				})

				, _('ui:uButton', {
					css: '',
					css_icon: 'i-img--search',
					//icon: 'only',    

					//first: 'left',
					group: 'right',
					title: "Найти",
					text: "Найти"
				})
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
	, '.b-mbox_row {position:relative;margin:0;padding: 0px 120px 0px 60px; white-space: nowrap;line-height:30px; height:30px; border-bottom:1px solid #ddd;}'

	, '.b-mbox_row-ap {position: absolute;overflow: hidden;}' //overflow: hidden;

	, '.b-mbox_row-favorite {cursor: pointer;left:5px; top:5px; width:20px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}'
	, '.b-mbox_row-read {cursor: pointer;left:30px; top:5px; width:20px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}'
	, '.b-mbox_row-check {cursor: pointer;right: 4px; top:2px; width:20px;height:26px;background-position: 50% 50%;background-repeat: no-repeat;}' //margin-
	, '.b-mbox_row-attach {cursor: default;visibility: hidden;right:130px; top:5px; width:20px;height:20px;background-position: 50% 50%;background-repeat: no-repeat;}'
	, '.b-mbox_row-date {cursor: default;text-align: right;right: 30px; top:0; width: 85px; height:30px;}'


	, '.b-mbox_row-link {display: inline-block;line-height: 18px;margin-top: 6px;color:#575757;overflow: hidden;max-width:100%;-o-text-overflow: ellipsis; text-overflow: ellipsis;}' // not work -o-text-overflow: ellipsis; text-overflow: ellipsis;
	, '.b-mbox_row-from {color: #888;font-size: 12px;}'
	, '.b-mbox_row-subj {margin-left: 10px;color:#000; font-size: 13px;}'
	, '.b-mbox_row-subj_firstline {color: #575757;font-size: 12px;}'

	, '.b-mbox_row--unread .b-mbox_row-subj {font-weight: bold;}'
	, '.b-mbox_row--unread .b-mbox_row-from  {color: #575757;}'
	, '.b-mbox_row--selected {background-color:#B6E1F3;border-bottom-color:#fff;}'


	, '.b-mbox_row--has_attach {padding-right:160px;}'
	, '.b-mbox_row--has_attach .b-mbox_row-attach {visibility: visible;}'


	, '.b-mbox_row-check.i-img--checkbox-inactive {opacity:0.3;}'
	, '.b-mbox_row-check.i-img--checkbox-inactive:hover {opacity:0.5;}'

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

		, ns.favorite_link = _('a.b-mbox_row-favorite b-mbox_row-ap'
			, {
				css: Math.random() > 0.9 ? 'i-img--flag-active' : 'i-img--flag'
				, onclick: function () {
					rr.css_switch(['i-img--flag-active', 'i-img--flag'], ns.favorite_link)
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

		, ns.checkbox = _('a.b-mbox_row-check b-mbox_row-ap i-img--checkbox-inactive'
			, {
				onclick: function () {
					//var xt = new Date;
					//setTimeout(function () { alert(new Date - xt) }, 1)

					rr.css_switch(['i-img--checkbox-inactive', 'i-img--checkbox-active'], ns.checkbox);
					rr.css_switch(['b-mbox_row--selected', null], ns.node);
				}
			}
		)
	);
};

