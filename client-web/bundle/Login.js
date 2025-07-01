"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Login"],
    {
        652904: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(202784),
                i = n(500002),
                r = n(668214),
                s = n(997174),
                a = n(118823);
            const c = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class l extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: o },
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: r, search: s },
                            locationKey: a,
                        } = e;
                    let c = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (c = !0));
                    const l = i || a;
                    ((l && i !== a) || (!l && n !== r) || o !== s || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const p = (0, i.ZP)(c(l));
        },
        910544: (e, t, n) => {
            n.r(t), n.d(t, { LoginScreen: () => O, default: () => J, styles: () => R });
            var o = n(202784),
                i = n(99107),
                r = n(688715),
                s = n(392237),
                a = n(401388),
                c = n(640872),
                l = n(655352),
                p = n(918621),
                u = n(2430),
                d = n(297608),
                g = n(615027),
                h = n(111677),
                m = n.n(h),
                _ = n(676145),
                f = n(668214),
                y = n(390387),
                w = n(919022);
            const P = (e, t) => t.location.query && ((0, _.Z)(t.location.query.username_or_email) ? t.location.query.username_or_email : void 0),
                b = (e, t) => y.CO(e) || ((0, _.Z)(t.location.query.login_verification_error) ? Z[t.location.query.login_verification_error] : void 0),
                Z = { BadSessionLoginVerification: m().f8ad0092, ExpiredLoginVerification: m().h2c7767e, OverLimitLoginVerificationAttempts: m().e83047c2, OfflineCodeSync: m().g4b108ee },
                S = (0, f.Z)()
                    .propsFromState(() => ({ errorMessage: b, loginId: P, loginReturnPath: y.V_, loggedInUser: w.ZP.selectLoggedInUser }))
                    .propsFromActions(() => ({ setLoginReturnPath: y.Jm }))
                    .withAnalytics({ page: "login" });
            var v = n(138099),
                E = n(108362),
                x = n(731708),
                I = n(823161),
                C = n(366635),
                L = n(154003),
                k = n(520913),
                U = n(38293),
                q = n(652904),
                D = n(782826),
                N = n(725516);
            const A = "LoginPage_Continue_Button",
                V = m().a9be9b44,
                F = m().e55188f0,
                M = m().d55d8fe2,
                B = m().c3d89aca,
                T = m().g806008e;
            class z extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleContinuePress = () => {
                            const { analytics: e, history: t, location: n } = this.props,
                                { query: o } = n,
                                i = o && o.redirect_after_login ? o.redirect_after_login.toString() : void 0,
                                r = i && D.ZP.makeSafeForTwitterRedirect(i);
                            i && r ? (e.scribeAction("redirect"), window.location.assign(r)) : (e.scribeAction("redirecthome"), t.replace("/home"));
                        }),
                        (this._handleSwitchAccountPress = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribeAction("switch"), t.replace("/account/switch");
                        });
                }
                render() {
                    const { loggedInUser: e } = this.props;
                    return o.createElement(q.Z, null, o.createElement(U.Z, { title: V }), o.createElement(v.Z, { type: "full" }, o.createElement(E.Z, { style: [R.root, R.center], withGutter: !0 }, o.createElement(k.default, { style: R.icon }), o.createElement(x.ZP, { align: "center", role: "heading", size: "title4", style: R.heading, weight: "bold" }, F), o.createElement(I.default, { size: "jumbo", uri: e.profile_image_url_https }), o.createElement(C.Z, { badgeContext: "account", isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, screenName: e.screen_name, style: [R.gutter, R.center], withStackedLayout: !0 }), o.createElement(x.ZP, { align: "center", style: R.gutter }, M), o.createElement(L.ZP, { onPress: this._handleContinuePress, style: R.gutter, testID: A, type: "brandFilled" }, B), o.createElement(x.ZP, { align: "center", color: "link", onPress: this._handleSwitchAccountPress, role: "link", style: R.gutter }, T))));
                }
            }
            const H = (0, N.Z)(z, { page: "login", section: "continue" });
            class O extends o.Component {
                constructor(e, t) {
                    const { loginId: n } = e;
                    super(e, t), (this._continueEnabled = "true" === e.location.query.showContinuePrompt), (this.state = { usernameValue: n || "", passwordValue: "" });
                }
                componentDidMount() {
                    const { analytics: e, errorMessage: t } = this.props;
                    this._unsetFlashMessage(this.props), (0, l.ZP)() && this.context.setSideNavSupport(!1), t && e.scribePageImpression({ section: "error", action: "show" });
                }
                componentDidUpdate() {
                    this._unsetFlashMessage(this.props);
                }
                componentWillUnmount() {
                    (0, l.ZP)() && this.context.setSideNavSupport(!0);
                }
                render() {
                    const { errorMessage: e, history: t, location: n, loggedInUser: i, setLoginReturnPath: s } = this.props;
                    if (this._continueEnabled && i && !e) return o.createElement(H, { history: t, location: n, loggedInUser: i });
                    const c = (0, a.Z)(n.query) ? "" : (0, d.JN)(JSON.stringify(n.query)),
                        l = (0, r.ju)((0, u.BX)(n?.query?.redirect_after_login) ?? "");
                    l && s(l);
                    const p = c ? encodeURIComponent(JSON.stringify({ requested_variant: c })) : "",
                        h = p ? `/i/flow/login?input_flow_data=${p}` : "/i/flow/login";
                    return o.createElement(g.Z, { status: 301, to: h });
                }
                _unsetFlashMessage(e) {
                    const { errorMessage: t } = e;
                    t && (0, p.kT)(i.xE, { featureSwitches: this.context.featureSwitches });
                }
            }
            O.contextType = c.Z;
            const R = s.default.create((e) => ({ root: { marginTop: e.spaces.space20 }, container: { maxWidth: 400, marginHorizontal: "auto", width: "100%", paddingHorizontal: e.componentDimensions.gutterHorizontal }, icon: { alignSelf: "flex-start", color: e.colors.brandColor, height: e.spaces.space40 }, heading: { marginHorizontal: 0, marginTop: e.spaces.space32, marginBottom: e.spaces.space12 }, center: { flexDirection: "column", alignItems: "center" }, gutter: { marginVertical: e.componentDimensions.gutterVertical } })),
                J = S(O);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Login.bc720a6a.js.map
