"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LoggedOutHome", "bundle.AudioSpaceDetail"],
    {
        651930: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                a = n(99107),
                i = n(272175),
                s = n(111677);
            const r = n.n(s)().c39b0e24,
                l = ({ deepLink: e }) => {
                    const t = r;
                    return e ? o.createElement(i.ql, null, o.createElement("meta", { content: e, property: "al:ios:url" }), o.createElement("meta", { content: a.AF, property: "al:ios:app_store_id" }), o.createElement("meta", { content: t, property: "al:ios:app_name" }), o.createElement("meta", { content: e, property: "al:android:url" }), o.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), o.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                a = n(272175);
            const i = (e) => {
                const { canonical: t, description: n = "", image: i, imageAlt: s, imageH: r, imageType: l, imageW: c, title: p, ttl: d, type: u } = e;
                return o.createElement(a.ql, null, u ? o.createElement("meta", { content: u, property: "og:type" }) : null, t ? o.createElement("meta", { content: t, property: "og:url" }) : null, p ? o.createElement("meta", { content: p, property: "og:title" }) : null, o.createElement("meta", { content: n, property: "og:description" }), i ? o.createElement("meta", { content: i, property: "og:image" }) : null, l ? o.createElement("meta", { content: l, property: "og:image:type" }) : null, c ? o.createElement("meta", { content: c, property: "og:image:width" }) : null, r ? o.createElement("meta", { content: r, property: "og:image:height" }) : null, s ? o.createElement("meta", { content: s, property: "og:image:alt" }) : null, d ? o.createElement("meta", { content: d, property: "og:ttl" }) : null);
            };
        },
        105019: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(202784),
                a = n(107267),
                i = n(31667),
                s = n(952793),
                r = n(964814),
                l = n(885824);
            function c(e) {
                return !["/i/flow/login"].includes(e);
            }
            const p = (0, r.Z)(function (e = { hideCookieBannerPicker: !1 }) {
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
                    n = (0, s.hC)("rweb_conf_only_enabled");
                return e.hideCookieBannerPicker || !t || n ? null : o.createElement(i.Z, null, o.createElement(l.Z, null));
            });
        },
        885824: (e, t, n) => {
            n.d(t, { Z: () => P });
            var o = n(202784),
                a = n(666305),
                i = n(2138),
                s = n(443781),
                r = n(325686),
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
                return o.createElement(r.Z, { style: C.cookieComplianceMessageWrap }, o.createElement(c.ZP, { color: "buttonWhite", size: "headline2", weight: "medium" }, e.title), o.createElement(c.ZP, { color: "buttonWhite", size: "subtext2", style: C.cookieComplianceExpandedDetails }, e.body));
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
                        { acceptAllCookies: s, isBannerOpen: l, refuseNonEssentialCookies: c } = (0, f.O)();
                    o.useEffect(() => {
                        l && n.scribe({ ...b.A, action: "impression" });
                    }, [n, l]);
                    const m = (0, p.pj)();
                    return l ? o.createElement(r.Z, { ref: t, style: [C.root, m && C.rootNarrow] }, i ? o.createElement(B, null) : o.createElement(x, { onExpand: a }), o.createElement(r.Z, { style: [C.buttonContainer, m && C.buttonContainerNarrow] }, o.createElement(d.ZP, { dominantColor: "alwaysBaseGray1100", onPress: s, size: "medium", style: [C.ctaButton, m && C.ctaButtonNarrow], type: u.default.isDarkMode() ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" }, _), o.createElement(d.ZP, { dominantColor: "alwaysBaseGray1100", onPress: c, size: "medium", style: [C.ctaButton, m && C.ctaButtonNarrow], type: u.default.isDarkMode() ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" }, y))) : null;
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
            function P(e) {
                const { featureSwitches: t } = o.useContext(s.rC),
                    n = Z(e.onHeightChange);
                return t.isTrue("responsive_web_cookie_compliance_banner_enabled") ? o.createElement(k, { ref: n }) : null;
            }
        },
        664918: (e, t, n) => {
            n.d(t, { D0: () => l, c$: () => p, fD: () => r, iB: () => m, jk: () => c });
            var o = n(366097),
                a = n(163889);
            const i = 2,
                s = 1e3,
                r = Object.freeze({ AcceptAllCookies: "acceptAllCookies", RefuseNonEssentialCookies: "refuseNonEssentialCookies", Invalid: "invalid", NotSet: "notSet" });
            function l(e) {
                const t = (0, o.bL)(e);
                return t ? (d(t) ? (u(t) ? (t[1] ? r.AcceptAllCookies : t[2] ? r.RefuseNonEssentialCookies : ((0, a.ZP)("Invalid consent signal state"), r.Invalid)) : r.NotSet) : r.Invalid) : r.NotSet;
            }
            function c(e) {
                (0, o.kA)({ consent_version: i, text_version: s, 1: !0 }, e);
            }
            function p(e) {
                (0, o.kA)({ consent_version: i, text_version: s, 2: !0 }, e);
            }
            function d(e) {
                return !(e[1] && e[2]);
            }
            function u(e) {
                return e[1] || e[2];
            }
            function m(e) {
                const t = (0, o.bL)(e);
                return !t || !d(t) || !u(t) || t.consent_version < i || t.text_version < s;
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
                s = n(443781),
                r = n(664918),
                l = n(421023);
            function c() {
                const e = (0, i.z)(),
                    { featureSwitches: t } = o.useContext(s.rC),
                    n = !!a.ZP.getTwitterAppVersion(),
                    [c, p] = o.useState(() => r.iB(t) && !n);
                return {
                    isBannerOpen: c,
                    acceptAllCookies() {
                        e.scribe({ ...l.A, action: "click", element: "accept_all" }), r.jk(t), p(!1);
                    },
                    refuseNonEssentialCookies() {
                        e.scribe({ ...l.A, action: "click", element: "refuse_non_essential" }), r.c$(t), p(!1);
                    },
                };
            }
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(202784),
                a = n(500002),
                i = n(668214),
                s = n(997174),
                r = n(118823);
            const l = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: r.YF, updateTweetDetailNav: s.NH }))
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
                            location: { pathname: i, search: s },
                            locationKey: r,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const c = a || r;
                    ((c && a !== r) || (!c && n !== i) || o !== s || l) && this._performPageUpdates(this.props);
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
                s = n(154003),
                r = n(111677),
                l = n.n(r),
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
                                { analytics: t, buttonState: n, history: o, loginReturnPath: i, personalizationSettings: s, shouldPropagateP13nSettings: r, ssoInitTokens: l } = this.props,
                                { allowCookieUse: c, allowDeviceAccess: p, allowPartnerships: d, allowPersonalization: u } = s || {};
                            t.scribe({ component: "apple_sign_in", element: n, action: "click" }),
                                e.auth
                                    .signIn()
                                    .then((e) => {
                                        t.scribe({ component: "apple_sign_in", element: n, action: "success" });
                                        const s = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName;
                                        o.push({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: r && { allow_cookie_use: !!c, allow_device_personalization: !!p, allow_partnerships: !!d, allow_ads_personalization: !!u }, requested_variant: JSON.stringify({ display_name: s && `${e.user.name.firstName} ${e.user.name.lastName}`, id_token: e.authorization.id_token, provider: a.Bm.Apple, state: l[a.Bm.Apple], redirect_uri: this._isSSORedirectEnabled ? i : void 0 }) } } });
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
                    return this._is3rdPartyIntegrationDisabled ? null : o.createElement(s.ZP, { backgroundColor: "white", borderColor: "gray200", children: a, color: "alwaysBaseGray1100", disabled: !n, fontWeight: "normal", icon: o.createElement(c.default, null), onPress: this._handleOnPress, size: e, style: t, testID: b.Z.apple });
                }
            }
            (x.contextType = g.rC), (x.defaultProps = { buttonSize: "xLarge", buttonState: "signup" });
            const E = (0, m.ZP)((0, h.Z)(x));
        },
        826033: (e, t, n) => {
            n.r(t), n.d(t, { CookieComplianceBannerPadder: () => oe, LoggedOutHome: () => ae, default: () => se });
            var o = n(202784),
                a = n(272175),
                i = n(325686),
                s = n(688715),
                r = n(154003),
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
                P = n(652904),
                I = n(3196),
                v = n(487659),
                T = n(911318),
                W = n(655352),
                D = n(182495),
                z = n(668214),
                A = n(390387);
            const L = (0, z.Z)()
                    .propsFromState(() => ({ userLanguage: A.VT }))
                    .withAnalytics({ page: "front" }),
                N = 380,
                M = 1.15 * N,
                O = 500,
                G = 1e3,
                H = 350,
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
                ne = (0, s.ju)("https://x.com/");
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
                                s = () => {
                                    a.scribe({ component: "grok_button_logout_page", element: "grok", action: "click" });
                                };
                            return this._showGrokButton ? (a.scribe({ component: "grok_button_logout_page", element: "grok", action: "impression" }), o.createElement(r.ZP, { icon: o.createElement(f.default, null), link: "desktop" !== t ? "https://grok.com/download" : "https://grok.com/", onPress: s, style: [i, ie.ssoButtonStyles, ie.redesignedSSOButtonStyles, { alignSelf: e }], textSizeOverride: "body" }, o.createElement(l.ZP, { style: ie.grokLabel, weight: "medium" }, "desktop" !== t ? K : X))) : null;
                        }),
                        (this.renderBody = (e, t) => {
                            const n = "desktop" === e;
                            return this._showPageRedesign ? o.createElement(i.Z, { style: [ie.main, ie.mainRedesignedWide] }, this._renderRedesignedCTA({ deviceSize: e, ssoButtonsWidth: t }), this._renderGrokButton("center", e, t)) : o.createElement(i.Z, { style: [ie.main, n && ie.mainWide] }, this._renderCTA({ deviceSize: e, ssoButtonsWidth: t }), n && this._renderHero());
                        }),
                        (this._renderLoginSignupButtons = (e, t) => {
                            const n = e ? ie.ctaButton : ie.ctaButtonMobile,
                                { signUpLabel: a } = (0, D.M5)(this.context.featureSwitches);
                            return o.createElement(i.Z, null, o.createElement(o.Fragment, null, this._renderSSOButtons(e, t), o.createElement(i.Z, { style: ie.gapContainer }, o.createElement(c.Z, { label: o.createElement(l.ZP, { children: te }) })), o.createElement(r.ZP, { link: { pathname: "/i/flow/signup", state: { input: { requested_variant: JSON.stringify({ signup_type: D.mk }) } } }, onPress: this._handleSignupButton, size: "medium", style: [n, "tablet" === e && ie.ctaButtonSplitSpacing, ie.ssoButtonStyles], testID: j, type: "brandFilled" }, a), o.createElement(l.ZP, { color: "gray700", size: "subtext3", style: [n, { width: T.fI }] }, D.K2), o.createElement(i.Z, { style: ie.signInButtonContainer }, o.createElement(l.ZP, { size: "headline2", style: n, weight: "bold" }, J), o.createElement(r.ZP, { link: "/login", onPress: this._handleLoginButton, size: "medium", style: [n, "tablet" === e && ie.ctaButtonSplitSpacing, ie.ssoButtonStyles], testID: F, type: "brandOutlined" }, Y))));
                        }),
                        (this._renderRedesignedLoginSignupButtons = (e, t) => {
                            const n = e ? ie.ctaButton : ie.ctaButtonMobile;
                            return o.createElement(i.Z, null, o.createElement(o.Fragment, null, this._renderSSOButtons(e, t), o.createElement(i.Z, { style: ie.redesignedGapContainer }, o.createElement(c.Z, { borderColor: "gray400", label: o.createElement(l.ZP, { children: te, color: "alwaysDarkGray700" }) })), o.createElement(i.Z, null, o.createElement(r.ZP, { fontWeight: "medium", link: { pathname: "/i/flow/signup", state: { input: { requested_variant: JSON.stringify({ signup_type: D.mk }) } } }, onPress: this._handleSignupButton, style: [n, "tablet" === e && ie.ctaButtonSplitSpacing, ie.ssoButtonStyles, ie.redesignedSSOButtonStyles], testID: j, textSizeOverride: "body", type: this._showBlueBrandFilledButton ? "brandFilled" : "primaryFilled" }, $), o.createElement(l.ZP, { color: "gray700", size: "subtext3", style: [ie.legalText, n, { width: T.fI }] }, D.K2)), o.createElement(i.Z, { style: ie.redesignedSignInButtonContainer }, o.createElement(l.ZP, { size: "body", style: ie.labelText, weight: "bold" }, J), o.createElement(r.ZP, { backgroundColor: "light" === p.default.theme.paletteName ? "transparent" : "buttonBlack", borderColor: "light" === p.default.theme.paletteName ? void 0 : "transparent", color: "primary", fontWeight: "medium", link: "/login", onPress: this._handleLoginButton, style: [n, "tablet" === e && ie.ctaButtonSplitSpacing, ie.ssoButtonStyles, ie.redesignedSSOButtonStyles, ie.redesignedSignInButton], testID: F }, Y))));
                        }),
                        (this._renderSSOButtons = (e, t) => {
                            const { buttonState: n, isCookieCompliant: a } = this.state,
                                i = e ? ie.ctaButton : ie.ctaButtonMobile,
                                s = { ...ie.ssoButtonStyles, width: t };
                            return o.createElement(o.Fragment, null, o.createElement(v.Z, { buttonSize: "medium", buttonState: n, customWidth: t, displayType: T.qv.Button, isCookieCompliant: this._cookieComplianceGingersnapEnabled && this._isPlaceholderSIWGButtonEnabled ? a : void 0, onPress: this._handleCookieCompliance, style: [i, "tablet" === e && ie.ctaButtonSplitSpacing, s] }), o.createElement(I.Z, { buttonSize: "medium", buttonState: n, style: [i, "tablet" === e && ie.ctaButtonSplitSpacing, ie.ssoButtonStyles, ie.appleSsoButton] }));
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
                        (this.state = { buttonState: (0, D.BG)(this.context.featureSwitches), isCookieCompliant: (0, C.D0)(this.context.featureSwitches) === C.fD.AcceptAllCookies });
                }
                componentDidMount() {
                    (0, W.ZP)() && this.context.setSideNavSupport(!1);
                }
                componentWillUnmount() {
                    (0, W.ZP)() && this.context.setSideNavSupport(!0);
                }
                componentDidUpdate() {
                    (0, W.ZP)() && this.context.setSideNavSupport(!1);
                }
                render() {
                    const { analytics: e } = this.props;
                    return o.createElement(
                        P.Z,
                        null,
                        o.createElement(Z.Z, { title: Q }),
                        o.createElement(x.Z, { canonical: ne, description: ee, title: Q, type: "website" }),
                        o.createElement(B.Z, { deepLink: "twitter://" }),
                        o.createElement(a.ql, null, o.createElement("meta", { content: "NOODP", name: "robots" }), o.createElement("meta", { content: ee, name: "description" })),
                        o.createElement(d.ZP, null, ({ windowHeight: t, windowWidth: n }) => {
                            const { deviceSize: a, ssoButtonsWidth: s } = ((e) => ({ deviceSize: e > G ? "desktop" : e > O ? "tablet" : void 0, ssoButtonsWidth: e < H ? T.ND : T.fI }))(n);
                            return o.createElement(i.Z, { style: ie.root }, this.renderBody(a, s), o.createElement(oe, null, o.createElement(w.Z, { align: "center", analytics: e, isMobile: "desktop" !== a })));
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
                            const s = a + 1 === e;
                            return o.createElement(i.Z, { key: n, style: [ie.communicationItem, s && ie.communicationItemLast] }, o.createElement(t, { style: ie.communicationItemIcon }), o.createElement(l.ZP, { color: "white", size: "headline1", style: ie.communicationItemText, weight: "bold" }, n));
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
                se = L(ae);
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                a = n(325686),
                i = n(235902),
                s = n(885015),
                r = n(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: l } = i.ZP.useProps(),
                    p = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: r.default.theme.colors[e] ?? r.default.theme.colors.borderColor };
                return n ? o.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, o.createElement(a.Z, { style: c.gapColumn }, o.createElement(a.Z, { style: [c.gap, p] })), o.createElement(a.Z, { style: c.gapText }, n), o.createElement(a.Z, { style: c.gapColumn }, o.createElement(a.Z, { style: [c.gap, p] }))) : o.createElement(a.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, p] });
            }
            const c = r.default.create((e) => ({ borderColor: { backgroundColor: r.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: r.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                a = n(202784),
                i = n(325686),
                s = n(392237);
            class r extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...s } = this.props,
                        r = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, l.column, n && l.withGutterColumn] }));
                    return a.createElement(i.Z, (0, o.Z)({ style: [t, l.root, n && l.withGutter] }, s), r);
                }
            }
            r.defaultProps = { withGutter: !1 };
            const l = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LoggedOutHome.6cebc39a.js.map
