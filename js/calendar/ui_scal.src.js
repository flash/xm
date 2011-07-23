
var trace = true;

elems.scal_one = rr.new_class({
	_name: 'scal',

	parent: rr.class_baseElement,
	interface: true,

	constructor: function(_, pr, cfg) {
		this.interface.parent.call(this, _, pr, cfg);
		this.interface.factory(this, _, pr, cfg);
		},

	factory: function(ui, _, pr) {
		ui.master = _.clone();
		ui.nodes = new tmpl.scal_one(_, false);
		ui.node = ui.nodes.node;

		ui.node._cmd_ = 'root';
		ui.nodes.c_today._cmd_ = 'today';
		ui.nodes.c_next._cmd_ = 'next';
		ui.nodes.c_past._cmd_ = 'past';
		ui.nodes.c_date._cmd_ = 'mode';
		this.init_events(ui);

		ui.set(pr, false);

		var dt;
		if (!ui.dateToday) {
			dt = new rcalendar.xdate().get(1,1,1);
			ui.dateToday = {y:dt.year, m:dt.month, d:dt.date};
			};

		if (!ui.dateActive) {
			dt = ui.dateToday;
			ui.dateActive = {y:dt.y, m:dt.m, d:dt.d};
			};
		if (!ui.dateShow) {
			dt = ui.dateActive;
			ui.dateShow = {y:dt.y, m:dt.m};
			};

		ui.refresh();
		},

	prototype: {
		next: function() {
			var ui = this, dt = ui.dateShow, x;

			if (ui.mode !== 'month') {
				if (dt.m==11) dt.y++;
				dt.m = dt.m < 11 ? dt.m + 1 : 0;
				} else dt.y++;

			if (ui.autoActive !== false) {
				ui.dateActive.y = dt.y;
				ui.dateActive.m = dt.m;
				x = rcalendar.getMaxDate(dt.y, dt.m);
				if (ui.dateActive.d > x) ui.dateActive.d = x;
				};

			ui.interface.re(ui);
			},

		past: function() {
			var ui = this, dt = ui.dateShow, x;

			if (ui.mode !== 'month') {
				if (dt.m === 0) dt.y--;
				dt.m = dt.m>0 ? dt.m - 1 : 11;
				} else dt.y--;

			if (ui.autoActive !== false) {
				ui.dateActive.y = dt.y;
				ui.dateActive.m = dt.m;
				x = rcalendar.getMaxDate(dt.y, dt.m);
				if (ui.dateActive.d > x) ui.dateActive.d = x;
				};

			ui.interface.re(ui);
			},

		today: function() {
			var ui = this, dt = ui.dateToday;

			if (ui.autoActive !== false) {
				ui.dateActive.y = dt.y;
				ui.dateActive.m = dt.m;
				ui.dateActive.d = dt.d;
				};

			ui.dateShow.y = dt.y;
			ui.dateShow.m = dt.m;

			ui.mode = null;
			ui.interface.re_dates(ui);
			}
		},

	init_events: function(ui) {
		ui.gEvent.add(ui.node, 'click', rr.breakEvent);

		ui.gEvent.add(ui.node, 'mousedown', function(e) {
			if (e.returnValue === false) return;
			var n = e.srcElement||e.target, it=ui.interface, x;

			while(n) {
				switch(n._cmd_) {
					case 'root': return;
					case 'next': ui.next(); break;
					case 'past': ui.past(); break;

					case 'today':  ui.today();
					x = ui.dateActive;
					ui.initEvent('uselect', {y:x.y, m:x.m, d:x.d}, 'today');
					break;

					case 'mode': it.swMode(ui); break;

					case 'day':
					if (x = n._date_) {
						ui.dateActive = {y:x.y, m:x.m, d:x.d};
						ui.interface.re_dates(ui);

						ui.initEvent('uselect', {y:x.y, m:x.m, d:x.d}, 'day');
						};
					break;

					case 'gm': x = n._date_;
					if (x || x===0) {
						ui.dateShow.m = x;

						if (ui.autoActive !== false) {
							ui.dateActive.y = ui.dateShow.y;
							ui.dateActive.m = ui.dateShow.m;
							x = rcalendar.getMaxDate(ui.dateActive.y, x);
							if (ui.dateActive.d > x) ui.dateActive.d = x;
							};

						ui.interface.re_dates(ui);
						};

					break;
					};

				n = n.parentNode;
				};

			if (n) rr.breakEvent(e);
			});

		if (rr.IE) ui.node.onselectstart = rr.breakEvent;
		if (rr.Opera) ui.gEvent.add(ui.node, 'mousedown', function(e) {
			e.target.ownerDocument.defaultView.getSelection().removeAllRanges();
			e.preventDefault();
			});
		},

	set: function(ui, pr, v, pv) {
		var it = this, tv = typeof v, x, und;

		switch (pr) {
			case 'mode':
			if (v != 'date' && v != 'month') return;
			break;

			case 'compact':
			case 'autoActive':
			v = !!v;
			break;


			case 'dateToday':
			case 'dateActive':
			case 'dateA':
			case 'dateB':
			if (tv !== 'object' || (pv && pv.d == v.d && pv.d == v.d && pv.d == v.d) || typeof v.y !=='number' || typeof v.m !=='number' || typeof v.d !=='number') return;
			if (v.m<0||v.m>11||v.d<1||v.d>31) return;
			break;

			case 'dateShow':
			if (tv !== 'object' || (pv && pv.d == v.d && pv.d == v.d) || v.m<0 || v.m>11 ||typeof v.y !=='number' || typeof v.m !=='number') return;
			break;

			default: return;
			};

		return v;
		},

	refresh: function(ui, ch, rz) {
		//if (!ui.display) return false;
		var it = ui.interface, nodes = ui.nodes, v, i;
		//if (ui.z_resize) ui.z_resize = !(rz = true);

		if (rz || ch.mode) {
			ui.mode == 'month' ? it.re_months(ui) : it.re_dates(ui)
			};

		if (rz || ch.dateToday) {
			v = ui.dateToday;

			nodes.c_today_text.data = rr.printx(nodes.vs_today
				, v.d
				, rv.month_of[v.m]
				, v.y
				);
			};

		if (rz || ch.compact) {
			rr.css_set(nodes.sname+'--compact', ui.node, ui.compact);
			};

		ui.mode == 'month' ? this.re_months(ui) : this.re_dates(ui);
		},

	set_date: function(ui, pr) {
		},

	set_value: function(ui) {
		},

	swMode: function(ui) {
		ui.mode !== 'month' ? this.re_months(ui) : this.re_dates(ui);
		},

	re: function(ui) {
		ui.mode == 'month' ? this.re_months(ui) : this.re_dates(ui);
		},

	re_months: function(ui) {
		ui.mode = 'month';
		var ds = ui.dateShow, ns = ui.nodes, x;

		ns.c_date_text.data = rr.printx(ns.vs_date, rv.month[ds.m], ds.y);
		ns.c_next_text.data = ds.y+1;
		ns.c_past_text.data = ds.y-1;

		//x = ui.dateToday;
		//ns.c_today_text.data = rr.printx(rv.sc_today, x.d, rv.month_of[x.m], x.y);

		if (ns.c_table) ns.box.removeChild(ns.c_table);

		x = new tmpl.scal_ym(ui.master, false)

		ns.box.appendChild(ns.c_table = x.node);
		},

	re_dates: function(ui) {
		ui.mode = null;
		var ds = ui.dateShow, ns = ui.nodes, x;

		ns.c_date_text.data = rr.printx(ns.vs_date, rv.month[ds.m], ds.y);
		ns.c_next_text.data = rv.month[ds.m < 11 ? ds.m + 1 : 0];
		ns.c_past_text.data = rv.month[ds.m ? ds.m - 1 : 11];

		x = ui.dateToday;
		ns.c_today_text.data = rr.printx(ns.vs_today, x.d, rv.month_of[x.m], x.y);


		if (ns.c_table) ns.box.removeChild(ns.c_table);

		x = new tmpl.scal_m(ui.master, {
			startDay: 1,
			dateA: ui.dateA,
			dateB: ui.dateA && ui.dateB,

			dateToday: ui.dateToday,
			dateActive: ui.dateActive,
			dateShow: ui.dateShow
			});

		ns.box.appendChild(
			ns.c_table = x.node
			);
		}
	});
