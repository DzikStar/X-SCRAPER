"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-30607449"],
    {
        960418: (r, e, t) => {
            t.d(e, { vZ: () => S });
            var n = Object.getOwnPropertyNames,
                a = Object.getOwnPropertySymbols,
                u = Object.prototype.hasOwnProperty;
            function o(r, e) {
                return function (t, n, a) {
                    return r(t, n, a) && e(t, n, a);
                };
            }
            function c(r) {
                return function (e, t, n) {
                    if (!e || !t || "object" != typeof e || "object" != typeof t) return r(e, t, n);
                    var a = n.cache,
                        u = a.get(e),
                        o = a.get(t);
                    if (u && o) return u === t && o === e;
                    a.set(e, t), a.set(t, e);
                    var c = r(e, t, n);
                    return a.delete(e), a.delete(t), c;
                };
            }
            function i(r) {
                return n(r).concat(a(r));
            }
            var f =
                Object.hasOwn ||
                function (r, e) {
                    return u.call(r, e);
                };
            function l(r, e) {
                return r || e ? r === e : r === e || (r != r && e != e);
            }
            var s = "_owner",
                p = Object.getOwnPropertyDescriptor,
                v = Object.keys;
            function b(r, e, t) {
                var n = r.length;
                if (e.length !== n) return !1;
                for (; n-- > 0; ) if (!t.equals(r[n], e[n], n, n, r, e, t)) return !1;
                return !0;
            }
            function y(r, e) {
                return l(r.getTime(), e.getTime());
            }
            function q(r, e, t) {
                if (r.size !== e.size) return !1;
                for (var n, a, u = {}, o = r.entries(), c = 0; (n = o.next()) && !n.done; ) {
                    for (var i = e.entries(), f = !1, l = 0; (a = i.next()) && !a.done; ) {
                        var s = n.value,
                            p = s[0],
                            v = s[1],
                            b = a.value,
                            y = b[0],
                            q = b[1];
                        f || u[l] || !(f = t.equals(p, y, c, l, r, e, t) && t.equals(v, q, p, y, r, e, t)) || (u[l] = !0), l++;
                    }
                    if (!f) return !1;
                    c++;
                }
                return !0;
            }
            function g(r, e, t) {
                var n,
                    a = v(r),
                    u = a.length;
                if (v(e).length !== u) return !1;
                for (; u-- > 0; ) {
                    if ((n = a[u]) === s && (r.$$typeof || e.$$typeof) && r.$$typeof !== e.$$typeof) return !1;
                    if (!f(e, n) || !t.equals(r[n], e[n], n, n, r, e, t)) return !1;
                }
                return !0;
            }
            function E(r, e, t) {
                var n,
                    a,
                    u,
                    o = i(r),
                    c = o.length;
                if (i(e).length !== c) return !1;
                for (; c-- > 0; ) {
                    if ((n = o[c]) === s && (r.$$typeof || e.$$typeof) && r.$$typeof !== e.$$typeof) return !1;
                    if (!f(e, n)) return !1;
                    if (!t.equals(r[n], e[n], n, n, r, e, t)) return !1;
                    if (((a = p(r, n)), (u = p(e, n)), (a || u) && (!a || !u || a.configurable !== u.configurable || a.enumerable !== u.enumerable || a.writable !== u.writable))) return !1;
                }
                return !0;
            }
            function j(r, e) {
                return l(r.valueOf(), e.valueOf());
            }
            function d(r, e) {
                return r.source === e.source && r.flags === e.flags;
            }
            function m(r, e, t) {
                if (r.size !== e.size) return !1;
                for (var n, a, u = {}, o = r.values(); (n = o.next()) && !n.done; ) {
                    for (var c = e.values(), i = !1, f = 0; (a = c.next()) && !a.done; ) i || u[f] || !(i = t.equals(n.value, a.value, n.value, a.value, r, e, t)) || (u[f] = !0), f++;
                    if (!i) return !1;
                }
                return !0;
            }
            function h(r, e) {
                var t = r.length;
                if (e.length !== t) return !1;
                for (; t-- > 0; ) if (r[t] !== e[t]) return !1;
                return !0;
            }
            var O = Array.isArray,
                w = "function" == typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView : null,
                $ = Object.assign,
                A = Object.prototype.toString.call.bind(Object.prototype.toString);
            var S = x();
            x({ strict: !0 }),
                x({ circular: !0 }),
                x({ circular: !0, strict: !0 }),
                x({
                    createInternalComparator: function () {
                        return l;
                    },
                }),
                x({
                    strict: !0,
                    createInternalComparator: function () {
                        return l;
                    },
                }),
                x({
                    circular: !0,
                    createInternalComparator: function () {
                        return l;
                    },
                }),
                x({
                    circular: !0,
                    createInternalComparator: function () {
                        return l;
                    },
                    strict: !0,
                });
            function x(r) {
                void 0 === r && (r = {});
                var e,
                    t = r.circular,
                    n = void 0 !== t && t,
                    a = r.createInternalComparator,
                    u = r.createState,
                    i = r.strict,
                    f = void 0 !== i && i,
                    l = (function (r) {
                        var e = r.circular,
                            t = r.createCustomConfig,
                            n = r.strict,
                            a = { areArraysEqual: n ? E : b, areDatesEqual: y, areMapsEqual: n ? o(q, E) : q, areObjectsEqual: n ? E : g, arePrimitiveWrappersEqual: j, areRegExpsEqual: d, areSetsEqual: n ? o(m, E) : m, areTypedArraysEqual: n ? E : h };
                        if ((t && (a = $({}, a, t(a))), e)) {
                            var u = c(a.areArraysEqual),
                                i = c(a.areMapsEqual),
                                f = c(a.areObjectsEqual),
                                l = c(a.areSetsEqual);
                            a = $({}, a, { areArraysEqual: u, areMapsEqual: i, areObjectsEqual: f, areSetsEqual: l });
                        }
                        return a;
                    })(r),
                    s = (function (r) {
                        var e = r.areArraysEqual,
                            t = r.areDatesEqual,
                            n = r.areMapsEqual,
                            a = r.areObjectsEqual,
                            u = r.arePrimitiveWrappersEqual,
                            o = r.areRegExpsEqual,
                            c = r.areSetsEqual,
                            i = r.areTypedArraysEqual;
                        return function (r, f, l) {
                            if (r === f) return !0;
                            if (null == r || null == f || "object" != typeof r || "object" != typeof f) return r != r && f != f;
                            var s = r.constructor;
                            if (s !== f.constructor) return !1;
                            if (s === Object) return a(r, f, l);
                            if (O(r)) return e(r, f, l);
                            if (null != w && w(r)) return i(r, f, l);
                            if (s === Date) return t(r, f, l);
                            if (s === RegExp) return o(r, f, l);
                            if (s === Map) return n(r, f, l);
                            if (s === Set) return c(r, f, l);
                            var p = A(r);
                            return "[object Date]" === p ? t(r, f, l) : "[object RegExp]" === p ? o(r, f, l) : "[object Map]" === p ? n(r, f, l) : "[object Set]" === p ? c(r, f, l) : "[object Object]" === p ? "function" != typeof r.then && "function" != typeof f.then && a(r, f, l) : "[object Arguments]" === p ? a(r, f, l) : ("[object Boolean]" === p || "[object Number]" === p || "[object String]" === p) && u(r, f, l);
                        };
                    })(l);
                return (function (r) {
                    var e = r.circular,
                        t = r.comparator,
                        n = r.createState,
                        a = r.equals,
                        u = r.strict;
                    if (n)
                        return function (r, o) {
                            var c = n(),
                                i = c.cache,
                                f = void 0 === i ? (e ? new WeakMap() : void 0) : i,
                                l = c.meta;
                            return t(r, o, { cache: f, equals: a, meta: l, strict: u });
                        };
                    if (e)
                        return function (r, e) {
                            return t(r, e, { cache: new WeakMap(), equals: a, meta: void 0, strict: u });
                        };
                    var o = { cache: void 0, equals: a, meta: void 0, strict: u };
                    return function (r, e) {
                        return t(r, e, o);
                    };
                })({
                    circular: n,
                    comparator: s,
                    createState: u,
                    equals: a
                        ? a(s)
                        : ((e = s),
                          function (r, t, n, a, u, o, c) {
                              return e(r, t, c);
                          }),
                    strict: f,
                });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-30607449.b76ccc5a.js.map
