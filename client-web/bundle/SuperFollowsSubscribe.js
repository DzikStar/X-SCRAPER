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
                i = l(332920),
                c = l.n(i);
            const o = (0, r.ju)("https://legal.x.com/purchaser-terms"),
                u = c().bc42db1c,
                d = s.default.create((e) => ({ recurring: { marginStart: e.spaces.space4 } })),
                m = ({ recurring: e, style: a }) => n.createElement(t.ZP, { color: "gray700", style: a }, n.createElement(c().I18NFormatMessage, { $i18n: "cd5e4a77" }, n.createElement(t.ZP, { color: "plum500", link: o }, c().f1561b06)), e ? n.createElement(t.ZP, { style: d.recurring }, u) : null);
        },
        359870: (e, a, l) => {
            l.d(a, { Z: () => i, b: () => s });
            var n = l(332920);
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
                c = l(392237),
                o = l(332920),
                u = l.n(o),
                d = l(980407),
                m = l(569778),
                p = l(293115);
            const g = u().a0b4541c,
                y = u().a5634d9a,
                _ = u().a893d602,
                b = { page: "super_follows_subscription_failure" },
                k = c.default.create((e) => ({ button: { marginTop: e.spaces.space36, width: "100%" }, wrapper: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: "auto", marginHorizontal: e.spaces.space80, alignItems: "center", justifyContent: "center" } })),
                f = (e) => {
                    const { history: a, match: l } = e,
                        n = l.params.screenName,
                        t = n ? `/${n}/superfollows/subscribe` : "/home";
                    return r.createElement(p.nO, { namespace: b }, r.createElement(d.Z, { backButtonType: "close", backLocation: t, history: a }, r.createElement(s.Z, { style: k.wrapper }, r.createElement(m.Z, { headline: g, illustration: m.j.ConfusedDog, subtext: y }), r.createElement(i.ZP, { onPress: () => a.replace(t), size: "xLarge", style: k.button, type: "primaryFilled" }, _))));
                },
                S = (e) => r.createElement(t.Z, (0, n.Z)({}, e, { component: f }));
        },
        518983: (e, a, l) => {
            l.r(a), l.d(a, { default: () => Qe });
            var n,
                r,
                t,
                s,
                i,
                c,
                o,
                u,
                d,
                m,
                p,
                g,
                y = l(807896),
                _ = l(202784),
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
                            { alias: "viewer", args: (c = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { args: null, kind: "FragmentSpread", name: "SuperFollowsSubscribeScreen_viewer" }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
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
                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }), (u = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null },
                                                    (m = { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }),
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
                                                    (p = { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }),
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
                                                    (g = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    g,
                                ],
                                storageKey: null,
                            },
                            { alias: "viewer", args: c, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [o, d, u], storageKey: null }, m, { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }, p, { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null }, g], type: "User", abstractKey: null }], storageKey: null }, g], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                    },
                    params: { id: "E0AwdoS7Fp54g-4Sz0f9Dg", metadata: { features: ["creator_subscriptions_email_share_enabled", "super_follow_subscriptions_tax_calculation_enabled"] }, name: "SuperFollowsSubscribeQuery", operationKind: "query", text: null },
                };
            k.hash = "b5ca6f3d0c226d006500f7a642421be5";
            const f = k;
            l(585488);
            var S = l(107267),
                v = l(154003),
                F = l(392237),
                h = l(332920),
                w = l.n(h),
                K = l(980407),
                E = l(724345),
                L = l(783373),
                Z = l(883229),
                C = l(943914),
                T = l(293115),
                x = l(28557),
                U = l(535338),
                P = l(615027),
                N =
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
            const V = N;
            var A = {
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
                            { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                        ],
                        storageKey: null,
                    },
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
                hash: "6e5c1e818be2968dcec46d680f8401ad",
            };
            const B = A;
            var M = l(576648),
                z = l(325686),
                I = l(277660),
                R = l.n(I),
                D = l(811176),
                $ = l(167630),
                j = l(708852),
                H = l(630715),
                O = l(786272),
                Q = l(73664),
                q = l(952793),
                G = l(782642),
                W = l(97882),
                X = l(782826),
                J = l(359870),
                Y = l(725516),
                ee = l(688715),
                ae = l(731708),
                le = l(96083),
                ne = l(855488),
                re = l(725405);
            const te = w().be03ecca,
                se = (0, ee.ju)("https://help.x.com/using-x/creator-email-sharing"),
                ie = (0, ee.ju)("https://legal.x.com/creator-email-sharing-terms.html"),
                ce = w().i859a9d4,
                oe = F.default.create((e) => ({ learnMore: { marginStart: e.spaces.space4 }, row: { flexDirection: "row", gap: e.spaces.space16 }, noSpacing: { paddingHorizontal: "0" } })),
                ue = ({ consented: e, creatorName: a, setConsented: l, setSubscriptionEmail: n, subscriptionEmail: r }) => {
                    const [t, s] = _.useState(),
                        i = (0, re.Z)(),
                        c = _.useCallback(() => {
                            r && s((0, J.Z)(r));
                        }, [s, r]),
                        o = _.useCallback((e) => n(e.currentTarget.value), [n]),
                        u = _.useCallback(
                            (e) => {
                                i.scribe({ section: "email_share_consent", element: "consent_checkbox", action: e ? "accept" : "clear" }), l(e), e || (n(""), s(""));
                            },
                            [i, l, n],
                        ),
                        d = _.useMemo(() => ({ elements: { link: _.createElement(ae.ZP, { color: "plum500", link: ie }) }, variables: { creatorName: a } }), [a]);
                    return _.createElement(z.Z, null, _.createElement(z.Z, { style: oe.row }, _.createElement(le.Z, { checked: e, onChange: u }), _.createElement(ae.ZP, { color: "gray700" }, _.createElement(w().I18NFormatMessage, { $i18n: "fca299bb", creatorName: d.variables.creatorName }, _.cloneElement(d.elements.link, null, w().e6c72234)), _.createElement(ae.ZP, { color: "plum500", link: se, style: oe.learnMore }, ce))), _.createElement(ne.Z, { editable: e, errorText: t, invalid: !!t, label: te, name: "subscriptionEmailAddress", onBlur: c, onChange: o, style: oe.noSpacing, testID: "subscriptionEmailAddress", value: r }));
                };
            var de = {
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
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
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
                hash: "5b8d30a47b5302c9c9caed0806e2eda8",
            };
            const me = de;
            var pe = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsSubscribeSellSheet_user",
                selections: [
                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
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
                hash: "decd73f4616fba351234dfcc83254f79",
            };
            const ge = pe;
            var ye = l(879101),
                _e = l(8685);
            const be = ge,
                ke = me,
                fe = (e) => {
                    const { children: a, emailShareElement: l, isWide: n, user: r, viewer: t } = e,
                        s = R()(be, r),
                        i = R()(ke, t),
                        c = s.legacy?.name ?? void 0,
                        o = s.avatar?.image_url ?? void 0,
                        u = s.legacy?.screen_name ?? void 0,
                        d = s.super_follow_creator_benefits?.creator_intro ?? void 0,
                        m = (s.super_follow_creator_benefits?.benefits_data ?? []).find((e) => "ExclusiveContent" === e.benefit_type),
                        p = m?.description ?? void 0,
                        g = i.avatar?.image_url ?? void 0,
                        y = i.legacy?.name ?? void 0,
                        b = i.legacy?.screen_name ?? void 0,
                        k = i.privacy?.protected ?? void 0,
                        f = i.verification?.verified ?? void 0,
                        S = i?.is_blue_verified ?? void 0,
                        v = _.useMemo(() => [Se.subscribeButtonContainer, n && Se.subscribeButtonContainerWide], [n]);
                    return _.createElement(_.Fragment, null, _.createElement(_e.Z, { badgeImageUrl: g, badgeName: y, badgeScreenName: b, descriptionValue: p, imageUrl: o, introValue: d, isBlueVerified: S, isProtected: k, isVerified: f, name: c, screenName: u }), _.createElement(z.Z, { style: v }, l, _.createElement(ye.Z, { recurring: !0, style: Se.disclaimer }), a));
                },
                Se = F.default.create((e) => ({ disclaimer: { marginVertical: e.spaces.space24 }, subscribeButtonContainer: { alignItems: "center", flexGrow: 1, marginBottom: e.spaces.space40, marginTop: e.spaces.space48, paddingHorizontal: e.spaces.space32 }, subscribeButtonContainerWide: { paddingHorizontal: e.spaces.space48 } }));
            var ve = (function () {
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
            ve.hash = "c3538b09e6ebfaf72cfafe1dcdd48251";
            const Fe = ve;
            var he = l(351743),
                we = l.n(he);
            const Ke = Fe;
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
            const Le = Ee,
                Ze = w().d2613123,
                Ce = w().ef4602ec,
                Te = w().c4640fc0,
                xe = w().a72064a8,
                Ue = w().f88553c8,
                Pe = B,
                Ne = V,
                Ve = (e) => {
                    const { screenName: a, user: l, viewer: n } = e,
                        r = (0, q.hC)("subscriptions_marketing_page_include_tax_enabled"),
                        t = (0, q.hC)("super_follow_subscriptions_tax_calculation_enabled"),
                        s = (0, q.hC)("creator_subscriptions_email_share_enabled"),
                        [i, c] = _.useState(""),
                        [o, u] = _.useState(!1),
                        d = _.useRef(),
                        m = (0, Q.R)(d, { threshold: 0.5 }),
                        p = (0, Y.z)(),
                        g = R()(Pe, l),
                        b = R()(Ne, n),
                        k = (0, S.useHistory)(),
                        f = (0, G.p)(),
                        F = g.legacy?.id_str ?? void 0,
                        h = g.legacy?.screen_name ?? void 0,
                        w = ((e, a, l, n) => {
                            let r = e;
                            return l && n && (r += a), r;
                        })(g.super_follow_creator_product_metadata?.amount ?? 0, g.super_follow_creator_product_metadata?.tax_amount ?? 0, r, t),
                        E = g.super_follow_creator_product_metadata?.currency_code ?? void 0,
                        L = g.super_follow_creator_product_metadata?.product_id ?? void 0,
                        Z = b.legacy?.id_str ?? void 0,
                        { href: C, origin: T } = X.ZP.get(),
                        x = h ? `${T}/${h}/creator-subscriptions/subscribe/success` : T,
                        U = h ? `${T}/${h}/creator-subscriptions/subscribe/failure` : T,
                        [P, N] = (({ cancelUrl: e, productId: a, successUrl: l }) => {
                            const [n, r] = we()(Le);
                            return [
                                _.useCallback(
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
                        })({ productId: L, successUrl: x, cancelUrl: U }),
                        [V] = (() => {
                            const [e, a] = we()(Ke);
                            return [
                                _.useCallback(
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
                        A = _.useMemo(() => {
                            let e = (0, X.G3)(k.location);
                            const a = k.getLastNonModalLocationPathname() || "";
                            !(0, X.d)(k.location) && h && a.includes(`${h}/status`) && (e = "tweet");
                            const l = g.legacy?.id_str ? { creator_user_id: g.legacy.id_str, referring_page: e } : void 0;
                            return { items: [{ is_viewer_follows_user: !!g.relationship_perspectives?.following, super_follow_details: l }] };
                        }, [h, g, k]);
                    _.useEffect(() => {
                        p.scribe({ element: "subscribe_screen", action: "impression", data: A });
                    }, [A, p]);
                    const B = s && !!g.verified_program_creator_features?.email_sharing_from_subscribers_enabled,
                        I = B && o,
                        ee = I && (!i || !!(0, J.Z)(i)),
                        ae = g.legacy?.name ?? "",
                        le = B ? _.createElement(ue, { consented: o, creatorName: ae, setConsented: u, setSubscriptionEmail: c, subscriptionEmail: i }) : null,
                        ne = Te,
                        re = xe,
                        te = _.useCallback(() => {
                            p.scribe({ element: "subscribe_button", action: "click", data: A });
                            const e =
                                    I && !ee && F
                                        ? V({ email: i, creatorId: F, consented: o })
                                              .then((e) => {
                                                  p.scribe({ element: "email_share_consent_update", action: e ? "success" : "error", data: A });
                                              })
                                              .catch(() => {
                                                  p.scribe({ element: "email_share_consent_update", action: "error", data: A });
                                              })
                                        : null,
                                a = P().catch(() => {
                                    f({ text: Ce });
                                });
                            Promise.all([a, e]).then(([e]) => {
                                e && X.ZP.navigateTo(e);
                            });
                        }, [p, F, A, I, ee, P, V, i, o, f]),
                        se = _.useCallback(() => {
                            M.Z.setString(C), f({ text: Ue }), p.scribe({ action: "share", data: A });
                        }, [f, p, C, A]),
                        ie = _.useCallback(
                            (e) => {
                                const a = [];
                                return a.push({ text: re, Icon: H.default, onClick: se }), p.scribe({ element: "share", action: "click", data: A }), _.createElement(D.Z, { items: a, onCloseRequested: e });
                            },
                            [p, re, se, A],
                        ),
                        ce = E && w ? ((e, a) => W.T[e.toUpperCase()](parseInt(a, 10) / 1e6))(E, w) : void 0,
                        oe = { disabled: (F && Z && F === Z) || N || !L || ee, onPress: te },
                        de = _.createElement(v.ZP, (0, y.Z)({}, oe, { backgroundColor: "plum500", borderColor: "transparent", color: "white", ref: d, size: "xLarge", style: Ae.bigSubscribeButton }), N ? _.createElement($.Z, null) : Ze({ price: ce })),
                        me = _.createElement(v.ZP, (0, y.Z)({}, oe, { disabled: oe.disabled && !m, size: "small", style: [Ae.transitionOpacity, m ? Ae.opacityNone : void 0], type: "primaryFilled" }), N ? _.createElement($.Z, { size: "small" }) : Ze({ price: ce })),
                        pe = _.createElement(v.ZP, { "aria-label": ne, hoverLabel: { label: ne }, icon: _.createElement(O.default, null), renderMenu: ie, size: "small", style: Ae.shareButton, type: "primaryText" }),
                        ge = _.createElement(z.Z, { style: Ae.rightControl }, me, pe),
                        ye = (0, j.$u)();
                    return _.createElement(K.Z, { backButtonType: "back", backLocation: `/${a}/superfollows`, children: _.createElement(fe, { children: de, emailShareElement: le, isWide: ye, user: g, viewer: b }), history: k, rightControl: ge });
                },
                Ae = F.default.create((e) => ({ bigSubscribeButton: { width: "100%" }, opacityNone: { opacity: 0 }, rightControl: { flexDirection: "row" }, shareButton: { marginStart: e.spaces.space16 }, transitionOpacity: { transition: "opacity 0.2s 0s ease-in-out" } })),
                Be = w().g61ed8a4,
                Me = w().c3d23f10,
                ze = w().d338f53e,
                Ie = f,
                Re = { context: "SuperFollowsSubscribe" },
                De = { page: "super_follows_marketing" },
                $e = ({ screenName: e }) => {
                    const a = { screenName: (0, x.Z)(e) },
                        l = (0, U.p)(Ie, a),
                        n = l?.user?.result,
                        r = l?.viewer?.user_results?.result;
                    return n && r ? (n.super_following ? _.createElement(P.Z, { to: `/${e}/creator-subscriptions/manage` }) : n.super_follow_eligible ? _.createElement(T.nO, { namespace: De }, _.createElement(Ve, { screenName: e, user: n, viewer: r })) : _.createElement(P.Z, { to: `/${e}` })) : null;
                },
                je = () => {
                    const e = (0, S.useHistory)(),
                        a = (0, S.useParams)().screenName || "",
                        l = _.useMemo(
                            () => ({
                                type: "CustomRetry",
                                content: (l) => {
                                    const n = _.createElement(E.Z, { style: Oe.error }, _.createElement(L.Z, { description: Me, title: Be }), _.createElement(v.ZP, { onPress: l, style: Oe.errorButton, type: "brandFilled" }, ze));
                                    return _.createElement(K.Z, { backButtonType: "close", backLocation: `/${a}`, children: n, history: e });
                                },
                            }),
                            [e, a],
                        );
                    return _.createElement(Z.N, { errorConfig: Re, fallback: l }, _.createElement(C.B, null, _.createElement($e, { screenName: a })));
                },
                He = _.memo(je),
                Oe = F.default.create((e) => ({ error: { marginTop: e.spaces.space12, marginBottom: e.spaces.space40, width: "100%" }, errorButton: { marginTop: e.spaces.space32 } })),
                Qe = (e) => _.createElement(b.Z, (0, y.Z)({}, e, { component: He }));
        },
        273961: (e, a, l) => {
            l.r(a), l.d(a, { default: () => f });
            var n = l(807896),
                r = l(202784),
                t = l(669406),
                s = l(325686),
                i = l(154003),
                c = l(392237),
                o = l(332920),
                u = l.n(o),
                d = l(980407),
                m = l(569778),
                p = l(293115);
            const g = u().b17f0c4b,
                y = u().a893d602,
                _ = { page: "super_follows_subscription_success" },
                b = c.default.create((e) => ({ button: { marginTop: e.spaces.space36, width: "100%" }, wrapper: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: "auto", marginHorizontal: e.spaces.space80, alignItems: "center", justifyContent: "center" } })),
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
                c = l(952793),
                o = l(923128),
                u = l(668214),
                d = l(390387);
            const m = (0, u.Z)().propsFromState(() => ({ isLoggedIn: d.Qb }))(({ component: e, isLoggedIn: a, ...l }) => {
                    const s = (0, t.useParams)().screenName || "",
                        u = n.createElement(i.Z, { backLocation: `/${s}`, history: l.history }, n.createElement(r.Z, { style: p.wrapper }, n.createElement(o.Z, { history: l.history, location: l.location, match: l.match }))),
                        d = (0, c.hC)("super_follow_android_web_subscription_enabled");
                    return !a || !d ? u : n.createElement(e, l);
                }),
                p = s.default.create((e) => ({ modalContainerStyle: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: "auto", alignItems: "center", justifyContent: "center" }, wrapper: { alignItems: "center", justifyContent: "center" } }));
        },
        41065: (e, a, l) => {
            l.r(a), l.d(a, { default: () => c });
            var n = l(202784),
                r = l(890601),
                t = l(783427),
                s = l(347101);
            const i = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: a });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SuperFollowsSubscribe.49c9214a.js.map
