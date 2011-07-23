

cram.addEvent('open_page', function(e) {
	if (e.returnValue == false) return;

	var hash = e.hash, hs = hash.toLocaleLowerCase(), x, v;
	if (!hs || !(hs == '/mailbox' || !hs.indexOf('/mailbox/')) ) return;

	e.handler = cram.open_mailbox;

	e.hash = '/mailbox/inbox';
	e.query_param = {};


	return e.returnValue = false;
	});


cram.open_mailbox = function(e) {
	var _ = domMaster, ns={};


	var page = domMaster('ui:mailbox_page');

	cram.page_connect_(e, page);
	};

