"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b75711ed"],
    {
        840489: (t, n, r) => {
            function e(t) {
                var n,
                    r,
                    i = "";
                if ("string" == typeof t || "number" == typeof t) i += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t)) {
                        var o = t.length;
                        for (n = 0; n < o; n++) t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
                    } else for (r in t) t[r] && (i && (i += " "), (i += r));
                return i;
            }
            function i() {
                for (var t, n, r = 0, i = "", o = arguments.length; r < o; r++) (t = arguments[r]) && (n = e(t)) && (i && (i += " "), (i += n));
                return i;
            }
            r.d(n, { W: () => i, Z: () => o });
            const o = i;
        },
        886801: (t, n, r) => {
            function e(t, n) {
                return null == t || null == n ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
            }
            r.d(n, { Z: () => e });
        },
        610940: (t, n, r) => {
            r.d(n, { ZP: () => u });
            var e = r(886801),
                i = r(763137),
                o = r(999480);
            const a = (0, i.Z)(e.Z),
                l = a.right,
                u = (a.left, (0, i.Z)(o.Z).center, l);
        },
        763137: (t, n, r) => {
            r.d(n, { Z: () => o });
            var e = r(886801);
            function i(t, n) {
                return null == t || null == n ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
            }
            function o(t) {
                let n, r, o;
                function l(t, e, i = 0, o = t.length) {
                    if (i < o) {
                        if (0 !== n(e, e)) return o;
                        do {
                            const n = (i + o) >>> 1;
                            r(t[n], e) < 0 ? (i = n + 1) : (o = n);
                        } while (i < o);
                    }
                    return i;
                }
                return (
                    2 !== t.length ? ((n = e.Z), (r = (n, r) => (0, e.Z)(t(n), r)), (o = (n, r) => t(n) - r)) : ((n = t === e.Z || t === i ? t : a), (r = t), (o = t)),
                    {
                        left: l,
                        center: function (t, n, r = 0, e = t.length) {
                            const i = l(t, n, r, e - 1);
                            return i > r && o(t[i - 1], n) > -o(t[i], n) ? i - 1 : i;
                        },
                        right: function (t, e, i = 0, o = t.length) {
                            if (i < o) {
                                if (0 !== n(e, e)) return o;
                                do {
                                    const n = (i + o) >>> 1;
                                    r(t[n], e) <= 0 ? (i = n + 1) : (o = n);
                                } while (i < o);
                            }
                            return i;
                        },
                    }
                );
            }
            function a() {
                return 0;
            }
        },
        999480: (t, n, r) => {
            function e(t) {
                return null === t ? NaN : +t;
            }
            function* i(t, n) {
                if (void 0 === n) for (let n of t) null != n && (n = +n) >= n && (yield n);
                else {
                    let r = -1;
                    for (let e of t) null != (e = n(e, ++r, t)) && (e = +e) >= e && (yield e);
                }
            }
            r.d(n, { K: () => i, Z: () => e });
        },
        736376: (t, n, r) => {
            function e(t, n) {
                let r;
                if (void 0 === n) for (const n of t) null != n && (r < n || (void 0 === r && n >= n)) && (r = n);
                else {
                    let e = -1;
                    for (let i of t) null != (i = n(i, ++e, t)) && (r < i || (void 0 === r && i >= i)) && (r = i);
                }
                return r;
            }
            function i(t, n) {
                let r;
                if (void 0 === n) for (const n of t) null != n && (r > n || (void 0 === r && n >= n)) && (r = n);
                else {
                    let e = -1;
                    for (let i of t) null != (i = n(i, ++e, t)) && (r > i || (void 0 === r && i >= i)) && (r = i);
                }
                return r;
            }
            r.d(n, { ZP: () => c, s7: () => h });
            var o = r(886801);
            function a(t = o.Z) {
                if (t === o.Z) return l;
                if ("function" != typeof t) throw new TypeError("compare is not a function");
                return (n, r) => {
                    const e = t(n, r);
                    return e || 0 === e ? e : (0 === t(r, r)) - (0 === t(n, n));
                };
            }
            function l(t, n) {
                return (null == t || !(t >= t)) - (null == n || !(n >= n)) || (t < n ? -1 : t > n ? 1 : 0);
            }
            function u(t, n, r = 0, e = 1 / 0, i) {
                if (((n = Math.floor(n)), (r = Math.floor(Math.max(0, r))), (e = Math.floor(Math.min(t.length - 1, e))), !(r <= n && n <= e))) return t;
                for (i = void 0 === i ? l : a(i); e > r; ) {
                    if (e - r > 600) {
                        const o = e - r + 1,
                            a = n - r + 1,
                            l = Math.log(o),
                            f = 0.5 * Math.exp((2 * l) / 3),
                            s = 0.5 * Math.sqrt((l * f * (o - f)) / o) * (a - o / 2 < 0 ? -1 : 1);
                        u(t, n, Math.max(r, Math.floor(n - (a * f) / o + s)), Math.min(e, Math.floor(n + ((o - a) * f) / o + s)), i);
                    }
                    const o = t[n];
                    let a = r,
                        l = e;
                    for (f(t, r, n), i(t[e], o) > 0 && f(t, r, e); a < l; ) {
                        for (f(t, a, l), ++a, --l; i(t[a], o) < 0; ) ++a;
                        for (; i(t[l], o) > 0; ) --l;
                    }
                    0 === i(t[r], o) ? f(t, r, l) : (++l, f(t, l, e)), l <= n && (r = l + 1), n <= l && (e = l - 1);
                }
                return t;
            }
            function f(t, n, r) {
                const e = t[n];
                (t[n] = t[r]), (t[r] = e);
            }
            var s = r(999480);
            function c(t, n, r) {
                if ((o = (t = Float64Array.from((0, s.K)(t, r))).length) && !isNaN((n = +n))) {
                    if (n <= 0 || o < 2) return i(t);
                    if (n >= 1) return e(t);
                    var o,
                        a = (o - 1) * n,
                        l = Math.floor(a),
                        f = e(u(t, l).subarray(0, l + 1));
                    return f + (i(t.subarray(l + 1)) - f) * (a - l);
                }
            }
            function h(t, n, r = s.Z) {
                if ((e = t.length) && !isNaN((n = +n))) {
                    if (n <= 0 || e < 2) return +r(t[0], 0, t);
                    if (n >= 1) return +r(t[e - 1], e - 1, t);
                    var e,
                        i = (e - 1) * n,
                        o = Math.floor(i),
                        a = +r(t[o], o, t);
                    return a + (+r(t[o + 1], o + 1, t) - a) * (i - o);
                }
            }
        },
        536273: (t, n, r) => {
            function e(t, n, r) {
                (t = +t), (n = +n), (r = (i = arguments.length) < 2 ? ((n = t), (t = 0), 1) : i < 3 ? 1 : +r);
                for (var e = -1, i = 0 | Math.max(0, Math.ceil((n - t) / r)), o = new Array(i); ++e < i; ) o[e] = t + e * r;
                return o;
            }
            r.d(n, { Z: () => e });
        },
        452497: (t, n, r) => {
            r.d(n, { G9: () => u, ZP: () => l, ly: () => f });
            const e = Math.sqrt(50),
                i = Math.sqrt(10),
                o = Math.sqrt(2);
            function a(t, n, r) {
                const l = (n - t) / Math.max(0, r),
                    u = Math.floor(Math.log10(l)),
                    f = l / Math.pow(10, u),
                    s = f >= e ? 10 : f >= i ? 5 : f >= o ? 2 : 1;
                let c, h, d;
                return u < 0 ? ((d = Math.pow(10, -u) / s), (c = Math.round(t * d)), (h = Math.round(n * d)), c / d < t && ++c, h / d > n && --h, (d = -d)) : ((d = Math.pow(10, u) * s), (c = Math.round(t / d)), (h = Math.round(n / d)), c * d < t && ++c, h * d > n && --h), h < c && 0.5 <= r && r < 2 ? a(t, n, 2 * r) : [c, h, d];
            }
            function l(t, n, r) {
                if (!((r = +r) > 0)) return [];
                if ((t = +t) === (n = +n)) return [t];
                const e = n < t,
                    [i, o, l] = e ? a(n, t, r) : a(t, n, r);
                if (!(o >= i)) return [];
                const u = o - i + 1,
                    f = new Array(u);
                if (e)
                    if (l < 0) for (let t = 0; t < u; ++t) f[t] = (o - t) / -l;
                    else for (let t = 0; t < u; ++t) f[t] = (o - t) * l;
                else if (l < 0) for (let t = 0; t < u; ++t) f[t] = (i + t) / -l;
                else for (let t = 0; t < u; ++t) f[t] = (i + t) * l;
                return f;
            }
            function u(t, n, r) {
                return a((t = +t), (n = +n), (r = +r))[2];
            }
            function f(t, n, r) {
                r = +r;
                const e = (n = +n) < (t = +t),
                    i = e ? u(n, t, r) : u(t, n, r);
                return (e ? -1 : 1) * (i < 0 ? 1 / -i : i);
            }
        },
        548230: (t, n, r) => {
            r.d(n, { WU: () => c, jH: () => h });
            var e = r(573857);
            var i = r(39255);
            var o,
                a = r(64380);
            function l(t, n) {
                var r = (0, a.V)(t, n);
                if (!r) return t + "";
                var e = r[0],
                    i = r[1];
                return i < 0 ? "0." + new Array(-i).join("0") + e : e.length > i + 1 ? e.slice(0, i + 1) + "." + e.slice(i + 1) : e + new Array(i - e.length + 2).join("0");
            }
            const u = {
                "%": (t, n) => (100 * t).toFixed(n),
                b: (t) => Math.round(t).toString(2),
                c: (t) => t + "",
                d: a.Z,
                e: (t, n) => t.toExponential(n),
                f: (t, n) => t.toFixed(n),
                g: (t, n) => t.toPrecision(n),
                o: (t) => Math.round(t).toString(8),
                p: (t, n) => l(100 * t, n),
                r: l,
                s: function (t, n) {
                    var r = (0, a.V)(t, n);
                    if (!r) return t + "";
                    var e = r[0],
                        i = r[1],
                        l = i - (o = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                        u = e.length;
                    return l === u ? e : l > u ? e + new Array(l - u + 1).join("0") : l > 0 ? e.slice(0, l) + "." + e.slice(l) : "0." + new Array(1 - l).join("0") + (0, a.V)(t, Math.max(0, n + l - 1))[0];
                },
                X: (t) => Math.round(t).toString(16).toUpperCase(),
                x: (t) => Math.round(t).toString(16),
            };
            function f(t) {
                return t;
            }
            var s,
                c,
                h,
                d = Array.prototype.map,
                v = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
            function g(t) {
                var n,
                    r,
                    a =
                        void 0 === t.grouping || void 0 === t.thousands
                            ? f
                            : ((n = d.call(t.grouping, Number)),
                              (r = t.thousands + ""),
                              function (t, e) {
                                  for (var i = t.length, o = [], a = 0, l = n[0], u = 0; i > 0 && l > 0 && (u + l + 1 > e && (l = Math.max(1, e - u)), o.push(t.substring((i -= l), i + l)), !((u += l + 1) > e)); ) l = n[(a = (a + 1) % n.length)];
                                  return o.reverse().join(r);
                              }),
                    l = void 0 === t.currency ? "" : t.currency[0] + "",
                    s = void 0 === t.currency ? "" : t.currency[1] + "",
                    c = void 0 === t.decimal ? "." : t.decimal + "",
                    h =
                        void 0 === t.numerals
                            ? f
                            : (function (t) {
                                  return function (n) {
                                      return n.replace(/[0-9]/g, function (n) {
                                          return t[+n];
                                      });
                                  };
                              })(d.call(t.numerals, String)),
                    g = void 0 === t.percent ? "%" : t.percent + "",
                    m = void 0 === t.minus ? "−" : t.minus + "",
                    M = void 0 === t.nan ? "NaN" : t.nan + "";
                function p(t) {
                    var n = (t = (0, i.Z)(t)).fill,
                        r = t.align,
                        e = t.sign,
                        f = t.symbol,
                        d = t.zero,
                        p = t.width,
                        y = t.comma,
                        b = t.precision,
                        w = t.trim,
                        Z = t.type;
                    "n" === Z ? ((y = !0), (Z = "g")) : u[Z] || (void 0 === b && (b = 12), (w = !0), (Z = "g")), (d || ("0" === n && "=" === r)) && ((d = !0), (n = "0"), (r = "="));
                    var x = "$" === f ? l : "#" === f && /[boxX]/.test(Z) ? "0" + Z.toLowerCase() : "",
                        N = "$" === f ? s : /[%p]/.test(Z) ? g : "",
                        A = u[Z],
                        k = /[defgprs%]/.test(Z);
                    function S(t) {
                        var i,
                            l,
                            u,
                            f = x,
                            s = N;
                        if ("c" === Z) (s = A(t) + s), (t = "");
                        else {
                            var g = (t = +t) < 0 || 1 / t < 0;
                            if (
                                ((t = isNaN(t) ? M : A(Math.abs(t), b)),
                                w &&
                                    (t = (function (t) {
                                        t: for (var n, r = t.length, e = 1, i = -1; e < r; ++e)
                                            switch (t[e]) {
                                                case ".":
                                                    i = n = e;
                                                    break;
                                                case "0":
                                                    0 === i && (i = e), (n = e);
                                                    break;
                                                default:
                                                    if (!+t[e]) break t;
                                                    i > 0 && (i = 0);
                                            }
                                        return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
                                    })(t)),
                                g && 0 == +t && "+" !== e && (g = !1),
                                (f = (g ? ("(" === e ? e : m) : "-" === e || "(" === e ? "" : e) + f),
                                (s = ("s" === Z ? v[8 + o / 3] : "") + s + (g && "(" === e ? ")" : "")),
                                k)
                            )
                                for (i = -1, l = t.length; ++i < l; )
                                    if (48 > (u = t.charCodeAt(i)) || u > 57) {
                                        (s = (46 === u ? c + t.slice(i + 1) : t.slice(i)) + s), (t = t.slice(0, i));
                                        break;
                                    }
                        }
                        y && !d && (t = a(t, 1 / 0));
                        var S = f.length + t.length + s.length,
                            j = S < p ? new Array(p - S + 1).join(n) : "";
                        switch ((y && d && ((t = a(j + t, j.length ? p - s.length : 1 / 0)), (j = "")), r)) {
                            case "<":
                                t = f + t + s + j;
                                break;
                            case "=":
                                t = f + j + t + s;
                                break;
                            case "^":
                                t = j.slice(0, (S = j.length >> 1)) + f + t + s + j.slice(S);
                                break;
                            default:
                                t = j + f + t + s;
                        }
                        return h(t);
                    }
                    return (
                        (b = void 0 === b ? 6 : /[gprs]/.test(Z) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b))),
                        (S.toString = function () {
                            return t + "";
                        }),
                        S
                    );
                }
                return {
                    format: p,
                    formatPrefix: function (t, n) {
                        var r = p((((t = (0, i.Z)(t)).type = "f"), t)),
                            o = 3 * Math.max(-8, Math.min(8, Math.floor((0, e.Z)(n) / 3))),
                            a = Math.pow(10, -o),
                            l = v[8 + o / 3];
                        return function (t) {
                            return r(a * t) + l;
                        };
                    },
                };
            }
            (s = g({ thousands: ",", grouping: [3], currency: ["$", ""] })), (c = s.format), (h = s.formatPrefix);
        },
        573857: (t, n, r) => {
            r.d(n, { Z: () => i });
            var e = r(64380);
            function i(t) {
                return (t = (0, e.V)(Math.abs(t))) ? t[1] : NaN;
            }
        },
        64380: (t, n, r) => {
            function e(t) {
                return Math.abs((t = Math.round(t))) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
            }
            function i(t, n) {
                if ((r = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                var r,
                    e = t.slice(0, r);
                return [e.length > 1 ? e[0] + e.slice(2) : e, +t.slice(r + 1)];
            }
            r.d(n, { V: () => i, Z: () => e });
        },
        39255: (t, n, r) => {
            r.d(n, { Z: () => i });
            var e = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
            function i(t) {
                if (!(n = e.exec(t))) throw new Error("invalid format: " + t);
                var n;
                return new o({ fill: n[1], align: n[2], sign: n[3], symbol: n[4], zero: n[5], width: n[6], comma: n[7], precision: n[8] && n[8].slice(1), trim: n[9], type: n[10] });
            }
            function o(t) {
                (this.fill = void 0 === t.fill ? " " : t.fill + ""), (this.align = void 0 === t.align ? ">" : t.align + ""), (this.sign = void 0 === t.sign ? "-" : t.sign + ""), (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""), (this.zero = !!t.zero), (this.width = void 0 === t.width ? void 0 : +t.width), (this.comma = !!t.comma), (this.precision = void 0 === t.precision ? void 0 : +t.precision), (this.trim = !!t.trim), (this.type = void 0 === t.type ? "" : t.type + "");
            }
            (i.prototype = o.prototype),
                (o.prototype.toString = function () {
                    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
                });
        },
        357332: (t, n, r) => {
            r.d(n, { Z: () => i });
            var e = r(573857);
            function i(t) {
                return Math.max(0, -(0, e.Z)(Math.abs(t)));
            }
        },
        578419: (t, n, r) => {
            r.d(n, { Z: () => i });
            var e = r(573857);
            function i(t, n) {
                return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, e.Z)(n) / 3))) - (0, e.Z)(Math.abs(t)));
            }
        },
        48728: (t, n, r) => {
            r.d(n, { Z: () => i });
            var e = r(573857);
            function i(t, n) {
                return (t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, (0, e.Z)(n) - (0, e.Z)(t)) + 1;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b75711ed.772208ba.js.map
