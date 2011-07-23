/* XHR Loader */
new function () {
	rr.extendNS(null, 'rr.class_xhrloader', function (prm) {
		var xhr = new createXHR();
		if (!xhr) return false;

		rr.extend(this, {
			httpRequest: xhr,
			_param: {},
			_paramConst: {},
			_pastParam: {}
		}, oxhr);

		if (typeof prm == 'object') {
			if (prm.setconst) {
				this.set(prm.setconst, true);
				delete (prm.setconst);
			};

			rr.extend(this, prm);
		};
	});

	function createXHR() {
		var hrx = null, ar, i;
		if (window.XMLHttpRequest) {
			hrx = new XMLHttpRequest();
		} else {
			ar = ['MSXML2.XmlHttp.4.0', 'MSXML2.XmlHttp', 'Microsoft.XmlHttp'];
			for (i = 0; i < ar.length; ++i) {
				try {
					hrx = new ActiveXObject(ar[i]); break;
				} catch (ex) { hrx = null; };
			};
		};

		return hrx;
	};

	function creBoundary() {
		return '-------------------' + Math.random().toString(34).substr(2);
	};

	var oxhr = {
		urlResource: '/',
		metodRequest: 'POST',
		contentType: null,
		startTimeout: 550,
		timeout: 300,

		_state: false,
		_timer: null,
		_boundary: null,

		set: function (nm, vl, fl) {
			if (typeof nm == 'object') {
				for (var i in nm) this._set(i, nm[i], vl);
			} else this._set(nm, vl, fl);
		},

		_set: function (nm, vl, fl) {
			this._param[nm] = vl;
			if (typeof fl != 'undefined') this._paramConst[nm] = !!fl;
		},

		get: function (fl) {
			var i, o = fl ? this._paramConst : this._param, or = {};
			for (i in o) or[i] = o[i];
			return or;
		},

		del: function (nm, fl) {
			var t = this,
			    p = t._param,
			    pc = t._paramConst,
			    o = {}, oc = {}, i;

			if (nm === true) {
				if (!fl) for (i in p) if (pc[i]) {
					o[i] = p[i];
					oc[i] = true;
				};


				t._pastParam = p;
				t._param = o;
				t._paramConst = oc;

				return p;
			};


			if (typeof p[nm] != 'undefined') delete (p[nm]);
			if (typeof pc[nm] != 'undefined') delete (pc[nm]);
		},

		getQuery: function (rf) {
			var t = this,
			    mfd = (t.contentType == 'multipart/form-data'),
			    bdr = mfd && creBoundary(),
			    q = '', p = t._param, pc = t._paramConst,
			    enc = window.encodeURIComponent || function (v) { return v },
			    i, v, z, ii, l;

			if (bdr) t._boundary = bdr;

			function add(i, v) {
				if (mfd) {
					q += '--' + bdr + '\r\nContent-Disposition: form-data; name="' + i + '"\r\n\r\n' + v + '\r\n';
				} else q += '&' + i + '=' + enc(v);
			};

			for (i in p) if (p.hasOwnProperty(i)) {
				v = p[i];
				if (v instanceof Array) {
					for (ii = 0, l = v.length; ii < l; ii++) add(i, v[ii]);
				} else add(i, v);
			};

			if (!mfd) { q = q.substr(1) } else q += '--' + bdr + "--";
			t._pastParam = rf ? t.del(true) : null;

			return q;
		},

		__change: function () {
			var t = this;
			return function () {
				try {
					t._xhrChange();

				} catch (e) { setTimeout(function () { throw e }, 0) };
			};
		},

		_send: function () {
			if (this._state) return false;

			var t = this, xhr = t.httpRequest,
			    m = t.metodRequest || 'POST',
			    q = t.getQuery(true),
			    url = t.urlResource,
			    ctype = t.contentType;


			if (ctype == 'multipart/form-data') {
				ctype += "; boundary=" + t._boundary;
			} else if (m == 'POST') {
				ctype = 'application/x-www-form-urlencoded'
			};

			if (m != 'POST') {
				m = 'GET';
				if (q) url += ((url.indexOf("?") == -1) ? "?" : (url.charAt(url.length - 1) != "?") ? "&" : "") + q;
			};

			if (ctype && xhr.overrideMimeType) t.httpRequest.overrideMimeType(ctype);
			xhr.open(m, url, true);

			if (ctype) {
				xhr.setRequestHeader('Content-Type', ctype);
				xhr.setRequestHeader('Content-Length', q.length);
			};


			xhr.onreadystatechange = t.__change();
			t._flStop = false;
			t._state = true;

			try {
				t.httpRequest.send(m == 'POST' && q ? q : null);
			} catch (oh) {
				try { xhr.onreadystatechange = null } catch (e) { };
				t._xhrChange('error');
				throw oh;
			};

			t.evLoading(true);
			return true;
		},


		_xhrChange: function (status) {
			var t = this, nmEv, xhr = t.httpRequest;
			if (t._flStop) {
				t._state = t._flStop = false;
				return;
			};

			var readyState = status ? 4 : xhr.readyState, text;
			if (readyState != 4) return;

			try {
				status = status || xhr.status;
				text = xhr.responseText;
				try { xhr.onreadystatechange = null } catch (e) { };
				xhr.abort();
			} catch (oh) {
				setTimeout(function () { throw oh }, 0);
			};

			t._state = false;
			t.evLoading(false);


			nmEv = t['xhrChange_' + status] ? status : (t.xhrChange_other ? 'other' : null);
			if (nmEv && t['xhrChange_' + nmEv]) t['xhrChange_' + nmEv](text, status);
		},

		_xhrStop: function (fl) {
			if (fl && this._timer) {
				window.clearInterval(this._timer);
				this._timer = false;
			};
			if (!this._state) return;
			this._flStop = true;
			this.httpRequest.abort();
		},


		goSend: function () {
			return this._send();
		},

		status: function () {
			return !this._state && !this._timer;
		},

		fastSend: function (newDelay) {
			var t = this, fn, timeout = t.timeout;
			if (!t._state && !t._timer) if (t.startTimeout) {
				timeout = t.startTimeout;
			} else return t._send();

			t._xhrStop(!newDelay);

			if (newDelay && t._timer) return true;
			var fn = function () {
				t._timer = null;
				t._send();
			};

			t._timer = window.setTimeout(fn, timeout);
			return true;
		},

		xhrChange_200: function (text) {
		},

		xhrChange_other: function (text, status) {
		},

		evLoading: function (fl) {
		}

	};
};

