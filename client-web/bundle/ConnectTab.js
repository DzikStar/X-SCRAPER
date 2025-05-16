"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConnectTab"],
    {
        233935: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(202784),
                a = o(154003),
                s = o(392237),
                i = o(332920),
                l = o.n(i),
                r = o(698891);
            const c = "settingsAppBar",
                d = l().bb081ea2,
                p = n.memo(({ onPress: e, pullRight: t, to: o }) => n.createElement(a.ZP, { "aria-label": d, hoverLabel: { label: d }, icon: n.createElement(r.default, null), link: o, onPress: e, pullRight: t, style: u.button, testID: c, type: "primaryText" })),
                u = s.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                m = p;
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                a = o(202784),
                s = o(107267),
                i = o(403556),
                l = o(791632);
            const r = (e) => {
                    const t = (0, s.useHistory)();
                    return a.createElement(i.Z, (0, n.Z)({}, e, { isCompact: (0, l.HD)(t) }));
                },
                c = a.memo(r);
        },
        756007: (e, t, o) => {
            o.r(t), o.d(t, { ConnectTabs: () => R, TabConfig: () => T, default: () => I });
            var n = o(202784),
                a = o(392237),
                s = o(332920),
                i = o.n(s),
                l = o(233935),
                r = o(718e3),
                c = o(252021),
                d = o(507651),
                p = o(443781),
                u = o(231035),
                m = o(810641),
                h = o(952793),
                b = o(163889),
                g = o(847933),
                f = o(725516),
                y = o(644829),
                C = o(750085),
                _ = o(218951);
            var x = o(2430);
            const k = (0, o(668214).Z)()
                    .propsFromState(() => ({ cursor: (0, x.jK)("cursor"), moduleId: (0, x.jK)("module_id"), moduleName: (0, x.jK)("module_name"), subtitle: (0, x.jK)("subtitle"), templateName: (0, x.KT)("template_name"), title: (0, x.jK)("title"), userId: (0, x.KT)("user_id"), isCreatorOnly: (0, x.KT)("is_creator_only") }))
                    .withAnalytics({ page: "people" }),
                R = Object.freeze({ FOLLOWS: "follows", CREATORS: "creators" }),
                Z = i().a526aa66,
                w = i().b4f8b518,
                S = [R.FOLLOWS, R.CREATORS],
                T = Object.freeze({ [R.FOLLOWS]: { label: Z, url: "/i/connect_people" }, [R.CREATORS]: { label: w, url: "/i/connect_people?is_creator_only=true" } }),
                v = i().b5298d92,
                E = n.createElement(l.Z, { pullRight: !0, to: "/settings/contacts" }),
                P = (e) => (e === g.Z.NOT_FOUND ? n.createElement(u.Z, null) : ((0, b.ZP)(`Unhandled timeline unavailable reason: ${e}`), null)),
                L = () => n.createElement(u.Z, null),
                O = n.createElement(r.Z, { withWhoToFollow: !1 }),
                W = (e) => {
                    const { url: t } = T[e];
                    return t;
                },
                B = a.default.create((e) => ({ connectTabs: { marginBottom: e.spaces.space8 } })),
                I = k(({ cursor: e, history: t, isCreatorOnly: o, moduleId: a, moduleName: s, subtitle: i, templateName: l, title: r, userId: u }) => {
                    const { viewerUserId: b } = n.useContext(p.rC),
                        g = (0, f.z)(),
                        x = (0, h.hC)("creator_subscriptions_connect_tab_enabled"),
                        k = x && "true" === o,
                        Z = k ? R.CREATORS : R.FOLLOWS,
                        w = n.useMemo(
                            () =>
                                (function (e) {
                                    const { is_creator_only: t, module_id: o, template_name: n, user_id: a } = e,
                                        s = n ?? "default",
                                        i = o ?? "default",
                                        l = a ?? "default",
                                        r = t ? "creators" : "default",
                                        c = { contextualUserId: a, ...(t ? { isCreatorOnlyConnectTab: !0 } : null) };
                                    return (0, _.Z)({ timelineId: `connect-tab-graphql-${s}-${i}-${l}-${r}`, network: { getEndpoint: (e) => e.withEndpoint(y.Z).fetchRichConnectTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, count: e, context: JSON.stringify(c) }) }, formatResponse: C.Z, context: "CONNECT_TAB_GRAPHQL", perfKey: "connectTabGraphQL" });
                                })({ template_name: l, module_name: s, module_id: a, cursor: e, title: r, subtitle: i, user_id: u === b ? void 0 : u, is_creator_only: k }),
                            [l, s, a, e, r, i, u, b, k],
                        ),
                        I = ((e) => {
                            const t = S.indexOf(e);
                            return t > -1 ? t : 0;
                        })(Z),
                        $ = n.useMemo(
                            () =>
                                S.map((e) => ({
                                    key: e,
                                    label: T[e].label,
                                    isActive: () => e === Z,
                                    to: { pathname: W(e) },
                                    onClick: () => {
                                        g.scribe({ action: "click", element: "tab", section: `connect_${e}` });
                                    },
                                })),
                            [g, Z],
                        ),
                        j = n.useMemo(() => n.createElement(n.Fragment, null, x ? n.createElement(d.Z, { links: $, style: B.connectTabs, visibleItemIndex: I }) : null, n.createElement(m.Z, { module: w, renderEmptyState: L, renderUnavailable: P, title: v })), [x, w, $, I]);
                    return n.createElement(c.Z, { backLocation: "/", history: t, primaryContent: j, rightControl: E, sidebarContent: O, title: v });
                });
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => w });
            var n = o(807896),
                a = o(202784),
                s = o(194504),
                i = o(235902),
                l = o(392237),
                r = o(325686),
                c = o(332920),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                m = o(731708),
                h = o(310088),
                b = o(175993),
                g = o(58881),
                f = o(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                _ = d().fb9f6f39;
            class x extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: n, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: n, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, n) => {
                            const a = l.default.theme.colors.text,
                                s = l.default.theme.colors.gray700;
                            return o || n ? (e || t ? a : s) : e ? a : s;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: n, children: s, color: i, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: b, retainScrollPosition: x, style: R, to: Z } = this.props,
                        { location: w } = this.state,
                        S = Z ? this._getMemoizedLink(Z, x) : void 0,
                        T = c ? c(Z) : w?.pathname === S?.pathname,
                        v = g.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0 }),
                        E = b ? "medium" : T ? "bold" : "medium";
                    return a.createElement(f.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: v, link: S, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? k.pill : k.link, p && T ? k.active : null, d ? (p ? k.compactPill : k.compactLink) : null, u ? k.roundedRect : null, R], withoutInteractiveStyles: b || p }, ({ isFocused: t, isHovered: c }) => a.createElement(r.Z, { style: p && k.flexGrow }, a.createElement(m.ZP, { size: b ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(T, c, b, p) }, d && k.compactText, b && t && k.focusedText], weight: E }, e && a.createElement(e, { style: k.icon }), s, b || p ? null : a.createElement(r.Z, { style: T && [k.border, { backgroundColor: l.default.theme.colors[i] }] })), o ? a.createElement(h.Z, { count: o, standalone: !0, style: [k.badge, o >= 10 && k.multiDigitBadge, o >= 20 && k.truncatedCountBadge], truncatedCountFormatter: _, unreadCountLabel: y, withBorder: !1 }) : n ? a.createElement(h.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (x.contextType = b.Z), (x.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const k = l.default.create((e) => ({
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
                R = x,
                Z = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                w = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: l, isRoundedRect: r, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = i.ZP.useProps(),
                        h = m() && !l,
                        b = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: s, ...i }, c) => {
                                    const d = h ? [Z.linkRedesign, 0 === c && Z.firstLinkRedesign, e && 0 === c && Z.withNoPaddingStart] : void 0;
                                    return a.createElement(R, (0, n.Z)({ viewType: s }, i, { isCompact: o, isPillLink: l, isRoundedRect: r, isWebRedesign: h, style: d }), t);
                                }),
                            [e, o, l, r, h, c],
                        );
                    return a.createElement(s.Z, { "aria-label": t, buttonsContainerStyle: l && Z.gap, childrenStyle: !h && Z.flexGrow, key: u, style: [l ? null : Z.segmentedControl, h && Z.leftAligned, d], visibleItemIndex: p }, b);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConnectTab.0cdc453a.js.map
