(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"],
    {
        839515: (t, r, e) => {
            var n = e(638761)(e(137772), "DataView");
            t.exports = n;
        },
        989612: (t, r, e) => {
            var n = e(752118),
                o = e(196909),
                a = e(198138),
                u = e(704174),
                i = e(507942);
            function s(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                for (this.clear(); ++r < e; ) {
                    var n = t[r];
                    this.set(n[0], n[1]);
                }
            }
            (s.prototype.clear = n), (s.prototype.delete = o), (s.prototype.get = a), (s.prototype.has = u), (s.prototype.set = i), (t.exports = s);
        },
        180235: (t, r, e) => {
            var n = e(103945),
                o = e(221846),
                a = e(988028),
                u = e(572344),
                i = e(594769);
            function s(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                for (this.clear(); ++r < e; ) {
                    var n = t[r];
                    this.set(n[0], n[1]);
                }
            }
            (s.prototype.clear = n), (s.prototype.delete = o), (s.prototype.get = a), (s.prototype.has = u), (s.prototype.set = i), (t.exports = s);
        },
        510326: (t, r, e) => {
            var n = e(638761)(e(137772), "Map");
            t.exports = n;
        },
        896738: (t, r, e) => {
            var n = e(792411),
                o = e(436417),
                a = e(586928),
                u = e(479493),
                i = e(724150);
            function s(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                for (this.clear(); ++r < e; ) {
                    var n = t[r];
                    this.set(n[0], n[1]);
                }
            }
            (s.prototype.clear = n), (s.prototype.delete = o), (s.prototype.get = a), (s.prototype.has = u), (s.prototype.set = i), (t.exports = s);
        },
        452760: (t, r, e) => {
            var n = e(638761)(e(137772), "Promise");
            t.exports = n;
        },
        302143: (t, r, e) => {
            var n = e(638761)(e(137772), "Set");
            t.exports = n;
        },
        645386: (t, r, e) => {
            var n = e(896738),
                o = e(352842),
                a = e(52482);
            function u(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                for (this.__data__ = new n(); ++r < e; ) this.add(t[r]);
            }
            (u.prototype.add = u.prototype.push = o), (u.prototype.has = a), (t.exports = u);
        },
        786571: (t, r, e) => {
            var n = e(180235),
                o = e(415243),
                a = e(772858),
                u = e(4417),
                i = e(608605),
                s = e(971418);
            function c(t) {
                var r = (this.__data__ = new n(t));
                this.size = r.size;
            }
            (c.prototype.clear = o), (c.prototype.delete = a), (c.prototype.get = u), (c.prototype.has = i), (c.prototype.set = s), (t.exports = c);
        },
        750857: (t, r, e) => {
            var n = e(137772).Symbol;
            t.exports = n;
        },
        879162: (t, r, e) => {
            var n = e(137772).Uint8Array;
            t.exports = n;
        },
        493215: (t, r, e) => {
            var n = e(638761)(e(137772), "WeakMap");
            t.exports = n;
        },
        867552: (t) => {
            t.exports = function (t, r) {
                for (var e = -1, n = null == t ? 0 : t.length, o = 0, a = []; ++e < n; ) {
                    var u = t[e];
                    r(u, e, t) && (a[o++] = u);
                }
                return a;
            };
        },
        238333: (t, r, e) => {
            var n = e(977832);
            t.exports = function (t, r) {
                return !!(null == t ? 0 : t.length) && n(t, r, 0) > -1;
            };
        },
        834893: (t) => {
            t.exports = function (t, r, e) {
                for (var n = -1, o = null == t ? 0 : t.length; ++n < o; ) if (e(r, t[n])) return !0;
                return !1;
            };
        },
        501634: (t, r, e) => {
            var n = e(936473),
                o = e(379631),
                a = e(986152),
                u = e(273226),
                i = e(239045),
                s = e(777598),
                c = Object.prototype.hasOwnProperty;
            t.exports = function (t, r) {
                var e = a(t),
                    p = !e && o(t),
                    f = !e && !p && u(t),
                    l = !e && !p && !f && s(t),
                    v = e || p || f || l,
                    h = v ? n(t.length, String) : [],
                    _ = h.length;
                for (var b in t) (!r && !c.call(t, b)) || (v && ("length" == b || (f && ("offset" == b || "parent" == b)) || (l && ("buffer" == b || "byteLength" == b || "byteOffset" == b)) || i(b, _))) || h.push(b);
                return h;
            };
        },
        150343: (t) => {
            t.exports = function (t, r) {
                for (var e = -1, n = null == t ? 0 : t.length, o = Array(n); ++e < n; ) o[e] = r(t[e], e, t);
                return o;
            };
        },
        265067: (t) => {
            t.exports = function (t, r) {
                for (var e = -1, n = r.length, o = t.length; ++e < n; ) t[o + e] = r[e];
                return t;
            };
        },
        387064: (t) => {
            t.exports = function (t, r) {
                for (var e = -1, n = null == t ? 0 : t.length; ++e < n; ) if (r(t[e], e, t)) return !0;
                return !1;
            };
        },
        722218: (t, r, e) => {
            var n = e(641225);
            t.exports = function (t, r) {
                for (var e = t.length; e--; ) if (n(t[e][0], r)) return e;
                return -1;
            };
        },
        521359: (t) => {
            t.exports = function (t, r, e, n) {
                for (var o = t.length, a = e + (n ? 1 : -1); n ? a-- : ++a < o; ) if (r(t[a], a, t)) return a;
                return -1;
            };
        },
        513324: (t, r, e) => {
            var n = e(217297),
                o = e(33812);
            t.exports = function (t, r) {
                for (var e = 0, a = (r = n(r, t)).length; null != t && e < a; ) t = t[o(r[e++])];
                return e && e == a ? t : void 0;
            };
        },
        401897: (t, r, e) => {
            var n = e(265067),
                o = e(986152);
            t.exports = function (t, r, e) {
                var a = r(t);
                return o(t) ? a : n(a, e(t));
            };
        },
        853366: (t, r, e) => {
            var n = e(750857),
                o = e(662107),
                a = e(237157),
                u = n ? n.toStringTag : void 0;
            t.exports = function (t) {
                return null == t ? (void 0 === t ? "[object Undefined]" : "[object Null]") : u && u in Object(t) ? o(t) : a(t);
            };
        },
        920187: (t) => {
            t.exports = function (t, r) {
                return null != t && r in Object(t);
            };
        },
        977832: (t, r, e) => {
            var n = e(521359),
                o = e(322195),
                a = e(766024);
            t.exports = function (t, r, e) {
                return r == r ? a(t, r, e) : n(t, o, e);
            };
        },
        115183: (t, r, e) => {
            var n = e(853366),
                o = e(315125);
            t.exports = function (t) {
                return o(t) && "[object Arguments]" == n(t);
            };
        },
        188746: (t, r, e) => {
            var n = e(151952),
                o = e(315125);
            t.exports = function t(r, e, a, u, i) {
                return r === e || (null == r || null == e || (!o(r) && !o(e)) ? r != r && e != e : n(r, e, a, u, t, i));
            };
        },
        151952: (t, r, e) => {
            var n = e(786571),
                o = e(374871),
                a = e(811491),
                u = e(617416),
                i = e(970940),
                s = e(986152),
                c = e(273226),
                p = e(777598),
                f = "[object Arguments]",
                l = "[object Array]",
                v = "[object Object]",
                h = Object.prototype.hasOwnProperty;
            t.exports = function (t, r, e, _, b, y) {
                var x = s(t),
                    d = s(r),
                    j = x ? l : i(t),
                    g = d ? l : i(r),
                    w = (j = j == f ? v : j) == v,
                    O = (g = g == f ? v : g) == v,
                    m = j == g;
                if (m && c(t)) {
                    if (!c(r)) return !1;
                    (x = !0), (w = !1);
                }
                if (m && !w) return y || (y = new n()), x || p(t) ? o(t, r, e, _, b, y) : a(t, r, j, e, _, b, y);
                if (!(1 & e)) {
                    var A = w && h.call(t, "__wrapped__"),
                        z = O && h.call(r, "__wrapped__");
                    if (A || z) {
                        var S = A ? t.value() : t,
                            k = z ? r.value() : r;
                        return y || (y = new n()), b(S, k, e, _, y);
                    }
                }
                return !!m && (y || (y = new n()), u(t, r, e, _, b, y));
            };
        },
        337036: (t, r, e) => {
            var n = e(786571),
                o = e(188746);
            t.exports = function (t, r, e, a) {
                var u = e.length,
                    i = u,
                    s = !a;
                if (null == t) return !i;
                for (t = Object(t); u--; ) {
                    var c = e[u];
                    if (s && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
                }
                for (; ++u < i; ) {
                    var p = (c = e[u])[0],
                        f = t[p],
                        l = c[1];
                    if (s && c[2]) {
                        if (void 0 === f && !(p in t)) return !1;
                    } else {
                        var v = new n();
                        if (a) var h = a(f, l, p, t, r, v);
                        if (!(void 0 === h ? o(l, f, 3, a, v) : h)) return !1;
                    }
                }
                return !0;
            };
        },
        322195: (t) => {
            t.exports = function (t) {
                return t != t;
            };
        },
        906840: (t, r, e) => {
            var n = e(161049),
                o = e(247394),
                a = e(429259),
                u = e(187035),
                i = /^\[object .+?Constructor\]$/,
                s = Function.prototype,
                c = Object.prototype,
                p = s.toString,
                f = c.hasOwnProperty,
                l = RegExp(
                    "^" +
                        p
                            .call(f)
                            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                        "$",
                );
            t.exports = function (t) {
                return !(!a(t) || o(t)) && (n(t) ? l : i).test(u(t));
            };
        },
        435522: (t, r, e) => {
            var n = e(853366),
                o = e(761158),
                a = e(315125),
                u = {};
            (u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0),
                (u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1),
                (t.exports = function (t) {
                    return a(t) && o(t.length) && !!u[n(t)];
                });
        },
        668286: (t, r, e) => {
            var n = e(626423),
                o = e(674716),
                a = e(223059),
                u = e(986152),
                i = e(365798);
            t.exports = function (t) {
                return "function" == typeof t ? t : null == t ? a : "object" == typeof t ? (u(t) ? o(t[0], t[1]) : n(t)) : i(t);
            };
        },
        286411: (t, r, e) => {
            var n = e(616001),
                o = e(254248),
                a = Object.prototype.hasOwnProperty;
            t.exports = function (t) {
                if (!n(t)) return o(t);
                var r = [];
                for (var e in Object(t)) a.call(t, e) && "constructor" != e && r.push(e);
                return r;
            };
        },
        626423: (t, r, e) => {
            var n = e(337036),
                o = e(349882),
                a = e(973477);
            t.exports = function (t) {
                var r = o(t);
                return 1 == r.length && r[0][2]
                    ? a(r[0][0], r[0][1])
                    : function (e) {
                          return e === t || n(e, t, r);
                      };
            };
        },
        674716: (t, r, e) => {
            var n = e(188746),
                o = e(72579),
                a = e(595041),
                u = e(921401),
                i = e(328792),
                s = e(973477),
                c = e(33812);
            t.exports = function (t, r) {
                return u(t) && i(r)
                    ? s(c(t), r)
                    : function (e) {
                          var u = o(e, t);
                          return void 0 === u && u === r ? a(e, t) : n(r, u, 3);
                      };
            };
        },
        220256: (t) => {
            t.exports = function (t) {
                return function (r) {
                    return null == r ? void 0 : r[t];
                };
            };
        },
        882952: (t, r, e) => {
            var n = e(513324);
            t.exports = function (t) {
                return function (r) {
                    return n(r, t);
                };
            };
        },
        936473: (t) => {
            t.exports = function (t, r) {
                for (var e = -1, n = Array(t); ++e < t; ) n[e] = r(e);
                return n;
            };
        },
        601054: (t, r, e) => {
            var n = e(750857),
                o = e(150343),
                a = e(986152),
                u = e(4795),
                i = n ? n.prototype : void 0,
                s = i ? i.toString : void 0;
            t.exports = function t(r) {
                if ("string" == typeof r) return r;
                if (a(r)) return o(r, t) + "";
                if (u(r)) return s ? s.call(r) : "";
                var e = r + "";
                return "0" == e && 1 / r == -1 / 0 ? "-0" : e;
            };
        },
        947826: (t) => {
            t.exports = function (t) {
                return function (r) {
                    return t(r);
                };
            };
        },
        759950: (t) => {
            t.exports = function (t, r) {
                return t.has(r);
            };
        },
        217297: (t, r, e) => {
            var n = e(986152),
                o = e(921401),
                a = e(654452),
                u = e(466188);
            t.exports = function (t, r) {
                return n(t) ? t : o(t, r) ? [t] : a(u(t));
            };
        },
        724019: (t, r, e) => {
            var n = e(137772)["__core-js_shared__"];
            t.exports = n;
        },
        374871: (t, r, e) => {
            var n = e(645386),
                o = e(387064),
                a = e(759950);
            t.exports = function (t, r, e, u, i, s) {
                var c = 1 & e,
                    p = t.length,
                    f = r.length;
                if (p != f && !(c && f > p)) return !1;
                var l = s.get(t),
                    v = s.get(r);
                if (l && v) return l == r && v == t;
                var h = -1,
                    _ = !0,
                    b = 2 & e ? new n() : void 0;
                for (s.set(t, r), s.set(r, t); ++h < p; ) {
                    var y = t[h],
                        x = r[h];
                    if (u) var d = c ? u(x, y, h, r, t, s) : u(y, x, h, t, r, s);
                    if (void 0 !== d) {
                        if (d) continue;
                        _ = !1;
                        break;
                    }
                    if (b) {
                        if (
                            !o(r, function (t, r) {
                                if (!a(b, r) && (y === t || i(y, t, e, u, s))) return b.push(r);
                            })
                        ) {
                            _ = !1;
                            break;
                        }
                    } else if (y !== x && !i(y, x, e, u, s)) {
                        _ = !1;
                        break;
                    }
                }
                return s.delete(t), s.delete(r), _;
            };
        },
        811491: (t, r, e) => {
            var n = e(750857),
                o = e(879162),
                a = e(641225),
                u = e(374871),
                i = e(875179),
                s = e(16909),
                c = n ? n.prototype : void 0,
                p = c ? c.valueOf : void 0;
            t.exports = function (t, r, e, n, c, f, l) {
                switch (e) {
                    case "[object DataView]":
                        if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset) return !1;
                        (t = t.buffer), (r = r.buffer);
                    case "[object ArrayBuffer]":
                        return !(t.byteLength != r.byteLength || !f(new o(t), new o(r)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return a(+t, +r);
                    case "[object Error]":
                        return t.name == r.name && t.message == r.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return t == r + "";
                    case "[object Map]":
                        var v = i;
                    case "[object Set]":
                        var h = 1 & n;
                        if ((v || (v = s), t.size != r.size && !h)) return !1;
                        var _ = l.get(t);
                        if (_) return _ == r;
                        (n |= 2), l.set(t, r);
                        var b = u(v(t), v(r), n, c, f, l);
                        return l.delete(t), b;
                    case "[object Symbol]":
                        if (p) return p.call(t) == p.call(r);
                }
                return !1;
            };
        },
        617416: (t, r, e) => {
            var n = e(913483),
                o = Object.prototype.hasOwnProperty;
            t.exports = function (t, r, e, a, u, i) {
                var s = 1 & e,
                    c = n(t),
                    p = c.length;
                if (p != n(r).length && !s) return !1;
                for (var f = p; f--; ) {
                    var l = c[f];
                    if (!(s ? l in r : o.call(r, l))) return !1;
                }
                var v = i.get(t),
                    h = i.get(r);
                if (v && h) return v == r && h == t;
                var _ = !0;
                i.set(t, r), i.set(r, t);
                for (var b = s; ++f < p; ) {
                    var y = t[(l = c[f])],
                        x = r[l];
                    if (a) var d = s ? a(x, y, l, r, t, i) : a(y, x, l, t, r, i);
                    if (!(void 0 === d ? y === x || u(y, x, e, a, i) : d)) {
                        _ = !1;
                        break;
                    }
                    b || (b = "constructor" == l);
                }
                if (_ && !b) {
                    var j = t.constructor,
                        g = r.constructor;
                    j == g || !("constructor" in t) || !("constructor" in r) || ("function" == typeof j && j instanceof j && "function" == typeof g && g instanceof g) || (_ = !1);
                }
                return i.delete(t), i.delete(r), _;
            };
        },
        51242: (t, r, e) => {
            var n = "object" == typeof e.g && e.g && e.g.Object === Object && e.g;
            t.exports = n;
        },
        913483: (t, r, e) => {
            var n = e(401897),
                o = e(480633),
                a = e(690249);
            t.exports = function (t) {
                return n(t, a, o);
            };
        },
        527937: (t, r, e) => {
            var n = e(198304);
            t.exports = function (t, r) {
                var e = t.__data__;
                return n(r) ? e["string" == typeof r ? "string" : "hash"] : e.map;
            };
        },
        349882: (t, r, e) => {
            var n = e(328792),
                o = e(690249);
            t.exports = function (t) {
                for (var r = o(t), e = r.length; e--; ) {
                    var a = r[e],
                        u = t[a];
                    r[e] = [a, u, n(u)];
                }
                return r;
            };
        },
        638761: (t, r, e) => {
            var n = e(906840),
                o = e(98109);
            t.exports = function (t, r) {
                var e = o(t, r);
                return n(e) ? e : void 0;
            };
        },
        662107: (t, r, e) => {
            var n = e(750857),
                o = Object.prototype,
                a = o.hasOwnProperty,
                u = o.toString,
                i = n ? n.toStringTag : void 0;
            t.exports = function (t) {
                var r = a.call(t, i),
                    e = t[i];
                try {
                    t[i] = void 0;
                    var n = !0;
                } catch (t) {}
                var o = u.call(t);
                return n && (r ? (t[i] = e) : delete t[i]), o;
            };
        },
        480633: (t, r, e) => {
            var n = e(867552),
                o = e(30981),
                a = Object.prototype.propertyIsEnumerable,
                u = Object.getOwnPropertySymbols,
                i = u
                    ? function (t) {
                          return null == t
                              ? []
                              : ((t = Object(t)),
                                n(u(t), function (r) {
                                    return a.call(t, r);
                                }));
                      }
                    : o;
            t.exports = i;
        },
        970940: (t, r, e) => {
            var n = e(839515),
                o = e(510326),
                a = e(452760),
                u = e(302143),
                i = e(493215),
                s = e(853366),
                c = e(187035),
                p = "[object Map]",
                f = "[object Promise]",
                l = "[object Set]",
                v = "[object WeakMap]",
                h = "[object DataView]",
                _ = c(n),
                b = c(o),
                y = c(a),
                x = c(u),
                d = c(i),
                j = s;
            ((n && j(new n(new ArrayBuffer(1))) != h) || (o && j(new o()) != p) || (a && j(a.resolve()) != f) || (u && j(new u()) != l) || (i && j(new i()) != v)) &&
                (j = function (t) {
                    var r = s(t),
                        e = "[object Object]" == r ? t.constructor : void 0,
                        n = e ? c(e) : "";
                    if (n)
                        switch (n) {
                            case _:
                                return h;
                            case b:
                                return p;
                            case y:
                                return f;
                            case x:
                                return l;
                            case d:
                                return v;
                        }
                    return r;
                }),
                (t.exports = j);
        },
        98109: (t) => {
            t.exports = function (t, r) {
                return null == t ? void 0 : t[r];
            };
        },
        601369: (t, r, e) => {
            var n = e(217297),
                o = e(379631),
                a = e(986152),
                u = e(239045),
                i = e(761158),
                s = e(33812);
            t.exports = function (t, r, e) {
                for (var c = -1, p = (r = n(r, t)).length, f = !1; ++c < p; ) {
                    var l = s(r[c]);
                    if (!(f = null != t && e(t, l))) break;
                    t = t[l];
                }
                return f || ++c != p ? f : !!(p = null == t ? 0 : t.length) && i(p) && u(l, p) && (a(t) || o(t));
            };
        },
        752118: (t, r, e) => {
            var n = e(399191);
            t.exports = function () {
                (this.__data__ = n ? n(null) : {}), (this.size = 0);
            };
        },
        196909: (t) => {
            t.exports = function (t) {
                var r = this.has(t) && delete this.__data__[t];
                return (this.size -= r ? 1 : 0), r;
            };
        },
        198138: (t, r, e) => {
            var n = e(399191),
                o = Object.prototype.hasOwnProperty;
            t.exports = function (t) {
                var r = this.__data__;
                if (n) {
                    var e = r[t];
                    return "__lodash_hash_undefined__" === e ? void 0 : e;
                }
                return o.call(r, t) ? r[t] : void 0;
            };
        },
        704174: (t, r, e) => {
            var n = e(399191),
                o = Object.prototype.hasOwnProperty;
            t.exports = function (t) {
                var r = this.__data__;
                return n ? void 0 !== r[t] : o.call(r, t);
            };
        },
        507942: (t, r, e) => {
            var n = e(399191);
            t.exports = function (t, r) {
                var e = this.__data__;
                return (this.size += this.has(t) ? 0 : 1), (e[t] = n && void 0 === r ? "__lodash_hash_undefined__" : r), this;
            };
        },
        239045: (t) => {
            var r = /^(?:0|[1-9]\d*)$/;
            t.exports = function (t, e) {
                var n = typeof t;
                return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || ("symbol" != n && r.test(t))) && t > -1 && t % 1 == 0 && t < e;
            };
        },
        921401: (t, r, e) => {
            var n = e(986152),
                o = e(4795),
                a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                u = /^\w*$/;
            t.exports = function (t, r) {
                if (n(t)) return !1;
                var e = typeof t;
                return !("number" != e && "symbol" != e && "boolean" != e && null != t && !o(t)) || u.test(t) || !a.test(t) || (null != r && t in Object(r));
            };
        },
        198304: (t) => {
            t.exports = function (t) {
                var r = typeof t;
                return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t;
            };
        },
        247394: (t, r, e) => {
            var n,
                o = e(724019),
                a = (n = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + n : "";
            t.exports = function (t) {
                return !!a && a in t;
            };
        },
        616001: (t) => {
            var r = Object.prototype;
            t.exports = function (t) {
                var e = t && t.constructor;
                return t === (("function" == typeof e && e.prototype) || r);
            };
        },
        328792: (t, r, e) => {
            var n = e(429259);
            t.exports = function (t) {
                return t == t && !n(t);
            };
        },
        103945: (t) => {
            t.exports = function () {
                (this.__data__ = []), (this.size = 0);
            };
        },
        221846: (t, r, e) => {
            var n = e(722218),
                o = Array.prototype.splice;
            t.exports = function (t) {
                var r = this.__data__,
                    e = n(r, t);
                return !(e < 0) && (e == r.length - 1 ? r.pop() : o.call(r, e, 1), --this.size, !0);
            };
        },
        988028: (t, r, e) => {
            var n = e(722218);
            t.exports = function (t) {
                var r = this.__data__,
                    e = n(r, t);
                return e < 0 ? void 0 : r[e][1];
            };
        },
        572344: (t, r, e) => {
            var n = e(722218);
            t.exports = function (t) {
                return n(this.__data__, t) > -1;
            };
        },
        594769: (t, r, e) => {
            var n = e(722218);
            t.exports = function (t, r) {
                var e = this.__data__,
                    o = n(e, t);
                return o < 0 ? (++this.size, e.push([t, r])) : (e[o][1] = r), this;
            };
        },
        792411: (t, r, e) => {
            var n = e(989612),
                o = e(180235),
                a = e(510326);
            t.exports = function () {
                (this.size = 0), (this.__data__ = { hash: new n(), map: new (a || o)(), string: new n() });
            };
        },
        436417: (t, r, e) => {
            var n = e(527937);
            t.exports = function (t) {
                var r = n(this, t).delete(t);
                return (this.size -= r ? 1 : 0), r;
            };
        },
        586928: (t, r, e) => {
            var n = e(527937);
            t.exports = function (t) {
                return n(this, t).get(t);
            };
        },
        479493: (t, r, e) => {
            var n = e(527937);
            t.exports = function (t) {
                return n(this, t).has(t);
            };
        },
        724150: (t, r, e) => {
            var n = e(527937);
            t.exports = function (t, r) {
                var e = n(this, t),
                    o = e.size;
                return e.set(t, r), (this.size += e.size == o ? 0 : 1), this;
            };
        },
        875179: (t) => {
            t.exports = function (t) {
                var r = -1,
                    e = Array(t.size);
                return (
                    t.forEach(function (t, n) {
                        e[++r] = [n, t];
                    }),
                    e
                );
            };
        },
        973477: (t) => {
            t.exports = function (t, r) {
                return function (e) {
                    return null != e && e[t] === r && (void 0 !== r || t in Object(e));
                };
            };
        },
        777777: (t, r, e) => {
            var n = e(830733);
            t.exports = function (t) {
                var r = n(t, function (t) {
                        return 500 === e.size && e.clear(), t;
                    }),
                    e = r.cache;
                return r;
            };
        },
        399191: (t, r, e) => {
            var n = e(638761)(Object, "create");
            t.exports = n;
        },
        254248: (t, r, e) => {
            var n = e(860241)(Object.keys, Object);
            t.exports = n;
        },
        704146: (t, r, e) => {
            t = e.nmd(t);
            var n = e(51242),
                o = r && !r.nodeType && r,
                a = o && t && !t.nodeType && t,
                u = a && a.exports === o && n.process,
                i = (function () {
                    try {
                        var t = a && a.require && a.require("util").types;
                        return t || (u && u.binding && u.binding("util"));
                    } catch (t) {}
                })();
            t.exports = i;
        },
        237157: (t) => {
            var r = Object.prototype.toString;
            t.exports = function (t) {
                return r.call(t);
            };
        },
        860241: (t) => {
            t.exports = function (t, r) {
                return function (e) {
                    return t(r(e));
                };
            };
        },
        137772: (t, r, e) => {
            var n = e(51242),
                o = "object" == typeof self && self && self.Object === Object && self,
                a = n || o || Function("return this")();
            t.exports = a;
        },
        352842: (t) => {
            t.exports = function (t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this;
            };
        },
        52482: (t) => {
            t.exports = function (t) {
                return this.__data__.has(t);
            };
        },
        16909: (t) => {
            t.exports = function (t) {
                var r = -1,
                    e = Array(t.size);
                return (
                    t.forEach(function (t) {
                        e[++r] = t;
                    }),
                    e
                );
            };
        },
        415243: (t, r, e) => {
            var n = e(180235);
            t.exports = function () {
                (this.__data__ = new n()), (this.size = 0);
            };
        },
        772858: (t) => {
            t.exports = function (t) {
                var r = this.__data__,
                    e = r.delete(t);
                return (this.size = r.size), e;
            };
        },
        4417: (t) => {
            t.exports = function (t) {
                return this.__data__.get(t);
            };
        },
        608605: (t) => {
            t.exports = function (t) {
                return this.__data__.has(t);
            };
        },
        971418: (t, r, e) => {
            var n = e(180235),
                o = e(510326),
                a = e(896738);
            t.exports = function (t, r) {
                var e = this.__data__;
                if (e instanceof n) {
                    var u = e.__data__;
                    if (!o || u.length < 199) return u.push([t, r]), (this.size = ++e.size), this;
                    e = this.__data__ = new a(u);
                }
                return e.set(t, r), (this.size = e.size), this;
            };
        },
        766024: (t) => {
            t.exports = function (t, r, e) {
                for (var n = e - 1, o = t.length; ++n < o; ) if (t[n] === r) return n;
                return -1;
            };
        },
        654452: (t, r, e) => {
            var n = e(777777),
                o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                a = /\\(\\)?/g,
                u = n(function (t) {
                    var r = [];
                    return (
                        46 === t.charCodeAt(0) && r.push(""),
                        t.replace(o, function (t, e, n, o) {
                            r.push(n ? o.replace(a, "$1") : e || t);
                        }),
                        r
                    );
                });
            t.exports = u;
        },
        33812: (t, r, e) => {
            var n = e(4795);
            t.exports = function (t) {
                if ("string" == typeof t || n(t)) return t;
                var r = t + "";
                return "0" == r && 1 / t == -1 / 0 ? "-0" : r;
            };
        },
        187035: (t) => {
            var r = Function.prototype.toString;
            t.exports = function (t) {
                if (null != t) {
                    try {
                        return r.call(t);
                    } catch (t) {}
                    try {
                        return t + "";
                    } catch (t) {}
                }
                return "";
            };
        },
        641225: (t) => {
            t.exports = function (t, r) {
                return t === r || (t != t && r != r);
            };
        },
        72579: (t, r, e) => {
            var n = e(513324);
            t.exports = function (t, r, e) {
                var o = null == t ? void 0 : n(t, r);
                return void 0 === o ? e : o;
            };
        },
        595041: (t, r, e) => {
            var n = e(920187),
                o = e(601369);
            t.exports = function (t, r) {
                return null != t && o(t, r, n);
            };
        },
        223059: (t) => {
            t.exports = function (t) {
                return t;
            };
        },
        379631: (t, r, e) => {
            var n = e(115183),
                o = e(315125),
                a = Object.prototype,
                u = a.hasOwnProperty,
                i = a.propertyIsEnumerable,
                s = n(
                    (function () {
                        return arguments;
                    })(),
                )
                    ? n
                    : function (t) {
                          return o(t) && u.call(t, "callee") && !i.call(t, "callee");
                      };
            t.exports = s;
        },
        986152: (t) => {
            var r = Array.isArray;
            t.exports = r;
        },
        867878: (t, r, e) => {
            var n = e(161049),
                o = e(761158);
            t.exports = function (t) {
                return null != t && o(t.length) && !n(t);
            };
        },
        273226: (t, r, e) => {
            t = e.nmd(t);
            var n = e(137772),
                o = e(836330),
                a = r && !r.nodeType && r,
                u = a && t && !t.nodeType && t,
                i = u && u.exports === a ? n.Buffer : void 0,
                s = (i ? i.isBuffer : void 0) || o;
            t.exports = s;
        },
        161049: (t, r, e) => {
            var n = e(853366),
                o = e(429259);
            t.exports = function (t) {
                if (!o(t)) return !1;
                var r = n(t);
                return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r;
            };
        },
        761158: (t) => {
            t.exports = function (t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
            };
        },
        429259: (t) => {
            t.exports = function (t) {
                var r = typeof t;
                return null != t && ("object" == r || "function" == r);
            };
        },
        315125: (t) => {
            t.exports = function (t) {
                return null != t && "object" == typeof t;
            };
        },
        4795: (t, r, e) => {
            var n = e(853366),
                o = e(315125);
            t.exports = function (t) {
                return "symbol" == typeof t || (o(t) && "[object Symbol]" == n(t));
            };
        },
        777598: (t, r, e) => {
            var n = e(435522),
                o = e(947826),
                a = e(704146),
                u = a && a.isTypedArray,
                i = u ? o(u) : n;
            t.exports = i;
        },
        690249: (t, r, e) => {
            var n = e(501634),
                o = e(286411),
                a = e(867878);
            t.exports = function (t) {
                return a(t) ? n(t) : o(t);
            };
        },
        830733: (t, r, e) => {
            var n = e(896738);
            function o(t, r) {
                if ("function" != typeof t || (null != r && "function" != typeof r)) throw new TypeError("Expected a function");
                var e = function () {
                    var n = arguments,
                        o = r ? r.apply(this, n) : n[0],
                        a = e.cache;
                    if (a.has(o)) return a.get(o);
                    var u = t.apply(this, n);
                    return (e.cache = a.set(o, u) || a), u;
                };
                return (e.cache = new (o.Cache || n)()), e;
            }
            (o.Cache = n), (t.exports = o);
        },
        334291: (t) => {
            t.exports = function () {};
        },
        365798: (t, r, e) => {
            var n = e(220256),
                o = e(882952),
                a = e(921401),
                u = e(33812);
            t.exports = function (t) {
                return a(t) ? n(u(t)) : o(t);
            };
        },
        30981: (t) => {
            t.exports = function () {
                return [];
            };
        },
        836330: (t) => {
            t.exports = function () {
                return !1;
            };
        },
        466188: (t, r, e) => {
            var n = e(601054);
            t.exports = function (t) {
                return null == t ? "" : n(t);
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l.6c15510a.js.map
