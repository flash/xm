/*
var om = _('ui:layerBox', {parent: xNode}
	, _('ul'
		, _('li')
		, _('li')
		, _('li')
		)
	);

//
_('div'
	_('ui:uMenu'
		, {
			// node - элемент который открывает пункт меню
			node: _('a', "menu xx"),
			position: 'right', //
			auto: true
			}

		, _('ui'
			, _('li', "item 1")
			, _('li', "item 2")
			, _('li', "item 3")
			, _('li', "item 4")
			)
		)
	)

*/




elems.box_menu = rr.new_class({
	interface: true,
	constructor: function(_, pr, cfg) {
		if (_.document.box_menu) {
			return _.document.box_menu;
			};

		var d = _.document, it = this.interface, ui = this, n;
		(ui.document = d).box_menu = this;

		ui.box = _('div.b-box_menu');

		rr.domReady(function() {
			d.body.appendChild(ui.node||ui.box)
			});
		},

	prototype: {
		nodeType: -1,
		nextIndex: 1,

		appendChild: function(ui) {
			if (!ui || !ui.nodeType) return;
			var n = ui.node||ui;
			n.style.zIndex = this.nextIndex++;
			this.box.appendChild(ui.node||ui);
			return ui;
			}
		}
	});


elems.uMenu = rr.new_class({/*, rr.expansion_event*/
	__ic_: false, // init class

	interface: true,
	gEvents: new rr.class_listHandler, //
	test: true,

	constructor: function(_, pr, cfg) {
		var it = this.interface, ui = this, v;

		if (!it.__ic_) { // init class
			rr.extend(it, rr.expansion_event);
			it.__ic_ = true;
			};

		ui.master = _.clone();
		ui.document = _.document;

		ui.nodes = _.tmpl('tmpl:uMenu', {
			css: pr.css
			});

		ui.box = ui.nodes.box;


		if (v = pr.open) ui.open = v;
		if (v = pr.node) ui.node = v.node||v;
		if (v = pr.position) ui.position = v;
		if (v = !!pr.debug) ui.debug = v;


		ui.neabody = pr.neabody || ui.node;


		it.init_event(this);
		},

	prototype: {
		nodeType: -1,
		css_box: null,
		neabody: null,
		position: null,
		ver: 0,
		hor: 0,
		is_connect: false,

		onchange: null, //на изменения

		show: function(elm, pos) {
			if (elm) this.neabody = elm;
			if (pos) this.position = pos;

			if (!this.neabody) {
				return;
				};

			this.interface.initEvent('show', {menu: this});
			this.interface.re_position(this);

			if (this.ev_change) {
				this.ev_change();
				};
			},

		hide: function() {
			this.interface.hide(this);

			if (this.ev_change) {
				this.ev_change();
				};
			}
		},

	init_event: function(ui) {
		var tH/*time hide*/, tS/*time show*/, stopHide, x;

		function goHide() {stopHide = false};

		function show() {
			if (!ui.is_connect) {
				if (tS) clearTimeout(tS), tS = null;
				if (tH) clearTimeout(tH), tH = null;

				stopHide = true;
				setTimeout(goHide, 500);

				ui.show();
				};
			};

		function hide() {
			if (tH) clearTimeout(tH), tH = null;
			stopHide = false;
			ui.hide();
			};


		if (ui.node) {
			rr.addHandler(ui.node, rr.IE<9 ? 'click dblclick' : 'click', x = function(e) {
				rr.breakEvent(e);
				ui.is_connect ? stopHide || hide() : ui.show();
				});


			//if (rr.IE<9) rr.addHandler(ui.node, 'dblclick', x);

			rr.addHandler(ui.node, 'mousedown', function(e) {
				e[rr.IE<9?'returnValue':'rm_menu'] = ui;
				});


			if (ui.open != 'click') {
				rr.addHandler(ui.node, 'mouseover', function(e) {
					if (!tS && !ui.is_connect) tS = setTimeout(show, 200);
					if (tH) clearTimeout(tH), tH = null;
					});

				rr.addHandler(ui.node, 'mouseout', function(e) {
					if (tS) clearTimeout(tS), tS = null;
					});
				};
			};


		this.addEvent('show', function(e) {
			if (e.menu !== ui) hide();
			});

		ui.nodes.node.onmouseover = function(e) {
			if (tH) clearTimeout(tH), tH = null;
			};

		ui.nodes.node.onmouseout = function(e){
			if (!tH && !ui.debug) tH = setTimeout(hide, 800);
			};

		if (!ui.debug) rr.addHandler(ui.nodes.node, 'click', hide);
		rr.addHandler(ui.nodes.node, 'mousedown', function(e) {
			e[rr.IE<9?'returnValue':'rm_menu'] = ui;
			});
		},

	connect: function(ui) {
		if (!ui.is_connect) {
			ui.is_connect = true;
			this.connect_ievent(ui);

			ui.nodes.node.style.visibility = 'hidden';

			ui.master('ui:box_menu'
				, ui.nodes.node
				);
			};
		},

	connect_ievent: function(ui) {
		this.gEvents.add(ui.document, 'mousedown', function(e) {
			if (e[rr.IE<9?'returnValue':'rm_menu'] !== ui && !ui.debug) {
				ui.hide();
				e.rm_menu = null;
				};
			}, ui);

		this.gEvents.add(ui.document, 'blur', function(e) {
			if (!ui.debug) ui.hide();
			}, ui);
		},

	hide: function(ui) {
		if (ui.is_connect) {
			ui.is_connect = false;

			this.gEvents.removeAll(ui);
			rr.removeNode(ui.nodes.node);
			};
		},


	re_position: function(ui) {
		this.connect(ui);

		var n = ui.nodes.node
		, cwh = rr.getClientWH(ui.document)
		, rc = rr.getRect(ui.neabody)
		, x, y, w, h;

		if (n.getBoundingClientRect) {
			w = n.getBoundingClientRect();
			h = w.bottom - w.top;
			w = w.right - w.left;
			}
		else {
			w = n.offsetWidth;
			h = n.offsetHeight;
			}

		/*
		left
		right
		center

		left/right
		right/left

		right-top
		left-top
		center-top

		right-top/left
		left-top/right

		right-center
		left-center
		*/


		switch(ui.position) {
			case 'center-left':
				x = rc.left - w;
				if ( x < 0) x = rc.right;
				x += cwh.sl;

				y = rc.top + (rc.bottom - rc.top)/2 - h/2;
				if (y<2) y = 2;
				y += cwh.st;

				if (y+h > cwh.sh) {
					y = Math.max(cwh.sh - h, 2);
					};
				break;

			case 'top': case 'left-top':
				x = rc.left + cwh.sl;
				if (x<0) x = 0;

				y = rc.top + cwh.st;
				if (y<0) y = 0;
				break;

			case 'center-top':
				x = Math.floor(rc.left + (cwh.w - rc.right - rc.left)/2 - w/2) + cwh.sl;
				y = rc.top - h + cwh.st;
				if (y<0) y = cwh.h - rc.bottom + cwh.st;
				if (x<0) x = 0;
				break;

			case 'right-top':
				x = rc.right - w + cwh.sl;
				if (x<0) x = 0;

				y = rc.top + cwh.st;
				if (y<0) y = 0;
				break;

			//case 'right-top/left': break;

			case 'center-right':
				x = rc.right;
				if (x > 0 && (x + w) > cwh.w) x = rc.left - w;
				x += cwh.sl;

				y = rc.top + (rc.bottom - rc.top)/2 - h/2;
				if (y<2) y = 2;
				y += cwh.st;

				if (y+h > cwh.sh) {
					y = Math.max(cwh.sh - h, 2);
					};
				break;


			case 'right': case 'right-bottom':
				x = rc.right - w + cwh.sl;
				if (x<3) x = 3;

				y = rc.bottom;
				if (y + h > cwh.h-10) y = rc.top - h;
				if (y < 0) y = rc.bottom;
				y += cwh.st;
				break;

			case 'right/left': case 'right-bottom/left':
				x = w > rc.right - rc.left ? rc.left : Math.ceil(rc.right - w);
				//alert(x+'+'+w+'='+(x+w)+'  '+cwh.w)     //915.5499877929688+152=1067.5499877929688  1079
				if (x + w + 3 > cwh.w) x = Math.max(cwh.w - 3 - w, rc.right - w);

				x = x + cwh.sl;
				if (x<3) x = 3;

				y = rc.bottom;
				if (y + h > cwh.h-10) y = rc.top - h;
				if (y < 0) y = rc.bottom;
				y += cwh.st;
				break;

			case 'center': case 'center-bottom':
				x = rc.left + (rc.right - rc.left)/2 - w/2 + cwh.sl;
				if (x<0) x = 0;

				y = rc.bottom;
				if (y + h > cwh.h-10) y = rc.top - h;
				if (y < 0) y = rc.bottom;
				y += cwh.st;
				break;


			case 'bottom': case 'left': case 'left-bottom':
			default:
				x = (rc.right + w > cwh.w ? rc.right - w : rc.left) + cwh.sl;
				if (x<0) x = 0;

				y = rc.bottom;
				if (y + h > cwh.h-10) y = rc.top - h;
				if (y < 0) y = rc.bottom;
				y += cwh.st;
				break;
			};

		x = Math.floor(x)||0;
		y = Math.floor(y)||0;

		var s = ui.nodes.node.style;

		s.left = x+'px';
		s.top = y+'px';
		s.visibility = '';
		}

	});

