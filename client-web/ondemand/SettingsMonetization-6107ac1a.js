"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-6107ac1a"],
    {
        904368: (e, t, a) => {
            a.d(t, { Z: () => n });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AwardsDiamonds_user", selections: [{ alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "awards_revenue", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "revenue_since_last_payout_in_diamonds", storageKey: null }], storageKey: null }], type: "User", abstractKey: null, hash: "13e2e1fb85b37a208cdf11443c07510e" };
            const n = l;
        },
        923747: (e, t, a) => {
            a.d(t, { Z: () => n });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "AwardsListItem_awardsPurchase",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "transaction_id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "is_anonymous", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "total_coins_worth", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "sender_results",
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
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            { args: null, kind: "FragmentSpread", name: "UserAvatar_user" },
                                            { args: null, kind: "FragmentSpread", name: "UserName_user" },
                                        ],
                                        type: "User",
                                        abstractKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], type: "Tweet", abstractKey: null }], storageKey: null }], storageKey: null },
                ],
                type: "TweetAwardDetail",
                abstractKey: null,
                hash: "632551ab92d8e31d280d0b9a098dc3c1",
            };
            const n = l;
        },
        228715: (e, t, a) => {
            a.d(t, { Z: () => n });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AwardsList_awardsHistorySlice", selections: [{ args: null, kind: "FragmentSpread", name: "useMonetizationHistory_awardsHistorySlice" }], type: "TweetAwardsHistorySlice", abstractKey: null, hash: "cf591448499c495aedc4003de437d59d" };
            const n = l;
        },
        181188: (e, t, a) => {
            a.d(t, { Z: () => n });
            var l = {
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
            const n = l;
        },
        536606: (e, t, a) => {
            a.d(t, { Z: () => p });
            var l = a(202784),
                n = a(325686),
                r = a(731708),
                s = a(352924),
                o = a(822399),
                i = a(98538),
                c = a(392237);
            const d = (e) => {
                const { decoration: t, isCompact: a, progressBarConfig: d, statConfig: p, title: m, valueCurrent: g, valueMax: h } = e,
                    y = (0, s.F)(),
                    b = ((f = d), c.default.theme.colors[f?.color || "blue900"]);
                var f;
                const k = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    x = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"], height: c.default.theme.spaces[e?.height || "space8"], backgroundColor: c.default.theme.colors.gray50 };
                    })(d);
                return l.createElement(n.Z, { style: u.root }, l.createElement(n.Z, { style: u.decoration }, t), l.createElement(n.Z, { style: u.title }, l.createElement(r.ZP, { size: "subtext2", weight: "medium" }, m)), l.createElement(n.Z, { id: y, style: u.valueLabel }, p.value ? l.createElement(i.Z, null, l.createElement(i.Z.Value, null, p.value), l.createElement(i.Z.Label, null, p.label)) : l.createElement(r.ZP, { weight: "bold" }, p.label)), l.createElement(n.Z, { style: a ? u.progressBarContainerCompact : u.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, l.createElement(o.Z, { "aria-describedby": y, "aria-valuemax": h, colorValue: b, progress: g / h, progressStyle: k, style: x })));
            };
            const u = c.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                p = l.memo(d);
        },
        98538: (e, t, a) => {
            a.d(t, { Z: () => m });
            var l = a(202784),
                n = a(325686),
                r = a(731708),
                s = a(891198),
                o = a(280278),
                i = a(392237);
            const c = "subtext1",
                d = l.createContext({ onMedia: !1 });
            class u extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, s.Gb)(e) !== (0, s.wl)(e) ? { label: (0, s.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: a, onPress: n } = this.props;
                    return l.createElement(r.ZP, { color: a ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: n }, l.createElement(d.Provider, { value: { onMedia: a } }, e));
                }
            }
            (u.Group = (e) =>
                l.createElement(
                    n.Z,
                    { style: [p.row, e.style] },
                    l.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, a) => l.createElement(n.Z, { key: t, style: t < a.length - 1 && p.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => l.createElement(d.Consumer, null, ({ onMedia: a }) => l.createElement(r.ZP, { children: e, color: a ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: a, style: n, weight: s = "bold" }) => l.createElement(d.Consumer, null, ({ onMedia: i }) => (e ? l.createElement(o.ZP, { children: t, count: a, size: c, style: n, weight: s }) : l.createElement(r.ZP, { children: t, color: i ? "white" : "text", size: c, style: n, weight: s }))));
            const p = i.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                m = u;
        },
        403556: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var l = a(807896),
                n = a(202784),
                r = a(194504),
                s = a(235902),
                o = a(392237),
                i = a(325686),
                c = a(111677),
                d = a.n(c),
                u = a(912021),
                p = a(516951),
                m = a(731708),
                g = a(310088),
                h = a(175993),
                y = a(58881),
                b = a(530732);
            const f = d().d2414d31,
                k = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class w extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: a, query: l, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: l, method: "push", state: { ...n, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, a, l) => {
                            const n = o.default.theme.colors.text,
                                r = o.default.theme.colors.gray700;
                            return a || l ? (e || t ? n : r) : e ? n : r;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: a, badgePip: l, children: r, color: s, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: h, retainScrollPosition: w, style: v, to: S } = this.props,
                        { location: _ } = this.state,
                        Z = S ? this._getMemoizedLink(S, w) : void 0,
                        R = c ? c(S) : _?.pathname === Z?.pathname,
                        E = y.Z.generate({ backgroundColor: "transparent", color: o.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? C.pillHoverStyle.backgroundColor : void 0 }),
                        P = h ? "medium" : R ? "bold" : "medium";
                    return n.createElement(b.Z, { "aria-label": t, "aria-selected": R, focusable: !!R, interactiveStyles: E, link: Z, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [C.pillStyle] : [C.link]), ...(u && R ? [C.pillActiveStyle] : []), d ? (u ? C.compactPill : C.compactLink) : null, p ? C.roundedRect : null, v], withoutInteractiveStyles: h }, ({ isFocused: t, isHovered: c }) => n.createElement(i.Z, { style: u && C.flexGrow }, n.createElement(m.ZP, { size: h ? "headline2" : void 0, style: [C.text, { color: this._getTextColor(R, c, h, u) }, d && C.compactText, h && t && C.focusedText, u && C.pillTextStyle, u && R && C.pillActiveTextStyle, u && c && C.pillHoverTextStyle], weight: P }, e && n.createElement(e, { style: C.icon }), r, h || u ? null : n.createElement(i.Z, { style: R && [C.border, { backgroundColor: o.default.theme.colors[s] }] })), a ? n.createElement(g.Z, { count: a, standalone: !0, style: [C.badge, a >= 10 && C.multiDigitBadge, a >= 20 && C.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: f, withBorder: !1 }) : l ? n.createElement(g.Z, { pip: !0, standalone: !0, style: C.badgePip, textColor: "red500", unreadCountLabel: k, withBorder: !1 }) : null));
                }
            }
            (w.contextType = h.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const C = o.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                v = w,
                S = o.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                _ = ({ alignFirstItem: e, "aria-label": t, isCompact: a, isPillLink: o, isRoundedRect: i, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = s.ZP.useProps(),
                        g = m() && !o,
                        h = n.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: r, ...s }, c) => {
                                    const d = g ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return n.createElement(v, (0, l.Z)({ viewType: r }, s, { isCompact: a, isPillLink: o, isRoundedRect: i, isWebRedesign: g, style: d }), t);
                                }),
                            [e, a, o, i, g, c],
                        );
                    return n.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: o && S.gap, childrenStyle: !g && S.flexGrow, key: p, style: [o ? null : S.segmentedControl, g && S.leftAligned, d], visibleItemIndex: u }, h);
                };
        },
        452693: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            var l = a(202784),
                n = a(890601),
                r = a(783427),
                s = a(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const i = o;
        },
        662678: (e, t, a) => {
            a.d(t, { G: () => n, Z: () => l });
            a(136728);
            const l = function (e, t) {
                return n(e, t);
            };
            function n(e, t) {
                return e.reduce(
                    (a, l, n) => {
                        const r = t ? t(l, n, e) : !!l;
                        return r && a[0].push(l), !r && a[1].push(l), a;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-6107ac1a.a8944d7a.js.map
