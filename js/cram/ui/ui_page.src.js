


elems.page = rr.new_class({
	interface: true,

	constructor: function(_, prm, cfg) {
		//this.document = _.document;
		//this.master = _.clone();



		this.nodes = new tmpl.page(_, {
			css: prm.css,
			head: prm.head,
			head_name: prm.head_name || prm.name,
			head_right: prm.head_right
			});

		this.node = this.nodes.node;
		this.box = this.nodes.box;

		this.box_top = this.nodes.box_top;
		this.box_down = this.nodes.box_down;
		this.box_dialogs = this.nodes.box_dialogs;

		if (typeof prm.extend == 'object') {
			prm.extend.node = this.node;
			};

		if (prm.pid) this.pid = prm.pid;

		this.dialogs = []; // список панелей диалогов

		//this.interface.init_event(this);
		},

	prototype: {
		nodeType: -1,

		dialogs: false, // подключенные панели
		dialog_open: false, // открытая панель


		appendChild: function(n) {
			if (!n) return;
			var type = n.nodeType, ui = this;

			if (type > 0) {
				ui.box.appendChild(n);
				}
			else if (type < 0) {
				switch(n.elementType) {
					case 'page_dialog':
						//n.parent = this;

						this.nodes.box_dialogs.appendChild(n.node);
						if (rr.indexOf(this.dialogs, n) < 0) {
							this.dialogs.push(n);
							};

						if (n.debug) { // открывать при добавлении
							this.dialog_show(n);
							};
						break;

					case 'page_head':
						this.nodes.box_top.appendChild(n.node);
						rr.css_remove('b-page-top--hide', ui.box_top);
						break;

					case 'page_footer':
						this.nodes.box_down.appendChild(n.node);
						rr.css_remove('b-page-bottom--hide', ui.nodes.box_down);
						break;

					default:
						if (n = n.node) {
							ui.box.appendChild(n);
							};
					};
				};

			return n;
			},

		dialog_show: function(x) {
			var a = this.dialogs, i, n, v;

			if (typeof x === 'string') {
				for (i=0; n = a[i++];) {
					if (n.name === x) break;
					};
				x = n;
				}
			else {
				if (rr.indexOf(a, x) < 0) x = n;
				};

			if (this.dialog_open == x) return;

			if (n = this.dialog_open) {
				rr.css_remove('b-page-dialog--show', n.node);
				};

			if (this.dialog_open = (x||false).elementType === 'page_dialog' && x) {
				rr.css_add('b-page-dialog--show', x.node);
				};

			rr.css_set('b-page-box_dialogs--show'
				, this.nodes.box_dialogs
				, this.dialog_open
				);

			if (typeof this.onchange == 'function') {
				this.onchange({dialog: true});
				};
			},

		dialog_hide: function(x) {
			if (!x || x == this.dialog_open) {
				this.dialog_show(false);
				return true;
				};
			}
		}

	});


elems.page_head = rr.new_class({
	constructor: function(_, prm, cfg) {
		this.node = _.document.createDocumentFragment();
		},

	prototype: {
		nodeType: -1,
		elementType: 'page_head'
		}
	});

elems.page_footer = rr.new_class({
	constructor: function(_, prm, cfg) {
		this.node = _.document.createDocumentFragment();
		},

	prototype: {
		nodeType: -1,
		elementType: 'page_footer'
		}
	});


elems.page_dialog = rr.new_class({
	interface: true,

	constructor: function(_, prm, cfg) {
		//this.master = _.clone();
		//this.document = _.document;

		this.nodes = new tmpl.page_dialog(_, {
			css: prm.css,
			type: prm.type,
			title: prm.title
			});

		this.node = this.nodes.node;
		this.box = this.nodes.box||this.node;

		var v;
		if (v = prm.name) this.name = v;
		//if (v = prm.title) this.title = v;
		if (prm.debug) this.debug = true;
		},

	prototype: {
		nodeType: -1,
		elementType: 'page_dialog',
		parent: false,

		show: function(flag, p) {
			if (p = this.parent) {
				p.dialog_show(flag !== false && this )
				};
			}
		}
	});

