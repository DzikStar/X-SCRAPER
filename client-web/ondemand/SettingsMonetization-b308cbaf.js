"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-b308cbaf"],
    {
        309043: (e, t, a) => {
            a.d(t, { Z: () => Z });
            var r = a(904368),
                n = a(202784),
                s = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(731708),
                o = a(392237),
                m = a(332920),
                u = a.n(m);
            const p = u().ee9ea930,
                d = u().cf3b535e,
                g = r.Z,
                y = (e) => {
                    const { user: t } = e,
                        a = c()(g, t),
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
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(844685),
                o = a(731708),
                m = a(420412),
                u = a(392237),
                p = a(332920),
                d = a.n(p),
                g = a(516951),
                y = a(965245),
                Z = a(468869),
                E = a(831984);
            const _ = d().g1b8020c,
                h = d().jb13b840,
                f = d().b4f24360,
                b = r.Z,
                w = (e) => e.transaction_id,
                x = () => n.useCallback((e) => n.createElement(E.Z, { item: e, key: e.transaction_id }), []),
                v = ({ fetchNext: e, items: t }) => {
                    const a = x();
                    return n.createElement(n.Fragment, null, n.createElement(i.Z, { text: _ }), t.length > 0 ? n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 68, cacheKey: "recentAwardsList", footer: null, identityFunction: w, items: t, onNearEnd: e, renderer: a, withoutHeadroom: !0 })) : n.createElement(o.ZP, { color: "gray700", style: S.emptyState }, f));
                },
                I = ({ fetchNext: e, items: t }) => {
                    const a = x();
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { style: S.gap }, n.createElement(m.Z, null)), n.createElement(i.Z, { text: h }), n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 68, cacheKey: "awardsList", footer: null, identityFunction: w, items: t, onNearEnd: e, renderer: a, withoutHeadroom: !0 })));
                },
                z = ({ fetchNext: e, slice: t }) => {
                    const a = c()(b, t),
                        { otherItems: r, recentItems: s } = (0, Z.h9)(a),
                        l = r.length > 0;
                    return n.createElement(n.Fragment, null, n.createElement(v, { fetchNext: l ? g.Z : e, items: s }), l && n.createElement(I, { fetchNext: e, items: r }));
                },
                P = n.memo(z),
                S = u.default.create((e) => ({ header: { marginHorizontal: e.spaces.space12 }, gap: { marginVertical: e.spaces.space8 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        831984: (e, t, a) => {
            a.d(t, { Z: () => w });
            var r = a(923747),
                n = a(202784),
                s = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(952428),
                o = a(823161),
                m = a(731708),
                u = a(154003),
                p = a(392237),
                d = a(332920),
                g = a.n(d),
                y = a(412876),
                Z = a(553660);
            const E = g().efe6ef9e,
                _ = g().fbb7764b,
                h = g().e70a07b2,
                f = r.Z,
                b = ({ item: e }) => {
                    const t = c()(f, e),
                        a = t.tweet_results?.result?.rest_id,
                        r = t.sender_results?.result,
                        l = t.total_coins_worth || 0,
                        p = t.is_anonymous;
                    return n.createElement(s.Z, { role: "listitem" }, n.createElement(i.Z, { style: x.root, withInteractiveStyling: !1 }, n.createElement(s.Z, { style: x.row }, p ? n.createElement(o.default, { size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }) : "User" === r?.__typename ? n.createElement(y.Z, { size: "xLarge", user: r, withLink: !0 }) : null, n.createElement(s.Z, { style: x.column }, n.createElement(m.ZP, { size: "headline2", style: x.awardDetails, weight: "medium" }, _({ count: l })), p ? n.createElement(m.ZP, { style: x.spacing }, h) : "User" === r?.__typename ? n.createElement(Z.Z, { style: x.userName, user: r, weight: "normal", withLink: !0 }) : null)), n.createElement(s.Z, { style: x.row }, a && n.createElement(u.ZP, { link: `/twitter/status/${a}`, size: "small", style: x.spacing }, E))));
                },
                w = n.memo(b),
                x = p.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, row: { alignItems: "center", flexDirection: "row" }, column: { flexDirection: "column" }, userName: { marginHorizontal: e.spaces.space8 }, spacing: { marginStart: e.spaces.space8 }, spacingEnd: { marginEnd: e.spaces.space4 }, awardDetails: { marginStart: e.spaces.space8, marginBottom: e.spaces.space4 } }));
        },
        860747: (e, t, a) => {
            a.d(t, { Z: () => b });
            var r = a(181188),
                n = a(202784),
                s = (a(585488), a(277660)),
                l = a.n(s),
                c = a(731708),
                i = a(392237),
                o = a(332920),
                m = a.n(o),
                u = a(856151),
                p = a(443781),
                d = a(518180),
                g = a(534763),
                y = a(603e3),
                Z = a(794721);
            const E = m().j087774e,
                _ = m().df837dac,
                h = r.Z,
                f = ({ user: e }) => {
                    const { featureSwitches: t } = n.useContext(p.rC),
                        a = t.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        r = l()(h, e);
                    return a && r.award_eligible ? n.createElement(n.Fragment, null, n.createElement(g.H, { Icon: u.default, description: n.createElement(c.ZP, { color: "gray700", size: "subtext2", style: w.spacing }, n.createElement(Z.Z, { revenueType: y.AU.awards_revenue, title: _, user: r })), label: E, link: d.OB.dashboard.root })) : null;
                },
                b = n.memo(f),
                w = i.default.create((e) => ({ spacing: { marginTop: e.spaces.space4 } }));
        },
        875586: (e, t, a) => {
            a.d(t, { Z: () => h });
            var r = a(818414),
                n = a(202784),
                s = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(731708),
                o = a(392237),
                m = a(332920),
                u = a.n(m),
                p = a(603e3);
            const d = u().i14be2c6,
                g = u().c76972f0,
                y = u().c219a552,
                Z = r.Z,
                E = (e) => {
                    const { revenueType: t = p.AU.superfollows_revenue, showEarnedRevenueSinceLastPayout: a, user: r } = e,
                        l = c()(Z, r),
                        [, o] = (0, p.$)(l, t),
                        [, m] = (0, p.Hx)(l, t),
                        u = n.createElement(s.Z, { style: _.revenuePrimary }, n.createElement(i.ZP, { style: _.revenuePrimaryText, weight: "heavy" }, o), n.createElement(i.ZP, { size: "subtext2", style: _.helperText }, g)),
                        E = n.createElement(s.Z, { style: a ? _.revenueSecondary : _.revenuePrimary }, n.createElement(i.ZP, { size: "title3", style: !a && _.revenuePrimaryText, weight: "heavy" }, m), n.createElement(i.ZP, { size: "subtext2", style: _.helperText }, y));
                    return n.createElement(s.Z, { style: _.root }, n.createElement(i.ZP, { "aria-level": 3, role: "heading", size: "headline2", weight: "heavy" }, d), a && u, E);
                },
                _ = o.default.create((e) => ({ root: { backgroundColor: e.colors.gray0, padding: e.spaces.space32 }, revenuePrimary: { marginTop: e.spaces.space24 }, revenuePrimaryText: { fontSize: e.spaces.space48, lineHeight: e.spaces.space48 }, revenueSecondary: { marginTop: e.spaces.space20 }, helperText: { marginTop: e.spaces.space4 } })),
                h = n.memo(E);
        },
        794721: (e, t, a) => {
            a.d(t, { Z: () => g });
            var r = a(658156),
                n = a(202784),
                s = (a(585488), a(277660)),
                l = a.n(s),
                c = a(536606),
                i = a(332920),
                o = a.n(i),
                m = a(603e3);
            const u = o().df29646e,
                p = r.Z,
                d = (e) => {
                    const { user: t, revenueType: a = m.AU.superfollows_revenue, title: r = u } = e,
                        s = l()(p, t),
                        [i, o] = (0, m.$)(s, a),
                        [d, g] = (0, m.LF)(s),
                        y = n.useMemo(() => ({ color: "primary" }), []),
                        Z = n.useMemo(() => ({ label: `/${g}`, value: o }), [o, g]);
                    return n.createElement(c.Z, { progressBarConfig: y, statConfig: Z, title: r, valueCurrent: i, valueMax: d });
                },
                g = n.memo(d);
        },
        199213: (e, t, a) => {
            a.d(t, { Z: () => I });
            var r = a(202784),
                n = a(325686),
                s = a(844685),
                l = a(731708),
                c = a(154003),
                i = a(392237),
                o = a(332920),
                m = a.n(o),
                u = a(720816);
            const p = m().f139168e,
                d = m().ee0510c2,
                g = Object.freeze({ earnings: { link: "/settings/monetization/earnings", text: p, size: "xLarge" }, payoutHistory: { link: "/settings/monetization/payout_history", text: d } }),
                y = (e) => {
                    const { type: t } = e;
                    if (!t) return null;
                    const { link: a, size: n, text: s } = g[t];
                    return r.createElement(c.ZP, { link: a, size: n, style: E.button }, s);
                },
                Z = r.memo(y),
                E = i.default.create((e) => ({ button: { marginVertical: e.spaces.space16 } }));
            var _ = a(794721);
            const h = m().b0ac642a,
                f = m().df29646e,
                b = m().c747df1c,
                w = m().ac814a76,
                x = { pathname: u.NW.stripeSetup, state: { cameFromEarningsDashboard: !0 } },
                v = (e) => {
                    const { revenueType: t, showHelperText: a, showProgress: i, stripeStatus: o, type: m, user: u } = e;
                    return "Completed" !== o ? r.createElement(n.Z, { style: z.root }, r.createElement(s.Z, { text: f }), r.createElement(l.ZP, { color: "gray700", style: z.subtext }, w), r.createElement(c.ZP, { link: x }, b)) : r.createElement(n.Z, { style: z.root }, i && r.createElement(_.Z, { revenueType: t, user: u }), a && r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, h), r.createElement(Z, { type: m }));
                },
                I = r.memo(v),
                z = i.default.create((e) => ({ root: { padding: e.spaces.space16 }, subtext: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        933317: (e, t, a) => {
            a.d(t, { Z: () => C });
            var r = a(915814),
                n = a(202784),
                s = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(844685),
                o = a(731708),
                m = a(420412),
                u = a(392237),
                p = a(332920),
                d = a.n(p),
                g = a(965245),
                y = a(468869),
                Z = a(158163),
                E = a(952428),
                _ = a(322121),
                h = a(97882);
            const f = d().f883322d,
                b = d().ba2e82a1,
                w = Z.Z,
                x = ({ item: e }) => {
                    const t = c()(w, e),
                        a = t.stripe_transaction_id,
                        r = t.amount_paid_out_in_cents,
                        l = t.created_at_msec,
                        i = r ? (0, h.x)({ amount: r, formatter: 100 }) : n.createElement(_.default, { testID: "icon-minus" });
                    return n.createElement(s.Z, { role: "listitem" }, n.createElement(E.Z, { style: I.root }, n.createElement(s.Z, { style: I.details }, n.createElement(o.ZP, { color: "gray700", weight: "bold" }, b(new Date(l))), n.createElement(o.ZP, { color: "gray700" }, f({ transactionId: a }))), n.createElement(o.ZP, { color: "green500", weight: "bold" }, i)));
                },
                v = n.memo(x),
                I = u.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, flexWrap: "wrap" }, details: { marginEnd: e.spaces.space8, flexBasis: "80%" } })),
                z = d().d55e017a,
                P = d().jb13b840,
                S = r.Z,
                D = (e) => e.__id,
                k = (e) => n.createElement(v, { item: e, key: e.__id }),
                H = ({ emptyStateDescription: e, items: t }) => n.createElement(n.Fragment, null, n.createElement(i.Z, { text: z }), t.length > 0 ? n.createElement(s.Z, { role: "list" }, t.map(k)) : n.createElement(o.ZP, { color: "gray700", style: F.emptyState }, e)),
                T = ({ fetchNext: e, items: t }) => n.createElement(n.Fragment, null, n.createElement(s.Z, { style: F.gap }, n.createElement(m.Z, null)), n.createElement(i.Z, { text: P }), n.createElement(s.Z, { role: "list" }, n.createElement(g.Z, { assumedItemHeight: 64, cacheKey: "payoutsList", footer: null, identityFunction: D, items: t, onNearEnd: e, renderer: k, withoutHeadroom: !0 }))),
                N = ({ emptyStateDescription: e, fetchNext: t, slice: a }) => {
                    const r = c()(S, a),
                        { otherItems: s, recentItems: l } = (0, y.yD)(r);
                    return n.createElement(n.Fragment, null, n.createElement(H, { emptyStateDescription: e, items: l }), s.length > 0 && n.createElement(T, { fetchNext: t, items: s }));
                },
                C = n.memo(N),
                F = u.default.create((e) => ({ header: { marginHorizontal: e.spaces.space12 }, gap: { marginVertical: e.spaces.space8 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        839681: (e, t, a) => {
            a.d(t, { Z: () => z });
            var r = a(564018),
                n = a(202784),
                s = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(844685),
                o = a(731708),
                m = a(420412),
                u = a(392237),
                p = a(332920),
                d = a.n(p),
                g = a(516951),
                y = a(965245),
                Z = a(468869),
                E = a(822441);
            const _ = d().g1b8020c,
                h = d().jb13b840,
                f = r.Z,
                b = (e) => e.__id,
                w = (e) => n.useCallback((t) => n.createElement(E.Z, { item: t, key: t.__id, type: e }), [e]),
                x = ({ emptyStateDescription: e, fetchNext: t, items: a, type: r }) => {
                    const l = w(r);
                    return n.createElement(n.Fragment, null, n.createElement(i.Z, { text: _ }), a.length > 0 ? n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 64, cacheKey: "recentSubscribersList", footer: null, identityFunction: b, items: a, onNearEnd: t, renderer: l, withoutHeadroom: !0 })) : n.createElement(o.ZP, { color: "gray700", style: P.emptyState }, e));
                },
                v = ({ fetchNext: e, items: t, type: a }) => {
                    const r = w(a);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { style: P.gap }, n.createElement(m.Z, null)), n.createElement(i.Z, { text: h }), n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 64, cacheKey: "subscribersList", footer: null, identityFunction: b, items: t, onNearEnd: e, renderer: r, withoutHeadroom: !0 })));
                },
                I = ({ emptyStateDescription: e, fetchNext: t, slice: a, type: r }) => {
                    const s = c()(f, a),
                        { otherItems: l, recentItems: i } = (0, Z._5)(s),
                        o = l.length > 0;
                    return n.createElement(n.Fragment, null, n.createElement(x, { emptyStateDescription: e, fetchNext: o ? g.Z : t, items: i, type: r }), o && n.createElement(v, { fetchNext: t, items: l, type: r }));
                },
                z = n.memo(I),
                P = u.default.create((e) => ({ header: { marginHorizontal: e.spaces.space12 }, gap: { marginVertical: e.spaces.space8 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        822441: (e, t, a) => {
            a.d(t, { Z: () => w });
            var r = a(469363),
                n = a(202784),
                s = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(952428),
                o = a(731708),
                m = a(392237),
                u = a(332920),
                p = a.n(u),
                d = a(322121),
                g = a(656166),
                y = a(97882),
                Z = a(412876),
                E = a(553660);
            const _ = r.Z,
                h = { [g.x.InitialSale]: "new_subscriptions", [g.x.Renewal]: "renewals" },
                f = p().a23e724a,
                b = ({ item: e, type: t }) => {
                    const a = c()(_, e),
                        r = h[t],
                        l = a.rest_id,
                        m = a.price_in_hundred,
                        u = a.consumer_results.result,
                        p = `/settings/monetization/subscriptions/transactions/${r}/${l}`,
                        g = m ? (0, y.x)({ amount: m, formatter: 100 }) : n.createElement(d.default, { testID: "icon-minus" });
                    return u && n.createElement(s.Z, { role: "listitem" }, n.createElement(i.Z, { link: p, style: x.root }, "User" === u.__typename ? n.createElement(s.Z, { style: x.user }, n.createElement(Z.Z, { size: "xLarge", user: u }), n.createElement(E.Z, { style: x.userName, user: u, withStackedLayout: !0 })) : n.createElement(o.ZP, null, f), n.createElement(o.ZP, { color: "gray700", style: x.paymentAmount, weight: "bold" }, g)));
                },
                w = n.memo(b),
                x = m.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, user: { alignItems: "center", flexDirection: "row", flexShrink: 1 }, userName: { marginHorizontal: e.spaces.space8 }, paymentAmount: { minWidth: e.spaces.space48 } }));
        },
        253518: (e, t, a) => {
            a.d(t, { Z: () => f });
            var r = a(228820),
                n = a(202784),
                s = (a(585488), a(277660)),
                l = a.n(s),
                c = a(731708),
                i = a(392237),
                o = a(332920),
                m = a.n(o),
                u = a(491831),
                p = a(518180),
                d = a(720816),
                g = a(534763),
                y = a(794721);
            const Z = m().d7b51c68,
                E = m().df837dac,
                _ = r.Z,
                h = (e) => {
                    const { description: t, isActiveCreator: a, user: r } = e,
                        s = l()(_, r);
                    return n.createElement(g.H, { Icon: u.default, description: t || (a && n.createElement(c.ZP, { color: "gray700", size: "subtext2", style: b.spacing }, n.createElement(y.Z, { title: E, user: s }))), iconColor: "plum500", label: Z, link: a ? p.Vt.dashboard.root : d.Jz });
                },
                f = n.memo(h),
                b = i.default.create((e) => ({ spacing: { marginTop: e.spaces.space4 } }));
        },
        371445: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(202784),
                n = a(325686),
                s = a(731708),
                l = a(420412),
                c = a(392237),
                i = a(322121);
            const o = ({ header: e, text: t }) => r.createElement(r.Fragment, null, r.createElement(n.Z, { style: u.info }, r.createElement(s.ZP, { "aria-level": 3, role: "heading", size: "subtext1", style: u.header }, e), r.createElement(s.ZP, { size: "headline2" }, t || r.createElement(i.default, { testID: "icon-minus" }))), r.createElement(l.Z, null)),
                m = r.memo(o),
                u = c.default.create((e) => ({ info: { paddingVertical: e.spaces.space12 }, header: { marginBottom: e.spaces.space4 } }));
        },
        468869: (e, t, a) => {
            a.d(t, { _5: () => p, h9: () => g, yD: () => Z });
            var r = a(496790),
                n = a(58367),
                s = a(483169),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(662678),
                o = a(566220);
            const m = s.Z,
                u = () => (0, o.R)()().getTime() - 2592e6,
                p = (e) => {
                    const t = c()(m, e),
                        a = u(),
                        [r, n] = (0, i.Z)(t.items, (e) => e.created_at_msec >= a);
                    return { recentItems: r, otherItems: n };
                },
                d = n.Z,
                g = (e) => {
                    const t = c()(d, e),
                        a = u(),
                        [r, n] = (0, i.Z)(t.items, (e) => new Date(e.timestamp_millis).getTime() >= a);
                    return { recentItems: r, otherItems: n };
                },
                y = r.Z,
                Z = (e) => {
                    const t = c()(y, e),
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
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(97882);
            const o = { superfollows_revenue: "superfollows_revenue", awards_revenue: "awards_revenue", total_revenue: "total_revenue" },
                m = (e, t = o.superfollows_revenue) => {
                    const a = c()(s.Z, e),
                        r = a[t]?.revenue_since_last_payout_in_cents ?? 0;
                    return [r, (0, i.x)({ amount: r, formatter: 100 })];
                },
                u = (e) => {
                    const t = c()(n.Z, e).creator_payout_threshold.payout_minimum_threshold_in_usd_cents ?? 0;
                    return [t, (0, i.x)({ amount: t, formatter: 100 })];
                },
                p = (e, t = o.superfollows_revenue) => {
                    const a = c()(r.Z, e),
                        n = a[t]?.all_time_revenue_in_cents ?? 0;
                    return [n, (0, i.x)({ amount: n, formatter: 100 })];
                };
        },
        534763: (e, t, a) => {
            a.d(t, { H: () => o, b: () => m });
            var r = a(807896),
                n = a(202784),
                s = a(392237),
                l = a(779610);
            const c = (e) => {
                    const { Icon: t, iconColor: a, testID: r } = e;
                    return n.createElement(t, { style: a ? { color: s.default.theme.colors[a] } : i.thumbnail, testID: r });
                },
                i = s.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function o(e) {
                const { Icon: t, iconColor: a, testID: s, ...i } = e;
                return n.createElement(l.Z, (0, r.Z)({}, i, { thumbnail: n.createElement(c, { Icon: t, iconColor: a, testID: s }), thumbnailSize: "large" }));
            }
            function m(e) {
                const { link: t, ...a } = e;
                return n.createElement(l.Z, (0, r.Z)({}, a, { link: { external: !0, pathname: e.link } }));
            }
        },
        507651: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(807896),
                n = a(202784),
                s = a(107267),
                l = a(403556),
                c = a(791632);
            const i = (e) => {
                    const t = (0, s.useHistory)();
                    return n.createElement(l.Z, (0, r.Z)({}, e, { isCompact: (0, c.HD)(t) }));
                },
                o = n.memo(i);
        },
        856522: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(807896),
                n = a(9410),
                s = a(202784),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(23134);
            function o({ user: e, ...t }) {
                const a = c()(n.Z, e),
                    l = s.useMemo(() => (a ? { id_str: a.rest_id, screen_name: a.legacy?.screen_name || "", name: a.legacy?.name || "", follow_request_sent: a.legacy?.follow_request_sent || !1, protected: a.privacy?.protected || !1, following: a.relationship_perspectives?.following || !1, followed_by: a.relationship_perspectives?.followed_by || !1, super_following: a.super_following || void 0, super_follow_eligible: a.super_follow_eligible || void 0, super_followed_by: a.super_followed_by || void 0, blocking: a.relationship_perspectives?.blocking || void 0, highlightedLabel: a.affiliates_highlighted_label?.label ? { userLabelType: a.affiliates_highlighted_label.label.user_label_type || void 0 } : void 0 } : void 0), [a]);
                return s.createElement(i.C, (0, r.Z)({}, t, { isRelay: !0, user: l, userId: a?.rest_id ?? "" }));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-b308cbaf.605a123a.js.map
