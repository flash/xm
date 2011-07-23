/*
обьект даты
*/

rr.Date = function(x) {        x = x ? new Date(x) : new Date();        x = rr.extend(x, rr.Date._extend);
        x._ = x.constructor.prototype;

        return x;
        };


rr.Date._extend = {        getTime: function() {                var t = this, pt = t.constructor.prototype;
                alert(t._deltaTimezoneOffset)
                return pt.getTime.call(t) - (t._deltaTimezoneOffset||0)*60000;
                },

        setTime: function(v) {                if (!v || typeof v != 'number') return;

                var t = this, pt = t.constructor.prototype;
                v += t._deltaTimezoneOffset||0;

                pr.setTime.call(t, v);
                },


        getTimezoneOffset: function() {                var t = this, pt = t.constructor.prototype, x = t._timezoneOffset;
                return typeof x == 'number' ? x : Date.getTimezoneOffset.call(t)                },

        setTimezoneOffset: function(v, z) {                if (typeof v != 'number') return;
                var t = this, pt = t.constructor.prototype;

                t._timezoneOffset = v;
                t._deltaTimezoneOffset = v - pt.getTimezoneOffset.call(t);
                },

        clone: function() {                var x = new Date(this._.getTime.call(t));
                x = rr.extend(x, this);
                x._ = x.constructor.prototype;
                }
        }

