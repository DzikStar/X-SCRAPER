"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.News"],
    {
        284141: (e, t, n) => {
            n.r(t), n.d(t, { default: () => F });
            n(136728);
            var r = n(202784),
                a = n(325686),
                i = n(107267),
                o = n(154003),
                l = n(688715),
                s = n(392237),
                c = n(674132),
                m = n.n(c),
                w = n(177826),
                d = n(899667),
                u = n(718e3),
                p = n(529256),
                h = n(572067),
                E = n(252021),
                f = n(443781),
                b = n(652904),
                v = n(736063),
                Z = n(293115),
                x = n(725405),
                C = n(615027),
                g = n(448301),
                y = n(759208),
                T = n(482775),
                _ = n(768431);
            const k = m().j7d0e836,
                L = m().ic61c5fc,
                N = 600,
                B = 315,
                I = "https://abs.twimg.com/grok-news/article-x-banner",
                R = { context: "EXPLORE_NEWS_ARTICLE" };
            function S() {
                const [e, t] = r.useState(!1);
                r.useEffect(() => {
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
                    ? r.createElement(o.ZP, {
                          borderColor: "transparent",
                          hoverLabel: { label: L },
                          icon: r.createElement(d.default, null),
                          onClick: () => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                          },
                          style: W.scrollToTopBtn,
                      })
                    : null;
            }
            const W = s.default.create((e) => ({ navRightButtons: { display: "flex", flexDirection: "row" }, scrollToTopBtn: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(10px)" }, "100%": { opacity: 1, transform: "translateY(0px)" } }], animationTimingFunction: "ease", animationFillMode: "both" } })),
                F = function () {
                    const e = r.useContext(f.rC),
                        t = (0, x.Z)(),
                        n = (0, i.useHistory)(),
                        s = (0, i.useRouteMatch)(),
                        c = (0, _.Z)({ trendId: s.params.newsArticleId || "" }),
                        m = c?.summary || "The latest realtime information.",
                        d = c?.title || "News";
                    if (!c) return r.createElement(C.Z, { to: "/explore/tabs/news" });
                    const L = (0, g.ZW)(c),
                        F = !!c.sentiment || L,
                        H = r.createElement(u.Z, { withNews: !1, withNewsLiveTimeline: L, withNewsSentiment: !!c.sentiment, withSearchBox: !F, withTrends: !F, withWhoToFollow: !F }),
                        M = e.viewerUserId
                            ? r.createElement(
                                  a.Z,
                                  { style: W.navRightButtons },
                                  r.createElement(S, null),
                                  r.createElement(T.Z, { articleId: c.id }),
                                  r.createElement(o.ZP, {
                                      borderColor: "transparent",
                                      hoverLabel: { label: k },
                                      icon: r.createElement(w.default, null),
                                      onClick: () => {
                                          n.push(`/i/news/article/${c.id}`), t.scribe({ element: "expand_news_article", action: "click", data: { event_info: c.id } });
                                      },
                                  }),
                              )
                            : void 0;
                    return r.createElement(v.H, { errorConfig: R }, r.createElement(p.Z, { description: m, includeOpenGraphMeta: !1, title: d }), r.createElement(h.Z, { canonical: (0, l.ju)(window.location.href), description: m, image: I, imageH: B, imageW: N, title: d, type: "article" }), r.createElement(Z.nO, { namespace: { page: "explore-news-article" } }, r.createElement(b.Z, null, r.createElement(E.Z, { backLocation: "/explore/tabs/news", headerless: !1, history: n, primaryContent: () => r.createElement(y.Z, { article: c, isExplore: !0 }), rightControl: M, sidebarContent: H }))));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.News.9dde3afa.js.map
