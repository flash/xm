/* --  --  --  -- */
rr.ui_draglayer = {
	//rr.extend('rr.ui.draglayer', {
	layer: null,

	isRectangle: false,

	_mouseout: function (n) {
		var t = this;
		n.onmouseout = function (n) {
			if (t.isRectangle) {
				n = n || window.event;
				t.setPoint(n.clientX, n.clientY);
				//n = this.style;
				//n.width = n.htight = '';
				//n.left = n.top = '0';
			};
		};
	},

	show: function (cur) {
		var t = this, n = this.layer, d = rr.document, s;

		if (!n) {
			t.layer = n = d.createElement('div');
			n.style.cssText = "background-color:transparent;position:fixed;left:0px;top:0px;bottom:0px;right:0px;z-index:9999999999;"
				+ (rr.IE ? "_position:absolute;background-image:url('://');" : ""); //about:blank

			d.body.appendChild(n);

			t._mouseout(n);
		};

		s = n.style;

		s.width = s.height = 'auto';
		s.left = s.top = '0';
		t.isRectangle = false;

		if (rr.IE < 7) {
			var dd = (rr.IE < 6) ? d.body : d.documentElement,
			w = dd.scrollWidth,
			h = Math.max(dd.clientHeight, dd.scrollHeight);

			s.height = h + 'px';
			s.width = w + 'px';
		};

		s.cursor = (typeof cur == 'string') ? cur : 'default';

		s.display = "block";
		//n.offsetHeight;

		return n;
	},

	hide: function () {
		var nd = this.layer;
		if (nd) nd.style.display = 'none';
		this.isRectangle = false;
	},

	hidden: function (x) {
		var nd = this.layer;
		if (nd) nd.style.display = x ? 'none' : '';
	},

	setPoint: function (x, y) {
		var nd = this.layer;
		if (!nd) return;
		this.isRectangle = true;

		nd.style.left = (x - 60) + "px";
		nd.style.top = (y - 60) + "px";

		nd.style.width = nd.style.height = '120px';
	}
};




if (rr.IE < 7) {
	window.pageYOffset = 0;
	window.pageOffsetH = 0;
	document.documentElement.firstChild.style.setExpression("__", "pageYOffset=document." + (rr.qIE ? "body" : "documentElement") + ".scrollTop,null"); //ie6ScrollTop
	rr.addHandler(window, 'resize', function () {
		window.pageOffsetH = document[(rr.qIE ? "body" : "documentElement")].offsetHeight
	})()

	rr.ui_posIEfixed = function (nd) {
		var y = window.pageYOffset, d = nd._ptop;
		if (d !== y) {
			nd._ptop = y;
			if (d || d === 0) {
				if (d = y - d) nd.style.top = ((parseInt(nd.currentStyle.top) || 0) + d) + 'px';
			};
		};
	};
};



//rr.extend(rr.ns('rr.listeners_drag'), {
rr.listeners_drag = {
	createDrag: function (as, gEvent) {
		var od = as[0], d = od.owerDocument || rr.document;

		od.document = d;
		if (od.clearRange) {
			rr.IE < 9 ? d.focus() : d.defaultView.getSelection().removeAllRanges();
		};

		if (rr.IE) {
			od._onselectstart = d.onselectstart;
			d.onselectstart = rr.breakEvent;
		};


		if (!gEvent) gEvent = this.gEvent || new rr.class_listHandler();

		d = rr.document;

		var t = this,
		    dE = rr.WebKit || rr.qIE ? d.body : d.documentElement,
		    nameEv = od.eventName || 'move',
		    chw = rr.getClientWH(d),
		    isDrag, d;

		if (!od.draglayer) od.draglayer = rr.ui_draglayer;

		od.psX = od.stX;
		od.psY = od.stY;
		od.sT = chw.st;
		od.sL = chw.sl;

		chw.mh = chw.h - 50;
		od.clientSize = chw;

		if (!od.itime && od.itime !== null) od.itime = rr.Opera ? 7 : 25;

		function scroll(e) {
			var sT = dE.scrollTop,
			    sL = dE.scrollLeft;

			if (sT != od.sT || sL != od.sL) {
				od.sT = sT;
				od.sL = sL;

				od.psX = od.cX + (od.isPosFixed ? 0 : sL);
				od.psY = od.cY + (od.isPosFixed ? 0 : sT);

				moveSet();
			};
		};


		function vset(e) {
			if (rr.IE && e) e.returnValue = false;
			var cX = e.clientX, cY = e.clientY, st, ds = 20;

			if (od.autoScroll) {
				if (chw.mh < cY) {
					var sT = dE.scrollTop;

					st = sT + chw.h + ds;
					if (st > chw.sh) {
						dE.scrollTop = chw.sh - chw.h;
					} else dE.scrollTop += ds;

					od.sT = dE.scrollTop;
				} else if (od.sT && cY < 30) {
					dE.scrollTop -= ds;
					od.sT = dE.scrollTop;
				};
			};

			if (od.isFromPoint && !(rr.IE || rr.Gecko)) {
				od.pgX = e.pageX;
				od.pgY = e.pageY;
			};

			od.cX = cX;
			od.cY = cY;

			od.psX = cX + (od.isPosFixed ? 0 : od.sL);
			od.psY = cY + (od.isPosFixed ? 0 : od.sT);

			od.ctrlKey = e.ctrlKey;
			od.altKey = e.altKey;
			od.shiftKey = e.shiftKey;
		};


		function move(e) {
			vset(e);

			if (od.itime !== null) {
				if (!od._timerr) {
					od._timerr = setTimeout(moveSet_tm, od.itime);
				};
			} else moveSet();


			if (od.isFromPoint) {
				clearTimeout(od._tm_dfr2);
				od._tm_dfr2 = setTimeout(move_drag, 30); // pause move

				if (!od._tm_dfr) {
					od._tm_dfr = setTimeout(move_drag, 250);
				};
			};

			return false;
		};

		function moveSet_tm() {
			if (!od) return;
			od._timerr = null;

			if (od.isFromPoint && !rr.IE && od.draglayer) {
				od.draglayer.setPoint(od.cX, od.cY);
			};

			t.initEvent_(nameEv, as);
		};


		function moveSet() {
			if (od.isFromPoint && !rr.IE && od.draglayer) {
				od.draglayer.setPoint(od.cX, od.cY);
			};

			t.initEvent_(nameEv, as);
		};

		function move_drag(end) {
			if (!od) return;

			clearTimeout(od._tm_dfr2);
			clearTimeout(od._tm_dfr);
			od._tm_dfr = null;

			if (t.initEvent_(nameEv + '_dragbefore', as) === false) return;

			if (od.itime !== null && od._timerr) {
				clearTimeout(od._timerr);
				od._timerr = null;

				t.initEvent_(nameEv, as);
			};

			var os = od.object && od.object.style,
			    x = rr.IE || rr.Gecko ? od.cX : od.pgX,
			    y = rr.IE || rr.Gecko ? od.cY : od.pgY;

			if (os) os.display = 'none';
			if (od.draglayer) od.draglayer.hidden(true);

			var elm = d.elementFromPoint(x, y);

			if (os) os.display = '';
			if (od.draglayer) od.draglayer.hidden(false);


			if (elm) { // && elm != od.dragTargetElement
				if (elm.nodeType !== 1) elm = elm.parentNode;
				od.dragTargetElement = elm;
				t.initEvent_(nameEv + '_drag', as);
			};
			od.object.offsetHeight;
		};

		function end_dragTarget() {
			if (t.initEvent_(nameEv + '_dragbefore', as) === false) return;

			var os = od.object && od.object.style,
			    x = rr.IE || rr.Gecko ? od.cX : od.pgX,
			    y = rr.IE || rr.Gecko ? od.cY : od.pgY;

			if (os) os.display = 'none';
			var elm = d.elementFromPoint(x, y);
			if (os) os.display = '';

			if (elm) {
				od.dragTargetElement = elm;
				t.initEvent_(nameEv + '_drag', as);
			};
		};

		function setupStart() {
			gEvent.removeAll(od);
			isDrag = true;

			gEvent.add(d, 'mouseup', moveStop, od); // end drag

			gEvent.add(d, 'mousemove', move, od); // move drag
			gEvent.add(d.parentWindow || d.defaultView, 'scroll', scroll, od); // move drag

			if (od.draglayer) od.draglayer.show(od.cursor);
			//od.clientSize = chw;

			t.initEvent_(nameEv + '_dragstart', as);
			t.initEvent_(nameEv + '_dragstartafter', as);
		};

		function moveStop(e) {
			rr.breakEvent(e);

			gEvent.removeAll(od);
			if (od.draglayer) od.draglayer.hide();

			if (rr.IE) od.document.onselectstart = od._onselectstart;

			if (isDrag) {
				clearTimeout(od._tm_dfr2);
				clearTimeout(od._tm_dfr);
				clearTimeout(od._timerr);
				clearTimeout(od._tm_draglayer);

				vset(e);

				if (od.isFromPoint || od._tm_dfr) end_dragTarget();

				t.initEvent_(nameEv, as);
				t.initEvent_(nameEv + '_dragend', as);
			};

			t.initEvent_(nameEv + '_end', as);

			od = t = dE = gEvent = null;
		};


		gEvent.add(d, 'mouseup', moveStop, od); // end drag
		if (!od.deltaDrag) {
			setupStart();
			od.draglayer.show(od.cursor, true);
			return;
		};

		gEvent.add(d, 'mousemove', function (e) {
			vset(e);
			if (od.deltaDrag && Math.max(Math.abs(od.psX - od.stX), Math.abs(od.psY - od.stY)) < od.deltaDrag) return;

			setupStart();
			moveSet();
		}, od); // start drag


		if (od.overDrag) {
			gEvent.add(d, 'mouseout', function (e) {
				vset(e);
				setupStart();
			}, od);
		};
	},

	startDrag: function (a1) { //rr.listeners_drag.moveStart =
		var pr = a1, doc = pr.ownerDocument || pr.document || rr.document,
		    e = pr.mouseEvent || pr.event,
		    dB = doc.body, dE = doc.documentElement,
		    aus = pr.autoScroll, u;

		if (!e || (typeof e.which === 'number' ? e.which !== 1 : e.button !== 1)) return;



		function isNum(vl) {
			return typeof vl == 'number' ? vl : null;
		};

		//var itm = typeof pr.itime != 'undefined' ? pr.itime : rr.Opera ? null : rr.WebKit ? 10 : 30;
		var itm = typeof pr.itime != 'undefined' ? pr.itime : rr.IE ? 30 : null;
		//itm = null;

		var od = {
			eventName: pr.name || 'move',
			object: pr.object,

			itime: itm,
			cursor: pr.cursor || rr.getCStyle(e.target || e.srcElement, null).cursor || "default",
			isFromPoint: pr.isFromPoint,
			autoScroll: typeof aus == 'undefined' ? true : !!aus,
			clearRange: !!pr.clearRange,

			ctrlKey: e.ctrlKey,
			altKey: e.altKey,
			shiftKey: e.shiftKey,

			//draglayer: rr.ui.draglayer,
			isPosFixed: !!pr.isPosFixed,

			cX: e.clientX,
			cY: e.clientY,

			stX: pr.startX || (e.clientX + (pr.isPosFixed ? 0 : (dB.scrollLeft || dE.scrollLeft))),
			stY: pr.startY || (e.clientY + (pr.isPosFixed ? 0 : (dB.scrollTop || dE.scrollTop))),

			multiplierX: isNum(pr.multiplierX),
			multiplierY: isNum(pr.multiplierY),
			fxCursor: pr.fxCursor || false,
			deltaDrag: isNum(pr.deltaDrag) || false,
			overDrag: pr.overDrag !== u ? !!pr.overDrag : true,

			minTop: isNum(pr.minTop),
			maxTop: isNum(pr.maxTop),
			minLeft: isNum(pr.minLeft),
			maxLeft: isNum(pr.maxLeft)
		};

		arguments[0] = od;
		this.initEvent('createDrag', arguments, pr.gEvent);
	},

	move_dragstartafter: function (od) {
		if (!od.object) return;

		var os = od.object.style;
		od.left = rr.getPx(os.left);
		od.right = rr.getPx(os.right);
		od.top = rr.getPx(os.top);
		od.bottom = rr.getPx(os.bottom);

		if (od.left === null) od.left = od.object.offsetLeft;
		if (od.top === null) od.top = od.object.offsetTop;

		os.left = (od.left || 0) + "px";
		os.top = (od.top || 0) + "px";
	},

	move: function (od) {
		if (!od.object) return;

		var dX = od.stX - od.psX,
		    dY = od.stY - od.psY,
		    oStl = od.object.style,
		    newPos, nLeft, nTop;

		od.deltaX = Math.round(dX * (od.multiplierX || 1));
		od.deltaY = Math.round(dY * (od.multiplierY || 1));

		if (!oStl) return;

		if (!od.stopHor)
			if (od.left != null) {
				newPos = od.left - od.deltaX;
				if (od.minLeft != null && newPos < od.minLeft) {
					newPos = od.minLeft;
					if (od.fxCursor) {
						od.stX = od.psX;
						od.left = newPos;
					};

				} else if (od.maxLeft != null && newPos > od.maxLeft) {
					newPos = od.maxLeft;
					if (od.fxCursor) {
						od.stX = od.psX;
						od.left = newPos;
					};
				};

				//oStl.left = newPos + "px";
				nLeft = newPos + "px";


			} else if (od.right != null) {
				newPos = od.right + od.deltaX;
				oStl.right = newPos + "px";
			};


		if (!od.stopVert)
			if (od.top != null) {
				newPos = od.top - od.deltaY;
				if (od.minTop != null && newPos < od.minTop) {
					newPos = od.minTop;
					if (od.fxCursor) {
						od.stY = od.psY;
						od.top = newPos;
					};

				} else if (od.maxTop != null && newPos > od.maxTop) {
					newPos = od.maxTop;
					if (od.fxCursor) {
						od.stY = od.psY;
						od.top = newPos;
					}
				};

				nTop = newPos + "px";
			} else if (od.bottom != null) {
				newPos = od.bottom + od.deltaY;
				oStl.bottom = newPos + "px";
			};

		if (rr.Gecko) {
			var x = nLeft ? (nTop ? 'left:' + nLeft + ';top:' + nTop : 'left:' + nLeft) : ';top:' + nTop
			if (x) oStl.cssText += x;
		}
		else {
			if (nLeft) oStl.left = nLeft;
			if (nTop) oStl.top = nTop;
		};

		/*

		//if (nLeft) oStl.left = nLeft;
		//if (nTop) oStl.top = nTop;
		(function() {
		//var x = nLeft ? (nTop ? 'left:'+nLeft+';top:'+nTop : 'left:'+nLeft) : ';top:'+nTop
		//if (x) oStl.cssText += ';'+x;
		if (nLeft) oStl.left = nLeft;
		if (nTop) oStl.top = nTop;
		})()
		*/
		//if (od.itime !== null && (rr.IE || rr.Gecko) && od.object) od.object.offsetWidth;
	}
};


rr.extendNS(null, 'rr.ui.class_drag', function (pr) {
	var obj = function (name, e) {
		var t = arguments.callee;
		return typeof name == 'string' ? t.initEvent(name, e) : t.initEvent('startMove', name);
	};

	rr.extend(obj, rr.expansion_event).addEvent(rr.listeners_drag);
	obj.addEvent(pr);

	return obj;
});
