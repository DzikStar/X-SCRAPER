"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Report-6107ac1a"],
    {
        625661: (e, t, a) => {
            a.d(t, { ZP: () => p });
            var n = a(202784),
                r = a(614983),
                s = a.n(r),
                o = a(325686),
                i = a(370006),
                d = a(786998),
                c = a(929028),
                l = a(386802);
            function _(e, t, a) {
                return e || (!t && a ? "fixed" : void 0);
            }
            class p extends n.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: r, hideBackButton: s, isFullWidth: o, isLarge: c, leftControl: l, middleControl: p, position: I, rightControl: E, secondaryBar: u, style: m, subtitle: A, title: T, titleDomId: y, titleIconCell: O, titleIconCellSize: v, withBackground: S, withWideContainer: h } = this.props,
                        { isModal: N } = this.context,
                        C = s ? l : n.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        g = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!S, N, !!u);
                    return n.createElement(n.Fragment, null, n.createElement(d.Z, { centerTitle: t, centeredLogo: a, isFullWidth: o, isLarge: c, leftControl: C, middleControl: p, position: _(I, N, r), rightControl: E, style: m, subtitle: A, title: T, titleDomId: y, titleIconCell: O, titleIconCellSize: v, withBackground: g, withWideContainer: h }), u || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        a = c.Z.getBackgroundStyles();
                    return t ? n.createElement(o.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = l.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, a) => {
            a.d(t, { Z: () => u, w: () => I });
            var n = a(202784),
                r = a(325686),
                s = a(108362),
                o = a(386802),
                i = a(392237),
                d = a(652904),
                c = a(555079),
                l = a(625661),
                _ = a(449067),
                p = a(715601);
            class I extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: a, backLocation: s, centerTitle: o, hideBackButton: i, history: d, isFullWidth: _, isLarge: p, middleControl: I, onBackClick: u, rightControl: m, secondaryBar: A, subtitle: T, title: y } = this.props,
                                { isModal: O } = this.context;
                            return n.createElement(r.Z, { style: O ? [E.childViewAppBarRoot, E.appBarZindex] : E.appBarZindex }, n.createElement(l.ZP, { backButtonType: a || (O ? "close" : "back"), backLocation: s, centerTitle: o, fixed: !O, hideBackButton: i, history: d, isFullWidth: _, isLarge: p, middleControl: I, onBackClick: u, ref: e, rightControl: m, secondaryBar: A, style: [O && E.appBarModal, t], subtitle: T, title: y, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: a } = this.context;
                            t && (a ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: a, containerStyle: o, documentTitle: i, isFullWidth: c, isLarge: l, renderHeader: I, title: u, withoutBottomBarMobile: m } = this.props,
                        { isModal: A } = this.context,
                        T = I ? I(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(d.Z, null, n.createElement(_.Z.Configure, { documentTitle: i, headerless: !0, title: u }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [E.root, A && E.rootModal] }, !A && T, n.createElement(s.Z, { isFullWidth: c, isLarge: l, style: [E.container, A && E.containerModal, o] }, A ? n.createElement(p.Z, { style: E.viewport }, T, a) : a), t ? n.createElement(r.Z, { style: [E.bottomBarModal, !A && !m && E.bottomBarMobile] }, n.createElement(s.Z, { isFullWidth: c, isLarge: l }, t)) : null));
                }
            }
            (I.defaultProps = { isFullWidth: !1, isLarge: !1 }), (I.contextType = o.Z);
            const E = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                u = I;
        },
        705079: (e, t, a) => {
            a.d(t, { s: () => r });
            var n = a(99107);
            const r = (e) => e === n.p_;
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                r = a(500002),
                s = a(668214),
                o = a(997174),
                i = a(118823);
            const d = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: s, search: o },
                            locationKey: i,
                        } = e;
                    let d = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (d = !0));
                    const c = r || i;
                    ((c && r !== i) || (!c && a !== s) || n !== o || d) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const l = (0, r.ZP)(d(c));
        },
        545334: (e, t, a) => {
            a.d(t, { d: () => r });
            var n = a(111677);
            const r = a.n(n)().gf5e9ea6;
        },
        847607: (e, t, a) => {
            a.d(t, { FK: () => E, GS: () => i, N1: () => c, X6: () => u, cm: () => d });
            a(202784);
            var n = a(111677),
                r = a.n(n),
                s = a(391366),
                o = a(40904);
            const i = r().hb568af4,
                d = r().bb1cbeb6,
                c =
                    (r().h2f62206,
                    (e, t, a) => {
                        const { muting: n } = e;
                        return { text: n ? d : i, onClick: n ? a : t, Icon: n ? s.default : o.default };
                    }),
                l = r().h59f52ee,
                _ = r().eea0cbee,
                p = r().i29533b3,
                I = r().h129c3c3,
                E = (e) => (e ? ((e) => p({ screenName: e }))(e) : l),
                u = (e) => (e ? ((e) => I({ screenName: e }))(e) : _);
        },
        234296: (e, t, a) => {
            a.d(t, { Z: () => o, l: () => s });
            var n = a(147143),
                r = a(856674);
            const s = (e, t) => {
                    const a = e.data?.labels?.find((e) => e.label_type === n.w1.PINNED)?.timestamp,
                        r = t.data?.labels?.find((e) => e.label_type === n.w1.PINNED)?.timestamp;
                    return a ? (r ? a - r : -1) : 1;
                },
                o = ({ sort_event_id: e }, { sort_event_id: t }) => (e ? (t ? (0, r.ZP)(t, e) : 1) : -1);
        },
        198506: (e, t, a) => {
            a.d(t, { Z: () => c, R: () => l });
            var n = a(662678),
                r = a(275365),
                s = a(856674);
            const o = (e = 0) => new Date(Number(e)),
                i = (e, t) => o(e.join_time) - o(t.join_time),
                d = ({ user: e }, { user: t }) => (0, s.ZP)(e.id_str, t.id_str),
                c = (e, t) => {
                    const { created_by_user_id: a, participants: s, type: o } = e,
                        [c, l] = (0, n.Z)(s, ({ user: e }) => e.id_str === t);
                    return l.length
                        ? o === r.eD.GROUP && 1 === l.length
                            ? [...c, ...l]
                            : a
                              ? l.sort(
                                    (
                                        (...e) =>
                                        (t, a) =>
                                            e.map((e) => e(t, a)).filter((e) => !!e)[0] || 0
                                    )(
                                        (
                                            (e) =>
                                            ({ user: t }, { user: a }) => {
                                                switch (e) {
                                                    case t.id_str:
                                                        return -1;
                                                    case a.id_str:
                                                        return 1;
                                                    default:
                                                        return 0;
                                                }
                                            }
                                        )(a),
                                        i,
                                        d,
                                    ),
                                )
                              : l
                        : c;
                },
                l = (e, t) => (e.includes("-") ? e.replace(t, "").replace(/[e-]/g, "") : null);
        },
        730996: (e, t, a) => {
            a.d(t, { W: () => r, g: () => n });
            a(571372);
            const n = Object.freeze({ AppealTweetWarning: "appealtweet", LimitedDiscoveryAppealTweet: "limiteddiscoveryappealtweet", ProfileOnlyDiscoveryAppealTweet: "profileonlydiscoveryappealtweet", DMConversation: "reportdmconversation", DMMessage: "reportdmconversation", HideCommunityTweet: "hidetweet", Moment: "reportmoment", RemoveCommunityMember: "removecommunitymember", Tweet: "reporttweet", List: "reportlist", User: "reportprofile", Space: "reportspace", AppealSuspension: "appealsuspension", Notification: "notification" });
            function r(e) {
                switch (e) {
                    case "appealtweet":
                    case "limiteddiscoveryappealtweet":
                    case "profileonlydiscoveryappealtweet":
                    case "reportdmconversation":
                    case "hidetweet":
                    case "reportmoment":
                    case "removecommunitymember":
                    case "reporttweet":
                    case "reportlist":
                    case "reportprofile":
                    case "reportspace":
                    case "appealsuspension":
                    case "notification":
                        return e;
                    default:
                        throw new Error(`unexpected source ${e}`);
                }
            }
        },
        275365: (e, t, a) => {
            a.d(t, { BU: () => c, Cr: () => s, To: () => r, UN: () => d, eD: () => n, td: () => o, v1: () => i });
            const n = Object.freeze({ ONE_TO_ONE: "ONE_TO_ONE", GROUP: "GROUP_DM", SECRET_ONE_TO_ONE: "SECRET_ONE_TO_ONE" }),
                r = Object.freeze({ AT_END: "AT_END", HAS_MORE: "HAS_MORE" }),
                s = Object.freeze({ CONVERSATION_AVATAR_UPDATE: "conversation_avatar_update", CONVERSATION_NAME_UPDATE: "conversation_name_update", CONVERSATION_PROFILE_INFO_HEADER: "conversation_profile_info_header", CONVERSATION_READ: "conversation_read", CONVO_METADATA_UPDATE: "convo_metadata_update", DELEGATE_ALERT_BANNER: "delegate_alert_banner", DISABLE_NOTIFICATIONS: "disable_notifications", ENABLE_NOTIFICATIONS: "enable_notifications", END_AV_BROADCAST: "end_av_broadcast", ENCRYPTED_CONVERSATION: "encrypted_conversation", JOIN_CONVERSATION: "join_conversation", LOADING_INDICATOR: "loading_indicator", MARK_ALL_AS_READ: "mark_all_as_read", MENTION_NOTIFICATIONS_UPDATE: "mention_notifications_setting_update", MESSAGE: "message", MESSAGE_DELETE: "message_delete", MESSAGE_MARK_AS_NOT_SPAM: "message_unmark_as_spam", MESSAGE_MARK_AS_SPAM: "message_mark_as_spam", NEW_MESSAGES_DIVIDER: "new_messages_divider", PARTICIPANTS_JOIN: "participants_join", PARTICIPANTS_LEAVE: "participants_leave", REACTION_CREATE: "reaction_create", REACTION_DELETE: "reaction_delete", READ_ONLY_INDICATOR: "read_only_indicator", REMOVE_CONVERSATION: "remove_conversation", TRUST_CONVERSATION: "trust_conversation", TYPING_INDICATOR: "typing_indicator", WELCOME_MESSAGE: "welcome_message_create" }),
                o = Object.freeze({ MISSED: "MISSED", CANCELED: "CANCELED", DECLINED: "DECLINED", HUNG_UP: "HUNG_UP", TIMED_OUT: "TIMED_OUT" }),
                i = Object.freeze({ AUDIO_ONLY: "AUDIO_ONLY", VIDEO: "VIDEO" }),
                d = Object.freeze({ MUTUAL_FRIENDS: "mutual_friends" }),
                c = Object.freeze({ UNINITIATED: "UNINITIATED", EXISTING: "EXISTING", DEVICE_NOT_A_MEMBER: "DEVICE_NOT_A_MEMBER" });
        },
        182991: (e, t, a) => {
            a.d(t, { x: () => r });
            var n = a(147143);
            const r = (e, t) => (e[n.Yf] ? e[n.Yf].conversations[t] : null);
        },
        613195: (e, t, a) => {
            a.d(t, { $S: () => Be, Ae: () => De, Ap: () => Ue, BW: () => Ze, Be: () => ue, Ek: () => je, FI: () => Ve, FS: () => te, GP: () => Oe, Ke: () => ke, OF: () => oe, OW: () => Ee, PZ: () => Le, Pr: () => $, Qe: () => $e, S9: () => he, SF: () => Re, UA: () => ce, Um: () => _e, W: () => de, X5: () => Ke, Xw: () => qe, ZP: () => Q, Zg: () => ne, _D: () => Ge, aG: () => ie, ax: () => ae, ck: () => le, d0: () => Me, dq: () => Pe, gQ: () => X, gq: () => re, jT: () => se, lT: () => xe, nI: () => Qe, qH: () => Se, qg: () => Ae, sA: () => Ie, sS: () => pe, sj: () => ye, tF: () => Te, tw: () => Ce, v3: () => fe, wm: () => me, xu: () => K });
            var n = a(24949),
                r = a(111677),
                s = a.n(r),
                o = a(184605),
                i = a(948322),
                d = a(88656),
                c = a(615656),
                l = a(856674),
                _ = a(917799),
                p = a(312771),
                I = a(56519),
                E = a(497294),
                u = a(390387),
                m = a(877848),
                A = a(601576),
                T = a(919022),
                y = a(275365),
                O = a(627279),
                v = a(720277),
                S = a(849585),
                h = a(147143);
            const N = s().fb4ee2f6,
                C = "rweb/directMessages/conversation/SET_RECIPIENT_CAN_NOT_DM",
                g = "ACTION_DM_ADD_PARTICIPANTS",
                R = "FETCH_DM_CONVERSATION_FUTURE",
                f = "FETCH_DM_CONVERSATION_RELATIVE_HISTORY",
                M = "FETCH_DM_CONVERSATION_HISTORICAL_SNAPSHOT",
                b = _.dg(h.A7, "ACCEPT_CONVERSATION"),
                D = _.dg(h.A7, "MUTE_DM_USER"),
                w = _.dg(h.A7, "ADD_PARTICIPANTS"),
                B = _.dg(h.A7, "FETCH_CONVERSATION"),
                P = _.dg(h.A7, "FETCH_CONVERSATION_FROM_PARTICIPANTS"),
                L = _.dg(h.A7, "LEAVE_CONVERSATION"),
                Z = Object.freeze({ REQUEST: "rweb/directMessages/LEAVE_CONVERSATIONS_REQUEST", SUCCESS: "rweb/directMessages/LEAVE_CONVERSATIONS_SUCCESS", FAILURE: "rweb/directMessages/LEAVE_CONVERSATIONS_FAILURE" }),
                U = _.dg(h.A7, "MARK_CONVERSATION_READ"),
                x = _.dg(h.A7, "DISABLE_MENTION_CONVERSATION_NOTIFICATIONS"),
                V = _.dg(h.A7, "DISABLE_CONVERSATION_NOTIFICATIONS"),
                k = _.dg(h.A7, "ENABLE_MENTION_CONVERSATION_NOTIFICATIONS"),
                F = _.dg(h.A7, "ENABLE_CONVERSATION_NOTIFICATIONS"),
                j = _.dg(h.A7, "UPDATE_CONVERSATION_NAME"),
                Y = _.dg(h.A7, "UPLOAD_MEDIA"),
                G = _.dg(h.A7, "UPDATE_GROUP_AVATAR"),
                W = (e, t) => t + 36e5 * e,
                q = (e) => [void 0, W(1, e), W(8, e), W(168, e)],
                H = {};
            function Q(e = H, t) {
                if (!t) return e;
                switch (t.type) {
                    case b.SUCCESS: {
                        const { conversationId: a } = t.meta,
                            n = e[a];
                        return { ...e, [a]: { ...n, data: { ...n.data, trusted: !0 } } };
                    }
                    case Ne: {
                        const a = Object.entries(t.payload || {}).reduce((t, [a, n]) => ((t[a] = { ...z(e[a], n), fetchStatus: { [m.Yj.BOTTOM]: p.ZP.LOADED, [m.Yj.TOP]: p.ZP.LOADED } }), t), {});
                        return { ...e, ...a };
                    }
                    case C: {
                        const a = t.payload;
                        return { ...e, [a]: { recipientCanNotDm: !0 } };
                    }
                    case w.REQUEST: {
                        const a = t.meta.conversationId,
                            n = e[a];
                        return { ...e, [a]: { ...n, fetchStatus: { ...n.fetchStatus, [m.Yj.TOP]: p.ZP.LOADING } } };
                    }
                    case w.FAILURE: {
                        const a = t.meta.conversationId,
                            n = e[a];
                        return { ...e, [a]: { ...n, fetchStatus: { ...n.fetchStatus, [m.Yj.TOP]: p.ZP.FAILED } } };
                    }
                    case w.SUCCESS: {
                        const a = t.meta.conversationId,
                            n = e[a],
                            r = n.data.participants,
                            s = t.payload.entities.entries ? Object.values(t.payload.entities.entries)[0].participants : [];
                        return { ...e, [a]: { ...n, fetchStatus: { ...n.fetchStatus, [m.Yj.TOP]: p.ZP.LOADED }, data: { ...n.data, participants: [...r, ...s] } } };
                    }
                    case B.REQUEST: {
                        const { conversationId: a, direction: n = m.Yj.BOTTOM } = t.meta,
                            r = e[a];
                        return { ...e, [a]: { ...r, fetchStatus: { ...((r && r.fetchStatus) || {}), [n]: p.ZP.LOADING } } };
                    }
                    case B.FAILURE: {
                        const { conversationId: a, direction: n = m.Yj.BOTTOM } = t.meta,
                            r = e[a];
                        return { ...e, [a]: { ...r, fetchStatus: { ...((r && r.fetchStatus) || {}), [n]: p.ZP.FAILED }, error: t.payload } };
                    }
                    case B.SUCCESS: {
                        const { conversationId: a, direction: n = m.Yj.BOTTOM } = t.meta,
                            r = e[a]?.data || {};
                        return { ...e, [a]: { ...e[a], data: { ...r, isSearchResultOnly: !1 }, fetchStatus: { ...((e[a] && e[a].fetchStatus) || {}), [n]: p.ZP.LOADED } } };
                    }
                    case ge:
                        return Object.entries(e).reduce((a, [n, r]) => ((a[n] = z(e[n], { last_read_event_id: t.payload })), a), {});
                    case U.REQUEST:
                        return { ...e, [t.meta.conversationId]: z(e[t.meta.conversationId], { last_read_event_id: t.meta.lastReadEventId }) };
                    case D.SUCCESS:
                        return { ...e, [t.meta.conversationId]: z(e[t.meta.conversationId], { muted: t.meta.mute }) };
                    case be: {
                        const { [t.payload]: a, ...n } = e;
                        return n;
                    }
                    case L.REQUEST:
                        return { ...e, [t.meta.conversationId]: { ...e[t.meta.conversationId], isDeleted: !0 } };
                    case Z.REQUEST: {
                        const a = {};
                        for (const n in t.meta.conversationsIds) Object.assign(a, { id: { ...e[n], isDeleted: !0 } });
                        return { ...e, ...a };
                    }
                    case we:
                        return { ...e, [t.meta.conversationId]: z(e[t.meta.conversationId], { notifications_disabled: !t.payload }) };
                    case V.REQUEST:
                        return { ...e, [t.meta.conversationId]: z(e[t.meta.conversationId], { notifications_disabled: !0, mute_expiration_time: q(new Date().getTime())[t.meta.duration] }) };
                    case x.REQUEST:
                        return { ...e, [t.meta.conversationId]: z(e[t.meta.conversationId], { mention_notifications_disabled: !0 }) };
                    case F.REQUEST:
                        return { ...e, [t.meta.conversationId]: z(e[t.meta.conversationId], { notifications_disabled: !1 }) };
                    case k.REQUEST:
                        return { ...e, [t.meta.conversationId]: z(e[t.meta.conversationId], { mention_notifications_disabled: !1 }) };
                    case He:
                        return { ...e, [t.meta.conversationId]: z(e[t.meta.conversationId], { avatar_image_https: t.payload }) };
                    case j.REQUEST:
                    case j.SUCCESS:
                        return { ...e, [t.meta.conversationId]: z(e[t.meta.conversationId], { name: t.meta.name }) };
                    case Fe: {
                        const a = e[t.meta.conversationId],
                            n = (a && a.data && a.data.max_entry_id) || "0";
                        return (0, l.T1)(t.payload, n) ? { ...e, [t.meta.conversationId]: z(e[t.meta.conversationId], { max_entry_id: t.payload }) } : e;
                    }
                    case Y.REQUEST:
                        return { ...e, [t.meta.conversationId]: z(e[t.meta.conversationId], { isUploading: !0 }) };
                    case Y.FAILURE:
                    case Y.SUCCESS:
                        return { ...e, [t.meta.conversationId]: z(e[t.meta.conversationId], { isUploading: !1 }) };
                    case Ye:
                        return { ...e, [t.meta.conversationId]: z(e[t.meta.conversationId], { avatarMediaId: t.payload }) };
                    case We:
                        return { ...e, [t.meta.conversationId]: z(e[t.meta.conversationId], { avatarMediaId: null }) };
                    case S.t:
                        return H;
                    default:
                        return e;
                }
            }
            const z = (e = {}, t = {}, a = []) => {
                    const { error: n, ...r } = e,
                        { avatarMediaId: s = null } = (0, o.Z)(t.avatarMediaId) ? t : r,
                        { isUploading: i = !1 } = t,
                        { avatarMediaId: d, isUploading: c, max_entry_id: _, min_entry_id: p, ...I } = t,
                        E = { ...(r && r.data), ...I };
                    !r?.data && I.isSearchResult ? (E.isSearchResultOnly = !0) : I.isSearchResult || (E.isSearchResultOnly = !1), r?.data?.labels && !I.labels ? ((E.labels = r.data.labels), (E.isPinnedOnly = !1)) : !r.data && I.labels && (E.isPinnedOnly = !0);
                    var u, m;
                    return !!I.conversation_id && !I.convo_label && delete E.convo_label, _ && (E.max_entry_id = ((u = _), (m = r?.data?.max_entry_id), (0, l.KH)(u, m) ? u : m)), p && (E.min_entry_id = ((e, t) => (e && t ? ((0, l.T1)(e, t) ? t : e) : e || t))(p, r?.data?.min_entry_id)), { ...r, avatarMediaId: s, data: E, isUploading: i };
                },
                K = (e, t) => e[h.Yf].conversations[t],
                $ = (e, t) => {
                    const a = K(e, t);
                    return a && a.fetchStatus ? (0, p.ke)(a.fetchStatus, a.data) : p.ZP.LOADED;
                },
                X = (e, t) => {
                    const a = K(e, t);
                    return !(!a || !a.fetchStatus || a?.data?.isSearchResultOnly || a?.data?.isPinnedOnly) && (0, p.ke)(a.fetchStatus, a.data) === p.ZP.LOADED;
                },
                J = (e, t) => {
                    const a = K(e, t);
                    return !(!a || !a.fetchStatus) && a.fetchStatus[m.Yj.TOP] === p.ZP.LOADING;
                },
                ee = (e, t) => {
                    const a = K(e, t);
                    return !(!a || !a.fetchStatus) && a.fetchStatus[m.Yj.BOTTOM] === p.ZP.LOADING;
                },
                te = (0, n.P1)(
                    (e) => e[h.Yf].conversations,
                    (e) => Object.entries(e).reduce((e, [t, a]) => (a.data && !a.isDeleted && (e[t] = a), e), {}),
                ),
                ae = (e) => Object.keys(te(e)).length > 0,
                ne = (e, t) => {
                    if (!t) return;
                    const a = X(e, t),
                        n = (0, v.g4)(e, h._2.SECONDARY),
                        r = (0, v.g4)(e, h._2.TERTIARY);
                    return a ? (n.includes(t) ? h._2.SECONDARY : r.includes(t) ? h._2.TERTIARY : h._2.PRIMARY) : void 0;
                },
                re = (e, t) => {
                    const { data: a } = K(e, t) || {},
                        { sort_event_id: n } = a || {};
                    if (n) {
                        const t = u._h(e),
                            { by_user_id: a, id: r, message_data: s, sender_id: o } = (0, O.WK)(e, n) || {};
                        if ((o && o !== t) || (s && s.sender_id !== t) || (a && a !== t)) return r;
                    }
                    return null;
                },
                se = (e, t) => {
                    const a = re(e, t),
                        { data: n } = K(e, t) || {};
                    return !a || !!(n && n.last_read_event_id && (0, l.KH)(n.last_read_event_id, a));
                },
                oe = (e, { conversationId: t }) => !!e[h.Yf]?.conversations[t]?.recipientCanNotDm,
                ie = (e, t) => {
                    const { avatarMediaId: a } = K(e, t) || {};
                    return a;
                },
                de = (e, t) => {
                    const { isUploading: a } = K(e, t) || {};
                    return a;
                },
                ce = (e, t) => E._T(e, ie(e, t)),
                le =
                    (e, t) =>
                    (a, n, { api: r }) => {
                        const s = t.join(",");
                        return _._O(a, { params: { conversationId: e, joinedParticipantIds: s }, request: r.withEndpoint(i.Z).addParticipants })({ actionTypes: w, context: g, meta: { conversationId: e, participantIds: t } }, (e) => {
                            if (e) {
                                const { entities: t } = e;
                                return [t.entries && (0, O.I7)(t.entries), (0, I.dP)(t)];
                            }
                        }).then((e) => {
                            const t = e.result.failed_participants;
                            if (!t) return Promise.resolve(e);
                            const a = Object.keys(t),
                                n = 1 === a.length ? t[a[0]] : c.ZP.DefaultApiError,
                                r = new d.Z("addParticpants URL", 500, e.headers, [{ code: n }]);
                            return (r.context.action = g), Promise.reject(r);
                        });
                    },
                _e =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { context: r, conversationId: s } = e;
                        return t(
                            (
                                (e) =>
                                (t, a, { api: n, featureSwitches: r }) => {
                                    if (e?.startsWith("e")) {
                                        const r = u._h(a()),
                                            s = e.replace(r, "").replace(/[e-]/g, "");
                                        return n
                                            .withEndpoint(i.Z)
                                            .fetchSecretPermissions({ recipient_ids: [s] })
                                            .then(({ permissions: { id_keys: a } }) => {
                                                if (!a[s].can_dm) return t({ payload: e, type: C });
                                            });
                                    }
                                    return Promise.resolve();
                                }
                            )(s),
                        ).then(() => {
                            if (!oe(a(), { conversationId: s })) {
                                const a = (e) => {
                                    if (e?.result?.conversation_timeline) {
                                        const { cards: t, entries: a, publishedArticles: n, tweets: s, users: o } = e.entities,
                                            { conversations: i, max_entry_id: d, min_entry_id: c, status: l } = e.result.conversation_timeline,
                                            _ = { max_entry_id: d, min_entry_id: c, status: l },
                                            p = [R, f, M].includes(r)
                                                ? ((e = {}, t, a) => {
                                                      const n = t && a === R,
                                                          r = t && a === f;
                                                      return Object.entries(e).reduce((e, [a, s]) => {
                                                          let o;
                                                          return (o = n ? { ...s, max_search_entry_id: t?.max_entry_id, search_status: t?.status } : r ? { ...s, min_search_entry_id: t?.min_entry_id, status: t?.status } : { ...s, min_search_entry_id: t?.min_entry_id, max_search_entry_id: t?.max_entry_id, search_status: t?.status }), { ...e, [a]: o };
                                                      }, {});
                                                  })(i, _, r)
                                                : ((e = {}, t) => Object.entries(e).reduce((e, [a, n]) => ({ ...e, [a]: { ...n, ...t } }), {}))(i, _);
                                        return (0, v.s0)({ conversations: p, entries: a, users: o, tweets: s, cards: t, publishedArticles: n });
                                    }
                                };
                                return _._O(t, { params: e, request: n.withEndpoint(i.Z).fetchConversation })({ actionTypes: B, context: r, meta: { conversationId: s, direction: (0, m.Sj)(e) } }, a);
                            }
                        });
                    },
                pe =
                    (e) =>
                    (t, a, { api: n }) =>
                        _._O(t, { params: { participantIds: e }, request: n.withEndpoint(i.Z).fetchConversationFromParticipants })({ actionTypes: P, meta: { participantIds: e } }),
                Ie =
                    (e = {}) =>
                    (t, a) => {
                        const n = a(),
                            { conversationId: r } = e,
                            s = ee(n, r),
                            o = X(n, r);
                        return s || o ? Promise.resolve() : t(_e({ conversationId: r, context: "FETCH_DM_CONVERSATION" }));
                    },
                Ee =
                    (e = {}) =>
                    (t, a) => {
                        const n = a(),
                            { conversationId: r } = e,
                            { data: s } = K(n, r) || {},
                            { max_search_entry_id: o } = s || {},
                            i = J(n, r),
                            d = R;
                        return o && !i ? t(_e({ conversationId: e.conversationId, min_id: o, context: d, min_position: o })) : Promise.resolve();
                    },
                ue =
                    (e = {}) =>
                    (t, a) => {
                        let n, r;
                        const s = a(),
                            { conversationId: o } = e,
                            { data: i } = K(s, o) || {},
                            { min_entry_id: d, min_search_entry_id: c, status: l } = i || {};
                        e?.isSearch ? ((r = "FETCH_DM_CONVERSATION_RELATIVE_HISTORY"), (n = c)) : ((r = "FETCH_DM_CONVERSATION_HISTORY"), (n = d));
                        const _ = ee(s, o);
                        return l !== y.To.HAS_MORE || _ ? Promise.resolve() : t(_e({ ...e, max_id: n, context: r }));
                    },
                me =
                    (e = {}) =>
                    (t, a) => {
                        const n = a(),
                            { conversationId: r, entryId: s } = e;
                        return !J(n, r) && s ? t(_e({ conversationId: r, min_id: s, min_buffer: 15, context: M, min_position: s })) : Promise.resolve();
                    },
                Ae =
                    (e) =>
                    (t, a, { api: n }) =>
                        n
                            .withEndpoint(i.Z)
                            .fetchPermissions({ recipient_ids: e.join(",") })
                            .then(({ permissions: { id_keys: e } }) => e),
                Te =
                    (e) =>
                    (t, a, { api: n }) =>
                        _._O(t, { params: { conversationId: e }, request: n.withEndpoint(i.Z).acceptConversation })({ actionTypes: b, meta: { conversationId: e } }),
                ye = (e, t) => ve(e, t, !0),
                Oe = (e, t) => ve(e, t, !1),
                ve =
                    (e, t, a) =>
                    (n, r, { api: s }) =>
                        _._O(n, { params: { userId: e, relationshipAction: a ? "mute" : "unmute", conversationId: t }, request: s.withEndpoint(i.Z).muteDMUser })({ actionTypes: D, meta: { userId: e, conversationId: t, mute: a } }).then(n(T.ZP.patchUser(e, { dm_muting: a }))),
                Se =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: r } = e;
                        return _.AB(t, { params: e, request: n.withEndpoint(i.Z).leaveConversation })({ actionTypes: L, context: "ACTION_LEAVE_CONVERSATION", meta: { conversationId: r } });
                    },
                he =
                    (e) =>
                    (t, a, { api: n }) => {
                        const r = e.join(",");
                        return _._O(t, { params: { conversationIds: r }, request: n.withEndpoint(i.Z).deleteConversations })({ actionTypes: Z, context: "LEAVE_CONVERSATIONS", meta: { conversationIds: e } }, (e) => {
                            if (!e.error) return [(0, A.fz)({ text: N })];
                        });
                    },
                Ne = "rweb/directMessages/ADD_CONVERSATIONS",
                Ce = (e) => ({ payload: e, type: Ne }),
                ge = "rweb/directMessages/MARK_ALL_AS_READ",
                Re = (e) => ({ payload: e, type: ge }),
                fe = (e, t) => ({ type: U.REQUEST, meta: { conversationId: e, lastReadEventId: t } }),
                Me =
                    (e) =>
                    (t, a, { api: n }) => {
                        const r = a(),
                            { data: s = {} } = K(r, e) || {},
                            { sort_event_id: o } = s,
                            d = !se(r, e);
                        if (e && o && d) {
                            return _.AB(t, { params: { conversationId: e, last_read_event_id: o }, request: n.withEndpoint(i.Z).markRead })({ actionTypes: U, bypassFailureOnErrors: () => !0, context: "APP_DM_UPDATE_CONVERSATION_READ_STATE", meta: { conversationId: e, lastReadEventId: o } });
                        }
                        return Promise.resolve();
                    },
                be = "rweb/directMessages/REMOVE_CONVERSATION",
                De = (e) => [{ payload: e, type: be }, (0, O.J_)(e)],
                we = "rweb/directMessages/TOGGLE_CONVERSATION_NOTIFICATIONS",
                Be = (e, t) => ({ meta: { conversationId: e }, payload: t, type: we }),
                Pe =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: r, duration: s } = e;
                        return _.AB(t, { params: e, request: n.withEndpoint(i.Z).disableNotifications })({ actionTypes: V, context: "ACTION_DISABLE_NOTIFICATIONS", meta: { conversationId: r, duration: s } });
                    },
                Le =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: r } = e;
                        return _.AB(t, { params: e, request: n.withEndpoint(i.Z).enableNotifications })({ actionTypes: F, context: "ACTION_ENABLE_NOTIFICATIONS", meta: { conversationId: r } });
                    },
                Ze =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: r } = e,
                            s = { mention_notifications_disabled: !0, ...e };
                        return _.AB(t, { params: s, request: n.withEndpoint(i.Z).updateMentionNotificationsSetting })({ actionTypes: x, context: "ACTION_DISABLE_DM_MENTION_NOTIFICATIONS", meta: { conversationId: r } });
                    },
                Ue =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: r } = e,
                            s = { mention_notifications_disabled: !1, ...e };
                        return _.AB(t, { params: s, request: n.withEndpoint(i.Z).updateMentionNotificationsSetting })({ actionTypes: k, context: "ACTION_ENABLE_DM_MENTION_NOTIFICATIONS", meta: { conversationId: r } });
                    },
                xe =
                    (e = {}) =>
                    (t, a, { api: n }) =>
                        n.withEndpoint(i.Z).updateTyping(e),
                Ve =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: r, name: s } = e;
                        return _.AB(t, { params: e, request: n.withEndpoint(i.Z).updateConversationName })({ actionTypes: j, context: "ACTION_UPDATE_CONVERSATION_NAME", meta: { conversationId: r, name: s } });
                    },
                ke = (e) => ({ type: j.SUCCESS, meta: { conversationId: e.conversation_id, name: e.conversation_name } }),
                Fe = "rweb/directMessages/UPDATE_CONVERSATION_MAX_ENTRY_ID",
                je = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Fe }),
                Ye = "rweb/directMessages/ADD_AVATAR_MEDIA",
                Ge = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Ye }),
                We = "rweb/directMessages/REMOVE_AVATAR_MEDIA",
                qe = (e, t) => ({ meta: { conversationId: e }, payload: t, type: We }),
                He = "rweb/directMessages/UPDATE_CONVERSATION_AVATAR",
                Qe = (e, t) => ({ meta: { conversationId: e }, payload: t, type: He }),
                ze = "APP_DM_UPDATE_CONVERSATION_AVATAR",
                Ke =
                    (e) =>
                    (t, a, { api: n }) => {
                        t({ meta: { conversationId: e }, type: Y.REQUEST });
                        const r = ie(a(), e),
                            s = E.$i(r);
                        return t(s).then(
                            ([a]) => {
                                t({ meta: { conversationId: e }, type: Y.SUCCESS });
                                return _._O(t, { params: { conversationId: e, avatar_id: a.uploadId }, request: n.withEndpoint(i.Z).updateConversationAvatar })({ actionTypes: G, context: ze });
                            },
                            (a) => {
                                const n = { errors: a, context: ze };
                                return t({ meta: { conversationId: e }, type: Y.FAILURE }), Promise.reject(n);
                            },
                        );
                    },
                $e =
                    (e, t) =>
                    (a, n, { api: r }) =>
                        _.Vg(a, { params: { conversation_id: e, welcome_message_id: t }, request: r.withEndpoint(i.Z).addWelcomeMessageToConversation })("ADD_WELCOME_MESSAGE_TO_CONVERSATION");
        },
        627279: (e, t, a) => {
            a.d(t, { I7: () => R, J_: () => D, MY: () => V, Ob: () => Y, WK: () => W, WO: () => M, ZP: () => v, _d: () => Q, gm: () => G, gz: () => q, iN: () => H, kv: () => B, pt: () => w, px: () => L, rU: () => F, s$: () => U, wC: () => f, zT: () => z });
            var n = a(468811),
                r = a.n(n),
                s = a(744531),
                o = a(933277),
                i = a(973710),
                d = a(166852),
                c = a(450681),
                l = a(948322),
                _ = a(856674),
                p = a(163889),
                I = a(917799),
                E = a(275365),
                u = a(849585),
                m = a(147143);
            const A = (0, I.dg)(m.A7, "DELETE_MESSAGE"),
                T = (0, I.dg)(m.A7, "MARK_ENTRIES_AS_SPAM"),
                y = (0, I.dg)(m.A7, "MARK_ENTRIES_AS_NOT_SPAM"),
                O = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} };
            function v(e = O, t) {
                if (!t) return e;
                const { conversationId: a = t.payload?.conversation_id, requestId: n = t.payload?.id } = t.meta || {};
                switch (t.type) {
                    case P: {
                        const { id: n } = t.payload,
                            r = { ...e.entries, [n]: S(e.entries[n], { data: t.payload }) };
                        return { ...e, entries: r, entryIdsByConversationId: { ...e.entryIdsByConversationId, [a]: N([...(e.entryIdsByConversationId[a] || []), n], r) } };
                    }
                    case Z: {
                        const { id: n } = t.payload,
                            r = { ...e.entries, [n]: h(e.entries[n], t.payload) };
                        return { ...e, entries: r, entryIdsByConversationId: { ...e.entryIdsByConversationId, [a]: N([...(e.entryIdsByConversationId[a] || []), n], r) } };
                    }
                    case g: {
                        const a = Object.values(t.payload)
                                .filter((e) => e.type !== E.Cr.CONVERSATION_READ)
                                .reduce(
                                    (t, a) => {
                                        "message_edit" === a.type && ((a.id = a.message_data.id), (a.type = "message"));
                                        const { id: n } = a,
                                            r = (0, s.Z)(a, "message_reactions");
                                        return (
                                            (t.allEntries[n] = S(e.entries[n], { data: r, isLoading: !1, isLoaded: !0 })),
                                            a.message_reactions &&
                                                (a.message_reactions.forEach((n) => {
                                                    const r = { ...n, affects_sort: !0, message_id: a.id, type: E.Cr.REACTION_CREATE };
                                                    t.allEntries[r.id] = S(e.entries[r.id], { data: r, isLoading: !1, isLoaded: !0 });
                                                }),
                                                (t.embeddedReactionsByMessageId[n] = N([...(e.reactionsByMessageId[n] || []), ...a.message_reactions.map((e) => e.id)], { ...e.entries, ...t.allEntries }))),
                                            t
                                        );
                                    },
                                    { allEntries: {}, embeddedReactionsByMessageId: {} },
                                ),
                            n = { ...e.entries, ...a.allEntries },
                            r = (0, o.Z)(Object.values(a.allEntries), (e) => e.data.conversation_id),
                            i = Object.keys(r).reduce((t, a) => {
                                const s = r[a].map((e) => e.data.id);
                                return (t[a] = N([...(e.entryIdsByConversationId[a] || []), ...s], n)), t;
                            }, {});
                        return { ...e, entries: n, entryIdsByConversationId: { ...e.entryIdsByConversationId, ...i }, reactionsByMessageId: { ...e.reactionsByMessageId, ...a.embeddedReactionsByMessageId } };
                    }
                    case T.REQUEST:
                    case y.REQUEST: {
                        const a = t.type === T.REQUEST,
                            n = t.payload.reduce((t, n) => {
                                const r = e.entries[n] && e.entries[n].data;
                                return { ...t, [n]: { ...e.entries[n], data: { ...r, marked_as_spam: a } } };
                            }, {});
                        return { ...e, entries: { ...e.entries, ...n } };
                    }
                    case A.REQUEST:
                    case b: {
                        const n = t.type === b && !Array.isArray(t.payload),
                            r = e.entryIdsByConversationId[a] || [],
                            o = t.type === b ? (n ? r : t.payload) : [t.payload, ...(e.reactionsByMessageId[t.payload] || [])];
                        return { ...e, entries: (0, s.Z)(e.entries, o), entryIdsByConversationId: { ...(0, s.Z)(e.entryIdsByConversationId, a), ...(n ? {} : { [a]: (0, i.Z)(r, o) }) }, reactionsByMessageId: (0, s.Z)(e.reactionsByMessageId, o) };
                    }
                    case x: {
                        const r = t.payload.id || n,
                            o = { ...(0, s.Z)(e.entries, r) },
                            i = N(
                                (e.entryIdsByConversationId[a] || []).filter((e) => e !== r),
                                o,
                            ),
                            d = i ? { [a]: i } : {};
                        return { ...e, entries: o, entryIdsByConversationId: { ...(0, s.Z)(e.entryIdsByConversationId, a), ...d }, reactionsByMessageId: (0, s.Z)(e.reactionsByMessageId, r) };
                    }
                    case k: {
                        const a = t.payload,
                            n = [...(e.reactionsByMessageId[a.message_id] || []), a.id],
                            r = n.filter((t) => e.entries[t]);
                        n.length !== r.length && (0, p.ZP)("DM add reaction is missing a backing entry", { extra: { filteredMessageReactionIds: r, messageReactionIds: n, currentId: a.id } });
                        const s = N(r, e.entries);
                        return { ...e, reactionsByMessageId: { ...e.reactionsByMessageId, [a.message_id]: s } };
                    }
                    case j: {
                        const a = t.payload,
                            n = (e.reactionsByMessageId[a.message_id] || []).find((t) => e.entries[t].data.sender_id === a.sender_id);
                        if (!n) return e;
                        const r = (0, i.Z)(e.entryIdsByConversationId[a.conversation_id], n),
                            o = (0, i.Z)(e.reactionsByMessageId[a.message_id], n);
                        return { ...e, entries: (0, s.Z)(e.entries, n), entryIdsByConversationId: { ...e.entryIdsByConversationId, [a.conversation_id]: r }, reactionsByMessageId: { ...e.reactionsByMessageId, [a.message_id]: o } };
                    }
                    case u.t:
                        return O;
                    default:
                        return e;
                }
            }
            const S = (e, t) => {
                    const { error: a, isLoaded: n, isLoading: r, ...s } = e || {},
                        { data: o, ...i } = t || {};
                    return { ...s, data: { ...(s && s.data), ...o }, ...i };
                },
                h = (e, t) => {
                    const { data: a, ...n } = e || {};
                    return { ...n, data: { ...a, message_data: t } };
                },
                N = (e = [], t) => {
                    const a = (0, d.Z)(e).sort((e, a) => {
                        const n = (0, _.ZP)(t[e].data.time, t[a].data.time);
                        return 0 === n ? (0, _.ZP)(t[e].id, t[a].id) : n;
                    });
                    return a.length ? a : void 0;
                },
                C = (e, t, a, n) => ({ id: r().v1(), time: new Date().getTime().toString(), emoji_reaction: n, reaction_key: "Emoji", conversation_id: e, message_id: t, sender_id: a }),
                g = "rweb/directMessages/ADD_ENTRIES",
                R = (e) => ({ payload: e, type: g }),
                f =
                    (...e) =>
                    (t, a, { api: n }) => {
                        const r = C(...e);
                        return t([L(r.conversation_id, r.id, r), Y(r), F(r)]);
                    },
                M =
                    (...e) =>
                    (t, a, { api: n }) => {
                        const r = C(...e);
                        return t([Y(r)]);
                    },
                b = "rweb/dm/REMOVE_CONVERSATION_ENTRIES",
                D = (e, t) => ({ meta: { conversationId: e }, payload: t, type: b }),
                w = (e, t) => ({ payload: e, type: t ? T.REQUEST : y.REQUEST }),
                B =
                    ({ conversationId: e, dmId: t, markSpam: a }) =>
                    (n, r, { api: s }) =>
                        (0, I.AB)(n, { params: { dm_id: t, report_as: a ? "spam" : "not_spam" }, request: s.withEndpoint(l.Z).reportSpam })({ actionTypes: a ? A : y, payload: a ? t : [t], meta: { conversationId: e } }),
                P = "rweb/directMessages/ADD_ENTRY",
                L = (e, t, a) => ({ meta: { conversationId: e, requestId: t }, payload: a, type: P }),
                Z = "rweb/directMessages/EDIT_ENTRY",
                U = (e, t, a) => ({ meta: { conversationId: e, requestId: t }, payload: a, type: Z }),
                x = "rweb/directMessages/REMOVE_ENTRY",
                V = (e, t, a) => ({ meta: { conversationId: e, requestId: t }, payload: a, type: x }),
                k = "rweb/directMessages/ADD_REACTION",
                F = (e) => ({ payload: { ...e, type: E.Cr.REACTION_CREATE }, type: k }),
                j = "rweb/directMessages/DELETE_REACTION",
                Y = ({ emoji_reaction: e, reaction_key: t, ...a }) => ({ payload: { ...a, type: E.Cr.REACTION_DELETE }, type: j }),
                G = (e) => e[m.Yf].entries,
                W = (e, t) => {
                    const a = G(e).entries[t];
                    return a && a.data;
                },
                q = (e, t) => e[m.Yf].entries.entryIdsByConversationId[t],
                H = (e, t) => {
                    const a = q(e, t);
                    return a ? (0, c.Z)(a.map((t) => W(e, t))) : [];
                },
                Q = (e, t) => G(e).reactionsByMessageId[t],
                z = (e, t) => (Q(e, t) || []).map((t) => W(e, t).sender_id);
        },
        362075: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(807896),
                r = a(202784),
                s = a(325686),
                o = a(688715),
                i = a(950822),
                d = a(386802),
                c = a(392237);
            class l extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = r.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: a } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return a ? a(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let n;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    n = JSON.parse(e.data);
                                } catch (t) {
                                    return void (a && a(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(n);
                            }
                        });
                }
                componentDidMount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.addEventListener("message", e, !1));
                }
                componentWillUnmount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.removeEventListener("message", e, !1));
                }
                render() {
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: a, dangerouslyDisableSandbox: n, src: d, style: c, title: l } = this.props,
                        { isModal: p } = this.context,
                        I = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        E = (0, i.Z)("iframe", { allow: `${I.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, o.ju)(d), style: _.iframe, title: l, ...(n ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${a ? " allow-top-navigation" : ""}` }) });
                    return r.createElement(s.Z, { style: p ? [_.root, _.modalPadding, c] : [_.root, c] }, E);
                }
            }
            l.contextType = d.t;
            const _ = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                p = r.forwardRef((e, t) => r.createElement(l, (0, n.Z)({ forwardedRef: t }, e)));
        },
        364837: (e, t, a) => {
            a.d(t, { R: () => c });
            var n = a(19697),
                r = a(549755),
                s = a(205074);
            const o = 1,
                i = 2,
                d = 3,
                c = (e) => {
                    if ((0, s.DS)(e)) {
                        if (e.isGif) {
                            const { height: t, img: a, orientation: s, width: o } = e;
                            return (0, n.$i)(a, o, t, s).then(
                                (e) => (0, n.q8)(e),
                                (e) => {
                                    throw new r.Z("Gif preview could not be generated", d);
                                },
                            );
                        }
                        {
                            const e = new r.Z("The provided image must be a gif", i);
                            return Promise.reject(e);
                        }
                    }
                    {
                        const e = new r.Z("The provided file is not a valid image", o);
                        return Promise.reject(e);
                    }
                };
        },
        662678: (e, t, a) => {
            a.d(t, { G: () => r, Z: () => n });
            a(136728);
            const n = function (e, t) {
                return r(e, t);
            };
            function r(e, t) {
                return e.reduce(
                    (a, n, r) => {
                        const s = t ? t(n, r, e) : !!n;
                        return s && a[0].push(n), !s && a[1].push(n), a;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Report-6107ac1a.0f9f551a.js.map
