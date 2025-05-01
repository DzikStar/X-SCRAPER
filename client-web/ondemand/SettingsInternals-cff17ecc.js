"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-cff17ecc"],
    {
        614562: (e, t, n) => {
            n.r(t), n.d(t, { MutedAccountsScreen: () => U, default: () => H });
            var r = n(202784),
                a = n(731708),
                i = n(688715),
                s = n(457311),
                o = n(420412),
                l = n(674132),
                c = n.n(l),
                d = n(443781),
                h = n(652904),
                u = n(810641),
                m = n(935929),
                p = n(166506),
                _ = n(170069),
                f = n(264922),
                w = n(668214),
                g = n(704279),
                E = n(601576);
            const b = (e, t) => t.match.params.filter,
                y = (0, w.Z)()
                    .propsFromState(() => ({ filterName: b }))
                    .propsFromActions(() => ({ addToast: E.fz, cleanupMuteList: p.du, cleanupDMMuteList: m.L, scribePageImpression: g.L }))
                    .withAnalytics({ page: "settings", section: "muted_accounts" });
            var S = n(583335),
                Z = n(269011),
                k = n(335632),
                C = n(733487),
                v = n(962741);
            const P = { ...(0, k.G)({}), [v.ZP.User]: (0, Z.Z)({ decoration: ({ userId: e }) => r.createElement(S.Z, { userId: e }) }) },
                x = { ...(0, k.G)({}), [v.ZP.User]: (0, Z.Z)({ decoration: ({ userId: e }) => r.createElement(C.Z, { userId: e }) }) };
            var A = n(152469);
            const F = c().daef29b8,
                M = r.createElement(c().I18NFormatMessage, { $i18n: "b0b13519" }, r.createElement(a.ZP, { link: (0, i.ju)("https://help.x.com/using-twitter/twitter-mute") }, c().ec202165)),
                T = c().a6194d10,
                N = c().daef29b8,
                I = c().bcf6ad9a,
                K = c().b8e49590,
                D = c().i859a9d4,
                L = (0, i.ju)("https://help.x.com/using-twitter/twitter-mute"),
                B = () => {
                    const e = r.createElement("div", null, K, " ", r.createElement(a.ZP, { link: L }, D));
                    return r.createElement(s.Z, { header: N, message: e });
                },
                O = () => {
                    const e = r.createElement("div", null, I, " ", r.createElement(a.ZP, { link: L }, D));
                    return r.createElement(s.Z, { header: N, message: e });
                };
            class U extends r.Component {
                componentDidMount() {
                    this._cleanupMuteLists();
                }
                render() {
                    const { filterName: e, location: t } = this.props,
                        { viewerUserId: n } = this.context,
                        a = e === A.v.Messages;
                    return (this._module = a ? (0, m.X)(n) : (0, p.k9)()), r.createElement(h.Z, null, r.createElement(f.Z, { location: t, title: F, withBottomBorder: !0, withMarginBottom: !1 }, r.createElement(_.Z, null, M), r.createElement(o.Z, null), r.createElement(u.Z, { entryConfiguration: a ? x : P, loadingAccessibilityLabel: T, module: this._module, renderEmptyState: a ? B : O, title: F })));
                }
                _cleanupMuteLists() {
                    const { cleanupDMMuteList: e, cleanupMuteList: t } = this.props,
                        { viewerUserId: n } = this.context,
                        r = (0, m.X)(n);
                    t((0, p.k9)()), e(r);
                }
            }
            U.contextType = d.rC;
            const H = y(U);
        },
        651511: (e, t, n) => {
            n.r(t), n.d(t, { NotificationAdvancedFiltersPage: () => A, default: () => F });
            var r = n(202784),
                a = n(325686),
                i = n(688715),
                s = n(844685),
                o = n(954110),
                l = n(731708),
                c = n(674132),
                d = n.n(c),
                h = n(290402),
                u = n(652904),
                m = n(264922),
                p = n(267966),
                _ = n(71620),
                f = n(668214),
                w = n(450476);
            const g = (0, f.Z)()
                    .propsFromState(() => ({ fetchStatus: w.UD, notificationFilters: w.ky }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("ADVANCED_FILTERS_SCREEN"), disableNotificationFilter: w.SW, enableNotificationFilter: w.Y0, fetchNotificationFiltersIfNeeded: w.Ob }))
                    .withAnalytics({ page: "settings", section: "advanced_filters" }),
                E = d().aaafffda,
                b = d().j29ab120,
                y = d().jdfc82f6,
                S = d().cfcda0e6,
                Z = d().c75b9b2a,
                k = d().f39b9c9e,
                C = d().d227f940,
                v = d().b210936e,
                P = (0, i.ju)("https://support.x.com/articles/20169398"),
                x = { filter_not_following: "people_you_follow_only", filter_not_followed_by: "filter_not_following_me", filter_new_users: "new_users", filter_default_profile_image: "default_profile_image", filter_no_confirmed_email: "no_confirmed_email", filter_no_confirmed_phone: "no_confirmed_phone" };
            class A extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchNotificationFiltersIfNeeded: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleItemChanged = (e, t) => {
                            const { createLocalApiErrorHandler: n, disableNotificationFilter: r, enableNotificationFilter: a } = this.props;
                            t ? a(e).then(() => this._scribeNotificationFilterChanged(e, "select"), n()) : r(e).then(() => this._scribeNotificationFilterChanged(e, "deselect"), n());
                        }),
                        (this._scribeNotificationFilterChanged = (e, t) => {
                            const { analytics: n } = this.props;
                            n.scribe({ component: "advanced_filters", element: x[e], action: t });
                        }),
                        (this._renderNotificationFilters = () => {
                            const { notificationFilters: e } = this.props;
                            return r.createElement(a.Z, null, r.createElement(s.Z, { text: b }), r.createElement(o.Z, { checked: e.filter_not_following, label: y, name: "filter_not_following", onChange: this._handleItemChanged }), r.createElement(o.Z, { checked: e.filter_not_followed_by, label: S, name: "filter_not_followed_by", onChange: this._handleItemChanged }), r.createElement(o.Z, { checked: e.filter_new_users, label: Z, name: "filter_new_users", onChange: this._handleItemChanged }), r.createElement(o.Z, { checked: e.filter_default_profile_image, label: k, name: "filter_default_profile_image", onChange: this._handleItemChanged }), r.createElement(o.Z, { checked: e.filter_no_confirmed_email, label: C, name: "filter_no_confirmed_email", onChange: this._handleItemChanged }), r.createElement(o.Z, { checked: e.filter_no_confirmed_phone, label: v, name: "filter_no_confirmed_phone", onChange: this._handleItemChanged }), r.createElement(l.ZP, { color: "gray700", size: "subtext2", style: p.Z.infoText }, r.createElement(d().I18NFormatMessage, { $i18n: "eb96a831" }, r.createElement(l.ZP, { link: P }, d().ed0df10b))));
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return r.createElement(u.Z, null, r.createElement(m.Z, { location: t, title: E }, r.createElement(h.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._renderNotificationFilters })));
                }
            }
            const F = g(A);
        },
        450425: (e, t, n) => {
            n.r(t), n.d(t, { DeviceFollowingScreen: () => v, default: () => P });
            var r = n(202784),
                a = n(614983),
                i = n.n(a),
                s = n(457311),
                o = n(674132),
                l = n.n(o),
                c = n(443781),
                d = n(652904),
                h = n(810641),
                u = n(293115),
                m = n(336429),
                p = n(264922),
                _ = n(269011),
                f = n(335632),
                w = n(240089),
                g = n(962741);
            const E = { ...(0, f.G)({ tweetDismissable: !0 }), [g.ZP.User]: (0, _.Z)({ decoration: w.TJ }) },
                b = { page: "settings", section: "device_following" },
                y = l().h0c94842,
                S = l().c460d332,
                Z = l().a820d092,
                k = l().ha45c9e4,
                C = () => r.createElement(s.Z, { header: y, message: S });
            class v extends r.Component {
                render() {
                    const { viewerUserId: e } = this.context,
                        { location: t } = this.props;
                    i()(!!e, "viewerUserId must be defined");
                    const n = (0, m.R)(e);
                    return r.createElement(u.nO, { namespace: b }, r.createElement(d.Z, null, r.createElement(p.Z, { location: t, title: k }, r.createElement(h.Z, { entryConfiguration: E, loadingAccessibilityLabel: Z, module: n, renderEmptyState: C, title: k }))));
                }
            }
            v.contextType = c.rC;
            const P = v;
        },
        439031: (e, t, n) => {
            n.r(t), n.d(t, { EmailNotificationsScreen: () => F, default: () => M, emailSettingsLabels: () => x });
            var r = n(202784),
                a = n(325686),
                i = n(954110),
                s = n(101890),
                o = n(688715),
                l = n(420412),
                c = n(844685),
                d = n(674132),
                h = n.n(d),
                u = n(290402),
                m = n(652904),
                p = n(670094),
                _ = n(39699),
                f = n(264922),
                w = n(71620),
                g = n(668214),
                E = n(823647),
                b = n(919022);
            const y = (e) => {
                    const t = b.ZP.selectViewerUser(e);
                    return !(!t || !t.verified);
                },
                S = (0, g.Z)()
                    .propsFromState(() => ({ fetchStatus: E.UD, isVerified: y, emailSettings: E.jW }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, w.zr)("SETTINGS_NOTIFICATIONS_EMAIL_SCREEN"), fetchEmailSettingsIfNeeded: E.uc, updateEmailSettings: E.zJ }))
                    .withAnalytics({ page: "settings", section: "email_notifications" });
            const Z = h().e75f25a8,
                k = h().af045060,
                C = h().cf378ff8,
                v = h().f823bbbe,
                P = h().a40e37f2,
                x = { send_twitter_emails: h().e75f25a8, send_email_vit_weekly: h().e8eb54a0, send_network_activity_email: h().ib80b0f2, send_new_direct_text_email: h().i58a274c, send_shared_tweet_email: h().ba58e6b0, send_network_digest: h().fae2c81a, send_performance_digest: h().f7b09bb4, send_email_newsletter: h().d3978554, send_activation_email: h().bdccb81c, send_resurrection_email: h().c3d47fe6, send_partner_email: h().af8caf3e, send_survey_email: h().hc076ee4, send_follow_recs_email: h().ddfe3776, send_similar_people_email: h().d17ba8c2, send_smb_sales_marketing_email: h().bcf50a1a },
                A = [
                    { label: h().fcad1e2e, value: "Daily" },
                    { label: h().h9e0dfde, value: "Weekly" },
                    { label: h().e26d98ac, value: "Periodically" },
                    { label: h().e3a761ee, value: "None" },
                ];
            class F extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderBooleanSetting = (e, t = {}) => {
                            const { emailSettings: n } = this.props,
                                { helpText: a, learnMoreLink: s, type: o } = t || {},
                                l = x[e];
                            return n.hasOwnProperty(e) ? r.createElement(i.Z, { checked: n[e], disabled: !n.send_twitter_emails && "send_twitter_emails" !== e, helpText: a, key: e, label: l, learnMoreLink: s, name: e, onChange: this._handleBooleanSettingChanged(e), type: o }) : null;
                        }),
                        (this._renderNetworkDigestSetting = (e) => {
                            const { emailSettings: t } = this.props,
                                n = x[e],
                                a = t[e];
                            return t.hasOwnProperty(e) ? r.createElement(s.Z, { disabled: !t.send_twitter_emails, key: e, label: n, name: e, onChange: this._handleSelectSettingChanged(e), options: A, value: a }) : null;
                        }),
                        (this._renderPerformanceDigestSetting = (e, t) => {
                            const { emailSettings: n } = this.props,
                                a = x[e],
                                s = n[e];
                            return n.hasOwnProperty(e) ? r.createElement(i.Z, { checked: s && "Weekly" === s, disabled: !n.send_twitter_emails, key: e, label: a, name: e, onChange: this._handlePerformanceDigestSettingChanged(e) }) : null;
                        }),
                        (this._render = () => {
                            const { isVerified: e } = this.props;
                            return r.createElement(a.Z, null, this._renderBooleanSetting("send_twitter_emails", { helpText: P, learnMoreLink: (0, o.ju)("https://help.x.com/managing-your-account/updating-email-preferences#tweet-activity"), type: "switch", withBottomBorder: e }), e ? r.createElement(r.Fragment, null, r.createElement(l.Z, null), r.createElement(c.Z, { text: v }), this._renderBooleanSetting("send_email_vit_weekly")) : null, r.createElement(l.Z, null), r.createElement(c.Z, { text: k }), this._renderBooleanSetting("send_network_activity_email"), this._renderBooleanSetting("send_new_direct_text_email"), this._renderBooleanSetting("send_shared_tweet_email"), this._renderNetworkDigestSetting("send_network_digest"), this._renderPerformanceDigestSetting("send_performance_digest", { withBottomBorder: !1 }), r.createElement(l.Z, null), r.createElement(c.Z, { text: C }), this._renderBooleanSetting("send_email_newsletter"), this._renderBooleanSetting("send_activation_email"), this._renderBooleanSetting("send_resurrection_email"), this._renderBooleanSetting("send_partner_email"), this._renderBooleanSetting("send_survey_email"), this._renderBooleanSetting("send_follow_recs_email"), this._renderBooleanSetting("send_similar_people_email"), this._renderBooleanSetting("send_smb_sales_marketing_email", { withBottomBorder: !1 }));
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchEmailSettingsIfNeeded: t } = this.props;
                            t().catch(e({ ...(0, p.d)(), showToast: !0 }));
                        }),
                        (this._handleSelectSettingChanged = (e) => (t, n) => {
                            const { createLocalApiErrorHandler: r, updateEmailSettings: a } = this.props,
                                i = {};
                            (i[e] = (function (e) {
                                return _.B[e] || "None";
                            })(n)),
                                a(i).catch(r({ ...(0, p.d)(), showToast: !0 }));
                        }),
                        (this._handleBooleanSettingChanged = (e) => (t, n) => {
                            const { createLocalApiErrorHandler: r, updateEmailSettings: a } = this.props,
                                i = {};
                            (i[e] = !!n), a(i).catch(r({ ...(0, p.d)(), showToast: !0 }));
                        }),
                        (this._handlePerformanceDigestSettingChanged = (e) => (t, n) => {
                            const { createLocalApiErrorHandler: r, updateEmailSettings: a } = this.props,
                                i = {};
                            (i[e] = n ? "Weekly" : "None"), a(i).catch(r({ ...(0, p.d)(), showToast: !0 }));
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return r.createElement(m.Z, null, r.createElement(f.Z, { location: t, title: Z }, r.createElement(u.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render })));
                }
            }
            const M = S(F);
        },
        632351: (e, t, n) => {
            n.r(t), n.d(t, { FilterPage: () => k, default: () => C });
            var r = n(202784),
                a = n(688715),
                i = n(943401),
                s = n(954110),
                o = n(779610),
                l = n(674132),
                c = n.n(l),
                d = n(652904),
                h = n(293115),
                u = n(264922),
                m = n(71620),
                p = n(668214),
                _ = n(38562);
            const f = (0, p.Z)()
                    .propsFromState(() => ({ universalQualityFilteringEnabled: _.js }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("SETTINGS_FILTERS_SCREEN"), updateSettings: _.VP })),
                w = c().ef1b5cbc,
                g = c().i647fb04,
                E = c().aaafffda,
                b = c().afdf29b8,
                y = c().da19d878,
                S = (0, a.ju)("https://help.x.com/managing-your-account/understanding-the-notifications-timeline"),
                Z = { page: "settings", section: "filters" };
            function k(e) {
                const { createLocalApiErrorHandler: t, location: n, universalQualityFilteringEnabled: a, updateSettings: l } = e;
                return r.createElement(
                    h.nO,
                    { namespace: Z },
                    r.createElement(
                        d.Z,
                        null,
                        r.createElement(
                            u.Z,
                            { location: n, title: g },
                            r.createElement(i.Z, { description: w }),
                            r.createElement(s.Z, {
                                checked: a,
                                helpText: y,
                                label: b,
                                learnMoreLink: S,
                                name: "universal_quality_filtering",
                                onChange: function (e, n) {
                                    l({ [e]: n ? "enabled" : "disabled" }).catch(t({ showToast: !0 }));
                                },
                            }),
                            r.createElement(o.Z, { label: E, link: "/settings/notifications/advanced_filters" }),
                        ),
                    ),
                );
            }
            const C = f(k);
        },
        934634: (e, t, n) => {
            n.r(t), n.d(t, { MuteKeywordDetailScreen: () => Y, default: () => X });
            n(136728);
            var r = n(202784),
                a = n(325686),
                i = n(688715),
                s = n(731708),
                o = n(855488),
                l = n(420412),
                c = n(844685),
                d = n(954110),
                h = n(80512),
                u = n(101890),
                m = n(392237),
                p = n(674132),
                _ = n.n(p),
                f = n(704762),
                w = n(615656),
                g = n(290402),
                E = n(231035),
                b = n(652904),
                y = n(312771),
                S = n(264922),
                Z = n(71620),
                k = n(668214),
                C = n(642721),
                v = n(601576);
            const P = (e, t) => t.match.params.mutedKeywordId,
                x = (e, t) => C.mz(e, P(0, t)),
                A = (e, t) => !!P(0, t),
                F = (0, k.Z)()
                    .propsFromState(() => ({ defaultOptions: C.Lk, discouragedKeywords: C.fd, fetchStatus: C.UD, isEditing: A, mutedKeyword: x }))
                    .propsFromActions(() => ({ addMutedKeyword: C.AE, addToast: v.fz, createLocalApiErrorHandler: (0, Z.zr)("MUTED_KEYWORD_DETAIL"), fetchDefaultOptionsIfNeeded: C.xZ, fetchDiscouragedKeywordsIfNeeded: C.UK, fetchMutedKeywordsIfNeeded: C.$o, updateDefaultOptions: C.kM, updateMutedKeyword: C.ck }))
                    .withAnalytics({ page: "settings", section: "notifications", component: "mute_keyword", element: "add" }),
                M = _().bdbf8f4e,
                T = _().h43e2ea8,
                N = _().da8c0440,
                I = _().eb75875e,
                K = [
                    { label: _().defb4aaa, value: "everyone" },
                    { label: _().e7d47b00, value: "following" },
                ],
                D = _().c67e3fc2,
                L = _().d9d6e10e,
                B = _().gfa5008e,
                O = _().c5595dfe,
                U = _().he6804e0,
                H = [
                    { label: U, value: "forever" },
                    { label: _().a268406c, value: "day" },
                    { label: _().fc638aa2, value: "week" },
                    { label: _().b8971cfa, value: "month" },
                ],
                R = [
                    { label: _().a268406c, value: "day" },
                    { label: _().fc638aa2, value: "week" },
                    { label: _().b8971cfa, value: "month" },
                    { label: U, value: "forever" },
                ],
                j = _().cc7bedfc,
                z = _().d768049c,
                V = _().c6203da8,
                W = _().e3f0d3db,
                G = _().h5746cf7,
                $ = _().d2693eb8,
                q = _().f8488024,
                J = (0, i.ju)("https://support.x.com/articles/20175032");
            class Y extends r.Component {
                constructor(e) {
                    super(e),
                        (this._renderSettings = () => {
                            const { isEditing: e, mutedKeyword: t } = this.props,
                                { errorText: n, warningText: i } = this.state,
                                l = n || i,
                                c = r.createElement(_().I18NFormatMessage, { $i18n: "aba5a349" }, r.createElement(s.ZP, { link: J }, _().deb4924d));
                            return r.createElement(a.Z, null, r.createElement(o.Z, { defaultValue: e ? t?.keyword : "", editable: !e, errorText: l, helperText: e ? null : c, invalid: !!l, label: e ? T : M, name: "keyword", numberOfLines: 1, onChange: this._handleKeywordChanged, type: "text" }), this._renderOptions());
                        }),
                        (this._renderOptions = () => {
                            const { isEditing: e } = this.props;
                            return r.createElement(a.Z, null, r.createElement(l.Z, null), r.createElement(c.Z, { text: N }), r.createElement(d.Z, { checked: this.state.mute_home_timeline, label: D, name: "mute_home_timeline", onChange: this._handleEntryUpdated }), r.createElement(h.Z, { label: I, name: "mute_notifications_option", offValue: "none", onChange: this._handleEntryUpdated, options: K, value: this.state.mute_notifications_option }), r.createElement(l.Z, null), r.createElement(c.Z, { text: e ? this._renderEditTimeDurationLabel() : L }), r.createElement(u.Z, { name: "time_duration", onChange: this._handleEntryUpdated, options: e ? R : H, value: this.state.time_duration }), e ? r.createElement(s.ZP, { color: "gray700", size: "subtext2", style: Q.infoText }, j) : null);
                        }),
                        (this._renderEditTimeDurationLabel = () => {
                            const { mutedKeyword: e } = this.props;
                            return e?.valid_until ? B : O;
                        }),
                        (this._renderNotFound = () => r.createElement(E.Z, null)),
                        (this._initializeMuteKeywordStates = (e) => ({ id: e.id, keyword: e.keyword, mute_home_timeline: e.mute_surfaces.indexOf("home_timeline") > -1, mute_notifications_option: e.mute_surfaces.indexOf("notifications") > -1 ? (e.mute_options.indexOf("exclude_following_accounts") > -1 ? "following" : "everyone") : "none", time_duration: e.valid_until ? "" : "forever" })),
                        (this._isMutedKeywordNotFound = () => {
                            const { fetchStatus: e, isEditing: t, mutedKeyword: n } = this.props;
                            return t && e === y.ZP.LOADED && !n;
                        }),
                        (this._getFetchStatus = () => {
                            const { fetchStatus: e } = this.props,
                                { isUpdatingMutedKeyword: t } = this.state;
                            return t ? y.ZP.LOADING : this._isMutedKeywordNotFound() ? y.ZP.FAILED : e;
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchDefaultOptionsIfNeeded: t, fetchDiscouragedKeywordsIfNeeded: n, fetchMutedKeywordsIfNeeded: r, fetchStatus: a, isEditing: i } = this.props;
                            n().catch(e()), i || a === y.ZP.NONE ? r().catch(e()) : t();
                        }),
                        (this._handleKeywordChanged = (e) => {
                            const t = e.target.value;
                            this.setState({ keyword: t }, this._checkKeywordValidity);
                        }),
                        (this._handleEntryUpdated = (e, t) => {
                            this.setState({ [e]: t }, this._checkKeywordValidity);
                        }),
                        (this._handleGoBack = () => {
                            const { history: e } = this.props;
                            e.goBack({ backLocation: "/settings/muted_keywords" });
                        }),
                        (this._handleMutedKeywordIdChanged = (e, t) => {
                            const { history: n } = this.props;
                            if (e) {
                                const r = t?.find((t) => t.keyword === e);
                                r && n.replace({ pathname: `/settings/muted_keywords/${r.id}` });
                            }
                        }),
                        (this._handleSubmit = () => {
                            const e = this._getMuteKeywordParams();
                            this.props.isEditing ? this._updateExistingMutedKeyword(e) : this._createNewMutedKeyword(e);
                        });
                    const { defaultOptions: t, mutedKeyword: n } = e,
                        i = n ? this._initializeMuteKeywordStates(n) : t;
                    this.state = { errorText: void 0, hasValidKeyword: !1, warningText: void 0, isUpdatingMutedKeyword: !1, ...i };
                }
                componentDidMount() {
                    this._handleFetch(),
                        (this._mutateMutedKeywordApiErrorHandlingConfiguration = {
                            [w.ZP.ValidationFailure]: {
                                customAction: (e) => {
                                    e.message && this.setState({ errorText: e.message, hasValidKeyword: !1 });
                                },
                            },
                        });
                }
                componentDidUpdate(e) {
                    const { defaultOptions: t, fetchStatus: n, isEditing: r, mutedKeyword: a } = this.props;
                    r && n === y.ZP.LOADED && a && !e.mutedKeyword && this.setState(this._initializeMuteKeywordStates(a)), r || n !== y.ZP.LOADED || t === e.defaultOptions || this.setState(t);
                }
                render() {
                    const { isEditing: e, location: t } = this.props,
                        n = this._isMutedKeywordNotFound();
                    return r.createElement(b.Z, null, r.createElement(S.Z, { location: t, onSubmit: this._handleSubmit, submitDisabled: !this.state.hasValidKeyword || n, title: e ? V : z }, r.createElement(g.Z, { fetchStatus: this._getFetchStatus(), onRequestRetry: this._handleFetch, render: this._renderSettings, renderFailure: this._renderNotFound, retryable: !n })));
                }
                _isDiscouragedWord(e) {
                    return this.props.discouragedKeywords.indexOf(e) >= 0;
                }
                _checkKeywordValidity() {
                    const { keyword: e = "", mute_home_timeline: t, mute_notifications_option: n } = this.state,
                        r = (0, f.Z)(e),
                        a = this._isDiscouragedWord(e.trim()),
                        i = r > 0 && r <= 140,
                        s = i && (t || "none" !== n);
                    let o, l;
                    i || (r > 140 && (o = $)), a && (l = q), this.setState({ hasValidKeyword: s, errorText: o, warningText: l });
                }
                _getMuteKeywordParams() {
                    const { id: e, keyword: t, mute_home_timeline: n, mute_notifications_option: r, time_duration: a } = this.state,
                        { isEditing: i } = this.props,
                        s = {},
                        o = [],
                        l = [];
                    return i ? (s.id = e) : (s.keyword = t), "none" !== r && o.push("notifications"), n && o.push("home_timeline", "tweet_replies"), (s.mute_surfaces = o.join(",")), "following" === r && l.push("exclude_following_accounts"), (s.mute_options = l.join(",")), (s.duration = this._getDuration(a)), s;
                }
                _getDuration(e) {
                    switch (e) {
                        case "day":
                            return 864e5;
                        case "week":
                            return 6048e5;
                        case "month":
                            return 2592e6;
                        case "forever":
                            return "";
                        default:
                            return;
                    }
                }
                _createNewMutedKeyword(e) {
                    const { addMutedKeyword: t, addToast: n, analytics: r, createLocalApiErrorHandler: a, updateDefaultOptions: i } = this.props,
                        { mute_home_timeline: s, mute_notifications_option: o, time_duration: l } = this.state;
                    i({ mute_notifications_option: o, mute_home_timeline: s, time_duration: l }),
                        t(e).then((t) => {
                            let a = e.keyword;
                            if ("object" == typeof t && Array.isArray(t.muted_keywords)) {
                                const e = t.muted_keywords[0];
                                "object" == typeof e && e.keyword && (a = e.keyword);
                            }
                            const i = W({ keyword: a });
                            n({ text: i }), r.scribeAction("mute"), this._handleGoBack();
                        }, a(this._mutateMutedKeywordApiErrorHandlingConfiguration));
                }
                _updateExistingMutedKeyword(e) {
                    const { addToast: t, createLocalApiErrorHandler: n, mutedKeyword: r, updateMutedKeyword: a } = this.props,
                        i = r?.keyword;
                    this.setState({ isUpdatingMutedKeyword: !0 }, () => {
                        a(e).then(
                            (e) => {
                                t({ text: G({ keyword: this.state.keyword }) }), this._handleMutedKeywordIdChanged(i, e.muted_keywords), this._handleGoBack();
                            },
                            (e) => {
                                n(this._mutateMutedKeywordApiErrorHandlingConfiguration)(e), this.setState({ isUpdatingMutedKeyword: !1 });
                            },
                        );
                    });
                }
            }
            const Q = m.default.create((e) => ({ infoText: { marginVertical: e.spaces.space20, marginHorizontal: e.spaces.space12 } })),
                X = F(Y);
        },
        125603: (e, t, n) => {
            n.r(t), n.d(t, { MutedKeywordsNotificationsScreen: () => R, default: () => z });
            var r = n(202784),
                a = n(325686),
                i = n(688715),
                s = n(731708),
                o = n(457311),
                l = n(529356),
                c = n(952428),
                d = n(392237),
                h = n(674132),
                u = n.n(h),
                m = n(232130),
                p = n(917009),
                _ = n(290402),
                f = n(652904),
                w = n(175856),
                g = n(902339),
                E = n(264922),
                b = n(267966),
                y = n(71620),
                S = n(668214),
                Z = n(642721),
                k = n(601576);
            const C = (e, t) => (0, w.t5)(e, w.DW),
                v = (e, t) => (0, w.t5)(e, w.pJ),
                P = (0, S.Z)()
                    .propsFromState(() => ({ mutedKeywords: Z.WW, fetchStatus: Z.UD, shouldShowMuteEducationTip: C, shouldShowUnmuteEducationTip: v }))
                    .propsFromActions(() => ({ addFlag: w.pj, addToast: k.fz, createLocalApiErrorHandler: (0, y.zr)("MUTED_KEYWORDS"), deleteMutedKeyword: Z.R_, fetchMutedKeywordsIfNeeded: Z.$o }))
                    .withAnalytics({ page: "settings", section: "notifications", component: "mute_keyword", element: "list" }),
                x = u().aa09e528,
                A = u().e506aa92,
                F = u().cbd04965,
                M = u().j24c37b2,
                T = u().i0dd9b9e,
                N = u().eb4e810a,
                I = u().cabeb6c2,
                K = u().jade381b,
                D = u().be59d8c3,
                L = u().i3d087db,
                B = u().ga8d18c9,
                O = (0, i.ju)("https://help.x.com/using-twitter/advanced-twitter-mute-options"),
                U = u().f9bce916,
                H = () => r.createElement(u().I18NFormatMessage, { $i18n: "f03ea36d" }, r.createElement(s.ZP, { color: "link", link: O, withInteractiveStyling: !0 }, u().gfe0ee3b));
            class R extends r.Component {
                constructor(e) {
                    super(e),
                        (this._render = () => {
                            const { mutedKeywords: e } = this.props;
                            return e && e.length > 0 ? this._renderKeywords() : this._renderEmptyState();
                        }),
                        (this._renderEmptyState = () => r.createElement(o.Z, { header: x, message: r.createElement(H, null) })),
                        (this._renderExpireTime = (e) => {
                            const t = new Date(Number(e));
                            return r.createElement("time", { "aria-label": K(t), dateTime: t.toISOString() }, this._calcRemainingTime(t));
                        }),
                        (this._isKeywordExpired = (e) => e && Number(e) < Date.now()),
                        (this._calcRemainingTime = (e) => {
                            const t = e - Date.now();
                            if (t <= 0) return N;
                            const n = Math.ceil(t / 6e4);
                            if (n < 60) return D(n);
                            const r = Math.round(t / 36e5);
                            if (r < 25) return L(r);
                            const a = Math.round(t / 864e5);
                            return a < 31 ? B(a) : K(e);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchMutedKeywordsIfNeeded: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleUnmute = (e) => {
                            const { addToast: t, analytics: n, createLocalApiErrorHandler: r, deleteMutedKeyword: a } = this.props;
                            a([e.id]).then(
                                () => {
                                    t({ text: F({ keyword: e.keyword }) }), n.scribe({ action: "unmute" });
                                },
                                r({ showToast: !0 }),
                            );
                        }),
                        (this._handleCloseEducationPrompt = () => {
                            this.setState({ showMuteKeywordEducationSheet: !1 });
                        }),
                        (this.state = { showMuteKeywordEducationSheet: !1 });
                }
                UNSAFE_componentWillMount() {
                    this._handleFetch();
                }
                componentDidMount() {
                    const { shouldShowMuteEducationTip: e } = this.props;
                    e && (this.setState({ showMuteKeywordEducationSheet: !0 }), this._updateMuteKeywordEducationCookie());
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props,
                        n = r.createElement(p.Z, { "aria-label": A, link: "/settings/add_muted_keyword" });
                    return r.createElement(f.Z, null, r.createElement(E.Z, { location: t, rightControl: n, title: T }, this.state.showMuteKeywordEducationSheet ? r.createElement(l.Z, { actionLabel: M, graphic: m.default, graphicDisplayMode: "illustration", headline: U, onAction: this._handleCloseEducationPrompt, onClose: this._handleCloseEducationPrompt, subtext: r.createElement(H, null) }) : null, r.createElement(_.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render })));
                }
                _renderKeywords() {
                    const { addFlag: e, shouldShowUnmuteEducationTip: t } = this.props;
                    return r.createElement(
                        a.Z,
                        null,
                        r.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [b.Z.descriptionText, b.Z.bottomBorder] }, r.createElement(H, null)),
                        this.props.mutedKeywords.map((n) => r.createElement(c.Z, { key: n.id, link: { pathname: `/settings/muted_keywords/${n.id}`, anchorless: !0 }, style: j.item }, r.createElement(a.Z, { style: j.keywordContainer }, r.createElement(s.ZP, { color: this._isKeywordExpired(n.valid_until) ? "gray700" : "text", numberOfLines: 1, style: j.keyword }, n.keyword), r.createElement(s.ZP, { color: "gray700", size: "subtext2", style: j.muteTime }, n.valid_until ? this._renderExpireTime(n.valid_until) : I)), r.createElement(g.Z, { addFlag: e, color: this._isKeywordExpired(n.valid_until) ? "gray700" : "red500", keyword: n, onUnmute: this._handleUnmute, shouldShowUnmuteEducationTip: t }))),
                    );
                }
                _updateMuteKeywordEducationCookie() {
                    const { addFlag: e } = this.props;
                    e(w.DW);
                }
            }
            const j = d.default.create((e) => ({ item: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16, maxWidth: "100%" }, keywordContainer: { alignItems: "flex-start", flexGrow: 1, justifyContent: "space-between", marginEnd: e.spaces.space16, minHeight: e.spaces.space40, maxWidth: "85%" }, keyword: { maxWidth: "100%" }, muteTime: { flexShrink: 0 } })),
                z = P(R);
        },
        461366: (e, t, n) => {
            n.r(t), n.d(t, { PreferencesPage: () => k, default: () => C });
            var r = n(202784),
                a = n(688715),
                i = n(943401),
                s = n(779610),
                o = n(674132),
                l = n.n(o),
                c = n(652904),
                d = n(293115),
                h = n(76920),
                u = n(264922),
                m = n(71620),
                p = n(258427),
                _ = n(668214);
            const f = (0, _.Z)()
                    .propsFromState(() => ({ browserPushAllowed: p.Gb }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("SETTINGS_PREFERENCES_SCREEN") })),
                w = l().hee41732,
                g = l().e75f25a8,
                E = l().bcd81cac,
                b = l().da867c58,
                y = (0, a.ju)("https://help.x.com/managing-your-account/notifications-on-mobile-devices"),
                S = l().i859a9d4,
                Z = { page: "settings", section: "preferences" };
            function k({ browserPushAllowed: e, location: t }) {
                const n = (0, h.Zy)().has("/settings/email_notifications");
                return r.createElement(d.nO, { namespace: Z }, r.createElement(c.Z, null, r.createElement(u.Z, { location: t, title: E }, r.createElement(i.Z, { description: b, learnMoreLabel: S, learnMoreLink: y }), e ? r.createElement(s.Z, { label: w, link: "/settings/push_notifications" }) : null, n && r.createElement(s.Z, { label: g, link: "/settings/email_notifications" }))));
            }
            const C = f(k);
        },
        593077: (e, t, n) => {
            n.r(t), n.d(t, { PushNotificationsScreen: () => z, default: () => V });
            var r = n(202784),
                a = n(457311),
                i = n(954110),
                s = n(674132),
                o = n.n(s),
                l = n(290402),
                c = n(443781),
                d = n(258427),
                h = n(312771),
                u = n(264922),
                m = (n(136728), n(420412)),
                p = n(844685),
                _ = n(101890),
                f = n(163889);
            const w = o().ec7cb554,
                g = o().b68050dc;
            class E extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSettingChanged = (e) => (t, n) => {
                            const { onChange: r, scribeAction: a, scribeNamespace: i } = this.props,
                                s = { [t]: n };
                            a({ ...i, component: e, action: n }), r(s);
                        }),
                        (this._handleBooleanChanged = (e) => (t, n) => {
                            this._handleSettingChanged(e)(t, n ? "on" : "off");
                        });
                }
                render() {
                    const { currentSettings: e, isVerified: t, template: n } = this.props,
                        { settings: a } = n.template;
                    return a.length
                        ? r.createElement(
                              "div",
                              null,
                              a.map((n, a) =>
                                  r.createElement(
                                      "div",
                                      { key: a },
                                      n.section_header ? r.createElement(r.Fragment, null, r.createElement(m.Z, null), r.createElement(p.Z, { text: n.section_header })) : null,
                                      n.section_entries.map((n, a) => {
                                          if ("vit-only" === n.vit && !t) return null;
                                          if ("vit-off" === n.vit && t) return null;
                                          switch (n.control_type) {
                                              case "list": {
                                                  const t = n.selections.map((e) => {
                                                      const t = Object.keys(e)[0];
                                                      return { label: e[t], value: t };
                                                  });
                                                  return t.push({ label: n.off_description, value: "off" }), r.createElement(_.Z, { key: n.id, label: n.name, name: n.id, onChange: this._handleSettingChanged(n.scribe_component), options: t, value: e[n.id] });
                                              }
                                              case "tweet_control": {
                                                  const t = e[n.id] && "on" === e[n.id];
                                                  return r.createElement(i.Z, { checked: t, helpText: w, key: n.id, label: n.name, learnMoreLabel: g, learnMoreLink: "/settings/device_follow", name: n.id, onChange: this._handleBooleanChanged(n.scribe_component) });
                                              }
                                              case "on_off": {
                                                  const t = e[n.id] && "on" === e[n.id];
                                                  return r.createElement(i.Z, { checked: t, key: n.id, label: n.name, name: n.id, onChange: this._handleBooleanChanged(n.scribe_component) });
                                              }
                                              default:
                                                  return (0, f.ZP)(`Unsupported control type: ${n.control_type}`), null;
                                          }
                                      }),
                                  ),
                              ),
                          )
                        : null;
                }
            }
            var b = n(71620),
                y = n(668214),
                S = n(704279),
                Z = n(257166),
                k = n(454319),
                C = n(601576),
                v = n(919022);
            const P = (e) => {
                    const t = v.ZP.selectViewerUser(e);
                    return t && t.verified;
                },
                x = (e) => {
                    const t = v.ZP.selectViewerUser(e);
                    return t && t.is_blue_verified;
                },
                A = (e, t) => {
                    const n = (0, k.pc)(e);
                    return n && n.length > 0;
                },
                F = (0, y.Z)()
                    .propsFromState(() => ({ fetchStatus: Z.selectPushSettingsFetchStatus, isVerified: P, isBlueVerified: x, pushStatus: Z.selectBrowserPushStatus, pushSettings: Z.selectPushSettings, pushTemplate: Z.selectPushTemplate, hasMultiAccount: A }))
                    .propsFromActions(() => ({ addToast: C.fz, createLocalApiErrorHandler: (0, b.zr)("SETTINGS_NOTIFICATIONS_PUSH_SCREEN"), fetchPushSettingsIfNeeded: Z.fetchPushSettingsIfNeeded, pushSubscribe: Z.pushSubscribe, removePushDeviceIfSubscribed: Z.removePushDeviceIfSubscribed, scribeAction: S.n, scribePageImpression: S.L, updatePushNotificationSettings: Z.updatePushNotificationSettings })),
                M = o().hee41732,
                T = o().dcef34ac,
                N = o().a39f706e,
                I = o().hee41732,
                K = o().h4f20d0e,
                D = o().cdce0394,
                L = o().b39bcae2,
                B = o().b50f6144,
                O = o().fe11b3ea,
                U = o().a1245d3a,
                H = o().f580c738,
                R = o().i951fbcc,
                j = { page: "settings", section: "push_notifications" };
            class z extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { isBlueVerified: e, isVerified: t, pushSettings: n, pushStatus: i, pushTemplate: s, scribeAction: o } = this.props,
                                l = "denied" === d.qO();
                            return i.subscribed ? r.createElement(E, { currentSettings: n, isBlueVerified: e, isVerified: t, onChange: this._handleSettingsChanged, scribeAction: o, scribeNamespace: j, template: s }) : l ? r.createElement(a.Z, { header: H, message: R }) : i.supported ? r.createElement(a.Z, { buttonText: T, header: L, message: B, onButtonPress: this._handlePushSubscribe }) : r.createElement(a.Z, { header: O, message: U });
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchPushSettingsIfNeeded: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleSettingsChanged = (e) => {
                            const { createLocalApiErrorHandler: t, updatePushNotificationSettings: n } = this.props;
                            n(e).catch(t({ showToast: !0 }));
                        }),
                        (this._handleSwitchChanged = (e, t) => {
                            const { createLocalApiErrorHandler: n, pushSubscribe: r, removePushDeviceIfSubscribed: a, scribeAction: i } = this.props;
                            t ? (i({ ...j, action: "enable" }), r().catch(n())) : (i({ ...j, action: "disable" }), a().catch(n({ showToast: !0 })));
                        }),
                        (this._handlePushSubscribe = () => {
                            this.props.scribeAction({ ...j, element: "soft_prompt", action: "click" }), this.props.pushSubscribe();
                        });
                }
                componentDidMount() {
                    const { scribePageImpression: e } = this.props;
                    this._handleFetch(), e(j);
                }
                componentDidUpdate(e) {
                    const { addToast: t, fetchStatus: n, history: r, pushStatus: a, scribeAction: i } = this.props;
                    n === h.ZP.LOADED && !1 === d.Gb() && (t({ text: N }), r.replace("/settings")), n === h.ZP.LOADED && !a.subscribed && a.supported && i({ ...j, element: "soft_prompt", action: "impression" });
                }
                render() {
                    const { fetchStatus: e, hasMultiAccount: t, location: n, pushStatus: a } = this.props,
                        s = a.supported ? r.createElement(i.Z, { checked: a.subscribed, helpText: K + (t ? ` ${D}` : ""), key: "switchAll", label: I, name: "switchAll", onChange: this._handleSwitchChanged, type: "switch" }) : null;
                    return r.createElement(u.Z, { location: n, title: M }, s, r.createElement(l.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render }));
                }
            }
            z.contextType = c.rC;
            const V = F(z);
        },
        621547: (e, t, n) => {
            n.r(t), n.d(t, { PasswordScreen: () => B, default: () => O });
            var r = n(202784),
                a = n(325686),
                i = n(688715),
                s = n(855488),
                o = n(731708),
                l = n(420412),
                c = n(928088),
                d = n(674132),
                h = n.n(d),
                u = n(615656),
                m = n(290402),
                p = n(652904),
                _ = n(71620),
                f = n(623109),
                w = n(725516),
                g = n(264922),
                E = n(668214),
                b = n(948985),
                y = n(464107),
                S = n(601576);
            const Z = (0, E.Z)()
                    .propsFromState(() => ({ applications: b.$q.selectUniqUnrevokedApps, fetchStatus: b.UD }))
                    .adjustStateProps(({ applications: e, fetchStatus: t }) => ({ applicationCount: e?.length, fetchStatus: t }))
                    .propsFromActions(() => ({ addToast: S.fz, changePassword: y.Z, createLocalApiErrorHandler: (0, _.zr)("SETTINGS_PASSWORD_SCREEN"), fetchApplicationsIfNeeded: b.wz }))
                    .withAnalytics({ page: "settings", section: "password" }),
                k = h().ab1f7ee0,
                C = h().d241169c,
                v = h().d1091f50,
                P = h().a9bc3044,
                x = h().b8c03cfc,
                A = h().b731d32c,
                F = h().d555d7e0,
                M = h().fa8af9ae,
                T = h().c8cb0b4c,
                N = h().jea2ff04,
                I = h().a03f5c73,
                K = h().i9028824,
                D = (0, i.ju)("https://help.x.com/safety-and-security/account-security-tips"),
                L = { pathname: (0, i.ju)("https://x.com/i/flow/password_reset"), external: !0, openInSameFrame: !0 };
            class B extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._render = () => {
                            const { applicationCount: e } = this.props,
                                { current_password: t, currentPasswordError: n, new_password: i, newPasswordError: d, password_confirmation: u, passwordConfirmationError: m } = this.state;
                            return r.createElement(a.Z, null, r.createElement(s.Z, { errorText: n, helperText: r.createElement(o.ZP, { link: L }, v), invalid: !!n, label: C, name: "current_password", onChange: this._handleItemChanged, type: "password", value: t }), r.createElement(l.Z, null), r.createElement(s.Z, { errorText: d, invalid: !!d, label: P, name: "new_password", onChange: this._handleItemChanged, type: "password", value: i }), r.createElement(s.Z, { errorText: m, invalid: !!m, label: x, name: "password_confirmation", onChange: this._handleItemChanged, type: "password", value: u }), r.createElement(l.Z, null), e ? r.createElement(c.Z, null, r.createElement(o.ZP, { color: "gray700" }, r.createElement(h().I18NFormatMessage, { $i18n: "f05afae5" }, r.createElement(o.ZP, { link: "/settings/applications" }, I({ applicationCount: e })), r.createElement(o.ZP, { link: D }, h().j25601d9)))) : null);
                        }),
                        (this._handleFetchApps = () => {
                            const { createLocalApiErrorHandler: e, fetchApplicationsIfNeeded: t } = this.props;
                            t().catch(e({ showToast: !1 }));
                        }),
                        (this._handleSubmit = () => {
                            const { addToast: e, changePassword: t, createLocalApiErrorHandler: n } = this.props,
                                { current_password: r, new_password: a, password_confirmation: i } = this.state;
                            r === a
                                ? this.setState({ newPasswordError: F })
                                : a.length < f.l
                                  ? this.setState({ newPasswordError: _.px })
                                  : a.length > f.E
                                    ? this.setState({ newPasswordError: _.IM })
                                    : a !== i
                                      ? this.setState({ passwordConfirmationError: M })
                                      : (this.setState({ newPasswordError: void 0, passwordConfirmationError: void 0 }),
                                        t(r, a, i)
                                            .then(() => {
                                                this.setState({ current_password: "", hasBlankFields: !0, new_password: "", password_confirmation: "" }), e({ text: A });
                                            })
                                            .catch(n({ [u.ZP.InvalidCurrentPassword]: { customAction: () => this.setState({ currentPasswordError: T }) }, [u.ZP.NewPasswordLong]: { customAction: () => this.setState({ newPasswordError: _.IM }) }, [u.ZP.NewPasswordShort]: { customAction: () => this.setState({ newPasswordError: _.px }) }, [u.ZP.NewPasswordWeak]: { customAction: () => this.setState({ newPasswordError: N }) }, [u.ZP.CannotReuseCurrentPassword]: { customAction: () => this.setState({ newPasswordError: F }) }, [u.ZP.PasswordResetMismatchedEntries]: { customAction: () => this.setState({ passwordConfirmationError: M }) }, showToast: !0 })));
                        }),
                        (this._handleItemChanged = (e) => {
                            this.setState({ [e.target.name]: e.target.value, currentPasswordError: void 0, newPasswordError: void 0, passwordConfirmationError: void 0 }, () => {
                                this.setState({ hasBlankFields: "" === this.state.current_password || "" === this.state.new_password || "" === this.state.password_confirmation });
                            });
                        }),
                        (this.state = { current_password: "", hasBlankFields: !0, new_password: "", password_confirmation: "" });
                }
                UNSAFE_componentWillMount() {
                    this._handleFetchApps();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return r.createElement(g.Z, { location: t, onSubmit: this._handleSubmit, submitDisabled: this.state.hasBlankFields, title: k }, r.createElement(p.Z, null, r.createElement(m.Z, { "aria-label": K, fetchStatus: e, onRequestRetry: this._handleFetchApps, render: this._render })));
                }
            }
            const O = (0, w.Z)(Z(B));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-cff17ecc.30e4de1a.js.map
