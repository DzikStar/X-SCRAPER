"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-50b6b1eb"],
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
        182991: (e, t, s) => {
            s.d(t, { x: () => a });
            var n = s(147143);
            const a = (e, t) => (e[n.Yf] ? e[n.Yf].conversations[t] : null);
        },
        613195: (e, t, s) => {
            s.d(t, { $S: () => we, Ae: () => Ue, Ap: () => Ze, BW: () => xe, Be: () => Ae, Ek: () => Ye, FI: () => Be, FS: () => te, GP: () => Oe, Ke: () => Fe, OF: () => ie, OW: () => le, PZ: () => Le, Pr: () => X, Qe: () => Xe, S9: () => Ne, SF: () => De, UA: () => ce, Um: () => Ee, W: () => de, X5: () => ze, Xw: () => ke, ZP: () => K, Zg: () => ne, _D: () => Ge, aG: () => oe, ax: () => se, ck: () => _e, d0: () => fe, dq: () => be, gQ: () => J, gq: () => ae, jT: () => re, lT: () => Ve, nI: () => Ke, qH: () => ye, qg: () => Te, sA: () => Ie, sS: () => ue, sj: () => Se, tF: () => me, tw: () => Ce, v3: () => Me, wm: () => pe, xu: () => z });
            var n = s(24949),
                a = s(111677),
                r = s.n(a),
                i = s(184605),
                o = s(948322),
                d = s(88656),
                c = s(615656),
                _ = s(856674),
                E = s(917799),
                u = s(312771),
                I = s(56519),
                l = s(497294),
                A = s(390387),
                p = s(877848),
                T = s(601576),
                m = s(919022),
                S = s(275365),
                O = s(627279),
                v = s(720277),
                y = s(849585),
                N = s(147143);
            const R = r().fb4ee2f6,
                C = "rweb/directMessages/conversation/SET_RECIPIENT_CAN_NOT_DM",
                g = "ACTION_DM_ADD_PARTICIPANTS",
                D = "FETCH_DM_CONVERSATION_FUTURE",
                M = "FETCH_DM_CONVERSATION_RELATIVE_HISTORY",
                f = "FETCH_DM_CONVERSATION_HISTORICAL_SNAPSHOT",
                h = E.dg(N.A7, "ACCEPT_CONVERSATION"),
                U = E.dg(N.A7, "MUTE_DM_USER"),
                P = E.dg(N.A7, "ADD_PARTICIPANTS"),
                w = E.dg(N.A7, "FETCH_CONVERSATION"),
                b = E.dg(N.A7, "FETCH_CONVERSATION_FROM_PARTICIPANTS"),
                L = E.dg(N.A7, "LEAVE_CONVERSATION"),
                x = Object.freeze({ REQUEST: "rweb/directMessages/LEAVE_CONVERSATIONS_REQUEST", SUCCESS: "rweb/directMessages/LEAVE_CONVERSATIONS_SUCCESS", FAILURE: "rweb/directMessages/LEAVE_CONVERSATIONS_FAILURE" }),
                Z = E.dg(N.A7, "MARK_CONVERSATION_READ"),
                V = E.dg(N.A7, "DISABLE_MENTION_CONVERSATION_NOTIFICATIONS"),
                B = E.dg(N.A7, "DISABLE_CONVERSATION_NOTIFICATIONS"),
                F = E.dg(N.A7, "ENABLE_MENTION_CONVERSATION_NOTIFICATIONS"),
                j = E.dg(N.A7, "ENABLE_CONVERSATION_NOTIFICATIONS"),
                Y = E.dg(N.A7, "UPDATE_CONVERSATION_NAME"),
                q = E.dg(N.A7, "UPLOAD_MEDIA"),
                G = E.dg(N.A7, "UPDATE_GROUP_AVATAR"),
                H = (e, t) => t + 36e5 * e,
                k = (e) => [void 0, H(1, e), H(8, e), H(168, e)],
                Q = {};
            function K(e = Q, t) {
                if (!t) return e;
                switch (t.type) {
                    case h.SUCCESS: {
                        const { conversationId: s } = t.meta,
                            n = e[s];
                        return { ...e, [s]: { ...n, data: { ...n.data, trusted: !0 } } };
                    }
                    case Re: {
                        const s = Object.entries(t.payload || {}).reduce((t, [s, n]) => ((t[s] = { ...W(e[s], n), fetchStatus: { [p.Yj.BOTTOM]: u.ZP.LOADED, [p.Yj.TOP]: u.ZP.LOADED } }), t), {});
                        return { ...e, ...s };
                    }
                    case C: {
                        const s = t.payload;
                        return { ...e, [s]: { recipientCanNotDm: !0 } };
                    }
                    case P.REQUEST: {
                        const s = t.meta.conversationId,
                            n = e[s];
                        return { ...e, [s]: { ...n, fetchStatus: { ...n.fetchStatus, [p.Yj.TOP]: u.ZP.LOADING } } };
                    }
                    case P.FAILURE: {
                        const s = t.meta.conversationId,
                            n = e[s];
                        return { ...e, [s]: { ...n, fetchStatus: { ...n.fetchStatus, [p.Yj.TOP]: u.ZP.FAILED } } };
                    }
                    case P.SUCCESS: {
                        const s = t.meta.conversationId,
                            n = e[s],
                            a = n.data.participants,
                            r = t.payload.entities.entries ? Object.values(t.payload.entities.entries)[0].participants : [];
                        return { ...e, [s]: { ...n, fetchStatus: { ...n.fetchStatus, [p.Yj.TOP]: u.ZP.LOADED }, data: { ...n.data, participants: [...a, ...r] } } };
                    }
                    case w.REQUEST: {
                        const { conversationId: s, direction: n = p.Yj.BOTTOM } = t.meta,
                            a = e[s];
                        return { ...e, [s]: { ...a, fetchStatus: { ...((a && a.fetchStatus) || {}), [n]: u.ZP.LOADING } } };
                    }
                    case w.FAILURE: {
                        const { conversationId: s, direction: n = p.Yj.BOTTOM } = t.meta,
                            a = e[s];
                        return { ...e, [s]: { ...a, fetchStatus: { ...((a && a.fetchStatus) || {}), [n]: u.ZP.FAILED }, error: t.payload } };
                    }
                    case w.SUCCESS: {
                        const { conversationId: s, direction: n = p.Yj.BOTTOM } = t.meta,
                            a = e[s]?.data || {};
                        return { ...e, [s]: { ...e[s], data: { ...a, isSearchResultOnly: !1 }, fetchStatus: { ...((e[s] && e[s].fetchStatus) || {}), [n]: u.ZP.LOADED } } };
                    }
                    case ge:
                        return Object.entries(e).reduce((s, [n, a]) => ((s[n] = W(e[n], { last_read_event_id: t.payload })), s), {});
                    case Z.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { last_read_event_id: t.meta.lastReadEventId }) };
                    case U.SUCCESS:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { muted: t.meta.mute }) };
                    case he: {
                        const { [t.payload]: s, ...n } = e;
                        return n;
                    }
                    case L.REQUEST:
                        return { ...e, [t.meta.conversationId]: { ...e[t.meta.conversationId], isDeleted: !0 } };
                    case x.REQUEST: {
                        const s = {};
                        for (const n in t.meta.conversationsIds) Object.assign(s, { id: { ...e[n], isDeleted: !0 } });
                        return { ...e, ...s };
                    }
                    case Pe:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { notifications_disabled: !t.payload }) };
                    case B.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { notifications_disabled: !0, mute_expiration_time: k(new Date().getTime())[t.meta.duration] }) };
                    case V.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { mention_notifications_disabled: !0 }) };
                    case j.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { notifications_disabled: !1 }) };
                    case F.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { mention_notifications_disabled: !1 }) };
                    case Qe:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { avatar_image_https: t.payload }) };
                    case Y.REQUEST:
                    case Y.SUCCESS:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { name: t.meta.name }) };
                    case je: {
                        const s = e[t.meta.conversationId],
                            n = (s && s.data && s.data.max_entry_id) || "0";
                        return (0, _.T1)(t.payload, n) ? { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { max_entry_id: t.payload }) } : e;
                    }
                    case q.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { isUploading: !0 }) };
                    case q.FAILURE:
                    case q.SUCCESS:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { isUploading: !1 }) };
                    case qe:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { avatarMediaId: t.payload }) };
                    case He:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { avatarMediaId: null }) };
                    case y.t:
                        return Q;
                    default:
                        return e;
                }
            }
            const W = (e = {}, t = {}, s = []) => {
                    const { error: n, ...a } = e,
                        { avatarMediaId: r = null } = (0, i.Z)(t.avatarMediaId) ? t : a,
                        { isUploading: o = !1 } = t,
                        { avatarMediaId: d, isUploading: c, max_entry_id: E, min_entry_id: u, ...I } = t,
                        l = { ...(a && a.data), ...I };
                    !a?.data && I.isSearchResult ? (l.isSearchResultOnly = !0) : I.isSearchResult || (l.isSearchResultOnly = !1), a?.data?.labels && !I.labels ? ((l.labels = a.data.labels), (l.isPinnedOnly = !1)) : !a.data && I.labels && (l.isPinnedOnly = !0);
                    var A, p;
                    return !!I.conversation_id && !I.convo_label && delete l.convo_label, E && (l.max_entry_id = ((A = E), (p = a?.data?.max_entry_id), (0, _.KH)(A, p) ? A : p)), u && (l.min_entry_id = ((e, t) => (e && t ? ((0, _.T1)(e, t) ? t : e) : e || t))(u, a?.data?.min_entry_id)), { ...a, avatarMediaId: r, data: l, isUploading: o };
                },
                z = (e, t) => e[N.Yf].conversations[t],
                X = (e, t) => {
                    const s = z(e, t);
                    return s && s.fetchStatus ? (0, u.ke)(s.fetchStatus, s.data) : u.ZP.LOADED;
                },
                J = (e, t) => {
                    const s = z(e, t);
                    return !(!s || !s.fetchStatus || s?.data?.isSearchResultOnly || s?.data?.isPinnedOnly) && (0, u.ke)(s.fetchStatus, s.data) === u.ZP.LOADED;
                },
                $ = (e, t) => {
                    const s = z(e, t);
                    return !(!s || !s.fetchStatus) && s.fetchStatus[p.Yj.TOP] === u.ZP.LOADING;
                },
                ee = (e, t) => {
                    const s = z(e, t);
                    return !(!s || !s.fetchStatus) && s.fetchStatus[p.Yj.BOTTOM] === u.ZP.LOADING;
                },
                te = (0, n.P1)(
                    (e) => e[N.Yf].conversations,
                    (e) => Object.entries(e).reduce((e, [t, s]) => (s.data && !s.isDeleted && (e[t] = s), e), {}),
                ),
                se = (e) => Object.keys(te(e)).length > 0,
                ne = (e, t) => {
                    if (!t) return;
                    const s = J(e, t),
                        n = (0, v.g4)(e, N._2.SECONDARY),
                        a = (0, v.g4)(e, N._2.TERTIARY);
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
                        return E._O(s, { params: { conversationId: e, joinedParticipantIds: r }, request: a.withEndpoint(o.Z).addParticipants })({ actionTypes: P, context: g, meta: { conversationId: e, participantIds: t } }, (e) => {
                            if (e) {
                                const { entities: t } = e;
                                return [t.entries && (0, O.I7)(t.entries), (0, I.dP)(t)];
                            }
                        }).then((e) => {
                            const t = e.result.failed_participants;
                            if (!t) return Promise.resolve(e);
                            const s = Object.keys(t),
                                n = 1 === s.length ? t[s[0]] : c.ZP.DefaultApiError,
                                a = new d.Z("addParticpants URL", 500, e.headers, [{ code: n }]);
                            return (a.context.action = g), Promise.reject(a);
                        });
                    },
                Ee =
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
                                                if (!s[r].can_dm) return t({ payload: e, type: C });
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
                                            E = { max_entry_id: d, min_entry_id: c, status: _ },
                                            u = [D, M, f].includes(a)
                                                ? ((e = {}, t, s) => {
                                                      const n = t && s === D,
                                                          a = t && s === M;
                                                      return Object.entries(e).reduce((e, [s, r]) => {
                                                          let i;
                                                          return (i = n ? { ...r, max_search_entry_id: t?.max_entry_id, search_status: t?.status } : a ? { ...r, min_search_entry_id: t?.min_entry_id, status: t?.status } : { ...r, min_search_entry_id: t?.min_entry_id, max_search_entry_id: t?.max_entry_id, search_status: t?.status }), { ...e, [s]: i };
                                                      }, {});
                                                  })(o, E, a)
                                                : ((e = {}, t) => Object.entries(e).reduce((e, [s, n]) => ({ ...e, [s]: { ...n, ...t } }), {}))(o, E);
                                        return (0, v.s0)({ conversations: u, entries: s, users: i, tweets: r, cards: t, publishedArticles: n });
                                    }
                                };
                                return E._O(t, { params: e, request: n.withEndpoint(o.Z).fetchConversation })({ actionTypes: w, context: a, meta: { conversationId: r, direction: (0, p.Sj)(e) } }, s);
                            }
                        });
                    },
                ue =
                    (e) =>
                    (t, s, { api: n }) =>
                        E._O(t, { params: { participantIds: e }, request: n.withEndpoint(o.Z).fetchConversationFromParticipants })({ actionTypes: b, meta: { participantIds: e } }),
                Ie =
                    (e = {}) =>
                    (t, s) => {
                        const n = s(),
                            { conversationId: a } = e,
                            r = ee(n, a),
                            i = J(n, a);
                        return r || i ? Promise.resolve() : t(Ee({ conversationId: a, context: "FETCH_DM_CONVERSATION" }));
                    },
                le =
                    (e = {}) =>
                    (t, s) => {
                        const n = s(),
                            { conversationId: a } = e,
                            { data: r } = z(n, a) || {},
                            { max_search_entry_id: i } = r || {},
                            o = $(n, a),
                            d = D;
                        return i && !o ? t(Ee({ conversationId: e.conversationId, min_id: i, context: d, min_position: i })) : Promise.resolve();
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
                        const E = ee(r, i);
                        return _ !== S.To.HAS_MORE || E ? Promise.resolve() : t(Ee({ ...e, max_id: n, context: a }));
                    },
                pe =
                    (e = {}) =>
                    (t, s) => {
                        const n = s(),
                            { conversationId: a, entryId: r } = e;
                        return !$(n, a) && r ? t(Ee({ conversationId: a, min_id: r, min_buffer: 15, context: f, min_position: r })) : Promise.resolve();
                    },
                Te =
                    (e) =>
                    (t, s, { api: n }) =>
                        n
                            .withEndpoint(o.Z)
                            .fetchPermissions({ recipient_ids: e.join(",") })
                            .then(({ permissions: { id_keys: e } }) => e),
                me =
                    (e) =>
                    (t, s, { api: n }) =>
                        E._O(t, { params: { conversationId: e }, request: n.withEndpoint(o.Z).acceptConversation })({ actionTypes: h, meta: { conversationId: e } }),
                Se = (e, t) => ve(e, t, !0),
                Oe = (e, t) => ve(e, t, !1),
                ve =
                    (e, t, s) =>
                    (n, a, { api: r }) =>
                        E._O(n, { params: { userId: e, relationshipAction: s ? "mute" : "unmute", conversationId: t }, request: r.withEndpoint(o.Z).muteDMUser })({ actionTypes: U, meta: { userId: e, conversationId: t, mute: s } }).then(n(m.ZP.patchUser(e, { dm_muting: s }))),
                ye =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a } = e;
                        return E.AB(t, { params: e, request: n.withEndpoint(o.Z).leaveConversation })({ actionTypes: L, context: "ACTION_LEAVE_CONVERSATION", meta: { conversationId: a } });
                    },
                Ne =
                    (e) =>
                    (t, s, { api: n }) => {
                        const a = e.join(",");
                        return E._O(t, { params: { conversationIds: a }, request: n.withEndpoint(o.Z).deleteConversations })({ actionTypes: x, context: "LEAVE_CONVERSATIONS", meta: { conversationIds: e } }, (e) => {
                            if (!e.error) return [(0, T.fz)({ text: R })];
                        });
                    },
                Re = "rweb/directMessages/ADD_CONVERSATIONS",
                Ce = (e) => ({ payload: e, type: Re }),
                ge = "rweb/directMessages/MARK_ALL_AS_READ",
                De = (e) => ({ payload: e, type: ge }),
                Me = (e, t) => ({ type: Z.REQUEST, meta: { conversationId: e, lastReadEventId: t } }),
                fe =
                    (e) =>
                    (t, s, { api: n }) => {
                        const a = s(),
                            { data: r = {} } = z(a, e) || {},
                            { sort_event_id: i } = r,
                            d = !re(a, e);
                        if (e && i && d) {
                            return E.AB(t, { params: { conversationId: e, last_read_event_id: i }, request: n.withEndpoint(o.Z).markRead })({ actionTypes: Z, bypassFailureOnErrors: () => !0, context: "APP_DM_UPDATE_CONVERSATION_READ_STATE", meta: { conversationId: e, lastReadEventId: i } });
                        }
                        return Promise.resolve();
                    },
                he = "rweb/directMessages/REMOVE_CONVERSATION",
                Ue = (e) => [{ payload: e, type: he }, (0, O.J_)(e)],
                Pe = "rweb/directMessages/TOGGLE_CONVERSATION_NOTIFICATIONS",
                we = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Pe }),
                be =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a, duration: r } = e;
                        return E.AB(t, { params: e, request: n.withEndpoint(o.Z).disableNotifications })({ actionTypes: B, context: "ACTION_DISABLE_NOTIFICATIONS", meta: { conversationId: a, duration: r } });
                    },
                Le =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a } = e;
                        return E.AB(t, { params: e, request: n.withEndpoint(o.Z).enableNotifications })({ actionTypes: j, context: "ACTION_ENABLE_NOTIFICATIONS", meta: { conversationId: a } });
                    },
                xe =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a } = e,
                            r = { mention_notifications_disabled: !0, ...e };
                        return E.AB(t, { params: r, request: n.withEndpoint(o.Z).updateMentionNotificationsSetting })({ actionTypes: V, context: "ACTION_DISABLE_DM_MENTION_NOTIFICATIONS", meta: { conversationId: a } });
                    },
                Ze =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a } = e,
                            r = { mention_notifications_disabled: !1, ...e };
                        return E.AB(t, { params: r, request: n.withEndpoint(o.Z).updateMentionNotificationsSetting })({ actionTypes: F, context: "ACTION_ENABLE_DM_MENTION_NOTIFICATIONS", meta: { conversationId: a } });
                    },
                Ve =
                    (e = {}) =>
                    (t, s, { api: n }) =>
                        n.withEndpoint(o.Z).updateTyping(e),
                Be =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a, name: r } = e;
                        return E.AB(t, { params: e, request: n.withEndpoint(o.Z).updateConversationName })({ actionTypes: Y, context: "ACTION_UPDATE_CONVERSATION_NAME", meta: { conversationId: a, name: r } });
                    },
                Fe = (e) => ({ type: Y.SUCCESS, meta: { conversationId: e.conversation_id, name: e.conversation_name } }),
                je = "rweb/directMessages/UPDATE_CONVERSATION_MAX_ENTRY_ID",
                Ye = (e, t) => ({ meta: { conversationId: e }, payload: t, type: je }),
                qe = "rweb/directMessages/ADD_AVATAR_MEDIA",
                Ge = (e, t) => ({ meta: { conversationId: e }, payload: t, type: qe }),
                He = "rweb/directMessages/REMOVE_AVATAR_MEDIA",
                ke = (e, t) => ({ meta: { conversationId: e }, payload: t, type: He }),
                Qe = "rweb/directMessages/UPDATE_CONVERSATION_AVATAR",
                Ke = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Qe }),
                We = "APP_DM_UPDATE_CONVERSATION_AVATAR",
                ze =
                    (e) =>
                    (t, s, { api: n }) => {
                        t({ meta: { conversationId: e }, type: q.REQUEST });
                        const a = oe(s(), e),
                            r = l.$i(a);
                        return t(r).then(
                            ([s]) => {
                                t({ meta: { conversationId: e }, type: q.SUCCESS });
                                return E._O(t, { params: { conversationId: e, avatar_id: s.uploadId }, request: n.withEndpoint(o.Z).updateConversationAvatar })({ actionTypes: G, context: We });
                            },
                            (s) => {
                                const n = { errors: s, context: We };
                                return t({ meta: { conversationId: e }, type: q.FAILURE }), Promise.reject(n);
                            },
                        );
                    },
                Xe =
                    (e, t) =>
                    (s, n, { api: a }) =>
                        E.Vg(s, { params: { conversation_id: e, welcome_message_id: t }, request: a.withEndpoint(o.Z).addWelcomeMessageToConversation })("ADD_WELCOME_MESSAGE_TO_CONVERSATION");
        },
        627279: (e, t, s) => {
            s.d(t, { I7: () => D, J_: () => U, MY: () => B, Ob: () => q, WK: () => H, WO: () => f, ZP: () => v, _d: () => K, gm: () => G, gz: () => k, iN: () => Q, kv: () => w, pt: () => P, px: () => L, rU: () => j, s$: () => Z, wC: () => M, zT: () => W });
            var n = s(468811),
                a = s.n(n),
                r = s(744531),
                i = s(933277),
                o = s(973710),
                d = s(166852),
                c = s(450681),
                _ = s(948322),
                E = s(856674),
                u = s(163889),
                I = s(917799),
                l = s(275365),
                A = s(849585),
                p = s(147143);
            const T = (0, I.dg)(p.A7, "DELETE_MESSAGE"),
                m = (0, I.dg)(p.A7, "MARK_ENTRIES_AS_SPAM"),
                S = (0, I.dg)(p.A7, "MARK_ENTRIES_AS_NOT_SPAM"),
                O = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} };
            function v(e = O, t) {
                if (!t) return e;
                const { conversationId: s = t.payload?.conversation_id, requestId: n = t.payload?.id } = t.meta || {};
                switch (t.type) {
                    case b: {
                        const { id: n } = t.payload,
                            a = { ...e.entries, [n]: y(e.entries[n], { data: t.payload }) };
                        return { ...e, entries: a, entryIdsByConversationId: { ...e.entryIdsByConversationId, [s]: R([...(e.entryIdsByConversationId[s] || []), n], a) } };
                    }
                    case x: {
                        const { id: n } = t.payload,
                            a = { ...e.entries, [n]: N(e.entries[n], t.payload) };
                        return { ...e, entries: a, entryIdsByConversationId: { ...e.entryIdsByConversationId, [s]: R([...(e.entryIdsByConversationId[s] || []), n], a) } };
                    }
                    case g: {
                        const s = Object.values(t.payload)
                                .filter((e) => e.type !== l.Cr.CONVERSATION_READ)
                                .reduce(
                                    (t, s) => {
                                        "message_edit" === s.type && ((s.id = s.message_data.id), (s.type = "message"));
                                        const { id: n } = s,
                                            a = (0, r.Z)(s, "message_reactions");
                                        return (
                                            (t.allEntries[n] = y(e.entries[n], { data: a, isLoading: !1, isLoaded: !0 })),
                                            s.message_reactions &&
                                                (s.message_reactions.forEach((n) => {
                                                    const a = { ...n, affects_sort: !0, message_id: s.id, type: l.Cr.REACTION_CREATE };
                                                    t.allEntries[a.id] = y(e.entries[a.id], { data: a, isLoading: !1, isLoaded: !0 });
                                                }),
                                                (t.embeddedReactionsByMessageId[n] = R([...(e.reactionsByMessageId[n] || []), ...s.message_reactions.map((e) => e.id)], { ...e.entries, ...t.allEntries }))),
                                            t
                                        );
                                    },
                                    { allEntries: {}, embeddedReactionsByMessageId: {} },
                                ),
                            n = { ...e.entries, ...s.allEntries },
                            a = (0, i.Z)(Object.values(s.allEntries), (e) => e.data.conversation_id),
                            o = Object.keys(a).reduce((t, s) => {
                                const r = a[s].map((e) => e.data.id);
                                return (t[s] = R([...(e.entryIdsByConversationId[s] || []), ...r], n)), t;
                            }, {});
                        return { ...e, entries: n, entryIdsByConversationId: { ...e.entryIdsByConversationId, ...o }, reactionsByMessageId: { ...e.reactionsByMessageId, ...s.embeddedReactionsByMessageId } };
                    }
                    case m.REQUEST:
                    case S.REQUEST: {
                        const s = t.type === m.REQUEST,
                            n = t.payload.reduce((t, n) => {
                                const a = e.entries[n] && e.entries[n].data;
                                return { ...t, [n]: { ...e.entries[n], data: { ...a, marked_as_spam: s } } };
                            }, {});
                        return { ...e, entries: { ...e.entries, ...n } };
                    }
                    case T.REQUEST:
                    case h: {
                        const n = t.type === h && !Array.isArray(t.payload),
                            a = e.entryIdsByConversationId[s] || [],
                            i = t.type === h ? (n ? a : t.payload) : [t.payload, ...(e.reactionsByMessageId[t.payload] || [])];
                        return { ...e, entries: (0, r.Z)(e.entries, i), entryIdsByConversationId: { ...(0, r.Z)(e.entryIdsByConversationId, s), ...(n ? {} : { [s]: (0, o.Z)(a, i) }) }, reactionsByMessageId: (0, r.Z)(e.reactionsByMessageId, i) };
                    }
                    case V: {
                        const a = t.payload.id || n,
                            i = { ...(0, r.Z)(e.entries, a) },
                            o = R(
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
                        n.length !== a.length && (0, u.ZP)("DM add reaction is missing a backing entry", { extra: { filteredMessageReactionIds: a, messageReactionIds: n, currentId: s.id } });
                        const r = R(a, e.entries);
                        return { ...e, reactionsByMessageId: { ...e.reactionsByMessageId, [s.message_id]: r } };
                    }
                    case Y: {
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
            const y = (e, t) => {
                    const { error: s, isLoaded: n, isLoading: a, ...r } = e || {},
                        { data: i, ...o } = t || {};
                    return { ...r, data: { ...(r && r.data), ...i }, ...o };
                },
                N = (e, t) => {
                    const { data: s, ...n } = e || {};
                    return { ...n, data: { ...s, message_data: t } };
                },
                R = (e = [], t) => {
                    const s = (0, d.Z)(e).sort((e, s) => {
                        const n = (0, E.ZP)(t[e].data.time, t[s].data.time);
                        return 0 === n ? (0, E.ZP)(t[e].id, t[s].id) : n;
                    });
                    return s.length ? s : void 0;
                },
                C = (e, t, s, n) => ({ id: a().v1(), time: new Date().getTime().toString(), emoji_reaction: n, reaction_key: "Emoji", conversation_id: e, message_id: t, sender_id: s }),
                g = "rweb/directMessages/ADD_ENTRIES",
                D = (e) => ({ payload: e, type: g }),
                M =
                    (...e) =>
                    (t, s, { api: n }) => {
                        const a = C(...e);
                        return t([L(a.conversation_id, a.id, a), q(a), j(a)]);
                    },
                f =
                    (...e) =>
                    (t, s, { api: n }) => {
                        const a = C(...e);
                        return t([q(a)]);
                    },
                h = "rweb/dm/REMOVE_CONVERSATION_ENTRIES",
                U = (e, t) => ({ meta: { conversationId: e }, payload: t, type: h }),
                P = (e, t) => ({ payload: e, type: t ? m.REQUEST : S.REQUEST }),
                w =
                    ({ conversationId: e, dmId: t, markSpam: s }) =>
                    (n, a, { api: r }) =>
                        (0, I.AB)(n, { params: { dm_id: t, report_as: s ? "spam" : "not_spam" }, request: r.withEndpoint(_.Z).reportSpam })({ actionTypes: s ? T : S, payload: s ? t : [t], meta: { conversationId: e } }),
                b = "rweb/directMessages/ADD_ENTRY",
                L = (e, t, s) => ({ meta: { conversationId: e, requestId: t }, payload: s, type: b }),
                x = "rweb/directMessages/EDIT_ENTRY",
                Z = (e, t, s) => ({ meta: { conversationId: e, requestId: t }, payload: s, type: x }),
                V = "rweb/directMessages/REMOVE_ENTRY",
                B = (e, t, s) => ({ meta: { conversationId: e, requestId: t }, payload: s, type: V }),
                F = "rweb/directMessages/ADD_REACTION",
                j = (e) => ({ payload: { ...e, type: l.Cr.REACTION_CREATE }, type: F }),
                Y = "rweb/directMessages/DELETE_REACTION",
                q = ({ emoji_reaction: e, reaction_key: t, ...s }) => ({ payload: { ...s, type: l.Cr.REACTION_DELETE }, type: Y }),
                G = (e) => e[p.Yf].entries,
                H = (e, t) => {
                    const s = G(e).entries[t];
                    return s && s.data;
                },
                k = (e, t) => e[p.Yf].entries.entryIdsByConversationId[t],
                Q = (e, t) => {
                    const s = k(e, t);
                    return s ? (0, c.Z)(s.map((t) => H(e, t))) : [];
                },
                K = (e, t) => G(e).reactionsByMessageId[t],
                W = (e, t) => (K(e, t) || []).map((t) => H(e, t).sender_id);
        },
        720277: (e, t, s) => {
            s.d(t, { $7: () => se, A4: () => ne, B7: () => D, C2: () => K, Gk: () => h, Kf: () => Z, MB: () => w, Oq: () => Y, Pt: () => M, Re: () => j, Sb: () => B, UD: () => U, Z3: () => V, ZI: () => q, ZP: () => v, aB: () => f, g4: () => x, gN: () => R, j7: () => X, k5: () => F, kK: () => z, kL: () => ae, oH: () => Q, s0: () => te, vC: () => J, xS: () => P });
            var n = s(161821),
                a = s(401388),
                r = s(948322),
                i = s(856674),
                o = s(234296),
                d = s(917799),
                c = s(312771),
                _ = s(56519),
                E = s(38562),
                u = s(275365),
                I = s(613195),
                l = s(627279),
                A = s(849585),
                p = s(923965),
                T = s(147143);
            const m = d.dg(T.A7, "FETCH_INBOX"),
                S = d.dg(T.A7, "UPDATE_LAST_SEEN_EVENT_ID"),
                O = { cursors: { [T.xR.Inbox]: { fetchStatus: c.ZP.NONE }, [T.xR.Trusted]: { fetchStatus: c.ZP.NONE }, [T.xR.Untrusted]: { fetchStatus: c.ZP.NONE }, [T.xR.UntrustedLowQuality]: { fetchStatus: c.ZP.NONE } }, lastSeenEventIds: {} };
            function v(e = O, t) {
                if (!t) return e;
                switch (t.type) {
                    case m.REQUEST: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], fetchStatus: c.ZP.LOADING } } };
                    }
                    case m.FAILURE: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], error: t.payload, fetchStatus: c.ZP.FAILED } } };
                    }
                    case m.SUCCESS: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], error: void 0, fetchStatus: c.ZP.LOADED } } };
                    }
                    case $:
                        return { ...e, cursors: { ...e.cursors, ...t.payload.cursors }, lastSeenEventIds: y(e.lastSeenEventIds, t.payload.lastSeenEventIds) };
                    case S.REQUEST:
                        return { ...e, lastSeenEventIds: { ...e.lastSeenEventIds, ...t.meta.lastSeenEventIds } };
                    case A.t:
                        return { ...O, cursors: { ...O.cursors, inbox: e.cursors.inbox } };
                    default:
                        return e;
                }
            }
            const y = (e, t) => ({ last_seen_event_id: N(e.last_seen_event_id, t.last_seen_event_id), trusted_last_seen_event_id: N(e.trusted_last_seen_event_id, t.trusted_last_seen_event_id), untrusted_last_seen_event_id: N(e.untrusted_last_seen_event_id, t.untrusted_last_seen_event_id) }),
                N = (e, t) => ((0, i.KH)(e, t) ? e : t),
                R = (e, t, s = "all") => {
                    const n = (0, E.Kp)(t),
                        a = (0, E.Rh)(t);
                    return n ? { ...e, filter_low_quality: a, include_quality: s } : e;
                },
                C = (e) => e[T.Yf].inbox,
                g = (e) => C(e).cursors,
                D = (e) => C(e).lastSeenEventIds,
                M = (e) => g(e)[T.xR.Inbox],
                f = (e) => g(e)[T.xR.Untrusted],
                h = (e) => g(e)[T.xR.UntrustedLowQuality],
                U = (e) => M(e).fetchStatus,
                P = (e) => U(e) === c.ZP.LOADING,
                w = (e) => U(e) === c.ZP.LOADED,
                b = { [T._2.PRIMARY]: (e) => e.trusted, [T._2.SECONDARY]: (e, t, s) => (t ? !(e.trusted || e.muted || (s && e.nsfw) || e.low_quality) : !(e.trusted || e.muted || (s && e.nsfw))), [T._2.TERTIARY]: (e, t, s) => (t ? !e.trusted && (e.muted || e.low_quality || (s && e.nsfw)) : !e.trusted && (e.muted || (s && e.nsfw))) },
                L = (e, t) => {
                    const s = (0, E.Rh)(e),
                        a = (0, E.a5)(e);
                    return (0, n.Z)((0, I.FS)(e)).filter((e) => b[t](e.data, s, a));
                },
                x = (e, t) =>
                    L(e, t)
                        .map((e) => e.data)
                        .sort(o.Z)
                        .map((e) => e.conversation_id),
                Z = (e) =>
                    L(e, T._2.PRIMARY)
                        .filter((e) => e?.data?.labels && e?.data?.labels?.find((e) => e.label_type === T.w1.PINNED))
                        .sort(o.l)
                        .map((e) => e?.data?.conversation_id),
                V = (e, { tag: t }) =>
                    L(e, T._2.PRIMARY)
                        .filter((e) => e?.data?.tag?.value && e.data.tag.value === t?.value)
                        .map((e) => e?.data?.conversation_id),
                B = (e) => {
                    const t = L(e, T._2.PRIMARY),
                        s = L(e, T._2.SECONDARY),
                        n = t.concat(s),
                        { last_seen_event_id: a } = D(e);
                    return G(e, n, a);
                },
                F = (e) => {
                    const t = L(e, T._2.SECONDARY),
                        { untrusted_last_seen_event_id: s } = D(e);
                    return G(e, t, s);
                },
                j = (e) => {
                    let t = 0,
                        s = 0,
                        n = 0,
                        a = 0;
                    const r = L(e, T._2.SECONDARY),
                        { untrusted_last_seen_event_id: i } = D(e);
                    return (
                        r.forEach((r) => {
                            const o = r.data?.conversation_id,
                                d = i && H(e, o, i),
                                c = k(r?.data?.social_proof);
                            d ? (c ? (t += 1) : (n += 1)) : c ? (s += 1) : (a += 1);
                        }),
                        { newUntrustedWithSocialProof: t, oldUntrustedWithSocialProof: s, newUntrustedWithoutSocialProof: n, oldUntrustedWithoutSocialProof: a }
                    );
                },
                Y = (e) => {
                    const t = L(e, T._2.SECONDARY),
                        s = L(e, T._2.TERTIARY);
                    return t.length + s.length;
                },
                q = (e) => L(e, T._2.TERTIARY).length,
                G = (e, t, s) => (s ? t.reduce((t, { data: { conversation_id: n } }) => (H(e, n, s) ? t + 1 : t), 0) : 0),
                H = (e, t, s) => {
                    const n = (0, I.gq)(e, t),
                        a = (0, I.jT)(e, t);
                    return !!n && (0, i.T1)(n, s) && !a;
                },
                k = (e) => {
                    if (!e || 0 === e.length) return !1;
                    const t = e[0];
                    return t.proof_type === u.UN.MUTUAL_FRIENDS && 0 !== t.total;
                },
                Q =
                    (e = {}) =>
                    (t, s, { api: n, featureSwitches: a }) => {
                        const i = s(),
                            o = (0, E.a5)(i),
                            c = R({ nsfw_filtering_enabled: o, ...e }, s());
                        return d._O(t, { params: c, request: n.withEndpoint(r.Z).fetchUserInbox })({ actionTypes: m, context: "FETCH_DM_INBOX", meta: { timelineType: T.xR.Inbox } }, (e) => {
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
                            a = U(n);
                        return a !== c.ZP.LOADED && a !== c.ZP.LOADING ? t(Q(e)) : Promise.resolve();
                    },
                W =
                    (e, t, s = 0) =>
                    (n, a, { api: i }) => {
                        const o = a(),
                            c = (0, E.a5)(o),
                            { min_entry_id: _, status: I } = g(o)[e],
                            l = e === T.xR.UntrustedLowQuality ? T.xR.Untrusted : e,
                            A = { ...t, max_id: _, timelineType: l, nsfw_filtering_enabled: c };
                        if (I !== u.To.HAS_MORE) return Promise.resolve();
                        return d
                            ._O(n, { params: A, request: i.withEndpoint(r.Z).fetchInboxHistory })({ actionTypes: m, context: "FETCH_DM_INBOX_HISTORY", meta: { timelineType: e } }, (t) => {
                                if (t) {
                                    const { cards: s, entries: n, publishedArticles: a, tweets: r, users: i } = t.entities,
                                        { inbox_timeline: o } = t.result;
                                    return te({ conversations: o.conversations, inbox_timelines: { [e]: o }, entries: n, users: i, tweets: r, cards: s, publishedArticles: a });
                                }
                            })
                            .then((a) => {
                                const r = a.result.inbox_timeline;
                                if (s < 3 && !r.conversations && r.status === u.To.HAS_MORE) return n(W(e, t, s + 1));
                            });
                    },
                z = (e) => (t, s) => {
                    const n = R(e, s(), "high");
                    return t(W(T.xR.Untrusted, n));
                },
                X = (e) => (t, s) => {
                    const n = R(e, s(), "low");
                    return t(W(T.xR.UntrustedLowQuality, n));
                },
                J = (e) => (t, s) => {
                    const n = R(e, s());
                    return t(W(T.xR.Trusted, n));
                },
                $ = "rweb/directMessages/UPDATE_INBOX",
                ee = (e) => {
                    const { inbox_timelines: t, ...s } = e;
                    return { payload: { cursors: t, lastSeenEventIds: s }, type: $ };
                },
                te = (e = {}) => {
                    const { cards: t, conversations: s, cursor: n, entries: r, publishedArticles: i, tweets: o, users: d, ...c } = e;
                    return [(0, _.dP)({ cards: t, tweets: o, users: d, publishedArticles: i }), !(0, a.Z)(s) && (0, I.tw)(s), !(0, a.Z)(r) && (0, l.I7)(r), !(0, a.Z)(n) && (0, p.NJ)(n), !(0, a.Z)(c) && ee(c)].filter((e) => e);
                },
                se = () => (e) => e(ae({ withTrusted: !0 })),
                ne = () => (e) => e(ae({ withUntrusted: !0 })),
                ae =
                    ({ withTrusted: e, withUntrusted: t } = {}) =>
                    (s, n, { api: a }) => {
                        const o = n(),
                            c = (0, I.FS)(o),
                            _ = D(o),
                            { last_seen_event_id: E, trusted_last_seen_event_id: u, untrusted_last_seen_event_id: l } = _,
                            A = Object.values(c).reduce((e, { data: { sort_event_id: t, trusted: s } }) => ((e.last_seen_event_id = N(e.last_seen_event_id, t)), (e.trusted_last_seen_event_id = s ? N(e.trusted_last_seen_event_id, t) : e.trusted_last_seen_event_id), (e.untrusted_last_seen_event_id = s ? e.untrusted_last_seen_event_id : N(e.untrusted_last_seen_event_id, t)), e), { ..._ });
                        if ((0, i.T1)(A.last_seen_event_id, E) || (e && (0, i.T1)(A.trusted_last_seen_event_id, u)) || (t && (0, i.T1)(A.untrusted_last_seen_event_id, l))) {
                            e || delete A.trusted_last_seen_event_id, t || delete A.untrusted_last_seen_event_id;
                            return d.AB(s, { params: A, request: a.withEndpoint(r.Z).updateLastSeenEventId })({ actionTypes: S, context: "APP_DM_UPDATE_LAST_SEEN", meta: { lastSeenEventIds: A } });
                        }
                        return Promise.resolve();
                    };
        },
        849585: (e, t, s) => {
            s.d(t, { m: () => a, t: () => n });
            const n = "rweb/directMessages/RESET",
                a = () => ({ type: n });
        },
        923965: (e, t, s) => {
            s.d(t, { H_: () => l, NJ: () => O, ZP: () => p, f9: () => T, hd: () => m, o8: () => R });
            var n = s(948322),
                a = s(917799),
                r = s(390387),
                i = s(38562),
                o = s(877848),
                d = s(275365),
                c = s(613195),
                _ = s(627279),
                E = s(720277),
                u = s(849585),
                I = s(147143);
            const l = a.dg(I.A7, "FETCH_UPDATES"),
                A = { isLoaded: !1, isLoading: !1 };
            function p(e = A, t) {
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
                    case S:
                        return { ...e, cursor: t.payload };
                    case v:
                        return { ...e, tertiaryInboxStatus: t.payload };
                    case u.t:
                        return A;
                    default:
                        return e;
                }
            }
            const T =
                    (e) =>
                    (t, s, { api: d }) => {
                        const c = s(),
                            { directMessages: _ = {} } = c;
                        let { cursor: I } = _.updates || {};
                        const { polling: A, ...p } = e || {},
                            { tertiaryInboxStatus: T } = _.updates || {};
                        let m = !1;
                        const S = A ? { "x-twitter-polling": "true" } : {},
                            O = (0, i.a5)(c);
                        if (window.location.pathname.startsWith("/i/report")) return Promise.resolve();
                        const v = [(0, i.Kp)(s()) ? "on" : "off", O ? "on" : "off"].join();
                        T ? T !== v && ((I = null), (m = !0)) : (m = !0);
                        const R = (0, E.gN)({ ...p, nsfw_filtering_enabled: O, cursor: I }, s());
                        return a._O(t, { params: R, headers: S, request: d.withEndpoint(n.Z).fetchUserUpdates })({ actionTypes: l, context: "FETCH_DM_USER_UPDATES", meta: { direction: (0, o.Sj)(e) } }, (e) => {
                            if (e) {
                                const { cards: t, entries: s, publishedArticles: n, tweets: a, users: i } = e.entities,
                                    { inbox_initial_state: o, user_events: d } = e.result;
                                return [o && (0, u.m)(), ...(0, E.s0)({ ...(d || o), entries: s, users: i, tweets: a, cards: t, publishedArticles: n }), ...(d ? N(Object.values(s || []), r._h(c)) : []), m && y(v)];
                            }
                        });
                    },
                m = (e) => (t, s) => (C(s()) ? Promise.resolve() : t(T(e))),
                S = "rweb/directMessages/UPDATE_CURSOR",
                O = (e) => ({ payload: e, type: S }),
                v = "rweb/directMessages/UPDATE_TERTIARY_INBOX_STATUS",
                y = (e) => ({ payload: e, type: v }),
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
                R = (e) => e[I.Yf].updates,
                C = (e) => R(e).isLoading;
        },
        147143: (e, t, s) => {
            s.d(t, { A7: () => a, Yf: () => n, _2: () => i, w1: () => r, xR: () => o });
            const n = "directMessages",
                a = `rweb/${n}`,
                r = Object.freeze({ PINNED: "Pinned", REPLY_LATER: "ReplyLater" }),
                i = Object.freeze({ PRIMARY: "primary", SECONDARY: "secondary", TERTIARY: "tertiary" }),
                o = { Inbox: "inbox", Trusted: "trusted", Untrusted: "untrusted", UntrustedLowQuality: "untrusted_low_quality" };
        },
        798538: (e, t, s) => {
            s.d(t, { Ah: () => w, Bw: () => g, De: () => j, E4: () => R, G6: () => f, Hd: () => S, Tu: () => b, W8: () => U, bG: () => O, m1: () => V, q9: () => P, qK: () => D, rA: () => x, vb: () => y });
            s(136728);
            var n = s(468811),
                a = s.n(n),
                r = s(364837),
                i = s(450681),
                o = s(184605),
                d = s(948322),
                c = s(705079),
                _ = s(499627),
                E = s(917799),
                u = s(627279),
                I = s(720277),
                l = s(923965),
                A = s(497294);
            const p = "dmComposer",
                T = {};
            const m = (e) => {
                    const { conversation_id: t, id: s, localMediaId: n, recipient_ids: a, sender_id: r, text: i, attachment: o = {}, error: d } = e,
                        c = Date.now().toString();
                    return { conversation_id: t, recipient_ids: a, error: d, id: s, is_draft: !0, message_data: { attachment: o, localMediaId: n, sender_id: r, text: i, time: c }, type: "message", time: c };
                },
                S =
                    (e) =>
                    (t, s, { api: n }) => {
                        const { conversationId: r, requestId: o = a().v1(), messageId: c } = e || {},
                            _ = { conversationId: r, requestId: o, messageId: c, text: e.text };
                        return n
                            .withEndpoint(d.Z)
                            .editMessage(_, {})
                            .then((e) => {
                                const { message_data: s } = e.result,
                                    n = (0, i.Z)([{ type: "rweb/dmComposer/EDIT_MESSAGE_SUCCESS" }, r && (0, u.s$)(r, o, s || {})]);
                                t(n);
                            });
                    },
                O =
                    (e) =>
                    (t, s, { api: n }) => {
                        const { allowVideoDownload: _, senderId: p, cardUrl: T, conversationId: S, localMediaId: O, recipients: v = [], requestId: y = a().v1(), tweetAttachment: N, quickReply: R, text: C, replyToDmId: D } = e || {};
                        t(q(S));
                        const M = s();
                        let f = O || h(s(), S);
                        null === f && (f = []);
                        const [U] = A.m3(M, f),
                            { mediaFile: P, mediaMetadata: w } = U || {},
                            L = v.length > 0 && v.join(","),
                            x = {};
                        P && P.isGif ? (x.extraInitParams = "&media_category=dm_gif") : P && P.isVideo && (x.extraInitParams = "&media_category=dm_video");
                        const Z = A.$i(f, x),
                            V = [t(Z)],
                            B = b(M, S),
                            { found_media_origin: F } = B || {};
                        return (
                            P && P.isGif && V.push((0, r.R)(P)),
                            Promise.all(V).then(
                                ([[s], a]) => {
                                    const r = w?.altText || w?.defaultAltText || "",
                                        O = !!r;
                                    let v;
                                    (F || O) && (v = { media_id: s.uploadId, found_media_origin: F, ...(!!O && { alt_text: { text: r || "" } }) }), P?.isVideo && _ && (v = { media_id: s.uploadId, allow_download_status: { allow_download: "true" } });
                                    return (s && v ? t(A.o6(v)) : Promise.resolve()).then(
                                        () => {
                                            const { id_str: r } = N || {},
                                                _ = {};
                                            if (s) {
                                                const { mediaFile: e = {} } = s,
                                                    t = { original_info: { width: e.width, height: e.height }, sizes: [{ h: e.height, w: e.width, resize: "fit" }] };
                                                e.isImage ? (_.photo = { ...t, media_url_https: e.url }) : e.isGif ? (_.animated_gif = { ...t, media_url_https: a, type: "animated_gif" }) : e.isVideo && (_.video = { ...t, media_url_https: e.url, type: "video" });
                                            } else N && (_.tweet = { status: r });
                                            const { uploadId: A } = s || {},
                                                O = m({ attachment: _, conversation_id: S, error: !1, id: y, localMediaId: null, recipient_ids: L, sender_id: p, text: C }),
                                                v = { ...((0, c.s)(T) && { card_uri: T }), conversation_id: S, ...(!r && { media_id: A }), recipient_ids: L, request_id: y, reply_to_dm_id: D, text: e.text, tweet_id: r };
                                            R && ((v["quick_reply_response[options][id]"] = R.id), (v["quick_reply_response[options][selected_id]"] = R.selected_id));
                                            const M = (0, i.Z)([H(S), { type: l.H_.REQUEST }, { type: "rweb/dmComposer/SEND_MESSAGE_REQUEST" }, S && (0, u.px)(S, y, O)]);
                                            return (
                                                t(M),
                                                n
                                                    .withEndpoint(d.Z)
                                                    .sendMessage(v)
                                                    .then(
                                                        (s) => {
                                                            const { cards: n, entries: a, publishedArticles: r, tweets: d, users: c } = s.entities,
                                                                { conversations: _ } = s.result;
                                                            (0, o.Z)(f) && t(j(S, f));
                                                            const E = (0, i.Z)([{ type: l.H_.SUCCESS }, ...(0, I.s0)({ conversations: _, entries: a, users: c, tweets: d, cards: n, publishedArticles: r }), { type: "rweb/dmComposer/SEND_MESSAGE_SUCCESS" }, S && (0, u.MY)(S, y, e), g(S)]);
                                                            t(E);
                                                            const A = Object.values(s.entities.entries)[0].conversation_id;
                                                            return Promise.resolve({ conversationId: A });
                                                        },
                                                        (e) => {
                                                            const s = m({ attachment: _, conversation_id: S, error: !0, id: y, localMediaId: f, recipient_ids: L, sender_id: p, text: C }),
                                                                n = (0, i.Z)([{ type: l.H_.SUCCESS }, { type: "rweb/dmComposer/SEND_MESSAGE_FAILURE" }, S && (0, u.px)(S, y, s)]);
                                                            return t(n), (0, E.Vm)(t, e, "ACTION_SEND_DM");
                                                        },
                                                    )
                                            );
                                        },
                                        (e) => (t(Q(S)), (e.type = "metadata"), Promise.reject(e)),
                                    );
                                },
                                (e) => (t((0, i.Z)([(0, o.Z)(f) && j(S, f), Q(S)])), Promise.reject(e)),
                            )
                        );
                    },
                v = (e, t) => e[p][t],
                y = (e, t) => {
                    const s = v(e, t);
                    return s ? s.text : null;
                },
                N = "rweb/dmComposer/SAVE_TEXT",
                R = (e, t) => ({ type: N, conversationId: e, text: t }),
                C = "rweb/dmComposer/REMOVE_TEXT",
                g = (e) => ({ type: C, conversationId: e }),
                D = (e, t) => {
                    const s = v(e, t);
                    return s ? s.cardUrl : null;
                },
                M = "rweb/dmComposer/SAVE_CARD_URL",
                f = (e, t) => ({ type: M, conversationId: e, cardUrl: t }),
                h = (e, t) => {
                    const s = v(e, t);
                    return s && void 0 !== s.mediaId ? s.mediaId : null;
                },
                U = (e, t) => {
                    const s = A.m3(e, h(e, t) || []);
                    return s.length > 0 ? s[0] : null;
                },
                P = (e, t) => {
                    const s = v(e, t);
                    return !!s && s.isUploading;
                },
                w = (e, t) => A._T(e, h(e, t) || 0),
                b = (e, t) => {
                    const s = v(e, t);
                    return s && s.gifMetadata ? s.gifMetadata : null;
                },
                L = "rweb/dmComposer/ADD_MEDIA",
                x = (e, [t], s) => ({ payload: { isUploading: !1, mediaId: t, gifMetadata: s }, type: L, conversationId: e }),
                Z = "rweb/dmComposer/CANCEL_UPLOAD",
                V = (e) => ({ type: Z, conversationId: e }),
                B = "rweb/dmComposer/REMOVE_MEDIA",
                F = (e) => ({ type: B, conversationId: e }),
                j = (e, t) => (s) => {
                    s(A.WU(t)), s([V(e), F(e)]);
                },
                Y = "rweb/dmComposer/UPLOAD_REQUEST",
                q = (e) => ({ type: Y, conversationId: e }),
                G = "rweb/dmComposer/UPLOAD_SUCCESS",
                H = (e) => ({ type: G, conversationId: e }),
                k = "rweb/dmComposer/UPLOAD_FAILURE",
                Q = (e) => ({ type: k, conversationId: e });
            _.Z.register({
                [p]: function (e = T, t) {
                    if (!t) return e;
                    const s = t.conversationId || "new_group",
                        n = e[s] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null };
                    switch (t.type) {
                        case L:
                            return { ...e, [s]: { ...n, ...t.payload } };
                        case Y:
                            return { ...e, [s]: { ...n, isUploading: !0 } };
                        case Z:
                            return { ...e, [s]: { ...n, isUploading: !1 } };
                        case k:
                        case G:
                        case B:
                            return { ...e, [s]: { ...n, isUploading: !1, mediaId: null, gifMetadata: void 0 } };
                        case N:
                            return { ...e, [s]: { ...n, text: t.text } };
                        case M:
                            return { ...e, [s]: { ...n, cardUrl: t.cardUrl } };
                        case C:
                            return { ...e, [s]: { ...n, text: null } };
                        default:
                            return e;
                    }
                },
            });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-50b6b1eb.1eeb7e6a.js.map
