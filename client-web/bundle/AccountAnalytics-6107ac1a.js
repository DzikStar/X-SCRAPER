"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-6107ac1a"],
    {
        98538: (e, t, r) => {
            r.d(t, { Z: () => f });
            var n = r(202784),
                o = r(325686),
                l = r(731708),
                a = r(891198),
                s = r(280278),
                c = r(392237);
            const u = "subtext1",
                i = n.createContext({ onMedia: !1 });
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
                    return n.createElement(l.ZP, { color: r ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: o }, n.createElement(i.Provider, { value: { onMedia: r } }, e));
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
                (d.Label = ({ children: e, style: t }) => n.createElement(i.Consumer, null, ({ onMedia: r }) => n.createElement(l.ZP, { children: e, color: r ? "white" : "gray700", size: u, style: t }))),
                (d.Value = ({ animated: e, children: t, count: r, style: o, weight: a = "bold" }) => n.createElement(i.Consumer, null, ({ onMedia: c }) => (e ? n.createElement(s.ZP, { children: t, count: r, size: u, style: o, weight: a }) : n.createElement(l.ZP, { children: t, color: c ? "white" : "text", size: u, style: o, weight: a }))));
            const h = c.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                f = d;
        },
        819483: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                o = r(325686),
                l = r(123588),
                a = r(212145),
                s = r(382880),
                c = r(516951),
                u = r(731708),
                i = r(392237);
            const d = (e) => {
                    const { columns: t, onNearEnd: r, onRowClick: i, rows: d, setSortOptions: f, sortOptions: g } = e,
                        m = n.useRef(null),
                        b = n.useMemo(() => t.reduce((e, t) => e + t.width, 0), [t]),
                        v = n.useMemo(() => (0, s.Z)(r || c.Z), [r]);
                    n.useEffect(() => {
                        if (d.length) {
                            const e = new IntersectionObserver(
                                    (e) => {
                                        e && e.length > 0 && e[0].isIntersecting && v();
                                    },
                                    { threshold: 1 },
                                ),
                                { current: t } = m || {};
                            return (
                                t && e.observe(t),
                                () => {
                                    t && e.unobserve(t);
                                }
                            );
                        }
                    }, [m, v, d.length]);
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
                                                style: { width: `${Math.floor((100 * e.width) / b)}%`, ...h.tableHeading },
                                            },
                                            n.createElement(u.ZP, { weight: "bold" }, e.label),
                                            e.field === g?.sortField && ("ASCENDING" === g?.sortOrder ? n.createElement(l.default, null) : n.createElement(a.default, null)),
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
                                        { key: r, onClick: () => i(e), ref: r === d.length - 5 ? m : null, style: { ...h.row, ...(i && { cursor: "pointer" }) } },
                                        t.map((t, o) => n.createElement("td", { key: `${r}-${o}`, style: h.cell }, n.createElement(u.ZP, null, e[t.field]))),
                                    ),
                                ),
                            ),
                        ),
                    );
                },
                h = i.default.create((e) => ({ tableContainer: { overflowY: "auto", height: "100%" }, table: { borderCollapse: "collapse" }, tableHeading: { textAlign: "start", padding: e.spaces.space8, position: "sticky", top: 0, backgroundColor: e.colors.gray0, zIndex: 1 }, row: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, cell: { padding: e.spaces.space8, fontVariantNumeric: "tabular-nums" } }));
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
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
                    c = 6 + (s < l ? -7 : 0) - (s - l);
                return a.setDate(a.getDate() + c), a.setHours(23, 59, 59, 999), a;
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
            r.d(t, { R: () => i });
            var n = r(31418),
                o = r(262014),
                l = r(537796);
            function a(e, t, r) {
                const a = (0, o.z)(e, r),
                    s = (0, o.z)(t, r),
                    c = +a - (0, l.D)(a),
                    u = +s - (0, l.D)(s);
                return Math.round((c - u) / n.jE);
            }
            var s = r(150729);
            function c(e) {
                const t = (0, s.Q)(e),
                    r = t.getMonth();
                return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t;
            }
            var u = r(200210);
            function i(e, t) {
                return a(c(e), (0, u.N)(e), t) + 1;
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
                    c = (0, n.L)(e, 0);
                c.setFullYear(a, t, 15), c.setHours(0, 0, 0, 0);
                const u = l(c);
                return r.setMonth(t, Math.min(s, u)), r;
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
                const { years: r = 0, months: o = 0, weeks: s = 0, days: c = 0, hours: u = 0, minutes: i = 0, seconds: d = 0 } = t,
                    h = l(e, o + 12 * r),
                    f = (0, n.k)(h, c + 7 * s),
                    g = 1e3 * (d + 60 * (i + 60 * u));
                return (0, a.L)(e, f.getTime() - g);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-6107ac1a.9b6c54ba.js.map
