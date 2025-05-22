"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-b308cbaf"],
    {
        309043: (e, t, r) => {
            r.d(t, { Z: () => Z });
            var a = r(904368),
                n = r(202784),
                s = r(325686),
                l = (r(585488), r(277660)),
                c = r.n(l),
                i = r(731708),
                o = r(392237),
                m = r(332920),
                u = r.n(m);
            const p = u().ee9ea930,
                d = u().cf3b535e,
                g = a.Z,
                y = (e) => {
                    const { user: t } = e,
                        r = c()(g, t),
                        a = r.awards_revenue?.revenue_since_last_payout_in_diamonds;
                    return n.createElement(s.Z, { style: E.diamondSection }, n.createElement(s.Z, { style: E.diamondDetails }, n.createElement(i.ZP, { weight: "bold" }, p), n.createElement(i.ZP, { weight: "bold" }, a)), n.createElement(i.ZP, { color: "gray700", size: "subtext1", style: E.topSpacing }, d));
                },
                Z = n.memo(y),
                E = o.default.create((e) => ({ button: { marginTop: e.spaces.space16, marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" }, diamondDetails: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, diamondSection: { padding: e.spaces.space16 }, topSpacing: { marginTop: e.spaces.space8 } }));
        },
        315984: (e, t, r) => {
            r.d(t, { Z: () => P });
            var a = r(228715),
                n = r(202784),
                s = r(325686),
                l = (r(585488), r(277660)),
                c = r.n(l),
                i = r(844685),
                o = r(731708),
                m = r(420412),
                u = r(392237),
                p = r(332920),
                d = r.n(p),
                g = r(516951),
                y = r(965245),
                Z = r(468869),
                E = r(831984);
            const _ = d().g1b8020c,
                h = d().jb13b840,
                f = d().b4f24360,
                b = a.Z,
                w = (e) => e.transaction_id,
                x = () => n.useCallback((e) => n.createElement(E.Z, { item: e, key: e.transaction_id }), []),
                v = ({ fetchNext: e, items: t }) => {
                    const r = x();
                    return n.createElement(n.Fragment, null, n.createElement(i.Z, { text: _ }), t.length > 0 ? n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 68, cacheKey: "recentAwardsList", footer: null, identityFunction: w, items: t, onNearEnd: e, renderer: r, withoutHeadroom: !0 })) : n.createElement(o.ZP, { color: "gray700", style: S.emptyState }, f));
                },
                I = ({ fetchNext: e, items: t }) => {
                    const r = x();
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { style: S.gap }, n.createElement(m.Z, null)), n.createElement(i.Z, { text: h }), n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 68, cacheKey: "awardsList", footer: null, identityFunction: w, items: t, onNearEnd: e, renderer: r, withoutHeadroom: !0 })));
                },
                z = ({ fetchNext: e, slice: t }) => {
                    const r = c()(b, t),
                        { otherItems: a, recentItems: s } = (0, Z.h9)(r),
                        l = a.length > 0;
                    return n.createElement(n.Fragment, null, n.createElement(v, { fetchNext: l ? g.Z : e, items: s }), l && n.createElement(I, { fetchNext: e, items: a }));
                },
                P = n.memo(z),
                S = u.default.create((e) => ({ header: { marginHorizontal: e.spaces.space12 }, gap: { marginVertical: e.spaces.space8 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        831984: (e, t, r) => {
            r.d(t, { Z: () => w });
            var a = r(923747),
                n = r(202784),
                s = r(325686),
                l = (r(585488), r(277660)),
                c = r.n(l),
                i = r(952428),
                o = r(823161),
                m = r(731708),
                u = r(154003),
                p = r(392237),
                d = r(332920),
                g = r.n(d),
                y = r(412876),
                Z = r(553660);
            const E = g().efe6ef9e,
                _ = g().fbb7764b,
                h = g().e70a07b2,
                f = a.Z,
                b = ({ item: e }) => {
                    const t = c()(f, e),
                        r = t.tweet_results?.result?.rest_id,
                        a = t.sender_results?.result,
                        l = t.total_coins_worth || 0,
                        p = t.is_anonymous;
                    return n.createElement(s.Z, { role: "listitem" }, n.createElement(i.Z, { style: x.root, withInteractiveStyling: !1 }, n.createElement(s.Z, { style: x.row }, p ? n.createElement(o.default, { size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }) : "User" === a?.__typename ? n.createElement(y.Z, { size: "xLarge", user: a, withLink: !0 }) : null, n.createElement(s.Z, { style: x.column }, n.createElement(m.ZP, { size: "headline2", style: x.awardDetails, weight: "medium" }, _({ count: l })), p ? n.createElement(m.ZP, { style: x.spacing }, h) : "User" === a?.__typename ? n.createElement(Z.Z, { style: x.userName, user: a, weight: "normal", withLink: !0 }) : null)), n.createElement(s.Z, { style: x.row }, r && n.createElement(u.ZP, { link: `/twitter/status/${r}`, size: "small", style: x.spacing }, E))));
                },
                w = n.memo(b),
                x = p.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, row: { alignItems: "center", flexDirection: "row" }, column: { flexDirection: "column" }, userName: { marginHorizontal: e.spaces.space8 }, spacing: { marginStart: e.spaces.space8 }, spacingEnd: { marginEnd: e.spaces.space4 }, awardDetails: { marginStart: e.spaces.space8, marginBottom: e.spaces.space4 } }));
        },
        860747: (e, t, r) => {
            r.d(t, { Z: () => b });
            var a = r(181188),
                n = r(202784),
                s = (r(585488), r(277660)),
                l = r.n(s),
                c = r(731708),
                i = r(392237),
                o = r(332920),
                m = r.n(o),
                u = r(856151),
                p = r(443781),
                d = r(518180),
                g = r(534763),
                y = r(603e3),
                Z = r(794721);
            const E = m().j087774e,
                _ = m().df837dac,
                h = a.Z,
                f = ({ user: e }) => {
                    const { featureSwitches: t } = n.useContext(p.rC),
                        r = t.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        a = l()(h, e);
                    return r && a.award_eligible ? n.createElement(n.Fragment, null, n.createElement(g.H, { Icon: u.default, description: n.createElement(c.ZP, { color: "gray700", size: "subtext2", style: w.spacing }, n.createElement(Z.Z, { revenueType: y.AU.awards_revenue, title: _, user: a })), label: E, link: d.OB.dashboard.root })) : null;
                },
                b = n.memo(f),
                w = i.default.create((e) => ({ spacing: { marginTop: e.spaces.space4 } }));
        },
        875586: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(818414),
                n = r(202784),
                s = r(325686),
                l = (r(585488), r(277660)),
                c = r.n(l),
                i = r(731708),
                o = r(392237),
                m = r(332920),
                u = r.n(m),
                p = r(603e3);
            const d = u().i14be2c6,
                g = u().c76972f0,
                y = u().c219a552,
                Z = a.Z,
                E = (e) => {
                    const { revenueType: t = p.AU.superfollows_revenue, showEarnedRevenueSinceLastPayout: r, user: a } = e,
                        l = c()(Z, a),
                        [, o] = (0, p.$)(l, t),
                        [, m] = (0, p.Hx)(l, t),
                        u = n.createElement(s.Z, { style: _.revenuePrimary }, n.createElement(i.ZP, { style: _.revenuePrimaryText, weight: "heavy" }, o), n.createElement(i.ZP, { size: "subtext2", style: _.helperText }, g)),
                        E = n.createElement(s.Z, { style: r ? _.revenueSecondary : _.revenuePrimary }, n.createElement(i.ZP, { size: "title3", style: !r && _.revenuePrimaryText, weight: "heavy" }, m), n.createElement(i.ZP, { size: "subtext2", style: _.helperText }, y));
                    return n.createElement(s.Z, { style: _.root }, n.createElement(i.ZP, { "aria-level": 3, role: "heading", size: "headline2", weight: "heavy" }, d), r && u, E);
                },
                _ = o.default.create((e) => ({ root: { backgroundColor: e.colors.gray0, padding: e.spaces.space32 }, revenuePrimary: { marginTop: e.spaces.space24 }, revenuePrimaryText: { fontSize: e.spaces.space48, lineHeight: e.spaces.space48 }, revenueSecondary: { marginTop: e.spaces.space20 }, helperText: { marginTop: e.spaces.space4 } })),
                h = n.memo(E);
        },
        794721: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a = r(658156),
                n = r(202784),
                s = (r(585488), r(277660)),
                l = r.n(s),
                c = r(536606),
                i = r(332920),
                o = r.n(i),
                m = r(603e3);
            const u = o().df29646e,
                p = a.Z,
                d = (e) => {
                    const { user: t, revenueType: r = m.AU.superfollows_revenue, title: a = u } = e,
                        s = l()(p, t),
                        [i, o] = (0, m.$)(s, r),
                        [d, g] = (0, m.LF)(s),
                        y = n.useMemo(() => ({ color: "primary" }), []),
                        Z = n.useMemo(() => ({ label: `/${g}`, value: o }), [o, g]);
                    return n.createElement(c.Z, { progressBarConfig: y, statConfig: Z, title: a, valueCurrent: i, valueMax: d });
                },
                g = n.memo(d);
        },
        199213: (e, t, r) => {
            r.d(t, { Z: () => I });
            var a = r(202784),
                n = r(325686),
                s = r(844685),
                l = r(731708),
                c = r(154003),
                i = r(392237),
                o = r(332920),
                m = r.n(o),
                u = r(720816);
            const p = m().f139168e,
                d = m().ee0510c2,
                g = Object.freeze({ earnings: { link: "/settings/monetization/earnings", text: p, size: "xLarge" }, payoutHistory: { link: "/settings/monetization/payout_history", text: d } }),
                y = (e) => {
                    const { type: t } = e;
                    if (!t) return null;
                    const { link: r, size: n, text: s } = g[t];
                    return a.createElement(c.ZP, { link: r, size: n, style: E.button }, s);
                },
                Z = a.memo(y),
                E = i.default.create((e) => ({ button: { marginVertical: e.spaces.space16 } }));
            var _ = r(794721);
            const h = m().b0ac642a,
                f = m().df29646e,
                b = m().c747df1c,
                w = m().ac814a76,
                x = { pathname: u.NW.stripeSetup, state: { cameFromEarningsDashboard: !0 } },
                v = (e) => {
                    const { revenueType: t, showHelperText: r, showProgress: i, stripeStatus: o, type: m, user: u } = e;
                    return "Completed" !== o ? a.createElement(n.Z, { style: z.root }, a.createElement(s.Z, { text: f }), a.createElement(l.ZP, { color: "gray700", style: z.subtext }, w), a.createElement(c.ZP, { link: x }, b)) : a.createElement(n.Z, { style: z.root }, i && a.createElement(_.Z, { revenueType: t, user: u }), r && a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, h), a.createElement(Z, { type: m }));
                },
                I = a.memo(v),
                z = i.default.create((e) => ({ root: { padding: e.spaces.space16 }, subtext: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        933317: (e, t, r) => {
            r.d(t, { Z: () => C });
            var a = r(915814),
                n = r(202784),
                s = r(325686),
                l = (r(585488), r(277660)),
                c = r.n(l),
                i = r(844685),
                o = r(731708),
                m = r(420412),
                u = r(392237),
                p = r(332920),
                d = r.n(p),
                g = r(965245),
                y = r(468869),
                Z = r(158163),
                E = r(952428),
                _ = r(322121),
                h = r(97882);
            const f = d().f883322d,
                b = d().ba2e82a1,
                w = Z.Z,
                x = ({ item: e }) => {
                    const t = c()(w, e),
                        r = t.stripe_transaction_id,
                        a = t.amount_paid_out_in_cents,
                        l = t.created_at_msec,
                        i = a ? (0, h.x)({ amount: a, formatter: 100 }) : n.createElement(_.default, { testID: "icon-minus" });
                    return n.createElement(s.Z, { role: "listitem" }, n.createElement(E.Z, { style: I.root }, n.createElement(s.Z, { style: I.details }, n.createElement(o.ZP, { color: "gray700", weight: "bold" }, b(new Date(l))), n.createElement(o.ZP, { color: "gray700" }, f({ transactionId: r }))), n.createElement(o.ZP, { color: "green500", weight: "bold" }, i)));
                },
                v = n.memo(x),
                I = u.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, flexWrap: "wrap" }, details: { marginEnd: e.spaces.space8, flexBasis: "80%" } })),
                z = d().d55e017a,
                P = d().jb13b840,
                S = a.Z,
                D = (e) => e.__id,
                k = (e) => n.createElement(v, { item: e, key: e.__id }),
                H = ({ emptyStateDescription: e, items: t }) => n.createElement(n.Fragment, null, n.createElement(i.Z, { text: z }), t.length > 0 ? n.createElement(s.Z, { role: "list" }, t.map(k)) : n.createElement(o.ZP, { color: "gray700", style: F.emptyState }, e)),
                T = ({ fetchNext: e, items: t }) => n.createElement(n.Fragment, null, n.createElement(s.Z, { style: F.gap }, n.createElement(m.Z, null)), n.createElement(i.Z, { text: P }), n.createElement(s.Z, { role: "list" }, n.createElement(g.Z, { assumedItemHeight: 64, cacheKey: "payoutsList", footer: null, identityFunction: D, items: t, onNearEnd: e, renderer: k, withoutHeadroom: !0 }))),
                N = ({ emptyStateDescription: e, fetchNext: t, slice: r }) => {
                    const a = c()(S, r),
                        { otherItems: s, recentItems: l } = (0, y.yD)(a);
                    return n.createElement(n.Fragment, null, n.createElement(H, { emptyStateDescription: e, items: l }), s.length > 0 && n.createElement(T, { fetchNext: t, items: s }));
                },
                C = n.memo(N),
                F = u.default.create((e) => ({ header: { marginHorizontal: e.spaces.space12 }, gap: { marginVertical: e.spaces.space8 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        839681: (e, t, r) => {
            r.d(t, { Z: () => z });
            var a = r(564018),
                n = r(202784),
                s = r(325686),
                l = (r(585488), r(277660)),
                c = r.n(l),
                i = r(844685),
                o = r(731708),
                m = r(420412),
                u = r(392237),
                p = r(332920),
                d = r.n(p),
                g = r(516951),
                y = r(965245),
                Z = r(468869),
                E = r(822441);
            const _ = d().g1b8020c,
                h = d().jb13b840,
                f = a.Z,
                b = (e) => e.__id,
                w = (e) => n.useCallback((t) => n.createElement(E.Z, { item: t, key: t.__id, type: e }), [e]),
                x = ({ emptyStateDescription: e, fetchNext: t, items: r, type: a }) => {
                    const l = w(a);
                    return n.createElement(n.Fragment, null, n.createElement(i.Z, { text: _ }), r.length > 0 ? n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 64, cacheKey: "recentSubscribersList", footer: null, identityFunction: b, items: r, onNearEnd: t, renderer: l, withoutHeadroom: !0 })) : n.createElement(o.ZP, { color: "gray700", style: P.emptyState }, e));
                },
                v = ({ fetchNext: e, items: t, type: r }) => {
                    const a = w(r);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { style: P.gap }, n.createElement(m.Z, null)), n.createElement(i.Z, { text: h }), n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 64, cacheKey: "subscribersList", footer: null, identityFunction: b, items: t, onNearEnd: e, renderer: a, withoutHeadroom: !0 })));
                },
                I = ({ emptyStateDescription: e, fetchNext: t, slice: r, type: a }) => {
                    const s = c()(f, r),
                        { otherItems: l, recentItems: i } = (0, Z._5)(s),
                        o = l.length > 0;
                    return n.createElement(n.Fragment, null, n.createElement(x, { emptyStateDescription: e, fetchNext: o ? g.Z : t, items: i, type: a }), o && n.createElement(v, { fetchNext: t, items: l, type: a }));
                },
                z = n.memo(I),
                P = u.default.create((e) => ({ header: { marginHorizontal: e.spaces.space12 }, gap: { marginVertical: e.spaces.space8 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        822441: (e, t, r) => {
            r.d(t, { Z: () => w });
            var a = r(469363),
                n = r(202784),
                s = r(325686),
                l = (r(585488), r(277660)),
                c = r.n(l),
                i = r(952428),
                o = r(731708),
                m = r(392237),
                u = r(332920),
                p = r.n(u),
                d = r(322121),
                g = r(656166),
                y = r(97882),
                Z = r(412876),
                E = r(553660);
            const _ = a.Z,
                h = { [g.x.InitialSale]: "new_subscriptions", [g.x.Renewal]: "renewals" },
                f = p().a23e724a,
                b = ({ item: e, type: t }) => {
                    const r = c()(_, e),
                        a = h[t],
                        l = r.rest_id,
                        m = r.price_in_hundred,
                        u = r.consumer_results.result,
                        p = `/settings/monetization/subscriptions/transactions/${a}/${l}`,
                        g = m ? (0, y.x)({ amount: m, formatter: 100 }) : n.createElement(d.default, { testID: "icon-minus" });
                    return u && n.createElement(s.Z, { role: "listitem" }, n.createElement(i.Z, { link: p, style: x.root }, "User" === u.__typename ? n.createElement(s.Z, { style: x.user }, n.createElement(Z.Z, { size: "xLarge", user: u }), n.createElement(E.Z, { style: x.userName, user: u, withStackedLayout: !0 })) : n.createElement(o.ZP, null, f), n.createElement(o.ZP, { color: "gray700", style: x.paymentAmount, weight: "bold" }, g)));
                },
                w = n.memo(b),
                x = m.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, user: { alignItems: "center", flexDirection: "row", flexShrink: 1 }, userName: { marginHorizontal: e.spaces.space8 }, paymentAmount: { minWidth: e.spaces.space48 } }));
        },
        253518: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(228820),
                n = r(202784),
                s = (r(585488), r(277660)),
                l = r.n(s),
                c = r(731708),
                i = r(392237),
                o = r(332920),
                m = r.n(o),
                u = r(491831),
                p = r(518180),
                d = r(720816),
                g = r(534763),
                y = r(794721);
            const Z = m().d7b51c68,
                E = m().df837dac,
                _ = a.Z,
                h = (e) => {
                    const { description: t, isActiveCreator: r, user: a } = e,
                        s = l()(_, a);
                    return n.createElement(g.H, { Icon: u.default, description: t || (r && n.createElement(c.ZP, { color: "gray700", size: "subtext2", style: b.spacing }, n.createElement(y.Z, { title: E, user: s }))), iconColor: "plum500", label: Z, link: r ? p.Vt.dashboard.root : d.Jz });
                },
                f = n.memo(h),
                b = i.default.create((e) => ({ spacing: { marginTop: e.spaces.space4 } }));
        },
        371445: (e, t, r) => {
            r.d(t, { Z: () => m });
            var a = r(202784),
                n = r(325686),
                s = r(731708),
                l = r(420412),
                c = r(392237),
                i = r(322121);
            const o = ({ header: e, text: t }) => a.createElement(a.Fragment, null, a.createElement(n.Z, { style: u.info }, a.createElement(s.ZP, { "aria-level": 3, role: "heading", size: "subtext1", style: u.header }, e), a.createElement(s.ZP, { size: "headline2" }, t || a.createElement(i.default, { testID: "icon-minus" }))), a.createElement(l.Z, null)),
                m = a.memo(o),
                u = c.default.create((e) => ({ info: { paddingVertical: e.spaces.space12 }, header: { marginBottom: e.spaces.space4 } }));
        },
        468869: (e, t, r) => {
            r.d(t, { _5: () => p, h9: () => g, yD: () => Z });
            var a = r(496790),
                n = r(58367),
                s = r(483169),
                l = (r(585488), r(277660)),
                c = r.n(l),
                i = r(662678),
                o = r(566220);
            const m = s.Z,
                u = () => (0, o.R)()().getTime() - 2592e6,
                p = (e) => {
                    const t = c()(m, e),
                        r = u(),
                        [a, n] = (0, i.Z)(t.items, (e) => e.created_at_msec >= r);
                    return { recentItems: a, otherItems: n };
                },
                d = n.Z,
                g = (e) => {
                    const t = c()(d, e),
                        r = u(),
                        [a, n] = (0, i.Z)(t.items, (e) => new Date(e.timestamp_millis).getTime() >= r);
                    return { recentItems: a, otherItems: n };
                },
                y = a.Z,
                Z = (e) => {
                    const t = c()(y, e),
                        r = (0, o.R)()(),
                        a = new Date(r.getFullYear(), r.getMonth(), 1).getTime(),
                        [n, s] = (0, i.Z)(t.items, (e) => e.created_at_msec >= a);
                    return { recentItems: n, otherItems: s };
                };
        },
        603e3: (e, t, r) => {
            r.d(t, { $: () => m, AU: () => o, Hx: () => p, LF: () => u });
            var a = r(689438),
                n = r(551652),
                s = r(737722),
                l = (r(585488), r(277660)),
                c = r.n(l),
                i = r(97882);
            const o = { superfollows_revenue: "superfollows_revenue", awards_revenue: "awards_revenue", total_revenue: "total_revenue" },
                m = (e, t = o.superfollows_revenue) => {
                    const r = c()(s.Z, e),
                        a = r[t]?.revenue_since_last_payout_in_cents ?? 0;
                    return [a, (0, i.x)({ amount: a, formatter: 100 })];
                },
                u = (e) => {
                    const t = c()(n.Z, e).creator_payout_threshold.payout_minimum_threshold_in_usd_cents ?? 0;
                    return [t, (0, i.x)({ amount: t, formatter: 100 })];
                },
                p = (e, t = o.superfollows_revenue) => {
                    const r = c()(a.Z, e),
                        n = r[t]?.all_time_revenue_in_cents ?? 0;
                    return [n, (0, i.x)({ amount: n, formatter: 100 })];
                };
        },
        534763: (e, t, r) => {
            r.d(t, { H: () => o, b: () => m });
            var a = r(807896),
                n = r(202784),
                s = r(392237),
                l = r(779610);
            const c = (e) => {
                    const { Icon: t, iconColor: r, testID: a } = e;
                    return n.createElement(t, { style: r ? { color: s.default.theme.colors[r] } : i.thumbnail, testID: a });
                },
                i = s.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function o(e) {
                const { Icon: t, iconColor: r, testID: s, ...i } = e;
                return n.createElement(l.Z, (0, a.Z)({}, i, { thumbnail: n.createElement(c, { Icon: t, iconColor: r, testID: s }), thumbnailSize: "large" }));
            }
            function m(e) {
                const { link: t, ...r } = e;
                return n.createElement(l.Z, (0, a.Z)({}, r, { link: { external: !0, pathname: e.link } }));
            }
        },
        507651: (e, t, r) => {
            r.d(t, { Z: () => o });
            var a = r(807896),
                n = r(202784),
                s = r(107267),
                l = r(403556),
                c = r(791632);
            const i = (e) => {
                    const t = (0, s.useHistory)();
                    return n.createElement(l.Z, (0, a.Z)({}, e, { isCompact: (0, c.HD)(t) }));
                },
                o = n.memo(i);
        },
        856522: (e, t, r) => {
            r.d(t, { Z: () => o });
            var a = r(807896),
                n = r(9410),
                s = r(202784),
                l = (r(585488), r(277660)),
                c = r.n(l),
                i = r(23134);
            function o({ user: e, ...t }) {
                const r = c()(n.Z, e),
                    l = s.useMemo(() => (r ? { id_str: r.rest_id, screen_name: r.core?.screen_name || "", name: r.core?.name || "", follow_request_sent: r.legacy?.follow_request_sent || !1, protected: r.privacy?.protected || !1, following: r.relationship_perspectives?.following || !1, followed_by: r.relationship_perspectives?.followed_by || !1, super_following: r.super_following || void 0, super_follow_eligible: r.super_follow_eligible || void 0, super_followed_by: r.super_followed_by || void 0, blocking: r.relationship_perspectives?.blocking || void 0, highlightedLabel: r.affiliates_highlighted_label?.label ? { userLabelType: r.affiliates_highlighted_label.label.user_label_type || void 0 } : void 0 } : void 0), [r]);
                return s.createElement(i.C, (0, a.Z)({}, t, { isRelay: !0, user: l, userId: r?.rest_id ?? "" }));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-b308cbaf.774a86ca.js.map
