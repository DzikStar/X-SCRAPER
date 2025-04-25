"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.VerifiedOrgSidebarModule"],
    {
        150943: (e, n, a) => {
            a.d(n, { Z: () => b });
            var l,
                t,
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
                                    args: (l = [{ kind: "Literal", name: "s", value: "84b0" }]),
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
                                                                            args: (t = [
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "ScheduledPromotionsQuery", selections: [{ alias: "viewer", args: l, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(g = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: t, concreteType: "ScheduledPromotion", kind: "LinkedField", name: "list_scheduled_promotions", plural: !0, selections: [i, { alias: null, args: null, kind: "ScalarField", name: "starts_at_msec", storageKey: null }, r, s, o, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "promotion", plural: !1, selections: [g, { kind: "InlineFragment", selections: [d, c, m, _], type: "AdsCoupon", abstractKey: null }], storageKey: null }, p, { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: 'list_scheduled_promotions(program_ids:["vo_sign_up_promo","vo_full_access_yearly_pay_sign_up_promo","vo_basic_monthly_pay_sign_up_promo","vo_basic_yearly_pay_sign_up_promo","vo_full_access_yearly_upgrade_promo","vo_full_access_monthly_pay_cancellation_retention","vo_basic_monthly_pay_cancellation_retention","vo_full_access_yearly_pay_cancellation_retention","vo_basic_yearly_pay_cancellation_retention"],statuses:["Active","Redeemable","Expired","Scheduled"])' }, (y = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, y], storageKey: null }], storageKey: 'viewer_v2(s:"84b0")' }] },
                    params: { id: "DwmNKZXS-QQLRd3_U17X3A", metadata: {}, name: "ScheduledPromotionsQuery", operationKind: "query", text: null },
                };
            f.hash = "7235af9612c9b20c6d226e72be04062f";
            const b = f;
        },
        865023: (e, n, a) => {
            a.d(n, { i: () => l });
            const l = Object.freeze({ ApplicationInReview: "ApplicationInReview", ApplicationRequestInfo: "ApplicationRequestInfo", NotStart: "NotStart", Onboarded: "Onboarded", UpfrontApplicationInProgress: "UpfrontApplicationInProgress", UpfrontPromotionInProgress: "UpfrontPromotionInProgress" });
        },
        786033: (e, n, a) => {
            a.d(n, { Z: () => c });
            var l,
                t,
                i,
                r,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (t = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (i = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
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
                    operation: { argumentDefinitions: [t, l, i], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: s },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            o.hash = "88a4b93bad19f92c67d5957375d338be";
            const c = o;
        },
        924523: (e, n, a) => {
            a.d(n, { Z: () => s });
            var l,
                t,
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
                                args: (l = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                                    (t = {
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
                                args: l,
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
                                                    { kind: "InlineFragment", selections: [t, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
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
            var l = a(202784),
                t = a(325686),
                i = a(712696),
                r = a.n(i),
                s = a(530732),
                o = a(731708),
                c = a(58881),
                d = a(392237),
                u = a(868634),
                m = a(674132),
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
                Z = a(782826),
                S = a(725516),
                K = a(336678),
                w = a(854219),
                F = a(481326),
                C = a(199232),
                P = a(241989),
                R = a(794271),
                I = a(443781),
                D = a(736063);
            const V = "verified_organizations_right_sidebar",
                A = _().g2c0144a,
                L = _().cd5cdec8,
                T = _().f23b6a72,
                x = _().i969d5de,
                z = _().d0924f58,
                O = _().j8d53b64,
                U = _().jd26f2a6,
                H = _().aaa798fc,
                B = _().e0a492e6,
                M = _().d9cbd02c,
                N = _().ed4759a6,
                j = _().dad69faa,
                q = _().daf3248a,
                Q = _().eb71036f,
                W = _().a1d3f1f2,
                G = _().i859a9d4,
                X = ({ onClick: e }) => {
                    const n = r()(K.Z, {}),
                        a = n?.viewer.user_results.result.list_scheduled_promotions?.length ? n.viewer.user_results.result.list_scheduled_promotions : [];
                    let t = 0;
                    const i = a[0]?.promotion.coupon_amount_in_local?.currency_code;
                    return (
                        a.forEach((e) => {
                            const n = e.promotion,
                                a = "Redeemable" === e.status || "Active" === e.status,
                                l = n.coupon_amount_in_local?.currency_code === i;
                            a && l && (n.coupon_amount_in_local?.amount && (t += n.coupon_amount_in_local.amount), n.used_amount_in_local?.amount && (t -= n.used_amount_in_local.amount));
                        }),
                        t > 0 ? l.createElement(s.Z, { link: "/i/verified-advertising", onClick: e("remaining_credits"), style: J.remainingCredit, testID: "remainingCredits" }, l.createElement(o.ZP, { color: "gray900", style: J.creditLabel, weight: "medium" }, T), l.createElement(o.ZP, { size: "title3", weight: "bold" }, (0, E.x)({ amount: parseInt(t, 10), currencyCode: i?.toUpperCase(), formatter: 1, removeTrailingZeros: !0 }))) : null
                    );
                },
                Y = () => {
                    const e = (0, S.z)(),
                        { userClaims: n } = l.useContext(I.rC),
                        a = n.hasSubscription("verified_org_basic"),
                        i = (0, k.hC)("responsive_web_verified_organizations_idv_enabled"),
                        { completedByDate: r, enabled: m, status: _ } = (0, P.Z)(),
                        E = i && m && "CanVerifyIdentity" === _,
                        K = (0, k.hC)("responsive_web_verified_organizations_intercom_enabled"),
                        { origin: D } = Z.ZP.get(),
                        T = (0, v.Z)({ returnUrl: `${D}/home`, originProduct: "VerifiedOrganizations" }),
                        Y = (0, C.Z)(["VerifiedOrganization"]).hasVerifiedOrgPaymentFailure,
                        { hasApplicationStatus: $, hasVerifiedOrgFeature: ee } = (0, h.ZP)(),
                        ne = l.useMemo(() => ee(h.ny.BusinessPreapprovalAdminPortalAccess), [ee]),
                        ae = l.useMemo(() => $(f.i.ApplicationInReview), [$]);
                    l.useEffect(() => {
                        e.scribe({ component: V, action: "impression" });
                    }, [e]),
                        l.useEffect(() => {
                            Y && e.scribe({ component: "payment_failure_alert_verified_organizations_right_sidebar", action: "impression" });
                        }, [e, Y]);
                    const le = l.useCallback(
                            (n) => () => {
                                e.scribe({ component: V, action: "click", element: n });
                            },
                            [e],
                        ),
                        te = l.useCallback(() => {
                            e.scribe({ component: "payment_failure_alert_verified_organizations_right_sidebar", action: "click", element: "payment_failure" }), T?.();
                        }, [e, T]),
                        ie = c.Z.generate({ backgroundColor: d.default.theme.colors.red50, customPressedBackgroundColor: d.default.theme.colors.red50, color: d.default.theme.colors.text }),
                        re = l.useMemo(
                            () =>
                                l.createElement(
                                    l.Fragment,
                                    null,
                                    l.createElement(X, { onClick: le }),
                                    a ? l.createElement(s.Z, { link: { pathname: "/i/verified-orgs-tier-switch", state: { referring_page: "vo_sidebar_module" } }, onClick: le("switch_tier"), style: J.link, testID: "affiliateUpgradeLink" }, l.createElement(o.ZP, { weight: "medium" }, U), l.createElement(t.Z, { style: { flexDirection: "row" } }, l.createElement(u.ZP, { background: "primary" }, H), l.createElement(p.default, { style: J.icon }))) : null,
                                    Y ? l.createElement(s.Z, { interactiveStyles: ie, onClick: te, style: J.paymentAlert }, l.createElement(t.Z, { style: J.rowContainer }, l.createElement(t.Z, { style: J.textContainer }, l.createElement(g.default, { style: J.alertIcon }), l.createElement(o.ZP, { weight: "medium" }, j)), l.createElement(y.default, { style: J.linkIcon }))) : null,
                                    l.createElement(s.Z, { link: "/i/verified-advertising", onClick: le("manage_ad_credits"), style: J.link }, l.createElement(o.ZP, { weight: "medium" }, L), l.createElement(p.default, { style: J.icon })),
                                    l.createElement(s.Z, { link: "https://ads.x.com", onClick: le("setup_ads_campaign"), style: J.link }, l.createElement(o.ZP, { weight: "medium" }, x), l.createElement(p.default, { style: J.icon })),
                                    l.createElement(s.Z, { link: "/i/verified/jobs", onClick: le("manage_jobs"), style: J.link }, l.createElement(o.ZP, { weight: "medium" }, B), l.createElement(p.default, { style: J.icon })),
                                    K ? l.createElement(w.Z, { onClick: le("get_support") }, l.createElement(s.Z, { style: J.link }, l.createElement(o.ZP, { weight: "medium" }, z), l.createElement(p.default, { style: J.icon }))) : l.createElement(s.Z, { link: F.A9, onClick: le("get_support"), style: J.link }, l.createElement(o.ZP, { weight: "medium" }, z), l.createElement(p.default, { style: J.icon })),
                                    l.createElement(s.Z, { link: "/i/verified", onClick: le("vo_home"), style: J.link }, l.createElement(o.ZP, { color: "blue500", weight: "medium" }, O), l.createElement(p.default, { style: J.icon })),
                                ),
                            [a, K, le, Y, te, ie],
                        ),
                        se = l.useMemo(() => l.createElement(t.Z, { style: [J.callout, E ? J.warningBackground : J.infoBackground] }, l.createElement(t.Z, { style: J.calloutHeader }, l.createElement(g.default, { style: J.linkIcon }), l.createElement(o.ZP, { weight: "bold" }, E ? q : M)), E ? null : l.createElement(o.ZP, { size: "subtext1", weight: "normal" }, N), E ? l.createElement(t.Z, { style: J.idvEntrypoint }, l.createElement(o.ZP, { size: "subtext1", weight: "normal" }, Q({ date: r })), l.createElement(R.Z, { redirectPath: location.pathname }), l.createElement(o.ZP, { color: "gray900", size: "subtext2" }, W, " ", l.createElement(o.ZP, { link: "https://help.x.com/rules-and-policies/verification-policy" }, G))) : null), [E, r]),
                        oe = l.useMemo(() => l.createElement(l.Fragment, null, ae ? se : null, l.createElement(s.Z, { link: "/i/verified/jobs", onClick: le("manage_jobs"), style: J.link }, l.createElement(o.ZP, { weight: "medium" }, B), l.createElement(p.default, { style: J.icon })), l.createElement(s.Z, { link: "/i/verified", onClick: le("vo_home"), style: J.link }, l.createElement(o.ZP, { color: "blue500", weight: "medium" }, O), l.createElement(p.default, { style: J.icon }))), [ae, le, se]);
                    return l.createElement(b.g, { testID: "verifiedOrgSidebarModule" }, l.createElement(t.Z, null, l.createElement(o.ZP, { size: "headline1", style: J.header, weight: "bold" }, A), ne ? oe : re));
                },
                $ = () => l.createElement(D.H, { errorConfig: { context: "VerifiedOrgSidebarModule" } }, l.createElement(Y, null)),
                J = d.default.create((e) => ({ link: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, creditLabel: { marginBottom: e.spaces.space4 }, header: { margin: e.spaces.space16 }, remainingCredit: { borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0, padding: e.spaces.space16, marginHorizontal: e.spaces.space12, marginBottom: e.spaces.space8 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, callout: { borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space16, marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space8, gap: e.spaces.space12 }, warningBackground: { backgroundColor: e.colors.orange50 }, infoBackground: { backgroundColor: e.colors.blue50 }, calloutHeader: { flexDirection: "row", gap: e.spaces.space4 }, paymentAlert: { backgroundColor: e.colors.red50, borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space16, marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space8 }, rowContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, textContainer: { flexDirection: "row", alignItems: "center" }, alertIcon: { marginEnd: e.spaces.space8, color: e.colors.red500 }, linkIcon: { color: e.colors.text }, idvEntrypoint: { gap: e.spaces.space12 } }));
        },
        97882: (e, n, a) => {
            a.d(n, { T: () => i, x: () => r });
            var l = a(674132),
                t = a.n(l);
            const i = { AED: t().d857e44d, ALL: t().cb87e3db, ARS: t().a9d5ffd1, AUD: t().a0e8371d, BAM: t().gcc50dc9, BDT: t().a6a43585, BGN: t().a0cc8f2d, BHD: t().i31c32c5, BRL: t().i7dc69e9, BYR: t().c14a6c03, CAD: t().jaa3d537, CHF: t().a824080b, CLP: t().d9c0bedb, CNY: t().bf8c0613, COP: t().i8163625, CZK: t().adb53ba1, DKK: t().iabf697d, DZD: t().a1a0555b, EGP: t().f266f3d9, EUR: t().a9a8652b, GBP: t().dbf40761, GHS: t().b0d993d9, GTQ: t().ac1308e1, HKD: t().a7889ab3, HRK: t().c614f5cd, HUF: t().i55d57e3, IDR: t().e4b6002b, ILS: t().d28e983b, INR: t().e8c9232d, IQD: t().c8994ae1, ISK: t().f821c2a5, JPY: t().j348b9c9, KES: t().i6f93b9b, KRW: t().c6150bd5, KWD: t().i8921e09, KZT: t().ef239279, LBP: t().hecdb149, MAD: t().fdd039b7, MKD: t().f30c2c37, MXN: t().d9ea7bff, MYR: t().ea3df4b7, NGN: t().jaac21bb, NOK: t().hb435ced, NZD: t().ce699d81, PEN: t().bc56d3d7, PHP: t().f8561913, PKR: t().g6485d53, PLN: t().ff561cc1, QAR: t().b42011d3, RON: t().a6660bcd, RSD: t().f9b80449, RUB: t().gdee4d5d, SAR: t().h36f2103, SEK: t().a19ad037, SGD: t().g713f699, THB: t().ff2e39af, TND: t().be34316d, TRY: t().aef81b75, TWD: t().fcce70a5, TZS: t().jc9d352f, UAH: t().be1cb8c5, UGX: t().j9371501, USD: t().j7d4397d, VEF: t().d61441dd, VND: t().e2a99e97, ZAR: t().f7ce19ab, ZMW: t().b2a0213f },
                r = ({ amount: e, currencyCode: n = "USD", formatter: a = 1e6, removeTrailingZeros: l = !1, strictAmount: t = !1 }) => {
                    const r = t ? e : parseInt(e, 10) / a,
                        o = i[n]?.(r);
                    return l ? s(o) : o;
                },
                s = (e) => {
                    const n = e?.split(".");
                    return 2 === n?.length && "00" === n?.[1] ? n[0] : e;
                };
        },
        431890: (e, n, a) => {
            a.d(n, { Z: () => c });
            a(571372);
            var l = a(786033),
                t = a(202784),
                i = (a(585488), a(351743)),
                r = a.n(i),
                s = a(782826);
            const o = l.Z,
                c = () => {
                    const { origin: e } = s.ZP.get(),
                        [n, a] = r()(o);
                    return [
                        t.useCallback(
                            ({ errorPath: a, redirectPath: l, verificationFlow: t }) =>
                                new Promise((i, r) => {
                                    const s = `${e}${l}`;
                                    n({
                                        variables: { success_url: s, error_url: a ? `${e}${a}` : s, verification_flow: t || null },
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
            a.d(n, { Z: () => t });
            var l = a(150943);
            a(585488);
            const t = l.Z;
        },
        794271: (e, n, a) => {
            a.d(n, { Z: () => S });
            var l = a(807896),
                t = a(202784),
                i = a(325686),
                r = a(40610),
                s = a(154003),
                o = a(167630),
                c = a(392237),
                d = a(674132),
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
                        [l] = (0, b.Z)(),
                        [c, d] = t.useState(!1),
                        [u, _] = t.useState(!1);
                    (0, m.q)(() => {
                        a.scribe({ element: n, action: "impression" });
                    });
                    const p = t.useCallback(() => {
                            d(!0),
                                _(!1),
                                l({ redirectPath: e, verificationFlow: "VerifiedOrganizationIdv" })
                                    .then((e) => (a.scribe({ element: "redirect", action: "success" }), g.ZP.navigateTo(e)))
                                    .catch(() => {
                                        d(!1), _(!0), a.scribe({ element: "redirect", action: "error" });
                                    });
                        }, [l, a, e]),
                        y = t.useMemo(() => {
                            if ("CanVerifyIdentity" === n) return t.createElement(t.Fragment, null, u ? t.createElement(r.Z.Danger, { text: h }) : null, t.createElement(s.ZP, { disabled: c, onClick: p, testID: "start-idv-button", type: "primaryFilled" }, c ? t.createElement(o.Z, null) : v));
                        }, [n, p, u, c]);
                    return t.createElement(i.Z, { style: K.container, testID: "identity-verification-entrypoint" }, y);
                },
                Z = (e) => {
                    const { enabled: n, status: a } = (0, k.Z)();
                    return n && a ? t.createElement(E, (0, l.Z)({}, e, { status: a })) : null;
                },
                S = (e) => ((0, p.hC)("responsive_web_verified_organizations_idv_enabled") ? t.createElement(_.H, { errorConfig: { context: "identity_verification_entrypoint" } }, t.createElement(y.nO, { namespace: { component: "vo_idv_entrypoint" } }, t.createElement(Z, e))) : null),
                K = c.default.create((e) => ({ container: { gap: e.spaces.space12 } }));
        },
        241989: (e, n, a) => {
            a.d(n, { Z: () => r });
            var l = a(924523),
                t = (a(585488), a(535338));
            const i = l.Z,
                r = () => {
                    const { viewer_v2: e } = (0, t.p)(i, {}),
                        n = e?.user_results.result.verified_organization_identity_verification?.status,
                        a = e?.user_results.result.verified_organization_identity_verification?.id_verification_enabled || !1,
                        l = e?.user_results.result.verified_organization_identity_verification?.completed_by || null;
                    return { enabled: a, status: n, completedByDate: l ? new Date(l).toLocaleDateString(void 0, { year: "numeric", month: "long", day: "numeric" }) : null };
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.VerifiedOrgSidebarModule.291cbe6a.js.map
