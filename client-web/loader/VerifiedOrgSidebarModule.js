"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.VerifiedOrgSidebarModule"],
    {
        150943: (e, n, a) => {
            a.d(n, { Z: () => b });
            var t,
                l,
                i,
                r,
                s,
                o,
                c,
                d,
                u,
                m,
                _,
                p,
                g,
                y,
                f = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "ScheduledPromotionsQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: "viewer",
                                    args: (t = [{ kind: "Literal", name: "s", value: "84b0" }]),
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
                                                                        {
                                                                            alias: null,
                                                                            args: (l = [
                                                                                { kind: "Literal", name: "program_ids", value: ["vo_sign_up_promo", "vo_full_access_yearly_pay_sign_up_promo", "vo_basic_monthly_pay_sign_up_promo", "vo_basic_yearly_pay_sign_up_promo", "vo_full_access_yearly_upgrade_promo", "vo_full_access_monthly_pay_cancellation_retention", "vo_basic_monthly_pay_cancellation_retention", "vo_full_access_yearly_pay_cancellation_retention", "vo_basic_yearly_pay_cancellation_retention"] },
                                                                                { kind: "Literal", name: "statuses", value: ["Active", "Redeemable", "Expired", "Scheduled"] },
                                                                            ]),
                                                                            concreteType: "ScheduledPromotion",
                                                                            kind: "LinkedField",
                                                                            name: "list_scheduled_promotions",
                                                                            plural: !0,
                                                                            selections: [
                                                                                { args: null, kind: "FragmentSpread", name: "AdsCouponScheduledPromotion" },
                                                                                (i = { alias: null, args: null, kind: "ScalarField", name: "expires_at_msec", storageKey: null }),
                                                                                (r = { alias: null, args: null, kind: "ScalarField", name: "for_user_id", storageKey: null }),
                                                                                (s = { alias: null, args: null, kind: "ScalarField", name: "program_id", storageKey: null }),
                                                                                (o = { alias: null, args: null, kind: "ScalarField", name: "scheduled_id", storageKey: null }),
                                                                                {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: null,
                                                                                    kind: "LinkedField",
                                                                                    name: "promotion",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "InlineFragment",
                                                                                            selections: [
                                                                                                (c = { alias: null, args: null, kind: "ScalarField", name: "valid_until_msec", storageKey: null }),
                                                                                                (d = { alias: null, args: null, kind: "ScalarField", name: "enrolled_for_ads_account_id", storageKey: null }),
                                                                                                (m = {
                                                                                                    alias: null,
                                                                                                    args: null,
                                                                                                    concreteType: "PromotionAmount",
                                                                                                    kind: "LinkedField",
                                                                                                    name: "coupon_amount_in_local",
                                                                                                    plural: !1,
                                                                                                    selections: (u = [
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "amount", storageKey: null },
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                                                                                                    ]),
                                                                                                    storageKey: null,
                                                                                                }),
                                                                                                (_ = { alias: null, args: null, concreteType: "PromotionAmount", kind: "LinkedField", name: "used_amount_in_local", plural: !1, selections: u, storageKey: null }),
                                                                                            ],
                                                                                            type: "AdsCoupon",
                                                                                            abstractKey: null,
                                                                                        },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                                (p = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }),
                                                                            ],
                                                                            storageKey: 'list_scheduled_promotions(program_ids:["vo_sign_up_promo","vo_full_access_yearly_pay_sign_up_promo","vo_basic_monthly_pay_sign_up_promo","vo_basic_yearly_pay_sign_up_promo","vo_full_access_yearly_upgrade_promo","vo_full_access_monthly_pay_cancellation_retention","vo_basic_monthly_pay_cancellation_retention","vo_full_access_yearly_pay_cancellation_retention","vo_basic_yearly_pay_cancellation_retention"],statuses:["Active","Redeemable","Expired","Scheduled"])',
                                                                        },
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
                                    storageKey: 'viewer_v2(s:"84b0")',
                                },
                                action: "THROW",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "ScheduledPromotionsQuery", selections: [{ alias: "viewer", args: t, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(g = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: l, concreteType: "ScheduledPromotion", kind: "LinkedField", name: "list_scheduled_promotions", plural: !0, selections: [i, { alias: null, args: null, kind: "ScalarField", name: "starts_at_msec", storageKey: null }, r, s, o, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "promotion", plural: !1, selections: [g, { kind: "InlineFragment", selections: [d, c, m, _], type: "AdsCoupon", abstractKey: null }], storageKey: null }, p, { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: 'list_scheduled_promotions(program_ids:["vo_sign_up_promo","vo_full_access_yearly_pay_sign_up_promo","vo_basic_monthly_pay_sign_up_promo","vo_basic_yearly_pay_sign_up_promo","vo_full_access_yearly_upgrade_promo","vo_full_access_monthly_pay_cancellation_retention","vo_basic_monthly_pay_cancellation_retention","vo_full_access_yearly_pay_cancellation_retention","vo_basic_yearly_pay_cancellation_retention"],statuses:["Active","Redeemable","Expired","Scheduled"])' }, (y = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, y], storageKey: null }], storageKey: 'viewer_v2(s:"84b0")' }] },
                    params: { id: "DwmNKZXS-QQLRd3_U17X3A", metadata: {}, name: "ScheduledPromotionsQuery", operationKind: "query", text: null },
                };
            f.hash = "7235af9612c9b20c6d226e72be04062f";
            const b = f;
        },
        865023: (e, n, a) => {
            a.d(n, { i: () => t });
            const t = Object.freeze({ ApplicationInReview: "ApplicationInReview", ApplicationRequestInfo: "ApplicationRequestInfo", NotStart: "NotStart", Onboarded: "Onboarded", UpfrontApplicationInProgress: "UpfrontApplicationInProgress", UpfrontPromotionInProgress: "UpfrontPromotionInProgress" });
        },
        96768: (e, n, a) => {
            a.d(n, { Z: () => s });
            var t,
                l,
                i,
                r = {
                    fragment: {
                        argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (l = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateStripePortalUrlMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "origin_product", variableName: "origin_product" },
                                    { kind: "Variable", name: "return_url", variableName: "return_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "CreateCustomerPortalSessionResponse",
                                kind: "LinkedField",
                                name: "customerportalsession_create",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "customer_portal_session_url", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [l, t], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: i },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            r.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const s = r;
        },
        786033: (e, n, a) => {
            a.d(n, { Z: () => c });
            var t,
                l,
                i,
                r,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (l = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (i = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useIDVerificationSessionUrlMutation",
                        selections: (s = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "error_url", variableName: "error_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "success_url", variableName: "success_url" },
                                    { kind: "Variable", name: "verification_flow", variableName: "verification_flow" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "start_identity_verification",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { kind: "InlineFragment", selections: (r = [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }]), type: "StartIdentityVerificationResultSuccessAu10tixSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: r, type: "StartIdentityVerificationResultSuccessSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "StartIdentityVerificationResultFailure", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [l, t, i], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: s },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            o.hash = "88a4b93bad19f92c67d5957375d338be";
            const c = o;
        },
        924523: (e, n, a) => {
            a.d(n, { Z: () => s });
            var t,
                l,
                i,
                r = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "useVerifiedOrgIdentityVerificationConfigQuery",
                        selections: [
                            {
                                alias: null,
                                args: (t = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                                    (l = {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "VerifiedOrganizationIdentityVerification",
                                                                        kind: "LinkedField",
                                                                        name: "verified_organization_identity_verification",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "id_verification_enabled", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "completed_by", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
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
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useVerifiedOrgIdentityVerificationConfigQuery",
                        selections: [
                            {
                                alias: null,
                                args: t,
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
                                                    { kind: "InlineFragment", selections: [l, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            i,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "OeetKDpCigK8wSJwl7oWRA", metadata: { features: ["responsive_web_verified_organizations_idv_enabled"] }, name: "useVerifiedOrgIdentityVerificationConfigQuery", operationKind: "query", text: null },
                };
            r.hash = "14ba08eed2e153d6782fa9fe0de60692";
            const s = r;
        },
        482234: (e, n, a) => {
            a.r(n), a.d(n, { default: () => $ });
            var t = a(202784),
                l = a(325686),
                i = a(712696),
                r = a.n(i),
                s = a(530732),
                o = a(731708),
                c = a(58881),
                d = a(392237),
                u = a(868634),
                m = a(111677),
                _ = a.n(m),
                p = a(58399),
                g = a(211971),
                y = a(191796),
                f = a(865023),
                b = a(399398),
                k = a(952793),
                v = a(177210),
                h = a(693510),
                E = a(97882),
                S = a(782826),
                Z = a(725516),
                K = a(336678),
                F = a(854219),
                C = a(481326),
                w = a(199232),
                P = a(241989),
                R = a(794271),
                I = a(443781),
                D = a(736063);
            const L = "verified_organizations_right_sidebar",
                V = _().g2c0144a,
                A = _().cd5cdec8,
                T = _().f23b6a72,
                x = _().i969d5de,
                U = _().d0924f58,
                z = _().j8d53b64,
                O = _().jd26f2a6,
                H = _().aaa798fc,
                M = _().e0a492e6,
                B = _().d9cbd02c,
                N = _().ed4759a6,
                j = _().dad69faa,
                Q = _().daf3248a,
                q = _().eb71036f,
                W = _().a1d3f1f2,
                G = _().i859a9d4,
                X = ({ onClick: e }) => {
                    const n = r()(K.Z, {}),
                        a = n?.viewer.user_results.result.list_scheduled_promotions?.length ? n.viewer.user_results.result.list_scheduled_promotions : [];
                    let l = 0;
                    const i = a[0]?.promotion.coupon_amount_in_local?.currency_code;
                    return (
                        a.forEach((e) => {
                            const n = e.promotion,
                                a = "Redeemable" === e.status || "Active" === e.status,
                                t = n.coupon_amount_in_local?.currency_code === i;
                            a && t && (n.coupon_amount_in_local?.amount && (l += n.coupon_amount_in_local.amount), n.used_amount_in_local?.amount && (l -= n.used_amount_in_local.amount));
                        }),
                        l > 0 ? t.createElement(s.Z, { link: "/i/verified-advertising", onClick: e("remaining_credits"), style: J.remainingCredit, testID: "remainingCredits" }, t.createElement(o.ZP, { color: "gray900", style: J.creditLabel, weight: "medium" }, T), t.createElement(o.ZP, { size: "title3", weight: "bold" }, (0, E.x)({ amount: parseInt(l, 10), currencyCode: i?.toUpperCase(), formatter: 1, removeTrailingZeros: !0 }))) : null
                    );
                },
                Y = () => {
                    const e = (0, Z.z)(),
                        { userClaims: n } = t.useContext(I.rC),
                        a = n.hasSubscription("verified_org_basic"),
                        i = (0, k.hC)("responsive_web_verified_organizations_idv_enabled"),
                        { completedByDate: r, enabled: m, status: _ } = (0, P.Z)(),
                        E = i && m && "CanVerifyIdentity" === _,
                        K = (0, k.hC)("responsive_web_verified_organizations_intercom_enabled"),
                        { origin: D } = S.ZP.get(),
                        T = (0, v.Z)({ returnUrl: `${D}/home`, originProduct: "VerifiedOrganizations" }),
                        Y = (0, w.Z)(["VerifiedOrganization"]).hasVerifiedOrgPaymentFailure,
                        { hasApplicationStatus: $, hasVerifiedOrgFeature: ee } = (0, h.ZP)(),
                        ne = t.useMemo(() => ee(h.ny.BusinessPreapprovalAdminPortalAccess), [ee]),
                        ae = t.useMemo(() => $(f.i.ApplicationInReview), [$]);
                    t.useEffect(() => {
                        e.scribe({ component: L, action: "impression" });
                    }, [e]),
                        t.useEffect(() => {
                            Y && e.scribe({ component: "payment_failure_alert_verified_organizations_right_sidebar", action: "impression" });
                        }, [e, Y]);
                    const te = t.useCallback(
                            (n) => () => {
                                e.scribe({ component: L, action: "click", element: n });
                            },
                            [e],
                        ),
                        le = t.useCallback(() => {
                            e.scribe({ component: "payment_failure_alert_verified_organizations_right_sidebar", action: "click", element: "payment_failure" }), T?.();
                        }, [e, T]),
                        ie = c.Z.generate({ backgroundColor: d.default.theme.colors.red50, customPressedBackgroundColor: d.default.theme.colors.red50, color: d.default.theme.colors.text }),
                        re = t.useMemo(
                            () =>
                                t.createElement(
                                    t.Fragment,
                                    null,
                                    t.createElement(X, { onClick: te }),
                                    a ? t.createElement(s.Z, { link: { pathname: "/i/verified-orgs-tier-switch", state: { referring_page: "vo_sidebar_module" } }, onClick: te("switch_tier"), style: J.link, testID: "affiliateUpgradeLink" }, t.createElement(o.ZP, { weight: "medium" }, O), t.createElement(l.Z, { style: { flexDirection: "row" } }, t.createElement(u.ZP, { background: "primary" }, H), t.createElement(p.default, { style: J.icon }))) : null,
                                    Y ? t.createElement(s.Z, { interactiveStyles: ie, onClick: le, style: J.paymentAlert }, t.createElement(l.Z, { style: J.rowContainer }, t.createElement(l.Z, { style: J.textContainer }, t.createElement(g.default, { style: J.alertIcon }), t.createElement(o.ZP, { weight: "medium" }, j)), t.createElement(y.default, { style: J.linkIcon }))) : null,
                                    t.createElement(s.Z, { link: "/i/verified-advertising", onClick: te("manage_ad_credits"), style: J.link }, t.createElement(o.ZP, { weight: "medium" }, A), t.createElement(p.default, { style: J.icon })),
                                    t.createElement(s.Z, { link: "https://ads.x.com", onClick: te("setup_ads_campaign"), style: J.link }, t.createElement(o.ZP, { weight: "medium" }, x), t.createElement(p.default, { style: J.icon })),
                                    t.createElement(s.Z, { link: "/i/verified/jobs", onClick: te("manage_jobs"), style: J.link }, t.createElement(o.ZP, { weight: "medium" }, M), t.createElement(p.default, { style: J.icon })),
                                    K ? t.createElement(F.Z, { onClick: te("get_support") }, t.createElement(s.Z, { style: J.link }, t.createElement(o.ZP, { weight: "medium" }, U), t.createElement(p.default, { style: J.icon }))) : t.createElement(s.Z, { link: C.A9, onClick: te("get_support"), style: J.link }, t.createElement(o.ZP, { weight: "medium" }, U), t.createElement(p.default, { style: J.icon })),
                                    t.createElement(s.Z, { link: "/i/verified", onClick: te("vo_home"), style: J.link }, t.createElement(o.ZP, { color: "blue500", weight: "medium" }, z), t.createElement(p.default, { style: J.icon })),
                                ),
                            [a, K, te, Y, le, ie],
                        ),
                        se = t.useMemo(() => t.createElement(l.Z, { style: [J.callout, E ? J.warningBackground : J.infoBackground] }, t.createElement(l.Z, { style: J.calloutHeader }, t.createElement(g.default, { style: J.linkIcon }), t.createElement(o.ZP, { weight: "bold" }, E ? Q : B)), E ? null : t.createElement(o.ZP, { size: "subtext1", weight: "normal" }, N), E ? t.createElement(l.Z, { style: J.idvEntrypoint }, t.createElement(o.ZP, { size: "subtext1", weight: "normal" }, q({ date: r })), t.createElement(R.Z, { redirectPath: location.pathname }), t.createElement(o.ZP, { color: "gray900", size: "subtext2" }, W, " ", t.createElement(o.ZP, { link: "https://help.x.com/rules-and-policies/verification-policy" }, G))) : null), [E, r]),
                        oe = t.useMemo(() => t.createElement(t.Fragment, null, ae ? se : null, t.createElement(s.Z, { link: "/i/verified/jobs", onClick: te("manage_jobs"), style: J.link }, t.createElement(o.ZP, { weight: "medium" }, M), t.createElement(p.default, { style: J.icon })), t.createElement(s.Z, { link: "/i/verified", onClick: te("vo_home"), style: J.link }, t.createElement(o.ZP, { color: "blue500", weight: "medium" }, z), t.createElement(p.default, { style: J.icon }))), [ae, te, se]);
                    return t.createElement(b.g, { testID: "verifiedOrgSidebarModule" }, t.createElement(l.Z, null, t.createElement(o.ZP, { size: "headline1", style: J.header, weight: "bold" }, V), ne ? oe : re));
                },
                $ = () => t.createElement(D.H, { errorConfig: { context: "VerifiedOrgSidebarModule" } }, t.createElement(Y, null)),
                J = d.default.create((e) => ({ link: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, creditLabel: { marginBottom: e.spaces.space4 }, header: { margin: e.spaces.space16 }, remainingCredit: { borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0, padding: e.spaces.space16, marginHorizontal: e.spaces.space12, marginBottom: e.spaces.space8 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, callout: { borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space16, marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space8, gap: e.spaces.space12 }, warningBackground: { backgroundColor: e.colors.orange50 }, infoBackground: { backgroundColor: e.colors.blue50 }, calloutHeader: { flexDirection: "row", gap: e.spaces.space4 }, paymentAlert: { backgroundColor: e.colors.red50, borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space16, marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space8 }, rowContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, textContainer: { flexDirection: "row", alignItems: "center" }, alertIcon: { marginEnd: e.spaces.space8, color: e.colors.red500 }, linkIcon: { color: e.colors.text }, idvEntrypoint: { gap: e.spaces.space12 } }));
        },
        282559: (e, n, a) => {
            a.d(n, { v: () => o });
            a(571372);
            var t = a(96768),
                l = a(202784),
                i = (a(585488), a(351743)),
                r = a.n(i);
            const s = t.Z,
                o = ({ originProduct: e, returnUrl: n }) => {
                    const [a, t] = r()(s);
                    return [
                        l.useCallback(
                            () =>
                                new Promise((t, l) => {
                                    a({
                                        variables: { return_url: n, origin_product: e },
                                        onCompleted: ({ customerportalsession_create: e }, n) => {
                                            const a = e?.customer_portal_session_url ?? void 0;
                                            a ? t(a) : l(new Error("Missing portal URL"));
                                        },
                                        onError: l,
                                    });
                                }),
                            [a, n, e],
                        ),
                        t,
                    ];
                };
        },
        177210: (e, n, a) => {
            a.d(n, { Z: () => d });
            var t = a(202784),
                l = a(111677),
                i = a.n(l),
                r = a(782826),
                s = a(282559),
                o = a(782642);
            const c = i().ef4602ec;
            function d(e) {
                const n = (0, o.p)(),
                    [a, l] = (0, s.v)(e),
                    i = t.useCallback(() => {
                        a()
                            .then((e) => {
                                r.ZP.navigateTo(e);
                            })
                            .catch(() => {
                                n({ text: c });
                            });
                    }, [a, n]);
                return l ? void 0 : i;
            }
        },
        782642: (e, n, a) => {
            a.d(n, { p: () => r });
            var t = a(202784),
                l = a(125363),
                i = a(601576);
            const r = () => {
                    const e = (0, l.I0)(),
                        n = s(),
                        a = t.useRef(null);
                    return (
                        t.useEffect(() => () => clearTimeout(a.current), [n]),
                        t.useCallback(
                            (t) => {
                                e((0, i.fz)(t)), (a.current = setTimeout(() => n(), 3e3));
                            },
                            [e, n],
                        )
                    );
                },
                s = () => {
                    const e = (0, l.I0)();
                    return t.useCallback(() => e((0, i.RS)()), [e]);
                };
        },
        97882: (e, n, a) => {
            a.d(n, { T: () => i, x: () => r });
            var t = a(111677),
                l = a.n(t);
            const i = { AED: l().d857e44d, ALL: l().cb87e3db, ARS: l().a9d5ffd1, AUD: l().a0e8371d, BAM: l().gcc50dc9, BDT: l().a6a43585, BGN: l().a0cc8f2d, BHD: l().i31c32c5, BRL: l().i7dc69e9, BYR: l().c14a6c03, CAD: l().jaa3d537, CHF: l().a824080b, CLP: l().d9c0bedb, CNY: l().bf8c0613, COP: l().i8163625, CZK: l().adb53ba1, DKK: l().iabf697d, DZD: l().a1a0555b, EGP: l().f266f3d9, EUR: l().a9a8652b, GBP: l().dbf40761, GHS: l().b0d993d9, GTQ: l().ac1308e1, HKD: l().a7889ab3, HRK: l().c614f5cd, HUF: l().i55d57e3, IDR: l().e4b6002b, ILS: l().d28e983b, INR: l().e8c9232d, IQD: l().c8994ae1, ISK: l().f821c2a5, JPY: l().j348b9c9, KES: l().i6f93b9b, KRW: l().c6150bd5, KWD: l().i8921e09, KZT: l().ef239279, LBP: l().hecdb149, MAD: l().fdd039b7, MKD: l().f30c2c37, MXN: l().d9ea7bff, MYR: l().ea3df4b7, NGN: l().jaac21bb, NOK: l().hb435ced, NZD: l().ce699d81, PEN: l().bc56d3d7, PHP: l().f8561913, PKR: l().g6485d53, PLN: l().ff561cc1, QAR: l().b42011d3, RON: l().a6660bcd, RSD: l().f9b80449, RUB: l().gdee4d5d, SAR: l().h36f2103, SEK: l().a19ad037, SGD: l().g713f699, THB: l().ff2e39af, TND: l().be34316d, TRY: l().aef81b75, TWD: l().fcce70a5, TZS: l().jc9d352f, UAH: l().be1cb8c5, UGX: l().j9371501, USD: l().j7d4397d, VEF: l().d61441dd, VND: l().e2a99e97, ZAR: l().f7ce19ab, ZMW: l().b2a0213f },
                r = ({ amount: e, currencyCode: n = "USD", formatter: a = 1e6, removeTrailingZeros: t = !1, strictAmount: l = !1 }) => {
                    const r = l ? e : parseInt(e, 10) / a,
                        o = i[n]?.(r);
                    return t ? s(o) : o;
                },
                s = (e) => {
                    const n = e?.split(".");
                    return 2 === n?.length && "00" === n?.[1] ? n[0] : e;
                };
        },
        431890: (e, n, a) => {
            a.d(n, { Z: () => c });
            a(571372);
            var t = a(786033),
                l = a(202784),
                i = (a(585488), a(351743)),
                r = a.n(i),
                s = a(782826);
            const o = t.Z,
                c = () => {
                    const { origin: e } = s.ZP.get(),
                        [n, a] = r()(o);
                    return [
                        l.useCallback(
                            ({ errorPath: a, redirectPath: t, verificationFlow: l }) =>
                                new Promise((i, r) => {
                                    const s = `${e}${t}`;
                                    n({
                                        variables: { success_url: s, error_url: a ? `${e}${a}` : s, verification_flow: l || null },
                                        onCompleted: (e, n) => {
                                            if (e.start_identity_verification) {
                                                if (("StartIdentityVerificationResultSuccessAu10tixSession" !== e?.start_identity_verification?.__typename && "StartIdentityVerificationResultSuccessSession" !== e?.start_identity_verification?.__typename) || !e?.start_identity_verification.session_url) return r(new Error("Expected Session URL"));
                                                i(e?.start_identity_verification.session_url);
                                            }
                                        },
                                        onError: r,
                                    });
                                }),
                            [n, e],
                        ),
                        a,
                    ];
                };
        },
        336678: (e, n, a) => {
            a.d(n, { Z: () => l });
            var t = a(150943);
            a(585488);
            const l = t.Z;
        },
        794271: (e, n, a) => {
            a.d(n, { Z: () => Z });
            var t = a(807896),
                l = a(202784),
                i = a(325686),
                r = a(40610),
                s = a(154003),
                o = a(167630),
                c = a(392237),
                d = a(111677),
                u = a.n(d),
                m = a(187669),
                _ = a(736063),
                p = a(952793),
                g = a(782826),
                y = a(293115),
                f = a(725405),
                b = a(431890),
                k = a(241989);
            const v = u().ea8c295a,
                h = u().ef4602ec,
                E = ({ redirectPath: e, status: n }) => {
                    const a = (0, f.Z)(),
                        [t] = (0, b.Z)(),
                        [c, d] = l.useState(!1),
                        [u, _] = l.useState(!1);
                    (0, m.q)(() => {
                        a.scribe({ element: n, action: "impression" });
                    });
                    const p = l.useCallback(() => {
                            d(!0),
                                _(!1),
                                t({ redirectPath: e, verificationFlow: "VerifiedOrganizationIdv" })
                                    .then((e) => (a.scribe({ element: "redirect", action: "success" }), g.ZP.navigateTo(e)))
                                    .catch(() => {
                                        d(!1), _(!0), a.scribe({ element: "redirect", action: "error" });
                                    });
                        }, [t, a, e]),
                        y = l.useMemo(() => {
                            if ("CanVerifyIdentity" === n) return l.createElement(l.Fragment, null, u ? l.createElement(r.Z.Danger, { text: h }) : null, l.createElement(s.ZP, { disabled: c, onClick: p, testID: "start-idv-button", type: "primaryFilled" }, c ? l.createElement(o.Z, null) : v));
                        }, [n, p, u, c]);
                    return l.createElement(i.Z, { style: K.container, testID: "identity-verification-entrypoint" }, y);
                },
                S = (e) => {
                    const { enabled: n, status: a } = (0, k.Z)();
                    return n && a ? l.createElement(E, (0, t.Z)({}, e, { status: a })) : null;
                },
                Z = (e) => ((0, p.hC)("responsive_web_verified_organizations_idv_enabled") ? l.createElement(_.H, { errorConfig: { context: "identity_verification_entrypoint" } }, l.createElement(y.nO, { namespace: { component: "vo_idv_entrypoint" } }, l.createElement(S, e))) : null),
                K = c.default.create((e) => ({ container: { gap: e.spaces.space12 } }));
        },
        241989: (e, n, a) => {
            a.d(n, { Z: () => r });
            var t = a(924523),
                l = (a(585488), a(535338));
            const i = t.Z,
                r = () => {
                    const { viewer_v2: e } = (0, l.p)(i, {}),
                        n = e?.user_results.result.verified_organization_identity_verification?.status,
                        a = e?.user_results.result.verified_organization_identity_verification?.id_verification_enabled || !1,
                        t = e?.user_results.result.verified_organization_identity_verification?.completed_by || null;
                    return { enabled: a, status: n, completedByDate: t ? new Date(t).toLocaleDateString(void 0, { year: "numeric", month: "long", day: "numeric" }) : null };
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.VerifiedOrgSidebarModule.1b44b2ba.js.map
