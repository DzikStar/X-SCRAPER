"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-32bb1570"],
    {
        633525: (e, t, n) => {
            n.r(t), n.d(t, { GrokSettingsScreen: () => F, default: () => O });
            var a = n(181196),
                r = n(202784),
                i = n(325686),
                c = (n(585488), n(712696)),
                l = n.n(c),
                s = n(107267),
                o = n(111677),
                u = n.n(o),
                d = n(947135),
                m = n(290402),
                f = n(443781),
                g = n(652904),
                p = n(883229),
                b = n(943914),
                E = n(310116),
                _ = n(867621),
                y = n(987317),
                Z = n(466441),
                h = n(264922),
                S = n(71620),
                C = n(668214),
                v = n(122743),
                w = n(215929);
            const L = (0, C.Z)()
                    .propsFromState(() => ({ userClaimsFetchStatus: w.uD }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, S.zr)("APPLICATIONS"), clearConversations: v.H }))
                    .withAnalytics({ page: "settings", section: "subscriptions" }),
                I = u().i9028824,
                k = u().i22beaa4,
                A = u().e110a46c,
                T = u().ebc4fda0,
                R = u().c90fe716,
                x = u().d96cf7ce,
                N = a.Z,
                P = { type: "Retry" },
                V = { context: "GrokSettings" };
            function D({ clearConversations: e, createLocalApiErrorHandler: t }) {
                const { user_preferences: n } = l()(N, {}),
                    a = (0, s.useLocation)(),
                    c = (0, s.useRouteMatch)(),
                    o = (0, s.useHistory)(),
                    { featureSwitches: u } = r.useContext(f.rC),
                    m = u.isTrue("responsive_web_grok_delete_conversations_enabled");
                if (!n) return r.createElement(Z.default, { history: o, location: a, match: c });
                return r.createElement(
                    g.Z,
                    null,
                    r.createElement(
                        h.Z,
                        { location: a, screenType: "secondaryDetail", title: k },
                        r.createElement(i.Z, { testID: "xaiDataSharingSettings" }, r.createElement(E.Z, { userPreferences: n }), r.createElement(y.Z, { userPreferences: n }), r.createElement(_.Z, { userPreferences: n })),
                        m &&
                            r.createElement(d.Z, {
                                align: "left",
                                confirmationSheetConfirmButtonLabel: x,
                                confirmationSheetConfirmButtonType: "primary",
                                confirmationSheetHeadline: R,
                                confirmationSheetText: T,
                                label: A,
                                onConfirmationSheetConfirm: () => {
                                    e().catch(() => t({ showToast: !0 }));
                                },
                            }),
                    ),
                );
            }
            const H = (e, t) => r.createElement(D, { clearConversations: e, createLocalApiErrorHandler: t });
            function F({ clearConversations: e, createLocalApiErrorHandler: t, userClaimsFetchStatus: n }) {
                return r.createElement(p.N, { errorConfig: V, fallback: P }, r.createElement(b.B, { fallback: null }, r.createElement(m.Z, { "aria-label": I, fetchStatus: n, render: () => H(e, t) })));
            }
            const O = L(F);
        },
        915566: (e, t, n) => {
            n.d(t, { Jb: () => c, Jf: () => d, LT: () => u, MQ: () => i, NC: () => o, hJ: () => l, zV: () => s });
            var a = n(688715),
                r = n(130919);
            const i = Object.freeze({ premiumSubscription: "premiumSubscription", premiumSettings: "premiumSettings", securitySettings: "securitySettings", creator: "creator" }),
                c = { [i.premiumSubscription]: "/i/flow/premium_signup_nux_flow", [i.premiumSettings]: "/settings/premium", [i.securitySettings]: "/settings/security", [i.creator]: "/settings/monetization" },
                l = `/settings/account/id_verification?status=${r.t.PendingResult}`,
                s = `/settings/monetization?status=${r.t.PendingResult}`,
                o = "/settings/account/id_verification",
                u = (0, a.ju)("https://help.x.com/rules-and-policies/verification-policy"),
                d = (0, a.ju)("https://help.x.com/using-x/x-premium");
        },
        940289: (e, t, n) => {
            n.r(t), n.d(t, { IDVerificationQueryRenderer: () => G, IDVerificationQueryRequest: () => M, default: () => $, isPendingStatus: () => q });
            var a = n(993770),
                r = n(629928),
                i = n(202784),
                c = n(360917),
                l = n.n(c),
                s = n(614983),
                o = n.n(s),
                u = n(325686),
                d = (n(585488), n(351743)),
                m = n.n(d),
                f = n(107267),
                g = n(750410),
                p = n(943401),
                b = n(954110),
                E = n(167630),
                _ = n(392237),
                y = n(731708),
                Z = n(111677),
                h = n.n(Z),
                S = n(750442),
                C = n(130919),
                v = n(727828),
                w = n(534763),
                L = n(443781),
                I = n(652904),
                k = n(301410),
                A = n(725516),
                T = n(312771),
                R = n(615027),
                x = n(466441),
                N = n(264922),
                P = n(915566);
            const V = h().afe4a358,
                D = h().g268fbb8,
                H = h().f66d24be,
                F = h().c8255462,
                O = h().c6e731ee,
                z = h().be582166,
                U = { [C.t.PendingResult]: h().b496bc94, [C.t.RequestLocked]: h().d8f5cce4, [C.t.IdentityNonVerifiable]: h().i8427a1e, [C.t.CanVerifyIdentity]: z },
                j = i.createElement(w.b, { label: H, link: P.LT }),
                q = (e) => {
                    const t = e.query?.status;
                    return !(!t || Array.isArray(t)) && t === C.t.PendingResult;
                },
                M = r.Z,
                B = a.Z,
                G = (0, k.z)(M, { errorConfig: { context: "ID_VERIFICATION_CONTEXT" } }),
                Q = _.default.create((e) => ({ layoutDimensions: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, iconTheme: { color: e.colors.text }, idLabel: { alignItems: "center", flexDirection: "row", gap: e.spaces.space8 } })),
                J = i.createElement(u.Z, { style: Q.idLabel }, i.createElement(S.default, { style: Q.iconTheme }), i.createElement(y.ZP, { color: "gray700" }, D)),
                $ = i.memo(
                    (0, A.Z)(
                        ({ analytics: e, ...t }) => {
                            const { featureSwitches: n } = i.useContext(L.rC),
                                a = n.isTrue("identity_verification_hide_verified_label_settings_enabled"),
                                r = (0, f.useLocation)(),
                                [c] = m()(B),
                                s = i.useCallback(
                                    (e, t) => (n, a) => {
                                        e &&
                                            t &&
                                            c({
                                                variables: { is_identity_verified_label_hidden: a, user_id: e },
                                                updater: (e, n) => {
                                                    const r = e.get(t);
                                                    o()(r, "userRecord must be specified"), r.setValue(a, "is_identity_verified_label_hidden");
                                                },
                                            });
                                    },
                                    [c],
                                ),
                                d = i.useCallback(
                                    ({ data: n, fetchStatus: c, retry: l }) => {
                                        if (c === T.ZP.FAILED) return i.createElement(g.Z, { onRequestRetry: l });
                                        if (c === T.ZP.LOADED && n) {
                                            const c = n.viewer.user_results.result,
                                                o = c.rest_id,
                                                d = c.verification_info;
                                            if (!d) return i.createElement(g.Z, { onRequestRetry: l });
                                            const m = !!d.is_identity_verified_label_hidden,
                                                E = d.identity_verification_status,
                                                _ = E === C.t.CanVerifyIdentity && q(r) ? C.t.PendingResult : E,
                                                y = _ === C.t.UnavailableMissingBlueSubscription;
                                            switch ((e.scribe({ page: "identity_verification_settings", section: _, action: "impression" }), _)) {
                                                case C.t.RequestLocked:
                                                case C.t.PendingResult:
                                                case C.t.IdentityNonVerifiable:
                                                    return i.createElement(i.Fragment, null, i.createElement(p.Z, { description: U[_] }), j);
                                                case C.t.IdentityVerified:
                                                case C.t.UnavailableMissingBlueSubscription:
                                                    return i.createElement(u.Z, null, i.createElement(p.Z, { description: z }), i.createElement(u.Z, { style: Q.layoutDimensions }, y ? i.createElement(v.Z, { variant: "IdVerification", withColoredIcon: !0 }) : J), a ? i.createElement(u.Z, null, i.createElement(b.Z, { checked: m, disabled: y, helpText: O, label: F, name: "is_identity_verified_label_hidden", onChange: s(o, d.__id) })) : null, j);
                                                case C.t.CanVerifyIdentity:
                                                    return i.createElement(u.Z, null, i.createElement(p.Z, { description: U[_] }), i.createElement(f.Switch, null, i.createElement(f.Route, null, i.createElement(R.Z, { to: "/settings/account/id_verification/start" }))));
                                                default:
                                                    return i.createElement(x.default, t);
                                            }
                                        }
                                        return i.createElement(E.Z, null);
                                    },
                                    [e, a, r, s, t],
                                );
                            return i.createElement(I.Z, null, i.createElement(N.Z, { location: r, title: V }, i.createElement(G, { render: d, variables: l() })));
                        },
                        { page: "id_verification", section: "settings" },
                    ),
                );
        },
        68820: (e, t, n) => {
            n.r(t), n.d(t, { Languages: () => V, default: () => D });
            var a = n(202784),
                r = n(779610),
                i = n(844685),
                c = n(943401),
                l = n(420412),
                s = n(111677),
                o = n.n(s),
                u = n(443781),
                d = n(652904),
                m = n(293115),
                f = n(264922),
                g = n(71620),
                p = n(668214),
                b = n(661461),
                E = n(576025),
                _ = n(390387);
            const y = (e) => {
                    const t = (0, _.VT)(e);
                    return t && (0, b.ug)(e, t);
                },
                Z = (0, p.Z)()
                    .propsFromState(() => ({ languageName: y, languageCode: _.VT }))
                    .propsFromActions(() => ({ fetchCountryNamesIfNeeded: E.Po, fetchAvailableLanguagesIfNeeded: b.yt, createLocalApiErrorHandler: (0, g.zr)("LANGUAGES_SCREEN") })),
                h = o().d495680e,
                S = o().jc3fa0e2,
                C = o().a4b69cbc,
                v = o().c856bd00,
                w = o().a4b69cbc,
                L = o().cab61d58,
                I = o().dd93fafa,
                k = o().bca1de4a,
                A = o().c3aa76c4,
                T = o().g099069c,
                R = o().c3aa76c4,
                x = o().cf9ce876,
                N = o().d4372cf4,
                P = { page: "settings", section: "languages" };
            function V(e) {
                const { featureSwitches: t } = a.useContext(u.rC),
                    { createLocalApiErrorHandler: n, fetchAvailableLanguagesIfNeeded: s, fetchCountryNamesIfNeeded: o, languageCode: g, languageName: p, location: b } = e,
                    E = t.isTrue("onboarding_project_uls_enabled"),
                    _ = a.useMemo(() => (E ? a.createElement(r.Z, { description: N, label: x, link: "/i/flow/uls_content_and_app_language_selector" }) : a.createElement(a.Fragment, null, a.createElement(i.Z, { text: C }), a.createElement(c.Z, { description: v }), a.createElement(r.Z, { description: p, label: w, link: "/settings/language" }), a.createElement(l.Z, null), a.createElement(i.Z, { text: L }), a.createElement(c.Z, { description: I }), a.createElement(r.Z, { label: k, link: "/i/flow/language_selector" }), a.createElement(l.Z, null), a.createElement(i.Z, { text: A }), a.createElement(c.Z, { description: T }), a.createElement(r.Z, { label: R, link: "/settings/your_twitter_data/language" }))), [E, p]);
                return (
                    a.useEffect(() => {
                        g && o(g).catch(n()), s().catch(n());
                    }, [g, o, s, n]),
                    a.createElement(m.nO, { namespace: P }, a.createElement(d.Z, null, a.createElement(f.Z, { location: b, screenType: "secondaryDetail", title: h }, a.createElement(c.Z, { description: S }), _)))
                );
            }
            const D = Z(V);
        },
        110202: (e, t, n) => {
            n.r(t), n.d(t, { LocationInformation: () => k, default: () => A });
            var a = n(202784),
                r = n(943401),
                i = n(954110),
                c = n(779610),
                l = n(111677),
                s = n.n(l),
                o = n(443781),
                u = n(652904),
                d = n(944681),
                m = n(293115),
                f = n(725405),
                g = n(264922),
                p = n(71620),
                b = n(668214),
                E = n(205253),
                _ = n(919022);
            const y = (0, b.Z)()
                    .propsFromState(() => ({ settings: E.kQ, viewerUser: _.ZP.selectViewerUser }))
                    .adjustStateProps(({ settings: e, ...t }) => ({ ...t, allowLocationHistoryUseEnabled: e.allowLocationHistoryUse }))
                    .propsFromActions(() => ({ updateSettings: E.VP, createLocalApiErrorHandler: (0, p.zr)("LOCATION_INFORMATION_SCREEN") })),
                Z = s().jabb9c9a,
                h = s().dd533318,
                S = s().dc20d918,
                C = s().af7d89e6,
                v = s().d9138166,
                w = s().fcb6a5b8,
                L = s().j018f2a2,
                I = { page: "settings", section: "location_information" };
            function k({ allowLocationHistoryUseEnabled: e, createLocalApiErrorHandler: t, location: n, updateSettings: l, viewerUser: s }) {
                const p = (0, f.Z)(),
                    { featureSwitches: b } = a.useContext(o.rC),
                    E = !!s?.birthdate && (0, d.k)(s.birthdate.year, s.birthdate.month, s.birthdate.day),
                    _ = !s || (b.isTrue("settings_for_you_recommendation_enabled") && E);
                return a.createElement(
                    m.nO,
                    { namespace: I },
                    a.createElement(
                        u.Z,
                        null,
                        a.createElement(
                            g.Z,
                            { location: n, screenType: "secondaryDetail", title: Z },
                            a.createElement(r.Z, { description: h }),
                            _
                                ? null
                                : a.createElement(i.Z, {
                                      checked: e,
                                      helpText: C,
                                      label: S,
                                      name: "allowLocationHistoryUse",
                                      onChange: function (e, n) {
                                          p.scribe({ ...I, element: e, action: n ? "enable" : "disable" }), l({ [e]: n }).catch(t());
                                      },
                                  }),
                            a.createElement(c.Z, { label: v, link: "/settings/your_twitter_data/locations" }),
                            a.createElement(c.Z, { label: w, link: "/settings/location" }),
                            a.createElement(c.Z, { label: L, link: "/settings/explore" }),
                        ),
                    ),
                );
            }
            const A = y(k);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-32bb1570.c68208fa.js.map
