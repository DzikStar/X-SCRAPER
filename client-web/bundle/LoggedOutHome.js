"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LoggedOutHome", "bundle.AudioSpaceDetail"],
    {
        651930: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                a = n(99107),
                i = n(272175),
                r = n(111677);
            const s = n.n(r)().c39b0e24,
                l = ({ deepLink: e }) => {
                    const t = s;
                    return e ? o.createElement(i.ql, null, o.createElement("meta", { content: e, property: "al:ios:url" }), o.createElement("meta", { content: a.AF, property: "al:ios:app_store_id" }), o.createElement("meta", { content: t, property: "al:ios:app_name" }), o.createElement("meta", { content: e, property: "al:android:url" }), o.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), o.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                a = n(272175);
            const i = (e) => {
                const { canonical: t, description: n = "", image: i, imageAlt: r, imageH: s, imageType: l, imageW: c, title: p, ttl: d, type: u } = e;
                return o.createElement(a.ql, null, u ? o.createElement("meta", { content: u, property: "og:type" }) : null, t ? o.createElement("meta", { content: t, property: "og:url" }) : null, p ? o.createElement("meta", { content: p, property: "og:title" }) : null, o.createElement("meta", { content: n, property: "og:description" }), i ? o.createElement("meta", { content: i, property: "og:image" }) : null, l ? o.createElement("meta", { content: l, property: "og:image:type" }) : null, c ? o.createElement("meta", { content: c, property: "og:image:width" }) : null, s ? o.createElement("meta", { content: s, property: "og:image:height" }) : null, r ? o.createElement("meta", { content: r, property: "og:image:alt" }) : null, d ? o.createElement("meta", { content: d, property: "og:ttl" }) : null);
            };
        },
        105019: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(202784),
                a = n(107267),
                i = n(31667),
                r = n(952793),
                s = n(964814),
                l = n(885824);
            function c(e) {
                return !["/i/flow/login"].includes(e);
            }
            const p = (0, s.Z)(function (e = { hideCookieBannerPicker: !1 }) {
                const t = (function () {
                        const e = (0, a.useLocation)(),
                            [t, n] = o.useState(() => c(e.pathname));
                        return (
                            o.useEffect(() => {
                                n(c(e.pathname));
                            }, [n, e]),
                            t
                        );
                    })(),
                    n = (0, r.hC)("rweb_conf_only_enabled");
                return e.hideCookieBannerPicker || !t || n ? null : o.createElement(i.Z, null, o.createElement(l.Z, null));
            });
        },
        885824: (e, t, n) => {
            n.d(t, { Z: () => v });
            var o = n(202784),
                a = n(666305),
                i = n(2138),
                r = n(443781),
                s = n(325686),
                l = n(688715),
                c = n(731708),
                p = n(67369),
                d = n(154003),
                u = n(392237),
                m = n(111677),
                g = n.n(m),
                h = n(725516),
                b = n(421023),
                f = n(6116);
            const _ = g().d8817e36,
                y = g().b9288ee6,
                S = g().i1390ec2,
                w = (0, l.ju)("https://help.x.com/rules-and-policies/twitter-cookies");
            function B() {
                const e = o.createElement(g().I18NFormatMessage, { $i18n: "e4af7661" }, o.createElement(c.ZP, { color: "buttonWhite", link: w, withUnderline: !0 }, g().ga3121d5));
                return o.createElement(E, { body: e, title: S });
            }
            function x(e) {
                const t = o.createElement(g().I18NFormatMessage, { $i18n: "a268632b" }, o.createElement(c.ZP, { color: "buttonWhite", onClick: e.onExpand, role: "button", withUnderline: !0 }, g().g482c949));
                return o.createElement(E, { body: t, title: S });
            }
            function E(e) {
                return o.createElement(s.Z, { style: C.cookieComplianceMessageWrap }, o.createElement(c.ZP, { color: "buttonWhite", size: "headline2", weight: "medium" }, e.title), o.createElement(c.ZP, { color: "buttonWhite", size: "subtext2", style: C.cookieComplianceExpandedDetails }, e.body));
            }
            const k = o.forwardRef(function (e, t) {
                    const n = (0, h.z)(),
                        { expand: a, isExpanded: i } = (function () {
                            const [e, t] = o.useState(!1),
                                n = (0, h.z)();
                            return {
                                isExpanded: e,
                                expand: () => {
                                    n.scribe({ ...b.A, action: "click", element: "expand_message" }), t(!0);
                                },
                            };
                        })(),
                        { acceptAllCookies: r, isBannerOpen: l, refuseNonEssentialCookies: c } = (0, f.O)();
                    o.useEffect(() => {
                        l && n.scribe({ ...b.A, action: "impression" });
                    }, [n, l]);
                    const m = (0, p.pj)();
                    return l ? o.createElement(s.Z, { ref: t, style: [C.root, m && C.rootNarrow] }, i ? o.createElement(B, null) : o.createElement(x, { onExpand: a }), o.createElement(s.Z, { style: [C.buttonContainer, m && C.buttonContainerNarrow] }, o.createElement(d.ZP, { dominantColor: "alwaysBaseGray1100", onPress: r, size: "medium", style: [C.ctaButton, m && C.ctaButtonNarrow], type: u.default.isDarkMode() ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" }, _), o.createElement(d.ZP, { dominantColor: "alwaysBaseGray1100", onPress: c, size: "medium", style: [C.ctaButton, m && C.ctaButtonNarrow], type: u.default.isDarkMode() ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" }, y))) : null;
                }),
                C = u.default.create((e) => ({ root: { alignItems: "center", boxShadow: e.boxShadows.xSmall, flexDirection: "row", width: "100%", justifyContent: "space-evenly", paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal, backgroundColor: e.colors.buttonBlack }, rootNarrow: { flexDirection: "column", paddingVertical: e.componentDimensions.gutterVertical, paddingTop: e.spaces.space20, backgroundColor: e.colors.buttonBlack }, buttonContainer: { flexDirection: "column", marginVertical: e.spaces.space16, marginStart: e.spaces.space20 }, buttonContainerNarrow: { width: "100%", maxWidth: 550, marginStart: 0, flexDirection: "column", flexWrap: "wrap" }, ctaButton: { height: e.spaces.space40, marginBottom: e.spaces.space8, width: 420, flexGrow: 0, flexShrink: 0 }, ctaButtonNarrow: { marginStart: 0, width: "100%" }, cookieComplianceMessageWrap: { flex: 1, maxWidth: 640 }, cookieComplianceExpandedDetails: { marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, background: { backgroundColor: e.colors.buttonBlack } }));
            function Z(e, t = 100) {
                return (function (e, t = 100) {
                    const n = o.useMemo(
                        () =>
                            (0, i.Z)((t) => {
                                if (!e) return;
                                if (!t) return void e(null);
                                const n = t.getBoundingClientRect();
                                n && e(n);
                            }, t),
                        [e, t],
                    );
                    return o.useCallback(
                        (t) => {
                            const o = t;
                            if ("function" != typeof e) return;
                            const i = n.bind(null, o);
                            return (
                                i(),
                                window.addEventListener("resize", i),
                                o && a.Z.observe(o, i),
                                () => {
                                    window.removeEventListener("resize", i), a.Z.unobserveAll(o), n.cancel();
                                }
                            );
                        },
                        [e, n],
                    );
                })(
                    o.useMemo(
                        () =>
                            "function" == typeof e
                                ? (t) => {
                                      e(t ? t.height : null);
                                  }
                                : void 0,
                        [e],
                    ),
                );
            }
            function v(e) {
                const { featureSwitches: t } = o.useContext(r.rC),
                    n = Z(e.onHeightChange);
                return t.isTrue("responsive_web_cookie_compliance_banner_enabled") ? o.createElement(k, { ref: n }) : null;
            }
        },
        664918: (e, t, n) => {
            n.d(t, { D0: () => l, c$: () => p, fD: () => s, iB: () => m, jk: () => c });
            var o = n(366097),
                a = n(163889);
            const i = 2,
                r = 1e3,
                s = Object.freeze({ AcceptAllCookies: "acceptAllCookies", RefuseNonEssentialCookies: "refuseNonEssentialCookies", Invalid: "invalid", NotSet: "notSet" });
            function l(e) {
                const t = (0, o.bL)(e);
                return t ? (d(t) ? (u(t) ? (t[1] ? s.AcceptAllCookies : t[2] ? s.RefuseNonEssentialCookies : ((0, a.ZP)("Invalid consent signal state"), s.Invalid)) : s.NotSet) : s.Invalid) : s.NotSet;
            }
            function c(e) {
                (0, o.kA)({ consent_version: i, text_version: r, 1: !0 }, e);
            }
            function p(e) {
                (0, o.kA)({ consent_version: i, text_version: r, 2: !0 }, e);
            }
            function d(e) {
                return !(e[1] && e[2]);
            }
            function u(e) {
                return e[1] || e[2];
            }
            function m(e) {
                const t = (0, o.bL)(e);
                return !t || !d(t) || !u(t) || t.consent_version < i || t.text_version < r;
            }
        },
        421023: (e, t, n) => {
            n.d(t, { A: () => o });
            const o = { page: "cookie_compliance_banner" };
        },
        6116: (e, t, n) => {
            n.d(t, { O: () => c });
            var o = n(202784),
                a = n(323265),
                i = n(725516),
                r = n(443781),
                s = n(664918),
                l = n(421023);
            function c() {
                const e = (0, i.z)(),
                    { featureSwitches: t } = o.useContext(r.rC),
                    n = !!a.ZP.getTwitterAppVersion(),
                    [c, p] = o.useState(() => s.iB(t) && !n);
                return {
                    isBannerOpen: c,
                    acceptAllCookies() {
                        e.scribe({ ...l.A, action: "click", element: "accept_all" }), s.jk(t), p(!1);
                    },
                    refuseNonEssentialCookies() {
                        e.scribe({ ...l.A, action: "click", element: "refuse_non_essential" }), s.c$(t), p(!1);
                    },
                };
            }
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(202784),
                a = n(500002),
                i = n(668214),
                r = n(997174),
                s = n(118823);
            const l = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: r.NH }))
                .withAnalytics();
            class c extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: o },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: i, search: r },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const c = a || s;
                    ((c && a !== s) || (!c && n !== i) || o !== r || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const p = (0, a.ZP)(l(c));
        },
        3196: (e, t, n) => {
            n.d(t, { Z: () => E });
            n(136728);
            var o = n(202784),
                a = n(99107),
                i = n(688715),
                r = n(154003),
                s = n(111677),
                l = n.n(s),
                c = n(261214),
                p = n(462775),
                d = n(182495),
                u = n(601798),
                m = n(500002),
                g = n(443781),
                h = n(406837),
                b = n(950570),
                f = n(911318);
            const _ = l().ib65b1c6,
                y = l().f55cebb8,
                S = l().dcc304d6,
                w = l().g61ed8a4,
                B = { clientId: f.fp, scope: "name email", usePopup: !0 };
            class x extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isScriptLoaded: !1 }),
                        (this._is3rdPartyIntegrationDisabled = (0, p.L)("responsive_web_3rd_party_category_sign_in_with_apple", this.context.featureSwitches)),
                        (this._isSSORedirectEnabled = this.context.featureSwitches.isTrue("responsive_web_sso_redirect_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_enabled")),
                        (this._getButtonLabel = () => {
                            const { buttonState: e } = this.props;
                            switch (e) {
                                case d.yX.LogIn:
                                    return y;
                                case d.yX.ContinueWith:
                                    return S;
                                default:
                                    return _;
                            }
                        }),
                        (this._initAppleIDAuth = () => {
                            const { AppleID: e } = window,
                                { fetchSsoInitToken: t } = this.props;
                            e &&
                                t(a.Bm.Apple).then(({ state: t }) => {
                                    e.auth.init({ ...B, redirectURI: (0, i.ju)("https://x.com"), state: t });
                                });
                        }),
                        (this._handleOnPress = () => {
                            const { AppleID: e } = window,
                                { analytics: t, buttonState: n, history: o, loginReturnPath: i, personalizationSettings: r, shouldPropagateP13nSettings: s, ssoInitTokens: l } = this.props,
                                { allowCookieUse: c, allowDeviceAccess: p, allowPartnerships: d, allowPersonalization: u } = r || {};
                            t.scribe({ component: "apple_sign_in", element: n, action: "click" }),
                                e.auth
                                    .signIn()
                                    .then((e) => {
                                        t.scribe({ component: "apple_sign_in", element: n, action: "success" });
                                        const r = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName;
                                        o.push({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: s && { allow_cookie_use: !!c, allow_device_personalization: !!p, allow_partnerships: !!d, allow_ads_personalization: !!u }, requested_variant: JSON.stringify({ display_name: r && `${e.user.name.firstName} ${e.user.name.lastName}`, id_token: e.authorization.id_token, provider: a.Bm.Apple, state: l[a.Bm.Apple], redirect_uri: this._isSSORedirectEnabled ? i : void 0 }) } } });
                                    })
                                    .catch((e) => {
                                        const { addToast: o } = this.props,
                                            { error: a } = e;
                                        a !== f.IN ? (t.scribe({ component: "apple_sign_in", element: n, action: "failure" }), o({ text: w })) : t.scribe({ component: "apple_sign_in", element: "auth", action: "user_closed_popup" });
                                    });
                        });
                }
                componentDidMount() {
                    this._is3rdPartyIntegrationDisabled ||
                        u.Z.inject({
                            callback: () => {
                                this._initAppleIDAuth(), this.setState({ isScriptLoaded: !0 });
                            },
                            scriptId: "signInWithAppleJsLibrary",
                            src: "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
                        });
                }
                render() {
                    const { buttonSize: e, style: t } = this.props,
                        { isScriptLoaded: n } = this.state,
                        a = this._getButtonLabel();
                    return this._is3rdPartyIntegrationDisabled ? null : o.createElement(r.ZP, { backgroundColor: "white", borderColor: "gray200", children: a, color: "alwaysBaseGray1100", disabled: !n, fontWeight: "normal", icon: o.createElement(c.default, null), onPress: this._handleOnPress, size: e, style: t, testID: b.Z.apple });
                }
            }
            (x.contextType = g.rC), (x.defaultProps = { buttonSize: "xLarge", buttonState: "signup" });
            const E = (0, m.ZP)((0, h.Z)(x));
        },
        826033: (e, t, n) => {
            n.r(t), n.d(t, { CookieComplianceBannerPadder: () => oe, LoggedOutHome: () => ae, default: () => re });
            var o = n(202784),
                a = n(272175),
                i = n(325686),
                r = n(688715),
                s = n(154003),
                l = n(731708),
                c = n(420412),
                p = n(392237),
                d = n(537392),
                u = n(111677),
                m = n.n(u),
                g = n(956272),
                h = n(41065),
                b = n(194661),
                f = n(99223),
                _ = n(520913),
                y = n(640872),
                S = n(31667),
                w = n(788994),
                B = n(651930),
                x = n(572067),
                E = n(105019),
                k = n(885824),
                C = n(664918),
                Z = n(38293),
                v = n(652904),
                P = n(3196),
                I = n(487659),
                T = n(911318),
                z = n(655352),
                W = n(182495),
                D = n(668214),
                A = n(390387);
            const L = (0, D.Z)()
                    .propsFromState(() => ({ userLanguage: A.VT }))
                    .withAnalytics({ page: "front" }),
                N = 380,
                M = 1.15 * N,
                H = 500,
                O = 1e3,
                G = 350,
                j = "signupButton",
                F = "loginButton",
                R = [
                    { text: m().a62c9c34, Icon: g.default },
                    { text: m().cf39fca2, Icon: h.default },
                    { text: m().j86184fe, Icon: b.default },
                ],
                V = m().ac2035f2,
                U = m().h0af9418,
                $ = m().eb022176,
                q = m().eba1b198,
                J = m().fa811c30,
                K = m().b4bdfb3e,
                X = m().f991cfaa,
                Y = m().e5b0e544,
                Q = m().a4298bc0,
                ee = m().j3f49ff6,
                te = m().d65555c2,
                ne = (0, r.ju)("https://x.com/");
            function oe(e) {
                const [t, n] = o.useState(0),
                    a = o.useCallback((e) => {
                        n(e || 0);
                    }, []);
                return o.createElement(o.Fragment, null, o.createElement(E.Z.Configure, { hideCookieBannerPicker: !0 }), o.createElement(S.Z, null, o.createElement(k.Z, { onHeightChange: a })), o.createElement(i.Z, { style: [{ marginBottom: t }, ie.bannerPadderChildren] }, e.children));
            }
            class ae extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._isPlaceholderSIWGButtonEnabled = this.context.featureSwitches.isTrue("responsive_web_placeholder_siwg_button_enabled")),
                        (this._cookieComplianceGingersnapEnabled = this.context.featureSwitches.isTrue("responsive_web_cookie_compliance_gingersnap_enabled")),
                        (this._showMarchMadnessPopup = this.context.featureSwitches.isTrue("march_madness_brackets_enabled_logout_popup")),
                        (this._showPageRedesign = this.context.featureSwitches.isTrue("responsive_web_logged_out_redesign_enabled")),
                        (this._showGrokButton = this.context.featureSwitches.isTrue("responsive_web_logged_out_grok_button_enabled")),
                        (this._showBlueBrandFilledButton = this.context.featureSwitches.isTrue("responsive_web_logged_out_blue_brand_button_enabled")),
                        (this._renderGrokButton = (e, t, n) => {
                            const { analytics: a } = this.props,
                                i = t ? ie.ctaButton : ie.ctaButtonMobile,
                                r = () => {
                                    a.scribe({ component: "grok_button_logout_page", element: "grok", action: "click" });
                                };
                            return this._showGrokButton ? (a.scribe({ component: "grok_button_logout_page", element: "grok", action: "impression" }), o.createElement(s.ZP, { icon: o.createElement(f.default, null), link: "desktop" !== t ? "https://grok.com/download" : "https://grok.com/", onPress: r, style: [i, ie.ssoButtonStyles, ie.redesignedSSOButtonStyles, { alignSelf: e }], textSizeOverride: "body" }, o.createElement(l.ZP, { style: ie.grokLabel, weight: "medium" }, "desktop" !== t ? K : X))) : null;
                        }),
                        (this.renderBody = (e, t) => {
                            const n = "desktop" === e;
                            return this._showPageRedesign ? o.createElement(i.Z, { style: [ie.main, ie.mainRedesignedWide] }, this._renderRedesignedCTA({ deviceSize: e, ssoButtonsWidth: t }), this._renderGrokButton("center", e, t)) : o.createElement(i.Z, { style: [ie.main, n && ie.mainWide] }, this._renderCTA({ deviceSize: e, ssoButtonsWidth: t }), n && this._renderHero());
                        }),
                        (this._renderLoginSignupButtons = (e, t) => {
                            const n = e ? ie.ctaButton : ie.ctaButtonMobile,
                                { signUpLabel: a } = (0, W.M5)(this.context.featureSwitches);
                            return o.createElement(i.Z, null, o.createElement(o.Fragment, null, this._renderSSOButtons(e, t), o.createElement(i.Z, { style: ie.gapContainer }, o.createElement(c.Z, { label: o.createElement(l.ZP, { children: te }) })), o.createElement(s.ZP, { link: { pathname: "/i/flow/signup", state: { input: { requested_variant: JSON.stringify({ signup_type: W.mk }) } } }, onPress: this._handleSignupButton, size: "medium", style: [n, "tablet" === e && ie.ctaButtonSplitSpacing, ie.ssoButtonStyles], testID: j, type: "brandFilled" }, a), o.createElement(l.ZP, { color: "gray700", size: "subtext3", style: [n, { width: T.fI }] }, W.K2), o.createElement(i.Z, { style: ie.signInButtonContainer }, o.createElement(l.ZP, { size: "headline2", style: n, weight: "bold" }, J), o.createElement(s.ZP, { link: "/login", onPress: this._handleLoginButton, size: "medium", style: [n, "tablet" === e && ie.ctaButtonSplitSpacing, ie.ssoButtonStyles], testID: F, type: "brandOutlined" }, Y))));
                        }),
                        (this._renderRedesignedLoginSignupButtons = (e, t) => {
                            const n = e ? ie.ctaButton : ie.ctaButtonMobile;
                            return o.createElement(i.Z, null, o.createElement(o.Fragment, null, this._renderSSOButtons(e, t), o.createElement(i.Z, { style: ie.redesignedGapContainer }, o.createElement(c.Z, { borderColor: "gray400", label: o.createElement(l.ZP, { children: te, color: "alwaysDarkGray700" }) })), o.createElement(i.Z, null, o.createElement(s.ZP, { fontWeight: "medium", link: { pathname: "/i/flow/signup", state: { input: { requested_variant: JSON.stringify({ signup_type: W.mk }) } } }, onPress: this._handleSignupButton, style: [n, "tablet" === e && ie.ctaButtonSplitSpacing, ie.ssoButtonStyles, ie.redesignedSSOButtonStyles], testID: j, textSizeOverride: "body", type: this._showBlueBrandFilledButton ? "brandFilled" : "primaryFilled" }, $), o.createElement(l.ZP, { color: "gray700", size: "subtext3", style: [ie.legalText, n, { width: T.fI }] }, W.K2)), o.createElement(i.Z, { style: ie.redesignedSignInButtonContainer }, o.createElement(l.ZP, { size: "body", style: ie.labelText, weight: "bold" }, J), o.createElement(s.ZP, { backgroundColor: "light" === p.default.theme.paletteName ? "transparent" : "buttonBlack", borderColor: "light" === p.default.theme.paletteName ? void 0 : "transparent", color: "primary", fontWeight: "medium", link: "/login", onPress: this._handleLoginButton, style: [n, "tablet" === e && ie.ctaButtonSplitSpacing, ie.ssoButtonStyles, ie.redesignedSSOButtonStyles, ie.redesignedSignInButton], testID: F }, Y))));
                        }),
                        (this._renderSSOButtons = (e, t) => {
                            const { buttonState: n, isCookieCompliant: a } = this.state,
                                i = e ? ie.ctaButton : ie.ctaButtonMobile,
                                r = { ...ie.ssoButtonStyles, width: t };
                            return o.createElement(o.Fragment, null, o.createElement(I.Z, { buttonSize: "medium", buttonState: n, customWidth: t, displayType: T.qv.Button, isCookieCompliant: this._cookieComplianceGingersnapEnabled && this._isPlaceholderSIWGButtonEnabled ? a : void 0, onPress: this._handleCookieCompliance, style: [i, "tablet" === e && ie.ctaButtonSplitSpacing, r] }), o.createElement(P.Z, { buttonSize: "medium", buttonState: n, style: [i, "tablet" === e && ie.ctaButtonSplitSpacing, ie.ssoButtonStyles, ie.appleSsoButton] }));
                        }),
                        (this._handleSignupButton = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ section: "front", component: "signup_callout", element: "form", action: "signup" });
                        }),
                        (this._handleLoginButton = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ section: "front", component: "signup_callout", element: "form", action: "login" });
                        }),
                        (this._handleCookieCompliance = () => {
                            this.setState({ isCookieCompliant: !0 });
                        }),
                        (this.state = { buttonState: (0, W.BG)(this.context.featureSwitches), isCookieCompliant: (0, C.D0)(this.context.featureSwitches) === C.fD.AcceptAllCookies });
                }
                componentDidMount() {
                    (0, z.ZP)() && this.context.setSideNavSupport(!1);
                }
                componentWillUnmount() {
                    (0, z.ZP)() && this.context.setSideNavSupport(!0);
                }
                componentDidUpdate() {
                    (0, z.ZP)() && this.context.setSideNavSupport(!1);
                }
                render() {
                    const { analytics: e } = this.props;
                    return o.createElement(
                        v.Z,
                        null,
                        o.createElement(Z.Z, { title: Q }),
                        o.createElement(x.Z, { canonical: ne, description: ee, title: Q, type: "website" }),
                        o.createElement(B.Z, { deepLink: "twitter://" }),
                        o.createElement(a.ql, null, o.createElement("meta", { content: "NOODP", name: "robots" }), o.createElement("meta", { content: ee, name: "description" })),
                        o.createElement(d.ZP, null, ({ windowHeight: t, windowWidth: n }) => {
                            const { deviceSize: a, ssoButtonsWidth: r } = ((e) => ({ deviceSize: e > O ? "desktop" : e > H ? "tablet" : void 0, ssoButtonsWidth: e < G ? T.ND : T.fI }))(n);
                            return o.createElement(i.Z, { style: ie.root }, this.renderBody(a, r), o.createElement(oe, null, o.createElement(w.Z, { align: "center", analytics: e, isMobile: "desktop" !== a })));
                        }),
                    );
                }
                _renderHero() {
                    return o.createElement(i.Z, { style: [ie.block, ie.communication, ie.blockHero] }, o.createElement(i.Z, { style: ie.blockImg }, o.createElement(_.default, { style: ie.twitterIconHero })));
                }
                _renderCommunicationItems() {
                    const e = R.length;
                    return o.createElement(
                        i.Z,
                        { style: ie.communicationItems },
                        R.map(({ Icon: t, text: n }, a) => {
                            const r = a + 1 === e;
                            return o.createElement(i.Z, { key: n, style: [ie.communicationItem, r && ie.communicationItemLast] }, o.createElement(t, { style: ie.communicationItemIcon }), o.createElement(l.ZP, { color: "white", size: "headline1", style: ie.communicationItemText, weight: "bold" }, n));
                        }),
                    );
                }
                _renderCTA({ deviceSize: e, ssoButtonsWidth: t }) {
                    return o.createElement(i.Z, { style: [ie.block, ie.blockCTA, "tablet" === e && ie.blockTabletCTA] }, o.createElement(i.Z, { style: [ie.blockInnerWrapper, "desktop" === e && ie.blockInnerWrapperWide] }, "desktop" === e ? null : o.createElement(_.default, { style: ie.twitterIcon }), o.createElement(l.ZP, { extendedWidth: !0, style: [e ? ie.ctaTitleLarge : ie.ctaTitle, this._showMarchMadnessPopup && { marginTop: 10, marginBottom: 35 }], weight: "bold" }, q), o.createElement(l.ZP, { extendedWidth: !0, size: e ? "title2" : "title4", style: e ? ie.ctaTextLarge : ie.ctaText, weight: "bold" }, V), this._renderLoginSignupButtons(e, t), this._renderGrokButton("flex-start", e, t)));
                }
                _renderRedesignedCTA({ deviceSize: e, ssoButtonsWidth: t }) {
                    return o.createElement(i.Z, { style: ie.block }, o.createElement(i.Z, null, o.createElement(_.default, { style: ie.redesignedXIcon }), o.createElement(l.ZP, { size: "title4", style: [ie.redesignedCtaText, e && ie.ctaTextLarge], weight: "bold" }, U), this._renderRedesignedLoginSignupButtons(e, t)));
                }
            }
            ae.contextType = y.Z;
            const ie = p.default.create((e) => ({
                    appleSsoButton: { marginBottom: 0 },
                    bannerPadderChildren: { transitionProperty: "margin-bottom", transitionDuration: "100ms" },
                    block: { justifyContent: "center", padding: e.spaces.space16 },
                    blockCTA: { minWidth: "45vw" },
                    blockHero: { flex: 1, padding: 0, minHeight: "45vh" },
                    blockImg: { ...p.default.absoluteFillObject, flex: 1, resizeMode: "cover", justifyContent: "center" },
                    blockInnerWrapper: { width: "100%", padding: e.spaces.space20 },
                    blockInnerWrapperWide: { minWidth: `${M}px`, maxWidth: "760px" },
                    blockTabletCTA: { maxWidth: "600px", margin: "auto", width: "100%" },
                    bottomButton: { flexGrow: 1, maxWidth: "180px" },
                    bottomButtonLeft: { marginEnd: "10px" },
                    bottomButtonRight: { marginStart: "10px" },
                    bottomButtonsBlock: { flexDirection: "row", paddingTop: e.spaces.space40, paddingBottom: e.spaces.space32 },
                    communication: { overflow: "hidden" },
                    communicationItem: { flexDirection: "row", marginBottom: "40px" },
                    communicationItemIcon: { color: e.colors.white, flexShrink: 0, fontSize: e.fontSizes.title4 },
                    communicationItemLast: { marginBottom: 0 },
                    communicationItems: { alignSelf: "center", maxWidth: "380px", paddingVertical: e.spaces.space16 },
                    communicationItemText: { lineHeight: "30px", marginStart: e.spaces.space16 },
                    ctaButton: { marginBottom: e.spaces.space20, maxWidth: "380px", flex: 1 },
                    ctaButtonMobile: { marginBottom: e.spaces.space16 },
                    ctaButtonSplitSpacing: { marginEnd: e.spaces.space20 },
                    ctaText: { marginBottom: e.spaces.space20 },
                    ctaTextLarge: { marginBottom: e.spaces.space32 },
                    ctaTitle: { fontSize: e.spaces.space40, letterSpacing: -0.8, lineHeight: `${p.default.theme.spacesPx.space40 + p.default.theme.spacesPx.space12}px`, marginVertical: e.spaces.space40 },
                    ctaTitleLarge: { fontSize: e.spaces.space64, letterSpacing: -1.2, lineHeight: `${p.default.theme.spacesPx.space64 + p.default.theme.spacesPx.space20}px`, marginVertical: e.spaces.space48 },
                    gapContainer: { marginVertical: e.spaces.space4, maxWidth: "380px", width: T.fI },
                    grokButton: { alignSelf: "flex-start" },
                    grokLabel: { paddingStart: e.spaces.space4 },
                    happeningButton: { marginBottom: e.spaces.space16 },
                    heroContainer: { alignItems: "center", justifyContent: "center", marginBottom: p.default.theme.spaces.space16 },
                    inlineSignupText: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 24 },
                    joinToday: { marginTop: e.spaces.space64, marginBottom: e.spaces.space16 },
                    labelText: { marginEnd: 4 },
                    legalText: { textAlign: "center" },
                    main: { minHeight: "auto" },
                    mainRedesignedWide: { flex: "auto", justifyContent: "center", alignSelf: "center" },
                    mainWide: { flex: "auto", flexDirection: "row-reverse" },
                    redesignedCtaText: { alignSelf: "center", marginBottom: e.spaces.space24 },
                    redesignedGapContainer: { marginVertical: e.spaces.space16, maxWidth: "380px", width: T.fI },
                    redesignedSignInButton: { marginTop: e.spaces.space16 },
                    redesignedSignInButtonContainer: { marginTop: p.default.theme.spaces.space16, display: "flex", flexDirection: "column", alignItems: "center" },
                    redesignedSSOButtonStyles: { paddingTop: e.spaces.space2, paddingBottom: e.spaces.space2 },
                    redesignedXIcon: { alignSelf: "center", color: e.colors.brandColor, height: "4rem", paddingBottom: e.spaces.space24 },
                    root: { flex: 1 },
                    seeWhatsHappening: { marginTop: e.spaces.space20 },
                    signInButtonContainer: { marginTop: p.default.theme.spaces.space40 },
                    ssoButtonStyles: { marginBottom: e.spaces.space16, width: T.fI, height: e.spaces.space40, flex: "none" },
                    twitterIcon: { alignSelf: "flex-start", color: e.colors.brandColor, height: "3rem", paddingBottom: e.spaces.space12 },
                    twitterIconHero: { color: e.colors.brandColor, height: "50%", justifyContent: "center", maxHeight: "380px", padding: e.spaces.space32 },
                })),
                re = L(ae);
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                a = n(325686),
                i = n(235902),
                r = n(885015),
                s = n(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: l } = i.ZP.useProps(),
                    p = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return n ? o.createElement(r.Z, { style: !t && c.root, withGutter: !0 }, o.createElement(a.Z, { style: c.gapColumn }, o.createElement(a.Z, { style: [c.gap, p] })), o.createElement(a.Z, { style: c.gapText }, n), o.createElement(a.Z, { style: c.gapColumn }, o.createElement(a.Z, { style: [c.gap, p] }))) : o.createElement(a.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, p] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                a = n(202784),
                i = n(325686),
                r = n(392237);
            class s extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...r } = this.props,
                        s = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, l.column, n && l.withGutterColumn] }));
                    return a.createElement(i.Z, (0, o.Z)({ style: [t, l.root, n && l.withGutter] }, r), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const l = r.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                a = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LoggedOutHome.9ef7720a.js.map
