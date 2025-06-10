"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PremiumLoaders", "icons/IconBulletedList-js", "icons/IconReplyOff-js", "icons/IconStar-js"],
    {
        96768: (e, a, r) => {
            r.d(a, { Z: () => s });
            var t,
                n,
                i,
                l = {
                    fragment: {
                        argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (n = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
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
                    operation: { argumentDefinitions: [n, t], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: i },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            l.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const s = l;
        },
        587510: (e, a, r) => {
            r.d(a, { Z: () => g });
            var t,
                n,
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
                                                                        (n = { alias: null, args: null, concreteType: "StripeConnectAccount", kind: "LinkedField", name: "stripe_connect_account", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }], storageKey: null }),
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
                                                    { kind: "InlineFragment", selections: [n, l, s, c, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [u, d, (m = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, m], type: "User", abstractKey: null },
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
            var t,
                n,
                i,
                l,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: (t = [{ kind: "Literal", name: "cursor", value: "" }]), concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: (i = [{ kind: "Literal", name: "filter_by_delivered_in_interval", value: { end_date: "2025-12-31", start_date: "2024-01-01" } }]), concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: t, concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [n, { alias: null, args: i, concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [l, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }, s], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }] },
                    params: { id: "UFD9D7pipG78WFN0SJviDg", metadata: {}, name: "useTotalAdCampaignsForUserQuery", operationKind: "query", text: null },
                };
            o.hash = "200a7af54c9c3ed7753c0291e92e188f";
            const c = o;
        },
        919057: (e, a, r) => {
            r.r(a), r.d(a, { default: () => c });
            var t = r(202784),
                n = r(443781),
                i = r(736063),
                l = r(918588),
                s = r(727828);
            function o() {
                const { featureSwitches: e } = (0, n.QZ)();
                return (0, l.Z)() > 0 && e.isTrue("vo_upsell_enabled") ? t.createElement(s.Z, { testID: "vo-ad-credit-upsell", variant: "VerifiedOrgsAdCredit" }) : null;
            }
            const c = function () {
                return t.createElement(i.H, { errorConfig: { context: "AD_CREDIT_UPSELL" } }, t.createElement(o, null));
            };
        },
        127939: (e, a, r) => {
            r.r(a), r.d(a, { default: () => z });
            var t = r(202784),
                n = r(400752),
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
                v = r(443781),
                f = r(56851),
                y = r(736063),
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
                P = { isCollapsed: !1 },
                L = ({ dismiss: e }) => {
                    (0, h.E)();
                    const { featureSwitches: a } = (0, v.QZ)(),
                        r = a.isTrue("rweb_sourcemap_migration"),
                        o = (0, S.Z)(),
                        [c, u] = t.useState(!1),
                        d = (0, n.Dv)(_.lZ),
                        [y, k] = t.useState(null);
                    t.useEffect(() => {
                        d.get("rweb.premiumModule").then((e) => {
                            k(e || P);
                        });
                    }, [d]);
                    let F = "/premium/module";
                    y?.isCollapsed && (F += "?collapsed=true");
                    const E = (0, b._3)(F, { refreshTimeMs: 1e4 });
                    if (!y) return null;
                    if (!E) return t.createElement(f.Z, null);
                    const L = () => {
                            u(!c);
                        },
                        R = () => {
                            e(), o.scribeAction("dismiss"), u(!1);
                        },
                        A = () => {
                            o.scribeAction(y.isCollapsed ? "expand" : "collapse");
                            const e = { isCollapsed: !y.isCollapsed };
                            k(e), d.set("rweb.premiumModule", e), u(!1);
                        };
                    return E.jfResponse?.root.value
                        ? t.createElement(
                              Z.b.Provider,
                              { value: { dismiss: L } },
                              t.createElement(
                                  i.Z,
                                  { style: r ? I.containerRedesign : I.container },
                                  c
                                      ? t.createElement(l.Z, {
                                            items: [
                                                { onClick: A, text: y.isCollapsed ? K : T, Icon: y.isCollapsed ? m.default : p.default },
                                                { onClick: R, text: C({ number: 7 }), Icon: g.default },
                                            ],
                                            onCloseRequested: L,
                                        })
                                      : null,
                                  E.jfResponse?.root.value ? t.createElement(w.Z, { payload: E.jfResponse.root.value }) : null,
                              ),
                          )
                        : t.createElement(s.Z, { onRetry: null, title: E.error });
                },
                R = () => {
                    const { dismiss: e, impress: a, shouldShow: r } = (0, k.ZP)({ key: "premium_module_v1", dismissForMsec: k.IZ, showForMsec: null, reappearAfterMsec: null });
                    return (
                        t.useEffect(() => {
                            a();
                        }, [a]),
                        r ? t.createElement(F.nO, { namespace: { component: "premium_module " } }, t.createElement(L, { dismiss: e })) : null
                    );
                },
                A = () => {
                    const { verified_program_application_status: e, verified_program_eligibility: a, verified_user_profiles: r } = (0, E.Z)(),
                        { featureSwitches: n } = (0, v.QZ)(),
                        i = r?.ad_revenue_sharing_user_profile?.is_active;
                    if ((i || (0 === a?.ad_revenue_sharing_eligibility?.length && "NotStarted" === e?.ad_revenue_sharing_application_status)) && n.isTrue("subscriptions_premium_module_enabled")) return t.createElement(t.Suspense, { fallback: t.createElement(o.J, null) }, t.createElement(R, null));
                },
                z = () => {
                    const { featureSwitches: e, userClaims: a } = (0, v.QZ)();
                    return a.isAnyPremiumSubscriber() && e.isTrue("subscriptions_premium_module_creator_gate_enabled") ? t.createElement(y.H, { errorConfig: { context: "premium_module" } }, t.createElement(A, null)) : null;
                },
                I = c.default.create((e) => ({ container: { marginBottom: e.spaces.space12 }, containerRedesign: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 } }));
        },
        293605: (e, a, r) => {
            r.r(a), r.d(a, { default: () => F });
            var t = r(202784),
                n = r(325686),
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
                v = r(199232);
            const f = c().fbf83158,
                y = c().jadeb4da,
                k = c().bce3726a,
                h = ({ entryPoint: e, originProduct: a }) => {
                    const r = (0, _.Z)(),
                        { origin: s } = g.ZP.get(),
                        o = (0, p.Z)({ returnUrl: `${s}/i/profile`, originProduct: a }),
                        c = `payment_failure_alert_card_${e}_sidebar`;
                    t.useEffect(() => {
                        r.scribe({ component: c, action: "impression" });
                    }, [r, c]);
                    const d = t.useCallback(() => {
                        r.scribe({ component: c, action: "click", element: `payment_failure_${e}_sidebar` }), o?.();
                    }, [o, r, c, e]);
                    return t.createElement(n.Z, { style: Z.cardBlock, testID: "paymentCardBlock" }, t.createElement(n.Z, { style: Z.inner }, t.createElement(i.ZP, { size: "headline1", style: Z.heading, weight: "heavy" }, t.createElement(u.default, { style: Z.icon, testID: "errorIcon" }), f), t.createElement(i.ZP, { size: "body", style: Z.subheading }, y), t.createElement(l.ZP, { onClick: d, style: Z.button, type: "primaryFilled" }, k)));
                },
                b = ({ entryPoint: e }) => {
                    const { featureSwitches: a } = (0, d.QZ)(),
                        { hasPremiumPaymentFailure: r, hasVerifiedOrgPaymentFailure: i } = (0, v.Z)(["VerifiedOrganization", "Premium"]);
                    return (i && a.isTrue("subscriptions_management_failed_payment_profile_card_enabled")) || (r && a.isTrue("subscriptions_management_failed_payment_message_premium_enabled")) ? t.createElement(n.Z, { style: Z.paddedContainer, testID: "paymentCardView" }, t.createElement(h, { entryPoint: e, originProduct: i ? "VerifiedOrganizations" : "TwitterBlue" })) : null;
                },
                w = ({ entryPoint: e }) => t.createElement(m.H, { errorConfig: { context: "payment_alert_card" } }, t.createElement(b, { entryPoint: e })),
                Z = s.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.red0, borderColor: e.colors.red100, borderWidth: "1px", borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16, maxWidth: "100%", gap: e.spaces.space8 }, button: { alignSelf: "flex-start", paddingHorizontal: 0, marginTop: e.spaces.space8 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, icon: { color: s.default.theme.colors.red500, marginEnd: e.spaces.space4 }, paddedContainer: { paddingBottom: e.spaces.space16 } })),
                F = t.memo(w);
        },
        900285: (e, a, r) => {
            r.r(a), r.d(a, { default: () => K });
            var t = r(202784),
                n = r(325686),
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
                v = r(147595),
                f = r(811574),
                y = r(293115),
                k = r(725405),
                h = r(443781);
            const b = u().ie4f57d2,
                w = u().h293aa52,
                Z = u().j1923668,
                F = u().ac7e97ee,
                S = { PremiumBasic: u().f70c69b4, BlueVerified: u().f4cec4d2, BlueVerifiedPlus: u().f4cec4d2 },
                E = ({ activeRestId: e }) => {
                    const a = (0, k.Z)(),
                        [r, o] = t.useState(!1);
                    (0, m.q)(() => {
                        a.scribeAction("impression");
                    });
                    const c = (0, g.Z)({ returnUrl: `https://${window.location.host}/home`, originProduct: "TwitterBlue" }),
                        u = _.v5.premium[e ?? ""];
                    return t.createElement(
                        p.g,
                        { testID: "renew-subscription-module" },
                        t.createElement(
                            n.Z,
                            { "aria-label": b, role: "complementary", style: T.root },
                            t.createElement(i.ZP, { size: "headline1", weight: "heavy" }, w),
                            t.createElement(i.ZP, null, Z, " ", S[u]),
                            t.createElement(
                                l.ZP,
                                {
                                    disabled: r,
                                    icon: r ? t.createElement(s.Z, null) : t.createElement(d.default, null),
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
                    const r = (0, v.R)(a);
                    return r && "Stripe" === r.payment_source && "Expire" === r.state && e.isTrue("subscriptions_management_renew_module_enabled") ? t.createElement(y.nO, { namespace: { component: "renew-subscription-module", element: "renew-button" } }, t.createElement(E, { activeRestId: r?.product?.rest_id })) : null;
                },
                K = () => {
                    const { featureSwitches: e, userClaims: a } = (0, h.QZ)();
                    return e.isTrue("subscriptions_management_renew_module_api_enabled") && a.isAnyPremiumSubscriber() && !a.isAnyVerifiedOrgOrAffiliate() ? t.createElement(C, null) : null;
                },
                T = o.default.create((e) => ({ root: { position: "relative", alignItems: "flex-start", gap: 10, flexDirection: "column", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }));
        },
        282559: (e, a, r) => {
            r.d(a, { v: () => o });
            r(571372);
            var t = r(96768),
                n = r(202784),
                i = (r(585488), r(351743)),
                l = r.n(i);
            const s = t.Z,
                o = ({ originProduct: e, returnUrl: a }) => {
                    const [r, t] = l()(s);
                    return [
                        n.useCallback(
                            () =>
                                new Promise((t, n) => {
                                    r({
                                        variables: { return_url: a, origin_product: e },
                                        onCompleted: ({ customerportalsession_create: e }, a) => {
                                            const r = e?.customer_portal_session_url ?? void 0;
                                            r ? t(r) : n(new Error("Missing portal URL"));
                                        },
                                        onError: n,
                                    });
                                }),
                            [r, a, e],
                        ),
                        t,
                    ];
                };
        },
        177210: (e, a, r) => {
            r.d(a, { Z: () => u });
            var t = r(202784),
                n = r(111677),
                i = r.n(n),
                l = r(782826),
                s = r(282559),
                o = r(782642);
            const c = i().ef4602ec;
            function u(e) {
                const a = (0, o.p)(),
                    [r, n] = (0, s.v)(e),
                    i = t.useCallback(() => {
                        r()
                            .then((e) => {
                                l.ZP.navigateTo(e);
                            })
                            .catch(() => {
                                a({ text: c });
                            });
                    }, [r, a]);
                return n ? void 0 : i;
            }
        },
        147595: (e, a, r) => {
            r.d(a, { R: () => n });
            var t = r(337394);
            const n = (e) => {
                const a = e.find((e) => e.product?.rest_id && t.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Stripe" === e.payment_source),
                    r = e.find((e) => e.product?.rest_id && t.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Twitter" !== e.payment_source && "Ads" !== e.payment_source),
                    n = e.find((e) => e.product?.rest_id && t.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && ("Twitter" === e.payment_source || "Ads" === e.payment_source));
                return a || r || n;
            };
        },
        620243: (e, a, r) => {
            r.d(a, { Z: () => l });
            var t = r(587510),
                n = (r(585488), r(535338));
            const i = t.Z,
                l = () => {
                    const { viewer: e } = (0, n.p)(i, {});
                    return e.user_results.result || {};
                };
        },
        918588: (e, a, r) => {
            r.d(a, { Z: () => s });
            var t = r(380327),
                n = (r(585488), r(712696)),
                i = r.n(n);
            const l = t.Z;
            const s = function () {
                const e = i()(l, {});
                return (e.quick_promote_advertiser_accounts?.items ?? []).reduce((e, a) => e + (a?.campaigns?.total_count ?? 0), 0);
            };
        },
        661810: (e, a, r) => {
            r.d(a, { Z: () => l });
            var t = r(202784),
                n = r(325686),
                i = r(392237);
            function l({ spacing: e, style: a }) {
                return t.createElement(n.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, a] });
            }
            const s = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        428259: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var t = r(202784),
                n = r(890601),
                i = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M6 13.5c-1.934 0-3.5 1.567-3.5 3.5s1.566 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.566-3.5-3.5-3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75s.788-1.75 1.75-1.75 1.75.783 1.75 1.75-.788 1.75-1.75 1.75zM22 8H12V6h10v2zM6 3.5C4.066 3.5 2.5 5.067 2.5 7s1.566 3.5 3.5 3.5S9.5 8.933 9.5 7 7.934 3.5 6 3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75S5.038 5.25 6 5.25 7.75 6.033 7.75 7 6.962 8.75 6 8.75zM22 18H12v-2h10v2z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        41065: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var t = r(202784),
                n = r(890601),
                i = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        98440: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var t = r(202784),
                n = r(890601),
                i = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        883437: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var t = r(202784),
                n = r(890601),
                i = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M21.503 6.745c.475 1.032.748 2.176.748 3.385 0 2.955-1.608 5.68-4.196 7.11l-8.054 4.459v-3.452l2-2v2.06l5.086-2.816c1.952-1.079 3.164-3.133 3.164-5.36 0-.644-.101-1.264-.286-1.847l1.538-1.538zM3.71 21.71l-1.414-1.414 3.401-3.401C3.34 15.5 1.751 12.935 1.751 10c0-4.411 3.591-8 8.005-8h4.366c1.818 0 3.494.608 4.849 1.62l1.325-1.325 1.414 1.414-18 18.001zm3.462-6.29L17.545 5.047C16.567 4.386 15.389 4 14.123 4H9.757c-3.311 0-6.005 2.691-6.005 6 0 2.389 1.401 4.451 3.421 5.42z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        258292: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var t = r(202784),
                n = r(890601),
                i = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        730895: (e, a, r) => {
            var t = r(821176);
            e.exports = function () {
                var e = t(this),
                    a = "";
                return e.hasIndices && (a += "d"), e.global && (a += "g"), e.ignoreCase && (a += "i"), e.multiline && (a += "m"), e.dotAll && (a += "s"), e.unicode && (a += "u"), e.unicodeSets && (a += "v"), e.sticky && (a += "y"), a;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PremiumLoaders.19b9e7ba.js.map
