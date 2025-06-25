"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ReaderMode-e019dbda"],
    {
        56851: (e, t, o) => {
            o.d(t, { Z: () => b });
            var a = o(202784),
                n = o(420740),
                r = o(108362),
                i = o(731708),
                c = o(154003),
                s = o(392237),
                l = o(111677),
                d = o.n(l),
                m = o(349035);
            const p = "error-detail",
                u = d().e49537c2,
                h = d().a9ae1e78;
            class b extends a.PureComponent {
                render() {
                    return a.createElement(n.Z, { testID: p }, a.createElement(m.Z, null), a.createElement(r.Z, { style: w.root }, a.createElement(i.ZP, { align: "center", color: "gray700", style: w.retryText }, u), a.createElement(c.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, h)));
                }
            }
            const w = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var a = o(202784),
                n = o(500002),
                r = o(668214),
                i = o(997174),
                c = o(118823);
            const s = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: c.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class l extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: a },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: r, search: i },
                            locationKey: c,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const l = n || c;
                    ((l && n !== c) || (!l && o !== r) || a !== i || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const d = (0, n.ZP)(s(l));
        },
        519125: (e, t, o) => {
            o.d(t, { Mu: () => S, ZP: () => v });
            var a = o(662678),
                n = o(769471),
                r = o(337637),
                i = o(459679),
                c = o(192337),
                s = o(962741),
                l = o(372703),
                d = o(466015),
                m = o(267483),
                p = o(263863),
                u = o(351322),
                h = o(37533),
                b = o(777809),
                w = o(652815),
                g = o(560520),
                f = o(367991),
                C = o(705638),
                y = o(801184),
                Z = o(335632);
            const k = "FocalTweetInlineTombstone",
                E = "More Replies";
            let T;
            const I = Object.freeze({ Default: "ui_defaultLabel", TransparentCursor: "ui_transparentCursor" }),
                x = { ...(0, Z.G)({}), [s.ZP.Tweet]: (0, C.Z)({ hideConversationControlsEducationText: !0, withMuteConversation: !0 }) },
                v = ({ changeDropdownState: e, hideReplyContextMode: t, isCurrentUserRootAuthor: o, isReaderMode: a, isTransparentCursorsEnabled: r, replyDropdownSelection: i, rootTweetAuthorId: c, tweetTextSize: d, withFocalTweetMedia: C, withRuxInjections: Z }) =>
                    (0, n.Z)({}, x, {
                        [s.ZP.SelfThreadTweetComposer]: w.Z,
                        [s.ZP.Tweet]: {
                            handlers: {
                                [p.Z.Tweet]: (0, y.Cw)({
                                    hideConversationControlsEducationText: !0,
                                    hideExclusivityInfoEducationTextInReplies: !0,
                                    hideTrustedFriendsEducationTextInReplies: !0,
                                    createAdditionalProps: (e, { applyFeedbackAction: t }) => {
                                        const a = { withHideReply: o, showMidConversationControlEducationText: !0, withUnhideReply: !1, withViewHiddenReplies: !0 },
                                            n = !!(e.content && e.content.hasModeratedReplies && e.conversationPosition && e.conversationPosition.isStart);
                                        return (
                                            (a.conversationAnnotation = e?.content?.conversation_annotation),
                                            (a.hasModeratedReplies = n),
                                            (a.rootTweetAuthorId = c),
                                            o &&
                                                (a.onTweetDismiss = () => {
                                                    t({ entry: e, feedbackKeys: [l.qt] });
                                                }),
                                            a
                                        );
                                    },
                                    dismissable: !0,
                                    hideReplyContextMode: t,
                                    withMuteConversation: !0,
                                }),
                                [p.Z.FocalTweet]: (0, y.g6)({
                                    createAdditionalProps: (t, { applyFeedbackAction: a }) => {
                                        const {
                                                content: { conversation_annotation: n, hasModeratedReplies: r },
                                                conversationPosition: s,
                                                referringContext: d,
                                            } = t,
                                            { contextTweetId: m, promotedContent: p, socialContext: u, topicFollowPrompt: h } = d || {};
                                        return {
                                            contextTweetId: m,
                                            conversationAnnotation: n,
                                            hasModeratedReplies: !!(r && s && s.isStart),
                                            promotedContent: p,
                                            rootTweetAuthorId: c,
                                            socialContext: u,
                                            topicFollowPrompt: h,
                                            withHideReply: o,
                                            withInlineMedia: C,
                                            ...(o
                                                ? {
                                                      onTweetDismiss: () => {
                                                          a({ entry: t, feedbackKeys: [l.qt] });
                                                      },
                                                  }
                                                : {}),
                                            changeDropdownState: e,
                                            replyDropdownSelection: i,
                                        };
                                    },
                                    dismissable: !0,
                                    divider: (e) => ({ top: !1, bottom: !1 }),
                                    hideReplyContextMode: t,
                                }),
                                [p.Z.SelfThread]: (0, y.Cw)({ hideReplyContextMode: t }),
                                [p.Z.ReaderMode]: (0, y.Cw)({ hideConversationControlsEducationText: !0, hideExclusivityInfoEducationTextInReplies: !0, hideHighlightedUserLabel: !0, hideTrustedFriendsEducationTextInReplies: !0, isReaderMode: !0, shouldSelfThreadIncludeAvatar: !1, showWithheldBannerOnMyTweets: !1, tweetTextSize: d, withActionsDisabled: !1, withMuteConversation: !1, withRemoveFromBookmarks: !1, withSelfThread: !1, withUserPresence: !1 }),
                            },
                        },
                        [s.ZP.Tombstone]: { handlers: { [k]: (0, f._n)({ isFocalTweet: !0, isReaderMode: a, withHideReply: o }), [m.Z.Inline]: (0, f._n)({ isReaderMode: a, tweetDismissFeedbackKey: o ? l.qt : void 0, withHideReply: o }) } },
                        [s.ZP.Label]: u.ov({ selectDisplayType: (e) => ((e, t) => (t && e.content.text === E ? I.TransparentCursor : I.Default))(e, r), handlers: { [I.TransparentCursor]: b.L, [I.Default]: b.k } }),
                        [s.ZP.TimelineCursor]: (0, h.Z)({ withRuxInjections: Z }),
                        [s.ZP.ThreadHeader]: g.Z,
                    }),
                S = ({ contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: n, showOnlyRelevantReplies: l, socialContext: d, topicFollowPrompt: p }) => {
                    const u = (e) => (e.type === s.ZP.Tweet && e.content.id === o) || (e.type === s.ZP.Tombstone && !!e.content && !!e.content.tweet && e.content.tweet.id === o);
                    return (o) => {
                        const h = (0, r.Z)(o, u);
                        let b = !1;
                        const w = ((e, t) => {
                            const o = (0, a.Z)(e, (e) => "0" !== e.sortIndex);
                            return o[0].splice(t + 1, 0, ...o[1]), o[0];
                        })(o, h);
                        let g;
                        return (0, i.Z)(w, (o, a) => {
                            const r = o.type === s.ZP.TimelineCursor && (o.content.cursorType === c.CursorType.ShowMoreThreads || o.content.cursorType === c.CursorType.ShowMoreThreadsPrompt),
                                i = o.type === s.ZP.Label && o.content.text === E;
                            if (l && (r || i)) return void 0 === g && o.content.cursorType === c.CursorType.ShowMoreThreadsPrompt ? (T = a) : void 0 === g && (g = a), !1;
                            if (l && void 0 !== g && a >= g) return !1;
                            if (l && void 0 === g && a >= T) return !1;
                            const u = a > h;
                            if ((o.type !== s.ZP.Tweet && o.type !== s.ZP.Tombstone) || u) return o.type !== s.ZP.SelfThreadTweetComposer && o;
                            {
                                const r = !b;
                                if (((b = !0), a < h)) {
                                    if (o.type === s.ZP.Tweet) return B(o, r);
                                    if (o.type === s.ZP.Tombstone) return D(o, r);
                                } else {
                                    if (o.type === s.ZP.Tombstone) {
                                        const t = { isStart: r, isEnd: !0 };
                                        return o.content.displayType === m.Z.Inline ? _({ contextTweetId: e, entry: o, socialContext: d, topicFollowPrompt: p, conversationPosition: t }) : M({ entry: o, conversationPosition: t });
                                    }
                                    if (o.type === s.ZP.Tweet) return P({ originalEntry: o, contextTweetId: e, contextualClientEventInfo: t, socialContext: d, promotedContent: n, topicFollowPrompt: p, conversationPosition: { isStart: r, isEnd: !0, position: "focal", showReplyContext: !1 } });
                                }
                            }
                        });
                    };
                },
                P = ({ contextTweetId: e, contextualClientEventInfo: t, conversationPosition: o, originalEntry: a, promotedContent: n, socialContext: r, topicFollowPrompt: i }) => d.Wf({ ...a, conversationPosition: o, referringContext: { contextTweetId: e, contextualClientEventInfo: t, socialContext: r, promotedContent: n, topicFollowPrompt: i } }, { displayType: p.Z.FocalTweet }),
                _ = ({ contextTweetId: e, conversationPosition: t, entry: o, socialContext: a, topicFollowPrompt: n }) => d.Wf({ ...o, conversationPosition: t, referringContext: { contextTweetId: e, socialContext: a } }, { displayType: k }),
                M = ({ conversationPosition: e, entry: t }) => ({ ...t, conversationPosition: e }),
                B = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor", showReplyContext: !1 } }),
                D = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor" } });
        },
        702001: (e, t, o) => {
            o.d(t, { c: () => r });
            var a = o(516951),
                n = o(615656);
            const r = { [n.ZP.OtherUserSuspended]: { customAction: a.Z }, [n.ZP.StatusViewForbidden]: { customAction: a.Z } };
        },
        965728: (e, t, o) => {
            o.d(t, { C_: () => g, I5: () => h, K2: () => w, L$: () => l, Rb: () => b, nk: () => u, sI: () => y, xr: () => f });
            var a = o(202784),
                n = o(483677),
                r = o(782578),
                i = o(401339),
                c = o(521514);
            const s = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                l = (e) => {
                    const t = e && n.Z.getForGallery(e);
                    return t ? { rgb: f(t), rgba: s(t, 0.9) } : p;
                },
                d = c.Z.columnWidths.primary,
                m = (e, t) => Math.min(t, e),
                p = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                u = { transitionProperty: "background-color", transitionDuration: ".5s" },
                h = (e, t) => {
                    const { containerHeight: o, containerWidth: a, mediaHeight: n, mediaWidth: i } = e,
                        c = i && n ? i / n : 1,
                        s = c > 1,
                        l = t ? 400 : d,
                        p = s && (!i || i <= l) ? m(a, l) : a,
                        u = s || (n && !(n <= l)) ? o : m(o, l);
                    return r.Z.getContainDimensions({ width: p, height: u }, c);
                },
                b = (e) => {
                    const t = e && e.ext_media_color && e.ext_media_color.palette;
                    return l(t);
                },
                w = (e) => {
                    const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return l(t);
                },
                g = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return l(t);
                },
                f = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                C = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload.isZoomed, showControls: !t.payload.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                y = () => {
                    const [e, t] = a.useReducer(C, { isZoomed: !1, showControls: !0 });
                    return {
                        hideButtons: e.isZoomed || !e.showControls,
                        handleMediaDetailZoomed: function (e) {
                            t({ type: "zoom", payload: { isZoomed: e } });
                        },
                        handleMediaItemTapped: function () {
                            i.Z.isTouchSupported() && t({ type: "tap" });
                        },
                    };
                };
        },
        88158: (e, t, o) => {
            o.r(t), o.d(t, { ArticleMediaScreen: () => v, default: () => S });
            var a = o(202784),
                n = o(123751),
                r = o(290402),
                i = o(300234),
                c = o(827094),
                s = o(449067),
                l = o(4452),
                d = o(702001),
                m = o(965728),
                p = o(615027),
                u = o(71620),
                h = o(967262),
                b = o(793211),
                w = o(668214),
                g = o(794057),
                f = o(659773),
                C = o(836255);
            const y = (e, t) => t.match.params.screenName ?? "",
                Z = (e, t) => {
                    const { match: o } = t;
                    return o.params?.articleTweetId ? o.params.articleTweetId : "";
                },
                k = (e, t) => C.Z.selectFetchStatus(e, Z(0, t)),
                E = (e, t) => {
                    const { match: o } = t;
                    return o.params?.mediaId ? o.params.mediaId : "";
                },
                T = (e, t) => {
                    const o = Z(0, t),
                        a = o ? C.Z.selectHydrated(e, o) : void 0,
                        n = a?.article,
                        r = n?.cover_media,
                        i = n?.media_entities,
                        c = n?.content_state,
                        s = c ? (0, b.B$)(c, g.DC.MEDIA) : null;
                    return [
                        r,
                        ...((i && s
                            ? s?.reduce((e, t) => {
                                  const o = t?.data?.mediaItems?.map((e) => e?.mediaId),
                                      a = o?.map((e) => i?.find((t) => t?.media_id === e));
                                  return e.concat(a);
                              }, [])
                            : null) ??
                            i ??
                            []),
                    ]
                        .map((e) => (e ? (0, h.m)(e) : void 0))
                        .filter(Boolean);
                },
                I = (e, t) => {
                    const o = E(0, t),
                        a = T(e, t);
                    return a?.findIndex((e) => e?.id_str === o);
                },
                x = (0, w.Z)()
                    .propsFromState(() => ({ dataSaver: f.IX, fetchStatus: k, allMedia: T, currentIndex: I, screenName: y, focalTweetId: Z, tweet: C.Z.createHydratedTweetSelector(Z), mediaId: E }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("ARTICLE_MEDIA_DETAIL_SCREEN"), fetchTweetIfNeeded: C.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "article", section: "media" }),
                v = (e) => {
                    const { allMedia: t, createLocalApiErrorHandler: o, currentIndex: u, dataSaver: h, fetchStatus: b, fetchTweetIfNeeded: w, focalTweetId: g, history: f, mediaId: C, screenName: y, tweet: Z } = e,
                        k = a.useMemo(() => t[u], [t, u]),
                        E = (0, m.Rb)(k),
                        { handleMediaDetailZoomed: T, handleMediaItemTapped: I, hideButtons: x } = (0, m.sI)(),
                        v = () => {
                            f.goBack();
                        },
                        S = a.useMemo(() => (y && g ? `/${y}/article/${g}` : ""), [y, g]),
                        P = a.useCallback(() => {
                            g && w(g).catch(o(d.c));
                        }, [o, w, g]);
                    (0, l.ZP)();
                    const _ = (e) => {
                            if (e === C) return;
                            const o = t && t[e],
                                a = o?.id_str;
                            y && g && a && f.replace({ pathname: `/${y}/article/${g}/media/${a}` });
                        },
                        M = a.useCallback(() => {
                            if (Z && Z.user && y && Z && C && y.toLowerCase() !== Z.user.screen_name.toLowerCase()) {
                                const e = Z && Z.user ? `/${Z.user.screen_name}/article/${Z.id_str}/media/${C}` : null;
                                e && f.replace(e);
                            }
                        }, [f, C, y, Z]);
                    a.useEffect(() => {
                        P();
                    }, [P]),
                        a.useEffect(() => {
                            M();
                        }, [M]);
                    return a.createElement(
                        s.Z.Configure,
                        { headerless: !0 },
                        a.createElement(
                            c.Z,
                            { backgroundColor: E, hideButtons: x, mediaItem: k, onCloseButtonPress: v },
                            a.createElement(r.Z, {
                                fetchStatus: b,
                                onRequestRetry: P,
                                render: () => {
                                    const e = E.rgb;
                                    return g && t ? a.createElement(i.Z, { dataSaver: h, dominantColor: e, mediaIndex: u, mediaItems: t, onDismiss: v, onMediaDetailZoomed: T, onMediaItemChanged: _, onTap: I, videoId: n.Z.forTweet(g) }) : a.createElement(p.Z, { to: S });
                                },
                            }),
                        ),
                    );
                },
                S = x(v);
        },
        718970: (e, t, o) => {
            o.r(t), o.d(t, { ArticleReaderModeScreen: () => ge, default: () => fe });
            o(136728);
            var a = o(202784),
                n = o(325686),
                r = o(392237),
                i = o(731708),
                c = o(111677),
                s = o.n(c),
                l = o(323265),
                d = o(290402),
                m = o(933794),
                p = o(163301),
                u = o(449067),
                h = o(246134),
                b = o(785765),
                w = o(652904),
                g = o(292484),
                f = o(952793),
                C = o(4452),
                y = o(518966),
                Z = o(521514),
                k = o(655352),
                E = o(208115),
                T = o(293115),
                I = o(942893),
                x = o(725405),
                v = o(511582),
                S = o(615027),
                P = o(58881),
                _ = o(797553),
                M = o(143670),
                B = o(530732),
                D = o(154003),
                F = o(738398),
                R = o(818088),
                A = o(898361),
                O = o(73416),
                H = o(883069),
                N = o(837020),
                L = o(288955);
            const $ = s().gb303814,
                z = s().d6d9aab6,
                W = s().bb89cf46,
                U = s().a739d4ba,
                V = s().d5270434,
                j = r.default.isDarkMode() ? r.default.theme.colors.gray50 : r.default.theme.colors.gray0,
                q = P.Z.generate({ backgroundColor: r.default.theme.colors.primary, color: r.default.theme.colors.cellBackground, customFocusBackgroundColor: j, customHoverBackgroundColor: j, customPressedBackgroundColor: j }),
                G = (e) => {
                    e.stopPropagation();
                },
                K = ({ isBookmarked: e, isMobileLayout: t, onAddBookmark: o, onAddBookmarkFolder: r, onClose: c, onRemoveBookmark: s }) => {
                    const [l, d] = a.useState(!1),
                        m = () => {
                            d(!l);
                        },
                        p = () => {
                            o(), d(!1);
                        },
                        u = () => {
                            r(), d(!1);
                        },
                        h = () => {
                            s(), d(!1);
                        },
                        b = () => (l ? a.createElement(_.default, { isFixed: !0, onDismiss: m, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, e ? a.createElement(M.Z, { Icon: F.default, actionText: W, onClick: h }) : a.createElement(M.Z, { Icon: R.default, actionText: z, onClick: p }), a.createElement(M.Z, { Icon: A.default, actionText: U, onClick: u })) : null),
                        w = () => (e ? a.createElement(O.default, { style: t ? X.iconMobile : X.icon }) : a.createElement(H.default, { style: t ? X.iconMobile : X.icon })),
                        g = a.useMemo(() => (t ? X.iconMobile : X.icon), [t]),
                        f = a.useMemo(() => a.createElement(N.default, { style: g }), [g]),
                        C = a.useMemo(() => [X.actionBarWrapper, t ? X.actionBarWrapperMobile : void 0], [t]);
                    return a.createElement(
                        n.Z,
                        { style: C },
                        a.createElement(
                            n.Z,
                            { onClick: G, style: t ? X.outerContainer : void 0 },
                            a.createElement(
                                n.Z,
                                { style: t ? X.actionBarMobile : X.actionBar },
                                t
                                    ? a.createElement(
                                          a.Fragment,
                                          null,
                                          a.createElement(B.Z, { "aria-label": V, interactiveStyles: q, onPress: c, style: X.actionItem }, a.createElement(i.ZP, { color: "gray700" }, V)),
                                          a.createElement(L.Z, null, (e) => a.createElement(B.Z, { "aria-label": $, interactiveStyles: q, onPress: e(m), style: X.actionItem }, w())),
                                          b(),
                                      )
                                    : a.createElement(
                                          a.Fragment,
                                          null,
                                          a.createElement(n.Z, { style: X.buttonContainer }, a.createElement(D.ZP, { "aria-label": V, icon: f, onClick: c, type: "brandText" })),
                                          a.createElement(
                                              a.Fragment,
                                              null,
                                              a.createElement(
                                                  n.Z,
                                                  { style: X.buttonContainer },
                                                  a.createElement(L.Z, null, (e) => a.createElement(D.ZP, { "aria-label": $, icon: w(), onClick: e(m), type: "brandText" })),
                                                  b(),
                                              ),
                                          ),
                                      ),
                            ),
                        ),
                    );
                },
                X = r.default.create((e) => ({ actionBarWrapper: { backfaceVisibility: "hidden", height: "100%", width: "100%", start: 0, bottom: 0 }, actionBarWrapperMobile: { height: 0, position: "fixed" }, actionBar: { flexDirection: "row", justifyContent: "center", position: "fixed", start: e.spaces.space12, top: e.spaces.space12 }, actionBarMobile: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", bottom: e.spaces.space20, flexDirection: "row", justifyContent: "center", marginStart: "auto", marginEnd: "auto", minHeight: e.spaces.space40, overflow: "hidden", paddingEnd: e.spaces.space8, paddingStart: e.spaces.space8 }, actionItem: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "center", paddingHorizontal: e.spaces.space16 }, buttonContainer: { marginEnd: e.spaces.space4 }, emptyIconSpacer: { marginEnd: `calc(${e.spaces.space32} - ${e.spaces.space1})` }, icon: { color: e.colors.gray700, fontSize: e.spaces.space20, weight: "bold" }, iconMobile: { color: e.colors.gray700, weight: "bold" }, outerContainer: { bottom: 0, height: 0, paddingBottom: `${e.spaces.space32}`, start: 0, marginStart: "auto", marginEnd: "auto", position: "absolute", end: 0 } }));
            var Y = o(71620),
                J = o(668214),
                Q = o(550293),
                ee = o(601576),
                te = o(836255),
                oe = o(919022);
            const ae = (e, t) => t.match.params.screenName ?? "",
                ne = (e, t) => {
                    const o = ae(0, t);
                    return oe.ZP.selectByScreenName(e, o);
                },
                re = (e, t) => {
                    const { match: o } = t;
                    return o.params?.articleTweetId ? o.params.articleTweetId : "";
                },
                ie = (e, t) => {
                    const o = te.Z.selectHydrated(e, re(0, t));
                    return o?.bookmarked ?? !1;
                },
                ce = (e, t) => {
                    const o = re(0, t);
                    return o ? te.Z.selectHydrated(e, o) : void 0;
                },
                se = (e, t) => {
                    const o = re(0, t);
                    return o ? te.Z.selectFetchStatus(e, o) : void 0;
                },
                le = (0, J.Z)()
                    .propsFromState(() => ({ dmDrawerVisibility: Q.kX, dmPoppedOutConversationId: Q.gw, focalTweetId: re, isBookmarked: ie, screenName: ae, user: ne, tweet: ce, fetchStatus: se }))
                    .propsFromActions(() => ({ addToast: ee.fz, bookmark: te.Z.bookmark, createLocalApiErrorHandler: (0, Y.zr)("ARTICLE_READER_MODE_SCREEN"), popOutConversation: Q.DO, setDrawerVisibility: Q.bi, unbookmark: te.Z.unbookmark, fetchTweetIfNeeded: te.Z.fetchOneArticleIfNeeded })),
                de = s().i31dcd22,
                me = s().e3de2f6f({ entity: de }),
                pe = s().e64de8a9({ entity: de }),
                ue = { page: "tweet" },
                he = (e) => {
                    e.stopPropagation();
                },
                be = r.default.create((e) => ({ actionItem: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "center", paddingHorizontal: e.spaces.space16 }, container: { alignItems: "center", alignSelf: "center", backgroundColor: e.colors.cellBackground, cursor: "initial", height: "100%", maxHeight: "100%", marginStart: "auto", marginEnd: "auto", position: "relative", maxWidth: Z.Z.columnWidths.wide, width: "100%" }, containerOneCol: { paddingTop: e.spaces.space56 }, containerOneColSmall: { paddingTop: 0 }, icon: { color: e.colors.text, weight: "bold" }, innerWrapper: { height: "100%", width: "100%" }, mobileAppBarRightControl: { flexDirection: "row", alignItems: "center", height: e.spaces.space40 }, modal: { alignSelf: "center", backgroundColor: e.colors.gray50 }, rightControlAction: { height: "100%" }, root: { height: "100%", flexDirection: "row", paddingTop: e.spaces.space56, width: "100%" }, rootMobile: { paddingTop: 0 }, titleIcon: { marginBottom: e.spaces.space1 }, viewport: { backgroundColor: e.colors.cellBackground, overflow: "auto", width: "100%", maxHeight: "100%" } })),
                we = a.createElement(i.ZP, { style: be.titleIcon }, de),
                ge = ({ addToast: e, bookmark: t, createLocalApiErrorHandler: o, dmDrawerVisibility: r, dmPoppedOutConversationId: i, fetchStatus: c, fetchTweetIfNeeded: s, focalTweetId: Z, history: P, isBookmarked: _, location: M, popOutConversation: B, screenName: D, setDrawerVisibility: F, tweet: R, unbookmark: A, user: O }) => {
                    const H = (0, x.Z)();
                    (0, C.ZP)();
                    const N = (0, f.hC)("responsive_web_twitter_article_reader_enabled"),
                        L = l.ZP.isTwitterApp(),
                        $ = (0, E.q)({}, { location: M }),
                        [z] = a.useState(r),
                        [W] = a.useState(i),
                        U = a.useMemo(() => (R ? { items: [I.Z.getTweetItem(R)], tweet_id: R.id_str } : {}), [R]),
                        V = a.useCallback(() => {
                            if (R && R.user && D && R && D.toLowerCase() !== R.user.screen_name.toLowerCase()) {
                                const e = R && R.user ? `/${R.user.screen_name}/article/${R.id_str}` : null;
                                e && P.replace(e);
                            }
                        }, [P, D, R]);
                    a.useEffect(() => {
                        V();
                    }, [V]);
                    const j = a.useCallback(() => {
                        s(Z).finally(() => {
                            (0, C.jW)("article-content-ready");
                        });
                    }, [Z, s]);
                    a.useEffect(() => {
                        Z && j();
                    }, [j, Z]),
                        a.useEffect(
                            () => (
                                F(v.S.CLOSED),
                                () => {
                                    F(z), W && z === v.S.EXPANDED && B(W);
                                }
                            ),
                            [B, W, z, F],
                        );
                    const q = a.useMemo(() => `/${D}/status/${Z}`, [D, Z]),
                        G = a.useCallback(() => {
                            $ ? P.goBack() : P.push(q);
                        }, [$, P, q]),
                        X = a.useCallback(() => {
                            (() => {
                                const e = window.location.pathname.match(/^\/@?([_\w+]+)\/article\/([\d]+)$/),
                                    [t] = e || [];
                                return !!t;
                            })() && G();
                        }, [G]),
                        Y = a.useCallback(() => {
                            H.scribe({ action: "impression", component: "article", page: "tweet", data: U });
                        }, [H, U]),
                        J = a.useCallback(() => {
                            H.scribe({ action: "click", element: "reader_mode_menu_exit_button", page: "article", section: "reader_mode" }), Y(), G();
                        }, [H, G, Y]),
                        Q = a.useCallback(() => {
                            P.push({ pathname: "/i/bookmarks/add/", state: { tweet_id: Z } });
                        }, [P, Z]),
                        ee = a.useCallback(() => {
                            t(Z).then(
                                () => {
                                    e({ text: me });
                                },
                                (e) => {
                                    o(y.h)(e);
                                },
                            );
                        }, [t, Z, o, e]),
                        te = a.useCallback(() => {
                            A(Z).then(
                                () => {
                                    e({ text: pe });
                                },
                                (e) => {
                                    o(y.h)(e);
                                },
                            );
                        }, [A, Z, o, e]),
                        oe = a.useCallback((e) => a.createElement(K, { isBookmarked: _, isMobileLayout: e, onAddBookmark: ee, onAddBookmarkFolder: Q, onClose: J, onRemoveBookmark: te }), [_, ee, J, te, Q]),
                        ae = a.useCallback(() => a.createElement(S.Z, { to: q }), [q]),
                        ne = a.useCallback(() => {
                            const e = R?.article;
                            return R && e ? a.createElement(T.nO, { data: U, namespace: ue }, a.createElement(w.Z, null, a.createElement(p.ZP, { tweet: R }, a.createElement(h.ZP, { author: O, publishedPost: R, twitterArticle: e, withActionBar: !L, withReplyLink: L }), N ? a.createElement(b.ZP, null) : null))) : ae();
                        }, [N, L, ae, U, R, O]),
                        re = (0, k.ZP)(),
                        ie = a.useCallback((e) => [be.container, e ? (re ? be.containerOneCol : be.containerOneColSmall) : null], [re]),
                        ce = a.useCallback((e) => [be.root, e ? be.rootMobile : void 0], []),
                        se = a.useCallback((e, t) => a.createElement(n.Z, { style: ce(e) }, a.createElement(n.Z, { onClick: he, style: ie(e) }, a.createElement(n.Z, { style: be.innerWrapper }, a.createElement(d.Z, { fetchStatus: c, render: ne, renderFailure: ae, retryable: !1 }), e && !L ? oe(t) : null))), [ce, ie, c, ne, ae, L, oe]),
                        le = a.useMemo(() => ({ esc: X }), [X]),
                        de = (0, g.vS)(),
                        ge = (0, g.UZ)(),
                        fe = de || ge;
                    return a.createElement(a.Fragment, null, a.createElement(u.Z.Configure, { onBackClick: J, sideNav: oe(de), title: we, withForceTopNav: de }), se(fe, de), a.createElement(m.Z, { handlers: le }));
                },
                fe = le(ge);
        },
        507578: (e, t, o) => {
            o.r(t), o.d(t, { ReaderModeScreen: () => Oe, default: () => Le });
            o(136728);
            var a = o(202784),
                n = o(325686),
                r = o(154003),
                i = o(392237),
                c = o(111677),
                s = o.n(c),
                l = o(899174),
                d = o(912021),
                m = o(516951),
                p = o(323265),
                u = o(933794),
                h = o(449067),
                b = o(890882),
                w = o(652904),
                g = o(167630),
                f = o(218093),
                C = o(332878),
                y = o(163889),
                Z = o(87063),
                k = o(847933),
                E = o(56851),
                T = o(519125),
                I = o(810641),
                x = o(668214);
            const v = (e, t) => t.module.selectInitialFetchStatus(e),
                S = (e, t) => t.module.selectTopFetchStatus(e),
                P = (0, x.Z)().propsFromState(() => ({ moduleInitialFetchStatus: v, moduleTopFetchStatus: S })),
                _ = s().c299a6c0,
                M = (e) => (t, o) => t && t.content && !!t.content.id && t.content.id === e,
                B = P(({ focalTweetId: e, module: t, moduleInitialFetchStatus: o, moduleTopFetchStatus: n, rootTweetId: r, tweetTextSize: i }) => {
                    const c = (0, T.ZP)({ isCurrentUserRootAuthor: !0, withFocalTweetMedia: !0, isTransparentCursorsEnabled: !0, isReaderMode: !0, tweetTextSize: i }),
                        s = (r !== e && o === Z.Z.LOADING) || n === Z.Z.LOADING;
                    return a.createElement(I.Z, {
                        anchoring: C.Z,
                        entryConfiguration: c,
                        header: s ? a.createElement(g.Z, null) : void 0,
                        isInitialFocusEntry: r !== e ? M(e) : void 0,
                        key: i,
                        module: t,
                        olderAtTop: !0,
                        renderEmptyState: () => a.createElement(E.Z, null),
                        renderUnavailable: (e) => {
                            switch (e) {
                                case k.Z.NOT_FOUND:
                                    return a.createElement(E.Z, null);
                                case k.Z.NOT_ALLOWED:
                                    return a.createElement(f.Z, null);
                                default:
                                    return (0, y.ZP)(`Unhandled timeline unavailable reason: ${e}`), null;
                            }
                        },
                        title: _,
                    });
                });
            var D = o(292484),
                F = o(518966),
                R = o(655352),
                A = o(951790),
                O = o(293115),
                H = o(942893),
                N = o(725405),
                L = o(511582),
                $ = o(360142),
                z = o(71620),
                W = o(550293),
                U = o(601576),
                V = o(836255),
                j = o(919022);
            const q = (e, t) => t.match.params.screenName ?? void 0,
                G = (e, t) => {
                    const o = q(0, t) || "";
                    return j.ZP.selectByScreenName(e, o);
                },
                K = (e, t) => {
                    const { location: o, match: a } = t;
                    return a.params?.tweetId ? a.params.tweetId : o.query?.tweet_id && "string" == typeof o.query.tweet_id ? o.query.tweet_id : "";
                },
                X = (e, t) => {
                    const o = K(0, t),
                        a = V.Z.selectHydrated(e, o);
                    return a?.conversation_id_str || "";
                },
                Y = (e, t) => {
                    const o = V.Z.selectHydrated(e, K(0, t));
                    return o?.user?.screen_name || "";
                },
                J = (e, t) => {
                    const o = V.Z.selectHydrated(e, K(0, t));
                    return o?.bookmarked ?? !1;
                },
                Q = (0, x.Z)()
                    .propsFromState(() => ({ authorScreenName: Y, dmDrawerVisibility: W.kX, dmPoppedOutConversationId: W.gw, focalTweetId: K, isBookmarked: J, rootTweetId: X, screenName: q, user: G }))
                    .propsFromActions(() => ({ addToast: U.fz, bookmark: V.Z.bookmark, createLocalApiErrorHandler: (0, z.zr)("READER_MODE_SCREEN"), popOutConversation: W.DO, setDrawerVisibility: W.bi, unbookmark: V.Z.unbookmark }));
            var ee = o(58881),
                te = o(797553),
                oe = o(143670),
                ae = o(530732),
                ne = o(731708),
                re = o(738398),
                ie = o(818088),
                ce = o(898361),
                se = o(913973),
                le = o(73416),
                de = o(883069),
                me = o(106687),
                pe = o(837020);
            const ue = s().gb303814,
                he = s().d6d9aab6,
                be = s().bb89cf46,
                we = s().a739d4ba,
                ge = s().d5270434,
                fe = s().jcf3ff56,
                Ce = s().f1252ac8,
                ye = s().daa0da04,
                Ze = s().ba5256b2,
                ke = i.default.isDarkMode() ? i.default.theme.colors.gray50 : i.default.theme.colors.gray0,
                Ee = "body",
                Te = "headline1",
                Ie = "title3",
                xe = ee.Z.generate({ backgroundColor: i.default.theme.colors.primary, color: i.default.theme.colors.cellBackground, customFocusBackgroundColor: ke, customHoverBackgroundColor: ke, customPressedBackgroundColor: ke }),
                ve = ({ isBookmarked: e, isMobileLayout: t, onAddBookmark: o, onAddBookmarkFolder: i, onClose: c, onFontSizeChange: s, onRemoveBookmark: l, tweetTextSize: d }) => {
                    const [m, p] = a.useState(!1),
                        [u, h] = a.useState(!1),
                        b = () => {
                            p(!m);
                        },
                        w = () => {
                            h(!u);
                        },
                        g = () => {
                            o(), p(!1);
                        },
                        f = () => {
                            i(), p(!1);
                        },
                        C = () => {
                            l(), p(!1);
                        },
                        y = (e) => () => {
                            s(e), h(!1);
                        },
                        Z = () => (m ? a.createElement(te.default, { isFixed: !0, onDismiss: b, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, e ? a.createElement(oe.Z, { Icon: re.default, actionText: be, onClick: C }) : a.createElement(oe.Z, { Icon: ie.default, actionText: he, onClick: g }), a.createElement(oe.Z, { Icon: ce.default, actionText: we, onClick: f })) : null),
                        k = (e) => e === d,
                        E = () => a.createElement(n.Z, { style: Se.emptyIconSpacer }),
                        T = () => (u ? a.createElement(te.default, { isFixed: !0, onDismiss: w, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, a.createElement(oe.Z, { Icon: k(Ee) ? se.default : E, actionText: ye, onClick: y(Ee) }), a.createElement(oe.Z, { Icon: k(Te) ? se.default : E, actionText: Ce, onClick: y(Te) }), a.createElement(oe.Z, { Icon: k(Ie) ? se.default : E, actionText: fe, onClick: y(Ie) })) : null),
                        I = () => (e ? a.createElement(le.default, { style: t ? Se.iconMobile : Se.icon }) : a.createElement(de.default, { style: t ? Se.iconMobile : Se.icon }));
                    return a.createElement(
                        n.Z,
                        { style: [Se.actionBarWrapper, t ? Se.actionBarWrapperMobile : void 0] },
                        a.createElement(
                            n.Z,
                            {
                                onClick: (e) => {
                                    e.stopPropagation();
                                },
                                style: t ? Se.outerContainer : void 0,
                            },
                            a.createElement(n.Z, { style: t ? Se.actionBarMobile : Se.actionBar }, t ? a.createElement(a.Fragment, null, a.createElement(ae.Z, { "aria-label": ge, interactiveStyles: xe, onPress: c, style: Se.actionItem }, a.createElement(ne.ZP, { color: "gray700" }, ge)), a.createElement(ae.Z, { "aria-label": ue, interactiveStyles: xe, onPress: b, style: Se.actionItem }, I()), Z(), a.createElement(ae.Z, { "aria-label": Ze, interactiveStyles: xe, onPress: w, style: Se.actionItem }, a.createElement(me.default, { style: t ? Se.iconMobile : Se.icon })), T()) : a.createElement(a.Fragment, null, a.createElement(n.Z, { style: Se.buttonContainer }, a.createElement(r.ZP, { icon: a.createElement(pe.default, { style: t ? Se.iconMobile : Se.icon }), onClick: c, type: "brandText" })), a.createElement(a.Fragment, null, a.createElement(n.Z, { style: Se.buttonContainer }, a.createElement(r.ZP, { icon: I(), onClick: b, type: "brandText" }), Z()), a.createElement(n.Z, null, a.createElement(r.ZP, { icon: a.createElement(me.default, { style: t ? Se.iconMobile : Se.icon }), onClick: w, type: "brandText" }), T())))),
                        ),
                    );
                },
                Se = i.default.create((e) => ({ actionBarWrapper: { backfaceVisibility: "hidden", height: "100%", width: "100%", start: 0, bottom: 0 }, actionBarWrapperMobile: { height: 0, position: "fixed" }, actionBar: { flexDirection: "row", justifyContent: "center", position: "fixed", start: e.spaces.space12, top: e.spaces.space12 }, actionBarMobile: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", bottom: e.spaces.space20, flexDirection: "row", justifyContent: "center", marginStart: "auto", marginEnd: "auto", minHeight: e.spaces.space40, overflow: "hidden", paddingEnd: e.spaces.space8, paddingStart: e.spaces.space8 }, actionItem: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "center", paddingHorizontal: e.spaces.space16 }, buttonContainer: { marginEnd: e.spaces.space4 }, emptyIconSpacer: { marginEnd: `calc(${e.spaces.space32} - ${e.spaces.space1})` }, icon: { color: e.colors.gray700, fontSize: e.spaces.space20, weight: "bold" }, iconMobile: { color: e.colors.gray700, weight: "bold" }, outerContainer: { bottom: 0, height: 0, paddingBottom: `${e.spaces.space32}`, start: 0, marginStart: "auto", marginEnd: "auto", position: "absolute", end: 0 } })),
                Pe = s().cce3f116,
                _e = s().b593b396,
                Me = s().af9c8a3e,
                Be = s().c299a6c0,
                De = s().ef483238,
                Fe = { page: "thread", section: "reader_mode" },
                Re = (0, d.Z)((e, t) => (0, $.ZP)({ focalTweetId: e, fetchOptions: t, timelineIdPrefix: "reader" })),
                Ae = (0, d.Z)((e, t) => {
                    const { is_viewer_follows_user: o = !1 } = t ? H.Z.getUserItem(t) : {};
                    return { items: [H.Z.forThread(e, o)], tweet_id: e };
                }),
                Oe = ({ addToast: e, authorScreenName: t, bookmark: o, createLocalApiErrorHandler: i, dmDrawerVisibility: c, dmPoppedOutConversationId: s, focalTweetId: l, history: d, isBookmarked: g, location: f, popOutConversation: C, rootTweetId: y, screenName: Z, setDrawerVisibility: k, unbookmark: E, user: T }) => {
                    const I = (0, N.Z)(),
                        [x, v] = a.useState("headline1"),
                        [S] = a.useState(c),
                        [P] = a.useState(s),
                        _ = a.useCallback(() => {
                            const e = Ae(l, T);
                            T && l && I.scribe({ action: "impression", element: "view_thread", page: "thread", section: "reader_mode", data: e });
                        }, [I, l, T]);
                    a.useEffect(() => {
                        _();
                    }, [_]),
                        a.useEffect(
                            () => (
                                k(L.S.CLOSED),
                                () => {
                                    k(S), P && S === L.S.EXPANDED && C(P);
                                }
                            ),
                            [C, P, S, k],
                        );
                    const M = a.useCallback(() => {
                            I.scribe({ action: "click", element: "reader_mode_menu_exit_button", page: "thread", section: "reader_mode" }), d.goBack();
                        }, [I, d]),
                        H = (e) => {
                            e.stopPropagation();
                        },
                        $ = a.useCallback(() => !(!Z || !t) && Z.toLowerCase() !== t.toLowerCase(), [t, Z]),
                        z = a.useCallback(() => {
                            const e = t && l ? `/${t}/thread/${l}` : "/";
                            d.replace({ pathname: e, query: f.query, state: f.state });
                        }, [t, l, d, f.query, f.state]),
                        W = () => {
                            I.scribe({ action: "click", element: "reader_mode_header_icon_disable", page: "thread", section: "reader_mode" }), d.push({ pathname: U(), query: f.query, state: f.state });
                        },
                        U = () => (t && l ? `/${t}/status/${l}` : "/");
                    a.useEffect(() => {
                        l && t && $() && z();
                    }, [t, l, z, $]);
                    const V = () => {
                            d.push({ pathname: "/i/bookmarks/add/", state: { tweet_id: l } });
                        },
                        j = () => {
                            o(l).then(
                                () => {
                                    e({ text: Pe });
                                },
                                (e) => {
                                    i(F.h)(e);
                                },
                            );
                        },
                        q = () => {
                            E(l).then(
                                () => {
                                    e({ text: _e });
                                },
                                (e) => {
                                    i(F.h)(e);
                                },
                            );
                        },
                        G = (e) => a.createElement(ve, { isBookmarked: g, isMobileLayout: e, onAddBookmark: j, onAddBookmarkFolder: V, onClose: M, onFontSizeChange: v, onRemoveBookmark: q, tweetTextSize: x }),
                        K = () => A.Z.openApp(`twitter://thread/${l}`),
                        X = (0, D.vS)(),
                        Y = (0, D.UZ)(),
                        J = X || Y;
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(h.Z.Configure, {
                            onBackClick: M,
                            rightControl: (() => {
                                const e = p.ZP.isMobileOS();
                                return a.createElement(n.Z, { style: He.mobileAppBarRightControl }, e ? a.createElement(r.ZP, { onClick: K }, Me) : null, a.createElement(r.ZP, { "aria-label": De, icon: Ne, onClick: W, type: "brandText" }));
                            })(),
                            sideNav: G(X),
                            title: a.createElement(b.Z, { style: He.titleIcon, text: Be }),
                            withForceTopNav: X,
                        }),
                        a.createElement(
                            O.nO,
                            { data: { tweet_id: l }, namespace: Fe },
                            a.createElement(
                                w.Z,
                                null,
                                ((e, t) => {
                                    const o = (0, R.ZP)();
                                    let r;
                                    return e && o ? (r = He.containerOneCol) : e && (r = He.containerOneColSmall), a.createElement(n.Z, { style: [He.root, e ? He.rootMobile : void 0] }, a.createElement(n.Z, { onClick: H, style: [He.container, r] }, a.createElement(n.Z, { style: He.innerWrapper }, a.createElement(B, { focalTweetId: l, module: Re(l, { isReaderMode: !0 }), rootTweetId: y, tweetTextSize: x }), e ? G(t) : null)));
                                })(J, X),
                            ),
                        ),
                        a.createElement(u.Z, {
                            handlers: {
                                esc: (() => {
                                    const e = window.location.pathname.match(/\/@?([_\w+]+)\/thread\/([\d]+)\/?/),
                                        [t] = e || [];
                                    return !!t;
                                })()
                                    ? () => {
                                          d.goBack();
                                      }
                                    : m.Z,
                            },
                        }),
                    );
                },
                He = i.default.create((e) => ({ actionItem: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "center", paddingHorizontal: e.spaces.space16 }, container: { alignItems: "center", alignSelf: "center", backgroundColor: e.colors.cellBackground, cursor: "initial", height: "100%", maxHeight: "100%", marginStart: "auto", marginEnd: "auto", position: "relative", width: "600px" }, containerOneCol: { paddingTop: e.spaces.space56, width: "100%" }, containerOneColSmall: { paddingTop: 0, width: "100%" }, icon: { color: e.colors.text, weight: "bold" }, innerWrapper: { height: "100%", width: "100%" }, mobileAppBarRightControl: { flexDirection: "row", alignItems: "center", height: e.spaces.space40 }, modal: { alignSelf: "center", backgroundColor: e.colors.gray50 }, rightControlAction: { height: "100%" }, root: { height: "100%", flexDirection: "row", paddingTop: e.spaces.space56, width: "100%" }, rootMobile: { paddingTop: 0 }, titleIcon: { marginBottom: e.spaces.space1 }, viewport: { backgroundColor: e.colors.cellBackground, overflow: "auto", width: "100%", maxHeight: "100%" } })),
                Ne = a.createElement(l.default, { style: He.icon }),
                Le = Q(Oe);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ReaderMode-e019dbda.be6b150a.js.map
