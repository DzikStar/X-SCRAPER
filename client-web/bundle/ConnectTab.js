"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConnectTab"],
    {
        233935: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(202784),
                a = n(154003),
                s = n(392237),
                i = n(111677),
                r = n.n(i),
                l = n(698891);
            const c = "settingsAppBar",
                d = r().bb081ea2,
                p = o.memo(({ onPress: e, pullRight: t, to: n }) => o.createElement(a.ZP, { "aria-label": d, hoverLabel: { label: d }, icon: o.createElement(l.default, null), link: n, onPress: e, pullRight: t, style: u.button, testID: c, type: "primaryText" })),
                u = s.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                m = p;
        },
        349035: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                a = n(272175);
            const s = (0, n(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), o.createElement(a.ql, null, o.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                a = n(202784),
                s = n(107267),
                i = n(403556),
                r = n(791632);
            const l = (e) => {
                    const t = (0, s.useHistory)();
                    return a.createElement(i.Z, (0, o.Z)({}, e, { isCompact: (0, r.HD)(t) }));
                },
                c = a.memo(l);
        },
        56851: (e, t, n) => {
            n.d(t, { Z: () => b });
            var o = n(202784),
                a = n(420740),
                s = n(108362),
                i = n(731708),
                r = n(154003),
                l = n(392237),
                c = n(111677),
                d = n.n(c),
                p = n(349035);
            const u = "error-detail",
                m = d().e49537c2,
                h = d().a9ae1e78;
            class b extends o.PureComponent {
                render() {
                    return o.createElement(a.Z, { testID: u }, o.createElement(p.Z, null), o.createElement(s.Z, { style: g.root }, o.createElement(i.ZP, { align: "center", color: "gray700", style: g.retryText }, m), o.createElement(r.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, h)));
                }
            }
            const g = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        756007: (e, t, n) => {
            n.r(t), n.d(t, { ConnectTabs: () => Z, TabConfig: () => T, default: () => W });
            var o = n(202784),
                a = n(392237),
                s = n(111677),
                i = n.n(s),
                r = n(233935),
                l = n(718e3),
                c = n(252021),
                d = n(507651),
                p = n(443781),
                u = n(56851),
                m = n(810641),
                h = n(952793),
                b = n(163889),
                g = n(847933),
                f = n(725516),
                y = n(644829),
                C = n(750085),
                x = n(218951);
            var _ = n(2430);
            const k = (0, n(668214).Z)()
                    .propsFromState(() => ({ cursor: (0, _.jK)("cursor"), moduleId: (0, _.jK)("module_id"), moduleName: (0, _.jK)("module_name"), subtitle: (0, _.jK)("subtitle"), templateName: (0, _.KT)("template_name"), title: (0, _.jK)("title"), userId: (0, _.KT)("user_id"), isCreatorOnly: (0, _.KT)("is_creator_only") }))
                    .withAnalytics({ page: "people" }),
                Z = Object.freeze({ FOLLOWS: "follows", CREATORS: "creators" }),
                R = i().a526aa66,
                E = i().b4f8b518,
                w = [Z.FOLLOWS, Z.CREATORS],
                T = Object.freeze({ [Z.FOLLOWS]: { label: R, url: "/i/connect_people" }, [Z.CREATORS]: { label: E, url: "/i/connect_people?is_creator_only=true" } }),
                v = i().b5298d92,
                S = o.createElement(r.Z, { pullRight: !0, to: "/settings/contacts" }),
                P = (e) => (e === g.Z.NOT_FOUND ? o.createElement(u.Z, null) : ((0, b.ZP)(`Unhandled timeline unavailable reason: ${e}`), null)),
                I = () => o.createElement(u.Z, null),
                L = o.createElement(l.Z, { withWhoToFollow: !1 }),
                B = (e) => {
                    const { url: t } = T[e];
                    return t;
                },
                O = a.default.create((e) => ({ connectTabs: { marginBottom: e.spaces.space8 } })),
                W = k(({ cursor: e, history: t, isCreatorOnly: n, moduleId: a, moduleName: s, subtitle: i, templateName: r, title: l, userId: u }) => {
                    const { viewerUserId: b } = o.useContext(p.rC),
                        g = (0, f.z)(),
                        _ = (0, h.hC)("creator_subscriptions_connect_tab_enabled"),
                        k = _ && "true" === n,
                        R = k ? Z.CREATORS : Z.FOLLOWS,
                        E = o.useMemo(
                            () =>
                                (function (e) {
                                    const { is_creator_only: t, module_id: n, template_name: o, user_id: a } = e,
                                        s = o ?? "default",
                                        i = n ?? "default",
                                        r = a ?? "default",
                                        l = t ? "creators" : "default",
                                        c = { contextualUserId: a, ...(t ? { isCreatorOnlyConnectTab: !0 } : null) };
                                    return (0, x.Z)({ timelineId: `connect-tab-graphql-${s}-${i}-${r}-${l}`, network: { getEndpoint: (e) => e.withEndpoint(y.Z).fetchRichConnectTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, count: e, context: JSON.stringify(c) }) }, formatResponse: C.Z, context: "CONNECT_TAB_GRAPHQL", perfKey: "connectTabGraphQL" });
                                })({ template_name: r, module_name: s, module_id: a, cursor: e, title: l, subtitle: i, user_id: u === b ? void 0 : u, is_creator_only: k }),
                            [r, s, a, e, l, i, u, b, k],
                        ),
                        W = ((e) => {
                            const t = w.indexOf(e);
                            return t > -1 ? t : 0;
                        })(R),
                        $ = o.useMemo(
                            () =>
                                w.map((e) => ({
                                    key: e,
                                    label: T[e].label,
                                    isActive: () => e === R,
                                    to: { pathname: B(e) },
                                    onClick: () => {
                                        g.scribe({ action: "click", element: "tab", section: `connect_${e}` });
                                    },
                                })),
                            [g, R],
                        ),
                        j = o.useMemo(() => o.createElement(o.Fragment, null, _ ? o.createElement(d.Z, { links: $, style: O.connectTabs, visibleItemIndex: W }) : null, o.createElement(m.Z, { module: E, renderEmptyState: I, renderUnavailable: P, title: v })), [_, E, $, W]);
                    return o.createElement(c.Z, { backLocation: "/", history: t, primaryContent: j, rightControl: S, sidebarContent: L, title: v });
                });
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => E });
            var o = n(807896),
                a = n(202784),
                s = n(194504),
                i = n(235902),
                r = n(392237),
                l = n(325686),
                c = n(111677),
                d = n.n(c),
                p = n(912021),
                u = n(516951),
                m = n(731708),
                h = n(310088),
                b = n(175993),
                g = n(58881),
                f = n(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class _ extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: n, query: o, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: o, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, o) => {
                            const a = r.default.theme.colors.text,
                                s = r.default.theme.colors.gray700;
                            return n || o ? (e || t ? a : s) : e ? a : s;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: o, children: s, color: i, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: b, retainScrollPosition: _, style: Z, to: R } = this.props,
                        { location: E } = this.state,
                        w = R ? this._getMemoizedLink(R, _) : void 0,
                        T = c ? c(R) : E?.pathname === w?.pathname,
                        v = g.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0 }),
                        S = b ? "medium" : T ? "bold" : "medium";
                    return a.createElement(f.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: v, link: w, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? k.pill : k.link, p && T ? k.active : null, d ? (p ? k.compactPill : k.compactLink) : null, u ? k.roundedRect : null, Z], withoutInteractiveStyles: b || p }, ({ isFocused: t, isHovered: c }) => a.createElement(l.Z, { style: p && k.flexGrow }, a.createElement(m.ZP, { size: b ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(T, c, b, p) }, d && k.compactText, b && t && k.focusedText], weight: S }, e && a.createElement(e, { style: k.icon }), s, b || p ? null : a.createElement(l.Z, { style: T && [k.border, { backgroundColor: r.default.theme.colors[i] }] })), n ? a.createElement(h.Z, { count: n, standalone: !0, style: [k.badge, n >= 10 && k.multiDigitBadge, n >= 20 && k.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: y, withBorder: !1 }) : o ? a.createElement(h.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (_.contextType = b.Z), (_.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const k = r.default.create((e) => ({
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
                Z = _,
                R = r.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                E = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: r, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = i.ZP.useProps(),
                        h = m() && !r,
                        b = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: s, ...i }, c) => {
                                    const d = h ? [R.linkRedesign, 0 === c && R.firstLinkRedesign, e && 0 === c && R.withNoPaddingStart] : void 0;
                                    return a.createElement(Z, (0, o.Z)({ viewType: s }, i, { isCompact: n, isPillLink: r, isRoundedRect: l, isWebRedesign: h, style: d }), t);
                                }),
                            [e, n, r, l, h, c],
                        );
                    return a.createElement(s.Z, { "aria-label": t, buttonsContainerStyle: r && R.gap, childrenStyle: !h && R.flexGrow, key: u, style: [r ? null : R.segmentedControl, h && R.leftAligned, d], visibleItemIndex: p }, b);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConnectTab.63c568ca.js.map
