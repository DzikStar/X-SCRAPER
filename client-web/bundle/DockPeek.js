"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DockPeek"],
    {
        292546: (e, t, a) => {
            a.d(t, { Z: () => o });
            a(543673), a(240753), a(128399), a(136728);
            var n = a(202784),
                r = a(107267);
            const o = () => {
                const e = (0, r.useLocation)(),
                    t = (0, r.useHistory)(),
                    [a, o] = n.useState(new URLSearchParams(e.search));
                n.useEffect(() => {
                    o(new URLSearchParams(e.search));
                }, [e.search]);
                const s = n.useCallback(
                    (n, r) => {
                        const o = new URLSearchParams(a);
                        o.set(n, r), t.push(`${e.pathname}?${o.toString()}`);
                    },
                    [t, e.pathname, a],
                );
                return [n.useMemo(() => new URLSearchParams(e.search), [e.search]), s];
            };
        },
        149103: (e, t, a) => {
            a.r(t), a.d(t, { default: () => z });
            var n = a(202784),
                r = a(400752),
                o = a(83825),
                s = a(292546),
                l = a(807896),
                c = a(325686),
                i = a(537392),
                d = a(392237),
                h = a(138099),
                u = a(154003),
                p = a(111677),
                m = a.n(p),
                g = a(487552),
                f = a(837020),
                w = a(715601),
                b = a(996223),
                y = a(731708),
                v = a(530732),
                E = a(215337);
            function P({ "aria-label": e, children: t, onPress: a, style: r }) {
                return n.createElement(v.Z, { "aria-label": e, onPress: a, style: [Z.button, r] }, n.createElement(E.Z, { angle: 80, colors: [d.default.theme.colors.blue500, d.default.theme.colors.blue700], style: Z.gradient }, t));
            }
            const Z = d.default.create((e) => ({ button: { overflow: "hidden", width: "100%", boxShadow: e.boxShadows.small, height: e.spacesPx.space48, borderRadius: e.spacesPx.space48 }, gradient: { height: "100%", justifyContent: "center", paddingHorizontal: e.spaces.space24 } }));
            function x({ onPress: e }) {
                const t = m().g4743c56;
                return n.createElement(n.Fragment, null, n.createElement(c.Z, { style: C.ctaButtonContainer }, n.createElement(P, { "aria-label": t, onPress: e, style: C.ctaButton }, n.createElement(y.ZP, { align: "center", color: "white", numberOfLines: 1, size: "headline1", weight: "bold" }, t))));
            }
            const C = d.default.create((e) => ({ ctaButtonContainer: { width: "100%", gap: e.spaces.space8, marginTop: e.spaces.space24 }, ctaButton: { width: "100%" } }));
            function k(e) {
                const t = (0, i.iv)().width < d.default.theme.breakpoints.medium,
                    a = { type: "bottom", role: "menu", onMaskClick: e.onClose, allowBackNavigation: !0, withKeyboardNavigation: !0, withMask: !0 },
                    [r, o] = (function () {
                        const [e, t] = n.useState(null),
                            a = n.useMemo(() => {
                                if (!e)
                                    return function (e) {
                                        const a = e.nativeEvent.layout;
                                        a && t(a);
                                    };
                            }, [e]);
                        return [e, a];
                    })();
                return n.createElement(h.Z, a, n.createElement(w.Z, { onLayout: o, style: L.sheetContainer }, n.createElement(c.Z, { style: L.header }, t && n.createElement(c.Z, { style: L.headerLeft }, n.createElement(u.ZP, (0, l.Z)({ "aria-label": S.collapse, icon: n.createElement(g.default, { style: L.closeIcon }), onPress: e.onJoin, pullLeft: !0 }, B))), n.createElement(c.Z, { style: L.headerRight }, n.createElement(u.ZP, (0, l.Z)({ "aria-label": S.close, icon: n.createElement(f.default, { style: L.closeIcon }), onPress: e.onClose, pullLeft: !0 }, B)))), n.createElement(c.Z, { style: [L.withoutPadding, L.content, ...(t ? [] : [L.contentNarrow])] }, n.createElement(b.J, { path: e.path ?? "" })), !t && n.createElement(x, { onPress: e.onJoin })));
            }
            const L = d.default.create((e) => ({ sheetContainer: { flex: 1, padding: e.spacesPx.space24, paddingTop: e.spacesPx.space12 }, withoutPadding: { paddingHorizontal: 0, paddingVertical: 0 }, content: { overflowY: "auto", flex: 1, scrollbarWidth: "none" }, contentNarrow: { maxHeight: "60vh" }, header: { flexDirection: "row", marginBottom: e.spacesPx.space12 }, headerLeft: { flex: 1, alignItems: "flex-start" }, headerRight: { flex: 1, alignItems: "flex-end" }, closeIcon: { width: e.spacesPx.space24, height: e.spacesPx.space24 } })),
                B = { borderColor: "transparent", color: "text", size: "medium" },
                S = { collapse: m().d227d19e, close: m().ia5e7488 };
            function z(e) {
                const [t] = (0, s.Z)(),
                    a = t.get("peek"),
                    l = t.get("collapsed"),
                    c = t.get("expanded"),
                    i = (0, r.b9)(o.P);
                return n.createElement(k, {
                    onClose: () => {
                        e.history.goBackThroughModals();
                    },
                    onJoin: () => {
                        l && c && i([l, c]), e.history.goBackThroughModals();
                    },
                    path: a,
                });
            }
        },
        215337: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(202784),
                r = a(325686);
            class o extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, a) => {
                                    const n = t[a];
                                    let r = "";
                                    return n && (r = ` ${100 * n}%`), e + r;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: a, style: o } = this.props;
                    return n.createElement(r.Z, { style: [o, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, a);
                }
            }
            o.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const s = o;
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                s = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        487606: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                s = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M2 4c1.66 0 3-1.34 3-3h1c0 1.66 1.34 3 3 3v1C7.34 5 6 6.34 6 8H5c0-1.66-1.34-3-3-3V4zm7.89 4.9C11.26 7.53 12 5.35 12 2h2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1zm7.32 3.1c-.97-.42-1.81-.97-2.53-1.69-.71-.71-1.27-1.56-1.68-2.52-.42.96-.98 1.81-1.69 2.52-.72.72-1.56 1.27-2.53 1.69.97.42 1.81.97 2.53 1.69.71.71 1.27 1.56 1.69 2.52.41-.96.97-1.81 1.68-2.52.72-.72 1.56-1.27 2.53-1.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        465233: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(716406);
            function r(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(r) : (0, n.Z)(e, (e) => r(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DockPeek.6b36d55a.js.map
