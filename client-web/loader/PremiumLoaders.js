"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PremiumLoaders", "icons/IconBoldCompact-js", "icons/IconBookmarkCloseStroke-js", "icons/IconDrafts-js", "icons/IconItalic-js", "icons/IconQuoteStroke-js", "icons/IconRepliesStroke-js"],
    {
        96768: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r,
                i,
                n,
                l = {
                    fragment: {
                        argumentDefinitions: [(r = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (i = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
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
                    operation: { argumentDefinitions: [i, r], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: n },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            l.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const s = l;
        },
        587510: (e, t, a) => {
            a.d(t, { Z: () => g });
            var r,
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
        380327: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r,
                i,
                n,
                l,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: (r = [{ kind: "Literal", name: "cursor", value: "" }]), concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: (n = [{ kind: "Literal", name: "filter_by_delivered_in_interval", value: { end_date: "2025-12-31", start_date: "2024-01-01" } }]), concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: r, concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [i, { alias: null, args: n, concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [l, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }, s], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }] },
                    params: { id: "UFD9D7pipG78WFN0SJviDg", metadata: {}, name: "useTotalAdCampaignsForUserQuery", operationKind: "query", text: null },
                };
            o.hash = "200a7af54c9c3ed7753c0291e92e188f";
            const c = o;
        },
        919057: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                i = a(443781),
                n = a(736063),
                l = a(918588),
                s = a(727828);
            function o() {
                const { featureSwitches: e } = (0, i.QZ)();
                return (0, l.Z)() > 0 && e.isTrue("vo_upsell_enabled") ? r.createElement(s.Z, { testID: "vo-ad-credit-upsell", variant: "VerifiedOrgsAdCredit" }) : null;
            }
            const c = function () {
                return r.createElement(n.H, { errorConfig: { context: "AD_CREDIT_UPSELL" } }, r.createElement(o, null));
            };
        },
        127939: (e, t, a) => {
            a.r(t), a.d(t, { default: () => R });
            var r = a(202784),
                i = a(400752),
                n = a(325686),
                l = a(811176),
                s = a(420740),
                o = a(682830),
                c = a(392237),
                d = a(111677),
                u = a.n(d),
                m = a(841972),
                p = a(647174),
                g = a(530813),
                _ = a(420182),
                v = a(443781),
                y = a(56851),
                f = a(736063),
                h = a(88660),
                k = a(39182),
                b = a(313129),
                w = a(738124),
                Z = a(643426),
                E = a(293115),
                F = a(725405),
                S = a(620243);
            const C = u().f0701753,
                K = u().j7d0e836,
                L = u().d227d19e,
                T = { isCollapsed: !1 },
                V = ({ dismiss: e }) => {
                    (0, k.E)();
                    const { featureSwitches: t } = (0, v.QZ)(),
                        a = t.isTrue("rweb_sourcemap_migration"),
                        o = (0, F.Z)(),
                        [c, d] = r.useState(!1),
                        u = (0, i.Dv)(_.lZ),
                        [f, h] = r.useState(null);
                    r.useEffect(() => {
                        u.get("rweb.premiumModule").then((e) => {
                            h(e || T);
                        });
                    }, [u]);
                    let E = "/premium/module";
                    f?.isCollapsed && (E += "?collapsed=true");
                    const S = (0, b._3)(E, { refreshTimeMs: 1e4 });
                    if (!f) return null;
                    if (!S) return r.createElement(y.Z, null);
                    const V = () => {
                            d(!c);
                        },
                        z = () => {
                            e(), o.scribeAction("dismiss"), d(!1);
                        },
                        P = () => {
                            o.scribeAction(f.isCollapsed ? "expand" : "collapse");
                            const e = { isCollapsed: !f.isCollapsed };
                            h(e), u.set("rweb.premiumModule", e), d(!1);
                        };
                    return S.jfResponse?.root.value
                        ? r.createElement(
                              Z.b.Provider,
                              { value: { dismiss: V } },
                              r.createElement(
                                  n.Z,
                                  { style: a ? H.containerRedesign : H.container },
                                  c
                                      ? r.createElement(l.Z, {
                                            items: [
                                                { onClick: P, text: f.isCollapsed ? K : L, Icon: f.isCollapsed ? m.default : p.default },
                                                { onClick: z, text: C({ number: 7 }), Icon: g.default },
                                            ],
                                            onCloseRequested: V,
                                        })
                                      : null,
                                  S.jfResponse?.root.value ? r.createElement(w.Z, { payload: S.jfResponse.root.value }) : null,
                              ),
                          )
                        : r.createElement(s.Z, { onRetry: null, title: S.error });
                },
                z = () => {
                    const { dismiss: e, impress: t, shouldShow: a } = (0, h.ZP)({ key: "premium_module_v1", dismissForMsec: h.IZ, showForMsec: null, reappearAfterMsec: null });
                    return (
                        r.useEffect(() => {
                            t();
                        }, [t]),
                        a ? r.createElement(E.nO, { namespace: { component: "premium_module " } }, r.createElement(V, { dismiss: e })) : null
                    );
                },
                P = () => {
                    const { verified_program_application_status: e, verified_program_eligibility: t, verified_user_profiles: a } = (0, S.Z)(),
                        { featureSwitches: i } = (0, v.QZ)(),
                        n = a?.ad_revenue_sharing_user_profile?.is_active;
                    if ((n || (0 === t?.ad_revenue_sharing_eligibility?.length && "NotStarted" === e?.ad_revenue_sharing_application_status)) && i.isTrue("subscriptions_premium_module_enabled")) return r.createElement(r.Suspense, { fallback: r.createElement(o.J, null) }, r.createElement(z, null));
                },
                R = () => {
                    const { featureSwitches: e, userClaims: t } = (0, v.QZ)();
                    return t.isAnyPremiumSubscriber() && e.isTrue("subscriptions_premium_module_creator_gate_enabled") ? r.createElement(f.H, { errorConfig: { context: "premium_module" } }, r.createElement(P, null)) : null;
                },
                H = c.default.create((e) => ({ container: { marginBottom: e.spaces.space12 }, containerRedesign: { paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 } }));
        },
        293605: (e, t, a) => {
            a.r(t), a.d(t, { default: () => E });
            var r = a(202784),
                i = a(325686),
                n = a(731708),
                l = a(154003),
                s = a(392237),
                o = a(111677),
                c = a.n(o),
                d = a(211971),
                u = a(443781),
                m = a(736063),
                p = a(177210),
                g = a(782826),
                _ = a(725405),
                v = a(199232);
            const y = c().fbf83158,
                f = c().jadeb4da,
                h = c().bce3726a,
                k = ({ entryPoint: e, originProduct: t }) => {
                    const a = (0, _.Z)(),
                        { origin: s } = g.ZP.get(),
                        o = (0, p.Z)({ returnUrl: `${s}/i/profile`, originProduct: t }),
                        c = `payment_failure_alert_card_${e}_sidebar`;
                    r.useEffect(() => {
                        a.scribe({ component: c, action: "impression" });
                    }, [a, c]);
                    const u = r.useCallback(() => {
                        a.scribe({ component: c, action: "click", element: `payment_failure_${e}_sidebar` }), o?.();
                    }, [o, a, c, e]);
                    return r.createElement(i.Z, { style: Z.cardBlock, testID: "paymentCardBlock" }, r.createElement(i.Z, { style: Z.inner }, r.createElement(n.ZP, { size: "headline1", style: Z.heading, weight: "heavy" }, r.createElement(d.default, { style: Z.icon, testID: "errorIcon" }), y), r.createElement(n.ZP, { size: "body", style: Z.subheading }, f), r.createElement(l.ZP, { onClick: u, style: Z.button, type: "primaryFilled" }, h)));
                },
                b = ({ entryPoint: e }) => {
                    const { featureSwitches: t } = (0, u.QZ)(),
                        { hasPremiumPaymentFailure: a, hasVerifiedOrgPaymentFailure: n } = (0, v.Z)(["VerifiedOrganization", "Premium"]);
                    return (n && t.isTrue("subscriptions_management_failed_payment_profile_card_enabled")) || (a && t.isTrue("subscriptions_management_failed_payment_message_premium_enabled")) ? r.createElement(i.Z, { style: Z.paddedContainer, testID: "paymentCardView" }, r.createElement(k, { entryPoint: e, originProduct: n ? "VerifiedOrganizations" : "TwitterBlue" })) : null;
                },
                w = ({ entryPoint: e }) => r.createElement(m.H, { errorConfig: { context: "payment_alert_card" } }, r.createElement(b, { entryPoint: e })),
                Z = s.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.red0, borderColor: e.colors.red100, borderWidth: "1px", borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16, maxWidth: "100%", gap: e.spaces.space8 }, button: { alignSelf: "flex-start", paddingHorizontal: 0, marginTop: e.spaces.space8 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, icon: { color: s.default.theme.colors.red500, marginEnd: e.spaces.space4 }, paddedContainer: { paddingBottom: e.spaces.space16 } })),
                E = r.memo(w);
        },
        900285: (e, t, a) => {
            a.r(t), a.d(t, { default: () => K });
            var r = a(202784),
                i = a(325686),
                n = a(731708),
                l = a(154003),
                s = a(167630),
                o = a(392237),
                c = a(111677),
                d = a.n(c),
                u = a(191796),
                m = a(187669),
                p = a(399398),
                g = a(177210),
                _ = a(337394),
                v = a(147595),
                y = a(811574),
                f = a(293115),
                h = a(725405),
                k = a(443781);
            const b = d().ie4f57d2,
                w = d().h293aa52,
                Z = d().j1923668,
                E = d().ac7e97ee,
                F = { PremiumBasic: d().f70c69b4, BlueVerified: d().f4cec4d2, BlueVerifiedPlus: d().f4cec4d2 },
                S = ({ activeRestId: e }) => {
                    const t = (0, h.Z)(),
                        [a, o] = r.useState(!1);
                    (0, m.q)(() => {
                        t.scribeAction("impression");
                    });
                    const c = (0, g.Z)({ returnUrl: `https://${window.location.host}/home`, originProduct: "TwitterBlue" }),
                        d = _.v5.premium[e ?? ""];
                    return r.createElement(
                        p.g,
                        { testID: "renew-subscription-module" },
                        r.createElement(
                            i.Z,
                            { "aria-label": b, role: "complementary", style: L.root },
                            r.createElement(n.ZP, { size: "headline1", weight: "heavy" }, w),
                            r.createElement(n.ZP, null, Z, " ", F[d]),
                            r.createElement(
                                l.ZP,
                                {
                                    disabled: a,
                                    icon: a ? r.createElement(s.Z, null) : r.createElement(u.default, null),
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
                    const a = (0, v.R)(t);
                    return a && "Stripe" === a.payment_source && "Expire" === a.state && e.isTrue("subscriptions_management_renew_module_enabled") ? r.createElement(f.nO, { namespace: { component: "renew-subscription-module", element: "renew-button" } }, r.createElement(S, { activeRestId: a?.product?.rest_id })) : null;
                },
                K = () => {
                    const { featureSwitches: e, userClaims: t } = (0, k.QZ)();
                    return e.isTrue("subscriptions_management_renew_module_api_enabled") && t.isAnyPremiumSubscriber() && !t.isAnyVerifiedOrgOrAffiliate() ? r.createElement(C, null) : null;
                },
                L = o.default.create((e) => ({ root: { position: "relative", alignItems: "flex-start", gap: 10, flexDirection: "column", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }));
        },
        282559: (e, t, a) => {
            a.d(t, { v: () => o });
            a(571372);
            var r = a(96768),
                i = a(202784),
                n = (a(585488), a(351743)),
                l = a.n(n);
            const s = r.Z,
                o = ({ originProduct: e, returnUrl: t }) => {
                    const [a, r] = l()(s);
                    return [
                        i.useCallback(
                            () =>
                                new Promise((r, i) => {
                                    a({
                                        variables: { return_url: t, origin_product: e },
                                        onCompleted: ({ customerportalsession_create: e }, t) => {
                                            const a = e?.customer_portal_session_url ?? void 0;
                                            a ? r(a) : i(new Error("Missing portal URL"));
                                        },
                                        onError: i,
                                    });
                                }),
                            [a, t, e],
                        ),
                        r,
                    ];
                };
        },
        177210: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                i = a(111677),
                n = a.n(i),
                l = a(782826),
                s = a(282559),
                o = a(782642);
            const c = n().ef4602ec;
            function d(e) {
                const t = (0, o.p)(),
                    [a, i] = (0, s.v)(e),
                    n = r.useCallback(() => {
                        a()
                            .then((e) => {
                                l.ZP.navigateTo(e);
                            })
                            .catch(() => {
                                t({ text: c });
                            });
                    }, [a, t]);
                return i ? void 0 : n;
            }
        },
        147595: (e, t, a) => {
            a.d(t, { R: () => i });
            var r = a(337394);
            const i = (e) => {
                const t = e.find((e) => e.product?.rest_id && r.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Stripe" === e.payment_source),
                    a = e.find((e) => e.product?.rest_id && r.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Twitter" !== e.payment_source && "Ads" !== e.payment_source),
                    i = e.find((e) => e.product?.rest_id && r.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && ("Twitter" === e.payment_source || "Ads" === e.payment_source));
                return t || a || i;
            };
        },
        620243: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(587510),
                i = (a(585488), a(535338));
            const n = r.Z,
                l = () => {
                    const { viewer: e } = (0, i.p)(n, {});
                    return e.user_results.result || {};
                };
        },
        918588: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(380327),
                i = (a(585488), a(712696)),
                n = a.n(i);
            const l = r.Z;
            const s = function () {
                const e = n()(l, {});
                return (e.quick_promote_advertiser_accounts?.items ?? []).reduce((e, t) => e + (t?.campaigns?.total_count ?? 0), 0);
            };
        },
        661810: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(202784),
                i = a(325686),
                n = a(392237);
            function l({ spacing: e, style: t }) {
                return r.createElement(i.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        394123: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.636 11.671c2.079-.583 3.093-2.18 3.093-3.929 0-2.307-1.471-4.741-5.983-4.741H5.623V21h7.579c4.411 0 6.008-2.484 6.008-4.994 0-2.383-1.343-3.955-3.574-4.335zm-3.295-6.287c2.535 0 3.27 1.319 3.27 2.662 0 1.242-.583 2.611-3.27 2.611H8.69V5.384h3.651zM8.69 18.617v-5.628h4.208c2.231 0 3.194 1.166 3.194 2.738 0 1.547-.887 2.89-3.397 2.89H8.69z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        738398: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        266151: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M10 5H2V3h8v2zM7 7H2v2h5V7zm12.94 4.946C19.48 15.918 16.1 19 12 19H8.19c-.12.988-.19 1.993-.19 3H6c0-4.669 1.29-9.39 3.95-12.97C12.62 5.421 16.38 2.9 23 3c.17 3.359-.21 7.147-3.06 8.946zM21 5.033c-4.16.276-7.29 2.275-9.45 5.187-1.43 1.929-2.43 4.268-3 6.78H12c2.68 0 4.95-1.76 5.72-4.188-.52.108-1.09.172-1.72.188h-1.5v-2H16c3.9 0 4.95-2.921 5-5.967z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        856661: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        748138: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        74514: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2C7.93 2 4.51 5.02 4 9.05L2.87 18H7.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4h4.24l-.64-5h-2.02l.38 3H5.13l.85-6.7C6.36 6.27 8.94 4 12 4V2zm0 18c-1.31 0-2.42-.83-2.83-2h5.66c-.41 1.17-1.52 2-2.83 2zm.3-12.29l1.41-1.42 1.76 1.76 4.29-4.72 1.48 1.34-5.7 6.28-3.24-3.24z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        42635: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75C6.339 1.75 1.75 6.339 1.75 12S6.339 22.25 12 22.25 22.25 17.661 22.25 12 17.661 1.751 12 1.75zm.571 12.75v2.857L12 18.5l-.571-1.143V14.5H7.36l1.783-3.566V7.928c0-.789.64-1.429 1.429-1.429h2.857c.789 0 1.429.64 1.429 1.429v3.006l1.783 3.566h-4.069z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        474761: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M10.883 4H2v8.5h2.255c-.643 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.139-2 5.335-4.63 6.084-8.37.444-2.21.405-4.55.154-6.81L10.883 4zM4 10.5V6h5.081c.151 1.84.121 3.64-.213 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.662-3.14 2.662-5.07H4zM21.876 4h-8.882v8.5h2.255c-.644 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.138-2 5.334-4.63 6.083-8.37.444-2.21.406-4.55.154-6.81L21.876 4zm-6.883 6.5V6h5.082c.151 1.84.121 3.64-.214 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.663-3.14 2.663-5.07h-2.911z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        368761: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12.312 23.736c-.123 0-.246-.03-.358-.091-.241-.132-.392-.385-.392-.659v-.871c0-.414.336-.75.75-.75.256 0 .482.128.617.324 1.905-1.247 4.823-3.192 5.908-4.11 2.256-1.908 3.604-4.732 3.608-7.554 0-.414.336-.749.75-.749s.75.337.749.751c-.004 3.256-1.552 6.507-4.14 8.697-1.326 1.121-5.009 3.546-7.086 4.892-.124.08-.266.12-.408.12zm-2.557-1.897c1.697-1.082 6.672-4.317 8.048-5.48 1.902-1.609 3.04-3.976 3.043-6.329-.006-4.366-3.433-7.787-7.8-7.787l-4.149-.01c-4.375-.001-7.801 3.426-7.801 7.801 0 4.104 3.14 7.204 7.465 7.37.002 1.79.008 2.88.058 3.544-.041.101-.061.21-.055.322.009.178.081.344.198.471.111.241.283.241.552.241.163 0 .316-.053.441-.144zm3.289-18.097c3.529 0 6.298 2.763 6.302 6.287-.003 1.917-.941 3.855-2.512 5.184-1.03.871-4.478 3.16-6.771 4.645l-.002-3.175c0-.403-.319-.734-.722-.749l-.721-.027c-3.49-.135-6.022-2.604-6.022-5.872 0-3.534 2.768-6.302 6.299-6.302l4.149.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        155353: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        730895: (e, t, a) => {
            var r = a(821176);
            e.exports = function () {
                var e = r(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PremiumLoaders.9f77522a.js.map
