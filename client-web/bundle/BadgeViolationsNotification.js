"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BadgeViolationsNotification"],
    {
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => u });
            var r = o(202784),
                i = o(325686),
                a = o(108362),
                n = o(386802),
                l = o(392237),
                s = o(652904),
                d = o(555079),
                c = o(625661),
                p = o(449067),
                h = o(715601);
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: n, hideBackButton: l, history: s, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: b, rightControl: B, secondaryBar: g, subtitle: f, title: y } = this.props,
                                { isModal: x } = this.context;
                            return r.createElement(i.Z, { style: x ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(c.ZP, { backButtonType: o || (x ? "close" : "back"), backLocation: a, centerTitle: n, fixed: !x, hideBackButton: l, history: s, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: b, ref: e, rightControl: B, secondaryBar: g, style: [x && m.appBarModal, t], subtitle: f, title: y, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: n, documentTitle: l, isFullWidth: d, isLarge: c, renderHeader: u, title: b, withoutBottomBarMobile: B } = this.props,
                        { isModal: g } = this.context,
                        f = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(p.Z.Configure, { documentTitle: l, headerless: !0, title: b }), r.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, g && m.rootModal] }, !g && f, r.createElement(a.Z, { isFullWidth: d, isLarge: c, style: [m.container, g && m.containerModal, n] }, g ? r.createElement(h.Z, { style: m.viewport }, f, o) : o), t ? r.createElement(i.Z, { style: [m.bottomBarModal, !g && !B && m.bottomBarMobile] }, r.createElement(a.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = n.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = u;
        },
        244071: (e, t, o) => {
            o.r(t), o.d(t, { BadgeViolations: () => _, default: () => Z });
            var r = o(202784),
                i = o(325686),
                a = o(731708),
                n = o(946847),
                l = o(879113),
                s = o(392237),
                d = o(332920),
                c = o.n(d),
                p = o(849353),
                h = o(350506),
                u = o(980407),
                m = o(686689),
                b = o(316325),
                B = o(312771),
                g = o(71620),
                f = o(668214),
                y = o(946194);
            const x = (0, f.Z)()
                    .propsFromState(() => ({ badgeViolations: y.XC, fetchStatus: y.Sb }))
                    .adjustStateProps(({ badgeViolations: e, fetchStatus: t }) => ({ badgeViolations: e, fetchStatus: t === B.ZP.NONE ? B.ZP.LOADING : t }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("ACCOUNT_VERIFICATION_NOTIFICATION_SCREEN"), fetchBadgeViolations: y.pD }))
                    .withAnalytics(),
                C = "/notifications",
                E = c().fc2a5c92,
                k = (e) => null;
            class _ extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderViolation = (e, t) => {
                            const {
                                    violation_category: o,
                                    violation_desc: { entities: n, text: l },
                                    violation_status: s,
                                    violation_title: d,
                                } = e,
                                c = s === b.Tq.IN_COMPLIANCE ? r.createElement(p.default, { style: [w.icon, w.green] }) : r.createElement(h.default, { style: [w.icon, w.red] });
                            return r.createElement(i.Z, { key: o, style: [w.listItem, t && w.withBottomBorder] }, c, r.createElement(i.Z, { style: w.itemContent }, r.createElement(a.ZP, { style: w.itemTitle }, d), r.createElement(m.Z, { color: "gray700", entities: n, size: "subtext2", text: l })));
                        }),
                        (this._render = () => {
                            const { badgeViolations: e, history: t } = this.props,
                                {
                                    button_text: o,
                                    violation_modal_desc: { entities: i, text: a },
                                    violation_modal_title: l,
                                    violations: s,
                                } = e,
                                d = () => t.goBack({ backLocation: C }),
                                c = r.createElement(m.Z, { entities: i, text: a }),
                                p =
                                    s && s.length
                                        ? r.createElement(
                                              r.Fragment,
                                              null,
                                              s.map((e, t, o) => this._renderViolation(e, t !== o.length - 1)),
                                          )
                                        : null;
                            return r.createElement(n.Z, { actionLabel: o, children: p, contentStyle: w.contentContainer, headline: l, onAction: d, onClose: d, subtext: c });
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
                        o = e === B.ZP.LOADED;
                    return r.createElement(u.Z, { backLocation: C, containerStyle: !o && w.loading, history: t, renderHeader: o ? k : void 0 }, r.createElement(l.Z, { fetchStatus: e, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: E, retryable: !0 }));
                }
            }
            const w = s.default.create((e) => ({ contentContainer: { marginVertical: e.spaces.space16, justifyContent: "center" }, listItem: { flexDirection: "row", paddingVertical: e.spaces.space20, width: "100%" }, withBottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, icon: { flexShrink: 0, fontSize: e.fontSizes.headline1, marginEnd: e.spaces.space12 }, itemContent: { flexShrink: 1, flexGrow: 1 }, itemTitle: { marginBottom: e.spaces.space2 }, loading: { paddingBottom: e.spaces.space48 }, green: { color: e.colors.green500 }, red: { color: e.colors.magenta500 } })),
                Z = x(_);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BadgeViolationsNotification.a86a80ba.js.map
