"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-6107ac1a"],
    {
        661810: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(202784),
                o = r(325686),
                a = r(392237);
            function l({ spacing: e, style: t }) {
                return n.createElement(o.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        98538: (e, t, r) => {
            r.d(t, { Z: () => f });
            var n = r(202784),
                o = r(325686),
                a = r(731708),
                l = r(891198),
                i = r(280278),
                c = r(392237);
            const s = "subtext1",
                u = n.createContext({ onMedia: !1 });
            class d extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, l.Gb)(e) !== (0, l.wl)(e) ? { label: (0, l.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: r, onPress: o } = this.props;
                    return n.createElement(a.ZP, { color: r ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: o }, n.createElement(u.Provider, { value: { onMedia: r } }, e));
                }
            }
            (d.Group = (e) =>
                n.createElement(
                    o.Z,
                    { style: [h.row, e.style] },
                    n.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, r) => n.createElement(o.Z, { key: t, style: t < r.length - 1 && h.groupItemNonLast }, e)),
                )),
                (d.Label = ({ children: e, style: t }) => n.createElement(u.Consumer, null, ({ onMedia: r }) => n.createElement(a.ZP, { children: e, color: r ? "white" : "gray700", size: s, style: t }))),
                (d.Value = ({ animated: e, children: t, count: r, style: o, weight: l = "bold" }) => n.createElement(u.Consumer, null, ({ onMedia: c }) => (e ? n.createElement(i.ZP, { children: t, count: r, size: s, style: o, weight: l }) : n.createElement(a.ZP, { children: t, color: c ? "white" : "text", size: s, style: o, weight: l }))));
            const h = c.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                f = d;
        },
        819483: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                o = r(325686),
                a = r(123588),
                l = r(212145),
                i = r(382880),
                c = r(516951),
                s = r(731708),
                u = r(392237);
            const d = (e) => {
                    const { columns: t, onNearEnd: r, onRowClick: u, rows: d, setSortOptions: f, sortOptions: g } = e,
                        v = n.useRef(null),
                        m = n.useMemo(() => t.reduce((e, t) => e + t.width, 0), [t]),
                        b = n.useMemo(() => (0, i.Z)(r || c.Z), [r]);
                    n.useEffect(() => {
                        if (d.length) {
                            const e = new IntersectionObserver(
                                    (e) => {
                                        e && e.length > 0 && e[0].isIntersecting && b();
                                    },
                                    { threshold: 1 },
                                ),
                                { current: t } = v || {};
                            return (
                                t && e.observe(t),
                                () => {
                                    t && e.unobserve(t);
                                }
                            );
                        }
                    }, [v, b, d.length]);
                    return n.createElement(
                        o.Z,
                        { style: h.tableContainer },
                        n.createElement(
                            "table",
                            { style: h.table },
                            n.createElement(
                                "thead",
                                null,
                                n.createElement(
                                    "tr",
                                    { style: h.row },
                                    t.map((e) =>
                                        n.createElement(
                                            "th",
                                            {
                                                key: e.field,
                                                onClick: () =>
                                                    ((e, t = !1) => {
                                                        if (!t || !f) return;
                                                        f({ sortField: e, sortOrder: e === g?.sortField ? ("ASCENDING" === g?.sortOrder ? "DESCENDING" : "ASCENDING") : "DESCENDING" });
                                                    })(e.field, e.sortable),
                                                style: { width: `${Math.floor((100 * e.width) / m)}%`, ...h.tableHeading },
                                            },
                                            n.createElement(s.ZP, { weight: "bold" }, e.label),
                                            e.field === g?.sortField && ("ASCENDING" === g?.sortOrder ? n.createElement(a.default, null) : n.createElement(l.default, null)),
                                        ),
                                    ),
                                ),
                            ),
                            n.createElement(
                                "tbody",
                                null,
                                d.map((e, r) =>
                                    n.createElement(
                                        "tr",
                                        { key: r, onClick: () => u(e), ref: r === d.length - 5 ? v : null, style: { ...h.row, ...(u && { cursor: "pointer" }) } },
                                        t.map((t, o) => n.createElement("td", { key: `${r}-${o}`, style: h.cell }, n.createElement(s.ZP, null, e[t.field]))),
                                    ),
                                ),
                            ),
                        ),
                    );
                },
                h = u.default.create((e) => ({ tableContainer: { overflowY: "auto", height: "100%" }, table: { borderCollapse: "collapse" }, tableHeading: { textAlign: "start", padding: e.spaces.space8, position: "sticky", top: 0, backgroundColor: e.colors.gray0, zIndex: 1 }, row: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, cell: { padding: e.spaces.space8, fontVariantNumeric: "tabular-nums" } }));
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        123588: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                o = r(890601),
                a = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 3.59l7.457 7.45-1.414 1.42L13 7.41V21h-2V7.41l-5.043 5.05-1.414-1.42L12 3.59z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        97301: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(202784),
                o = r(890601),
                a = r(783427),
                l = r(717683),
                i = r(347101);
            const c = (e = {}) => {
                const t = n.useContext(l.Z),
                    { direction: r } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style, t && i.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15.043 3.54l1.414 1.42L9.414 12l7.043 7.04-1.414 1.42L6.586 12l8.457-8.46z" })) }, { writingDirection: r });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        432181: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                o = r(890601),
                a = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        711223: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                o = r(890601),
                a = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        482609: (e) => {
            e.exports = function (e) {
                var t = [];
                return (
                    (t.toString = function () {
                        return this.map(function (t) {
                            var r = (function (e, t) {
                                var r = e[1] || "",
                                    n = e[3];
                                if (!n) return r;
                                if (t && "function" == typeof btoa) {
                                    var o = ((l = n), (i = btoa(unescape(encodeURIComponent(JSON.stringify(l))))), (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i)), "/*# ".concat(c, " */")),
                                        a = n.sources.map(function (e) {
                                            return "/*# sourceURL=".concat(n.sourceRoot || "").concat(e, " */");
                                        });
                                    return [r].concat(a).concat([o]).join("\n");
                                }
                                var l, i, c;
                                return [r].join("\n");
                            })(t, e);
                            return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r;
                        }).join("");
                    }),
                    (t.i = function (e, r, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var o = {};
                        if (n)
                            for (var a = 0; a < this.length; a++) {
                                var l = this[a][0];
                                null != l && (o[l] = !0);
                            }
                        for (var i = 0; i < e.length; i++) {
                            var c = [].concat(e[i]);
                            (n && o[c[0]]) || (r && (c[2] ? (c[2] = "".concat(r, " and ").concat(c[2])) : (c[2] = r)), t.push(c));
                        }
                    }),
                    t
                );
            };
        },
        840489: (e, t, r) => {
            function n(e) {
                var t,
                    r,
                    o = "";
                if ("string" == typeof e || "number" == typeof e) o += e;
                else if ("object" == typeof e)
                    if (Array.isArray(e)) {
                        var a = e.length;
                        for (t = 0; t < a; t++) e[t] && (r = n(e[t])) && (o && (o += " "), (o += r));
                    } else for (r in e) e[r] && (o && (o += " "), (o += r));
                return o;
            }
            function o() {
                for (var e, t, r = 0, o = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = n(e)) && (o && (o += " "), (o += t));
                return o;
            }
            r.d(t, { W: () => o, Z: () => a });
            const a = o;
        },
        544044: (e, t, r) => {
            r.d(t, { T: () => i });
            var n = r(150729),
                o = r(595873);
            function a(e, t) {
                const r = +(0, n.Q)(e);
                return (0, o.L)(e, r + t);
            }
            var l = r(31418);
            function i(e, t) {
                return a(e, t * l.vh);
            }
        },
        777617: (e, t, r) => {
            r.d(t, { z: () => a });
            var n = r(150729),
                o = r(595873);
            function a(e, t) {
                const r = (0, n.Q)(e);
                if (isNaN(t)) return (0, o.L)(e, NaN);
                if (!t) return r;
                const a = r.getDate(),
                    l = (0, o.L)(e, r.getTime());
                l.setMonth(r.getMonth() + t + 1, 0);
                return a >= l.getDate() ? l : (r.setFullYear(l.getFullYear(), l.getMonth(), a), r);
            }
        },
        991809: (e, t, r) => {
            r.d(t, { j: () => o });
            var n = r(178016);
            function o(e, t) {
                const r = 7 * t;
                return (0, n.E)(e, r);
            }
        },
        112385: (e, t, r) => {
            r.d(t, { B: () => o });
            var n = r(777617);
            function o(e, t) {
                return (0, n.z)(e, 12 * t);
            }
        },
        513761: (e, t, r) => {
            r.d(t, { T: () => o });
            var n = r(150729);
            function o(e, t) {
                const r = (0, n.Q)(e),
                    o = (0, n.Q)(t);
                return 12 * (r.getFullYear() - o.getFullYear()) + (r.getMonth() - o.getMonth());
            }
        },
        364597: (e, t, r) => {
            r.d(t, { i: () => o });
            var n = r(150729);
            function o(e) {
                const t = (0, n.Q)(e);
                return t.setHours(23, 59, 59, 999), t;
            }
        },
        428332: (e, t, r) => {
            r.d(t, { g: () => o });
            var n = r(560307);
            function o(e) {
                return (0, n.v)(e, { weekStartsOn: 1 });
            }
        },
        242359: (e, t, r) => {
            r.d(t, { V: () => o });
            var n = r(150729);
            function o(e) {
                const t = (0, n.Q)(e),
                    r = t.getMonth();
                return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t;
            }
        },
        560307: (e, t, r) => {
            r.d(t, { v: () => a });
            var n = r(150729),
                o = r(803066);
            function a(e, t) {
                const r = (0, o.j)(),
                    a = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
                    l = (0, n.Q)(e),
                    i = l.getDay(),
                    c = 6 + (i < a ? -7 : 0) - (i - a);
                return l.setDate(l.getDate() + c), l.setHours(23, 59, 59, 999), l;
            }
        },
        889957: (e, t, r) => {
            r.d(t, { h: () => o });
            var n = r(150729);
            function o(e) {
                return (0, n.Q)(e).getTime();
            }
        },
        323568: (e, t, r) => {
            r.d(t, { Q: () => o });
            var n = r(150729);
            function o(e) {
                return Math.trunc(+(0, n.Q)(e) / 1e3);
            }
        },
        242268: (e, t, r) => {
            r.d(t, { R: () => u });
            var n = r(31418),
                o = r(262014),
                a = r(537796);
            function l(e, t, r) {
                const l = (0, o.z)(e, r),
                    i = (0, o.z)(t, r),
                    c = +l - (0, a.D)(l),
                    s = +i - (0, a.D)(i);
                return Math.round((c - s) / n.jE);
            }
            var i = r(150729);
            function c(e) {
                const t = (0, i.Q)(e),
                    r = t.getMonth();
                return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t;
            }
            var s = r(200210);
            function u(e, t) {
                return l(c(e), (0, s.N)(e), t) + 1;
            }
        },
        251461: (e, t, r) => {
            r.d(t, { A: () => o });
            var n = r(150729);
            function o(e, t) {
                const r = (0, n.Q)(e),
                    o = (0, n.Q)(t);
                return r.getTime() > o.getTime();
            }
        },
        871502: (e, t, r) => {
            r.d(t, { R: () => o });
            var n = r(150729);
            function o(e, t) {
                return +(0, n.Q)(e) < +(0, n.Q)(t);
            }
        },
        395121: (e, t, r) => {
            r.d(t, { L: () => o });
            var n = r(150729);
            function o(e) {
                return 5 === (0, n.Q)(e).getDay();
            }
        },
        251418: (e, t, r) => {
            r.d(t, { K: () => o });
            var n = r(808106);
            function o(e, t) {
                return +(0, n.b)(e) == +(0, n.b)(t);
            }
        },
        964971: (e, t, r) => {
            r.d(t, { x: () => o });
            var n = r(150729);
            function o(e, t) {
                const r = (0, n.Q)(e),
                    o = (0, n.Q)(t);
                return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
            }
        },
        513371: (e, t, r) => {
            r.d(t, { F: () => o });
            var n = r(150729);
            function o(e, t) {
                const r = (0, n.Q)(e),
                    o = (0, n.Q)(t);
                return r.getFullYear() === o.getFullYear();
            }
        },
        460556: (e, t, r) => {
            r.d(t, { F: () => o });
            var n = r(150729);
            function o(e) {
                let t;
                return (
                    e.forEach(function (e) {
                        const r = (0, n.Q)(e);
                        (void 0 === t || t < r || isNaN(Number(r))) && (t = r);
                    }),
                    t || new Date(NaN)
                );
            }
        },
        346365: (e, t, r) => {
            r.d(t, { V: () => o });
            var n = r(150729);
            function o(e) {
                let t;
                return (
                    e.forEach((e) => {
                        const r = (0, n.Q)(e);
                        (!t || t > r || isNaN(+r)) && (t = r);
                    }),
                    t || new Date(NaN)
                );
            }
        },
        961596: (e, t, r) => {
            r.d(t, { c: () => i });
            var n = r(178016),
                o = r(150729);
            function a(e) {
                return (0, o.Q)(e).getDay();
            }
            function l(e, t) {
                let r = t - a(e);
                return r <= 0 && (r += 7), (0, n.E)(e, r);
            }
            function i(e) {
                return l(e, 5);
            }
        },
        663233: (e, t, r) => {
            r.d(t, { q: () => l });
            var n = r(595873),
                o = r(150729);
            function a(e) {
                const t = (0, o.Q)(e),
                    r = t.getFullYear(),
                    a = t.getMonth(),
                    l = (0, n.L)(e, 0);
                return l.setFullYear(r, a + 1, 0), l.setHours(0, 0, 0, 0), l.getDate();
            }
            function l(e, t) {
                const r = (0, o.Q)(e),
                    l = r.getFullYear(),
                    i = r.getDate(),
                    c = (0, n.L)(e, 0);
                c.setFullYear(l, t, 15), c.setHours(0, 0, 0, 0);
                const s = a(c);
                return r.setMonth(t, Math.min(i, s)), r;
            }
        },
        876346: (e, t, r) => {
            r.d(t, { M: () => a });
            var n = r(595873),
                o = r(150729);
            function a(e, t) {
                const r = (0, o.Q)(e);
                return isNaN(+r) ? (0, n.L)(e, NaN) : (r.setFullYear(t), r);
            }
        },
        200210: (e, t, r) => {
            r.d(t, { N: () => o });
            var n = r(150729);
            function o(e) {
                const t = (0, n.Q)(e);
                return t.setDate(1), t.setHours(0, 0, 0, 0), t;
            }
        },
        524145: (e, t, r) => {
            r.d(t, { l: () => i });
            var n = r(733936),
                o = r(777617);
            function a(e, t) {
                return (0, o.z)(e, -t);
            }
            var l = r(595873);
            function i(e, t) {
                const { years: r = 0, months: o = 0, weeks: i = 0, days: c = 0, hours: s = 0, minutes: u = 0, seconds: d = 0 } = t,
                    h = a(e, o + 12 * r),
                    f = (0, n.k)(h, c + 7 * i),
                    g = 1e3 * (d + 60 * (u + 60 * s));
                return (0, l.L)(e, f.getTime() - g);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-6107ac1a.9cee219a.js.map
