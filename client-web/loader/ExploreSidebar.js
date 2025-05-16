"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ExploreSidebar"],
    {
        740527: (e, t, n) => {
            n.d(t, { Z: () => p });
            var i = n(769471),
                r = n(934309),
                o = n(750085),
                a = n(401388),
                s = n(626421),
                l = n(497461);
            const d = (e) => {
                    const t = (0, l.$)(),
                        n = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const t = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, a.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t };
                        })(e),
                        i = ((e, t) => {
                            const { header: n } = t;
                            if (!n || "TopicPageHeader" !== n.__typename) return;
                            const { __typename: i, facepile: r, topic: o, ...a } = n,
                                l = r && (0, s.Zn)(e, r);
                            return { ...a, topicId: (0, s.S0)(e, o), facepile: l };
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
                    return { globalObjects: t, pageConfiguration: { id: e.id, tabs: n, header: i, navBar: r.navBar && r.navBar, title: r.title, subtitle: r.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                p = (e) => {
                    const t = "Timeline" === (n = e.body).__typename && n.timeline ? (0, o.Z)(n.timeline) : "SegmentedTimelines" === n.__typename && n.initialTimeline?.timeline.timeline ? (0, o.Z)(n.initialTimeline.timeline.timeline) : (0, o.Z)(r.cY);
                    var n;
                    const { globalObjects: a, pageConfiguration: s } = d(e);
                    return { ...t, globalObjects: (0, i.Z)(a, t.globalObjects), pageConfiguration: s };
                };
        },
        657346: (e, t, n) => {
            n.r(t), n.d(t, { ExploreSidebar: () => y, UPDATE_INTERVAL: () => E, default: () => w });
            var i = n(202784),
                r = n(726499),
                o = n(457311),
                a = n(868634),
                s = n(332920),
                l = n.n(s),
                d = n(912021),
                p = n(680961),
                c = n(371493),
                h = n(443781),
                _ = n(810641),
                b = n(962741),
                u = n(351322);
            const m = { ...(0, n(335632).G)({ withThirdPartyCards: !1, isInSidebar: !0, errorContext: "EXPLORE_SIDEBAR" }), [b.ZP.TimelineCursor]: u.OZ(u.KM()), [b.ZP.Label]: u.OZ(u.KM()), [b.ZP.Message]: u.OZ(u.KM()), [b.ZP.News]: u.OZ(u.KM()) },
                f = l().b8e930fe,
                g = l().ae05f268,
                E = 3e5,
                T = () => i.createElement(o.Z, { message: g }),
                Z = (0, d.Z)((e, t) => (0, c.O9)({ exploreGraphQLEnabled: t, displayLocation: c.qk.WebSidebar, focalTweetId: e })),
                v = (0, d.Z)((e, t) => (0, c.O9)({ exploreGraphQLEnabled: t, displayLocation: c.qk.WebSidebar, profileUserId: e }));
            class y extends i.Component {
                constructor(...e) {
                    var t;
                    super(...e),
                        (this._renderBetaLabel = () => i.createElement(a.ZP, { background: "orange50", bold: !0 }, "Beta")),
                        (this._timelinePreprocessor = ((t = this._renderBetaLabel), (e) => e.map((e) => (e.type === b.ZP.TimelineModule && e.content.items.some((e) => "trend" === e.type && e.content.is_ai_trend) && e.content.header ? { ...e, content: { ...e.content, header: { ...e.content.header, renderCustomControl: t } } } : e)))),
                        (this._getModule = () => {
                            const { focalTweetId: e, profileUserId: t } = this.props,
                                { featureSwitches: n } = this.context;
                            return n.isTrue("responsive_web_trends_ui_top_articles") ? (0, d.Z)(c.S)() : e ? Z(e, this.context.featureSwitches.isTrue("explore_graphql_enabled")) : t ? v(t, this.context.featureSwitches.isTrue("explore_graphql_enabled")) : (0, c.G0)(this.context.featureSwitches.isTrue("explore_graphql_enabled"));
                        }),
                        (this._setTimelineRef = (e) => {
                            this._timeline = e;
                        }),
                        (this._onAppForegrounded = (e) => {
                            "active" === e && this._fetchUpdates();
                        }),
                        (this._fetchUpdates = () => {
                            this._timeline && "active" === r.Z.currentState && this._timeline.fetchTop({});
                        });
                }
                componentDidMount() {
                    this._listener = r.Z.addEventListener("change", this._onAppForegrounded);
                }
                componentWillUnmount() {
                    this._listener?.remove("change", this._onAppForegrounded);
                }
                render() {
                    return i.createElement(_.Z, { entryConfiguration: m, module: this._getModule(), pollingIntervalMsOverride: E, preprocessEntryList: this._timelinePreprocessor, renderUnavailable: T, scroller: p.Z, showLoadingFooter: !1, timelineRef: this._setTimelineRef, title: f, withKeyboardShortcuts: !1 });
                }
            }
            y.contextType = h.rC;
            const w = y;
        },
        371493: (e, t, n) => {
            n.d(t, { $N: () => E, G0: () => g, Jj: () => T, O9: () => b, S: () => u, fy: () => m, jz: () => Z, nm: () => f, qk: () => c, uI: () => h });
            var i = n(912021),
                r = n(644829),
                o = n(740527),
                a = n(750085),
                s = n(555875),
                l = n(899105),
                d = n(218951);
            const p = Object.freeze({ Trends: "trends" }),
                c = Object.freeze({ WebSidebar: "web_sidebar" }),
                h = "explore-",
                _ = 9e5;
            const b = ({ contentType: e, displayLocation: t, exploreGraphQLEnabled: n = !1, focalTweetId: i, includePageConfiguration: a = !1, initialTabId: s, profileUserId: p }) => {
                    const c = e || t || "main",
                        b = (function (e, t, n, i) {
                            return n ? `${e}${t}-tweet-${n}` : i ? `${e}${t}-user-${i}` : `${e}${t}`;
                        })(n ? "explore-graphql-" : h, c, i, p),
                        u = { timelineId: b, formatResponse: l.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchExplore, getEndpointParams: (n) => ({ ...n, candidate_source: e, display_location: t, focal_tweet_id: i, include_page_configuration: a, initial_tab_id: s, profile_user_id: p, entity_tokens: !1 }) }, context: n ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${h}${c}`, staleIntervalMs: _ };
                    return n ? (0, d.Z)({ ...u, formatResponse: o.Z, network: { ...u.network, getEndpoint: (e) => e.withEndpoint(r.Z).fetchExploreGraphQL } }) : (0, d.Z)(u);
                },
                u = () => {
                    const e = "explore-sidebar-gql",
                        t = { timelineId: e, formatResponse: a.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: _ };
                    return (0, d.Z)(t);
                },
                m = (e, t) => b({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: t }),
                f = (0, i.Z)((e) => b({ exploreGraphQLEnabled: e, contentType: p.Trends })),
                g = (0, i.Z)((e) => b({ exploreGraphQLEnabled: e, displayLocation: c.WebSidebar })),
                E = () => (e, t) =>
                    e(
                        (0, s.CY)(t())
                            .filter((e) => 0 === e.indexOf(h))
                            .map((e) => (0, s.$q)(e)),
                    ),
                T = (e) => {
                    const t = `trend-relevant-users-${e}-gql`,
                        n = { timelineId: t, formatResponse: a.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: t, staleIntervalMs: _ };
                    return (0, d.Z)(n);
                },
                Z = (e) => (0, d.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: a.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ExploreSidebar.c8af1a5a.js.map
