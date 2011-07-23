
rr.styles('tmpl:window_a'
	//rr.IE<7 && "html {background-image:url('about:blank');background-repeat:no-repeat;background-attachment:fixed;}",

	, ".rr-window {position:absolute;padding-right:2px;"
		+(rr.IE<7 ? "fixedTop:null;" : '')
		+(rr.Gecko>=2||rr.WebKit>=534||rr.IE>8||rr.Opera>=10.5 ? 'border-radius:3px 3px 0 0;-webkit-box-shadow:0px 2px 9px -2px #000;box-shadow:0px 2px 9px -2px #000;':'') //4B769F
		//+(rr.IE ? "background-image:url('about:blank');background-repeat:no-repeat;" : '')
		+"}"

	//, '.rr-window--hide {visibility:hidden !important;left:-9999px !important;top:-9999px  !important;}'

	, '.rr-window--hide {visibility:hidden !important;}'


	, rr.IE<7 || ".rr-window--fixed {position:fixed;}"

	, rr.IE<7 && ".rr-window--fixed {position:absolute;positionFixedTop: expression(rr.ui_posIEfixed&&rr.ui_posIEfixed(this));}"


	, ".rr-window-title {z-index:1;cursor:default;color:#fff;position:relative;margin-right:-2px;background-color:#4B769F;padding:4px 60px 4px 0.7ex;"
		+(rr.IE ? "background-image:url('about:blank');background-repeat:no-repeat;":"")
		+"}"



	//".rr-window-title--xn1 {}", // default
	, ".rr-window-title--xn2 {padding-right:60px;}"
	, ".rr-window-title--xn3 {padding-right:60px;}"
	, ".rr-window-title--xn4 {padding-right:60px;}"


	, ".rr-window-title .name {height:16px;line-height:16px;display:block;overflow:hidden;white-space:nowrap;}"
	, rr.IE<7&&".rr-window-title .name {width:100%;position:relative;height:1.3em;}"
	, rr.IE<7&&".rr-window-title .text {position:absolute;}"


	, ".rr-window-box {z-index:1;border:1px solid #4B769F;margin-right:-2px;overflow:hidden;position:relative;background-color:#FFF;}"
	, rr.IE<7 && ".rr-window-box {width:100%;}"

	//".rr-window-br {}",

	, ".rr-window-br .b {position:absolute;"
		+(rr.IE ? "background-image:url('about:blank');background-repeat:no-repeat;" : '')
		+(rr.IE<9 ? "filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#3C4AA1EF, endColorstr=#3C4AA1EF)"
			: rr.Gecko>=2||rr.WebKit>=534||rr.IE>8||rr.Opera>=10.5 ? ''
				: "background-color:#C8E4FF;background-color:rgba(74,161,239,0.3);")
		+"}"


	, ".rr-window-br .x {height:auto;width:4px;}"
	, ".rr-window-br .y {height:4px;width:auto;font-size:0;}"
	, ".rr-window-br .xy {width:20px;height:20px;}"



	, ".rr-window-br-n {cursor: n-resize;top:-4px;left:16px;right:16px;}"
	, ".rr-window-br-e {cursor: e-resize;right:-4px;top:16px;bottom:16px;}"
	, ".rr-window-br-s {cursor: s-resize;bottom:-4px;left:16px;right:16px;}"
	, ".rr-window-br-w {cursor: w-resize;left:-4px;top:16px;bottom:16px;}"

	, ".rr-window-br-ne {cursor: ne-resize;right:-4px;top:-4px;}"
	, ".rr-window-br-nw {cursor: nw-resize;left:-4px;top:-4px;}"
	, ".rr-window-br-se {cursor: se-resize;right:-4px;bottom:-4px;}"
	, ".rr-window-br-sw {cursor: sw-resize;left:-4px;bottom:-4px;}"
	, rr.Gecko>=2||rr.WebKit>=534||rr.IE>8||rr.Opera>=10.5 ? '.rr-window-border-no {display: none;}'
		: '.rr-window-border-no .b {cursor:default;}'

	, rr.IE<7 && ".rr-window-br-e  {right:auto;left:0px;margin-left:100%;}"
	, rr.IE<7 && ".rr-window-br-ne, .rr-window-br-se {right:auto;left:-16px;margin-left:100%;}"
	, rr.IE<7 && ".rr-window-br-sw, .rr-window-br-se {bottom:auto;margin-top:-16px;}"
	, rr.IE<7 && ".rr-window-br-s {bottom:auto;margin-top:0px;}"



	, ".rr-window-shady {display:block;_display:none;margin:0 -1px 0 1px;height:1px;position:relative;overflow:hidden;background-color:#4B769F;z-index:1;}"
	, ".rr-window-shady .b {display:none;}"

	, rr.IE<7 && ".rr-window--p6 {z-index:2;position:absolute;top:0px;margin-left:100%;width:0px;height:0px;}"
	, ".rr-window-pn {position:absolute;z-index:2;top:4px;right:4px;}"
	, ".rr-window-pn .b {border:1px inset #476D8F;float:right;cursor:pointer;height:15px;width:15px;overflow:hidden;margin-left:2px; background-repeat:no-repeat; background-attachment:scroll;}"




	, ".rr-window-title, .rr-window-shady {background-color:#4B769F;}"
	, ".rr-window-box {border-color:#4B769F;}"

	, ".rr-window--unactive > .rr-window-title, .rr-window--unactive > .rr-window-shady {background-color:#757575;}"
	, ".rr-window--unactive > .rr-window-box {border-color:#757575;}"

	, !!(rr.Gecko>=2||rr.Opera>=10.6||rr.WebKit>=534) && [
		'.rr-window-title {-webkit-transform: background-color 0.4s ease-in-out; -moz-transition: background-color 0.4s ease-in-out; -o-transition: background-color 0.4s ease-in-out; transition: background-color 0.4s ease-in-out;}'
		, '.rr-window-box {-webkit-transition: border-color 0.4s ease-in-out;-moz-transition: border-color 0.4s ease-in-out;-o-transition: border-color 0.4s ease-in-out;transition: border-color 0.4s ease-in-out;}'

		//, '.rr-window {-webkit-transition: opacity 0.3s ease-in-out;-moz-transition: opacity 0.3s ease-in-out;-o-transition: opacity .3s ease-in-out;transition: opacity 0.5s ease-in-out;}'
		//, '.rr-window--resize {opacity:0.8;}'
		]


	);



//rr_window_color
//rr_window_color__hover

rr.styles('pj_ssbar',
	".pj-ssbar {position:fixed;bottom:0;left:0;right:0;height:0px;z-index:1011;}",
	rr.IE<7 && ".vk-ssbar {width:100%;position:absolute;bottom:0;positionFixedTop:expression(style.bottom=null,style.bottom=(pageYOffset+pageOffsetH)%2?'-1px':'0px',undefined);}", //rr.document.documentElement.scrollTop


	".pj-ssbar-box {margin:0 auto;position:relative;width:400px;}",
	//rr.Opera && ".vk-ssbar-box {height:1px;}",

	".pj-ssbar-shadow {position:absolute;width:100%;bottom:0;margin-left:-1ex;height:1.4em;padding:1ex 1ex 0;overflow:hidden;"
		+(rr.Gecko>=1.9||rr.Opera>10||rr.WebKit>399||rr.IE>8 ? "background-color:rgba(75, 118, 159, 0.3);"
			: rr.IE < 9 ? "filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#55628BAF, endColorstr=#55628BAF);"
				: "background-color:#628BAF;opacity:0.3;"
			)
		+"}",

	".pj-ssbutton {position:absolute;width:100px;bottom:0;overflow:hidden;}",
	".pj-ssbutton .r {background-color:#628BAF;height:1px;margin:0 1px 0 3px;overflow:hidden;}" ,
	".pj-ssbutton .box {cursor:pointer;margin-left:2px;color:#FFF;height:1.4em;padding:0.2em 0 0.2em 1ex;overflow:hidden;font-size:small;font-weight:bold;white-space:nowrap;}",
	".pj-ssbutton-t {position:absolute;}",

	".pj-ssbutton .x {cursor:pointer;background:url('/vk/i/wicon.gif') no-repeat -23px -64px;height:20px;position:absolute;right:0;top:0.25em;width:16px;z-index:1;}",
	".pj-ssbutton .x:hover {background-position:-23px -43px;}",

	".pj-ssbutton .box, .pvk-ssbutton .x {background-color:#4B769F;}",
	//".pj-ssbutton:hover .r {background-color:#2F597F;}" ,
	//".pj-ssbutton:hover .box, .pj-ssbutton:hover .x {background-color:#4B769F;}",

	".pj-ssbutton--active .box, .pj-ssbutton--active .x, .pj-ssbutton--active:hover .box, .pj-ssbutton--active:hover .x {background-color:#204D77;}",
	""
	);

tmpl.window_a = function(_, pr) {
	if (!this.nodeType) this.nodeType = -1;

	var ns = this, n, lb = ns.borderNodes = {}, nm, x;
	ns.sname = nm = "rr-window";

	x = 'b '+nm+'-br-';
	ns.border = _((rr.Gecko? 'span.' : 'div.')+nm+'-br', [
		lb.s  = _('div.'+x+'s s y'),
		lb.e  = _('div.'+x+'e e x'),
		lb.w  = _('div.'+x+'w w x'),
		lb.se = _('div.'+x+'se se xy'),
		lb.sw = _('div.'+x+'sw sw xy'),
		lb.n  = _('div.'+x+'n n y'),
		lb.ne = _('div.'+x+'ne ne xy'),
		lb.nw = _('div.'+x+'nw nw xy')
		]);


	/*
	x = 'b '+nm+'-sd-';
	ns.shady = _((rr.Gecko? 'span.' : 'div.')+nm+'-shady', [
		_('div.'+x+'s'),
		_('div.'+x+'e'),
		_('div.'+x+'w'),
		_('div.'+x+'se'),
		_('div.'+x+'sw'),
		_('div.'+x+'n'),
		_('div.'+x+'ne'),
		_('div.'+x+'nw')
		]);
	*/

	if (rr.IE<7)  _('iframe.'+ns.sname+"-ie6", {scrolling:'NO',frameBorder:'NO',parent:ns.shady});

	ns.title = _('div.'+ns.sname+'-title', [
		_('span.name', [
			ns.icon = _('span.icon'),
			ns.name = _('span.text', [
				ns.nameText = _.text(pr.title||'ss')
				])
			])
		]);

	if(rr.IE) ns.title.onselectstart = rr.breakEvent;

	ns.bPanel = _('div.'+ns.sname+'-pn',
		ns.bclose = _((rr.IE<7?'a':'div')+'.b cmd-close', {_w_cmd: "close", href:"js:close"},
			_('span',
				rr.IE<8 && _.text('\u00D7')
				)
			)
		);


	ns.node = ns.window = _('div.'+ns.sname+' rr-window--hide'
		, ns.shady = _((rr.Gecko? 'span.' : 'div.')+nm+'-shady')
		, !(rr.IE<7) && ns.border

		, rr.IE<7 ? _('div.'+ns.sname+'-p6', ns.bPanel) : ns.bPanel
		, ns.title
		, ns.caption = _('div.'+ns.sname+'-box')

		, !(rr.IE<7) && ns.border
		);

	ns.body = ns.window;
	};

elems.window_a = rr.new_class({
	interface: true,
	parent: rr.class_baseElement,

	constructor: function(_, pr, cfg) {
		this.interface.parent.call(this, pr, _, cfg);
		this.interface.factory(this, pr, _, cfg);

		this.set(pr);
		},

	factory: function(ui, pr, _) {
		ui.master = _.clone();
		ui.nodes = new tmpl.window_a(_, pr);

		ui.nds = ui.nodes;
		ui.node = ui.nodes.window;
		ui.box = ui.nodes.caption;

		ui.xbutton_ = {};

		this.init_event(ui);
		},

	dom_connect: function(ui) {
		// ui.display  элемент отобраается.
		if (ui.display = !!ui.is_connect) {
			this.refresh(ui, true);
			};
		},

	prototype: {
		ui_name: 'window',

		xbutton: 'minimize',
		rtop: true,
		width: 300,
		height: 250,
		minHeight: 50,
		left: 100,
		top: 100,
		hide: true,


		get: function(pr) {
			var ui = this
			, uix = this.interface
			, nds = ui.nodes
			, x, nd;

			if (!ui || !ui.nodes) return;

			switch (pr) {
				case '':
				break;

				default:
				uix = rr.rui_x.window;
				if (uix['get_'+pr] ) return uix['get_'+pr](ui);
				};
			},

		close: function() {
			var e = {}, s, x;
			if (this.initEvent('close', e) === false || e.returnValue === false) {
				return false;
				};

			if (!this.parent) return;

			if (rr.Opera) {
				s = this.node.style;
				x = s.display;
				s.display = 'none';

				this.node.offsetParent;
				};

			this.parent.remove(this);

			if (s) s.display = x;

			this.initEvent('_remove');
			},

		show: function(ps, av) {
			var ui = this, s = {hide: false, active: av!==false}, cwh, u;
			if (!ui.parent) return;

			var st, pl, pt;
			cwh = ui.parent.cwh || rr.getClientWH(ui.ownerDocument);

			switch(ps) {
				case 'center':
					if (ui.fixed) {
						cwh.sl = cwh.st = 0;
						};

					s.left = Math.max(0, cwh.sl + Math.round((cwh.w - ui.node.offsetWidth)/2));
					s.top = Math.max(0, cwh.st + Math.round((cwh.h - ui.node.offsetHeight)/2) - ui.nodes.caption.offsetTop);
					break;

				case 'client':
					var st = ui.parent.scrollTop
					, x = ui.client_top_
					, h = ui.node.offsetHeight;

					// top
					if (x + h > cwh.h-3) {
						x = cwh.h - 3 - h;
						};

					if (x < 3) x = 3;
					if (!ui.fixed) x = x + st;

					s.top = x;

					// left
					x = ui.left;
					if (x < -ui.width+5) {
						x = -ui.width+5;
						} else
					if (!rr.fixed && x > cwh.w-5) {
						x = cwh.w-5;
						};

					s.left = x;
					break;
				};


			this.visibility = u;
			this.set(s);

			if (av !== false) {
				ui.parent.up(ui.node);
				};
			},

		set_active: function(fg) {
			var ui = this;

			if (fg !== false) {
				ui.parent.up(ui.node);

				if (!ui.active) {
					ui.interface._onactive(ui);
					};
				}
			else {
				ui.interface._onunactive(ui);
				};
			},

		setStatus: function(nm, x) {
			if (!nm || typeof nm !== 'string') return;
			var n = '--'+nm;
			rr.css_set(this.nodes.sname+n, this.node, x = !!x);
			},

		isStatus: function(nm) {
			if (!nm || typeof nm !== 'string') return;
			return !!rr.css_is('rr-window--'+nm, this.node);
			}

		},

	set: function(ui, pr, v, pv) {
		var it = this,
		    tv = typeof v,
		    x, und;

		switch (pr) {
			case 'xbutton':
			if (v && tv != 'string') return;
			break;

			case 'width':
			case 'height':
			case 'minWidth':
			case 'minHeight':
			case 'maxWidth':
			case 'maxHeight':
			case 'top':
			case 'bottom':
			case 'left':
			case 'right':
			if (v !== null && tv != 'number' || v<0) return;

			if (v != null) switch (pr) {
				case 'height':
				case 'minHeight':
				if (v<0) v = 0; break;

				case 'width':
				case 'minWidth':
				case 'maxWidth':
				if (v<70) v = 70; break;

				case 'maxHeight': if (v<2) v = 2; break;

				case 'top':
				case 'bottom':
				case 'left':
				case 'right':
				};
			break;

			case 'visibility':
			case 'active':
			case 'fixed':
			case 'hide':
			case 'hideButton':
			case 'resize':
			case 'headline':
			if (v !== null) v = !!v;
			break;

			case 'icon':
			case 'name':
			if (v != null && tv != 'string' && tv != 'number') return;
			break;

			default: return;
			};

		return v;
		},

	refresh: function(ui, ch, rz) {
		if (!ui.display) return false;
		var it = ui.interface, nds = ui.nds, v, i;
		if (ui.z_resize) ui.z_resize = !(rz = true);

		var chw;
		//nds.sname = 'rr-window';

		if (ch.headline) {
			nds.caption.style.display = ui.headline ? 'none' : '';
			rr.css_set(nds.sname+'-caption--headline', nds.caption, ui.headline);
			rr.css_set(nds.sname+'--headline', ui.node, ui.headline);
			};

		if (ch.fixed) {
			v = rr.css_is(nds.sname+'--fixed', ui.node);
			if (rr.IE<7) {
				ui.node._ptop = null;
				}
			else if (!v != !ui.fixed) {
				var s = ui.node.style, x = rr.getPx(s.left), y = rr.getPx(s.top);

				if (x != x) x = ui.node.offsetLeft;
				if (y != y) y = ui.node.offsetTop;

				chw = chw||rr.getClientWH(ui.ownerDocument);
				//alert(y+"  "+ui.node.style.top+"  st="+chw.st+"  :"+v)

				if (v) {
					x += chw.sl;
					y += chw.st;
					}
				else {
					x -= chw.sl;
					y -= chw.st;

					x = x < 0 ? 0 : x > chw.w-20 ? chw.w-20 : x;
					y = y < 0 ? 0 : y > chw.h-20 ? chw.h-20 : y;
					};

				ui.left_ = x;
				ui.top_ = y;

				ch.left_ = true;
				ch.top_ = true;
				}

			rr.css_set(nds.sname+'--fixed', ui.node, ui.fixed);
			};

		if (rz || ch.icon) {
			v = ui.icon;
			rr.css_set('rr-window-title--icon', nds.title, !!v);

			if (v && typeof v == 'string' && v.indexOf('url(') != -1) {
				nds.icon.style.backgroundImage = v;
				}
			else {
				nds.icon.style.backgroundImage = '';
				};
			};

		if (rz || ch.name) {
			var n = nds.nameText;
			if (n) n.data = ui.name;
			};

		if (rz || ch.resize) {
			rr.css_set(nds.sname+'-border-no', nds.border, ui.resize == false);
			};


		if (ui.hide && (rz || ch.hide) ) {
			rr.css_add('rr-window--hide', nds.node);
			};

		if (rz || ch.hideButton) {
			};

		if (rz || ch.left) {
			ch.left_ = true;
			ui.left_ = ui.left;
			};

		if (rz || ch.left || ch.right) {
			ch.left_ = true;
			if (ui.left === null && typeof ui.right == 'number') {
				chw = chw||rr.getClientWH(ui.ownerDocument);
				ui.left_ = (ui.fixed ? chw.w : chw.sw)  - ui.width - 15;
				} else ui.left_ = ui.left;
			};


		if (rz || ch.top) { // || ch.bottom
			ch.top_ = true;
			ui.top_ = ui.top;

			if (rr.IE<7 && ui.fixed) {
				var d = ui.ownerDocument;
				ui.top_ += chw ? chw.st : (rr.qIE ? d.body : d.documentElement).scrollTop;
				};

			ch.top_ = true;
			};


		if (ch.left_) {
			ui.node.style.left = (ui.left_||0) + "px";
			};

		if (ch.top_) {
			ui.node.style.top = (ui.top_||0) + "px";

			if (ui.fixed && !(rr.IE<7)) {
				ui.client_top_ = ui.top_
				} else
			if (ui.parent && typeof (v=ui.parent.scrollTop) == 'number') {
				v = ui.top_ - v;
				ui.client_top_ = v > 0 ? v : 10;
				};
			};


		if (rz || ch.width) {
			v = Math.max(70, ui.width);
			nds.body.style.width = v + 'px';
			};

		if (rz || ch.height) {
			v = Math.max(0, ui.height);
			nds.caption.style.height = v + 'px';
			};

		if (rr.IE<7 && (rz || ch.width || ch.height || ch.headline)) {
			it.setBorderWidthForIE(ui);
			};

		if (rz || ch.xbutton) {
			var n, a = ui.xbutton, i=0, l, nx = {}, np = nds.bclose, p, xl=0;

			if (a = a && a.split(' ')) {
				p = np&&np.parentNode||nds.bPanel;

				for(l=a.length; i<l; i++) if (x = a[i]) {
					if (np) np = np.nextSibling;

					// bag Opera 10.5 tarakan if ->   x = nx[x] = ui.xbutton_[x] || this.createButton(x, ui.master);
					n = nx[x] = ui.xbutton_[x] || this.createButton(ui, x);
					xl++;

					if (np != n) {
						np ? p.replaceChild(n, np) : p.appendChild(n);
						};
					};
				};

			if (n = np && np.nextSibling)
			while(np = n) {
				n = np.nextSibling;
				p.removeChild(np);
				};

			ui.xbutton_ = nx;

			rr.css_set_(nds.sname+'-title--xn', nds.title, xl);
			rr.css_set_(nds.sname+'-bpanel--xn', nds.bPanel, xl);
			};

		if (ch.active) {
			ui.setStatus('unactive', !ui.active);
			};

		if (!ui.hide && (rz || ch.hide) ) {
			rr.css_remove('rr-window--hide', nds.node);
			};


		ui.initEvent('change', ch);
		},

	// interface
	createButton: function(ui, nm) {
		var _ = ui.master;
		return _((rr.IE<7?'a':'div')+'.b cmd-'+nm, {_w_cmd: nm, href:"js:"},
			_('span.c')
			);
		},


	_ev_onselectstart: function() {
		return false
		},

	_onactive: function(ui) {
		ui.active = true;
		ui.setStatus('unactive');
		ui.initEvent('change', {active: true});
		},

	_onunactive: function(ui) {
		ui.active = false;
		ui.setStatus('unactive', true);
		ui.initEvent('change', {active: true});
		},

	setBorderWidthForIE: function(ui, f_res) {
		var nds = ui.nds;
		//if (!nds || !nds.borderNodes) return;

		var cs = rr.css,
		    nbr = nds.borderNodes,
		    ow = nds.window,

		    xw = rr.getPx(nds.body.style.width) || 0,
		    xh = ui.headline ? 0 : rr.getPx(nds.caption.style.height) || 0,

		    dw, dh, nw, nh, s1, s2;

		dw = xw - (ow._pastWidth||0);
		dh = xh - (ow._pastHeight||0);

		if (dw) {
			ow._pastWidth = xw;

			nw = rr.getPx(nbr.n.style.width);
			if (nw != nw) {
				nw  = rr.getPx(rr.getCStyle(nbr.n).right);
				if (nw != nw) {
					nw = ow.clientWidth - nbr.n.offsetLeft - nw;
					}
				else {
					nw = nbr.ne.offsetLeft-nbr.n.offsetLeft;
					};

				if (nw<0 || !nw) nw = null;
				} else nw += dw;

			s1 = nbr.n.style;
			s2 = nbr.s.style;


			if (nw !== null && nw>0) {
				s1.width = nw+"px";
				s2.width = nw+"px";

				s1.display = s2.display = '';
				}
			else s1.display = s2.display = 'none';



			nw = rr.getPx(nds.shady.style.width);
			if (!nw || f_res) {
				nw = ow.offsetWidth||0;
				} else nw += dw;

			nds.shady.style.width = nw+"px";
			nds.border.className +='';
			};



		if (dh || (!xh && !ow._pastHeight)) {
			ow._pastHeight = xh;

			nh = rr.getPx(nbr.w.style.height);
			if (ui.headline) {};

			if (nh !== nh) {
				nh = nbr.sw.offsetTop-nbr.w.offsetTop;
				if (nh<0 || !nh) nw = null;
				} else nh += dh;

			s1 = nbr.w.style;
			s2 = nbr.e.style;

			if (nh !== null) {
				if (nh<0) nh = 0;
				s1.height = nh+"px";
				s2.height = nh+"px";
				};

			s1.display = s2.display = !nh ? 'none' : '';

			nh = rr.getPx(nds.shady.style.height);

			if (!nh || f_res) {
				nh = ow.offsetHeight||0;
				} else nh += dh;


			nds.shady.style.height = nh+"px";
			};
//
		},



	init_event: function(ui) {
		var t = this;

		ui.gEvent.add(ui.nds.title, 'dblclick', function(e) {
			rr.breakEvent(e);

			ui.set('headline', !ui.headline);
			return;
			if (ui.height) {
				ui.height_re = ui.height;
				ui.set('height', 0);
				}
			else if (ui.height_re) {
				ui.set('height', ui.height_re);
				ui.height_re = null;
				}
			});

		if (rr.IE<7) ui.addEvent('refresh', function() {
			t.setBorderWidthForIE(ui);
			});

		ui.gEvent.add(ui.nds.title, 'mousedown', function(e) {
			t.ev_move_mousedown(e, ui);
			});


		ui.gEvent.add(ui.nds.border, 'mousedown', function(e) {
			t.ev_resize_mousedown(e, ui);
			});

		ui.gEvent.add(ui.nds.bPanel, 'mousedown', rr.breakEvent);
		ui.gEvent.add(ui.nds.bPanel, 'click', function(e) {
			return t.ev_control_click(e, ui);
			});


		if (false)
		ui.addEvent('drag', function(e) {
			return;
			var dt = e.dateTrasfert;
			dt.setDate('nodeMove', {
				fps: 60,
				node: this.node,
				maxLeft: 600,
				maxTop: 1300,
				minTop: 0,
				minLeft: 0
				})
			});
		},

	ev_control_click: function(e, ui) {
		rr.breakEvent(e);

		var n = rr.css_parent('b rui-window-bpanel', e.target||e.srcElement, true), cmd;
		if (!n || rr.css_return != 'b' || !n._w_cmd) return;

		switch (cmd = n._w_cmd) {
			case 'close': ui.close();
			break;

			default:
			ui.initEvent('cmd_' + cmd, {});
			};
		},


	ev_move_mousedown: function(e, ui) {
		if (!ui) return;
		rr.breakEvent(e);

		var tg=e.target||e.srcElement
		, cwh = rr.getClientWH(ui.ownerDocument)
		, drag = new this.class_drag()
		, ow, ps, tm;


		drag.addEvent('move_dragstart', function(e, pr) {
			//pr._s_timmer = setTimeout(function(){pr.ui.setStatus('move', true);}, 100);
			//pr.ui.initEvent('startDrag');
			});

		drag.addEvent('move_dragend', function(e, pr) {
			var ui = pr.ui, v;

			clearTimeout(pr._s_timmer);
			ui.setStatus('move');

			drag.removeEventAll();
			drag = null;

			ui.left = ui.left_ = parseInt(ui.node.style.left)||0;
			ui.top = ui.top_ = parseInt(ui.node.style.top)||0;

			ui.initEvent('moveStop');

			if (pr.sL != ui.left_ || pr.sT != ui.top_) {

				if (ui.fixed && !(rr.IE<7)) {
					ui.client_top_ = ui.top_
					} else
				if (ui.parent && typeof (v=ui.parent.scrollTop) == 'number') {
					v = ui.top_ - v;
					ui.client_top_ = v > 0 ? v : 10;
					};

				ui.initEvent('change', {
					top: pr.sT != ui.top,
					left: pr.sL != ui.left
					});
				};
			});

		drag.addEvent('move', function(e, pr) {
			pr.ui.initEvent('move');
			});


		drag.initEvent('startDrag',
			{
				object: ui.node,

				minTop: 0,
				minLeft: Math.min(-30, 100-ui.node.offsetWidth),
				deltaDrag: 2,
				isPosFixed: ui.fixed && !(rr.IE<7),
				autoScroll: false,
				event: e
				},
			{
				ui: ui,
				sT: ui.top_,
				sL: ui.left_
				}
			);
		},

	ev_resize_mousedown: function(e, ui) {
		rr.breakEvent(e);

		var tg = e.target||e.srcElement,
		    drag, tm, pr;


		if (ui && ui.resize !== false) {
			drag = new this.class_drag(this.listeners_resize);

			drag.initEvent('resizeStart',
				{
					ui: ui,
					autoScroll: false,

					minWidth: ui.minWidth,
					minHeight: ui.minHeight,

					maxWidth: ui.maxWidth,
					maxHeight: ui.maxHeight,

					cursor: rr.getCStyle(tg).cursor||"default",
					itime: rr.Opera?null:20,
					isPosFixed: ui.fixed && !(rr.IE<7),
					event: e
					},
				{
					sH: ui.height,
					sW: ui.width,
					sHL:ui.headline,
					sT: ui.top_,
					ui: ui
					}
				);
			};
		},

	class_drag: rr.new_class({
		prototype: rr.expansion_event,
		constructor: function(listeners) {
			this.addEvent(rr.listeners_drag);
			if (listeners) this.addEvent(listeners);
			}
		}),

	listeners_resize: {
		resize_dragstart: function(e, pr) {
			var ui = e.ui;

			pr._timmer_rz = setTimeout(function(){
				ui.setStatus('resize', true);
				}, 100);

			ui.initEvent('resizeStart');
			},

		resize_dragend: function(e, pr) {
			var ui = pr.ui;

			clearTimeout(pr._timmer_rz);
			ui.setStatus('resize');


			if (pr.sH != ui.height || pr.sW != ui.width) {
				ui.initEvent('change', {
					height: pr.sH != ui.height,
					width: pr.sW != ui.width,
					top: pr.sT != ui.top_
					});
				};

			ui.initEvent('resizeStop');
			},

		resizeStart: function(a1) {
			var pr = a1, e = pr.event, doc = pr.document||rr.document;
			if (!e || (rr.IE<9?e.button:e.which) != 1 ) return;

			var tg = e.target||e.srcElement,
			    ui = pr.ui,

			    dE = rr.WebKit||(rr.IE<6) ? doc.body : doc.documentElement,
			    obj = pr.object,
			    os = ui.node.style;

			rr.css_parent('n ne e se s sw w nw rui', tg, true);
			var vector = rr.css_return;

			if (!vector || rr.css_return == 'rui') return;

			var w = rr.getPx(ui.nds.body.style.width), h = ui.headline ? 0 : rr.getPx(ui.nds.caption.style.height);
			if (w !== w) w = rr.getPx(rr.getCStyle(ui.nds.body).width);
			if (h !== h) h = rr.getPx(rr.getCStyle(ui.nds.caption).height);

			if (h && ui.headline) h = 0;

			function isNum(vl) {
				return typeof vl == 'number' ? vl : null;
				};

			var wmin = Math.max(rr.getPx(rr.getCStyle(ui.nds.body).minWidth)||0, pr.minWidth||0, 70),
			    hmin = Math.max(rr.getPx(rr.getCStyle(ui.nds.caption).minHeight)||0, pr.minHeight||0),
			    wmax = pr.maxWidth ? Math.max(pr.maxWidth, wmin) : null,
			    hmax = pr.maxHeight ? Math.max(pr.maxHeight, hmin) : null,

			    od = {
				eventName: 'resize',
				//deltaDrag: 1,
				itime: pr.itime,
				cursor: pr.cursor,
				vector: vector,
				ui: pr.ui,

				stX: e.clientX + (pr.isPosFixed ? 0 : dE.scrollLeft),
				stY: e.clientY + (pr.isPosFixed ? 0 : dE.scrollTop),
				cX: e.clientX,
				cY: e.clientY,

				isPosFixed: pr.isPosFixed,

				width: w,
				height: h,

				minWidth: wmin,
				minHeight: hmin,

				maxWidth: wmax,
				maxHeight: hmax,

				nds: ui.nds,

				left    : rr.getPx(os.left)||0,
				top     : rr.getPx(os.top)||0,

				minTop: isNum(pr.minTop),
				maxTop: isNum(pr.maxTop),
				minLeft: isNum(pr.minLeft),
				maxLeft: isNum(pr.maxLeft)
				};

			if (obj && od.left === null && od.right === null) od.left = obj.offsetLeft;
			if (obj && od.top === null && od.bottom === null) od.top = obj.offsetTop;

			arguments[0] = od;
			this.initEvent('createDrag', arguments);
			},

		resize: function(od, pr) {
			var ui = od.ui,
			    nds = ui.nds,

			    dX = (od.stX - od.psX)||0,
			    dY = (od.stY - od.psY)||0,

			    oStl = ui.node.style,
			    css = rr.css,

			    minWidth = od.minWidth,
			    minHeight = od.minHeight,
			    vec = od.vector,

			    wbody = nds.body,
			    wcaption = nds.caption,
			    wborder = nds.border,
			    wnode = nds.window,

			    newPos;


			//od.deltaX = Math.round(dX*(od.multiplierX||1) );
			//od.deltaY = Math.round(dY*(od.multiplierY||1) );
			if (!oStl) return;

			var deltaX = dX, deltaY = dY;
			var newHeight = null, newWidth = null, newLeft = null, newTop = null;


			// запад
			if (vec == 'w' || vec == 'nw' || vec == 'sw') {
				newWidth = od.width + dX;

				newLeft  = od.left  - deltaX;
				if (newWidth < minWidth) {
					newWidth = minWidth;
					newLeft  = od.left  - newWidth + od.width;
					};
				if (od.maxWidth > 0 && newWidth > od.maxWidth) {
					newWidth = od.maxWidth;
					newLeft  = od.left  - newWidth + od.width;
					};
				};

			// север
			if (vec == 'ne' || vec == 'n' || vec == 'nw') {
				newHeight = od.height + deltaY;


				if (typeof od.top == 'number') {
					newTop  = od.top  - deltaY;

					if (od.minHeight > 0 && newHeight < od.minHeight) {
						newHeight = od.minHeight;
						newTop  = od.top  - newHeight + od.height;
						};

					if (od.maxHeight > 0 && newHeight > od.maxHeight) {
						newHeight = od.maxHeight;
						newTop  = od.top  - newHeight + od.height;
						};

					if (newHeight <= 0) {
						newHeight = 0;
						};


					if (newTop < 0) {
						newHeight += newTop;
						newTop = 0;
						};
					};
				};


			if (vec == 'e' || vec == 'ne' || vec == 'se') {
				newWidth = od.width - deltaX;

				if (newWidth < minWidth) newWidth = minWidth;
				if (od.maxWidth > 0  && newWidth > od.maxWidth) {
					newWidth = od.maxWidth;
					};
				};

			// юг
			if (vec == 'sw' || vec == 's' || vec == 'se') {
				newHeight = od.height - deltaY;

				if (od.minHeight > 0 && newHeight < od.minHeight) {
					newHeight = od.minHeight;
					};

				if (od.maxHeight > 0 && newHeight > od.maxHeight) {
					newHeight = od.maxHeight;
					};

				if (newHeight <= 0) newHeight = 0;
				};


			// event
			if (this.pW != newWidth || this.pH != newHeight) {
				pr._change = true;

				if (newWidth !== null) {
					wbody.style.width = newWidth + "px";
					ui.width = newWidth;
					} else newWidth = od.width;

				if (newLeft != null) {
					wnode.style.left = newLeft + "px";
					ui.left = newLeft;
					};

				if (newHeight || newHeight==0) {
					if (!newHeight) {
						ui.headline = true;
						wcaption.style.display = 'none';
						}
					else if(ui.headline) {
						wcaption.style.display = '';
						ui.headline = false;
						};


					wcaption.style.height = newHeight + "px";
					ui.height = newHeight;
					} else newHeight = od.height;

				if (newTop != null) {
					nds.window.style.top = newTop + "px";
					ui.top = ui.top_ = newTop;
					};


				ui.height_rz = null;

				ui.initEvent('resize', {
					_w: this.pW != newWidth,
					_h: this.pH != newHeight,

					width: newWidth,
					height: newHeight
					}, pr);

				this.pW = newWidth;
				this.pH = newHeight;

				if (rr.IE<7) ui.interface.setBorderWidthForIE(ui);
				//if (rr.IE || rr.Gecko) wcaption.offsetTop;
				};

			}
		}
	});

