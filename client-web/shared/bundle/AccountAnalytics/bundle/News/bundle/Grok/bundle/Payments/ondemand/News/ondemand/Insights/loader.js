(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"],
    {
        617374: function (r, e, t) {
            var n;
            /*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */ !(function () {
                "use strict";
                var i,
                    o = 1e9,
                    s = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" },
                    u = !0,
                    f = "[DecimalError] ",
                    c = f + "Invalid argument: ",
                    h = f + "Exponent out of range: ",
                    l = Math.floor,
                    a = Math.pow,
                    d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                    g = 1e7,
                    p = 9007199254740991,
                    w = l(1286742750677284.5),
                    v = {};
                function m(r, e) {
                    var t,
                        n,
                        i,
                        o,
                        s,
                        f,
                        c,
                        h,
                        l = r.constructor,
                        a = l.precision;
                    if (!r.s || !e.s) return e.s || (e = new l(r)), u ? A(e, a) : e;
                    if (((c = r.d), (h = e.d), (s = r.e), (i = e.e), (c = c.slice()), (o = s - i))) {
                        for (o < 0 ? ((n = c), (o = -o), (f = h.length)) : ((n = h), (i = s), (f = c.length)), o > (f = (s = Math.ceil(a / 7)) > f ? s + 1 : f + 1) && ((o = f), (n.length = 1)), n.reverse(); o--; ) n.push(0);
                        n.reverse();
                    }
                    for ((f = c.length) - (o = h.length) < 0 && ((o = f), (n = h), (h = c), (c = n)), t = 0; o; ) (t = ((c[--o] = c[o] + h[o] + t) / g) | 0), (c[o] %= g);
                    for (t && (c.unshift(t), ++i), f = c.length; 0 == c[--f]; ) c.pop();
                    return (e.d = c), (e.e = i), u ? A(e, a) : e;
                }
                function N(r, e, t) {
                    if (r !== ~~r || r < e || r > t) throw Error(c + r);
                }
                function E(r) {
                    var e,
                        t,
                        n,
                        i = r.length - 1,
                        o = "",
                        s = r[0];
                    if (i > 0) {
                        for (o += s, e = 1; e < i; e++) (t = 7 - (n = r[e] + "").length) && (o += L(t)), (o += n);
                        (t = 7 - (n = (s = r[e]) + "").length) && (o += L(t));
                    } else if (0 === s) return "0";
                    for (; s % 10 == 0; ) s /= 10;
                    return o + s;
                }
                (v.absoluteValue = v.abs =
                    function () {
                        var r = new this.constructor(this);
                        return r.s && (r.s = 1), r;
                    }),
                    (v.comparedTo = v.cmp =
                        function (r) {
                            var e,
                                t,
                                n,
                                i,
                                o = this;
                            if (((r = new o.constructor(r)), o.s !== r.s)) return o.s || -r.s;
                            if (o.e !== r.e) return (o.e > r.e) ^ (o.s < 0) ? 1 : -1;
                            for (e = 0, t = (n = o.d.length) < (i = r.d.length) ? n : i; e < t; ++e) if (o.d[e] !== r.d[e]) return (o.d[e] > r.d[e]) ^ (o.s < 0) ? 1 : -1;
                            return n === i ? 0 : (n > i) ^ (o.s < 0) ? 1 : -1;
                        }),
                    (v.decimalPlaces = v.dp =
                        function () {
                            var r = this,
                                e = r.d.length - 1,
                                t = 7 * (e - r.e);
                            if ((e = r.d[e])) for (; e % 10 == 0; e /= 10) t--;
                            return t < 0 ? 0 : t;
                        }),
                    (v.dividedBy = v.div =
                        function (r) {
                            return b(this, new this.constructor(r));
                        }),
                    (v.dividedToIntegerBy = v.idiv =
                        function (r) {
                            var e = this.constructor;
                            return A(b(this, new e(r), 0, 1), e.precision);
                        }),
                    (v.equals = v.eq =
                        function (r) {
                            return !this.cmp(r);
                        }),
                    (v.exponent = function () {
                        return O(this);
                    }),
                    (v.greaterThan = v.gt =
                        function (r) {
                            return this.cmp(r) > 0;
                        }),
                    (v.greaterThanOrEqualTo = v.gte =
                        function (r) {
                            return this.cmp(r) >= 0;
                        }),
                    (v.isInteger = v.isint =
                        function () {
                            return this.e > this.d.length - 2;
                        }),
                    (v.isNegative = v.isneg =
                        function () {
                            return this.s < 0;
                        }),
                    (v.isPositive = v.ispos =
                        function () {
                            return this.s > 0;
                        }),
                    (v.isZero = function () {
                        return 0 === this.s;
                    }),
                    (v.lessThan = v.lt =
                        function (r) {
                            return this.cmp(r) < 0;
                        }),
                    (v.lessThanOrEqualTo = v.lte =
                        function (r) {
                            return this.cmp(r) < 1;
                        }),
                    (v.logarithm = v.log =
                        function (r) {
                            var e,
                                t = this,
                                n = t.constructor,
                                o = n.precision,
                                s = o + 5;
                            if (void 0 === r) r = new n(10);
                            else if ((r = new n(r)).s < 1 || r.eq(i)) throw Error(f + "NaN");
                            if (t.s < 1) throw Error(f + (t.s ? "NaN" : "-Infinity"));
                            return t.eq(i) ? new n(0) : ((u = !1), (e = b(D(t, s), D(r, s), s)), (u = !0), A(e, o));
                        }),
                    (v.minus = v.sub =
                        function (r) {
                            var e = this;
                            return (r = new e.constructor(r)), e.s == r.s ? M(e, r) : m(e, ((r.s = -r.s), r));
                        }),
                    (v.modulo = v.mod =
                        function (r) {
                            var e,
                                t = this,
                                n = t.constructor,
                                i = n.precision;
                            if (!(r = new n(r)).s) throw Error(f + "NaN");
                            return t.s ? ((u = !1), (e = b(t, r, 0, 1).times(r)), (u = !0), t.minus(e)) : A(new n(t), i);
                        }),
                    (v.naturalExponential = v.exp =
                        function () {
                            return x(this);
                        }),
                    (v.naturalLogarithm = v.ln =
                        function () {
                            return D(this);
                        }),
                    (v.negated = v.neg =
                        function () {
                            var r = new this.constructor(this);
                            return (r.s = -r.s || 0), r;
                        }),
                    (v.plus = v.add =
                        function (r) {
                            var e = this;
                            return (r = new e.constructor(r)), e.s == r.s ? m(e, r) : M(e, ((r.s = -r.s), r));
                        }),
                    (v.precision = v.sd =
                        function (r) {
                            var e,
                                t,
                                n,
                                i = this;
                            if (void 0 !== r && r !== !!r && 1 !== r && 0 !== r) throw Error(c + r);
                            if (((e = O(i) + 1), (t = 7 * (n = i.d.length - 1) + 1), (n = i.d[n]))) {
                                for (; n % 10 == 0; n /= 10) t--;
                                for (n = i.d[0]; n >= 10; n /= 10) t++;
                            }
                            return r && e > t ? e : t;
                        }),
                    (v.squareRoot = v.sqrt =
                        function () {
                            var r,
                                e,
                                t,
                                n,
                                i,
                                o,
                                s,
                                c = this,
                                h = c.constructor;
                            if (c.s < 1) {
                                if (!c.s) return new h(0);
                                throw Error(f + "NaN");
                            }
                            for (r = O(c), u = !1, 0 == (i = Math.sqrt(+c)) || i == 1 / 0 ? (((e = E(c.d)).length + r) % 2 == 0 && (e += "0"), (i = Math.sqrt(e)), (r = l((r + 1) / 2) - (r < 0 || r % 2)), (n = new h((e = i == 1 / 0 ? "5e" + r : (e = i.toExponential()).slice(0, e.indexOf("e") + 1) + r)))) : (n = new h(i.toString())), i = s = (t = h.precision) + 3; ; )
                                if (((n = (o = n).plus(b(c, o, s + 2)).times(0.5)), E(o.d).slice(0, s) === (e = E(n.d)).slice(0, s))) {
                                    if (((e = e.slice(s - 3, s + 1)), i == s && "4999" == e)) {
                                        if ((A(o, t + 1, 0), o.times(o).eq(c))) {
                                            n = o;
                                            break;
                                        }
                                    } else if ("9999" != e) break;
                                    s += 4;
                                }
                            return (u = !0), A(n, t);
                        }),
                    (v.times = v.mul =
                        function (r) {
                            var e,
                                t,
                                n,
                                i,
                                o,
                                s,
                                f,
                                c,
                                h,
                                l = this,
                                a = l.constructor,
                                d = l.d,
                                p = (r = new a(r)).d;
                            if (!l.s || !r.s) return new a(0);
                            for (r.s *= l.s, t = l.e + r.e, (c = d.length) < (h = p.length) && ((o = d), (d = p), (p = o), (s = c), (c = h), (h = s)), o = [], n = s = c + h; n--; ) o.push(0);
                            for (n = h; --n >= 0; ) {
                                for (e = 0, i = c + n; i > n; ) (f = o[i] + p[n] * d[i - n - 1] + e), (o[i--] = f % g | 0), (e = (f / g) | 0);
                                o[i] = (o[i] + e) % g | 0;
                            }
                            for (; !o[--s]; ) o.pop();
                            return e ? ++t : o.shift(), (r.d = o), (r.e = t), u ? A(r, a.precision) : r;
                        }),
                    (v.toDecimalPlaces = v.todp =
                        function (r, e) {
                            var t = this,
                                n = t.constructor;
                            return (t = new n(t)), void 0 === r ? t : (N(r, 0, o), void 0 === e ? (e = n.rounding) : N(e, 0, 8), A(t, r + O(t) + 1, e));
                        }),
                    (v.toExponential = function (r, e) {
                        var t,
                            n = this,
                            i = n.constructor;
                        return void 0 === r ? (t = P(n, !0)) : (N(r, 0, o), void 0 === e ? (e = i.rounding) : N(e, 0, 8), (t = P((n = A(new i(n), r + 1, e)), !0, r + 1))), t;
                    }),
                    (v.toFixed = function (r, e) {
                        var t,
                            n,
                            i = this,
                            s = i.constructor;
                        return void 0 === r ? P(i) : (N(r, 0, o), void 0 === e ? (e = s.rounding) : N(e, 0, 8), (t = P((n = A(new s(i), r + O(i) + 1, e)).abs(), !1, r + O(n) + 1)), i.isneg() && !i.isZero() ? "-" + t : t);
                    }),
                    (v.toInteger = v.toint =
                        function () {
                            var r = this,
                                e = r.constructor;
                            return A(new e(r), O(r) + 1, e.rounding);
                        }),
                    (v.toNumber = function () {
                        return +this;
                    }),
                    (v.toPower = v.pow =
                        function (r) {
                            var e,
                                t,
                                n,
                                o,
                                s,
                                c,
                                h = this,
                                a = h.constructor,
                                d = +(r = new a(r));
                            if (!r.s) return new a(i);
                            if (!(h = new a(h)).s) {
                                if (r.s < 1) throw Error(f + "Infinity");
                                return h;
                            }
                            if (h.eq(i)) return h;
                            if (((n = a.precision), r.eq(i))) return A(h, n);
                            if (((c = (e = r.e) >= (t = r.d.length - 1)), (s = h.s), c)) {
                                if ((t = d < 0 ? -d : d) <= p) {
                                    for (o = new a(i), e = Math.ceil(n / 7 + 4), u = !1; t % 2 && y((o = o.times(h)).d, e), 0 !== (t = l(t / 2)); ) y((h = h.times(h)).d, e);
                                    return (u = !0), r.s < 0 ? new a(i).div(o) : A(o, n);
                                }
                            } else if (s < 0) throw Error(f + "NaN");
                            return (s = s < 0 && 1 & r.d[Math.max(e, t)] ? -1 : 1), (h.s = 1), (u = !1), (o = r.times(D(h, n + 12))), (u = !0), ((o = x(o)).s = s), o;
                        }),
                    (v.toPrecision = function (r, e) {
                        var t,
                            n,
                            i = this,
                            s = i.constructor;
                        return void 0 === r ? (n = P(i, (t = O(i)) <= s.toExpNeg || t >= s.toExpPos)) : (N(r, 1, o), void 0 === e ? (e = s.rounding) : N(e, 0, 8), (n = P((i = A(new s(i), r, e)), r <= (t = O(i)) || t <= s.toExpNeg, r))), n;
                    }),
                    (v.toSignificantDigits = v.tosd =
                        function (r, e) {
                            var t = this.constructor;
                            return void 0 === r ? ((r = t.precision), (e = t.rounding)) : (N(r, 1, o), void 0 === e ? (e = t.rounding) : N(e, 0, 8)), A(new t(this), r, e);
                        }),
                    (v.toString =
                        v.valueOf =
                        v.val =
                        v.toJSON =
                            function () {
                                var r = this,
                                    e = O(r),
                                    t = r.constructor;
                                return P(r, e <= t.toExpNeg || e >= t.toExpPos);
                            });
                var b = (function () {
                    function r(r, e) {
                        var t,
                            n = 0,
                            i = r.length;
                        for (r = r.slice(); i--; ) (t = r[i] * e + n), (r[i] = t % g | 0), (n = (t / g) | 0);
                        return n && r.unshift(n), r;
                    }
                    function e(r, e, t, n) {
                        var i, o;
                        if (t != n) o = t > n ? 1 : -1;
                        else
                            for (i = o = 0; i < t; i++)
                                if (r[i] != e[i]) {
                                    o = r[i] > e[i] ? 1 : -1;
                                    break;
                                }
                        return o;
                    }
                    function t(r, e, t) {
                        for (var n = 0; t--; ) (r[t] -= n), (n = r[t] < e[t] ? 1 : 0), (r[t] = n * g + r[t] - e[t]);
                        for (; !r[0] && r.length > 1; ) r.shift();
                    }
                    return function (n, i, o, s) {
                        var u,
                            c,
                            h,
                            l,
                            a,
                            d,
                            p,
                            w,
                            v,
                            m,
                            N,
                            E,
                            b,
                            x,
                            _,
                            L,
                            D,
                            q,
                            M = n.constructor,
                            P = n.s == i.s ? 1 : -1,
                            y = n.d,
                            R = i.d;
                        if (!n.s) return new M(n);
                        if (!i.s) throw Error(f + "Division by zero");
                        for (c = n.e - i.e, D = R.length, _ = y.length, w = (p = new M(P)).d = [], h = 0; R[h] == (y[h] || 0); ) ++h;
                        if ((R[h] > (y[h] || 0) && --c, (E = null == o ? (o = M.precision) : s ? o + (O(n) - O(i)) + 1 : o) < 0)) return new M(0);
                        if (((E = (E / 7 + 2) | 0), (h = 0), 1 == D)) for (l = 0, R = R[0], E++; (h < _ || l) && E--; h++) (b = l * g + (y[h] || 0)), (w[h] = (b / R) | 0), (l = b % R | 0);
                        else {
                            for ((l = (g / (R[0] + 1)) | 0) > 1 && ((R = r(R, l)), (y = r(y, l)), (D = R.length), (_ = y.length)), x = D, m = (v = y.slice(0, D)).length; m < D; ) v[m++] = 0;
                            (q = R.slice()).unshift(0), (L = R[0]), R[1] >= g / 2 && ++L;
                            do {
                                (l = 0), (u = e(R, v, D, m)) < 0 ? ((N = v[0]), D != m && (N = N * g + (v[1] || 0)), (l = (N / L) | 0) > 1 ? (l >= g && (l = g - 1), 1 == (u = e((a = r(R, l)), v, (d = a.length), (m = v.length))) && (l--, t(a, D < d ? q : R, d))) : (0 == l && (u = l = 1), (a = R.slice())), (d = a.length) < m && a.unshift(0), t(v, a, m), -1 == u && (u = e(R, v, D, (m = v.length))) < 1 && (l++, t(v, D < m ? q : R, m)), (m = v.length)) : 0 === u && (l++, (v = [0])), (w[h++] = l), u && v[0] ? (v[m++] = y[x] || 0) : ((v = [y[x]]), (m = 1));
                            } while ((x++ < _ || void 0 !== v[0]) && E--);
                        }
                        return w[0] || w.shift(), (p.e = c), A(p, s ? o + O(p) + 1 : o);
                    };
                })();
                function x(r, e) {
                    var t,
                        n,
                        o,
                        s,
                        f,
                        c = 0,
                        l = 0,
                        d = r.constructor,
                        g = d.precision;
                    if (O(r) > 16) throw Error(h + O(r));
                    if (!r.s) return new d(i);
                    for (null == e ? ((u = !1), (f = g)) : (f = e), s = new d(0.03125); r.abs().gte(0.1); ) (r = r.times(s)), (l += 5);
                    for (f += ((Math.log(a(2, l)) / Math.LN10) * 2 + 5) | 0, t = n = o = new d(i), d.precision = f; ; ) {
                        if (((n = A(n.times(r), f)), (t = t.times(++c)), E((s = o.plus(b(n, t, f))).d).slice(0, f) === E(o.d).slice(0, f))) {
                            for (; l--; ) o = A(o.times(o), f);
                            return (d.precision = g), null == e ? ((u = !0), A(o, g)) : o;
                        }
                        o = s;
                    }
                }
                function O(r) {
                    for (var e = 7 * r.e, t = r.d[0]; t >= 10; t /= 10) e++;
                    return e;
                }
                function _(r, e, t) {
                    if (e > r.LN10.sd()) throw ((u = !0), t && (r.precision = t), Error(f + "LN10 precision limit exceeded"));
                    return A(new r(r.LN10), e);
                }
                function L(r) {
                    for (var e = ""; r--; ) e += "0";
                    return e;
                }
                function D(r, e) {
                    var t,
                        n,
                        o,
                        s,
                        c,
                        h,
                        l,
                        a,
                        d,
                        g = 1,
                        p = r,
                        w = p.d,
                        v = p.constructor,
                        m = v.precision;
                    if (p.s < 1) throw Error(f + (p.s ? "NaN" : "-Infinity"));
                    if (p.eq(i)) return new v(0);
                    if ((null == e ? ((u = !1), (a = m)) : (a = e), p.eq(10))) return null == e && (u = !0), _(v, a);
                    if (((a += 10), (v.precision = a), (n = (t = E(w)).charAt(0)), (s = O(p)), !(Math.abs(s) < 15e14))) return (l = _(v, a + 2, m).times(s + "")), (p = D(new v(n + "." + t.slice(1)), a - 10).plus(l)), (v.precision = m), null == e ? ((u = !0), A(p, m)) : p;
                    for (; (n < 7 && 1 != n) || (1 == n && t.charAt(1) > 3); ) (n = (t = E((p = p.times(r)).d)).charAt(0)), g++;
                    for (s = O(p), n > 1 ? ((p = new v("0." + t)), s++) : (p = new v(n + "." + t.slice(1))), h = c = p = b(p.minus(i), p.plus(i), a), d = A(p.times(p), a), o = 3; ; ) {
                        if (((c = A(c.times(d), a)), E((l = h.plus(b(c, new v(o), a))).d).slice(0, a) === E(h.d).slice(0, a))) return (h = h.times(2)), 0 !== s && (h = h.plus(_(v, a + 2, m).times(s + ""))), (h = b(h, new v(g), a)), (v.precision = m), null == e ? ((u = !0), A(h, m)) : h;
                        (h = l), (o += 2);
                    }
                }
                function q(r, e) {
                    var t, n, i;
                    for ((t = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (n = e.search(/e/i)) > 0 ? (t < 0 && (t = n), (t += +e.slice(n + 1)), (e = e.substring(0, n))) : t < 0 && (t = e.length), n = 0; 48 === e.charCodeAt(n); ) ++n;
                    for (i = e.length; 48 === e.charCodeAt(i - 1); ) --i;
                    if ((e = e.slice(n, i))) {
                        if (((i -= n), (t = t - n - 1), (r.e = l(t / 7)), (r.d = []), (n = (t + 1) % 7), t < 0 && (n += 7), n < i)) {
                            for (n && r.d.push(+e.slice(0, n)), i -= 7; n < i; ) r.d.push(+e.slice(n, (n += 7)));
                            n = 7 - (e = e.slice(n)).length;
                        } else n -= i;
                        for (; n--; ) e += "0";
                        if ((r.d.push(+e), u && (r.e > w || r.e < -w))) throw Error(h + t);
                    } else (r.s = 0), (r.e = 0), (r.d = [0]);
                    return r;
                }
                function A(r, e, t) {
                    var n,
                        i,
                        o,
                        s,
                        f,
                        c,
                        d,
                        p,
                        v = r.d;
                    for (s = 1, o = v[0]; o >= 10; o /= 10) s++;
                    if ((n = e - s) < 0) (n += 7), (i = e), (d = v[(p = 0)]);
                    else {
                        if ((p = Math.ceil((n + 1) / 7)) >= (o = v.length)) return r;
                        for (d = o = v[p], s = 1; o >= 10; o /= 10) s++;
                        i = (n %= 7) - 7 + s;
                    }
                    if ((void 0 !== t && ((f = (d / (o = a(10, s - i - 1))) % 10 | 0), (c = e < 0 || void 0 !== v[p + 1] || d % o), (c = t < 4 ? (f || c) && (0 == t || t == (r.s < 0 ? 3 : 2)) : f > 5 || (5 == f && (4 == t || c || (6 == t && (n > 0 ? (i > 0 ? d / a(10, s - i) : 0) : v[p - 1]) % 10 & 1) || t == (r.s < 0 ? 8 : 7))))), e < 1 || !v[0])) return c ? ((o = O(r)), (v.length = 1), (e = e - o - 1), (v[0] = a(10, (7 - (e % 7)) % 7)), (r.e = l(-e / 7) || 0)) : ((v.length = 1), (v[0] = r.e = r.s = 0)), r;
                    if ((0 == n ? ((v.length = p), (o = 1), p--) : ((v.length = p + 1), (o = a(10, 7 - n)), (v[p] = i > 0 ? ((d / a(10, s - i)) % a(10, i) | 0) * o : 0)), c))
                        for (;;) {
                            if (0 == p) {
                                (v[0] += o) == g && ((v[0] = 1), ++r.e);
                                break;
                            }
                            if (((v[p] += o), v[p] != g)) break;
                            (v[p--] = 0), (o = 1);
                        }
                    for (n = v.length; 0 === v[--n]; ) v.pop();
                    if (u && (r.e > w || r.e < -w)) throw Error(h + O(r));
                    return r;
                }
                function M(r, e) {
                    var t,
                        n,
                        i,
                        o,
                        s,
                        f,
                        c,
                        h,
                        l,
                        a,
                        d = r.constructor,
                        p = d.precision;
                    if (!r.s || !e.s) return e.s ? (e.s = -e.s) : (e = new d(r)), u ? A(e, p) : e;
                    if (((c = r.d), (a = e.d), (n = e.e), (h = r.e), (c = c.slice()), (s = h - n))) {
                        for ((l = s < 0) ? ((t = c), (s = -s), (f = a.length)) : ((t = a), (n = h), (f = c.length)), s > (i = Math.max(Math.ceil(p / 7), f) + 2) && ((s = i), (t.length = 1)), t.reverse(), i = s; i--; ) t.push(0);
                        t.reverse();
                    } else {
                        for ((l = (i = c.length) < (f = a.length)) && (f = i), i = 0; i < f; i++)
                            if (c[i] != a[i]) {
                                l = c[i] < a[i];
                                break;
                            }
                        s = 0;
                    }
                    for (l && ((t = c), (c = a), (a = t), (e.s = -e.s)), f = c.length, i = a.length - f; i > 0; --i) c[f++] = 0;
                    for (i = a.length; i > s; ) {
                        if (c[--i] < a[i]) {
                            for (o = i; o && 0 === c[--o]; ) c[o] = g - 1;
                            --c[o], (c[i] += g);
                        }
                        c[i] -= a[i];
                    }
                    for (; 0 === c[--f]; ) c.pop();
                    for (; 0 === c[0]; c.shift()) --n;
                    return c[0] ? ((e.d = c), (e.e = n), u ? A(e, p) : e) : new d(0);
                }
                function P(r, e, t) {
                    var n,
                        i = O(r),
                        o = E(r.d),
                        s = o.length;
                    return e ? (t && (n = t - s) > 0 ? (o = o.charAt(0) + "." + o.slice(1) + L(n)) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), (o = o + (i < 0 ? "e" : "e+") + i)) : i < 0 ? ((o = "0." + L(-i - 1) + o), t && (n = t - s) > 0 && (o += L(n))) : i >= s ? ((o += L(i + 1 - s)), t && (n = t - i - 1) > 0 && (o = o + "." + L(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), t && (n = t - s) > 0 && (i + 1 === s && (o += "."), (o += L(n)))), r.s < 0 ? "-" + o : o;
                }
                function y(r, e) {
                    if (r.length > e) return (r.length = e), !0;
                }
                function R(r) {
                    if (!r || "object" != typeof r) throw Error(f + "Object expected");
                    var e,
                        t,
                        n,
                        i = ["precision", 1, o, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
                    for (e = 0; e < i.length; e += 3)
                        if (void 0 !== (n = r[(t = i[e])])) {
                            if (!(l(n) === n && n >= i[e + 1] && n <= i[e + 2])) throw Error(c + t + ": " + n);
                            this[t] = n;
                        }
                    if (void 0 !== (n = r[(t = "LN10")])) {
                        if (n != Math.LN10) throw Error(c + t + ": " + n);
                        this[t] = new this(n);
                    }
                    return this;
                }
                (s = (function r(e) {
                    var t, n, i;
                    function o(r) {
                        var e = this;
                        if (!(e instanceof o)) return new o(r);
                        if (((e.constructor = o), r instanceof o)) return (e.s = r.s), (e.e = r.e), void (e.d = (r = r.d) ? r.slice() : r);
                        if ("number" == typeof r) {
                            if (0 * r != 0) throw Error(c + r);
                            if (r > 0) e.s = 1;
                            else {
                                if (!(r < 0)) return (e.s = 0), (e.e = 0), void (e.d = [0]);
                                (r = -r), (e.s = -1);
                            }
                            return r === ~~r && r < 1e7 ? ((e.e = 0), void (e.d = [r])) : q(e, r.toString());
                        }
                        if ("string" != typeof r) throw Error(c + r);
                        if ((45 === r.charCodeAt(0) ? ((r = r.slice(1)), (e.s = -1)) : (e.s = 1), !d.test(r))) throw Error(c + r);
                        q(e, r);
                    }
                    if (((o.prototype = v), (o.ROUND_UP = 0), (o.ROUND_DOWN = 1), (o.ROUND_CEIL = 2), (o.ROUND_FLOOR = 3), (o.ROUND_HALF_UP = 4), (o.ROUND_HALF_DOWN = 5), (o.ROUND_HALF_EVEN = 6), (o.ROUND_HALF_CEIL = 7), (o.ROUND_HALF_FLOOR = 8), (o.clone = r), (o.config = o.set = R), void 0 === e && (e = {}), e)) for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < i.length; ) e.hasOwnProperty((n = i[t++])) || (e[n] = this[n]);
                    return o.config(e), o;
                })(s)),
                    (s.default = s.Decimal = s),
                    (i = new s(1)),
                    void 0 ===
                        (n = function () {
                            return s;
                        }.call(e, t, e, r)) || (r.exports = n);
            })();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader.0c47bb4a.js.map
