
elems.mainframe = rr.new_class({
	interface: true,

	constructor: function(_, prm, cfg) {
		this.master = _.clone();
		this.document = _.document;
		this.nodes = new tmpl.mainframe(_
			, {
				uniq: window._uniq
				}
			, cfg
			);



		this.box = this.nodes.box;
		this.pleft = this.nodes.pleft;
		this.sidebar_box = this.nodes.sidebar_box;


		this.interface.init_event(this);
		},

	prototype: rr.extend({}, rr.expansion_event, {
		nodeType: -1,
		is_connected: false,

		connected: function() {  // подключается к BODY
			if (this.is_connected) return;
			this.is_connected = true;

			this.document.body.appendChild(
				this.nodes.node
				);

			if (this.is_connected) {
				this.__resize_();
				this.__scroll_();
				};
			}
		}),

	init_event: function (ui) {
		if (ui.__event_init_) return;
		ui.__event_init_ = true;

		var ns = ui.nodes;



		rr.addHandler(ui.nodes.goScrollTop_click, 'click', function() {
			try {ui.nodes.goScrollTop_click.blur()} catch(e) {};

			rr.css_remove('b-frame_goScrollTop--show', ui.nodes.goScrollTop);
			rr.scrollTo(ui.document, 0, 0);
			});


		var pc_pleft;

		var cssWidth, cWidth, pH='', sH = ns.box.style;
		rr.addHandler(ui.document, 'resize', ui.__resize_ = function() {
			if (!ui.is_connected) return;

			var d = ui.document, n = ui.nodes.node_frame;
			ui.window_height = rr.IE ? (rr.qIE ? d.body||false : d.documentElement).offsetHeight : d.defaultView.innerHeight;

			var cw = n.clientWidth
			, pc = pc_pleft || rr.getRect(ns.pleft)
			, h = Math.max(pc.bottom - pc.top, ui.window_height - (rr.getRect(ns.box).top + rr.getScrollTop(ns.pleft.ownerDocument)) - 100)
			, clss = ''
			, x, i;

			if (cWidth !== cw) {
				cWidth = cw;

				for(x = 800; x < 1700; x < 1050 ? x += 10 : x += 50) {
					if (cw >= x) clss += ' width--gte-'+x;
					if (cw <= x) clss += ' width--lte-'+x;
					};

				if (cssWidth !== clss) {
					cssWidth = clss;

					clss = n.className.replace(/(\s+|$)width--(gte|lte|size)-\d+/g, '') + clss + ' width--size-'+cw;
					n.className = clss;
					};
				};

			h = h > 10 ? h+'px' : '';
			if (pH !== h) {
				sH.minHeight = pH = h;
				};


			});


		var noFix;
		rr.addHandler(document, 'scroll', ui.__scroll_ = function() {
			if (!ui.is_connected) return;

			var pc = pc_pleft || rr.getRect(ns.pleft), x;

			//scroll top
			rr.css_set('b-frame_goScrollTop--show'
				, ns.goScrollTop
				, pc.bottom < 20
				);

			// проверим работает ли fixed в браузере
			if (noFix !== false && pc.bottom < -200) {
				if (noFix = noFix || rr.getRect(ns.goScrollTop).bottom < 0 ) {
					ns.goScrollTop.style.marginTop = rr.getScrollTop(ui.document) + 'px';
					};
				};
			});


		function timmer() {
			if (!ui.is_connected) return;

			pc_pleft = rr.getRect(ns.pleft)

			ui.__resize_();
			ui.__scroll_();

			pc_pleft = false;

			setTimeout(timmer, 200);
			};
		timmer();
		}
	});

