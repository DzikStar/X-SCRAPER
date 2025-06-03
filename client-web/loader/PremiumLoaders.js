"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PremiumLoaders"],
    {
        96768: (e, a, r) => {
            r.d(a, { Z: () => s });
            var n,
                i,
                t,
                l = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (i = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateStripePortalUrlMutation",
                        selections: (t = [
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
                    operation: { argumentDefinitions: [i, n], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: t },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            l.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const s = l;
        },
        587510: (e, a, r) => {
            r.d(a, { Z: () => _ });
            var n,
                i,
                t,
                l,
                s,
                o,
                u,
                c,
                d,
                m,
                p = {
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
                                                                        (i = { alias: null, args: null, concreteType: "StripeConnectAccount", kind: "LinkedField", name: "stripe_connect_account", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }], storageKey: null }),
                                                                        (l = {
                                                                            alias: null,
                                                                            args: (t = [{ kind: "Literal", name: "verified_program_types", value: ["AdRevenueSharing", "SuperFollows"] }]),
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
                                                                            args: t,
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
                                                                        (u = {
                                                                            alias: null,
                                                                            args: t,
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
                                                                        { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), { kind: "RequiredField", field: (d = { alias: null, args: [{ kind: "Literal", name: "view", value: { verification_flow: "CreatorIdv" } }], kind: "ScalarField", name: "identity_verification_status", storageKey: 'identity_verification_status(view:{"verification_flow":"CreatorIdv"})' }), action: "THROW" }], storageKey: null },
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
                                                    { kind: "InlineFragment", selections: [i, l, s, u, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [c, d, (m = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, m], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            m,
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
            p.hash = "abb37d549229c3883d2d50c7a98d76a1";
            const _ = p;
        },
        380327: (e, a, r) => {
            r.d(a, { Z: () => u });
            var n,
                i,
                t,
                l,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: (n = [{ kind: "Literal", name: "cursor", value: "" }]), concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: (t = [{ kind: "Literal", name: "filter_by_delivered_in_interval", value: { end_date: "2025-12-31", start_date: "2024-01-01" } }]), concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: n, concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [i, { alias: null, args: t, concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [l, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }, s], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }] },
                    params: { id: "UFD9D7pipG78WFN0SJviDg", metadata: {}, name: "useTotalAdCampaignsForUserQuery", operationKind: "query", text: null },
                };
            o.hash = "200a7af54c9c3ed7753c0291e92e188f";
            const u = o;
        },
        919057: (e, a, r) => {
            r.r(a), r.d(a, { default: () => u });
            var n = r(202784),
                i = r(443781),
                t = r(736063),
                l = r(918588),
                s = r(727828);
            function o() {
                const { featureSwitches: e } = (0, i.QZ)();
                return (0, l.Z)() > 0 && e.isTrue("vo_upsell_enabled") ? n.createElement(s.Z, { testID: "vo-ad-credit-upsell", variant: "VerifiedOrgsAdCredit" }) : null;
            }
            const u = function () {
                return n.createElement(t.H, { errorConfig: { context: "AD_CREDIT_UPSELL" } }, n.createElement(o, null));
            };
        },
        127939: (e, a, r) => {
            r.r(a), r.d(a, { default: () => I });
            var n = r(202784),
                i = r(400752),
                t = r(325686),
                l = r(811176),
                s = r(420740),
                o = r(682830),
                u = r(392237),
                c = r(111677),
                d = r.n(c),
                m = r(841972),
                p = r(647174),
                _ = r(530813),
                g = r(420182),
                f = r(443781),
                y = r(56851),
                v = r(736063),
                k = r(88660),
                b = r(39182),
                h = r(313129),
                w = r(738124),
                F = r(643426),
                S = r(293115),
                C = r(725405),
                Z = r(620243);
            const E = d().f0701753,
                K = d().j7d0e836,
                T = d().d227d19e,
                P = { isCollapsed: !1 },
                L = ({ dismiss: e }) => {
                    (0, b.E)();
                    const { featureSwitches: a } = (0, f.QZ)(),
                        r = a.isTrue("rweb_sourcemap_migration"),
                        o = (0, C.Z)(),
                        [u, c] = n.useState(!1),
                        d = (0, i.Dv)(g.lZ),
                        [v, k] = n.useState(null);
                    n.useEffect(() => {
                        d.get("rweb.premiumModule").then((e) => {
                            k(e || P);
                        });
                    }, [d]);
                    let S = "/premium/module";
                    v?.isCollapsed && (S += "?collapsed=true");
                    const Z = (0, h._3)(S, { refreshTimeMs: 1e4 });
                    if (!v) return null;
                    if (!Z) return n.createElement(y.Z, null);
                    const L = () => {
                            c(!u);
                        },
                        R = () => {
                            e(), o.scribeAction("dismiss"), c(!1);
                        },
                        A = () => {
                            o.scribeAction(v.isCollapsed ? "expand" : "collapse");
                            const e = { isCollapsed: !v.isCollapsed };
                            k(e), d.set("rweb.premiumModule", e), c(!1);
                        };
                    return Z.jfResponse?.root.value
                        ? n.createElement(
                              F.b.Provider,
                              { value: { dismiss: L } },
                              n.createElement(
                                  t.Z,
                                  { style: r ? V.containerRedesign : V.container },
                                  u
                                      ? n.createElement(l.Z, {
                                            items: [
                                                { onClick: A, text: v.isCollapsed ? K : T, Icon: v.isCollapsed ? m.default : p.default },
                                                { onClick: R, text: E({ number: 7 }), Icon: _.default },
                                            ],
                                            onCloseRequested: L,
                                        })
                                      : null,
                                  Z.jfResponse?.root.value ? n.createElement(w.Z, { payload: Z.jfResponse.root.value }) : null,
                              ),
                          )
                        : n.createElement(s.Z, { onRetry: null, title: Z.error });
                },
                R = () => {
                    const { dismiss: e, impress: a, shouldShow: r } = (0, k.ZP)({ key: "premium_module_v1", dismissForMsec: k.IZ, showForMsec: null, reappearAfterMsec: null });
                    return (
                        n.useEffect(() => {
                            a();
                        }, [a]),
                        r ? n.createElement(S.nO, { namespace: { component: "premium_module " } }, n.createElement(L, { dismiss: e })) : null
                    );
                },
                A = () => {
                    const { verified_program_application_status: e, verified_program_eligibility: a, verified_user_profiles: r } = (0, Z.Z)(),
                        { featureSwitches: i } = (0, f.QZ)(),
                        t = r?.ad_revenue_sharing_user_profile?.is_active;
                    if ((t || (0 === a?.ad_revenue_sharing_eligibility?.length && "NotStarted" === e?.ad_revenue_sharing_application_status)) && i.isTrue("subscriptions_premium_module_enabled")) return n.createElement(n.Suspense, { fallback: n.createElement(o.J, null) }, n.createElement(R, null));
                },
                I = () => {
                    const { featureSwitches: e, userClaims: a } = (0, f.QZ)();
                    return a.isAnyPremiumSubscriber() && e.isTrue("subscriptions_premium_module_creator_gate_enabled") ? n.createElement(v.H, { errorConfig: { context: "premium_module" } }, n.createElement(A, null)) : null;
                },
                V = u.default.create((e) => ({ container: { marginBottom: e.spaces.space12 }, containerRedesign: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 } }));
        },
        293605: (e, a, r) => {
            r.r(a), r.d(a, { default: () => S });
            var n = r(202784),
                i = r(325686),
                t = r(731708),
                l = r(154003),
                s = r(392237),
                o = r(111677),
                u = r.n(o),
                c = r(211971),
                d = r(443781),
                m = r(736063),
                p = r(177210),
                _ = r(782826),
                g = r(725405),
                f = r(199232);
            const y = u().fbf83158,
                v = u().jadeb4da,
                k = u().bce3726a,
                b = ({ entryPoint: e, originProduct: a }) => {
                    const r = (0, g.Z)(),
                        { origin: s } = _.ZP.get(),
                        o = (0, p.Z)({ returnUrl: `${s}/i/profile`, originProduct: a }),
                        u = `payment_failure_alert_card_${e}_sidebar`;
                    n.useEffect(() => {
                        r.scribe({ component: u, action: "impression" });
                    }, [r, u]);
                    const d = n.useCallback(() => {
                        r.scribe({ component: u, action: "click", element: `payment_failure_${e}_sidebar` }), o?.();
                    }, [o, r, u, e]);
                    return n.createElement(i.Z, { style: F.cardBlock, testID: "paymentCardBlock" }, n.createElement(i.Z, { style: F.inner }, n.createElement(t.ZP, { size: "headline1", style: F.heading, weight: "heavy" }, n.createElement(c.default, { style: F.icon, testID: "errorIcon" }), y), n.createElement(t.ZP, { size: "body", style: F.subheading }, v), n.createElement(l.ZP, { onClick: d, style: F.button, type: "primaryFilled" }, k)));
                },
                h = ({ entryPoint: e }) => {
                    const { featureSwitches: a } = (0, d.QZ)(),
                        { hasPremiumPaymentFailure: r, hasVerifiedOrgPaymentFailure: t } = (0, f.Z)(["VerifiedOrganization", "Premium"]);
                    return (t && a.isTrue("subscriptions_management_failed_payment_profile_card_enabled")) || (r && a.isTrue("subscriptions_management_failed_payment_message_premium_enabled")) ? n.createElement(i.Z, { style: F.paddedContainer, testID: "paymentCardView" }, n.createElement(b, { entryPoint: e, originProduct: t ? "VerifiedOrganizations" : "TwitterBlue" })) : null;
                },
                w = ({ entryPoint: e }) => n.createElement(m.H, { errorConfig: { context: "payment_alert_card" } }, n.createElement(h, { entryPoint: e })),
                F = s.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.red0, borderColor: e.colors.red100, borderWidth: "1px", borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16, maxWidth: "100%", gap: e.spaces.space8 }, button: { alignSelf: "flex-start", paddingHorizontal: 0, marginTop: e.spaces.space8 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, icon: { color: s.default.theme.colors.red500, marginEnd: e.spaces.space4 }, paddedContainer: { paddingBottom: e.spaces.space16 } })),
                S = n.memo(w);
        },
        900285: (e, a, r) => {
            r.r(a), r.d(a, { default: () => K });
            var n = r(202784),
                i = r(325686),
                t = r(731708),
                l = r(154003),
                s = r(167630),
                o = r(392237),
                u = r(111677),
                c = r.n(u),
                d = r(191796),
                m = r(187669),
                p = r(399398),
                _ = r(177210),
                g = r(337394),
                f = r(147595),
                y = r(811574),
                v = r(293115),
                k = r(725405),
                b = r(443781);
            const h = c().ie4f57d2,
                w = c().h293aa52,
                F = c().j1923668,
                S = c().ac7e97ee,
                C = { PremiumBasic: c().f70c69b4, BlueVerified: c().f4cec4d2, BlueVerifiedPlus: c().f4cec4d2 },
                Z = ({ activeRestId: e }) => {
                    const a = (0, k.Z)(),
                        [r, o] = n.useState(!1);
                    (0, m.q)(() => {
                        a.scribeAction("impression");
                    });
                    const u = (0, _.Z)({ returnUrl: `https://${window.location.host}/home`, originProduct: "TwitterBlue" }),
                        c = g.v5.premium[e ?? ""];
                    return n.createElement(
                        p.g,
                        { testID: "renew-subscription-module" },
                        n.createElement(
                            i.Z,
                            { "aria-label": h, role: "complementary", style: T.root },
                            n.createElement(t.ZP, { size: "headline1", weight: "heavy" }, w),
                            n.createElement(t.ZP, null, F, " ", C[c]),
                            n.createElement(
                                l.ZP,
                                {
                                    disabled: r,
                                    icon: r ? n.createElement(s.Z, null) : n.createElement(d.default, null),
                                    onPress: () => {
                                        a.scribeAction("click"), u?.(), o(!0);
                                    },
                                },
                                S,
                            ),
                        ),
                    );
                },
                E = () => {
                    const { featureSwitches: e } = (0, b.QZ)(),
                        a = (0, y.Z)();
                    if (!a) return null;
                    const r = (0, f.R)(a);
                    return r && "Stripe" === r.payment_source && "Expire" === r.state && e.isTrue("subscriptions_management_renew_module_enabled") ? n.createElement(v.nO, { namespace: { component: "renew-subscription-module", element: "renew-button" } }, n.createElement(Z, { activeRestId: r?.product?.rest_id })) : null;
                },
                K = () => {
                    const { featureSwitches: e, userClaims: a } = (0, b.QZ)();
                    return e.isTrue("subscriptions_management_renew_module_api_enabled") && a.isAnyPremiumSubscriber() && !a.isAnyVerifiedOrgOrAffiliate() ? n.createElement(E, null) : null;
                },
                T = o.default.create((e) => ({ root: { position: "relative", alignItems: "flex-start", gap: 10, flexDirection: "column", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }));
        },
        282559: (e, a, r) => {
            r.d(a, { v: () => o });
            r(571372);
            var n = r(96768),
                i = r(202784),
                t = (r(585488), r(351743)),
                l = r.n(t);
            const s = n.Z,
                o = ({ originProduct: e, returnUrl: a }) => {
                    const [r, n] = l()(s);
                    return [
                        i.useCallback(
                            () =>
                                new Promise((n, i) => {
                                    r({
                                        variables: { return_url: a, origin_product: e },
                                        onCompleted: ({ customerportalsession_create: e }, a) => {
                                            const r = e?.customer_portal_session_url ?? void 0;
                                            r ? n(r) : i(new Error("Missing portal URL"));
                                        },
                                        onError: i,
                                    });
                                }),
                            [r, a, e],
                        ),
                        n,
                    ];
                };
        },
        177210: (e, a, r) => {
            r.d(a, { Z: () => c });
            var n = r(202784),
                i = r(111677),
                t = r.n(i),
                l = r(782826),
                s = r(282559),
                o = r(782642);
            const u = t().ef4602ec;
            function c(e) {
                const a = (0, o.p)(),
                    [r, i] = (0, s.v)(e),
                    t = n.useCallback(() => {
                        r()
                            .then((e) => {
                                l.ZP.navigateTo(e);
                            })
                            .catch(() => {
                                a({ text: u });
                            });
                    }, [r, a]);
                return i ? void 0 : t;
            }
        },
        147595: (e, a, r) => {
            r.d(a, { R: () => i });
            var n = r(337394);
            const i = (e) => {
                const a = e.find((e) => e.product?.rest_id && n.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Stripe" === e.payment_source),
                    r = e.find((e) => e.product?.rest_id && n.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Twitter" !== e.payment_source && "Ads" !== e.payment_source),
                    i = e.find((e) => e.product?.rest_id && n.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && ("Twitter" === e.payment_source || "Ads" === e.payment_source));
                return a || r || i;
            };
        },
        620243: (e, a, r) => {
            r.d(a, { Z: () => l });
            var n = r(587510),
                i = (r(585488), r(535338));
            const t = n.Z,
                l = () => {
                    const { viewer: e } = (0, i.p)(t, {});
                    return e.user_results.result || {};
                };
        },
        918588: (e, a, r) => {
            r.d(a, { Z: () => s });
            var n = r(380327),
                i = (r(585488), r(712696)),
                t = r.n(i);
            const l = n.Z;
            const s = function () {
                const e = t()(l, {});
                return (e.quick_promote_advertiser_accounts?.items ?? []).reduce((e, a) => e + (a?.campaigns?.total_count ?? 0), 0);
            };
        },
        661810: (e, a, r) => {
            r.d(a, { Z: () => l });
            var n = r(202784),
                i = r(325686),
                t = r(392237);
            function l({ spacing: e, style: a }) {
                return n.createElement(i.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? t.default.theme.spaces[e] : void 0 }, a] });
            }
            const s = t.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        41065: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var n = r(202784),
                i = r(890601),
                t = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        730895: (e, a, r) => {
            var n = r(821176);
            e.exports = function () {
                var e = n(this),
                    a = "";
                return e.hasIndices && (a += "d"), e.global && (a += "g"), e.ignoreCase && (a += "i"), e.multiline && (a += "m"), e.dotAll && (a += "s"), e.unicode && (a += "u"), e.unicodeSets && (a += "v"), e.sticky && (a += "y"), a;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PremiumLoaders.28aaa51a.js.map
