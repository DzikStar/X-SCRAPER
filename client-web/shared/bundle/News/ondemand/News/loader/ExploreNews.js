"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.News~ondemand.News~loader.ExploreNews", "icons/IconAtBold-js", "icons/IconBookStrokeOff-js", "icons/IconBookmarkCloseStroke-js", "icons/IconFilterFill-js", "icons/IconItalic-js", "icons/IconNumberedList-js", "icons/IconThumbsUp-js"],
    {
        193285: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var a = n(202784),
                o = n(325686),
                r = n(154003),
                i = n(392237),
                l = n(97301),
                s = n(58399);
            const c = 5;
            function d({ currentPageIdx: e, numPerPage: t, onPageIdxChange: n, style: i, total: d }) {
                const u = t > 0 ? Math.ceil(d / t) : 1,
                    p = a.useMemo(() => {
                        const t = [];
                        for (let n = 0; n < u; n++) t.push({ idx: n, text: n + 1, isSelected: e === n });
                        return t;
                    }, [u, e]),
                    h = a.useCallback(() => {
                        e < u - 1 && n(e + 1);
                    }, [e, n, u]),
                    g = a.useCallback(() => {
                        e > 0 && n(e - 1);
                    }, [e, n]),
                    y = a.useMemo(() => {
                        const t = [];
                        let n = Math.max(0, e - Math.floor(c / 2));
                        const a = Math.min(u - 1, n + c - 1);
                        a === u - 1 && (n = Math.max(0, a - c + 1));
                        for (let e = n; e <= a; e++) t.push(p[e]);
                        return t;
                    }, [p, e, u]);
                return a.createElement(
                    o.Z,
                    { style: [m.container, i] },
                    a.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e <= 0, icon: a.createElement(l.default, { style: m.chevron }), onClick: g, size: "small", style: m.button }),
                    a.createElement(
                        o.Z,
                        { style: m.pageNumContainer },
                        y.map((e) => a.createElement(r.ZP, { borderColor: "transparent", color: e.isSelected ? "text" : "gray700", key: `page_${e.text}`, onClick: () => n(e.idx), size: "small", style: m.button }, e.text)),
                    ),
                    a.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e >= u - 1, icon: a.createElement(s.default, { style: m.chevron }), onClick: h, size: "small", style: m.button }),
                );
            }
            const m = i.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1, gap: e.spaces.space8, width: "100%" }, chevron: { width: e.spaces.space20, height: e.spaces.space20 }, pageNumContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, flexGrow: 0, flexShrink: 1 }, button: {} }));
        },
        520595: (e, t, n) => {
            n.d(t, { a: () => h });
            var a = n(202784),
                o = n(325686),
                r = n(525271),
                i = n(392237),
                l = n(111677),
                s = n.n(l),
                c = n(400196),
                d = n(306677),
                m = n(725405),
                u = n(193285);
            const p = s().b58d2bd2,
                h = ({ onDrawerDismiss: e, paginationOptions: t, postIds: n, style: i, title: l, topBarStyle: s, withTransparentMask: c }) => {
                    const [d, m] = a.useState(0),
                        [h, f] = a.useState(() => (t ? n.slice(0, t.numResultsPerPage) : n)),
                        b = t && n.length > t.numResultsPerPage,
                        v = a.useCallback(
                            (e) => {
                                if ((m(e), t)) {
                                    const a = e * t.numResultsPerPage,
                                        o = a + t.numResultsPerPage;
                                    f(n.slice(a, o));
                                }
                            },
                            [n, t],
                        );
                    return a.createElement(
                        r.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: e, style: i, title: l || p, topBarStyle: s, withTransparentMask: c },
                        a.createElement(
                            o.Z,
                            { style: y.container },
                            b && a.createElement(u.Z, { currentPageIdx: d, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: v, total: n.length }),
                            h.map((e) => a.createElement(g, { key: `post_${e}`, postId: e })),
                        ),
                    );
                },
                g = ({ postId: e }) => {
                    const t = a.useRef(!1),
                        n = (0, m.Z)(),
                        r = a.useCallback(() => {
                            t.current || ((t.current = !0), n.scribe({ action: "impression", component: "post", data: { tweet_id: e } }));
                        }, [n, e]);
                    return a.createElement(o.Z, { key: `post_${e}`, style: y.post }, a.createElement(c.ZP, { displayPromotedContent: !0, tweetId: e, withActions: !0 }), a.createElement(d.D, { id: `post_${e}`, onFullyVisible: r, position: "bottom", testID: `post_${e}` }));
                },
                y = i.default.create((e) => ({ container: { width: "100%", maxWidth: 500, marginBottom: e.spaces.space12 }, post: { borderBottomWidth: 1, borderBottomColor: e.colors.borderColor }, mediaContent: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large, overflow: "hidden" } }));
        },
        118368: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(202784),
                o = n(325686);
            function r({ style: e }) {
                return a.createElement(o.Z, { style: [i.divider, e] });
            }
            const i = n(392237).default.create((e) => ({ divider: { width: "100%", height: 1, backgroundColor: e.colors.gray100, animationDuration: "0.2s", animationDelay: "0.2s", animationTimingFunction: "ease", animationFillMode: "both", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
        },
        246728: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(537392),
                o = n(392237);
            function r() {
                return { isCompactLayout: (0, a.Zx)(({ containerWidth: e }) => e <= o.default.theme.breakpoints.xLarge) };
            }
        },
        448301: (e, t, n) => {
            function a(e, t) {
                const n = new Date(),
                    a = Math.floor((e.getTime() - n.getTime()) / 1e3),
                    o = Math.abs(a),
                    r = 86400,
                    i = 3600,
                    l = 60;
                let s;
                if (o >= r) {
                    const e = Math.floor(o / r);
                    s = `${e} day${1 === e ? "" : "s"}`;
                } else if (o >= i) {
                    const e = Math.floor(o / i);
                    s = `${e} hour${1 === e ? "" : "s"}`;
                } else if (o >= l) {
                    const e = Math.floor(o / l);
                    s = `${e} ${t ? "minute" : "min"}${1 === e ? "" : "s"}`;
                } else {
                    const e = Math.floor(o);
                    s = `${e} ${t ? "second" : "sec"}${1 === e ? "" : "s"}`;
                }
                return a >= 0 ? `${s} later` : `${s} ago`;
            }
            function o(e) {
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
            function r(e) {
                return !!e.live_article && !!e.timeline && !!e.timeline.events && e.timeline.events.length > 1;
            }
            n.d(t, { ZW: () => r, pi: () => a, uf: () => o });
        },
        695356: (e, t, n) => {
            function a(e, t) {
                c(e)({ element: "news-open-article", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function o(e, t) {
                c(e)({ element: "news-article-card", action: "impression", data: { impression_id: t.articleId } });
            }
            function r(e, t) {
                c(e)({ element: "news-article-sentiment", action: "impression", data: { impression_id: t.articleId } });
            }
            function i(e, t) {
                c(e)({ element: "news-page-session-duration", action: "focus", data: { duration_ms: t.durationMs, url: t.url, event_info: t.sessionId } });
            }
            function l(e, t) {
                c(e)({ element: "news-open-post-source", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function s(e, t) {
                c(e)({ element: "news-article-section", action: "impression", data: { impression_id: t.articleId, event_info: JSON.stringify({ sectionIdx: t.sectionIdx, totalNumSections: t.totalNumSections }) } });
            }
            n.d(t, { E7: () => i, Ib: () => a, U8: () => l, XB: () => r, _$: () => o, xi: () => s });
            const c = (e) => (t) => {
                e.scribe({ ...t, data: { url: window.location.href, ...t.data } });
            };
        },
        790167: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(807896),
                o = (n(136728), n(543673), n(240753), n(128399), n(202784)),
                r = n(325686),
                i = n(818199),
                l = n(530732),
                s = n(731708),
                c = n(392237),
                d = n(282279);
            function m({ sources: e, text: t, ...n }) {
                const c = (t) => {
                        const n = e.find((e) => e.url === t || e.cached_page_url === t);
                        return n || { url: t, cached_page_url: t, creator: null, description: null, image: null, language: null, parsed_text: null, site_name: null, snippet: null, time_accessed: null, title: null, summary: null, media_name: u(t), date_last_crawled: null, date_published: null, favicon: null, favicon_base64: null };
                    },
                    d = o.useCallback((e) => o.createElement(p, { source: e }), []),
                    m = o.useCallback((e) => {
                        window.open(e, "_blank");
                    }, []);
                return o.createElement(
                    s.ZP,
                    (0, a.Z)({}, n, { style: [h.body, n.style] }),
                    (() => {
                        const e = [];
                        let n = 0;
                        const a = /\[\]\((.*?)\)/g;
                        for (const p of t.matchAll(a)) {
                            const a = p[1],
                                g = p.index,
                                y = g + p[0].length;
                            g > n && e.push(t.slice(n, g));
                            const f = c(a);
                            e.push(
                                o.createElement(
                                    i.Z,
                                    { renderContent: () => d(f) },
                                    o.createElement(
                                        l.Z,
                                        {
                                            onClick: () => {
                                                m(f.url);
                                            },
                                            withoutInteractiveStyles: !0,
                                        },
                                        ({ isHovered: e }) => o.createElement(r.Z, { style: [h.domainContainer, e ? h.hoveredDomainContainer : void 0] }, o.createElement(s.ZP, { style: h.domain }, f.media_name || u(f.url))),
                                    ),
                                ),
                            ),
                                (n = y);
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
            const p = ({ source: e }) => o.createElement(d.Z, { isHoverCard: !0, website: e }),
                h = c.default.create((e) => ({ body: { lineHeight: 26 }, domainContainer: { backgroundColor: e.colors.gray0, transition: "background-color 0.2s ease", borderRadius: e.borderRadii.large, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "max-content", paddingHorizontal: e.spaces.space4, height: e.spaces.space20 }, hoveredDomainContainer: { backgroundColor: e.colors.gray100 }, domain: { color: e.colors.gray900, fontSize: e.fontSizes.subtext2 }, hoverCardContainer: {} }));
        },
        287627: (e, t, n) => {
            n.d(t, { Z: () => g });
            var a = n(202784),
                o = n(325686),
                r = n(731708),
                i = n(823161),
                l = n(392237),
                s = n(166852),
                c = n(125363),
                d = n(836255),
                m = n(520595),
                u = n(448301);
            const p = 100,
                h = 3;
            function g({ containerStyle: e, disableClick: t, numPosts: n, postIds: i, style: l, textStyle: c, userAvatarShape: d, userAvatarSize: g, variant: b }) {
                const [v, C] = a.useState(!1),
                    w = { filled: { commentsContainer: f.filledMetadataContainer }, outline: { commentsContainer: f.outlineMetadataContainer } }[b || "outline"],
                    x = a.useMemo(() => (0, s.Z)(i).slice(0, p), [i]);
                return n
                    ? a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(
                              o.Z,
                              { style: [f.interactiveContainer, e] },
                              a.createElement(
                                  o.Z,
                                  { style: [f.commentsContainer, w.commentsContainer, l] },
                                  x.length > 0 &&
                                      a.createElement(
                                          o.Z,
                                          { style: f.postAvatars },
                                          x.slice(0, h).map((e, t) => a.createElement(y, { key: e, postId: e, shape: d, size: g, style: [f.postAvatar, { animationDelay: 0.1 * t + "s" }] })),
                                      ),
                                  a.createElement(r.ZP, { style: [f.commentsText, c] }, `${(0, u.uf)(n)} comments`),
                              ),
                          ),
                          v && a.createElement(m.a, { onDrawerDismiss: () => C(!1), paginationOptions: { numResultsPerPage: 15 }, postIds: x, style: f.drawer, topBarStyle: f.drawerTopBar, withTransparentMask: !0 }),
                      )
                    : null;
            }
            function y({ postId: e, shape: t, size: n, style: o }) {
                const r = a.useMemo(() => d.Z.createHydratorForTweet(e), [e]),
                    l = (0, c.v9)(r);
                return l && l.user.profile_image_url_https ? a.createElement(i.default, { backgroundColor: "transparent", borderColor: "transparent", borderWidth: "small", shape: t || "circle", size: n || "medium", style: [f.userAvatar, o], uri: l.user.profile_image_url_https }) : null;
            }
            const f = l.default.create((e) => ({ interactiveContainer: { height: "max-content", width: "max-content" }, commentsContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, borderRadius: e.spaces.space32, paddingHorizontal: e.spaces.space8, borderStyle: "solid", borderWidth: 1, width: "max-content", height: e.spaces.space32, transition: "background-color 0.2s ease" }, outlineMetadataContainer: { backgroundColor: "transparent", borderColor: e.colors.gray100 }, filledMetadataContainer: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray100 }, postAvatars: { display: "flex", flexDirection: "row", alignItems: "center", marginEnd: e.spacesPx.space12 }, postAvatar: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, userAvatar: { marginEnd: -e.spacesPx.space12 }, drawerTopBar: { backgroundColor: e.colors.gray0 }, drawer: { backgroundColor: e.colors.gray0 }, commentsText: { fontSize: e.fontSizes.subtext3 } }));
        },
        477575: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                o = n(325686),
                r = n(731708),
                i = n(392237),
                l = n(408665),
                s = n(448301),
                c = n(206411);
            function d({ isLive: e, style: t, textStyle: n, timestamp: i }) {
                return a.createElement(o.Z, { style: [m.container, t] }, e ? a.createElement(c.Z, null) : a.createElement(l.default, { style: m.icon }), a.createElement(r.ZP, { style: [m.date, n] }, `Updated ${(0, s.pi)(new Date(Number(i)), !0)}`));
            }
            const m = i.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, color: e.colors.gray700 }, date: { color: "inherit", fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, icon: { color: "inherit", width: e.spaces.space12, height: e.spaces.space12 } }));
        },
        206411: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(202784),
                o = n(325686),
                r = n(731708),
                i = n(392237),
                l = n(757483);
            const s = "LIVE";
            function c({ isAnimated: e, style: t, variant: n = "default" }) {
                return a.createElement(o.Z, { style: [d.container, t] }, a.createElement(r.ZP, { style: [d.label, "large" === n ? d.largeLabel : void 0], weight: "bold" }, s));
            }
            const d = i.default.create((e) => ({ container: { display: "flex", width: "max-content", padding: e.spaces.space4, backgroundColor: l.Z.hexToCss(e.colors.red500, 0.2), borderRadius: e.borderRadii.small }, label: { color: e.colors.red500, fontSize: 9, lineHeight: 9, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0.6 }, "50%": { opacity: 1 }, "100%": { opacity: 0.6 } }], animationTimingFunction: "ease", animationFillMode: "both", animationIterationCount: "infinite" }, largeLabel: { fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 } }));
        },
        858496: (e, t, n) => {
            n.d(t, { Z: () => K });
            n(136728);
            var a = n(202784),
                o = n(325686),
                r = n(107267),
                i = n(731708),
                l = n(154003),
                s = n(392237),
                c = n(757483),
                d = n(111677),
                m = n.n(d),
                u = n(323265),
                p = n(725405),
                h = n(125363),
                g = n(390387),
                y = n(530732),
                f = n(306677),
                b = n(695356);
            function v({ chartData: e, typeMetadata: t }) {
                const n = a.useMemo(() => {
                        if (!e.length) return [];
                        const n = e[e.length - 1],
                            a = [];
                        return (
                            Object.keys(t).forEach((e) => {
                                const o = `${t[e].idx}-value`,
                                    r = `${t[e].idx}-num-posts`;
                                void 0 !== n[o] && a.push({ timestamp: Number(n.timestamp), type: e, value: Number(n[o]), color: t[e].color, numPosts: Number(n[r]) });
                            }),
                            a
                        );
                    }, [e, t]),
                    o = {},
                    r = [...n].sort((e, t) => t.value - e.value),
                    i = [s.default.theme.colors.blue700, s.default.theme.colors.blue500, s.default.theme.colors.blue300];
                r.forEach((e, t) => {
                    o[e.value] = i[t];
                });
                const l = n.reduce((e, t) => e + t.numPosts, 0);
                return { sentimentScores: n, totalNumPosts: l };
            }
            const C = s.default.theme.spaces.space8,
                w = 15;
            function x({ articleId: e, chartData: t, containerStyle: n, hoveredStyle: r, onClick: l, question: s, size: c = "large", style: d, typeMetadata: m }) {
                const u = (0, p.Z)(),
                    { sentimentScores: h, totalNumPosts: g } = v({ chartData: t, typeMetadata: m }),
                    x = a.useCallback(() => {
                        (0, b.XB)(u, { articleId: e });
                    }, [e, u]);
                return a.createElement(y.Z, { onClick: l, style: [E.outerContainer, d], withoutInteractiveStyles: !0 }, ({ isHovered: e }) =>
                    a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(f.D, { id: "news_article_sentiment", onFullyVisible: x, position: "top", testID: "news_article_sentiment" }),
                        a.createElement(
                            o.Z,
                            { style: [E.container, e && l ? E.hoveredContainer : void 0, n, e && l && r] },
                            a.createElement(o.Z, { style: E.headerContainer }, a.createElement(i.ZP, { style: E.question }, s), a.createElement(i.ZP, { style: E.totalPosts, weight: "normal" }, `${g} posts`)),
                            a.createElement(
                                o.Z,
                                { style: E.barContainer },
                                a.createElement(o.Z, { style: E.baseBar }),
                                a.createElement(
                                    o.Z,
                                    { style: E.scoreBarsContainer },
                                    h.map((e, t) => {
                                        const n = t === h.length - 1;
                                        return a.createElement(o.Z, { key: `sentiment-bar-score-${e.type}`, style: [E.scoreBar, { flex: n ? 1 : void 0, width: n ? void 0 : `${e.value}%`, borderTopEndRadius: n ? C : 0, borderBottomEndRadius: n ? C : 0 }] }, a.createElement(o.Z, { style: [E.scoreBarBackground, { backgroundColor: e.color }] }), e.value > w && a.createElement(i.ZP, { numberOfLines: 1, style: E.scoreBarText }, `${e.value}%`));
                                    }),
                                ),
                            ),
                            a.createElement(
                                o.Z,
                                { style: E.legendContainer },
                                h.map((e) => a.createElement(o.Z, { style: E.legendItem }, a.createElement(i.ZP, { style: E.legendItemType }, e.type), a.createElement(o.Z, { style: [E.legendItemColor, { backgroundColor: e.color }] }))),
                            ),
                        ),
                    ),
                );
            }
            const E = s.default.create((e) => ({ outerContainer: { flex: 1 }, container: { width: "100%", display: "flex", flexDirection: "column", gap: e.spaces.space12, padding: e.spaces.space12, backgroundColor: "transparent", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, transition: "background-color 0.2s ease" }, hoveredContainer: { backgroundColor: e.colors.gray50 }, headerContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4 }, question: {}, totalPosts: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2 }, barContainer: { width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }, baseBar: { backgroundColor: e.colors.gray100, width: e.spaces.space2, height: 45 }, scoreBarsContainer: { display: "flex", flex: 1, flexDirection: "row", alignItems: "center" }, scoreBar: { height: 35, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }, scoreBarBackground: { position: "absolute", top: 0, start: 0, end: 0, bottom: 0, animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { width: "0%" }, "100%": { width: "100%" } }], animationFillMode: "both" }, scoreBarText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, animationDuration: "0.2s", animationDelay: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, legendContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space16 }, legendItem: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, legendItemType: { fontSize: e.fontSizes.subtext1, color: e.colors.gray1000 }, legendItemColor: { width: e.spaces.space12, height: e.spaces.space12, borderRadius: e.borderRadii.small } }));
            var Z = n(807896),
                k = n(18205),
                _ = n(632908),
                D = n(755484),
                S = n(725556),
                z = n(103131),
                M = n(735081),
                I = n(663004),
                P = n(815045),
                B = n(194504),
                H = n(187669),
                T = n(949626);
            function $(e, t) {
                const { timeZone: n } = window.Intl.DateTimeFormat().resolvedOptions();
                return new Intl.DateTimeFormat("en-US", { month: t && t.month ? "short" : void 0, day: t && t.day ? "numeric" : void 0, hour: t && t.hour ? "numeric" : void 0, minute: t && t.minute ? "numeric" : void 0, year: t && t.year ? "numeric" : void 0, timeZoneName: t && t.timeZoneName ? "short" : void 0, timeZone: t && t.timeZoneName ? n : void 0 }).format(e);
            }
            function R({ active: e, label: t, payload: n }) {
                if ((a.useEffect(() => {}, []), e && n && n.length)) {
                    const e = [];
                    n.forEach((t) => {
                        const n = t.dataKey.split("-")[0];
                        e.push({ label: t.payload[`${n}-label`], percentage: Number(t.payload[`${n}-value`]), color: t.payload[`${n}-color`], postId: t.payload[`${n}-post`], numPosts: Number(t.payload[`${n}-num-posts`]) });
                    });
                    const t = n[0].payload.timestamp,
                        r = $(new Date(t), { year: !0, month: !0, day: !0, hour: !0, minute: !0 }),
                        l = e.sort((e, t) => t.percentage - e.percentage);
                    return a.createElement(
                        o.Z,
                        { style: L.tooltip },
                        a.createElement(i.ZP, { style: L.tooltipDate }, r),
                        a.createElement(
                            o.Z,
                            { style: L.percentages },
                            l.map((e) => {
                                const t = `${e.percentage}%`;
                                return a.createElement(o.Z, { key: e.label, style: L.tooltipType }, a.createElement(o.Z, { style: { ...L.tooltipTypeColor, backgroundColor: e.color } }), a.createElement(i.ZP, { style: L.tooltipTypeLabel, weight: "bold" }, e.label), a.createElement(o.Z, null), a.createElement(i.ZP, { style: L.tooltipValue }, t), a.createElement(i.ZP, { style: L.tooltipDate }, `(${e.numPosts} post${e.numPosts > 1 ? "s" : ""})`));
                            }),
                        ),
                    );
                }
                return null;
            }
            const L = s.default.create((e) => ({ tooltip: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, percentages: { display: " flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8 }, tooltipType: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, tooltipTypeColor: { width: e.spaces.space8, height: e.spaces.space8, borderRadius: e.spaces.space8 }, tooltipTypeLabel: { fontSize: "inherit", lineHeight: "inherit" }, tooltipValue: { fontSize: "inherit", lineHeight: "inherit" }, tooltipDate: { color: e.colors.gray700, fontSize: "inherit", lineHeight: "inherit" } }));
            function V({ color: e, cx: t, cy: n }) {
                const r = 16;
                return a.createElement("g", null, a.createElement("foreignObject", { height: r, width: r, x: t - 8, y: n - 8 }, a.createElement(o.Z, { style: [F.dotContainer, { width: r, height: r }] }, a.createElement(o.Z, { style: [F.dot, { backgroundColor: e, width: 8, height: 8 }] }), a.createElement(o.Z, { style: F.pulseContainer }, a.createElement(o.Z, { style: [F.pulse, { backgroundColor: c.Z.hexToCss(e, 0.5) }] })))));
            }
            const F = s.default.create((e) => ({ dotContainer: { position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }, dot: { borderRadius: e.borderRadii.infinite }, pulseContainer: { position: "absolute", top: 0, start: 0, end: 0, bottom: 0, borderRadius: e.borderRadii.infinite, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }, pulse: { borderRadius: e.borderRadii.infinite, animationDuration: "1s", animationTimingFunction: "linear", animationIterationCount: "infinite", animationFillMode: "forwards", animationDelay: "0s", width: "100%", height: "100%", animationKeyframes: [{ "0%": { transform: "scale(0)", opacity: 1 } }, { "95%": { transform: "scale(1)", opacity: 1 } }, { "100%": { transform: "scale(1)", opacity: 0 } }] } })),
                N = "news-sentiment-recharts";
            function O({ chartData: e, isBlurred: t, question: n, typeMetadata: r }) {
                const l = (0, p.Z)(),
                    { sentimentScores: d } = v({ chartData: e, typeMetadata: r }),
                    [m, u] = a.useState({}),
                    h = `line-chart-${Object.keys(m).join("-")}`,
                    g = t ? 100 : 200;
                (0, H.q)(() => {
                    if (document.getElementById(N)) return;
                    const e = document.createElement("style");
                    e.setAttribute("id", N), (e.textContent = `\n      .${N} .recharts-responsive-container {\n        width: 102% !important;\n      }\n\n      .${N} .recharts-surface {\n        overflow: visible;\n      }\n    `);
                    const t = document.head;
                    return (
                        t && t.appendChild(e),
                        () => {
                            const e = document.getElementById(N);
                            e && e.remove();
                        }
                    );
                });
                const f = a.useCallback(
                        (e) => {
                            const t = { ...m };
                            m[e] ? delete t[e] : (t[e] = !0), l.scribe({ element: "news_sentiment_line_chart_type", action: "click", data: { event_info: JSON.stringify({ question: n, type: e }) } }), u(t);
                        },
                        [m, l, n],
                    ),
                    b = a.useCallback((e) => $(new Date(e), { month: !0, day: !0, hour: !0 }), []),
                    C = Object.keys(m);
                return a.createElement(
                    o.Z,
                    { style: [j.container, t ? j.blur : void 0] },
                    a.createElement(
                        B.Z,
                        { buttonsContainerStyle: j.typesContent, style: j.types },
                        Object.keys(r).map((e) => {
                            const t = r[e];
                            return a.createElement(y.Z, { key: `${e}-toggle`, onClick: () => f(e), withoutInteractiveStyles: !0 }, ({ isHovered: n }) => a.createElement(o.Z, { style: [j.typeContainer, { backgroundColor: c.Z.hexToCss(t.color, 0.5), color: t.color }, n ? { backgroundColor: c.Z.hexToCss(t.color, 0.3) } : void 0, C.length > 0 && !C.includes(e) ? { opacity: 0.5 } : void 0] }, a.createElement(i.ZP, { style: j.type }, t.label)));
                        }),
                    ),
                    a.createElement(
                        o.Z,
                        { style: j.lineChart },
                        a.createElement(
                            T.Z,
                            { className: N },
                            a.createElement(
                                k.h,
                                { height: g },
                                a.createElement(
                                    _.w,
                                    { data: e, height: g, key: h },
                                    a.createElement(D.q, { fillOpacity: 0.6, horizontal: !0, stroke: s.default.theme.colors.hoverBlack, strokeDasharray: "1 0", vertical: !1 }),
                                    a.createElement(S.K, { axisLine: !1, dataKey: "timestamp", domain: ["dataMin", "dataMax"], tick: j.tick, tickFormatter: b, tickLine: !1, type: "number" }),
                                    a.createElement(z.B, { axisLine: !1, domain: [0, 100], orientation: "right", tick: j.tick, tickFormatter: (e) => `${e}%`, tickLine: !1 }),
                                    a.createElement(M.u, { content: a.createElement(R, null), cursor: { stroke: s.default.theme.colors.gray200, strokeDasharray: "1 0" }, isAnimationActive: !1 }),
                                    Object.keys(r).map((e) => (m[e] || 0 === C.length ? a.createElement(I.x, { activeDot: !0, connectNulls: !0, dataKey: `${r[e].idx}-value`, dot: !1, key: `line-chart-${e}`, stroke: r[e].color, strokeWidth: 2.5, type: "monotone" }) : null)),
                                    d.map((e) => (m[e.type] || 0 === C.length ? a.createElement(P.q, { alwaysShow: !0, isFront: !0, key: `sentiment-score-${e.type}`, shape: (t) => a.createElement(V, (0, Z.Z)({}, t, { color: e.color })), x: e.timestamp, y: e.value }) : null)),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const j = s.default.create((e) => ({ container: { width: "100%" }, blur: { filter: "blur(5px)" }, types: { width: "100%" }, typesContent: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, marginVertical: e.spaces.space12 }, typeContainer: { width: "max-content", display: "flex", justifyContent: "center", alignItems: "center", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, borderRadius: e.borderRadii.xLarge, transition: "all 0.2s ease" }, type: { fontSize: e.fontSizes.subtext2 }, lineChart: { flex: 1, marginTop: e.spaces.space16 }, tick: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, color: e.colors.gray900, fontFamily: e.fontFamilies.normal } })),
                q = [s.default.theme.colors.blue300, s.default.theme.colors.yellow300, s.default.theme.colors.orange300, s.default.theme.colors.green300, s.default.theme.colors.magenta300, s.default.theme.colors.plum300, s.default.theme.colors.red300, s.default.theme.colors.purple300, s.default.theme.colors.teal300];
            const A = m().af781666,
                W = m().a1f414ee;
            function K({ articleId: e, containerStyle: t, hoveredContainerStyle: n, onClick: s, sentiment: c, showPercentages: d, size: m, style: y }) {
                const f = (0, p.Z)(),
                    b = (0, r.useHistory)(),
                    v = (0, h.v9)(g.Qb),
                    { chartData: C, typeMetadata: w } = (function ({ sentiment: e }) {
                        return a.useMemo(() => {
                            const t = {},
                                n = {};
                            return (
                                e.sentiment_types.forEach((t, a) => {
                                    n[t] = { idx: a, label: t, color: q[a % e.sentiment_types.length] };
                                }),
                                [...(e.sentiment_scores ?? [])].forEach((e) => {
                                    const a = Number(e.timestamp),
                                        o = a.toString();
                                    t[o] || (t[o] = { timestamp: a }), (t[o][`${n[e.sentiment_type].idx}-post`] = e.post_id || ""), (t[o][`${n[e.sentiment_type].idx}-num-posts`] = e.num_posts || ""), (t[o][`${n[e.sentiment_type].idx}-value`] = Number(e.sentiment_value)), (t[o][`${n[e.sentiment_type].idx}-label`] = e.sentiment_type), (t[o][`${n[e.sentiment_type].idx}-color`] = n[e.sentiment_type].color);
                                }),
                                { chartData: Object.values(t).sort((e, t) => e.timestamp - t.timestamp), typeMetadata: n }
                            );
                        }, [e]);
                    })({ sentiment: c }),
                    E = a.useCallback(() => {
                        const t = `https://x.com/i/news/article/${e}`;
                        u.ZP.isTwitterApp() ? (window.location.href = `https://x.com/compose/tweet?text=${t}`) : b.push({ pathname: "/compose/post", query: { text: t } }), f.scribe({ element: "share_news_article_sentiment", action: "click", data: { event_info: e } });
                    }, [f, e, b]);
                return C.length ? (d ? a.createElement(x, { articleId: e, chartData: C, containerStyle: t, hoveredStyle: n, onClick: s, question: c.question, size: m, style: y, typeMetadata: w }) : a.createElement(o.Z, { style: [U.container, y] }, a.createElement(o.Z, { style: U.headerContainer }, a.createElement(o.Z, { style: U.questionContainer }, a.createElement(o.Z, { style: U.titleContainer }, a.createElement(i.ZP, { style: U.title, weight: "bold" }, A), a.createElement(l.ZP, { onClick: E, size: "small", type: "primaryFilled" }, W)), a.createElement(i.ZP, { style: U.question }, c.question))), a.createElement(o.Z, { style: U.visibilityContainer }, a.createElement(O, { chartData: C, isBlurred: !v, question: c.question, typeMetadata: w }), !v && a.createElement(o.Z, { style: U.loggedOutContainer }, a.createElement(l.ZP, { backgroundColor: "gray50", borderColor: "transparent", link: "/login" }, "Login to view"))))) : null;
            }
            const U = s.default.create((e) => ({ container: { width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "background-color 0.2s ease", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200 }, hoveredContainer: { backgroundColor: e.colors.gray400, cursor: "pointer" }, headerContainer: { display: "flex", flexDirection: "row", width: "100%", gap: e.spaces.space16 }, questionContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, width: "100%" }, titleContainer: { display: "flex", flexDirection: "row", flex: 1, justifyContent: "space-between", alignItems: "center" }, title: {}, question: {}, visibilityContainer: { position: "relative" }, loggedOutContainer: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", backgroundColor: c.Z.hexToCss(e.colors.gray0, 0.5), display: "flex", justifyContent: "center", alignItems: "center" } }));
        },
        978086: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(202784),
                o = n(731708);
            function r({ numberOfLines: e, style: t, text: n, textStyle: r }) {
                return a.createElement(o.ZP, { numberOfLines: e, style: [i.title, r], weight: "bold" }, n);
            }
            const i = n(392237).default.create((e) => ({ title: { transition: "all 0.1s ease", fontSize: e.fontSizes.headline2, lineHeight: 23 } }));
        },
        282279: (e, t, n) => {
            n.d(t, { Z: () => s });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                o = n(325686),
                r = n(530732),
                i = n(992942),
                l = n(731708);
            function s({ containerStyle: e, isHoverCard: t, onClick: n, style: s, website: d }) {
                const m = a.useCallback(
                    (e) => {
                        n && n(), window.open(e, "_blank");
                    },
                    [n],
                );
                return d && d.url
                    ? a.createElement(
                          r.Z,
                          {
                              onClick: () => {
                                  m(d.url);
                              },
                              style: [c.interactiveContainer, e],
                              withoutInteractiveStyles: !0,
                          },
                          ({ isHovered: e }) => a.createElement(o.Z, { style: [c.container, e ? c.hoveredContainer : void 0, s] }, a.createElement(o.Z, { style: c.headerContainer }, !!d.favicon_base64 && a.createElement(o.Z, { style: c.faviconContainer }, a.createElement(i.Z, { resizeMode: "cover", source: d.favicon_base64, style: c.favicon })), (!!d.media_name || !!d.title || !!d.url) && a.createElement(l.ZP, { numberOfLines: 1, style: c.title }, d.media_name || d.title || new URL(d.url).hostname)), (!!d.summary || !!d.snippet || !!d.description) && a.createElement(l.ZP, { numberOfLines: 3, style: c.summary }, d.summary || d.snippet || d.description)),
                      )
                    : null;
            }
            const c = n(392237).default.create((e) => ({ interactiveContainer: { width: "max-content" }, container: { padding: e.spaces.space16, backgroundColor: "transparent", transition: "background-color 0.2s ease", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, overflow: "hidden", maxWidth: 400, display: "flex", flexDirection: "column", gap: e.spaces.space8 }, hoveredContainer: { backgroundColor: e.colors.gray50, cursor: "pointer" }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, faviconContainer: { width: e.spaces.space16, height: e.spaces.space16 }, favicon: { width: "100%", height: "100%", borderRadius: 2 }, title: { fontSize: e.fontSizes.subtext1, color: e.colors.gray1000 }, summary: {} }));
        },
        525271: (e, t, n) => {
            n.d(t, { Z: () => x });
            var a = n(202784),
                o = n(325686),
                r = n(111677),
                i = n.n(r),
                l = n(837020),
                s = n(461756),
                c = n(786998),
                d = n(154003),
                m = n(950822),
                u = n(743618),
                p = n(745153),
                h = n(292627),
                g = n(224162),
                y = n(392237);
            const f = i().af8fa2ae,
                b = a.createElement(l.default, null);
            class v extends a.Component {
                constructor(e) {
                    super(),
                        (this._isMounted = !0),
                        (this._setAnimationNode = (e) => {
                            this._animationNode = e;
                        }),
                        (this._handleTransitionEnd = (e) => {
                            !1 === this.state.isVisible && e.target instanceof window.HTMLElement && e.target === this._animationNode && this.props.onDismissed();
                        }),
                        (this._handleMaskClick = () => {
                            this._handleDismiss();
                        }),
                        (this._handleEsc = (e) => {
                            const { altKey: t, ctrlKey: n, key: a, metaKey: o } = e;
                            !(t || n || o) && "Escape" === a && this._handleDismiss();
                        }),
                        (this._handleDismiss = () => {
                            this.setState({ isVisible: !1 }), s.Z.reducedMotionEnabled && this.props.onDismissed();
                        }),
                        (this.state = { isVisible: !1 });
                }
                componentDidMount() {
                    window.requestAnimationFrame(() => {
                        this._isMounted && this.setState({ isVisible: !0 });
                    });
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                render() {
                    const { additionalControl: e, align: t, buttonType: n, children: r, style: i, subtitle: l, title: d, topBarStyle: y, withBackgroundBlur: f, withTopBar: b, withTransparentMask: v } = this.props,
                        { isVisible: x } = this.state;
                    return a.createElement(g.ZP.Consumer, null, ({ direction: g }) => {
                        const E = "rtl" === g,
                            Z = x ? w.visibleDrawer : ("left" === t) === E ? w.offscreenRightDrawer : w.offscreenLeftDrawer,
                            k = x && !v ? w.maskWithBg : w.maskTransparent,
                            _ = x ? w.animateOpen : w.animateClose,
                            D = s.Z.reducedMotionEnabled ? null : _;
                        return a.createElement(h.Z.Modal, null, a.createElement(p.Z, null, a.createElement(u.Z, null, a.createElement(o.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [w.mask, k, D, f ? w.backgroundBlur : null, "left" === t ? w.alignLeft : w.alignRight] }, (0, m.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: C, style: [w.root, f ? w.backgroundRootBlur : null, Z, D, i], children: a.createElement(a.Fragment, null, b ? a.createElement(c.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(n) : null, rightControl: "left" === t ? this._renderCloseButton(n) : "right" === t ? e : null, style: y, subtitle: l, title: d }) : null, a.createElement(o.Z, { style: w.contentContainer }, r)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return a.createElement(d.ZP, { "aria-label": f, icon: b, onPress: this._handleMaskClick, type: e });
                }
            }
            v.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const C = (e) => {
                    e.stopPropagation();
                },
                w = y.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...y.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                x = v;
        },
        388941: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 4.25c-4.28 0-7.75 3.47-7.75 7.75s3.47 7.75 7.75 7.75c1.499 0 2.894-.424 4.078-1.158l1.318 2.125c-1.568.972-3.418 1.534-5.396 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.75 12 1.75 22.25 6.339 22.25 12c0 .534-.032 1.061-.08 1.549-.223 2.285-2.31 3.65-4.378 3.471-1.128-.098-2.114-.621-2.817-1.396-1.008 1.136-2.467 1.802-4.077 1.576-2.748-.386-4.354-3.149-3.973-5.86s2.686-4.924 5.434-4.538c.793.111 1.491.421 2.074.87l.038-.32 2.482.298-.584 4.861c-.122 1.015.621 1.93 1.64 2.019.927.081 1.605-.515 1.674-1.223.042-.426.068-.869.068-1.306 0-4.28-3.47-7.75-7.75-7.75H12zm.01 5.026c-1.08-.152-2.377.746-2.611 2.41s.765 2.885 1.845 3.036c1.08.152 2.377-.746 2.611-2.41.234-1.664-.765-2.884-1.845-3.036z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        355586: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { clipRule: "evenodd", d: "M2.062 9h2.876C4.77 7.643 4.261 6.393 3.5 5.335 2.74 6.393 2.231 7.644 2.062 9zm2.823-5.151C6.017 5.298 6.759 7.069 6.95 9H9V2.062c-1.554.194-2.97.833-4.115 1.787zM11 2.062V9h2.05c.191-1.931.933-3.702 2.065-5.151-1.145-.954-2.56-1.593-4.115-1.787zm5.5 3.273C15.74 6.393 15.23 7.643 15.062 9h2.876c-.169-1.356-.678-2.607-1.438-3.665zM17.938 11h-2.876c.169 1.357.677 2.607 1.438 3.665.76-1.058 1.269-2.309 1.438-3.665zm-2.823 5.151c-1.132-1.449-1.874-3.22-2.066-5.151H11v6.938c1.554-.194 2.97-.833 4.115-1.787zM9 17.938V11H6.95c-.191 1.931-.933 3.702-2.065 5.151 1.145.954 2.56 1.593 4.115 1.787zm-5.5-3.273c.76-1.058 1.27-2.308 1.438-3.665H2.062c.169 1.356.678 2.607 1.438 3.665zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        416276: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.002 4h7.764c1.23 0 2.386.49 3.236 1.32.85-.83 2.006-1.32 3.236-1.32h7.764v16h-8.146c-.839 0-1.488.51-1.959 1.45h-1.789l-.171-.34C10.598 20.43 9.906 20 9.148 20H1.002V4zm10 3.26C10.53 6.48 9.685 6 8.766 6H3.002v12h6.146c.658 0 1.292.16 1.854.46V7.26zm2 11.21c.527-.29 1.143-.47 1.854-.47h6.146V6h-5.764c-.918 0-1.764.48-2.236 1.26v11.21zM19 11h-4V9h4v2zm0 4h-4v-2h4v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        738398: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        194417: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M16 3v8h-3V8.5H3v-3h10V3h3zm5 12.5h-9v3h9v-3zM10 21v-8H7v2.5H3v3h4V21h3zm8-12.5h3v-3h-3v3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        913315: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        856661: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        89085: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        226597: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        155353: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        946474: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M18.36 8h-2.68l.42-2.52C16.4 3.66 15 2 13.15 2c-1.07 0-2.06.57-2.59 1.51l-3 5.24c-.04.06-.08.11-.14.15C6.96 8.35 6.27 8 5.5 8H2v13h14.2c2.1 0 3.92-1.45 4.39-3.5l1.19-5.22C22.27 10.09 20.61 8 18.36 8zM6 19H4v-9h1.5c.27 0 .5.22.5.5V19zm13.83-7.17l-1.19 5.22C18.38 18.19 17.37 19 16.2 19H8v-8.16c.54-.2 1-.58 1.3-1.1l2.99-5.24c.18-.31.5-.5.86-.5.61 0 1.07.55.97 1.15l-.8 4.85h5.04c.97 0 1.68.89 1.47 1.83z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.News~ondemand.News~loader.ExploreNews.2f0707da.js.map
