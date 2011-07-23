rr.class_baseElement = rr.new_class({
	interface: 'base_interface',
	constructor: function (_, pr, cfg) {
		var x = this, it = this.interface;

		if (it && !it._nodeLink && it._nodeLink !== false) {
			it._nodeLink = true;
		};

		x.ownerDocument = _.document;
		x.gEvent = new rr.class_listHandler();
		x._changes = {};

		if (it._param_default || it._param_events) {
			this.base_interface.set_param(x, pr, _ || false, cfg || false)
		};
	},

	prototype: rr.extend({}, rr.expansion_event, {
		z_resize: true,
		nodeType: -1,
		is_connected: false, // подключен ли к document_has

		set: function (pr, vl, rs) {
			if (!pr || !this.interface.set) return;
			var ui = this, it = this.interface, ch = ui._changes || (ui._changes = {}), vs = ui, u, pv, v, i;


			switch (typeof pr) {
				case 'string': case 'number':
					if (vl !== u && vl !== (pv = vs[pr])) {
						v = it.set(ui, pr, vl, pv);
						if (v !== u && v !== pv) {
							vs[pr] = v;
							ch[pr] = true;


							if (rs !== false) {
								this._changes = {};
								if (this.interface.refresh(this, ch) === false)
									this._changes = ch;
							};
							return;
						};
					};
					break;

				case 'object':
					for (i in pr) {
						v = pr[i];
						if (v !== u && v !== (pv = vs[i])) {
							v = it.set(ui, i, v, pv);

							if (v !== u && v !== pv) {
								vs[i] = v;
								ch[i] = true;
							};
						};
					};

					rs = vl;
					break;

				default: return;
			};

			if (rs !== false) for (i in ch) {
				this._changes = {};
				if (this.interface.refresh(this, ch) === false)
					this._changes = ch;
				return;
			};
		},

		refresh: function (rz, ch) {   
			ch = this._changes;
			this._changes = {}; 

			if (this.interface.refresh(this, ch, rz) === false) {
				this._changes = ch;
			};
		},

		appendChild: function (ui, box) {
			if (!ui) return;

			var t = this, n = ui.nodeType, x, it;
			if (!n) return;

			if (box !== false) {
				if (!box) box = t.box || t.node;
				x = n < 0 ? ui.node : ui;
				if (x && box) box.appendChild(x);
			};

			if (n < 0 && ui.parent != this) {
				ui.parent = this;

				if (this.is_connected && !ui.is_connected) {
					ui.is_connected = true;

					if (typeof ui.on_connect == 'function') {
						ui.on_connect();
					};
				};

			};

			return ui;
		},



		removeParent: function () { // отключается от родителя
			this.parent = null;

			var x;
			if (x = (this.node || false).parentNode) {
				x.removeChild(this.node);
			};

			if (this.is_connected) {
				this.is_connected = false;

				if (typeof this.on_connect == 'function') {
					this.on_connect();
				};
			};
		},

		removeChild: function (ui) {
			if (!ui) return;
			if (ui.nodeType > 0) {
				return nd.parentNode.removeChild(nd);
			};

			if (ui.parent !== this) {
				return;
			};

			ui.parent = null;

			var x;
			if (x = ui.node && ui.node.parentNode) {
				x.removeChild(ui.node);
			};

			if (ui.is_connected) {
				ui.is_connected = false;

				if (typeof ui.on_connect == 'function') {
					ui.on_connect();
				};
			};

			return ui;
		},

		ev_connect: function (f, rec) {
			var ui, i = 0, it, n, a;

			if (!this.is_connected == !f) return;
			this.is_connected = f = !!f;


			if (typeof this.on_connect == 'function') {
				this.on_connect(f);
			};


			if (!this.node || rec === false) return;

			a = this.node.getElementsByTagName("*");
			while (n = a[i++]) {
				ui = n.rocketui;
				if (ui && !ui.is_connected === f) {
					ui.is_connected = f;

					it = ui.interface;
					if (typeof ui.on_connect == 'function') {
						ui.on_connect(f);
					};
				};
			};
		}
	})

	, set_param: function (x, pr, _, cfg) {
		var it = cfg.interface, list, i, prm, v, u;
		if (prm = it._param_default) {
			for (i in prm) { //if (prm.hasOwnProperty(i))
				if (x[i] !== u) continue;

				v = prm[i];
				if (typeof v == 'function') {
					v = (v === Object || v === Array || v === Date) ? new v() : v.call(x, pr, _, cfg);
				};

				if (v !== u) x[i] = v;
			};
		};

		if (prm = it._param_events) {
			for (i in prm) { // if (prm.hasOwnProperty(i))
				if (typeof (v = prm[i]) == 'function') {
					x.addEvent(i, v);
				};
			};
		};
	}
});
