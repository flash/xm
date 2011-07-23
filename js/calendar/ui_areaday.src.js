

elems.rc_areaday = rr.new_class({
	_name: 'areaday',

	parent: rr.class_baseElement,
	interface: true,

	constructor: function (_, pr, cfg) {
		if (!this.interface.__init_) {
			rr.extend(this.interface, rr.expansion_event).__init_ = true;
		};

		this.interface.parent.call(this, _, pr, cfg);
		this.interface.factory(this, _, pr, cfg);

		if (this.node) this.node.rocketui = this;
		this.set(pr);
	},

	factory: function (ui, _, pr) {
		this.addEvent(rr.listeners_drag);
		this.addEvent(this.listeners_events);

		var t = this;

		// default values
		ui.master = _.clone();
		ui.cbox = [];

		ui.nodes = new tmpl.rc_areaday(_, { ui: ui });

		ui.node = ui.nodes.area;
		if (rr.IE) ui.node.onselectstart = rr.breakEvent;

		ui.range_c = new tmpl.rc_range_c(_, false);

		t.init_events(ui);
	},

	prototype: {
		/* values */
		z_resize: true,
		height: 'auto',
		columns: 1,
		panelLeft: true,
		timeStart: 0,
		dtime: 5, // отображаемое смешение во времени дня
		boxHeight: 600,

		on_connect: function () {
			var ui = this;
			if (ui.display = ui.is_connected && !ui.hide && !ui._hide) {
				ui.refresh(true);
			};
		}
	},

	init: function (ui) {
		ui.gEvent.add(ui.box, 'mousedown', function (e) {
		});
	},

	init_events: function (ui) {
		ui.gEvent.add(ui.nodes.timeResizer, 'mousedown', function (e) {
			var bxh = ui.boxHeight, sdt = ui.dtime;
			rr.css_add('rc-areaday-resizerAB--darg', ui.nodes.timeResizerA);
			rr.css_add('rc-areaday-resizerAB--darg', ui.nodes.timeResizerB);
			rr.css_add('rc-areaday-resizer--darg', ui.nodes.timeResizer);

			var drag = new rr.ui.class_drag({
				move_dragstart: function () {
					//rr.css_add('rc-areaday-resizerAB--darg', ui.nodes.timeResizerA);
					//rr.css_add('rc-areaday-resizerAB--darg', ui.nodes.timeResizerB);
					//rr.css_add('rc-areaday-resizer--darg', ui.nodes.timeResizer);
				},

				move_dragend: function () {
					rr.css_remove('rc-areaday-resizerAB--darg', ui.nodes.timeResizerA);
					rr.css_remove('rc-areaday-resizerAB--darg', ui.nodes.timeResizerB);
					rr.css_remove('rc-areaday-resizer--darg', ui.nodes.timeResizer);
				},

				move: function (od) {
					var dX = od.stX - od.psX,
						dY = od.stY - od.psY,
						x = sdt + Math.round(dY / bxh * 24);



					if (x > 11) {
						x = 11;
					} else if (x < 0) x = 0;


					ui.set('dtime', x);
					//ui.set('rows', Math.round(h/150)||1);
				}
			});

			if (typeof bxh == 'number')
				drag.initEvent('startDrag', {
					//object: true,
					//cursor: 'move',
					//itime: rr.Opera ? null : 30,
					autoScroll: false,
					event: e
				});


			return rr.breakEvent(e);
		});


		ui.gEvent.add(ui.node, 'dblclick', function (e) {
			var n = e.srcElement || e.target, it = ui.interface, sHide;
			//if (e.returnValue === false || (rr.IE?e.button:e.which) != 1) return;
			while (n) {
				switch (n._r_element) {
					case 'rc_day_item': return it.ev_dblclick_item(e, ui, n.rocketui);
				};
				n = n.parentNode;
			};

		});

		ui.gEvent.add(ui.node, 'mousedown', function (e) {
			var n = e.srcElement || e.target, it = ui.interface, sHide, x, xe;
			if (e.returnValue === false || (rr.IE ? e.button : e.which) != (rr.IE > 8 ? 0 : 1)) return;



			while (n) {
				switch (n._r_element) {
					case 'rc_day_box': return it.ev_start_range(e, ui);

					case 'rc_day_item': return it.ev_mousedown_item(e, ui, n.rocketui);

					case 'rc_day_item_rzA': xe = 'ev_mousedown_item_rzA';
					case 'rc_day_item_rzB': xe = xe || 'ev_mousedown_item_rzB';
						while (n = n.parentNode)
							if (n._r_element == 'rc_day_item')
								return it[xe](e, ui, n.rocketui);
						return;
				};

				n = n.parentNode;
			};

		});

		/* range control */
		ui.gEvent.add(ui.range_c.button, 'mousedown', rr.breakEvent);
		ui.gEvent.add(ui.range_c.button, 'blur', function (e) {
			if (ui.selection_mode == 'add') {
				ui.interface.ev_selection_blur(ui);
				ui.initEvent('selection_blur') // blur select
			};
		});

		ui.gEvent.add(ui.range_c.button, 'click', function (e) {
			rr.breakEvent(e);

			var A = ui.selectionStart, B = ui.selectionEnd;
			ui.set({
				selectionStart: null,
				selectionEnd: null,
				selection_mode: 'text'
			});

			ui.initEvent('user_create_item', {
				item: {
					start: A,
					end: B
				}
			});
		});


	},

	init_events_data: function (ui, v) {
		var t = this;
		ui.gEvent.add(v, 'change', function (e) {
			t.ev_data_change(ui, e);
		}, v);

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
			case 'dtime':
				if (typeof v != 'number' || v > 11 || v < 0) return;
				break;

			case 'timeStart': if (typeof v !== 'number') return;
				break;

			case 'hide': v = !!v;
				if (pv === v) return;
				ui.node.style.display = v ? 'none' : '';
				ui.display = ui._display && !v;
				break;

			case 'calendarSource':
				if (v === pv || v && tv != 'object') return;
				if (pv) ui.gEvent.removeAll(ui.calendarSource);
				if (v) it.init_events_data(ui, v);
				break;

			case 'panelLeft': v = !!v;
				if (pv === v) return
				break;

			case 'selectionStart': case 'selectionEnd':
				if (tv != 'number' && v !== null) return;
				break;

			case 'activeItem': if (!v) v = null;
				break;


			case 'selection_dn':
			case 'selection_stop': v = !!v;
				break;

			case 'selection_mode':
				if (!v) { v = null }
				else switch (v) {
					case 'add': case 'text': break;
					default: return;
				};

				break;

			case 'columns':

				if (typeof it[x = 's_' + pr] != 'function') return;
				v = it[x](ui, v, pv);
				break;

			default: return;
		};

		return v;
	},

	s_columns: function (ui, v, pv) {
		if (typeof v != 'number' || v > 7 || v < 1 || ui.cbox.length == v) return;
		var t = this, vs = ui;

		ui.columns = v;
		//ui.timeEnd = ui.timeStart + (v*1440);

		if (v > ui.cbox.length) {
			while (ui.cbox.length < v) {
				t.nodes_add_column(ui);
			};

			ui._changes.calendarSource = true;
		} else {
			while (ui.cbox.length > v) {
				t.nodes_remove_column(ui);
			};
		};

		if (rr.IE === 8) {
			var w = (100 / ui.cbox.length) + "%", i = 0, x;
			while (x = ui.cbox[i++]) {
				x.node.style.width = w;
			}
		};

		return v;
	},



	nodes_add_column: function (ui) {
		var _ = ui.master, n;

		n = _('tmpl:rc_areaday_column', {
			parent: ui.nodes.cbox
		});

		n.items = [];
		ui.cbox[ui.cbox.length] = n;
	},

	nodes_remove_column: function (ui) {
		var n = ui.cbox.pop();
		if (!n) return;
		rr.removeNode(n.node);
		rr.each(n.items, function (x) {
			x.setfree();
		});
	},

	refresh: function (ui, ch, rz) {
		if (!ui.display) return false;
		var it = ui.interface, nodes = ui.nodes, v, i;
		if (ui.z_resize) ui.z_resize = !(rz = true);

		if (rz || ch.panelLeft) {
			rr.css_set('rc-areaday--numbpanel', ui.node, ui.panelLeft);
		};
		if (rz) {
			ui.boxHeight = nodes.rows.scrollHeight;
		};

		if (rz || ch.dtime) {
			v = ui.dtime || 0;
			nodes.timeResizer.style.top = Math.round((12 - v) * (ui.boxHeight / 24)) + "px";

			rr.each(ui.nodes.timeText, function (n, i) {
				var x = i + v;
				if (x > 23) x -= 24;
				n.data = x + ":00";
			});
		};

		if (v = rz || ch.calendarSource || ch.dtime || ch.timeStart) {
			i = ui.cbox.length;

			while (i--) {
				it.recolumn(ui, i);
			};
		}
		else {
			if (ch.activeItem) {
				var i = ui.cbox.length, i2, x;
				while (i--) if (v = ui.cbox[i]) {
					v = v.items;

					for (i2 = v.length; i2--; ) {
						if (x = v[i2]) {
							x.set('active', ui.activeItem == x.item.id);
						};
					};
				};
			};

			v = null;
		};


		if (v || ch.selectionStart || ch.selectionEnd || ch.selection_dn) {
			it.re_selection(ui); 
		};


		if (ch[v = 'selection_mode']) {
			var x = ui.range_c;
			rr.css_set_(x.sname + '--m-', x.node);
			//rr.css_remove_(x.sname+'--m-', x.node);
			if (!ui[v]) {
				if (x.parent) rr.removeNode(x.node);
				x.parent = null;
			}
			else rr.css_add(x.sname + '--m-' + ui[v], x.node);
		};


		ui.initEvent_('change', [ch]);
	},


	re_selection: function (ui) {
		if (!ui.cbox) return;

		var A = ui.selectionStart, B = ui.selectionEnd, i = ui.cbox.length, co, x;

		if (!ui.selection_mode || !A || !B) {
			if (x = ui.range_c) {
				if (x.parent) {
					rr.removeNode(x.node);
					//if (rr.Gecko) x.parent.offsetParent;
					if (rr.Gecko) x.parent.offsetParent;
				};

				x.parent = null;
			};

		};

		if (!A || !B) {
			while (i--) {
				co = ui.cbox[i];
				if (x = co.eSelect) {
					if (x.display) {
						x.set('hide', true);
					};
				};
			};

			return;
		};

		var _ = ui.master
		, h = ui.boxHeight
		, st = ui.timeStart
		, _t, _h, prm
		, xa, j, n, sA, sB, ts, te;

		if (typeof ui.dtime == 'number') {
			st += 60 * ui.dtime;
		};

		while (i--) {
			co = ui.cbox[i];

			ts = st + i * 1440;
			te = ts + 1440;

			if (B <= ts || A >= te) {
				// селекта нету, очистить
				if (co.eSelect) {
					// удалить
					co.eSelect.set('hide', true);
				};
				continue;
			};

			x = co.eSelect;

			sA = A < ts ? ts : A
			sB = B > te ? te : B;

			_t = (sA - ts) * h / 1440;
			_h = (sB - sA) * h / 1440;



			prm = {
				hide: false,
				//text: "test test tes",
				height: _h, //(sB - sA) * h/1440
				top: _t, //(sA - ts) * h/1440,
				flagA: A < ts,
				flagB: B > te,
				width: 100
			};



			//if (_t != prm.top) alert(_t+" != "+prm.top +"\n\n"+'A: '+A+'\n sB: '+sB+"\n sA: "+sA+'\n ts: '+ts+'\n st: '+st+'\n h: '+h)


			if (!x) {
				/////prm.parent = co.box;
				co.eSelect = x = _.tmpl('ui:rc_range', prm);
				ui.appendChild(co.eSelect, co.boxUp);
			}
			else {
				x.set(prm);
			};


			if (!xa) xa = x;
		};

		if (x && ui.selection_mode) {
			if (ui.selection_dn) x = xa;
			xa = ui.range_c;

			rr.css_set(xa.sname + '--dn', xa.node, ui.selection_dn);

			A = rcalendar.date_tm(A, 0, 0, 0, 0, 1, 1);
			B = rcalendar.date_tm(B, 0, 0, 0, 0, 1, 1);

			A.m_ = A.m < 10 ? '0' + A.m : A.m;
			B.m_ = B.m < 10 ? '0' + B.m : B.m;

			var ntext = (A.h + ":" + A.m_) + " - " + (B.h + ":" + B.m_);
			if (xa._ptext != ntext) {
				xa.text.data = xa._ptext = ntext;
			};

			if (xa.parent !== x.node) {
				x.node.appendChild(xa.node);
				xa.parent = x.node;
			};
		};
	},


	ev_data_change: function (ui, e) {
		var it = ui.interface;

		ui._changes.calendarSource = true;
		ui.refresh();
	},

	ev_data_userCreateItem: function (ui, e) {
		ui.set({
			activeItem: e.id,
			selectionStart: null,
			selectionEnd: null
		});
	},

	recolumn: function (ui, n) {
		n = parseInt(n);

		var t = this,
		    h = ui.boxHeight,
		    i = 0, ix, cr,
		    oc, st, a, p, n, x;

		oc = ui.cbox[n];

		st = ui.timeStart;
		if (typeof ui.dtime == 'number') {
			st += 60 * ui.dtime;
		};

		if (n) st += n * 1440;

		//a = ui.calendarSource && ui.calendarSource.get(st, st+1440); //1440-1
		a = ui.calendarSource && ui.calendarSource.get_range(st, st + 1439, { day: true }); //1440-1


		if (!a || !a[0]) { // если нет ниодного то можно очистить все
			i = 0;
			n = oc.items;

			while (x = n[i++]) {
				//ui.removeChild(x);
				//x.removeParent()
				x.setfree();
			};

			n.length = 0;
			oc = null;
			return;
		};

		t.d_regroup(a); // формируем групперовку отображения


		var ns = {}; // хеш для быстрого поиска
		while (p = a[i++]) {
			ns['x-' + p.item.id] = p;
		};


		n = oc.items;
		i = 0; ix = 0;

		while (x = n[i]) { // удаляем из массива те элементы которые не используем
			if (p = ns['x-' + x.item.id]) {
				p.active = true;

				if (i !== ix) n[ix] = x;
				ix++;

				x.set(
					t.reset_item(ui, p, st)
					);
			}
			else {
				//ui.removeChild(x);
				//x.removeParent()
				x.setfree();
			};

			i++;
		};

		oc.items.length = ix;


		i = 0;
		var _ = ui.master;

		while (p = a[i++]) { // достраиваю те которые еше не созданны
			if (!p.active) {
				x = _.tmpl('ui:rc_areaday_item', false);

				oc.items.push(x);
				x.item = p.item;
				if (!p.item.id) alert(p.item.id)

				x.set(
					t.reset_item(ui, p, st)
					);

				ui.appendChild(x, oc.box);
			};
		};

		oc = ns = null;
	},

	reset_item: function (ui, p, ts) {
		var day = 1440, // min
		    h = ui.boxHeight,
		    item = p.item,
		    te = ts + day,
		    t2h = (h || 960) / day,
		    i, l, x, y, w, h;


		y = item.start - ts;

		if (y < 0) y = 0;
		h = (item.end > te ? te : item.end) - (y ? item.start : ts);

		h = Math.round(t2h * h);
		y = Math.round(t2h * y);

		l = p.gmax || 1;

		if (p.glast && p.gmax > 1 && p.gw > 1) {
			x = p.gpos ? Math.floor(p.gpos * (100 / l) + (10 / l)) : 0;
		} else {
			x = p.gpos ? Math.floor(p.gpos * (100 / l) - (20 / l)) : 0;
		};

		w = p.glast ? 100 - x : Math.floor(p.gw * (100 / l) + (50 / l));




		return {
			top: y,
			flagA: item.start < ts,
			flagB: item.end > te,
			active: item.id == ui.activeItem,
			//textHead: "xxx",
			text: item.text || item.text === 0 ? item.text : 'undefined', //item.start+" : "+item.end,
			left: x,
			width: w,
			height: h,
			zIndex: p.index //p.gpos+1
		};
	},

	// перегрупперовка списка
	/*
	filter = {
	start: xxx,
	end: xxx,
	duration:
	}
	*/
	d_regroup: function (a, filter) {
		var t = this,
		    ig = 0, // начало цепочки
		    ir = 0, // начало ряда
		    cg = 1, // число рядов в цепочке

		    rg = [], // текуший ряд , rg._freerow - свободный ряд
		    max = 1, // максимальное число колонок в цепи
		    p, p2, i, i2, i3, l, l2, freeRow, x;

		//i = 0; ig = 0;
		//while(p = a[i++]) {
		for (i = 0, ig = 0; p = a[i]; i++) {
			// тут  чистим ряд
			i2 = freeRow = rg.length;
			p.index = i;

			while (i2--) {
				if (p2 = rg[i2]) {
					if (p2.item.end <= p.item.start) {
						// закрываем эту в ряде
						rg[i2] = null;
						freeRow = i2; // укажем свободный элемент в ряду
					};

				} else freeRow = i2; // свободный элемент в ряду
			};



			if (freeRow < 1 && i > 0) {
				l2 = rg.length;
				while (l2 && !rg[--l2]);

				// тут проверяем на обрыв цепочки, если в ряду неосталось элементов.
				// при обрыве цепочки выставляем всем элементам цепи их размеры
				// ...
				if (!l2) {
					rg.length = 0;


					//цепь разорвана
					t.d_break_group(a, ig, i, max);
					max = 1;
					ig = i;
				};
			};



			p.gpos = freeRow;
			if (max <= freeRow) {
				max = freeRow + 1;
			};
			rg[freeRow] = p;
		};

		// рвем цепочку
		t.d_break_group(a, ig, i, max);
	},

	// разрыв цепочки
	d_break_group: function (a, istart, iend, max) {
		var i = istart + 0, i2,
		    mp = max - 1,
		    p, p2;

		max -= 0;

		do {
			p = a[i];
			p.gmax = max;
			p.glast = true;

			if (p.gpos < mp) {
				// не самая крайняя колонка
				i2 = istart;
				//i2 = i;
				p.gw = max;

				do {
					p2 = a[i2];
					if (p2 && p2 != p && p2.item.end >= p.item.start && p2.item.start < p.item.end) { // p2.item.end > p.item.start

						if (p2.gpos > p.gpos) {
							p.gw = Math.min(p.gw, p2.gpos - p.gpos) || 1;
							p.glast = false;
						};

					};

				} while (++i2 < iend);

				//if (!p.gw) p.gw = 1;
				//p.gw = p.gw||1;

			} else {
				p.gw = max - p.gpos;
			};


		} while (++i < iend);

	},

	hideAllItemId: function (p, ui, fg) {
		var id = ui.item.id,
		    a = p.cbox, a2,
		    i = a.length, i2, x;

		fg = !!fg;

		for (; i--; ) if (a2 = a[i]) {
			if (a2 = a2.items)
				for (i2 = a2.length; i2--; ) if (x = a2[i2]) {
					if (x.item.id == ui.item.id) {
						x.set('hide', fg);
					};
				};
		};
	},

	listeners_events: {
		//item_move
		item_move_dragstart: function (e, prm) {
			prm.column_start = Math.floor((e.stX - prm.box_left) / prm.column_width);
			var p = prm.ui.parent;

			this.hideAllItemId(p, prm.ui, true);
			p.set({
				selectionStart: prm.A,
				selectionEnd: prm.B
			});

		},

		item_move_dragend: function (e, prm) {
			var ui = prm.ui, p = ui.parent, x = ui.item;
			if (!p.selectionStart || !p.selectionEnd) {
				return;
			};

			x.start = p.selectionStart;
			x.end = p.selectionEnd;

			p.set({
				selection_mode: false,
				selectionStart: null,
				selectionEnd: null
			});

			p.calendarSource.set(x, true);
			p.calendarSource.ev_change();


			this.hideAllItemId(p, ui, false);
		},

		item_move: function (e, prm) {
			var ui = prm.ui,
			    dX = e.stX - e.psX,
			    dY = e.stY - e.psY,
			    p = ui.parent,
			    xc = e.psX - prm.box_left,
			    dS = e.ctrlKey ? 10 : 30,
			    dl, A, B, x;

			A = prm.A;
			B = prm.B;

			xc = xc < 0 && xc > -30 ? 0 : xc / prm.column_width;
			if (xc > prm.columns - 1) xc = prm.columns - 1;

			if (xc >= 0) {
				dl = 1440 * (dY / ui.parent.boxHeight - Math.floor(xc - prm.column_start));
				dl = Math.round(dl / dS) * dS;

				A -= dl;
				B -= dl;
			};

			p.set({
				selectionStart: A,
				selectionEnd: B
			});

			if (false)
				if (p.selectionStart !== A || p.selectionEnd !== B) {
					p.selectionStart = A;
					p.selectionEnd = B;
					this.re_selection(p);


					p.initEvent('range_change', {
						start: A,
						end: B
					});
				};
		},

		//item_resize
		item_resize_dragstart: function (e, prm) {
			prm.column_start = Math.floor((e.stX - prm.box_left) / prm.column_width);
			var p = prm.ui.parent, A = prm.A, B = prm.B;
			if (A > B) {
				A = B;
				B = prm.A;
			};

			this.hideAllItemId(prm.ui.parent, prm.ui, true);
			prm.ui.parent.set({
				selectionStart: A,
				selectionEnd: B
			});
		},

		item_resize_dragend: function (e, prm) {
			var ui = prm.ui, p = ui.parent, x = ui.item;
			this.hideAllItemId(p, ui, false);

			if (!p || !p.selectionStart || !p.selectionEnd) return;

			x.start = p.selectionStart;
			x.end = p.selectionEnd;
			//x.duration = x.end - x.start;


			p.calendarSource.set(x, true);

			ui._changes.calendarSource = true;
			ui.parent.set({
				selectionStart: null,
				selectionEnd: null
			});


			p.calendarSource.ev_change();
		},

		item_resize: function (e, prm) {
			var ui = prm.ui,
			    dX = e.stX - e.psX,
			    dY = e.stY - e.psY,
			    xc = (e.psX - prm.box_left) / prm.column_width,
			    p = ui.parent,
			    dS = e.ctrlKey ? 10 : 30,
			    A, B, dl;

			//(p.timeStart+p.dtime) + 1440*xc

			A = prm.A;
			B = prm.B;


			if (xc >= 0) {
				dl = 1440 * (dY / ui.parent.boxHeight - Math.floor(xc - prm.column_start));
				//dl = Math.round(dl/30)*30;

				B -= dl;
				B = Math.round(B / dS) * dS;

				p.selection_dn = A < B;

				if (A > B) {
					if ((A - B) < dS) {
						B = A - dS;
					}
					else {
						B = Math.max(B, (p.timeStart + p.dtime * 60) + 1440 * Math.floor(xc))
					};
					//(p.timeStart+p.dtime) + 1440*xc+1440

					A = B;
					B = prm.A;
				}
				else {
					if ((B - A) < dS) {
						B = A + dS;
					}
					else {
						B = Math.min(B, (p.timeStart + p.dtime * 60) + 1440 * Math.floor(xc) + 1440)
					};
				};

			} else {
				if (A > B) {
					A = B;
					B = prm.A;
				};
			};

			if (p.selectionStart !== A || p.selectionEnd !== B) {
				p.selectionStart = A;
				p.selectionEnd = B;
				this.re_selection(p);
			};
		},

		range_new: function (e, prm) {
			prm.select_ok = true;

			var it = this,
			    ui = prm.target,
			    dX = e.stX - e.psX,
			    dY = e.stY - e.psY,
			    xc = (e.psX - prm.box_left) / prm.column_width,
			    dS = prm.dS || e.ctrlKey ? 10 : 30,
			    A, B, dl;

			if (xc < 0) xc = 0;


			dl = 1440 * (dY / ui.boxHeight - Math.floor(xc - prm.column_start));
			ui.selection_dn = dl < 0;

			if (dl < 0) {
				A = Math.floor(prm.S / dS) * dS;
				B = Math.round((prm.S - dl) / dS) * dS;
				B = Math.min(B, (ui.timeStart + ui.dtime * 60) + 1440 * Math.floor(xc) + 1440);
				if (A == B) B += dS;
			}
			else {
				A = Math.round((prm.S - dl) / dS) * dS;
				B = Math.ceil(prm.S / dS) * dS;
				A = Math.max(A, (ui.timeStart + ui.dtime * 60) + 1440 * Math.floor(xc));
				if (A == B) A -= dS;
			};

			ui.set({
				selectionStart: A,
				selectionEnd: B
			});
		},

		range_new_dragstart: function (e, prm) {
			if (prm.timmerNew) clearTimeout(prm.timmerNew);
			prm.timmerNew = false;
		},

		range_new_dragend: function (e, prm) {
		},

		range_new_end: function (e, prm) {
			if (prm.timmerNew) clearTimeout(prm.timmerNew);
			if (!prm.select_ok) return;
			if (prm.timmerNew) prm._set_def();
			var ui = prm.target, a = ui.cbox, i = a.length, x;

			if (x = ui.range_c.button) {
				//if (ui.ownerDocument.activeElement) ui.ownerDocument.activeElement.blur();
				ui.set('selection_mode', 'add');

				setTimeout(function () {
					if (x.offsetParent) x.focus();
				}, 30);
			};
		}

	},



	ev_start_range: function (e, ui) {
		rr.breakEvent(e);
		ui.set('activeItem', null);


		if (!ui.columns || !ui.cbox[0]) return;

		var tg = e.srcElement || e.target,
		dx = ui.cbox[0].node.offsetLeft,
		prm, x, i = ui.cbox.length;

		x = rr.css_parent('c columns', e.srcElement || e.target, true);
		if (!x || rr.css_return == "columns") return;

		for (i = ui.cbox.length; i-- && ui.cbox[i].node != x; );

		if (i < 0) return;

		if (x = ui.node.ownerDocument.activeElement) {
			if (!rr.IE || x.nodeName != "BODY") x.blur();
		};

		var sHide = rr.css_parent('rc-range', e.srcElement || e.target, true),
		dS = 30, S;
		//S = ui.timeStart + ui.dtime*60 + (i + (e.clientY - ui.nodes.cbox.getBoundingClientRect().top)/ui.boxHeight) * 1440;


		//S = (e.clientY - ui.nodes.cbox.getBoundingClientRect().top)/ui.boxHeight * 1440;
		S = (e.clientY - rr.getRect(ui.cbox[0].box).top) / ui.boxHeight * 1440;

		var A = Math.floor(Math.floor(S) / dS) * 30, B;
		if (A < 0) { A = 0 } else if (A > 1380) A = 1380;

		A = ui.timeStart + ui.dtime * 60 + i * 1440 + A;
		B = A + 60;

		prm = {
			target: ui,
			select_ok: !sHide,
			S: ui.timeStart + ui.dtime * 60 + i * 1440 + S, //(i + (e.clientY - ui.nodes.cbox.getBoundingClientRect().top)/ui.boxHeight) * 1440 //(rr.IE?e.offsetY:e.layerY)
			box_width: ui.nodes.rows.parentNode.clientWidth - dx,
			box_left: rr.getAbsolutePos(ui.nodes.cbox).x + dx,
			column_start: i,
			columns: ui.columns
		};

		ui.set({
			selectionStart: null,
			selectionEnd: null,
			selection_dn: false,
			selection_mode: 'text'
		});

		prm._set_def = function () {
			prm.select_ok = true;
			ui.set({
				selectionStart: A,
				selectionEnd: B
			});
		};

		if (!sHide) {
			prm.timmerNew = setTimeout(prm._set_def, 120);
		};


		prm.column_width = prm.box_width / prm.columns;
		ui.interface.initEvent('startDrag', {
			name: 'range_new',
			cursor: 'ns-resize',
			deltaDrag: sHide ? 5 : 2,
			overDrag: false,
			clearRange: true,
			autoScroll: false,
			mouseEvent: e
		}, prm);

	},

	ev_dblclick_item: function (e, ui, x) {
		ui.initEvent('item_click', {
			item: x.item
		});
	},

	ev_mousedown_item: function (e, ui, x) {
		rr.breakEvent(e);

		var it = ui.interface,
		prm = {
			A: x.item.start,
			B: x.item.end,
			ui: x
		},
		dx = ui.cbox[0].node.offsetLeft;

		prm.box_width = ui.nodes.rows.parentNode.clientWidth - dx;
		prm.box_left = rr.getAbsolutePos(ui.nodes.cbox, true).x + dx;
		prm.columns = ui.columns;
		prm.column_width = prm.box_width / prm.columns;

		ui.set({
			activeItem: x.item.id,
			selection_mode: 'text',
			selection_dn: false,
			selectionStart: null,
			selectionEnd: null
		});

		it.initEvent('startDrag', {
			name: 'item_move',
			cursor: 'move',
			clearRange: true,
			deltaDrag: 5,
			autoScroll: false,
			mouseEvent: e
		}, prm);
	},

	ev_mousedown_item_rzA: function (e, ui, x) {
		this.ev_mousedown_item_rzX({
			top: true,
			mouseEvent: e,
			item: x.item,
			itemUI: x
		}, ui);
	},

	ev_mousedown_item_rzB: function (e, ui, x) {
		this.ev_mousedown_item_rzX({
			top: false,
			mouseEvent: e,
			item: x.item,
			itemUI: x
		}, ui);
	},

	ev_mousedown_item_rzX: function (e, ui) {
		rr.breakEvent(e.mouseEvent);
		var it = ui.interface, prm = {
			A: !e.top ? e.item.start : e.item.end,
			B: e.top ? e.item.start : e.item.end,
			ui: e.itemUI
		},
		dx = ui.cbox[0].node.offsetLeft;




		prm.box_width = ui.nodes.rows.parentNode.clientWidth - dx;
		prm.box_left = rr.getAbsolutePos(ui.nodes.cbox, true).x + dx;
		prm.columns = ui.columns;
		prm.column_width = prm.box_width / prm.columns;

		ui.set({
			activeItem: e.item.id,
			selection_mode: 'text',
			selection_dn: !e.top
		});

		it.initEvent('startDrag', {
			name: 'item_resize',
			cursor: 'ns-resize',
			clearRange: true,
			autoScroll: false,
			mouseEvent: e.mouseEvent
		}, prm);
	},

	ev_selection_blur: function (ui) {
		var a = 'selectionStart', b = 'selectionEnd', u;
		if (ui[a] || ui[b]) {
			ui[a] = ui[b] = u;
			setTimeout(function () {
				if (!ui[a] && !ui[b]) {
					var x = {};
					x[a] = x[b] = null;
					ui.set(x);
				};
			}, 50)
		};
	}

});


/* -- -- -- */

elems.rc_areaday_item = rr.new_class({
	_name: 'rc_day_item',

	parent: rr.class_baseElement,
	interface: true,

	constructor: function (_, pr, cfg) {
		this.interface.parent.call(this, _, pr, cfg);
		this.interface.factory(this, _, pr, cfg);

		if (this.node) this.node.rocketui = this;
		if (pr) this.set(pr);
	},

	factory: function (ui, _, pr) {
		ui.nodes = new tmpl.rc_areaday_item(_, false);

		ui.node = ui.nodes.node;
		ui.box = ui.nodes.box;

		ui.nodes.node._r_element = 'rc_day_item';
		ui.nodes.resizeA._r_element = 'rc_day_item_rzA';
		ui.nodes.resizeB._r_element = 'rc_day_item_rzB';
	},


	prototype: {
		nodeType: -1,
		setfree: function () {
			this.parent.removeChild(this);
			this.node.style.display = 'none';
			return this;
		}

		//on_connect: function () {}

	},


	set: function (ui, pr, v, pv) {
		var it = this,
		    tv = typeof v,
		    x, und;

		switch (pr) {
			case 'hide':
				if (pv === (v = !!v)) return;
				if (v) ui.node.style.display = 'none';
				ui.display = ui.is_connected && !v;
				break;

			case 'color': if (tv != 'number' || v < 0 || v > 15) return;
				break

			case 'height':
			case 'top':
			case 'left':
			case 'zIndex':
			case 'width':
				if (v === '') { v = null } else if (tv != 'number') return
				break;

			case 'text':
				if (tv != 'string' && tv != 'number') return;
				break;

			case 'flagA':
			case 'flagB':
			case 'active':
				if (pv === (v = !!v)) return;
				break;

			default: return;
				/*
				x='s_'+pr;
				if (typeof it[x] != 'function') return;
				v = it[x](ui, v, pv);
				*/
		};

		return v;
	},

	refresh: function (ui, ch, rz) {
		//if (!ui.display) return false;
		var it = ui.interface, nodes = ui.nodes, v, i, s_node;
		if (ui.z_resize) ui.z_resize = !(rz = true);


		if (rz || ch.flagA || ch.flagB || ch.color || ch.active) {
			i = { className: ui.node.className };
			i.i = i.className;

			if (rz || ch.flagA || ch.flagB) {
				rr.css_set(nodes.sname + '--AB', i, ui.flagA && ui.flagB);
				rr.css_set(nodes.sname + "--A", i, ui.flagA && !ui.flagB);
				rr.css_set(nodes.sname + "--B", i, ui.flagB && !ui.flagA);
			};

			if (rz || ch.color) rr.css_set_("rc-x--color-", i, ui.color || '0');
			if (rz || ch.active) rr.css_set(nodes.sname + '--active', i, ui.active);


			if (i.className != i.i) {
				ui.node.className = i.className;
			};
		};

		if (rz || ch.active) {
			rr.css_set('c--active', nodes.caption, ui.active);
		};


		s_node = ui.node.style;

		if (rz || ch.height) {
			v = Math.max(0, ui.height - 10);
			nodes.caption.style.height = v + "px";
		};

		if (rz || ch.top) {
			v = ui.top;
			s_node.top = v ? v + "px" : '';
		};

		if (rz || ch.left) {
			v = ui.left;
			s_node.left = v ? v + "%" : '';
		};

		if (rz || ch.width) {
			v = ui.width;
			s_node.width = (v < 0 || v === null || v >= 100) ? '' : v + "%";
		};

		if (rz || ch.zIndex) {
			v = ui.zIndex;
			s_node.zIndex = v ? v : '';
		};


		if (rz || ch.text) {
			nodes.box_text.data = ui.text;
		};



		if (rz || ch.hide) {
			s_node.display = ui.hide ? 'none' : '';
		};
	}
});



elems.rc_range = rr.new_class({
	_name: 'rc_range',

	parent: rr.class_baseElement,
	interface: true,

	constructor: function (_, pr, cfg) {
		this.interface.parent.call(this, _, pr, cfg);
		this.interface.factory(this, _, pr, cfg);

		if (this.node) this.node.rocketui = this;
		this.set(pr);
	},

	factory: function (ui, _, pr) {
		var t = this;
		ui._changes = {};

		ui.nodes = new tmpl.rc_range(_, { ui: ui });

		ui.node = ui.nodes.node;
		ui.box = ui.nodes.box;
	},

	prototype: {
		hide: true,

		on_connect: function () {
			var ui = this;
			if (ui.display = ui.is_connected) {
				ui.refresh(true);
			};
		},
		show: function () {
			this.set('hide', false);
		},

		focus: function () {
		}
	},

	set: function (ui, pr, v, pv) {
		var it = this, tv = typeof v, x, und;

		switch (pr) {
			case 'hide':
				if (pv === (v = !!v)) return;
				if (v) ui.node.style.display = 'none';
				//ui.display = ui.display && !v;
				break;

			case 'height':
				if (typeof v != 'number') return;
				break;

			case 'top':
				if (typeof v != 'number') return;
				break;

			case 'flagA':
			case 'flagB':
				if (pv === (v = !!v)) return;
				break;

			default: return;
		};

		return v;
	},

	refresh: function (ui, ch, rz) {
		if (ui.hide) return false;

		var it = ui.interface, nodes = ui.nodes, v, i;
		if (ui.z_resize) ui.z_resize = !(rz = true);

		if (rz || ch.height) {
			v = ui.height - 3;
			if (v < 1) v = 1;
			ui.box.style.height = v + "px";
		};

		if (rz || ch.flagA || ch.flagB) {
			v = ui.flagA && ui.flagB ? 'AB' : ui.flagA ? 'A' : ui.flagB ? 'B' : false;
			rr.css_set_(nodes.sname + '-box--x-', ui.box, v);
			rr.css_set_(nodes.sname + '--x-', ui.node, v);

			/*
			i = {className: ui.box.className};
			i.i = i.className;
			rr.css_set(nodes.sname+'-box--AB', i, ui.flagA && ui.flagB);
			rr.css_set(nodes.sname+"-box--A", i, ui.flagA && !ui.flagB);
			rr.css_set(nodes.sname+"-box--B", i, ui.flagB && !ui.flagA);
			if (i.className != i.i) ui.box.className = i.className;
			*/
		};


		if (rz || ch.top) {
			v = ui.top;
			ui.node.style.top = v && v + "px";
		};

		if (rz || ch.hide) {
			if (!ui.hide) ui.node.style.display = '';
		};

		//ui.node.offsetParent;
	}
});

