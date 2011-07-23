elems.uButton = rr.new_class({	interface: false,
	constructor: function(_, pr) {		var ui = this, v;

		v = typeof pr.text;
		ui.texts = v === 'string' ? [pr.text] : v === 'object' && v ? pr.text : [];

		v = typeof pr.title;
		ui.titles = v === 'string' ? [pr.title] : v === 'object' && v ? pr.title : [];

		v = typeof pr.css_icon;
		ui.icons = v === 'string' ? [pr.css_icon] : v === 'object' && v ? pr.css_icon : [];


		if (pr.index_icon > 0) ui.index_icon = pr.index_icon;
		if (pr.index_text > 0) ui.index_text = pr.index_text;
		if (pr.index_title > 0) ui.index_title = pr.index_title;

		if (pr.active) ui.active = true ;


		var xprm = rr.newPrototype(pr);
		xprm.text = ui.texts[ui.index_text];
		xprm.title = ui.titles[ui.index_title];
		xprm.css_icon = ui.icons[ui.index_icon];

		ui.nodes = new tmpl.uButton(_, xprm);

		ui.node = ui.button = ui.nodes.node;
		ui.text = ui.nodes.text;


		rr.addHandler(ui.node, 'click', function(e) {			if (typeof ui.onclick == 'function') {
				if (ui.onclick(e) === false) {
					rr.breakEvent(e)
					};
				};
			});
		},

	prototype: {		index_icon: 0,
		index_text: 0,
		index_title: 0,
		active: false,
		set_disabled: function(x) {			this.button.disabled = !!x;

			var cl = this.node.className, xc = {className: cl};
			rr.css_set(this.nodes.s_disabled, xc, x);
			rr.css_set(this.nodes.s_disabled_no, xc, !x);
			if (cl !== xc.className) this.node.className = xc.className;

			//x ? this.button.setAttribute('disabled', 'disabled') : rr.removeAtt(this.button);
			},

		set_active: function(x) {			this.active = !!x;			rr.css_set(this.nodes.s_active, this.node, x);
			},

		set_icon: function(x) {// true|false|right|only			var v = this.icon, n;
			v = !v ? 'none' : v =='only' || v == 'right' ? v : 'left';
			x = !x ? 'none' : x =='only' || x == 'right' ? x : 'left';

			if (x != v) {				this.icon = x;
				rr.css_set_('b-ubutton--icon-', this.node, x);
				};
			},

		set_cssIcon: function(x, i) {			if (typeof x == 'string') {
				i = rr.indexOf(this.icons, x);
				x = i < 0 ? this.icons.push(x) - 1 : i;
				};

			this.set_indexIcon(x);
			},

		set_indexIcon: function(x) {			var i;

			if (x < 0) {
				i = this.index_icon||0;
				if (i >= 0) rr.css_remove(this.icons[i], this.nodes.wrap);
				this.index_icon = -1;
				return
				};

			i = this.index_icon||0;
			if (x >= 0 && i !== x) {
				this.index_icon = x;

				if (i = this.icons[i]) rr.css_remove(i, this.nodes.wrap);
				if (x = this.icons[x]) rr.css_add(x, this.nodes.wrap);
				};
			},

		set_indexText: function(x, xt) {			if (this.index_text != x && x >= 0) {				this.nodes.text.data = this.texts[x];
				this.index_text = x;
				};

			if (xt>0 || xt === 0) {				this.set_indexTitle(xt)				};
			},

		set_indexTitle: function(x) {
			if (this.index_title != x && x >= 0) {
				this.node.title = this.titles[x];
				this.index_title = x;
				};
			}
		}	});

elems.uInput = rr.new_class({
	interface: false,
	constructor: function(_, pr) {		var ns = new tmpl.uInput(_, pr), ui = this;

		this.nodes = ns;
		this.node = ns.node;
		this.input = ns.input;

		this.help = pr.help;

		rr.addHandler(ns.input, 'focus', function(e) {			rr.css_add('b-uinput-help_text--hide', ns.help_text_wr);
			rr.css_add('b-uinput--focus', ns.node);
			if (typeof ui.onfocus == 'function') {				if (ui.onfocus(e) === false) {					rr.breakEvent(e)					};				};			});

		rr.addHandler(ns.input, 'blur', function(e) {
			if (!ns.input.value && ui.help) {				rr.css_remove('b-uinput-help_text--hide', ns.help_text_wr);
				};

			rr.css_remove('b-uinput--focus', ns.node);

			if (typeof ui.onblur == 'function') {
				if (ui.onblur(e) === false) {
					rr.breakEvent(e)
					};
				};
			});

		rr.addHandler(ns.input, 'change', function(e) {			if (ns.input.value) {
				rr.css_add('b-uinput-help_text--hide', ns.help_text_wr);
				};

			if (typeof ui.onchange == 'function') {				ui.onchange(e);
				};
			});


		if (!ns.input.value && ui.help) {			rr.css_remove('b-uinput-help_text--hide', ns.help_text_wr);
			};
		},

	prototype: {		// onchange: function(){},
		// onfocus: function(){},
		// onblur: function(){},

		nodeType: -1,		set_help: function(x) {			this.help = x;

			if (!x) {				rr.css_add('b-uinput-help_text--hide', this.nodes.help_text_wr);
				}
			else {				this.nodes.help_text.data = x;				};
			},

		set_value: function(v) {			this.input.value = v;
			rr.css_set('b-uinput-help_text--hide', this.nodes.help_text_wr
				, !!this.input.value
				);
			if (typeof this.onchange == 'function') {
				this.onchange();
				};
			},

		get_value: function() {			return this.input.value;			},

		focus: function() {			if (this.node.offsetParent) {				this.input.focus();
				return true;
				}			},

		setSelection: function(a, b) {			rr.textSelection_set(this.input, a, b);			}
		}
	});
