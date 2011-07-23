
var rcalendar = this.rcalendar || {};

cram.addEvent('open_page', function(e) {
	if (e.returnValue == false) return;

	var hash = e.hash, hs = hash.toLocaleLowerCase(), x, v;
	if (!hs || !(hs == '/calendar' || !hs.indexOf('/calendar/')) ) return;

	e.handler = function(e) {
		return rcalendar.page_open(e)
		};

	e.hash = '/calendar';
	e.query_param = {
		};

	return e.returnValue = false;
	});


rcalendar.page_open = function(e) {
	var page = rcalendar.page, tm;
	if (!page) {
		tm = new Date();
		tm.setHours(0, 0, 0, 0);
		tm = Math.floor(tm.getTime()/60000);

		page = domMaster('ui:rc_page', {
			calendarSource: dataSource(),
			timeStart: tm
			});
		};

	cram.page_connect_(e, page);
	};


function dataSource() {
	var list = new rcalendar.calendarSource_();

	var tm = new Date(), h=3600000, id=10, clist=[{color:1}, {color:2}];
	tm.setHours(0, 0, 0, 0);
	list.calendars = clist;

	tm = Math.round(tm.getTime()/60000)-1*1440; // min




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

	for(;i<n;i++) {
		add(Math.round(Math.random()*744*(n/(5*pl)))-744*(n/(10*pl)), Math.round(Math.random()*(Math.random() > 0.95 ? 70 : Math.random() > 0.9 ? 24 : 12)), 'еше работа которую нужно сделать');
		}

	return list;
	}





