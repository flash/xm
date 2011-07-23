
rr.extend('rcalendar.xclass');
rr.extend('rcalendar.ui');


rcalendar.calendarSource_ = rr.new_class({
	constructor: function(tz, ts) {
		var t = this, u;
		t.list = [];
		t.list.is_sort = false;
		t.list_change = [];
		t.list_ns = {};
		t.__newId_ = 10;

		t.iStart = u;
		t.iEnd = u;


		t.calendar_color = {
			my: 1,
			test: 2,
			work: 3,
			xc_2343453563: 5
			}; // цвет

		t.ev_change_ = function() {
			t.ev_change();
			};
		},

	prototype: rr.extend({}, rr.expansion_event, {
		newId: function() {
			return 'nid:'+(this.__newId_++);
			},

		add: function(p) {
			this.set(p);
			},

		get_item: function(id) {
			var x = id && this.list_ns[id];
			if (typeof x == 'object') return x;
			},


		// add new item
		add: function(p) {
			},

		set: function(p, ch) {
			if (!p || !p.id || typeof p != 'object') return false;

			var t = this, a = t.list, ns = t.list_ns, n = ns[p.id], x, u, pv, ch_prm,
			ps = typeof p.start == 'number',
			pe = typeof p.end == 'number';

			// position
			if (!n) {
				if (!ps || !pe || !p.calendar) return false;
				ns[p.id] = a[a.length] = n = {id: p.id, start: p.start, end: p.end, calendar: p.calendar};

				ch = true;
				a.is_sort = false;
				}
			else {
				ch = ch || n === p;
				if (ps || pe) {
					ch = true;

					if (ps) n.start = p.start;
					if (pe) n.end = p.end;
					a.is_sort = false;
					};
				};

			if (n.start > n.end) {
				x = n.start;
				n.start = n.end;
				n.end = x;
				a.is_sort = false;
				};

			n.duration = n.end - n.start;

			// param
			for (x in p) {
				switch(x) {
					case 'start':
					case 'end':
					case 'pv':
					case '_c__':
					continue;
					};

				n[x] = p[x];
				ch_prm = true;
				};

			if (!ch && !ch_prm) return;
			//if (!t.list_change) t.list_change = {};

			var a = t.list_change;
			if (ch) {
				a.full_change = true;
				};

			if (!n._c__) {
				n._c__ = true;
				a[a.length] = n;
				if (!t._tm_change) t._tm_change = setTimeout(t.ev_change_, 20);
				};
			},


		ev_change: function(px) {
			var t = this, list = t.list_change, i=0, x, u;

			if (x = t._tm_change) clearTimeout(x);
			t._tm_change = false;

			if (!list || !list.length) return;

			var e = {list: list};
			if (px) rr.extend(e, px);

			t.initEvent('change', x);

			for(;x=list[i++];) x._c__ = false;
			list.length = 0;
			},

		resort: function(fs) {
			var a = this.list;
			if (fs || !a.is_sort) {
				a.is_sort = true;
				a.sort(this._item_sort);
				};
			},

		// сортировка
		_item_sort: function(a, b) {
			return (a.start - b.start) || (b.end - a.end);
			},

		get_range: function(a, b, cfg) {
			var t = this, ls = t.list,
			    nls, ni, p, i;

			if (!ls.is_sort) {
				ls.is_sort = true;
				ls.sort(t._item_sort);
				};

			i = ni = 0;
			while(p = ls[i++]) {
				if (p.start >= b) break; // по идеи должно быть >
				if (p.end <= a) continue; // || p.start >= b
				if (cfg) {
					if (cfg.day && p.duration >= 1440) continue;
					};

				if (!nls) nls=[];
				nls[ni++] = {item: p};
				};

			return nls;
			},

		get: function(a, b, cfg) {
			var t = this, ls = t.list,
			    nls, ni, p, i;

			if (!ls.is_sort) {
				ls.is_sort = true;
				ls.sort(t._item_sort);
				};

			i = ni = 0;
			while(p = ls[i++]) {
				if (p.start >= b) break; // по идеи должно быть >
				if (p.end <= a) continue; // || p.start >= b
				if (!nls) nls=[];
				nls[ni++] = {item: p};
				};

			return nls;
			},

		set_calendar: function() {
			}
		})
	});


rcalendar.date_tm = (function() {
	var dt = new Date();


	function date_tm(tm, tz, Y, M, D, h, m, s) {
		if (!tm && tm !==0 ) return;
		var u, fg = arguments.length < 3, v={};
		if (tz) tm -= tz;

		dt.setTime(tm*60000);

		if (fg || Y) v.year = dt.getUTCFullYear();
		if (fg || M) v.month = dt.getUTCMonth();
		if (fg || D) {
			v.date = dt.getUTCDate();
			v.day = dt.getUTCDay();
			};

		if (fg || h) v.h = dt.getUTCHours();
		if (fg || m) v.m = dt.getUTCMinutes();
		if (fg || s) v.s = 0;//dt.getUTCSeconds();

		return v;
		};

	return date_tm;
	})();

rcalendar.getMaxDate = function(y, m) {
	return m === 1 ? (y%4 || y%400 && !(y%100) ? 28 : 29) : m===3 || m===5 || m===8 || m===10 ? 30 : 31;
	};


rcalendar.xdate = rr.new_class({
	constructor: function(z, sp, tm) {
		var t = this, u, v, dt = new Date();
		t.time_offset = z || 0;
		t._time_offset = t.time_offset * 60000;

		t.time_step = typeof sp == 'number' ? sp : 60000;
		t._xdate = dt;
		t._stack = [];
		t._change = true;

		if (typeof tm != 'number') {
			dt.setUTCMilliseconds(0);
			} else t.setTime(tm);
		},

	prototype: {
		time_step: 60000,
		time_offset: 0,

		save: function() {
			this._stack.push(this._xdate.getTime() );
			return this;
			},
		re: function() {
			var s = this._stack;
			if (s.length) this._xdate.setTime(s.pop());
			return this;
			},
		clear: function() {
			this._stack.length = 0;
			return this;
			},


		setTime: function(x, i) {
			var t = this, dt = t._xdate, v;

			if (v = t.time_step) x = x*v;
			if (v = t._time_offset) x -= v;// *60000

			dt.setTime(x);
			dt.setUTCMilliseconds(0);

			t._change = true;

			return t;
			},

		getTime: function() {
			var t = this, dt = this._xdate, tm, x;

			if (t._change) {
				tm = dt.getTime();
				if (x = t._time_offset) tm += x;// *60000
				if (x = t.time_step) tm = Math.floor(tm/x);
				t._time = tm;
				};

			return t._time;
			},

		getYear: function() {
			return this._xdate.getUTCFullYear();
			},
		getMonth: function() {
			return this._xdate.getUTCMonth();
			},
		getDate: function() {
			return this._xdate.getUTCDate();
			},
		getDay: function() {
			return this._xdate.getUTCDay();
			},
		getHours: function() {
			return this._xdate.getUTCHours();
			},
		getMinutes: function() {
			return this._xdate.getUTCMinutes();
			},
		getSeconds: function() {
			return this._xdate.getUTCSeconds();
			},

		getMaxDate: function(m) {
			var dt = this._xdate, y;
			m = dt.getUTCMonth();
			if (m == 1) {
				y = dt.getUTCFullYear();
				return y%4 || (!(y%100) && y%400 ) ? 28 : 29;
				};

			return (m==3 || m==5 || m==8 || m==10) ? 30 : 31;
			},


		set: function(Y, M, D, h, m, s, ms) {
			var t = this, dt = t._xdate, x;

			if (typeof Y == 'number') dt.setUTCFullYear(Y);


			if (x = typeof M == 'number') {
				if (D) dt.setUTCDate(1);
				dt.setUTCMonth(M);
				};

			if (D == 'end') {
				dt.setUTCDate(this.getMaxDate(M) );
				} else
			if (typeof D == 'number') {
				dt.setUTCDate(D);
				};


			if (typeof h == 'number') dt.setUTCHours(h);
			if (typeof m == 'number') dt.setUTCMinutes(m);
			if (typeof s == 'number') dt.setUTCSeconds(s);
			//dt.setUTCMilliseconds(0);

			t._change = true;
			return t;
			},

		next: function(Y, M, D, h, m, s) {
			var t = this, dt = t._xdate, x;

			if (Y) dt.setUTCFullYear(Y + dt.getUTCFullYear());
			if (M) dt.setUTCMonth(M + dt.getUTCMonth());
			if (D) dt.setUTCDate(D + dt.getUTCDate());

			if (h) dt.setUTCHours(h + dt.getUTCHours());
			if (m) dt.setUTCMinutes(m + dt.getUTCMinutes());
			if (s) dt.setUTCSeconds(s + dt.getUTCSeconds());

			if (Y || M || D || h || m || s) {
				t._change = true;
				};

			return t;
			},

		get: function(Y, M, D, h, m, s) {
			var dt = this._xdate, fg = !arguments.length, v={time: this.time};

			if (fg || Y) v.year = dt.getUTCFullYear();
			if (fg || M) v.month = dt.getUTCMonth();
			if (fg || D) {
				v.date = dt.getUTCDate();
				v.day = dt.getUTCDay();
				};

			if (fg || h) v.h = dt.getUTCHours();
			if (fg || m) v.m = dt.getUTCMinutes();
			if (fg || s) v.s = dt.getUTCSeconds();

			return v;
			},

		sDay: function(x) {
			var t = this, dt = t._xdate;
			if (typeof x != 'number') return t;

			if (x = x - dt.getUTCDay()) {
				dt.setUTCDate(dt.getUTCDate() + x);
				t._change = true;
				};

			return t;
			},

		// устанавливает в начало дня
		s00: function() { //sDateStart
			var t = this, dt = t._xdate, x;

			dt.setUTCHours(0);
			dt.setUTCMinutes(0);
			dt.setUTCSeconds(0)
			dt.setUTCMilliseconds(0);

			t._change = true;
			return t;
			},


		// time начала дня
		g00: function() {
			var t = this, dt = t._xdate, sv = dt.getTime(), n, x;

			dt.setUTCHours(0);
			dt.setUTCMinutes(0);
			dt.setUTCSeconds(0)
			dt.setUTCMilliseconds(0);


			n = dt.getTime();
			if (x = t._time_offset) n += x;// *60000
			if (x = t.time_step) n = Math.floor(n/x);

			dt.setTime(sv);

			return n;
			},

		gDay: function(x) {
			if (typeof x != 'number') return;
			var t = this, dt = t._xdate, n = t.time, sv;

			if (x = x - dt.getUTCDay()) {
				sv = dt.getTime();
				dt.setUTCDate(dt.getUTCDate() + x )

				n = dt.getTime();
				if (x = t._time_offset) n += x;// *60000
				if (x = t.time_step) n = Math.floor(n/x);

				dt.setTime(sv);
				};

			return n;
			}

		}
	});

