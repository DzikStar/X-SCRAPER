"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Dock", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        816024: (e, t, n) => {
            n.r(t), n.d(t, { default: () => ie });
            var a = n(807896),
                r = n(202784),
                o = n(400752),
                l = n(83825),
                i = n(996223),
                c = n(325686),
                s = n(292627),
                d = n(365023),
                u = n(530732),
                h = n(392237),
                m = n(111677),
                f = n.n(m),
                g = n(715601),
                p = n(215337),
                v = n(154003),
                w = n(837020),
                Z = n(384153);
            function b(e) {
                return Z.Z.selectiveClickHandler((t) => {
                    "function" == typeof e && e();
                });
            }
            function y(e) {
                const t = b(e.onRequestClose);
                return r.createElement(c.Z, { style: x.container }, r.createElement(c.Z, { style: x.gradientBar }, r.createElement(p.Z, { angle: 80, colors: [h.default.theme.colors.blue500, h.default.theme.colors.blue700], style: x.gradient })), r.createElement(c.Z, { style: x.content }, r.createElement(c.Z, { style: x.text }, e.children), r.createElement(v.ZP, { "aria-label": E.close, borderColor: "transparent", color: "text", icon: r.createElement(w.default, null), onPress: t, size: "medium", testID: "close" })));
            }
            const E = { close: f().ia5e7488 },
                x = h.default.create((e) => ({ container: { borderRadius: "inherit", overflow: "hidden" }, gradientBar: { position: "absolute", height: "50%", width: "100%" }, gradient: { height: "100%" }, content: { borderRadius: "inherit", marginTop: 3, backgroundColor: e.colors.navigationBackground, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space4, flexDirection: "row", justifyContent: "center", alignItems: "center" }, text: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4, flexDirection: "column", flex: 1 } }));
            function S(e) {
                const { isSideNavLayout: t, width: n } = e,
                    o = t ? s.Z.DesktopVoiceTweetDock : s.Z.MobileVoiceTweetDock,
                    l = t ? [P.root, { maxWidth: n }] : null;
                return r.createElement(
                    o,
                    null,
                    r.createElement(d.Z, { id: "Dock" }, (t, n) => r.createElement(c.Z, (0, a.Z)({ ref: t() }, n({ style: l })), r.createElement(g.Z, null, r.createElement(C, e)))),
                );
            }
            function C(e) {
                const t = r.useRef(null),
                    n = e.isSideNavLayout && P.borderRadius;
                return r.createElement(
                    u.Z,
                    {
                        "aria-label": R.dock,
                        onPress: b(e.onToggleCollapsed),
                        ref: function (e) {
                            t.current = e;
                        },
                        style: [k.container, n],
                    },
                    r.createElement(c.Z, { style: [k.innerContainer, n] }, r.createElement(y, e)),
                );
            }
            const R = { dock: f().ddd5cfe2 },
                k = h.default.create((e) => ({ container: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall }, innerContainer: { backgroundColor: e.colors.navigationBackground } })),
                P = h.default.create((e) => ({ root: { alignSelf: "flex-end", marginEnd: e.spaces.space20, marginBottom: e.spaces.space20, width: "100%" }, borderRadius: { borderRadius: e.borderRadii.xLarge } }));
            var L = n(744610),
                H = n(537392),
                D = n(565058);
            const z = Object.freeze({ collapse: "collapse", exit: "exit", full: "full" }),
                V = { fn: () => Promise.resolve() },
                B = (0, D.cn)(V),
                N = (0, D.cn)(null);
            function M() {
                return (0, o.b9)(N);
            }
            var T = n(625944),
                I = n(187669),
                j = n(731708),
                O = n(63274);
            const q = 0.85,
                _ = 0.7635,
                U = 0.5,
                W = 812,
                $ = 300;
            function A(e) {
                const t = e.borderRadiiPx.large,
                    n = e.spaces.space16,
                    a = e.spacesPx.space8;
                return { borderRadius: t, paddingHorizontal: n, marginVertical: e.spaces.space20, marginVerticalPx: e.spacesPx.space20, shadowOffset: a };
            }
            const F = { collapse: f().d227d19e, unfollow: f().c0f56044 },
                G = { collapse: { label: F.collapse }, unfollow: { label: F.unfollow } };
            function J(e) {
                return r.createElement(
                    c.Z,
                    { style: K.container },
                    r.createElement(v.ZP, {
                        "aria-label": F.collapse,
                        hoverLabel: G.collapse,
                        icon: r.createElement(O.default, { style: K.topBarButtonIcon }),
                        onPress: function () {
                            e.animation.springTo("collapse");
                        },
                        pullLeft: !0,
                        size: "medium",
                        type: "primaryText",
                    }),
                    r.createElement(c.Z, { style: K.expandedShellHeaderRight }, r.createElement(v.ZP, { onPress: e.onRequestClose, pullRight: !0, size: "medium", type: "destructiveText" }, r.createElement(j.ZP, { size: "body", weight: "bold" }, F.unfollow))),
                );
            }
            const K = h.default.create((e) => {
                const t = A(e).paddingHorizontal;
                return { container: { marginTop: e.spaces.space8, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: t }, expandedShellHeaderRight: { flexDirection: "row" }, topBarButtonIcon: { color: e.colors.text, width: e.spaces.space16 } };
            });
            function Y(e, t, n) {
                const a = r.useRef({ state: z.full, animatedPanOffset: 0 }),
                    l = (0, H.iv)(),
                    i = r.useMemo(
                        () =>
                            (function (e, t, n) {
                                let a = e;
                                if (t) {
                                    a = Math.min(W, e);
                                    const { height: t, top: r } = n || {},
                                        o = r + t;
                                    if (o - a < 0) {
                                        const e = o - A(h.default.theme).marginVerticalPx;
                                        e > $ && (a = e);
                                    }
                                }
                                return { collapse: a * U, half: a * _, sheetMaxHeight: a * q, full: a };
                            })(l.height, e.isSideNavLayout, n),
                        [l.height, e.isSideNavLayout, n],
                    ),
                    c = r.useMemo(
                        () =>
                            function (e) {
                                let t;
                                switch (e) {
                                    case z.exit:
                                    case z.collapse:
                                        t = 0;
                                        break;
                                    case z.full:
                                    default:
                                        t = i.full;
                                }
                                return i.full - t;
                            },
                        [i],
                    ),
                    s = r.useRef(new L.Z.Value(i.full)).current;
                (0, I.q)(() => {
                    const e = c(a.current.state);
                    L.Z.spring(s, { toValue: e, useNativeDriver: !1 }).start(t);
                });
                const { onRequestClose: d, onToggleCollapsed: u } = e,
                    m = M(),
                    f = r.useMemo(
                        () =>
                            function (e, t) {
                                (a.current.state = e), m(e);
                                const n = c(a.current.state),
                                    r = t?.vy;
                                return new Promise((t) => {
                                    if (e === z.exit) return d(), t();
                                    L.Z.spring(s, { overshootClamping: !0, toValue: n, useNativeDriver: !1, velocity: r }).start(() => {
                                        e === z.collapse && u(), t();
                                    });
                                });
                            },
                        [m, c, s, d, u],
                    ),
                    g = (0, o.b9)(B);
                return (
                    r.useEffect(() => {
                        g({ fn: f });
                    }, [g, f]),
                    { animatedPan: s, shellHeights: i, springTo: f }
                );
            }
            function Q(e) {
                const t = A(h.default.theme),
                    n = e.animation.shellHeights.full - (e.isSideNavLayout ? t.shadowOffset : 0);
                return r.createElement(L.Z.View, { style: [ee.expandedShell, ...(e.isSideNavLayout ? [ee.expandedShellSideNav] : []), { height: n, transform: [{ translate3d: "0, 0, 0" }, { translateY: e.animation.animatedPan }] }] }, r.createElement(X, e));
            }
            function X(e) {
                return (
                    r.useEffect(
                        () => (
                            e.isSideNavLayout || T.Z.disable(),
                            function () {
                                T.Z.enable();
                            }
                        ),
                        [e.isSideNavLayout],
                    ),
                    r.createElement(d.Z, { id: "DockExpanded" }, (t, n) => r.createElement(c.Z, (0, a.Z)({ ref: t() }, n({ style: ee.expandedShellContent })), r.createElement(J, e), r.createElement(g.Z, { style: ee.container }, r.createElement(L.Z.View, { id: "DockContentWrapper", style: { paddingBottom: L.Z.add(0, e.animation.animatedPan) } }, e.children))))
                );
            }
            const ee = h.default.create((e) => ({ expandedShell: { boxShadow: e.boxShadows.xSmall, width: "100%", height: "100%", borderTopStartRadius: "inherit", borderTopEndRadius: "inherit" }, expandedShellSideNav: { borderRadius: "inherit" }, expandedShellContent: { borderRadius: "inherit", height: "100%", backgroundColor: e.colors.navigationBackground, overflow: "hidden" }, container: { flex: 1, scrollbarWidth: "none", overflow: "scroll", padding: e.spaces.space8 } }));
            function te(e) {
                const t = e.isSideNavLayout ? s.Z.WideExpandedSpaceDock : s.Z.NarrowExpandedSpaceDock;
                return r.createElement(t, null, r.createElement(ne, e));
            }
            function ne(e) {
                const t = A(h.default.theme),
                    n = e.width + t.shadowOffset,
                    o = e.isSideNavLayout ? [oe.root, { width: n }] : null,
                    [l, i] = r.useState(),
                    s = r.useRef(null),
                    d = (0, H.iv)();
                return (
                    r.useLayoutEffect(
                        function () {
                            const e = s.current?.getBoundingClientRect();
                            e && i(e);
                        },
                        [d.height],
                    ),
                    r.createElement(c.Z, { ref: s, style: o }, r.createElement(ae, (0, a.Z)({}, e, { layout: l })))
                );
            }
            function ae(e) {
                const { layout: t, ...n } = e,
                    [a, o] = r.useState(!1),
                    l = M(),
                    i = Y(
                        n,
                        () => {
                            o(!0), l(z.full);
                        },
                        t,
                    ),
                    s = r.useMemo(() => new L.Z.Value(i.shellHeights.full), [i.shellHeights.full]),
                    d = { ...e, mounted: a, animation: i },
                    u = r.useRef(s);
                (u.current = s),
                    r.useEffect(() => {
                        const e = u.current;
                        if (!e) return;
                        const t = i.shellHeights.full;
                        L.Z.spring(e, { toValue: t, useNativeDriver: !1 }).start();
                    }, [i?.shellHeights?.full]);
                const h = r.useRef({ animatedHeight: s, animation: i, contentProps: d });
                return (
                    (h.current.animatedHeight = s),
                    (h.current.animation = i),
                    (h.current.contentProps = d),
                    r.useMemo(() => {
                        e.children, e.layout;
                        const { animatedHeight: t, animation: n, contentProps: a } = h.current;
                        let o;
                        o = e.isSideNavLayout ? oe.container : re.container;
                        const l = e.isSideNavLayout ? oe.expandedShellContainer : re.expandedShellContainer,
                            i = { height: t, opacity: n.animatedPan.interpolate({ inputRange: [n.shellHeights.collapse, n.shellHeights.full], outputRange: [1, 0] }) };
                        return r.createElement(L.Z.View, { style: [o, re.forceGPULayer, i] }, r.createElement(c.Z, { style: l }, r.createElement(Q, a)));
                    }, [e.isSideNavLayout, e.layout, e.children, a])
                );
            }
            const re = h.default.create((e) => {
                    const t = A(e).borderRadius;
                    return { forceGPULayer: { transform: [{ translate3d: "0, 0, 0" }] }, fullHeight: { height: "100%" }, container: { position: "fixed", bottom: 0, width: "100%", backgroundColor: e.colors.maskColor }, expandedShellContainer: { width: "100%", borderRadius: t } };
                }),
                oe = h.default.create((e) => {
                    const t = A(e);
                    return { root: { alignItems: "center", alignSelf: "flex-end", width: "100%", marginVertical: t.marginVertical, marginEnd: e.spacesPx.space20 }, container: { width: "100%" }, expandedShellContainer: { width: "100%", borderRadius: t.borderRadius, overflow: "hidden", padding: t.shadowOffset / 2, marginStart: t.shadowOffset / 2 } };
                });
            function le(e) {
                const [t, n] = r.useState(!0),
                    [c, s] = (0, o.KO)(l.P),
                    d = () => n((e) => !e),
                    u = () => {
                        s(null), n(!0);
                    };
                if (null === c) return null;
                const [h, m] = c;
                return r.createElement(r.Fragment, null, t ? r.createElement(S, (0, a.Z)({}, e, { onRequestClose: u, onToggleCollapsed: d }), r.createElement(i.J, { path: h })) : r.createElement(te, (0, a.Z)({}, e, { onRequestClose: u, onToggleCollapsed: d }), r.createElement(i.J, { path: m })));
            }
            const ie = r.memo(le);
        },
        215337: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(325686);
            class o extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, n) => {
                                    const a = t[n];
                                    let r = "";
                                    return a && (r = ` ${100 * a}%`), e + r;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: n, style: o } = this.props;
                    return a.createElement(r.Z, { style: [o, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, n);
                }
            }
            o.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const l = o;
        },
        58399: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(717683),
                i = n(347101);
            const c = (e = {}) => {
                const t = a.useContext(l.Z),
                    { direction: n } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style, t && i.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: n });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        246492: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        264171: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        262009: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        465233: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(716406);
            function r(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(r) : (0, a.Z)(e, (e) => r(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Dock.87f7665a.js.map
