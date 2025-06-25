window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-49ceb22a"],
        {
            202784: (t, r, n) => {
                "use strict";
                t.exports = n(283426);
            },
            552322: (t, r, n) => {
                "use strict";
                t.exports = n(811837);
            },
            700911: (t, r, n) => {
                t.exports = n(453110);
            },
            453110: (t) => {
                "use strict";
                var r =
                    Object.assign ||
                    function (t) {
                        for (var r = 1; r < arguments.length; r++) {
                            var n = arguments[r];
                            for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
                        }
                        return t;
                    };
                var n = "BEGIN",
                    e = "COMMIT",
                    o = "REVERT",
                    i = [];
                function u(t, r) {
                    return t.optimist && t.optimist.id === r;
                }
                function f(t, r) {
                    if (!t || "object" != typeof t || Array.isArray(t)) throw new TypeError('Error while handling "' + r.type + '": Optimist requires that state is always a plain object.');
                }
                function c(t) {
                    if (t) {
                        var r = t.optimist;
                        return {
                            optimist: void 0 === r ? i : r,
                            innerState: (function (t, r) {
                                var n = {};
                                for (var e in t) r.indexOf(e) >= 0 || (Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]));
                                return n;
                            })(t, ["optimist"]),
                        };
                    }
                    return { optimist: i, innerState: t };
                }
                (t.exports = function (t) {
                    function i(n, e, o) {
                        return n.length && (n = n.concat([{ action: o }])), f((e = t(e, o)), o), r({ optimist: n }, e);
                    }
                    return function (a, s) {
                        if (s.optimist)
                            switch (s.optimist.type) {
                                case n:
                                    return (function (n, e) {
                                        var o = c(n),
                                            i = o.optimist,
                                            u = o.innerState;
                                        return (i = i.concat([{ beforeState: u, action: e }])), f((u = t(u, e)), e), r({ optimist: i }, u);
                                    })(a, s);
                                case e:
                                    return (function (t, r) {
                                        var n = c(t),
                                            e = n.optimist,
                                            o = n.innerState,
                                            f = [],
                                            a = !1;
                                        return (
                                            e.forEach(function (t) {
                                                a ? (t.beforeState && u(t.action, r.optimist.id) ? f.push({ action: t.action }) : f.push(t)) : t.beforeState && !u(t.action, r.optimist.id) ? ((a = !0), f.push(t)) : t.beforeState && u(t.action, r.optimist.id);
                                            }),
                                            i((e = f), o, r)
                                        );
                                    })(a, s);
                                case o:
                                    return (function (r, n) {
                                        var e = c(r),
                                            o = e.optimist,
                                            a = e.innerState,
                                            s = [],
                                            p = !1,
                                            h = !1,
                                            v = a;
                                        return (
                                            o.forEach(function (r) {
                                                r.beforeState && u(r.action, n.optimist.id) && ((v = r.beforeState), (h = !0)), u(r.action, n.optimist.id) || (r.beforeState && (p = !0), p && (h && r.beforeState ? s.push({ beforeState: v, action: r.action }) : s.push(r)), h && ((v = t(v, r.action)), f(a, n)));
                                            }),
                                            i((o = s), v, n)
                                        );
                                    })(a, s);
                            }
                        var p = c(a),
                            h = p.optimist,
                            v = p.innerState;
                        if (a && !h.length) {
                            var w = t(v, s);
                            return w === v ? a : (f(w, s), r({ optimist: h }, w));
                        }
                        return i(h, v, s);
                    };
                }),
                    (t.exports.BEGIN = n),
                    (t.exports.COMMIT = e),
                    (t.exports.REVERT = o);
            },
            643292: (t, r, n) => {
                "use strict";
                function e(t) {
                    return function (r) {
                        var n = r.dispatch,
                            e = r.getState;
                        return function (r) {
                            return function (o) {
                                return "function" == typeof o ? o(n, e, t) : r(o);
                            };
                        };
                    };
                }
                n.d(r, { Z: () => i });
                var o = e();
                o.withExtraArgument = e;
                const i = o;
            },
            118717: (t, r, n) => {
                "use strict";
                n.d(r, { DE: () => h, MT: () => a, UY: () => s, md: () => w, qC: () => v });
                var e = n(133028);
                function o(t) {
                    return "Minified Redux error #" + t + "; visit https://redux.js.org/Errors?code=" + t + " for the full message or use the non-minified dev environment for full errors. ";
                }
                var i = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
                    u = function () {
                        return Math.random().toString(36).substring(7).split("").join(".");
                    },
                    f = {
                        INIT: "@@redux/INIT" + u(),
                        REPLACE: "@@redux/REPLACE" + u(),
                        PROBE_UNKNOWN_ACTION: function () {
                            return "@@redux/PROBE_UNKNOWN_ACTION" + u();
                        },
                    };
                function c(t) {
                    if ("object" != typeof t || null === t) return !1;
                    for (var r = t; null !== Object.getPrototypeOf(r); ) r = Object.getPrototypeOf(r);
                    return Object.getPrototypeOf(t) === r;
                }
                function a(t, r, n) {
                    var e;
                    if (("function" == typeof r && "function" == typeof n) || ("function" == typeof n && "function" == typeof arguments[3])) throw new Error(o(0));
                    if (("function" == typeof r && void 0 === n && ((n = r), (r = void 0)), void 0 !== n)) {
                        if ("function" != typeof n) throw new Error(o(1));
                        return n(a)(t, r);
                    }
                    if ("function" != typeof t) throw new Error(o(2));
                    var u = t,
                        s = r,
                        p = [],
                        h = p,
                        v = !1;
                    function w() {
                        h === p && (h = p.slice());
                    }
                    function y() {
                        if (v) throw new Error(o(3));
                        return s;
                    }
                    function l(t) {
                        if ("function" != typeof t) throw new Error(o(4));
                        if (v) throw new Error(o(5));
                        var r = !0;
                        return (
                            w(),
                            h.push(t),
                            function () {
                                if (r) {
                                    if (v) throw new Error(o(6));
                                    (r = !1), w();
                                    var n = h.indexOf(t);
                                    h.splice(n, 1), (p = null);
                                }
                            }
                        );
                    }
                    function d(t) {
                        if (!c(t)) throw new Error(o(7));
                        if (void 0 === t.type) throw new Error(o(8));
                        if (v) throw new Error(o(9));
                        try {
                            (v = !0), (s = u(s, t));
                        } finally {
                            v = !1;
                        }
                        for (var r = (p = h), n = 0; n < r.length; n++) {
                            (0, r[n])();
                        }
                        return t;
                    }
                    return (
                        d({ type: f.INIT }),
                        ((e = {
                            dispatch: d,
                            subscribe: l,
                            getState: y,
                            replaceReducer: function (t) {
                                if ("function" != typeof t) throw new Error(o(10));
                                (u = t), d({ type: f.REPLACE });
                            },
                        })[i] = function () {
                            var t,
                                r = l;
                            return (
                                ((t = {
                                    subscribe: function (t) {
                                        if ("object" != typeof t || null === t) throw new Error(o(11));
                                        function n() {
                                            t.next && t.next(y());
                                        }
                                        return n(), { unsubscribe: r(n) };
                                    },
                                })[i] = function () {
                                    return this;
                                }),
                                t
                            );
                        }),
                        e
                    );
                }
                function s(t) {
                    for (var r = Object.keys(t), n = {}, e = 0; e < r.length; e++) {
                        var i = r[e];
                        0, "function" == typeof t[i] && (n[i] = t[i]);
                    }
                    var u,
                        c = Object.keys(n);
                    try {
                        !(function (t) {
                            Object.keys(t).forEach(function (r) {
                                var n = t[r];
                                if (void 0 === n(void 0, { type: f.INIT })) throw new Error(o(12));
                                if (void 0 === n(void 0, { type: f.PROBE_UNKNOWN_ACTION() })) throw new Error(o(13));
                            });
                        })(n);
                    } catch (t) {
                        u = t;
                    }
                    return function (t, r) {
                        if ((void 0 === t && (t = {}), u)) throw u;
                        for (var e = !1, i = {}, f = 0; f < c.length; f++) {
                            var a = c[f],
                                s = n[a],
                                p = t[a],
                                h = s(p, r);
                            if (void 0 === h) {
                                r && r.type;
                                throw new Error(o(14));
                            }
                            (i[a] = h), (e = e || h !== p);
                        }
                        return (e = e || c.length !== Object.keys(t).length) ? i : t;
                    };
                }
                function p(t, r) {
                    return function () {
                        return r(t.apply(this, arguments));
                    };
                }
                function h(t, r) {
                    if ("function" == typeof t) return p(t, r);
                    if ("object" != typeof t || null === t) throw new Error(o(16));
                    var n = {};
                    for (var e in t) {
                        var i = t[e];
                        "function" == typeof i && (n[e] = p(i, r));
                    }
                    return n;
                }
                function v() {
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return 0 === r.length
                        ? function (t) {
                              return t;
                          }
                        : 1 === r.length
                          ? r[0]
                          : r.reduce(function (t, r) {
                                return function () {
                                    return t(r.apply(void 0, arguments));
                                };
                            });
                }
                function w() {
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return function (t) {
                        return function () {
                            var n = t.apply(void 0, arguments),
                                i = function () {
                                    throw new Error(o(15));
                                },
                                u = {
                                    getState: n.getState,
                                    dispatch: function () {
                                        return i.apply(void 0, arguments);
                                    },
                                },
                                f = r.map(function (t) {
                                    return t(u);
                                });
                            return (i = v.apply(void 0, f)(n.dispatch)), (0, e.Z)((0, e.Z)({}, n), {}, { dispatch: i });
                        };
                    };
                }
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-49ceb22a.1a89ac1a.js.map
