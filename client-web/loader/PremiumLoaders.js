"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PremiumLoaders"],
    {
        96768: (e, a, n) => {
            n.d(a, { Z: () => s });
            var r,
                i,
                t,
                l = {
                    fragment: {
                        argumentDefinitions: [(r = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (i = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
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
                    operation: { argumentDefinitions: [i, r], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: t },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            l.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const s = l;
        },
        587510: (e, a, n) => {
            n.d(a, { Z: () => _ });
            var r,
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
                                    args: (r = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                args: r,
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
        380327: (e, a, n) => {
            n.d(a, { Z: () => u });
            var r,
                i,
                t,
                l,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: (r = [{ kind: "Literal", name: "cursor", value: "" }]), concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: (t = [{ kind: "Literal", name: "filter_by_delivered_in_interval", value: { end_date: "2025-12-31", start_date: "2024-01-01" } }]), concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: r, concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [i, { alias: null, args: t, concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [l, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }, s], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }] },
                    params: { id: "UFD9D7pipG78WFN0SJviDg", metadata: {}, name: "useTotalAdCampaignsForUserQuery", operationKind: "query", text: null },
                };
            o.hash = "200a7af54c9c3ed7753c0291e92e188f";
            const u = o;
        },
        919057: (e, a, n) => {
            n.r(a), n.d(a, { default: () => u });
            var r = n(202784),
                i = n(443781),
                t = n(736063),
                l = n(918588),
                s = n(727828);
            function o() {
                const { featureSwitches: e } = (0, i.QZ)();
                return (0, l.Z)() > 0 && e.isTrue("vo_upsell_enabled") ? r.createElement(s.Z, { testID: "vo-ad-credit-upsell", variant: "VerifiedOrgsAdCredit" }) : null;
            }
            const u = function () {
                return r.createElement(t.H, { errorConfig: { context: "AD_CREDIT_UPSELL" } }, r.createElement(o, null));
            };
        },
        127939: (e, a, n) => {
            n.r(a), n.d(a, { default: () => I });
            var r = n(202784),
                i = n(400752),
                t = n(325686),
                l = n(811176),
                s = n(420740),
                o = n(682830),
                u = n(392237),
                c = n(111677),
                d = n.n(c),
                m = n(841972),
                p = n(647174),
                _ = n(530813),
                g = n(420182),
                f = n(443781),
                y = n(56851),
                v = n(736063),
                k = n(88660),
                b = n(39182),
                F = n(313129),
                h = n(738124),
                w = n(643426),
                S = n(293115),
                C = n(725405),
                E = n(620243);
            const Z = d().f0701753,
                K = d().j7d0e836,
                T = d().d227d19e,
                P = { isCollapsed: !1 },
                L = ({ dismiss: e }) => {
                    (0, b.E)();
                    const { featureSwitches: a } = (0, f.QZ)(),
                        n = a.isTrue("rweb_sourcemap_migration"),
                        o = (0, C.Z)(),
                        [u, c] = r.useState(!1),
                        d = (0, i.Dv)(g.lZ),
                        [v, k] = r.useState(null);
                    r.useEffect(() => {
                        d.get("rweb.premiumModule").then((e) => {
                            k(e || P);
                        });
                    }, [d]);
                    let S = "/premium/module";
                    v?.isCollapsed && (S += "?collapsed=true");
                    const E = (0, F._3)(S, { refreshTimeMs: 1e4 });
                    if (!v) return null;
                    if (!E) return r.createElement(y.Z, null);
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
                    return E.jfResponse?.root.value
                        ? r.createElement(
                              w.b.Provider,
                              { value: { dismiss: L } },
                              r.createElement(
                                  t.Z,
                                  { style: n ? V.containerRedesign : V.container },
                                  u
                                      ? r.createElement(l.Z, {
                                            items: [
                                                { onClick: A, text: v.isCollapsed ? K : T, Icon: v.isCollapsed ? m.default : p.default },
                                                { onClick: R, text: Z({ number: 7 }), Icon: _.default },
                                            ],
                                            onCloseRequested: L,
                                        })
                                      : null,
                                  E.jfResponse?.root.value ? r.createElement(h.Z, { payload: E.jfResponse.root.value }) : null,
                              ),
                          )
                        : r.createElement(s.Z, { onRetry: null, title: E.error });
                },
                R = () => {
                    const { dismiss: e, impress: a, shouldShow: n } = (0, k.ZP)({ key: "premium_module_v1", dismissForMsec: k.IZ, showForMsec: null, reappearAfterMsec: null });
                    return (
                        r.useEffect(() => {
                            a();
                        }, [a]),
                        n ? r.createElement(S.nO, { namespace: { component: "premium_module " } }, r.createElement(L, { dismiss: e })) : null
                    );
                },
                A = () => {
                    const { verified_program_application_status: e, verified_program_eligibility: a, verified_user_profiles: n } = (0, E.Z)(),
                        { featureSwitches: i } = (0, f.QZ)(),
                        t = n?.ad_revenue_sharing_user_profile?.is_active;
                    if ((t || (0 === a?.ad_revenue_sharing_eligibility?.length && "NotStarted" === e?.ad_revenue_sharing_application_status)) && i.isTrue("subscriptions_premium_module_enabled")) return r.createElement(r.Suspense, { fallback: r.createElement(o.J, null) }, r.createElement(R, null));
                },
                I = () => {
                    const { featureSwitches: e, userClaims: a } = (0, f.QZ)();
                    return a.isAnyPremiumSubscriber() && e.isTrue("subscriptions_premium_module_creator_gate_enabled") ? r.createElement(v.H, { errorConfig: { context: "premium_module" } }, r.createElement(A, null)) : null;
                },
                V = u.default.create((e) => ({ container: { marginBottom: e.spaces.space12 }, containerRedesign: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 } }));
        },
        293605: (e, a, n) => {
            n.r(a), n.d(a, { default: () => S });
            var r = n(202784),
                i = n(325686),
                t = n(731708),
                l = n(154003),
                s = n(392237),
                o = n(111677),
                u = n.n(o),
                c = n(211971),
                d = n(443781),
                m = n(736063),
                p = n(177210),
                _ = n(782826),
                g = n(725405),
                f = n(199232);
            const y = u().fbf83158,
                v = u().jadeb4da,
                k = u().bce3726a,
                b = ({ entryPoint: e, originProduct: a }) => {
                    const n = (0, g.Z)(),
                        { origin: s } = _.ZP.get(),
                        o = (0, p.Z)({ returnUrl: `${s}/i/profile`, originProduct: a }),
                        u = `payment_failure_alert_card_${e}_sidebar`;
                    r.useEffect(() => {
                        n.scribe({ component: u, action: "impression" });
                    }, [n, u]);
                    const d = r.useCallback(() => {
                        n.scribe({ component: u, action: "click", element: `payment_failure_${e}_sidebar` }), o?.();
                    }, [o, n, u, e]);
                    return r.createElement(i.Z, { style: w.cardBlock, testID: "paymentCardBlock" }, r.createElement(i.Z, { style: w.inner }, r.createElement(t.ZP, { size: "headline1", style: w.heading, weight: "heavy" }, r.createElement(c.default, { style: w.icon, testID: "errorIcon" }), y), r.createElement(t.ZP, { size: "body", style: w.subheading }, v), r.createElement(l.ZP, { onClick: d, style: w.button, type: "primaryFilled" }, k)));
                },
                F = ({ entryPoint: e }) => {
                    const { featureSwitches: a } = (0, d.QZ)(),
                        { hasPremiumPaymentFailure: n, hasVerifiedOrgPaymentFailure: t } = (0, f.Z)(["VerifiedOrganization", "Premium"]);
                    return (t && a.isTrue("subscriptions_management_failed_payment_profile_card_enabled")) || (n && a.isTrue("subscriptions_management_failed_payment_message_premium_enabled")) ? r.createElement(i.Z, { style: w.paddedContainer, testID: "paymentCardView" }, r.createElement(b, { entryPoint: e, originProduct: t ? "VerifiedOrganizations" : "TwitterBlue" })) : null;
                },
                h = ({ entryPoint: e }) => r.createElement(m.H, { errorConfig: { context: "payment_alert_card" } }, r.createElement(F, { entryPoint: e })),
                w = s.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.red0, borderColor: e.colors.red100, borderWidth: "1px", borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16, maxWidth: "100%", gap: e.spaces.space8 }, button: { alignSelf: "flex-start", paddingHorizontal: 0, marginTop: e.spaces.space8 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, icon: { color: s.default.theme.colors.red500, marginEnd: e.spaces.space4 }, paddedContainer: { paddingBottom: e.spaces.space16 } })),
                S = r.memo(h);
        },
        900285: (e, a, n) => {
            n.r(a), n.d(a, { default: () => K });
            var r = n(202784),
                i = n(325686),
                t = n(731708),
                l = n(154003),
                s = n(167630),
                o = n(392237),
                u = n(111677),
                c = n.n(u),
                d = n(191796),
                m = n(187669),
                p = n(399398),
                _ = n(177210),
                g = n(337394),
                f = n(147595),
                y = n(811574),
                v = n(293115),
                k = n(725405),
                b = n(443781);
            const F = c().ie4f57d2,
                h = c().h293aa52,
                w = c().j1923668,
                S = c().ac7e97ee,
                C = { PremiumBasic: c().f70c69b4, BlueVerified: c().f4cec4d2, BlueVerifiedPlus: c().f4cec4d2 },
                E = ({ activeRestId: e }) => {
                    const a = (0, k.Z)(),
                        [n, o] = r.useState(!1);
                    (0, m.q)(() => {
                        a.scribeAction("impression");
                    });
                    const u = (0, _.Z)({ returnUrl: `https://${window.location.host}/home`, originProduct: "TwitterBlue" }),
                        c = g.v5.premium[e ?? ""];
                    return r.createElement(
                        p.g,
                        { testID: "renew-subscription-module" },
                        r.createElement(
                            i.Z,
                            { "aria-label": F, role: "complementary", style: T.root },
                            r.createElement(t.ZP, { size: "headline1", weight: "heavy" }, h),
                            r.createElement(t.ZP, null, w, " ", C[c]),
                            r.createElement(
                                l.ZP,
                                {
                                    disabled: n,
                                    icon: n ? r.createElement(s.Z, null) : r.createElement(d.default, null),
                                    onPress: () => {
                                        a.scribeAction("click"), u?.(), o(!0);
                                    },
                                },
                                S,
                            ),
                        ),
                    );
                },
                Z = () => {
                    const { featureSwitches: e } = (0, b.QZ)(),
                        a = (0, y.Z)();
                    if (!a) return null;
                    const n = (0, f.R)(a);
                    return n && "Stripe" === n.payment_source && "Expire" === n.state && e.isTrue("subscriptions_management_renew_module_enabled") ? r.createElement(v.nO, { namespace: { component: "renew-subscription-module", element: "renew-button" } }, r.createElement(E, { activeRestId: n?.product?.rest_id })) : null;
                },
                K = () => {
                    const { featureSwitches: e, userClaims: a } = (0, b.QZ)();
                    return e.isTrue("subscriptions_management_renew_module_api_enabled") && a.isAnyPremiumSubscriber() && !a.isAnyVerifiedOrgOrAffiliate() ? r.createElement(Z, null) : null;
                },
                T = o.default.create((e) => ({ root: { position: "relative", alignItems: "flex-start", gap: 10, flexDirection: "column", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }));
        },
        282559: (e, a, n) => {
            n.d(a, { v: () => o });
            n(571372);
            var r = n(96768),
                i = n(202784),
                t = (n(585488), n(351743)),
                l = n.n(t);
            const s = r.Z,
                o = ({ originProduct: e, returnUrl: a }) => {
                    const [n, r] = l()(s);
                    return [
                        i.useCallback(
                            () =>
                                new Promise((r, i) => {
                                    n({
                                        variables: { return_url: a, origin_product: e },
                                        onCompleted: ({ customerportalsession_create: e }, a) => {
                                            const n = e?.customer_portal_session_url ?? void 0;
                                            n ? r(n) : i(new Error("Missing portal URL"));
                                        },
                                        onError: i,
                                    });
                                }),
                            [n, a, e],
                        ),
                        r,
                    ];
                };
        },
        177210: (e, a, n) => {
            n.d(a, { Z: () => c });
            var r = n(202784),
                i = n(111677),
                t = n.n(i),
                l = n(782826),
                s = n(282559),
                o = n(782642);
            const u = t().ef4602ec;
            function c(e) {
                const a = (0, o.p)(),
                    [n, i] = (0, s.v)(e),
                    t = r.useCallback(() => {
                        n()
                            .then((e) => {
                                l.ZP.navigateTo(e);
                            })
                            .catch(() => {
                                a({ text: u });
                            });
                    }, [n, a]);
                return i ? void 0 : t;
            }
        },
        147595: (e, a, n) => {
            n.d(a, { R: () => i });
            var r = n(337394);
            const i = (e) => {
                const a = e.find((e) => e.product?.rest_id && r.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Stripe" === e.payment_source),
                    n = e.find((e) => e.product?.rest_id && r.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Twitter" !== e.payment_source && "Ads" !== e.payment_source),
                    i = e.find((e) => e.product?.rest_id && r.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && ("Twitter" === e.payment_source || "Ads" === e.payment_source));
                return a || n || i;
            };
        },
        620243: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = n(587510),
                i = (n(585488), n(535338));
            const t = r.Z,
                l = () => {
                    const { viewer: e } = (0, i.p)(t, {});
                    return e.user_results.result || {};
                };
        },
        918588: (e, a, n) => {
            n.d(a, { Z: () => s });
            var r = n(380327),
                i = (n(585488), n(712696)),
                t = n.n(i);
            const l = r.Z;
            const s = function () {
                const e = t()(l, {});
                return (e.quick_promote_advertiser_accounts?.items ?? []).reduce((e, a) => e + (a?.campaigns?.total_count ?? 0), 0);
            };
        },
        661810: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = n(202784),
                i = n(325686),
                t = n(392237);
            function l({ spacing: e, style: a }) {
                return r.createElement(i.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? t.default.theme.spaces[e] : void 0 }, a] });
            }
            const s = t.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        730895: (e, a, n) => {
            var r = n(821176);
            e.exports = function () {
                var e = r(this),
                    a = "";
                return e.hasIndices && (a += "d"), e.global && (a += "g"), e.ignoreCase && (a += "i"), e.multiline && (a += "m"), e.dotAll && (a += "s"), e.unicode && (a += "u"), e.unicodeSets && (a += "v"), e.sticky && (a += "y"), a;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PremiumLoaders.a8865ada.js.map
