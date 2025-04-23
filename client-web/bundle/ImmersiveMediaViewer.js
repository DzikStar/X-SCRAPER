"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ImmersiveMediaViewer", "bundle.AudioSpaceDetail"],
    {
        572067: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(272175);
            const d = (e) => {
                const { canonical: t, description: o = "", image: d, imageAlt: a, imageH: i, imageType: s, imageW: l, title: c, ttl: u, type: p } = e;
                return n.createElement(r.ql, null, p ? n.createElement("meta", { content: p, property: "og:type" }) : null, t ? n.createElement("meta", { content: t, property: "og:url" }) : null, c ? n.createElement("meta", { content: c, property: "og:title" }) : null, n.createElement("meta", { content: o, property: "og:description" }), d ? n.createElement("meta", { content: d, property: "og:image" }) : null, s ? n.createElement("meta", { content: s, property: "og:image:type" }) : null, l ? n.createElement("meta", { content: l, property: "og:image:width" }) : null, i ? n.createElement("meta", { content: i, property: "og:image:height" }) : null, a ? n.createElement("meta", { content: a, property: "og:image:alt" }) : null, u ? n.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        218093: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(420740),
                d = o(674132);
            const a = o.n(d)().b2311b70;
            function i() {
                return n.createElement(r.Z, { onRetry: null, title: a });
            }
            const s = n.memo(i);
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
            const r = (e, t, o, r, d = "-1") => new n(e, t, o, r, d);
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
                d = (e, t, o) => a(e(o), e(t)),
                a = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                i = (e, t) => {
                    if (e.length) return e.reduce((e, o) => (t(o, e) > 0 ? o : e));
                },
                s = ({ nextPos: e, prevPos: t }) => {
                    const o = t.getForViewport(),
                        a = (e) => e && e.doesIntersectWith(o),
                        s = (e) => (e ? Math.abs(o.getTop() - e.getTop()) : 1 / 0),
                        l = e.getList().filter(({ id: o }) => !n(o) && t.isRendered(o) && e.isRendered(o)),
                        c =
                            l.length > 0
                                ? i(l, (e, o) => {
                                      const n = t.getForItem(e.id),
                                          i = t.getForItem(o.id);
                                      return r(a, n, i) || d(s, n, i);
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
                        const o = s({ prevPos: e, nextPos: t });
                        if (o) {
                            const n = e.getForItem(o).getTop() - e.getForViewport().getTop();
                            return t.getForItem(o).getTop() - t.getForViewport().getTop() - n;
                        }
                        return 0;
                    },
                };
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(500002),
                d = o(668214),
                a = o(997174),
                i = o(118823);
            const s = (0, d.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: a.NH }))
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
                            location: { pathname: d, search: a },
                            locationKey: i,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const l = r || i;
                    ((l && r !== i) || (!l && o !== d) || n !== a || s) && this._performPageUpdates(this.props);
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
            const c = (0, r.ZP)(s(l));
        },
        167496: (e, t, o) => {
            o.d(t, { Z: () => b, r: () => h });
            var n = o(202784),
                r = o(154003),
                d = o(811176),
                a = o(674132),
                i = o.n(a),
                s = o(517747);
            const l = i().d7b8ebaa,
                c = i().d601fc20,
                u = i().j43f99be,
                p = i().ad6e11ac,
                h = Object.freeze({ relevance: "relevance", recency: "recency", likes: "likes" });
            function b({ replyDropdownSelection: e = h.relevance, changeDropdownState: t }) {
                const o = n.useCallback(
                        (e) => () => {
                            t?.(e);
                        },
                        [t],
                    ),
                    a = n.useMemo(
                        () => [
                            { isSelected: h.relevance === e, onClick: o(h.relevance), selectable: !0, text: u },
                            { isSelected: h.recency === e, onClick: o(h.recency), selectable: !0, text: c },
                            { isSelected: h.likes === e, onClick: o(h.likes), selectable: !0, text: l },
                        ],
                        [o, e],
                    );
                return n.createElement(r.ZP, { "aria-haspopup": "menu", icon: n.createElement(s.default, null), renderMenu: (e) => n.createElement(d.Z, { description: p, items: a, onCloseRequested: e, shouldCloseOnClick: !0 }), type: "primaryText" });
            }
        },
        519125: (e, t, o) => {
            o.d(t, { Mu: () => P, ZP: () => C });
            var n = o(662678),
                r = o(769471),
                d = o(337637),
                a = o(459679),
                i = o(192337),
                s = o(962741),
                l = o(372703),
                c = o(466015),
                u = o(267483),
                p = o(263863),
                h = o(351322),
                b = o(37533),
                m = o(777809),
                w = o(652815),
                S = o(560520),
                D = o(367991),
                y = o(705638),
                f = o(801184),
                v = o(335632);
            const A = "FocalTweetInlineTombstone",
                I = "More Replies";
            let g;
            const M = Object.freeze({ Default: "ui_defaultLabel", TransparentCursor: "ui_transparentCursor" }),
                T = { ...(0, v.G)({}), [s.ZP.Tweet]: (0, y.Z)({ hideConversationControlsEducationText: !0, withMuteConversation: !0 }) },
                C = ({ changeDropdownState: e, hideReplyContextMode: t, isCurrentUserRootAuthor: o, isReaderMode: n, isTransparentCursorsEnabled: d, replyDropdownSelection: a, rootTweetAuthorId: i, tweetTextSize: c, withFocalTweetMedia: y, withRuxInjections: v }) =>
                    (0, r.Z)({}, T, {
                        [s.ZP.SelfThreadTweetComposer]: w.Z,
                        [s.ZP.Tweet]: {
                            handlers: {
                                [p.Z.Tweet]: (0, f.Cw)({
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
                                [p.Z.FocalTweet]: (0, f.g6)({
                                    createAdditionalProps: (t, { applyFeedbackAction: n }) => {
                                        const {
                                                content: { conversation_annotation: r, hasModeratedReplies: d },
                                                conversationPosition: s,
                                                referringContext: c,
                                            } = t,
                                            { contextTweetId: u, promotedContent: p, socialContext: h, topicFollowPrompt: b } = c || {};
                                        return {
                                            contextTweetId: u,
                                            conversationAnnotation: r,
                                            hasModeratedReplies: !!(d && s && s.isStart),
                                            promotedContent: p,
                                            rootTweetAuthorId: i,
                                            socialContext: h,
                                            topicFollowPrompt: b,
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
                                            replyDropdownSelection: a,
                                        };
                                    },
                                    dismissable: !0,
                                    divider: (e) => ({ top: !1, bottom: !1 }),
                                    hideReplyContextMode: t,
                                }),
                                [p.Z.SelfThread]: (0, f.Cw)({ hideReplyContextMode: t }),
                                [p.Z.ReaderMode]: (0, f.Cw)({ hideConversationControlsEducationText: !0, hideExclusivityInfoEducationTextInReplies: !0, hideHighlightedUserLabel: !0, hideTrustedFriendsEducationTextInReplies: !0, isReaderMode: !0, shouldSelfThreadIncludeAvatar: !1, showWithheldBannerOnMyTweets: !1, tweetTextSize: c, withActionsDisabled: !1, withMuteConversation: !1, withRemoveFromBookmarks: !1, withSelfThread: !1, withUserPresence: !1 }),
                            },
                        },
                        [s.ZP.Tombstone]: { handlers: { [A]: (0, D._n)({ isFocalTweet: !0, isReaderMode: n, withHideReply: o }), [u.Z.Inline]: (0, D._n)({ isReaderMode: n, tweetDismissFeedbackKey: o ? l.qt : void 0, withHideReply: o }) } },
                        [s.ZP.Label]: h.ov({ selectDisplayType: (e) => ((e, t) => (t && e.content.text === I ? M.TransparentCursor : M.Default))(e, d), handlers: { [M.TransparentCursor]: m.L, [M.Default]: m.k } }),
                        [s.ZP.TimelineCursor]: (0, b.Z)({ withRuxInjections: v }),
                        [s.ZP.ThreadHeader]: S.Z,
                    }),
                P = ({ contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: r, showOnlyRelevantReplies: l, socialContext: c, topicFollowPrompt: p }) => {
                    const h = (e) => (e.type === s.ZP.Tweet && e.content.id === o) || (e.type === s.ZP.Tombstone && !!e.content && !!e.content.tweet && e.content.tweet.id === o);
                    return (o) => {
                        const b = (0, d.Z)(o, h);
                        let m = !1;
                        const w = ((e, t) => {
                            const o = (0, n.Z)(e, (e) => "0" !== e.sortIndex);
                            return o[0].splice(t + 1, 0, ...o[1]), o[0];
                        })(o, b);
                        let S;
                        return (0, a.Z)(w, (o, n) => {
                            const d = o.type === s.ZP.TimelineCursor && (o.content.cursorType === i.CursorType.ShowMoreThreads || o.content.cursorType === i.CursorType.ShowMoreThreadsPrompt),
                                a = o.type === s.ZP.Label && o.content.text === I;
                            if (l && (d || a)) return void 0 === S && o.content.cursorType === i.CursorType.ShowMoreThreadsPrompt ? (g = n) : void 0 === S && (S = n), !1;
                            if (l && void 0 !== S && n >= S) return !1;
                            if (l && void 0 === S && n >= g) return !1;
                            const h = n > b;
                            if ((o.type !== s.ZP.Tweet && o.type !== s.ZP.Tombstone) || h) return o.type !== s.ZP.SelfThreadTweetComposer && o;
                            {
                                const d = !m;
                                if (((m = !0), n < b)) {
                                    if (o.type === s.ZP.Tweet) return Z(o, d);
                                    if (o.type === s.ZP.Tombstone) return R(o, d);
                                } else {
                                    if (o.type === s.ZP.Tombstone) {
                                        const t = { isStart: d, isEnd: !0 };
                                        return o.content.displayType === u.Z.Inline ? _({ contextTweetId: e, entry: o, socialContext: c, topicFollowPrompt: p, conversationPosition: t }) : x({ entry: o, conversationPosition: t });
                                    }
                                    if (o.type === s.ZP.Tweet) return E({ originalEntry: o, contextTweetId: e, contextualClientEventInfo: t, socialContext: c, promotedContent: r, topicFollowPrompt: p, conversationPosition: { isStart: d, isEnd: !0, position: "focal", showReplyContext: !1 } });
                                }
                            }
                        });
                    };
                },
                E = ({ contextTweetId: e, contextualClientEventInfo: t, conversationPosition: o, originalEntry: n, promotedContent: r, socialContext: d, topicFollowPrompt: a }) => c.Wf({ ...n, conversationPosition: o, referringContext: { contextTweetId: e, contextualClientEventInfo: t, socialContext: d, promotedContent: r, topicFollowPrompt: a } }, { displayType: p.Z.FocalTweet }),
                _ = ({ contextTweetId: e, conversationPosition: t, entry: o, socialContext: n, topicFollowPrompt: r }) => c.Wf({ ...o, conversationPosition: t, referringContext: { contextTweetId: e, socialContext: n } }, { displayType: A }),
                x = ({ conversationPosition: e, entry: t }) => ({ ...t, conversationPosition: e }),
                Z = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor", showReplyContext: !1 } }),
                R = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor" } });
        },
        927192: (e, t, o) => {
            o.d(t, { Z: () => C });
            var n = o(202784),
                r = o(674132),
                d = o.n(r),
                a = o(912021),
                i = o(218093),
                s = o(334346),
                l = o(332878),
                c = o(163889),
                u = o(466015),
                p = o(847933),
                h = o(519896),
                b = o(443781),
                m = o(231035),
                w = o(810641),
                S = o(438965),
                D = o(668214);
            const y = (e, t) => {
                    const o = t.module.selectTimeline(e);
                    return !!o && o.terminatedStatus.atTop;
                },
                f = (e, t) => t.location.state && t.location.state.contextualClientEventInfo,
                v = (0, D.Z)().propsFromState(() => ({ isTimelineTerminatedAtTop: y, contextualClientEventInfo: f }));
            var A = o(519125);
            const I = d().d35d74e4,
                g = (e) => {
                    switch (e) {
                        case p.Z.NOT_FOUND:
                            return n.createElement(m.Z, null);
                        case p.Z.NOT_ALLOWED:
                            return n.createElement(i.Z, null);
                        default:
                            return (0, c.ZP)(`Unhandled timeline unavailable reason: ${e}`), null;
                    }
                },
                M = () => n.createElement(m.Z, null);
            class T extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._isInitialFocusEntry = (e, t) => {
                            const { focalTweetId: o, location: n } = this.props;
                            return !!!n.state?.focusComposer && e && e.content && !!e.content.id && e.content.id === o;
                        }),
                        (this._getMemoizedPreprocessor = (0, a.Z)((e, t, o, n, r, d, a) => (0, A.Mu)({ focalTweetId: r, contextTweetId: t, contextualClientEventInfo: o, socialContext: e, topicFollowPrompt: d, promotedContent: n, showOnlyRelevantReplies: a }))),
                        (this._getPreprocessor = () => {
                            const { contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: n, socialContext: r, topicFollowPrompt: d } = this.props;
                            return this._getMemoizedPreprocessor(r, e, t, n, o, d, !1);
                        }),
                        (this._getMemoizedEntryConfig = (0, a.Z)((e, t, o, n, r, d) => {
                            const a = e && n && e === n;
                            return (0, A.ZP)({ changeDropdownState: this.props.changeDropdownState, isCurrentUserRootAuthor: !!a, hideReplyContextMode: t, replyDropdownSelection: o, rootTweetAuthorId: n, withFocalTweetMedia: r, withRuxInjections: d });
                        })),
                        (this._getEntryConfig = () => {
                            const e = this.props,
                                t = e.rootTweet?.user.id_str,
                                o = this.context.viewerUserId,
                                n = e.withFocalTweetMedia,
                                r = e.replyDropdownSelection,
                                d = this.context.featureSwitches.isTrue("rweb_tweets_reply_context_hidden") ? S.j.CONVERSATION : void 0,
                                a = e.withRuxInjections;
                            return this._getMemoizedEntryConfig(o, d, r, t, n, a);
                        });
                }
                render() {
                    const { apiErrorHandlerMap: e, fetchOptions: t, module: o, onEntriesRendered: r } = this.props;
                    return n.createElement(w.Z, { anchoring: l.Z, apiErrorHandlerMap: e, entryConfiguration: this._getEntryConfig(), fetchOptions: t, isInitialFocusEntry: this._isInitialFocusEntry, module: o, nearStartProximityRatio: 2, olderAtTop: !0, onEntriesRendered: r, preprocessEntryList: this._getPreprocessor(), prerollDisplayLocation: h.Nw.OTHER, previewEntries: this._previewEntries(), refreshControl: null, renderEmptyState: M, renderUnavailable: g, title: I });
                }
                _previewEntries() {
                    const { focalTweet: e } = this.props,
                        t = e?.id_str || "";
                    return e ? [u.Se({ id: t, sortIndex: s.Z })] : void 0;
                }
            }
            (T.defaultProps = { withFocalTweetMedia: !0 }), (T.contextType = b.rC);
            const C = v(T);
        },
        438965: (e, t, o) => {
            o.d(t, { FE: () => d, Hx: () => s, Oj: () => r, P3: () => l, QO: () => i, j: () => a });
            var n = o(942893);
            const r = { component: "tweet" },
                d = { component: "thread" },
                a = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                i =
                    (e = !1) =>
                    (t) => {
                        const { conversationPosition: o, conversationTreeMetadata: n } = t;
                        return !(e || (o && !o.isEnd && (!n || !1 !== n.descendantConnector || 0 !== n.indents.filter((e) => "line" === e.displayType).length)));
                    },
                s = (e) => n.Z.getTweetURTEntryItem(e),
                l = (e, t, o) => {
                    const n = ["descendant", "ancestor"].includes(o?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === o?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: n, component: t?.component || e.component, action: t?.action || e.action, element: t?.element || e.element };
                };
        },
        340179: (e, t, o) => {
            o.d(t, { i: () => a });
            var n = o(516951),
                r = o(615656),
                d = o(51525);
            const a = (e = "") => ({
                [r.ZP.GenericNotFound]: { customAction: n.Z },
                [r.ZP.NotAuthorizedToViewUser]: {
                    customAction: () => {
                        (0, d.DR)(`/${e}`, { statusCode: 401 });
                    },
                },
                [r.ZP.StatusViewForbidden]: {
                    customAction: () => {
                        (0, d.DR)(`/${e}`);
                    },
                },
                showToast: !0,
            });
        },
        335636: (e, t, o) => {
            o.d(t, { H: () => d, V: () => a });
            o(571372);
            var n = o(202784),
                r = o(516951);
            const d = n.createContext({ blockedOrMutedEntryIds: new Set(), forwardPivotInfo: void 0, hasClosedCaptioning: !0, isMuted: !1, setTweetContentHidden: r.Z, isTweetContentHidden: !1, setHasClosedCaptioning: r.Z, onMuteToggle: r.Z, onTweetUpdate: r.Z, setBlockedOrMutedEntry: r.Z });
            function a() {
                const e = n.useContext(d);
                if (void 0 === e) throw new Error("useImmersiveMediaViewerContext was used outside of its provider ImmersiveMediaViewerContext");
                return e;
            }
        },
        897695: (e, t, o) => {
            o.r(t), o.d(t, { ImmersiveMediaViewerScreen: () => Ae, default: () => ge });
            o(136728), o(543673), o(240753), o(128399);
            var n = o(202784),
                r = o(878052),
                d = o(325686),
                a = o(688715),
                i = o(392237),
                s = o(674132),
                l = o.n(s),
                c = o(370751),
                u = o(187669),
                p = o(572067),
                h = o(449067),
                b = o(807896),
                m = o(335636),
                w = o(912021),
                S = o(2138),
                D = o(166852),
                y = o(516951),
                f = o(143778),
                v = o(163889),
                A = o(163390),
                I = o(768572),
                g = o(933794),
                M = o(579051),
                T = o(719536),
                C = o(476984),
                P = o.n(C),
                E = o(214997),
                _ = o(837880),
                x = o(908478),
                Z = o(323265),
                R = o(993547),
                k = o(725516),
                B = o(609927);
            class F extends n.Component {
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
            const N = i.default.supports("height: 100dvh");
            class H extends n.Component {
                constructor(e) {
                    super(e),
                        (this._scrollRef = n.createRef()),
                        (this._isSafari = Z.ZP.isSafari() || Z.ZP.isIOS()),
                        (this._lastItemIndexRef = n.createRef()),
                        (this._getCurrentItemIndexMemoized = (0, w.Z)((e, t) => e.findIndex((e) => e.id === t))),
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
                        (this._updateScrollEnd = (0, S.Z)((e) => {
                            const { analytics: t, onPositionUpdate: o, onScrollEnd: n, viewport: r } = this.props,
                                d = this._getCurrentItemIndex(),
                                a = e;
                            d !== a && (t.scribe({ action: "scroll", data: { event_value: window.innerHeight } }), a > d && t.scribe({ component: "feed", action: "next" }), a < d && t.scribe({ component: "feed", action: "previous" }), a === this.props.list.length - 2 && t.scribe({ action: "load", element: "bottom" }), o(a, r.getRect()), n(), this.setState(({ visibleItemId: e }) => ({ visibleItemId: this.props.list[a] ? this.props.list[a].id : e })));
                        }, 100)),
                        (this.adjustFocusBy = (e) => {
                            this.setState(({ windowInnerHeight: t }) => {
                                const o = this._getCurrentItemIndex(),
                                    n = (0, _.Z)(o + e, 0, this.props.list.length - 1);
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
                    const e = N ? "100dvh" : `${this.state.windowInnerHeight}px`,
                        t = this._getCurrentItemIndex();
                    return n.createElement(
                        B.Z.Provider,
                        { value: { isGlobal: !1, isSticky: !1, adjustFocusBy: this.adjustFocusBy, currentIndex: t, totalItems: this.props.list.length } },
                        n.createElement(
                            d.Z,
                            { style: { height: e, maxHeight: e } },
                            n.createElement(
                                E.Z,
                                { onScroll: this._handleScroll, ref: this._scrollRef, scrollEventThrottle: 16, showsHorizontalScrollIndicator: !1, showsVerticalScrollIndicator: !1, style: U.scrollView, testID: "vss-scroll-view" },
                                this.props.list.map((o, r) => {
                                    const a = Math.abs(t - r) <= 1;
                                    return n.createElement(d.Z, { key: o.id, style: { height: e, maxHeight: e, width: "100%" } }, n.createElement(d.Z, { style: U.scrollSnapItem }, n.createElement(d.Z, { style: U.scrollSnapItemInner }, a && n.createElement(F, { item: o, key: o.id }))));
                                }),
                            ),
                        ),
                    );
                }
                shouldComponentUpdate(e, t) {
                    return !P()(this.props, e) || !(0, x.Z)(this.state, t);
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
                O = (0, R.Z)((0, k.Z)(H)),
                V = { triggerCause: T.Z.MOVEMENT };
            class L extends n.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._renderer = n.createRef()),
                        (this._keyboardShortcutHandlers = { [A.uq.refresh]: this._handleKeyboardRefresh, [A.uq.nextItem]: this._handleKeyboardFocusNext, [A.uq.previousItem]: this._handleKeyboardFocusPrevious }),
                        (this._getList = (0, w.Z)((e, t, o, n) => e.filter((e) => !this.props.blockedOrMutedEntryIds.has(o(e))).map((e, r) => (0, M.f)(o(e), e, t, !1, n && n(e))))),
                        (this._render = () => {
                            const { withKeyboardShortcuts: e } = this.props;
                            return n.createElement(g.Z, { enabled: e, handlers: this._keyboardShortcutHandlers }, n.createElement(O, { list: this.state.list, onPositionUpdate: this._handlePositionUpdate, onScrollEnd: this._handleScrollEnd, ref: this._renderer }));
                        }),
                        (this._handleScrollEnd = () => {
                            this.props.onScrollEnd && this.props.onScrollEnd();
                        }),
                        (this._handlePositionUpdate = (e, t) => {
                            const { onItemsRendered: o } = this.props,
                                n = this.state.list;
                            0 === e && this.props.onAtStart(V), e === n.length - 1 && this.props.onAtEnd(V), 1 === e && this.props.onNearStart(V), e === n.length - 2 && this.props.onNearEnd(V), n[e] ? o && o({ positions: [{ id: n[e].id, rectangle: t }], viewport: t }) : (0, v.ZP)(`VerticalSnapScroller could not update position to ${e}, itemList was ${n.length} elements.`, { level: "warning" });
                        }),
                        (this._handleKeyboardRefresh = (0, S.Z)(() => {
                            this.props.onKeyboardRefresh && this.props.onKeyboardRefresh();
                        }, 1e3)),
                        (this._handleKeyboardFocusNext = () => {
                            this.adjustFocusBy(1);
                        }),
                        (this._handleKeyboardFocusPrevious = () => {
                            this.adjustFocusBy(-1);
                        }),
                        (this.isAtNewest = () => !this._renderer.current || this._renderer.current.isAtNewest());
                    const { identityFunction: o, items: r, renderer: d, sortIndexFunction: a } = this.props;
                    this.state = { _items: r, list: this._getList(r, d, o, a) };
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
            (L.contextType = I.y3), (L.defaultProps = { onPositionRestored: y.Z, onAtEnd: y.Z, onAtStart: y.Z, onNearEnd: y.Z, onNearStart: y.Z, onScrollEnd: y.Z, noItemsRenderer: f.Z, withKeyboardShortcuts: !1 });
            const $ = n.forwardRef((e, t) =>
                n.createElement(
                    d.Z,
                    null,
                    n.createElement(m.H.Consumer, null, ({ blockedOrMutedEntryIds: o }) => n.createElement(L, (0, b.Z)({ ref: t }, e, { blockedOrMutedEntryIds: o }))),
                ),
            );
            var K = o(652904),
                j = o(810641),
                z = o(952793),
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
                de = (e, t) => {
                    const o = se(e, t),
                        n = re(0, t);
                    return !o && n ? ce(e, t) : ie(e, t);
                },
                ae = (e, t) => {
                    const o = re(0, t);
                    return !se(e, t) && o ? le(e, t) : ((e, t) => t.match.params.screenName || "")(0, t);
                },
                ie = (e, t) => t.match.params.statusId || "",
                se = (e, t) => !(!e.urt[`immersiveMedia-${ie(e, t)}`] && !e.urt[`immersiveProfile-${ie(e, t)}`]),
                le = (e, t) => new URLSearchParams(t.location.search).get("currentTweetUser") || "",
                ce = (e, t) => new URLSearchParams(t.location.search).get("currentTweet") || "",
                ue = (e, t) => {
                    if ("profile" === new URLSearchParams(t.location.search).get("mode")) return "profile";
                },
                pe = (e, t) => ((e, t) => e.location && e.location.state && e.location.state[t])(t, "forwardPivotInfo"),
                he = (0, oe.Z)()
                    .propsFromState(() => ({ mode: ue, pinnedTweetId: de, pinnedTweetUser: ae, pinnedTweet: ne.Z.createHydratedTweetSelector(de), forwardPivotInfo: pe }))
                    .withAnalytics({ page: "gallery", section: "immersive" });
            var be = o(263863),
                me = o(351322),
                we = o(509738);
            var Se = o(335632),
                De = o(962741);
            const ye = l().h59700fa,
                fe = {
                    ...(0, Se.G)({}),
                    [De.ZP.Tweet]: me.ov({
                        selectDisplayType: (e) => e.content.displayType,
                        handlers: {
                            [be.Z.Tweet]:
                                ((ve = {}),
                                {
                                    loader: () =>
                                        Promise.all([
                                            o.e("icons.5"),
                                            o.e("icons.12"),
                                            o.e("icons.20"),
                                            o.e("icons.0"),
                                            o.e("icons.21"),
                                            o.e("icons.28"),
                                            o.e("icons.17"),
                                            o.e("modules.common-e907d115"),
                                            o.e("modules.common-e019dbda"),
                                            o.e("icons.22"),
                                            o.e("icons.9"),
                                            o.e("icons.25"),
                                            o.e("icons.6"),
                                            o.e("icons.10"),
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
                                            o.e("icons.24"),
                                            o.e("icons.23"),
                                            o.e("icons.14"),
                                            o.e("icons.3"),
                                            o.e("icons.4"),
                                            o.e("icons.13"),
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
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-34cda585"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aeee0c9e"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                                            o.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                                            o.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2b309ab6"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                                            o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                                            o.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),
                                            o.e("loader.immersiveTweetHandler"),
                                        ]).then(o.bind(o, 311554)),
                                    loaderOptions: ve,
                                    loaderKey: "immersiveTweetLoader",
                                    strategy: we.Z.OnDemand,
                                }),
                        },
                    }),
                };
            var ve;
            const Ae = (e) => {
                    const { analytics: t, forwardPivotInfo: o, history: s, location: l, mode: b, pinnedTweet: w, pinnedTweetId: S, pinnedTweetUser: D } = e,
                        y = (0, z.hC)("immersive_viewer_enable_profile_viewer"),
                        [f] = n.useState(!1),
                        [v, A] = n.useState(null),
                        [I, g] = n.useState(!1),
                        [M, T] = n.useState(!1),
                        [C, P] = n.useState(!1),
                        [E, _] = n.useState(!0),
                        [x, Z] = n.useState(new Set()),
                        { width: R } = r.Z.get("screen");
                    (0, u.q)(() => {
                        if ((t.scribe({ action: "impression" }), !(R >= i.default.theme.breakpoints.large)))
                            return (
                                g(R >= i.default.theme.breakpoints.large),
                                s.replace(`${(0, W.PK)(`/${D}/status/${S}`)}?${new URLSearchParams(l.search).toString()}`),
                                function () {
                                    t.scribe({ action: "navigate" });
                                }
                            );
                        s.push(`/${D}/status/${S}`);
                    });
                    const k = n.useCallback(
                            (e) => {
                                if (w) {
                                    const t = new URLSearchParams(l.search),
                                        o = Array.from(t.keys()).length ? `&${t.toString()}` : "";
                                    s.replace(`${w.permalink}/mediaViewer?currentTweet=${e.id_str}&currentTweetUser=${e.user.screen_name}${o}`), A(e);
                                }
                            },
                            [s, w, l.search],
                        ),
                        B = n.useCallback(
                            (e) => {
                                T(e);
                            },
                            [T],
                        ),
                        F = n.useCallback(
                            (e) => {
                                P(e);
                            },
                            [P],
                        ),
                        N = n.useCallback(
                            (e) => {
                                _(e);
                            },
                            [_],
                        ),
                        H = n.useMemo(() => (y && "profile" === b ? ee(S) : X(S, D)), [b, S, D, y]),
                        U = n.useMemo(() => {
                            if (!w) return null;
                            const e = ((e) => {
                                const t = (e.entities?.media || []).find((e) => "photo" === e.type);
                                if (t && "photo" === t.type) return t;
                            })(w);
                            return n.createElement(p.Z, { canonical: ((t = w.user.screen_name), (o = w.id_str), (0, a.ju)(`https://x.com/${t}/status/${o}/mediaViewer`)), description: w.text, image: e?.media_url_https, imageH: e?.original_info?.height, imageType: (e?.media_url_https.match(/([^.]*)$/) || [""])[0], imageW: e?.original_info?.width, title: w.user.screen_name, type: "article" });
                            var t, o;
                        }, [w]);
                    return n.createElement(
                        K.Z,
                        null,
                        U,
                        n.createElement(
                            h.Z.Configure,
                            { headerless: !0 },
                            n.createElement(
                                d.Z,
                                { style: Ie.container, testID: "modalContainer" },
                                n.createElement(
                                    d.Z,
                                    { style: [Ie.neighbor, I && Ie.desktopNeighbor] },
                                    n.createElement(
                                        d.Z,
                                        { style: I && Ie.desktopTimelineContainer },
                                        n.createElement(
                                            m.H.Provider,
                                            {
                                                testID: "contextProvider",
                                                value: {
                                                    forwardPivotInfo: o,
                                                    onTweetUpdate: k,
                                                    hasClosedCaptioning: E,
                                                    isMuted: M,
                                                    setHasClosedCaptioning: N,
                                                    onMuteToggle: B,
                                                    setBlockedOrMutedEntry: (e, t) => {
                                                        const o = (0, c.Z)(Array.from(x));
                                                        t ? o.add(e) : o.delete(e), Z(o);
                                                    },
                                                    blockedOrMutedEntryIds: x,
                                                    setTweetContentHidden: F,
                                                    isTweetContentHidden: C,
                                                },
                                            },
                                            S && n.createElement(j.Z, { entryConfiguration: fe, module: H, previewEntries: w ? [G.Se({ id: S, sortIndex: "stable_sort_index" })] : void 0, scroller: $, title: ye }),
                                        ),
                                    ),
                                    n.createElement(d.Z, { style: I && Ie.desktopMediaDrawer, testID: I ? "immersive-viewer-desktop-conversation-drawer" : void 0 }, v && ((e, t) => !!e || t)(I, f) ? n.createElement(te.Z, { location: l, rootTweet: v, screenName: D, tweet: v, tweetId: v.id_str }) : null),
                                ),
                            ),
                        ),
                    );
                },
                Ie = i.default.create((e) => ({ container: { flexDirection: "row", overflowX: "hidden", overflowY: "hidden", height: "100%", width: "100%", position: "relative" }, neighbor: { flexGrow: 1, flexShrink: 1 }, desktopNeighbor: { display: "flex", flexDirection: "row" }, desktopTimelineContainer: { flex: 2 }, desktopMediaDrawer: { flex: 1 } })),
                ge = he((0, q.Z)(Ae));
        },
        67534: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(202784),
                r = o(392237),
                d = o(715601),
                a = o(167496),
                i = o(927192),
                s = o(71620),
                l = o(340179),
                c = o(125363),
                u = o(360142),
                p = o(735313),
                h = o(904096);
            const b = r.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, overflow: "auto", width: h.p, borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid" } })),
                m = function ({ contextTweetId: e, location: t, promotedContent: o, rootTweet: r, screenName: h, socialContext: m, tweet: w, tweetId: S }) {
                    const [D, y] = n.useState(a.r.relevance),
                        f = (0, c.I0)(),
                        v = (0, s.n7)("CONVERSATION_DRAWER"),
                        A = n.useMemo(() => (0, l.i)(h), [h]),
                        I = (e, t) => {
                            let o = "Relevance";
                            return t === a.r.recency ? (o = "Recency") : t === a.r.likes && (o = "Likes"), (0, u.ZP)({ focalTweetId: e, rankingMode: o });
                        };
                    return n.createElement(
                        d.Z,
                        { "aria-expanded": !0, style: b.root },
                        n.createElement(i.Z, {
                            apiErrorHandlerMap: A,
                            changeDropdownState: (e) => {
                                y(e), f((0, p.Z)(I(S, e))).catch(v({}));
                            },
                            contextTweetId: e,
                            focalTweet: w,
                            focalTweetId: S,
                            location: t,
                            module: I(S, D),
                            promotedContent: o,
                            replyDropdownSelection: D,
                            rootTweet: r,
                            selectedTweet: { selectedTweetId: S },
                            socialContext: m,
                            withFocalTweetMedia: !1,
                        }),
                    );
                };
        },
        904096: (e, t, o) => {
            o.d(t, { J: () => d, p: () => r });
            var n = o(521514);
            const r = n.Z.columnWidths.secondary.normal,
                d = n.Z.columnWidths.primary;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ImmersiveMediaViewer.e5c7635a.js.map
