/*
obj_page = {
	node: DOMElemnt,
	sidebar: DOMElemnt || string,
	}
e.hash
*/

/*
	подключение страницы. старая страница при этом отключается.

	param {object} page // обьект страницы
	param {htmlElement} page.node
	param {string|object} page.sidebar // какой сайтбар отображать для стрницы
	*/

cram.get_mainframe = function() {
	if (!this.mainframe) {
		this.mainframe = masterElement('ui:mainframe', false);

		var pageName;
		this.addEvent('page_connectBefore', function(e) {
			var x = (e.page||false).NAME, menu = this.mainframe.nodes.topmenu;

			if (x !== pageName) {
				pageName = x;

				rr.css_set('b-topmenu-item--active', menu.item_contacts.node, x == 'contacts');
				rr.css_set('b-topmenu-item--active', menu.item_reader.node, x == 'reader');
				};

			});
		};

	return this.mainframe;
	};

new function() {
	var __page_connect_;

	cram.page_connect_ = function(e, page) {
		return cram.page_connect(page, e);
		};

	cram.page_connect = function(page, e) {
		if (!page) return;

		if (!rr.domReady.status) {
			var x = !!__page_connect_;
			__page_connect_ = {page: page, e: e};

			if (!x) {
				rr.domReady(function(x) {
					if (x = __page_connect_) {
						cram.page_connect(x.page, x.e)
						};
					});
				};
			return;
			};

		__page_connect_ = null;


		e = e||false;

		var d = document, mainframe = this.get_mainframe(), sbar, re, x;
		var connect_page = false, connect_sidebar = false;

		this.initEvent('page_connectBefore', {
			page: page,
			event: e
			});

		d.title = (page.title || e.title || "Почта") + " \u2014 "+(window._user||false).email; //—


		if (typeof page.on_connect_before == 'function') {
			page.on_connect_before();
			};

		/* подключение страничку */
		if (mainframe.page !== page) {
			if (x = mainframe.page) {
				rr.removeNode(x.node||x);
				x.is_connected = false;

				if (typeof x.on_connect == 'function') {
					x.on_connect(false);
					};
				};

			mainframe.page = this.activePage = page;

			if (page.node.parentNode != mainframe.box) {
				mainframe.box.appendChild(page.node);
				connect_page = true;
				};
			};


		/* подключение сайтбара */
		sbar = page.sidebar;
		if (!sbar || !(sbar.nodeType < 0)) {
			sbar = null;
			//sbar = this.sidebar_mailbox || (this.sidebar_mailbox = masterElement('ui:sidebar_mailbox', false)); // по умолчанию
			};


		if (mainframe.sidebar !== sbar) {
			if (x = mainframe.sidebar) { // удаляем старый
				rr.removeNode(x.node||x);

				x.is_connected = false;
				if (typeof x.on_connect == 'function') {
					x.on_connect();
					};
				};

			if (mainframe.sidebar = sbar || null) { // добавляем новый
				mainframe.sidebar_box.appendChild(sbar.node||sbar);
				connect_sidebar = true;
				};
			};


		if (!mainframe.is_connected && typeof mainframe.connected == 'function') {
			mainframe.connected();
			};


		if (connect_page) {
			//if (!mainframe.is_connected) mainframe.connect();
			page.is_connected = true;
			if (typeof page.on_connect == 'function') {
				page.on_connect(true);
				};
			};

		if (connect_sidebar) {
			//if (!mainframe.is_connected) mainframe.connect();

			sbar.is_connected = true;
			if (typeof sbar.on_connect == 'function') {
				sbar.on_connect(true)
				};
			};

		if (e.scroll !== false) { //&& !e.has_history
			cram.moveScroll(0);
			};



		if (e.autoSetHash && e.hash) {
			// добавляем историю
			if (cram.hash_current != e.hash) {
				cram.hash_current = e.hash;
				cram.history.set(e.hash);
				};
			};

		this.initEvent('page_connect', {
			page: page,
			event: e
			});
		};
	};


/*
cram.addEvent('page_connect', function(e) {
	var nx, ev = e.event||false;

	if (nx = this.sidebar_mailbox) {
		if (ev.handler == 'open_mailbox' || ev.handler == 'open_message') {
			if (typeof nx.set_activeFolder === 'function') {
				nx.set_activeFolder(e.mbox)
				};

			return false;
			};

		if (ev.handler == 'open_contacts' || ev.handler == 'open_compose') {
			nx.set_activeFolder(false)
			};
		};
	});
	*/