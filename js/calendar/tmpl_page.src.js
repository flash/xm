tmpl.rc_sidebar = function (_, pr) {
	var ns = this;

	ns.node = _('div'
		, _('ui:scal_one')
		)
};

tmpl.rc_page = function (_, pr) {
	var ns = this;


	ns.page = _('ui:page'
		, {
			extend: ns
			, pid: 'rcalendar'
			, document_title: "Календарь"

			, css: 'b-rcalendar'
			, css_capion: 'b-rcalendar-capion'

			, head: 'bottom'
			//, head_name: "Календарь"
			//, head_right: []
		}

		, _('ui:page_head'
			, _('tmpl:uToolbar'
				, {
					css: 'b-block_feeds-controls',


					right: [
						, _('ui:uButton', {
							css: '',
							css_icon: 'i-img--arrow_left',
							group: 'left',
							title: "День",
							text: "День"
						})
						, _('ui:uButton', {
							css: '',
							css_icon: 'i-img--arrow_right',
							active: true,
							group: 'center',
							title: "Неделя",
							text: "Неделя"
						})
						, _('ui:uButton', {
							css: '',
							css_icon: 'i-img--',
							group: 'right',
							title: "Месяц",
							text: "Месяц"
						})

						, _('ui:uButton', {
							css: '',
							icon: 'only',
							css_icon: 'i-img--refresh',
							indent: 'left',
							first: 'right',
							title: "Обновить данные",
							text: "Обновить"
						})

					]
				}


				, _('ui:uButton', {
					css: '',
					css_icon: 'i-img--refresh',
					first: 'left',
					title: "Сегодня",
					text: "Сегодня"
				})

				, _('ui:uButton', {
					css: '',
					css_icon: 'i-img--arrow_left',
					indent: 'left',
					
					icon: 'only', //'only',
					title: "Назад",
					text: ">"
				})
				, _('ui:uButton', {
					css: '',
					css_icon: 'i-img--arrow_right',
					first: 'right',
					icon: 'only', //'only',
					title: "Вперед",
					text: ">"
				})

			)
		) //

		, ns.calendar = _('ui:rc_calendar'
			, {
				calendarSource: pr.calendarSource,
				timeStart: pr.timeStart,
				timeEnd: null
			}
		)
	)
};

tmpl.rc_calendar = function (_, pr) {
	var ns = this;

	ns.node = _('div.rc-page',
		ns.toolbar = _('div.rc-page-toolbar' + (pr.mode != 'month' ? ' rc-page-toolbar--pleft' : '') //
			, {
				style: 'display:none;'
			}
			, _('div.panel',
				ns.b_past = _('button.gopast', "<"),
				ns.b_next = _('button.gonext', ">"),
				ns.b_today = _('button.gotoday', "Сегодня"),



				ns.b_date = _('a.date', { href: 'javascript://' },
					ns.tx_date = _.text('date')
					)
				)
			),


		ns.p_month = _('ui:rc_areamonth', {
			calendarSource: pr.calendarSource,
			panelLeft: true,
			panelTop: false,
			timeStart: pr.timeStart,
			rows: 1,
			height: 150,
			columns: 7
		}),

		ns.resizer = _('div.rc-calendar-resizer'),

		ns.p_days = _('ui:rc_areaday', {
			calendarSource: pr.calendarSource,
			panelLeft: true,
			timeStart: pr.timeStart,
			dtime: 8,
			columns: 7
		})
		);
};



tmpl.rc_toolbar = function (_, pr) {
	var ns = this;
	ns.snm = 'rc-toolbar';

	ns.node = _('div.rc-toolbar',
		ns.tb_top = _('div.rc-toolbar-top',
			_('::toolbar_botton', {
				name: 'day',
				active: false,
				text: "День"
			}),

			_('::toolbar_botton', {
				name: 'day4',
				active: false,
				text: "5 Дней"
			}),

			_('::toolbar_botton', {
				name: 'week',
				active: true,
				text: "Неделя"
			}),

			_('::toolbar_botton', {
				name: 'month',
				active: false,
				text: "Месяц"
			}),

			_('::toolbar_botton', {
				name: 'list',
				active: false,
				text: "Список"
			}),

			_('::toolbar_botton', {
				name: 'edit',
				active: false,
				text: "Ред. событие"
			})
			),

		_('div.rc-toolbar-end')
		);
};

tmpl.rc_toolbar_botton = function (_, pr) {
	var n = rr.IE < 7 ? _('a', { href: "js:" + (pr.name || 'control') }) : _('a');
	n.className = rr.ct(' ', 'rc-toolbar-b', pr.active && 'rc-toolbar-b--active');
	if (pr.name) n.cm_name = pr.name;
	if (pr.title) n.title = pr.title;

	n.onclick = rr.nullFunction; // helper for touch screen

	_(n,
		 _('span.i'),
		 _('span', pr.text || "")
		 );

	return n;
};



tmpl.rc_calendar_wrap = function (_, pr) {
	var ns = this;

	ns.node = _('div.rc-calendar'
		, ns.toolbar = _('ui:rc_toolbar')
		);
}
