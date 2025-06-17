"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PremiumLoaders", "icons/IconAtBold-js", "icons/IconBookStrokeOff-js", "icons/IconBookmarkCloseStroke-js", "icons/IconFilterFill-js", "icons/IconItalic-js", "icons/IconNumberedList-js", "icons/IconThumbsUp-js"],
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
            a.r(t), a.d(t, { default: () => A });
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
                v = a(420182),
                _ = a(443781),
                h = a(56851),
                y = a(736063),
                f = a(88660),
                k = a(39182),
                b = a(313129),
                w = a(738124),
                Z = a(643426),
                E = a(293115),
                F = a(725405),
                C = a(620243);
            const S = u().f0701753,
                K = u().j7d0e836,
                T = u().d227d19e,
                V = { isCollapsed: !1 },
                L = ({ dismiss: e }) => {
                    (0, k.E)();
                    const { featureSwitches: t } = (0, _.QZ)(),
                        a = t.isTrue("rweb_sourcemap_migration"),
                        o = (0, F.Z)(),
                        [c, d] = r.useState(!1),
                        u = (0, i.Dv)(v.lZ),
                        [y, f] = r.useState(null);
                    r.useEffect(() => {
                        u.get("rweb.premiumModule").then((e) => {
                            f(e || V);
                        });
                    }, [u]);
                    let E = "/premium/module";
                    y?.isCollapsed && (E += "?collapsed=true");
                    const C = (0, b._3)(E, { refreshTimeMs: 1e4 });
                    if (!y) return null;
                    if (!C) return r.createElement(h.Z, null);
                    const L = () => {
                            d(!c);
                        },
                        P = () => {
                            e(), o.scribeAction("dismiss"), d(!1);
                        },
                        z = () => {
                            o.scribeAction(y.isCollapsed ? "expand" : "collapse");
                            const e = { isCollapsed: !y.isCollapsed };
                            f(e), u.set("rweb.premiumModule", e), d(!1);
                        };
                    return C.jfResponse?.root.value
                        ? r.createElement(
                              Z.b.Provider,
                              { value: { dismiss: L } },
                              r.createElement(
                                  n.Z,
                                  { style: a ? H.containerRedesign : H.container },
                                  c
                                      ? r.createElement(l.Z, {
                                            items: [
                                                { onClick: z, text: y.isCollapsed ? K : T, Icon: y.isCollapsed ? m.default : p.default },
                                                { onClick: P, text: S({ number: 7 }), Icon: g.default },
                                            ],
                                            onCloseRequested: L,
                                        })
                                      : null,
                                  C.jfResponse?.root.value ? r.createElement(w.Z, { payload: C.jfResponse.root.value }) : null,
                              ),
                          )
                        : r.createElement(s.Z, { onRetry: null, title: C.error });
                },
                P = () => {
                    const { dismiss: e, impress: t, shouldShow: a } = (0, f.ZP)({ key: "premium_module_v1", dismissForMsec: f.IZ, showForMsec: null, reappearAfterMsec: null });
                    return (
                        r.useEffect(() => {
                            t();
                        }, [t]),
                        a ? r.createElement(E.nO, { namespace: { component: "premium_module " } }, r.createElement(L, { dismiss: e })) : null
                    );
                },
                z = () => {
                    const { verified_program_application_status: e, verified_program_eligibility: t, verified_user_profiles: a } = (0, C.Z)(),
                        { featureSwitches: i } = (0, _.QZ)(),
                        n = a?.ad_revenue_sharing_user_profile?.is_active;
                    if ((n || (0 === t?.ad_revenue_sharing_eligibility?.length && "NotStarted" === e?.ad_revenue_sharing_application_status)) && i.isTrue("subscriptions_premium_module_enabled")) return r.createElement(r.Suspense, { fallback: r.createElement(o.J, null) }, r.createElement(P, null));
                },
                A = () => {
                    const { featureSwitches: e, userClaims: t } = (0, _.QZ)();
                    return t.isAnyPremiumSubscriber() && e.isTrue("subscriptions_premium_module_creator_gate_enabled") ? r.createElement(y.H, { errorConfig: { context: "premium_module" } }, r.createElement(z, null)) : null;
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
                v = a(725405),
                _ = a(199232);
            const h = c().fbf83158,
                y = c().jadeb4da,
                f = c().bce3726a,
                k = ({ entryPoint: e, originProduct: t }) => {
                    const a = (0, v.Z)(),
                        { origin: s } = g.ZP.get(),
                        o = (0, p.Z)({ returnUrl: `${s}/i/profile`, originProduct: t }),
                        c = `payment_failure_alert_card_${e}_sidebar`;
                    r.useEffect(() => {
                        a.scribe({ component: c, action: "impression" });
                    }, [a, c]);
                    const u = r.useCallback(() => {
                        a.scribe({ component: c, action: "click", element: `payment_failure_${e}_sidebar` }), o?.();
                    }, [o, a, c, e]);
                    return r.createElement(i.Z, { style: Z.cardBlock, testID: "paymentCardBlock" }, r.createElement(i.Z, { style: Z.inner }, r.createElement(n.ZP, { size: "headline1", style: Z.heading, weight: "heavy" }, r.createElement(d.default, { style: Z.icon, testID: "errorIcon" }), h), r.createElement(n.ZP, { size: "body", style: Z.subheading }, y), r.createElement(l.ZP, { onClick: u, style: Z.button, type: "primaryFilled" }, f)));
                },
                b = ({ entryPoint: e }) => {
                    const { featureSwitches: t } = (0, u.QZ)(),
                        { hasPremiumPaymentFailure: a, hasVerifiedOrgPaymentFailure: n } = (0, _.Z)(["VerifiedOrganization", "Premium"]);
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
                v = a(337394),
                _ = a(147595),
                h = a(811574),
                y = a(293115),
                f = a(725405),
                k = a(443781);
            const b = d().ie4f57d2,
                w = d().h293aa52,
                Z = d().j1923668,
                E = d().ac7e97ee,
                F = { PremiumBasic: d().f70c69b4, BlueVerified: d().f4cec4d2, BlueVerifiedPlus: d().f4cec4d2 },
                C = ({ activeRestId: e }) => {
                    const t = (0, f.Z)(),
                        [a, o] = r.useState(!1);
                    (0, m.q)(() => {
                        t.scribeAction("impression");
                    });
                    const c = (0, g.Z)({ returnUrl: `https://${window.location.host}/home`, originProduct: "TwitterBlue" }),
                        d = v.v5.premium[e ?? ""];
                    return r.createElement(
                        p.g,
                        { testID: "renew-subscription-module" },
                        r.createElement(
                            i.Z,
                            { "aria-label": b, role: "complementary", style: T.root },
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
                S = () => {
                    const { featureSwitches: e } = (0, k.QZ)(),
                        t = (0, h.Z)();
                    if (!t) return null;
                    const a = (0, _.R)(t);
                    return a && "Stripe" === a.payment_source && "Expire" === a.state && e.isTrue("subscriptions_management_renew_module_enabled") ? r.createElement(y.nO, { namespace: { component: "renew-subscription-module", element: "renew-button" } }, r.createElement(C, { activeRestId: a?.product?.rest_id })) : null;
                },
                K = () => {
                    const { featureSwitches: e, userClaims: t } = (0, k.QZ)();
                    return e.isTrue("subscriptions_management_renew_module_api_enabled") && t.isAnyPremiumSubscriber() && !t.isAnyVerifiedOrgOrAffiliate() ? r.createElement(S, null) : null;
                },
                T = o.default.create((e) => ({ root: { position: "relative", alignItems: "flex-start", gap: 10, flexDirection: "column", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }));
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
        388941: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 4.25c-4.28 0-7.75 3.47-7.75 7.75s3.47 7.75 7.75 7.75c1.499 0 2.894-.424 4.078-1.158l1.318 2.125c-1.568.972-3.418 1.534-5.396 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.75 12 1.75 22.25 6.339 22.25 12c0 .534-.032 1.061-.08 1.549-.223 2.285-2.31 3.65-4.378 3.471-1.128-.098-2.114-.621-2.817-1.396-1.008 1.136-2.467 1.802-4.077 1.576-2.748-.386-4.354-3.149-3.973-5.86s2.686-4.924 5.434-4.538c.793.111 1.491.421 2.074.87l.038-.32 2.482.298-.584 4.861c-.122 1.015.621 1.93 1.64 2.019.927.081 1.605-.515 1.674-1.223.042-.426.068-.869.068-1.306 0-4.28-3.47-7.75-7.75-7.75H12zm.01 5.026c-1.08-.152-2.377.746-2.611 2.41s.765 2.885 1.845 3.036c1.08.152 2.377-.746 2.611-2.41.234-1.664-.765-2.884-1.845-3.036z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        416276: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.002 4h7.764c1.23 0 2.386.49 3.236 1.32.85-.83 2.006-1.32 3.236-1.32h7.764v16h-8.146c-.839 0-1.488.51-1.959 1.45h-1.789l-.171-.34C10.598 20.43 9.906 20 9.148 20H1.002V4zm10 3.26C10.53 6.48 9.685 6 8.766 6H3.002v12h6.146c.658 0 1.292.16 1.854.46V7.26zm2 11.21c.527-.29 1.143-.47 1.854-.47h6.146V6h-5.764c-.918 0-1.764.48-2.236 1.26v11.21zM19 11h-4V9h4v2zm0 4h-4v-2h4v2z" })) }, { writingDirection: t });
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
        194417: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M16 3v8h-3V8.5H3v-3h10V3h3zm5 12.5h-9v3h9v-3zM10 21v-8H7v2.5H3v3h4V21h3zm8-12.5h3v-3h-3v3z" })) }, { writingDirection: t });
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
        89085: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        226597: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
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
        487606: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M2 4c1.66 0 3-1.34 3-3h1c0 1.66 1.34 3 3 3v1C7.34 5 6 6.34 6 8H5c0-1.66-1.34-3-3-3V4zm7.89 4.9C11.26 7.53 12 5.35 12 2h2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1zm7.32 3.1c-.97-.42-1.81-.97-2.53-1.69-.71-.71-1.27-1.56-1.68-2.52-.42.96-.98 1.81-1.69 2.52-.72.72-1.56 1.27-2.53 1.69.97.42 1.81.97 2.53 1.69.71.71 1.27 1.56 1.69 2.52.41-.96.97-1.81 1.68-2.52.72-.72 1.56-1.27 2.53-1.69z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        946474: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                i = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M18.36 8h-2.68l.42-2.52C16.4 3.66 15 2 13.15 2c-1.07 0-2.06.57-2.59 1.51l-3 5.24c-.04.06-.08.11-.14.15C6.96 8.35 6.27 8 5.5 8H2v13h14.2c2.1 0 3.92-1.45 4.39-3.5l1.19-5.22C22.27 10.09 20.61 8 18.36 8zM6 19H4v-9h1.5c.27 0 .5.22.5.5V19zm13.83-7.17l-1.19 5.22C18.38 18.19 17.37 19 16.2 19H8v-8.16c.54-.2 1-.58 1.3-1.1l2.99-5.24c.18-.31.5-.5.86-.5.61 0 1.07.55.97 1.15l-.8 4.85h5.04c.97 0 1.68.89 1.47 1.83z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PremiumLoaders.bf04e86a.js.map
