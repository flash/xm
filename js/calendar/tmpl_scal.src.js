rr.styles('tmpl:scal'
	,'.rc-scal {font-size: 12px;cursor:default;-moz-user-select: none;-khtml-user-select: none;user-select: none;}'
	,'.rc-scal-body {overflow:hidden;position:relative;height:182px;}'
	,'.rc-scal-body table {margin:0 auto;width:100%;border-collapse:collapse;border-spacing:0;}'
	,'.rc-scal-body td {text-align:center;}'

	,'.rc-scal-body .c {cursor:pointer;color:#777777;background-color:#F9F9F9;border:1px solid #FFFFFF;display:block;height:25px;line-height:27px;}'
	,'.rc-scal-body .cm .c {background-color:#EBF0F2;color:#000;}'


	,'.rc-scal-body .cd .c {border:1px dotted #8294A0;}'
	,'.rc-scal-body .sr .c {background-color:#D6E6EF;}'


	,'.rc-scal-body thead {cursor:default;}'


	,'.rc-scal-head {text-align:center;padding:0 0 1ex;}'
	,'.rc-scal-date {text-align:center;cursor:pointer;}' //font-weight:bold;


	,'.rc-scal-next {background-position: 50% 50%;width:23px;cursor:pointer;float:right;text-align:right;overflow:hidden;}'
	,'.rc-scal-past {background-position: 50% 50%;width:23px;cursor:pointer;float:left;text-align:left;overflow:hidden;}'
	,'.rc-scal-next:hover, .rc-scal-past:hover {background-color:#eee;}'
	,'.rc-scal-past_text, .rc-scal-next_text {visibility:hidden;}'

	,'.rc-scal--compact .rc-scal-next, .rc-scal--compact .rc-scal-past {min-width:0;margin-right:0;margin-left:0;overflow:hidden;width:20px;background-color:#eee;color:transparent;}'
	,'.rc-scal--compact .rc-scal-next span, .rc-scal--compact .rc-scal-past span  {visibility:hidden;}'

	,'.rc-scal-today {cursor:pointer;}'

	,'.rc-scal-footer {text-align:center;margin-top: 1px;}'

	// mode yaer

	,'.rc-scal table.ym {margin-bottom:2px;}'
	,'.rc-scal-mcell {cursor:pointer;display:block;height:58px;line-height:58px;background-color:#E0EBEF;border:1px solid #FFFFFF;}'
	);


tmpl.scal_ym = function(_, pr) {
	var ns = this, lm = rv.month_small;

	ns.node = _('table.ym', {cellSpacing:0, cellPadding:0, border:0},
		_('tbody',
			_('tr',
				_('td', {_cmd_:'gm', _date_:0}, _('span.rc-scal-mcell', lm[0])),
				_('td', {_cmd_:'gm', _date_:1}, _('span.rc-scal-mcell', lm[1])),
				_('td', {_cmd_:'gm', _date_:2}, _('span.rc-scal-mcell', lm[2])),
				_('td', {_cmd_:'gm', _date_:3}, _('span.rc-scal-mcell', lm[3]))
				),

			_('tr',
				_('td', {_cmd_:'gm', _date_:4}, _('span.rc-scal-mcell', lm[4])),
				_('td', {_cmd_:'gm', _date_:5}, _('span.rc-scal-mcell', lm[5])),
				_('td', {_cmd_:'gm', _date_:6}, _('span.rc-scal-mcell', lm[6])),
				_('td', {_cmd_:'gm', _date_:7}, _('span.rc-scal-mcell', lm[7]))
				),

			_('tr',
				_('td', {_cmd_:'gm', _date_:8}, _('span.rc-scal-mcell', lm[8])),
				_('td', {_cmd_:'gm', _date_:9}, _('span.rc-scal-mcell', lm[9])),
				_('td', {_cmd_:'gm', _date_:10}, _('span.rc-scal-mcell', lm[10])),
				_('td', {_cmd_:'gm', _date_:11}, _('span.rc-scal-mcell', lm[11]))
				)
			)
		);
	};

/*
pr.activeDate = {y:9999, m:99, d:99}
pr.todayDate = {y:9999, m:99, d:99}
pr.firstDay = 0,1,2,...,6
*/
tmpl.scal_m = function(_, pr) {
	var ns = this, i, u, x, dt, nb, nr,
		d = _.document,
		startD = (pr.startDay||0),
		tdD = pr.dateToday, // день сегодня
		shD = (pr.dateShow || tdD),  // день месяц которого отображаем. выбрвнный день
		acD = (pr.dateActive || tdD),  // день месяц которого отображаем. выбрвнный день

		sA = pr.dateA,
		sB = pr.dateB,

		Y = shD.y,
		M = shD.m,
		mD = rcalendar.getMaxDate(Y, M), // max date

		Mp = (M ? M - 1 : 11),
		Yp = (M ? Y : Y - 1),
		mDp = rcalendar.getMaxDate(Yp, Mp),
		n;  // max date past




	ns.node = i = d.createElement('table');
	i.className = 'm';
	i.cellSpacing = 0;
	i.cellPadding = 0;
	i.border = 0;

	if (true) {
		ns.node.appendChild(nb = d.createElement('thead')).appendChild(nr = d.createElement('tr'));

		for (x = 0; x<7; x++) {
			i = startD + x;
			nr.appendChild(
				_('td',
					rv.aweek_small[i>6? i-7 : i]
					)
				)
			};
		};

	ns.node.appendChild(nb = d.createElement('tbody')).appendChild(nr = d.createElement('tr'));



	if (startD > 6) startD = startD%6;


	i = -(new Date(Y, M, 1).getDay() - startD);
	if (i>0) i -= 7;
	//alert(i-mD)
	//if (i-mD+43 > 7) i-=7;
	//console.dir(sA)
	//sA = {y:2010,m:2,d:17};
	//sB = {y:2010,m:2,d:20};

	for (x = 1; x<43; x++) {
		i++;

		dt = {
			d: i <= mD ? (i<1 ? mDp+i : i) : i-mD,
			m: i <= mD ? (i<1 ? Mp : M) : (M==11 ? 0 : M+1),
			y: i <= mD ? (i<1 ? Yp : Y) : (M==11 ? Y+1 : Y)
			};


		/*
		_('td',
			{
				parent: nr,
				className: (
					(i <= mD ? (i<1 ? 'pm' : 'cm') : 'nm')
					+' d' + (x%7||7)
					+(pr.classDate ? pr.classDate(dt) : '')
					+(acD.y == dt.y && acD.m == dt.m && acD.d == dt.d ? ' cd':'')
					+(sA && sB
						&& (sA.y < dt.y || (sA.y == dt.y && (sA.m<dt.m || sA.m==dt.m &&  sA.d<=dt.d)))
						&& (sB.y > dt.y || (sB.y == dt.y && (sB.m>dt.m || sB.m==dt.m &&  sB.d>=dt.d)))
						? ' sr': '')
					+(tdD && tdD.y == dt.y && tdD.m == dt.m && tdD.d == dt.d ? ' today':'')
					),

				_cmd_: 'day',
				_date_: dt
				},

			_('div.c',
				_('span', {text: dt.d})
				)
			);
		*/

		n = nr.appendChild(d.createElement('td'));
		n._cmd_ = 'day';
		n._date_ = dt;
		n.className = (i <= mD ? (i<1 ? 'pm' : 'cm') : 'nm')
			+' d' + (x%7||7)
			+(pr.classDate ? pr.classDate(dt) : '')
			+(acD.y == dt.y && acD.m == dt.m && acD.d == dt.d ? ' cd':'')
			+(sA && sB
				&& (sA.y < dt.y || (sA.y == dt.y && (sA.m<dt.m || sA.m==dt.m &&  sA.d<=dt.d)))
				&& (sB.y > dt.y || (sB.y == dt.y && (sB.m>dt.m || sB.m==dt.m &&  sB.d>=dt.d)))
				? ' sr': '')
			+(tdD && tdD.y == dt.y && tdD.m == dt.m && tdD.d == dt.d ? ' today':'');

		n = n.appendChild(d.createElement('div'));
		n.className = "c";
		n.appendChild(d.createElement('span'))
			.appendChild(
				d.createTextNode(dt.d)
				);


		if (acD.y == dt.y && acD.m == dt.m && acD.d == dt.d) {
			nr.className = "cw"; //
			};

		//if (x<42 && !(x%7)) nb.appendChild(nr = d.createElement('tr'));
		if (x<42) x%7||nb.appendChild(nr = d.createElement('tr'));
		};
	};

tmpl.scal_one = function(_, pr) {
	var ns = this, u;
	ns.sname = 'rc-scal';

	ns.vs_today = "Сегодня %s %s %s\u00A0года";
	ns.vs_date = "%s %s\u00A0года";

	ns.node = _('div.rc-scal',
		_('div.rc-scal-head',
			ns.c_next = _('a.rc-scal-next no_underline s-menu_bg i-img--arrow_right', {title:""},
				_('span.rc-scal-next_text',
					ns.c_next_text = _.text("")
					)
				),

			ns.c_past = _('a.rc-scal-past no_underline s-menu_bg i-img--arrow_left', {title:""},
				_('span.rc-scal-past_text',
					ns.c_past_text = _.text("")
					)
				),

			ns.c_date = _('a.rc-scal-date', //{},
				ns.c_date_text = _.text("")
				)
			),

		ns.box = _('div.rc-scal-body'),

		_('div.rc-scal-footer',
			ns.c_today = _('a.rc-scal-today', {title:"", href:(rr.IE<7?'js:// today':u)},
				ns.c_today_text = _.text("")
				)
			)
		);
	};


