// http://fmarcia.info/jsmin/jsmin.js
String.prototype.has = function (c) { return this.indexOf(c) > -1; }; function jsmin(comment, input, level) { if (input === undefined) { input = comment; comment = ''; level = 2; } else if (level === undefined || level < 1 || level > 3) { level = 2; } if (comment.length > 0) { comment += '\n'; } var a = '', b = '', EOF = -1, LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', DIGITS = '0123456789', ALNUM = LETTERS + DIGITS + '_$\\', theLookahead = EOF; function isAlphanum(c) { return c != EOF && (ALNUM.has(c) || c.charCodeAt(0) > 126); } var iChar = 0, lInput = input.length; function getc() { var c = theLookahead; if (iChar == lInput) { return EOF; } theLookahead = EOF; if (c == EOF) { c = input.charAt(iChar); ++iChar; } if (c >= ' ' || c == '\n') { return c; } if (c == '\r') { return '\n'; } return ' '; } function getcIC() { var c = theLookahead; if (iChar == lInput) { return EOF; } theLookahead = EOF; if (c == EOF) { c = input.charAt(iChar); ++iChar; } if (c >= ' ' || c == '\n' || c == '\r') { return c; } return ' '; } function peek() { theLookahead = getc(); return theLookahead; } function next() { var c = getc(); if (c == '/') { switch (peek()) { case '/': for (; ; ) { c = getc(); if (c <= '\n') { return c; } } break; case '*': getc(); if (peek() == '!') { getc(); var d = '/*!'; for (; ; ) { c = getcIC(); switch (c) { case '*': if (peek() == '/') { getc(); return d + '*/'; } break; case EOF: throw 'Error: Unterminated comment.'; default: d += c; } } } else { for (; ; ) { switch (getc()) { case '*': if (peek() == '/') { getc(); return ' '; } break; case EOF: throw 'Error: Unterminated comment.'; } } } break; default: return c; } } return c; } function action(d) { var r = []; if (d == 1) { r.push(a); } if (d < 3) { a = b; if (a == '\'' || a == '"') { for (; ; ) { r.push(a); a = getc(); if (a == b) { break; } if (a <= '\n') { throw 'Error: unterminated string literal: ' + a; } if (a == '\\') { r.push(a); a = getc(); } } } } b = next(); if (b == '/' && '(,=:[!&|'.has(a)) { r.push(a); r.push(b); for (; ; ) { a = getc(); if (a == '/') { break; } else if (a == '\\') { r.push(a); a = getc(); } else if (a <= '\n') { throw 'Error: unterminated Regular Expression literal'; } r.push(a); } b = next(); } return r.join(''); } function m() { var r = []; a = '\n'; r.push(action(3)); while (a != EOF) { switch (a) { case ' ': if (isAlphanum(b)) { r.push(action(1)); } else { r.push(action(2)); } break; case '\n': switch (b) { case '{': case '[': case '(': case '+': case '-': r.push(action(1)); break; case ' ': r.push(action(3)); break; default: if (isAlphanum(b)) { r.push(action(1)); } else { if (level == 1 && b != '\n') { r.push(action(1)); } else { r.push(action(2)); } } } break; default: switch (b) { case ' ': if (isAlphanum(a)) { r.push(action(1)); break; } r.push(action(3)); break; case '\n': if (level == 1 && a != '\n') { r.push(action(1)); } else { switch (a) { case '}': case ']': case ')': case '+': case '-': case '"': case '\'': if (level == 3) { r.push(action(3)); } else { r.push(action(1)); } break; default: if (isAlphanum(a)) { r.push(action(1)); } else { r.push(action(3)); } } } break; default: r.push(action(1)); break; } } } return r.join(''); } jsmin.oldSize = input.length; ret = m(input); jsmin.newSize = ret.length; return comment + ret; }

// use
var use_host = this.use_host || '';
var use_debug = parseInt(+this.use_debug, 10) || false;
var use_escape = this.use_escape || false;

var use = new function() {
	var LD = {}, LIST = [], tm_load, is_start, is_loaded;
	//window.__list = LIST;

	window.onload = function() {
		if (is_start) return
		is_start = true;

		new function() {
			var d = document, n = d.createElement('textarea');
			n.setAttribute("spellcheck", "false");
			n.setAttribute("autocomplete", "off");


			n.style.cssText = "border:3px solid #000000;height:36em;width:100%;z-index:10000;";
			n.id = "textarea";
			n.value = "";
			d.body.appendChild(n);

			n = d.createElement('h1')
			n.id = "info";
			d.body.appendChild(n);
		};

		evload();
	};

	return function(src) { return use(src, LIST) };

	function use(src, listSource) {
		if (LD[src]) return; else LD[src] = true;

		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
		, source = { src: src, is_list: /[^?]+\.use\.js($|\?)/.test(src) }
		;

		listSource.push(source);


		xhr.open("GET", use_host + src, true);
		xhr.onreadystatechange = function() {
			var status = xhr.readyState === 4 ? xhr.status : null, text, date, x;
			if (!status) return;

			if (status != 200) {
				source.complite = true;
				source.error = true;
				evload();
				return;

			};

			source.LM = !xhr.getAllResponseHeaders ? null : ((xhr.getAllResponseHeaders() + '').match(/Last-Modified: ([^\n]+)/) || false)[1];

			if (source.is_list) {
				var fn;
				try { fn = new Function("use", xhr.responseText) } catch (e) { }

				if (!fn) {
					source.error = true;
					return;
				};

				source.list = [];

				var x = {
					use_host: use_host,
					use: function(src) {
						use(src, source.list)
					}
				};

				//try { } catch (e) { }
				fn.call(x, x.use);

				source.active = true;
				evload();

				return;
			};


			source.text = xhr.responseText;
			source.complite = true;

			evload();
		};

		xhr.send(null);
	};


	function evload() {
		if (is_start) {
			clearTimeout(tm_load);
			tm_load = setTimeout(test, 200);
		};
	};

	function test() {
		if (is_loaded || !test_list(LIST)) return;
		is_loaded = true;

		compile()
	};

	function test_list(list) {
		var l = list.length, i = 0, x;

		for (; i < l; i++) {
			x = list[i] || false;

			if (x.is_list) {
				x.complite = x.active ? test_list(x.list) : false;
			};

			if (!x.complite) {
				return false;
			};
		};

		return true;
	};

	function compile() {
		//('/* BUILD DATE: ' + (new Date()).toUTCString() + '*/\n\n') + 
		var C = [], L = [], E = []
		, code = compile_list(LIST, C, L, E).join('\n')
		, x
		;

		if (use_escape) {
			code = code.replace(/[\u0080-\uFFFF]/g, function(x) {
				x = x.charCodeAt(0).toString(16).toUpperCase();
				switch (x.length) {
					case 1: return "\\x0" + x;
					case 2: return "\\x" + x;
					case 3: return "\\u0" + x;
					default: return "\\u" + x;
				};
			});
		};

		code = code.replace(/};(?=\n[})])/g, "}")
			.replace(/\);(?=\n})/g, ")")
			.replace(/\)\n(?=[\)\}])/g, ")")
			.replace(/\}\n(?=[\)\}])/g, "}")
			;

		if (use_debug) {
			code = "var dg,dg2; //debug var\n\n"
				+ code.replace(/fu[n]ction\s*[\w]*\([^\(\)]*\)\s*{(?!t[h]row)(?!})/g, function(x) {
					return x + "if(dg!==" + use_debug + ")dg2=dg,dg=" + (use_debug++) + ";"
				})
		};



		x = ('/* BUILD DATE: ' + (new Date()).toUTCString() + '*/\n\n')
			+ (E[0] ? E.join('\n') + '\n\n\n\n\n\n\n\n\n' : '')
			+ code;

		document.getElementById('textarea').value = x;
		document.getElementById('info').innerHTML = x.length + "b";

	};

	function compile_list(list, C, L, E) {
		var l = list.length, i = 0, url, code, x;
		var nullText = '  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -';

		for (; i < l; i++) {
			x = list[i];

			if (x.error) {
				lu = x.src.length;
				E.push('/* ERROR: ' + x.src + '  */');
				continue;
			};

			if (x.is_list) {
				compile_list(x.list, C, L, E);
				continue;
			};

			if (x.text) {
				C.push('\n/* URL: ' + x.src + ' */\n' + jsmin("", x.text, 1));
			};
		};

		return C;
	};
};

