rr.styles('tmpl:uPager'
	,'.b-mbox_pager {font-size:0.95em;height:2.5em;line-height:2.5em;padding:0 15px;text-align:center;position:relative;}'
	,'.b-mbox_pager:hover {text-decoration:none;}'

	,'.b-mbox_pager-next, .b-mbox_pager-prev {color:#666666;position:absolute;cursor:default;}'
	,'a.b-mbox_pager-next, a.b-mbox_pager-prev {color:#666666;text-decoration:none;cursor:pointer;}'
	,'.b-mbox_pager-next {right:15px;}'
	,'.b-mbox_pager-prev {left:15px;}'

	,'.b-mbox_pager-text {font-weight:bold;}'

	,'.b-mbox_pager-key {display:inline;font-size:70%;}'
	,'.b-mbox_pager-arr {font-size:150%;}'

	,'.b-mbox_pager-box {background-color:#FFFFFF;padding:0.2em 1ex;position:relative;}'
	,'.b-mbox_pager-page {border:1px solid #9ECBE2;text-decoration:none;background-color:#FFFFFF;color:#000;padding:0.25em 0.6em;margin:0 2px;}'
	,'a.b-mbox_pager-page {color:#466777;}'
	,'span.b-mbox_pager-page {background-color:#9ECBE2;font-weight:bold;cursor:default;}'
	,'a.b-mbox_pager-page:hover {background-color:#C1DDEC;color:#2A3D47;}'
	);



tmpl.uPager = function(_, pr) {
	var ns = this;

	ns.node = _('div.b-mbox_pager', {css: pr.css}
		, _((pr.next_page ? 'a' : 'span')
			, {
				css: 'b-mbox_pager-next no_underline',
				title: (pr.next_page ? "Перейти на следующую страницу":''),
				href: (pr.url_mask ? rr.printx(pr.url_mask, pr.num+1) : '#/p'+(pr.num+1))
				}

			, _('span.b-mbox_pager-text underline', "Следующая")
			, _('span.b-mbox_pager-key'
				, ' Ctrl '
				, _('span.b-mbox_pager-arr'
					, '\u2192' //'→'
					)
				)

			)


		, _((pr.prev_page ? 'a' : 'span')
			, {
				css: 'b-mbox_pager-prev no_underline',
				title: (pr.prev_page ? "Перейти на предыдущую страницу":''),
				href: (pr.url_mask ? rr.printx(pr.url_mask, pr.num-1) : '#/p'+(pr.num-1))
				}

			, _('span.b-mbox_pager-key'
				, _('span.b-mbox_pager-arr'
					, '\u2190' //'←'
					)
				, ' Ctrl '
				)
			, _('span.b-mbox_pager-text underline'
				, "Следующая"
				)
			)


		, _('span.b-mbox_pager-box'
			, rr.map(pr.pages, function(v) {
				if (v.is_selected) {
					return _('span.b-mbox_pager-page b-mbox_pager-page--selected', {title: "Текущая страница", text: v.num})
					};

				return _('a.b-mbox_pager-page no_underline'
					, {
						href: pr.url_mask ? rr.printx(pr.url_mask, v.num) : '#/p'+v.num,
						title: rr.printx("Перейти на страницу %s", v.num),
						text: (v.is_skip?'...':v.num)
						}
					);
				})
			)
		)
	};

