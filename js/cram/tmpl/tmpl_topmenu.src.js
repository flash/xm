
rr.styles('tmpl:topmenu'
	, '.rm-menu_top {margin-top:1px;}'
	, '.rm-menu_top-wrap {padding:0 2px;width:15em;}'


	, '.b-topmenu {padding-bottom: 53px;position: relative;font-size: 13px;}' //height:100px;


	, '.b-topmenu-grd_line {position: absolute;bottom:0;left:0;right:0;height:3px;overflow: hidden;z-index: 1;pointer-events: none;}'
	, '.b-topmenu-grd_line {'
		+ (rr.IE < 9 ? '-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00000000,endColorstr=#20323232)";'
			: 'background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAAGUlEQVQImWNgwAIYubi4+NAFWbi4uITQBQEK7QBizQOlrAAAAABJRU5ErkJggg==) repeat-x;'
			)
		+'}'

	//, '.b-topmenu-grd_line {background-image:-moz-linear-gradient(top, rgba(0,0,0,0), rgba(30,30,30,0.2));background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(30,30,30,0.1)));}'
	//, rr.IE<=9 && '.b-topmenu-grd_line {-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00000000,endColorstr=#20323232)";}'

	, '.b-topmenu-logo_link {position: absolute;left:0;bottom: 0;height:30px;width: 100px;text-decoration: none;font-size: 18px;line-height: 26px;}'
	, '.b-topmenu-logo_link:hover {color:#333 !important;}'
	, '.b-topmenu-logo_envelope {position: absolute;height: 100%px;width: 100%;top:0;left:0;}'
	, '.b-topmenu-logo_title {position: absolute;left:1em;}'

	, '.b-topmenu-avatar_bx {}'
	, '.b-topmenu-avatar_link {position: absolute;bottom:11px;right:15px;padding: 2px;width: 50px;height:50px;text-align: center;background-color:rgba(255,255,255, 0.25);}'
	, '.b-topmenu-avatar_img {position: relative;}'
	, '.b-topmenu-avatar_bg {position: absolute;top:0;bottom:0;right:0;left:0;-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#32FFFFFF,endColorstr=#32FFFFFF)";}'

	, '.b-topmenu-box {position: absolute;min-width:300px;line-height: 2.2em;bottom: 0;left: 100px;right: 220px;white-space: nowrap;padding: 3px 3px 0 1px;}'
	, '.b-topmenu-box .item {}'
	, '.b-topmenu-box--x3 .item {width: 33%;}'
	, '.b-topmenu-box--x4 .item {width: 25%;}'
	, '.b-topmenu-box--x5 .item {width: 20%;}'

	, '.b-topmenu-item_num {text-decoration: none;font-size: 85%;cursor: pointer;margin-left: 2px;color: #FF0000;border: 1px solid #F8CAA3;background-color: #FFFFD6;padding: 0 0.6ex;display: inline-block;line-height:2.5ex;vertical-align: middle;}'
	, '.b-topmenu-item_num--hide {display:none;}'
	, '.b-topmenu-other {background-position:50%;margin-right: 5px;cursor: pointer;text-align: center;margin-left: 2px;display: inline-block;width:20px;height: 20px;line-height: 20px;vertical-align: middle;}'
	, '.b-topmenu-other--active {}'

	// item
	, '.b-topmenu-item {line-height: 30px;z-index: 0;max-width: 130px;display: block;float:left;clear: right;position: relative;padding-bottom: 0px;}' //overflow: hidden;

	, '.b-topmenu-item_bg {position:absolute;left:2px;right:0;top:0;bottom:0;z-index:-1;'
		+ (rr.IE<9 ? '-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#99FFFFFF,endColorstr=#99FFFFFF)";'
			: 'background-color: #F3F3F3;background-color: rgba(255, 255, 255, 0.7);'
			)
		+ '}'

	//, (rr.WebKit < 534 && rr.is_mobile) && [
		//, '.b-topmenu-item {overflow: hidden;}'
		//, '.b-topmenu-item_bg {bottom:-1px;}'
		//]

	, '.b-topmenu-item--active {z-index: 2;}'
	, '.b-topmenu-item--active .bg {background-color: #FFF;margin-bottom: -2px;}'

	, '.b-topmenu-item_link {text-indent: 8px;display: block;margin-left:2px;text-decoration: none;}'
	, '.b-topmenu-item_text {display: block;overflow: hidden;}'

	, '.b-topmenu-item_right {line-height: 28px;display:none;padding:0 1px;float: right;}' //line-height: 2.5em;height: 2.5em;min-height:25px;
	, '.b-topmenu-item_right--show {display:block;}'



	, '.b-topmenu-user_link {max-width: 150px;position: absolute;bottom: 5px;right: 16px;white-space: nowrap;}'
	/*
	, '.b-topmenu-user_link {border-bottom: 1px dotted;bottom: 8px;cursor: pointer;max-width: 150px;position: absolute;right: 16px;white-space: nowrap;}'
	, '.b-topmenu-user_link:hover, .b-topmenu-user_link:focus {border-bottom-color: transparent}'
	, '.b-topmenu-user_text {margin-bottom: -3px;display: block;position: relative;}' //margin-right: 18px; //line-height: 12px;
	*/
	//, '.b-topmenu-user_link:hover {background-color: rgba(255, 255, 255, 0.25);}'

	, '.b-topmenu-other_wrap {float:left;height:30px;width:0;position: relative;}'
	, '.b-topmenu-other {left:4px;opacity: 0.7;bottom: 3px;line-height: 24px; height:24px; background-position: 50%;background-repeat:no-repeat; cursor: pointer; width:26px;  background-color: rgba(255, 255, 255, 0.15);position: absolute; white-space: nowrap;}'
	, '.b-topmenu-other:hover {opacity: 1;background-color: rgba(255, 255, 255, 0.8);  }'

	//, '.b-topmenu-exit_link {}'
	);


tmpl.topmenu = function(_, prm){
	var ns = this;

	ns.node = _('div.b-topmenu#header'

		, _('div.b-topmenu-grd_line')

		/*
		, _('A.b-topmenu-logo_link no_underline s-logo'
			, {
				tabIndex: 1,
				href: '/',
				title:"Домой"
			}

			, _('span.b-topmenu-logo_envelope s-logo_envelope')
			, _('SPAN.b-topmenu-logo_title s-logo_title'
				, "c:"
			)
		)
			*/

		, _('div.b-topmenu-box b-topmenu-box--x4' // --x1 --x2 --x3 --x4 --x5 --x6
			, ns.item_reader = _('tmpl:topmenu_item'
				, {
					text: "Подписки",
					title: "Создание нового письма",
					href: '#/reader'
				}
			)

			, ns.item_mailbox = _('tmpl:topmenu_item'
				, {
					text: "Почта",
					title: "Проверить почту и перейти в папку «Входящие»",
					href: '#/mailbox/inbox'
				}
			)

			, ns.item_contacts = _('tmpl:topmenu_item'
				, {
					text: "Контакты",
					title: "Сохраненные адреса",
					href: '#/contacts'
				}
			)

			, ns.item_calendar = _('tmpl:topmenu_item'
				, {
					//active: true,
					rbox_show: true,
					text: "Настройки",
					title: "Настройки",
					href: '#/calendar'
				}
			)

			/*
			, _('div.b-topmenu-other_wrap'
				, ns.item_settings = _('a.b-topmenu-other no_underline i-img--arrow_down'
					, {
						tabIndex: 1,
						title: "Настройки",
						href: '#/settings'
					}
				)
			)
			*/

		)


		/*
			*/


		/*
		, _('a.b-topmenu-user_link no_underline' //i-img--arrow_down
			, {
				tabIndex: 1,
				href: '#/user'
				}
			, _('span.b-topmenu-user_text underline'
				, "vflash@eeee.ee"
				)
			)
		*/

		/*
		, _('ui:uMenu'
			, {
				css_open: 'r-topline_link--open',
				position: 'right',
				open: 'click', //auto|click|hover|none

				node: _('a.b-topmenu-user_link no_underline' //i-img--arrow_down
					, {
						tabIndex: 1,
						href: '#/user'
						}
					, _('span.b-topmenu-user_text underline'
						, "flash-vkv@rambler.ru"
						)
					)
				}

			, _('div'
				, {
					style: 'width:150px;height:200px;'
					}

				)
			)
			*/


		/*
		, _('a.b-topmenu-user_link no_underline' //i-img--arrow_down
			, {
				tabIndex: 1,
				href: '#/user'
				}
			, _('span.b-topmenu-user_text underline'
				, "flash-vkv@rambler.ru"
				)
			)
		, _('a.b-topmenu-exit_link' //i-img--arrow_down
			, {
				tabIndex: 1,
				href: '#/user'
				}
			, _('span.b-topmenu-exit_text'
				, "Выход"
				)
			)

		*/
	);
};

tmpl.topmenu_item = function(_, prm) {
	var ns = this;

	ns.node = _('div.b-topmenu-item item'+(prm.active?' b-topmenu-item--active':'')
		, _('span.b-topmenu-item_bg bg')

		, ns.box = _('span.b-topmenu-item_right'+(prm.rbox_show? ' b-topmenu-item_right--show': '') )

		, _('a.b-topmenu-item_link', {tabIndex:1, title: prm.title, href: prm.href}
			, _('span.b-topmenu-item_text'
				, ns.text = _.text(prm.text || "")
				)
			)
		);
	};

