"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.MonetizationV2"],
    {
        38945: (e, t, i) => {
            i.d(t, { Z: () => o });
            var n,
                r,
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
                                                                        (r = {
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
                        name: "useVerifiedProgramsEligibilityQuery",
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
                                                    { kind: "InlineFragment", selections: [r, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
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
            const o = l;
        },
        423488: (e, t, i) => {
            i.d(t, { Z: () => h });
            var n = i(202784),
                r = i(325686),
                a = i(731708),
                l = i(420412),
                o = i(392237),
                s = i(674132),
                c = i.n(s),
                d = i(263272),
                p = i(293723),
                u = i(443781);
            const m = c().b2b4d592,
                g = c().c5f89b06,
                b = c().fbb03ba6,
                f = c().hb4c5169,
                h = ({ failedRequirements: e }) => {
                    const { featureSwitches: t } = n.useContext(u.rC),
                        i = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        o = t.getNumberValue("responsive_web_ad_revenue_sharing_number_of_impressions") || 15,
                        s = f({ impression_number: o });
                    return n.createElement(r.Z, { style: y.eligibilityRoot }, n.createElement(r.Z, { key: m, style: y.requirement }, n.createElement(a.ZP, { style: y.requirementLabel, weight: "bold" }, i ? g : m), e.includes("verified") ? n.createElement(d.default, { style: y.iconUnchecked, testID: "verifiedUnchecked" }) : n.createElement(p.default, { style: y.iconChecked, testID: "verifiedChecked" })), n.createElement(l.Z, null), n.createElement(r.Z, { key: s, style: y.requirement }, n.createElement(a.ZP, { style: y.requirementLabel, weight: "bold" }, s), e.includes("tweet_impressions") ? n.createElement(d.default, { style: y.iconUnchecked, testID: "impressionsUnchecked" }) : n.createElement(p.default, { style: y.iconChecked, testID: "impressionsChecked" })), n.createElement(l.Z, null), n.createElement(r.Z, { key: b, style: y.requirement }, n.createElement(a.ZP, { style: y.requirementLabel, weight: "bold" }, b), e.includes("followers") ? n.createElement(d.default, { style: y.iconUnchecked, testID: "followersUnchecked" }) : n.createElement(p.default, { style: y.iconChecked, testID: "followersChecked" })));
                },
                y = o.default.create((e) => ({ eligibilityRoot: { backgroundColor: e.colors.gray0, padding: e.spaces.space12, borderRadius: e.borderRadii.medium, gap: e.spaces.space8 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 }, requirement: { flexDirection: "row", alignItems: "center" }, requirementLabel: { flex: 1, paddingEnd: 10 }, requirementsRoot: { gap: e.spaces.space24, marginVertical: e.spaces.space32 } }));
        },
        299690: (e, t, i) => {
            i.d(t, { Z: () => l });
            var n = i(38945),
                r = (i(585488), i(535338));
            const a = n.Z,
                l = () => {
                    const { viewer: e } = (0, r.p)(a, {}),
                        t = e.user_results.result,
                        i = t.verified_program_eligibility?.ad_revenue_sharing_eligibility || [];
                    return { subscriptionsFailedRequirements: t.verified_program_eligibility?.super_follows_eligibility || [], revShareFailedRequirements: i };
                };
        },
        299239: (e, t, i) => {
            i.r(t), i.d(t, { default: () => J });
            var n = i(202784),
                r = i(154003),
                a = i(392237),
                l = i(674132),
                o = i.n(l),
                s = i(692165),
                c = i(115553),
                d = i(443781),
                p = i(293115),
                u = i(615027),
                m = i(620243),
                g = i(698579),
                b = i(325686),
                f = i(67369),
                h = i(731708),
                y = i(721266),
                _ = i(530525),
                v = i(439592),
                k = i(157130),
                E = i(779610),
                C = i(323265);
            const w = i.p + "monetization-image-premium-tools.0265296a.png",
                Z = i.p + "monetization-image-reach.9f36135a.png",
                S = i.p + "monetization-image-rev-share.2d15ac6a.png",
                x = i.p + "monetization-image-subscribers.c992566a.png";
            var R = i(857378),
                z = i(316732),
                P = i(725405),
                I = i(423488),
                F = i(299690),
                $ = i(228477);
            function A({ children: e, description: t, title: i }) {
                const r = (0, f.LX)(),
                    a = n.useMemo(() => ({ width: r ? "100%" : 440 }), [r]);
                return n.createElement(b.Z, { style: a }, n.createElement(h.ZP, { size: r ? "headline1" : "title4", weight: r ? "bold" : void 0 }, i), n.createElement(y.Z, { size: "space8" }), n.createElement(b.Z, { style: { height: 50 } }, n.createElement(h.ZP, { color: "gray700", size: r ? "body" : "headline2" }, t)), n.createElement(b.Z, { style: D.content }, e));
            }
            const D = a.default.create((e) => ({ content: { marginTop: e.spaces.space16, width: "100%" } })),
                q = o().bfb6be8a,
                T = o().ed6c6da2,
                j = o().bee20918,
                V = o().h93b6580,
                B = o().eea6d8f8,
                U = o().a0e8811e,
                H = o().e1a74ac0,
                L = o().cd3a6f9a,
                W = o().c35e6144,
                G = o().b9dbeb34,
                K = o().b2d41138,
                M = o().defa7f12,
                N = () => {
                    const e = (0, P.Z)();
                    n.useEffect(() => {
                        e.scribeAction("impression");
                    }, [e]);
                    const t = (0, f.LX)(),
                        i = C.ZP.isWebView(),
                        [r, a] = n.useState(!1),
                        [l, s] = n.useState(!1),
                        { revShareFailedRequirements: c, subscriptionsFailedRequirements: d } = (0, F.Z)(),
                        p = n.useMemo(() => ({ width: t ? "100%" : 920 }), [t]),
                        u = n.useMemo(() => n.createElement(z.Z, { variant: "MonetizationPromoPage" }), []),
                        m = n.useCallback(() => {
                            a(!r), e.scribe({ component: "rev_share_eligibility", action: "toggle" });
                        }, [a, r, e]),
                        g = n.useCallback(() => {
                            s(!l), e.scribe({ component: "subscriptions_eligibility", action: "toggle" });
                        }, [s, l, e]);
                    return n.createElement(
                        b.Z,
                        { style: O.container },
                        n.createElement(
                            b.Z,
                            { style: O.scrollable },
                            n.createElement(
                                b.Z,
                                { style: O.contentContainer },
                                n.createElement(
                                    b.Z,
                                    { style: O.content },
                                    n.createElement(
                                        b.Z,
                                        { style: p },
                                        n.createElement(b.Z, { style: O.header }, n.createElement(h.ZP, { align: t ? "left" : "center", size: t ? "title2" : "title1", weight: t ? "bold" : "medium" }, q), n.createElement(y.Z, { size: "space8" }), n.createElement(h.ZP, { align: t ? "left" : "center", color: "gray700", size: t ? "headline2" : "headline1" }, T), t ? null : n.createElement(n.Fragment, null, n.createElement(y.Z, { size: "space36" }), n.createElement(b.Z, { style: O.upsellButtonContainer }, u))),
                                        n.createElement(y.Z, { size: t ? "space40" : "space80" }),
                                        n.createElement(b.Z, { style: O.upsellBlocks }, n.createElement(A, { description: V, title: j }, n.createElement(b.Z, { style: O.imageContainer }, n.createElement(_.Z, { "aria-label": j, aspectMode: v.Z.exact(2), image: S })), n.createElement(k.Z, { renderContent: () => n.createElement(I.Z, { failedRequirements: c }), wrapperStyle: O.popoverContent }, n.createElement(E.Z, { label: B, onPress: m, paddingHorizontal: "space0", styleOverride: O.pivot }))), n.createElement(A, { description: H, title: U }, n.createElement(b.Z, { style: O.imageContainer }, n.createElement(_.Z, { "aria-label": U, aspectMode: v.Z.exact(2), image: x })), n.createElement(k.Z, { renderContent: () => n.createElement($.Z, { failedRequirements: d }), wrapperStyle: O.popoverContent }, n.createElement(E.Z, { label: L, onPress: g, styleOverride: O.pivot }))), n.createElement(A, { description: G, title: W }, n.createElement(b.Z, { style: O.imageContainer }, n.createElement(_.Z, { "aria-label": W, aspectMode: v.Z.exact(2), image: w }))), n.createElement(A, { description: M, title: K }, n.createElement(b.Z, { style: O.imageContainer }, n.createElement(_.Z, { "aria-label": K, aspectMode: v.Z.exact(2), image: Z })))),
                                        n.createElement(h.ZP, { color: "gray700", style: O.disclaimer }, n.createElement(o().I18NFormatMessage, { $i18n: "gbef9649" }, n.createElement(h.ZP, { link: "https://help.x.com/using-x/x-premium-faq#item2" }, o().i3e4955d))),
                                    ),
                                ),
                            ),
                        ),
                        t ? n.createElement(b.Z, { style: [O.footer, i ? O.footerWebview : O.footerDefault] }, u) : null,
                    );
                },
                O = a.default.create((e) => ({ container: { display: "grid", width: "100%", position: "relative" }, popoverContent: { margin: 0, pointer: "cursor" }, body: { width: "100%", height: "100%", maxHeight: "100%", flexDirection: "column" }, topGrid: { width: "100%", height: 200, position: "absolute", start: 0, top: 0, zIndex: 1, transform: "rotate(180deg)" }, bottomGrid: { width: "100%", height: 150, position: "absolute", start: 0, bottom: 0, zIndex: 1 }, header: { width: "100%", flexDirection: "column" }, scrollable: { width: "100%", flex: 1, flexGrow: 1, overflow: "auto", minHeight: "100%", height: "100%", alignItems: "center" }, content: { position: "relative", zIndex: 10, paddingTop: e.spaces.space48, boxSizing: "border-box", paddingHorizontal: a.default.theme.spaces.space16, paddingBottom: 144 }, contentContainer: { minWidth: "100%", minHeight: "100%", alignItems: "center" }, upsellButtonContainer: { width: "min-content", alignSelf: "center" }, upsellBlocks: { marginVertical: e.spaces.space16, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", gap: e.spaces.space40, rowGap: e.spaces.space56 }, imageContainer: { borderRadius: e.borderRadii.large, overflow: "hidden", boxShadow: "0 20px 50px rgba(136,153,166,0.15)", borderColor: e.colors.gray50, borderWidth: e.borderWidths.small }, pivot: { marginTop: e.spaces.space8, pointer: "cursor", paddingStart: 0 }, disclaimer: { marginTop: e.spaces.space32, textAlign: "center" }, footer: { position: "fixed", width: "100%", paddingHorizontal: e.spaces.space32, paddingVertical: e.spaces.space16 }, footerWebview: { bottom: 0 }, footerDefault: { bottom: R.h$ } })),
                Q = o().d299431c,
                X = (e) => {
                    const { featureSwitches: t, userClaims: i } = (0, d.QZ)(),
                        a = i.isAnyPremiumSubscriber(),
                        l = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        { verified_program_application_status: o, verified_user_profiles: b } = (0, m.Z)(),
                        f = b?.super_follows_user_profile?.is_active,
                        h = b?.ad_revenue_sharing_user_profile?.is_active,
                        y = o?.super_follows_application_status || "NotStarted",
                        _ = o?.ad_revenue_sharing_application_status || "NotStarted",
                        v = n.createElement(r.ZP, { icon: n.createElement(s.default, null), link: "https://help.x.com/using-x/x-premium-faq#item2", style: Y.helpCenterButton });
                    return (0, g.F9)({ subscriptionsApplicationStatus: y, revShareApplicationStatus: _, revShareActive: h, subscriptionsActive: f, isAnyPremiumSubscriber: a, monetizationUpsellEnabled: l }) ? n.createElement(p.nO, { namespace: { page: "monetization", section: "upsell" } }, n.createElement(c.A, { documentTitle: Q, history: e.history, isFullWidth: !0, onBackClick: () => e.history.goBack(), primaryContent: n.createElement(N, null), primaryContentLabel: Q, rightControl: v, sidebarContent: null })) : n.createElement(u.Z, { to: "/settings/monetization" });
                },
                J = n.memo(X),
                Y = a.default.create((e) => ({ helpCenterButton: { border: "none" } }));
        },
        698579: (e, t, i) => {
            i.d(t, { F9: () => $, Fx: () => Z, XS: () => p, Xb: () => F, j0: () => k });
            var n = i(688715),
                r = i(674132),
                a = i.n(r),
                l = i(234558),
                o = i(491831),
                s = i(521058),
                c = i(711223),
                d = i(720816);
            const p = Object.freeze({ adRev: "ad_revenue_sharing", subscriptions: "creator_subs", preRollAds: "pre_roll_video_ads" }),
                u = { Rejected: a().ibb5e1c8, Submitted: a().b255df58, Waitlisted: a().b3f834c8, Approved: a().bbe09d38, PendingIdv: a().efbc5066 },
                m = a().hc7631da,
                g = a().h72d71a2,
                b = a().e12b0b16,
                f = a().a1e57106,
                h = a().b5334780,
                y = a().i51b4e22,
                _ = a().h5bd7160,
                v = { CanVerifyIdentity: a().e32040c4, RequestLocked: a().d8f5cce4, PendingResult: a().j8769b42, IdentityNonVerifiable: _, UnavailableMissingBlueSubscription: _ },
                k = { pathname: d.NW.stripeSetup, state: { cameFromEarningsDashboard: !0 } },
                E = { Icon: l.default, iconBGColor: "green600", heading: "Video Ads", description: "You are on track for payouts", id: p.preRollAds, pill: { label: "NEW", color: "gray1000" }, link: "/settings/ad_rev_share_dashboard", scribeComponent: "pre-roll-ads-dashboard" },
                C = { Icon: o.default, iconBGColor: "blue600", heading: a().d7b51c68, description: "", id: p.subscriptions, link: "/settings/monetization/subscriptions/dashboard", scribeComponent: "creator-subscription-dashboard" },
                w = (e) => ({ Icon: s.default, iconBGColor: "orange600", heading: e ? a().be955554 : a().b03a3d62, description: a().cbbe29c2, id: p.adRev, link: "/settings/ad_rev_share_dashboard", scribeComponent: "ad-revenue-sharing-dashboard" }),
                Z = { Icon: c.default, iconBGColor: "purple600", heading: a().g97a2d6c, description: a().f30774ea, id: "learn_more", link: (0, n.ju)("https://help.x.com/using-x/creator-dashboard"), scribeComponent: "learn-more" };
            function S(e, t) {
                return "ad_revenue_sharing" === e ? w(t) : "creator_subs" === e ? C : E;
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
            function F({ applicationStatus: e, eligibility: t, id: i, idvStatus: n, isActive: r, isPayoutSetupIncomplete: l = !1, pendingIdv: o = !1, rejectedCreatorCanReapply: s, revShareUpdateEnabled: c = !1 }) {
                const d = { ...S(i, c) },
                    g = 0 === t.length || (1 === t.length && "id_verified" === t[0]);
                if (r && !o) return d;
                const b = n ? v[n] : "";
                if (i === p.subscriptions) {
                    const n = "NotStarted" === e || ("Rejected" === e && s),
                        r = "Rejected" === e && !s;
                    let l;
                    (d.link = r ? "/settings/superfollows/application/rejected" : n ? (g ? R(i) : x(i)) : void 0),
                        o ? (l = f) : r ? (l = y) : n || (l = h),
                        (d.description = (function (e, t, i, n, r, l) {
                            return e ? r : "Rejected" === t && l ? a().aea0b11a : u[t] || z(i, n);
                        })(o, e, i, c, b, s)),
                        (d.disabled = t.includes("generic_violation") || t.includes("do_not_charge")),
                        (d.pill = I(g, l)),
                        (d.scribeComponent = P(i));
                }
                return i === p.adRev && ((d.link = o || l ? void 0 : g ? R(i) : x(i)), (d.description = o ? b : l ? m : z(i, c)), (d.disabled = t.includes("generic_violation") || t.includes("do_not_charge") || t.includes("verified_type")), (d.pill = I(g, l || o ? f : void 0)), (d.scribeComponent = P(i))), i === p.preRollAds && ((d.link = l ? k : g ? R(i) : x(i)), (d.description = l ? m : z(i, c)), (d.disabled = t.includes("generic_violation") || t.includes("do_not_charge") || t.includes("verified_type")), (d.pill = I(g, l ? f : void 0)), (d.scribeComponent = P(i))), d;
            }
            const $ = (e) => "NotStarted" === e.subscriptionsApplicationStatus && "NotStarted" === e.revShareApplicationStatus && !e.revShareActive && !e.subscriptionsActive && !e.revShareActive && !e.subscriptionsActive && !e.isAnyPremiumSubscriber && e.monetizationUpsellEnabled;
        },
        228477: (e, t, i) => {
            i.d(t, { Z: () => v });
            var n = i(202784),
                r = i(325686),
                a = i(891198),
                l = i(731708),
                o = i(420412),
                s = i(392237),
                c = i(674132),
                d = i.n(c),
                p = i(293723),
                u = i(263272),
                m = i(443781);
            const g = d().f09be7f8,
                b = d().c5f89b06,
                f = d().ff9f4475,
                h = d().b747ce3a,
                y = d().c27f57ac,
                _ = d().h63d2973,
                v = ({ failedRequirements: e }) => {
                    const { featureSwitches: t } = (0, m.QZ)(),
                        i = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        s = t.getNumberValue("creator_subscriptions_eligibility_verified_followers", 2e3),
                        c = t.getNumberValue("creator_subscriptions_eligibility_impressions", 5e6),
                        d = a.ZP.getTruncatedCount(s),
                        v = a.ZP.getTruncatedCount(c),
                        E = f({ minFollowersCount: d }),
                        C = [
                            { label: i ? b : g, checked: !e.includes("blue_subscription") },
                            { label: E, checked: !e.includes("followers") },
                            { label: _({ count: v }), checked: !e.includes("impressions") },
                            { label: h, checked: !e.includes("tweets") },
                            { label: y, checked: !e.includes("age") },
                        ];
                    return n.createElement(
                        r.Z,
                        { style: k.root },
                        C.map((e, t, i) => n.createElement(n.Fragment, { key: t }, n.createElement(r.Z, { key: e.label, style: k.item }, n.createElement(l.ZP, { style: k.label, weight: "bold" }, e.label), e.checked ? n.createElement(p.default, { style: k.iconChecked }) : n.createElement(u.default, { style: k.iconUnchecked })), i.length !== t + 1 && n.createElement(o.Z, null))),
                    );
                },
                k = s.default.create((e) => ({ root: { backgroundColor: e.colors.gray0, padding: e.spaces.space12, borderRadius: e.borderRadii.medium, gap: e.spaces.space8 }, gap: { gap: e.spaces.space24 }, item: { flexDirection: "row" }, label: { flex: 1, marginEnd: e.spaces.space8 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 } }));
        },
        720816: (e, t, i) => {
            i.d(t, { $w: () => c, D1: () => o, Jz: () => r, Km: () => d, LI: () => n, NW: () => l, o5: () => s, wU: () => a });
            const n = "/settings/monetization",
                r = "/settings/superfollows",
                a = Object.freeze({ root: `${r}/application`, eligibility: `${r}/application/eligibility`, pricing: `${r}/application/pricing`, completeProfile: `${r}/application/complete_profile`, submit: `${r}/application/submit`, submitted: `${r}/application/submitted`, waitlisted: `${r}/application/waitlisted`, rejected: `${r}/application/rejected` }),
                l = Object.freeze({ root: `${r}/onboarding`, perksIntro: `${r}/onboarding/perks_intro`, perksDescription: `${r}/onboarding/perks_description`, perksBadges: `${r}/onboarding/perks_badges`, perksConfirm: `${r}/onboarding/perks_confirm`, pricing: `${r}/onboarding/pricing`, pricingConfirm: `${r}/onboarding/pricing_confirm`, stripeSetup: `${r}/onboarding/stripe_setup`, stripePending: `${r}/onboarding/stripe_pending`, stripeCompleted: `${r}/onboarding/stripe_completed` }),
                o = Object.freeze({ root: `${r}/management`, perksIntro: `${r}/management/perks_intro`, perksDescription: `${r}/management/perks_description`, perksConfirm: `${r}/management/perks_confirm`, perksPricing: `${r}/management/perks_pricing` }),
                s = `${r}/perks_intro_examples`,
                c = `${r}/perks_description_examples`,
                d = `${r}/perks_preview`;
        },
        420412: (e, t, i) => {
            i.d(t, { Z: () => s });
            var n = i(202784),
                r = i(325686),
                a = i(235902),
                l = i(885015),
                o = i(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: i }) {
                const { isWebRedesign: s } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: o.default.theme.colors[e] ?? o.default.theme.colors.borderColor };
                return i ? n.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] })), n.createElement(r.Z, { style: c.gapText }, i), n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] }))) : n.createElement(r.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = o.default.create((e) => ({ borderColor: { backgroundColor: o.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: o.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, i) => {
            i.d(t, { Z: () => c });
            var n = i(807896),
                r = i(202784),
                a = i(325686),
                l = i(392237);
            class o extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: i, ...l } = this.props,
                        o = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, s.column, i && s.withGutterColumn] }));
                    return r.createElement(a.Z, (0, n.Z)({ style: [t, s.root, i && s.withGutter] }, l), o);
                }
            }
            o.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = o;
        },
        779610: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n = i(202784),
                r = i(325686),
                a = i(191796),
                l = i(58399),
                o = i(731708),
                s = i(952428),
                c = i(392237);
            const d = (e) => {
                    const { decoration: t, description: i, disabled: d = !1, isActive: u = !1, label: m, link: g, onPress: b, paddingHorizontal: f, renderRightContent: h, role: y = "tab", styleOverride: _, testID: v = "pivot", thumbnail: k, thumbnailSize: E, withoutArrow: C = !1 } = e,
                        w = [p.thumbnailContainer, "medium" === E && p.thumbnailContainerMedium],
                        Z = "string" == typeof m ? n.createElement(o.ZP, null, m) : m,
                        S = "object" == typeof g && g.external && !g.openInSameFrame,
                        x = i ? ("string" == typeof i ? n.createElement(o.ZP, { color: "gray700", size: "subtext2", testID: `${v}-description` }, i) : i) : null,
                        R = n.useMemo(() => ("space0" === f ? { paddingHorizontal: 0 } : { paddingHorizontal: f ? c.default.theme.spaces[f] : c.default.theme.componentDimensions.gutterHorizontal }), [f]);
                    return n.createElement(s.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : g, onPress: b, role: y, style: [p.root, R, d && p.disabled, _], testID: v, withInteractiveStyling: !!g || !!b }, n.createElement(r.Z, { style: p.contentContainer }, k ? n.createElement(r.Z, { style: w }, k) : null, n.createElement(r.Z, { style: p.content }, Z, x), h ? h() : null, (!g && !b) || d || C ? null : S ? n.createElement(a.default, { style: p.icon }) : n.createElement(l.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.MonetizationV2.381e586a.js.map
