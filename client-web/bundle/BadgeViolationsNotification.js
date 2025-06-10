"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BadgeViolationsNotification"],
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
                    const { backButtonType: t, centerTitle: e, centeredLogo: o, fixed: r, hideBackButton: n, isFullWidth: a, isLarge: c, leftControl: d, middleControl: p, position: u, rightControl: m, secondaryBar: g, style: B, subtitle: b, title: y, titleDomId: C, titleIconCell: f, titleIconCellSize: k, withBackground: x, withWideContainer: _ } = this.props,
                        { isModal: Z } = this.context,
                        w = n ? d : i.createElement(l.Z, { backButtonType: t, onClick: this._handleBackClick }),
                        E = (function (t, e, o) {
                            return t && !(e && o);
                        })(!!x, Z, !!g);
                    return i.createElement(i.Fragment, null, i.createElement(s.Z, { centerTitle: e, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: w, middleControl: p, position: h(u, Z, r), rightControl: m, style: B, subtitle: b, title: y, titleDomId: C, titleIconCell: f, titleIconCellSize: k, withBackground: E, withWideContainer: _ }), g || null);
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
                            const { appBarRef: t, appBarStyle: e, backButtonType: o, backLocation: n, centerTitle: a, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: g, rightControl: B, secondaryBar: b, subtitle: y, title: C } = this.props,
                                { isModal: f } = this.context;
                            return i.createElement(r.Z, { style: f ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, i.createElement(d.ZP, { backButtonType: o || (f ? "close" : "back"), backLocation: n, centerTitle: a, fixed: !f, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: g, ref: t, rightControl: B, secondaryBar: b, style: [f && m.appBarModal, e], subtitle: y, title: C, titleDomId: c.Q_ }));
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
            o.r(e), o.d(e, { BadgeViolations: () => Z, default: () => E });
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
                C = o(946194);
            const f = (0, y.Z)()
                    .propsFromState(() => ({ badgeViolations: C.XC, fetchStatus: C.Sb }))
                    .adjustStateProps(({ badgeViolations: t, fetchStatus: e }) => ({ badgeViolations: t, fetchStatus: e === B.ZP.NONE ? B.ZP.LOADING : e }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("ACCOUNT_VERIFICATION_NOTIFICATION_SCREEN"), fetchBadgeViolations: C.pD }))
                    .withAnalytics(),
                k = "/notifications",
                x = d().fc2a5c92,
                _ = (t) => null;
            class Z extends i.Component {
                constructor(...t) {
                    super(...t),
                        (this._renderViolation = (t, e) => {
                            const {
                                    violation_category: o,
                                    violation_desc: { entities: a, text: l },
                                    violation_status: s,
                                    violation_title: c,
                                } = t,
                                d = s === g.Tq.IN_COMPLIANCE ? i.createElement(h.default, { style: [w.icon, w.green] }) : i.createElement(p.default, { style: [w.icon, w.red] });
                            return i.createElement(r.Z, { key: o, style: [w.listItem, e && w.withBottomBorder] }, d, i.createElement(r.Z, { style: w.itemContent }, i.createElement(n.ZP, { style: w.itemTitle }, c), i.createElement(m.Z, { color: "gray700", entities: a, size: "subtext2", text: l })));
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
                            return i.createElement(a.Z, { actionLabel: o, children: h, contentStyle: w.contentContainer, headline: l, onAction: c, onClose: c, subtext: d });
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
                    return i.createElement(u.Z, { backLocation: k, containerStyle: !o && w.loading, history: e, renderHeader: o ? _ : void 0 }, i.createElement(l.Z, { fetchStatus: t, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: x, retryable: !0 }));
                }
            }
            const w = s.default.create((t) => ({ contentContainer: { marginVertical: t.spaces.space16, justifyContent: "center" }, listItem: { flexDirection: "row", paddingVertical: t.spaces.space20, width: "100%" }, withBottomBorder: { borderBottomWidth: t.borderWidths.small, borderBottomColor: t.colors.borderColor, borderBottomStyle: "solid" }, icon: { flexShrink: 0, fontSize: t.fontSizes.headline1, marginEnd: t.spaces.space12 }, itemContent: { flexShrink: 1, flexGrow: 1 }, itemTitle: { marginBottom: t.spaces.space2 }, loading: { paddingBottom: t.spaces.space48 }, green: { color: t.colors.green500 }, red: { color: t.colors.magenta500 } })),
                E = f(Z);
        },
        41065: (t, e, o) => {
            o.r(e), o.d(e, { default: () => s });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                a = o(347101);
            const l = (t = {}) => {
                const { direction: e } = (0, n.Z)();
                return (0, r.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [a.Z.root, t.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: e });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BadgeViolationsNotification.c7b6ae8a.js.map
