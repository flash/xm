

cram.addEvent('open_page', function (e) {
	if (e.returnValue == false) return;

	var hash = e.hash, hs = hash.toLocaleLowerCase(), a, x, v, i;
	if (!hs || !(hs == '/mailbox' || !hs.indexOf('/mailbox/'))) return;

	e.handler = cram.open_mailbox;

	var q = hash.match(/^\/mailbox\/([^\/\?]+)(\/(d(\w{1,10})|n(\w+)))?/) || false;

	e.hash = '/mailbox/inbox' + (q[4] || q[5] ? '/' + q[3] : '');

	e.query_param = {
		folder: '/mailbox/' + rr.urlDecode(q[1]),
		folder_name: rr.urlDecode(q[1]),
		
		filter_date: q[4] || null,
		filter_next: q[5] || null
	};



	return e.returnValue = false;
});


cram.open_mailbox = function(e) {
	var _ = domMaster, ns={};


	var page = domMaster('ui:mailbox_page');

	cram.page_connect_(e, page);
	};

