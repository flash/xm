

(function () {
	rr.new_master = function (d, ns) {
		d = d && d.ownerDocument || d || rr.document;
		if (!ns) ns = {};

		function c_(nn, q) {
			if (nn === 'text') return d.createTextNode(q);
			if (!nn) return;

			var tg, p, a, u, l = arguments.length, i, x, id, cl, rn, pn, sx;

			if (q) {
				a = true;
				if (!q.nodeType && typeof q == 'object') {
					if (q.length === u || !isArray(q)) {
						p = q;
						q = p.add;
						if (q === u) a = u;
					};
				};

			} else a = q === 0 || q === '';



			// create element
			switch (nn) {
				case 'BODY': case 'body':
					nn = d.body;
					break;

				case 'DocumentFragment':
					nn = d.createDocumentFragment();
					p = false;
					break;

				case 'br': case 'span': case 'a': case 'div': case 'td': case 'BR': case 'SPAN': case 'A': case 'DIV': case 'TD':
					nn = d.createElement(nn);
					break;

				default:
					if (typeof nn !== 'string') {
						if (rn = nn.nodeType < 0) {
							if (p && typeof nn.set == 'function') {
								ui.set(p);
							};
						};
						break;
					};

					i = nn.indexOf(':');
					if (rn = i !== -1) {
						nn = cr(i ? nn.substring(0, i) : 'default', nn.substring(++i), p || false, d, ns, c_);
						if (!nn) return;
						break;
					};


					// tag.className#idNode
					i = nn.indexOf('#');
					if (i > 0) {
						id = nn.substring(i + 1);
						x = i;
					};

					i = nn.indexOf('.');
					if (i > 0) {
						cl = x ? nn.substring(i + 1, x) : nn.substring(i + 1);
						x = i;
					};

					if (x) nn = nn.substring(0, x);

					switch (nn) {
						case 'BODY': case 'body':
							nn = d.body;
							break;

						case 'BUTTON': case 'button': nn = tg = 'BUTTON';
						case 'input': if (!tg) tg = 'INPUT';
						case 'INPUT':
							if (rr.IE < 9 && p) {
								nn = d.createElement('<' + nn + ' ' + (p.name ? ' name="' + p.name + '"' : '') + (p.type ? ' type="' + p.type + '"' : '') + ' />');
								break;
							};
						default:
							nn = d.createElement(nn);
					};
			};

			// set param
			if (!rn && p) {
				for (x in p) {
					i = p[x];
					if (i === u) continue;

					switch (x) {
						//case 'text': if (i || i === '' || i === 0) nn.appendChild(d.createTextNode(i));  
						case 'text':
							if (i || i === '' || i === 0) {
								if (tg !== 'OPTION' || rr.IE < 9) {
									nn.appendChild(d.createTextNode(i));
								} else nn.text = i;
							};
							//break;

						case 'parent': case 'add':
							//case 'before':
						case 'appendChild':
						case 'insertAfter':
						case 'insertBefore':
							break;

						case 'id': if (i) id = i; break; // || i===0
						case 'className': case 'css':
							if (i && typeof i === 'string') cl = cl ? cl + ' ' + i : i;
							break; // || i===0

						case 'style':
							typeof i === 'string' ?
								rr.Gecko <= 2 ? nn.setAttribute('style', i) : nn.style.cssText = i
								: i && rr.setStyle(nn, i);
							break;

						case 'href':
							if (rr.IE && i && i.indexOf('@') !== -1) i = encodeURIComponent(i); //i = i.replace('@', '%40');
							nn.href = i;
							break;

						default:
							if (rr.IE < 9 && tg === 'BUTTON') continue;

							if (x.indexOf('attr ') === 0) {
								if (x = x.substr(5)) nn.setAttribute(x, i);
								continue;
							};

							//try {
							nn[x] = i;
							//} catch (e) {alert(nn+'  '+x+': '+i)};
					};
				};
			};

			if (!rn) {
				if (cl) nn.className = cl;
				if (id) nn.id = id;
			};

			i = a ? 1 : 2;
			if (i < l) {
				pn = nn;
				if (rn && !nn.appendChild) {
					pn = nn.box || nn.node;
					if (!pn) l = u;
				} else sx = rn;

				while (i < l) {
					if (a = arguments[i++]) {
						x = a.nodeType;
						if (x > 0) {
							pn.appendChild(a);
							continue;
						};

						if (x < 0) {
							if (sx) { pn.appendChild(a) } else if (a = a.node) pn.appendChild(a);
							continue;
						};
					};

					switch (typeof a) {
						case 'number': if (a !== a) break;
						case 'string':
							//try {
							pn.appendChild(d.createTextNode(a));
							//} catch (e) {alert(pn);throw e};
							break;

						case 'object':
							if (isArray(a)) {
								append(pn, a, d, sx);
							};
					};
				};
			};


			return p ? p.parent || p.insertBefore || p.insertAfter ? insert(nn, p, rn) : nn : nn;
		};

		c_.global = ns;
		c_.document = d;

		//c_.e = d.masterElement||rr.cr_(d);
		c_.text = text;
		c_.html = html;

		c_.clone = clone;
		c_.tmpl = tmpl;
		c_.forEach = forEach;

		return c_;
	};


	var isArray = Array.isArray || new function (o) {
		var x = Object.prototype.toString, s = x.call([]);
		return function (o) { return x.call(o) === s }
	};


	function text(x) {
		return this.document.createTextNode(x || (x === 0 ? 0 : ''))
	};

	var N2A; try { N2A = Array.prototype.slice.call(document.documentElement.childNodes) instanceof Array } catch (e) { };

	function html(x) {
		var n = this.nullNode || (this.nullNode = this.document.createElement('div')), a, i;
		n.innerHTML = x;
		n = n.childNodes;

		if (i = n.length) {
			if (N2A) return Array.prototype.slice.call(n);

			for (a = []; i--; ) a[i] = n[i];
			return a
		};
	};

	function insert(nn, p, rn) {
		var x, a, ip, ib, pn, i;

		if (rn) {
			if (x = p.parent) {
				if (i = x.nodeType) {
					if (i < 0 && x.appendChild) {
						x.appendChild(nn)
					}
					else {
						x = i < 0 ? x.box || x.node : x;
						pn = nn.nodeType < 0 ? nn.node : nn
						if (x && pn) x.appendChild(pn);
					};
				};
			};
			return nn;
		};

		// insert
		if (p.insertAfter) {
			a = p.insertAfter;
			ib = a.nextSibling;
			if (!ib) ip = a.parentNode;
		};

		if (a = p.parent || p.appendChild || ip)
			return a.appendChild(nn);

		if (a = p.insertBefore || ib)
			return a.parentNode.insertBefore(nn, a);

		return nn;
	};


	function append(nn, m, d, s) {
		var i = 0, l = m.length, a, x;

		while (i < l) {

			if (a = m[i++]) {
				x = a.nodeType;

				if (x > 0) {
					nn.appendChild(a);
					continue;
				};

				if (x < 0) {
					if (s) { nn.appendChild(a) } else if (a = a.node) nn.appendChild(a);
					continue;
				};
			};

			switch (typeof a) {
				case 'number': if (a !== a) break;
				case 'string':
					nn.appendChild(d.createTextNode(a));
					break;

				case 'object':
					if (isArray(a)) append(nn, a, d, s);
			};
		};
	};

	function clone() {
		var ns = this.namespace, c;
		if (this.clone_namespace === ns) return this;

		c = rr.new_master(this.document, this.global);
		c.namespace = c.clone_namespace = this.namespace;
		return c;
	};




	/*
	ui - name ui || ui element
	pr - set parament
	doc - document
	ns - local name space
	_cr - constructor element
	*/

	//var _nullprm = {};
	function cr(tp, ui, pr, d, gs, _cr) {
		if (!ui) return;

		var ns = tp === 'default' ? _cr.namespace : gs[tp], x = _cr.namespace, s, c;
		if (!ns) return false;

		if (c = ns[ui]) {
			s = { name: ui, type: tp, document: d, namespace: ns, interface: c };

			if (typeof c === 'function') {
				_cr.namespace = ns;

				if (!c.prototype.nodeType) c.prototype.nodeType = -1;
				ui = new c(_cr, pr, s);

				_cr.namespace = x;
			}
			else {
				return false;
			};

			return ui;
		};
	};

	function tmpl(nn, pr) {
		switch (typeof nn) {
			case 'function':
				if (!nn.prototype.nodeType) nn.prototype.nodeType = -1;
				return new nn(this, pr, false);

			case 'string': break;
			default: return;
		};

		var x = nn.indexOf(':'), nx = this.namespace, ns = x > 0 ? this.global[nn.substring(0, x)] : nx;
		if (x === -1 || !ns) return;
		nn = ns[x = nn.substring(++x)];

		if (typeof nn === 'function') {
			this.namespace = ns;
			if (!nn.prototype.nodeType) nn.prototype.nodeType = -1;
			nn = new nn(this, pr, false);
			this.namespace = nx;
			if (nn) return nn;
		};
	};

	function nnFn() { };
	var nproto = nnFn.prototype;
	function forEach(a, ct) {
		if (typeof a === 'number' && a === a) {
			a = { length: a };
		};

		if (!a || !a.length) {
			if (typeof a !== 'number' || !(x > 0)) {
				return
			};

			a = { length: a };
		};

		var l = a.length, i = 0, iend = l - 1, m = [], x = ct.prototype, e = { first: true, last: false, list: a }, v, u;

		if (!x.nodeType) x.nodeType = -1;
		nnFn.prototype = x;

		for (; i < l; i++) {
			if (i === iend) e.last = true;
			e.index = i;

			x = new nnFn();
			v = ct.call(x, this, a[i], e); //

			if (v || v === 0 || v === '') { m.push(v) } else if (v === u) m.push(x);
			if (!i) e.first = false;
		};

		return m;
	}
})();


