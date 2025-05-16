"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-6107ac1a"],
    {
        661810: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(202784),
                n = r(325686),
                l = r(392237);
            function a({ spacing: e, style: t }) {
                return o.createElement(n.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        98538: (e, t, r) => {
            r.d(t, { Z: () => g });
            var o = r(202784),
                n = r(325686),
                l = r(731708),
                a = r(891198),
                s = r(280278),
                c = r(392237);
            const i = "subtext1",
                u = o.createContext({ onMedia: !1 });
            class d extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, a.Gb)(e) !== (0, a.wl)(e) ? { label: (0, a.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: r, onPress: n } = this.props;
                    return o.createElement(l.ZP, { color: r ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: n }, o.createElement(u.Provider, { value: { onMedia: r } }, e));
                }
            }
            (d.Group = (e) =>
                o.createElement(
                    n.Z,
                    { style: [h.row, e.style] },
                    o.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, r) => o.createElement(n.Z, { key: t, style: t < r.length - 1 && h.groupItemNonLast }, e)),
                )),
                (d.Label = ({ children: e, style: t }) => o.createElement(u.Consumer, null, ({ onMedia: r }) => o.createElement(l.ZP, { children: e, color: r ? "white" : "gray700", size: i, style: t }))),
                (d.Value = ({ animated: e, children: t, count: r, style: n, weight: a = "bold" }) => o.createElement(u.Consumer, null, ({ onMedia: c }) => (e ? o.createElement(s.ZP, { children: t, count: r, size: i, style: n, weight: a }) : o.createElement(l.ZP, { children: t, color: c ? "white" : "text", size: i, style: n, weight: a }))));
            const h = c.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                g = d;
        },
        819483: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                n = r(325686),
                l = r(123588),
                a = r(212145),
                s = r(382880),
                c = r(516951),
                i = r(731708),
                u = r(392237);
            const d = (e) => {
                    const { columns: t, onNearEnd: r, onRowClick: u, rows: d, setSortOptions: g, sortOptions: f } = e,
                        m = o.useRef(null),
                        v = o.useMemo(() => t.reduce((e, t) => e + t.width, 0), [t]),
                        b = o.useMemo(() => (0, s.Z)(r || c.Z), [r]);
                    o.useEffect(() => {
                        if (d.length) {
                            const e = new IntersectionObserver(
                                    (e) => {
                                        e && e.length > 0 && e[0].isIntersecting && b();
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
                    }, [m, b, d.length]);
                    return o.createElement(
                        n.Z,
                        { style: h.tableContainer },
                        o.createElement(
                            "table",
                            { style: h.table },
                            o.createElement(
                                "thead",
                                null,
                                o.createElement(
                                    "tr",
                                    { style: h.row },
                                    t.map((e) =>
                                        o.createElement(
                                            "th",
                                            {
                                                key: e.field,
                                                onClick: () =>
                                                    ((e, t = !1) => {
                                                        if (!t || !g) return;
                                                        g({ sortField: e, sortOrder: e === f?.sortField ? ("ASCENDING" === f?.sortOrder ? "DESCENDING" : "ASCENDING") : "DESCENDING" });
                                                    })(e.field, e.sortable),
                                                style: { width: `${Math.floor((100 * e.width) / v)}%`, ...h.tableHeading },
                                            },
                                            o.createElement(i.ZP, { weight: "bold" }, e.label),
                                            e.field === f?.sortField && ("ASCENDING" === f?.sortOrder ? o.createElement(l.default, null) : o.createElement(a.default, null)),
                                        ),
                                    ),
                                ),
                            ),
                            o.createElement(
                                "tbody",
                                null,
                                d.map((e, r) =>
                                    o.createElement(
                                        "tr",
                                        { key: r, onClick: () => u(e), ref: r === d.length - 5 ? m : null, style: { ...h.row, ...(u && { cursor: "pointer" }) } },
                                        t.map((t, n) => o.createElement("td", { key: `${r}-${n}`, style: h.cell }, o.createElement(i.ZP, null, e[t.field]))),
                                    ),
                                ),
                            ),
                        ),
                    );
                },
                h = u.default.create((e) => ({ tableContainer: { overflowY: "auto", height: "100%" }, table: { borderCollapse: "collapse" }, tableHeading: { textAlign: "start", padding: e.spaces.space8, position: "sticky", top: 0, backgroundColor: e.colors.gray0, zIndex: 1 }, row: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, cell: { padding: e.spaces.space8, fontVariantNumeric: "tabular-nums" } }));
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        155353: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                n = r(890601),
                l = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        544044: (e, t, r) => {
            r.d(t, { T: () => s });
            var o = r(150729),
                n = r(595873);
            function l(e, t) {
                const r = +(0, o.Q)(e);
                return (0, n.L)(e, r + t);
            }
            var a = r(31418);
            function s(e, t) {
                return l(e, t * a.vh);
            }
        },
        777617: (e, t, r) => {
            r.d(t, { z: () => l });
            var o = r(150729),
                n = r(595873);
            function l(e, t) {
                const r = (0, o.Q)(e);
                if (isNaN(t)) return (0, n.L)(e, NaN);
                if (!t) return r;
                const l = r.getDate(),
                    a = (0, n.L)(e, r.getTime());
                a.setMonth(r.getMonth() + t + 1, 0);
                return l >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), l), r);
            }
        },
        991809: (e, t, r) => {
            r.d(t, { j: () => n });
            var o = r(178016);
            function n(e, t) {
                const r = 7 * t;
                return (0, o.E)(e, r);
            }
        },
        112385: (e, t, r) => {
            r.d(t, { B: () => n });
            var o = r(777617);
            function n(e, t) {
                return (0, o.z)(e, 12 * t);
            }
        },
        513761: (e, t, r) => {
            r.d(t, { T: () => n });
            var o = r(150729);
            function n(e, t) {
                const r = (0, o.Q)(e),
                    n = (0, o.Q)(t);
                return 12 * (r.getFullYear() - n.getFullYear()) + (r.getMonth() - n.getMonth());
            }
        },
        364597: (e, t, r) => {
            r.d(t, { i: () => n });
            var o = r(150729);
            function n(e) {
                const t = (0, o.Q)(e);
                return t.setHours(23, 59, 59, 999), t;
            }
        },
        428332: (e, t, r) => {
            r.d(t, { g: () => n });
            var o = r(560307);
            function n(e) {
                return (0, o.v)(e, { weekStartsOn: 1 });
            }
        },
        242359: (e, t, r) => {
            r.d(t, { V: () => n });
            var o = r(150729);
            function n(e) {
                const t = (0, o.Q)(e),
                    r = t.getMonth();
                return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t;
            }
        },
        560307: (e, t, r) => {
            r.d(t, { v: () => l });
            var o = r(150729),
                n = r(803066);
            function l(e, t) {
                const r = (0, n.j)(),
                    l = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
                    a = (0, o.Q)(e),
                    s = a.getDay(),
                    c = 6 + (s < l ? -7 : 0) - (s - l);
                return a.setDate(a.getDate() + c), a.setHours(23, 59, 59, 999), a;
            }
        },
        889957: (e, t, r) => {
            r.d(t, { h: () => n });
            var o = r(150729);
            function n(e) {
                return (0, o.Q)(e).getTime();
            }
        },
        323568: (e, t, r) => {
            r.d(t, { Q: () => n });
            var o = r(150729);
            function n(e) {
                return Math.trunc(+(0, o.Q)(e) / 1e3);
            }
        },
        242268: (e, t, r) => {
            r.d(t, { R: () => u });
            var o = r(31418),
                n = r(262014),
                l = r(537796);
            function a(e, t, r) {
                const a = (0, n.z)(e, r),
                    s = (0, n.z)(t, r),
                    c = +a - (0, l.D)(a),
                    i = +s - (0, l.D)(s);
                return Math.round((c - i) / o.jE);
            }
            var s = r(150729);
            function c(e) {
                const t = (0, s.Q)(e),
                    r = t.getMonth();
                return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t;
            }
            var i = r(200210);
            function u(e, t) {
                return a(c(e), (0, i.N)(e), t) + 1;
            }
        },
        251461: (e, t, r) => {
            r.d(t, { A: () => n });
            var o = r(150729);
            function n(e, t) {
                const r = (0, o.Q)(e),
                    n = (0, o.Q)(t);
                return r.getTime() > n.getTime();
            }
        },
        871502: (e, t, r) => {
            r.d(t, { R: () => n });
            var o = r(150729);
            function n(e, t) {
                return +(0, o.Q)(e) < +(0, o.Q)(t);
            }
        },
        395121: (e, t, r) => {
            r.d(t, { L: () => n });
            var o = r(150729);
            function n(e) {
                return 5 === (0, o.Q)(e).getDay();
            }
        },
        251418: (e, t, r) => {
            r.d(t, { K: () => n });
            var o = r(808106);
            function n(e, t) {
                return +(0, o.b)(e) == +(0, o.b)(t);
            }
        },
        964971: (e, t, r) => {
            r.d(t, { x: () => n });
            var o = r(150729);
            function n(e, t) {
                const r = (0, o.Q)(e),
                    n = (0, o.Q)(t);
                return r.getFullYear() === n.getFullYear() && r.getMonth() === n.getMonth();
            }
        },
        513371: (e, t, r) => {
            r.d(t, { F: () => n });
            var o = r(150729);
            function n(e, t) {
                const r = (0, o.Q)(e),
                    n = (0, o.Q)(t);
                return r.getFullYear() === n.getFullYear();
            }
        },
        460556: (e, t, r) => {
            r.d(t, { F: () => n });
            var o = r(150729);
            function n(e) {
                let t;
                return (
                    e.forEach(function (e) {
                        const r = (0, o.Q)(e);
                        (void 0 === t || t < r || isNaN(Number(r))) && (t = r);
                    }),
                    t || new Date(NaN)
                );
            }
        },
        346365: (e, t, r) => {
            r.d(t, { V: () => n });
            var o = r(150729);
            function n(e) {
                let t;
                return (
                    e.forEach((e) => {
                        const r = (0, o.Q)(e);
                        (!t || t > r || isNaN(+r)) && (t = r);
                    }),
                    t || new Date(NaN)
                );
            }
        },
        961596: (e, t, r) => {
            r.d(t, { c: () => s });
            var o = r(178016),
                n = r(150729);
            function l(e) {
                return (0, n.Q)(e).getDay();
            }
            function a(e, t) {
                let r = t - l(e);
                return r <= 0 && (r += 7), (0, o.E)(e, r);
            }
            function s(e) {
                return a(e, 5);
            }
        },
        663233: (e, t, r) => {
            r.d(t, { q: () => a });
            var o = r(595873),
                n = r(150729);
            function l(e) {
                const t = (0, n.Q)(e),
                    r = t.getFullYear(),
                    l = t.getMonth(),
                    a = (0, o.L)(e, 0);
                return a.setFullYear(r, l + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
            }
            function a(e, t) {
                const r = (0, n.Q)(e),
                    a = r.getFullYear(),
                    s = r.getDate(),
                    c = (0, o.L)(e, 0);
                c.setFullYear(a, t, 15), c.setHours(0, 0, 0, 0);
                const i = l(c);
                return r.setMonth(t, Math.min(s, i)), r;
            }
        },
        876346: (e, t, r) => {
            r.d(t, { M: () => l });
            var o = r(595873),
                n = r(150729);
            function l(e, t) {
                const r = (0, n.Q)(e);
                return isNaN(+r) ? (0, o.L)(e, NaN) : (r.setFullYear(t), r);
            }
        },
        200210: (e, t, r) => {
            r.d(t, { N: () => n });
            var o = r(150729);
            function n(e) {
                const t = (0, o.Q)(e);
                return t.setDate(1), t.setHours(0, 0, 0, 0), t;
            }
        },
        524145: (e, t, r) => {
            r.d(t, { l: () => s });
            var o = r(733936),
                n = r(777617);
            function l(e, t) {
                return (0, n.z)(e, -t);
            }
            var a = r(595873);
            function s(e, t) {
                const { years: r = 0, months: n = 0, weeks: s = 0, days: c = 0, hours: i = 0, minutes: u = 0, seconds: d = 0 } = t,
                    h = l(e, n + 12 * r),
                    g = (0, o.k)(h, c + 7 * s),
                    f = 1e3 * (d + 60 * (u + 60 * i));
                return (0, a.L)(e, g.getTime() - f);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-6107ac1a.0eb2c70a.js.map
