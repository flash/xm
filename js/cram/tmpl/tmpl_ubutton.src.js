
rr.styles('tmpl:uToolbar'
	, '.b-utoolbar {text-align:right;white-space:nowrap;position: relative;line-height: 24px;}' //line-height: 26px;
	, '.b-utoolbar-left {float:left;text-align:left;}'
	, '.b-utoolbar-right {display: inline-block;}'
	, '.b-utoolbar-clear {clear: left;display: block;height: 0;overflow: hidden;width: 0;}'
	, '.b-utoolbar .b-ubutton, .b-utoolbar .b-uinput{vertical-align: top;}'


	);


rr.styles('tmpl:uButton'   // высота должна быть 24px
	, '.b-ubutton {line-height:20px !important;overflow:visible;margin:0 3px 0 0;vertical-align:middle;white-space:nowrap;border:1px solid;border-color: #999999 #999999 #888888;background-color:#DCDCDC;cursor:pointer;display:inline-block;text-align:left;'
		+ '-moz-border-radius:2px;;border-radius:2px;'
		+ 'background-position:0;background-repeat:repeat-x;background-repeat:repeat-x;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAhCAYAAAARUmHFAAAALElEQVQokWP8////TAY0wMLAwPALm+AfylT+xCb4j162Ey84pG2nW3gOnO0AZeAjgXbrRFMAAAAASUVORK5CYII=);'
		+ 'background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.6)), to(rgba(200,200,200,0.1)));'
		+ 'background-image:-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(200,200,200,0));'
		+ '-moz-box-shadow:0 1px 2px -1px #FFFFFF inset; -webkit-box-shadow:0 1px 1px #FFFFFF inset; box-shadow:0 1px 1px #FFFFFF inset; -khtml-user-select:none; -moz-user-select:none; user-select: none;'
		//+ 'background: -moz-linear-gradient(center top , #F9F9F9, #E3E3E3) repeat scroll 0 0 transparent;'
		+ (rr.Gecko ? 'padding:1px;' : 'padding:1px 3px;')
		+ '}'

	, '.b-ubutton--g_new {margin-left:3px;}'
	, '.b-ubutton--g_left {margin-right:-1px;' //margin-left:1ex;
		+(rr.Gecko ? '-moz-border-radius-topright: 0;-moz-border-radius-bottomright: 0;'
			: rr.WebKit ? 'margin-right:-3px;-webkit-border-top-right-radius: 0;-webkit-border-bottom-right-radius: 0;'
				: '')
		+'border-top-right-radius: 0;border-bottom-right-radius: 0;}'


	, '.b-ubutton--indentLeft {margin-left:3px;}'
	, '.b-ubutton--indentRight {margin-right:6px;}'

	, '.b-ubutton--first {margin-left:0;margin-right:0;}'
	, '.b-ubutton--firstLeft {margin-left:0;}'
	, '.b-ubutton--firstRight {margin-right:0;}'
	, '.b-ubutton--g_left {margin-right:-1px;}'

	, '.b-ubutton--g_right {'
		+(rr.Gecko ? '-moz-border-radius-topleft: 0;-moz-border-radius-bottomleft: 0;'
			: rr.WebKit ? '-webkit-border-top-left-radius: 0;-webkit-border-bottom-left-radius: 0;'
				: '')
		+'border-top-left-radius: 0;border-bottom-left-radius: 0;}'


	, '.b-ubutton--g_center {margin-right:-1px;-moz-border-radius:0;-webkit-border-radius: 0;border-radius: 0;}'


	, '.b-ubutton-wrap {position: relative;top:0;display:block; pointer-events:none;height:20px;background-position:0 50%;}'
	, rr.Gecko && '.b-ubutton-wrap {margin-top:-1px;margin-bottom:-1px;}'

	, '.b-ubutton-text {display:block;font-size:11px;line-height:20px;overflow: hidden;margin-left: 3px;margin-right:3px;'
		+ (rr.Gecko ? 'margin-left: 2px;margin-right:2px;' : '')
		+ (rr.Gecko >= 2 ? 'line-height:21px;' : '') // тупой лис
		+'}'


	, '.b-ubutton--icon-left .b-ubutton-wrap {margin-left: -2px;}'
	, '.b-ubutton--icon-right .b-ubutton-wrap {margin-right: -2px;background-position:100% 50%;}'
	, '.b-ubutton--icon-only .b-ubutton-wrap {width:20px;background-position: 50% 50%;}'
	, '.b-ubutton--icon-none .b-ubutton-wrap {background-image:none !important;}'


	, '.b-ubutton--icon-left .b-ubutton-text {margin-left: 21px;}'
	, '.b-ubutton--icon-right .b-ubutton-text {margin-right:21px;}'
	, '.b-ubutton--icon-only .b-ubutton-text {display:none;}'


	, '.b-ubutton:hover {border-color:#777;position:relative;box-shadow:0 1px 2px -1px #FFFFFF inset, 0 0 0 2px rgba(70, 169, 232, 0.3)}'
	, '.b-ubutton:focus {position:relative;}' //z-index:1;

	, '.b-ubutton--no_disabled:active, .b-ubutton--active {cursor:pointer;outline:0px solid;border-color:#555;'
		+(rr.Gecko ? '-moz-box-shadow:0 1px 3px -1px #000 inset;background-image:-moz-linear-gradient(top, rgba(0,0,0,0.1), rgba(255,255,255,0));'
			: rr.WebKit ? '-webkit-box-shadow:inset 0 1px 4px #999;background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.1)), to(rgba(255,255,255,0)));'
				: (rr.Opera || rr.IE) ? 'background-position:0;background-repeat:repeat-x;background-repeat:repeat-x;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAhCAYAAAARUmHFAAAAPElEQVQokWNkYGCQYEADLOzs7P8wBDk4ONDFcAhSqJ2Dg+MPNjOJ106k7RSaSU8nYQYISdFBCycNXAoBAPv/DWfGtM53AAAAAElFTkSuQmCC);'
					:'')
		+'box-shadow:inset 0 0 4px #999;}'

	, (rr.Gecko || rr.WebKit || rr.IE>=9) && '.b-ubutton--no_disabled:active .b-ubutton-wrap, .b-ubutton--active .b-ubutton-wrap {top:1px;}'

	, '.b-ubutton--disabled, .b-ubutton--disabled:hover {color:#777;border-color:#999;cursor:default;}'
	, '.b-ubutton--disabled:hover .b-ubutton-text {color:#777;}'
	);



rr.styles('tmpl:uInput' // toolbar input
	, '.b-uinput {font-size:13px;line-height:18px;text-align: left;overflow: hidden;position:relative;width:17em;vertical-align:middle;border:1px solid #999;background-color:#fff;cursor:text;display:inline-block;margin-right:3px;padding:0;' //border-radius: 3px;
		+(rr.Gecko ? 'background-image:-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(255,255,255,0));' //-moz-border-radius:3px;
			: rr.WebKit ? 'background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.4)), to(rgba(255,255,255,0)));' //-webkit-border-radius: 3px;
				: (rr.Opera || (rr.IE>=8)) ? 'background-position:0;background-repeat:repeat-x;background-repeat:repeat-x;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAhCAYAAAARUmHFAAAALElEQVQokWP8////TAY0wMLAwPALm+AfylT+xCb4j162Ey84pG2nW3gOnO0AZeAjgXbrRFMAAAAASUVORK5CYII=);'
					: '')
		+ '}'
	, '.b-uinput:hover {position:relative; z-index:1;box-shadow:0 1px 2px -1px #FFFFFF inset, 0 0 0 2px rgba(70, 169, 232, 0.3)}'

	, '.b-uinput--g_left {margin-right:-1px;border-top-right-radius: 0;border-bottom-right-radius: 0;'
		+(rr.Gecko ? '-moz-border-radius-topright: 0;-moz-border-radius-bottomright: 0;'
			: rr.WebKit ? '-webkit-border-top-right-radius: 0;-webkit-border-bottom-right-radius: 0;'
				: '')
		+'}'

	, '.b-uinput--g_right {border-top-left-radius: 0;border-bottom-left-radius: 0;'
		+(rr.Gecko ? '-moz-border-radius-topleft: 0;-moz-border-radius-bottomleft: 0;'
			: rr.WebKit ? '-webkit-border-top-left-radius: 0;-webkit-border-bottom-left-radius: 0;'
				: '')
		+'}'

	, '.b-uinput--g_center {margin-right:-1px;border-radius: 0;'
		+(rr.Gecko ? '-moz-border-radius:0;'
			: rr.WebKit ? '-webkit-border-radius: 0;'
				: '')
		+'}'


	, '.b-uinput--indentLeft {margin-left:3px;}'
	, '.b-uinput--indentRight {margin-right:6px;}'

	, '.b-uinput--first {margin-left:0;margin-right:0;}'
	, '.b-uinput--firstLeft {margin-left:0;}'
	, '.b-uinput--firstRight {margin-right:0;}'

	, rr.WebKit && '.b-uinput--focus {-webkit-box-shadow:inset 0 0 4px #e49b0f;}'


	, '.b-uinput-cap {display:block;padding:1px 2px;line-height:1px;'
		+(rr.Opera || rr.IE ? 'padding:1px 3px;' : '')
		+'}'

	, '.b-uinput-h {display: inline-block;height: 20px;vertical-align: middle;width:0;}' //background-color:#F00;
	, '.b-uinput-inp {font-size:13px;font-family:\'Lucida Grande CY\',Arial,sans-serif;line-height:1 !important;height:18px;width:100%;text-align:left;background-color:#FFFFFF;'
		+ 'border:0px solid;padding:0;margin:0;vertical-align:middle;-webkit-appearance: none;'
		+ '-webkit-border-radius: 0;-moz-border-radius: 0;border-radius: 0;background-image:none;'
		+ (rr.IE ? 'margin-top: 1px;' : '')
		+ '}'



	, rr.WebKit && '.b-uinput-inp {outline: none;}'
	, rr.IE && '.b-uinput-inp {line-height:1.3 !important;}'


	, '.b-uinput--search_text {width:34%;}'
	, '.b-uinput-help_text {pointer-events:none;font-family:\'Lucida Grande CY\',Arial,sans-serif;color:#777777;line-height: 1px;margin-left:3px;position:absolute;top:50%;'
		+ (rr.Opera || rr.WebKit ? 'margin-top:-1px;' : '')
		+ '}' //
	, '.b-uinput-help_text--hide {display:none;}'

	, '.b-uinput-clear {display:none;background-color:#FF0000;cursor:pointer;height:20px;margin-top:-10px;position:absolute;right:3px;top:50%;width:20px;}'
	, '.b-uinput-clear--active {display:block;}'
	);






tmpl.uToolbar = function(_, pr) {
	var ns = this, u;

	ns.node = _('div.b-utoolbar', {className: pr.css}
		, ns.box = _('div.b-utoolbar-left')
		, ns.right = (pr.right || pr.right===0 ? _('div.b-utoolbar-right', false, pr.right) : u)
		, _('span.b-utoolbar-clear')
		);
	};




/*
param: pr.icon {true|'right'|'only'|null}
param: pr.first {true|false} // флаг что элемент первый для отменя отступа
param: pr.css {string} // css для node
param: pr.css_ico {string} // css для icon
param: pr.tabIndex {number} (default=1)
param: pr.title {string} (default='')
param: pr.text {string} (default='')

param: pr.disabled {true|false}
param: pr.active {true|false}
*/
tmpl.uButton = function(_, pr) {
	var ns = this, gn='';

	//ns.sg_center = 'b-ubutton--g_center';
	//ns.sg_left = 'b-ubutton--g_left';
	//ns.sg_right = 'b-ubutton--g_right';
	//ns.sg_new = 'b-ubutton--g_new';
	ns.s_active = 'b-ubutton--active';
	ns.s_disabled = 'b-ubutton--disabled';
	ns.s_disabled_no = 'b-ubutton--no_disabled';
	ns.s_disabled_icon = 'disabled';

	switch(pr.group) {		case 'center': gn = ' b-ubutton--g_center'; break;		case 'left': gn = ' b-ubutton--g_left'; break;
		case 'right': gn = ' b-ubutton--g_right'; break;
		case 'new': gn = ' b-ubutton--g_new'; break;
		};

	//ns.icon = _('span.b-ubutton-icon'+(pr.css ? ' '+pr.css+'-icon' : ''), {className: pr.css_icon});

	ns.node = ns.button = _('button'
		, {

				type: 'button',
				style: pr.style,
				className: 'b-ubutton b-ubutton--no_disabled' + gn
					+ (pr.icon === 'right' ? ' b-ubutton--icon-right'
						: pr.icon == 'only' ? ' b-ubutton--icon-only'
							: pr.icon ? ' b-ubutton--icon-left'
								: ' b-ubutton--icon-none'
						)
					+ (pr.active ? ' b-ubutton--active' : '')
					+ (!pr.indent ? '' : pr.indent === 'right' ? ' b-ubutton--indentRight' : ' b-ubutton--indentLeft')
					+ (pr.first === 'left' ? ' b-ubutton--firstLeft' : pr.first === 'right' ? ' b-ubutton--firstRight' : pr.first ? ' b-ubutton--first' : '')
					+ (pr.css ? ' '+pr.css : ''),

				tabIndex: pr.tabIndex||1,
				title: pr.title === 0 ? 0 : pr.title||''
				}


		, ns.wrap = _('span.b-ubutton-wrap', {css: pr.css_icon}
			, _('span.b-ubutton-text'
				, ns.text = _.text(pr.text)
				)
			)
		);


	//if (rr.IE<8) ns.node.onselectstart = rr.breakEvent;

	if (rr.Opera) {
		ns.node.addEventListener('mousedown', rr.breakEvent, false);
		ns.node.addEventListener('dblclick', rr.breakEvent, false);
		ns.node.addEventListener('mouseup', ns.node.focus, false);
		//ns.node.onmouseup = ns.node.focus;
		};
	//rr.addHandler(ns.node, 'click', rr.breakEvent);
	};


tmpl.uInput = function(_, pr) {
	var ns = this, gn='', u;

	ns.sg_center = 'b-uinput--g_center';
	ns.sg_left = 'b-uinput--g_left';
	ns.sg_right = 'b-uinput--g_right';
	ns.sg_new = 'b-uinput--g_new';


	switch(pr.group) {
		case 'center': gn = ' b-uinput--g_center'; break;
		case 'left': gn = ' b-uinput--g_left'; break;
		case 'right': gn = ' b-uinput--g_right'; break;
		case 'new': gn = ' b-uinput--g_new'; break;
		};

	if (pr.first) {		gn += pr.first === 'left' ? ' b-uinput--firstLeft' : pr.first === 'right' ? ' b-uinput--firstRight' : pr.first ? ' b-uinput--first' : '';
		};

	if (pr.indent) {		gn += pr.indent === 'right' ? ' b-ubutton--indentRight' : ' b-ubutton--indentLeft';		};


	ns.node = _('label.b-uinput' + gn
		, {
				className: pr.css,
				title: pr.title||''
				}


		, ns.help_text_wr  = _('span.b-uinput-help_text b-uinput-help_text--hide'
			, ns.help_text  = _.text(pr.help || "")
			)

		, _('span.b-uinput-cap'
			, _('span.b-uinput-h')
			, ns.input = _('input.b-uinput-inp'
				, {
					//onscroll: function(){if (!(ns.scrollTo>=0)) ns.scrollTo = this.scrollTop; this.scrollTop = ns.scrollTo},
					tabIndex: pr.tabIndex || 1,
					type:'text',
					value: pr.value||(pr.value!==0?'':0)
					}
				)
			)
		, _('span.b-uinput-clear')
		)
	};


tmpl.uInputSelect = function(_, pr) {
	var ns = this;
	ns.node = _('span.b-tbar-select',
		{
				className: (pr.group == 'center' || pr.group == 'left' || pr.group == 'right' || pr.group == 'new' ? 'b-uinput--g_'+pr.group : '')
					+ (pr.ico?' b-uinput--'+pr.ico:'')
				},

		_('label.b-tbar-select-ip',
			ns.input = _('input.b-uinput-inp',
				{
					tabIndex: pr.tabIndex||1,
					type:'text',
					value: pr.value||(pr.value!==0?'':0)
					}
				)
			),

		_('span.b-tbar-select-bt',
			ns.icon = _('span.b-ubutton-ico'+(pr.ico?' b-ubutton-ico--'+pr.ico:'')),

			_('span.b-tbar-select-text',
				ns.text = _.text(pr.text)
				)
			)
		);
	};


