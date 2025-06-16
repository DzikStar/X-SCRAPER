"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PremiumLoaders", "icons/IconBookmarkPlusStroke-js", "icons/IconFeedback-js", "icons/IconFilterFill-js", "icons/IconRepliesStroke-js", "icons/IconStrikethrough-js", "icons/IconThumbsUpFill-js"],
    {
        96768: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a,
                i,
                n,
                l = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (i = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateStripePortalUrlMutation",
                        selections: (n = [
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
                    operation: { argumentDefinitions: [i, a], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: n },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            l.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const s = l;
        },
        587510: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a,
                i,
                n,
                l,
                s,
                o,
                c,
                d,
                u,
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
                                                                        (i = { alias: null, args: null, concreteType: "StripeConnectAccount", kind: "LinkedField", name: "stripe_connect_account", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }], storageKey: null }),
                                                                        (l = {
                                                                            alias: null,
                                                                            args: (n = [{ kind: "Literal", name: "verified_program_types", value: ["AdRevenueSharing", "SuperFollows"] }]),
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
                                                                            args: n,
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
                                                                            args: n,
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
                                                    { kind: "InlineFragment", selections: [i, l, s, c, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [d, u, (m = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, m], type: "User", abstractKey: null },
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
        380327: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a,
                i,
                n,
                l,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: (a = [{ kind: "Literal", name: "cursor", value: "" }]), concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: (n = [{ kind: "Literal", name: "filter_by_delivered_in_interval", value: { end_date: "2025-12-31", start_date: "2024-01-01" } }]), concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: a, concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [i, { alias: null, args: n, concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [l, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }, s], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }] },
                    params: { id: "UFD9D7pipG78WFN0SJviDg", metadata: {}, name: "useTotalAdCampaignsForUserQuery", operationKind: "query", text: null },
                };
            o.hash = "200a7af54c9c3ed7753c0291e92e188f";
            const c = o;
        },
        919057: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(443781),
                n = r(736063),
                l = r(918588),
                s = r(727828);
            function o() {
                const { featureSwitches: e } = (0, i.QZ)();
                return (0, l.Z)() > 0 && e.isTrue("vo_upsell_enabled") ? a.createElement(s.Z, { testID: "vo-ad-credit-upsell", variant: "VerifiedOrgsAdCredit" }) : null;
            }
            const c = function () {
                return a.createElement(n.H, { errorConfig: { context: "AD_CREDIT_UPSELL" } }, a.createElement(o, null));
            };
        },
        127939: (e, t, r) => {
            r.r(t), r.d(t, { default: () => R });
            var a = r(202784),
                i = r(400752),
                n = r(325686),
                l = r(811176),
                s = r(420740),
                o = r(682830),
                c = r(392237),
                d = r(111677),
                u = r.n(d),
                m = r(841972),
                p = r(647174),
                g = r(530813),
                v = r(420182),
                _ = r(443781),
                h = r(56851),
                y = r(736063),
                f = r(88660),
                k = r(39182),
                b = r(313129),
                w = r(738124),
                Z = r(643426),
                E = r(293115),
                S = r(725405),
                F = r(620243);
            const C = u().f0701753,
                K = u().j7d0e836,
                T = u().d227d19e,
                z = { isCollapsed: !1 },
                L = ({ dismiss: e }) => {
                    (0, k.E)();
                    const { featureSwitches: t } = (0, _.QZ)(),
                        r = t.isTrue("rweb_sourcemap_migration"),
                        o = (0, S.Z)(),
                        [c, d] = a.useState(!1),
                        u = (0, i.Dv)(v.lZ),
                        [y, f] = a.useState(null);
                    a.useEffect(() => {
                        u.get("rweb.premiumModule").then((e) => {
                            f(e || z);
                        });
                    }, [u]);
                    let E = "/premium/module";
                    y?.isCollapsed && (E += "?collapsed=true");
                    const F = (0, b._3)(E, { refreshTimeMs: 1e4 });
                    if (!y) return null;
                    if (!F) return a.createElement(h.Z, null);
                    const L = () => {
                            d(!c);
                        },
                        P = () => {
                            e(), o.scribeAction("dismiss"), d(!1);
                        },
                        V = () => {
                            o.scribeAction(y.isCollapsed ? "expand" : "collapse");
                            const e = { isCollapsed: !y.isCollapsed };
                            f(e), u.set("rweb.premiumModule", e), d(!1);
                        };
                    return F.jfResponse?.root.value
                        ? a.createElement(
                              Z.b.Provider,
                              { value: { dismiss: L } },
                              a.createElement(
                                  n.Z,
                                  { style: r ? M.containerRedesign : M.container },
                                  c
                                      ? a.createElement(l.Z, {
                                            items: [
                                                { onClick: V, text: y.isCollapsed ? K : T, Icon: y.isCollapsed ? m.default : p.default },
                                                { onClick: P, text: C({ number: 7 }), Icon: g.default },
                                            ],
                                            onCloseRequested: L,
                                        })
                                      : null,
                                  F.jfResponse?.root.value ? a.createElement(w.Z, { payload: F.jfResponse.root.value }) : null,
                              ),
                          )
                        : a.createElement(s.Z, { onRetry: null, title: F.error });
                },
                P = () => {
                    const { dismiss: e, impress: t, shouldShow: r } = (0, f.ZP)({ key: "premium_module_v1", dismissForMsec: f.IZ, showForMsec: null, reappearAfterMsec: null });
                    return (
                        a.useEffect(() => {
                            t();
                        }, [t]),
                        r ? a.createElement(E.nO, { namespace: { component: "premium_module " } }, a.createElement(L, { dismiss: e })) : null
                    );
                },
                V = () => {
                    const { verified_program_application_status: e, verified_program_eligibility: t, verified_user_profiles: r } = (0, F.Z)(),
                        { featureSwitches: i } = (0, _.QZ)(),
                        n = r?.ad_revenue_sharing_user_profile?.is_active;
                    if ((n || (0 === t?.ad_revenue_sharing_eligibility?.length && "NotStarted" === e?.ad_revenue_sharing_application_status)) && i.isTrue("subscriptions_premium_module_enabled")) return a.createElement(a.Suspense, { fallback: a.createElement(o.J, null) }, a.createElement(P, null));
                },
                R = () => {
                    const { featureSwitches: e, userClaims: t } = (0, _.QZ)();
                    return t.isAnyPremiumSubscriber() && e.isTrue("subscriptions_premium_module_creator_gate_enabled") ? a.createElement(y.H, { errorConfig: { context: "premium_module" } }, a.createElement(V, null)) : null;
                },
                M = c.default.create((e) => ({ container: { marginBottom: e.spaces.space12 }, containerRedesign: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 } }));
        },
        293605: (e, t, r) => {
            r.r(t), r.d(t, { default: () => E });
            var a = r(202784),
                i = r(325686),
                n = r(731708),
                l = r(154003),
                s = r(392237),
                o = r(111677),
                c = r.n(o),
                d = r(211971),
                u = r(443781),
                m = r(736063),
                p = r(177210),
                g = r(782826),
                v = r(725405),
                _ = r(199232);
            const h = c().fbf83158,
                y = c().jadeb4da,
                f = c().bce3726a,
                k = ({ entryPoint: e, originProduct: t }) => {
                    const r = (0, v.Z)(),
                        { origin: s } = g.ZP.get(),
                        o = (0, p.Z)({ returnUrl: `${s}/i/profile`, originProduct: t }),
                        c = `payment_failure_alert_card_${e}_sidebar`;
                    a.useEffect(() => {
                        r.scribe({ component: c, action: "impression" });
                    }, [r, c]);
                    const u = a.useCallback(() => {
                        r.scribe({ component: c, action: "click", element: `payment_failure_${e}_sidebar` }), o?.();
                    }, [o, r, c, e]);
                    return a.createElement(i.Z, { style: Z.cardBlock, testID: "paymentCardBlock" }, a.createElement(i.Z, { style: Z.inner }, a.createElement(n.ZP, { size: "headline1", style: Z.heading, weight: "heavy" }, a.createElement(d.default, { style: Z.icon, testID: "errorIcon" }), h), a.createElement(n.ZP, { size: "body", style: Z.subheading }, y), a.createElement(l.ZP, { onClick: u, style: Z.button, type: "primaryFilled" }, f)));
                },
                b = ({ entryPoint: e }) => {
                    const { featureSwitches: t } = (0, u.QZ)(),
                        { hasPremiumPaymentFailure: r, hasVerifiedOrgPaymentFailure: n } = (0, _.Z)(["VerifiedOrganization", "Premium"]);
                    return (n && t.isTrue("subscriptions_management_failed_payment_profile_card_enabled")) || (r && t.isTrue("subscriptions_management_failed_payment_message_premium_enabled")) ? a.createElement(i.Z, { style: Z.paddedContainer, testID: "paymentCardView" }, a.createElement(k, { entryPoint: e, originProduct: n ? "VerifiedOrganizations" : "TwitterBlue" })) : null;
                },
                w = ({ entryPoint: e }) => a.createElement(m.H, { errorConfig: { context: "payment_alert_card" } }, a.createElement(b, { entryPoint: e })),
                Z = s.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.red0, borderColor: e.colors.red100, borderWidth: "1px", borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16, maxWidth: "100%", gap: e.spaces.space8 }, button: { alignSelf: "flex-start", paddingHorizontal: 0, marginTop: e.spaces.space8 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, icon: { color: s.default.theme.colors.red500, marginEnd: e.spaces.space4 }, paddedContainer: { paddingBottom: e.spaces.space16 } })),
                E = a.memo(w);
        },
        900285: (e, t, r) => {
            r.r(t), r.d(t, { default: () => K });
            var a = r(202784),
                i = r(325686),
                n = r(731708),
                l = r(154003),
                s = r(167630),
                o = r(392237),
                c = r(111677),
                d = r.n(c),
                u = r(191796),
                m = r(187669),
                p = r(399398),
                g = r(177210),
                v = r(337394),
                _ = r(147595),
                h = r(811574),
                y = r(293115),
                f = r(725405),
                k = r(443781);
            const b = d().ie4f57d2,
                w = d().h293aa52,
                Z = d().j1923668,
                E = d().ac7e97ee,
                S = { PremiumBasic: d().f70c69b4, BlueVerified: d().f4cec4d2, BlueVerifiedPlus: d().f4cec4d2 },
                F = ({ activeRestId: e }) => {
                    const t = (0, f.Z)(),
                        [r, o] = a.useState(!1);
                    (0, m.q)(() => {
                        t.scribeAction("impression");
                    });
                    const c = (0, g.Z)({ returnUrl: `https://${window.location.host}/home`, originProduct: "TwitterBlue" }),
                        d = v.v5.premium[e ?? ""];
                    return a.createElement(
                        p.g,
                        { testID: "renew-subscription-module" },
                        a.createElement(
                            i.Z,
                            { "aria-label": b, role: "complementary", style: T.root },
                            a.createElement(n.ZP, { size: "headline1", weight: "heavy" }, w),
                            a.createElement(n.ZP, null, Z, " ", S[d]),
                            a.createElement(
                                l.ZP,
                                {
                                    disabled: r,
                                    icon: r ? a.createElement(s.Z, null) : a.createElement(u.default, null),
                                    onPress: () => {
                                        t.scribeAction("click"), c?.(), o(!0);
                                    },
                                },
                                E,
                            ),
                        ),
                    );
                },
                C = () => {
                    const { featureSwitches: e } = (0, k.QZ)(),
                        t = (0, h.Z)();
                    if (!t) return null;
                    const r = (0, _.R)(t);
                    return r && "Stripe" === r.payment_source && "Expire" === r.state && e.isTrue("subscriptions_management_renew_module_enabled") ? a.createElement(y.nO, { namespace: { component: "renew-subscription-module", element: "renew-button" } }, a.createElement(F, { activeRestId: r?.product?.rest_id })) : null;
                },
                K = () => {
                    const { featureSwitches: e, userClaims: t } = (0, k.QZ)();
                    return e.isTrue("subscriptions_management_renew_module_api_enabled") && t.isAnyPremiumSubscriber() && !t.isAnyVerifiedOrgOrAffiliate() ? a.createElement(C, null) : null;
                },
                T = o.default.create((e) => ({ root: { position: "relative", alignItems: "flex-start", gap: 10, flexDirection: "column", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }));
        },
        282559: (e, t, r) => {
            r.d(t, { v: () => o });
            r(571372);
            var a = r(96768),
                i = r(202784),
                n = (r(585488), r(351743)),
                l = r.n(n);
            const s = a.Z,
                o = ({ originProduct: e, returnUrl: t }) => {
                    const [r, a] = l()(s);
                    return [
                        i.useCallback(
                            () =>
                                new Promise((a, i) => {
                                    r({
                                        variables: { return_url: t, origin_product: e },
                                        onCompleted: ({ customerportalsession_create: e }, t) => {
                                            const r = e?.customer_portal_session_url ?? void 0;
                                            r ? a(r) : i(new Error("Missing portal URL"));
                                        },
                                        onError: i,
                                    });
                                }),
                            [r, t, e],
                        ),
                        a,
                    ];
                };
        },
        177210: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(202784),
                i = r(111677),
                n = r.n(i),
                l = r(782826),
                s = r(282559),
                o = r(782642);
            const c = n().ef4602ec;
            function d(e) {
                const t = (0, o.p)(),
                    [r, i] = (0, s.v)(e),
                    n = a.useCallback(() => {
                        r()
                            .then((e) => {
                                l.ZP.navigateTo(e);
                            })
                            .catch(() => {
                                t({ text: c });
                            });
                    }, [r, t]);
                return i ? void 0 : n;
            }
        },
        147595: (e, t, r) => {
            r.d(t, { R: () => i });
            var a = r(337394);
            const i = (e) => {
                const t = e.find((e) => e.product?.rest_id && a.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Stripe" === e.payment_source),
                    r = e.find((e) => e.product?.rest_id && a.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Twitter" !== e.payment_source && "Ads" !== e.payment_source),
                    i = e.find((e) => e.product?.rest_id && a.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && ("Twitter" === e.payment_source || "Ads" === e.payment_source));
                return t || r || i;
            };
        },
        620243: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(587510),
                i = (r(585488), r(535338));
            const n = a.Z,
                l = () => {
                    const { viewer: e } = (0, i.p)(n, {});
                    return e.user_results.result || {};
                };
        },
        918588: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(380327),
                i = (r(585488), r(712696)),
                n = r.n(i);
            const l = a.Z;
            const s = function () {
                const e = n()(l, {});
                return (e.quick_promote_advertiser_accounts?.items ?? []).reduce((e, t) => e + (t?.campaigns?.total_count ?? 0), 0);
            };
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784),
                i = r(325686),
                n = r(392237);
            function l({ spacing: e, style: t }) {
                return a.createElement(i.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        916910: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        818088: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        971657: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        790093: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        194417: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M16 3v8h-3V8.5H3v-3h10V3h3zm5 12.5h-9v3h9v-3zM10 21v-8H7v2.5H3v3h4V21h3zm8-12.5h3v-3h-3v3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        368761: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12.312 23.736c-.123 0-.246-.03-.358-.091-.241-.132-.392-.385-.392-.659v-.871c0-.414.336-.75.75-.75.256 0 .482.128.617.324 1.905-1.247 4.823-3.192 5.908-4.11 2.256-1.908 3.604-4.732 3.608-7.554 0-.414.336-.749.75-.749s.75.337.749.751c-.004 3.256-1.552 6.507-4.14 8.697-1.326 1.121-5.009 3.546-7.086 4.892-.124.08-.266.12-.408.12zm-2.557-1.897c1.697-1.082 6.672-4.317 8.048-5.48 1.902-1.609 3.04-3.976 3.043-6.329-.006-4.366-3.433-7.787-7.8-7.787l-4.149-.01c-4.375-.001-7.801 3.426-7.801 7.801 0 4.104 3.14 7.204 7.465 7.37.002 1.79.008 2.88.058 3.544-.041.101-.061.21-.055.322.009.178.081.344.198.471.111.241.283.241.552.241.163 0 .316-.053.441-.144zm3.289-18.097c3.529 0 6.298 2.763 6.302 6.287-.003 1.917-.941 3.855-2.512 5.184-1.03.871-4.478 3.16-6.771 4.645l-.002-3.175c0-.403-.319-.734-.722-.749l-.721-.027c-3.49-.135-6.022-2.604-6.022-5.872 0-3.534 2.768-6.302 6.299-6.302l4.149.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        226597: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        155353: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        69893: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        922449: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M5.996 10.06L6 19.907v-9.851zM6 20.332V21H2V8h1.5c.742 0 1.442.328 1.92.9.334.398.532.886.573 1.407L6 20.331zm15.78-8.051c.238-1.043-.009-2.121-.677-2.958-.67-.841-1.67-1.322-2.743-1.322H14.5l.614-3.684c.095-.578-.068-1.168-.448-1.615-.378-.445-.931-.701-1.516-.701-1.297 0-1.429.537-4.63 5.239C8.182 7.737 8 8.325 8 8.926v12.076h8.2c2.088 0 3.935-1.472 4.389-3.496l1.19-5.224z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        730895: (e, t, r) => {
            var a = r(821176);
            e.exports = function () {
                var e = a(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PremiumLoaders.162fedca.js.map
