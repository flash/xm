rr.styles('tmpl:page'
	, '.b-topline {background-color: #333333;height: 26px;left: 0;z-index: 2;line-height: 26px;font-size: 12px;padding: 0 15px;}' //position: absolute;right: 0;top: 0;
	, '.b-topline-box {max-width: 1050px;margin: 0 auto;text-align: right;}'
	, '.b-topline-left {text-align: left;float:left;margin-left: 10px;}'
	, '.b-topline-right {margin-right: 10px;}'
	, '.b-topline-link, a.b-topline-link {color: #fff !important;}'

/* --------------- scroll top -------- */
	, '.b-frame_goScrollTop {position:' + (rr.Opera ? 'absolute' : 'fixed') + ' ;top:0;display:none;width: 210px;height: 0;-moz-user-select: none;user-select: none;}'
	, '.b-frame_goScrollTop--show {display:block;}'

	, '.b-frame_goScrollTop-text {position: ' + (rr.Opera ? 'fixed' : 'absolute') + ';top:110px;background-color:#E6E6E6;color:#333; padding:4px 10px 4px 30px;z-index: 1200;cursor: pointer;}'
	, '.b-frame_goScrollTop-text:hover {background-color:#D5D5D5;}'


/* --------------- mainframe --------- */
	, '.b-frame_wrapper {margin: 0 auto;}' //overflow:hidden;
	, '.b-frame_body {padding: 10px 0;z-index:1;position:relative;top:0;left:0;background-color: #fff;}'
	, '.b-frame_box {margin-left:210px;border-left:1px solid #CCCCCC;}'
	, '.b-frame_pleft {position:absolute;width:200px;z-index:1;left:5px;}'
//, '.b-frame_sidebar-box {}'
//, '.b-frame_footer {}'



/* --------------- page --------------- */
	, '.b-page {}'
	, '.b-page-head {background-color: #F3F3F3;color:#000;font-size:18px;line-height:24px;padding:4px 10px;margin-top:7px;margin-bottom:10px;white-space: nowrap;border-bottom: 1px solid #DDDDDD;border-top: 1px solid #DDDDDD;}'
	, '.b-page-head--none {height:0px;}'

	, '.b-page-head_left {overflow: hidden;}'
	, '.b-page-head_right {float:right;font-size: 13px;padding-left: 1em;line-height: 22px;}' //overflow: hidden;

	, '.b-page-top {padding:3px 10px;}' //border-bottom:1px solid #989898;
	, '.b-page-capion {margin:10px 0;padding:0 10px 10px;min-height:300px;}'
//, '.b-page-capion--head_top {margin-top:15px;}'

	, '.b-page-bottom {padding:8px 15px 0;}' //border-top:1px solid #989898;
	, '.b-page-top--hide, .b-page-bottom--hide {display:none;}'




/* --------------- page dialogs -------- */
	, '.b-page-box_dialogs {display:none;overflow: hidden;margin: 10px 0;}'
	, '.b-page-box_dialogs--show {display:block;}'

	, '.b-page-dialog {display:none;overflow: hidden;position: relative;background-color: #8CAED3;border: 3px solid #C5DAF1;margin: 0 12px;padding: 1px;}'
	, '.b-page-dialog--show {display:block;}'
	, '.b-page-dialog_head {background-color:#E9E9E9;border-bottom: 1px solid #FFFFFF;padding: 4px 15px;}'
	, '.b-page-dialog_title {}'
	, '.b-page-dialog_box {padding: 10px 15px;background-color: #F3F3F3;}'

	, '.b-page-dialog--type-informer {margin: 10px 15px;border: 1px solid #93CB7B;}'
	, '.b-page-dialog--type-informer .b-page-dialog_box {background-color: #BFDD9C;padding: 7px 10px;}'



/* --------------- loading --------------- */
	, '.b-rm_loading {font-size:14px;display:none;z-index: 999;cursor: default;position:fixed;top:0;left:50%;width:20em;margin-left:-10em;height:0;text-align:center;}'
	, '.b-rm_loading--show {display:block;}'
	, '.b-rm_loading-text {padding: 3px 1ex;text-align:left;background-color: #EEE;color:#555;}'


/* --------------- footer --------------- */
	, '.b-frame_footer {background-color: #FFFFFF;font-size:80%;overflow:hidden;clear:both;padding:10px 10px;border-top:1px solid #333;}'
	, '.b-frame_footer-left {width:30%;float:left;}'
	, '.b-frame_footer-right {float:left;width:70%;_width:69.9%;text-align:right;}'
	);


rr.styles('tmpl:page'
/*
, 'html.cw_less-1000 .b-frame_pleft {width: 185px;}'
, 'html.cw_less-1000 .b-frame_box {margin-left: 195px;}'
, 'html.cw_less-1000 .b-topmenu-box  {left: 215px}'
, 'html.cw_less-1000 .b-topmenu-logo_link {width: 205px;}'

, 'html .b-frame_pleft {width: 185px;}'
, 'html .b-frame_box {margin-left: 195px;}'
, 'html .b-topmenu-box  {left: 215px}'
, 'html .b-topmenu-logo_link {width: 205px;}'
*/
	);


tmpl.rm_loading = function (_, prm) {
	_('body'
		, _(prm.node //b-rm_loading
			, _('span.b-rm_loading-text', "Загрузка")
			)
		)

};

tmpl.mainframe = function (_, pr) {
	var ns = this;


	ns.node = _('DocumentFragment' //'body'
		, _('div.b-topline#topline'
			, _('div.b-topline-box'
				, _('span.b-topline-left'
					, _('a.b-topline-link', { href: '/' }
						, "Главная"
					)
				)

				, _('span.b-topline-right'
					, _('a.b-topline-link no_underline', {href: '/'}
						, _('span.b-topline-link_text underline'
							, "Константин"
						)
					)
				)
			)
		)

		, ns.node_frame = _('div.b-frame_wrapper#wrapper'
			, ns.goScrollTop = _('div.b-frame_goScrollTop'
				, ns.goScrollTop_click = _('div.b-frame_goScrollTop-text s-menu_bg', { tabIndex: 1 }
					, "Вверх"
					)
				)


			, ns.topmenu = _('tmpl:topmenu' //#header
				, {
					uniq: pr.uniq
				}
				)

			, _('div.b-frame_body#content'
				, ns.pleft = _('div.b-frame_pleft'
					, ns.sidebar_box = _('div.b-frame_sidebar-box'
						)
					)

				, ns.box = _('div.b-frame_box'
					)
				)

			, ns.footer = _('DIV.b-frame_footer b_footer#footer'
				, _('DL'
					, _('DT.b-frame_footer-left'
						, _('A', { href: "/" }
							, "Разместить рекламу"
							)
						, ' | '
						, _('A', { href: "/" }
							, "Обратная связь"
							)
						)

					, _('DT.b-frame_footer-right'
						, "© 0001–2011, ООО «"
						, _('A', { href: "/" }
							, "Вася Интернет Холдинг"
							)
						, "»"
						)
					)
				)
			)
		);
};


/*
ns.page = _('ui:page', {name: 'Адресная книга'[, title: "text text", pid: 'contacts', extend: this]} //pid - id страницы, name - заголовок страницы, title - title бразера
, _('ui:page_head'  // то что в шапке
)

, _('ui:page_dialog' // диалоговые панели
)

, _('ui:page_dialog', {title: "Новый контакт"[, debug: true]}
)

, _('p', "blabla bla") // все помешается в бокс
, _('p', "blabla bla")
, _('p', "blabla bla")
, _('p', "blabla bla")

, _('ui:page_footer' // то что внизу
)
)
*/

tmpl.page = function (_, pr) {
	var ns = this, head_node, head, x;

	switch (pr.head) {
		case 'top': case 'bottom': case 'none':
			head = pr.head;
			break;
		default:
			head = 'top';
	};

	if (head !== 'none') {
		head_node = _('div.b-page-head' + (head == 'none' ? '' : head == 'top' ? ' b-page-head--top' : ' b-page-head--bottom')
			, ns.box_headRight = _('div.b-page-head_right'
				, pr.head_right
			)
			, ns.box_headLeft = _('div.b-page-head_left'
				, pr.head_name || pr.name
			)
		);

	} else {
		head_node = _('div.b-page-head b-page-head--none');
	};




	ns.node = _('div.b-page' + (head == 'none' ? '' : head == 'top' ? ' b-page--head_top' : ' b-page--head_bottom')
		, {
			css: pr.css
		}

		, ns.box_top = _('div.b-page-top b-page-top--hide ') //i-grd i-grd--bottom
		, head_node

		, ns.box_dialogs = _('div.b-page-box_dialogs') // b-page-box_dialogs--show

		, ns.box = _('div.b-page-capion' + (head == 'none' ? '' : head == 'top' ? ' b-page-capion--head_top' : ' b-page-capion--head_bottom')
			, {
				css: pr.css_capion
			}
		)

		, ns.box_down = _('div.b-page-bottom b-page-bottom--hide')
	);
};

tmpl.page_dialog_ = function (_, prm) {
	var ns = this;

	ns.node = _('div.b-page-dialog' //b-page-dialog--show
		, { css: prm.css }
	);
};

tmpl.page_dialog = function (_, prm) {
	var ns = prm.extend || this;

	if (prm.title) {
		ns.head = _('div.b-page-dialog_head' // шапка добавиться если есть title
			, _('span.b-page-dialog_text'
				, prm.title
			)
		)
	};

	ns.node = _('div.b-page-dialog b-page-dialog--type-' + (prm.type ? prm.type : 'default')//b-page-dialog_panel--show
		, {
			css: prm.css
		}
		, ns.head
		, ns.box = _('div.b-page-dialog_box')
	);
};




tmpl.img = function (_, pr) {
	var I = _('IMG', { src: pr.src, css: pr.css, width: pr.width, height: pr.height });
	var im = new Image;
	var ev = pr.onload;

	function load(e) {
		if (im.onload) {
			im.onload = null;
			im.onerror = null;
		};

		if (typeof ev == 'function') {
			setTimeout(function () { ev.call(I, e || false) }, 30); // таймаут важен
		};
	};

	if (pr.src || load()) { //
		im.onload = function () { load({ width: im.width, height: im.height }) };
		im.onerror = function () { load() };

		im.src = pr.src;
	};

	return I;
};

