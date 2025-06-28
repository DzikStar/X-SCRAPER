(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-6107ac1a", "icons/IconChevronDown-js"],
    {
        98538: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => f });
            var n = r(202784),
                o = r(325686),
                l = r(731708),
                s = r(891198),
                a = r(280278),
                i = r(392237);
            const c = "subtext1",
                u = n.createContext({ onMedia: !1 });
            class d extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, s.Gb)(e) !== (0, s.wl)(e) ? { label: (0, s.Gb)(e) } : void 0;
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
                (d.Value = ({ animated: e, children: t, count: r, style: o, weight: s = "bold" }) => n.createElement(u.Consumer, null, ({ onMedia: i }) => (e ? n.createElement(a.ZP, { children: t, count: r, size: c, style: o, weight: s }) : n.createElement(l.ZP, { children: t, color: i ? "white" : "text", size: c, style: o, weight: s }))));
            const h = i.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                f = d;
        },
        819483: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => d });
            var n = r(202784),
                o = r(325686),
                l = r(123588),
                s = r(212145),
                a = r(382880),
                i = r(516951),
                c = r(731708),
                u = r(392237);
            const d = (e) => {
                    const { columns: t, onNearEnd: r, onRowClick: u, rows: d, setSortOptions: f, sortOptions: g } = e,
                        v = n.useRef(null),
                        m = n.useMemo(() => t.reduce((e, t) => e + t.width, 0), [t]),
                        b = n.useMemo(() => (0, a.Z)(r || i.Z), [r]);
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
                                            n.createElement(c.ZP, { weight: "bold" }, e.label),
                                            e.field === g?.sortField && ("ASCENDING" === g?.sortOrder ? n.createElement(l.default, null) : n.createElement(s.default, null)),
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
            "use strict";
            r.d(t, { Z: () => n });
            const n = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        487552: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => i });
            var n = r(202784),
                o = r(890601),
                l = r(783427),
                s = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const i = a;
        },
        155353: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => i });
            var n = r(202784),
                o = r(890601),
                l = r(783427),
                s = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const i = a;
        },
        666536: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => l });
            var n = r(936386),
                o = r.n(n);
            const l = (e, t, r) => o()(e, t, r);
        },
        936386: (e) => {
            function t(e, t, r) {
                var n, o, l, s, a;
                function i() {
                    var c = Date.now() - s;
                    c < t && c >= 0 ? (n = setTimeout(i, t - c)) : ((n = null), r || ((a = e.apply(l, o)), (l = o = null)));
                }
                null == t && (t = 100);
                var c = function () {
                    (l = this), (o = arguments), (s = Date.now());
                    var c = r && !n;
                    return n || (n = setTimeout(i, t)), c && ((a = e.apply(l, o)), (l = o = null)), a;
                };
                return (
                    (c.clear = function () {
                        n && (clearTimeout(n), (n = null));
                    }),
                    (c.flush = function () {
                        n && ((a = e.apply(l, o)), (l = o = null), clearTimeout(n), (n = null));
                    }),
                    c
                );
            }
            (t.debounce = t), (e.exports = t);
        },
        544044: (e, t, r) => {
            "use strict";
            r.d(t, { T: () => a });
            var n = r(150729),
                o = r(595873);
            function l(e, t) {
                const r = +(0, n.Q)(e);
                return (0, o.L)(e, r + t);
            }
            var s = r(31418);
            function a(e, t) {
                return l(e, t * s.vh);
            }
        },
        777617: (e, t, r) => {
            "use strict";
            r.d(t, { z: () => l });
            var n = r(150729),
                o = r(595873);
            function l(e, t) {
                const r = (0, n.Q)(e);
                if (isNaN(t)) return (0, o.L)(e, NaN);
                if (!t) return r;
                const l = r.getDate(),
                    s = (0, o.L)(e, r.getTime());
                s.setMonth(r.getMonth() + t + 1, 0);
                return l >= s.getDate() ? s : (r.setFullYear(s.getFullYear(), s.getMonth(), l), r);
            }
        },
        991809: (e, t, r) => {
            "use strict";
            r.d(t, { j: () => o });
            var n = r(178016);
            function o(e, t) {
                const r = 7 * t;
                return (0, n.E)(e, r);
            }
        },
        112385: (e, t, r) => {
            "use strict";
            r.d(t, { B: () => o });
            var n = r(777617);
            function o(e, t) {
                return (0, n.z)(e, 12 * t);
            }
        },
        513761: (e, t, r) => {
            "use strict";
            r.d(t, { T: () => o });
            var n = r(150729);
            function o(e, t) {
                const r = (0, n.Q)(e),
                    o = (0, n.Q)(t);
                return 12 * (r.getFullYear() - o.getFullYear()) + (r.getMonth() - o.getMonth());
            }
        },
        364597: (e, t, r) => {
            "use strict";
            r.d(t, { i: () => o });
            var n = r(150729);
            function o(e) {
                const t = (0, n.Q)(e);
                return t.setHours(23, 59, 59, 999), t;
            }
        },
        428332: (e, t, r) => {
            "use strict";
            r.d(t, { g: () => o });
            var n = r(560307);
            function o(e) {
                return (0, n.v)(e, { weekStartsOn: 1 });
            }
        },
        242359: (e, t, r) => {
            "use strict";
            r.d(t, { V: () => o });
            var n = r(150729);
            function o(e) {
                const t = (0, n.Q)(e),
                    r = t.getMonth();
                return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t;
            }
        },
        560307: (e, t, r) => {
            "use strict";
            r.d(t, { v: () => l });
            var n = r(150729),
                o = r(803066);
            function l(e, t) {
                const r = (0, o.j)(),
                    l = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
                    s = (0, n.Q)(e),
                    a = s.getDay(),
                    i = 6 + (a < l ? -7 : 0) - (a - l);
                return s.setDate(s.getDate() + i), s.setHours(23, 59, 59, 999), s;
            }
        },
        889957: (e, t, r) => {
            "use strict";
            r.d(t, { h: () => o });
            var n = r(150729);
            function o(e) {
                return (0, n.Q)(e).getTime();
            }
        },
        323568: (e, t, r) => {
            "use strict";
            r.d(t, { Q: () => o });
            var n = r(150729);
            function o(e) {
                return Math.trunc(+(0, n.Q)(e) / 1e3);
            }
        },
        242268: (e, t, r) => {
            "use strict";
            r.d(t, { R: () => u });
            var n = r(31418),
                o = r(262014),
                l = r(537796);
            function s(e, t, r) {
                const s = (0, o.z)(e, r),
                    a = (0, o.z)(t, r),
                    i = +s - (0, l.D)(s),
                    c = +a - (0, l.D)(a);
                return Math.round((i - c) / n.jE);
            }
            var a = r(150729);
            function i(e) {
                const t = (0, a.Q)(e),
                    r = t.getMonth();
                return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t;
            }
            var c = r(200210);
            function u(e, t) {
                return s(i(e), (0, c.N)(e), t) + 1;
            }
        },
        251461: (e, t, r) => {
            "use strict";
            r.d(t, { A: () => o });
            var n = r(150729);
            function o(e, t) {
                const r = (0, n.Q)(e),
                    o = (0, n.Q)(t);
                return r.getTime() > o.getTime();
            }
        },
        871502: (e, t, r) => {
            "use strict";
            r.d(t, { R: () => o });
            var n = r(150729);
            function o(e, t) {
                return +(0, n.Q)(e) < +(0, n.Q)(t);
            }
        },
        395121: (e, t, r) => {
            "use strict";
            r.d(t, { L: () => o });
            var n = r(150729);
            function o(e) {
                return 5 === (0, n.Q)(e).getDay();
            }
        },
        251418: (e, t, r) => {
            "use strict";
            r.d(t, { K: () => o });
            var n = r(808106);
            function o(e, t) {
                return +(0, n.b)(e) == +(0, n.b)(t);
            }
        },
        964971: (e, t, r) => {
            "use strict";
            r.d(t, { x: () => o });
            var n = r(150729);
            function o(e, t) {
                const r = (0, n.Q)(e),
                    o = (0, n.Q)(t);
                return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
            }
        },
        513371: (e, t, r) => {
            "use strict";
            r.d(t, { F: () => o });
            var n = r(150729);
            function o(e, t) {
                const r = (0, n.Q)(e),
                    o = (0, n.Q)(t);
                return r.getFullYear() === o.getFullYear();
            }
        },
        460556: (e, t, r) => {
            "use strict";
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
            "use strict";
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
            "use strict";
            r.d(t, { c: () => a });
            var n = r(178016),
                o = r(150729);
            function l(e) {
                return (0, o.Q)(e).getDay();
            }
            function s(e, t) {
                let r = t - l(e);
                return r <= 0 && (r += 7), (0, n.E)(e, r);
            }
            function a(e) {
                return s(e, 5);
            }
        },
        663233: (e, t, r) => {
            "use strict";
            r.d(t, { q: () => s });
            var n = r(595873),
                o = r(150729);
            function l(e) {
                const t = (0, o.Q)(e),
                    r = t.getFullYear(),
                    l = t.getMonth(),
                    s = (0, n.L)(e, 0);
                return s.setFullYear(r, l + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
            }
            function s(e, t) {
                const r = (0, o.Q)(e),
                    s = r.getFullYear(),
                    a = r.getDate(),
                    i = (0, n.L)(e, 0);
                i.setFullYear(s, t, 15), i.setHours(0, 0, 0, 0);
                const c = l(i);
                return r.setMonth(t, Math.min(a, c)), r;
            }
        },
        876346: (e, t, r) => {
            "use strict";
            r.d(t, { M: () => l });
            var n = r(595873),
                o = r(150729);
            function l(e, t) {
                const r = (0, o.Q)(e);
                return isNaN(+r) ? (0, n.L)(e, NaN) : (r.setFullYear(t), r);
            }
        },
        200210: (e, t, r) => {
            "use strict";
            r.d(t, { N: () => o });
            var n = r(150729);
            function o(e) {
                const t = (0, n.Q)(e);
                return t.setDate(1), t.setHours(0, 0, 0, 0), t;
            }
        },
        524145: (e, t, r) => {
            "use strict";
            r.d(t, { l: () => a });
            var n = r(733936),
                o = r(777617);
            function l(e, t) {
                return (0, o.z)(e, -t);
            }
            var s = r(595873);
            function a(e, t) {
                const { years: r = 0, months: o = 0, weeks: a = 0, days: i = 0, hours: c = 0, minutes: u = 0, seconds: d = 0 } = t,
                    h = l(e, o + 12 * r),
                    f = (0, n.k)(h, i + 7 * a),
                    g = 1e3 * (d + 60 * (u + 60 * c));
                return (0, s.L)(e, f.getTime() - g);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-6107ac1a.63b0d3fa.js.map
