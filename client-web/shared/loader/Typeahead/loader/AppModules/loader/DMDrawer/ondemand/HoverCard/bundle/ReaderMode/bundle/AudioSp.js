"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSp"],
    {
        233391: (e, t, o) => {
            o.d(t, { BH: () => $, Qj: () => j, Wc: () => R, sI: () => U });
            var i = o(202784),
                n = o(731708),
                s = o(392237),
                r = o(111677),
                a = o.n(r),
                l = o(911373),
                c = o(761744),
                p = o(98440),
                h = o(720600),
                u = o(125966),
                d = o(544367),
                m = o(452693),
                _ = o(971657),
                w = o(956272),
                g = o(520913);
            const b = a().a17a75da,
                S = a().e7342ed4,
                f = a().b6a43e78,
                y = a().b469e406,
                A = a().b8505290,
                x = ({ userFullName: e }) => (e ? i.createElement(a().I18NFormatMessage, { $i18n: "e1a49407" }, i.createElement(n.ZP, null, e)) : void 0),
                T = a().ae8b0564,
                v = ({ userFullName: e }) => (e ? i.createElement(a().I18NFormatMessage, { $i18n: "be54ed41" }, i.createElement(n.ZP, null, e)) : void 0),
                L = a().f2adab0e,
                P = ({ userFullName: e }) => (e ? i.createElement(a().I18NFormatMessage, { $i18n: "jb19eb17" }, i.createElement(n.ZP, null, e)) : void 0),
                B = ({ userFullName: e }) => (e ? i.createElement(a().I18NFormatMessage, { $i18n: "bbfee611" }, i.createElement(n.ZP, null, e)) : void 0),
                E = a().b7821a74,
                k = ({ userFullName: e }) => (e ? i.createElement(a().I18NFormatMessage, { $i18n: "af104f2b" }, i.createElement(n.ZP, null, e)) : void 0),
                C = ({ customText: e }) => (e ? i.createElement(a().I18NFormatMessage, { $i18n: "ccc1f303" }, i.createElement(n.ZP, null, e)) : void 0),
                Z = ({ userFullName: e }) => (e ? i.createElement(a().I18NFormatMessage, { $i18n: "ce02fabf" }, i.createElement(n.ZP, null, e)) : void 0),
                F = a().e6d43d06,
                M = ({ customText: e }) => (e ? i.createElement(a().I18NFormatMessage, { $i18n: "a85608a7" }, i.createElement(n.ZP, null, e)) : void 0),
                N = a().ic848090,
                H = a().f9ebe066,
                O = ({ userFullName: e }) => (e ? i.createElement(a().I18NFormatMessage, { $i18n: "c76865b7" }, i.createElement(n.ZP, null, e)) : void 0),
                I = a().je3d93e2,
                D = a().ea88ce2e,
                z = a().je3d93e2,
                $ = Object.freeze({ follow: "follow", like: "like", reply: "reply", retweet: "retweet", generic: "generic", dmshare: "dmshare", postvideo: "postvideo", subscribe: "subscribe", topic: "topic", community: "community", bookmark: "bookmark", search: "search" }),
                R = (e, t) => {
                    switch (t) {
                        case $.follow:
                            return { icon: l.default, text: B, subtext: E, iconStyle: J.iconOther };
                        case $.like:
                            return { icon: c.default, text: L, subtext: P, iconStyle: J.iconLike };
                        case $.reply:
                            return { icon: p.default, text: A, subtext: x, iconStyle: J.iconOther };
                        case $.retweet:
                            return { icon: h.default, text: T, subtext: v, iconStyle: J.iconRetweet };
                        case $.dmshare:
                            return { icon: u.default, text: k, iconStyle: J.iconOther };
                        case $.subscribe:
                            return { icon: d.default, text: C, subtext: Z, iconStyle: J.iconOther };
                        case $.topic:
                            return { icon: m.default, text: F, subtext: M, iconStyle: J.iconTopics };
                        case $.community:
                            return { icon: _.default, text: N, subtext: H, iconStyle: J.iconOther };
                        case $.search:
                            return { icon: w.default, text: O, subtext: I, iconStyle: J.iconOther };
                        default:
                            return { icon: g.default, text: D, subtext: z, iconStyle: J.iconTwitter };
                    }
                },
                U = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? b : f),
                j = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? S : y),
                J = s.default.create((e) => ({ iconOther: { color: e.colors.blue500 }, iconLike: { color: e.colors.magenta500 }, iconTwitter: { color: e.colors.brandColor }, iconRetweet: { color: e.colors.green500 }, iconTopics: { color: e.colors.blue500 } }));
        },
        369241: (e, t, o) => {
            o.d(t, { BH: () => P.BH, ZP: () => N });
            o(875640);
            var i = o(202784),
                n = o(529356),
                s = o(111677),
                r = o.n(s),
                a = o(323265),
                l = o(170542),
                c = o(951790),
                p = o(804027),
                h = o(443781),
                u = o(325686),
                d = o(292627),
                m = o(731708),
                _ = o(154003),
                w = o(392237);
            class g extends i.PureComponent {
                render() {
                    const { onPrimaryButtonClick: e, onSecondaryButtonClick: t, primaryButtonLabel: o, primaryText: n, secondaryButtonLabel: s, secondaryText: r } = this.props;
                    return i.createElement(d.Z.HalfSheet, null, i.createElement(u.Z, { style: b.sheetContent }, i.createElement(u.Z, { style: b.content }, i.createElement(u.Z, { style: b.header }, i.createElement(m.ZP, { color: "white", size: "headline1", weight: "bold" }, n)), i.createElement(m.ZP, { color: "white", style: b.secondaryText }, r)), i.createElement(u.Z, { style: b.footer }, i.createElement(_.ZP, { onPress: t, size: "medium", style: b.button, type: "onMediaOutlined" }, i.createElement(m.ZP, { numberOfLines: 1 }, s)), i.createElement(_.ZP, { onPress: e, size: "medium", style: b.button, type: "onMediaWhiteFilled" }, i.createElement(m.ZP, { numberOfLines: 1 }, o)))));
                }
            }
            const b = w.default.create((e) => ({ content: { padding: e.spaces.space20 }, footer: { flexDirection: "row", justifyContent: "space-between", paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space20, flexWrap: "wrap" }, button: { marginBottom: e.spaces.space4 }, header: { flexDirection: "row" }, secondaryText: { paddingTop: e.spaces.space12 }, sheetContent: { paddingBottom: w.default.iPhoneOffsetBottom, backgroundColor: e.colors.primary } })),
                S = g;
            var f = o(668214),
                y = o(558369),
                A = o(118823),
                x = o(390387),
                T = o(38562),
                v = o(936572);
            const L = (0, f.Z)()
                .propsFromState(() => ({ featureSwitchImpressions: y.ur, loginPromptShown: T.fj, loginPromptLastShown: v.ne, startLocation: A.Lg }))
                .propsFromActions(() => ({ setLoginPromptShown: T.Af, setLoginReturnPath: x.Jm, updateSettings: T.VP }))
                .withAnalytics();
            var P = o(233391);
            o(920099), o(856642), o(782826), o(903019);
            const B = Object.freeze({ BannerSwitchToApp: "banner_switch_to_app", InterstitialSwitchToApp: "interstitial_switch_to_app", NuxAppDownload: "NUX-app-download", SwitchToAppFooter: "switch-to-app-footer", UseApp: "use-app", UseAppExtended: "use-app-extended", SwitchToAppHigh7: "switch_to_app_high_7", SwitchToAppHigh1: "switch_to_app_high_1", SwitchToAppHigh2: "switch_to_app_high_2", SwitchToAppHigh3: "switch_to_app_high_3", SwitchToAppHigh5: "switch_to_app_high_5", SwitchToAppLow7: "switch_to_app_low_7", SwitchToAppLow1: "switch_to_app_low_1", SwitchToAppLow3: "switch_to_app_low_3", SwitchToAppLow5: "switch_to_app_low_5", SwitchToAppLow9: "switch_to_app_low_9" }),
                E = r().j607bf02,
                k = r().j49fd4e8,
                C = r().hd50e064,
                Z = r().a565833e,
                F = r().e919c3bc;
            class M extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getFullSheetDisplayElements = P.Wc.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetPrimaryText = P.sI.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetSecondaryText = P.Qj.bind(null, this.context.featureSwitches)),
                        (this._isStandaloneApp = l.Z.isStandaloneApp()),
                        (this._shouldRenderPrompt = () => {
                            const { loginPromptLastShown: e, loginPromptShown: t, onlyShowOnce: o, useBottomBanner: i } = this.props,
                                { displayInterval: n } = this.state;
                            if (i && !this._hasMobileAppStore()) return !1;
                            if (o) {
                                if (t) return !1;
                                if (n && Date.now() - e < n) return !1;
                            }
                            return !0;
                        }),
                        (this._handleClose = () => {
                            this._scribeAction("dismiss"), this.props.onClose();
                        }),
                        (this._handleNotNow = () => {
                            this._scribeAction("not_now"), this.props.onClose();
                        }),
                        (this._handleSubmit = (e) => {
                            const { onClose: t, postLoginPath: o, setLoginReturnPath: i } = this.props;
                            this._scribeAction("login"), o && i(o), t();
                        }),
                        (this._handleSignupButtonClick = (e) => {
                            this._scribeAction("signup"), this.props.onClose();
                        }),
                        (this._handleAppInstallButtonClick = (e) => {
                            e.preventDefault(), this._scribeAction("download"), c.Z.goToAppStore("loggedoutprompt");
                        }),
                        (this._getSignupState = () => {
                            const { displayMode: e, tweetId: t, userId: o } = this.props;
                            switch (e) {
                                case P.BH.follow:
                                    return { gatedAction: { action: p.qJ.Follow, user_id: o } };
                                case P.BH.like:
                                    return { gatedAction: { action: p.qJ.Favorite, tweet_id: t, user_id: o } };
                                case P.BH.reply:
                                    return { gatedAction: { action: p.qJ.Reply, tweet_id: t, user_id: o } };
                                case P.BH.retweet:
                                    return { gatedAction: { action: p.qJ.Retweet, tweet_id: t, user_id: o } };
                                default:
                                    return;
                            }
                        }),
                        (this._getLoginState = () => {
                            const { postLoginPath: e } = this.props;
                            if (e) return { input: { requested_variant: btoa(JSON.stringify({ redirect_after_login: e })) } };
                        }),
                        (this._hasMobileAppStore = () => a.ZP.isIOS() || a.ZP.isAndroid());
                    const { useBottomBanner: o } = this.props;
                    this._showTertiaryCTA = this._hasMobileAppStore() && !this._isStandaloneApp && this.context.featureSwitches.isTrue("responsive_web_login_signup_sheet_app_install_cta_enabled");
                    const i = this.context.featureSwitches.getNumberValue("rweb_update_fatigue_switch_to_app_day_timeout"),
                        n = this.context.featureSwitches.getStringValue("rweb_update_fatigue_switch_to_app_link");
                    this.state = { displayInterval: o ? 864e5 * i : 0, switchToAppLink: B[n] };
                }
                componentDidMount() {
                    this._shouldRenderPrompt() && this._scribeAction("impression");
                }
                componentWillUnmount() {
                    const { loginPromptShown: e, onlyShowOnce: t, setLoginPromptShown: o, updateSettings: i } = this.props;
                    !e && t && (o(!0), i({ loginPromptLastShown: Date.now() }));
                }
                render() {
                    const { allowBackNavigation: e, customText: t, displayMode: o, hideSignUp: s, isFullHeightOnMobile: r, loginLabel: a, useBottomBanner: l, userFullName: c } = this.props;
                    if (!this._shouldRenderPrompt()) return null;
                    const { icon: p, iconStyle: h, subtext: u, text: d } = this._getFullSheetDisplayElements(o),
                        m = "function" == typeof d ? d({ customText: t, userFullName: c }) : d,
                        _ = "function" == typeof u ? u({ customText: t, userFullName: c }) : u,
                        w = s ? "" : this.props.signupLabel,
                        g = { pathname: "/i/flow/login", state: this._getLoginState() },
                        b = { pathname: "/i/flow/signup", state: this._getSignupState() };
                    return l ? i.createElement(S, { onPrimaryButtonClick: this._handleAppInstallButtonClick, onSecondaryButtonClick: this._handleNotNow, primaryButtonLabel: k, primaryText: this._getHalfSheetPrimaryText(), secondaryButtonLabel: C, secondaryText: this._getHalfSheetSecondaryText() }) : i.createElement(n.Z, { actionLabel: a, actionLink: g, allowBackNavigation: e, graphic: p, graphicStyle: h, headline: m || "", isFullHeightOnMobile: r, onAction: this._handleSubmit, onClose: this._handleClose, onSecondaryAction: this._handleSignupButtonClick, onTertiaryAction: this._showTertiaryCTA ? this._handleAppInstallButtonClick : void 0, secondaryActionLabel: w, secondaryActionLink: b, subtext: _ || "", tertiaryActionLabel: this._showTertiaryCTA ? E : void 0, useBrandedActionButtons: !0 });
                }
                _scribeAction(e) {
                    const { analytics: t, displayMode: o, useBottomBanner: i } = this.props,
                        n = i ? "half_sheet" : o;
                    t.scribe({ component: "login_signup_sheet", element: n, action: e });
                }
            }
            (M.defaultProps = { displayMode: P.BH.generic, hideSignUp: !1, isFullHeightOnMobile: !0, useBottomBanner: !1, loginLabel: F, signupLabel: Z, onlyShowOnce: !1 }), (M.displayMode = P.BH), (M.contextType = h.rC);
            const N = L(M);
        },
        951790: (e, t, o) => {
            o.d(t, { Z: () => r });
            var i = o(323265);
            const n = {
                    setLocation(e) {
                        document.location = e;
                    },
                    getAppStoreURLs(e = "rwoiah") {
                        const t = s(e),
                            o = [t.android, t.ios],
                            i = o.find((e) => e.matches());
                        return i ? [i] : o;
                    },
                    getiOSAppStoreLink(e) {
                        const t = s(e);
                        return t.ios.matches() ? t.ios.url : t.ios.webUrl;
                    },
                    getAndroidAppStoreLink(e) {
                        const t = s(e);
                        return t.android.matches() ? t.android.url : t.android.webUrl;
                    },
                    goToAppStore(e) {
                        const t = this.getAppStoreURLs(e);
                        t[0] && n.setLocation(t[0].url);
                    },
                    openApp(e = "twitter://timeline") {
                        n.setLocation(e);
                    },
                },
                s = (e = "rwoiah") => ({ android: { platform: "android", matches: () => i.ZP.isAndroid(), url: `market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}`, webUrl: `https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}` }, ios: { platform: "ios", matches: () => i.ZP.isIOS(), url: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8`, webUrl: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8` } }),
                r = n;
        },
        971657: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var i = o(202784),
                n = o(890601),
                s = o(783427),
                r = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSp.4724a05a.js.map
