"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-d35c1f9c"],
    {
        199620: (n, t, e) => {
            e.d(t, { Z: () => u, x: () => a });
            var r = e(536273),
                i = e(668753),
                o = e(618928);
            function u() {
                var n,
                    t,
                    e = (0, o.Z)().unknown(void 0),
                    c = e.domain,
                    a = e.range,
                    l = 0,
                    s = 1,
                    h = !1,
                    f = 0,
                    _ = 0,
                    p = 0.5;
                function g() {
                    var e = c().length,
                        i = s < l,
                        o = i ? s : l,
                        u = i ? l : s;
                    (n = (u - o) / Math.max(1, e - f + 2 * _)), h && (n = Math.floor(n)), (o += (u - o - n * (e - f)) * p), (t = n * (1 - f)), h && ((o = Math.round(o)), (t = Math.round(t)));
                    var g = (0, r.Z)(e).map(function (t) {
                        return o + n * t;
                    });
                    return a(i ? g.reverse() : g);
                }
                return (
                    delete e.unknown,
                    (e.domain = function (n) {
                        return arguments.length ? (c(n), g()) : c();
                    }),
                    (e.range = function (n) {
                        return arguments.length ? (([l, s] = n), (l = +l), (s = +s), g()) : [l, s];
                    }),
                    (e.rangeRound = function (n) {
                        return ([l, s] = n), (l = +l), (s = +s), (h = !0), g();
                    }),
                    (e.bandwidth = function () {
                        return t;
                    }),
                    (e.step = function () {
                        return n;
                    }),
                    (e.round = function (n) {
                        return arguments.length ? ((h = !!n), g()) : h;
                    }),
                    (e.padding = function (n) {
                        return arguments.length ? ((f = Math.min(1, (_ = +n))), g()) : f;
                    }),
                    (e.paddingInner = function (n) {
                        return arguments.length ? ((f = Math.min(1, n)), g()) : f;
                    }),
                    (e.paddingOuter = function (n) {
                        return arguments.length ? ((_ = +n), g()) : _;
                    }),
                    (e.align = function (n) {
                        return arguments.length ? ((p = Math.max(0, Math.min(1, n))), g()) : p;
                    }),
                    (e.copy = function () {
                        return u(c(), [l, s]).round(h).paddingInner(f).paddingOuter(_).align(p);
                    }),
                    i.o.apply(g(), arguments)
                );
            }
            function c(n) {
                var t = n.copy;
                return (
                    (n.padding = n.paddingOuter),
                    delete n.paddingInner,
                    delete n.paddingOuter,
                    (n.copy = function () {
                        return c(t());
                    }),
                    n
                );
            }
            function a() {
                return c(u.apply(null, arguments).paddingInner(1));
            }
        },
        604716: (n, t, e) => {
            e.d(t, { JG: () => _, ZP: () => g, yR: () => l, l4: () => p });
            var r = e(610940),
                i = e(847027),
                o = e(30053),
                u = e(985397);
            var c = e(278724),
                a = [0, 1];
            function l(n) {
                return n;
            }
            function s(n, t) {
                return (t -= n = +n)
                    ? function (e) {
                          return (e - n) / t;
                      }
                    : ((e = isNaN(t) ? NaN : 0.5),
                      function () {
                          return e;
                      });
                var e;
            }
            function h(n, t, e) {
                var r = n[0],
                    i = n[1],
                    o = t[0],
                    u = t[1];
                return (
                    i < r ? ((r = s(i, r)), (o = e(u, o))) : ((r = s(r, i)), (o = e(o, u))),
                    function (n) {
                        return o(r(n));
                    }
                );
            }
            function f(n, t, e) {
                var i = Math.min(n.length, t.length) - 1,
                    o = new Array(i),
                    u = new Array(i),
                    c = -1;
                for (n[i] < n[0] && ((n = n.slice().reverse()), (t = t.slice().reverse())); ++c < i; ) (o[c] = s(n[c], n[c + 1])), (u[c] = e(t[c], t[c + 1]));
                return function (t) {
                    var e = (0, r.ZP)(n, t, 1, i) - 1;
                    return u[e](o[e](t));
                };
            }
            function _(n, t) {
                return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
            }
            function p() {
                var n,
                    t,
                    e,
                    r,
                    s,
                    _,
                    p = a,
                    g = a,
                    y = i.Z,
                    d = l;
                function v() {
                    var n,
                        t,
                        e,
                        i = Math.min(p.length, g.length);
                    return (
                        d !== l &&
                            ((n = p[0]),
                            (t = p[i - 1]),
                            n > t && ((e = n), (n = t), (t = e)),
                            (d = function (e) {
                                return Math.max(n, Math.min(t, e));
                            })),
                        (r = i > 2 ? f : h),
                        (s = _ = null),
                        x
                    );
                }
                function x(t) {
                    return null == t || isNaN((t = +t)) ? e : (s || (s = r(p.map(n), g, y)))(n(d(t)));
                }
                return (
                    (x.invert = function (e) {
                        return d(t((_ || (_ = r(g, p.map(n), o.Z)))(e)));
                    }),
                    (x.domain = function (n) {
                        return arguments.length ? ((p = Array.from(n, c.Z)), v()) : p.slice();
                    }),
                    (x.range = function (n) {
                        return arguments.length ? ((g = Array.from(n)), v()) : g.slice();
                    }),
                    (x.rangeRound = function (n) {
                        return (g = Array.from(n)), (y = u.Z), v();
                    }),
                    (x.clamp = function (n) {
                        return arguments.length ? ((d = !!n || l), v()) : d !== l;
                    }),
                    (x.interpolate = function (n) {
                        return arguments.length ? ((y = n), v()) : y;
                    }),
                    (x.unknown = function (n) {
                        return arguments.length ? ((e = n), x) : e;
                    }),
                    function (e, r) {
                        return (n = e), (t = r), v();
                    }
                );
            }
            function g() {
                return p()(l, l);
            }
        },
        193247: (n, t, e) => {
            e.d(t, { ti: () => r.Z, AB: () => Ot, Wr: () => Ft, dK: () => Yt, KR: () => Lt, b4: () => Bt, ez: () => u, qm: () => b.O, BY: () => i.Z, p2: () => m, PK: () => b.Z, q2: () => r.x, vY: () => S, FT: () => B, aE: () => Y, s$: () => U, cJ: () => kt, $l: () => Ct, bE: () => St, IO: () => Pt, aA: () => Dt, lQ: () => At, PU: () => D, eh: () => M, ut: () => L, Xf: () => Zt, KY: () => Tt, uk: () => It.Z });
            var r = e(199620),
                i = e(478622),
                o = e(278724);
            function u(n) {
                var t;
                function e(n) {
                    return null == n || isNaN((n = +n)) ? t : n;
                }
                return (
                    (e.invert = e),
                    (e.domain = e.range =
                        function (t) {
                            return arguments.length ? ((n = Array.from(t, o.Z)), e) : n.slice();
                        }),
                    (e.unknown = function (n) {
                        return arguments.length ? ((t = n), e) : t;
                    }),
                    (e.copy = function () {
                        return u(n).unknown(t);
                    }),
                    (n = arguments.length ? Array.from(n, o.Z) : [0, 1]),
                    (0, i.Q)(e)
                );
            }
            var c = e(452497),
                a = e(39255),
                l = e(548230);
            function s(n, t) {
                var e,
                    r = 0,
                    i = (n = n.slice()).length - 1,
                    o = n[r],
                    u = n[i];
                return u < o && ((e = r), (r = i), (i = e), (e = o), (o = u), (u = e)), (n[r] = t.floor(o)), (n[i] = t.ceil(u)), n;
            }
            var h = e(604716),
                f = e(668753);
            function _(n) {
                return Math.log(n);
            }
            function p(n) {
                return Math.exp(n);
            }
            function g(n) {
                return -Math.log(-n);
            }
            function y(n) {
                return -Math.exp(-n);
            }
            function d(n) {
                return isFinite(n) ? +("1e" + n) : n < 0 ? 0 : n;
            }
            function v(n) {
                return (t, e) => -n(-t, e);
            }
            function x(n) {
                const t = n(_, p),
                    e = t.domain;
                let r,
                    i,
                    o = 10;
                function u() {
                    return (
                        (r = (function (n) {
                            return n === Math.E ? Math.log : (10 === n && Math.log10) || (2 === n && Math.log2) || ((n = Math.log(n)), (t) => Math.log(t) / n);
                        })(o)),
                        (i = (function (n) {
                            return 10 === n ? d : n === Math.E ? Math.exp : (t) => Math.pow(n, t);
                        })(o)),
                        e()[0] < 0 ? ((r = v(r)), (i = v(i)), n(g, y)) : n(_, p),
                        t
                    );
                }
                return (
                    (t.base = function (n) {
                        return arguments.length ? ((o = +n), u()) : o;
                    }),
                    (t.domain = function (n) {
                        return arguments.length ? (e(n), u()) : e();
                    }),
                    (t.ticks = (n) => {
                        const t = e();
                        let u = t[0],
                            a = t[t.length - 1];
                        const l = a < u;
                        l && ([u, a] = [a, u]);
                        let s,
                            h,
                            f = r(u),
                            _ = r(a);
                        const p = null == n ? 10 : +n;
                        let g = [];
                        if (!(o % 1) && _ - f < p) {
                            if (((f = Math.floor(f)), (_ = Math.ceil(_)), u > 0)) {
                                for (; f <= _; ++f)
                                    for (s = 1; s < o; ++s)
                                        if (((h = f < 0 ? s / i(-f) : s * i(f)), !(h < u))) {
                                            if (h > a) break;
                                            g.push(h);
                                        }
                            } else
                                for (; f <= _; ++f)
                                    for (s = o - 1; s >= 1; --s)
                                        if (((h = f > 0 ? s / i(-f) : s * i(f)), !(h < u))) {
                                            if (h > a) break;
                                            g.push(h);
                                        }
                            2 * g.length < p && (g = (0, c.ZP)(u, a, p));
                        } else g = (0, c.ZP)(f, _, Math.min(_ - f, p)).map(i);
                        return l ? g.reverse() : g;
                    }),
                    (t.tickFormat = (n, e) => {
                        if ((null == n && (n = 10), null == e && (e = 10 === o ? "s" : ","), "function" != typeof e && (o % 1 || null != (e = (0, a.Z)(e)).precision || (e.trim = !0), (e = (0, l.WU)(e))), n === 1 / 0)) return e;
                        const u = Math.max(1, (o * n) / t.ticks().length);
                        return (n) => {
                            let t = n / i(Math.round(r(n)));
                            return t * o < o - 0.5 && (t *= o), t <= u ? e(n) : "";
                        };
                    }),
                    (t.nice = () => e(s(e(), { floor: (n) => i(Math.floor(r(n))), ceil: (n) => i(Math.ceil(r(n))) }))),
                    t
                );
            }
            function m() {
                const n = x((0, h.l4)()).domain([1, 10]);
                return (n.copy = () => (0, h.JG)(n, m()).base(n.base())), f.o.apply(n, arguments), n;
            }
            function Z(n) {
                return function (t) {
                    return Math.sign(t) * Math.log1p(Math.abs(t / n));
                };
            }
            function T(n) {
                return function (t) {
                    return Math.sign(t) * Math.expm1(Math.abs(t)) * n;
                };
            }
            function w(n) {
                var t = 1,
                    e = n(Z(t), T(t));
                return (
                    (e.constant = function (e) {
                        return arguments.length ? n(Z((t = +e)), T(t)) : t;
                    }),
                    (0, i.Q)(e)
                );
            }
            function M() {
                var n = w((0, h.l4)());
                return (
                    (n.copy = function () {
                        return (0, h.JG)(n, M()).constant(n.constant());
                    }),
                    f.o.apply(n, arguments)
                );
            }
            var b = e(618928);
            function N(n) {
                return function (t) {
                    return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n);
                };
            }
            function k(n) {
                return n < 0 ? -Math.sqrt(-n) : Math.sqrt(n);
            }
            function C(n) {
                return n < 0 ? -n * n : n * n;
            }
            function A(n) {
                var t = n(h.yR, h.yR),
                    e = 1;
                return (
                    (t.exponent = function (t) {
                        return arguments.length ? (1 === (e = +t) ? n(h.yR, h.yR) : 0.5 === e ? n(k, C) : n(N(e), N(1 / e))) : e;
                    }),
                    (0, i.Q)(t)
                );
            }
            function S() {
                var n = A((0, h.l4)());
                return (
                    (n.copy = function () {
                        return (0, h.JG)(n, S()).exponent(n.exponent());
                    }),
                    f.o.apply(n, arguments),
                    n
                );
            }
            function D() {
                return S.apply(null, arguments).exponent(0.5);
            }
            function P(n) {
                return Math.sign(n) * n * n;
            }
            function U() {
                var n,
                    t = (0, h.ZP)(),
                    e = [0, 1],
                    r = !1;
                function u(e) {
                    var i = (function (n) {
                        return Math.sign(n) * Math.sqrt(Math.abs(n));
                    })(t(e));
                    return isNaN(i) ? n : r ? Math.round(i) : i;
                }
                return (
                    (u.invert = function (n) {
                        return t.invert(P(n));
                    }),
                    (u.domain = function (n) {
                        return arguments.length ? (t.domain(n), u) : t.domain();
                    }),
                    (u.range = function (n) {
                        return arguments.length ? (t.range((e = Array.from(n, o.Z)).map(P)), u) : e.slice();
                    }),
                    (u.rangeRound = function (n) {
                        return u.range(n).round(!0);
                    }),
                    (u.round = function (n) {
                        return arguments.length ? ((r = !!n), u) : r;
                    }),
                    (u.clamp = function (n) {
                        return arguments.length ? (t.clamp(n), u) : t.clamp();
                    }),
                    (u.unknown = function (t) {
                        return arguments.length ? ((n = t), u) : n;
                    }),
                    (u.copy = function () {
                        return U(t.domain(), e).round(r).clamp(t.clamp()).unknown(n);
                    }),
                    f.o.apply(u, arguments),
                    (0, i.Q)(u)
                );
            }
            var E = e(736376),
                O = e(610940),
                F = e(886801);
            function B() {
                var n,
                    t = [],
                    e = [],
                    r = [];
                function i() {
                    var n = 0,
                        i = Math.max(1, e.length);
                    for (r = new Array(i - 1); ++n < i; ) r[n - 1] = (0, E.s7)(t, n / i);
                    return o;
                }
                function o(t) {
                    return null == t || isNaN((t = +t)) ? n : e[(0, O.ZP)(r, t)];
                }
                return (
                    (o.invertExtent = function (n) {
                        var i = e.indexOf(n);
                        return i < 0 ? [NaN, NaN] : [i > 0 ? r[i - 1] : t[0], i < r.length ? r[i] : t[t.length - 1]];
                    }),
                    (o.domain = function (n) {
                        if (!arguments.length) return t.slice();
                        t = [];
                        for (let e of n) null == e || isNaN((e = +e)) || t.push(e);
                        return t.sort(F.Z), i();
                    }),
                    (o.range = function (n) {
                        return arguments.length ? ((e = Array.from(n)), i()) : e.slice();
                    }),
                    (o.unknown = function (t) {
                        return arguments.length ? ((n = t), o) : n;
                    }),
                    (o.quantiles = function () {
                        return r.slice();
                    }),
                    (o.copy = function () {
                        return B().domain(t).range(e).unknown(n);
                    }),
                    f.o.apply(o, arguments)
                );
            }
            function Y() {
                var n,
                    t = 0,
                    e = 1,
                    r = 1,
                    o = [0.5],
                    u = [0, 1];
                function c(t) {
                    return null != t && t <= t ? u[(0, O.ZP)(o, t, 0, r)] : n;
                }
                function a() {
                    var n = -1;
                    for (o = new Array(r); ++n < r; ) o[n] = ((n + 1) * e - (n - r) * t) / (r + 1);
                    return c;
                }
                return (
                    (c.domain = function (n) {
                        return arguments.length ? (([t, e] = n), (t = +t), (e = +e), a()) : [t, e];
                    }),
                    (c.range = function (n) {
                        return arguments.length ? ((r = (u = Array.from(n)).length - 1), a()) : u.slice();
                    }),
                    (c.invertExtent = function (n) {
                        var i = u.indexOf(n);
                        return i < 0 ? [NaN, NaN] : i < 1 ? [t, o[0]] : i >= r ? [o[r - 1], e] : [o[i - 1], o[i]];
                    }),
                    (c.unknown = function (t) {
                        return arguments.length ? ((n = t), c) : c;
                    }),
                    (c.thresholds = function () {
                        return o.slice();
                    }),
                    (c.copy = function () {
                        return Y().domain([t, e]).range(u).unknown(n);
                    }),
                    f.o.apply((0, i.Q)(c), arguments)
                );
            }
            function L() {
                var n,
                    t = [0.5],
                    e = [0, 1],
                    r = 1;
                function i(i) {
                    return null != i && i <= i ? e[(0, O.ZP)(t, i, 0, r)] : n;
                }
                return (
                    (i.domain = function (n) {
                        return arguments.length ? ((t = Array.from(n)), (r = Math.min(t.length, e.length - 1)), i) : t.slice();
                    }),
                    (i.range = function (n) {
                        return arguments.length ? ((e = Array.from(n)), (r = Math.min(t.length, e.length - 1)), i) : e.slice();
                    }),
                    (i.invertExtent = function (n) {
                        var r = e.indexOf(n);
                        return [t[r - 1], t[r]];
                    }),
                    (i.unknown = function (t) {
                        return arguments.length ? ((n = t), i) : n;
                    }),
                    (i.copy = function () {
                        return L().domain(t).range(e).unknown(n);
                    }),
                    f.o.apply(i, arguments)
                );
            }
            var I = e(136087),
                H = e(578171),
                R = e(264420),
                j = e(609979),
                V = e(49650),
                Q = e(387956),
                W = e(73832),
                q = e(348392);
            function J(n) {
                if (0 <= n.y && n.y < 100) {
                    var t = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L);
                    return t.setFullYear(n.y), t;
                }
                return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L);
            }
            function G(n) {
                if (0 <= n.y && n.y < 100) {
                    var t = new Date(Date.UTC(-1, n.m, n.d, n.H, n.M, n.S, n.L));
                    return t.setUTCFullYear(n.y), t;
                }
                return new Date(Date.UTC(n.y, n.m, n.d, n.H, n.M, n.S, n.L));
            }
            function z(n, t, e) {
                return { y: n, m: t, d: e, H: 0, M: 0, S: 0, L: 0 };
            }
            var $,
                X,
                K,
                nn = { "-": "", _: " ", 0: "0" },
                tn = /^\s*\d+/,
                en = /^%/,
                rn = /[\\^$*+?|[\]().{}]/g;
            function on(n, t, e) {
                var r = n < 0 ? "-" : "",
                    i = (r ? -n : n) + "",
                    o = i.length;
                return r + (o < e ? new Array(e - o + 1).join(t) + i : i);
            }
            function un(n) {
                return n.replace(rn, "\\$&");
            }
            function cn(n) {
                return new RegExp("^(?:" + n.map(un).join("|") + ")", "i");
            }
            function an(n) {
                return new Map(n.map((n, t) => [n.toLowerCase(), t]));
            }
            function ln(n, t, e) {
                var r = tn.exec(t.slice(e, e + 1));
                return r ? ((n.w = +r[0]), e + r[0].length) : -1;
            }
            function sn(n, t, e) {
                var r = tn.exec(t.slice(e, e + 1));
                return r ? ((n.u = +r[0]), e + r[0].length) : -1;
            }
            function hn(n, t, e) {
                var r = tn.exec(t.slice(e, e + 2));
                return r ? ((n.U = +r[0]), e + r[0].length) : -1;
            }
            function fn(n, t, e) {
                var r = tn.exec(t.slice(e, e + 2));
                return r ? ((n.V = +r[0]), e + r[0].length) : -1;
            }
            function _n(n, t, e) {
                var r = tn.exec(t.slice(e, e + 2));
                return r ? ((n.W = +r[0]), e + r[0].length) : -1;
            }
            function pn(n, t, e) {
                var r = tn.exec(t.slice(e, e + 4));
                return r ? ((n.y = +r[0]), e + r[0].length) : -1;
            }
            function gn(n, t, e) {
                var r = tn.exec(t.slice(e, e + 2));
                return r ? ((n.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length) : -1;
            }
            function yn(n, t, e) {
                var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(e, e + 6));
                return r ? ((n.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length) : -1;
            }
            function dn(n, t, e) {
                var r = tn.exec(t.slice(e, e + 1));
                return r ? ((n.q = 3 * r[0] - 3), e + r[0].length) : -1;
            }
            function vn(n, t, e) {
                var r = tn.exec(t.slice(e, e + 2));
                return r ? ((n.m = r[0] - 1), e + r[0].length) : -1;
            }
            function xn(n, t, e) {
                var r = tn.exec(t.slice(e, e + 2));
                return r ? ((n.d = +r[0]), e + r[0].length) : -1;
            }
            function mn(n, t, e) {
                var r = tn.exec(t.slice(e, e + 3));
                return r ? ((n.m = 0), (n.d = +r[0]), e + r[0].length) : -1;
            }
            function Zn(n, t, e) {
                var r = tn.exec(t.slice(e, e + 2));
                return r ? ((n.H = +r[0]), e + r[0].length) : -1;
            }
            function Tn(n, t, e) {
                var r = tn.exec(t.slice(e, e + 2));
                return r ? ((n.M = +r[0]), e + r[0].length) : -1;
            }
            function wn(n, t, e) {
                var r = tn.exec(t.slice(e, e + 2));
                return r ? ((n.S = +r[0]), e + r[0].length) : -1;
            }
            function Mn(n, t, e) {
                var r = tn.exec(t.slice(e, e + 3));
                return r ? ((n.L = +r[0]), e + r[0].length) : -1;
            }
            function bn(n, t, e) {
                var r = tn.exec(t.slice(e, e + 6));
                return r ? ((n.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
            }
            function Nn(n, t, e) {
                var r = en.exec(t.slice(e, e + 1));
                return r ? e + r[0].length : -1;
            }
            function kn(n, t, e) {
                var r = tn.exec(t.slice(e));
                return r ? ((n.Q = +r[0]), e + r[0].length) : -1;
            }
            function Cn(n, t, e) {
                var r = tn.exec(t.slice(e));
                return r ? ((n.s = +r[0]), e + r[0].length) : -1;
            }
            function An(n, t) {
                return on(n.getDate(), t, 2);
            }
            function Sn(n, t) {
                return on(n.getHours(), t, 2);
            }
            function Dn(n, t) {
                return on(n.getHours() % 12 || 12, t, 2);
            }
            function Pn(n, t) {
                return on(1 + V.rr.count((0, H.jB)(n), n), t, 3);
            }
            function Un(n, t) {
                return on(n.getMilliseconds(), t, 3);
            }
            function En(n, t) {
                return Un(n, t) + "000";
            }
            function On(n, t) {
                return on(n.getMonth() + 1, t, 2);
            }
            function Fn(n, t) {
                return on(n.getMinutes(), t, 2);
            }
            function Bn(n, t) {
                return on(n.getSeconds(), t, 2);
            }
            function Yn(n) {
                var t = n.getDay();
                return 0 === t ? 7 : t;
            }
            function Ln(n, t) {
                return on(j.Zy.count((0, H.jB)(n) - 1, n), t, 2);
            }
            function In(n) {
                var t = n.getDay();
                return t >= 4 || 0 === t ? (0, j.Ig)(n) : j.Ig.ceil(n);
            }
            function Hn(n, t) {
                return (n = In(n)), on(j.Ig.count((0, H.jB)(n), n) + (4 === (0, H.jB)(n).getDay()), t, 2);
            }
            function Rn(n) {
                return n.getDay();
            }
            function jn(n, t) {
                return on(j.Ox.count((0, H.jB)(n) - 1, n), t, 2);
            }
            function Vn(n, t) {
                return on(n.getFullYear() % 100, t, 2);
            }
            function Qn(n, t) {
                return on((n = In(n)).getFullYear() % 100, t, 2);
            }
            function Wn(n, t) {
                return on(n.getFullYear() % 1e4, t, 4);
            }
            function qn(n, t) {
                var e = n.getDay();
                return on((n = e >= 4 || 0 === e ? (0, j.Ig)(n) : j.Ig.ceil(n)).getFullYear() % 1e4, t, 4);
            }
            function Jn(n) {
                var t = n.getTimezoneOffset();
                return (t > 0 ? "-" : ((t *= -1), "+")) + on((t / 60) | 0, "0", 2) + on(t % 60, "0", 2);
            }
            function Gn(n, t) {
                return on(n.getUTCDate(), t, 2);
            }
            function zn(n, t) {
                return on(n.getUTCHours(), t, 2);
            }
            function $n(n, t) {
                return on(n.getUTCHours() % 12 || 12, t, 2);
            }
            function Xn(n, t) {
                return on(1 + V.AN.count((0, H.ol)(n), n), t, 3);
            }
            function Kn(n, t) {
                return on(n.getUTCMilliseconds(), t, 3);
            }
            function nt(n, t) {
                return Kn(n, t) + "000";
            }
            function tt(n, t) {
                return on(n.getUTCMonth() + 1, t, 2);
            }
            function et(n, t) {
                return on(n.getUTCMinutes(), t, 2);
            }
            function rt(n, t) {
                return on(n.getUTCSeconds(), t, 2);
            }
            function it(n) {
                var t = n.getUTCDay();
                return 0 === t ? 7 : t;
            }
            function ot(n, t) {
                return on(j.pI.count((0, H.ol)(n) - 1, n), t, 2);
            }
            function ut(n) {
                var t = n.getUTCDay();
                return t >= 4 || 0 === t ? (0, j.hB)(n) : j.hB.ceil(n);
            }
            function ct(n, t) {
                return (n = ut(n)), on(j.hB.count((0, H.ol)(n), n) + (4 === (0, H.ol)(n).getUTCDay()), t, 2);
            }
            function at(n) {
                return n.getUTCDay();
            }
            function lt(n, t) {
                return on(j.l6.count((0, H.ol)(n) - 1, n), t, 2);
            }
            function st(n, t) {
                return on(n.getUTCFullYear() % 100, t, 2);
            }
            function ht(n, t) {
                return on((n = ut(n)).getUTCFullYear() % 100, t, 2);
            }
            function ft(n, t) {
                return on(n.getUTCFullYear() % 1e4, t, 4);
            }
            function _t(n, t) {
                var e = n.getUTCDay();
                return on((n = e >= 4 || 0 === e ? (0, j.hB)(n) : j.hB.ceil(n)).getUTCFullYear() % 1e4, t, 4);
            }
            function pt() {
                return "+0000";
            }
            function gt() {
                return "%";
            }
            function yt(n) {
                return +n;
            }
            function dt(n) {
                return Math.floor(+n / 1e3);
            }
            function vt(n) {
                return new Date(n);
            }
            function xt(n) {
                return n instanceof Date ? +n : +new Date(+n);
            }
            function mt(n, t, e, r, i, o, u, c, a, l) {
                var f = (0, h.ZP)(),
                    _ = f.invert,
                    p = f.domain,
                    g = l(".%L"),
                    y = l(":%S"),
                    d = l("%I:%M"),
                    v = l("%I %p"),
                    x = l("%a %d"),
                    m = l("%b %d"),
                    Z = l("%B"),
                    T = l("%Y");
                function w(n) {
                    return (a(n) < n ? g : c(n) < n ? y : u(n) < n ? d : o(n) < n ? v : r(n) < n ? (i(n) < n ? x : m) : e(n) < n ? Z : T)(n);
                }
                return (
                    (f.invert = function (n) {
                        return new Date(_(n));
                    }),
                    (f.domain = function (n) {
                        return arguments.length ? p(Array.from(n, xt)) : p().map(vt);
                    }),
                    (f.ticks = function (t) {
                        var e = p();
                        return n(e[0], e[e.length - 1], null == t ? 10 : t);
                    }),
                    (f.tickFormat = function (n, t) {
                        return null == t ? w : l(t);
                    }),
                    (f.nice = function (n) {
                        var e = p();
                        return (n && "function" == typeof n.range) || (n = t(e[0], e[e.length - 1], null == n ? 10 : n)), n ? p(s(e, n)) : f;
                    }),
                    (f.copy = function () {
                        return (0, h.JG)(f, mt(n, t, e, r, i, o, u, c, a, l));
                    }),
                    f
                );
            }
            function Zt() {
                return f.o.apply(mt(I.jK, I._g, H.jB, R.F0, j.Zy, V.rr, Q.WQ, W.Z_, q.E, X).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
            }
            function Tt() {
                return f.o.apply(mt(I.WG, I.jo, H.ol, R.me, j.pI, V.AN, Q.lM, W.rz, q.E, K).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
            }
            ($ = (function (n) {
                var t = n.dateTime,
                    e = n.date,
                    r = n.time,
                    i = n.periods,
                    o = n.days,
                    u = n.shortDays,
                    c = n.months,
                    a = n.shortMonths,
                    l = cn(i),
                    s = an(i),
                    h = cn(o),
                    f = an(o),
                    _ = cn(u),
                    p = an(u),
                    g = cn(c),
                    y = an(c),
                    d = cn(a),
                    v = an(a),
                    x = {
                        a: function (n) {
                            return u[n.getDay()];
                        },
                        A: function (n) {
                            return o[n.getDay()];
                        },
                        b: function (n) {
                            return a[n.getMonth()];
                        },
                        B: function (n) {
                            return c[n.getMonth()];
                        },
                        c: null,
                        d: An,
                        e: An,
                        f: En,
                        g: Qn,
                        G: qn,
                        H: Sn,
                        I: Dn,
                        j: Pn,
                        L: Un,
                        m: On,
                        M: Fn,
                        p: function (n) {
                            return i[+(n.getHours() >= 12)];
                        },
                        q: function (n) {
                            return 1 + ~~(n.getMonth() / 3);
                        },
                        Q: yt,
                        s: dt,
                        S: Bn,
                        u: Yn,
                        U: Ln,
                        V: Hn,
                        w: Rn,
                        W: jn,
                        x: null,
                        X: null,
                        y: Vn,
                        Y: Wn,
                        Z: Jn,
                        "%": gt,
                    },
                    m = {
                        a: function (n) {
                            return u[n.getUTCDay()];
                        },
                        A: function (n) {
                            return o[n.getUTCDay()];
                        },
                        b: function (n) {
                            return a[n.getUTCMonth()];
                        },
                        B: function (n) {
                            return c[n.getUTCMonth()];
                        },
                        c: null,
                        d: Gn,
                        e: Gn,
                        f: nt,
                        g: ht,
                        G: _t,
                        H: zn,
                        I: $n,
                        j: Xn,
                        L: Kn,
                        m: tt,
                        M: et,
                        p: function (n) {
                            return i[+(n.getUTCHours() >= 12)];
                        },
                        q: function (n) {
                            return 1 + ~~(n.getUTCMonth() / 3);
                        },
                        Q: yt,
                        s: dt,
                        S: rt,
                        u: it,
                        U: ot,
                        V: ct,
                        w: at,
                        W: lt,
                        x: null,
                        X: null,
                        y: st,
                        Y: ft,
                        Z: pt,
                        "%": gt,
                    },
                    Z = {
                        a: function (n, t, e) {
                            var r = _.exec(t.slice(e));
                            return r ? ((n.w = p.get(r[0].toLowerCase())), e + r[0].length) : -1;
                        },
                        A: function (n, t, e) {
                            var r = h.exec(t.slice(e));
                            return r ? ((n.w = f.get(r[0].toLowerCase())), e + r[0].length) : -1;
                        },
                        b: function (n, t, e) {
                            var r = d.exec(t.slice(e));
                            return r ? ((n.m = v.get(r[0].toLowerCase())), e + r[0].length) : -1;
                        },
                        B: function (n, t, e) {
                            var r = g.exec(t.slice(e));
                            return r ? ((n.m = y.get(r[0].toLowerCase())), e + r[0].length) : -1;
                        },
                        c: function (n, e, r) {
                            return M(n, t, e, r);
                        },
                        d: xn,
                        e: xn,
                        f: bn,
                        g: gn,
                        G: pn,
                        H: Zn,
                        I: Zn,
                        j: mn,
                        L: Mn,
                        m: vn,
                        M: Tn,
                        p: function (n, t, e) {
                            var r = l.exec(t.slice(e));
                            return r ? ((n.p = s.get(r[0].toLowerCase())), e + r[0].length) : -1;
                        },
                        q: dn,
                        Q: kn,
                        s: Cn,
                        S: wn,
                        u: sn,
                        U: hn,
                        V: fn,
                        w: ln,
                        W: _n,
                        x: function (n, t, r) {
                            return M(n, e, t, r);
                        },
                        X: function (n, t, e) {
                            return M(n, r, t, e);
                        },
                        y: gn,
                        Y: pn,
                        Z: yn,
                        "%": Nn,
                    };
                function T(n, t) {
                    return function (e) {
                        var r,
                            i,
                            o,
                            u = [],
                            c = -1,
                            a = 0,
                            l = n.length;
                        for (e instanceof Date || (e = new Date(+e)); ++c < l; ) 37 === n.charCodeAt(c) && (u.push(n.slice(a, c)), null != (i = nn[(r = n.charAt(++c))]) ? (r = n.charAt(++c)) : (i = "e" === r ? " " : "0"), (o = t[r]) && (r = o(e, i)), u.push(r), (a = c + 1));
                        return u.push(n.slice(a, c)), u.join("");
                    };
                }
                function w(n, t) {
                    return function (e) {
                        var r,
                            i,
                            o = z(1900, void 0, 1);
                        if (M(o, n, (e += ""), 0) != e.length) return null;
                        if ("Q" in o) return new Date(o.Q);
                        if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
                        if ((t && !("Z" in o) && (o.Z = 0), "p" in o && (o.H = (o.H % 12) + 12 * o.p), void 0 === o.m && (o.m = "q" in o ? o.q : 0), "V" in o)) {
                            if (o.V < 1 || o.V > 53) return null;
                            "w" in o || (o.w = 1), "Z" in o ? ((i = (r = G(z(o.y, 0, 1))).getUTCDay()), (r = i > 4 || 0 === i ? j.l6.ceil(r) : (0, j.l6)(r)), (r = V.AN.offset(r, 7 * (o.V - 1))), (o.y = r.getUTCFullYear()), (o.m = r.getUTCMonth()), (o.d = r.getUTCDate() + ((o.w + 6) % 7))) : ((i = (r = J(z(o.y, 0, 1))).getDay()), (r = i > 4 || 0 === i ? j.Ox.ceil(r) : (0, j.Ox)(r)), (r = V.rr.offset(r, 7 * (o.V - 1))), (o.y = r.getFullYear()), (o.m = r.getMonth()), (o.d = r.getDate() + ((o.w + 6) % 7)));
                        } else ("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), (i = "Z" in o ? G(z(o.y, 0, 1)).getUTCDay() : J(z(o.y, 0, 1)).getDay()), (o.m = 0), (o.d = "W" in o ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7) : o.w + 7 * o.U - ((i + 6) % 7)));
                        return "Z" in o ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), G(o)) : J(o);
                    };
                }
                function M(n, t, e, r) {
                    for (var i, o, u = 0, c = t.length, a = e.length; u < c; ) {
                        if (r >= a) return -1;
                        if (37 === (i = t.charCodeAt(u++))) {
                            if (((i = t.charAt(u++)), !(o = Z[i in nn ? t.charAt(u++) : i]) || (r = o(n, e, r)) < 0)) return -1;
                        } else if (i != e.charCodeAt(r++)) return -1;
                    }
                    return r;
                }
                return (
                    (x.x = T(e, x)),
                    (x.X = T(r, x)),
                    (x.c = T(t, x)),
                    (m.x = T(e, m)),
                    (m.X = T(r, m)),
                    (m.c = T(t, m)),
                    {
                        format: function (n) {
                            var t = T((n += ""), x);
                            return (
                                (t.toString = function () {
                                    return n;
                                }),
                                t
                            );
                        },
                        parse: function (n) {
                            var t = w((n += ""), !1);
                            return (
                                (t.toString = function () {
                                    return n;
                                }),
                                t
                            );
                        },
                        utcFormat: function (n) {
                            var t = T((n += ""), m);
                            return (
                                (t.toString = function () {
                                    return n;
                                }),
                                t
                            );
                        },
                        utcParse: function (n) {
                            var t = w((n += ""), !0);
                            return (
                                (t.toString = function () {
                                    return n;
                                }),
                                t
                            );
                        },
                    }
                );
            })({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] })),
                (X = $.format),
                $.parse,
                (K = $.utcFormat),
                $.utcParse;
            var wt = e(847027),
                Mt = e(985397);
            function bt() {
                var n,
                    t,
                    e,
                    r,
                    i,
                    o = 0,
                    u = 1,
                    c = h.yR,
                    a = !1;
                function l(t) {
                    return null == t || isNaN((t = +t)) ? i : c(0 === e ? 0.5 : ((t = (r(t) - n) * e), a ? Math.max(0, Math.min(1, t)) : t));
                }
                function s(n) {
                    return function (t) {
                        var e, r;
                        return arguments.length ? (([e, r] = t), (c = n(e, r)), l) : [c(0), c(1)];
                    };
                }
                return (
                    (l.domain = function (i) {
                        return arguments.length ? (([o, u] = i), (n = r((o = +o))), (t = r((u = +u))), (e = n === t ? 0 : 1 / (t - n)), l) : [o, u];
                    }),
                    (l.clamp = function (n) {
                        return arguments.length ? ((a = !!n), l) : a;
                    }),
                    (l.interpolator = function (n) {
                        return arguments.length ? ((c = n), l) : c;
                    }),
                    (l.range = s(wt.Z)),
                    (l.rangeRound = s(Mt.Z)),
                    (l.unknown = function (n) {
                        return arguments.length ? ((i = n), l) : i;
                    }),
                    function (i) {
                        return (r = i), (n = i(o)), (t = i(u)), (e = n === t ? 0 : 1 / (t - n)), l;
                    }
                );
            }
            function Nt(n, t) {
                return t.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown());
            }
            function kt() {
                var n = (0, i.Q)(bt()(h.yR));
                return (
                    (n.copy = function () {
                        return Nt(n, kt());
                    }),
                    f.O.apply(n, arguments)
                );
            }
            function Ct() {
                var n = x(bt()).domain([1, 10]);
                return (
                    (n.copy = function () {
                        return Nt(n, Ct()).base(n.base());
                    }),
                    f.O.apply(n, arguments)
                );
            }
            function At() {
                var n = w(bt());
                return (
                    (n.copy = function () {
                        return Nt(n, At()).constant(n.constant());
                    }),
                    f.O.apply(n, arguments)
                );
            }
            function St() {
                var n = A(bt());
                return (
                    (n.copy = function () {
                        return Nt(n, St()).exponent(n.exponent());
                    }),
                    f.O.apply(n, arguments)
                );
            }
            function Dt() {
                return St.apply(null, arguments).exponent(0.5);
            }
            function Pt() {
                var n = [],
                    t = h.yR;
                function e(e) {
                    if (null != e && !isNaN((e = +e))) return t(((0, O.ZP)(n, e, 1) - 1) / (n.length - 1));
                }
                return (
                    (e.domain = function (t) {
                        if (!arguments.length) return n.slice();
                        n = [];
                        for (let e of t) null == e || isNaN((e = +e)) || n.push(e);
                        return n.sort(F.Z), e;
                    }),
                    (e.interpolator = function (n) {
                        return arguments.length ? ((t = n), e) : t;
                    }),
                    (e.range = function () {
                        return n.map((e, r) => t(r / (n.length - 1)));
                    }),
                    (e.quantiles = function (t) {
                        return Array.from({ length: t + 1 }, (e, r) => (0, E.ZP)(n, r / t));
                    }),
                    (e.copy = function () {
                        return Pt(t).domain(n);
                    }),
                    f.O.apply(e, arguments)
                );
            }
            var Ut = e(45729);
            function Et() {
                var n,
                    t,
                    e,
                    r,
                    i,
                    o,
                    u,
                    c = 0,
                    a = 0.5,
                    l = 1,
                    s = 1,
                    f = h.yR,
                    _ = !1;
                function p(n) {
                    return isNaN((n = +n)) ? u : ((n = 0.5 + ((n = +o(n)) - t) * (s * n < s * t ? r : i)), f(_ ? Math.max(0, Math.min(1, n)) : n));
                }
                function g(n) {
                    return function (t) {
                        var e, r, i;
                        return arguments.length ? (([e, r, i] = t), (f = (0, Ut.Z)(n, [e, r, i])), p) : [f(0), f(0.5), f(1)];
                    };
                }
                return (
                    (p.domain = function (u) {
                        return arguments.length ? (([c, a, l] = u), (n = o((c = +c))), (t = o((a = +a))), (e = o((l = +l))), (r = n === t ? 0 : 0.5 / (t - n)), (i = t === e ? 0 : 0.5 / (e - t)), (s = t < n ? -1 : 1), p) : [c, a, l];
                    }),
                    (p.clamp = function (n) {
                        return arguments.length ? ((_ = !!n), p) : _;
                    }),
                    (p.interpolator = function (n) {
                        return arguments.length ? ((f = n), p) : f;
                    }),
                    (p.range = g(wt.Z)),
                    (p.rangeRound = g(Mt.Z)),
                    (p.unknown = function (n) {
                        return arguments.length ? ((u = n), p) : u;
                    }),
                    function (u) {
                        return (o = u), (n = u(c)), (t = u(a)), (e = u(l)), (r = n === t ? 0 : 0.5 / (t - n)), (i = t === e ? 0 : 0.5 / (e - t)), (s = t < n ? -1 : 1), p;
                    }
                );
            }
            function Ot() {
                var n = (0, i.Q)(Et()(h.yR));
                return (
                    (n.copy = function () {
                        return Nt(n, Ot());
                    }),
                    f.O.apply(n, arguments)
                );
            }
            function Ft() {
                var n = x(Et()).domain([0.1, 1, 10]);
                return (
                    (n.copy = function () {
                        return Nt(n, Ft()).base(n.base());
                    }),
                    f.O.apply(n, arguments)
                );
            }
            function Bt() {
                var n = w(Et());
                return (
                    (n.copy = function () {
                        return Nt(n, Bt()).constant(n.constant());
                    }),
                    f.O.apply(n, arguments)
                );
            }
            function Yt() {
                var n = A(Et());
                return (
                    (n.copy = function () {
                        return Nt(n, Yt()).exponent(n.exponent());
                    }),
                    f.O.apply(n, arguments)
                );
            }
            function Lt() {
                return Yt.apply(null, arguments).exponent(0.5);
            }
            var It = e(93901);
        },
        668753: (n, t, e) => {
            function r(n, t) {
                switch (arguments.length) {
                    case 0:
                        break;
                    case 1:
                        this.range(n);
                        break;
                    default:
                        this.range(t).domain(n);
                }
                return this;
            }
            function i(n, t) {
                switch (arguments.length) {
                    case 0:
                        break;
                    case 1:
                        "function" == typeof n ? this.interpolator(n) : this.range(n);
                        break;
                    default:
                        this.domain(n), "function" == typeof t ? this.interpolator(t) : this.range(t);
                }
                return this;
            }
            e.d(t, { O: () => i, o: () => r });
        },
        478622: (n, t, e) => {
            e.d(t, { Q: () => c, Z: () => a });
            var r = e(452497),
                i = e(604716),
                o = e(668753),
                u = e(93901);
            function c(n) {
                var t = n.domain;
                return (
                    (n.ticks = function (n) {
                        var e = t();
                        return (0, r.ZP)(e[0], e[e.length - 1], null == n ? 10 : n);
                    }),
                    (n.tickFormat = function (n, e) {
                        var r = t();
                        return (0, u.Z)(r[0], r[r.length - 1], null == n ? 10 : n, e);
                    }),
                    (n.nice = function (e) {
                        null == e && (e = 10);
                        var i,
                            o,
                            u = t(),
                            c = 0,
                            a = u.length - 1,
                            l = u[c],
                            s = u[a],
                            h = 10;
                        for (s < l && ((o = l), (l = s), (s = o), (o = c), (c = a), (a = o)); h-- > 0; ) {
                            if ((o = (0, r.G9)(l, s, e)) === i) return (u[c] = l), (u[a] = s), t(u);
                            if (o > 0) (l = Math.floor(l / o) * o), (s = Math.ceil(s / o) * o);
                            else {
                                if (!(o < 0)) break;
                                (l = Math.ceil(l * o) / o), (s = Math.floor(s * o) / o);
                            }
                            i = o;
                        }
                        return n;
                    }),
                    n
                );
            }
            function a() {
                var n = (0, i.ZP)();
                return (
                    (n.copy = function () {
                        return (0, i.JG)(n, a());
                    }),
                    o.o.apply(n, arguments),
                    c(n)
                );
            }
        },
        278724: (n, t, e) => {
            function r(n) {
                return +n;
            }
            e.d(t, { Z: () => r });
        },
        618928: (n, t, e) => {
            e.d(t, { O: () => o, Z: () => u });
            var r = e(856332),
                i = e(668753);
            const o = Symbol("implicit");
            function u() {
                var n = new r.L(),
                    t = [],
                    e = [],
                    c = o;
                function a(r) {
                    let i = n.get(r);
                    if (void 0 === i) {
                        if (c !== o) return c;
                        n.set(r, (i = t.push(r) - 1));
                    }
                    return e[i % e.length];
                }
                return (
                    (a.domain = function (e) {
                        if (!arguments.length) return t.slice();
                        (t = []), (n = new r.L());
                        for (const r of e) n.has(r) || n.set(r, t.push(r) - 1);
                        return a;
                    }),
                    (a.range = function (n) {
                        return arguments.length ? ((e = Array.from(n)), a) : e.slice();
                    }),
                    (a.unknown = function (n) {
                        return arguments.length ? ((c = n), a) : c;
                    }),
                    (a.copy = function () {
                        return u(t, e).unknown(c);
                    }),
                    i.o.apply(a, arguments),
                    a
                );
            }
        },
        93901: (n, t, e) => {
            e.d(t, { Z: () => l });
            var r = e(452497),
                i = e(39255),
                o = e(578419),
                u = e(548230),
                c = e(48728),
                a = e(357332);
            function l(n, t, e, l) {
                var s,
                    h = (0, r.ly)(n, t, e);
                switch ((l = (0, i.Z)(null == l ? ",f" : l)).type) {
                    case "s":
                        var f = Math.max(Math.abs(n), Math.abs(t));
                        return null != l.precision || isNaN((s = (0, o.Z)(h, f))) || (l.precision = s), (0, u.jH)(l, f);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != l.precision || isNaN((s = (0, c.Z)(h, Math.max(Math.abs(n), Math.abs(t))))) || (l.precision = s - ("e" === l.type));
                        break;
                    case "f":
                    case "%":
                        null != l.precision || isNaN((s = (0, a.Z)(h))) || (l.precision = s - 2 * ("%" === l.type));
                }
                return (0, u.WU)(l);
            }
        },
        563073: (n, t, e) => {
            e.d(t, { Z: () => l });
            var r = e(716426),
                i = e(206677),
                o = e(798282),
                u = e(976985),
                c = e(939086),
                a = e(813353);
            function l(n, t, e) {
                var l = null,
                    s = (0, i.Z)(!0),
                    h = null,
                    f = o.Z,
                    _ = null,
                    p = (0, c.d)(g);
                function g(i) {
                    var o,
                        u,
                        c,
                        a,
                        g,
                        y = (i = (0, r.Z)(i)).length,
                        d = !1,
                        v = new Array(y),
                        x = new Array(y);
                    for (null == h && (_ = f((g = p()))), o = 0; o <= y; ++o) {
                        if (!(o < y && s((a = i[o]), o, i)) === d)
                            if ((d = !d)) (u = o), _.areaStart(), _.lineStart();
                            else {
                                for (_.lineEnd(), _.lineStart(), c = o - 1; c >= u; --c) _.point(v[c], x[c]);
                                _.lineEnd(), _.areaEnd();
                            }
                        d && ((v[o] = +n(a, o, i)), (x[o] = +t(a, o, i)), _.point(l ? +l(a, o, i) : v[o], e ? +e(a, o, i) : x[o]));
                    }
                    if (g) return (_ = null), g + "" || null;
                }
                function y() {
                    return (0, u.Z)().defined(s).curve(f).context(h);
                }
                return (
                    (n = "function" == typeof n ? n : void 0 === n ? a.x : (0, i.Z)(+n)),
                    (t = "function" == typeof t ? t : void 0 === t ? (0, i.Z)(0) : (0, i.Z)(+t)),
                    (e = "function" == typeof e ? e : void 0 === e ? a.y : (0, i.Z)(+e)),
                    (g.x = function (t) {
                        return arguments.length ? ((n = "function" == typeof t ? t : (0, i.Z)(+t)), (l = null), g) : n;
                    }),
                    (g.x0 = function (t) {
                        return arguments.length ? ((n = "function" == typeof t ? t : (0, i.Z)(+t)), g) : n;
                    }),
                    (g.x1 = function (n) {
                        return arguments.length ? ((l = null == n ? null : "function" == typeof n ? n : (0, i.Z)(+n)), g) : l;
                    }),
                    (g.y = function (n) {
                        return arguments.length ? ((t = "function" == typeof n ? n : (0, i.Z)(+n)), (e = null), g) : t;
                    }),
                    (g.y0 = function (n) {
                        return arguments.length ? ((t = "function" == typeof n ? n : (0, i.Z)(+n)), g) : t;
                    }),
                    (g.y1 = function (n) {
                        return arguments.length ? ((e = null == n ? null : "function" == typeof n ? n : (0, i.Z)(+n)), g) : e;
                    }),
                    (g.lineX0 = g.lineY0 =
                        function () {
                            return y().x(n).y(t);
                        }),
                    (g.lineY1 = function () {
                        return y().x(n).y(e);
                    }),
                    (g.lineX1 = function () {
                        return y().x(l).y(t);
                    }),
                    (g.defined = function (n) {
                        return arguments.length ? ((s = "function" == typeof n ? n : (0, i.Z)(!!n)), g) : s;
                    }),
                    (g.curve = function (n) {
                        return arguments.length ? ((f = n), null != h && (_ = f(h)), g) : f;
                    }),
                    (g.context = function (n) {
                        return arguments.length ? (null == n ? (h = _ = null) : (_ = f((h = n))), g) : h;
                    }),
                    g
                );
            }
        },
        716426: (n, t, e) => {
            e.d(t, { Z: () => r });
            Array.prototype.slice;
            function r(n) {
                return "object" == typeof n && "length" in n ? n : Array.from(n);
            }
        },
        206677: (n, t, e) => {
            function r(n) {
                return function () {
                    return n;
                };
            }
            e.d(t, { Z: () => r });
        },
        963698: (n, t, e) => {
            function r(n, t, e) {
                n._context.bezierCurveTo((2 * n._x0 + n._x1) / 3, (2 * n._y0 + n._y1) / 3, (n._x0 + 2 * n._x1) / 3, (n._y0 + 2 * n._y1) / 3, (n._x0 + 4 * n._x1 + t) / 6, (n._y0 + 4 * n._y1 + e) / 6);
            }
            function i(n) {
                this._context = n;
            }
            function o(n) {
                return new i(n);
            }
            e.d(t, { ZP: () => o, xm: () => r }),
                (i.prototype = {
                    areaStart: function () {
                        this._line = 0;
                    },
                    areaEnd: function () {
                        this._line = NaN;
                    },
                    lineStart: function () {
                        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 3:
                                r(this, this._x1, this._y1);
                            case 2:
                                this._context.lineTo(this._x1, this._y1);
                        }
                        (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(), (this._line = 1 - this._line);
                    },
                    point: function (n, t) {
                        switch (((n = +n), (t = +t), this._point)) {
                            case 0:
                                (this._point = 1), this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t);
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                (this._point = 3), this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                            default:
                                r(this, n, t);
                        }
                        (this._x0 = this._x1), (this._x1 = n), (this._y0 = this._y1), (this._y1 = t);
                    },
                });
        },
        277694: (n, t, e) => {
            e.d(t, { Z: () => u });
            var r = e(186004),
                i = e(963698);
            function o(n) {
                this._context = n;
            }
            function u(n) {
                return new o(n);
            }
            o.prototype = {
                areaStart: r.Z,
                areaEnd: r.Z,
                lineStart: function () {
                    (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN), (this._point = 0);
                },
                lineEnd: function () {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x2, this._y2), this._context.closePath();
                            break;
                        case 2:
                            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
                    }
                },
                point: function (n, t) {
                    switch (((n = +n), (t = +t), this._point)) {
                        case 0:
                            (this._point = 1), (this._x2 = n), (this._y2 = t);
                            break;
                        case 1:
                            (this._point = 2), (this._x3 = n), (this._y3 = t);
                            break;
                        case 2:
                            (this._point = 3), (this._x4 = n), (this._y4 = t), this._context.moveTo((this._x0 + 4 * this._x1 + n) / 6, (this._y0 + 4 * this._y1 + t) / 6);
                            break;
                        default:
                            (0, i.xm)(this, n, t);
                    }
                    (this._x0 = this._x1), (this._x1 = n), (this._y0 = this._y1), (this._y1 = t);
                },
            };
        },
        197238: (n, t, e) => {
            e.d(t, { Z: () => o });
            var r = e(963698);
            function i(n) {
                this._context = n;
            }
            function o(n) {
                return new i(n);
            }
            i.prototype = {
                areaStart: function () {
                    this._line = 0;
                },
                areaEnd: function () {
                    this._line = NaN;
                },
                lineStart: function () {
                    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
                },
                lineEnd: function () {
                    (this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(), (this._line = 1 - this._line);
                },
                point: function (n, t) {
                    switch (((n = +n), (t = +t), this._point)) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3;
                            var e = (this._x0 + 4 * this._x1 + n) / 6,
                                i = (this._y0 + 4 * this._y1 + t) / 6;
                            this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            (0, r.xm)(this, n, t);
                    }
                    (this._x0 = this._x1), (this._x1 = n), (this._y0 = this._y1), (this._y1 = t);
                },
            };
        },
        991479: (n, t, e) => {
            e.d(t, { BW: () => o, sj: () => i });
            class r {
                constructor(n, t) {
                    (this._context = n), (this._x = t);
                }
                areaStart() {
                    this._line = 0;
                }
                areaEnd() {
                    this._line = NaN;
                }
                lineStart() {
                    this._point = 0;
                }
                lineEnd() {
                    (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(), (this._line = 1 - this._line);
                }
                point(n, t) {
                    switch (((n = +n), (t = +t), this._point)) {
                        case 0:
                            (this._point = 1), this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            this._x ? this._context.bezierCurveTo((this._x0 = (this._x0 + n) / 2), this._y0, this._x0, t, n, t) : this._context.bezierCurveTo(this._x0, (this._y0 = (this._y0 + t) / 2), n, this._y0, n, t);
                    }
                    (this._x0 = n), (this._y0 = t);
                }
            }
            function i(n) {
                return new r(n, !0);
            }
            function o(n) {
                return new r(n, !1);
            }
        },
        798282: (n, t, e) => {
            function r(n) {
                this._context = n;
            }
            function i(n) {
                return new r(n);
            }
            e.d(t, { Z: () => i }),
                (r.prototype = {
                    areaStart: function () {
                        this._line = 0;
                    },
                    areaEnd: function () {
                        this._line = NaN;
                    },
                    lineStart: function () {
                        this._point = 0;
                    },
                    lineEnd: function () {
                        (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(), (this._line = 1 - this._line);
                    },
                    point: function (n, t) {
                        switch (((n = +n), (t = +t), this._point)) {
                            case 0:
                                (this._point = 1), this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t);
                                break;
                            case 1:
                                this._point = 2;
                            default:
                                this._context.lineTo(n, t);
                        }
                    },
                });
        },
        642977: (n, t, e) => {
            e.d(t, { Z: () => o });
            var r = e(186004);
            function i(n) {
                this._context = n;
            }
            function o(n) {
                return new i(n);
            }
            i.prototype = {
                areaStart: r.Z,
                areaEnd: r.Z,
                lineStart: function () {
                    this._point = 0;
                },
                lineEnd: function () {
                    this._point && this._context.closePath();
                },
                point: function (n, t) {
                    (n = +n), (t = +t), this._point ? this._context.lineTo(n, t) : ((this._point = 1), this._context.moveTo(n, t));
                },
            };
        },
        66481: (n, t, e) => {
            function r(n) {
                return n < 0 ? -1 : 1;
            }
            function i(n, t, e) {
                var i = n._x1 - n._x0,
                    o = t - n._x1,
                    u = (n._y1 - n._y0) / (i || (o < 0 && -0)),
                    c = (e - n._y1) / (o || (i < 0 && -0)),
                    a = (u * o + c * i) / (i + o);
                return (r(u) + r(c)) * Math.min(Math.abs(u), Math.abs(c), 0.5 * Math.abs(a)) || 0;
            }
            function o(n, t) {
                var e = n._x1 - n._x0;
                return e ? ((3 * (n._y1 - n._y0)) / e - t) / 2 : t;
            }
            function u(n, t, e) {
                var r = n._x0,
                    i = n._y0,
                    o = n._x1,
                    u = n._y1,
                    c = (o - r) / 3;
                n._context.bezierCurveTo(r + c, i + c * t, o - c, u - c * e, o, u);
            }
            function c(n) {
                this._context = n;
            }
            function a(n) {
                this._context = new l(n);
            }
            function l(n) {
                this._context = n;
            }
            function s(n) {
                return new c(n);
            }
            function h(n) {
                return new a(n);
            }
            e.d(t, { Z: () => s, s: () => h }),
                (c.prototype = {
                    areaStart: function () {
                        this._line = 0;
                    },
                    areaEnd: function () {
                        this._line = NaN;
                    },
                    lineStart: function () {
                        (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0);
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 2:
                                this._context.lineTo(this._x1, this._y1);
                                break;
                            case 3:
                                u(this, this._t0, o(this, this._t0));
                        }
                        (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(), (this._line = 1 - this._line);
                    },
                    point: function (n, t) {
                        var e = NaN;
                        if (((t = +t), (n = +n) !== this._x1 || t !== this._y1)) {
                            switch (this._point) {
                                case 0:
                                    (this._point = 1), this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t);
                                    break;
                                case 1:
                                    this._point = 2;
                                    break;
                                case 2:
                                    (this._point = 3), u(this, o(this, (e = i(this, n, t))), e);
                                    break;
                                default:
                                    u(this, this._t0, (e = i(this, n, t)));
                            }
                            (this._x0 = this._x1), (this._x1 = n), (this._y0 = this._y1), (this._y1 = t), (this._t0 = e);
                        }
                    },
                }),
                ((a.prototype = Object.create(c.prototype)).point = function (n, t) {
                    c.prototype.point.call(this, t, n);
                }),
                (l.prototype = {
                    moveTo: function (n, t) {
                        this._context.moveTo(t, n);
                    },
                    closePath: function () {
                        this._context.closePath();
                    },
                    lineTo: function (n, t) {
                        this._context.lineTo(t, n);
                    },
                    bezierCurveTo: function (n, t, e, r, i, o) {
                        this._context.bezierCurveTo(t, n, r, e, o, i);
                    },
                });
        },
        629389: (n, t, e) => {
            function r(n) {
                this._context = n;
            }
            function i(n) {
                var t,
                    e,
                    r = n.length - 1,
                    i = new Array(r),
                    o = new Array(r),
                    u = new Array(r);
                for (i[0] = 0, o[0] = 2, u[0] = n[0] + 2 * n[1], t = 1; t < r - 1; ++t) (i[t] = 1), (o[t] = 4), (u[t] = 4 * n[t] + 2 * n[t + 1]);
                for (i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * n[r - 1] + n[r], t = 1; t < r; ++t) (e = i[t] / o[t - 1]), (o[t] -= e), (u[t] -= e * u[t - 1]);
                for (i[r - 1] = u[r - 1] / o[r - 1], t = r - 2; t >= 0; --t) i[t] = (u[t] - i[t + 1]) / o[t];
                for (o[r - 1] = (n[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) o[t] = 2 * n[t + 1] - i[t + 1];
                return [i, o];
            }
            function o(n) {
                return new r(n);
            }
            e.d(t, { Z: () => o }),
                (r.prototype = {
                    areaStart: function () {
                        this._line = 0;
                    },
                    areaEnd: function () {
                        this._line = NaN;
                    },
                    lineStart: function () {
                        (this._x = []), (this._y = []);
                    },
                    lineEnd: function () {
                        var n = this._x,
                            t = this._y,
                            e = n.length;
                        if (e)
                            if ((this._line ? this._context.lineTo(n[0], t[0]) : this._context.moveTo(n[0], t[0]), 2 === e)) this._context.lineTo(n[1], t[1]);
                            else for (var r = i(n), o = i(t), u = 0, c = 1; c < e; ++u, ++c) this._context.bezierCurveTo(r[0][u], o[0][u], r[1][u], o[1][u], n[c], t[c]);
                        (this._line || (0 !== this._line && 1 === e)) && this._context.closePath(), (this._line = 1 - this._line), (this._x = this._y = null);
                    },
                    point: function (n, t) {
                        this._x.push(+n), this._y.push(+t);
                    },
                });
        },
        173729: (n, t, e) => {
            function r(n, t) {
                (this._context = n), (this._t = t);
            }
            function i(n) {
                return new r(n, 0.5);
            }
            function o(n) {
                return new r(n, 0);
            }
            function u(n) {
                return new r(n, 1);
            }
            e.d(t, { RN: () => o, ZP: () => i, cD: () => u }),
                (r.prototype = {
                    areaStart: function () {
                        this._line = 0;
                    },
                    areaEnd: function () {
                        this._line = NaN;
                    },
                    lineStart: function () {
                        (this._x = this._y = NaN), (this._point = 0);
                    },
                    lineEnd: function () {
                        0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(), this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line));
                    },
                    point: function (n, t) {
                        switch (((n = +n), (t = +t), this._point)) {
                            case 0:
                                (this._point = 1), this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t);
                                break;
                            case 1:
                                this._point = 2;
                            default:
                                if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(n, t);
                                else {
                                    var e = this._x * (1 - this._t) + n * this._t;
                                    this._context.lineTo(e, this._y), this._context.lineTo(e, t);
                                }
                        }
                        (this._x = n), (this._y = t);
                    },
                });
        },
        976985: (n, t, e) => {
            e.d(t, { Z: () => a });
            var r = e(716426),
                i = e(206677),
                o = e(798282),
                u = e(939086),
                c = e(813353);
            function a(n, t) {
                var e = (0, i.Z)(!0),
                    a = null,
                    l = o.Z,
                    s = null,
                    h = (0, u.d)(f);
                function f(i) {
                    var o,
                        u,
                        c,
                        f = (i = (0, r.Z)(i)).length,
                        _ = !1;
                    for (null == a && (s = l((c = h()))), o = 0; o <= f; ++o) !(o < f && e((u = i[o]), o, i)) === _ && ((_ = !_) ? s.lineStart() : s.lineEnd()), _ && s.point(+n(u, o, i), +t(u, o, i));
                    if (c) return (s = null), c + "" || null;
                }
                return (
                    (n = "function" == typeof n ? n : void 0 === n ? c.x : (0, i.Z)(n)),
                    (t = "function" == typeof t ? t : void 0 === t ? c.y : (0, i.Z)(t)),
                    (f.x = function (t) {
                        return arguments.length ? ((n = "function" == typeof t ? t : (0, i.Z)(+t)), f) : n;
                    }),
                    (f.y = function (n) {
                        return arguments.length ? ((t = "function" == typeof n ? n : (0, i.Z)(+n)), f) : t;
                    }),
                    (f.defined = function (n) {
                        return arguments.length ? ((e = "function" == typeof n ? n : (0, i.Z)(!!n)), f) : e;
                    }),
                    (f.curve = function (n) {
                        return arguments.length ? ((l = n), null != a && (s = l(a)), f) : l;
                    }),
                    (f.context = function (n) {
                        return arguments.length ? (null == n ? (a = s = null) : (s = l((a = n))), f) : a;
                    }),
                    f
                );
            }
        },
        796333: (n, t, e) => {
            e.d(t, { BZ: () => a, O$: () => o, VV: () => i, _b: () => u, mC: () => r, pi: () => c });
            Math.abs, Math.atan2;
            const r = Math.cos,
                i = (Math.max, Math.min),
                o = Math.sin,
                u = Math.sqrt,
                c = Math.PI,
                a = 2 * c;
        },
        186004: (n, t, e) => {
            function r() {}
            e.d(t, { Z: () => r });
        },
        34152: (n, t, e) => {
            e.d(t, { Z: () => i });
            var r = e(13236);
            function i(n, t) {
                if ((i = n.length) > 0) {
                    for (var e, i, o, u = 0, c = n[0].length; u < c; ++u) {
                        for (o = e = 0; e < i; ++e) o += n[e][u][1] || 0;
                        if (o) for (e = 0; e < i; ++e) n[e][u][1] /= o;
                    }
                    (0, r.Z)(n, t);
                }
            }
        },
        13236: (n, t, e) => {
            function r(n, t) {
                if ((i = n.length) > 1) for (var e, r, i, o = 1, u = n[t[0]], c = u.length; o < i; ++o) for (r = u, u = n[t[o]], e = 0; e < c; ++e) u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
            }
            e.d(t, { Z: () => r });
        },
        479880: (n, t, e) => {
            e.d(t, { Z: () => i });
            var r = e(13236);
            function i(n, t) {
                if ((e = n.length) > 0) {
                    for (var e, i = 0, o = n[t[0]], u = o.length; i < u; ++i) {
                        for (var c = 0, a = 0; c < e; ++c) a += n[c][i][1] || 0;
                        o[i][1] += o[i][0] = -a / 2;
                    }
                    (0, r.Z)(n, t);
                }
            }
        },
        460344: (n, t, e) => {
            e.d(t, { Z: () => i });
            var r = e(13236);
            function i(n, t) {
                if ((o = n.length) > 0 && (i = (e = n[t[0]]).length) > 0) {
                    for (var e, i, o, u = 0, c = 1; c < i; ++c) {
                        for (var a = 0, l = 0, s = 0; a < o; ++a) {
                            for (var h = n[t[a]], f = h[c][1] || 0, _ = (f - (h[c - 1][1] || 0)) / 2, p = 0; p < a; ++p) {
                                var g = n[t[p]];
                                _ += (g[c][1] || 0) - (g[c - 1][1] || 0);
                            }
                            (l += f), (s += _ * f);
                        }
                        (e[c - 1][1] += e[c - 1][0] = u), l && (u -= s / l);
                    }
                    (e[c - 1][1] += e[c - 1][0] = u), (0, r.Z)(n, t);
                }
            }
        },
        191233: (n, t, e) => {
            function r(n) {
                for (var t = n.length, e = new Array(t); --t >= 0; ) e[t] = t;
                return e;
            }
            e.d(t, { Z: () => r });
        },
        939086: (n, t, e) => {
            e.d(t, { d: () => i });
            var r = e(19205);
            function i(n) {
                let t = 3;
                return (
                    (n.digits = function (e) {
                        if (!arguments.length) return t;
                        if (null == e) t = null;
                        else {
                            const n = Math.floor(e);
                            if (!(n >= 0)) throw new RangeError(`invalid digits: ${e}`);
                            t = n;
                        }
                        return n;
                    }),
                    () => new r.y$(t)
                );
            }
        },
        813353: (n, t, e) => {
            function r(n) {
                return n[0];
            }
            function i(n) {
                return n[1];
            }
            e.d(t, { x: () => r, y: () => i });
        },
        601106: (n, t, e) => {
            e.d(t, { Z: () => l });
            var r = e(716426),
                i = e(206677),
                o = e(13236),
                u = e(191233);
            function c(n, t) {
                return n[t];
            }
            function a(n) {
                const t = [];
                return (t.key = n), t;
            }
            function l() {
                var n = (0, i.Z)([]),
                    t = u.Z,
                    e = o.Z,
                    l = c;
                function s(i) {
                    var o,
                        u,
                        c = Array.from(n.apply(this, arguments), a),
                        s = c.length,
                        h = -1;
                    for (const n of i) for (o = 0, ++h; o < s; ++o) (c[o][h] = [0, +l(n, c[o].key, h, i)]).data = n;
                    for (o = 0, u = (0, r.Z)(t(c)); o < s; ++o) c[u[o]].index = o;
                    return e(c, u), c;
                }
                return (
                    (s.keys = function (t) {
                        return arguments.length ? ((n = "function" == typeof t ? t : (0, i.Z)(Array.from(t))), s) : n;
                    }),
                    (s.value = function (n) {
                        return arguments.length ? ((l = "function" == typeof n ? n : (0, i.Z)(+n)), s) : l;
                    }),
                    (s.order = function (n) {
                        return arguments.length ? ((t = null == n ? u.Z : "function" == typeof n ? n : (0, i.Z)(Array.from(n))), s) : t;
                    }),
                    (s.offset = function (n) {
                        return arguments.length ? ((e = null == n ? o.Z : n), s) : e;
                    }),
                    s
                );
            }
        },
        826873: (n, t, e) => {
            e.d(t, { ZP: () => Z });
            var r = e(206677),
                i = e(939086),
                o = e(796333);
            const u = (0, o._b)(3),
                c = {
                    draw(n, t) {
                        const e = 0.59436 * (0, o._b)(t + (0, o.VV)(t / 28, 0.75)),
                            r = e / 2,
                            i = r * u;
                        n.moveTo(0, e), n.lineTo(0, -e), n.moveTo(-i, -r), n.lineTo(i, r), n.moveTo(-i, r), n.lineTo(i, -r);
                    },
                };
            var a = e(190281),
                l = e(676709),
                s = e(325019);
            const h = {
                    draw(n, t) {
                        const e = 0.62625 * (0, o._b)(t);
                        n.moveTo(0, -e), n.lineTo(e, 0), n.lineTo(0, e), n.lineTo(-e, 0), n.closePath();
                    },
                },
                f = {
                    draw(n, t) {
                        const e = 0.87559 * (0, o._b)(t - (0, o.VV)(t / 7, 2));
                        n.moveTo(-e, 0), n.lineTo(e, 0), n.moveTo(0, e), n.lineTo(0, -e);
                    },
                };
            var _ = e(407609);
            const p = {
                draw(n, t) {
                    const e = 0.4431 * (0, o._b)(t);
                    n.moveTo(e, e), n.lineTo(e, -e), n.lineTo(-e, -e), n.lineTo(-e, e), n.closePath();
                },
            };
            var g = e(165174),
                y = e(464610);
            const d = (0, o._b)(3),
                v = {
                    draw(n, t) {
                        const e = 0.6824 * (0, o._b)(t),
                            r = e / 2,
                            i = (e * d) / 2;
                        n.moveTo(0, -e), n.lineTo(i, r), n.lineTo(-i, r), n.closePath();
                    },
                };
            var x = e(449012);
            const m = {
                draw(n, t) {
                    const e = 0.6189 * (0, o._b)(t - (0, o.VV)(t / 6, 1.7));
                    n.moveTo(-e, -e), n.lineTo(e, e), n.moveTo(-e, e), n.lineTo(e, -e);
                },
            };
            a.Z, l.Z, s.Z, _.Z, g.Z, y.Z, x.Z, a.Z;
            function Z(n, t) {
                let e = null,
                    o = (0, i.d)(u);
                function u() {
                    let r;
                    if ((e || (e = r = o()), n.apply(this, arguments).draw(e, +t.apply(this, arguments)), r)) return (e = null), r + "" || null;
                }
                return (
                    (n = "function" == typeof n ? n : (0, r.Z)(n || a.Z)),
                    (t = "function" == typeof t ? t : (0, r.Z)(void 0 === t ? 64 : +t)),
                    (u.type = function (t) {
                        return arguments.length ? ((n = "function" == typeof t ? t : (0, r.Z)(t)), u) : n;
                    }),
                    (u.size = function (n) {
                        return arguments.length ? ((t = "function" == typeof n ? n : (0, r.Z)(+n)), u) : t;
                    }),
                    (u.context = function (n) {
                        return arguments.length ? ((e = null == n ? null : n), u) : e;
                    }),
                    u
                );
            }
        },
        190281: (n, t, e) => {
            e.d(t, { Z: () => i });
            var r = e(796333);
            const i = {
                draw(n, t) {
                    const e = (0, r._b)(t / r.pi);
                    n.moveTo(e, 0), n.arc(0, 0, e, 0, r.BZ);
                },
            };
        },
        676709: (n, t, e) => {
            e.d(t, { Z: () => i });
            var r = e(796333);
            const i = {
                draw(n, t) {
                    const e = (0, r._b)(t / 5) / 2;
                    n.moveTo(-3 * e, -e), n.lineTo(-e, -e), n.lineTo(-e, -3 * e), n.lineTo(e, -3 * e), n.lineTo(e, -e), n.lineTo(3 * e, -e), n.lineTo(3 * e, e), n.lineTo(e, e), n.lineTo(e, 3 * e), n.lineTo(-e, 3 * e), n.lineTo(-e, e), n.lineTo(-3 * e, e), n.closePath();
                },
            };
        },
        325019: (n, t, e) => {
            e.d(t, { Z: () => u });
            var r = e(796333);
            const i = (0, r._b)(1 / 3),
                o = 2 * i,
                u = {
                    draw(n, t) {
                        const e = (0, r._b)(t / o),
                            u = e * i;
                        n.moveTo(0, -e), n.lineTo(u, 0), n.lineTo(0, e), n.lineTo(-u, 0), n.closePath();
                    },
                };
        },
        407609: (n, t, e) => {
            e.d(t, { Z: () => i });
            var r = e(796333);
            const i = {
                draw(n, t) {
                    const e = (0, r._b)(t),
                        i = -e / 2;
                    n.rect(i, i, e, e);
                },
            };
        },
        165174: (n, t, e) => {
            e.d(t, { Z: () => c });
            var r = e(796333);
            const i = (0, r.O$)(r.pi / 10) / (0, r.O$)((7 * r.pi) / 10),
                o = (0, r.O$)(r.BZ / 10) * i,
                u = -(0, r.mC)(r.BZ / 10) * i,
                c = {
                    draw(n, t) {
                        const e = (0, r._b)(0.8908130915292852 * t),
                            i = o * e,
                            c = u * e;
                        n.moveTo(0, -e), n.lineTo(i, c);
                        for (let t = 1; t < 5; ++t) {
                            const o = (r.BZ * t) / 5,
                                u = (0, r.mC)(o),
                                a = (0, r.O$)(o);
                            n.lineTo(a * e, -u * e), n.lineTo(u * i - a * c, a * i + u * c);
                        }
                        n.closePath();
                    },
                };
        },
        464610: (n, t, e) => {
            e.d(t, { Z: () => o });
            var r = e(796333);
            const i = (0, r._b)(3),
                o = {
                    draw(n, t) {
                        const e = -(0, r._b)(t / (3 * i));
                        n.moveTo(0, 2 * e), n.lineTo(-i * e, -e), n.lineTo(i * e, -e), n.closePath();
                    },
                };
        },
        449012: (n, t, e) => {
            e.d(t, { Z: () => a });
            var r = e(796333);
            const i = -0.5,
                o = (0, r._b)(3) / 2,
                u = 1 / (0, r._b)(12),
                c = 3 * (u / 2 + 1),
                a = {
                    draw(n, t) {
                        const e = (0, r._b)(t / c),
                            a = e / 2,
                            l = e * u,
                            s = a,
                            h = e * u + e,
                            f = -s,
                            _ = h;
                        n.moveTo(a, l), n.lineTo(s, h), n.lineTo(f, _), n.lineTo(i * a - o * l, o * a + i * l), n.lineTo(i * s - o * h, o * s + i * h), n.lineTo(i * f - o * _, o * f + i * _), n.lineTo(i * a + o * l, i * l - o * a), n.lineTo(i * s + o * h, i * h - o * s), n.lineTo(i * f + o * _, i * _ - o * f), n.closePath();
                    },
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-d35c1f9c.1652df2a.js.map
