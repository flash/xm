
var tinyMCE_GZ = {loaded: true};
var tinyMCEPreInit = {
	  suffix: '_src'
	, baseURL: 'http://m3.mail-test.rambler.ru/js/tiny_mce'
	, query: false
	};



elems.compose_editor = rr.new_class({
	src_wysiwyg: 'http://m3.mail-test.rambler.ru/js/tiny_mce/tiny_mce_src.js',

	interface: true,
	constructor: function(_, pr){
		var ui = this, ns = new tmpl.compose_editor(_, pr); //_.tmpl(tmpl.page_compose);

		ui.nodes = ns;
		ui.node = ns.node;

		},

	init_events: function(ui) {
		},

	prototype: {
		mode_wysiwyg: false,

		on_connect: function() {
			var ui = this;

			if (this.is_connected) {
				setTimeout(function() {
					ui.set_wysiwyg(true);
					}, 50);
				};
			},

		set_wysiwyg: function(v) {
			var ui = this;

			if (!v) {
				// закрываем wysiwyg
				if (ui.mode_wysiwyg) {
					ui.mode_wysiwyg = false;
					};

				return
				};


			if (ui.mode_wysiwyg) return; // уже открыто или идет загрузка
			ui.mode_wysiwyg = 'loading';

			ui.interface.load_wysiwyg(ui, function() {
				if (ui.mode_wysiwyg == 'loading') {
					ui.interface.init_wysiwyg(ui);
					ui.mode_wysiwyg = true;
					};
				});
			}
		},

	ready_wysiwyg: false,
	load_wysiwyg_cbList: [],

	load_wysiwyg: function(ui, cb) {
		var st = this.ready_wysiwyg, a = this.load_wysiwyg_cbList;
		if (window.tinymce && tinymce.dom) {
			tinymce.dom.Event.domLoaded = true;
			this.ready_wysiwyg = true;

			if (typeof cb == 'function') cb();
			return true;
			};

		if (st === true) {
			if (typeof cb == 'function') cb();
			return true;
			};

		if (typeof cb == 'function') a.push(cb);

		if (st) return;
		this.ready_wysiwyg = 'loading';

		rr.appendScript(this.src_wysiwyg, {
			rm: true,
			event: function(src, status) {
				tinymce.dom.Event.domLoaded = true;


				ui.interface.ready_wysiwyg = true;
				for(var i = 0, x; x = a[i++];) x();
				a.length = 0;
				}
			});
		},

	__id_textarea_: 1,
	init_wysiwyg: function(ui) {
		var id = '__init_wysiwyg_mce-'+(this.__id_textarea_++);
		ui.nodes.textarea_html.id = id;


		tinyMCE.init({ mode : "exact"
			, forced_root_block: "div"
			, elements : id
			, content_css: false // свой css
			, language: false
			//, plugins : "spellchecker"
			, theme : "ramail"

			, setup: function(ed) {
				//styles_include

				ed.onPreInit.add(function() {
					rr.styles_include('wysiwyg_frame:rm_tinymce', ed.getDoc());
					});
				}

			});
		}
	});
