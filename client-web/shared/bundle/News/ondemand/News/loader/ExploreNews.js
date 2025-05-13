"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.News~ondemand.News~loader.ExploreNews"],
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
                s = n(674132),
                l = n.n(s),
                c = n(400196),
                d = n(306677),
                m = n(725405),
                u = n(193285);
            const p = l().b58d2bd2,
                h = ({ onDrawerDismiss: e, paginationOptions: t, postIds: n, style: i, topBarStyle: s, withTransparentMask: l }) => {
                    const [c, d] = a.useState(0),
                        [m, h] = a.useState(() => (t ? n.slice(0, t.numResultsPerPage) : n)),
                        f = t && n.length > t.numResultsPerPage,
                        b = a.useCallback(
                            (e) => {
                                if ((d(e), t)) {
                                    const a = e * t.numResultsPerPage,
                                        o = a + t.numResultsPerPage;
                                    h(n.slice(a, o));
                                }
                            },
                            [n, t],
                        );
                    return a.createElement(
                        r.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: e, style: i, title: p, topBarStyle: s, withTransparentMask: l },
                        a.createElement(
                            o.Z,
                            { style: g.container },
                            f && a.createElement(u.Z, { currentPageIdx: c, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: b, total: n.length }),
                            m.map((e) => a.createElement(y, { key: `post_${e}`, postId: e })),
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
                const c = (t) => e.find((e) => e.url === t || e.cached_page_url === t),
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
                            f && f.favicon_base64
                                ? e.push(
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
                                  )
                                : e.push(""),
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
                r = n(392237),
                i = n(731708),
                s = n(823161),
                l = n(166852),
                c = n(125363),
                d = n(836255),
                m = n(520595),
                u = n(448301);
            const p = 100,
                h = 3;
            function y({ containerStyle: e, disableClick: t, numPosts: n, postIds: s, style: c, textStyle: d, userAvatarShape: y, userAvatarSize: b, variant: C }) {
                const [x, w] = a.useState(!1),
                    E = { filled: { commentsContainer: f.filledMetadataContainer }, outline: { commentsContainer: f.outlineMetadataContainer } }[C || "outline"],
                    k = a.useMemo(() => (0, l.Z)(s).slice(0, p), [s]);
                return n
                    ? a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(
                              o.Z,
                              { style: [f.interactiveContainer, e] },
                              a.createElement(
                                  o.Z,
                                  { style: [f.commentsContainer, E.commentsContainer, c] },
                                  k.length > 0 &&
                                      a.createElement(
                                          o.Z,
                                          { style: f.postAvatars },
                                          k.slice(0, h).map((e, t) => a.createElement(g, { key: e, postId: e, shape: y, size: b, style: [f.postAvatar, { animationDelay: 0.1 * t + "s" }, 0 !== t ? { marginStart: -1 * r.default.theme.spacesPx.space12 } : {}] })),
                                      ),
                                  a.createElement(i.ZP, { style: [f.commentsText, d] }, `${(0, u.uf)(n)} comments`),
                              ),
                          ),
                          x && a.createElement(m.a, { onDrawerDismiss: () => w(!1), paginationOptions: { numResultsPerPage: 15 }, postIds: k, style: f.drawer, topBarStyle: f.drawerTopBar, withTransparentMask: !0 }),
                      )
                    : null;
            }
            function g({ postId: e, shape: t, size: n, style: o }) {
                const r = a.useMemo(() => d.Z.createHydratorForTweet(e), [e]),
                    i = (0, c.v9)(r);
                return i && i.user.profile_image_url_https ? a.createElement(s.default, { backgroundColor: "transparent", borderColor: "transparent", borderWidth: "small", shape: t || "circle", size: n || "medium", style: o, uri: i.user.profile_image_url_https }) : null;
            }
            const f = r.default.create((e) => ({ interactiveContainer: { height: "max-content", width: "max-content" }, commentsContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, borderRadius: e.spaces.space32, paddingHorizontal: e.spaces.space8, borderStyle: "solid", borderWidth: 1, width: "max-content", height: e.spaces.space32, transition: "background-color 0.2s ease" }, outlineMetadataContainer: { backgroundColor: "transparent", borderColor: e.colors.gray100 }, filledMetadataContainer: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray100 }, postAvatars: { display: "flex", flexDirection: "row", alignItems: "center" }, postAvatar: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, drawerTopBar: { backgroundColor: e.colors.gray0 }, drawer: { backgroundColor: e.colors.gray0 }, commentsText: { fontSize: e.fontSizes.subtext3 } }));
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
            n.d(t, { Z: () => q });
            var a = n(202784),
                o = n(325686),
                r = n(731708),
                i = n(154003),
                s = n(392237),
                l = n(757483),
                c = n(125363),
                d = n(390387),
                m = n(530732),
                u = n(306677),
                p = n(725405),
                h = n(695356);
            n(136728);
            function y({ chartData: e, typeMetadata: t }) {
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
            const g = s.default.theme.spaces.space8,
                f = 15;
            function b({ articleId: e, chartData: t, containerStyle: n, hoveredStyle: i, onClick: s, question: l, size: c = "large", style: d, typeMetadata: b }) {
                const x = (0, p.Z)(),
                    { sentimentScores: w, totalNumPosts: E } = y({ chartData: t, typeMetadata: b }),
                    k = a.useCallback(() => {
                        (0, h.XB)(x, { articleId: e });
                    }, [e, x]);
                return a.createElement(m.Z, { onClick: s, style: [C.outerContainer, d], withoutInteractiveStyles: !0 }, ({ isHovered: e }) =>
                    a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(u.D, { id: "news_article_sentiment", onFullyVisible: k, position: "top", testID: "news_article_sentiment" }),
                        a.createElement(
                            o.Z,
                            { style: [C.container, e && s ? C.hoveredContainer : void 0, n, e && s && i] },
                            a.createElement(o.Z, { style: C.headerContainer }, a.createElement(r.ZP, { style: C.question }, l), a.createElement(r.ZP, { style: C.totalPosts, weight: "normal" }, `${E} posts`)),
                            a.createElement(
                                o.Z,
                                { style: C.barContainer },
                                a.createElement(o.Z, { style: C.baseBar }),
                                a.createElement(
                                    o.Z,
                                    { style: C.scoreBarsContainer },
                                    w.map((e, t) => {
                                        const n = t === w.length - 1;
                                        return a.createElement(o.Z, { key: `sentiment-bar-score-${e.type}`, style: [C.scoreBar, { flex: n ? 1 : void 0, width: n ? void 0 : `${e.value}%`, borderTopEndRadius: n ? g : 0, borderBottomEndRadius: n ? g : 0 }] }, a.createElement(o.Z, { style: [C.scoreBarBackground, { backgroundColor: e.color }] }), e.value > f && a.createElement(r.ZP, { numberOfLines: 1, style: C.scoreBarText }, `${e.value}%`));
                                    }),
                                ),
                            ),
                            a.createElement(
                                o.Z,
                                { style: C.legendContainer },
                                w.map((e) => a.createElement(o.Z, { style: C.legendItem }, a.createElement(r.ZP, { style: C.legendItemType }, e.type), a.createElement(o.Z, { style: [C.legendItemColor, { backgroundColor: e.color }] }))),
                            ),
                        ),
                    ),
                );
            }
            const C = s.default.create((e) => ({ outerContainer: { flex: 1 }, container: { width: "100%", display: "flex", flexDirection: "column", gap: e.spaces.space12, padding: e.spaces.space12, backgroundColor: "transparent", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, transition: "background-color 0.2s ease" }, hoveredContainer: { backgroundColor: e.colors.gray50 }, headerContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4 }, question: {}, totalPosts: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2 }, barContainer: { width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }, baseBar: { backgroundColor: e.colors.gray100, width: e.spaces.space2, height: 45 }, scoreBarsContainer: { display: "flex", flex: 1, flexDirection: "row", alignItems: "center" }, scoreBar: { height: 35, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }, scoreBarBackground: { position: "absolute", top: 0, start: 0, end: 0, bottom: 0, animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { width: "0%" }, "100%": { width: "100%" } }], animationFillMode: "both" }, scoreBarText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, animationDuration: "0.2s", animationDelay: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, legendContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space16 }, legendItem: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, legendItemType: { fontSize: e.fontSizes.subtext1, color: e.colors.gray1000 }, legendItemColor: { width: e.spaces.space12, height: e.spaces.space12, borderRadius: e.borderRadii.small } }));
            var x = n(807896),
                w = n(18205),
                E = n(632908),
                k = n(755484),
                v = n(725556),
                Z = n(103131),
                S = n(735081),
                _ = n(663004),
                D = n(815045),
                I = n(194504),
                P = n(187669),
                M = n(949626);
            function z(e, t) {
                const { timeZone: n } = window.Intl.DateTimeFormat().resolvedOptions();
                return new Intl.DateTimeFormat("en-US", { month: t && t.month ? "short" : void 0, day: t && t.day ? "numeric" : void 0, hour: t && t.hour ? "numeric" : void 0, minute: t && t.minute ? "numeric" : void 0, year: t && t.year ? "numeric" : void 0, timeZoneName: t && t.timeZoneName ? "short" : void 0, timeZone: t && t.timeZoneName ? n : void 0 }).format(e);
            }
            function T({ active: e, label: t, payload: n }) {
                if ((a.useEffect(() => {}, []), e && n && n.length)) {
                    const e = [];
                    n.forEach((t) => {
                        const n = t.dataKey.split("-")[0];
                        e.push({ label: t.payload[`${n}-label`], percentage: Number(t.payload[`${n}-value`]), color: t.payload[`${n}-color`], postId: t.payload[`${n}-post`], numPosts: Number(t.payload[`${n}-num-posts`]) });
                    });
                    const t = n[0].payload.timestamp,
                        i = z(new Date(t), { year: !0, month: !0, day: !0, hour: !0, minute: !0 }),
                        s = e.sort((e, t) => t.percentage - e.percentage);
                    return a.createElement(
                        o.Z,
                        { style: $.tooltip },
                        a.createElement(r.ZP, { style: $.tooltipDate }, i),
                        a.createElement(
                            o.Z,
                            { style: $.percentages },
                            s.map((e) => {
                                const t = `${e.percentage}%`;
                                return a.createElement(o.Z, { key: e.label, style: $.tooltipType }, a.createElement(o.Z, { style: { ...$.tooltipTypeColor, backgroundColor: e.color } }), a.createElement(r.ZP, { style: $.tooltipTypeLabel, weight: "bold" }, e.label), a.createElement(o.Z, null), a.createElement(r.ZP, { style: $.tooltipValue }, t), a.createElement(r.ZP, { style: $.tooltipDate }, `(${e.numPosts} post${e.numPosts > 1 ? "s" : ""})`));
                            }),
                        ),
                    );
                }
                return null;
            }
            const $ = s.default.create((e) => ({ tooltip: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, percentages: { display: " flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8 }, tooltipType: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, tooltipTypeColor: { width: e.spaces.space8, height: e.spaces.space8, borderRadius: e.spaces.space8 }, tooltipTypeLabel: { fontSize: "inherit", lineHeight: "inherit" }, tooltipValue: { fontSize: "inherit", lineHeight: "inherit" }, tooltipDate: { color: e.colors.gray700, fontSize: "inherit", lineHeight: "inherit" } }));
            function B({ color: e, cx: t, cy: n }) {
                const r = 16;
                return a.createElement("g", null, a.createElement("foreignObject", { height: r, width: r, x: t - 8, y: n - 8 }, a.createElement(o.Z, { style: [R.dotContainer, { width: r, height: r }] }, a.createElement(o.Z, { style: [R.dot, { backgroundColor: e, width: 8, height: 8 }] }), a.createElement(o.Z, { style: R.pulseContainer }, a.createElement(o.Z, { style: [R.pulse, { backgroundColor: l.Z.hexToCss(e, 0.5) }] })))));
            }
            const R = s.default.create((e) => ({ dotContainer: { position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }, dot: { borderRadius: e.borderRadii.infinite }, pulseContainer: { position: "absolute", top: 0, start: 0, end: 0, bottom: 0, borderRadius: e.borderRadii.infinite, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }, pulse: { borderRadius: e.borderRadii.infinite, animationDuration: "1s", animationTimingFunction: "linear", animationIterationCount: "infinite", animationFillMode: "forwards", animationDelay: "0s", width: "100%", height: "100%", animationKeyframes: [{ "0%": { transform: "scale(0)", opacity: 1 } }, { "95%": { transform: "scale(1)", opacity: 1 } }, { "100%": { transform: "scale(1)", opacity: 0 } }] } })),
                N = "news-sentiment-recharts";
            function F({ chartData: e, isBlurred: t, question: n, typeMetadata: i }) {
                const c = (0, p.Z)(),
                    { sentimentScores: d } = y({ chartData: e, typeMetadata: i }),
                    [u, h] = a.useState({}),
                    g = `line-chart-${Object.keys(u).join("-")}`,
                    f = t ? 100 : 200;
                (0, P.q)(() => {
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
                const b = a.useCallback(
                        (e) => {
                            const t = { ...u };
                            u[e] ? delete t[e] : (t[e] = !0), c.scribe({ element: "news_sentiment_line_chart_type", action: "click", data: { event_info: JSON.stringify({ question: n, type: e }) } }), h(t);
                        },
                        [u, c, n],
                    ),
                    C = a.useCallback((e) => z(new Date(e), { month: !0, day: !0, hour: !0 }), []),
                    $ = Object.keys(u);
                return a.createElement(
                    o.Z,
                    { style: [L.container, t ? L.blur : void 0] },
                    a.createElement(
                        I.Z,
                        { buttonsContainerStyle: L.typesContent, style: L.types },
                        Object.keys(i).map((e) => {
                            const t = i[e];
                            return a.createElement(m.Z, { key: `${e}-toggle`, onClick: () => b(e), withoutInteractiveStyles: !0 }, ({ isHovered: n }) => a.createElement(o.Z, { style: [L.typeContainer, { backgroundColor: l.Z.hexToCss(t.color, 0.5), color: t.color }, n ? { backgroundColor: l.Z.hexToCss(t.color, 0.3) } : void 0, $.length > 0 && !$.includes(e) ? { opacity: 0.5 } : void 0] }, a.createElement(r.ZP, { style: L.type }, t.label)));
                        }),
                    ),
                    a.createElement(
                        o.Z,
                        { style: L.lineChart },
                        a.createElement(
                            M.Z,
                            { className: N },
                            a.createElement(
                                w.h,
                                { height: f },
                                a.createElement(
                                    E.w,
                                    { data: e, height: f, key: g },
                                    a.createElement(k.q, { fillOpacity: 0.6, horizontal: !0, stroke: s.default.theme.colors.hoverBlack, strokeDasharray: "1 0", vertical: !1 }),
                                    a.createElement(v.K, { axisLine: !1, dataKey: "timestamp", domain: ["dataMin", "dataMax"], tick: L.tick, tickFormatter: C, tickLine: !1, type: "number" }),
                                    a.createElement(Z.B, { axisLine: !1, domain: [0, 100], orientation: "right", tick: L.tick, tickFormatter: (e) => `${e}%`, tickLine: !1 }),
                                    a.createElement(S.u, { content: a.createElement(T, null), cursor: { stroke: s.default.theme.colors.gray200, strokeDasharray: "1 0" }, isAnimationActive: !1 }),
                                    Object.keys(i).map((e) => (u[e] || 0 === $.length ? a.createElement(_.x, { activeDot: !0, connectNulls: !0, dataKey: `${i[e].idx}-value`, dot: !1, key: `line-chart-${e}`, stroke: i[e].color, strokeWidth: 2.5, type: "monotone" }) : null)),
                                    d.map((e) => (u[e.type] || 0 === $.length ? a.createElement(D.q, { alwaysShow: !0, isFront: !0, key: `sentiment-score-${e.type}`, shape: (t) => a.createElement(B, (0, x.Z)({}, t, { color: e.color })), x: e.timestamp, y: e.value }) : null)),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const L = s.default.create((e) => ({ container: { width: "100%" }, blur: { filter: "blur(5px)" }, types: { width: "100%" }, typesContent: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, marginVertical: e.spaces.space12 }, typeContainer: { width: "max-content", display: "flex", justifyContent: "center", alignItems: "center", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, borderRadius: e.borderRadii.xLarge, transition: "all 0.2s ease" }, type: { fontSize: e.fontSizes.subtext2 }, lineChart: { flex: 1, marginTop: e.spaces.space16 }, tick: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, color: e.colors.gray900, fontFamily: e.fontFamilies.normal } })),
                H = [s.default.theme.colors.blue300, s.default.theme.colors.yellow300, s.default.theme.colors.orange300, s.default.theme.colors.green300, s.default.theme.colors.magenta300, s.default.theme.colors.plum300, s.default.theme.colors.red300, s.default.theme.colors.purple300, s.default.theme.colors.teal300];
            const O = "What do people think?";
            function q({ articleId: e, containerStyle: t, hoveredContainerStyle: n, onClick: s, sentiment: l, showPercentages: m, size: u, style: p }) {
                const h = (0, c.v9)(d.Qb),
                    { chartData: y, typeMetadata: g } = (function ({ sentiment: e }) {
                        return a.useMemo(() => {
                            const t = {},
                                n = {};
                            return (
                                e.sentiment_types.forEach((t, a) => {
                                    n[t] = { idx: a, label: t, color: H[a % e.sentiment_types.length] };
                                }),
                                [...(e.sentiment_scores ?? [])].forEach((e) => {
                                    const a = Number(e.timestamp),
                                        o = a.toString();
                                    t[o] || (t[o] = { timestamp: a }), (t[o][`${n[e.sentiment_type].idx}-post`] = e.post_id || ""), (t[o][`${n[e.sentiment_type].idx}-num-posts`] = e.num_posts || ""), (t[o][`${n[e.sentiment_type].idx}-value`] = Number(e.sentiment_value)), (t[o][`${n[e.sentiment_type].idx}-label`] = e.sentiment_type), (t[o][`${n[e.sentiment_type].idx}-color`] = n[e.sentiment_type].color);
                                }),
                                { chartData: Object.values(t).sort((e, t) => e.timestamp - t.timestamp), typeMetadata: n }
                            );
                        }, [e]);
                    })({ sentiment: l });
                return y.length ? (m ? a.createElement(b, { articleId: e, chartData: y, containerStyle: t, hoveredStyle: n, onClick: s, question: l.question, size: u, style: p, typeMetadata: g }) : a.createElement(o.Z, { style: [W.container, p] }, a.createElement(o.Z, { style: W.headerContainer }, a.createElement(o.Z, { style: W.questionContainer }, a.createElement(r.ZP, { style: W.title, weight: "bold" }, O), a.createElement(r.ZP, { style: W.question }, l.question))), a.createElement(o.Z, { style: W.visibilityContainer }, a.createElement(F, { chartData: y, isBlurred: !h, question: l.question, typeMetadata: g }), !h && a.createElement(o.Z, { style: W.loggedOutContainer }, a.createElement(i.ZP, { backgroundColor: "gray50", borderColor: "transparent", link: "/login" }, "Login to view"))))) : null;
            }
            const W = s.default.create((e) => ({ container: { width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "background-color 0.2s ease", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200 }, hoveredContainer: { backgroundColor: e.colors.gray400, cursor: "pointer" }, headerContainer: { display: "flex", flexDirection: "row", width: "100%", gap: e.spaces.space16 }, questionContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, width: "100%" }, title: {}, question: {}, visibilityContainer: { position: "relative" }, loggedOutContainer: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", backgroundColor: l.Z.hexToCss(e.colors.gray0, 0.5), display: "flex", justifyContent: "center", alignItems: "center" } }));
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
                r = n(674132),
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
                        const k = "rtl" === y,
                            v = E ? w.visibleDrawer : ("left" === t) === k ? w.offscreenRightDrawer : w.offscreenLeftDrawer,
                            Z = E && !C ? w.maskWithBg : w.maskTransparent,
                            S = E ? w.animateOpen : w.animateClose,
                            _ = l.Z.reducedMotionEnabled ? null : S;
                        return a.createElement(h.Z.Modal, null, a.createElement(p.Z, null, a.createElement(u.Z, null, a.createElement(o.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [w.mask, Z, _, f ? w.backgroundBlur : null, "left" === t ? w.alignLeft : w.alignRight] }, (0, m.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: x, style: [w.root, f ? w.backgroundRootBlur : null, v, _, i], children: a.createElement(a.Fragment, null, b ? a.createElement(c.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(n) : null, rightControl: "left" === t ? this._renderCloseButton(n) : "right" === t ? e : null, style: g, subtitle: s, title: d }) : null, a.createElement(o.Z, { style: w.contentContainer }, r)) })))));
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.News~ondemand.News~loader.ExploreNews.e80ecbea.js.map
