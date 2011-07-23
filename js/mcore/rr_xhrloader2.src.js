

rr.xhr = new function () {
	var boundary = '';

	function getQ(nx, mfd) {
		var q = [], i, v, x, j, l;

		boundary = mfd ? '--' + Math.random().toString(34).substr(2, 6) : false;
		mfd = boundary;


		for (i in nx) {
			v = nx[i];
			i = mfd ? i.substring(1) : encodeURIComponent(i.substring(1));

			switch (typeof v) {
				case 'boolean':
					v = v ? 'true' : 'false';
				case 'number':
					if (v !== v) break;
					v += '';

				case 'string':
					if (mfd) {
						while (v.indexOf(mfd) !== -1) mfd += Math.random().toString(34).substr(2, 3);
						//q.push('\r\nContent-Disposition: form-data; name="'+i+'"\r\n\r\n'+v+'\r\n');

						q.push(i + '"\r\n\r\n' + v);



						//q.push(i, v);
						break
					};

					q.push(i + '=' + encodeURIComponent(v));
					break;

				case 'object':
					l = v.length;
					if (l > 0) {
						for (j = 0; j < l; j++) {
							x = v[j];
							switch (typeof x) {
								case 'boolean': x = x ? 'true' : 'false';
								case 'number': if (x !== x) break;
									x += '';
								case 'string':
									if (mfd) {
										//x = '\r\nContent-Disposition: form-data; name="'+i+'"\r\n\r\n'+x+'\r\n';
										q.push(x = i + '"\r\n\r\n' + x);
										while (x.indexOf(mfd) !== -1) mfd += Math.random().toString(34).substr(2, 3);
										break
									};

									q.push(i + '=' + encodeURIComponent(x));
									break;
							};
						};
					};
					break;
			};
		};


		if (!q.length) return '';

		if (mfd) {
			return '--' + mfd + '\r\nContent-Disposition: form-data; name="'
				+ q.join('\r\n--' + mfd + '\r\nContent-Disposition: form-data; name="')
				+ '\r\n--' + mfd + '--';
		};

		return q.join('&');
	};


	function delay(t, x) {
		if (t.is_delay) clearTimeout(t.is_delay);
		if (t.is_sending) {
			return;
		};

		t.is_delay = setTimeout(function () {
			t.is_delay = false;

			var nx = t.stack.shift();
			if (nx) send(t, nx)
		}, x > 10 ? x : 10);
	};

	function stop(t, dl) {
		if (!t.is_sending || t.is_delay) return;

		//t.is_delay = true;
		t.is_sending = false;
		delay(t, dl);

		var xhr = t.xhr;
		if (xhr.timmer) {
			clearInterval(xhr.timmer)
			xhr.timmer = false;
		};

		//if (xhr.readyState != 4)
		xhr.abort();

	};


	function event(t, nx) {
		var xhr = t.xhr, status, text;

		try {
			text = xhr.responseText;
			status = xhr.status;
		} catch (e) {
			status = false;
		};

		try { xhr.abort() } catch (e) { };


		//if (!(rr.IE<9)) try{xhr.onreadystatechange = null} catch(e){};


		try {
			if (typeof t.event == 'function') {
				t.event(status, text, nx);
			};

			if (status && typeof t['ev_' + status] == 'function') {
				t['ev_' + status](text, nx);
			};
		}

		catch (e) {
			setTimeout(function () { throw e }, 0)
		};


		t.is_sending = false;
		delay(t);
	};

	function send(t, nx, async) {
		var xhr = t.xhr, url = t.url, m = 'POST', q, type;

		if (t.post) {
			//type = t.post != 'application/x-www-form-urlencoded' ? 'multipart/form-data' : t.post;
			type = (typeof t.post == 'string' && t.post) || 'application/x-www-form-urlencoded'; //

			if (xhr.overrideMimeType) xhr.overrideMimeType(type);
			//q = type == 'application/json' ? : getQ(nx, type == 'multipart/form-data');

			q = getQ(nx, type == 'multipart/form-data');
			if (type == 'multipart/form-data') {
				type += '; boundary=' + boundary;
			};
		}
		else {
			m = 'GET';
			url += (url.indexOf("?") != -1 ? (/[\?\&]$/.test(url) ? '' : '&') : '?') + getQ(nx);
		};

		xhr.open(m, url, true);

		if (type) {
			xhr.setRequestHeader('Content-Type', type);
			xhr.setRequestHeader('Content-Length', q.length);
		};

		xhr.onreadystatechange = function () {
			if (t.is_delay || xhr.readyState != 4) return;
			event(t, nx);
		};




		t.is_sending = true;
		xhr.send(q || null);
	};

	function cprm() { };
	cprm.prototype.get = function (n) {
		return this['~' + n];
	};

	cprm.prototype.each = function (cb) {
		var i;
		for (i in this) if (this.hasOwnProperty(i)) cb(i, this[i]);
	};


	function clss() {
		this.xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

		this.stack = [];
		this.next = new cprm;
	};

	clss.prototype = {
		url: null,
		post: false,
		//stack: null,
		//xhr: null,

		get: function (n) { return xhr.next['~' + n] },

		set: function (A, B) {
			switch (typeof A) {
				case 'string':
					this.next['~' + A] = B;
					break;

				case 'object':
					for (var i in A)
						this.next['~' + i] = A[i];
					break;
			}
		},

		send: function () { //async !== false
			this.stack.push(this.past = this.next);
			this.next = new cprm;

			//alert('next '+!!(this.is_sending || this.is_delay));

			if (!this.is_sending && !this.is_delay) {
				send(this, this.stack.shift())
			};
		},

		fastSend: function (dl) {
			var nx = this.past = this.next;
			this.next = new cprm;

			this.stack.length = 0;


			if (this.delay > 10) {
				if (this.is_sending && !this.is_delay) {
					stop(this, this.delay);
				}
				else {
					delay(this, this.delay);
				}

				this.stack.push(nx);

				return;
			};


			if (this.is_sending) stop(this);

			if (this.is_delay) { this.stack.push(nx) }
			else send(this, nx);
		},

		stop: function () {
			this.stack.length = 0;
			stop(this);
		}
	};

	return function (url, post) {
		if (!url || typeof url != 'string') url = null;
		var x = new clss();

		x.url = url;
		x.post = post || false;

		return x;
	}
};




rr.xhr_send = (function () {
	var clss = rr.newFunction();
	clss.prototype = {
		xhr: null,
		abort: function () {
			var xhr = this.xhr;
			if (xhr) {
				this.xhr = null;
				try { xhr.abort(); xhr.onreadystatechange = null } catch (e) { };
			};
		}
	};


	return function xhr_send(prm) {
		if (!prm || !prm.url) return;

		var obj = new clss();
		var xhr = rr.newHttpRequest();

		var cb = typeof prm.event == 'function' ? prm.event : null;

		var i, x;
		var async = prm.async !== false;
		var url = prm.url;
		var p = prm.data, q = '';
		var json = prm.dataType == 'json';

		var postType = prm.post && typeof prm.post == 'string' ? prm.post : 'application/x-www-form-urlencoded';


		function end() {
			var status = xhr.status;
			var text = xhr.responseText;
			var data = text;

			if (status == 200) status = false;

			if (json) {
				try { data = window.JSON && JSON.__native_ !== false ? JSON.parse(data) : (new Function('return ' + data))() }
				catch (e) {
					status = 'error json';
					data = null
				};
			};


			json ? cb(data, status, text) : cb(text, status);
		};




		switch (postType) {
			case 'application/json':
			case 'multipart/form-data':
				break;

			case 'text/plain':
				q = typeof p == 'string' ? p : null;
				break;

			case 'application/x-www-form-urlencoded':
			default:
				if (p) {
					q = [];
					for (i in p) {
						x = p[i];
						switch (typeof x) {
							case 'number': if (x !== x) break;
							case 'string':
								q.push(i + '=' + encodeURIComponent(x));
								break;
						};
					};

					q = q.join('&');
				};
		};

		if (!prm.post && q) {
			url += (url.indexOf("?") != -1 ? (/[\?\&]$/.test(url) ? '' : '&') : '?') + q;
		};

		if (prm.rndURL) {
			url += (url.indexOf("?") != -1 ? (/[\?\&]$/.test(url) ? '' : '&') : '?')
				+ (typeof prm.rndURL == 'string' ? prm.rndURL + '=' : 'rnd=')
				+ Math.random().toString(32).substr(2, 5);
		};

		if (prm.post) {
			if (xhr.overrideMimeType) xhr.overrideMimeType(postType);
		};



		xhr.open(prm.post ? 'POST' : 'GET', url, async);

		if (cb && async) {
			obj.xhr = xhr;

			xhr.onreadystatechange = function () {
				if (!obj.xhr || xhr.readyState != 4) return;
				obj.xhr = null;

				var x = xhr;
				xhr = { status: x.status, responseText: x.responseText };

				setTimeout(end, 1);
				try { x.abort(); x.onreadystatechange = null } catch (e) { };
			};
		};

		if (prm.post) {
			xhr.setRequestHeader('Content-Type', postType);
			if (q) xhr.setRequestHeader('Content-Length', q.length);
		};


		new function () {
			xhr.send(prm.post && q ? q : null);
		};

		if (cb && !async) {
			end();
		};

		return obj;
	};

})()
