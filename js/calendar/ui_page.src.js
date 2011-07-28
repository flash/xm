
elems.rc_page = rr.new_class({
	parent: rr.class_baseElement,
	interface: true,

	constructor: function(_, pr, cfg) {
		this.interface.parent.call(this, _, pr, cfg);
		this.interface.factory(this, _, pr);

		if (this.node) this.node.rocketui = this;
		//this.set(pr);
		},

	factory: function(ui, _, pr) {
		ui.master = _.clone();

		ui.nodes = _.tmpl('tmpl:rc_page', {
			calendarSource: pr.calendarSource,
			timeStart: pr.timeStart
			});

		ui.sidebar = _.tmpl('tmpl:rc_sidebar', {
			calendarSource: pr.calendarSource,
			timeStart: pr.timeStart
			})

		ui.node = ui.nodes.node;
		ui.box = ui.nodes.box;

		ui.pid = 'calendar'; // индификатор группы

		this.init_event(ui);
		},


	prototype: {
		on_connect: function() {
			var ui = this;

			if (ui.display = ui.is_connected && !ui.hide) {
				//ui.refresh(true);
				};

			ui.nodes.calendar.ev_connect(ui.display, false);
			//ui.nodes.p_days.ev_connect(ui.display, false);
			}
		},

	init_event: function(ui) {
		}
	});


	elems.rc_calendar = rr.new_class({
		parent: rr.class_baseElement,
		interface: true,

		constructor: function (_, pr, cfg) {
			this.interface.parent.call(this, _, pr, cfg);
			this.interface.factory(this, _, pr);

			if (this.node) this.node.rocketui = this;
			this.set(pr);
		},

		factory: function (ui, _, pr) {
			ui.master = _.clone();

			ui.nodes = _.tmpl('tmpl:rc_calendar', {
				calendarSource: pr.calendarSource,
				timeStart: pr.timeStart
			});

			ui.node = ui.nodes.node;

			ui._xdate = new rcalendar.xdate(0, 60000, pr.timeStart || 0);

			this.init_event(ui);
		},


		prototype: {
			on_connect: function () {
				var ui = this, ch = ui._changes || false;

				if (ui.display = ui.is_connected && !ui.hide) {
					ui.refresh(true);
				};

				ui.nodes.p_month.ev_connect(ui.display, false);
				ui.nodes.p_days.ev_connect(ui.display, false);
			},

			mode: 'week',
			mode_month: { panelTop: false, panelLeft: true, rows: 1, columns: 7, height: 150, hide: false },
			mode_day: { panelTop: false, panelLeft: true, height: 'auto', columns: 7, hide: false },

			goNextDay: function () {
			},

			goNext: function () {
			},

			goPast: function () {
			}
		},

		set: function (ui, pr, v, pv) {
			var it = this, tv = typeof v, x, u;

			switch (pr) {
				case 'mode':
					switch (v) {
						case 'day':
						case 'day4':
						case 'week':
						case 'month':
						case 'list':
							break;

						default: return;
					};

					switch (ui.mode) {
						case 'day':
						case 'day4':
						case 'week':
							ui.mode_month.height = ui.nodes.p_month.height;
							break;
						//default:       
					};
					break;

				case 'timeActive': // время фокуса
				case 'timeStart': // начала интервала, только чтение
				case 'timeEnd': // конец интервала, только чтение
					if (tv != 'number') return;
					break

				case 'calendarSource':
					if (v === pv || (v ? tv !== 'object' : v != null)) return;
					if (pv) ui.gEvent.removeAll(pv);
					if (v) it.init_events_data(ui, v);

					break;
			};

			return v;
		},


		refresh: function (ui, ch, rz) {
			if (!ui.display) return false;
			if (ui.z_resize) ui.z_resize = !(rz = true);
			var it = this, nodes = ui.nodes, v, i, x, u;

			var xM = {}, xD = {}, dx = ui._xdate;

			v = ui.timeActive;
			if (!v && v !== 0) ui.timeActive = v = ui.timeStart;
			if (!v && v !== 0) return false;

			if (rz || ch.timeActive) {
				dx.setTime(v);
			}
			else if ((ch.timeStart || ch.timeStart) && (ui.timeStart > v || ui.timeEnd < v)) {
				dx.setTime(ui.timeActive = ui.timeStart);
			};

			if (rz || ch.calendarSource) {
				xD.calendarSource = xM.calendarSource = ui.calendarSource;
			};

			if (rz || ch.mode) {
				var mode = v = ui.mode || 'week';

				rr.extend(xM, ui.mode_month);
				rr.extend(xD, ui.mode_day);

				switch (v) {
					case 'day':
						xM.columns = 1;
						xD.columns = 1;
						break;
					//6       

					case 'day4':
						xM.columns = 5;
						xD.columns = 5;

						//dx.setTime(ui.timeStart);
						break;

					case 'week':
						//ui.timeActive = ui.timeStart;
						break;

					case 'month':
						var cw = rr.getClientWH(this.ownerDocument, true);
						xM.height = cw.h > 800 ? cw.h - rr.getAbsolutePos(nodes.p_month.node).y - 10 : 700;
						if (xM.height > 1500) xM.height = 1500;
						if (!xM.height) xM.height = 700;

						//xM.height = (cw.h-100)||500; // - - this.node.offsetHeight;

						xM.panelTop = true;
						xM.panelLeft = false;
						//xM.height = 700;
						xM.rows = 6;

						xD.hide = true;
						xD.panelLeft = false;
						break;

					case 'list':
						xM.panelLeft = false;
						xM.height = 'auto'; //1300
						xM.columns = 1;
						xM.rows = 10;

						xD.hide = true;
						break;
					default: return;
				};

				ui.columns = xM.columns;

				ui.mode = mode;
				rr.css_set('rc-page-toolbar--pleft', nodes.toolbar, xM.panelLeft);
				rr.css_set_('rc-page--mode-', ui.node, mode);

				xM.selectionStart = xM.selectionEnd = xD.selectionStart = xD.selectionEnd = null;
			};

			if (rz || ch.timeActive || ch.mode) {
				var tx, xSt, xEn;


				//x = dx.getTime();

				switch (ui.mode) {
					case 'day':
						x = dx.save().s00().getTime();
						v = dx.get();
						tx = v.date + " " + rv.month_of[v.month] + " " + v.year;
						dx.re();
						break;

					case 'day4':
						//var day = dx.save().getDay();
						//if (xM.columns < day) {
						//} else dx.sDay(1);

						x = dx.save().s00().getTime();

						xSt = dx.get();
						xEn = dx.next(0, 0, (typeof xM.colums == 'number' ? xM.colums : nodes.p_month.columns || 1) - 1).get();
						tx = (xSt.date + "/" + xSt.month + "/" + xSt.year) + " - " + (xEn.date + "/" + xEn.month + "/" + xEn.year);

						dx.re();
						break;

					case 'week':
						x = dx.save().sDay(1).s00().getTime();
						var am = rv.month_of, A = dx.get(1, 1, 1), B, v;

						v = (typeof xM.colums == 'number' ? xM.colums : nodes.p_month.columns || 1) * (typeof xM.rows == 'number' ? xM.rows : nodes.p_month.rows || 1);
						B = dx.next(0, 0, v - 1).get(1, 1, 1);
						dx.re();

						tx = rr.ct(' ',
					A.date,
					A.month != B.month && am[A.month],
					A.year != B.year && A.year,
					"\u2014 " + B.date + " " + am[B.month] + " " + B.year
					);
						break;

					case 'month':
						v = dx.save().getDay();
						dx.save().set(null, null, 1);
						xM.rows = Math.ceil((dx.getDay() - 1 + dx.getMaxDate()) / 7);
						x = dx.sDay(1).s00().getTime();
						dx.re();

						v = dx.get();
						tx = rv.month[v.month] + " " + v.year;


						break;

					default: x = ui.timeStart;
				};

				xM.timeStart = xD.timeStart = ui.timeStart = x;
				if (tx) nodes.tx_date.data = tx;
			};

			ui.timeEnd = ui.timeStart + 1440 * (ui.columns || 1) * (xM.rows || nodes.p_month.rows || 1);




			for (i in xM) {
				if (!rr.Opera) nodes.p_month.set(xM);
				nodes.p_days.set(xD);
				if (rr.Opera) nodes.p_month.set(xM);

				if (ui.parent) {
					ui.parent.timeSync({
						timeStart: ui.timeStart,
						timeEnd: ui.timeEnd
					});
				};

				break;
			};
		},

		init_event: function (ui) {
			var ns = ui.nodes, x, c, u;


			// user create item
			x = function (e) {
				if (ui.parent) ui.parent.edit_item_popup(e);
			};

			rr.addHandler(ui.nodes.p_days, 'user_create_item', x);
			rr.addHandler(ui.nodes.p_month, 'user_create_item', x);
			rr.addHandler(ui.nodes.p_days, 'item_click', x);
			rr.addHandler(ui.nodes.p_month, 'item_click', x);

			// change sync
			var stop_sync, x = function (ch) {
				if (stop_sync) return;
				var t = this, x, v;

				if (ch.activeItem) {
					v = t.activeItem;
					stop_sync = true;

					x = ui.nodes.p_days;
					if (x != t) x.set('activeItem', v);

					x = ui.nodes.p_month;
					if (x != t) x.set('activeItem', v);
					stop_sync = false;
				};
			};

			rr.addHandler(ui.nodes.p_days, 'change', x);
			rr.addHandler(ui.nodes.p_month, 'change', x);


			if (x = ui.nodes.p_month) {
				ui.appendChild(x, false); // подключаем но не трогаем расположение в древе

				rr.addHandler(x.node, 'mousedown', function (e) {
					var x = ui.nodes.p_days;

					if (x && x.selectionStart !== null) {
						x.set('selectionStart', null);
					};
				});
			};

			if (x = ui.nodes.p_days) {
				ui.appendChild(x, false); // подключаем но не трогаем расположение в древе

				rr.addHandler(x.node, 'mousedown', function (e) {
					var x = ui.nodes.p_month;
					if (x && x.selectionStart !== null) {
						x.set('selectionStart', null);
					};
				});
			};

			x = null;

			//resizer areamonth
			ui.gEvent.add(ui.nodes.resizer, 'mousedown', function (e) {
				rr.breakEvent(e);

				var uim = ui.nodes.p_month, sh = uim.height;

				var drag = new rr.ui.class_drag({
					move_dragstart: function () {
					},

					move_dragend: function () {
					},

					move: function (od) {
						var dX = od.stX - od.psX,
					    dY = od.stY - od.psY,
					    h = sh - dY;

						if (h < 10) h = 10;


						uim.set('height', h);
						//ui.set('rows', Math.round(h/150)||1);
					}
				});

				drag.initEvent('startDrag', {
					event: e,
					autoScroll: false
				});
			});

			ui.gEvent.add(ui.nodes.b_past, 'click', x = function (e) {
				ui.interface.ev_goPast(ui);
			});

			if (rr.IE) ui.gEvent.add(ui.nodes.b_past, 'dblclick', x);

			ui.gEvent.add(ui.nodes.b_next, 'click', x = function (e) {
				ui.interface.ev_goNext(ui);
			});
			if (rr.IE) ui.gEvent.add(ui.nodes.b_next, 'dblclick', x);

			ui.gEvent.add(ui.nodes.b_today, 'click', function (e) {
				ui.interface.ev_today(ui);
			});


			ui.gEvent.add(ui.nodes.b_date, 'click', function (e) {
				rr.breakEvent(e);
				ui.interface.ev_bDate(ui);
			});

			x = u;
		},

		init_events_data: function (ui, v) {
		},


		ev_goNext: function (ui) {
			var dx = ui._xdate, ns = ui.nodes, x = 1;

			switch (ui.mode) {
				case 'week': x = 7
				case 'day':
					dx.next(0, 0, x);
					break;

				case 'month':
					var D = dx.getDate();
					dx.set(null, null, 1).next(0, 1).set(null, null, 'end');
					if (dx.getDate() > D) dx.set(null, null, D);
					break;

				default:
					dx.next(0, 0, Math.floor((ns.p_month.rows || 1) * (ns.p_month.columns || 1)));
			};

			ui.set('timeActive', dx.getTime());
		},

		ev_goPast: function (ui) {
			var dx = ui._xdate, ns = ui.nodes, x;

			switch (ui.mode) {
				case 'week':
					dx.next(0, 0, -7);
					break;

				case 'month':
					var D = dx.getDate();
					dx.set(null, null, 0);
					if (dx.getDate() > D) dx.set(null, null, D);
					break;

				default:
					dx.next(0, 0, -Math.floor((ns.p_month.rows || 1) * (ns.p_month.columns || 1)));
			};

			ui.set('timeActive', dx.getTime());
		},

		ev_today: function (ui) {
			var dx = ui._xdate, x;
			x = (new Date()).getTime() / dx.time_step;



			dx.setTime(Math.floor((new Date()).getTime() / dx.time_step)).s00();
			ui.set('timeActive', dx.getTime());
		},

		ev_bDate: function (ui) {
			var x, ow, xc, md, u;

			if (ow = ui._wlayout_date) {
				ow.close();
				ow.gEvent.removeAll();
				ui._wlayout_date = null;
				return;
			};


			x = ui._xdate.get(1, 1, 1);
			ow = _('ui:wlayout',
			{
				visibility: false,
				left: 0,
				top: 0,
				width: 350,
				height: null
			},

			xc = _('rc:mcal_one', {
				startDay: 1,
				todayDate: { y: 2010, m: 2, d: 26 },
				activeDate: { y: x.year, m: x.month, d: x.date }
			})
			);

			ow.gEvent.add(xc, 'uselect', function (d, m) {
				ui._wlayout_date = null;
				ow.close();
				ui.set('timeActive', ui._xdate.set(d.y, d.m, d.d).getTime());
			});

			x = rr.getAbsolutePos(ui.nodes.b_date);
			ow.set({
				visibility: true,
				top: x.y + ui.nodes.b_date.offsetHeight + 3,
				left: Math.floor(x.x + ui.nodes.b_date.offsetWidth / 2 - ow.width / 2)
			});


			ow.gEvent.add(ow.node, 'mousedown', x = function () { md = true });
			ow.gEvent.add(ui.nodes.b_date, 'mousedown', x);
			x = u;

			ow.gEvent.add(ui.ownerDocument, 'mousedown', function () {
				if (!md) {
					ui._wlayout_date = null;

					ow.close();
					ow.gEvent.removeAll();
				};

				md = false;
			});

			ui._wlayout_date = ow;
		}

	});




elems.rc_calendar_wrap = rr.new_class({
	parent: rr.class_baseElement,
	interface: true,

	constructor: function(_, pr, cfg) {
		this.interface.parent.call(this, _, pr, cfg);
		this.interface.factory(this, _, pr, cfg);

		if (this.node) this.node.rocketui = this;
		this.set(pr);
		},

	factory: function(ui, _, pr, cfg) {
		ui.master = _.clone();
		ui.nodes = new tmpl.rc_calendar(_, false);

		ui.node = ui.nodes.node;
		ui.box = ui.nodes.box;
		ui.pagesList = {};

		ui.toolbar = ui.nodes.toolbar;
		ui.nodes.toolbar = null;

		ui.pagesList['main'] = _('ui:rc_page_main');
		ui.pagesList.main.pageName = 'main';

		ui.set(pr, false);


		if (!ui.pageActive) {
			ui.pageActive = ui.pagesList.main;
			ui.pageName = ui.pageActive.pageName = 'main';
			};

		if (!ui.timeStart && ui.timeStart !== 0) {
			ui.timeStart = new rcalendar.xdate().s00().getTime();
			ui.timeEnd = null;
			};

		if (ui.timeEnd < ui.timeStart) ui.timeEnd = null;


		ui.toolbar.addEvent('swith mode', function(mode) {
			if (!mode) return;

			switch (mode) {
				case 'day':
				case 'day4':
				case 'week':
				case 'month':
				case 'list':

				if (ui.pageName !== 'main') ui.set('pageActive', 'main');
				if (ui.page.mode != mode) ui.page.set('mode', mode);
				break;

				default: ui.set('pageActive', mode);
				}
			});


		ui.popup_itemEdit = _('ui:rc_user_new_item', {
			calendarSource: ui.calendarSource
			});
		},

	prototype: {
		on_connect: function() {
			var ui = this;
			if (ui.display = ui.is_connected && !ui.hide && !ui._hide) {
				ui.refresh(true);
				};
			},

		// перевести фокус на дату х
		set_datePoint: function(y, m, d) {
			},

		edit_item_popup: function(e) {
			var ui = this, pp = ui.popup_itemEdit, pr = e.item;

			pp.show({
				complit: e.complit,
				calendarSource: ui.calendarSource,

				item: {
					id: pr.id,
					text: pr.text,
					calendar: pr.calendar,
					start: pr.start,
					end: pr.end
					}
				});
			},


		edit_item_page: function() {
			},


		clearSelection: function() {
			},

		timeSync: function(p) {
			if (!p) return;
			var ch={}, u;

			if (p.timeStart !== u) {
				this.timeStart =  p.timeStart;
				ch.timeStart = true;
				};

			if (p.timeEnd !== u) {
				this.timeEnd =  p.timeEnd;
				ch.timeEnd = true;
				};

			this.initEvent('change', ch);
			}
		},


	set: function(ui, pr, v, pv) {
		var it = this, tv = typeof v, x, u;

		switch (pr) {
			case 'mode':
			break;

			case 'pageActive':
			if (tv === 'string') {
				if (ui.pageName == v || ui.pageActive && ui.pageActive.pageName == v) return;

				if (x = ui.pagesList[v]) {
					return x;
					}

				switch(v) {
					case 'main':
						if (x = ui.master('ui:rc_page_main')) {
							x.pageName = v
							};

						return x||u;
						break;
					};

				return x||u;
				};

			if (tv === 'object' && v !== ui.page && v.nodeType) break;
			return;

			case 'timeStart':
			case 'timeEnd':
			case 'timeActive':
			if (v ? tv != 'number' : v!=0) return;
			break;

			case 'calendarSource':
				if (tv != 'object') return;
				break;
			};

		return v;
		},

	refresh: function(ui, ch, rz) {
		if (!ui.display) return false;
		//if (ui.z_resize) ui.z_resize = !(rz = true);

		var it = this, ns = ui.nodes, v, i, x, u, xp = {};

		if (rz || ch[v='calendarSource']) {
			x = xp[v] = ui.calendarSource;
			if (ui.popup_itemEdit) {
				ui.popup_itemEdit[v] = x;
				};
			};

		if (rz || ch.timeStart) xp.timeStart = ui.timeStart;
		if (rz || ch.timeEnd) xp.timeEnd = ui.timeEnd;

		if (rz || ch.pageActive) {
			v = ui.pageActive;

			if (ui.page && ui.page.ev_close) {
				ui.page.ev_close();
				};

			if (v.nodeType <0 && typeof v.set == 'function') {
				v.set({
					calendarSource: ui.calendarSource,
					timeStart: ui.timeStart
					//timeEnd: ui.timeEnd,
					}, false);
				};

			if (ui.page) ui.removeChild(ui.page);
			ui.pageName = (ui.page = v).pageName;
			ui.appendChild(v);
			};

		for(i in xp) {
			x = ui.page;
			if (x && typeof x.set == 'function') x.set(xp);
			break;
			};

		ui.initEvent('change', ch, rz);
		}

	});


elems.rc_toolbar = rr.new_class({
	parent: rr.class_baseElement,
	interface: true,

	constructor: function(_, pr, cfg) {
		this.interface.parent.call(this, _, pr, cfg);
		this.interface.factory(this, _, pr);

		if (this.node) this.node.rocketui = this;
		this.set(pr);
		},

	factory: function(ui, _, pr) {
		ui.nodes = new tmpl.rc_toolbar(_, pr);
		ui.node = ui.nodes.node;

		this.init_event(ui);
		},

	init_event: function(ui) {
		ui.gEvent.add(ui.nodes.tb_top, 'click', function(e) {
			return rr.breakEvent(e);
			});

		ui.gEvent.add(ui.nodes.tb_top, 'mousedown', function(e) {
			var n = rr.css_parent('rc-toolbar-b', e.target||e.srcElement, true);


			if (n && n.cm_name) {
				ui.initEvent('swith mode', n.cm_name);
				var s = ui.nodes.snm+"-b--active";
				rr.css(n).add(s);

				rr.css(n).near(s, function(x) {
					this.remove(s);
					}).add(s);
				};
			})

		ui.gEvent.add(ui.nodes.tb_top, 'click', function(e) {
			rr.breakEvent(e);
			});

		}
	});


