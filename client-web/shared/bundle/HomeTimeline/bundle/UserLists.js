"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.HomeTimeline~bundle.UserLists"],
    {
        789831: (e, t, o) => {
            o.d(t, { Z: () => c });
            var s = o(807896),
                a = o(202784),
                r = o(325686),
                n = o(392237),
                i = o(655352);
            const l = n.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: o, shouldRenderFab: n = !0, style: c, withoutBottomPadding: d, ...p }) => {
                    const u = t || r.Z,
                        m = n && !(0, i.ZP)();
                    return a.createElement(u, (0, s.Z)({}, p, { style: [m && !d && l.root, c] }), e, m ? o : null);
                };
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var s = o(807896),
                a = o(202784),
                r = o(107267),
                n = o(403556),
                i = o(791632);
            const l = (e) => {
                    const t = (0, r.useHistory)();
                    return a.createElement(n.Z, (0, s.Z)({}, e, { isCompact: (0, i.HD)(t) }));
                },
                c = a.memo(l);
        },
        387524: (e, t, o) => {
            o.d(t, { Z: () => g });
            var s = o(807896),
                a = o(202784),
                r = o(325686),
                n = o(292627),
                i = o(537392),
                l = o(392237),
                c = o(365023),
                d = o(392027),
                p = o(774654),
                u = o(725516),
                m = o(443781);
            const h = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${p.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                g = (e) => {
                    const { "aria-label": t, label: o, onPress: g, scribeComponent: b, ...f } = e,
                        { loggedInUserId: y } = a.useContext(m.rC),
                        C = (0, u.z)(),
                        x = a.useCallback(
                            (e) => {
                                C.scribe({ component: b, action: "click" }), g && g(e);
                            },
                            [C, g, b],
                        ),
                        Z = p.ZM.useCollapsibleNavBars(),
                        w = [...p.Ah({ elementPosition: "bottom" }), Z && h.fabStaysAboveSafeArea];
                    return y
                        ? a.createElement(
                              n.Z.FloatingAction,
                              null,
                              a.createElement(i.ZP, null, ({ windowWidth: e }) => {
                                  const n = e > l.default.theme.breakpoints.large,
                                      i = e > l.default.theme.breakpoints.medium,
                                      p = e < l.default.theme.breakpoints.micro,
                                      u = [h.root, i && h.rootMedium, n && h.rootLarge],
                                      m = [h.fab, n && h.fabLarge, p && h.fabMicro, w];
                                  return a.createElement(
                                      r.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: u },
                                      a.createElement(c.Z, { id: "FloatingActionButtonBase" }, (e, i) => a.createElement(r.Z, (0, s.Z)({ ref: e() }, i({ style: m })), a.createElement(d.Z, (0, s.Z)({}, f, { "aria-label": t, label: n ? o : void 0, onPress: x, style: p && h.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, o) => {
            o.d(t, { Z: () => l });
            o(136728);
            var s = o(202784),
                a = o(387524),
                r = o(635510);
            const n = "/compose/post";
            class i extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: o } = this.props,
                                s = { pathname: n, state: (t && t()) || {} };
                            o.push(s);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: o, scribeComponent: i } = this.props;
                    return s.createElement(a.Z, { "aria-label": e, href: n, icon: t, label: o, onPress: this._handlePress, scribeComponent: i, testID: r.Z.tweet });
                }
            }
            const l = i;
        },
        32677: (e, t, o) => {
            o.d(t, { Z: () => p });
            var s = o(202784),
                a = o(111677),
                r = o.n(a),
                n = o(186444),
                i = o(355883);
            const l = r().j0179e90,
                c = r().ee69d769({ verb: "" }),
                d = s.createElement(n.default, null),
                p = ({ getLocationState: e, history: t }) => s.createElement(i.Z, { "aria-label": l, getLocationState: e, history: t, icon: d, label: c, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, o) => {
            o.d(t, { Z: () => s });
            const s = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        506653: (e, t, o) => {
            o.d(t, { Z: () => n });
            var s = o(483557),
                a = o(750085),
                r = o(218951);
            const n = ({ listId: e, useRanked: t = !1 }) => (0, r.Z)({ timelineId: i({ listId: e, useRanked: t }), network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchTweetsGraphQL, getEndpointParams: ({ count: o, cursor: s }) => ({ listId: e, count: o, cursor: "string" == typeof s ? s : void 0, useRanked: t }) }, formatResponse: a.Z, context: "FETCH_LIST_TIMELINE_GRAPHQL", perfKey: "listTweetsGraphQL" });
            function i({ listId: e, useRanked: t = !1 }) {
                return `listTweets-GraphQL-${e}-${t ? "ranked" : "latest"}`;
            }
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => l });
            var s = o(202784),
                a = o(154003),
                r = o(392237);
            class n extends s.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: r, href: n, icon: l, label: c, onPress: d, renderMenu: p, style: u, testID: m } = this.props,
                        h = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return s.createElement(a.ZP, { "aria-label": e, backgroundColor: t, color: h, disabled: r, icon: l, link: n, onPress: d, renderMenu: p, size: "xLarge", style: [i.root, !c && i.iconOnly, u], testID: m }, c);
                }
            }
            n.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const i = r.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = n;
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => l });
            var s = o(202784),
                a = o(325686),
                r = o(235902),
                n = o(885015),
                i = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = r.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return o ? s.createElement(n.Z, { style: !t && c.root, withGutter: !0 }, s.createElement(a.Z, { style: c.gapColumn }, s.createElement(a.Z, { style: [c.gap, d] })), s.createElement(a.Z, { style: c.gapText }, o), s.createElement(a.Z, { style: c.gapColumn }, s.createElement(a.Z, { style: [c.gap, d] }))) : s.createElement(a.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var s = o(807896),
                a = o(202784),
                r = o(325686),
                n = o(392237);
            class i extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...n } = this.props,
                        i = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, l.column, o && l.withGutterColumn] }));
                    return a.createElement(r.Z, (0, s.Z)({ style: [t, l.root, o && l.withGutter] }, n), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const l = n.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => E });
            var s = o(807896),
                a = o(202784),
                r = o(194504),
                n = o(235902),
                i = o(392237),
                l = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                m = o(731708),
                h = o(310088),
                g = o(175993),
                b = o(58881),
                f = o(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class Z extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: s, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: s, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, s) => {
                            const a = i.default.theme.colors.text,
                                r = i.default.theme.colors.gray700;
                            return o || s ? (e || t ? a : r) : e ? a : r;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: s, children: r, color: n, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: Z, style: k, to: P } = this.props,
                        { location: E } = this.state,
                        v = P ? this._getMemoizedLink(P, Z) : void 0,
                        B = c ? c(P) : E?.pathname === v?.pathname,
                        R = b.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text, insetFocusRing: !0 }),
                        _ = g ? "medium" : B ? "bold" : "medium";
                    return a.createElement(f.Z, { "aria-label": t, "aria-selected": B, focusable: !!B, interactiveStyles: R, link: v, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? w.pill : w.link, p && B ? w.active : null, d ? (p ? w.compactPill : w.compactLink) : null, u ? w.roundedRect : null, k], withoutInteractiveStyles: g || p }, ({ isFocused: t, isHovered: c }) => a.createElement(l.Z, { style: p && w.flexGrow }, a.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(B, c, g, p) }, d && w.compactText, g && t && w.focusedText], weight: _ }, e && a.createElement(e, { style: w.icon }), r, g || p ? null : a.createElement(l.Z, { style: B && [w.border, { backgroundColor: i.default.theme.colors[n] }] })), o ? a.createElement(h.Z, { count: o, standalone: !0, style: [w.badge, o >= 10 && w.multiDigitBadge, o >= 20 && w.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: y, withBorder: !1 }) : s ? a.createElement(h.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (Z.contextType = g.Z), (Z.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const w = i.default.create((e) => ({
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
                k = Z,
                P = i.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                E = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: i, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = n.ZP.useProps(),
                        h = m() && !i,
                        g = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: r, ...n }, c) => {
                                    const d = h ? [P.linkRedesign, 0 === c && P.firstLinkRedesign, e && 0 === c && P.withNoPaddingStart] : void 0;
                                    return a.createElement(k, (0, s.Z)({ viewType: r }, n, { isCompact: o, isPillLink: i, isRoundedRect: l, isWebRedesign: h, style: d }), t);
                                }),
                            [e, o, i, l, h, c],
                        );
                    return a.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: i && P.gap, childrenStyle: !h && P.flexGrow, key: u, style: [i ? null : P.segmentedControl, h && P.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.HomeTimeline~bundle.UserLists.1eef1f7a.js.map
