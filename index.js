/**
 * RIA Session
 */
(function () {
    "use strict";

    var oneDay = 86400000,
        config = require('config'),
        client = require('co-memcached')(config.session.memcached),
        Cookies = require('cookies'),
        config = require('config');


    module.exports = function * init (next) {
        var cookies = new Cookies(this.req, this.res, ['','']),
            sid = cookies.get( config.session.cookie.name );

        var sessionStore = {
            get : function *(key) {
                var data  = yield client.get(sid);
                if(key && data[key]){
                    return data[key];
                }
                return data;
            },
            save : function *(key, value) {
                var data = this.get(key);
                data[key] = value;

                var data  = yield client.set(sid, data, oneDay);
                return data;
            },
            destroy : function *(key) {
                var data = this.get(key);
                if(data[key]){
                    delete data[key];
                }
                var data  = yield client.set(sid, data, oneDay);
            }
        };

        this.req.session = sessionStore;

        yield next;

    };
}());