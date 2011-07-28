
rr.styles('tmpl:d'
	, '.b-sidebar_folders-tools {margin-top:3px;}' //text-align: center; padding-left: 5px;
	, '.b-sidebar_folders-compose .b-umenu_item-text {margin-left:7px;font-weight: bold;}'
	, '.b-sidebar_folders-folders {margin-top:15px;}'
	, '.b-sidebar_folders-more {background-position: 100% 50%;color: #575757 !important;margin-left: 0px;padding: 1px 20px 1px 5px;}'
	, '.b-sidebar_folders-more:hover {color: #000 !important;}'

	, '.b-menu_sidebar_folders {margin-left:-1px;}'
);


tmpl.sidebar_folders = function (_, p) {
	var ns = this
	, user = cram.user || false
	;

	ns.node = _('div.b-sidebar_folders'
		, _('div.b-sidebar_folders-tools'
	/*
	, _('ui:uButton', {
	css: 'b-sidebar_folders-compose',
	css_icon: 'i-img--edit',
	icon: 'left',

	first: 'left',
	//group: 'right',
	title: "Написать письмо",
	text: "Написать письмо"
	})
	*/


			, _('tmpl:uMenuItem'
				, {
					text: "Написать письмо",
					href: '#/compose'
					, css: 'b-sidebar_folders-compose'
					//, css_icon: 'i-img--send_mail',
					, icon: 'i-img--new_mail'
					//, icon: true
				}
			)

	/*
	, _('tmpl:uMenuItem'
	, {
	text: "Новое письмо",
	href: '#/'
	, css: ''
	//, css_icon: 'i-img--send_mail',
	, icon: 'i-img--new_mail'
	, icon: true
	}
	)
	*/

	/*
	, _('tmpl:uMenuItem'
	, {
	text: "Адресная книга",
	href: '#/contacts'
	//, css_icon: 'i-img--send_mail',
	, icon: 'i-img--addr'
	//, icon: true
	}
	)
	*/
		)

		, _('div.b-sidebar_folders-folders'
			, _('div.b-sidebar_folders-folders_sys'
				, rr.map(['INBOX', 'SentBox', 'DraftBox', 'Trash'], function (v) {
					return _('tmpl:folder_mail', {
						folder: p.folder,
						data: p.data_folders['data ' + v] || false
					})
				})
			)

			, _('ui:uMenu'
				, {
					css: 'b-menu_sidebar_folders'
					, position: 'left' //'right/left',
					, open: 'auto' //auto|click|hover
					//, debug: true

					, node: 
						_('a.b-sidebar_folders-more i-img--arrow_down s-menu_bg', { href: '#/' }
							, "ещё"
							)
				}

				, _('div'
					, {
						style: 'width:200px;margin: 0pt 1px;' //height:250px;
					}

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


			/*
			*/
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



