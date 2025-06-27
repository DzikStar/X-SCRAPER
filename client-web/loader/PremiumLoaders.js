"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PremiumLoaders"],
    {
        96768: (e, r, n) => {
            n.d(r, { Z: () => s });
            var a,
                t,
                i,
                l = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (t = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
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
                    operation: { argumentDefinitions: [t, a], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: i },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            l.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const s = l;
        },
        587510: (e, r, n) => {
            n.d(r, { Z: () => _ });
            var a,
                t,
                i,
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
                                    args: (a = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                                        (u = {
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
                                args: a,
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
                                                    { kind: "InlineFragment", selections: [t, l, s, u, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [c, d, (m = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, m], type: "User", abstractKey: null },
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
        380327: (e, r, n) => {
            n.d(r, { Z: () => u });
            var a,
                t,
                i,
                l,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: (a = [{ kind: "Literal", name: "cursor", value: "" }]), concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: (i = [{ kind: "Literal", name: "filter_by_delivered_in_interval", value: { end_date: "2025-12-31", start_date: "2024-01-01" } }]), concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: a, concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [t, { alias: null, args: i, concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [l, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }, s], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }] },
                    params: { id: "UFD9D7pipG78WFN0SJviDg", metadata: {}, name: "useTotalAdCampaignsForUserQuery", operationKind: "query", text: null },
                };
            o.hash = "200a7af54c9c3ed7753c0291e92e188f";
            const u = o;
        },
        919057: (e, r, n) => {
            n.r(r), n.d(r, { default: () => u });
            var a = n(202784),
                t = n(443781),
                i = n(736063),
                l = n(918588),
                s = n(727828);
            function o() {
                const { featureSwitches: e } = (0, t.QZ)();
                return (0, l.Z)() > 0 && e.isTrue("vo_upsell_enabled") ? a.createElement(s.Z, { testID: "vo-ad-credit-upsell", variant: "VerifiedOrgsAdCredit" }) : null;
            }
            const u = function () {
                return a.createElement(i.H, { errorConfig: { context: "AD_CREDIT_UPSELL" } }, a.createElement(o, null));
            };
        },
        127939: (e, r, n) => {
            n.r(r), n.d(r, { default: () => k });
            var a = n(202784),
                t = n(400752),
                i = n(420740),
                l = n(682830),
                s = (n(111677), n(420182)),
                o = n(443781),
                u = n(736063),
                c = n(88660),
                d = n(39182),
                m = n(293115),
                p = n(725405),
                _ = n(620243);
            const g = { isCollapsed: !1 },
                f = ({ dismiss: e }) => {
                    (0, d.E)();
                    const { featureSwitches: r } = (0, o.QZ)(),
                        [n, l] = (r.isTrue("rweb_sourcemap_migration"), (0, p.Z)(), a.useState(!1)),
                        u = (0, t.Dv)(s.lZ),
                        [c, m] = a.useState(null);
                    if (
                        (a.useEffect(() => {
                            u.get("rweb.premiumModule").then((e) => {
                                m(e || g);
                            });
                        }, [u]),
                        !c)
                    )
                        return null;
                    return a.createElement(i.Z, { onRetry: null });
                },
                y = () => {
                    const { dismiss: e, impress: r, shouldShow: n } = (0, c.ZP)({ key: "premium_module_v1", dismissForMsec: c.IZ, showForMsec: null, reappearAfterMsec: null });
                    return (
                        a.useEffect(() => {
                            r();
                        }, [r]),
                        n ? a.createElement(m.nO, { namespace: { component: "premium_module " } }, a.createElement(f, { dismiss: e })) : null
                    );
                },
                v = () => {
                    const { verified_program_application_status: e, verified_program_eligibility: r, verified_user_profiles: n } = (0, _.Z)(),
                        { featureSwitches: t } = (0, o.QZ)(),
                        i = n?.ad_revenue_sharing_user_profile?.is_active;
                    if ((i || (0 === r?.ad_revenue_sharing_eligibility?.length && "NotStarted" === e?.ad_revenue_sharing_application_status)) && t.isTrue("subscriptions_premium_module_enabled")) return a.createElement(a.Suspense, { fallback: a.createElement(l.J, null) }, a.createElement(y, null));
                },
                k = () => {
                    const { featureSwitches: e, userClaims: r } = (0, o.QZ)();
                    return r.isAnyPremiumSubscriber() && e.isTrue("subscriptions_premium_module_creator_gate_enabled") ? a.createElement(u.H, { errorConfig: { context: "premium_module" } }, a.createElement(v, null)) : null;
                };
        },
        293605: (e, r, n) => {
            n.r(r), n.d(r, { default: () => F });
            var a = n(202784),
                t = n(325686),
                i = n(731708),
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
                b = ({ entryPoint: e, originProduct: r }) => {
                    const n = (0, g.Z)(),
                        { origin: s } = _.ZP.get(),
                        o = (0, p.Z)({ returnUrl: `${s}/i/profile`, originProduct: r }),
                        u = `payment_failure_alert_card_${e}_sidebar`;
                    a.useEffect(() => {
                        n.scribe({ component: u, action: "impression" });
                    }, [n, u]);
                    const d = a.useCallback(() => {
                        n.scribe({ component: u, action: "click", element: `payment_failure_${e}_sidebar` }), o?.();
                    }, [o, n, u, e]);
                    return a.createElement(t.Z, { style: h.cardBlock, testID: "paymentCardBlock" }, a.createElement(t.Z, { style: h.inner }, a.createElement(i.ZP, { size: "headline1", style: h.heading, weight: "heavy" }, a.createElement(c.default, { style: h.icon, testID: "errorIcon" }), y), a.createElement(i.ZP, { size: "body", style: h.subheading }, v), a.createElement(l.ZP, { onClick: d, style: h.button, type: "primaryFilled" }, k)));
                },
                w = ({ entryPoint: e }) => {
                    const { featureSwitches: r } = (0, d.QZ)(),
                        { hasPremiumPaymentFailure: n, hasVerifiedOrgPaymentFailure: i } = (0, f.Z)(["VerifiedOrganization", "Premium"]);
                    return (i && r.isTrue("subscriptions_management_failed_payment_profile_card_enabled")) || (n && r.isTrue("subscriptions_management_failed_payment_message_premium_enabled")) ? a.createElement(t.Z, { style: h.paddedContainer, testID: "paymentCardView" }, a.createElement(b, { entryPoint: e, originProduct: i ? "VerifiedOrganizations" : "TwitterBlue" })) : null;
                },
                S = ({ entryPoint: e }) => a.createElement(m.H, { errorConfig: { context: "payment_alert_card" } }, a.createElement(w, { entryPoint: e })),
                h = s.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.red0, borderColor: e.colors.red100, borderWidth: "1px", borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16, maxWidth: "100%", gap: e.spaces.space8 }, button: { alignSelf: "flex-start", paddingHorizontal: 0, marginTop: e.spaces.space8 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, icon: { color: s.default.theme.colors.red500, marginEnd: e.spaces.space4 }, paddedContainer: { paddingBottom: e.spaces.space16 } })),
                F = a.memo(S);
        },
        900285: (e, r, n) => {
            n.r(r), n.d(r, { default: () => Z });
            var a = n(202784),
                t = n(325686),
                i = n(731708),
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
            const w = c().ie4f57d2,
                S = c().h293aa52,
                h = c().j1923668,
                F = c().ac7e97ee,
                E = { PremiumBasic: c().f70c69b4, BlueVerified: c().f4cec4d2, BlueVerifiedPlus: c().f4cec4d2 },
                K = ({ activeRestId: e }) => {
                    const r = (0, k.Z)(),
                        [n, o] = a.useState(!1);
                    (0, m.q)(() => {
                        r.scribeAction("impression");
                    });
                    const u = (0, _.Z)({ returnUrl: `https://${window.location.host}/home`, originProduct: "TwitterBlue" }),
                        c = g.v5.premium[e ?? ""];
                    return a.createElement(
                        p.g,
                        { testID: "renew-subscription-module" },
                        a.createElement(
                            t.Z,
                            { "aria-label": w, role: "complementary", style: C.root },
                            a.createElement(i.ZP, { size: "headline1", weight: "heavy" }, S),
                            a.createElement(i.ZP, null, h, " ", E[c]),
                            a.createElement(
                                l.ZP,
                                {
                                    disabled: n,
                                    icon: n ? a.createElement(s.Z, null) : a.createElement(d.default, null),
                                    onPress: () => {
                                        r.scribeAction("click"), u?.(), o(!0);
                                    },
                                },
                                F,
                            ),
                        ),
                    );
                },
                T = () => {
                    const { featureSwitches: e } = (0, b.QZ)(),
                        r = (0, y.Z)();
                    if (!r) return null;
                    const n = (0, f.R)(r);
                    return n && "Stripe" === n.payment_source && "Expire" === n.state && e.isTrue("subscriptions_management_renew_module_enabled") ? a.createElement(v.nO, { namespace: { component: "renew-subscription-module", element: "renew-button" } }, a.createElement(K, { activeRestId: n?.product?.rest_id })) : null;
                },
                Z = () => {
                    const { featureSwitches: e, userClaims: r } = (0, b.QZ)();
                    return e.isTrue("subscriptions_management_renew_module_api_enabled") && r.isAnyPremiumSubscriber() && !r.isAnyVerifiedOrgOrAffiliate() ? a.createElement(T, null) : null;
                },
                C = o.default.create((e) => ({ root: { position: "relative", alignItems: "flex-start", gap: 10, flexDirection: "column", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }));
        },
        282559: (e, r, n) => {
            n.d(r, { v: () => o });
            n(571372);
            var a = n(96768),
                t = n(202784),
                i = (n(585488), n(351743)),
                l = n.n(i);
            const s = a.Z,
                o = ({ originProduct: e, returnUrl: r }) => {
                    const [n, a] = l()(s);
                    return [
                        t.useCallback(
                            () =>
                                new Promise((a, t) => {
                                    n({
                                        variables: { return_url: r, origin_product: e },
                                        onCompleted: ({ customerportalsession_create: e }, r) => {
                                            const n = e?.customer_portal_session_url ?? void 0;
                                            n ? a(n) : t(new Error("Missing portal URL"));
                                        },
                                        onError: t,
                                    });
                                }),
                            [n, r, e],
                        ),
                        a,
                    ];
                };
        },
        177210: (e, r, n) => {
            n.d(r, { Z: () => c });
            var a = n(202784),
                t = n(111677),
                i = n.n(t),
                l = n(782826),
                s = n(282559),
                o = n(782642);
            const u = i().ef4602ec;
            function c(e) {
                const r = (0, o.p)(),
                    [n, t] = (0, s.v)(e),
                    i = a.useCallback(() => {
                        n()
                            .then((e) => {
                                l.ZP.navigateTo(e);
                            })
                            .catch(() => {
                                r({ text: u });
                            });
                    }, [n, r]);
                return t ? void 0 : i;
            }
        },
        782642: (e, r, n) => {
            n.d(r, { p: () => l });
            var a = n(202784),
                t = n(125363),
                i = n(601576);
            const l = () => {
                    const e = (0, t.I0)(),
                        r = s(),
                        n = a.useRef(null);
                    return (
                        a.useEffect(() => () => clearTimeout(n.current), [r]),
                        a.useCallback(
                            (a) => {
                                e((0, i.fz)(a)), (n.current = setTimeout(() => r(), 3e3));
                            },
                            [e, r],
                        )
                    );
                },
                s = () => {
                    const e = (0, t.I0)();
                    return a.useCallback(() => e((0, i.RS)()), [e]);
                };
        },
        39182: (e, r, n) => {
            n.d(r, { E: () => l });
            n(571372);
            var a = n(202784),
                t = n(251067),
                i = n(355335);
            const l = () => {
                const e = a.useRef(null),
                    [r, n] = a.useState(Date.now()),
                    { isDev: l } = (0, i.Z)();
                return (
                    a.useEffect(() => {
                        if (!l || (0, t.fH)(t.vw.prod)) return;
                        const r = () => {
                            (e.current = new WebSocket("wss://localhost.x.com:3000/__dev")),
                                (e.current.onmessage = (e) => {
                                    if ("string" == typeof e.data) {
                                        const e = Date.now();
                                        n(e);
                                    }
                                }),
                                (e.current.onerror = (e) => {
                                    throw new Error(e.type);
                                }),
                                (e.current.onclose = () => {
                                    setTimeout(r, 3e3);
                                });
                        };
                        return (
                            r(),
                            () => {
                                e.current && e.current.close();
                            }
                        );
                    }, [l]),
                    r
                );
            };
        },
        355335: (e, r, n) => {
            n.d(r, { Z: () => o, k: () => s });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(202784),
                t = n(565058),
                i = n(400752),
                l = n(107267);
            const s = (0, t.cn)(!1),
                o = () => {
                    const e = (0, l.useHistory)(),
                        r = (0, l.useLocation)(),
                        [n, t] = (0, i.KO)(s);
                    a.useEffect(() => {
                        const e = new URLSearchParams(r.search).get("jfDev"),
                            n = sessionStorage.getItem("jfDev");
                        let a = !1;
                        e ? (("1" !== e && "true" !== e) || (a = !0), ("0" !== e && "false" !== e) || (a = !1)) : (a = "true" === n), a ? (t(!0), sessionStorage.setItem("jfDev", "true")) : (t(!1), sessionStorage.removeItem("jfDev"));
                    }, [r.search, t]);
                    const o = a.useCallback(
                        (n) => {
                            const a = new URLSearchParams(r.search);
                            n ? (a.set("jfDev", "1"), sessionStorage.setItem("jfDev", "true")) : (a.delete("jfDev"), sessionStorage.removeItem("jfDev"));
                            const i = a.toString();
                            e.push({ pathname: r.pathname, search: i }), t(n);
                        },
                        [e, r.pathname, r.search, t],
                    );
                    return {
                        isDev: n,
                        enableDev: a.useCallback(() => {
                            o(!0);
                        }, [o]),
                        disableDev: a.useCallback(() => {
                            o(!1);
                        }, [o]),
                    };
                };
        },
        147595: (e, r, n) => {
            n.d(r, { R: () => t });
            var a = n(337394);
            const t = (e) => {
                const r = e.find((e) => e.product?.rest_id && a.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Stripe" === e.payment_source),
                    n = e.find((e) => e.product?.rest_id && a.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Twitter" !== e.payment_source && "Ads" !== e.payment_source),
                    t = e.find((e) => e.product?.rest_id && a.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && ("Twitter" === e.payment_source || "Ads" === e.payment_source));
                return r || n || t;
            };
        },
        620243: (e, r, n) => {
            n.d(r, { Z: () => l });
            var a = n(587510),
                t = (n(585488), n(535338));
            const i = a.Z,
                l = () => {
                    const { viewer: e } = (0, t.p)(i, {});
                    return e.user_results.result || {};
                };
        },
        918588: (e, r, n) => {
            n.d(r, { Z: () => s });
            var a = n(380327),
                t = (n(585488), n(712696)),
                i = n.n(t);
            const l = a.Z;
            const s = function () {
                const e = i()(l, {});
                return (e.quick_promote_advertiser_accounts?.items ?? []).reduce((e, r) => e + (r?.campaigns?.total_count ?? 0), 0);
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PremiumLoaders.366bdb2a.js.map
