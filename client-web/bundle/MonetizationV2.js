"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.MonetizationV2"],
    {
        38945: (e, t, i) => {
            i.d(t, { Z: () => s });
            var r,
                n,
                a,
                l = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "useVerifiedProgramsEligibilityQuery",
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
                                                                        (n = {
                                                                            alias: null,
                                                                            args: [{ kind: "Literal", name: "verified_program_types", value: ["AdRevenueSharing", "SuperFollows"] }],
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
                                                                    ],
                                                                    type: "User",
                                                                    abstractKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        action: "THROW",
                                                        path: "viewer.user_results.result",
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            action: "THROW",
                                            path: "viewer.user_results",
                                        },
                                    ],
                                    storageKey: 'viewer_v2(s:"4721")',
                                },
                                action: "THROW",
                                path: "viewer",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useVerifiedProgramsEligibilityQuery",
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
                                                    { kind: "InlineFragment", selections: [n, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            a,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "SQkrzbueypUf6oyEdj_Zzg", metadata: {}, name: "useVerifiedProgramsEligibilityQuery", operationKind: "query", text: null },
                };
            l.hash = "18b196a4f93d71cc0c23b35aab2f5948";
            const s = l;
        },
        423488: (e, t, i) => {
            i.d(t, { Z: () => f });
            var r = i(202784),
                n = i(325686),
                a = i(731708),
                l = i(420412),
                s = i(392237),
                o = i(674132),
                c = i.n(o),
                d = i(263272),
                p = i(293723),
                u = i(443781);
            const m = c().b2b4d592,
                g = c().c5f89b06,
                b = c().fbb03ba6,
                h = c().hb4c5169,
                f = ({ failedRequirements: e }) => {
                    const { featureSwitches: t } = r.useContext(u.rC),
                        i = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        s = t.getNumberValue("responsive_web_ad_revenue_sharing_number_of_impressions") || 15,
                        o = h({ impression_number: s });
                    return r.createElement(n.Z, { style: y.eligibilityRoot }, r.createElement(n.Z, { key: m, style: y.requirement }, r.createElement(a.ZP, { style: y.requirementLabel, weight: "bold" }, i ? g : m), e.includes("verified") ? r.createElement(d.default, { style: y.iconUnchecked, testID: "verifiedUnchecked" }) : r.createElement(p.default, { style: y.iconChecked, testID: "verifiedChecked" })), r.createElement(l.Z, null), r.createElement(n.Z, { key: o, style: y.requirement }, r.createElement(a.ZP, { style: y.requirementLabel, weight: "bold" }, o), e.includes("tweet_impressions") ? r.createElement(d.default, { style: y.iconUnchecked, testID: "impressionsUnchecked" }) : r.createElement(p.default, { style: y.iconChecked, testID: "impressionsChecked" })), r.createElement(l.Z, null), r.createElement(n.Z, { key: b, style: y.requirement }, r.createElement(a.ZP, { style: y.requirementLabel, weight: "bold" }, b), e.includes("followers") ? r.createElement(d.default, { style: y.iconUnchecked, testID: "followersUnchecked" }) : r.createElement(p.default, { style: y.iconChecked, testID: "followersChecked" })));
                },
                y = s.default.create((e) => ({ eligibilityRoot: { backgroundColor: e.colors.gray0, padding: e.spaces.space12, borderRadius: e.borderRadii.medium, gap: e.spaces.space8 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 }, requirement: { flexDirection: "row", alignItems: "center" }, requirementLabel: { flex: 1, paddingEnd: 10 }, requirementsRoot: { gap: e.spaces.space24, marginVertical: e.spaces.space32 } }));
        },
        299690: (e, t, i) => {
            i.d(t, { Z: () => l });
            var r = i(38945),
                n = (i(585488), i(535338));
            const a = r.Z,
                l = () => {
                    const { viewer: e } = (0, n.p)(a, {}),
                        t = e.user_results.result,
                        i = t.verified_program_eligibility?.ad_revenue_sharing_eligibility || [];
                    return { subscriptionsFailedRequirements: t.verified_program_eligibility?.super_follows_eligibility || [], revShareFailedRequirements: i };
                };
        },
        299239: (e, t, i) => {
            i.r(t), i.d(t, { default: () => J });
            var r = i(202784),
                n = i(154003),
                a = i(392237),
                l = i(674132),
                s = i.n(l),
                o = i(692165),
                c = i(115553),
                d = i(443781),
                p = i(293115),
                u = i(615027),
                m = i(620243),
                g = i(698579),
                b = i(325686),
                h = i(67369),
                f = i(731708),
                y = i(721266),
                _ = i(530525),
                v = i(439592),
                k = i(157130),
                E = i(779610),
                w = i(323265);
            const Z = i.p + "monetization-image-premium-tools.0265296a.png",
                C = i.p + "monetization-image-reach.9f36135a.png",
                S = i.p + "monetization-image-rev-share.2d15ac6a.png",
                x = i.p + "monetization-image-subscribers.c992566a.png";
            var R = i(857378),
                z = i(316732),
                P = i(725405),
                I = i(423488),
                F = i(299690),
                $ = i(228477);
            function A({ children: e, description: t, title: i }) {
                const n = (0, h.LX)(),
                    a = r.useMemo(() => ({ width: n ? "100%" : 440 }), [n]);
                return r.createElement(b.Z, { style: a }, r.createElement(f.ZP, { size: n ? "headline1" : "title4", weight: n ? "bold" : void 0 }, i), r.createElement(y.Z, { size: "space8" }), r.createElement(b.Z, { style: { height: 50 } }, r.createElement(f.ZP, { color: "gray700", size: n ? "body" : "headline2" }, t)), r.createElement(b.Z, { style: D.content }, e));
            }
            const D = a.default.create((e) => ({ content: { marginTop: e.spaces.space16, width: "100%" } })),
                q = s().bfb6be8a,
                T = s().ed6c6da2,
                j = s().bee20918,
                V = s().h93b6580,
                B = s().eea6d8f8,
                U = s().a0e8811e,
                H = s().e1a74ac0,
                L = s().cd3a6f9a,
                W = s().c35e6144,
                G = s().b9dbeb34,
                M = s().b2d41138,
                K = s().defa7f12,
                N = () => {
                    const e = (0, P.Z)();
                    r.useEffect(() => {
                        e.scribeAction("impression");
                    }, [e]);
                    const t = (0, h.LX)(),
                        i = w.ZP.isWebView(),
                        [n, a] = r.useState(!1),
                        [l, o] = r.useState(!1),
                        { revShareFailedRequirements: c, subscriptionsFailedRequirements: d } = (0, F.Z)(),
                        p = r.useMemo(() => ({ width: t ? "100%" : 920 }), [t]),
                        u = r.useMemo(() => r.createElement(z.Z, { variant: "MonetizationPromoPage" }), []),
                        m = r.useCallback(() => {
                            a(!n), e.scribe({ component: "rev_share_eligibility", action: "toggle" });
                        }, [a, n, e]),
                        g = r.useCallback(() => {
                            o(!l), e.scribe({ component: "subscriptions_eligibility", action: "toggle" });
                        }, [o, l, e]);
                    return r.createElement(
                        b.Z,
                        { style: O.container },
                        r.createElement(
                            b.Z,
                            { style: O.scrollable },
                            r.createElement(
                                b.Z,
                                { style: O.contentContainer },
                                r.createElement(
                                    b.Z,
                                    { style: O.content },
                                    r.createElement(
                                        b.Z,
                                        { style: p },
                                        r.createElement(b.Z, { style: O.header }, r.createElement(f.ZP, { align: t ? "left" : "center", size: t ? "title2" : "title1", weight: t ? "bold" : "medium" }, q), r.createElement(y.Z, { size: "space8" }), r.createElement(f.ZP, { align: t ? "left" : "center", color: "gray700", size: t ? "headline2" : "headline1" }, T), t ? null : r.createElement(r.Fragment, null, r.createElement(y.Z, { size: "space36" }), r.createElement(b.Z, { style: O.upsellButtonContainer }, u))),
                                        r.createElement(y.Z, { size: t ? "space40" : "space80" }),
                                        r.createElement(b.Z, { style: O.upsellBlocks }, r.createElement(A, { description: V, title: j }, r.createElement(b.Z, { style: O.imageContainer }, r.createElement(_.Z, { "aria-label": j, aspectMode: v.Z.exact(2), image: S })), r.createElement(k.Z, { renderContent: () => r.createElement(I.Z, { failedRequirements: c }), wrapperStyle: O.popoverContent }, r.createElement(E.Z, { label: B, onPress: m, paddingHorizontal: "space0", styleOverride: O.pivot }))), r.createElement(A, { description: H, title: U }, r.createElement(b.Z, { style: O.imageContainer }, r.createElement(_.Z, { "aria-label": U, aspectMode: v.Z.exact(2), image: x })), r.createElement(k.Z, { renderContent: () => r.createElement($.Z, { failedRequirements: d }), wrapperStyle: O.popoverContent }, r.createElement(E.Z, { label: L, onPress: g, styleOverride: O.pivot }))), r.createElement(A, { description: G, title: W }, r.createElement(b.Z, { style: O.imageContainer }, r.createElement(_.Z, { "aria-label": W, aspectMode: v.Z.exact(2), image: Z }))), r.createElement(A, { description: K, title: M }, r.createElement(b.Z, { style: O.imageContainer }, r.createElement(_.Z, { "aria-label": M, aspectMode: v.Z.exact(2), image: C })))),
                                        r.createElement(f.ZP, { color: "gray700", style: O.disclaimer }, r.createElement(s().I18NFormatMessage, { $i18n: "gbef9649" }, r.createElement(f.ZP, { link: "https://help.x.com/using-x/x-premium-faq#item2" }, s().i3e4955d))),
                                    ),
                                ),
                            ),
                        ),
                        t ? r.createElement(b.Z, { style: [O.footer, i ? O.footerWebview : O.footerDefault] }, u) : null,
                    );
                },
                O = a.default.create((e) => ({ container: { display: "grid", width: "100%", position: "relative" }, popoverContent: { margin: 0, pointer: "cursor" }, body: { width: "100%", height: "100%", maxHeight: "100%", flexDirection: "column" }, topGrid: { width: "100%", height: 200, position: "absolute", start: 0, top: 0, zIndex: 1, transform: "rotate(180deg)" }, bottomGrid: { width: "100%", height: 150, position: "absolute", start: 0, bottom: 0, zIndex: 1 }, header: { width: "100%", flexDirection: "column" }, scrollable: { width: "100%", flex: 1, flexGrow: 1, overflow: "auto", minHeight: "100%", height: "100%", alignItems: "center" }, content: { position: "relative", zIndex: 10, paddingTop: e.spaces.space48, boxSizing: "border-box", paddingHorizontal: a.default.theme.spaces.space16, paddingBottom: 144 }, contentContainer: { minWidth: "100%", minHeight: "100%", alignItems: "center" }, upsellButtonContainer: { width: "min-content", alignSelf: "center" }, upsellBlocks: { marginVertical: e.spaces.space16, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", gap: e.spaces.space40, rowGap: e.spaces.space56 }, imageContainer: { borderRadius: e.borderRadii.large, overflow: "hidden", boxShadow: "0 20px 50px rgba(136,153,166,0.15)", borderColor: e.colors.gray50, borderWidth: e.borderWidths.small }, pivot: { marginTop: e.spaces.space8, pointer: "cursor", paddingStart: 0 }, disclaimer: { marginTop: e.spaces.space32, textAlign: "center" }, footer: { position: "fixed", width: "100%", paddingHorizontal: e.spaces.space32, paddingVertical: e.spaces.space16 }, footerWebview: { bottom: 0 }, footerDefault: { bottom: R.h$ } })),
                Q = s().d299431c,
                X = (e) => {
                    const { featureSwitches: t, userClaims: i } = (0, d.QZ)(),
                        a = i.isAnyPremiumSubscriber(),
                        l = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        { verified_program_application_status: s, verified_user_profiles: b } = (0, m.Z)(),
                        h = b?.super_follows_user_profile?.is_active,
                        f = b?.ad_revenue_sharing_user_profile?.is_active,
                        y = s?.super_follows_application_status || "NotStarted",
                        _ = s?.ad_revenue_sharing_application_status || "NotStarted",
                        v = r.createElement(n.ZP, { icon: r.createElement(o.default, null), link: "https://help.x.com/using-x/x-premium-faq#item2", style: Y.helpCenterButton });
                    return (0, g.F9)({ subscriptionsApplicationStatus: y, revShareApplicationStatus: _, revShareActive: f, subscriptionsActive: h, isAnyPremiumSubscriber: a, monetizationUpsellEnabled: l }) ? r.createElement(p.nO, { namespace: { page: "monetization", section: "upsell" } }, r.createElement(c.A, { documentTitle: Q, history: e.history, isFullWidth: !0, onBackClick: () => e.history.goBack(), primaryContent: r.createElement(N, null), primaryContentLabel: Q, rightControl: v, sidebarContent: null })) : r.createElement(u.Z, { to: "/settings/monetization" });
                },
                J = r.memo(X),
                Y = a.default.create((e) => ({ helpCenterButton: { border: "none" } }));
        },
        698579: (e, t, i) => {
            i.d(t, { F9: () => $, Fx: () => C, XS: () => p, Xb: () => F, j0: () => k });
            var r = i(688715),
                n = i(674132),
                a = i.n(n),
                l = i(234558),
                s = i(491831),
                o = i(521058),
                c = i(711223),
                d = i(720816);
            const p = Object.freeze({ adRev: "ad_revenue_sharing", subscriptions: "creator_subs", preRollAds: "pre_roll_video_ads" }),
                u = { Rejected: a().ibb5e1c8, Submitted: a().b255df58, Waitlisted: a().b3f834c8, Approved: a().bbe09d38, PendingIdv: a().efbc5066 },
                m = a().hc7631da,
                g = a().h72d71a2,
                b = a().e12b0b16,
                h = a().a1e57106,
                f = a().b5334780,
                y = a().i51b4e22,
                _ = a().h5bd7160,
                v = { CanVerifyIdentity: a().e32040c4, RequestLocked: a().d8f5cce4, PendingResult: a().j8769b42, IdentityNonVerifiable: _, UnavailableMissingBlueSubscription: _ },
                k = { pathname: d.NW.stripeSetup, state: { cameFromEarningsDashboard: !0 } },
                E = { Icon: l.default, iconBGColor: "green600", heading: "Video Ads", description: "You are on track for payouts", id: p.preRollAds, pill: { label: "NEW", color: "gray1000" }, link: "/settings/ad_rev_share_dashboard", scribeComponent: "pre-roll-ads-dashboard" },
                w = { Icon: s.default, iconBGColor: "blue600", heading: a().d7b51c68, description: "", id: p.subscriptions, link: "/settings/monetization/subscriptions/dashboard", scribeComponent: "creator-subscription-dashboard" },
                Z = (e) => ({ Icon: o.default, iconBGColor: "orange600", heading: e ? a().be955554 : a().b03a3d62, description: a().cbbe29c2, id: p.adRev, link: "/settings/ad_rev_share_dashboard", scribeComponent: "ad-revenue-sharing-dashboard" }),
                C = { Icon: c.default, iconBGColor: "purple600", heading: a().g97a2d6c, description: a().f30774ea, id: "learn_more", link: (0, r.ju)("https://help.x.com/using-x/creator-dashboard"), scribeComponent: "learn-more" };
            function S(e, t) {
                return "ad_revenue_sharing" === e ? Z(t) : "creator_subs" === e ? w : E;
            }
            function x(e) {
                return e === p.adRev ? "/settings/ad_rev_share_eligibility" : e === p.subscriptions ? "/settings/superfollows/application/eligibility" : e === p.preRollAds ? "/" : void 0;
            }
            function R(e) {
                return e === p.adRev ? "/settings/ad_rev_share_setup" : e === p.subscriptions ? "/settings/superfollows" : e === p.preRollAds ? "/" : void 0;
            }
            function z(e, t) {
                return e === p.adRev ? (t ? a().bce47f48 : a().h7a68080) : e === p.subscriptions ? a().aea0b11a : e === p.preRollAds ? "Earn income from pre-roll ads served on videos you upload to X." : "";
            }
            function P(e) {
                return e === p.adRev ? "creator-ad-revenue-sharing-setup" : e === p.subscriptions ? "creator-subscription-setup" : "creator-pre-roll-ads-setup";
            }
            function I(e, t) {
                return { label: t || (e ? g : b), color: t ? "orange50" : e ? "green500" : "magenta500" };
            }
            function F({ applicationStatus: e, eligibility: t, id: i, idvStatus: r, isActive: n, isPayoutSetupIncomplete: l = !1, pendingIdv: s = !1, rejectedCreatorCanReapply: o, revShareUpdateEnabled: c = !1 }) {
                const d = { ...S(i, c) },
                    g = 0 === t.length || (1 === t.length && "id_verified" === t[0]);
                if (n && !s) return d;
                const b = r ? v[r] : "";
                if (i === p.subscriptions) {
                    const r = "NotStarted" === e || ("Rejected" === e && o),
                        n = "Rejected" === e && !o;
                    let l;
                    (d.link = n ? "/settings/superfollows/application/rejected" : r ? (g ? R(i) : x(i)) : void 0),
                        s ? (l = h) : n ? (l = y) : r || (l = f),
                        (d.description = (function (e, t, i, r, n, l) {
                            return e ? n : "Rejected" === t && l ? a().aea0b11a : u[t] || z(i, r);
                        })(s, e, i, c, b, o)),
                        (d.disabled = t.includes("generic_violation") || t.includes("do_not_charge")),
                        (d.pill = I(g, l)),
                        (d.scribeComponent = P(i));
                }
                return i === p.adRev && ((d.link = s || l ? void 0 : g ? R(i) : x(i)), (d.description = s ? b : l ? m : z(i, c)), (d.disabled = t.includes("generic_violation") || t.includes("do_not_charge") || t.includes("verified_type")), (d.pill = I(g, l || s ? h : void 0)), (d.scribeComponent = P(i))), i === p.preRollAds && ((d.link = l ? k : g ? R(i) : x(i)), (d.description = l ? m : z(i, c)), (d.disabled = t.includes("generic_violation") || t.includes("do_not_charge") || t.includes("verified_type")), (d.pill = I(g, l ? h : void 0)), (d.scribeComponent = P(i))), d;
            }
            const $ = (e) => "NotStarted" === e.subscriptionsApplicationStatus && "NotStarted" === e.revShareApplicationStatus && !e.revShareActive && !e.subscriptionsActive && !e.revShareActive && !e.subscriptionsActive && !e.isAnyPremiumSubscriber && e.monetizationUpsellEnabled;
        },
        228477: (e, t, i) => {
            i.d(t, { Z: () => v });
            var r = i(202784),
                n = i(325686),
                a = i(891198),
                l = i(731708),
                s = i(420412),
                o = i(392237),
                c = i(674132),
                d = i.n(c),
                p = i(293723),
                u = i(263272),
                m = i(443781);
            const g = d().f09be7f8,
                b = d().c5f89b06,
                h = d().ff9f4475,
                f = d().b747ce3a,
                y = d().c27f57ac,
                _ = d().h63d2973,
                v = ({ failedRequirements: e }) => {
                    const { featureSwitches: t } = (0, m.QZ)(),
                        i = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        o = t.getNumberValue("creator_subscriptions_eligibility_verified_followers", 2e3),
                        c = t.getNumberValue("creator_subscriptions_eligibility_impressions", 5e6),
                        d = a.ZP.getTruncatedCount(o),
                        v = a.ZP.getTruncatedCount(c),
                        E = h({ minFollowersCount: d }),
                        w = [
                            { label: i ? b : g, checked: !e.includes("blue_subscription") },
                            { label: E, checked: !e.includes("followers") },
                            { label: _({ count: v }), checked: !e.includes("impressions") },
                            { label: f, checked: !e.includes("tweets") },
                            { label: y, checked: !e.includes("age") },
                        ];
                    return r.createElement(
                        n.Z,
                        { style: k.root },
                        w.map((e, t, i) => r.createElement(r.Fragment, { key: t }, r.createElement(n.Z, { key: e.label, style: k.item }, r.createElement(l.ZP, { style: k.label, weight: "bold" }, e.label), e.checked ? r.createElement(p.default, { style: k.iconChecked }) : r.createElement(u.default, { style: k.iconUnchecked })), i.length !== t + 1 && r.createElement(s.Z, null))),
                    );
                },
                k = o.default.create((e) => ({ root: { backgroundColor: e.colors.gray0, padding: e.spaces.space12, borderRadius: e.borderRadii.medium, gap: e.spaces.space8 }, gap: { gap: e.spaces.space24 }, item: { flexDirection: "row" }, label: { flex: 1, marginEnd: e.spaces.space8 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 } }));
        },
        720816: (e, t, i) => {
            i.d(t, { $w: () => c, D1: () => s, Jz: () => n, Km: () => d, LI: () => r, NW: () => l, o5: () => o, wU: () => a });
            const r = "/settings/monetization",
                n = "/settings/superfollows",
                a = Object.freeze({ root: `${n}/application`, eligibility: `${n}/application/eligibility`, pricing: `${n}/application/pricing`, completeProfile: `${n}/application/complete_profile`, submit: `${n}/application/submit`, submitted: `${n}/application/submitted`, waitlisted: `${n}/application/waitlisted`, rejected: `${n}/application/rejected` }),
                l = Object.freeze({ root: `${n}/onboarding`, perksIntro: `${n}/onboarding/perks_intro`, perksDescription: `${n}/onboarding/perks_description`, perksBadges: `${n}/onboarding/perks_badges`, perksConfirm: `${n}/onboarding/perks_confirm`, pricing: `${n}/onboarding/pricing`, pricingConfirm: `${n}/onboarding/pricing_confirm`, stripeSetup: `${n}/onboarding/stripe_setup`, stripePending: `${n}/onboarding/stripe_pending`, stripeCompleted: `${n}/onboarding/stripe_completed` }),
                s = Object.freeze({ root: `${n}/management`, perksIntro: `${n}/management/perks_intro`, perksDescription: `${n}/management/perks_description`, perksConfirm: `${n}/management/perks_confirm`, perksPricing: `${n}/management/perks_pricing` }),
                o = `${n}/perks_intro_examples`,
                c = `${n}/perks_description_examples`,
                d = `${n}/perks_preview`;
        },
        420412: (e, t, i) => {
            i.d(t, { Z: () => o });
            var r = i(202784),
                n = i(325686),
                a = i(235902),
                l = i(885015),
                s = i(392237);
            function o({ borderColor: e = "borderColor", isSlim: t = !1, label: i }) {
                const { isWebRedesign: o } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return i ? r.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(n.Z, { style: c.gapColumn }, r.createElement(n.Z, { style: [c.gap, d] })), r.createElement(n.Z, { style: c.gapText }, i), r.createElement(n.Z, { style: c.gapColumn }, r.createElement(n.Z, { style: [c.gap, d] }))) : r.createElement(n.Z, { style: [!t && c.root, o() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, i) => {
            i.d(t, { Z: () => c });
            var r = i(807896),
                n = i(202784),
                a = i(325686),
                l = i(392237);
            class s extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: i, ...l } = this.props,
                        s = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, o.column, i && o.withGutterColumn] }));
                    return n.createElement(a.Z, (0, r.Z)({ style: [t, o.root, i && o.withGutter] }, l), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const o = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        779610: (e, t, i) => {
            i.d(t, { Z: () => d });
            var r = i(202784),
                n = i(325686),
                a = i(191796),
                l = i(58399),
                s = i(731708),
                o = i(952428),
                c = i(392237);
            const d = (e) => {
                    const { decoration: t, description: i, disabled: d = !1, isActive: u = !1, label: m, link: g, onPress: b, paddingHorizontal: h, renderRightContent: f, role: y = "tab", styleOverride: _, testID: v = "pivot", thumbnail: k, thumbnailSize: E, withoutArrow: w = !1 } = e,
                        Z = [p.thumbnailContainer, "medium" === E && p.thumbnailContainerMedium],
                        C = "string" == typeof m ? r.createElement(s.ZP, null, m) : m,
                        S = "object" == typeof g && g.external && !g.openInSameFrame,
                        x = i ? ("string" == typeof i ? r.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${v}-description` }, i) : i) : null,
                        R = r.useMemo(() => ("space0" === h ? { paddingHorizontal: 0 } : { paddingHorizontal: h ? c.default.theme.spaces[h] : c.default.theme.componentDimensions.gutterHorizontal }), [h]);
                    return r.createElement(o.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : g, onPress: b, role: y, style: [p.root, R, d && p.disabled, _], testID: v, withInteractiveStyling: !!g || !!b }, r.createElement(n.Z, { style: p.contentContainer }, k ? r.createElement(n.Z, { style: Z }, k) : null, r.createElement(n.Z, { style: p.content }, C, x), f ? f() : null, (!g && !b) || d || w ? null : S ? r.createElement(a.default, { style: p.icon }) : r.createElement(l.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        711223: (e, t, i) => {
            i.r(t), i.d(t, { default: () => o });
            var r = i(202784),
                n = i(890601),
                a = i(783427),
                l = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.MonetizationV2.1f82078a.js.map
