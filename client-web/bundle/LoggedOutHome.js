"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LoggedOutHome", "bundle.AudioSpaceDetail"],
    {
        651930: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                a = n(99107),
                i = n(272175),
                r = n(674132);
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
                const { canonical: t, description: n = "", image: i, imageAlt: r, imageH: s, imageType: l, imageW: c, title: p, ttl: m, type: u } = e;
                return o.createElement(a.ql, null, u ? o.createElement("meta", { content: u, property: "og:type" }) : null, t ? o.createElement("meta", { content: t, property: "og:url" }) : null, p ? o.createElement("meta", { content: p, property: "og:title" }) : null, o.createElement("meta", { content: n, property: "og:description" }), i ? o.createElement("meta", { content: i, property: "og:image" }) : null, l ? o.createElement("meta", { content: l, property: "og:image:type" }) : null, c ? o.createElement("meta", { content: c, property: "og:image:width" }) : null, s ? o.createElement("meta", { content: s, property: "og:image:height" }) : null, r ? o.createElement("meta", { content: r, property: "og:image:alt" }) : null, m ? o.createElement("meta", { content: m, property: "og:ttl" }) : null);
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
            n.d(t, { Z: () => P });
            var o = n(202784),
                a = n(666305),
                i = n(2138),
                r = n(443781),
                s = n(325686),
                l = n(688715),
                c = n(731708),
                p = n(67369),
                m = n(154003),
                u = n(392237),
                d = n(674132),
                g = n.n(d),
                h = n(725516),
                b = n(421023),
                f = n(6116);
            const y = g().d8817e36,
                E = g().b9288ee6,
                x = g().i1390ec2,
                k = (0, l.ju)("https://help.x.com/rules-and-policies/twitter-cookies");
            function B() {
                const e = o.createElement(g().I18NFormatMessage, { $i18n: "e4af7661" }, o.createElement(c.ZP, { color: "buttonWhite", link: k, withUnderline: !0 }, g().ga3121d5));
                return o.createElement(w, { body: e, title: x });
            }
            function _(e) {
                const t = o.createElement(g().I18NFormatMessage, { $i18n: "a268632b" }, o.createElement(c.ZP, { color: "buttonWhite", onClick: e.onExpand, role: "button", withUnderline: !0 }, g().g482c949));
                return o.createElement(w, { body: t, title: x });
            }
            function w(e) {
                return o.createElement(s.Z, { style: S.cookieComplianceMessageWrap }, o.createElement(c.ZP, { color: "buttonWhite", size: "headline2", weight: "medium" }, e.title), o.createElement(c.ZP, { color: "buttonWhite", size: "subtext2", style: S.cookieComplianceExpandedDetails }, e.body));
            }
            const C = o.forwardRef(function (e, t) {
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
                    const d = (0, p.pj)();
                    return l ? o.createElement(s.Z, { ref: t, style: [S.root, d && S.rootNarrow] }, i ? o.createElement(B, null) : o.createElement(_, { onExpand: a }), o.createElement(s.Z, { style: [S.buttonContainer, d && S.buttonContainerNarrow] }, o.createElement(m.ZP, { dominantColor: "alwaysBaseGray1100", onPress: r, size: "medium", style: [S.ctaButton, d && S.ctaButtonNarrow], type: u.default.isDarkMode() ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" }, y), o.createElement(m.ZP, { dominantColor: "alwaysBaseGray1100", onPress: c, size: "medium", style: [S.ctaButton, d && S.ctaButtonNarrow], type: u.default.isDarkMode() ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" }, E))) : null;
                }),
                S = u.default.create((e) => ({ root: { alignItems: "center", boxShadow: e.boxShadows.xSmall, flexDirection: "row", width: "100%", justifyContent: "space-evenly", paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal, backgroundColor: e.colors.buttonBlack }, rootNarrow: { flexDirection: "column", paddingVertical: e.componentDimensions.gutterVertical, paddingTop: e.spaces.space20, backgroundColor: e.colors.buttonBlack }, buttonContainer: { flexDirection: "column", marginVertical: e.spaces.space16, marginStart: e.spaces.space20 }, buttonContainerNarrow: { width: "100%", maxWidth: 550, marginStart: 0, flexDirection: "column", flexWrap: "wrap" }, ctaButton: { height: e.spaces.space40, marginBottom: e.spaces.space8, width: 420, flexGrow: 0, flexShrink: 0 }, ctaButtonNarrow: { marginStart: 0, width: "100%" }, cookieComplianceMessageWrap: { flex: 1, maxWidth: 640 }, cookieComplianceExpandedDetails: { marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, background: { backgroundColor: e.colors.buttonBlack } }));
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
                const { featureSwitches: t } = o.useContext(r.rC),
                    n = Z(e.onHeightChange);
                return t.isTrue("responsive_web_cookie_compliance_banner_enabled") ? o.createElement(C, { ref: n }) : null;
            }
        },
        664918: (e, t, n) => {
            n.d(t, { D0: () => l, c$: () => p, fD: () => s, iB: () => d, jk: () => c });
            var o = n(366097),
                a = n(163889);
            const i = 2,
                r = 1e3,
                s = Object.freeze({ AcceptAllCookies: "acceptAllCookies", RefuseNonEssentialCookies: "refuseNonEssentialCookies", Invalid: "invalid", NotSet: "notSet" });
            function l(e) {
                const t = (0, o.bL)(e);
                return t ? (m(t) ? (u(t) ? (t[1] ? s.AcceptAllCookies : t[2] ? s.RefuseNonEssentialCookies : ((0, a.ZP)("Invalid consent signal state"), s.Invalid)) : s.NotSet) : s.Invalid) : s.NotSet;
            }
            function c(e) {
                (0, o.kA)({ consent_version: i, text_version: r, 1: !0 }, e);
            }
            function p(e) {
                (0, o.kA)({ consent_version: i, text_version: r, 2: !0 }, e);
            }
            function m(e) {
                return !(e[1] && e[2]);
            }
            function u(e) {
                return e[1] || e[2];
            }
            function d(e) {
                const t = (0, o.bL)(e);
                return !t || !m(t) || !u(t) || t.consent_version < i || t.text_version < r;
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
        826033: (e, t, n) => {
            n.r(t), n.d(t, { CookieComplianceBannerPadder: () => ae, LoggedOutHome: () => ie, default: () => se });
            var o = n(202784),
                a = n(272175),
                i = n(325686),
                r = n(688715),
                s = n(154003),
                l = n(731708),
                c = n(420412),
                p = n(537392),
                m = n(392237),
                u = n(674132),
                d = n.n(u),
                g = n(956272),
                h = n(41065),
                b = n(194661),
                f = n(99223),
                y = n(520913),
                E = n(187669),
                x = n(640872),
                k = n(31667),
                B = n(788994),
                _ = n(651930),
                w = n(572067),
                C = n(105019),
                S = n(885824),
                Z = n(664918),
                P = n(38293),
                v = n(652904),
                I = n(3196),
                T = n(487659),
                W = n(911318),
                z = n(655352),
                D = n(182495),
                A = n(668214),
                L = n(390387);
            const N = (0, A.Z)()
                    .propsFromState(() => ({ userLanguage: L.VT }))
                    .withAnalytics({ page: "front" }),
                M = 380,
                H = 1.15 * M,
                G = 500,
                F = 1e3,
                j = 350,
                O = "signupButton",
                R = "loginButton",
                V = [
                    { text: d().a62c9c34, Icon: g.default },
                    { text: d().cf39fca2, Icon: h.default },
                    { text: d().j86184fe, Icon: b.default },
                ],
                U = d().ac2035f2,
                $ = d().h0af9418,
                q = d().eb022176,
                K = d().eba1b198,
                J = d().fa811c30,
                X = d().b4bdfb3e,
                Y = d().f991cfaa,
                Q = d().e5b0e544,
                ee = d().a4298bc0,
                te = d().j3f49ff6,
                ne = d().d65555c2,
                oe = (0, r.ju)("https://x.com/");
            function ae(e) {
                const [t, n] = o.useState(0),
                    a = o.useCallback((e) => {
                        n(e || 0);
                    }, []);
                return o.createElement(o.Fragment, null, o.createElement(C.Z.Configure, { hideCookieBannerPicker: !0 }), o.createElement(k.Z, null, o.createElement(S.Z, { onHeightChange: a })), o.createElement(i.Z, { style: [{ marginBottom: t }, re.bannerPadderChildren] }, e.children));
            }
            class ie extends o.Component {
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
                                i = t ? re.ctaButton : re.ctaButtonMobile,
                                r = () => {
                                    a.scribe({ component: "grok_button_logout_page", element: "grok", action: "click" });
                                };
                            return this._showGrokButton
                                ? ((0, E.q)(() => {
                                      a.scribe({ component: "grok_button_logout_page", element: "grok", action: "impression" });
                                  }),
                                  o.createElement(s.ZP, { icon: o.createElement(f.default, null), link: "desktop" !== t ? "https://grok.com/download" : "https://grok.com/", onPress: r, size: "large", style: [i, re.ssoButtonStyles, { alignSelf: e }], textSizeOverride: "body" }, o.createElement(l.ZP, { style: re.grokLabel, weight: "medium" }, "desktop" !== t ? X : Y)))
                                : null;
                        }),
                        (this.renderBody = (e, t) => {
                            const n = "desktop" === e;
                            return this._showPageRedesign ? o.createElement(i.Z, { style: [re.main, re.mainRedesignedWide] }, this._renderRedesignedCTA({ deviceSize: e, ssoButtonsWidth: t }), this._renderGrokButton("center", e, t)) : o.createElement(i.Z, { style: [re.main, n && re.mainWide] }, this._renderCTA({ deviceSize: e, ssoButtonsWidth: t }), n && this._renderHero());
                        }),
                        (this._renderLoginSignupButtons = (e, t) => {
                            const n = e ? re.ctaButton : re.ctaButtonMobile,
                                { signUpLabel: a } = (0, D.M5)(this.context.featureSwitches);
                            return o.createElement(i.Z, null, o.createElement(o.Fragment, null, this._renderSSOButtons(e, t), o.createElement(i.Z, { style: re.gapContainer }, o.createElement(c.Z, { label: o.createElement(l.ZP, { children: ne }) })), o.createElement(s.ZP, { link: { pathname: "/i/flow/signup", state: { input: { requested_variant: JSON.stringify({ signup_type: D.mk }) } } }, onPress: this._handleSignupButton, size: "medium", style: [n, "tablet" === e && re.ctaButtonSplitSpacing, re.ssoButtonStyles], testID: O, type: "brandFilled" }, a), o.createElement(l.ZP, { color: "gray700", size: "subtext3", style: [n, { width: W.fI }] }, D.K2), o.createElement(i.Z, { style: re.signInButtonContainer }, o.createElement(l.ZP, { size: "headline2", style: n, weight: "bold" }, J), o.createElement(s.ZP, { link: "/login", onPress: this._handleLoginButton, size: "medium", style: [n, "tablet" === e && re.ctaButtonSplitSpacing, re.ssoButtonStyles], testID: R, type: "brandOutlined" }, Q))));
                        }),
                        (this._renderRedesignedLoginSignupButtons = (e, t) => {
                            const n = e ? re.ctaButton : re.ctaButtonMobile;
                            return o.createElement(i.Z, null, o.createElement(o.Fragment, null, this._renderSSOButtons(e, t), o.createElement(i.Z, { style: re.inlineSignupText }, o.createElement(l.ZP, { size: "body", style: re.labelText }, J), o.createElement(l.ZP, { link: "/login", onPress: this._handleLoginButton, size: "body", testID: R }, Q)), o.createElement(i.Z, { style: re.redesignedGapContainer }, o.createElement(c.Z, { borderColor: "gray400", label: o.createElement(l.ZP, { children: ne, color: "alwaysDarkGray700" }) })), o.createElement(i.Z, null, o.createElement(s.ZP, { fontWeight: "normal", link: { pathname: "/i/flow/signup", state: { input: { requested_variant: JSON.stringify({ signup_type: D.mk }) } } }, onPress: this._handleSignupButton, size: "large", style: [n, "tablet" === e && re.ctaButtonSplitSpacing, re.ssoButtonStyles], testID: O, textSizeOverride: "body", type: this._showBlueBrandFilledButton ? "brandFilled" : "primaryFilled" }, q), o.createElement(l.ZP, { color: "gray700", size: "subtext3", style: [re.legalText, n, { width: W.fI }] }, D.K2))));
                        }),
                        (this._renderSSOButtons = (e, t) => {
                            const { buttonState: n, isCookieCompliant: a } = this.state,
                                i = e ? re.ctaButton : re.ctaButtonMobile,
                                r = { ...re.ssoButtonStyles, width: t };
                            return o.createElement(o.Fragment, null, o.createElement(T.Z, { buttonSize: "medium", buttonState: n, customWidth: t, displayType: W.qv.Button, isCookieCompliant: this._cookieComplianceGingersnapEnabled && this._isPlaceholderSIWGButtonEnabled ? a : void 0, onPress: this._handleCookieCompliance, style: [i, "tablet" === e && re.ctaButtonSplitSpacing, r] }), o.createElement(I.Z, { buttonSize: "medium", buttonState: n, style: [i, "tablet" === e && re.ctaButtonSplitSpacing, re.ssoButtonStyles, re.appleSsoButton] }));
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
                        (this.state = { buttonState: (0, D.BG)(this.context.featureSwitches), isCookieCompliant: (0, Z.D0)(this.context.featureSwitches) === Z.fD.AcceptAllCookies });
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
                        o.createElement(P.Z, { title: ee }),
                        o.createElement(w.Z, { canonical: oe, description: te, title: ee, type: "website" }),
                        o.createElement(_.Z, { deepLink: "twitter://" }),
                        o.createElement(a.ql, null, o.createElement("meta", { content: "NOODP", name: "robots" }), o.createElement("meta", { content: te, name: "description" })),
                        o.createElement(p.ZP, null, ({ windowHeight: t, windowWidth: n }) => {
                            const { deviceSize: a, ssoButtonsWidth: r } = ((e) => ({ deviceSize: e > F ? "desktop" : e > G ? "tablet" : void 0, ssoButtonsWidth: e < j ? W.ND : W.fI }))(n);
                            return o.createElement(i.Z, { style: re.root }, this.renderBody(a, r), o.createElement(ae, null, o.createElement(B.Z, { align: "center", analytics: e, isMobile: "desktop" !== a })));
                        }),
                    );
                }
                _renderHero() {
                    return o.createElement(i.Z, { style: [re.block, re.communication, re.blockHero] }, o.createElement(i.Z, { style: re.blockImg }, o.createElement(y.default, { style: re.twitterIconHero })));
                }
                _renderCommunicationItems() {
                    const e = V.length;
                    return o.createElement(
                        i.Z,
                        { style: re.communicationItems },
                        V.map(({ Icon: t, text: n }, a) => {
                            const r = a + 1 === e;
                            return o.createElement(i.Z, { key: n, style: [re.communicationItem, r && re.communicationItemLast] }, o.createElement(t, { style: re.communicationItemIcon }), o.createElement(l.ZP, { color: "white", size: "headline1", style: re.communicationItemText, weight: "bold" }, n));
                        }),
                    );
                }
                _renderCTA({ deviceSize: e, ssoButtonsWidth: t }) {
                    return o.createElement(i.Z, { style: [re.block, re.blockCTA, "tablet" === e && re.blockTabletCTA] }, o.createElement(i.Z, { style: [re.blockInnerWrapper, "desktop" === e && re.blockInnerWrapperWide] }, "desktop" === e ? null : o.createElement(y.default, { style: re.twitterIcon }), o.createElement(l.ZP, { extendedWidth: !0, style: [e ? re.ctaTitleLarge : re.ctaTitle, this._showMarchMadnessPopup && { marginTop: 10, marginBottom: 35 }], weight: "bold" }, K), o.createElement(l.ZP, { extendedWidth: !0, size: e ? "title2" : "title4", style: e ? re.ctaTextLarge : re.ctaText, weight: "bold" }, U), this._renderLoginSignupButtons(e, t), this._renderGrokButton("flex-start", e, t)));
                }
                _renderRedesignedCTA({ deviceSize: e, ssoButtonsWidth: t }) {
                    return o.createElement(i.Z, { style: re.block }, o.createElement(i.Z, null, o.createElement(y.default, { style: re.redesignedXIcon }), o.createElement(l.ZP, { size: "title4", style: [re.redesignedCtaText, e && re.ctaTextLarge], weight: "bold" }, $), this._renderRedesignedLoginSignupButtons(e, t)));
                }
            }
            ie.contextType = x.Z;
            const re = m.default.create((e) => ({
                    root: { flex: 1 },
                    main: { minHeight: "auto" },
                    mainWide: { flex: "auto", flexDirection: "row-reverse" },
                    block: { justifyContent: "center", padding: e.spaces.space16 },
                    blockHero: { flex: 1, padding: 0, minHeight: "45vh" },
                    blockImg: { ...m.default.absoluteFillObject, flex: 1, resizeMode: "cover", justifyContent: "center" },
                    blockCTA: { minWidth: "45vw" },
                    blockTabletCTA: { maxWidth: "600px", margin: "auto", width: "100%" },
                    blockInnerWrapper: { width: "100%", padding: e.spaces.space20 },
                    blockInnerWrapperWide: { minWidth: `${H}px`, maxWidth: "760px" },
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
                    seeWhatsHappening: { marginTop: e.spaces.space20 },
                    happeningButton: { marginBottom: e.spaces.space16 },
                    joinToday: { marginTop: e.spaces.space64, marginBottom: e.spaces.space16 },
                    ctaTitle: { fontSize: e.spaces.space40, letterSpacing: -0.8, lineHeight: `${m.default.theme.spacesPx.space40 + m.default.theme.spacesPx.space12}px`, marginVertical: e.spaces.space40 },
                    ctaTitleLarge: { fontSize: e.spaces.space64, letterSpacing: -1.2, lineHeight: `${m.default.theme.spacesPx.space64 + m.default.theme.spacesPx.space20}px`, marginVertical: e.spaces.space48 },
                    ctaText: { marginBottom: e.spaces.space20 },
                    ctaTextLarge: { marginBottom: e.spaces.space32 },
                    ctaButton: { marginBottom: e.spaces.space20, maxWidth: "380px", flex: 1 },
                    ssoButtonStyles: { marginBottom: e.spaces.space16, width: W.fI, height: e.spaces.space40, flex: "none" },
                    appleSsoButton: { marginBottom: 0 },
                    twitterIcon: { alignSelf: "flex-start", color: e.colors.brandColor, height: "3rem", paddingBottom: e.spaces.space12 },
                    signInButtonContainer: { marginTop: m.default.theme.spaces.space40 },
                    gapContainer: { marginVertical: e.spaces.space4, maxWidth: "380px", width: W.fI },
                    ctaButtonMobile: { marginBottom: e.spaces.space16 },
                    ctaButtonSplitSpacing: { marginEnd: e.spaces.space20 },
                    twitterIconHero: { color: e.colors.brandColor, height: "50%", justifyContent: "center", maxHeight: "380px", padding: e.spaces.space32 },
                    bannerPadderChildren: { transitionProperty: "margin-bottom", transitionDuration: "100ms" },
                    mainRedesignedWide: { flex: "auto", justifyContent: "center", alignSelf: "center" },
                    heroContainer: { alignItems: "center", justifyContent: "center", marginBottom: m.default.theme.spaces.space16 },
                    redesignedCtaText: { alignSelf: "center", marginBottom: e.spaces.space24 },
                    legalText: { textAlign: "center" },
                    redesignedXIcon: { alignSelf: "center", color: e.colors.brandColor, height: "4rem", paddingBottom: e.spaces.space24 },
                    redesignedGapContainer: { marginVertical: e.spaces.space24, maxWidth: "380px", width: W.fI },
                    inlineSignupText: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 24 },
                    labelText: { marginEnd: 4 },
                    grokLabel: { paddingStart: e.spaces.space4 },
                    grokButton: { alignSelf: "flex-start" },
                })),
                se = N(ie);
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LoggedOutHome.84898ada.js.map
