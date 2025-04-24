"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.News-c4c736e0"],
    {
        234209: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(202784),
                i = n(731708),
                r = n(392237),
                o = n(955251);
            const l = "This story may evolve over time. Grok can make mistakes, verify its outputs.";
            function c({ style: e }) {
                return a.createElement(i.ZP, { style: s.text }, l);
            }
            const s = r.default.create((e) => ({ text: { color: (0, o.O)("foreground", 0.6), fontSize: e.fontSizes.subtext1 } }));
        },
        118368: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                i = n(325686),
                r = n(392237),
                o = n(955251);
            function l() {
                return a.createElement(i.Z, { style: c.divider });
            }
            const c = r.default.create((e) => ({ divider: { width: "100%", height: 1, backgroundColor: (0, o.O)("foreground", 0.1), animationDuration: "0.2s", animationDelay: "0.2s", animationTimingFunction: "ease", animationFillMode: "both", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
        },
        305179: (e, t, n) => {
            n.d(t, { Z: () => C });
            var a = n(202784),
                i = n(325686),
                r = n(392237),
                o = n(545457),
                l = n(652904),
                c = n(293115),
                s = n(246728),
                m = n(955251),
                u = (n(136728), n(107267)),
                d = n(530732),
                f = n(731708),
                h = n(823161),
                g = n(894966),
                p = n(520913),
                y = n(125363),
                v = n(919022);
            function E() {
                const e = (0, u.useHistory)(),
                    t = (0, u.useLocation)().pathname,
                    n = (0, y.v9)(v.ZP.selectLoggedInUser),
                    { isCompactLayout: r } = (0, s.Z)(),
                    o = "/i/news" !== t;
                return a.createElement(
                    i.Z,
                    { style: w.container },
                    a.createElement(
                        d.Z,
                        {
                            onClick: () => {
                                o ? e.push("/i/news") : e.push("/home");
                            },
                            withoutInteractiveStyles: !0,
                        },
                        ({ isHovered: e }) => a.createElement(i.Z, { style: [w.logoContainer, r ? w.compactLogoContainer : void 0, e ? w.hoveredLogoContainer : void 0] }, o ? a.createElement(g.default, { style: [w.logo, w.back] }) : a.createElement(p.default, { style: w.logo })),
                    ),
                    a.createElement(
                        i.Z,
                        { style: w.tabs },
                        [{ text: "US News", detail: "beta", link: "/i/news" }].map((e, n) => {
                            const r = t.startsWith(e.link);
                            return a.createElement(d.Z, { key: e.link, link: e.link, withoutInteractiveStyles: !0 }, ({ isHovered: t }) => a.createElement(i.Z, { style: [w.tabButton, { animationDelay: 0.3 + 0.1 * n + "s" }, t ? w.hoveredTabButton : void 0, r ? w.activeTabButton : void 0] }, a.createElement(f.ZP, { style: w.tabText, weight: "bold" }, e.text), e.detail && a.createElement(f.ZP, { style: w.tabDetail, weight: "medium" }, e.detail)));
                        }),
                    ),
                    a.createElement(i.Z, { style: [w.logoContainer, r ? w.compactLogoContainer : void 0] }, n && n.profile_image_url_https ? a.createElement(h.default, { screenName: n.screen_name, shape: "circle", size: "large", uri: n.profile_image_url_https, withHoverCard: !0, withLink: !0 }) : a.createElement(i.Z, null)),
                );
            }
            const w = r.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", padding: e.spaces.space16, position: "sticky", top: 0, zIndex: 50, backgroundColor: (0, m.O)("background") }, logoContainer: { width: e.spaces.space36, height: e.spaces.space36, display: "flex", justifyContent: "center", alignItems: "center", transform: "scale(1)", transition: "all 0.2s ease" }, compactLogoContainer: { width: e.spaces.space32, height: e.spaces.space32 }, hoveredLogoContainer: { transform: "scale(1.1)", cursor: "pointer" }, logo: { width: "100%", height: "100%", color: (0, m.O)("foreground") }, back: { transform: "scale(0.8)" }, tabs: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space20 }, tabButton: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, borderRadius: e.borderRadii.xLarge, padding: e.spaces.space8, backgroundColor: "transparent", transition: "all 0.2s ease", color: (0, m.O)("foreground", 0.6), animationDuration: "0.2s", animationTimingFunction: "ease", animationFillMode: "both", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(-10px)" }, "100%": { opacity: 1, transform: "translateY(0px)" } }] }, hoveredTabButton: { backgroundColor: (0, m.O)("foreground", r.default.isDarkMode() ? 0.1 : 0.05) }, activeTabButton: { color: (0, m.O)("foreground", 0.9) }, tabText: { color: "inherit", fontSize: e.fontSizes.subtext1 }, tabDetail: { fontSize: e.fontSizes.subtext3, color: (0, m.O)("blue") } }));
            function C({ children: e, scribeNamespace: t }) {
                (0, o.hB)(), (0, o.ph)();
                const { isCompactLayout: n } = (0, s.Z)();
                return a.createElement(c.nO, { namespace: { page: t } }, a.createElement(l.Z, null, a.createElement(i.Z, { style: b.root }, n ? a.createElement(i.Z, { style: b.compactLayout }, a.createElement(E, null), a.createElement(i.Z, { style: b.compactContent }, e)) : a.createElement(i.Z, { style: b.layout }, a.createElement(i.Z, { style: b.topNavBarContainer }, a.createElement(E, null), a.createElement(i.Z, { style: b.content }, e))))));
            }
            const b = r.default.create((e) => ({ root: { height: "100%", width: "100%", flex: 1, backgroundColor: (0, m.O)("background"), animationDuration: "0.2s", animationTimingFunction: "ease", animationFillMode: "both", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, layout: { display: "flex", flexDirection: "row", flex: 1 }, compactLayout: { display: "flex", flexDirection: "column", flex: 1 }, topNavBarContainer: { display: "flex", flexDirection: "column", flex: 1, width: "100%", maxWidth: 1500, marginHorizontal: "auto" }, content: { overflow: "hidden", flex: 1, flexDirection: "column", alignItems: "center" }, compactContent: { overflow: "hidden", flex: 1, width: "100%", maxWidth: 600, marginHorizontal: "auto" } }));
        },
        221972: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(202784),
                i = n(107267),
                r = n(468811),
                o = n.n(r),
                l = n(725405),
                c = n(695356);
            const s = ({ sessionTimeoutMs: e = 1e4, activeTimeThreshold: t = 5e3 }) => {
                const [n, r] = a.useState(o().v4()),
                    s = (0, l.Z)(),
                    m = a.useRef(performance.now()),
                    u = a.useRef("visible" === document.visibilityState),
                    d = a.useRef(0),
                    f = a.useRef(0),
                    h = a.useRef(0),
                    g = a.useRef(null),
                    p = (0, i.useLocation)(),
                    y = () => {
                        const a = performance.now(),
                            i = d.current - m.current,
                            l = a - d.current;
                        if (0 !== d.current) {
                            if (l > e) return r(o().v4()), (m.current = a), (d.current = 0), (f.current = 0), void (h.current = 0);
                            if (u.current) {
                                i - h.current > t && ((0, c.E7)(s, { url: p.pathname, durationMs: i, sessionId: n }), (f.current = a), (h.current = i));
                            }
                        } else m.current = a;
                    },
                    v = () => {
                        u.current = "visible" === document.visibilityState;
                    },
                    E = () => {
                        d.current = performance.now();
                    };
                a.useEffect(() => {
                    (g.current = setInterval(y, 1e3)), document.addEventListener("visibilitychange", v);
                    const e = ["mousemove", "click", "keydown", "scroll", "touchstart"];
                    e.forEach((e) => {
                        document.addEventListener(e, E);
                    });
                    const t = () => {
                        y();
                    };
                    return (
                        window.addEventListener("beforeunload", t),
                        () => {
                            clearInterval(g.current),
                                document.removeEventListener("visibilitychange", v),
                                e.forEach((e) => {
                                    document.removeEventListener(e, E);
                                }),
                                window.removeEventListener("beforeunload", t);
                        }
                    );
                }, [p.pathname, e, s, n]);
            };
        },
        246728: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(537392),
                i = n(392237);
            function r() {
                return { isCompactLayout: (0, a.Zx)(({ containerWidth: e }) => e <= i.default.theme.breakpoints.xLarge) };
            }
        },
        188455: (e, t, n) => {
            n.r(t), n.d(t, { default: () => U });
            var a = n(202784),
                i = n(688715),
                r = n(529256),
                o = n(572067),
                l = n(736063),
                c = n(4452),
                s = (n(136728), n(325686)),
                m = n(392237),
                u = n(725405),
                d = n(739586),
                f = n(221972),
                h = n(246728),
                g = n(695356),
                p = n(118368),
                y = n(555874),
                v = n(858440),
                E = n(955251);
            const w = 70;
            function C({ articles: e }) {
                const { height: t } = (0, v.Z)(),
                    n = Math.max(550, 0.95 * (t - w)),
                    i = t > 750,
                    [r, o] = a.useState(0),
                    l = a.useMemo(() => [b.scroller, { height: t - w }], [t]);
                return e.length
                    ? a.createElement(
                          s.Z,
                          { style: l },
                          a.createElement(y.Z, {
                              data: e,
                              decelerationRate: "fast",
                              keyExtractor: (e, t) => `news-article-${e.id}`,
                              onScroll: (e) => {
                                  const { contentOffset: a } = e.nativeEvent,
                                      i = Math.min(n, t - w - 0.05 * t),
                                      r = a.y,
                                      l = Math.round(r / i);
                                  o(l);
                              },
                              removeClippedSubviews: !0,
                              renderItem: ({ index: e, item: o }) => {
                                  const l = e === r,
                                      c = !!o.sentiment && !!o.sentiment.sentiment_scores && o.sentiment.sentiment_scores.length > 0;
                                  let m = 4;
                                  return !i && c && (m = 2), a.createElement(s.Z, { style: [b.articleContainer, { height: t - w - 0.1 * t, opacity: l ? 1 : 0.3, maxHeight: n }] }, a.createElement(d.Z, { article: o, commentsStyle: b.darkerBg, infoContainerStyle: b.articleCardInfoContainer, key: `small-article-${o.id}`, onClick: () => {}, reactionsContainerStyle: b.articleCardReactionsContainer, sentimentStyle: b.darkerBg, showSentiment: !0, style: b.articleCard, summaryNumLines: m, titleNumLines: 4, variant: "large" }));
                              },
                              scrollEventThrottle: 16,
                              showsVerticalScrollIndicator: !1,
                              style: l,
                          }),
                      )
                    : null;
            }
            const b = m.default.create((e) => ({ scroller: { scrollSnapType: "y mandatory", WebkitScrollSnapType: "y mandatory" }, articleContainer: { scrollSnapAlign: "center", scrollSnapStop: "always", scrollMarginBlockStart: "10vh", scrollMarginBlockEnd: "10vh", display: "flex", padding: e.spaces.space8, marginHorizontal: e.spaces.space8, marginVertical: e.spaces.space8, transition: "all 0.2s ease", backgroundColor: (0, E.O)("secondary"), borderRadius: e.borderRadii.large, borderStyle: "solid", borderWidth: 1, borderColor: (0, E.O)("white", 0.08) }, articleCard: { flex: 1 }, articleCardInfoContainer: { flex: "unset" }, darkerBg: { backgroundColor: (0, E.O)("foreground", 0.05) }, articleCardReactionsContainer: { gap: e.spaces.space12 } }));
            function x() {
                return a.createElement(s.Z, { style: Z.divider });
            }
            const Z = m.default.create((e) => ({ divider: { height: "100%", width: 1, backgroundColor: (0, E.O)("foreground", 0.1), animationDuration: "0.2s", animationDelay: "0.2s", animationTimingFunction: "ease", animationFillMode: "both", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
            function k({ articles: e, onArticleClick: t }) {
                return a.createElement(
                    s.Z,
                    { style: F.container },
                    e.map((e, n) =>
                        a.createElement(
                            a.Fragment,
                            { key: `four-only-title-article-${e.id}` },
                            0 !== n && a.createElement(x, null),
                            a.createElement(d.Z, {
                                article: e,
                                hideImg: !0,
                                hideSummary: !0,
                                onClick: () => {
                                    t(e.id);
                                },
                                style: [F.article, { animationDelay: 0.1 * n + 0.3 + "s" }],
                                variant: "small",
                            }),
                        ),
                    ),
                );
            }
            const F = m.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "row", gap: e.spaces.space20 }, article: { animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0, transform: "scale(0.95)" }, "100%": { opacity: 1, transform: "scale(1)" } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both", flex: 1 } }));
            function I({ articles: e, onArticleClick: t }) {
                return a.createElement(
                    s.Z,
                    { style: S.container },
                    e.map((e, n) =>
                        a.createElement(
                            a.Fragment,
                            { key: `four-without-image-article-${e.id}` },
                            0 !== n && a.createElement(x, null),
                            a.createElement(d.Z, {
                                article: e,
                                hideImg: !0,
                                hideSummary: !0,
                                onClick: () => {
                                    t(e.id);
                                },
                                style: [S.article, { animationDelay: 0.1 * n + 0.3 + "s" }],
                                variant: "small",
                            }),
                        ),
                    ),
                );
            }
            const S = m.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "row", gap: e.spaces.space20 }, article: { animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0, transform: "scale(0.95)" }, "100%": { opacity: 1, transform: "scale(1)" } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both", flex: 1 } }));
            function D({ articles: e, onArticleClick: t }) {
                const n = e[0],
                    i = e.slice(1);
                return a.createElement(
                    s.Z,
                    { style: _.container },
                    a.createElement(
                        s.Z,
                        { style: _.leftContainer },
                        a.createElement(d.Z, {
                            article: n,
                            onClick: () => {
                                t(n.id);
                            },
                            showSentiment: !0,
                            style: _.article,
                            variant: "large",
                        }),
                    ),
                    e.length > 1 &&
                        a.createElement(
                            s.Z,
                            { style: _.rightContainer },
                            i.map((e, n) =>
                                a.createElement(
                                    a.Fragment,
                                    { key: `left-large-right-four-artticle-${e.id}` },
                                    0 !== n && a.createElement(p.Z, null),
                                    a.createElement(d.Z, {
                                        article: e,
                                        hideImg: !0,
                                        onClick: () => {
                                            t(e.id);
                                        },
                                        style: [_.article, _.rightArticleCard],
                                        summaryNumLines: 3,
                                        variant: "small",
                                    }),
                                ),
                            ),
                        ),
                );
            }
            const _ = m.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "row", gap: e.spaces.space20 }, leftContainer: { flex: 2, animationDelay: "0.5s", animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0, transform: "scale(0.95)" }, "100%": { opacity: 1, transform: "scale(1)" } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both" }, rightContainer: { flex: 1, display: "flex", flexDirection: "column", gap: e.spaces.space20, width: "100%", animationDelay: "0.7s", animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0, transform: "scale(0.95)" }, "100%": { opacity: 1, transform: "scale(1)" } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both" }, article: { flex: 1 }, rightArticleCard: { width: "100%" } }));
            var T = n(333830);
            function M({ articles: e, highlightedArticle: t, onArticleClick: n }) {
                return a.createElement(
                    s.Z,
                    { style: L.container },
                    e.map((e, t) =>
                        a.createElement(
                            a.Fragment,
                            { key: `small-article-${e.id}` },
                            0 !== t && a.createElement(x, null),
                            a.createElement(d.Z, {
                                article: e,
                                headerImgStyle: L.articleHeaderImg,
                                hideSummary: !0,
                                onClick: () => {
                                    n(e.id);
                                },
                                style: [L.article, { animationDelay: 0.1 * t + 0.3 + "s" }],
                                variant: "small",
                            }),
                        ),
                    ),
                    t &&
                        t.live_article &&
                        !!t.timeline &&
                        (t.timeline?.events || []).length > 0 &&
                        a.createElement(T.Z, {
                            articleId: t.id,
                            onRoute: () => {
                                n(t.id);
                            },
                            routeToArticle: !0,
                            style: L.article,
                            timeline: t.timeline,
                        }),
                );
            }
            const L = m.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "row", gap: e.spaces.space20 }, article: { animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0, transform: "scale(0.95)" }, "100%": { opacity: 1, transform: "scale(1)" } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both", flex: 1 }, articleHeaderImg: { minHeight: 200 } }));
            function O({ articles: e, onArticleClick: t }) {
                return a.createElement(
                    s.Z,
                    { style: $.container },
                    e.map((e, n) =>
                        a.createElement(
                            a.Fragment,
                            { key: `three-grid-article-${e.id}` },
                            0 !== n && a.createElement(x, null),
                            a.createElement(d.Z, {
                                article: e,
                                headerImgStyle: $.articleHeaderImg,
                                onClick: () => {
                                    t(e.id);
                                },
                                style: $.article,
                                summaryNumLines: 3,
                                variant: "small",
                            }),
                        ),
                    ),
                );
            }
            const $ = m.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "row", gap: e.spaces.space20 }, article: { flex: 1 }, articleHeaderImg: { minHeight: 250 } }));
            function A({ articles: e }) {
                const t = (0, u.Z)(),
                    { isCompactLayout: n } = (0, h.Z)();
                (0, f.Z)({});
                const i = a.useMemo(() => {
                        const t = { highlight: [], secondary: [], leftLargeRightFourGrid: [], fourWithoutImage: [], threeGrid: [], fourOnlyTitle: [] };
                        let n = 0;
                        t.highlight.push(e[0]), n++;
                        const a = e[0].live_article && e[0].timeline ? 3 : 4;
                        for (let i = 0; i < a && n < e.length; i++) t.secondary.push(e[n]), n++;
                        for (let a = 0; a < 3 && n < e.length; a++) t.leftLargeRightFourGrid.push(e[n]), n++;
                        for (let a = 0; a < 4 && n < e.length; a++) t.fourWithoutImage.push(e[n]), n++;
                        for (let a = 0; a < 3 && n < e.length; a++) t.threeGrid.push(e[n]), n++;
                        for (; n < e.length; ) t.fourOnlyTitle.push(e[n]), n++;
                        return t;
                    }, [e]),
                    r = i.highlight.length > 0 ? i.highlight[0] : null,
                    o = !!r?.sentiment && (r?.sentiment.sentiment_scores || []).length > 0,
                    l = (n) => {
                        (0, g.Ib)(t, { articleId: n, allArticleIds: e.map((e) => e.id) });
                    };
                return e.length
                    ? n
                        ? a.createElement(C, { articles: e })
                        : a.createElement(
                              s.Z,
                              { style: N.container },
                              r &&
                                  a.createElement(
                                      s.Z,
                                      { style: N.highlightedArticle },
                                      a.createElement(d.Z, {
                                          article: r,
                                          headerImgStyle: N.highlightedArticleHeaderImg,
                                          onClick: () => {
                                              l(r.id);
                                          },
                                          showSentiment: !0,
                                          useRowReactions: o,
                                          variant: "large",
                                      }),
                                  ),
                              i.secondary.length > 0 &&
                                  a.createElement(M, {
                                      articles: i.secondary,
                                      highlightedArticle: r,
                                      onArticleClick: (e) => {
                                          l(e);
                                      },
                                  }),
                              i.leftLargeRightFourGrid.length > 0 &&
                                  a.createElement(
                                      a.Fragment,
                                      null,
                                      a.createElement(p.Z, null),
                                      a.createElement(D, {
                                          articles: i.leftLargeRightFourGrid,
                                          onArticleClick: (e) => {
                                              l(e);
                                          },
                                      }),
                                  ),
                              i.fourWithoutImage.length > 0 &&
                                  a.createElement(
                                      a.Fragment,
                                      null,
                                      a.createElement(p.Z, null),
                                      a.createElement(I, {
                                          articles: i.fourWithoutImage,
                                          onArticleClick: (e) => {
                                              l(e);
                                          },
                                      }),
                                  ),
                              i.threeGrid.length > 0 &&
                                  a.createElement(
                                      a.Fragment,
                                      null,
                                      a.createElement(p.Z, null),
                                      a.createElement(O, {
                                          articles: i.threeGrid,
                                          onArticleClick: (e) => {
                                              l(e);
                                          },
                                      }),
                                  ),
                              i.fourOnlyTitle.length > 0 &&
                                  a.createElement(
                                      a.Fragment,
                                      null,
                                      a.createElement(p.Z, null),
                                      a.createElement(k, {
                                          articles: i.fourOnlyTitle,
                                          onArticleClick: (e) => {
                                              l(e);
                                          },
                                      }),
                                  ),
                          )
                    : null;
            }
            const N = m.default.create((e) => ({ container: { flex: 1, display: "flex", flexDirection: "column", gap: e.spaces.space28, paddingHorizontal: e.spaces.space28, paddingBottom: e.spaces.space64, paddingVertical: e.spaces.space48, maxWidth: 1200 }, highlightedArticle: { width: "100%", animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0, transform: "scale(0.9)" }, "100%": { opacity: 1, transform: "scale(1)" } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both" }, highlightedArticleHeaderImg: { minHeight: 350 } }));
            var H = n(305179),
                R = n(354061),
                B = (n(585488), n(712696)),
                W = n.n(B);
            const z = R.Z;
            const K = function ({ limit: e }) {
                    const t = W()(z, { limit: e }).deepsearchArticlesHomePageResult || [],
                        n = [];
                    return (
                        t.forEach((e) => {
                            e.trend_results && e.trend_results.result && e.trend_results.result.deepsearch_news_articles && n.push({ ...e.trend_results.result.deepsearch_news_articles, sentiment: e.trend_results.result.sentiment_data || void 0 });
                        }),
                        n
                    );
                },
                G = "News",
                P = "The latest realtime information.",
                J = { width: 600, height: 315, url: "https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg" },
                j = { context: "NEWS" };
            function U() {
                (0, c.ZP)();
                const e = K({ limit: 19 });
                return (
                    a.useEffect(() => {
                        (0, c.jW)("news-content-ready");
                    }, []),
                    a.createElement(l.H, { errorConfig: j }, a.createElement(r.Z, { description: P, includeOpenGraphMeta: !1, title: G }), a.createElement(o.Z, { canonical: (0, i.ju)(window.location.href), description: P, image: J.url, imageH: J.height, imageW: J.width, title: G, type: "article" }), a.createElement(H.Z, { scribeNamespace: "news" }, e.length > 0 && a.createElement(A, { articles: e })))
                );
            }
        },
        955251: (e, t, n) => {
            n.d(t, { O: () => l });
            var a = n(392237),
                i = n(757483);
            const r = { background: "#F8F7F5", foreground: "#111111", secondary: "#FFFFFF", white: "#FFFFFF", transparentBlue: "#326CFF26", blue: "#326CFF" },
                o = { background: "#212121", foreground: "#ffffff", secondary: "#303030", white: "#FFFFFF", transparentBlue: "#326CFF26", blue: "#326CFF" };
            function l(e, t) {
                return a.default.isDarkerMode() || a.default.isDarkMode() ? (void 0 === t ? o[e] : i.Z.hexToCss(o[e], t)) : void 0 === t ? r[e] : i.Z.hexToCss(r[e], t);
            }
        },
        345425: (e, t, n) => {
            n.d(t, { f: () => a });
            const a = { fontSize: 18, lineHeight: 30 };
        },
        448301: (e, t, n) => {
            function a(e) {
                const t = new Date(),
                    n = Math.floor((e.getTime() - t.getTime()) / 1e3),
                    a = Math.abs(n),
                    i = 86400,
                    r = 3600,
                    o = 60;
                let l;
                if (a >= i) {
                    const e = Math.floor(a / i);
                    l = `${e} day${1 === e ? "" : "s"}`;
                } else if (a >= r) {
                    const e = Math.floor(a / r);
                    l = `${e} hour${1 === e ? "" : "s"}`;
                } else if (a >= o) {
                    const e = Math.floor(a / o);
                    l = `${e} min${1 === e ? "" : "s"}`;
                } else {
                    const e = Math.floor(a);
                    l = `${e} sec${1 === e ? "" : "s"}`;
                }
                return n >= 0 ? `${l} later` : `${l} ago`;
            }
            function i(e) {
                const t = Intl.DateTimeFormat().resolvedOptions().timeZone,
                    n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][e.getMonth()],
                    a = e.getDate(),
                    i = e.getFullYear(),
                    r = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0, timeZone: t, timeZoneName: "short" }).formatToParts(e);
                return `${n} ${a}, ${i} Updated ${r.find((e) => "hour" === e.type)?.value || ""}:${r.find((e) => "minute" === e.type)?.value || ""} ${r.find((e) => "dayPeriod" === e.type)?.value || ""} ${r.find((e) => "timeZoneName" === e.type)?.value || ""}`;
            }
            function r(e) {
                if (isNaN(e)) return "0";
                const t = Math.abs(e);
                if (t >= 1e6) {
                    const e = t / 1e6;
                    return `${e % 1 == 0 ? e : e.toFixed(1)}M`;
                }
                if (t >= 1e3) {
                    const e = t / 1e3;
                    return `${e % 1 == 0 ? e : e.toFixed(1)}K`;
                }
                return e.toString();
            }
            n.d(t, { p6: () => i, pi: () => a, uf: () => r });
        },
        695356: (e, t, n) => {
            function a(e, t) {
                s(e)({ element: "news-open-article", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function i(e, t) {
                s(e)({ element: "news-article-card-impression", action: "view", data: { impression_id: t.articleId } });
            }
            function r(e, t) {
                s(e)({ element: "news-page-session-duration", action: "focus", data: { duration_ms: t.durationMs, url: t.url, event_info: t.sessionId } });
            }
            function o(e, t) {
                s(e)({ element: "news-open-website-source", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function l(e, t) {
                s(e)({ element: "news-open-post-source", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function c(e, t) {
                s(e)({ element: "news-article-section-impression", action: "view", data: { impression_id: t.articleId, event_info: JSON.stringify({ sectionIdx: t.sectionIdx, totalNumSections: t.totalNumSections }) } });
            }
            n.d(t, { E7: () => r, Ib: () => a, U8: () => l, _$: () => i, sq: () => o, xi: () => c });
            const s = (e) => (t) => {
                e.scribe({ ...t, data: { url: window.location.href, ...t.data } });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.News-c4c736e0.a8f1642a.js.map
