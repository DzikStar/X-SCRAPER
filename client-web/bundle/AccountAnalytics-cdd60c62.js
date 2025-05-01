"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-cdd60c62"],
    {
        549732: (t, n, e) => {
            e.d(n, { Ry: () => l });
            var r = function (t) {
                    return "undefined" == typeof document ? null : (Array.isArray(t) ? t[0] : t).ownerDocument.body;
                },
                a = new WeakMap(),
                o = new WeakMap(),
                u = {},
                c = 0,
                i = function (t) {
                    return t && (t.host || i(t.parentNode));
                },
                s = function (t, n, e, r) {
                    var s = (function (t, n) {
                        return n
                            .map(function (n) {
                                if (t.contains(n)) return n;
                                var e = i(n);
                                return e && t.contains(e) ? e : null;
                            })
                            .filter(function (t) {
                                return Boolean(t);
                            });
                    })(n, Array.isArray(t) ? t : [t]);
                    u[e] || (u[e] = new WeakMap());
                    var l = u[e],
                        f = [],
                        v = new Set(),
                        d = new Set(s),
                        g = function (t) {
                            t && !v.has(t) && (v.add(t), g(t.parentNode));
                        };
                    s.forEach(g);
                    var h = function (t) {
                        t &&
                            !d.has(t) &&
                            Array.prototype.forEach.call(t.children, function (t) {
                                if (v.has(t)) h(t);
                                else
                                    try {
                                        var n = t.getAttribute(r),
                                            u = null !== n && "false" !== n,
                                            c = (a.get(t) || 0) + 1,
                                            i = (l.get(t) || 0) + 1;
                                        a.set(t, c), l.set(t, i), f.push(t), 1 === c && u && o.set(t, !0), 1 === i && t.setAttribute(e, "true"), u || t.setAttribute(r, "true");
                                    } catch (t) {}
                            });
                    };
                    return (
                        h(n),
                        v.clear(),
                        c++,
                        function () {
                            f.forEach(function (t) {
                                var n = a.get(t) - 1,
                                    u = l.get(t) - 1;
                                a.set(t, n), l.set(t, u), n || (o.has(t) || t.removeAttribute(r), o.delete(t)), u || t.removeAttribute(e);
                            }),
                                --c || ((a = new WeakMap()), (a = new WeakMap()), (o = new WeakMap()), (u = {}));
                        }
                    );
                },
                l = function (t, n, e) {
                    void 0 === e && (e = "data-aria-hidden");
                    var a = Array.from(Array.isArray(t) ? t : [t]),
                        o = n || r(t);
                    return o
                        ? (a.push.apply(a, Array.from(o.querySelectorAll("[aria-live]"))), s(a, o, e, "aria-hidden"))
                        : function () {
                              return null;
                          };
                };
        },
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
                                    var a = ((u = r), (c = btoa(unescape(encodeURIComponent(JSON.stringify(u))))), (i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c)), "/*# ".concat(i, " */")),
                                        o = r.sources.map(function (t) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */");
                                        });
                                    return [e].concat(o).concat([a]).join("\n");
                                }
                                var u, c, i;
                                return [e].join("\n");
                            })(n, t);
                            return n[2] ? "@media ".concat(n[2], " {").concat(e, "}") : e;
                        }).join("");
                    }),
                    (n.i = function (t, e, r) {
                        "string" == typeof t && (t = [[null, t, ""]]);
                        var a = {};
                        if (r)
                            for (var o = 0; o < this.length; o++) {
                                var u = this[o][0];
                                null != u && (a[u] = !0);
                            }
                        for (var c = 0; c < t.length; c++) {
                            var i = [].concat(t[c]);
                            (r && a[i[0]]) || (e && (i[2] ? (i[2] = "".concat(e, " and ").concat(i[2])) : (i[2] = e)), n.push(i));
                        }
                    }),
                    n
                );
            };
        },
        110929: (t, n, e) => {
            e.d(n, { cx: () => o, j: () => u });
            var r = e(840489);
            const a = (t) => ("boolean" == typeof t ? `${t}` : 0 === t ? "0" : t),
                o = r.W,
                u = (t, n) => (e) => {
                    var r;
                    if (null == (null == n ? void 0 : n.variants)) return o(t, null == e ? void 0 : e.class, null == e ? void 0 : e.className);
                    const { variants: u, defaultVariants: c } = n,
                        i = Object.keys(u).map((t) => {
                            const n = null == e ? void 0 : e[t],
                                r = null == c ? void 0 : c[t];
                            if (null === n) return null;
                            const o = a(n) || a(r);
                            return u[t][o];
                        }),
                        s =
                            e &&
                            Object.entries(e).reduce((t, n) => {
                                let [e, r] = n;
                                return void 0 === r || (t[e] = r), t;
                            }, {}),
                        l =
                            null == n || null === (r = n.compoundVariants) || void 0 === r
                                ? void 0
                                : r.reduce((t, n) => {
                                      let { class: e, className: r, ...a } = n;
                                      return Object.entries(a).every((t) => {
                                          let [n, e] = t;
                                          return Array.isArray(e) ? e.includes({ ...c, ...s }[n]) : { ...c, ...s }[n] === e;
                                      })
                                          ? [...t, e, r]
                                          : t;
                                  }, []);
                    return o(t, i, l, null == e ? void 0 : e.class, null == e ? void 0 : e.className);
                };
        },
        840489: (t, n, e) => {
            function r(t) {
                var n,
                    e,
                    a = "";
                if ("string" == typeof t || "number" == typeof t) a += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t)) {
                        var o = t.length;
                        for (n = 0; n < o; n++) t[n] && (e = r(t[n])) && (a && (a += " "), (a += e));
                    } else for (e in t) t[e] && (a && (a += " "), (a += e));
                return a;
            }
            function a() {
                for (var t, n, e = 0, a = "", o = arguments.length; e < o; e++) (t = arguments[e]) && (n = r(t)) && (a && (a += " "), (a += n));
                return a;
            }
            e.d(n, { W: () => a, Z: () => o });
            const o = a;
        },
        544044: (t, n, e) => {
            e.d(n, { T: () => c });
            var r = e(150729),
                a = e(595873);
            function o(t, n) {
                const e = +(0, r.Q)(t);
                return (0, a.L)(t, e + n);
            }
            var u = e(31418);
            function c(t, n) {
                return o(t, n * u.vh);
            }
        },
        777617: (t, n, e) => {
            e.d(n, { z: () => o });
            var r = e(150729),
                a = e(595873);
            function o(t, n) {
                const e = (0, r.Q)(t);
                if (isNaN(n)) return (0, a.L)(t, NaN);
                if (!n) return e;
                const o = e.getDate(),
                    u = (0, a.L)(t, e.getTime());
                u.setMonth(e.getMonth() + n + 1, 0);
                return o >= u.getDate() ? u : (e.setFullYear(u.getFullYear(), u.getMonth(), o), e);
            }
        },
        991809: (t, n, e) => {
            e.d(n, { j: () => a });
            var r = e(178016);
            function a(t, n) {
                const e = 7 * n;
                return (0, r.E)(t, e);
            }
        },
        112385: (t, n, e) => {
            e.d(n, { B: () => a });
            var r = e(777617);
            function a(t, n) {
                return (0, r.z)(t, 12 * n);
            }
        },
        513761: (t, n, e) => {
            e.d(n, { T: () => a });
            var r = e(150729);
            function a(t, n) {
                const e = (0, r.Q)(t),
                    a = (0, r.Q)(n);
                return 12 * (e.getFullYear() - a.getFullYear()) + (e.getMonth() - a.getMonth());
            }
        },
        364597: (t, n, e) => {
            e.d(n, { i: () => a });
            var r = e(150729);
            function a(t) {
                const n = (0, r.Q)(t);
                return n.setHours(23, 59, 59, 999), n;
            }
        },
        428332: (t, n, e) => {
            e.d(n, { g: () => a });
            var r = e(560307);
            function a(t) {
                return (0, r.v)(t, { weekStartsOn: 1 });
            }
        },
        242359: (t, n, e) => {
            e.d(n, { V: () => a });
            var r = e(150729);
            function a(t) {
                const n = (0, r.Q)(t),
                    e = n.getMonth();
                return n.setFullYear(n.getFullYear(), e + 1, 0), n.setHours(23, 59, 59, 999), n;
            }
        },
        560307: (t, n, e) => {
            e.d(n, { v: () => o });
            var r = e(150729),
                a = e(803066);
            function o(t, n) {
                const e = (0, a.j)(),
                    o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? e.weekStartsOn ?? e.locale?.options?.weekStartsOn ?? 0,
                    u = (0, r.Q)(t),
                    c = u.getDay(),
                    i = 6 + (c < o ? -7 : 0) - (c - o);
                return u.setDate(u.getDate() + i), u.setHours(23, 59, 59, 999), u;
            }
        },
        889957: (t, n, e) => {
            e.d(n, { h: () => a });
            var r = e(150729);
            function a(t) {
                return (0, r.Q)(t).getTime();
            }
        },
        323568: (t, n, e) => {
            e.d(n, { Q: () => a });
            var r = e(150729);
            function a(t) {
                return Math.trunc(+(0, r.Q)(t) / 1e3);
            }
        },
        242268: (t, n, e) => {
            e.d(n, { R: () => l });
            var r = e(31418),
                a = e(262014),
                o = e(537796);
            function u(t, n, e) {
                const u = (0, a.z)(t, e),
                    c = (0, a.z)(n, e),
                    i = +u - (0, o.D)(u),
                    s = +c - (0, o.D)(c);
                return Math.round((i - s) / r.jE);
            }
            var c = e(150729);
            function i(t) {
                const n = (0, c.Q)(t),
                    e = n.getMonth();
                return n.setFullYear(n.getFullYear(), e + 1, 0), n.setHours(0, 0, 0, 0), n;
            }
            var s = e(200210);
            function l(t, n) {
                return u(i(t), (0, s.N)(t), n) + 1;
            }
        },
        251461: (t, n, e) => {
            e.d(n, { A: () => a });
            var r = e(150729);
            function a(t, n) {
                const e = (0, r.Q)(t),
                    a = (0, r.Q)(n);
                return e.getTime() > a.getTime();
            }
        },
        871502: (t, n, e) => {
            e.d(n, { R: () => a });
            var r = e(150729);
            function a(t, n) {
                return +(0, r.Q)(t) < +(0, r.Q)(n);
            }
        },
        395121: (t, n, e) => {
            e.d(n, { L: () => a });
            var r = e(150729);
            function a(t) {
                return 5 === (0, r.Q)(t).getDay();
            }
        },
        251418: (t, n, e) => {
            e.d(n, { K: () => a });
            var r = e(808106);
            function a(t, n) {
                return +(0, r.b)(t) == +(0, r.b)(n);
            }
        },
        964971: (t, n, e) => {
            e.d(n, { x: () => a });
            var r = e(150729);
            function a(t, n) {
                const e = (0, r.Q)(t),
                    a = (0, r.Q)(n);
                return e.getFullYear() === a.getFullYear() && e.getMonth() === a.getMonth();
            }
        },
        513371: (t, n, e) => {
            e.d(n, { F: () => a });
            var r = e(150729);
            function a(t, n) {
                const e = (0, r.Q)(t),
                    a = (0, r.Q)(n);
                return e.getFullYear() === a.getFullYear();
            }
        },
        460556: (t, n, e) => {
            e.d(n, { F: () => a });
            var r = e(150729);
            function a(t) {
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
            e.d(n, { V: () => a });
            var r = e(150729);
            function a(t) {
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
                a = e(150729);
            function o(t) {
                return (0, a.Q)(t).getDay();
            }
            function u(t, n) {
                let e = n - o(t);
                return e <= 0 && (e += 7), (0, r.E)(t, e);
            }
            function c(t) {
                return u(t, 5);
            }
        },
        663233: (t, n, e) => {
            e.d(n, { q: () => u });
            var r = e(595873),
                a = e(150729);
            function o(t) {
                const n = (0, a.Q)(t),
                    e = n.getFullYear(),
                    o = n.getMonth(),
                    u = (0, r.L)(t, 0);
                return u.setFullYear(e, o + 1, 0), u.setHours(0, 0, 0, 0), u.getDate();
            }
            function u(t, n) {
                const e = (0, a.Q)(t),
                    u = e.getFullYear(),
                    c = e.getDate(),
                    i = (0, r.L)(t, 0);
                i.setFullYear(u, n, 15), i.setHours(0, 0, 0, 0);
                const s = o(i);
                return e.setMonth(n, Math.min(c, s)), e;
            }
        },
        876346: (t, n, e) => {
            e.d(n, { M: () => o });
            var r = e(595873),
                a = e(150729);
            function o(t, n) {
                const e = (0, a.Q)(t);
                return isNaN(+e) ? (0, r.L)(t, NaN) : (e.setFullYear(n), e);
            }
        },
        200210: (t, n, e) => {
            e.d(n, { N: () => a });
            var r = e(150729);
            function a(t) {
                const n = (0, r.Q)(t);
                return n.setDate(1), n.setHours(0, 0, 0, 0), n;
            }
        },
        524145: (t, n, e) => {
            e.d(n, { l: () => c });
            var r = e(733936),
                a = e(777617);
            function o(t, n) {
                return (0, a.z)(t, -n);
            }
            var u = e(595873);
            function c(t, n) {
                const { years: e = 0, months: a = 0, weeks: c = 0, days: i = 0, hours: s = 0, minutes: l = 0, seconds: f = 0 } = n,
                    v = o(t, a + 12 * e),
                    d = (0, r.k)(v, i + 7 * c),
                    g = 1e3 * (f + 60 * (l + 60 * s));
                return (0, u.L)(t, d.getTime() - g);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-cdd60c62.de1c112a.js.map
