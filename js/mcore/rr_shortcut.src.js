/*
shortcut
*/

rr.extend('rr.shortcut', {
	add: function (comb, callback, up) {
		var i, t = this, rgx = /[\s,]+/;
		function add(cmb, fn, up) {
			if (fn && cmb) rr.each(cmb.split(rgx), function (v) {
				v && t._add(v, fn, up);
			});
		};

		if (typeof comb == 'string') return add(comb, callback, up);
		if (!callback) for (i in comb) add(i, comb[i], up);
	},

	remove: function (cmb, fn) {
		var oe = this._event;
		cmb = this._cnvComb(cmb);
		if (oe && cmb) if (fn) {
			oe.removeEventListener(cmb, fn);
		} else oe.removeEventAll(cmb);
	},

	addEventListener: function (a1, a2, a3) {
		return this._add(a1, a2, a3);
	},

	removeEventListener: function (a1, a2) {
		this.remove(a1, a2);
	},

	_rgxPls: /\+/i,

	_firstSetup: false,

	_add: function (comb, callback, up) {
		comb = this._cnvComb(comb);
		if (!comb || !callback) return;
		this._setup();

		this._event.addEvent(comb, callback, up);
		return callback;
	},

	_cnvComb: function (cmb) {
		if (!cmb) return;

		cmb = cmb.toLowerCase();
		var ar = cmb.split(this._rgxPls), i, v, key, kC, kS, kA;

		for (i in ar) switch (v = ar[i]) {
			case 'ctrl': kC = true; break;
			case 'shift': kS = true; break;
			case 'alt': kA = true; break;
			default: if (v) key = v;
		};

		if (key) {
			v = kC ? 'ctrl+' : '';
			if (kA) v += 'alt+';
			v += kS ? 'shift+' + key : key;
			return v;
		};
	},

	_keydown: function (e) {
		e = e || window.event;
		if (!e) return;
		var tg = e.target || e.srcElement,
                    key, comb, code, rv, prm, cbAll, t = this,
                    tn = tg && tg.nodeName.toLowerCase() || 'html';

		//if (tn == '#document') tn = 'html';

		if (e.keyCode) {
			code = e.keyCode;
		} else if (e.which) code = e.which;

		t.stopKeyPress = false;
		if (code > 15 && code < 19) return;


		if (code > 111 && code < 124) {
			key = "f" + (code - 111);
		} else key = t._keyLs[code] || String.fromCharCode(code).toLowerCase();

		comb = e.ctrlKey ? 'ctrl+' : '';
		if (e.altKey) comb += 'alt+';
		cbAll = comb + (e.shiftKey ? 'shift+allkey' : 'allkey');
		comb += e.shiftKey ? 'shift+' + key : key;

		prm = {
			event: e,
			isEditPole: (tn == 'input' || tn == 'textarea' || tn == 'iframe'),
			targetName: tn,
			target: tg,
			code: code,
			key: key,
			comb: comb
		};


		rv = t._event(comb, prm);
		if (rv === false || rv && (rv.stopEvent === true)) {
			t.stopKeyPress = true;
			return rr.killBubble(e);
		};

		rv = t._event('allKey', prm);
		if (rv === false || rv && (rv.stopEvent === true)) {
			t.stopKeyPress = true;
			return rr.killBubble(e);
		};
	},

	_keyLs: { '192': '`', '222': "'", '191': '?', '109': '-', '107': '+', '190': '>', '188': '<', '32': 'space', '8': 'backspace', '13': 'enter', '9': 'tab', '27': 'esc', '37': 'left', '38': 'up', '39': 'right', '40': 'down' },

	_keypress: function (e) {
		e = e || window.event;
		if (this.stopKeyPress) return rr.killBubble(e);
	},

	_setup: function (doc) {
		var t = this, timmer;
		if (t._event) return;

		t._event = new rr.class_objEvent();
		t._event.remove = function (cmb, fn) {
			t.remove(cmb, fn);
		};

		rr.addHandler(doc || document, 'keydown', function (e) {
			t._keydown(e)
		}, true);


		if (!rr.IE)
			rr.addHandler(doc || document, 'keypress', function (e) {
				/*
				if (timmer) return;
				timmer = setTimeout(function() {
				timmer = false
				}, 20);
				*/
				return t._keypress(e);
			}, true);
	}
});


