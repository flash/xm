var rr = this.rr || { 'ver': 'minicore 0.2', global: this, document: document };
//  /\*(!)?([^*]|\*(?!/))*\*/

new function () {
	var z = rr, d = document, w = window, nv = navigator, ua = nv.userAgent, v, i, f;

	v = (ua.match(/.+(rv|WebKit|era|MSIE|Safari)[\/: ](\d+(\.\d)?)/) || [])[2] - 0;
	z.Kqn = z.Opera = z.Gecko = z.IE = z.WebKit = z.SWF = z.Chrome = z.Safari = z.Firefox = NaN;

	if (w.opera && opera.buildNumber) {
		z.Opera = (opera.version && opera.version() || v) - 0;
	}
	else if (/Konqueror/.test(ua)) {
		z.Kqn = (+(ua.match(/Konqueror\/(\d+)/) || false)[1]) || 3;
	}
	else if (/WebKit/.test(ua)) {
		z.WebKit = (+(ua.match(/AppleWebKit\/(\d+)/) || false)[1]) || 533;

		if (i = ua.match(/Chrome\/(\d+(\.\d)?)/)) {
			z.Chrome = +i[1];
		}
		else if (i = /Apple/.test(nv.vendor) && ua.match(/Version\/(\d+(\.\d)?)/)) {
			z.Safari = +i[1];
		}
	}
	else if (/Gecko/.test(ua)) {
		if (i = ua.match(/rv:\d+\.\d+\.(\d)/)) if (i = i[1] / 100) v += i;
		z.Gecko = (v < 1.9 && d.getElementsByClassName ? 1.9 : v) || 1.9;
		if (i = ua.match(/Firefox\/(\d+(\.\d)?)/)) z.Firefox = +i[1];
	}
	else if (/xplorer/.test(nv.appName)) {
		z.IE = d.documentMode || v || 8;
		z.qIE = d.compatMode != 'CSS1Compat';
	}
	else z.Gecko = 1.9;

	// test flash
	try {
		f = !z.Kqn && (/(\d+(\.\d+)?)/).exec(nv.mimeTypes['application/x-shockwave-flash'].enabledPlugin.description)[1] || false
	} catch (e) { f = false };

	if (!f && z.IE && w.ActiveXObject) {
		try {
			f = (/WIN\s+(\d+)/).exec(new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version'))[1]
		} catch (e) { };
	};

	if (f) z.SWF = +f || NaN;

	z.is_mobile = /Mobile/.test(ua);
	z.is_j2me = /J2ME[\/]/.test(nv.appVersion);
	z.is_OperaMini = /Opera Mini[\/]/.test(nv.appVersion);

	z.osWin = /Windows/.test(ua);
	z.osMac = /Mac OS/.test(ua);
	z.osLnx = /Linux/.test(ua);
};

if (rr.IE == 6) try { rr.document.execCommand('BackgroundImageCache', false, true) } catch (oh) { }; // naverno nado )

rr.log = function (x) {
	var c = window.console;
	c && c.log && c.log(x);
};



// add DOMContentLoaded, function addInitDOM(function)
//rr.domReady.status = true|false;
rr.domReady = rr.addInitDOM = (function () {
	var init, add = null;

	(function () {
		var callback = [], callback_init = [], xLoaded = false, xInit = false, d = document, h, s;

		add = function (fn, x) {
			if (add.stop) return fn;

			if (typeof fn == 'function') {
				if (!xLoaded || (x && !xInit)) {
					x = x ? callback_init : callback;
					x[x.length] = fn;
				} else fn();
			} else
				if (fn === 'initDOM') {
					setTimeout(init, 123);
				} else
					if (fn === 'force' || fn === 'fastInit')
						init();

			return fn;
		};

		init = function (e) {
			if (!xLoaded) {
				xLoaded = add.status = true;
				_init(callback);

				var i = function () {
					xInit = true;
					_init(callback_init);
				};

				if (add.setupInit) { add.setupInit(i) } else i();
			};
		};


		function _init(c, em) {
			var x, i = 0;

			while (x = c[i++]) {
				//x();
				try { x() } catch (e) { er(e) };
			};

			c.length = 0;
		};

		function er(e) { setTimeout(function () { throw e }, 1) };
	})();



	new function () {
		var d = document, w = window, s, tm, g = init;

		if (!/loaded|complete/.test(d.readyState + '')) {

			if (d.addEventListener) {
				d.addEventListener('DOMContentLoaded', g, false);
				w.addEventListener('load', g, false);
			}
			else if (rr.IE < 9) {
				w.attachEvent('onload', g);

				d.write('<script id="__ie_onload" defer="defer" src="//:"></script>');
				if (s = d.getElementById('__ie_onload')) {
					s.id = '';
					s.onreadystatechange = function () { //if (rr.IE!=5.5)
						//if (this.readyState == 'complete') g();
						if (this.readyState == 'complete') setTimeout(function () { g() }, 22);
					};
				};
				/*
				var tempNode = d.createElement('document:ready');
				(function() {
				try {
				tempNode.doScroll('left');
				g();
				tempNode = null;
				}
				catch(e) {
				setTimeout(arguments.callee, 10)
				}
				})();
				*/
				return;
			}
			else new function () {
				var ol = w.onload;
				w.onload = ol ? function () { g(); ol(); w.onload = null } : g;
			};

			if (rr.WebKit || rr.Opera < 9) { ///WebKit/i.test(navigator.userAgent)
				tm = setInterval(function () {
					if (/loaded|complete/.test(d.readyState)) {
						clearInterval(tm);
						g()
					}
				}, 10)
			};

		} else g(); // content loaded

	};

	return add;
})();



// document.activeElement  - for WebKit, Gecko<1.9
new function (d) {
	d = d || rr.document;
	if (typeof d.activeElement != 'undefined' || !d.addEventListener || rr.Opera < 8) return;
	try { d.activeElement = d.body } catch (e) { return };

	if (d.defaultView.getSelection) d.activeElement = d.defaultView.getSelection().focusNode || d.body;


	function setIfr(nd) {
		nd.__setEvActiveElement = true;
		var w = nd.contentWindow;
		w.addEventListener('focus', function (e) {
			d.activeElement = nd;
		}, true);

		w.addEventListener('blur', _blur_ = function (e) {
			d.activeElement = d.body;
		}, true);

	};

	d.defaultView.addEventListener('focus', function (e) {
		var t = e.target;
		d.activeElement = (t == d || t == d.defaultView) ? d.body : t;
	}, true);


	d.defaultView.addEventListener('blur', function (e) {
		var ar = d.getElementsByTagName('iframe'), l = ar.length, i;

		for (i = 0; i < l; i++)
			if (ar[i].contentWindow && !ar[i].__setEvActiveElement) setIfr(ar[i]);

		ar = l = null;
		d.activeElement = d.body;
	}, true);
};




// fix save cursor in IE
if (rr.IE < 10) new function (d) {
	d = d || rr.document;

	new function () {
		var pnd;

		d.attachEvent('onbeforeeditfocus', function (e) {
			var nd = e.srcElement;

			if (typeof nd.caret_pos == 'undefined') {
				setup(nd, pnd != nd);
			};
			pnd == null;
		});

		d.attachEvent('onmouseup', function () { pnd = null });

		d.attachEvent('onmousedown', function (e) {
			pnd = e.srcElement;
			pnd.__selectionEnd__ = pnd.__selectionStart__ = null;
		});
	};


	function setup(nd, fs) {
		nd.caret_pos = false;

		nd.attachEvent('onmousedown', function () {
			nd.caret_pos = null;
			nd.__selectionEnd__ = nd.__selectionStart__ = null;
		});


		nd.attachEvent('onfocus', function () {
			if (typeof nd.__selectionStart__ == 'number') {
				var s = nd.__selectionStart__, e = nd.__selectionEnd__;
				s = s > 0 ? s : 0;
				e = e > s ? e : s;

				if (nd.setSelectionRange) {
					nd.setSelectionRange(s, e);
				}
				else {
					var r = nd.createTextRange()
					, v = nd.value
					, l = v.length;

					if (s > l) s = l;
					if (e > l) e = l;

					e = e > s ? v.substring(s, e).replace(/\r\n/g, '\n').length : 0;
					s = v.substring(0, s).replace(/\r\n/g, '\n').length;

					r.moveStart('character', s);
					r.collapse(true);
					if (e > 0) r.moveEnd('character', e);
					r.select();
				};

				nd.__selectionEnd__ = nd.__selectionStart__ = null;
			}

			else if (nd.caret_pos) {
				nd.caret_pos.select();
			};

			nd.caret_pos = null;
		});

		if (fs) nd.__selectionEnd__ = nd.__selectionStart__ = 0; //typeof nd.selectionStart !== 'number'

		nd.attachEvent('onbeforedeactivate', function () {
			//nd.caret_pos = d.selection.createRange().duplicate();
			nd.caret_pos = d.selection.createRange();
			nd.scrollTop;
		});
	};
};
// --
if (!Date.now) { Date.now = function () { return (new Date()).getTime() } }; // Date.now



/*
if (!Function.prototype.bind) {
	(Function.prototype.bind = function (o, f) {
		f = this; return function () { return f.apply(o, arguments) };
	}).bind = Function()();
};
*/  




/* fast reim, ne testil
function trim13 (str) {
var ws = /\s/, _start = 0, end = str.length;
while(ws.test(str.charAt(_start++)));
while(ws.test(str.charAt(--end)));
return str.slice(_start - 1, end + 1);
}
*/

// --




rr.extendNS = function (o, n, ext) {
	var i, v, l, x;
	if (!n && !ext) {
		n = o; o = i;
	};


	o = o || this.global || window;
	n = n.split('.');

	for (i = 0, l = n.length; i < l; i++) {
		if (x = n[i]) {
			if (v) o = o[v] || (o[v] = {});
			v = x;
		};
	};

	if (!o[v]) o[v] = ext || {};
	o = o[v];

	return o;
};

//rr.debug_log('');
//rr.debug_error('');

rr.ns = function (n, o) {
	o = o || this.global || window;

	//alert(n)
	//if (n.indexOf('.')===-1) return o[n]||(o[n]={});

	n = n.split('.');
	for (var i = 0, l = n.length, v; i < l; i++) {
		if (v = n[i]) o = o[v] || (o[v] = {});
	};

	return o;
};

rr.extend = function(o) {
	if (typeof o == 'string') o = this.ns(o);
	if (!o) o = {};

	var i = 1, l = arguments.length, n, e;

	//for(;i<l;) {
	while (i < l) {
		if (e = arguments[i++]) {
			for (n in e)
				if (e.hasOwnProperty(n))
					o[n] = e[n];


			if (rr.IE < 9 && e.hasOwnProperty('constructor')) {
				o.constructor = e.constructor;
			};
		}
	};

	return o;
};



// по новой философии запрешено использовать строковые в первом аргументе , аля rr.extend('xx.ee.sss.aaa', { ....)
// на первое время будет создана функция rr.ex() [и обратная rr.ex_()] , а позже rr.extend() перестанет потдерживать строки в качестве первого аргумета

rr.ex = function(o) {
	var i = 1, l = arguments.length, n, e;
	if (!o) o = {};  

	while (i < l) {
		if (e = arguments[i++]) {
			for (n in e) if (e.hasOwnProperty(n)) o[n] = e[n];
			if (rr.IE < 9 && e.hasOwnProperty('constructor')) o.constructor = e.constructor;
		}
	};

	return o;
};

// обьект расширения указывается последним аргументом
rr.ex_ = function() {
	var i = arguments.length - 1, o = arguments[i] || {}, n, e; 

	while (i--) {
		if (e = arguments[i]) {
			for (n in e) if (e.hasOwnProperty(n)) o[n] = e[n];
			if (rr.IE < 9 && e.hasOwnProperty('constructor')) o.constructor = e.constructor;
		};
	};

	return o;
};


/*
function crFn() {
return function() {
return arguments.callee.$func.apply(arguments.callee, arguments)
};
};
*/

rr.init = function (o) {
	if (typeof o == 'function') {
		return this.domReady(o, true);
	};

	if (typeof o == 'string') o = this.ns(o);
	if (!o) o = {};

	var i = 1, l = arguments.length, n, xr, xi, e;

	for (; i < l; i++) {
		e = arguments[i];

		for (n in e) {
			if (e.hasOwnProperty(n)) {
				switch (n) {
					case '$domReady': xr = e[n]; break;
					case '$init': xi = e[n]; break;
				};

				o[n] = e[n];
			};
		};
	};


	if (typeof xr == 'function') {
		this.domReady(xr.bind(o));
	};

	if (typeof xi == 'function') {
		this.domReady(xi.bind(o), true);
	};

	return o;
};


rr.textSelection_get = function (n) {
	if (typeof n.selectionStart == 'number') {
		return { start: n.selectionStart || 0, end: n.selectionEnd || 0 };
	};

	if (typeof n.__selectionStart__ == 'number') {
		return { start: n.__selectionStart__ || 0, end: n.__selectionEnd__ || 0 };
	};


	if (n.caret_pos) {
		n.caret_pos.select();
		n.caret_pos = null;
	};

	var d = (n.ownerDocument || document), r = n.caret_pos || d.selection.createRange(), s, e;

	if (r.parentElement() != n) {
		if (!n.offsetParent) return { start: 0, end: 0 };
		n.focus();
		r = d.selection.createRange();
	};



	if (n.tagName == 'TEXTAREA') {
		var m = r.getBookmark(), v = n.value;

		r = n.createTextRange();
		r.moveToBookmark(m);

		r.text = '';
		r.moveEnd('character', e = n.value.length);
		e = v.length - e;

		r.text = '';
		s = n.value.length;
		e = s + e;

		r.expand('textedit');
		r.text = v;


		if (s == v.length) {
			r.expand('textedit');
			r.collapse();
		}
		else {
			r = d.selection.createRange();
			r.moveToBookmark(m);
			r.select();
		}
	}

	else {
		e = r.text.length;
		r.moveStart('character', -n.value.length);
		s = r.text.length;
		e = s + e;
	};



	/*
	if (n !== d.activeElement) {
	n.caret_pos = null;
	n.focus();
	}
	*/

	return { start: s, end: e };
}


rr.textSelection_set = function (n, s, e) {
	s = s > 0 ? s : 0;
	e = e > s ? e : s;

	if (n.setSelectionRange) return n.setSelectionRange(s, e);

	if ((n.ownerDocument || document).activeElement !== n) {
		n.__selectionStart__ = s;
		n.__selectionEnd__ = e;
		return;
	};

	var r = n.createTextRange(), v = n.value, l = v.length;
	if (s > l) s = l;
	if (e > l) e = l;



	e = e > s ? v.substring(s, e).replace(/\r\n/g, '\n').length : 0; //.replace(/\r/g, '')
	s = v.substring(0, s).replace(/\r\n/g, '\n').length;


	//r.collapse(true);
	r.moveStart('character', s);
	r.collapse(true);
	if (e) r.moveEnd('character', e);
	//alert(n.scrollTop)
	r.select();
};

rr.textSelection_collapse = function (n, f) {
	this.textSelection_set(n, f ? 0 : n.value.length);
};


// для совместимости с старым кодом
//rr.textSel = {set: rr.textSelection_set, get: rr.textSelection_get};




new function () {

	function x(x) {
		var j = x.length;
		return function (v) {
			v = typeof v == 'string' && v.indexOf(x) > 0 ? +v.slice(0, -j) : NaN;
			return v === v ? v : null;
		}
	};

	rr.getPx = x('px');
	rr.getEm = x('em');
	rr.getEx = x('ex');
	rr.getPc = x('%');
};


rr.extend(rr, {
	//getElementById
	$: function(e, d) {
		return typeof e === 'string' ? (d || rr.document).getElementById(e) : e;
	},

	trim: ''.trim ? function(s, t) { return typeof s == 'string' ? s.trim() : s + '' } : (function(rg) { return function(s, t) { return typeof s == 'string' ? s.replace(rg, '') : s + '' } })(/^[\s|\xA0]+|[\s|\xA0]+$/g),

	timeThrow: function(e) {
		setTimeout(function() { throw e }, 1)
	},

	nullFunction: function() { }, // null Function. not edit.

	newFunction: function() { // fast new Function()
		return function() { };
	},

	new_class: function() {
		var oc = Object.prototype.constructor;
		function cn() { }; // null constructor

		function clss(c) {
			return function(a1, a2, a3) {
				var x = c.parent, l, m, u;

				if (typeof x === 'function') {
					x.apply(this, arguments);
				};

				if (c.factory) {
					switch (l = arguments.length) { // for fast
						case 0: x = c.factory(this); break;
						case 1: x = c.factory(this, a1); break;
						case 2: x = c.factory(this, a1, a2); break;
						case 3: x = c.factory(this, a1, a2, a3); break;

						default:
							for (m = [this]; x = l--; ) m[x] = arguments[l];
							x = c.factory.apply(c, m);
					};

					if (x !== u) return x;
				};
			}
		};

		return function(c) { //new_class
			var l = arguments.length, i, p, s, u;
			if (!c) c = {};

			/*
			for (i = 1; i < l;) {  
			if (s = arguments[i++]) {
			for (p in s) if (s.hasOwnProperty(p)) c[p] = s[p];  
			if (rr.IE < 9 && s.hasOwnProperty('constructor')) o.constructor = s.constructor;
			}; 
			};
			*/


			p = c.parent;
			if (p = p ? p.prototype : false) {
				cn.prototype = p;
				p = new cn;

				if (s = c.prototype) {
					for (i in s) if (s[i] !== u) p[i] = s[i];
					c.prototype = p;
				};
			};

			s = c.constructor;
			if (!s || s === oc) s = clss(c);

			if (p = c.prototype) s.prototype = p;

			if (i = c.interface) s.prototype[typeof i === 'string' ? i : 'interface'] = c;
			s.interface = c;

			return s;
		}
	} (),

	newPrototype: function() {
		var c = function() { }, cp = c.prototype;
		return function(p) { return c.prototype = p || cp, new c }
	} (),

	newTemplate: function() {
		var c = function() { }, cp = c.prototype, ie = !(function(i) { for (i in { constructor: 1 }) return 1 })(), s = !{}.__proto__;

		return function(p) {
			c.prototype = p || cp;
			var x = new c, l = arguments.length, i = 1, n, e;
			//if (!s) {x.__proto__ = p; c.prototype = x; x = new c};  

			while (i < l) {
				if (e = arguments[i++]) {
					for (n in e) if (e.hasOwnProperty(n)) x[n] = e[n];
					if (ie && e.hasOwnProperty(n = 'constructor')) x[n] = e[n];
				};
			};

			return x;
		}
	} (),

	type: (function() {
		var to = Object.prototype.toString;
		var r = typeof /x/ !== 'function';
		//var _ar = toString.call([]);
		//var _dt = toString.call(new Date);
		//var _rg = toString.call(/x/);
		//var _fn = toString.call(function(){});


		return function(v) {
			var x;

			if (v === x) return 'undefined';
			if (v === null) return 'null';

			switch (x = typeof v) {
				case 'function': if (r) break;
				case 'object':
					switch (to.call(v)) {
						case '[object Array]': return 'array';
						case '[object Date]': return 'date';
						case '[object RegExp]': return 'regexp';
						case '[object String]': return 'string';
						case '[object Number]': return 'number';
					};
			};

			return x;
		}
	})(),

	newHttpRequest: this.XMLHttpRequest ? function() { return new XMLHttpRequest() }
		: function() {
			try { return new ActiveXObject('Microsoft.XMLHTTP') } catch (e) { }
		},

	/*
	newHttpRequest: function() {
	var w = this.global||window;
	if (w.XMLHttpRequest) return new w.XMLHttpRequest();
	try {return new w.ActiveXObject('Microsoft.XMLHTTP')}catch(e){};
	},
	*/

	printx: (function() {
		var rg = /%%|%(s|\d{1,2})%?/g, arg, u, l, p;

		function fn(s, x) {
			return s === '%%' ? '%' : x === 's' ? arg[++p] : arg[p = ++x];
		};

		return function(v) {
			if (v && typeof v == 'string') {
				p = 0; arg = arguments; l = arg.length;
				v = v.replace(rg, fn);
			};
			return v
		}
	})(),

	/* хочу переделать на подобие "ууу лрыва длоры ваыв %var_name% kjsdhf lkjsh f".replace('%var_name%', var_name)
	//prints('sdfasasdf $ddd dfghdfjksg $dfsdf$ds$$fgsdf', {ddd: 444, dfsdf: 2222})
	prints: (function () {
	var rg = /\$(\$|([\w]{0,26})(\$|\|([^\s\$][^\$\n]*)?\$)?)/g, nx, o = {}, u;

	function fn(s, x, a2, a3, a4) {
	if (s == '$$') return '$';
	x = nx[a2];
	return x !== u ? x : (!a3 || a3 === '$' ? s : a4 || '');
	};


	return function (v, ns) {
	nx = ns || o;
	return v.replace(rg, fn);
	}
	})(),
	*/

	// join без учета пустрых строк
	ct: function(q) {
		var a = [], i = 1, j = 0, l = arguments.length, x;
		while (i < l) {
			x = arguments[i++];
			if (x || x === 0) a[j++] = x;
		};

		return !j ? '' : a.join(q || '');
	},


	each: function(o, cb, pr) {
		if (!o) return;
		var i, l = o.length, u;

		if (l !== i) {
			i = 0;
			if (o.item) {
				while (i < l) {
					if (cb(o.item(i), i++, l, pr) === false)
						return
				};

				return true;
			};

			while (i < l) {
				if (cb(o[i], i++, l, pr) === false)
					return
			};

		} else for (i in o) if (o.hasOwnProperty(i)) {
			if (cb(o[i], i, u, pr) === false) return;
		};
		return true;
	},

	map: function(a, cb) { //Array.map ? function(a, cb) {return a.map(cb)} :
		if (a && typeof cb == 'function') {
			if (typeof a.map === 'function') return a.map(cb)
			var na = [], l = a.length, i = 0;

			if (l > 0) {
				na.length = l;
				for (; i < l; i++) na.push(cb(a[i], i, a));
			};

			return na;
		}
	},

	indexOf: function(a, x, i) {
		if (a) {
			if (typeof a.indexOf === 'function')
				return a.indexOf(x, i);

			var l = a.length, u;

			i = i > 0 ? i : i < 0 && l > -i ? l + i : 0;
			for (; i < l; i++) if (a[i] === x) return i
		};

		return -1;
	},

	// упрошенный bind для оптимизации производительности 
	bind: function(x, fn) {
		return function() { return fn.apply(x, arguments) }
	},

	/*
	bind_: function(x, fn) {
	if (arguments.length < 3) {
	return function() {return fn.apply(x, arguments)};
	};

	var s = Array.prototype.slice, m = s.call(arguments, 2);
	return function() {
	return fn.apply(x, m.concat(s.call(arguments)) )
	};
	},
	*/

	// function(object, event, handler)
	/*
	addHandler: document.addEventListener ? function(o, e, h, x) {
	if (o && e && h) {
	if (e === 'mouseScroll') e = rr.Gecko ? 'DOMMouseScroll' : 'mousewheel';
	o.addEventListener(e, h, x||false);
	};
	return h;
	} : function(o, e, h, x) {
	if (o && e && h) {
	if (e === 'mouseScroll') e = rr.Gecko?'DOMMouseScroll':'mousewheel';
	if (typeof o.addEventListener != 'undefined') {
	o.addEventListener(e, h, x||false);
	} else o.attachEvent('on' + e, h);
	};
	return h;
	},
	*/

	addHandler: function() {
		var w3 = typeof document.addEventListener === 'function';
		return function(o, e, h, x) {
			if (h === false) h = this.breakEvent;

			if (o && e && h) {
				var a = e.indexOf(' ') !== -1 ? e.split(' ') : [e], i = 0;
				if (o.nodeType < 0) o = o.node;

				while (e = a[i++]) {
					switch (e) {
						case 'mouseScroll':
							e = rr.Gecko ? 'DOMMouseScroll' : 'mousewheel';
							break;
						case 'scroll':
							if (o.nodeType == 9) o = rr.IE || rr.Opera ? o.parentWindow : o;
							break;

						case 'resize':
							if (o.nodeType == 9) o = o.defaultView || o.parentWindow;
							break;

					};
					if (e === 'mouseScroll') e = rr.Gecko ? 'DOMMouseScroll' : 'mousewheel';

					if (w3 || typeof o.addEventListener !== 'undefined') {
						o.addEventListener(e, h, x || false);
					} else o.attachEvent('on' + e, h);
				}
			};

			return h
		}
	} (),

	/*
	removeHandler: function(o, e, h) {
	if (!o || !e || !h) return 'error';
	if (e=='mouseScroll') e=rr.Gecko ? 'DOMMouseScroll' : 'mousewheel';

	if (typeof o.removeEventListener != 'undefined')
	o.removeEventListener(e, h, false);
	else if (typeof o.detachEvent != 'undefined')
	o.detachEvent('on' + e, h);
	else throw 'Incompatible browser';
	},
	*/

	removeHandler: function() {
		var w3 = typeof document.addEventListener === 'function';
		return function(o, e, h, x) {
			if (o && e && h) {
				var a = e.indexOf(' ') !== -1 ? e.split(' ') : [e], i = 0;
				if (o.nodeType < 0) o = o.node;

				while (e = a[i++]) {
					switch (e) {
						case 'mouseScroll':
							e = rr.Gecko ? 'DOMMouseScroll' : 'mousewheel';
							break;

						case 'scroll':
							if (o.nodeType == 9) o = rr.IE || rr.Opera ? o.parentWindow : o;
							break;
					};

					if (w3 || typeof o.removeEventListener === 'function') {
						o.removeEventListener(e, h, !!x);
					} else o.detachEvent('on' + e, h);
				}
			};
		}
	} (),

	addHandler_: function(o, e, h, x) { return this.addHandler(o, e, h, x !== false) },
	removeHandler_: function(o, e, h, x) { return this.removeHandler(o, e, h, x !== false) },


	// getClientWH return {w: view_width, h: view_height, st:scrollTop, sl:scrollLeft, sw:scrollWidth, sh:scrollHeight}
	getClientWH: function(d, sc) {
		d = d || this.document;

		if (rr.qIE && !d.body) return { x: 800, y: 600 };

		var v = rr.qIE ? d.body : d.documentElement
		, r = {
			w: v.clientWidth,
			h: v.clientHeight
		}
		, w
		;



		if (!sc) {
			r.sw = v.scrollWidth;
			r.sh = v.scrollHeight;

			if (w = d.defaultView) {
				r.st = w.pageYOffset;
				r.sl = w.pageXOffset;
			}
			else {
				r.st = v.scrollTop;
				r.sl = v.scrollLeft;
			};
		};

		return r;
	},

	/**
	* возврашает значение Y прокрутки докумета
	* @param {document} d,
	* @return {number} значение window.pageYOffset
	*/
	getScrollTop: function(d) {
		d = d || this.document;
		return rr.IE ? (rr.qIE ? d.body || false : d.documentElement).scrollTop : d.defaultView.pageYOffset;
	},

	/**
	* устанавливает значение Y прокрутки для документа
	* @param {int} y, значение в px
	* @param {document} d
	*/
	setScrollTop: function(y, d) {
		d = d || this.document;

		if (y < 0) y = 0;
		if (y > 0 || y === 0) {
			(rr.WebKit ? d.body || false : d.documentElement).scrollTop = y;
		};
	},

	/**
	* устанавливает значение X & Y прокрутки для документа
	* @param {number} x, значение в px, window.pageXOffset
	* @param {number} y, значение в px, window.pageYOffset
	* @param {document} d
	*/
	scrollTo: typeof window.scrollTo == 'function' ? function(d, x, y) {
		(d || document).defaultView.scrollTo(x > 0 ? x : 0, y > 0 ? y : 0)
	} : function(d, y, x) {
		if (!d) d = document;

		if (rr.IE && window.scrollTo) {
			d.parentWindow.scrollTo(x > 0 ? x : 0, y > 0 ? y : 0)
			return;
		};

		var n = rr.WebKit ? d.body || false : d.documentElement;
		if (n) {
			n.scrollLeft = x > 0 ? x : 0;
			n.scrollTop = y > 0 ? y : 0;
		};
	},

	//getScrollLeft: function(d) {return 0},

	/**
	* определяет положение ноды относительно начала кординат документа
	* @param {Element} n, элемент
	* @return {Object} , кординаты элемента {x: .. , y: ..}
	*/
	getAbsolutePos: document.documentElement.getBoundingClientRect ? function(n) {
		if (!n) return;
		var d = n.ownerDocument || rr.document, w = d.parentWindow || d.defaultView, v, bx;
		if (rr.IE) {
			v = rr.qIE ? d.body : d.documentElement;
			if (!v) return { x: 0, y: 0 };
		};


		bx = n.getBoundingClientRect();

		return {
			y: bx.top + ((v ? v.scrollTop - v.clientTop : w.pageYOffset) || 0),
			x: bx.left + ((v ? v.scrollLeft - v.clientLeft : w.pageXOffset) || 0)
		};

	} : function(el) {
		var r = { x: el.offsetLeft, y: el.offsetTop }, tmp, op = el.offsetParent;
		if (op) {
			tmp = arguments.callee(op);
			if (!op.offsetParent) return r;

			if (rr.IE && op.tagName == 'HTML') return r;
			r.x += tmp.x - op.scrollLeft;
			r.y += tmp.y - op.scrollTop;
		}
		return r;
	},

	getRect: document.documentElement.getBoundingClientRect ? function(n) {
		if (n) return n.getBoundingClientRect();
	} : function(n) {
		if (!n) return;
		var ps = this.getAbsolutePos(n), d = n.ownerDocument || this.document, cwh = this.getClientWH(d);
		return {
			left: p.x - cwh.sl,
			top: p.y - cwh.st,
			right: p.x + n.offsetWidth - cwh.sl, //cwh.w -
			bottom: p.y + n.offsetHeight - cwh.st //cwh.h -
		}
	},

	// (tagName, node, flag), функционал устарел но еше может гдето использоваться
	getParentNode: function(t, n, f) {
		t = (t && t.toUpperCase()) || 'TR';
		if (!f && n) n = n.parentNode;

		var x;
		while (x = n && n.tagName) {
			if (x == t) return n;
			n = n.parentNode;
		};
	},


	getAtt: function(n, nm) {
		if (n) return n.getAttributeNode ? (n.getAttributeNode(nm) || false).value : n.getAttribute(nm, 2);

		/*
		if (n)
		if (!n.getAttributeNode) {
		return  n.getAttribute(nm, 2); // (, 2) - неуверен что нужно, но пусть будет
		} else if (nm = n.getAttributeNode(nm)) return nm.value;
		*/
	},

	removeAtt: function(nd, nm, x) {
		if (nd)
			if (!nd.getAttributeNode) {
				nd.removeAttribute(nm);
			} else if (nm = nd.getAttributeNode(nm))
				nd.removeAttributeNode(nm);
	},

	/*
	// w - window
	getSelectedText: function(w) {
	w = w|| this.global || window;
	var tx='', s, d = w.document;

	if (w.getSelection) {
	if (typeof(w.getSelection)=='function'){
	tx = w.getSelection().toString();
	} else tx=d.getSelection();

	} else if (d.selection && d.selection.createRange){
	tx=d.selection.createRange().text;
	}
	return tx;
	},
	*/

	getCStyle: function(n, dv) {
		if (typeof n === 'string') n = this.$(n);
		if (n) return n.currentStyle || (n.ownerDocument || this.document).defaultView.getComputedStyle(n, null);
	},

	//rr.style(node, {width: '30px', height: '10%'})
	//rr.style(node, 'width:')
	style: rr.setStyle = function(n, pr) {
		if (typeof n == 'string') n = this.$(n);
		if (!n) return;
		var st = n.style, x, a, und;

		if (typeof pr == 'object') {
			x = pr.cssText;
			if (x || x === '') {
				rr.Opera < 9 ? n.setAttribute('style', x) : st.cssText = x;
			};

			if (rr.IE < 9) {
				x = pr.opacity;

				if (x || x === 0 || x === '') {
					if (a = n.filters['DXImageTransform.Microsoft.alpha'] || n.filters.alpha) {
						if (a.enabled = x !== '') a.opacity = Math.round(x * 100);
					}
					else if (x !== '') {
						st.filter += 'alpha(opacity=' + Math.round(x * 100) + ')';
					};
				};
			};

			for (x in pr) {
				if (x !== 'cssText') st[x] = pr[x];
			};

		} else rr.Opera < 9 ? n.setAttribute('style', pr) : st.cssText = pr;
	},


	removeNode: function(n, p) {
		if (typeof n === 'string') n = this.$(n);

		if (p = n && n.parentNode) {
			p.removeChild(n);

			if (rr.IE < 7 && n.tagName == 'STYLE') {
				var s = (n.ownerDocument || this.document).documentElement.style;
				p = s.borderColor;
				s.borderColor = p == '#FFFFFF' ? '#FFE' : '#FFF';
				s.borderColor = p;
			}
		};

		return n;
	},


	urlEscape: function(x) {
		return window.encodeURIComponent(x).replace(/\%20/g, '+');
	},

	urlDecode: function(x) {
		return typeof x !== 'string' ? x + '' : decodeURIComponent(x.replace('+', '%20'));
	},

	jsEscape: window.JSON && JSON.__native_ !== false && JSON.stringify('\u0451') == '"\u0451"' ? // test native
		  function(v) { return JSON.stringify(v + '').slice(1, -1) }
		: new function() {
			var rg = new RegExp('\\\\|[\"\'\\n\\r\\b\\t\\f]', 'g'), c = { '\\': '\\\\', '"': '\\"', '\'': '\\\'', '\n': '\\n', '\r': '\\r', '\b': '\\b', '\t': '\\t', '\f': '\\f' };
			function r(x) { return c[x] };

			return function(v) {
				return typeof v == 'string' ? v.replace(rg, r) : v + '';
			}
		},

	htmlEscape: (function() {
		var rg = new RegExp('[&<>"]', 'g'), cm = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
		function r(A) { return cm[A] };

		return function(A) {
			return (typeof A !== 'string' ? String(A) : A).replace(rg, r); //'
		}
	})(),

	createSWF: function(pr, d) {
		if (!pr || !pr.src) return;
		d = (pr.parent && pr.parent.ownerDocument) || d || pr.document || this.document;

		function apIE(n, nm, v) {
			var x = d.createElement('param');
			x.name = nm;
			x.value = v;
			n.appendChild(x);
		};

		var sd, x, i, tv, n = d.createElement(this.IE < 9 ? '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" name="' + (pr.name || '~z ' + d.createElement('span').uniqueID) + '">' : 'embed');
		if (!(this.IE < 9)) n.type = 'application/x-shockwave-flash';

		if (this.IE && pr.ieFSCommand) {
			i = d.createElement('script'); i.event = 'FSCommand(command,args)'; i.htmlFor = n.name; i.text = 'eval(args)'; // type='text/javascript'
			d.getElementsByTagName('head')[0].appendChild(i);
		};

		for (i in pr) {
			x = pr[i];
			switch (i = i.toLocaleLowerCase()) {
				case 'vars': if (pr.flashvars) break; i = 'flashvars';
				case 'flashvars': case 'menu': case 'quality': case 'scale': case 'wmode': case 'bgcolor': case 'swliveconnect': case 'allowscriptaccess': case 'allowfullscreen': case 'seamlesstabbing': case 'allownetworking':
					if ((tv = typeof x) == 'string' || tv == 'number' || tv == 'boolean') {
						this.IE < 9 ? apIE(n, i, x) : n.setAttribute(i, x);
					};
					break;
				case 'id': case 'className': case 'width': case 'height': if (x || x === 0) n[i] = x; break;
				case 'style': this.setStyle(n, x); break;
			};
		};


		if (x = this.Gecko && pr.parent && n.style) {
			sd = x.display;
			x.display = 'none';
		};

		if (x = pr.src) this.IE < 9 ? apIE(n, 'movie', x) : n.src = x;

		if (x = pr.parent) {
			x.appendChild(n);
			if (x = this.Gecko) n.style.display = sd || '';
			if (x || this.Opera) n.offsetParent;
		};

		return n;
	},

	/*
	cfg {function|object|false}
	cfg.event {function(src, true|false)}
	cfg.defer {false|default true}
	cfg.rm {boolean} removing tag
	cfg.document {document}
	cfg.charset {string|fasle} , def utf-8
	*/
	appendScript: function(src, cfg) {
		cfg = cfg ? typeof cfg === 'function' ? { event: cfg} : this.newPrototype(cfg) : false;


		var d = cfg.document || this.document, h = d.getElementsByTagName('head')[0], s = d.createElement('script'), ok;
		s.charset = cfg.charset || 'utf-8';
		s.type = 'text/javascript';
		if (cfg.defer !== false) s.defer = 'defer';

		if (cfg.event) {
			function q() {
				if (!ok) {
					ok = true;
					s.onreadystatechange = s.onload = s.onerror = null;
					if (cfg.event) cfg.event(src, true);
					if (cfg.rm || cfg.remove) h.removeChild(s);
				}
			};

			if (rr.IE) s.onreadystatechange = function() {
				switch (s.readyState) {
					case 'complete': case 'loaded': q()
				}
			}
			else s.onload = q;

			s.onerror = function() {
				s.onreadystatechange = s.onload = s.onerror = null; ok = true;
				if (cfg.event) cfg.event(src, false);
				if (cfg.rm || cfg.remove) h.removeChild(s);
			};
		};

		s.src = src;
		s = h.insertBefore(s, h.firstChild);
	},

	stopEvent: function(e) {
		if (e) {
			if (e.stopPropagation) e.stopPropagation();
			e.cancelBubble = true;
		};
	},


	//breakEvent_: rr.IE<9 ? function(e) {e.returnValue = false} : function(e) {e.preventDefault()},
	breakEvent: function(e) {
		if (e) {
			e.returnValue = false; // не удалять, используется в логике программ
			if (e.preventDefault) e.preventDefault();
		};

		return false;
	},

	breakDOMEvent: function(e) { // node.onclick = rr.breakDOMEvent;
		if (!e && this.nodeType > 0) e = this.ownerDocument.parentWindow.event; // for IE<9
		if (e) {
			e.returnValue = false; // не удалять, используется в логике программ
			if (e.preventDefault) e.preventDefault();
		};

		return false;
	},


	stopPropagation: function(e) {
		if (e) {
			if (e.stopPropagation) e.stopPropagation();
			e.cancelBubble = true;
		};
	},
	preventDefault: function(e) {
		if (e) if (e.preventDefault) { e.preventDefault() } else e.returnValue = false;
	},

	// css_
	styles_list: {/*name: []*/
	}, // array only
	styles_groups: {/*name: 'string'*/
	}, // string only

	styles_extend: function(g, ns, x) {
		if (g && ns) {

			if (x = this.styles_groups[g]) {
				this.css_add(ns, x = { className: x });
				x = x.className
			} else x = ns;

			this.styles_groups[g] = x;
		};
	},

	styles: (function() {
		function exend(a, m) {
			var l = m.length, i = 0, x;

			for (; i < l; i++)
				if (x = m[i]) {
					switch (typeof x) {
						case 'string': a.push(x); break;

						case 'object':
							if (x && typeof x.push == 'function') {
								exend(a, x);
							};
							break;
					};
				};
		};

		return function(ex) {
			if (!ex && ex != null) return;
			var x, i, l, j, a = ex, u, fs;

			//group:csslist ololo


			if (!ex || typeof ex != 'string') {
				ex = '~global';
			}
			else {
				i = ex.indexOf(':');
				if (i !== -1) {
					x = i ? ex.substring(0, i) : 'global';

					this.styles_extend(x, ex);
				};
			};


			a = this.styles_list[ex] || (this.styles_list[ex] = []);
			if (!(a instanceof Array)) {
				return; // error
			};

			for (i = 1, j = arguments.length; i < j; i++)
				if (x = arguments[i])
					switch (typeof x) {
					case 'string': a.push(x); break;
					case 'object':
						if (x && typeof x.push == 'function') {
							exend(a, x);
						};
						break;
				};
			return this;
		};
	})(),

	styles_create: function(tx, d, s) {
		d = d || this.document;

		if (d.createStyleSheet) {
			s = d.createStyleSheet();
			try { s.cssText += tx } catch (e) { };
			return s.owningElement;
		};

		(s = d.createElement('style')).type = 'text/css';
		s.appendChild(d.createTextNode(tx));
		if (d = d.getElementsByTagName('head')[0]) d.appendChild(s);
		return s;
	},

	styles_include: function(ns, d) {
		this.styles_stepindex++;

		var a = this.styles_assemble(ns), i, x;
		if (!d || d.nodeType !== 9) d = rr.document;


		if (a && a.length > 0) {
			return this.styles_create(a.join('\n'), d);
		};
	},

	styles_stepindex: 0,
	styles_assemble: function(ns, a, r) {
		if (!ns || typeof ns != 'string') return;

		if (!a) a = [];
		var m = ns.split(' '), l = m.length, j = a.length, i = 0, u, s, x;

		for (; i < l; i++) if (x = m[i]) {
			if (s = !r && this.styles_groups[x]) {
				a[j++] = '\n /* start groups -- ' + x + ' */';
				if (s = this.styles_assemble(s, a, true)) j = s.length;
				a[j++] = '\n\n /* -- end groups */';
			};

			s = this.styles_list[x];
			if (s && s.stepIndex !== this.styles_stepindex && s.length) {
				s.stepIndex = this.styles_stepindex;
				a[j++] = '\n /* ' + x + ' */'; //include -
				a[j++] = s.join('\n'), s;
			};
		};

		if (j) return a;
	},




	// cookies
	cookie_get: function(n) {
		var c = document.cookie, p = n + '=', e, b;
		if (!c) return null;

		b = c.indexOf('; ' + p);

		if (b == -1) {
			b = c.indexOf(p);
			if (b != 0) return null;
		} else
			b += 2;

		e = c.indexOf(';', b);
		if (e == -1) e = c.length;
		return unescape(c.substring(b + p.length, e));
	},

	// name, value, expires, path, domain, secure
	cookie_set: function(n, v, e, p, d, s) {
		if (typeof e == 'number') {
			e = new Date(new Date().getTime() + e);
		};

		document.cookie = n + '=' + escape(v) +
			((e) ? '; expires=' + e.toGMTString() : '') +
			((p) ? '; path=' + escape(p) : '') +
			((d) ? '; domain=' + d : '') +
			((s) ? '; secure' : '');
	},

	cookie_remove: function(n, p, d) {
		this.set(n, '', -1000, p, d);
	}

});


//rr.killBubble = rr.stopEvent; // duble  , antiquated
//rr.stopEventDefault = rr.breakEvent; // antiquated
//rr.gId = rr.$; // antiquated


/*
// cookies, устаревший интерфейс
rr.extend('rr.cookie', {
get : rr.cookie_get,
set : rr.cookie_set,
remove : rr.cookie_remove,

getHash : function(n) {
var v = this.get(n), h;

if (v) {
rr.each(v.split('&'), function(v) {
v = v.split('=');
h = h || {};
h[unescape(v[0])] = unescape(v[1]);
});
};

return h;
},

// name, value, expires, path, domain, secure
setHash : function(n, v, e, p, d, s) {
var o = '';

rr.each(v, function(v, k) {
o += (!o ? '' : '&') + escape(k) + '=' + escape(v);
});

this.set(n, o, e, p, d, s);
}
});
*/






(function () {
	var rr = window.rr;

	function css(o, d) { if (o) this.node = o };

	rr.css = function (o, d) {
		if (typeof o === 'string') {
			var i = o.indexOf('#');
			o = (d || this.document).getElementById(i !== -1 ? o.substring(++i) : o);
		};

		return new css(o);
	};


	css.prototype = {
		node: null,

		//$:	function(n, nw, d) {if (nw || this.node) this.node = g(n, d);return this},
		add: function (s) { this.rv = rr.css_add(s, this.node); return this },
		remove: function (s) { this.rv = rr.css_remove(s, this.node); return this },
		replace: function (a, b) { this.rv = rr.css_replace(a, b, this.node); return this },
		flip: function (s) { this.rv = rr.css_flip(s, this.node); return this },
		is: function (s, cb) { var t = this; if (typeof cb == 'function') { cb.call(t, rr.css_is(s, t.node), s) } else t = rr.css_is(s, t.node); return t },
		get: function (s) { return rr.css_get(s, this.node) },
		set: function (s, f) { f ? rr.css_add(s, this.node) : rr.css_remove(s, this.node); return this },
		parent: function (s, f) { var n = this.node, u; return new css(!s && !arguments.length ? n && n.parentNode : rr.css_parent(s, n, f)) },
		has: function (s) { if (!rr.css_is(s, this.node)) this.node = null; return this },
		hasNot: function (s) { if (rr.css_is(s, this.node)) this.node = null; return this },
		cb: function (cb) { cb.call(this); return this },

		near: function (s, cb) {
			var t = this, n = t.node, x;

			if (n && s && typeof cb == 'function') {
				n = rr.css_first(s, n.parentNode);
				while (n) {
					if (n != t.node && cb.call(new css(n), t) === false) break;
					n = rr.css_next(s, n);
				};
			};

			return t;
		},

		childs: function (s, cb) {
			var t = this, n = t.node;
			if (n && s && typeof cb == 'function') {
				n = rr.css_first(s, n);

				while (n) {
					if (cb.call(new css(n), t) === false) break;
					n = rr.css_next(s, n);
				};
			};

			return t;
		},

		first: function (s) { return new css(rr.css_first(s, this.node)) },
		next: function (s) { return new css(rr.css_next(s, this.node)) },
		prev: function (s) { return new css(rr.css_prev(s, this.node)) }
	};
})();


// хочу в будуюшем перепесить к такому виду
//rr.css_is();
//rr.css_add();
//rr.css_remove();
//rr.css_set();
//rr.css_set_();
//rr.css_flip();
//rr.css_first();
//rr.css_next();
//rr.css_prev();
//rr.css_parent();

// важно. не используйте \t и \n в именах класса, только пробел. это ограничение ради производительности
rr.extend(rr, {
	css_is: function (cl, n) {
		if (typeof n == 'string') n = this.$(n);
		if (!cl || !n || !(n = n.className)) return;
		n = ' ' + n + ' ';

		if (cl.indexOf(' ') === -1) {
			return n.indexOf(' ' + cl + ' ') !== -1
		};

		cl = cl.split(' ');
		var i = cl.length, c;

		while (i--) {
			if ((c = cl[i]) && n.indexOf(' ' + c + ' ') === -1) return false;
		};

		return true
	},

	css_add: function (cl, n) {
		if (typeof n === 'string') n = this.$(n);
		if (!cl || !n) return;

		var cn = n.className, r;
		if (r = !cn) return n.className = cl, r;

		var xc = ' ' + cn + ' ';
		if (cl.indexOf(' ') === -1) {
			if (r = xc.indexOf((cl = ' ' + cl) + ' ') === -1) {
				//n.className = cn+cl;
				n.className += cl;
			};

			return r;
		};

		cl = cl.split(' ');
		var i = cl.length, c;

		while (i--) {
			if ((c = cl[i]) && xc.indexOf((c = ' ' + c) + ' ') === -1) {
				cn += c;
				r = true;
			};
		};

		if (r) n.className = cn;
		return r;
	},


	css_remove: function (cl, o, cn) {
		if (typeof o === 'string') o = this.$(o);
		if (!cl || !o || !(cn = o.className)) return;

		var ac = cn.indexOf(' ') !== -1 ? cn.split(' ') : [cn]
		, l = ac.length
		, i = -1, i2 = 0, s, flg;

		cl = ' ' + cl + ' ';

		while (++i < l) if (s = ac[i]) {
			cl.indexOf(' ' + s + ' ') !== -1 ? flg = true : ac[i2++] = s;
		};

		if (flg) {
			if (!i2) {
				o.className = '';
				if (o.removeAttribute) o.removeAttribute('class');
			}
			else {
				ac.length = i2;
				o.className = ac.join(' ');
			};
		};

		return flg;
	},


	css_flip: function (cl, o) {
		if (typeof o === 'string') o = this.$(o);
		if (o) return this.css_add(cl, o) || (this.css_remove(cl, o) && false);
	},

	css_replace: function (cl, cl2, o, x) {
		if (typeof o === 'string') o = this.$(o);

		if (x = cl && cl2 && o && o.className) {
			if (this.css_remove(cl, x = { className: x })) {
				o.className = cl2 + ' ' + x.className;
				return true;
			};
		};
	},

	css_set: function (cl, o, fl) {
		return fl ? this.css_add(cl, o) : this.css_remove(cl, o);
	},

	css_set_: function (cl, o, sx) {
		var cn, ac;
		if (typeof o === 'string') o = this.$(o);
		if (!cl || !o || !(cn = o.className) && !sx) return;

		sx = sx ? cl + sx : false;
		if (sx && !cn) {
			o.className = sx;
			return true;
		};

		ac = cn.indexOf(' ') != 1;
		if (sx) if (ac ? (' ' + cn + ' ').indexOf(' ' + sx + ' ') != -1 : cn == sx) return;


		ac = ac ? cn.split(' ') : [cn];
		var i = 0, i2 = 0, l = ac.length, s, flg, fg2;


		while (i < l) {
			if (s = ac[i++]) {
				if (s === sx) fg2 = true;
				s !== sx && !s.indexOf(cl) ? flg = true : ac[i2++] = s;
			};
		};

		if (sx && !fg2) {
			ac[i2++] = sx;
			flg = true;
		};

		if (flg) {
			if (!i2) {
				o.className = '';
				if (o.removeAttribute) o.removeAttribute('class');
			}
			else {
				ac.length = i2;
				o.className = ac.join(' ');
			};
		};

		return flg;
	},

	css_get: function (cl, o) {
		if (typeof o == 'string') o = this.$(o);
		if (!o || !cl || !(o = o.className)) return;

		o = ' ' + o + ' ';
		var u, s, i = 0;

		if (cl.indexOf(' ') === -1) {
			return o.indexOf(' ' + cl + ' ') !== -1 ? cl : u;
		};

		cl = cl.split(' ');
		while (s = cl[i++], s !== u) {
			if (s && o.indexOf(' ' + s + ' ') !== -1) return s;
		};
	},


	css_get_: function (cl, o, cn) {
		if (typeof o === 'string') o = this.$(o);
		if (!cl || !o || !(cn = o.className)) return;

		var s = (' ' + cn).indexOf(' ' + cl), e;
		if (s !== -1) {
			e = cn.indexOf(' ', s);
			return e !== -1 ? cn.substring(s, e) : cn.substring(s)
		}
	},


	css_first: function (cl, o) {
		if (typeof o === 'string') o = this.$(o);
		if (o) {
			o = o.firstChild;
			while (o) {
				if (this.css_is(cl, o)) return o;
				o = o.nextSibling;
			};
		};
	},

	css_next: function (cl, o) {
		if (typeof o === 'string') o = this.$(o);
		if (o) while (o = o.nextSibling) {
			if (this.css_is(cl, o)) return o;
		};
	},

	css_prev: function (cl, o) {
		if (o = _g(o))
			while (o = o.previousSibling) {
				if (this.css_is(cl, o)) return o;
			};
	},

	css_parent: function (cl, o, f) {
		if (typeof o === 'string') o = this.$(o);
		if (!o || !cl) return;

		var t = this, v;

		if (!f) o = o.parentNode;
		t.css_return = v;

		for (; o; o = o.parentNode) {
			if (v = t.css_get(cl, o)) {
				t.css_return = v;
				return o;
			};
		};
	},

	css_switch: function (c, n, ix) {
		if (!n || c === null) return;
		var css = n.className, ncss = css, nc, x, j, r, i, index_of;

		switch (typeof c) {
			case 'string': c = c.split(' '); break;
			case 'object': break;
			default: return
		};

		if (ix !== ix || typeof ix !== 'number') {
			ix = c.length < 2 ? 0 : false;
		};



		if (!css) {
			if (x = c[ix || 0]) {
				n.className += ' ' + x;
			};

			return !!x;
		};

		index_of = !!c.indexOf;

		if (css.indexOf(' ') === -1) {
			j = index_of ? c.indexOf(css) : this.indexOf(c, css);

			if (j === -1) {
				x = c[ix || 0];

				if (r = x && x !== '~') {
					n.className += ' ' + x;
				};

				return r;
			};

			if (ix !== false) {
				x = c[ix];
				if (x === '~') x = '';

				if (r = x !== css) {
					n.className = c[ix] || '';
				};

				return r;
			};

			ix = j + 1 < c.length ? j + 1 : 0;

			if (x = ix !== j) {
				n.className = c[ix] || '';
			};

			return x;
		};

		var acss = css.split(' '), l = acss.length;
		var ncss = [], change = false, has_nc;

		if (ix !== false) {
			nc = c[ix];
			if (nc === '~') nc = '';

			for (i = 0; i < l; i++) if (x = acss[i]) {
				if (nc === x) {
					if (!has_nc) ncss.push(nc);
					has_nc = true;
					continue;
				};

				j = index_of ? c.indexOf(x) : this.indexOf(c, x);

				if (j !== -1) {
					change = true;
					continue;
				};

				ncss.push(x);
			};

			if (!has_nc) {
				ncss.push(nc);
				change = true;
			};

			if (change) {
				n.className = ncss.join(' ');
			};

			return change;
		};

		r = -1;
		for (i = 0; i < l; i++) if (x = acss[i]) {
			j = index_of ? c.indexOf(x) : this.indexOf(c, x);

			if (j === -1) {
				ncss.push(x);
				continue;
			};

			r = j;
		};

		if (++r >= c.length) {
			r = 0;
		};

		x = c[r];
		if (x && x !== '~') {
			ncss.push(x);
		};

		n.className = ncss.join(' ');
		return true;
	}

});



//rr.extendNS(null, 'rr.expansion_event', {
rr.expansion_event = {
	addEvent: function (p, h, up) {
		switch (typeof p) {
			case 'string': return this.addEventListener(p, h, up);

			case 'object':
				for (var i in p) {
					h = p[i];
					if (typeof h == 'function')
						this.addEventListener(i, h, up);
				};

				return this;
		}
	},

	// n {string} - name
	// cb {function} - Listener
	// f {boolean} - first
	addEventListener: function (n, cb, f) { //f - first
		if (n && cb) {
			var g = this._events_list || (this._events_list = {}), a = g[n];
			a ? f ? a.unshift(cb) : a.push(cb) : g[n] = [cb];
		};

		return cb;
	},

	removeEventListener: function (n, cb) {
		var g = this._events_list, a, u, i;
		if (a = g && g[n]) {
			for (i = a.length; i--; ) if (a[i] === cb) a.splice(i, 1)
		}
	},

	removeEventAll: function (n) {
		var g = this._events_list;
		if (g && g[n]) delete (g[n]);
	},

	/* неуверен что нужно
	pauseEvent: function(nm, fg) {
	var t = this, ls = t._events_list, l, i, a, fn;

	if (!ls) ls = t._events_list = {};
	ls = ls[name];
	if (!ls) ls = ls[name] = [];

	ls.stopEvent = !!fg;
	},
	*/

	initEvent: function (n, e1, e2, e3) {
		var g = this._events_list, i = 0, a, l, fn, c;

		if (a = g && g[n]) {
			l = a.length;

			switch (arguments.length) {
				case 1: while (i < l) if (fn = a[i++]) if (fn.call(this) === false) return false; break;
				case 2: while (i < l) if (fn = a[i++]) if (fn.call(this, e1) === false) return false; break;
				case 3: while (i < l) if (fn = a[i++]) if (fn.call(this, e1, e2) === false) return false; break;
				case 4: while (i < l) if (fn = a[i++]) if (fn.call(this, e2, e3) === false) return false; break;

				default:
					n = this; c = Function.call;
					while (i < l) if (fn = a[i++]) {
						if (c.apply(fn, arguments) === false) return false;
					};
			};
		}
	},

	//apply as array
	initEvent_: function (n, as) {
		var t = this, ls = t._events_list, i = 0, l, fn;
		if (!as || !n || !ls || !(ls = ls[n]) || ls.stopEvent) return;
		l = ls.length;

		while (i < l) if (fn = ls[i++]) {
			//try {
			if (fn.apply(t, as) === false) return false
			//} catch (e) {rr.timeThrow(e)};
		};

		//return as;
	}
};

//elist.add
rr.class_listHandler = function () { };
rr.class_listHandler.prototype = {
	add: function (o, e, h, key, x) {
		if (!h || !e || !o) return;
		var t = this, en = 'ev_' + e, ls = ls || (t[en] = []), i = 0;
		for (; ls[i]; i++);

		h = rr.addHandler(o, e, h, x);
		ls[i] = e = { o: o, h: h, x: x };
		if (key) e.k = key;

		return h;
	},

	remove: function (e, h, key) {
		var en = 'ev_' + e, ls = this[en], i, und, ev;
		if (!ls) return;

		i = ls.length;
		while (i--) {
			ev = ls[i];
			if (!ev || (key && ev.k != key) || (h && ev.h != h)) continue;
			rr.removeHandler(ev.o, e, ev.h, ev.x);
			ls[i] = und;
		};
	},

	removeAll: function (key) {
		var t = this, i;
		for (i in t) if (/*t.hasOwnProperty(i) && */!i.indexOf('ev_')) {
			t.remove(i.substr(3), null, key);
		};

	}
};


//rr.extendNS(null, 'rr.class_objEvent', function(pr, ofn) {
rr.class_objEvent = function (pr, ofn) {
	function evObj(name, e) {
		return evObj.initEvent(name, e);
	};

	rr.extend(ofn || evObj, rr.expansion_event).addEvent(pr); ;
	return evObj;
};



/*
var groupEvents = rr.new_groupEvents();

groupEvents(node, 'click', function() {
})
groupEvents('close') // снимит все обработчики
groupEvents('start') // снова установит

*/

rr.new_groupEvents = function () {
	var list = [], connected = true, rr = this;

	return function (node, event, handler, dn) {
		var i, x;
		switch (node) {
			case 'start':
				if (!connected) {
					connected = true;

					for (i = 0; x = list[i]; i++) {
						rr.addHandler(x[0], x[1], x[2], x[3]);
					}
				};
				return;

			case 'close':
				if (connected) {
					connected = false;

					for (i = 0; x = list[i]; i++) {
						rr.removeHandler(x[0], x[1], x[2], x[3]);
					}
				};
				return;
		};

		list.push([node, event, handler, dn]);
		if (connected) {
			rr.addHandler(node, event, handler, dn)
		};

		return handler;
	};
};

