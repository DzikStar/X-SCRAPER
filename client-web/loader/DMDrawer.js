"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DMDrawer"],
    {
        290402: (e, t, r) => {
            r.d(t, { Z: () => v });
            var a = r(807896),
                n = r(202784),
                i = r(182056),
                o = r(879113),
                s = r(392237),
                l = r(674132),
                c = r.n(l),
                d = r(968478);
            const u = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, r) => {
                    const s = i.Z.isOnline();
                    return n.createElement(o.Z, (0, a.Z)({}, t, { icon: s ? void 0 : n.createElement(d.default, { style: g.icon }), retryMessage: s ? e : u }));
                },
                g = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                v = n.forwardRef(h);
        },
        334346: (e, t, r) => {
            r.d(t, { C: () => l, Z: () => s });
            var a = r(807896),
                n = r(202784),
                i = r(524084),
                o = r(768572);
            const s = "stable_sort_index",
                l = n.forwardRef((e, t) => {
                    const r = e.cacheKey;
                    return n.createElement(o.ZP, { identifier: r }, n.createElement(i.Z, (0, a.Z)({ ref: t }, e)));
                });
        },
        107914: (e, t, r) => {
            r.d(t, { N: () => b, w: () => f });
            var a = r(856430),
                n = r(369676),
                i = r(609980),
                o = r(450646),
                s = r(648539),
                l = r(873990),
                c = r(820803),
                d = r(415506),
                u = r(616894),
                h = r(391366),
                g = r(40904),
                v = r(372703),
                m = r(576513);
            const p = { [m.Z.FEEDBACK_CLOSE]: a.default, [m.Z.FEEDBACK]: n.default, [m.Z.FROWN]: i.default, [m.Z.SMILE]: o.default, [m.Z.MODERATION]: s.default, [m.Z.TOPIC]: l.default, [m.Z.TOPIC_CLOSE]: c.default, [m.Z.FLAG]: d.default, [m.Z.NO]: u.default, [m.Z.SPEAKER]: h.default, [m.Z.SPEAKER_OFF]: g.default },
                E = { [v.ZP.SeeFewer]: i.default, [v.ZP.SeeMore]: o.default, [v.ZP.DontLike]: i.default },
                f = (e) => {
                    const { feedbackType: t, icon: r } = e;
                    return (r && p[r]) || E[t];
                },
                b = (e) => e && p[e.toUpperCase()];
        },
        524084: (e, t, r) => {
            r.d(t, { Z: () => o });
            var a = r(202784),
                n = r(523561),
                i = r(195560);
            const o = (0, n.Z)({ loader: () => r.e("loader.AbsolutePower").then(r.bind(r, 590136)), renderPlaceholder: (e, t) => a.createElement(i.Z, { hasError: e, onRetry: t }) });
        },
        376293: (e, t, r) => {
            r.d(t, { $f: () => D, KV: () => E, LI: () => M, SC: () => Z, Vt: () => y, ed: () => R, op: () => S });
            var a = r(202784),
                n = r(190286),
                i = r(674132),
                o = r.n(i),
                s = r(616894),
                l = r(314948),
                c = r(516951),
                d = r(163390);
            const u = o().cfd2f35e,
                h = o().f9e45cfb,
                g = o().fcd4d489,
                v = o().a6450e84,
                m = o().g353ad73,
                p = o().ad00a739,
                E = o().a9fd20be,
                f = o().j546fb79,
                b = o().c9623eeb,
                y = o().e133be4e,
                C = o().he43bca4,
                w = o().f5f01af6,
                Z = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                D = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: v, text: t ? p({ screenName: e }) : m({ screenName: e }) }),
                S = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: r, source: a, testID: n, unblockAction: i, unblockSubtext: o, user: s }) => {
                    let l,
                        u = c.Z;
                    const h = M(s, r);
                    switch (a) {
                        case Z.PROFILE:
                        case Z.LIST_DETAIL:
                        case Z.FOLLOWERS_LIST:
                            u = () => {
                                s.blocking ? i(h) : e(h);
                            };
                            break;
                        case Z.TWEET:
                        case Z.TWEET_CARET:
                        case Z.RICH_FEEDBACK:
                            (l = d.uq.block),
                                (u = () => {
                                    s.blocking ? i(h) : e(h);
                                });
                    }
                    return { confirmation: h, onClick: u, testID: n, shortcutKey: l, Icon: O(s.blocking), text: T(s), subText: k({ user: s, blockSubtext: t, unblockSubtext: o }) };
                },
                O = (e) => (e ? l.default : s.default),
                k = ({ blockSubtext: e, unblockSubtext: t, user: r }) => (!r.blocking && e ? e(r.screen_name) : r.blocking ? t : void 0),
                T = (e) => (e.blocking ? b({ screenName: e.screen_name }) : g({ screenName: e.screen_name })),
                M = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: f({ screenName: e }), label: y, text: t ? w : C }))(e.screen_name, t) : D(e.screen_name, t)),
                R = ({ confirmation: e, handleConfirm: t, onClose: r }) => {
                    const { confirmButtonType: i, headline: o, label: s, text: l } = e;
                    return a.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: s, confirmButtonType: i, headline: o, onCancel: r, onConfirm: t, text: l });
                };
        },
        712816: (e, t, r) => {
            r.d(t, { d: () => n });
            var a = r(674132);
            const n = { defaultToast: { text: r.n(a)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, r) => {
            r.d(t, { D: () => n });
            var a = r(674132);
            const n = { defaultToast: { text: r.n(a)().ca96fe6e }, showToast: !0 };
        },
        973572: (e, t, r) => {
            r.d(t, { Z: () => o });
            var a = r(476984),
                n = r.n(a),
                i = r(24949);
            const o = (0, i.wN)(i.PW, n());
        },
        163390: (e, t, r) => {
            r.d(t, { OX: () => h, Od: () => d, PN: () => g, uq: () => c, wR: () => m });
            var a = r(251067),
                n = r(522171),
                i = r(674132),
                o = r.n(i),
                s = r(912021),
                l = r(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, s.Z)((e) => {
                    const t = e ? [{ description: o().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, a.fH)(a.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: o().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: o().a83d4280, keys: c.nextItem, universal: !0 }, { description: o().g0048656, keys: c.previousItem, universal: !0 }, { description: o().a690c4d0, keys: "Space", universal: !0 }, { description: o().e893811a, keys: c.refresh, universal: !1 }, { description: o().ha8209bc, keys: c.goHome, universal: !1 }, { description: o().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: o().eb75875e, keys: c.goNotifications, universal: !1 }, { description: o().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: o().fa98627a, keys: c.goProfile, universal: !1 }, { description: o().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: o().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: o().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: o().b0041756, keys: c.goLists, universal: !1 }, { description: o().d4986f86, keys: c.goMessages, universal: !1 }, { description: o().h5860a68, keys: c.goGrok, universal: !1 }, { description: o().bb081ea2, keys: c.goSettings, universal: !1 }, { description: o().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: o().eee2ed92, keys: c.goToUser, universal: !1 }, { description: o().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                h = () => [
                    { description: o().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: o().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: o().e736990a, keys: c.newMessage, universal: !1 },
                    { description: o().a9ae1e78, keys: c.search, universal: !1 },
                    { description: o().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: o().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: o().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: o().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: o().gb303814, keys: c.bookmark, universal: !1 },
                    { description: o().c03b1126, keys: c.mute, universal: !1 },
                    { description: o().ebd2abb2, keys: c.block, universal: !1 },
                    { description: o().hc6c5510, keys: "Enter", universal: !0 },
                    { description: o().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: o().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                g = () => [
                    { description: o().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: o().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: o().b881560e, keys: c.video.mute, universal: !0 },
                    { description: o().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: o().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: o().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                v = (0, s.Z)((e) => {
                    const t = d(e),
                        r = h(),
                        a = g(),
                        n = {};
                    return (
                        [...r, ...a, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      n[t] = e;
                                  })
                                : (n[t] = e);
                        }),
                        JSON.stringify(n)
                    );
                }),
                m = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": v(e) } };
                };
        },
        409438: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        576513: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = Object.freeze({ ARROW_RIGHT: "ARROW_RIGHT", BALLOON_STROKE: "BALLOON_STROKE", BOOKMARK: "BOOKMARK", CALENDAR: "CALENDAR", DEBUG: "DEBUG", ERROR: "ERROR", EYE_OFF: "EYE_OFF", FEEDBACK_CLOSE: "FEEDBACK_CLOSE", FEEDBACK: "FEEDBACK", FLAG: "FLAG", FOLLOW: "FOLLOW", FROWN: "FROWN", HELP: "HELP", LINK: "LINK", LOCATION_STROKE: "LOCATION_STROKE", LOGO: "LOGO", MESSAGE: "MESSAGE", MODERATION: "MODERATION", MOMENT: "MOMENT", NO: "NO", NOTIFICATIONS_FOLLOW: "NOTIFICATIONS_FOLLOW", OUTGOING: "OUTGOING", PERSON_STROKE: "PERSON_STROKE", PERSON: "PERSON", PIN: "PIN", RETWEET: "RETWEET", SAFETY: "SAFETY", SMILE: "SMILE", SPEAKER_OFF: "SPEAKER_OFF", SPEAKER: "SPEAKER", TOPIC_CLOSE: "TOPIC_CLOSE", TOPIC_FILLED: "TOPIC_FILLED", TOPIC: "TOPIC", TRASHCAN: "TRASHCAN", UNFOLLOW: "UNFOLLOW" });
        },
        761693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => it });
            var a = r(202784),
                n = r(107267),
                i = r(528840),
                o = r(401388),
                s = r(71620),
                l = r(125363),
                c = r(296196),
                d = r(550293),
                u = r(807896),
                h = r(325686),
                g = r(292627),
                v = r(365023),
                m = r(235902),
                p = r(461756),
                E = r(609927),
                f = r(521514),
                b = r(511582),
                y = r(390387),
                C = r(441790),
                w = r(715913),
                Z = r(601413),
                D = r(392237),
                S = r(323265),
                O = r(443781),
                k = r(740633);
            const T = (0, r(523561).Z)({ loader: () => r.e("ondemand.RichText").then(r.bind(r, 687184)) });
            var M = r(111311),
                R = r(198506),
                x = r(768572),
                L = r(275365),
                I = r(255534),
                H = r(164383),
                P = r(587521),
                A = r(806960),
                _ = r(786998),
                N = r(516951),
                U = r(933794),
                F = r(163390),
                z = r(725516);
            const B = { header: "DMDrawerHeader", headerHighlighted: "DMDrawerHeaderHighlighted", root: "DMDrawer" };
            var W = r(154003),
                K = r(310088),
                V = r(674132),
                G = r.n(V),
                q = r(894966);
            const X = G().b08821f4;
            function j({ buttonType: e, hasNewMessages: t, inboxUnreadCount: r }) {
                const n = (0, l.I0)(),
                    i = t || (void 0 !== r && r > 0);
                return a.createElement(
                    h.Z,
                    null,
                    a.createElement(W.ZP, {
                        "aria-label": X,
                        icon: a.createElement(q.default, null),
                        onPress: () => {
                            n(d.DO(null));
                        },
                        type: e,
                    }),
                    i ? a.createElement(K.Z, { pip: !0, style: Y.newMessagePip, truncatedCountFormatter: () => "", unreadCountLabel: () => "" }) : null,
                );
            }
            const Y = D.default.create((e) => ({ newMessagePip: { end: e.spaces.space4, top: e.spaces.space4 } }));
            r(136728);
            var $ = r(324922),
                J = r(867492),
                Q = r(377782);
            const ee = G().d227d19e,
                te = G().c64c1884,
                re = G().j7d0e836,
                ae = G().cdcebd22;
            function ne({ analytics: e, buttonType: t, conversationTitle: r, handleToggleVisibility: i, isExpanded: o }) {
                const s = (0, n.useHistory)();
                return a.createElement(
                    h.Z,
                    { style: ie.rightControls },
                    r
                        ? null
                        : a.createElement(W.ZP, {
                              "aria-label": te,
                              hoverLabel: { label: ae },
                              icon: a.createElement($.default, null),
                              onPress: () => {
                                  e.scribe({ section: "compose_drawer", component: "dm", action: "show" }), s.push({ pathname: "/messages/compose", state: { source: "drawer" } });
                              },
                              type: t,
                          }),
                    r && o && a.createElement(H.fK, null),
                    o ? a.createElement(W.ZP, { "aria-label": ee, hoverLabel: { label: ee }, icon: a.createElement(J.default, null), onPress: i, type: t }) : a.createElement(W.ZP, { "aria-label": re, hoverLabel: { label: re }, icon: a.createElement(Q.default, null), onPress: i, type: t }),
                );
            }
            const ie = D.default.create((e) => ({ rightControls: { flexDirection: "row" } }));
            var oe = r(731708),
                se = r(136483);
            const le = G().a2f81050,
                ce = G().e736990a;
            function de({ conversationTitle: e, hasNewMessages: t, isConversationUnread: r, isHighlighted: n }) {
                const i = e || a.createElement(oe.ZP, null, le),
                    o = r || (!e && t);
                return a.createElement(h.Z, { style: ue.titleContainer }, a.createElement(h.Z, { style: [ue.titleTextRoot, n && o ? ue.titleTextHighlighted : null] }, i), o ? a.createElement(h.Z, { style: ue.newMessageDotContainer }, a.createElement(se.default, { "aria-label": ce, style: [ue.newMessageDotRoot, n ? ue.newMessageDotHighlighted : ue.newMessageDotRegular] })) : null);
            }
            const ue = D.default.create((e) => ({ newMessageDotContainer: { flexGrow: 1 }, newMessageDotRoot: { width: e.spaces.space12, height: e.spaces.space12, marginStart: e.spaces.space4 }, newMessageDotRegular: { color: e.colors.primary }, newMessageDotHighlighted: { color: e.colors.white }, titleContainer: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1 }, titleTextRoot: { flexGrow: 1, flexShrink: 1 }, titleTextHighlighted: { color: e.colors.white } }));
            function he({ conversationSubtitle: e, conversationTitle: t, inboxUnreadCount: r = 0, isConversationUnread: n = !1, isHighlighted: i, onDrawerOpen: o, triggerHighlight: s }) {
                const c = a.createRef(),
                    u = (0, z.z)(),
                    g = (0, l.I0)(),
                    v = (0, l.v9)(d.kX),
                    m = ge(r > 0, i),
                    p = v === b.S.EXPANDED,
                    E = a.useRef(0);
                a.useEffect(() => {
                    const e = E.current;
                    !i && s && (null === e || r > e) && s(), (E.current = r);
                }, [r, s, i]);
                const f = () => {
                        const e = p ? b.S.COLLAPSED : b.S.EXPANDED;
                        e === b.S.COLLAPSED ? u.scribe({ action: "collapse" }) : e === b.S.EXPANDED && (u.scribe({ action: "expand" }), o && o()), g(d.bi(e));
                    },
                    y = 0 === r ? [] : i ? [ve.headerHighlighted] : [ve.headerActive];
                return a.createElement(
                    U.Z,
                    {
                        enabled: !0,
                        handlers: {
                            [F.uq.goLists]: N.Z,
                            [F.uq.toggleDMDrawer]: () => {
                                f(), c && c.current && c.current.focus();
                            },
                        },
                    },
                    a.createElement(h.Z, { ref: c, style: [ve.headerRoot, !p && ve.headerBorderClosed, ...y, ve.cursor], testID: i ? B.headerHighlighted : B.header }, a.createElement(_.Z, { leftControl: t && p ? a.createElement(j, { buttonType: m, hasNewMessages: r > 0, inboxUnreadCount: r }) : null, onMiddleControlClick: f, rightControl: a.createElement(ne, { analytics: u, buttonType: m, conversationTitle: t, handleToggleVisibility: f, isExpanded: p }), style: ve.roundedAppBarCorners, subtitle: e, title: a.createElement(de, { conversationTitle: t, hasNewMessages: r > 0, isConversationUnread: n, isHighlighted: i }), withBackground: !i })),
                );
            }
            const ge = (e, t) => (e && t ? "onMediaText" : "primaryText"),
                ve = D.default.create((e) => ({ cursor: { cursor: "pointer" }, headerRoot: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge, transition: "all 0.3s ease" }, headerBorderClosed: { borderColor: e.colors.navigationBackground }, headerActive: { backgroundColor: e.colors.unreadCellBackground }, headerHighlighted: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, roundedAppBarCorners: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge } }));
            function me({ conversationSubtitle: e, conversationTitle: t, inboxUnreadCount: r, isConversationUnread: n = !1, isHighlighted: i, onDrawerOpen: o, triggerHighlight: s }) {
                const c = (0, l.v9)(A.QA),
                    u = (0, l.v9)(d.gw);
                return a.createElement(he, { conversationSubtitle: e, conversationTitle: t, inboxUnreadCount: c, isConversationUnread: !!u && n, isHighlighted: i, onDrawerOpen: o, triggerHighlight: s });
            }
            var pe = r(24949),
                Ee = r(297436),
                fe = r(668214),
                be = r(289405),
                ye = r(798538),
                Ce = r(38562),
                we = r(131290),
                Ze = r(601576),
                De = r(919022),
                Se = r(593953);
            const Oe = (e, t) => t.conversationId,
                ke = (0, pe.P1)(
                    (e, t) => c.selectEntriesForConversation(e, Oe(0, t)),
                    y._h,
                    (e, t) => (t ? (0, Se.y9)(e, t) : void 0),
                ),
                Te = (e) => (t) => ye.De(e, t),
                Me = (e) => (t, r) => ye.rA(e, t, r),
                Re = { conversation: (e, t) => c.selectConversation(e, Oe(0, t)), entries: c.selectEntries, perspective: y._h, users: De.ZP.selectAll, dataSaverMode: Ce.IX, dtabBarInfo: be.U6, quickReplyOptions: ke, visibility: d.kX, inboxUnreadCount: A.QA, isUnread: (e, t) => !c.selectConversationIsRead(e, Oe(0, t)), isDmReceiptSettingEnabled: we.cn },
                xe = { draftText: (e, t) => ye.vb(e, Oe(0, t)), gifMetadata: (e, t) => ye.Tu(e, Oe(0, t)), isUploading: (e, t) => ye.q9(e, Oe(0, t)), media: (e, t) => ye.W8(e, Oe(0, t)), mediaUploadProgress: (e, t) => ye.Ah(e, Oe(0, t)) },
                Le = (0, fe.Z)()
                    .propsFromState(() => ({ ...Re, ...xe }))
                    .adjustStateProps(({ conversation: e, dataSaverMode: t, draftText: r, dtabBarInfo: a, entries: n, gifMetadata: i, inboxUnreadCount: o, isDmReceiptSettingEnabled: s, isUnread: l, isUploading: c, media: d, mediaUploadProgress: u, perspective: h, quickReplyOptions: g, users: v, visibility: m }) => {
                        const p = e?.data;
                        return { conversation: p && (0, Ee.lk)(p, n, v), perspective: h, dataSaverMode: t, draftText: r, dtabBarInfo: a, gifMetadata: i, inboxUnreadCount: o, isDmReceiptSettingEnabled: s, isUploading: c, isUnread: l, media: d, mediaUploadProgress: u, quickReplyOptions: g, visibility: m };
                    })
                    .propsFromActions(({ conversationId: e }) => ({ addMedia: Me(e), addToast: Ze.fz, createLocalApiErrorHandler: (0, s.zr)("DIRECT_MESSAGES_CONVERSATION"), fetchConversationHistory: c.fetchConversationHistory, removeMedia: Te(e), saveText: ye.E4, sendMessage: ye.bG, updateConversationReadState: c.updateConversationReadState, fetchUpdatesIfNeeded: c.fetchUpdatesIfNeeded }))
                    .withAnalytics({ page: "messages", section: "thread_drawer" });
            class Ie extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._composer = a.createRef()),
                        (this._renderConversation = (e, t) => {
                            const { conversationId: r, history: n, location: i, typingNotifier: o } = this.props;
                            return a.createElement(P.Z, { conversationId: r, drawerHeader: this._renderHeader(), history: n, isWide: !1, location: i, richTextInputContext: e, typeaheadWrapper: t, typingNotifier: o });
                        }),
                        (this._isExpanded = () => {
                            const { visibility: e } = this.props;
                            return e === b.S.EXPANDED;
                        }),
                        (this._fetchUpdatesIfNeeded = () => {
                            const { conversationId: e, createLocalApiErrorHandler: t, fetchUpdatesIfNeeded: r, isDmReceiptSettingEnabled: a } = this.props;
                            r(a ? { active_conversation_id: e, dm_users: !0 } : {}).catch(t());
                        }),
                        (0, k.Z)();
                }
                componentDidMount() {
                    this._updatePolling();
                }
                componentDidUpdate(e) {
                    e.visibility !== this.props.visibility && this._updatePolling();
                }
                render() {
                    const e = this._isExpanded();
                    return a.createElement(x.y3.Provider, { value: void 0 }, !e && this._renderHeader(), e ? (S.ZP.isDesktopOS() ? a.createElement(T, null, ({ richTextInputContext: e, typeaheadWrapper: t }) => this._renderConversation(e, t)) : this._renderConversation()) : null);
                }
                _renderHeader() {
                    const { conversation: e, conversationId: t, inboxUnreadCount: r, isHeaderHighlighted: n, isUnread: i, onDrawerOpen: o, perspective: s, triggerHeaderHighlight: l } = this.props,
                        c = n ? "white" : "text",
                        d = n ? "white" : "gray700",
                        u = e && (e.type === L.eD.ONE_TO_ONE || e.type === L.eD.SECRET_ONE_TO_ONE) && s && (0, R.Z)(e, s).map(({ user: e }) => e.screen_name),
                        g = u ? a.createElement(Z.Z, { color: d, screenName: u[0] }) : void 0;
                    return a.createElement(h.Z, { style: He.headerRoot }, a.createElement(H._g.Provider, { value: t }, a.createElement(me, { conversationSubtitle: g, conversationTitle: a.createElement(I.Z, { conversation: e, perspective: s, textColor: c, withScreenName: !1 }), inboxUnreadCount: r, isConversationUnread: i, isHighlighted: n, onDrawerOpen: o, triggerHighlight: l })));
                }
                _updatePolling() {
                    this._pollingTimer && this._pollingTimer.stop(), this.props.visibility === b.S.COLLAPSED && ((this._pollingTimer = new M.Z(this._fetchUpdatesIfNeeded, { interval: 3e3 })), this._pollingTimer.start());
                }
            }
            Ie.contextType = O.rC;
            const He = D.default.create((e) => ({ headerRoot: { position: "sticky", top: 0, zIndex: e.componentZIndices.appBarZIndex } })),
                Pe = Le(Ie);
            var Ae = r(293115),
                _e = r(715601),
                Ne = r(602920),
                Ue = r(161821),
                Fe = r(973572),
                ze = r(234296),
                Be = r(288331),
                We = r(826760),
                Ke = r(149290),
                Ve = r(763526);
            const Ge = G().a2f81050;
            function qe({ dmDrawerOnClick: e, drawerCacheKey: t }) {
                const r = (0, z.z)(),
                    n = (0, l.I0)(),
                    i = (0, l.v9)(c.selectConversations),
                    o = [];
                for (const e of (0, Ue.Z)(i)) !e.isDeleted && e.data?.trusted && o.push(e.data);
                o.sort(ze.Z);
                const s = o.map((e) => e.conversation_id),
                    d = (0, l.v9)(Ce.Kp),
                    u = (0, l.v9)(c.selectUntrustedLowQualityConversationCount),
                    h = (0, l.v9)(
                        (0, Fe.Z)(
                            (e) => c.selectUntrustedCounts(e),
                            (e) => e,
                        ),
                    ),
                    g = h.newUntrustedWithSocialProof + h.oldUntrustedWithSocialProof + h.newUntrustedWithoutSocialProof + h.oldUntrustedWithoutSocialProof,
                    v = d && (g > 0 || u > 0),
                    m = () => a.createElement(a.Fragment, null, a.createElement(Ve.J, null), a.createElement(Ke.Z, { allowUntrustedInbox: v, secondaryInboxCounts: h }));
                return a.createElement(Be.Z, { accessibilityTitle: Ge, analytics: r, conversationIds: s, customCellClick: e, fetchInboxHistory: () => n(c.fetchTrustedInboxHistory()), isDrawer: !0, renderEmptyDMInbox: () => a.createElement(We.Z, { messageRequestPivot: m() }), renderStickyContent: m, updateLastSeenEventId: () => n(c.updateTrustedLastSeenEventId()), virtualScrollerCacheKey: t, withPinnedInbox: !0 });
            }
            const Xe = "dmDrawerInbox";
            function je({ renderHeader: e }) {
                const t = (0, l.I0)();
                return a.createElement(
                    h.Z,
                    { style: Ye.fill },
                    a.createElement(
                        h.Z,
                        { style: [Ye.viewportView, Ne.Z.drawerHeaderRadius] },
                        a.createElement(
                            _e.Z,
                            { style: [Ye.viewportView, Ne.Z.drawerHeaderRadius] },
                            e(),
                            a.createElement(qe, {
                                dmDrawerOnClick: (e, r) => {
                                    t(d.DO(r)), e.preventDefault();
                                },
                                drawerCacheKey: Xe,
                            }),
                        ),
                    ),
                );
            }
            const Ye = D.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...D.default.absoluteFillObject, overflowY: "auto" } })),
                $e = { page: "messages", section: "inbox_drawer" };
            function Je({ isHeaderHighlighted: e, onDrawerOpen: t, triggerHeaderHighlight: r }) {
                const n = (0, l.v9)(d.kX) === b.S.EXPANDED;
                a.useEffect(() => {
                    n && (0, k.Z)();
                }, [n]);
                const i = () => a.createElement(h.Z, { style: Qe.headerRoot }, a.createElement(me, { isHighlighted: e, onDrawerOpen: t, triggerHighlight: r }));
                return a.createElement(Ae.nO, { namespace: $e }, a.createElement(a.Fragment, null, !n && i(), n && a.createElement(je, { renderHeader: i })));
            }
            const Qe = D.default.create((e) => ({ headerRoot: { position: "sticky", top: 0, zIndex: e.componentZIndices.appBarZIndex } })),
                et = 3e3,
                tt = { isGlobal: !0, isSticky: !0 },
                rt = { isGlobal: !0, isSticky: !1 };
            function at({ hasConversations: e, isHideDMDrawerPath: t, width: r = f.Z.dmDrawerWidth.max }) {
                const i = a.useRef(null),
                    o = (0, n.useHistory)(),
                    s = (0, n.useLocation)(),
                    c = (0, l.v9)(y._h),
                    Z = (0, l.v9)(d.gw),
                    D = (0, l.v9)((e) => d.kX(e)),
                    S = (0, C.N)(),
                    [O, k] = a.useState(!1),
                    [T, M] = a.useState(void 0),
                    R = D === b.S.EXPANDED,
                    x = () => {
                        O && (k(!1), clearTimeout(i.current));
                    },
                    L = (e) => {
                        const {
                            nativeEvent: {
                                layout: { height: t },
                            },
                        } = e;
                        R || void 0 !== T || M(t);
                    },
                    I = a.useCallback(() => {
                        R ||
                            O ||
                            i.current ||
                            (k(!0),
                            (i.current = setTimeout(() => {
                                k(!1), (i.current = null);
                            }, et)));
                    }, [R, O]);
                a.useEffect(
                    () => () => {
                        clearTimeout(i.current);
                    },
                    [i],
                );
                const H = (function (e) {
                        const [t, r] = a.useState(e);
                        if (
                            (a.useEffect(() => {
                                if (!e && t) {
                                    let t;
                                    const a = window.requestAnimationFrame(() => {
                                        t = window.requestAnimationFrame(() => {
                                            r(e);
                                        });
                                    });
                                    return () => {
                                        cancelAnimationFrame(a), cancelAnimationFrame(t);
                                    };
                                }
                            }, [t, e]),
                            !e && t)
                        )
                            return !0;
                        e && !t && r(e);
                        return !1;
                    })(R),
                    P = a.useRef(),
                    A = R ? { transform: [{ translateY: 0 }] } : H ? { transition: "none", transform: [{ translateY: `calc(100% - ${P.current?.getBoundingClientRect().height ?? 0}px` }] } : { transform: [{ translateY: `calc(100% - ${T ?? 0}px` }] },
                    _ = (function (e) {
                        const [t, r] = a.useState(!1);
                        return (
                            a.useEffect(() => {
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
                    })(!!T);
                return (() => {
                    const r = D === b.S.CLOSED;
                    return !t() && e && !r;
                })()
                    ? a.createElement(
                          g.Z.Drawer,
                          null,
                          a.createElement(v.Z, { id: "DMDrawer" }, (e, t) => a.createElement(w.Z.Provider, { value: { isDrawer: !0 } }, a.createElement(m.ZP.Provider, { value: { isDMDrawer: () => !0 } }, a.createElement(h.Z, (0, u.Z)({ ref: e() }, t({ style: [Ne.Z.root, _ && Ne.Z.expandable, !R && T && { height: T, maxHeight: T }, { width: r }, A, p.Z.reducedMotionEnabled && Ne.Z.reducedMotion], testID: B.root })), a.createElement(h.Z, { onLayout: T ? void 0 : L, ref: P, style: [R ? Ne.Z.expanded : null, Ne.Z.main] }, Z ? a.createElement(E.Z.Provider, { value: rt }, a.createElement(Pe, { conversationId: Z, history: o, isHeaderHighlighted: O, location: s, onDrawerOpen: x, perspective: c, triggerHeaderHighlight: I, typingNotifier: S })) : a.createElement(E.Z.Provider, { value: tt }, a.createElement(Je, { isHeaderHighlighted: O, onDrawerOpen: x, triggerHeaderHighlight: I }))))))),
                      )
                    : null;
            }
            function nt({ isHideDMDrawerPath: e, width: t }) {
                const r = (0, s.n7)("DIRECT_MESSAGES_DRAWER"),
                    n = (0, l.I0)(),
                    [i, u] = a.useState(!1),
                    h = (0, l.v9)(c.selectConversations),
                    g = !(0, o.Z)(h),
                    v = a.useCallback(() => {
                        e() || i || (n(d.VP()), n(c.fetchInboxIfNeeded()).catch(r({})), u(!0));
                    }, [r, n, i, e]);
                return (
                    a.useEffect(() => {
                        v();
                    }, [v]),
                    a.createElement(at, { hasConversations: g, isHideDMDrawerPath: e, width: t })
                );
            }
            function it({ width: e }) {
                const t = (0, n.useHistory)(),
                    r = t.getLastNonModalLocationPathname() ?? t.location.pathname,
                    o = a.useCallback(() => (0, i.z)(r) || r.startsWith("/i/chat") || r.startsWith("/i/communitynotes") || r.startsWith("/i/money") || r.startsWith("/i/verified") || r.startsWith("/i/conferences-room") || r.startsWith("/i/grok"), [r]);
                return a.createElement(nt, { isHideDMDrawerPath: o, width: e });
            }
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => o });
            var a = r(202784),
                n = r(325686),
                i = r(392237);
            function o({ spacing: e, style: t }) {
                return a.createElement(n.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a = r(202784),
                n = r(476984),
                i = r.n(n),
                o = r(143778),
                s = r(750410),
                l = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class g extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: n, icon: i, loadingMessage: o, onRequestRetry: d, render: g, renderFailure: v, retryMessage: m, retryable: p } = this.props;
                    switch (n) {
                        case c:
                            return p ? a.createElement(s.Z, { icon: i, onRequestRetry: d, retryMessage: m }) : r ? a.createElement(l.m, { failureMessage: r }) : v();
                        case u:
                            return a.createElement(l.J, { "aria-label": e, color: t, loadingMessage: o });
                        case h:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
        270711: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M19.518 7.57C17.542 6.582 14.883 6 12 6s-5.543.582-7.518 1.57C2.566 8.528 1 10.036 1 12c0 1.393.803 2.565 1.913 3.446 1.054.836 2.473 1.488 4.087 1.923v-2.082c-1.19-.372-2.158-.863-2.844-1.408C3.322 13.218 3 12.564 3 12c0-.798.673-1.789 2.376-2.641C7.019 8.537 9.36 8 12 8s4.98.537 6.624 1.359C20.327 10.211 21 11.202 21 12s-.673 1.789-2.376 2.641c-1.299.65-3.038 1.116-5.012 1.286l1.353-1.459-1.467-1.359-3.564 3.845 3.844 3.564 1.36-1.467-1.231-1.141c2.137-.196 4.081-.714 5.612-1.479 1.916-.958 3.482-2.466 3.482-4.43s-1.566-3.472-3.482-4.43z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        262754: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4.496 9.25c0-4.14 3.358-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.358 7.5-7.5 7.5-7.5-3.36-7.5-7.5zm7.5 9.5c-1.63 0-3.164-.41-4.505-1.13v5.82l4.498-1.87 4.502 1.87v-5.82c-1.338.72-2.869 1.13-4.495 1.13z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        818088: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        971657: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        377782: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 2.59l9.46 9.45-1.42 1.42L12 5.41l-8.04 8.05-1.42-1.42L12 2.59zm0 7l9.46 9.45-1.42 1.42L12 12.41l-8.04 8.05-1.42-1.42L12 9.59z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        678773: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        826363: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M20 7.5H4v-3h16v3zm0 6H4v-3h16v3zm0 6H4v-3h16v3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        937450: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        165243: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M20.29 2.29l-2.34 2.34C16.47 3.01 14.34 2 12 2 7.93 2 4.51 5.02 4 9.05L2.87 18h1.72l-2.3 2.29 1.42 1.42 18-18-1.42-1.42zM6.59 16H5.13l.85-6.7C6.36 6.27 8.94 4 12 4c1.79 0 3.42.78 4.54 2.05L6.59 16zM12 22c-1.57 0-2.98-.73-3.89-1.86l1.42-1.43c.55.78 1.45 1.29 2.47 1.29 1.31 0 2.42-.83 2.83-2H12v-2h6.86l-.74-5.87 1.76-1.76c.05.22.08.44.11.67L21.14 18H16.9c-.46 2.28-2.48 4-4.9 4z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        473026: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        226597: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        155353: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        69893: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        47286: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M5 5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2H5zm2.5 5.75c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM11 13h7v-2h-7v2zm0 4h4v-2h-4v2zm8.5-10C20.88 7 22 8.12 22 9.5v9c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-9C2 8.12 3.12 7 4.5 7h15zM4 18.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5h-15c-.28 0-.5.22-.5.5v9z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => n, Z: () => a });
            r(136728);
            const a = function (e, t) {
                return n(e, t);
            };
            function n(e, t) {
                return e.reduce(
                    (r, a, n) => {
                        const i = t ? t(a, n, e) : !!a;
                        return i && r[0].push(a), !i && r[1].push(a), r;
                    },
                    [[], []],
                );
            }
        },
        730895: (e, t, r) => {
            var a = r(821176);
            e.exports = function () {
                var e = a(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DMDrawer.55cfd08a.js.map
