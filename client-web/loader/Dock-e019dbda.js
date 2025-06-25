"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Dock-e019dbda"],
    {
        816024: (e, t, n) => {
            n.r(t), n.d(t, { default: () => ie });
            var a = n(807896),
                r = n(202784),
                o = n(400752),
                l = n(83825),
                i = n(635322),
                s = n(325686),
                c = n(292627),
                u = n(365023),
                d = n(530732),
                f = n(392237),
                m = n(111677),
                h = n.n(m),
                p = n(715601),
                g = n(215337),
                E = n(154003),
                y = n(837020),
                w = n(384153);
            function b(e) {
                return w.Z.selectiveClickHandler((t) => {
                    "function" == typeof e && e();
                });
            }
            function S(e) {
                const t = b(e.onRequestClose);
                return r.createElement(s.Z, { style: x.container }, r.createElement(s.Z, { style: x.gradientBar }, r.createElement(g.Z, { angle: 80, colors: [f.default.theme.colors.blue500, f.default.theme.colors.blue700], style: x.gradient })), r.createElement(s.Z, { style: x.content }, r.createElement(s.Z, { style: x.text }, e.children), r.createElement(E.ZP, { "aria-label": v.close, borderColor: "transparent", color: "text", icon: r.createElement(y.default, null), onPress: t, size: "medium", testID: "close" })));
            }
            const v = { close: h().ia5e7488 },
                x = f.default.create((e) => ({ container: { borderRadius: "inherit", overflow: "hidden" }, gradientBar: { position: "absolute", height: "50%", width: "100%" }, gradient: { height: "100%" }, content: { borderRadius: "inherit", marginTop: 3, backgroundColor: e.colors.navigationBackground, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space4, flexDirection: "row", justifyContent: "center", alignItems: "center" }, text: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4, flexDirection: "column", flex: 1 } }));
            function Z(e) {
                const { isSideNavLayout: t, width: n } = e,
                    o = t ? c.Z.DesktopVoiceTweetDock : c.Z.MobileVoiceTweetDock,
                    l = t ? [P.root, { maxWidth: n }] : null;
                return r.createElement(
                    o,
                    null,
                    r.createElement(u.Z, { id: "Dock" }, (t, n) => r.createElement(s.Z, (0, a.Z)({ ref: t() }, n({ style: l })), r.createElement(p.Z, null, r.createElement(C, e)))),
                );
            }
            function C(e) {
                const t = r.useRef(null),
                    n = e.isSideNavLayout && P.borderRadius;
                return r.createElement(
                    d.Z,
                    {
                        "aria-label": R.dock,
                        onPress: b(e.onToggleCollapsed),
                        ref: function (e) {
                            t.current = e;
                        },
                        style: [k.container, n],
                    },
                    r.createElement(s.Z, { style: [k.innerContainer, n] }, r.createElement(S, e)),
                );
            }
            const R = { dock: h().ddd5cfe2 },
                k = f.default.create((e) => ({ container: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall }, innerContainer: { backgroundColor: e.colors.navigationBackground } })),
                P = f.default.create((e) => ({ root: { alignSelf: "flex-end", marginEnd: e.spaces.space20, marginBottom: e.spaces.space20, width: "100%" }, borderRadius: { borderRadius: e.borderRadii.xLarge } }));
            var H = n(744610),
                D = n(537392),
                N = n(565058);
            const L = Object.freeze({ collapse: "collapse", exit: "exit", full: "full" }),
                V = { fn: () => Promise.resolve() },
                T = (0, N.cn)(V),
                B = (0, N.cn)(null);
            function M() {
                return (0, o.b9)(B);
            }
            var z = n(625944),
                A = n(187669),
                _ = n(731708),
                O = n(63274);
            const I = 0.85,
                q = 0.7635,
                j = 0.5,
                W = 812,
                G = 300;
            function J(e) {
                const t = e.borderRadiiPx.large,
                    n = e.spaces.space16,
                    a = e.spacesPx.space8;
                return { borderRadius: t, paddingHorizontal: n, marginVertical: e.spaces.space20, marginVerticalPx: e.spacesPx.space20, shadowOffset: a };
            }
            const U = { collapse: h().d227d19e, unfollow: h().c0f56044 },
                K = { collapse: { label: U.collapse }, unfollow: { label: U.unfollow } };
            function $(e) {
                return r.createElement(
                    s.Z,
                    { style: F.container },
                    r.createElement(E.ZP, {
                        "aria-label": U.collapse,
                        hoverLabel: K.collapse,
                        icon: r.createElement(O.default, { style: F.topBarButtonIcon }),
                        onPress: function () {
                            e.animation.springTo("collapse");
                        },
                        pullLeft: !0,
                        size: "medium",
                        type: "primaryText",
                    }),
                    r.createElement(s.Z, { style: F.expandedShellHeaderRight }, r.createElement(E.ZP, { onPress: e.onRequestClose, pullRight: !0, size: "medium", type: "destructiveText" }, r.createElement(_.ZP, { size: "body", weight: "bold" }, U.unfollow))),
                );
            }
            const F = f.default.create((e) => {
                const t = J(e).paddingHorizontal;
                return { container: { marginTop: e.spaces.space8, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: t }, expandedShellHeaderRight: { flexDirection: "row" }, topBarButtonIcon: { color: e.colors.text, width: e.spaces.space16 } };
            });
            function Q(e, t, n) {
                const a = r.useRef({ state: L.full, animatedPanOffset: 0 }),
                    l = (0, D.iv)(),
                    i = r.useMemo(
                        () =>
                            (function (e, t, n) {
                                let a = e;
                                if (t) {
                                    a = Math.min(W, e);
                                    const { height: t, top: r } = n || {},
                                        o = r + t;
                                    if (o - a < 0) {
                                        const e = o - J(f.default.theme).marginVerticalPx;
                                        e > G && (a = e);
                                    }
                                }
                                return { collapse: a * j, half: a * q, sheetMaxHeight: a * I, full: a };
                            })(l.height, e.isSideNavLayout, n),
                        [l.height, e.isSideNavLayout, n],
                    ),
                    s = r.useMemo(
                        () =>
                            function (e) {
                                let t;
                                switch (e) {
                                    case L.exit:
                                    case L.collapse:
                                        t = 0;
                                        break;
                                    case L.full:
                                    default:
                                        t = i.full;
                                }
                                return i.full - t;
                            },
                        [i],
                    ),
                    c = r.useRef(new H.Z.Value(i.full)).current;
                (0, A.q)(() => {
                    const e = s(a.current.state);
                    H.Z.spring(c, { toValue: e, useNativeDriver: !1 }).start(t);
                });
                const { onRequestClose: u, onToggleCollapsed: d } = e,
                    m = M(),
                    h = r.useMemo(
                        () =>
                            function (e, t) {
                                (a.current.state = e), m(e);
                                const n = s(a.current.state),
                                    r = t?.vy;
                                return new Promise((t) => {
                                    if (e === L.exit) return u(), t();
                                    H.Z.spring(c, { overshootClamping: !0, toValue: n, useNativeDriver: !1, velocity: r }).start(() => {
                                        e === L.collapse && d(), t();
                                    });
                                });
                            },
                        [m, s, c, u, d],
                    ),
                    p = (0, o.b9)(T);
                return (
                    r.useEffect(() => {
                        p({ fn: h });
                    }, [p, h]),
                    { animatedPan: c, shellHeights: i, springTo: h }
                );
            }
            function Y(e) {
                const t = J(f.default.theme),
                    n = e.animation.shellHeights.full - (e.isSideNavLayout ? t.shadowOffset : 0);
                return r.createElement(H.Z.View, { style: [ee.expandedShell, ...(e.isSideNavLayout ? [ee.expandedShellSideNav] : []), { height: n, transform: [{ translate3d: "0, 0, 0" }, { translateY: e.animation.animatedPan }] }] }, r.createElement(X, e));
            }
            function X(e) {
                return (
                    r.useEffect(
                        () => (
                            e.isSideNavLayout || z.Z.disable(),
                            function () {
                                z.Z.enable();
                            }
                        ),
                        [e.isSideNavLayout],
                    ),
                    r.createElement(u.Z, { id: "DockExpanded" }, (t, n) => r.createElement(s.Z, (0, a.Z)({ ref: t() }, n({ style: ee.expandedShellContent })), r.createElement($, e), r.createElement(p.Z, { style: ee.container }, r.createElement(H.Z.View, { id: "DockContentWrapper", style: { paddingBottom: H.Z.add(0, e.animation.animatedPan) } }, e.children))))
                );
            }
            const ee = f.default.create((e) => ({ expandedShell: { boxShadow: e.boxShadows.xSmall, width: "100%", height: "100%", borderTopStartRadius: "inherit", borderTopEndRadius: "inherit" }, expandedShellSideNav: { borderRadius: "inherit" }, expandedShellContent: { borderRadius: "inherit", height: "100%", backgroundColor: e.colors.navigationBackground, overflow: "hidden" }, container: { flex: 1, scrollbarWidth: "none", overflow: "scroll", padding: e.spaces.space8 } }));
            function te(e) {
                const t = e.isSideNavLayout ? c.Z.WideExpandedSpaceDock : c.Z.NarrowExpandedSpaceDock;
                return r.createElement(t, null, r.createElement(ne, e));
            }
            function ne(e) {
                const t = J(f.default.theme),
                    n = e.width + t.shadowOffset,
                    o = e.isSideNavLayout ? [oe.root, { width: n }] : null,
                    [l, i] = r.useState(),
                    c = r.useRef(null),
                    u = (0, D.iv)();
                return (
                    r.useLayoutEffect(
                        function () {
                            const e = c.current?.getBoundingClientRect();
                            e && i(e);
                        },
                        [u.height],
                    ),
                    r.createElement(s.Z, { ref: c, style: o }, r.createElement(ae, (0, a.Z)({}, e, { layout: l })))
                );
            }
            function ae(e) {
                const { layout: t, ...n } = e,
                    [a, o] = r.useState(!1),
                    l = M(),
                    i = Q(
                        n,
                        () => {
                            o(!0), l(L.full);
                        },
                        t,
                    ),
                    c = r.useMemo(() => new H.Z.Value(i.shellHeights.full), [i.shellHeights.full]),
                    u = { ...e, mounted: a, animation: i },
                    d = r.useRef(c);
                (d.current = c),
                    r.useEffect(() => {
                        const e = d.current;
                        if (!e) return;
                        const t = i.shellHeights.full;
                        H.Z.spring(e, { toValue: t, useNativeDriver: !1 }).start();
                    }, [i?.shellHeights?.full]);
                const f = r.useRef({ animatedHeight: c, animation: i, contentProps: u });
                return (
                    (f.current.animatedHeight = c),
                    (f.current.animation = i),
                    (f.current.contentProps = u),
                    r.useMemo(() => {
                        e.children, e.layout;
                        const { animatedHeight: t, animation: n, contentProps: a } = f.current;
                        let o;
                        o = e.isSideNavLayout ? oe.container : re.container;
                        const l = e.isSideNavLayout ? oe.expandedShellContainer : re.expandedShellContainer,
                            i = { height: t, opacity: n.animatedPan.interpolate({ inputRange: [n.shellHeights.collapse, n.shellHeights.full], outputRange: [1, 0] }) };
                        return r.createElement(H.Z.View, { style: [o, re.forceGPULayer, i] }, r.createElement(s.Z, { style: l }, r.createElement(Y, a)));
                    }, [e.isSideNavLayout, e.layout, e.children, a])
                );
            }
            const re = f.default.create((e) => {
                    const t = J(e).borderRadius;
                    return { forceGPULayer: { transform: [{ translate3d: "0, 0, 0" }] }, fullHeight: { height: "100%" }, container: { position: "fixed", bottom: 0, width: "100%", backgroundColor: e.colors.maskColor }, expandedShellContainer: { width: "100%", borderRadius: t } };
                }),
                oe = f.default.create((e) => {
                    const t = J(e);
                    return { root: { alignItems: "center", alignSelf: "flex-end", width: "100%", marginVertical: t.marginVertical, marginEnd: e.spacesPx.space20 }, container: { width: "100%" }, expandedShellContainer: { width: "100%", borderRadius: t.borderRadius, overflow: "hidden", padding: t.shadowOffset / 2, marginStart: t.shadowOffset / 2 } };
                });
            function le(e) {
                const [t, n] = r.useState(!0),
                    [s, c] = (0, o.KO)(l.P),
                    u = () => n((e) => !e),
                    d = () => {
                        c(null), n(!0);
                    };
                if (null === s) return null;
                const [f, m] = s;
                return r.createElement(r.Fragment, null, t ? r.createElement(Z, (0, a.Z)({}, e, { onRequestClose: d, onToggleCollapsed: u }), r.createElement(i.J, { path: f })) : r.createElement(te, (0, a.Z)({}, e, { onRequestClose: d, onToggleCollapsed: u }), r.createElement(i.J, { path: m })));
            }
            const ie = r.memo(le);
        },
        635322: (e, t, n) => {
            n.d(t, { J: () => p });
            var a = n(202784),
                r = n(244448),
                o = n(107267),
                l = n(682830),
                i = (n(631673), n(553160)),
                s = n(725102),
                c = n(634125),
                u = (n(571372), n(736230));
            const d = a.createContext({ setSystemActionHandler: () => {} }),
                f = ({ children: e, systemActionHandlers: t }) => {
                    const n = a.useRef(new Map());
                    a.useEffect(() => {
                        (t ? Array.from(t?.entries()) : []).forEach(([e, t]) => {
                            n.current.set(e, t);
                        });
                    }, [t]);
                    const r = a.useCallback((e, t) => {
                            n.current.set(e, t);
                        }, []),
                        o = a.useCallback((e) => {
                            const t = e,
                                { matchupId: a, pickedByGrok: r, teamName: o } = t,
                                l = n.current.get(1);
                            l && l?.(o, a, r);
                        }, []),
                        l = { setSystemActionHandler: r, [u.bP.MARCH_MADNESS_PICK]: o };
                    return a.createElement(d.Provider, { value: l }, e);
                };
            var m = n(39182);
            const h = "/i/jf";
            function p({ path: e, systemActionHandlers: t }) {
                const n = (0, o.useLocation)();
                return "undefined" == typeof window ? null : a.createElement(f, { systemActionHandlers: t }, a.createElement(a.Suspense, { fallback: a.createElement(l.J, null) }, a.createElement(g, { isHighlights: !1, path: e ?? n.pathname.slice(h.length) + n.search, renderEmptyState: () => null })));
            }
            const g = ({ isHighlights: e, path: t, renderEmptyState: n }) => {
                const o = (0, m.E)(),
                    l = (0, r.bk)();
                a.useEffect(() => {
                    if (l && l.Runtime) {
                        const e = { "x.com.GenericURT": i.Z, SignupArkoseSecurityChallenge: s.Z };
                        l.Runtime.addComponentOverride(e);
                    }
                }, [l]);
                const { Analytics: u } = l;
                return a.createElement(c.Z, null, a.createElement(r.mQ, { analytics: u, jfPath: t, key: `${t}-${o}` }));
            };
        },
        39182: (e, t, n) => {
            n.d(t, { E: () => l });
            n(571372);
            var a = n(202784),
                r = n(251067),
                o = n(355335);
            const l = () => {
                const e = a.useRef(null),
                    [t, n] = a.useState(Date.now()),
                    { isDev: l } = (0, o.Z)();
                return (
                    a.useEffect(() => {
                        if (!l || (0, r.fH)(r.vw.prod)) return;
                        const t = () => {
                            (e.current = new WebSocket("wss://localhost.x.com:3000/__dev")),
                                (e.current.onmessage = (e) => {
                                    if ("string" == typeof e.data) {
                                        const e = Date.now();
                                        n(e);
                                    }
                                }),
                                (e.current.onerror = (e) => {
                                    throw new Error(e.type);
                                }),
                                (e.current.onclose = () => {
                                    setTimeout(t, 3e3);
                                });
                        };
                        return (
                            t(),
                            () => {
                                e.current && e.current.close();
                            }
                        );
                    }, [l]),
                    t
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Dock-e019dbda.18e5034a.js.map
