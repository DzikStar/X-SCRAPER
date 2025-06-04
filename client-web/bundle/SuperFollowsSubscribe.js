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
                i = l(111677),
                o = l.n(i);
            const c = (0, r.ju)("https://legal.x.com/purchaser-terms"),
                u = o().bc42db1c,
                d = s.default.create((e) => ({ recurring: { marginStart: e.spaces.space4 } })),
                m = ({ recurring: e, style: a }) => n.createElement(t.ZP, { color: "gray700", style: a }, n.createElement(o().I18NFormatMessage, { $i18n: "cd5e4a77" }, n.createElement(t.ZP, { color: "plum500", link: c }, o().f1561b06)), e ? n.createElement(t.ZP, { style: d.recurring }, u) : null);
        },
        359870: (e, a, l) => {
            l.d(a, { Z: () => i, b: () => s });
            var n = l(111677);
            const r = l.n(n)().g33c0564,
                t = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}$/,
                s = 385;
            function i(e) {
                return e.length > s ? r : t.test(e) ? void 0 : r;
            }
        },
        767508: (e, a, l) => {
            l.r(a), l.d(a, { default: () => S });
            var n = l(807896),
                r = l(202784),
                t = l(669406),
                s = l(325686),
                i = l(154003),
                o = l(392237),
                c = l(111677),
                u = l.n(c),
                d = l(980407),
                m = l(569778),
                p = l(293115);
            const g = u().a0b4541c,
                y = u().a5634d9a,
                _ = u().a893d602,
                b = { page: "super_follows_subscription_failure" },
                k = o.default.create((e) => ({ button: { marginTop: e.spaces.space36, width: "100%" }, wrapper: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: "auto", marginHorizontal: e.spaces.space80, alignItems: "center", justifyContent: "center" } })),
                f = (e) => {
                    const { history: a, match: l } = e,
                        n = l.params.screenName,
                        t = n ? `/${n}/superfollows/subscribe` : "/home";
                    return r.createElement(p.nO, { namespace: b }, r.createElement(d.Z, { backButtonType: "close", backLocation: t, history: a }, r.createElement(s.Z, { style: k.wrapper }, r.createElement(m.Z, { headline: g, illustration: m.j.ConfusedDog, subtext: y }), r.createElement(i.ZP, { onPress: () => a.replace(t), size: "xLarge", style: k.button, type: "primaryFilled" }, _))));
                },
                S = (e) => r.createElement(t.Z, (0, n.Z)({}, e, { component: f }));
        },
        518983: (e, a, l) => {
            l.r(a), l.d(a, { default: () => Oe });
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
                p,
                g = l(807896),
                y = l(202784),
                _ = l(669406),
                b = {
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
                                                    (c = {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserCore",
                                                        kind: "LinkedField",
                                                        name: "core",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    }),
                                                    (u = { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null }),
                                                    (d = { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }),
                                                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }], storageKey: null },
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
                                                    (m = { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }),
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
                            { alias: "viewer", args: o, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [u, d, { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }, m, c, { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null }, p], type: "User", abstractKey: null }], storageKey: null }, p], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                    },
                    params: { id: "mJrB5JhRQNjGznLAA_8Tfw", metadata: { features: ["creator_subscriptions_email_share_enabled", "super_follow_subscriptions_tax_calculation_enabled"] }, name: "SuperFollowsSubscribeQuery", operationKind: "query", text: null },
                };
            b.hash = "b5ca6f3d0c226d006500f7a642421be5";
            const k = b;
            l(585488);
            var f = l(107267),
                S = l(154003),
                F = l(392237),
                v = l(111677),
                h = l.n(v),
                w = l(980407),
                K = l(724345),
                E = l(783373),
                L = l(883229),
                Z = l(943914),
                C = l(293115),
                T = l(28557),
                U = l(535338),
                x = l(615027),
                P =
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
            const N = P;
            var V = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsSubscribeScreen_user",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }], storageKey: null },
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
                hash: "0758ef01f3af75b1be4ac05ba6a4ca2b",
            };
            const B = V;
            var A = l(576648),
                R = l(325686),
                I = l(277660),
                M = l.n(I),
                D = l(811176),
                z = l(167630),
                $ = l(708852),
                j = l(630715),
                H = l(786272),
                O = l(73664),
                Q = l(952793),
                G = l(782642),
                q = l(97882),
                W = l(782826),
                J = l(359870),
                X = l(725516),
                Y = l(688715),
                ee = l(731708),
                ae = l(96083),
                le = l(855488),
                ne = l(725405);
            const re = h().be03ecca,
                te = (0, Y.ju)("https://help.x.com/using-x/creator-email-sharing"),
                se = (0, Y.ju)("https://legal.x.com/creator-email-sharing-terms.html"),
                ie = h().i859a9d4,
                oe = F.default.create((e) => ({ learnMore: { marginStart: e.spaces.space4 }, row: { flexDirection: "row", gap: e.spaces.space16 }, noSpacing: { paddingHorizontal: "0" } })),
                ce = ({ consented: e, creatorName: a, setConsented: l, setSubscriptionEmail: n, subscriptionEmail: r }) => {
                    const [t, s] = y.useState(),
                        i = (0, ne.Z)(),
                        o = y.useCallback(() => {
                            r && s((0, J.Z)(r));
                        }, [s, r]),
                        c = y.useCallback((e) => n(e.currentTarget.value), [n]),
                        u = y.useCallback(
                            (e) => {
                                i.scribe({ section: "email_share_consent", element: "consent_checkbox", action: e ? "accept" : "clear" }), l(e), e || (n(""), s(""));
                            },
                            [i, l, n],
                        ),
                        d = y.useMemo(() => ({ elements: { link: y.createElement(ee.ZP, { color: "plum500", link: se }) }, variables: { creatorName: a } }), [a]);
                    return y.createElement(R.Z, null, y.createElement(R.Z, { style: oe.row }, y.createElement(ae.Z, { checked: e, onChange: u }), y.createElement(ee.ZP, { color: "gray700" }, y.createElement(h().I18NFormatMessage, { $i18n: "fca299bb", creatorName: d.variables.creatorName }, y.cloneElement(d.elements.link, null, h().e6c72234)), y.createElement(ee.ZP, { color: "plum500", link: te, style: oe.learnMore }, ie))), y.createElement(le.Z, { editable: e, errorText: t, invalid: !!t, label: re, name: "subscriptionEmailAddress", onBlur: o, onChange: c, style: oe.noSpacing, testID: "subscriptionEmailAddress", value: r }));
                };
            var ue = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsSubscribeSellSheet_viewer",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "73bc25e3a54000885c893fb3bda4912b",
            };
            const de = ue;
            var me = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsSubscribeSellSheet_user",
                selections: [
                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }], storageKey: null },
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
                hash: "da9160d70ee0f585b3ca7b6a9b584289",
            };
            const pe = me;
            var ge = l(879101),
                ye = l(8685);
            const _e = pe,
                be = de,
                ke = (e) => {
                    const { children: a, emailShareElement: l, isWide: n, user: r, viewer: t } = e,
                        s = M()(_e, r),
                        i = M()(be, t),
                        o = s.core?.name ?? void 0,
                        c = s.avatar?.image_url ?? void 0,
                        u = s.core?.screen_name ?? void 0,
                        d = s.super_follow_creator_benefits?.creator_intro ?? void 0,
                        m = (s.super_follow_creator_benefits?.benefits_data ?? []).find((e) => "ExclusiveContent" === e.benefit_type),
                        p = m?.description ?? void 0,
                        g = i.avatar?.image_url ?? void 0,
                        _ = i.core?.name ?? void 0,
                        b = i.core?.screen_name ?? void 0,
                        k = i.privacy?.protected ?? void 0,
                        f = i.verification?.verified ?? void 0,
                        S = i?.is_blue_verified ?? void 0,
                        F = y.useMemo(() => [fe.subscribeButtonContainer, n && fe.subscribeButtonContainerWide], [n]);
                    return y.createElement(y.Fragment, null, y.createElement(ye.Z, { badgeImageUrl: g, badgeName: _, badgeScreenName: b, descriptionValue: p, imageUrl: c, introValue: d, isBlueVerified: S, isProtected: k, isVerified: f, name: o, screenName: u }), y.createElement(R.Z, { style: F }, l, y.createElement(ge.Z, { recurring: !0, style: fe.disclaimer }), a));
                },
                fe = F.default.create((e) => ({ disclaimer: { marginVertical: e.spaces.space24 }, subscribeButtonContainer: { alignItems: "center", flexGrow: 1, marginBottom: e.spaces.space40, marginTop: e.spaces.space48, paddingHorizontal: e.spaces.space32 }, subscribeButtonContainerWide: { paddingHorizontal: e.spaces.space48 } }));
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
            const Fe = Se;
            var ve = l(351743),
                he = l.n(ve);
            const we = Fe;
            l(571372);
            var Ke = (function () {
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
            Ke.hash = "759d9c15b4318f3e6cf9204063fd8da0";
            const Ee = Ke,
                Le = h().d2613123,
                Ze = h().ef4602ec,
                Ce = h().c4640fc0,
                Te = h().a72064a8,
                Ue = h().f88553c8,
                xe = B,
                Pe = N,
                Ne = (e) => {
                    const { screenName: a, user: l, viewer: n } = e,
                        r = (0, Q.hC)("subscriptions_marketing_page_include_tax_enabled"),
                        t = (0, Q.hC)("super_follow_subscriptions_tax_calculation_enabled"),
                        s = (0, Q.hC)("creator_subscriptions_email_share_enabled"),
                        [i, o] = y.useState(""),
                        [c, u] = y.useState(!1),
                        d = y.useRef(),
                        m = (0, O.R)(d, { threshold: 0.5 }),
                        p = (0, X.z)(),
                        _ = M()(xe, l),
                        b = M()(Pe, n),
                        k = (0, f.useHistory)(),
                        F = (0, G.p)(),
                        v = _.legacy?.id_str ?? void 0,
                        h = _.core?.screen_name ?? void 0,
                        K = ((e, a, l, n) => {
                            let r = e;
                            return l && n && (r += a), r;
                        })(_.super_follow_creator_product_metadata?.amount ?? 0, _.super_follow_creator_product_metadata?.tax_amount ?? 0, r, t),
                        E = _.super_follow_creator_product_metadata?.currency_code ?? void 0,
                        L = _.super_follow_creator_product_metadata?.product_id ?? void 0,
                        Z = b.legacy?.id_str ?? void 0,
                        { href: C, origin: T } = W.ZP.get(),
                        U = h ? `${T}/${h}/creator-subscriptions/subscribe/success` : T,
                        x = h ? `${T}/${h}/creator-subscriptions/subscribe/failure` : T,
                        [P, N] = (({ cancelUrl: e, productId: a, successUrl: l }) => {
                            const [n, r] = he()(Ee);
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
                        })({ productId: L, successUrl: U, cancelUrl: x }),
                        [V] = (() => {
                            const [e, a] = he()(we);
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
                        B = y.useMemo(() => {
                            let e = (0, W.G3)(k.location);
                            const a = k.getLastNonModalLocationPathname() || "";
                            !(0, W.d)(k.location) && h && a.includes(`${h}/status`) && (e = "tweet");
                            const l = _.legacy?.id_str ? { creator_user_id: _.legacy.id_str, referring_page: e } : void 0;
                            return { items: [{ is_viewer_follows_user: !!_.relationship_perspectives?.following, super_follow_details: l }] };
                        }, [h, _, k]);
                    y.useEffect(() => {
                        p.scribe({ element: "subscribe_screen", action: "impression", data: B });
                    }, [B, p]);
                    const I = s && !!_.verified_program_creator_features?.email_sharing_from_subscribers_enabled,
                        Y = I && c,
                        ee = Y && (!i || !!(0, J.Z)(i)),
                        ae = _.core?.name ?? "",
                        le = I ? y.createElement(ce, { consented: c, creatorName: ae, setConsented: u, setSubscriptionEmail: o, subscriptionEmail: i }) : null,
                        ne = Ce,
                        re = Te,
                        te = y.useCallback(() => {
                            p.scribe({ element: "subscribe_button", action: "click", data: B });
                            const e =
                                    Y && !ee && v
                                        ? V({ email: i, creatorId: v, consented: c })
                                              .then((e) => {
                                                  p.scribe({ element: "email_share_consent_update", action: e ? "success" : "error", data: B });
                                              })
                                              .catch(() => {
                                                  p.scribe({ element: "email_share_consent_update", action: "error", data: B });
                                              })
                                        : null,
                                a = P().catch(() => {
                                    F({ text: Ze });
                                });
                            Promise.all([a, e]).then(([e]) => {
                                e && W.ZP.navigateTo(e);
                            });
                        }, [p, v, B, Y, ee, P, V, i, c, F]),
                        se = y.useCallback(() => {
                            A.Z.setString(C), F({ text: Ue }), p.scribe({ action: "share", data: B });
                        }, [F, p, C, B]),
                        ie = y.useCallback(
                            (e) => {
                                const a = [];
                                return a.push({ text: re, Icon: j.default, onClick: se }), p.scribe({ element: "share", action: "click", data: B }), y.createElement(D.Z, { items: a, onCloseRequested: e });
                            },
                            [p, re, se, B],
                        ),
                        oe = E && K ? ((e, a) => q.T[e.toUpperCase()](parseInt(a, 10) / 1e6))(E, K) : void 0,
                        ue = { disabled: (v && Z && v === Z) || N || !L || ee, onPress: te },
                        de = y.createElement(S.ZP, (0, g.Z)({}, ue, { backgroundColor: "plum500", borderColor: "transparent", color: "white", ref: d, size: "xLarge", style: Ve.bigSubscribeButton }), N ? y.createElement(z.Z, null) : Le({ price: oe })),
                        me = y.createElement(S.ZP, (0, g.Z)({}, ue, { disabled: ue.disabled && !m, size: "small", style: [Ve.transitionOpacity, m ? Ve.opacityNone : void 0], type: "primaryFilled" }), N ? y.createElement(z.Z, { size: "small" }) : Le({ price: oe })),
                        pe = y.createElement(S.ZP, { "aria-label": ne, hoverLabel: { label: ne }, icon: y.createElement(H.default, null), renderMenu: ie, size: "small", style: Ve.shareButton, type: "primaryText" }),
                        ge = y.createElement(R.Z, { style: Ve.rightControl }, me, pe),
                        ye = (0, $.$u)();
                    return y.createElement(w.Z, { backButtonType: "back", backLocation: `/${a}/superfollows`, children: y.createElement(ke, { children: de, emailShareElement: le, isWide: ye, user: _, viewer: b }), history: k, rightControl: ge });
                },
                Ve = F.default.create((e) => ({ bigSubscribeButton: { width: "100%" }, opacityNone: { opacity: 0 }, rightControl: { flexDirection: "row" }, shareButton: { marginStart: e.spaces.space16 }, transitionOpacity: { transition: "opacity 0.2s 0s ease-in-out" } })),
                Be = h().g61ed8a4,
                Ae = h().c3d23f10,
                Re = h().d338f53e,
                Ie = k,
                Me = { context: "SuperFollowsSubscribe" },
                De = { page: "super_follows_marketing" },
                ze = ({ screenName: e }) => {
                    const a = { screenName: (0, T.Z)(e) },
                        l = (0, U.p)(Ie, a),
                        n = l?.user?.result,
                        r = l?.viewer?.user_results?.result;
                    return n && r ? (n.super_following ? y.createElement(x.Z, { to: `/${e}/creator-subscriptions/manage` }) : n.super_follow_eligible ? y.createElement(C.nO, { namespace: De }, y.createElement(Ne, { screenName: e, user: n, viewer: r })) : y.createElement(x.Z, { to: `/${e}` })) : null;
                },
                $e = () => {
                    const e = (0, f.useHistory)(),
                        a = (0, f.useParams)().screenName || "",
                        l = y.useMemo(
                            () => ({
                                type: "CustomRetry",
                                content: (l) => {
                                    const n = y.createElement(K.Z, { style: He.error }, y.createElement(E.Z, { description: Ae, title: Be }), y.createElement(S.ZP, { onPress: l, style: He.errorButton, type: "brandFilled" }, Re));
                                    return y.createElement(w.Z, { backButtonType: "close", backLocation: `/${a}`, children: n, history: e });
                                },
                            }),
                            [e, a],
                        );
                    return y.createElement(L.N, { errorConfig: Me, fallback: l }, y.createElement(Z.B, null, y.createElement(ze, { screenName: a })));
                },
                je = y.memo($e),
                He = F.default.create((e) => ({ error: { marginTop: e.spaces.space12, marginBottom: e.spaces.space40, width: "100%" }, errorButton: { marginTop: e.spaces.space32 } })),
                Oe = (e) => y.createElement(_.Z, (0, g.Z)({}, e, { component: je }));
        },
        273961: (e, a, l) => {
            l.r(a), l.d(a, { default: () => f });
            var n = l(807896),
                r = l(202784),
                t = l(669406),
                s = l(325686),
                i = l(154003),
                o = l(392237),
                c = l(111677),
                u = l.n(c),
                d = l(980407),
                m = l(569778),
                p = l(293115);
            const g = u().b17f0c4b,
                y = u().a893d602,
                _ = { page: "super_follows_subscription_success" },
                b = o.default.create((e) => ({ button: { marginTop: e.spaces.space36, width: "100%" }, wrapper: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: "auto", marginHorizontal: e.spaces.space80, alignItems: "center", justifyContent: "center" } })),
                k = (e) => {
                    const { history: a, match: l } = e,
                        n = l.params.screenName,
                        t = n ? `/${n}` : "/home";
                    return r.createElement(p.nO, { namespace: _ }, r.createElement(d.Z, { backButtonType: "close", backLocation: t, history: a }, r.createElement(s.Z, { style: b.wrapper }, r.createElement(m.Z, { headline: g({ screenName: n }), illustration: m.j.Success }), r.createElement(i.ZP, { onPress: () => a.replace(t), size: "xLarge", style: b.button, type: "primaryFilled" }, y))));
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
                        u = n.createElement(i.Z, { backLocation: `/${s}`, history: l.history }, n.createElement(r.Z, { style: p.wrapper }, n.createElement(c.Z, { history: l.history, location: l.location, match: l.match }))),
                        d = (0, o.hC)("super_follow_android_web_subscription_enabled");
                    return !a || !d ? u : n.createElement(e, l);
                }),
                p = s.default.create((e) => ({ modalContainerStyle: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: "auto", alignItems: "center", justifyContent: "center" }, wrapper: { alignItems: "center", justifyContent: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SuperFollowsSubscribe.8f0f971a.js.map
