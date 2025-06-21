"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Grok~loader.Markdown-4ff64aa1"],
    {
        618770: (e, t, a) => {
            a.d(t, { K: () => d });
            var n = a(202784),
                i = a(325686),
                r = a(392237),
                s = a(166852),
                o = a(725516),
                l = a(86657),
                c = a(988290);
            function d({ fileAttachments: e = [], intermediateImageResults: t = [], isLoading: a, isAborted: r, isInline: d = !1, messageId: y, expectedImageAspectRatio: g }) {
                const f = (0, c.ZP)().isGrokShare,
                    h = (0, o.z)(),
                    b = n.useRef(new Set()),
                    w = n.useCallback(
                        (t) => {
                            if (a) return;
                            const n = t.url || "";
                            let i;
                            b.current.has(n) || (b.current.add(n), (i = b.current.size));
                            const r = e ? e.findIndex((e) => e.url === n) : 0;
                            h.scribe({ action: "click", component: "grok_inline_gallery", element: `slot${r}`, data: { position: i, url: n } });
                        },
                        [h, e, a],
                    ),
                    x = n.useMemo(
                        () =>
                            (0, s.Z)([...t.map((e) => e.imageIdStr), ...e.map((e) => e.mediaId)])
                                .filter(Boolean)
                                .sort(),
                        [e, t],
                    );
                if (0 === e.length) return null;
                const C = e.length > 1 ? u : p;
                return n.createElement(
                    i.Z,
                    { style: [C.containerStyle, d && m.inlineContainer] },
                    e.map((s, o) => {
                        const c = x[o],
                            d = e.find((e) => e.mediaId === c) ?? { fileName: "image", mimeType: "image/jpeg" },
                            m = t.filter((e) => e.imageIdStr === c);
                        return n.createElement(i.Z, { key: `slot_${o}`, style: C.itemStyle }, n.createElement(l.Z, { allFileAttachments: e, allIntermediateImageResults: t, aspectRatio: C.aspectRatio || g, file: d, index: o, intermediateResults: m, isAborted: r, isImageActionsEnabled: !f, isLoading: !!a, key: `image_${o}`, messageId: y, onViewed: w, useActionRowButtons: !f, withMediaCarousel: !f }));
                    }),
                );
            }
            const m = r.default.create((e) => ({ fileAttachmentContainer: { paddingHorizontal: e.spaces.space8, width: "100%", marginVertical: e.spaces.space12, flexDirection: "row", gap: e.spaces.space4 }, fileAttachmentContainerMulti: { flexWrap: "wrap", gap: e.spaces.space12 }, fileAttachmentMultiItem: { width: "48%" }, fileAttachmentSingleItem: { width: "70%" }, inlineContainer: { display: "flex", justifyContent: "center", alignItems: "center" } })),
                p = { aspectRatio: void 0, itemStyle: m.fileAttachmentSingleItem, containerStyle: m.fileAttachmentContainer },
                u = { aspectRatio: void 0, itemStyle: m.fileAttachmentMultiItem, containerStyle: [m.fileAttachmentContainer, m.fileAttachmentContainerMulti] };
        },
        809311: (e, t, a) => {
            a.d(t, { p: () => p });
            a(543673), a(240753), a(128399);
            var n = a(202784),
                i = a(325686),
                r = a(466792),
                s = a(530732),
                o = a(731708),
                l = a(992942),
                c = a(392237),
                d = a(306677),
                m = a(725516);
            const p = ({ item: e, number: t }) => {
                    const a = (0, m.z)(),
                        c = n.useRef(!1),
                        p = n.useCallback(() => {
                            a.scribe({ action: "click", component: "web_result_item", data: { url: e.url } });
                        }, [e, a]),
                        y = n.useCallback(() => {
                            c.current || ((c.current = !0), a.scribe({ action: "impression", component: "web_result_item", data: { url: e.url } }));
                        }, [a, e.url]);
                    let g = new URL(e.url).hostname;
                    g.startsWith("www.") && (g = g.slice(4));
                    const f = e.title?.trim() || g;
                    return n.createElement(r.Z, null, ({ isHovered: a }) => n.createElement(s.Z, { link: e.url, onPress: p }, n.createElement(i.Z, { style: [u.container, a ? u.hovered : null] }, n.createElement(i.Z, { style: u.content }, n.createElement(o.ZP, { size: "body", style: u.title, weight: "medium" }, "number" == typeof t ? `${t}. ` : void 0, f), e.snippet ? n.createElement(o.ZP, { color: "gray900", numberOfLines: 5, size: "subtext1", style: u.snippet }, e.snippet) : null), n.createElement(i.Z, { style: u.hostnameContainer }, e.favicon_base64 ? n.createElement(l.Z, { source: { uri: e.favicon_base64 }, style: u.favicon }) : null, n.createElement(o.ZP, { color: "gray700", size: "subtext1" }, g)), n.createElement(d.D, { id: `web_result_item_${e.url}`, onFullyVisible: y, position: "bottom", testID: `web_result_item_${e.url}` }))));
                },
                u = c.default.create((e) => ({ container: { width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, cursor: "pointer" }, hovered: { backgroundColor: e.colors.gray100 }, content: { gap: e.spaces.space8 }, title: { lineHeight: "150%" }, snippet: { lineHeight: "150%" }, hostnameContainer: { marginTop: e.spaces.space16, flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, favicon: { width: 16, height: 16, backgroundColor: e.colors.white } }));
        },
        916559: (e, t, a) => {
            a.d(t, { E: () => p });
            var n = a(202784),
                i = a(325686),
                r = a(525271),
                s = a(392237),
                o = a(111677),
                l = a.n(o),
                c = a(809311),
                d = a(193285);
            const m = l().d7cb5408,
                p = ({ onDrawerDismiss: e, paginationOptions: t, webResults: a }) => {
                    const [s, o] = n.useState(0),
                        [l, p] = n.useState(() => (t ? a.slice(0, t.numResultsPerPage) : a)),
                        y = t && a.length > t.numResultsPerPage,
                        g = n.useCallback(
                            (e) => {
                                if ((o(e), t)) {
                                    const n = e * t.numResultsPerPage,
                                        i = n + t.numResultsPerPage;
                                    p(a.slice(n, i));
                                }
                            },
                            [a, t],
                        );
                    return n.createElement(
                        r.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: e, title: m },
                        n.createElement(
                            i.Z,
                            { style: u.container },
                            y && n.createElement(d.Z, { currentPageIdx: s, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: g, total: a.length }),
                            l.map((e, t) => n.createElement(c.p, { item: e, key: `web_result_${t}`, number: y ? void 0 : t + 1 })),
                        ),
                    );
                },
                u = s.default.create((e) => ({ container: { width: "100%", maxWidth: 500, gap: e.spaces.space12, marginBottom: e.spaces.space32, paddingHorizontal: e.spaces.space16 } }));
        },
        193285: (e, t, a) => {
            a.d(t, { Z: () => d });
            a(136728);
            var n = a(202784),
                i = a(325686),
                r = a(154003),
                s = a(392237),
                o = a(97301),
                l = a(58399);
            const c = 5;
            function d({ currentPageIdx: e, numPerPage: t, onPageIdxChange: a, style: s, total: d }) {
                const p = t > 0 ? Math.ceil(d / t) : 1,
                    u = n.useMemo(() => {
                        const t = [];
                        for (let a = 0; a < p; a++) t.push({ idx: a, text: a + 1, isSelected: e === a });
                        return t;
                    }, [p, e]),
                    y = n.useCallback(() => {
                        e < p - 1 && a(e + 1);
                    }, [e, a, p]),
                    g = n.useCallback(() => {
                        e > 0 && a(e - 1);
                    }, [e, a]),
                    f = n.useMemo(() => {
                        const t = [];
                        let a = Math.max(0, e - Math.floor(c / 2));
                        const n = Math.min(p - 1, a + c - 1);
                        n === p - 1 && (a = Math.max(0, n - c + 1));
                        for (let e = a; e <= n; e++) t.push(u[e]);
                        return t;
                    }, [u, e, p]);
                return n.createElement(
                    i.Z,
                    { style: [m.container, s] },
                    n.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e <= 0, icon: n.createElement(o.default, { style: m.chevron }), onClick: g, size: "small", style: m.button }),
                    n.createElement(
                        i.Z,
                        { style: m.pageNumContainer },
                        f.map((e) => n.createElement(r.ZP, { borderColor: "transparent", color: e.isSelected ? "text" : "gray700", key: `page_${e.text}`, onClick: () => a(e.idx), size: "small", style: m.button }, e.text)),
                    ),
                    n.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e >= p - 1, icon: n.createElement(l.default, { style: m.chevron }), onClick: y, size: "small", style: m.button }),
                );
            }
            const m = s.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1, gap: e.spaces.space8, width: "100%" }, chevron: { width: e.spaces.space20, height: e.spaces.space20 }, pageNumContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, flexGrow: 0, flexShrink: 1 }, button: {} }));
        },
        520595: (e, t, a) => {
            a.d(t, { a: () => y });
            var n = a(202784),
                i = a(325686),
                r = a(525271),
                s = a(392237),
                o = a(111677),
                l = a.n(o),
                c = a(400196),
                d = a(306677),
                m = a(725405),
                p = a(193285);
            const u = l().b58d2bd2,
                y = ({ onDrawerDismiss: e, paginationOptions: t, postIds: a, style: s, title: o, topBarStyle: l, withTransparentMask: c }) => {
                    const [d, m] = n.useState(0),
                        [y, h] = n.useState(() => (t ? a.slice(0, t.numResultsPerPage) : a)),
                        b = t && a.length > t.numResultsPerPage,
                        w = n.useCallback(
                            (e) => {
                                if ((m(e), t)) {
                                    const n = e * t.numResultsPerPage,
                                        i = n + t.numResultsPerPage;
                                    h(a.slice(n, i));
                                }
                            },
                            [a, t],
                        );
                    return n.createElement(
                        r.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: e, style: s, title: o || u, topBarStyle: l, withTransparentMask: c },
                        n.createElement(
                            i.Z,
                            { style: f.container },
                            b && n.createElement(p.Z, { currentPageIdx: d, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: w, total: a.length }),
                            y.map((e) => n.createElement(g, { key: `post_${e}`, postId: e })),
                        ),
                    );
                },
                g = ({ postId: e }) => {
                    const t = n.useRef(!1),
                        a = (0, m.Z)(),
                        r = n.useCallback(() => {
                            t.current || ((t.current = !0), a.scribe({ action: "impression", component: "post", data: { tweet_id: e } }));
                        }, [a, e]);
                    return n.createElement(i.Z, { key: `post_${e}`, style: f.post }, n.createElement(c.ZP, { displayPromotedContent: !0, tweetId: e, withActions: !0 }), n.createElement(d.D, { id: `post_${e}`, onFullyVisible: r, position: "bottom", testID: `post_${e}` }));
                },
                f = s.default.create((e) => ({ container: { width: "100%", maxWidth: 500, marginBottom: e.spaces.space12 }, post: { borderBottomWidth: 1, borderBottomColor: e.colors.borderColor }, mediaContent: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large, overflow: "hidden" } }));
        },
        486557: (e, t, a) => {
            a.d(t, { S: () => g });
            var n = a(202784),
                i = a(325686),
                r = a(525271),
                s = a(392237),
                o = a(111677),
                l = a.n(o),
                c = a(240089),
                d = a(663550),
                m = a(409438),
                p = a(125363),
                u = a(919022);
            const y = l().df601d92,
                g = ({ hideTitle: e, onDrawerDismiss: t, style: a, title: s, topBarStyle: o, userHandles: l, withTransparentMask: c }) =>
                    n.createElement(
                        r.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: t, title: e ? void 0 : s || y, topBarStyle: o, withTransparentMask: c },
                        n.createElement(
                            i.Z,
                            { style: [h.userList, a] },
                            l.map((e, t) => n.createElement(i.Z, { key: e, style: 0 === t ? void 0 : h.cellBorderTop }, n.createElement(f, { userHandle: e }))),
                        ),
                    ),
                f = ({ userHandle: e }) => {
                    const t = (0, p.v9)((t) => u.ZP.selectByScreenName(t, e));
                    return t ? n.createElement(c.ZP, { decoration: c.ET, displayMode: m.Z.UserDetailed, isFakeButtonRoleWithListItem: !0, key: t.id_str, promotedItemType: d.bj.USER, userId: t.id_str, withFollowsYou: !0 }) : null;
                },
                h = s.default.create((e) => ({ userList: { width: "100%", maxWidth: 500, marginBottom: e.spaces.space12, display: "flex", flexDirection: "column" }, cellBorderTop: { borderTopWidth: 1, borderTopColor: e.colors.borderColor } }));
        },
        299631: (e, t, a) => {
            a.d(t, { V: () => x });
            var n = a(202784),
                i = a(325686),
                r = a(392237),
                s = a(400196),
                o = a(988290),
                l = a(530732),
                c = a(823161),
                d = a(366635),
                m = a(966886),
                p = a(650028),
                u = a(451051),
                y = a(103737),
                g = a(778955),
                f = a(125363),
                h = a(836255);
            function b({ allowMedia: e = !0, containerStyle: t, hoverStyle: a, isPreview: s = !1, numberOfLines: o = 5, onClick: b, postId: x, preventPlayback: C = !0, showActionsBar: _ = !0, style: P, tweetTextStyle: S }) {
                const k = n.useMemo(() => h.Z.createHydratorForTweet(x), [x]),
                    v = (0, f.v9)(k);
                if (!v) return null;
                const { created_at: E, text: Z, user: I } = v,
                    R = (v.extended_entities?.media || []).slice(0, 1);
                return n.createElement(
                    l.Z,
                    {
                        onClick: () => {
                            b && b(), window.open(`https://x.com${v.permalink}`, "_blank");
                        },
                        style: [w.interactiveContainer, t],
                        withoutInteractiveStyles: !0,
                    },
                    ({ isHovered: t }) =>
                        n.createElement(
                            i.Z,
                            { style: [w.container, t ? w.hoveredContainer : void 0, P, t && a] },
                            n.createElement(i.Z, { style: w.headerContainer }, n.createElement(i.Z, { style: w.nameContainer }, n.createElement(c.default, { "aria-label": I.name, borderColor: "gray700", borderWidth: "small", screenName: I.screen_name, size: s ? "medium" : "large", uri: I.profile_image_url_https, withHoverCard: !0, withLink: !0 }), n.createElement(d.Z, { affiliateBadgeInfo: I.highlightedLabel, isBlueVerified: I.is_blue_verified, isVerified: I.verified, name: I.name, nameSize: s ? "subtext2" : "subtext1", screenName: I.screen_name, screenNameSize: s ? "subtext3" : "subtext2", screenNameStyle: w.screenName, screenNameSuffixContainerStyle: { marginStart: 0 }, style: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, verifiedType: I.verified_type, withHoverCard: !0, withLink: !0, withStackedLayout: !0 })), n.createElement(m.Z, { humanReadable: !1, style: [w.timestamp, { fontSize: s ? r.default.theme.fontSizes.subtext3 : r.default.theme.fontSizes.subtext2, lineHeight: s ? r.default.theme.fontSizes.subtext3 : r.default.theme.fontSizes.subtext2 }], timestamp: E })),
                            v.in_reply_to_screen_name && n.createElement(p.ZP, { displayTextRange: v.display_text_range, inReplyToName: v.in_reply_to_name, inReplyToScreenName: v.in_reply_to_screen_name, inReplyToUserIdStr: v.in_reply_to_user_id_str, linkType: p.ZP.ReplyContextLinkTypes.none, size: s ? "subtext2" : "subtext1", tweetPermalink: v.permalink }),
                            n.createElement(u.Z, { displayTextRange: v.display_text_range, entities: v.entities, isCondensed: s, numberOfLines: o, style: [w.tweetText, S], text: Z }),
                            e &&
                                (!s || !Z) &&
                                R.map((e) => {
                                    const t = { ...e, ext_alt_text: void 0 };
                                    return n.createElement(y.Z, { displayMediaTags: !1, hasSensitiveMedia: v.possibly_sensitive, isCondensed: s, key: `media_${v.id_str}_${e.id_str}`, mediaContentStyles: w.media, mediaDetails: [t], mediaVisibilityResults: v.mediaVisibilityResults, preventPlayback: C, shouldShowAltLabelAlways: !1, showAltTranslation: !1, showBorder: !1, singleImageMaxAspectRatio: 2, singleImageMinAspectRatio: 2, tweetId: v.id_str, videoAspectRatio: 2, videoOptions: { displayOptions: { badgeConfiguration: { hideDataSize: !0, hideViewCount: !0, hideDuration: !0 } }, hidePreviewPlayButton: !0 }, withCenterCrop: !0, withMediaTagsIcon: !s });
                                }),
                            _ && n.createElement(g.Z, { allowBookmarkInActionsBar: !0, style: w.actionBar, tweet: v, withAnalyticsAction: !0, withCount: !0 }),
                        ),
                );
            }
            const w = r.default.create((e) => ({ interactiveContainer: { flex: 1 }, container: { borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, borderRadius: e.borderRadii.large, padding: e.spaces.space12, textOverflow: "ellipsis", cursor: "pointer", transition: "background-color 0.2s ease", display: "flex", flexDirection: "column", gap: e.spaces.space8, height: "100%", flex: 1 }, hoveredContainer: { backgroundColor: e.colors.gray50 }, headerContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space8, textOverflow: "ellipsis", overflow: "hidden" }, nameContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, textOverflow: "ellipsis" }, screenName: { color: e.colors.gray700 }, timestamp: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, textOverflow: "ellipsis", position: "relative", top: 3 }, tweetText: { fontSize: e.fontSizes.subtext2, flex: 1 }, media: {}, actionBar: {} })),
                x = ({ allowMedia: e = !0, dynamicLayoutEnabled: t = !1, enableActions: a = !0, numberOfLines: r, postHoverStyle: l, postIds: c, postStyle: d, style: m }) => {
                    const { isCompactLayout: p } = (0, o.ZP)();
                    if (t) {
                        if (1 === c.length) return n.createElement(i.Z, { style: [C.singlePostOuterContainer, m] }, n.createElement(i.Z, { style: [C.singlePostContainer, p && C.compactSinglePostContainer] }, n.createElement(s.ZP, { displayPromotedContent: !1, tweetId: c[0], withActions: a })));
                        if (2 === c.length)
                            return n.createElement(
                                i.Z,
                                { style: [C.doublePostOuterContainer, m] },
                                c.map((t, i) => n.createElement(b, { allowMedia: e, containerStyle: C.doublePostContainer, hoverStyle: l, key: t, numberOfLines: r, postId: t, preventPlayback: !1, showActionsBar: a, style: [C.post, { animationDelay: 0.1 * i + "s" }, d], tweetTextStyle: C.postText })),
                            );
                    }
                    return n.createElement(
                        i.Z,
                        { style: [C.container, m] },
                        c.map((t, i) => n.createElement(b, { allowMedia: e, containerStyle: C.postContainer, hoverStyle: l, key: t, numberOfLines: r, postId: t, preventPlayback: !1, showActionsBar: a, style: [C.post, { animationDelay: 0.1 * i + "s" }, d], tweetTextStyle: C.postText })),
                    );
                },
                C = r.default.create((e) => ({ singlePostOuterContainer: { width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }, singlePostContainer: { width: "70%", borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, borderRadius: e.borderRadii.large, overflow: "hidden" }, compactSinglePostContainer: { width: "100%" }, doublePostOuterContainer: { width: "100%", display: "flex", flexDirection: "row", gap: e.spaces.space12 }, doublePostContainer: { flex: 1 }, container: { width: "100%", display: "flex", flexDirection: "row", flex: 1, gap: e.spaces.space12 }, postContainer: { flex: 1 }, post: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(-10px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, postText: { fontSize: e.fontSizes.subtext1 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Grok~loader.Markdown-4ff64aa1.8f7437fa.js.map
