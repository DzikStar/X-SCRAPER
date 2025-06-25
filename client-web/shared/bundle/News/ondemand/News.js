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
                const { canonical: t, description: n = "", image: i, imageAlt: s, imageH: r, imageType: o, imageW: c, title: d, ttl: u, type: m } = e;
                return l.createElement(a.ql, null, m ? l.createElement("meta", { content: m, property: "og:type" }) : null, t ? l.createElement("meta", { content: t, property: "og:url" }) : null, d ? l.createElement("meta", { content: d, property: "og:title" }) : null, l.createElement("meta", { content: n, property: "og:description" }), i ? l.createElement("meta", { content: i, property: "og:image" }) : null, o ? l.createElement("meta", { content: o, property: "og:image:type" }) : null, c ? l.createElement("meta", { content: c, property: "og:image:width" }) : null, r ? l.createElement("meta", { content: r, property: "og:image:height" }) : null, s ? l.createElement("meta", { content: s, property: "og:image:alt" }) : null, u ? l.createElement("meta", { content: u, property: "og:ttl" }) : null);
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
                        d =
                            c.length > 0
                                ? r(c, (e, n) => {
                                      const l = t.getForItem(e.id),
                                          r = t.getForItem(n.id);
                                      return a(s, l, r) || i(o, l, r);
                                  })
                                : null;
                    return d && d.id;
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
            n.d(t, { Z: () => d });
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
            const d = (0, a.ZP)(o(c));
        },
        383675: (e, t, n) => {
            n.d(t, { R: () => o, Z: () => r });
            var l = n(503768),
                a = n(644829),
                i = n(750085),
                s = n(218951);
            const r = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: n, timelineId: l }) => (0, s.Z)({ timelineId: l, isUserRefreshable: n, network: { getEndpoint: (e) => e.withEndpoint(a.Z).fetchGeneric, getEndpointParams: ({ count: n, cursor: l }) => ({ ...e, cursor: "string" == typeof l ? l : void 0, count: n, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                o = (e, t) => (0, s.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(l.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: n }) => ({ cursor: "string" == typeof n ? n : void 0, count: t, timelineId: e }) }, formatResponse: i.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
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
                    d = l.useRef(performance.now()),
                    u = l.useRef("visible" === document.visibilityState),
                    m = l.useRef(0),
                    p = l.useRef(0),
                    g = l.useRef(0),
                    y = l.useRef(null),
                    h = (0, a.useLocation)(),
                    f = () => {
                        const l = performance.now(),
                            a = m.current - d.current,
                            r = l - m.current;
                        if (0 !== m.current) {
                            if (r > e) return i(s().v4()), (d.current = l), (m.current = 0), (p.current = 0), void (g.current = 0);
                            if (u.current) {
                                a - g.current > t && ((0, o.E7)(c, { url: h.pathname, durationMs: a, sessionId: n }), (p.current = l), (g.current = a));
                            }
                        } else d.current = l;
                    },
                    _ = () => {
                        u.current = "visible" === document.visibilityState;
                    },
                    b = () => {
                        m.current = performance.now();
                    };
                l.useEffect(() => {
                    (y.current = setInterval(f, 1e3)), document.addEventListener("visibilitychange", _);
                    const e = ["mousemove", "click", "keydown", "scroll", "touchstart"];
                    e.forEach((e) => {
                        document.addEventListener(e, b);
                    });
                    const t = () => {
                        f();
                    };
                    return (
                        window.addEventListener("beforeunload", t),
                        () => {
                            clearInterval(y.current),
                                document.removeEventListener("visibilitychange", _),
                                e.forEach((e) => {
                                    document.removeEventListener(e, b);
                                }),
                                window.removeEventListener("beforeunload", t);
                        }
                    );
                }, [h.pathname, e, c, n]);
            };
        },
        759208: (e, t, n) => {
            n.d(t, { Z: () => fe });
            n(136728);
            var l = n(202784),
                a = n(325686),
                i = n(858440),
                s = n(691533),
                r = n(392237),
                o = n(725405),
                c = n(125363),
                d = n(836255),
                u = n(731708);
            const m = "This story may evolve over time. Grok can make mistakes, verify its outputs.";
            function p({ style: e }) {
                return l.createElement(u.ZP, { style: [g.text, e] }, m);
            }
            const g = r.default.create((e) => ({ text: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 } }));
            var y = n(118368),
                h = n(221972),
                f = n(246728);
            const _ = { fontSize: 18, lineHeight: 30 };
            var b = n(448301),
                k = n(695356),
                w = n(992942);
            function x({ blurAmount: e, imageOpacity: t, imageUrl: n, style: a }) {
                return n ? l.createElement(w.Z, { resizeMode: "cover", source: n, style: [E.banner, { opacity: t }, { filter: `blur(${e || 0}px)` }, a] }) : null;
            }
            const E = r.default.create((e) => ({ banner: { width: "100%", height: 400, borderRadius: e.borderRadii.large, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1 } }));
            var S = n(790167),
                v = n(530732);
            function T({ postId: e, style: t }) {
                const n = l.useMemo(() => d.Z.createHydratorForTweet(e), [e]),
                    i = (0, c.v9)(n);
                if (!i) return l.createElement(a.Z, { style: Z.attributionContainer });
                const { user: s } = i;
                return l.createElement(
                    a.Z,
                    { style: [Z.attributionContainer, t] },
                    l.createElement(
                        v.Z,
                        {
                            onClick: () => {
                                window.open(`https://x.com${i.permalink}`, "_blank");
                            },
                            withoutInteractiveStyles: !0,
                        },
                        ({ isHovered: e }) => l.createElement(u.ZP, { style: Z.attribution }, `Image posted by @${s.screen_name}`),
                    ),
                );
            }
            const Z = r.default.create((e) => ({ attributionContainer: { height: e.spaces.space16, marginTop: e.spaces.space4, width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-end" }, attribution: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" } }));
            var F = n(555874);
            function C({ bulletpoints: e }) {
                return l.createElement(a.Z, { style: K.bulletPointsWithLineContainer }, l.createElement(a.Z, { style: K.lineContainer }, l.createElement(a.Z, { style: K.line })), l.createElement(F.Z, { ItemSeparatorComponent: () => l.createElement(a.Z, { style: K.bulletpointGap }), data: e, keyExtractor: (e, t) => `keypoint-${t}`, renderItem: ({ item: e }) => l.createElement(I, { bulletpoint: e }) }));
            }
            function I({ bulletpoint: e }) {
                return l.createElement(a.Z, { style: K.bulletpoint }, l.createElement(a.Z, { style: K.circle }), l.createElement(u.ZP, { style: K.text }, e));
            }
            const K = r.default.create((e) => ({ keypointsHeader: { marginBottom: e.spaces.space16 }, bulletPointsWithLineContainer: { width: "100%", position: "relative" }, lineContainer: { position: "absolute", start: 0, top: 0, display: "flex", flexDirection: "column", alignItems: "center", width: e.spaces.space16, height: "100%" }, line: { width: e.spaces.space2, height: "100%", backgroundColor: e.colors.gray300 }, bulletpointGap: { height: e.spaces.space24 }, bulletpoint: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 }, circle: { width: e.spaces.space16, height: e.spaces.space16, borderRadius: e.spaces.space16, borderWidth: 2, borderStyle: "solid", borderColor: e.colors.gray300, backgroundColor: e.colors.navigationBackground }, text: { ..._ } }));
            function L({ style: e, text: t }) {
                return l.createElement(u.ZP, { style: [z.subheader, e], weight: "bold" }, t);
            }
            const z = r.default.create((e) => ({ subheader: { fontSize: e.fontSizes.headline1 } })),
                P = "Key Points";
            function R({ keyPoints: e, style: t }) {
                return e.length ? l.createElement(a.Z, { style: [D.container, t] }, l.createElement(L, { style: D.keypointsHeader, text: P }), l.createElement(C, { bulletpoints: e })) : null;
            }
            const D = r.default.create((e) => ({ container: { width: "100%" }, keypointsHeader: { marginBottom: e.spaces.space16 } }));
            var A = n(477575),
                N = n(274234),
                H = n(194504),
                B = n(287627),
                M = n(823161),
                V = n(366635),
                W = n(966886),
                O = n(650028),
                U = n(451051),
                $ = n(103737);
            function G({ containerStyle: e, isPreview: t = !1, numberOfLines: n, onClick: i, postId: s, style: o, tweetTextStyle: u }) {
                const m = l.useMemo(() => d.Z.createHydratorForTweet(s), [s]),
                    p = (0, c.v9)(m);
                if (!p) return null;
                const { created_at: g, text: y, user: h } = p;
                return l.createElement(
                    v.Z,
                    {
                        onClick: () => {
                            i && i(), window.open(`https://x.com${p.permalink}`, "_blank");
                        },
                        style: [q.interactiveContainer, e],
                        withoutInteractiveStyles: !0,
                    },
                    ({ isHovered: e }) =>
                        l.createElement(
                            a.Z,
                            { style: [q.container, e ? q.hoveredContainer : void 0, o] },
                            l.createElement(a.Z, { style: q.headerContainer }, l.createElement(a.Z, { style: q.nameContainer }, l.createElement(M.default, { "aria-label": h.name, borderColor: "gray700", borderWidth: "small", screenName: h.screen_name, size: t ? "medium" : "large", uri: h.profile_image_url_https, withHoverCard: !0, withLink: !0 }), l.createElement(V.Z, { affiliateBadgeInfo: h.highlightedLabel, isBlueVerified: h.is_blue_verified, isVerified: h.verified, name: h.name, nameSize: t ? "subtext2" : "subtext1", screenName: h.screen_name, screenNameSize: t ? "subtext3" : "subtext2", screenNameStyle: q.screenName, screenNameSuffixContainerStyle: { marginStart: 0 }, style: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, verifiedType: h.verified_type, withHoverCard: !0, withLink: !0, withStackedLayout: !0 })), l.createElement(W.Z, { humanReadable: !1, style: [q.timestamp, { fontSize: t ? r.default.theme.fontSizes.subtext3 : r.default.theme.fontSizes.subtext2, lineHeight: t ? r.default.theme.fontSizes.subtext3 : r.default.theme.fontSizes.subtext2 }], timestamp: g })),
                            p.in_reply_to_screen_name && l.createElement(O.ZP, { displayTextRange: p.display_text_range, inReplyToName: p.in_reply_to_name, inReplyToScreenName: p.in_reply_to_screen_name, inReplyToUserIdStr: p.in_reply_to_user_id_str, linkType: O.ZP.ReplyContextLinkTypes.none, size: t ? "subtext2" : "subtext1", tweetPermalink: p.permalink }),
                            l.createElement(U.Z, { displayTextRange: p.display_text_range, entities: p.entities, isCondensed: t, numberOfLines: n, style: [q.tweetText, u], text: y }),
                            (!t || !y) &&
                                (p.extended_entities?.media ?? []).map((e) => {
                                    const n = { ...e, ext_alt_text: void 0 };
                                    return l.createElement($.Z, { displayMediaTags: !1, hasSensitiveMedia: p.possibly_sensitive, isCondensed: t, key: `media_${p.id_str}_${e.id_str}`, mediaContentStyles: q.media, mediaDetails: [n], mediaVisibilityResults: p.mediaVisibilityResults, preventPlayback: !0, shouldShowAltLabelAlways: !1, showAltTranslation: !1, showBorder: !1, singleImageMaxAspectRatio: 2, singleImageMinAspectRatio: 2, tweetId: p.id_str, videoAspectRatio: 2, videoOptions: { displayOptions: { badgeConfiguration: { hideDataSize: !0, hideViewCount: !0, hideDuration: !0 } }, hidePreviewPlayButton: !0 }, withCenterCrop: !0, withMediaTagsIcon: !t });
                                }),
                        ),
                );
            }
            const q = r.default.create((e) => ({ interactiveContainer: { height: "100%", flex: 1 }, container: { borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, borderRadius: e.borderRadii.medium, backgroundColor: "transparent", padding: e.spaces.space12, textOverflow: "ellipsis", cursor: "pointer", transition: "background-color 0.2s ease", display: "flex", flexDirection: "column", gap: e.spaces.space8, height: "100%", flex: 1 }, hoveredContainer: { backgroundColor: e.colors.gray50 }, headerContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space8, textOverflow: "ellipsis", overflow: "hidden" }, nameContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, textOverflow: "ellipsis" }, screenName: { color: e.colors.gray700 }, timestamp: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, textOverflow: "ellipsis", position: "relative", top: 3 }, tweetText: { fontSize: e.fontSizes.subtext2 }, media: {} }));
            var Q = n(482775);
            function j({ articleId: e, commentPostIds: t, commentsPillContainerStyle: n, commentsPillStyle: i, numComments: s, posts: r, postsCarouselContentStyle: c, postsCarouselStyle: d, style: u }) {
                const m = (0, o.Z)(),
                    p = l.useMemo(() => {
                        const e = [];
                        return (
                            r.forEach((t) => {
                                t.post_results.rest_id && e.push(t.post_results.rest_id);
                            }),
                            e
                        );
                    }, [r]);
                return l.createElement(
                    a.Z,
                    { style: [X.container, u] },
                    l.createElement(
                        H.Z,
                        { buttonsContainerStyle: { ...X.carouselContent, ...(c || {}) }, style: [X.carousel, d] },
                        p.map((e, t) =>
                            l.createElement(G, {
                                containerStyle: X.postContainer,
                                isPreview: !0,
                                key: e,
                                numberOfLines: 3,
                                onClick: () => {
                                    (0, k.U8)(m, { postId: e, allPostIds: p });
                                },
                                postId: e,
                                style: [X.post, { animationDelay: 0.1 * t + "s" }],
                                tweetTextStyle: X.postText,
                            }),
                        ),
                    ),
                    l.createElement(a.Z, { style: X.commentsOuterContainer }, l.createElement(B.Z, { containerStyle: n, disableClick: !0, numPosts: s, postIds: t, style: [X.commentsPill, i], textStyle: X.commentsPillText, variant: "outline" }), l.createElement(Q.Z, { articleId: e, borderColor: "gray100", iconStyle: X.shareIcon, size: "smallCompact", style: X.shareBtn })),
                );
            }
            const X = r.default.create((e) => ({ container: { width: "100%" }, carousel: { width: "100%", flex: 1 }, carouselContent: { display: "flex", flexDirection: "row", flex: 1 }, postContainer: { width: 250, flex: "unset", marginEnd: e.spaces.space12 }, post: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(-10px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, postText: { fontSize: e.fontSizes.subtext1 }, commentsOuterContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12, marginTop: e.spaces.space12 }, commentsPill: {}, commentsPillText: { fontSize: e.fontSizes.subtext2 }, shareBtn: { width: e.spaces.space32, height: e.spaces.space32, padding: 0 }, shareIcon: { width: e.spaces.space16, height: e.spaces.space16 } }));
            var Y = n(373981),
                J = n(810641),
                ee = n(519896),
                te = n(383675);
            const ne = "What is the world saying?";
            function le({ article: e, isExplore: t }) {
                const { isCompactLayout: n } = (0, f.Z)();
                if (!e.post_timelines || 0 === e.post_timelines.length) return null;
                const i = e.post_timelines[0].post_timeline.id;
                return l.createElement(a.Z, { style: [se.container, t || n ? { paddingHorizontal: "0%" } : { paddingHorizontal: "27%" }] }, l.createElement(L, { style: se.header, text: ne }), i && l.createElement(ae, { timelineId: i }));
            }
            function ae({ timelineId: e }) {
                const t = ie(e);
                return t ? l.createElement(J.Z, { anchoring: Y.Z, module: t, onTimelinePoll: () => {}, prerollDisplayLocation: ee.Nw.OTHER, refreshControl: null, renderEmptyState: () => null, title: "" }) : null;
            }
            const ie = (e) => l.useMemo(() => e && (0, te.R)(e, !1), [e]),
                se = r.default.create((e) => ({ container: { display: "flex", flexDirection: "column", width: "100%" }, header: { textAlign: "center", marginBottom: e.spaces.space32 }, timeline: { width: "100%" } }));
            var re = n(400196),
                oe = n(306677),
                ce = n(45843);
            function de({ image_caption: e, image_height: t = 400, image_size: n, image_url: i }) {
                const [s, r] = l.useState({ width: 0, height: t });
                return (
                    l.useEffect(() => {
                        i &&
                            ce.Z.getSize(
                                i,
                                (e, n) => {
                                    r({ width: t * (e / n), height: t });
                                },
                                (e) => {
                                    r({ width: t, height: t });
                                },
                            );
                    }, [i, t]),
                    i ? l.createElement(a.Z, { style: ue.container }, l.createElement(w.Z, { resizeMode: "contain", source: i, style: [ue.img, { width: s.width, height: s.height }] }), !!e && l.createElement(u.ZP, { style: ue.caption }, e)) : null
                );
            }
            const ue = r.default.create((e) => ({ container: { display: "flex", flexDirection: "column", alignItems: "center", gap: e.spaces.space8, textAlign: "center", width: "100%", paddingHorizontal: "10%" }, img: {}, caption: { width: "70%", textAlign: "center", color: e.colors.gray1000, fontSize: e.fontSizes.subtext1 } }));
            var me = n(282279);
            function pe({ isExplore: e = !1, onSectionVisible: t, section: n, sources: i, style: s }) {
                const { isCompactLayout: r } = (0, f.Z)();
                return l.createElement(a.Z, { style: [ge.section, s] }, l.createElement(oe.D, { id: "news_article_section", onFullyVisible: t, position: "top", testID: "news_article_section" }), !!n.title && l.createElement(L, { text: n.title }), !!n.content.text && l.createElement(S.Z, { sources: i, style: ge.body, text: n.content.text }), n.content.bullets && l.createElement(C, { bulletpoints: n.content.bullets }), !!n.content.image_url && l.createElement(de, { image_caption: n.content.image_caption, image_size: n.content.image_size, image_url: n.content.image_url }), n.content.website && l.createElement(me.Z, { website: n.content.website }), n.content.post && l.createElement(a.Z, { style: [ge.outerTweetContainer, r || e ? ge.compactOuterTweetContainer : void 0] }, l.createElement(a.Z, { style: ge.tweetContainer }, l.createElement(re.ZP, { displayPromotedContent: !0, isCompact: r, tweetId: n.content.post.post_results.rest_id, withActions: !0 }))));
            }
            const ge = r.default.create((e) => ({ section: { display: "flex", flexDirection: "column", gap: e.spaces.space16 }, outerTweetContainer: { width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingHorizontal: "15%" }, compactOuterTweetContainer: { paddingHorizontal: "unset" }, tweetContainer: { borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, borderRadius: e.borderRadii.large, overflow: "hidden", width: "100%" }, body: { ..._ } }));
            var ye = n(858496),
                he = n(978086);
            function fe({ article: e, isExplore: t = !1 }) {
                (0, h.Z)({});
                const n = (0, o.Z)(),
                    r = (0, c.I0)(),
                    u = (0, i.Z)(),
                    { isCompactLayout: m } = (0, f.Z)(),
                    g = !t && u.width > 1100,
                    _ = { width: t || m ? "5%" : "27%" },
                    w = e && (0, b.ZW)(e) && !t && (m || !g),
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
                    v = l.useMemo(() => {
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
                    r(d.Z.fetchMultiple(v));
                }, [r, v]);
                const Z = l.useCallback(
                        (t) => {
                            e && (0, k.xi)(n, { articleId: e.id, sectionIdx: t, totalNumSections: e.sections.length });
                        },
                        [e, n],
                    ),
                    F = l.useMemo(() => {
                        const t = [];
                        return e && (0, b.ZW)(e) && t.push(e.timeline), t;
                    }, [e]);
                return e
                    ? l.createElement(
                          l.Fragment,
                          null,
                          l.createElement(
                              a.Z,
                              { style: _e.container },
                              l.createElement(a.Z, { style: _e.bannerContainer }, !t && l.createElement(a.Z, { style: _ }), l.createElement(a.Z, { style: _e.banner }, l.createElement(x, { imageUrl: e.header_img_url, style: t ? _e.exploreBanner : void 0 }), e.header_img_post_id && l.createElement(T, { postId: e.header_img_post_id.post_results.rest_id, style: t ? _e.exploreImageAttribution : void 0 })), !t && l.createElement(a.Z, { style: _ })),
                              l.createElement(
                                  a.Z,
                                  { style: _e.content },
                                  l.createElement(a.Z, { style: _ }),
                                  l.createElement(
                                      a.Z,
                                      { style: [_e.centerComponents, m && _e.compactCenterComponents] },
                                      l.createElement(a.Z, { style: _e.headerContainer }, l.createElement(he.Z, { text: e.title, textStyle: _e.title }), l.createElement(A.Z, { textStyle: _e.lastUpdatedAt, timestamp: e.last_updated_at }), !!e.summary && l.createElement(S.Z, { sources: [], style: _e.summary, text: e.summary })),
                                      l.createElement(a.Z, { style: _e.postsContainer }, w && l.createElement(N.Z, { article: e, hideTitle: !0, isInline: !0 }), e.posts && e.posts.length > 0 && l.createElement(j, { articleId: e.id, commentPostIds: E, numComments: Number(e.total_trend_posts), posts: e.posts })),
                                      e.key_points && e.key_points.length > 0 && l.createElement(R, { keyPoints: e.key_points }),
                                      e.sections.map((n, a) =>
                                          l.createElement(pe, {
                                              isExplore: t,
                                              key: `section-${a}`,
                                              onSectionVisible: () => {
                                                  Z(a);
                                              },
                                              section: n,
                                              sources: e.sources,
                                          }),
                                      ),
                                      e.sentiment && l.createElement(s.Z, null, l.createElement(ye.Z, { articleId: e.id, sentiment: e.sentiment, style: _e.sentimentContainer })),
                                      l.createElement(p, null),
                                  ),
                                  g && F.length > 0 ? l.createElement(a.Z, { style: [_e.rightSideComponents, _] }, (0, b.ZW)(e) && l.createElement(N.Z, { article: e, hideTitle: !0, style: _e.rightSideTimeline })) : l.createElement(a.Z, { style: _ }),
                              ),
                              l.createElement(y.Z, { style: _e.bottomDivider }),
                              e.post_timelines && e.post_timelines.length > 0 && l.createElement(le, { article: e, isExplore: t }),
                              l.createElement(a.Z, { style: _e.scrollViewBottomSpace }),
                          ),
                      )
                    : null;
            }
            const _e = r.default.create((e) => ({ container: { position: "relative", overflow: "hidden", flex: 1, width: "100%" }, bannerContainer: { display: "flex", flexDirection: "row" }, exploreBanner: { borderRadius: 0, height: 300 }, exploreImageAttribution: { paddingEnd: e.spaces.space8 }, banner: { flex: 1, position: "relative" }, content: { display: "flex", flexDirection: "row" }, centerComponents: { flex: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both", display: "flex", flexDirection: "column", gap: e.spaces.space32, marginTop: e.spaces.space16 }, compactCenterComponents: { gap: e.spaces.space24 }, scrollViewBottomSpace: { height: 200 }, headerContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space12 }, title: { fontSize: e.fontSizes.title1, lineHeight: 40 }, lastUpdatedAt: { fontSize: e.fontSizes.subtext1 }, summary: { ..._ }, postsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space12, width: "100%" }, sentimentContainer: { width: "unset", flex: 1 }, rightSideComponents: { paddingHorizontal: e.spaces.space28, marginTop: e.spaces.space8 }, rightSideTimeline: { width: "90%", marginTop: e.spaces.space16 }, bottomDivider: { marginVertical: e.spaces.space32 } }));
        },
        274234: (e, t, n) => {
            n.d(t, { Z: () => u });
            n(136728);
            var l = n(202784),
                a = n(325686),
                i = n(107267),
                s = n(530732),
                r = n(731708),
                o = n(392237),
                c = n(448301),
                d = n(206411);
            function u({ article: e, containerStyle: t, hideTitle: n, isInline: o, onRoute: u, routeToArticle: p, style: g }) {
                const y = (0, i.useHistory)(),
                    h = e.timeline,
                    f = l.useCallback(() => {
                        u && u(), y.push(`/i/news/article/${e.id}`);
                    }, [y, e, u]);
                return h
                    ? l.createElement(s.Z, { onClick: p ? f : void 0, style: t, withoutInteractiveStyles: !0 }, ({ isHovered: e }) =>
                          l.createElement(
                              a.Z,
                              { style: [m.container, o ? m.inlineContainer : void 0, g] },
                              l.createElement(a.Z, { style: m.headerContainer }, !n && l.createElement(r.ZP, { style: m.title, weight: "bold" }, h.title), l.createElement(d.Z, { isAnimated: !0, style: m.liveLabel })),
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
        482775: (e, t, n) => {
            n.d(t, { Z: () => p });
            var l = n(807896),
                a = (n(136728), n(202784)),
                i = n(107267),
                s = n(154003),
                r = n(111677),
                o = n.n(r),
                c = n(786272),
                d = n(323265),
                u = n(725405);
            const m = o().ifea3114;
            const p = function (e) {
                const t = (0, u.Z)(),
                    n = (0, i.useHistory)(),
                    { articleId: r, iconStyle: o, ...p } = e;
                return a.createElement(
                    s.ZP,
                    (0, l.Z)(
                        {
                            borderColor: "transparent",
                            hoverLabel: { label: m },
                            icon: a.createElement(c.default, { style: o }),
                            onClick: () => {
                                const e = `https://x.com/i/news/article/${r}`;
                                d.ZP.isTwitterApp() ? (window.location.href = `https://x.com/compose/tweet?text=${e}`) : n.push({ pathname: "/compose/post", query: { text: e } }), t.scribe({ element: "share_news_article", action: "click", data: { event_info: r } });
                            },
                        },
                        p,
                    ),
                );
            };
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
                d,
                u,
                m,
                p,
                g,
                y,
                h,
                f,
                _,
                b,
                k,
                w,
                x,
                E,
                S,
                v,
                T,
                Z,
                F,
                C,
                I,
                K,
                L,
                z,
                P,
                R,
                D,
                A,
                N,
                H,
                B,
                M,
                V,
                W,
                O,
                U,
                $,
                G,
                q,
                Q,
                j,
                X = {
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
                                                            (d = { alias: null, args: null, kind: "ScalarField", name: "key_points", storageKey: null }),
                                                            (u = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                            (m = { alias: null, args: null, kind: "ScalarField", name: "summary", storageKey: null }),
                                                            (p = { alias: null, args: null, kind: "ScalarField", name: "last_updated_at", storageKey: null }),
                                                            (g = { alias: null, args: null, kind: "ScalarField", name: "total_trend_posts", storageKey: null }),
                                                            (y = { alias: null, args: null, kind: "ScalarField", name: "live_article", storageKey: null }),
                                                            (f = { alias: null, args: null, concreteType: "NewsTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ alias: null, args: null, concreteType: "NewsTimelineEvent", kind: "LinkedField", name: "events", plural: !0, selections: [m, (h = { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null })], storageKey: null }, u], storageKey: null }),
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "NewsArticleSection",
                                                                kind: "LinkedField",
                                                                name: "sections",
                                                                plural: !0,
                                                                selections: [
                                                                    u,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "content",
                                                                        plural: !1,
                                                                        selections: [
                                                                            (_ = { kind: "InlineFragment", selections: [{ alias: "bullets", args: null, kind: "ScalarField", name: "content", storageKey: null }], type: "BulletsBlock", abstractKey: null }),
                                                                            (b = {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_caption", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_size", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null },
                                                                                ],
                                                                                type: "ImageBlock",
                                                                                abstractKey: null,
                                                                            }),
                                                                            (k = { kind: "InlineFragment", selections: [{ alias: "inline_header", args: null, kind: "ScalarField", name: "content", storageKey: null }], type: "InlineHeader", abstractKey: null }),
                                                                            (w = { kind: "InlineFragment", selections: [{ alias: "text", args: null, kind: "ScalarField", name: "content", storageKey: null }], type: "TextBlock", abstractKey: null }),
                                                                            (A = { kind: "InlineFragment", selections: [{ alias: "website", args: null, concreteType: "GrokBraveSearch", kind: "LinkedField", name: "content", plural: !1, selections: [(x = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), (E = { alias: null, args: null, kind: "ScalarField", name: "cached_page_url", storageKey: null }), (S = { alias: null, args: null, kind: "ScalarField", name: "creator", storageKey: null }), (v = { alias: null, args: null, kind: "ScalarField", name: "date_last_crawled", storageKey: null }), (T = { alias: null, args: null, kind: "ScalarField", name: "date_published", storageKey: null }), (Z = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (F = { alias: null, args: null, kind: "ScalarField", name: "favicon", storageKey: null }), (C = { alias: null, args: null, kind: "ScalarField", name: "favicon_base64", storageKey: null }), (I = { alias: null, args: null, kind: "ScalarField", name: "image", storageKey: null }), (K = { alias: null, args: null, kind: "ScalarField", name: "language", storageKey: null }), (L = { alias: null, args: null, kind: "ScalarField", name: "parsed_text", storageKey: null }), (z = { alias: null, args: null, kind: "ScalarField", name: "site_name", storageKey: null }), (P = { alias: null, args: null, kind: "ScalarField", name: "snippet", storageKey: null }), (R = { alias: null, args: null, kind: "ScalarField", name: "time_accessed", storageKey: null }), u, (D = { alias: null, args: null, kind: "ScalarField", name: "media_name", storageKey: null }), m], storageKey: null }], type: "WebsiteBlock", abstractKey: null }),
                                                                            (N = { kind: "InlineFragment", selections: [{ alias: "post", args: null, concreteType: "Post", kind: "LinkedField", name: "content", plural: !1, selections: o, storageKey: null }], type: "PostBlock", abstractKey: null }),
                                                                            ($ = { kind: "InlineFragment", selections: [(H = { alias: null, args: null, kind: "ScalarField", name: "last_time_updated", storageKey: null }), (B = { alias: null, args: null, kind: "ScalarField", name: "question", storageKey: null }), { alias: null, args: null, concreteType: "SentimentScore", kind: "LinkedField", name: "sentiment_scores", plural: !0, selections: [(M = { alias: null, args: null, kind: "ScalarField", name: "num_posts", storageKey: null }), (V = { alias: null, args: null, kind: "ScalarField", name: "sentiment_type", storageKey: null }), (W = { alias: null, args: null, kind: "ScalarField", name: "sentiment_value", storageKey: null }), h], storageKey: null }, (O = { alias: null, args: null, kind: "ScalarField", name: "sentiment_types", storageKey: null }), (U = { alias: null, args: null, kind: "ScalarField", name: "trend_id", storageKey: null })], type: "TrendSentiment", abstractKey: null }),
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (G = { alias: null, args: null, concreteType: "GrokBraveSearch", kind: "LinkedField", name: "sources", plural: !0, selections: [x, E, S, v, T, Z, F, C, I, K, L, z, P, R, u, m, D], storageKey: null }),
                                                            (q = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "posts", plural: !0, selections: o, storageKey: null }),
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (Q = { alias: null, args: null, concreteType: "TrendSentiment", kind: "LinkedField", name: "sentiment_data", plural: !1, selections: [U, B, H, O, { alias: null, args: null, concreteType: "SentimentScore", kind: "LinkedField", name: "sentiment_scores", plural: !0, selections: [V, W, M, h], storageKey: null }], storageKey: null }),
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
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useNewsArticleQuery", selections: [{ alias: "newsArticleResult", args: a, concreteType: "AiTrendResults", kind: "LinkedField", name: "ai_trend_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(j = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [s, { alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [i, r, c, d, u, m, p, g, y, f, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [u, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [j, _, b, k, w, A, N, $], storageKey: null }], storageKey: null }, G, q], storageKey: null }, Q, i], type: "AiTrend", abstractKey: null }], storageKey: null }, i], storageKey: null }] },
                    params: { id: "OGuIchikkLkacWpMvS1Wpg", metadata: {}, name: "useNewsArticleQuery", operationKind: "query", text: null },
                };
            X.hash = "a506b224a236e8986b17cac3a53a9878";
            const Y = X;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.News~ondemand.News.9fb0fc7a.js.map
