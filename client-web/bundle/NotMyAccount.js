"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.NotMyAccount"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var a = o(202784),
                r = o(614983),
                i = o.n(r),
                n = o(325686),
                s = o(370006),
                c = o(786998),
                l = o(929028),
                d = o(386802);
            function h(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            i()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: i, isFullWidth: n, isLarge: l, leftControl: d, middleControl: p, position: m, rightControl: u, secondaryBar: b, style: g, subtitle: B, title: k, titleDomId: y, titleIconCell: f, titleIconCellSize: C, withBackground: _, withWideContainer: E } = this.props,
                        { isModal: x } = this.context,
                        w = i ? d : a.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!_, x, !!b);
                    return a.createElement(a.Fragment, null, a.createElement(c.Z, { centerTitle: t, centeredLogo: o, isFullWidth: n, isLarge: l, leftControl: w, middleControl: p, position: h(m, x, r), rightControl: u, style: g, subtitle: B, title: k, titleDomId: y, titleIconCell: f, titleIconCellSize: C, withBackground: Z, withWideContainer: E }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = l.Z.getBackgroundStyles();
                    return t ? a.createElement(n.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => m });
            var a = o(202784),
                r = o(325686),
                i = o(108362),
                n = o(386802),
                s = o(392237),
                c = o(652904),
                l = o(555079),
                d = o(625661),
                h = o(449067),
                p = o(715601);
            class m extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: n, hideBackButton: s, history: c, isFullWidth: h, isLarge: p, middleControl: m, onBackClick: b, rightControl: g, secondaryBar: B, subtitle: k, title: y } = this.props,
                                { isModal: f } = this.context;
                            return a.createElement(r.Z, { style: f ? [u.childViewAppBarRoot, u.appBarZindex] : u.appBarZindex }, a.createElement(d.ZP, { backButtonType: o || (f ? "close" : "back"), backLocation: i, centerTitle: n, fixed: !f, hideBackButton: s, history: c, isFullWidth: h, isLarge: p, middleControl: m, onBackClick: b, ref: e, rightControl: g, secondaryBar: B, style: [f && u.appBarModal, t], subtitle: k, title: y, titleDomId: l.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: n, documentTitle: s, isFullWidth: l, isLarge: d, renderHeader: m, title: b, withoutBottomBarMobile: g } = this.props,
                        { isModal: B } = this.context,
                        k = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(c.Z, null, a.createElement(h.Z.Configure, { documentTitle: s, headerless: !0, title: b }), a.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [u.root, B && u.rootModal] }, !B && k, a.createElement(i.Z, { isFullWidth: l, isLarge: d, style: [u.container, B && u.containerModal, n] }, B ? a.createElement(p.Z, { style: u.viewport }, k, o) : o), t ? a.createElement(r.Z, { style: [u.bottomBarModal, !B && !g && u.bottomBarMobile] }, a.createElement(i.Z, { isFullWidth: l, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = n.Z);
            const u = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = m;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var a = o(202784),
                r = o(500002),
                i = o(668214),
                n = o(997174),
                s = o(118823);
            const c = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class l extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: a },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: i, search: n },
                            locationKey: s,
                        } = e;
                    let c = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (c = !0));
                    const l = r || s;
                    ((l && r !== s) || (!l && o !== i) || a !== n || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const d = (0, r.ZP)(c(l));
        },
        455126: (e, t, o) => {
            o.r(t), o.d(t, { NotMyAccountScreen: () => I, default: () => F });
            o(136728);
            var a = o(202784),
                r = o(325686),
                i = o(731708),
                n = o(688715),
                s = o(392237),
                c = o(946847),
                l = o(674132),
                d = o.n(l),
                h = o(143778),
                p = o(615656),
                m = o(980407),
                u = o(71620),
                b = o(668214);
            const g = ({ apiClient: e, featureSwitches: t }) => ({ disassociateAccount: (t = {}, o = {}) => e.post("account/not_my_account/disassociate", t, {}, { ...o, "content-type": "application/json" }), getMaskedData: (t = {}, o = {}) => e.get("account/not_my_account/get_masked_data", t, o) });
            var B = o(917799);
            const k =
                    (e) =>
                    (t, o, { api: a }) =>
                        (0, B.Vg)(t, { params: e, request: a.withEndpoint(g).disassociateAccount })("DISASSOCIATE_ACCOUNT"),
                y =
                    (e) =>
                    (t, o, { api: a }) =>
                        (0, B.Vg)(t, { params: e, request: a.withEndpoint(g).getMaskedData })("GET_MASKED_DATA"),
                f = (0, b.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("NOT_MY_ACCOUNT_CONTEXT"), disassociateAccount: k, getMaskedData: y })),
                C = a.createElement(i.ZP, { color: "gray700", weight: "bold" }),
                _ = (0, n.ju)("https://x.com/settings/email_notifications"),
                E = (0, n.ju)("https://help.x.com/managing-your-account/received-a-confirmation-email-thats-not-for-my-account"),
                x = d().f7865ab6,
                w = d().a35248e4,
                Z = d().f794a67c,
                A = d().j79c0ff7,
                M = d().j24c37b2,
                T = a.createElement(d().I18NFormatMessage, { $i18n: "b72bbe27" }, a.cloneElement(C, null, d().c1d75571)),
                L = a.createElement(d().I18NFormatMessage, { $i18n: "iddf579b" }, a.createElement(i.ZP, { link: E }, d().ac71e82f)),
                S = a.createElement(a.Fragment, null, a.createElement(r.Z, { style: { paddingBottom: s.default.theme.spaces.space4 } }, T), L),
                N = d().fb46383c,
                v = d().gcfdbc2b;
            class I extends a.Component {
                constructor(e) {
                    super(e),
                        (this._renderHeader = h.Z),
                        (this._handleErrors = (e) => {
                            const { createLocalApiErrorHandler: t } = this.props,
                                { screenName: o } = this.state;
                            t({ [p.ZP.ClientNotPermitted]: { toast: { text: N } }, [p.ZP.InvalidEmailAddress]: { toast: { text: v({ screenName: o }) } }, showToast: !0 })(e), this._redirectToHome();
                        }),
                        (this._handleSubmit = () => {
                            const { disassociateAccount: e } = this.props,
                                { screenName: t } = this.state;
                            t &&
                                this._secret &&
                                e({ screenName: t, secret: this._secret })
                                    .then(() => {
                                        this.setState({ success: !0 });
                                    })
                                    .catch(this._handleErrors);
                        }),
                        (this._redirectToHome = () => {
                            const { history: e } = this.props;
                            e.push("/");
                        }),
                        (this._secret = e.match.params.emailLinkSecret),
                        (this.state = { emailAddress: "", screenName: "", success: !1 });
                }
                componentDidMount() {
                    const { getMaskedData: e, location: t, match: o } = this.props,
                        a = o.params.screenName,
                        r = t.query.ut && t.query.ut.toString();
                    this._secret &&
                        a &&
                        e({ secret: this._secret, user: a, ut: r })
                            .then((e) => {
                                this.setState({ emailAddress: e?.emailAddress, screenName: e?.screenName, success: !!e?.detached });
                            })
                            .catch(this._handleErrors);
                }
                render() {
                    const { emailAddress: e, screenName: t, success: o } = this.state;
                    if (!e || !t) return null;
                    const r = o ? A({ emailAddress: e }) : x,
                        n = o ? ((e, t) => a.createElement(d().I18NFormatMessage, { $i18n: "b8e3884f" }, a.cloneElement(C, null, d().h1732cde({ emailAddress: t })), a.cloneElement(C, null, d().d374a600({ screenName: e }))))(t, e) : ((e, t) => a.createElement(d().I18NFormatMessage, { $i18n: "b028aec5" }, a.cloneElement(C, null, d().f351663c({ screenName: e })), a.cloneElement(C, null, d().baaa89c4({ emailAddress: t }))))(t, e),
                        s = o ? M : w,
                        l = o ? void 0 : Z,
                        h = o ? this._redirectToHome : this._handleSubmit,
                        p = o ? void 0 : this._redirectToHome,
                        u = o ? S : ((e) => a.createElement(d().I18NFormatMessage, { $i18n: "c43645ad" }, a.cloneElement(C, null, d().h75b475c({ screenName: e })), a.createElement(i.ZP, { link: _ }, d().a8f0e157)))(t);
                    return a.createElement(m.Z, { renderHeader: this._renderHeader }, a.createElement(c.Z, { actionLabel: s, footer: u, headline: r, onAction: h, onClose: h, onSecondaryAction: p, secondaryActionLabel: l, subtext: n, withCloseButton: !1 }));
                }
            }
            const F = f(I);
        },
        41065: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var a = o(202784),
                r = o(890601),
                i = o(783427),
                n = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.NotMyAccount.4f3433aa.js.map
