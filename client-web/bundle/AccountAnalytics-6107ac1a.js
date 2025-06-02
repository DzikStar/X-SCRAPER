"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-6107ac1a", "icons/IconChevronRight-js", "icons/IconLayers-js"],
    {
        98538: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                o = r(325686),
                l = r(731708),
                a = r(891198),
                s = r(280278),
                i = r(392237);
            const c = "subtext1",
                u = n.createContext({ onMedia: !1 });
            class d extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, a.Gb)(e) !== (0, a.wl)(e) ? { label: (0, a.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: r, onPress: o } = this.props;
                    return n.createElement(l.ZP, { color: r ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: o }, n.createElement(u.Provider, { value: { onMedia: r } }, e));
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
                (d.Label = ({ children: e, style: t }) => n.createElement(u.Consumer, null, ({ onMedia: r }) => n.createElement(l.ZP, { children: e, color: r ? "white" : "gray700", size: c, style: t }))),
                (d.Value = ({ animated: e, children: t, count: r, style: o, weight: a = "bold" }) => n.createElement(u.Consumer, null, ({ onMedia: i }) => (e ? n.createElement(s.ZP, { children: t, count: r, size: c, style: o, weight: a }) : n.createElement(l.ZP, { children: t, color: i ? "white" : "text", size: c, style: o, weight: a }))));
            const h = i.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                g = d;
        },
        819483: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                o = r(325686),
                l = r(123588),
                a = r(212145),
                s = r(382880),
                i = r(516951),
                c = r(731708),
                u = r(392237);
            const d = (e) => {
                    const { columns: t, onNearEnd: r, onRowClick: u, rows: d, setSortOptions: g, sortOptions: f } = e,
                        v = n.useRef(null),
                        m = n.useMemo(() => t.reduce((e, t) => e + t.width, 0), [t]),
                        b = n.useMemo(() => (0, s.Z)(r || i.Z), [r]);
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
                                                        if (!t || !g) return;
                                                        g({ sortField: e, sortOrder: e === f?.sortField ? ("ASCENDING" === f?.sortOrder ? "DESCENDING" : "ASCENDING") : "DESCENDING" });
                                                    })(e.field, e.sortable),
                                                style: { width: `${Math.floor((100 * e.width) / m)}%`, ...h.tableHeading },
                                            },
                                            n.createElement(c.ZP, { weight: "bold" }, e.label),
                                            e.field === f?.sortField && ("ASCENDING" === f?.sortOrder ? n.createElement(l.default, null) : n.createElement(a.default, null)),
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
                                        t.map((t, o) => n.createElement("td", { key: `${r}-${o}`, style: h.cell }, n.createElement(c.ZP, null, e[t.field]))),
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
        58399: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                o = r(890601),
                l = r(783427),
                a = r(717683),
                s = r(347101);
            const i = (e = {}) => {
                const t = n.useContext(a.Z),
                    { direction: r } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, t && s.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: r });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        275450: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var n = r(202784),
                o = r(890601),
                l = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M2 8.5C2 7.12 3.12 6 4.5 6h11C16.88 6 18 7.12 18 8.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C3.12 22 2 20.88 2 19.5v-11zM19.5 4c.28 0 .5.22.5.5v13.45c1.14-.23 2-1.24 2-2.45v-11C22 3.12 20.88 2 19.5 2h-11c-1.21 0-2.22.86-2.45 2H19.5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        544044: (e, t, r) => {
            r.d(t, { T: () => s });
            var n = r(150729),
                o = r(595873);
            function l(e, t) {
                const r = +(0, n.Q)(e);
                return (0, o.L)(e, r + t);
            }
            var a = r(31418);
            function s(e, t) {
                return l(e, t * a.vh);
            }
        },
        777617: (e, t, r) => {
            r.d(t, { z: () => l });
            var n = r(150729),
                o = r(595873);
            function l(e, t) {
                const r = (0, n.Q)(e);
                if (isNaN(t)) return (0, o.L)(e, NaN);
                if (!t) return r;
                const l = r.getDate(),
                    a = (0, o.L)(e, r.getTime());
                a.setMonth(r.getMonth() + t + 1, 0);
                return l >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), l), r);
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
            r.d(t, { v: () => l });
            var n = r(150729),
                o = r(803066);
            function l(e, t) {
                const r = (0, o.j)(),
                    l = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
                    a = (0, n.Q)(e),
                    s = a.getDay(),
                    i = 6 + (s < l ? -7 : 0) - (s - l);
                return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a;
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
                l = r(537796);
            function a(e, t, r) {
                const a = (0, o.z)(e, r),
                    s = (0, o.z)(t, r),
                    i = +a - (0, l.D)(a),
                    c = +s - (0, l.D)(s);
                return Math.round((i - c) / n.jE);
            }
            var s = r(150729);
            function i(e) {
                const t = (0, s.Q)(e),
                    r = t.getMonth();
                return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t;
            }
            var c = r(200210);
            function u(e, t) {
                return a(i(e), (0, c.N)(e), t) + 1;
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
            r.d(t, { c: () => s });
            var n = r(178016),
                o = r(150729);
            function l(e) {
                return (0, o.Q)(e).getDay();
            }
            function a(e, t) {
                let r = t - l(e);
                return r <= 0 && (r += 7), (0, n.E)(e, r);
            }
            function s(e) {
                return a(e, 5);
            }
        },
        663233: (e, t, r) => {
            r.d(t, { q: () => a });
            var n = r(595873),
                o = r(150729);
            function l(e) {
                const t = (0, o.Q)(e),
                    r = t.getFullYear(),
                    l = t.getMonth(),
                    a = (0, n.L)(e, 0);
                return a.setFullYear(r, l + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
            }
            function a(e, t) {
                const r = (0, o.Q)(e),
                    a = r.getFullYear(),
                    s = r.getDate(),
                    i = (0, n.L)(e, 0);
                i.setFullYear(a, t, 15), i.setHours(0, 0, 0, 0);
                const c = l(i);
                return r.setMonth(t, Math.min(s, c)), r;
            }
        },
        876346: (e, t, r) => {
            r.d(t, { M: () => l });
            var n = r(595873),
                o = r(150729);
            function l(e, t) {
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
            r.d(t, { l: () => s });
            var n = r(733936),
                o = r(777617);
            function l(e, t) {
                return (0, o.z)(e, -t);
            }
            var a = r(595873);
            function s(e, t) {
                const { years: r = 0, months: o = 0, weeks: s = 0, days: i = 0, hours: c = 0, minutes: u = 0, seconds: d = 0 } = t,
                    h = l(e, o + 12 * r),
                    g = (0, n.k)(h, i + 7 * s),
                    f = 1e3 * (d + 60 * (u + 60 * c));
                return (0, a.L)(e, g.getTime() - f);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-6107ac1a.8a81798a.js.map
