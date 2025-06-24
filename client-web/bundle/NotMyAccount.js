"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.NotMyAccount"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var a = o(202784),
                r = o(614983),
                n = o.n(r),
                i = o(325686),
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
                            n()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: n, isFullWidth: i, isLarge: l, leftControl: d, middleControl: p, position: u, rightControl: m, secondaryBar: b, style: g, subtitle: k, title: B, titleDomId: f, titleIconCell: y, titleIconCellSize: _, withBackground: C, withWideContainer: E } = this.props,
                        { isModal: x } = this.context,
                        w = n ? d : a.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        A = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!C, x, !!b);
                    return a.createElement(a.Fragment, null, a.createElement(c.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: l, leftControl: w, middleControl: p, position: h(u, x, r), rightControl: m, style: g, subtitle: k, title: B, titleDomId: f, titleIconCell: y, titleIconCellSize: _, withBackground: A, withWideContainer: E }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = l.Z.getBackgroundStyles();
                    return t ? a.createElement(i.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => u });
            var a = o(202784),
                r = o(325686),
                n = o(108362),
                i = o(386802),
                s = o(392237),
                c = o(652904),
                l = o(555079),
                d = o(625661),
                h = o(449067),
                p = o(715601);
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: n, centerTitle: i, hideBackButton: s, history: c, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: b, rightControl: g, secondaryBar: k, subtitle: B, title: f } = this.props,
                                { isModal: y } = this.context;
                            return a.createElement(r.Z, { style: y ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, a.createElement(d.ZP, { backButtonType: o || (y ? "close" : "back"), backLocation: n, centerTitle: i, fixed: !y, hideBackButton: s, history: c, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: b, ref: e, rightControl: g, secondaryBar: k, style: [y && m.appBarModal, t], subtitle: B, title: f, titleDomId: l.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: s, isFullWidth: l, isLarge: d, renderHeader: u, title: b, withoutBottomBarMobile: g } = this.props,
                        { isModal: k } = this.context,
                        B = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(c.Z, null, a.createElement(h.Z.Configure, { documentTitle: s, headerless: !0, title: b }), a.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, k && m.rootModal] }, !k && B, a.createElement(n.Z, { isFullWidth: l, isLarge: d, style: [m.container, k && m.containerModal, i] }, k ? a.createElement(p.Z, { style: m.viewport }, B, o) : o), t ? a.createElement(r.Z, { style: [m.bottomBarModal, !k && !g && m.bottomBarMobile] }, a.createElement(n.Z, { isFullWidth: l, isLarge: d }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = i.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = u;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var a = o(202784),
                r = o(500002),
                n = o(668214),
                i = o(997174),
                s = o(118823);
            const c = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
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
                            location: { pathname: n, search: i },
                            locationKey: s,
                        } = e;
                    let c = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (c = !0));
                    const l = r || s;
                    ((l && r !== s) || (!l && o !== n) || a !== i || c) && this._performPageUpdates(this.props);
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
            o.r(t), o.d(t, { NotMyAccountScreen: () => F, default: () => v });
            o(136728);
            var a = o(202784),
                r = o(325686),
                n = o(731708),
                i = o(688715),
                s = o(392237),
                c = o(946847),
                l = o(111677),
                d = o.n(l),
                h = o(143778),
                p = o(615656),
                u = o(980407),
                m = o(71620),
                b = o(668214);
            const g = ({ apiClient: e, featureSwitches: t }) => ({ disassociateAccount: (t = {}, o = {}) => e.post("account/not_my_account/disassociate", t, {}, { ...o, "content-type": "application/json" }), getMaskedData: (t = {}, o = {}) => e.get("account/not_my_account/get_masked_data", t, o) });
            var k = o(917799);
            const B =
                    (e) =>
                    (t, o, { api: a }) =>
                        (0, k.Vg)(t, { params: e, request: a.withEndpoint(g).disassociateAccount })("DISASSOCIATE_ACCOUNT"),
                f =
                    (e) =>
                    (t, o, { api: a }) =>
                        (0, k.Vg)(t, { params: e, request: a.withEndpoint(g).getMaskedData })("GET_MASKED_DATA"),
                y = (0, b.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("NOT_MY_ACCOUNT_CONTEXT"), disassociateAccount: B, getMaskedData: f })),
                _ = a.createElement(n.ZP, { color: "gray700", weight: "bold" }),
                C = (0, i.ju)("https://x.com/settings/email_notifications"),
                E = (0, i.ju)("https://help.x.com/managing-your-account/received-a-confirmation-email-thats-not-for-my-account"),
                x = d().f7865ab6,
                w = d().a35248e4,
                A = d().f794a67c,
                Z = d().j79c0ff7,
                T = d().j24c37b2,
                M = a.createElement(d().I18NFormatMessage, { $i18n: "b72bbe27" }, a.cloneElement(_, null, d().c1d75571)),
                L = a.createElement(d().I18NFormatMessage, { $i18n: "iddf579b" }, a.createElement(n.ZP, { link: E }, d().ac71e82f)),
                N = a.createElement(a.Fragment, null, a.createElement(r.Z, { style: { paddingBottom: s.default.theme.spaces.space4 } }, M), L),
                S = d().fb46383c,
                I = d().gcfdbc2b;
            class F extends a.Component {
                constructor(e) {
                    super(e),
                        (this._renderHeader = h.Z),
                        (this._handleErrors = (e) => {
                            const { createLocalApiErrorHandler: t } = this.props,
                                { screenName: o } = this.state;
                            t({ [p.ZP.ClientNotPermitted]: { toast: { text: S } }, [p.ZP.InvalidEmailAddress]: { toast: { text: I({ screenName: o }) } }, showToast: !0 })(e), this._redirectToHome();
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
                    const r = o ? Z({ emailAddress: e }) : x,
                        i = o ? ((e, t) => a.createElement(d().I18NFormatMessage, { $i18n: "b8e3884f" }, a.cloneElement(_, null, d().h1732cde({ emailAddress: t })), a.cloneElement(_, null, d().d374a600({ screenName: e }))))(t, e) : ((e, t) => a.createElement(d().I18NFormatMessage, { $i18n: "b028aec5" }, a.cloneElement(_, null, d().f351663c({ screenName: e })), a.cloneElement(_, null, d().baaa89c4({ emailAddress: t }))))(t, e),
                        s = o ? T : w,
                        l = o ? void 0 : A,
                        h = o ? this._redirectToHome : this._handleSubmit,
                        p = o ? void 0 : this._redirectToHome,
                        m = o ? N : ((e) => a.createElement(d().I18NFormatMessage, { $i18n: "c43645ad" }, a.cloneElement(_, null, d().h75b475c({ screenName: e })), a.createElement(n.ZP, { link: C }, d().a8f0e157)))(t);
                    return a.createElement(u.Z, { renderHeader: this._renderHeader }, a.createElement(c.Z, { actionLabel: s, footer: m, headline: r, onAction: h, onClose: h, onSecondaryAction: p, secondaryActionLabel: l, subtext: i, withCloseButton: !1 }));
                }
            }
            const v = y(F);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.NotMyAccount.703060ca.js.map
