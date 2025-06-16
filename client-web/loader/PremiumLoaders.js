"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PremiumLoaders", "icons/IconBookmarkPlusStroke-js", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconNumberedList-js", "icons/IconSound-js", "icons/IconSparkle-js", "icons/IconStar-js"],
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
                _ = r(420182),
                v = r(443781),
                y = r(56851),
                f = r(736063),
                h = r(88660),
                k = r(39182),
                b = r(313129),
                w = r(738124),
                Z = r(643426),
                E = r(293115),
                S = r(725405),
                F = r(620243);
            const C = u().f0701753,
                L = u().j7d0e836,
                K = u().d227d19e,
                T = { isCollapsed: !1 },
                z = ({ dismiss: e }) => {
                    (0, k.E)();
                    const { featureSwitches: t } = (0, v.QZ)(),
                        r = t.isTrue("rweb_sourcemap_migration"),
                        o = (0, S.Z)(),
                        [c, d] = a.useState(!1),
                        u = (0, i.Dv)(_.lZ),
                        [f, h] = a.useState(null);
                    a.useEffect(() => {
                        u.get("rweb.premiumModule").then((e) => {
                            h(e || T);
                        });
                    }, [u]);
                    let E = "/premium/module";
                    f?.isCollapsed && (E += "?collapsed=true");
                    const F = (0, b._3)(E, { refreshTimeMs: 1e4 });
                    if (!f) return null;
                    if (!F) return a.createElement(y.Z, null);
                    const z = () => {
                            d(!c);
                        },
                        P = () => {
                            e(), o.scribeAction("dismiss"), d(!1);
                        },
                        V = () => {
                            o.scribeAction(f.isCollapsed ? "expand" : "collapse");
                            const e = { isCollapsed: !f.isCollapsed };
                            h(e), u.set("rweb.premiumModule", e), d(!1);
                        };
                    return F.jfResponse?.root.value
                        ? a.createElement(
                              Z.b.Provider,
                              { value: { dismiss: z } },
                              a.createElement(
                                  n.Z,
                                  { style: r ? A.containerRedesign : A.container },
                                  c
                                      ? a.createElement(l.Z, {
                                            items: [
                                                { onClick: V, text: f.isCollapsed ? L : K, Icon: f.isCollapsed ? m.default : p.default },
                                                { onClick: P, text: C({ number: 7 }), Icon: g.default },
                                            ],
                                            onCloseRequested: z,
                                        })
                                      : null,
                                  F.jfResponse?.root.value ? a.createElement(w.Z, { payload: F.jfResponse.root.value }) : null,
                              ),
                          )
                        : a.createElement(s.Z, { onRetry: null, title: F.error });
                },
                P = () => {
                    const { dismiss: e, impress: t, shouldShow: r } = (0, h.ZP)({ key: "premium_module_v1", dismissForMsec: h.IZ, showForMsec: null, reappearAfterMsec: null });
                    return (
                        a.useEffect(() => {
                            t();
                        }, [t]),
                        r ? a.createElement(E.nO, { namespace: { component: "premium_module " } }, a.createElement(z, { dismiss: e })) : null
                    );
                },
                V = () => {
                    const { verified_program_application_status: e, verified_program_eligibility: t, verified_user_profiles: r } = (0, F.Z)(),
                        { featureSwitches: i } = (0, v.QZ)(),
                        n = r?.ad_revenue_sharing_user_profile?.is_active;
                    if ((n || (0 === t?.ad_revenue_sharing_eligibility?.length && "NotStarted" === e?.ad_revenue_sharing_application_status)) && i.isTrue("subscriptions_premium_module_enabled")) return a.createElement(a.Suspense, { fallback: a.createElement(o.J, null) }, a.createElement(P, null));
                },
                R = () => {
                    const { featureSwitches: e, userClaims: t } = (0, v.QZ)();
                    return t.isAnyPremiumSubscriber() && e.isTrue("subscriptions_premium_module_creator_gate_enabled") ? a.createElement(f.H, { errorConfig: { context: "premium_module" } }, a.createElement(V, null)) : null;
                },
                A = c.default.create((e) => ({ container: { marginBottom: e.spaces.space12 }, containerRedesign: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 } }));
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
                _ = r(725405),
                v = r(199232);
            const y = c().fbf83158,
                f = c().jadeb4da,
                h = c().bce3726a,
                k = ({ entryPoint: e, originProduct: t }) => {
                    const r = (0, _.Z)(),
                        { origin: s } = g.ZP.get(),
                        o = (0, p.Z)({ returnUrl: `${s}/i/profile`, originProduct: t }),
                        c = `payment_failure_alert_card_${e}_sidebar`;
                    a.useEffect(() => {
                        r.scribe({ component: c, action: "impression" });
                    }, [r, c]);
                    const u = a.useCallback(() => {
                        r.scribe({ component: c, action: "click", element: `payment_failure_${e}_sidebar` }), o?.();
                    }, [o, r, c, e]);
                    return a.createElement(i.Z, { style: Z.cardBlock, testID: "paymentCardBlock" }, a.createElement(i.Z, { style: Z.inner }, a.createElement(n.ZP, { size: "headline1", style: Z.heading, weight: "heavy" }, a.createElement(d.default, { style: Z.icon, testID: "errorIcon" }), y), a.createElement(n.ZP, { size: "body", style: Z.subheading }, f), a.createElement(l.ZP, { onClick: u, style: Z.button, type: "primaryFilled" }, h)));
                },
                b = ({ entryPoint: e }) => {
                    const { featureSwitches: t } = (0, u.QZ)(),
                        { hasPremiumPaymentFailure: r, hasVerifiedOrgPaymentFailure: n } = (0, v.Z)(["VerifiedOrganization", "Premium"]);
                    return (n && t.isTrue("subscriptions_management_failed_payment_profile_card_enabled")) || (r && t.isTrue("subscriptions_management_failed_payment_message_premium_enabled")) ? a.createElement(i.Z, { style: Z.paddedContainer, testID: "paymentCardView" }, a.createElement(k, { entryPoint: e, originProduct: n ? "VerifiedOrganizations" : "TwitterBlue" })) : null;
                },
                w = ({ entryPoint: e }) => a.createElement(m.H, { errorConfig: { context: "payment_alert_card" } }, a.createElement(b, { entryPoint: e })),
                Z = s.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.red0, borderColor: e.colors.red100, borderWidth: "1px", borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16, maxWidth: "100%", gap: e.spaces.space8 }, button: { alignSelf: "flex-start", paddingHorizontal: 0, marginTop: e.spaces.space8 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, icon: { color: s.default.theme.colors.red500, marginEnd: e.spaces.space4 }, paddedContainer: { paddingBottom: e.spaces.space16 } })),
                E = a.memo(w);
        },
        900285: (e, t, r) => {
            r.r(t), r.d(t, { default: () => L });
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
                _ = r(337394),
                v = r(147595),
                y = r(811574),
                f = r(293115),
                h = r(725405),
                k = r(443781);
            const b = d().ie4f57d2,
                w = d().h293aa52,
                Z = d().j1923668,
                E = d().ac7e97ee,
                S = { PremiumBasic: d().f70c69b4, BlueVerified: d().f4cec4d2, BlueVerifiedPlus: d().f4cec4d2 },
                F = ({ activeRestId: e }) => {
                    const t = (0, h.Z)(),
                        [r, o] = a.useState(!1);
                    (0, m.q)(() => {
                        t.scribeAction("impression");
                    });
                    const c = (0, g.Z)({ returnUrl: `https://${window.location.host}/home`, originProduct: "TwitterBlue" }),
                        d = _.v5.premium[e ?? ""];
                    return a.createElement(
                        p.g,
                        { testID: "renew-subscription-module" },
                        a.createElement(
                            i.Z,
                            { "aria-label": b, role: "complementary", style: K.root },
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
                        t = (0, y.Z)();
                    if (!t) return null;
                    const r = (0, v.R)(t);
                    return r && "Stripe" === r.payment_source && "Expire" === r.state && e.isTrue("subscriptions_management_renew_module_enabled") ? a.createElement(f.nO, { namespace: { component: "renew-subscription-module", element: "renew-button" } }, a.createElement(F, { activeRestId: r?.product?.rest_id })) : null;
                },
                L = () => {
                    const { featureSwitches: e, userClaims: t } = (0, k.QZ)();
                    return e.isTrue("subscriptions_management_renew_module_api_enabled") && t.isAnyPremiumSubscriber() && !t.isAnyVerifiedOrgOrAffiliate() ? a.createElement(C, null) : null;
                },
                K = o.default.create((e) => ({ root: { position: "relative", alignItems: "flex-start", gap: 10, flexDirection: "column", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }));
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
        58399: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(717683),
                s = r(347101);
            const o = (e = {}) => {
                const t = a.useContext(l.Z),
                    { direction: r } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, t && s.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: r });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        246492: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        518532: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 74 24", children: a.createElement("g", null, a.createElement("path", { d: "M9.827 17.667c-4.82 0-8.873-3.927-8.873-8.747S5.007.173 9.827.173c2.667 0 4.567 1.047 5.993 2.413l-1.687 1.687c-1.027-.96-2.413-1.707-4.307-1.707-3.52 0-6.273 2.84-6.273 6.36s2.753 6.36 6.273 6.36c2.28 0 3.587-.92 4.413-1.747.68-.68 1.132-1.668 1.3-3.008H10v-2.4h7.873c.087.428.127.935.127 1.495 0 1.793-.493 4.013-2.067 5.587-1.54 1.6-3.5 2.453-6.106 2.453zm20.806-5.627c0 3.24-2.533 5.633-5.633 5.633-3.107 0-5.633-2.387-5.633-5.633 0-3.267 2.527-5.633 5.633-5.633 3.1.006 5.633 2.373 5.633 5.633zm-2.466 0c0-2.027-1.467-3.413-3.167-3.413-1.7 0-3.167 1.387-3.167 3.413 0 2.007 1.467 3.413 3.167 3.413 1.7 0 3.167-1.406 3.167-3.413zm15.133-.007c0 3.24-2.527 5.633-5.633 5.633s-5.633-2.387-5.633-5.633c0-3.267 2.527-5.633 5.633-5.633S43.3 8.773 43.3 12.033zm-2.467 0c0-2.027-1.467-3.413-3.167-3.413S34.5 10.007 34.5 12.033c0 2.007 1.467 3.413 3.167 3.413s3.166-1.406 3.166-3.413zm14.5-5.286V16.86c0 4.16-2.453 5.867-5.353 5.867-2.733 0-4.373-1.833-4.993-3.327l2.153-.893c.387.92 1.32 2.007 2.84 2.007 1.853 0 3.007-1.153 3.007-3.307v-.813H52.9c-.553.68-1.62 1.28-2.967 1.28-2.813 0-5.267-2.453-5.267-5.613 0-3.18 2.453-5.652 5.267-5.652 1.347 0 2.413.6 2.967 1.26h.087v-.92h2.346zm-2.173 5.306c0-1.987-1.32-3.433-3.007-3.433-1.707 0-3.007 1.453-3.007 3.433 0 1.96 1.3 3.393 3.007 3.393 1.68 0 3.007-1.426 3.007-3.393zM59.807.78v16.553h-2.473V.78h2.473zm9.886 13.113l1.92 1.28c-.62.92-2.113 2.493-4.693 2.493-3.2 0-5.587-2.473-5.587-5.633 0-3.347 2.413-5.633 5.313-5.633 2.92 0 4.353 2.327 4.82 3.587l.253.64-7.534 3.113c.573 1.133 1.473 1.707 2.733 1.707s2.133-.62 2.773-1.554zm-5.906-2.026l5.033-2.093c-.28-.707-1.107-1.193-2.093-1.193-1.254 0-3.007 1.107-2.94 3.287z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 74, height: 24 };
            const o = s;
        },
        264171: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        89085: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
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
        926628: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        262009: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        258292: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PremiumLoaders.ff081f7a.js.map
