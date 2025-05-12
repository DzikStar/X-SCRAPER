"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SuperFollowsSubscribe"],
    {
        879101: (e, a, l) => {
            l.d(a, { Z: () => m });
            var n = l(202784),
                r = l(688715),
                t = l(731708),
                s = l(392237),
                i = l(674132),
                o = l.n(i);
            const c = (0, r.ju)("https://legal.x.com/purchaser-terms"),
                u = o().bc42db1c,
                d = s.default.create((e) => ({ recurring: { marginStart: e.spaces.space4 } })),
                m = ({ recurring: e, style: a }) => n.createElement(t.ZP, { color: "gray700", style: a }, n.createElement(o().I18NFormatMessage, { $i18n: "cd5e4a77" }, n.createElement(t.ZP, { color: "plum500", link: c }, o().f1561b06)), e ? n.createElement(t.ZP, { style: d.recurring }, u) : null);
        },
        359870: (e, a, l) => {
            l.d(a, { Z: () => i, b: () => s });
            var n = l(674132);
            const r = l.n(n)().g33c0564,
                t = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}$/,
                s = 385;
            function i(e) {
                return e.length > s ? r : t.test(e) ? void 0 : r;
            }
        },
        767508: (e, a, l) => {
            l.r(a), l.d(a, { default: () => h });
            var n = l(807896),
                r = l(202784),
                t = l(669406),
                s = l(325686),
                i = l(154003),
                o = l(392237),
                c = l(674132),
                u = l.n(c),
                d = l(980407),
                m = l(569778),
                g = l(293115);
            const p = u().a0b4541c,
                _ = u().a5634d9a,
                y = u().a893d602,
                b = { page: "super_follows_subscription_failure" },
                k = o.default.create((e) => ({ button: { marginTop: e.spaces.space36, width: "100%" }, wrapper: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: "auto", marginHorizontal: e.spaces.space80, alignItems: "center", justifyContent: "center" } })),
                f = (e) => {
                    const { history: a, match: l } = e,
                        n = l.params.screenName,
                        t = n ? `/${n}/superfollows/subscribe` : "/home";
                    return r.createElement(g.nO, { namespace: b }, r.createElement(d.Z, { backButtonType: "close", backLocation: t, history: a }, r.createElement(s.Z, { style: k.wrapper }, r.createElement(m.Z, { headline: p, illustration: m.j.ConfusedDog, subtext: _ }), r.createElement(i.ZP, { onPress: () => a.replace(t), size: "xLarge", style: k.button, type: "primaryFilled" }, y))));
                },
                h = (e) => r.createElement(t.Z, (0, n.Z)({}, e, { component: f }));
        },
        518983: (e, a, l) => {
            l.r(a), l.d(a, { default: () => qe });
            var n,
                r,
                t,
                s,
                i,
                o,
                c,
                u,
                d,
                m,
                g,
                p,
                _ = l(807896),
                y = l(202784),
                b = l(669406),
                k = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "SuperFollowsSubscribeQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (r = [
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "screen_name", variableName: "screenName" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "super_follow_eligible", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "super_following", storageKey: null }), { args: null, kind: "FragmentSpread", name: "SuperFollowsSubscribeScreen_user" }], type: "User", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                            { alias: "viewer", args: (o = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { args: null, kind: "FragmentSpread", name: "SuperFollowsSubscribeScreen_viewer" }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "SuperFollowsSubscribeQuery",
                        selections: [
                            {
                                alias: "user",
                                args: r,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
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
                                            t,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    s,
                                                    i,
                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }, (c = { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }), (u = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), (m = { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null })], storageKey: null },
                                                    (g = { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }),
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "AudienceRewardsProductMetadata",
                                                        kind: "LinkedField",
                                                        name: "super_follow_creator_product_metadata",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "amount", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "product_id", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "tax_amount", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "VerifiedProgramsCreatorFeatures", kind: "LinkedField", name: "verified_program_creator_features", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "email_sharing_from_subscribers_enabled", storageKey: null }], storageKey: null },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "AudienceRewardsBenefitsData",
                                                        kind: "LinkedField",
                                                        name: "super_follow_creator_benefits",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "AudienceRewardsBenefitInfo",
                                                                kind: "LinkedField",
                                                                name: "benefits_data",
                                                                plural: !0,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "benefit_type", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, kind: "ScalarField", name: "creator_intro", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (p = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    p,
                                ],
                                storageKey: null,
                            },
                            { alias: "viewer", args: o, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [c, m, { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, d, u], storageKey: null }, g, { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }, { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null }, p], type: "User", abstractKey: null }], storageKey: null }, p], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                    },
                    params: { id: "BDZY01rA92hc4jVy5VL6zA", metadata: { features: ["creator_subscriptions_email_share_enabled", "super_follow_subscriptions_tax_calculation_enabled"] }, name: "SuperFollowsSubscribeQuery", operationKind: "query", text: null },
                };
            k.hash = "b5ca6f3d0c226d006500f7a642421be5";
            const f = k;
            l(585488);
            var h = l(107267),
                S = l(154003),
                v = l(392237),
                F = l(674132),
                w = l.n(F),
                K = l(980407),
                E = l(724345),
                Z = l(783373),
                L = l(883229),
                C = l(943914),
                T = l(293115),
                x = l(28557),
                V = l(535338),
                N = l(615027),
                U =
                    (l(136728),
                    {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "SuperFollowsSubscribeScreen_viewer",
                        selections: [
                            { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
                            { args: null, kind: "FragmentSpread", name: "SuperFollowsSubscribeSellSheet_viewer" },
                        ],
                        type: "User",
                        abstractKey: null,
                        hash: "2346846c87f6b76cd76ea9b834745cff",
                    });
            const B = U;
            var P = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsSubscribeScreen_user",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }, action: "THROW" },
                            { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: "AudienceRewardsProductMetadata",
                        kind: "LinkedField",
                        name: "super_follow_creator_product_metadata",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "amount", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "product_id", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "tax_amount", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "VerifiedProgramsCreatorFeatures", kind: "LinkedField", name: "verified_program_creator_features", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "email_sharing_from_subscribers_enabled", storageKey: null }], storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsSubscribeSellSheet_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "8cc9851e7df50c2a31cb138abffb7743",
            };
            const z = P;
            var M = l(576648),
                A = l(325686),
                R = l(277660),
                I = l.n(R),
                D = l(811176),
                H = l(167630),
                $ = l(708852),
                j = l(630715),
                O = l(786272),
                q = l(73664),
                W = l(952793),
                Q = l(782642),
                G = l(97882),
                X = l(782826),
                Y = l(359870),
                J = l(725516),
                ee = l(688715),
                ae = l(731708),
                le = l(96083),
                ne = l(855488),
                re = l(725405);
            const te = w().be03ecca,
                se = (0, ee.ju)("https://help.x.com/using-x/creator-email-sharing"),
                ie = (0, ee.ju)("https://legal.x.com/creator-email-sharing-terms.html"),
                oe = w().i859a9d4,
                ce = v.default.create((e) => ({ learnMore: { marginStart: e.spaces.space4 }, row: { flexDirection: "row", gap: e.spaces.space16 }, noSpacing: { paddingHorizontal: "0" } })),
                ue = ({ consented: e, creatorName: a, setConsented: l, setSubscriptionEmail: n, subscriptionEmail: r }) => {
                    const [t, s] = y.useState(),
                        i = (0, re.Z)(),
                        o = y.useCallback(() => {
                            r && s((0, Y.Z)(r));
                        }, [s, r]),
                        c = y.useCallback((e) => n(e.currentTarget.value), [n]),
                        u = y.useCallback(
                            (e) => {
                                i.scribe({ section: "email_share_consent", element: "consent_checkbox", action: e ? "accept" : "clear" }), l(e), e || (n(""), s(""));
                            },
                            [i, l, n],
                        ),
                        d = y.useMemo(() => ({ elements: { link: y.createElement(ae.ZP, { color: "plum500", link: ie }) }, variables: { creatorName: a } }), [a]);
                    return y.createElement(A.Z, null, y.createElement(A.Z, { style: ce.row }, y.createElement(le.Z, { checked: e, onChange: u }), y.createElement(ae.ZP, { color: "gray700" }, y.createElement(w().I18NFormatMessage, { $i18n: "fca299bb", creatorName: d.variables.creatorName }, y.cloneElement(d.elements.link, null, w().e6c72234)), y.createElement(ae.ZP, { color: "plum500", link: se, style: ce.learnMore }, oe))), y.createElement(ne.Z, { editable: e, errorText: t, invalid: !!t, label: te, name: "subscriptionEmailAddress", onBlur: o, onChange: c, style: ce.noSpacing, testID: "subscriptionEmailAddress", value: r }));
                };
            var de = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsSubscribeSellSheet_viewer",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, action: "THROW" },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "72643e92665ad020b030f3f68515d153",
            };
            const me = de;
            var ge = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsSubscribeSellSheet_user",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }, action: "THROW" },
                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: "AudienceRewardsBenefitsData",
                        kind: "LinkedField",
                        name: "super_follow_creator_benefits",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "AudienceRewardsBenefitInfo",
                                kind: "LinkedField",
                                name: "benefits_data",
                                plural: !0,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "benefit_type", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                ],
                                storageKey: null,
                            },
                            { alias: null, args: null, kind: "ScalarField", name: "creator_intro", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "6d5d948a571d822cae9ae0b570ac834d",
            };
            const pe = ge;
            var _e = l(879101),
                ye = l(8685);
            const be = pe,
                ke = me,
                fe = (e) => {
                    const { children: a, emailShareElement: l, isWide: n, user: r, viewer: t } = e,
                        s = I()(be, r),
                        i = I()(ke, t),
                        o = s.legacy?.name ?? void 0,
                        c = s.legacy?.profile_image_url_https ?? void 0,
                        u = s.legacy?.screen_name ?? void 0,
                        d = s.super_follow_creator_benefits?.creator_intro ?? void 0,
                        m = (s.super_follow_creator_benefits?.benefits_data ?? []).find((e) => "ExclusiveContent" === e.benefit_type),
                        g = m?.description ?? void 0,
                        p = i.legacy?.profile_image_url_https ?? void 0,
                        _ = i.legacy?.name ?? void 0,
                        b = i.legacy?.screen_name ?? void 0,
                        k = i.legacy?.protected ?? void 0,
                        f = i.verification?.verified ?? void 0,
                        h = i?.is_blue_verified ?? void 0,
                        S = y.useMemo(() => [he.subscribeButtonContainer, n && he.subscribeButtonContainerWide], [n]);
                    return y.createElement(y.Fragment, null, y.createElement(ye.Z, { badgeImageUrl: p, badgeName: _, badgeScreenName: b, descriptionValue: g, imageUrl: c, introValue: d, isBlueVerified: h, isProtected: k, isVerified: f, name: o, screenName: u }), y.createElement(A.Z, { style: S }, l, y.createElement(_e.Z, { recurring: !0, style: he.disclaimer }), a));
                },
                he = v.default.create((e) => ({ disclaimer: { marginVertical: e.spaces.space24 }, subscribeButtonContainer: { alignItems: "center", flexGrow: 1, marginBottom: e.spaces.space40, marginTop: e.spaces.space48, paddingHorizontal: e.spaces.space32 }, subscribeButtonContainerWide: { paddingHorizontal: e.spaces.space48 } }));
            var Se = (function () {
                var e = { defaultValue: null, kind: "LocalArgument", name: "consented" },
                    a = { defaultValue: null, kind: "LocalArgument", name: "creator_id" },
                    l = { defaultValue: null, kind: "LocalArgument", name: "email" },
                    n = [
                        {
                            alias: null,
                            args: [
                                { kind: "Literal", name: "consent_type", value: "EmailSharingSubscriberToCreator" },
                                { kind: "Variable", name: "consented", variableName: "consented" },
                                { kind: "Variable", name: "creator_id", variableName: "creator_id" },
                                {
                                    items: [
                                        {
                                            fields: [
                                                { kind: "Literal", name: "key", value: "email" },
                                                { kind: "Variable", name: "value", variableName: "email" },
                                            ],
                                            kind: "ObjectValue",
                                            name: "metadata.0",
                                        },
                                    ],
                                    kind: "ListValue",
                                    name: "metadata",
                                },
                                { kind: "Literal", name: "s", value: "5551" },
                            ],
                            concreteType: "VerifiedProgramsConsentResponse",
                            kind: "LinkedField",
                            name: "subscriber_consent",
                            plural: !1,
                            selections: [{ alias: null, args: null, kind: "ScalarField", name: "acknowledged", storageKey: null }],
                            storageKey: null,
                        },
                    ];
                return { fragment: { argumentDefinitions: [e, a, l], kind: "Fragment", metadata: null, name: "useEmailShareConsentUpdateMutation", selections: n, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [l, a, e], kind: "Operation", name: "useEmailShareConsentUpdateMutation", selections: n }, params: { id: "cpdX3u0AUkdRb5mc3LpVpg", metadata: {}, name: "useEmailShareConsentUpdateMutation", operationKind: "mutation", text: null } };
            })();
            Se.hash = "c3538b09e6ebfaf72cfafe1dcdd48251";
            const ve = Se;
            var Fe = l(351743),
                we = l.n(Fe);
            const Ke = ve;
            l(571372);
            var Ee = (function () {
                var e = [
                        { defaultValue: null, kind: "LocalArgument", name: "cancel_url" },
                        { defaultValue: null, kind: "LocalArgument", name: "external_product_id" },
                        { defaultValue: null, kind: "LocalArgument", name: "success_url" },
                    ],
                    a = [
                        {
                            alias: null,
                            args: [
                                { kind: "Variable", name: "cancel_url", variableName: "cancel_url" },
                                { kind: "Variable", name: "external_product_id", variableName: "external_product_id" },
                                { kind: "Literal", name: "s", value: "4721" },
                                { kind: "Variable", name: "success_url", variableName: "success_url" },
                            ],
                            concreteType: "WebSubscriptionCheckoutSession",
                            kind: "LinkedField",
                            name: "subscriptioncheckoutsession_create_v2",
                            plural: !1,
                            selections: [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }],
                            storageKey: null,
                        },
                    ];
                return { fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "useSuperFollowsCreateStripeSubscriptionUrlMutation", selections: a, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: e, kind: "Operation", name: "useSuperFollowsCreateStripeSubscriptionUrlMutation", selections: a }, params: { id: "1nNykZ_aQohdxHKoykBVmg", metadata: {}, name: "useSuperFollowsCreateStripeSubscriptionUrlMutation", operationKind: "mutation", text: null } };
            })();
            Ee.hash = "759d9c15b4318f3e6cf9204063fd8da0";
            const Ze = Ee,
                Le = w().d2613123,
                Ce = w().ef4602ec,
                Te = w().c4640fc0,
                xe = w().a72064a8,
                Ve = w().f88553c8,
                Ne = z,
                Ue = B,
                Be = (e) => {
                    const { screenName: a, user: l, viewer: n } = e,
                        r = (0, W.hC)("subscriptions_marketing_page_include_tax_enabled"),
                        t = (0, W.hC)("super_follow_subscriptions_tax_calculation_enabled"),
                        s = (0, W.hC)("creator_subscriptions_email_share_enabled"),
                        [i, o] = y.useState(""),
                        [c, u] = y.useState(!1),
                        d = y.useRef(),
                        m = (0, q.R)(d, { threshold: 0.5 }),
                        g = (0, J.z)(),
                        p = I()(Ne, l),
                        b = I()(Ue, n),
                        k = (0, h.useHistory)(),
                        f = (0, Q.p)(),
                        v = p.legacy?.id_str ?? void 0,
                        F = p.legacy?.screen_name ?? void 0,
                        w = ((e, a, l, n) => {
                            let r = e;
                            return l && n && (r += a), r;
                        })(p.super_follow_creator_product_metadata?.amount ?? 0, p.super_follow_creator_product_metadata?.tax_amount ?? 0, r, t),
                        E = p.super_follow_creator_product_metadata?.currency_code ?? void 0,
                        Z = p.super_follow_creator_product_metadata?.product_id ?? void 0,
                        L = b.legacy?.id_str ?? void 0,
                        { href: C, origin: T } = X.ZP.get(),
                        x = F ? `${T}/${F}/creator-subscriptions/subscribe/success` : T,
                        V = F ? `${T}/${F}/creator-subscriptions/subscribe/failure` : T,
                        [N, U] = (({ cancelUrl: e, productId: a, successUrl: l }) => {
                            const [n, r] = we()(Ze);
                            return [
                                y.useCallback(
                                    () =>
                                        a
                                            ? new Promise((r, t) => {
                                                  n({
                                                      variables: { cancel_url: e, external_product_id: a, success_url: l },
                                                      onCompleted: (e, a) => {
                                                          const l = e.subscriptioncheckoutsession_create_v2?.session_url;
                                                          l ? r(l) : t(new Error("Missing session URL"));
                                                      },
                                                      onError: t,
                                                  });
                                              })
                                            : Promise.reject(new Error("Missing product ID")),
                                    [n, e, a, l],
                                ),
                                r,
                            ];
                        })({ productId: Z, successUrl: x, cancelUrl: V }),
                        [B] = (() => {
                            const [e, a] = we()(Ke);
                            return [
                                y.useCallback(
                                    ({ consented: a, creatorId: l, email: n }) =>
                                        new Promise((r, t) => {
                                            e({
                                                variables: { consented: a, creator_id: l, email: n },
                                                onCompleted: (e, a) => {
                                                    r(!!e?.subscriber_consent?.acknowledged);
                                                },
                                                onError: t,
                                            });
                                        }),
                                    [e],
                                ),
                                a,
                            ];
                        })(),
                        P = y.useMemo(() => {
                            let e = (0, X.G3)(k.location);
                            const a = k.getLastNonModalLocationPathname() || "";
                            !(0, X.d)(k.location) && F && a.includes(`${F}/status`) && (e = "tweet");
                            const l = p.legacy?.id_str ? { creator_user_id: p.legacy.id_str, referring_page: e } : void 0;
                            return { items: [{ is_viewer_follows_user: !!p.legacy?.following, super_follow_details: l }] };
                        }, [F, p, k]);
                    y.useEffect(() => {
                        g.scribe({ element: "subscribe_screen", action: "impression", data: P });
                    }, [P, g]);
                    const z = s && !!p.verified_program_creator_features?.email_sharing_from_subscribers_enabled,
                        R = z && c,
                        ee = R && (!i || !!(0, Y.Z)(i)),
                        ae = p.legacy?.name ?? "",
                        le = z ? y.createElement(ue, { consented: c, creatorName: ae, setConsented: u, setSubscriptionEmail: o, subscriptionEmail: i }) : null,
                        ne = Te,
                        re = xe,
                        te = y.useCallback(() => {
                            g.scribe({ element: "subscribe_button", action: "click", data: P });
                            const e =
                                    R && !ee && v
                                        ? B({ email: i, creatorId: v, consented: c })
                                              .then((e) => {
                                                  g.scribe({ element: "email_share_consent_update", action: e ? "success" : "error", data: P });
                                              })
                                              .catch(() => {
                                                  g.scribe({ element: "email_share_consent_update", action: "error", data: P });
                                              })
                                        : null,
                                a = N().catch(() => {
                                    f({ text: Ce });
                                });
                            Promise.all([a, e]).then(([e]) => {
                                e && X.ZP.navigateTo(e);
                            });
                        }, [g, v, P, R, ee, N, B, i, c, f]),
                        se = y.useCallback(() => {
                            M.Z.setString(C), f({ text: Ve }), g.scribe({ action: "share", data: P });
                        }, [f, g, C, P]),
                        ie = y.useCallback(
                            (e) => {
                                const a = [];
                                return a.push({ text: re, Icon: j.default, onClick: se }), g.scribe({ element: "share", action: "click", data: P }), y.createElement(D.Z, { items: a, onCloseRequested: e });
                            },
                            [g, re, se, P],
                        ),
                        oe = E && w ? ((e, a) => G.T[e.toUpperCase()](parseInt(a, 10) / 1e6))(E, w) : void 0,
                        ce = { disabled: (v && L && v === L) || U || !Z || ee, onPress: te },
                        de = y.createElement(S.ZP, (0, _.Z)({}, ce, { backgroundColor: "plum500", borderColor: "transparent", color: "white", ref: d, size: "xLarge", style: Pe.bigSubscribeButton }), U ? y.createElement(H.Z, null) : Le({ price: oe })),
                        me = y.createElement(S.ZP, (0, _.Z)({}, ce, { disabled: ce.disabled && !m, size: "small", style: [Pe.transitionOpacity, m ? Pe.opacityNone : void 0], type: "primaryFilled" }), U ? y.createElement(H.Z, { size: "small" }) : Le({ price: oe })),
                        ge = y.createElement(S.ZP, { "aria-label": ne, hoverLabel: { label: ne }, icon: y.createElement(O.default, null), renderMenu: ie, size: "small", style: Pe.shareButton, type: "primaryText" }),
                        pe = y.createElement(A.Z, { style: Pe.rightControl }, me, ge),
                        _e = (0, $.$u)();
                    return y.createElement(K.Z, { backButtonType: "back", backLocation: `/${a}/superfollows`, children: y.createElement(fe, { children: de, emailShareElement: le, isWide: _e, user: p, viewer: b }), history: k, rightControl: pe });
                },
                Pe = v.default.create((e) => ({ bigSubscribeButton: { width: "100%" }, opacityNone: { opacity: 0 }, rightControl: { flexDirection: "row" }, shareButton: { marginStart: e.spaces.space16 }, transitionOpacity: { transition: "opacity 0.2s 0s ease-in-out" } })),
                ze = w().g61ed8a4,
                Me = w().c3d23f10,
                Ae = w().d338f53e,
                Re = f,
                Ie = { context: "SuperFollowsSubscribe" },
                De = { page: "super_follows_marketing" },
                He = ({ screenName: e }) => {
                    const a = { screenName: (0, x.Z)(e) },
                        l = (0, V.p)(Re, a),
                        n = l?.user?.result,
                        r = l?.viewer?.user_results?.result;
                    return n && r ? (n.super_following ? y.createElement(N.Z, { to: `/${e}/creator-subscriptions/manage` }) : n.super_follow_eligible ? y.createElement(T.nO, { namespace: De }, y.createElement(Be, { screenName: e, user: n, viewer: r })) : y.createElement(N.Z, { to: `/${e}` })) : null;
                },
                $e = () => {
                    const e = (0, h.useHistory)(),
                        a = (0, h.useParams)().screenName || "",
                        l = y.useMemo(
                            () => ({
                                type: "CustomRetry",
                                content: (l) => {
                                    const n = y.createElement(E.Z, { style: Oe.error }, y.createElement(Z.Z, { description: Me, title: ze }), y.createElement(S.ZP, { onPress: l, style: Oe.errorButton, type: "brandFilled" }, Ae));
                                    return y.createElement(K.Z, { backButtonType: "close", backLocation: `/${a}`, children: n, history: e });
                                },
                            }),
                            [e, a],
                        );
                    return y.createElement(L.N, { errorConfig: Ie, fallback: l }, y.createElement(C.B, null, y.createElement(He, { screenName: a })));
                },
                je = y.memo($e),
                Oe = v.default.create((e) => ({ error: { marginTop: e.spaces.space12, marginBottom: e.spaces.space40, width: "100%" }, errorButton: { marginTop: e.spaces.space32 } })),
                qe = (e) => y.createElement(b.Z, (0, _.Z)({}, e, { component: je }));
        },
        273961: (e, a, l) => {
            l.r(a), l.d(a, { default: () => f });
            var n = l(807896),
                r = l(202784),
                t = l(669406),
                s = l(325686),
                i = l(154003),
                o = l(392237),
                c = l(674132),
                u = l.n(c),
                d = l(980407),
                m = l(569778),
                g = l(293115);
            const p = u().b17f0c4b,
                _ = u().a893d602,
                y = { page: "super_follows_subscription_success" },
                b = o.default.create((e) => ({ button: { marginTop: e.spaces.space36, width: "100%" }, wrapper: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: "auto", marginHorizontal: e.spaces.space80, alignItems: "center", justifyContent: "center" } })),
                k = (e) => {
                    const { history: a, match: l } = e,
                        n = l.params.screenName,
                        t = n ? `/${n}` : "/home";
                    return r.createElement(g.nO, { namespace: y }, r.createElement(d.Z, { backButtonType: "close", backLocation: t, history: a }, r.createElement(s.Z, { style: b.wrapper }, r.createElement(m.Z, { headline: p({ screenName: n }), illustration: m.j.Success }), r.createElement(i.ZP, { onPress: () => a.replace(t), size: "xLarge", style: b.button, type: "primaryFilled" }, _))));
                },
                f = (e) => r.createElement(t.Z, (0, n.Z)({}, e, { component: k }));
        },
        669406: (e, a, l) => {
            l.d(a, { Z: () => m });
            var n = l(202784),
                r = l(325686),
                t = l(107267),
                s = l(392237),
                i = l(980407),
                o = l(952793),
                c = l(923128),
                u = l(668214),
                d = l(390387);
            const m = (0, u.Z)().propsFromState(() => ({ isLoggedIn: d.Qb }))(({ component: e, isLoggedIn: a, ...l }) => {
                    const s = (0, t.useParams)().screenName || "",
                        u = n.createElement(i.Z, { backLocation: `/${s}`, history: l.history }, n.createElement(r.Z, { style: g.wrapper }, n.createElement(c.Z, { history: l.history, location: l.location, match: l.match }))),
                        d = (0, o.hC)("super_follow_android_web_subscription_enabled");
                    return !a || !d ? u : n.createElement(e, l);
                }),
                g = s.default.create((e) => ({ modalContainerStyle: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: "auto", alignItems: "center", justifyContent: "center" }, wrapper: { alignItems: "center", justifyContent: "center" } }));
        },
        988227: (e, a, l) => {
            l.r(a), l.d(a, { default: () => o });
            var n = l(202784),
                r = l(890601),
                t = l(783427),
                s = l(347101);
            const i = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: a });
            };
            i.metadata = { width: 24, height: 24 };
            const o = i;
        },
        432181: (e, a, l) => {
            l.r(a), l.d(a, { default: () => o });
            var n = l(202784),
                r = l(890601),
                t = l(783427),
                s = l(347101);
            const i = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" })) }, { writingDirection: a });
            };
            i.metadata = { width: 24, height: 24 };
            const o = i;
        },
        748138: (e, a, l) => {
            l.r(a), l.d(a, { default: () => o });
            var n = l(202784),
                r = l(890601),
                t = l(783427),
                s = l(347101);
            const i = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: a });
            };
            i.metadata = { width: 24, height: 24 };
            const o = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SuperFollowsSubscribe.54df071a.js.map
