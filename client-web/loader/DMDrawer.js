"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DMDrawer"],
    {
        290402: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(807896),
                a = r(202784),
                i = r(182056),
                o = r(879113),
                s = r(392237),
                l = r(674132),
                c = r.n(l),
                d = r(968478);
            const u = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, r) => {
                    const s = i.Z.isOnline();
                    return a.createElement(o.Z, (0, n.Z)({}, t, { icon: s ? void 0 : a.createElement(d.default, { style: v.icon }), retryMessage: s ? e : u }));
                },
                v = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                g = a.forwardRef(h);
        },
        334346: (e, t, r) => {
            r.d(t, { C: () => l, Z: () => s });
            var n = r(807896),
                a = r(202784),
                i = r(524084),
                o = r(768572);
            const s = "stable_sort_index",
                l = a.forwardRef((e, t) => {
                    const r = e.cacheKey;
                    return a.createElement(o.ZP, { identifier: r }, a.createElement(i.Z, (0, n.Z)({ ref: t }, e)));
                });
        },
        107914: (e, t, r) => {
            r.d(t, { N: () => b, w: () => f });
            var n = r(856430),
                a = r(369676),
                i = r(609980),
                o = r(450646),
                s = r(648539),
                l = r(873990),
                c = r(820803),
                d = r(415506),
                u = r(616894),
                h = r(391366),
                v = r(40904),
                g = r(372703),
                m = r(576513);
            const p = { [m.Z.FEEDBACK_CLOSE]: n.default, [m.Z.FEEDBACK]: a.default, [m.Z.FROWN]: i.default, [m.Z.SMILE]: o.default, [m.Z.MODERATION]: s.default, [m.Z.TOPIC]: l.default, [m.Z.TOPIC_CLOSE]: c.default, [m.Z.FLAG]: d.default, [m.Z.NO]: u.default, [m.Z.SPEAKER]: h.default, [m.Z.SPEAKER_OFF]: v.default },
                E = { [g.ZP.SeeFewer]: i.default, [g.ZP.SeeMore]: o.default, [g.ZP.DontLike]: i.default },
                f = (e) => {
                    const { feedbackType: t, icon: r } = e;
                    return (r && p[r]) || E[t];
                },
                b = (e) => e && p[e.toUpperCase()];
        },
        524084: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(202784),
                a = r(523561),
                i = r(195560);
            const o = (0, a.Z)({ loader: () => r.e("loader.AbsolutePower").then(r.bind(r, 590136)), renderPlaceholder: (e, t) => n.createElement(i.Z, { hasError: e, onRetry: t }) });
        },
        376293: (e, t, r) => {
            r.d(t, { $f: () => D, KV: () => E, LI: () => R, SC: () => Z, Vt: () => y, ed: () => H, op: () => O });
            var n = r(202784),
                a = r(190286),
                i = r(674132),
                o = r.n(i),
                s = r(616894),
                l = r(314948),
                c = r(516951),
                d = r(163390);
            const u = o().cfd2f35e,
                h = o().f9e45cfb,
                v = o().fcd4d489,
                g = o().a6450e84,
                m = o().g353ad73,
                p = o().ad00a739,
                E = o().a9fd20be,
                f = o().j546fb79,
                b = o().c9623eeb,
                y = o().e133be4e,
                w = o().he43bca4,
                C = o().f5f01af6,
                Z = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                D = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: g, text: t ? p({ screenName: e }) : m({ screenName: e }) }),
                O = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: r, source: n, testID: a, unblockAction: i, unblockSubtext: o, user: s }) => {
                    let l,
                        u = c.Z;
                    const h = R(s, r);
                    switch (n) {
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
                    return { confirmation: h, onClick: u, testID: a, shortcutKey: l, Icon: k(s.blocking), text: T(s), subText: S({ user: s, blockSubtext: t, unblockSubtext: o }) };
                },
                k = (e) => (e ? l.default : s.default),
                S = ({ blockSubtext: e, unblockSubtext: t, user: r }) => (!r.blocking && e ? e(r.screen_name) : r.blocking ? t : void 0),
                T = (e) => (e.blocking ? b({ screenName: e.screen_name }) : v({ screenName: e.screen_name })),
                R = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: f({ screenName: e }), label: y, text: t ? C : w }))(e.screen_name, t) : D(e.screen_name, t)),
                H = ({ confirmation: e, handleConfirm: t, onClose: r }) => {
                    const { confirmButtonType: i, headline: o, label: s, text: l } = e;
                    return n.createElement(a.Z, { cancelButtonLabel: u, confirmButtonLabel: s, confirmButtonType: i, headline: o, onCancel: r, onConfirm: t, text: l });
                };
        },
        712816: (e, t, r) => {
            r.d(t, { d: () => a });
            var n = r(674132);
            const a = { defaultToast: { text: r.n(n)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, r) => {
            r.d(t, { D: () => a });
            var n = r(674132);
            const a = { defaultToast: { text: r.n(n)().ca96fe6e }, showToast: !0 };
        },
        973572: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(476984),
                a = r.n(n),
                i = r(24949);
            const o = (0, i.wN)(i.PW, a());
        },
        163390: (e, t, r) => {
            r.d(t, { OX: () => h, Od: () => d, PN: () => v, uq: () => c, wR: () => m });
            var n = r(251067),
                a = r(522171),
                i = r(674132),
                o = r.n(i),
                s = r(912021),
                l = r(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, s.Z)((e) => {
                    const t = e ? [{ description: o().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: o().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: o().a83d4280, keys: c.nextItem, universal: !0 }, { description: o().g0048656, keys: c.previousItem, universal: !0 }, { description: o().a690c4d0, keys: "Space", universal: !0 }, { description: o().e893811a, keys: c.refresh, universal: !1 }, { description: o().ha8209bc, keys: c.goHome, universal: !1 }, { description: o().fcf3e54c, keys: c.goExplore, universal: !0 }, { description: o().eb75875e, keys: c.goNotifications, universal: !1 }, { description: o().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: o().fa98627a, keys: c.goProfile, universal: !1 }, { description: o().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: o().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: o().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: o().b0041756, keys: c.goLists, universal: !1 }, { description: o().d4986f86, keys: c.goMessages, universal: !1 }, { description: o().h5860a68, keys: c.goGrok, universal: !1 }, { description: o().bb081ea2, keys: c.goSettings, universal: !0 }, { description: o().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: o().eee2ed92, keys: c.goToUser, universal: !0 }, { description: o().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                h = () => [
                    { description: o().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: o().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: o().e736990a, keys: c.newMessage, universal: !1 },
                    { description: o().a9ae1e78, keys: c.search, universal: !0 },
                    { description: o().fe731016, keys: a.Z.shortcuts.like, universal: !1 },
                    { description: o().d17df548, keys: a.Z.shortcuts.reply, universal: !1 },
                    { description: o().g062295e, keys: a.Z.shortcuts.retweet, universal: !1 },
                    { description: o().h01621a4, keys: a.Z.shortcuts.share, universal: !0 },
                    { description: o().gb303814, keys: c.bookmark, universal: !1 },
                    { description: o().c03b1126, keys: c.mute, universal: !1 },
                    { description: o().ebd2abb2, keys: c.block, universal: !1 },
                    { description: o().hc6c5510, keys: "Enter", universal: !0 },
                    { description: o().eebdef38, keys: a.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: o().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                v = () => [
                    { description: o().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: o().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: o().b881560e, keys: c.video.mute, universal: !0 },
                    { description: o().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: o().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: o().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                g = (0, s.Z)((e) => {
                    const t = d(e),
                        r = h(),
                        n = v(),
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
        576513: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = Object.freeze({ ARROW_RIGHT: "ARROW_RIGHT", BALLOON_STROKE: "BALLOON_STROKE", BOOKMARK: "BOOKMARK", CALENDAR: "CALENDAR", DEBUG: "DEBUG", ERROR: "ERROR", EYE_OFF: "EYE_OFF", FEEDBACK_CLOSE: "FEEDBACK_CLOSE", FEEDBACK: "FEEDBACK", FLAG: "FLAG", FOLLOW: "FOLLOW", FROWN: "FROWN", HELP: "HELP", LINK: "LINK", LOCATION_STROKE: "LOCATION_STROKE", LOGO: "LOGO", MESSAGE: "MESSAGE", MODERATION: "MODERATION", MOMENT: "MOMENT", NO: "NO", NOTIFICATIONS_FOLLOW: "NOTIFICATIONS_FOLLOW", OUTGOING: "OUTGOING", PERSON_STROKE: "PERSON_STROKE", PERSON: "PERSON", PIN: "PIN", RETWEET: "RETWEET", SAFETY: "SAFETY", SMILE: "SMILE", SPEAKER_OFF: "SPEAKER_OFF", SPEAKER: "SPEAKER", TOPIC_CLOSE: "TOPIC_CLOSE", TOPIC_FILLED: "TOPIC_FILLED", TOPIC: "TOPIC", TRASHCAN: "TRASHCAN", UNFOLLOW: "UNFOLLOW" });
        },
        761693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => it });
            var n = r(202784),
                a = r(107267),
                i = r(528840),
                o = r(401388),
                s = r(71620),
                l = r(125363),
                c = r(296196),
                d = r(550293),
                u = r(807896),
                h = r(325686),
                v = r(292627),
                g = r(365023),
                m = r(235902),
                p = r(461756),
                E = r(609927),
                f = r(521514),
                b = r(511582),
                y = r(390387),
                w = r(441790),
                C = r(715913),
                Z = r(601413),
                D = r(392237),
                O = r(323265),
                k = r(443781),
                S = r(740633);
            const T = (0, r(523561).Z)({ loader: () => r.e("ondemand.RichText").then(r.bind(r, 687184)) });
            var R = r(111311),
                H = r(198506),
                L = r(768572),
                M = r(275365),
                x = r(255534),
                I = r(164383),
                A = r(587521),
                P = r(806960),
                _ = r(786998),
                N = r(516951),
                U = r(933794),
                F = r(163390),
                z = r(725516);
            const B = { header: "DMDrawerHeader", headerHighlighted: "DMDrawerHeaderHighlighted", root: "DMDrawer" };
            var V = r(154003),
                W = r(310088),
                K = r(674132),
                G = r.n(K),
                q = r(894966);
            const X = G().b08821f4;
            function j({ buttonType: e, hasNewMessages: t, inboxUnreadCount: r }) {
                const a = (0, l.I0)(),
                    i = t || (void 0 !== r && r > 0);
                return n.createElement(
                    h.Z,
                    null,
                    n.createElement(V.ZP, {
                        "aria-label": X,
                        icon: n.createElement(q.default, null),
                        onPress: () => {
                            a(d.DO(null));
                        },
                        type: e,
                    }),
                    i ? n.createElement(W.Z, { pip: !0, style: Y.newMessagePip, truncatedCountFormatter: () => "", unreadCountLabel: () => "" }) : null,
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
                ne = G().cdcebd22;
            function ae({ analytics: e, buttonType: t, conversationTitle: r, handleToggleVisibility: i, isExpanded: o }) {
                const s = (0, a.useHistory)();
                return n.createElement(
                    h.Z,
                    { style: ie.rightControls },
                    r
                        ? null
                        : n.createElement(V.ZP, {
                              "aria-label": te,
                              hoverLabel: { label: ne },
                              icon: n.createElement($.default, null),
                              onPress: () => {
                                  e.scribe({ section: "compose_drawer", component: "dm", action: "show" }), s.push({ pathname: "/messages/compose", state: { source: "drawer" } });
                              },
                              type: t,
                          }),
                    r && o && n.createElement(I.fK, null),
                    o ? n.createElement(V.ZP, { "aria-label": ee, hoverLabel: { label: ee }, icon: n.createElement(J.default, null), onPress: i, type: t }) : n.createElement(V.ZP, { "aria-label": re, hoverLabel: { label: re }, icon: n.createElement(Q.default, null), onPress: i, type: t }),
                );
            }
            const ie = D.default.create((e) => ({ rightControls: { flexDirection: "row" } }));
            var oe = r(731708),
                se = r(136483);
            const le = G().a2f81050,
                ce = G().e736990a;
            function de({ conversationTitle: e, hasNewMessages: t, isConversationUnread: r, isHighlighted: a }) {
                const i = e || n.createElement(oe.ZP, null, le),
                    o = r || (!e && t);
                return n.createElement(h.Z, { style: ue.titleContainer }, n.createElement(h.Z, { style: [ue.titleTextRoot, a && o ? ue.titleTextHighlighted : null] }, i), o ? n.createElement(h.Z, { style: ue.newMessageDotContainer }, n.createElement(se.default, { "aria-label": ce, style: [ue.newMessageDotRoot, a ? ue.newMessageDotHighlighted : ue.newMessageDotRegular] })) : null);
            }
            const ue = D.default.create((e) => ({ newMessageDotContainer: { flexGrow: 1 }, newMessageDotRoot: { width: e.spaces.space12, height: e.spaces.space12, marginStart: e.spaces.space4 }, newMessageDotRegular: { color: e.colors.primary }, newMessageDotHighlighted: { color: e.colors.white }, titleContainer: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1 }, titleTextRoot: { flexGrow: 1, flexShrink: 1 }, titleTextHighlighted: { color: e.colors.white } }));
            function he({ conversationSubtitle: e, conversationTitle: t, inboxUnreadCount: r = 0, isConversationUnread: a = !1, isHighlighted: i, onDrawerOpen: o, triggerHighlight: s }) {
                const c = n.createRef(),
                    u = (0, z.z)(),
                    v = (0, l.I0)(),
                    g = (0, l.v9)(d.kX),
                    m = ve(r > 0, i),
                    p = g === b.S.EXPANDED,
                    E = n.useRef(0);
                n.useEffect(() => {
                    const e = E.current;
                    !i && s && (null === e || r > e) && s(), (E.current = r);
                }, [r, s, i]);
                const f = () => {
                        const e = p ? b.S.COLLAPSED : b.S.EXPANDED;
                        e === b.S.COLLAPSED ? u.scribe({ action: "collapse" }) : e === b.S.EXPANDED && (u.scribe({ action: "expand" }), o && o()), v(d.bi(e));
                    },
                    y = 0 === r ? [] : i ? [ge.headerHighlighted] : [ge.headerActive];
                return n.createElement(
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
                    n.createElement(h.Z, { ref: c, style: [ge.headerRoot, !p && ge.headerBorderClosed, ...y, ge.cursor], testID: i ? B.headerHighlighted : B.header }, n.createElement(_.Z, { leftControl: t && p ? n.createElement(j, { buttonType: m, hasNewMessages: r > 0, inboxUnreadCount: r }) : null, onMiddleControlClick: f, rightControl: n.createElement(ae, { analytics: u, buttonType: m, conversationTitle: t, handleToggleVisibility: f, isExpanded: p }), style: ge.roundedAppBarCorners, subtitle: e, title: n.createElement(de, { conversationTitle: t, hasNewMessages: r > 0, isConversationUnread: a, isHighlighted: i }), withBackground: !i })),
                );
            }
            const ve = (e, t) => (e && t ? "onMediaText" : "primaryText"),
                ge = D.default.create((e) => ({ cursor: { cursor: "pointer" }, headerRoot: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge, transition: "all 0.3s ease" }, headerBorderClosed: { borderColor: e.colors.navigationBackground }, headerActive: { backgroundColor: e.colors.unreadCellBackground }, headerHighlighted: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, roundedAppBarCorners: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge } }));
            function me({ conversationSubtitle: e, conversationTitle: t, inboxUnreadCount: r, isConversationUnread: a = !1, isHighlighted: i, onDrawerOpen: o, triggerHighlight: s }) {
                const c = (0, l.v9)(P.QA),
                    u = (0, l.v9)(d.gw);
                return n.createElement(he, { conversationSubtitle: e, conversationTitle: t, inboxUnreadCount: c, isConversationUnread: !!u && a, isHighlighted: i, onDrawerOpen: o, triggerHighlight: s });
            }
            var pe = r(24949),
                Ee = r(297436),
                fe = r(668214),
                be = r(289405),
                ye = r(798538),
                we = r(38562),
                Ce = r(131290),
                Ze = r(601576),
                De = r(919022),
                Oe = r(593953);
            const ke = (e, t) => t.conversationId,
                Se = (0, pe.P1)(
                    (e, t) => c.selectEntriesForConversation(e, ke(0, t)),
                    y._h,
                    (e, t) => (t ? (0, Oe.y9)(e, t) : void 0),
                ),
                Te = (e) => (t) => ye.De(e, t),
                Re = (e) => (t, r) => ye.rA(e, t, r),
                He = { conversation: (e, t) => c.selectConversation(e, ke(0, t)), entries: c.selectEntries, perspective: y._h, users: De.ZP.selectAll, dataSaverMode: we.IX, dtabBarInfo: be.U6, quickReplyOptions: Se, visibility: d.kX, inboxUnreadCount: P.QA, isUnread: (e, t) => !c.selectConversationIsRead(e, ke(0, t)), isDmReceiptSettingEnabled: Ce.cn },
                Le = { draftText: (e, t) => ye.vb(e, ke(0, t)), gifMetadata: (e, t) => ye.Tu(e, ke(0, t)), isUploading: (e, t) => ye.q9(e, ke(0, t)), media: (e, t) => ye.W8(e, ke(0, t)), mediaUploadProgress: (e, t) => ye.Ah(e, ke(0, t)) },
                Me = (0, fe.Z)()
                    .propsFromState(() => ({ ...He, ...Le }))
                    .adjustStateProps(({ conversation: e, dataSaverMode: t, draftText: r, dtabBarInfo: n, entries: a, gifMetadata: i, inboxUnreadCount: o, isDmReceiptSettingEnabled: s, isUnread: l, isUploading: c, media: d, mediaUploadProgress: u, perspective: h, quickReplyOptions: v, users: g, visibility: m }) => {
                        const p = e?.data;
                        return { conversation: p && (0, Ee.lk)(p, a, g), perspective: h, dataSaverMode: t, draftText: r, dtabBarInfo: n, gifMetadata: i, inboxUnreadCount: o, isDmReceiptSettingEnabled: s, isUploading: c, isUnread: l, media: d, mediaUploadProgress: u, quickReplyOptions: v, visibility: m };
                    })
                    .propsFromActions(({ conversationId: e }) => ({ addMedia: Re(e), addToast: Ze.fz, createLocalApiErrorHandler: (0, s.zr)("DIRECT_MESSAGES_CONVERSATION"), fetchConversationHistory: c.fetchConversationHistory, removeMedia: Te(e), saveText: ye.E4, sendMessage: ye.bG, updateConversationReadState: c.updateConversationReadState, fetchUpdatesIfNeeded: c.fetchUpdatesIfNeeded }))
                    .withAnalytics({ page: "messages", section: "thread_drawer" });
            class xe extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._composer = n.createRef()),
                        (this._renderConversation = (e, t) => {
                            const { conversationId: r, history: a, location: i, typingNotifier: o } = this.props;
                            return n.createElement(A.Z, { conversationId: r, drawerHeader: this._renderHeader(), history: a, isWide: !1, location: i, richTextInputContext: e, typeaheadWrapper: t, typingNotifier: o });
                        }),
                        (this._isExpanded = () => {
                            const { visibility: e } = this.props;
                            return e === b.S.EXPANDED;
                        }),
                        (this._fetchUpdatesIfNeeded = () => {
                            const { conversationId: e, createLocalApiErrorHandler: t, fetchUpdatesIfNeeded: r, isDmReceiptSettingEnabled: n } = this.props;
                            r(n ? { active_conversation_id: e, dm_users: !0 } : {}).catch(t());
                        }),
                        (0, S.Z)();
                }
                componentDidMount() {
                    this._updatePolling();
                }
                componentDidUpdate(e) {
                    e.visibility !== this.props.visibility && this._updatePolling();
                }
                render() {
                    const e = this._isExpanded();
                    return n.createElement(L.y3.Provider, { value: void 0 }, !e && this._renderHeader(), e ? (O.ZP.isDesktopOS() ? n.createElement(T, null, ({ richTextInputContext: e, typeaheadWrapper: t }) => this._renderConversation(e, t)) : this._renderConversation()) : null);
                }
                _renderHeader() {
                    const { conversation: e, conversationId: t, inboxUnreadCount: r, isHeaderHighlighted: a, isUnread: i, onDrawerOpen: o, perspective: s, triggerHeaderHighlight: l } = this.props,
                        c = a ? "white" : "text",
                        d = a ? "white" : "gray700",
                        u = e && (e.type === M.eD.ONE_TO_ONE || e.type === M.eD.SECRET_ONE_TO_ONE) && s && (0, H.Z)(e, s).map(({ user: e }) => e.screen_name),
                        v = u ? n.createElement(Z.Z, { color: d, screenName: u[0] }) : void 0;
                    return n.createElement(h.Z, { style: Ie.headerRoot }, n.createElement(I._g.Provider, { value: t }, n.createElement(me, { conversationSubtitle: v, conversationTitle: n.createElement(x.Z, { conversation: e, perspective: s, textColor: c, withScreenName: !1 }), inboxUnreadCount: r, isConversationUnread: i, isHighlighted: a, onDrawerOpen: o, triggerHighlight: l })));
                }
                _updatePolling() {
                    this._pollingTimer && this._pollingTimer.stop(), this.props.visibility === b.S.COLLAPSED && ((this._pollingTimer = new R.Z(this._fetchUpdatesIfNeeded, { interval: 3e3 })), this._pollingTimer.start());
                }
            }
            xe.contextType = k.rC;
            const Ie = D.default.create((e) => ({ headerRoot: { position: "sticky", top: 0, zIndex: e.componentZIndices.appBarZIndex } })),
                Ae = Me(xe);
            var Pe = r(293115),
                _e = r(715601),
                Ne = r(602920),
                Ue = r(161821),
                Fe = r(973572),
                ze = r(234296),
                Be = r(288331),
                Ve = r(826760),
                We = r(149290),
                Ke = r(763526);
            const Ge = G().a2f81050;
            function qe({ dmDrawerOnClick: e, drawerCacheKey: t }) {
                const r = (0, z.z)(),
                    a = (0, l.I0)(),
                    i = (0, l.v9)(c.selectConversations),
                    o = [];
                for (const e of (0, Ue.Z)(i)) !e.isDeleted && e.data?.trusted && o.push(e.data);
                o.sort(ze.Z);
                const s = o.map((e) => e.conversation_id),
                    d = (0, l.v9)(we.Kp),
                    u = (0, l.v9)(c.selectUntrustedLowQualityConversationCount),
                    h = (0, l.v9)(
                        (0, Fe.Z)(
                            (e) => c.selectUntrustedCounts(e),
                            (e) => e,
                        ),
                    ),
                    v = h.newUntrustedWithSocialProof + h.oldUntrustedWithSocialProof + h.newUntrustedWithoutSocialProof + h.oldUntrustedWithoutSocialProof,
                    g = d && (v > 0 || u > 0),
                    m = () => n.createElement(n.Fragment, null, n.createElement(Ke.J, null), n.createElement(We.Z, { allowUntrustedInbox: g, secondaryInboxCounts: h }));
                return n.createElement(Be.Z, { accessibilityTitle: Ge, analytics: r, conversationIds: s, customCellClick: e, fetchInboxHistory: () => a(c.fetchTrustedInboxHistory()), isDrawer: !0, renderEmptyDMInbox: () => n.createElement(Ve.Z, { messageRequestPivot: m() }), renderStickyContent: m, updateLastSeenEventId: () => a(c.updateTrustedLastSeenEventId()), virtualScrollerCacheKey: t, withPinnedInbox: !0 });
            }
            const Xe = "dmDrawerInbox";
            function je({ renderHeader: e }) {
                const t = (0, l.I0)();
                return n.createElement(
                    h.Z,
                    { style: Ye.fill },
                    n.createElement(
                        h.Z,
                        { style: [Ye.viewportView, Ne.Z.drawerHeaderRadius] },
                        n.createElement(
                            _e.Z,
                            { style: [Ye.viewportView, Ne.Z.drawerHeaderRadius] },
                            e(),
                            n.createElement(qe, {
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
                const a = (0, l.v9)(d.kX) === b.S.EXPANDED;
                n.useEffect(() => {
                    a && (0, S.Z)();
                }, [a]);
                const i = () => n.createElement(h.Z, { style: Qe.headerRoot }, n.createElement(me, { isHighlighted: e, onDrawerOpen: t, triggerHighlight: r }));
                return n.createElement(Pe.nO, { namespace: $e }, n.createElement(n.Fragment, null, !a && i(), a && n.createElement(je, { renderHeader: i })));
            }
            const Qe = D.default.create((e) => ({ headerRoot: { position: "sticky", top: 0, zIndex: e.componentZIndices.appBarZIndex } })),
                et = 3e3,
                tt = { isGlobal: !0, isSticky: !0 },
                rt = { isGlobal: !0, isSticky: !1 };
            function nt({ hasConversations: e, isHideDMDrawerPath: t, width: r = f.Z.dmDrawerWidth.max }) {
                const i = n.useRef(null),
                    o = (0, a.useHistory)(),
                    s = (0, a.useLocation)(),
                    c = (0, l.v9)(y._h),
                    Z = (0, l.v9)(d.gw),
                    D = (0, l.v9)((e) => d.kX(e)),
                    O = (0, w.N)(),
                    [k, S] = n.useState(!1),
                    [T, R] = n.useState(void 0),
                    H = D === b.S.EXPANDED,
                    L = () => {
                        k && (S(!1), clearTimeout(i.current));
                    },
                    M = (e) => {
                        const {
                            nativeEvent: {
                                layout: { height: t },
                            },
                        } = e;
                        H || void 0 !== T || R(t);
                    },
                    x = n.useCallback(() => {
                        H ||
                            k ||
                            i.current ||
                            (S(!0),
                            (i.current = setTimeout(() => {
                                S(!1), (i.current = null);
                            }, et)));
                    }, [H, k]);
                n.useEffect(
                    () => () => {
                        clearTimeout(i.current);
                    },
                    [i],
                );
                const I = (function (e) {
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
                    })(H),
                    A = n.useRef(),
                    P = H ? { transform: [{ translateY: 0 }] } : I ? { transition: "none", transform: [{ translateY: `calc(100% - ${A.current?.getBoundingClientRect().height ?? 0}px` }] } : { transform: [{ translateY: `calc(100% - ${T ?? 0}px` }] },
                    _ = (function (e) {
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
                    })(!!T);
                return (() => {
                    const r = D === b.S.CLOSED;
                    return !t() && e && !r;
                })()
                    ? n.createElement(
                          v.Z.Drawer,
                          null,
                          n.createElement(g.Z, { id: "DMDrawer" }, (e, t) => n.createElement(C.Z.Provider, { value: { isDrawer: !0 } }, n.createElement(m.ZP.Provider, { value: { isDMDrawer: () => !0 } }, n.createElement(h.Z, (0, u.Z)({ ref: e() }, t({ style: [Ne.Z.root, _ && Ne.Z.expandable, !H && T && { height: T, maxHeight: T }, { width: r }, P, p.Z.reducedMotionEnabled && Ne.Z.reducedMotion], testID: B.root })), n.createElement(h.Z, { onLayout: T ? void 0 : M, ref: A, style: [H ? Ne.Z.expanded : null, Ne.Z.main] }, Z ? n.createElement(E.Z.Provider, { value: rt }, n.createElement(Ae, { conversationId: Z, history: o, isHeaderHighlighted: k, location: s, onDrawerOpen: L, perspective: c, triggerHeaderHighlight: x, typingNotifier: O })) : n.createElement(E.Z.Provider, { value: tt }, n.createElement(Je, { isHeaderHighlighted: k, onDrawerOpen: L, triggerHeaderHighlight: x }))))))),
                      )
                    : null;
            }
            function at({ isHideDMDrawerPath: e, width: t }) {
                const r = (0, s.n7)("DIRECT_MESSAGES_DRAWER"),
                    a = (0, l.I0)(),
                    [i, u] = n.useState(!1),
                    h = (0, l.v9)(c.selectConversations),
                    v = !(0, o.Z)(h),
                    g = n.useCallback(() => {
                        e() || i || (a(d.VP()), a(c.fetchInboxIfNeeded()).catch(r({})), u(!0));
                    }, [r, a, i, e]);
                return (
                    n.useEffect(() => {
                        g();
                    }, [g]),
                    n.createElement(nt, { hasConversations: v, isHideDMDrawerPath: e, width: t })
                );
            }
            function it({ width: e }) {
                const t = (0, a.useHistory)(),
                    r = t.getLastNonModalLocationPathname() ?? t.location.pathname,
                    o = n.useCallback(() => (0, i.z)(r) || r.startsWith("/i/chat") || r.startsWith("/i/communitynotes") || r.startsWith("/i/money") || r.startsWith("/i/verified") || r.startsWith("/i/conferences-room") || r.startsWith("/i/grok"), [r]);
                return n.createElement(at, { isHideDMDrawerPath: o, width: e });
            }
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(202784),
                a = r(325686),
                i = r(392237);
            function o({ spacing: e, style: t }) {
                return n.createElement(a.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => v });
            var n = r(202784),
                a = r(476984),
                i = r.n(a),
                o = r(143778),
                s = r(750410),
                l = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class v extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: a, icon: i, loadingMessage: o, onRequestRetry: d, render: v, renderFailure: g, retryMessage: m, retryable: p } = this.props;
                    switch (a) {
                        case c:
                            return p ? n.createElement(s.Z, { icon: i, onRequestRetry: d, retryMessage: m }) : r ? n.createElement(l.m, { failureMessage: r }) : g();
                        case u:
                            return n.createElement(l.J, { "aria-label": e, color: t, loadingMessage: o });
                        case h:
                            return null;
                        default:
                            return v();
                    }
                }
            }
            v.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
        215380: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M18.5 2h-13A2.5 2.5 0 003 4.5v15A2.5 2.5 0 005.5 22h13a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0018.5 2zm.5 17.5c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v15zM9 5h6v2H9V5zm3 4.555a2.092 2.092 0 11-.001 4.185A2.092 2.092 0 0112 9.555zM16.141 18H7.859c.237-.763.586-1.431 1.074-1.949 1.036-1.105 2.31-1.277 3.067-1.277s2.031.172 3.067 1.277c.489.518.837 1.186 1.074 1.949z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        818088: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        324922: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        826363: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M20 7.5H4v-3h16v3zm0 6H4v-3h16v3zm0 6H4v-3h16v3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        256061: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V13h-2v-2.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H11v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19.429 16l-2 2H23v2h-5.571l2 2-1.414 1.414L13.601 19l4.414-4.414L19.429 16z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        648539: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19 14h2v3h-2v-3zM3 14H1v3h2v-3zm.5 7c-.276 0-.5-.225-.5-.5V19H1v1.5C1 21.879 2.122 23 3.5 23H5v-2H3.5zM10 5V3H7v2h3zm-7 .5c0-.275.224-.5.5-.5H5V3H3.5C2.122 3 1 4.121 1 5.5V7h2V5.5zM12 21v2h3v-2h-3zm-5 0v2h3v-2H7zm12-.5c0 .275-.224.5-.5.5H17v2h1.5c1.378 0 2.5-1.121 2.5-2.5V19h-2v1.5zM3 9H1v3h2V9zm3 9h5v-2H6v2zM18-.1c3.364 0 6.1 2.736 6.1 6.1s-2.736 6.1-6.1 6.1-6.1-2.736-6.1-6.1S14.636-.1 18-.1zm0 2c-2.261 0-4.1 1.839-4.1 4.1s1.839 4.1 4.1 4.1 4.1-1.839 4.1-4.1-1.839-4.1-4.1-4.1zm.5 3.1H15v2h6V5h-2.5zM6 10h4V8H6v2zm0 4h7v-2H6v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        89085: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        963879: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17.896 11.553L20.12 16H13v5l-1 2-1-2v-3.752L14.248 14h2.636l-.776-1.553 1.789-.895zm3.813-7.843l-17.999 18-.707-.707-.707-.707L6.592 16H3.88L7 9.76V4.5C7 3.121 8.122 2 9.5 2h5C15.878 2 17 3.121 17 4.5v1.092l3.296-3.296.707.707.707.707zm-6.71 3.882V4.5c0-.275-.224-.5-.5-.5h-5c-.276 0-.5.225-.5.5v5.732L7.115 14h1.476l6.408-6.408z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        142496: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        226597: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        392032: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23.259 10.5L12 .648v5.581C5.269 7.328 1.995 12.498 2 22.001h2c0-1.914.705-3.537 2.095-4.825 1.5-1.391 3.739-2.259 5.905-2.331v5.507L23.259 10.5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
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
                        const i = t ? t(n, a, e) : !!n;
                        return i && r[0].push(n), !i && r[1].push(n), r;
                    },
                    [[], []],
                );
            }
        },
        730895: (e, t, r) => {
            var n = r(821176);
            e.exports = function () {
                var e = n(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DMDrawer.ac3c3a1a.js.map
