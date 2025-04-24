"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.News-e019dbda", "bundle.AudioSpaceDetail"],
    {
        529256: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                a = n(272175),
                r = n(38293),
                i = n(572067);
            const s = ({ children: e, description: t, includeOpenGraphMeta: n = !0, title: s }) => o.createElement(o.Fragment, null, s && o.createElement(r.Z, { title: s, withMeta: n }), n && o.createElement(i.Z, { description: t, title: s }), o.createElement(a.ql, null, o.createElement("meta", { description: t, name: "description" })), e),
                l = o.memo(s);
        },
        572067: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(202784),
                a = n(272175);
            const r = (e) => {
                const { canonical: t, description: n = "", image: r, imageAlt: i, imageH: s, imageType: l, imageW: c, title: d, ttl: m, type: p } = e;
                return o.createElement(a.ql, null, p ? o.createElement("meta", { content: p, property: "og:type" }) : null, t ? o.createElement("meta", { content: t, property: "og:url" }) : null, d ? o.createElement("meta", { content: d, property: "og:title" }) : null, o.createElement("meta", { content: n, property: "og:description" }), r ? o.createElement("meta", { content: r, property: "og:image" }) : null, l ? o.createElement("meta", { content: l, property: "og:image:type" }) : null, c ? o.createElement("meta", { content: c, property: "og:image:width" }) : null, s ? o.createElement("meta", { content: s, property: "og:image:height" }) : null, i ? o.createElement("meta", { content: i, property: "og:image:alt" }) : null, m ? o.createElement("meta", { content: m, property: "og:ttl" }) : null);
            };
        },
        373981: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = { ...n(332878).Z, pinToNewestWhenAtNewest: !0 };
        },
        332878: (e, t, n) => {
            n.d(t, { Z: () => c });
            function o(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const a = (e, t, n) => {
                    const o = e(t),
                        a = e(n);
                    return !o && a ? -1 : o && !a ? 1 : 0;
                },
                r = (e, t, n) => i(e(n), e(t)),
                i = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                s = (e, t) => {
                    if (e.length) return e.reduce((e, n) => (t(n, e) > 0 ? n : e));
                },
                l = ({ nextPos: e, prevPos: t }) => {
                    const n = t.getForViewport(),
                        i = (e) => e && e.doesIntersectWith(n),
                        l = (e) => (e ? Math.abs(n.getTop() - e.getTop()) : 1 / 0),
                        c = e.getList().filter(({ id: n }) => !o(n) && t.isRendered(n) && e.isRendered(n)),
                        d =
                            c.length > 0
                                ? s(c, (e, n) => {
                                      const o = t.getForItem(e.id),
                                          s = t.getForItem(n.id);
                                      return a(i, o, s) || r(l, o, s);
                                  })
                                : null;
                    return d && d.id;
                },
                c = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, t) => {
                        const { distanceToViewportBottom: n, distanceToViewportTop: o, id: a } = t;
                        if ("number" == typeof o) {
                            const t = e.getForViewport().getTop() + o;
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
                            .filter(({ id: e }) => !o(e))
                            .map(({ id: e, rectangle: n }) => ({ id: e, distanceToViewportTop: n.getTop() - t }));
                    },
                    pinToNewestWhenAtNewest: !1,
                    offsetCorrection(e, t) {
                        if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToNewestWhenAtNewest) return 0;
                        const n = l({ prevPos: e, nextPos: t });
                        if (n) {
                            const o = e.getForItem(n).getTop() - e.getForViewport().getTop();
                            return t.getForItem(n).getTop() - t.getForViewport().getTop() - o;
                        }
                        return 0;
                    },
                };
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                a = n(500002),
                r = n(668214),
                i = n(997174),
                s = n(118823);
            const l = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: o },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: r, search: i },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const c = a || s;
                    ((c && a !== s) || (!c && n !== r) || o !== i || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, a.ZP)(l(c));
        },
        193285: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var o = n(202784),
                a = n(325686),
                r = n(154003),
                i = n(392237),
                s = n(97301),
                l = n(58399);
            const c = 5;
            function d({ currentPageIdx: e, numPerPage: t, onPageIdxChange: n, style: i, total: d }) {
                const p = t > 0 ? Math.ceil(d / t) : 1,
                    u = o.useMemo(() => {
                        const t = [];
                        for (let n = 0; n < p; n++) t.push({ idx: n, text: n + 1, isSelected: e === n });
                        return t;
                    }, [p, e]),
                    g = o.useCallback(() => {
                        e < p - 1 && n(e + 1);
                    }, [e, n, p]),
                    h = o.useCallback(() => {
                        e > 0 && n(e - 1);
                    }, [e, n]),
                    f = o.useMemo(() => {
                        const t = [];
                        let n = Math.max(0, e - Math.floor(c / 2));
                        const o = Math.min(p - 1, n + c - 1);
                        o === p - 1 && (n = Math.max(0, o - c + 1));
                        for (let e = n; e <= o; e++) t.push(u[e]);
                        return t;
                    }, [u, e, p]);
                return o.createElement(
                    a.Z,
                    { style: [m.container, i] },
                    o.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e <= 0, icon: o.createElement(s.default, { style: m.chevron }), onClick: h, size: "small", style: m.button }),
                    o.createElement(
                        a.Z,
                        { style: m.pageNumContainer },
                        f.map((e) => o.createElement(r.ZP, { borderColor: "transparent", color: e.isSelected ? "text" : "gray700", key: `page_${e.text}`, onClick: () => n(e.idx), size: "small", style: m.button }, e.text)),
                    ),
                    o.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e >= p - 1, icon: o.createElement(l.default, { style: m.chevron }), onClick: g, size: "small", style: m.button }),
                );
            }
            const m = i.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1, gap: e.spaces.space8, width: "100%" }, chevron: { width: e.spaces.space20, height: e.spaces.space20 }, pageNumContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, flexGrow: 0, flexShrink: 1 }, button: {} }));
        },
        520595: (e, t, n) => {
            n.d(t, { a: () => g });
            var o = n(202784),
                a = n(325686),
                r = n(525271),
                i = n(392237),
                s = n(674132),
                l = n.n(s),
                c = n(400196),
                d = n(306677),
                m = n(725405),
                p = n(193285);
            const u = l().b58d2bd2,
                g = ({ onDrawerDismiss: e, paginationOptions: t, postIds: n, style: i, topBarStyle: s, withTransparentMask: l }) => {
                    const [c, d] = o.useState(0),
                        [m, g] = o.useState(() => (t ? n.slice(0, t.numResultsPerPage) : n)),
                        y = t && n.length > t.numResultsPerPage,
                        b = o.useCallback(
                            (e) => {
                                if ((d(e), t)) {
                                    const o = e * t.numResultsPerPage,
                                        a = o + t.numResultsPerPage;
                                    g(n.slice(o, a));
                                }
                            },
                            [n, t],
                        );
                    return o.createElement(
                        r.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: e, style: i, title: u, topBarStyle: s, withTransparentMask: l },
                        o.createElement(
                            a.Z,
                            { style: f.container },
                            y && o.createElement(p.Z, { currentPageIdx: c, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: b, total: n.length }),
                            m.map((e) => o.createElement(h, { key: `post_${e}`, postId: e })),
                        ),
                    );
                },
                h = ({ postId: e }) => {
                    const t = o.useRef(!1),
                        n = (0, m.Z)(),
                        r = o.useCallback(() => {
                            t.current || ((t.current = !0), n.scribe({ action: "impression", component: "post", data: { tweet_id: e } }));
                        }, [n, e]);
                    return o.createElement(a.Z, { key: `post_${e}`, style: f.post }, o.createElement(c.ZP, { displayPromotedContent: !0, tweetId: e, withActions: !0 }), o.createElement(d.D, { id: `post_${e}`, onFullyVisible: r, position: "bottom", testID: `post_${e}` }));
                },
                f = i.default.create((e) => ({ container: { width: "100%", maxWidth: 500, marginBottom: e.spaces.space12 }, post: { borderBottomWidth: 1, borderBottomColor: e.colors.borderColor }, mediaContent: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large, overflow: "hidden" } }));
        },
        790167: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(807896),
                a = (n(136728), n(543673), n(240753), n(128399), n(202784)),
                r = n(325686),
                i = n(818199),
                s = n(530732),
                l = n(731708),
                c = n(392237),
                d = n(955251),
                m = n(282279);
            function p({ sources: e, text: t, ...n }) {
                const c = (t) => e.find((e) => e.url === t || e.cached_page_url === t),
                    d = a.useCallback((e) => a.createElement(g, { source: e }), []),
                    m = a.useCallback((e) => {
                        window.open(e, "_blank");
                    }, []);
                return a.createElement(
                    l.ZP,
                    (0, o.Z)({}, n, { style: [h.body, n.style] }),
                    (() => {
                        const e = [];
                        let n = 0;
                        const o = /\[\]\((.*?)\)/g;
                        for (const p of t.matchAll(o)) {
                            const o = p[1],
                                g = p.index,
                                f = g + p[0].length;
                            g > n && e.push(t.slice(n, g));
                            const y = c(o);
                            y && y.favicon_base64
                                ? e.push(
                                      a.createElement(
                                          i.Z,
                                          { renderContent: () => d(y) },
                                          a.createElement(
                                              s.Z,
                                              {
                                                  onClick: () => {
                                                      m(y.url);
                                                  },
                                                  withoutInteractiveStyles: !0,
                                              },
                                              ({ isHovered: e }) => a.createElement(r.Z, { style: [h.domainContainer, e ? h.hoveredDomainContainer : void 0] }, a.createElement(l.ZP, { style: h.domain }, y.media_name || u(y.url))),
                                          ),
                                      ),
                                  )
                                : e.push(""),
                                (n = f);
                        }
                        return n < t.length && e.push(t.slice(n)), e;
                    })(),
                );
            }
            function u(e) {
                try {
                    const { hostname: t } = new URL(e);
                    return t.replace(/^www\./, "");
                } catch (e) {
                    return "";
                }
            }
            const g = ({ source: e }) => a.createElement(m.Z, { isHoverCard: !0, website: e }),
                h = c.default.create((e) => ({ body: { lineHeight: 26, color: (0, d.O)("foreground") }, domainContainer: { backgroundColor: (0, d.O)("foreground", 0.1), transition: "background-color 0.2s ease", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: (0, d.O)("white", 0.08), display: "flex", flexDirection: "row", width: "max-content", paddingHorizontal: e.spaces.space4 }, hoveredDomainContainer: { backgroundColor: (0, d.O)("foreground", 0.05) }, domain: { color: (0, d.O)("foreground", 0.8), fontSize: e.fontSizes.subtext2 }, hoverCardContainer: {} }));
        },
        739586: (e, t, n) => {
            n.d(t, { Z: () => x });
            n(136728);
            var o = n(202784),
                a = n(325686),
                r = n(107267),
                i = n(530732),
                s = n(992942),
                l = n(392237),
                c = n(306677),
                d = n(725405),
                m = n(125363),
                p = n(836255),
                u = n(246728),
                g = n(695356),
                h = n(790167),
                f = n(287627),
                y = n(477575),
                b = n(2025),
                C = n(978086);
            function x({ article: e, commentsStyle: t, headerImgStyle: n, hideImg: l, hideSummary: x, infoContainerStyle: v, onClick: E, reactionsContainerStyle: Z, sentimentStyle: S, showSentiment: _, style: k, summaryNumLines: I, titleNumLines: T, useRowReactions: P, variant: z }) {
                const D = (0, d.Z)(),
                    O = (0, m.I0)(),
                    H = (0, r.useHistory)(),
                    { isCompactLayout: R } = (0, u.Z)(),
                    M = o.useMemo(() => {
                        if (!e) return [];
                        const t = [];
                        return (
                            e.posts.forEach((e) => {
                                e.post_results.rest_id && t.push(e.post_results.rest_id);
                            }),
                            t
                        );
                    }, [e]),
                    L = o.useMemo(() => {
                        if (!e) return [];
                        const t = [];
                        e.header_img_post_id && t.push(e.header_img_post_id.post_results.rest_id);
                        return t.push(...M.slice(0, 3)), t;
                    }, [e, M]);
                o.useEffect(() => {
                    O(p.Z.fetchMultipleIfNeeded(L));
                }, [O, L]);
                const F = { small: { container: w.smallContainer, headerImg: w.smallHeaderImg, infoContainer: w.smallInfoContainer, summary: w.smallSummary }, medium: { container: w.mediumContainer, headerImg: w.mediumHeaderImg, infoContainer: w.mediumInfoContainer, summary: w.mediumSummary }, large: { container: w.largeContainer, headerImg: w.largeHeaderImg, infoContainer: w.largeInfoContainer, summary: w.largeSummary } },
                    N = o.useCallback(() => {
                        E && E(), H.push(`/i/news/article/${e.id}`);
                    }, [H, e, E]),
                    $ = o.useCallback(() => {
                        (0, g._$)(D, { articleId: e.id });
                    }, [e, D]),
                    A = F[z || "large"],
                    B = e.header_img_url || "",
                    W = o.createElement(a.Z, { style: [w.infoContainer, A.infoContainer, R ? w.compactInfoContainer : void 0, v] }, o.createElement(C.Z, { numberOfLines: T, onClick: N, text: e.title, variant: z }), o.createElement(y.Z, { timestamp: e.last_updated_at, variant: z }), !!e.summary && !x && o.createElement(h.Z, { numberOfLines: I, sources: [], style: A.summary, text: e.summary }), o.createElement(a.Z, { style: [w.reactionsContainer, P ? w.rowReactionsContainer : void 0, Z] }, e.sentiment && _ && o.createElement(b.Z, { onClick: N, sentiment: e.sentiment, showPercentages: !0, style: S }), o.createElement(f.Z, { numPosts: Number(e.total_trend_posts), postIds: M, size: "large" === z ? "large" : "normal", style: t, variant: "filled" })));
                return "large" === z
                    ? o.createElement(
                          a.Z,
                          { style: [w.container, w.largeContainer, R ? w.compactLargeContainer : void 0, k] },
                          o.createElement(c.D, { id: "news_article_card", onFullyVisible: $, position: "top", testID: "news_article_card" }),
                          W,
                          !l &&
                              B &&
                              o.createElement(
                                  a.Z,
                                  { style: w.headerImgContainer },
                                  o.createElement(i.Z, { onClick: N, style: w.headerImgInteractiveContainer, withoutInteractiveStyles: !0 }, ({ isHovered: e }) => o.createElement(s.Z, { resizeMode: "cover", source: B, style: [w.headerImg, A.headerImg, R ? w.compactLargeHeaderImg : void 0, e ? w.hoveredHeaderImg : void 0, n] })),
                              ),
                      )
                    : o.createElement(a.Z, { style: [w.container, A.container, R ? w.compactSmallMediumContainer : void 0, k] }, o.createElement(c.D, { id: "news_article_card", onFullyVisible: $, position: "top", testID: "news_article_card" }), !l && B && o.createElement(i.Z, { onClick: N, withoutInteractiveStyles: !0 }, ({ isHovered: e }) => o.createElement(s.Z, { resizeMode: "cover", source: B, style: [w.headerImg, A.headerImg, e ? w.hoveredHeaderImg : void 0, n] })), W);
            }
            const w = l.default.create((e) => ({ container: { display: "flex", width: "100%" }, smallContainer: { gap: e.spaces.space12, flexDirection: "column" }, mediumContainer: { gap: e.spaces.space12, flexDirection: "column" }, compactSmallMediumContainer: { gap: e.spaces.space8 }, largeContainer: { gap: e.spaces.space36, flexDirection: "row" }, compactLargeContainer: { gap: e.spaces.space16, flexDirection: "column-reverse" }, infoContainer: { flex: 1, display: "flex", flexDirection: "column", gap: e.spaces.space8 }, smallInfoContainer: { gap: e.spaces.space4 }, mediumInfoContainer: { gap: e.spaces.space4 }, largeInfoContainer: { gap: e.spaces.space8 }, compactInfoContainer: { padding: e.spaces.space8, gap: e.spaces.space8 }, smallSummary: { fontSize: e.fontSizes.subtext1 }, mediumSummary: { fontSize: e.fontSizes.subtext1 }, largeSummary: {}, headerImgContainer: { flex: 1 }, headerImgInteractiveContainer: { width: "100%", flex: 1 }, headerImg: { width: "100%", borderRadius: e.borderRadii.medium, transition: "all 0.2s ease", transform: "scale(1)", cursor: "pointer" }, smallHeaderImg: { height: 150 }, mediumHeaderImg: { height: 200 }, largeHeaderImg: { height: "100%" }, compactLargeHeaderImg: { height: "unset", flex: 1 }, hoveredHeaderImg: { transform: "scale(1.03)" }, reactionsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, marginTop: e.spaces.space8 }, rowReactionsContainer: { flexDirection: "row", alignItems: "center" } }));
        },
        287627: (e, t, n) => {
            n.d(t, { Z: () => y });
            var o = n(202784),
                a = n(325686),
                r = n(530732),
                i = n(392237),
                s = n(731708),
                l = n(823161),
                c = n(166852),
                d = n(125363),
                m = n(836255),
                p = n(520595),
                u = n(955251),
                g = n(448301);
            const h = 100,
                f = 3;
            function y({ numPosts: e, postIds: t, size: n, style: l, variant: u }) {
                const y = (0, d.I0)(),
                    [x, w] = o.useState(!1),
                    v = { filled: { commentsContainer: C.filledMetadataContainer }, outline: { commentsContainer: C.outlineMetadataContainer } },
                    E = { normal: { commentsText: C.normalCommentsText }, large: { commentsText: C.largeCommentsText } },
                    Z = v[u || "outline"],
                    S = E[n || "normal"],
                    _ = o.useMemo(() => (0, c.Z)(t).slice(0, h), [t]);
                return e
                    ? o.createElement(
                          o.Fragment,
                          null,
                          o.createElement(
                              r.Z,
                              {
                                  onClick: () => {
                                      y(m.Z.fetchMultipleIfNeeded(_)), w(!0);
                                  },
                                  style: C.interactiveContainer,
                                  withoutInteractiveStyles: !0,
                              },
                              ({ isHovered: t }) =>
                                  o.createElement(
                                      a.Z,
                                      { style: [C.commentsContainer, Z.commentsContainer, t ? C.hoveredCommentsContainer : void 0, l] },
                                      _.length > 0 &&
                                          o.createElement(
                                              a.Z,
                                              { style: C.postAvatars },
                                              _.slice(0, f).map((e, t) => o.createElement(b, { key: e, postId: e, style: [C.postAvatar, { animationDelay: 0.1 * t + "s" }, 0 !== t ? { marginStart: -1 * i.default.theme.spacesPx.space12 } : {}] })),
                                          ),
                                      o.createElement(s.ZP, { style: S.commentsText }, `${(0, g.uf)(e)}+ comments`),
                                  ),
                          ),
                          x && o.createElement(p.a, { onDrawerDismiss: () => w(!1), paginationOptions: { numResultsPerPage: 15 }, postIds: _, style: C.drawer, topBarStyle: C.drawerTopBar, withTransparentMask: !0 }),
                      )
                    : null;
            }
            function b({ postId: e, style: t }) {
                const n = o.useMemo(() => m.Z.createHydratorForTweet(e), [e]),
                    a = (0, d.v9)(n);
                return a && a.user.profile_image_url_https ? o.createElement(l.default, { backgroundColor: "transparent", borderColor: "transparent", borderWidth: "small", size: "medium", style: t, uri: a.user.profile_image_url_https }) : null;
            }
            const C = i.default.create((e) => ({ interactiveContainer: { height: "max-content", width: "max-content" }, commentsContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, borderRadius: e.spaces.space32, paddingHorizontal: e.spaces.space8, borderStyle: "solid", borderWidth: 1, width: "max-content", height: e.spaces.space32, transition: "background-color 0.2s ease" }, hoveredCommentsContainer: { backgroundColor: (0, u.O)("foreground", 0.05), cursor: "pointer" }, outlineMetadataContainer: { backgroundColor: "transparent", borderColor: (0, u.O)("foreground", 0.04), color: (0, u.O)("foreground") }, filledMetadataContainer: { backgroundColor: (0, u.O)("secondary"), borderColor: (0, u.O)("foreground", 0.04), color: (0, u.O)("foreground") }, postAvatars: { display: "flex", flexDirection: "row", alignItems: "center" }, postAvatar: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(-5px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, drawerTopBar: { backgroundColor: (0, u.O)("secondary") }, drawer: { backgroundColor: (0, u.O)("secondary") }, normalCommentsText: { fontSize: e.fontSizes.subtext3 }, largeCommentsText: { fontSize: e.fontSizes.subtext2 } }));
        },
        16205: (e, t, n) => {
            n.d(t, { Z: () => me });
            n(136728);
            var o = n(202784),
                a = n(325686),
                r = n(858440),
                i = n(530732),
                s = n(392237),
                l = n(899667),
                c = n(725405),
                d = n(125363),
                m = n(836255),
                p = n(234209),
                u = n(118368),
                g = n(221972),
                h = n(246728),
                f = n(955251),
                y = n(345425),
                b = n(695356),
                C = n(992942);
            function x({ blurAmount: e, imageOpacity: t, imageUrl: n, style: a }) {
                return n ? o.createElement(C.Z, { resizeMode: "cover", source: n, style: [w.banner, { opacity: t }, { filter: `blur(${e || 0}px)` }, a] }) : null;
            }
            const w = s.default.create((e) => ({ banner: { width: "100%", height: 400, borderRadius: e.borderRadii.large, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1 } }));
            var v = n(790167),
                E = n(818199),
                Z = n(731708),
                S = n(301758);
            function _({ postId: e, style: t }) {
                const n = o.useMemo(() => m.Z.createHydratorForTweet(e), [e]),
                    r = (0, d.v9)(n);
                if (!r) return o.createElement(a.Z, { style: k.attributionContainer });
                const { user: s } = r;
                return o.createElement(
                    a.Z,
                    { style: k.attributionContainer },
                    o.createElement(
                        E.Z,
                        {
                            renderContent: () =>
                                (function (e) {
                                    return o.createElement(S.Z, { isCondensed: !0, style: k.post, tweetId: e, withBirdwatchPivot: !1, withLink: !0, withUserHoverCard: !1 });
                                })(e),
                        },
                        o.createElement(
                            i.Z,
                            {
                                onClick: () => {
                                    window.open(`https://x.com${r.permalink}`, "_blank");
                                },
                                withoutInteractiveStyles: !0,
                            },
                            ({ isHovered: e }) => o.createElement(Z.ZP, { style: k.attribution }, `Image from @${s.screen_name}`),
                        ),
                    ),
                );
            }
            const k = s.default.create((e) => ({ attributionContainer: { height: e.spaces.space16, marginTop: e.spaces.space4, width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-end" }, attribution: { color: (0, f.O)("foreground", 0.6), fontSize: e.fontSizes.subtext3, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" }, post: { maxWidth: 300 } }));
            var I = n(555874);
            function T({ bulletpoints: e }) {
                return o.createElement(a.Z, { style: z.bulletPointsWithLineContainer }, o.createElement(a.Z, { style: z.lineContainer }, o.createElement(a.Z, { style: z.line })), o.createElement(I.Z, { ItemSeparatorComponent: () => o.createElement(a.Z, { style: z.bulletpointGap }), data: e, keyExtractor: (e, t) => `keypoint-${t}`, renderItem: ({ item: e }) => o.createElement(P, { bulletpoint: e }) }));
            }
            function P({ bulletpoint: e }) {
                return o.createElement(a.Z, { style: z.bulletpoint }, o.createElement(a.Z, { style: z.circle }), o.createElement(Z.ZP, { style: z.text }, e));
            }
            const z = s.default.create((e) => ({ keypointsHeader: { marginBottom: e.spaces.space16 }, bulletPointsWithLineContainer: { width: "100%", position: "relative" }, lineContainer: { position: "absolute", start: 0, top: 0, display: "flex", flexDirection: "column", alignItems: "center", width: e.spaces.space16, height: "100%" }, line: { width: e.spaces.space2, height: "100%", backgroundColor: (0, f.O)("foreground", 0.1) }, bulletpointGap: { height: e.spaces.space24 }, bulletpoint: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 }, circle: { width: e.spaces.space16, height: e.spaces.space16, borderRadius: e.spaces.space16, borderWidth: 2, borderStyle: "solid", borderColor: (0, f.O)("foreground", 0.1), backgroundColor: (0, f.O)("background") }, text: { ...y.f, color: (0, f.O)("foreground") } }));
            function D({ style: e, text: t }) {
                return o.createElement(Z.ZP, { style: [O.subheader, e], weight: "bold" }, t);
            }
            const O = s.default.create((e) => ({ subheader: { fontSize: e.fontSizes.headline1 } })),
                H = "Key Points";
            function R({ keyPoints: e }) {
                return e.length ? o.createElement(a.Z, { style: M.container }, o.createElement(D, { style: M.keypointsHeader, text: H }), o.createElement(T, { bulletpoints: e })) : null;
            }
            const M = s.default.create((e) => ({ container: { width: "100%" }, keypointsHeader: { marginBottom: e.spaces.space16 } }));
            var L = n(477575),
                F = n(333830),
                N = n(194504),
                $ = n(287627),
                A = n(931173);
            function B({ commentPostIds: e, numComments: t, posts: n }) {
                const r = (0, c.Z)(),
                    i = o.useMemo(() => {
                        const e = [];
                        return (
                            n.forEach((t) => {
                                t.post_results.rest_id && e.push(t.post_results.rest_id);
                            }),
                            e
                        );
                    }, [n]);
                return o.createElement(
                    a.Z,
                    { style: W.container },
                    o.createElement(
                        N.Z,
                        { buttonsContainerStyle: W.carouselContent, style: W.carousel },
                        i.map((e, t) =>
                            o.createElement(A.Z, {
                                containerStyle: W.postContainer,
                                isPreview: !0,
                                key: e,
                                numberOfLines: 3,
                                onClick: () => {
                                    (0, b.U8)(r, { postId: e, allPostIds: i });
                                },
                                postId: e,
                                style: [W.post, { animationDelay: 0.1 * t + "s" }],
                                tweetTextStyle: W.postText,
                            }),
                        ),
                    ),
                    o.createElement($.Z, { numPosts: t, postIds: e, size: "large", style: W.commentsPill, variant: "filled" }),
                );
            }
            const W = s.default.create((e) => ({ container: { width: "100%" }, carousel: { width: "100%", flex: 1 }, carouselContent: { display: "flex", flexDirection: "row", flex: 1 }, postContainer: { width: 250, flex: "unset", marginEnd: e.spaces.space12 }, post: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(-10px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, postText: { fontSize: e.fontSizes.subtext1 }, commentsPill: { marginTop: e.spaces.space12 } }));
            var V = n(373981),
                U = n(810641),
                j = n(519896),
                K = n(383675);
            const q = "What is the world saying?";
            function X({ article: e }) {
                const t = Y(e?.timeline_id),
                    { isCompactLayout: n } = (0, h.Z)();
                return t ? o.createElement(a.Z, { style: G.container }, o.createElement(D, { style: G.header, text: q }), o.createElement(a.Z, { style: [G.timeline, n ? G.compactTimeline : void 0] }, o.createElement(U.Z, { anchoring: V.Z, module: t, onTimelinePoll: () => {}, prerollDisplayLocation: j.Nw.OTHER, refreshControl: null, renderEmptyState: () => null, title: "" }))) : null;
            }
            const Y = (e) => o.useMemo(() => e && (0, K.R)(e, !1), [e]),
                G = s.default.create((e) => ({ container: { display: "flex", flexDirection: "column" }, header: { textAlign: "center", marginTop: e.spaces.space24 }, timeline: { backgroundColor: (0, f.O)("secondary"), borderStyle: "solid", borderWidth: 1, borderColor: (0, f.O)("white", 0.08), borderRadius: e.borderRadii.medium, overflow: "hidden", marginHorizontal: "10%", marginTop: e.spaces.space28 }, compactTimeline: { marginHorizontal: "unset" } }));
            var Q = n(400196),
                J = n(306677),
                ee = n(45843);
            function te({ image_caption: e, image_height: t = 400, image_size: n, image_url: r }) {
                const [i, s] = o.useState({ width: 0, height: t });
                return (
                    o.useEffect(() => {
                        r &&
                            ee.Z.getSize(
                                r,
                                (e, n) => {
                                    s({ width: t * (e / n), height: t });
                                },
                                (e) => {
                                    s({ width: t, height: t });
                                },
                            );
                    }, [r, t]),
                    r ? o.createElement(a.Z, { style: ne.container }, o.createElement(C.Z, { resizeMode: "contain", source: r, style: [ne.img, { width: i.width, height: i.height }] }), !!e && o.createElement(Z.ZP, { style: ne.caption }, e)) : null
                );
            }
            const ne = s.default.create((e) => ({ container: { display: "flex", flexDirection: "column", alignItems: "center", gap: e.spaces.space8, textAlign: "center", width: "100%", paddingHorizontal: "10%" }, img: {}, caption: { width: "70%", textAlign: "center", color: e.colors.gray1000, fontSize: e.fontSizes.subtext1 } }));
            var oe = n(282279);
            function ae({ onSectionVisible: e, section: t, sources: n }) {
                const { isCompactLayout: r } = (0, h.Z)();
                return o.createElement(a.Z, { style: re.section }, o.createElement(J.D, { id: "news_article_section", onFullyVisible: e, position: "top", testID: "news_article_section" }), !!t.title && o.createElement(D, { text: t.title }), !!t.content.text && o.createElement(v.Z, { sources: n, style: re.body, text: t.content.text }), t.content.bullets && o.createElement(T, { bulletpoints: t.content.bullets }), !!t.content.image_url && o.createElement(te, { image_caption: t.content.image_caption, image_size: t.content.image_size, image_url: t.content.image_url }), t.content.website && o.createElement(oe.Z, { website: t.content.website }), t.content.post && o.createElement(a.Z, { style: [re.outerTweetContainer, r ? re.compactOuterTweetContainer : void 0] }, o.createElement(a.Z, { style: re.tweetContainer }, o.createElement(Q.ZP, { displayPromotedContent: !0, isCompact: r, tweetId: t.content.post.post_results.rest_id, withActions: !0 }))));
            }
            const re = s.default.create((e) => ({ section: { display: "flex", flexDirection: "column", gap: e.spaces.space16 }, outerTweetContainer: { width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingHorizontal: "15%" }, compactOuterTweetContainer: { paddingHorizontal: "unset" }, tweetContainer: { borderStyle: "solid", borderWidth: 1, borderColor: (0, f.O)("white", 0.08), borderRadius: e.borderRadii.large, backgroundColor: (0, f.O)("secondary"), overflow: "hidden", width: "100%" }, body: { ...y.f } }));
            var ie = n(2025);
            const se = "What is the MSM saying?";
            function le({ sources: e }) {
                const t = (0, c.Z)(),
                    n = o.useMemo(() => {
                        const t = [];
                        return (
                            e.forEach((e) => {
                                e.url && t.push(e.url);
                            }),
                            t
                        );
                    }, [e]);
                return o.createElement(
                    a.Z,
                    { style: ce.container },
                    o.createElement(D, { style: ce.sourcesSubHeader, text: se }),
                    o.createElement(
                        N.Z,
                        { buttonsContainerStyle: ce.carouselContent, style: ce.carousel },
                        e.map((e, a) =>
                            o.createElement(oe.Z, {
                                containerStyle: ce.websiteContainer,
                                key: `${e.url}-${a}`,
                                onClick: () => {
                                    (0, b.sq)(t, { url: e.url, allUrls: n });
                                },
                                style: ce.website,
                                website: e,
                            }),
                        ),
                    ),
                );
            }
            const ce = s.default.create((e) => ({ container: { width: "100%" }, sourcesSubHeader: { marginBottom: e.spaces.space16 }, carousel: { width: "100%" }, carouselContent: { display: "flex", flexDirection: "row", gap: e.spaces.space12 }, websiteContainer: { height: "100%" }, website: { height: "100%" } }));
            var de = n(978086);
            function me({ article: e }) {
                (0, g.Z)({});
                const t = (0, c.Z)(),
                    n = (0, d.I0)(),
                    s = (0, r.Z)(),
                    { isCompactLayout: f } = (0, h.Z)(),
                    [y, C] = o.useState(!1),
                    w = s.width > 1100,
                    E = o.useMemo(() => {
                        if (!e) return [];
                        const t = [];
                        return (
                            e.posts.forEach((e) => {
                                e.post_results.rest_id && t.push(e.post_results.rest_id);
                            }),
                            t
                        );
                    }, [e]),
                    Z = o.useMemo(() => {
                        if (!e) return [];
                        const t = [...E];
                        return (
                            e.sections.forEach((e) => {
                                e.content.post && e.content.post.post_results.rest_id && t.push(e.content.post.post_results.rest_id);
                            }),
                            t
                        );
                    }, [e, E]);
                o.useEffect(() => {
                    n(m.Z.fetchMultiple(Z));
                }, [n, Z]);
                const S = o.useCallback(
                    (n) => {
                        e && (0, b.xi)(t, { articleId: e.id, sectionIdx: n, totalNumSections: e.sections.length });
                    },
                    [e, t],
                );
                o.useEffect(() => {
                    const e = () => {
                        C(window.scrollY > 300);
                    };
                    return (
                        window.addEventListener("scroll", e),
                        () => {
                            window.removeEventListener("scroll", e);
                        }
                    );
                }, []);
                const k = e && !!e.timeline && e.live_article && (e.timeline.events || []).length > 0,
                    I = o.useMemo(() => {
                        const t = [];
                        return k && e && t.push(e.timeline), t;
                    }, [e, k]);
                return e
                    ? o.createElement(
                          a.Z,
                          { style: pe.container },
                          o.createElement(a.Z, { style: pe.bannerContainer }, o.createElement(a.Z, { style: [pe.sidePadding, f ? pe.compactSidePadding : void 0] }), o.createElement(a.Z, { style: pe.banner }, o.createElement(x, { imageUrl: e.header_img_url }), e.header_img_post_id && o.createElement(_, { postId: e.header_img_post_id.post_results.rest_id })), o.createElement(a.Z, { style: [pe.sidePadding, f ? pe.compactSidePadding : void 0] })),
                          o.createElement(
                              a.Z,
                              { style: pe.content },
                              o.createElement(a.Z, { style: [pe.sidePadding, f ? pe.compactSidePadding : void 0] }),
                              o.createElement(
                                  a.Z,
                                  { style: pe.centerComponents },
                                  o.createElement(a.Z, { style: pe.headerContainer }, o.createElement(de.Z, { text: e.title }), o.createElement(L.Z, { timestamp: e.last_updated_at }), !!e.summary && o.createElement(v.Z, { sources: [], style: pe.summary, text: e.summary })),
                                  !w && k && e && e.timeline && o.createElement(F.Z, { articleId: e.id, hideTitle: !0, isInline: !0, timeline: e.timeline }),
                                  o.createElement(a.Z, { style: pe.sentimentContainer }, e.sentiment && o.createElement(ie.Z, { sentiment: e.sentiment }), e.posts && e.posts.length > 0 && o.createElement(B, { commentPostIds: E, numComments: Number(e.total_trend_posts), posts: e.posts })),
                                  e.key_points && e.key_points.length > 0 && o.createElement(R, { keyPoints: e.key_points }),
                                  e.sections.map((t, n) =>
                                      o.createElement(ae, {
                                          key: `section-${n}`,
                                          onSectionVisible: () => {
                                              S(n);
                                          },
                                          section: t,
                                          sources: e.sources,
                                      }),
                                  ),
                                  e.sources && e.sources.length > 0 && o.createElement(le, { sources: e.sources }),
                                  o.createElement(p.Z, null),
                                  o.createElement(u.Z, null),
                                  e.timeline_id && o.createElement(X, { article: e }),
                                  o.createElement(a.Z, { style: pe.scrollViewBottomSpace }),
                              ),
                              w && I.length > 0 ? o.createElement(a.Z, { style: pe.rightSideComponents }, e.timeline && k && o.createElement(F.Z, { articleId: e.id, hideTitle: !0, style: pe.rightSideTimeline, timeline: e.timeline })) : o.createElement(a.Z, { style: [pe.sidePadding, f ? pe.compactSidePadding : void 0] }),
                          ),
                          y &&
                              o.createElement(
                                  i.Z,
                                  {
                                      onClick: () => {
                                          window.scrollTo({ top: 0, behavior: "smooth" });
                                      },
                                      withoutInteractiveStyles: !0,
                                  },
                                  ({ isHovered: e }) => o.createElement(a.Z, { style: [pe.scrollToTop, e ? pe.hoveredScrollToTop : void 0] }, o.createElement(l.default, { style: pe.scrollToTopIcon })),
                              ),
                      )
                    : null;
            }
            const pe = s.default.create((e) => ({ container: { position: "relative", overflow: "hidden", flex: 1, width: "100%" }, bannerContainer: { display: "flex", flexDirection: "row" }, banner: { flex: 1 }, sidePadding: { width: "25%" }, compactSidePadding: { width: e.spaces.space16 }, content: { display: "flex", flexDirection: "row" }, centerComponents: { flex: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both", display: "flex", flexDirection: "column", gap: e.spaces.space32, marginTop: e.spaces.space16 }, scrollViewBottomSpace: { height: 200 }, headerContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space16 }, rightSideComponents: { width: "30%", paddingHorizontal: e.spaces.space48, paddingStart: e.spaces.space56, marginTop: e.spaces.space8 }, rightSideTimeline: { width: "90%", marginTop: e.spaces.space16 }, summary: { ...y.f }, scrollToTop: { position: "fixed", display: "flex", justifyContent: "center", alignItems: "center", bottom: e.spaces.space12, start: e.spaces.space20, width: e.spaces.space48, height: e.spaces.space48, borderRadius: e.spaces.space48, borderColor: e.colors.gray400, borderWidth: e.spaces.space1, backdropFilter: "blur(12px)", zIndex: 1e3, backgroundColor: e.colors.navigationBackground, overflow: "hidden", boxShadow: e.boxShadows.medium, transition: "0.2s ease all", animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(10px)" }, "100%": { opacity: 1, transform: "translateY(0px)" } }], animationTimingFunction: "ease", animationFillMode: "both" }, hoveredScrollToTop: { backgroundColor: e.colors.gray0 }, scrollToTopIcon: { width: "50%", height: "50%", color: (0, f.O)("foreground") }, sentimentContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space12 } }));
        },
        477575: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                a = n(731708),
                r = n(392237),
                i = n(955251),
                s = n(448301);
            function l({ timestamp: e, variant: t }) {
                const n = { small: c.smallLastUpdated, medium: c.mediumLastUpdated, large: c.largeLastUpdated }[t || "large"];
                return o.createElement(a.ZP, { style: [c.date, n] }, (0, s.p6)(new Date(Number(e))));
            }
            const c = r.default.create((e) => ({ date: { color: (0, i.O)("foreground", 0.6) }, smallLastUpdated: { fontSize: e.fontSizes.subtext3 }, mediumLastUpdated: { fontSize: e.fontSizes.subtext2 }, largeLastUpdated: { fontSize: e.fontSizes.subtext1 } }));
        },
        333830: (e, t, n) => {
            n.d(t, { Z: () => h });
            n(136728);
            var o = n(202784),
                a = n(325686),
                r = n(107267),
                i = n(530732),
                s = n(731708),
                l = n(392237),
                c = n(955251),
                d = n(448301),
                m = n(757483);
            const p = "LIVE";
            function u({ isAnimated: e, style: t, variant: n = "default" }) {
                return o.createElement(a.Z, { style: [g.container, t] }, o.createElement(s.ZP, { style: [g.label, "large" === n ? g.largeLabel : void 0], weight: "bold" }, p));
            }
            const g = l.default.create((e) => ({ container: { display: "flex", width: "max-content", padding: e.spaces.space4, backgroundColor: m.Z.hexToCss(e.colors.red500, 0.2), borderRadius: e.borderRadii.small }, label: { color: e.colors.red500, fontSize: 9, lineHeight: 9, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0.6 }, "50%": { opacity: 1 }, "100%": { opacity: 0.6 } }], animationTimingFunction: "ease", animationFillMode: "both", animationIterationCount: "infinite" }, largeLabel: { fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 } }));
            function h({ articleId: e, hideTitle: t, isInline: n, onRoute: l, routeToArticle: c, style: m, timeline: p }) {
                const g = (0, r.useHistory)(),
                    h = o.useCallback(() => {
                        l && l(), g.push(`/i/news/article/${e}`);
                    }, [g, e, l]);
                return p && p.events
                    ? o.createElement(i.Z, { onClick: c ? h : void 0, withoutInteractiveStyles: !0 }, ({ isHovered: e }) =>
                          o.createElement(
                              a.Z,
                              { style: [f.container, n ? f.inlineContainer : void 0, m] },
                              o.createElement(a.Z, { style: f.headerContainer }, !t && o.createElement(s.ZP, { style: [f.title, c && e ? f.hoveredTitle : void 0], weight: "bold" }, p.title), o.createElement(u, { isAnimated: !0, style: f.liveLabel })),
                              o.createElement(
                                  a.Z,
                                  { style: f.events },
                                  (p.events || []).map((e, t) => {
                                      const r = new Date(Number(e.timestamp)),
                                          i = (0, d.pi)(r);
                                      return o.createElement(a.Z, { key: `live-event-${e.summary || ""}`, style: [f.event, { animationDelay: 0.2 + 0.1 * t + "s" }] }, o.createElement(s.ZP, { style: [f.timestamp, n ? f.inlineTimestamp : void 0, 0 === t ? f.mostRecentTimestamp : void 0] }, i), o.createElement(s.ZP, { style: [f.eventTitle, n ? f.inlineEventTitle : void 0], weight: "medium" }, e.summary));
                                  }),
                              ),
                          ),
                      )
                    : null;
            }
            const f = l.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space16, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both", maxWidth: 350 }, inlineContainer: { maxWidth: "unset", width: "100%", padding: e.spaces.space16, backgroundColor: (0, c.O)("secondary"), borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: (0, c.O)("white", 0.08) }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: e.spaces.space8 }, title: { color: (0, c.O)("foreground"), fontSize: e.fontSizes.headline2, lineHeight: 23, transition: "all 0.2s ease" }, hoveredTitle: { color: (0, c.O)("foreground", 0.6), cursor: "pointer" }, liveLabel: { top: e.spaces.space2 }, events: { display: "flex", flexDirection: "column", gap: e.spaces.space16 }, event: { display: "flex", flexDirection: "row", animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(-2px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationTimingFunction: "ease", animationFillMode: "both" }, timestamp: { color: (0, c.O)("foreground", 0.6), fontSize: e.fontSizes.subtext3, flex: 1 }, inlineTimestamp: { fontSize: e.fontSizes.subtext2 }, mostRecentTimestamp: { color: e.colors.red500 }, eventTitle: { flex: 3, color: (0, c.O)("foreground"), fontSize: e.fontSizes.subtext2, transition: "all 0.2s ease" }, inlineEventTitle: { fontSize: e.fontSizes.subtext1 }, hoveredEventTitle: { color: (0, c.O)("foreground", 0.6), cursor: "pointer" } }));
        },
        931173: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(202784),
                a = n(325686),
                r = n(530732),
                i = n(823161),
                s = n(366635),
                l = n(966886),
                c = n(392237),
                d = n(650028),
                m = n(451051),
                p = n(103737),
                u = n(125363),
                g = n(836255),
                h = n(955251);
            function f({ containerStyle: e, isPreview: t = !1, numberOfLines: n, onClick: h, postId: f, style: b, tweetTextStyle: C }) {
                const x = o.useMemo(() => g.Z.createHydratorForTweet(f), [f]),
                    w = (0, u.v9)(x);
                if (!w) return null;
                const { created_at: v, text: E, user: Z } = w;
                return o.createElement(
                    r.Z,
                    {
                        onClick: () => {
                            h && h(), window.open(`https://x.com${w.permalink}`, "_blank");
                        },
                        style: [y.interactiveContainer, e],
                        withoutInteractiveStyles: !0,
                    },
                    ({ isHovered: e }) =>
                        o.createElement(
                            a.Z,
                            { style: [y.container, e ? y.hoveredContainer : void 0, b] },
                            o.createElement(a.Z, { style: y.headerContainer }, o.createElement(a.Z, { style: y.nameContainer }, o.createElement(i.default, { "aria-label": Z.name, borderColor: "gray700", borderWidth: "small", screenName: Z.screen_name, size: t ? "medium" : "large", uri: Z.profile_image_url_https, withHoverCard: !0, withLink: !0 }), o.createElement(s.Z, { affiliateBadgeInfo: Z.highlightedLabel, isBlueVerified: Z.is_blue_verified, isVerified: Z.verified, name: Z.name, nameSize: t ? "subtext2" : "subtext1", screenName: Z.screen_name, screenNameSize: t ? "subtext3" : "subtext2", screenNameStyle: y.screenName, screenNameSuffixContainerStyle: { marginStart: 0 }, style: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, verifiedType: Z.verified_type, withHoverCard: !0, withLink: !0, withStackedLayout: !0 })), o.createElement(l.Z, { humanReadable: !1, style: [y.timestamp, { fontSize: t ? c.default.theme.fontSizes.subtext3 : c.default.theme.fontSizes.subtext2, lineHeight: t ? c.default.theme.fontSizes.subtext3 : c.default.theme.fontSizes.subtext2 }], timestamp: v })),
                            w.in_reply_to_screen_name && o.createElement(d.ZP, { displayTextRange: w.display_text_range, inReplyToName: w.in_reply_to_name, inReplyToScreenName: w.in_reply_to_screen_name, inReplyToUserIdStr: w.in_reply_to_user_id_str, linkType: d.ZP.ReplyContextLinkTypes.none, size: t ? "subtext2" : "subtext1", tweetPermalink: w.permalink }),
                            o.createElement(m.Z, { displayTextRange: w.display_text_range, entities: w.entities, isCondensed: t, numberOfLines: n, style: [y.tweetText, C], text: E }),
                            (!t || !E) &&
                                (w.extended_entities?.media ?? []).map((e) => {
                                    const n = { ...e, ext_alt_text: void 0 };
                                    return o.createElement(p.Z, { displayMediaTags: !1, hasSensitiveMedia: w.possibly_sensitive, isCondensed: t, key: `media_${w.id_str}_${e.id_str}`, mediaContentStyles: y.media, mediaDetails: [n], mediaVisibilityResults: w.mediaVisibilityResults, preventPlayback: !0, shouldShowAltLabelAlways: !1, showAltTranslation: !1, showBorder: !1, singleImageMaxAspectRatio: 2, singleImageMinAspectRatio: 2, tweetId: w.id_str, videoAspectRatio: 2, videoOptions: { displayOptions: { badgeConfiguration: { hideDataSize: !0, hideViewCount: !0, hideDuration: !0 } }, hidePreviewPlayButton: !0 }, withCenterCrop: !0, withMediaTagsIcon: !t });
                                }),
                        ),
                );
            }
            const y = c.default.create((e) => ({ interactiveContainer: { height: "100%", flex: 1 }, container: { borderStyle: "solid", borderWidth: 1, borderColor: (0, h.O)("white", 0.08), borderRadius: e.borderRadii.medium, backgroundColor: (0, h.O)("secondary"), padding: e.spaces.space12, textOverflow: "ellipsis", cursor: "pointer", transition: "background-color 0.2s ease", display: "flex", flexDirection: "column", gap: e.spaces.space8, height: "100%", flex: 1 }, hoveredContainer: { backgroundColor: (0, h.O)("foreground", 0.05) }, headerContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space8, textOverflow: "ellipsis", overflow: "hidden" }, nameContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, textOverflow: "ellipsis" }, screenName: { color: (0, h.O)("foreground", 0.6) }, timestamp: { color: (0, h.O)("foreground", 0.6), fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, textOverflow: "ellipsis", position: "relative", top: 3 }, tweetText: { fontSize: e.fontSizes.subtext2, color: (0, h.O)("foreground") }, media: {} }));
        },
        2025: (e, t, n) => {
            n.d(t, { Z: () => B });
            n(136728);
            var o = n(202784),
                a = n(325686),
                r = n(392237),
                i = n(530732),
                s = n(731708),
                l = n(154003),
                c = n(125363),
                d = n(390387),
                m = n(246728),
                p = n(955251),
                u = n(807896),
                g = n(18205),
                h = n(632908),
                f = n(755484),
                y = n(725556),
                b = n(103131),
                C = n(735081),
                x = n(663004),
                w = n(815045),
                v = n(194504),
                E = n(757483),
                Z = n(187669),
                S = n(949626);
            function _(e, t) {
                const { timeZone: n } = window.Intl.DateTimeFormat().resolvedOptions();
                return new Intl.DateTimeFormat("en-US", { month: t && t.month ? "short" : void 0, day: t && t.day ? "numeric" : void 0, hour: t && t.hour ? "numeric" : void 0, minute: t && t.minute ? "numeric" : void 0, year: t && t.year ? "numeric" : void 0, timeZoneName: t && t.timeZoneName ? "short" : void 0, timeZone: t && t.timeZoneName ? n : void 0 }).format(e);
            }
            function k({ active: e, label: t, payload: n }) {
                if ((o.useEffect(() => {}, []), e && n && n.length)) {
                    const e = [];
                    n.forEach((t) => {
                        const n = t.dataKey.split("-")[0];
                        e.push({ label: t.payload[`${n}-label`], percentage: Number(t.payload[`${n}-value`]), color: t.payload[`${n}-color`], postId: t.payload[`${n}-post`], numPosts: Number(t.payload[`${n}-num-posts`]) });
                    });
                    const t = n[0].payload.timestamp,
                        r = _(new Date(t), { year: !0, month: !0, day: !0, hour: !0, minute: !0 }),
                        i = e.sort((e, t) => t.percentage - e.percentage);
                    return o.createElement(
                        a.Z,
                        { style: I.tooltip },
                        o.createElement(s.ZP, { style: I.tooltipDate }, r),
                        o.createElement(
                            a.Z,
                            { style: I.percentages },
                            i.map((e) => {
                                const t = `${e.percentage}%`;
                                return o.createElement(a.Z, { key: e.label, style: I.tooltipType }, o.createElement(a.Z, { style: { ...I.tooltipTypeColor, backgroundColor: e.color } }), o.createElement(s.ZP, { style: I.tooltipTypeLabel, weight: "bold" }, e.label), o.createElement(a.Z, null), o.createElement(s.ZP, { style: I.tooltipValue }, t), o.createElement(s.ZP, { style: I.tooltipDate }, `(${e.numPosts} post${e.numPosts > 1 ? "s" : ""})`));
                            }),
                        ),
                    );
                }
                return null;
            }
            const I = r.default.create((e) => ({ tooltip: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, percentages: { display: " flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8 }, tooltipType: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, tooltipTypeColor: { width: e.spaces.space8, height: e.spaces.space8, borderRadius: e.spaces.space8 }, tooltipTypeLabel: { fontSize: "inherit", lineHeight: "inherit" }, tooltipValue: { fontSize: "inherit", lineHeight: "inherit" }, tooltipDate: { color: (0, p.O)("foreground", 0.6), fontSize: "inherit", lineHeight: "inherit" } }));
            var T = n(818199),
                P = n(823161),
                z = n(725405),
                D = n(836255),
                O = n(695356),
                H = n(931173);
            function R({ cx: e, cy: t, postId: n }) {
                const a = (0, z.Z)(),
                    r = o.useMemo(() => D.Z.createHydratorForTweet(n), [n]),
                    s = (0, c.v9)(r);
                if (!s) return null;
                const { user: l } = s,
                    d = () => {
                        (0, O.U8)(a, { postId: n });
                    };
                return o.createElement(
                    "g",
                    null,
                    o.createElement(
                        "foreignObject",
                        { height: 40, width: 40, x: e - 20, y: t - 20 },
                        o.createElement(
                            T.Z,
                            { renderContent: () => o.createElement(H.Z, { containerStyle: M.referencePostContainer, isPreview: !0, numberOfLines: 3, onClick: d, postId: n }), wrapperStyle: M.referenceHoverWrapper },
                            o.createElement(
                                i.Z,
                                {
                                    onClick: () => {
                                        d(), window.open(`https://x.com${s.permalink}`, "_blank");
                                    },
                                    style: M.referenceDotPost,
                                    withoutInteractiveStyles: !0,
                                },
                                ({ isHovered: e }) => o.createElement(P.default, { screenName: l?.screen_name, shape: "circle", size: "small", style: [M.userAvatar, e ? M.hoveredUserAvatar : void 0], uri: l?.profile_image_url_https, withLink: !1 }),
                            ),
                        ),
                    ),
                );
            }
            const M = r.default.create((e) => ({ referenceHoverWrapper: { width: "100%", height: "100%" }, referencePostContainer: { width: 300 }, referenceDotPost: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }, userAvatar: { transition: "all 0.2s ease", transform: "scale(1)", animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0, transform: "scale(0.8)" }, "60%": { opacity: 1, transform: "scale(1.2)" }, "100%": { opacity: 1, transform: "scale(1)" } }], animationTimingFunction: "ease-out" }, hoveredUserAvatar: { cursor: "pointer", transform: "scale(1.2)" } })),
                L = "news-sentiment-recharts";
            function F({ chartData: e, isBlurred: t, typeMetadata: n }) {
                const [l, c] = o.useState({}),
                    d = `line-chart-${Object.keys(l).join("-")}`,
                    m = t ? 100 : 200;
                (0, Z.q)(() => {
                    if (document.getElementById(L)) return;
                    const e = document.createElement("style");
                    e.setAttribute("id", L), (e.textContent = `\n      .${L} .recharts-responsive-container {\n        width: 102% !important;\n      }\n\n      .${L} .recharts-surface {\n        overflow: visible;\n      }\n    `);
                    const t = document.head;
                    return (
                        t && t.appendChild(e),
                        () => {
                            const e = document.getElementById(L);
                            e && e.remove();
                        }
                    );
                });
                const p = o.useCallback(
                        (e) => {
                            const t = { ...l };
                            l[e] ? delete t[e] : (t[e] = !0), c(t);
                        },
                        [l],
                    ),
                    I = o.useCallback((e) => _(new Date(e), { month: !0, day: !0, hour: !0 }), []),
                    T = Object.keys(l),
                    P = o.useMemo(() => {
                        if (!e.length) return [];
                        const t = [];
                        for (const o of e) {
                            const e = Object.keys(o);
                            for (const a of e)
                                if (a.endsWith("-post")) {
                                    const e = Number(a.split("-post")[0]),
                                        r = Object.values(n).find((t) => t.idx === e)?.label || "",
                                        i = o[a].toString();
                                    (T.length && !l[r]) || !i || t.push({ timestamp: o.timestamp, value: Number(o[`${e}-value`]), type: r || "", postId: i });
                                }
                        }
                        return t;
                    }, [e, n, T, l]);
                return o.createElement(
                    a.Z,
                    { style: [N.container, t ? N.blur : void 0] },
                    o.createElement(
                        v.Z,
                        { buttonsContainerStyle: N.typesContent, style: N.types },
                        Object.keys(n).map((e) => {
                            const t = n[e];
                            return o.createElement(i.Z, { key: `${e}-toggle`, onClick: () => p(e), withoutInteractiveStyles: !0 }, ({ isHovered: n }) => o.createElement(a.Z, { style: [N.typeContainer, { backgroundColor: E.Z.hexToCss(t.color, 0.5), color: t.color }, n ? { backgroundColor: E.Z.hexToCss(t.color, 0.3) } : void 0, T.length > 0 && !T.includes(e) ? { opacity: 0.5 } : void 0] }, o.createElement(s.ZP, { style: N.type }, t.label)));
                        }),
                    ),
                    o.createElement(
                        a.Z,
                        { style: N.lineChart },
                        o.createElement(
                            S.Z,
                            { className: L },
                            o.createElement(
                                g.h,
                                { height: m },
                                o.createElement(
                                    h.w,
                                    { data: e, height: m, key: d },
                                    o.createElement(f.q, { fillOpacity: 0.6, horizontal: !0, stroke: r.default.theme.colors.hoverBlack, strokeDasharray: "1 0", vertical: !1 }),
                                    o.createElement(y.K, { axisLine: !1, dataKey: "timestamp", domain: ["dataMin", "dataMax"], tick: N.tick, tickFormatter: I, tickLine: !1, type: "number" }),
                                    o.createElement(b.B, { axisLine: !1, domain: [0, 100], orientation: "right", tick: N.tick, tickFormatter: (e) => `${e}%`, tickLine: !1 }),
                                    o.createElement(C.u, { content: o.createElement(k, null), cursor: { stroke: r.default.theme.colors.gray200, strokeDasharray: "1 0" }, isAnimationActive: !1 }),
                                    Object.keys(n).map((e) => (l[e] || 0 === T.length ? o.createElement(x.x, { activeDot: !0, connectNulls: !0, dataKey: `${n[e].idx}-value`, dot: !1, isAnimationActive: !1, key: `line-chart-${e}`, stroke: n[e].color, strokeWidth: 2, type: "monotone" }) : null)),
                                    P.map((e) => o.createElement(w.q, { alwaysShow: !0, isFront: !0, key: `reference-post-${e.postId}`, shape: (t) => o.createElement(R, (0, u.Z)({}, t, { postId: e.postId })), x: e.timestamp, y: e.value })),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const N = r.default.create((e) => ({ container: { width: "100%" }, blur: { filter: "blur(5px)" }, types: { width: "100%" }, typesContent: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, marginVertical: e.spaces.space12 }, typeContainer: { width: "max-content", display: "flex", justifyContent: "center", alignItems: "center", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, borderRadius: e.borderRadii.xLarge, transition: "all 0.2s ease" }, type: { fontSize: e.fontSizes.subtext2 }, lineChart: { flex: 1, marginTop: e.spaces.space16 }, tick: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, color: e.colors.gray900, fontFamily: e.fontFamilies.normal } })),
                $ = [r.default.theme.colors.blue300, r.default.theme.colors.yellow300, r.default.theme.colors.orange300, r.default.theme.colors.green300, r.default.theme.colors.magenta300, r.default.theme.colors.plum300, r.default.theme.colors.red300, r.default.theme.colors.purple300, r.default.theme.colors.teal300];
            const A = "What does X think?";
            function B({ onClick: e, sentiment: t, showPercentages: n, style: p }) {
                const u = (0, c.v9)(d.Qb),
                    { chartData: g, typeMetadata: h } = (function ({ sentiment: e }) {
                        return o.useMemo(() => {
                            const t = {},
                                n = {};
                            return (
                                e.sentiment_types.forEach((t, o) => {
                                    n[t] = { idx: o, label: t, color: $[o % e.sentiment_types.length] };
                                }),
                                [...(e.sentiment_scores ?? [])].forEach((e) => {
                                    const o = Number(e.timestamp),
                                        a = o.toString();
                                    t[a] || (t[a] = { timestamp: o }), (t[a][`${n[e.sentiment_type].idx}-post`] = e.post_id || ""), (t[a][`${n[e.sentiment_type].idx}-num-posts`] = e.num_posts || ""), (t[a][`${n[e.sentiment_type].idx}-value`] = Number(e.sentiment_value)), (t[a][`${n[e.sentiment_type].idx}-label`] = e.sentiment_type), (t[a][`${n[e.sentiment_type].idx}-color`] = n[e.sentiment_type].color);
                                }),
                                { chartData: Object.values(t).sort((e, t) => e.timestamp - t.timestamp), typeMetadata: n }
                            );
                        }, [e]);
                    })({ sentiment: t }),
                    { isCompactLayout: f } = (0, m.Z)(),
                    y = o.useMemo(() => {
                        if (!g.length) return [];
                        const e = g[g.length - 1],
                            t = [];
                        return (
                            Object.keys(h).forEach((n) => {
                                const o = `${h[n].idx}-value`;
                                void 0 !== e[o] && t.push({ type: n, value: Number(e[o]), color: h[n].color });
                            }),
                            t
                        );
                    }, [g, h]);
                if (!g.length) return null;
                if (n && y.length > 0) {
                    const n = 3,
                        l = {},
                        c = [...y].sort((e, t) => t.value - e.value),
                        d = [r.default.theme.colors.blue700, r.default.theme.colors.blue500, r.default.theme.colors.blue300];
                    return (
                        c.forEach((e, t) => {
                            l[e.value] = d[t];
                        }),
                        o.createElement(i.Z, { onClick: e, style: [W.interactivePercentageContainer, f ? W.compactInteractivePercentageContainer : void 0], withoutInteractiveStyles: !0 }, ({ isHovered: e }) =>
                            o.createElement(
                                a.Z,
                                { style: [W.percentagesContainer, f ? W.compactPercentagesContainer : void 0, e ? W.hoveredPercentagesContainer : void 0, p] },
                                o.createElement(s.ZP, { style: W.percentageQuestion }, t.question),
                                o.createElement(
                                    a.Z,
                                    { style: [W.percentageScoresContainer, f ? W.compactPercentageScoresContainer : void 0] },
                                    y.slice(0, n).map((e) => o.createElement(a.Z, { key: `score-${e.type}`, style: W.percentageScore }, o.createElement(s.ZP, { style: W.percentageType }, e.type), o.createElement(s.ZP, { style: [W.percentagePercentage, { color: l[e.value] }], weight: "bold" }, `${e.value}%`))),
                                ),
                            ),
                        )
                    );
                }
                return o.createElement(a.Z, { style: [W.container, p] }, o.createElement(a.Z, { style: W.headerContainer }, o.createElement(a.Z, { style: W.questionContainer }, o.createElement(s.ZP, { style: W.title, weight: "bold" }, A), o.createElement(s.ZP, { style: W.question }, t.question))), o.createElement(a.Z, { style: W.visibilityContainer }, o.createElement(F, { chartData: g, isBlurred: !u, typeMetadata: h }), !u && o.createElement(a.Z, { style: W.loggedOutContainer }, o.createElement(l.ZP, { backgroundColor: "gray50", borderColor: "transparent", link: "/login" }, "Login to view"))));
            }
            const W = r.default.create((e) => ({
                interactivePercentageContainer: { flex: 1 },
                compactInteractivePercentageContainer: { width: "100%", flex: 1 },
                percentagesContainer: { padding: e.spaces.space12, backgroundColor: (0, p.O)("secondary"), borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: (0, p.O)("white", 0.08), width: "100%", display: "flex", flexDirection: "column", gap: e.spaces.space4, transition: "background-color 0.2s ease" },
                compactPercentagesContainer: { width: "100%" },
                hoveredPercentagesContainer: { backgroundColor: (0, p.O)("foreground", 0.05), cursor: "pointer" },
                percentageQuestion: { color: (0, p.O)("foreground", 0.6), fontSize: e.fontSizes.subtext1 },
                percentageScoresContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space32, width: "100%", maxWidth: "100%" },
                compactPercentageScoresContainer: { width: "100%", gap: "unset", justifyContent: "space-between" },
                percentageScore: { display: "flex", flexDirection: "column" },
                percentageType: { color: (0, p.O)("foreground", 0.6), fontSize: e.fontSizes.subtext1 },
                percentagePercentage: { fontSize: e.fontSizes.title4 },
                container: { width: "100%", padding: e.spaces.space16, backgroundColor: (0, p.O)("secondary"), transition: "background-color 0.2s ease", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: (0, p.O)("white", 0.08) },
                hoveredContainer: { backgroundColor: (0, p.O)("foreground", 0.05), cursor: "pointer" },
                headerContainer: { display: "flex", flexDirection: "row", width: "100%", gap: e.spaces.space16 },
                questionContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, width: "100%" },
                title: { color: (0, p.O)("foreground") },
                question: { color: (0, p.O)("foreground") },
                visibilityContainer: { position: "relative" },
                loggedOutContainer: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", backgroundColor: (0, p.O)("secondary", 0.5), display: "flex", justifyContent: "center", alignItems: "center" },
            }));
        },
        978086: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                a = n(530732),
                r = n(731708),
                i = n(392237),
                s = n(246728),
                l = n(955251);
            function c({ numberOfLines: e, onClick: t, text: n, variant: i }) {
                const { isCompactLayout: l } = (0, s.Z)(),
                    c = { xSmall: d.xSmallTitle, small: d.smallTitle, medium: d.mediumTitle, large: { ...d.largeTitle, ...(l ? d.compactLargeTitle : {}) } }[i || "large"];
                return o.createElement(a.Z, { onClick: t, withoutInteractiveStyles: !0 }, ({ isHovered: a }) => o.createElement(r.ZP, { numberOfLines: e, style: [d.title, c, t && a ? d.hovered : void 0], weight: "bold" }, n));
            }
            const d = i.default.create((e) => ({ title: { color: (0, l.O)("foreground"), transition: "all 0.1s ease" }, xSmallTitle: { fontSize: e.fontSizes.body, lineHeight: e.fontSizes.body }, smallTitle: { fontSize: e.fontSizes.headline2, lineHeight: 23 }, mediumTitle: { fontSize: e.fontSizes.headline1, lineHeight: e.fontSizes.headline1 }, largeTitle: { fontSize: e.fontSizes.title1, lineHeight: 40 }, compactLargeTitle: { fontSize: e.fontSizes.title3, lineHeight: 30 }, hovered: { cursor: "pointer", color: (0, l.O)("foreground", 0.6) } }));
        },
        282279: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(543673), n(240753), n(128399);
            var o = n(202784),
                a = n(325686),
                r = n(530732),
                i = n(992942),
                s = n(731708),
                l = n(392237),
                c = n(955251);
            function d({ containerStyle: e, isHoverCard: t, onClick: n, style: l, website: c }) {
                const d = o.useCallback(
                    (e) => {
                        n && n(), window.open(e, "_blank");
                    },
                    [n],
                );
                return c && c.url
                    ? o.createElement(
                          r.Z,
                          {
                              onClick: () => {
                                  d(c.url);
                              },
                              style: [m.interactiveContainer, e],
                              withoutInteractiveStyles: !0,
                          },
                          ({ isHovered: e }) => o.createElement(a.Z, { style: [m.container, e ? m.hoveredContainer : void 0, l] }, o.createElement(a.Z, { style: m.headerContainer }, !!c.favicon_base64 && o.createElement(a.Z, { style: m.faviconContainer }, o.createElement(i.Z, { resizeMode: "cover", source: c.favicon_base64, style: m.favicon })), (!!c.media_name || !!c.title || !!c.url) && o.createElement(s.ZP, { numberOfLines: 1, style: m.title }, c.media_name || c.title || new URL(c.url).hostname)), (!!c.summary || !!c.snippet || !!c.description) && o.createElement(s.ZP, { numberOfLines: 3, style: m.summary }, c.summary || c.snippet || c.description)),
                      )
                    : null;
            }
            const m = l.default.create((e) => ({ interactiveContainer: { width: "max-content" }, container: { padding: e.spaces.space16, backgroundColor: (0, c.O)("secondary"), transition: "background-color 0.2s ease", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: (0, c.O)("white", 0.08), overflow: "hidden", maxWidth: 400, display: "flex", flexDirection: "column", gap: e.spaces.space8 }, hoveredContainer: { backgroundColor: (0, c.O)("foreground", 0.05), cursor: "pointer" }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, faviconContainer: { width: e.spaces.space16, height: e.spaces.space16 }, favicon: { width: "100%", height: "100%", borderRadius: 2 }, title: { fontSize: e.fontSizes.subtext1, color: (0, c.O)("foreground", 0.8) }, summary: { color: (0, c.O)("foreground") } }));
        },
        221799: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(500970),
                a = (n(585488), n(712696)),
                r = n.n(a);
            const i = o.Z;
            const s = function ({ trendId: e }) {
                const t = r()(i, { trendId: e }).newsArticleResult;
                if (!t) return null;
                const n = t.result;
                return (n && n.deepsearch_news_articles && { ...n.deepsearch_news_articles, sentiment: n.sentiment_data ?? void 0, timeline_id: n.page?.post_timelines?.find((e) => "Top" === e.label)?.post_timeline.id }) || null;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.News-e019dbda.a10a2b5a.js.map
