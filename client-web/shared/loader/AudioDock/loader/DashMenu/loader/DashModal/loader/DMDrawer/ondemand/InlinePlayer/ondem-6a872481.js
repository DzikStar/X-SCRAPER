"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"],
    {
        316118: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(136728);
            var r = n(925885);
            function o(e) {
                const t = [],
                    n = (0, r.Z)(e);
                for (let e = 0; e < n.length; e++) t.push(n[e].hashtag);
                return t;
            }
        },
        872722: (e, t, n) => {
            var r = n(23103),
                o = n(609736),
                i = n(513064),
                s = n(639646),
                a = n(443231),
                l = n(910905),
                u = n(643329),
                c = Array,
                d = Math.max,
                f = Math.min;
            r(
                { target: "Array", proto: !0 },
                {
                    toSpliced: function (e, t) {
                        var n,
                            r,
                            o,
                            v,
                            m = l(this),
                            w = s(m),
                            h = a(e, w),
                            g = arguments.length,
                            p = 0;
                        for (0 === g ? (n = r = 0) : 1 === g ? ((n = 0), (r = w - h)) : ((n = g - 2), (r = f(d(u(t), 0), w - h))), o = i(w + n - r), v = c(o); p < h; p++) v[p] = m[p];
                        for (; p < h + n; p++) v[p] = arguments[p - h + 2];
                        for (; p < o; p++) v[p] = m[p + r - n];
                        return v;
                    },
                },
            ),
                o("toSpliced");
        },
        987809: (e, t, n) => {
            n.d(t, { O4: () => l, xu: () => i });
            var r = n(565058);
            const o = Symbol("");
            function i(e, t) {
                let n = null;
                const r = new Map(),
                    o = (i) => {
                        let s;
                        if (void 0 === t) s = r.get(i);
                        else
                            for (const [e, n] of r)
                                if (t(e, i)) {
                                    s = n;
                                    break;
                                }
                        if (void 0 !== s) {
                            if (!(null == n ? void 0 : n(s[1], i))) return s[0];
                            o.remove(i);
                        }
                        const a = e(i);
                        return r.set(i, [a, Date.now()]), a;
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
            const s = (e) => "function" == typeof (null == e ? void 0 : e.then);
            const a = (function (
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
                    getItem: (o, i) => {
                        var a, l;
                        const u = (e) => {
                                if (n !== (e = e || "")) {
                                    try {
                                        r = JSON.parse(e, null == t ? void 0 : t.reviver);
                                    } catch {
                                        return i;
                                    }
                                    n = e;
                                }
                                return r;
                            },
                            c = null != (l = null == (a = e()) ? void 0 : a.getItem(o)) ? l : null;
                        return s(c) ? c.then(u) : u(c);
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
            function l(e, t, n = a, i) {
                const s = null == i ? void 0 : i.getOnInit,
                    l = (0, r.cn)(s ? n.getItem(e, t) : t);
                l.onMount = (r) => {
                    let o;
                    return s || r(n.getItem(e, t)), n.subscribe && (o = n.subscribe(e, r, t)), o;
                };
                return (0, r.cn)(
                    (e) => e(l),
                    (r, i, s) => {
                        const a = "function" == typeof s ? s(r(l)) : s;
                        return a === o ? (i(l, t), n.removeItem(e)) : a instanceof Promise ? a.then((t) => (i(l, t), n.setItem(e, t))) : (i(l, a), n.setItem(e, a));
                    },
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481.81d1b40a.js.map
