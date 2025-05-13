"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-4e00201e"],
    {
        158002: (e, t, n) => {
            n.r(t), n.d(t, { default: () => P });
            var a = n(807896),
                s = n(202784),
                l = n(325686),
                i = n(943401),
                r = n(674132),
                c = n.n(r),
                o = n(516330),
                d = n(254944),
                p = n(14284),
                m = n(53674),
                u = n(689107),
                f = n(534763),
                g = n(652904),
                b = n(293115),
                h = n(264922);
            const _ = { accessibilityScreen: "accessibilityScreen" },
                E = c().f2b23062,
                w = c().fa76d7dc,
                Z = c().e3719c16,
                S = c().j7a15010,
                k = c().c4881c66,
                y = c().a257ecae,
                C = c().d495680e,
                A = c().jc3fa0e2,
                v = c().eafe3288,
                D = c().cc2973a8,
                T = c().h54e6138,
                F = [
                    { label: Z, description: S, link: "/settings/accessibility", Icon: o.default },
                    { label: k, description: y, link: "/settings/display", Icon: d.default },
                    { label: C, description: A, link: "/settings/languages", Icon: p.default },
                    { label: v, description: D, link: "/settings/data", Icon: m.default },
                    { label: T, link: "/i/keyboard_shortcuts", Icon: u.default },
                ],
                L = { page: "settings", section: "accessibility_display_and_languages" };
            function P(e) {
                const { location: t } = e;
                return s.createElement(
                    b.nO,
                    { namespace: L },
                    s.createElement(
                        g.Z,
                        null,
                        s.createElement(
                            h.Z,
                            { location: t, screenType: "primaryDetail", title: E },
                            s.createElement(
                                l.Z,
                                { testID: _.accessibilityScreen },
                                s.createElement(i.Z, { description: w }),
                                F.map((e) => s.createElement(f.H, (0, a.Z)({}, e, { key: e.label }))),
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
                l = n(954110),
                i = n(688715),
                r = n(779610),
                c = n(674132),
                o = n.n(c),
                d = n(873372),
                p = n(652904),
                m = n(293115),
                u = n(725405),
                f = n(264922),
                g = n(71620),
                b = n(668214),
                h = n(205253);
            const _ = (0, b.Z)()
                    .propsFromState(() => ({ settings: h.kQ }))
                    .adjustStateProps(({ settings: e }) => ({ allowPersonalizationEnabled: e.allowPersonalization }))
                    .propsFromActions(() => ({ updateSettings: h.VP, createLocalApiErrorHandler: (0, g.zr)("ADS_PREFERENCES_SCREEN") })),
                E = o().d035a8d0,
                w = o().e338a794,
                Z = o().ib3357a6,
                S = o().f2f9628e,
                k = o().h1f01a24,
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
                            f.Z,
                            { location: c, screenType: "secondaryDetail", title: E },
                            a.createElement(s.Z, { description: w }),
                            a.createElement(l.Z, {
                                checked: t,
                                helpText: S,
                                label: Z,
                                learnMoreLink: (0, i.ju)("https://support.x.com/articles/20170405"),
                                name: "allowPersonalization",
                                onChange: function (e, t) {
                                    g.scribe({ ...C, element: e, action: t ? "enable" : "disable" }), o({ [e]: t }).catch(n());
                                },
                            }),
                            a.createElement(d.Z, null),
                            a.createElement(r.Z, { label: k, link: "/settings/your_twitter_data/twitter_interests" }),
                            a.createElement(r.Z, { label: y, link: "/settings/your_twitter_data/audiences" }),
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
                l = n(943401),
                i = n(779610),
                r = n(674132),
                c = n.n(r),
                o = n(652904),
                d = n(293115),
                p = n(264922);
            const m = { appsAndSessionsScreen: "appsAndSessionsScreen", connectedAppsLink: "connectedAppsLink" },
                u = c().ae72d4c4,
                f = c().g2841de4,
                g = c().jc02ae68,
                b = c().dd82312a,
                h = c().b523ecc6,
                _ = c().hc36dbba,
                E = { page: "settings", section: "apps_and_sessions" };
            function w(e) {
                const { location: t } = e;
                return a.createElement(d.nO, { namespace: E }, a.createElement(o.Z, null, a.createElement(p.Z, { location: t, screenType: "secondaryDetail", title: u }, a.createElement(s.Z, { testID: m.appsAndSessionsScreen }, a.createElement(l.Z, { description: f }), a.createElement(i.Z, { label: g, link: "/settings/connected_apps", testID: m.connectedAppsLink }), a.createElement(i.Z, { label: b, link: "/settings/sessions" }), a.createElement(i.Z, { label: h, link: "/settings/your_twitter_data/login_history" }), a.createElement(i.Z, { label: _, link: "/settings/your_twitter_data/devices" })))));
            }
        },
        5058: (e, t, n) => {
            n.r(t), n.d(t, { AudienceAndTagging: () => z, default: () => q });
            var a = n(767758),
                s = n(251985),
                l = n(202784),
                i = (n(585488), n(712696)),
                r = n.n(i),
                c = n(351743),
                o = n.n(c),
                d = n(943401),
                p = n(954110),
                m = n(688715),
                u = n(779610),
                f = n(190286),
                g = n(674132),
                b = n.n(g),
                h = n(443781),
                _ = n(652904),
                E = n(293115),
                w = n(725405),
                Z = n(111531),
                S = n(264922),
                k = n(71620),
                y = n(668214),
                C = n(172497),
                A = n(38562),
                v = n(919022);
            const D = (0, y.Z)()
                    .propsFromState(() => ({ settings: A.l4, hasCommunityMemberships: C.fn }))
                    .adjustStateProps(({ hasCommunityMemberships: e, settings: t }) => ({ protectedEnabled: t.protected, allowMediaTagging: t.allow_media_tagging, hasCommunityMemberships: e }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, k.zr)("AUDIENCE_AND_TAGGING_SCREEN"), patchUser: v.ZP.patchUser, updateSettings: A.VP })),
                T = b().fd807e78,
                F = b().a9ff473c,
                L = b().b5c85d2c,
                P = b().d8492604,
                x = b().if050fae,
                M = b().b7ed5f6e,
                N = { headline: b().dbb51952, text: b().de735de6, confirmButtonLabel: b().c5d4192a },
                I = { headline: b().gea6cc1a, text: b().d9ddba70, confirmButtonLabel: b().f527b322 },
                R = b().f56d108e,
                j = { all: b().d165c992, following: b().ea339390, none: b().e3a761ee },
                U = { page: "settings", section: "audience_and_tagging" };
            function H(e, t, n, a) {
                const [s, i] = l.useState(!1),
                    r = (function (e, t, n, a) {
                        const { viewerUserId: s } = l.useContext(h.rC),
                            i = (0, w.Z)();
                        return {
                            setEnabled(t) {
                                a({ protected: t })
                                    .then(() => {
                                        i.scribe({ ...U, element: "protected", action: t ? "enable" : "disable" }), s && n(s, { protected: t });
                                    })
                                    .catch(e());
                            },
                        };
                    })(e, 0, n, a);
                return {
                    showConfirmation: s,
                    _handleChanged(e, t) {
                        t ? i(!0) : r.setEnabled(!1);
                    },
                    _handleConfirmationCancel() {
                        i(!1);
                    },
                    _handleConfirmationConfirm() {
                        i(!1), r.setEnabled(!0);
                    },
                };
            }
            function z(e) {
                const { allowMediaTagging: t, createLocalApiErrorHandler: n, hasCommunityMemberships: a, location: s, patchUser: i, protectedEnabled: r, updateSettings: c } = e,
                    o = H(n, 0, i, c),
                    g = j[t],
                    b = a ? I : N;
                return l.createElement(E.nO, { namespace: U }, l.createElement(_.Z, null, l.createElement(S.Z, { location: s, screenType: "secondaryDetail", title: T }, l.createElement(d.Z, { description: F }), l.createElement(p.Z, { checked: r, helpText: P, label: L, learnMoreLink: (0, m.ju)("https://help.x.com/safety-and-security/public-and-protected-tweets"), name: "protected", onChange: o._handleChanged }), l.createElement(B, null), l.createElement(u.Z, { description: g, label: R, link: "/settings/tagging" })), o.showConfirmation ? l.createElement(f.Z, { confirmButtonLabel: b.confirmButtonLabel, confirmButtonType: "primary", headline: b.headline, onCancel: o._handleConfirmationCancel, onConfirm: o._handleConfirmationConfirm, text: b.text }) : null));
            }
            const O = s.Z,
                V = a.Z;
            function B() {
                const {
                        user_preferences: { __id: e, allow_video_downloads: t },
                        viewer: n,
                    } = r()(O, {}),
                    [a] = o()(V),
                    s = l.useCallback(
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
                return l.createElement(p.Z, { checked: i, helpText: M, label: x, learnMoreLink: (0, m.ju)("https://help.x.com/using-twitter/twitter-videos"), name: "protected_videos", onChange: s });
            }
            const q = D(z);
        },
        413940: (e, t, n) => {
            n.r(t), n.d(t, { ApplicationsScreen: () => P, default: () => M });
            var a = n(202784),
                s = n(325686),
                l = n(688715),
                i = n(943401),
                r = n(731708),
                c = n(457311),
                o = n(779610),
                d = n(992942),
                p = n(392237),
                m = n(674132),
                u = n.n(m),
                f = n(290402),
                g = n(652904),
                b = n(293115),
                h = n(264922),
                _ = n(71620),
                E = n(668214),
                w = n(948985),
                Z = n(312771);
            const S = (e, t) => (0, Z.h1)(w.UD(e)),
                k = (0, E.Z)()
                    .propsFromState(() => ({ fetchStatus: S, applications: w.$q.selectUniqUnrevokedApps }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("APPLICATIONS"), fetchApplications: w.wz })),
                y = "connectedAppsScreen",
                C = u().jc02ae68,
                A = u().e5e8a89a,
                v = u().hfa9a2c8,
                D = u().dd1b86f9,
                T = u().cf461930,
                F = (0, l.ju)("https://help.x.com/managing-your-account/connect-or-revoke-access-to-third-party-apps"),
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
                                a.createElement(i.Z, { description: a.createElement(u().I18NFormatMessage, { $i18n: "hcecd237" }, a.createElement(r.ZP, { link: F }, u().b63b0b1d)) }),
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
                    return a.createElement(b.nO, { namespace: L }, a.createElement(g.Z, null, a.createElement(h.Z, { location: t, title: C }, a.createElement(s.Z, { testID: y }, a.createElement(f.Z, { "aria-label": A, fetchStatus: e, onRequestRetry: this._handleRetry, render: this._render })))));
                }
            }
            P.defaultProps = { applications: [] };
            const x = p.default.create((e) => ({ avatar: { borderRadius: e.borderRadii.small, height: "100%", width: "100%" } })),
                M = k(P);
        },
        720823: (e, t, n) => {
            n.r(t), n.d(t, { ContentYouSee: () => T, default: () => F });
            var a = n(202784),
                s = n(943401),
                l = n(954110),
                i = n(779610),
                r = n(674132),
                c = n.n(r),
                o = n(443781),
                d = n(652904),
                p = n(440630),
                m = n(293115),
                u = n(725405),
                f = n(264922),
                g = n(71620),
                b = n(668214),
                h = n(38562),
                _ = n(919022);
            const E = (0, b.Z)()
                    .propsFromState(() => ({ settings: h.l4, viewerUser: _.ZP.selectViewerUser }))
                    .adjustStateProps(({ settings: e, viewerUser: t }) => ({ displaySensitiveMediaEnabled: e.display_sensitive_media, viewerUserScreenName: t?.screen_name }))
                    .propsFromActions(() => ({ updateSettings: h.VP, createLocalApiErrorHandler: (0, g.zr)("CONTENT_YOU_SEE_SCREEN") })),
                w = c().f2bd9c48,
                Z = c().c4afe0e6,
                S = c().fc1d217c,
                k = c().b8533bac,
                y = c().h1f01a24,
                C = c().j018f2a2,
                A = c().h1ef00dc,
                v = c().h9f2da68,
                D = { page: "settings", section: "content_you_see" };
            function T({ createLocalApiErrorHandler: e, displaySensitiveMediaEnabled: t, location: n, updateSettings: r, viewerUserScreenName: c }) {
                const g = (0, u.Z)(),
                    { featureSwitches: b } = a.useContext(o.rC),
                    h = b.isTrue("sensitive_media_settings_enabled");
                return void 0 !== c
                    ? a.createElement(
                          m.nO,
                          { namespace: D },
                          a.createElement(
                              d.Z,
                              null,
                              a.createElement(
                                  f.Z,
                                  { location: n, screenType: "secondaryDetail", title: w },
                                  a.createElement(s.Z, { description: Z }),
                                  h
                                      ? null
                                      : a.createElement(l.Z, {
                                            checked: t,
                                            label: S,
                                            name: "display_sensitive_media",
                                            onChange: function (t, n) {
                                                g.scribe({ ...D, element: t, action: n ? "enable" : "disable" }), r({ [t]: n }).catch(e({ showToast: !0 }));
                                            },
                                        }),
                                  a.createElement(i.Z, { label: k, link: `/${c}/topics` }),
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
            n.r(t), n.d(t, { default: () => k });
            n(571372);
            var a = n(202784),
                s = n(943401),
                l = n(101890),
                i = n(674132),
                r = n.n(i),
                c = n(443781),
                o = n(664918),
                d = n(652904),
                p = n(293115),
                m = n(620482),
                u = n(725405),
                f = n(264922);
            const g = r().d0b74a5a,
                b = r().bc20979a,
                h = r().d8817e36,
                _ = r().b9288ee6,
                E = r().ge06dadc,
                w = r().he20de3a,
                Z = [
                    { label: h, value: o.fD.AcceptAllCookies, helpText: E },
                    { label: _, value: o.fD.RefuseNonEssentialCookies, helpText: w },
                ],
                S = { page: "settings", section: "cookie_preferences" };
            function k(e) {
                const { location: t } = e,
                    n = (0, u.Z)(),
                    { cookiePreference: i, setCookiePreference: r } = (function () {
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
                    { namespace: S },
                    a.createElement(
                        d.Z,
                        null,
                        a.createElement(
                            f.Z,
                            { location: t, screenType: "secondaryDetail", title: g },
                            a.createElement(s.Z, { description: b }),
                            a.createElement(l.Z, {
                                name: "cookie_preferences",
                                onChange: (e, t) => {
                                    n.scribe({ ...S, action: "change", element: t === o.fD.AcceptAllCookies ? "accept_all" : "refuse_non_essential" }), r(t), t === o.fD.RefuseNonEssentialCookies && (m.Z.flushHTMLCache(), window.location.reload());
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
            n.r(t), n.d(t, { DataSharingWithBusinessPartners: () => k, default: () => y });
            var a = n(202784),
                s = n(688715),
                l = n(943401),
                i = n(954110),
                r = n(674132),
                c = n.n(r),
                o = n(652904),
                d = n(293115),
                p = n(725405),
                m = n(264922),
                u = n(71620),
                f = n(668214),
                g = n(205253);
            const b = (0, f.Z)()
                    .propsFromState(() => ({ settings: g.kQ }))
                    .adjustStateProps(({ settings: e }) => ({ allowPartnerships: e.allowPartnerships }))
                    .propsFromActions(() => ({ updateSettings: g.VP, createLocalApiErrorHandler: (0, u.zr)("DATA_SHARING_WITH_BUSINESS_PARTNERS_SCREEN") })),
                h = c().h14ba864,
                _ = c().eb0cc786,
                E = c().d3c20d80,
                w = c().f1c0d09c,
                Z = (0, s.ju)("https://support.x.com/articles/20175379"),
                S = { page: "settings", section: "data_sharing_with_business_partners" };
            function k(e) {
                const { allowPartnerships: t, createLocalApiErrorHandler: n, location: s, updateSettings: r } = e,
                    c = (0, p.Z)();
                return a.createElement(
                    d.nO,
                    { namespace: S },
                    a.createElement(
                        o.Z,
                        null,
                        a.createElement(
                            m.Z,
                            { location: s, screenType: "secondaryDetail", title: h },
                            a.createElement(l.Z, { description: _ }),
                            a.createElement(i.Z, {
                                checked: t,
                                helpText: w,
                                label: E,
                                learnMoreLink: Z,
                                name: "allowPartnerships",
                                onChange: function (e, t) {
                                    c.scribe({ ...S, element: e, action: t ? "enable" : "disable" }), r({ [e]: t }).catch(n({ showToast: !0 }));
                                },
                            }),
                        ),
                    ),
                );
            }
            const y = b(k);
        },
        847286: (e, t, n) => {
            n.r(t), n.d(t, { DirectMessages: () => O, allowDMsFromName: () => I, alwaysAllowMessageRequestsFromSubscribersLabel: () => T, default: () => V, dmFromAnyoneLabel: () => A, dmFromPeopleYouFollowLabel: () => y, dmFromVerifiedLabel: () => C, dmGraphicMediaLabel: () => L, dmQualityFilterLabel: () => v, dmReceiptsLabel: () => M });
            var a = n(202784),
                s = n(731708),
                l = n(688715),
                i = n(101890),
                r = n(661810),
                c = n(954110),
                o = n(779610),
                d = n(674132),
                p = n.n(d),
                m = n(443781),
                u = n(652904),
                f = n(952793),
                g = n(293115),
                b = n(725405),
                h = n(264922),
                _ = n(71620),
                E = n(668214),
                w = n(38562),
                Z = n(919022);
            const S = (0, E.Z)()
                    .propsFromState(() => ({ nsfwMediaFilter: w.a5, settings: w.l4, loggedInUser: Z.ZP.selectLoggedInUser }))
                    .adjustStateProps(({ loggedInUser: e, nsfwMediaFilter: t, settings: n }) => ({ allowDmsFrom: n.allow_dms_from, alwaysAllowDmsFromSubscribers: n.always_allow_dms_from_subscribers, dmQualityFilter: n.dm_quality_filter, dmReceiptSetting: n.dm_receipt_setting, nsfwMediaFilter: t, loggedInUser: e }))
                    .propsFromActions(() => ({ updateSettings: w.VP, updateDmNsfwMediaFilter: w.Ob, createLocalApiErrorHandler: (0, _.zr)("DIRECT_MESSAGES_SCREEN") }))
                    .withAnalytics({ page: "settings" }),
                k = p().d4986f86,
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
                j = p().f29080d0,
                U = a.createElement(s.ZP, { link: (0, l.ju)("https://help.x.com/using-twitter/direct-messages#receive"), size: "subtext1", style: { whiteSpace: "nowrap" } }),
                H = a.createElement(p().I18NFormatMessage, { $i18n: "aa1b5fdd" }, a.cloneElement(U, null, p().j0adcc2d)),
                z = [
                    { label: y, value: "following" },
                    { label: C, value: "verified" },
                    { label: A, value: "all" },
                ];
            function O(e) {
                const { allowDmsFrom: t, alwaysAllowDmsFromSubscribers: n, createLocalApiErrorHandler: s, dmQualityFilter: d, dmReceiptSetting: p, location: _, loggedInUser: E, nsfwMediaFilter: w, updateDmNsfwMediaFilter: Z, updateSettings: S } = e,
                    y = (0, b.Z)(),
                    { featureSwitches: C } = a.useContext(m.rC),
                    A = (0, f.hC)("dm_settings_info_page_allow_subscriber_messages_setting_enabled"),
                    U = E?.super_follow_eligible,
                    O = (0, f.hC)("dm_settings_info_page_device_list_enabled");
                function V(t, n) {
                    const a = "/messages/settings" === e.location.pathname ? "dm_tab" : "global_settings_menu";
                    y.scribe({ ...R, element: t, data: { entry_point: a }, action: n }), S({ [t]: n }).catch(s({ showToast: !0 }));
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
                            { location: _, screenType: "secondaryDetail", title: k },
                            a.createElement(
                                a.Fragment,
                                null,
                                a.createElement(i.Z, {
                                    description: H,
                                    label: j,
                                    name: I,
                                    onChange: function (e, t) {
                                        V(I, t);
                                    },
                                    options: z,
                                    value: t,
                                }),
                                a.createElement(r.Z, { space: "space4" }),
                            ),
                            A && U
                                ? a.createElement(c.Z, {
                                      checked: n,
                                      disabled: "all" === t,
                                      helpText: F,
                                      label: T,
                                      learnMoreLink: (0, l.ju)("https://help.x.com/using-twitter/direct-messages"),
                                      name: "always_allow_dms_from_subscribers",
                                      onChange: function (e, t) {
                                          y.scribe({ ...R, element: e, action: t ? "enabled" : "disabled" }), S({ [e]: t }).catch(s({ showToast: !0 }));
                                      },
                                  })
                                : a.createElement(a.Fragment, null),
                            a.createElement(c.Z, {
                                checked: "enabled" === d,
                                disabled: "following" === t,
                                helpText: D,
                                label: v,
                                learnMoreLink: (0, l.ju)("https://help.x.com/using-twitter/direct-messages"),
                                name: "dm_quality_filter",
                                onChange: function (e, t) {
                                    V(e, t ? "enabled" : "disabled");
                                },
                            }),
                            B
                                ? a.createElement(c.Z, {
                                      checked: w,
                                      helpText: P,
                                      label: L,
                                      learnMoreLink: (0, l.ju)("https://help.x.com/using-twitter/direct-messages#graphic-media"),
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
                                learnMoreLink: (0, l.ju)("https://help.x.com/using-twitter/direct-messages#receipts"),
                                name: "dm_receipt_setting",
                                onChange: function (e, t) {
                                    V(e, t ? "all_enabled" : "all_disabled");
                                },
                            }),
                            O ? a.createElement(a.Fragment, null, a.createElement(r.Z, { space: "space4" }), a.createElement(o.Z, { label: x, link: "/settings/direct_messages/devices" }), a.createElement(r.Z, { space: "space4" })) : null,
                        ),
                    ),
                );
            }
            const V = S(O);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-4e00201e.0a7e666a.js.map
