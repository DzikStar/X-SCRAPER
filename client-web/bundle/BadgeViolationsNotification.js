"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BadgeViolationsNotification", "icons/IconErrorCircleFillWhite-js"],
    {
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => m });
            var r = o(202784),
                i = o(325686),
                a = o(108362),
                n = o(386802),
                l = o(392237),
                s = o(652904),
                d = o(555079),
                c = o(625661),
                h = o(449067),
                p = o(715601);
            class m extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: n, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: m, onBackClick: b, rightControl: g, secondaryBar: B, subtitle: f, title: y } = this.props,
                                { isModal: E } = this.context;
                            return r.createElement(i.Z, { style: E ? [u.childViewAppBarRoot, u.appBarZindex] : u.appBarZindex }, r.createElement(c.ZP, { backButtonType: o || (E ? "close" : "back"), backLocation: a, centerTitle: n, fixed: !E, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: m, onBackClick: b, ref: e, rightControl: g, secondaryBar: B, style: [E && u.appBarModal, t], subtitle: f, title: y, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: n, documentTitle: l, isFullWidth: d, isLarge: c, renderHeader: m, title: b, withoutBottomBarMobile: g } = this.props,
                        { isModal: B } = this.context,
                        f = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(h.Z.Configure, { documentTitle: l, headerless: !0, title: b }), r.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [u.root, B && u.rootModal] }, !B && f, r.createElement(a.Z, { isFullWidth: d, isLarge: c, style: [u.container, B && u.containerModal, n] }, B ? r.createElement(p.Z, { style: u.viewport }, f, o) : o), t ? r.createElement(i.Z, { style: [u.bottomBarModal, !B && !g && u.bottomBarMobile] }, r.createElement(a.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = n.Z);
            const u = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = m;
        },
        244071: (e, t, o) => {
            o.r(t), o.d(t, { BadgeViolations: () => w, default: () => k });
            var r = o(202784),
                i = o(325686),
                a = o(731708),
                n = o(946847),
                l = o(879113),
                s = o(392237),
                d = o(111677),
                c = o.n(d),
                h = o(849353),
                p = o(350506),
                m = o(980407),
                u = o(686689),
                b = o(316325),
                g = o(312771),
                B = o(71620),
                f = o(668214),
                y = o(946194);
            const E = (0, f.Z)()
                    .propsFromState(() => ({ badgeViolations: y.XC, fetchStatus: y.Sb }))
                    .adjustStateProps(({ badgeViolations: e, fetchStatus: t }) => ({ badgeViolations: e, fetchStatus: t === g.ZP.NONE ? g.ZP.LOADING : t }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, B.zr)("ACCOUNT_VERIFICATION_NOTIFICATION_SCREEN"), fetchBadgeViolations: y.pD }))
                    .withAnalytics(),
                x = "/notifications",
                C = c().fc2a5c92,
                v = (e) => null;
            class w extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderViolation = (e, t) => {
                            const {
                                    violation_category: o,
                                    violation_desc: { entities: n, text: l },
                                    violation_status: s,
                                    violation_title: d,
                                } = e,
                                c = s === b.Tq.IN_COMPLIANCE ? r.createElement(h.default, { style: [Z.icon, Z.green] }) : r.createElement(p.default, { style: [Z.icon, Z.red] });
                            return r.createElement(i.Z, { key: o, style: [Z.listItem, t && Z.withBottomBorder] }, c, r.createElement(i.Z, { style: Z.itemContent }, r.createElement(a.ZP, { style: Z.itemTitle }, d), r.createElement(u.Z, { color: "gray700", entities: n, size: "subtext2", text: l })));
                        }),
                        (this._render = () => {
                            const { badgeViolations: e, history: t } = this.props,
                                {
                                    button_text: o,
                                    violation_modal_desc: { entities: i, text: a },
                                    violation_modal_title: l,
                                    violations: s,
                                } = e,
                                d = () => t.goBack({ backLocation: x }),
                                c = r.createElement(u.Z, { entities: i, text: a }),
                                h =
                                    s && s.length
                                        ? r.createElement(
                                              r.Fragment,
                                              null,
                                              s.map((e, t, o) => this._renderViolation(e, t !== o.length - 1)),
                                          )
                                        : null;
                            return r.createElement(n.Z, { actionLabel: o, children: h, contentStyle: Z.contentContainer, headline: l, onAction: d, onClose: d, subtext: c });
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
                        o = e === g.ZP.LOADED;
                    return r.createElement(m.Z, { backLocation: x, containerStyle: !o && Z.loading, history: t, renderHeader: o ? v : void 0 }, r.createElement(l.Z, { fetchStatus: e, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: C, retryable: !0 }));
                }
            }
            const Z = s.default.create((e) => ({ contentContainer: { marginVertical: e.spaces.space16, justifyContent: "center" }, listItem: { flexDirection: "row", paddingVertical: e.spaces.space20, width: "100%" }, withBottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, icon: { flexShrink: 0, fontSize: e.fontSizes.headline1, marginEnd: e.spaces.space12 }, itemContent: { flexShrink: 1, flexGrow: 1 }, itemTitle: { marginBottom: e.spaces.space2 }, loading: { paddingBottom: e.spaces.space48 }, green: { color: e.colors.green500 }, red: { color: e.colors.magenta500 } })),
                k = E(w);
        },
        350506: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75C6.339 1.75 1.75 6.339 1.75 12S6.339 22.25 12 22.25 22.25 17.661 22.25 12 17.661 1.751 12 1.75z" }), r.createElement("path", { d: "M13.25 7L13 12.7c-.32-.121-.658-.189-1-.2-.342.011-.68.079-1 .2L10.75 7h2.5zM12 17c-.828 0-1.5-.672-1.5-1.5S11.172 14 12 14s1.5.672 1.5 1.5S12.828 17 12 17z", fill: "#fff" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BadgeViolationsNotification.79ef320a.js.map
