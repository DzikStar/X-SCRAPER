"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Login"],
    {
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
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
            const d = (0, i.ZP)(c(l));
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
                d = n(918621),
                p = n(2430),
                u = n(297608),
                h = n(615027),
                g = n(674132),
                m = n.n(g),
                _ = n(676145),
                f = n(668214),
                y = n(390387),
                w = n(919022);
            const v = (e, t) => t.location.query && ((0, _.Z)(t.location.query.username_or_email) ? t.location.query.username_or_email : void 0),
                P = (e, t) => y.CO(e) || ((0, _.Z)(t.location.query.login_verification_error) ? b[t.location.query.login_verification_error] : void 0),
                b = { BadSessionLoginVerification: m().f8ad0092, ExpiredLoginVerification: m().h2c7767e, OverLimitLoginVerificationAttempts: m().e83047c2, OfflineCodeSync: m().g4b108ee },
                Z = (0, f.Z)()
                    .propsFromState(() => ({ errorMessage: P, loginId: v, loginReturnPath: y.V_, loggedInUser: w.ZP.selectLoggedInUser }))
                    .propsFromActions(() => ({ setLoginReturnPath: y.Jm }))
                    .withAnalytics({ page: "login" });
            var S = n(138099),
                E = n(108362),
                x = n(731708),
                I = n(823161),
                z = n(366635),
                C = n(154003),
                V = n(520913),
                L = n(38293),
                M = n(652904),
                k = n(782826),
                D = n(725516);
            const U = "LoginPage_Continue_Button",
                q = m().a9be9b44,
                N = m().e55188f0,
                A = m().d55d8fe2,
                B = m().c3d89aca,
                F = m().g806008e;
            class H extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleContinuePress = () => {
                            const { analytics: e, history: t, location: n } = this.props,
                                { query: o } = n,
                                i = o && o.redirect_after_login ? o.redirect_after_login.toString() : void 0,
                                r = i && k.ZP.makeSafeForTwitterRedirect(i);
                            i && r ? (e.scribeAction("redirect"), window.location.assign(r)) : (e.scribeAction("redirecthome"), t.replace("/home"));
                        }),
                        (this._handleSwitchAccountPress = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribeAction("switch"), t.replace("/account/switch");
                        });
                }
                render() {
                    const { loggedInUser: e } = this.props;
                    return o.createElement(M.Z, null, o.createElement(L.Z, { title: q }), o.createElement(S.Z, { type: "full" }, o.createElement(E.Z, { style: [R.root, R.center], withGutter: !0 }, o.createElement(V.default, { style: R.icon }), o.createElement(x.ZP, { align: "center", role: "heading", size: "title4", style: R.heading, weight: "bold" }, N), o.createElement(I.default, { size: "jumbo", uri: e.profile_image_url_https }), o.createElement(z.Z, { badgeContext: "account", isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, screenName: e.screen_name, style: [R.gutter, R.center], withStackedLayout: !0 }), o.createElement(x.ZP, { align: "center", style: R.gutter }, A), o.createElement(C.ZP, { onPress: this._handleContinuePress, style: R.gutter, testID: U, type: "brandFilled" }, B), o.createElement(x.ZP, { align: "center", color: "link", onPress: this._handleSwitchAccountPress, role: "link", style: R.gutter }, F))));
                }
            }
            const T = (0, D.Z)(H, { page: "login", section: "continue" });
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
                    if (this._continueEnabled && i && !e) return o.createElement(T, { history: t, location: n, loggedInUser: i });
                    const c = (0, a.Z)(n.query) ? "" : (0, u.JN)(JSON.stringify(n.query)),
                        l = (0, r.ju)((0, p.BX)(n?.query?.redirect_after_login) ?? "");
                    l && s(l);
                    const d = c ? encodeURIComponent(JSON.stringify({ requested_variant: c })) : "",
                        g = d ? `/i/flow/login?input_flow_data=${d}` : "/i/flow/login";
                    return o.createElement(h.Z, { status: 301, to: g });
                }
                _unsetFlashMessage(e) {
                    const { errorMessage: t } = e;
                    t && (0, d.kT)(i.xE, { featureSwitches: this.context.featureSwitches });
                }
            }
            O.contextType = c.Z;
            const R = s.default.create((e) => ({ root: { marginTop: e.spaces.space20 }, container: { maxWidth: 400, marginHorizontal: "auto", width: "100%", paddingHorizontal: e.componentDimensions.gutterHorizontal }, icon: { alignSelf: "flex-start", color: e.colors.brandColor, height: e.spaces.space40 }, heading: { marginHorizontal: 0, marginTop: e.spaces.space32, marginBottom: e.spaces.space12 }, center: { flexDirection: "column", alignItems: "center" }, gutter: { marginVertical: e.componentDimensions.gutterVertical } })),
                J = Z(O);
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                s = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Login.5e0dc78a.js.map
