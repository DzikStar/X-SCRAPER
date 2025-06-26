"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.News~ondemand.News~loader.ExploreNews", "icons/IconChevronLeft-js"],
    {
        193285: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var a = n(202784),
                o = n(325686),
                r = n(154003),
                i = n(392237),
                s = n(97301),
                l = n(58399);
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
                    y = a.useCallback(() => {
                        e > 0 && n(e - 1);
                    }, [e, n]),
                    g = a.useMemo(() => {
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
                    a.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e <= 0, icon: a.createElement(s.default, { style: m.chevron }), onClick: y, size: "small", style: m.button }),
                    a.createElement(
                        o.Z,
                        { style: m.pageNumContainer },
                        g.map((e) => a.createElement(r.ZP, { borderColor: "transparent", color: e.isSelected ? "text" : "gray700", key: `page_${e.text}`, onClick: () => n(e.idx), size: "small", style: m.button }, e.text)),
                    ),
                    a.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e >= u - 1, icon: a.createElement(l.default, { style: m.chevron }), onClick: h, size: "small", style: m.button }),
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
                s = n(111677),
                l = n.n(s),
                c = n(400196),
                d = n(306677),
                m = n(725405),
                u = n(193285);
            const p = l().b58d2bd2,
                h = ({ onDrawerDismiss: e, paginationOptions: t, postIds: n, style: i, title: s, topBarStyle: l, withTransparentMask: c }) => {
                    const [d, m] = a.useState(0),
                        [h, f] = a.useState(() => (t ? n.slice(0, t.numResultsPerPage) : n)),
                        b = t && n.length > t.numResultsPerPage,
                        C = a.useCallback(
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
                        { align: "right", buttonType: "primaryText", onDismissed: e, style: i, title: s || p, topBarStyle: l, withTransparentMask: c },
                        a.createElement(
                            o.Z,
                            { style: g.container },
                            b && a.createElement(u.Z, { currentPageIdx: d, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: C, total: n.length }),
                            h.map((e) => a.createElement(y, { key: `post_${e}`, postId: e })),
                        ),
                    );
                },
                y = ({ postId: e }) => {
                    const t = a.useRef(!1),
                        n = (0, m.Z)(),
                        r = a.useCallback(() => {
                            t.current || ((t.current = !0), n.scribe({ action: "impression", component: "post", data: { tweet_id: e } }));
                        }, [n, e]);
                    return a.createElement(o.Z, { key: `post_${e}`, style: g.post }, a.createElement(c.ZP, { displayPromotedContent: !0, tweetId: e, withActions: !0 }), a.createElement(d.D, { id: `post_${e}`, onFullyVisible: r, position: "bottom", testID: `post_${e}` }));
                },
                g = i.default.create((e) => ({ container: { width: "100%", maxWidth: 500, marginBottom: e.spaces.space12 }, post: { borderBottomWidth: 1, borderBottomColor: e.colors.borderColor }, mediaContent: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large, overflow: "hidden" } }));
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
                    s = 60;
                let l;
                if (o >= r) {
                    const e = Math.floor(o / r);
                    l = `${e} day${1 === e ? "" : "s"}`;
                } else if (o >= i) {
                    const e = Math.floor(o / i);
                    l = `${e} hour${1 === e ? "" : "s"}`;
                } else if (o >= s) {
                    const e = Math.floor(o / s);
                    l = `${e} ${t ? "minute" : "min"}${1 === e ? "" : "s"}`;
                } else {
                    const e = Math.floor(o);
                    l = `${e} ${t ? "second" : "sec"}${1 === e ? "" : "s"}`;
                }
                return a >= 0 ? `${l} later` : `${l} ago`;
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
            function s(e, t) {
                c(e)({ element: "news-open-post-source", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function l(e, t) {
                c(e)({ element: "news-article-section", action: "impression", data: { impression_id: t.articleId, event_info: JSON.stringify({ sectionIdx: t.sectionIdx, totalNumSections: t.totalNumSections }) } });
            }
            n.d(t, { E7: () => i, Ib: () => a, U8: () => s, XB: () => r, _$: () => o, xi: () => l });
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
                s = n(530732),
                l = n(731708),
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
                    l.ZP,
                    (0, a.Z)({}, n, { style: [h.body, n.style] }),
                    (() => {
                        const e = [];
                        let n = 0;
                        const a = /\[\]\((.*?)\)/g;
                        for (const p of t.matchAll(a)) {
                            const a = p[1],
                                y = p.index,
                                g = y + p[0].length;
                            y > n && e.push(t.slice(n, y));
                            const f = c(a);
                            e.push(
                                o.createElement(
                                    i.Z,
                                    { renderContent: () => d(f) },
                                    o.createElement(
                                        s.Z,
                                        {
                                            onClick: () => {
                                                m(f.url);
                                            },
                                            withoutInteractiveStyles: !0,
                                        },
                                        ({ isHovered: e }) => o.createElement(r.Z, { style: [h.domainContainer, e ? h.hoveredDomainContainer : void 0] }, o.createElement(l.ZP, { style: h.domain }, f.media_name || u(f.url))),
                                    ),
                                ),
                            ),
                                (n = g);
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
            n.d(t, { Z: () => y });
            var a = n(202784),
                o = n(325686),
                r = n(731708),
                i = n(823161),
                s = n(392237),
                l = n(166852),
                c = n(125363),
                d = n(836255),
                m = n(520595),
                u = n(448301);
            const p = 100,
                h = 3;
            function y({ containerStyle: e, disableClick: t, numPosts: n, postIds: i, style: s, textStyle: c, userAvatarShape: d, userAvatarSize: y, variant: b }) {
                const [C, x] = a.useState(!1),
                    w = { filled: { commentsContainer: f.filledMetadataContainer }, outline: { commentsContainer: f.outlineMetadataContainer } }[b || "outline"],
                    E = a.useMemo(() => (0, l.Z)(i).slice(0, p), [i]);
                return n
                    ? a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(
                              o.Z,
                              { style: [f.interactiveContainer, e] },
                              a.createElement(
                                  o.Z,
                                  { style: [f.commentsContainer, w.commentsContainer, s] },
                                  E.length > 0 &&
                                      a.createElement(
                                          o.Z,
                                          { style: f.postAvatars },
                                          E.slice(0, h).map((e, t) => a.createElement(g, { key: e, postId: e, shape: d, size: y, style: [f.postAvatar, { animationDelay: 0.1 * t + "s" }] })),
                                      ),
                                  a.createElement(r.ZP, { style: [f.commentsText, c] }, `${(0, u.uf)(n)} comments`),
                              ),
                          ),
                          C && a.createElement(m.a, { onDrawerDismiss: () => x(!1), paginationOptions: { numResultsPerPage: 15 }, postIds: E, style: f.drawer, topBarStyle: f.drawerTopBar, withTransparentMask: !0 }),
                      )
                    : null;
            }
            function g({ postId: e, shape: t, size: n, style: o }) {
                const r = a.useMemo(() => d.Z.createHydratorForTweet(e), [e]),
                    s = (0, c.v9)(r);
                return s && s.user.profile_image_url_https ? a.createElement(i.default, { backgroundColor: "transparent", borderColor: "transparent", borderWidth: "small", shape: t || "circle", size: n || "medium", style: [f.userAvatar, o], uri: s.user.profile_image_url_https }) : null;
            }
            const f = s.default.create((e) => ({ interactiveContainer: { height: "max-content", width: "max-content" }, commentsContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, borderRadius: e.spaces.space32, paddingHorizontal: e.spaces.space8, borderStyle: "solid", borderWidth: 1, width: "max-content", height: e.spaces.space32, transition: "background-color 0.2s ease" }, outlineMetadataContainer: { backgroundColor: "transparent", borderColor: e.colors.gray100 }, filledMetadataContainer: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray100 }, postAvatars: { display: "flex", flexDirection: "row", alignItems: "center", marginEnd: e.spacesPx.space12 }, postAvatar: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, userAvatar: { marginEnd: -e.spacesPx.space12 }, drawerTopBar: { backgroundColor: e.colors.gray0 }, drawer: { backgroundColor: e.colors.gray0 }, commentsText: { fontSize: e.fontSizes.subtext3 } }));
        },
        477575: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                o = n(325686),
                r = n(731708),
                i = n(392237),
                s = n(408665),
                l = n(448301),
                c = n(206411);
            function d({ isLive: e, style: t, textStyle: n, timestamp: i }) {
                return a.createElement(o.Z, { style: [m.container, t] }, e ? a.createElement(c.Z, null) : a.createElement(s.default, { style: m.icon }), a.createElement(r.ZP, { style: [m.date, n] }, `Updated ${(0, l.pi)(new Date(Number(i)), !0)}`));
            }
            const m = i.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, color: e.colors.gray700 }, date: { color: "inherit", fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, icon: { color: "inherit", width: e.spaces.space12, height: e.spaces.space12 } }));
        },
        206411: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(202784),
                o = n(325686),
                r = n(731708),
                i = n(392237),
                s = n(757483);
            const l = "LIVE";
            function c({ isAnimated: e, style: t, variant: n = "default" }) {
                return a.createElement(o.Z, { style: [d.container, t] }, a.createElement(r.ZP, { style: [d.label, "large" === n ? d.largeLabel : void 0], weight: "bold" }, l));
            }
            const d = i.default.create((e) => ({ container: { display: "flex", width: "max-content", padding: e.spaces.space4, backgroundColor: s.Z.hexToCss(e.colors.red500, 0.2), borderRadius: e.borderRadii.small }, label: { color: e.colors.red500, fontSize: 9, lineHeight: 9, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0.6 }, "50%": { opacity: 1 }, "100%": { opacity: 0.6 } }], animationTimingFunction: "ease", animationFillMode: "both", animationIterationCount: "infinite" }, largeLabel: { fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 } }));
        },
        858496: (e, t, n) => {
            n.d(t, { Z: () => V });
            n(136728);
            var a = n(202784),
                o = n(325686),
                r = n(107267),
                i = n(731708),
                s = n(154003),
                l = n(392237),
                c = n(757483),
                d = n(111677),
                m = n.n(d),
                u = n(323265),
                p = n(725405),
                h = n(125363),
                y = n(390387),
                g = n(530732),
                f = n(306677),
                b = n(695356);
            function C({ chartData: e, typeMetadata: t }) {
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
                    i = [l.default.theme.colors.blue700, l.default.theme.colors.blue500, l.default.theme.colors.blue300];
                r.forEach((e, t) => {
                    o[e.value] = i[t];
                });
                const s = n.reduce((e, t) => e + t.numPosts, 0);
                return { sentimentScores: n, totalNumPosts: s };
            }
            const x = l.default.theme.spaces.space8,
                w = 15;
            function E({ articleId: e, chartData: t, containerStyle: n, hoveredStyle: r, onClick: s, question: l, size: c = "large", style: d, typeMetadata: m }) {
                const u = (0, p.Z)(),
                    { sentimentScores: h, totalNumPosts: y } = C({ chartData: t, typeMetadata: m }),
                    E = a.useCallback(() => {
                        (0, b.XB)(u, { articleId: e });
                    }, [e, u]);
                return a.createElement(g.Z, { onClick: s, style: [v.outerContainer, d], withoutInteractiveStyles: !0 }, ({ isHovered: e }) =>
                    a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(f.D, { id: "news_article_sentiment", onFullyVisible: E, position: "top", testID: "news_article_sentiment" }),
                        a.createElement(
                            o.Z,
                            { style: [v.container, e && s ? v.hoveredContainer : void 0, n, e && s && r] },
                            a.createElement(o.Z, { style: v.headerContainer }, a.createElement(i.ZP, { style: v.question }, l), a.createElement(i.ZP, { style: v.totalPosts, weight: "normal" }, `${y} posts`)),
                            a.createElement(
                                o.Z,
                                { style: v.barContainer },
                                a.createElement(o.Z, { style: v.baseBar }),
                                a.createElement(
                                    o.Z,
                                    { style: v.scoreBarsContainer },
                                    h.map((e, t) => {
                                        const n = t === h.length - 1;
                                        return a.createElement(o.Z, { key: `sentiment-bar-score-${e.type}`, style: [v.scoreBar, { flex: n ? 1 : void 0, width: n ? void 0 : `${e.value}%`, borderTopEndRadius: n ? x : 0, borderBottomEndRadius: n ? x : 0 }] }, a.createElement(o.Z, { style: [v.scoreBarBackground, { backgroundColor: e.color }] }), e.value > w && a.createElement(i.ZP, { numberOfLines: 1, style: v.scoreBarText }, `${e.value}%`));
                                    }),
                                ),
                            ),
                            a.createElement(
                                o.Z,
                                { style: v.legendContainer },
                                h.map((e) => a.createElement(o.Z, { style: v.legendItem }, a.createElement(i.ZP, { style: v.legendItemType }, e.type), a.createElement(o.Z, { style: [v.legendItemColor, { backgroundColor: e.color }] }))),
                            ),
                        ),
                    ),
                );
            }
            const v = l.default.create((e) => ({ outerContainer: { flex: 1 }, container: { width: "100%", display: "flex", flexDirection: "column", gap: e.spaces.space12, padding: e.spaces.space12, backgroundColor: "transparent", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, transition: "background-color 0.2s ease" }, hoveredContainer: { backgroundColor: e.colors.gray50 }, headerContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4 }, question: {}, totalPosts: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2 }, barContainer: { width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }, baseBar: { backgroundColor: e.colors.gray100, width: e.spaces.space2, height: 45 }, scoreBarsContainer: { display: "flex", flex: 1, flexDirection: "row", alignItems: "center" }, scoreBar: { height: 35, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }, scoreBarBackground: { position: "absolute", top: 0, start: 0, end: 0, bottom: 0, animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { width: "0%" }, "100%": { width: "100%" } }], animationFillMode: "both" }, scoreBarText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, animationDuration: "0.2s", animationDelay: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, legendContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space16 }, legendItem: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, legendItemType: { fontSize: e.fontSizes.subtext1, color: e.colors.gray1000 }, legendItemColor: { width: e.spaces.space12, height: e.spaces.space12, borderRadius: e.borderRadii.small } }));
            var k = n(807896),
                Z = n(18205),
                _ = n(632908),
                S = n(755484),
                D = n(725556),
                P = n(103131),
                I = n(735081),
                M = n(663004),
                z = n(815045),
                T = n(194504),
                $ = n(187669),
                B = n(949626);
            function R(e, t) {
                const { timeZone: n } = window.Intl.DateTimeFormat().resolvedOptions();
                return new Intl.DateTimeFormat("en-US", { month: t && t.month ? "short" : void 0, day: t && t.day ? "numeric" : void 0, hour: t && t.hour ? "numeric" : void 0, minute: t && t.minute ? "numeric" : void 0, year: t && t.year ? "numeric" : void 0, timeZoneName: t && t.timeZoneName ? "short" : void 0, timeZone: t && t.timeZoneName ? n : void 0 }).format(e);
            }
            function F({ active: e, label: t, payload: n }) {
                if ((a.useEffect(() => {}, []), e && n && n.length)) {
                    const e = [];
                    n.forEach((t) => {
                        const n = t.dataKey.split("-")[0];
                        e.push({ label: t.payload[`${n}-label`], percentage: Number(t.payload[`${n}-value`]), color: t.payload[`${n}-color`], postId: t.payload[`${n}-post`], numPosts: Number(t.payload[`${n}-num-posts`]) });
                    });
                    const t = n[0].payload.timestamp,
                        r = R(new Date(t), { year: !0, month: !0, day: !0, hour: !0, minute: !0 }),
                        s = e.sort((e, t) => t.percentage - e.percentage);
                    return a.createElement(
                        o.Z,
                        { style: N.tooltip },
                        a.createElement(i.ZP, { style: N.tooltipDate }, r),
                        a.createElement(
                            o.Z,
                            { style: N.percentages },
                            s.map((e) => {
                                const t = `${e.percentage}%`;
                                return a.createElement(o.Z, { key: e.label, style: N.tooltipType }, a.createElement(o.Z, { style: { ...N.tooltipTypeColor, backgroundColor: e.color } }), a.createElement(i.ZP, { style: N.tooltipTypeLabel, weight: "bold" }, e.label), a.createElement(o.Z, null), a.createElement(i.ZP, { style: N.tooltipValue }, t), a.createElement(i.ZP, { style: N.tooltipDate }, `(${e.numPosts} post${e.numPosts > 1 ? "s" : ""})`));
                            }),
                        ),
                    );
                }
                return null;
            }
            const N = l.default.create((e) => ({ tooltip: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, percentages: { display: " flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8 }, tooltipType: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, tooltipTypeColor: { width: e.spaces.space8, height: e.spaces.space8, borderRadius: e.spaces.space8 }, tooltipTypeLabel: { fontSize: "inherit", lineHeight: "inherit" }, tooltipValue: { fontSize: "inherit", lineHeight: "inherit" }, tooltipDate: { color: e.colors.gray700, fontSize: "inherit", lineHeight: "inherit" } }));
            function L({ color: e, cx: t, cy: n }) {
                const r = 16;
                return a.createElement("g", null, a.createElement("foreignObject", { height: r, width: r, x: t - 8, y: n - 8 }, a.createElement(o.Z, { style: [H.dotContainer, { width: r, height: r }] }, a.createElement(o.Z, { style: [H.dot, { backgroundColor: e, width: 8, height: 8 }] }), a.createElement(o.Z, { style: H.pulseContainer }, a.createElement(o.Z, { style: [H.pulse, { backgroundColor: c.Z.hexToCss(e, 0.5) }] })))));
            }
            const H = l.default.create((e) => ({ dotContainer: { position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }, dot: { borderRadius: e.borderRadii.infinite }, pulseContainer: { position: "absolute", top: 0, start: 0, end: 0, bottom: 0, borderRadius: e.borderRadii.infinite, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }, pulse: { borderRadius: e.borderRadii.infinite, animationDuration: "1s", animationTimingFunction: "linear", animationIterationCount: "infinite", animationFillMode: "forwards", animationDelay: "0s", width: "100%", height: "100%", animationKeyframes: [{ "0%": { transform: "scale(0)", opacity: 1 } }, { "95%": { transform: "scale(1)", opacity: 1 } }, { "100%": { transform: "scale(1)", opacity: 0 } }] } })),
                O = "news-sentiment-recharts";
            function j({ chartData: e, isBlurred: t, question: n, typeMetadata: r }) {
                const s = (0, p.Z)(),
                    { sentimentScores: d } = C({ chartData: e, typeMetadata: r }),
                    [m, u] = a.useState({}),
                    h = `line-chart-${Object.keys(m).join("-")}`,
                    y = t ? 100 : 200;
                (0, $.q)(() => {
                    if (document.getElementById(O)) return;
                    const e = document.createElement("style");
                    e.setAttribute("id", O), (e.textContent = `\n      .${O} .recharts-responsive-container {\n        width: 102% !important;\n      }\n\n      .${O} .recharts-surface {\n        overflow: visible;\n      }\n    `);
                    const t = document.head;
                    return (
                        t && t.appendChild(e),
                        () => {
                            const e = document.getElementById(O);
                            e && e.remove();
                        }
                    );
                });
                const f = a.useCallback(
                        (e) => {
                            const t = { ...m };
                            m[e] ? delete t[e] : (t[e] = !0), s.scribe({ element: "news_sentiment_line_chart_type", action: "click", data: { event_info: JSON.stringify({ question: n, type: e }) } }), u(t);
                        },
                        [m, s, n],
                    ),
                    b = a.useCallback((e) => R(new Date(e), { month: !0, day: !0, hour: !0 }), []),
                    x = Object.keys(m);
                return a.createElement(
                    o.Z,
                    { style: [W.container, t ? W.blur : void 0] },
                    a.createElement(
                        T.Z,
                        { buttonsContainerStyle: W.typesContent, style: W.types },
                        Object.keys(r).map((e) => {
                            const t = r[e];
                            return a.createElement(g.Z, { key: `${e}-toggle`, onClick: () => f(e), withoutInteractiveStyles: !0 }, ({ isHovered: n }) => a.createElement(o.Z, { style: [W.typeContainer, { backgroundColor: c.Z.hexToCss(t.color, 0.5), color: t.color }, n ? { backgroundColor: c.Z.hexToCss(t.color, 0.3) } : void 0, x.length > 0 && !x.includes(e) ? { opacity: 0.5 } : void 0] }, a.createElement(i.ZP, { style: W.type }, t.label)));
                        }),
                    ),
                    a.createElement(
                        o.Z,
                        { style: W.lineChart },
                        a.createElement(
                            B.Z,
                            { className: O },
                            a.createElement(
                                Z.h,
                                { height: y },
                                a.createElement(
                                    _.w,
                                    { data: e, height: y, key: h },
                                    a.createElement(S.q, { fillOpacity: 0.6, horizontal: !0, stroke: l.default.theme.colors.hoverBlack, strokeDasharray: "1 0", vertical: !1 }),
                                    a.createElement(D.K, { axisLine: !1, dataKey: "timestamp", domain: ["dataMin", "dataMax"], tick: W.tick, tickFormatter: b, tickLine: !1, type: "number" }),
                                    a.createElement(P.B, { axisLine: !1, domain: [0, 100], orientation: "right", tick: W.tick, tickFormatter: (e) => `${e}%`, tickLine: !1 }),
                                    a.createElement(I.u, { content: a.createElement(F, null), cursor: { stroke: l.default.theme.colors.gray200, strokeDasharray: "1 0" }, isAnimationActive: !1 }),
                                    Object.keys(r).map((e) => (m[e] || 0 === x.length ? a.createElement(M.x, { activeDot: !0, connectNulls: !0, dataKey: `${r[e].idx}-value`, dot: !1, key: `line-chart-${e}`, stroke: r[e].color, strokeWidth: 2.5, type: "monotone" }) : null)),
                                    d.map((e) => (m[e.type] || 0 === x.length ? a.createElement(z.q, { alwaysShow: !0, isFront: !0, key: `sentiment-score-${e.type}`, shape: (t) => a.createElement(L, (0, k.Z)({}, t, { color: e.color })), x: e.timestamp, y: e.value }) : null)),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const W = l.default.create((e) => ({ container: { width: "100%" }, blur: { filter: "blur(5px)" }, types: { width: "100%" }, typesContent: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, marginVertical: e.spaces.space12 }, typeContainer: { width: "max-content", display: "flex", justifyContent: "center", alignItems: "center", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, borderRadius: e.borderRadii.xLarge, transition: "all 0.2s ease" }, type: { fontSize: e.fontSizes.subtext2 }, lineChart: { flex: 1, marginTop: e.spaces.space16 }, tick: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, color: e.colors.gray900, fontFamily: e.fontFamilies.normal } })),
                q = [l.default.theme.colors.blue300, l.default.theme.colors.yellow300, l.default.theme.colors.orange300, l.default.theme.colors.green300, l.default.theme.colors.magenta300, l.default.theme.colors.plum300, l.default.theme.colors.red300, l.default.theme.colors.purple300, l.default.theme.colors.teal300];
            const A = m().af781666,
                K = m().a1f414ee;
            function V({ articleId: e, containerStyle: t, hoveredContainerStyle: n, onClick: l, sentiment: c, showPercentages: d, size: m, style: g }) {
                const f = (0, p.Z)(),
                    b = (0, r.useHistory)(),
                    C = (0, h.v9)(y.Qb),
                    { chartData: x, typeMetadata: w } = (function ({ sentiment: e }) {
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
                    v = a.useCallback(() => {
                        const t = `https://x.com/i/news/article/${e}`;
                        u.ZP.isTwitterApp() ? (window.location.href = `https://x.com/compose/tweet?text=${t}`) : b.push({ pathname: "/compose/post", query: { text: t } }), f.scribe({ element: "share_news_article_sentiment", action: "click", data: { event_info: e } });
                    }, [f, e, b]);
                return x.length ? (d ? a.createElement(E, { articleId: e, chartData: x, containerStyle: t, hoveredStyle: n, onClick: l, question: c.question, size: m, style: g, typeMetadata: w }) : a.createElement(o.Z, { style: [G.container, g] }, a.createElement(o.Z, { style: G.headerContainer }, a.createElement(o.Z, { style: G.questionContainer }, a.createElement(o.Z, { style: G.titleContainer }, a.createElement(i.ZP, { style: G.title, weight: "bold" }, A), a.createElement(s.ZP, { onClick: v, size: "small", type: "primaryFilled" }, K)), a.createElement(i.ZP, { style: G.question }, c.question))), a.createElement(o.Z, { style: G.visibilityContainer }, a.createElement(j, { chartData: x, isBlurred: !C, question: c.question, typeMetadata: w }), !C && a.createElement(o.Z, { style: G.loggedOutContainer }, a.createElement(s.ZP, { backgroundColor: "gray50", borderColor: "transparent", link: "/login" }, "Login to view"))))) : null;
            }
            const G = l.default.create((e) => ({ container: { width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "background-color 0.2s ease", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200 }, hoveredContainer: { backgroundColor: e.colors.gray400, cursor: "pointer" }, headerContainer: { display: "flex", flexDirection: "row", width: "100%", gap: e.spaces.space16 }, questionContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, width: "100%" }, titleContainer: { display: "flex", flexDirection: "row", flex: 1, justifyContent: "space-between", alignItems: "center" }, title: {}, question: {}, visibilityContainer: { position: "relative" }, loggedOutContainer: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", backgroundColor: c.Z.hexToCss(e.colors.gray0, 0.5), display: "flex", justifyContent: "center", alignItems: "center" } }));
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
            n.d(t, { Z: () => l });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                o = n(325686),
                r = n(530732),
                i = n(992942),
                s = n(731708);
            function l({ containerStyle: e, isHoverCard: t, onClick: n, style: l, website: d }) {
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
                          ({ isHovered: e }) => a.createElement(o.Z, { style: [c.container, e ? c.hoveredContainer : void 0, l] }, a.createElement(o.Z, { style: c.headerContainer }, !!d.favicon_base64 && a.createElement(o.Z, { style: c.faviconContainer }, a.createElement(i.Z, { resizeMode: "cover", source: d.favicon_base64, style: c.favicon })), (!!d.media_name || !!d.title || !!d.url) && a.createElement(s.ZP, { numberOfLines: 1, style: c.title }, d.media_name || d.title || new URL(d.url).hostname)), (!!d.summary || !!d.snippet || !!d.description) && a.createElement(s.ZP, { numberOfLines: 3, style: c.summary }, d.summary || d.snippet || d.description)),
                      )
                    : null;
            }
            const c = n(392237).default.create((e) => ({ interactiveContainer: { width: "max-content" }, container: { padding: e.spaces.space16, backgroundColor: "transparent", transition: "background-color 0.2s ease", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, overflow: "hidden", maxWidth: 400, display: "flex", flexDirection: "column", gap: e.spaces.space8 }, hoveredContainer: { backgroundColor: e.colors.gray50, cursor: "pointer" }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, faviconContainer: { width: e.spaces.space16, height: e.spaces.space16 }, favicon: { width: "100%", height: "100%", borderRadius: 2 }, title: { fontSize: e.fontSizes.subtext1, color: e.colors.gray1000 }, summary: {} }));
        },
        525271: (e, t, n) => {
            n.d(t, { Z: () => E });
            var a = n(202784),
                o = n(325686),
                r = n(111677),
                i = n.n(r),
                s = n(837020),
                l = n(461756),
                c = n(786998),
                d = n(154003),
                m = n(950822),
                u = n(743618),
                p = n(745153),
                h = n(292627),
                y = n(224162),
                g = n(392237);
            const f = i().af8fa2ae,
                b = a.createElement(s.default, null);
            class C extends a.Component {
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
                            this.setState({ isVisible: !1 }), l.Z.reducedMotionEnabled && this.props.onDismissed();
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
                    const { additionalControl: e, align: t, buttonType: n, children: r, style: i, subtitle: s, title: d, topBarStyle: g, withBackgroundBlur: f, withTopBar: b, withTransparentMask: C } = this.props,
                        { isVisible: E } = this.state;
                    return a.createElement(y.ZP.Consumer, null, ({ direction: y }) => {
                        const v = "rtl" === y,
                            k = E ? w.visibleDrawer : ("left" === t) === v ? w.offscreenRightDrawer : w.offscreenLeftDrawer,
                            Z = E && !C ? w.maskWithBg : w.maskTransparent,
                            _ = E ? w.animateOpen : w.animateClose,
                            S = l.Z.reducedMotionEnabled ? null : _;
                        return a.createElement(h.Z.Modal, null, a.createElement(p.Z, null, a.createElement(u.Z, null, a.createElement(o.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [w.mask, Z, S, f ? w.backgroundBlur : null, "left" === t ? w.alignLeft : w.alignRight] }, (0, m.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: x, style: [w.root, f ? w.backgroundRootBlur : null, k, S, i], children: a.createElement(a.Fragment, null, b ? a.createElement(c.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(n) : null, rightControl: "left" === t ? this._renderCloseButton(n) : "right" === t ? e : null, style: g, subtitle: s, title: d }) : null, a.createElement(o.Z, { style: w.contentContainer }, r)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return a.createElement(d.ZP, { "aria-label": f, icon: b, onPress: this._handleMaskClick, type: e });
                }
            }
            C.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const x = (e) => {
                    e.stopPropagation();
                },
                w = g.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...g.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                E = C;
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                o = n(325686),
                r = n(235902),
                i = n(885015),
                s = n(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: l } = r.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return n ? a.createElement(i.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] })), a.createElement(o.Z, { style: c.gapText }, n), a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] }))) : a.createElement(o.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(807896),
                o = n(202784),
                r = n(325686),
                i = n(392237);
            class s extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...i } = this.props,
                        s = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, l.column, n && l.withGutterColumn] }));
                    return o.createElement(r.Z, (0, a.Z)({ style: [t, l.root, n && l.withGutter] }, i), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const l = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        97301: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                i = n(717683),
                s = n(347101);
            const l = (e = {}) => {
                const t = a.useContext(i.Z),
                    { direction: n } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, t && s.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15.043 3.54l1.414 1.42L9.414 12l7.043 7.04-1.414 1.42L6.586 12l8.457-8.46z" })) }, { writingDirection: n });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.News~ondemand.News~loader.ExploreNews.287d1fda.js.map
