/* history
rr.domReady(function() {
hash_history = new rr.class_history('/home/')
})


rr.domReady(function() {
ramail.hash_history = new rr.class_history('/home/');
ramail.hash_history.change = function() {
}
})

*/
rr.class_history = function (sh, p) {
	p = p || false;

	this.document = p.document || document;
	if (p.change) this.change = p.change;

	if (sh) this.start(sh, d);
};

rr.extend(rr.class_history.prototype, { //, rr.expansion_event
	ieframe: false,
	current_hash: '', //'/home'

	change: function (new_hash) { },

	start: function (sh) {
		var t = this;
		t.start_hash = typeof sh == 'string' ? rr.trim(sh) : '';
		if (this.active) return;

		rr.domReady(function () {
			var sh = t.start_hash
			, d = t.document
			, hash = t.document.location.hash
			, n, v;

			t.start_hash = null;
			t.active = true;


			if (rr.IE < 8) {
				n = t.ieframe = d.createElement('iframe');
				n.style.display = 'none';
				d.body.appendChild(n)
			};


			if (!hash || hash == '#' && sh) {
				sh = rr.trim(sh);
				if (rr.IE < 8) hash = sh;

				if (rr.IE < 7) {
					var xh = t.document.location.href;
					setTimeout(function () { if (t.document.location.href == xh) t.document.location.hash = sh }, 0);
				}
				else {
					t.document.location.replace(
						sh.charAt(0) == '#' ? sh : '#' + sh
						);
				};
			};

			//hash = t.document.location.hash;
			hash = rr.IE < 8 ? t.reFrame(hash).location.hash : t.document.location.hash;
			if (hash == '#') hash = '';
			t.current_hash = hash;

			t.change(hash ? hash.substr(1) : '');
			setInterval(v = rr.bind(t, t.check), 50);
		});
	},

	reFrame: function (x/*hash*/) {
		var n = this.ieframe, u;
		n = n.contentWindow.document; //n.contentDocument || n.contentWindow.document;
		n.open();
		n.write('<html><head><title>' + rr.htmlEscape(this.document.title) + '</title><body>');
		n.close();
		if (x !== u) n.location.hash = x;
		return n;
	},


	check: function () {
		var t = this
		, lhs = t.document.location.hash
		, n, ihs, nh, u;

		if (lhs == "#") lhs = '';

		if (rr.IE < 8) {
			ihs = this.ieframe.contentWindow.document.location.hash;
			if (ihs == "#") ihs = '';

			if (ihs != t.current_hash) {
				//alert('a: l='+ihs+'  c='+t.current_hash);
				nh = t.document.location.hash = ihs;
			} else
				if (lhs != ihs) {
					//alert('b: l='+lhs+'  i='+ihs+'  x:' )
					t.reFrame(nh = lhs);
				};
		}
		else if (lhs != t.current_hash) {
			nh = lhs;
		};

		if (nh !== u) {
			t.current_hash = nh;
			t.history_length = history.length;
			t.change(nh ? nh.substr(1) : '');
		};
	},

	replace: function (x) {
		if (!this.active) return this.start_hash || '';
		if (typeof x !== 'string') return false;
		x = rr.trim(x);

		if (rr.IE < 8) {
			this.document.location.hash = this.ieframe.contentWindow.document.location.hash = x;
		}
		else {
			this.document.location.replace(
				x.charAt(0) == '#' ? x : '#' + x
				)
		};

		x = this.document.location.hash;
		this.current_hash = x == '#' ? '' : x;

		return this.current_hash;
	},

	get: function () {
		if (this.active) this.check();
		var x = this.active ? this.current_hash : this.document.location.hash || ''; //this.start_hash||
		return x ? x.substr(1) : x;
	},

	set: function (x) {
		var t = this, ch = t.current_hash;

		if (typeof x === 'string' && ch != (x ? '#' + x : '')) {
			t.document.location.hash = x;
			if (rr.IE < 8) t.reFrame(x);

			x = t.document.location.hash;
			t.current_hash = x != '#' ? x : '';

			setTimeout(function () {
				var v = t.document.location.hash;
				if (x == v) {
					t.change(v && v != '#' ? v.substr(1) : '');
				};
			}, 10);
		};
	}
});

