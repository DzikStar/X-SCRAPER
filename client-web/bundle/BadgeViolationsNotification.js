"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BadgeViolationsNotification"],
    {
        625661: (t, e, o) => {
            o.d(e, { ZP: () => h });
            var i = o(202784),
                r = o(614983),
                n = o.n(r),
                a = o(325686),
                l = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function p(t, e, o) {
                return t || (!e && o ? "fixed" : void 0);
            }
            class h extends i.Component {
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
                    const { backButtonType: t, centerTitle: e, centeredLogo: o, fixed: r, hideBackButton: n, isFullWidth: a, isLarge: c, leftControl: d, middleControl: h, position: u, rightControl: m, secondaryBar: B, style: b, subtitle: g, title: y, titleDomId: k, titleIconCell: f, titleIconCellSize: C, withBackground: x, withWideContainer: _ } = this.props,
                        { isModal: E } = this.context,
                        Z = n ? d : i.createElement(l.Z, { backButtonType: t, onClick: this._handleBackClick }),
                        w = (function (t, e, o) {
                            return t && !(e && o);
                        })(!!x, E, !!B);
                    return i.createElement(i.Fragment, null, i.createElement(s.Z, { centerTitle: e, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: Z, middleControl: h, position: p(u, E, r), rightControl: m, style: b, subtitle: g, title: y, titleDomId: k, titleIconCell: f, titleIconCellSize: C, withBackground: w, withWideContainer: _ }), B || null);
                }
                render() {
                    const { secondaryBar: t } = this.props,
                        { isModal: e } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return e ? i.createElement(a.Z, { style: !!t && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (t, e, o) => {
            o.d(e, { Z: () => B, w: () => u });
            var i = o(202784),
                r = o(325686),
                n = o(108362),
                a = o(386802),
                l = o(392237),
                s = o(652904),
                c = o(555079),
                d = o(625661),
                p = o(449067),
                h = o(715601);
            class u extends i.Component {
                constructor(...t) {
                    super(...t),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: t, appBarStyle: e, backButtonType: o, backLocation: n, centerTitle: a, hideBackButton: l, history: s, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: B, rightControl: b, secondaryBar: g, subtitle: y, title: k } = this.props,
                                { isModal: f } = this.context;
                            return i.createElement(r.Z, { style: f ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, i.createElement(d.ZP, { backButtonType: o || (f ? "close" : "back"), backLocation: n, centerTitle: a, fixed: !f, hideBackButton: l, history: s, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: B, ref: t, rightControl: b, secondaryBar: g, style: [f && m.appBarModal, e], subtitle: y, title: k, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (t) => {
                            const { onLayout: e } = this.props,
                                { isModal: o } = this.context;
                            e && (o ? window.requestAnimationFrame(() => e(t)) : e(t));
                        });
                }
                render() {
                    const { "aria-hidden": t, bottomBar: e, children: o, containerStyle: a, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: u, title: B, withoutBottomBarMobile: b } = this.props,
                        { isModal: g } = this.context,
                        y = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return i.createElement(s.Z, null, i.createElement(p.Z.Configure, { documentTitle: l, headerless: !0, title: B }), i.createElement(r.Z, { "aria-hidden": t, onLayout: this._handleLayout, style: [m.root, g && m.rootModal] }, !g && y, i.createElement(n.Z, { isFullWidth: c, isLarge: d, style: [m.container, g && m.containerModal, a] }, g ? i.createElement(h.Z, { style: m.viewport }, y, o) : o), e ? i.createElement(r.Z, { style: [m.bottomBarModal, !g && !b && m.bottomBarMobile] }, i.createElement(n.Z, { isFullWidth: c, isLarge: d }, e)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = a.Z);
            const m = l.default.create((t) => ({ root: { backgroundColor: t.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: t.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: t.borderRadii.small, borderTopEndRadius: t.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: t.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: t.borderRadii.xLarge, borderBottomEndRadius: t.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: t.colors.borderColor, borderTopWidth: t.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: t.colors.navigationBackground, borderTopStyle: "solid" } })),
                B = u;
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
                p = o(849353),
                h = o(350506),
                u = o(980407),
                m = o(686689),
                B = o(316325),
                b = o(312771),
                g = o(71620),
                y = o(668214),
                k = o(946194);
            const f = (0, y.Z)()
                    .propsFromState(() => ({ badgeViolations: k.XC, fetchStatus: k.Sb }))
                    .adjustStateProps(({ badgeViolations: t, fetchStatus: e }) => ({ badgeViolations: t, fetchStatus: e === b.ZP.NONE ? b.ZP.LOADING : e }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("ACCOUNT_VERIFICATION_NOTIFICATION_SCREEN"), fetchBadgeViolations: k.pD }))
                    .withAnalytics(),
                C = "/notifications",
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
                                d = s === B.Tq.IN_COMPLIANCE ? i.createElement(p.default, { style: [Z.icon, Z.green] }) : i.createElement(h.default, { style: [Z.icon, Z.red] });
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
                                c = () => e.goBack({ backLocation: C }),
                                d = i.createElement(m.Z, { entities: r, text: n }),
                                p =
                                    s && s.length
                                        ? i.createElement(
                                              i.Fragment,
                                              null,
                                              s.map((t, e, o) => this._renderViolation(t, e !== o.length - 1)),
                                          )
                                        : null;
                            return i.createElement(a.Z, { actionLabel: o, children: p, contentStyle: Z.contentContainer, headline: l, onAction: c, onClose: c, subtext: d });
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
                        o = t === b.ZP.LOADED;
                    return i.createElement(u.Z, { backLocation: C, containerStyle: !o && Z.loading, history: e, renderHeader: o ? _ : void 0 }, i.createElement(l.Z, { fetchStatus: t, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: x, retryable: !0 }));
                }
            }
            const Z = s.default.create((t) => ({ contentContainer: { marginVertical: t.spaces.space16, justifyContent: "center" }, listItem: { flexDirection: "row", paddingVertical: t.spaces.space20, width: "100%" }, withBottomBorder: { borderBottomWidth: t.borderWidths.small, borderBottomColor: t.colors.borderColor, borderBottomStyle: "solid" }, icon: { flexShrink: 0, fontSize: t.fontSizes.headline1, marginEnd: t.spaces.space12 }, itemContent: { flexShrink: 1, flexGrow: 1 }, itemTitle: { marginBottom: t.spaces.space2 }, loading: { paddingBottom: t.spaces.space48 }, green: { color: t.colors.green500 }, red: { color: t.colors.magenta500 } })),
                w = f(E);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BadgeViolationsNotification.36ff814a.js.map
