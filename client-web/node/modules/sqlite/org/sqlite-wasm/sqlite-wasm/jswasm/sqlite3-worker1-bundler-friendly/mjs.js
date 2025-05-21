(() => {
    "use strict";
    var e,
        r,
        s = {
            551494: (e, r, s) => {
                (0, s(670267).Z)().then((e) => e.initWorker1API());
            },
        },
        t = {};
    function a(e) {
        var r = t[e];
        if (void 0 !== r) return r.exports;
        var o = (t[e] = { exports: {} });
        return s[e](o, o.exports, a), o.exports;
    }
    (a.m = s),
        (a.x = () => {
            var e = a.O(void 0, ["shared~~-5a94f17d", "shared~~-ab3eb430"], () => a(551494));
            return (e = a.O(e));
        }),
        (e = []),
        (a.O = (r, s, t, o) => {
            if (!s) {
                var i = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [s, t, o] = e[d], n = !0, l = 0; l < s.length; l++) (!1 & o || i >= o) && Object.keys(a.O).every((e) => a.O[e](s[l])) ? s.splice(l--, 1) : ((n = !1), o < i && (i = o));
                    if (n) {
                        e.splice(d--, 1);
                        var p = t();
                        void 0 !== p && (r = p);
                    }
                }
                return r;
            }
            o = o || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
            e[d] = [s, t, o];
        }),
        (a.d = (e, r) => {
            for (var s in r) a.o(r, s) && !a.o(e, s) && Object.defineProperty(e, s, { enumerable: !0, get: r[s] });
        }),
        (a.f = {}),
        (a.e = (e) => Promise.all(Object.keys(a.f).reduce((r, s) => (a.f[s](e, r), r), []))),
        (a.u = (e) => e + "." + { "shared~~-5a94f17d": "58648df", "shared~~-ab3eb430": "c631090", "node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-opfs-async-proxy_js": "ee5cbde" }[e] + "a.js"),
        (a.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
        (a.p = "https://abs.twimg.com/responsive-web/client-web/"),
        (() => {
            a.b = self.location + "";
            var e = { "node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-worker1-bundler-friendly_mjs": 1 };
            a.f.i = (r, s) => {
                e[r] || importScripts(a.p + a.u(r));
            };
            var r = (self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []),
                s = r.push.bind(r);
            r.push = (r) => {
                var [t, o, i] = r;
                for (var n in o) a.o(o, n) && (a.m[n] = o[n]);
                for (i && i(a); t.length; ) e[t.pop()] = 1;
                s(r);
            };
        })(),
        (r = a.x),
        (a.x = () => Promise.all([a.e("shared~~-5a94f17d"), a.e("shared~~-ab3eb430")]).then(r));
    a.x();
})();
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-worker1-bundler-friendly_mjs.17d3629a.js.map
