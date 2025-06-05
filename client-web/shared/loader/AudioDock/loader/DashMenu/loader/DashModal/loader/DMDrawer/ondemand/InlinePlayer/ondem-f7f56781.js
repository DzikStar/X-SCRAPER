"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"],
    {
        275365: (e, t, s) => {
            s.d(t, { BU: () => _, Cr: () => r, To: () => a, UN: () => d, eD: () => n, td: () => i, v1: () => o });
            const n = Object.freeze({ ONE_TO_ONE: "ONE_TO_ONE", GROUP: "GROUP_DM", SECRET_ONE_TO_ONE: "SECRET_ONE_TO_ONE" }),
                a = Object.freeze({ AT_END: "AT_END", HAS_MORE: "HAS_MORE" }),
                r = Object.freeze({ CONVERSATION_AVATAR_UPDATE: "conversation_avatar_update", CONVERSATION_NAME_UPDATE: "conversation_name_update", CONVERSATION_PROFILE_INFO_HEADER: "conversation_profile_info_header", CONVERSATION_READ: "conversation_read", CONVO_METADATA_UPDATE: "convo_metadata_update", DELEGATE_ALERT_BANNER: "delegate_alert_banner", DISABLE_NOTIFICATIONS: "disable_notifications", ENABLE_NOTIFICATIONS: "enable_notifications", END_AV_BROADCAST: "end_av_broadcast", ENCRYPTED_CONVERSATION: "encrypted_conversation", JOIN_CONVERSATION: "join_conversation", LOADING_INDICATOR: "loading_indicator", MARK_ALL_AS_READ: "mark_all_as_read", MENTION_NOTIFICATIONS_UPDATE: "mention_notifications_setting_update", MESSAGE: "message", MESSAGE_DELETE: "message_delete", MESSAGE_MARK_AS_NOT_SPAM: "message_unmark_as_spam", MESSAGE_MARK_AS_SPAM: "message_mark_as_spam", NEW_MESSAGES_DIVIDER: "new_messages_divider", PARTICIPANTS_JOIN: "participants_join", PARTICIPANTS_LEAVE: "participants_leave", REACTION_CREATE: "reaction_create", REACTION_DELETE: "reaction_delete", READ_ONLY_INDICATOR: "read_only_indicator", REMOVE_CONVERSATION: "remove_conversation", TRUST_CONVERSATION: "trust_conversation", TYPING_INDICATOR: "typing_indicator", WELCOME_MESSAGE: "welcome_message_create" }),
                i = Object.freeze({ MISSED: "MISSED", CANCELED: "CANCELED", DECLINED: "DECLINED", HUNG_UP: "HUNG_UP", TIMED_OUT: "TIMED_OUT" }),
                o = Object.freeze({ AUDIO_ONLY: "AUDIO_ONLY", VIDEO: "VIDEO" }),
                d = Object.freeze({ MUTUAL_FRIENDS: "mutual_friends" }),
                _ = Object.freeze({ UNINITIATED: "UNINITIATED", EXISTING: "EXISTING", DEVICE_NOT_A_MEMBER: "DEVICE_NOT_A_MEMBER" });
        },
        182991: (e, t, s) => {
            s.d(t, { x: () => a });
            var n = s(147143);
            const a = (e, t) => (e[n.Yf] ? e[n.Yf].conversations[t] : null);
        },
        613195: (e, t, s) => {
            s.d(t, { $S: () => be, Ae: () => Pe, Ap: () => Ze, BW: () => Be, Be: () => le, Ek: () => Ye, FI: () => xe, FS: () => te, GP: () => ve, Ke: () => Fe, OF: () => ie, OW: () => Ae, PZ: () => Le, Pr: () => X, Qe: () => Xe, S9: () => ye, SF: () => Me, UA: () => _e, Um: () => Ee, W: () => de, X5: () => ze, Xw: () => ke, ZP: () => K, Zg: () => ne, _D: () => qe, aG: () => oe, ax: () => se, ck: () => ce, d0: () => ge, dq: () => we, gQ: () => J, gq: () => ae, jT: () => re, lT: () => Ve, nI: () => Ke, qH: () => Ne, qg: () => Se, sA: () => Ie, sS: () => ue, sj: () => pe, tF: () => Oe, tw: () => Ce, v3: () => fe, wm: () => Te, xu: () => z });
            var n = s(24949),
                a = s(111677),
                r = s.n(a),
                i = s(184605),
                o = s(948322),
                d = s(88656),
                _ = s(615656),
                c = s(856674),
                E = s(917799),
                u = s(312771),
                I = s(56519),
                A = s(497294),
                l = s(390387),
                T = s(877848),
                S = s(601576),
                O = s(919022),
                p = s(275365),
                v = s(627279),
                m = s(720277),
                N = s(849585),
                y = s(147143);
            const R = r().fb4ee2f6,
                C = "rweb/directMessages/conversation/SET_RECIPIENT_CAN_NOT_DM",
                D = "ACTION_DM_ADD_PARTICIPANTS",
                M = "FETCH_DM_CONVERSATION_FUTURE",
                f = "FETCH_DM_CONVERSATION_RELATIVE_HISTORY",
                g = "FETCH_DM_CONVERSATION_HISTORICAL_SNAPSHOT",
                h = E.dg(y.A7, "ACCEPT_CONVERSATION"),
                P = E.dg(y.A7, "MUTE_DM_USER"),
                U = E.dg(y.A7, "ADD_PARTICIPANTS"),
                b = E.dg(y.A7, "FETCH_CONVERSATION"),
                w = E.dg(y.A7, "FETCH_CONVERSATION_FROM_PARTICIPANTS"),
                L = E.dg(y.A7, "LEAVE_CONVERSATION"),
                B = Object.freeze({ REQUEST: "rweb/directMessages/LEAVE_CONVERSATIONS_REQUEST", SUCCESS: "rweb/directMessages/LEAVE_CONVERSATIONS_SUCCESS", FAILURE: "rweb/directMessages/LEAVE_CONVERSATIONS_FAILURE" }),
                Z = E.dg(y.A7, "MARK_CONVERSATION_READ"),
                V = E.dg(y.A7, "DISABLE_MENTION_CONVERSATION_NOTIFICATIONS"),
                x = E.dg(y.A7, "DISABLE_CONVERSATION_NOTIFICATIONS"),
                F = E.dg(y.A7, "ENABLE_MENTION_CONVERSATION_NOTIFICATIONS"),
                j = E.dg(y.A7, "ENABLE_CONVERSATION_NOTIFICATIONS"),
                Y = E.dg(y.A7, "UPDATE_CONVERSATION_NAME"),
                G = E.dg(y.A7, "UPLOAD_MEDIA"),
                q = E.dg(y.A7, "UPDATE_GROUP_AVATAR"),
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
                        const s = Object.entries(t.payload || {}).reduce((t, [s, n]) => ((t[s] = { ...W(e[s], n), fetchStatus: { [T.Yj.BOTTOM]: u.ZP.LOADED, [T.Yj.TOP]: u.ZP.LOADED } }), t), {});
                        return { ...e, ...s };
                    }
                    case C: {
                        const s = t.payload;
                        return { ...e, [s]: { recipientCanNotDm: !0 } };
                    }
                    case U.REQUEST: {
                        const s = t.meta.conversationId,
                            n = e[s];
                        return { ...e, [s]: { ...n, fetchStatus: { ...n.fetchStatus, [T.Yj.TOP]: u.ZP.LOADING } } };
                    }
                    case U.FAILURE: {
                        const s = t.meta.conversationId,
                            n = e[s];
                        return { ...e, [s]: { ...n, fetchStatus: { ...n.fetchStatus, [T.Yj.TOP]: u.ZP.FAILED } } };
                    }
                    case U.SUCCESS: {
                        const s = t.meta.conversationId,
                            n = e[s],
                            a = n.data.participants,
                            r = t.payload.entities.entries ? Object.values(t.payload.entities.entries)[0].participants : [];
                        return { ...e, [s]: { ...n, fetchStatus: { ...n.fetchStatus, [T.Yj.TOP]: u.ZP.LOADED }, data: { ...n.data, participants: [...a, ...r] } } };
                    }
                    case b.REQUEST: {
                        const { conversationId: s, direction: n = T.Yj.BOTTOM } = t.meta,
                            a = e[s];
                        return { ...e, [s]: { ...a, fetchStatus: { ...((a && a.fetchStatus) || {}), [n]: u.ZP.LOADING } } };
                    }
                    case b.FAILURE: {
                        const { conversationId: s, direction: n = T.Yj.BOTTOM } = t.meta,
                            a = e[s];
                        return { ...e, [s]: { ...a, fetchStatus: { ...((a && a.fetchStatus) || {}), [n]: u.ZP.FAILED }, error: t.payload } };
                    }
                    case b.SUCCESS: {
                        const { conversationId: s, direction: n = T.Yj.BOTTOM } = t.meta,
                            a = e[s]?.data || {};
                        return { ...e, [s]: { ...e[s], data: { ...a, isSearchResultOnly: !1 }, fetchStatus: { ...((e[s] && e[s].fetchStatus) || {}), [n]: u.ZP.LOADED } } };
                    }
                    case De:
                        return Object.entries(e).reduce((s, [n, a]) => ((s[n] = W(e[n], { last_read_event_id: t.payload })), s), {});
                    case Z.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { last_read_event_id: t.meta.lastReadEventId }) };
                    case P.SUCCESS:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { muted: t.meta.mute }) };
                    case he: {
                        const { [t.payload]: s, ...n } = e;
                        return n;
                    }
                    case L.REQUEST:
                        return { ...e, [t.meta.conversationId]: { ...e[t.meta.conversationId], isDeleted: !0 } };
                    case B.REQUEST: {
                        const s = {};
                        for (const n in t.meta.conversationsIds) Object.assign(s, { id: { ...e[n], isDeleted: !0 } });
                        return { ...e, ...s };
                    }
                    case Ue:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { notifications_disabled: !t.payload }) };
                    case x.REQUEST:
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
                        return (0, c.T1)(t.payload, n) ? { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { max_entry_id: t.payload }) } : e;
                    }
                    case G.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { isUploading: !0 }) };
                    case G.FAILURE:
                    case G.SUCCESS:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { isUploading: !1 }) };
                    case Ge:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { avatarMediaId: t.payload }) };
                    case He:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { avatarMediaId: null }) };
                    case N.t:
                        return Q;
                    default:
                        return e;
                }
            }
            const W = (e = {}, t = {}, s = []) => {
                    const { error: n, ...a } = e,
                        { avatarMediaId: r = null } = (0, i.Z)(t.avatarMediaId) ? t : a,
                        { isUploading: o = !1 } = t,
                        { avatarMediaId: d, isUploading: _, max_entry_id: E, min_entry_id: u, ...I } = t,
                        A = { ...(a && a.data), ...I };
                    !a?.data && I.isSearchResult ? (A.isSearchResultOnly = !0) : I.isSearchResult || (A.isSearchResultOnly = !1), a?.data?.labels && !I.labels ? ((A.labels = a.data.labels), (A.isPinnedOnly = !1)) : !a.data && I.labels && (A.isPinnedOnly = !0);
                    var l, T;
                    return !!I.conversation_id && !I.convo_label && delete A.convo_label, E && (A.max_entry_id = ((l = E), (T = a?.data?.max_entry_id), (0, c.KH)(l, T) ? l : T)), u && (A.min_entry_id = ((e, t) => (e && t ? ((0, c.T1)(e, t) ? t : e) : e || t))(u, a?.data?.min_entry_id)), { ...a, avatarMediaId: r, data: A, isUploading: o };
                },
                z = (e, t) => e[y.Yf].conversations[t],
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
                    return !(!s || !s.fetchStatus) && s.fetchStatus[T.Yj.TOP] === u.ZP.LOADING;
                },
                ee = (e, t) => {
                    const s = z(e, t);
                    return !(!s || !s.fetchStatus) && s.fetchStatus[T.Yj.BOTTOM] === u.ZP.LOADING;
                },
                te = (0, n.P1)(
                    (e) => e[y.Yf].conversations,
                    (e) => Object.entries(e).reduce((e, [t, s]) => (s.data && !s.isDeleted && (e[t] = s), e), {}),
                ),
                se = (e) => Object.keys(te(e)).length > 0,
                ne = (e, t) => {
                    if (!t) return;
                    const s = J(e, t),
                        n = (0, m.g4)(e, y._2.SECONDARY),
                        a = (0, m.g4)(e, y._2.TERTIARY);
                    return s ? (n.includes(t) ? y._2.SECONDARY : a.includes(t) ? y._2.TERTIARY : y._2.PRIMARY) : void 0;
                },
                ae = (e, t) => {
                    const { data: s } = z(e, t) || {},
                        { sort_event_id: n } = s || {};
                    if (n) {
                        const t = l._h(e),
                            { by_user_id: s, id: a, message_data: r, sender_id: i } = (0, v.WK)(e, n) || {};
                        if ((i && i !== t) || (r && r.sender_id !== t) || (s && s !== t)) return a;
                    }
                    return null;
                },
                re = (e, t) => {
                    const s = ae(e, t),
                        { data: n } = z(e, t) || {};
                    return !s || !!(n && n.last_read_event_id && (0, c.KH)(n.last_read_event_id, s));
                },
                ie = (e, { conversationId: t }) => !!e[y.Yf]?.conversations[t]?.recipientCanNotDm,
                oe = (e, t) => {
                    const { avatarMediaId: s } = z(e, t) || {};
                    return s;
                },
                de = (e, t) => {
                    const { isUploading: s } = z(e, t) || {};
                    return s;
                },
                _e = (e, t) => A._T(e, oe(e, t)),
                ce =
                    (e, t) =>
                    (s, n, { api: a }) => {
                        const r = t.join(",");
                        return E._O(s, { params: { conversationId: e, joinedParticipantIds: r }, request: a.withEndpoint(o.Z).addParticipants })({ actionTypes: U, context: D, meta: { conversationId: e, participantIds: t } }, (e) => {
                            if (e) {
                                const { entities: t } = e;
                                return [t.entries && (0, v.I7)(t.entries), (0, I.dP)(t)];
                            }
                        }).then((e) => {
                            const t = e.result.failed_participants;
                            if (!t) return Promise.resolve(e);
                            const s = Object.keys(t),
                                n = 1 === s.length ? t[s[0]] : _.ZP.DefaultApiError,
                                a = new d.Z("addParticpants URL", 500, e.headers, [{ code: n }]);
                            return (a.context.action = D), Promise.reject(a);
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
                                        const a = l._h(s()),
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
                                            { conversations: o, max_entry_id: d, min_entry_id: _, status: c } = e.result.conversation_timeline,
                                            E = { max_entry_id: d, min_entry_id: _, status: c },
                                            u = [M, f, g].includes(a)
                                                ? ((e = {}, t, s) => {
                                                      const n = t && s === M,
                                                          a = t && s === f;
                                                      return Object.entries(e).reduce((e, [s, r]) => {
                                                          let i;
                                                          return (i = n ? { ...r, max_search_entry_id: t?.max_entry_id, search_status: t?.status } : a ? { ...r, min_search_entry_id: t?.min_entry_id, status: t?.status } : { ...r, min_search_entry_id: t?.min_entry_id, max_search_entry_id: t?.max_entry_id, search_status: t?.status }), { ...e, [s]: i };
                                                      }, {});
                                                  })(o, E, a)
                                                : ((e = {}, t) => Object.entries(e).reduce((e, [s, n]) => ({ ...e, [s]: { ...n, ...t } }), {}))(o, E);
                                        return (0, m.s0)({ conversations: u, entries: s, users: i, tweets: r, cards: t, publishedArticles: n });
                                    }
                                };
                                return E._O(t, { params: e, request: n.withEndpoint(o.Z).fetchConversation })({ actionTypes: b, context: a, meta: { conversationId: r, direction: (0, T.Sj)(e) } }, s);
                            }
                        });
                    },
                ue =
                    (e) =>
                    (t, s, { api: n }) =>
                        E._O(t, { params: { participantIds: e }, request: n.withEndpoint(o.Z).fetchConversationFromParticipants })({ actionTypes: w, meta: { participantIds: e } }),
                Ie =
                    (e = {}) =>
                    (t, s) => {
                        const n = s(),
                            { conversationId: a } = e,
                            r = ee(n, a),
                            i = J(n, a);
                        return r || i ? Promise.resolve() : t(Ee({ conversationId: a, context: "FETCH_DM_CONVERSATION" }));
                    },
                Ae =
                    (e = {}) =>
                    (t, s) => {
                        const n = s(),
                            { conversationId: a } = e,
                            { data: r } = z(n, a) || {},
                            { max_search_entry_id: i } = r || {},
                            o = $(n, a),
                            d = M;
                        return i && !o ? t(Ee({ conversationId: e.conversationId, min_id: i, context: d, min_position: i })) : Promise.resolve();
                    },
                le =
                    (e = {}) =>
                    (t, s) => {
                        let n, a;
                        const r = s(),
                            { conversationId: i } = e,
                            { data: o } = z(r, i) || {},
                            { min_entry_id: d, min_search_entry_id: _, status: c } = o || {};
                        e?.isSearch ? ((a = "FETCH_DM_CONVERSATION_RELATIVE_HISTORY"), (n = _)) : ((a = "FETCH_DM_CONVERSATION_HISTORY"), (n = d));
                        const E = ee(r, i);
                        return c !== p.To.HAS_MORE || E ? Promise.resolve() : t(Ee({ ...e, max_id: n, context: a }));
                    },
                Te =
                    (e = {}) =>
                    (t, s) => {
                        const n = s(),
                            { conversationId: a, entryId: r } = e;
                        return !$(n, a) && r ? t(Ee({ conversationId: a, min_id: r, min_buffer: 15, context: g, min_position: r })) : Promise.resolve();
                    },
                Se =
                    (e) =>
                    (t, s, { api: n }) =>
                        n
                            .withEndpoint(o.Z)
                            .fetchPermissions({ recipient_ids: e.join(",") })
                            .then(({ permissions: { id_keys: e } }) => e),
                Oe =
                    (e) =>
                    (t, s, { api: n }) =>
                        E._O(t, { params: { conversationId: e }, request: n.withEndpoint(o.Z).acceptConversation })({ actionTypes: h, meta: { conversationId: e } }),
                pe = (e, t) => me(e, t, !0),
                ve = (e, t) => me(e, t, !1),
                me =
                    (e, t, s) =>
                    (n, a, { api: r }) =>
                        E._O(n, { params: { userId: e, relationshipAction: s ? "mute" : "unmute", conversationId: t }, request: r.withEndpoint(o.Z).muteDMUser })({ actionTypes: P, meta: { userId: e, conversationId: t, mute: s } }).then(n(O.ZP.patchUser(e, { dm_muting: s }))),
                Ne =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a } = e;
                        return E.AB(t, { params: e, request: n.withEndpoint(o.Z).leaveConversation })({ actionTypes: L, context: "ACTION_LEAVE_CONVERSATION", meta: { conversationId: a } });
                    },
                ye =
                    (e) =>
                    (t, s, { api: n }) => {
                        const a = e.join(",");
                        return E._O(t, { params: { conversationIds: a }, request: n.withEndpoint(o.Z).deleteConversations })({ actionTypes: B, context: "LEAVE_CONVERSATIONS", meta: { conversationIds: e } }, (e) => {
                            if (!e.error) return [(0, S.fz)({ text: R })];
                        });
                    },
                Re = "rweb/directMessages/ADD_CONVERSATIONS",
                Ce = (e) => ({ payload: e, type: Re }),
                De = "rweb/directMessages/MARK_ALL_AS_READ",
                Me = (e) => ({ payload: e, type: De }),
                fe = (e, t) => ({ type: Z.REQUEST, meta: { conversationId: e, lastReadEventId: t } }),
                ge =
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
                Pe = (e) => [{ payload: e, type: he }, (0, v.J_)(e)],
                Ue = "rweb/directMessages/TOGGLE_CONVERSATION_NOTIFICATIONS",
                be = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Ue }),
                we =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a, duration: r } = e;
                        return E.AB(t, { params: e, request: n.withEndpoint(o.Z).disableNotifications })({ actionTypes: x, context: "ACTION_DISABLE_NOTIFICATIONS", meta: { conversationId: a, duration: r } });
                    },
                Le =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a } = e;
                        return E.AB(t, { params: e, request: n.withEndpoint(o.Z).enableNotifications })({ actionTypes: j, context: "ACTION_ENABLE_NOTIFICATIONS", meta: { conversationId: a } });
                    },
                Be =
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
                xe =
                    (e = {}) =>
                    (t, s, { api: n }) => {
                        const { conversationId: a, name: r } = e;
                        return E.AB(t, { params: e, request: n.withEndpoint(o.Z).updateConversationName })({ actionTypes: Y, context: "ACTION_UPDATE_CONVERSATION_NAME", meta: { conversationId: a, name: r } });
                    },
                Fe = (e) => ({ type: Y.SUCCESS, meta: { conversationId: e.conversation_id, name: e.conversation_name } }),
                je = "rweb/directMessages/UPDATE_CONVERSATION_MAX_ENTRY_ID",
                Ye = (e, t) => ({ meta: { conversationId: e }, payload: t, type: je }),
                Ge = "rweb/directMessages/ADD_AVATAR_MEDIA",
                qe = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Ge }),
                He = "rweb/directMessages/REMOVE_AVATAR_MEDIA",
                ke = (e, t) => ({ meta: { conversationId: e }, payload: t, type: He }),
                Qe = "rweb/directMessages/UPDATE_CONVERSATION_AVATAR",
                Ke = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Qe }),
                We = "APP_DM_UPDATE_CONVERSATION_AVATAR",
                ze =
                    (e) =>
                    (t, s, { api: n }) => {
                        t({ meta: { conversationId: e }, type: G.REQUEST });
                        const a = oe(s(), e),
                            r = A.$i(a);
                        return t(r).then(
                            ([s]) => {
                                t({ meta: { conversationId: e }, type: G.SUCCESS });
                                return E._O(t, { params: { conversationId: e, avatar_id: s.uploadId }, request: n.withEndpoint(o.Z).updateConversationAvatar })({ actionTypes: q, context: We });
                            },
                            (s) => {
                                const n = { errors: s, context: We };
                                return t({ meta: { conversationId: e }, type: G.FAILURE }), Promise.reject(n);
                            },
                        );
                    },
                Xe =
                    (e, t) =>
                    (s, n, { api: a }) =>
                        E.Vg(s, { params: { conversation_id: e, welcome_message_id: t }, request: a.withEndpoint(o.Z).addWelcomeMessageToConversation })("ADD_WELCOME_MESSAGE_TO_CONVERSATION");
        },
        627279: (e, t, s) => {
            s.d(t, { I7: () => M, J_: () => P, MY: () => x, Ob: () => G, WK: () => H, WO: () => g, ZP: () => m, _d: () => K, gm: () => q, gz: () => k, iN: () => Q, kv: () => b, pt: () => U, px: () => L, rU: () => j, s$: () => Z, wC: () => f, zT: () => W });
            var n = s(468811),
                a = s.n(n),
                r = s(744531),
                i = s(933277),
                o = s(973710),
                d = s(166852),
                _ = s(450681),
                c = s(948322),
                E = s(856674),
                u = s(163889),
                I = s(917799),
                A = s(275365),
                l = s(849585),
                T = s(147143);
            const S = (0, I.dg)(T.A7, "DELETE_MESSAGE"),
                O = (0, I.dg)(T.A7, "MARK_ENTRIES_AS_SPAM"),
                p = (0, I.dg)(T.A7, "MARK_ENTRIES_AS_NOT_SPAM"),
                v = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} };
            function m(e = v, t) {
                if (!t) return e;
                const { conversationId: s = t.payload?.conversation_id, requestId: n = t.payload?.id } = t.meta || {};
                switch (t.type) {
                    case w: {
                        const { id: n } = t.payload,
                            a = { ...e.entries, [n]: N(e.entries[n], { data: t.payload }) };
                        return { ...e, entries: a, entryIdsByConversationId: { ...e.entryIdsByConversationId, [s]: R([...(e.entryIdsByConversationId[s] || []), n], a) } };
                    }
                    case B: {
                        const { id: n } = t.payload,
                            a = { ...e.entries, [n]: y(e.entries[n], t.payload) };
                        return { ...e, entries: a, entryIdsByConversationId: { ...e.entryIdsByConversationId, [s]: R([...(e.entryIdsByConversationId[s] || []), n], a) } };
                    }
                    case D: {
                        const s = Object.values(t.payload)
                                .filter((e) => e.type !== A.Cr.CONVERSATION_READ)
                                .reduce(
                                    (t, s) => {
                                        "message_edit" === s.type && ((s.id = s.message_data.id), (s.type = "message"));
                                        const { id: n } = s,
                                            a = (0, r.Z)(s, "message_reactions");
                                        return (
                                            (t.allEntries[n] = N(e.entries[n], { data: a, isLoading: !1, isLoaded: !0 })),
                                            s.message_reactions &&
                                                (s.message_reactions.forEach((n) => {
                                                    const a = { ...n, affects_sort: !0, message_id: s.id, type: A.Cr.REACTION_CREATE };
                                                    t.allEntries[a.id] = N(e.entries[a.id], { data: a, isLoading: !1, isLoaded: !0 });
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
                    case O.REQUEST:
                    case p.REQUEST: {
                        const s = t.type === O.REQUEST,
                            n = t.payload.reduce((t, n) => {
                                const a = e.entries[n] && e.entries[n].data;
                                return { ...t, [n]: { ...e.entries[n], data: { ...a, marked_as_spam: s } } };
                            }, {});
                        return { ...e, entries: { ...e.entries, ...n } };
                    }
                    case S.REQUEST:
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
                    case l.t:
                        return v;
                    default:
                        return e;
                }
            }
            const N = (e, t) => {
                    const { error: s, isLoaded: n, isLoading: a, ...r } = e || {},
                        { data: i, ...o } = t || {};
                    return { ...r, data: { ...(r && r.data), ...i }, ...o };
                },
                y = (e, t) => {
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
                D = "rweb/directMessages/ADD_ENTRIES",
                M = (e) => ({ payload: e, type: D }),
                f =
                    (...e) =>
                    (t, s, { api: n }) => {
                        const a = C(...e);
                        return t([L(a.conversation_id, a.id, a), G(a), j(a)]);
                    },
                g =
                    (...e) =>
                    (t, s, { api: n }) => {
                        const a = C(...e);
                        return t([G(a)]);
                    },
                h = "rweb/dm/REMOVE_CONVERSATION_ENTRIES",
                P = (e, t) => ({ meta: { conversationId: e }, payload: t, type: h }),
                U = (e, t) => ({ payload: e, type: t ? O.REQUEST : p.REQUEST }),
                b =
                    ({ conversationId: e, dmId: t, markSpam: s }) =>
                    (n, a, { api: r }) =>
                        (0, I.AB)(n, { params: { dm_id: t, report_as: s ? "spam" : "not_spam" }, request: r.withEndpoint(c.Z).reportSpam })({ actionTypes: s ? S : p, payload: s ? t : [t], meta: { conversationId: e } }),
                w = "rweb/directMessages/ADD_ENTRY",
                L = (e, t, s) => ({ meta: { conversationId: e, requestId: t }, payload: s, type: w }),
                B = "rweb/directMessages/EDIT_ENTRY",
                Z = (e, t, s) => ({ meta: { conversationId: e, requestId: t }, payload: s, type: B }),
                V = "rweb/directMessages/REMOVE_ENTRY",
                x = (e, t, s) => ({ meta: { conversationId: e, requestId: t }, payload: s, type: V }),
                F = "rweb/directMessages/ADD_REACTION",
                j = (e) => ({ payload: { ...e, type: A.Cr.REACTION_CREATE }, type: F }),
                Y = "rweb/directMessages/DELETE_REACTION",
                G = ({ emoji_reaction: e, reaction_key: t, ...s }) => ({ payload: { ...s, type: A.Cr.REACTION_DELETE }, type: Y }),
                q = (e) => e[T.Yf].entries,
                H = (e, t) => {
                    const s = q(e).entries[t];
                    return s && s.data;
                },
                k = (e, t) => e[T.Yf].entries.entryIdsByConversationId[t],
                Q = (e, t) => {
                    const s = k(e, t);
                    return s ? (0, _.Z)(s.map((t) => H(e, t))) : [];
                },
                K = (e, t) => q(e).reactionsByMessageId[t],
                W = (e, t) => (K(e, t) || []).map((t) => H(e, t).sender_id);
        },
        720277: (e, t, s) => {
            s.d(t, { $7: () => se, A4: () => ne, B7: () => M, C2: () => K, Gk: () => h, Kf: () => Z, MB: () => b, Oq: () => Y, Pt: () => f, Re: () => j, Sb: () => x, UD: () => P, Z3: () => V, ZI: () => G, ZP: () => m, aB: () => g, g4: () => B, gN: () => R, j7: () => X, k5: () => F, kK: () => z, kL: () => ae, oH: () => Q, s0: () => te, vC: () => J, xS: () => U });
            var n = s(161821),
                a = s(401388),
                r = s(948322),
                i = s(856674),
                o = s(234296),
                d = s(917799),
                _ = s(312771),
                c = s(56519),
                E = s(38562),
                u = s(275365),
                I = s(613195),
                A = s(627279),
                l = s(849585),
                T = s(923965),
                S = s(147143);
            const O = d.dg(S.A7, "FETCH_INBOX"),
                p = d.dg(S.A7, "UPDATE_LAST_SEEN_EVENT_ID"),
                v = { cursors: { [S.xR.Inbox]: { fetchStatus: _.ZP.NONE }, [S.xR.Trusted]: { fetchStatus: _.ZP.NONE }, [S.xR.Untrusted]: { fetchStatus: _.ZP.NONE }, [S.xR.UntrustedLowQuality]: { fetchStatus: _.ZP.NONE } }, lastSeenEventIds: {} };
            function m(e = v, t) {
                if (!t) return e;
                switch (t.type) {
                    case O.REQUEST: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], fetchStatus: _.ZP.LOADING } } };
                    }
                    case O.FAILURE: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], error: t.payload, fetchStatus: _.ZP.FAILED } } };
                    }
                    case O.SUCCESS: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], error: void 0, fetchStatus: _.ZP.LOADED } } };
                    }
                    case $:
                        return { ...e, cursors: { ...e.cursors, ...t.payload.cursors }, lastSeenEventIds: N(e.lastSeenEventIds, t.payload.lastSeenEventIds) };
                    case p.REQUEST:
                        return { ...e, lastSeenEventIds: { ...e.lastSeenEventIds, ...t.meta.lastSeenEventIds } };
                    case l.t:
                        return { ...v, cursors: { ...v.cursors, inbox: e.cursors.inbox } };
                    default:
                        return e;
                }
            }
            const N = (e, t) => ({ last_seen_event_id: y(e.last_seen_event_id, t.last_seen_event_id), trusted_last_seen_event_id: y(e.trusted_last_seen_event_id, t.trusted_last_seen_event_id), untrusted_last_seen_event_id: y(e.untrusted_last_seen_event_id, t.untrusted_last_seen_event_id) }),
                y = (e, t) => ((0, i.KH)(e, t) ? e : t),
                R = (e, t, s = "all") => {
                    const n = (0, E.Kp)(t),
                        a = (0, E.Rh)(t);
                    return n ? { ...e, filter_low_quality: a, include_quality: s } : e;
                },
                C = (e) => e[S.Yf].inbox,
                D = (e) => C(e).cursors,
                M = (e) => C(e).lastSeenEventIds,
                f = (e) => D(e)[S.xR.Inbox],
                g = (e) => D(e)[S.xR.Untrusted],
                h = (e) => D(e)[S.xR.UntrustedLowQuality],
                P = (e) => f(e).fetchStatus,
                U = (e) => P(e) === _.ZP.LOADING,
                b = (e) => P(e) === _.ZP.LOADED,
                w = { [S._2.PRIMARY]: (e) => e.trusted, [S._2.SECONDARY]: (e, t, s) => (t ? !(e.trusted || e.muted || (s && e.nsfw) || e.low_quality) : !(e.trusted || e.muted || (s && e.nsfw))), [S._2.TERTIARY]: (e, t, s) => (t ? !e.trusted && (e.muted || e.low_quality || (s && e.nsfw)) : !e.trusted && (e.muted || (s && e.nsfw))) },
                L = (e, t) => {
                    const s = (0, E.Rh)(e),
                        a = (0, E.a5)(e);
                    return (0, n.Z)((0, I.FS)(e)).filter((e) => w[t](e.data, s, a));
                },
                B = (e, t) =>
                    L(e, t)
                        .map((e) => e.data)
                        .sort(o.Z)
                        .map((e) => e.conversation_id),
                Z = (e) =>
                    L(e, S._2.PRIMARY)
                        .filter((e) => e?.data?.labels && e?.data?.labels?.find((e) => e.label_type === S.w1.PINNED))
                        .sort(o.l)
                        .map((e) => e?.data?.conversation_id),
                V = (e, { tag: t }) =>
                    L(e, S._2.PRIMARY)
                        .filter((e) => e?.data?.tag?.value && e.data.tag.value === t?.value)
                        .map((e) => e?.data?.conversation_id),
                x = (e) => {
                    const t = L(e, S._2.PRIMARY),
                        s = L(e, S._2.SECONDARY),
                        n = t.concat(s),
                        { last_seen_event_id: a } = M(e);
                    return q(e, n, a);
                },
                F = (e) => {
                    const t = L(e, S._2.SECONDARY),
                        { untrusted_last_seen_event_id: s } = M(e);
                    return q(e, t, s);
                },
                j = (e) => {
                    let t = 0,
                        s = 0,
                        n = 0,
                        a = 0;
                    const r = L(e, S._2.SECONDARY),
                        { untrusted_last_seen_event_id: i } = M(e);
                    return (
                        r.forEach((r) => {
                            const o = r.data?.conversation_id,
                                d = i && H(e, o, i),
                                _ = k(r?.data?.social_proof);
                            d ? (_ ? (t += 1) : (n += 1)) : _ ? (s += 1) : (a += 1);
                        }),
                        { newUntrustedWithSocialProof: t, oldUntrustedWithSocialProof: s, newUntrustedWithoutSocialProof: n, oldUntrustedWithoutSocialProof: a }
                    );
                },
                Y = (e) => {
                    const t = L(e, S._2.SECONDARY),
                        s = L(e, S._2.TERTIARY);
                    return t.length + s.length;
                },
                G = (e) => L(e, S._2.TERTIARY).length,
                q = (e, t, s) => (s ? t.reduce((t, { data: { conversation_id: n } }) => (H(e, n, s) ? t + 1 : t), 0) : 0),
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
                            _ = R({ nsfw_filtering_enabled: o, ...e }, s());
                        return d._O(t, { params: _, request: n.withEndpoint(r.Z).fetchUserInbox })({ actionTypes: O, context: "FETCH_DM_INBOX", meta: { timelineType: S.xR.Inbox } }, (e) => {
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
                        return a !== _.ZP.LOADED && a !== _.ZP.LOADING ? t(Q(e)) : Promise.resolve();
                    },
                W =
                    (e, t, s = 0) =>
                    (n, a, { api: i }) => {
                        const o = a(),
                            _ = (0, E.a5)(o),
                            { min_entry_id: c, status: I } = D(o)[e],
                            A = e === S.xR.UntrustedLowQuality ? S.xR.Untrusted : e,
                            l = { ...t, max_id: c, timelineType: A, nsfw_filtering_enabled: _ };
                        if (I !== u.To.HAS_MORE) return Promise.resolve();
                        return d
                            ._O(n, { params: l, request: i.withEndpoint(r.Z).fetchInboxHistory })({ actionTypes: O, context: "FETCH_DM_INBOX_HISTORY", meta: { timelineType: e } }, (t) => {
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
                    return t(W(S.xR.Untrusted, n));
                },
                X = (e) => (t, s) => {
                    const n = R(e, s(), "low");
                    return t(W(S.xR.UntrustedLowQuality, n));
                },
                J = (e) => (t, s) => {
                    const n = R(e, s());
                    return t(W(S.xR.Trusted, n));
                },
                $ = "rweb/directMessages/UPDATE_INBOX",
                ee = (e) => {
                    const { inbox_timelines: t, ...s } = e;
                    return { payload: { cursors: t, lastSeenEventIds: s }, type: $ };
                },
                te = (e = {}) => {
                    const { cards: t, conversations: s, cursor: n, entries: r, publishedArticles: i, tweets: o, users: d, ..._ } = e;
                    return [(0, c.dP)({ cards: t, tweets: o, users: d, publishedArticles: i }), !(0, a.Z)(s) && (0, I.tw)(s), !(0, a.Z)(r) && (0, A.I7)(r), !(0, a.Z)(n) && (0, T.NJ)(n), !(0, a.Z)(_) && ee(_)].filter((e) => e);
                },
                se = () => (e) => e(ae({ withTrusted: !0 })),
                ne = () => (e) => e(ae({ withUntrusted: !0 })),
                ae =
                    ({ withTrusted: e, withUntrusted: t } = {}) =>
                    (s, n, { api: a }) => {
                        const o = n(),
                            _ = (0, I.FS)(o),
                            c = M(o),
                            { last_seen_event_id: E, trusted_last_seen_event_id: u, untrusted_last_seen_event_id: A } = c,
                            l = Object.values(_).reduce((e, { data: { sort_event_id: t, trusted: s } }) => ((e.last_seen_event_id = y(e.last_seen_event_id, t)), (e.trusted_last_seen_event_id = s ? y(e.trusted_last_seen_event_id, t) : e.trusted_last_seen_event_id), (e.untrusted_last_seen_event_id = s ? e.untrusted_last_seen_event_id : y(e.untrusted_last_seen_event_id, t)), e), { ...c });
                        if ((0, i.T1)(l.last_seen_event_id, E) || (e && (0, i.T1)(l.trusted_last_seen_event_id, u)) || (t && (0, i.T1)(l.untrusted_last_seen_event_id, A))) {
                            e || delete l.trusted_last_seen_event_id, t || delete l.untrusted_last_seen_event_id;
                            return d.AB(s, { params: l, request: a.withEndpoint(r.Z).updateLastSeenEventId })({ actionTypes: p, context: "APP_DM_UPDATE_LAST_SEEN", meta: { lastSeenEventIds: l } });
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
            s.d(t, { H_: () => A, NJ: () => v, ZP: () => T, f9: () => S, hd: () => O, o8: () => R });
            var n = s(948322),
                a = s(917799),
                r = s(390387),
                i = s(38562),
                o = s(877848),
                d = s(275365),
                _ = s(613195),
                c = s(627279),
                E = s(720277),
                u = s(849585),
                I = s(147143);
            const A = a.dg(I.A7, "FETCH_UPDATES"),
                l = { isLoaded: !1, isLoading: !1 };
            function T(e = l, t) {
                if (!t) return e;
                switch (t.type) {
                    case A.REQUEST:
                        return { ...e, isLoading: !0 };
                    case A.FAILURE:
                        return { ...e, error: t.payload, isLoaded: !1, isLoading: !1 };
                    case A.SUCCESS: {
                        const { error: t, ...s } = e;
                        return { ...s, isLoaded: !0, isLoading: !1 };
                    }
                    case p:
                        return { ...e, cursor: t.payload };
                    case m:
                        return { ...e, tertiaryInboxStatus: t.payload };
                    case u.t:
                        return l;
                    default:
                        return e;
                }
            }
            const S =
                    (e) =>
                    (t, s, { api: d }) => {
                        const _ = s(),
                            { directMessages: c = {} } = _;
                        let { cursor: I } = c.updates || {};
                        const { polling: l, ...T } = e || {},
                            { tertiaryInboxStatus: S } = c.updates || {};
                        let O = !1;
                        const p = l ? { "x-twitter-polling": "true" } : {},
                            v = (0, i.a5)(_);
                        if (window.location.pathname.startsWith("/i/report")) return Promise.resolve();
                        const m = [(0, i.Kp)(s()) ? "on" : "off", v ? "on" : "off"].join();
                        S ? S !== m && ((I = null), (O = !0)) : (O = !0);
                        const R = (0, E.gN)({ ...T, nsfw_filtering_enabled: v, cursor: I }, s());
                        return a._O(t, { params: R, headers: p, request: d.withEndpoint(n.Z).fetchUserUpdates })({ actionTypes: A, context: "FETCH_DM_USER_UPDATES", meta: { direction: (0, o.Sj)(e) } }, (e) => {
                            if (e) {
                                const { cards: t, entries: s, publishedArticles: n, tweets: a, users: i } = e.entities,
                                    { inbox_initial_state: o, user_events: d } = e.result;
                                return [o && (0, u.m)(), ...(0, E.s0)({ ...(d || o), entries: s, users: i, tweets: a, cards: t, publishedArticles: n }), ...(d ? y(Object.values(s || []), r._h(_)) : []), O && N(m)];
                            }
                        });
                    },
                O = (e) => (t, s) => (C(s()) ? Promise.resolve() : t(S(e))),
                p = "rweb/directMessages/UPDATE_CURSOR",
                v = (e) => ({ payload: e, type: p }),
                m = "rweb/directMessages/UPDATE_TERTIARY_INBOX_STATUS",
                N = (e) => ({ payload: e, type: m }),
                y = (e = [], t) =>
                    e
                        .sort((e, t) => e.id - t.id)
                        .reduce((e, s) => {
                            switch (s.type) {
                                case d.Cr.CONVERSATION_AVATAR_UPDATE:
                                    return [...e, (0, _.nI)(s.conversation_id, s.conversation_avatar_image_https), (0, _.Ek)(s.conversation_id, s.id)].filter((e) => e);
                                case d.Cr.CONVERSATION_NAME_UPDATE:
                                    return [...e, (0, _.Ke)(s), (0, _.Ek)(s.conversation_id, s.id)].filter((e) => e);
                                case d.Cr.CONVERSATION_READ:
                                    return [...e, (0, _.v3)(s.conversation_id, s.last_read_event_id)];
                                case d.Cr.DISABLE_NOTIFICATIONS:
                                case d.Cr.ENABLE_NOTIFICATIONS: {
                                    const t = s.type === d.Cr.ENABLE_NOTIFICATIONS;
                                    return [...e, (0, _.$S)(s.conversation_id, t)];
                                }
                                case d.Cr.MARK_ALL_AS_READ:
                                    return [...e, (0, _.SF)(s.last_read_event_id)];
                                case d.Cr.MESSAGE_DELETE:
                                    return [
                                        ...e,
                                        (0, c.J_)(
                                            s.conversation_id,
                                            s.messages.reduce((e, t) => [...e, ...Object.values(t)], []),
                                        ),
                                    ];
                                case d.Cr.MESSAGE_MARK_AS_NOT_SPAM:
                                case d.Cr.MESSAGE_MARK_AS_SPAM: {
                                    const t = s.type === d.Cr.MESSAGE_MARK_AS_SPAM;
                                    return [
                                        ...e,
                                        (0, c.pt)(
                                            s.messages.reduce((e, t) => [...e, ...Object.values(t)], []),
                                            t,
                                        ),
                                    ];
                                }
                                case d.Cr.REMOVE_CONVERSATION:
                                    return [...e, ...(0, _.Ae)(s.conversation_id)];
                                case d.Cr.JOIN_CONVERSATION:
                                case d.Cr.PARTICIPANTS_JOIN:
                                case d.Cr.PARTICIPANTS_LEAVE:
                                    return [...e, (0, _.Ek)(s.conversation_id, s.id)];
                                case d.Cr.REACTION_CREATE:
                                    return [e]
                                        .concat(t !== s.sender_id && [(0, c.Ob)(s), (0, c.rU)(s)])
                                        .concat((0, _.Ek)(s.conversation_id, s.id))
                                        .filter(Boolean);
                                case d.Cr.REACTION_DELETE:
                                    return [...e, (0, c.Ob)(s)];
                                case d.Cr.MESSAGE:
                                    return [...e, (0, _.Ek)(s.conversation_id, s.id)].filter((e) => e);
                                default:
                                    return e;
                            }
                        }, []),
                R = (e) => e[I.Yf].updates,
                C = (e) => R(e).isLoading;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781.ed6066ca.js.map
