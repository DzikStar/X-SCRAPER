"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PremiumLoaders", "icons/IconBookmarkPlusStroke-js", "icons/IconChevronRight-js", "icons/IconHeartStroke-js", "icons/IconStar-js"],
    {
        96768: (e, a, r) => {
            r.d(a, { Z: () => s });
            var t,
                i,
                n,
                l = {
                    fragment: {
                        argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (i = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
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
                    operation: { argumentDefinitions: [i, t], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: n },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            l.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const s = l;
        },
        587510: (e, a, r) => {
            r.d(a, { Z: () => g });
            var t,
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
        380327: (e, a, r) => {
            r.d(a, { Z: () => c });
            var t,
                i,
                n,
                l,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: (t = [{ kind: "Literal", name: "cursor", value: "" }]), concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: (n = [{ kind: "Literal", name: "filter_by_delivered_in_interval", value: { end_date: "2025-12-31", start_date: "2024-01-01" } }]), concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: t, concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [i, { alias: null, args: n, concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [l, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }, s], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }] },
                    params: { id: "UFD9D7pipG78WFN0SJviDg", metadata: {}, name: "useTotalAdCampaignsForUserQuery", operationKind: "query", text: null },
                };
            o.hash = "200a7af54c9c3ed7753c0291e92e188f";
            const c = o;
        },
        919057: (e, a, r) => {
            r.r(a), r.d(a, { default: () => c });
            var t = r(202784),
                i = r(443781),
                n = r(736063),
                l = r(918588),
                s = r(727828);
            function o() {
                const { featureSwitches: e } = (0, i.QZ)();
                return (0, l.Z)() > 0 && e.isTrue("vo_upsell_enabled") ? t.createElement(s.Z, { testID: "vo-ad-credit-upsell", variant: "VerifiedOrgsAdCredit" }) : null;
            }
            const c = function () {
                return t.createElement(n.H, { errorConfig: { context: "AD_CREDIT_UPSELL" } }, t.createElement(o, null));
            };
        },
        127939: (e, a, r) => {
            r.r(a), r.d(a, { default: () => A });
            var t = r(202784),
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
                F = r(725405),
                S = r(620243);
            const C = u().f0701753,
                K = u().j7d0e836,
                T = u().d227d19e,
                L = { isCollapsed: !1 },
                P = ({ dismiss: e }) => {
                    (0, k.E)();
                    const { featureSwitches: a } = (0, v.QZ)(),
                        r = a.isTrue("rweb_sourcemap_migration"),
                        o = (0, F.Z)(),
                        [c, d] = t.useState(!1),
                        u = (0, i.Dv)(_.lZ),
                        [f, h] = t.useState(null);
                    t.useEffect(() => {
                        u.get("rweb.premiumModule").then((e) => {
                            h(e || L);
                        });
                    }, [u]);
                    let E = "/premium/module";
                    f?.isCollapsed && (E += "?collapsed=true");
                    const S = (0, b._3)(E, { refreshTimeMs: 1e4 });
                    if (!f) return null;
                    if (!S) return t.createElement(y.Z, null);
                    const P = () => {
                            d(!c);
                        },
                        R = () => {
                            e(), o.scribeAction("dismiss"), d(!1);
                        },
                        V = () => {
                            o.scribeAction(f.isCollapsed ? "expand" : "collapse");
                            const e = { isCollapsed: !f.isCollapsed };
                            h(e), u.set("rweb.premiumModule", e), d(!1);
                        };
                    return S.jfResponse?.root.value
                        ? t.createElement(
                              Z.b.Provider,
                              { value: { dismiss: P } },
                              t.createElement(
                                  n.Z,
                                  { style: r ? I.containerRedesign : I.container },
                                  c
                                      ? t.createElement(l.Z, {
                                            items: [
                                                { onClick: V, text: f.isCollapsed ? K : T, Icon: f.isCollapsed ? m.default : p.default },
                                                { onClick: R, text: C({ number: 7 }), Icon: g.default },
                                            ],
                                            onCloseRequested: P,
                                        })
                                      : null,
                                  S.jfResponse?.root.value ? t.createElement(w.Z, { payload: S.jfResponse.root.value }) : null,
                              ),
                          )
                        : t.createElement(s.Z, { onRetry: null, title: S.error });
                },
                R = () => {
                    const { dismiss: e, impress: a, shouldShow: r } = (0, h.ZP)({ key: "premium_module_v1", dismissForMsec: h.IZ, showForMsec: null, reappearAfterMsec: null });
                    return (
                        t.useEffect(() => {
                            a();
                        }, [a]),
                        r ? t.createElement(E.nO, { namespace: { component: "premium_module " } }, t.createElement(P, { dismiss: e })) : null
                    );
                },
                V = () => {
                    const { verified_program_application_status: e, verified_program_eligibility: a, verified_user_profiles: r } = (0, S.Z)(),
                        { featureSwitches: i } = (0, v.QZ)(),
                        n = r?.ad_revenue_sharing_user_profile?.is_active;
                    if ((n || (0 === a?.ad_revenue_sharing_eligibility?.length && "NotStarted" === e?.ad_revenue_sharing_application_status)) && i.isTrue("subscriptions_premium_module_enabled")) return t.createElement(t.Suspense, { fallback: t.createElement(o.J, null) }, t.createElement(R, null));
                },
                A = () => {
                    const { featureSwitches: e, userClaims: a } = (0, v.QZ)();
                    return a.isAnyPremiumSubscriber() && e.isTrue("subscriptions_premium_module_creator_gate_enabled") ? t.createElement(f.H, { errorConfig: { context: "premium_module" } }, t.createElement(V, null)) : null;
                },
                I = c.default.create((e) => ({ container: { marginBottom: e.spaces.space12 }, containerRedesign: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 } }));
        },
        293605: (e, a, r) => {
            r.r(a), r.d(a, { default: () => E });
            var t = r(202784),
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
                k = ({ entryPoint: e, originProduct: a }) => {
                    const r = (0, _.Z)(),
                        { origin: s } = g.ZP.get(),
                        o = (0, p.Z)({ returnUrl: `${s}/i/profile`, originProduct: a }),
                        c = `payment_failure_alert_card_${e}_sidebar`;
                    t.useEffect(() => {
                        r.scribe({ component: c, action: "impression" });
                    }, [r, c]);
                    const u = t.useCallback(() => {
                        r.scribe({ component: c, action: "click", element: `payment_failure_${e}_sidebar` }), o?.();
                    }, [o, r, c, e]);
                    return t.createElement(i.Z, { style: Z.cardBlock, testID: "paymentCardBlock" }, t.createElement(i.Z, { style: Z.inner }, t.createElement(n.ZP, { size: "headline1", style: Z.heading, weight: "heavy" }, t.createElement(d.default, { style: Z.icon, testID: "errorIcon" }), y), t.createElement(n.ZP, { size: "body", style: Z.subheading }, f), t.createElement(l.ZP, { onClick: u, style: Z.button, type: "primaryFilled" }, h)));
                },
                b = ({ entryPoint: e }) => {
                    const { featureSwitches: a } = (0, u.QZ)(),
                        { hasPremiumPaymentFailure: r, hasVerifiedOrgPaymentFailure: n } = (0, v.Z)(["VerifiedOrganization", "Premium"]);
                    return (n && a.isTrue("subscriptions_management_failed_payment_profile_card_enabled")) || (r && a.isTrue("subscriptions_management_failed_payment_message_premium_enabled")) ? t.createElement(i.Z, { style: Z.paddedContainer, testID: "paymentCardView" }, t.createElement(k, { entryPoint: e, originProduct: n ? "VerifiedOrganizations" : "TwitterBlue" })) : null;
                },
                w = ({ entryPoint: e }) => t.createElement(m.H, { errorConfig: { context: "payment_alert_card" } }, t.createElement(b, { entryPoint: e })),
                Z = s.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.red0, borderColor: e.colors.red100, borderWidth: "1px", borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16, maxWidth: "100%", gap: e.spaces.space8 }, button: { alignSelf: "flex-start", paddingHorizontal: 0, marginTop: e.spaces.space8 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, icon: { color: s.default.theme.colors.red500, marginEnd: e.spaces.space4 }, paddedContainer: { paddingBottom: e.spaces.space16 } })),
                E = t.memo(w);
        },
        900285: (e, a, r) => {
            r.r(a), r.d(a, { default: () => K });
            var t = r(202784),
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
                F = { PremiumBasic: d().f70c69b4, BlueVerified: d().f4cec4d2, BlueVerifiedPlus: d().f4cec4d2 },
                S = ({ activeRestId: e }) => {
                    const a = (0, h.Z)(),
                        [r, o] = t.useState(!1);
                    (0, m.q)(() => {
                        a.scribeAction("impression");
                    });
                    const c = (0, g.Z)({ returnUrl: `https://${window.location.host}/home`, originProduct: "TwitterBlue" }),
                        d = _.v5.premium[e ?? ""];
                    return t.createElement(
                        p.g,
                        { testID: "renew-subscription-module" },
                        t.createElement(
                            i.Z,
                            { "aria-label": b, role: "complementary", style: T.root },
                            t.createElement(n.ZP, { size: "headline1", weight: "heavy" }, w),
                            t.createElement(n.ZP, null, Z, " ", F[d]),
                            t.createElement(
                                l.ZP,
                                {
                                    disabled: r,
                                    icon: r ? t.createElement(s.Z, null) : t.createElement(u.default, null),
                                    onPress: () => {
                                        a.scribeAction("click"), c?.(), o(!0);
                                    },
                                },
                                E,
                            ),
                        ),
                    );
                },
                C = () => {
                    const { featureSwitches: e } = (0, k.QZ)(),
                        a = (0, y.Z)();
                    if (!a) return null;
                    const r = (0, v.R)(a);
                    return r && "Stripe" === r.payment_source && "Expire" === r.state && e.isTrue("subscriptions_management_renew_module_enabled") ? t.createElement(f.nO, { namespace: { component: "renew-subscription-module", element: "renew-button" } }, t.createElement(S, { activeRestId: r?.product?.rest_id })) : null;
                },
                K = () => {
                    const { featureSwitches: e, userClaims: a } = (0, k.QZ)();
                    return e.isTrue("subscriptions_management_renew_module_api_enabled") && a.isAnyPremiumSubscriber() && !a.isAnyVerifiedOrgOrAffiliate() ? t.createElement(C, null) : null;
                },
                T = o.default.create((e) => ({ root: { position: "relative", alignItems: "flex-start", gap: 10, flexDirection: "column", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }));
        },
        282559: (e, a, r) => {
            r.d(a, { v: () => o });
            r(571372);
            var t = r(96768),
                i = r(202784),
                n = (r(585488), r(351743)),
                l = r.n(n);
            const s = t.Z,
                o = ({ originProduct: e, returnUrl: a }) => {
                    const [r, t] = l()(s);
                    return [
                        i.useCallback(
                            () =>
                                new Promise((t, i) => {
                                    r({
                                        variables: { return_url: a, origin_product: e },
                                        onCompleted: ({ customerportalsession_create: e }, a) => {
                                            const r = e?.customer_portal_session_url ?? void 0;
                                            r ? t(r) : i(new Error("Missing portal URL"));
                                        },
                                        onError: i,
                                    });
                                }),
                            [r, a, e],
                        ),
                        t,
                    ];
                };
        },
        177210: (e, a, r) => {
            r.d(a, { Z: () => d });
            var t = r(202784),
                i = r(111677),
                n = r.n(i),
                l = r(782826),
                s = r(282559),
                o = r(782642);
            const c = n().ef4602ec;
            function d(e) {
                const a = (0, o.p)(),
                    [r, i] = (0, s.v)(e),
                    n = t.useCallback(() => {
                        r()
                            .then((e) => {
                                l.ZP.navigateTo(e);
                            })
                            .catch(() => {
                                a({ text: c });
                            });
                    }, [r, a]);
                return i ? void 0 : n;
            }
        },
        147595: (e, a, r) => {
            r.d(a, { R: () => i });
            var t = r(337394);
            const i = (e) => {
                const a = e.find((e) => e.product?.rest_id && t.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Stripe" === e.payment_source),
                    r = e.find((e) => e.product?.rest_id && t.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Twitter" !== e.payment_source && "Ads" !== e.payment_source),
                    i = e.find((e) => e.product?.rest_id && t.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && ("Twitter" === e.payment_source || "Ads" === e.payment_source));
                return a || r || i;
            };
        },
        620243: (e, a, r) => {
            r.d(a, { Z: () => l });
            var t = r(587510),
                i = (r(585488), r(535338));
            const n = t.Z,
                l = () => {
                    const { viewer: e } = (0, i.p)(n, {});
                    return e.user_results.result || {};
                };
        },
        918588: (e, a, r) => {
            r.d(a, { Z: () => s });
            var t = r(380327),
                i = (r(585488), r(712696)),
                n = r.n(i);
            const l = t.Z;
            const s = function () {
                const e = n()(l, {});
                return (e.quick_promote_advertiser_accounts?.items ?? []).reduce((e, a) => e + (a?.campaigns?.total_count ?? 0), 0);
            };
        },
        661810: (e, a, r) => {
            r.d(a, { Z: () => l });
            var t = r(202784),
                i = r(325686),
                n = r(392237);
            function l({ spacing: e, style: a }) {
                return t.createElement(i.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, a] });
            }
            const s = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        818088: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var t = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        58399: (e, a, r) => {
            r.r(a), r.d(a, { default: () => c });
            var t = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(717683),
                s = r(347101);
            const o = (e = {}) => {
                const a = t.useContext(l.Z),
                    { direction: r } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, a && s.Z.iconRTL], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: r });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        432181: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var t = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        748138: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var t = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        42635: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var t = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M12 1.75C6.339 1.75 1.75 6.339 1.75 12S6.339 22.25 12 22.25 22.25 17.661 22.25 12 17.661 1.751 12 1.75zm.571 12.75v2.857L12 18.5l-.571-1.143V14.5H7.36l1.783-3.566V7.928c0-.789.64-1.429 1.429-1.429h2.857c.789 0 1.429.64 1.429 1.429v3.006l1.783 3.566h-4.069z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        98440: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var t = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        258292: (e, a, r) => {
            r.r(a), r.d(a, { default: () => o });
            var t = r(202784),
                i = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: a });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PremiumLoaders.2121a73a.js.map
