"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConnectTab"],
    {
        233935: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(202784),
                a = o(154003),
                l = o(392237),
                r = o(111677),
                s = o.n(r),
                i = o(698891);
            const c = "settingsAppBar",
                d = s().bb081ea2,
                p = n.memo(({ onPress: e, pullRight: t, to: o }) => n.createElement(a.ZP, { "aria-label": d, hoverLabel: { label: d }, icon: n.createElement(i.default, null), link: o, onPress: e, pullRight: t, style: u.button, testID: c, type: "primaryText" })),
                u = l.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                m = p;
        },
        349035: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                a = o(272175);
            const l = (0, o(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(a.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                a = o(202784),
                l = o(107267),
                r = o(403556),
                s = o(791632);
            const i = (e) => {
                    const t = (0, l.useHistory)(),
                        { isCompact: o, ...i } = e;
                    return a.createElement(r.Z, (0, n.Z)({}, i, { isCompact: o || (0, s.HD)(t) }));
                },
                c = a.memo(i);
        },
        56851: (e, t, o) => {
            o.d(t, { Z: () => b });
            var n = o(202784),
                a = o(420740),
                l = o(108362),
                r = o(731708),
                s = o(154003),
                i = o(392237),
                c = o(111677),
                d = o.n(c),
                p = o(349035);
            const u = "error-detail",
                m = d().e49537c2,
                g = d().a9ae1e78;
            class b extends n.PureComponent {
                render() {
                    return n.createElement(a.Z, { testID: u }, n.createElement(p.Z, null), n.createElement(l.Z, { style: h.root }, n.createElement(r.ZP, { align: "center", color: "gray700", style: h.retryText }, m), n.createElement(s.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, g)));
                }
            }
            const h = i.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        756007: (e, t, o) => {
            o.r(t), o.d(t, { ConnectTabs: () => k, TabConfig: () => R, default: () => O });
            var n = o(202784),
                a = o(392237),
                l = o(111677),
                r = o.n(l),
                s = o(233935),
                i = o(718e3),
                c = o(252021),
                d = o(507651),
                p = o(443781),
                u = o(56851),
                m = o(810641),
                g = o(952793),
                b = o(163889),
                h = o(847933),
                f = o(725516),
                y = o(644829),
                C = o(750085),
                x = o(218951);
            var _ = o(2430);
            const S = (0, o(668214).Z)()
                    .propsFromState(() => ({ cursor: (0, _.jK)("cursor"), moduleId: (0, _.jK)("module_id"), moduleName: (0, _.jK)("module_name"), subtitle: (0, _.jK)("subtitle"), templateName: (0, _.KT)("template_name"), title: (0, _.jK)("title"), userId: (0, _.KT)("user_id"), isCreatorOnly: (0, _.KT)("is_creator_only") }))
                    .withAnalytics({ page: "people" }),
                k = Object.freeze({ FOLLOWS: "follows", CREATORS: "creators" }),
                v = r().a526aa66,
                Z = r().b4f8b518,
                T = [k.FOLLOWS, k.CREATORS],
                R = Object.freeze({ [k.FOLLOWS]: { label: v, url: "/i/connect_people" }, [k.CREATORS]: { label: Z, url: "/i/connect_people?is_creator_only=true" } }),
                E = r().b5298d92,
                w = n.createElement(s.Z, { pullRight: !0, to: "/settings/contacts" }),
                P = (e) => (e === h.Z.NOT_FOUND ? n.createElement(u.Z, null) : ((0, b.ZP)(`Unhandled timeline unavailable reason: ${e}`), null)),
                W = () => n.createElement(u.Z, null),
                I = n.createElement(i.Z, { withWhoToFollow: !1 }),
                L = (e) => {
                    const { url: t } = R[e];
                    return t;
                },
                B = a.default.create((e) => ({ connectTabs: { marginBottom: e.spaces.space8 } })),
                O = S(({ cursor: e, history: t, isCreatorOnly: o, moduleId: a, moduleName: l, subtitle: r, templateName: s, title: i, userId: u }) => {
                    const { viewerUserId: b } = n.useContext(p.rC),
                        h = (0, f.z)(),
                        _ = (0, g.hC)("creator_subscriptions_connect_tab_enabled"),
                        S = _ && "true" === o,
                        v = S ? k.CREATORS : k.FOLLOWS,
                        Z = n.useMemo(
                            () =>
                                (function (e) {
                                    const { is_creator_only: t, module_id: o, template_name: n, user_id: a } = e,
                                        l = n ?? "default",
                                        r = o ?? "default",
                                        s = a ?? "default",
                                        i = t ? "creators" : "default",
                                        c = { contextualUserId: a, ...(t ? { isCreatorOnlyConnectTab: !0 } : null) };
                                    return (0, x.Z)({ timelineId: `connect-tab-graphql-${l}-${r}-${s}-${i}`, network: { getEndpoint: (e) => e.withEndpoint(y.Z).fetchRichConnectTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, count: e, context: JSON.stringify(c) }) }, formatResponse: C.Z, context: "CONNECT_TAB_GRAPHQL", perfKey: "connectTabGraphQL" });
                                })({ template_name: s, module_name: l, module_id: a, cursor: e, title: i, subtitle: r, user_id: u === b ? void 0 : u, is_creator_only: S }),
                            [s, l, a, e, i, r, u, b, S],
                        ),
                        O = ((e) => {
                            const t = T.indexOf(e);
                            return t > -1 ? t : 0;
                        })(v),
                        z = n.useMemo(
                            () =>
                                T.map((e) => ({
                                    key: e,
                                    label: R[e].label,
                                    isActive: () => e === v,
                                    to: { pathname: L(e) },
                                    onClick: () => {
                                        h.scribe({ action: "click", element: "tab", section: `connect_${e}` });
                                    },
                                })),
                            [h, v],
                        ),
                        $ = n.useMemo(() => n.createElement(n.Fragment, null, _ ? n.createElement(d.Z, { links: z, style: B.connectTabs, visibleItemIndex: O }) : null, n.createElement(m.Z, { module: Z, renderEmptyState: W, renderUnavailable: P, title: E })), [_, Z, z, O]);
                    return n.createElement(c.Z, { backLocation: "/", history: t, primaryContent: $, rightControl: w, sidebarContent: I, title: E });
                });
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => Z });
            var n = o(807896),
                a = o(202784),
                l = o(194504),
                r = o(235902),
                s = o(392237),
                i = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                m = o(731708),
                g = o(310088),
                b = o(175993),
                h = o(58881),
                f = o(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class _ extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: n, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: n, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, n) => {
                            const a = s.default.theme.colors.text,
                                l = s.default.theme.colors.gray700;
                            return o || n ? (e || t ? a : l) : e ? a : l;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: n, children: l, color: r, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: b, retainScrollPosition: _, style: k, to: v } = this.props,
                        { location: Z } = this.state,
                        T = v ? this._getMemoizedLink(v, _) : void 0,
                        R = c ? c(v) : Z?.pathname === T?.pathname,
                        E = h.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? S.pillHoverStyle.backgroundColor : void 0 }),
                        w = b ? "medium" : R ? "bold" : "medium";
                    return a.createElement(f.Z, { "aria-label": t, "aria-selected": R, focusable: !!R, interactiveStyles: E, link: T, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [S.pillStyle] : [S.link]), ...(p && R ? [S.pillActiveStyle] : []), d ? (p ? S.compactPill : S.compactLink) : null, u ? S.roundedRect : null, k], withoutInteractiveStyles: b }, ({ isFocused: t, isHovered: c }) => a.createElement(i.Z, { style: p && S.flexGrow }, a.createElement(m.ZP, { size: b ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(R, c, b, p) }, d && S.compactText, b && t && S.focusedText, p && S.pillTextStyle, p && R && S.pillActiveTextStyle, p && c && S.pillHoverTextStyle], weight: w }, e && a.createElement(e, { style: S.icon }), l, b || p ? null : a.createElement(i.Z, { style: R && [S.border, { backgroundColor: s.default.theme.colors[r] }] })), o ? a.createElement(g.Z, { count: o, standalone: !0, style: [S.badge, o >= 10 && S.multiDigitBadge, o >= 20 && S.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: y, withBorder: !1 }) : n ? a.createElement(g.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (_.contextType = b.Z), (_.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const S = s.default.create((e) => ({
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
                k = _,
                v = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                Z = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: s, isRoundedRect: i, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = r.ZP.useProps(),
                        g = m() && !s,
                        b = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: l, ...r }, c) => {
                                    const d = g ? [v.linkRedesign, 0 === c && v.firstLinkRedesign, e && 0 === c && v.withNoPaddingStart] : void 0;
                                    return a.createElement(k, (0, n.Z)({ viewType: l }, r, { isCompact: o, isPillLink: s, isRoundedRect: i, isWebRedesign: g, style: d }), t);
                                }),
                            [e, o, s, i, g, c],
                        );
                    return a.createElement(l.Z, { "aria-label": t, buttonsContainerStyle: s && v.gap, childrenStyle: !g && v.flexGrow, key: u, style: [s ? null : v.segmentedControl, g && v.leftAligned, d], visibleItemIndex: p }, b);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConnectTab.667d0d8a.js.map
