
rr.styles('rc_calendar',
	".rc-form_edit {width:40em;background-color:#eee;padding:1ex 1ex 2ex;border:1px solid #DDDDDD;}",
	//".rc-form_edit input {padding-bottom:0.35ex;padding-top:0.35ex;}",

	".rc-form_edit-table {width:100%;}",
	".rc-form_edit .lb {padding-left:1ex; padding-right:2ex;}",
	".rc-form_edit .cp {width:100%;}",
	".rc-form_edit div.c {padding-right:2em;}",

	".rc-form_edit-table td {padding-top:1ex;}",
	".rc-form_edit-allday td {padding-top:2ex;}",

	".rc-form_edit-what input {width:100%;}",
	".rc-form_edit-where input {width:100%;}",
	".rc-form_edit-pcalendar select {width:30em;"+(rr.WebKit?"padding:1px;":"")+"}",

	".rc-form_edit input.d {width:7em;}",
	".rc-form_edit input.t {margin-left:0.5ex;width:4em;}",

	".rc-form_edit-description td {padding-top:2ex;}",
	".rc-form_edit-description .lb {vertical-align:top;}",
	".rc-form_edit-description textarea {height:5em;width:100%;}",

	".rc-form_edit .separator {margin: 0 0.5em;}",
	".rc-form_edit {}",
	".rc-form_edit {}",
	"",
	"",
	""
	);


rr.extend('rcalendar.ui', {
	'page_edit': function(pr, _) {
		var ns = this, s = ns.sname = 'rc-form_edit'; // s = form edit item

		function gr_(nm, x) {
			var u;
			return _('tr.'+nm,
				_('td.lb',
					!rr.trim(x.label) ? _.text(" ") :
					_('label', {htmlFor: x.name||''},
						_('span',
							_.text(rr.trim(x.label))
							)
						)
					),
				_('td.cp',
					_('div.c', x.add)
					)
				)
			};

		ns.node = _('div.rc-page--mode-1',
			ns.toolbar = _('div.rc-page-toolbar'+(pr.mode != 'month' ? ' rc-page-toolbar--pleft' : ''), //
				_('div.panel',
					ns.b_past = _('button.gopast', "Изменить"),
					ns.b_today= _('button.gotoday', "Отмена")
					)

				),

			ns.form = _('form', {autoComplete: 'off', method: 'post', onsubmit: rr.breakEvent},
				// form Edit item
				_('div.'+s,
					_('table.'+s+'-table', {cellSpacing: 0,cellPadding: 0,border: 0},
						_('tbody',
							gr_(s+'-what', {
								name: "rc:what",
								label: "Событие:",
								add: _('input', {name: 'rc:what', value: pr.textItem||''})
								}),

							gr_(s+'-where', {
								name: "rc:where",
								label: "Место:",
								add: _('input', {name: 'rc:where', value: pr.textItem||''})
								}),

							gr_(s+'-pcalendar', {
								name: "rc:pcalendar",
								label: "Календарь:",
								add: _('select', {name: 'rc:pcalendar', value: pr.textItem||''},
									/*
									rr.xEach(4, function(v, i) {
										return _(':ddd', v);
										}),
									*/
									_('option', {value:'c-xxx-xxx-xxx-xx1'}, _.text('My calendar-1')),
									_('option', {value:'c-xxx-xxx-xxx-xx2'}, _.text('My calendar-2'))
									)
								}),

							gr_(s+'-allday', {
								add: _('label',
									_('input', {name: 'rc:allday', type: 'checkbox'}),
									_('span.lb', "All day")
									)
								}),

							gr_(s+'-dtStart', {
								name: "rc:startDate",
								label: "Начало:",
								add: [
									_('input.d', {name: 'rc:startDate', value: pr.textStartDate||''}),
									_('input.t', {name: 'rc:startTime', value: pr.textStartTime||''}),
									_('span.separator', "\u2014"), //--
									_('input.d', {name: 'rc:endDate', value: rr.trim(pr.textEndDate)} ),
									_('input.t', {name: 'rc:endTime', value: rr.trim(pr.textEndTime)} )
									]
								}),

							gr_(s+'-description', {
								name: "rc:description",
								label: "Описание:",
								add: _('textarea', {name: 'rc:description', value: ''})
								})
							)
						)
					)
				)
			)

		}
	});



function passHelper(n, cb) {
	if (typeof n == 'string') n = document.getElementById(n);
	if (!n || n.type != "password") return;
	function ah(o, e, h) {
		if (o.addEventListener) {
			o.addEventListener(e, h, false);
			} else o.attachEvent('on' + e, h);
		};

	ah(n, 'focus', function(e, u) {
		if (!tm) tm = setInterval(test, 70);
		pv = null;
		});

	ah(n, 'blur', function(e, u) {
		if (tm) clearInterval(tm);
		show(tm = null);
		});


	var tm, tm2, err, cErr, cp, pv;
	ah(n, 'keypress', function(e) {
		var c = e.charCode, u;
		if (c === u) c = e.keyCode;
		cp = cErr = false;

		if (c) {
			c = String.fromCharCode(c);
			if (cErr = /[\u0430-\u044f\u0451]/i.test(c)) return // rus char
			cp = c != (e.shiftKey ? c.toLocaleUpperCase() : c.toLocaleLowerCase());
			};
		});

	function test() {
		var v = n.value, ex;

		if (pv !== v) {
			if (v) ex = cErr ? 1: /[\u0430-\u044f\u0451]/i.test(v) ? 2 : false;
			show(ex||(cp?3:false));
			pv = v;
			};

		cErr = cp = false;
		};

	function show(er) {
		if (err != er && cb) cb(er);
		err = er;
		};
	};

//inforPass('passw');
//inforPass('passw', function(e) {});