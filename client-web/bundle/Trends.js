"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Trends"],
    {
        740527: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(769471),
                r = n(934309),
                o = n(750085),
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
                            const { __typename: a, facepile: r, topic: o, ...i } = n,
                                l = r && (0, s.Zn)(e, r);
                            return { ...i, topicId: (0, s.S0)(e, o), facepile: l };
                        })(t, e),
                        r = ((e, t) => {
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
                    return { globalObjects: t, pageConfiguration: { id: e.id, tabs: n, header: a, navBar: r.navBar && r.navBar, title: r.title, subtitle: r.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                d = (e) => {
                    const t = "Timeline" === (n = e.body).__typename && n.timeline ? (0, o.Z)(n.timeline) : "SegmentedTimelines" === n.__typename && n.initialTimeline?.timeline.timeline ? (0, o.Z)(n.initialTimeline.timeline.timeline) : (0, o.Z)(r.cY);
                    var n;
                    const { globalObjects: i, pageConfiguration: s } = c(e);
                    return { ...t, globalObjects: (0, a.Z)(i, t.globalObjects), pageConfiguration: s };
                };
        },
        233935: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(202784),
                r = n(154003),
                o = n(392237),
                i = n(111677),
                s = n.n(i),
                l = n(698891);
            const c = "settingsAppBar",
                d = s().bb081ea2,
                p = a.memo(({ onPress: e, pullRight: t, to: n }) => a.createElement(r.ZP, { "aria-label": d, hoverLabel: { label: d }, icon: a.createElement(l.default, null), link: n, onPress: e, pullRight: t, style: m.button, testID: c, type: "primaryText" })),
                m = o.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                u = p;
        },
        789831: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(807896),
                r = n(202784),
                o = n(325686),
                i = n(392237),
                s = n(655352);
            const l = i.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: n, shouldRenderFab: i = !0, style: c, withoutBottomPadding: d, ...p }) => {
                    const m = t || o.Z,
                        u = i && !(0, s.ZP)();
                    return r.createElement(m, (0, a.Z)({}, p, { style: [u && !d && l.root, c] }), e, u ? n : null);
                };
        },
        349035: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(272175);
            const o = (0, n(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), a.createElement(r.ql, null, a.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        387524: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(807896),
                r = n(202784),
                o = n(325686),
                i = n(292627),
                s = n(537392),
                l = n(392237),
                c = n(365023),
                d = n(392027),
                p = n(774654),
                m = n(725516),
                u = n(443781);
            const b = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${p.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                h = (e) => {
                    const { "aria-label": t, label: n, onPress: h, scribeComponent: g, ...f } = e,
                        { loggedInUserId: E } = r.useContext(u.rC),
                        Z = (0, m.z)(),
                        y = r.useCallback(
                            (e) => {
                                Z.scribe({ component: g, action: "click" }), h && h(e);
                            },
                            [Z, h, g],
                        ),
                        _ = p.ZM.useCollapsibleNavBars(),
                        v = [...p.Ah({ elementPosition: "bottom" }), _ && b.fabStaysAboveSafeArea];
                    return E
                        ? r.createElement(
                              i.Z.FloatingAction,
                              null,
                              r.createElement(s.ZP, null, ({ windowWidth: e }) => {
                                  const i = e > l.default.theme.breakpoints.large,
                                      s = e > l.default.theme.breakpoints.medium,
                                      p = e < l.default.theme.breakpoints.micro,
                                      m = [b.root, s && b.rootMedium, i && b.rootLarge],
                                      u = [b.fab, i && b.fabLarge, p && b.fabMicro, v];
                                  return r.createElement(
                                      o.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: m },
                                      r.createElement(c.Z, { id: "FloatingActionButtonBase" }, (e, s) => r.createElement(o.Z, (0, a.Z)({ ref: e() }, s({ style: u })), r.createElement(d.Z, (0, a.Z)({}, f, { "aria-label": t, label: i ? n : void 0, onPress: y, style: p && b.buttonMicro })))),
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
                r = n(387524),
                o = n(635510);
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
                    return a.createElement(r.Z, { "aria-label": e, href: i, icon: t, label: n, onPress: this._handlePress, scribeComponent: s, testID: o.Z.tweet });
                }
            }
            const l = s;
        },
        32677: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                r = n(111677),
                o = n.n(r),
                i = n(186444),
                s = n(355883);
            const l = o().j0179e90,
                c = o().ee69d769({ verb: "" }),
                d = a.createElement(i.default, null),
                p = ({ getLocationState: e, history: t }) => a.createElement(s.Z, { "aria-label": l, getLocationState: e, history: t, icon: d, label: c, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        56851: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(202784),
                r = n(420740),
                o = n(108362),
                i = n(731708),
                s = n(154003),
                l = n(392237),
                c = n(111677),
                d = n.n(c),
                p = n(349035);
            const m = "error-detail",
                u = d().e49537c2,
                b = d().a9ae1e78;
            class h extends a.PureComponent {
                render() {
                    return a.createElement(r.Z, { testID: m }, a.createElement(p.Z, null), a.createElement(o.Z, { style: g.root }, a.createElement(i.ZP, { align: "center", color: "gray700", style: g.retryText }, u), a.createElement(s.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, b)));
                }
            }
            const g = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                r = n(500002),
                o = n(668214),
                i = n(997174),
                s = n(118823);
            const l = (0, o.Z)()
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
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: o, search: i },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const c = r || s;
                    ((c && r !== s) || (!c && n !== o) || a !== i || l) && this._performPageUpdates(this.props);
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
            const d = (0, r.ZP)(l(c));
        },
        371493: (e, t, n) => {
            n.d(t, { $N: () => Z, G0: () => E, Jj: () => y, O9: () => b, S: () => h, fy: () => g, jz: () => _, nm: () => f, qk: () => p, uI: () => m });
            var a = n(912021),
                r = n(644829),
                o = n(740527),
                i = n(750085),
                s = n(555875),
                l = n(899105),
                c = n(218951);
            const d = Object.freeze({ Trends: "trends" }),
                p = Object.freeze({ WebSidebar: "web_sidebar" }),
                m = "explore-",
                u = 9e5;
            const b = ({ contentType: e, displayLocation: t, exploreGraphQLEnabled: n = !1, focalTweetId: a, includePageConfiguration: i = !1, initialTabId: s, profileUserId: d }) => {
                    const p = e || t || "main",
                        b = (function (e, t, n, a) {
                            return n ? `${e}${t}-tweet-${n}` : a ? `${e}${t}-user-${a}` : `${e}${t}`;
                        })(n ? "explore-graphql-" : m, p, a, d),
                        h = { timelineId: b, formatResponse: l.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchExplore, getEndpointParams: (n) => ({ ...n, candidate_source: e, display_location: t, focal_tweet_id: a, include_page_configuration: i, initial_tab_id: s, profile_user_id: d, entity_tokens: !1 }) }, context: n ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${m}${p}`, staleIntervalMs: u };
                    return n ? (0, c.Z)({ ...h, formatResponse: o.Z, network: { ...h.network, getEndpoint: (e) => e.withEndpoint(r.Z).fetchExploreGraphQL } }) : (0, c.Z)(h);
                },
                h = () => {
                    const e = "explore-sidebar-gql",
                        t = { timelineId: e, formatResponse: i.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: u };
                    return (0, c.Z)(t);
                },
                g = (e, t) => b({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: t }),
                f = (0, a.Z)((e) => b({ exploreGraphQLEnabled: e, contentType: d.Trends })),
                E = (0, a.Z)((e) => b({ exploreGraphQLEnabled: e, displayLocation: p.WebSidebar })),
                Z = () => (e, t) =>
                    e(
                        (0, s.CY)(t())
                            .filter((e) => 0 === e.indexOf(m))
                            .map((e) => (0, s.$q)(e)),
                    ),
                y = (e) => {
                    const t = `trend-relevant-users-${e}-gql`,
                        n = { timelineId: t, formatResponse: i.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: t, staleIntervalMs: u };
                    return (0, c.Z)(n);
                },
                _ = (e) => (0, c.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: i.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        56202: (e, t, n) => {
            n.r(t), n.d(t, { TrendsScreen: () => w, default: () => T });
            var a = n(202784),
                r = n(457311),
                o = n(108362),
                i = n(111677),
                s = n.n(i),
                l = n(233935),
                c = n(718e3),
                d = n(789831),
                p = n(252021),
                m = n(443781),
                u = n(32677),
                b = n(56851),
                h = n(652904),
                g = n(810641),
                f = n(725516),
                E = n(371493);
            const Z = { ...(0, n(335632).G)({ errorContext: "TRENDS_SCREEN" }) },
                y = s().c5f4befa,
                _ = s().ae05f268,
                v = () => a.createElement(b.Z, null),
                C = () => a.createElement(r.Z, { message: _ }),
                w = ({ history: e }) => {
                    const { featureSwitches: t } = a.useContext(m.rC),
                        n = a.createElement(u.Z, { history: e }),
                        r = a.createElement(l.Z, { pullRight: !0, to: "/settings/trends" }),
                        i = t.isTrue("explore_graphql_enabled");
                    return a.createElement(h.Z, null, a.createElement(p.Z, { backLocation: "/explore", history: e, primaryContent: a.createElement(d.Z, { component: o.Z, fab: n }, a.createElement(g.Z, { entryConfiguration: Z, module: (0, E.nm)(i), renderEmptyState: v, renderUnavailable: C, title: y })), rightControl: r, sidebarContent: a.createElement(c.Z, { withTrends: !1 }), title: y }));
                },
                T = (0, f.Z)(w, { page: "guide", section: "all_trends" });
        },
        392027: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(154003),
                o = n(392237);
            class i extends a.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: n, disabled: o, href: i, icon: l, label: c, onPress: d, renderMenu: p, style: m, testID: u } = this.props,
                        b = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, n);
                    return a.createElement(r.ZP, { "aria-label": e, backgroundColor: t, color: b, disabled: o, icon: l, link: i, onPress: d, renderMenu: p, size: "xLarge", style: [s.root, !c && s.iconOnly, m], testID: u }, c);
                }
            }
            i.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const s = o.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = i;
        },
        41065: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Trends.7925035a.js.map
