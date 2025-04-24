(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"],
    {
        936386: (e) => {
            function t(e, t, n) {
                var r, o, l, u, i;
                function s() {
                    var a = Date.now() - u;
                    a < t && a >= 0 ? (r = setTimeout(s, t - a)) : ((r = null), n || ((i = e.apply(l, o)), (l = o = null)));
                }
                null == t && (t = 100);
                var a = function () {
                    (l = this), (o = arguments), (u = Date.now());
                    var a = n && !r;
                    return r || (r = setTimeout(s, t)), a && ((i = e.apply(l, o)), (l = o = null)), i;
                };
                return (
                    (a.clear = function () {
                        r && (clearTimeout(r), (r = null));
                    }),
                    (a.flush = function () {
                        r && ((i = e.apply(l, o)), (l = o = null), clearTimeout(r), (r = null));
                    }),
                    a
                );
            }
            (t.debounce = t), (e.exports = t);
        },
        987809: (e, t, n) => {
            "use strict";
            n.d(t, { O4: () => s, xu: () => l });
            var r = n(565058);
            const o = Symbol("");
            function l(e, t) {
                let n = null;
                const r = new Map(),
                    o = (l) => {
                        let u;
                        if (void 0 === t) u = r.get(l);
                        else
                            for (const [e, n] of r)
                                if (t(e, l)) {
                                    u = n;
                                    break;
                                }
                        if (void 0 !== u) {
                            if (!(null == n ? void 0 : n(u[1], l))) return u[0];
                            o.remove(l);
                        }
                        const i = e(l);
                        return r.set(l, [i, Date.now()]), i;
                    };
                return (
                    (o.remove = (e) => {
                        if (void 0 === t) r.delete(e);
                        else
                            for (const [n] of r)
                                if (t(n, e)) {
                                    r.delete(n);
                                    break;
                                }
                    }),
                    (o.setShouldRemove = (e) => {
                        if (((n = e), n)) for (const [e, t] of r) n(t[1], e) && r.delete(e);
                    }),
                    o
                );
            }
            const u = (e) => "function" == typeof (null == e ? void 0 : e.then);
            const i = (function (
                e = () => {
                    try {
                        return window.localStorage;
                    } catch (e) {
                        return void 0;
                    }
                },
                t,
            ) {
                let n, r;
                const o = {
                    getItem: (o, l) => {
                        var i, s;
                        const a = (e) => {
                                if (n !== (e = e || "")) {
                                    try {
                                        r = JSON.parse(e, null == t ? void 0 : t.reviver);
                                    } catch {
                                        return l;
                                    }
                                    n = e;
                                }
                                return r;
                            },
                            c = null != (s = null == (i = e()) ? void 0 : i.getItem(o)) ? s : null;
                        return u(c) ? c.then(a) : a(c);
                    },
                    setItem: (n, r) => {
                        var o;
                        return null == (o = e()) ? void 0 : o.setItem(n, JSON.stringify(r, null == t ? void 0 : t.replacer));
                    },
                    removeItem: (t) => {
                        var n;
                        return null == (n = e()) ? void 0 : n.removeItem(t);
                    },
                };
                return (
                    "undefined" != typeof window &&
                        "function" == typeof window.addEventListener &&
                        window.Storage &&
                        (o.subscribe = (t, n, r) => {
                            if (!(e() instanceof window.Storage)) return () => {};
                            const o = (o) => {
                                if (o.storageArea === e() && o.key === t) {
                                    let e;
                                    try {
                                        e = JSON.parse(o.newValue || "");
                                    } catch {
                                        e = r;
                                    }
                                    n(e);
                                }
                            };
                            return (
                                window.addEventListener("storage", o),
                                () => {
                                    window.removeEventListener("storage", o);
                                }
                            );
                        }),
                    o
                );
            })();
            function s(e, t, n = i, l) {
                const u = null == l ? void 0 : l.getOnInit,
                    s = (0, r.cn)(u ? n.getItem(e, t) : t);
                s.onMount = (r) => {
                    let o;
                    return u || r(n.getItem(e, t)), n.subscribe && (o = n.subscribe(e, r, t)), o;
                };
                return (0, r.cn)(
                    (e) => e(s),
                    (r, l, u) => {
                        const i = "function" == typeof u ? u(r(s)) : u;
                        return i === o ? (l(s, t), n.removeItem(e)) : i instanceof Promise ? i.then((t) => (l(s, t), n.setItem(e, t))) : (l(s, i), n.setItem(e, i));
                    },
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e.7d38830a.js.map
