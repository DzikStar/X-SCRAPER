"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DMDrawer"],
    {
        290402: (e, t, r) => {
            r.d(t, { Z: () => g });
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
                    return n.createElement(o.Z, (0, a.Z)({}, t, { icon: s ? void 0 : n.createElement(d.default, { style: v.icon }), retryMessage: s ? e : u }));
                },
                v = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                g = n.forwardRef(h);
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
                v = r(40904),
                g = r(372703),
                m = r(576513);
            const p = { [m.Z.FEEDBACK_CLOSE]: a.default, [m.Z.FEEDBACK]: n.default, [m.Z.FROWN]: i.default, [m.Z.SMILE]: o.default, [m.Z.MODERATION]: s.default, [m.Z.TOPIC]: l.default, [m.Z.TOPIC_CLOSE]: c.default, [m.Z.FLAG]: d.default, [m.Z.NO]: u.default, [m.Z.SPEAKER]: h.default, [m.Z.SPEAKER_OFF]: v.default },
                E = { [g.ZP.SeeFewer]: i.default, [g.ZP.SeeMore]: o.default, [g.ZP.DontLike]: i.default },
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
            r.d(t, { $f: () => D, KV: () => E, LI: () => L, SC: () => Z, Vt: () => y, ed: () => M, op: () => S });
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
                S = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: r, source: a, testID: n, unblockAction: i, unblockSubtext: o, user: s }) => {
                    let l,
                        u = c.Z;
                    const h = L(s, r);
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
                T = (e) => (e.blocking ? b({ screenName: e.screen_name }) : v({ screenName: e.screen_name })),
                L = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: f({ screenName: e }), label: y, text: t ? C : w }))(e.screen_name, t) : D(e.screen_name, t)),
                M = ({ confirmation: e, handleConfirm: t, onClose: r }) => {
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
            r.d(t, { OX: () => h, Od: () => d, PN: () => v, uq: () => c, wR: () => m });
            var a = r(251067),
                n = r(522171),
                i = r(674132),
                o = r.n(i),
                s = r(912021),
                l = r(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, s.Z)((e) => {
                    const t = e ? [{ description: o().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, a.fH)(a.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: o().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: o().a83d4280, keys: c.nextItem, universal: !0 }, { description: o().g0048656, keys: c.previousItem, universal: !0 }, { description: o().a690c4d0, keys: "Space", universal: !0 }, { description: o().e893811a, keys: c.refresh, universal: !1 }, { description: o().ha8209bc, keys: c.goHome, universal: !1 }, { description: o().fcf3e54c, keys: c.goExplore, universal: !0 }, { description: o().eb75875e, keys: c.goNotifications, universal: !1 }, { description: o().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: o().fa98627a, keys: c.goProfile, universal: !1 }, { description: o().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: o().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: o().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: o().b0041756, keys: c.goLists, universal: !1 }, { description: o().d4986f86, keys: c.goMessages, universal: !1 }, { description: o().h5860a68, keys: c.goGrok, universal: !1 }, { description: o().bb081ea2, keys: c.goSettings, universal: !0 }, { description: o().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: o().eee2ed92, keys: c.goToUser, universal: !0 }, { description: o().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                h = () => [
                    { description: o().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: o().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: o().e736990a, keys: c.newMessage, universal: !1 },
                    { description: o().a9ae1e78, keys: c.search, universal: !0 },
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
                        a = v(),
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
                    if (t) return { dataSet: { "at-shortcutkeys": g(e) } };
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
                S = r(323265),
                O = r(443781),
                k = r(740633);
            const T = (0, r(523561).Z)({ loader: () => r.e("ondemand.RichText").then(r.bind(r, 687184)) });
            var L = r(111311),
                M = r(198506),
                R = r(768572),
                x = r(275365),
                H = r(255534),
                I = r(164383),
                P = r(587521),
                A = r(806960),
                _ = r(786998),
                N = r(516951),
                z = r(933794),
                U = r(163390),
                F = r(725516);
            const B = { header: "DMDrawerHeader", headerHighlighted: "DMDrawerHeaderHighlighted", root: "DMDrawer" };
            var V = r(154003),
                W = r(310088),
                K = r(674132),
                G = r.n(K),
                q = r(894966);
            const X = G().b08821f4;
            function j({ buttonType: e, hasNewMessages: t, inboxUnreadCount: r }) {
                const n = (0, l.I0)(),
                    i = t || (void 0 !== r && r > 0);
                return a.createElement(
                    h.Z,
                    null,
                    a.createElement(V.ZP, {
                        "aria-label": X,
                        icon: a.createElement(q.default, null),
                        onPress: () => {
                            n(d.DO(null));
                        },
                        type: e,
                    }),
                    i ? a.createElement(W.Z, { pip: !0, style: Y.newMessagePip, truncatedCountFormatter: () => "", unreadCountLabel: () => "" }) : null,
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
                        : a.createElement(V.ZP, {
                              "aria-label": te,
                              hoverLabel: { label: ae },
                              icon: a.createElement($.default, null),
                              onPress: () => {
                                  e.scribe({ section: "compose_drawer", component: "dm", action: "show" }), s.push({ pathname: "/messages/compose", state: { source: "drawer" } });
                              },
                              type: t,
                          }),
                    r && o && a.createElement(I.fK, null),
                    o ? a.createElement(V.ZP, { "aria-label": ee, hoverLabel: { label: ee }, icon: a.createElement(J.default, null), onPress: i, type: t }) : a.createElement(V.ZP, { "aria-label": re, hoverLabel: { label: re }, icon: a.createElement(Q.default, null), onPress: i, type: t }),
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
                    u = (0, F.z)(),
                    v = (0, l.I0)(),
                    g = (0, l.v9)(d.kX),
                    m = ve(r > 0, i),
                    p = g === b.S.EXPANDED,
                    E = a.useRef(0);
                a.useEffect(() => {
                    const e = E.current;
                    !i && s && (null === e || r > e) && s(), (E.current = r);
                }, [r, s, i]);
                const f = () => {
                        const e = p ? b.S.COLLAPSED : b.S.EXPANDED;
                        e === b.S.COLLAPSED ? u.scribe({ action: "collapse" }) : e === b.S.EXPANDED && (u.scribe({ action: "expand" }), o && o()), v(d.bi(e));
                    },
                    y = 0 === r ? [] : i ? [ge.headerHighlighted] : [ge.headerActive];
                return a.createElement(
                    z.Z,
                    {
                        enabled: !0,
                        handlers: {
                            [U.uq.goLists]: N.Z,
                            [U.uq.toggleDMDrawer]: () => {
                                f(), c && c.current && c.current.focus();
                            },
                        },
                    },
                    a.createElement(h.Z, { ref: c, style: [ge.headerRoot, !p && ge.headerBorderClosed, ...y, ge.cursor], testID: i ? B.headerHighlighted : B.header }, a.createElement(_.Z, { leftControl: t && p ? a.createElement(j, { buttonType: m, hasNewMessages: r > 0, inboxUnreadCount: r }) : null, onMiddleControlClick: f, rightControl: a.createElement(ne, { analytics: u, buttonType: m, conversationTitle: t, handleToggleVisibility: f, isExpanded: p }), style: ge.roundedAppBarCorners, subtitle: e, title: a.createElement(de, { conversationTitle: t, hasNewMessages: r > 0, isConversationUnread: n, isHighlighted: i }), withBackground: !i })),
                );
            }
            const ve = (e, t) => (e && t ? "onMediaText" : "primaryText"),
                ge = D.default.create((e) => ({ cursor: { cursor: "pointer" }, headerRoot: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge, transition: "all 0.3s ease" }, headerBorderClosed: { borderColor: e.colors.navigationBackground }, headerActive: { backgroundColor: e.colors.unreadCellBackground }, headerHighlighted: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, roundedAppBarCorners: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge } }));
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
                we = r(38562),
                Ce = r(131290),
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
                Le = (e) => (t, r) => ye.rA(e, t, r),
                Me = { conversation: (e, t) => c.selectConversation(e, Oe(0, t)), entries: c.selectEntries, perspective: y._h, users: De.ZP.selectAll, dataSaverMode: we.IX, dtabBarInfo: be.U6, quickReplyOptions: ke, visibility: d.kX, inboxUnreadCount: A.QA, isUnread: (e, t) => !c.selectConversationIsRead(e, Oe(0, t)), isDmReceiptSettingEnabled: Ce.cn },
                Re = { draftText: (e, t) => ye.vb(e, Oe(0, t)), gifMetadata: (e, t) => ye.Tu(e, Oe(0, t)), isUploading: (e, t) => ye.q9(e, Oe(0, t)), media: (e, t) => ye.W8(e, Oe(0, t)), mediaUploadProgress: (e, t) => ye.Ah(e, Oe(0, t)) },
                xe = (0, fe.Z)()
                    .propsFromState(() => ({ ...Me, ...Re }))
                    .adjustStateProps(({ conversation: e, dataSaverMode: t, draftText: r, dtabBarInfo: a, entries: n, gifMetadata: i, inboxUnreadCount: o, isDmReceiptSettingEnabled: s, isUnread: l, isUploading: c, media: d, mediaUploadProgress: u, perspective: h, quickReplyOptions: v, users: g, visibility: m }) => {
                        const p = e?.data;
                        return { conversation: p && (0, Ee.lk)(p, n, g), perspective: h, dataSaverMode: t, draftText: r, dtabBarInfo: a, gifMetadata: i, inboxUnreadCount: o, isDmReceiptSettingEnabled: s, isUploading: c, isUnread: l, media: d, mediaUploadProgress: u, quickReplyOptions: v, visibility: m };
                    })
                    .propsFromActions(({ conversationId: e }) => ({ addMedia: Le(e), addToast: Ze.fz, createLocalApiErrorHandler: (0, s.zr)("DIRECT_MESSAGES_CONVERSATION"), fetchConversationHistory: c.fetchConversationHistory, removeMedia: Te(e), saveText: ye.E4, sendMessage: ye.bG, updateConversationReadState: c.updateConversationReadState, fetchUpdatesIfNeeded: c.fetchUpdatesIfNeeded }))
                    .withAnalytics({ page: "messages", section: "thread_drawer" });
            class He extends a.Component {
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
                    return a.createElement(R.y3.Provider, { value: void 0 }, !e && this._renderHeader(), e ? (S.ZP.isDesktopOS() ? a.createElement(T, null, ({ richTextInputContext: e, typeaheadWrapper: t }) => this._renderConversation(e, t)) : this._renderConversation()) : null);
                }
                _renderHeader() {
                    const { conversation: e, conversationId: t, inboxUnreadCount: r, isHeaderHighlighted: n, isUnread: i, onDrawerOpen: o, perspective: s, triggerHeaderHighlight: l } = this.props,
                        c = n ? "white" : "text",
                        d = n ? "white" : "gray700",
                        u = e && (e.type === x.eD.ONE_TO_ONE || e.type === x.eD.SECRET_ONE_TO_ONE) && s && (0, M.Z)(e, s).map(({ user: e }) => e.screen_name),
                        v = u ? a.createElement(Z.Z, { color: d, screenName: u[0] }) : void 0;
                    return a.createElement(h.Z, { style: Ie.headerRoot }, a.createElement(I._g.Provider, { value: t }, a.createElement(me, { conversationSubtitle: v, conversationTitle: a.createElement(H.Z, { conversation: e, perspective: s, textColor: c, withScreenName: !1 }), inboxUnreadCount: r, isConversationUnread: i, isHighlighted: n, onDrawerOpen: o, triggerHighlight: l })));
                }
                _updatePolling() {
                    this._pollingTimer && this._pollingTimer.stop(), this.props.visibility === b.S.COLLAPSED && ((this._pollingTimer = new L.Z(this._fetchUpdatesIfNeeded, { interval: 3e3 })), this._pollingTimer.start());
                }
            }
            He.contextType = O.rC;
            const Ie = D.default.create((e) => ({ headerRoot: { position: "sticky", top: 0, zIndex: e.componentZIndices.appBarZIndex } })),
                Pe = xe(He);
            var Ae = r(293115),
                _e = r(715601),
                Ne = r(602920),
                ze = r(161821),
                Ue = r(973572),
                Fe = r(234296),
                Be = r(288331),
                Ve = r(826760),
                We = r(149290),
                Ke = r(763526);
            const Ge = G().a2f81050;
            function qe({ dmDrawerOnClick: e, drawerCacheKey: t }) {
                const r = (0, F.z)(),
                    n = (0, l.I0)(),
                    i = (0, l.v9)(c.selectConversations),
                    o = [];
                for (const e of (0, ze.Z)(i)) !e.isDeleted && e.data?.trusted && o.push(e.data);
                o.sort(Fe.Z);
                const s = o.map((e) => e.conversation_id),
                    d = (0, l.v9)(we.Kp),
                    u = (0, l.v9)(c.selectUntrustedLowQualityConversationCount),
                    h = (0, l.v9)(
                        (0, Ue.Z)(
                            (e) => c.selectUntrustedCounts(e),
                            (e) => e,
                        ),
                    ),
                    v = h.newUntrustedWithSocialProof + h.oldUntrustedWithSocialProof + h.newUntrustedWithoutSocialProof + h.oldUntrustedWithoutSocialProof,
                    g = d && (v > 0 || u > 0),
                    m = () => a.createElement(a.Fragment, null, a.createElement(Ke.J, null), a.createElement(We.Z, { allowUntrustedInbox: g, secondaryInboxCounts: h }));
                return a.createElement(Be.Z, { accessibilityTitle: Ge, analytics: r, conversationIds: s, customCellClick: e, fetchInboxHistory: () => n(c.fetchTrustedInboxHistory()), isDrawer: !0, renderEmptyDMInbox: () => a.createElement(Ve.Z, { messageRequestPivot: m() }), renderStickyContent: m, updateLastSeenEventId: () => n(c.updateTrustedLastSeenEventId()), virtualScrollerCacheKey: t, withPinnedInbox: !0 });
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
                    S = (0, w.N)(),
                    [O, k] = a.useState(!1),
                    [T, L] = a.useState(void 0),
                    M = D === b.S.EXPANDED,
                    R = () => {
                        O && (k(!1), clearTimeout(i.current));
                    },
                    x = (e) => {
                        const {
                            nativeEvent: {
                                layout: { height: t },
                            },
                        } = e;
                        M || void 0 !== T || L(t);
                    },
                    H = a.useCallback(() => {
                        M ||
                            O ||
                            i.current ||
                            (k(!0),
                            (i.current = setTimeout(() => {
                                k(!1), (i.current = null);
                            }, et)));
                    }, [M, O]);
                a.useEffect(
                    () => () => {
                        clearTimeout(i.current);
                    },
                    [i],
                );
                const I = (function (e) {
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
                    })(M),
                    P = a.useRef(),
                    A = M ? { transform: [{ translateY: 0 }] } : I ? { transition: "none", transform: [{ translateY: `calc(100% - ${P.current?.getBoundingClientRect().height ?? 0}px` }] } : { transform: [{ translateY: `calc(100% - ${T ?? 0}px` }] },
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
                          v.Z.Drawer,
                          null,
                          a.createElement(g.Z, { id: "DMDrawer" }, (e, t) => a.createElement(C.Z.Provider, { value: { isDrawer: !0 } }, a.createElement(m.ZP.Provider, { value: { isDMDrawer: () => !0 } }, a.createElement(h.Z, (0, u.Z)({ ref: e() }, t({ style: [Ne.Z.root, _ && Ne.Z.expandable, !M && T && { height: T, maxHeight: T }, { width: r }, A, p.Z.reducedMotionEnabled && Ne.Z.reducedMotion], testID: B.root })), a.createElement(h.Z, { onLayout: T ? void 0 : x, ref: P, style: [M ? Ne.Z.expanded : null, Ne.Z.main] }, Z ? a.createElement(E.Z.Provider, { value: rt }, a.createElement(Pe, { conversationId: Z, history: o, isHeaderHighlighted: O, location: s, onDrawerOpen: R, perspective: c, triggerHeaderHighlight: H, typingNotifier: S })) : a.createElement(E.Z.Provider, { value: tt }, a.createElement(Je, { isHeaderHighlighted: O, onDrawerOpen: R, triggerHeaderHighlight: H }))))))),
                      )
                    : null;
            }
            function nt({ isHideDMDrawerPath: e, width: t }) {
                const r = (0, s.n7)("DIRECT_MESSAGES_DRAWER"),
                    n = (0, l.I0)(),
                    [i, u] = a.useState(!1),
                    h = (0, l.v9)(c.selectConversations),
                    v = !(0, o.Z)(h),
                    g = a.useCallback(() => {
                        e() || i || (n(d.VP()), n(c.fetchInboxIfNeeded()).catch(r({})), u(!0));
                    }, [r, n, i, e]);
                return (
                    a.useEffect(() => {
                        g();
                    }, [g]),
                    a.createElement(at, { hasConversations: v, isHideDMDrawerPath: e, width: t })
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
            r.d(t, { Z: () => v });
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
            class v extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: n, icon: i, loadingMessage: o, onRequestRetry: d, render: v, renderFailure: g, retryMessage: m, retryable: p } = this.props;
                    switch (n) {
                        case c:
                            return p ? a.createElement(s.Z, { icon: i, onRequestRetry: d, retryMessage: m }) : r ? a.createElement(l.m, { failureMessage: r }) : g();
                        case u:
                            return a.createElement(l.J, { "aria-label": e, color: t, loadingMessage: o });
                        case h:
                            return null;
                        default:
                            return v();
                    }
                }
            }
            v.defaultProps = { renderFailure: o.Z, retryable: !0 };
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
        867492: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 11.59L3.96 3.54 2.54 4.96 12 14.41l9.46-9.45-1.42-1.42L12 11.59zm0 7l-8.04-8.05-1.42 1.42L12 21.41l9.46-9.45-1.42-1.42L12 18.59z" })) }, { writingDirection: t });
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
        19197: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M20 7H4V5h16v2zm-.004 6h-16v-2h16v2zM20 19H4v-2h16v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        609980: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" })) }, { writingDirection: t });
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
        856661: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        256061: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V13h-2v-2.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H11v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19.429 16l-2 2H23v2h-5.571l2 2-1.414 1.414L13.601 19l4.414-4.414L19.429 16z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        784732: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        89085: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        310700: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M21.04 1.54L17.5 5.09c-.04-.02-.08-.03-.13-.04L14.3 3H9.7l-3 2H5C3.62 5 2.5 6.12 2.5 7.5v11c0 .46.12.88.34 1.25l-1.3 1.29 1.42 1.42 19.5-19.5-1.42-1.42zM13.7 5l2.33 1.56-2 1.99C13.44 8.2 12.74 8 12 8c-2.21 0-4 1.79-4 4 0 .74.2 1.44.55 2.03L4.5 18.09V7.5c0-.28.22-.5.5-.5h2.3l3-2h3.4zM12 10c.18 0 .35.02.52.07l-2.45 2.45c-.05-.17-.07-.34-.07-.52 0-1.1.9-2 2-2zm7 11H7.24l2-2H19c.28 0 .5-.22.5-.5V9h2v9.5c0 1.38-1.12 2.5-2.5 2.5z" })) }, { writingDirection: t });
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
        668430: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M13 3v13.59l5.043-5.05 1.414 1.42L12 20.41l-7.457-7.45 1.414-1.42L11 16.59V3h2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        142496: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
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
        820803: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15 10H9V8h6v2zm-2 4H9v-2h4v2zm-.847 8.99c4.215-.652 8.988-5.523 9.097-11.469l-2-.037c-.083 4.574-3.395 8.102-6.25 9.211v-2.292l-1.786-.191C7.528 17.815 4.75 14.714 4.75 11c0-3.998 3.252-7.25 7.25-7.25v-2c-5.101 0-9.25 4.149-9.25 9.25 0 4.738 3.546 8.693 8.25 9.2v2.969l1.153-.179zm4.39-16.95l1.414 1.42L20 5.41l2.043 2.05 1.414-1.42L21.414 4l2.043-2.04L22.043.54 20 2.59 17.957.54l-1.414 1.42L18.586 4l-2.043 2.04z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        385438: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M7 21V3h2v18H7zm8-2V5h2v14h-2zm-4-2V7h2v10h-2zm-8-2V9h2v6H3zm16 0V9h2v6h-2z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DMDrawer.759108aa.js.map
