elems.uButton = rr.new_class({
	constructor: function(_, pr) {

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


		rr.addHandler(ui.node, 'click', function(e) {
				if (ui.onclick(e) === false) {
					rr.breakEvent(e)
					};
				};
			});
		},

	prototype: {
		index_text: 0,
		index_title: 0,
		active: false,


			var cl = this.node.className, xc = {className: cl};
			rr.css_set(this.nodes.s_disabled, xc, x);
			rr.css_set(this.nodes.s_disabled_no, xc, !x);
			if (cl !== xc.className) this.node.className = xc.className;

			//x ? this.button.setAttribute('disabled', 'disabled') : rr.removeAtt(this.button);
			},

		set_active: function(x) {
			},

		set_icon: function(x) {// true|false|right|only
			v = !v ? 'none' : v =='only' || v == 'right' ? v : 'left';
			x = !x ? 'none' : x =='only' || x == 'right' ? x : 'left';

			if (x != v) {
				rr.css_set_('b-ubutton--icon-', this.node, x);
				};
			},

		set_cssIcon: function(x, i) {
				i = rr.indexOf(this.icons, x);
				x = i < 0 ? this.icons.push(x) - 1 : i;
				};

			this.set_indexIcon(x);
			},

		set_indexIcon: function(x) {

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

		set_indexText: function(x, xt) {
				this.index_text = x;
				};

			if (xt>0 || xt === 0) {
			},

		set_indexTitle: function(x) {
			if (this.index_title != x && x >= 0) {
				this.node.title = this.titles[x];
				this.index_title = x;
				};
			}
		}

elems.uInput = rr.new_class({
	interface: false,
	constructor: function(_, pr) {

		this.nodes = ns;
		this.node = ns.node;
		this.input = ns.input;

		this.help = pr.help;

		rr.addHandler(ns.input, 'focus', function(e) {
			rr.css_add('b-uinput--focus', ns.node);
			if (typeof ui.onfocus == 'function') {

		rr.addHandler(ns.input, 'blur', function(e) {
			if (!ns.input.value && ui.help) {
				};

			rr.css_remove('b-uinput--focus', ns.node);

			if (typeof ui.onblur == 'function') {
				if (ui.onblur(e) === false) {
					rr.breakEvent(e)
					};
				};
			});

		rr.addHandler(ns.input, 'change', function(e) {
				rr.css_add('b-uinput-help_text--hide', ns.help_text_wr);
				};

			if (typeof ui.onchange == 'function') {
				};
			});


		if (!ns.input.value && ui.help) {
			};
		},

	prototype: {
		// onfocus: function(){},
		// onblur: function(){},

		nodeType: -1,

			if (!x) {
				}
			else {
			},

		set_value: function(v) {
			rr.css_set('b-uinput-help_text--hide', this.nodes.help_text_wr
				, !!this.input.value
				);
			if (typeof this.onchange == 'function') {
				this.onchange();
				};
			},

		get_value: function() {

		focus: function() {
				return true;
				}

		setSelection: function(a, b) {
		}
	});