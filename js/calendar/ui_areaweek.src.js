

elems.rc_areaweek = rr.new_class({
	_name: 'areaweek',

	parent: rr.class_baseElement,
	interface: true,

	constructor: function(_, pr, cfg) {
		this.interface.parent.call(this, _, pr, cfg);
		this.interface.factory(this, _, pr, cfg);

		if (this.node) this.node.rocketui = this;
		this.set(pr);
		},

	factory: function(ui, _, pr) {
		ui.master = _.clone();

		ui.items = [];
		ui.rows = [];
		ui._columns = [];

		ui.nodes = _('tmpl:rc_areaweek');
		ui.sname = ui.nodes.sname;

		ui.node = ui.nodes.node;
		ui.box = ui.nodes.box;

		ui.set('columns'
			, pr.columns||1
			, false
			);
		},

	prototype: {
		/* values */
		columns: 0,  //1
		height: 'auto',

		/* interface */
		on_connect: function() {
			var ui = this;
			if (ui.display = ui.is_connected && !ui._hide) {
				ui.refresh(true);
				};
			}
		},

	init_events_data: function(ui, v) {
		var t = this;

		ui.gEvent.add(v, 'change', function(e) {
			t.ev_data_change(ui, e);
			}, v);
		v = null;
		},

	set: function(ui, pr, v, pv) {
		var it = this,
		    tv = typeof v,
		    x, i, und;

		switch (pr) {
			case 'height':
			x = tv == 'number'
			if (!x && v != 'auto') return;

			ui.node.style.height = x ? v+"px" : 'auto';

			if (rr.Opera) {
				var s = ui.nodes._tbl.style;
				s.bottom = !s.bottom ? '0.001' : ''
				} else
			if (rr.IE<7) {
				ui.nodes._tbl.style.height = x ? v+"px" : '30em';
				};

			if (typeof pv !== tv) {
				rr.css_set(ui.sname+'--h-px', ui.node, x);
				};

			if (x) it.re_maxRows(ui);
			break;

			case 'timeStart':
			//v - время по гринвичу
			if (!v || tv !== 'number') return;
			ui.timeStart = v;

			break;

			case 'calendarSource':
			if (v === pv || v && tv !== 'object') return;
			if (pv) ui.gEvent.removeAll(ui.calendarSource);
			if (v) it.init_events_data(ui, v);
			break;

			case 'columns':
			if (v<1 || tv !== 'number') return;
			var l = ui._columns.length, i;

			if (v>l) {
				// add
				while(v>l++) it.add_day(ui)
				} else
			if (v<l) {
				while(v < l--) {
					x = ui._columns.pop();
					ui.nodes.head.removeChild(x.cell);
					if (x.inf_nd) x.inf_nd.parentNode.removeChild(x.inf_nd)
					};
				};

			i = 0;
			l = ui._columns.length||1;
			var w = 100/l, s;

			for(;x = ui._columns[i]; i++ ) {
				if (x.inf_nd) {
					s = x.inf_nd.style;
					s.width = w+"%";
					if (i) s.left = (w*i)+"%";
					};

				if (rr.IE==8) x.cell.style.width = w+"%";
				};
			break;

			case 'selectionStart':
			case 'selectionEnd':
			if (v !== null && tv != 'number') return;
			break;

			case 'activeItem':
			if (!v) {
				if (!pv) return;
				v = null;
				};
			break;


			default: x='s_'+pr;
			if (typeof it[x] != 'function') return;
			v = it[x](ui, v, pv);
			};

		return v;
		},


	add_day: function(ui) {
		var _ = ui.master, a = ui._columns, l = a.length, ns;

		a[l] = ns = _('tmpl:rc_areaweek_cell');
		ui.nodes.head.appendChild(ns.cell = ns.node);
		ns.pos = l;
		},

	create_inf: function(ui, ns, i) {
		var _ = ui.master, n, w, l;

		n = _('tmpl:rc_areaweek_more');
		ui.nodes.node.appendChild(n.node);
		ns.inf_tx = n.text;
		ns.inf_nd = n = n.node;


		w = 100/(ui.columns||1);
		n.style.display = "none";
		if (w) n.style.width = w+"%";
		if (ns.pos) n.style.left = (ns.pos*w)+"%";
		},

	changeTimeStart: function(ui) {
		var da = rv.aweek_small,
		a = ui._columns,
		tm = ui.timeStart,
		i = 0, tm, x, ns;

		while(ns = a[i++]) {
			x = rcalendar.date_tm(tm, 0, 0, 0, 1);
			tm += 1440;

			ns.date.data = x.date;
			ns.day.data = da[x.day];
			};
		},

	re_maxRows: function(ui) {
		if (typeof ui.height == 'number') {
			var h = ui.height-ui._dheight, x = h/(ui._rheight||10), n;

			ui.maxrow2 = Math.max(0, Math.floor(x-0.7));
			ui.maxrow = ui.maxrow2 ? Math.max(0, Math.floor(x)) : 0;

			while(ui.rows.length > ui.maxrow) {
				rr.removeNode(ui.rows.pop());
				n = true;
				};

			} else ui.maxrow = 0;

		},

	refresh: function(ui, ch, rz) {
		if (!ui.display || ui.pause) return false;
		var it = this, nodes = ui.nodes, v, i;

		if (ui.z_resize) ui.z_resize = !(rz = true);
		if (typeof ui.timeStart != 'number') {
			ui.timeStart = 0;
			};

		if (ui.calendarSource && (rz || !ui._rheight) ) {// || true
			v = nodes.rh.offsetHeight;
			if (ui._rheight !== v) {
				if (ui._rheight = v) {
					ui._dheight = nodes.boxtop.offsetTop;
					};
				};
			};



		if (v = rz || ch.timeStart || ch.columns) {
			ui.timeEnd = ui.timeStart + ui.columns * 1440;
			it.changeTimeStart(ui);
			};


		if (rz || ui.items&&ui.items.length||ui.calendarSource)
		if (rz || ch.height || ch.calendarSource || v || ch.activeItem) {
			if (rr.IE<8 && typeof ui.height == 'number' && (!ui.items || !ui.items.length)) { //rr.IE<8 &&
				if (!ui._tm_refresh)
				ui._tm_refresh = setTimeout(function() {
					ui._tm_refresh = false;
					it.re_maxRows(ui);
					it._refresh(ui);
					}, 0); //10+Math.round(Math.random()*40)

				return;
				} else {
					clearTimeout(ui._tm_refresh);
					ui._tm_refresh = null;
					};


			it.re_maxRows(ui);
			it._refresh(ui);
			};

		if (rz || v || ch.selectionStart || ch.selectionEnd || ch.columns) {
			it.re_selection(ui);
			};

		},

	re_selection: function(ui) {
		var A = ui.selectionStart, B = ui.selectionEnd, ts = ui.timeStart
		,s = ui.nodes.range_node.style
		,te;

		//A = ts + 1440*2+300;
		//B = A+1450; //1440*3+


		if (!A || !B || ts>=B || (te = ts+1440*ui.columns) <= A) {
			if (ui.selection_show) s.display = 'none';
			ui.selection_show = false;
			return;
			};

		if (A<ts) A = ts;
		if (B>te) B = te;

		var xS = Math.floor((A - ts)/1440), xE = Math.floor((B - ts-1)/1440), x;

		if (rr.IE<7) {
			s.width = Math.min(100, (xE-xS+1)* 100/ui.columns)+"%";
			} else {
			xE = (xE+1) * 100/ui.columns;
			s.right = (xE > 100 ? 0 : 100-xE)+"%";
			};

		xS = xS * 100/ui.columns;
		s.left = xS+"%";


		if (!ui.selection_show) {
			ui.selection_show = true;
			s.display = '';
			};
		},

	ev_data_change: function(ui, e) {
		var it = ui.interface, ts = ui.timeStart, te, x;
		if (!ts || !ui.columns) return;
		te = ts + ui.columns*1440;
		//if (e.start >= te || e.end <= ts) return;

		it._refresh(ui);
		},


	_refresh: function(ui) {
		var t = this,
		    st = ui.timeStart,
		    _ = ui.master,
		    a, i=0, i2, ix, cr, n, n2, x, p;

		a = t.getlocal(ui);

		if (!a || !a[0]) {
			// .. очистить
			n = ui.items;
			while(p = n[i++]) {
				t.setfree(ui, p);
				//p.setfree();
				};
			n.length = 0;

			a = ui.rows;
			while(a.length) {
				if (p = a.pop()) rr.removeNode(p);
				};

			a = ui._columns;
			for (i=0;p = a[i];i++) {
				if (p.inf_nd) p.inf_nd.style.display = 'none';
				p.morerows = 0;
				};

			return;
			};

		var ns = {}, cItems = [];

		while(p = a[i++]) {
			ns[p.item.id] = p;

			i2 = p.left;
			while (i2 < p.right) {
				cItems[i2] = (cItems[i2]||0)+1;
				i2++;
				};
			};

		n = ui.items;
		i = 0; ix = 0;

		//
		for(; x = n[i]; i++) {
			p = ns[x.item.id];

			if (p) {
				r = this.get_row(ui, p.gpos);
				if (!r) {
					//x.setfree();
					t.setfree(ui, x);
					continue;
					};

				if (i !== ix) n[ix] = x;
				ix++;

				p.active = true;
				r = this.get_row(ui, p.gpos);


				if (r && r != x.node.parentNode) {
					r.appendChild(x.node);
					};

				x.set(t.reset_item(ui, p))
				}
			else {
				//x.setfree();
				t.setfree(ui, x);
				};
			};

		n.length = ix;

		i = 0;
		var r, right, mp=0, mxr = typeof ui.height == 'number' ? [] : null, mxr2 = typeof ui.height == 'number' ? [] : null, cl;
		//mxr.length = 0;

		while(p = a[i++]) {
			if (mp<p.gpos) mp = p.gpos;

			if (mxr) {
				if (!ui.maxrow || p.gpos > (ui.maxrow-1)) {
					i2 = p.left;
					while(p.right > i2) {
						mxr[i2] = (mxr[i2]||0) + 1;
						i2++;
						}
					};

				if (ui.maxrow && p.gpos > (ui.maxrow2-1) ) {
					i2 = p.left;
					while(p.right > i2) {
						mxr2[i2] = (mxr2[i2]||0) + 1;
						i2++;
						};
					};
				};


			if (!p.active) {
				r = this.get_row(ui, p.gpos);
				if (!r) continue;

				x = ui.parent
				x = x && x.cahe_item;


				if (x = x && x.pop() ) {
					x.set(t.reset_item(ui, p))
					}
				else {
					x = _('ui:rc_areaweek_item'
						, t.reset_item(ui, p)
						)
					}

				//x = _(':areaweek_item', t.reset_item(ui, p));
				r.appendChild(x.node);
				x.parent = ui;
				x.item = p.item;

				ui.items[ui.items.length] = x;
				};

			};

		//mp
		// remove rows
		a = ui.rows;
		if (!mp || mp<1) mp = 0;
		while(mp < a.length-1) {
			if (p = a.pop()) rr.removeNode(p);
			};



		a = ui._columns;
		i = 0;
		while(p = a[i]) {
			n = mxr && mxr[i] ? (ui.maxrow ? mxr2[i] : mxr[i])||0 : 0 ;

			if (n != p.morerows) {
				if (n) {
					if (!p.inf_nd) {
						t.create_inf(ui, p);
						};

					if (!p.morerows) {
						p.inf_nd.style.display = '';
						};

					p.inf_tx.data = n;
					} else if (p.inf_nd) {
						p.inf_nd.style.display = 'none';
						};

				p.morerows = n;
				};

			i++;
			};


		ns = null;
		},

	setfree: function(ui, x) {
		x.setfree();

		if (!ui.parent) return
		var a = ui.parent.cahe_item, l;
		if (a) {
			l = a.length;
			if (l<100) a[l] = x;
			};
		},

	reset_item: function(ui, p) {
		var ts = ui.timeStart,
		te = ui.timeEnd,
		item = p.item,
		tx, prm;

		if (!p.dayType) {
			tx = rcalendar.date_tm(item.start, 0, 0,0,0,1,1);
			tx = (tx.h<10?'0':'')+tx.h+':'+(tx.m<10?'0':'')+tx.m+'  '+item.text;
			} else tx = item.text;

		return {
			//item: p.item,
			hide: false,
			left: (100*(p.left))/ui.columns,
			right: rr.IE<7 ? null :(1 - p.right/ui.columns)*100,
			width: rr.IE<7 ? (p.width/ui.columns)*100 : null,
			active: item.id == ui.activeItem,
			flagA: item.start < ts,
			flagB: item.end > te,
			flagDay: p.dayType,
			flagD_longs: p.d_longs,
			color: 0,
			text: tx//item.id+"  "+p.gpos+"  : "+new Date(item.start*60000).toString()
			};
		},

	reset_const: function() {
		var t = this;

		if (t.display = (t._display && !t._hide)) {
			t.refresh(true);
			};
		},

	get_row: function(ui, n) {
		var a = ui.rows, r, cr;

		//ui.maxrow = 3;
		if (typeof ui.height == 'number' && n > (ui.maxrow-1)) return;

		while (!(r = a[n])) {
			a[a.length] = ui.master('div.r', {parent:ui.box});
			};

		return r;
		},


	getlocal: function(ui) {
		if (!ui.calendarSource) return;
		var a = ui.calendarSource.get(ui.timeStart, ui.timeStart-0.1 + ui.columns*1440), i = 0, p;

		if (!a || !a[0]) return;
		var maxRight = ui.columns-1;

		// раставим ряды
		while(p = a[i++]) {
			p.left = Math.floor((p.item.start - ui.timeStart)/1440);
			p.right = Math.floor((p.item.end - ui.timeStart-1)/1440);

			//p.dayType = p.left != p.right || (p.item.end - p.item.start) >= 1440;
			p.dayType = (p.item.end - p.item.start) >= 1440;
			p.d_longs = !p.dayType && p.left != p.right;

			if (p.left<0) p.left = 0;
			if (p.right<p.left) p.right = p.left;

			if (p.right > maxRight) p.right = maxRight;

			/*if (p.left >= ui.columns) {};// удалить*/

			p.right ++;
			p.width = p.right - p.left;
			};

		a.sort(this.listsort);

		this.regroup(a);

		return a;
		},

	listsort: function(a, b, x, y) {
		if (a.dayType != b.dayType) return a.dayType ? -1 : 1;

		x = a.item;
		y = b.item;

		a = x.start;
		b = y.start;
		if (a === b) {
			a = y.end;
			b = x.end;
			if (a === b) {
				a = x.id;
				b = y.id;
				};
			};


		return a < b ? -1 : a > b ? 1 : 0;
		},

	regroup: function(a, filter) {
		var t = this,
		    r, i, i2, p, p2, free;


		i = 0;
		while(p = a[i]) {

			free = i2 = 0;
			while (i2 < i) {
				p2 = a[i2++];

				if (p2.gpos != free || p2.left >= p.right || p2.right <= p.left) {
					continue;
					};

				free++;
				i2 = 0;
				}

			p.gpos = free;
			i++;
			};
		},
/* вариант №2
	regroup: function(a, filter) {
		var t = this,
		    ax = [],
		    r, i, i2, p, p2, free;


		i = 0;
		while(p = a[i]) {
			free = i2 = 0;
			ax.length = 0;

			while (i2 < i) {
				p2 = a[i2++];
				if (p2.left >= p.right || p2.right <= p.left) continue;

				ax[p2.gpos] = true;
				if (p2.gpos == free) {
					while(++free && ax[free]);
					};
				}

			p.gpos = free;
			i++;
			};

		ax = null;
		},
*/


	item_reset: function(ui, x, p, st, h) {
		}


	});


elems.rc_areaweek_item = rr.new_class({
	_name: 'item',

	parent: rr.class_baseElement,
	interface: true,

	constructor: function(_, pr, cfg) {
		this.interface.parent.call(this, _, pr, cfg);
		this.interface.factory(this, _, pr);

		if (this.node) this.node.rocketui = this;
		this.set(pr);
		},

	factory: function(ui, _, pr) {
		var t = this
		,ns = new tmpl.rc_areaweek_item(_, pr);
		;

		ui.interface = t;

		ui.nodes = ns;
		ui.node = ns.node;
		ui.box = ns.box;
		},

	prototype: {
		setfree: function() {
			this.parent = null;

			var pn = this.node.parentNode;
			if (pn) pn.removeChild(this.node);

			this.node.style.display = 'none';
			this.display = false;
			this.hide = true;
			}
		},

	set: function(ui, pr, v, pv) {
		var it = this,
		    tv = typeof v,
		    x, und;

		switch (pr) {
			case 'hide':
			if (pv === (v = !!v)) return;
			if (v) ui.node.style.display = 'none';
			ui.display = ui._display && !v;
			break;

			case 'left':
			case 'right':
			case 'width':
			case 'zIndex':
			if (tv !== 'number'){
				if (v) return;
				v = null;
				};
			break;

			case 'color': if (tv != 'number' || v<0 || v>15) return;
			break

			case 'text':
			if (tv != 'string' && tv != 'number') return;
			break;

			case 'flagA':
			case 'flagB':
			case 'flagMove':
			case 'flagDay':
			case 'flagD_longs':
			case 'active':
			if (pv === (v = !!v)) return;
			break;

			default: return;
			};

		return v;
		},

	refresh: function(ui, ch, rz) {
		//if (!ui.display) return false;
		var it = this, nodes = ui.nodes, v, i;
		if (ui.z_resize) ui.z_resize = !(rz = true);

		if (rz || ch.flagA || ch.flagB || ch.color || ch.flagDay || ch.flagD_longs) {
			i = {className: ui.node.className};
			i.i = i.className;

			if (rz || ch.flagA || ch.flagB){
				rr.css_set(nodes.sname+'--AB', i, ui.flagA && ui.flagB);
				rr.css_set(nodes.sname+"--A", i, ui.flagA && !ui.flagB);
				rr.css_set(nodes.sname+"--B", i, ui.flagB && !ui.flagA);
				};

			if (rz || ch.flagDay) rr.css_set(nodes.sname+'--f-day', i, !ui.flagDay);
			if (rz || ch.flagD_longs) rr.css_set(nodes.sname+'--d1', i, !ui.flagD_longs);
			if (rz || ch.color) rr.css_set_("rc-x--color-", i, ui.color||'0');

			if (i.className != i.i) ui.node.className = i.className;
			};

		if (rz || ch.active) {
			rr.css_set('c--active', nodes.caption, ui.active);
			};


		i = ui.node.style;
		if (rz || ch.width) {
			v = ui.width;
			i.width = v !== null ? v+"%" : '';
			};

		if (rz || ch.left) {
			v = ui.left;
			i.left = v !== null ? v+"%" : '';
			};

		if (rz || ch.right) {
			v = ui.right;
			i.right = v !== null ? v+"%" : '';
			};


		if (rz || ch.text) {
			ui.nodes.text.data = String(ui.text);
			};

		if (rz || ch.hide) {
			i.display = ui.hide ? 'none' : '';
			};
		}
	});

