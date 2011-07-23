/* */

cram.addEvent('open_page', function(e) {
	if (e.returnValue == false) return;

	var hs = e.hash;
	if (!hs || !(hs == '/compose' || hs.toLocaleLowerCase() == '/compose') ) return;



	e.hash = '/compose';
	e.handler = function() {
		return cram.open_compose();
		};

	return false;
	});



cram.open_compose = function(e) {
	var page = domMaster.tmpl('ui:compose_page', false);
	page.pg_name = 'compose';

	cram.page_connect(page, e);

	//console.dir(cram.getFormParams(page.form))
	};




