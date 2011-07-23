
rr.styles('tmpl:rm_menu'
	, '.b-box_menu {z-index:1110;height:0;left:0;position:absolute;top:0;width:0;}'

	, '.b-rm_menu {background-color:#FFF;position:absolute;-moz-box-shadow:6px 6px 3px -5px rgba(0, 0, 0, 0.25);-webkit-box-shadow:5px 5px 5px -4px rgba(0, 0, 0, 0.25);box-shadow:1px 1px 3px rgba(0, 0, 0, 0.25);border:1px solid; border-color:#D0E2EC #A6A6A6 #A6A6A6 #D0E2EC;}'
	, '.b-rm_menu-box {overflow:hidden;}'
	);



tmpl.uMenu = function(_, pr) {
	var ns = this;

	ns.node = _('div.b-rm_menu', {css: pr.css}
		, ns.box = _('div.b-rm_menu-box')
		)
	};



/*
_('tmpl:uMenuItem', {text: "", href: '#/xxx', css: 'i-icons i-icons--demo i-icons--demo_hover', icon: 'i-icons i-icons--info'}
	, _('tmpl:uMenuInfor', {text: "", title: "", css: '', mode: 'error', hide: true})

	, _('tmpl:uMenuInfor', {title: "", css: '', mode: 'error', hide: true}
		, ns.total = _.text("0")
		)
	);
	*/

rr.styles('tmpl:umenu'
	, '.b-umenu_item {font-size:13px;line-height: 20px;color:#575757 !important;cursor:pointer; white-space:nowrap; overflow:hidden; margin:1px 0; padding:2px; display:block;}'

	, '.b-umenu_item-right {display:block;float:right;margin-left: 4px;}' //overflow:hidden;
	, '.b-umenu_item-left {display:block;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;}'

	, '.b-umenu_item-icon {margin-right: -1px;display: inline-block;width:20px; height:20px;overflow: hidden;vertical-align: top;}'
	, '.b-umenu_item-text {display: inline;margin-left:3px;padding:0;vertical-align: top;}'

	, '.b-umenu_item-infor {color:#999999;font-size:11px;cursor:pointer;padding:0 3px;margin:0 1px;vertical-align:top;}'
	, '.b-umenu_item-infor--hide {display:none;}'

	, '.b-umenu_item-infor--mode-error {background-color: #FFF;border-color: #D00000;color: #D00000;}'
	, '.b-umenu_item-infor--mode-attention {color:#f00;background-color:#FFFFD6;border:1px solid #F8CAA3;}'




	, '.b-umenu_item--active {background-color:#DDD;}'
	, '.b-umenu_item--active .b-umenu_item-text {color:#222 !important;}'
	, '.b-umenu_item:hover .b-umenu_item-text {color:#222 !important;}'

	, '.b-umenu_item-icon--hide {display:none;}'
	);



tmpl.uMenuItem = function(_, p) {
	var ns = this, u;

	ns.node = _('a.b-umenu_item no_underline s-menu_bg'+(p.active ? ' b-umenu_item--active s-menu_bg--active' : '')
		, {
			css: p.css,
			tabIndex: p.tabIndex > 1 ? p.tabIndex : 1,
			title: p.title,
			href: p.href
			}

		, ns.box = _('span.b-umenu_item-right'
			)

		, _('span.b-umenu_item-left'
			, ns.icon = p.icon !== false &&  _('span.b-umenu_item-icon'+(p.icon ? '': ' b-umenu_item-icon--hide')
				, {
					css: p.icon,
					tabIndex: p.tabIndex > 0 ? p.tabIndex : u
					}
				)

			, _('span.b-umenu_item-text underline text' //ns.text_wrap =
				, ns.text = _.text(p.text || p.text === 0 ? p.text : ' ')
				)
			)
		);
	};

tmpl.uMenuInfor = function(_, p) {
	return _((p.href ? 'a.b-umenu_item-infor' : 'span.b-umenu_item-infor')
			+ (p.hide ? ' b-umenu_item-infor--hide' : '')
			+ (p.mode ? ' b-umenu_item-infor--mode-'+p.mode : '')

		, {
			text: p.text,
			css: p.css,
			title: p.title

			, href: p.href
			, onclick: p.onclick
			}
		)
	};


