"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DMDrawer"],
    {
        290402: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(807896),
                a = r(202784),
                o = r(182056),
                i = r(879113),
                s = r(392237),
                c = r(111677),
                l = r.n(c),
                d = r(968478);
            const u = l().aa6e3300,
                p = ({ retryMessage: e, ...t }, r) => {
                    const s = o.Z.isOnline();
                    return a.createElement(i.Z, (0, n.Z)({}, t, { icon: s ? void 0 : a.createElement(d.default, { style: h.icon }), retryMessage: s ? e : u }));
                },
                h = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                g = a.forwardRef(p);
        },
        376293: (e, t, r) => {
            r.d(t, { $f: () => D, KV: () => f, LI: () => H, SC: () => C, Vt: () => E, ed: () => M, op: () => S });
            var n = r(202784),
                a = r(190286),
                o = r(111677),
                i = r.n(o),
                s = r(616894),
                c = r(314948),
                l = r(516951),
                d = r(163390);
            const u = i().cfd2f35e,
                p = i().f9e45cfb,
                h = i().fcd4d489,
                g = i().a6450e84,
                m = i().g353ad73,
                v = i().ad00a739,
                f = i().a9fd20be,
                b = i().j546fb79,
                y = i().c9623eeb,
                E = i().e133be4e,
                w = i().he43bca4,
                k = i().f5f01af6,
                C = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                D = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: p({ screenName: e }), label: g, text: t ? v({ screenName: e }) : m({ screenName: e }) }),
                S = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: r, source: n, testID: a, unblockAction: o, unblockSubtext: i, user: s }) => {
                    let c,
                        u = l.Z;
                    const p = H(s, r);
                    switch (n) {
                        case C.PROFILE:
                        case C.LIST_DETAIL:
                        case C.FOLLOWERS_LIST:
                            u = () => {
                                s.blocking ? o(p) : e(p);
                            };
                            break;
                        case C.TWEET:
                        case C.TWEET_CARET:
                        case C.RICH_FEEDBACK:
                            (c = d.uq.block),
                                (u = () => {
                                    s.blocking ? o(p) : e(p);
                                });
                    }
                    return { confirmation: p, onClick: u, testID: a, shortcutKey: c, Icon: x(s.blocking), text: Z(s), subText: T({ user: s, blockSubtext: t, unblockSubtext: i }) };
                },
                x = (e) => (e ? c.default : s.default),
                T = ({ blockSubtext: e, unblockSubtext: t, user: r }) => (!r.blocking && e ? e(r.screen_name) : r.blocking ? t : void 0),
                Z = (e) => (e.blocking ? y({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                H = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: b({ screenName: e }), label: E, text: t ? k : w }))(e.screen_name, t) : D(e.screen_name, t)),
                M = ({ confirmation: e, handleConfirm: t, onClose: r }) => {
                    const { confirmButtonType: o, headline: i, label: s, text: c } = e;
                    return n.createElement(a.Z, { cancelButtonLabel: u, confirmButtonLabel: s, confirmButtonType: o, headline: i, onCancel: r, onConfirm: t, text: c });
                };
        },
        712816: (e, t, r) => {
            r.d(t, { d: () => a });
            var n = r(111677);
            const a = { defaultToast: { text: r.n(n)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, r) => {
            r.d(t, { D: () => a });
            var n = r(111677);
            const a = { defaultToast: { text: r.n(n)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, r) => {
            r.d(t, { OX: () => p, Od: () => d, PN: () => h, uq: () => l, wR: () => m });
            var n = r(251067),
                a = r(522171),
                o = r(111677),
                i = r.n(o),
                s = r(912021),
                c = r(323265);
            const l = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, s.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: l.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: l.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: l.nextItem, universal: !0 }, { description: i().g0048656, keys: l.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: l.refresh, universal: !1 }, { description: i().ha8209bc, keys: l.goHome, universal: !1 }, { description: i().fcf3e54c, keys: l.goExplore, universal: !1 }, { description: i().eb75875e, keys: l.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: l.goMentions, universal: !1 }, { description: i().fa98627a, keys: l.goProfile, universal: !1 }, { description: i().d4ebc798, keys: l.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: l.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: l.goLikes, universal: !1 }, { description: i().b0041756, keys: l.goLists, universal: !1 }, { description: i().d4986f86, keys: l.goMessages, universal: !1 }, { description: i().h5860a68, keys: l.goGrok, universal: !1 }, { description: i().bb081ea2, keys: l.goSettings, universal: !1 }, { description: i().i3145aa0, keys: l.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: l.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: l.goDisplay, universal: !1 }];
                }),
                u = c.ZP.isMac() ? "⌘" : "CTRL",
                p = () => [
                    { description: i().ab3d53f8, keys: l.newTweet, universal: !1 },
                    { description: i().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: i().e736990a, keys: l.newMessage, universal: !1 },
                    { description: i().a9ae1e78, keys: l.search, universal: !1 },
                    { description: i().fe731016, keys: a.Z.shortcuts.like, universal: !1 },
                    { description: i().d17df548, keys: a.Z.shortcuts.reply, universal: !1 },
                    { description: i().g062295e, keys: a.Z.shortcuts.retweet, universal: !1 },
                    { description: i().h01621a4, keys: a.Z.shortcuts.share, universal: !0 },
                    { description: i().gb303814, keys: l.bookmark, universal: !1 },
                    { description: i().c03b1126, keys: l.mute, universal: !1 },
                    { description: i().ebd2abb2, keys: l.block, universal: !1 },
                    { description: i().hc6c5510, keys: "Enter", universal: !0 },
                    { description: i().eebdef38, keys: a.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: i().b488758c, keys: l.toggleDMDrawer, universal: !1 },
                ],
                h = () => [
                    { description: i().c82314e0, keys: l.video.play1, universal: !0 },
                    { description: i().c82314e0, keys: l.video.play2, universal: !0 },
                    { description: i().b881560e, keys: l.video.mute, universal: !0 },
                    { description: i().a94f7302, keys: l.audio.dock, universal: !1 },
                    { description: i().a7e604c6, keys: l.audio.play, universal: !1 },
                    { description: i().f978c4fc, keys: l.audio.mute, universal: !1 },
                ],
                g = (0, s.Z)((e) => {
                    const t = d(e),
                        r = p(),
                        n = h(),
                        a = {};
                    return (
                        [...r, ...n, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      a[t] = e;
                                  })
                                : (a[t] = e);
                        }),
                        JSON.stringify(a)
                    );
                }),
                m = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": g(e) } };
                };
        },
        409438: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        761693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => ot });
            var n = r(202784),
                a = r(107267),
                o = r(528840),
                i = r(401388),
                s = r(71620),
                c = r(125363),
                l = r(296196),
                d = r(550293),
                u = r(807896),
                p = r(325686),
                h = r(292627),
                g = r(365023),
                m = r(235902),
                v = r(461756),
                f = r(609927),
                b = r(521514),
                y = r(511582),
                E = r(390387),
                w = r(441790),
                k = r(715913),
                C = r(601413),
                D = r(392237),
                S = r(323265),
                x = r(443781),
                T = r(740633);
            const Z = (0, r(523561).Z)({ loader: () => r.e("ondemand.RichText").then(r.bind(r, 687184)) });
            var H = r(111311),
                M = r(198506),
                I = r(768572),
                R = r(275365),
                _ = r(255534),
                P = r(164383),
                U = r(587521),
                A = r(806960),
                L = r(786998),
                O = r(516951),
                N = r(933794),
                z = r(163390),
                B = r(725516);
            const F = { header: "DMDrawerHeader", headerHighlighted: "DMDrawerHeaderHighlighted", root: "DMDrawer" };
            var W = r(154003),
                V = r(310088),
                q = r(111677),
                X = r.n(q),
                G = r(894966);
            const K = X().b08821f4;
            function j({ buttonType: e, hasNewMessages: t, inboxUnreadCount: r }) {
                const a = (0, c.I0)(),
                    o = t || (void 0 !== r && r > 0);
                return n.createElement(
                    p.Z,
                    null,
                    n.createElement(W.ZP, {
                        "aria-label": K,
                        icon: n.createElement(G.default, null),
                        onPress: () => {
                            a(d.DO(null));
                        },
                        type: e,
                    }),
                    o ? n.createElement(V.Z, { pip: !0, style: $.newMessagePip, truncatedCountFormatter: () => "", unreadCountLabel: () => "" }) : null,
                );
            }
            const $ = D.default.create((e) => ({ newMessagePip: { end: e.spaces.space4, top: e.spaces.space4 } }));
            r(136728);
            var Y = r(324922),
                J = r(867492),
                Q = r(377782);
            const ee = X().d227d19e,
                te = X().c64c1884,
                re = X().j7d0e836,
                ne = X().cdcebd22;
            function ae({ analytics: e, buttonType: t, conversationTitle: r, handleToggleVisibility: o, isExpanded: i }) {
                const s = (0, a.useHistory)();
                return n.createElement(
                    p.Z,
                    { style: oe.rightControls },
                    r
                        ? null
                        : n.createElement(W.ZP, {
                              "aria-label": te,
                              hoverLabel: { label: ne },
                              icon: n.createElement(Y.default, null),
                              onPress: () => {
                                  e.scribe({ section: "compose_drawer", component: "dm", action: "show" }), s.push({ pathname: "/messages/compose", state: { source: "drawer" } });
                              },
                              type: t,
                          }),
                    r && i && n.createElement(P.fK, null),
                    i ? n.createElement(W.ZP, { "aria-label": ee, hoverLabel: { label: ee }, icon: n.createElement(J.default, null), onPress: o, type: t }) : n.createElement(W.ZP, { "aria-label": re, hoverLabel: { label: re }, icon: n.createElement(Q.default, null), onPress: o, type: t }),
                );
            }
            const oe = D.default.create((e) => ({ rightControls: { flexDirection: "row" } }));
            var ie = r(731708),
                se = r(136483);
            const ce = X().a2f81050,
                le = X().e736990a;
            function de({ conversationTitle: e, hasNewMessages: t, isConversationUnread: r, isHighlighted: a }) {
                const o = e || n.createElement(ie.ZP, null, ce),
                    i = r || (!e && t);
                return n.createElement(p.Z, { style: ue.titleContainer }, n.createElement(p.Z, { style: [ue.titleTextRoot, a && i ? ue.titleTextHighlighted : null] }, o), i ? n.createElement(p.Z, { style: ue.newMessageDotContainer }, n.createElement(se.default, { "aria-label": le, style: [ue.newMessageDotRoot, a ? ue.newMessageDotHighlighted : ue.newMessageDotRegular] })) : null);
            }
            const ue = D.default.create((e) => ({ newMessageDotContainer: { flexGrow: 1 }, newMessageDotRoot: { width: e.spaces.space12, height: e.spaces.space12, marginStart: e.spaces.space4 }, newMessageDotRegular: { color: e.colors.primary }, newMessageDotHighlighted: { color: e.colors.white }, titleContainer: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1 }, titleTextRoot: { flexGrow: 1, flexShrink: 1 }, titleTextHighlighted: { color: e.colors.white } }));
            function pe({ conversationSubtitle: e, conversationTitle: t, inboxUnreadCount: r = 0, isConversationUnread: a = !1, isHighlighted: o, onDrawerOpen: i, triggerHighlight: s }) {
                const l = n.createRef(),
                    u = (0, B.z)(),
                    h = (0, c.I0)(),
                    g = (0, c.v9)(d.kX),
                    m = he(r > 0, o),
                    v = g === y.S.EXPANDED,
                    f = n.useRef(0);
                n.useEffect(() => {
                    const e = f.current;
                    !o && s && (null === e || r > e) && s(), (f.current = r);
                }, [r, s, o]);
                const b = () => {
                        const e = v ? y.S.COLLAPSED : y.S.EXPANDED;
                        e === y.S.COLLAPSED ? u.scribe({ action: "collapse" }) : e === y.S.EXPANDED && (u.scribe({ action: "expand" }), i && i()), h(d.bi(e));
                    },
                    E = 0 === r ? [] : o ? [ge.headerHighlighted] : [ge.headerActive];
                return n.createElement(
                    N.Z,
                    {
                        enabled: !0,
                        handlers: {
                            [z.uq.goLists]: O.Z,
                            [z.uq.toggleDMDrawer]: () => {
                                b(), l && l.current && l.current.focus();
                            },
                        },
                    },
                    n.createElement(p.Z, { ref: l, style: [ge.headerRoot, !v && ge.headerBorderClosed, ...E, ge.cursor], testID: o ? F.headerHighlighted : F.header }, n.createElement(L.Z, { leftControl: t && v ? n.createElement(j, { buttonType: m, hasNewMessages: r > 0, inboxUnreadCount: r }) : null, onMiddleControlClick: b, rightControl: n.createElement(ae, { analytics: u, buttonType: m, conversationTitle: t, handleToggleVisibility: b, isExpanded: v }), style: ge.roundedAppBarCorners, subtitle: e, title: n.createElement(de, { conversationTitle: t, hasNewMessages: r > 0, isConversationUnread: a, isHighlighted: o }), withBackground: !o })),
                );
            }
            const he = (e, t) => (e && t ? "onMediaText" : "primaryText"),
                ge = D.default.create((e) => ({ cursor: { cursor: "pointer" }, headerRoot: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge, transition: "all 0.3s ease" }, headerBorderClosed: { borderColor: e.colors.navigationBackground }, headerActive: { backgroundColor: e.colors.unreadCellBackground }, headerHighlighted: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, roundedAppBarCorners: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge } }));
            function me({ conversationSubtitle: e, conversationTitle: t, inboxUnreadCount: r, isConversationUnread: a = !1, isHighlighted: o, onDrawerOpen: i, triggerHighlight: s }) {
                const l = (0, c.v9)(A.QA),
                    u = (0, c.v9)(d.gw);
                return n.createElement(pe, { conversationSubtitle: e, conversationTitle: t, inboxUnreadCount: l, isConversationUnread: !!u && a, isHighlighted: o, onDrawerOpen: i, triggerHighlight: s });
            }
            var ve = r(24949),
                fe = r(297436),
                be = r(668214),
                ye = r(289405),
                Ee = r(798538),
                we = r(38562),
                ke = r(131290),
                Ce = r(601576),
                De = r(919022),
                Se = r(593953);
            const xe = (e, t) => t.conversationId,
                Te = (0, ve.P1)(
                    (e, t) => l.selectEntriesForConversation(e, xe(0, t)),
                    E._h,
                    (e, t) => (t ? (0, Se.y9)(e, t) : void 0),
                ),
                Ze = (e) => (t) => Ee.De(e, t),
                He = (e) => (t, r) => Ee.rA(e, t, r),
                Me = { conversation: (e, t) => l.selectConversation(e, xe(0, t)), entries: l.selectEntries, perspective: E._h, users: De.ZP.selectAll, dataSaverMode: we.IX, dtabBarInfo: ye.U6, quickReplyOptions: Te, visibility: d.kX, inboxUnreadCount: A.QA, isUnread: (e, t) => !l.selectConversationIsRead(e, xe(0, t)), isDmReceiptSettingEnabled: ke.cn },
                Ie = { draftText: (e, t) => Ee.vb(e, xe(0, t)), gifMetadata: (e, t) => Ee.Tu(e, xe(0, t)), isUploading: (e, t) => Ee.q9(e, xe(0, t)), media: (e, t) => Ee.W8(e, xe(0, t)), mediaUploadProgress: (e, t) => Ee.Ah(e, xe(0, t)) },
                Re = (0, be.Z)()
                    .propsFromState(() => ({ ...Me, ...Ie }))
                    .adjustStateProps(({ conversation: e, dataSaverMode: t, draftText: r, dtabBarInfo: n, entries: a, gifMetadata: o, inboxUnreadCount: i, isDmReceiptSettingEnabled: s, isUnread: c, isUploading: l, media: d, mediaUploadProgress: u, perspective: p, quickReplyOptions: h, users: g, visibility: m }) => {
                        const v = e?.data;
                        return { conversation: v && (0, fe.lk)(v, a, g), perspective: p, dataSaverMode: t, draftText: r, dtabBarInfo: n, gifMetadata: o, inboxUnreadCount: i, isDmReceiptSettingEnabled: s, isUploading: l, isUnread: c, media: d, mediaUploadProgress: u, quickReplyOptions: h, visibility: m };
                    })
                    .propsFromActions(({ conversationId: e }) => ({ addMedia: He(e), addToast: Ce.fz, createLocalApiErrorHandler: (0, s.zr)("DIRECT_MESSAGES_CONVERSATION"), fetchConversationHistory: l.fetchConversationHistory, removeMedia: Ze(e), saveText: Ee.E4, sendMessage: Ee.bG, updateConversationReadState: l.updateConversationReadState, fetchUpdatesIfNeeded: l.fetchUpdatesIfNeeded }))
                    .withAnalytics({ page: "messages", section: "thread_drawer" });
            class _e extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._composer = n.createRef()),
                        (this._renderConversation = (e, t) => {
                            const { conversationId: r, history: a, location: o, typingNotifier: i } = this.props;
                            return n.createElement(U.Z, { conversationId: r, drawerHeader: this._renderHeader(), history: a, isWide: !1, location: o, richTextInputContext: e, typeaheadWrapper: t, typingNotifier: i });
                        }),
                        (this._isExpanded = () => {
                            const { visibility: e } = this.props;
                            return e === y.S.EXPANDED;
                        }),
                        (this._fetchUpdatesIfNeeded = () => {
                            const { conversationId: e, createLocalApiErrorHandler: t, fetchUpdatesIfNeeded: r, isDmReceiptSettingEnabled: n } = this.props;
                            r(n ? { active_conversation_id: e, dm_users: !0 } : {}).catch(t());
                        }),
                        (0, T.Z)();
                }
                componentDidMount() {
                    this._updatePolling();
                }
                componentDidUpdate(e) {
                    e.visibility !== this.props.visibility && this._updatePolling();
                }
                render() {
                    const e = this._isExpanded();
                    return n.createElement(I.y3.Provider, { value: void 0 }, !e && this._renderHeader(), e ? (S.ZP.isDesktopOS() ? n.createElement(Z, null, ({ richTextInputContext: e, typeaheadWrapper: t }) => this._renderConversation(e, t)) : this._renderConversation()) : null);
                }
                _renderHeader() {
                    const { conversation: e, conversationId: t, inboxUnreadCount: r, isHeaderHighlighted: a, isUnread: o, onDrawerOpen: i, perspective: s, triggerHeaderHighlight: c } = this.props,
                        l = a ? "white" : "text",
                        d = a ? "white" : "gray700",
                        u = e && (e.type === R.eD.ONE_TO_ONE || e.type === R.eD.SECRET_ONE_TO_ONE) && s && (0, M.Z)(e, s).map(({ user: e }) => e.screen_name),
                        h = u ? n.createElement(C.Z, { color: d, screenName: u[0] }) : void 0;
                    return n.createElement(p.Z, { style: Pe.headerRoot }, n.createElement(P._g.Provider, { value: t }, n.createElement(me, { conversationSubtitle: h, conversationTitle: n.createElement(_.Z, { conversation: e, perspective: s, textColor: l, withScreenName: !1 }), inboxUnreadCount: r, isConversationUnread: o, isHighlighted: a, onDrawerOpen: i, triggerHighlight: c })));
                }
                _updatePolling() {
                    this._pollingTimer && this._pollingTimer.stop(), this.props.visibility === y.S.COLLAPSED && ((this._pollingTimer = new H.Z(this._fetchUpdatesIfNeeded, { interval: 3e3 })), this._pollingTimer.start());
                }
            }
            _e.contextType = x.rC;
            const Pe = D.default.create((e) => ({ headerRoot: { position: "sticky", top: 0, zIndex: e.componentZIndices.appBarZIndex } })),
                Ue = Re(_e);
            var Ae = r(293115),
                Le = r(715601),
                Oe = r(602920),
                Ne = r(161821),
                ze = r(973572),
                Be = r(234296),
                Fe = r(288331),
                We = r(826760),
                Ve = r(149290),
                qe = r(763526);
            const Xe = X().a2f81050;
            function Ge({ dmDrawerOnClick: e, drawerCacheKey: t }) {
                const r = (0, B.z)(),
                    a = (0, c.I0)(),
                    o = (0, c.v9)(l.selectConversations),
                    i = [];
                for (const e of (0, Ne.Z)(o)) !e.isDeleted && e.data?.trusted && i.push(e.data);
                i.sort(Be.Z);
                const s = i.map((e) => e.conversation_id),
                    d = (0, c.v9)(we.Kp),
                    u = (0, c.v9)(l.selectUntrustedLowQualityConversationCount),
                    p = (0, c.v9)(
                        (0, ze.Z)(
                            (e) => l.selectUntrustedCounts(e),
                            (e) => e,
                        ),
                    ),
                    h = p.newUntrustedWithSocialProof + p.oldUntrustedWithSocialProof + p.newUntrustedWithoutSocialProof + p.oldUntrustedWithoutSocialProof,
                    g = d && (h > 0 || u > 0),
                    m = () => n.createElement(n.Fragment, null, n.createElement(qe.J, null), n.createElement(Ve.Z, { allowUntrustedInbox: g, secondaryInboxCounts: p }));
                return n.createElement(Fe.Z, { accessibilityTitle: Xe, analytics: r, conversationIds: s, customCellClick: e, fetchInboxHistory: () => a(l.fetchTrustedInboxHistory()), isDrawer: !0, renderEmptyDMInbox: () => n.createElement(We.Z, { messageRequestPivot: m() }), renderStickyContent: m, updateLastSeenEventId: () => a(l.updateTrustedLastSeenEventId()), virtualScrollerCacheKey: t, withPinnedInbox: !0 });
            }
            const Ke = "dmDrawerInbox";
            function je({ renderHeader: e }) {
                const t = (0, c.I0)();
                return n.createElement(
                    p.Z,
                    { style: $e.fill },
                    n.createElement(
                        p.Z,
                        { style: [$e.viewportView, Oe.Z.drawerHeaderRadius] },
                        n.createElement(
                            Le.Z,
                            { style: [$e.viewportView, Oe.Z.drawerHeaderRadius] },
                            e(),
                            n.createElement(Ge, {
                                dmDrawerOnClick: (e, r) => {
                                    t(d.DO(r)), e.preventDefault();
                                },
                                drawerCacheKey: Ke,
                            }),
                        ),
                    ),
                );
            }
            const $e = D.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...D.default.absoluteFillObject, overflowY: "auto" } })),
                Ye = { page: "messages", section: "inbox_drawer" };
            function Je({ isHeaderHighlighted: e, onDrawerOpen: t, triggerHeaderHighlight: r }) {
                const a = (0, c.v9)(d.kX) === y.S.EXPANDED;
                n.useEffect(() => {
                    a && (0, T.Z)();
                }, [a]);
                const o = () => n.createElement(p.Z, { style: Qe.headerRoot }, n.createElement(me, { isHighlighted: e, onDrawerOpen: t, triggerHighlight: r }));
                return n.createElement(Ae.nO, { namespace: Ye }, n.createElement(n.Fragment, null, !a && o(), a && n.createElement(je, { renderHeader: o })));
            }
            const Qe = D.default.create((e) => ({ headerRoot: { position: "sticky", top: 0, zIndex: e.componentZIndices.appBarZIndex } })),
                et = 3e3,
                tt = { isGlobal: !0, isSticky: !0 },
                rt = { isGlobal: !0, isSticky: !1 };
            function nt({ hasConversations: e, isHideDMDrawerPath: t, width: r = b.Z.dmDrawerWidth.max }) {
                const o = n.useRef(null),
                    i = (0, a.useHistory)(),
                    s = (0, a.useLocation)(),
                    l = (0, c.v9)(E._h),
                    C = (0, c.v9)(d.gw),
                    D = (0, c.v9)((e) => d.kX(e)),
                    S = (0, w.N)(),
                    [x, T] = n.useState(!1),
                    [Z, H] = n.useState(void 0),
                    M = D === y.S.EXPANDED,
                    I = () => {
                        x && (T(!1), clearTimeout(o.current));
                    },
                    R = (e) => {
                        const {
                            nativeEvent: {
                                layout: { height: t },
                            },
                        } = e;
                        M || void 0 !== Z || H(t);
                    },
                    _ = n.useCallback(() => {
                        M ||
                            x ||
                            o.current ||
                            (T(!0),
                            (o.current = setTimeout(() => {
                                T(!1), (o.current = null);
                            }, et)));
                    }, [M, x]);
                n.useEffect(
                    () => () => {
                        clearTimeout(o.current);
                    },
                    [o],
                );
                const P = (function (e) {
                        const [t, r] = n.useState(e);
                        if (
                            (n.useEffect(() => {
                                if (!e && t) {
                                    let t;
                                    const n = window.requestAnimationFrame(() => {
                                        t = window.requestAnimationFrame(() => {
                                            r(e);
                                        });
                                    });
                                    return () => {
                                        cancelAnimationFrame(n), cancelAnimationFrame(t);
                                    };
                                }
                            }, [t, e]),
                            !e && t)
                        )
                            return !0;
                        e && !t && r(e);
                        return !1;
                    })(M),
                    U = n.useRef(),
                    A = M ? { transform: [{ translateY: 0 }] } : P ? { transition: "none", transform: [{ translateY: `calc(100% - ${U.current?.getBoundingClientRect().height ?? 0}px` }] } : { transform: [{ translateY: `calc(100% - ${Z ?? 0}px` }] },
                    L = (function (e) {
                        const [t, r] = n.useState(!1);
                        return (
                            n.useEffect(() => {
                                if (e) {
                                    let e;
                                    const t = window.requestAnimationFrame(() => {
                                        e = window.requestAnimationFrame(() => {
                                            r(!0);
                                        });
                                    });
                                    return () => {
                                        cancelAnimationFrame(t), cancelAnimationFrame(e);
                                    };
                                }
                            }, [e]),
                            t
                        );
                    })(!!Z);
                return (() => {
                    const r = D === y.S.CLOSED;
                    return !t() && e && !r;
                })()
                    ? n.createElement(
                          h.Z.Drawer,
                          null,
                          n.createElement(g.Z, { id: "DMDrawer" }, (e, t) => n.createElement(k.Z.Provider, { value: { isDrawer: !0 } }, n.createElement(m.ZP.Provider, { value: { isDMDrawer: () => !0 } }, n.createElement(p.Z, (0, u.Z)({ ref: e() }, t({ style: [Oe.Z.root, L && Oe.Z.expandable, !M && Z && { height: Z, maxHeight: Z }, { width: r }, A, v.Z.reducedMotionEnabled && Oe.Z.reducedMotion], testID: F.root })), n.createElement(p.Z, { onLayout: Z ? void 0 : R, ref: U, style: [M ? Oe.Z.expanded : null, Oe.Z.main] }, C ? n.createElement(f.Z.Provider, { value: rt }, n.createElement(Ue, { conversationId: C, history: i, isHeaderHighlighted: x, location: s, onDrawerOpen: I, perspective: l, triggerHeaderHighlight: _, typingNotifier: S })) : n.createElement(f.Z.Provider, { value: tt }, n.createElement(Je, { isHeaderHighlighted: x, onDrawerOpen: I, triggerHeaderHighlight: _ }))))))),
                      )
                    : null;
            }
            function at({ isHideDMDrawerPath: e, width: t }) {
                const r = (0, s.n7)("DIRECT_MESSAGES_DRAWER"),
                    a = (0, c.I0)(),
                    [o, u] = n.useState(!1),
                    p = (0, c.v9)(l.selectConversations),
                    h = !(0, i.Z)(p),
                    g = n.useCallback(() => {
                        e() || o || (a(d.VP()), a(l.fetchInboxIfNeeded()).catch(r({})), u(!0));
                    }, [r, a, o, e]);
                return (
                    n.useEffect(() => {
                        g();
                    }, [g]),
                    n.createElement(nt, { hasConversations: h, isHideDMDrawerPath: e, width: t })
                );
            }
            function ot({ width: e }) {
                const t = (0, a.useHistory)(),
                    r = t.getLastNonModalLocationPathname() ?? t.location.pathname,
                    i = n.useCallback(() => (0, o.z)(r) || r.startsWith("/i/chat") || r.startsWith("/i/communitynotes") || r.startsWith("/i/money") || r.startsWith("/i/verified") || r.startsWith("/i/conferences-room") || r.startsWith("/i/grok"), [r]);
                return n.createElement(at, { isHideDMDrawerPath: i, width: e });
            }
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => h });
            var n = r(202784),
                a = r(476984),
                o = r.n(a),
                i = r(143778),
                s = r(750410),
                c = r(682830);
            const l = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class h extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: a, icon: o, loadingMessage: i, onRequestRetry: d, render: h, renderFailure: g, retryMessage: m, retryable: v } = this.props;
                    switch (a) {
                        case l:
                            return v ? n.createElement(s.Z, { icon: o, onRequestRetry: d, retryMessage: m }) : r ? n.createElement(c.m, { failureMessage: r }) : g();
                        case u:
                            return n.createElement(c.J, { "aria-label": e, color: t, loadingMessage: i });
                        case p:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        648539: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19 14h2v3h-2v-3zM3 14H1v3h2v-3zm.5 7c-.276 0-.5-.225-.5-.5V19H1v1.5C1 21.879 2.122 23 3.5 23H5v-2H3.5zM10 5V3H7v2h3zm-7 .5c0-.275.224-.5.5-.5H5V3H3.5C2.122 3 1 4.121 1 5.5V7h2V5.5zM12 21v2h3v-2h-3zm-5 0v2h3v-2H7zm12-.5c0 .275-.224.5-.5.5H17v2h1.5c1.378 0 2.5-1.121 2.5-2.5V19h-2v1.5zM3 9H1v3h2V9zm3 9h5v-2H6v2zM18-.1c3.364 0 6.1 2.736 6.1 6.1s-2.736 6.1-6.1 6.1-6.1-2.736-6.1-6.1S14.636-.1 18-.1zm0 2c-2.261 0-4.1 1.839-4.1 4.1s1.839 4.1 4.1 4.1 4.1-1.839 4.1-4.1-1.839-4.1-4.1-4.1zm.5 3.1H15v2h6V5h-2.5zM6 10h4V8H6v2zm0 4h7v-2H6v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => a, Z: () => n });
            r(136728);
            const n = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (r, n, a) => {
                        const o = t ? t(n, a, e) : !!n;
                        return o && r[0].push(n), !o && r[1].push(n), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DMDrawer.4f3d41aa.js.map
