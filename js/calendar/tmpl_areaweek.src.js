tmpl.rc_areaweek = function(_, pr) {
	var ns = this;
	ns.sname = 'rc-areaweek';

	ns.node = _('div.rc-areaweek rc-areaweek--h-auto',
		_('div.bt',
			ns._tbl =
			_('table', {
				cellSpacing: 0,
				cellPadding: 0,
				border: 0,

				add: _('tbody',
					ns.head = _('tr')
					)
				})
			),

		!(rr.IE<7)&&_('div.gr'),

		ns.box = _('div.rc-areaweek-c',
			ns.boxtop = _('div.rc-areaweek-ct')
			),

		ns.rh = _('div.r rh'),

		ns.range_node = _('div.'+ns.sname+'-range', {style:'display:none;'},
			_('div.'+ns.sname+'-range-bx')
			)
		);

	ns.node._r_element = 'week';
	ns.range_node._r_element = 'range';
	};

tmpl.rc_areaweek_cell = function(_, pr) {
	var ns = this, nh;

	ns.node = _('td', {
		add: nh = _('div.h', [
			_('span.n', ns.date =  _.text("##") ),
			_('span.d', ns.day = _.text("%%" ) )
			])
		});

	ns.node.onclick = rr.nullFunction; // helper for touch screen

	nh._r_element = 'weekDay_head';
	};

tmpl.rc_areaweek_more = function(_, pr) {
	var ns = this;

	ns.node = _('div.rc-areaweek-inf',
		_('span.t',
			_('span.n', ns.text = _.text("") )
			)
		);
	};

tmpl.rc_areaweek_item = function(_, pr) {
	var ns = this;
	ns.sname = 'rc-areaweek-item';


	ns.node = _('div.'+ns.sname, [
		//_('div.u xc'),

		ns.caption = _('div.c xc',
			 _('span.bx', //ns.box =
				ns.text = _.text("")//pr.text
				)
			),

		//_('div.d xc'),
		_('div.clr xc'),

		//ns.ars = _('div.ar'),
		//ns.brs = _('div.br')
		]);

	ns.node._r_element = 'item';
	ns.node.onclick = rr.nullFunction; // helper for touch screen
	};

