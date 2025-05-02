(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-9fd4b2af"],
    {
        149432: (r) => {
            r.exports = function (r, t, n) {
                switch (n.length) {
                    case 0:
                        return r.call(t);
                    case 1:
                        return r.call(t, n[0]);
                    case 2:
                        return r.call(t, n[0], n[1]);
                    case 3:
                        return r.call(t, n[0], n[1], n[2]);
                }
                return r.apply(t, n);
            };
        },
        877603: (r) => {
            r.exports = function (r, t) {
                for (var n = -1, e = null == r ? 0 : r.length; ++n < e; ) if (!t(r[n], n, r)) return !1;
                return !0;
            };
        },
        550217: (r) => {
            r.exports = function (r) {
                return r.split("");
            };
        },
        313940: (r, t, n) => {
            var e = n(883043);
            r.exports = function (r, t, n) {
                "__proto__" == t && e ? e(r, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (r[t] = n);
            };
        },
        224303: (r, t, n) => {
            var e = n(626548),
                u = n(692019)(e);
            r.exports = u;
        },
        350080: (r, t, n) => {
            var e = n(224303);
            r.exports = function (r, t) {
                var n = !0;
                return (
                    e(r, function (r, e, u) {
                        return (n = !!t(r, e, u));
                    }),
                    n
                );
            };
        },
        302229: (r, t, n) => {
            var e = n(4795);
            r.exports = function (r, t, n) {
                for (var u = -1, o = r.length; ++u < o; ) {
                    var i = r[u],
                        a = t(i);
                    if (null != a && (void 0 === f ? a == a && !e(a) : n(a, f)))
                        var f = a,
                            c = i;
                }
                return c;
            };
        },
        62034: (r, t, n) => {
            var e = n(265067),
                u = n(295882);
            r.exports = function r(t, n, o, i, a) {
                var f = -1,
                    c = t.length;
                for (o || (o = u), a || (a = []); ++f < c; ) {
                    var s = t[f];
                    n > 0 && o(s) ? (n > 1 ? r(s, n - 1, o, i, a) : e(a, s)) : i || (a[a.length] = s);
                }
                return a;
            };
        },
        915308: (r, t, n) => {
            var e = n(355463)();
            r.exports = e;
        },
        626548: (r, t, n) => {
            var e = n(915308),
                u = n(690249);
            r.exports = function (r, t) {
                return r && e(r, t, u);
            };
        },
        984134: (r) => {
            r.exports = function (r, t) {
                return r > t;
            };
        },
        417606: (r) => {
            r.exports = function (r, t) {
                return r < t;
            };
        },
        393401: (r, t, n) => {
            var e = n(224303),
                u = n(867878);
            r.exports = function (r, t) {
                var n = -1,
                    o = u(r) ? Array(r.length) : [];
                return (
                    e(r, function (r, e, u) {
                        o[++n] = t(r, e, u);
                    }),
                    o
                );
            };
        },
        923813: (r, t, n) => {
            var e = n(150343),
                u = n(513324),
                o = n(668286),
                i = n(393401),
                a = n(327095),
                f = n(947826),
                c = n(918477),
                s = n(223059),
                v = n(986152);
            r.exports = function (r, t, n) {
                t = t.length
                    ? e(t, function (r) {
                          return v(r)
                              ? function (t) {
                                    return u(t, 1 === r.length ? r[0] : r);
                                }
                              : r;
                      })
                    : [s];
                var p = -1;
                t = e(t, f(o));
                var l = i(r, function (r, n, u) {
                    return {
                        criteria: e(t, function (t) {
                            return t(r);
                        }),
                        index: ++p,
                        value: r,
                    };
                });
                return a(l, function (r, t) {
                    return c(r, t, n);
                });
            };
        },
        793228: (r) => {
            var t = Math.ceil,
                n = Math.max;
            r.exports = function (r, e, u, o) {
                for (var i = -1, a = n(t((e - r) / (u || 1)), 0), f = Array(a); a--; ) (f[o ? a : ++i] = r), (r += u);
                return f;
            };
        },
        636060: (r, t, n) => {
            var e = n(223059),
                u = n(43114),
                o = n(475251);
            r.exports = function (r, t) {
                return o(u(r, t, e), r + "");
            };
        },
        86532: (r, t, n) => {
            var e = n(86874),
                u = n(883043),
                o = n(223059),
                i = u
                    ? function (r, t) {
                          return u(r, "toString", { configurable: !0, enumerable: !1, value: e(t), writable: !0 });
                      }
                    : o;
            r.exports = i;
        },
        439872: (r) => {
            r.exports = function (r, t, n) {
                var e = -1,
                    u = r.length;
                t < 0 && (t = -t > u ? 0 : u + t), (n = n > u ? u : n) < 0 && (n += u), (u = t > n ? 0 : (n - t) >>> 0), (t >>>= 0);
                for (var o = Array(u); ++e < u; ) o[e] = r[e + t];
                return o;
            };
        },
        104751: (r, t, n) => {
            var e = n(224303);
            r.exports = function (r, t) {
                var n;
                return (
                    e(r, function (r, e, u) {
                        return !(n = t(r, e, u));
                    }),
                    !!n
                );
            };
        },
        327095: (r) => {
            r.exports = function (r, t) {
                var n = r.length;
                for (r.sort(t); n--; ) r[n] = r[n].value;
                return r;
            };
        },
        251704: (r, t, n) => {
            var e = n(252153),
                u = /^\s+/;
            r.exports = function (r) {
                return r ? r.slice(0, e(r) + 1).replace(u, "") : r;
            };
        },
        167326: (r, t, n) => {
            var e = n(645386),
                u = n(238333),
                o = n(834893),
                i = n(759950),
                a = n(178803),
                f = n(16909);
            r.exports = function (r, t, n) {
                var c = -1,
                    s = u,
                    v = r.length,
                    p = !0,
                    l = [],
                    x = l;
                if (n) (p = !1), (s = o);
                else if (v >= 200) {
                    var d = t ? null : a(r);
                    if (d) return f(d);
                    (p = !1), (s = i), (x = new e());
                } else x = t ? [] : l;
                r: for (; ++c < v; ) {
                    var h = r[c],
                        g = t ? t(h) : h;
                    if (((h = n || 0 !== h ? h : 0), p && g == g)) {
                        for (var b = x.length; b--; ) if (x[b] === g) continue r;
                        t && x.push(g), l.push(h);
                    } else s(x, g, n) || (x !== l && x.push(g), l.push(h));
                }
                return l;
            };
        },
        223895: (r, t, n) => {
            var e = n(439872);
            r.exports = function (r, t, n) {
                var u = r.length;
                return (n = void 0 === n ? u : n), !t && n >= u ? r : e(r, t, n);
            };
        },
        827520: (r, t, n) => {
            var e = n(4795);
            r.exports = function (r, t) {
                if (r !== t) {
                    var n = void 0 !== r,
                        u = null === r,
                        o = r == r,
                        i = e(r),
                        a = void 0 !== t,
                        f = null === t,
                        c = t == t,
                        s = e(t);
                    if ((!f && !s && !i && r > t) || (i && a && c && !f && !s) || (u && a && c) || (!n && c) || !o) return 1;
                    if ((!u && !i && !s && r < t) || (s && n && o && !u && !i) || (f && n && o) || (!a && o) || !c) return -1;
                }
                return 0;
            };
        },
        918477: (r, t, n) => {
            var e = n(827520);
            r.exports = function (r, t, n) {
                for (var u = -1, o = r.criteria, i = t.criteria, a = o.length, f = n.length; ++u < a; ) {
                    var c = e(o[u], i[u]);
                    if (c) return u >= f ? c : c * ("desc" == n[u] ? -1 : 1);
                }
                return r.index - t.index;
            };
        },
        692019: (r, t, n) => {
            var e = n(867878);
            r.exports = function (r, t) {
                return function (n, u) {
                    if (null == n) return n;
                    if (!e(n)) return r(n, u);
                    for (var o = n.length, i = t ? o : -1, a = Object(n); (t ? i-- : ++i < o) && !1 !== u(a[i], i, a); );
                    return n;
                };
            };
        },
        355463: (r) => {
            r.exports = function (r) {
                return function (t, n, e) {
                    for (var u = -1, o = Object(t), i = e(t), a = i.length; a--; ) {
                        var f = i[r ? a : ++u];
                        if (!1 === n(o[f], f, o)) break;
                    }
                    return t;
                };
            };
        },
        883126: (r, t, n) => {
            var e = n(223895),
                u = n(33880),
                o = n(608435),
                i = n(466188);
            r.exports = function (r) {
                return function (t) {
                    t = i(t);
                    var n = u(t) ? o(t) : void 0,
                        a = n ? n[0] : t.charAt(0),
                        f = n ? e(n, 1).join("") : t.slice(1);
                    return a[r]() + f;
                };
            };
        },
        398776: (r, t, n) => {
            var e = n(668286),
                u = n(867878),
                o = n(690249);
            r.exports = function (r) {
                return function (t, n, i) {
                    var a = Object(t);
                    if (!u(t)) {
                        var f = e(n, 3);
                        (t = o(t)),
                            (n = function (r) {
                                return f(a[r], r, a);
                            });
                    }
                    var c = r(t, n, i);
                    return c > -1 ? a[f ? t[c] : c] : void 0;
                };
            };
        },
        782941: (r, t, n) => {
            var e = n(793228),
                u = n(182406),
                o = n(5707);
            r.exports = function (r) {
                return function (t, n, i) {
                    return i && "number" != typeof i && u(t, n, i) && (n = i = void 0), (t = o(t)), void 0 === n ? ((n = t), (t = 0)) : (n = o(n)), (i = void 0 === i ? (t < n ? 1 : -1) : o(i)), e(t, n, i, r);
                };
            };
        },
        178803: (r, t, n) => {
            var e = n(302143),
                u = n(334291),
                o = n(16909),
                i =
                    e && 1 / o(new e([, -0]))[1] == 1 / 0
                        ? function (r) {
                              return new e(r);
                          }
                        : u;
            r.exports = i;
        },
        883043: (r, t, n) => {
            var e = n(638761),
                u = (function () {
                    try {
                        var r = e(Object, "defineProperty");
                        return r({}, "", {}), r;
                    } catch (r) {}
                })();
            r.exports = u;
        },
        447353: (r, t, n) => {
            var e = n(860241)(Object.getPrototypeOf, Object);
            r.exports = e;
        },
        33880: (r) => {
            var t = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            r.exports = function (r) {
                return t.test(r);
            };
        },
        295882: (r, t, n) => {
            var e = n(750857),
                u = n(379631),
                o = n(986152),
                i = e ? e.isConcatSpreadable : void 0;
            r.exports = function (r) {
                return o(r) || u(r) || !!(i && r && r[i]);
            };
        },
        182406: (r, t, n) => {
            var e = n(641225),
                u = n(867878),
                o = n(239045),
                i = n(429259);
            r.exports = function (r, t, n) {
                if (!i(n)) return !1;
                var a = typeof t;
                return !!("number" == a ? u(n) && o(t, n.length) : "string" == a && t in n) && e(n[t], r);
            };
        },
        43114: (r, t, n) => {
            var e = n(149432),
                u = Math.max;
            r.exports = function (r, t, n) {
                return (
                    (t = u(void 0 === t ? r.length - 1 : t, 0)),
                    function () {
                        for (var o = arguments, i = -1, a = u(o.length - t, 0), f = Array(a); ++i < a; ) f[i] = o[t + i];
                        i = -1;
                        for (var c = Array(t + 1); ++i < t; ) c[i] = o[i];
                        return (c[t] = n(f)), e(r, this, c);
                    }
                );
            };
        },
        475251: (r, t, n) => {
            var e = n(86532),
                u = n(197787)(e);
            r.exports = u;
        },
        197787: (r) => {
            var t = Date.now;
            r.exports = function (r) {
                var n = 0,
                    e = 0;
                return function () {
                    var u = t(),
                        o = 16 - (u - e);
                    if (((e = u), o > 0)) {
                        if (++n >= 800) return arguments[0];
                    } else n = 0;
                    return r.apply(void 0, arguments);
                };
            };
        },
        608435: (r, t, n) => {
            var e = n(550217),
                u = n(33880),
                o = n(363344);
            r.exports = function (r) {
                return u(r) ? o(r) : e(r);
            };
        },
        252153: (r) => {
            var t = /\s/;
            r.exports = function (r) {
                for (var n = r.length; n-- && t.test(r.charAt(n)); );
                return n;
            };
        },
        363344: (r) => {
            var t = "\\ud800-\\udfff",
                n = "[" + t + "]",
                e = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                u = "\\ud83c[\\udffb-\\udfff]",
                o = "[^" + t + "]",
                i = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                a = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                f = "(?:" + e + "|" + u + ")" + "?",
                c = "[\\ufe0e\\ufe0f]?",
                s = c + f + ("(?:\\u200d(?:" + [o, i, a].join("|") + ")" + c + f + ")*"),
                v = "(?:" + [o + e + "?", e, i, a, n].join("|") + ")",
                p = RegExp(u + "(?=" + u + ")|" + v + s, "g");
            r.exports = function (r) {
                return r.match(p) || [];
            };
        },
        86874: (r) => {
            r.exports = function (r) {
                return function () {
                    return r;
                };
            };
        },
        254073: (r, t, n) => {
            var e = n(429259),
                u = n(161100),
                o = n(707642),
                i = Math.max,
                a = Math.min;
            r.exports = function (r, t, n) {
                var f,
                    c,
                    s,
                    v,
                    p,
                    l,
                    x = 0,
                    d = !1,
                    h = !1,
                    g = !0;
                if ("function" != typeof r) throw new TypeError("Expected a function");
                function b(t) {
                    var n = f,
                        e = c;
                    return (f = c = void 0), (x = t), (v = r.apply(e, n));
                }
                function y(r) {
                    var n = r - l;
                    return void 0 === l || n >= t || n < 0 || (h && r - x >= s);
                }
                function m() {
                    var r = u();
                    if (y(r)) return w(r);
                    p = setTimeout(
                        m,
                        (function (r) {
                            var n = t - (r - l);
                            return h ? a(n, s - (r - x)) : n;
                        })(r),
                    );
                }
                function w(r) {
                    return (p = void 0), g && f ? b(r) : ((f = c = void 0), v);
                }
                function j() {
                    var r = u(),
                        n = y(r);
                    if (((f = arguments), (c = this), (l = r), n)) {
                        if (void 0 === p)
                            return (function (r) {
                                return (x = r), (p = setTimeout(m, t)), d ? b(r) : v;
                            })(l);
                        if (h) return clearTimeout(p), (p = setTimeout(m, t)), b(l);
                    }
                    return void 0 === p && (p = setTimeout(m, t)), v;
                }
                return (
                    (t = o(t) || 0),
                    e(n) && ((d = !!n.leading), (s = (h = "maxWait" in n) ? i(o(n.maxWait) || 0, t) : s), (g = "trailing" in n ? !!n.trailing : g)),
                    (j.cancel = function () {
                        void 0 !== p && clearTimeout(p), (x = 0), (f = l = c = p = void 0);
                    }),
                    (j.flush = function () {
                        return void 0 === p ? v : w(u());
                    }),
                    j
                );
            };
        },
        539794: (r, t, n) => {
            var e = n(877603),
                u = n(350080),
                o = n(668286),
                i = n(986152),
                a = n(182406);
            r.exports = function (r, t, n) {
                var f = i(r) ? e : u;
                return n && a(r, t, n) && (t = void 0), f(r, o(t, 3));
            };
        },
        255281: (r, t, n) => {
            var e = n(398776)(n(912982));
            r.exports = e;
        },
        912982: (r, t, n) => {
            var e = n(521359),
                u = n(668286),
                o = n(238101),
                i = Math.max;
            r.exports = function (r, t, n) {
                var a = null == r ? 0 : r.length;
                if (!a) return -1;
                var f = null == n ? 0 : o(n);
                return f < 0 && (f = i(a + f, 0)), e(r, u(t, 3), f);
            };
        },
        835838: (r, t, n) => {
            var e = n(62034),
                u = n(516760);
            r.exports = function (r, t) {
                return e(u(r, t), 1);
            };
        },
        304335: (r, t, n) => {
            var e = n(853366),
                u = n(315125);
            r.exports = function (r) {
                return !0 === r || !1 === r || (u(r) && "[object Boolean]" == e(r));
            };
        },
        818149: (r, t, n) => {
            var e = n(188746);
            r.exports = function (r, t) {
                return e(r, t);
            };
        },
        616951: (r, t, n) => {
            var e = n(680537);
            r.exports = function (r) {
                return e(r) && r != +r;
            };
        },
        301842: (r) => {
            r.exports = function (r) {
                return null == r;
            };
        },
        680537: (r, t, n) => {
            var e = n(853366),
                u = n(315125);
            r.exports = function (r) {
                return "number" == typeof r || (u(r) && "[object Number]" == e(r));
            };
        },
        497030: (r, t, n) => {
            var e = n(853366),
                u = n(447353),
                o = n(315125),
                i = Function.prototype,
                a = Object.prototype,
                f = i.toString,
                c = a.hasOwnProperty,
                s = f.call(Object);
            r.exports = function (r) {
                if (!o(r) || "[object Object]" != e(r)) return !1;
                var t = u(r);
                if (null === t) return !0;
                var n = c.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && f.call(n) == s;
            };
        },
        785505: (r, t, n) => {
            var e = n(853366),
                u = n(986152),
                o = n(315125);
            r.exports = function (r) {
                return "string" == typeof r || (!u(r) && o(r) && "[object String]" == e(r));
            };
        },
        856974: (r) => {
            r.exports = function (r) {
                var t = null == r ? 0 : r.length;
                return t ? r[t - 1] : void 0;
            };
        },
        516760: (r, t, n) => {
            var e = n(150343),
                u = n(668286),
                o = n(393401),
                i = n(986152);
            r.exports = function (r, t) {
                return (i(r) ? e : o)(r, u(t, 3));
            };
        },
        534519: (r, t, n) => {
            var e = n(313940),
                u = n(626548),
                o = n(668286);
            r.exports = function (r, t) {
                var n = {};
                return (
                    (t = o(t, 3)),
                    u(r, function (r, u, o) {
                        e(n, u, t(r, u, o));
                    }),
                    n
                );
            };
        },
        371644: (r, t, n) => {
            var e = n(302229),
                u = n(984134),
                o = n(223059);
            r.exports = function (r) {
                return r && r.length ? e(r, o, u) : void 0;
            };
        },
        165680: (r, t, n) => {
            var e = n(302229),
                u = n(417606),
                o = n(223059);
            r.exports = function (r) {
                return r && r.length ? e(r, o, u) : void 0;
            };
        },
        161100: (r, t, n) => {
            var e = n(137772);
            r.exports = function () {
                return e.Date.now();
            };
        },
        802689: (r, t, n) => {
            var e = n(782941)();
            r.exports = e;
        },
        651525: (r, t, n) => {
            var e = n(387064),
                u = n(668286),
                o = n(104751),
                i = n(986152),
                a = n(182406);
            r.exports = function (r, t, n) {
                var f = i(r) ? e : o;
                return n && a(r, t, n) && (t = void 0), f(r, u(t, 3));
            };
        },
        900829: (r, t, n) => {
            var e = n(62034),
                u = n(923813),
                o = n(636060),
                i = n(182406),
                a = o(function (r, t) {
                    if (null == r) return [];
                    var n = t.length;
                    return n > 1 && i(r, t[0], t[1]) ? (t = []) : n > 2 && i(t[0], t[1], t[2]) && (t = [t[0]]), u(r, e(t, 1), []);
                });
            r.exports = a;
        },
        912436: (r, t, n) => {
            var e = n(254073),
                u = n(429259);
            r.exports = function (r, t, n) {
                var o = !0,
                    i = !0;
                if ("function" != typeof r) throw new TypeError("Expected a function");
                return u(n) && ((o = "leading" in n ? !!n.leading : o), (i = "trailing" in n ? !!n.trailing : i)), e(r, t, { leading: o, maxWait: t, trailing: i });
            };
        },
        5707: (r, t, n) => {
            var e = n(707642),
                u = 1 / 0;
            r.exports = function (r) {
                return r ? ((r = e(r)) === u || r === -1 / 0 ? 17976931348623157e292 * (r < 0 ? -1 : 1) : r == r ? r : 0) : 0 === r ? r : 0;
            };
        },
        238101: (r, t, n) => {
            var e = n(5707);
            r.exports = function (r) {
                var t = e(r),
                    n = t % 1;
                return t == t ? (n ? t - n : t) : 0;
            };
        },
        707642: (r, t, n) => {
            var e = n(251704),
                u = n(429259),
                o = n(4795),
                i = /^[-+]0x[0-9a-f]+$/i,
                a = /^0b[01]+$/i,
                f = /^0o[0-7]+$/i,
                c = parseInt;
            r.exports = function (r) {
                if ("number" == typeof r) return r;
                if (o(r)) return NaN;
                if (u(r)) {
                    var t = "function" == typeof r.valueOf ? r.valueOf() : r;
                    r = u(t) ? t + "" : t;
                }
                if ("string" != typeof r) return 0 === r ? r : +r;
                r = e(r);
                var n = a.test(r);
                return n || f.test(r) ? c(r.slice(2), n ? 2 : 8) : i.test(r) ? NaN : +r;
            };
        },
        984636: (r, t, n) => {
            var e = n(668286),
                u = n(167326);
            r.exports = function (r, t) {
                return r && r.length ? u(r, e(t, 2)) : [];
            };
        },
        823779: (r, t, n) => {
            var e = n(883126)("toUpperCase");
            r.exports = e;
        },
        856332: (r, t, n) => {
            "use strict";
            n.d(t, { L: () => e });
            class e extends Map {
                constructor(r, t = a) {
                    if ((super(), Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: t } }), null != r)) for (const [t, n] of r) this.set(t, n);
                }
                get(r) {
                    return super.get(u(this, r));
                }
                has(r) {
                    return super.has(u(this, r));
                }
                set(r, t) {
                    return super.set(o(this, r), t);
                }
                delete(r) {
                    return super.delete(i(this, r));
                }
            }
            function u({ _intern: r, _key: t }, n) {
                const e = t(n);
                return r.has(e) ? r.get(e) : n;
            }
            function o({ _intern: r, _key: t }, n) {
                const e = t(n);
                return r.has(e) ? r.get(e) : (r.set(e, n), n);
            }
            function i({ _intern: r, _key: t }, n) {
                const e = t(n);
                return r.has(e) && ((n = r.get(e)), r.delete(e)), n;
            }
            function a(r) {
                return null !== r && "object" == typeof r ? r.valueOf() : r;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-9fd4b2af.f901a30a.js.map
