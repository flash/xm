tmpl.rc_areaday = function(_, pr) {
	var ns = this, nc, l, i;
	ns.sname = "rc-areaday";


	//_('full_calendar:areaday.className#idElement'

	ns.area = _('div.rc-areaday',
		_('div.box'
			, ns.rows = _('div.rows')
			, _('div.rc-areaday-strut')
			, ns.timeResizer = _('div.rc-areaday-resizer')

			, _('div.clbox',
				_('table.columns', {
					cellSpacing: 0,
					cellPadding: 0,
					border: 0,
					add: [
						_('tbody',
							ns.cbox = _('tr', [
								_('th')
								])
							)
						]
					})
				)
			)
		);



	ns.timeText = [];

	for (i=0; i<24; i++) {
		if (rr.Opera) _('div.r--end',{parent: ns.rows});
		_(ns.rows, _('div.rh'+(!i?' rh--fr':''),
			_('span',
				ns.timeText[ns.timeText.length] =
				_.text(i+":00")
				)
			));

		_(ns.rows, _('div',{
			className: 'r' + (!i ? ' r--fr' : i==23 ? ' r--ls' : '')
			}));
		};


	if (rr.Opera||rr.IE<7) _('div.r--end',{parent: ns.rows});
	ns.cbox._r_element = 'rc_day_box';
	};

tmpl.rc_areaday_column = function(_, pr) {
	var ns = this;

	ns.node = _('td.c',
		ns.box = _('div.cbox cbox--dn', rr.IE<7&&' ' ), //_('div')
		ns.boxUp = _('div.cbox cbox--up', rr.IE<7&&' ')
		);
	};


tmpl.rc_areaday_item = function(_, pr) {
	var ns = this;
	ns.sname = 'rc-day-item';

	ns.node = _('div.rc-day-item', {
		style: "width:100%;display:none;",
		add: [
			ns.resizeA = _('div.rzA'),
			_('div.u xc'),
			ns.caption = _('div.c xc',
				//_('div.h',
					//ns.head = _('span.bx',
						//ns.head_text = _.text('')
						//)
					//),
				_('div.b bx',
					ns.box = _('span',
						ns.box_text = _.text("")
						)
					)
				),

			_('div.d xc'),
			ns.resizeB = _('div.rzB')
			]
		});
	};

tmpl.rc_range_c = function(_, pr) {
	var ns = this;
	this.sname = 'rc-range-'+(pr.type_week ? 'wk' : 'c');

	ns.box = _('div.bx',
		_('span.add',
			ns.button = _('a', {
				href: 'js://new',
				title: "Создать новое событие",
				text: "Создать" // Создать
				})
			),

		_('span.info',
			ns.text = _.text('')
			)
		);

	ns.node = _('div.'+this.sname,
		rr.IE<7 ? _('div.ie', ns.box) : ns.box
		)
	};

tmpl.rc_range = function(_, pr) {
	var ns = this;
	ns.sname = "rc-range";

	ns.node = _('div.rc-range',
		ns.box = _('div.rc-range-box')
		);
	};

