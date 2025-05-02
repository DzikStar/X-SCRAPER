"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.News"],
    {
        284141: (e, t, n) => {
            n.r(t), n.d(t, { default: () => W });
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
                u = n(899667),
                d = n(718e3),
                p = n(529256),
                h = n(572067),
                E = n(252021),
                f = n(443781),
                b = n(652904),
                v = n(736063),
                x = n(293115),
                C = n(725405),
                Z = n(615027),
                g = n(448301),
                y = n(4976),
                T = n(768431);
            const _ = m().j7d0e836,
                k = m().ic61c5fc,
                L = 600,
                N = 315,
                B = "https://abs.twimg.com/grok-news/article-x-banner",
                R = { context: "EXPLORE_NEWS_ARTICLE" };
            function I() {
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
                          hoverLabel: { label: k },
                          icon: r.createElement(u.default, null),
                          onClick: () => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                          },
                          style: S.scrollToTopBtn,
                      })
                    : null;
            }
            const S = s.default.create((e) => ({ navRightButtons: { display: "flex", flexDirection: "row" }, scrollToTopBtn: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(10px)" }, "100%": { opacity: 1, transform: "translateY(0px)" } }], animationTimingFunction: "ease", animationFillMode: "both" } })),
                W = function () {
                    const e = r.useContext(f.rC),
                        t = (0, C.Z)(),
                        n = (0, i.useHistory)(),
                        s = (0, i.useRouteMatch)(),
                        c = (0, T.Z)({ trendId: s.params.newsArticleId || "" }),
                        m = c?.summary || "The latest realtime information.",
                        u = c?.title || "News";
                    if (!c) return r.createElement(Z.Z, { to: "/explore/tabs/news" });
                    const k = (0, g.ZW)(c),
                        W = !!c.sentiment || k,
                        F = r.createElement(d.Z, { withNews: !1, withNewsLiveTimeline: k, withNewsSentiment: !!c.sentiment, withSearchBox: !W, withTrends: !W, withWhoToFollow: !W }),
                        H = e.viewerUserId
                            ? r.createElement(
                                  a.Z,
                                  { style: S.navRightButtons },
                                  r.createElement(I, null),
                                  r.createElement(o.ZP, {
                                      borderColor: "transparent",
                                      hoverLabel: { label: _ },
                                      icon: r.createElement(w.default, null),
                                      onClick: () => {
                                          n.push(`/i/news/article/${c.id}`), t.scribe({ element: "expand_news_article", action: "click", data: { event_info: c.id } });
                                      },
                                  }),
                              )
                            : void 0;
                    return r.createElement(v.H, { errorConfig: R }, r.createElement(p.Z, { description: m, includeOpenGraphMeta: !1, title: u }), r.createElement(h.Z, { canonical: (0, l.ju)(window.location.href), description: m, image: B, imageH: N, imageW: L, title: u, type: "article" }), r.createElement(x.nO, { namespace: { page: "explore-news-article" } }, r.createElement(b.Z, null, r.createElement(E.Z, { backLocation: "/explore/tabs/news", headerless: !1, history: n, primaryContent: () => r.createElement(y.Z, { article: c, isExplore: !0 }), rightControl: H, sidebarContent: F }))));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.News.0eacc54a.js.map
