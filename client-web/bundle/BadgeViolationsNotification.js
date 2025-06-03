"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BadgeViolationsNotification"],
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
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: n, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: m, onBackClick: b, rightControl: B, secondaryBar: g, subtitle: y, title: f } = this.props,
                                { isModal: x } = this.context;
                            return r.createElement(i.Z, { style: x ? [u.childViewAppBarRoot, u.appBarZindex] : u.appBarZindex }, r.createElement(c.ZP, { backButtonType: o || (x ? "close" : "back"), backLocation: a, centerTitle: n, fixed: !x, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: m, onBackClick: b, ref: e, rightControl: B, secondaryBar: g, style: [x && u.appBarModal, t], subtitle: y, title: f, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: n, documentTitle: l, isFullWidth: d, isLarge: c, renderHeader: m, title: b, withoutBottomBarMobile: B } = this.props,
                        { isModal: g } = this.context,
                        y = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(h.Z.Configure, { documentTitle: l, headerless: !0, title: b }), r.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [u.root, g && u.rootModal] }, !g && y, r.createElement(a.Z, { isFullWidth: d, isLarge: c, style: [u.container, g && u.containerModal, n] }, g ? r.createElement(p.Z, { style: u.viewport }, y, o) : o), t ? r.createElement(i.Z, { style: [u.bottomBarModal, !g && !B && u.bottomBarMobile] }, r.createElement(a.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = n.Z);
            const u = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = m;
        },
        244071: (e, t, o) => {
            o.r(t), o.d(t, { BadgeViolations: () => w, default: () => _ });
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
                B = o(312771),
                g = o(71620),
                y = o(668214),
                f = o(946194);
            const x = (0, y.Z)()
                    .propsFromState(() => ({ badgeViolations: f.XC, fetchStatus: f.Sb }))
                    .adjustStateProps(({ badgeViolations: e, fetchStatus: t }) => ({ badgeViolations: e, fetchStatus: t === B.ZP.NONE ? B.ZP.LOADING : t }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("ACCOUNT_VERIFICATION_NOTIFICATION_SCREEN"), fetchBadgeViolations: f.pD }))
                    .withAnalytics(),
                C = "/notifications",
                E = c().fc2a5c92,
                k = (e) => null;
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
                                d = () => t.goBack({ backLocation: C }),
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
                        o = e === B.ZP.LOADED;
                    return r.createElement(m.Z, { backLocation: C, containerStyle: !o && Z.loading, history: t, renderHeader: o ? k : void 0 }, r.createElement(l.Z, { fetchStatus: e, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: E, retryable: !0 }));
                }
            }
            const Z = s.default.create((e) => ({ contentContainer: { marginVertical: e.spaces.space16, justifyContent: "center" }, listItem: { flexDirection: "row", paddingVertical: e.spaces.space20, width: "100%" }, withBottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, icon: { flexShrink: 0, fontSize: e.fontSizes.headline1, marginEnd: e.spaces.space12 }, itemContent: { flexShrink: 1, flexGrow: 1 }, itemTitle: { marginBottom: e.spaces.space2 }, loading: { paddingBottom: e.spaces.space48 }, green: { color: e.colors.green500 }, red: { color: e.colors.magenta500 } })),
                _ = x(w);
        },
        41065: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BadgeViolationsNotification.dcebadaa.js.map
