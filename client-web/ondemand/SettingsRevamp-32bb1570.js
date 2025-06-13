"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-32bb1570"],
    {
        633525: (e, t, n) => {
            n.r(t), n.d(t, { GrokSettingsScreen: () => H, default: () => z });
            var r = n(181196),
                a = n(202784),
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
                _ = n(943914),
                E = n(310116),
                b = n(867621),
                y = n(987317),
                Z = n(466441),
                h = n(264922),
                v = n(71620),
                C = n(668214),
                S = n(122743),
                w = n(691213);
            const L = (0, C.Z)()
                    .propsFromState(() => ({ userClaimsFetchStatus: w.uD }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, v.zr)("APPLICATIONS"), clearConversations: S.H }))
                    .withAnalytics({ page: "settings", section: "subscriptions" }),
                I = u().i9028824,
                R = u().f2b1e83e,
                k = u().e110a46c,
                A = u().ebc4fda0,
                T = u().c90fe716,
                x = u().d96cf7ce,
                N = r.Z,
                P = { type: "Retry" },
                D = { context: "GrokSettings" };
            function V({ clearConversations: e, createLocalApiErrorHandler: t }) {
                const { user_preferences: n } = l()(N, {}),
                    r = (0, s.useLocation)(),
                    c = (0, s.useRouteMatch)(),
                    o = (0, s.useHistory)(),
                    { featureSwitches: u } = a.useContext(f.rC),
                    m = u.isTrue("responsive_web_grok_delete_conversations_enabled");
                if (!n) return a.createElement(Z.default, { history: o, location: r, match: c });
                return a.createElement(
                    g.Z,
                    null,
                    a.createElement(
                        h.Z,
                        { location: r, screenType: "secondaryDetail", title: R },
                        a.createElement(i.Z, { testID: "xaiDataSharingSettings" }, a.createElement(E.Z, { userPreferences: n }), a.createElement(y.Z, { userPreferences: n }), a.createElement(b.Z, { userPreferences: n })),
                        m &&
                            a.createElement(d.Z, {
                                align: "left",
                                confirmationSheetConfirmButtonLabel: x,
                                confirmationSheetConfirmButtonType: "primary",
                                confirmationSheetHeadline: T,
                                confirmationSheetText: A,
                                label: k,
                                onConfirmationSheetConfirm: () => {
                                    e().catch(() => t({ showToast: !0 }));
                                },
                            }),
                    ),
                );
            }
            const F = (e, t) => a.createElement(V, { clearConversations: e, createLocalApiErrorHandler: t });
            function H({ clearConversations: e, createLocalApiErrorHandler: t, userClaimsFetchStatus: n }) {
                return a.createElement(p.N, { errorConfig: D, fallback: P }, a.createElement(_.B, { fallback: null }, a.createElement(m.Z, { "aria-label": I, fetchStatus: n, render: () => F(e, t) })));
            }
            const z = L(H);
        },
        915566: (e, t, n) => {
            n.d(t, { Jb: () => c, Jf: () => d, LT: () => u, MQ: () => i, NC: () => o, hJ: () => l, zV: () => s });
            var r = n(688715),
                a = n(130919);
            const i = Object.freeze({ premiumSubscription: "premiumSubscription", premiumSettings: "premiumSettings", securitySettings: "securitySettings", creator: "creator" }),
                c = { [i.premiumSubscription]: "/i/flow/premium_signup_nux_flow", [i.premiumSettings]: "/settings/premium", [i.securitySettings]: "/settings/security", [i.creator]: "/settings/monetization" },
                l = `/settings/account/id_verification?status=${a.t.PendingResult}`,
                s = `/settings/monetization?status=${a.t.PendingResult}`,
                o = "/settings/account/id_verification",
                u = (0, r.ju)("https://help.x.com/rules-and-policies/verification-policy"),
                d = (0, r.ju)("https://help.x.com/using-x/x-premium");
        },
        940289: (e, t, n) => {
            n.r(t), n.d(t, { IDVerificationQueryRenderer: () => J, IDVerificationQueryRequest: () => O, default: () => $, isPendingStatus: () => M });
            var r = n(993770),
                a = n(629928),
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
                _ = n(954110),
                E = n(167630),
                b = n(392237),
                y = n(731708),
                Z = n(111677),
                h = n.n(Z),
                v = n(750442),
                C = n(130919),
                S = n(727828),
                w = n(534763),
                L = n(443781),
                I = n(652904),
                R = n(301410),
                k = n(725516),
                A = n(312771),
                T = n(615027),
                x = n(466441),
                N = n(264922),
                P = n(915566);
            const D = h().afe4a358,
                V = h().g268fbb8,
                F = h().f66d24be,
                H = h().c8255462,
                z = h().c6e731ee,
                j = h().be582166,
                q = { [C.t.PendingResult]: h().b496bc94, [C.t.RequestLocked]: h().d8f5cce4, [C.t.IdentityNonVerifiable]: h().i8427a1e, [C.t.CanVerifyIdentity]: j },
                B = i.createElement(w.b, { label: F, link: P.LT }),
                M = (e) => {
                    const t = e.query?.status;
                    return !(!t || Array.isArray(t)) && t === C.t.PendingResult;
                },
                O = a.Z,
                G = r.Z,
                J = (0, R.z)(O, { errorConfig: { context: "ID_VERIFICATION_CONTEXT" } }),
                Q = b.default.create((e) => ({ layoutDimensions: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, iconTheme: { color: e.colors.text }, idLabel: { alignItems: "center", flexDirection: "row", gap: e.spaces.space8 } })),
                U = i.createElement(u.Z, { style: Q.idLabel }, i.createElement(v.default, { style: Q.iconTheme }), i.createElement(y.ZP, { color: "gray700" }, V)),
                $ = i.memo(
                    (0, k.Z)(
                        ({ analytics: e, ...t }) => {
                            const { featureSwitches: n } = i.useContext(L.rC),
                                r = n.isTrue("identity_verification_hide_verified_label_settings_enabled"),
                                a = (0, f.useLocation)(),
                                [c] = m()(G),
                                s = i.useCallback(
                                    (e, t) => (n, r) => {
                                        e &&
                                            t &&
                                            c({
                                                variables: { is_identity_verified_label_hidden: r, user_id: e },
                                                updater: (e, n) => {
                                                    const a = e.get(t);
                                                    o()(a, "userRecord must be specified"), a.setValue(r, "is_identity_verified_label_hidden");
                                                },
                                            });
                                    },
                                    [c],
                                ),
                                d = i.useCallback(
                                    ({ data: n, fetchStatus: c, retry: l }) => {
                                        if (c === A.ZP.FAILED) return i.createElement(g.Z, { onRequestRetry: l });
                                        if (c === A.ZP.LOADED && n) {
                                            const c = n.viewer.user_results.result,
                                                o = c.rest_id,
                                                d = c.verification_info;
                                            if (!d) return i.createElement(g.Z, { onRequestRetry: l });
                                            const m = !!d.is_identity_verified_label_hidden,
                                                E = d.identity_verification_status,
                                                b = E === C.t.CanVerifyIdentity && M(a) ? C.t.PendingResult : E,
                                                y = b === C.t.UnavailableMissingBlueSubscription;
                                            switch ((e.scribe({ page: "identity_verification_settings", section: b, action: "impression" }), b)) {
                                                case C.t.RequestLocked:
                                                case C.t.PendingResult:
                                                case C.t.IdentityNonVerifiable:
                                                    return i.createElement(i.Fragment, null, i.createElement(p.Z, { description: q[b] }), B);
                                                case C.t.IdentityVerified:
                                                case C.t.UnavailableMissingBlueSubscription:
                                                    return i.createElement(u.Z, null, i.createElement(p.Z, { description: j }), i.createElement(u.Z, { style: Q.layoutDimensions }, y ? i.createElement(S.Z, { variant: "IdVerification", withColoredIcon: !0 }) : U), r ? i.createElement(u.Z, null, i.createElement(_.Z, { checked: m, disabled: y, helpText: z, label: H, name: "is_identity_verified_label_hidden", onChange: s(o, d.__id) })) : null, B);
                                                case C.t.CanVerifyIdentity:
                                                    return i.createElement(u.Z, null, i.createElement(p.Z, { description: q[b] }), i.createElement(f.Switch, null, i.createElement(f.Route, null, i.createElement(T.Z, { to: "/settings/account/id_verification/start" }))));
                                                default:
                                                    return i.createElement(x.default, t);
                                            }
                                        }
                                        return i.createElement(E.Z, null);
                                    },
                                    [e, r, a, s, t],
                                );
                            return i.createElement(I.Z, null, i.createElement(N.Z, { location: a, title: D }, i.createElement(J, { render: d, variables: l() })));
                        },
                        { page: "id_verification", section: "settings" },
                    ),
                );
        },
        708341: (e, t, n) => {
            n.r(t), n.d(t, { Languages: () => q, default: () => B });
            var r = n(202784),
                a = n(844685),
                i = n(943401),
                c = n(779610),
                l = n(420412),
                s = n(111677),
                o = n.n(s),
                u = n(443781),
                d = n(652904),
                m = n(293115),
                f = n(264922),
                g = n(71620),
                p = n(668214),
                _ = n(661461),
                E = n(576025),
                b = n(390387);
            const y = (e) => {
                    const t = (0, b.VT)(e);
                    return t && (0, _.ug)(e, t);
                },
                Z = (0, p.Z)()
                    .propsFromState(() => ({ languageName: y, languageCode: b.VT }))
                    .propsFromActions(() => ({ fetchCountryNamesIfNeeded: E.Po, fetchAvailableLanguagesIfNeeded: _.yt, createLocalApiErrorHandler: (0, g.zr)("LANGUAGES_SCREEN") }));
            var h = n(631759),
                v = (n(585488), n(691533)),
                C = n(535338);
            const S = o().cf9ce876,
                w = h.Z;
            function L({ userLanguage: e }) {
                const t = (0, C.p)(w, {}),
                    n = t.viewer_v2?.user_results?.result?.display_language?.language_name,
                    a = t.viewer_v2?.user_results?.result?.preferred_content_languages?.map((e) => e.language_name) ?? [],
                    i = [n, ...a.filter((e) => e !== n)].filter(Boolean),
                    l = r.useMemo(() => new Intl.ListFormat(e, { style: "long", type: "conjunction" }), [e]).format(i);
                return r.createElement(c.Z, { description: l, label: S, link: "/i/flow/uls_content_and_app_language_selector" });
            }
            function I() {
                return r.createElement(c.Z, { description: "", label: S, link: "/i/flow/uls_content_and_app_language_selector" });
            }
            function R(e) {
                return r.createElement(v.Z, { renderErrorPlaceholder: (e) => e && r.createElement(I, null) }, r.createElement(L, e));
            }
            const k = o().d495680e,
                A = o().jc3fa0e2,
                T = o().a4b69cbc,
                x = o().c856bd00,
                N = o().a4b69cbc,
                P = o().cab61d58,
                D = o().dd93fafa,
                V = o().bca1de4a,
                F = o().c3aa76c4,
                H = o().g099069c,
                z = o().c3aa76c4,
                j = { page: "settings", section: "languages" };
            function q(e) {
                const { featureSwitches: t } = r.useContext(u.rC),
                    { createLocalApiErrorHandler: n, fetchAvailableLanguagesIfNeeded: s, fetchCountryNamesIfNeeded: o, languageCode: g, languageName: p, location: _ } = e,
                    E = t.isTrue("onboarding_project_uls_enabled"),
                    b = r.useMemo(() => (E ? r.createElement(R, { userLanguage: g }) : r.createElement(r.Fragment, null, r.createElement(a.Z, { text: T }), r.createElement(i.Z, { description: x }), r.createElement(c.Z, { description: p, label: N, link: "/settings/language" }), r.createElement(l.Z, null), r.createElement(a.Z, { text: P }), r.createElement(i.Z, { description: D }), r.createElement(c.Z, { label: V, link: "/i/flow/language_selector" }), r.createElement(l.Z, null), r.createElement(a.Z, { text: F }), r.createElement(i.Z, { description: H }), r.createElement(c.Z, { label: z, link: "/settings/your_twitter_data/language" }))), [E, p, g]);
                return (
                    r.useEffect(() => {
                        g && o(g).catch(n()), s().catch(n());
                    }, [g, o, s, n]),
                    r.createElement(m.nO, { namespace: j }, r.createElement(d.Z, null, r.createElement(f.Z, { location: _, screenType: "secondaryDetail", title: k }, r.createElement(i.Z, { description: A }), b)))
                );
            }
            const B = Z(q);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-32bb1570.5d068a3a.js.map
