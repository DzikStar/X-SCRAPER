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
        336629: (e, t, n) => {
            n.d(t, { T: () => r });
            var a = n(97882),
                s = n(685731);
            const r = ({ annualPriceMonthly: e, includeTax: t, monthlyPriceAnnual: n, percentOff: r, price: i }) => {
                const l = (0, s.aU)(i, t, r),
                    c = e ? l / 12 : n ? 12 * l : l;
                return (0, a.x)({ amount: c, currencyCode: i?.currency_code.toUpperCase(), removeTrailingZeros: !0 });
            };
        },
        862695: (e, t, n) => {
            n.d(t, { V: () => _, f: () => h });
            var a = n(202784),
                s = n(325686),
                r = n(731708),
                i = n(392237),
                l = n(332920),
                c = n.n(l),
                o = n(336629);
            const d = c().i57aeafb,
                p = c().ae3e3723,
                m = c().ade4c757,
                u = c().f7798e11,
                b = c().e0b39888,
                f = c().b67c37de,
                g = c().a8363765,
                h = ({ activeDiscountInfo: e, discountInfo: t, formattedPrice: n, includeTax: a, isFreeTrial: s, isTierSwitching: r, price: i, selectedInterval: l, shouldRemoveExtraStep: c, withAnnualPriceMonthly: d }) => (s ? ("Month" === l ? m({ price: n }) : u({ price: n })) : t || e ? _({ formattedPrice: n, selectedInterval: l, includeDiscountedPrice: "Year" === l && d, discountedFormattedPrice: (0, o.T)({ price: i, includeTax: a, percentOff: r ? e?.promotion_metadata?.percent_off : t?.metadata.percent_off, annualPriceMonthly: !1 }), duration: r ? e?.promotion_metadata?.duration_in_interval : t?.metadata.duration_in_interval, includeThenLabel: !1 }) : d && "Year" === l && c ? g({ price: n }) : "Month" === l ? b : f),
                _ = ({ discountedFormattedPrice: e, duration: t, formattedPrice: n, includeDiscountedPrice: i, includeThenLabel: l, selectedInterval: o }) => {
                    let b;
                    return (b = "Month" === o ? (i ? a.createElement(c().I18NFormatMessage, { $i18n: "a629c16f", discountedPrice: e ?? "", duration: t ?? "" }, a.createElement(r.ZP, { style: { textDecorationLine: "line-through" } }, c().df3ed1c8({ standardPrice: n }))) : d({ duration: t, standardPrice: n })) : i ? a.createElement(c().I18NFormatMessage, { $i18n: "c142e70f", discountedPrice: e ?? "", duration: t ?? "" }, a.createElement(r.ZP, { style: { textDecorationLine: "line-through" } }, c().g261b098({ standardPrice: n }))) : p({ duration: t, standardPrice: n })), l && (b = a.createElement(s.Z, null, a.createElement(r.ZP, { style: E.marginBottom }, b), a.createElement(r.ZP, null, "Year" === o ? u({ price: n }) : m({ price: n })))), b;
                },
                E = i.default.create((e) => ({ marginBottom: { marginBottom: e.spaces.space8 } }));
        },
        275158: (e, t, n) => {
            n.d(t, { _r: () => l, d9: () => s, gV: () => i, iG: () => r });
            const a = `https://${window.location.host}`,
                s = `${a}/settings/subscription`,
                r = "/i/premium_sign_up",
                i = `${a}${r}`,
                l = `${i}/successful`;
        },
        158002: (e, t, n) => {
            n.r(t), n.d(t, { default: () => L });
            var a = n(807896),
                s = n(202784),
                r = n(325686),
                i = n(943401),
                l = n(332920),
                c = n.n(l),
                o = n(516330),
                d = n(254944),
                p = n(14284),
                m = n(53674),
                u = n(689107),
                b = n(534763),
                f = n(652904),
                g = n(293115),
                h = n(264922);
            const _ = { accessibilityScreen: "accessibilityScreen" },
                E = c().f2b23062,
                w = c().fa76d7dc,
                Z = c().e3719c16,
                y = c().j7a15010,
                k = c().c4881c66,
                S = c().a257ecae,
                C = c().d495680e,
                v = c().jc3fa0e2,
                A = c().eafe3288,
                P = c().cc2973a8,
                T = c().h54e6138,
                D = [
                    { label: Z, description: y, link: "/settings/accessibility", Icon: o.default },
                    { label: k, description: S, link: "/settings/display", Icon: d.default },
                    { label: C, description: v, link: "/settings/languages", Icon: p.default },
                    { label: A, description: P, link: "/settings/data", Icon: m.default },
                    { label: T, link: "/i/keyboard_shortcuts", Icon: u.default },
                ],
                F = { page: "settings", section: "accessibility_display_and_languages" };
            function L(e) {
                const { location: t } = e;
                return s.createElement(
                    g.nO,
                    { namespace: F },
                    s.createElement(
                        f.Z,
                        null,
                        s.createElement(
                            h.Z,
                            { location: t, screenType: "primaryDetail", title: E },
                            s.createElement(
                                r.Z,
                                { testID: _.accessibilityScreen },
                                s.createElement(i.Z, { description: w }),
                                D.map((e) => s.createElement(b.H, (0, a.Z)({}, e, { key: e.label }))),
                            ),
                        ),
                    ),
                );
            }
        },
        503266: (e, t, n) => {
            n.r(t), n.d(t, { AdsPreferences: () => v, default: () => A });
            var a = n(202784),
                s = n(943401),
                r = n(954110),
                i = n(688715),
                l = n(779610),
                c = n(332920),
                o = n.n(c),
                d = n(873372),
                p = n(652904),
                m = n(293115),
                u = n(725405),
                b = n(264922),
                f = n(71620),
                g = n(668214),
                h = n(205253);
            const _ = (0, g.Z)()
                    .propsFromState(() => ({ settings: h.kQ }))
                    .adjustStateProps(({ settings: e }) => ({ allowPersonalizationEnabled: e.allowPersonalization }))
                    .propsFromActions(() => ({ updateSettings: h.VP, createLocalApiErrorHandler: (0, f.zr)("ADS_PREFERENCES_SCREEN") })),
                E = o().d035a8d0,
                w = o().e338a794,
                Z = o().ib3357a6,
                y = o().f2f9628e,
                k = o().h1f01a24,
                S = o().da202f9a,
                C = { page: "settings", section: "ads_preferences" };
            function v(e) {
                const { allowPersonalizationEnabled: t, createLocalApiErrorHandler: n, location: c, updateSettings: o } = e,
                    f = (0, u.Z)();
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
                                helpText: y,
                                label: Z,
                                learnMoreLink: (0, i.ju)("https://support.x.com/articles/20170405"),
                                name: "allowPersonalization",
                                onChange: function (e, t) {
                                    f.scribe({ ...C, element: e, action: t ? "enable" : "disable" }), o({ [e]: t }).catch(n());
                                },
                            }),
                            a.createElement(d.Z, null),
                            a.createElement(l.Z, { label: k, link: "/settings/your_twitter_data/twitter_interests" }),
                            a.createElement(l.Z, { label: S, link: "/settings/your_twitter_data/audiences" }),
                        ),
                    ),
                );
            }
            const A = _(v);
        },
        379591: (e, t, n) => {
            n.r(t), n.d(t, { default: () => w });
            var a = n(202784),
                s = n(325686),
                r = n(943401),
                i = n(779610),
                l = n(332920),
                c = n.n(l),
                o = n(652904),
                d = n(293115),
                p = n(264922);
            const m = { appsAndSessionsScreen: "appsAndSessionsScreen", connectedAppsLink: "connectedAppsLink" },
                u = c().ae72d4c4,
                b = c().g2841de4,
                f = c().jc02ae68,
                g = c().dd82312a,
                h = c().b523ecc6,
                _ = c().hc36dbba,
                E = { page: "settings", section: "apps_and_sessions" };
            function w(e) {
                const { location: t } = e;
                return a.createElement(d.nO, { namespace: E }, a.createElement(o.Z, null, a.createElement(p.Z, { location: t, screenType: "secondaryDetail", title: u }, a.createElement(s.Z, { testID: m.appsAndSessionsScreen }, a.createElement(r.Z, { description: b }), a.createElement(i.Z, { label: f, link: "/settings/connected_apps", testID: m.connectedAppsLink }), a.createElement(i.Z, { label: g, link: "/settings/sessions" }), a.createElement(i.Z, { label: h, link: "/settings/your_twitter_data/login_history" }), a.createElement(i.Z, { label: _, link: "/settings/your_twitter_data/devices" })))));
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
                f = n(332920),
                g = n.n(f),
                h = n(443781),
                _ = n(652904),
                E = n(293115),
                w = n(725405),
                Z = n(111531),
                y = n(264922),
                k = n(71620),
                S = n(668214),
                C = n(172497),
                v = n(38562),
                A = n(919022);
            const P = (0, S.Z)()
                    .propsFromState(() => ({ settings: v.l4, hasCommunityMemberships: C.fn }))
                    .adjustStateProps(({ hasCommunityMemberships: e, settings: t }) => ({ protectedEnabled: t.protected, allowMediaTagging: t.allow_media_tagging, hasCommunityMemberships: e }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, k.zr)("AUDIENCE_AND_TAGGING_SCREEN"), patchUser: A.ZP.patchUser, updateSettings: v.VP })),
                T = g().fd807e78,
                D = g().a9ff473c,
                F = g().b5c85d2c,
                L = g().d8492604,
                x = g().if050fae,
                M = g().b7ed5f6e,
                I = { headline: g().dbb51952, text: g().de735de6, confirmButtonLabel: g().c5d4192a },
                $ = { headline: g().gea6cc1a, text: g().d9ddba70, confirmButtonLabel: g().f527b322 },
                N = g().f56d108e,
                R = { all: g().d165c992, following: g().ea339390, none: g().e3a761ee },
                U = { page: "settings", section: "audience_and_tagging" };
            function j(e, t, n, a) {
                const [s, i] = r.useState(!1),
                    l = (function (e, t, n, a) {
                        const { viewerUserId: s } = r.useContext(h.rC),
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
                    o = j(n, 0, i, c),
                    f = R[t],
                    g = a ? $ : I;
                return r.createElement(E.nO, { namespace: U }, r.createElement(_.Z, null, r.createElement(y.Z, { location: s, screenType: "secondaryDetail", title: T }, r.createElement(d.Z, { description: D }), r.createElement(p.Z, { checked: l, helpText: L, label: F, learnMoreLink: (0, m.ju)("https://help.x.com/safety-and-security/public-and-protected-tweets"), name: "protected", onChange: o._handleChanged }), r.createElement(B, null), r.createElement(u.Z, { description: f, label: N, link: "/settings/tagging" })), o.showConfirmation ? r.createElement(b.Z, { confirmButtonLabel: g.confirmButtonLabel, confirmButtonType: "primary", headline: g.headline, onCancel: o._handleConfirmationCancel, onConfirm: o._handleConfirmationConfirm, text: g.text }) : null));
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
            const V = P(H);
        },
        413940: (e, t, n) => {
            n.r(t), n.d(t, { ApplicationsScreen: () => L, default: () => M });
            var a = n(202784),
                s = n(325686),
                r = n(688715),
                i = n(943401),
                l = n(731708),
                c = n(457311),
                o = n(779610),
                d = n(992942),
                p = n(392237),
                m = n(332920),
                u = n.n(m),
                b = n(290402),
                f = n(652904),
                g = n(293115),
                h = n(264922),
                _ = n(71620),
                E = n(668214),
                w = n(948985),
                Z = n(312771);
            const y = (e, t) => (0, Z.h1)(w.UD(e)),
                k = (0, E.Z)()
                    .propsFromState(() => ({ fetchStatus: y, applications: w.$q.selectUniqUnrevokedApps }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("APPLICATIONS"), fetchApplications: w.wz })),
                S = "connectedAppsScreen",
                C = u().jc02ae68,
                v = u().e5e8a89a,
                A = u().hfa9a2c8,
                P = u().dd1b86f9,
                T = u().cf461930,
                D = (0, r.ju)("https://help.x.com/managing-your-account/connect-or-revoke-access-to-third-party-apps"),
                F = { page: "settings", section: "connected_apps" };
            class L extends a.Component {
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
                                a.createElement(i.Z, { description: a.createElement(u().I18NFormatMessage, { $i18n: "hcecd237" }, a.createElement(l.ZP, { link: D }, u().b63b0b1d)) }),
                                e.length ? null : a.createElement(c.Z, { header: A, message: T }),
                                e.map((e, t) => {
                                    const n = `/settings/connected_apps/${e.app_id}`;
                                    return a.createElement(o.Z, { description: e.organization ? P({ name: e.organization }) : null, key: e.app_id, label: e.name, link: n, thumbnail: a.createElement(d.Z, { "aria-label": "", source: e.img_url, style: x.avatar }) });
                                }),
                            );
                        });
                }
                componentDidMount() {
                    this._fetchApps();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return a.createElement(g.nO, { namespace: F }, a.createElement(f.Z, null, a.createElement(h.Z, { location: t, title: C }, a.createElement(s.Z, { testID: S }, a.createElement(b.Z, { "aria-label": v, fetchStatus: e, onRequestRetry: this._handleRetry, render: this._render })))));
                }
            }
            L.defaultProps = { applications: [] };
            const x = p.default.create((e) => ({ avatar: { borderRadius: e.borderRadii.small, height: "100%", width: "100%" } })),
                M = k(L);
        },
        720823: (e, t, n) => {
            n.r(t), n.d(t, { ContentYouSee: () => T, default: () => D });
            var a = n(202784),
                s = n(943401),
                r = n(954110),
                i = n(779610),
                l = n(332920),
                c = n.n(l),
                o = n(443781),
                d = n(652904),
                p = n(440630),
                m = n(293115),
                u = n(725405),
                b = n(264922),
                f = n(71620),
                g = n(668214),
                h = n(38562),
                _ = n(919022);
            const E = (0, g.Z)()
                    .propsFromState(() => ({ settings: h.l4, viewerUser: _.ZP.selectViewerUser }))
                    .adjustStateProps(({ settings: e, viewerUser: t }) => ({ displaySensitiveMediaEnabled: e.display_sensitive_media, viewerUserScreenName: t?.screen_name }))
                    .propsFromActions(() => ({ updateSettings: h.VP, createLocalApiErrorHandler: (0, f.zr)("CONTENT_YOU_SEE_SCREEN") })),
                w = c().f2bd9c48,
                Z = c().c4afe0e6,
                y = c().fc1d217c,
                k = c().b8533bac,
                S = c().h1f01a24,
                C = c().j018f2a2,
                v = c().h1ef00dc,
                A = c().h9f2da68,
                P = { page: "settings", section: "content_you_see" };
            function T({ createLocalApiErrorHandler: e, displaySensitiveMediaEnabled: t, location: n, updateSettings: l, viewerUserScreenName: c }) {
                const f = (0, u.Z)(),
                    { featureSwitches: g } = a.useContext(o.rC),
                    h = g.isTrue("sensitive_media_settings_enabled");
                return void 0 !== c
                    ? a.createElement(
                          m.nO,
                          { namespace: P },
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
                                            label: y,
                                            name: "display_sensitive_media",
                                            onChange: function (t, n) {
                                                f.scribe({ ...P, element: t, action: n ? "enable" : "disable" }), l({ [t]: n }).catch(e({ showToast: !0 }));
                                            },
                                        }),
                                  a.createElement(i.Z, { label: k, link: `/${c}/topics` }),
                                  a.createElement(i.Z, { label: S, link: "/settings/your_twitter_data/twitter_interests" }),
                                  a.createElement(i.Z, { label: C, link: "/settings/explore" }),
                                  a.createElement(i.Z, { label: v, link: "/settings/search" }),
                                  h ? a.createElement(i.Z, { label: A, link: "/settings/sensitive_media" }) : null,
                                  a.createElement(p.i, { preferences: ["allow_for_you_recommendations"] }),
                              ),
                          ),
                      )
                    : null;
            }
            const D = E(T);
        },
        481444: (e, t, n) => {
            n.r(t), n.d(t, { default: () => k });
            n(571372);
            var a = n(202784),
                s = n(943401),
                r = n(101890),
                i = n(332920),
                l = n.n(i),
                c = n(443781),
                o = n(664918),
                d = n(652904),
                p = n(293115),
                m = n(620482),
                u = n(725405),
                b = n(264922);
            const f = l().d0b74a5a,
                g = l().bc20979a,
                h = l().d8817e36,
                _ = l().b9288ee6,
                E = l().ge06dadc,
                w = l().he20de3a,
                Z = [
                    { label: h, value: o.fD.AcceptAllCookies, helpText: E },
                    { label: _, value: o.fD.RefuseNonEssentialCookies, helpText: w },
                ],
                y = { page: "settings", section: "cookie_preferences" };
            function k(e) {
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
                    { namespace: y },
                    a.createElement(
                        d.Z,
                        null,
                        a.createElement(
                            b.Z,
                            { location: t, screenType: "secondaryDetail", title: f },
                            a.createElement(s.Z, { description: g }),
                            a.createElement(r.Z, {
                                name: "cookie_preferences",
                                onChange: (e, t) => {
                                    n.scribe({ ...y, action: "change", element: t === o.fD.AcceptAllCookies ? "accept_all" : "refuse_non_essential" }), l(t), t === o.fD.RefuseNonEssentialCookies && (m.Z.flushHTMLCache(), window.location.reload());
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
            n.r(t), n.d(t, { DataSharingWithBusinessPartners: () => k, default: () => S });
            var a = n(202784),
                s = n(688715),
                r = n(943401),
                i = n(954110),
                l = n(332920),
                c = n.n(l),
                o = n(652904),
                d = n(293115),
                p = n(725405),
                m = n(264922),
                u = n(71620),
                b = n(668214),
                f = n(205253);
            const g = (0, b.Z)()
                    .propsFromState(() => ({ settings: f.kQ }))
                    .adjustStateProps(({ settings: e }) => ({ allowPartnerships: e.allowPartnerships }))
                    .propsFromActions(() => ({ updateSettings: f.VP, createLocalApiErrorHandler: (0, u.zr)("DATA_SHARING_WITH_BUSINESS_PARTNERS_SCREEN") })),
                h = c().h14ba864,
                _ = c().eb0cc786,
                E = c().d3c20d80,
                w = c().f1c0d09c,
                Z = (0, s.ju)("https://support.x.com/articles/20175379"),
                y = { page: "settings", section: "data_sharing_with_business_partners" };
            function k(e) {
                const { allowPartnerships: t, createLocalApiErrorHandler: n, location: s, updateSettings: l } = e,
                    c = (0, p.Z)();
                return a.createElement(
                    d.nO,
                    { namespace: y },
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
                                    c.scribe({ ...y, element: e, action: t ? "enable" : "disable" }), l({ [e]: t }).catch(n({ showToast: !0 }));
                                },
                            }),
                        ),
                    ),
                );
            }
            const S = g(k);
        },
        847286: (e, t, n) => {
            n.r(t), n.d(t, { DirectMessages: () => z, allowDMsFromName: () => $, alwaysAllowMessageRequestsFromSubscribersLabel: () => T, default: () => O, dmFromAnyoneLabel: () => v, dmFromPeopleYouFollowLabel: () => S, dmFromVerifiedLabel: () => C, dmGraphicMediaLabel: () => F, dmQualityFilterLabel: () => A, dmReceiptsLabel: () => M });
            var a = n(202784),
                s = n(731708),
                r = n(688715),
                i = n(101890),
                l = n(661810),
                c = n(954110),
                o = n(779610),
                d = n(332920),
                p = n.n(d),
                m = n(443781),
                u = n(652904),
                b = n(952793),
                f = n(293115),
                g = n(725405),
                h = n(264922),
                _ = n(71620),
                E = n(668214),
                w = n(38562),
                Z = n(919022);
            const y = (0, E.Z)()
                    .propsFromState(() => ({ nsfwMediaFilter: w.a5, settings: w.l4, loggedInUser: Z.ZP.selectLoggedInUser }))
                    .adjustStateProps(({ loggedInUser: e, nsfwMediaFilter: t, settings: n }) => ({ allowDmsFrom: n.allow_dms_from, alwaysAllowDmsFromSubscribers: n.always_allow_dms_from_subscribers, dmQualityFilter: n.dm_quality_filter, dmReceiptSetting: n.dm_receipt_setting, nsfwMediaFilter: t, loggedInUser: e }))
                    .propsFromActions(() => ({ updateSettings: w.VP, updateDmNsfwMediaFilter: w.Ob, createLocalApiErrorHandler: (0, _.zr)("DIRECT_MESSAGES_SCREEN") }))
                    .withAnalytics({ page: "settings" }),
                k = p().d4986f86,
                S = p().ee4592ca,
                C = p().da813d22,
                v = p().baffe39a,
                A = p().b3d8566e,
                P = p().cfda8c44,
                T = p().f4c91f40,
                D = p().bf0c4336,
                F = p().e6c411d8,
                L = p().g558101a,
                x = p().c9bc33fa,
                M = p().d9172542,
                I = p().bd557506,
                $ = "allow_dms_from",
                N = { page: "settings", section: "direct_messages" },
                R = p().f29080d0,
                U = a.createElement(s.ZP, { link: (0, r.ju)("https://help.x.com/using-twitter/direct-messages#receive"), size: "subtext1", style: { whiteSpace: "nowrap" } }),
                j = a.createElement(p().I18NFormatMessage, { $i18n: "aa1b5fdd" }, a.cloneElement(U, null, p().j0adcc2d)),
                H = [
                    { label: S, value: "following" },
                    { label: C, value: "verified" },
                    { label: v, value: "all" },
                ];
            function z(e) {
                const { allowDmsFrom: t, alwaysAllowDmsFromSubscribers: n, createLocalApiErrorHandler: s, dmQualityFilter: d, dmReceiptSetting: p, location: _, loggedInUser: E, nsfwMediaFilter: w, updateDmNsfwMediaFilter: Z, updateSettings: y } = e,
                    S = (0, g.Z)(),
                    { featureSwitches: C } = a.useContext(m.rC),
                    v = (0, b.hC)("dm_settings_info_page_allow_subscriber_messages_setting_enabled"),
                    U = E?.super_follow_eligible,
                    z = (0, b.hC)("dm_settings_info_page_device_list_enabled");
                function O(t, n) {
                    const a = "/messages/settings" === e.location.pathname ? "dm_tab" : "global_settings_menu";
                    S.scribe({ ...N, element: t, data: { entry_point: a }, action: n }), y({ [t]: n }).catch(s({ showToast: !0 }));
                }
                const B = C.isTrue("dm_conversations_nsfw_media_filter_enabled");
                return a.createElement(
                    f.nO,
                    { namespace: N },
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
                                    description: j,
                                    label: R,
                                    name: $,
                                    onChange: function (e, t) {
                                        O($, t);
                                    },
                                    options: H,
                                    value: t,
                                }),
                                a.createElement(l.Z, { space: "space4" }),
                            ),
                            v && U
                                ? a.createElement(c.Z, {
                                      checked: n,
                                      disabled: "all" === t,
                                      helpText: D,
                                      label: T,
                                      learnMoreLink: (0, r.ju)("https://help.x.com/using-twitter/direct-messages"),
                                      name: "always_allow_dms_from_subscribers",
                                      onChange: function (e, t) {
                                          S.scribe({ ...N, element: e, action: t ? "enabled" : "disabled" }), y({ [e]: t }).catch(s({ showToast: !0 }));
                                      },
                                  })
                                : a.createElement(a.Fragment, null),
                            a.createElement(c.Z, {
                                checked: "enabled" === d,
                                disabled: "following" === t,
                                helpText: P,
                                label: A,
                                learnMoreLink: (0, r.ju)("https://help.x.com/using-twitter/direct-messages"),
                                name: "dm_quality_filter",
                                onChange: function (e, t) {
                                    O(e, t ? "enabled" : "disabled");
                                },
                            }),
                            B
                                ? a.createElement(c.Z, {
                                      checked: w,
                                      helpText: L,
                                      label: F,
                                      learnMoreLink: (0, r.ju)("https://help.x.com/using-twitter/direct-messages#graphic-media"),
                                      name: "ext_dm_nsfw_media_filter",
                                      onChange: function (e, t) {
                                          S.scribe({ ...N, element: "dm_nsfw_filter_setting", action: t ? "enable" : "disable" }), Z(t);
                                      },
                                  })
                                : null,
                            a.createElement(c.Z, {
                                checked: "all_enabled" === p,
                                helpText: I,
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
            const O = y(z);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-ec129bee.ead1640a.js.map
