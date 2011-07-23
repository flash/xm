


elems.rc_areamonth = rr.new_class({
	_name: 'areaweek',
	_init: false,

	parent: rr.class_baseElement,
	interface: true,

	constructor: function (_, pr, cfg) {
		var it = this.interface;
		if (!it._init) {
			rr.extend(it, rr.expansion_event)._init = true;

			it.addEvent(rr.listeners_drag);
			it.addEvent(it.listeners_events);
		};

		this.interface.parent.call(this, _, pr, cfg);
		this.interface.factory(this, _, pr, cfg);


		if (this.node) this.node.rocketui = this;
		this.set(pr);
	},

	factory: function (ui, _, pr) {

		ui.master = _.clone(); //rr.cr(cfg.document, {'default': cfg.namespace})
		ui.cahe_item = [];
		ui.cahe_week = [];
		ui.head_cells = [];
		ui.items = [];

		ui.nodes = new tmpl.rc_areamonth(_, ui);
		ui.node = ui.nodes.node;
		ui.box = ui.nodes.box;


		ui.range_c = _('tmpl:rc_range_c', { type_week: true });
		this.init_events(ui);
	},

	prototype: {
		/* default */
		height: 'auto',
		row: 1,
		columns: 7,
		panelTop: false,
		panelLeft: false,
		calendarSource: null,
		timeStart: 0,

		/* interface */

		on_connect: function () {
			var ui = this;
			if (ui.display = ui.is_connected && !ui._hide) {
				ui.refresh(true);
			};
		}
	},


	init_events: function (ui) {
		ui.gEvent.add(ui.box, 'mousedown', function (e) {
			var n = e.srcElement || e.target, it = ui.interface, sHide;
			if (e.returnValue === false || (rr.IE ? e.button : e.which) != (rr.IE > 8 ? 0 : 1)) {
				return;
			};

			while (n) {
				switch (n._r_element) {
					case 'item': return it.ev_mousedown_item(e, ui, n.rocketui);
					case 'week': return it.ev_mousedown_week(e, ui, n.rocketui, sHide);
					case 'range': sHide = true; break;
				};

				n = n.parentNode;
			};
		});

		ui.gEvent.add(ui.node, 'dblclick', function (e) {
			var n = e.srcElement || e.target, it = ui.interface, sHide;
			//if (e.returnValue === false || (rr.IE?e.button:e.which) != 1) return;
			while (n) {
				switch (n._r_element) {
					case 'item': return it.ev_dblclick_item(e, ui, n.rocketui);
				};
				n = n.parentNode;
			};

		});



		/* range control */
		ui.gEvent.add(ui.range_c.button, 'mousedown', rr.breakEvent);
		ui.gEvent.add(ui.range_c.button, 'blur', function (e) {
			if (ui.selection_mode == 'add') ui.set({
				selectionStart: null,
				selectionEnd: null,
				selection_mode: null
			});
			/*			if (ui.selection_mode == 'add') {
			var x = ui.initEvent('selection_blur') // blur select
			};
			*/
		});

		ui.gEvent.add(ui.range_c.button, 'click', function (e) {
			rr.breakEvent(e);
			ui.set('selection_mode', 'text');

			var x;
			ui.initEvent('user_create_item', x = {
				item: {
					full_day: true,
					start: ui.selectionStart,
					end: ui.selectionEnd
				}
			});

			if (x.returnValue === false) {
				ui.set('selectionStart', null);
			};
		});


	},

	init_events_data: function (ui, v) {
		var t = this;

		ui.gEvent.add(v, 'userCreateItem', function (e) {
			t.ev_data_userCreateItem(ui, e)
		}, v);

		v = null;
	},


	set: function (ui, pr, v, pv) {
		var it = this,
		    tv = typeof v,
		    x, und;

		switch (pr) {
			case 'rows':
				if (tv != 'number') return;
				if (v < 1) { v = 1 } else if (v > 12) v = 12;
				break;

			case 'columns':
				if (v < 1 || v > 20 || tv != 'number') return;
				break;

			case 'month':
				if (typeof v != 'number') return;
				break;

			case 'localization':
				if (tv != 'object') return;
				break;

			case 'timeStart': if (v ? tv !== 'number' : v !== 0) return;
				break;



			case 'calendarSource':
				if (v === pv || (v ? tv !== 'object' : v != null)) return;
				if (pv) ui.gEvent.removeAll(pv);
				if (v) it.init_events_data(ui, v);
				break;

			case 'activeItem':
				if (!v) {
					if (!pv) return;
					v = null;
				};
				break;

			case 'height':
				if (tv != 'number' && v != 'auto') return;

				if (!ui.autoHeight && tv == 'number') {
					ui.node.style.height = v + "px";
				} else if (v == 'auto') {
					ui.node.style.height = '';
				};
				break;

			case 'rowscell':
				return;


			case 'panelLeft':
				v = !!v;
				if (pv === v) return;

				rr.css_set('rc-areamonth--pleft', ui.node, v);
				break;

			case 'panelTop':
				v = !!v;
				if (pv === v) return;

				rr.css_set('rc-areamonth--ptop', ui.node, v);
				rr.css_set('rc-areamonth-head--hide', ui.nodes.hbox, !v);
				break;

			case 'selectionStart':
			case 'selectionEnd':
				if (v !== null && tv != 'number') return;
				break;

			case 'selection_dn':
			case 'selection_stop': v = !!v;
				break;

			case 'selection_mode':
				if (!v) { v = null } else switch (v) {
					case 'add': case 'text': break;
					default: return;
				};
				break;

			case 'selection_ps':
				if (!v) { v = null } else switch (v) {
					case 'center': case 'right': break;
					default: return;
				};
				break;

			case 'selection_text':
				if (tv != 'string' && tv != 'number') return;
				break;
		};

		return v;
	},

	setItemTimeStart: function (ui) {
		return;
		var a = ui.items,
		    st = ui.timeStart,
		    i = 0, l, n, sp = ui.columns * 1440;

		if (!a || !st) return;

		while (n = a[i]) {
			if (i++) st += sp;

			n.set('timeStart', st);
		};
	},


	refresh: function (ui, ch, rz) {
		if (!ui.display) return false;
		if (ui.z_resize) ui.z_resize = !(rz = true);
		var it = this, nodes = ui.nodes, v, i, x, und;


		if (rz || ch.columns) {
			v = ui.columns;
			x = ui.nodes.head.cells.length;
			if (v > x) {
				// добовляем
				while (x++ < v) {
					i = ui.master('tmpl:rc_areamonth_head_cell');
					ui.nodes.head.appendChild(i.node);
					ui.head_cells.push(i);
				};

			} else
				if (v < x) {
					// удаляем
					x = ui.nodes.head;
					while ((i = x.cells.length) > v) {
						i = x.cells[i - 1];
						rr.removeNode(i);
					};

					ui.head_cells.length = v;
				};
		};

		if (rz || ch.columns || ch.timeStart) ui.z_panelTop_change = true;
		if (ui.panelTop && ui.z_panelTop_change) {
			ui.z_panelTop_change = false;
			v = rcalendar.date_tm(ui.timeStart, 0, 0, 0, 1).day;

			var lc = rv.aweek;
			for (i = 0; x = ui.head_cells[i++]; ) {
				if (x._text != lc[v]) {
					x.text.data = x._text = lc[v];
				};

				if (++v > 6) v = 0;
			};
		};

		if (rz || ch.panelTop) {
			ui._boxOffsetTop = ui.box.offsetTop;
		};

		var h, hx;
		if (rz || ch.height || ch.rows) {
			v = ui.height;
			i = 0;
			if (typeof v == 'number') {
				v -= ui._boxOffsetTop || 0;
				if (!v || v < 30) v = 30;

				// set value items
				i = ui.rows;
				x = v % i;
				v = (v - x) / i;
				hx = x;
			};

			h = v;
		};



		if (rz || ch.rows) {
			i = ui.items.length;
			v = ui.rows;

			if (v > i) {
				// добовляем
				while (v > ui.items.length) {
					ui.items.push(
						ui.master('ui:rc_areaweek', {
							colums: ui.columns,
							parent: ui
						})
						);
				};

			} else
				if (v < i) {
					// удаляем
					while (v < i--) {
						x = ui.items.pop();
						rr.removeNode(x.node);
					};

				};
		};


		var prm = {
			calendarSource: ui.calendarSource,
			columns: ui.columns,
			selectionStart: ui.selectionStart,
			selectionEnd: ui.selectionEnd,
			activeItem: ui.activeItem
		};

		if (rz || ch.activeItem || ch.rows) {
			prm.activeItem = ui.activeItem;
		};
		/*
		if (rz || ch.selectionStart || ch.selectionEnd || ch.rows) {			prm.selectionStart = ui.selectionStart;
		prm.selectionEnd = ui.selectionEnd;
		};
		*/
		if (ui.autoHeight && typeof h == 'number') {
			ui.height = ui.node.offsetHeight;
		};


		var xr = ui.range_c, sA, sB;
		v = ui.columns;

		for (i = 0; x = ui.items[i]; i++) {  // weeklist
			prm.height = h;
			if (hx && hx--) prm.height++;
			prm.timeStart = ui.timeStart + i * 1440 * v;
			x.set(prm);
			//console.dir(prm)

			if (x.selection_show) {
				if (!sA) sA = x;
				sB = x;
			};
		};

		if (ch.selection_text) {
			//xr.text.data = ui.selection_text;
		};

		v = 'selection_ps';
		if (ch[v]) {
			//rr.css_remove_(xr.sname+'--ps-', xr.node);
			rr.css_set_(xr.sname + '--ps-', xr.node);
			if (ui[v]) rr.css_add(xr.sname + '--ps-' + ui[v], xr.node);
		};

		v = 'selection_mode';
		if (ch[v]) {
			//rr.css_remove_(xr.sname+'--m-', xr.node);
			rr.css_set_(xr.sname + '--m-', xr.node);

			if (!ui[v]) {
				if (xr._parent) rr.removeNode(xr.node);
				xr._parent = null;
			}
			else rr.css_add(xr.sname + '--m-' + ui[v], xr.node);
		};



		if (ui.selection_mode && sA) {
			x = ui.selection_ps ? sB : sA;
			x = x.nodes.range_node;

			if (x && xr._parent !== x) {
				x.appendChild(xr.node);
				xr._parent = x;
			};
		};

		v = 'selection_mode';
		if (ch[v] && ui[v] == 'add') {
			xr.button.focus();
		};

		if (ch.selectionStart || ch.selectionEnd) {
			ui.initEvent('range_change', {
				start: ui.selectionStart,
				end: ui.selectionEnd
			});
		};

		ui.initEvent_('change', [ch]);
	},

	ev_data_userCreateItem: function (ui, e) {
		ui.set({
			activeItem: e.id,
			selectionStart: null,
			selectionEnd: null
		});
	},


	ev_mousedown_item: function (e, ui, xd, xw) {
		if (!e || !xd || !(xw = xd.parent)) return;
		rr.breakEvent(e);

		ui.set('activeItem', xd.item.id);

		var ps = rr.getAbsolutePos(ui.box, true), oL = xw.box.offsetLeft, oT = ui.box.offsetTop, prm;

		prm = {
			ui: ui,
			sA: xd.item.start,
			sB: xd.item.end,
			moveItem: xd.item,

			rows: ui.rows,
			cols: ui.columns,
			_twc: 1440 * ui.columns,
			xBox: ps.x,
			yBox: ps.y,
			wBox: xw.node.clientWidth,
			wyList: []
		};

		prm.px2cn = ui.columns / prm.wBox; //prm._twc

		for (var i = 0, x; x = ui.items[i]; i++) {
			prm.wyList.push(x.node.offsetTop - oT);
			if (x == xw) prm.dyStart = i;
		};

		prm.ui.set({
			selection_mode: null,
			selectionStart: null,
			selectionEnd: null
		});


		this.initEvent('startDrag', {
			name: 'item_move',
			cursor: 'move',
			clearRange: true,
			deltaDrag: 5,
			autoScroll: false,
			mouseEvent: e
		}, prm);
	},

	ev_dblclick_item: function (e, ui, x) {
		ui.initEvent('item_click', {
			item: x.item
		});
		/*		ui.initEvent('item_click', {			item: x.item
		});		*/
	},

	ev_mousedown_week: function (e, ui, xw, sHide) {
		ui.set('activeItem', null);
		if (!e || !xw) return;
		rr.breakEvent(e);


		var ps = rr.getAbsolutePos(ui.box, true),
		oL = xw.box.offsetLeft,
		oT = ui.box.offsetTop,
		cwh = rr.getClientWH(ui.ownerDocument),
		prm;

		prm = {
			ui: ui,
			select_ok: !sHide,
			rows: ui.rows,
			cols: ui.columns,
			_twc: 1440 * ui.columns,
			xBox: ps.x,
			yBox: ps.y,
			wBox: xw.node.clientWidth,
			wyList: []
		};

		prm.px2cn = ui.columns / prm.wBox; //prm._twc

		var x = Math.floor((e.clientX + cwh.sl - prm.xBox) * prm.px2cn);
		prm.dxStart = x < 0 ? 0 : x >= prm.cols ? prm.cols - 1 : x;

		prm.sA = xw.timeStart + prm.dxStart * 1440;
		prm.sB = prm.sA + 1440;

		for (var i = 0, x; x = ui.items[i]; i++) {
			prm.wyList.push(x.node.offsetTop - oT);
			if (x == xw) prm.dyStart = i;
		};


		prm.ui.set({
			selection_mode: null,
			selection_ps: 'center',
			selectionStart: sHide ? null : prm.sA,
			selectionEnd: sHide ? null : prm.sB
		});

		this.initEvent('startDrag', {
			name: 's_new',
			cursor: 'default',
			clearRange: true,
			deltaDrag: sHide ? 5 : 3,
			overDrag: !sHide,
			autoScroll: false,
			mouseEvent: e
		}, prm);

	},


	listeners_events: {
		//item_move
		item_move_dragstart: function (e, prm) {
			if (typeof prm.dxStart != 'number') {
				var x = Math.floor((e.stX - prm.xBox) * prm.px2cn);
				prm.dxStart = x < 0 ? 0 : x >= prm.cols ? prm.cols - 1 : x;
			};
		},

		item_move: function (e, prm) {
			var x = Math.floor((e.psX - prm.xBox) * prm.px2cn), bk = x < 0, dl = 0;
			prm.dxEnd = x < 0 ? 0 : x >= prm.cols ? prm.cols - 1 : x;


			x = e.psY - prm.yBox;

			prm.dyEnd = prm.dyStart;
			if (x >= 0)
				for (var i = 0, l = prm.wyList.length; i < l; i++) {
					if (x < prm.wyList[i]) break;
					prm.dyEnd = i;
				};


			if (prm.posNew = x >= 0 && !bk) {
				dl = prm.dxEnd - prm.dxStart;
				dl += (prm.dyEnd - prm.dyStart) * prm.cols;
			};


			prm.nA = prm.sA + dl * 1440;
			prm.nB = prm.sB + dl * 1440;

			prm.ui.set({
				selection_mode: null,
				selectionStart: prm.nA,
				selectionEnd: prm.nB
			});
		},

		item_move_dragend: function (e, prm) {
			prm.ui.set({
				selectionStart: null,
				selectionEnd: null
			});

			if (prm.posNew) {
				prm.ui.calendarSource.set({
					id: prm.moveItem.id,
					start: prm.nA,
					end: prm.nB
				});
			};
		},


		s_new: function (e, prm) {
			prm.select_ok = true;

			var x = Math.floor((e.psX - prm.xBox) * prm.px2cn), bk = x < 0, dl = 0;
			prm.dxEnd = x < 0 ? 0 : x >= prm.cols ? prm.cols - 1 : x;

			x = e.psY - prm.yBox;

			prm.dyEnd = 0;
			if (x >= 0)
				for (var i = 0, l = prm.wyList.length; i < l; i++) {
					if (x < prm.wyList[i]) break;
					prm.dyEnd = i;
				};


			dl += prm.dxEnd - prm.dxStart;
			dl += (prm.dyEnd - prm.dyStart) * prm.cols;

			prm.nA = dl < 0 ? prm.sA + dl * 1440 : prm.sA;
			prm.nB = dl > 0 ? prm.sB + dl * 1440 : prm.sB;

			prm.ui.set({
				selection_ps: !dl ? 'center' : dl > 0 ? 'right' : null,
				selection_mode: null,
				selectionStart: prm.nA,
				selectionEnd: prm.nB
			});
		},

		s_new_dragend: function (e, prm) {
			return;
			prm.ui.set({
				selection_mode: 'add'
				//selectionStart: null,
				//selectionEnd: null
			});
		},

		s_new_end: function (e, prm) {
			if (!prm.select_ok) return;
			prm.ui.set({
				selection_mode: 'add'
			});
		}
	}
});

