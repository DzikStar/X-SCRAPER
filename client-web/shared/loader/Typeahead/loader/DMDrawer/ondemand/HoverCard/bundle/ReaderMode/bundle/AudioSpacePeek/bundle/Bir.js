"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"],
    {
        23134: (e, t, o) => {
            o.d(t, { C: () => O });
            o(136728);
            var n = o(202784),
                i = o(190286),
                s = o(970187),
                l = o(111677),
                a = o.n(l),
                r = o(615656),
                c = o(666670),
                d = o(757953),
                u = o(879596),
                p = o(323683),
                h = o(479506),
                m = o(942893),
                w = o(500002),
                b = o(233391),
                f = o(288955),
                g = o(71620),
                _ = o(668214),
                y = o(390387),
                S = o(601576),
                C = o(919022);
            const F = (e, t) => t.user || C.ZP.select(e, t.userId),
                T = (0, _.Z)()
                    .propsFromState(() => ({ isLoggedIn: y.Qb, user: F }))
                    .propsFromActions(() => ({ addToast: S.fz, cancelPendingFollow: C.ZP.cancelPendingFollow, createLocalApiErrorHandler: (0, g.zr)("FOLLOW_USER_BUTTON"), fetchOneUserIfNeeded: C.ZP.fetchOneIfNeeded, follow: C.ZP.follow, unblock: C.ZP.unblock, unfollow: C.ZP.unfollow }))
                    .withAnalytics(),
                x = (e) => `${e}-follow`,
                B = (e) => `${e}-unfollow`,
                L = (e) => `${e}-block`,
                v = (e) => `${e}-unblock`,
                P = (e) => `${e}-cancel`,
                k = (e) => `${e}-subscribe`,
                A = (e) => `${e}-manageSubscription`,
                E = a().hbe4feb5,
                H = a().df4c86b0,
                Z = a().bba40ffa,
                N = a().f558829e,
                I = a().a6941096,
                M = a().j24c37b2,
                D = a().if8cd2a4,
                U = a().b5972260;
            class R extends n.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUserIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserIfNeeded: t, isRelay: o, userId: n } = this.props;
                            n && !o && t(n).catch(e(c.F));
                        }),
                        (this._handleClose = () => {
                            this.setState({ showDialog: !1, dialogText: void 0, dialogHeadline: void 0 });
                        }),
                        (this._handleCancelPendingFollow = () => {
                            const { cancelPendingFollow: e, createLocalApiErrorHandler: t, user: o } = this.props;
                            o && e(o.id_str).catch(t({ defaultToast: { text: U }, showToast: !0 }));
                        }),
                        (this._handleLoggedInFollow = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, follow: o, isFollowNudge: n, onFollowClick: i, promotedContent: s, user: l } = this.props;
                            l && o(l.id_str, { promotedContent: s, isFollowNudge: n }).then(() => (l.protected && e({ text: E({ screenName: l.screen_name }) }), i && i(), this._scribe({ action: "follow" })), t({ ...this._followApiErrorHandlingConfiguration, showToast: !0 }));
                        }),
                        (this._handleLoggedOutFollow = () => {
                            this._scribe({ action: "follow_attempt" });
                        }),
                        (this._handleUnblock = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unblock: o, user: n } = this.props;
                            n && (o(n.id_str, { promotedContent: t }).catch(e(u.D)), this._scribe({ action: "unblock" }));
                        }),
                        (this._handleUnfollow = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unfollow: o, user: n } = this.props;
                            if (n) return o(n.id_str, { promotedContent: t }).catch(e(p.X)), this._scribe({ action: "unfollow" });
                        }),
                        (this._handleSuperFollow = () => {
                            const { history: e, referringPage: t, user: o } = this.props;
                            if (o) return this._scribe({ element: "super_follow_subscribe_button", action: "click" }), e.push(`/${o.screen_name}/creator-subscriptions/subscribe`, { referring_page: t ?? "profile_intent" });
                        }),
                        (this._handleUnSuperFollow = () => {
                            const { history: e, user: t } = this.props;
                            if (t) return this._scribe({ element: "super_follow_unsubscribe_button", action: "click" }), e.push(`/${t.screen_name}/creator-subscriptions/manage`);
                        }),
                        (this.state = { showDialog: !1 });
                }
                componentDidMount() {
                    this.props.isLoggedIn && this._fetchUserIfNeeded(),
                        (this._followApiErrorHandlingConfiguration = {
                            ...d.H,
                            [r.ZP.UserMustBeAlcoholAgeScreened]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: D, dialogHeadline: Z });
                                },
                            },
                            [r.ZP.CannotFollowFromCountry]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: I, dialogHeadline: Z });
                                },
                            },
                            [r.ZP.BirthdateRequired]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: N, dialogHeadline: H });
                                },
                            },
                        });
                }
                render() {
                    const { buttonType: e, isLoggedIn: t, isSuperFollowSubscriptionEnabled: o, isTransparent: l, relationshipMode: a, showRelationshipChangeConfirmation: r, size: c, style: d, user: u, userId: p } = this.props,
                        { dialogHeadline: h, dialogText: m, showDialog: w } = this.state,
                        g = u?.screen_name,
                        _ = g ? `/${g}` : "",
                        y = { follow: x(p), unfollow: B(p), cancel: P(p), block: L(p), unblock: v(p), subscribe: k(p), manageSubscription: A(p) },
                        S = !(!u?.follow_request_sent || !u.protected || u.following);
                    return (
                        !!u &&
                        n.createElement(
                            n.Fragment,
                            null,
                            w ? n.createElement(i.Z, { confirmButtonLabel: M, headline: h, onCancel: this._handleClose, onConfirm: this._handleClose, text: m, withCancelButton: !1 }) : null,
                            n.createElement(f.Z, { displayMode: b.BH.follow, postLoginPath: _, userFullName: u.name, userId: p }, (i) => n.createElement(s.Z, { buttonType: e, isBlocking: u.blocking, isFollowRequestSent: S, isFollowed: !!u.followed_by, isFollowing: !!u.following, isSuperFollowEligible: !!o && u.super_follow_eligible, isSuperFollowing: u.super_following, isTransparent: l, name: g, onCancelPendingFollow: i(this._handleCancelPendingFollow), onFollow: i(this._handleLoggedInFollow, this._handleLoggedOutFollow), onSuperFollow: i(this._handleSuperFollow), onUnSuperFollow: i(this._handleUnSuperFollow), onUnblock: i(this._handleUnblock), onUnfollow: i(this._handleUnfollow), relationshipMode: a, showRelationshipChangeConfirmation: t && r, size: c, style: d, testIDs: y, type: "user" })),
                        )
                    );
                }
                _scribe(e) {
                    const { action: t, element: o } = e,
                        { analytics: n, location: i, promotedContent: s, user: l } = this.props,
                        { items: a } = n.contextualScribeData,
                        r = a?.find((e) => e.item_type === h.Z.ItemType.USER && e.id === l?.id_str),
                        c = [];
                    l ? c.push({ ...r, ...m.Z.getUserItem(l, s) }) : r && c.push(r);
                    const d = i.query && i.query.screen_name ? { items: c, context: "profile_intent" } : { items: c };
                    return n.scribe({ element: o, action: t, data: d });
                }
            }
            const O = (0, w.ZP)(T(R));
        },
        233391: (e, t, o) => {
            o.d(t, { BH: () => O, Qj: () => j, Wc: () => z, sI: () => $ });
            var n = o(202784),
                i = o(731708),
                s = o(392237),
                l = o(111677),
                a = o.n(l),
                r = o(911373),
                c = o(761744),
                d = o(98440),
                u = o(720600),
                p = o(125966),
                h = o(544367),
                m = o(452693),
                w = o(971657),
                b = o(956272),
                f = o(520913);
            const g = a().a17a75da,
                _ = a().e7342ed4,
                y = a().b6a43e78,
                S = a().b469e406,
                C = a().b8505290,
                F = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "e1a49407" }, n.createElement(i.ZP, null, e)) : void 0),
                T = a().ae8b0564,
                x = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "be54ed41" }, n.createElement(i.ZP, null, e)) : void 0),
                B = a().f2adab0e,
                L = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "jb19eb17" }, n.createElement(i.ZP, null, e)) : void 0),
                v = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "bbfee611" }, n.createElement(i.ZP, null, e)) : void 0),
                P = a().b7821a74,
                k = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "af104f2b" }, n.createElement(i.ZP, null, e)) : void 0),
                A = ({ customText: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "ccc1f303" }, n.createElement(i.ZP, null, e)) : void 0),
                E = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "ce02fabf" }, n.createElement(i.ZP, null, e)) : void 0),
                H = a().e6d43d06,
                Z = ({ customText: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "a85608a7" }, n.createElement(i.ZP, null, e)) : void 0),
                N = a().ic848090,
                I = a().f9ebe066,
                M = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "c76865b7" }, n.createElement(i.ZP, null, e)) : void 0),
                D = a().je3d93e2,
                U = a().ea88ce2e,
                R = a().je3d93e2,
                O = Object.freeze({ follow: "follow", like: "like", reply: "reply", retweet: "retweet", generic: "generic", dmshare: "dmshare", postvideo: "postvideo", subscribe: "subscribe", topic: "topic", community: "community", bookmark: "bookmark", search: "search" }),
                z = (e, t) => {
                    switch (t) {
                        case O.follow:
                            return { icon: r.default, text: v, subtext: P, iconStyle: W.iconOther };
                        case O.like:
                            return { icon: c.default, text: B, subtext: L, iconStyle: W.iconLike };
                        case O.reply:
                            return { icon: d.default, text: C, subtext: F, iconStyle: W.iconOther };
                        case O.retweet:
                            return { icon: u.default, text: T, subtext: x, iconStyle: W.iconRetweet };
                        case O.dmshare:
                            return { icon: p.default, text: k, iconStyle: W.iconOther };
                        case O.subscribe:
                            return { icon: h.default, text: A, subtext: E, iconStyle: W.iconOther };
                        case O.topic:
                            return { icon: m.default, text: H, subtext: Z, iconStyle: W.iconTopics };
                        case O.community:
                            return { icon: w.default, text: N, subtext: I, iconStyle: W.iconOther };
                        case O.search:
                            return { icon: b.default, text: M, subtext: D, iconStyle: W.iconOther };
                        default:
                            return { icon: f.default, text: U, subtext: R, iconStyle: W.iconTwitter };
                    }
                },
                $ = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? g : y),
                j = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? _ : S),
                W = s.default.create((e) => ({ iconOther: { color: e.colors.blue500 }, iconLike: { color: e.colors.magenta500 }, iconTwitter: { color: e.colors.brandColor }, iconRetweet: { color: e.colors.green500 }, iconTopics: { color: e.colors.blue500 } }));
        },
        369241: (e, t, o) => {
            o.d(t, { BH: () => L.BH, ZP: () => N });
            o(875640);
            var n = o(202784),
                i = o(529356),
                s = o(111677),
                l = o.n(s),
                a = o(323265),
                r = o(170542),
                c = o(951790),
                d = o(804027),
                u = o(443781),
                p = o(325686),
                h = o(292627),
                m = o(731708),
                w = o(154003),
                b = o(392237);
            class f extends n.PureComponent {
                render() {
                    const { onPrimaryButtonClick: e, onSecondaryButtonClick: t, primaryButtonLabel: o, primaryText: i, secondaryButtonLabel: s, secondaryText: l } = this.props;
                    return n.createElement(h.Z.HalfSheet, null, n.createElement(p.Z, { style: g.sheetContent }, n.createElement(p.Z, { style: g.content }, n.createElement(p.Z, { style: g.header }, n.createElement(m.ZP, { color: "white", size: "headline1", weight: "bold" }, i)), n.createElement(m.ZP, { color: "white", style: g.secondaryText }, l)), n.createElement(p.Z, { style: g.footer }, n.createElement(w.ZP, { onPress: t, size: "medium", style: g.button, type: "onMediaOutlined" }, n.createElement(m.ZP, { numberOfLines: 1 }, s)), n.createElement(w.ZP, { onPress: e, size: "medium", style: g.button, type: "onMediaWhiteFilled" }, n.createElement(m.ZP, { numberOfLines: 1 }, o)))));
                }
            }
            const g = b.default.create((e) => ({ content: { padding: e.spaces.space20 }, footer: { flexDirection: "row", justifyContent: "space-between", paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space20, flexWrap: "wrap" }, button: { marginBottom: e.spaces.space4 }, header: { flexDirection: "row" }, secondaryText: { paddingTop: e.spaces.space12 }, sheetContent: { paddingBottom: b.default.iPhoneOffsetBottom, backgroundColor: e.colors.primary } })),
                _ = f;
            var y = o(668214),
                S = o(558369),
                C = o(118823),
                F = o(390387),
                T = o(38562),
                x = o(936572);
            const B = (0, y.Z)()
                .propsFromState(() => ({ featureSwitchImpressions: S.ur, loginPromptShown: T.fj, loginPromptLastShown: x.ne, startLocation: C.Lg }))
                .propsFromActions(() => ({ setLoginPromptShown: T.Af, setLoginReturnPath: F.Jm, updateSettings: T.VP }))
                .withAnalytics();
            var L = o(233391);
            o(920099), o(856642), o(782826), o(903019);
            const v = Object.freeze({ BannerSwitchToApp: "banner_switch_to_app", InterstitialSwitchToApp: "interstitial_switch_to_app", NuxAppDownload: "NUX-app-download", SwitchToAppFooter: "switch-to-app-footer", UseApp: "use-app", UseAppExtended: "use-app-extended", SwitchToAppHigh7: "switch_to_app_high_7", SwitchToAppHigh1: "switch_to_app_high_1", SwitchToAppHigh2: "switch_to_app_high_2", SwitchToAppHigh3: "switch_to_app_high_3", SwitchToAppHigh5: "switch_to_app_high_5", SwitchToAppLow7: "switch_to_app_low_7", SwitchToAppLow1: "switch_to_app_low_1", SwitchToAppLow3: "switch_to_app_low_3", SwitchToAppLow5: "switch_to_app_low_5", SwitchToAppLow9: "switch_to_app_low_9" }),
                P = l().j607bf02,
                k = l().j49fd4e8,
                A = l().hd50e064,
                E = l().a565833e,
                H = l().e919c3bc;
            class Z extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getFullSheetDisplayElements = L.Wc.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetPrimaryText = L.sI.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetSecondaryText = L.Qj.bind(null, this.context.featureSwitches)),
                        (this._isStandaloneApp = r.Z.isStandaloneApp()),
                        (this._shouldRenderPrompt = () => {
                            const { loginPromptLastShown: e, loginPromptShown: t, onlyShowOnce: o, useBottomBanner: n } = this.props,
                                { displayInterval: i } = this.state;
                            if (n && !this._hasMobileAppStore()) return !1;
                            if (o) {
                                if (t) return !1;
                                if (i && Date.now() - e < i) return !1;
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
                            const { onClose: t, postLoginPath: o, setLoginReturnPath: n } = this.props;
                            this._scribeAction("login"), o && n(o), t();
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
                                case L.BH.follow:
                                    return { gatedAction: { action: d.qJ.Follow, user_id: o } };
                                case L.BH.like:
                                    return { gatedAction: { action: d.qJ.Favorite, tweet_id: t, user_id: o } };
                                case L.BH.reply:
                                    return { gatedAction: { action: d.qJ.Reply, tweet_id: t, user_id: o } };
                                case L.BH.retweet:
                                    return { gatedAction: { action: d.qJ.Retweet, tweet_id: t, user_id: o } };
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
                    const n = this.context.featureSwitches.getNumberValue("rweb_update_fatigue_switch_to_app_day_timeout"),
                        i = this.context.featureSwitches.getStringValue("rweb_update_fatigue_switch_to_app_link");
                    this.state = { displayInterval: o ? 864e5 * n : 0, switchToAppLink: v[i] };
                }
                componentDidMount() {
                    this._shouldRenderPrompt() && this._scribeAction("impression");
                }
                componentWillUnmount() {
                    const { loginPromptShown: e, onlyShowOnce: t, setLoginPromptShown: o, updateSettings: n } = this.props;
                    !e && t && (o(!0), n({ loginPromptLastShown: Date.now() }));
                }
                render() {
                    const { allowBackNavigation: e, customText: t, displayMode: o, hideSignUp: s, isFullHeightOnMobile: l, loginLabel: a, useBottomBanner: r, userFullName: c } = this.props;
                    if (!this._shouldRenderPrompt()) return null;
                    const { icon: d, iconStyle: u, subtext: p, text: h } = this._getFullSheetDisplayElements(o),
                        m = "function" == typeof h ? h({ customText: t, userFullName: c }) : h,
                        w = "function" == typeof p ? p({ customText: t, userFullName: c }) : p,
                        b = s ? "" : this.props.signupLabel,
                        f = { pathname: "/i/flow/login", state: this._getLoginState() },
                        g = { pathname: "/i/flow/signup", state: this._getSignupState() };
                    return r ? n.createElement(_, { onPrimaryButtonClick: this._handleAppInstallButtonClick, onSecondaryButtonClick: this._handleNotNow, primaryButtonLabel: k, primaryText: this._getHalfSheetPrimaryText(), secondaryButtonLabel: A, secondaryText: this._getHalfSheetSecondaryText() }) : n.createElement(i.Z, { actionLabel: a, actionLink: f, allowBackNavigation: e, graphic: d, graphicStyle: u, headline: m || "", isFullHeightOnMobile: l, onAction: this._handleSubmit, onClose: this._handleClose, onSecondaryAction: this._handleSignupButtonClick, onTertiaryAction: this._showTertiaryCTA ? this._handleAppInstallButtonClick : void 0, secondaryActionLabel: b, secondaryActionLink: g, subtext: w || "", tertiaryActionLabel: this._showTertiaryCTA ? P : void 0, useBrandedActionButtons: !0 });
                }
                _scribeAction(e) {
                    const { analytics: t, displayMode: o, useBottomBanner: n } = this.props,
                        i = n ? "half_sheet" : o;
                    t.scribe({ component: "login_signup_sheet", element: i, action: e });
                }
            }
            (Z.defaultProps = { displayMode: L.BH.generic, hideSignUp: !1, isFullHeightOnMobile: !0, useBottomBanner: !1, loginLabel: H, signupLabel: E, onlyShowOnce: !1 }), (Z.displayMode = L.BH), (Z.contextType = u.rC);
            const N = B(Z);
        },
        288955: (e, t, o) => {
            o.d(t, { Z: () => r });
            var n = o(807896),
                i = o(202784),
                s = o(443781),
                l = o(369241);
            class a extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showLoginPrompt: !1 }),
                        (this._getHandler =
                            (e, t) =>
                            (o, ...n) => {
                                this.props.disabled || this.context.loggedInUserId ? e && e(o, ...n) : (o && o.preventDefault && o.preventDefault(), t && t(), this.setState({ showLoginPrompt: !0 }));
                            }),
                        (this._handleClose = () => {
                            this.setState({ showLoginPrompt: !1 });
                        });
                }
                render() {
                    const { children: e, disabled: t, ...o } = this.props;
                    return i.createElement(i.Fragment, null, e(this._getHandler), this.state.showLoginPrompt && i.createElement(l.ZP, (0, n.Z)({ onClose: this._handleClose }, o)));
                }
            }
            (a.defaultProps = { disabled: !1 }), (a.contextType = s.rC);
            const r = a;
        },
        666670: (e, t, o) => {
            o.d(t, { F: () => l });
            var n = o(516951),
                i = o(615656),
                s = o(51525);
            const l = { [i.ZP.AddressBookLookupNotFound]: { customAction: s.vv }, [i.ZP.GenericUserNotFound]: { customAction: n.Z }, [i.ZP.OtherUserSuspended]: { customAction: n.Z }, showToast: !0 };
        },
        757953: (e, t, o) => {
            o.d(t, { H: () => m });
            var n = o(111677),
                i = o.n(n),
                s = o(516951),
                l = o(615656),
                a = o(51525);
            const r = i().j4292c24,
                c = i().a0ba5842,
                d = i().i859a9d4,
                u = i().a5202b82,
                p = i().f8cbf714,
                h = i().f2e66452,
                m = { defaultToast: { text: u }, [l.ZP.CurrentUserSuspended]: { toast: { text: h, action: { label: d, link: "https://support.twitter.com/articles/15790" } } }, [l.ZP.DuplicateFollowRequest]: { customAction: s.Z }, [l.ZP.FollowBlockedUserError]: { toast: { text: r } }, [l.ZP.FollowError]: { customAction: a.w1 }, [l.ZP.FollowRateLimitExceeded]: { toast: { action: { label: d, link: "https://support.twitter.com/articles/66885" }, text: c } }, [l.ZP.TargetUserNotFound]: { toast: { text: p } } };
        },
        323683: (e, t, o) => {
            o.d(t, { X: () => i });
            var n = o(111677);
            const i = { defaultToast: { text: o.n(n)().e1a0aaca }, showToast: !0 };
        },
        951790: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(323265);
            const i = {
                    setLocation(e) {
                        document.location = e;
                    },
                    getAppStoreURLs(e = "rwoiah") {
                        const t = s(e),
                            o = [t.android, t.ios],
                            n = o.find((e) => e.matches());
                        return n ? [n] : o;
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
                        t[0] && i.setLocation(t[0].url);
                    },
                    openApp(e = "twitter://timeline") {
                        i.setLocation(e);
                    },
                },
                s = (e = "rwoiah") => ({ android: { platform: "android", matches: () => n.ZP.isAndroid(), url: `market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}`, webUrl: `https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}` }, ios: { platform: "ios", matches: () => n.ZP.isIOS(), url: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8`, webUrl: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8` } }),
                l = i;
        },
        970187: (e, t, o) => {
            o.d(t, { Z: () => be });
            var n = o(202784),
                i = o(614983),
                s = o.n(i),
                l = o(111677),
                a = o.n(l),
                r = o(516951),
                c = o(616894),
                d = o(807896),
                u = o(325686),
                p = o(154003),
                h = o(190286),
                m = o(466792);
            Object.freeze({ iconText: "icon-text", onlyIcon: "only-icon", onlyText: "only-text" });
            class w extends n.Component {
                constructor(e) {
                    super(e),
                        (this._minWidth = 0),
                        (this._isMounted = !0),
                        (this._handleLabelMeasure = (e = !1) => {
                            setTimeout(() => {
                                const t = this._containerRef?.getBoundingClientRect().width,
                                    o = this._containerRef?.offsetWidth;
                                let n = 0;
                                t && o && (n = o ? t : o), (this._minWidth = Math.ceil(Math.max(this._minWidth, n))), e && this._isMounted && this.forceUpdate();
                            }, 0);
                        }),
                        (this._getCustomButtonProps = (e) => {
                            const { customButtonConfig: t } = this.props;
                            if (!t) return;
                            const { customButtonBackgroundColor: o, customButtonBorderColor: n, customButtonColor: i, customButtonHoverBackgroundColor: s, customButtonHoverBorderColor: l, customButtonHoverColor: a } = t,
                                r = { color: i, backgroundColor: o, borderColor: n };
                            return e && ((r.color = a || i), (r.backgroundColor = s || o), (r.borderColor = l || n)), r;
                        }),
                        (this._handleButtonPress = (e) => {
                            e.preventDefault(), this.props.showRelationshipChangeConfirmation ? this.setState({ showConfirmation: !0 }) : ((this._minWidth = 0), this.forceUpdate(), this.props.onClick());
                        }),
                        (this._handleConfirm = (e) => {
                            (this._minWidth = 0), this.setState({ showConfirmation: !1 }), this.props.onClick(), this._buttonRef?.focus();
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 }), this._buttonRef?.focus();
                        }),
                        (this._handleHoverIn = () => {
                            this._handleLabelMeasure(!0);
                        }),
                        (this._setButtonRef = (e) => {
                            this._buttonRef = e;
                        }),
                        (this._setContainerRef = (e) => {
                            (this._containerRef = e), this._handleLabelMeasure();
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                componentDidUpdate(e) {
                    e.buttonDefaultLabel !== this.props.buttonDefaultLabel && this._handleLabelMeasure();
                }
                render() {
                    const { "aria-describedby": e, "aria-label": t, buttonDefaultLabel: o, buttonHoverLabel: i, buttonHoverType: s, buttonType: l, confirmationSheetCancelLabel: a, confirmationSheetConfirmLabel: r, confirmationSheetHeadline: c, confirmationSheetPrimaryButtonType: w, confirmationSheetText: b, disabled: f, displayMode: g, icon: _, id: y, onHoverOut: S, size: C, style: F, testID: T } = this.props,
                        x = [F, { minWidth: this._minWidth }];
                    return n.createElement(
                        u.Z,
                        { ref: this._setContainerRef, style: x },
                        n.createElement(m.Z, { onHoverIn: this._handleHoverIn, onHoverOut: S }, ({ isHovered: a }) => {
                            const r = a ? i : o,
                                c = a && s ? s : l,
                                u = this._getCustomButtonProps(a);
                            return n.createElement(p.ZP, (0, d.Z)({ "aria-describedby": e, "aria-label": "only-icon" === g ? r : t, disabled: f, icon: "only-text" !== g ? _ : void 0, id: y, onPress: this._handleButtonPress, ref: this._setButtonRef, size: C, testID: T, type: c }, u), "only-icon" === g ? void 0 : r);
                        }),
                        this.state.showConfirmation ? n.createElement(h.Z, { cancelButtonLabel: a, confirmButtonLabel: r, confirmButtonType: w, headline: c, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: b }) : null,
                    );
                }
            }
            w.defaultProps = { showRelationshipChangeConfirmation: !1 };
            const b = w,
                f = a().i8cfb6e6,
                g = a().ea100d6a,
                _ = a().fe40537f,
                y = a().i58d8718,
                S = n.createElement(c.default, null),
                C = ({ disabled: e, displayMode: t, onUnblock: o, showRelationshipChangeConfirmation: i, size: s, style: l, testID: a, userScreenName: r }) => n.createElement(b, { buttonDefaultLabel: f, buttonHoverLabel: g, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: g, confirmationSheetHeadline: _({ screenName: r }), confirmationSheetText: y, disabled: e, displayMode: t, icon: S, onClick: o, showRelationshipChangeConfirmation: i, size: s, style: l, testID: a });
            var F = o(466999),
                T = o(76388),
                x = o(911373),
                B = o(733357),
                L = o(352924),
                v = o(392237);
            const P = a().ee05e96b,
                k = a().f238ba1d,
                A = a().aeb6f0a0,
                E = a().a77a27c0,
                H = a().b4397192,
                Z = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                N = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                I = v.default.create((e) => ({ hidden: { display: "none" } })),
                M = ({ "aria-describedby": e, buttonType: t, disabled: o, displayMode: i, id: s, isSuperFollowEligible: l, isSuperFollowing: a, isTransparent: r, name: c, onSuperFollow: d, onUnSuperFollow: u, size: p, style: h, testID: m }) => {
                    const w = n.useCallback(() => {
                            a ? u() : l && d();
                        }, [l, a, d, u]),
                        f = void 0 !== c ? `@${String(c)}` : "",
                        g = a ? E : A,
                        _ = f.length > 0 && void 0 !== g ? k({ followType: g, screenName: f }) : "",
                        y = a ? H : A,
                        S = a ? N(r) : t ? void 0 : Z(r),
                        C = n.useMemo(() => (void 0 !== e ? e : (0, L.F)()), [e]),
                        T = n.useCallback(() => {
                            const e = a ? E : l ? P({ followType: A, screenName: c }) : null;
                            return e && !(0, B.Z)(e) ? n.createElement(F.Z, { id: C, style: I.hidden }, e) : null;
                        }, [a, l, C, c]);
                    return n.createElement(n.Fragment, null, n.createElement(b, { "aria-describedby": C, "aria-label": _, buttonDefaultLabel: g, buttonHoverLabel: y, buttonType: t, customButtonConfig: S, disabled: o, displayMode: i, id: s, onClick: w, size: p, style: h, testID: m }), void 0 === e ? T() : null);
                },
                D = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                U = a().cda66545,
                R = a().ee05e96b,
                O = a().a8d77a25,
                z = a().d0f4f3d9,
                $ = a().f238ba1d,
                j = a().j6161cab,
                W = a().i4bb9ef7,
                q = a().ge753264,
                J = a().b837c0e8,
                V = n.createElement(T.default, null),
                Q = n.createElement(x.default, null),
                X = a().ddac1f1d,
                G = a().j8e33c40;
            class K extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getDescribedById = () => {
                            const { "aria-describedby": e } = this.props;
                            return void 0 !== e ? e : (0, L.F)();
                        }),
                        (this._renderDescribedBy = (e, t) => {
                            const o = this._getDescribedByText();
                            return (0, B.Z)(o) ? null : n.createElement(F.Z, { id: e, style: { display: "none" } }, o);
                        }),
                        (this._getDescribedByText = () => {
                            const { buttonText: e, isFollowing: t, isSuperFollowEligible: o, isSuperFollowing: n, name: i, type: s } = this.props;
                            let l = "";
                            const a = void 0 === i ? "" : i;
                            switch (s) {
                                case D.user:
                                case D.topic:
                                case D.list:
                                    n && e.unSuperFollow ? (l = e.unSuperFollow) : t ? (l = o ? R({ followType: e.superFollow, screenName: a }) : U({ followType: e.unfollow, screenName: a })) : t || (l = U({ followType: e.follow, screenName: a }));
                                    break;
                                case D.community:
                                    l = t ? O({ screenName: a }) : U({ followType: e.follow, screenName: a });
                                    break;
                                case D.spaces:
                                    t ? (l = U({ followType: e.unfollow, screenName: a })) : t || (l = U({ followType: e.follow, screenName: a }));
                                    break;
                                default:
                                    l = "";
                            }
                            return l;
                        }),
                        (this._getText = () => {
                            const { buttonText: e, name: t, type: o } = this.props,
                                n = void 0 !== t ? t : "",
                                i = W({ title: t }),
                                s = { [D.user]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: j({ screenName: t }), confirmationSheetText: q }, [D.topic]: { ariaFollowName: n, confirmationHeadline: i, confirmationSheetText: J }, [D.list]: { ariaFollowName: n, confirmationHeadline: i, confirmationSheetText: void 0 }, [D.community]: { ariaFollowName: n, confirmationHeadline: X({ communityName: t }), confirmationSheetText: G }, [D.spaces]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: j({ screenName: t }), confirmationSheetText: q } };
                            return { ariaFollowName: s[o].ariaFollowName, followLabel: e.follow, followBackLabel: e.followBack, followingLabel: e.following, unfollowLabel: e.unfollow, superFollowLabel: e.superFollow, superFollowingLabel: e.superFollowing, unSuperFollowLabel: e.unSuperFollow, confirmationHeadline: e.confirmationHeadline || s[o].confirmationHeadline, confirmationSheetText: e.confirmationSheetText || s[o].confirmationSheetText };
                        }),
                        (this._handlePress = () => {
                            const { isFollowing: e, isSuperFollowEligible: t, isSuperFollowing: o, onFollow: n, onSuperFollow: i, onUnSuperFollow: s, onUnfollow: l } = this.props;
                            o ? s() : e ? (t ? i() : l()) : (n(), this.setState({ hasJustFollowed: !0 }));
                        }),
                        (this._handleHoverOut = () => {
                            this.state.hasJustFollowed && this.setState({ hasJustFollowed: !1 });
                        }),
                        (this.state = { hasJustFollowed: !1 });
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, disabled: o, displayMode: i, id: s, isFollowed: l, isFollowing: a, isSuperFollowEligible: r, isSuperFollowing: c, isTransparent: d, showRelationshipChangeConfirmation: u, size: p, style: h, testID: m, type: w, withConfirmationSheetText: f } = this.props,
                        { ariaFollowName: g, confirmationHeadline: _, confirmationSheetText: y, followBackLabel: S, followLabel: C, followingLabel: F, superFollowLabel: T, superFollowingLabel: x, unSuperFollowLabel: B, unfollowLabel: L } = this._getText(),
                        { hasJustFollowed: v } = this.state,
                        P = (t && t.followIcon) || Q,
                        k = (t && t.followingIcon) || V,
                        A = "only-text" !== i ? (a ? k : P) : void 0;
                    let E = a ? F : C;
                    l && !a && S && (E = S);
                    let H = z;
                    (c || (a && r)) && (c && x ? ((H = $), (E = x)) : r && T && ((H = $), (E = T)));
                    const I = g.length > 0 && void 0 !== E ? H({ followType: E, screenName: g }) : "",
                        M = "primaryFilled";
                    let U, R, O, j;
                    const W = d ? "brandText" : M,
                        q = d ? "destructiveText" : "destructiveOutlined",
                        J = !c && (!a || !r) && a,
                        X = a ? "onMediaWhiteFilled" : "onMediaOutlined",
                        G = a ? "onMediaOutlined" : "onMediaWhiteFilled";
                    w === D.community ? (U = a ? L : C) : w === D.spaces ? ((U = a ? L : C), (R = X), (O = G)) : c && B ? ((j = N(d)), (U = B)) : a ? ((U = v ? F : L), (R = v ? W : q), (O = d ? "brandText" : "primaryOutlined"), r && T && ((j = Z(d)), (U = T), (O = void 0), (R = void 0))) : ((U = l && S ? S : C), (R = d ? "brandText" : M), (O = d ? "brandText" : M));
                    const K = this._getDescribedById();
                    return n.createElement(n.Fragment, null, n.createElement(b, { "aria-describedby": K, "aria-label": I, buttonDefaultLabel: E, buttonHoverLabel: U, buttonHoverType: R, buttonType: O, confirmationSheetConfirmLabel: L, confirmationSheetHeadline: _, confirmationSheetText: f ? y : void 0, customButtonConfig: j, disabled: o, displayMode: i, icon: A, id: s, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: J && u, size: p, style: h, testID: m }), void 0 === e ? this._renderDescribedBy(K) : null);
                }
            }
            const Y = K;
            var ee = o(311687);
            const te = a().f305840e,
                oe = a().e23b20a0,
                ne = a().fe04d89a,
                ie = a().i036327c,
                se = a().j95e3097,
                le = n.createElement(ee.default, null),
                ae = ({ disabled: e, displayMode: t, onCancelPendingFollow: o, showRelationshipChangeConfirmation: i, size: s, style: l, testID: a, userScreenName: r }) => n.createElement(b, { buttonDefaultLabel: te, buttonHoverLabel: oe, buttonType: "primaryOutlined", confirmationSheetCancelLabel: oe, confirmationSheetConfirmLabel: ne, confirmationSheetHeadline: ie, confirmationSheetText: se({ screenName: r }), disabled: e, displayMode: t, icon: le, onClick: o, showRelationshipChangeConfirmation: i, size: s, style: l, testID: a }),
                re = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                ce = a().ec72e2f8,
                de = a().a5f7ce12,
                ue = a().c3befdbe,
                pe = a().d3029dbc,
                he = a().aeb6f0a0,
                me = a().a77a27c0,
                we = a().b4397192;
            class be extends n.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, buttonText: o, buttonType: i, disabled: s, displayMode: l, id: a, isBlocking: r, isFollowRequestSent: c, isFollowed: d, isFollowing: u, isSuperFollowEligible: p, isSuperFollowing: h, isTransparent: m, name: w, onCancelPendingFollow: b, onFollow: f, onSuperFollow: g, onUnSuperFollow: _, onUnblock: y, onUnfollow: S, relationshipMode: F, showRelationshipChangeConfirmation: T, size: x, style: B, testIDs: L, type: v, withConfirmationSheetText: P } = this.props,
                        k = r,
                        A = c,
                        E = F === re.subscribe && (p || h);
                    return k ? n.createElement(C, { disabled: s, displayMode: l, onUnblock: y, showRelationshipChangeConfirmation: T, size: x, style: B, testID: L?.unblock, userScreenName: w }) : A ? n.createElement(ae, { disabled: s, displayMode: l, onCancelPendingFollow: b, showRelationshipChangeConfirmation: T, size: x, style: B, testID: L?.cancel, userScreenName: w }) : E ? n.createElement(M, { "aria-describedby": e, buttonType: i, disabled: s, displayMode: l, id: a, isSuperFollowEligible: p, isSuperFollowing: h, isTransparent: m, name: w, onSuperFollow: g, onUnSuperFollow: _, size: x, style: B, testID: h ? L?.manageSubscription : L?.subscribe }) : n.createElement(Y, { "aria-describedby": e, buttonIcons: t, buttonText: o, disabled: s, displayMode: l, id: a, isFollowed: d, isFollowing: u, isSuperFollowEligible: p, isSuperFollowing: h, isTransparent: m, name: w, onFollow: f, onSuperFollow: g, onUnSuperFollow: _, onUnfollow: S, showRelationshipChangeConfirmation: T, size: x, style: B, testID: u ? L?.unfollow : L?.follow, type: v, withConfirmationSheetText: P });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: t } = this.props,
                        o = t && "string" == typeof e,
                        n = !t;
                    s()(o || n, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            be.defaultProps = { buttonText: { follow: ce, followBack: de, following: ue, unfollow: pe, superFollow: he, superFollowing: me, unSuperFollow: we }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: r.Z, onSuperFollow: r.Z, onUnblock: r.Z, onUnSuperFollow: r.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir.0e6a865a.js.map
