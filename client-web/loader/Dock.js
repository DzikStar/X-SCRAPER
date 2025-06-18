"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Dock"],
    {
        816024: (e, t, n) => {
            n.r(t), n.d(t, { default: () => ie });
            var a = n(807896),
                o = n(202784),
                r = n(400752),
                l = n(83825),
                i = n(996223),
                s = n(325686),
                c = n(292627),
                d = n(365023),
                u = n(530732),
                h = n(392237),
                f = n(111677),
                m = n.n(f),
                p = n(715601),
                g = n(215337),
                v = n(154003),
                b = n(837020),
                y = n(384153);
            function w(e) {
                return y.Z.selectiveClickHandler((t) => {
                    "function" == typeof e && e();
                });
            }
            function E(e) {
                const t = w(e.onRequestClose);
                return o.createElement(s.Z, { style: Z.container }, o.createElement(s.Z, { style: Z.gradientBar }, o.createElement(g.Z, { angle: 80, colors: [h.default.theme.colors.blue500, h.default.theme.colors.blue700], style: Z.gradient })), o.createElement(s.Z, { style: Z.content }, o.createElement(s.Z, { style: Z.text }, e.children), o.createElement(v.ZP, { "aria-label": x.close, borderColor: "transparent", color: "text", icon: o.createElement(b.default, null), onPress: t, size: "medium", testID: "close" })));
            }
            const x = { close: m().ia5e7488 },
                Z = h.default.create((e) => ({ container: { borderRadius: "inherit", overflow: "hidden" }, gradientBar: { position: "absolute", height: "50%", width: "100%" }, gradient: { height: "100%" }, content: { borderRadius: "inherit", marginTop: 3, backgroundColor: e.colors.navigationBackground, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space4, flexDirection: "row", justifyContent: "center", alignItems: "center" }, text: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4, flexDirection: "column", flex: 1 } }));
            function S(e) {
                const { isSideNavLayout: t, width: n } = e,
                    r = t ? c.Z.DesktopVoiceTweetDock : c.Z.MobileVoiceTweetDock,
                    l = t ? [P.root, { maxWidth: n }] : null;
                return o.createElement(
                    r,
                    null,
                    o.createElement(d.Z, { id: "Dock" }, (t, n) => o.createElement(s.Z, (0, a.Z)({ ref: t() }, n({ style: l })), o.createElement(p.Z, null, o.createElement(C, e)))),
                );
            }
            function C(e) {
                const t = o.useRef(null),
                    n = e.isSideNavLayout && P.borderRadius;
                return o.createElement(
                    u.Z,
                    {
                        "aria-label": R.dock,
                        onPress: w(e.onToggleCollapsed),
                        ref: function (e) {
                            t.current = e;
                        },
                        style: [k.container, n],
                    },
                    o.createElement(s.Z, { style: [k.innerContainer, n] }, o.createElement(E, e)),
                );
            }
            const R = { dock: m().ddd5cfe2 },
                k = h.default.create((e) => ({ container: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall }, innerContainer: { backgroundColor: e.colors.navigationBackground } })),
                P = h.default.create((e) => ({ root: { alignSelf: "flex-end", marginEnd: e.spaces.space20, marginBottom: e.spaces.space20, width: "100%" }, borderRadius: { borderRadius: e.borderRadii.xLarge } }));
            var H = n(744610),
                D = n(537392),
                L = n(565058);
            const N = Object.freeze({ collapse: "collapse", exit: "exit", full: "full" }),
                V = { fn: () => Promise.resolve() },
                B = (0, L.cn)(V),
                z = (0, L.cn)(null);
            function T() {
                return (0, r.b9)(z);
            }
            var M = n(625944),
                O = n(187669),
                q = n(731708),
                I = n(63274);
            const _ = 0.85,
                j = 0.7635,
                U = 0.5,
                W = 812,
                $ = 300;
            function A(e) {
                const t = e.borderRadiiPx.large,
                    n = e.spaces.space16,
                    a = e.spacesPx.space8;
                return { borderRadius: t, paddingHorizontal: n, marginVertical: e.spaces.space20, marginVerticalPx: e.spacesPx.space20, shadowOffset: a };
            }
            const G = { collapse: m().d227d19e, unfollow: m().c0f56044 },
                J = { collapse: { label: G.collapse }, unfollow: { label: G.unfollow } };
            function F(e) {
                return o.createElement(
                    s.Z,
                    { style: K.container },
                    o.createElement(v.ZP, {
                        "aria-label": G.collapse,
                        hoverLabel: J.collapse,
                        icon: o.createElement(I.default, { style: K.topBarButtonIcon }),
                        onPress: function () {
                            e.animation.springTo("collapse");
                        },
                        pullLeft: !0,
                        size: "medium",
                        type: "primaryText",
                    }),
                    o.createElement(s.Z, { style: K.expandedShellHeaderRight }, o.createElement(v.ZP, { onPress: e.onRequestClose, pullRight: !0, size: "medium", type: "destructiveText" }, o.createElement(q.ZP, { size: "body", weight: "bold" }, G.unfollow))),
                );
            }
            const K = h.default.create((e) => {
                const t = A(e).paddingHorizontal;
                return { container: { marginTop: e.spaces.space8, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: t }, expandedShellHeaderRight: { flexDirection: "row" }, topBarButtonIcon: { color: e.colors.text, width: e.spaces.space16 } };
            });
            function Y(e, t, n) {
                const a = o.useRef({ state: N.full, animatedPanOffset: 0 }),
                    l = (0, D.iv)(),
                    i = o.useMemo(
                        () =>
                            (function (e, t, n) {
                                let a = e;
                                if (t) {
                                    a = Math.min(W, e);
                                    const { height: t, top: o } = n || {},
                                        r = o + t;
                                    if (r - a < 0) {
                                        const e = r - A(h.default.theme).marginVerticalPx;
                                        e > $ && (a = e);
                                    }
                                }
                                return { collapse: a * U, half: a * j, sheetMaxHeight: a * _, full: a };
                            })(l.height, e.isSideNavLayout, n),
                        [l.height, e.isSideNavLayout, n],
                    ),
                    s = o.useMemo(
                        () =>
                            function (e) {
                                let t;
                                switch (e) {
                                    case N.exit:
                                    case N.collapse:
                                        t = 0;
                                        break;
                                    case N.full:
                                    default:
                                        t = i.full;
                                }
                                return i.full - t;
                            },
                        [i],
                    ),
                    c = o.useRef(new H.Z.Value(i.full)).current;
                (0, O.q)(() => {
                    const e = s(a.current.state);
                    H.Z.spring(c, { toValue: e, useNativeDriver: !1 }).start(t);
                });
                const { onRequestClose: d, onToggleCollapsed: u } = e,
                    f = T(),
                    m = o.useMemo(
                        () =>
                            function (e, t) {
                                (a.current.state = e), f(e);
                                const n = s(a.current.state),
                                    o = t?.vy;
                                return new Promise((t) => {
                                    if (e === N.exit) return d(), t();
                                    H.Z.spring(c, { overshootClamping: !0, toValue: n, useNativeDriver: !1, velocity: o }).start(() => {
                                        e === N.collapse && u(), t();
                                    });
                                });
                            },
                        [f, s, c, d, u],
                    ),
                    p = (0, r.b9)(B);
                return (
                    o.useEffect(() => {
                        p({ fn: m });
                    }, [p, m]),
                    { animatedPan: c, shellHeights: i, springTo: m }
                );
            }
            function Q(e) {
                const t = A(h.default.theme),
                    n = e.animation.shellHeights.full - (e.isSideNavLayout ? t.shadowOffset : 0);
                return o.createElement(H.Z.View, { style: [ee.expandedShell, ...(e.isSideNavLayout ? [ee.expandedShellSideNav] : []), { height: n, transform: [{ translate3d: "0, 0, 0" }, { translateY: e.animation.animatedPan }] }] }, o.createElement(X, e));
            }
            function X(e) {
                return (
                    o.useEffect(
                        () => (
                            e.isSideNavLayout || M.Z.disable(),
                            function () {
                                M.Z.enable();
                            }
                        ),
                        [e.isSideNavLayout],
                    ),
                    o.createElement(d.Z, { id: "DockExpanded" }, (t, n) => o.createElement(s.Z, (0, a.Z)({ ref: t() }, n({ style: ee.expandedShellContent })), o.createElement(F, e), o.createElement(p.Z, { style: ee.container }, o.createElement(H.Z.View, { id: "DockContentWrapper", style: { paddingBottom: H.Z.add(0, e.animation.animatedPan) } }, e.children))))
                );
            }
            const ee = h.default.create((e) => ({ expandedShell: { boxShadow: e.boxShadows.xSmall, width: "100%", height: "100%", borderTopStartRadius: "inherit", borderTopEndRadius: "inherit" }, expandedShellSideNav: { borderRadius: "inherit" }, expandedShellContent: { borderRadius: "inherit", height: "100%", backgroundColor: e.colors.navigationBackground, overflow: "hidden" }, container: { flex: 1, scrollbarWidth: "none", overflow: "scroll", padding: e.spaces.space8 } }));
            function te(e) {
                const t = e.isSideNavLayout ? c.Z.WideExpandedSpaceDock : c.Z.NarrowExpandedSpaceDock;
                return o.createElement(t, null, o.createElement(ne, e));
            }
            function ne(e) {
                const t = A(h.default.theme),
                    n = e.width + t.shadowOffset,
                    r = e.isSideNavLayout ? [re.root, { width: n }] : null,
                    [l, i] = o.useState(),
                    c = o.useRef(null),
                    d = (0, D.iv)();
                return (
                    o.useLayoutEffect(
                        function () {
                            const e = c.current?.getBoundingClientRect();
                            e && i(e);
                        },
                        [d.height],
                    ),
                    o.createElement(s.Z, { ref: c, style: r }, o.createElement(ae, (0, a.Z)({}, e, { layout: l })))
                );
            }
            function ae(e) {
                const { layout: t, ...n } = e,
                    [a, r] = o.useState(!1),
                    l = T(),
                    i = Y(
                        n,
                        () => {
                            r(!0), l(N.full);
                        },
                        t,
                    ),
                    c = o.useMemo(() => new H.Z.Value(i.shellHeights.full), [i.shellHeights.full]),
                    d = { ...e, mounted: a, animation: i },
                    u = o.useRef(c);
                (u.current = c),
                    o.useEffect(() => {
                        const e = u.current;
                        if (!e) return;
                        const t = i.shellHeights.full;
                        H.Z.spring(e, { toValue: t, useNativeDriver: !1 }).start();
                    }, [i?.shellHeights?.full]);
                const h = o.useRef({ animatedHeight: c, animation: i, contentProps: d });
                return (
                    (h.current.animatedHeight = c),
                    (h.current.animation = i),
                    (h.current.contentProps = d),
                    o.useMemo(() => {
                        e.children, e.layout;
                        const { animatedHeight: t, animation: n, contentProps: a } = h.current;
                        let r;
                        r = e.isSideNavLayout ? re.container : oe.container;
                        const l = e.isSideNavLayout ? re.expandedShellContainer : oe.expandedShellContainer,
                            i = { height: t, opacity: n.animatedPan.interpolate({ inputRange: [n.shellHeights.collapse, n.shellHeights.full], outputRange: [1, 0] }) };
                        return o.createElement(H.Z.View, { style: [r, oe.forceGPULayer, i] }, o.createElement(s.Z, { style: l }, o.createElement(Q, a)));
                    }, [e.isSideNavLayout, e.layout, e.children, a])
                );
            }
            const oe = h.default.create((e) => {
                    const t = A(e).borderRadius;
                    return { forceGPULayer: { transform: [{ translate3d: "0, 0, 0" }] }, fullHeight: { height: "100%" }, container: { position: "fixed", bottom: 0, width: "100%", backgroundColor: e.colors.maskColor }, expandedShellContainer: { width: "100%", borderRadius: t } };
                }),
                re = h.default.create((e) => {
                    const t = A(e);
                    return { root: { alignItems: "center", alignSelf: "flex-end", width: "100%", marginVertical: t.marginVertical, marginEnd: e.spacesPx.space20 }, container: { width: "100%" }, expandedShellContainer: { width: "100%", borderRadius: t.borderRadius, overflow: "hidden", padding: t.shadowOffset / 2, marginStart: t.shadowOffset / 2 } };
                });
            function le(e) {
                const [t, n] = o.useState(!0),
                    [s, c] = (0, r.KO)(l.P),
                    d = () => n((e) => !e),
                    u = () => {
                        c(null), n(!0);
                    };
                if (null === s) return null;
                const [h, f] = s;
                return o.createElement(o.Fragment, null, t ? o.createElement(S, (0, a.Z)({}, e, { onRequestClose: u, onToggleCollapsed: d }), o.createElement(i.J, { path: h })) : o.createElement(te, (0, a.Z)({}, e, { onRequestClose: u, onToggleCollapsed: d }), o.createElement(i.J, { path: f })));
            }
            const ie = o.memo(le);
        },
        215337: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                o = n(325686);
            class r extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, n) => {
                                    const a = t[n];
                                    let o = "";
                                    return a && (o = ` ${100 * a}%`), e + o;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: n, style: r } = this.props;
                    return a.createElement(o.Z, { style: [r, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, n);
                }
            }
            r.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const l = r;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        487606: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M2 4c1.66 0 3-1.34 3-3h1c0 1.66 1.34 3 3 3v1C7.34 5 6 6.34 6 8H5c0-1.66-1.34-3-3-3V4zm7.89 4.9C11.26 7.53 12 5.35 12 2h2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1zm7.32 3.1c-.97-.42-1.81-.97-2.53-1.69-.71-.71-1.27-1.56-1.68-2.52-.42.96-.98 1.81-1.69 2.52-.72.72-1.56 1.27-2.53 1.69.97.42 1.81.97 2.53 1.69.71.71 1.27 1.56 1.69 2.52.41-.96.97-1.81 1.68-2.52.72-.72 1.56-1.27 2.53-1.69z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        465233: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(716406);
            function o(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(o) : (0, a.Z)(e, (e) => o(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Dock.8dbb026a.js.map
