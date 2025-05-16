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
                return o.createElement(n.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        98538: (e, t, r) => {
            r.d(t, { Z: () => g });
            var o = r(202784),
                n = r(325686),
                l = r(731708),
                a = r(891198),
                i = r(280278),
                s = r(392237);
            const c = "subtext1",
                d = o.createContext({ onMedia: !1 });
            class u extends o.Component {
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
                    return o.createElement(l.ZP, { color: r ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: n }, o.createElement(d.Provider, { value: { onMedia: r } }, e));
                }
            }
            (u.Group = (e) =>
                o.createElement(
                    n.Z,
                    { style: [h.row, e.style] },
                    o.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, r) => o.createElement(n.Z, { key: t, style: t < r.length - 1 && h.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => o.createElement(d.Consumer, null, ({ onMedia: r }) => o.createElement(l.ZP, { children: e, color: r ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: r, style: n, weight: a = "bold" }) => o.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? o.createElement(i.ZP, { children: t, count: r, size: c, style: n, weight: a }) : o.createElement(l.ZP, { children: t, color: s ? "white" : "text", size: c, style: n, weight: a }))));
            const h = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                g = u;
        },
        819483: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(202784),
                n = r(325686),
                l = r(123588),
                a = r(212145),
                i = r(382880),
                s = r(516951),
                c = r(731708),
                d = r(392237);
            const u = (e) => {
                    const { columns: t, onNearEnd: r, onRowClick: d, rows: u, setSortOptions: g, sortOptions: m } = e,
                        v = o.useRef(null),
                        f = o.useMemo(() => t.reduce((e, t) => e + t.width, 0), [t]),
                        b = o.useMemo(() => (0, i.Z)(r || s.Z), [r]);
                    o.useEffect(() => {
                        if (u.length) {
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
                    }, [v, b, u.length]);
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
                                                        g({ sortField: e, sortOrder: e === m?.sortField ? ("ASCENDING" === m?.sortOrder ? "DESCENDING" : "ASCENDING") : "DESCENDING" });
                                                    })(e.field, e.sortable),
                                                style: { width: `${Math.floor((100 * e.width) / f)}%`, ...h.tableHeading },
                                            },
                                            o.createElement(c.ZP, { weight: "bold" }, e.label),
                                            e.field === m?.sortField && ("ASCENDING" === m?.sortOrder ? o.createElement(l.default, null) : o.createElement(a.default, null)),
                                        ),
                                    ),
                                ),
                            ),
                            o.createElement(
                                "tbody",
                                null,
                                u.map((e, r) =>
                                    o.createElement(
                                        "tr",
                                        { key: r, onClick: () => d(e), ref: r === u.length - 5 ? v : null, style: { ...h.row, ...(d && { cursor: "pointer" }) } },
                                        t.map((t, n) => o.createElement("td", { key: `${r}-${n}`, style: h.cell }, o.createElement(c.ZP, null, e[t.field]))),
                                    ),
                                ),
                            ),
                        ),
                    );
                },
                h = d.default.create((e) => ({ tableContainer: { overflowY: "auto", height: "100%" }, table: { borderCollapse: "collapse" }, tableHeading: { textAlign: "start", padding: e.spaces.space8, position: "sticky", top: 0, backgroundColor: e.colors.gray0, zIndex: 1 }, row: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, cell: { padding: e.spaces.space8, fontVariantNumeric: "tabular-nums" } }));
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        123588: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                n = r(890601),
                l = r(783427),
                a = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 3.59l7.457 7.45-1.414 1.42L13 7.41V21h-2V7.41l-5.043 5.05-1.414-1.42L12 3.59z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        487552: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                n = r(890601),
                l = r(783427),
                a = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        155353: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                n = r(890601),
                l = r(783427),
                a = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        544044: (e, t, r) => {
            r.d(t, { T: () => i });
            var o = r(150729),
                n = r(595873);
            function l(e, t) {
                const r = +(0, o.Q)(e);
                return (0, n.L)(e, r + t);
            }
            var a = r(31418);
            function i(e, t) {
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
                    i = a.getDay(),
                    s = 6 + (i < l ? -7 : 0) - (i - l);
                return a.setDate(a.getDate() + s), a.setHours(23, 59, 59, 999), a;
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
            r.d(t, { R: () => d });
            var o = r(31418),
                n = r(262014),
                l = r(537796);
            function a(e, t, r) {
                const a = (0, n.z)(e, r),
                    i = (0, n.z)(t, r),
                    s = +a - (0, l.D)(a),
                    c = +i - (0, l.D)(i);
                return Math.round((s - c) / o.jE);
            }
            var i = r(150729);
            function s(e) {
                const t = (0, i.Q)(e),
                    r = t.getMonth();
                return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t;
            }
            var c = r(200210);
            function d(e, t) {
                return a(s(e), (0, c.N)(e), t) + 1;
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
            r.d(t, { c: () => i });
            var o = r(178016),
                n = r(150729);
            function l(e) {
                return (0, n.Q)(e).getDay();
            }
            function a(e, t) {
                let r = t - l(e);
                return r <= 0 && (r += 7), (0, o.E)(e, r);
            }
            function i(e) {
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
                    i = r.getDate(),
                    s = (0, o.L)(e, 0);
                s.setFullYear(a, t, 15), s.setHours(0, 0, 0, 0);
                const c = l(s);
                return r.setMonth(t, Math.min(i, c)), r;
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
            r.d(t, { l: () => i });
            var o = r(733936),
                n = r(777617);
            function l(e, t) {
                return (0, n.z)(e, -t);
            }
            var a = r(595873);
            function i(e, t) {
                const { years: r = 0, months: n = 0, weeks: i = 0, days: s = 0, hours: c = 0, minutes: d = 0, seconds: u = 0 } = t,
                    h = l(e, n + 12 * r),
                    g = (0, o.k)(h, s + 7 * i),
                    m = 1e3 * (u + 60 * (d + 60 * c));
                return (0, a.L)(e, g.getTime() - m);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-6107ac1a.d9069ada.js.map
