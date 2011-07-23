
//rr.domReady.stop = rr.IE<8 || rr.is_j2me || rr.Opera<10;
if (rr.domReady.stop) {
	location.href = '/nojs';
	};

(function() {
	var sw = window.opera ? Math.max(screen.width, screen.height) : screen.width;

	document.documentElement.id = 'js';
	document.documentElement.className += " rnd-"+Math.floor(Math.random()*3)
		+ ' sw-'+(sw <= 980 ? 980 : sw <= 1024 ? 1024 : sw <= 1200 ? 1200 : sw <= 1400 ? 1400 : 2000) // screen size width
		+ ' skin-' + ((window._settings||false)['skin'] || 'default'); // skin
	})();

/*
new function() {
	var l=location, r = /[\?\&]r=(\w+)\/(reader|contacts)/.exec(location.search);
	if (r && r[2]) {
		location.replace(l.protocol + '//' + l.host +(l.port?':'+l.port:'') + l.pathname+'?r='+r[1]+'/#/'+r[2]);
		};
	};
	*/


rr.styles('tmpl:common', rr.IE && 'head {filter:;}'); /* ускоряет перевключение вкладок в IE*/

/* setup masterElement */
var tmpl = {}, elems = {}, tmpl_js, domMaster, masterElement;

domMaster = masterElement = rr.new_master(document, {
	tmpl: tmpl_js = rr.newTemplate(tmpl),
	ui: rr.newTemplate(elems)
	});

domMaster.namespace = masterElement.global.tmpl;


/* setup cram */
if (!this.cram) this.cram = {};
var rmail = cram; // для совместимости

rr.domReady(function() { // start page
	var _ = masterElement;

	switch(cram.page_name) {
		case 'contacts':
			_.master('ui:pg_contacts');
			break;

		case 'messenger_history': _('tmpl:pg_history'); break;
		case 'messenger_history_small': _('tmpl:pg_history'); break;

		default:
			if (cram.page_name) {
				_('tmpl:pg_'+cram.page_name);
				};
		};
	});

rr.extend(cram, rr.expansion_event, {
	hash_current: null, // текуший hash
	hash_default: '/mailbox/inbox',
	hash_404: '/404',

	NUMBER_PAGE: 0, // при каждой смены "page" счетчик увеличивается

	_events_start: [],
	_events_init: [],

	// запуск в head
	start: function(nm) {
		if (this.page_name) return;

		window._page_timeHead = new Date;

		this.history.start(this.hash_default);
		this.page_name = nm || 'all';

		cram.initEvent('pre_start', false);
		rr.styles_include('reset tmpl');

		var i=0, a = cram._events_start, x;
		for (; x = a[i++];) {
			if (x[0] == 'all' || x[0] == nm) {
				x[1].call(cram);
				};
			};


		if (!this.NUMBER_PAGE) { // если никто не влез куда не следует то стартуем
			this.go(this.history.get(), true);
			};
		},

	start_: function(n, cb) {
		if (typeof cb == 'function') {
			this.start_ok ? cb.call(this) : this._events_start.push([n||'all', cb]);
			};
		},

	// запуск по init||domReady
	init_: function() {
		var I;
		rr.domReady(function() {
			if (I) return;
			I = true;

			if (!this.page_name) { // бля
				cram.start();
				};

			cram.initEvent('pre_init');

			var i=0, a = cram._events_init, nm = this.page_name, x;
			for (; x = a[i++];) {
				if (x[0] == 'all' || x[0] == nm) {
					x[1].call(cram);
					};
				};
			});

		return function(n, fn) {
			I ? fn.call(cram) : this._events_init.push([n||'all', fn]);
			}
		}(),

	// события от изменения в location.hash
	history: new function() {
		return new rr.class_history(null, {
			document: rr.document,
			change: function(x) {
				if (!x) {
					cram.history.replace(x = cram.hash_default);
					};

				if (cram.hash_current !== x) {
					cram.moveScroll(0);
					cram.go(x, true);
					};
				}
			});
		},

	// изменит Hash без вызова события
	history_set: function(x) {
		this.history.set(
			this.hash_current = x
			);
		},


	/*
	//пробует открыть виртуальную страничку(#hash)
	param {string} x // #hash
	param {boolean} h // флаг что изменилась история или пользователь вручную ввел адрес
	*/
	go: function(x, has_history) {
		if (typeof x !== 'string') return;

		//x = x.toLocaleLowerCase();
		var NP = this.NUMBER_PAGE + 1;
		var e = {hash: x, has_history: !!has_history, first: !this.hash_current, NUMBER_PAGE: NP, add_break: this.goBreak_add}, r;


		this.initEvent('open_page', e);
		//e.hash - исправленный url запрос
		//e.handler - обработчик которому нужно передать запрос.

		if (!e.handler) {
			// обработчик небыл найден. запрос неверный
			if (!has_history) {
				// тут отобразим сообшение что путь ненайден
				return
				};

			/* перехват невозможен, делаем редирект на страничку по умолчанию */

			if (this.hash_current == this.hash_default) {
				this.history.replace(this.hash_current);
				return; // если уже открыта страница hash_default , ничего не делаем
				};


			// редирект на cram.hash_default
			e = {hash: this.hash_default, has_history: true, first: !this.hash_current, NUMBER_PAGE: NP, add_break: this.goBreak_add};
			this.initEvent('open_page', e);

			if (!e.handler) {// ошибка
				return;
				};
			};

		this.NUMBER_PAGE = e.NUMBER_PAGE; //
		this.goBreak_init();

		switch(typeof e.handler) {
			case 'function':
				r = e.handler.call(this, e);
				break;

			case 'string':
				r = this[e.handler](e);
				break;

			case 'boolean':
				r = e.handler;
				break;

			default:
				r = false; // обработчик сам выставит url_hash
			};

		if (!has_history) {
			if (this.hash_current != e.hash) {
				if (r !== false) {
					// историю стоит изменить сейчас
					this.hash_current = e.hash;
					this.history.set(e.hash);
					}
				else {
					e.autoSetHash = true; // обработчик сам выставит url_hash
					};
				};

			return;
			};

		this.hash_current = e.hash;
		if (x != e.hash) {
			this.history.replace(e.hash)
			};
		},

	goBreak_list: [],
	goBreak_init: function() {
		var a = this.goBreak_list, i = 0, x;
		for(; x = a[i]; i++) try{x()} catch(e){rr.timeThrow(e)};
		a.length = 0;
		},

	goBreak_add: function(fn) {
		if (typeof fn == 'function') {
			cram.goBreak_list.push(fn);
			};
		},





	moveScroll: window.scrollTo ? function(y) {scrollTo(0, y > 0 ? y : 0)}
		: new function(n) {
			return function(y) {
				if (!n) n = rr.WebKit ? document.body||false : document.documentElement;
				n.scrollTop = y > 0 ? y : 0;
				n.scrollLeft = 0;
				};
			},


	box_window: null,
	new_window: function(s) {
		var wbox = this.box_windows, w = new elems.window_a(s, domMaster);

		if (!wbox) {
			wbox = (this.box_windows = new elems.box_windows(false, domMaster));
			};

		w.set(s);
		if (s.hide !== false) {
			w.set('hide', false);
			}

		wbox.append(w);

		w.is_connect = true;
		w.interface.dom_connect(w);

		w.show('center');

		return w;
		},


	confirm: function(tx, fn) {
		setTimeout(function() {
			var r = !!window.confirm(tx);
			setTimeout(function() {fn(r)}, 1);
			}, this.__onbeforeunload_ ? 500 : 50);
		},

	alert: function(tx, fn) {
		setTimeout(
			function() {
				alert(tx);

				if (typeof fn === 'function') {
					setTimeout(fn, 1);
					};
				}

			, this.__onbeforeunload_ ? 600 : 50
			);
		},

	saveSetting: (function() {
		var xhr = new rr.xhr('/cram/json/settings', true);

		return function(name, v) {
			if (!name || !xhr) return;

			xhr.set('request_key', window._request_key||'no');
			xhr.set('set_name', name);
			xhr.set('set_value', v || v===0 ? v : '');

			xhr.send();
			};
		})(),


	loading_keys: [],
	loading_node: masterElement('div.b-rm_loading b-rm_loading--hide'),

	loading_start: function(key) {
		this.loading_keys.push(key||null);
		//rr.css_add('b-rm_loading--show', this.loading_node);
		//rr.css_set_('b-rm_loading--', this.loading_node, 'show');
		rr.css_switch(['b-rm_loading--hide','b-rm_loading--show'], this.loading_node, 1);
		},


	loading_stop: function(key, all){
		var a = this.loading_keys, i;
		key = key||null;


		if (!all) {
			i = a.lastIndexOf ? a.lastIndexOf(key) : rr.indexOf(a, key);
			if (i !== -1) {
				a.splice(i, 1);
				};

			//rr.css_set('b-rm_loading--show', this.loading_node, a.length > 0)
			/*
			rr.css_set_('b-rm_loading--', this.loading_node,
				a.length > 0 ? 'show' : 'hide'
				);
				*/

			rr.css_switch(['b-rm_loading--hide','b-rm_loading--show']
				, this.loading_node
				, a.length > 0 ? 1 : 0
				)

			return
			};

		var m = [];
		for(i = a.length; i--;) {
			if (a[i] !== key) m.push(a[i])
			};

		this.loading_keys = m;

		rr.css_switch(['b-rm_loading--hide','b-rm_loading--show']
			, this.loading_node
			, m.length > 0 ? 1 : 0
			)

		/*
		rr.css_set_('b-rm_loading--', this.loading_node,
			m.length > 0 ? 'show' : 'hide'
			);
			*/
		}
	});


window.onbeforeunload = function() {
	var e = {message: false};
	cram.initEvent('closeWindow', e);

	cram.__onbeforeunload_ = true; //флаг что возможно скоро все наебнется
	setTimeout(function() {cram.__onbeforeunload_ = false}, 100);

	if (e.message) return e.message;
	window.onerror = null;
	};


rr.domReady(function() {
	// индикатор загрузки
	masterElement('tmpl:rm_loading', {node: cram.loading_node});

	// предотврашаем автоскрол
	function stop(e) {rr.breakEvent(e);cram.moveScroll(0)};
	rr.addHandler(document, 'scroll', stop);
	setTimeout(function() {
		rr.removeHandler(document, 'scroll', stop);
		cram.moveScroll(0);
		}, 500);

	cram.moveScroll(0);
	});

// cram go location.hash
rr.addHandler(document.documentElement, 'click', function(e) {
	if (e.returnValue === false) return;

	var n = rr.getParentNode('a', e.target||e.srcElement, true), i, x;
	var href = n && n.href || '', lc = location.href;
	if (n && !n.target && href.indexOf('#') !== -1) {
		i = lc.indexOf('#');
		if (i != -1) lc = lc.substr(0, i);

		x = href.substr(0, i = href.indexOf('#'));
		if (!x || x ==  lc) {
			rr.breakEvent(e);
			if (x = href.substr(i+1)) {
				if (x == 'top') {
					rr.WebKit ? document.body.scrollTop = 0 : document.documentElement.scrollTop = 0;
					return;
					}
				cram.go(x);
				};
			};
		};
	});




function jsonp_loader(url, cb) {
	if (!url) return;

	if (!jsonp_loader.idx) jsonp_loader.idx = 1;
	var e = 'ev' + (jsonp_loader.idx++).toString(32), ok;

	jsonp_loader[e] = function(v) {
		if (e) {
			delete(jsonp_loader[e]); e = null;
			if (cb) cb(v);
			};
		}

	rr.appendScript(
		url+(url.indexOf('?')?"&":"?")+"rnd="+(Math.random().toString(32).substr(2, 6))+"&rkey="+window._request_key+"&jsonp=jsonp_loader."+e
		, {
			charset: "utf-8",
			defer: true,
			rm: true,

			event: function(s, ok) {
				if (e) {
					if (!ok) delete(jsonp_loader[e]); e = null;
					if (cb) cb();
					};
				}
			}
		);
	};



// speed log
rr.domReady(function() {
	return;
	if (window._page_timestart) setTimeout(function() {
		_page_timeStart = +_page_timestart;
		var x = window._page_timeLength = +new Date - _page_timestart;
		if (window.console && console.log) {
			console.log("time page: "+(_page_timeHead-_page_timestart)+"  "+x);
			};
		},10)
	});


// возврашает все параметры формы в виде обьекта
cram.getFormParams = function(frm) {
	if (!frm) return;
	var prm = {}, a = frm.elements, i=0, nm, n, x, v, u;

	for(i=0; n = a[i]; i++) {
		x = prm[nm = n.name];
		if (!nm || n.tagName == "FIELDSET") continue;
		v = n.value+'';

		switch(n.type) {
			case 'file': case 'submit':
				continue;

			case 'radio': case 'checkbox':
				if (!n.checked || !v) continue;
				break;
			};

		switch(typeof x) {
			case 'object': x[x.length||0] = v; break;
			case 'undefined': prm[nm] = v; break;
			default: prm[nm] = [x, v];
			};
		};

	return prm;
	};

cram.addEvent('page_connect', function (e) {
	var ns = this.mainframe.nodes.topmenu, pid = (e.page || false).pid;

	rr.css_set('b-topmenu-item--active', ns.item_compose.node, pid == 'compose'); 
	rr.css_set('b-topmenu-item--active', ns.item_mailbox.node, pid == 'mailbox');
	rr.css_set('b-topmenu-item--active', ns.item_calendar.node, pid == 'calendar');
});

