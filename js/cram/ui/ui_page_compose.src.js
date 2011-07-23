elems.compose_page = rr.new_class({
	parent: rr.class_baseElement,
	interface: true,

	constructor: function(_, pr, cfg) {
		this.interface.parent.call(this, _, pr, cfg);
		this.interface.factory(this, _, pr);

		if (this.node) this.node.rocketui = this;
		//this.set(pr);
		},

	factory: function(ui, _, pr) {
		ui.master = _.clone();


		ui.nodes = _.tmpl('tmpl:compose_page', {
			});

		ui.node = ui.nodes.node;
		ui.box = ui.nodes.box;

		ui.title = ui.nodes.title; // заголовок закладки браузера
		ui.pid = 'compose'; // индификатор группы


		this.init_event(ui);
		},


	prototype: {
		on_connect: function() {
			var ui = this;

			if (ui.display = ui.is_connected) {				ui.nodes.editor.is_connected = true;
				ui.nodes.editor.on_connect();
				};
			}
		},

	init_event: function(ui) {
		}
	});
