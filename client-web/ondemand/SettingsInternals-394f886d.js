"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-394f886d"],
    {
        50110: (e, t, n) => {
            n.r(t), n.d(t, { PersonalizationScreen: () => X, default: () => ee });
            var s = n(202784),
                r = n(325686),
                a = n(731708),
                o = n(954110),
                i = n(420412),
                c = n(844685),
                l = n(688715),
                h = n(779610),
                d = n(190286),
                p = n(111677),
                u = n.n(p),
                m = n(516951),
                _ = n(290402),
                g = n(443781),
                f = n(652904),
                S = n(503229),
                b = n(829824),
                E = n(264922),
                C = n(267966),
                w = n(24949),
                Z = n(71620),
                y = n(668214),
                L = n(205253),
                T = n(390387),
                P = n(38562);
            const k = (0, y.Z)()
                .propsFromState(() => ({ fetchStatus: L.I3, isEUUser: (0, w.P1)(T.Qb, P.l4, L.LP, (e, t, n) => !(!t.settings_metadata || !t.settings_metadata.is_eu) || n.is_eu_country), personalization: L.LP, settings: L.kQ }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, Z.zr)("SETTINGS_PERSONALIZATION_SCREEN"), fetchPreferencesIfNeeded: L.CP, syncSettings: L.Z$, updateSettings: L.VP }))
                .withAnalytics({ page: "settings", section: "personalization" });
            var x = n(754393);
            const v = u().e8f57e08,
                A = u().f1768324,
                I = u().ja94f34e,
                D = u().e8f57e08,
                F = u().bd73f7e6,
                B = u().a55db872,
                U = u().ddbc3288,
                N = u().ae5339a0,
                R = { headline: u().b934e0ea, text: u().i0317e0e, confirmButtonLabel: u().a148acba },
                H = u().e8313b32,
                z = u().f1d46fd6,
                V = u().cfd2f35e,
                j = u().ib3357a6,
                W = u().f2f9628e,
                M = u().f6c8ccc8,
                O = u().ed012c88,
                G = u().aa023546,
                q = u().af7d89e6,
                Q = u().ced77194,
                $ = u().e2d61838,
                Y = u().c966aaf4,
                J = u().d3c20d80,
                K = u().f1c0d09c;
            class X extends s.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._render = () => {
                            const { allowDeviceAccess: e, allowLocationHistoryUse: t, allowPartnerships: n, allowPersonalization: p } = this.props.settings,
                                { showDisableEUConfirmation: u, showSwitchAllConfirmation: m } = this.state;
                            return s.createElement(r.Z, null, s.createElement(r.Z, null, s.createElement(a.ZP, { color: "gray700", size: "subtext2", style: [C.Z.infoText, C.Z.bottomBorder] }, this._isLoggedIn ? A : I)), s.createElement(o.Z, { checked: this._getSwitchAllValue(), helpText: F, key: "switchAll", label: D, name: "switchAll", onChange: this._handleSwitchAllChanged, type: "switch" }), s.createElement(i.Z, null), s.createElement(c.Z, { text: B }), s.createElement(o.Z, { checked: p, helpText: W, key: "allowPersonalization", label: j, learnMoreLink: (0, l.ju)("https://support.x.com/articles/20170405"), name: "allowPersonalization", onChange: this._handleBooleanChanged }), s.createElement(o.Z, { checked: e, helpText: O, key: "allowDeviceAccess", label: M, learnMoreLink: (0, l.ju)("https://support.x.com/articles/20175257"), name: "allowDeviceAccess", onChange: this._handleBooleanChanged }), this._isLoggedIn && s.createElement(o.Z, { checked: t, helpText: q, key: "allowLocationHistoryUse", label: G, name: "allowLocationHistoryUse", onChange: this._handleBooleanChanged }), s.createElement(i.Z, null), s.createElement(c.Z, { text: U }), !this.context.featureSwitches.isTrue("ucpd_enabled") && this._renderCookiePersonalizationSetting(), s.createElement(o.Z, { checked: n, helpText: K, key: "allowPartnerships", label: J, learnMoreLink: (0, l.ju)("https://support.x.com/articles/20175379"), name: "allowPartnerships", onChange: this._handleBooleanChanged }), this._isLoggedIn && s.createElement(h.Z, { label: N, link: "/settings/your_twitter_data" }), u && s.createElement(d.Z, { cancelButtonLabel: V, confirmButtonLabel: z, onCancel: this._handleCancelDisableEU, onConfirm: this._handleDisableEUCookies, text: H }), m && s.createElement(d.Z, { confirmButtonLabel: R.confirmButtonLabel, headline: R.headline, onCancel: this._handleCancelSwitchAll, onConfirm: this._handleConfirmSwitchAll, text: R.text }));
                        }),
                        (this._handleCancelSwitchAll = () => {
                            this.setState({ showSwitchAllConfirmation: !1 });
                        }),
                        (this._handleConfirmSwitchAll = () => {
                            this._handleBulkUpdateSettings(!1);
                        }),
                        (this._handleSwitchAllChanged = (e, t) => {
                            t ? this._handleBulkUpdateSettings(!0) : this.setState({ showSwitchAllConfirmation: !0 });
                        }),
                        (this._handleCancelDisableEU = () => {
                            this.setState({ showDisableEUConfirmation: !1 });
                        }),
                        (this._handleEUCookiesChanged = () => {
                            this.setState({ showDisableEUConfirmation: !0 });
                        }),
                        (this._handleDisableEUCookies = () => {
                            const { createLocalApiErrorHandler: e, updateSettings: t } = this.props;
                            t({ allowCookieUse: !1 }).catch(e()), this.setState({ showDisableEUConfirmation: !1 });
                        }),
                        (this._handleBulkUpdateSettings = (e) => {
                            const { createLocalApiErrorHandler: t, isEUUser: n, settings: s, updateSettings: r } = this.props,
                                a = {};
                            Object.keys(s).forEach((t) => {
                                (n && "allowCookieUse" === t) || (a[t] = e);
                            }),
                                this._scribeAction("toggle_all", a),
                                r(a).catch(t()),
                                this.setState({ showSwitchAllConfirmation: !1 });
                        }),
                        (this._handleBooleanChanged = (e, t) => {
                            const { createLocalApiErrorHandler: n, updateSettings: s } = this.props,
                                r = { [e]: t };
                            this._scribeAction(e, r), s(r).catch(n());
                        }),
                        (this._scribeAction = (e, t) => {
                            this.props.analytics.scribe({ component: e, action: "edit", data: { metadata: t } });
                        }),
                        (this._handleFetchPreferences = () => {
                            const { createLocalApiErrorHandler: e, fetchPreferencesIfNeeded: t } = this.props;
                            t().catch(e());
                        }),
                        (this.state = { showSwitchAllConfirmation: !1, showDisableEUConfirmation: !1 });
                }
                componentDidMount() {
                    const { viewerUserId: e } = this.context,
                        { createLocalApiErrorHandler: t, syncSettings: n } = this.props;
                    (this._isLoggedIn = !!e), this._handleFetchPreferences(), this._isLoggedIn || n().catch(t());
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return s.createElement(f.Z, null, s.createElement(E.Z, { location: t, title: v }, s.createElement(b.Z, null, s.createElement(_.Z, { fetchStatus: e, onRequestRetry: this._handleFetchPreferences, render: this._render }))));
                }
                _renderCookiePersonalizationSetting() {
                    const { isEUUser: e } = this.props,
                        { allowCookieUse: t } = this.props.settings,
                        n = !!t;
                    let r,
                        a = !1,
                        i = m.Z;
                    const c = Q;
                    return e ? ((r = Y), n ? (i = this._handleEUCookiesChanged) : (a = !0)) : ((r = $), (i = this._handleBooleanChanged)), s.createElement(o.Z, { checked: t, disabled: a, helpText: r, key: "allowCookieUse", label: c, learnMoreLink: (0, l.ju)("https://support.x.com/articles/20169421"), name: "allowCookieUse", onChange: i });
                }
                _getSwitchAllValue() {
                    const { settings: e } = this.props,
                        t = (0, x.o)(e);
                    return "some" === t || "all" === t;
                }
            }
            X.contextType = g.rC;
            const ee = k((0, S.Z)(X));
        },
        754393: (e, t, n) => {
            n.d(t, { o: () => c, s: () => l });
            var s = n(111677),
                r = n.n(s);
            const a = r().dae57a42,
                o = r().i7cbc154,
                i = r().e3a761ee,
                c = (e) => {
                    const t = ((e) => Object.keys(e).reduce((t, n) => (e[n] ? t + 1 : t), 0))(e);
                    switch (t) {
                        case Object.keys(e).length:
                            return "all";
                        case 0:
                            return "none";
                        default:
                            return "some";
                    }
                },
                l = (e) => ({ some: o, none: i, all: a })[c(e)];
        },
        630518: (e, t, n) => {
            n.r(t), n.d(t, { PhoneScreen: () => B, default: () => U });
            var s = n(202784),
                r = n(325686),
                a = n(855488),
                o = n(420412),
                i = n(242454),
                c = n(111677),
                l = n.n(c),
                h = n(947135),
                d = n(290402),
                p = n(443781),
                u = n(652904),
                m = n(264922),
                _ = n(71620),
                g = n(668214),
                f = n(257166),
                S = n(38562),
                b = n(446418),
                E = n(601576);
            const C = (0, g.Z)()
                    .propsFromState(() => ({ fetchStatus: f.selectFetchStatus, phones: f.selectPhoneNumbers, loginVerificationSettings: b.vi }))
                    .propsFromActions(() => ({ addToast: E.fz, createLocalApiErrorHandler: (0, _.zr)("SETTINGS_PHONE_SCREEN"), fetchDevices: f.fetchDevices, fetchSettings: S.wv, removeDevice: f.removeDevice, fetchLoginVerificationSettings: b.zl }))
                    .withAnalytics({ page: "settings", section: "phone" }),
                w = l().cb841d56,
                Z = l().dc013356,
                y = l().ce37ea44,
                L = l().ibaf239e,
                T = l().j2636558,
                P = { headline: l().e49b16d4, text: l().i931719e, confirmButtonLabel: l().d96cf7ce },
                k = l().j841d1f4,
                x = l().e49b16d4,
                v = l().f0977f52,
                A = l().fe8b565a,
                I = l().hf45b8d4,
                D = { headline: x, text: A, confirmButtonLabel: v },
                F = { headline: x, text: I, confirmButtonLabel: v };
            class B extends s.Component {
                constructor(e, t) {
                    super(e, t),
                        (this.state = { awaitingPin: !1, phone: null, isPhoneValid: null, smsVerifyError: void 0 }),
                        (this._renderOCFPhone = () => {
                            const { phones: e } = this.props,
                                t = e[0] && e[0].phone_number;
                            return s.createElement(r.Z, null, t ? s.createElement(s.Fragment, null, s.createElement(a.Z, { defaultValue: t, editable: !1, label: Z, name: "current_phone" }), s.createElement(o.Z, null)) : null, s.createElement(i.Z, { color: "primary", label: t ? L : y, link: "/i/flow/add_phone" }), t ? this._renderDeleteButton() : null);
                        }),
                        (this._handleFetchDevices = () => {
                            const { createLocalApiErrorHandler: e, fetchDevices: t } = this.props;
                            t().catch(e({ showToast: !0 }));
                        }),
                        (this._handleGoBack = () => {
                            const { history: e } = this.props;
                            e.goBack({ backLocation: "/settings" });
                        }),
                        (this._handleRemove = () => {
                            const {
                                addToast: e,
                                createLocalApiErrorHandler: t,
                                fetchLoginVerificationSettings: n,
                                loginVerificationSettings: { methods: s, twoFactorAuthEnabled: r },
                                phones: a,
                                removeDevice: o,
                            } = this.props;
                            a[0] &&
                                o(a[0].phone_number).then(
                                    () => {
                                        e({ text: k }), r && "Sms" in s && n().catch(t()), this._handleGoBack();
                                    },
                                    t({ showToast: !0 }),
                                );
                        }),
                        this._handleFetchDevices(),
                        (this._initialPath = this._previousPath = window.location.pathname);
                }
                shouldComponentUpdate(e, t) {
                    const { createLocalApiErrorHandler: n, fetchLoginVerificationSettings: s, fetchSettings: r } = this.props;
                    return this._previousPath !== location.pathname && this._initialPath === location.pathname && (this._handleFetchDevices(), r().catch(n()), s().catch(n())), (this._previousPath = location.pathname), e !== this.props || t !== this.state;
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchLoginVerificationSettings: t } = this.props;
                    t().catch(e());
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return s.createElement(u.Z, null, s.createElement(m.Z, { location: t, title: w }, s.createElement(d.Z, { fetchStatus: e, onRequestRetry: this._handleFetchDevices, render: this._renderOCFPhone })));
                }
                _renderDeleteButton() {
                    const {
                        loginVerificationSettings: { methods: e, twoFactorAuthEnabled: t },
                    } = this.props;
                    let n = P;
                    return t && "Sms" in e && (n = "Totp" in e || "U2fSecurityKey" in e ? F : D), s.createElement(h.Z, { confirmationSheetConfirmButtonLabel: n.confirmButtonLabel, confirmationSheetConfirmButtonType: "destructiveFilled", confirmationSheetHeadline: n.headline, confirmationSheetText: n.text, label: T, onConfirmationSheetConfirm: this._handleRemove, withBottomBorder: !1 });
                }
            }
            B.contextType = p.rC;
            const U = C(B);
        },
        325163: (e, t, n) => {
            n.r(t), n.d(t, { ScreenNameScreen: () => E, default: () => C });
            var s = n(202784),
                r = n(190286),
                a = n(111677),
                o = n.n(a),
                i = n(443781),
                c = n(652904),
                l = n(900128),
                h = n(264922),
                d = n(71620),
                p = n(668214),
                u = n(38562),
                m = n(395042),
                _ = n(919022);
            const g = (0, p.Z)()
                    .propsFromState(() => ({ viewerUser: _.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ clearUsernameAvailability: m.Zc, createLocalApiErrorHandler: (0, d.zr)("SETTINGS_SCREEN_NAME_SCREEN"), updateSettings: u.VP }))
                    .withAnalytics({ page: "settings", section: "screen_name" }),
                f = o().je506a60,
                S = o().b983f9e0,
                b = o().c0fcb08a,
                E = ({ clearUsernameAvailability: e, createLocalApiErrorHandler: t, history: n, location: a, updateSettings: o, viewerUser: d }) => {
                    const { featureSwitches: p, userClaims: u } = s.useContext(i.rC),
                        [m, _] = s.useState(void 0),
                        [g, E] = s.useState(!1),
                        C = s.useCallback(() => {
                            n.goBack({ backLocation: "/settings" });
                        }, [n]),
                        w = s.useCallback(() => {
                            E(!1),
                                m &&
                                    (e({ persistSuggestions: !0 }),
                                    o({ screen_name: m })
                                        .then(() => {
                                            e({ persistSuggestions: !1 }), C();
                                        })
                                        .catch(t({ showToast: !0 })));
                        }, [m, C, e, t, o]),
                        Z = s.useCallback(() => {
                            const e = u.isFreeVerifiedOrg() || u.isPaidVerifiedOrg() || u.isLegacyVerifiedOrg(),
                                t = p.isTrue("blue_business_username_change_prompt_enabled");
                            e && t ? E(!0) : w();
                        }, [p, u, w]),
                        y = s.useCallback((e) => {
                            _(e);
                        }, []),
                        L = m && d && m !== d.screen_name;
                    return s.createElement(c.Z, null, g ? s.createElement(r.Z, { headline: S, onCancel: C, onConfirm: w, testID: "screenNameConfirmationSheet", text: b }) : null, s.createElement(h.Z, { location: a, onSubmit: Z, submitDisabled: !L, title: f }, s.createElement(l.Z, { onScreenNameChanged: y })));
                },
                C = g(E);
        },
        650667: (e, t, n) => {
            n.r(t), n.d(t, { SearchSettingsPage: () => x, default: () => v });
            var s = n(202784),
                r = n(688715),
                a = n(954110),
                o = n(111677),
                i = n.n(o),
                c = n(290402),
                l = n(980407),
                h = n(670094),
                d = n(853568),
                p = n(71620),
                u = n(668214),
                m = n(204744),
                _ = n(123072),
                g = n(601576),
                f = n(774006);
            const S = (0, u.Z)()
                    .propsFromState(() => ({ fetchStatus: _.UD, lastSearchQuery: m.YB, settings: _.xN }))
                    .propsFromActions(() => ({ addToast: g.fz, clearAllSearchResults: f.u, createLocalApiErrorHandler: (0, p.zr)("SAFE_SEARCH_SCREEN"), fetchSettings: _.bP, updateSettings: _.AW }))
                    .withAnalytics({ page: "settings", section: "search" }),
                b = "searchSettings-hideSensitiveContent",
                E = "searchSettings-hideMutedOrBlockedAccounts",
                C = i().h1ef00dc,
                w = i().a90af44e,
                Z = i().a25e2ec6,
                y = i().b827a058,
                L = i().b27c9852,
                T = i().j3402d7e,
                P = i().if05bca6,
                k = (0, r.ju)("https://support.x.com/articles/132700");
            class x extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSettingChanged = (e, t) => {
                            const { addToast: n, clearAllSearchResults: s, createLocalApiErrorHandler: r, updateSettings: a } = this.props;
                            this._scribeValueChanged(e, t),
                                a(e, t).then(
                                    () => {
                                        s(), n({ text: y });
                                    },
                                    r({ ...(0, h.d)(L), showToast: !0 }),
                                );
                        }),
                        (this._scribeValueChanged = (e, t) => {
                            const { analytics: n, lastSearchQuery: s } = this.props,
                                r = s ? { search_details: { query: s } } : {},
                                a = e === d.U.Filtering ? "filtering" : "blocking",
                                o = t ? "on" : "off";
                            n.scribe({ component: "safe_search_settings", element: a, action: o, data: r });
                        }),
                        (this._render = () => {
                            const { settings: e } = this.props;
                            return s.createElement("div", null, s.createElement(a.Z, { checked: e.optInFiltering, helpText: T, label: w, learnMoreLink: k, name: "optInFiltering", onChange: this._handleSettingChanged, testID: b }), s.createElement(a.Z, { checked: e.optInBlocking, helpText: P, label: Z, learnMoreLink: k, name: "optInBlocking", onChange: this._handleSettingChanged, testID: E }));
                        }),
                        (this._handleFetchSettings = () => {
                            const { createLocalApiErrorHandler: e, fetchSettings: t } = this.props;
                            t().catch(e((0, h.d)()));
                        });
                }
                componentDidMount() {
                    this._handleFetchSettings();
                }
                render() {
                    const { fetchStatus: e, history: t } = this.props;
                    return s.createElement(l.Z, { history: t, title: C }, s.createElement(c.Z, { fetchStatus: e, onRequestRetry: this._handleFetchSettings, render: this._render }));
                }
            }
            const v = S(x);
        },
        80697: (e, t, n) => {
            n.r(t), n.d(t, { SettingsSecurityScreen: () => F, default: () => B, loginVerificationLabel: () => C, passwordResetProtectLabel: () => y });
            var s = n(202784),
                r = n(943401),
                a = n(420412),
                o = n(844685),
                i = n(779610),
                c = n(954110),
                l = n(111677),
                h = n.n(l),
                d = n(443781),
                p = n(652904),
                u = n(293115),
                m = n(472039),
                _ = n(71620),
                g = n(668214),
                f = n(38562);
            const S = (0, g.Z)()
                    .propsFromState(() => ({ settings: f.l4 }))
                    .adjustStateProps(({ settings: e }) => ({ protectPasswordReset: e.protect_password_reset }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("SETTINGS_SECURITY_SCREEN"), updateSettings: f.VP })),
                b = h().j95edf76,
                E = h().a2197726,
                C = h().dd703318,
                w = h().i36dcc3e,
                Z = h().ead60eb8,
                y = h().gfaf9a4a,
                L = h().h3cc8462,
                T = h().b4bbdeb4,
                P = h().fd127276,
                k = h().fe8aeb88,
                x = h().afe4a358,
                v = h().dc096238,
                A = h().i859a9d4,
                I = { page: "settings", section: "security" },
                D = Object.freeze({});
            class F extends s.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleProtectPasswordResetChanged = (e, t) => {
                            this.setState({ showPasswordDialog: !0, data: { protect_password_reset: t } });
                        }),
                        (this._handlePasswordSubmit = (e) => {
                            const { createLocalApiErrorHandler: t, updateSettings: n } = this.props,
                                { data: s } = this.state;
                            n({ ...s, current_password: e }).then(
                                () => {
                                    this.setState({ showPasswordDialog: !1, data: D });
                                },
                                t({ showToast: !0 }),
                            );
                        }),
                        (this.state = { showPasswordDialog: !1, data: D });
                }
                render() {
                    const { location: e } = this.props,
                        { showPasswordDialog: t } = this.state;
                    return s.createElement(u.nO, { namespace: I }, s.createElement(p.Z, null, s.createElement(m.Z, { location: e, onPasswordSubmit: this._handlePasswordSubmit, promptForPassword: t, title: b }, s.createElement(r.Z, { description: E }), this._renderPasskeys(), this._renderTwoFactorAuthentication(), s.createElement(a.Z, null), this._renderIDVerification(), s.createElement(a.Z, null), this._renderPasswordResetProtect())));
                }
                _renderTwoFactorAuthentication() {
                    return s.createElement(s.Fragment, null, s.createElement(o.Z, { text: C }), s.createElement(i.Z, { label: C, link: "/settings/account/login_verification" }), s.createElement(r.Z, { description: w, learnMoreLabel: A, learnMoreLink: "https://help.x.com/managing-your-account/two-factor-authentication" }));
                }
                _renderIDVerification() {
                    return this.context.featureSwitches.isTrue("identity_verification_settings_enabled") ? s.createElement(s.Fragment, null, s.createElement(o.Z, { text: x }), s.createElement(i.Z, { label: x, link: "/settings/account/id_verification" }), s.createElement(r.Z, { description: v, learnMoreLabel: A, learnMoreLink: "https://help.x.com/rules-and-policies/verification-policy" })) : null;
                }
                _renderPasswordResetProtect() {
                    const { protectPasswordReset: e } = this.props;
                    return s.createElement(s.Fragment, null, s.createElement(o.Z, { text: Z }), s.createElement(c.Z, { checked: !!e, label: y, name: "protect_password_reset", onChange: this._handleProtectPasswordResetChanged }), s.createElement(r.Z, { description: L, learnMoreLabel: A, learnMoreLink: "https://help.x.com/safety-and-security/account-security-tips" }));
                }
                _renderPasskeys() {
                    return this.context.featureSwitches.isTrue("identity_verification_passkey_settings_enabled") ? s.createElement(s.Fragment, null, s.createElement(o.Z, { text: T }), s.createElement(i.Z, { label: P, link: "/settings/account/passkey" }), s.createElement(r.Z, { description: k, learnMoreLabel: A, learnMoreLink: "https://help.x.com/managing-your-account/how-to-use-passkey" })) : null;
                }
            }
            F.contextType = d.rC;
            const B = S(F);
        },
        996703: (e, t, n) => {
            n.r(t), n.d(t, { SessionDetailPage: () => I, default: () => D });
            var s = n(202784),
                r = n(325686),
                a = n(457311),
                o = n(731708),
                i = n(420412),
                c = n(844685),
                l = n(392237),
                h = n(111677),
                d = n.n(h),
                p = n(947135),
                u = n(290402),
                m = n(652904),
                _ = n(264922),
                g = n(972934),
                f = n(71620),
                S = n(668214),
                b = n(715684),
                E = n(601576);
            const C = (e, t) => {
                    const n = decodeURIComponent(t.match.params.sessionId || "");
                    return b.kz(e, n);
                },
                w = (0, S.Z)()
                    .propsFromState(() => ({ fetchStatus: b.UD, session: C }))
                    .propsFromActions(() => ({ addToast: E.fz, createLocalApiErrorHandler: (0, f.zr)("SESSION_DETAIL"), fetchSessionsIfNeeded: b.dj, revokeSession: b._1 }))
                    .withAnalytics({ page: "settings", section: "session_detail" }),
                Z = d().ed5ab16a,
                y = d().d64e29c6,
                L = { headline: d().idfa01cc, text: d().f400075e, confirmButtonLabel: d().ae1bbb26 },
                T = d().e04ba39c,
                P = d().bfbc051d,
                k = d().jaaa8984,
                x = d().eed75824,
                v = d().ddcd3d26,
                A = d().d2f0f3fe;
            class I extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchSessionsIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchSessionsIfNeeded: t } = this.props;
                            return t().catch(e({ showToast: !0 }));
                        }),
                        (this._handleRetry = () => {
                            this._fetchSessionsIfNeeded();
                        }),
                        (this._handleLogOut = () => {
                            const { session: e } = this.props;
                            e && (this._revokeSession(e.token), this._scribeAction("revoke_session"));
                        }),
                        (this._handleGoBack = () => {
                            const { history: e } = this.props;
                            e.goBack({ backLocation: "/settings/applications" });
                        }),
                        (this._render = () => {
                            const { session: e } = this.props;
                            return e ? s.createElement(r.Z, null, s.createElement(g.Z, { session: e, withBottomBorder: !1, withSummary: !0 }), this._renderDateAndTime(e), this._renderLocation(e)) : s.createElement(a.Z, { header: A });
                        });
                }
                componentDidMount() {
                    this._fetchSessionsIfNeeded();
                }
                _revokeSession(e) {
                    const { addToast: t, createLocalApiErrorHandler: n, revokeSession: s } = this.props;
                    s(e).then(
                        () => {
                            t({ text: x }), this._handleGoBack();
                        },
                        n({ showToast: !0 }),
                    );
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe({ component: "active_session", element: e, action: "click" });
                }
                render() {
                    const { fetchStatus: e, location: t, session: n } = this.props,
                        r = n ? n.name : "";
                    return s.createElement(m.Z, null, s.createElement(_.Z, { location: t, title: r }, s.createElement(u.Z, { "aria-label": v, fetchStatus: e, onRequestRetry: this._handleRetry, render: this._render })));
                }
                _renderDateLabel(e) {
                    if (e.is_current_session) return s.createElement(o.ZP, null, Z);
                    {
                        const t = new Date(Number(e.last_seen_time_ms));
                        return s.createElement("time", { dateTime: t.toISOString() }, P(t));
                    }
                }
                _renderDateAndTime(e) {
                    return s.createElement(r.Z, null, e?.last_seen_time_ms ? s.createElement(r.Z, null, s.createElement(i.Z, null), s.createElement(c.Z, { text: T }), s.createElement(r.Z, { style: [F.labelContainer, !e?.is_current_session && F.bottomBorder] }, s.createElement(o.ZP, { color: "gray700", size: "subtext2" }, this._renderDateLabel(e)))) : null, e?.is_current_session ? null : s.createElement(p.Z, { confirmationSheetConfirmButtonLabel: L.confirmButtonLabel, confirmationSheetConfirmButtonType: "primary", confirmationSheetHeadline: L.headline, confirmationSheetText: L.text, label: y, onConfirmationSheetConfirm: this._handleLogOut, withBottomBorder: !1 }));
                }
                _renderLocation(e) {
                    const t = e.location;
                    return t ? s.createElement(r.Z, null, s.createElement(i.Z, null), s.createElement(c.Z, { text: k }), s.createElement(r.Z, { style: F.labelContainer }, s.createElement(o.ZP, { color: "gray700", size: "subtext2" }, t))) : null;
                }
            }
            const D = w(I),
                F = l.default.create((e) => ({ labelContainer: { alignItems: "center", flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, width: "100%" }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } }));
        },
        467604: (e, t, n) => {
            n.d(t, { Z: () => h });
            var s = n(202784),
                r = n(909377),
                a = n(501578),
                o = n(762863),
                i = n(875516),
                c = n(875782),
                l = n(932466);
            class h extends s.PureComponent {
                render() {
                    const { deviceType: e } = this.props;
                    switch (e.toString().toLowerCase()) {
                        case "mobile":
                            return s.createElement(r.Z, { Icon: a.default, color: "neutral" });
                        case "laptop":
                            return s.createElement(r.Z, { Icon: o.default, color: "neutral" });
                        case "tablet":
                            return s.createElement(r.Z, { Icon: i.default, color: "neutral" });
                        case "tv":
                            return s.createElement(r.Z, { Icon: c.default, color: "neutral" });
                        default:
                            return s.createElement(r.Z, { Icon: l.default, color: "neutral" });
                    }
                }
            }
        },
        396634: (e, t, n) => {
            n.d(t, { Z: () => h });
            var s = n(202784),
                r = n(325686),
                a = n(242454),
                o = n(111677),
                i = n.n(o);
            const c = i().da6cdba8,
                l = i().ef1d3dcc;
            class h extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleRevokeApp = () => {
                            this.props.onRevoke(this.props.token, this.props.tokenType);
                        });
                }
                render() {
                    const { reportApplicationHref: e, revoked: t } = this.props;
                    return s.createElement(r.Z, null, t ? s.createElement(a.Z, { color: "primary", label: l, link: e }) : s.createElement(a.Z, { color: "red500", label: c, onPress: this._handleRevokeApp }));
                }
            }
        },
        972934: (e, t, n) => {
            n.d(t, { Z: () => u });
            var s = n(202784),
                r = n(966886),
                a = n(868634),
                o = n(470397),
                i = n(731708),
                c = n(779610),
                l = n(111677),
                h = n.n(l),
                d = n(467604);
            const p = h().ed5ab16a;
            class u extends s.PureComponent {
                _renderLocationAndDateLabel() {
                    const { session: e } = this.props,
                        t = e.last_seen_time_ms,
                        n = e.location,
                        c = t ? s.createElement(r.Z, { cutoff: "years", humanReadable: !0, timestamp: Number(t) }) : null,
                        l = e.is_current_session ? s.createElement(a.ZP, { background: "primary" }, p) : c;
                    return s.createElement(o.Z, null, n && s.createElement(i.ZP, null, n), l);
                }
                _renderDeviceIcon() {
                    const { session: e } = this.props;
                    return s.createElement(d.Z, { deviceType: e.icon_type });
                }
                _renderDeviceName() {
                    const { session: e } = this.props;
                    return e.name;
                }
                _renderDescription() {
                    const { session: e, withSummary: t } = this.props;
                    return s.createElement(i.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, t ? e.summary : this._renderLocationAndDateLabel());
                }
                render() {
                    const { link: e } = this.props;
                    return s.createElement(c.Z, { description: this._renderDescription(), label: this._renderDeviceName(), link: e, thumbnail: this._renderDeviceIcon() });
                }
            }
        },
        371590: (e, t, n) => {
            n.r(t), n.d(t, { default: () => I });
            var s = n(202784),
                r = n(325686),
                a = n(107267),
                o = n(952428),
                i = n(731708),
                c = n(167630),
                l = n(392237),
                h = n(111677),
                d = n.n(h),
                p = n(262754),
                u = n(191796),
                m = n(652904),
                _ = n(883229),
                g = n(177210),
                f = n(782642),
                S = n(782826),
                b = n(725516),
                E = n(264922),
                C = n(668214),
                w = n(390387);
            const Z = (0, C.Z)().propsFromState(() => ({ isSubscriber: w.pG })),
                y = d().c429e3ba,
                L = d().d97c07be,
                T = d().efa291da,
                P = d().j7f5c6aa,
                k = { context: "MONETIZATION_SETTINGS" },
                x = { page: "settings", section: "subscriptions" };
            function v({ isSubscriber: e }) {
                const { origin: t } = S.ZP.get(),
                    n = (0, b.z)(),
                    a = (0, f.p)(),
                    l = (0, g.Z)({ returnUrl: `${t}/settings/manage_subscriptions`, originProduct: "SuperFollows" }),
                    h = !l,
                    d = s.useCallback(() => {
                        n.scribe({ ...x, element: "manage_creator_subscriptions", action: "click" }), e ? l && l() : a({ text: P });
                    }, [n, e, l, a]);
                return s.createElement(o.Z, { disabled: h, onPress: d, role: "button", style: A.root, testID: "manage_creator_subscriptions", withInteractiveStyling: !0 }, s.createElement(r.Z, { style: A.contentContainer }, s.createElement(r.Z, { style: A.thumbnailContainer }, s.createElement(p.default, null)), s.createElement(r.Z, { style: A.content }, s.createElement(i.ZP, null, L), s.createElement(i.ZP, { color: "gray700", size: "subtext2" }, T)), h ? s.createElement(c.Z, null) : null, s.createElement(u.default, { style: A.icon })));
            }
            const A = l.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${l.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16, color: e.colors.gray700 } })),
                I = s.memo(
                    Z(function ({ isSubscriber: e }) {
                        const t = (0, a.useLocation)();
                        return s.createElement(m.Z, null, s.createElement(E.Z, { location: t, screenType: "primaryDetail", title: y }, s.createElement(_.N, { errorConfig: k }, s.createElement(v, { isSubscriber: e }))));
                    }),
                );
        },
        628954: (e, t, n) => {
            n.r(t), n.d(t, { SettingsTaggingScreen: () => S, default: () => b });
            var s = n(202784),
                r = n(325686),
                a = n(80512),
                o = n(111677),
                i = n.n(o),
                c = n(652904),
                l = n(264922),
                h = n(71620),
                d = n(668214),
                p = n(38562);
            const u = (0, d.Z)()
                    .propsFromState(() => ({ settings: p.l4 }))
                    .adjustStateProps(({ settings: e }) => ({ mediaTaggingOption: e.allow_media_tagging }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("SETTINGS_TAGGING_SCREEN"), updateSettings: p.VP }))
                    .withAnalytics({ page: "settings", section: "tagging" }),
                m = i().f56d108e,
                _ = i().f56d108e,
                g = i().gd758534,
                f = [
                    { label: i().d165c992, value: "all" },
                    { label: i().ea339390, value: "following" },
                ];
            class S extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleItemChanged = (e, t) => {
                            const { createLocalApiErrorHandler: n, updateSettings: s } = this.props;
                            s({ [e]: t }).catch(n({ showToast: !0 }));
                        });
                }
                render() {
                    const { location: e, mediaTaggingOption: t } = this.props;
                    return s.createElement(c.Z, null, s.createElement(l.Z, { location: e, title: m }, s.createElement(r.Z, null, s.createElement(a.Z, { description: g, label: _, name: "allow_media_tagging", offValue: "none", onChange: this._handleItemChanged, options: f, value: t }))));
                }
            }
            const b = u(S);
        },
        703178: (e, t, n) => {
            n.r(t), n.d(t, { TrendsLocationsScreen: () => D, default: () => B, styles: () => F });
            var s = n(202784),
                r = n(325686),
                a = n(371344),
                o = n(392237),
                i = n(111677),
                c = n.n(i),
                l = n(956272),
                h = n(912021),
                d = n(666536),
                p = n(290402),
                u = n(980407),
                m = n(334346),
                _ = n(443781),
                g = n(554997),
                f = n(71620),
                S = n(668214),
                b = n(38562),
                E = n(61666),
                C = n(991851);
            const w = (0, S.Z)()
                    .propsFromState(() => ({ placeTrendsLocations: C.YQ, placeTrendsLocationsFetchStatus: C.IZ, placeTrendsSettings: C.oo, woeTrendsLocations: C.SN, woeTrendsLocationsFetchStatus: C.Qy, woeTrendsLocationSettings: b.um }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("SETTINGS_TRENDS_LOCATION_SCREEN"), fetchWoeTrendsLocationsIfNeeded: C.oy, fetchPlaceTrendsLocations: C.yb, updateWoeTrendSettings: E.r, updatePlaceTrendSettings: C.PR }))
                    .withAnalytics({ page: "settings", section: "trends", component: "locations", element: "list" }),
                Z = "locationSearchBox";
            var y = n(952428),
                L = n(731708),
                T = n(913973);
            const P = c().d5c9174f,
                k = o.default.create((e) => ({ item: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, flexDirection: "row", padding: e.spaces.space16, justifyContent: "space-between" }, iconCheckmark: { color: e.colors.primary } })),
                x = ({ country: e, isSelected: t, name: n, onClick: r }) => s.createElement(y.Z, { onPress: r, style: k.item }, e ? s.createElement(L.ZP, null, P({ location: n, country: e })) : s.createElement(L.ZP, null, n), t ? s.createElement(T.default, { style: k.iconCheckmark }) : null),
                v = c().b3aab6d4,
                A = c().e53e05e4,
                I = c().be6cc44e;
            class D extends s.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._usePlaceTrendLocations = this.context.featureSwitches.isTrue("responsive_web_trends_setting_new_endpoints")),
                        (this._handleRetry = () => {
                            this._fetchTrendsLocations();
                        }),
                        (this._fetchTrendsLocations = () => {
                            const { createLocalApiErrorHandler: e, fetchPlaceTrendsLocations: t, fetchWoeTrendsLocationsIfNeeded: n } = this.props;
                            this._usePlaceTrendLocations ? t({ prefix: this.state.query }).catch(e({ showToast: !0 })) : n().catch(e({ showToast: !0 }));
                        }),
                        (this._renderScroller = () => {
                            const { placeTrendsLocations: e } = this.props;
                            return s.createElement(m.C, { cacheKey: "LOCATIONS_LIST", identityFunction: this._identityFunction, items: e, renderer: this._renderPlaceLocation });
                        }),
                        (this._renderWoeLocations = () => {
                            const { query: e } = this.state,
                                t = "" === e ? this._getTopLevelWoeLocations() : this._getFilteredWoeLocations();
                            return s.createElement(
                                r.Z,
                                null,
                                s.createElement(r.Z, { style: F.searchBox }, s.createElement(a.Z, { Icon: l.default, autoFocus: !1, onChange: this._handleInputChange, onClear: this._handleInputClear, placeholder: I, value: this.state.query, withClearButton: !0 })),
                                s.createElement(
                                    r.Z,
                                    null,
                                    t.map((e) => this._renderWoeLocation(e)),
                                ),
                            );
                        }),
                        (this._getFilteredWoeLocations = () => {
                            const { query: e } = this.state,
                                { woeTrendsLocations: t } = this.props;
                            return this._getMemoizedFilteredWoeLocations(e, t);
                        }),
                        (this._getMemoizedFilteredWoeLocations = (0, h.Z)((e, t) => t.filter((t) => t.name.toLowerCase().startsWith(e.toLowerCase())))),
                        (this._getTopLevelWoeLocations = () => {
                            const { woeTrendsLocations: e } = this.props;
                            return this._getMemoizedTopLevelWoeLocations(e);
                        }),
                        (this._getMemoizedTopLevelWoeLocations = (0, h.Z)((e) => e.filter((e) => (0, g.r)(e)))),
                        (this._handleInputClear = () => {
                            this._updateQuery("");
                        }),
                        (this._updateQuery = (e) => {
                            this.setState({ query: e });
                        }),
                        (this._handleInputChange = (e) => {
                            this._updateQuery(e.target.value);
                        }),
                        (this._renderWoeLocation = (e) => {
                            const { woeTrendsLocationSettings: t } = this.props,
                                n = !!e.woeid && e.woeid === (t && t[0] && t[0].woeid);
                            return s.createElement(x, { country: (0, g.r)(e) ? void 0 : e.country, isSelected: n, key: e.woeid, name: e.name, onClick: this._handleWoeLocationClick(e.woeid) });
                        }),
                        (this._renderPlaceLocation = (e) => {
                            const { placeTrendsSettings: t } = this.props,
                                n = !!e.place_id && t.places && t.places.some((t) => t.place_id === e.place_id);
                            return s.createElement(x, { country: void 0, isSelected: n, key: e.place_id, name: e.name, onClick: this._handlePlaceLocationClick(e.place_id, e.name) });
                        }),
                        (this._handleWoeLocationClick = (e) => () => {
                            const { createLocalApiErrorHandler: t, history: n, updateWoeTrendSettings: s } = this.props;
                            n.goBack(), s({ trend_location_woeid: e }).catch(t({ showToast: !0 }));
                        }),
                        (this._handlePlaceLocationClick = (e, t) => () => {
                            const { createLocalApiErrorHandler: n, history: s, updatePlaceTrendSettings: r } = this.props;
                            r({ places: [{ place_id: e, name: t }] })
                                .then(() => s.goBack())
                                .catch(n({ showToast: !0 }));
                        }),
                        (this._fetchFilteredPlacesDebounced = (0, d.Z)(this._fetchTrendsLocations, 250)),
                        (this._identityFunction = (e) => e.place_id),
                        (this.state = { query: "" });
                }
                componentDidMount() {
                    this._fetchTrendsLocations();
                }
                componentDidUpdate(e, t) {
                    this._usePlaceTrendLocations && t.query !== this.state.query && this._fetchFilteredPlacesDebounced();
                }
                render() {
                    const { history: e, placeTrendsLocationsFetchStatus: t, woeTrendsLocationsFetchStatus: n } = this.props;
                    return s.createElement(u.Z, { backButtonType: "back", backLocation: "/settings/trends", history: e, title: v }, this._usePlaceTrendLocations ? s.createElement(s.Fragment, null, s.createElement(a.Z, { Icon: l.default, autoFocus: !1, onChange: this._handleInputChange, onClear: this._handleInputClear, placeholder: I, style: F.searchBox, testID: Z, value: this.state.query, withClearButton: !0 }), s.createElement(p.Z, { "aria-label": A, fetchStatus: t, onRequestRetry: this._handleRetry, render: this._renderScroller })) : s.createElement(p.Z, { "aria-label": A, fetchStatus: n, onRequestRetry: this._handleRetry, render: this._renderWoeLocations }));
                }
            }
            D.contextType = _.rC;
            const F = o.default.create((e) => ({ searchBox: { flexGrow: 0, flexShrink: 0, margin: e.spaces.space12 } })),
                B = w(D);
        },
        451735: (e, t, n) => {
            n.r(t), n.d(t, { SettingsTrendsScreen: () => q, default: () => Q });
            var s = n(202784),
                r = n(325686),
                a = n(954110),
                o = n(420412),
                i = n(779610),
                c = n(844685),
                l = n(111677),
                h = n.n(l),
                d = n(615656),
                p = n(290402),
                u = n(980407),
                m = n(534763),
                _ = n(443781),
                g = n(51525),
                f = n(71620),
                S = n(668214),
                b = n(38562),
                E = n(61666),
                C = n(991851);
            const w = (0, S.Z)()
                    .propsFromState(() => ({ allSettings: b.l4, placeTrendSettings: C.oo, placeTrendSettingsFetchStatus: C.JH }))
                    .adjustStateProps(({ allSettings: e, placeTrendSettings: t, placeTrendSettingsFetchStatus: n }) => ({ trendLocation: e.trend_location, personalizedTrends: e.personalized_trends, placeTrendSettings: t, placeTrendSettingsFetchStatus: n }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("SETTINGS_TRENDS_SCREEN"), fetchPlaceTrendSettingsIfNeeded: C.CD, updateWoeTrendSettings: E.r, updatePlaceTrendSettings: C.PR }))
                    .withAnalytics({ page: "guide", section: "settings" }),
                Z = "currentLocation",
                y = "exploreLocations",
                L = h().bc7fd990,
                T = h().c5f4befa,
                P = h().j018f2a2,
                k = h().e2f16650,
                x = h().e5e88f40,
                v = h().jaaa8984,
                A = h().i4d54b0e,
                I = h().ad431584,
                D = h().df9f03c8,
                F = h().c6cf5c7e,
                B = h().e09358ba,
                U = h().a55db872,
                N = h().a58170fc,
                R = h().h0b5152e,
                H = h().dfeada5e,
                z = h().ac854308,
                V = h().d429c942,
                j = "use_current_location",
                W = "use_personalized_trends",
                M = "use_fun_mode_stories",
                O = "/settings/trends/location",
                G = "/settings/explore";
            class q extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._usePlaceTrendSettings = this.context.featureSwitches.isTrue("responsive_web_trends_setting_new_endpoints")),
                        (this._policySectionUrl = this.context.featureSwitches.getStringValue("explore_settings_trends_policy_url")),
                        (this._handleRetry = () => {
                            this._fetchPlaceTrendSettingsIfNeeded();
                        }),
                        (this._fetchPlaceTrendSettingsIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchPlaceTrendSettingsIfNeeded: t } = this.props;
                            t().catch(e({ showToast: !0 }));
                        }),
                        (this._handleItemChanged = (e, t) => {
                            const { analytics: n, createLocalApiErrorHandler: s, updatePlaceTrendSettings: r, updateWoeTrendSettings: a } = this.props,
                                o = { [e]: t },
                                i = { [d.ZP.AppInReadOnlyMode]: { customAction: g.w1 }, showToast: !0 };
                            this._usePlaceTrendSettings ? r(o).catch(s(i)) : a(o).catch(s(i)), n.scribe({ element: "personalized_trends", action: "toggle" });
                        }),
                        (this._renderWoeContent = () => {
                            const { personalizedTrends: e, trendLocation: t } = this.props,
                                n = (t && t[0] && t[0].name) || "Worldwide";
                            return s.createElement(r.Z, null, s.createElement(a.Z, { checked: e, helpText: D, label: A, name: "personalized_trends", onChange: this._handleItemChanged }), !e && s.createElement(r.Z, null, s.createElement(o.Z, null), s.createElement(i.Z, { description: n, label: R, link: O })));
                        }),
                        (this._renderPlaceLoader = () => {
                            const { placeTrendSettingsFetchStatus: e } = this.props;
                            return s.createElement(p.Z, { "aria-label": L, fetchStatus: e, onRequestRetry: this._handleRetry, render: this._renderPlaceContent });
                        }),
                        (this._renderPlaceContent = () => {
                            const { location: e, placeTrendSettings: t } = this.props,
                                n = e.pathname === G,
                                l = t.places && t.places[0] && t.places[0].name,
                                h = !n || !t.is_unified_trends,
                                d = t.is_stories_available,
                                p = n ? "/settings/explore/location" : O;
                            return s.createElement(r.Z, null, d && s.createElement(s.Fragment, null, s.createElement(o.Z, null), s.createElement(c.Z, { text: N }), s.createElement(a.Z, { checked: t[M], helpText: B, label: I, name: M, onChange: this._handleItemChanged })), s.createElement(c.Z, { text: v }), s.createElement(a.Z, { checked: t[j], helpText: x, label: k, name: j, onChange: this._handleItemChanged, testID: Z }), !t[j] && s.createElement(r.Z, null, s.createElement(i.Z, { description: l, label: H, link: p, testID: y })), h && s.createElement(s.Fragment, null, s.createElement(o.Z, null), s.createElement(c.Z, { text: U }), s.createElement(a.Z, { checked: t[W], helpText: F, label: A, name: W, onChange: this._handleItemChanged })));
                        });
                }
                componentDidMount() {
                    this._usePlaceTrendSettings && this._fetchPlaceTrendSettingsIfNeeded();
                }
                render() {
                    const { history: e, location: t } = this.props,
                        n = t.pathname === G,
                        r = this._usePlaceTrendSettings && n ? P : T;
                    return s.createElement(u.Z, { history: e, title: r }, this._usePlaceTrendSettings ? this._renderPlaceLoader() : this._renderWoeContent(), this._policySectionUrl ? this._renderPolicySection() : null);
                }
                _renderPolicySection() {
                    return s.createElement(r.Z, null, s.createElement(o.Z, null), s.createElement(c.Z, { text: z }), s.createElement(m.b, { label: V, link: this._policySectionUrl }));
                }
            }
            q.contextType = _.rC;
            const Q = w(q);
        },
        829824: (e, t, n) => {
            n.d(t, { Z: () => f });
            var s = n(202784),
                r = n(99107),
                a = n(420740),
                o = n(731708),
                i = n(111677),
                c = n.n(i),
                l = n(443781),
                h = n(918621),
                d = n(725405),
                p = n(125363),
                u = n(390387);
            const m = c().ffeb836a,
                _ = c().f2fb9746;
            function g() {
                const e = (0, d.Z)();
                return (
                    s.useEffect(() => {
                        e.scribe({ element: "error_page", action: "show" });
                    }, [e]),
                    s.createElement(a.Z, { title: m }, s.createElement(o.ZP, null, _))
                );
            }
            function f(e) {
                const { featureSwitches: t } = s.useContext(l.rC),
                    n = (0, p.v9)(u.Qb),
                    a = (0, h.Xh)(r.b7, t);
                return n || a ? e.children : s.createElement(g, null);
            }
        },
        902339: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var s = n(202784),
                r = n(325686),
                a = n(154003),
                o = n(190286),
                i = n(111677),
                c = n.n(i),
                l = n(40904),
                h = n(175856);
            const d = c().cfd2f35e,
                p = c().bb1cbeb6,
                u = c().ba4aaa9e,
                m = c().f837ed7e;
            class _ extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showUnmuteConfirmation: !1 }),
                        (this._handleConfirm = () => {
                            const { keyword: e, onUnmute: t } = this.props;
                            this.setState({ showUnmuteConfirmation: !1 }), t(e);
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showUnmuteConfirmation: !1 });
                        }),
                        (this._handlePress = () => {
                            const { keyword: e, onUnmute: t, shouldShowUnmuteEducationTip: n } = this.props;
                            n ? (this.setState({ showUnmuteConfirmation: !0 }), this._updateUnmuteConfirmationPersistence()) : t(e);
                        });
                }
                _updateUnmuteConfirmationPersistence() {
                    const { addFlag: e } = this.props;
                    e(h.pJ);
                }
                render() {
                    const { color: e } = this.props;
                    return s.createElement(r.Z, null, s.createElement(a.ZP, { "aria-label": p, color: e, hoverLabel: { label: p }, icon: s.createElement(l.default, null), onPress: this._handlePress }), this.state.showUnmuteConfirmation ? s.createElement(o.Z, { cancelButtonLabel: d, confirmButtonLabel: p, headline: u, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: m }) : null);
                }
            }
            _.defaultProps = { color: "red500" };
        },
        170069: (e, t, n) => {
            n.d(t, { Z: () => i });
            var s = n(202784),
                r = n(325686),
                a = n(731708),
                o = n(392237);
            const i = ({ children: e }) => s.createElement(r.Z, { style: c.labelContainer }, s.createElement(r.Z, { style: c.contentContainer }, s.createElement(r.Z, { style: c.appText }, s.createElement(a.ZP, { color: "gray700", size: "subtext2" }, e)))),
                c = o.default.create((e) => ({ contentContainer: { alignItems: "center", flex: 1, flexDirection: "row", justifyContent: "space-between" }, labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, minHeight: `calc(${o.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})` }, appText: { flexShrink: 1, width: "100%" } }));
        },
        472039: (e, t, n) => {
            n.d(t, { Z: () => S });
            var s = n(202784),
                r = n(325686),
                a = n(731708),
                o = n(688715),
                i = n(844685),
                c = n(855488),
                l = n(111677),
                h = n.n(l),
                d = n(267966),
                p = n(264922);
            const u = h().a999cb72,
                m = h().dec3c9b8,
                _ = h().b929aa74,
                g = h().d1091f50,
                f = h().i2209530;
            class S extends s.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleSubmit = () => {
                            const { onPasswordSubmit: e } = this.props,
                                { current_password: t } = this.state;
                            t && e(t), this.setState({ current_password: "" });
                        }),
                        (this._handleChange = (e) => {
                            this.setState({ current_password: e.target.value });
                        }),
                        (this.state = { current_password: "" });
                }
                _renderPasswordPrompt() {
                    const { location: e, reenterPasswordLabel: t, saveChangesHeaderLabel: n, submitLabel: l, submitType: h } = this.props,
                        u = s.createElement(a.ZP, { link: { pathname: (0, o.ju)("https://x.com/i/flow/password_reset"), external: !0, openInSameFrame: !0 } }, g);
                    return s.createElement(p.Z, { location: e, onSubmit: this._handleSubmit, submitLabel: l, submitType: h, title: n }, s.createElement(i.Z, { text: n }), s.createElement(r.Z, { style: [d.Z.viewItem, d.Z.bottomBorder] }, s.createElement(a.ZP, { color: "gray700", size: "subtext2" }, t)), s.createElement(c.Z, { helperText: u, label: m, name: "current_password", onChange: this._handleChange, type: "password", value: this.state.current_password }));
                }
                render() {
                    const { children: e, location: t, promptForPassword: n, title: r } = this.props;
                    return n ? this._renderPasswordPrompt() : s.createElement(p.Z, { location: t, title: r }, e || null);
                }
            }
            S.defaultProps = { children: null, promptForPassword: !1, reenterPasswordLabel: _, saveChangesHeaderLabel: u, submitLabel: f };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-394f886d.7961d39a.js.map
