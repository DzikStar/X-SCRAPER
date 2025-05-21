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
                g = n(332920),
                m = n.n(g),
                _ = n(676145),
                f = n(668214),
                y = n(390387),
                w = n(919022);
            const P = (e, t) => t.location.query && ((0, _.Z)(t.location.query.username_or_email) ? t.location.query.username_or_email : void 0),
                b = (e, t) => y.CO(e) || ((0, _.Z)(t.location.query.login_verification_error) ? Z[t.location.query.login_verification_error] : void 0),
                Z = { BadSessionLoginVerification: m().f8ad0092, ExpiredLoginVerification: m().h2c7767e, OverLimitLoginVerificationAttempts: m().e83047c2, OfflineCodeSync: m().g4b108ee },
                v = (0, f.Z)()
                    .propsFromState(() => ({ errorMessage: b, loginId: P, loginReturnPath: y.V_, loggedInUser: w.ZP.selectLoggedInUser }))
                    .propsFromActions(() => ({ setLoginReturnPath: y.Jm }))
                    .withAnalytics({ page: "login" });
            var S = n(138099),
                E = n(108362),
                x = n(731708),
                C = n(823161),
                I = n(366635),
                L = n(154003),
                z = n(520913),
                k = n(38293),
                D = n(652904),
                M = n(782826),
                U = n(725516);
            const q = "LoginPage_Continue_Button",
                N = m().a9be9b44,
                A = m().e55188f0,
                V = m().d55d8fe2,
                B = m().c3d89aca,
                F = m().g806008e;
            class H extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleContinuePress = () => {
                            const { analytics: e, history: t, location: n } = this.props,
                                { query: o } = n,
                                i = o && o.redirect_after_login ? o.redirect_after_login.toString() : void 0,
                                r = i && M.ZP.makeSafeForTwitterRedirect(i);
                            i && r ? (e.scribeAction("redirect"), window.location.assign(r)) : (e.scribeAction("redirecthome"), t.replace("/home"));
                        }),
                        (this._handleSwitchAccountPress = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribeAction("switch"), t.replace("/account/switch");
                        });
                }
                render() {
                    const { loggedInUser: e } = this.props;
                    return o.createElement(D.Z, null, o.createElement(k.Z, { title: N }), o.createElement(S.Z, { type: "full" }, o.createElement(E.Z, { style: [R.root, R.center], withGutter: !0 }, o.createElement(z.default, { style: R.icon }), o.createElement(x.ZP, { align: "center", role: "heading", size: "title4", style: R.heading, weight: "bold" }, A), o.createElement(C.default, { size: "jumbo", uri: e.profile_image_url_https }), o.createElement(I.Z, { badgeContext: "account", isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, screenName: e.screen_name, style: [R.gutter, R.center], withStackedLayout: !0 }), o.createElement(x.ZP, { align: "center", style: R.gutter }, V), o.createElement(L.ZP, { onPress: this._handleContinuePress, style: R.gutter, testID: q, type: "brandFilled" }, B), o.createElement(x.ZP, { align: "center", color: "link", onPress: this._handleSwitchAccountPress, role: "link", style: R.gutter }, F))));
                }
            }
            const T = (0, U.Z)(H, { page: "login", section: "continue" });
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
                J = v(O);
        },
        41065: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                s = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Login.6f8dcc2a.js.map
