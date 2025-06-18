"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Grok~loader.Markdown-4ff64aa1"],
    {
        618770: (e, t, n) => {
            n.d(t, { K: () => d });
            var a = n(202784),
                i = n(325686),
                r = n(392237),
                s = n(166852),
                o = n(725516),
                l = n(86657),
                c = n(988290);
            function d({ fileAttachments: e = [], intermediateImageResults: t = [], isLoading: n, isAborted: r, isInline: d = !1, messageId: y, expectedImageAspectRatio: g }) {
                const f = (0, c.ZP)().isGrokShare,
                    h = (0, o.z)(),
                    b = a.useRef(new Set()),
                    x = a.useCallback(
                        (t) => {
                            if (n) return;
                            const a = t.url || "";
                            let i;
                            b.current.has(a) || (b.current.add(a), (i = b.current.size));
                            const r = e ? e.findIndex((e) => e.url === a) : 0;
                            h.scribe({ action: "click", component: "grok_inline_gallery", element: `slot${r}`, data: { position: i, url: a } });
                        },
                        [h, e, n],
                    ),
                    w = a.useMemo(
                        () =>
                            (0, s.Z)([...t.map((e) => e.imageIdStr), ...e.map((e) => e.mediaId)])
                                .filter(Boolean)
                                .sort(),
                        [e, t],
                    );
                if (0 === e.length) return null;
                const C = e.length > 1 ? u : p;
                return a.createElement(
                    i.Z,
                    { style: [C.containerStyle, d && m.inlineContainer] },
                    e.map((s, o) => {
                        const c = w[o],
                            d = e.find((e) => e.mediaId === c) ?? { fileName: "image", mimeType: "image/jpeg" },
                            m = t.filter((e) => e.imageIdStr === c);
                        return a.createElement(i.Z, { key: `slot_${o}`, style: C.itemStyle }, a.createElement(l.Z, { allFileAttachments: e, allIntermediateImageResults: t, aspectRatio: C.aspectRatio || g, file: d, index: o, intermediateResults: m, isAborted: r, isImageActionsEnabled: !f, isLoading: !!n, key: `image_${o}`, messageId: y, onViewed: x, useActionRowButtons: !f, withMediaCarousel: !f }));
                    }),
                );
            }
            const m = r.default.create((e) => ({ fileAttachmentContainer: { paddingHorizontal: e.spaces.space8, width: "100%", marginVertical: e.spaces.space12, flexDirection: "row", gap: e.spaces.space4 }, fileAttachmentContainerMulti: { flexWrap: "wrap", gap: e.spaces.space12 }, fileAttachmentMultiItem: { width: "48%" }, fileAttachmentSingleItem: { width: "70%" }, inlineContainer: { display: "flex", justifyContent: "center", alignItems: "center" } })),
                p = { aspectRatio: void 0, itemStyle: m.fileAttachmentSingleItem, containerStyle: m.fileAttachmentContainer },
                u = { aspectRatio: void 0, itemStyle: m.fileAttachmentMultiItem, containerStyle: [m.fileAttachmentContainer, m.fileAttachmentContainerMulti] };
        },
        809311: (e, t, n) => {
            n.d(t, { p: () => p });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                i = n(325686),
                r = n(466792),
                s = n(530732),
                o = n(731708),
                l = n(992942),
                c = n(392237),
                d = n(306677),
                m = n(725516);
            const p = ({ item: e, number: t }) => {
                    const n = (0, m.z)(),
                        c = a.useRef(!1),
                        p = a.useCallback(() => {
                            n.scribe({ action: "click", component: "web_result_item", data: { url: e.url } });
                        }, [e, n]),
                        y = a.useCallback(() => {
                            c.current || ((c.current = !0), n.scribe({ action: "impression", component: "web_result_item", data: { url: e.url } }));
                        }, [n, e.url]);
                    let g = new URL(e.url).hostname;
                    g.startsWith("www.") && (g = g.slice(4));
                    const f = e.title?.trim() || g;
                    return a.createElement(r.Z, null, ({ isHovered: n }) => a.createElement(s.Z, { link: e.url, onPress: p }, a.createElement(i.Z, { style: [u.container, n ? u.hovered : null] }, a.createElement(i.Z, { style: u.content }, a.createElement(o.ZP, { size: "body", style: u.title, weight: "medium" }, "number" == typeof t ? `${t}. ` : void 0, f), e.snippet ? a.createElement(o.ZP, { color: "gray900", numberOfLines: 5, size: "subtext1", style: u.snippet }, e.snippet) : null), a.createElement(i.Z, { style: u.hostnameContainer }, e.favicon_base64 ? a.createElement(l.Z, { source: { uri: e.favicon_base64 }, style: u.favicon }) : null, a.createElement(o.ZP, { color: "gray700", size: "subtext1" }, g)), a.createElement(d.D, { id: `web_result_item_${e.url}`, onFullyVisible: y, position: "bottom", testID: `web_result_item_${e.url}` }))));
                },
                u = c.default.create((e) => ({ container: { width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, cursor: "pointer" }, hovered: { backgroundColor: e.colors.gray100 }, content: { gap: e.spaces.space8 }, title: { lineHeight: "150%" }, snippet: { lineHeight: "150%" }, hostnameContainer: { marginTop: e.spaces.space16, flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, favicon: { width: 16, height: 16, backgroundColor: e.colors.white } }));
        },
        916559: (e, t, n) => {
            n.d(t, { E: () => p });
            var a = n(202784),
                i = n(325686),
                r = n(525271),
                s = n(392237),
                o = n(111677),
                l = n.n(o),
                c = n(809311),
                d = n(193285);
            const m = l().d7cb5408,
                p = ({ onDrawerDismiss: e, paginationOptions: t, webResults: n }) => {
                    const [s, o] = a.useState(0),
                        [l, p] = a.useState(() => (t ? n.slice(0, t.numResultsPerPage) : n)),
                        y = t && n.length > t.numResultsPerPage,
                        g = a.useCallback(
                            (e) => {
                                if ((o(e), t)) {
                                    const a = e * t.numResultsPerPage,
                                        i = a + t.numResultsPerPage;
                                    p(n.slice(a, i));
                                }
                            },
                            [n, t],
                        );
                    return a.createElement(
                        r.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: e, title: m },
                        a.createElement(
                            i.Z,
                            { style: u.container },
                            y && a.createElement(d.Z, { currentPageIdx: s, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: g, total: n.length }),
                            l.map((e, t) => a.createElement(c.p, { item: e, key: `web_result_${t}`, number: y ? void 0 : t + 1 })),
                        ),
                    );
                },
                u = s.default.create((e) => ({ container: { width: "100%", maxWidth: 500, gap: e.spaces.space12, marginBottom: e.spaces.space32, paddingHorizontal: e.spaces.space16 } }));
        },
        193285: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var a = n(202784),
                i = n(325686),
                r = n(154003),
                s = n(392237),
                o = n(97301),
                l = n(58399);
            const c = 5;
            function d({ currentPageIdx: e, numPerPage: t, onPageIdxChange: n, style: s, total: d }) {
                const p = t > 0 ? Math.ceil(d / t) : 1,
                    u = a.useMemo(() => {
                        const t = [];
                        for (let n = 0; n < p; n++) t.push({ idx: n, text: n + 1, isSelected: e === n });
                        return t;
                    }, [p, e]),
                    y = a.useCallback(() => {
                        e < p - 1 && n(e + 1);
                    }, [e, n, p]),
                    g = a.useCallback(() => {
                        e > 0 && n(e - 1);
                    }, [e, n]),
                    f = a.useMemo(() => {
                        const t = [];
                        let n = Math.max(0, e - Math.floor(c / 2));
                        const a = Math.min(p - 1, n + c - 1);
                        a === p - 1 && (n = Math.max(0, a - c + 1));
                        for (let e = n; e <= a; e++) t.push(u[e]);
                        return t;
                    }, [u, e, p]);
                return a.createElement(
                    i.Z,
                    { style: [m.container, s] },
                    a.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e <= 0, icon: a.createElement(o.default, { style: m.chevron }), onClick: g, size: "small", style: m.button }),
                    a.createElement(
                        i.Z,
                        { style: m.pageNumContainer },
                        f.map((e) => a.createElement(r.ZP, { borderColor: "transparent", color: e.isSelected ? "text" : "gray700", key: `page_${e.text}`, onClick: () => n(e.idx), size: "small", style: m.button }, e.text)),
                    ),
                    a.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e >= p - 1, icon: a.createElement(l.default, { style: m.chevron }), onClick: y, size: "small", style: m.button }),
                );
            }
            const m = s.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1, gap: e.spaces.space8, width: "100%" }, chevron: { width: e.spaces.space20, height: e.spaces.space20 }, pageNumContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, flexGrow: 0, flexShrink: 1 }, button: {} }));
        },
        520595: (e, t, n) => {
            n.d(t, { a: () => y });
            var a = n(202784),
                i = n(325686),
                r = n(525271),
                s = n(392237),
                o = n(111677),
                l = n.n(o),
                c = n(400196),
                d = n(306677),
                m = n(725405),
                p = n(193285);
            const u = l().b58d2bd2,
                y = ({ onDrawerDismiss: e, paginationOptions: t, postIds: n, style: s, title: o, topBarStyle: l, withTransparentMask: c }) => {
                    const [d, m] = a.useState(0),
                        [y, h] = a.useState(() => (t ? n.slice(0, t.numResultsPerPage) : n)),
                        b = t && n.length > t.numResultsPerPage,
                        x = a.useCallback(
                            (e) => {
                                if ((m(e), t)) {
                                    const a = e * t.numResultsPerPage,
                                        i = a + t.numResultsPerPage;
                                    h(n.slice(a, i));
                                }
                            },
                            [n, t],
                        );
                    return a.createElement(
                        r.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: e, style: s, title: o || u, topBarStyle: l, withTransparentMask: c },
                        a.createElement(
                            i.Z,
                            { style: f.container },
                            b && a.createElement(p.Z, { currentPageIdx: d, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: x, total: n.length }),
                            y.map((e) => a.createElement(g, { key: `post_${e}`, postId: e })),
                        ),
                    );
                },
                g = ({ postId: e }) => {
                    const t = a.useRef(!1),
                        n = (0, m.Z)(),
                        r = a.useCallback(() => {
                            t.current || ((t.current = !0), n.scribe({ action: "impression", component: "post", data: { tweet_id: e } }));
                        }, [n, e]);
                    return a.createElement(i.Z, { key: `post_${e}`, style: f.post }, a.createElement(c.ZP, { displayPromotedContent: !0, tweetId: e, withActions: !0 }), a.createElement(d.D, { id: `post_${e}`, onFullyVisible: r, position: "bottom", testID: `post_${e}` }));
                },
                f = s.default.create((e) => ({ container: { width: "100%", maxWidth: 500, marginBottom: e.spaces.space12 }, post: { borderBottomWidth: 1, borderBottomColor: e.colors.borderColor }, mediaContent: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large, overflow: "hidden" } }));
        },
        486557: (e, t, n) => {
            n.d(t, { S: () => g });
            var a = n(202784),
                i = n(325686),
                r = n(525271),
                s = n(392237),
                o = n(111677),
                l = n.n(o),
                c = n(240089),
                d = n(663550),
                m = n(409438),
                p = n(125363),
                u = n(919022);
            const y = l().df601d92,
                g = ({ hideTitle: e, onDrawerDismiss: t, style: n, title: s, topBarStyle: o, userHandles: l, withTransparentMask: c }) =>
                    a.createElement(
                        r.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: t, title: e ? void 0 : s || y, topBarStyle: o, withTransparentMask: c },
                        a.createElement(
                            i.Z,
                            { style: [h.userList, n] },
                            l.map((e, t) => a.createElement(i.Z, { key: e, style: 0 === t ? void 0 : h.cellBorderTop }, a.createElement(f, { userHandle: e }))),
                        ),
                    ),
                f = ({ userHandle: e }) => {
                    const t = (0, p.v9)((t) => u.ZP.selectByScreenName(t, e));
                    return t ? a.createElement(c.ZP, { decoration: c.ET, displayMode: m.Z.UserDetailed, isFakeButtonRoleWithListItem: !0, key: t.id_str, promotedItemType: d.bj.USER, userId: t.id_str, withFollowsYou: !0 }) : null;
                },
                h = s.default.create((e) => ({ userList: { width: "100%", maxWidth: 500, marginBottom: e.spaces.space12, display: "flex", flexDirection: "column" }, cellBorderTop: { borderTopWidth: 1, borderTopColor: e.colors.borderColor } }));
        },
        299631: (e, t, n) => {
            n.d(t, { V: () => w });
            var a = n(202784),
                i = n(325686),
                r = n(392237),
                s = n(400196),
                o = n(988290),
                l = n(530732),
                c = n(823161),
                d = n(366635),
                m = n(966886),
                p = n(650028),
                u = n(451051),
                y = n(103737),
                g = n(778955),
                f = n(125363),
                h = n(836255);
            function b({ containerStyle: e, isPreview: t = !1, numberOfLines: n, onClick: s, postId: o, preventPlayback: b = !0, showActionsBar: w = !0, style: C, tweetTextStyle: _ }) {
                const P = a.useMemo(() => h.Z.createHydratorForTweet(o), [o]),
                    k = (0, f.v9)(P);
                if (!k) return null;
                const { created_at: S, text: v, user: E } = k,
                    Z = (k.extended_entities?.media || []).slice(0, 1);
                return a.createElement(
                    l.Z,
                    {
                        onClick: () => {
                            s && s(), window.open(`https://x.com${k.permalink}`, "_blank");
                        },
                        style: [x.interactiveContainer, e],
                        withoutInteractiveStyles: !0,
                    },
                    ({ isHovered: e }) =>
                        a.createElement(
                            i.Z,
                            { style: [x.container, e ? x.hoveredContainer : void 0, C] },
                            a.createElement(i.Z, { style: x.headerContainer }, a.createElement(i.Z, { style: x.nameContainer }, a.createElement(c.default, { "aria-label": E.name, borderColor: "gray700", borderWidth: "small", screenName: E.screen_name, size: t ? "medium" : "large", uri: E.profile_image_url_https, withHoverCard: !0, withLink: !0 }), a.createElement(d.Z, { affiliateBadgeInfo: E.highlightedLabel, isBlueVerified: E.is_blue_verified, isVerified: E.verified, name: E.name, nameSize: t ? "subtext2" : "subtext1", screenName: E.screen_name, screenNameSize: t ? "subtext3" : "subtext2", screenNameStyle: x.screenName, screenNameSuffixContainerStyle: { marginStart: 0 }, style: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, verifiedType: E.verified_type, withHoverCard: !0, withLink: !0, withStackedLayout: !0 })), a.createElement(m.Z, { humanReadable: !1, style: [x.timestamp, { fontSize: t ? r.default.theme.fontSizes.subtext3 : r.default.theme.fontSizes.subtext2, lineHeight: t ? r.default.theme.fontSizes.subtext3 : r.default.theme.fontSizes.subtext2 }], timestamp: S })),
                            k.in_reply_to_screen_name && a.createElement(p.ZP, { displayTextRange: k.display_text_range, inReplyToName: k.in_reply_to_name, inReplyToScreenName: k.in_reply_to_screen_name, inReplyToUserIdStr: k.in_reply_to_user_id_str, linkType: p.ZP.ReplyContextLinkTypes.none, size: t ? "subtext2" : "subtext1", tweetPermalink: k.permalink }),
                            a.createElement(u.Z, { displayTextRange: k.display_text_range, entities: k.entities, isCondensed: t, numberOfLines: n, style: [x.tweetText, _], text: v }),
                            (!t || !v) &&
                                Z.map((e) => {
                                    const n = { ...e, ext_alt_text: void 0 };
                                    return a.createElement(y.Z, { displayMediaTags: !1, hasSensitiveMedia: k.possibly_sensitive, isCondensed: t, key: `media_${k.id_str}_${e.id_str}`, mediaContentStyles: x.media, mediaDetails: [n], mediaVisibilityResults: k.mediaVisibilityResults, preventPlayback: b, shouldShowAltLabelAlways: !1, showAltTranslation: !1, showBorder: !1, singleImageMaxAspectRatio: 2, singleImageMinAspectRatio: 2, tweetId: k.id_str, videoAspectRatio: 2, videoOptions: { displayOptions: { badgeConfiguration: { hideDataSize: !0, hideViewCount: !0, hideDuration: !0 } }, hidePreviewPlayButton: !0 }, withCenterCrop: !0, withMediaTagsIcon: !t });
                                }),
                            w && a.createElement(g.Z, { allowBookmarkInActionsBar: !0, style: x.actionBar, tweet: k, withAnalyticsAction: !0, withCount: !0 }),
                        ),
                );
            }
            const x = r.default.create((e) => ({ interactiveContainer: { flex: 1 }, container: { borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, borderRadius: e.borderRadii.large, padding: e.spaces.space12, textOverflow: "ellipsis", cursor: "pointer", transition: "background-color 0.2s ease", display: "flex", flexDirection: "column", gap: e.spaces.space8, height: "100%", flex: 1 }, hoveredContainer: { backgroundColor: e.colors.gray50 }, headerContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space8, textOverflow: "ellipsis", overflow: "hidden" }, nameContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, textOverflow: "ellipsis" }, screenName: { color: e.colors.gray700 }, timestamp: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, textOverflow: "ellipsis", position: "relative", top: 3 }, tweetText: { fontSize: e.fontSizes.subtext2, flex: 1 }, media: {}, actionBar: {} })),
                w = ({ dynamicLayoutEnabled: e = !1, numberOfLines: t, postIds: n, style: r }) => {
                    const { isCompactLayout: l } = (0, o.ZP)(),
                        c = t || 5;
                    if (e) {
                        if (1 === n.length) return a.createElement(i.Z, { style: [C.singlePostOuterContainer, r] }, a.createElement(i.Z, { style: [C.singlePostContainer, l && C.compactSinglePostContainer] }, a.createElement(s.ZP, { displayPromotedContent: !1, tweetId: n[0], withActions: !0 })));
                        if (2 === n.length)
                            return a.createElement(
                                i.Z,
                                { style: [C.doublePostOuterContainer, r] },
                                n.map((e, t) => a.createElement(b, { containerStyle: C.doublePostContainer, key: e, numberOfLines: c, postId: e, preventPlayback: !1, style: [C.post, { animationDelay: 0.1 * t + "s" }], tweetTextStyle: C.postText })),
                            );
                    }
                    return a.createElement(
                        i.Z,
                        { style: [C.container, r] },
                        n.map((e, t) => a.createElement(b, { containerStyle: C.postContainer, key: e, numberOfLines: c, postId: e, preventPlayback: !1, style: [C.post, { animationDelay: 0.1 * t + "s" }], tweetTextStyle: C.postText })),
                    );
                },
                C = r.default.create((e) => ({ singlePostOuterContainer: { width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }, singlePostContainer: { width: "70%", borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, borderRadius: e.borderRadii.large, overflow: "hidden" }, compactSinglePostContainer: { width: "100%" }, doublePostOuterContainer: { width: "100%", display: "flex", flexDirection: "row", gap: e.spaces.space12 }, doublePostContainer: { flex: 1 }, container: { width: "100%", display: "flex", flexDirection: "row", flex: 1, gap: e.spaces.space12 }, postContainer: { flex: 1 }, post: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(-10px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, postText: { fontSize: e.fontSizes.subtext1 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Grok~loader.Markdown-4ff64aa1.be3ac81a.js.map
