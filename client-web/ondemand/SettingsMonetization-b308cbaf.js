"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-b308cbaf"],
    {
        309043: (e, t, a) => {
            a.d(t, { Z: () => E });
            var r = a(904368),
                n = a(202784),
                s = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(731708),
                o = a(392237),
                m = a(332920),
                p = a.n(m);
            const u = p().ee9ea930,
                d = p().cf3b535e,
                g = r.Z,
                y = (e) => {
                    const { user: t } = e,
                        a = c()(g, t),
                        r = a.awards_revenue?.revenue_since_last_payout_in_diamonds;
                    return n.createElement(s.Z, { style: Z.diamondSection }, n.createElement(s.Z, { style: Z.diamondDetails }, n.createElement(i.ZP, { weight: "bold" }, u), n.createElement(i.ZP, { weight: "bold" }, r)), n.createElement(i.ZP, { color: "gray700", size: "subtext1", style: Z.topSpacing }, d));
                },
                E = n.memo(y),
                Z = o.default.create((e) => ({ button: { marginTop: e.spaces.space16, marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" }, diamondDetails: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, diamondSection: { padding: e.spaces.space16 }, topSpacing: { marginTop: e.spaces.space8 } }));
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
                p = a(392237),
                u = a(332920),
                d = a.n(u),
                g = a(516951),
                y = a(965245),
                E = a(468869),
                Z = a(831984);
            const h = d().g1b8020c,
                _ = d().jb13b840,
                f = d().b4f24360,
                w = r.Z,
                b = (e) => e.transaction_id,
                x = () => n.useCallback((e) => n.createElement(Z.Z, { item: e, key: e.transaction_id }), []),
                v = ({ fetchNext: e, items: t }) => {
                    const a = x();
                    return n.createElement(n.Fragment, null, n.createElement(i.Z, { text: h }), t.length > 0 ? n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 68, cacheKey: "recentAwardsList", footer: null, identityFunction: b, items: t, onNearEnd: e, renderer: a, withoutHeadroom: !0 })) : n.createElement(o.ZP, { color: "gray700", style: D.emptyState }, f));
                },
                I = ({ fetchNext: e, items: t }) => {
                    const a = x();
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { style: D.gap }, n.createElement(m.Z, null)), n.createElement(i.Z, { text: _ }), n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 68, cacheKey: "awardsList", footer: null, identityFunction: b, items: t, onNearEnd: e, renderer: a, withoutHeadroom: !0 })));
                },
                S = ({ fetchNext: e, slice: t }) => {
                    const a = c()(w, t),
                        { otherItems: r, recentItems: s } = (0, E.h9)(a),
                        l = r.length > 0;
                    return n.createElement(n.Fragment, null, n.createElement(v, { fetchNext: l ? g.Z : e, items: s }), l && n.createElement(I, { fetchNext: e, items: r }));
                },
                P = n.memo(S),
                D = p.default.create((e) => ({ header: { marginHorizontal: e.spaces.space12 }, gap: { marginVertical: e.spaces.space8 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        831984: (e, t, a) => {
            a.d(t, { Z: () => b });
            var r = a(923747),
                n = a(202784),
                s = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(952428),
                o = a(823161),
                m = a(731708),
                p = a(154003),
                u = a(392237),
                d = a(332920),
                g = a.n(d),
                y = a(412876),
                E = a(553660);
            const Z = g().efe6ef9e,
                h = g().fbb7764b,
                _ = g().e70a07b2,
                f = r.Z,
                w = ({ item: e }) => {
                    const t = c()(f, e),
                        a = t.tweet_results?.result?.rest_id,
                        r = t.sender_results?.result,
                        l = t.total_coins_worth || 0,
                        u = t.is_anonymous;
                    return n.createElement(s.Z, { role: "listitem" }, n.createElement(i.Z, { style: x.root, withInteractiveStyling: !1 }, n.createElement(s.Z, { style: x.row }, u ? n.createElement(o.default, { size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }) : "User" === r?.__typename ? n.createElement(y.Z, { size: "xLarge", user: r, withLink: !0 }) : null, n.createElement(s.Z, { style: x.column }, n.createElement(m.ZP, { size: "headline2", style: x.awardDetails, weight: "medium" }, h({ count: l })), u ? n.createElement(m.ZP, { style: x.spacing }, _) : "User" === r?.__typename ? n.createElement(E.Z, { style: x.userName, user: r, weight: "normal", withLink: !0 }) : null)), n.createElement(s.Z, { style: x.row }, a && n.createElement(p.ZP, { link: `/twitter/status/${a}`, size: "small", style: x.spacing }, Z))));
                },
                b = n.memo(w),
                x = u.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, row: { alignItems: "center", flexDirection: "row" }, column: { flexDirection: "column" }, userName: { marginHorizontal: e.spaces.space8 }, spacing: { marginStart: e.spaces.space8 }, spacingEnd: { marginEnd: e.spaces.space4 }, awardDetails: { marginStart: e.spaces.space8, marginBottom: e.spaces.space4 } }));
        },
        875586: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var r = a(818414),
                n = a(202784),
                s = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(731708),
                o = a(392237),
                m = a(332920),
                p = a.n(m),
                u = a(188356);
            const d = p().i14be2c6,
                g = p().c76972f0,
                y = p().c219a552,
                E = r.Z,
                Z = (e) => {
                    const { revenueType: t = u.AU.superfollows_revenue, showEarnedRevenueSinceLastPayout: a, user: r } = e,
                        l = c()(E, r),
                        [, o] = (0, u.$)(l, t),
                        [, m] = (0, u.Hx)(l, t),
                        p = n.createElement(s.Z, { style: h.revenuePrimary }, n.createElement(i.ZP, { style: h.revenuePrimaryText, weight: "heavy" }, o), n.createElement(i.ZP, { size: "subtext2", style: h.helperText }, g)),
                        Z = n.createElement(s.Z, { style: a ? h.revenueSecondary : h.revenuePrimary }, n.createElement(i.ZP, { size: "title3", style: !a && h.revenuePrimaryText, weight: "heavy" }, m), n.createElement(i.ZP, { size: "subtext2", style: h.helperText }, y));
                    return n.createElement(s.Z, { style: h.root }, n.createElement(i.ZP, { "aria-level": 3, role: "heading", size: "headline2", weight: "heavy" }, d), a && p, Z);
                },
                h = o.default.create((e) => ({ root: { backgroundColor: e.colors.gray0, padding: e.spaces.space32 }, revenuePrimary: { marginTop: e.spaces.space24 }, revenuePrimaryText: { fontSize: e.spaces.space48, lineHeight: e.spaces.space48 }, revenueSecondary: { marginTop: e.spaces.space20 }, helperText: { marginTop: e.spaces.space4 } })),
                _ = n.memo(Z);
        },
        933317: (e, t, a) => {
            a.d(t, { Z: () => T });
            var r = a(915814),
                n = a(202784),
                s = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(844685),
                o = a(731708),
                m = a(420412),
                p = a(392237),
                u = a(332920),
                d = a.n(u),
                g = a(965245),
                y = a(468869),
                E = a(158163),
                Z = a(952428),
                h = a(322121),
                _ = a(97882);
            const f = d().f883322d,
                w = d().ba2e82a1,
                b = E.Z,
                x = ({ item: e }) => {
                    const t = c()(b, e),
                        a = t.stripe_transaction_id,
                        r = t.amount_paid_out_in_cents,
                        l = t.created_at_msec,
                        i = r ? (0, _.x)({ amount: r, formatter: 100 }) : n.createElement(h.default, { testID: "icon-minus" });
                    return n.createElement(s.Z, { role: "listitem" }, n.createElement(Z.Z, { style: I.root }, n.createElement(s.Z, { style: I.details }, n.createElement(o.ZP, { color: "gray700", weight: "bold" }, w(new Date(l))), n.createElement(o.ZP, { color: "gray700" }, f({ transactionId: a }))), n.createElement(o.ZP, { color: "green500", weight: "bold" }, i)));
                },
                v = n.memo(x),
                I = p.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, flexWrap: "wrap" }, details: { marginEnd: e.spaces.space8, flexBasis: "80%" } })),
                S = d().d55e017a,
                P = d().jb13b840,
                D = r.Z,
                z = (e) => e.__id,
                H = (e) => n.createElement(v, { item: e, key: e.__id }),
                N = ({ emptyStateDescription: e, items: t }) => n.createElement(n.Fragment, null, n.createElement(i.Z, { text: S }), t.length > 0 ? n.createElement(s.Z, { role: "list" }, t.map(H)) : n.createElement(o.ZP, { color: "gray700", style: L.emptyState }, e)),
                k = ({ fetchNext: e, items: t }) => n.createElement(n.Fragment, null, n.createElement(s.Z, { style: L.gap }, n.createElement(m.Z, null)), n.createElement(i.Z, { text: P }), n.createElement(s.Z, { role: "list" }, n.createElement(g.Z, { assumedItemHeight: 64, cacheKey: "payoutsList", footer: null, identityFunction: z, items: t, onNearEnd: e, renderer: H, withoutHeadroom: !0 }))),
                F = ({ emptyStateDescription: e, fetchNext: t, slice: a }) => {
                    const r = c()(D, a),
                        { otherItems: s, recentItems: l } = (0, y.yD)(r);
                    return n.createElement(n.Fragment, null, n.createElement(N, { emptyStateDescription: e, items: l }), s.length > 0 && n.createElement(k, { fetchNext: t, items: s }));
                },
                T = n.memo(F),
                L = p.default.create((e) => ({ header: { marginHorizontal: e.spaces.space12 }, gap: { marginVertical: e.spaces.space8 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        839681: (e, t, a) => {
            a.d(t, { Z: () => S });
            var r = a(564018),
                n = a(202784),
                s = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(844685),
                o = a(731708),
                m = a(420412),
                p = a(392237),
                u = a(332920),
                d = a.n(u),
                g = a(516951),
                y = a(965245),
                E = a(468869),
                Z = a(822441);
            const h = d().g1b8020c,
                _ = d().jb13b840,
                f = r.Z,
                w = (e) => e.__id,
                b = (e) => n.useCallback((t) => n.createElement(Z.Z, { item: t, key: t.__id, type: e }), [e]),
                x = ({ emptyStateDescription: e, fetchNext: t, items: a, type: r }) => {
                    const l = b(r);
                    return n.createElement(n.Fragment, null, n.createElement(i.Z, { text: h }), a.length > 0 ? n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 64, cacheKey: "recentSubscribersList", footer: null, identityFunction: w, items: a, onNearEnd: t, renderer: l, withoutHeadroom: !0 })) : n.createElement(o.ZP, { color: "gray700", style: P.emptyState }, e));
                },
                v = ({ fetchNext: e, items: t, type: a }) => {
                    const r = b(a);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { style: P.gap }, n.createElement(m.Z, null)), n.createElement(i.Z, { text: _ }), n.createElement(s.Z, { role: "list" }, n.createElement(y.Z, { assumedItemHeight: 64, cacheKey: "subscribersList", footer: null, identityFunction: w, items: t, onNearEnd: e, renderer: r, withoutHeadroom: !0 })));
                },
                I = ({ emptyStateDescription: e, fetchNext: t, slice: a, type: r }) => {
                    const s = c()(f, a),
                        { otherItems: l, recentItems: i } = (0, E._5)(s),
                        o = l.length > 0;
                    return n.createElement(n.Fragment, null, n.createElement(x, { emptyStateDescription: e, fetchNext: o ? g.Z : t, items: i, type: r }), o && n.createElement(v, { fetchNext: t, items: l, type: r }));
                },
                S = n.memo(I),
                P = p.default.create((e) => ({ header: { marginHorizontal: e.spaces.space12 }, gap: { marginVertical: e.spaces.space8 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        822441: (e, t, a) => {
            a.d(t, { Z: () => b });
            var r = a(469363),
                n = a(202784),
                s = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(952428),
                o = a(731708),
                m = a(392237),
                p = a(332920),
                u = a.n(p),
                d = a(322121),
                g = a(656166),
                y = a(97882),
                E = a(412876),
                Z = a(553660);
            const h = r.Z,
                _ = { [g.x.InitialSale]: "new_subscriptions", [g.x.Renewal]: "renewals" },
                f = u().a23e724a,
                w = ({ item: e, type: t }) => {
                    const a = c()(h, e),
                        r = _[t],
                        l = a.rest_id,
                        m = a.price_in_hundred,
                        p = a.consumer_results.result,
                        u = `/settings/monetization/subscriptions/transactions/${r}/${l}`,
                        g = m ? (0, y.x)({ amount: m, formatter: 100 }) : n.createElement(d.default, { testID: "icon-minus" });
                    return p && n.createElement(s.Z, { role: "listitem" }, n.createElement(i.Z, { link: u, style: x.root }, "User" === p.__typename ? n.createElement(s.Z, { style: x.user }, n.createElement(E.Z, { size: "xLarge", user: p }), n.createElement(Z.Z, { style: x.userName, user: p, withStackedLayout: !0 })) : n.createElement(o.ZP, null, f), n.createElement(o.ZP, { color: "gray700", style: x.paymentAmount, weight: "bold" }, g)));
                },
                b = n.memo(w),
                x = m.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, user: { alignItems: "center", flexDirection: "row", flexShrink: 1 }, userName: { marginHorizontal: e.spaces.space8 }, paymentAmount: { minWidth: e.spaces.space48 } }));
        },
        371445: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(202784),
                n = a(325686),
                s = a(731708),
                l = a(420412),
                c = a(392237),
                i = a(322121);
            const o = ({ header: e, text: t }) => r.createElement(r.Fragment, null, r.createElement(n.Z, { style: p.info }, r.createElement(s.ZP, { "aria-level": 3, role: "heading", size: "subtext1", style: p.header }, e), r.createElement(s.ZP, { size: "headline2" }, t || r.createElement(i.default, { testID: "icon-minus" }))), r.createElement(l.Z, null)),
                m = r.memo(o),
                p = c.default.create((e) => ({ info: { paddingVertical: e.spaces.space12 }, header: { marginBottom: e.spaces.space4 } }));
        },
        468869: (e, t, a) => {
            a.d(t, { _5: () => u, h9: () => g, yD: () => E });
            var r = a(496790),
                n = a(58367),
                s = a(483169),
                l = (a(585488), a(277660)),
                c = a.n(l),
                i = a(662678),
                o = a(566220);
            const m = s.Z,
                p = () => (0, o.R)()().getTime() - 2592e6,
                u = (e) => {
                    const t = c()(m, e),
                        a = p(),
                        [r, n] = (0, i.Z)(t.items, (e) => e.created_at_msec >= a);
                    return { recentItems: r, otherItems: n };
                },
                d = n.Z,
                g = (e) => {
                    const t = c()(d, e),
                        a = p(),
                        [r, n] = (0, i.Z)(t.items, (e) => new Date(e.timestamp_millis).getTime() >= a);
                    return { recentItems: r, otherItems: n };
                },
                y = r.Z,
                E = (e) => {
                    const t = c()(y, e),
                        a = (0, o.R)()(),
                        r = new Date(a.getFullYear(), a.getMonth(), 1).getTime(),
                        [n, s] = (0, i.Z)(t.items, (e) => e.created_at_msec >= r);
                    return { recentItems: n, otherItems: s };
                };
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
                    l = s.useMemo(() => (a ? { id_str: a.rest_id, screen_name: a.core?.screen_name || "", name: a.core?.name || "", follow_request_sent: a.legacy?.follow_request_sent || !1, protected: a.privacy?.protected || !1, following: a.relationship_perspectives?.following || !1, followed_by: a.relationship_perspectives?.followed_by || !1, super_following: a.super_following || void 0, super_follow_eligible: a.super_follow_eligible || void 0, super_followed_by: a.super_followed_by || void 0, blocking: a.relationship_perspectives?.blocking || void 0, highlightedLabel: a.affiliates_highlighted_label?.label ? { userLabelType: a.affiliates_highlighted_label.label.user_label_type || void 0 } : void 0 } : void 0), [a]);
                return s.createElement(i.C, (0, r.Z)({}, t, { isRelay: !0, user: l, userId: a?.rest_id ?? "" }));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-b308cbaf.24e947aa.js.map
