/*
обьект даты
*/

rr.Date = function(x) {
        x._ = x.constructor.prototype;

        return x;
        };


rr.Date._extend = {
                alert(t._deltaTimezoneOffset)
                return pt.getTime.call(t) - (t._deltaTimezoneOffset||0)*60000;
                },

        setTime: function(v) {

                var t = this, pt = t.constructor.prototype;
                v += t._deltaTimezoneOffset||0;

                pr.setTime.call(t, v);
                },


        getTimezoneOffset: function() {
                return typeof x == 'number' ? x : Date.getTimezoneOffset.call(t)

        setTimezoneOffset: function(v, z) {
                var t = this, pt = t.constructor.prototype;

                t._timezoneOffset = v;
                t._deltaTimezoneOffset = v - pt.getTimezoneOffset.call(t);
                },

        clone: function() {
                x = rr.extend(x, this);
                x._ = x.constructor.prototype;
                }
        }
