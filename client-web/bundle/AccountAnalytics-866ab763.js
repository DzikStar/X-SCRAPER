"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-866ab763"],
    {
        305163: (r, e, n) => {
            n.d(e, { _T: () => u, ev: () => o, pi: () => t });
            var t = function () {
                return (
                    (t =
                        Object.assign ||
                        function (r) {
                            for (var e, n = 1, t = arguments.length; n < t; n++) for (var u in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, u) && (r[u] = e[u]);
                            return r;
                        }),
                    t.apply(this, arguments)
                );
            };
            function u(r, e) {
                var n = {};
                for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && e.indexOf(t) < 0 && (n[t] = r[t]);
                if (null != r && "function" == typeof Object.getOwnPropertySymbols) {
                    var u = 0;
                    for (t = Object.getOwnPropertySymbols(r); u < t.length; u++) e.indexOf(t[u]) < 0 && Object.prototype.propertyIsEnumerable.call(r, t[u]) && (n[t[u]] = r[t[u]]);
                }
                return n;
            }
            Object.create;
            function o(r, e, n) {
                if (n || 2 === arguments.length) for (var t, u = 0, o = e.length; u < o; u++) (!t && u in e) || (t || (t = Array.prototype.slice.call(e, 0, u)), (t[u] = e[u]));
                return r.concat(t || Array.prototype.slice.call(e));
            }
            Object.create;
        },
        287359: (r, e, n) => {
            n.d(e, { q: () => i });
            var t = n(202784);
            function u(r, e) {
                return "function" == typeof r ? r(e) : r && (r.current = e), r;
            }
            var o = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect,
                a = new WeakMap();
            function i(r, e) {
                var n,
                    i,
                    c,
                    f =
                        ((n = e || null),
                        (i = function (e) {
                            return r.forEach(function (r) {
                                return u(r, e);
                            });
                        }),
                        ((c = (0, t.useState)(function () {
                            return {
                                value: n,
                                callback: i,
                                facade: {
                                    get current() {
                                        return c.value;
                                    },
                                    set current(r) {
                                        var e = c.value;
                                        e !== r && ((c.value = r), c.callback(r, e));
                                    },
                                },
                            };
                        })[0]).callback = i),
                        c.facade);
                return (
                    o(
                        function () {
                            var e = a.get(f);
                            if (e) {
                                var n = new Set(e),
                                    t = new Set(r),
                                    o = f.current;
                                n.forEach(function (r) {
                                    t.has(r) || u(r, null);
                                }),
                                    t.forEach(function (r) {
                                        n.has(r) || u(r, o);
                                    });
                            }
                            a.set(f, r);
                        },
                        [r],
                    ),
                    f
                );
            }
        },
        757758: (r, e, n) => {
            n.d(e, { L: () => a });
            var t = n(305163),
                u = n(202784),
                o = function (r) {
                    var e = r.sideCar,
                        n = (0, t._T)(r, ["sideCar"]);
                    if (!e) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                    var o = e.read();
                    if (!o) throw new Error("Sidecar medium not found");
                    return u.createElement(o, (0, t.pi)({}, n));
                };
            function a(r, e) {
                return r.useMedium(e), o;
            }
            o.isSideCarExport = !0;
        },
        964597: (r, e, n) => {
            n.d(e, { _: () => a });
            var t = n(305163);
            function u(r) {
                return r;
            }
            function o(r, e) {
                void 0 === e && (e = u);
                var n = [],
                    t = !1;
                return {
                    read: function () {
                        if (t) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return n.length ? n[n.length - 1] : r;
                    },
                    useMedium: function (r) {
                        var u = e(r, t);
                        return (
                            n.push(u),
                            function () {
                                n = n.filter(function (r) {
                                    return r !== u;
                                });
                            }
                        );
                    },
                    assignSyncMedium: function (r) {
                        for (t = !0; n.length; ) {
                            var e = n;
                            (n = []), e.forEach(r);
                        }
                        n = {
                            push: function (e) {
                                return r(e);
                            },
                            filter: function () {
                                return n;
                            },
                        };
                    },
                    assignMedium: function (r) {
                        t = !0;
                        var e = [];
                        if (n.length) {
                            var u = n;
                            (n = []), u.forEach(r), (e = n);
                        }
                        var o = function () {
                                var n = e;
                                (e = []), n.forEach(r);
                            },
                            a = function () {
                                return Promise.resolve().then(o);
                            };
                        a(),
                            (n = {
                                push: function (r) {
                                    e.push(r), a();
                                },
                                filter: function (r) {
                                    return (e = e.filter(r)), n;
                                },
                            });
                    },
                };
            }
            function a(r) {
                void 0 === r && (r = {});
                var e = o(null);
                return (e.options = (0, t.pi)({ async: !0, ssr: !1 }, r)), e;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-866ab763.ebc50a8a.js.map
