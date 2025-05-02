"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-6e668ce9"],
    {
        960418: (e, r, t) => {
            t.d(r, { vZ: () => S });
            var n = Object.getOwnPropertyNames,
                a = Object.getOwnPropertySymbols,
                u = Object.prototype.hasOwnProperty;
            function o(e, r) {
                return function (t, n, a) {
                    return e(t, n, a) && r(t, n, a);
                };
            }
            function c(e) {
                return function (r, t, n) {
                    if (!r || !t || "object" != typeof r || "object" != typeof t) return e(r, t, n);
                    var a = n.cache,
                        u = a.get(r),
                        o = a.get(t);
                    if (u && o) return u === t && o === r;
                    a.set(r, t), a.set(t, r);
                    var c = e(r, t, n);
                    return a.delete(r), a.delete(t), c;
                };
            }
            function i(e) {
                return n(e).concat(a(e));
            }
            var f =
                Object.hasOwn ||
                function (e, r) {
                    return u.call(e, r);
                };
            function l(e, r) {
                return e || r ? e === r : e === r || (e != e && r != r);
            }
            var s = "_owner",
                p = Object.getOwnPropertyDescriptor,
                v = Object.keys;
            function b(e, r, t) {
                var n = e.length;
                if (r.length !== n) return !1;
                for (; n-- > 0; ) if (!t.equals(e[n], r[n], n, n, e, r, t)) return !1;
                return !0;
            }
            function y(e, r) {
                return l(e.getTime(), r.getTime());
            }
            function q(e, r, t) {
                if (e.size !== r.size) return !1;
                for (var n, a, u = {}, o = e.entries(), c = 0; (n = o.next()) && !n.done; ) {
                    for (var i = r.entries(), f = !1, l = 0; (a = i.next()) && !a.done; ) {
                        var s = n.value,
                            p = s[0],
                            v = s[1],
                            b = a.value,
                            y = b[0],
                            q = b[1];
                        f || u[l] || !(f = t.equals(p, y, c, l, e, r, t) && t.equals(v, q, p, y, e, r, t)) || (u[l] = !0), l++;
                    }
                    if (!f) return !1;
                    c++;
                }
                return !0;
            }
            function g(e, r, t) {
                var n,
                    a = v(e),
                    u = a.length;
                if (v(r).length !== u) return !1;
                for (; u-- > 0; ) {
                    if ((n = a[u]) === s && (e.$$typeof || r.$$typeof) && e.$$typeof !== r.$$typeof) return !1;
                    if (!f(r, n) || !t.equals(e[n], r[n], n, n, e, r, t)) return !1;
                }
                return !0;
            }
            function j(e, r, t) {
                var n,
                    a,
                    u,
                    o = i(e),
                    c = o.length;
                if (i(r).length !== c) return !1;
                for (; c-- > 0; ) {
                    if ((n = o[c]) === s && (e.$$typeof || r.$$typeof) && e.$$typeof !== r.$$typeof) return !1;
                    if (!f(r, n)) return !1;
                    if (!t.equals(e[n], r[n], n, n, e, r, t)) return !1;
                    if (((a = p(e, n)), (u = p(r, n)), (a || u) && (!a || !u || a.configurable !== u.configurable || a.enumerable !== u.enumerable || a.writable !== u.writable))) return !1;
                }
                return !0;
            }
            function E(e, r) {
                return l(e.valueOf(), r.valueOf());
            }
            function d(e, r) {
                return e.source === r.source && e.flags === r.flags;
            }
            function m(e, r, t) {
                if (e.size !== r.size) return !1;
                for (var n, a, u = {}, o = e.values(); (n = o.next()) && !n.done; ) {
                    for (var c = r.values(), i = !1, f = 0; (a = c.next()) && !a.done; ) i || u[f] || !(i = t.equals(n.value, a.value, n.value, a.value, e, r, t)) || (u[f] = !0), f++;
                    if (!i) return !1;
                }
                return !0;
            }
            function h(e, r) {
                var t = e.length;
                if (r.length !== t) return !1;
                for (; t-- > 0; ) if (e[t] !== r[t]) return !1;
                return !0;
            }
            var O = Array.isArray,
                w = "function" == typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView : null,
                $ = Object.assign,
                A = Object.prototype.toString.call.bind(Object.prototype.toString);
            var S = C();
            C({ strict: !0 }),
                C({ circular: !0 }),
                C({ circular: !0, strict: !0 }),
                C({
                    createInternalComparator: function () {
                        return l;
                    },
                }),
                C({
                    strict: !0,
                    createInternalComparator: function () {
                        return l;
                    },
                }),
                C({
                    circular: !0,
                    createInternalComparator: function () {
                        return l;
                    },
                }),
                C({
                    circular: !0,
                    createInternalComparator: function () {
                        return l;
                    },
                    strict: !0,
                });
            function C(e) {
                void 0 === e && (e = {});
                var r,
                    t = e.circular,
                    n = void 0 !== t && t,
                    a = e.createInternalComparator,
                    u = e.createState,
                    i = e.strict,
                    f = void 0 !== i && i,
                    l = (function (e) {
                        var r = e.circular,
                            t = e.createCustomConfig,
                            n = e.strict,
                            a = { areArraysEqual: n ? j : b, areDatesEqual: y, areMapsEqual: n ? o(q, j) : q, areObjectsEqual: n ? j : g, arePrimitiveWrappersEqual: E, areRegExpsEqual: d, areSetsEqual: n ? o(m, j) : m, areTypedArraysEqual: n ? j : h };
                        if ((t && (a = $({}, a, t(a))), r)) {
                            var u = c(a.areArraysEqual),
                                i = c(a.areMapsEqual),
                                f = c(a.areObjectsEqual),
                                l = c(a.areSetsEqual);
                            a = $({}, a, { areArraysEqual: u, areMapsEqual: i, areObjectsEqual: f, areSetsEqual: l });
                        }
                        return a;
                    })(e),
                    s = (function (e) {
                        var r = e.areArraysEqual,
                            t = e.areDatesEqual,
                            n = e.areMapsEqual,
                            a = e.areObjectsEqual,
                            u = e.arePrimitiveWrappersEqual,
                            o = e.areRegExpsEqual,
                            c = e.areSetsEqual,
                            i = e.areTypedArraysEqual;
                        return function (e, f, l) {
                            if (e === f) return !0;
                            if (null == e || null == f || "object" != typeof e || "object" != typeof f) return e != e && f != f;
                            var s = e.constructor;
                            if (s !== f.constructor) return !1;
                            if (s === Object) return a(e, f, l);
                            if (O(e)) return r(e, f, l);
                            if (null != w && w(e)) return i(e, f, l);
                            if (s === Date) return t(e, f, l);
                            if (s === RegExp) return o(e, f, l);
                            if (s === Map) return n(e, f, l);
                            if (s === Set) return c(e, f, l);
                            var p = A(e);
                            return "[object Date]" === p ? t(e, f, l) : "[object RegExp]" === p ? o(e, f, l) : "[object Map]" === p ? n(e, f, l) : "[object Set]" === p ? c(e, f, l) : "[object Object]" === p ? "function" != typeof e.then && "function" != typeof f.then && a(e, f, l) : "[object Arguments]" === p ? a(e, f, l) : ("[object Boolean]" === p || "[object Number]" === p || "[object String]" === p) && u(e, f, l);
                        };
                    })(l);
                return (function (e) {
                    var r = e.circular,
                        t = e.comparator,
                        n = e.createState,
                        a = e.equals,
                        u = e.strict;
                    if (n)
                        return function (e, o) {
                            var c = n(),
                                i = c.cache,
                                f = void 0 === i ? (r ? new WeakMap() : void 0) : i,
                                l = c.meta;
                            return t(e, o, { cache: f, equals: a, meta: l, strict: u });
                        };
                    if (r)
                        return function (e, r) {
                            return t(e, r, { cache: new WeakMap(), equals: a, meta: void 0, strict: u });
                        };
                    var o = { cache: void 0, equals: a, meta: void 0, strict: u };
                    return function (e, r) {
                        return t(e, r, o);
                    };
                })({
                    circular: n,
                    comparator: s,
                    createState: u,
                    equals: a
                        ? a(s)
                        : ((r = s),
                          function (e, t, n, a, u, o, c) {
                              return r(e, t, c);
                          }),
                    strict: f,
                });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-6e668ce9.8fa7c68a.js.map
