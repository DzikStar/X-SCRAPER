"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.directMessagesData-6203568b"],
    {
        275365: (e, t, s) => {
            s.d(t, { BU: () => c, Cr: () => r, To: () => a, UN: () => d, eD: () => n, td: () => i, v1: () => o });
            const n = Object.freeze({ ONE_TO_ONE: "ONE_TO_ONE", GROUP: "GROUP_DM", SECRET_ONE_TO_ONE: "SECRET_ONE_TO_ONE" }),
                a = Object.freeze({ AT_END: "AT_END", HAS_MORE: "HAS_MORE" }),
                r = Object.freeze({ CONVERSATION_AVATAR_UPDATE: "conversation_avatar_update", CONVERSATION_NAME_UPDATE: "conversation_name_update", CONVERSATION_PROFILE_INFO_HEADER: "conversation_profile_info_header", CONVERSATION_READ: "conversation_read", CONVO_METADATA_UPDATE: "convo_metadata_update", DELEGATE_ALERT_BANNER: "delegate_alert_banner", DISABLE_NOTIFICATIONS: "disable_notifications", ENABLE_NOTIFICATIONS: "enable_notifications", END_AV_BROADCAST: "end_av_broadcast", ENCRYPTED_CONVERSATION: "encrypted_conversation", JOIN_CONVERSATION: "join_conversation", LOADING_INDICATOR: "loading_indicator", MARK_ALL_AS_READ: "mark_all_as_read", MENTION_NOTIFICATIONS_UPDATE: "mention_notifications_setting_update", MESSAGE: "message", MESSAGE_DELETE: "message_delete", MESSAGE_MARK_AS_NOT_SPAM: "message_unmark_as_spam", MESSAGE_MARK_AS_SPAM: "message_mark_as_spam", NEW_MESSAGES_DIVIDER: "new_messages_divider", PARTICIPANTS_JOIN: "participants_join", PARTICIPANTS_LEAVE: "participants_leave", REACTION_CREATE: "reaction_create", REACTION_DELETE: "reaction_delete", READ_ONLY_INDICATOR: "read_only_indicator", REMOVE_CONVERSATION: "remove_conversation", TRUST_CONVERSATION: "trust_conversation", TYPING_INDICATOR: "typing_indicator", WELCOME_MESSAGE: "welcome_message_create" }),
                i = Object.freeze({ MISSED: "MISSED", CANCELED: "CANCELED", DECLINED: "DECLINED", HUNG_UP: "HUNG_UP", TIMED_OUT: "TIMED_OUT" }),
                o = Object.freeze({ AUDIO_ONLY: "AUDIO_ONLY", VIDEO: "VIDEO" }),
                d = Object.freeze({ MUTUAL_FRIENDS: "mutual_friends" }),
                c = Object.freeze({ UNINITIATED: "UNINITIATED", EXISTING: "EXISTING", DEVICE_NOT_A_MEMBER: "DEVICE_NOT_A_MEMBER" });
        },
        613195: (e, t, s) => {
            s.d(t, { $S: () => be, Ae: () => Pe, Ap: () => Ze, BW: () => xe, Be: () => Ae, Ek: () => je, FI: () => Ve, FS: () => te, GP: () => Oe, Ke: () => Fe, OF: () => ie, OW: () => le, PZ: () => we, Pr: () => X, Qe: () => Xe, S9: () => Ne, SF: () => fe, UA: () => ce, Um: () => ue, W: () => de, X5: () => ze, Xw: () => Ge, ZP: () => K, Zg: () => ne, _D: () => qe, aG: () => oe, ax: () => se, ck: () => _e, d0: () => De, dq: () => Le, gQ: () => J, gq: () => ae, jT: () => re, lT: () => Be, nI: () => Ke, qH: () => me, qg: () => ve, sA: () => Ie, sS: () => Ee, sj: () => pe, tF: () => Te, tw: () => ye, v3: () => ge, wm: () => Se, xu: () => z });
            var n = s(24949),
                a = s(674132),
                r = s.n(a),
                i = s(184605),
                o = s(948322),
                d = s(88656),
                c = s(615656),
                _ = s(856674),
                u = s(917799),
                E = s(312771),
                I = s(56519),
                l = s(497294),
                A = s(390387),
                S = s(877848),
                v = s(601576),
                T = s(919022),
                p = s(275365),
                O = s(627279),
                R = s(720277),
                m = s(849585),
                N = s(147143);
            const C = r().fb4ee2f6,
                y = "rweb/directMessages/conversation/SET_RECIPIENT_CAN_NOT_DM",
                h = "ACTION_DM_ADD_PARTICIPANTS",
                f = "FETCH_DM_CONVERSATION_FUTURE",
                g = "FETCH_DM_CONVERSATION_RELATIVE_HISTORY",
                D = "FETCH_DM_CONVERSATION_HISTORICAL_SNAPSHOT",
                M = u.dg(N.A7, "ACCEPT_CONVERSATION"),
                P = u.dg(N.A7, "MUTE_DM_USER"),
                U = u.dg(N.A7, "ADD_PARTICIPANTS"),
                b = u.dg(N.A7, "FETCH_CONVERSATION"),
                L = u.dg(N.A7, "FETCH_CONVERSATION_FROM_PARTICIPANTS"),
                w = u.dg(N.A7, "LEAVE_CONVERSATION"),
                x = Object.freeze({ REQUEST: "rweb/directMessages/LEAVE_CONVERSATIONS_REQUEST", SUCCESS: "rweb/directMessages/LEAVE_CONVERSATIONS_SUCCESS", FAILURE: "rweb/directMessages/LEAVE_CONVERSATIONS_FAILURE" }),
                Z = u.dg(N.A7, "MARK_CONVERSATION_READ"),
                B = u.dg(N.A7, "DISABLE_MENTION_CONVERSATION_NOTIFICATIONS"),
                V = u.dg(N.A7, "DISABLE_CONVERSATION_NOTIFICATIONS"),
                F = u.dg(N.A7, "ENABLE_MENTION_CONVERSATION_NOTIFICATIONS"),
                Y = u.dg(N.A7, "ENABLE_CONVERSATION_NOTIFICATIONS"),
                j = u.dg(N.A7, "UPDATE_CONVERSATION_NAME"),
                H = u.dg(N.A7, "UPLOAD_MEDIA"),
                q = u.dg(N.A7, "UPDATE_GROUP_AVATAR"),
                k = (e, t) => t + 36e5 * e,
                G = (e) => [void 0, k(1, e), k(8, e), k(168, e)],
                Q = {};
            function K(e = Q, t) {
                if (!t) return e;
                switch (t.type) {
                    case M.SUCCESS: {
                        const { conversationId: s } = t.meta,
                            n = e[s];
                        return { ...e, [s]: { ...n, data: { ...n.data, trusted: !0 } } };
                    }
                    case Ce: {
                        const s = Object.entries(t.payload || {}).reduce((t, [s, n]) => ((t[s] = { ...W(e[s], n), fetchStatus: { [S.Yj.BOTTOM]: E.ZP.LOADED, [S.Yj.TOP]: E.ZP.LOADED } }), t), {});
                        return { ...e, ...s };
                    }
                    case y: {
                        const s = t.payload;
                        return { ...e, [s]: { recipientCanNotDm: !0 } };
                    }
                    case U.REQUEST: {
                        const s = t.meta.conversationId,
                            n = e[s];
                        return { ...e, [s]: { ...n, fetchStatus: { ...n.fetchStatus, [S.Yj.TOP]: E.ZP.LOADING } } };
                    }
                    case U.FAILURE: {
                        const s = t.meta.conversationId,
                            n = e[s];
                        return { ...e, [s]: { ...n, fetchStatus: { ...n.fetchStatus, [S.Yj.TOP]: E.ZP.FAILED } } };
                    }
                    case U.SUCCESS: {
                        const s = t.meta.conversationId,
                            n = e[s],
                            a = n.data.participants,
                            r = t.payload.entities.entries ? Object.values(t.payload.entities.entries)[0].participants : [];
                        return { ...e, [s]: { ...n, fetchStatus: { ...n.fetchStatus, [S.Yj.TOP]: E.ZP.LOADED }, data: { ...n.data, participants: [...a, ...r] } } };
                    }
                    case b.REQUEST: {
                        const { conversationId: s, direction: n = S.Yj.BOTTOM } = t.meta,
                            a = e[s];
                        return { ...e, [s]: { ...a, fetchStatus: { ...((a && a.fetchStatus) || {}), [n]: E.ZP.LOADING } } };
                    }
                    case b.FAILURE: {
                        const { conversationId: s, direction: n = S.Yj.BOTTOM } = t.meta,
                            a = e[s];
                        return { ...e, [s]: { ...a, fetchStatus: { ...((a && a.fetchStatus) || {}), [n]: E.ZP.FAILED }, error: t.payload } };
                    }
                    case b.SUCCESS: {
                        const { conversationId: s, direction: n = S.Yj.BOTTOM } = t.meta,
                            a = e[s]?.data || {};
                        return { ...e, [s]: { ...e[s], data: { ...a, isSearchResultOnly: !1 }, fetchStatus: { ...((e[s] && e[s].fetchStatus) || {}), [n]: E.ZP.LOADED } } };
                    }
                    case he:
                        return Object.entries(e).reduce((s, [n, a]) => ((s[n] = W(e[n], { last_read_event_id: t.payload })), s), {});
                    case Z.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { last_read_event_id: t.meta.lastReadEventId }) };
                    case P.SUCCESS:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { muted: t.meta.mute }) };
                    case Me: {
                        const { [t.payload]: s, ...n } = e;
                        return n;
                    }
                    case w.REQUEST:
                        return { ...e, [t.meta.conversationId]: { ...e[t.meta.conversationId], isDeleted: !0 } };
                    case x.REQUEST: {
                        const s = {};
                        for (const n in t.meta.conversationsIds) Object.assign(s, { id: { ...e[n], isDeleted: !0 } });
                        return { ...e, ...s };
                    }
                    case Ue:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { notifications_disabled: !t.payload }) };
                    case V.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { notifications_disabled: !0, mute_expiration_time: G(new Date().getTime())[t.meta.duration] }) };
                    case B.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { mention_notifications_disabled: !0 }) };
                    case Y.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { notifications_disabled: !1 }) };
                    case F.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { mention_notifications_disabled: !1 }) };
                    case Qe:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { avatar_image_https: t.payload }) };
                    case j.REQUEST:
                    case j.SUCCESS:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { name: t.meta.name }) };
                    case Ye: {
                        const s = e[t.meta.conversationId],
                            n = (s && s.data && s.data.max_entry_id) || "0";
                        return (0, _.T1)(t.payload, n) ? { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { max_entry_id: t.payload }) } : e;
                    }
                    case H.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { isUploading: !0 }) };
                    case H.FAILURE:
                    case H.SUCCESS:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { isUploading: !1 }) };
                    case He:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { avatarMediaId: t.payload }) };
                    case ke:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { avatarMediaId: null }) };
                    case m.t:
                        return Q;
                    default:
                        return e;
                }
            }
            const W = (e = {}, t = {}, s = []) => {
                    const { error: n, ...a } = e,
                        { avatarMediaId: r = null } = (0, i.Z)(t.avatarMediaId) ? t : a,
                        { isUploading: o = !1 } = t,
                        { avatarMediaId: d, isUploading: c, max_entry_id: u, min_entry_id: E, ...I } = t,
                        l = { ...(a && a.data), ...I };
                    !a?.data && I.isSearchResult ? (l.isSearchResultOnly = !0) : I.isSearchResult || (l.isSearchResultOnly = !1), a?.data?.labels && !I.labels ? ((l.labels = a.data.labels), (l.isPinnedOnly = !1)) : !a.data && I.labels && (l.isPinnedOnly = !0);
                    var A, S;
                    return !!I.conversation_id && !I.convo_label && delete l.convo_label, u && (l.max_entry_id = ((A = u), (S = a?.data?.max_entry_id), (0, _.KH)(A, S) ? A : S)), E && (l.min_entry_id = ((e, t) => (e && t ? ((0, _.T1)(e, t) ? t : e) : e || t))(E, a?.data?.min_entry_id)), { ...a, avatarMediaId: r, data: l, isUploading: o };
                },
                z = (e, t) => e[N.Yf].conversations[t],
                X = (e, t) => {
                    const s = z(e, t);
                    return s && s.fetchStatus ? (0, E.ke)(s.fetchStatus, s.data) : E.ZP.LOADED;
                },
                J = (e, t) => {
                    const s = z(e, t);
                    return !(!s || !s.fetchStatus || s?.data?.isSearchResultOnly || s?.data?.isPinnedOnly) && (0, E.ke)(s.fetchStatus, s.data) === E.ZP.LOADED;
                },
                $ = (e, t) => {
                    const s = z(e, t);
                    return !(!s || !s.fetchStatus) && s.fetchStatus[S.Yj.TOP] === E.ZP.LOADING;
                },
                ee = (e, t) => {
                    const s = z(e, t);
                    return !(!s || !s.fetchStatus) && s.fetchStatus[S.Yj.BOTTOM] === E.ZP.LOADING;
                },
                te = (0, n.P1)(
                    (e) => e[N.Yf].conversations,
                    (e) => Object.entries(e).reduce((e, [t, s]) => (s.data && !s.isDeleted && (e[t] = s), e), {}),
                ),
                se = (e) => Object.keys(te(e)).length > 0,
                ne = (e, t) => {
                    if (!t) return;
                    const s = J(e, t),
                        n = (0, R.g4)(e, N._2.SECONDARY),
                        a = (0, R.g4)(e, N._2.TERTIARY);
                    return s ? (n.includes(t) ? N._2.SECONDARY : a.includes(t) ? N._2.TERTIARY : N._2.PRIMARY) : void 0;
                },
                ae = (e, t) => {
                    const { data: s } = z(e, t) || {},
                        { sort_event_id: n } = s || {};
                    if (n) {
                        const t = A._h(e),
                            { by_user_id: s, id: a, message_data: r, sender_id: i } = (0, O.WK)(e, n) || {};
                        if ((i && i !== t) || (r && r.sender_id !== t) || (s && s !== t)) return a;
                    }
                    return null;
                },
                re = (e, t) => {
                    const s = ae(e, t),
                        { data: n } = z(e, t) || {};
                    return !s || !!(n && n.last_read_event_id && (0, _.KH)(n.last_read_event_id, s));
                },
                ie = (e, { conversationId: t }) => !!e[N.Yf]?.conversations[t]?.recipientCanNotDm,
                oe = (e, t) => {
                    const { avatarMediaId: s } = z(e, t) || {};
                    return s;
                },
                de = (e, t) => {
                    const { isUploading: s } = z(e, t) || {};
                    return s;
                },
                ce = (e, t) => l._T(e, oe(e, t)),
                _e =
                    (e, t) =>
                    (s, n, { api: a }) => {
                        const r = t.join(",");
                        return u
                            ._O(s, { params: { conversationId: e, joinedParticipantIds: r }, request: a.withEndpoint(o.Z).addParticipants })({ actionTypes: U, context: h, meta: { conversationId: e, participantIds: t } }, (e) => {
                                if (e) {
                                    const { entities: t } = e;
                                    return [t.entries && (0, O.I7)(t.entries), (0, I.dP)(t)];
                                }
                            })
                            .then((e) => {
                                const t = e.result.failed_participants;
                                if (!t) return Promise.resolve(e);
                                const s = Object.keys(t),
                                    n = 1 === s.length ? t[s[0]] : c.ZP.DefaultApiError,
                                    a = new d.Z("addParticpants URL", 500, e.headers, [{ code: n }]);
                                return (a.context.action = h), Promise.reject(a);
                            });
                    },
                ue =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { context: a, conversationId: r } = e;
                        return t(
                            (
                                (e) =>
                                (t, s, { api: n, featureSwitches: a }) => {
                                    if (e?.startsWith("e")) {
                                        const a = A._h(s()),
                                            r = e.replace(a, "").replace(/[e-]/g, "");
                                        return n
                                            .withEndpoint(o.Z)
                                            .fetchSecretPermissions({ recipient_ids: [r] })
                                            .then(({ permissions: { id_keys: s } }) => {
                                                if (!s[r].can_dm) return t({ payload: e, type: y });
                                            });
                                    }
                                    return Promise.resolve();
                                }
                            )(r),
                        ).then(() => {
                            if (!ie(s(), { conversationId: r })) {
                                const s = (e) => {
                                    if (e?.result?.conversation_timeline) {
                                        const { cards: t, entries: s, publishedArticles: n, tweets: r, users: i } = e.entities,
                                            { conversations: o, max_entry_id: d, min_entry_id: c, status: _ } = e.result.conversation_timeline,
                                            u = { max_entry_id: d, min_entry_id: c, status: _ },
                                            E = [f, g, D].includes(a)
                                                ? ((e = {}, t, s) => {
                                                      const n = t && s === f,
                                                          a = t && s === g;
                                                      return Object.entries(e).reduce((e, [s, r]) => {
                                                          let i;
                                                          return (i = n ? { ...r, max_search_entry_id: t?.max_entry_id, search_status: t?.status } : a ? { ...r, min_search_entry_id: t?.min_entry_id, status: t?.status } : { ...r, min_search_entry_id: t?.min_entry_id, max_search_entry_id: t?.max_entry_id, search_status: t?.status }), { ...e, [s]: i };
                                                      }, {});
                                                  })(o, u, a)
                                                : ((e = {}, t) => Object.entries(e).reduce((e, [s, n]) => ({ ...e, [s]: { ...n, ...t } }), {}))(o, u);
                                        return (0, R.s0)({ conversations: E, entries: s, users: i, tweets: r, cards: t, publishedArticles: n });
                                    }
                                };
                                return u._O(t, { params: e, request: n.withEndpoint(o.Z).fetchConversation })({ actionTypes: b, context: a, meta: { conversationId: r, direction: (0, S.Sj)(e) } }, s);
                            }
                        });
                    },
                Ee =
                    (e) =>
                    (t, s, { api: n }) =>
                        u._O(t, { params: { participantIds: e }, request: n.withEndpoint(o.Z).fetchConversationFromParticipants })({ actionTypes: L, meta: { participantIds: e } }),
                Ie =
                    (e = {}) =>
                    (t, s) => {
                        const n = s(),
                            { conversationId: a } = e,
                            r = ee(n, a),
                            i = J(n, a);
                        return r || i ? Promise.resolve() : t(ue({ conversationId: a, context: "FETCH_DM_CONVERSATION" }));
                    },
                le =
                    (e = {}) =>
                    (t, s) => {
                        const n = s(),
                            { conversationId: a } = e,
                            { data: r } = z(n, a) || {},
                            { max_search_entry_id: i } = r || {},
                            o = $(n, a),
                            d = f;
                        return i && !o ? t(ue({ conversationId: e.conversationId, min_id: i, context: d, min_position: i })) : Promise.resolve();
                    },
                Ae =
                    (e = {}) =>
                    (t, s) => {
                        let n, a;
                        const r = s(),
                            { conversationId: i } = e,
                            { data: o } = z(r, i) || {},
                            { min_entry_id: d, min_search_entry_id: c, status: _ } = o || {};
                        e?.isSearch ? ((a = "FETCH_DM_CONVERSATION_RELATIVE_HISTORY"), (n = c)) : ((a = "FETCH_DM_CONVERSATION_HISTORY"), (n = d));
                        const u = ee(r, i);
                        return _ !== p.To.HAS_MORE || u ? Promise.resolve() : t(ue({ ...e, max_id: n, context: a }));
                    },
                Se =
                    (e = {}) =>
                    (t, s) => {
                        const n = s(),
                            { conversationId: a, entryId: r } = e;
                        return !$(n, a) && r ? t(ue({ conversationId: a, min_id: r, min_buffer: 15, context: D, min_position: r })) : Promise.resolve();
                    },
                ve =
                    (e) =>
                    (t, s, { api: n }) =>
                        n
                            .withEndpoint(o.Z)
                            .fetchPermissions({ recipient_ids: e.join(",") })
                            .then(({ permissions: { id_keys: e } }) => e),
                Te =
                    (e) =>
                    (t, s, { api: n }) =>
                        u._O(t, { params: { conversationId: e }, request: n.withEndpoint(o.Z).acceptConversation })({ actionTypes: M, meta: { conversationId: e } }),
                pe = (e, t) => Re(e, t, !0),
                Oe = (e, t) => Re(e, t, !1),
                Re =
                    (e, t, s) =>
                    (n, a, { api: r }) =>
                        u
                            ._O(n, { params: { userId: e, relationshipAction: s ? "mute" : "unmute", conversationId: t }, request: r.withEndpoint(o.Z).muteDMUser })({ actionTypes: P, meta: { userId: e, conversationId: t, mute: s } })
                            .then(n(T.ZP.patchUser(e, { dm_muting: s }))),
                me =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a } = e;
                        return u.AB(t, { params: e, request: n.withEndpoint(o.Z).leaveConversation })({ actionTypes: w, context: "ACTION_LEAVE_CONVERSATION", meta: { conversationId: a } });
                    },
                Ne =
                    (e) =>
                    (t, s, { api: n }) => {
                        const a = e.join(",");
                        return u._O(t, { params: { conversationIds: a }, request: n.withEndpoint(o.Z).deleteConversations })({ actionTypes: x, context: "LEAVE_CONVERSATIONS", meta: { conversationIds: e } }, (e) => {
                            if (!e.error) return [(0, v.fz)({ text: C })];
                        });
                    },
                Ce = "rweb/directMessages/ADD_CONVERSATIONS",
                ye = (e) => ({ payload: e, type: Ce }),
                he = "rweb/directMessages/MARK_ALL_AS_READ",
                fe = (e) => ({ payload: e, type: he }),
                ge = (e, t) => ({ type: Z.REQUEST, meta: { conversationId: e, lastReadEventId: t } }),
                De =
                    (e) =>
                    (t, s, { api: n }) => {
                        const a = s(),
                            { data: r = {} } = z(a, e) || {},
                            { sort_event_id: i } = r,
                            d = !re(a, e);
                        if (e && i && d) {
                            return u.AB(t, { params: { conversationId: e, last_read_event_id: i }, request: n.withEndpoint(o.Z).markRead })({ actionTypes: Z, bypassFailureOnErrors: () => !0, context: "APP_DM_UPDATE_CONVERSATION_READ_STATE", meta: { conversationId: e, lastReadEventId: i } });
                        }
                        return Promise.resolve();
                    },
                Me = "rweb/directMessages/REMOVE_CONVERSATION",
                Pe = (e) => [{ payload: e, type: Me }, (0, O.J_)(e)],
                Ue = "rweb/directMessages/TOGGLE_CONVERSATION_NOTIFICATIONS",
                be = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Ue }),
                Le =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a, duration: r } = e;
                        return u.AB(t, { params: e, request: n.withEndpoint(o.Z).disableNotifications })({ actionTypes: V, context: "ACTION_DISABLE_NOTIFICATIONS", meta: { conversationId: a, duration: r } });
                    },
                we =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a } = e;
                        return u.AB(t, { params: e, request: n.withEndpoint(o.Z).enableNotifications })({ actionTypes: Y, context: "ACTION_ENABLE_NOTIFICATIONS", meta: { conversationId: a } });
                    },
                xe =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a } = e,
                            r = { mention_notifications_disabled: !0, ...e };
                        return u.AB(t, { params: r, request: n.withEndpoint(o.Z).updateMentionNotificationsSetting })({ actionTypes: B, context: "ACTION_DISABLE_DM_MENTION_NOTIFICATIONS", meta: { conversationId: a } });
                    },
                Ze =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a } = e,
                            r = { mention_notifications_disabled: !1, ...e };
                        return u.AB(t, { params: r, request: n.withEndpoint(o.Z).updateMentionNotificationsSetting })({ actionTypes: F, context: "ACTION_ENABLE_DM_MENTION_NOTIFICATIONS", meta: { conversationId: a } });
                    },
                Be =
                    (e = {}) =>
                    (t, s, { api: n }) =>
                        n.withEndpoint(o.Z).updateTyping(e),
                Ve =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a, name: r } = e;
                        return u.AB(t, { params: e, request: n.withEndpoint(o.Z).updateConversationName })({ actionTypes: j, context: "ACTION_UPDATE_CONVERSATION_NAME", meta: { conversationId: a, name: r } });
                    },
                Fe = (e) => ({ type: j.SUCCESS, meta: { conversationId: e.conversation_id, name: e.conversation_name } }),
                Ye = "rweb/directMessages/UPDATE_CONVERSATION_MAX_ENTRY_ID",
                je = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Ye }),
                He = "rweb/directMessages/ADD_AVATAR_MEDIA",
                qe = (e, t) => ({ meta: { conversationId: e }, payload: t, type: He }),
                ke = "rweb/directMessages/REMOVE_AVATAR_MEDIA",
                Ge = (e, t) => ({ meta: { conversationId: e }, payload: t, type: ke }),
                Qe = "rweb/directMessages/UPDATE_CONVERSATION_AVATAR",
                Ke = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Qe }),
                We = "APP_DM_UPDATE_CONVERSATION_AVATAR",
                ze =
                    (e) =>
                    (t, s, { api: n }) => {
                        t({ meta: { conversationId: e }, type: H.REQUEST });
                        const a = oe(s(), e),
                            r = l.$i(a);
                        return t(r).then(
                            ([s]) => {
                                t({ meta: { conversationId: e }, type: H.SUCCESS });
                                return u._O(t, { params: { conversationId: e, avatar_id: s.uploadId }, request: n.withEndpoint(o.Z).updateConversationAvatar })({ actionTypes: q, context: We });
                            },
                            (s) => {
                                const n = { errors: s, context: We };
                                return t({ meta: { conversationId: e }, type: H.FAILURE }), Promise.reject(n);
                            },
                        );
                    },
                Xe =
                    (e, t) =>
                    (s, n, { api: a }) =>
                        u.Vg(s, { params: { conversation_id: e, welcome_message_id: t }, request: a.withEndpoint(o.Z).addWelcomeMessageToConversation })("ADD_WELCOME_MESSAGE_TO_CONVERSATION");
        },
        627279: (e, t, s) => {
            s.d(t, { I7: () => f, J_: () => P, MY: () => V, Ob: () => H, WK: () => k, WO: () => D, ZP: () => R, _d: () => K, gm: () => q, gz: () => G, iN: () => Q, kv: () => b, pt: () => U, px: () => w, rU: () => Y, s$: () => Z, wC: () => g, zT: () => W });
            var n = s(468811),
                a = s.n(n),
                r = s(744531),
                i = s(933277),
                o = s(973710),
                d = s(166852),
                c = s(450681),
                _ = s(948322),
                u = s(856674),
                E = s(163889),
                I = s(917799),
                l = s(275365),
                A = s(849585),
                S = s(147143);
            const v = (0, I.dg)(S.A7, "DELETE_MESSAGE"),
                T = (0, I.dg)(S.A7, "MARK_ENTRIES_AS_SPAM"),
                p = (0, I.dg)(S.A7, "MARK_ENTRIES_AS_NOT_SPAM"),
                O = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} };
            function R(e = O, t) {
                if (!t) return e;
                const { conversationId: s = t.payload?.conversation_id, requestId: n = t.payload?.id } = t.meta || {};
                switch (t.type) {
                    case L: {
                        const { id: n } = t.payload,
                            a = { ...e.entries, [n]: m(e.entries[n], { data: t.payload }) };
                        return { ...e, entries: a, entryIdsByConversationId: { ...e.entryIdsByConversationId, [s]: C([...(e.entryIdsByConversationId[s] || []), n], a) } };
                    }
                    case x: {
                        const { id: n } = t.payload,
                            a = { ...e.entries, [n]: N(e.entries[n], t.payload) };
                        return { ...e, entries: a, entryIdsByConversationId: { ...e.entryIdsByConversationId, [s]: C([...(e.entryIdsByConversationId[s] || []), n], a) } };
                    }
                    case h: {
                        const s = Object.values(t.payload)
                                .filter((e) => e.type !== l.Cr.CONVERSATION_READ)
                                .reduce(
                                    (t, s) => {
                                        "message_edit" === s.type && ((s.id = s.message_data.id), (s.type = "message"));
                                        const { id: n } = s,
                                            a = (0, r.Z)(s, "message_reactions");
                                        return (
                                            (t.allEntries[n] = m(e.entries[n], { data: a, isLoading: !1, isLoaded: !0 })),
                                            s.message_reactions &&
                                                (s.message_reactions.forEach((n) => {
                                                    const a = { ...n, affects_sort: !0, message_id: s.id, type: l.Cr.REACTION_CREATE };
                                                    t.allEntries[a.id] = m(e.entries[a.id], { data: a, isLoading: !1, isLoaded: !0 });
                                                }),
                                                (t.embeddedReactionsByMessageId[n] = C([...(e.reactionsByMessageId[n] || []), ...s.message_reactions.map((e) => e.id)], { ...e.entries, ...t.allEntries }))),
                                            t
                                        );
                                    },
                                    { allEntries: {}, embeddedReactionsByMessageId: {} },
                                ),
                            n = { ...e.entries, ...s.allEntries },
                            a = (0, i.Z)(Object.values(s.allEntries), (e) => e.data.conversation_id),
                            o = Object.keys(a).reduce((t, s) => {
                                const r = a[s].map((e) => e.data.id);
                                return (t[s] = C([...(e.entryIdsByConversationId[s] || []), ...r], n)), t;
                            }, {});
                        return { ...e, entries: n, entryIdsByConversationId: { ...e.entryIdsByConversationId, ...o }, reactionsByMessageId: { ...e.reactionsByMessageId, ...s.embeddedReactionsByMessageId } };
                    }
                    case T.REQUEST:
                    case p.REQUEST: {
                        const s = t.type === T.REQUEST,
                            n = t.payload.reduce((t, n) => {
                                const a = e.entries[n] && e.entries[n].data;
                                return { ...t, [n]: { ...e.entries[n], data: { ...a, marked_as_spam: s } } };
                            }, {});
                        return { ...e, entries: { ...e.entries, ...n } };
                    }
                    case v.REQUEST:
                    case M: {
                        const n = t.type === M && !Array.isArray(t.payload),
                            a = e.entryIdsByConversationId[s] || [],
                            i = t.type === M ? (n ? a : t.payload) : [t.payload, ...(e.reactionsByMessageId[t.payload] || [])];
                        return { ...e, entries: (0, r.Z)(e.entries, i), entryIdsByConversationId: { ...(0, r.Z)(e.entryIdsByConversationId, s), ...(n ? {} : { [s]: (0, o.Z)(a, i) }) }, reactionsByMessageId: (0, r.Z)(e.reactionsByMessageId, i) };
                    }
                    case B: {
                        const a = t.payload.id || n,
                            i = { ...(0, r.Z)(e.entries, a) },
                            o = C(
                                (e.entryIdsByConversationId[s] || []).filter((e) => e !== a),
                                i,
                            ),
                            d = o ? { [s]: o } : {};
                        return { ...e, entries: i, entryIdsByConversationId: { ...(0, r.Z)(e.entryIdsByConversationId, s), ...d }, reactionsByMessageId: (0, r.Z)(e.reactionsByMessageId, a) };
                    }
                    case F: {
                        const s = t.payload,
                            n = [...(e.reactionsByMessageId[s.message_id] || []), s.id],
                            a = n.filter((t) => e.entries[t]);
                        n.length !== a.length && (0, E.ZP)("DM add reaction is missing a backing entry", { extra: { filteredMessageReactionIds: a, messageReactionIds: n, currentId: s.id } });
                        const r = C(a, e.entries);
                        return { ...e, reactionsByMessageId: { ...e.reactionsByMessageId, [s.message_id]: r } };
                    }
                    case j: {
                        const s = t.payload,
                            n = (e.reactionsByMessageId[s.message_id] || []).find((t) => e.entries[t].data.sender_id === s.sender_id);
                        if (!n) return e;
                        const a = (0, o.Z)(e.entryIdsByConversationId[s.conversation_id], n),
                            i = (0, o.Z)(e.reactionsByMessageId[s.message_id], n);
                        return { ...e, entries: (0, r.Z)(e.entries, n), entryIdsByConversationId: { ...e.entryIdsByConversationId, [s.conversation_id]: a }, reactionsByMessageId: { ...e.reactionsByMessageId, [s.message_id]: i } };
                    }
                    case A.t:
                        return O;
                    default:
                        return e;
                }
            }
            const m = (e, t) => {
                    const { error: s, isLoaded: n, isLoading: a, ...r } = e || {},
                        { data: i, ...o } = t || {};
                    return { ...r, data: { ...(r && r.data), ...i }, ...o };
                },
                N = (e, t) => {
                    const { data: s, ...n } = e || {};
                    return { ...n, data: { ...s, message_data: t } };
                },
                C = (e = [], t) => {
                    const s = (0, d.Z)(e).sort((e, s) => {
                        const n = (0, u.ZP)(t[e].data.time, t[s].data.time);
                        return 0 === n ? (0, u.ZP)(t[e].id, t[s].id) : n;
                    });
                    return s.length ? s : void 0;
                },
                y = (e, t, s, n) => ({ id: a().v1(), time: new Date().getTime().toString(), emoji_reaction: n, reaction_key: "Emoji", conversation_id: e, message_id: t, sender_id: s }),
                h = "rweb/directMessages/ADD_ENTRIES",
                f = (e) => ({ payload: e, type: h }),
                g =
                    (...e) =>
                    (t, s, { api: n }) => {
                        const a = y(...e);
                        return t([w(a.conversation_id, a.id, a), H(a), Y(a)]);
                    },
                D =
                    (...e) =>
                    (t, s, { api: n }) => {
                        const a = y(...e);
                        return t([H(a)]);
                    },
                M = "rweb/dm/REMOVE_CONVERSATION_ENTRIES",
                P = (e, t) => ({ meta: { conversationId: e }, payload: t, type: M }),
                U = (e, t) => ({ payload: e, type: t ? T.REQUEST : p.REQUEST }),
                b =
                    ({ conversationId: e, dmId: t, markSpam: s }) =>
                    (n, a, { api: r }) =>
                        (0, I.AB)(n, { params: { dm_id: t, report_as: s ? "spam" : "not_spam" }, request: r.withEndpoint(_.Z).reportSpam })({ actionTypes: s ? v : p, payload: s ? t : [t], meta: { conversationId: e } }),
                L = "rweb/directMessages/ADD_ENTRY",
                w = (e, t, s) => ({ meta: { conversationId: e, requestId: t }, payload: s, type: L }),
                x = "rweb/directMessages/EDIT_ENTRY",
                Z = (e, t, s) => ({ meta: { conversationId: e, requestId: t }, payload: s, type: x }),
                B = "rweb/directMessages/REMOVE_ENTRY",
                V = (e, t, s) => ({ meta: { conversationId: e, requestId: t }, payload: s, type: B }),
                F = "rweb/directMessages/ADD_REACTION",
                Y = (e) => ({ payload: { ...e, type: l.Cr.REACTION_CREATE }, type: F }),
                j = "rweb/directMessages/DELETE_REACTION",
                H = ({ emoji_reaction: e, reaction_key: t, ...s }) => ({ payload: { ...s, type: l.Cr.REACTION_DELETE }, type: j }),
                q = (e) => e[S.Yf].entries,
                k = (e, t) => {
                    const s = q(e).entries[t];
                    return s && s.data;
                },
                G = (e, t) => e[S.Yf].entries.entryIdsByConversationId[t],
                Q = (e, t) => {
                    const s = G(e, t);
                    return s ? (0, c.Z)(s.map((t) => k(e, t))) : [];
                },
                K = (e, t) => q(e).reactionsByMessageId[t],
                W = (e, t) => (K(e, t) || []).map((t) => k(e, t).sender_id);
        },
        720277: (e, t, s) => {
            s.d(t, { $7: () => se, A4: () => ne, B7: () => f, C2: () => K, Gk: () => M, Kf: () => Z, MB: () => b, Oq: () => j, Pt: () => g, Re: () => Y, Sb: () => V, UD: () => P, Z3: () => B, ZI: () => H, ZP: () => R, aB: () => D, g4: () => x, gN: () => C, j7: () => X, k5: () => F, kK: () => z, kL: () => ae, oH: () => Q, s0: () => te, vC: () => J, xS: () => U });
            var n = s(161821),
                a = s(401388),
                r = s(948322),
                i = s(856674),
                o = s(234296),
                d = s(917799),
                c = s(312771),
                _ = s(56519),
                u = s(38562),
                E = s(275365),
                I = s(613195),
                l = s(627279),
                A = s(849585),
                S = s(923965),
                v = s(147143);
            const T = d.dg(v.A7, "FETCH_INBOX"),
                p = d.dg(v.A7, "UPDATE_LAST_SEEN_EVENT_ID"),
                O = { cursors: { [v.xR.Inbox]: { fetchStatus: c.ZP.NONE }, [v.xR.Trusted]: { fetchStatus: c.ZP.NONE }, [v.xR.Untrusted]: { fetchStatus: c.ZP.NONE }, [v.xR.UntrustedLowQuality]: { fetchStatus: c.ZP.NONE } }, lastSeenEventIds: {} };
            function R(e = O, t) {
                if (!t) return e;
                switch (t.type) {
                    case T.REQUEST: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], fetchStatus: c.ZP.LOADING } } };
                    }
                    case T.FAILURE: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], error: t.payload, fetchStatus: c.ZP.FAILED } } };
                    }
                    case T.SUCCESS: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], error: void 0, fetchStatus: c.ZP.LOADED } } };
                    }
                    case $:
                        return { ...e, cursors: { ...e.cursors, ...t.payload.cursors }, lastSeenEventIds: m(e.lastSeenEventIds, t.payload.lastSeenEventIds) };
                    case p.REQUEST:
                        return { ...e, lastSeenEventIds: { ...e.lastSeenEventIds, ...t.meta.lastSeenEventIds } };
                    case A.t:
                        return { ...O, cursors: { ...O.cursors, inbox: e.cursors.inbox } };
                    default:
                        return e;
                }
            }
            const m = (e, t) => ({ last_seen_event_id: N(e.last_seen_event_id, t.last_seen_event_id), trusted_last_seen_event_id: N(e.trusted_last_seen_event_id, t.trusted_last_seen_event_id), untrusted_last_seen_event_id: N(e.untrusted_last_seen_event_id, t.untrusted_last_seen_event_id) }),
                N = (e, t) => ((0, i.KH)(e, t) ? e : t),
                C = (e, t, s = "all") => {
                    const n = (0, u.Kp)(t),
                        a = (0, u.Rh)(t);
                    return n ? { ...e, filter_low_quality: a, include_quality: s } : e;
                },
                y = (e) => e[v.Yf].inbox,
                h = (e) => y(e).cursors,
                f = (e) => y(e).lastSeenEventIds,
                g = (e) => h(e)[v.xR.Inbox],
                D = (e) => h(e)[v.xR.Untrusted],
                M = (e) => h(e)[v.xR.UntrustedLowQuality],
                P = (e) => g(e).fetchStatus,
                U = (e) => P(e) === c.ZP.LOADING,
                b = (e) => P(e) === c.ZP.LOADED,
                L = { [v._2.PRIMARY]: (e) => e.trusted, [v._2.SECONDARY]: (e, t, s) => (t ? !(e.trusted || e.muted || (s && e.nsfw) || e.low_quality) : !(e.trusted || e.muted || (s && e.nsfw))), [v._2.TERTIARY]: (e, t, s) => (t ? !e.trusted && (e.muted || e.low_quality || (s && e.nsfw)) : !e.trusted && (e.muted || (s && e.nsfw))) },
                w = (e, t) => {
                    const s = (0, u.Rh)(e),
                        a = (0, u.a5)(e);
                    return (0, n.Z)((0, I.FS)(e)).filter((e) => L[t](e.data, s, a));
                },
                x = (e, t) =>
                    w(e, t)
                        .map((e) => e.data)
                        .sort(o.Z)
                        .map((e) => e.conversation_id),
                Z = (e) =>
                    w(e, v._2.PRIMARY)
                        .filter((e) => e?.data?.labels && e?.data?.labels?.find((e) => e.label_type === v.w1.PINNED))
                        .sort(o.l)
                        .map((e) => e?.data?.conversation_id),
                B = (e, { tag: t }) =>
                    w(e, v._2.PRIMARY)
                        .filter((e) => e?.data?.tag?.value && e.data.tag.value === t?.value)
                        .map((e) => e?.data?.conversation_id),
                V = (e) => {
                    const t = w(e, v._2.PRIMARY),
                        s = w(e, v._2.SECONDARY),
                        n = t.concat(s),
                        { last_seen_event_id: a } = f(e);
                    return q(e, n, a);
                },
                F = (e) => {
                    const t = w(e, v._2.SECONDARY),
                        { untrusted_last_seen_event_id: s } = f(e);
                    return q(e, t, s);
                },
                Y = (e) => {
                    let t = 0,
                        s = 0,
                        n = 0,
                        a = 0;
                    const r = w(e, v._2.SECONDARY),
                        { untrusted_last_seen_event_id: i } = f(e);
                    return (
                        r.forEach((r) => {
                            const o = r.data?.conversation_id,
                                d = i && k(e, o, i),
                                c = G(r?.data?.social_proof);
                            d ? (c ? (t += 1) : (n += 1)) : c ? (s += 1) : (a += 1);
                        }),
                        { newUntrustedWithSocialProof: t, oldUntrustedWithSocialProof: s, newUntrustedWithoutSocialProof: n, oldUntrustedWithoutSocialProof: a }
                    );
                },
                j = (e) => {
                    const t = w(e, v._2.SECONDARY),
                        s = w(e, v._2.TERTIARY);
                    return t.length + s.length;
                },
                H = (e) => w(e, v._2.TERTIARY).length,
                q = (e, t, s) => (s ? t.reduce((t, { data: { conversation_id: n } }) => (k(e, n, s) ? t + 1 : t), 0) : 0),
                k = (e, t, s) => {
                    const n = (0, I.gq)(e, t),
                        a = (0, I.jT)(e, t);
                    return !!n && (0, i.T1)(n, s) && !a;
                },
                G = (e) => {
                    if (!e || 0 === e.length) return !1;
                    const t = e[0];
                    return t.proof_type === E.UN.MUTUAL_FRIENDS && 0 !== t.total;
                },
                Q =
                    (e = {}) =>
                    (t, s, { api: n, featureSwitches: a }) => {
                        const i = s(),
                            o = (0, u.a5)(i),
                            c = C({ nsfw_filtering_enabled: o, ...e }, s());
                        return d._O(t, { params: c, request: n.withEndpoint(r.Z).fetchUserInbox })({ actionTypes: T, context: "FETCH_DM_INBOX", meta: { timelineType: v.xR.Inbox } }, (e) => {
                            if (e) {
                                const { cards: t, entries: s, publishedArticles: n, tweets: a, users: r } = e.entities;
                                return te({ ...e.result.inbox_initial_state, entries: s, users: r, tweets: a, cards: t, publishedArticles: n });
                            }
                        });
                    },
                K =
                    (e = {}) =>
                    (t, s) => {
                        const n = s(),
                            a = P(n);
                        return a !== c.ZP.LOADED && a !== c.ZP.LOADING ? t(Q(e)) : Promise.resolve();
                    },
                W =
                    (e, t, s = 0) =>
                    (n, a, { api: i }) => {
                        const o = a(),
                            c = (0, u.a5)(o),
                            { min_entry_id: _, status: I } = h(o)[e],
                            l = e === v.xR.UntrustedLowQuality ? v.xR.Untrusted : e,
                            A = { ...t, max_id: _, timelineType: l, nsfw_filtering_enabled: c };
                        if (I !== E.To.HAS_MORE) return Promise.resolve();
                        return d
                            ._O(n, { params: A, request: i.withEndpoint(r.Z).fetchInboxHistory })({ actionTypes: T, context: "FETCH_DM_INBOX_HISTORY", meta: { timelineType: e } }, (t) => {
                                if (t) {
                                    const { cards: s, entries: n, publishedArticles: a, tweets: r, users: i } = t.entities,
                                        { inbox_timeline: o } = t.result;
                                    return te({ conversations: o.conversations, inbox_timelines: { [e]: o }, entries: n, users: i, tweets: r, cards: s, publishedArticles: a });
                                }
                            })
                            .then((a) => {
                                const r = a.result.inbox_timeline;
                                if (s < 3 && !r.conversations && r.status === E.To.HAS_MORE) return n(W(e, t, s + 1));
                            });
                    },
                z = (e) => (t, s) => {
                    const n = C(e, s(), "high");
                    return t(W(v.xR.Untrusted, n));
                },
                X = (e) => (t, s) => {
                    const n = C(e, s(), "low");
                    return t(W(v.xR.UntrustedLowQuality, n));
                },
                J = (e) => (t, s) => {
                    const n = C(e, s());
                    return t(W(v.xR.Trusted, n));
                },
                $ = "rweb/directMessages/UPDATE_INBOX",
                ee = (e) => {
                    const { inbox_timelines: t, ...s } = e;
                    return { payload: { cursors: t, lastSeenEventIds: s }, type: $ };
                },
                te = (e = {}) => {
                    const { cards: t, conversations: s, cursor: n, entries: r, publishedArticles: i, tweets: o, users: d, ...c } = e;
                    return [(0, _.dP)({ cards: t, tweets: o, users: d, publishedArticles: i }), !(0, a.Z)(s) && (0, I.tw)(s), !(0, a.Z)(r) && (0, l.I7)(r), !(0, a.Z)(n) && (0, S.NJ)(n), !(0, a.Z)(c) && ee(c)].filter((e) => e);
                },
                se = () => (e) => e(ae({ withTrusted: !0 })),
                ne = () => (e) => e(ae({ withUntrusted: !0 })),
                ae =
                    ({ withTrusted: e, withUntrusted: t } = {}) =>
                    (s, n, { api: a }) => {
                        const o = n(),
                            c = (0, I.FS)(o),
                            _ = f(o),
                            { last_seen_event_id: u, trusted_last_seen_event_id: E, untrusted_last_seen_event_id: l } = _,
                            A = Object.values(c).reduce((e, { data: { sort_event_id: t, trusted: s } }) => ((e.last_seen_event_id = N(e.last_seen_event_id, t)), (e.trusted_last_seen_event_id = s ? N(e.trusted_last_seen_event_id, t) : e.trusted_last_seen_event_id), (e.untrusted_last_seen_event_id = s ? e.untrusted_last_seen_event_id : N(e.untrusted_last_seen_event_id, t)), e), { ..._ });
                        if ((0, i.T1)(A.last_seen_event_id, u) || (e && (0, i.T1)(A.trusted_last_seen_event_id, E)) || (t && (0, i.T1)(A.untrusted_last_seen_event_id, l))) {
                            e || delete A.trusted_last_seen_event_id, t || delete A.untrusted_last_seen_event_id;
                            return d.AB(s, { params: A, request: a.withEndpoint(r.Z).updateLastSeenEventId })({ actionTypes: p, context: "APP_DM_UPDATE_LAST_SEEN", meta: { lastSeenEventIds: A } });
                        }
                        return Promise.resolve();
                    };
        },
        296196: (e, t, s) => {
            s.r(t),
                s.d(t, {
                    GLOBAL_STATE_KEY: () => A.Yf,
                    acceptConversation: () => r.tF,
                    addAvatarMedia: () => r._D,
                    addParticipants: () => r.ck,
                    addRecentSearches: () => M,
                    addWelcomeMessageToConversation: () => r.Qe,
                    clearRecentSearch: () => P,
                    clearRecentSearches: () => U,
                    clearSearchCache: () => R,
                    default: () => w,
                    deleteConversations: () => r.S9,
                    disableMentionNotifications: () => r.BW,
                    disableNotifications: () => r.dq,
                    enableMentionNotifications: () => r.Ap,
                    enableNotifications: () => r.PZ,
                    fetchConversation: () => r.Um,
                    fetchConversationFromParticipants: () => r.sS,
                    fetchConversationFuture: () => r.OW,
                    fetchConversationHistoricalSnapshot: () => r.wm,
                    fetchConversationHistory: () => r.Be,
                    fetchConversationIfNeeded: () => r.sA,
                    fetchInbox: () => o.oH,
                    fetchInboxIfNeeded: () => o.C2,
                    fetchPermissions: () => r.qg,
                    fetchTrustedInboxHistory: () => o.vC,
                    fetchUntrustedInboxHistory: () => o.kK,
                    fetchUntrustedLowQualityInboxHistory: () => o.j7,
                    fetchUpdates: () => b.f9,
                    fetchUpdatesIfNeeded: () => b.hd,
                    leaveConversation: () => r.qH,
                    markAllAsRead: () => r.SF,
                    markConversationRead: () => r.v3,
                    markSpamStatus: () => i.kv,
                    muteDMUser: () => r.sj,
                    removeAvatarMedia: () => r.Xw,
                    removeConversation: () => r.Ae,
                    removeEntry: () => i.MY,
                    searchConversations: () => D,
                    selectConversation: () => r.xu,
                    selectConversationAvatarMediaId: () => r.aG,
                    selectConversationAvatarMediaIsUploading: () => r.W,
                    selectConversationAvatarMediaUploadProgress: () => r.UA,
                    selectConversationFetchStatus: () => r.Pr,
                    selectConversationIdsByInbox: () => o.g4,
                    selectConversationIsLoaded: () => r.gQ,
                    selectConversationIsRead: () => r.jT,
                    selectConversations: () => r.FS,
                    selectEntries: () => i.gm,
                    selectEntriesForConversation: () => i.iN,
                    selectEntry: () => i.WK,
                    selectFetchStatus: () => o.UD,
                    selectHasConversations: () => r.ax,
                    selectInboxCursor: () => o.Pt,
                    selectInboxIsLoaded: () => o.MB,
                    selectInboxTypeByConversation: () => r.Zg,
                    selectIsLoadingTop: () => o.xS,
                    selectLabelledConversationIds: () => o.Z3,
                    selectLastSeenEventIds: () => o.B7,
                    selectPinnedConversationIds: () => o.Kf,
                    selectRecentSearches: () => h,
                    selectRecipientCanNotDm: () => r.OF,
                    selectSearchConversations: () => g,
                    selectSearchFetchStatus: () => f,
                    selectUnreadCount: () => o.Sb,
                    selectUntrustedConversationCount: () => o.Oq,
                    selectUntrustedCounts: () => o.Re,
                    selectUntrustedCursor: () => o.aB,
                    selectUntrustedLowQualityConversationCount: () => o.ZI,
                    selectUntrustedLowQualityCursor: () => o.Gk,
                    selectUntrustedUnreadCount: () => o.k5,
                    selectUpdates: () => b.o8,
                    setConversationAvatar: () => r.X5,
                    toggleNotifications: () => r.$S,
                    unmuteDMUser: () => r.GP,
                    updateConversationAvatar: () => r.nI,
                    updateConversationName: () => r.FI,
                    updateConversationReadState: () => r.d0,
                    updateLastSeenEventId: () => o.kL,
                    updateTrustedLastSeenEventId: () => o.$7,
                    updateTyping: () => r.lT,
                    updateUntrustedLastSeenEventId: () => o.A4,
                });
            var n = s(118717),
                a = s(499627),
                r = s(613195),
                i = s(627279),
                o = s(720277),
                d = (s(136728), s(468811)),
                c = s.n(d),
                _ = s(948322),
                u = s(917799),
                E = s(312771),
                I = s(390387),
                l = s(849585),
                A = s(147143);
            const S = "rweb.recentDMSearches",
                v = Object.freeze({ REQUEST: "rweb/directMessages/SEARCH_REQUEST", SUCCESS: "rweb/directMessages/SEARCH_SUCCESS", FAILURE: "rweb/directMessages/SEARCH_FAILURE" }),
                T = "rweb/directMessages/ADD_RECENT_SEARCHES",
                p = (e) => ({ payload: e, type: T }),
                O = "rweb/directMessages/CLEAR_SEARCH_CACHE",
                R = () => ({ type: O }),
                m = "rweb/directMessages/CLEAR_RECENT_SEARCH",
                N = "rweb/directMessages/CLEAR_RECENT_SEARCHES",
                C = { searchResults: {}, recentSearches: [] };
            function y(e = C, t) {
                if (!t) return e;
                switch (t.type) {
                    case T:
                    case m:
                        return { ...e, recentSearches: t.payload || [] };
                    case N:
                        return { ...e, recentSearches: [] };
                    case v.REQUEST: {
                        const { fetchNextPage: s, preserveResults: n, query: a } = t.meta || {},
                            r = e.searchResults ? e.searchResults[a] : {},
                            i = { ...e.searchResults, [a]: { ...r, fetchStatus: n || s ? r?.fetchStatus : E.ZP.LOADING } };
                        return { ...e, searchResults: i };
                    }
                    case v.FAILURE: {
                        const { fetchNextPage: s, preserveResults: n, query: a } = t.meta || {},
                            r = e.searchResults ? e.searchResults[a] : {},
                            i = { ...e.searchResults, [a]: { ...r, fetchStatus: n || s ? r?.fetchStatus : E.ZP.FAILED, error: t.payload } };
                        return { ...e, searchResults: i };
                    }
                    case v.SUCCESS: {
                        const { query: s } = t.meta || {},
                            n = t.payload && t.payload.result ? t.payload.result : null,
                            { conversations: a, error: r } = n || {},
                            i = n?.conversationIds ? n.conversationIds : a ? Object.keys(a) : [],
                            o = e.searchResults ? e.searchResults[s] : {},
                            d = o?.conversationIds || [],
                            c = d.length && i ? d.concat(i.filter((e) => !d.includes(e))) : i,
                            _ = { ...e.searchResults, [s]: { ...o, lastCursor: n?.cursor, conversationIds: c, error: r, fetchStatus: E.ZP.LOADED } };
                        return { ...e, searchResults: _ };
                    }
                    case O:
                    case l.t:
                        return { ...C, recentSearches: e.recentSearches };
                    default:
                        return e;
                }
            }
            const h = (e) => e[A.Yf].search?.recentSearches,
                f = (e, t) => {
                    const s = e[A.Yf].search?.searchResults;
                    if (s) {
                        const e = s[t];
                        return e?.fetchStatus || E.ZP.NONE;
                    }
                    return E.ZP.NONE;
                },
                g = (e, t) => {
                    const s = e[A.Yf].search?.searchResults;
                    return (s && s[t]?.conversationIds) || [];
                },
                D =
                    (e) =>
                    (t, s, { api: n }) => {
                        const a = s(),
                            { fetchNextPage: r, preserveResults: i, query: d } = e || {},
                            E = { query: d, search_type: "conversations", request_id: c().v4() },
                            I = ((e, t) => {
                                const s = e[A.Yf].search?.searchResults;
                                return (s && s[t]?.lastCursor) || null;
                            })(a, d),
                            l = ((e) => e[A.Yf].search?.searchResults)(a),
                            S = l ? l[d] : void 0,
                            T = !!I;
                        I && d && r && (E.cursor = I);
                        const p = u._O(t, { params: E, request: n.withEndpoint(_.Z).search }),
                            O = (e) => {
                                if (e && e.result) {
                                    const { conversations: t } = e.result,
                                        { users: s } = e.entities;
                                    return t && Object.values(t).forEach((e) => (e.isSearchResult = !0)), t ? (0, o.s0)({ conversations: t, users: s }) : null;
                                }
                            };
                        return !S || S?.error || i || (r && T) ? p({ actionTypes: v, context: "SEARCH", meta: { query: E.query, cursor: E.cursor, preserveResults: i, fetchNextPage: r } }, O) : (t({ type: "rweb/directMessages/SEARCH_SUCCESS", payload: { result: S }, meta: { query: d, cursor: I } }), Promise.resolve());
                    },
                M =
                    (e) =>
                    (t, s, { featureSwitches: n, userPersistence: a }) => {
                        const r = n.getNumberValue("dm_inbox_search_max_recent_searches_stored");
                        return a.get(S).then((s) => {
                            const n = s?.recentSearches || [];
                            return !n.includes(e) && n.push(e), n.length > r && n.shift(), t(p(n)), a.set(S, { recentSearches: n });
                        });
                    },
                P =
                    (e) =>
                    (t, s, { userPersistence: n }) =>
                        n.get(S).then((s) => {
                            const a = s?.recentSearches || [];
                            return a.splice(a.indexOf(e), 1), t({ payload: a, type: m }), n.set(S, { recentSearches: a });
                        }),
                U =
                    () =>
                    (e, t, { userPersistence: s }) => (e({ type: N }), s.set(S, { recentSearches: [] }));
            a.Z.register(
                { [A.Yf]: y },
                () =>
                    (e, t, { userPersistence: s }) =>
                        I.Qb(t())
                            ? Promise.resolve(
                                  s.get(S).then((t) => {
                                      const s = t?.recentSearches;
                                      s && e(p(s));
                                  }),
                              ).then(() => {})
                            : Promise.resolve(),
            );
            var b = s(923965);
            const L = (0, n.UY)({ conversations: r.ZP, entries: i.ZP, inbox: o.ZP, search: y, updates: b.ZP });
            a.Z.register({ [A.Yf]: L });
            const w = L;
        },
        849585: (e, t, s) => {
            s.d(t, { m: () => a, t: () => n });
            const n = "rweb/directMessages/RESET",
                a = () => ({ type: n });
        },
        923965: (e, t, s) => {
            s.d(t, { H_: () => l, NJ: () => O, ZP: () => S, f9: () => v, hd: () => T, o8: () => C });
            var n = s(948322),
                a = s(917799),
                r = s(390387),
                i = s(38562),
                o = s(877848),
                d = s(275365),
                c = s(613195),
                _ = s(627279),
                u = s(720277),
                E = s(849585),
                I = s(147143);
            const l = a.dg(I.A7, "FETCH_UPDATES"),
                A = { isLoaded: !1, isLoading: !1 };
            function S(e = A, t) {
                if (!t) return e;
                switch (t.type) {
                    case l.REQUEST:
                        return { ...e, isLoading: !0 };
                    case l.FAILURE:
                        return { ...e, error: t.payload, isLoaded: !1, isLoading: !1 };
                    case l.SUCCESS: {
                        const { error: t, ...s } = e;
                        return { ...s, isLoaded: !0, isLoading: !1 };
                    }
                    case p:
                        return { ...e, cursor: t.payload };
                    case R:
                        return { ...e, tertiaryInboxStatus: t.payload };
                    case E.t:
                        return A;
                    default:
                        return e;
                }
            }
            const v =
                    (e) =>
                    (t, s, { api: d }) => {
                        const c = s(),
                            { directMessages: _ = {} } = c;
                        let { cursor: I } = _.updates || {};
                        const { polling: A, ...S } = e || {},
                            { tertiaryInboxStatus: v } = _.updates || {};
                        let T = !1;
                        const p = A ? { "x-twitter-polling": "true" } : {},
                            O = (0, i.a5)(c);
                        if (window.location.pathname.startsWith("/i/report")) return Promise.resolve();
                        const R = [(0, i.Kp)(s()) ? "on" : "off", O ? "on" : "off"].join();
                        v ? v !== R && ((I = null), (T = !0)) : (T = !0);
                        const C = (0, u.gN)({ ...S, nsfw_filtering_enabled: O, cursor: I }, s());
                        return a._O(t, { params: C, headers: p, request: d.withEndpoint(n.Z).fetchUserUpdates })({ actionTypes: l, context: "FETCH_DM_USER_UPDATES", meta: { direction: (0, o.Sj)(e) } }, (e) => {
                            if (e) {
                                const { cards: t, entries: s, publishedArticles: n, tweets: a, users: i } = e.entities,
                                    { inbox_initial_state: o, user_events: d } = e.result;
                                return [o && (0, E.m)(), ...(0, u.s0)({ ...(d || o), entries: s, users: i, tweets: a, cards: t, publishedArticles: n }), ...(d ? N(Object.values(s || []), r._h(c)) : []), T && m(R)];
                            }
                        });
                    },
                T = (e) => (t, s) => (y(s()) ? Promise.resolve() : t(v(e))),
                p = "rweb/directMessages/UPDATE_CURSOR",
                O = (e) => ({ payload: e, type: p }),
                R = "rweb/directMessages/UPDATE_TERTIARY_INBOX_STATUS",
                m = (e) => ({ payload: e, type: R }),
                N = (e = [], t) =>
                    e
                        .sort((e, t) => e.id - t.id)
                        .reduce((e, s) => {
                            switch (s.type) {
                                case d.Cr.CONVERSATION_AVATAR_UPDATE:
                                    return [...e, (0, c.nI)(s.conversation_id, s.conversation_avatar_image_https), (0, c.Ek)(s.conversation_id, s.id)].filter((e) => e);
                                case d.Cr.CONVERSATION_NAME_UPDATE:
                                    return [...e, (0, c.Ke)(s), (0, c.Ek)(s.conversation_id, s.id)].filter((e) => e);
                                case d.Cr.CONVERSATION_READ:
                                    return [...e, (0, c.v3)(s.conversation_id, s.last_read_event_id)];
                                case d.Cr.DISABLE_NOTIFICATIONS:
                                case d.Cr.ENABLE_NOTIFICATIONS: {
                                    const t = s.type === d.Cr.ENABLE_NOTIFICATIONS;
                                    return [...e, (0, c.$S)(s.conversation_id, t)];
                                }
                                case d.Cr.MARK_ALL_AS_READ:
                                    return [...e, (0, c.SF)(s.last_read_event_id)];
                                case d.Cr.MESSAGE_DELETE:
                                    return [
                                        ...e,
                                        (0, _.J_)(
                                            s.conversation_id,
                                            s.messages.reduce((e, t) => [...e, ...Object.values(t)], []),
                                        ),
                                    ];
                                case d.Cr.MESSAGE_MARK_AS_NOT_SPAM:
                                case d.Cr.MESSAGE_MARK_AS_SPAM: {
                                    const t = s.type === d.Cr.MESSAGE_MARK_AS_SPAM;
                                    return [
                                        ...e,
                                        (0, _.pt)(
                                            s.messages.reduce((e, t) => [...e, ...Object.values(t)], []),
                                            t,
                                        ),
                                    ];
                                }
                                case d.Cr.REMOVE_CONVERSATION:
                                    return [...e, ...(0, c.Ae)(s.conversation_id)];
                                case d.Cr.JOIN_CONVERSATION:
                                case d.Cr.PARTICIPANTS_JOIN:
                                case d.Cr.PARTICIPANTS_LEAVE:
                                    return [...e, (0, c.Ek)(s.conversation_id, s.id)];
                                case d.Cr.REACTION_CREATE:
                                    return [e]
                                        .concat(t !== s.sender_id && [(0, _.Ob)(s), (0, _.rU)(s)])
                                        .concat((0, c.Ek)(s.conversation_id, s.id))
                                        .filter(Boolean);
                                case d.Cr.REACTION_DELETE:
                                    return [...e, (0, _.Ob)(s)];
                                case d.Cr.MESSAGE:
                                    return [...e, (0, c.Ek)(s.conversation_id, s.id)].filter((e) => e);
                                default:
                                    return e;
                            }
                        }, []),
                C = (e) => e[I.Yf].updates,
                y = (e) => C(e).isLoading;
        },
        147143: (e, t, s) => {
            s.d(t, { A7: () => a, Yf: () => n, _2: () => i, w1: () => r, xR: () => o });
            const n = "directMessages",
                a = `rweb/${n}`,
                r = Object.freeze({ PINNED: "Pinned", REPLY_LATER: "ReplyLater" }),
                i = Object.freeze({ PRIMARY: "primary", SECONDARY: "secondary", TERTIARY: "tertiary" }),
                o = { Inbox: "inbox", Trusted: "trusted", Untrusted: "untrusted", UntrustedLowQuality: "untrusted_low_quality" };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.directMessagesData-6203568b.3fcad8da.js.map
