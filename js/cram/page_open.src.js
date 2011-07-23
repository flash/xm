/*
/^~([^\/]+)\/([^\/]+)(?:\/(.*)|)/
*/

// /history/oliver-79%40rambler.ru

/*
cram.start_('all', function(e) {
	//e.style = 'tmpl rm cram_inbox rm_style';
	this.history.start(this.hash_default);
	this.go(this.history.get() || this.hash_default, true);
	});
*/


/*
cram.addEvent('open_page', function(e) {
	if (e.returnValue == false) return;

	var hs = e.hash, x = (hs.match(/^\/([^\/]+)/)||[])[1], mbox, what, page, filter;
	if (x) x = x.toLocaleLowerCase();

	switch(x) {
		case 'search':
			return;


		case 'history':
			// /history/oliver-79%40rambler.ru
			return;

		case 'contacts':
			e.hash = '/contacts';
			e.handler = 'open_contacts';
			return false;

		case 'box:unseen': filter = 'unseen';
		case 'box:flag': filter = filter||'flag';
		case 'box':
			if (filter) e.filter = filter;
			e.mbox = (hs.match(/^\/box(?:\:unseen|flag|)\/([^\/]+)/)||[])[1];
			e.what = (hs.match(/^\/box(?:\:unseen|flag|)\/[^\/]+\/([\d\.]+)/)||[])[1];
			if (e.mbox) e.mbox = decodeURIComponent(e.mbox);

			if (e.what) {
				e.handler = 'open_message';
				return false;
				};

			e.page = (hs.match(/^\/box\/[^\/]+\/(?:p|page\/)([\d\.]+)/)||[])[1];

			e.handler = 'open_mailbox';
			return false;


		case 'inbox:unseen': case 'sentbox:unseen': case 'sent:unseen': case 'draftbox:unseen': case 'drafts:unseen':case 'trash:unseen': filter = 'unseen';
		case 'inbox:flag': case 'sentbox:flag': case 'sent:flag': case 'draftbox:flag': case 'drafts:flag':case 'trash:flag': filter = filter||'unseen';
			x = x.split(':')[0];
		case 'inbox': case 'sentbox': case 'sent': case 'draftbox': case 'drafts':case 'trash':
			switch(x) {
				case 'inbox': e.mbox ='INBOX'; break;
				case 'sentbox': case 'sent': e.mbox = 'SentBox'; break;
				case 'draftbox': case 'drafts': e.mbox = 'DraftBox'; break;
				case 'trash': e.mbox = 'Trash'; break;
				default: return;
				};

			if (filter) e.filter = filter;
			e.what = (hs.match(/^\/[^\/]+\/([\d\.]+)/)||[])[1];
			if (e.what) {
				e.handler = 'open_message';
				return false;
				}

			e.page = (hs.match(/^\/[^\/]+\/(?:p\/?|page\/)([\d\.]+)/)||[])[1];

			e.handler = 'open_mailbox';
			return false;

		default: return
		};
	});
*/
