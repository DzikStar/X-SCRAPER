"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BadgeViolationsNotification", "icons/IconErrorCircleFillWhite-js"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var i = o(202784),
                r = o(614983),
                n = o.n(r),
                a = o(325686),
                l = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function h(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class p extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            n()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: n, isFullWidth: a, isLarge: c, leftControl: d, middleControl: p, position: u, rightControl: m, secondaryBar: g, style: b, subtitle: B, title: y, titleDomId: f, titleIconCell: C, titleIconCellSize: k, withBackground: x, withWideContainer: E } = this.props,
                        { isModal: Z } = this.context,
                        w = n ? d : i.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        _ = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!x, Z, !!g);
                    return i.createElement(i.Fragment, null, i.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: w, middleControl: p, position: h(u, Z, r), rightControl: m, style: b, subtitle: B, title: y, titleDomId: f, titleIconCell: C, titleIconCellSize: k, withBackground: _, withWideContainer: E }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? i.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => u });
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
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: n, centerTitle: a, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: g, rightControl: b, secondaryBar: B, subtitle: y, title: f } = this.props,
                                { isModal: C } = this.context;
                            return i.createElement(r.Z, { style: C ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, i.createElement(d.ZP, { backButtonType: o || (C ? "close" : "back"), backLocation: n, centerTitle: a, fixed: !C, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: g, ref: e, rightControl: b, secondaryBar: B, style: [C && m.appBarModal, t], subtitle: y, title: f, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: a, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: u, title: g, withoutBottomBarMobile: b } = this.props,
                        { isModal: B } = this.context,
                        y = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return i.createElement(s.Z, null, i.createElement(h.Z.Configure, { documentTitle: l, headerless: !0, title: g }), i.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, B && m.rootModal] }, !B && y, i.createElement(n.Z, { isFullWidth: c, isLarge: d, style: [m.container, B && m.containerModal, a] }, B ? i.createElement(p.Z, { style: m.viewport }, y, o) : o), t ? i.createElement(r.Z, { style: [m.bottomBarModal, !B && !b && m.bottomBarMobile] }, i.createElement(n.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = a.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = u;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
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
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: i },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: n, search: a },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = r || l;
                    ((c && r !== l) || (!c && o !== n) || i !== a || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: i } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), i(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(s(c));
        },
        244071: (e, t, o) => {
            o.r(t), o.d(t, { BadgeViolations: () => Z, default: () => _ });
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
                b = o(312771),
                B = o(71620),
                y = o(668214),
                f = o(946194);
            const C = (0, y.Z)()
                    .propsFromState(() => ({ badgeViolations: f.XC, fetchStatus: f.Sb }))
                    .adjustStateProps(({ badgeViolations: e, fetchStatus: t }) => ({ badgeViolations: e, fetchStatus: t === b.ZP.NONE ? b.ZP.LOADING : t }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, B.zr)("ACCOUNT_VERIFICATION_NOTIFICATION_SCREEN"), fetchBadgeViolations: f.pD }))
                    .withAnalytics(),
                k = "/notifications",
                x = d().fc2a5c92,
                E = (e) => null;
            class Z extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderViolation = (e, t) => {
                            const {
                                    violation_category: o,
                                    violation_desc: { entities: a, text: l },
                                    violation_status: s,
                                    violation_title: c,
                                } = e,
                                d = s === g.Tq.IN_COMPLIANCE ? i.createElement(h.default, { style: [w.icon, w.green] }) : i.createElement(p.default, { style: [w.icon, w.red] });
                            return i.createElement(r.Z, { key: o, style: [w.listItem, t && w.withBottomBorder] }, d, i.createElement(r.Z, { style: w.itemContent }, i.createElement(n.ZP, { style: w.itemTitle }, c), i.createElement(m.Z, { color: "gray700", entities: a, size: "subtext2", text: l })));
                        }),
                        (this._render = () => {
                            const { badgeViolations: e, history: t } = this.props,
                                {
                                    button_text: o,
                                    violation_modal_desc: { entities: r, text: n },
                                    violation_modal_title: l,
                                    violations: s,
                                } = e,
                                c = () => t.goBack({ backLocation: k }),
                                d = i.createElement(m.Z, { entities: r, text: n }),
                                h =
                                    s && s.length
                                        ? i.createElement(
                                              i.Fragment,
                                              null,
                                              s.map((e, t, o) => this._renderViolation(e, t !== o.length - 1)),
                                          )
                                        : null;
                            return i.createElement(a.Z, { actionLabel: o, children: h, contentStyle: w.contentContainer, headline: l, onAction: c, onClose: c, subtext: d });
                        }),
                        (this._handleRequestRetry = () => {
                            const { createLocalApiErrorHandler: e, fetchBadgeViolations: t } = this.props;
                            t().catch(e());
                        });
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchBadgeViolations: t } = this.props;
                    t().catch(e());
                }
                render() {
                    const { fetchStatus: e, history: t } = this.props,
                        o = e === b.ZP.LOADED;
                    return i.createElement(u.Z, { backLocation: k, containerStyle: !o && w.loading, history: t, renderHeader: o ? E : void 0 }, i.createElement(l.Z, { fetchStatus: e, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: x, retryable: !0 }));
                }
            }
            const w = s.default.create((e) => ({ contentContainer: { marginVertical: e.spaces.space16, justifyContent: "center" }, listItem: { flexDirection: "row", paddingVertical: e.spaces.space20, width: "100%" }, withBottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, icon: { flexShrink: 0, fontSize: e.fontSizes.headline1, marginEnd: e.spaces.space12 }, itemContent: { flexShrink: 1, flexGrow: 1 }, itemTitle: { marginBottom: e.spaces.space2 }, loading: { paddingBottom: e.spaces.space48 }, green: { color: e.colors.green500 }, red: { color: e.colors.magenta500 } })),
                _ = C(Z);
        },
        350506: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                a = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 1.75C6.339 1.75 1.75 6.339 1.75 12S6.339 22.25 12 22.25 22.25 17.661 22.25 12 17.661 1.751 12 1.75z" }), i.createElement("path", { d: "M13.25 7L13 12.7c-.32-.121-.658-.189-1-.2-.342.011-.68.079-1 .2L10.75 7h2.5zM12 17c-.828 0-1.5-.672-1.5-1.5S11.172 14 12 14s1.5.672 1.5 1.5S12.828 17 12 17z", fill: "#fff" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                a = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BadgeViolationsNotification.c55b833a.js.map
