"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BadgeViolationsNotification", "icons/IconErrorCircleFillWhite-js"],
    {
        625661: (t, e, o) => {
            o.d(e, { ZP: () => p });
            var i = o(202784),
                r = o(614983),
                n = o.n(r),
                a = o(325686),
                l = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function h(t, e, o) {
                return t || (!e && o ? "fixed" : void 0);
            }
            class p extends i.Component {
                constructor(...t) {
                    super(...t),
                        (this._handleBackClick = () => {
                            const { history: t, onBackClick: e } = this.props;
                            n()(e || t, "Either onBackClick must be specified, or history should be supplied"), e ? e(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: t, history: e } = this.props;
                            e && e.goBack({ backLocation: t });
                        });
                }
                _renderContent() {
                    const { backButtonType: t, centerTitle: e, centeredLogo: o, fixed: r, hideBackButton: n, isFullWidth: a, isLarge: c, leftControl: d, middleControl: p, position: u, rightControl: m, secondaryBar: g, style: B, subtitle: b, title: y, titleDomId: f, titleIconCell: C, titleIconCellSize: k, withBackground: x, withWideContainer: _ } = this.props,
                        { isModal: E } = this.context,
                        Z = n ? d : i.createElement(l.Z, { backButtonType: t, onClick: this._handleBackClick }),
                        w = (function (t, e, o) {
                            return t && !(e && o);
                        })(!!x, E, !!g);
                    return i.createElement(i.Fragment, null, i.createElement(s.Z, { centerTitle: e, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: Z, middleControl: p, position: h(u, E, r), rightControl: m, style: B, subtitle: b, title: y, titleDomId: f, titleIconCell: C, titleIconCellSize: k, withBackground: w, withWideContainer: _ }), g || null);
                }
                render() {
                    const { secondaryBar: t } = this.props,
                        { isModal: e } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return e ? i.createElement(a.Z, { style: !!t && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (t, e, o) => {
            o.d(e, { Z: () => g, w: () => u });
            var i = o(202784),
                r = o(325686),
                n = o(108362),
                a = o(386802),
                l = o(392237),
                s = o(652904),
                c = o(555079),
                d = o(625661),
                h = o(449067),
                p = o(715601);
            class u extends i.Component {
                constructor(...t) {
                    super(...t),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: t, appBarStyle: e, backButtonType: o, backLocation: n, centerTitle: a, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: g, rightControl: B, secondaryBar: b, subtitle: y, title: f } = this.props,
                                { isModal: C } = this.context;
                            return i.createElement(r.Z, { style: C ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, i.createElement(d.ZP, { backButtonType: o || (C ? "close" : "back"), backLocation: n, centerTitle: a, fixed: !C, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: g, ref: t, rightControl: B, secondaryBar: b, style: [C && m.appBarModal, e], subtitle: y, title: f, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (t) => {
                            const { onLayout: e } = this.props,
                                { isModal: o } = this.context;
                            e && (o ? window.requestAnimationFrame(() => e(t)) : e(t));
                        });
                }
                render() {
                    const { "aria-hidden": t, bottomBar: e, children: o, containerStyle: a, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: u, title: g, withoutBottomBarMobile: B } = this.props,
                        { isModal: b } = this.context,
                        y = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return i.createElement(s.Z, null, i.createElement(h.Z.Configure, { documentTitle: l, headerless: !0, title: g }), i.createElement(r.Z, { "aria-hidden": t, onLayout: this._handleLayout, style: [m.root, b && m.rootModal] }, !b && y, i.createElement(n.Z, { isFullWidth: c, isLarge: d, style: [m.container, b && m.containerModal, a] }, b ? i.createElement(p.Z, { style: m.viewport }, y, o) : o), e ? i.createElement(r.Z, { style: [m.bottomBarModal, !b && !B && m.bottomBarMobile] }, i.createElement(n.Z, { isFullWidth: c, isLarge: d }, e)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = a.Z);
            const m = l.default.create((t) => ({ root: { backgroundColor: t.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: t.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: t.borderRadii.small, borderTopEndRadius: t.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: t.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: t.borderRadii.xLarge, borderBottomEndRadius: t.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: t.colors.borderColor, borderTopWidth: t.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: t.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = u;
        },
        652904: (t, e, o) => {
            o.d(e, { Z: () => d });
            var i = o(202784),
                r = o(500002),
                n = o(668214),
                a = o(997174),
                l = o(118823);
            const s = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class c extends i.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(t) {
                    const {
                            history: { location: e },
                            location: { pathname: o, search: i },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: n, search: a },
                            locationKey: l,
                        } = t;
                    let s = !1;
                    e.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && e.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = r || l;
                    ((c && r !== l) || (!c && o !== n) || i !== a || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(t) {
                    const { analytics: e, updateLocation: o, updateTweetDetailNav: i } = t;
                    e.scribePageImpression(), o(e.contextualScribeNamespace, e.contextualScribeData), i(e.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(s(c));
        },
        244071: (t, e, o) => {
            o.r(e), o.d(e, { BadgeViolations: () => E, default: () => w });
            var i = o(202784),
                r = o(325686),
                n = o(731708),
                a = o(946847),
                l = o(879113),
                s = o(392237),
                c = o(111677),
                d = o.n(c),
                h = o(849353),
                p = o(350506),
                u = o(980407),
                m = o(686689),
                g = o(316325),
                B = o(312771),
                b = o(71620),
                y = o(668214),
                f = o(946194);
            const C = (0, y.Z)()
                    .propsFromState(() => ({ badgeViolations: f.XC, fetchStatus: f.Sb }))
                    .adjustStateProps(({ badgeViolations: t, fetchStatus: e }) => ({ badgeViolations: t, fetchStatus: e === B.ZP.NONE ? B.ZP.LOADING : e }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("ACCOUNT_VERIFICATION_NOTIFICATION_SCREEN"), fetchBadgeViolations: f.pD }))
                    .withAnalytics(),
                k = "/notifications",
                x = d().fc2a5c92,
                _ = (t) => null;
            class E extends i.Component {
                constructor(...t) {
                    super(...t),
                        (this._renderViolation = (t, e) => {
                            const {
                                    violation_category: o,
                                    violation_desc: { entities: a, text: l },
                                    violation_status: s,
                                    violation_title: c,
                                } = t,
                                d = s === g.Tq.IN_COMPLIANCE ? i.createElement(h.default, { style: [Z.icon, Z.green] }) : i.createElement(p.default, { style: [Z.icon, Z.red] });
                            return i.createElement(r.Z, { key: o, style: [Z.listItem, e && Z.withBottomBorder] }, d, i.createElement(r.Z, { style: Z.itemContent }, i.createElement(n.ZP, { style: Z.itemTitle }, c), i.createElement(m.Z, { color: "gray700", entities: a, size: "subtext2", text: l })));
                        }),
                        (this._render = () => {
                            const { badgeViolations: t, history: e } = this.props,
                                {
                                    button_text: o,
                                    violation_modal_desc: { entities: r, text: n },
                                    violation_modal_title: l,
                                    violations: s,
                                } = t,
                                c = () => e.goBack({ backLocation: k }),
                                d = i.createElement(m.Z, { entities: r, text: n }),
                                h =
                                    s && s.length
                                        ? i.createElement(
                                              i.Fragment,
                                              null,
                                              s.map((t, e, o) => this._renderViolation(t, e !== o.length - 1)),
                                          )
                                        : null;
                            return i.createElement(a.Z, { actionLabel: o, children: h, contentStyle: Z.contentContainer, headline: l, onAction: c, onClose: c, subtext: d });
                        }),
                        (this._handleRequestRetry = () => {
                            const { createLocalApiErrorHandler: t, fetchBadgeViolations: e } = this.props;
                            e().catch(t());
                        });
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: t, fetchBadgeViolations: e } = this.props;
                    e().catch(t());
                }
                render() {
                    const { fetchStatus: t, history: e } = this.props,
                        o = t === B.ZP.LOADED;
                    return i.createElement(u.Z, { backLocation: k, containerStyle: !o && Z.loading, history: e, renderHeader: o ? _ : void 0 }, i.createElement(l.Z, { fetchStatus: t, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: x, retryable: !0 }));
                }
            }
            const Z = s.default.create((t) => ({ contentContainer: { marginVertical: t.spaces.space16, justifyContent: "center" }, listItem: { flexDirection: "row", paddingVertical: t.spaces.space20, width: "100%" }, withBottomBorder: { borderBottomWidth: t.borderWidths.small, borderBottomColor: t.colors.borderColor, borderBottomStyle: "solid" }, icon: { flexShrink: 0, fontSize: t.fontSizes.headline1, marginEnd: t.spaces.space12 }, itemContent: { flexShrink: 1, flexGrow: 1 }, itemTitle: { marginBottom: t.spaces.space2 }, loading: { paddingBottom: t.spaces.space48 }, green: { color: t.colors.green500 }, red: { color: t.colors.magenta500 } })),
                w = C(E);
        },
        350506: (t, e, o) => {
            o.r(e), o.d(e, { default: () => s });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                a = o(347101);
            const l = (t = {}) => {
                const { direction: e } = (0, n.Z)();
                return (0, r.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [a.Z.root, t.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 1.75C6.339 1.75 1.75 6.339 1.75 12S6.339 22.25 12 22.25 22.25 17.661 22.25 12 17.661 1.751 12 1.75z" }), i.createElement("path", { d: "M13.25 7L13 12.7c-.32-.121-.658-.189-1-.2-.342.011-.68.079-1 .2L10.75 7h2.5zM12 17c-.828 0-1.5-.672-1.5-1.5S11.172 14 12 14s1.5.672 1.5 1.5S12.828 17 12 17z", fill: "#fff" })) }, { writingDirection: e });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BadgeViolationsNotification.69a5024a.js.map
