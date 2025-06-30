"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.News"],
    {
        740527: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(769471),
                r = n(934309),
                a = n(750085),
                o = n(401388),
                l = n(626421),
                s = n(497461);
            const c = (e) => {
                    const t = (0, s.$)(),
                        n = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const t = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, o.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t };
                        })(e),
                        i = ((e, t) => {
                            const { header: n } = t;
                            if (!n || "TopicPageHeader" !== n.__typename) return;
                            const { __typename: i, facepile: r, topic: a, ...o } = n,
                                s = r && (0, l.Zn)(e, r);
                            return { ...o, topicId: (0, l.S0)(e, a), facepile: s };
                        })(t, e),
                        r = ((e, t) => {
                            const { navBar: n } = t;
                            if (!n) return {};
                            switch (n.__typename) {
                                case "TitleNavBar":
                                    return { title: n.title, subtitle: n.subtitle };
                                case "TopicPageNavBar":
                                    return { navBar: { topicId: (0, l.S0)(e, n.topic), clientEventInfo: n.clientEventInfo }, title: n.topic.name, subtitle: void 0 };
                                default:
                                    return {};
                            }
                        })(t, e);
                    return { globalObjects: t, pageConfiguration: { id: e.id, tabs: n, header: i, navBar: r.navBar && r.navBar, title: r.title, subtitle: r.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                d = (e) => {
                    const t = "Timeline" === (n = e.body).__typename && n.timeline ? (0, a.Z)(n.timeline) : "SegmentedTimelines" === n.__typename && n.initialTimeline?.timeline.timeline ? (0, a.Z)(n.initialTimeline.timeline.timeline) : (0, a.Z)(r.cY);
                    var n;
                    const { globalObjects: o, pageConfiguration: l } = c(e);
                    return { ...t, globalObjects: (0, i.Z)(o, t.globalObjects), pageConfiguration: l };
                };
        },
        720275: (e, t, n) => {
            n.d(t, { Z: () => b });
            var i = n(202784),
                r = n(457311),
                a = n(111677),
                o = n.n(a),
                l = n(912021),
                s = n(680961),
                c = n(371493),
                d = n(810641);
            const p = o().dd225af8,
                m = () => i.createElement(r.Z, { message: p });
            class u extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedModule = (0, l.Z)((e) => (0, c.Jj)(e))),
                        (this._getModule = () => {
                            const { trendId: e } = this.props;
                            return this._getMemoizedModule(e);
                        });
                }
                render() {
                    return i.createElement(d.Z, { module: this._getModule(), renderUnavailable: m, scroller: s.Z, showLoadingFooter: !1, title: "Relevant people", withKeyboardShortcuts: !1 });
                }
            }
            const b = u;
        },
        371493: (e, t, n) => {
            n.d(t, { $N: () => w, G0: () => g, Jj: () => _, O9: () => b, S: () => E, fy: () => f, jz: () => Z, nm: () => h, qk: () => p, uI: () => m });
            var i = n(912021),
                r = n(644829),
                a = n(740527),
                o = n(750085),
                l = n(555875),
                s = n(899105),
                c = n(218951);
            const d = Object.freeze({ Trends: "trends" }),
                p = Object.freeze({ WebSidebar: "web_sidebar" }),
                m = "explore-",
                u = 9e5;
            const b = ({ contentType: e, displayLocation: t, exploreGraphQLEnabled: n = !1, focalTweetId: i, includePageConfiguration: o = !1, initialTabId: l, profileUserId: d }) => {
                    const p = e || t || "main",
                        b = (function (e, t, n, i) {
                            return n ? `${e}${t}-tweet-${n}` : i ? `${e}${t}-user-${i}` : `${e}${t}`;
                        })(n ? "explore-graphql-" : m, p, i, d),
                        E = { timelineId: b, formatResponse: s.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchExplore, getEndpointParams: (n) => ({ ...n, candidate_source: e, display_location: t, focal_tweet_id: i, include_page_configuration: o, initial_tab_id: l, profile_user_id: d, entity_tokens: !1 }) }, context: n ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${m}${p}`, staleIntervalMs: u };
                    return n ? (0, c.Z)({ ...E, formatResponse: a.Z, network: { ...E.network, getEndpoint: (e) => e.withEndpoint(r.Z).fetchExploreGraphQL } }) : (0, c.Z)(E);
                },
                E = () => {
                    const e = "explore-sidebar-gql",
                        t = { timelineId: e, formatResponse: o.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: u };
                    return (0, c.Z)(t);
                },
                f = (e, t) => b({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: t }),
                h = (0, i.Z)((e) => b({ exploreGraphQLEnabled: e, contentType: d.Trends })),
                g = (0, i.Z)((e) => b({ exploreGraphQLEnabled: e, displayLocation: p.WebSidebar })),
                w = () => (e, t) =>
                    e(
                        (0, l.CY)(t())
                            .filter((e) => 0 === e.indexOf(m))
                            .map((e) => (0, l.$q)(e)),
                    ),
                _ = (e) => {
                    const t = `trend-relevant-users-${e}-gql`,
                        n = { timelineId: t, formatResponse: o.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: t, staleIntervalMs: u };
                    return (0, c.Z)(n);
                },
                Z = (e) => (0, c.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: o.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        120469: (e, t, n) => {
            n.r(t), n.d(t, { default: () => N });
            n(136728);
            var i = n(202784),
                r = n(325686),
                a = n(107267),
                o = n(154003),
                l = n(688715),
                s = n(392237),
                c = n(111677),
                d = n.n(c),
                p = n(177826),
                m = n(899667),
                u = n(718e3),
                b = n(529256),
                E = n(572067),
                f = n(523561);
            const h = (0, f.Z)({ loader: () => n.e("loader.NewsLiveTimelineSidebar").then(n.bind(n, 485513)) }),
                g = (0, f.Z)({ loader: () => n.e("loader.NewsSingleSentimentSidebar").then(n.bind(n, 116409)) });
            var w = n(252021),
                _ = n(443781),
                Z = n(652904),
                T = n(736063),
                v = n(720275),
                y = n(293115),
                I = n(725405),
                x = n(615027),
                C = n(448301),
                L = n(759208),
                S = n(482775),
                R = n(768431);
            const k = d().j7d0e836,
                $ = d().ic61c5fc,
                O = 600,
                P = 315,
                B = "https://abs.twimg.com/grok-news/article-x-banner",
                H = { context: "EXPLORE_NEWS_ARTICLE" };
            function G() {
                const [e, t] = i.useState(!1);
                i.useEffect(() => {
                    const e = () => {
                        t(window.scrollY > 300);
                    };
                    return (
                        window.addEventListener("scroll", e),
                        () => {
                            window.removeEventListener("scroll", e);
                        }
                    );
                }, []);
                return e
                    ? i.createElement(o.ZP, {
                          borderColor: "transparent",
                          hoverLabel: { label: $ },
                          icon: i.createElement(m.default, null),
                          onClick: () => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                          },
                          style: M.scrollToTopBtn,
                      })
                    : null;
            }
            const M = s.default.create((e) => ({ navRightButtons: { display: "flex", flexDirection: "row" }, scrollToTopBtn: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(10px)" }, "100%": { opacity: 1, transform: "translateY(0px)" } }], animationTimingFunction: "ease", animationFillMode: "both" } })),
                N = function () {
                    const e = i.useContext(_.rC),
                        t = (0, I.Z)(),
                        n = (0, a.useHistory)(),
                        s = (0, a.useRouteMatch)(),
                        c = (0, R.Z)({ trendId: s.params.newsArticleId || "" }),
                        d = c?.summary || "The latest realtime information.",
                        m = c?.title || "News";
                    if (!c) return i.createElement(x.Z, { to: "/explore/tabs/news" });
                    const f = (0, C.ZW)(c),
                        $ = !!c.sentiment || f,
                        N = i.createElement(u.Z, { withNews: !1, withSearchBox: !$, withTrends: !$, withWhoToFollow: !1 }, f && i.createElement(h, { articleId: c.id }), !!c.sentiment && i.createElement(g, { articleId: c.id }), i.createElement(v.Z, { trendId: c.id })),
                        j = e.viewerUserId
                            ? i.createElement(
                                  r.Z,
                                  { style: M.navRightButtons },
                                  i.createElement(G, null),
                                  i.createElement(S.Z, { articleId: c.id }),
                                  i.createElement(o.ZP, {
                                      borderColor: "transparent",
                                      hoverLabel: { label: k },
                                      icon: i.createElement(p.default, null),
                                      onClick: () => {
                                          n.push(`/i/news/article/${c.id}`), t.scribe({ element: "expand_news_article", action: "click", data: { event_info: c.id } });
                                      },
                                  }),
                              )
                            : void 0;
                    return i.createElement(T.H, { errorConfig: H }, i.createElement(b.Z, { description: d, includeOpenGraphMeta: !1, title: m }), i.createElement(E.Z, { canonical: (0, l.ju)(window.location.href), description: d, image: B, imageH: P, imageW: O, title: m, type: "article" }), i.createElement(y.nO, { namespace: { page: "explore-news-article" } }, i.createElement(Z.Z, null, i.createElement(w.Z, { backLocation: "/explore/tabs/news", headerless: !1, history: n, primaryContent: () => i.createElement(L.Z, { article: c, isExplore: !0 }), rightControl: j, sidebarContent: N }))));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.News.1795220a.js.map
