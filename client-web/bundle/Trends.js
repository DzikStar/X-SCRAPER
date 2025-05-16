"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Trends"],
    {
        740527: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(769471),
                o = n(934309),
                r = n(750085),
                i = n(401388),
                s = n(626421),
                l = n(497461);
            const c = (e) => {
                    const t = (0, l.$)(),
                        n = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const t = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, i.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t };
                        })(e),
                        a = ((e, t) => {
                            const { header: n } = t;
                            if (!n || "TopicPageHeader" !== n.__typename) return;
                            const { __typename: a, facepile: o, topic: r, ...i } = n,
                                l = o && (0, s.Zn)(e, o);
                            return { ...i, topicId: (0, s.S0)(e, r), facepile: l };
                        })(t, e),
                        o = ((e, t) => {
                            const { navBar: n } = t;
                            if (!n) return {};
                            switch (n.__typename) {
                                case "TitleNavBar":
                                    return { title: n.title, subtitle: n.subtitle };
                                case "TopicPageNavBar":
                                    return { navBar: { topicId: (0, s.S0)(e, n.topic), clientEventInfo: n.clientEventInfo }, title: n.topic.name, subtitle: void 0 };
                                default:
                                    return {};
                            }
                        })(t, e);
                    return { globalObjects: t, pageConfiguration: { id: e.id, tabs: n, header: a, navBar: o.navBar && o.navBar, title: o.title, subtitle: o.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                p = (e) => {
                    const t = "Timeline" === (n = e.body).__typename && n.timeline ? (0, r.Z)(n.timeline) : "SegmentedTimelines" === n.__typename && n.initialTimeline?.timeline.timeline ? (0, r.Z)(n.initialTimeline.timeline.timeline) : (0, r.Z)(o.cY);
                    var n;
                    const { globalObjects: i, pageConfiguration: s } = c(e);
                    return { ...t, globalObjects: (0, a.Z)(i, t.globalObjects), pageConfiguration: s };
                };
        },
        233935: (e, t, n) => {
            n.d(t, { Z: () => b });
            var a = n(202784),
                o = n(154003),
                r = n(392237),
                i = n(332920),
                s = n.n(i),
                l = n(698891);
            const c = "settingsAppBar",
                p = s().bb081ea2,
                d = a.memo(({ onPress: e, pullRight: t, to: n }) => a.createElement(o.ZP, { "aria-label": p, hoverLabel: { label: p }, icon: a.createElement(l.default, null), link: n, onPress: e, pullRight: t, style: m.button, testID: c, type: "primaryText" })),
                m = r.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                b = d;
        },
        789831: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(807896),
                o = n(202784),
                r = n(325686),
                i = n(392237),
                s = n(655352);
            const l = i.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: n, shouldRenderFab: i = !0, style: c, withoutBottomPadding: p, ...d }) => {
                    const m = t || r.Z,
                        b = i && !(0, s.ZP)();
                    return o.createElement(m, (0, a.Z)({}, d, { style: [b && !p && l.root, c] }), e, b ? n : null);
                };
        },
        387524: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(807896),
                o = n(202784),
                r = n(325686),
                i = n(292627),
                s = n(537392),
                l = n(392237),
                c = n(365023),
                p = n(392027),
                d = n(774654),
                m = n(725516),
                b = n(443781);
            const u = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${d.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                h = (e) => {
                    const { "aria-label": t, label: n, onPress: h, scribeComponent: g, ...f } = e,
                        { loggedInUserId: E } = o.useContext(b.rC),
                        Z = (0, m.z)(),
                        _ = o.useCallback(
                            (e) => {
                                Z.scribe({ component: g, action: "click" }), h && h(e);
                            },
                            [Z, h, g],
                        ),
                        y = d.ZM.useCollapsibleNavBars(),
                        v = [...d.Ah({ elementPosition: "bottom" }), y && u.fabStaysAboveSafeArea];
                    return E
                        ? o.createElement(
                              i.Z.FloatingAction,
                              null,
                              o.createElement(s.ZP, null, ({ windowWidth: e }) => {
                                  const i = e > l.default.theme.breakpoints.large,
                                      s = e > l.default.theme.breakpoints.medium,
                                      d = e < l.default.theme.breakpoints.micro,
                                      m = [u.root, s && u.rootMedium, i && u.rootLarge],
                                      b = [u.fab, i && u.fabLarge, d && u.fabMicro, v];
                                  return o.createElement(
                                      r.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: m },
                                      o.createElement(c.Z, { id: "FloatingActionButtonBase" }, (e, s) => o.createElement(r.Z, (0, a.Z)({ ref: e() }, s({ style: b })), o.createElement(p.Z, (0, a.Z)({}, f, { "aria-label": t, label: i ? n : void 0, onPress: _, style: d && u.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, n) => {
            n.d(t, { Z: () => l });
            n(136728);
            var a = n(202784),
                o = n(387524),
                r = n(635510);
            const i = "/compose/post";
            class s extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: n } = this.props,
                                a = { pathname: i, state: (t && t()) || {} };
                            n.push(a);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: n, scribeComponent: s } = this.props;
                    return a.createElement(o.Z, { "aria-label": e, href: i, icon: t, label: n, onPress: this._handlePress, scribeComponent: s, testID: r.Z.tweet });
                }
            }
            const l = s;
        },
        32677: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                o = n(332920),
                r = n.n(o),
                i = n(186444),
                s = n(355883);
            const l = r().j0179e90,
                c = r().ee69d769({ verb: "" }),
                p = a.createElement(i.default, null),
                d = ({ getLocationState: e, history: t }) => a.createElement(s.Z, { "aria-label": l, getLocationState: e, history: t, icon: p, label: c, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                o = n(500002),
                r = n(668214),
                i = n(997174),
                s = n(118823);
            const l = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: a },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: r, search: i },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const c = o || s;
                    ((c && o !== s) || (!c && n !== r) || a !== i || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const p = (0, o.ZP)(l(c));
        },
        371493: (e, t, n) => {
            n.d(t, { $N: () => Z, G0: () => E, Jj: () => _, O9: () => u, S: () => h, fy: () => g, jz: () => y, nm: () => f, qk: () => d, uI: () => m });
            var a = n(912021),
                o = n(644829),
                r = n(740527),
                i = n(750085),
                s = n(555875),
                l = n(899105),
                c = n(218951);
            const p = Object.freeze({ Trends: "trends" }),
                d = Object.freeze({ WebSidebar: "web_sidebar" }),
                m = "explore-",
                b = 9e5;
            const u = ({ contentType: e, displayLocation: t, exploreGraphQLEnabled: n = !1, focalTweetId: a, includePageConfiguration: i = !1, initialTabId: s, profileUserId: p }) => {
                    const d = e || t || "main",
                        u = (function (e, t, n, a) {
                            return n ? `${e}${t}-tweet-${n}` : a ? `${e}${t}-user-${a}` : `${e}${t}`;
                        })(n ? "explore-graphql-" : m, d, a, p),
                        h = { timelineId: u, formatResponse: l.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchExplore, getEndpointParams: (n) => ({ ...n, candidate_source: e, display_location: t, focal_tweet_id: a, include_page_configuration: i, initial_tab_id: s, profile_user_id: p, entity_tokens: !1 }) }, context: n ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${m}${d}`, staleIntervalMs: b };
                    return n ? (0, c.Z)({ ...h, formatResponse: r.Z, network: { ...h.network, getEndpoint: (e) => e.withEndpoint(o.Z).fetchExploreGraphQL } }) : (0, c.Z)(h);
                },
                h = () => {
                    const e = "explore-sidebar-gql",
                        t = { timelineId: e, formatResponse: i.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: b };
                    return (0, c.Z)(t);
                },
                g = (e, t) => u({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: t }),
                f = (0, a.Z)((e) => u({ exploreGraphQLEnabled: e, contentType: p.Trends })),
                E = (0, a.Z)((e) => u({ exploreGraphQLEnabled: e, displayLocation: d.WebSidebar })),
                Z = () => (e, t) =>
                    e(
                        (0, s.CY)(t())
                            .filter((e) => 0 === e.indexOf(m))
                            .map((e) => (0, s.$q)(e)),
                    ),
                _ = (e) => {
                    const t = `trend-relevant-users-${e}-gql`,
                        n = { timelineId: t, formatResponse: i.Z, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: t, staleIntervalMs: b };
                    return (0, c.Z)(n);
                },
                y = (e) => (0, c.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: i.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        56202: (e, t, n) => {
            n.r(t), n.d(t, { TrendsScreen: () => C, default: () => T });
            var a = n(202784),
                o = n(457311),
                r = n(108362),
                i = n(332920),
                s = n.n(i),
                l = n(233935),
                c = n(718e3),
                p = n(789831),
                d = n(252021),
                m = n(443781),
                b = n(32677),
                u = n(231035),
                h = n(652904),
                g = n(810641),
                f = n(725516),
                E = n(371493);
            const Z = { ...(0, n(335632).G)({ errorContext: "TRENDS_SCREEN" }) },
                _ = s().c5f4befa,
                y = s().ae05f268,
                v = () => a.createElement(u.Z, null),
                w = () => a.createElement(o.Z, { message: y }),
                C = ({ history: e }) => {
                    const { featureSwitches: t } = a.useContext(m.rC),
                        n = a.createElement(b.Z, { history: e }),
                        o = a.createElement(l.Z, { pullRight: !0, to: "/settings/trends" }),
                        i = t.isTrue("explore_graphql_enabled");
                    return a.createElement(h.Z, null, a.createElement(d.Z, { backLocation: "/explore", history: e, primaryContent: a.createElement(p.Z, { component: r.Z, fab: n }, a.createElement(g.Z, { entryConfiguration: Z, module: (0, E.nm)(i), renderEmptyState: v, renderUnavailable: w, title: _ })), rightControl: o, sidebarContent: a.createElement(c.Z, { withTrends: !1 }), title: _ }));
                },
                T = (0, f.Z)(C, { page: "guide", section: "all_trends" });
        },
        392027: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                o = n(154003),
                r = n(392237);
            class i extends a.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: n, disabled: r, href: i, icon: l, label: c, onPress: p, renderMenu: d, style: m, testID: b } = this.props,
                        u = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, n);
                    return a.createElement(o.ZP, { "aria-label": e, backgroundColor: t, color: u, disabled: r, icon: l, link: i, onPress: p, renderMenu: d, size: "xLarge", style: [s.root, !c && s.iconOnly, m], testID: b }, c);
                }
            }
            i.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const s = r.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Trends.1acb31ca.js.map
