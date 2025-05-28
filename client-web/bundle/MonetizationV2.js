"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.MonetizationV2"],
    {
        587510: (e, t, i) => {
            i.d(t, { Z: () => g });
            var n,
                r,
                l,
                a,
                s,
                o,
                c,
                d,
                u,
                p,
                m = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "useMonetizationCreatorSettingsQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: "viewer",
                                    args: (n = [{ kind: "Literal", name: "s", value: "4721" }]),
                                    concreteType: "Viewer",
                                    kind: "LinkedField",
                                    name: "viewer_v2",
                                    plural: !1,
                                    selections: [
                                        {
                                            kind: "RequiredField",
                                            field: {
                                                alias: null,
                                                args: null,
                                                concreteType: "UserResults",
                                                kind: "LinkedField",
                                                name: "user_results",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        kind: "RequiredField",
                                                        field: {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: null,
                                                            kind: "LinkedField",
                                                            name: "result",
                                                            plural: !1,
                                                            selections: [
                                                                {
                                                                    kind: "InlineFragment",
                                                                    selections: [
                                                                        (r = { alias: null, args: null, concreteType: "StripeConnectAccount", kind: "LinkedField", name: "stripe_connect_account", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }], storageKey: null }),
                                                                        (a = {
                                                                            alias: null,
                                                                            args: (l = [{ kind: "Literal", name: "verified_program_types", value: ["AdRevenueSharing", "SuperFollows"] }]),
                                                                            concreteType: "VerifiedProgramsApplicationStatus",
                                                                            kind: "LinkedField",
                                                                            name: "verified_program_application_status",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "ad_revenue_sharing_application_status", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "super_follows_application_status", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "rejected_super_follow_can_re_apply", storageKey: null },
                                                                            ],
                                                                            storageKey: 'verified_program_application_status(verified_program_types:["AdRevenueSharing","SuperFollows"])',
                                                                        }),
                                                                        (s = {
                                                                            alias: null,
                                                                            args: l,
                                                                            concreteType: "VerifiedProgramsEligibilities",
                                                                            kind: "LinkedField",
                                                                            name: "verified_program_eligibility",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "ad_revenue_sharing_eligibility", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "super_follows_eligibility", storageKey: null },
                                                                            ],
                                                                            storageKey: 'verified_program_eligibility(verified_program_types:["AdRevenueSharing","SuperFollows"])',
                                                                        }),
                                                                        (c = {
                                                                            alias: null,
                                                                            args: l,
                                                                            concreteType: "VerifiedUserProfile",
                                                                            kind: "LinkedField",
                                                                            name: "verified_user_profiles",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, concreteType: "AdRevenueSharingUserProfile", kind: "LinkedField", name: "ad_revenue_sharing_user_profile", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "is_active", storageKey: null }), { alias: null, args: null, concreteType: "VerifiedUserProfileInactiveReason", kind: "LinkedField", name: "inactive_reasons", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "inactive_reason_type", storageKey: null }], storageKey: null }], storageKey: null },
                                                                                { alias: null, args: null, concreteType: "SuperFollowsUserProfile", kind: "LinkedField", name: "super_follows_user_profile", plural: !1, selections: [o], storageKey: null },
                                                                            ],
                                                                            storageKey: 'verified_user_profiles(verified_program_types:["AdRevenueSharing","SuperFollows"])',
                                                                        }),
                                                                        { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), { kind: "RequiredField", field: (u = { alias: null, args: [{ kind: "Literal", name: "view", value: { verification_flow: "CreatorIdv" } }], kind: "ScalarField", name: "identity_verification_status", storageKey: 'identity_verification_status(view:{"verification_flow":"CreatorIdv"})' }), action: "THROW" }], storageKey: null },
                                                                    ],
                                                                    type: "User",
                                                                    abstractKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        action: "THROW",
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            action: "THROW",
                                        },
                                    ],
                                    storageKey: 'viewer_v2(s:"4721")',
                                },
                                action: "THROW",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useMonetizationCreatorSettingsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: n,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [r, a, s, c, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [d, u, (p = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, p], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            p,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "5UotOgLcDoewXEKftGMiuQ", metadata: {}, name: "useMonetizationCreatorSettingsQuery", operationKind: "query", text: null },
                };
            m.hash = "abb37d549229c3883d2d50c7a98d76a1";
            const g = m;
        },
        38945: (e, t, i) => {
            i.d(t, { Z: () => s });
            var n,
                r,
                l,
                a = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "useVerifiedProgramsEligibilityQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: "viewer",
                                    args: (n = [{ kind: "Literal", name: "s", value: "4721" }]),
                                    concreteType: "Viewer",
                                    kind: "LinkedField",
                                    name: "viewer_v2",
                                    plural: !1,
                                    selections: [
                                        {
                                            kind: "RequiredField",
                                            field: {
                                                alias: null,
                                                args: null,
                                                concreteType: "UserResults",
                                                kind: "LinkedField",
                                                name: "user_results",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        kind: "RequiredField",
                                                        field: {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: null,
                                                            kind: "LinkedField",
                                                            name: "result",
                                                            plural: !1,
                                                            selections: [
                                                                {
                                                                    kind: "InlineFragment",
                                                                    selections: [
                                                                        (r = {
                                                                            alias: null,
                                                                            args: [{ kind: "Literal", name: "verified_program_types", value: ["AdRevenueSharing", "SuperFollows"] }],
                                                                            concreteType: "VerifiedProgramsEligibilities",
                                                                            kind: "LinkedField",
                                                                            name: "verified_program_eligibility",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "ad_revenue_sharing_eligibility", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "super_follows_eligibility", storageKey: null },
                                                                            ],
                                                                            storageKey: 'verified_program_eligibility(verified_program_types:["AdRevenueSharing","SuperFollows"])',
                                                                        }),
                                                                    ],
                                                                    type: "User",
                                                                    abstractKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        action: "THROW",
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            action: "THROW",
                                        },
                                    ],
                                    storageKey: 'viewer_v2(s:"4721")',
                                },
                                action: "THROW",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useVerifiedProgramsEligibilityQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: n,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [r, (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            l,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "SQkrzbueypUf6oyEdj_Zzg", metadata: {}, name: "useVerifiedProgramsEligibilityQuery", operationKind: "query", text: null },
                };
            a.hash = "18b196a4f93d71cc0c23b35aab2f5948";
            const s = a;
        },
        423488: (e, t, i) => {
            i.d(t, { Z: () => y });
            var n = i(202784),
                r = i(325686),
                l = i(731708),
                a = i(420412),
                s = i(392237),
                o = i(111677),
                c = i.n(o),
                d = i(263272),
                u = i(293723),
                p = i(443781);
            const m = c().b2b4d592,
                g = c().c5f89b06,
                b = c().fbb03ba6,
                f = c().hb4c5169,
                y = ({ failedRequirements: e }) => {
                    const { featureSwitches: t } = n.useContext(p.rC),
                        i = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        s = t.getNumberValue("responsive_web_ad_revenue_sharing_number_of_impressions") || 15,
                        o = f({ impression_number: s });
                    return n.createElement(r.Z, { style: _.eligibilityRoot }, n.createElement(r.Z, { key: m, style: _.requirement }, n.createElement(l.ZP, { style: _.requirementLabel, weight: "bold" }, i ? g : m), e.includes("verified") ? n.createElement(d.default, { style: _.iconUnchecked, testID: "verifiedUnchecked" }) : n.createElement(u.default, { style: _.iconChecked, testID: "verifiedChecked" })), n.createElement(a.Z, null), n.createElement(r.Z, { key: o, style: _.requirement }, n.createElement(l.ZP, { style: _.requirementLabel, weight: "bold" }, o), e.includes("tweet_impressions") ? n.createElement(d.default, { style: _.iconUnchecked, testID: "impressionsUnchecked" }) : n.createElement(u.default, { style: _.iconChecked, testID: "impressionsChecked" })), n.createElement(a.Z, null), n.createElement(r.Z, { key: b, style: _.requirement }, n.createElement(l.ZP, { style: _.requirementLabel, weight: "bold" }, b), e.includes("followers") ? n.createElement(d.default, { style: _.iconUnchecked, testID: "followersUnchecked" }) : n.createElement(u.default, { style: _.iconChecked, testID: "followersChecked" })));
                },
                _ = s.default.create((e) => ({ eligibilityRoot: { backgroundColor: e.colors.gray0, padding: e.spaces.space12, borderRadius: e.borderRadii.medium, gap: e.spaces.space8 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 }, requirement: { flexDirection: "row", alignItems: "center" }, requirementLabel: { flex: 1, paddingEnd: 10 }, requirementsRoot: { gap: e.spaces.space24, marginVertical: e.spaces.space32 } }));
        },
        299690: (e, t, i) => {
            i.d(t, { Z: () => a });
            var n = i(38945),
                r = (i(585488), i(535338));
            const l = n.Z,
                a = () => {
                    const { viewer: e } = (0, r.p)(l, {}),
                        t = e.user_results.result,
                        i = t.verified_program_eligibility?.ad_revenue_sharing_eligibility || [];
                    return { subscriptionsFailedRequirements: t.verified_program_eligibility?.super_follows_eligibility || [], revShareFailedRequirements: i };
                };
        },
        299239: (e, t, i) => {
            i.r(t), i.d(t, { default: () => J });
            var n = i(202784),
                r = i(154003),
                l = i(392237),
                a = i(111677),
                s = i.n(a),
                o = i(692165),
                c = i(115553),
                d = i(443781),
                u = i(293115),
                p = i(615027),
                m = i(620243),
                g = i(698579),
                b = i(325686),
                f = i(67369),
                y = i(731708),
                _ = i(721266),
                h = i(530525),
                v = i(439592),
                k = i(157130),
                w = i(779610),
                E = i(323265);
            const C = i.p + "monetization-image-premium-tools.0265296a.png",
                Z = i.p + "monetization-image-reach.9f36135a.png",
                S = i.p + "monetization-image-rev-share.2d15ac6a.png",
                F = i.p + "monetization-image-subscribers.c992566a.png";
            var R = i(857378),
                x = i(727828),
                z = i(725405),
                K = i(423488),
                P = i(299690),
                I = i(228477);
            function T({ children: e, description: t, title: i }) {
                const r = (0, f.LX)(),
                    l = n.useMemo(() => ({ width: r ? "100%" : 440 }), [r]);
                return n.createElement(b.Z, { style: l }, n.createElement(y.ZP, { size: r ? "headline1" : "title4", weight: r ? "bold" : void 0 }, i), n.createElement(_.Z, { size: "space8" }), n.createElement(b.Z, { style: { height: 50 } }, n.createElement(y.ZP, { color: "gray700", size: r ? "body" : "headline2" }, t)), n.createElement(b.Z, { style: L.content }, e));
            }
            const L = l.default.create((e) => ({ content: { marginTop: e.spaces.space16, width: "100%" } })),
                A = s().bfb6be8a,
                $ = s().ed6c6da2,
                q = s().bee20918,
                D = s().h93b6580,
                U = s().eea6d8f8,
                V = s().a0e8811e,
                j = s().e1a74ac0,
                H = s().cd3a6f9a,
                W = s().c35e6144,
                B = s().b9dbeb34,
                G = s().b2d41138,
                M = s().defa7f12,
                O = () => {
                    const e = (0, z.Z)();
                    n.useEffect(() => {
                        e.scribeAction("impression");
                    }, [e]);
                    const t = (0, f.LX)(),
                        i = E.ZP.isWebView(),
                        [r, l] = n.useState(!1),
                        [a, o] = n.useState(!1),
                        { revShareFailedRequirements: c, subscriptionsFailedRequirements: d } = (0, P.Z)(),
                        u = n.useMemo(() => ({ width: t ? "100%" : 920 }), [t]),
                        p = n.useMemo(() => n.createElement(x.Z, { variant: "MonetizationPromoPage" }), []),
                        m = n.useCallback(() => {
                            l(!r), e.scribe({ component: "rev_share_eligibility", action: "toggle" });
                        }, [l, r, e]),
                        g = n.useCallback(() => {
                            o(!a), e.scribe({ component: "subscriptions_eligibility", action: "toggle" });
                        }, [o, a, e]);
                    return n.createElement(
                        b.Z,
                        { style: N.container },
                        n.createElement(
                            b.Z,
                            { style: N.scrollable },
                            n.createElement(
                                b.Z,
                                { style: N.contentContainer },
                                n.createElement(
                                    b.Z,
                                    { style: N.content },
                                    n.createElement(
                                        b.Z,
                                        { style: u },
                                        n.createElement(b.Z, { style: N.header }, n.createElement(y.ZP, { align: t ? "left" : "center", size: t ? "title2" : "title1", weight: t ? "bold" : "medium" }, A), n.createElement(_.Z, { size: "space8" }), n.createElement(y.ZP, { align: t ? "left" : "center", color: "gray700", size: t ? "headline2" : "headline1" }, $), t ? null : n.createElement(n.Fragment, null, n.createElement(_.Z, { size: "space36" }), n.createElement(b.Z, { style: N.upsellButtonContainer }, p))),
                                        n.createElement(_.Z, { size: t ? "space32" : "space80" }),
                                        n.createElement(b.Z, { style: N.upsellBlocks }, n.createElement(T, { description: D, title: q }, n.createElement(b.Z, { style: N.imageContainer }, n.createElement(h.Z, { "aria-label": q, aspectMode: v.Z.exact(2), image: S })), n.createElement(k.Z, { renderContent: () => n.createElement(K.Z, { failedRequirements: c }), wrapperStyle: N.popoverContent }, n.createElement(w.Z, { label: U, onPress: m, paddingHorizontal: "space0", styleOverride: N.pivot }))), n.createElement(T, { description: j, title: V }, n.createElement(b.Z, { style: N.imageContainer }, n.createElement(h.Z, { "aria-label": V, aspectMode: v.Z.exact(2), image: F })), n.createElement(k.Z, { renderContent: () => n.createElement(I.Z, { failedRequirements: d }), wrapperStyle: N.popoverContent }, n.createElement(w.Z, { label: H, onPress: g, styleOverride: N.pivot }))), n.createElement(T, { description: B, title: W }, n.createElement(b.Z, { style: N.imageContainer }, n.createElement(h.Z, { "aria-label": W, aspectMode: v.Z.exact(2), image: C }))), n.createElement(T, { description: M, title: G }, n.createElement(b.Z, { style: N.imageContainer }, n.createElement(h.Z, { "aria-label": G, aspectMode: v.Z.exact(2), image: Z })))),
                                        n.createElement(y.ZP, { color: "gray700", style: N.disclaimer }, n.createElement(s().I18NFormatMessage, { $i18n: "gbef9649" }, n.createElement(y.ZP, { link: "https://help.x.com/using-x/x-premium-faq#item2" }, s().i3e4955d))),
                                    ),
                                ),
                            ),
                        ),
                        t ? n.createElement(b.Z, { style: [N.footer, i ? N.footerWebview : N.footerDefault] }, n.createElement(b.Z, { style: N.gradient }), p) : null,
                    );
                },
                N = l.default.create((e) => ({ container: { display: "grid", width: "100%", position: "relative" }, popoverContent: { margin: 0, pointer: "cursor" }, body: { width: "100%", height: "100%", maxHeight: "100%", flexDirection: "column" }, topGrid: { width: "100%", height: 200, position: "absolute", start: 0, top: 0, zIndex: 1, transform: "rotate(180deg)" }, bottomGrid: { width: "100%", height: 150, position: "absolute", start: 0, bottom: 0, zIndex: 1 }, header: { width: "100%", flexDirection: "column" }, scrollable: { width: "100%", flex: 1, flexGrow: 1, overflow: "auto", minHeight: "100%", height: "100%", alignItems: "center" }, content: { position: "relative", zIndex: 10, paddingTop: e.spaces.space36, boxSizing: "border-box", paddingHorizontal: l.default.theme.spaces.space16, paddingBottom: 180 }, contentContainer: { minWidth: "100%", minHeight: "100%", alignItems: "center" }, upsellButtonContainer: { width: "min-content", alignSelf: "center" }, upsellBlocks: { marginVertical: e.spaces.space16, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", gap: e.spaces.space32, rowGap: e.spaces.space56 }, imageContainer: { borderRadius: e.borderRadii.large, overflow: "hidden", boxShadow: "0 20px 50px rgba(136,153,166,0.15)", borderColor: e.colors.gray50, borderWidth: e.borderWidths.small }, pivot: { marginTop: e.spaces.space8, pointer: "cursor", paddingStart: 0 }, disclaimer: { marginTop: e.spaces.space32, textAlign: "center" }, footer: { position: "fixed", width: "100%", paddingHorizontal: e.spaces.space28, paddingVertical: e.spaces.space20, backgroundColor: e.colors.cellBackground }, gradient: { position: "absolute", height: 28, backgroundImage: `linear-gradient(${e.colors.transparent} 0%, ${e.colors.navigationBackground} 100%)`, width: "100%", top: -28, start: 0, pointerEvents: "none" }, footerWebview: { bottom: 0 }, footerDefault: { bottom: R.h$ } })),
                Q = s().d299431c,
                X = (e) => {
                    const { featureSwitches: t, userClaims: i } = (0, d.QZ)(),
                        l = i.isAnyPremiumSubscriber(),
                        a = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        { verified_program_application_status: s, verified_user_profiles: b } = (0, m.Z)(),
                        f = b?.super_follows_user_profile?.is_active,
                        y = b?.ad_revenue_sharing_user_profile?.is_active,
                        _ = s?.super_follows_application_status || "NotStarted",
                        h = s?.ad_revenue_sharing_application_status || "NotStarted",
                        v = n.createElement(r.ZP, { icon: n.createElement(o.default, null), link: "https://help.x.com/using-x/x-premium-faq#item2", style: Y.helpCenterButton });
                    return (0, g.F9)({ subscriptionsApplicationStatus: _, revShareApplicationStatus: h, revShareActive: y, subscriptionsActive: f, isAnyPremiumSubscriber: l, monetizationUpsellEnabled: a }) ? n.createElement(u.nO, { namespace: { page: "monetization", section: "upsell" } }, n.createElement(c.A, { documentTitle: Q, history: e.history, isFullWidth: !0, onBackClick: () => e.history.goBack(), primaryContent: n.createElement(O, null), primaryContentLabel: Q, rightControl: v, sidebarContent: null })) : n.createElement(p.Z, { to: "/settings/monetization" });
                },
                J = n.memo(X),
                Y = l.default.create((e) => ({ helpCenterButton: { border: "none" } }));
        },
        620243: (e, t, i) => {
            i.d(t, { Z: () => a });
            var n = i(587510),
                r = (i(585488), i(535338));
            const l = n.Z,
                a = () => {
                    const { viewer: e } = (0, r.p)(l, {});
                    return e.user_results.result || {};
                };
        },
        698579: (e, t, i) => {
            i.d(t, { F9: () => I, Fx: () => Z, XS: () => u, Xb: () => P, j0: () => k });
            var n = i(688715),
                r = i(111677),
                l = i.n(r),
                a = i(234558),
                s = i(491831),
                o = i(521058),
                c = i(711223),
                d = i(720816);
            const u = Object.freeze({ adRev: "ad_revenue_sharing", subscriptions: "creator_subs", preRollAds: "pre_roll_video_ads" }),
                p = { Rejected: l().ibb5e1c8, Submitted: l().b255df58, Waitlisted: l().b3f834c8, Approved: l().bbe09d38, PendingIdv: l().efbc5066 },
                m = l().hc7631da,
                g = l().h72d71a2,
                b = l().e12b0b16,
                f = l().a1e57106,
                y = l().b5334780,
                _ = l().i51b4e22,
                h = l().h5bd7160,
                v = { CanVerifyIdentity: l().e32040c4, RequestLocked: l().d8f5cce4, PendingResult: l().j8769b42, IdentityNonVerifiable: h, UnavailableMissingBlueSubscription: h },
                k = { pathname: d.NW.stripeSetup, state: { cameFromEarningsDashboard: !0 } },
                w = { Icon: a.default, iconBGColor: "green600", heading: "Video Ads", description: "You are on track for payouts", id: u.preRollAds, pill: { label: "NEW", color: "gray1000" }, link: "/settings/ad_rev_share_dashboard", scribeComponent: "pre-roll-ads-dashboard" },
                E = { Icon: s.default, iconBGColor: "blue600", heading: l().d7b51c68, description: "", id: u.subscriptions, link: "/settings/monetization/subscriptions/dashboard", scribeComponent: "creator-subscription-dashboard" },
                C = (e) => ({ Icon: o.default, iconBGColor: "orange600", heading: e ? l().be955554 : l().b03a3d62, description: l().cbbe29c2, id: u.adRev, link: "/settings/ad_rev_share_dashboard", scribeComponent: "ad-revenue-sharing-dashboard" }),
                Z = { Icon: c.default, iconBGColor: "purple600", heading: l().g97a2d6c, description: l().f30774ea, id: "learn_more", link: (0, n.ju)("https://help.x.com/using-x/creator-dashboard"), scribeComponent: "learn-more" };
            function S(e, t) {
                return "ad_revenue_sharing" === e ? C(t) : "creator_subs" === e ? E : w;
            }
            function F(e) {
                return e === u.adRev ? "/settings/ad_rev_share_eligibility" : e === u.subscriptions ? "/settings/superfollows/application/eligibility" : e === u.preRollAds ? "/" : void 0;
            }
            function R(e) {
                return e === u.adRev ? "/settings/ad_rev_share_setup" : e === u.subscriptions ? "/settings/superfollows" : e === u.preRollAds ? "/" : void 0;
            }
            function x(e, t) {
                return e === u.adRev ? (t ? l().bce47f48 : l().h7a68080) : e === u.subscriptions ? l().aea0b11a : e === u.preRollAds ? "Earn income from pre-roll ads served on videos you upload to X." : "";
            }
            function z(e) {
                return e === u.adRev ? "creator-ad-revenue-sharing-setup" : e === u.subscriptions ? "creator-subscription-setup" : "creator-pre-roll-ads-setup";
            }
            function K(e, t) {
                return { label: t || (e ? g : b), color: t ? "orange50" : e ? "green500" : "magenta500" };
            }
            function P({ applicationStatus: e, eligibility: t, id: i, idvStatus: n, isActive: r, isPayoutSetupIncomplete: a = !1, pendingIdv: s = !1, rejectedCreatorCanReapply: o, revShareUpdateEnabled: c = !1 }) {
                const d = { ...S(i, c) },
                    g = 0 === t.length || (1 === t.length && "id_verified" === t[0]);
                if (r && !s) return d;
                const b = n ? v[n] : "";
                if (i === u.subscriptions) {
                    const n = "NotStarted" === e || ("Rejected" === e && o),
                        r = "Rejected" === e && !o;
                    let a;
                    (d.link = r ? "/settings/superfollows/application/rejected" : n ? (g ? R(i) : F(i)) : void 0),
                        s ? (a = f) : r ? (a = _) : n || (a = y),
                        (d.description = (function (e, t, i, n, r, a) {
                            return e ? r : "Rejected" === t && a ? l().aea0b11a : p[t] || x(i, n);
                        })(s, e, i, c, b, o)),
                        (d.disabled = t.includes("generic_violation") || t.includes("do_not_charge")),
                        (d.pill = K(g, a)),
                        (d.scribeComponent = z(i));
                }
                return i === u.adRev && ((d.link = s || a ? void 0 : g ? R(i) : F(i)), (d.description = s ? b : a ? m : x(i, c)), (d.disabled = t.includes("generic_violation") || t.includes("do_not_charge") || t.includes("verified_type")), (d.pill = K(g, a || s ? f : void 0)), (d.scribeComponent = z(i))), i === u.preRollAds && ((d.link = a ? k : g ? R(i) : F(i)), (d.description = a ? m : x(i, c)), (d.disabled = t.includes("generic_violation") || t.includes("do_not_charge") || t.includes("verified_type")), (d.pill = K(g, a ? f : void 0)), (d.scribeComponent = z(i))), d;
            }
            const I = (e) => "NotStarted" === e.subscriptionsApplicationStatus && "NotStarted" === e.revShareApplicationStatus && !e.revShareActive && !e.subscriptionsActive && !e.revShareActive && !e.subscriptionsActive && !e.isAnyPremiumSubscriber && e.monetizationUpsellEnabled;
        },
        228477: (e, t, i) => {
            i.d(t, { Z: () => v });
            var n = i(202784),
                r = i(325686),
                l = i(891198),
                a = i(731708),
                s = i(420412),
                o = i(392237),
                c = i(111677),
                d = i.n(c),
                u = i(293723),
                p = i(263272),
                m = i(443781);
            const g = d().f09be7f8,
                b = d().c5f89b06,
                f = d().ff9f4475,
                y = d().b747ce3a,
                _ = d().c27f57ac,
                h = d().h63d2973,
                v = ({ failedRequirements: e }) => {
                    const { featureSwitches: t } = (0, m.QZ)(),
                        i = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        o = t.getNumberValue("creator_subscriptions_eligibility_verified_followers", 2e3),
                        c = t.getNumberValue("creator_subscriptions_eligibility_impressions", 5e6),
                        d = l.ZP.getTruncatedCount(o),
                        v = l.ZP.getTruncatedCount(c),
                        w = f({ minFollowersCount: d }),
                        E = [
                            { label: i ? b : g, checked: !e.includes("blue_subscription") },
                            { label: w, checked: !e.includes("followers") },
                            { label: h({ count: v }), checked: !e.includes("impressions") },
                            { label: y, checked: !e.includes("tweets") },
                            { label: _, checked: !e.includes("age") },
                        ];
                    return n.createElement(
                        r.Z,
                        { style: k.root },
                        E.map((e, t, i) => n.createElement(n.Fragment, { key: t }, n.createElement(r.Z, { key: e.label, style: k.item }, n.createElement(a.ZP, { style: k.label, weight: "bold" }, e.label), e.checked ? n.createElement(u.default, { style: k.iconChecked }) : n.createElement(p.default, { style: k.iconUnchecked })), i.length !== t + 1 && n.createElement(s.Z, null))),
                    );
                },
                k = o.default.create((e) => ({ root: { backgroundColor: e.colors.gray0, padding: e.spaces.space12, borderRadius: e.borderRadii.medium, gap: e.spaces.space8 }, gap: { gap: e.spaces.space24 }, item: { flexDirection: "row" }, label: { flex: 1, marginEnd: e.spaces.space8 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 } }));
        },
        720816: (e, t, i) => {
            i.d(t, { $w: () => c, D1: () => s, Jz: () => r, Km: () => d, LI: () => n, NW: () => a, o5: () => o, wU: () => l });
            const n = "/settings/monetization",
                r = "/settings/superfollows",
                l = Object.freeze({ root: `${r}/application`, eligibility: `${r}/application/eligibility`, pricing: `${r}/application/pricing`, completeProfile: `${r}/application/complete_profile`, submit: `${r}/application/submit`, submitted: `${r}/application/submitted`, waitlisted: `${r}/application/waitlisted`, rejected: `${r}/application/rejected` }),
                a = Object.freeze({ root: `${r}/onboarding`, perksIntro: `${r}/onboarding/perks_intro`, perksDescription: `${r}/onboarding/perks_description`, perksBadges: `${r}/onboarding/perks_badges`, perksConfirm: `${r}/onboarding/perks_confirm`, pricing: `${r}/onboarding/pricing`, pricingConfirm: `${r}/onboarding/pricing_confirm`, stripeSetup: `${r}/onboarding/stripe_setup`, stripePending: `${r}/onboarding/stripe_pending`, stripeCompleted: `${r}/onboarding/stripe_completed` }),
                s = Object.freeze({ root: `${r}/management`, perksIntro: `${r}/management/perks_intro`, perksDescription: `${r}/management/perks_description`, perksConfirm: `${r}/management/perks_confirm`, perksPricing: `${r}/management/perks_pricing` }),
                o = `${r}/perks_intro_examples`,
                c = `${r}/perks_description_examples`,
                d = `${r}/perks_preview`;
        },
        420412: (e, t, i) => {
            i.d(t, { Z: () => o });
            var n = i(202784),
                r = i(325686),
                l = i(235902),
                a = i(885015),
                s = i(392237);
            function o({ borderColor: e = "borderColor", isSlim: t = !1, label: i }) {
                const { isWebRedesign: o } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return i ? n.createElement(a.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] })), n.createElement(r.Z, { style: c.gapText }, i), n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] }))) : n.createElement(r.Z, { style: [!t && c.root, o() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, i) => {
            i.d(t, { Z: () => c });
            var n = i(807896),
                r = i(202784),
                l = i(325686),
                a = i(392237);
            class s extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: i, ...a } = this.props,
                        s = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, o.column, i && o.withGutterColumn] }));
                    return r.createElement(l.Z, (0, n.Z)({ style: [t, o.root, i && o.withGutter] }, a), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const o = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        779610: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n = i(202784),
                r = i(325686),
                l = i(191796),
                a = i(58399),
                s = i(731708),
                o = i(952428),
                c = i(392237);
            const d = (e) => {
                    const { decoration: t, description: i, disabled: d = !1, isActive: p = !1, label: m, link: g, onPress: b, paddingHorizontal: f, renderRightContent: y, role: _ = "tab", styleOverride: h, testID: v = "pivot", thumbnail: k, thumbnailSize: w, withoutArrow: E = !1 } = e,
                        C = [u.thumbnailContainer, "medium" === w && u.thumbnailContainerMedium],
                        Z = "string" == typeof m ? n.createElement(s.ZP, null, m) : m,
                        S = "object" == typeof g && g.external && !g.openInSameFrame,
                        F = i ? ("string" == typeof i ? n.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${v}-description` }, i) : i) : null,
                        R = n.useMemo(() => ("space0" === f ? { paddingHorizontal: 0 } : { paddingHorizontal: f ? c.default.theme.spaces[f] : c.default.theme.componentDimensions.gutterHorizontal }), [f]);
                    return n.createElement(o.Z, { "aria-selected": "tab" === _ ? p : null, disabled: d, link: d ? void 0 : g, onPress: b, role: _, style: [u.root, R, d && u.disabled, h], testID: v, withInteractiveStyling: !!g || !!b }, n.createElement(r.Z, { style: u.contentContainer }, k ? n.createElement(r.Z, { style: C }, k) : null, n.createElement(r.Z, { style: u.content }, Z, F), y ? y() : null, (!g && !b) || d || E ? null : S ? n.createElement(l.default, { style: u.icon }) : n.createElement(a.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.MonetizationV2.6fb708aa.js.map
