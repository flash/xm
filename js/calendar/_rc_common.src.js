
/*
new function() {
	return;
	rr.is.debug = true;
	var rh = (rr.is.debug?'.src':'')+'.js', sh = window._static_host||'', p = sh+'/js/calendar/';

	rr.include.add({
		'rr.shortcut':  sh+'/js/mcore/rr_shortcut'+rh,
		'rr.xhrloader': sh+'/js/mcore/rr_xhrloader'+rh,
		'rr.fx':	sh+'/js/mcore/rr_fx'+rh,
		'rr.date':      p+'rr_date'+rh,


		'rr.ui':	sh+'/js/mcore/rr_ui'+rh,
		'rr.drag': sh+'/js/mcore/rr_drag_'+rh,
		'rr.ui.window': sh+'/js/mcore/rr_ui_window'+rh,
		'rr.ui.wlayout': sh+'/js/mcore/rr_ui_wlayout'+rh,

		'rr.css.ui': sh+'/js/mcore/rr_css_ui'+rh,

		'pj.window': sh+'/js/mcore/pj_window'+rh,

		'rc.ui.calendar': p+'rc_ui_calendar'+rh,
		'rc.ui.areaday': p+'rc_ui_areaday'+rh,
		'rc.ui.areaweek': p+'rc_ui_areaweek'+rh,
		'rc.ui.areamonth': p+'rc_ui_areamonth'+rh,
		'rc.ui.page': p+'rc_ui_page'+rh,
		'rc.ui.page.edit': p+'rc_ui_page_edit'+rh,
		'rc.ui.inew': p+'rc_inew'+rh,

		'rc.scal': p+'rc_scal'+rh,

		'rc.style': p+'rc_style'+rh,
		'rc.html.header': p+'rc_t_header'+rh,
		'rc.html.body': p+'rc_t_body'+rh
		});


	rr.include.load('rr.date rr.xhrloader rr.fx rr.shortcut rr.ui rr.drag rr.ui.window pj.window rr.ui.wlayout'); // rr tools src
	//rr.include.load('rr.tools'); // rr tools  pack


	rr.include.load('rr.css.ui rc.style', function() {
		//rr.styles_include('global rr_window rc_maincontent rc_maincontent_head rc_calendar rc_form_create');
		});

	rr.include.load('rc.ui.calendar rc.ui.areaday rc.ui.areaweek rc.ui.areamonth rc.ui.page rc.ui.page.edit rc.ui.inew rc.scal');
	rr.include.load('rc.html.header rc.html.body');
	};
*/

rr.extend('rcalendar', rr.expansion_event, {
	addShortcut: function(p1, p2, p3) {
		if (rr.shortcut) return rr.shortcut.add(p1, p2, p3);

		/*
		rr.include.load('rr.shortcut', function() {
			if (rr.shortcut) rr.shortcut.add(p1, p2, p3);
			});
		*/
		}
	});

rr.extend('rr_view', rr.expansion_event);
rr_view.addEvent('resizefont', function(f) {
	});


// event font size
rr.domReady(function() {
	var de = document.documentElement;
	if (!de || !window.rr_view) return; //typeof rr.initEvent != 'function'
	var sz, pt=0, rs, cs=(de.currentStyle||window.getComputedStyle(de, null));

	function f_ev() {
		if (!rs) {
			var s = cs.fontSize;
			if (sz == s) return;
			rs = !!(sz = s);
			};

		var t = Date.now(); //new Date().getTime();
		if ((t - pt) > 400) {
			rs = false;

			// init resizeFont
			if (pt) rr_view.initEvent('resizefont', sz);
			pt = Date.now(); //new Date().getTime();
			};
		};

	setInterval(f_ev, 500);

	var i, o = document, tx="";
	for(i in o) tx+=" >> "+i;
	//alert(tx)

	});


window.onbeforeunload = function() {
	var e = {message: false};
	rr_view.initEvent('close', e);

	if (e.message) return e.message;
	window.onerror = null;
	};



// init constructor
rr.init(function() {
	rr.ns('pj');

	rr.styles_include('tmpl global pj_ssbar rr_window rc_maincontent rc_maincontent_head rc_calendar rc_form_create rr_wlayout', {
		bg_color: "#FFF"
		});


	pj.master = _ = rr.cr(rr.document, ns = {
		p: rr.ns('pj.html'),
		ui: rr.ns('pj.ui'),
		rc: rr.newTemplate(rcalendar.ui , {
			uButton: tmpl.uButton,
			uInput: tmpl.uInput
			})
		});

	_.namespace = ns.ui;
	//ns['default'] = ns.ui;

	//rr.ui.draglayer.create();
	pj.windowbox = _('rui:boxwindow');


	pj.ssbar = _('ui:ssbar', {
		boxwindow: pj.windowbox
		});
	});



// init calendarSource
rr.init(function() {
	var t = rcalendar, _ = pj.master,
	    list;

	list = t.calendarSource = new t.calendarSource_();

	var tm = new Date(), h=3600000, id=10, clist=[{color:1}, {color:2}];
	tm.setHours(0, 0, 0, 0);
	list.calendars = clist;

	tm = Math.round(tm.getTime()/60000)-1*1440; // min
	//tm = Math.round(tm.getTime()/60000)-1440; // min




	function add(a, l, tx) {
		//if (id==25) return id++;
		list.set({
			id: ''+(id++),
			calendar: clist[1],

			start: tm+a*60,
			end: tm+a*60 + l*60,
			utc_start: 0,
			utc_end: 0,

			text: tx||'task bla bla'
			});
		};

	var i =0, n=950, pl=8;
/*
	var tmr = setInterval(function() {
		if (++i > n) {
			clearTimeout(tmr);
			return;
			};


		add(Math.round(Math.random()*744*(n/(5*pl)))-744*(n/(10*pl)), Math.round(Math.random()*(Math.random() > 0.95 ? 70 : Math.random() > 0.9 ? 24 : 12)), 'free');
		}, 10);
  */


	for(;i<n;i++) {
		add(Math.round(Math.random()*744*(n/(5*pl)))-744*(n/(10*pl)), Math.round(Math.random()*(Math.random() > 0.95 ? 70 : Math.random() > 0.9 ? 24 : 12)), 'еше работа которую нужно сделать');
		}


	});


rr.init(function() {
	var t = rcalendar, _ = pj.master, uc, mc;

	var tm = new Date(), h=3600000, id=10;
	tm.setHours(0, 0, 0, 0);
	tm = tm.getTime();// - ((tm.getDay() || 7)-1)*86400000;
	tm = Math.floor(tm/60000);



	var c, mc;
	_(document.body,
		//_('div', {style:'height:150px;'}, '',
			//_('p:baner_test')
			//),

		pj[':head'] = _('p:head'),

		mc = pj[':maincontent'] = _('p:maincontent',
			c = pj[':calendar'] = _('rc:calendar', {
				calendarSource: t.calendarSource,
				pageActive: "main",
				timeStart: tm,
				timeEnd: null
				})
			),

		_('div.x-footer')
		);

	_(mc.pleft,
		 pj[':mcalendar'] = _('rc:mcal_one', {
			startDay: 1,
			//mode: 'month',
			compact: true,
			autoActive: false,
			dateToday: {y:2010, m:2, d:26},
			dateActive: {y:2010, m:2, d:10}
			})
		);

	rr.ui.sd(c);
	});



rr.init(function() {
	pj[':calendar'].addEvent('change', function(ch, rz) {
		var x = pj[':mcalendar'], A, B, v = this.timeEnd;

		A = rcalendar.date_tm(this.timeStart, 0, 1,1,1);
		A = {y: A.year, m: A.month, d: A.date};

		B = rcalendar.date_tm((v || v===0 ? v-1 : this.timeStart), 0, 1,1,1);
		B = {y: B.year, m: B.month, d: B.date};

		v = new Date((this.timeStart + (this.timeEnd-this.timeStart)/2) *60000);

		x.set({
			dateShow: {y: v.getUTCFullYear()-0, m: v.getUTCMonth()-0, d: v.getUTCDate()},
			dateA: A,
			dateB: B
			});
		});
	});













//rr.createCSS([
rr.styles('start',
	".xr {padding:0 5em 0 100px;white-space:nowrap;}",
	".xr-bx {position:relative;overflow:hidden;}",
	".xr-p1 {background-color:#EEEEEE;height:1.3em;margin-left:-100px;position:absolute;width:100px;}",
	".xr-p2 {}",
	".xr span, a.sb {display:-moz-inline-box;display:inline-block;overflow:hidden;}",
	".xr .adr {width:30%;}",
	".xr .gr {margin-left:-40px;width:40px;color:transparent;}", //background-color:rgba(5,255,255,0.3);
	".xr .gr {background-image:url(http://i.r0.ru/m/i/chameleon/ramail-mask.png);background-repeat:no-repeat;}",
	".xr .gr {background-position:0 50%;}",

	".xr .sb {width:70%}", //padding-left:1ex;
	//".xr .sb a {margin-left:1em;}",
	""
	);

var openConsole;
rr.init(function() {
	rr.shortcut.add('alt+c ctrl+w', function() {
		openConsole();
		return false;
		})
	})


function openConsole() {
	var _ = pj.master, n, ui, ns={};

	ui = _('ui:window', {
		name: 'text text text text texttext...',
		//positionFixed: true,
		icon: true,
		left: 30,
		top: 305,
		width: 450,
		height: 150,

		//maxWidth: 1000,
		//maxHeight: 600,
		minWidth: 100,
		minHeight: 50,
		add: n = _('div')
		});


	_(ui,
		_('div.rconsole',
			_('label', {
				style: "display:block;position:relative;padding:2px 2px 2px 1ex;margin:0;background-color:rgb(230,240,250);border-bottom:2px solid #779BBF;",
				add: ns.tarea = _('textarea.cmd', {
					style: "padding:0;margin:0px;background-color:rgb(230,240,250);width:100%;height:100px;border:none;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;-ms-box-sizing: border-box;box-sizing: border-box;"
					})
				}),

			ns.log = _('div.log', {
				style: 'height: 50px;background-color:#fff;'
				})
			)
		);




	ui.addEvent('resize', function(p) {
		var h = p.height*0.7;
		if (h<100) h = 100;
		ns.tarea.style.height = h+"px";

		h = p.height - ns.log.offsetTop;
		if (!h || h<50) h = 50;
		ns.log.style.height = h+"px";
		});

	if (rr.IE<7)
	ui.gEvent.add(ns.tarea, 'resize', function(n) {
		ns.tarea.className = ns.tarea.className;
		});


	ui.gEvent.add(ns.tarea, 'keydown', function(e) {
		if (e.ctrlKey && e.keyCode == 13) {
			evl(ns.tarea.value);
			return rr.breakEvent(e);
			};

		if (e.ctrlKey) return;

		if (e.keyCode == 8) {
			var n = ns.tarea, v = n.value, i, l, p = rr.textSel.get(n);

			v = v.substring(0, p.start);
			l = v.length;

			if (v.charAt(l-1) == " " && v.substring(v.lastIndexOf('\n') +1).search(/[^\s]$/) == -1) {
				for (i=2; i<5; i++) {
					if (v.charAt(l-i) != ' ') break
					};

				i = l-i+1;
				if (rr.Opera) i++;

				var st = n.scrollTop;
				n.value = v.substring(0, i) + n.value.substring(p.end);

				n.scrollTop = st;
				rr.textSel.set(n, i);
				return rr.breakEvent(e);
				};
			};
		});



	ui.gEvent.add(ns.tarea, 'keypress', function(e) {
		if (e.ctrlKey) return;

		if (e.keyCode == 13) {
			var n = ns.tarea, v = n.value, v2, c, i, p = rr.textSelection_get(ns.tarea);
			if (!p.start) return;

			v2 = v.substring(0, p.start);
			c = v.charAt(p.start-1);

			i = v2.lastIndexOf('\n');

			if (i >= 0) {
				i = v2.substring(i+1).match(/^[ \t]+/);
				i = i ? i[0] : '';
				}
			else {
				i = '';
				};

			switch(c) {
				case '{': case '[':case ':':
					i += "    ";
					break;
				}

			if (!i) return;

			setTimeout(function() {
				var st = n.scrollTop, br = rr.IE<9?'\r\n':'\n';

				n.value = v.substring(0, p.start) + br + i + v.substring(p.end);

				n.scrollTop = st;
				i = p.start + i.length + br.length;
				if (rr.Opera) i++;
				rr.textSelection_set(n, i);
				}, 0);
			};
		});


	function evl(tx) {
		var rv;
		try {
			window.eval(tx)
			} catch (e) {
				};
		};

	try {ns.tarea.focus() } catch (e) {};
	};





rr.init(function() {
	return;

	var _ = pj.master, ow;

	ow = _('ui:window', {
		name: "Календарь",
		//visibility: false,
		//positionFixed: true,
		icon: true,
		left: 100,
		top: 100,
		width: 350,
		height: 255,

		//maxWidth: 1000,
		//maxHeight: 600,
		minWidth: 100,
		minHeight: 50,
		add: _('rc:mcal_one', {
			startDay: 1,
			mode: 'month',
			todayDate: {y:2010, m:2, d:26},
			activeDate: {y:2010, m:2, d:10}
			})
		});




return
	_(ow,

		_('rc:mcal_one', {
			startDay: 1,
			todayDate: {y:2010, m:2, d:26},
			activeDate: {y:2010, m:2, d:10}
			})
		);

	})

rr.init(function() {
	return;
	var _ = rr.cr_(document), n;

	_('body',
		n = _('div.test-test#testx',
			_('span.clss', "test test"),
			_('div', {style: "width:100px;"},
				_('span.xx', "err")
				)
			)
		)
	alert(n.innerHTML)
	});




rr.init('card_player', {
	// values

	url: null,
	bytesTotal: null,
	bytesLoaded: null,
	bytesPercent: null,
	position: null,
	duration: null,
	isPlaying: null,
	volume: null,


	// install
	install: function() {
		if (!rr.SWF || rr.SWF<8) return;

		this.swf = rr.cr_swf({
			parent: document.body,
			id: 'swf_card_player',
			style: (rr.IE?"":"visibility:hidden;")+"overflow:hidden;height:0;left:-30px;position:absolute;top:-30px;width:0;",
			src: '/player_mp3_js.swf',
			allowScriptAccess: "always",//never
			ieFSCommand: true,
			vars: "listener=card_player&interval=3000"
			});
		},

	is_init: false,
	onInit: function() {
		this.is_init = true;
		if (this.url_) this.play(this.url_);
		},

	onUpdate: function() {
		//alert(55)
		},


	play: function(url) {
		var t = this;
		if (!t.is_init) {
			t.url_ = url;
			if (!t.swf) t.install();
			return
			};

		n.SetVariable("method:setUrl", url);
		n.SetVariable("method:play", "");
		}
	});

(function() {
	var purl, pnd, css_play="audio-play";

	window.playCard = function(n, url) {
		rr.breakEvent(window.event);
		if (x = purl != url) {card_player.play(url)} else card_player.stop();

		if (pnd != n) {
			if (pnd) rr.css_remove(css_play, pnd);
			pnd = n;
			} else pnd = false;

		rr.css_set(css_play, n, x);
		};
	})();
