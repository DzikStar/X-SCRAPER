"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-d2eb5610"],
    {
        482609: (t) => {
            t.exports = function (t) {
                var n = [];
                return (
                    (n.toString = function () {
                        return this.map(function (n) {
                            var e = (function (t, n) {
                                var e = t[1] || "",
                                    r = t[3];
                                if (!r) return e;
                                if (n && "function" == typeof btoa) {
                                    var o = ((a = r), (c = btoa(unescape(encodeURIComponent(JSON.stringify(a))))), (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c)), "/*# ".concat(s, " */")),
                                        u = r.sources.map(function (t) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */");
                                        });
                                    return [e].concat(u).concat([o]).join("\n");
                                }
                                var a, c, s;
                                return [e].join("\n");
                            })(n, t);
                            return n[2] ? "@media ".concat(n[2], " {").concat(e, "}") : e;
                        }).join("");
                    }),
                    (n.i = function (t, e, r) {
                        "string" == typeof t && (t = [[null, t, ""]]);
                        var o = {};
                        if (r)
                            for (var u = 0; u < this.length; u++) {
                                var a = this[u][0];
                                null != a && (o[a] = !0);
                            }
                        for (var c = 0; c < t.length; c++) {
                            var s = [].concat(t[c]);
                            (r && o[s[0]]) || (e && (s[2] ? (s[2] = "".concat(e, " and ").concat(s[2])) : (s[2] = e)), n.push(s));
                        }
                    }),
                    n
                );
            };
        },
        840489: (t, n, e) => {
            function r(t) {
                var n,
                    e,
                    o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t)) {
                        var u = t.length;
                        for (n = 0; n < u; n++) t[n] && (e = r(t[n])) && (o && (o += " "), (o += e));
                    } else for (e in t) t[e] && (o && (o += " "), (o += e));
                return o;
            }
            function o() {
                for (var t, n, e = 0, o = "", u = arguments.length; e < u; e++) (t = arguments[e]) && (n = r(t)) && (o && (o += " "), (o += n));
                return o;
            }
            e.d(n, { W: () => o, Z: () => u });
            const u = o;
        },
        544044: (t, n, e) => {
            e.d(n, { T: () => c });
            var r = e(150729),
                o = e(595873);
            function u(t, n) {
                const e = +(0, r.Q)(t);
                return (0, o.L)(t, e + n);
            }
            var a = e(31418);
            function c(t, n) {
                return u(t, n * a.vh);
            }
        },
        777617: (t, n, e) => {
            e.d(n, { z: () => u });
            var r = e(150729),
                o = e(595873);
            function u(t, n) {
                const e = (0, r.Q)(t);
                if (isNaN(n)) return (0, o.L)(t, NaN);
                if (!n) return e;
                const u = e.getDate(),
                    a = (0, o.L)(t, e.getTime());
                a.setMonth(e.getMonth() + n + 1, 0);
                return u >= a.getDate() ? a : (e.setFullYear(a.getFullYear(), a.getMonth(), u), e);
            }
        },
        991809: (t, n, e) => {
            e.d(n, { j: () => o });
            var r = e(178016);
            function o(t, n) {
                const e = 7 * n;
                return (0, r.E)(t, e);
            }
        },
        112385: (t, n, e) => {
            e.d(n, { B: () => o });
            var r = e(777617);
            function o(t, n) {
                return (0, r.z)(t, 12 * n);
            }
        },
        513761: (t, n, e) => {
            e.d(n, { T: () => o });
            var r = e(150729);
            function o(t, n) {
                const e = (0, r.Q)(t),
                    o = (0, r.Q)(n);
                return 12 * (e.getFullYear() - o.getFullYear()) + (e.getMonth() - o.getMonth());
            }
        },
        364597: (t, n, e) => {
            e.d(n, { i: () => o });
            var r = e(150729);
            function o(t) {
                const n = (0, r.Q)(t);
                return n.setHours(23, 59, 59, 999), n;
            }
        },
        428332: (t, n, e) => {
            e.d(n, { g: () => o });
            var r = e(560307);
            function o(t) {
                return (0, r.v)(t, { weekStartsOn: 1 });
            }
        },
        242359: (t, n, e) => {
            e.d(n, { V: () => o });
            var r = e(150729);
            function o(t) {
                const n = (0, r.Q)(t),
                    e = n.getMonth();
                return n.setFullYear(n.getFullYear(), e + 1, 0), n.setHours(23, 59, 59, 999), n;
            }
        },
        560307: (t, n, e) => {
            e.d(n, { v: () => u });
            var r = e(150729),
                o = e(803066);
            function u(t, n) {
                const e = (0, o.j)(),
                    u = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? e.weekStartsOn ?? e.locale?.options?.weekStartsOn ?? 0,
                    a = (0, r.Q)(t),
                    c = a.getDay(),
                    s = 6 + (c < u ? -7 : 0) - (c - u);
                return a.setDate(a.getDate() + s), a.setHours(23, 59, 59, 999), a;
            }
        },
        889957: (t, n, e) => {
            e.d(n, { h: () => o });
            var r = e(150729);
            function o(t) {
                return (0, r.Q)(t).getTime();
            }
        },
        323568: (t, n, e) => {
            e.d(n, { Q: () => o });
            var r = e(150729);
            function o(t) {
                return Math.trunc(+(0, r.Q)(t) / 1e3);
            }
        },
        242268: (t, n, e) => {
            e.d(n, { R: () => f });
            var r = e(31418),
                o = e(262014),
                u = e(537796);
            function a(t, n, e) {
                const a = (0, o.z)(t, e),
                    c = (0, o.z)(n, e),
                    s = +a - (0, u.D)(a),
                    i = +c - (0, u.D)(c);
                return Math.round((s - i) / r.jE);
            }
            var c = e(150729);
            function s(t) {
                const n = (0, c.Q)(t),
                    e = n.getMonth();
                return n.setFullYear(n.getFullYear(), e + 1, 0), n.setHours(0, 0, 0, 0), n;
            }
            var i = e(200210);
            function f(t, n) {
                return a(s(t), (0, i.N)(t), n) + 1;
            }
        },
        251461: (t, n, e) => {
            e.d(n, { A: () => o });
            var r = e(150729);
            function o(t, n) {
                const e = (0, r.Q)(t),
                    o = (0, r.Q)(n);
                return e.getTime() > o.getTime();
            }
        },
        871502: (t, n, e) => {
            e.d(n, { R: () => o });
            var r = e(150729);
            function o(t, n) {
                return +(0, r.Q)(t) < +(0, r.Q)(n);
            }
        },
        395121: (t, n, e) => {
            e.d(n, { L: () => o });
            var r = e(150729);
            function o(t) {
                return 5 === (0, r.Q)(t).getDay();
            }
        },
        251418: (t, n, e) => {
            e.d(n, { K: () => o });
            var r = e(808106);
            function o(t, n) {
                return +(0, r.b)(t) == +(0, r.b)(n);
            }
        },
        964971: (t, n, e) => {
            e.d(n, { x: () => o });
            var r = e(150729);
            function o(t, n) {
                const e = (0, r.Q)(t),
                    o = (0, r.Q)(n);
                return e.getFullYear() === o.getFullYear() && e.getMonth() === o.getMonth();
            }
        },
        513371: (t, n, e) => {
            e.d(n, { F: () => o });
            var r = e(150729);
            function o(t, n) {
                const e = (0, r.Q)(t),
                    o = (0, r.Q)(n);
                return e.getFullYear() === o.getFullYear();
            }
        },
        460556: (t, n, e) => {
            e.d(n, { F: () => o });
            var r = e(150729);
            function o(t) {
                let n;
                return (
                    t.forEach(function (t) {
                        const e = (0, r.Q)(t);
                        (void 0 === n || n < e || isNaN(Number(e))) && (n = e);
                    }),
                    n || new Date(NaN)
                );
            }
        },
        346365: (t, n, e) => {
            e.d(n, { V: () => o });
            var r = e(150729);
            function o(t) {
                let n;
                return (
                    t.forEach((t) => {
                        const e = (0, r.Q)(t);
                        (!n || n > e || isNaN(+e)) && (n = e);
                    }),
                    n || new Date(NaN)
                );
            }
        },
        961596: (t, n, e) => {
            e.d(n, { c: () => c });
            var r = e(178016),
                o = e(150729);
            function u(t) {
                return (0, o.Q)(t).getDay();
            }
            function a(t, n) {
                let e = n - u(t);
                return e <= 0 && (e += 7), (0, r.E)(t, e);
            }
            function c(t) {
                return a(t, 5);
            }
        },
        663233: (t, n, e) => {
            e.d(n, { q: () => a });
            var r = e(595873),
                o = e(150729);
            function u(t) {
                const n = (0, o.Q)(t),
                    e = n.getFullYear(),
                    u = n.getMonth(),
                    a = (0, r.L)(t, 0);
                return a.setFullYear(e, u + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
            }
            function a(t, n) {
                const e = (0, o.Q)(t),
                    a = e.getFullYear(),
                    c = e.getDate(),
                    s = (0, r.L)(t, 0);
                s.setFullYear(a, n, 15), s.setHours(0, 0, 0, 0);
                const i = u(s);
                return e.setMonth(n, Math.min(c, i)), e;
            }
        },
        876346: (t, n, e) => {
            e.d(n, { M: () => u });
            var r = e(595873),
                o = e(150729);
            function u(t, n) {
                const e = (0, o.Q)(t);
                return isNaN(+e) ? (0, r.L)(t, NaN) : (e.setFullYear(n), e);
            }
        },
        200210: (t, n, e) => {
            e.d(n, { N: () => o });
            var r = e(150729);
            function o(t) {
                const n = (0, r.Q)(t);
                return n.setDate(1), n.setHours(0, 0, 0, 0), n;
            }
        },
        524145: (t, n, e) => {
            e.d(n, { l: () => c });
            var r = e(733936),
                o = e(777617);
            function u(t, n) {
                return (0, o.z)(t, -n);
            }
            var a = e(595873);
            function c(t, n) {
                const { years: e = 0, months: o = 0, weeks: c = 0, days: s = 0, hours: i = 0, minutes: f = 0, seconds: l = 0 } = n,
                    v = u(t, o + 12 * e),
                    g = (0, r.k)(v, s + 7 * c),
                    d = 1e3 * (l + 60 * (f + 60 * i));
                return (0, a.L)(t, g.getTime() - d);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-d2eb5610.88deb83a.js.map
