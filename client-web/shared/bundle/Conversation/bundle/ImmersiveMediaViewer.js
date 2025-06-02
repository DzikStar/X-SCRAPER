"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Conversation~bundle.ImmersiveMediaViewer"],
    {
        349035: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(202784),
                r = o(272175);
            const i = (0, o(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(r.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        218093: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(420740),
                i = o(111677);
            const s = o.n(i)().b2311b70;
            function a() {
                return n.createElement(r.Z, { onRetry: null, title: s });
            }
            const c = n.memo(a);
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
                i = (e, t, o) => s(e(o), e(t)),
                s = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                a = (e, t) => {
                    if (e.length) return e.reduce((e, o) => (t(o, e) > 0 ? o : e));
                },
                c = ({ nextPos: e, prevPos: t }) => {
                    const o = t.getForViewport(),
                        s = (e) => e && e.doesIntersectWith(o),
                        c = (e) => (e ? Math.abs(o.getTop() - e.getTop()) : 1 / 0),
                        l = e.getList().filter(({ id: o }) => !n(o) && t.isRendered(o) && e.isRendered(o)),
                        d =
                            l.length > 0
                                ? a(l, (e, o) => {
                                      const n = t.getForItem(e.id),
                                          a = t.getForItem(o.id);
                                      return r(s, n, a) || i(c, n, a);
                                  })
                                : null;
                    return d && d.id;
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
                        const o = c({ prevPos: e, nextPos: t });
                        if (o) {
                            const n = e.getForItem(o).getTop() - e.getForViewport().getTop();
                            return t.getForItem(o).getTop() - t.getForViewport().getTop() - n;
                        }
                        return 0;
                    },
                };
        },
        56851: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(202784),
                r = o(420740),
                i = o(108362),
                s = o(731708),
                a = o(154003),
                c = o(392237),
                l = o(111677),
                d = o.n(l),
                p = o(349035);
            const u = "error-detail",
                h = d().e49537c2,
                w = d().a9ae1e78;
            class m extends n.PureComponent {
                render() {
                    return n.createElement(r.Z, { testID: u }, n.createElement(p.Z, null), n.createElement(i.Z, { style: T.root }, n.createElement(s.ZP, { align: "center", color: "gray700", style: T.retryText }, h), n.createElement(a.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, w)));
                }
            }
            const T = c.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(500002),
                i = o(668214),
                s = o(997174),
                a = o(118823);
            const c = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: s.NH }))
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
                            location: { pathname: i, search: s },
                            locationKey: a,
                        } = e;
                    let c = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (c = !0));
                    const l = r || a;
                    ((l && r !== a) || (!l && o !== i) || n !== s || c) && this._performPageUpdates(this.props);
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
            const d = (0, r.ZP)(c(l));
        },
        167496: (e, t, o) => {
            o.d(t, { Z: () => w, r: () => h });
            var n = o(202784),
                r = o(154003),
                i = o(811176),
                s = o(111677),
                a = o.n(s),
                c = o(517747);
            const l = a().d7b8ebaa,
                d = a().d601fc20,
                p = a().j43f99be,
                u = a().ad6e11ac,
                h = Object.freeze({ relevance: "relevance", recency: "recency", likes: "likes" });
            function w({ replyDropdownSelection: e = h.relevance, changeDropdownState: t }) {
                const o = n.useCallback(
                        (e) => () => {
                            t?.(e);
                        },
                        [t],
                    ),
                    s = n.useMemo(
                        () => [
                            { isSelected: h.relevance === e, onClick: o(h.relevance), selectable: !0, text: p },
                            { isSelected: h.recency === e, onClick: o(h.recency), selectable: !0, text: d },
                            { isSelected: h.likes === e, onClick: o(h.likes), selectable: !0, text: l },
                        ],
                        [o, e],
                    );
                return n.createElement(r.ZP, { "aria-haspopup": "menu", icon: n.createElement(c.default, null), renderMenu: (e) => n.createElement(i.Z, { description: u, items: s, onCloseRequested: e, shouldCloseOnClick: !0 }), type: "primaryText" });
            }
        },
        519125: (e, t, o) => {
            o.d(t, { Mu: () => F, ZP: () => b });
            var n = o(662678),
                r = o(769471),
                i = o(337637),
                s = o(459679),
                a = o(192337),
                c = o(962741),
                l = o(372703),
                d = o(466015),
                p = o(267483),
                u = o(263863),
                h = o(351322),
                w = o(37533),
                m = o(777809),
                T = o(652815),
                y = o(560520),
                C = o(367991),
                v = o(705638),
                f = o(801184),
                g = o(335632);
            const x = "FocalTweetInlineTombstone",
                P = "More Replies";
            let Z;
            const I = Object.freeze({ Default: "ui_defaultLabel", TransparentCursor: "ui_transparentCursor" }),
                E = { ...(0, g.G)({}), [c.ZP.Tweet]: (0, v.Z)({ hideConversationControlsEducationText: !0, withMuteConversation: !0 }) },
                b = ({ changeDropdownState: e, hideReplyContextMode: t, isCurrentUserRootAuthor: o, isReaderMode: n, isTransparentCursorsEnabled: i, replyDropdownSelection: s, rootTweetAuthorId: a, tweetTextSize: d, withFocalTweetMedia: v, withRuxInjections: g }) =>
                    (0, r.Z)({}, E, {
                        [c.ZP.SelfThreadTweetComposer]: T.Z,
                        [c.ZP.Tweet]: {
                            handlers: {
                                [u.Z.Tweet]: (0, f.Cw)({
                                    hideConversationControlsEducationText: !0,
                                    hideExclusivityInfoEducationTextInReplies: !0,
                                    hideTrustedFriendsEducationTextInReplies: !0,
                                    createAdditionalProps: (e, { applyFeedbackAction: t }) => {
                                        const n = { withHideReply: o, showMidConversationControlEducationText: !0, withUnhideReply: !1, withViewHiddenReplies: !0 },
                                            r = !!(e.content && e.content.hasModeratedReplies && e.conversationPosition && e.conversationPosition.isStart);
                                        return (
                                            (n.conversationAnnotation = e?.content?.conversation_annotation),
                                            (n.hasModeratedReplies = r),
                                            (n.rootTweetAuthorId = a),
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
                                [u.Z.FocalTweet]: (0, f.g6)({
                                    createAdditionalProps: (t, { applyFeedbackAction: n }) => {
                                        const {
                                                content: { conversation_annotation: r, hasModeratedReplies: i },
                                                conversationPosition: c,
                                                referringContext: d,
                                            } = t,
                                            { contextTweetId: p, promotedContent: u, socialContext: h, topicFollowPrompt: w } = d || {};
                                        return {
                                            contextTweetId: p,
                                            conversationAnnotation: r,
                                            hasModeratedReplies: !!(i && c && c.isStart),
                                            promotedContent: u,
                                            rootTweetAuthorId: a,
                                            socialContext: h,
                                            topicFollowPrompt: w,
                                            withHideReply: o,
                                            withInlineMedia: v,
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
                                [u.Z.SelfThread]: (0, f.Cw)({ hideReplyContextMode: t }),
                                [u.Z.ReaderMode]: (0, f.Cw)({ hideConversationControlsEducationText: !0, hideExclusivityInfoEducationTextInReplies: !0, hideHighlightedUserLabel: !0, hideTrustedFriendsEducationTextInReplies: !0, isReaderMode: !0, shouldSelfThreadIncludeAvatar: !1, showWithheldBannerOnMyTweets: !1, tweetTextSize: d, withActionsDisabled: !1, withMuteConversation: !1, withRemoveFromBookmarks: !1, withSelfThread: !1, withUserPresence: !1 }),
                            },
                        },
                        [c.ZP.Tombstone]: { handlers: { [x]: (0, C._n)({ isFocalTweet: !0, isReaderMode: n, withHideReply: o }), [p.Z.Inline]: (0, C._n)({ isReaderMode: n, tweetDismissFeedbackKey: o ? l.qt : void 0, withHideReply: o }) } },
                        [c.ZP.Label]: h.ov({ selectDisplayType: (e) => ((e, t) => (t && e.content.text === P ? I.TransparentCursor : I.Default))(e, i), handlers: { [I.TransparentCursor]: m.L, [I.Default]: m.k } }),
                        [c.ZP.TimelineCursor]: (0, w.Z)({ withRuxInjections: g }),
                        [c.ZP.ThreadHeader]: y.Z,
                    }),
                F = ({ contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: r, showOnlyRelevantReplies: l, socialContext: d, topicFollowPrompt: u }) => {
                    const h = (e) => (e.type === c.ZP.Tweet && e.content.id === o) || (e.type === c.ZP.Tombstone && !!e.content && !!e.content.tweet && e.content.tweet.id === o);
                    return (o) => {
                        const w = (0, i.Z)(o, h);
                        let m = !1;
                        const T = ((e, t) => {
                            const o = (0, n.Z)(e, (e) => "0" !== e.sortIndex);
                            return o[0].splice(t + 1, 0, ...o[1]), o[0];
                        })(o, w);
                        let y;
                        return (0, s.Z)(T, (o, n) => {
                            const i = o.type === c.ZP.TimelineCursor && (o.content.cursorType === a.CursorType.ShowMoreThreads || o.content.cursorType === a.CursorType.ShowMoreThreadsPrompt),
                                s = o.type === c.ZP.Label && o.content.text === P;
                            if (l && (i || s)) return void 0 === y && o.content.cursorType === a.CursorType.ShowMoreThreadsPrompt ? (Z = n) : void 0 === y && (y = n), !1;
                            if (l && void 0 !== y && n >= y) return !1;
                            if (l && void 0 === y && n >= Z) return !1;
                            const h = n > w;
                            if ((o.type !== c.ZP.Tweet && o.type !== c.ZP.Tombstone) || h) return o.type !== c.ZP.SelfThreadTweetComposer && o;
                            {
                                const i = !m;
                                if (((m = !0), n < w)) {
                                    if (o.type === c.ZP.Tweet) return _(o, i);
                                    if (o.type === c.ZP.Tombstone) return D(o, i);
                                } else {
                                    if (o.type === c.ZP.Tombstone) {
                                        const t = { isStart: i, isEnd: !0 };
                                        return o.content.displayType === p.Z.Inline ? M({ contextTweetId: e, entry: o, socialContext: d, topicFollowPrompt: u, conversationPosition: t }) : S({ entry: o, conversationPosition: t });
                                    }
                                    if (o.type === c.ZP.Tweet) return R({ originalEntry: o, contextTweetId: e, contextualClientEventInfo: t, socialContext: d, promotedContent: r, topicFollowPrompt: u, conversationPosition: { isStart: i, isEnd: !0, position: "focal", showReplyContext: !1 } });
                                }
                            }
                        });
                    };
                },
                R = ({ contextTweetId: e, contextualClientEventInfo: t, conversationPosition: o, originalEntry: n, promotedContent: r, socialContext: i, topicFollowPrompt: s }) => d.Wf({ ...n, conversationPosition: o, referringContext: { contextTweetId: e, contextualClientEventInfo: t, socialContext: i, promotedContent: r, topicFollowPrompt: s } }, { displayType: u.Z.FocalTweet }),
                M = ({ contextTweetId: e, conversationPosition: t, entry: o, socialContext: n, topicFollowPrompt: r }) => d.Wf({ ...o, conversationPosition: t, referringContext: { contextTweetId: e, socialContext: n } }, { displayType: x }),
                S = ({ conversationPosition: e, entry: t }) => ({ ...t, conversationPosition: e }),
                _ = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor", showReplyContext: !1 } }),
                D = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor" } });
        },
        927192: (e, t, o) => {
            o.d(t, { Z: () => b });
            var n = o(202784),
                r = o(111677),
                i = o.n(r),
                s = o(912021),
                a = o(218093),
                c = o(334346),
                l = o(332878),
                d = o(163889),
                p = o(466015),
                u = o(847933),
                h = o(519896),
                w = o(443781),
                m = o(56851),
                T = o(810641),
                y = o(438965),
                C = o(668214);
            const v = (e, t) => {
                    const o = t.module.selectTimeline(e);
                    return !!o && o.terminatedStatus.atTop;
                },
                f = (e, t) => t.location.state && t.location.state.contextualClientEventInfo,
                g = (0, C.Z)().propsFromState(() => ({ isTimelineTerminatedAtTop: v, contextualClientEventInfo: f }));
            var x = o(519125);
            const P = i().d35d74e4,
                Z = (e) => {
                    switch (e) {
                        case u.Z.NOT_FOUND:
                            return n.createElement(m.Z, null);
                        case u.Z.NOT_ALLOWED:
                            return n.createElement(a.Z, null);
                        default:
                            return (0, d.ZP)(`Unhandled timeline unavailable reason: ${e}`), null;
                    }
                },
                I = () => n.createElement(m.Z, null);
            class E extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._isInitialFocusEntry = (e, t) => {
                            const { focalTweetId: o, location: n } = this.props;
                            return !!!n.state?.focusComposer && e && e.content && !!e.content.id && e.content.id === o;
                        }),
                        (this._getMemoizedPreprocessor = (0, s.Z)((e, t, o, n, r, i, s) => (0, x.Mu)({ focalTweetId: r, contextTweetId: t, contextualClientEventInfo: o, socialContext: e, topicFollowPrompt: i, promotedContent: n, showOnlyRelevantReplies: s }))),
                        (this._getPreprocessor = () => {
                            const { contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: n, socialContext: r, topicFollowPrompt: i } = this.props;
                            return this._getMemoizedPreprocessor(r, e, t, n, o, i, !1);
                        }),
                        (this._getMemoizedEntryConfig = (0, s.Z)((e, t, o, n, r, i) => {
                            const s = e && n && e === n;
                            return (0, x.ZP)({ changeDropdownState: this.props.changeDropdownState, isCurrentUserRootAuthor: !!s, hideReplyContextMode: t, replyDropdownSelection: o, rootTweetAuthorId: n, withFocalTweetMedia: r, withRuxInjections: i });
                        })),
                        (this._getEntryConfig = () => {
                            const e = this.props,
                                t = e.rootTweet?.user.id_str,
                                o = this.context.viewerUserId,
                                n = e.withFocalTweetMedia,
                                r = e.replyDropdownSelection,
                                i = this.context.featureSwitches.isTrue("rweb_tweets_reply_context_hidden") ? y.j.CONVERSATION : void 0,
                                s = e.withRuxInjections;
                            return this._getMemoizedEntryConfig(o, i, r, t, n, s);
                        });
                }
                render() {
                    const { apiErrorHandlerMap: e, fetchOptions: t, module: o, onEntriesRendered: r } = this.props;
                    return n.createElement(T.Z, { anchoring: l.Z, apiErrorHandlerMap: e, entryConfiguration: this._getEntryConfig(), fetchOptions: t, isInitialFocusEntry: this._isInitialFocusEntry, module: o, nearStartProximityRatio: 2, olderAtTop: !0, onEntriesRendered: r, preprocessEntryList: this._getPreprocessor(), prerollDisplayLocation: h.Nw.OTHER, previewEntries: this._previewEntries(), refreshControl: null, renderEmptyState: I, renderUnavailable: Z, title: P });
                }
                _previewEntries() {
                    const { focalTweet: e } = this.props,
                        t = e?.id_str || "";
                    return e ? [p.Se({ id: t, sortIndex: c.Z })] : void 0;
                }
            }
            (E.defaultProps = { withFocalTweetMedia: !0 }), (E.contextType = w.rC);
            const b = g(E);
        },
        438965: (e, t, o) => {
            o.d(t, { FE: () => i, Hx: () => c, Oj: () => r, P3: () => l, QO: () => a, j: () => s });
            var n = o(942893);
            const r = { component: "tweet" },
                i = { component: "thread" },
                s = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                a =
                    (e = !1) =>
                    (t) => {
                        const { conversationPosition: o, conversationTreeMetadata: n } = t;
                        return !(e || (o && !o.isEnd && (!n || !1 !== n.descendantConnector || 0 !== n.indents.filter((e) => "line" === e.displayType).length)));
                    },
                c = (e) => n.Z.getTweetURTEntryItem(e),
                l = (e, t, o) => {
                    const n = ["descendant", "ancestor"].includes(o?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === o?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: n, component: t?.component || e.component, action: t?.action || e.action, element: t?.element || e.element };
                };
        },
        340179: (e, t, o) => {
            o.d(t, { i: () => s });
            var n = o(516951),
                r = o(615656),
                i = o(51525);
            const s = (e = "") => ({
                [r.ZP.GenericNotFound]: { customAction: n.Z },
                [r.ZP.NotAuthorizedToViewUser]: {
                    customAction: () => {
                        (0, i.DR)(`/${e}`, { statusCode: 401 });
                    },
                },
                [r.ZP.StatusViewForbidden]: {
                    customAction: () => {
                        (0, i.DR)(`/${e}`);
                    },
                },
                showToast: !0,
            });
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var n = o(202784),
                r = o(890601),
                i = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Conversation~bundle.ImmersiveMediaViewer.07b4838a.js.map
