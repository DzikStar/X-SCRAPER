"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-8ed0fac5"],
    {
        135698: (e, t, a) => {
            a.d(t, { c: () => i });
            const n = 4194304;
            function s(e) {
                for (let t = 0; t < e.byteLength - 8; t++)
                    if (109 === e.getUint8(t + 4) && 111 === e.getUint8(t + 5) && 111 === e.getUint8(t + 6) && 118 === e.getUint8(t + 7)) {
                        if (e.getUint32(t) > 0) return !0;
                    }
                return !1;
            }
            async function i(e) {
                const t = e.slice(0, n),
                    a = await t.arrayBuffer();
                if (s(new DataView(a))) return !0;
                const i = Math.max(0, e.size - n),
                    r = e.slice(i),
                    o = await r.arrayBuffer();
                return s(new DataView(o));
            }
        },
        946208: (e, t, a) => {
            a.d(t, { Id: () => n, ZP: () => r, h_: () => s });
            a(543673), a(240753), a(128399);
            const n = [".srt", "text/plain", ""],
                s = (e) => -1 !== n.indexOf(e.type),
                i = (e) =>
                    `WEBVTT FILE\r\n\r\n${e
                        .replace(/\{\\([ibu])\}/g, "</$1>")
                        .replace(/\{\\([ibu])1\}/g, "<$1>")
                        .replace(/\{([ibu])\}/g, "<$1>")
                        .replace(/\{\/([ibu])\}/g, "</$1>")
                        .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
                        .replace(/\r\n\{\\an8\}/g, " line:5%\r\n")}`;
            class r {
                constructor(e) {
                    (this.fileHandle = new Blob([e], { type: "text/plain charset=UTF-8" })),
                        e instanceof File && (this.name = e.name),
                        (this.size = e.size),
                        (this.type = this.fileHandle.type),
                        (this.url = window.URL.createObjectURL(this.fileHandle)),
                        this.fileHandle.text &&
                            this.fileHandle.text().then((e) => {
                                this.vtt = URL.createObjectURL(new Blob([i(e)], { type: "text/plain charset=UTF-8" }));
                            }),
                        (this.isVideo = !1),
                        (this.isImage = !1),
                        (this.isGif = !1),
                        (this.isSubtitles = !0);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url) && window.URL.revokeObjectURL(this.vtt);
                }
            }
        },
        883432: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        540387: (e, t, a) => {
            a.d(t, { Wv: () => s, ZP: () => r, hb: () => i, jn: () => n });
            a(571372), a(543673), a(240753), a(128399);
            const n = ["video/mp4", "video/quicktime"],
                s = (e) => -1 !== n.indexOf(e.type),
                i = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
            class r {
                constructor(e, t) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type);
                    try {
                        this.url = window.URL.createObjectURL(this.fileHandle);
                    } catch (e) {
                        this.url = "";
                    }
                    (this.isVideo = !0), (this.isImage = !1), (this.isGif = !1), (this.isSubtitles = !1), (this.isAmplify = !!t);
                }
                withDimensionsAndOrientation(e) {
                    return ((e, t) =>
                        new Promise((a, n) => {
                            const s = (e, t) => {
                                    const a = new Error(e);
                                    (a.code = t), (a.type = i.type), n(a);
                                },
                                r = document.createElement("video");
                            (r.onloadedmetadata = () => {
                                t || (r.videoWidth && r.videoHeight) ? a(r) : s("Video lacks height or width", i.NO_DIMENSIONS);
                            }),
                                (r.onerror = () => {
                                    s("Error loading image", i.LOAD_FAILED);
                                }),
                                (r.src = e);
                        }))(this.url, e).then((e) => {
                        const { duration: t, videoHeight: a, videoWidth: n } = e;
                        return (this.width = n), (this.height = a), (this.duration = t), (this.video = e), (this.isBrowserSupported = !(0 === a || 0 === n)), this;
                    });
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        275365: (e, t, a) => {
            a.d(t, { BU: () => c, Cr: () => i, To: () => s, UN: () => d, eD: () => n, td: () => r, v1: () => o });
            const n = Object.freeze({ ONE_TO_ONE: "ONE_TO_ONE", GROUP: "GROUP_DM", SECRET_ONE_TO_ONE: "SECRET_ONE_TO_ONE" }),
                s = Object.freeze({ AT_END: "AT_END", HAS_MORE: "HAS_MORE" }),
                i = Object.freeze({ CONVERSATION_AVATAR_UPDATE: "conversation_avatar_update", CONVERSATION_NAME_UPDATE: "conversation_name_update", CONVERSATION_PROFILE_INFO_HEADER: "conversation_profile_info_header", CONVERSATION_READ: "conversation_read", CONVO_METADATA_UPDATE: "convo_metadata_update", DELEGATE_ALERT_BANNER: "delegate_alert_banner", DISABLE_NOTIFICATIONS: "disable_notifications", ENABLE_NOTIFICATIONS: "enable_notifications", END_AV_BROADCAST: "end_av_broadcast", ENCRYPTED_CONVERSATION: "encrypted_conversation", JOIN_CONVERSATION: "join_conversation", LOADING_INDICATOR: "loading_indicator", MARK_ALL_AS_READ: "mark_all_as_read", MENTION_NOTIFICATIONS_UPDATE: "mention_notifications_setting_update", MESSAGE: "message", MESSAGE_DELETE: "message_delete", MESSAGE_MARK_AS_NOT_SPAM: "message_unmark_as_spam", MESSAGE_MARK_AS_SPAM: "message_mark_as_spam", NEW_MESSAGES_DIVIDER: "new_messages_divider", PARTICIPANTS_JOIN: "participants_join", PARTICIPANTS_LEAVE: "participants_leave", REACTION_CREATE: "reaction_create", REACTION_DELETE: "reaction_delete", READ_ONLY_INDICATOR: "read_only_indicator", REMOVE_CONVERSATION: "remove_conversation", TRUST_CONVERSATION: "trust_conversation", TYPING_INDICATOR: "typing_indicator", WELCOME_MESSAGE: "welcome_message_create" }),
                r = Object.freeze({ MISSED: "MISSED", CANCELED: "CANCELED", DECLINED: "DECLINED", HUNG_UP: "HUNG_UP", TIMED_OUT: "TIMED_OUT" }),
                o = Object.freeze({ AUDIO_ONLY: "AUDIO_ONLY", VIDEO: "VIDEO" }),
                d = Object.freeze({ MUTUAL_FRIENDS: "mutual_friends" }),
                c = Object.freeze({ UNINITIATED: "UNINITIATED", EXISTING: "EXISTING", DEVICE_NOT_A_MEMBER: "DEVICE_NOT_A_MEMBER" });
        },
        182991: (e, t, a) => {
            a.d(t, { x: () => s });
            var n = a(147143);
            const s = (e, t) => (e[n.Yf] ? e[n.Yf].conversations[t] : null);
        },
        613195: (e, t, a) => {
            a.d(t, { $S: () => be, Ae: () => Ue, Ap: () => Ve, BW: () => Be, Be: () => Ae, Ek: () => Fe, FI: () => ke, FS: () => te, GP: () => Se, Ke: () => je, OF: () => re, OW: () => pe, PZ: () => Le, Pr: () => $, Qe: () => $e, S9: () => Ne, SF: () => he, UA: () => ce, Um: () => Ie, W: () => de, X5: () => Ke, Xw: () => qe, ZP: () => z, Zg: () => ne, _D: () => He, aG: () => oe, ax: () => ae, ck: () => _e, d0: () => Me, dq: () => we, gQ: () => X, gq: () => se, jT: () => ie, lT: () => Ze, nI: () => ze, qH: () => ve, qg: () => Oe, sA: () => le, sS: () => Ee, sj: () => me, tF: () => ue, tw: () => Ce, v3: () => De, wm: () => Te, xu: () => K });
            var n = a(24949),
                s = a(674132),
                i = a.n(s),
                r = a(184605),
                o = a(948322),
                d = a(88656),
                c = a(615656),
                _ = a(856674),
                I = a(917799),
                E = a(312771),
                l = a(56519),
                p = a(497294),
                A = a(390387),
                T = a(877848),
                O = a(601576),
                u = a(919022),
                m = a(275365),
                S = a(627279),
                y = a(720277),
                v = a(849585),
                N = a(147143);
            const R = i().fb4ee2f6,
                C = "rweb/directMessages/conversation/SET_RECIPIENT_CAN_NOT_DM",
                g = "ACTION_DM_ADD_PARTICIPANTS",
                h = "FETCH_DM_CONVERSATION_FUTURE",
                D = "FETCH_DM_CONVERSATION_RELATIVE_HISTORY",
                M = "FETCH_DM_CONVERSATION_HISTORICAL_SNAPSHOT",
                f = I.dg(N.A7, "ACCEPT_CONVERSATION"),
                U = I.dg(N.A7, "MUTE_DM_USER"),
                P = I.dg(N.A7, "ADD_PARTICIPANTS"),
                b = I.dg(N.A7, "FETCH_CONVERSATION"),
                w = I.dg(N.A7, "FETCH_CONVERSATION_FROM_PARTICIPANTS"),
                L = I.dg(N.A7, "LEAVE_CONVERSATION"),
                B = Object.freeze({ REQUEST: "rweb/directMessages/LEAVE_CONVERSATIONS_REQUEST", SUCCESS: "rweb/directMessages/LEAVE_CONVERSATIONS_SUCCESS", FAILURE: "rweb/directMessages/LEAVE_CONVERSATIONS_FAILURE" }),
                V = I.dg(N.A7, "MARK_CONVERSATION_READ"),
                Z = I.dg(N.A7, "DISABLE_MENTION_CONVERSATION_NOTIFICATIONS"),
                k = I.dg(N.A7, "DISABLE_CONVERSATION_NOTIFICATIONS"),
                j = I.dg(N.A7, "ENABLE_MENTION_CONVERSATION_NOTIFICATIONS"),
                x = I.dg(N.A7, "ENABLE_CONVERSATION_NOTIFICATIONS"),
                F = I.dg(N.A7, "UPDATE_CONVERSATION_NAME"),
                Y = I.dg(N.A7, "UPLOAD_MEDIA"),
                H = I.dg(N.A7, "UPDATE_GROUP_AVATAR"),
                G = (e, t) => t + 36e5 * e,
                q = (e) => [void 0, G(1, e), G(8, e), G(168, e)],
                Q = {};
            function z(e = Q, t) {
                if (!t) return e;
                switch (t.type) {
                    case f.SUCCESS: {
                        const { conversationId: a } = t.meta,
                            n = e[a];
                        return { ...e, [a]: { ...n, data: { ...n.data, trusted: !0 } } };
                    }
                    case Re: {
                        const a = Object.entries(t.payload || {}).reduce((t, [a, n]) => ((t[a] = { ...W(e[a], n), fetchStatus: { [T.Yj.BOTTOM]: E.ZP.LOADED, [T.Yj.TOP]: E.ZP.LOADED } }), t), {});
                        return { ...e, ...a };
                    }
                    case C: {
                        const a = t.payload;
                        return { ...e, [a]: { recipientCanNotDm: !0 } };
                    }
                    case P.REQUEST: {
                        const a = t.meta.conversationId,
                            n = e[a];
                        return { ...e, [a]: { ...n, fetchStatus: { ...n.fetchStatus, [T.Yj.TOP]: E.ZP.LOADING } } };
                    }
                    case P.FAILURE: {
                        const a = t.meta.conversationId,
                            n = e[a];
                        return { ...e, [a]: { ...n, fetchStatus: { ...n.fetchStatus, [T.Yj.TOP]: E.ZP.FAILED } } };
                    }
                    case P.SUCCESS: {
                        const a = t.meta.conversationId,
                            n = e[a],
                            s = n.data.participants,
                            i = t.payload.entities.entries ? Object.values(t.payload.entities.entries)[0].participants : [];
                        return { ...e, [a]: { ...n, fetchStatus: { ...n.fetchStatus, [T.Yj.TOP]: E.ZP.LOADED }, data: { ...n.data, participants: [...s, ...i] } } };
                    }
                    case b.REQUEST: {
                        const { conversationId: a, direction: n = T.Yj.BOTTOM } = t.meta,
                            s = e[a];
                        return { ...e, [a]: { ...s, fetchStatus: { ...((s && s.fetchStatus) || {}), [n]: E.ZP.LOADING } } };
                    }
                    case b.FAILURE: {
                        const { conversationId: a, direction: n = T.Yj.BOTTOM } = t.meta,
                            s = e[a];
                        return { ...e, [a]: { ...s, fetchStatus: { ...((s && s.fetchStatus) || {}), [n]: E.ZP.FAILED }, error: t.payload } };
                    }
                    case b.SUCCESS: {
                        const { conversationId: a, direction: n = T.Yj.BOTTOM } = t.meta,
                            s = e[a]?.data || {};
                        return { ...e, [a]: { ...e[a], data: { ...s, isSearchResultOnly: !1 }, fetchStatus: { ...((e[a] && e[a].fetchStatus) || {}), [n]: E.ZP.LOADED } } };
                    }
                    case ge:
                        return Object.entries(e).reduce((a, [n, s]) => ((a[n] = W(e[n], { last_read_event_id: t.payload })), a), {});
                    case V.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { last_read_event_id: t.meta.lastReadEventId }) };
                    case U.SUCCESS:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { muted: t.meta.mute }) };
                    case fe: {
                        const { [t.payload]: a, ...n } = e;
                        return n;
                    }
                    case L.REQUEST:
                        return { ...e, [t.meta.conversationId]: { ...e[t.meta.conversationId], isDeleted: !0 } };
                    case B.REQUEST: {
                        const a = {};
                        for (const n in t.meta.conversationsIds) Object.assign(a, { id: { ...e[n], isDeleted: !0 } });
                        return { ...e, ...a };
                    }
                    case Pe:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { notifications_disabled: !t.payload }) };
                    case k.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { notifications_disabled: !0, mute_expiration_time: q(new Date().getTime())[t.meta.duration] }) };
                    case Z.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { mention_notifications_disabled: !0 }) };
                    case x.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { notifications_disabled: !1 }) };
                    case j.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { mention_notifications_disabled: !1 }) };
                    case Qe:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { avatar_image_https: t.payload }) };
                    case F.REQUEST:
                    case F.SUCCESS:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { name: t.meta.name }) };
                    case xe: {
                        const a = e[t.meta.conversationId],
                            n = (a && a.data && a.data.max_entry_id) || "0";
                        return (0, _.T1)(t.payload, n) ? { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { max_entry_id: t.payload }) } : e;
                    }
                    case Y.REQUEST:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { isUploading: !0 }) };
                    case Y.FAILURE:
                    case Y.SUCCESS:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { isUploading: !1 }) };
                    case Ye:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { avatarMediaId: t.payload }) };
                    case Ge:
                        return { ...e, [t.meta.conversationId]: W(e[t.meta.conversationId], { avatarMediaId: null }) };
                    case v.t:
                        return Q;
                    default:
                        return e;
                }
            }
            const W = (e = {}, t = {}, a = []) => {
                    const { error: n, ...s } = e,
                        { avatarMediaId: i = null } = (0, r.Z)(t.avatarMediaId) ? t : s,
                        { isUploading: o = !1 } = t,
                        { avatarMediaId: d, isUploading: c, max_entry_id: I, min_entry_id: E, ...l } = t,
                        p = { ...(s && s.data), ...l };
                    !s?.data && l.isSearchResult ? (p.isSearchResultOnly = !0) : l.isSearchResult || (p.isSearchResultOnly = !1), s?.data?.labels && !l.labels ? ((p.labels = s.data.labels), (p.isPinnedOnly = !1)) : !s.data && l.labels && (p.isPinnedOnly = !0);
                    var A, T;
                    return !!l.conversation_id && !l.convo_label && delete p.convo_label, I && (p.max_entry_id = ((A = I), (T = s?.data?.max_entry_id), (0, _.KH)(A, T) ? A : T)), E && (p.min_entry_id = ((e, t) => (e && t ? ((0, _.T1)(e, t) ? t : e) : e || t))(E, s?.data?.min_entry_id)), { ...s, avatarMediaId: i, data: p, isUploading: o };
                },
                K = (e, t) => e[N.Yf].conversations[t],
                $ = (e, t) => {
                    const a = K(e, t);
                    return a && a.fetchStatus ? (0, E.ke)(a.fetchStatus, a.data) : E.ZP.LOADED;
                },
                X = (e, t) => {
                    const a = K(e, t);
                    return !(!a || !a.fetchStatus || a?.data?.isSearchResultOnly || a?.data?.isPinnedOnly) && (0, E.ke)(a.fetchStatus, a.data) === E.ZP.LOADED;
                },
                J = (e, t) => {
                    const a = K(e, t);
                    return !(!a || !a.fetchStatus) && a.fetchStatus[T.Yj.TOP] === E.ZP.LOADING;
                },
                ee = (e, t) => {
                    const a = K(e, t);
                    return !(!a || !a.fetchStatus) && a.fetchStatus[T.Yj.BOTTOM] === E.ZP.LOADING;
                },
                te = (0, n.P1)(
                    (e) => e[N.Yf].conversations,
                    (e) => Object.entries(e).reduce((e, [t, a]) => (a.data && !a.isDeleted && (e[t] = a), e), {}),
                ),
                ae = (e) => Object.keys(te(e)).length > 0,
                ne = (e, t) => {
                    if (!t) return;
                    const a = X(e, t),
                        n = (0, y.g4)(e, N._2.SECONDARY),
                        s = (0, y.g4)(e, N._2.TERTIARY);
                    return a ? (n.includes(t) ? N._2.SECONDARY : s.includes(t) ? N._2.TERTIARY : N._2.PRIMARY) : void 0;
                },
                se = (e, t) => {
                    const { data: a } = K(e, t) || {},
                        { sort_event_id: n } = a || {};
                    if (n) {
                        const t = A._h(e),
                            { by_user_id: a, id: s, message_data: i, sender_id: r } = (0, S.WK)(e, n) || {};
                        if ((r && r !== t) || (i && i.sender_id !== t) || (a && a !== t)) return s;
                    }
                    return null;
                },
                ie = (e, t) => {
                    const a = se(e, t),
                        { data: n } = K(e, t) || {};
                    return !a || !!(n && n.last_read_event_id && (0, _.KH)(n.last_read_event_id, a));
                },
                re = (e, { conversationId: t }) => !!e[N.Yf]?.conversations[t]?.recipientCanNotDm,
                oe = (e, t) => {
                    const { avatarMediaId: a } = K(e, t) || {};
                    return a;
                },
                de = (e, t) => {
                    const { isUploading: a } = K(e, t) || {};
                    return a;
                },
                ce = (e, t) => p._T(e, oe(e, t)),
                _e =
                    (e, t) =>
                    (a, n, { api: s }) => {
                        const i = t.join(",");
                        return I._O(a, { params: { conversationId: e, joinedParticipantIds: i }, request: s.withEndpoint(o.Z).addParticipants })({ actionTypes: P, context: g, meta: { conversationId: e, participantIds: t } }, (e) => {
                            if (e) {
                                const { entities: t } = e;
                                return [t.entries && (0, S.I7)(t.entries), (0, l.dP)(t)];
                            }
                        }).then((e) => {
                            const t = e.result.failed_participants;
                            if (!t) return Promise.resolve(e);
                            const a = Object.keys(t),
                                n = 1 === a.length ? t[a[0]] : c.ZP.DefaultApiError,
                                s = new d.Z("addParticpants URL", 500, e.headers, [{ code: n }]);
                            return (s.context.action = g), Promise.reject(s);
                        });
                    },
                Ie =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { context: s, conversationId: i } = e;
                        return t(
                            (
                                (e) =>
                                (t, a, { api: n, featureSwitches: s }) => {
                                    if (e?.startsWith("e")) {
                                        const s = A._h(a()),
                                            i = e.replace(s, "").replace(/[e-]/g, "");
                                        return n
                                            .withEndpoint(o.Z)
                                            .fetchSecretPermissions({ recipient_ids: [i] })
                                            .then(({ permissions: { id_keys: a } }) => {
                                                if (!a[i].can_dm) return t({ payload: e, type: C });
                                            });
                                    }
                                    return Promise.resolve();
                                }
                            )(i),
                        ).then(() => {
                            if (!re(a(), { conversationId: i })) {
                                const a = (e) => {
                                    if (e?.result?.conversation_timeline) {
                                        const { cards: t, entries: a, publishedArticles: n, tweets: i, users: r } = e.entities,
                                            { conversations: o, max_entry_id: d, min_entry_id: c, status: _ } = e.result.conversation_timeline,
                                            I = { max_entry_id: d, min_entry_id: c, status: _ },
                                            E = [h, D, M].includes(s)
                                                ? ((e = {}, t, a) => {
                                                      const n = t && a === h,
                                                          s = t && a === D;
                                                      return Object.entries(e).reduce((e, [a, i]) => {
                                                          let r;
                                                          return (r = n ? { ...i, max_search_entry_id: t?.max_entry_id, search_status: t?.status } : s ? { ...i, min_search_entry_id: t?.min_entry_id, status: t?.status } : { ...i, min_search_entry_id: t?.min_entry_id, max_search_entry_id: t?.max_entry_id, search_status: t?.status }), { ...e, [a]: r };
                                                      }, {});
                                                  })(o, I, s)
                                                : ((e = {}, t) => Object.entries(e).reduce((e, [a, n]) => ({ ...e, [a]: { ...n, ...t } }), {}))(o, I);
                                        return (0, y.s0)({ conversations: E, entries: a, users: r, tweets: i, cards: t, publishedArticles: n });
                                    }
                                };
                                return I._O(t, { params: e, request: n.withEndpoint(o.Z).fetchConversation })({ actionTypes: b, context: s, meta: { conversationId: i, direction: (0, T.Sj)(e) } }, a);
                            }
                        });
                    },
                Ee =
                    (e) =>
                    (t, a, { api: n }) =>
                        I._O(t, { params: { participantIds: e }, request: n.withEndpoint(o.Z).fetchConversationFromParticipants })({ actionTypes: w, meta: { participantIds: e } }),
                le =
                    (e = {}) =>
                    (t, a) => {
                        const n = a(),
                            { conversationId: s } = e,
                            i = ee(n, s),
                            r = X(n, s);
                        return i || r ? Promise.resolve() : t(Ie({ conversationId: s, context: "FETCH_DM_CONVERSATION" }));
                    },
                pe =
                    (e = {}) =>
                    (t, a) => {
                        const n = a(),
                            { conversationId: s } = e,
                            { data: i } = K(n, s) || {},
                            { max_search_entry_id: r } = i || {},
                            o = J(n, s),
                            d = h;
                        return r && !o ? t(Ie({ conversationId: e.conversationId, min_id: r, context: d, min_position: r })) : Promise.resolve();
                    },
                Ae =
                    (e = {}) =>
                    (t, a) => {
                        let n, s;
                        const i = a(),
                            { conversationId: r } = e,
                            { data: o } = K(i, r) || {},
                            { min_entry_id: d, min_search_entry_id: c, status: _ } = o || {};
                        e?.isSearch ? ((s = "FETCH_DM_CONVERSATION_RELATIVE_HISTORY"), (n = c)) : ((s = "FETCH_DM_CONVERSATION_HISTORY"), (n = d));
                        const I = ee(i, r);
                        return _ !== m.To.HAS_MORE || I ? Promise.resolve() : t(Ie({ ...e, max_id: n, context: s }));
                    },
                Te =
                    (e = {}) =>
                    (t, a) => {
                        const n = a(),
                            { conversationId: s, entryId: i } = e;
                        return !J(n, s) && i ? t(Ie({ conversationId: s, min_id: i, min_buffer: 15, context: M, min_position: i })) : Promise.resolve();
                    },
                Oe =
                    (e) =>
                    (t, a, { api: n }) =>
                        n
                            .withEndpoint(o.Z)
                            .fetchPermissions({ recipient_ids: e.join(",") })
                            .then(({ permissions: { id_keys: e } }) => e),
                ue =
                    (e) =>
                    (t, a, { api: n }) =>
                        I._O(t, { params: { conversationId: e }, request: n.withEndpoint(o.Z).acceptConversation })({ actionTypes: f, meta: { conversationId: e } }),
                me = (e, t) => ye(e, t, !0),
                Se = (e, t) => ye(e, t, !1),
                ye =
                    (e, t, a) =>
                    (n, s, { api: i }) =>
                        I._O(n, { params: { userId: e, relationshipAction: a ? "mute" : "unmute", conversationId: t }, request: i.withEndpoint(o.Z).muteDMUser })({ actionTypes: U, meta: { userId: e, conversationId: t, mute: a } }).then(n(u.ZP.patchUser(e, { dm_muting: a }))),
                ve =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: s } = e;
                        return I.AB(t, { params: e, request: n.withEndpoint(o.Z).leaveConversation })({ actionTypes: L, context: "ACTION_LEAVE_CONVERSATION", meta: { conversationId: s } });
                    },
                Ne =
                    (e) =>
                    (t, a, { api: n }) => {
                        const s = e.join(",");
                        return I._O(t, { params: { conversationIds: s }, request: n.withEndpoint(o.Z).deleteConversations })({ actionTypes: B, context: "LEAVE_CONVERSATIONS", meta: { conversationIds: e } }, (e) => {
                            if (!e.error) return [(0, O.fz)({ text: R })];
                        });
                    },
                Re = "rweb/directMessages/ADD_CONVERSATIONS",
                Ce = (e) => ({ payload: e, type: Re }),
                ge = "rweb/directMessages/MARK_ALL_AS_READ",
                he = (e) => ({ payload: e, type: ge }),
                De = (e, t) => ({ type: V.REQUEST, meta: { conversationId: e, lastReadEventId: t } }),
                Me =
                    (e) =>
                    (t, a, { api: n }) => {
                        const s = a(),
                            { data: i = {} } = K(s, e) || {},
                            { sort_event_id: r } = i,
                            d = !ie(s, e);
                        if (e && r && d) {
                            return I.AB(t, { params: { conversationId: e, last_read_event_id: r }, request: n.withEndpoint(o.Z).markRead })({ actionTypes: V, bypassFailureOnErrors: () => !0, context: "APP_DM_UPDATE_CONVERSATION_READ_STATE", meta: { conversationId: e, lastReadEventId: r } });
                        }
                        return Promise.resolve();
                    },
                fe = "rweb/directMessages/REMOVE_CONVERSATION",
                Ue = (e) => [{ payload: e, type: fe }, (0, S.J_)(e)],
                Pe = "rweb/directMessages/TOGGLE_CONVERSATION_NOTIFICATIONS",
                be = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Pe }),
                we =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: s, duration: i } = e;
                        return I.AB(t, { params: e, request: n.withEndpoint(o.Z).disableNotifications })({ actionTypes: k, context: "ACTION_DISABLE_NOTIFICATIONS", meta: { conversationId: s, duration: i } });
                    },
                Le =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: s } = e;
                        return I.AB(t, { params: e, request: n.withEndpoint(o.Z).enableNotifications })({ actionTypes: x, context: "ACTION_ENABLE_NOTIFICATIONS", meta: { conversationId: s } });
                    },
                Be =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: s } = e,
                            i = { mention_notifications_disabled: !0, ...e };
                        return I.AB(t, { params: i, request: n.withEndpoint(o.Z).updateMentionNotificationsSetting })({ actionTypes: Z, context: "ACTION_DISABLE_DM_MENTION_NOTIFICATIONS", meta: { conversationId: s } });
                    },
                Ve =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: s } = e,
                            i = { mention_notifications_disabled: !1, ...e };
                        return I.AB(t, { params: i, request: n.withEndpoint(o.Z).updateMentionNotificationsSetting })({ actionTypes: j, context: "ACTION_ENABLE_DM_MENTION_NOTIFICATIONS", meta: { conversationId: s } });
                    },
                Ze =
                    (e = {}) =>
                    (t, a, { api: n }) =>
                        n.withEndpoint(o.Z).updateTyping(e),
                ke =
                    (e = {}) =>
                    (t, a, { api: n }) => {
                        const { conversationId: s, name: i } = e;
                        return I.AB(t, { params: e, request: n.withEndpoint(o.Z).updateConversationName })({ actionTypes: F, context: "ACTION_UPDATE_CONVERSATION_NAME", meta: { conversationId: s, name: i } });
                    },
                je = (e) => ({ type: F.SUCCESS, meta: { conversationId: e.conversation_id, name: e.conversation_name } }),
                xe = "rweb/directMessages/UPDATE_CONVERSATION_MAX_ENTRY_ID",
                Fe = (e, t) => ({ meta: { conversationId: e }, payload: t, type: xe }),
                Ye = "rweb/directMessages/ADD_AVATAR_MEDIA",
                He = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Ye }),
                Ge = "rweb/directMessages/REMOVE_AVATAR_MEDIA",
                qe = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Ge }),
                Qe = "rweb/directMessages/UPDATE_CONVERSATION_AVATAR",
                ze = (e, t) => ({ meta: { conversationId: e }, payload: t, type: Qe }),
                We = "APP_DM_UPDATE_CONVERSATION_AVATAR",
                Ke =
                    (e) =>
                    (t, a, { api: n }) => {
                        t({ meta: { conversationId: e }, type: Y.REQUEST });
                        const s = oe(a(), e),
                            i = p.$i(s);
                        return t(i).then(
                            ([a]) => {
                                t({ meta: { conversationId: e }, type: Y.SUCCESS });
                                return I._O(t, { params: { conversationId: e, avatar_id: a.uploadId }, request: n.withEndpoint(o.Z).updateConversationAvatar })({ actionTypes: H, context: We });
                            },
                            (a) => {
                                const n = { errors: a, context: We };
                                return t({ meta: { conversationId: e }, type: Y.FAILURE }), Promise.reject(n);
                            },
                        );
                    },
                $e =
                    (e, t) =>
                    (a, n, { api: s }) =>
                        I.Vg(a, { params: { conversation_id: e, welcome_message_id: t }, request: s.withEndpoint(o.Z).addWelcomeMessageToConversation })("ADD_WELCOME_MESSAGE_TO_CONVERSATION");
        },
        627279: (e, t, a) => {
            a.d(t, { I7: () => h, J_: () => U, MY: () => k, Ob: () => Y, WK: () => G, WO: () => M, ZP: () => y, _d: () => z, gm: () => H, gz: () => q, iN: () => Q, kv: () => b, pt: () => P, px: () => L, rU: () => x, s$: () => V, wC: () => D, zT: () => W });
            var n = a(468811),
                s = a.n(n),
                i = a(744531),
                r = a(933277),
                o = a(973710),
                d = a(166852),
                c = a(450681),
                _ = a(948322),
                I = a(856674),
                E = a(163889),
                l = a(917799),
                p = a(275365),
                A = a(849585),
                T = a(147143);
            const O = (0, l.dg)(T.A7, "DELETE_MESSAGE"),
                u = (0, l.dg)(T.A7, "MARK_ENTRIES_AS_SPAM"),
                m = (0, l.dg)(T.A7, "MARK_ENTRIES_AS_NOT_SPAM"),
                S = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} };
            function y(e = S, t) {
                if (!t) return e;
                const { conversationId: a = t.payload?.conversation_id, requestId: n = t.payload?.id } = t.meta || {};
                switch (t.type) {
                    case w: {
                        const { id: n } = t.payload,
                            s = { ...e.entries, [n]: v(e.entries[n], { data: t.payload }) };
                        return { ...e, entries: s, entryIdsByConversationId: { ...e.entryIdsByConversationId, [a]: R([...(e.entryIdsByConversationId[a] || []), n], s) } };
                    }
                    case B: {
                        const { id: n } = t.payload,
                            s = { ...e.entries, [n]: N(e.entries[n], t.payload) };
                        return { ...e, entries: s, entryIdsByConversationId: { ...e.entryIdsByConversationId, [a]: R([...(e.entryIdsByConversationId[a] || []), n], s) } };
                    }
                    case g: {
                        const a = Object.values(t.payload)
                                .filter((e) => e.type !== p.Cr.CONVERSATION_READ)
                                .reduce(
                                    (t, a) => {
                                        "message_edit" === a.type && ((a.id = a.message_data.id), (a.type = "message"));
                                        const { id: n } = a,
                                            s = (0, i.Z)(a, "message_reactions");
                                        return (
                                            (t.allEntries[n] = v(e.entries[n], { data: s, isLoading: !1, isLoaded: !0 })),
                                            a.message_reactions &&
                                                (a.message_reactions.forEach((n) => {
                                                    const s = { ...n, affects_sort: !0, message_id: a.id, type: p.Cr.REACTION_CREATE };
                                                    t.allEntries[s.id] = v(e.entries[s.id], { data: s, isLoading: !1, isLoaded: !0 });
                                                }),
                                                (t.embeddedReactionsByMessageId[n] = R([...(e.reactionsByMessageId[n] || []), ...a.message_reactions.map((e) => e.id)], { ...e.entries, ...t.allEntries }))),
                                            t
                                        );
                                    },
                                    { allEntries: {}, embeddedReactionsByMessageId: {} },
                                ),
                            n = { ...e.entries, ...a.allEntries },
                            s = (0, r.Z)(Object.values(a.allEntries), (e) => e.data.conversation_id),
                            o = Object.keys(s).reduce((t, a) => {
                                const i = s[a].map((e) => e.data.id);
                                return (t[a] = R([...(e.entryIdsByConversationId[a] || []), ...i], n)), t;
                            }, {});
                        return { ...e, entries: n, entryIdsByConversationId: { ...e.entryIdsByConversationId, ...o }, reactionsByMessageId: { ...e.reactionsByMessageId, ...a.embeddedReactionsByMessageId } };
                    }
                    case u.REQUEST:
                    case m.REQUEST: {
                        const a = t.type === u.REQUEST,
                            n = t.payload.reduce((t, n) => {
                                const s = e.entries[n] && e.entries[n].data;
                                return { ...t, [n]: { ...e.entries[n], data: { ...s, marked_as_spam: a } } };
                            }, {});
                        return { ...e, entries: { ...e.entries, ...n } };
                    }
                    case O.REQUEST:
                    case f: {
                        const n = t.type === f && !Array.isArray(t.payload),
                            s = e.entryIdsByConversationId[a] || [],
                            r = t.type === f ? (n ? s : t.payload) : [t.payload, ...(e.reactionsByMessageId[t.payload] || [])];
                        return { ...e, entries: (0, i.Z)(e.entries, r), entryIdsByConversationId: { ...(0, i.Z)(e.entryIdsByConversationId, a), ...(n ? {} : { [a]: (0, o.Z)(s, r) }) }, reactionsByMessageId: (0, i.Z)(e.reactionsByMessageId, r) };
                    }
                    case Z: {
                        const s = t.payload.id || n,
                            r = { ...(0, i.Z)(e.entries, s) },
                            o = R(
                                (e.entryIdsByConversationId[a] || []).filter((e) => e !== s),
                                r,
                            ),
                            d = o ? { [a]: o } : {};
                        return { ...e, entries: r, entryIdsByConversationId: { ...(0, i.Z)(e.entryIdsByConversationId, a), ...d }, reactionsByMessageId: (0, i.Z)(e.reactionsByMessageId, s) };
                    }
                    case j: {
                        const a = t.payload,
                            n = [...(e.reactionsByMessageId[a.message_id] || []), a.id],
                            s = n.filter((t) => e.entries[t]);
                        n.length !== s.length && (0, E.ZP)("DM add reaction is missing a backing entry", { extra: { filteredMessageReactionIds: s, messageReactionIds: n, currentId: a.id } });
                        const i = R(s, e.entries);
                        return { ...e, reactionsByMessageId: { ...e.reactionsByMessageId, [a.message_id]: i } };
                    }
                    case F: {
                        const a = t.payload,
                            n = (e.reactionsByMessageId[a.message_id] || []).find((t) => e.entries[t].data.sender_id === a.sender_id);
                        if (!n) return e;
                        const s = (0, o.Z)(e.entryIdsByConversationId[a.conversation_id], n),
                            r = (0, o.Z)(e.reactionsByMessageId[a.message_id], n);
                        return { ...e, entries: (0, i.Z)(e.entries, n), entryIdsByConversationId: { ...e.entryIdsByConversationId, [a.conversation_id]: s }, reactionsByMessageId: { ...e.reactionsByMessageId, [a.message_id]: r } };
                    }
                    case A.t:
                        return S;
                    default:
                        return e;
                }
            }
            const v = (e, t) => {
                    const { error: a, isLoaded: n, isLoading: s, ...i } = e || {},
                        { data: r, ...o } = t || {};
                    return { ...i, data: { ...(i && i.data), ...r }, ...o };
                },
                N = (e, t) => {
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
                g = "rweb/directMessages/ADD_ENTRIES",
                h = (e) => ({ payload: e, type: g }),
                D =
                    (...e) =>
                    (t, a, { api: n }) => {
                        const s = C(...e);
                        return t([L(s.conversation_id, s.id, s), Y(s), x(s)]);
                    },
                M =
                    (...e) =>
                    (t, a, { api: n }) => {
                        const s = C(...e);
                        return t([Y(s)]);
                    },
                f = "rweb/dm/REMOVE_CONVERSATION_ENTRIES",
                U = (e, t) => ({ meta: { conversationId: e }, payload: t, type: f }),
                P = (e, t) => ({ payload: e, type: t ? u.REQUEST : m.REQUEST }),
                b =
                    ({ conversationId: e, dmId: t, markSpam: a }) =>
                    (n, s, { api: i }) =>
                        (0, l.AB)(n, { params: { dm_id: t, report_as: a ? "spam" : "not_spam" }, request: i.withEndpoint(_.Z).reportSpam })({ actionTypes: a ? O : m, payload: a ? t : [t], meta: { conversationId: e } }),
                w = "rweb/directMessages/ADD_ENTRY",
                L = (e, t, a) => ({ meta: { conversationId: e, requestId: t }, payload: a, type: w }),
                B = "rweb/directMessages/EDIT_ENTRY",
                V = (e, t, a) => ({ meta: { conversationId: e, requestId: t }, payload: a, type: B }),
                Z = "rweb/directMessages/REMOVE_ENTRY",
                k = (e, t, a) => ({ meta: { conversationId: e, requestId: t }, payload: a, type: Z }),
                j = "rweb/directMessages/ADD_REACTION",
                x = (e) => ({ payload: { ...e, type: p.Cr.REACTION_CREATE }, type: j }),
                F = "rweb/directMessages/DELETE_REACTION",
                Y = ({ emoji_reaction: e, reaction_key: t, ...a }) => ({ payload: { ...a, type: p.Cr.REACTION_DELETE }, type: F }),
                H = (e) => e[T.Yf].entries,
                G = (e, t) => {
                    const a = H(e).entries[t];
                    return a && a.data;
                },
                q = (e, t) => e[T.Yf].entries.entryIdsByConversationId[t],
                Q = (e, t) => {
                    const a = q(e, t);
                    return a ? (0, c.Z)(a.map((t) => G(e, t))) : [];
                },
                z = (e, t) => H(e).reactionsByMessageId[t],
                W = (e, t) => (z(e, t) || []).map((t) => G(e, t).sender_id);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-8ed0fac5.f391063a.js.map
