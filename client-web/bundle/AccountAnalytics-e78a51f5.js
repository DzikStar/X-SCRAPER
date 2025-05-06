"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-e78a51f5"],
    {
        544044: (t, e, n) => {
            n.d(e, { T: () => s });
            var r = n(150729),
                u = n(595873);
            function o(t, e) {
                const n = +(0, r.Q)(t);
                return (0, u.L)(t, n + e);
            }
            var a = n(31418);
            function s(t, e) {
                return o(t, e * a.vh);
            }
        },
        777617: (t, e, n) => {
            n.d(e, { z: () => o });
            var r = n(150729),
                u = n(595873);
            function o(t, e) {
                const n = (0, r.Q)(t);
                if (isNaN(e)) return (0, u.L)(t, NaN);
                if (!e) return n;
                const o = n.getDate(),
                    a = (0, u.L)(t, n.getTime());
                a.setMonth(n.getMonth() + e + 1, 0);
                return o >= a.getDate() ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
            }
        },
        991809: (t, e, n) => {
            n.d(e, { j: () => u });
            var r = n(178016);
            function u(t, e) {
                const n = 7 * e;
                return (0, r.E)(t, n);
            }
        },
        112385: (t, e, n) => {
            n.d(e, { B: () => u });
            var r = n(777617);
            function u(t, e) {
                return (0, r.z)(t, 12 * e);
            }
        },
        513761: (t, e, n) => {
            n.d(e, { T: () => u });
            var r = n(150729);
            function u(t, e) {
                const n = (0, r.Q)(t),
                    u = (0, r.Q)(e);
                return 12 * (n.getFullYear() - u.getFullYear()) + (n.getMonth() - u.getMonth());
            }
        },
        364597: (t, e, n) => {
            n.d(e, { i: () => u });
            var r = n(150729);
            function u(t) {
                const e = (0, r.Q)(t);
                return e.setHours(23, 59, 59, 999), e;
            }
        },
        428332: (t, e, n) => {
            n.d(e, { g: () => u });
            var r = n(560307);
            function u(t) {
                return (0, r.v)(t, { weekStartsOn: 1 });
            }
        },
        242359: (t, e, n) => {
            n.d(e, { V: () => u });
            var r = n(150729);
            function u(t) {
                const e = (0, r.Q)(t),
                    n = e.getMonth();
                return e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(23, 59, 59, 999), e;
            }
        },
        560307: (t, e, n) => {
            n.d(e, { v: () => o });
            var r = n(150729),
                u = n(803066);
            function o(t, e) {
                const n = (0, u.j)(),
                    o = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
                    a = (0, r.Q)(t),
                    s = a.getDay(),
                    c = 6 + (s < o ? -7 : 0) - (s - o);
                return a.setDate(a.getDate() + c), a.setHours(23, 59, 59, 999), a;
            }
        },
        889957: (t, e, n) => {
            n.d(e, { h: () => u });
            var r = n(150729);
            function u(t) {
                return (0, r.Q)(t).getTime();
            }
        },
        323568: (t, e, n) => {
            n.d(e, { Q: () => u });
            var r = n(150729);
            function u(t) {
                return Math.trunc(+(0, r.Q)(t) / 1e3);
            }
        },
        242268: (t, e, n) => {
            n.d(e, { R: () => l });
            var r = n(31418),
                u = n(262014),
                o = n(537796);
            function a(t, e, n) {
                const a = (0, u.z)(t, n),
                    s = (0, u.z)(e, n),
                    c = +a - (0, o.D)(a),
                    i = +s - (0, o.D)(s);
                return Math.round((c - i) / r.jE);
            }
            var s = n(150729);
            function c(t) {
                const e = (0, s.Q)(t),
                    n = e.getMonth();
                return e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(0, 0, 0, 0), e;
            }
            var i = n(200210);
            function l(t, e) {
                return a(c(t), (0, i.N)(t), e) + 1;
            }
        },
        251461: (t, e, n) => {
            n.d(e, { A: () => u });
            var r = n(150729);
            function u(t, e) {
                const n = (0, r.Q)(t),
                    u = (0, r.Q)(e);
                return n.getTime() > u.getTime();
            }
        },
        871502: (t, e, n) => {
            n.d(e, { R: () => u });
            var r = n(150729);
            function u(t, e) {
                return +(0, r.Q)(t) < +(0, r.Q)(e);
            }
        },
        395121: (t, e, n) => {
            n.d(e, { L: () => u });
            var r = n(150729);
            function u(t) {
                return 5 === (0, r.Q)(t).getDay();
            }
        },
        251418: (t, e, n) => {
            n.d(e, { K: () => u });
            var r = n(808106);
            function u(t, e) {
                return +(0, r.b)(t) == +(0, r.b)(e);
            }
        },
        964971: (t, e, n) => {
            n.d(e, { x: () => u });
            var r = n(150729);
            function u(t, e) {
                const n = (0, r.Q)(t),
                    u = (0, r.Q)(e);
                return n.getFullYear() === u.getFullYear() && n.getMonth() === u.getMonth();
            }
        },
        513371: (t, e, n) => {
            n.d(e, { F: () => u });
            var r = n(150729);
            function u(t, e) {
                const n = (0, r.Q)(t),
                    u = (0, r.Q)(e);
                return n.getFullYear() === u.getFullYear();
            }
        },
        460556: (t, e, n) => {
            n.d(e, { F: () => u });
            var r = n(150729);
            function u(t) {
                let e;
                return (
                    t.forEach(function (t) {
                        const n = (0, r.Q)(t);
                        (void 0 === e || e < n || isNaN(Number(n))) && (e = n);
                    }),
                    e || new Date(NaN)
                );
            }
        },
        346365: (t, e, n) => {
            n.d(e, { V: () => u });
            var r = n(150729);
            function u(t) {
                let e;
                return (
                    t.forEach((t) => {
                        const n = (0, r.Q)(t);
                        (!e || e > n || isNaN(+n)) && (e = n);
                    }),
                    e || new Date(NaN)
                );
            }
        },
        961596: (t, e, n) => {
            n.d(e, { c: () => s });
            var r = n(178016),
                u = n(150729);
            function o(t) {
                return (0, u.Q)(t).getDay();
            }
            function a(t, e) {
                let n = e - o(t);
                return n <= 0 && (n += 7), (0, r.E)(t, n);
            }
            function s(t) {
                return a(t, 5);
            }
        },
        663233: (t, e, n) => {
            n.d(e, { q: () => a });
            var r = n(595873),
                u = n(150729);
            function o(t) {
                const e = (0, u.Q)(t),
                    n = e.getFullYear(),
                    o = e.getMonth(),
                    a = (0, r.L)(t, 0);
                return a.setFullYear(n, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
            }
            function a(t, e) {
                const n = (0, u.Q)(t),
                    a = n.getFullYear(),
                    s = n.getDate(),
                    c = (0, r.L)(t, 0);
                c.setFullYear(a, e, 15), c.setHours(0, 0, 0, 0);
                const i = o(c);
                return n.setMonth(e, Math.min(s, i)), n;
            }
        },
        876346: (t, e, n) => {
            n.d(e, { M: () => o });
            var r = n(595873),
                u = n(150729);
            function o(t, e) {
                const n = (0, u.Q)(t);
                return isNaN(+n) ? (0, r.L)(t, NaN) : (n.setFullYear(e), n);
            }
        },
        200210: (t, e, n) => {
            n.d(e, { N: () => u });
            var r = n(150729);
            function u(t) {
                const e = (0, r.Q)(t);
                return e.setDate(1), e.setHours(0, 0, 0, 0), e;
            }
        },
        524145: (t, e, n) => {
            n.d(e, { l: () => s });
            var r = n(733936),
                u = n(777617);
            function o(t, e) {
                return (0, u.z)(t, -e);
            }
            var a = n(595873);
            function s(t, e) {
                const { years: n = 0, months: u = 0, weeks: s = 0, days: c = 0, hours: i = 0, minutes: l = 0, seconds: f = 0 } = e,
                    v = o(t, u + 12 * n),
                    g = (0, r.k)(v, c + 7 * s),
                    d = 1e3 * (f + 60 * (l + 60 * i));
                return (0, a.L)(t, g.getTime() - d);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-e78a51f5.7fbbbb7a.js.map
