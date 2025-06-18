"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PremiumLoaders", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        96768: (e, a, r) => {
            r.d(a, { Z: () => s });
            var n,
                t,
                i,
                l = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (t = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
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
                    operation: { argumentDefinitions: [t, n], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: i },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            l.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const s = l;
        },
        587510: (e, a, r) => {
            r.d(a, { Z: () => g });
            var n,
                t,
                i,
                l,
                s,
                o,
                c,
                u,
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
                                                                        (t = { alias: null, args: null, concreteType: "StripeConnectAccount", kind: "LinkedField", name: "stripe_connect_account", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }], storageKey: null }),
                                                                        (l = {
                                                                            alias: null,
                                                                            args: (i = [{ kind: "Literal", name: "verified_program_types", value: ["AdRevenueSharing", "SuperFollows"] }]),
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
                                                                            args: i,
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
                                                                            args: i,
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
                                                                        { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), { kind: "RequiredField", field: (d = { alias: null, args: [{ kind: "Literal", name: "view", value: { verification_flow: "CreatorIdv" } }], kind: "ScalarField", name: "identity_verification_status", storageKey: 'identity_verification_status(view:{"verification_flow":"CreatorIdv"})' }), action: "THROW" }], storageKey: null },
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
                                                    { kind: "InlineFragment", selections: [t, l, s, c, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [u, d, (m = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, m], type: "User", abstractKey: null },
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
            const g = p;
        },
        380327: (e, a, r) => {
            r.d(a, { Z: () => c });
            var n,
                t,
                i,
                l,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: (n = [{ kind: "Literal", name: "cursor", value: "" }]), concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: (i = [{ kind: "Literal", name: "filter_by_delivered_in_interval", value: { end_date: "2025-12-31", start_date: "2024-01-01" } }]), concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: n, concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [t, { alias: null, args: i, concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [l, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }, s], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }] },
                    params: { id: "UFD9D7pipG78WFN0SJviDg", metadata: {}, name: "useTotalAdCampaignsForUserQuery", operationKind: "query", text: null },
                };
            o.hash = "200a7af54c9c3ed7753c0291e92e188f";
            const c = o;
        },
        919057: (e, a, r) => {
            r.r(a), r.d(a, { default: () => c });
            var n = r(202784),
                t = r(443781),
                i = r(736063),
                l = r(918588),
                s = r(727828);
            function o() {
                const { featureSwitches: e } = (0, t.QZ)();
                return (0, l.Z)() > 0 && e.isTrue("vo_upsell_enabled") ? n.createElement(s.Z, { testID: "vo-ad-credit-upsell", variant: "VerifiedOrgsAdCredit" }) : null;
            }
            const c = function () {
                return n.createElement(i.H, { errorConfig: { context: "AD_CREDIT_UPSELL" } }, n.createElement(o, null));
            };
        },
        127939: (e, a, r) => {
            r.r(a), r.d(a, { default: () => I });
            var n = r(202784),
                t = r(400752),
                i = r(325686),
                l = r(811176),
                s = r(420740),
                o = r(682830),
                c = r(392237),
                u = r(111677),
                d = r.n(u),
                m = r(841972),
                p = r(647174),
                g = r(530813),
                _ = r(420182),
                y = r(443781),
                f = r(56851),
                v = r(736063),
                k = r(88660),
                h = r(39182),
                b = r(313129),
                w = r(738124),
                Z = r(643426),
                F = r(293115),
                S = r(725405),
                E = r(620243);
            const C = d().f0701753,
                K = d().j7d0e836,
                T = d().d227d19e,
                L = { isCollapsed: !1 },
                P = ({ dismiss: e }) => {
                    (0, h.E)();
                    const { featureSwitches: a } = (0, y.QZ)(),
                        r = a.isTrue("rweb_sourcemap_migration"),
                        o = (0, S.Z)(),
                        [c, u] = n.useState(!1),
                        d = (0, t.Dv)(_.lZ),
                        [v, k] = n.useState(null);
                    n.useEffect(() => {
                        d.get("rweb.premiumModule").then((e) => {
                            k(e || L);
                        });
                    }, [d]);
                    let F = "/premium/module";
                    v?.isCollapsed && (F += "?collapsed=true");
                    const E = (0, b._3)(F, { refreshTimeMs: 1e4 });
                    if (!v) return null;
                    if (!E) return n.createElement(f.Z, null);
                    const P = () => {
                            u(!c);
                        },
                        R = () => {
                            e(), o.scribeAction("dismiss"), u(!1);
                        },
                        A = () => {
                            o.scribeAction(v.isCollapsed ? "expand" : "collapse");
                            const e = { isCollapsed: !v.isCollapsed };
                            k(e), d.set("rweb.premiumModule", e), u(!1);
                        };
                    return E.jfResponse?.root.value
                        ? n.createElement(
                              Z.b.Provider,
                              { value: { dismiss: P } },
                              n.createElement(
                                  i.Z,
                                  { style: r ? V.containerRedesign : V.container },
                                  c
                                      ? n.createElement(l.Z, {
                                            items: [
                                                { onClick: A, text: v.isCollapsed ? K : T, Icon: v.isCollapsed ? m.default : p.default },
                                                { onClick: R, text: C({ number: 7 }), Icon: g.default },
                                            ],
                                            onCloseRequested: P,
                                        })
                                      : null,
                                  E.jfResponse?.root.value ? n.createElement(w.Z, { payload: E.jfResponse.root.value }) : null,
                              ),
                          )
                        : n.createElement(s.Z, { onRetry: null, title: E.error });
                },
                R = () => {
                    const { dismiss: e, impress: a, shouldShow: r } = (0, k.ZP)({ key: "premium_module_v1", dismissForMsec: k.IZ, showForMsec: null, reappearAfterMsec: null });
                    return (
                        n.useEffect(() => {
                            a();
                        }, [a]),
                        r ? n.createElement(F.nO, { namespace: { component: "premium_module " } }, n.createElement(P, { dismiss: e })) : null
                    );
                },
                A = () => {
                    const { verified_program_application_status: e, verified_program_eligibility: a, verified_user_profiles: r } = (0, E.Z)(),
                        { featureSwitches: t } = (0, y.QZ)(),
                        i = r?.ad_revenue_sharing_user_profile?.is_active;
                    if ((i || (0 === a?.ad_revenue_sharing_eligibility?.length && "NotStarted" === e?.ad_revenue_sharing_application_status)) && t.isTrue("subscriptions_premium_module_enabled")) return n.createElement(n.Suspense, { fallback: n.createElement(o.J, null) }, n.createElement(R, null));
                },
                I = () => {
                    const { featureSwitches: e, userClaims: a } = (0, y.QZ)();
                    return a.isAnyPremiumSubscriber() && e.isTrue("subscriptions_premium_module_creator_gate_enabled") ? n.createElement(v.H, { errorConfig: { context: "premium_module" } }, n.createElement(A, null)) : null;
                },
                V = c.default.create((e) => ({ container: { marginBottom: e.spaces.space12 }, containerRedesign: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 } }));
        },
        293605: (e, a, r) => {
            r.r(a), r.d(a, { default: () => F });
            var n = r(202784),
                t = r(325686),
                i = r(731708),
                l = r(154003),
                s = r(392237),
                o = r(111677),
                c = r.n(o),
                u = r(211971),
                d = r(443781),
                m = r(736063),
                p = r(177210),
                g = r(782826),
                _ = r(725405),
                y = r(199232);
            const f = c().fbf83158,
                v = c().jadeb4da,
                k = c().bce3726a,
                h = ({ entryPoint: e, originProduct: a }) => {
                    const r = (0, _.Z)(),
                        { origin: s } = g.ZP.get(),
                        o = (0, p.Z)({ returnUrl: `${s}/i/profile`, originProduct: a }),
                        c = `payment_failure_alert_card_${e}_sidebar`;
                    n.useEffect(() => {
                        r.scribe({ component: c, action: "impression" });
                    }, [r, c]);
                    const d = n.useCallback(() => {
                        r.scribe({ component: c, action: "click", element: `payment_failure_${e}_sidebar` }), o?.();
                    }, [o, r, c, e]);
                    return n.createElement(t.Z, { style: Z.cardBlock, testID: "paymentCardBlock" }, n.createElement(t.Z, { style: Z.inner }, n.createElement(i.ZP, { size: "headline1", style: Z.heading, weight: "heavy" }, n.createElement(u.default, { style: Z.icon, testID: "errorIcon" }), f), n.createElement(i.ZP, { size: "body", style: Z.subheading }, v), n.createElement(l.ZP, { onClick: d, style: Z.button, type: "primaryFilled" }, k)));
                },
                b = ({ entryPoint: e }) => {
                    const { featureSwitches: a } = (0, d.QZ)(),
                        { hasPremiumPaymentFailure: r, hasVerifiedOrgPaymentFailure: i } = (0, y.Z)(["VerifiedOrganization", "Premium"]);
                    return (i && a.isTrue("subscriptions_management_failed_payment_profile_card_enabled")) || (r && a.isTrue("subscriptions_management_failed_payment_message_premium_enabled")) ? n.createElement(t.Z, { style: Z.paddedContainer, testID: "paymentCardView" }, n.createElement(h, { entryPoint: e, originProduct: i ? "VerifiedOrganizations" : "TwitterBlue" })) : null;
                },
                w = ({ entryPoint: e }) => n.createElement(m.H, { errorConfig: { context: "payment_alert_card" } }, n.createElement(b, { entryPoint: e })),
                Z = s.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.red0, borderColor: e.colors.red100, borderWidth: "1px", borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16, maxWidth: "100%", gap: e.spaces.space8 }, button: { alignSelf: "flex-start", paddingHorizontal: 0, marginTop: e.spaces.space8 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, icon: { color: s.default.theme.colors.red500, marginEnd: e.spaces.space4 }, paddedContainer: { paddingBottom: e.spaces.space16 } })),
                F = n.memo(w);
        },
        900285: (e, a, r) => {
            r.r(a), r.d(a, { default: () => K });
            var n = r(202784),
                t = r(325686),
                i = r(731708),
                l = r(154003),
                s = r(167630),
                o = r(392237),
                c = r(111677),
                u = r.n(c),
                d = r(191796),
                m = r(187669),
                p = r(399398),
                g = r(177210),
                _ = r(337394),
                y = r(147595),
                f = r(811574),
                v = r(293115),
                k = r(725405),
                h = r(443781);
            const b = u().ie4f57d2,
                w = u().h293aa52,
                Z = u().j1923668,
                F = u().ac7e97ee,
                S = { PremiumBasic: u().f70c69b4, BlueVerified: u().f4cec4d2, BlueVerifiedPlus: u().f4cec4d2 },
                E = ({ activeRestId: e }) => {
                    const a = (0, k.Z)(),
                        [r, o] = n.useState(!1);
                    (0, m.q)(() => {
                        a.scribeAction("impression");
                    });
                    const c = (0, g.Z)({ returnUrl: `https://${window.location.host}/home`, originProduct: "TwitterBlue" }),
                        u = _.v5.premium[e ?? ""];
                    return n.createElement(
                        p.g,
                        { testID: "renew-subscription-module" },
                        n.createElement(
                            t.Z,
                            { "aria-label": b, role: "complementary", style: T.root },
                            n.createElement(i.ZP, { size: "headline1", weight: "heavy" }, w),
                            n.createElement(i.ZP, null, Z, " ", S[u]),
                            n.createElement(
                                l.ZP,
                                {
                                    disabled: r,
                                    icon: r ? n.createElement(s.Z, null) : n.createElement(d.default, null),
                                    onPress: () => {
                                        a.scribeAction("click"), c?.(), o(!0);
                                    },
                                },
                                F,
                            ),
                        ),
                    );
                },
                C = () => {
                    const { featureSwitches: e } = (0, h.QZ)(),
                        a = (0, f.Z)();
                    if (!a) return null;
                    const r = (0, y.R)(a);
                    return r && "Stripe" === r.payment_source && "Expire" === r.state && e.isTrue("subscriptions_management_renew_module_enabled") ? n.createElement(v.nO, { namespace: { component: "renew-subscription-module", element: "renew-button" } }, n.createElement(E, { activeRestId: r?.product?.rest_id })) : null;
                },
                K = () => {
                    const { featureSwitches: e, userClaims: a } = (0, h.QZ)();
                    return e.isTrue("subscriptions_management_renew_module_api_enabled") && a.isAnyPremiumSubscriber() && !a.isAnyVerifiedOrgOrAffiliate() ? n.createElement(C, null) : null;
                },
                T = o.default.create((e) => ({ root: { position: "relative", alignItems: "flex-start", gap: 10, flexDirection: "column", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }));
        },
        282559: (e, a, r) => {
            r.d(a, { v: () => o });
            r(571372);
            var n = r(96768),
                t = r(202784),
                i = (r(585488), r(351743)),
                l = r.n(i);
            const s = n.Z,
                o = ({ originProduct: e, returnUrl: a }) => {
                    const [r, n] = l()(s);
                    return [
                        t.useCallback(
                            () =>
                                new Promise((n, t) => {
                                    r({
                                        variables: { return_url: a, origin_product: e },
                                        onCompleted: ({ customerportalsession_create: e }, a) => {
                                            const r = e?.customer_portal_session_url ?? void 0;
                                            r ? n(r) : t(new Error("Missing portal URL"));
                                        },
                                        onError: t,
                                    });
                                }),
                            [r, a, e],
                        ),
                        n,
                    ];
                };
        },
        177210: (e, a, r) => {
            r.d(a, { Z: () => u });
            var n = r(202784),
                t = r(111677),
                i = r.n(t),
                l = r(782826),
                s = r(282559),
                o = r(782642);
            const c = i().ef4602ec;
            function u(e) {
                const a = (0, o.p)(),
                    [r, t] = (0, s.v)(e),
                    i = n.useCallback(() => {
                        r()
                            .then((e) => {
                                l.ZP.navigateTo(e);
                            })
                            .catch(() => {
                                a({ text: c });
                            });
                    }, [r, a]);
                return t ? void 0 : i;
            }
        },
        147595: (e, a, r) => {
            r.d(a, { R: () => t });
            var n = r(337394);
            const t = (e) => {
                const a = e.find((e) => e.product?.rest_id && n.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Stripe" === e.payment_source),
                    r = e.find((e) => e.product?.rest_id && n.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Twitter" !== e.payment_source && "Ads" !== e.payment_source),
                    t = e.find((e) => e.product?.rest_id && n.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && ("Twitter" === e.payment_source || "Ads" === e.payment_source));
                return a || r || t;
            };
        },
        620243: (e, a, r) => {
            r.d(a, { Z: () => l });
            var n = r(587510),
                t = (r(585488), r(535338));
            const i = n.Z,
                l = () => {
                    const { viewer: e } = (0, t.p)(i, {});
                    return e.user_results.result || {};
                };
        },
        918588: (e, a, r) => {
            r.d(a, { Z: () => s });
            var n = r(380327),
                t = (r(585488), r(712696)),
                i = r.n(t);
            const l = n.Z;
            const s = function () {
                const e = i()(l, {});
                return (e.quick_promote_advertiser_accounts?.items ?? []).reduce((e, a) => e + (a?.campaigns?.total_count ?? 0), 0);
            };
        },
        58399: (e, a, r) => {
            r.r(a), r.d(a, { default: () => c });
            var n = r(202784),
                t = r(890601),
                i = r(783427),
                l = r(717683),
                s = r(347101);
            const o = (e = {}) => {
                const a = n.useContext(l.Z),
                    { direction: r } = (0, i.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, a && s.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: r });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        246492: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var n = r(202784),
                t = r(890601),
                i = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, i.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        264171: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var n = r(202784),
                t = r(890601),
                i = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, i.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        98440: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var n = r(202784),
                t = r(890601),
                i = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, i.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        262009: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var n = r(202784),
                t = r(890601),
                i = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, i.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        465233: (e, a, r) => {
            r.d(a, { Z: () => t });
            var n = r(716406);
            function t(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(t) : (0, n.Z)(e, (e) => t(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PremiumLoaders.de6f765a.js.map
