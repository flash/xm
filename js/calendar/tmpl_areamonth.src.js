rr.extend('rcalendar.ui._values_', {
	aweek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
	aweek_small: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
	month: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
	month_of: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
	month_small: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],

	selection_add_b: "Создать",
	selection_add_bt: "Создать новое событие",
	selection_time: "%1:%2 - %3:%4", // 23:00 - 3:00,

	sc_today: "Сегодня %s %s %s\u00A0года",
	sc_date: "%s %s\u00A0г.",

	today: "Сегодня"
	});

tmpl.rc_areamonth = function(_, pr) {
	var ns = this;

	ns.node = _('div.rc-areamonth', [
		//ns.head = _('div.rc-areamonth-h'),

		ns.hbox = _('table.rc-areamonth-head rc-areamonth-head--hide', {
			cellSpacing: 0,
			cellPadding: 0,
			border: 0,

			add: _('thead',
				ns.head = _('tr')
				)
			}),

		ns.box = _('div.rc-areamonth-c')
		]);
	};

tmpl.rc_areamonth_head_cell = function(_, pr) {
	var ns = this;

	ns.node = _('td',
		_('span',
			ns.text = _.text('xxx')
			)
		)
	};
