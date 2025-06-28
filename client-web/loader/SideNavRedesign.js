"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.SideNavRedesign"],
    {
        907795: (e, t, n) => {
            n.r(t), n.d(t, { default: () => _ });
            var a = n(202784),
                o = n(325686),
                r = n(107267),
                i = n(525271),
                s = n(154003),
                l = n(392237),
                d = n(111677),
                c = n.n(d),
                p = n(134997),
                h = n(763881),
                m = n(105131),
                u = n(464097),
                g = n(952793),
                f = n(485785),
                E = n(125363),
                b = n(936572),
                w = n(439332),
                x = n(866481);
            const y = c().g6d42fea;
            function k(e) {
                const { AdditionalFooterContent: t, SideNavButton: n, TabBar: l, history: d, isDrawerEnabled: c, isExpanded: k, isLoggedIn: _, isTwoColumn: B, logoButton: Z, onTabRefresh: v, widthStyle: T, withTweetButton: D = !0 } = e,
                    S = (0, E.I0)(),
                    [I, M] = a.useState(!1),
                    L = () => {
                        var e;
                        c && M((e) => !e), c || ((e = !k), S((0, b.w4)({ isSideNavExpanded: { v1: e } })));
                    },
                    R = (0, r.useLocation)();
                a.useEffect(() => {
                    M(!1);
                }, [R]);
                const N = (0, g.hC)("rweb_sourcemap_migration_updated_account_switcher"),
                    A = f.Z.getSideNavWidthExpandedStyleRedesign(),
                    P = [C.root, T],
                    W = c && I;
                return a.createElement(a.Fragment, null, F({ isExpanded: k, style: k && C.rootExpanded }), W && a.createElement(i.Z, { onDismissed: L, style: A, withTopBar: !1 }, F({ isExpanded: !0, style: [C.noBorder, A] })));
                function F({ isExpanded: r, style: i }) {
                    return a.createElement(
                        o.Z,
                        { style: [P, i] },
                        a.createElement(o.Z, { style: [C.top, r && C.topExpanded] }, a.createElement(o.Z, { style: [C.logoArea, r && C.logoAreaExpanded] }, a.createElement(o.Z, null, Z || a.createElement(w.Z, { iconStyle: C.xIcon, onClick: v, pullLeft: r, size: "large" }))), a.createElement(s.ZP, { "aria-label": y, color: "gray700", hoverLabel: { label: y }, icon: a.createElement(p.default, { style: C.toggleIcon }), onPress: L, pullLeft: !r, pullRight: r, type: "primaryText" })),
                        a.createElement(o.Z, { style: [C.appTabBar, r && C.appTabBarExpanded] }, a.createElement(l, { history: d, layout: "vertical", onTabRefresh: v, wideMode: B, withLabel: r })),
                        _ &&
                            a.createElement(
                                o.Z,
                                { style: [C.footer, r && C.footerExpanded] },
                                _ && (n || D)
                                    ? (function () {
                                          const { SideNavButton: t, composeOptions: n, isExpanded: r } = e;
                                          return a.createElement(o.Z, null, t ? a.createElement(t, { isExpanded: r }) : a.createElement(u.Z, { composeOptions: n, isExpanded: r, testID: x.Z.tweet }));
                                      })()
                                    : null,
                                t && a.createElement(t, null),
                                a.createElement(m.ux, null, a.createElement(h.Z, { isExpanded: r, withUpdatedAccountSwitcher: N })),
                            ),
                    );
                }
            }
            const _ = a.memo(k),
                C = l.default.create((e) => ({ root: { height: "100%", overflowY: "auto", justifyContent: "space-between", alignItems: "flex-start", rowGap: e.spaces.space12, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space32, flexGrow: 1, overflowX: "visible" }, noBorder: { borderEndWidth: 0 }, rootExpanded: { borderEndStyle: "solid", borderEndWidth: e.borderWidths.small, borderEndColor: e.colors.borderColor }, top: { flexDirection: "row", alignItems: "center", width: "100%" }, topExpanded: { paddingHorizontal: e.spaces.space24 }, logoArea: { alignItems: "center", width: 84 }, logoAreaExpanded: { flexGrow: 1, alignItems: "flex-start" }, appTabBar: { alignItems: "center", width: 84 }, appTabBarExpanded: { width: "100%", marginEnd: 0, alignItems: "stretch", paddingHorizontal: e.spaces.space12 }, footer: { rowGap: e.spaces.space4, width: 84, alignItems: "center" }, footerExpanded: { width: "100%", alignItems: "stretch", paddingHorizontal: e.spaces.space24 }, xIcon: { width: e.spaces.space36, height: e.spaces.space36 }, toggleIcon: { color: e.colors.gray700 } }));
        },
        525271: (e, t, n) => {
            n.d(t, { Z: () => k });
            var a = n(202784),
                o = n(325686),
                r = n(111677),
                i = n.n(r),
                s = n(837020),
                l = n(461756),
                d = n(786998),
                c = n(154003),
                p = n(950822),
                h = n(743618),
                m = n(745153),
                u = n(292627),
                g = n(224162),
                f = n(392237);
            const E = i().af8fa2ae,
                b = a.createElement(s.default, null);
            class w extends a.Component {
                constructor(e) {
                    super(),
                        (this._isMounted = !0),
                        (this._setAnimationNode = (e) => {
                            this._animationNode = e;
                        }),
                        (this._handleTransitionEnd = (e) => {
                            !1 === this.state.isVisible && e.target instanceof window.HTMLElement && e.target === this._animationNode && this.props.onDismissed();
                        }),
                        (this._handleMaskClick = () => {
                            this._handleDismiss();
                        }),
                        (this._handleEsc = (e) => {
                            const { altKey: t, ctrlKey: n, key: a, metaKey: o } = e;
                            !(t || n || o) && "Escape" === a && this._handleDismiss();
                        }),
                        (this._handleDismiss = () => {
                            this.setState({ isVisible: !1 }), l.Z.reducedMotionEnabled && this.props.onDismissed();
                        }),
                        (this.state = { isVisible: !1 });
                }
                componentDidMount() {
                    window.requestAnimationFrame(() => {
                        this._isMounted && this.setState({ isVisible: !0 });
                    });
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                render() {
                    const { additionalControl: e, align: t, buttonType: n, children: r, style: i, subtitle: s, title: c, topBarStyle: f, withBackgroundBlur: E, withTopBar: b, withTransparentMask: w } = this.props,
                        { isVisible: k } = this.state;
                    return a.createElement(g.ZP.Consumer, null, ({ direction: g }) => {
                        const _ = "rtl" === g,
                            C = k ? y.visibleDrawer : ("left" === t) === _ ? y.offscreenRightDrawer : y.offscreenLeftDrawer,
                            B = k && !w ? y.maskWithBg : y.maskTransparent,
                            Z = k ? y.animateOpen : y.animateClose,
                            v = l.Z.reducedMotionEnabled ? null : Z;
                        return a.createElement(u.Z.Modal, null, a.createElement(m.Z, null, a.createElement(h.Z, null, a.createElement(o.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [y.mask, B, v, E ? y.backgroundBlur : null, "left" === t ? y.alignLeft : y.alignRight] }, (0, p.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: x, style: [y.root, E ? y.backgroundRootBlur : null, C, v, i], children: a.createElement(a.Fragment, null, b ? a.createElement(d.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(n) : null, rightControl: "left" === t ? this._renderCloseButton(n) : "right" === t ? e : null, style: f, subtitle: s, title: c }) : null, a.createElement(o.Z, { style: y.contentContainer }, r)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return a.createElement(c.ZP, { "aria-label": E, icon: b, onPress: this._handleMaskClick, type: e });
                }
            }
            w.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const x = (e) => {
                    e.stopPropagation();
                },
                y = f.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...f.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                k = w;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.SideNavRedesign.b0627a7a.js.map
