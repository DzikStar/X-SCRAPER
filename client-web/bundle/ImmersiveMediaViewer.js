"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ImmersiveMediaViewer", "bundle.AudioSpaceDetail"],
    {
        349035: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(202784),
                r = o(272175);
            const a = (0, o(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(r.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        572067: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(202784),
                r = o(272175);
            const a = (e) => {
                const { canonical: t, description: o = "", image: a, imageAlt: i, imageH: s, imageType: d, imageW: l, title: c, ttl: u, type: h } = e;
                return n.createElement(r.ql, null, h ? n.createElement("meta", { content: h, property: "og:type" }) : null, t ? n.createElement("meta", { content: t, property: "og:url" }) : null, c ? n.createElement("meta", { content: c, property: "og:title" }) : null, n.createElement("meta", { content: o, property: "og:description" }), a ? n.createElement("meta", { content: a, property: "og:image" }) : null, d ? n.createElement("meta", { content: d, property: "og:image:type" }) : null, l ? n.createElement("meta", { content: l, property: "og:image:width" }) : null, s ? n.createElement("meta", { content: s, property: "og:image:height" }) : null, i ? n.createElement("meta", { content: i, property: "og:image:alt" }) : null, u ? n.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        218093: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(420740),
                a = o(111677);
            const i = o.n(a)().b2311b70;
            function s() {
                return n.createElement(r.Z, { onRetry: null, title: i });
            }
            const d = n.memo(s);
        },
        579051: (e, t, o) => {
            o.d(t, { f: () => r });
            o(202784);
            class n {
                constructor(e, t, o, n, r) {
                    (this.id = e), (this._renderer = o), (this.canBeAnchor = n), (this.data = t), (this.sortIndex = r);
                }
                render(e) {
                    const { _renderer: t, data: o } = this;
                    return t(o, e);
                }
            }
            const r = (e, t, o, r, a = "-1") => new n(e, t, o, r, a);
        },
        719536: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = Object.freeze({ MOVEMENT: "movement", LIST_UPDATE: "list_update", INITIAL_POSITION: "initial_position" });
        },
        332878: (e, t, o) => {
            o.d(t, { Z: () => l });
            function n(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const r = (e, t, o) => {
                    const n = e(t),
                        r = e(o);
                    return !n && r ? -1 : n && !r ? 1 : 0;
                },
                a = (e, t, o) => i(e(o), e(t)),
                i = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                s = (e, t) => {
                    if (e.length) return e.reduce((e, o) => (t(o, e) > 0 ? o : e));
                },
                d = ({ nextPos: e, prevPos: t }) => {
                    const o = t.getForViewport(),
                        i = (e) => e && e.doesIntersectWith(o),
                        d = (e) => (e ? Math.abs(o.getTop() - e.getTop()) : 1 / 0),
                        l = e.getList().filter(({ id: o }) => !n(o) && t.isRendered(o) && e.isRendered(o)),
                        c =
                            l.length > 0
                                ? s(l, (e, o) => {
                                      const n = t.getForItem(e.id),
                                          s = t.getForItem(o.id);
                                      return r(i, n, s) || a(d, n, s);
                                  })
                                : null;
                    return c && c.id;
                },
                l = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, t) => {
                        const { distanceToViewportBottom: o, distanceToViewportTop: n, id: r } = t;
                        if ("number" == typeof n) {
                            const t = e.getForViewport().getTop() + n;
                            return e.getForItem(r).getTop() - t;
                        }
                        if ("number" == typeof o) {
                            const t = e.getForViewport().getBottom() + o;
                            return e.getForItem(r).getBottom() - t;
                        }
                        return 0;
                    },
                    scrollHeadroom: (e) => {
                        const t = e.getForList().getBottom(),
                            o = e.getForViewport().getBottom();
                        return Math.max(0, o - t);
                    },
                    anchorCandidates: (e) => {
                        const t = e.getForViewport().getTop();
                        return e
                            .findVisibleItems()
                            .filter(({ id: e }) => !n(e))
                            .map(({ id: e, rectangle: o }) => ({ id: e, distanceToViewportTop: o.getTop() - t }));
                    },
                    pinToNewestWhenAtNewest: !1,
                    offsetCorrection(e, t) {
                        if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToNewestWhenAtNewest) return 0;
                        const o = d({ prevPos: e, nextPos: t });
                        if (o) {
                            const n = e.getForItem(o).getTop() - e.getForViewport().getTop();
                            return t.getForItem(o).getTop() - t.getForViewport().getTop() - n;
                        }
                        return 0;
                    },
                };
        },
        56851: (e, t, o) => {
            o.d(t, { Z: () => w });
            var n = o(202784),
                r = o(420740),
                a = o(108362),
                i = o(731708),
                s = o(154003),
                d = o(392237),
                l = o(111677),
                c = o.n(l),
                u = o(349035);
            const h = "error-detail",
                p = c().e49537c2,
                m = c().a9ae1e78;
            class w extends n.PureComponent {
                render() {
                    return n.createElement(r.Z, { testID: h }, n.createElement(u.Z, null), n.createElement(a.Z, { style: b.root }, n.createElement(i.ZP, { align: "center", color: "gray700", style: b.retryText }, p), n.createElement(s.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const b = d.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(500002),
                a = o(668214),
                i = o(997174),
                s = o(118823);
            const d = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class l extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: a, search: i },
                            locationKey: s,
                        } = e;
                    let d = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (d = !0));
                    const l = r || s;
                    ((l && r !== s) || (!l && o !== a) || n !== i || d) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const c = (0, r.ZP)(d(l));
        },
        167496: (e, t, o) => {
            o.d(t, { Z: () => m, r: () => p });
            var n = o(202784),
                r = o(154003),
                a = o(811176),
                i = o(111677),
                s = o.n(i),
                d = o(517747);
            const l = s().d7b8ebaa,
                c = s().d601fc20,
                u = s().j43f99be,
                h = s().ad6e11ac,
                p = Object.freeze({ relevance: "relevance", recency: "recency", likes: "likes" });
            function m({ replyDropdownSelection: e = p.relevance, changeDropdownState: t }) {
                const o = n.useCallback(
                        (e) => () => {
                            t?.(e);
                        },
                        [t],
                    ),
                    i = n.useMemo(
                        () => [
                            { isSelected: p.relevance === e, onClick: o(p.relevance), selectable: !0, text: u },
                            { isSelected: p.recency === e, onClick: o(p.recency), selectable: !0, text: c },
                            { isSelected: p.likes === e, onClick: o(p.likes), selectable: !0, text: l },
                        ],
                        [o, e],
                    );
                return n.createElement(r.ZP, { "aria-haspopup": "menu", icon: n.createElement(d.default, null), renderMenu: (e) => n.createElement(a.Z, { description: h, items: i, onCloseRequested: e, shouldCloseOnClick: !0 }), type: "primaryText" });
            }
        },
        519125: (e, t, o) => {
            o.d(t, { Mu: () => S, ZP: () => E });
            var n = o(662678),
                r = o(769471),
                a = o(337637),
                i = o(459679),
                s = o(192337),
                d = o(962741),
                l = o(372703),
                c = o(466015),
                u = o(267483),
                h = o(263863),
                p = o(351322),
                m = o(37533),
                w = o(777809),
                b = o(652815),
                f = o(560520),
                D = o(367991),
                y = o(705638),
                g = o(801184),
                T = o(335632);
            const I = "FocalTweetInlineTombstone",
                M = "More Replies";
            let v;
            const C = Object.freeze({ Default: "ui_defaultLabel", TransparentCursor: "ui_transparentCursor" }),
                P = { ...(0, T.G)({}), [d.ZP.Tweet]: (0, y.Z)({ hideConversationControlsEducationText: !0, withMuteConversation: !0 }) },
                E = ({ changeDropdownState: e, hideReplyContextMode: t, isCurrentUserRootAuthor: o, isReaderMode: n, isTransparentCursorsEnabled: a, replyDropdownSelection: i, rootTweetAuthorId: s, tweetTextSize: c, withFocalTweetMedia: y, withRuxInjections: T }) =>
                    (0, r.Z)({}, P, {
                        [d.ZP.SelfThreadTweetComposer]: b.Z,
                        [d.ZP.Tweet]: {
                            handlers: {
                                [h.Z.Tweet]: (0, g.Cw)({
                                    hideConversationControlsEducationText: !0,
                                    hideExclusivityInfoEducationTextInReplies: !0,
                                    hideTrustedFriendsEducationTextInReplies: !0,
                                    createAdditionalProps: (e, { applyFeedbackAction: t }) => {
                                        const n = { withHideReply: o, showMidConversationControlEducationText: !0, withUnhideReply: !1, withViewHiddenReplies: !0 },
                                            r = !!(e.content && e.content.hasModeratedReplies && e.conversationPosition && e.conversationPosition.isStart);
                                        return (
                                            (n.conversationAnnotation = e?.content?.conversation_annotation),
                                            (n.hasModeratedReplies = r),
                                            (n.rootTweetAuthorId = s),
                                            o &&
                                                (n.onTweetDismiss = () => {
                                                    t({ entry: e, feedbackKeys: [l.qt] });
                                                }),
                                            n
                                        );
                                    },
                                    dismissable: !0,
                                    hideReplyContextMode: t,
                                    withMuteConversation: !0,
                                }),
                                [h.Z.FocalTweet]: (0, g.g6)({
                                    createAdditionalProps: (t, { applyFeedbackAction: n }) => {
                                        const {
                                                content: { conversation_annotation: r, hasModeratedReplies: a },
                                                conversationPosition: d,
                                                referringContext: c,
                                            } = t,
                                            { contextTweetId: u, promotedContent: h, socialContext: p, topicFollowPrompt: m } = c || {};
                                        return {
                                            contextTweetId: u,
                                            conversationAnnotation: r,
                                            hasModeratedReplies: !!(a && d && d.isStart),
                                            promotedContent: h,
                                            rootTweetAuthorId: s,
                                            socialContext: p,
                                            topicFollowPrompt: m,
                                            withHideReply: o,
                                            withInlineMedia: y,
                                            ...(o
                                                ? {
                                                      onTweetDismiss: () => {
                                                          n({ entry: t, feedbackKeys: [l.qt] });
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
                                [h.Z.SelfThread]: (0, g.Cw)({ hideReplyContextMode: t }),
                                [h.Z.ReaderMode]: (0, g.Cw)({ hideConversationControlsEducationText: !0, hideExclusivityInfoEducationTextInReplies: !0, hideHighlightedUserLabel: !0, hideTrustedFriendsEducationTextInReplies: !0, isReaderMode: !0, shouldSelfThreadIncludeAvatar: !1, showWithheldBannerOnMyTweets: !1, tweetTextSize: c, withActionsDisabled: !1, withMuteConversation: !1, withRemoveFromBookmarks: !1, withSelfThread: !1, withUserPresence: !1 }),
                            },
                        },
                        [d.ZP.Tombstone]: { handlers: { [I]: (0, D._n)({ isFocalTweet: !0, isReaderMode: n, withHideReply: o }), [u.Z.Inline]: (0, D._n)({ isReaderMode: n, tweetDismissFeedbackKey: o ? l.qt : void 0, withHideReply: o }) } },
                        [d.ZP.Label]: p.ov({ selectDisplayType: (e) => ((e, t) => (t && e.content.text === M ? C.TransparentCursor : C.Default))(e, a), handlers: { [C.TransparentCursor]: w.L, [C.Default]: w.k } }),
                        [d.ZP.TimelineCursor]: (0, m.Z)({ withRuxInjections: T }),
                        [d.ZP.ThreadHeader]: f.Z,
                    }),
                S = ({ contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: r, showOnlyRelevantReplies: l, socialContext: c, topicFollowPrompt: h }) => {
                    const p = (e) => (e.type === d.ZP.Tweet && e.content.id === o) || (e.type === d.ZP.Tombstone && !!e.content && !!e.content.tweet && e.content.tweet.id === o);
                    return (o) => {
                        const m = (0, a.Z)(o, p);
                        let w = !1;
                        const b = ((e, t) => {
                            const o = (0, n.Z)(e, (e) => "0" !== e.sortIndex);
                            return o[0].splice(t + 1, 0, ...o[1]), o[0];
                        })(o, m);
                        let f;
                        return (0, i.Z)(b, (o, n) => {
                            const a = o.type === d.ZP.TimelineCursor && (o.content.cursorType === s.CursorType.ShowMoreThreads || o.content.cursorType === s.CursorType.ShowMoreThreadsPrompt),
                                i = o.type === d.ZP.Label && o.content.text === M;
                            if (l && (a || i)) return void 0 === f && o.content.cursorType === s.CursorType.ShowMoreThreadsPrompt ? (v = n) : void 0 === f && (f = n), !1;
                            if (l && void 0 !== f && n >= f) return !1;
                            if (l && void 0 === f && n >= v) return !1;
                            const p = n > m;
                            if ((o.type !== d.ZP.Tweet && o.type !== d.ZP.Tombstone) || p) return o.type !== d.ZP.SelfThreadTweetComposer && o;
                            {
                                const a = !w;
                                if (((w = !0), n < m)) {
                                    if (o.type === d.ZP.Tweet) return R(o, a);
                                    if (o.type === d.ZP.Tombstone) return k(o, a);
                                } else {
                                    if (o.type === d.ZP.Tombstone) {
                                        const t = { isStart: a, isEnd: !0 };
                                        return o.content.displayType === u.Z.Inline ? Z({ contextTweetId: e, entry: o, socialContext: c, topicFollowPrompt: h, conversationPosition: t }) : x({ entry: o, conversationPosition: t });
                                    }
                                    if (o.type === d.ZP.Tweet) return _({ originalEntry: o, contextTweetId: e, contextualClientEventInfo: t, socialContext: c, promotedContent: r, topicFollowPrompt: h, conversationPosition: { isStart: a, isEnd: !0, position: "focal", showReplyContext: !1 } });
                                }
                            }
                        });
                    };
                },
                _ = ({ contextTweetId: e, contextualClientEventInfo: t, conversationPosition: o, originalEntry: n, promotedContent: r, socialContext: a, topicFollowPrompt: i }) => c.Wf({ ...n, conversationPosition: o, referringContext: { contextTweetId: e, contextualClientEventInfo: t, socialContext: a, promotedContent: r, topicFollowPrompt: i } }, { displayType: h.Z.FocalTweet }),
                Z = ({ contextTweetId: e, conversationPosition: t, entry: o, socialContext: n, topicFollowPrompt: r }) => c.Wf({ ...o, conversationPosition: t, referringContext: { contextTweetId: e, socialContext: n } }, { displayType: I }),
                x = ({ conversationPosition: e, entry: t }) => ({ ...t, conversationPosition: e }),
                R = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor", showReplyContext: !1 } }),
                k = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor" } });
        },
        927192: (e, t, o) => {
            o.d(t, { Z: () => E });
            var n = o(202784),
                r = o(111677),
                a = o.n(r),
                i = o(912021),
                s = o(218093),
                d = o(334346),
                l = o(332878),
                c = o(163889),
                u = o(466015),
                h = o(847933),
                p = o(519896),
                m = o(443781),
                w = o(56851),
                b = o(810641),
                f = o(438965),
                D = o(668214);
            const y = (e, t) => {
                    const o = t.module.selectTimeline(e);
                    return !!o && o.terminatedStatus.atTop;
                },
                g = (e, t) => t.location.state && t.location.state.contextualClientEventInfo,
                T = (0, D.Z)().propsFromState(() => ({ isTimelineTerminatedAtTop: y, contextualClientEventInfo: g }));
            var I = o(519125);
            const M = a().d35d74e4,
                v = (e) => {
                    switch (e) {
                        case h.Z.NOT_FOUND:
                            return n.createElement(w.Z, null);
                        case h.Z.NOT_ALLOWED:
                            return n.createElement(s.Z, null);
                        default:
                            return (0, c.ZP)(`Unhandled timeline unavailable reason: ${e}`), null;
                    }
                },
                C = () => n.createElement(w.Z, null);
            class P extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._isInitialFocusEntry = (e, t) => {
                            const { focalTweetId: o, location: n } = this.props;
                            return !!!n.state?.focusComposer && e && e.content && !!e.content.id && e.content.id === o;
                        }),
                        (this._getMemoizedPreprocessor = (0, i.Z)((e, t, o, n, r, a, i) => (0, I.Mu)({ focalTweetId: r, contextTweetId: t, contextualClientEventInfo: o, socialContext: e, topicFollowPrompt: a, promotedContent: n, showOnlyRelevantReplies: i }))),
                        (this._getPreprocessor = () => {
                            const { contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: n, socialContext: r, topicFollowPrompt: a } = this.props;
                            return this._getMemoizedPreprocessor(r, e, t, n, o, a, !1);
                        }),
                        (this._getMemoizedEntryConfig = (0, i.Z)((e, t, o, n, r, a) => {
                            const i = e && n && e === n;
                            return (0, I.ZP)({ changeDropdownState: this.props.changeDropdownState, isCurrentUserRootAuthor: !!i, hideReplyContextMode: t, replyDropdownSelection: o, rootTweetAuthorId: n, withFocalTweetMedia: r, withRuxInjections: a });
                        })),
                        (this._getEntryConfig = () => {
                            const e = this.props,
                                t = e.rootTweet?.user.id_str,
                                o = this.context.viewerUserId,
                                n = e.withFocalTweetMedia,
                                r = e.replyDropdownSelection,
                                a = this.context.featureSwitches.isTrue("rweb_tweets_reply_context_hidden") ? f.j.CONVERSATION : void 0,
                                i = e.withRuxInjections;
                            return this._getMemoizedEntryConfig(o, a, r, t, n, i);
                        });
                }
                render() {
                    const { apiErrorHandlerMap: e, fetchOptions: t, module: o, onEntriesRendered: r } = this.props;
                    return n.createElement(b.Z, { anchoring: l.Z, apiErrorHandlerMap: e, entryConfiguration: this._getEntryConfig(), fetchOptions: t, isInitialFocusEntry: this._isInitialFocusEntry, module: o, nearStartProximityRatio: 2, olderAtTop: !0, onEntriesRendered: r, preprocessEntryList: this._getPreprocessor(), prerollDisplayLocation: p.Nw.OTHER, previewEntries: this._previewEntries(), refreshControl: null, renderEmptyState: C, renderUnavailable: v, title: M });
                }
                _previewEntries() {
                    const { focalTweet: e } = this.props,
                        t = e?.id_str || "";
                    return e ? [u.Se({ id: t, sortIndex: d.Z })] : void 0;
                }
            }
            (P.defaultProps = { withFocalTweetMedia: !0 }), (P.contextType = m.rC);
            const E = T(P);
        },
        438965: (e, t, o) => {
            o.d(t, { FE: () => a, Hx: () => d, Oj: () => r, P3: () => l, QO: () => s, j: () => i });
            var n = o(942893);
            const r = { component: "tweet" },
                a = { component: "thread" },
                i = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                s =
                    (e = !1) =>
                    (t) => {
                        const { conversationPosition: o, conversationTreeMetadata: n } = t;
                        return !(e || (o && !o.isEnd && (!n || !1 !== n.descendantConnector || 0 !== n.indents.filter((e) => "line" === e.displayType).length)));
                    },
                d = (e) => n.Z.getTweetURTEntryItem(e),
                l = (e, t, o) => {
                    const n = ["descendant", "ancestor"].includes(o?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === o?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: n, component: t?.component || e.component, action: t?.action || e.action, element: t?.element || e.element };
                };
        },
        340179: (e, t, o) => {
            o.d(t, { i: () => i });
            var n = o(516951),
                r = o(615656),
                a = o(51525);
            const i = (e = "") => ({
                [r.ZP.GenericNotFound]: { customAction: n.Z },
                [r.ZP.NotAuthorizedToViewUser]: {
                    customAction: () => {
                        (0, a.DR)(`/${e}`, { statusCode: 401 });
                    },
                },
                [r.ZP.StatusViewForbidden]: {
                    customAction: () => {
                        (0, a.DR)(`/${e}`);
                    },
                },
                showToast: !0,
            });
        },
        335636: (e, t, o) => {
            o.d(t, { H: () => a, V: () => i });
            o(571372);
            var n = o(202784),
                r = o(516951);
            const a = n.createContext({ blockedOrMutedEntryIds: new Set(), forwardPivotInfo: void 0, hasClosedCaptioning: !0, isMuted: !1, setTweetContentHidden: r.Z, isTweetContentHidden: !1, setHasClosedCaptioning: r.Z, onMuteToggle: r.Z, onTweetUpdate: r.Z, setBlockedOrMutedEntry: r.Z });
            function i() {
                const e = n.useContext(a);
                if (void 0 === e) throw new Error("useImmersiveMediaViewerContext was used outside of its provider ImmersiveMediaViewerContext");
                return e;
            }
        },
        897695: (e, t, o) => {
            o.r(t), o.d(t, { ImmersiveMediaViewerScreen: () => Ie, default: () => ve });
            o(136728), o(543673), o(240753), o(128399);
            var n = o(202784),
                r = o(878052),
                a = o(325686),
                i = o(688715),
                s = o(392237),
                d = o(111677),
                l = o.n(d),
                c = o(370751),
                u = o(187669),
                h = o(572067),
                p = o(449067),
                m = o(807896),
                w = o(335636),
                b = o(912021),
                f = o(2138),
                D = o(166852),
                y = o(516951),
                g = o(143778),
                T = o(163889),
                I = o(163390),
                M = o(768572),
                v = o(933794),
                C = o(579051),
                P = o(719536),
                E = o(476984),
                S = o.n(E),
                _ = o(214997),
                Z = o(837880),
                x = o(908478),
                R = o(323265),
                k = o(993547),
                A = o(725516),
                F = o(609927);
            class N extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._contentsFocusable = !1),
                        (this._setRef = (e) => {
                            const { item: t, setAPI: o } = this.props;
                            o && (e ? ((this._element = e), o(t.id, this)) : (o(t.id, void 0), (this._element = void 0)));
                        }),
                        (this._setIsItemFocusable = (e) => {
                            this._contentsFocusable = e;
                        });
                }
                shouldComponentUpdate(e) {
                    const { item: t } = this.props;
                    return !(0, x.Z)(e.item, t);
                }
                componentWillUnmount() {
                    this.props.setAPI && this.props.setAPI(this.props.item.id, void 0);
                }
                componentDidUpdate(e) {
                    const { item: t, setAPI: o } = this.props;
                    e.item.id !== t.id && o && (o(e.item.id, void 0), o(t.id, this));
                }
                getElement() {
                    return this._element;
                }
                isFocusable() {
                    return this._contentsFocusable;
                }
                render() {
                    const { item: e } = this.props;
                    return n.createElement("div", { "data-testid": `cellInnerDiv-${e.id}`, ref: this._setRef }, e.render(this._setIsItemFocusable));
                }
            }
            const H = s.default.supports("height: 100dvh");
            class B extends n.Component {
                constructor(e) {
                    super(e),
                        (this._scrollRef = n.createRef()),
                        (this._isSafari = R.ZP.isSafari() || R.ZP.isIOS()),
                        (this._lastItemIndexRef = n.createRef()),
                        (this._getCurrentItemIndexMemoized = (0, b.Z)((e, t) => e.findIndex((e) => e.id === t))),
                        (this._getCurrentItemIndex = () => {
                            const { list: e } = this.props;
                            if (!this.state.visibleItemId) return 0;
                            const t = this._getCurrentItemIndexMemoized(e, this.state.visibleItemId);
                            if (-1 === t) {
                                return this._lastItemIndexRef.current || 0;
                            }
                            return (this._lastItemIndexRef.current = t), t;
                        }),
                        (this._handleWindowResize = () => {
                            this.setState({ windowInnerHeight: window.innerHeight });
                        }),
                        (this._calculateNearestSnapStopPosition = (e, t) => {
                            const o = Math.floor(e / t);
                            return e % t >= t / 2 ? o + 1 : o;
                        }),
                        (this._handleScroll = (e) => {
                            const t = Math.round(e.nativeEvent.contentOffset.y),
                                o = window.innerHeight || 1,
                                n = this._calculateNearestSnapStopPosition(t, o);
                            this._updateScrollEnd(n);
                        }),
                        (this._updateScrollEnd = (0, f.Z)((e) => {
                            const { analytics: t, onPositionUpdate: o, onScrollEnd: n, viewport: r } = this.props,
                                a = this._getCurrentItemIndex(),
                                i = e;
                            a !== i && (t.scribe({ action: "scroll", data: { event_value: window.innerHeight } }), i > a && t.scribe({ component: "feed", action: "next" }), i < a && t.scribe({ component: "feed", action: "previous" }), i === this.props.list.length - 2 && t.scribe({ action: "load", element: "bottom" }), o(i, r.getRect()), n(), this.setState(({ visibleItemId: e }) => ({ visibleItemId: this.props.list[i] ? this.props.list[i].id : e })));
                        }, 100)),
                        (this.adjustFocusBy = (e) => {
                            this.setState(({ windowInnerHeight: t }) => {
                                const o = this._getCurrentItemIndex(),
                                    n = (0, Z.Z)(o + e, 0, this.props.list.length - 1);
                                return this._scrollRef.current?.scrollTo({ y: t * n, animated: !0 }), { visibleItemId: this.props.list[n].id };
                            });
                        }),
                        (this.scrollToIndex = (e) => {
                            this.setState(({ windowInnerHeight: t }) => {
                                const o = Math.min(this.props.list.length - 1, e);
                                return this._scrollRef.current?.scrollTo({ y: t * o, animated: !1 }), { visibleItemId: this.props.list[o].id };
                            });
                        }),
                        (this.scrollToNewest = () => {
                            this.setState(() => (this._scrollRef.current?.scrollTo({ y: 0, animated: !1 }), { visibleItemId: this.props.list.length ? this.props.list[0].id : void 0 }));
                        }),
                        (this.isAtNewest = () => !!this.props.list.length && this.state.visibleItemId === this.props.list[0].id),
                        (this._lastItemIndexRef.current = 0),
                        (this.state = { visibleItemId: e.list.length ? e.list[0].id : void 0, windowInnerHeight: window.innerHeight }),
                        window.addEventListener("resize", this._handleWindowResize);
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this._handleWindowResize);
                }
                render() {
                    const e = H ? "100dvh" : `${this.state.windowInnerHeight}px`,
                        t = this._getCurrentItemIndex();
                    return n.createElement(
                        F.Z.Provider,
                        { value: { isGlobal: !1, isSticky: !1, adjustFocusBy: this.adjustFocusBy, currentIndex: t, totalItems: this.props.list.length } },
                        n.createElement(
                            a.Z,
                            { style: { height: e, maxHeight: e } },
                            n.createElement(
                                _.Z,
                                { onScroll: this._handleScroll, ref: this._scrollRef, scrollEventThrottle: 16, showsHorizontalScrollIndicator: !1, showsVerticalScrollIndicator: !1, style: U.scrollView, testID: "vss-scroll-view" },
                                this.props.list.map((o, r) => {
                                    const i = Math.abs(t - r) <= 1;
                                    return n.createElement(a.Z, { key: o.id, style: { height: e, maxHeight: e, width: "100%" } }, n.createElement(a.Z, { style: U.scrollSnapItem }, n.createElement(a.Z, { style: U.scrollSnapItemInner }, i && n.createElement(N, { item: o, key: o.id }))));
                                }),
                            ),
                        ),
                    );
                }
                shouldComponentUpdate(e, t) {
                    return !S()(this.props, e) || !(0, x.Z)(this.state, t);
                }
                componentDidMount() {
                    const e = new URLSearchParams(window.location.search).get("currentTweet");
                    e && this._scrollToCurrentTweet(e);
                }
                componentDidUpdate(e) {
                    const t = new URLSearchParams(window.location.search).get("currentTweet");
                    this.props.list.length !== e.list.length && t && this._scrollToCurrentTweet(t);
                }
                _scrollToCurrentTweet(e) {
                    const t = this.props.list.findIndex((t) => t.id === `tweet-${e}`);
                    t >= 0 && this.scrollToIndex(t);
                }
            }
            const U = s.default.create(() => ({ scrollView: { overflowY: "auto", scrollSnapType: "y mandatory", height: "100%" }, scrollSnapItem: { width: "100%", scrollSnapAlign: "start", scrollSnapStop: "always" }, scrollSnapItemInner: { height: window.innerHeight, width: "100%" } })),
                O = (0, k.Z)((0, A.Z)(B)),
                V = { triggerCause: P.Z.MOVEMENT };
            class L extends n.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._renderer = n.createRef()),
                        (this._keyboardShortcutHandlers = { [I.uq.refresh]: this._handleKeyboardRefresh, [I.uq.nextItem]: this._handleKeyboardFocusNext, [I.uq.previousItem]: this._handleKeyboardFocusPrevious }),
                        (this._getList = (0, b.Z)((e, t, o, n) => e.filter((e) => !this.props.blockedOrMutedEntryIds.has(o(e))).map((e, r) => (0, C.f)(o(e), e, t, !1, n && n(e))))),
                        (this._render = () => {
                            const { withKeyboardShortcuts: e } = this.props;
                            return n.createElement(v.Z, { enabled: e, handlers: this._keyboardShortcutHandlers }, n.createElement(O, { list: this.state.list, onPositionUpdate: this._handlePositionUpdate, onScrollEnd: this._handleScrollEnd, ref: this._renderer }));
                        }),
                        (this._handleScrollEnd = () => {
                            this.props.onScrollEnd && this.props.onScrollEnd();
                        }),
                        (this._handlePositionUpdate = (e, t) => {
                            const { onItemsRendered: o } = this.props,
                                n = this.state.list;
                            0 === e && this.props.onAtStart(V), e === n.length - 1 && this.props.onAtEnd(V), 1 === e && this.props.onNearStart(V), e === n.length - 2 && this.props.onNearEnd(V), n[e] ? o && o({ positions: [{ id: n[e].id, rectangle: t }], viewport: t }) : (0, T.ZP)(`VerticalSnapScroller could not update position to ${e}, itemList was ${n.length} elements.`, { level: "warning" });
                        }),
                        (this._handleKeyboardRefresh = (0, f.Z)(() => {
                            this.props.onKeyboardRefresh && this.props.onKeyboardRefresh();
                        }, 1e3)),
                        (this._handleKeyboardFocusNext = () => {
                            this.adjustFocusBy(1);
                        }),
                        (this._handleKeyboardFocusPrevious = () => {
                            this.adjustFocusBy(-1);
                        }),
                        (this.isAtNewest = () => !this._renderer.current || this._renderer.current.isAtNewest());
                    const { identityFunction: o, items: r, renderer: a, sortIndexFunction: i } = this.props;
                    this.state = { _items: r, list: this._getList(r, a, o, i) };
                }
                render() {
                    const { items: e, noItemsRenderer: t } = this.props;
                    return e.length ? this._render() : t();
                }
                componentDidMount() {
                    const { onPositionRestored: e } = this.props;
                    e();
                }
                componentDidUpdate(e) {
                    const { cacheKey: t, onPositionRestored: o } = this.props;
                    if ((t !== e.cacheKey && o(), e.items !== this.props.items)) {
                        const { identityFunction: e, renderer: t, sortIndexFunction: o } = this.props,
                            n = (0, D.Z)([...this.state._items, ...this.props.items], (t) => e(t));
                        this.setState({ _items: n, list: this._getList(n, t, e, o) });
                    }
                }
                adjustFocusBy(e) {
                    this._renderer.current && this._renderer.current.adjustFocusBy(e);
                }
                scrollToNewest(e) {
                    this._renderer.current && this._renderer.current.scrollToNewest(e);
                }
            }
            (L.contextType = M.y3), (L.defaultProps = { onPositionRestored: y.Z, onAtEnd: y.Z, onAtStart: y.Z, onNearEnd: y.Z, onNearStart: y.Z, onScrollEnd: y.Z, noItemsRenderer: g.Z, withKeyboardShortcuts: !1 });
            const z = n.forwardRef((e, t) =>
                n.createElement(
                    a.Z,
                    null,
                    n.createElement(w.H.Consumer, null, ({ blockedOrMutedEntryIds: o }) => n.createElement(L, (0, m.Z)({ ref: t }, e, { blockedOrMutedEntryIds: o }))),
                ),
            );
            var $ = o(652904),
                j = o(810641),
                K = o(952793),
                W = o(383186),
                q = o(503229),
                G = o(466015),
                Y = o(740025),
                J = o(750085),
                Q = o(218951);
            const X = (e, t) => (0, Q.Z)({ timelineId: `immersiveMedia-${e}`, network: { getEndpoint: (e) => e.withEndpoint(Y.ZP).fetchImmersiveMedia, getEndpointParams: () => ({ pinned_tweet_id: e, page_name: t }) }, context: "FETCH_IMMERSIVE_MEDIA", perfKey: "immersiveMedia", formatResponse: J.Z }),
                ee = (e) => (0, Q.Z)({ timelineId: `immersiveProfile-${e}`, network: { getEndpoint: (e) => e.withEndpoint(Y.ZP).fetchImmersiveProfile, getEndpointParams: () => ({ pinned_tweet_id: e }) }, context: "FETCH_IMMERSIVE_PROFILE", perfKey: "immersiveProfile", formatResponse: J.Z });
            var te = o(67534),
                oe = o(668214),
                ne = o(836255);
            const re = (e, t) => {
                    const o = new URLSearchParams(t.location.search).get("currentTweetUser");
                    return new URLSearchParams(t.location.search).get("currentTweet") && o;
                },
                ae = (e, t) => {
                    const o = de(e, t),
                        n = re(0, t);
                    return !o && n ? ce(e, t) : se(e, t);
                },
                ie = (e, t) => {
                    const o = re(0, t);
                    return !de(e, t) && o ? le(e, t) : ((e, t) => t.match.params.screenName || "")(0, t);
                },
                se = (e, t) => t.match.params.statusId || "",
                de = (e, t) => !(!e.urt[`immersiveMedia-${se(e, t)}`] && !e.urt[`immersiveProfile-${se(e, t)}`]),
                le = (e, t) => new URLSearchParams(t.location.search).get("currentTweetUser") || "",
                ce = (e, t) => new URLSearchParams(t.location.search).get("currentTweet") || "",
                ue = (e, t) => {
                    if ("profile" === new URLSearchParams(t.location.search).get("mode")) return "profile";
                },
                he = (e, t) => ((e, t) => e.location && e.location.state && e.location.state[t])(t, "forwardPivotInfo"),
                pe = (0, oe.Z)()
                    .propsFromState(() => ({ mode: ue, pinnedTweetId: ae, pinnedTweetUser: ie, pinnedTweet: ne.Z.createHydratedTweetSelector(ae), forwardPivotInfo: he }))
                    .withAnalytics({ page: "gallery", section: "immersive" });
            var me = o(263863),
                we = o(351322),
                be = o(509738);
            var fe = o(335632),
                De = o(962741);
            const ye = l().h59700fa,
                ge = {
                    ...(0, fe.G)({}),
                    [De.ZP.Tweet]: we.ov({
                        selectDisplayType: (e) => e.content.displayType,
                        handlers: {
                            [me.Z.Tweet]:
                                ((Te = {}),
                                {
                                    loader: () =>
                                        Promise.all([
                                            o.e("icons.2"),
                                            o.e("icons.24"),
                                            o.e("icons.10"),
                                            o.e("icons.15"),
                                            o.e("icons.27"),
                                            o.e("icons.16"),
                                            o.e("icons.12"),
                                            o.e("icons.7"),
                                            o.e("icons.5"),
                                            o.e("icons.22"),
                                            o.e("icons.19"),
                                            o.e("icons.17"),
                                            o.e("icons.26"),
                                            o.e("icons.4"),
                                            o.e("icons.29"),
                                            o.e("modules.common-e907d115"),
                                            o.e("modules.common-e019dbda"),
                                            o.e("icons.14"),
                                            o.e("modules.audio-6107ac1a"),
                                            o.e("modules.audio-b953418a"),
                                            o.e("modules.audio-7c51e6a7"),
                                            o.e("modules.audio-04db59e9"),
                                            o.e("modules.audio-76583d6c"),
                                            o.e("modules.audio-b7a8a5fb"),
                                            o.e("modules.audio-51f6e793"),
                                            o.e("modules.audio-e019dbda"),
                                            o.e("modules.audio-262c94d4"),
                                            o.e("modules.audio-c6fe4ea4"),
                                            o.e("icons.13"),
                                            o.e("icons.1"),
                                            o.e("icons.21"),
                                            o.e("icons.6"),
                                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                                            o.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                                            o.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"),
                                            o.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"),
                                            o.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"),
                                            o.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"),
                                            o.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                                            o.e("shared~loader.Dock~ondemand.InlinePlayer~bundle.DockPeek~bundle.LiveEvent~loader.AudioOnlyVideoPlaye-5563f741"),
                                            o.e("shared~loader.Dock~ondemand.InlinePlayer~bundle.DockPeek~bundle.LiveEvent~loader.AudioOnlyVideoPlaye-2db8044c"),
                                            o.e("shared~loader.Dock~ondemand.InlinePlayer~bundle.DockPeek~bundle.LiveEvent~loader.AudioOnlyVideoPlaye-d8458ca7"),
                                            o.e("loader.immersiveTweetHandler"),
                                        ]).then(o.bind(o, 311554)),
                                    loaderOptions: Te,
                                    loaderKey: "immersiveTweetLoader",
                                    strategy: be.Z.OnDemand,
                                }),
                        },
                    }),
                };
            var Te;
            const Ie = (e) => {
                    const { analytics: t, forwardPivotInfo: o, history: d, location: l, mode: m, pinnedTweet: b, pinnedTweetId: f, pinnedTweetUser: D } = e,
                        y = (0, K.hC)("immersive_viewer_enable_profile_viewer"),
                        [g] = n.useState(!1),
                        [T, I] = n.useState(null),
                        [M, v] = n.useState(!1),
                        [C, P] = n.useState(!1),
                        [E, S] = n.useState(!1),
                        [_, Z] = n.useState(!0),
                        [x, R] = n.useState(new Set()),
                        { width: k } = r.Z.get("screen");
                    (0, u.q)(() => {
                        if ((t.scribe({ action: "impression" }), !(k >= s.default.theme.breakpoints.large)))
                            return (
                                v(k >= s.default.theme.breakpoints.large),
                                d.replace(`${(0, W.PK)(`/${D}/status/${f}`)}?${new URLSearchParams(l.search).toString()}`),
                                function () {
                                    t.scribe({ action: "navigate" });
                                }
                            );
                        d.push(`/${D}/status/${f}`);
                    });
                    const A = n.useCallback(
                            (e) => {
                                if (b) {
                                    const t = new URLSearchParams(l.search),
                                        o = Array.from(t.keys()).length ? `&${t.toString()}` : "";
                                    d.replace(`${b.permalink}/mediaViewer?currentTweet=${e.id_str}&currentTweetUser=${e.user.screen_name}${o}`), I(e);
                                }
                            },
                            [d, b, l.search],
                        ),
                        F = n.useCallback(
                            (e) => {
                                P(e);
                            },
                            [P],
                        ),
                        N = n.useCallback(
                            (e) => {
                                S(e);
                            },
                            [S],
                        ),
                        H = n.useCallback(
                            (e) => {
                                Z(e);
                            },
                            [Z],
                        ),
                        B = n.useMemo(() => (y && "profile" === m ? ee(f) : X(f, D)), [m, f, D, y]),
                        U = n.useMemo(() => {
                            if (!b) return null;
                            const e = ((e) => {
                                const t = (e.entities?.media || []).find((e) => "photo" === e.type);
                                if (t && "photo" === t.type) return t;
                            })(b);
                            return n.createElement(h.Z, { canonical: ((t = b.user.screen_name), (o = b.id_str), (0, i.ju)(`https://x.com/${t}/status/${o}/mediaViewer`)), description: b.text, image: e?.media_url_https, imageH: e?.original_info?.height, imageType: (e?.media_url_https.match(/([^.]*)$/) || [""])[0], imageW: e?.original_info?.width, title: b.user.screen_name, type: "article" });
                            var t, o;
                        }, [b]);
                    return n.createElement(
                        $.Z,
                        null,
                        U,
                        n.createElement(
                            p.Z.Configure,
                            { headerless: !0 },
                            n.createElement(
                                a.Z,
                                { style: Me.container, testID: "modalContainer" },
                                n.createElement(
                                    a.Z,
                                    { style: [Me.neighbor, M && Me.desktopNeighbor] },
                                    n.createElement(
                                        a.Z,
                                        { style: M && Me.desktopTimelineContainer },
                                        n.createElement(
                                            w.H.Provider,
                                            {
                                                testID: "contextProvider",
                                                value: {
                                                    forwardPivotInfo: o,
                                                    onTweetUpdate: A,
                                                    hasClosedCaptioning: _,
                                                    isMuted: C,
                                                    setHasClosedCaptioning: H,
                                                    onMuteToggle: F,
                                                    setBlockedOrMutedEntry: (e, t) => {
                                                        const o = (0, c.Z)(Array.from(x));
                                                        t ? o.add(e) : o.delete(e), R(o);
                                                    },
                                                    blockedOrMutedEntryIds: x,
                                                    setTweetContentHidden: N,
                                                    isTweetContentHidden: E,
                                                },
                                            },
                                            f && n.createElement(j.Z, { entryConfiguration: ge, module: B, previewEntries: b ? [G.Se({ id: f, sortIndex: "stable_sort_index" })] : void 0, scroller: z, title: ye }),
                                        ),
                                    ),
                                    n.createElement(a.Z, { style: M && Me.desktopMediaDrawer, testID: M ? "immersive-viewer-desktop-conversation-drawer" : void 0 }, T && ((e, t) => !!e || t)(M, g) ? n.createElement(te.Z, { location: l, rootTweet: T, screenName: D, tweet: T, tweetId: T.id_str }) : null),
                                ),
                            ),
                        ),
                    );
                },
                Me = s.default.create((e) => ({ container: { flexDirection: "row", overflowX: "hidden", overflowY: "hidden", height: "100%", width: "100%", position: "relative" }, neighbor: { flexGrow: 1, flexShrink: 1 }, desktopNeighbor: { display: "flex", flexDirection: "row" }, desktopTimelineContainer: { flex: 2 }, desktopMediaDrawer: { flex: 1 } })),
                ve = pe((0, q.Z)(Ie));
        },
        67534: (e, t, o) => {
            o.d(t, { Z: () => w });
            var n = o(202784),
                r = o(392237),
                a = o(715601),
                i = o(167496),
                s = o(927192),
                d = o(71620),
                l = o(340179),
                c = o(125363),
                u = o(360142),
                h = o(735313),
                p = o(904096);
            const m = r.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, overflow: "auto", width: p.p, borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid" } })),
                w = function ({ contextTweetId: e, location: t, promotedContent: o, rootTweet: r, screenName: p, socialContext: w, tweet: b, tweetId: f }) {
                    const [D, y] = n.useState(i.r.relevance),
                        g = (0, c.I0)(),
                        T = (0, d.n7)("CONVERSATION_DRAWER"),
                        I = n.useMemo(() => (0, l.i)(p), [p]),
                        M = (e, t) => {
                            let o = "Relevance";
                            return t === i.r.recency ? (o = "Recency") : t === i.r.likes && (o = "Likes"), (0, u.ZP)({ focalTweetId: e, rankingMode: o });
                        };
                    return n.createElement(
                        a.Z,
                        { "aria-expanded": !0, style: m.root },
                        n.createElement(s.Z, {
                            apiErrorHandlerMap: I,
                            changeDropdownState: (e) => {
                                y(e), g((0, h.Z)(M(f, e))).catch(T({}));
                            },
                            contextTweetId: e,
                            focalTweet: b,
                            focalTweetId: f,
                            location: t,
                            module: M(f, D),
                            promotedContent: o,
                            replyDropdownSelection: D,
                            rootTweet: r,
                            selectedTweet: { selectedTweetId: f },
                            socialContext: w,
                            withFocalTweetMedia: !1,
                        }),
                    );
                };
        },
        904096: (e, t, o) => {
            o.d(t, { J: () => a, p: () => r });
            var n = o(521514);
            const r = n.Z.columnWidths.secondary.normal,
                a = n.Z.columnWidths.primary;
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => d });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const d = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ImmersiveMediaViewer.732f699a.js.map
