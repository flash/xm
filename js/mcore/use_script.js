var use_host = this.use_host || '';
var use = new function(a) {
	return a={}, function(s) {
		a[s] || document.write('<script type="text/javascript" src="' + (a[s] = use_host + s) + '" /></script>')
	}
};


new function() {
	function attr(n, nm) {
		if (n) return n.getAttributeNode ? (n.getAttributeNode(nm) || false).value : n.getAttribute(nm, 2)
		};

	var s = document.currentScript, a, x, i;
	if (!s) {
		a = document.getElementsByTagName('script')||false;
		for(i=0; s = a[i++];) {
			if (!s.us && attr(s, 'data-host') ){
				s.us = true;
				break;
				}
			};
		};

	if (s) {
		use_host = attr(s, 'data-host') || use_host;
		document.write('<script src="' + attr(s, 'data-src') + '" /></script>');
		}
	};
