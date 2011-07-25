



tmpl.sidebar_folders = function (_, p) {
	var ns = this
	, user = cram.user || false
	;

	ns.node = _('div.b-sidebar_folders'
		, _('div.b-sidebar_folders-folders'
			, _('div.b-sidebar_folders-folders_sys'
				, rr.map(['INBOX', 'SentBox', 'DraftBox', 'Trash'], function (v) {
					return _('tmpl:folder_mail', {
						folder: p.folder,
						data: p.data_folders['data ' + v] || false
					})
				})
			)

			, _('div.b-sidebar_folders-folders_user' + (p.data_folders.user_folders.length > 0 ? '' : ' b-sidebar_folders-folders_user--null')
				, _.forEach(p.data_folders.user_folders, function (_, x) {
					return _('tmpl:folder_mail', {
						folder: p.folder,
						data: x
					});
				})
			)
		)
	)
};

tmpl.folder_mail = function(_, p) {

	var ns = this
	, data = p.data||false
	, name = data.folder.match(/^~[^\/]+\/(.*)/)[1]
	, active = p.folder == '/mailbox/' + name
	, text
	, href
	, href_unseen
	, u
	;

	switch(name) {
		case 'INBOX':
			text = "Входящие";
			break;
		case 'SentBox':
			text = "Отправленные";
			break;
		case 'DraftBox':
			text = "Черновики";
			break;
		case 'Trash':
			text = "Корзина";
			break;

		default:
			text = name;
		};

	href = '#/mailbox/' + name;
	href_unseen = '#/mailbox:unseen/' + rr.urlEscape(name);
	

	return _('tmpl:uMenuItem'
		, {
			text: text,
			href: href,
			css: ''
			//icon: false
			}

		, data.unseen > 0 && _('tmpl:uMenuInfor'
			, {
				mode: 'attention',
				text: data.unseen,
				title: ""
				}
			)

		, _('tmpl:uMenuInfor'
			, {
				mode: 'text',
				text: data.messages > 0 ? data.messages : "0",
				title: ""
				}
			)
		);
	};



