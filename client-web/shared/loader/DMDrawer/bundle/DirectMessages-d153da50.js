"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DirectMessages-d153da50"],
    {
        11582: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var a = n(202784),
                r = n(325686),
                s = n(154003),
                o = n(731708),
                i = n(392237),
                c = n(674132),
                l = n.n(c),
                d = n(725516);
            const p = l().b08821f4,
                u = l().e047b8fa,
                m = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingStart: e.spaces.space16, paddingVertical: e.spaces.space4, alignItems: "center", flexDirection: "row", justifyContent: "space-between", borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, backButton: { marginEnd: e.spaces.space4 }, iconContainer: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, marginEnd: e.spaces.space12, fontSize: e.fontSizes.body, marginVertical: e.spaces.space8 }, labelHeader: { borderBottomStyle: "none", paddingVertical: e.spaces.space12 } })),
                h = (e) => {
                    const t = (0, d.z)(),
                        { clearRecentSearches: n, headerText: i, icon: c, isInboxLabelHeader: l, withClearButton: h } = e;
                    a.useEffect(() => {
                        t.scribe({ component: "recent_search", action: "impression" });
                    }, [t]);
                    const _ = [m.root, l && m.labelHeader];
                    return a.createElement(
                        r.Z,
                        { style: _ },
                        a.createElement(
                            r.Z,
                            { style: m.iconContainer },
                            (() => {
                                const e = c;
                                return e ? a.createElement(e, { "aria-label": "icon", style: m.icon }) : null;
                            })(),
                            a.createElement(o.ZP, { "aria-level": 2, role: "heading", size: "headline1", weight: "heavy" }, i),
                        ),
                        h ? a.createElement(s.ZP, { "aria-label": p, onPress: n, style: m.backButton, type: "onMediaWhiteFilled" }, u) : null,
                    );
                };
        },
        511495: (e, t, n) => {
            n.d(t, { Z: () => b });
            var a = n(202784),
                r = n(325686),
                s = n(909377),
                o = n(952428),
                i = n(872405),
                c = n(731708),
                l = n(154003),
                d = n(392237),
                p = n(674132),
                u = n.n(p),
                m = n(956272),
                h = n(837020);
            const _ = u().dbd5d400;
            class v extends a.PureComponent {
                render() {
                    const { clearRecentSearch: e, handleRecentSearchClick: t, recentSearch: n } = this.props,
                        d = a.createElement(s.Z, { Icon: m.default, color: "neutral", size: "xLarge", style: g.searchIcon }),
                        p = [g.listItemView, g.bottomBorder];
                    return a.createElement(o.Z, { onPress: t, style: p }, a.createElement(r.Z, null, a.createElement(i.Z, { avatarCell: d, avatarSize: "xLarge", cellStyle: g.avatarColumn }, a.createElement(r.Z, { style: g.container }, a.createElement(c.ZP, { numberOfLines: 1 }, n), a.createElement(l.ZP, { "aria-label": _, borderColor: "transparent", icon: a.createElement(h.default, null), onPress: e, type: "brandText" })))));
                }
            }
            const g = d.default.create((e) => ({ container: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, searchIcon: { marginEnd: e.spaces.space12, padding: e.spaces.space4 }, avatarColumn: { flexGrow: 1, minWidth: "32px" }, bottomBorder: { borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, listItemView: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space12, width: "100%" } })),
                b = v;
        },
        257444: (e, t, n) => {
            n.d(t, { Z: () => Et });
            n(136728);
            var a = n(202784),
                r = n(325686),
                s = n(310088),
                o = n(731708),
                i = n(529509),
                c = n(601413),
                l = n(976145),
                d = n(451051),
                p = n(966886),
                u = n(823161),
                m = n(530732),
                h = n(952428),
                _ = n(872405),
                v = n(674132),
                g = n.n(v),
                b = n(165243),
                E = n(7330),
                f = n(443781),
                y = n(107914),
                C = n(198506),
                I = n(575522),
                w = n(725516),
                Z = n(275365),
                x = n(147143),
                S = n(503115),
                P = n(255534),
                T = n(26339),
                N = n(228245);
            const M = ({ entry: e, entryType: t, isSelected: n = !1, perspective: r, unread: s = !1 }) => {
                const i = (0, N.FC)(e, t, r),
                    c = (0, I.T)(s),
                    l = (0, I.F)(s, n);
                return a.createElement(o.ZP, { color: l, weight: c }, i);
            };
            var D = n(513805),
                O = n(24949),
                k = n(668214),
                R = n(919022),
                F = n(342478);
            const B = (e, t) => t.entry,
                L = (0, k.Z)().propsFromState(() => ({ users: (0, O.P1)(R.ZP.selectAll, B, F.f) }))(({ entry: e, entryType: t, isSelected: n = !1, perspective: r, unread: s = !1, users: i }) => {
                    const c = (0, D.FC)(e, t, r, i),
                        l = (0, I.T)(s),
                        d = (0, I.F)(s, n);
                    return a.createElement(o.ZP, { color: d, weight: l }, c);
                });
            var A = n(309854),
                U = n(593953),
                $ = n(276001);
            const H = (e, t) => t.isMessageItem && t.entry?.message_data?.attachment?.card,
                z = (e, t) => R.ZP.select(e, t.senderId),
                G = (e, t) => (t.recipientId ? R.ZP.select(e, t.recipientId) : void 0),
                V = (0, k.Z)().propsFromState(() => ({ card: $.Z.createSingleHydratedSelector(H), user: z, recipient: G }));
            var W = n(530525),
                K = n(439592),
                X = n(392237),
                j = n(301758),
                Y = n(247979);
            const Q = g().ga086a54,
                q = ({ "aria-label": e, image: t }) => a.createElement(r.Z, { style: te.thumbnail }, a.createElement(W.Z, { "aria-label": e, aspectMode: K.Z.SQUARE, backgroundColor: X.default.theme.colors.gray300, image: t })),
                J = ({ card: e, tweetUserId: t }) => a.createElement(Y.Z, { card: { name: e.name, url: e.url, binding_values: e.binding_values, users: e.users }, cardContext: { tweetUserId: t } });
            function ee({ "aria-label": e, card: t, content: n, isMessageSearchItem: s = !1, isSelected: i = !1, searchImage: c, tweetId: l, tweetUserId: d, unread: p = !1 }) {
                const u = (0, I.F)(p, i),
                    m = (0, I.T)(p);
                return s && (c || t || l) ? a.createElement(r.Z, { style: c ? te.mediaContainer : void 0 }, a.createElement(r.Z, { style: t || l ? te.cardMessageText : te.messageText }, a.createElement(o.ZP, { color: u, numberOfLines: 2, weight: m }, n)), t && d ? a.createElement(J, { card: t, tweetUserId: d }) : null, l ? a.createElement(j.Z, { tweetId: l }) : null, c ? a.createElement(q, { "aria-label": e || Q, image: c }) : null) : a.createElement(o.ZP, { color: u, numberOfLines: s ? 2 : 1, style: s ? te.messageText : void 0, weight: m }, n);
            }
            const te = X.default.create((e) => ({ thumbnail: { height: e.spacesPx.space40, width: e.spacesPx.space40, borderRadius: e.borderRadii.large, marginStart: `calc(${e.spaces.space8} + ${e.spaces.space2})`, overflow: "hidden" }, cardMessageText: { paddingVertical: `calc(${e.spaces.space8} + ${e.spaces.space2})` }, messageText: { maxWidth: `calc(100% - (${e.spaces.space48} + ${e.spaces.space2}))`, paddingVertical: e.spaces.space2 }, mediaContainer: { flexDirection: "row", justifyContent: "space-between" } })),
                ne = g().a9cc8cfe,
                ae = g().e5bfe07e,
                re = g().bf584cd2,
                se = g().e20b65b0,
                oe = g().a876e58c,
                ie = g().dedfd266,
                ce = g().i34ec422,
                le = (e, t) => (t ? a.createElement(o.ZP, { key: "senderName" }, a.createElement(g().I18NFormatMessage, { $i18n: "b3a2b11d" }, a.createElement(o.ZP, null, e))) : null),
                de = V(({ card: e, entry: t, perspective: n, isGroupDM: r, highlightingTokens: s, isMessageItem: i, unread: c = !1, user: l = {}, recipient: p = {}, isSelected: u = !1 }) => {
                    const { featureSwitches: m } = a.useContext(f.rC),
                        h = t && t.message_data;
                    if (!h) return null;
                    const { attachment: _ } = h,
                        v = _ && !!(_.video || _.photo || _.animated_gif || _.tweet || _.fleet || _.sticker || _.card);
                    let b;
                    const E = n === l.id_str,
                        y = !(!v || !E) || !(!r || E),
                        C = l.name,
                        I = p.name;
                    let w;
                    if (s && s?.length && h?.text) {
                        const e = (0, U.KC)(s);
                        w = e?.length ? e?.map((e) => (0, U.FW)(e, h.text)) : void 0;
                    }
                    let Z,
                        x = ((e, t, n, r, s) => a.createElement(a.Fragment, null, le(e, t), " ", n && a.createElement(d.Z, { displayTextRange: [0, n.length], entities: r, highlightType: "background", hitHighlights: s, key: "message", text: n, withMediaLinks: !0 })))(C, y, h?.text, h.entities, w);
                    const S = x;
                    _ && (_.tweet ? ((Z = _.tweet.status), (x = ((e, t, n) => (n ? (e ? a.createElement(o.ZP, null, g().a4939874) : a.createElement(g().I18NFormatMessage, { $i18n: "e802e257" }, a.createElement(o.ZP, null, t))) : ce))(E, C, y))) : _.fleet ? (x = ((e, t, n) => (e ? a.createElement(g().I18NFormatMessage, { $i18n: "i005f1fd" }, a.createElement(o.ZP, null, t), a.createElement(o.ZP, null, n || "")) : a.createElement(g().I18NFormatMessage, { $i18n: "b35cee41" }, a.createElement(o.ZP, null, n || ""))))(E, I, h.text)) : _.video ? ((0, U.dI)(_, m) ? ((x = ((e, t, n) => (n ? (e ? a.createElement(o.ZP, null, g().h7033cac) : a.createElement(g().I18NFormatMessage, { $i18n: "be5a9617" }, a.createElement(o.ZP, null, t))) : ie))(E, C, y)), (b = _.video)) : ((x = ((e, t, n) => (n ? (e ? a.createElement(o.ZP, null, g().j7d8101a) : a.createElement(g().I18NFormatMessage, { $i18n: "eee2f121" }, a.createElement(o.ZP, null, t))) : oe))(E, C, y)), (b = _.video))) : _.photo ? ((x = ((e, t, n) => (n ? (e ? a.createElement(o.ZP, null, g().f80629ba) : a.createElement(g().I18NFormatMessage, { $i18n: "c1e1f849" }, a.createElement(o.ZP, null, t))) : re))(E, C, y)), (b = _.photo)) : _.animated_gif ? ((x = ((e, t, n) => (n ? (e ? a.createElement(o.ZP, null, g().eb3d722e) : a.createElement(g().I18NFormatMessage, { $i18n: "dc4b75a1" }, a.createElement(o.ZP, null, t))) : ne))(E, C, y)), (b = _.animated_gif)) : _.sticker ? (x = ((e, t, n) => (n ? (e ? a.createElement(o.ZP, null, g().d30c2d40) : a.createElement(g().I18NFormatMessage, { $i18n: "c7e2464f" }, a.createElement(o.ZP, null, t))) : se))(E, C, y)) : _.card && (x = ((e, t, n) => (n ? (e ? a.createElement(o.ZP, null, g().db53c018) : a.createElement(g().I18NFormatMessage, { $i18n: "hcbbbb35" }, a.createElement(o.ZP, null, t))) : ae))(E, C, y)));
                    const P = b && i ? A.Z.getOriginalImage(b) : null,
                        T = b?.ext_alt_text;
                    return a.createElement(ee, { "aria-label": T, card: e, content: i ? S : x, isMessageSearchItem: i, isSelected: u, searchImage: P, tweetId: Z, tweetUserId: h.sender_id, unread: c });
                });
            var pe = n(138214),
                ue = n(699897);
            const me = g().fb3ccb56,
                he = ({ conversationType: e, entry: t, highlightingTokens: n, isMessageItem: r = !1, isSelected: s = !1, perspective: i, unread: c }) => {
                    if (t.marked_as_spam)
                        return ((e = !1, t = !1) => {
                            const n = (0, I.T)(e),
                                r = (0, I.F)(e, t);
                            return a.createElement(o.ZP, { color: r, numberOfLines: 1, weight: n }, me);
                        })(c, s);
                    if ((0, T.c)(t)) {
                        const { message_data: { recipient_id: o, sender_id: l } = {} } = t;
                        return a.createElement(de, { entry: t, highlightingTokens: n, isGroupDM: e === Z.eD.GROUP, isMessageItem: r, isSelected: s, perspective: i, recipientId: o, senderId: l, unread: c });
                    }
                    return (0, T.lf)(t) ? a.createElement(pe.Z, { isGroupDM: e === Z.eD.GROUP, isSelected: s, perspective: i, reactionEntry: t, senderId: t.sender_id, unread: c }) : (0, T.Tt)(t) ? a.createElement(L, { entry: t, entryType: t.type, isSelected: s, perspective: i, unread: c }) : (0, T.QD)(t) ? a.createElement(M, { entry: t, entryType: t.type, isSelected: s, perspective: i, unread: c }) : (0, T.js)(t) ? a.createElement(ue.Z, { entry: t, isCompact: !0, isSelected: s, unread: c }) : null;
                };
            var _e = n(340130),
                ve = n(71620),
                ge = n(297436),
                be = n(296196),
                Ee = n(175856),
                fe = n(601576);
            const ye = (e, t) => t.conversationId,
                Ce = (e, t) => be.selectConversation(e, ye(0, t)),
                Ie = (e, t) => !be.selectConversationIsRead(e, ye(0, t)),
                we = (e, t) => (0, Ee.t5)(e, Ee.Hw),
                Ze = (0, k.Z)()
                    .propsFromState(() => ({ conversationId: ye, conversation: Ce, entries: be.selectEntries, users: R.ZP.selectAll, unread: Ie, shouldShowPinnedEducation: we }))
                    .adjustStateProps(({ conversation: e, conversationId: t, entries: n, shouldShowPinnedEducation: a, unread: r, users: s }) => ({ conversation: e?.data && (0, ge.lk)(e.data, n, s), conversationId: t, unread: r, shouldShowPinnedEducation: a }))
                    .propsFromActions(() => ({ addFlag: Ee.pj, addRecentSearch: be.addRecentSearches, addToast: fe.fz, block: R.ZP.block, createLocalApiErrorHandler: (0, ve.zr)("DIRECT_MESSAGES_INBOX_ITEM"), disableNotifications: be.disableNotifications, enableNotifications: be.enableNotifications, leaveConversation: be.leaveConversation, muteDMUser: be.muteDMUser, unmuteDMUser: be.unmuteDMUser, unblock: R.ZP.unblock }));
            var xe = n(107267),
                Se = n(811176),
                Pe = n(190286),
                Te = n(840065),
                Ne = n(537392),
                Me = n(425376),
                De = n(247056),
                Oe = n(963879),
                ke = n(833057),
                Re = n(565421),
                Fe = n(415506),
                Be = n(684869),
                Le = n(621416),
                Ae = n(10656),
                Ue = n(395067),
                $e = n(125363),
                He = n(715913);
            const ze = X.default.create((e) => ({
                    root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16, width: "100%" },
                    rootMessageAttachment: { paddingVertical: `calc(${e.spaces.space2} + ${e.spaces.space8})` },
                    active: { backgroundColor: e.colors.gray50 },
                    avatarCellContainer: { flexGrow: 1, maxWidth: e.spaces.space32, marginEnd: `calc(${e.spaces.space2} + ${e.spaces.space8})`, minWidth: e.spaces.space32 },
                    bodyColumn: { flexDirection: "row" },
                    checkbox: { marginStart: `calc(${e.spaces.space16} + ${e.spaces.space2})`, marginEnd: e.spaces.space4 },
                    inlineTimestamp: { flexDirection: "row" },
                    inlineTimestampVDL: { flexDirection: "row", alignItems: "center" },
                    messageSearchTitleContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
                    titleContainer: { flex: 1 },
                    inlineNotificationsDisabledIcon: { paddingStart: `calc(${e.spaces.space2} * 3)`, color: e.colors.gray700 },
                    inlineNotificationsDisabledIconVDL: { width: e.spaces.space16, height: e.spaces.space16 },
                    hiddenMenu: { opacity: 0, overflow: "hidden", width: 0 },
                    menu: { alignSelf: "flex-start" },
                    menuContainer: { height: 0, marginStart: `calc(${e.spaces.space8} + ${e.spaces.space2})` },
                    messageSearchResultMenuContainer: { height: "100%", marginStart: `calc(${e.spaces.space8} + ${e.spaces.space2})` },
                    unreadMessagePip: { backgroundColor: e.colors.primary, marginTop: `calc(${e.spaces.space8} - ${e.spaces.space1})`, height: e.baseFontSize - 5, width: e.baseFontSize - 5 },
                    unreadMessagePipMessageSearchResult: { marginTop: 0, top: `calc(-3 * ${e.spaces.space2} + ${e.spaces.space1})` },
                    vdlXButton: { border: "none", marginStart: `calc(${e.spaces.space8} + ${e.spaces.space2})`, marginEnd: `calc(-1 * ${e.spaces.space4})`, marginTop: `calc(-1 * (${e.spaces.space8} - ${e.spaces.space1}))` },
                    xIcon: { height: `calc(${e.spaces.space28} - ${e.spaces.space1})`, width: `calc(${e.spaces.space28} - ${e.spaces.space1})` },
                    trashcanIcon: { color: e.colors.gray700 },
                    snippet: { maxHeight: e.spaces.space40, overflow: "hidden" },
                    snippetPadding: { paddingEnd: `calc(${e.spaces.space28} + ${e.spaces.space1} * 0.75)` },
                    unread: { backgroundColor: e.colors.unreadCellBackground },
                    unreadVDL: { backgroundColor: e.colors.gray0 },
                    socialProofContainer: { marginTop: e.spaces.space4 },
                    socialProofText: { marginStart: 0 },
                    convoLabelIcon: { marginEnd: e.spaces.space4 },
                    endCell: { marginStart: e.spaces.space16 },
                })),
                Ge = g().a30a206e,
                Ve = g().ib4b1b86,
                We = g().bd3ca2ef,
                Ke = { confirmButtonLabel: g().bb1d57b6, actionTextLeave: g().g9074da4, header: g().gdf4b790, text: g().h09b49f8 },
                Xe = g().ad63377e,
                je = g().e1c9ec9c,
                Ye = g().i6b19b08,
                Qe = g().e3cfff7c,
                qe = g().f398722e,
                Je = g().bdd91964,
                et = g().a8ed0eca,
                tt = g().jac4eb1e;
            function nt(e) {
                const { conversation: t, conversationId: n, conversationType: s, inboxType: o, isHovered: i, isMessageSearchResult: c, isPinned: l, isSnoozed: d, participantCount: p, pinConversation: u, position: m, unpinConversation: h } = e,
                    _ = (0, w.z)(),
                    v = (0, ve.n7)("DIRECT_MESSAGES_INBOX_ITEM"),
                    g = (0, $e.I0)(),
                    { featureSwitches: E } = a.useContext(f.rC),
                    y = (0, xe.useHistory)(),
                    { isDrawer: C } = a.useContext(He.Z),
                    I = E.getValue("dm_conversation_labels_max_pinned_count"),
                    x = E.isTrue("dm_conversation_labels_pinned_education_enabled") && !l && 1 === m,
                    [S, P] = a.useState(!1),
                    [T, N] = a.useState(!1),
                    [M, D] = (0, Le.Z)(Ee.Hw),
                    [O, k] = a.useState(x && M);
                a.useEffect(() => {
                    if (O) return D;
                }, [D, O]);
                const R = () => {
                        const e = s === Z.eD.GROUP ? "leave_group" : "delete_thread",
                            t = { conversation_type: s === Z.eD.GROUP ? _e.NK.GROUP : _e.NK.ONE_TO_ONE, conversation_id: n, conversation_participant_count: p, position: m, inbox_type: (0, U.e4)(o), entry_point: _e.eR.THREE_DOT_MENU };
                        N(!1), _.scribe({ element: "thread", action: e, data: t }), l && A(), g(be.leaveConversation({ conversationId: n })).catch(v({ showToast: !0 })), y.replace((0, U.k2)(o));
                    },
                    F = (e) => () => {
                        e && e(), P(!1);
                    },
                    B = (t) => () => {
                        const { conversationId: n, userId: a } = e,
                            r = Ue.C2.DMConversation;
                        if ((_.scribeAction("report"), (0, Ue.Yw)(E, r))) {
                            const e = (0, Ue.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: r, reportedConversationId: n, reportedUser: a, scribeNamespace: _.contextualScribeNamespace });
                            t.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(e) } } });
                        } else {
                            const e = (0, U.BB)(n, window.location.pathname, _.contextualScribeNamespace, o);
                            t.push(e);
                        }
                    },
                    L = () => {
                        if (d)
                            g(be.enableNotifications({ conversationId: n })).then(() => {
                                g((0, fe.fz)({ ariaOnly: !0, text: tt }));
                            });
                        else {
                            const e = { conversation_type: s === Z.eD.GROUP ? _e.NK.GROUP : _e.NK.ONE_TO_ONE, conversation_id: n, conversation_participant_count: p, entry_point: _e.eR.THREE_DOT_MENU };
                            _.scribe({ element: "thread", action: "mute_dm_thread_forever", data: e }),
                                g(be.disableNotifications({ conversationId: n })).then(() => {
                                    g((0, fe.fz)({ ariaOnly: !0, text: qe }));
                                });
                        }
                    },
                    A = () => {
                        const e = l ? "unpin_dm_conversation" : "pin_dm_conversation",
                            a = l ? h : u,
                            r = { conversation_type: s === Z.eD.GROUP ? _e.NK.GROUP : _e.NK.ONE_TO_ONE, conversation_id: n, conversation_participant_count: p, position: m };
                        _.scribe({ element: "thread", action: e, data: r }), t && a && a(n, t);
                    },
                    $ = (e) => {
                        const t = { Icon: l ? Oe.default : ke.default, onClick: A, text: l ? Je : je, withBottomBorder: !0 },
                            r = { Icon: Re.default, isEmphasized: !0, onClick: () => N(!0), text: Xe, withBottomBorder: !0 },
                            s = !(0, U.NL)(n) && { Icon: Fe.default, onClick: B(y), text: Ye, withBottomBorder: !0 },
                            o = [t, { Icon: d ? Be.default : b.default, onClick: L, text: d ? et : Qe, withBottomBorder: !0 }, s, r].filter(Boolean);
                        return a.createElement(Se.Z, { items: o, onCloseRequested: F(e), shouldCloseOnClick: !0 });
                    },
                    H = !Te.Z.isEnabled || i || S || O,
                    z = (0, Ne.Zx)(({ containerWidth: e }) => Ae.Z.isTwoColumnLayout(e));
                return a.createElement(a.Fragment, null, T ? a.createElement(Pe.Z, { confirmButtonLabel: Ke.confirmButtonLabel, confirmButtonType: "destructiveFilled", headline: Ke.header, onCancel: () => N(!1), onConfirm: R, text: Ke.text }) : null, a.createElement(r.Z, { style: [ze.menuContainer, c && ze.messageSearchResultMenuContainer] }, a.createElement(Me.Z, { actionPrimary: { text: Ge, onClick: () => k(!1) }, headline: Ve, onDismiss: () => k(!1), shouldDisplay: O && !C, text: We({ count: I }), withMask: !z }, z ? a.createElement(De.Z, { onClick: () => P(!0), renderActionMenu: $, style: H ? ze.menu : ze.hiddenMenu }) : null), z ? null : a.createElement(De.Z, { onClick: () => P(!0), renderActionMenu: $, style: H ? ze.menu : ze.hiddenMenu })));
            }
            var at = n(96083),
                rt = n(554518),
                st = n(30899),
                ot = n(154003),
                it = n(530813),
                ct = n(90411),
                lt = n(712816),
                dt = n(879596),
                pt = n(187891);
            const ut = g().d88d0790;
            function mt(e) {
                const { conversationId: t, conversationType: n, inboxType: r, participant: s } = e,
                    o = (0, w.z)(),
                    i = (0, ve.n7)("DIRECT_MESSAGES_INBOX_ITEM"),
                    c = (0, $e.I0)(),
                    { featureSwitches: l } = a.useContext(f.rC),
                    d = (0, xe.useHistory)(),
                    p = n === Z.eD.GROUP,
                    u = (e) => {
                        c(R.ZP.unblock(e)).catch(i(dt.D)), o.scribeAction("unblock");
                    },
                    m = () => {
                        const { participantCount: a, position: s } = e,
                            l = n === Z.eD.GROUP ? "leave_group" : "delete_thread",
                            p = { conversation_type: n === Z.eD.GROUP ? _e.NK.GROUP : _e.NK.ONE_TO_ONE, conversation_id: t, conversation_participant_count: a, position: s, inbox_type: (0, U.e4)(r), entry_point: _e.eR.CELL_X_BUTTON };
                        o.scribe({ element: "thread", action: l, data: p }), c(be.leaveConversation({ conversationId: t })).catch(i({ showToast: !0 })), d.replace((0, U.k2)(r));
                    },
                    h = () => {
                        const { userId: n } = e,
                            a = Ue.C2.DMConversation;
                        if ((o.scribeAction("report"), (0, Ue.Yw)(l, a))) {
                            const e = (0, Ue.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: a, reportedConversationId: t, reportedUser: n, scribeNamespace: o.contextualScribeNamespace });
                            d.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(e) } } });
                        } else {
                            const e = (0, U.BB)(t, window.location.pathname, o.contextualScribeNamespace, r);
                            d.push(e);
                        }
                    };
                return a.createElement(
                    st.Z,
                    {
                        renderContent: (e, n) =>
                            a.createElement(pt.ZP, {
                                dismiss: e,
                                flatBorders: "sheet" === n,
                                isGroup: p,
                                onBlockClick: () => {
                                    return (
                                        (e = s.idStr),
                                        c(R.ZP.block(e)).then(() => {
                                            c((0, fe.fz)({ action: { label: ct.F0, onAction: () => u(e) }, text: ct.KV }));
                                        }, i(lt.d)),
                                        void o.scribeAction("block")
                                    );
                                    var e;
                                },
                                onDeleteClick: m,
                                onReportClick: h,
                                requestorScreenName: s?.screenName || "",
                                showBlock: !p && !(0, U.NL)(t),
                                showCancel: "sheet" === n,
                                showDelete: !0,
                            }),
                    },
                    a.createElement(ot.ZP, {
                        "aria-label": ut,
                        icon: a.createElement(it.default, { style: ze.xIcon }),
                        onPress: (e) => {
                            e.preventDefault();
                        },
                        style: ze.vdlXButton,
                    }),
                );
            }
            function ht(e) {
                const { conversationId: t, conversationType: n, inboxType: s, participant: o, participantCount: i, position: c, userId: l } = e,
                    [d, p] = a.useState(!1),
                    u = (0, rt.Ao)(),
                    m = (0, rt.eG)(),
                    h = a.useCallback(() => {
                        m({ type: d ? rt.uU : rt.QF, id: t }), p(!d);
                    }, [m, t, d]);
                return u.isSelecting ? a.createElement(r.Z, { style: ze.checkbox }, a.createElement(at.Z, { checked: d, disabled: !d && u.selectedConversationIds.length >= 10, onChange: h })) : a.createElement(mt, { conversationId: t, conversationType: n, inboxType: s, participant: o, participantCount: i, position: c, userId: l });
            }
            const _t = "conversation",
                vt = ({ children: e }) => a.createElement(r.Z, { style: ze.socialProofContainer }, e),
                gt = g().d7ad7414;
            class bt extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAvatarCell = () => {
                            const { conversation: e, perspective: t } = this.props;
                            return a.createElement(r.Z, { style: ze.avatarCellContainer }, a.createElement(S.Z, { conversation: e, perspective: t, size: "large", withBadge: !1 }));
                        }),
                        (this._renderEndCellWithMenu = (e, t, n, s) => a.createElement(a.Fragment, null, e ? a.createElement(r.Z, { style: ze.endCell }, e) : null, this._renderConversationActions({ isFocused: t, isFocusedWithin: n, isHovered: s }))),
                        (this._renderMenu = ({ isFocused: e, isFocusedWithin: t, isHovered: n }) => {
                            const { conversation: r, conversationId: s, inboxType: o, isMessageItem: i, pinConversation: c, position: l, unpinConversation: d } = this.props;
                            if (r && c && d) {
                                const p = ((e) => Boolean(e?.labels?.find((e) => e.label_type === x.w1.PINNED)))(r),
                                    u = r.notifications_disabled,
                                    m = r.participants.length || 0,
                                    h = r.type === Z.eD.GROUP ? "0" : this._getUserIdOfOneToOneConvo();
                                return a.createElement(nt, { conversation: r, conversationId: s, conversationType: r.type, inboxType: o, isHovered: e || t || n, isMessageSearchResult: i, isPinned: p, isSnoozed: u, participantCount: m, pinConversation: c, position: l, unpinConversation: d, userId: h });
                            }
                            return null;
                        }),
                        (this._renderConversationActions = ({ isFocused: e, isFocusedWithin: t, isHovered: n }) => {
                            const { inboxType: a } = this.props;
                            switch (a) {
                                case x._2.PRIMARY:
                                    return this._renderMenu({ isFocused: e, isFocusedWithin: t, isHovered: n });
                                case x._2.SECONDARY:
                                case x._2.TERTIARY:
                                    return this._renderX();
                                default:
                                    return null;
                            }
                        }),
                        (this._renderConversationEndCell = (e) => {
                            const { inboxType: t, isMessageItem: n, unread: r } = this.props,
                                o = r ? a.createElement(s.Z, { pip: !0, style: [ze.unreadMessagePip, n && ze.unreadMessagePipMessageSearchResult], truncatedCountFormatter: () => "", unreadCountLabel: () => "" }) : null;
                            switch (t) {
                                case x._2.PRIMARY:
                                case x._2.SECONDARY:
                                    return o;
                                default:
                                    return null;
                            }
                        }),
                        (this._renderConversationLabel = ({ convo_label: e }) => {
                            if (!e?.text) return null;
                            const t = (0, y.N)(e.icon);
                            return a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, t ? a.createElement(t, { style: ze.convoLabelIcon }) : null, e.text);
                        }),
                        (this._renderMessageNotAvailable = (e) => a.createElement(o.ZP, { color: (0, I.F)(!1, e), weight: (0, I.T)() }, gt)),
                        (this._renderSocialProof = ({ social_proof: e }) => {
                            if (!e || 0 === e.length) return null;
                            const t = e[0];
                            if (t.proof_type === Z.UN.MUTUAL_FRIENDS) {
                                if (0 === t.total) return null;
                                const e = t.users.map(({ profile_image_url_https: e }) => e),
                                    n = t.users.map(({ name: e }) => e);
                                return a.createElement(vt, null, a.createElement(o.ZP, { weight: "medium" }, a.createElement(i.Z, { displayFacepileInline: !0, knownFollowersAvatarUrls: e, knownFollowersCount: t.total, knownFollowersNames: n, textStyle: ze.socialProofText, withFacepile: !1 })));
                            }
                            return null;
                        }),
                        (this._renderSearchConversationPreview = () => {
                            const { conversation: e, highlightingTokens: t, perspective: n, searchQuery: r } = this.props,
                                s = e ? (0, C.Z)(e, n) : [],
                                o = [],
                                i = (e, t) => e.localeCompare(t),
                                p = s
                                    .map(({ user: e }) => e)
                                    .filter((e) => {
                                        const t = e.name?.toLowerCase().includes(r);
                                        return e.id_str !== n && (t && o.push(e.name), !t);
                                    })
                                    .map((e) => e.name)
                                    .sort(i),
                                u = o.sort(i).concat(p);
                            if (e) {
                                if (e.type === Z.eD.ONE_TO_ONE || e.type === Z.eD.SECRET_ONE_TO_ONE) {
                                    const [e] = s.map(({ user: e }) => e),
                                        n = `@${e.screen_name}`,
                                        r = n ? (0, U.Y)(t, n) : null,
                                        o = r?.length ? (0, U.SM)(r, n) : void 0;
                                    return a.createElement(c.Z, { color: "gray700", renderScreenNameHighlights: o, screenName: e.screen_name });
                                }
                                {
                                    const e = (0, l.Z)(u, !0),
                                        n = (0, U.KC)(t),
                                        r = n?.filter((t) => e && -1 !== e.toLowerCase().indexOf(t.toLowerCase())),
                                        s = r?.length ? r.map((t) => (0, U.FW)(t, e)) : void 0;
                                    return a.createElement(d.Z, { color: "gray700", displayTextRange: [0, e.length], entities: {}, highlightType: "background", hitHighlights: s, key: "groupsearchresult", numberOfLines: 2, text: e });
                                }
                            }
                        }),
                        (this._renderX = () => {
                            const { conversation: e, conversationId: t, inboxType: n, position: r } = this.props,
                                { viewerUserId: s } = this.context;
                            if (e) {
                                const o = (0, U.vm)(e, s),
                                    i = e.participants.length || 0,
                                    c = e?.type === Z.eD.GROUP ? "0" : this._getUserIdOfOneToOneConvo();
                                return a.createElement(ht, { conversationId: t, conversationType: e.type, inboxType: n, participant: o, participantCount: i, position: r, userId: c });
                            }
                            return null;
                        }),
                        (this._getUserIdOfOneToOneConvo = () => {
                            const { conversation: e, perspective: t } = this.props,
                                n = e && (0, C.Z)(e, t).map(({ user: e }) => e),
                                a = (n && n[0]) || null;
                            return a ? a.id_str : "";
                        }),
                        (this._renderTimestamp = (e) => {
                            const { conversation: t, isMessageItem: n } = this.props,
                                s = [ze.inlineNotificationsDisabledIcon, ze.inlineNotificationsDisabledIconVDL],
                                o = Number(e && n ? e?.time : t?.sort_timestamp);
                            return a.createElement(a.Fragment, null, a.createElement(r.Z, { style: [n && ze.inlineTimestamp, ze.inlineTimestampVDL] }, t && o ? a.createElement(p.Z, { timestamp: o }) : null, t?.notifications_disabled ? a.createElement(b.default, { style: s }) : null));
                        }),
                        (this._handleOnClick = (e) => {
                            const { addRecentSearch: t, analytics: n, conversation: a, conversationId: r, onClick: s, position: o, searchQuery: i } = this.props,
                                c = a?.participants.length || 0,
                                l = a?.type === Z.eD.GROUP;
                            i && (n.scribe({ component: "search", element: "conversation", action: "click", data: { conversation_id: r, conversation_participant_count: c, conversation_type: l ? _e.NK.GROUP : _e.NK.ONE_TO_ONE, entry_point: _e.eR.ALL, inbox_type: _e.H6.PRIMARY, dm_search_result_type: _e.lt.CONVERSATION, message_type: _e.C7.NOT_APPLICABLE, position: o } }), n.scribe({ component: "recent_search", action: "add" }), t(i)), s(e, r, a, o);
                        });
                }
                shouldComponentUpdate(e) {
                    const t = this.props.conversation,
                        n = t?.conversation_id,
                        a = t?.notifications_disabled,
                        r = t?.last_read_event_id,
                        s = t?.sort_event_id,
                        o = t?.max_entry_id,
                        i = t?.convo_label,
                        c = this.props.highlightingTokens,
                        l = this.props.messageId,
                        d = e.conversation,
                        p = d?.conversation_id,
                        u = d?.notifications_disabled,
                        m = e.highlightingTokens,
                        h = d?.last_read_event_id,
                        _ = d?.sort_event_id,
                        v = d?.max_entry_id,
                        g = d?.convo_label,
                        b = e.messageId,
                        { filter: E, isActive: f } = this.props,
                        { filter: y, isActive: C } = e;
                    return n !== p || a !== u || c !== m || r !== h || s !== _ || o !== v || l !== b || f !== C || E !== y || i !== g;
                }
                render() {
                    const { conversation: e, highlightingTokens: t, isActive: n, isMessageItem: s, link: o, messageId: i, perspective: c, position: l, searchQuery: d, unread: p } = this.props,
                        v = e?.entries || [],
                        g = s ? v.find((e) => e.id === i) : (0, E.Z)(v, (e) => !_e.I4.includes(e.type)),
                        b = g?.message_data?.attachment,
                        f = [ze.root, s && b && ze.rootMessageAttachment, p && ze.unread, p && ze.unreadVDL, n && ze.active],
                        y = e?.type === Z.eD.GROUP,
                        C = (0, U.NL)(e?.conversation_id),
                        I = e?.conversation_status === Z.BU.DEVICE_NOT_A_MEMBER;
                    if (!e) return null;
                    const w = !!e.convo_label,
                        x = !e.trusted && !w,
                        T = u.default.defaultSize,
                        N = this._renderConversationEndCell(g),
                        M = d && !s;
                    let D = "bold";
                    return n && (D = "medium"), !e || (!d && e.isSearchResultOnly) ? null : a.createElement(m.Z, null, ({ isFocused: i, isFocusedWithin: u, isHovered: m }) => a.createElement(h.Z, { "aria-selected": n, link: { pathname: o?.pathname, anchorless: !0, state: { ...o?.state, position: l, entryPoint: s ? g?.id : null, isMessageItem: s } }, onPress: this._handleOnClick, role: "none", style: f, testID: _t }, a.createElement(_.Z, { avatarCell: s ? void 0 : a.createElement(S.Z, { conversation: e, perspective: c, withBadge: y, withLock: C }), avatarSize: T }, a.createElement(r.Z, { style: ze.bodyColumn }, a.createElement(r.Z, { style: ze.titleContainer }, a.createElement(r.Z, { style: s ? ze.messageSearchTitleContainer : void 0 }, a.createElement(P.Z, { conversation: e, highlightingTokens: t, isConversationSearchTitle: !!M, isMessageSearchTitle: !!s, perspective: c, renderAvatarCell: this._renderAvatarCell, renderTimestamp: () => this._renderTimestamp(g), textColor: "text", titleWeight: D, withScreenName: !d && !s }), a.createElement(r.Z, { style: ze.messageSearchTitleContainer }, s ? this._renderEndCellWithMenu(N, i, u, m) : null)), a.createElement(r.Z, { style: [!(s && (b?.card || b?.tweet)) && ze.snippet, !i && !u && !m && !(s && g?.message_data?.attachment) && ze.snippetPadding] }, g && !M ? a.createElement(he, { conversationType: e.type, entry: g, highlightingTokens: t, isMessageItem: s, isSelected: n, perspective: c, unread: p }) : M ? this._renderSearchConversationPreview() : C && I ? this._renderMessageNotAvailable(n) : null), w ? this._renderConversationLabel(e) : null, x ? this._renderSocialProof(e) : null), s ? null : this._renderEndCellWithMenu(N, i, u, m)))));
                }
            }
            (bt.contextType = f.rC), (bt.defaultProps = { searchQuery: "", inboxType: "primary", isActive: !1, filter: (e) => !0 });
            const Et = (0, w.Z)(Ze(bt), { page: "messages", section: "inbox" });
        },
        110186: (e, t, n) => {
            n.d(t, { Z: () => Z });
            var a = n(202784),
                r = n(325686),
                s = n(67369),
                o = n(731708),
                i = n(682830),
                c = n(392237),
                l = n(674132),
                d = n.n(l),
                p = n(736063),
                u = n(792098),
                m = n(271702),
                h = n(973014),
                _ = n(797553),
                v = n(143670);
            const g = d().ce108dda,
                b = ({ color: e, options: t, selected: n, setOption: s, placeholder: o = d().abf2d13c }) => {
                    const [i, c] = a.useState(!1),
                        l = {
                            "aria-label": "clear",
                            hoverLabel: "clear",
                            mode: "remove",
                            disabled: !1,
                            onSecondaryClick: () => {
                                s(null), c(!1);
                            },
                        };
                    return a.createElement(
                        r.Z,
                        null,
                        a.createElement(h.Z, { "aria-label": g, compact: !0, disabled: !1, onClick: () => c(!i), secondaryAction: n?.value ? { ...l } : void 0, selected: !!n?.value, text: n?.value ? n?.label : g }),
                        i
                            ? a.createElement(
                                  _.default,
                                  { contentStyle: E.dropdownContent, onDismiss: () => c(!1) },
                                  t.map((e) => {
                                      const t = n?.value === e.value;
                                      return a.createElement(v.Z, {
                                          actionText: e.label,
                                          isSelected: t,
                                          key: e.value,
                                          onClick: () => {
                                              s(e), c(!1);
                                          },
                                          selectable: !0,
                                      });
                                  }),
                              )
                            : null,
                    );
                },
                E = c.default.create((e) => ({ dropdownContent: { boxShadow: "none", borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, minWidth: "max-content", maxHeight: "250px", overflowY: "auto" } })),
                f = d().ce108dda,
                y = d().abf2d13c;
            function C() {
                const e = (0, s.LX)(),
                    { setTag: t, tag: n } = (0, m.a)(),
                    [i] = (0, u.Z)(),
                    c = i.viewer.user_results.result;
                if ("User" !== c.__typename) return null;
                const l = c.labeled_conversation_collection_slice?.items;
                if (!l || 0 === l.length) return null;
                const d = l.map((e) => ({ label: e.name, value: e.id }));
                return a.createElement(r.Z, { style: x.container }, a.createElement(o.ZP, null, "Filter By: "), a.createElement(b, { options: d, placeholder: e ? y : f, selected: n || { label: "", value: "" }, setOption: t }));
            }
            const I = { context: "DMLabelFilter" };
            function w() {
                return a.createElement(p.H, { errorConfig: I, suspenseFallback: a.createElement(i.J, null) }, a.createElement(C, null));
            }
            const Z = a.memo(w),
                x = c.default.create((e) => ({ container: { padding: e.spaces.space16, flexDirection: "row", gap: e.spaces.space2, alignItems: "center" } }));
        },
        771449: (e, t, n) => {
            n.d(t, { ZP: () => de });
            var a = n(605508),
                r = n(95539),
                s = n(131271),
                o = n(202784),
                i = n(506899),
                c = n(325686),
                l = n(351743),
                d = n.n(l),
                p = n(437429),
                u = n.n(p),
                m = (n(585488), n(10622)),
                h = n.n(m),
                _ = n(674132),
                v = n.n(_),
                g = n(771613),
                b = n(965245),
                E = n(443781),
                f = n(144256),
                y = n(736063),
                C = n(246851),
                I = n(883331),
                w = n(125363),
                Z = n(296196),
                x = n(674420),
                S = n(147143),
                P = n(601576),
                T = n(700797),
                N = n(127218),
                M = n(11582),
                D = n(340130),
                O = n(886559),
                k = n(271702),
                R = n(190286);
            const F = v().a219e218,
                B = v().d571e4f9,
                L = v().a551bf7e;
            function A(e) {
                const { count: t, setShowPinError: n } = e;
                return o.createElement(R.Z, { confirmButtonLabel: F, headline: B({ count: t }), onConfirm: () => n(!1), text: L, withCancelButton: !1 });
            }
            var U = n(189736),
                $ = n(826760),
                H = n(71620),
                z = n(668214);
            const G = (e, t) => {
                    const { tag: n } = t;
                    return n ? Z.selectLabelledConversationIds(e, { tag: n }) : [];
                },
                V = (0, z.Z)()
                    .propsFromState(() => ({ conversationIds: G }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, H.zr)("DM_FILTERED_INBOX_CONTEXT") }))
                    .withAnalytics({ page: "messages", section: "inbox" }),
                W = (e) => e,
                K = U.Z,
                X = { context: "DM_FILTERED_INBOX" },
                j = (e) => {
                    const t = (0, w.I0)(),
                        { accessibilityTitle: n, cacheKey: a, conversationIds: r, createLocalApiErrorHandler: s, footer: c, header: l, pinConversation: d, renderInboxItem: p, tag: m, unpinConversation: _, withKeyboardShortcuts: v } = e,
                        y = u()(),
                        { data: I, fetchNext: P } = (0, N.C)(K, { label: m?.value || "" }),
                        T = o.useMemo(() => I?.labeled_conversation_collection_timeline?.items?.map((e) => (e?.dm_conversation_results?.result ? { ...e.dm_conversation_results.result, tag: m } : void 0)) || [], [I?.labeled_conversation_collection_timeline?.items, m]),
                        { entities: M } = (0, i.Fv)(T, [g.ZP]),
                        { featureSwitches: D } = o.useContext(E.rC),
                        k = D.getNumberValue("dm_conversation_labels_max_pinned_count"),
                        [R, F] = o.useState(!1),
                        [B, L] = o.useState(!1),
                        U = (0, C.Z)(I);
                    o.useEffect(() => {
                        const e = U?.labeled_conversation_collection_timeline?.items || [],
                            n = e?.filter((e) => -1 === T.indexOf(e?.dm_conversation_results?.result?.rest_id));
                        n.length &&
                            n.forEach((e) => {
                                const n = e?.dm_conversation_results?.result?.labels?.filter((e) => e.label_type !== S.w1.PINNED);
                                e?.dm_conversation_results?.result?.rest_id && t((0, x.f)({ conversations: { [e.dm_conversation_results.result.rest_id]: { ...e, labels: n } } }));
                            }),
                            t((0, x.f)(M, !1));
                    }, [I]);
                    const H = o.useCallback(() => {
                        F(!0);
                        const e = h()(y, K, { label: m?.value || "" }).toPromise();
                        Promise.all([e, () => t(Z.fetchInbox())])
                            .then(() => F(!1))
                            .catch((e) => {
                                s()(e), F(!1);
                            });
                    }, [s, t, y, m?.value]);
                    return T?.length ? o.createElement(o.Fragment, null, B ? o.createElement(A, { count: k, setShowPinError: L }) : null, o.createElement(f.Z, { isRefreshing: R, onRefresh: H }, a && r?.length ? o.createElement(b.Z, { accessibilityTitle: n, anchoring: O.Z, assumedItemHeight: 100, cacheKey: a, footer: c, header: l, identityFunction: W, items: r, onNearEnd: P, renderer: p({ conversationIds: r, pinConversation: d, unpinConversation: _ }), role: "tablist", withKeyboardShortcuts: v, withoutHeadroom: !0 }) : l)) : o.createElement(o.Fragment, null, l, o.createElement($.Z, null));
                };
            function Y(e) {
                return o.createElement(y.H, { errorConfig: X }, o.createElement(j, e));
            }
            const Q = V(o.memo(Y));
            var q = n(795036);
            const J = (0, z.Z)()
                    .propsFromState(() => ({ pinnedConversationIds: Z.selectPinnedConversationIds }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, H.zr)("DM_PINNED_INBOX_CONTEXT") }))
                    .withAnalytics({ page: "messages", section: "inbox" }),
                ee = v().e4b3f520,
                te = v().ae4d666a,
                ne = v().d98e066c,
                ae = v().j302dba8,
                re = (e) => e,
                se = s.Z,
                oe = { context: "DM_PINNED_INBOX" },
                ie = (e) => {
                    const t = (0, w.I0)(),
                        { tag: n } = (0, k.a)(),
                        { accessibilityTitle: s, analytics: c, cacheKey: l, conversationIds: p, createLocalApiErrorHandler: m, footer: _, header: v, onNearEnd: y, pinnedConversationIds: M, renderEmptyDMInbox: R, renderInboxItem: F, showSearchView: B, withKeyboardShortcuts: L } = e,
                        U = u()(),
                        { data: $ } = (0, N.C)(se, { label: S.w1.PINNED }),
                        H = o.useMemo(() => $?.labeled_conversation_slice?.items || [], [$]),
                        { entities: z } = (0, i.Fv)(H, [g.ZP]),
                        { featureSwitches: G } = o.useContext(E.rC),
                        V = G.getNumberValue("dm_conversation_labels_max_pinned_count"),
                        [W, K] = o.useState(!1),
                        [X, j] = o.useState(!1),
                        Y = (0, C.Z)($);
                    o.useEffect(() => {
                        const e = Y?.labeled_conversation_slice?.items || [],
                            n = e?.filter((e) => -1 === H.indexOf(e.rest_id));
                        n.length &&
                            n.forEach((e) => {
                                const n = e.labels?.filter((e) => e.label_type !== S.w1.PINNED);
                                t((0, x.f)({ conversations: { [e.rest_id]: { ...e, labels: n } } }));
                            }),
                            t((0, x.f)(z, !1));
                    }, [$]);
                    const J = o.useCallback(() => {
                            K(!0);
                            const e = h()(U, se, { label: S.w1.PINNED }).toPromise();
                            Promise.all([e, () => t(Z.fetchInbox())])
                                .then(() => K(!1))
                                .catch((e) => {
                                    m()(e), K(!1);
                                });
                        }, [m, t, U]),
                        [oe] = d()(r.Z),
                        [ie] = d()(a.Z),
                        le = o.useCallback(
                            (e, n) => {
                                oe({
                                    variables: { conversation_id: e, label: S.w1.PINNED },
                                    onCompleted(a) {
                                        switch (a.add_dm_conversation_label_v3?.__typename) {
                                            case "DMConversationLabelInfo": {
                                                const { label_type: r, timestamp: s } = a.add_dm_conversation_label_v3;
                                                t((0, x.f)({ conversations: { [e]: { ...n, labels: [{ label_type: r, timestamp: s }] } } })), t((0, P.fz)({ ariaOnly: !0, text: ne }));
                                                break;
                                            }
                                            case "DMConversationLabelUnavailable": {
                                                const { failure_reason: e } = a.add_dm_conversation_label_v3;
                                                c.scribe({ element: "thread", action: "error_shown", data: { error_type: D.Yu.MAX_PINS_REACHED } }), "ExceededMaxPinnedConversations" === e && j(!0);
                                                break;
                                            }
                                        }
                                    },
                                    onError(e) {
                                        m(I.n)(e);
                                    },
                                });
                            },
                            [t, m, oe, c],
                        ),
                        de = o.useCallback(
                            (e, n) => {
                                ie({
                                    variables: { conversation_id: e, label_type: S.w1.PINNED },
                                    onCompleted(a) {
                                        const r = n ? n?.labels?.filter((e) => e.label_type !== S.w1.PINNED) : [];
                                        t((0, x.f)({ conversations: { [e]: { ...n, labels: r } } })), t((0, P.fz)({ ariaOnly: !0, text: ae }));
                                    },
                                    updater(t) {
                                        const n = H.find((t) => t.rest_id === e)?.id,
                                            a = $?.labeled_conversation_slice?.__id;
                                        if (!n || !a) return;
                                        const r = t.get(n),
                                            s = t.get(a);
                                        s && r && ((0, T.wz)(s, n), t.delete(n));
                                    },
                                    onError(e) {
                                        m(I._)(e);
                                    },
                                });
                            },
                            [m, H, $?.labeled_conversation_slice?.__id, t, ie],
                        ),
                        pe = p?.filter((e) => -1 === M.indexOf(e)),
                        ue = M.length && pe.length,
                        me = o.createElement(
                            o.Fragment,
                            null,
                            v,
                            M?.length
                                ? o.createElement(
                                      o.Fragment,
                                      null,
                                      ce(ee),
                                      M.map((e, t) => F({ conversationIds: M, pinConversation: le, unpinConversation: de })(e)),
                                  )
                                : null,
                            ue ? ce(te) : null,
                        );
                    return p?.length ? (n ? o.createElement(Q, { accessibilityTitle: s, cacheKey: "filterView", footer: _, header: v, pinConversation: le, renderInboxItem: F, tag: n, unpinConversation: de, withKeyboardShortcuts: !1 }) : o.createElement(o.Fragment, null, X ? o.createElement(A, { count: V, setShowPinError: j }) : null, B ? o.createElement(q.Z, { accessibilityTitle: s, analytics: c, conversationIds: p, hideRecentSearches: e.hideRecentSearches, onQueryChange: e.onQueryChange, pinConversation: le, query: e.query, unpinConversation: de }) : o.createElement(f.Z, { isRefreshing: W, onRefresh: J }, l && pe?.length ? o.createElement(b.Z, { accessibilityTitle: s, anchoring: O.Z, assumedItemHeight: 100, cacheKey: l, footer: _, header: me, identityFunction: re, items: pe, onNearEnd: y, renderer: F({ conversationIds: pe, pinConversation: le, unpinConversation: de }), role: "tablist", withKeyboardShortcuts: L, withoutHeadroom: !0 }) : me))) : R();
                },
                ce = (e) => o.createElement(c.Z, null, o.createElement(M.ZP, { headerText: e, isInboxLabelHeader: !0 }));
            function le(e) {
                return o.createElement(y.H, { errorConfig: oe }, o.createElement(ie, e));
            }
            const de = J(o.memo(le));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DirectMessages-d153da50.54148aaa.js.map
