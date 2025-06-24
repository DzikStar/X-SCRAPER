"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GifSearch-8ed0fac5"],
    {
        234296: (e, t, a) => {
            a.d(t, { Z: () => i, l: () => r });
            var n = a(147143),
                s = a(856674);
            const r = (e, t) => {
                    const a = e.data?.labels?.find((e) => e.label_type === n.w1.PINNED)?.timestamp,
                        s = t.data?.labels?.find((e) => e.label_type === n.w1.PINNED)?.timestamp;
                    return a ? (s ? a - s : -1) : 1;
                },
                i = ({ sort_event_id: e }, { sort_event_id: t }) => (e ? (t ? (0, s.ZP)(t, e) : 1) : -1);
        },
        511985: (e, t, a) => {
            a.d(t, { AD: () => n, Qy: () => r, _f: () => i, zH: () => s });
            const n = Object.freeze({ Composition: "composition", DMComposition: "dm_composition", NoteComposition: "note_composition" }),
                s = 500,
                r = (e) => Object.values(n).indexOf(e) >= 0,
                i = (e, t) => ("boolean" == typeof e ? e : t);
        },
        275365: (e, t, a) => {
            a.d(t, { BU: () => c, Cr: () => r, To: () => s, UN: () => d, eD: () => n, td: () => i, v1: () => o });
            const n = Object.freeze({ ONE_TO_ONE: "ONE_TO_ONE", GROUP: "GROUP_DM", SECRET_ONE_TO_ONE: "SECRET_ONE_TO_ONE" }),
                s = Object.freeze({ AT_END: "AT_END", HAS_MORE: "HAS_MORE" }),
                r = Object.freeze({ CONVERSATION_AVATAR_UPDATE: "conversation_avatar_update", CONVERSATION_NAME_UPDATE: "conversation_name_update", CONVERSATION_PROFILE_INFO_HEADER: "conversation_profile_info_header", CONVERSATION_READ: "conversation_read", CONVO_METADATA_UPDATE: "convo_metadata_update", DELEGATE_ALERT_BANNER: "delegate_alert_banner", DISABLE_NOTIFICATIONS: "disable_notifications", ENABLE_NOTIFICATIONS: "enable_notifications", END_AV_BROADCAST: "end_av_broadcast", ENCRYPTED_CONVERSATION: "encrypted_conversation", JOIN_CONVERSATION: "join_conversation", LOADING_INDICATOR: "loading_indicator", MARK_ALL_AS_READ: "mark_all_as_read", MENTION_NOTIFICATIONS_UPDATE: "mention_notifications_setting_update", MESSAGE: "message", MESSAGE_DELETE: "message_delete", MESSAGE_MARK_AS_NOT_SPAM: "message_unmark_as_spam", MESSAGE_MARK_AS_SPAM: "message_mark_as_spam", NEW_MESSAGES_DIVIDER: "new_messages_divider", PARTICIPANTS_JOIN: "participants_join", PARTICIPANTS_LEAVE: "participants_leave", REACTION_CREATE: "reaction_create", REACTION_DELETE: "reaction_delete", READ_ONLY_INDICATOR: "read_only_indicator", REMOVE_CONVERSATION: "remove_conversation", TRUST_CONVERSATION: "trust_conversation", TYPING_INDICATOR: "typing_indicator", WELCOME_MESSAGE: "welcome_message_create" }),
                i = Object.freeze({ MISSED: "MISSED", CANCELED: "CANCELED", DECLINED: "DECLINED", HUNG_UP: "HUNG_UP", TIMED_OUT: "TIMED_OUT" }),
                o = Object.freeze({ AUDIO_ONLY: "AUDIO_ONLY", VIDEO: "VIDEO" }),
                d = Object.freeze({ MUTUAL_FRIENDS: "mutual_friends" }),
                c = Object.freeze({ UNINITIATED: "UNINITIATED", EXISTING: "EXISTING", DEVICE_NOT_A_MEMBER: "DEVICE_NOT_A_MEMBER" });
        },
        613195: (e, t, a) => {
            a.d(t, { $S: () => be, Ae: () => he, Ap: () => we, BW: () => Ve, Be: () => Oe, Ek: () => Ye, FI: () => je, FS: () => te, GP: () => Se, Ke: () => Fe, OF: () => ie, OW: () => Te, PZ: () => Le, Pr: () => X, Qe: () => Xe, S9: () => le, SF: () => Me, UA: () => ce, Um: () => Ie, W: () => de, X5: () => We, Xw: () => ke, ZP: () => z, Zg: () => ne, _D: () => qe, aG: () => oe, ax: () => ae, ck: () => _e, d0: () => fe, dq: () => Be, gQ: () => J, gq: () => se, jT: () => re, lT: () => Ze, nI: () => ze, qH: () => ve, qg: () => me, sA: () => Ae, sS: () => Ee, sj: () => Ne, tF: () => ue, tw: () => Ce, v3: () => ge, wm: () => pe, xu: () => W });
            var n = a(24949),
                s = a(111677),
                r = a.n(s),
                i = a(184605),
                o = a(948322),
                d = a(88656),
                c = a(615656),
                _ = a(856674),
                I = a(917799),
                E = a(312771),
                A = a(56519),
                T = a(497294),
                O = a(390387),
                p = a(877848),
                m = a(601576),
                u = a(919022),
                N = a(275365),
                S = a(627279),
                y = a(720277),
                v = a(849585),
                l = a(147143);
            const R = r().fb4ee2f6,
                C = "rweb/directMessages/conversation/SET_RECIPIENT_CAN_NOT_DM",
                D = "ACTION_DM_ADD_PARTICIPANTS",
                M = "FETCH_DM_CONVERSATION_FUTURE",
                g = "FETCH_DM_CONVERSATION_RELATIVE_HISTORY",
                f = "FETCH_DM_CONVERSATION_HISTORICAL_SNAPSHOT",
                P = I.dg(l.A7, "ACCEPT_CONVERSATION"),
                h = I.dg(l.A7, "MUTE_DM_USER"),
                U = I.dg(l.A7, "ADD_PARTICIPANTS"),
                b = I.dg(l.A7, "FETCH_CONVERSATION"),
                B = I.dg(l.A7, "FETCH_CONVERSATION_FROM_PARTICIPANTS"),
                L = I.dg(l.A7, "LEAVE_CONVERSATION"),
                V = Object.freeze({ REQUEST: "rweb/directMessages/LEAVE_CONVERSATIONS_REQUEST", SUCCESS: "rweb/directMessages/LEAVE_CONVERSATIONS_SUCCESS", FAILURE: "rweb/directMessages/LEAVE_CONVERSATIONS_FAILURE" }),
                w = I.dg(l.A7, "MARK_CONVERSATION_READ"),
                Z = I.dg(l.A7, "DISABLE_MENTION_CONVERSATION_NOTIFICATIONS"),
                j = I.dg(l.A7, "DISABLE_CONVERSATION_NOTIFICATIONS"),
                F = I.dg(l.A7, "ENABLE_MENTION_CONVERSATION_NOTIFICATIONS"),
                x = I.dg(l.A7, "ENABLE_CONVERSATION_NOTIFICATIONS"),
                Y = I.dg(l.A7, "UPDATE_CONVERSATION_NAME"),
                G = I.dg(l.A7, "UPLOAD_MEDIA"),
                q = I.dg(l.A7, "UPDATE_GROUP_AVATAR"),
                Q = (e, t) => t + 36e5 * e,
                k = (e) => [void 0, Q(1, e), Q(8, e), Q(168, e)],
                H = {};
            function z(e = H, t) {
                if (!t) return e;
                switch (t.type) {
                    case P.SUCCESS: {
                        const { conversationId: a } = t.meta,
                            n = e[a];
                        return { ...e, [a]: { ...n, data: { ...n.data, trusted: !0 } } };
                    }
                    case Re: {
                        const a = Object.entries(t.payload || {}).reduce((t, [a, n]) => ((t[a] = { ...K(e[a], n), fetchStatus: { [p.Yj.BOTTOM]: E.ZP.LOADED, [p.Yj.TOP]: E.ZP.LOADED } }), t), {});
                        return { ...e, ...a };
                    }
                    case C: {
                        const a = t.payload;
                        return { ...e, [a]: { recipientCanNotDm: !0 } };
                    }
                    case U.REQUEST: {
                        const a = t.meta.conversationId,
                            n = e[a];
                        return { ...e, [a]: { ...n, fetchStatus: { ...n.fetchStatus, [p.Yj.TOP]: E.ZP.LOADING } } };
                    }
                    case U.FAILURE: {
                        const a = t.meta.conversationId,
                            n = e[a];
                        return { ...e, [a]: { ...n, fetchStatus: { ...n.fetchStatus, [p.Yj.TOP]: E.ZP.FAILED } } };
                    }
                    case U.SUCCESS: {
                        const a = t.meta.conversationId,
                            n = e[a],
                            s = n.data.participants,
                            r = t.payload.entities.entries ? Object.values(t.payload.entities.entries)[0].participants : [];
                        return { ...e, [a]: { ...n, fetchStatus: { ...n.fetchStatus, [p.Yj.TOP]: E.ZP.LOADED }, data: { ...n.data, participants: [...s, ...r] } } };
                    }
                    case b.REQUEST: {
                        const { conversationId: a, direction: n = p.Yj.BOTTOM } = t.meta,
                            s = e[a];
                        return { ...e, [a]: { ...s, fetchStatus: { ...((s && s.fetchStatus) || {}), [n]: E.ZP.LOADING } } };
                    }
                    case b.FAILURE: {
                        const { conversationId: a, direction: n = p.Yj.BOTTOM } = t.meta,
                            s = e[a];
                        return { ...e, [a]: { ...s, fetchStatus: { ...((s && s.fetchStatus) || {}), [n]: E.ZP.FAILED }, error: t.payload } };
                    }
                    case b.SUCCESS: {
                        const { conversationId: a, direction: n = p.Yj.BOTTOM } = t.meta,
                            s = e[a]?.data || {};
                        return { ...e, [a]: { ...e[a], data: { ...s, isSearchResultOnly: !1 }, fetchStatus: { ...((e[a] && e[a].fetchStatus) || {}), [n]: E.ZP.LOADED } } };
                    }
                    case De:
                        return Object.entries(e).reduce((a, [n, s]) => ((a[n] = K(e[n], { last_read_event_id: t.payload })), a), {});
                    case w.REQUEST:
                        return { ...e, [t.meta.conversationId]: K(e[t.meta.conversationId], { last_read_event_id: t.meta.lastReadEventId }) };
                    case h.SUCCESS:
                        return { ...e, [t.meta.conversationId]: K(e[t.meta.conversationId], { muted: t.meta.mute }) };
                    case Pe: {
                        const { [t.payload]: a, ...n } = e;
                        return n;
                    }
                    case L.REQUEST:
                        return { ...e, [t.meta.conversationId]: { ...e[t.meta.conversationId], isDeleted: !0 } };
                    case V.REQUEST: {
                        const a = {};
                        for (const n in t.meta.conversationsIds) Object.assign(a, { id: { ...e[n], isDeleted: !0 } });
                        return { ...e, ...a };
                    }
                    case Ue:
                        return { ...e, [t.meta.conversationId]: K(e[t.meta.conversationId], { notifications_disabled: !t.payload }) };
                    case j.REQUEST:
                        return { ...e, [t.meta.conversationId]: K(e[t.meta.conversationId], { notifications_disabled: !0, mute_expiration_time: k(new Date().getTime())[t.meta.duration] }) };
                    case Z.REQUEST:
                        return { ...e, [t.meta.conversationId]: K(e[t.meta.conversationId], { mention_notifications_disabled: !0 }) };
                    case x.REQUEST:
                        return { ...e, [t.meta.conversationId]: K(e[t.meta.conversationId], { notifications_disabled: !1 }) };
                    case F.REQUEST:
                        return { ...e, [t.meta.conversationId]: K(e[t.meta.conversationId], { mention_notifications_disabled: !1 }) };
                    case He:
                        return { ...e, [t.meta.conversationId]: K(e[t.meta.conversationId], { avatar_image_https: t.payload }) };
                    case Y.REQUEST:
                    case Y.SUCCESS:
                        return { ...e, [t.meta.conversationId]: K(e[t.meta.conversationId], { name: t.meta.name }) };
                    case xe: {
                        const a = e[t.meta.conversationId],
                            n = (a && a.data && a.data.max_entry_id) || "0";
                        return (0, _.T1)(t.payload, n) ? { ...e, [t.meta.conversationId]: K(e[t.meta.conversationId], { max_entry_id: t.payload }) } : e;
                    }
                    case G.REQUEST:
                        return { ...e, [t.meta.conversationId]: K(e[t.meta.conversationId], { isUploading: !0 }) };
                    case G.FAILURE:
                    case G.SUCCESS:
                        return { ...e, [t.meta.conversationId]: K(e[t.meta.conversationId], { isUploading: !1 }) };
                    case Ge:
                        return { ...e, [t.meta.conversationId]: K(e[t.meta.conversationId], { avatarMediaId: t.payload }) };
                    case Qe:
                        return { ...e, [t.meta.conversationId]: K(e[t.meta.conversationId], { avatarMediaId: null }) };
                    case v.t:
                        return H;
                    default:
                        return e;
                }
            }
            const K = (e = {}, t = {}, a = []) => {
                    const { error: n, ...s } = e,
                        { avatarMediaId: r = null } = (0, i.Z)(t.avatarMediaId) ? t : s,
                        { isUploading: o = !1 } = t,
                        { avatarMediaId: d, isUploading: c, max_entry_id: I, min_entry_id: E, ...A } = t,
                        T = { ...(s && s.data), ...A };
                    !s?.data && A.isSearchResult ? (T.isSearchResultOnly = !0) : A.isSearchResult || (T.isSearchResultOnly = !1), s?.data?.labels && !A.labels ? ((T.labels = s.data.labels), (T.isPinnedOnly = !1)) : !s.data && A.labels && (T.isPinnedOnly = !0);
                    var O, p;
                    return !!A.conversation_id && !A.convo_label && delete T.convo_label, I && (T.max_entry_id = ((O = I), (p = s?.data?.max_entry_id), (0, _.KH)(O, p) ? O : p)), E && (T.min_entry_id = ((e, t) => (e && t ? ((0, _.T1)(e, t) ? t : e) : e || t))(E, s?.data?.min_entry_id)), { ...s, avatarMediaId: r, data: T, isUploading: o };
                },
                W = (e, t) => e[l.Yf].conversations[t],
                X = (e, t) => {
                    const a = W(e, t);
                    return a && a.fetchStatus ? (0, E.ke)(a.fetchStatus, a.data) : E.ZP.LOADED;
                },
                J = (e, t) => {
                    const a = W(e, t);
                    return !(!a || !a.fetchStatus || a?.data?.isSearchResultOnly || a?.data?.isPinnedOnly) && (0, E.ke)(a.fetchStatus, a.data) === E.ZP.LOADED;
                },
                $ = (e, t) => {
                    const a = W(e, t);
                    return !(!a || !a.fetchStatus) && a.fetchStatus[p.Yj.TOP] === E.ZP.LOADING;
                },
                ee = (e, t) => {
                    const a = W(e, t);
                    return !(!a || !a.fetchStatus) && a.fetchStatus[p.Yj.BOTTOM] === E.ZP.LOADING;
                },
                te = (0, n.P1)(
                    (e) => e[l.Yf].conversations,
                    (e) => Object.entries(e).reduce((e, [t, a]) => (a.data && !a.isDeleted && (e[t] = a), e), {}),
                ),
                ae = (e) => Object.keys(te(e)).length > 0,
                ne = (e, t) => {
                    if (!t) return;
                    const a = J(e, t),
                        n = (0, y.g4)(e, l._2.SECONDARY),
                        s = (0, y.g4)(e, l._2.TERTIARY);
                    return a ? (n.includes(t) ? l._2.SECONDARY : s.includes(t) ? l._2.TERTIARY : l._2.PRIMARY) : void 0;
                },
                se = (e, t) => {
                    const { data: a } = W(e, t) || {},
                        { sort_event_id: n } = a || {};
                    if (n) {
                        const t = O._h(e),
                            { by_user_id: a, id: s, message_data: r, sender_id: i } = (0, S.WK)(e, n) || {};
                        if ((i && i !== t) || (r && r.sender_id !== t) || (a && a !== t)) return s;
                    }
                    return null;
                },
                re = (e, t) => {
                    const a = se(e, t),
                        { data: n } = W(e, t) || {};
                    return !a || !!(n && n.last_read_event_id && (0, _.KH)(n.last_read_event_id, a));
                },
                ie = (e, { conversationId: t }) => !!e[l.Yf]?.conversations[t]?.recipientCanNotDm,
                oe = (e, t) => {
                    const { avatarMediaId: a } = W(e, t) || {};
                    return a;
                },
                de = (e, t) => {
                    const { isUploading: a } = W(e, t) || {};
                    return a;
                },
                ce = (e, t) => T._T(e, oe(e, t)),
                _e =
                    (e, t) =>
                    (a, n, { api: s }) => {
                        const r = t.join(",");
                        return I._O(a, { params: { conversationId: e, joinedParticipantIds: r }, request: s.withEndpoint(o.Z).addParticipants })({ actionTypes: U, context: D, meta: { conversationId: e, participantIds: t } }, (e) => {
                            if (e) {
                                const { entities: t } = e;
                                return [t.entries && (0, S.I7)(t.entries), (0, A.dP)(t)];
                            }
                        }).then((e) => {
                            const t = e.result.failed_participants;
                            if (!t) return Promise.resolve(e);
                            const a = Object.keys(t),
                                n = 1 === a.length ? t[a[0]] : c.ZP.DefaultApiError,
                                s = new d.Z("addParticpants URL", 500, e.headers, [{ code: n }]);
                            return (s.context.action = D), Promise.reject(s);
                        });
                    },
                Ie =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { context: s, conversationId: r } = e;
                        return t(
                            (
                                (e) =>
                                (t, a, { api: n, featureSwitches: s }) => {
                                    if (e?.startsWith("e")) {
                                        const s = O._h(a()),
                                            r = e.replace(s, "").replace(/[e-]/g, "");
                                        return n
                                            .withEndpoint(o.Z)
                                            .fetchSecretPermissions({ recipient_ids: [r] })
                                            .then(({ permissions: { id_keys: a } }) => {
                                                if (!a[r].can_dm) return t({ payload: e, type: C });
                                            });
                                    }
                                    return Promise.resolve();
                                }
                            )(r),
                        ).then(() => {
                            if (!ie(a(), { conversationId: r })) {
                                const a = (e) => {
                                    if (e?.result?.conversation_timeline) {
                                        const { cards: t, entries: a, publishedArticles: n, tweets: r, users: i } = e.entities,
                                            { conversations: o, max_entry_id: d, min_entry_id: c, status: _ } = e.result.conversation_timeline,
                                            I = { max_entry_id: d, min_entry_id: c, status: _ },
                                            E = [M, g, f].includes(s)
                                                ? ((e = {}, t, a) => {
                                                      const n = t && a === M,
                                                          s = t && a === g;
                                                      return Object.entries(e).reduce((e, [a, r]) => {
                                                          let i;
                                                          return (i = n ? { ...r, max_search_entry_id: t?.max_entry_id, search_status: t?.status } : s ? { ...r, min_search_entry_id: t?.min_entry_id, status: t?.status } : { ...r, min_search_entry_id: t?.min_entry_id, max_search_entry_id: t?.max_entry_id, search_status: t?.status }), { ...e, [a]: i };
                                                      }, {});
                                                  })(o, I, s)
                                                : ((e = {}, t) => Object.entries(e).reduce((e, [a, n]) => ({ ...e, [a]: { ...n, ...t } }), {}))(o, I);
                                        return (0, y.s0)({ conversations: E, entries: a, users: i, tweets: r, cards: t, publishedArticles: n });
                                    }
                                };
                                return I._O(t, { params: e, request: n.withEndpoint(o.Z).fetchConversation })({ actionTypes: b, context: s, meta: { conversationId: r, direction: (0, p.Sj)(e) } }, a);
                            }
                        });
                    },
                Ee =
                    (e) =>
                    (t, a, { api: n }) =>
                        I._O(t, { params: { participantIds: e }, request: n.withEndpoint(o.Z).fetchConversationFromParticipants })({ actionTypes: B, meta: { participantIds: e } }),
                Ae =
                    (e = {}) =>
                    (t, a) => {
                        const n = a(),
                            { conversationId: s } = e,
                            r = ee(n, s),
                            i = J(n, s);
                        return r || i ? Promise.resolve() : t(Ie({ conversationId: s, context: "FETCH_DM_CONVERSATION" }));
                    },
                Te =
                    (e = {}) =>
                    (t, a) => {
                        const n = a(),
                            { conversationId: s } = e,
                            { data: r } = W(n, s) || {},
                            { max_search_entry_id: i } = r || {},
                            o = $(n, s),
                            d = M;
                        return i && !o ? t(Ie({ conversationId: e.conversationId, min_id: i, context: d, min_position: i })) : Promise.resolve();
                    },
                Oe =
                    (e = {}) =>
                    (t, a) => {
                        let n, s;
                        const r = a(),
                            { conversationId: i } = e,
                            { data: o } = W(r, i) || {},
                            { min_entry_id: d, min_search_entry_id: c, status: _ } = o || {};
                        e?.isSearch ? ((s = "FETCH_DM_CONVERSATION_RELATIVE_HISTORY"), (n = c)) : ((s = "FETCH_DM_CONVERSATION_HISTORY"), (n = d));
                        const I = ee(r, i);
                        return _ !== N.To.HAS_MORE || I ? Promise.resolve() : t(Ie({ ...e, max_id: n, context: s }));
                    },
                pe =
                    (e = {}) =>
                    (t, a) => {
                        const n = a(),
                            { conversationId: s, entryId: r } = e;
                        return !$(n, s) && r ? t(Ie({ conversationId: s, min_id: r, min_buffer: 15, context: f, min_position: r })) : Promise.resolve();
                    },
                me =
                    (e) =>
                    (t, a, { api: n }) =>
                        n
                            .withEndpoint(o.Z)
                            .fetchPermissions({ recipient_ids: e.join(",") })
                            .then(({ permissions: { id_keys: e } }) => e),
                ue =
                    (e) =>
                    (t, a, { api: n }) =>
                        I._O(t, { params: { conversationId: e }, request: n.withEndpoint(o.Z).acceptConversation })({ actionTypes: P, meta: { conversationId: e } }),
                Ne = (e, t) => ye(e, t, !0),
                Se = (e, t) => ye(e, t, !1),
                ye =
                    (e, t, a) =>
                    (n, s, { api: r }) =>
                        I._O(n, { params: { userId: e, relationshipAction: a ? "mute" : "unmute", conversationId: t }, request: r.withEndpoint(o.Z).muteDMUser })({ actionTypes: h, meta: { userId: e, conversationId: t, mute: a } }).then(n(u.ZP.patchUser(e, { dm_muting: a }))),
                ve =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: s } = e;
                        return I.AB(t, { params: e, request: n.withEndpoint(o.Z).leaveConversation })({ actionTypes: L, context: "ACTION_LEAVE_CONVERSATION", meta: { conversationId: s } });
                    },
                le =
                    (e) =>
                    (t, a, { api: n }) => {
                        const s = e.join(",");
                        return I._O(t, { params: { conversationIds: s }, request: n.withEndpoint(o.Z).deleteConversations })({ actionTypes: V, context: "LEAVE_CONVERSATIONS", meta: { conversationIds: e } }, (e) => {
                            if (!e.error) return [(0, m.fz)({ text: R })];
                        });
                    },
                Re = "rweb/directMessages/ADD_CONVERSATIONS",
                Ce = (e) => ({ payload: e, type: Re }),
                De = "rweb/directMessages/MARK_ALL_AS_READ",
                Me = (e) => ({ payload: e, type: De }),
                ge = (e, t) => ({ type: w.REQUEST, meta: { conversationId: e, lastReadEventId: t } }),
                fe =
                    (e) =>
                    (t, a, { api: n }) => {
                        const s = a(),
                            { data: r = {} } = W(s, e) || {},
                            { sort_event_id: i } = r,
                            d = !re(s, e);
                        if (e && i && d) {
                            return I.AB(t, { params: { conversationId: e, last_read_event_id: i }, request: n.withEndpoint(o.Z).markRead })({ actionTypes: w, bypassFailureOnErrors: () => !0, context: "APP_DM_UPDATE_CONVERSATION_READ_STATE", meta: { conversationId: e, lastReadEventId: i } });
                        }
                        return Promise.resolve();
                    },
                Pe = "rweb/directMessages/REMOVE_CONVERSATION",
                he = (e) => [{ payload: e, type: Pe }, (0, S.J_)(e)],
                Ue = "rweb/directMessages/TOGGLE_CONVERSATION_NOTIFICATIONS",
                be = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Ue }),
                Be =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: s, duration: r } = e;
                        return I.AB(t, { params: e, request: n.withEndpoint(o.Z).disableNotifications })({ actionTypes: j, context: "ACTION_DISABLE_NOTIFICATIONS", meta: { conversationId: s, duration: r } });
                    },
                Le =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: s } = e;
                        return I.AB(t, { params: e, request: n.withEndpoint(o.Z).enableNotifications })({ actionTypes: x, context: "ACTION_ENABLE_NOTIFICATIONS", meta: { conversationId: s } });
                    },
                Ve =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: s } = e,
                            r = { mention_notifications_disabled: !0, ...e };
                        return I.AB(t, { params: r, request: n.withEndpoint(o.Z).updateMentionNotificationsSetting })({ actionTypes: Z, context: "ACTION_DISABLE_DM_MENTION_NOTIFICATIONS", meta: { conversationId: s } });
                    },
                we =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: s } = e,
                            r = { mention_notifications_disabled: !1, ...e };
                        return I.AB(t, { params: r, request: n.withEndpoint(o.Z).updateMentionNotificationsSetting })({ actionTypes: F, context: "ACTION_ENABLE_DM_MENTION_NOTIFICATIONS", meta: { conversationId: s } });
                    },
                Ze =
                    (e = {}) =>
                    (t, a, { api: n }) =>
                        n.withEndpoint(o.Z).updateTyping(e),
                je =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: s, name: r } = e;
                        return I.AB(t, { params: e, request: n.withEndpoint(o.Z).updateConversationName })({ actionTypes: Y, context: "ACTION_UPDATE_CONVERSATION_NAME", meta: { conversationId: s, name: r } });
                    },
                Fe = (e) => ({ type: Y.SUCCESS, meta: { conversationId: e.conversation_id, name: e.conversation_name } }),
                xe = "rweb/directMessages/UPDATE_CONVERSATION_MAX_ENTRY_ID",
                Ye = (e, t) => ({ meta: { conversationId: e }, payload: t, type: xe }),
                Ge = "rweb/directMessages/ADD_AVATAR_MEDIA",
                qe = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Ge }),
                Qe = "rweb/directMessages/REMOVE_AVATAR_MEDIA",
                ke = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Qe }),
                He = "rweb/directMessages/UPDATE_CONVERSATION_AVATAR",
                ze = (e, t) => ({ meta: { conversationId: e }, payload: t, type: He }),
                Ke = "APP_DM_UPDATE_CONVERSATION_AVATAR",
                We =
                    (e) =>
                    (t, a, { api: n }) => {
                        t({ meta: { conversationId: e }, type: G.REQUEST });
                        const s = oe(a(), e),
                            r = T.$i(s);
                        return t(r).then(
                            ([a]) => {
                                t({ meta: { conversationId: e }, type: G.SUCCESS });
                                return I._O(t, { params: { conversationId: e, avatar_id: a.uploadId }, request: n.withEndpoint(o.Z).updateConversationAvatar })({ actionTypes: q, context: Ke });
                            },
                            (a) => {
                                const n = { errors: a, context: Ke };
                                return t({ meta: { conversationId: e }, type: G.FAILURE }), Promise.reject(n);
                            },
                        );
                    },
                Xe =
                    (e, t) =>
                    (a, n, { api: s }) =>
                        I.Vg(a, { params: { conversation_id: e, welcome_message_id: t }, request: s.withEndpoint(o.Z).addWelcomeMessageToConversation })("ADD_WELCOME_MESSAGE_TO_CONVERSATION");
        },
        627279: (e, t, a) => {
            a.d(t, { I7: () => M, J_: () => h, MY: () => j, Ob: () => G, WK: () => Q, WO: () => f, ZP: () => y, _d: () => z, gm: () => q, gz: () => k, iN: () => H, kv: () => b, pt: () => U, px: () => L, rU: () => x, s$: () => w, wC: () => g, zT: () => K });
            var n = a(468811),
                s = a.n(n),
                r = a(744531),
                i = a(933277),
                o = a(973710),
                d = a(166852),
                c = a(450681),
                _ = a(948322),
                I = a(856674),
                E = a(163889),
                A = a(917799),
                T = a(275365),
                O = a(849585),
                p = a(147143);
            const m = (0, A.dg)(p.A7, "DELETE_MESSAGE"),
                u = (0, A.dg)(p.A7, "MARK_ENTRIES_AS_SPAM"),
                N = (0, A.dg)(p.A7, "MARK_ENTRIES_AS_NOT_SPAM"),
                S = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} };
            function y(e = S, t) {
                if (!t) return e;
                const { conversationId: a = t.payload?.conversation_id, requestId: n = t.payload?.id } = t.meta || {};
                switch (t.type) {
                    case B: {
                        const { id: n } = t.payload,
                            s = { ...e.entries, [n]: v(e.entries[n], { data: t.payload }) };
                        return { ...e, entries: s, entryIdsByConversationId: { ...e.entryIdsByConversationId, [a]: R([...(e.entryIdsByConversationId[a] || []), n], s) } };
                    }
                    case V: {
                        const { id: n } = t.payload,
                            s = { ...e.entries, [n]: l(e.entries[n], t.payload) };
                        return { ...e, entries: s, entryIdsByConversationId: { ...e.entryIdsByConversationId, [a]: R([...(e.entryIdsByConversationId[a] || []), n], s) } };
                    }
                    case D: {
                        const a = Object.values(t.payload)
                                .filter((e) => e.type !== T.Cr.CONVERSATION_READ)
                                .reduce(
                                    (t, a) => {
                                        "message_edit" === a.type && ((a.id = a.message_data.id), (a.type = "message"));
                                        const { id: n } = a,
                                            s = (0, r.Z)(a, "message_reactions");
                                        return (
                                            (t.allEntries[n] = v(e.entries[n], { data: s, isLoading: !1, isLoaded: !0 })),
                                            a.message_reactions &&
                                                (a.message_reactions.forEach((n) => {
                                                    const s = { ...n, affects_sort: !0, message_id: a.id, type: T.Cr.REACTION_CREATE };
                                                    t.allEntries[s.id] = v(e.entries[s.id], { data: s, isLoading: !1, isLoaded: !0 });
                                                }),
                                                (t.embeddedReactionsByMessageId[n] = R([...(e.reactionsByMessageId[n] || []), ...a.message_reactions.map((e) => e.id)], { ...e.entries, ...t.allEntries }))),
                                            t
                                        );
                                    },
                                    { allEntries: {}, embeddedReactionsByMessageId: {} },
                                ),
                            n = { ...e.entries, ...a.allEntries },
                            s = (0, i.Z)(Object.values(a.allEntries), (e) => e.data.conversation_id),
                            o = Object.keys(s).reduce((t, a) => {
                                const r = s[a].map((e) => e.data.id);
                                return (t[a] = R([...(e.entryIdsByConversationId[a] || []), ...r], n)), t;
                            }, {});
                        return { ...e, entries: n, entryIdsByConversationId: { ...e.entryIdsByConversationId, ...o }, reactionsByMessageId: { ...e.reactionsByMessageId, ...a.embeddedReactionsByMessageId } };
                    }
                    case u.REQUEST:
                    case N.REQUEST: {
                        const a = t.type === u.REQUEST,
                            n = t.payload.reduce((t, n) => {
                                const s = e.entries[n] && e.entries[n].data;
                                return { ...t, [n]: { ...e.entries[n], data: { ...s, marked_as_spam: a } } };
                            }, {});
                        return { ...e, entries: { ...e.entries, ...n } };
                    }
                    case m.REQUEST:
                    case P: {
                        const n = t.type === P && !Array.isArray(t.payload),
                            s = e.entryIdsByConversationId[a] || [],
                            i = t.type === P ? (n ? s : t.payload) : [t.payload, ...(e.reactionsByMessageId[t.payload] || [])];
                        return { ...e, entries: (0, r.Z)(e.entries, i), entryIdsByConversationId: { ...(0, r.Z)(e.entryIdsByConversationId, a), ...(n ? {} : { [a]: (0, o.Z)(s, i) }) }, reactionsByMessageId: (0, r.Z)(e.reactionsByMessageId, i) };
                    }
                    case Z: {
                        const s = t.payload.id || n,
                            i = { ...(0, r.Z)(e.entries, s) },
                            o = R(
                                (e.entryIdsByConversationId[a] || []).filter((e) => e !== s),
                                i,
                            ),
                            d = o ? { [a]: o } : {};
                        return { ...e, entries: i, entryIdsByConversationId: { ...(0, r.Z)(e.entryIdsByConversationId, a), ...d }, reactionsByMessageId: (0, r.Z)(e.reactionsByMessageId, s) };
                    }
                    case F: {
                        const a = t.payload,
                            n = [...(e.reactionsByMessageId[a.message_id] || []), a.id],
                            s = n.filter((t) => e.entries[t]);
                        n.length !== s.length && (0, E.ZP)("DM add reaction is missing a backing entry", { extra: { filteredMessageReactionIds: s, messageReactionIds: n, currentId: a.id } });
                        const r = R(s, e.entries);
                        return { ...e, reactionsByMessageId: { ...e.reactionsByMessageId, [a.message_id]: r } };
                    }
                    case Y: {
                        const a = t.payload,
                            n = (e.reactionsByMessageId[a.message_id] || []).find((t) => e.entries[t].data.sender_id === a.sender_id);
                        if (!n) return e;
                        const s = (0, o.Z)(e.entryIdsByConversationId[a.conversation_id], n),
                            i = (0, o.Z)(e.reactionsByMessageId[a.message_id], n);
                        return { ...e, entries: (0, r.Z)(e.entries, n), entryIdsByConversationId: { ...e.entryIdsByConversationId, [a.conversation_id]: s }, reactionsByMessageId: { ...e.reactionsByMessageId, [a.message_id]: i } };
                    }
                    case O.t:
                        return S;
                    default:
                        return e;
                }
            }
            const v = (e, t) => {
                    const { error: a, isLoaded: n, isLoading: s, ...r } = e || {},
                        { data: i, ...o } = t || {};
                    return { ...r, data: { ...(r && r.data), ...i }, ...o };
                },
                l = (e, t) => {
                    const { data: a, ...n } = e || {};
                    return { ...n, data: { ...a, message_data: t } };
                },
                R = (e = [], t) => {
                    const a = (0, d.Z)(e).sort((e, a) => {
                        const n = (0, I.ZP)(t[e].data.time, t[a].data.time);
                        return 0 === n ? (0, I.ZP)(t[e].id, t[a].id) : n;
                    });
                    return a.length ? a : void 0;
                },
                C = (e, t, a, n) => ({ id: s().v1(), time: new Date().getTime().toString(), emoji_reaction: n, reaction_key: "Emoji", conversation_id: e, message_id: t, sender_id: a }),
                D = "rweb/directMessages/ADD_ENTRIES",
                M = (e) => ({ payload: e, type: D }),
                g =
                    (...e) =>
                    (t, a, { api: n }) => {
                        const s = C(...e);
                        return t([L(s.conversation_id, s.id, s), G(s), x(s)]);
                    },
                f =
                    (...e) =>
                    (t, a, { api: n }) => {
                        const s = C(...e);
                        return t([G(s)]);
                    },
                P = "rweb/dm/REMOVE_CONVERSATION_ENTRIES",
                h = (e, t) => ({ meta: { conversationId: e }, payload: t, type: P }),
                U = (e, t) => ({ payload: e, type: t ? u.REQUEST : N.REQUEST }),
                b =
                    ({ conversationId: e, dmId: t, markSpam: a }) =>
                    (n, s, { api: r }) =>
                        (0, A.AB)(n, { params: { dm_id: t, report_as: a ? "spam" : "not_spam" }, request: r.withEndpoint(_.Z).reportSpam })({ actionTypes: a ? m : N, payload: a ? t : [t], meta: { conversationId: e } }),
                B = "rweb/directMessages/ADD_ENTRY",
                L = (e, t, a) => ({ meta: { conversationId: e, requestId: t }, payload: a, type: B }),
                V = "rweb/directMessages/EDIT_ENTRY",
                w = (e, t, a) => ({ meta: { conversationId: e, requestId: t }, payload: a, type: V }),
                Z = "rweb/directMessages/REMOVE_ENTRY",
                j = (e, t, a) => ({ meta: { conversationId: e, requestId: t }, payload: a, type: Z }),
                F = "rweb/directMessages/ADD_REACTION",
                x = (e) => ({ payload: { ...e, type: T.Cr.REACTION_CREATE }, type: F }),
                Y = "rweb/directMessages/DELETE_REACTION",
                G = ({ emoji_reaction: e, reaction_key: t, ...a }) => ({ payload: { ...a, type: T.Cr.REACTION_DELETE }, type: Y }),
                q = (e) => e[p.Yf].entries,
                Q = (e, t) => {
                    const a = q(e).entries[t];
                    return a && a.data;
                },
                k = (e, t) => e[p.Yf].entries.entryIdsByConversationId[t],
                H = (e, t) => {
                    const a = k(e, t);
                    return a ? (0, c.Z)(a.map((t) => Q(e, t))) : [];
                },
                z = (e, t) => q(e).reactionsByMessageId[t],
                K = (e, t) => (z(e, t) || []).map((t) => Q(e, t).sender_id);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GifSearch-8ed0fac5.3e512c8a.js.map
