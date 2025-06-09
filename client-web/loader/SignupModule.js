"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.SignupModule"],
    {
        3196: (e, t, s) => {
            s.d(t, { Z: () => v });
            s(136728);
            var n = s(202784),
                i = s(99107),
                a = s(688715),
                o = s(154003),
                r = s(111677),
                l = s.n(r),
                p = s(261214),
                c = s(462775),
                u = s(182495),
                d = s(601798),
                _ = s(500002),
                h = s(443781),
                m = s(406837),
                b = s(950570),
                g = s(911318);
            const y = l().ib65b1c6,
                S = l().f55cebb8,
                w = l().dcc304d6,
                f = l().g61ed8a4,
                C = { clientId: g.fp, scope: "name email", usePopup: !0 };
            class k extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isScriptLoaded: !1 }),
                        (this._is3rdPartyIntegrationDisabled = (0, c.L)("responsive_web_3rd_party_category_sign_in_with_apple", this.context.featureSwitches)),
                        (this._isSSORedirectEnabled = this.context.featureSwitches.isTrue("responsive_web_sso_redirect_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_enabled")),
                        (this._getButtonLabel = () => {
                            const { buttonState: e } = this.props;
                            switch (e) {
                                case u.yX.LogIn:
                                    return S;
                                case u.yX.ContinueWith:
                                    return w;
                                default:
                                    return y;
                            }
                        }),
                        (this._initAppleIDAuth = () => {
                            const { AppleID: e } = window,
                                { fetchSsoInitToken: t } = this.props;
                            e &&
                                t(i.Bm.Apple).then(({ state: t }) => {
                                    e.auth.init({ ...C, redirectURI: (0, a.ju)("https://x.com"), state: t });
                                });
                        }),
                        (this._handleOnPress = () => {
                            const { AppleID: e } = window,
                                { analytics: t, buttonState: s, history: n, loginReturnPath: a, personalizationSettings: o, shouldPropagateP13nSettings: r, ssoInitTokens: l } = this.props,
                                { allowCookieUse: p, allowDeviceAccess: c, allowPartnerships: u, allowPersonalization: d } = o || {};
                            t.scribe({ component: "apple_sign_in", element: s, action: "click" }),
                                e.auth
                                    .signIn()
                                    .then((e) => {
                                        t.scribe({ component: "apple_sign_in", element: s, action: "success" });
                                        const o = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName;
                                        n.push({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: r && { allow_cookie_use: !!p, allow_device_personalization: !!c, allow_partnerships: !!u, allow_ads_personalization: !!d }, requested_variant: JSON.stringify({ display_name: o && `${e.user.name.firstName} ${e.user.name.lastName}`, id_token: e.authorization.id_token, provider: i.Bm.Apple, state: l[i.Bm.Apple], redirect_uri: this._isSSORedirectEnabled ? a : void 0 }) } } });
                                    })
                                    .catch((e) => {
                                        const { addToast: n } = this.props,
                                            { error: i } = e;
                                        i !== g.IN ? (t.scribe({ component: "apple_sign_in", element: s, action: "failure" }), n({ text: f })) : t.scribe({ component: "apple_sign_in", element: "auth", action: "user_closed_popup" });
                                    });
                        });
                }
                componentDidMount() {
                    this._is3rdPartyIntegrationDisabled ||
                        d.Z.inject({
                            callback: () => {
                                this._initAppleIDAuth(), this.setState({ isScriptLoaded: !0 });
                            },
                            scriptId: "signInWithAppleJsLibrary",
                            src: "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
                        });
                }
                render() {
                    const { buttonSize: e, style: t } = this.props,
                        { isScriptLoaded: s } = this.state,
                        i = this._getButtonLabel();
                    return this._is3rdPartyIntegrationDisabled ? null : n.createElement(o.ZP, { backgroundColor: "white", borderColor: "gray200", children: i, color: "alwaysBaseGray1100", disabled: !s, fontWeight: "normal", icon: n.createElement(p.default, null), onPress: this._handleOnPress, size: e, style: t, testID: b.Z.apple });
                }
            }
            (k.contextType = h.rC), (k.defaultProps = { buttonSize: "xLarge", buttonState: "signup" });
            const v = (0, _.ZP)((0, m.Z)(k));
        },
        173446: (e, t, s) => {
            s.r(t), s.d(t, { SignupModuleContainer: () => v, default: () => P });
            var n = s(202784),
                i = s(325686),
                a = s(392237),
                o = s(537392),
                r = s(844685),
                l = s(731708),
                p = s(154003),
                c = s(111677),
                u = s.n(c),
                d = s(443781),
                _ = s(3196),
                h = s(487659),
                m = s(911318),
                b = s(880647),
                g = s(182495);
            const y = u().a565833e,
                S = u().c6b51af8,
                w = u().ie8e1ffc,
                f = a.default.create((e) => ({ buttonContainer: { marginTop: e.spaces.space16, marginBottom: e.spaces.space16, marginStart: e.spaces.space12, marginEnd: e.spaces.space12 }, ssoButtonStyles: { marginBottom: e.spaces.space12 }, buttonStyles: { width: m.fI, height: e.spaces.space40 }, narrowButtonStyles: { width: m.ND }, moduleContent: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 }, footerLabel: { marginBottom: e.spaces.space16 } })),
                C = ({ onSignupClick: e }) => {
                    const { featureSwitches: t } = n.useContext(d.rC),
                        s = (0, g.BG)(t),
                        { signUpLabel: a } = (0, g.M5)(t),
                        c = (0, o.Zx)(({ containerWidth: e }) => b.Z.isTwoColumnSmallLayout(e));
                    return n.createElement(i.Z, { "aria-label": y, role: "summary" }, n.createElement(r.Z, { text: S }), n.createElement(l.ZP, { color: "gray700", size: "subtext2", style: f.moduleContent }, w), n.createElement(i.Z, { style: f.buttonContainer }, n.createElement(n.Fragment, null, n.createElement(h.Z, { buttonSize: "medium", buttonState: s, customWidth: c ? m.ND : void 0, displayType: m.qv.Button, style: [f.ssoButtonStyles, f.buttonStyles, c && f.narrowButtonStyles] }), n.createElement(_.Z, { buttonSize: "medium", buttonState: s, style: [f.ssoButtonStyles, f.buttonStyles, c && f.narrowButtonStyles] }), n.createElement(p.ZP, { backgroundColor: "white", borderColor: "gray200", color: "alwaysBaseGray1100", link: { pathname: "/i/flow/signup", state: { input: { requested_variant: JSON.stringify({ signup_type: g.mk }) } } }, onPress: e, role: "link", size: "medium", style: [f.buttonStyles, c && f.narrowButtonStyles] }, a))), n.createElement(l.ZP, { color: "gray700", size: "subtext2", style: [f.moduleContent, f.footerLabel] }, g.K2));
                };
            var k = s(725516);
            class v extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSignupClick = () => {
                            const { analytics: e } = this.props;
                            e.scribeAction("signup");
                        });
                }
                render() {
                    return n.createElement(C, { onSignupClick: this._handleSignupClick });
                }
            }
            const P = (0, k.Z)(v, { component: "signup_module" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.SignupModule.c067ba8a.js.map
