"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-6107ac1a"],
    {
        904368: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AwardsDiamonds_user", selections: [{ alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "awards_revenue", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "revenue_since_last_payout_in_diamonds", storageKey: null }], storageKey: null }], type: "User", abstractKey: null, hash: "13e2e1fb85b37a208cdf11443c07510e" };
            const l = n;
        },
        923747: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = {
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
            const l = n;
        },
        228715: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AwardsList_awardsHistorySlice", selections: [{ args: null, kind: "FragmentSpread", name: "useMonetizationHistory_awardsHistorySlice" }], type: "TweetAwardsHistorySlice", abstractKey: null, hash: "cf591448499c495aedc4003de437d59d" };
            const l = n;
        },
        181188: (e, t, a) => {
            a.d(t, { Z: () => l });
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
            const l = n;
        },
        779610: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                l = a(325686),
                s = a(191796),
                r = a(58399),
                i = a(731708),
                o = a(952428),
                c = a(392237);
            const d = (e) => {
                    const { decoration: t, description: a, disabled: d = !1, isActive: p = !1, label: m, link: g, onPress: h, paddingHorizontal: b, renderRightContent: y, role: f = "tab", styleOverride: k, testID: w = "pivot", thumbnail: C, thumbnailSize: x, withoutArrow: v = !1 } = e,
                        _ = [u.thumbnailContainer, "medium" === x && u.thumbnailContainerMedium],
                        S = "string" == typeof m ? n.createElement(i.ZP, null, m) : m,
                        Z = "object" == typeof g && g.external && !g.openInSameFrame,
                        E = a ? ("string" == typeof a ? n.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${w}-description` }, a) : a) : null,
                        R = n.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return n.createElement(o.Z, { "aria-selected": "tab" === f ? p : null, disabled: d, link: d ? void 0 : g, onPress: h, role: f, style: [u.root, R, d && u.disabled, k], testID: w, withInteractiveStyling: !!g || !!h }, n.createElement(l.Z, { style: u.contentContainer }, C ? n.createElement(l.Z, { style: _ }, C) : null, n.createElement(l.Z, { style: u.content }, S, E), y ? y() : null, (!g && !h) || d || v ? null : Z ? n.createElement(s.default, { style: u.icon }) : n.createElement(r.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        536606: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(202784),
                l = a(325686),
                s = a(731708),
                r = a(352924),
                i = a(822399),
                o = a(98538),
                c = a(392237);
            const d = (e) => {
                const { decoration: t, isCompact: a, progressBarConfig: d, statConfig: p, title: m, valueCurrent: g, valueMax: h } = e,
                    b = (0, r.F)(),
                    y = ((f = d), c.default.theme.colors[f?.color || "blue900"]);
                var f;
                const k = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    w = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"], height: c.default.theme.spaces[e?.height || "space8"], backgroundColor: c.default.theme.colors.gray50 };
                    })(d);
                return n.createElement(l.Z, { style: u.root }, n.createElement(l.Z, { style: u.decoration }, t), n.createElement(l.Z, { style: u.title }, n.createElement(s.ZP, { size: "subtext2", weight: "medium" }, m)), n.createElement(l.Z, { id: b, style: u.valueLabel }, p.value ? n.createElement(o.Z, null, n.createElement(o.Z.Value, null, p.value), n.createElement(o.Z.Label, null, p.label)) : n.createElement(s.ZP, { weight: "bold" }, p.label)), n.createElement(l.Z, { style: a ? u.progressBarContainerCompact : u.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, n.createElement(i.Z, { "aria-describedby": b, "aria-valuemax": h, colorValue: y, progress: g / h, progressStyle: k, style: w })));
            };
            const u = c.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                p = n.memo(d);
        },
        98538: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(202784),
                l = a(325686),
                s = a(731708),
                r = a(891198),
                i = a(280278),
                o = a(392237);
            const c = "subtext1",
                d = n.createContext({ onMedia: !1 });
            class u extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, r.Gb)(e) !== (0, r.wl)(e) ? { label: (0, r.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: a, onPress: l } = this.props;
                    return n.createElement(s.ZP, { color: a ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: l }, n.createElement(d.Provider, { value: { onMedia: a } }, e));
                }
            }
            (u.Group = (e) =>
                n.createElement(
                    l.Z,
                    { style: [p.row, e.style] },
                    n.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, a) => n.createElement(l.Z, { key: t, style: t < a.length - 1 && p.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => n.createElement(d.Consumer, null, ({ onMedia: a }) => n.createElement(s.ZP, { children: e, color: a ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: a, style: l, weight: r = "bold" }) => n.createElement(d.Consumer, null, ({ onMedia: o }) => (e ? n.createElement(i.ZP, { children: t, count: a, size: c, style: l, weight: r }) : n.createElement(s.ZP, { children: t, color: o ? "white" : "text", size: c, style: l, weight: r }))));
            const p = o.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                m = u;
        },
        403556: (e, t, a) => {
            a.d(t, { Z: () => S });
            var n = a(807896),
                l = a(202784),
                s = a(194504),
                r = a(235902),
                i = a(392237),
                o = a(325686),
                c = a(332920),
                d = a.n(c),
                u = a(912021),
                p = a(516951),
                m = a(731708),
                g = a(310088),
                h = a(175993),
                b = a(58881),
                y = a(530732);
            const f = d().d2414d31,
                k = () => d().ce4e85ae,
                w = d().fb9f6f39;
            class C extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: a, query: n, state: l } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: n, method: "push", state: { ...l, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, a, n) => {
                            const l = i.default.theme.colors.text,
                                s = i.default.theme.colors.gray700;
                            return a || n ? (e || t ? l : s) : e ? l : s;
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
                    const { Icon: e, "aria-label": t, badgeCount: a, badgePip: n, children: s, color: r, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: h, retainScrollPosition: C, style: v, to: _ } = this.props,
                        { location: S } = this.state,
                        Z = _ ? this._getMemoizedLink(_, C) : void 0,
                        E = c ? c(_) : S?.pathname === Z?.pathname,
                        R = b.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text, insetFocusRing: !0 }),
                        P = h ? "medium" : E ? "bold" : "medium";
                    return l.createElement(y.Z, { "aria-label": t, "aria-selected": E, focusable: !!E, interactiveStyles: R, link: Z, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? x.pill : x.link, u && E ? x.active : null, d ? (u ? x.compactPill : x.compactLink) : null, p ? x.roundedRect : null, v], withoutInteractiveStyles: h || u }, ({ isFocused: t, isHovered: c }) => l.createElement(o.Z, { style: u && x.flexGrow }, l.createElement(m.ZP, { size: h ? "headline2" : void 0, style: [x.text, { color: this._getTextColor(E, c, h, u) }, d && x.compactText, h && t && x.focusedText], weight: P }, e && l.createElement(e, { style: x.icon }), s, h || u ? null : l.createElement(o.Z, { style: E && [x.border, { backgroundColor: i.default.theme.colors[r] }] })), a ? l.createElement(g.Z, { count: a, standalone: !0, style: [x.badge, a >= 10 && x.multiDigitBadge, a >= 20 && x.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: f, withBorder: !1 }) : n ? l.createElement(g.Z, { pip: !0, standalone: !0, style: x.badgePip, textColor: "red500", unreadCountLabel: k, withBorder: !1 }) : null));
                }
            }
            (C.contextType = h.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const x = i.default.create((e) => ({
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
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                v = C,
                _ = i.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                S = ({ alignFirstItem: e, "aria-label": t, isCompact: a, isPillLink: i, isRoundedRect: o, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = r.ZP.useProps(),
                        g = m() && !i,
                        h = l.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: s, ...r }, c) => {
                                    const d = g ? [_.linkRedesign, 0 === c && _.firstLinkRedesign, e && 0 === c && _.withNoPaddingStart] : void 0;
                                    return l.createElement(v, (0, n.Z)({ viewType: s }, r, { isCompact: a, isPillLink: i, isRoundedRect: o, isWebRedesign: g, style: d }), t);
                                }),
                            [e, a, i, o, g, c],
                        );
                    return l.createElement(s.Z, { "aria-label": t, buttonsContainerStyle: i && _.gap, childrenStyle: !g && _.flexGrow, key: p, style: [i ? null : _.segmentedControl, g && _.leftAligned, d], visibleItemIndex: u }, h);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-6107ac1a.04a93c8a.js.map
