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
                    f = a.useMemo(() => {
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
                        f.map((e) => a.createElement(r.ZP, { borderColor: "transparent", color: e.isSelected ? "text" : "gray700", key: `page_${e.text}`, onClick: () => n(e.idx), size: "small", style: m.button }, e.text)),
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
                        g = t && n.length > t.numResultsPerPage,
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
                            { style: f.container },
                            g && a.createElement(u.Z, { currentPageIdx: c, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: b, total: n.length }),
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
                    return a.createElement(o.Z, { key: `post_${e}`, style: f.post }, a.createElement(c.ZP, { displayPromotedContent: !0, tweetId: e, withActions: !0 }), a.createElement(d.D, { id: `post_${e}`, onFullyVisible: r, position: "bottom", testID: `post_${e}` }));
                },
                f = i.default.create((e) => ({ container: { width: "100%", maxWidth: 500, marginBottom: e.spaces.space12 }, post: { borderBottomWidth: 1, borderBottomColor: e.colors.borderColor }, mediaContent: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large, overflow: "hidden" } }));
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
                c(e)({ element: "news-article-card-impression", action: "view", data: { impression_id: t.articleId } });
            }
            function r(e, t) {
                c(e)({ element: "news-page-session-duration", action: "focus", data: { duration_ms: t.durationMs, url: t.url, event_info: t.sessionId } });
            }
            function i(e, t) {
                c(e)({ element: "news-open-website-source", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function s(e, t) {
                c(e)({ element: "news-open-post-source", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function l(e, t) {
                c(e)({ element: "news-article-section-impression", action: "view", data: { impression_id: t.articleId, event_info: JSON.stringify({ sectionIdx: t.sectionIdx, totalNumSections: t.totalNumSections }) } });
            }
            n.d(t, { E7: () => r, Ib: () => a, U8: () => s, _$: () => o, sq: () => i, xi: () => l });
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
                                f = y + p[0].length;
                            y > n && e.push(t.slice(n, y));
                            const g = c(a);
                            g && g.favicon_base64
                                ? e.push(
                                      o.createElement(
                                          i.Z,
                                          { renderContent: () => d(g) },
                                          o.createElement(
                                              s.Z,
                                              {
                                                  onClick: () => {
                                                      m(g.url);
                                                  },
                                                  withoutInteractiveStyles: !0,
                                              },
                                              ({ isHovered: e }) => o.createElement(r.Z, { style: [h.domainContainer, e ? h.hoveredDomainContainer : void 0] }, o.createElement(l.ZP, { style: h.domain }, g.media_name || u(g.url))),
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
                const [x, v] = a.useState(!1),
                    w = { filled: { commentsContainer: g.filledMetadataContainer }, outline: { commentsContainer: g.outlineMetadataContainer } }[C || "outline"],
                    k = a.useMemo(() => (0, l.Z)(s).slice(0, p), [s]);
                return n
                    ? a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(
                              o.Z,
                              { style: [g.interactiveContainer, e] },
                              a.createElement(
                                  o.Z,
                                  { style: [g.commentsContainer, w.commentsContainer, c] },
                                  k.length > 0 &&
                                      a.createElement(
                                          o.Z,
                                          { style: g.postAvatars },
                                          k.slice(0, h).map((e, t) => a.createElement(f, { key: e, postId: e, shape: y, size: b, style: [g.postAvatar, { animationDelay: 0.1 * t + "s" }, 0 !== t ? { marginStart: -1 * r.default.theme.spacesPx.space12 } : {}] })),
                                      ),
                                  a.createElement(i.ZP, { style: [g.commentsText, d] }, `${(0, u.uf)(n)} comments`),
                              ),
                          ),
                          x && a.createElement(m.a, { onDrawerDismiss: () => v(!1), paginationOptions: { numResultsPerPage: 15 }, postIds: k, style: g.drawer, topBarStyle: g.drawerTopBar, withTransparentMask: !0 }),
                      )
                    : null;
            }
            function f({ postId: e, shape: t, size: n, style: o }) {
                const r = a.useMemo(() => d.Z.createHydratorForTweet(e), [e]),
                    i = (0, c.v9)(r);
                return i && i.user.profile_image_url_https ? a.createElement(s.default, { backgroundColor: "transparent", borderColor: "transparent", borderWidth: "small", shape: t || "circle", size: n || "medium", style: o, uri: i.user.profile_image_url_https }) : null;
            }
            const g = r.default.create((e) => ({ interactiveContainer: { height: "max-content", width: "max-content" }, commentsContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, borderRadius: e.spaces.space32, paddingHorizontal: e.spaces.space8, borderStyle: "solid", borderWidth: 1, width: "max-content", height: e.spaces.space32, transition: "background-color 0.2s ease" }, outlineMetadataContainer: { backgroundColor: "transparent", borderColor: e.colors.gray100 }, filledMetadataContainer: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray100 }, postAvatars: { display: "flex", flexDirection: "row", alignItems: "center" }, postAvatar: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, drawerTopBar: { backgroundColor: e.colors.gray0 }, drawer: { backgroundColor: e.colors.gray0 }, commentsText: { fontSize: e.fontSizes.subtext3 } }));
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
                return a.createElement(o.Z, { style: [m.container, t] }, e ? a.createElement(c.Z, null) : a.createElement(s.default, { style: m.icon }), a.createElement(r.ZP, { style: [m.date, n] }, `Last updated ${(0, l.pi)(new Date(Number(i)), !0)}`));
            }
            const m = i.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, color: e.colors.gray700 }, date: { color: "inherit", fontSize: e.fontSizes.subtext2 }, icon: { color: "inherit", width: e.spaces.space12, height: e.spaces.space12 } }));
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
        931173: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(202784),
                o = n(325686),
                r = n(530732),
                i = n(823161),
                s = n(366635),
                l = n(966886),
                c = n(392237),
                d = n(650028),
                m = n(451051),
                u = n(103737),
                p = n(125363),
                h = n(836255);
            function y({ containerStyle: e, isPreview: t = !1, numberOfLines: n, onClick: y, postId: g, style: b, tweetTextStyle: C }) {
                const x = a.useMemo(() => h.Z.createHydratorForTweet(g), [g]),
                    v = (0, p.v9)(x);
                if (!v) return null;
                const { created_at: w, text: k, user: E } = v;
                return a.createElement(
                    r.Z,
                    {
                        onClick: () => {
                            y && y(), window.open(`https://x.com${v.permalink}`, "_blank");
                        },
                        style: [f.interactiveContainer, e],
                        withoutInteractiveStyles: !0,
                    },
                    ({ isHovered: e }) =>
                        a.createElement(
                            o.Z,
                            { style: [f.container, e ? f.hoveredContainer : void 0, b] },
                            a.createElement(o.Z, { style: f.headerContainer }, a.createElement(o.Z, { style: f.nameContainer }, a.createElement(i.default, { "aria-label": E.name, borderColor: "gray700", borderWidth: "small", screenName: E.screen_name, size: t ? "medium" : "large", uri: E.profile_image_url_https, withHoverCard: !0, withLink: !0 }), a.createElement(s.Z, { affiliateBadgeInfo: E.highlightedLabel, isBlueVerified: E.is_blue_verified, isVerified: E.verified, name: E.name, nameSize: t ? "subtext2" : "subtext1", screenName: E.screen_name, screenNameSize: t ? "subtext3" : "subtext2", screenNameStyle: f.screenName, screenNameSuffixContainerStyle: { marginStart: 0 }, style: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, verifiedType: E.verified_type, withHoverCard: !0, withLink: !0, withStackedLayout: !0 })), a.createElement(l.Z, { humanReadable: !1, style: [f.timestamp, { fontSize: t ? c.default.theme.fontSizes.subtext3 : c.default.theme.fontSizes.subtext2, lineHeight: t ? c.default.theme.fontSizes.subtext3 : c.default.theme.fontSizes.subtext2 }], timestamp: w })),
                            v.in_reply_to_screen_name && a.createElement(d.ZP, { displayTextRange: v.display_text_range, inReplyToName: v.in_reply_to_name, inReplyToScreenName: v.in_reply_to_screen_name, inReplyToUserIdStr: v.in_reply_to_user_id_str, linkType: d.ZP.ReplyContextLinkTypes.none, size: t ? "subtext2" : "subtext1", tweetPermalink: v.permalink }),
                            a.createElement(m.Z, { displayTextRange: v.display_text_range, entities: v.entities, isCondensed: t, numberOfLines: n, style: [f.tweetText, C], text: k }),
                            (!t || !k) &&
                                (v.extended_entities?.media ?? []).map((e) => {
                                    const n = { ...e, ext_alt_text: void 0 };
                                    return a.createElement(u.Z, { displayMediaTags: !1, hasSensitiveMedia: v.possibly_sensitive, isCondensed: t, key: `media_${v.id_str}_${e.id_str}`, mediaContentStyles: f.media, mediaDetails: [n], mediaVisibilityResults: v.mediaVisibilityResults, preventPlayback: !0, shouldShowAltLabelAlways: !1, showAltTranslation: !1, showBorder: !1, singleImageMaxAspectRatio: 2, singleImageMinAspectRatio: 2, tweetId: v.id_str, videoAspectRatio: 2, videoOptions: { displayOptions: { badgeConfiguration: { hideDataSize: !0, hideViewCount: !0, hideDuration: !0 } }, hidePreviewPlayButton: !0 }, withCenterCrop: !0, withMediaTagsIcon: !t });
                                }),
                        ),
                );
            }
            const f = c.default.create((e) => ({ interactiveContainer: { height: "100%", flex: 1 }, container: { borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, borderRadius: e.borderRadii.medium, backgroundColor: "transparent", padding: e.spaces.space12, textOverflow: "ellipsis", cursor: "pointer", transition: "background-color 0.2s ease", display: "flex", flexDirection: "column", gap: e.spaces.space8, height: "100%", flex: 1 }, hoveredContainer: { backgroundColor: e.colors.gray50 }, headerContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space8, textOverflow: "ellipsis", overflow: "hidden" }, nameContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, textOverflow: "ellipsis" }, screenName: { color: e.colors.gray700 }, timestamp: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, textOverflow: "ellipsis", position: "relative", top: 3 }, tweetText: { fontSize: e.fontSizes.subtext2 }, media: {} }));
        },
        2025: (e, t, n) => {
            n.d(t, { Z: () => A });
            n(136728);
            var a = n(202784),
                o = n(325686),
                r = n(392237),
                i = n(530732),
                s = n(731708),
                l = n(154003),
                c = n(757483),
                d = n(125363),
                m = n(390387),
                u = n(246728),
                p = n(807896),
                h = n(18205),
                y = n(632908),
                f = n(755484),
                g = n(725556),
                b = n(103131),
                C = n(735081),
                x = n(663004),
                v = n(815045),
                w = n(194504),
                k = n(187669),
                E = n(949626);
            function S(e, t) {
                const { timeZone: n } = window.Intl.DateTimeFormat().resolvedOptions();
                return new Intl.DateTimeFormat("en-US", { month: t && t.month ? "short" : void 0, day: t && t.day ? "numeric" : void 0, hour: t && t.hour ? "numeric" : void 0, minute: t && t.minute ? "numeric" : void 0, year: t && t.year ? "numeric" : void 0, timeZoneName: t && t.timeZoneName ? "short" : void 0, timeZone: t && t.timeZoneName ? n : void 0 }).format(e);
            }
            function Z({ active: e, label: t, payload: n }) {
                if ((a.useEffect(() => {}, []), e && n && n.length)) {
                    const e = [];
                    n.forEach((t) => {
                        const n = t.dataKey.split("-")[0];
                        e.push({ label: t.payload[`${n}-label`], percentage: Number(t.payload[`${n}-value`]), color: t.payload[`${n}-color`], postId: t.payload[`${n}-post`], numPosts: Number(t.payload[`${n}-num-posts`]) });
                    });
                    const t = n[0].payload.timestamp,
                        r = S(new Date(t), { year: !0, month: !0, day: !0, hour: !0, minute: !0 }),
                        i = e.sort((e, t) => t.percentage - e.percentage);
                    return a.createElement(
                        o.Z,
                        { style: _.tooltip },
                        a.createElement(s.ZP, { style: _.tooltipDate }, r),
                        a.createElement(
                            o.Z,
                            { style: _.percentages },
                            i.map((e) => {
                                const t = `${e.percentage}%`;
                                return a.createElement(o.Z, { key: e.label, style: _.tooltipType }, a.createElement(o.Z, { style: { ..._.tooltipTypeColor, backgroundColor: e.color } }), a.createElement(s.ZP, { style: _.tooltipTypeLabel, weight: "bold" }, e.label), a.createElement(o.Z, null), a.createElement(s.ZP, { style: _.tooltipValue }, t), a.createElement(s.ZP, { style: _.tooltipDate }, `(${e.numPosts} post${e.numPosts > 1 ? "s" : ""})`));
                            }),
                        ),
                    );
                }
                return null;
            }
            const _ = r.default.create((e) => ({ tooltip: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, percentages: { display: " flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8 }, tooltipType: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, tooltipTypeColor: { width: e.spaces.space8, height: e.spaces.space8, borderRadius: e.spaces.space8 }, tooltipTypeLabel: { fontSize: "inherit", lineHeight: "inherit" }, tooltipValue: { fontSize: "inherit", lineHeight: "inherit" }, tooltipDate: { color: e.colors.gray700, fontSize: "inherit", lineHeight: "inherit" } }));
            var P = n(818199),
                D = n(823161),
                I = n(725405),
                z = n(836255),
                T = n(695356),
                M = n(931173);
            function $({ cx: e, cy: t, postId: n }) {
                const o = (0, I.Z)(),
                    r = a.useMemo(() => z.Z.createHydratorForTweet(n), [n]),
                    s = (0, d.v9)(r);
                if (!s) return null;
                const { user: l } = s,
                    c = () => {
                        (0, T.U8)(o, { postId: n });
                    };
                return a.createElement(
                    "g",
                    null,
                    a.createElement(
                        "foreignObject",
                        { height: 40, width: 40, x: e - 20, y: t - 20 },
                        a.createElement(
                            P.Z,
                            { renderContent: () => a.createElement(M.Z, { containerStyle: R.referencePostContainer, isPreview: !0, numberOfLines: 3, onClick: c, postId: n }), wrapperStyle: R.referenceHoverWrapper },
                            a.createElement(
                                i.Z,
                                {
                                    onClick: () => {
                                        c(), window.open(`https://x.com${s.permalink}`, "_blank");
                                    },
                                    style: R.referenceDotPost,
                                    withoutInteractiveStyles: !0,
                                },
                                ({ isHovered: e }) => a.createElement(D.default, { screenName: l?.screen_name, shape: "circle", size: "small", style: [R.userAvatar, e ? R.hoveredUserAvatar : void 0], uri: l?.profile_image_url_https, withLink: !1 }),
                            ),
                        ),
                    ),
                );
            }
            const R = r.default.create((e) => ({ referenceHoverWrapper: { width: "100%", height: "100%" }, referencePostContainer: { width: 300 }, referenceDotPost: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }, userAvatar: { transition: "all 0.2s ease", transform: "scale(1)", animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0, transform: "scale(0.8)" }, "60%": { opacity: 1, transform: "scale(1.2)" }, "100%": { opacity: 1, transform: "scale(1)" } }], animationTimingFunction: "ease-out" }, hoveredUserAvatar: { cursor: "pointer", transform: "scale(1.2)" } })),
                N = "news-sentiment-recharts";
            function L({ chartData: e, isBlurred: t, typeMetadata: n }) {
                const [l, d] = a.useState({}),
                    m = `line-chart-${Object.keys(l).join("-")}`,
                    u = t ? 100 : 200;
                (0, k.q)(() => {
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
                const _ = a.useCallback(
                        (e) => {
                            const t = { ...l };
                            l[e] ? delete t[e] : (t[e] = !0), d(t);
                        },
                        [l],
                    ),
                    P = a.useCallback((e) => S(new Date(e), { month: !0, day: !0, hour: !0 }), []),
                    D = Object.keys(l),
                    I = a.useMemo(() => {
                        if (!e.length) return [];
                        const t = [];
                        for (const a of e) {
                            const e = Object.keys(a);
                            for (const o of e)
                                if (o.endsWith("-post")) {
                                    const e = Number(o.split("-post")[0]),
                                        r = Object.values(n).find((t) => t.idx === e)?.label || "",
                                        i = a[o].toString();
                                    (D.length && !l[r]) || !i || t.push({ timestamp: a.timestamp, value: Number(a[`${e}-value`]), type: r || "", postId: i });
                                }
                        }
                        return t;
                    }, [e, n, D, l]);
                return a.createElement(
                    o.Z,
                    { style: [B.container, t ? B.blur : void 0] },
                    a.createElement(
                        w.Z,
                        { buttonsContainerStyle: B.typesContent, style: B.types },
                        Object.keys(n).map((e) => {
                            const t = n[e];
                            return a.createElement(i.Z, { key: `${e}-toggle`, onClick: () => _(e), withoutInteractiveStyles: !0 }, ({ isHovered: n }) => a.createElement(o.Z, { style: [B.typeContainer, { backgroundColor: c.Z.hexToCss(t.color, 0.5), color: t.color }, n ? { backgroundColor: c.Z.hexToCss(t.color, 0.3) } : void 0, D.length > 0 && !D.includes(e) ? { opacity: 0.5 } : void 0] }, a.createElement(s.ZP, { style: B.type }, t.label)));
                        }),
                    ),
                    a.createElement(
                        o.Z,
                        { style: B.lineChart },
                        a.createElement(
                            E.Z,
                            { className: N },
                            a.createElement(
                                h.h,
                                { height: u },
                                a.createElement(
                                    y.w,
                                    { data: e, height: u, key: m },
                                    a.createElement(f.q, { fillOpacity: 0.6, horizontal: !0, stroke: r.default.theme.colors.hoverBlack, strokeDasharray: "1 0", vertical: !1 }),
                                    a.createElement(g.K, { axisLine: !1, dataKey: "timestamp", domain: ["dataMin", "dataMax"], tick: B.tick, tickFormatter: P, tickLine: !1, type: "number" }),
                                    a.createElement(b.B, { axisLine: !1, domain: [0, 100], orientation: "right", tick: B.tick, tickFormatter: (e) => `${e}%`, tickLine: !1 }),
                                    a.createElement(C.u, { content: a.createElement(Z, null), cursor: { stroke: r.default.theme.colors.gray200, strokeDasharray: "1 0" }, isAnimationActive: !1 }),
                                    Object.keys(n).map((e) => (l[e] || 0 === D.length ? a.createElement(x.x, { activeDot: !0, connectNulls: !0, dataKey: `${n[e].idx}-value`, dot: !1, isAnimationActive: !1, key: `line-chart-${e}`, stroke: n[e].color, strokeWidth: 2, type: "monotone" }) : null)),
                                    I.map((e) => a.createElement(v.q, { alwaysShow: !0, isFront: !0, key: `reference-post-${e.postId}`, shape: (t) => a.createElement($, (0, p.Z)({}, t, { postId: e.postId })), x: e.timestamp, y: e.value })),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const B = r.default.create((e) => ({ container: { width: "100%" }, blur: { filter: "blur(5px)" }, types: { width: "100%" }, typesContent: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, marginVertical: e.spaces.space12 }, typeContainer: { width: "max-content", display: "flex", justifyContent: "center", alignItems: "center", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, borderRadius: e.borderRadii.xLarge, transition: "all 0.2s ease" }, type: { fontSize: e.fontSizes.subtext2 }, lineChart: { flex: 1, marginTop: e.spaces.space16 }, tick: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, color: e.colors.gray900, fontFamily: e.fontFamilies.normal } })),
                O = [r.default.theme.colors.blue300, r.default.theme.colors.yellow300, r.default.theme.colors.orange300, r.default.theme.colors.green300, r.default.theme.colors.magenta300, r.default.theme.colors.plum300, r.default.theme.colors.red300, r.default.theme.colors.purple300, r.default.theme.colors.teal300];
            const H = "What do people think?";
            function A({ containerStyle: e, hoveredContainerStyle: t, onClick: n, percentageScoreContainerStyle: c, percentageScoreStyle: p, questionStyle: h, sentiment: y, showPercentages: f, style: g, typeStyle: b }) {
                const C = (0, d.v9)(m.Qb),
                    { chartData: x, typeMetadata: v } = (function ({ sentiment: e }) {
                        return a.useMemo(() => {
                            const t = {},
                                n = {};
                            return (
                                e.sentiment_types.forEach((t, a) => {
                                    n[t] = { idx: a, label: t, color: O[a % e.sentiment_types.length] };
                                }),
                                [...(e.sentiment_scores ?? [])].forEach((e) => {
                                    const a = Number(e.timestamp),
                                        o = a.toString();
                                    t[o] || (t[o] = { timestamp: a }), (t[o][`${n[e.sentiment_type].idx}-post`] = e.post_id || ""), (t[o][`${n[e.sentiment_type].idx}-num-posts`] = e.num_posts || ""), (t[o][`${n[e.sentiment_type].idx}-value`] = Number(e.sentiment_value)), (t[o][`${n[e.sentiment_type].idx}-label`] = e.sentiment_type), (t[o][`${n[e.sentiment_type].idx}-color`] = n[e.sentiment_type].color);
                                }),
                                { chartData: Object.values(t).sort((e, t) => e.timestamp - t.timestamp), typeMetadata: n }
                            );
                        }, [e]);
                    })({ sentiment: y }),
                    { isCompactLayout: w } = (0, u.Z)(),
                    k = a.useMemo(() => {
                        if (!x.length) return [];
                        const e = x[x.length - 1],
                            t = [];
                        return (
                            Object.keys(v).forEach((n) => {
                                const a = `${v[n].idx}-value`,
                                    o = `${v[n].idx}-num-posts`;
                                void 0 !== e[a] && t.push({ type: n, value: Number(e[a]), color: v[n].color, numPosts: Number(e[o]) });
                            }),
                            t
                        );
                    }, [x, v]);
                if (!x.length) return null;
                if (f && k.length > 0) {
                    const l = 3,
                        d = {},
                        m = [...k].sort((e, t) => t.value - e.value),
                        u = [r.default.theme.colors.blue700, r.default.theme.colors.blue500, r.default.theme.colors.blue300];
                    m.forEach((e, t) => {
                        d[e.value] = u[t];
                    });
                    const f = k.slice(0, l),
                        C = f.reduce((e, t) => e + t.numPosts, 0);
                    return a.createElement(i.Z, { interactive: !!n, onClick: n, style: [F.interactivePercentageContainer, w ? F.compactInteractivePercentageContainer : void 0, e], withoutInteractiveStyles: !0 }, ({ isHovered: e }) =>
                        a.createElement(
                            o.Z,
                            { style: [F.percentagesContainer, w ? F.compactPercentagesContainer : void 0, e && n ? F.hoveredPercentagesContainer : void 0, g, e && n && t] },
                            a.createElement(s.ZP, { style: [F.percentageQuestion, h] }, y.question),
                            a.createElement(
                                o.Z,
                                { style: [F.percentageScoresContainer, w ? F.compactPercentageScoresContainer : void 0, c] },
                                f.map((e) => a.createElement(o.Z, { key: `score-${e.type}`, style: F.percentageScore }, a.createElement(s.ZP, { style: [F.percentageType, b] }, e.type), a.createElement(s.ZP, { style: [F.percentagePercentage, { color: d[e.value] }, p], weight: "bold" }, `${e.value}%`))),
                            ),
                            a.createElement(s.ZP, { style: F.percentageTotalPosts, weight: "normal" }, `${C} posts`),
                        ),
                    );
                }
                return a.createElement(o.Z, { style: [F.container, g] }, a.createElement(o.Z, { style: F.headerContainer }, a.createElement(o.Z, { style: F.questionContainer }, a.createElement(s.ZP, { style: F.title, weight: "bold" }, H), a.createElement(s.ZP, { style: F.question }, y.question))), a.createElement(o.Z, { style: F.visibilityContainer }, a.createElement(L, { chartData: x, isBlurred: !C, typeMetadata: v }), !C && a.createElement(o.Z, { style: F.loggedOutContainer }, a.createElement(l.ZP, { backgroundColor: "gray50", borderColor: "transparent", link: "/login" }, "Login to view"))));
            }
            const F = r.default.create((e) => ({ interactivePercentageContainer: { flex: 1 }, compactInteractivePercentageContainer: { width: "100%", flex: 1 }, percentagesContainer: { padding: e.spaces.space12, backgroundColor: "transparent", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, width: "100%", display: "flex", flexDirection: "column", transition: "background-color 0.2s ease", gap: e.spaces.space8 }, compactPercentagesContainer: { width: "100%" }, hoveredPercentagesContainer: { backgroundColor: e.colors.gray50, cursor: "pointer" }, percentageQuestion: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 }, percentageScoresContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space32, width: "100%", maxWidth: "100%" }, compactPercentageScoresContainer: { width: "100%", gap: "unset", justifyContent: "space-between" }, percentageScore: { display: "flex", flexDirection: "column" }, percentageType: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 }, percentagePercentage: { fontSize: e.fontSizes.title4 }, percentageTotalPosts: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2 }, container: { width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "background-color 0.2s ease", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200 }, hoveredContainer: { backgroundColor: e.colors.gray400, cursor: "pointer" }, headerContainer: { display: "flex", flexDirection: "row", width: "100%", gap: e.spaces.space16 }, questionContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, width: "100%" }, title: {}, question: {}, visibilityContainer: { position: "relative" }, loggedOutContainer: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", backgroundColor: c.Z.hexToCss(e.colors.gray0, 0.5), display: "flex", justifyContent: "center", alignItems: "center" } }));
        },
        978086: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                o = n(530732),
                r = n(731708);
            function i({ numberOfLines: e, style: t, text: n, textStyle: i }) {
                return a.createElement(o.Z, { style: t, withoutInteractiveStyles: !0 }, ({ isHovered: t }) => a.createElement(r.ZP, { numberOfLines: e, style: [s.title, i], weight: "bold" }, n));
            }
            const s = n(392237).default.create((e) => ({ title: { transition: "all 0.1s ease", fontSize: e.fontSizes.headline2, lineHeight: 23 } }));
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
            n.d(t, { Z: () => w });
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
                f = n(392237);
            const g = i().af8fa2ae,
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
                    const { additionalControl: e, align: t, buttonType: n, children: r, style: i, subtitle: s, title: d, topBarStyle: f, withBackgroundBlur: g, withTopBar: b, withTransparentMask: C } = this.props,
                        { isVisible: w } = this.state;
                    return a.createElement(y.ZP.Consumer, null, ({ direction: y }) => {
                        const k = "rtl" === y,
                            E = w ? v.visibleDrawer : ("left" === t) === k ? v.offscreenRightDrawer : v.offscreenLeftDrawer,
                            S = w && !C ? v.maskWithBg : v.maskTransparent,
                            Z = w ? v.animateOpen : v.animateClose,
                            _ = l.Z.reducedMotionEnabled ? null : Z;
                        return a.createElement(h.Z.Modal, null, a.createElement(p.Z, null, a.createElement(u.Z, null, a.createElement(o.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [v.mask, S, _, g ? v.backgroundBlur : null, "left" === t ? v.alignLeft : v.alignRight] }, (0, m.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: x, style: [v.root, g ? v.backgroundRootBlur : null, E, _, i], children: a.createElement(a.Fragment, null, b ? a.createElement(c.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(n) : null, rightControl: "left" === t ? this._renderCloseButton(n) : "right" === t ? e : null, style: f, subtitle: s, title: d }) : null, a.createElement(o.Z, { style: v.contentContainer }, r)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return a.createElement(d.ZP, { "aria-label": g, icon: b, onPress: this._handleMaskClick, type: e });
                }
            }
            C.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const x = (e) => {
                    e.stopPropagation();
                },
                v = f.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...f.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                w = C;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.News~ondemand.News~loader.ExploreNews.f67f36aa.js.map
