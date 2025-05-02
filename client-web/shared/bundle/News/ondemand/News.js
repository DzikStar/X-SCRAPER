"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.News~ondemand.News", "bundle.AudioSpaceDetail"],
    {
        529256: (e, t, n) => {
            n.d(t, { Z: () => o });
            var l = n(202784),
                a = n(272175),
                i = n(38293),
                s = n(572067);
            const r = ({ children: e, description: t, includeOpenGraphMeta: n = !0, title: r }) => l.createElement(l.Fragment, null, r && l.createElement(i.Z, { title: r, withMeta: n }), n && l.createElement(s.Z, { description: t, title: r }), l.createElement(a.ql, null, l.createElement("meta", { description: t, name: "description" })), e),
                o = l.memo(r);
        },
        572067: (e, t, n) => {
            n.d(t, { Z: () => i });
            var l = n(202784),
                a = n(272175);
            const i = (e) => {
                const { canonical: t, description: n = "", image: i, imageAlt: s, imageH: r, imageType: o, imageW: c, title: u, ttl: d, type: m } = e;
                return l.createElement(a.ql, null, m ? l.createElement("meta", { content: m, property: "og:type" }) : null, t ? l.createElement("meta", { content: t, property: "og:url" }) : null, u ? l.createElement("meta", { content: u, property: "og:title" }) : null, l.createElement("meta", { content: n, property: "og:description" }), i ? l.createElement("meta", { content: i, property: "og:image" }) : null, o ? l.createElement("meta", { content: o, property: "og:image:type" }) : null, c ? l.createElement("meta", { content: c, property: "og:image:width" }) : null, r ? l.createElement("meta", { content: r, property: "og:image:height" }) : null, s ? l.createElement("meta", { content: s, property: "og:image:alt" }) : null, d ? l.createElement("meta", { content: d, property: "og:ttl" }) : null);
            };
        },
        373981: (e, t, n) => {
            n.d(t, { Z: () => l });
            const l = { ...n(332878).Z, pinToNewestWhenAtNewest: !0 };
        },
        332878: (e, t, n) => {
            n.d(t, { Z: () => c });
            function l(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const a = (e, t, n) => {
                    const l = e(t),
                        a = e(n);
                    return !l && a ? -1 : l && !a ? 1 : 0;
                },
                i = (e, t, n) => s(e(n), e(t)),
                s = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                r = (e, t) => {
                    if (e.length) return e.reduce((e, n) => (t(n, e) > 0 ? n : e));
                },
                o = ({ nextPos: e, prevPos: t }) => {
                    const n = t.getForViewport(),
                        s = (e) => e && e.doesIntersectWith(n),
                        o = (e) => (e ? Math.abs(n.getTop() - e.getTop()) : 1 / 0),
                        c = e.getList().filter(({ id: n }) => !l(n) && t.isRendered(n) && e.isRendered(n)),
                        u =
                            c.length > 0
                                ? r(c, (e, n) => {
                                      const l = t.getForItem(e.id),
                                          r = t.getForItem(n.id);
                                      return a(s, l, r) || i(o, l, r);
                                  })
                                : null;
                    return u && u.id;
                },
                c = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, t) => {
                        const { distanceToViewportBottom: n, distanceToViewportTop: l, id: a } = t;
                        if ("number" == typeof l) {
                            const t = e.getForViewport().getTop() + l;
                            return e.getForItem(a).getTop() - t;
                        }
                        if ("number" == typeof n) {
                            const t = e.getForViewport().getBottom() + n;
                            return e.getForItem(a).getBottom() - t;
                        }
                        return 0;
                    },
                    scrollHeadroom: (e) => {
                        const t = e.getForList().getBottom(),
                            n = e.getForViewport().getBottom();
                        return Math.max(0, n - t);
                    },
                    anchorCandidates: (e) => {
                        const t = e.getForViewport().getTop();
                        return e
                            .findVisibleItems()
                            .filter(({ id: e }) => !l(e))
                            .map(({ id: e, rectangle: n }) => ({ id: e, distanceToViewportTop: n.getTop() - t }));
                    },
                    pinToNewestWhenAtNewest: !1,
                    offsetCorrection(e, t) {
                        if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToNewestWhenAtNewest) return 0;
                        const n = o({ prevPos: e, nextPos: t });
                        if (n) {
                            const l = e.getForItem(n).getTop() - e.getForViewport().getTop();
                            return t.getForItem(n).getTop() - t.getForViewport().getTop() - l;
                        }
                        return 0;
                    },
                };
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => u });
            var l = n(202784),
                a = n(500002),
                i = n(668214),
                s = n(997174),
                r = n(118823);
            const o = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: r.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class c extends l.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: l },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: i, search: s },
                            locationKey: r,
                        } = e;
                    let o = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (o = !0));
                    const c = a || r;
                    ((c && a !== r) || (!c && n !== i) || l !== s || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: l } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), l(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const u = (0, a.ZP)(o(c));
        },
        221972: (e, t, n) => {
            n.d(t, { Z: () => c });
            var l = n(202784),
                a = n(107267),
                i = n(468811),
                s = n.n(i),
                r = n(725405),
                o = n(695356);
            const c = ({ sessionTimeoutMs: e = 1e4, activeTimeThreshold: t = 5e3 }) => {
                const [n, i] = l.useState(s().v4()),
                    c = (0, r.Z)(),
                    u = l.useRef(performance.now()),
                    d = l.useRef("visible" === document.visibilityState),
                    m = l.useRef(0),
                    p = l.useRef(0),
                    g = l.useRef(0),
                    y = l.useRef(null),
                    h = (0, a.useLocation)(),
                    f = () => {
                        const l = performance.now(),
                            a = m.current - u.current,
                            r = l - m.current;
                        if (0 !== m.current) {
                            if (r > e) return i(s().v4()), (u.current = l), (m.current = 0), (p.current = 0), void (g.current = 0);
                            if (d.current) {
                                a - g.current > t && ((0, o.E7)(c, { url: h.pathname, durationMs: a, sessionId: n }), (p.current = l), (g.current = a));
                            }
                        } else u.current = l;
                    },
                    k = () => {
                        d.current = "visible" === document.visibilityState;
                    },
                    _ = () => {
                        m.current = performance.now();
                    };
                l.useEffect(() => {
                    (y.current = setInterval(f, 1e3)), document.addEventListener("visibilitychange", k);
                    const e = ["mousemove", "click", "keydown", "scroll", "touchstart"];
                    e.forEach((e) => {
                        document.addEventListener(e, _);
                    });
                    const t = () => {
                        f();
                    };
                    return (
                        window.addEventListener("beforeunload", t),
                        () => {
                            clearInterval(y.current),
                                document.removeEventListener("visibilitychange", k),
                                e.forEach((e) => {
                                    document.removeEventListener(e, _);
                                }),
                                window.removeEventListener("beforeunload", t);
                        }
                    );
                }, [h.pathname, e, c, n]);
            };
        },
        4976: (e, t, n) => {
            n.d(t, { Z: () => oe });
            n(136728);
            var l = n(202784),
                a = n(325686),
                i = n(858440),
                s = n(392237),
                r = n(725405),
                o = n(125363),
                c = n(836255),
                u = n(731708);
            const d = "This story may evolve over time. Grok can make mistakes, verify its outputs.";
            function m({ style: e }) {
                return l.createElement(u.ZP, { style: [p.text, e] }, d);
            }
            const p = s.default.create((e) => ({ text: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 } }));
            var g = n(118368),
                y = n(221972),
                h = n(246728);
            const f = { fontSize: 18, lineHeight: 30 };
            var k = n(448301),
                _ = n(695356),
                b = n(992942);
            function w({ blurAmount: e, imageOpacity: t, imageUrl: n, style: a }) {
                return n ? l.createElement(b.Z, { resizeMode: "cover", source: n, style: [E.banner, { opacity: t }, { filter: `blur(${e || 0}px)` }, a] }) : null;
            }
            const E = s.default.create((e) => ({ banner: { width: "100%", height: 400, borderRadius: e.borderRadii.large, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1 } }));
            var S = n(790167),
                F = n(530732);
            function x({ postId: e, style: t }) {
                const n = l.useMemo(() => c.Z.createHydratorForTweet(e), [e]),
                    i = (0, o.v9)(n);
                if (!i) return l.createElement(a.Z, { style: T.attributionContainer });
                const { user: s } = i;
                return l.createElement(
                    a.Z,
                    { style: [T.attributionContainer, t] },
                    l.createElement(
                        F.Z,
                        {
                            onClick: () => {
                                window.open(`https://x.com${i.permalink}`, "_blank");
                            },
                            withoutInteractiveStyles: !0,
                        },
                        ({ isHovered: e }) => l.createElement(u.ZP, { style: T.attribution }, `Image posted by @${s.screen_name}`),
                    ),
                );
            }
            const T = s.default.create((e) => ({ attributionContainer: { height: e.spaces.space16, marginTop: e.spaces.space4, width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-end" }, attribution: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" } }));
            var v = n(555874);
            function Z({ bulletpoints: e }) {
                return l.createElement(a.Z, { style: C.bulletPointsWithLineContainer }, l.createElement(a.Z, { style: C.lineContainer }, l.createElement(a.Z, { style: C.line })), l.createElement(v.Z, { ItemSeparatorComponent: () => l.createElement(a.Z, { style: C.bulletpointGap }), data: e, keyExtractor: (e, t) => `keypoint-${t}`, renderItem: ({ item: e }) => l.createElement(K, { bulletpoint: e }) }));
            }
            function K({ bulletpoint: e }) {
                return l.createElement(a.Z, { style: C.bulletpoint }, l.createElement(a.Z, { style: C.circle }), l.createElement(u.ZP, { style: C.text }, e));
            }
            const C = s.default.create((e) => ({ keypointsHeader: { marginBottom: e.spaces.space16 }, bulletPointsWithLineContainer: { width: "100%", position: "relative" }, lineContainer: { position: "absolute", start: 0, top: 0, display: "flex", flexDirection: "column", alignItems: "center", width: e.spaces.space16, height: "100%" }, line: { width: e.spaces.space2, height: "100%", backgroundColor: e.colors.gray300 }, bulletpointGap: { height: e.spaces.space24 }, bulletpoint: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 }, circle: { width: e.spaces.space16, height: e.spaces.space16, borderRadius: e.spaces.space16, borderWidth: 2, borderStyle: "solid", borderColor: e.colors.gray300, backgroundColor: e.colors.navigationBackground }, text: { ...f } }));
            function I({ style: e, text: t }) {
                return l.createElement(u.ZP, { style: [L.subheader, e], weight: "bold" }, t);
            }
            const L = s.default.create((e) => ({ subheader: { fontSize: e.fontSizes.headline1 } })),
                P = "Key Points";
            function z({ keyPoints: e, style: t }) {
                return e.length ? l.createElement(a.Z, { style: [D.container, t] }, l.createElement(I, { style: D.keypointsHeader, text: P }), l.createElement(Z, { bulletpoints: e })) : null;
            }
            const D = s.default.create((e) => ({ container: { width: "100%" }, keypointsHeader: { marginBottom: e.spaces.space16 } }));
            var A = n(477575),
                R = n(274234),
                N = n(194504),
                B = n(287627),
                H = n(931173);
            function M({ commentPostIds: e, commentsPillContainerStyle: t, commentsPillStyle: n, numComments: i, posts: s, postsCarouselContentStyle: o, postsCarouselStyle: c, style: u }) {
                const d = (0, r.Z)(),
                    m = l.useMemo(() => {
                        const e = [];
                        return (
                            s.forEach((t) => {
                                t.post_results.rest_id && e.push(t.post_results.rest_id);
                            }),
                            e
                        );
                    }, [s]);
                return l.createElement(
                    a.Z,
                    { style: [V.container, u] },
                    l.createElement(
                        N.Z,
                        { buttonsContainerStyle: { ...V.carouselContent, ...(o || {}) }, style: [V.carousel, c] },
                        m.map((e, t) =>
                            l.createElement(H.Z, {
                                containerStyle: V.postContainer,
                                isPreview: !0,
                                key: e,
                                numberOfLines: 3,
                                onClick: () => {
                                    (0, _.U8)(d, { postId: e, allPostIds: m });
                                },
                                postId: e,
                                style: [V.post, { animationDelay: 0.1 * t + "s" }],
                                tweetTextStyle: V.postText,
                            }),
                        ),
                    ),
                    l.createElement(B.Z, { containerStyle: t, disableClick: !0, numPosts: i, postIds: e, style: [V.commentsPill, n], textStyle: V.commentsPillText, variant: "outline" }),
                );
            }
            const V = s.default.create((e) => ({ container: { width: "100%" }, carousel: { width: "100%", flex: 1 }, carouselContent: { display: "flex", flexDirection: "row", flex: 1 }, postContainer: { width: 250, flex: "unset", marginEnd: e.spaces.space12 }, post: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(-10px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, postText: { fontSize: e.fontSizes.subtext1 }, commentsPill: { marginTop: e.spaces.space12 }, commentsPillText: { fontSize: e.fontSizes.subtext2 } }));
            var W = n(373981),
                U = n(810641),
                O = n(519896),
                G = n(383675);
            const $ = "What is the world saying?";
            function q({ article: e, isExplore: t }) {
                const { isCompactLayout: n } = (0, h.Z)();
                if (!e.post_timelines || 0 === e.post_timelines.length) return null;
                const i = e.post_timelines[0].post_timeline.id;
                return l.createElement(a.Z, { style: [j.container, t || n ? { paddingHorizontal: "0%" } : { paddingHorizontal: "27%" }] }, l.createElement(I, { style: j.header, text: $ }), i && l.createElement(Q, { timelineId: i }));
            }
            function Q({ timelineId: e }) {
                const t = X(e);
                return t ? l.createElement(U.Z, { anchoring: W.Z, module: t, onTimelinePoll: () => {}, prerollDisplayLocation: O.Nw.OTHER, refreshControl: null, renderEmptyState: () => null, title: "" }) : null;
            }
            const X = (e) => l.useMemo(() => e && (0, G.R)(e, !1), [e]),
                j = s.default.create((e) => ({ container: { display: "flex", flexDirection: "column", width: "100%" }, header: { textAlign: "center", marginBottom: e.spaces.space32 }, timeline: { width: "100%" } }));
            var Y = n(400196),
                J = n(306677),
                ee = n(45843);
            function te({ image_caption: e, image_height: t = 400, image_size: n, image_url: i }) {
                const [s, r] = l.useState({ width: 0, height: t });
                return (
                    l.useEffect(() => {
                        i &&
                            ee.Z.getSize(
                                i,
                                (e, n) => {
                                    r({ width: t * (e / n), height: t });
                                },
                                (e) => {
                                    r({ width: t, height: t });
                                },
                            );
                    }, [i, t]),
                    i ? l.createElement(a.Z, { style: ne.container }, l.createElement(b.Z, { resizeMode: "contain", source: i, style: [ne.img, { width: s.width, height: s.height }] }), !!e && l.createElement(u.ZP, { style: ne.caption }, e)) : null
                );
            }
            const ne = s.default.create((e) => ({ container: { display: "flex", flexDirection: "column", alignItems: "center", gap: e.spaces.space8, textAlign: "center", width: "100%", paddingHorizontal: "10%" }, img: {}, caption: { width: "70%", textAlign: "center", color: e.colors.gray1000, fontSize: e.fontSizes.subtext1 } }));
            var le = n(282279);
            function ae({ isExplore: e = !1, onSectionVisible: t, section: n, sources: i, style: s }) {
                const { isCompactLayout: r } = (0, h.Z)();
                return l.createElement(a.Z, { style: [ie.section, s] }, l.createElement(J.D, { id: "news_article_section", onFullyVisible: t, position: "top", testID: "news_article_section" }), !!n.title && l.createElement(I, { text: n.title }), !!n.content.text && l.createElement(S.Z, { sources: i, style: ie.body, text: n.content.text }), n.content.bullets && l.createElement(Z, { bulletpoints: n.content.bullets }), !!n.content.image_url && l.createElement(te, { image_caption: n.content.image_caption, image_size: n.content.image_size, image_url: n.content.image_url }), n.content.website && l.createElement(le.Z, { website: n.content.website }), n.content.post && l.createElement(a.Z, { style: [ie.outerTweetContainer, r || e ? ie.compactOuterTweetContainer : void 0] }, l.createElement(a.Z, { style: ie.tweetContainer }, l.createElement(Y.ZP, { displayPromotedContent: !0, isCompact: r, tweetId: n.content.post.post_results.rest_id, withActions: !0 }))));
            }
            const ie = s.default.create((e) => ({ section: { display: "flex", flexDirection: "column", gap: e.spaces.space16 }, outerTweetContainer: { width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingHorizontal: "15%" }, compactOuterTweetContainer: { paddingHorizontal: "unset" }, tweetContainer: { borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, borderRadius: e.borderRadii.large, overflow: "hidden", width: "100%" }, body: { ...f } }));
            var se = n(2025),
                re = n(978086);
            function oe({ article: e, isExplore: t = !1 }) {
                (0, y.Z)({});
                const n = (0, r.Z)(),
                    s = (0, o.I0)(),
                    u = (0, i.Z)(),
                    { isCompactLayout: d } = (0, h.Z)(),
                    p = !t && u.width > 1100,
                    f = { width: t || d ? "5%" : "27%" },
                    b = e && (0, k.ZW)(e) && !t && (d || !p),
                    E = l.useMemo(() => {
                        if (!e) return [];
                        const t = [];
                        return (
                            e.posts.forEach((e) => {
                                e.post_results.rest_id && t.push(e.post_results.rest_id);
                            }),
                            t
                        );
                    }, [e]),
                    F = l.useMemo(() => {
                        if (!e) return [];
                        const t = [...E];
                        return (
                            e.header_img_post_id && t.push(e.header_img_post_id.post_results.rest_id),
                            e.sections.forEach((e) => {
                                e.content.post && e.content.post.post_results.rest_id && t.push(e.content.post.post_results.rest_id);
                            }),
                            t
                        );
                    }, [e, E]);
                l.useEffect(() => {
                    s(c.Z.fetchMultiple(F));
                }, [s, F]);
                const T = l.useCallback(
                        (t) => {
                            e && (0, _.xi)(n, { articleId: e.id, sectionIdx: t, totalNumSections: e.sections.length });
                        },
                        [e, n],
                    ),
                    v = l.useMemo(() => {
                        const t = [];
                        return e && (0, k.ZW)(e) && t.push(e.timeline), t;
                    }, [e]);
                return e
                    ? l.createElement(
                          l.Fragment,
                          null,
                          l.createElement(
                              a.Z,
                              { style: ce.container },
                              l.createElement(a.Z, { style: ce.bannerContainer }, !t && l.createElement(a.Z, { style: f }), l.createElement(a.Z, { style: ce.banner }, l.createElement(w, { imageUrl: e.header_img_url, style: t ? ce.exploreBanner : void 0 }), e.header_img_post_id && l.createElement(x, { postId: e.header_img_post_id.post_results.rest_id, style: t ? ce.exploreImageAttribution : void 0 })), !t && l.createElement(a.Z, { style: f })),
                              l.createElement(
                                  a.Z,
                                  { style: ce.content },
                                  l.createElement(a.Z, { style: f }),
                                  l.createElement(
                                      a.Z,
                                      { style: [ce.centerComponents, d && ce.compactCenterComponents] },
                                      l.createElement(a.Z, { style: ce.headerContainer }, l.createElement(re.Z, { text: e.title, textStyle: ce.title }), l.createElement(A.Z, { textStyle: ce.lastUpdatedAt, timestamp: e.last_updated_at }), !!e.summary && l.createElement(S.Z, { sources: [], style: ce.summary, text: e.summary })),
                                      l.createElement(a.Z, { style: ce.postsContainer }, b && l.createElement(R.Z, { article: e, hideTitle: !0, isInline: !0 }), e.posts && e.posts.length > 0 && l.createElement(M, { commentPostIds: E, numComments: Number(e.total_trend_posts), posts: e.posts })),
                                      e.key_points && e.key_points.length > 0 && l.createElement(z, { keyPoints: e.key_points }),
                                      e.sections.map((n, a) =>
                                          l.createElement(ae, {
                                              isExplore: t,
                                              key: `section-${a}`,
                                              onSectionVisible: () => {
                                                  T(a);
                                              },
                                              section: n,
                                              sources: e.sources,
                                          }),
                                      ),
                                      e.sentiment && !t && l.createElement(se.Z, { sentiment: e.sentiment, style: ce.sentimentContainer }),
                                      l.createElement(m, null),
                                  ),
                                  p && v.length > 0 ? l.createElement(a.Z, { style: [ce.rightSideComponents, f] }, (0, k.ZW)(e) && l.createElement(R.Z, { article: e, hideTitle: !0, style: ce.rightSideTimeline })) : l.createElement(a.Z, { style: f }),
                              ),
                              l.createElement(g.Z, { style: ce.bottomDivider }),
                              e.post_timelines && e.post_timelines.length > 0 && l.createElement(q, { article: e, isExplore: t }),
                              l.createElement(a.Z, { style: ce.scrollViewBottomSpace }),
                          ),
                      )
                    : null;
            }
            const ce = s.default.create((e) => ({ container: { position: "relative", overflow: "hidden", flex: 1, width: "100%" }, bannerContainer: { display: "flex", flexDirection: "row" }, exploreBanner: { borderRadius: 0, height: 300 }, exploreImageAttribution: { paddingEnd: e.spaces.space8 }, banner: { flex: 1, position: "relative" }, content: { display: "flex", flexDirection: "row" }, centerComponents: { flex: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both", display: "flex", flexDirection: "column", gap: e.spaces.space32, marginTop: e.spaces.space16 }, compactCenterComponents: { gap: e.spaces.space24 }, scrollViewBottomSpace: { height: 200 }, headerContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space12 }, title: { fontSize: e.fontSizes.title1, lineHeight: 40 }, lastUpdatedAt: { fontSize: e.fontSizes.subtext1 }, summary: { ...f }, postsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space12, width: "100%" }, sentimentContainer: { width: "unset", flex: 1 }, rightSideComponents: { paddingHorizontal: e.spaces.space28, marginTop: e.spaces.space8 }, rightSideTimeline: { width: "90%", marginTop: e.spaces.space16 }, bottomDivider: { marginVertical: e.spaces.space32 } }));
        },
        274234: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var l = n(202784),
                a = n(325686),
                i = n(107267),
                s = n(530732),
                r = n(731708),
                o = n(392237),
                c = n(448301),
                u = n(206411);
            function d({ article: e, containerStyle: t, hideTitle: n, isInline: o, onRoute: d, routeToArticle: p, style: g }) {
                const y = (0, i.useHistory)(),
                    h = e.timeline,
                    f = l.useCallback(() => {
                        d && d(), y.push(`/i/news/article/${e.id}`);
                    }, [y, e, d]);
                return h
                    ? l.createElement(s.Z, { onClick: p ? f : void 0, style: t, withoutInteractiveStyles: !0 }, ({ isHovered: e }) =>
                          l.createElement(
                              a.Z,
                              { style: [m.container, o ? m.inlineContainer : void 0, g] },
                              l.createElement(a.Z, { style: m.headerContainer }, !n && l.createElement(r.ZP, { style: m.title, weight: "bold" }, h.title), l.createElement(u.Z, { isAnimated: !0, style: m.liveLabel })),
                              l.createElement(
                                  a.Z,
                                  { style: m.events },
                                  (h.events || []).map((e, t) => {
                                      const n = new Date(Number(e.timestamp)),
                                          i = (0, c.pi)(n);
                                      return l.createElement(a.Z, { key: `live-event-${e.summary || ""}`, style: m.event }, l.createElement(r.ZP, { style: [m.timestamp, o ? m.inlineTimestamp : void 0, 0 === t ? m.mostRecentTimestamp : void 0] }, i), l.createElement(r.ZP, { style: [m.eventTitle, o ? m.inlineEventTitle : void 0], weight: "medium" }, e.summary));
                                  }),
                              ),
                          ),
                      )
                    : null;
            }
            const m = o.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space16, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both", maxWidth: 350 }, inlineContainer: { maxWidth: "unset", width: "100%", padding: e.spaces.space16, backgroundColor: "transparent", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100 }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: e.spaces.space8 }, title: { fontSize: e.fontSizes.headline2, lineHeight: 23, transition: "all 0.2s ease" }, liveLabel: { top: e.spaces.space2 }, events: { display: "flex", flexDirection: "column", gap: e.spaces.space16 }, event: { display: "flex", flexDirection: "row", gap: e.spaces.space8, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" }, timestamp: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, flex: 1 }, inlineTimestamp: { fontSize: e.fontSizes.subtext2 }, mostRecentTimestamp: { color: e.colors.red500 }, eventTitle: { flex: 3, fontSize: e.fontSizes.subtext2, transition: "all 0.2s ease" }, inlineEventTitle: { fontSize: e.fontSizes.subtext1 } }));
        },
        768431: (e, t, n) => {
            n.d(t, { Z: () => ne });
            var l,
                a,
                i,
                s,
                r,
                o,
                c,
                u,
                d,
                m,
                p,
                g,
                y,
                h,
                f,
                k,
                _,
                b,
                w,
                E,
                S,
                F,
                x,
                T,
                v,
                Z,
                K,
                C,
                I,
                L,
                P,
                z,
                D,
                A,
                R,
                N,
                B,
                H,
                M,
                V,
                W,
                U,
                O,
                G,
                $,
                q,
                Q,
                X,
                j = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "trendId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useNewsArticleQuery",
                        selections: [
                            {
                                alias: "newsArticleResult",
                                args: (a = [
                                    { kind: "Variable", name: "rest_id", variableName: "trendId" },
                                    { kind: "Literal", name: "s", value: "84b0" },
                                ]),
                                concreteType: "AiTrendResults",
                                kind: "LinkedField",
                                name: "ai_trend_by_rest_id",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "result",
                                        plural: !1,
                                        selections: [
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    (s = {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "AiTrendPage",
                                                        kind: "LinkedField",
                                                        name: "page",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "AiTrendPostTimeline",
                                                                kind: "LinkedField",
                                                                name: "post_timelines",
                                                                plural: !0,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "label", storageKey: null },
                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "post_timeline", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    }),
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "NewsArticle",
                                                        kind: "LinkedField",
                                                        name: "deepsearch_news_articles",
                                                        plural: !1,
                                                        selections: [
                                                            i,
                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "header_img_url", storageKey: null }),
                                                            (c = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "header_img_post_id", plural: !1, selections: (o = [{ alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "post_results", plural: !1, selections: [i, { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], storageKey: null }]), storageKey: null }),
                                                            (u = { alias: null, args: null, kind: "ScalarField", name: "key_points", storageKey: null }),
                                                            (d = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                            (m = { alias: null, args: null, kind: "ScalarField", name: "summary", storageKey: null }),
                                                            (p = { alias: null, args: null, kind: "ScalarField", name: "last_updated_at", storageKey: null }),
                                                            (g = { alias: null, args: null, kind: "ScalarField", name: "total_trend_posts", storageKey: null }),
                                                            (y = { alias: null, args: null, kind: "ScalarField", name: "live_article", storageKey: null }),
                                                            (f = { alias: null, args: null, concreteType: "NewsTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ alias: null, args: null, concreteType: "NewsTimelineEvent", kind: "LinkedField", name: "events", plural: !0, selections: [m, (h = { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null })], storageKey: null }, d], storageKey: null }),
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "NewsArticleSection",
                                                                kind: "LinkedField",
                                                                name: "sections",
                                                                plural: !0,
                                                                selections: [
                                                                    d,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "content",
                                                                        plural: !1,
                                                                        selections: [
                                                                            (k = { kind: "InlineFragment", selections: [{ alias: "bullets", args: null, kind: "ScalarField", name: "content", storageKey: null }], type: "BulletsBlock", abstractKey: null }),
                                                                            (_ = {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_caption", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_size", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null },
                                                                                ],
                                                                                type: "ImageBlock",
                                                                                abstractKey: null,
                                                                            }),
                                                                            (b = { kind: "InlineFragment", selections: [{ alias: "inline_header", args: null, kind: "ScalarField", name: "content", storageKey: null }], type: "InlineHeader", abstractKey: null }),
                                                                            (w = { kind: "InlineFragment", selections: [{ alias: "text", args: null, kind: "ScalarField", name: "content", storageKey: null }], type: "TextBlock", abstractKey: null }),
                                                                            (R = { kind: "InlineFragment", selections: [{ alias: "website", args: null, concreteType: "GrokBraveSearch", kind: "LinkedField", name: "content", plural: !1, selections: [(E = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), (S = { alias: null, args: null, kind: "ScalarField", name: "cached_page_url", storageKey: null }), (F = { alias: null, args: null, kind: "ScalarField", name: "creator", storageKey: null }), (x = { alias: null, args: null, kind: "ScalarField", name: "date_last_crawled", storageKey: null }), (T = { alias: null, args: null, kind: "ScalarField", name: "date_published", storageKey: null }), (v = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (Z = { alias: null, args: null, kind: "ScalarField", name: "favicon", storageKey: null }), (K = { alias: null, args: null, kind: "ScalarField", name: "favicon_base64", storageKey: null }), (C = { alias: null, args: null, kind: "ScalarField", name: "image", storageKey: null }), (I = { alias: null, args: null, kind: "ScalarField", name: "language", storageKey: null }), (L = { alias: null, args: null, kind: "ScalarField", name: "parsed_text", storageKey: null }), (P = { alias: null, args: null, kind: "ScalarField", name: "site_name", storageKey: null }), (z = { alias: null, args: null, kind: "ScalarField", name: "snippet", storageKey: null }), (D = { alias: null, args: null, kind: "ScalarField", name: "time_accessed", storageKey: null }), d, (A = { alias: null, args: null, kind: "ScalarField", name: "media_name", storageKey: null }), m], storageKey: null }], type: "WebsiteBlock", abstractKey: null }),
                                                                            (N = { kind: "InlineFragment", selections: [{ alias: "post", args: null, concreteType: "Post", kind: "LinkedField", name: "content", plural: !1, selections: o, storageKey: null }], type: "PostBlock", abstractKey: null }),
                                                                            (G = { kind: "InlineFragment", selections: [(B = { alias: null, args: null, kind: "ScalarField", name: "last_time_updated", storageKey: null }), (H = { alias: null, args: null, kind: "ScalarField", name: "question", storageKey: null }), { alias: null, args: null, concreteType: "SentimentScore", kind: "LinkedField", name: "sentiment_scores", plural: !0, selections: [(M = { alias: null, args: null, kind: "ScalarField", name: "num_posts", storageKey: null }), (V = { alias: null, args: null, kind: "ScalarField", name: "sentiment_type", storageKey: null }), (W = { alias: null, args: null, kind: "ScalarField", name: "sentiment_value", storageKey: null }), h], storageKey: null }, (U = { alias: null, args: null, kind: "ScalarField", name: "sentiment_types", storageKey: null }), (O = { alias: null, args: null, kind: "ScalarField", name: "trend_id", storageKey: null })], type: "TrendSentiment", abstractKey: null }),
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            ($ = { alias: null, args: null, concreteType: "GrokBraveSearch", kind: "LinkedField", name: "sources", plural: !0, selections: [E, S, F, x, T, v, Z, K, C, I, L, P, z, D, d, m, A], storageKey: null }),
                                                            (q = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "posts", plural: !0, selections: o, storageKey: null }),
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (Q = { alias: null, args: null, concreteType: "TrendSentiment", kind: "LinkedField", name: "sentiment_data", plural: !1, selections: [O, H, B, U, { alias: null, args: null, concreteType: "SentimentScore", kind: "LinkedField", name: "sentiment_scores", plural: !0, selections: [V, W, M, h], storageKey: null }], storageKey: null }),
                                                ],
                                                type: "AiTrend",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useNewsArticleQuery", selections: [{ alias: "newsArticleResult", args: a, concreteType: "AiTrendResults", kind: "LinkedField", name: "ai_trend_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(X = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [s, { alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [i, r, c, u, d, m, p, g, y, f, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [d, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [X, k, _, b, w, R, N, G], storageKey: null }], storageKey: null }, $, q], storageKey: null }, Q, i], type: "AiTrend", abstractKey: null }], storageKey: null }, i], storageKey: null }] },
                    params: { id: "OGuIchikkLkacWpMvS1Wpg", metadata: {}, name: "useNewsArticleQuery", operationKind: "query", text: null },
                };
            j.hash = "a506b224a236e8986b17cac3a53a9878";
            const Y = j;
            n(585488);
            var J = n(712696),
                ee = n.n(J);
            const te = Y;
            const ne = function ({ trendId: e }) {
                const t = ee()(te, { trendId: e }).newsArticleResult;
                if (!t) return null;
                const n = t.result;
                if (!n || !n.deepsearch_news_articles) return null;
                const l = n.page?.post_timelines || [];
                return { ...n.deepsearch_news_articles, sentiment: n.sentiment_data ?? void 0, post_timelines: l } || null;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.News~ondemand.News.09f107ca.js.map
