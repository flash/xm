rr.styles('rc_form_create',
	".rc-fcItem {margin:0.5ex;padding:0 0.5ex 0.5ex;background-color:#EEE;white-space:nowrap;}",
	".rc-fcItem-table {width:100%;}",
	".rc-fcItem-table td.lb {padding-top:0.5ex;padding-left:1ex;}",
	".rc-fcItem-table td.cp {padding-top:0.5ex;padding-left:1ex;width:100%;}",


	".rc-fcItem div.c {overflow:hidden;}",
	".rc-fcItem-what input, .rc-fcItem-pcalendar select {-moz-box-sizing:border-box;-webkit-box-sizing: border-box;box-sizing:border-box;width:100%;}",

	rr.IE<8 && ".rc-fcItem-what input {width:95%;}",
	rr.IE<8 && ".rc-fcItem-pcalendar select {width:96.5%;}",


	".rc-fcItem input.t {width:4em;margin-left:0.5ex;}",
	".rc-fcItem input.d {width:7em;}",



	".rc-fcItem-cmn {margin-top:1em;padding:0 1ex;}",
	".rc-fcItem {}",
	".rc-fcItem {}",
	".rc-fcItem {}",
	"",	"",
	"",
	"",
	""
	)


rr.extend('rcalendar.ui._values_', {	pp_newItem_nCreate: "Новое событие",
	pp_newItem_nEdit: "Редактировать событие",
	pp_newItem_save: "Сохранить",
	pp_newItem_cancel: "Отмена",
	pp_newItem_delete: "Удалить"
	});


rr.extend('rcalendar.ui', {	':user_new_item': function(pr, _) {		var ns = this, s = ns.sname = 'rc-fcItem'; // s = form create item
		//_.isText()

		function gr_(nm, x) {			var u;			return _('tr.'+nm,
				_('td.lb',
					!rr.trim(x.label) ? _.text(" ") :
					_('label', {htmlFor: x.name||''},
						_('span',							_.text(rr.trim(x.label))
							)
						)
					),
				_('td.cp',					_('div.c', x.add)
					)
				)
			};

		// form create item
		ns.node = _('div.rc-fcItem',
			_('table.'+s+'-table', {cellSpacing: 0,cellPadding: 0,border: 0},
				_('tbody',					gr_(s+'-what', {						name: "rc:textWhat",
						label: "What text",
						add: _('input', {name: 'rc:textWhat', value: pr.textItem||''})						}),

					gr_(s+'-pcalendar', {
						name: "rc:pcalendar",
						label: "Calendar",
						add: _('select', {name: 'rc:pcalendar', value: pr.textItem||''},							_('option', {value:'c-xxx-xxx-xxx-xx1'}, _.text('My calendar-1')),							_('option', {value:'c-xxx-xxx-xxx-xx2'}, _.text('My calendar-2'))
							)
						}),

					gr_(s+'-allday', {
						add: _('label',							_('input', {name: 'rc:allday', type: 'checkbox'}),
							_('span.lb', "All day")
							)						}),

					gr_(s+'-dtStart', {						name: "rc:startDate",
						label: "Start",
						add: [							_('input.d', {name: 'rc:startDate', value: pr.textStartDate||''}),
							_('input.t', {name: 'rc:startTime', value: pr.textStartTime||''})
							]
						}),

					gr_(s+'-dtEnd', {						name: "rc:endDate",
						label: "End",
						add: [
							_('input.d', {name: 'rc:endDate', value: rr.trim(pr.textEndDate)} ),
							_('input.t', {name: 'rc:endTime', value: rr.trim(pr.textEndTime)} )
							]
						})
					)
				),

			_('div.'+s+'-cmn',				//_('input.delete', {type:'button', value: _.v().pp_newItem_delete||"Delete", name:"rc:delete"}),
				_('input.save', {type:'button', value: _.v().pp_newItem_save||"Save", name:"rc:save"}),				_('input.cancel', {type:'button', value: _.v().pp_newItem_cancel||"Cancel", name:"rc:cancel"})
				)
			)
		}	});


rr.extend('rcalendar.ui.user_new_item', {	_init: function(cfg) {
		rr.ui.baseElement.set(cfg);
		},

	_factory: function(ui, pr, _) {
		var t = this, ow;

		ui.calendarSource = pr.calendarSource;

		ui.nds = _('::user_new_item', {});


		ui.popupWindow = ow = _('ui:window', {
			name: _.v().pp_newItem_nCreate||'New event',
			visibility: false,
			//fixed: true,
			icon: true,
			left: -500,
			top: -200,
			width: 450,
			height: 180,

			//maxWidth: 1000,
			//maxHeight: 600,
			minWidth: 100,
			minHeight: 50,

			add: ui.nds.node
			});


		ow.__v_nameCreate = _.v().pp_newItem_nCreate||"New event";
		ow.__v_nameEdit = _.v().pp_newItem_nEdit||"Edit event";



		ui.nodeForm = ui.nds.node;

		function label_click() {			var x = ui[this.htmlFor];
			if (x && x.nodeType) x.focus();
			return false;
			};

		rr.each(ui.nodeForm.getElementsByTagName('*'), function(n) {			if (n.name && n.type) {				ui[n.name] = n;
				} else
			if (n.tagName == 'LABEL' && n.htmlFor) {				n.onclick = label_click;				};
			});

		t.init_event(ui);

		ow.set('height', ow.box.scrollHeight);
		ow.set('hide', true);
		ow.set('visibility', true);
		//ow.show('center');
		},

	_prototype: {		show: function(pr) {			if (!pr) pr = {};
			var ui = this, pp = ui.popupWindow, x, u;
			ui.hide = false;

			ui.edit_item_id = (pr.item && pr.item.id) || false;

			ui.interface.set_value(ui, pr.item);

			pp.set('name', !pr.id ? pp.__v_nameCreate : pp.__v_nameEdit);

			pp.show(pp.hide ? 'center' : 'client');

			setTimeout(function() {				ui['rc:textWhat'].focus();				}, 1);
			},

		edit: function(item) {			},

		close: function() {			this.popupWindow.set('hide', true);
			this.hide = true;			}		},

	set: function(ui, pr, v, pv) {
		var it = this, tv = typeof v, x, u;

		switch (pr) {
			case 'calendarSource': if (tv != 'object') return;
			break;
			};

		return v;
		},

	refresh: function(ui, ch, rz) {		//if (rz || ch.calendarSource) {};		},

	set_value: function(ui, pr) {		var x, d, u;

		ui.itemId = pr.id||null;

		ui['rc:pcalendar'].value = pr.calendar||((x = ui['rc:pcalendar'].options[0]) ? x.value : '');

		ui['rc:allday'].checked = pr.allday||false;
		ui['rc:textWhat'].value = pr.text||'';

		d = rcalendar.date_tm(pr.start);
		ui['rc:startDate'].value = d.year+" / "+(d.month+1)+" / "+d.date;
		ui['rc:startTime'].value = (d.h<10?'0':'') + d.h+":"+(d.m < 10 ? '0'+d.m : d.m);

		d = rcalendar.date_tm(pr.end);
		ui['rc:endDate'].value = d.year+" / "+(d.month+1)+" / "+d.date;
		ui['rc:endTime'].value = (d.h<10?'0':'') + d.h+":"+(d.m < 10 ? '0'+d.m : d.m);
		},

	get_value: function(ui) {		var pr={}, d, x, u;
		pr.id = ui.edit_item_id;

		pr.calendar = ui['rc:pcalendar'].value;
		pr.allday = ui['rc:allday'].checked;
		pr.text = rr.trim(ui['rc:textWhat'].value);

		d = new rcalendar.xdate();


		// --
		x = ui['rc:startDate'].value;
		x = x && x.split(/[^\d]+/);
		if (!x || !x[0] || !x[1] || !x[2]) return;
		d.set(parseInt(x[0], 10)||0, (parseInt(x[1], 10)||1) - 1 , parseInt(x[2], 10)||0);

		x = ui['rc:startTime'].value;
		if (x = x && x.split(/[^\d]+/)) {
			d.set(u, u, u, parseInt(x[0], 10)||0, parseInt(x[1], 10)||0, 0);
			} else d.s00();

		pr.start = d.getTime();



		// --
		x = ui['rc:endDate'].value;
		x = x && x.split(/[^\d]+/);
		if (!x || !x[0] || !x[1] || !x[2]) return;
		d.set(parseInt(x[0], 10)||0, (parseInt(x[1], 10)||1) - 1, parseInt(x[2], 10)||1);


		x = ui['rc:endTime'].value;
		if (x = x && x.split(/[^\d]+/)) {			d.set(u, u, u, parseInt(x[0], 10)||0, parseInt(x[1], 10)||0, 0);			} else d.s00();

		pr.end = d.getTime();

		return pr;
		},


	init_event: function(ui) {		ui.popupWindow.addEvent('close', function(e) {			rr.breakEvent(e);

			ui.interface.ev_hide(ui);
			});

		ui.gEvent.add(ui['rc:save'], 'click', function(e) {			rr.breakEvent(e);
			ui.interface.ev_create(ui);
			});
		ui.gEvent.add(ui['rc:cancel'], 'click', function(e) {
			rr.breakEvent(e);

			ui.interface.ev_hide(ui);
			});

		ui.gEvent.add(ui.nodeForm, 'keypress', function(e) {			if (e.keyCode == 27) {				rr.breakEvent(e);
				ui.interface.ev_hide(ui);
				return;				};
			if (e.keyCode == 13) {				var tg = e.target||e.srcElement;
				if (tg.tagName != 'A' && tg.type != "button") {					rr.breakEvent(e);

					ui.interface.ev_create(ui);
					};
				};			});
		},

	ev_create: function(ui) {		var pr = this.get_value(ui);
		if (!pr)  {			// error form

			return;			};

		if (ui.initEvent('submit', pr) == false) return;
		ui.close();

		var list = ui.calendarSource, x;
		list.set(x = {
			id: pr.id || list.newId(),
			calendar: list.calendars[1],

			start: pr.start,
			end: pr.end,
			text: pr.text
			});

		list.ev_change({			user_create: true			});

		list.initEvent('userCreateItem', x);
		},

	ev_hide: function(ui) {		ui.close();		}

	});
