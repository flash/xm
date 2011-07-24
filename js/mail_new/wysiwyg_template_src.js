

(function() {
	var DOM = tinymce.DOM, _ = masterElement;


	// Tell it to load theme specific language pack(s)
	tinymce.ThemeManager.requireLangPack('ramail');

	tinymce.create('tinymce.themes.ramail', {
		init : function(ed, url) {
			var t = this, s = ed.settings;
			t.editor = ed;

			ed.onInit.add(function() {
				ed.getDoc().body.innerHTML = "<div/>"
				ed.onNodeChange.add(t.nodeChange);
				});
			},

		renderUI : function(o) {
			var t = this, ed = t.editor, cf = ed.controlManager, c, n;


			// Create toolbar
			var tb = t.toolbar = cf.createToolbar("tools1");


			//tb.add(t.cr_fontselect(ed));
			//tb.add(t.cr_fontsize(ed));

			tb.add(cf.createButton('bold', {title : 'simple.bold_desc', cmd : 'Bold'}));
			tb.add(cf.createButton('italic', {title : 'simple.italic_desc', cmd : 'Italic'}));
			tb.add(cf.createButton('underline', {title : 'simple.underline_desc', cmd : 'Underline'}));
			tb.add(cf.createButton('strikethrough', {title : 'simple.striketrough_desc', cmd : 'Strikethrough'}));
			tb.add(cf.createSeparator());

			tb.add(cf.createButton('undo', {title : 'simple.undo_desc', cmd : 'Undo'}));
			tb.add(cf.createButton('redo', {title : 'simple.redo_desc', cmd : 'Redo'}));

			tb.add(cf.createSeparator());
			tb.add(cf.createButton('justifyleft', {title : 'simple.italic_desc', cmd : 'JustifyLeft'}));
			tb.add(cf.createButton('justifycenter', {title : 'simple.italic_desc', cmd : 'JustifyCenter'}));
			tb.add(cf.createButton('justifyright', {title : 'simple.italic_desc', cmd : 'JustifyRight'}));
			tb.add(cf.createButton('justifyfull', {title : 'simple.italic_desc', cmd : 'JustifyFull'}));

			tb.add(cf.createSeparator());
			tb.add(cf.createButton('outdent', {title : 'simple.numlist_desc', cmd : 'Outdent'}));
			tb.add(cf.createButton('indent', {title : 'simple.numlist_desc', cmd : 'Indent'}));
			tb.add(cf.createButton('insertunorderedlist', {title : 'simple.bullist_desc', cmd : 'InsertUnorderedList'}));
			tb.add(cf.createButton('insertorderedlist', {title : 'simple.numlist_desc', cmd : 'InsertOrderedList'}));






			var ns = _('tmpl:tinymce_ramail', {id: ed.id});
			tb.renderTo(ns.box_toolbar);

			DOM.insertAfter(ns.node, o.targetNode);

			return {
				iframeContainer : ns.box,
				editorContainer : ns.node,
				sizeContainer : _.document.createElement('span'),
				deltaHeight : -20
				};
			},

		cr_fontsize: function(ed) {
			var c = ed.controlManager.createListBox('fontsizeselect', {
				title : "Размер",
				onselect : function(v) {
					ed.execCommand('FontSize', false, v);
					c.select(function(sv) {return v == sv});
					return false;
					}
				});

			rr.each(["Мелкий", "Обычный", "Крупный", "Огромный"], function(v, i) {
				var sz =[1, 3, 5, 7][i];
				c.add(v, sz, {'class': "test", style : 'white-space:nowrap;font-size:'+([7, 10, 14, 24][i])+'pt;'});
				});

			return c;
			},

		cr_fontselect: function(ed) {
			var c = ed.controlManager.createListBox('fontselect', {
				title : "Шрифт",

				onselect : function(v, e) {
					var cur = c.items[c.selectedIndex];

					if (!v && cur) {
						ed.execCommand('FontName', false, cur.value);
						return;
						}

					ed.execCommand('FontName', false, v);

					// Fake selection, execCommand will fire a nodeChange and update the selection
					c.select(function(sv) {return sv == v});
					return false; // No auto select
					}
				});

			var fonts = 'Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;Comic Sans MS=comic sans ms,sans-serif;Georgia=georgia,times new roman,times,serif;Tahoma=tahoma,arial,helvetica,sans-serif;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,arial,helvetica,sans-serif';
			rr.each(fonts.split(';'), function(v) {
				v = v.split('=');

				c.add(v[0], v[1], {style : v[1].indexOf('dings') == -1 ? 'white-space:nowrap;font-family:' + v[1] : 'white-space:nowrap;'});
				});

			return c;
			},

		nodeChange: function(ed, cm, n, co, ob) {
			tinymce.each(['Bold', 'Italic', 'Underline', 'Strikethrough', 'InsertUnorderedList', 'InsertOrderedList'], function(c) {
				cm.get(c.toLowerCase()).setActive(ed.queryCommandState(c));
				});

			cm.setDisabled('undo', !ed.undoManager.hasUndo() && !ed.typing);
			cm.setDisabled('redo', !ed.undoManager.hasRedo());


			var c, fn, fz, cl;

			// Find out current fontSize, fontFamily and fontClass
			nodeChange_getParent(ob, function(n) {
				if (n.nodeName === 'SPAN') {
					if (!cl && n.className)
						cl = n.className;

					if (!fz && n.style.fontSize)
						fz = n.style.fontSize;

					if (!fn && n.style.fontFamily)
						fn = n.style.fontFamily.replace(/[\"\']+/g,'').replace(/^([^,]+).*/, '$1').toLowerCase(); //'"
					}

				return false;
				});

			if (c = cm.get('fontselect')) {
				c.select(function(v) {
					return v.replace(/^([^,]+).*/, '$1').toLowerCase() == fn;
					});
				};

			if (c = cm.get('fontsizeselect')) {
				switch (fz) {
					case 'xx-small':fz=1; break;
					case 'x-small':	fz=2; break;
					case 'small':	fz=3; break;
					case 'medium':	fz=4; break;
					case 'large':	fz=5; break;
					case 'x-large':	fz=6; break;
					case 'xx-large':fz=7; break;
					default:
						if (typeof fz == 'string') {
							if (fz.indexOf('px') > 0) {
								fz = parseInt(fz, 10);
								fz = fz < 32 ? fz < 24 ? fz < 18 ? fz < 16 ? fz < 13 ? fz < 10 ? 1:2:3:4:5:6:7;
								}
							else if (fz.indexOf('pt') > 0) {
								fz = parseInt(fz, 10);
								fz = fz < 24 ? fz < 18 ? fz < 14 ? fz < 12 ? fz < 10 ? fz < 8 ? 1:2:3:4:5:6:7;
								};
							}
					};

				c.select(function(v) {
					return v == (fz ? fz==6?7 : fz==4?5 : fz==2?3 : fz : 3);
					});
				};
			},

		getInfo : function() {
			return {longname : 'ramail theme', author : 'rambler mail', authorurl : 'mail.rambler.ru',version : '2'}
			}
		});

	tinymce.ThemeManager.add('ramail', tinymce.themes.ramail);

	function nodeChange_getParent(ob, name) {
		var i, parents = ob.parents, func = name;

		if (typeof(name) == 'string') {
			func = function(node) {
				return node.nodeName == name;
				};
			}

		for (i = 0; i < parents.length; i++) {
			if (func(parents[i]))
				return parents[i];
			}
		};
	})();


