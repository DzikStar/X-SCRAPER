"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-394f886d"],
    {
        50110: (e, t, n) => {
            n.r(t), n.d(t, { PersonalizationScreen: () => X, default: () => ee });
            var r = n(202784),
                s = n(325686),
                a = n(731708),
                o = n(954110),
                i = n(420412),
                c = n(844685),
                l = n(688715),
                d = n(779610),
                h = n(190286),
                p = n(111677),
                u = n.n(p),
                m = n(516951),
                _ = n(290402),
                g = n(443781),
                f = n(652904),
                b = n(503229),
                S = n(829824),
                E = n(264922),
                w = n(267966),
                C = n(24949),
                Z = n(71620),
                y = n(668214),
                L = n(205253),
                T = n(390387),
                P = n(38562);
            const k = (0, y.Z)()
                .propsFromState(() => ({ fetchStatus: L.I3, isEUUser: (0, C.P1)(T.Qb, P.l4, L.LP, (e, t, n) => !(!t.settings_metadata || !t.settings_metadata.is_eu) || n.is_eu_country), personalization: L.LP, settings: L.kQ }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, Z.zr)("SETTINGS_PERSONALIZATION_SCREEN"), fetchPreferencesIfNeeded: L.CP, syncSettings: L.Z$, updateSettings: L.VP }))
                .withAnalytics({ page: "settings", section: "personalization" });
            var x = n(754393);
            const v = u().e8f57e08,
                A = u().f1768324,
                D = u().ja94f34e,
                I = u().e8f57e08,
                F = u().bd73f7e6,
                B = u().a55db872,
                H = u().ddbc3288,
                R = u().ae5339a0,
                z = { headline: u().b934e0ea, text: u().i0317e0e, confirmButtonLabel: u().a148acba },
                U = u().e8313b32,
                N = u().f1d46fd6,
                V = u().cfd2f35e,
                W = u().ib3357a6,
                j = u().f2f9628e,
                O = u().f6c8ccc8,
                M = u().ed012c88,
                q = u().aa023546,
                G = u().af7d89e6,
                Q = u().ced77194,
                $ = u().e2d61838,
                Y = u().c966aaf4,
                J = u().d3c20d80,
                K = u().f1c0d09c;
            class X extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._render = () => {
                            const { allowDeviceAccess: e, allowLocationHistoryUse: t, allowPartnerships: n, allowPersonalization: p } = this.props.settings,
                                { showDisableEUConfirmation: u, showSwitchAllConfirmation: m } = this.state;
                            return r.createElement(s.Z, null, r.createElement(s.Z, null, r.createElement(a.ZP, { color: "gray700", size: "subtext2", style: [w.Z.infoText, w.Z.bottomBorder] }, this._isLoggedIn ? A : D)), r.createElement(o.Z, { checked: this._getSwitchAllValue(), helpText: F, key: "switchAll", label: I, name: "switchAll", onChange: this._handleSwitchAllChanged, type: "switch" }), r.createElement(i.Z, null), r.createElement(c.Z, { text: B }), r.createElement(o.Z, { checked: p, helpText: j, key: "allowPersonalization", label: W, learnMoreLink: (0, l.ju)("https://support.x.com/articles/20170405"), name: "allowPersonalization", onChange: this._handleBooleanChanged }), r.createElement(o.Z, { checked: e, helpText: M, key: "allowDeviceAccess", label: O, learnMoreLink: (0, l.ju)("https://support.x.com/articles/20175257"), name: "allowDeviceAccess", onChange: this._handleBooleanChanged }), this._isLoggedIn && r.createElement(o.Z, { checked: t, helpText: G, key: "allowLocationHistoryUse", label: q, name: "allowLocationHistoryUse", onChange: this._handleBooleanChanged }), r.createElement(i.Z, null), r.createElement(c.Z, { text: H }), !this.context.featureSwitches.isTrue("ucpd_enabled") && this._renderCookiePersonalizationSetting(), r.createElement(o.Z, { checked: n, helpText: K, key: "allowPartnerships", label: J, learnMoreLink: (0, l.ju)("https://support.x.com/articles/20175379"), name: "allowPartnerships", onChange: this._handleBooleanChanged }), this._isLoggedIn && r.createElement(d.Z, { label: R, link: "/settings/your_twitter_data" }), u && r.createElement(h.Z, { cancelButtonLabel: V, confirmButtonLabel: N, onCancel: this._handleCancelDisableEU, onConfirm: this._handleDisableEUCookies, text: U }), m && r.createElement(h.Z, { confirmButtonLabel: z.confirmButtonLabel, headline: z.headline, onCancel: this._handleCancelSwitchAll, onConfirm: this._handleConfirmSwitchAll, text: z.text }));
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
                            const { createLocalApiErrorHandler: t, isEUUser: n, settings: r, updateSettings: s } = this.props,
                                a = {};
                            Object.keys(r).forEach((t) => {
                                (n && "allowCookieUse" === t) || (a[t] = e);
                            }),
                                this._scribeAction("toggle_all", a),
                                s(a).catch(t()),
                                this.setState({ showSwitchAllConfirmation: !1 });
                        }),
                        (this._handleBooleanChanged = (e, t) => {
                            const { createLocalApiErrorHandler: n, updateSettings: r } = this.props,
                                s = { [e]: t };
                            this._scribeAction(e, s), r(s).catch(n());
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
                    return r.createElement(f.Z, null, r.createElement(E.Z, { location: t, title: v }, r.createElement(S.Z, null, r.createElement(_.Z, { fetchStatus: e, onRequestRetry: this._handleFetchPreferences, render: this._render }))));
                }
                _renderCookiePersonalizationSetting() {
                    const { isEUUser: e } = this.props,
                        { allowCookieUse: t } = this.props.settings,
                        n = !!t;
                    let s,
                        a = !1,
                        i = m.Z;
                    const c = Q;
                    return e ? ((s = Y), n ? (i = this._handleEUCookiesChanged) : (a = !0)) : ((s = $), (i = this._handleBooleanChanged)), r.createElement(o.Z, { checked: t, disabled: a, helpText: s, key: "allowCookieUse", label: c, learnMoreLink: (0, l.ju)("https://support.x.com/articles/20169421"), name: "allowCookieUse", onChange: i });
                }
                _getSwitchAllValue() {
                    const { settings: e } = this.props,
                        t = (0, x.o)(e);
                    return "some" === t || "all" === t;
                }
            }
            X.contextType = g.rC;
            const ee = k((0, b.Z)(X));
        },
        754393: (e, t, n) => {
            n.d(t, { o: () => c, s: () => l });
            var r = n(111677),
                s = n.n(r);
            const a = s().dae57a42,
                o = s().i7cbc154,
                i = s().e3a761ee,
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
            n.r(t), n.d(t, { PhoneScreen: () => B, default: () => H });
            var r = n(202784),
                s = n(325686),
                a = n(855488),
                o = n(420412),
                i = n(242454),
                c = n(111677),
                l = n.n(c),
                d = n(947135),
                h = n(290402),
                p = n(443781),
                u = n(652904),
                m = n(264922),
                _ = n(71620),
                g = n(668214),
                f = n(257166),
                b = n(38562),
                S = n(446418),
                E = n(601576);
            const w = (0, g.Z)()
                    .propsFromState(() => ({ fetchStatus: f.selectFetchStatus, phones: f.selectPhoneNumbers, loginVerificationSettings: S.vi }))
                    .propsFromActions(() => ({ addToast: E.fz, createLocalApiErrorHandler: (0, _.zr)("SETTINGS_PHONE_SCREEN"), fetchDevices: f.fetchDevices, fetchSettings: b.wv, removeDevice: f.removeDevice, fetchLoginVerificationSettings: S.zl }))
                    .withAnalytics({ page: "settings", section: "phone" }),
                C = l().cb841d56,
                Z = l().dc013356,
                y = l().ce37ea44,
                L = l().ibaf239e,
                T = l().j2636558,
                P = { headline: l().e49b16d4, text: l().i931719e, confirmButtonLabel: l().d96cf7ce },
                k = l().j841d1f4,
                x = l().e49b16d4,
                v = l().f0977f52,
                A = l().fe8b565a,
                D = l().hf45b8d4,
                I = { headline: x, text: A, confirmButtonLabel: v },
                F = { headline: x, text: D, confirmButtonLabel: v };
            class B extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this.state = { awaitingPin: !1, phone: null, isPhoneValid: null, smsVerifyError: void 0 }),
                        (this._renderOCFPhone = () => {
                            const { phones: e } = this.props,
                                t = e[0] && e[0].phone_number;
                            return r.createElement(s.Z, null, t ? r.createElement(r.Fragment, null, r.createElement(a.Z, { defaultValue: t, editable: !1, label: Z, name: "current_phone" }), r.createElement(o.Z, null)) : null, r.createElement(i.Z, { color: "primary", label: t ? L : y, link: "/i/flow/add_phone" }), t ? this._renderDeleteButton() : null);
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
                                loginVerificationSettings: { methods: r, twoFactorAuthEnabled: s },
                                phones: a,
                                removeDevice: o,
                            } = this.props;
                            a[0] &&
                                o(a[0].phone_number).then(
                                    () => {
                                        e({ text: k }), s && "Sms" in r && n().catch(t()), this._handleGoBack();
                                    },
                                    t({ showToast: !0 }),
                                );
                        }),
                        this._handleFetchDevices(),
                        (this._initialPath = this._previousPath = window.location.pathname);
                }
                shouldComponentUpdate(e, t) {
                    const { createLocalApiErrorHandler: n, fetchLoginVerificationSettings: r, fetchSettings: s } = this.props;
                    return this._previousPath !== location.pathname && this._initialPath === location.pathname && (this._handleFetchDevices(), s().catch(n()), r().catch(n())), (this._previousPath = location.pathname), e !== this.props || t !== this.state;
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchLoginVerificationSettings: t } = this.props;
                    t().catch(e());
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return r.createElement(u.Z, null, r.createElement(m.Z, { location: t, title: C }, r.createElement(h.Z, { fetchStatus: e, onRequestRetry: this._handleFetchDevices, render: this._renderOCFPhone })));
                }
                _renderDeleteButton() {
                    const {
                        loginVerificationSettings: { methods: e, twoFactorAuthEnabled: t },
                    } = this.props;
                    let n = P;
                    return t && "Sms" in e && (n = "Totp" in e || "U2fSecurityKey" in e ? F : I), r.createElement(d.Z, { confirmationSheetConfirmButtonLabel: n.confirmButtonLabel, confirmationSheetConfirmButtonType: "destructiveFilled", confirmationSheetHeadline: n.headline, confirmationSheetText: n.text, label: T, onConfirmationSheetConfirm: this._handleRemove, withBottomBorder: !1 });
                }
            }
            B.contextType = p.rC;
            const H = w(B);
        },
        325163: (e, t, n) => {
            n.r(t), n.d(t, { ScreenNameScreen: () => E, default: () => w });
            var r = n(202784),
                s = n(190286),
                a = n(111677),
                o = n.n(a),
                i = n(443781),
                c = n(652904),
                l = n(900128),
                d = n(264922),
                h = n(71620),
                p = n(668214),
                u = n(38562),
                m = n(395042),
                _ = n(919022);
            const g = (0, p.Z)()
                    .propsFromState(() => ({ viewerUser: _.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ clearUsernameAvailability: m.Zc, createLocalApiErrorHandler: (0, h.zr)("SETTINGS_SCREEN_NAME_SCREEN"), updateSettings: u.VP }))
                    .withAnalytics({ page: "settings", section: "screen_name" }),
                f = o().je506a60,
                b = o().b983f9e0,
                S = o().c0fcb08a,
                E = ({ clearUsernameAvailability: e, createLocalApiErrorHandler: t, history: n, location: a, updateSettings: o, viewerUser: h }) => {
                    const { featureSwitches: p, userClaims: u } = r.useContext(i.rC),
                        [m, _] = r.useState(void 0),
                        [g, E] = r.useState(!1),
                        w = r.useCallback(() => {
                            n.goBack({ backLocation: "/settings" });
                        }, [n]),
                        C = r.useCallback(() => {
                            E(!1),
                                m &&
                                    (e({ persistSuggestions: !0 }),
                                    o({ screen_name: m })
                                        .then(() => {
                                            e({ persistSuggestions: !1 }), w();
                                        })
                                        .catch(t({ showToast: !0 })));
                        }, [m, w, e, t, o]),
                        Z = r.useCallback(() => {
                            const e = u.isFreeVerifiedOrg() || u.isPaidVerifiedOrg() || u.isLegacyVerifiedOrg(),
                                t = p.isTrue("blue_business_username_change_prompt_enabled");
                            e && t ? E(!0) : C();
                        }, [p, u, C]),
                        y = r.useCallback((e) => {
                            _(e);
                        }, []),
                        L = m && h && m !== h.screen_name;
                    return r.createElement(c.Z, null, g ? r.createElement(s.Z, { headline: b, onCancel: w, onConfirm: C, testID: "screenNameConfirmationSheet", text: S }) : null, r.createElement(d.Z, { location: a, onSubmit: Z, submitDisabled: !L, title: f }, r.createElement(l.Z, { onScreenNameChanged: y })));
                },
                w = g(E);
        },
        650667: (e, t, n) => {
            n.r(t), n.d(t, { SearchSettingsPage: () => x, default: () => v });
            var r = n(202784),
                s = n(688715),
                a = n(954110),
                o = n(111677),
                i = n.n(o),
                c = n(290402),
                l = n(980407),
                d = n(670094),
                h = n(853568),
                p = n(71620),
                u = n(668214),
                m = n(204744),
                _ = n(123072),
                g = n(601576),
                f = n(774006);
            const b = (0, u.Z)()
                    .propsFromState(() => ({ fetchStatus: _.UD, lastSearchQuery: m.YB, settings: _.xN }))
                    .propsFromActions(() => ({ addToast: g.fz, clearAllSearchResults: f.u, createLocalApiErrorHandler: (0, p.zr)("SAFE_SEARCH_SCREEN"), fetchSettings: _.bP, updateSettings: _.AW }))
                    .withAnalytics({ page: "settings", section: "search" }),
                S = "searchSettings-hideSensitiveContent",
                E = "searchSettings-hideMutedOrBlockedAccounts",
                w = i().h1ef00dc,
                C = i().a90af44e,
                Z = i().a25e2ec6,
                y = i().b827a058,
                L = i().b27c9852,
                T = i().j3402d7e,
                P = i().if05bca6,
                k = (0, s.ju)("https://support.x.com/articles/132700");
            class x extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSettingChanged = (e, t) => {
                            const { addToast: n, clearAllSearchResults: r, createLocalApiErrorHandler: s, updateSettings: a } = this.props;
                            this._scribeValueChanged(e, t),
                                a(e, t).then(
                                    () => {
                                        r(), n({ text: y });
                                    },
                                    s({ ...(0, d.d)(L), showToast: !0 }),
                                );
                        }),
                        (this._scribeValueChanged = (e, t) => {
                            const { analytics: n, lastSearchQuery: r } = this.props,
                                s = r ? { search_details: { query: r } } : {},
                                a = e === h.U.Filtering ? "filtering" : "blocking",
                                o = t ? "on" : "off";
                            n.scribe({ component: "safe_search_settings", element: a, action: o, data: s });
                        }),
                        (this._render = () => {
                            const { settings: e } = this.props;
                            return r.createElement("div", null, r.createElement(a.Z, { checked: e.optInFiltering, helpText: T, label: C, learnMoreLink: k, name: "optInFiltering", onChange: this._handleSettingChanged, testID: S }), r.createElement(a.Z, { checked: e.optInBlocking, helpText: P, label: Z, learnMoreLink: k, name: "optInBlocking", onChange: this._handleSettingChanged, testID: E }));
                        }),
                        (this._handleFetchSettings = () => {
                            const { createLocalApiErrorHandler: e, fetchSettings: t } = this.props;
                            t().catch(e((0, d.d)()));
                        });
                }
                componentDidMount() {
                    this._handleFetchSettings();
                }
                render() {
                    const { fetchStatus: e, history: t } = this.props;
                    return r.createElement(l.Z, { history: t, title: w }, r.createElement(c.Z, { fetchStatus: e, onRequestRetry: this._handleFetchSettings, render: this._render }));
                }
            }
            const v = b(x);
        },
        80697: (e, t, n) => {
            n.r(t), n.d(t, { SettingsSecurityScreen: () => F, default: () => B, loginVerificationLabel: () => w, passwordResetProtectLabel: () => y });
            var r = n(202784),
                s = n(943401),
                a = n(420412),
                o = n(844685),
                i = n(779610),
                c = n(954110),
                l = n(111677),
                d = n.n(l),
                h = n(443781),
                p = n(652904),
                u = n(293115),
                m = n(472039),
                _ = n(71620),
                g = n(668214),
                f = n(38562);
            const b = (0, g.Z)()
                    .propsFromState(() => ({ settings: f.l4 }))
                    .adjustStateProps(({ settings: e }) => ({ protectPasswordReset: e.protect_password_reset }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("SETTINGS_SECURITY_SCREEN"), updateSettings: f.VP })),
                S = d().j95edf76,
                E = d().a2197726,
                w = d().dd703318,
                C = d().i36dcc3e,
                Z = d().ead60eb8,
                y = d().gfaf9a4a,
                L = d().h3cc8462,
                T = d().b4bbdeb4,
                P = d().fd127276,
                k = d().fe8aeb88,
                x = d().afe4a358,
                v = d().dc096238,
                A = d().i859a9d4,
                D = { page: "settings", section: "security" },
                I = Object.freeze({});
            class F extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleProtectPasswordResetChanged = (e, t) => {
                            this.setState({ showPasswordDialog: !0, data: { protect_password_reset: t } });
                        }),
                        (this._handlePasswordSubmit = (e) => {
                            const { createLocalApiErrorHandler: t, updateSettings: n } = this.props,
                                { data: r } = this.state;
                            n({ ...r, current_password: e }).then(
                                () => {
                                    this.setState({ showPasswordDialog: !1, data: I });
                                },
                                t({ showToast: !0 }),
                            );
                        }),
                        (this.state = { showPasswordDialog: !1, data: I });
                }
                render() {
                    const { location: e } = this.props,
                        { showPasswordDialog: t } = this.state;
                    return r.createElement(u.nO, { namespace: D }, r.createElement(p.Z, null, r.createElement(m.Z, { location: e, onPasswordSubmit: this._handlePasswordSubmit, promptForPassword: t, title: S }, r.createElement(s.Z, { description: E }), this._renderPasskeys(), this._renderTwoFactorAuthentication(), r.createElement(a.Z, null), this._renderIDVerification(), r.createElement(a.Z, null), this._renderPasswordResetProtect())));
                }
                _renderTwoFactorAuthentication() {
                    return r.createElement(r.Fragment, null, r.createElement(o.Z, { text: w }), r.createElement(i.Z, { label: w, link: "/settings/account/login_verification" }), r.createElement(s.Z, { description: C, learnMoreLabel: A, learnMoreLink: "https://help.x.com/managing-your-account/two-factor-authentication" }));
                }
                _renderIDVerification() {
                    return this.context.featureSwitches.isTrue("identity_verification_settings_enabled") ? r.createElement(r.Fragment, null, r.createElement(o.Z, { text: x }), r.createElement(i.Z, { label: x, link: "/settings/account/id_verification" }), r.createElement(s.Z, { description: v, learnMoreLabel: A, learnMoreLink: "https://help.x.com/rules-and-policies/verification-policy" })) : null;
                }
                _renderPasswordResetProtect() {
                    const { protectPasswordReset: e } = this.props;
                    return r.createElement(r.Fragment, null, r.createElement(o.Z, { text: Z }), r.createElement(c.Z, { checked: !!e, label: y, name: "protect_password_reset", onChange: this._handleProtectPasswordResetChanged }), r.createElement(s.Z, { description: L, learnMoreLabel: A, learnMoreLink: "https://help.x.com/safety-and-security/account-security-tips" }));
                }
                _renderPasskeys() {
                    return this.context.featureSwitches.isTrue("identity_verification_passkey_settings_enabled") ? r.createElement(r.Fragment, null, r.createElement(o.Z, { text: T }), r.createElement(i.Z, { label: P, link: "/settings/account/passkey" }), r.createElement(s.Z, { description: k, learnMoreLabel: A, learnMoreLink: "https://help.x.com/managing-your-account/how-to-use-passkey" })) : null;
                }
            }
            F.contextType = h.rC;
            const B = b(F);
        },
        996703: (e, t, n) => {
            n.r(t), n.d(t, { SessionDetailPage: () => D, default: () => I });
            var r = n(202784),
                s = n(325686),
                a = n(457311),
                o = n(731708),
                i = n(420412),
                c = n(844685),
                l = n(392237),
                d = n(111677),
                h = n.n(d),
                p = n(947135),
                u = n(290402),
                m = n(652904),
                _ = n(264922),
                g = n(972934),
                f = n(71620),
                b = n(668214),
                S = n(715684),
                E = n(601576);
            const w = (e, t) => {
                    const n = decodeURIComponent(t.match.params.sessionId || "");
                    return S.kz(e, n);
                },
                C = (0, b.Z)()
                    .propsFromState(() => ({ fetchStatus: S.UD, session: w }))
                    .propsFromActions(() => ({ addToast: E.fz, createLocalApiErrorHandler: (0, f.zr)("SESSION_DETAIL"), fetchSessionsIfNeeded: S.dj, revokeSession: S._1 }))
                    .withAnalytics({ page: "settings", section: "session_detail" }),
                Z = h().ed5ab16a,
                y = h().d64e29c6,
                L = { headline: h().idfa01cc, text: h().f400075e, confirmButtonLabel: h().ae1bbb26 },
                T = h().e04ba39c,
                P = h().bfbc051d,
                k = h().jaaa8984,
                x = h().eed75824,
                v = h().ddcd3d26,
                A = h().d2f0f3fe;
            class D extends r.Component {
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
                            return e ? r.createElement(s.Z, null, r.createElement(g.Z, { session: e, withBottomBorder: !1, withSummary: !0 }), this._renderDateAndTime(e), this._renderLocation(e)) : r.createElement(a.Z, { header: A });
                        });
                }
                componentDidMount() {
                    this._fetchSessionsIfNeeded();
                }
                _revokeSession(e) {
                    const { addToast: t, createLocalApiErrorHandler: n, revokeSession: r } = this.props;
                    r(e).then(
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
                        s = n ? n.name : "";
                    return r.createElement(m.Z, null, r.createElement(_.Z, { location: t, title: s }, r.createElement(u.Z, { "aria-label": v, fetchStatus: e, onRequestRetry: this._handleRetry, render: this._render })));
                }
                _renderDateLabel(e) {
                    if (e.is_current_session) return r.createElement(o.ZP, null, Z);
                    {
                        const t = new Date(Number(e.last_seen_time_ms));
                        return r.createElement("time", { dateTime: t.toISOString() }, P(t));
                    }
                }
                _renderDateAndTime(e) {
                    return r.createElement(s.Z, null, e?.last_seen_time_ms ? r.createElement(s.Z, null, r.createElement(i.Z, null), r.createElement(c.Z, { text: T }), r.createElement(s.Z, { style: [F.labelContainer, !e?.is_current_session && F.bottomBorder] }, r.createElement(o.ZP, { color: "gray700", size: "subtext2" }, this._renderDateLabel(e)))) : null, e?.is_current_session ? null : r.createElement(p.Z, { confirmationSheetConfirmButtonLabel: L.confirmButtonLabel, confirmationSheetConfirmButtonType: "primary", confirmationSheetHeadline: L.headline, confirmationSheetText: L.text, label: y, onConfirmationSheetConfirm: this._handleLogOut, withBottomBorder: !1 }));
                }
                _renderLocation(e) {
                    const t = e.location;
                    return t ? r.createElement(s.Z, null, r.createElement(i.Z, null), r.createElement(c.Z, { text: k }), r.createElement(s.Z, { style: F.labelContainer }, r.createElement(o.ZP, { color: "gray700", size: "subtext2" }, t))) : null;
                }
            }
            const I = C(D),
                F = l.default.create((e) => ({ labelContainer: { alignItems: "center", flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, width: "100%" }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } }));
        },
        467604: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                s = n(909377),
                a = n(501578),
                o = n(762863),
                i = n(875516),
                c = n(875782),
                l = n(932466);
            class d extends r.PureComponent {
                render() {
                    const { deviceType: e } = this.props;
                    switch (e.toString().toLowerCase()) {
                        case "mobile":
                            return r.createElement(s.Z, { Icon: a.default, color: "neutral" });
                        case "laptop":
                            return r.createElement(s.Z, { Icon: o.default, color: "neutral" });
                        case "tablet":
                            return r.createElement(s.Z, { Icon: i.default, color: "neutral" });
                        case "tv":
                            return r.createElement(s.Z, { Icon: c.default, color: "neutral" });
                        default:
                            return r.createElement(s.Z, { Icon: l.default, color: "neutral" });
                    }
                }
            }
        },
        396634: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                s = n(325686),
                a = n(242454),
                o = n(111677),
                i = n.n(o);
            const c = i().da6cdba8,
                l = i().ef1d3dcc;
            class d extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleRevokeApp = () => {
                            this.props.onRevoke(this.props.token, this.props.tokenType);
                        });
                }
                render() {
                    const { reportApplicationHref: e, revoked: t } = this.props;
                    return r.createElement(s.Z, null, t ? r.createElement(a.Z, { color: "primary", label: l, link: e }) : r.createElement(a.Z, { color: "red500", label: c, onPress: this._handleRevokeApp }));
                }
            }
        },
        972934: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(202784),
                s = n(966886),
                a = n(868634),
                o = n(470397),
                i = n(731708),
                c = n(779610),
                l = n(111677),
                d = n.n(l),
                h = n(467604);
            const p = d().ed5ab16a;
            class u extends r.PureComponent {
                _renderLocationAndDateLabel() {
                    const { session: e } = this.props,
                        t = e.last_seen_time_ms,
                        n = e.location,
                        c = t ? r.createElement(s.Z, { cutoff: "years", humanReadable: !0, timestamp: Number(t) }) : null,
                        l = e.is_current_session ? r.createElement(a.ZP, { background: "primary" }, p) : c;
                    return r.createElement(o.Z, null, n && r.createElement(i.ZP, null, n), l);
                }
                _renderDeviceIcon() {
                    const { session: e } = this.props;
                    return r.createElement(h.Z, { deviceType: e.icon_type });
                }
                _renderDeviceName() {
                    const { session: e } = this.props;
                    return e.name;
                }
                _renderDescription() {
                    const { session: e, withSummary: t } = this.props;
                    return r.createElement(i.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, t ? e.summary : this._renderLocationAndDateLabel());
                }
                render() {
                    const { link: e } = this.props;
                    return r.createElement(c.Z, { description: this._renderDescription(), label: this._renderDeviceName(), link: e, thumbnail: this._renderDeviceIcon() });
                }
            }
        },
        371590: (e, t, n) => {
            n.r(t), n.d(t, { default: () => D });
            var r = n(202784),
                s = n(325686),
                a = n(107267),
                o = n(952428),
                i = n(731708),
                c = n(167630),
                l = n(392237),
                d = n(111677),
                h = n.n(d),
                p = n(262754),
                u = n(191796),
                m = n(652904),
                _ = n(883229),
                g = n(177210),
                f = n(782642),
                b = n(782826),
                S = n(725516),
                E = n(264922),
                w = n(668214),
                C = n(390387);
            const Z = (0, w.Z)().propsFromState(() => ({ isSubscriber: C.pG })),
                y = h().c429e3ba,
                L = h().d97c07be,
                T = h().efa291da,
                P = h().j7f5c6aa,
                k = { context: "MONETIZATION_SETTINGS" },
                x = { page: "settings", section: "subscriptions" };
            function v({ isSubscriber: e }) {
                const { origin: t } = b.ZP.get(),
                    n = (0, S.z)(),
                    a = (0, f.p)(),
                    l = (0, g.Z)({ returnUrl: `${t}/settings/manage_subscriptions`, originProduct: "SuperFollows" }),
                    d = !l,
                    h = r.useCallback(() => {
                        n.scribe({ ...x, element: "manage_creator_subscriptions", action: "click" }), e ? l && l() : a({ text: P });
                    }, [n, e, l, a]);
                return r.createElement(o.Z, { disabled: d, onPress: h, role: "button", style: A.root, testID: "manage_creator_subscriptions", withInteractiveStyling: !0 }, r.createElement(s.Z, { style: A.contentContainer }, r.createElement(s.Z, { style: A.thumbnailContainer }, r.createElement(p.default, null)), r.createElement(s.Z, { style: A.content }, r.createElement(i.ZP, null, L), r.createElement(i.ZP, { color: "gray700", size: "subtext2" }, T)), d ? r.createElement(c.Z, null) : null, r.createElement(u.default, { style: A.icon })));
            }
            const A = l.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${l.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16, color: e.colors.gray700 } })),
                D = r.memo(
                    Z(function ({ isSubscriber: e }) {
                        const t = (0, a.useLocation)();
                        return r.createElement(m.Z, null, r.createElement(E.Z, { location: t, screenType: "primaryDetail", title: y }, r.createElement(_.N, { errorConfig: k }, r.createElement(v, { isSubscriber: e }))));
                    }),
                );
        },
        628954: (e, t, n) => {
            n.r(t), n.d(t, { SettingsTaggingScreen: () => b, default: () => S });
            var r = n(202784),
                s = n(325686),
                a = n(80512),
                o = n(111677),
                i = n.n(o),
                c = n(652904),
                l = n(264922),
                d = n(71620),
                h = n(668214),
                p = n(38562);
            const u = (0, h.Z)()
                    .propsFromState(() => ({ settings: p.l4 }))
                    .adjustStateProps(({ settings: e }) => ({ mediaTaggingOption: e.allow_media_tagging }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, d.zr)("SETTINGS_TAGGING_SCREEN"), updateSettings: p.VP }))
                    .withAnalytics({ page: "settings", section: "tagging" }),
                m = i().f56d108e,
                _ = i().f56d108e,
                g = i().gd758534,
                f = [
                    { label: i().d165c992, value: "all" },
                    { label: i().ea339390, value: "following" },
                ];
            class b extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleItemChanged = (e, t) => {
                            const { createLocalApiErrorHandler: n, updateSettings: r } = this.props;
                            r({ [e]: t }).catch(n({ showToast: !0 }));
                        });
                }
                render() {
                    const { location: e, mediaTaggingOption: t } = this.props;
                    return r.createElement(c.Z, null, r.createElement(l.Z, { location: e, title: m }, r.createElement(s.Z, null, r.createElement(a.Z, { description: g, label: _, name: "allow_media_tagging", offValue: "none", onChange: this._handleItemChanged, options: f, value: t }))));
                }
            }
            const S = u(b);
        },
        703178: (e, t, n) => {
            n.r(t), n.d(t, { TrendsLocationsScreen: () => I, default: () => B, styles: () => F });
            var r = n(202784),
                s = n(325686),
                a = n(371344),
                o = n(392237),
                i = n(111677),
                c = n.n(i),
                l = n(956272),
                d = n(912021),
                h = n(666536),
                p = n(290402),
                u = n(980407),
                m = n(334346),
                _ = n(443781),
                g = n(554997),
                f = n(71620),
                b = n(668214),
                S = n(38562),
                E = n(61666),
                w = n(991851);
            const C = (0, b.Z)()
                    .propsFromState(() => ({ placeTrendsLocations: w.YQ, placeTrendsLocationsFetchStatus: w.IZ, placeTrendsSettings: w.oo, woeTrendsLocations: w.SN, woeTrendsLocationsFetchStatus: w.Qy, woeTrendsLocationSettings: S.um }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("SETTINGS_TRENDS_LOCATION_SCREEN"), fetchWoeTrendsLocationsIfNeeded: w.oy, fetchPlaceTrendsLocations: w.yb, updateWoeTrendSettings: E.r, updatePlaceTrendSettings: w.PR }))
                    .withAnalytics({ page: "settings", section: "trends", component: "locations", element: "list" }),
                Z = "locationSearchBox";
            var y = n(952428),
                L = n(731708),
                T = n(913973);
            const P = c().d5c9174f,
                k = o.default.create((e) => ({ item: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, flexDirection: "row", padding: e.spaces.space16, justifyContent: "space-between" }, iconCheckmark: { color: e.colors.primary } })),
                x = ({ country: e, isSelected: t, name: n, onClick: s }) => r.createElement(y.Z, { onPress: s, style: k.item }, e ? r.createElement(L.ZP, null, P({ location: n, country: e })) : r.createElement(L.ZP, null, n), t ? r.createElement(T.default, { style: k.iconCheckmark }) : null),
                v = c().b3aab6d4,
                A = c().e53e05e4,
                D = c().be6cc44e;
            class I extends r.Component {
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
                            return r.createElement(m.C, { cacheKey: "LOCATIONS_LIST", identityFunction: this._identityFunction, items: e, renderer: this._renderPlaceLocation });
                        }),
                        (this._renderWoeLocations = () => {
                            const { query: e } = this.state,
                                t = "" === e ? this._getTopLevelWoeLocations() : this._getFilteredWoeLocations();
                            return r.createElement(
                                s.Z,
                                null,
                                r.createElement(s.Z, { style: F.searchBox }, r.createElement(a.Z, { Icon: l.default, autoFocus: !1, onChange: this._handleInputChange, onClear: this._handleInputClear, placeholder: D, value: this.state.query, withClearButton: !0 })),
                                r.createElement(
                                    s.Z,
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
                        (this._getMemoizedFilteredWoeLocations = (0, d.Z)((e, t) => t.filter((t) => t.name.toLowerCase().startsWith(e.toLowerCase())))),
                        (this._getTopLevelWoeLocations = () => {
                            const { woeTrendsLocations: e } = this.props;
                            return this._getMemoizedTopLevelWoeLocations(e);
                        }),
                        (this._getMemoizedTopLevelWoeLocations = (0, d.Z)((e) => e.filter((e) => (0, g.r)(e)))),
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
                            return r.createElement(x, { country: (0, g.r)(e) ? void 0 : e.country, isSelected: n, key: e.woeid, name: e.name, onClick: this._handleWoeLocationClick(e.woeid) });
                        }),
                        (this._renderPlaceLocation = (e) => {
                            const { placeTrendsSettings: t } = this.props,
                                n = !!e.place_id && t.places && t.places.some((t) => t.place_id === e.place_id);
                            return r.createElement(x, { country: void 0, isSelected: n, key: e.place_id, name: e.name, onClick: this._handlePlaceLocationClick(e.place_id, e.name) });
                        }),
                        (this._handleWoeLocationClick = (e) => () => {
                            const { createLocalApiErrorHandler: t, history: n, updateWoeTrendSettings: r } = this.props;
                            n.goBack(), r({ trend_location_woeid: e }).catch(t({ showToast: !0 }));
                        }),
                        (this._handlePlaceLocationClick = (e, t) => () => {
                            const { createLocalApiErrorHandler: n, history: r, updatePlaceTrendSettings: s } = this.props;
                            s({ places: [{ place_id: e, name: t }] })
                                .then(() => r.goBack())
                                .catch(n({ showToast: !0 }));
                        }),
                        (this._fetchFilteredPlacesDebounced = (0, h.Z)(this._fetchTrendsLocations, 250)),
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
                    return r.createElement(u.Z, { backButtonType: "back", backLocation: "/settings/trends", history: e, title: v }, this._usePlaceTrendLocations ? r.createElement(r.Fragment, null, r.createElement(a.Z, { Icon: l.default, autoFocus: !1, onChange: this._handleInputChange, onClear: this._handleInputClear, placeholder: D, style: F.searchBox, testID: Z, value: this.state.query, withClearButton: !0 }), r.createElement(p.Z, { "aria-label": A, fetchStatus: t, onRequestRetry: this._handleRetry, render: this._renderScroller })) : r.createElement(p.Z, { "aria-label": A, fetchStatus: n, onRequestRetry: this._handleRetry, render: this._renderWoeLocations }));
                }
            }
            I.contextType = _.rC;
            const F = o.default.create((e) => ({ searchBox: { flexGrow: 0, flexShrink: 0, margin: e.spaces.space12 } })),
                B = C(I);
        },
        451735: (e, t, n) => {
            n.r(t), n.d(t, { SettingsTrendsScreen: () => G, default: () => Q });
            var r = n(202784),
                s = n(325686),
                a = n(954110),
                o = n(420412),
                i = n(779610),
                c = n(844685),
                l = n(111677),
                d = n.n(l),
                h = n(615656),
                p = n(290402),
                u = n(980407),
                m = n(534763),
                _ = n(443781),
                g = n(51525),
                f = n(71620),
                b = n(668214),
                S = n(38562),
                E = n(61666),
                w = n(991851);
            const C = (0, b.Z)()
                    .propsFromState(() => ({ allSettings: S.l4, placeTrendSettings: w.oo, placeTrendSettingsFetchStatus: w.JH }))
                    .adjustStateProps(({ allSettings: e, placeTrendSettings: t, placeTrendSettingsFetchStatus: n }) => ({ trendLocation: e.trend_location, personalizedTrends: e.personalized_trends, placeTrendSettings: t, placeTrendSettingsFetchStatus: n }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("SETTINGS_TRENDS_SCREEN"), fetchPlaceTrendSettingsIfNeeded: w.CD, updateWoeTrendSettings: E.r, updatePlaceTrendSettings: w.PR }))
                    .withAnalytics({ page: "guide", section: "settings" }),
                Z = "currentLocation",
                y = "exploreLocations",
                L = d().bc7fd990,
                T = d().c5f4befa,
                P = d().j018f2a2,
                k = d().e2f16650,
                x = d().e5e88f40,
                v = d().jaaa8984,
                A = d().i4d54b0e,
                D = d().ad431584,
                I = d().df9f03c8,
                F = d().c6cf5c7e,
                B = d().e09358ba,
                H = d().a55db872,
                R = d().a58170fc,
                z = d().h0b5152e,
                U = d().dfeada5e,
                N = d().ac854308,
                V = d().d429c942,
                W = "use_current_location",
                j = "use_personalized_trends",
                O = "use_fun_mode_stories",
                M = "/settings/trends/location",
                q = "/settings/explore";
            class G extends r.Component {
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
                            const { analytics: n, createLocalApiErrorHandler: r, updatePlaceTrendSettings: s, updateWoeTrendSettings: a } = this.props,
                                o = { [e]: t },
                                i = { [h.ZP.AppInReadOnlyMode]: { customAction: g.w1 }, showToast: !0 };
                            this._usePlaceTrendSettings ? s(o).catch(r(i)) : a(o).catch(r(i)), n.scribe({ element: "personalized_trends", action: "toggle" });
                        }),
                        (this._renderWoeContent = () => {
                            const { personalizedTrends: e, trendLocation: t } = this.props,
                                n = (t && t[0] && t[0].name) || "Worldwide";
                            return r.createElement(s.Z, null, r.createElement(a.Z, { checked: e, helpText: I, label: A, name: "personalized_trends", onChange: this._handleItemChanged }), !e && r.createElement(s.Z, null, r.createElement(o.Z, null), r.createElement(i.Z, { description: n, label: z, link: M })));
                        }),
                        (this._renderPlaceLoader = () => {
                            const { placeTrendSettingsFetchStatus: e } = this.props;
                            return r.createElement(p.Z, { "aria-label": L, fetchStatus: e, onRequestRetry: this._handleRetry, render: this._renderPlaceContent });
                        }),
                        (this._renderPlaceContent = () => {
                            const { location: e, placeTrendSettings: t } = this.props,
                                n = e.pathname === q,
                                l = t.places && t.places[0] && t.places[0].name,
                                d = !n || !t.is_unified_trends,
                                h = t.is_stories_available,
                                p = n ? "/settings/explore/location" : M;
                            return r.createElement(s.Z, null, h && r.createElement(r.Fragment, null, r.createElement(o.Z, null), r.createElement(c.Z, { text: R }), r.createElement(a.Z, { checked: t[O], helpText: B, label: D, name: O, onChange: this._handleItemChanged })), r.createElement(c.Z, { text: v }), r.createElement(a.Z, { checked: t[W], helpText: x, label: k, name: W, onChange: this._handleItemChanged, testID: Z }), !t[W] && r.createElement(s.Z, null, r.createElement(i.Z, { description: l, label: U, link: p, testID: y })), d && r.createElement(r.Fragment, null, r.createElement(o.Z, null), r.createElement(c.Z, { text: H }), r.createElement(a.Z, { checked: t[j], helpText: F, label: A, name: j, onChange: this._handleItemChanged })));
                        });
                }
                componentDidMount() {
                    this._usePlaceTrendSettings && this._fetchPlaceTrendSettingsIfNeeded();
                }
                render() {
                    const { history: e, location: t } = this.props,
                        n = t.pathname === q,
                        s = this._usePlaceTrendSettings && n ? P : T;
                    return r.createElement(u.Z, { history: e, title: s }, this._usePlaceTrendSettings ? this._renderPlaceLoader() : this._renderWoeContent(), this._policySectionUrl ? this._renderPolicySection() : null);
                }
                _renderPolicySection() {
                    return r.createElement(s.Z, null, r.createElement(o.Z, null), r.createElement(c.Z, { text: N }), r.createElement(m.b, { label: V, link: this._policySectionUrl }));
                }
            }
            G.contextType = _.rC;
            const Q = C(G);
        },
        829824: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(202784),
                s = n(99107),
                a = n(420740),
                o = n(731708),
                i = n(111677),
                c = n.n(i),
                l = n(443781),
                d = n(918621),
                h = n(725405),
                p = n(125363),
                u = n(390387);
            const m = c().ffeb836a,
                _ = c().f2fb9746;
            function g() {
                const e = (0, h.Z)();
                return (
                    r.useEffect(() => {
                        e.scribe({ element: "error_page", action: "show" });
                    }, [e]),
                    r.createElement(a.Z, { title: m }, r.createElement(o.ZP, null, _))
                );
            }
            function f(e) {
                const { featureSwitches: t } = r.useContext(l.rC),
                    n = (0, p.v9)(u.Qb),
                    a = (0, d.Xh)(s.b7, t);
                return n || a ? e.children : r.createElement(g, null);
            }
        },
        902339: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var r = n(202784),
                s = n(325686),
                a = n(154003),
                o = n(190286),
                i = n(111677),
                c = n.n(i),
                l = n(40904),
                d = n(175856);
            const h = c().cfd2f35e,
                p = c().bb1cbeb6,
                u = c().ba4aaa9e,
                m = c().f837ed7e;
            class _ extends r.Component {
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
                    e(d.pJ);
                }
                render() {
                    const { color: e } = this.props;
                    return r.createElement(s.Z, null, r.createElement(a.ZP, { "aria-label": p, color: e, hoverLabel: { label: p }, icon: r.createElement(l.default, null), onPress: this._handlePress }), this.state.showUnmuteConfirmation ? r.createElement(o.Z, { cancelButtonLabel: h, confirmButtonLabel: p, headline: u, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: m }) : null);
                }
            }
            _.defaultProps = { color: "red500" };
        },
        170069: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                s = n(325686),
                a = n(731708),
                o = n(392237);
            const i = ({ children: e }) => r.createElement(s.Z, { style: c.labelContainer }, r.createElement(s.Z, { style: c.contentContainer }, r.createElement(s.Z, { style: c.appText }, r.createElement(a.ZP, { color: "gray700", size: "subtext2" }, e)))),
                c = o.default.create((e) => ({ contentContainer: { alignItems: "center", flex: 1, flexDirection: "row", justifyContent: "space-between" }, labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, minHeight: `calc(${o.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})` }, appText: { flexShrink: 1, width: "100%" } }));
        },
        609848: (e, t, n) => {
            n.d(t, { Z: () => F });
            var r = n(202784),
                s = n(325686),
                a = n(731708),
                o = n(688715),
                i = n(844685),
                c = n(855488),
                l = n(108362),
                d = n(154003),
                h = n(392237),
                p = n(111677),
                u = n.n(p),
                m = n(615656),
                _ = n(290402),
                g = n(443781),
                f = n(500002),
                b = n(312771),
                S = n(615027),
                E = n(267966),
                w = n(71620),
                C = n(668214),
                Z = n(673110);
            const y = (0, C.Z)()
                    .propsFromState(() => ({ verifyPasswordFetchStatus: Z.UD }))
                    .propsFromActions(() => ({ verifyPassword: Z.Gv, createLocalApiErrorHandler: (0, w.zr)("PASSWORD_GATEWAY") })),
                L = u().fe36fe10,
                T = u().dec3c9b8,
                P = u().hccd9dbe,
                k = u().d1091f50,
                x = u().g9677c6e,
                v = u().c8cb0b4c;
            class A extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { password: "" }),
                        (this._passwordlessSsoEnabled = this.context.featureSwitches.isTrue("responsive_web_passwordless_sso_enabled")),
                        (this._handlePasswordSubmit = () => {
                            const { createLocalApiErrorHandler: e, verifyPassword: t } = this.props,
                                { password: n } = this.state;
                            "" !== n &&
                                t(n)
                                    .then(() => {
                                        this.setState({ password: "", verificationRequired: !1 }), this._makeFetch();
                                    })
                                    .catch(e({ [m.ZP.InvalidCurrentPassword]: { customAction: () => this.setState({ passwordError: v }) }, showToast: !0 }));
                        }),
                        (this._makeFetch = () => {
                            const { createLocalApiErrorHandler: e, fetch: t } = this.props;
                            t()
                                .then(() => {
                                    this.setState({ verificationRequired: !1 });
                                })
                                .catch(
                                    e({
                                        [m.ZP.PasswordVerificationRequired]: {
                                            customAction: () => {
                                                this.setState({ verificationRequired: !0 });
                                            },
                                        },
                                        showToast: !1,
                                    }),
                                );
                        }),
                        (this._handleFetch = this._makeFetch),
                        (this._handleChange = (e) => {
                            this.setState({ passwordError: void 0, password: e.target.value });
                        });
                }
                componentDidMount() {
                    this._makeFetch();
                }
                componentDidUpdate(e) {
                    e.fetchStatus === b.ZP.LOADED && this.props.fetchStatus === b.ZP.NONE && this._makeFetch();
                }
                _renderPasswordPrompt() {
                    const { titleHeader: e } = this.props,
                        { passwordError: t } = this.state,
                        n = r.createElement(a.ZP, { link: { pathname: (0, o.ju)("https://x.com/i/flow/password_reset"), external: !0, openInSameFrame: !0 } }, k);
                    return r.createElement(r.Fragment, null, e ? r.createElement(i.Z, { text: e }) : null, r.createElement(s.Z, { style: [E.Z.viewItem, E.Z.bottomBorder] }, r.createElement(a.ZP, { color: "gray700", size: "subtext2" }, P)), r.createElement(c.Z, { errorText: t, helperText: n, invalid: !!t, label: T, name: "current_password", onChange: this._handleChange, onSubmitEditing: this._handlePasswordSubmit, type: "password", value: this.state.password }), r.createElement(l.Z, { style: D.buttonContainer }, r.createElement(d.ZP, { disabled: !1, onPress: this._handlePasswordSubmit, style: D.button, type: "brandFilled" }, x)));
                }
                render() {
                    const { fetchStatus: e, location: t, render: n } = this.props,
                        { verificationRequired: s } = this.state,
                        a = e === b.ZP.FAILED && s;
                    return r.createElement(r.Fragment, null, a ? (this._passwordlessSsoEnabled ? r.createElement(S.Z, { to: { pathname: "/i/flow/verify_account_ownership", state: { input: { requested_variant: t.pathname } } } }) : this._renderPasswordPrompt()) : r.createElement(_.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: n }));
                }
            }
            (A.contextType = g.rC), (A.defaultProps = { titleHeader: L });
            const D = h.default.create((e) => ({ buttonContainer: { flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingBottom: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.componentDimensions.gutterHorizontal } })),
                I = y(A),
                F = (0, f.ZP)(I);
        },
        472039: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(202784),
                s = n(325686),
                a = n(731708),
                o = n(688715),
                i = n(844685),
                c = n(855488),
                l = n(111677),
                d = n.n(l),
                h = n(267966),
                p = n(264922);
            const u = d().a999cb72,
                m = d().dec3c9b8,
                _ = d().b929aa74,
                g = d().d1091f50,
                f = d().i2209530;
            class b extends r.Component {
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
                    const { location: e, reenterPasswordLabel: t, saveChangesHeaderLabel: n, submitLabel: l, submitType: d } = this.props,
                        u = r.createElement(a.ZP, { link: { pathname: (0, o.ju)("https://x.com/i/flow/password_reset"), external: !0, openInSameFrame: !0 } }, g);
                    return r.createElement(p.Z, { location: e, onSubmit: this._handleSubmit, submitLabel: l, submitType: d, title: n }, r.createElement(i.Z, { text: n }), r.createElement(s.Z, { style: [h.Z.viewItem, h.Z.bottomBorder] }, r.createElement(a.ZP, { color: "gray700", size: "subtext2" }, t)), r.createElement(c.Z, { helperText: u, label: m, name: "current_password", onChange: this._handleChange, type: "password", value: this.state.current_password }));
                }
                render() {
                    const { children: e, location: t, promptForPassword: n, title: s } = this.props;
                    return n ? this._renderPasswordPrompt() : r.createElement(p.Z, { location: t, title: s }, e || null);
                }
            }
            b.defaultProps = { children: null, promptForPassword: !1, reenterPasswordLabel: _, saveChangesHeaderLabel: u, submitLabel: f };
        },
        267966: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(392237);
            const s = (e) => ({ borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" }),
                a = r.default.create((e) => ({ descriptionText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, searchBox: { margin: e.spaces.space4 }, infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, linkItem: { padding: e.spaces.space12, backgroundColor: e.colors.cellBackground }, viewItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, backgroundColor: e.colors.cellBackground }, calloutTextBlock: { paddingVertical: e.spaces.space20, paddingHorizontal: e.componentDimensions.gutterHorizontal }, bottomBorder: { ...s(e) } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-394f886d.03e9e59a.js.map
