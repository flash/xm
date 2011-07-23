
elems.sidebar_folders = rr.new_class({
	interface: true,

	constructor: function(_, p) {
		this.master = _.clone();

		this.nodes = _.tmpl('tmpl:sidebar_folders', {
			data_folders: this.interface.param_folders(p.data_folders)
			});

		this.node = this.nodes.node;
		},

	prototype: {
		nodeType: -1,

		on_connect_before: function() {
			this.refresh();
			},

		refresh: function(date) {
			/*
			var ns = this.master('tmpl:sidebar_folders', {
				});
				*/
			}
		},

	param_folders: function(sdate, active_folder) {
		var um = [], rh = {user_folders: um};

		rr.each(sdate, function(v) {
			var nm = v.folder||'';

			var x = {
				active: active_folder == nm,
				messages: +v.messages||0,
				oldest: +v.oldest||0,
				folder: v.folder,
				folder_name: nm.substr(nm.indexOf('/')+1),
				folder_utf7: v['folder.utf7'],
				uidvalidity: v.uidvalidity,
				uidnext: v.uidnext,
				recent: +v.recent||0,
				unseen: +v.unseen||0
				};

			switch(x.folder_name) {
				case 'INBOX': case 'SentBox': case 'DraftBox': case 'Trash':
					rh['data '+ x.folder_name] = x;
					break;
				default:
					um.push(x);
				};
			});

		return rh;
		}

	});


elems.folder_mail = function(_, pr) {
	};


