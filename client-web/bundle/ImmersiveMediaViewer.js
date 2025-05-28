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
                const { canonical: t, description: o = "", image: a, imageAlt: s, imageH: i, imageType: d, imageW: l, title: c, ttl: u, type: h } = e;
                return n.createElement(r.ql, null, h ? n.createElement("meta", { content: h, property: "og:type" }) : null, t ? n.createElement("meta", { content: t, property: "og:url" }) : null, c ? n.createElement("meta", { content: c, property: "og:title" }) : null, n.createElement("meta", { content: o, property: "og:description" }), a ? n.createElement("meta", { content: a, property: "og:image" }) : null, d ? n.createElement("meta", { content: d, property: "og:image:type" }) : null, l ? n.createElement("meta", { content: l, property: "og:image:width" }) : null, i ? n.createElement("meta", { content: i, property: "og:image:height" }) : null, s ? n.createElement("meta", { content: s, property: "og:image:alt" }) : null, u ? n.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        218093: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(420740),
                a = o(111677);
            const s = o.n(a)().b2311b70;
            function i() {
                return n.createElement(r.Z, { onRetry: null, title: s });
            }
            const d = n.memo(i);
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
                a = (e, t, o) => s(e(o), e(t)),
                s = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                i = (e, t) => {
                    if (e.length) return e.reduce((e, o) => (t(o, e) > 0 ? o : e));
                },
                d = ({ nextPos: e, prevPos: t }) => {
                    const o = t.getForViewport(),
                        s = (e) => e && e.doesIntersectWith(o),
                        d = (e) => (e ? Math.abs(o.getTop() - e.getTop()) : 1 / 0),
                        l = e.getList().filter(({ id: o }) => !n(o) && t.isRendered(o) && e.isRendered(o)),
                        c =
                            l.length > 0
                                ? i(l, (e, o) => {
                                      const n = t.getForItem(e.id),
                                          i = t.getForItem(o.id);
                                      return r(s, n, i) || a(d, n, i);
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
                s = o(731708),
                i = o(154003),
                d = o(392237),
                l = o(111677),
                c = o.n(l),
                u = o(349035);
            const h = "error-detail",
                p = c().e49537c2,
                m = c().a9ae1e78;
            class w extends n.PureComponent {
                render() {
                    return n.createElement(r.Z, { testID: h }, n.createElement(u.Z, null), n.createElement(a.Z, { style: b.root }, n.createElement(s.ZP, { align: "center", color: "gray700", style: b.retryText }, p), n.createElement(i.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const b = d.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(500002),
                a = o(668214),
                s = o(997174),
                i = o(118823);
            const d = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: s.NH }))
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
                            location: { pathname: a, search: s },
                            locationKey: i,
                        } = e;
                    let d = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (d = !0));
                    const l = r || i;
                    ((l && r !== i) || (!l && o !== a) || n !== s || d) && this._performPageUpdates(this.props);
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
                s = o(111677),
                i = o.n(s),
                d = o(517747);
            const l = i().d7b8ebaa,
                c = i().d601fc20,
                u = i().j43f99be,
                h = i().ad6e11ac,
                p = Object.freeze({ relevance: "relevance", recency: "recency", likes: "likes" });
            function m({ replyDropdownSelection: e = p.relevance, changeDropdownState: t }) {
                const o = n.useCallback(
                        (e) => () => {
                            t?.(e);
                        },
                        [t],
                    ),
                    s = n.useMemo(
                        () => [
                            { isSelected: p.relevance === e, onClick: o(p.relevance), selectable: !0, text: u },
                            { isSelected: p.recency === e, onClick: o(p.recency), selectable: !0, text: c },
                            { isSelected: p.likes === e, onClick: o(p.likes), selectable: !0, text: l },
                        ],
                        [o, e],
                    );
                return n.createElement(r.ZP, { "aria-haspopup": "menu", icon: n.createElement(d.default, null), renderMenu: (e) => n.createElement(a.Z, { description: h, items: s, onCloseRequested: e, shouldCloseOnClick: !0 }), type: "primaryText" });
            }
        },
        519125: (e, t, o) => {
            o.d(t, { Mu: () => S, ZP: () => E });
            var n = o(662678),
                r = o(769471),
                a = o(337637),
                s = o(459679),
                i = o(192337),
                d = o(962741),
                l = o(372703),
                c = o(466015),
                u = o(267483),
                h = o(263863),
                p = o(351322),
                m = o(37533),
                w = o(777809),
                b = o(652815),
                y = o(560520),
                f = o(367991),
                I = o(705638),
                M = o(801184),
                T = o(335632);
            const g = "FocalTweetInlineTombstone",
                D = "More Replies";
            let v;
            const P = Object.freeze({ Default: "ui_defaultLabel", TransparentCursor: "ui_transparentCursor" }),
                C = { ...(0, T.G)({}), [d.ZP.Tweet]: (0, I.Z)({ hideConversationControlsEducationText: !0, withMuteConversation: !0 }) },
                E = ({ changeDropdownState: e, hideReplyContextMode: t, isCurrentUserRootAuthor: o, isReaderMode: n, isTransparentCursorsEnabled: a, replyDropdownSelection: s, rootTweetAuthorId: i, tweetTextSize: c, withFocalTweetMedia: I, withRuxInjections: T }) =>
                    (0, r.Z)({}, C, {
                        [d.ZP.SelfThreadTweetComposer]: b.Z,
                        [d.ZP.Tweet]: {
                            handlers: {
                                [h.Z.Tweet]: (0, M.Cw)({
                                    hideConversationControlsEducationText: !0,
                                    hideExclusivityInfoEducationTextInReplies: !0,
                                    hideTrustedFriendsEducationTextInReplies: !0,
                                    createAdditionalProps: (e, { applyFeedbackAction: t }) => {
                                        const n = { withHideReply: o, showMidConversationControlEducationText: !0, withUnhideReply: !1, withViewHiddenReplies: !0 },
                                            r = !!(e.content && e.content.hasModeratedReplies && e.conversationPosition && e.conversationPosition.isStart);
                                        return (
                                            (n.conversationAnnotation = e?.content?.conversation_annotation),
                                            (n.hasModeratedReplies = r),
                                            (n.rootTweetAuthorId = i),
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
                                [h.Z.FocalTweet]: (0, M.g6)({
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
                                            rootTweetAuthorId: i,
                                            socialContext: p,
                                            topicFollowPrompt: m,
                                            withHideReply: o,
                                            withInlineMedia: I,
                                            ...(o
                                                ? {
                                                      onTweetDismiss: () => {
                                                          n({ entry: t, feedbackKeys: [l.qt] });
                                                      },
                                                  }
                                                : {}),
                                            changeDropdownState: e,
                                            replyDropdownSelection: s,
                                        };
                                    },
                                    dismissable: !0,
                                    divider: (e) => ({ top: !1, bottom: !1 }),
                                    hideReplyContextMode: t,
                                }),
                                [h.Z.SelfThread]: (0, M.Cw)({ hideReplyContextMode: t }),
                                [h.Z.ReaderMode]: (0, M.Cw)({ hideConversationControlsEducationText: !0, hideExclusivityInfoEducationTextInReplies: !0, hideHighlightedUserLabel: !0, hideTrustedFriendsEducationTextInReplies: !0, isReaderMode: !0, shouldSelfThreadIncludeAvatar: !1, showWithheldBannerOnMyTweets: !1, tweetTextSize: c, withActionsDisabled: !1, withMuteConversation: !1, withRemoveFromBookmarks: !1, withSelfThread: !1, withUserPresence: !1 }),
                            },
                        },
                        [d.ZP.Tombstone]: { handlers: { [g]: (0, f._n)({ isFocalTweet: !0, isReaderMode: n, withHideReply: o }), [u.Z.Inline]: (0, f._n)({ isReaderMode: n, tweetDismissFeedbackKey: o ? l.qt : void 0, withHideReply: o }) } },
                        [d.ZP.Label]: p.ov({ selectDisplayType: (e) => ((e, t) => (t && e.content.text === D ? P.TransparentCursor : P.Default))(e, a), handlers: { [P.TransparentCursor]: w.L, [P.Default]: w.k } }),
                        [d.ZP.TimelineCursor]: (0, m.Z)({ withRuxInjections: T }),
                        [d.ZP.ThreadHeader]: y.Z,
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
                        let y;
                        return (0, s.Z)(b, (o, n) => {
                            const a = o.type === d.ZP.TimelineCursor && (o.content.cursorType === i.CursorType.ShowMoreThreads || o.content.cursorType === i.CursorType.ShowMoreThreadsPrompt),
                                s = o.type === d.ZP.Label && o.content.text === D;
                            if (l && (a || s)) return void 0 === y && o.content.cursorType === i.CursorType.ShowMoreThreadsPrompt ? (v = n) : void 0 === y && (y = n), !1;
                            if (l && void 0 !== y && n >= y) return !1;
                            if (l && void 0 === y && n >= v) return !1;
                            const p = n > m;
                            if ((o.type !== d.ZP.Tweet && o.type !== d.ZP.Tombstone) || p) return o.type !== d.ZP.SelfThreadTweetComposer && o;
                            {
                                const a = !w;
                                if (((w = !0), n < m)) {
                                    if (o.type === d.ZP.Tweet) return R(o, a);
                                    if (o.type === d.ZP.Tombstone) return A(o, a);
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
                _ = ({ contextTweetId: e, contextualClientEventInfo: t, conversationPosition: o, originalEntry: n, promotedContent: r, socialContext: a, topicFollowPrompt: s }) => c.Wf({ ...n, conversationPosition: o, referringContext: { contextTweetId: e, contextualClientEventInfo: t, socialContext: a, promotedContent: r, topicFollowPrompt: s } }, { displayType: h.Z.FocalTweet }),
                Z = ({ contextTweetId: e, conversationPosition: t, entry: o, socialContext: n, topicFollowPrompt: r }) => c.Wf({ ...o, conversationPosition: t, referringContext: { contextTweetId: e, socialContext: n } }, { displayType: g }),
                x = ({ conversationPosition: e, entry: t }) => ({ ...t, conversationPosition: e }),
                R = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor", showReplyContext: !1 } }),
                A = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor" } });
        },
        927192: (e, t, o) => {
            o.d(t, { Z: () => E });
            var n = o(202784),
                r = o(111677),
                a = o.n(r),
                s = o(912021),
                i = o(218093),
                d = o(334346),
                l = o(332878),
                c = o(163889),
                u = o(466015),
                h = o(847933),
                p = o(519896),
                m = o(443781),
                w = o(56851),
                b = o(810641),
                y = o(438965),
                f = o(668214);
            const I = (e, t) => {
                    const o = t.module.selectTimeline(e);
                    return !!o && o.terminatedStatus.atTop;
                },
                M = (e, t) => t.location.state && t.location.state.contextualClientEventInfo,
                T = (0, f.Z)().propsFromState(() => ({ isTimelineTerminatedAtTop: I, contextualClientEventInfo: M }));
            var g = o(519125);
            const D = a().d35d74e4,
                v = (e) => {
                    switch (e) {
                        case h.Z.NOT_FOUND:
                            return n.createElement(w.Z, null);
                        case h.Z.NOT_ALLOWED:
                            return n.createElement(i.Z, null);
                        default:
                            return (0, c.ZP)(`Unhandled timeline unavailable reason: ${e}`), null;
                    }
                },
                P = () => n.createElement(w.Z, null);
            class C extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._isInitialFocusEntry = (e, t) => {
                            const { focalTweetId: o, location: n } = this.props;
                            return !!!n.state?.focusComposer && e && e.content && !!e.content.id && e.content.id === o;
                        }),
                        (this._getMemoizedPreprocessor = (0, s.Z)((e, t, o, n, r, a, s) => (0, g.Mu)({ focalTweetId: r, contextTweetId: t, contextualClientEventInfo: o, socialContext: e, topicFollowPrompt: a, promotedContent: n, showOnlyRelevantReplies: s }))),
                        (this._getPreprocessor = () => {
                            const { contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: n, socialContext: r, topicFollowPrompt: a } = this.props;
                            return this._getMemoizedPreprocessor(r, e, t, n, o, a, !1);
                        }),
                        (this._getMemoizedEntryConfig = (0, s.Z)((e, t, o, n, r, a) => {
                            const s = e && n && e === n;
                            return (0, g.ZP)({ changeDropdownState: this.props.changeDropdownState, isCurrentUserRootAuthor: !!s, hideReplyContextMode: t, replyDropdownSelection: o, rootTweetAuthorId: n, withFocalTweetMedia: r, withRuxInjections: a });
                        })),
                        (this._getEntryConfig = () => {
                            const e = this.props,
                                t = e.rootTweet?.user.id_str,
                                o = this.context.viewerUserId,
                                n = e.withFocalTweetMedia,
                                r = e.replyDropdownSelection,
                                a = this.context.featureSwitches.isTrue("rweb_tweets_reply_context_hidden") ? y.j.CONVERSATION : void 0,
                                s = e.withRuxInjections;
                            return this._getMemoizedEntryConfig(o, a, r, t, n, s);
                        });
                }
                render() {
                    const { apiErrorHandlerMap: e, fetchOptions: t, module: o, onEntriesRendered: r } = this.props;
                    return n.createElement(b.Z, { anchoring: l.Z, apiErrorHandlerMap: e, entryConfiguration: this._getEntryConfig(), fetchOptions: t, isInitialFocusEntry: this._isInitialFocusEntry, module: o, nearStartProximityRatio: 2, olderAtTop: !0, onEntriesRendered: r, preprocessEntryList: this._getPreprocessor(), prerollDisplayLocation: p.Nw.OTHER, previewEntries: this._previewEntries(), refreshControl: null, renderEmptyState: P, renderUnavailable: v, title: D });
                }
                _previewEntries() {
                    const { focalTweet: e } = this.props,
                        t = e?.id_str || "";
                    return e ? [u.Se({ id: t, sortIndex: d.Z })] : void 0;
                }
            }
            (C.defaultProps = { withFocalTweetMedia: !0 }), (C.contextType = m.rC);
            const E = T(C);
        },
        438965: (e, t, o) => {
            o.d(t, { FE: () => a, Hx: () => d, Oj: () => r, P3: () => l, QO: () => i, j: () => s });
            var n = o(942893);
            const r = { component: "tweet" },
                a = { component: "thread" },
                s = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                i =
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
            o.d(t, { i: () => s });
            var n = o(516951),
                r = o(615656),
                a = o(51525);
            const s = (e = "") => ({
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
            o.d(t, { H: () => a, V: () => s });
            o(571372);
            var n = o(202784),
                r = o(516951);
            const a = n.createContext({ blockedOrMutedEntryIds: new Set(), forwardPivotInfo: void 0, hasClosedCaptioning: !0, isMuted: !1, setTweetContentHidden: r.Z, isTweetContentHidden: !1, setHasClosedCaptioning: r.Z, onMuteToggle: r.Z, onTweetUpdate: r.Z, setBlockedOrMutedEntry: r.Z });
            function s() {
                const e = n.useContext(a);
                if (void 0 === e) throw new Error("useImmersiveMediaViewerContext was used outside of its provider ImmersiveMediaViewerContext");
                return e;
            }
        },
        897695: (e, t, o) => {
            o.r(t), o.d(t, { ImmersiveMediaViewerScreen: () => ge, default: () => ve });
            o(136728), o(543673), o(240753), o(128399);
            var n = o(202784),
                r = o(878052),
                a = o(325686),
                s = o(688715),
                i = o(392237),
                d = o(111677),
                l = o.n(d),
                c = o(370751),
                u = o(187669),
                h = o(572067),
                p = o(449067),
                m = o(807896),
                w = o(335636),
                b = o(912021),
                y = o(2138),
                f = o(166852),
                I = o(516951),
                M = o(143778),
                T = o(163889),
                g = o(163390),
                D = o(768572),
                v = o(933794),
                P = o(579051),
                C = o(719536),
                E = o(476984),
                S = o.n(E),
                _ = o(214997),
                Z = o(837880),
                x = o(908478),
                R = o(323265),
                A = o(993547),
                k = o(725516),
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
            const H = i.default.supports("height: 100dvh");
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
                        (this._updateScrollEnd = (0, y.Z)((e) => {
                            const { analytics: t, onPositionUpdate: o, onScrollEnd: n, viewport: r } = this.props,
                                a = this._getCurrentItemIndex(),
                                s = e;
                            a !== s && (t.scribe({ action: "scroll", data: { event_value: window.innerHeight } }), s > a && t.scribe({ component: "feed", action: "next" }), s < a && t.scribe({ component: "feed", action: "previous" }), s === this.props.list.length - 2 && t.scribe({ action: "load", element: "bottom" }), o(s, r.getRect()), n(), this.setState(({ visibleItemId: e }) => ({ visibleItemId: this.props.list[s] ? this.props.list[s].id : e })));
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
                                    const s = Math.abs(t - r) <= 1;
                                    return n.createElement(a.Z, { key: o.id, style: { height: e, maxHeight: e, width: "100%" } }, n.createElement(a.Z, { style: U.scrollSnapItem }, n.createElement(a.Z, { style: U.scrollSnapItemInner }, s && n.createElement(N, { item: o, key: o.id }))));
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
            const U = i.default.create(() => ({ scrollView: { overflowY: "auto", scrollSnapType: "y mandatory", height: "100%" }, scrollSnapItem: { width: "100%", scrollSnapAlign: "start", scrollSnapStop: "always" }, scrollSnapItemInner: { height: window.innerHeight, width: "100%" } })),
                L = (0, A.Z)((0, k.Z)(B)),
                O = { triggerCause: C.Z.MOVEMENT };
            class V extends n.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._renderer = n.createRef()),
                        (this._keyboardShortcutHandlers = { [g.uq.refresh]: this._handleKeyboardRefresh, [g.uq.nextItem]: this._handleKeyboardFocusNext, [g.uq.previousItem]: this._handleKeyboardFocusPrevious }),
                        (this._getList = (0, b.Z)((e, t, o, n) => e.filter((e) => !this.props.blockedOrMutedEntryIds.has(o(e))).map((e, r) => (0, P.f)(o(e), e, t, !1, n && n(e))))),
                        (this._render = () => {
                            const { withKeyboardShortcuts: e } = this.props;
                            return n.createElement(v.Z, { enabled: e, handlers: this._keyboardShortcutHandlers }, n.createElement(L, { list: this.state.list, onPositionUpdate: this._handlePositionUpdate, onScrollEnd: this._handleScrollEnd, ref: this._renderer }));
                        }),
                        (this._handleScrollEnd = () => {
                            this.props.onScrollEnd && this.props.onScrollEnd();
                        }),
                        (this._handlePositionUpdate = (e, t) => {
                            const { onItemsRendered: o } = this.props,
                                n = this.state.list;
                            0 === e && this.props.onAtStart(O), e === n.length - 1 && this.props.onAtEnd(O), 1 === e && this.props.onNearStart(O), e === n.length - 2 && this.props.onNearEnd(O), n[e] ? o && o({ positions: [{ id: n[e].id, rectangle: t }], viewport: t }) : (0, T.ZP)(`VerticalSnapScroller could not update position to ${e}, itemList was ${n.length} elements.`, { level: "warning" });
                        }),
                        (this._handleKeyboardRefresh = (0, y.Z)(() => {
                            this.props.onKeyboardRefresh && this.props.onKeyboardRefresh();
                        }, 1e3)),
                        (this._handleKeyboardFocusNext = () => {
                            this.adjustFocusBy(1);
                        }),
                        (this._handleKeyboardFocusPrevious = () => {
                            this.adjustFocusBy(-1);
                        }),
                        (this.isAtNewest = () => !this._renderer.current || this._renderer.current.isAtNewest());
                    const { identityFunction: o, items: r, renderer: a, sortIndexFunction: s } = this.props;
                    this.state = { _items: r, list: this._getList(r, a, o, s) };
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
                            n = (0, f.Z)([...this.state._items, ...this.props.items], (t) => e(t));
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
            (V.contextType = D.y3), (V.defaultProps = { onPositionRestored: I.Z, onAtEnd: I.Z, onAtStart: I.Z, onNearEnd: I.Z, onNearStart: I.Z, onScrollEnd: I.Z, noItemsRenderer: M.Z, withKeyboardShortcuts: !1 });
            const $ = n.forwardRef((e, t) =>
                n.createElement(
                    a.Z,
                    null,
                    n.createElement(w.H.Consumer, null, ({ blockedOrMutedEntryIds: o }) => n.createElement(V, (0, m.Z)({ ref: t }, e, { blockedOrMutedEntryIds: o }))),
                ),
            );
            var j = o(652904),
                K = o(810641),
                z = o(952793),
                W = o(383186),
                q = o(503229),
                G = o(466015),
                J = o(740025),
                Y = o(750085),
                Q = o(218951);
            const X = (e, t) => (0, Q.Z)({ timelineId: `immersiveMedia-${e}`, network: { getEndpoint: (e) => e.withEndpoint(J.ZP).fetchImmersiveMedia, getEndpointParams: () => ({ pinned_tweet_id: e, page_name: t }) }, context: "FETCH_IMMERSIVE_MEDIA", perfKey: "immersiveMedia", formatResponse: Y.Z }),
                ee = (e) => (0, Q.Z)({ timelineId: `immersiveProfile-${e}`, network: { getEndpoint: (e) => e.withEndpoint(J.ZP).fetchImmersiveProfile, getEndpointParams: () => ({ pinned_tweet_id: e }) }, context: "FETCH_IMMERSIVE_PROFILE", perfKey: "immersiveProfile", formatResponse: Y.Z });
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
                    return !o && n ? ce(e, t) : ie(e, t);
                },
                se = (e, t) => {
                    const o = re(0, t);
                    return !de(e, t) && o ? le(e, t) : ((e, t) => t.match.params.screenName || "")(0, t);
                },
                ie = (e, t) => t.match.params.statusId || "",
                de = (e, t) => !(!e.urt[`immersiveMedia-${ie(e, t)}`] && !e.urt[`immersiveProfile-${ie(e, t)}`]),
                le = (e, t) => new URLSearchParams(t.location.search).get("currentTweetUser") || "",
                ce = (e, t) => new URLSearchParams(t.location.search).get("currentTweet") || "",
                ue = (e, t) => {
                    if ("profile" === new URLSearchParams(t.location.search).get("mode")) return "profile";
                },
                he = (e, t) => ((e, t) => e.location && e.location.state && e.location.state[t])(t, "forwardPivotInfo"),
                pe = (0, oe.Z)()
                    .propsFromState(() => ({ mode: ue, pinnedTweetId: ae, pinnedTweetUser: se, pinnedTweet: ne.Z.createHydratedTweetSelector(ae), forwardPivotInfo: he }))
                    .withAnalytics({ page: "gallery", section: "immersive" });
            var me = o(263863),
                we = o(351322),
                be = o(509738);
            var ye = o(335632),
                fe = o(962741);
            const Ie = l().h59700fa,
                Me = {
                    ...(0, ye.G)({}),
                    [fe.ZP.Tweet]: we.ov({
                        selectDisplayType: (e) => e.content.displayType,
                        handlers: {
                            [me.Z.Tweet]:
                                ((Te = {}),
                                {
                                    loader: () =>
                                        Promise.all([
                                            o.e("icons.23"),
                                            o.e("icons.0"),
                                            o.e("icons.2"),
                                            o.e("icons.16"),
                                            o.e("icons.19"),
                                            o.e("icons.10"),
                                            o.e("icons.13"),
                                            o.e("icons.24"),
                                            o.e("icons.7"),
                                            o.e("icons.22"),
                                            o.e("icons.27"),
                                            o.e("icons.17"),
                                            o.e("modules.common-e907d115"),
                                            o.e("modules.common-e019dbda"),
                                            o.e("icons.11"),
                                            o.e("icons.26"),
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
                                            o.e("icons.8"),
                                            o.e("icons.4"),
                                            o.e("icons.14"),
                                            o.e("icons.28"),
                                            o.e("icons.21"),
                                            o.e("icons.3"),
                                            o.e("icons.1"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                            o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSp"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                                            o.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
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
                                            o.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-85aa903d"),
                                            o.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-c8e3a520"),
                                            o.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-658f42e4"),
                                            o.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-1f16c288"),
                                            o.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                                            o.e("shared~ondemand.InlinePlayer~bundle.LiveEvent~loader.AudioOnlyVideoPlayer~loader.JetfuelFrame~loader-4648150b"),
                                            o.e("shared~ondemand.InlinePlayer~bundle.LiveEvent~loader.AudioOnlyVideoPlayer~loader.JetfuelFrame~loader-6ff35035"),
                                            o.e("shared~ondemand.InlinePlayer~bundle.LiveEvent~loader.AudioOnlyVideoPlayer~loader.JetfuelFrame~loader-147738cd"),
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
            const ge = (e) => {
                    const { analytics: t, forwardPivotInfo: o, history: d, location: l, mode: m, pinnedTweet: b, pinnedTweetId: y, pinnedTweetUser: f } = e,
                        I = (0, z.hC)("immersive_viewer_enable_profile_viewer"),
                        [M] = n.useState(!1),
                        [T, g] = n.useState(null),
                        [D, v] = n.useState(!1),
                        [P, C] = n.useState(!1),
                        [E, S] = n.useState(!1),
                        [_, Z] = n.useState(!0),
                        [x, R] = n.useState(new Set()),
                        { width: A } = r.Z.get("screen");
                    (0, u.q)(() => {
                        if ((t.scribe({ action: "impression" }), !(A >= i.default.theme.breakpoints.large)))
                            return (
                                v(A >= i.default.theme.breakpoints.large),
                                d.replace(`${(0, W.PK)(`/${f}/status/${y}`)}?${new URLSearchParams(l.search).toString()}`),
                                function () {
                                    t.scribe({ action: "navigate" });
                                }
                            );
                        d.push(`/${f}/status/${y}`);
                    });
                    const k = n.useCallback(
                            (e) => {
                                if (b) {
                                    const t = new URLSearchParams(l.search),
                                        o = Array.from(t.keys()).length ? `&${t.toString()}` : "";
                                    d.replace(`${b.permalink}/mediaViewer?currentTweet=${e.id_str}&currentTweetUser=${e.user.screen_name}${o}`), g(e);
                                }
                            },
                            [d, b, l.search],
                        ),
                        F = n.useCallback(
                            (e) => {
                                C(e);
                            },
                            [C],
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
                        B = n.useMemo(() => (I && "profile" === m ? ee(y) : X(y, f)), [m, y, f, I]),
                        U = n.useMemo(() => {
                            if (!b) return null;
                            const e = ((e) => {
                                const t = (e.entities?.media || []).find((e) => "photo" === e.type);
                                if (t && "photo" === t.type) return t;
                            })(b);
                            return n.createElement(h.Z, { canonical: ((t = b.user.screen_name), (o = b.id_str), (0, s.ju)(`https://x.com/${t}/status/${o}/mediaViewer`)), description: b.text, image: e?.media_url_https, imageH: e?.original_info?.height, imageType: (e?.media_url_https.match(/([^.]*)$/) || [""])[0], imageW: e?.original_info?.width, title: b.user.screen_name, type: "article" });
                            var t, o;
                        }, [b]);
                    return n.createElement(
                        j.Z,
                        null,
                        U,
                        n.createElement(
                            p.Z.Configure,
                            { headerless: !0 },
                            n.createElement(
                                a.Z,
                                { style: De.container, testID: "modalContainer" },
                                n.createElement(
                                    a.Z,
                                    { style: [De.neighbor, D && De.desktopNeighbor] },
                                    n.createElement(
                                        a.Z,
                                        { style: D && De.desktopTimelineContainer },
                                        n.createElement(
                                            w.H.Provider,
                                            {
                                                testID: "contextProvider",
                                                value: {
                                                    forwardPivotInfo: o,
                                                    onTweetUpdate: k,
                                                    hasClosedCaptioning: _,
                                                    isMuted: P,
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
                                            y && n.createElement(K.Z, { entryConfiguration: Me, module: B, previewEntries: b ? [G.Se({ id: y, sortIndex: "stable_sort_index" })] : void 0, scroller: $, title: Ie }),
                                        ),
                                    ),
                                    n.createElement(a.Z, { style: D && De.desktopMediaDrawer, testID: D ? "immersive-viewer-desktop-conversation-drawer" : void 0 }, T && ((e, t) => !!e || t)(D, M) ? n.createElement(te.Z, { location: l, rootTweet: T, screenName: f, tweet: T, tweetId: T.id_str }) : null),
                                ),
                            ),
                        ),
                    );
                },
                De = i.default.create((e) => ({ container: { flexDirection: "row", overflowX: "hidden", overflowY: "hidden", height: "100%", width: "100%", position: "relative" }, neighbor: { flexGrow: 1, flexShrink: 1 }, desktopNeighbor: { display: "flex", flexDirection: "row" }, desktopTimelineContainer: { flex: 2 }, desktopMediaDrawer: { flex: 1 } })),
                ve = pe((0, q.Z)(ge));
        },
        67534: (e, t, o) => {
            o.d(t, { Z: () => w });
            var n = o(202784),
                r = o(392237),
                a = o(715601),
                s = o(167496),
                i = o(927192),
                d = o(71620),
                l = o(340179),
                c = o(125363),
                u = o(360142),
                h = o(735313),
                p = o(904096);
            const m = r.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, overflow: "auto", width: p.p, borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid" } })),
                w = function ({ contextTweetId: e, location: t, promotedContent: o, rootTweet: r, screenName: p, socialContext: w, tweet: b, tweetId: y }) {
                    const [f, I] = n.useState(s.r.relevance),
                        M = (0, c.I0)(),
                        T = (0, d.n7)("CONVERSATION_DRAWER"),
                        g = n.useMemo(() => (0, l.i)(p), [p]),
                        D = (e, t) => {
                            let o = "Relevance";
                            return t === s.r.recency ? (o = "Recency") : t === s.r.likes && (o = "Likes"), (0, u.ZP)({ focalTweetId: e, rankingMode: o });
                        };
                    return n.createElement(
                        a.Z,
                        { "aria-expanded": !0, style: m.root },
                        n.createElement(i.Z, {
                            apiErrorHandlerMap: g,
                            changeDropdownState: (e) => {
                                I(e), M((0, h.Z)(D(y, e))).catch(T({}));
                            },
                            contextTweetId: e,
                            focalTweet: b,
                            focalTweetId: y,
                            location: t,
                            module: D(y, f),
                            promotedContent: o,
                            replyDropdownSelection: f,
                            rootTweet: r,
                            selectedTweet: { selectedTweetId: y },
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ImmersiveMediaViewer.ea7c5aaa.js.map
