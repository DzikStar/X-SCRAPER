(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~~-5a94f17d"],
    {
        834406: (e) => {
            var t,
                r,
                n = (e.exports = {});
            function i() {
                throw new Error("setTimeout has not been defined");
            }
            function o() {
                throw new Error("clearTimeout has not been defined");
            }
            function u(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === i || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
                try {
                    return t(e, 0);
                } catch (r) {
                    try {
                        return t.call(null, e, 0);
                    } catch (r) {
                        return t.call(this, e, 0);
                    }
                }
            }
            !(function () {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : i;
                } catch (e) {
                    t = i;
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : o;
                } catch (e) {
                    r = o;
                }
            })();
            var c,
                s = [],
                a = !1,
                l = -1;
            function f() {
                a && c && ((a = !1), c.length ? (s = c.concat(s)) : (l = -1), s.length && h());
            }
            function h() {
                if (!a) {
                    var e = u(f);
                    a = !0;
                    for (var t = s.length; t; ) {
                        for (c = s, s = []; ++l < t; ) c && c[l].run();
                        (l = -1), (t = s.length);
                    }
                    (c = null),
                        (a = !1),
                        (function (e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === o || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
                            try {
                                return r(e);
                            } catch (t) {
                                try {
                                    return r.call(null, e);
                                } catch (t) {
                                    return r.call(this, e);
                                }
                            }
                        })(e);
                }
            }
            function p(e, t) {
                (this.fun = e), (this.array = t);
            }
            function m() {}
            (n.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                s.push(new p(e, t)), 1 !== s.length || a || u(h);
            }),
                (p.prototype.run = function () {
                    this.fun.apply(null, this.array);
                }),
                (n.title = "browser"),
                (n.browser = !0),
                (n.env = {}),
                (n.argv = []),
                (n.version = ""),
                (n.versions = {}),
                (n.on = m),
                (n.addListener = m),
                (n.once = m),
                (n.off = m),
                (n.removeListener = m),
                (n.removeAllListeners = m),
                (n.emit = m),
                (n.prependListener = m),
                (n.prependOnceListener = m),
                (n.listeners = function (e) {
                    return [];
                }),
                (n.binding = function (e) {
                    throw new Error("process.binding is not supported");
                }),
                (n.cwd = function () {
                    return "/";
                }),
                (n.chdir = function (e) {
                    throw new Error("process.chdir is not supported");
                }),
                (n.umask = function () {
                    return 0;
                });
        },
        730279: (e, t, r) => {
            "use strict";
            e.exports = r.p + "sqlite3.94a37e8a.wasm";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~~-5a94f17d.58648dfa.js.map
