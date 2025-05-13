"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SettingsRevamp~ondemand.SettingsMonetization"],
    {
        462770: (e, t, a) => {
            a.d(t, { Z: () => k });
            var n = {
                argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }],
                kind: "Fragment",
                metadata: null,
                name: "AwardsSettingsInternalLinkPivot_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "award_eligible", storageKey: null },
                    { args: [{ kind: "Variable", name: "awardsEnabled", variableName: "awardsEnabled" }], kind: "FragmentSpread", name: "PayoutThresholdProgress_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "a926eed5a115bd33c917fb7153702784",
            };
            const r = n;
            var s = a(202784),
                l = (a(585488), a(277660)),
                o = a.n(l),
                i = a(731708),
                u = a(392237),
                d = a(674132),
                c = a.n(d),
                m = a(856151),
                p = a(443781),
                g = a(518180),
                b = a(534763),
                h = a(188356),
                y = a(370516);
            const f = c().j087774e,
                v = c().df837dac,
                w = r,
                _ = ({ user: e }) => {
                    const { featureSwitches: t } = s.useContext(p.rC),
                        a = t.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        n = o()(w, e);
                    return a && n.award_eligible ? s.createElement(s.Fragment, null, s.createElement(b.H, { Icon: m.default, description: s.createElement(i.ZP, { color: "gray700", size: "subtext2", style: E.spacing }, s.createElement(y.Z, { revenueType: h.AU.awards_revenue, title: v, user: n })), label: f, link: g.OB.dashboard.root })) : null;
                },
                k = s.memo(_),
                E = u.default.create((e) => ({ spacing: { marginTop: e.spaces.space4 } }));
        },
        370516: (e, t, a) => {
            a.d(t, { Z: () => b });
            var n = {
                argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }],
                kind: "Fragment",
                metadata: null,
                name: "PayoutThresholdProgress_user",
                selections: [
                    { args: [{ kind: "Variable", name: "awardsEnabled", variableName: "awardsEnabled" }], kind: "FragmentSpread", name: "useMonetizationPayoutAmount_user" },
                    { args: null, kind: "FragmentSpread", name: "useMonetizationPayoutThresholdAmount_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "1f946f97a51b8e59702c211b210f1663",
            };
            const r = n;
            var s = a(202784),
                l = (a(585488), a(277660)),
                o = a.n(l),
                i = a(536606),
                u = a(674132),
                d = a.n(u),
                c = a(188356);
            const m = d().df29646e,
                p = r,
                g = (e) => {
                    const { user: t, revenueType: a = c.AU.superfollows_revenue, title: n = m } = e,
                        r = o()(p, t),
                        [l, u] = (0, c.$)(r, a),
                        [d, g] = (0, c.LF)(r),
                        b = s.useMemo(() => ({ color: "primary" }), []),
                        h = s.useMemo(() => ({ label: `/${g}`, value: u }), [u, g]);
                    return s.createElement(i.Z, { progressBarConfig: b, statConfig: h, title: n, valueCurrent: l, valueMax: d });
                },
                b = s.memo(g);
        },
        199213: (e, t, a) => {
            a.d(t, { Z: () => Z });
            var n = a(202784),
                r = a(325686),
                s = a(844685),
                l = a(731708),
                o = a(154003),
                i = a(392237),
                u = a(674132),
                d = a.n(u),
                c = a(720816);
            const m = d().f139168e,
                p = d().ee0510c2,
                g = Object.freeze({ earnings: { link: "/settings/monetization/earnings", text: m, size: "xLarge" }, payoutHistory: { link: "/settings/monetization/payout_history", text: p } }),
                b = (e) => {
                    const { type: t } = e;
                    if (!t) return null;
                    const { link: a, size: r, text: s } = g[t];
                    return n.createElement(o.ZP, { link: a, size: r, style: y.button }, s);
                },
                h = n.memo(b),
                y = i.default.create((e) => ({ button: { marginVertical: e.spaces.space16 } }));
            var f = a(370516);
            const v = d().b0ac642a,
                w = d().df29646e,
                _ = d().c747df1c,
                k = d().ac814a76,
                E = { pathname: c.NW.stripeSetup, state: { cameFromEarningsDashboard: !0 } },
                C = (e) => {
                    const { revenueType: t, showHelperText: a, showProgress: i, stripeStatus: u, type: d, user: c } = e;
                    return "Completed" !== u ? n.createElement(r.Z, { style: x.root }, n.createElement(s.Z, { text: w }), n.createElement(l.ZP, { color: "gray700", style: x.subtext }, k), n.createElement(o.ZP, { link: E }, _)) : n.createElement(r.Z, { style: x.root }, i && n.createElement(f.Z, { revenueType: t, user: c }), a && n.createElement(l.ZP, { color: "gray700", size: "subtext2" }, v), n.createElement(h, { type: d }));
                },
                Z = n.memo(C),
                x = i.default.create((e) => ({ root: { padding: e.spaces.space16 }, subtext: { marginVertical: e.spaces.space12, textAlign: "center" } }));
        },
        469149: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var n = { argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }], kind: "Fragment", metadata: null, name: "SuperFollowsSettingsInternalLinkPivot_user", selections: [{ args: [{ kind: "Variable", name: "awardsEnabled", variableName: "awardsEnabled" }], kind: "FragmentSpread", name: "PayoutThresholdProgress_user" }], type: "User", abstractKey: null, hash: "703fdd6a0065aec8ec26a16a33fa6bfe" };
            const r = n;
            var s = a(202784),
                l = (a(585488), a(277660)),
                o = a.n(l),
                i = a(731708),
                u = a(392237),
                d = a(674132),
                c = a.n(d),
                m = a(491831),
                p = a(518180),
                g = a(720816),
                b = a(534763),
                h = a(370516);
            const y = c().d7b51c68,
                f = c().df837dac,
                v = r,
                w = (e) => {
                    const { description: t, isActiveCreator: a, user: n } = e,
                        r = o()(v, n);
                    return s.createElement(b.H, { Icon: m.default, description: t || (a && s.createElement(i.ZP, { color: "gray700", size: "subtext2", style: k.spacing }, s.createElement(h.Z, { title: f, user: r }))), iconColor: "plum500", label: y, link: a ? p.Vt.dashboard.root : g.Jz });
                },
                _ = s.memo(w),
                k = u.default.create((e) => ({ spacing: { marginTop: e.spaces.space4 } }));
        },
        188356: (e, t, a) => {
            a.d(t, { AU: () => p, Hx: () => h, $: () => g, LF: () => b });
            var n,
                r = {
                    argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }],
                    kind: "Fragment",
                    metadata: null,
                    name: "useMonetizationPayoutAllTimeRevenueAmount_user",
                    selections: [
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "superfollows_revenue", plural: !1, selections: (n = [{ alias: null, args: null, kind: "ScalarField", name: "all_time_revenue_in_cents", storageKey: null }]), storageKey: null }, action: "THROW" },
                        { condition: "awardsEnabled", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "awards_revenue", plural: !1, selections: n, storageKey: null }] },
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "total_revenue", plural: !1, selections: n, storageKey: null }, action: "THROW" },
                    ],
                    type: "User",
                    abstractKey: null,
                };
            r.hash = "59bfc4e16e122ddcd6f093657e137573";
            const s = r;
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useMonetizationPayoutThresholdAmount_user", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorPayoutThresholdInfo", kind: "LinkedField", name: "creator_payout_threshold", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "payout_minimum_threshold_in_usd_cents", storageKey: null }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null, hash: "a7feb1fb1419eed9ac574e03fea93d01" };
            const o = l;
            var i = (function () {
                var e = [{ alias: null, args: null, kind: "ScalarField", name: "revenue_since_last_payout_in_cents", storageKey: null }];
                return {
                    argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }],
                    kind: "Fragment",
                    metadata: null,
                    name: "useMonetizationPayoutAmount_user",
                    selections: [
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "superfollows_revenue", plural: !1, selections: e, storageKey: null }, action: "THROW" },
                        { condition: "awardsEnabled", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "awards_revenue", plural: !1, selections: e, storageKey: null }] },
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "total_revenue", plural: !1, selections: e, storageKey: null }, action: "THROW" },
                    ],
                    type: "User",
                    abstractKey: null,
                };
            })();
            i.hash = "a3ddf3a7e3d949c0df6ebd21c029ca1e";
            const u = i;
            a(585488);
            var d = a(277660),
                c = a.n(d),
                m = a(97882);
            const p = { superfollows_revenue: "superfollows_revenue", awards_revenue: "awards_revenue", total_revenue: "total_revenue" },
                g = (e, t = p.superfollows_revenue) => {
                    const a = c()(u, e),
                        n = a[t]?.revenue_since_last_payout_in_cents ?? 0;
                    return [n, (0, m.x)({ amount: n, formatter: 100 })];
                },
                b = (e) => {
                    const t = c()(o, e).creator_payout_threshold.payout_minimum_threshold_in_usd_cents ?? 0;
                    return [t, (0, m.x)({ amount: t, formatter: 100 })];
                },
                h = (e, t = p.superfollows_revenue) => {
                    const a = c()(s, e),
                        n = a[t]?.all_time_revenue_in_cents ?? 0;
                    return [n, (0, m.x)({ amount: n, formatter: 100 })];
                };
        },
        518180: (e, t, a) => {
            a.d(t, { BJ: () => l, Jz: () => r, OB: () => i, Vt: () => o, vl: () => s });
            var n = a(189244);
            const r = "/settings/monetization",
                s = `${r}/earnings`,
                l = `${r}/payout_history`,
                o = { dashboard: { root: `${r}/subscriptions/dashboard`, revenue: `${r}/subscriptions/dashboard/revenue`, manage: `${r}/subscriptions/dashboard/manage` }, perks: { root: `${r}/subscriptions/perks`, intro: `${r}/subscriptions/perks/intro`, description: `${r}/subscriptions/perks/description`, pricing: `${r}/subscriptions/perks/pricing`, confirm: `${r}/subscriptions/perks/confirm` }, transactions: { root: `${r}/subscriptions/transactions`, newSubscriptions: `${r}/subscriptions/transactions/new_subscriptions`, newSubscriptionDetails: `${r}/subscriptions/transactions/new_subscriptions/${n.Hr}`, renewals: `${r}/subscriptions/transactions/renewals`, renewalDetails: `${r}/subscriptions/transactions/renewals/${n.Hr}` } },
                i = { dashboard: { root: `${r}/awards/dashboard`, revenue: `${r}/awards/dashboard/revenue`, manage: `${r}/awards/dashboard/manage` }, transactions: { root: `${r}/awards/transactions` } };
        },
        779610: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(325686),
                s = a(191796),
                l = a(58399),
                o = a(731708),
                i = a(952428),
                u = a(392237);
            const d = (e) => {
                    const { decoration: t, description: a, disabled: d = !1, isActive: m = !1, label: p, link: g, onPress: b, paddingHorizontal: h, renderRightContent: y, role: f = "tab", styleOverride: v, testID: w = "pivot", thumbnail: _, thumbnailSize: k, withoutArrow: E = !1 } = e,
                        C = [c.thumbnailContainer, "medium" === k && c.thumbnailContainerMedium],
                        Z = "string" == typeof p ? n.createElement(o.ZP, null, p) : p,
                        x = "object" == typeof g && g.external && !g.openInSameFrame,
                        F = a ? ("string" == typeof a ? n.createElement(o.ZP, { color: "gray700", size: "subtext2", testID: `${w}-description` }, a) : a) : null,
                        P = n.useMemo(() => ("space0" === h ? { paddingHorizontal: 0 } : { paddingHorizontal: h ? u.default.theme.spaces[h] : u.default.theme.componentDimensions.gutterHorizontal }), [h]);
                    return n.createElement(i.Z, { "aria-selected": "tab" === f ? m : null, disabled: d, link: d ? void 0 : g, onPress: b, role: f, style: [c.root, P, d && c.disabled, v], testID: w, withInteractiveStyling: !!g || !!b }, n.createElement(r.Z, { style: c.contentContainer }, _ ? n.createElement(r.Z, { style: C }, _) : null, n.createElement(r.Z, { style: c.content }, Z, F), y ? y() : null, (!g && !b) || d || E ? null : x ? n.createElement(s.default, { style: c.icon }) : n.createElement(l.default, { style: c.icon })), t);
                },
                c = u.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${u.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        536606: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(202784),
                r = a(325686),
                s = a(731708),
                l = a(352924),
                o = a(822399),
                i = a(98538),
                u = a(392237);
            const d = (e) => {
                const { decoration: t, isCompact: a, progressBarConfig: d, statConfig: m, title: p, valueCurrent: g, valueMax: b } = e,
                    h = (0, l.F)(),
                    y = ((f = d), u.default.theme.colors[f?.color || "blue900"]);
                var f;
                const v = (function (e) {
                        return { borderRadius: u.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    w = (function (e) {
                        return { borderRadius: u.default.theme.borderRadii[e?.borderRadii || "medium"], height: u.default.theme.spaces[e?.height || "space8"], backgroundColor: u.default.theme.colors.gray50 };
                    })(d);
                return n.createElement(r.Z, { style: c.root }, n.createElement(r.Z, { style: c.decoration }, t), n.createElement(r.Z, { style: c.title }, n.createElement(s.ZP, { size: "subtext2", weight: "medium" }, p)), n.createElement(r.Z, { id: h, style: c.valueLabel }, m.value ? n.createElement(i.Z, null, n.createElement(i.Z.Value, null, m.value), n.createElement(i.Z.Label, null, m.label)) : n.createElement(s.ZP, { weight: "bold" }, m.label)), n.createElement(r.Z, { style: a ? c.progressBarContainerCompact : c.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, n.createElement(o.Z, { "aria-describedby": h, "aria-valuemax": b, colorValue: y, progress: g / b, progressStyle: v, style: w })));
            };
            const c = u.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                m = n.memo(d);
        },
        98538: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(202784),
                r = a(325686),
                s = a(731708),
                l = a(891198),
                o = a(280278),
                i = a(392237);
            const u = "subtext1",
                d = n.createContext({ onMedia: !1 });
            class c extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, l.Gb)(e) !== (0, l.wl)(e) ? { label: (0, l.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: a, onPress: r } = this.props;
                    return n.createElement(s.ZP, { color: a ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: r }, n.createElement(d.Provider, { value: { onMedia: a } }, e));
                }
            }
            (c.Group = (e) =>
                n.createElement(
                    r.Z,
                    { style: [m.row, e.style] },
                    n.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, a) => n.createElement(r.Z, { key: t, style: t < a.length - 1 && m.groupItemNonLast }, e)),
                )),
                (c.Label = ({ children: e, style: t }) => n.createElement(d.Consumer, null, ({ onMedia: a }) => n.createElement(s.ZP, { children: e, color: a ? "white" : "gray700", size: u, style: t }))),
                (c.Value = ({ animated: e, children: t, count: a, style: r, weight: l = "bold" }) => n.createElement(d.Consumer, null, ({ onMedia: i }) => (e ? n.createElement(o.ZP, { children: t, count: a, size: u, style: r, weight: l }) : n.createElement(s.ZP, { children: t, color: i ? "white" : "text", size: u, style: r, weight: l }))));
            const m = i.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                p = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SettingsRevamp~ondemand.SettingsMonetization.3619f2ea.js.map
