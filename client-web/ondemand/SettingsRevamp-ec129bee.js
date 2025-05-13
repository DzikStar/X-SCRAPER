"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-ec129bee"],
    {
        518180: (e, t, n) => {
            n.d(t, { BJ: () => i, Jz: () => s, OB: () => c, Vt: () => l, vl: () => r });
            var a = n(189244);
            const s = "/settings/monetization",
                r = `${s}/earnings`,
                i = `${s}/payout_history`,
                l = { dashboard: { root: `${s}/subscriptions/dashboard`, revenue: `${s}/subscriptions/dashboard/revenue`, manage: `${s}/subscriptions/dashboard/manage` }, perks: { root: `${s}/subscriptions/perks`, intro: `${s}/subscriptions/perks/intro`, description: `${s}/subscriptions/perks/description`, pricing: `${s}/subscriptions/perks/pricing`, confirm: `${s}/subscriptions/perks/confirm` }, transactions: { root: `${s}/subscriptions/transactions`, newSubscriptions: `${s}/subscriptions/transactions/new_subscriptions`, newSubscriptionDetails: `${s}/subscriptions/transactions/new_subscriptions/${a.Hr}`, renewals: `${s}/subscriptions/transactions/renewals`, renewalDetails: `${s}/subscriptions/transactions/renewals/${a.Hr}` } },
                c = { dashboard: { root: `${s}/awards/dashboard`, revenue: `${s}/awards/dashboard/revenue`, manage: `${s}/awards/dashboard/manage` }, transactions: { root: `${s}/awards/transactions` } };
        },
        158002: (e, t, n) => {
            n.r(t), n.d(t, { default: () => P });
            var a = n(807896),
                s = n(202784),
                r = n(325686),
                i = n(943401),
                l = n(674132),
                c = n.n(l),
                o = n(516330),
                d = n(254944),
                p = n(14284),
                m = n(53674),
                u = n(689107),
                b = n(534763),
                g = n(652904),
                f = n(293115),
                h = n(264922);
            const _ = { accessibilityScreen: "accessibilityScreen" },
                E = c().f2b23062,
                w = c().fa76d7dc,
                Z = c().e3719c16,
                k = c().j7a15010,
                S = c().c4881c66,
                y = c().a257ecae,
                C = c().d495680e,
                A = c().jc3fa0e2,
                v = c().eafe3288,
                D = c().cc2973a8,
                T = c().h54e6138,
                F = [
                    { label: Z, description: k, link: "/settings/accessibility", Icon: o.default },
                    { label: S, description: y, link: "/settings/display", Icon: d.default },
                    { label: C, description: A, link: "/settings/languages", Icon: p.default },
                    { label: v, description: D, link: "/settings/data", Icon: m.default },
                    { label: T, link: "/i/keyboard_shortcuts", Icon: u.default },
                ],
                L = { page: "settings", section: "accessibility_display_and_languages" };
            function P(e) {
                const { location: t } = e;
                return s.createElement(
                    f.nO,
                    { namespace: L },
                    s.createElement(
                        g.Z,
                        null,
                        s.createElement(
                            h.Z,
                            { location: t, screenType: "primaryDetail", title: E },
                            s.createElement(
                                r.Z,
                                { testID: _.accessibilityScreen },
                                s.createElement(i.Z, { description: w }),
                                F.map((e) => s.createElement(b.H, (0, a.Z)({}, e, { key: e.label }))),
                            ),
                        ),
                    ),
                );
            }
        },
        503266: (e, t, n) => {
            n.r(t), n.d(t, { AdsPreferences: () => A, default: () => v });
            var a = n(202784),
                s = n(943401),
                r = n(954110),
                i = n(688715),
                l = n(779610),
                c = n(674132),
                o = n.n(c),
                d = n(873372),
                p = n(652904),
                m = n(293115),
                u = n(725405),
                b = n(264922),
                g = n(71620),
                f = n(668214),
                h = n(205253);
            const _ = (0, f.Z)()
                    .propsFromState(() => ({ settings: h.kQ }))
                    .adjustStateProps(({ settings: e }) => ({ allowPersonalizationEnabled: e.allowPersonalization }))
                    .propsFromActions(() => ({ updateSettings: h.VP, createLocalApiErrorHandler: (0, g.zr)("ADS_PREFERENCES_SCREEN") })),
                E = o().d035a8d0,
                w = o().e338a794,
                Z = o().ib3357a6,
                k = o().f2f9628e,
                S = o().h1f01a24,
                y = o().da202f9a,
                C = { page: "settings", section: "ads_preferences" };
            function A(e) {
                const { allowPersonalizationEnabled: t, createLocalApiErrorHandler: n, location: c, updateSettings: o } = e,
                    g = (0, u.Z)();
                return a.createElement(
                    m.nO,
                    { namespace: C },
                    a.createElement(
                        p.Z,
                        null,
                        a.createElement(
                            b.Z,
                            { location: c, screenType: "secondaryDetail", title: E },
                            a.createElement(s.Z, { description: w }),
                            a.createElement(r.Z, {
                                checked: t,
                                helpText: k,
                                label: Z,
                                learnMoreLink: (0, i.ju)("https://support.x.com/articles/20170405"),
                                name: "allowPersonalization",
                                onChange: function (e, t) {
                                    g.scribe({ ...C, element: e, action: t ? "enable" : "disable" }), o({ [e]: t }).catch(n());
                                },
                            }),
                            a.createElement(d.Z, null),
                            a.createElement(l.Z, { label: S, link: "/settings/your_twitter_data/twitter_interests" }),
                            a.createElement(l.Z, { label: y, link: "/settings/your_twitter_data/audiences" }),
                        ),
                    ),
                );
            }
            const v = _(A);
        },
        379591: (e, t, n) => {
            n.r(t), n.d(t, { default: () => w });
            var a = n(202784),
                s = n(325686),
                r = n(943401),
                i = n(779610),
                l = n(674132),
                c = n.n(l),
                o = n(652904),
                d = n(293115),
                p = n(264922);
            const m = { appsAndSessionsScreen: "appsAndSessionsScreen", connectedAppsLink: "connectedAppsLink" },
                u = c().ae72d4c4,
                b = c().g2841de4,
                g = c().jc02ae68,
                f = c().dd82312a,
                h = c().b523ecc6,
                _ = c().hc36dbba,
                E = { page: "settings", section: "apps_and_sessions" };
            function w(e) {
                const { location: t } = e;
                return a.createElement(d.nO, { namespace: E }, a.createElement(o.Z, null, a.createElement(p.Z, { location: t, screenType: "secondaryDetail", title: u }, a.createElement(s.Z, { testID: m.appsAndSessionsScreen }, a.createElement(r.Z, { description: b }), a.createElement(i.Z, { label: g, link: "/settings/connected_apps", testID: m.connectedAppsLink }), a.createElement(i.Z, { label: f, link: "/settings/sessions" }), a.createElement(i.Z, { label: h, link: "/settings/your_twitter_data/login_history" }), a.createElement(i.Z, { label: _, link: "/settings/your_twitter_data/devices" })))));
            }
        },
        5058: (e, t, n) => {
            n.r(t), n.d(t, { AudienceAndTagging: () => H, default: () => V });
            var a = n(767758),
                s = n(251985),
                r = n(202784),
                i = (n(585488), n(712696)),
                l = n.n(i),
                c = n(351743),
                o = n.n(c),
                d = n(943401),
                p = n(954110),
                m = n(688715),
                u = n(779610),
                b = n(190286),
                g = n(674132),
                f = n.n(g),
                h = n(443781),
                _ = n(652904),
                E = n(293115),
                w = n(725405),
                Z = n(111531),
                k = n(264922),
                S = n(71620),
                y = n(668214),
                C = n(172497),
                A = n(38562),
                v = n(919022);
            const D = (0, y.Z)()
                    .propsFromState(() => ({ settings: A.l4, hasCommunityMemberships: C.fn }))
                    .adjustStateProps(({ hasCommunityMemberships: e, settings: t }) => ({ protectedEnabled: t.protected, allowMediaTagging: t.allow_media_tagging, hasCommunityMemberships: e }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, S.zr)("AUDIENCE_AND_TAGGING_SCREEN"), patchUser: v.ZP.patchUser, updateSettings: A.VP })),
                T = f().fd807e78,
                F = f().a9ff473c,
                L = f().b5c85d2c,
                P = f().d8492604,
                x = f().if050fae,
                M = f().b7ed5f6e,
                N = { headline: f().dbb51952, text: f().de735de6, confirmButtonLabel: f().c5d4192a },
                I = { headline: f().gea6cc1a, text: f().d9ddba70, confirmButtonLabel: f().f527b322 },
                R = f().f56d108e,
                $ = { all: f().d165c992, following: f().ea339390, none: f().e3a761ee },
                j = { page: "settings", section: "audience_and_tagging" };
            function U(e, t, n, a) {
                const [s, i] = r.useState(!1),
                    l = (function (e, t, n, a) {
                        const { viewerUserId: s } = r.useContext(h.rC),
                            i = (0, w.Z)();
                        return {
                            setEnabled(t) {
                                a({ protected: t })
                                    .then(() => {
                                        i.scribe({ ...j, element: "protected", action: t ? "enable" : "disable" }), s && n(s, { protected: t });
                                    })
                                    .catch(e());
                            },
                        };
                    })(e, 0, n, a);
                return {
                    showConfirmation: s,
                    _handleChanged(e, t) {
                        t ? i(!0) : l.setEnabled(!1);
                    },
                    _handleConfirmationCancel() {
                        i(!1);
                    },
                    _handleConfirmationConfirm() {
                        i(!1), l.setEnabled(!0);
                    },
                };
            }
            function H(e) {
                const { allowMediaTagging: t, createLocalApiErrorHandler: n, hasCommunityMemberships: a, location: s, patchUser: i, protectedEnabled: l, updateSettings: c } = e,
                    o = U(n, 0, i, c),
                    g = $[t],
                    f = a ? I : N;
                return r.createElement(E.nO, { namespace: j }, r.createElement(_.Z, null, r.createElement(k.Z, { location: s, screenType: "secondaryDetail", title: T }, r.createElement(d.Z, { description: F }), r.createElement(p.Z, { checked: l, helpText: P, label: L, learnMoreLink: (0, m.ju)("https://help.x.com/safety-and-security/public-and-protected-tweets"), name: "protected", onChange: o._handleChanged }), r.createElement(B, null), r.createElement(u.Z, { description: g, label: R, link: "/settings/tagging" })), o.showConfirmation ? r.createElement(b.Z, { confirmButtonLabel: f.confirmButtonLabel, confirmButtonType: "primary", headline: f.headline, onCancel: o._handleConfirmationCancel, onConfirm: o._handleConfirmationConfirm, text: f.text }) : null));
            }
            const z = s.Z,
                O = a.Z;
            function B() {
                const {
                        user_preferences: { __id: e, allow_video_downloads: t },
                        viewer: n,
                    } = l()(z, {}),
                    [a] = o()(O),
                    s = r.useCallback(
                        (t, n) => {
                            function s(t) {
                                const a = e,
                                    s = t.get(a);
                                s && s.setValue(!n, "allow_video_downloads");
                            }
                            a({ optimisticUpdater: s, updater: s, variables: { isAllowed: !n } });
                        },
                        [e, a],
                    );
                if ((0, Z.Xp)(n)) return null;
                const i = !(t ?? 1);
                return r.createElement(p.Z, { checked: i, helpText: M, label: x, learnMoreLink: (0, m.ju)("https://help.x.com/using-twitter/twitter-videos"), name: "protected_videos", onChange: s });
            }
            const V = D(H);
        },
        413940: (e, t, n) => {
            n.r(t), n.d(t, { ApplicationsScreen: () => P, default: () => M });
            var a = n(202784),
                s = n(325686),
                r = n(688715),
                i = n(943401),
                l = n(731708),
                c = n(457311),
                o = n(779610),
                d = n(992942),
                p = n(392237),
                m = n(674132),
                u = n.n(m),
                b = n(290402),
                g = n(652904),
                f = n(293115),
                h = n(264922),
                _ = n(71620),
                E = n(668214),
                w = n(948985),
                Z = n(312771);
            const k = (e, t) => (0, Z.h1)(w.UD(e)),
                S = (0, E.Z)()
                    .propsFromState(() => ({ fetchStatus: k, applications: w.$q.selectUniqUnrevokedApps }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("APPLICATIONS"), fetchApplications: w.wz })),
                y = "connectedAppsScreen",
                C = u().jc02ae68,
                A = u().e5e8a89a,
                v = u().hfa9a2c8,
                D = u().dd1b86f9,
                T = u().cf461930,
                F = (0, r.ju)("https://help.x.com/managing-your-account/connect-or-revoke-access-to-third-party-apps"),
                L = { page: "settings", section: "connected_apps" };
            class P extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchApps = () => {
                            const { createLocalApiErrorHandler: e, fetchApplications: t } = this.props;
                            t().catch(e({ showToast: !0 }));
                        }),
                        (this._handleRetry = () => {
                            this._fetchApps();
                        }),
                        (this._render = () => {
                            const e = this.props.applications;
                            return a.createElement(
                                s.Z,
                                null,
                                a.createElement(i.Z, { description: a.createElement(u().I18NFormatMessage, { $i18n: "hcecd237" }, a.createElement(l.ZP, { link: F }, u().b63b0b1d)) }),
                                e.length ? null : a.createElement(c.Z, { header: v, message: T }),
                                e.map((e, t) => {
                                    const n = `/settings/connected_apps/${e.app_id}`;
                                    return a.createElement(o.Z, { description: e.organization ? D({ name: e.organization }) : null, key: e.app_id, label: e.name, link: n, thumbnail: a.createElement(d.Z, { "aria-label": "", source: e.img_url, style: x.avatar }) });
                                }),
                            );
                        });
                }
                componentDidMount() {
                    this._fetchApps();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return a.createElement(f.nO, { namespace: L }, a.createElement(g.Z, null, a.createElement(h.Z, { location: t, title: C }, a.createElement(s.Z, { testID: y }, a.createElement(b.Z, { "aria-label": A, fetchStatus: e, onRequestRetry: this._handleRetry, render: this._render })))));
                }
            }
            P.defaultProps = { applications: [] };
            const x = p.default.create((e) => ({ avatar: { borderRadius: e.borderRadii.small, height: "100%", width: "100%" } })),
                M = S(P);
        },
        720823: (e, t, n) => {
            n.r(t), n.d(t, { ContentYouSee: () => T, default: () => F });
            var a = n(202784),
                s = n(943401),
                r = n(954110),
                i = n(779610),
                l = n(674132),
                c = n.n(l),
                o = n(443781),
                d = n(652904),
                p = n(440630),
                m = n(293115),
                u = n(725405),
                b = n(264922),
                g = n(71620),
                f = n(668214),
                h = n(38562),
                _ = n(919022);
            const E = (0, f.Z)()
                    .propsFromState(() => ({ settings: h.l4, viewerUser: _.ZP.selectViewerUser }))
                    .adjustStateProps(({ settings: e, viewerUser: t }) => ({ displaySensitiveMediaEnabled: e.display_sensitive_media, viewerUserScreenName: t?.screen_name }))
                    .propsFromActions(() => ({ updateSettings: h.VP, createLocalApiErrorHandler: (0, g.zr)("CONTENT_YOU_SEE_SCREEN") })),
                w = c().f2bd9c48,
                Z = c().c4afe0e6,
                k = c().fc1d217c,
                S = c().b8533bac,
                y = c().h1f01a24,
                C = c().j018f2a2,
                A = c().h1ef00dc,
                v = c().h9f2da68,
                D = { page: "settings", section: "content_you_see" };
            function T({ createLocalApiErrorHandler: e, displaySensitiveMediaEnabled: t, location: n, updateSettings: l, viewerUserScreenName: c }) {
                const g = (0, u.Z)(),
                    { featureSwitches: f } = a.useContext(o.rC),
                    h = f.isTrue("sensitive_media_settings_enabled");
                return void 0 !== c
                    ? a.createElement(
                          m.nO,
                          { namespace: D },
                          a.createElement(
                              d.Z,
                              null,
                              a.createElement(
                                  b.Z,
                                  { location: n, screenType: "secondaryDetail", title: w },
                                  a.createElement(s.Z, { description: Z }),
                                  h
                                      ? null
                                      : a.createElement(r.Z, {
                                            checked: t,
                                            label: k,
                                            name: "display_sensitive_media",
                                            onChange: function (t, n) {
                                                g.scribe({ ...D, element: t, action: n ? "enable" : "disable" }), l({ [t]: n }).catch(e({ showToast: !0 }));
                                            },
                                        }),
                                  a.createElement(i.Z, { label: S, link: `/${c}/topics` }),
                                  a.createElement(i.Z, { label: y, link: "/settings/your_twitter_data/twitter_interests" }),
                                  a.createElement(i.Z, { label: C, link: "/settings/explore" }),
                                  a.createElement(i.Z, { label: A, link: "/settings/search" }),
                                  h ? a.createElement(i.Z, { label: v, link: "/settings/sensitive_media" }) : null,
                                  a.createElement(p.i, { preferences: ["allow_for_you_recommendations"] }),
                              ),
                          ),
                      )
                    : null;
            }
            const F = E(T);
        },
        481444: (e, t, n) => {
            n.r(t), n.d(t, { default: () => S });
            n(571372);
            var a = n(202784),
                s = n(943401),
                r = n(101890),
                i = n(674132),
                l = n.n(i),
                c = n(443781),
                o = n(664918),
                d = n(652904),
                p = n(293115),
                m = n(620482),
                u = n(725405),
                b = n(264922);
            const g = l().d0b74a5a,
                f = l().bc20979a,
                h = l().d8817e36,
                _ = l().b9288ee6,
                E = l().ge06dadc,
                w = l().he20de3a,
                Z = [
                    { label: h, value: o.fD.AcceptAllCookies, helpText: E },
                    { label: _, value: o.fD.RefuseNonEssentialCookies, helpText: w },
                ],
                k = { page: "settings", section: "cookie_preferences" };
            function S(e) {
                const { location: t } = e,
                    n = (0, u.Z)(),
                    { cookiePreference: i, setCookiePreference: l } = (function () {
                        const { featureSwitches: e } = a.useContext(c.rC),
                            [t, n] = a.useState(() => {
                                const t = o.D0(e);
                                return [o.fD.NotSet, o.fD.Invalid].includes(t) ? o.fD.RefuseNonEssentialCookies : t;
                            });
                        return {
                            cookiePreference: t,
                            setCookiePreference(t) {
                                if (t === o.fD.AcceptAllCookies) o.jk(e), n(o.fD.AcceptAllCookies);
                                else {
                                    if (t !== o.fD.RefuseNonEssentialCookies) throw new Error("Invalid cookie preference");
                                    o.c$(e), n(o.fD.RefuseNonEssentialCookies);
                                }
                            },
                        };
                    })();
                return a.createElement(
                    p.nO,
                    { namespace: k },
                    a.createElement(
                        d.Z,
                        null,
                        a.createElement(
                            b.Z,
                            { location: t, screenType: "secondaryDetail", title: g },
                            a.createElement(s.Z, { description: f }),
                            a.createElement(r.Z, {
                                name: "cookie_preferences",
                                onChange: (e, t) => {
                                    n.scribe({ ...k, action: "change", element: t === o.fD.AcceptAllCookies ? "accept_all" : "refuse_non_essential" }), l(t), t === o.fD.RefuseNonEssentialCookies && (m.Z.flushHTMLCache(), window.location.reload());
                                },
                                options: Z,
                                value: i,
                            }),
                        ),
                    ),
                );
            }
        },
        661422: (e, t, n) => {
            n.r(t), n.d(t, { DataSharingWithBusinessPartners: () => S, default: () => y });
            var a = n(202784),
                s = n(688715),
                r = n(943401),
                i = n(954110),
                l = n(674132),
                c = n.n(l),
                o = n(652904),
                d = n(293115),
                p = n(725405),
                m = n(264922),
                u = n(71620),
                b = n(668214),
                g = n(205253);
            const f = (0, b.Z)()
                    .propsFromState(() => ({ settings: g.kQ }))
                    .adjustStateProps(({ settings: e }) => ({ allowPartnerships: e.allowPartnerships }))
                    .propsFromActions(() => ({ updateSettings: g.VP, createLocalApiErrorHandler: (0, u.zr)("DATA_SHARING_WITH_BUSINESS_PARTNERS_SCREEN") })),
                h = c().h14ba864,
                _ = c().eb0cc786,
                E = c().d3c20d80,
                w = c().f1c0d09c,
                Z = (0, s.ju)("https://support.x.com/articles/20175379"),
                k = { page: "settings", section: "data_sharing_with_business_partners" };
            function S(e) {
                const { allowPartnerships: t, createLocalApiErrorHandler: n, location: s, updateSettings: l } = e,
                    c = (0, p.Z)();
                return a.createElement(
                    d.nO,
                    { namespace: k },
                    a.createElement(
                        o.Z,
                        null,
                        a.createElement(
                            m.Z,
                            { location: s, screenType: "secondaryDetail", title: h },
                            a.createElement(r.Z, { description: _ }),
                            a.createElement(i.Z, {
                                checked: t,
                                helpText: w,
                                label: E,
                                learnMoreLink: Z,
                                name: "allowPartnerships",
                                onChange: function (e, t) {
                                    c.scribe({ ...k, element: e, action: t ? "enable" : "disable" }), l({ [e]: t }).catch(n({ showToast: !0 }));
                                },
                            }),
                        ),
                    ),
                );
            }
            const y = f(S);
        },
        847286: (e, t, n) => {
            n.r(t), n.d(t, { DirectMessages: () => z, allowDMsFromName: () => I, alwaysAllowMessageRequestsFromSubscribersLabel: () => T, default: () => O, dmFromAnyoneLabel: () => A, dmFromPeopleYouFollowLabel: () => y, dmFromVerifiedLabel: () => C, dmGraphicMediaLabel: () => L, dmQualityFilterLabel: () => v, dmReceiptsLabel: () => M });
            var a = n(202784),
                s = n(731708),
                r = n(688715),
                i = n(101890),
                l = n(661810),
                c = n(954110),
                o = n(779610),
                d = n(674132),
                p = n.n(d),
                m = n(443781),
                u = n(652904),
                b = n(952793),
                g = n(293115),
                f = n(725405),
                h = n(264922),
                _ = n(71620),
                E = n(668214),
                w = n(38562),
                Z = n(919022);
            const k = (0, E.Z)()
                    .propsFromState(() => ({ nsfwMediaFilter: w.a5, settings: w.l4, loggedInUser: Z.ZP.selectLoggedInUser }))
                    .adjustStateProps(({ loggedInUser: e, nsfwMediaFilter: t, settings: n }) => ({ allowDmsFrom: n.allow_dms_from, alwaysAllowDmsFromSubscribers: n.always_allow_dms_from_subscribers, dmQualityFilter: n.dm_quality_filter, dmReceiptSetting: n.dm_receipt_setting, nsfwMediaFilter: t, loggedInUser: e }))
                    .propsFromActions(() => ({ updateSettings: w.VP, updateDmNsfwMediaFilter: w.Ob, createLocalApiErrorHandler: (0, _.zr)("DIRECT_MESSAGES_SCREEN") }))
                    .withAnalytics({ page: "settings" }),
                S = p().d4986f86,
                y = p().ee4592ca,
                C = p().da813d22,
                A = p().baffe39a,
                v = p().b3d8566e,
                D = p().cfda8c44,
                T = p().f4c91f40,
                F = p().bf0c4336,
                L = p().e6c411d8,
                P = p().g558101a,
                x = p().c9bc33fa,
                M = p().d9172542,
                N = p().bd557506,
                I = "allow_dms_from",
                R = { page: "settings", section: "direct_messages" },
                $ = p().f29080d0,
                j = a.createElement(s.ZP, { link: (0, r.ju)("https://help.x.com/using-twitter/direct-messages#receive"), size: "subtext1", style: { whiteSpace: "nowrap" } }),
                U = a.createElement(p().I18NFormatMessage, { $i18n: "aa1b5fdd" }, a.cloneElement(j, null, p().j0adcc2d)),
                H = [
                    { label: y, value: "following" },
                    { label: C, value: "verified" },
                    { label: A, value: "all" },
                ];
            function z(e) {
                const { allowDmsFrom: t, alwaysAllowDmsFromSubscribers: n, createLocalApiErrorHandler: s, dmQualityFilter: d, dmReceiptSetting: p, location: _, loggedInUser: E, nsfwMediaFilter: w, updateDmNsfwMediaFilter: Z, updateSettings: k } = e,
                    y = (0, f.Z)(),
                    { featureSwitches: C } = a.useContext(m.rC),
                    A = (0, b.hC)("dm_settings_info_page_allow_subscriber_messages_setting_enabled"),
                    j = E?.super_follow_eligible,
                    z = (0, b.hC)("dm_settings_info_page_device_list_enabled");
                function O(t, n) {
                    const a = "/messages/settings" === e.location.pathname ? "dm_tab" : "global_settings_menu";
                    y.scribe({ ...R, element: t, data: { entry_point: a }, action: n }), k({ [t]: n }).catch(s({ showToast: !0 }));
                }
                const B = C.isTrue("dm_conversations_nsfw_media_filter_enabled");
                return a.createElement(
                    g.nO,
                    { namespace: R },
                    a.createElement(
                        u.Z,
                        null,
                        a.createElement(
                            h.Z,
                            { location: _, screenType: "secondaryDetail", title: S },
                            a.createElement(
                                a.Fragment,
                                null,
                                a.createElement(i.Z, {
                                    description: U,
                                    label: $,
                                    name: I,
                                    onChange: function (e, t) {
                                        O(I, t);
                                    },
                                    options: H,
                                    value: t,
                                }),
                                a.createElement(l.Z, { space: "space4" }),
                            ),
                            A && j
                                ? a.createElement(c.Z, {
                                      checked: n,
                                      disabled: "all" === t,
                                      helpText: F,
                                      label: T,
                                      learnMoreLink: (0, r.ju)("https://help.x.com/using-twitter/direct-messages"),
                                      name: "always_allow_dms_from_subscribers",
                                      onChange: function (e, t) {
                                          y.scribe({ ...R, element: e, action: t ? "enabled" : "disabled" }), k({ [e]: t }).catch(s({ showToast: !0 }));
                                      },
                                  })
                                : a.createElement(a.Fragment, null),
                            a.createElement(c.Z, {
                                checked: "enabled" === d,
                                disabled: "following" === t,
                                helpText: D,
                                label: v,
                                learnMoreLink: (0, r.ju)("https://help.x.com/using-twitter/direct-messages"),
                                name: "dm_quality_filter",
                                onChange: function (e, t) {
                                    O(e, t ? "enabled" : "disabled");
                                },
                            }),
                            B
                                ? a.createElement(c.Z, {
                                      checked: w,
                                      helpText: P,
                                      label: L,
                                      learnMoreLink: (0, r.ju)("https://help.x.com/using-twitter/direct-messages#graphic-media"),
                                      name: "ext_dm_nsfw_media_filter",
                                      onChange: function (e, t) {
                                          y.scribe({ ...R, element: "dm_nsfw_filter_setting", action: t ? "enable" : "disable" }), Z(t);
                                      },
                                  })
                                : null,
                            a.createElement(c.Z, {
                                checked: "all_enabled" === p,
                                helpText: N,
                                label: M,
                                learnMoreLink: (0, r.ju)("https://help.x.com/using-twitter/direct-messages#receipts"),
                                name: "dm_receipt_setting",
                                onChange: function (e, t) {
                                    O(e, t ? "all_enabled" : "all_disabled");
                                },
                            }),
                            z ? a.createElement(a.Fragment, null, a.createElement(l.Z, { space: "space4" }), a.createElement(o.Z, { label: x, link: "/settings/direct_messages/devices" }), a.createElement(l.Z, { space: "space4" })) : null,
                        ),
                    ),
                );
            }
            const O = k(z);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-ec129bee.448f64ca.js.map
