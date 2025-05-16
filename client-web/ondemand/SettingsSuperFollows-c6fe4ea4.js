"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsSuperFollows-c6fe4ea4"],
    {
        840907: (e, t, a) => {
            a.r(t), a.d(t, { adRevShareApplicationMutation: () => N, default: () => A, query: () => q });
            var r = a(88691),
                i = a(963888),
                n = a(202784),
                s = a(325686),
                o = (a(585488), a(351743)),
                l = a.n(o),
                c = a(107267),
                d = a(688715),
                m = a(708852),
                p = a(731708),
                u = a(40610),
                g = a(154003),
                h = a(392237),
                y = a(332920),
                b = a.n(y),
                _ = a(323265),
                f = a(980407),
                E = a(443781),
                Z = a(952793),
                v = a(725516),
                k = a(535338),
                w = a(615027),
                C = a(599974);
            const x = b().b03a3d62,
                T = b().be955554,
                P = b().f91685ba,
                B = b().a9f0e0fa,
                z = b().c694e3e4,
                D = b().acd1a1be,
                S = (0, d.ju)("https://legal.x.com/creator-ads-revenue-sharing-terms.html"),
                R = (0, d.ju)("https://legal.x.com/creator-revenue-sharing-terms"),
                I = b().f7e11f70,
                L = b().c8169274,
                q = i.Z,
                N = r.Z,
                A = (e) => {
                    const t = (0, c.useHistory)(),
                        a = (0, m.D2)(),
                        r = (0, v.z)(),
                        i = (0, C.Z)(),
                        o = (0, Z.hC)("responsive_web_ad_revenue_sharing_url_update_enabled"),
                        d = "/settings/monetization",
                        [h, y] = n.useState(),
                        { featureSwitches: A } = n.useContext(E.rC),
                        { viewer: H } = (0, k.p)(q, {}),
                        [U, F] = l()(N),
                        V = H.user_results.result,
                        W = V.verified_program_eligibility?.ad_revenue_sharing_eligibility || [],
                        j = 0 === W.length || (1 === W.length && "id_verified" === W[0]),
                        O = V.verified_user_profiles?.ad_revenue_sharing_user_profile?.is_active,
                        G = V.verified_program_application_status?.ad_revenue_sharing_application_status || "NotStarted",
                        $ = A.isTrue("responsive_web_ad_revenue_sharing_setup_enabled");
                    n.useEffect(() => {
                        r.scribe({ page: "settings", section: "monetization", component: "ad-revenue-sharing-application", action: "impression" });
                    }, [r]);
                    const Q = n.useCallback(() => {
                            r.scribe({ page: "settings", section: "monetization", component: "ad-revenue-sharing-application", element: "join-button", action: "click" }),
                                U({
                                    variables: {},
                                    onCompleted: i,
                                    onError: () => {
                                        y(L);
                                    },
                                });
                        }, [U, r, i]),
                        X = n.useCallback(() => t.goBack({ backLocation: d }), [t]),
                        Y = n.useMemo(() => {
                            const e = a ? M.paddingWide : M.paddingNarrow;
                            return [M.root, e, !_.ZP.isMobileOS() && M.desktopRoot];
                        }, [a]),
                        K = n.useMemo(() => ({ termsLink: n.createElement(p.ZP, { link: o ? R : S }) }), [o]);
                    if (!j || null != O || !$ || "NotStarted" !== G) return n.createElement(w.Z, { to: d });
                    const J = _.ZP.isTwitterApp();
                    return n.createElement(f.Z, { backButtonType: "close", backLocation: d, documentTitle: o ? T : x, hideBackButton: J, onBackClick: X }, n.createElement(s.Z, { style: Y }, n.createElement(s.Z, null, n.createElement(p.ZP, { size: "title4", weight: "heavy" }, o ? T : x), n.createElement(p.ZP, { size: "body", style: M.wideTop }, P), n.createElement(p.ZP, { size: "body", style: M.wideTop }, o ? z : B), n.createElement(p.ZP, { size: "body", style: M.wideTop }, D), h && n.createElement(u.Z.Danger, { style: M.narrowTop, text: h, withIcon: !0 })), n.createElement(s.Z, null, n.createElement(p.ZP, { color: "gray700", style: M.terms }, o ? n.createElement(b().I18NFormatMessage, { $i18n: "j2d920f7" }, n.cloneElement(K.termsLink, null, b().c3f93665)) : n.createElement(b().I18NFormatMessage, { $i18n: "fde94f97" }, n.cloneElement(K.termsLink, null, b().a249ce04))), n.createElement(g.ZP, { disabled: F, onClick: Q, size: "xLarge", type: "primaryFilled" }, I))));
                },
                M = h.default.create((e) => ({ root: { paddingBottom: e.spaces.space28, height: "100%", justifyContent: "space-between", flexBasis: 0, flexGrow: 1, flexShrink: 1 }, desktopRoot: { minHeight: 500 }, paddingWide: { paddingHorizontal: e.spaces.space72 }, paddingNarrow: { paddingHorizontal: e.spaces.space32 }, wideTop: { marginTop: 20 }, narrowTop: { marginTop: 10 }, terms: { marginBottom: e.spaces.space16 } }));
        },
        890331: (e, t, a) => {
            a.r(t), a.d(t, { AdRevShareDashboard: () => K, adRevShareDashboardQuery: () => Q, default: () => ee });
            var r = a(807896),
                i = a(430229),
                n = a(202784),
                s = a(325686),
                o = (a(585488), a(107267)),
                l = a(392237),
                c = a(332920),
                d = a.n(c),
                m = a(652904),
                p = a(736063),
                u = a(952793),
                g = a(725516),
                h = a(127218),
                y = a(412876),
                b = a(207070),
                _ = a(615027),
                f = a(264922),
                E = a(731708),
                Z = a(97882);
            const v = d().a5204850,
                k = ({ payoutAmount: e }) => {
                    const t = (0, Z.x)({ amount: e, strictAmount: !0 }),
                        a = n.createElement(s.Z, null, n.createElement(E.ZP, { size: "title3", style: w.revenuePrimaryText, weight: "medium" }, t), n.createElement(E.ZP, { size: "subtext2", style: w.helperText }, v));
                    return n.createElement(s.Z, { style: w.root }, a);
                },
                w = l.default.create((e) => ({ root: { paddingVertical: e.spaces.space8, marginBottom: e.spaces.space24, textAlign: "center" }, revenuePrimaryText: { fontSize: e.spaces.space48, lineHeight: e.spaces.space48 }, helperText: { marginTop: e.spaces.space16 } })),
                C = n.memo(k);
            var x = a(572105),
                T = a(277660),
                P = a.n(T),
                B = a(965245),
                z = a(515140),
                D = a(952428),
                S = a(322121);
            const R = d().bfbc051d,
                I = d().jade381b,
                L = d().ada650cf,
                q = z.Z,
                N = ({ item: e }) => {
                    const t = P()(q, e),
                        a = t.payout_amount,
                        r = parseInt(t.payout_complete_msec, 10),
                        i = t.currency_code.toUpperCase(),
                        o = R(new Date(r)),
                        l = n.useMemo(() => {
                            const e = t.payout_period;
                            if (!e) return;
                            const a = parseInt(e.from_msec, 10),
                                r = parseInt(e.to_msec, 10);
                            return { fromDate: I(new Date(a)), toDate: I(new Date(r)) };
                        }, [t.payout_period]),
                        c = a ? (0, Z.x)({ amount: a, currencyCode: i, strictAmount: !0 }) : n.createElement(S.default, { testID: "icon-minus" });
                    return n.createElement(s.Z, { role: "listitem" }, n.createElement(D.Z, { style: M.item }, n.createElement(E.ZP, { color: "gray900" }, "+", c), n.createElement(E.ZP, { color: "gray900", size: "subtext2" }, l ? L(l) : o)));
                },
                A = n.memo(N),
                M = l.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, details: { marginEnd: e.spaces.space8 }, item: { marginBottom: e.spaces.space20, gap: 6 } })),
                H = x.Z,
                U = (e) => e.__id,
                F = (e) => n.createElement(A, { item: e, key: e.__id }),
                V = ({ emptyStateDescription: e, fetchNext: t, items: a }) => n.createElement(n.Fragment, null, a.length > 0 ? n.createElement(s.Z, { role: "list" }, n.createElement(B.Z, { assumedItemHeight: 64, cacheKey: "payoutsList", footer: null, identityFunction: U, items: a, onNearEnd: t, renderer: F, withoutHeadroom: !0 })) : n.createElement(E.ZP, { color: "gray700", style: O.emptyState }, e)),
                W = ({ emptyStateDescription: e, fetchNext: t, slice: a }) => {
                    const { items: r } = P()(H, a);
                    return n.createElement(n.Fragment, null, n.createElement(V, { emptyStateDescription: e, fetchNext: t, items: r }));
                },
                j = n.memo(W),
                O = l.default.create((e) => ({ header: { marginHorizontal: e.spaces.space12 }, gap: { marginVertical: e.spaces.space8 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } })),
                G = d().d085a144,
                $ = d().g652fc4c,
                Q = i.Z,
                X = () => {
                    const e = (0, o.useLocation)(),
                        { data: t, fetchNext: a } = (0, h.C)(Q, { limit: 10 }),
                        i = (0, u.hC)("responsive_web_ad_revenue_sharing_total_earnings_enabled"),
                        l = t.viewer.user_results.result,
                        c = l.verified_program_application_status?.ad_revenue_sharing_application_status || "NotStarted";
                    if ("User" !== l.__typename) return null;
                    const d = l.ad_revenue_sharing_payouts;
                    if (!d) return null;
                    if ("Approved" !== c) return n.createElement(_.Z, { to: "/settings/monetization" });
                    const p = i ? l.ad_revenue_sharing_accumulated_payout?.accumulated_payout_amount : null,
                        g = { focusable: !1, user: l, size: "custom" };
                    return n.createElement(m.Z, null, n.createElement(f.Z, { location: e, screenType: "secondaryDetail", title: G }, n.createElement(s.Z, { style: J.main }, n.createElement(s.Z, { style: J.container }, n.createElement(y.Z, (0, r.Z)({ style: J.avatar }, g)), n.createElement(b.Z, { color: "gray900", user: l })), p ? n.createElement(C, { payoutAmount: p }) : null, n.createElement(j, { emptyStateDescription: $, fetchNext: a, slice: d }))));
                },
                Y = { context: "MONETIZATION_SUPER_FOLLOWS_REVENUE" },
                K = () => n.createElement(p.H, { errorConfig: Y }, n.createElement(X, null)),
                J = l.default.create((e) => ({ main: { paddingHorizontal: e.spaces.space16 }, container: { gap: 16, alignItems: "center", marginVertical: e.spaces.space24 }, item: { marginBottom: e.spaces.space20, gap: 6 }, avatar: { width: "84px", height: "84px" } })),
                ee = (0, g.Z)(K, { component: "ad_rev_share_dashboard" });
        },
        423488: (e, t, a) => {
            a.d(t, { Z: () => b });
            var r = a(202784),
                i = a(325686),
                n = a(731708),
                s = a(420412),
                o = a(392237),
                l = a(332920),
                c = a.n(l),
                d = a(263272),
                m = a(293723),
                p = a(443781);
            const u = c().b2b4d592,
                g = c().c5f89b06,
                h = c().fbb03ba6,
                y = c().hb4c5169,
                b = ({ failedRequirements: e }) => {
                    const { featureSwitches: t } = r.useContext(p.rC),
                        a = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        o = t.getNumberValue("responsive_web_ad_revenue_sharing_number_of_impressions") || 15,
                        l = y({ impression_number: o });
                    return r.createElement(i.Z, { style: _.eligibilityRoot }, r.createElement(i.Z, { key: u, style: _.requirement }, r.createElement(n.ZP, { style: _.requirementLabel, weight: "bold" }, a ? g : u), e.includes("verified") ? r.createElement(d.default, { style: _.iconUnchecked, testID: "verifiedUnchecked" }) : r.createElement(m.default, { style: _.iconChecked, testID: "verifiedChecked" })), r.createElement(s.Z, null), r.createElement(i.Z, { key: l, style: _.requirement }, r.createElement(n.ZP, { style: _.requirementLabel, weight: "bold" }, l), e.includes("tweet_impressions") ? r.createElement(d.default, { style: _.iconUnchecked, testID: "impressionsUnchecked" }) : r.createElement(m.default, { style: _.iconChecked, testID: "impressionsChecked" })), r.createElement(s.Z, null), r.createElement(i.Z, { key: h, style: _.requirement }, r.createElement(n.ZP, { style: _.requirementLabel, weight: "bold" }, h), e.includes("followers") ? r.createElement(d.default, { style: _.iconUnchecked, testID: "followersUnchecked" }) : r.createElement(m.default, { style: _.iconChecked, testID: "followersChecked" })));
                },
                _ = o.default.create((e) => ({ eligibilityRoot: { backgroundColor: e.colors.gray0, padding: e.spaces.space12, borderRadius: e.borderRadii.medium, gap: e.spaces.space8 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 }, requirement: { flexDirection: "row", alignItems: "center" }, requirementLabel: { flex: 1, paddingEnd: 10 }, requirementsRoot: { gap: e.spaces.space24, marginVertical: e.spaces.space32 } }));
        },
        945018: (e, t, a) => {
            a.r(t), a.d(t, { default: () => P });
            a(136728);
            var r = a(202784),
                i = a(325686),
                n = a(107267),
                s = a(708852),
                o = a(154003),
                l = a(688715),
                c = a(731708),
                d = a(392237),
                m = a(332920),
                p = a.n(m),
                u = a(711223),
                g = a(323265),
                h = a(980407),
                y = a(727828),
                b = a(952793),
                _ = a(423488),
                f = a(299690);
            const E = p().e6ba42de,
                Z = p().ebc16756,
                v = p().a3a20a10,
                k = p().da4cd6fa,
                w = p().b2961492,
                C = p().d3789528,
                x = p().aa0ff456,
                T = p().bf214f48,
                P = (e) => {
                    const t = (0, n.useHistory)(),
                        a = (0, s.D2)(),
                        d = (0, b.hC)("responsive_web_ad_revenue_sharing_url_update_enabled"),
                        m = "/settings/monetization",
                        { revShareFailedRequirements: p } = (0, f.Z)(),
                        P = !p.includes("verified");
                    (0 === p.length || p.includes("generic_violation") || p.includes("do_not_charge") || p.includes("verified_type")) && t.push(m);
                    const z = r.useMemo(() => r.createElement(u.default, null), []),
                        D = a ? B.paddingWide : B.paddingNarrow,
                        S = r.useMemo(() => [B.root, D], [D]),
                        R = r.useMemo(() => r.createElement(i.Z, { style: B.rightControl }, r.createElement(o.ZP, { "aria-label": d ? x : C, icon: z, link: d ? (0, l.ju)("https://help.x.com/using-x/creator-revenue-sharing") : (0, l.ju)("https://help.x.com/using-twitter/creator-ads-revenue-sharing"), type: "primaryText" })), [z, d]),
                        I = r.useCallback(() => t.goBack({ backLocation: m }), [t]),
                        L = g.ZP.isTwitterApp();
                    return r.createElement(h.Z, { backButtonType: "back", backLocation: m, documentTitle: d ? Z : E, hideBackButton: L, onBackClick: I, rightControl: !L && R }, r.createElement(i.Z, { style: S }, r.createElement(c.ZP, { "aria-level": 2, role: "heading", size: "title4", style: B.title, weight: "heavy" }, v), r.createElement(c.ZP, { style: B.subtitle }, d ? w : k), r.createElement(_.Z, { failedRequirements: p })), r.createElement(i.Z, { style: [B.bottomBarWrapper, D] }, P ? r.createElement(o.ZP, { onPress: I, style: B.bottomBar, type: "primaryFilled" }, T) : r.createElement(i.Z, { style: B.bottomBar }, r.createElement(y.Z, { variant: "AdsRevShareEligibility" }))));
                },
                B = d.default.create((e) => ({ root: { paddingBottom: e.spaces.space20, flexGrow: 1 }, rightControl: { alignItems: "center", flexDirection: "row", gap: e.spaces.space4 }, paddingWide: { paddingHorizontal: e.spaces.space72 }, paddingNarrow: { paddingHorizontal: e.spaces.space32 }, illustration: { alignSelf: "center" }, headline: { marginTop: e.spaces.space32 }, subtext: { marginTop: e.spaces.space12 }, bottomBar: { gap: e.spaces.space24, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 }, bottomBarWrapper: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small, boxShadow: e.boxShadows.small }, title: { marginTop: e.spaces.space16 }, subtitle: { marginVertical: e.spaces.space16 } }));
        },
        299690: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(38945),
                i = (a(585488), a(535338));
            const n = r.Z,
                s = () => {
                    const { viewer: e } = (0, i.p)(n, {}),
                        t = e.user_results.result,
                        a = t.verified_program_eligibility?.ad_revenue_sharing_eligibility || [];
                    return { subscriptionsFailedRequirements: t.verified_program_eligibility?.super_follows_eligibility || [], revShareFailedRequirements: a };
                };
        },
        718324: (e, t, a) => {
            a.r(t), a.d(t, { default: () => L, preRollAdsApplicationMutation: () => I, query: () => R });
            a(136728);
            var r = a(878727),
                i = a(118275),
                n = a(202784),
                s = a(325686),
                o = (a(585488), a(351743)),
                l = a.n(o),
                c = a(107267),
                d = a(688715),
                m = a(708852),
                p = a(731708),
                u = a(154003),
                g = a(40610),
                h = a(392237),
                y = a(332920),
                b = a.n(y),
                _ = a(323265),
                f = a(980407),
                E = a(443781),
                Z = a(725516),
                v = a(535338),
                k = a(615027);
            const w = b().d4bb7e9c,
                C = b().dc535dbe,
                x = b().eb6d9270,
                T = b().a778472e,
                P = ["Minimum payout is $10 per month", "Your account must remain subscribed to X Premium or X Verified Organizations"],
                B = b().bde8446e,
                z = b().a415fd3a,
                D = b().c8169274,
                S = (0, d.ju)("https://legal.x.com/creator-revenue-sharing-terms"),
                R = i.Z,
                I = r.Z,
                L = (e) => {
                    const t = (0, c.useHistory)(),
                        a = (0, m.D2)(),
                        r = (0, Z.z)(),
                        i = "/settings/monetization",
                        [o, d] = n.useState(),
                        { featureSwitches: h } = n.useContext(E.rC),
                        { viewer: y } = (0, v.p)(R, {}),
                        [L, N] = l()(I),
                        A = y.user_results.result,
                        M = A.stripe_connect_account?.status,
                        H = null === A.verified_program_eligibility?.ad_revenue_sharing_eligibility || 0 === A.verified_program_eligibility?.ad_revenue_sharing_eligibility?.length,
                        U = A.verified_user_profiles?.ad_revenue_sharing_user_profile?.is_active,
                        F = h.isTrue("creator_monetization_video_ads_onboarding");
                    n.useEffect(() => {
                        r.scribe({ page: "settings", section: "monetization", component: "pre-roll-ads-application", action: "impression" });
                    }, [r]);
                    const V = n.useCallback(() => {
                            r.scribe({ page: "settings", section: "monetization", component: "pre-roll-ads-application", element: "join-button", action: "click" }),
                                L({
                                    variables: {},
                                    onCompleted: () => {
                                        "NotStarted" === M || "Incomplete" === M ? t.push("/settings/superfollows/onboarding/stripe_setup") : (window.location.pathname = "/settings/monetization");
                                    },
                                    onError: () => {
                                        d(D);
                                    },
                                });
                        }, [L, M, t, r]),
                        W = n.useCallback(() => t.goBack({ backLocation: i }), [t]),
                        j = n.useMemo(() => [q.root, a ? q.paddingWide : q.paddingNarrow, !_.ZP.isMobileOS() && q.desktopRoot], [a]),
                        O = _.ZP.isTwitterApp(),
                        G = n.useMemo(() => n.createElement(s.Z, { style: q.bottomBar }, n.createElement(p.ZP, { color: "gray700" }, B), n.createElement(u.ZP, { disabled: N, onClick: V, size: "xLarge", type: "primaryFilled" }, z)), [V, N]),
                        $ = n.useMemo(() => ({ twitterRulesLink: n.createElement(p.ZP, { link: S }), adRevTermsLink: n.createElement(p.ZP, { link: S }) }), []);
                    return H && null === U && F
                        ? n.createElement(
                              f.Z,
                              { backButtonType: "close", backLocation: i, bottomBar: G, documentTitle: w, hideBackButton: O, onBackClick: W },
                              n.createElement(
                                  s.Z,
                                  { style: j },
                                  n.createElement(p.ZP, { "aria-level": 2, role: "heading", size: "title4", style: q.headline, weight: "heavy" }, w),
                                  n.createElement(p.ZP, { style: q.wideTop }, C),
                                  n.createElement(p.ZP, { style: q.wideTop, weight: "bold" }, x),
                                  n.createElement(p.ZP, { style: q.wideTop }, n.createElement(b().I18NFormatMessage, { $i18n: "afbd47cb" }, n.cloneElement($.twitterRulesLink, null, b().fbba9725), n.cloneElement($.adRevTermsLink, null, b().f3dd8c4a))),
                                  n.createElement(p.ZP, { style: q.wideTop }, T),
                                  P.map((e, t) => n.createElement(p.ZP, { key: t }, "• ", e)),
                                  o && n.createElement(g.Z.Danger, { style: q.wideTop, text: o, withIcon: !0 }),
                              ),
                          )
                        : n.createElement(k.Z, { to: i });
                },
                q = h.default.create((e) => ({ root: { paddingBottom: e.spaces.space20, flexGrow: 1 }, desktopRoot: { minHeight: 500 }, paddingWide: { paddingHorizontal: e.spaces.space36 }, paddingNarrow: { paddingHorizontal: e.spaces.space16 }, wideTop: { marginTop: e.spaces.space16 }, headline: { marginTop: e.spaces.space16 }, bottomBar: { margin: e.spaces.space24, gap: e.spaces.space16 } }));
        },
        147669: (e, t, a) => {
            a.r(t), a.d(t, { default: () => B, preRollAdsEligibilityScreenQuery: () => P });
            a(136728);
            var r = a(324813),
                i = a(202784),
                n = a(325686),
                s = (a(585488), a(107267)),
                o = a(708852),
                l = a(154003),
                c = a(688715),
                d = a(731708),
                m = a(420412),
                p = a(392237),
                u = a(332920),
                g = a.n(u),
                h = a(711223),
                y = a(263272),
                b = a(293723),
                _ = a(323265),
                f = a(980407),
                E = a(727828),
                Z = a(535338);
            const v = g().aa732c0a,
                k = g().bf214f48,
                w = g().g88c1108,
                C = g().b2b4d592,
                x = "At least 1M video views within the last 90 days",
                T = "10,000 followers",
                P = r.Z,
                B = (e) => {
                    const t = (0, s.useHistory)(),
                        a = (0, o.D2)(),
                        { viewer: r } = (0, Z.p)(P, {}),
                        p = "/settings/monetization",
                        { verified_program_eligibility: u } = r.user_results.result || {},
                        g = u?.ad_revenue_sharing_eligibility || [],
                        B = !g.includes("verified"),
                        D = 1 === g.length && "id_verified" === g[0];
                    (0 === g.length || D || g.includes("do_not_charge") || g.includes("generic_violation") || g.includes("verified_type")) && t.push(p);
                    const S = i.useMemo(() => [z.root, a ? z.paddingWide : z.paddingNarrow], [a]),
                        R = i.useMemo(() => i.createElement(n.Z, { style: z.rightControl }, i.createElement(l.ZP, { "aria-label": w, icon: i.createElement(h.default, null), link: (0, c.ju)("https://help.x.com/using-x/creator-revenue-sharing"), type: "primaryText" })), []),
                        I = i.useCallback(() => t.goBack({ backLocation: p }), [t]),
                        L = _.ZP.isTwitterApp(),
                        q = i.useMemo(() => i.createElement(n.Z, { style: z.bottomBar }, B ? i.createElement(l.ZP, { onPress: I, type: "primaryFilled" }, k) : i.createElement(E.Z, { variant: "PreRollAdsEligibility" })), [I, B]);
                    return i.createElement(f.Z, { backButtonType: "back", backLocation: p, bottomBar: q, documentTitle: v, hideBackButton: L, onBackClick: I, rightControl: !L && R }, i.createElement(n.Z, { style: S }, i.createElement(d.ZP, { "aria-level": 2, role: "heading", size: "title4", style: z.headline, weight: "heavy" }, "You’re not yet eligible for Video Ads Revenue Sharing"), i.createElement(d.ZP, { style: z.subtext }, "Unfortunately, you don’t meet our eligibility requirements for Video Ads Revenue Sharing at this time. "), i.createElement(n.Z, { style: z.requirementsRoot }, i.createElement(n.Z, { key: C, style: z.requirement }, i.createElement(d.ZP, { style: z.requirementLabel, weight: "medium" }, C), g.includes("verified") ? i.createElement(y.default, { style: z.iconUnchecked, testID: "verifiedUnchecked" }) : i.createElement(b.default, { style: z.iconChecked, testID: "verifiedChecked" })), i.createElement(m.Z, null), i.createElement(n.Z, { key: x, style: z.requirement }, i.createElement(d.ZP, { style: z.requirementLabel, weight: "medium" }, x), g.includes("tweet_impressions") ? i.createElement(y.default, { style: z.iconUnchecked, testID: "impressionsUnchecked" }) : i.createElement(b.default, { style: z.iconChecked, testID: "impressionsChecked" })), i.createElement(m.Z, null), i.createElement(n.Z, { key: T, style: z.requirement }, i.createElement(d.ZP, { style: z.requirementLabel, weight: "medium" }, T), g.includes("followers") ? i.createElement(y.default, { style: z.iconUnchecked, testID: "followersUnchecked" }) : i.createElement(b.default, { style: z.iconChecked, testID: "followersChecked" })))));
                },
                z = p.default.create((e) => ({ root: { paddingBottom: e.spaces.space20, flexGrow: 1 }, rightControl: { alignItems: "center", flexDirection: "row", gap: e.spaces.space4 }, paddingWide: { paddingHorizontal: e.spaces.space36 }, paddingNarrow: { paddingHorizontal: e.spaces.space16 }, headline: { marginTop: e.spaces.space16 }, subtext: { marginTop: e.spaces.space16 }, requirementsRoot: { marginVertical: e.spaces.space16, backgroundColor: e.colors.gray0, padding: e.spaces.space12, borderRadius: e.borderRadii.medium, gap: e.spaces.space8 }, requirement: { flexDirection: "row", alignItems: "center" }, requirementLabel: { flex: 1, paddingEnd: 10 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 }, bottomBar: { margin: e.spaces.space24 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsSuperFollows-c6fe4ea4.8a9b25ea.js.map
