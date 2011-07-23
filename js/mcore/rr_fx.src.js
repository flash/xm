
new function () {

	var __anTrs;
	function gDate() {
		//return (new Date()).getTime();
		return Date.now && Date.now() || (new Date()).getTime();
	};

	rr.transitionsFx = $anTransitions = __anTrs = function (prm, duration, fps) {
		return arguments.callee.create(prm, duration, fps);
	};

	rr.extend(rr.transitionsFx, {
		create: createAnimObj,

		transitions: {
			Linear: function (p) {
				return p;
			},

			Pow: function (p, x) {
				return Math.pow(p, x && x[0] || 6);
			},


			Expo: function (p) {
				return Math.pow(2, 8 * (p - 1));
			},


			Circ: function (p) {
				return 1 - Math.sin(Math.acos(p));
			},


			Sine: function (p) {
				return 1 - Math.sin((1 - p) * Math.PI / 2);
			},


			Back: function (p, x) {
				x = x && x[0] || 1.618;
				return Math.pow(p, 2) * ((x + 1) * p - x);
			},


			Bounce: function (p) {
				var value;
				for (var a = 0, b = 1; 1; a += b, b /= 2) {
					if (p >= (7 - 4 * a) / 11) {
						value = -Math.pow((11 - 6 * a - 11 * p) / 4, 2) + b * b;
						break;
					};
				};
				return value;
			},

			Elastic: function (p, x) {
				x = x || [1];
				return Math.pow(2, 10 * --p) * Math.cos(20 * p * Math.PI * (x[0] || 1) / 3);
			},

			Quad: function (p) {
				return Math.pow(p, 2);
			},
			Cubic: function (p) {
				return Math.pow(p, 3);
			},
			Quart: function (p) {
				return Math.pow(p, 4);
			},
			Quint: function (p) {
				return Math.pow(p, 5);
			}

		}
	});


	function createAnimObj(prm, duration, fps) {
		var o = _createObj(), i;
		if (!prm) prm = {};

		// event
		o.ev_step = prm.ev_step || null;
		o.evFlag = prm.evFlag || false;

		o.ev_start = prm.ev_start || null;
		o.ev_stop = prm.ev_stop || null;

		o.fps = prm.fps || o.fps;
		o._dltTm = prm._dltTm || o._dltTm;

		if (prm.start) o.start(prm.start, duration, fps);
		return o;
	};

	function _createObj(fn) {
		return {
			startTime: null,
			pastTime: null,
			fps: 25,
			_dltTm: 5,
			step: 0,
			metod: 'Linear',
			progres: false,

			ev_start: null,
			ev_stop: null,
			ev_step: null,

			param: null,

			start: function (param, duration, fps) {
				fps = !fps ? this.fps : fps < 0 ? 0 : fps;
				if (duration <= fps) return this.funcFr(val);

				if (typeof param == 'number') param = { start: 0, end: val, metod: this.metod };
				this.param = param;

				this.startTime = gDate();
				this.duration = duration || 500;

				this.progres = true;
				_start(this, fps);
			},

			stop: function () {
				if (!this.progres) return;
				clearTimeout(this.__timmer);
				clearInterval(this.timmer);
				this.__timmer = this.timmer = false;
				this.progres = false;

				_iteration(this);

				//if (this.ev_stop) this.ev_stop();
				deleteParam(this);
			}

		};
	};

	function _start(t, fps) {
		t.fps = fps;
		t.__timmer = false;
		t.progres = true;

		t.timmer = setInterval(function () {
			if (t.__timmer) return;
			t.__timmer = setTimeout(function () {
				t.__timmer = false;
			}, fps);

			_iteration(t);
		}, t._dltTm);

		_iteration(t);
		t._firstStep = true;
	};

	function _iteration(t) {
		var i, p, ii, ndt = gDate(), pp, np, v, rv = {}, endAn = true, pDef = (t.param && t.param._def) || null, evStep = [], evflag, flEvent;
		t.pastTime = ndt;

		for (i in t.param) {
			if (i == '_def' || !t.param[i]) continue;

			p = t.param[i];
			if (p instanceof Array) {
				for (ii = 0; ii < p.length; ii++) {
					np = p[ii];
					if (!np) continue;
					if (np.ev_stop || np.ev_step) flEvent = true;

					if (np._stAni) continue;
					v = fxTransitions(t, i, ndt, np, pDef);
					if (!v) {
						endAn = false;
						continue;
					};

					rv[i] = v[0];
					if (np.ev_step) evflag = evStep[(typeof np.ev_step == 'string' ? np.ev_step : i)] = true;

					if (np._stAni) {
						if (np.ev_stop) evflag = evStep[(typeof np.ev_stop == 'string' ? np.ev_stop : i)] = true;
					} else endAn = false;
				};
				continue;
			};

			pp = p.param;
			if (pp && p._def && pp instanceof Array) {
				for (ii = 0; ii < pp.length; ii++) {
					np = pp[ii];

					if (np.ev_stop || np.ev_step) flEvent = true;
					if (np._stAni) continue;

					v = fxTransitions(t, i, ndt, np, p._def || null);
					if (!v) {
						endAn = false;
						continue;
					};

					if (np.ev_step) evflag = evStep[(typeof np.ev_step == 'string' ? np.ev_step : i)] = true;

					rv[i] = v[0];

					if (np._stAni) {
						if (np.ev_stop) evflag = evStep[(typeof np.ev_stop == 'string' ? np.ev_stop : i)] = true;
					} else endAn = false;
				};
				continue;
			};


			if (p.ev_stop || p.ev_step) flEvent = true;
			if (p._stAni) continue;

			v = fxTransitions(t, i, ndt, p, pDef);
			if (!v) {
				endAn = false;
				continue;
			};

			if (p.ev_step) evflag = evStep[(typeof p.ev_step == 'string' ? p.ev_step : i)] = true;
			rv[i] = v[0];

			if (p._stAni) {
				if (p.ev_stop) evflag = evStep[(typeof p.ev_stop == 'string' ? p.ev_stop : i)] = true;
			} else endAn = false;

		};

		if (t.ev_step)
			if (flEvent) {
				if (evflag) t.ev_step(rv, evStep);
			} else t.ev_step(rv);


		if (endAn) {
			clearTimeout(t.__timmer);
			clearInterval(t.timmer);
			t.__timmer = t.timmer = false;
			t.progres = false;
			if (t.ev_stop) t.ev_stop();
			deleteParam(t);
		};
	};


	function deleteParam(t) {
		if (t.param) while (t.param[0]) delete (t.param[0]);
		t.param = null; delete (t.param);

		if (t.ev_start) delete (t.ev_start);
		if (t.ev_step) delete (t.ev_step);
		if (t.ev_stop) delete (t.ev_stop);
	};



	function fxTransitions(t, pName, ndt, pr, df, _endAnim) {
		if (pr._stAni) return;
		var rval = null, pTm, dlt;
		if (!df) df = {};

		switch (pName) {
			case 'className':
			case 'display':
			case 'position':
			case 'visibility':
			case 'overflow':


				if (pr.time === true || (pr.time && pr.time <= (ndt - t.startTime)) || (!pr.time && (ndt - t.startTime) >= (t.maxDuration || t.duration))) {
					//if ((!pr.time && (ndt-t.startTime)>=t.duration ) || pr.time===true || pr.time<=(ndt-t.startTime) ) {
					pr._stAni = 1;
					setElStyle(pName, null, 1, pr, df);
					return [true, 1];
				};

				return;
		}


		if (!pr.a) pr.a = (df && df.a) || 0;


		if (pr.time && pr.time < t.duration) {
			if (!pr.__timeStart) {
				if (ndt < (t.startTime + pr.time)) return null;
				pr.__timeStart = t.startTime + pr.time;

				pr.duration = pr.duration || df.duration;

				if (!pr.duration || pr.duration == 'auto') {
					pr.duration = t.duration - pr.time;
				} else if (pr.duration < 0) {
					pr.duration = (t.duration - pr.time) + pr.duration;
				} if ((pr.duration + pr.time) > t.duration)
					t.maxDuration = pr.duration + pr.time;


			};

			pTm = (ndt - pr.__timeStart) / pr.duration;
		} else {
			var prDuration = pr.duration || df.duration || t.duration;
			if (prDuration < 0) {
				prDuration = t.duration + prDuration;
			} else if (!t._firstStep && prDuration > t.duration)
				t.maxDuration = prDuration;

			pTm = (ndt - t.startTime) / prDuration;
		};

		if (pTm >= 1) { pr._stAni = pTm = 1; };

		if (pName != 'className') {
			dlt = _gTransition(t, pTm, pr, df);
			rval = dlt * (pr.b - pr.a) + pr.a;
		};

		el = pr.elStyle || (df && df.elStyle);
		if (el) setElStyle(pName, rval, pTm, pr, df);

		return [rval, pTm];
	};

	function _gTransition(t, pos, pr, df) {
		var metod = pr.metod || (df && df.metod) || t.metod, style = pr.style || (df && df.style) || t.style, params = pr.params || (df && df.params);
		var trn = (t.transitions && t.transitions[metod]) || __anTrs.transitions[metod];

		switch (style) {
			case 2:
			case 'easeOut': return 1 - trn(1 - pos, params);
			case 3:
			case 'easeInOut': return (pos <= 0.5) ? trn(2 * pos, params) / 2 : (2 - trn(2 * (1 - pos), params)) / 2;
			default: return trn(pos, params); //easeIn
		};
	};



	function setOpacity(o, v) {
		if (o)
			if (rr.IE) {
				o.style.filter = v !== '' ? 'alpha(opacity=' + Math.round(v * 100) + ')' : '';
			} else o.style.opacity = v !== '' ? v : '';
	};

	// name, val, pTm, pr, df
	function setElStyle(name, val, pTm, pr, df) {
		var i, s, nv, ar, oSt = pr.elStyle || df.elStyle;
		if (!oSt) return;

		if (oSt instanceof Array) {
			ar = pr.elStyle;
			for (i = 0; i < oSt.length; i++) {
				if (!oSt[i]) continue;
				pr.elStyle = oSt[i];
				setElStyle(name, val, pTm, pr, df);
			};
			pr.elStyle = ar;
			return;
		};

		oSt = pr.elStyle || df.elStyle;
		if (!oSt) return;
		s = oSt.style || oSt.elStyle;

		switch (name) {
			case 'opacity':
				nv = null;
				if (pTm >= 1 && pr.ultimate === '') nv = '';
				if (rr.IE) {
					s.filter = nv != null ? nv : 'alpha(opacity=' + Math.round(val * 100) + ')';
				} else s.opacity = nv != null ? nv : val;
				break;

			case 'className':
				nv = pr.add || df.add;
				if (nv) rr.css_add(nv, oSt);
				nv = pr.remove || df.remove;
				if (nv) rr.css_remove(nv, oSt);
				break;

			case 'position':
			case 'display':
			case 'visibility':
			case 'overflow':
				nv = pr.value || typeof pr.value == 'string' ? pr.value : df.value;
				if (typeof nv == 'string') s[name] = nv || '';
				break;


			case 'scrollLeft':
			case 'scrollTop':
				oSt[name] = val;
				break;

			default:
				if (pTm >= 1 && typeof pr.ultimate != 'undefined') nv = pr.ultimate;
				s[name] = (pTm >= 1 && typeof pr.ultimate != 'undefined') ? pr.ultimate : Math.round(val) + (!pr.unit || typeof pr.unit != 'string' ? 'px' : pr.unit);
		};

	};

};



