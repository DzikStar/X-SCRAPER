"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-cf3bcfae"],
    {
        309043: (e, t, a) => {
            a.d(t, { Z: () => Z });
            var r = a(904368),
                n = a(202784),
                s = a(325686),
                c = (a(585488), a(277660)),
                l = a.n(c),
                i = a(731708),
                o = a(392237),
                m = a(111677),
                u = a.n(m);
            const p = u().ee9ea930,
                d = u().cf3b535e,
                g = r.Z,
                y = (e) => {
                    const { user: t } = e,
                        a = l()(g, t),
                        r = a.awards_revenue?.revenue_since_last_payout_in_diamonds;
                    return n.createElement(s.Z, { style: E.diamondSection }, n.createElement(s.Z, { style: E.diamondDetails }, n.createElement(i.ZP, { weight: "bold" }, p), n.createElement(i.ZP, { weight: "bold" }, r)), n.createElement(i.ZP, { color: "gray700", size: "subtext1", style: E.topSpacing }, d));
                },
                Z = n.memo(y),
                E = o.default.create((e) => ({ button: { marginTop: e.spaces.space16, marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" }, diamondDetails: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, diamondSection: { padding: e.spaces.space16 }, topSpacing: { marginTop: e.spaces.space8 } }));
        },
        315984: (e, t, a) => {
            a.d(t, { Z: () => P });
            var r = a(228715),
                n = a(202784),
                s = a(325686),
                c = (a(585488), a(277660)),
                l = a.n(c),
                i = a(844685),
                o = a(731708),
                m = a(420412),
                u = a(392237),
                p = a(111677),
                d = a.n(p),
                g = a(516951),
                y = a(965245),
                Z = a(468869),
                E = a(831984);
            const h = d().g1b8020c,
                f = d().jb13b840,
                _ = d().b4f24360,
                x = r.Z,
                b = (e) => e.transaction_id,
                w = () => n.useCallback((e) => n.createElement(E.Z, { item: e, key: e.transaction_id }), []),
                v = ({ fetchNext: e, items: t }) => {
                    const a = w();
                    return n.createElement(n.Fragment, null, n.createElement(i.Z, { text: h }), t.length > 0 ? n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 68, cacheKey: "recentAwardsList", footer: null, identityFunction: b, items: t, onNearEnd: e, renderer: a, withoutHeadroom: !0 })) : n.createElement(o.ZP, { color: "gray700", style: S.emptyState }, _));
                },
                I = ({ fetchNext: e, items: t }) => {
                    const a = w();
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { style: S.gap }, n.createElement(m.Z, null)), n.createElement(i.Z, { text: f }), n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 68, cacheKey: "awardsList", footer: null, identityFunction: b, items: t, onNearEnd: e, renderer: a, withoutHeadroom: !0 })));
                },
                z = ({ fetchNext: e, slice: t }) => {
                    const a = l()(x, t),
                        { otherItems: r, recentItems: s } = (0, Z.h9)(a),
                        c = r.length > 0;
                    return n.createElement(n.Fragment, null, n.createElement(v, { fetchNext: c ? g.Z : e, items: s }), c && n.createElement(I, { fetchNext: e, items: r }));
                },
                P = n.memo(z),
                S = u.default.create((e) => ({ header: { marginHorizontal: e.spaces.space12 }, gap: { marginVertical: e.spaces.space8 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        831984: (e, t, a) => {
            a.d(t, { Z: () => b });
            var r = a(923747),
                n = a(202784),
                s = a(325686),
                c = (a(585488), a(277660)),
                l = a.n(c),
                i = a(952428),
                o = a(823161),
                m = a(731708),
                u = a(154003),
                p = a(392237),
                d = a(111677),
                g = a.n(d),
                y = a(412876),
                Z = a(553660);
            const E = g().efe6ef9e,
                h = g().fbb7764b,
                f = g().e70a07b2,
                _ = r.Z,
                x = ({ item: e }) => {
                    const t = l()(_, e),
                        a = t.tweet_results?.result?.rest_id,
                        r = t.sender_results?.result,
                        c = t.total_coins_worth || 0,
                        p = t.is_anonymous;
                    return n.createElement(s.Z, { role: "listitem" }, n.createElement(i.Z, { style: w.root, withInteractiveStyling: !1 }, n.createElement(s.Z, { style: w.row }, p ? n.createElement(o.default, { size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }) : "User" === r?.__typename ? n.createElement(y.Z, { size: "xLarge", user: r, withLink: !0 }) : null, n.createElement(s.Z, { style: w.column }, n.createElement(m.ZP, { size: "headline2", style: w.awardDetails, weight: "medium" }, h({ count: c })), p ? n.createElement(m.ZP, { style: w.spacing }, f) : "User" === r?.__typename ? n.createElement(Z.Z, { style: w.userName, user: r, weight: "normal", withLink: !0 }) : null)), n.createElement(s.Z, { style: w.row }, a && n.createElement(u.ZP, { link: `/twitter/status/${a}`, size: "small", style: w.spacing }, E))));
                },
                b = n.memo(x),
                w = p.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, row: { alignItems: "center", flexDirection: "row" }, column: { flexDirection: "column" }, userName: { marginHorizontal: e.spaces.space8 }, spacing: { marginStart: e.spaces.space8 }, spacingEnd: { marginEnd: e.spaces.space4 }, awardDetails: { marginStart: e.spaces.space8, marginBottom: e.spaces.space4 } }));
        },
        860747: (e, t, a) => {
            a.d(t, { Z: () => x });
            var r = a(181188),
                n = a(202784),
                s = (a(585488), a(277660)),
                c = a.n(s),
                l = a(731708),
                i = a(392237),
                o = a(111677),
                m = a.n(o),
                u = a(856151),
                p = a(443781),
                d = a(518180),
                g = a(534763),
                y = a(603e3),
                Z = a(794721);
            const E = m().j087774e,
                h = m().df837dac,
                f = r.Z,
                _ = ({ user: e }) => {
                    const { featureSwitches: t } = n.useContext(p.rC),
                        a = t.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        r = c()(f, e);
                    return a && r.award_eligible ? n.createElement(n.Fragment, null, n.createElement(g.H, { Icon: u.default, description: n.createElement(l.ZP, { color: "gray700", size: "subtext2", style: b.spacing }, n.createElement(Z.Z, { revenueType: y.AU.awards_revenue, title: h, user: r })), label: E, link: d.OB.dashboard.root })) : null;
                },
                x = n.memo(_),
                b = i.default.create((e) => ({ spacing: { marginTop: e.spaces.space4 } }));
        },
        875586: (e, t, a) => {
            a.d(t, { Z: () => f });
            var r = a(818414),
                n = a(202784),
                s = a(325686),
                c = (a(585488), a(277660)),
                l = a.n(c),
                i = a(731708),
                o = a(392237),
                m = a(111677),
                u = a.n(m),
                p = a(603e3);
            const d = u().i14be2c6,
                g = u().c76972f0,
                y = u().c219a552,
                Z = r.Z,
                E = (e) => {
                    const { revenueType: t = p.AU.superfollows_revenue, showEarnedRevenueSinceLastPayout: a, user: r } = e,
                        c = l()(Z, r),
                        [, o] = (0, p.$)(c, t),
                        [, m] = (0, p.Hx)(c, t),
                        u = n.createElement(s.Z, { style: h.revenuePrimary }, n.createElement(i.ZP, { style: h.revenuePrimaryText, weight: "heavy" }, o), n.createElement(i.ZP, { size: "subtext2", style: h.helperText }, g)),
                        E = n.createElement(s.Z, { style: a ? h.revenueSecondary : h.revenuePrimary }, n.createElement(i.ZP, { size: "title3", style: !a && h.revenuePrimaryText, weight: "heavy" }, m), n.createElement(i.ZP, { size: "subtext2", style: h.helperText }, y));
                    return n.createElement(s.Z, { style: h.root }, n.createElement(i.ZP, { "aria-level": 3, role: "heading", size: "headline2", weight: "heavy" }, d), a && u, E);
                },
                h = o.default.create((e) => ({ root: { backgroundColor: e.colors.gray0, padding: e.spaces.space32 }, revenuePrimary: { marginTop: e.spaces.space24 }, revenuePrimaryText: { fontSize: e.spaces.space48, lineHeight: e.spaces.space48 }, revenueSecondary: { marginTop: e.spaces.space20 }, helperText: { marginTop: e.spaces.space4 } })),
                f = n.memo(E);
        },
        794721: (e, t, a) => {
            a.d(t, { Z: () => g });
            var r = a(658156),
                n = a(202784),
                s = (a(585488), a(277660)),
                c = a.n(s),
                l = a(536606),
                i = a(111677),
                o = a.n(i),
                m = a(603e3);
            const u = o().df29646e,
                p = r.Z,
                d = (e) => {
                    const { user: t, revenueType: a = m.AU.superfollows_revenue, title: r = u } = e,
                        s = c()(p, t),
                        [i, o] = (0, m.$)(s, a),
                        [d, g] = (0, m.LF)(s),
                        y = n.useMemo(() => ({ color: "primary" }), []),
                        Z = n.useMemo(() => ({ label: `/${g}`, value: o }), [o, g]);
                    return n.createElement(l.Z, { progressBarConfig: y, statConfig: Z, title: r, valueCurrent: i, valueMax: d });
                },
                g = n.memo(d);
        },
        199213: (e, t, a) => {
            a.d(t, { Z: () => I });
            var r = a(202784),
                n = a(325686),
                s = a(844685),
                c = a(731708),
                l = a(154003),
                i = a(392237),
                o = a(111677),
                m = a.n(o),
                u = a(720816);
            const p = m().f139168e,
                d = m().ee0510c2,
                g = Object.freeze({ earnings: { link: "/settings/monetization/earnings", text: p, size: "xLarge" }, payoutHistory: { link: "/settings/monetization/payout_history", text: d } }),
                y = (e) => {
                    const { type: t } = e;
                    if (!t) return null;
                    const { link: a, size: n, text: s } = g[t];
                    return r.createElement(l.ZP, { link: a, size: n, style: E.button }, s);
                },
                Z = r.memo(y),
                E = i.default.create((e) => ({ button: { marginVertical: e.spaces.space16 } }));
            var h = a(794721);
            const f = m().b0ac642a,
                _ = m().df29646e,
                x = m().c747df1c,
                b = m().ac814a76,
                w = { pathname: u.NW.stripeSetup, state: { cameFromEarningsDashboard: !0 } },
                v = (e) => {
                    const { revenueType: t, showHelperText: a, showProgress: i, stripeStatus: o, type: m, user: u } = e;
                    return "Completed" !== o ? r.createElement(n.Z, { style: z.root }, r.createElement(s.Z, { text: _ }), r.createElement(c.ZP, { color: "gray700", style: z.subtext }, b), r.createElement(l.ZP, { link: w }, x)) : r.createElement(n.Z, { style: z.root }, i && r.createElement(h.Z, { revenueType: t, user: u }), a && r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, f), r.createElement(Z, { type: m }));
                },
                I = r.memo(v),
                z = i.default.create((e) => ({ root: { padding: e.spaces.space16 }, subtext: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        933317: (e, t, a) => {
            a.d(t, { Z: () => C });
            var r = a(915814),
                n = a(202784),
                s = a(325686),
                c = (a(585488), a(277660)),
                l = a.n(c),
                i = a(844685),
                o = a(731708),
                m = a(420412),
                u = a(392237),
                p = a(111677),
                d = a.n(p),
                g = a(965245),
                y = a(468869),
                Z = a(158163),
                E = a(952428),
                h = a(322121),
                f = a(97882);
            const _ = d().f883322d,
                x = d().ba2e82a1,
                b = Z.Z,
                w = ({ item: e }) => {
                    const t = l()(b, e),
                        a = t.stripe_transaction_id,
                        r = t.amount_paid_out_in_cents,
                        c = t.created_at_msec,
                        i = r ? (0, f.x)({ amount: r, formatter: 100 }) : n.createElement(h.default, { testID: "icon-minus" });
                    return n.createElement(s.Z, { role: "listitem" }, n.createElement(E.Z, { style: I.root }, n.createElement(s.Z, { style: I.details }, n.createElement(o.ZP, { color: "gray700", weight: "bold" }, x(new Date(c))), n.createElement(o.ZP, { color: "gray700" }, _({ transactionId: a }))), n.createElement(o.ZP, { color: "green500", weight: "bold" }, i)));
                },
                v = n.memo(w),
                I = u.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, flexWrap: "wrap" }, details: { marginEnd: e.spaces.space8, flexBasis: "80%" } })),
                z = d().d55e017a,
                P = d().jb13b840,
                S = r.Z,
                D = (e) => e.__id,
                H = (e) => n.createElement(v, { item: e, key: e.__id }),
                k = ({ emptyStateDescription: e, items: t }) => n.createElement(n.Fragment, null, n.createElement(i.Z, { text: z }), t.length > 0 ? n.createElement(s.Z, { role: "list" }, t.map(H)) : n.createElement(o.ZP, { color: "gray700", style: F.emptyState }, e)),
                N = ({ fetchNext: e, items: t }) => n.createElement(n.Fragment, null, n.createElement(s.Z, { style: F.gap }, n.createElement(m.Z, null)), n.createElement(i.Z, { text: P }), n.createElement(s.Z, { role: "list" }, n.createElement(g.Z, { assumedItemHeight: 64, cacheKey: "payoutsList", footer: null, identityFunction: D, items: t, onNearEnd: e, renderer: H, withoutHeadroom: !0 }))),
                T = ({ emptyStateDescription: e, fetchNext: t, slice: a }) => {
                    const r = l()(S, a),
                        { otherItems: s, recentItems: c } = (0, y.yD)(r);
                    return n.createElement(n.Fragment, null, n.createElement(k, { emptyStateDescription: e, items: c }), s.length > 0 && n.createElement(N, { fetchNext: t, items: s }));
                },
                C = n.memo(T),
                F = u.default.create((e) => ({ header: { marginHorizontal: e.spaces.space12 }, gap: { marginVertical: e.spaces.space8 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        839681: (e, t, a) => {
            a.d(t, { Z: () => z });
            var r = a(564018),
                n = a(202784),
                s = a(325686),
                c = (a(585488), a(277660)),
                l = a.n(c),
                i = a(844685),
                o = a(731708),
                m = a(420412),
                u = a(392237),
                p = a(111677),
                d = a.n(p),
                g = a(516951),
                y = a(965245),
                Z = a(468869),
                E = a(822441);
            const h = d().g1b8020c,
                f = d().jb13b840,
                _ = r.Z,
                x = (e) => e.__id,
                b = (e) => n.useCallback((t) => n.createElement(E.Z, { item: t, key: t.__id, type: e }), [e]),
                w = ({ emptyStateDescription: e, fetchNext: t, items: a, type: r }) => {
                    const c = b(r);
                    return n.createElement(n.Fragment, null, n.createElement(i.Z, { text: h }), a.length > 0 ? n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 64, cacheKey: "recentSubscribersList", footer: null, identityFunction: x, items: a, onNearEnd: t, renderer: c, withoutHeadroom: !0 })) : n.createElement(o.ZP, { color: "gray700", style: P.emptyState }, e));
                },
                v = ({ fetchNext: e, items: t, type: a }) => {
                    const r = b(a);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { style: P.gap }, n.createElement(m.Z, null)), n.createElement(i.Z, { text: f }), n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 64, cacheKey: "subscribersList", footer: null, identityFunction: x, items: t, onNearEnd: e, renderer: r, withoutHeadroom: !0 })));
                },
                I = ({ emptyStateDescription: e, fetchNext: t, slice: a, type: r }) => {
                    const s = l()(_, a),
                        { otherItems: c, recentItems: i } = (0, Z._5)(s),
                        o = c.length > 0;
                    return n.createElement(n.Fragment, null, n.createElement(w, { emptyStateDescription: e, fetchNext: o ? g.Z : t, items: i, type: r }), o && n.createElement(v, { fetchNext: t, items: c, type: r }));
                },
                z = n.memo(I),
                P = u.default.create((e) => ({ header: { marginHorizontal: e.spaces.space12 }, gap: { marginVertical: e.spaces.space8 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        822441: (e, t, a) => {
            a.d(t, { Z: () => b });
            var r = a(469363),
                n = a(202784),
                s = a(325686),
                c = (a(585488), a(277660)),
                l = a.n(c),
                i = a(952428),
                o = a(731708),
                m = a(392237),
                u = a(111677),
                p = a.n(u),
                d = a(322121),
                g = a(656166),
                y = a(97882),
                Z = a(412876),
                E = a(553660);
            const h = r.Z,
                f = { [g.x.InitialSale]: "new_subscriptions", [g.x.Renewal]: "renewals" },
                _ = p().a23e724a,
                x = ({ item: e, type: t }) => {
                    const a = l()(h, e),
                        r = f[t],
                        c = a.rest_id,
                        m = a.price_in_hundred,
                        u = a.consumer_results.result,
                        p = `/settings/monetization/subscriptions/transactions/${r}/${c}`,
                        g = m ? (0, y.x)({ amount: m, formatter: 100 }) : n.createElement(d.default, { testID: "icon-minus" });
                    return u && n.createElement(s.Z, { role: "listitem" }, n.createElement(i.Z, { link: p, style: w.root }, "User" === u.__typename ? n.createElement(s.Z, { style: w.user }, n.createElement(Z.Z, { size: "xLarge", user: u }), n.createElement(E.Z, { style: w.userName, user: u, withStackedLayout: !0 })) : n.createElement(o.ZP, null, _), n.createElement(o.ZP, { color: "gray700", style: w.paymentAmount, weight: "bold" }, g)));
                },
                b = n.memo(x),
                w = m.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, user: { alignItems: "center", flexDirection: "row", flexShrink: 1 }, userName: { marginHorizontal: e.spaces.space8 }, paymentAmount: { minWidth: e.spaces.space48 } }));
        },
        253518: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var r = a(228820),
                n = a(202784),
                s = (a(585488), a(277660)),
                c = a.n(s),
                l = a(731708),
                i = a(392237),
                o = a(111677),
                m = a.n(o),
                u = a(491831),
                p = a(518180),
                d = a(720816),
                g = a(534763),
                y = a(794721);
            const Z = m().d7b51c68,
                E = m().df837dac,
                h = r.Z,
                f = (e) => {
                    const { description: t, isActiveCreator: a, user: r } = e,
                        s = c()(h, r);
                    return n.createElement(g.H, { Icon: u.default, description: t || (a && n.createElement(l.ZP, { color: "gray700", size: "subtext2", style: x.spacing }, n.createElement(y.Z, { title: E, user: s }))), iconColor: "plum500", label: Z, link: a ? p.Vt.dashboard.root : d.Jz });
                },
                _ = n.memo(f),
                x = i.default.create((e) => ({ spacing: { marginTop: e.spaces.space4 } }));
        },
        371445: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(202784),
                n = a(325686),
                s = a(731708),
                c = a(420412),
                l = a(392237),
                i = a(322121);
            const o = ({ header: e, text: t }) => r.createElement(r.Fragment, null, r.createElement(n.Z, { style: u.info }, r.createElement(s.ZP, { "aria-level": 3, role: "heading", size: "subtext1", style: u.header }, e), r.createElement(s.ZP, { size: "headline2" }, t || r.createElement(i.default, { testID: "icon-minus" }))), r.createElement(c.Z, null)),
                m = r.memo(o),
                u = l.default.create((e) => ({ info: { paddingVertical: e.spaces.space12 }, header: { marginBottom: e.spaces.space4 } }));
        },
        468869: (e, t, a) => {
            a.d(t, { _5: () => p, h9: () => g, yD: () => Z });
            var r = a(496790),
                n = a(58367),
                s = a(483169),
                c = (a(585488), a(277660)),
                l = a.n(c),
                i = a(662678),
                o = a(566220);
            const m = s.Z,
                u = () => (0, o.R)()().getTime() - 2592e6,
                p = (e) => {
                    const t = l()(m, e),
                        a = u(),
                        [r, n] = (0, i.Z)(t.items, (e) => e.created_at_msec >= a);
                    return { recentItems: r, otherItems: n };
                },
                d = n.Z,
                g = (e) => {
                    const t = l()(d, e),
                        a = u(),
                        [r, n] = (0, i.Z)(t.items, (e) => new Date(e.timestamp_millis).getTime() >= a);
                    return { recentItems: r, otherItems: n };
                },
                y = r.Z,
                Z = (e) => {
                    const t = l()(y, e),
                        a = (0, o.R)()(),
                        r = new Date(a.getFullYear(), a.getMonth(), 1).getTime(),
                        [n, s] = (0, i.Z)(t.items, (e) => e.created_at_msec >= r);
                    return { recentItems: n, otherItems: s };
                };
        },
        603e3: (e, t, a) => {
            a.d(t, { $: () => m, AU: () => o, Hx: () => p, LF: () => u });
            var r = a(689438),
                n = a(551652),
                s = a(737722),
                c = (a(585488), a(277660)),
                l = a.n(c),
                i = a(97882);
            const o = { superfollows_revenue: "superfollows_revenue", awards_revenue: "awards_revenue", total_revenue: "total_revenue" },
                m = (e, t = o.superfollows_revenue) => {
                    const a = l()(s.Z, e),
                        r = a[t]?.revenue_since_last_payout_in_cents ?? 0;
                    return [r, (0, i.x)({ amount: r, formatter: 100 })];
                },
                u = (e) => {
                    const t = l()(n.Z, e).creator_payout_threshold.payout_minimum_threshold_in_usd_cents ?? 0;
                    return [t, (0, i.x)({ amount: t, formatter: 100 })];
                },
                p = (e, t = o.superfollows_revenue) => {
                    const a = l()(r.Z, e),
                        n = a[t]?.all_time_revenue_in_cents ?? 0;
                    return [n, (0, i.x)({ amount: n, formatter: 100 })];
                };
        },
        534763: (e, t, a) => {
            a.d(t, { H: () => o, b: () => m });
            var r = a(807896),
                n = a(202784),
                s = a(392237),
                c = a(779610);
            const l = (e) => {
                    const { Icon: t, iconColor: a, testID: r } = e;
                    return n.createElement(t, { style: a ? { color: s.default.theme.colors[a] } : i.thumbnail, testID: r });
                },
                i = s.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function o(e) {
                const { Icon: t, iconColor: a, testID: s, ...i } = e;
                return n.createElement(c.Z, (0, r.Z)({}, i, { thumbnail: n.createElement(l, { Icon: t, iconColor: a, testID: s }), thumbnailSize: "large" }));
            }
            function m(e) {
                const { link: t, ...a } = e;
                return n.createElement(c.Z, (0, r.Z)({}, a, { link: { external: !0, pathname: e.link } }));
            }
        },
        507651: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(807896),
                n = a(202784),
                s = a(107267),
                c = a(403556),
                l = a(791632);
            const i = (e) => {
                    const t = (0, s.useHistory)();
                    return n.createElement(c.Z, (0, r.Z)({}, e, { isCompact: (0, l.HD)(t) }));
                },
                o = n.memo(i);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-cf3bcfae.b2ad550a.js.map
