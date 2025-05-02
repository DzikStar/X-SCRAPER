"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-ff8476c2"],
    {
        210161: (e) => {
            var t = Object.prototype.hasOwnProperty,
                n = "~";
            function r() {}
            function s(e, t, n) {
                (this.fn = e), (this.context = t), (this.once = n || !1);
            }
            function o(e, t, r, o, a) {
                if ("function" != typeof r) throw new TypeError("The listener must be a function");
                var i = new s(r, o || e, a),
                    l = n ? n + t : t;
                return e._events[l] ? (e._events[l].fn ? (e._events[l] = [e._events[l], i]) : e._events[l].push(i)) : ((e._events[l] = i), e._eventsCount++), e;
            }
            function a(e, t) {
                0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
            }
            function i() {
                (this._events = new r()), (this._eventsCount = 0);
            }
            Object.create && ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
                (i.prototype.eventNames = function () {
                    var e,
                        r,
                        s = [];
                    if (0 === this._eventsCount) return s;
                    for (r in (e = this._events)) t.call(e, r) && s.push(n ? r.slice(1) : r);
                    return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(e)) : s;
                }),
                (i.prototype.listeners = function (e) {
                    var t = n ? n + e : e,
                        r = this._events[t];
                    if (!r) return [];
                    if (r.fn) return [r.fn];
                    for (var s = 0, o = r.length, a = new Array(o); s < o; s++) a[s] = r[s].fn;
                    return a;
                }),
                (i.prototype.listenerCount = function (e) {
                    var t = n ? n + e : e,
                        r = this._events[t];
                    return r ? (r.fn ? 1 : r.length) : 0;
                }),
                (i.prototype.emit = function (e, t, r, s, o, a) {
                    var i = n ? n + e : e;
                    if (!this._events[i]) return !1;
                    var l,
                        u,
                        c = this._events[i],
                        f = arguments.length;
                    if (c.fn) {
                        switch ((c.once && this.removeListener(e, c.fn, void 0, !0), f)) {
                            case 1:
                                return c.fn.call(c.context), !0;
                            case 2:
                                return c.fn.call(c.context, t), !0;
                            case 3:
                                return c.fn.call(c.context, t, r), !0;
                            case 4:
                                return c.fn.call(c.context, t, r, s), !0;
                            case 5:
                                return c.fn.call(c.context, t, r, s, o), !0;
                            case 6:
                                return c.fn.call(c.context, t, r, s, o, a), !0;
                        }
                        for (u = 1, l = new Array(f - 1); u < f; u++) l[u - 1] = arguments[u];
                        c.fn.apply(c.context, l);
                    } else {
                        var g,
                            h = c.length;
                        for (u = 0; u < h; u++)
                            switch ((c[u].once && this.removeListener(e, c[u].fn, void 0, !0), f)) {
                                case 1:
                                    c[u].fn.call(c[u].context);
                                    break;
                                case 2:
                                    c[u].fn.call(c[u].context, t);
                                    break;
                                case 3:
                                    c[u].fn.call(c[u].context, t, r);
                                    break;
                                case 4:
                                    c[u].fn.call(c[u].context, t, r, s);
                                    break;
                                default:
                                    if (!l) for (g = 1, l = new Array(f - 1); g < f; g++) l[g - 1] = arguments[g];
                                    c[u].fn.apply(c[u].context, l);
                            }
                    }
                    return !0;
                }),
                (i.prototype.on = function (e, t, n) {
                    return o(this, e, t, n, !1);
                }),
                (i.prototype.once = function (e, t, n) {
                    return o(this, e, t, n, !0);
                }),
                (i.prototype.removeListener = function (e, t, r, s) {
                    var o = n ? n + e : e;
                    if (!this._events[o]) return this;
                    if (!t) return a(this, o), this;
                    var i = this._events[o];
                    if (i.fn) i.fn !== t || (s && !i.once) || (r && i.context !== r) || a(this, o);
                    else {
                        for (var l = 0, u = [], c = i.length; l < c; l++) (i[l].fn !== t || (s && !i[l].once) || (r && i[l].context !== r)) && u.push(i[l]);
                        u.length ? (this._events[o] = 1 === u.length ? u[0] : u) : a(this, o);
                    }
                    return this;
                }),
                (i.prototype.removeAllListeners = function (e) {
                    var t;
                    return e ? ((t = n ? n + e : e), this._events[t] && a(this, t)) : ((this._events = new r()), (this._eventsCount = 0)), this;
                }),
                (i.prototype.off = i.prototype.removeListener),
                (i.prototype.addListener = i.prototype.on),
                (i.prefixed = n),
                (i.EventEmitter = i),
                (e.exports = i);
        },
        49650: (e, t, n) => {
            n.d(t, { AN: () => a, KB: () => i, rr: () => o });
            var r = n(873998),
                s = n(287231);
            const o = (0, r.J)(
                    (e) => e.setHours(0, 0, 0, 0),
                    (e, t) => e.setDate(e.getDate() + t),
                    (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * s.yB) / s.UD,
                    (e) => e.getDate() - 1,
                ),
                a =
                    (o.range,
                    (0, r.J)(
                        (e) => {
                            e.setUTCHours(0, 0, 0, 0);
                        },
                        (e, t) => {
                            e.setUTCDate(e.getUTCDate() + t);
                        },
                        (e, t) => (t - e) / s.UD,
                        (e) => e.getUTCDate() - 1,
                    )),
                i =
                    (a.range,
                    (0, r.J)(
                        (e) => {
                            e.setUTCHours(0, 0, 0, 0);
                        },
                        (e, t) => {
                            e.setUTCDate(e.getUTCDate() + t);
                        },
                        (e, t) => (t - e) / s.UD,
                        (e) => Math.floor(e / s.UD),
                    ));
            i.range;
        },
        287231: (e, t, n) => {
            n.d(t, { UD: () => a, Y2: () => o, Ym: () => r, iM: () => i, jz: () => l, qz: () => u, yB: () => s });
            const r = 1e3,
                s = 60 * r,
                o = 60 * s,
                a = 24 * o,
                i = 7 * a,
                l = 30 * a,
                u = 365 * a;
        },
        387956: (e, t, n) => {
            n.d(t, { WQ: () => o, lM: () => a });
            var r = n(873998),
                s = n(287231);
            const o = (0, r.J)(
                    (e) => {
                        e.setTime(e - e.getMilliseconds() - e.getSeconds() * s.Ym - e.getMinutes() * s.yB);
                    },
                    (e, t) => {
                        e.setTime(+e + t * s.Y2);
                    },
                    (e, t) => (t - e) / s.Y2,
                    (e) => e.getHours(),
                ),
                a =
                    (o.range,
                    (0, r.J)(
                        (e) => {
                            e.setUTCMinutes(0, 0, 0);
                        },
                        (e, t) => {
                            e.setTime(+e + t * s.Y2);
                        },
                        (e, t) => (t - e) / s.Y2,
                        (e) => e.getUTCHours(),
                    ));
            a.range;
        },
        873998: (e, t, n) => {
            n.d(t, { J: () => o });
            const r = new Date(),
                s = new Date();
            function o(e, t, n, a) {
                function i(t) {
                    return e((t = 0 === arguments.length ? new Date() : new Date(+t))), t;
                }
                return (
                    (i.floor = (t) => (e((t = new Date(+t))), t)),
                    (i.ceil = (n) => (e((n = new Date(n - 1))), t(n, 1), e(n), n)),
                    (i.round = (e) => {
                        const t = i(e),
                            n = i.ceil(e);
                        return e - t < n - e ? t : n;
                    }),
                    (i.offset = (e, n) => (t((e = new Date(+e)), null == n ? 1 : Math.floor(n)), e)),
                    (i.range = (n, r, s) => {
                        const o = [];
                        if (((n = i.ceil(n)), (s = null == s ? 1 : Math.floor(s)), !(n < r && s > 0))) return o;
                        let a;
                        do {
                            o.push((a = new Date(+n))), t(n, s), e(n);
                        } while (a < n && n < r);
                        return o;
                    }),
                    (i.filter = (n) =>
                        o(
                            (t) => {
                                if (t >= t) for (; e(t), !n(t); ) t.setTime(t - 1);
                            },
                            (e, r) => {
                                if (e >= e)
                                    if (r < 0) for (; ++r <= 0; ) for (; t(e, -1), !n(e); );
                                    else for (; --r >= 0; ) for (; t(e, 1), !n(e); );
                            },
                        )),
                    n && ((i.count = (t, o) => (r.setTime(+t), s.setTime(+o), e(r), e(s), Math.floor(n(r, s)))), (i.every = (e) => ((e = Math.floor(e)), isFinite(e) && e > 0 ? (e > 1 ? i.filter(a ? (t) => a(t) % e == 0 : (t) => i.count(0, t) % e == 0) : i) : null))),
                    i
                );
            }
        },
        73832: (e, t, n) => {
            n.d(t, { Z_: () => o, rz: () => a });
            var r = n(873998),
                s = n(287231);
            const o = (0, r.J)(
                    (e) => {
                        e.setTime(e - e.getMilliseconds() - e.getSeconds() * s.Ym);
                    },
                    (e, t) => {
                        e.setTime(+e + t * s.yB);
                    },
                    (e, t) => (t - e) / s.yB,
                    (e) => e.getMinutes(),
                ),
                a =
                    (o.range,
                    (0, r.J)(
                        (e) => {
                            e.setUTCSeconds(0, 0);
                        },
                        (e, t) => {
                            e.setTime(+e + t * s.yB);
                        },
                        (e, t) => (t - e) / s.yB,
                        (e) => e.getUTCMinutes(),
                    ));
            a.range;
        },
        264420: (e, t, n) => {
            n.d(t, { F0: () => s, me: () => o });
            var r = n(873998);
            const s = (0, r.J)(
                    (e) => {
                        e.setDate(1), e.setHours(0, 0, 0, 0);
                    },
                    (e, t) => {
                        e.setMonth(e.getMonth() + t);
                    },
                    (e, t) => t.getMonth() - e.getMonth() + 12 * (t.getFullYear() - e.getFullYear()),
                    (e) => e.getMonth(),
                ),
                o =
                    (s.range,
                    (0, r.J)(
                        (e) => {
                            e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
                        },
                        (e, t) => {
                            e.setUTCMonth(e.getUTCMonth() + t);
                        },
                        (e, t) => t.getUTCMonth() - e.getUTCMonth() + 12 * (t.getUTCFullYear() - e.getUTCFullYear()),
                        (e) => e.getUTCMonth(),
                    ));
            o.range;
        },
        348392: (e, t, n) => {
            n.d(t, { E: () => o });
            var r = n(873998),
                s = n(287231);
            const o = (0, r.J)(
                (e) => {
                    e.setTime(e - e.getMilliseconds());
                },
                (e, t) => {
                    e.setTime(+e + t * s.Ym);
                },
                (e, t) => (t - e) / s.Ym,
                (e) => e.getUTCSeconds(),
            );
            o.range;
        },
        136087: (e, t, n) => {
            n.d(t, { _g: () => U, jK: () => C, jo: () => p, WG: () => y });
            var r = n(763137),
                s = n(452497),
                o = n(287231),
                a = n(873998);
            const i = (0, a.J)(
                () => {},
                (e, t) => {
                    e.setTime(+e + t);
                },
                (e, t) => t - e,
            );
            i.every = (e) => (
                (e = Math.floor(e)),
                isFinite(e) && e > 0
                    ? e > 1
                        ? (0, a.J)(
                              (t) => {
                                  t.setTime(Math.floor(t / e) * e);
                              },
                              (t, n) => {
                                  t.setTime(+t + n * e);
                              },
                              (t, n) => (n - t) / e,
                          )
                        : i
                    : null
            );
            i.range;
            var l = n(348392),
                u = n(73832),
                c = n(387956),
                f = n(49650),
                g = n(609979),
                h = n(264420),
                v = n(578171);
            function T(e, t, n, a, u, c) {
                const f = [
                    [l.E, 1, o.Ym],
                    [l.E, 5, 5 * o.Ym],
                    [l.E, 15, 15 * o.Ym],
                    [l.E, 30, 30 * o.Ym],
                    [c, 1, o.yB],
                    [c, 5, 5 * o.yB],
                    [c, 15, 15 * o.yB],
                    [c, 30, 30 * o.yB],
                    [u, 1, o.Y2],
                    [u, 3, 3 * o.Y2],
                    [u, 6, 6 * o.Y2],
                    [u, 12, 12 * o.Y2],
                    [a, 1, o.UD],
                    [a, 2, 2 * o.UD],
                    [n, 1, o.iM],
                    [t, 1, o.jz],
                    [t, 3, 3 * o.jz],
                    [e, 1, o.qz],
                ];
                function g(t, n, a) {
                    const l = Math.abs(n - t) / a,
                        u = (0, r.Z)(([, , e]) => e).right(f, l);
                    if (u === f.length) return e.every((0, s.ly)(t / o.qz, n / o.qz, a));
                    if (0 === u) return i.every(Math.max((0, s.ly)(t, n, a), 1));
                    const [c, g] = f[l / f[u - 1][2] < f[u][2] / l ? u - 1 : u];
                    return c.every(g);
                }
                return [
                    function (e, t, n) {
                        const r = t < e;
                        r && ([e, t] = [t, e]);
                        const s = n && "function" == typeof n.range ? n : g(e, t, n),
                            o = s ? s.range(e, +t + 1) : [];
                        return r ? o.reverse() : o;
                    },
                    g,
                ];
            }
            const [y, p] = T(v.ol, h.me, g.pI, f.KB, c.lM, u.rz),
                [C, U] = T(v.jB, h.F0, g.Zy, f.rr, c.WQ, u.Z_);
        },
        609979: (e, t, n) => {
            n.d(t, { Ig: () => c, Ox: () => i, Zy: () => a, hB: () => C, l6: () => T, pI: () => v });
            var r = n(873998),
                s = n(287231);
            function o(e) {
                return (0, r.J)(
                    (t) => {
                        t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)), t.setHours(0, 0, 0, 0);
                    },
                    (e, t) => {
                        e.setDate(e.getDate() + 7 * t);
                    },
                    (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * s.yB) / s.iM,
                );
            }
            const a = o(0),
                i = o(1),
                l = o(2),
                u = o(3),
                c = o(4),
                f = o(5),
                g = o(6);
            a.range, i.range, l.range, u.range, c.range, f.range, g.range;
            function h(e) {
                return (0, r.J)(
                    (t) => {
                        t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)), t.setUTCHours(0, 0, 0, 0);
                    },
                    (e, t) => {
                        e.setUTCDate(e.getUTCDate() + 7 * t);
                    },
                    (e, t) => (t - e) / s.iM,
                );
            }
            const v = h(0),
                T = h(1),
                y = h(2),
                p = h(3),
                C = h(4),
                U = h(5),
                m = h(6);
            v.range, T.range, y.range, p.range, C.range, U.range, m.range;
        },
        578171: (e, t, n) => {
            n.d(t, { jB: () => s, ol: () => o });
            var r = n(873998);
            const s = (0, r.J)(
                (e) => {
                    e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
                },
                (e, t) => {
                    e.setFullYear(e.getFullYear() + t);
                },
                (e, t) => t.getFullYear() - e.getFullYear(),
                (e) => e.getFullYear(),
            );
            s.every = (e) =>
                isFinite((e = Math.floor(e))) && e > 0
                    ? (0, r.J)(
                          (t) => {
                              t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
                          },
                          (t, n) => {
                              t.setFullYear(t.getFullYear() + n * e);
                          },
                      )
                    : null;
            s.range;
            const o = (0, r.J)(
                (e) => {
                    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
                },
                (e, t) => {
                    e.setUTCFullYear(e.getUTCFullYear() + t);
                },
                (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
                (e) => e.getUTCFullYear(),
            );
            o.every = (e) =>
                isFinite((e = Math.floor(e))) && e > 0
                    ? (0, r.J)(
                          (t) => {
                              t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
                          },
                          (t, n) => {
                              t.setUTCFullYear(t.getUTCFullYear() + n * e);
                          },
                      )
                    : null;
            o.range;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-ff8476c2.6c46813a.js.map
