"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DMRichTextCompose", "ondemand.RichText"],
    {
        468032: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o,
                r,
                s = {
                    fragment: {
                        argumentDefinitions: (o = [
                            { defaultValue: null, kind: "LocalArgument", name: "conversation_id" },
                            { defaultValue: null, kind: "LocalArgument", name: "labeled_convo_collection_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "DMLabelsListToggleLabelMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "conversation_id", variableName: "conversation_id" },
                                    { kind: "Variable", name: "labeled_convo_collection_id", variableName: "labeled_convo_collection_id" },
                                ],
                                kind: "ScalarField",
                                name: "labeled_conversation_collection_entries_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: o, kind: "Operation", name: "DMLabelsListToggleLabelMutation", selections: r },
                    params: { id: "BkE8C-TCIBC6p6zLq1J9sA", metadata: {}, name: "DMLabelsListToggleLabelMutation", operationKind: "mutation", text: null },
                };
            s.hash = "fc3b4d1f6a44ca8897470dbd3fe37b52";
            const i = s;
        },
        201787: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(154003),
                s = n(111677),
                i = n.n(s),
                a = n(711223);
            const l = i().h810143c,
                c = ({ "aria-label": e, conversationId: t, link: n, style: s }) => {
                    const i = o.createElement(a.default, null);
                    return o.createElement(r.ZP, { "aria-label": e || l, hoverLabel: { label: l }, icon: i, key: t, link: n, pullRight: !0, style: s, type: "primaryText" });
                };
        },
        625661: (e, t, n) => {
            n.d(t, { ZP: () => p });
            var o = n(202784),
                r = n(614983),
                s = n.n(r),
                i = n(325686),
                a = n(370006),
                l = n(786998),
                c = n(929028),
                d = n(386802);
            function u(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            s()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: s, isFullWidth: i, isLarge: c, leftControl: d, middleControl: p, position: h, rightControl: m, secondaryBar: f, style: g, subtitle: y, title: b, titleDomId: C, titleIconCell: k, titleIconCellSize: v, withBackground: x, withWideContainer: w } = this.props,
                        { isModal: T } = this.context,
                        S = s ? d : o.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        _ = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!x, T, !!f);
                    return o.createElement(o.Fragment, null, o.createElement(l.Z, { centerTitle: t, centeredLogo: n, isFullWidth: i, isLarge: c, leftControl: S, middleControl: p, position: u(h, T, r), rightControl: m, style: g, subtitle: y, title: b, titleDomId: C, titleIconCell: k, titleIconCellSize: v, withBackground: _, withWideContainer: w }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? o.createElement(i.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(807896),
                r = n(202784),
                s = n(182056),
                i = n(879113),
                a = n(392237),
                l = n(111677),
                c = n.n(l),
                d = n(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, n) => {
                    const a = s.Z.isOnline();
                    return r.createElement(i.Z, (0, o.Z)({}, t, { icon: a ? void 0 : r.createElement(d.default, { style: h.icon }), retryMessage: a ? e : u }));
                },
                h = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = r.forwardRef(p);
        },
        222718: (e, t, n) => {
            n.d(t, { Z: () => y });
            var o = n(202784),
                r = n(325686),
                s = n(537392),
                i = n(10656),
                a = n(655352),
                l = n(555079),
                c = n(500002),
                d = n(625661),
                u = n(449067),
                p = n(655543),
                h = n(715601),
                m = n(392237);
            const f = m.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...m.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class g extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? o.createElement(r.Z, { style: f.fill }, o.createElement(h.Z, { style: f.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return o.createElement(s.ZP, null, ({ containerWidth: e }) => (i.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: r, showBackButtonOnRoot: s, showSubtitleOnRoot: i, showSubtitleOnWideDetail: l, showTitleOnRoot: c, withBottomBorder: d, withDetailOpen: p, ...h } = this.props;
                    return o.createElement(o.Fragment, null, (0, a.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(u.Z.Configure, h), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: s, backLocation: i, documentTitle: a, headerless: c, history: p, leftControl: h, middleControl: m, onBackClick: g, rightControl: y, screenType: b, searchBoxOptions: C, secondaryBar: k, showBackButtonOnRoot: v, showSubtitleOnRoot: x, showSubtitleOnWideDetail: w, showTitleOnRoot: T, subtitle: S, title: _, titleIconCell: E, titleIconCellSize: Z, withDetailOpen: I, withSearchBox: B, withTweetButton: L, withWideContainer: D } = this.props,
                        P = "root" === b,
                        F = "secondaryRoot" === b,
                        R = "primaryDetail" === b,
                        O = (R && w) || (P && x),
                        M = (P && !v) || (R && e),
                        A = (P && !T) || (R && e && !T),
                        N = P ? l.ey : R ? l.vX : void 0,
                        W = o.createElement(r.Z, { style: f.appBarContainer }, o.createElement(d.ZP, { backLocation: i, fixed: !1, hideBackButton: M, history: p, leftControl: h, middleControl: m, onBackClick: g, rightControl: y, secondaryBar: k, style: s, subtitle: O ? S : void 0, title: A ? void 0 : _, titleDomId: N, titleIconCell: E, titleIconCellSize: Z, withWideContainer: D })),
                        K = P || (F && I) ? null : o.createElement(u.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: i, documentTitle: a, headerless: c, middleControl: m, onBackClick: g, rightControl: y, searchBoxOptions: C, subtitle: S, title: _, withSearchBox: B, withTweetButton: L });
                    return o.createElement(o.Fragment, null, K, W);
                }
            }
            (g.contextType = p.Z), (g.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const y = (0, c.ZP)(g);
        },
        496364: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(202784),
                r = n(107267),
                s = n(791632),
                i = n(222718);
            const a = (e) => {
                const t = (0, r.useHistory)();
                return (0, s.HD)(t) ? e.children || null : o.createElement(i.Z, e);
            };
        },
        536790: (e, t, n) => {
            n.d(t, { Z: () => u });
            n(571372), n(136728);
            var o = n(202784),
                r = n(301503),
                s = n(597496),
                i = n(339110),
                a = n(456910),
                l = n(230295),
                c = n(267446);
            class d extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = o.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: n, isInline: r, isInlineReply: a, onTypeaheadStateChange: l, source: c } = this.props,
                                { canShowTypeahead: d, queryContext: u } = this.state,
                                p = d && u ? { word: u.word, resultType: u.resultType } : void 0;
                            return o.createElement(s.H1, { composeCommunityId: t, contextText: n, isInline: r, isInlineReply: a, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: l, query: p, ref: this._genericWrapperRef, source: c || i._4.Compose }, e(this._handleInputChange));
                        }),
                        (this._getCaret = (e) => e.getSelection().getStartOffset()),
                        (this._getPlaintextFromCurrentBlock = (e) => {
                            const t = e.getSelection().anchorKey;
                            return e.getCurrentContent().getBlockForKey(t).getText();
                        }),
                        (this._handleSelectItem = (e) => {
                            const { onTextUpdated: t } = this.props,
                                { queryContext: n } = this.state;
                            if (n) {
                                const o = (0, c.k)(e, n.resultType);
                                t(this._replaceToken(o, n));
                            }
                            this._setQueryContext(void 0);
                        }),
                        (this._handleInputChange = (e) => {
                            if (!(0, l.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: t } = this.state,
                                    n = t && t.word,
                                    o = this._getPlaintextFromCurrentBlock(e),
                                    { end: r, start: s, word: i } = a.si(this._getCaret(e), o),
                                    l = a.bR(i || "", "compose");
                                if (l?.q === n) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === s)) this._setQueryContext(void 0);
                                else if (l) {
                                    const { q: t, result_type: n } = l;
                                    this._setQueryContext({ word: t, resultType: n, editorState: e, startIndex: s, endIndex: r });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, t) {
                    const { editorState: n, endIndex: o, startIndex: s } = t,
                        i = n.getSelection().merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: s, focusOffset: o }),
                        a = r.Modifier.replaceText(n.getCurrentContent(), i, e),
                        l = r.EditorState.push(n, a, "insert-characters"),
                        c = s + e.length,
                        d = l.getSelection().merge({ anchorOffset: c, focusOffset: c });
                    return r.EditorState.forceSelection(l, d);
                }
            }
            const u = d;
        },
        376293: (e, t, n) => {
            n.d(t, { $f: () => T, KV: () => y, LI: () => I, SC: () => w, Vt: () => k, ed: () => B, op: () => S });
            var o = n(202784),
                r = n(190286),
                s = n(111677),
                i = n.n(s),
                a = n(616894),
                l = n(314948),
                c = n(516951),
                d = n(163390);
            const u = i().cfd2f35e,
                p = i().f9e45cfb,
                h = i().fcd4d489,
                m = i().a6450e84,
                f = i().g353ad73,
                g = i().ad00a739,
                y = i().a9fd20be,
                b = i().j546fb79,
                C = i().c9623eeb,
                k = i().e133be4e,
                v = i().he43bca4,
                x = i().f5f01af6,
                w = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                T = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: p({ screenName: e }), label: m, text: t ? g({ screenName: e }) : f({ screenName: e }) }),
                S = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: n, source: o, testID: r, unblockAction: s, unblockSubtext: i, user: a }) => {
                    let l,
                        u = c.Z;
                    const p = I(a, n);
                    switch (o) {
                        case w.PROFILE:
                        case w.LIST_DETAIL:
                        case w.FOLLOWERS_LIST:
                            u = () => {
                                a.blocking ? s(p) : e(p);
                            };
                            break;
                        case w.TWEET:
                        case w.TWEET_CARET:
                        case w.RICH_FEEDBACK:
                            (l = d.uq.block),
                                (u = () => {
                                    a.blocking ? s(p) : e(p);
                                });
                    }
                    return { confirmation: p, onClick: u, testID: r, shortcutKey: l, Icon: _(a.blocking), text: Z(a), subText: E({ user: a, blockSubtext: t, unblockSubtext: i }) };
                },
                _ = (e) => (e ? l.default : a.default),
                E = ({ blockSubtext: e, unblockSubtext: t, user: n }) => (!n.blocking && e ? e(n.screen_name) : n.blocking ? t : void 0),
                Z = (e) => (e.blocking ? C({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                I = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: b({ screenName: e }), label: k, text: t ? x : v }))(e.screen_name, t) : T(e.screen_name, t)),
                B = ({ confirmation: e, handleConfirm: t, onClose: n }) => {
                    const { confirmButtonType: s, headline: i, label: a, text: l } = e;
                    return o.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: a, confirmButtonType: s, headline: i, onCancel: n, onConfirm: t, text: l });
                };
        },
        712816: (e, t, n) => {
            n.d(t, { d: () => r });
            var o = n(111677);
            const r = { defaultToast: { text: n.n(o)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, n) => {
            n.d(t, { D: () => r });
            var o = n(111677);
            const r = { defaultToast: { text: n.n(o)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, n) => {
            n.d(t, { OX: () => p, Od: () => d, PN: () => h, uq: () => c, wR: () => f });
            var o = n(251067),
                r = n(522171),
                s = n(111677),
                i = n.n(s),
                a = n(912021),
                l = n(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, a.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, o.fH)(o.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: c.nextItem, universal: !0 }, { description: i().g0048656, keys: c.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: c.refresh, universal: !1 }, { description: i().ha8209bc, keys: c.goHome, universal: !1 }, { description: i().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: i().eb75875e, keys: c.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: i().fa98627a, keys: c.goProfile, universal: !1 }, { description: i().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: i().b0041756, keys: c.goLists, universal: !1 }, { description: i().d4986f86, keys: c.goMessages, universal: !1 }, { description: i().h5860a68, keys: c.goGrok, universal: !1 }, { description: i().bb081ea2, keys: c.goSettings, universal: !1 }, { description: i().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: c.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                p = () => [
                    { description: i().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: i().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: i().e736990a, keys: c.newMessage, universal: !1 },
                    { description: i().a9ae1e78, keys: c.search, universal: !1 },
                    { description: i().fe731016, keys: r.Z.shortcuts.like, universal: !1 },
                    { description: i().d17df548, keys: r.Z.shortcuts.reply, universal: !1 },
                    { description: i().g062295e, keys: r.Z.shortcuts.retweet, universal: !1 },
                    { description: i().h01621a4, keys: r.Z.shortcuts.share, universal: !0 },
                    { description: i().gb303814, keys: c.bookmark, universal: !1 },
                    { description: i().c03b1126, keys: c.mute, universal: !1 },
                    { description: i().ebd2abb2, keys: c.block, universal: !1 },
                    { description: i().hc6c5510, keys: "Enter", universal: !0 },
                    { description: i().eebdef38, keys: r.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: i().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                h = () => [
                    { description: i().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: i().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: i().b881560e, keys: c.video.mute, universal: !0 },
                    { description: i().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: i().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: i().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                m = (0, a.Z)((e) => {
                    const t = d(e),
                        n = p(),
                        o = h(),
                        r = {};
                    return (
                        [...n, ...o, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      r[t] = e;
                                  })
                                : (r[t] = e);
                        }),
                        JSON.stringify(r)
                    );
                }),
                f = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        409438: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        175853: (e, t, n) => {
            n.r(t), n.d(t, { DMConversationScreen: () => Y, default: () => ee });
            var o = n(202784),
                r = n(708852),
                s = n(794731),
                i = n(652904),
                a = n(246851),
                l = n(441790),
                c = n(587521),
                d = n(297436),
                u = n(668214),
                p = n(296196),
                h = n(798538),
                m = n(997174),
                f = n(390387),
                g = n(5849),
                y = n(919022),
                b = n(593953);
            const C = (e, t) => t.match.params.conversationId,
                k = (e, t) => p.selectConversation(e, C(0, t)),
                v = (e, t) => h.q9(e, C(0, t)),
                x = (e, t) => h.W8(e, C(0, t)),
                w = (0, u.Z)()
                    .propsFromState(() => ({ conversation: k, entries: p.selectEntries, conversationId: C, isNewGroupConversation: b.rR, perspective: f._h, newConversationParticipants: b.bZ, tweetAttachment: b.Ss, users: y.ZP.selectAll, isUploading: v, media: x }))
                    .adjustStateProps(({ conversation: e, conversationId: t, entries: n, isNewGroupConversation: o, isUploading: r, media: s, newConversationParticipants: i, perspective: a, tweetAttachment: l, users: c }) => {
                        const u = e?.data;
                        return { conversation: (u && (0, d.lk)(u, n, c)) || void 0, conversationId: t, isNewGroupConversation: o, isUploading: r, media: s, newConversationParticipants: i, perspective: a };
                    })
                    .propsFromActions(
                        ({
                            match: {
                                params: { conversationId: e },
                            },
                        }) => ({ cancelUpload: (0, b.Ly)(e), removeMedia: (0, b.Xx)(e), setLastViewedDmInboxPath: g.EA, updateTweetDetailNav: m.NH }),
                    )
                    .withAnalytics({ page: "messages", section: "thread" });
            n(136728);
            var T = n(325686),
                S = n(107267),
                _ = n(642153),
                E = n(537392),
                Z = n(731708),
                I = n(154003),
                B = n(392237),
                L = n(111677),
                D = n.n(L),
                P = n(913313),
                F = n(201787),
                R = n(496364),
                O = n(952793),
                M = n(10656),
                A = n(198506),
                N = n(275365),
                W = n(503115),
                K = n(356738),
                z = n(255534),
                U = n(276032),
                H = n(164383);
            const V = D().d4986f86,
                q = D().e3e58b6e,
                j = D().a9ddbb94,
                J = D().dd4779a0,
                G = 8,
                $ = 3;
            function Q(e) {
                const t = (0, S.useHistory)(),
                    n = (0, S.useLocation)(),
                    r = (0, O.hC)("responsive_web_dm_label_enabled"),
                    { conversation: s, conversationId: i, newConversationParticipants: a, perspective: l } = e,
                    c = (e) => {
                        s?.trusted ? t.push({ pathname: "/messages", state: n.state }) : e();
                    },
                    d = (e, t) => {
                        const n = e.map(({ user: e }) => e.profile_image_url_https).slice(0, t);
                        return o.createElement(T.Z, { style: X.facePile }, o.createElement(_.Z, { userAvatarSize: "large", userAvatarUrls: n }));
                    },
                    u = (e) => {
                        const t = s && s.participants.length ? (0, z.E)({ conversation: s, perspective: l }) : a ? (0, z.E)({ newConversationParticipants: a, perspective: l }) : V,
                            n = s?.participants.length ? o.createElement(z.Z, { conversation: s, perspective: l, textSize: "headline2", withScreenName: !1 }) : a ? o.createElement(z.Z, { newConversationParticipants: a, perspective: l, textSize: "headline2", withScreenName: !1 }) : o.createElement(Z.ZP, { size: "headline2" }, V),
                            r = s && l ? (0, A.Z)(s, l) : void 0,
                            c = (0, b.NL)(i);
                        let u = "large",
                            p = l ? o.createElement(W.Z, { conversation: s, perspective: l, size: u, withLock: c }) : void 0;
                        return r && s?.type === N.eD.GROUP && void 0 === s?.avatar && ((p = ((e) => o.createElement(E.ZP, null, ({ containerWidth: t }) => (M.Z.isTwoColumnLayout(t) ? d(e, G) : d(e, $))))(r)), (u = "custom")), { ...(e && { titleIconCell: p, titleIconCellSize: u }), title: n, documentTitle: t };
                    },
                    p = () => {
                        const e = s?.type === N.eD.GROUP,
                            t = n?.state?.position || 0;
                        return i ? o.createElement(T.Z, { style: X.rightControlStyles }, o.createElement(H.fK, { conversationId: i }), r && o.createElement(U.Z, { conversationId: i }, o.createElement(I.ZP, { "aria-haspopup": "menu", "aria-label": J, hoverLabel: { label: J }, icon: o.createElement(P.default, null), size: "small", style: X.infoButton, type: "primaryText" })), o.createElement(F.Z, { "aria-label": e ? j : q, conversationId: i, link: { pathname: `/messages/${i}/info`, state: { position: t } }, style: X.infoButton })) : void 0;
                    };
                return o.createElement(
                    R.Z,
                    (() => {
                        const t = u(e.showTitle);
                        return { backLocation: "/messages", onBackClick: c, rightControl: p(), screenType: "primaryDetail", withBottomTabBar: !1, headerless: !1, secondaryBar: r ? o.createElement(K.Z, null) : void 0, ...t };
                    })(),
                    e.children,
                );
            }
            const X = B.default.create((e) => ({ infoButton: { marginEnd: e.spaces.space4 }, rightControlStyles: { flexDirection: "row" }, facePile: { display: "flex", flexDirection: "row" } }));
            function Y({ conversationId: e, history: t, location: n, isNewGroupConversation: d = !1, conversation: u, newConversationParticipants: p, perspective: h, richTextInputContext: m, setLastViewedDmInboxPath: f, typeaheadWrapper: g = s.Z }) {
                const y = (0, a.Z)(e),
                    [b, C] = o.useState(!1),
                    k = (0, l.N)();
                e || d || n.pathname !== window.location.pathname || t.replace({ pathname: "/messages" });
                o.useEffect(() => {
                    e !== y && f(n.pathname);
                }, [e, n.pathname, y, f]);
                const v = "string" == typeof n.query.text ? n.query.text : void 0,
                    x = (0, r.Y4)();
                return o.createElement(
                    i.Z,
                    null,
                    o.createElement(
                        Q,
                        { conversation: u, conversationId: e, newConversationParticipants: p, perspective: h, showTitle: !b },
                        o.createElement(c.Z, {
                            conversationId: e,
                            history: t,
                            isWide: x,
                            location: n,
                            onConversationProfileVisibilityChange: (e) => {
                                b !== e && C(e);
                            },
                            prefillText: v,
                            richTextInputContext: m,
                            typeaheadWrapper: g,
                            typingNotifier: k,
                        }),
                    ),
                );
            }
            const ee = w(Y);
        },
        446766: (e, t, n) => {
            n.r(t), n.d(t, { DMConversationScreenWithRichText: () => l, default: () => c });
            var o = n(807896),
                r = n(202784),
                s = n(175853),
                i = n(536790),
                a = n(687184);
            const l = (e) => r.createElement(a.default, null, ({ richTextInputContext: t, typeaheadWrapper: n }) => r.createElement(s.default, (0, o.Z)({}, e, { richTextInputContext: t, typeaheadWrapper: i.Z }))),
                c = l;
        },
        687184: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            n(202784);
            var o = n(925873),
                r = n(977952),
                s = n(536790);
            function i(e) {
                const t = { convertEmojiToEntities: o.Z.convertEmojiToEntities, element: r.Z, initEditorState: o.Z.initEditorState, insertTextAtCursor: o.Z.insertTextAtCursor };
                return e.children({ richTextInputContext: t, typeaheadWrapper: s.Z });
            }
        },
        356738: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                r = n(325686),
                s = n(929028),
                i = n(731708),
                a = n(868634),
                l = n(392237),
                c = n(111677);
            const d = n.n(c)().ca9af866;
            function u(e) {
                const t = [],
                    n = s.Z.getBackgroundStyles();
                return t.length > 0
                    ? o.createElement(
                          r.Z,
                          { style: [p.container, n] },
                          o.createElement(r.Z, { style: p.label }, o.createElement(i.ZP, { size: "subtext2", weight: "heavy" }, d)),
                          o.createElement(
                              r.Z,
                              { style: p.row },
                              t.map((e) => o.createElement(a.ZP, { background: "gray700", fontSize: "subtext2", style: p.selectionPill }, e)),
                          ),
                      )
                    : null;
            }
            const p = l.default.create((e) => ({ container: { paddingStart: e.spaces.space16, paddingBottom: e.spaces.space8, display: "flex", alignItems: "center", flexDirection: "row" }, row: { flexDirection: "row", alignItems: "center" }, label: { marginEnd: e.spaces.space4 }, selectionPill: { margin: e.spaces.space2 }, selector: { display: "flex", paddingEnd: e.spaces.space16 } }));
        },
        276032: (e, t, n) => {
            n.d(t, { Z: () => I });
            var o = n(202784),
                r = n(325686),
                s = n(952428),
                i = n(731708),
                a = n(30899),
                l = n(392237),
                c = n(468032),
                d = (n(585488), n(351743)),
                u = n.n(d),
                p = n(457311),
                h = n(682830),
                m = n(965245),
                f = n(736063),
                g = n(725516),
                y = n(792098),
                b = n(96083);
            const C = ({ checked: e, label: t, onToggleCheck: n, refetch: a }) => {
                    const l = o.useCallback(() => {
                        n(t.id);
                    }, [n, t.id]);
                    return t ? o.createElement(r.Z, { role: "listitem" }, o.createElement(s.Z, { onClick: l, style: v.root }, o.createElement(b.Z, { checked: e }), o.createElement(i.ZP, { size: "subtext2" }, t.name))) : null;
                },
                k = o.memo(C),
                v = l.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, gap: e.spaces.space4 } })),
                x = { buttonLink: "/setting/labels", buttonText: "Manage Labels", buttonType: "brandOutlined" },
                w = c.Z;
            function T(e) {
                return e.id;
            }
            function S({ conversationId: e, footer: t }) {
                const n = (0, g.z)();
                o.useEffect(() => {
                    n.scribe({ action: "impression" });
                }, [n]);
                const [r, s, i] = (0, y.Z)(),
                    [a] = u()(w),
                    l = r.viewer.user_results.result,
                    c = o.useCallback(
                        (t) => {
                            e && a({ variables: { conversation_id: e, labeled_convo_collection_id: t } });
                        },
                        [e, a],
                    ),
                    d = o.useCallback((e) => o.createElement(k, { checked: !1, label: e, onToggleCheck: c, refetch: i }), [i, c]);
                if ("User" !== l.__typename) return null;
                const h = l.labeled_conversation_collection_slice?.items;
                return h ? (h.length ? o.createElement(m.Z, { assumedItemHeight: 64, cacheKey: "dmLabelsList", footer: t, identityFunction: T, items: h, onNearEnd: s, renderer: d, withoutHeadroom: !0 }) : o.createElement(p.Z, x)) : null;
            }
            const _ = { context: "DMLabelsList" };
            function E(e) {
                return o.createElement(f.H, { errorConfig: _, suspenseFallback: o.createElement(h.J, null) }, o.createElement(S, e));
            }
            const Z = o.memo(E);
            function I({ children: e, conversationId: t, onDismiss: n }) {
                const l = o.useCallback(() => {
                        n?.();
                    }, [n]),
                    c = o.useMemo(() => o.createElement(r.Z, { style: B.footer }, o.createElement(s.Z, { style: B.footerButton }, o.createElement(i.ZP, { align: "center", size: "subtext1" }, "Create Label")), o.createElement(s.Z, { style: B.footerButton }, o.createElement(i.ZP, { align: "center", size: "subtext1" }, "Manage Labels"))), []),
                    d = o.useCallback(() => o.createElement(Z, { conversationId: t, footer: c }), [c, t]);
                return o.createElement(a.Z, { contentStyle: B.content, onDismiss: l, preferredVerticalOrientation: "down", renderContent: d, withArrow: !0, withFixedPosition: !0 }, e);
            }
            const B = l.default.create((e) => ({ footer: { borderColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, content: { maxHeight: "250px" }, footerButton: { paddingVertical: e.spaces.space8 } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(202784),
                r = n(476984),
                s = n.n(r),
                i = n(143778),
                a = n(750410),
                l = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class h extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: s, loadingMessage: i, onRequestRetry: d, render: h, renderFailure: m, retryMessage: f, retryable: g } = this.props;
                    switch (r) {
                        case c:
                            return g ? o.createElement(a.Z, { icon: s, onRequestRetry: d, retryMessage: f }) : n ? o.createElement(l.m, { failureMessage: n }) : m();
                        case u:
                            return o.createElement(l.J, { "aria-label": e, color: t, loadingMessage: i });
                        case p:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        977952: (e, t, n) => {
            n.d(t, { Z: () => I });
            var o = n(807896),
                r = n(202784),
                s = (n(136728), n(301503)),
                i = n(516951),
                a = n(950822),
                l = n(233184),
                c = n(745153),
                d = n(392237),
                u = n(989272),
                p = (n(571372), n(370751)),
                h = n(122375),
                m = n(835305),
                f = n(899492);
            function g(e) {
                let t;
                if (e.html)
                    try {
                        t = (function (e) {
                            if (!e.html) return null;
                            if (
                                ((function (e) {
                                    const t = e.html;
                                    if (!t) return;
                                    const n = RegExp(`<img alt="(?<emoji>[^"]+)" .*? src="${f.S()}[^>]*>`, "g");
                                    let o,
                                        r = t;
                                    for (; (o = n.exec(t)); ) {
                                        const e = o.groups?.emoji;
                                        if (!e) continue;
                                        const t = o.index,
                                            s = n.lastIndex;
                                        r = [r.substring(0, t), e, r.substring(s, r.length)].join("");
                                    }
                                    e.html = r;
                                })(e),
                                !e.html)
                            )
                                return null;
                            const t = (0, s.convertFromHTML)(e.html);
                            if (!t || !Array.isArray(t.contentBlocks)) return null;
                            const n = s.ContentState.createFromBlockArray(t.contentBlocks, t.entityMap);
                            let o = (0, s.convertToRaw)(n);
                            e.longformRichTextTransform ||
                                (o.blocks = (function (e, t) {
                                    const n = /[\n|\r]*?[^\n|^\r]+(?:[\n|\r]+)?/g;
                                    let o;
                                    const r = [];
                                    for (; (o = n.exec(e.text)); ) {
                                        const t = o.index,
                                            s = n.lastIndex,
                                            i = e.text.substring(t, s),
                                            a = v(i, x.start_newline),
                                            l = v(i, x.end_newline);
                                        r.push([a, l]);
                                    }
                                    const i = [];
                                    for (let e = 0; e < t.blocks.length; e++) {
                                        let [n, o] = r[e];
                                        0 === e && n && n++, e === t.blocks.length - 1 && o && o++;
                                        for (let e = 0; e < n; e++) {
                                            const e = (0, s.genKey)(),
                                                t = { ...w(), key: e };
                                            i.push(t);
                                        }
                                        i.push(t.blocks[e]);
                                        for (let e = 0; e < o; e++) {
                                            const e = (0, s.genKey)(),
                                                t = { ...w(), key: e };
                                            i.push(t);
                                        }
                                    }
                                    return i;
                                })(e, o));
                            o = (function (e, t) {
                                const n = [];
                                for (const o of t.blocks)
                                    switch (o.type) {
                                        case h.Wo:
                                            n.push(y(e, o));
                                            break;
                                        case h.p8:
                                        case h.r$:
                                        case h.Mm:
                                        case h.Z4:
                                        case h.Re:
                                            if (e.allowExtendedPasteStyles) n.push(y(e, o));
                                            else {
                                                const t = { ...o, type: h.Wo };
                                                n.push(y(e, t));
                                            }
                                            break;
                                        default: {
                                            const t = { ...o, type: h.Wo };
                                            n.push(y(e, t));
                                        }
                                    }
                                return { blocks: n, entityMap: e.longformRichTextTransform ? t.entityMap : {} };
                            })(e, o);
                            const r = (0, s.convertFromRaw)(o);
                            return r;
                        })(e);
                    } catch (t) {
                        const n = "warning",
                            { html: o, text: r } = e,
                            s = { extra: { text: r, html: o, error: t }, level: n };
                        l.Z.report(new Error("[RichTextInput::handle_paste] html error"), s);
                    }
                return !t && e.text && (t = s.ContentState.createFromText(e.text)), t || null;
            }
            function y(e, t) {
                const n = t.inlineStyleRanges || [],
                    o = [],
                    r = e.longformRichTextTransform ? k : C;
                for (const t of n) !e.stripPastedStyles && r.has(t.style) && o.push(t);
                return (t.inlineStyleRanges = o), t;
            }
            const b = [m.DraftJS.Bold, m.DraftJS.Italic],
                C = (0, p.Z)(b),
                k = (0, p.Z)([...C, m.DraftJS.Strikethrough]);
            function v(e, t) {
                const n = e.match(t);
                if (!n) return 0;
                const [o] = n;
                return o.length - 1;
            }
            const x = { newline: /[\n\r]/, start_newline: /^[\n\r]+/, end_newline: /[\n\r]+$/ };
            function w() {
                return { key: "", type: "unstyled", text: "", depth: void 0, inlineStyleRanges: [], entityRanges: [] };
            }
            class T extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { containerClass: void 0 }),
                        (this.focus = () => {
                            this._editor && this._editor.focus();
                        }),
                        (this.blur = () => {
                            this._editor && this._editor.blur();
                        }),
                        (this.getValue = () => this.props.editorState.getCurrentContent().getPlainText()),
                        (this.getOffsetHeight = () => {
                            const { editor: e } = this._editor || {};
                            return (e && e.offsetHeight) || 0;
                        }),
                        (this.clear = () => {}),
                        (this._setSelectionToStart = () => {
                            const { editorState: e } = this.props,
                                t = e.getCurrentContent().getFirstBlock().getKey();
                            return s.EditorState.acceptSelection(e, new s.SelectionState({ anchorKey: t, anchorOffset: 0, focusKey: t, focusOffset: 0, isBackward: !1 }));
                        }),
                        (this._setFocusToStart = () => {
                            const e = this._setSelectionToStart();
                            return s.EditorState.forceSelection(e, e.getSelection());
                        }),
                        (this._setFocusToEnd = () => {
                            const { autoFocus: e, editorState: t, onChange: n } = this.props;
                            n?.(e ? s.EditorState.moveFocusToEnd(t) : s.EditorState.moveSelectionToEnd(t));
                        }),
                        (this._setDraftJsStyle = () => {
                            const { contentHorizontalPadding: e, placeholderTextColor: t } = this.props,
                                n = (0, u.w3)({ placeholderTextColor: t, contentHorizontalPadding: e });
                            this.setState({ containerClass: n });
                        }),
                        (this._setEditorRef = (e) => {
                            this._editor = e;
                        }),
                        (this._handleViewClick = () => this.focus()),
                        (this._handleFiles = (e) => {
                            const { onFilesAdded: t } = this.props,
                                n = [];
                            if (
                                (e.forEach((e) => {
                                    e instanceof File && n.push(e);
                                }),
                                n.length)
                            ) {
                                const e = t?.(n);
                                return e ? "handled" : "not-handled";
                            }
                            return "not-handled";
                        }),
                        (this._onPastedFiles = (e) => this._handleFiles(e)),
                        (this._onDroppedFiles = (e, t) => this._handleFiles(t)),
                        (this._onPastedText = (e, t, n) => {
                            const { multiline: o, onChange: r } = this.props;
                            if (!r) return "not-handled";
                            const { allowExtendedPasteStyles: i, longformRichTextTransform: a, stripPastedStyles: l } = this.props;
                            let c = g({ text: e, html: t, editorState: n, stripPastedStyles: l, allowExtendedPasteStyles: i, longformRichTextTransform: a });
                            if (!c) return "not-handled";
                            if (!o) {
                                const e = (function (e) {
                                    return e.replace(E.all_newlines, " ");
                                })(c.getPlainText());
                                c = s.ContentState.createFromText(e);
                            }
                            return (c = s.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), c.getBlockMap())), r(s.EditorState.push(n, c, "insert-fragment")), "handled";
                        }),
                        (this._myKeyBindingFn = (e) => {
                            const { dismissComposerCommandName: t, keyBindingFn: n, sendTweetCommandName: o } = this.props,
                                { hasCommandModifier: r } = s.KeyBindingUtil;
                            return e.keyCode === _.enter && r(e) ? o : e.keyCode === _.esc ? t : n?.(e) || (0, s.getDefaultKeyBinding)(e);
                        }),
                        (this._onKeyCommand = (e) => {
                            const { keyCommandHandlers: t } = this.props,
                                n = t && t[e];
                            return n ? (n(), "handled") : "not-handled";
                        }),
                        (this._onSingleLineReturn = (e, t) => {
                            const { handleReturn: n } = this.props;
                            return n?.(e, t), "handled";
                        }),
                        (this._getContainerStyle = () => {
                            const e = Z[this.props.appTextSize],
                                t = d.default.theme.lineHeightsPx[e];
                            let n = 1,
                                o = 1;
                            this.props.multiline && (this.props.numberOfLines && (n = this.props.numberOfLines), this.props.maxNumberOfLines && (o = this.props.maxNumberOfLines));
                            const r = n * t,
                                s = o * t;
                            return this.props.withMaxHeight ? { minHeight: r, maxHeight: s, overflowX: "hidden", overflowY: "auto" } : { minHeight: r, height: "100%" };
                        });
                }
                componentDidMount() {
                    const { onChange: e, positionCursorAtBeginning: t, positionCursorAtEnd: n } = this.props;
                    n ? this._setFocusToEnd() : t ? e?.(this._setFocusToStart()) : this.props.autoFocus && this.focus(), this._setDraftJsStyle();
                }
                static getDerivedStateFromError() {
                    return {};
                }
                componentDidCatch(e) {
                    l.Z.report(e, { tags: { userVisible: !0, draftJs: !0 } });
                }
                render() {
                    const { multiline: e, onKeyPress: t, onKeyUp: n, testID: o } = this.props;
                    return r.createElement(S, { className: [!e && u._i.single_line, this.state.containerClass, this.props.withFormatInline && u._i.format_inline].join(" ") }, r.createElement(S, { onClick: this._handleViewClick, style: [this._getContainerStyle(), this.props.style], testID: o ? `${o}RichTextInputContainer` : void 0 }, r.createElement(s.Editor, { ariaActiveDescendantID: this.props.ariaActiveDescendant, ariaAutoComplete: this.props.ariaAutocomplete, ariaControls: this.props.ariaControls, ariaLabel: this.props.ariaLabel, ariaMultiline: e, blockRenderMap: this.props.blockRenderMap, blockRendererFn: this.props.blockRendererFn, blockStyleFn: this.props.blockStyleFn, customAttrs: { [c.Z.NO_REFOCUS_ATTRIBUTE]: "true", onKeyPress: t, onKeyUp: n }, customStyleMap: { overflow: { backgroundColor: d.default.theme.colors.red200 } }, editorState: this.props.editorState, handleBeforeInput: this.props.handleBeforeInput, handleDroppedFiles: this._onDroppedFiles, handleKeyCommand: this._onKeyCommand, handlePastedFiles: this._onPastedFiles, handlePastedText: this._onPastedText, handleReturn: e ? this.props.handleReturn : this._onSingleLineReturn, keyBindingFn: this._myKeyBindingFn, onChange: this.props.onChange, onFocus: this.props.onFocus, onKeyDown: this.props.onKeyDown, placeholder: this.props.placeholder, ref: this._setEditorRef, spellCheck: "false" !== this.props.spellCheck, stripPastedStyles: this.props.stripPastedStyles, tabIndex: 0, webDriverTestID: o }), this.props.dragPlaceholder));
                }
            }
            T.defaultProps = { allowExtendedPasteStyles: !1, appTextSize: "body", autoFocus: !1, keyCommandHandlers: {}, maxNumberOfLines: 30, multiline: !0, numberOfLines: 6, onFocus: i.Z, positionCursorAtEnd: !1, spellCheck: "true", stripPastedStyles: !0, withMaxHeight: !0, longformRichTextTransform: !1 };
            const S = (e) => (0, a.Z)("div", e),
                _ = { enter: 13, esc: 27 };
            const E = { all_newlines: /[\r\n]/g },
                Z = { small: "subtext2", normal: "body", large: "headline1", subtext2: "subtext2", body: "body", headline1: "headline1", title4: "title4" },
                I = r.forwardRef((e, t) =>
                    r.createElement(
                        T,
                        (0, o.Z)({}, e, {
                            onFocus: function (t) {
                                e.onFocus && e.onFocus(t);
                            },
                            ref: t,
                        }),
                    ),
                );
        },
        662678: (e, t, n) => {
            n.d(t, { G: () => r, Z: () => o });
            n(136728);
            const o = function (e, t) {
                return r(e, t);
            };
            function r(e, t) {
                return e.reduce(
                    (n, o, r) => {
                        const s = t ? t(o, r, e) : !!o;
                        return s && n[0].push(o), !s && n[1].push(o), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DMRichTextCompose.975b3eda.js.map
