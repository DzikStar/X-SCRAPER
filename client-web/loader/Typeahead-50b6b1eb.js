"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-50b6b1eb"],
    {
        720277: (e, t, s) => {
            s.d(t, { $7: () => se, A4: () => re, B7: () => b, C2: () => Q, Gk: () => N, Kf: () => Z, MB: () => P, Oq: () => V, Pt: () => U, Re: () => G, Sb: () => q, UD: () => O, Z3: () => Y, ZI: () => k, ZP: () => w, aB: () => g, g4: () => L, gN: () => h, j7: () => J, k5: () => F, kK: () => X, kL: () => ne, oH: () => K, s0: () => te, vC: () => $, xS: () => x });
            var r = s(161821),
                n = s(401388),
                i = s(948322),
                a = s(856674),
                o = s(234296),
                d = s(917799),
                _ = s(312771),
                u = s(56519),
                c = s(38562),
                l = s(275365),
                E = s(613195),
                p = s(627279),
                S = s(849585),
                A = s(923965),
                m = s(147143);
            const v = d.dg(m.A7, "FETCH_INBOX"),
                I = d.dg(m.A7, "UPDATE_LAST_SEEN_EVENT_ID"),
                T = { cursors: { [m.xR.Inbox]: { fetchStatus: _.ZP.NONE }, [m.xR.Trusted]: { fetchStatus: _.ZP.NONE }, [m.xR.Untrusted]: { fetchStatus: _.ZP.NONE }, [m.xR.UntrustedLowQuality]: { fetchStatus: _.ZP.NONE } }, lastSeenEventIds: {} };
            function w(e = T, t) {
                if (!t) return e;
                switch (t.type) {
                    case v.REQUEST: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], fetchStatus: _.ZP.LOADING } } };
                    }
                    case v.FAILURE: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], error: t.payload, fetchStatus: _.ZP.FAILED } } };
                    }
                    case v.SUCCESS: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], error: void 0, fetchStatus: _.ZP.LOADED } } };
                    }
                    case z:
                        return { ...e, cursors: { ...e.cursors, ...t.payload.cursors }, lastSeenEventIds: f(e.lastSeenEventIds, t.payload.lastSeenEventIds) };
                    case I.REQUEST:
                        return { ...e, lastSeenEventIds: { ...e.lastSeenEventIds, ...t.meta.lastSeenEventIds } };
                    case S.t:
                        return { ...T, cursors: { ...T.cursors, inbox: e.cursors.inbox } };
                    default:
                        return e;
                }
            }
            const f = (e, t) => ({ last_seen_event_id: R(e.last_seen_event_id, t.last_seen_event_id), trusted_last_seen_event_id: R(e.trusted_last_seen_event_id, t.trusted_last_seen_event_id), untrusted_last_seen_event_id: R(e.untrusted_last_seen_event_id, t.untrusted_last_seen_event_id) }),
                R = (e, t) => ((0, a.KH)(e, t) ? e : t),
                h = (e, t, s = "all") => {
                    const r = (0, c.Kp)(t),
                        n = (0, c.Rh)(t);
                    return r ? { ...e, filter_low_quality: n, include_quality: s } : e;
                },
                y = (e) => e[m.Yf].inbox,
                C = (e) => y(e).cursors,
                b = (e) => y(e).lastSeenEventIds,
                U = (e) => C(e)[m.xR.Inbox],
                g = (e) => C(e)[m.xR.Untrusted],
                N = (e) => C(e)[m.xR.UntrustedLowQuality],
                O = (e) => U(e).fetchStatus,
                x = (e) => O(e) === _.ZP.LOADING,
                P = (e) => O(e) === _.ZP.LOADED,
                D = { [m._2.PRIMARY]: (e) => e.trusted, [m._2.SECONDARY]: (e, t, s) => (t ? !(e.trusted || e.muted || (s && e.nsfw) || e.low_quality) : !(e.trusted || e.muted || (s && e.nsfw))), [m._2.TERTIARY]: (e, t, s) => (t ? !e.trusted && (e.muted || e.low_quality || (s && e.nsfw)) : !e.trusted && (e.muted || (s && e.nsfw))) },
                M = (e, t) => {
                    const s = (0, c.Rh)(e),
                        n = (0, c.a5)(e);
                    return (0, r.Z)((0, E.FS)(e)).filter((e) => D[t](e.data, s, n));
                },
                L = (e, t) =>
                    M(e, t)
                        .map((e) => e.data)
                        .sort(o.Z)
                        .map((e) => e.conversation_id),
                Z = (e) =>
                    M(e, m._2.PRIMARY)
                        .filter((e) => e?.data?.labels && e?.data?.labels?.find((e) => e.label_type === m.w1.PINNED))
                        .sort(o.l)
                        .map((e) => e?.data?.conversation_id),
                Y = (e, { tag: t }) =>
                    M(e, m._2.PRIMARY)
                        .filter((e) => e?.data?.tag?.value && e.data.tag.value === t?.value)
                        .map((e) => e?.data?.conversation_id),
                q = (e) => {
                    const t = M(e, m._2.PRIMARY),
                        s = M(e, m._2.SECONDARY),
                        r = t.concat(s),
                        { last_seen_event_id: n } = b(e);
                    return H(e, r, n);
                },
                F = (e) => {
                    const t = M(e, m._2.SECONDARY),
                        { untrusted_last_seen_event_id: s } = b(e);
                    return H(e, t, s);
                },
                G = (e) => {
                    let t = 0,
                        s = 0,
                        r = 0,
                        n = 0;
                    const i = M(e, m._2.SECONDARY),
                        { untrusted_last_seen_event_id: a } = b(e);
                    return (
                        i.forEach((i) => {
                            const o = i.data?.conversation_id,
                                d = a && j(e, o, a),
                                _ = B(i?.data?.social_proof);
                            d ? (_ ? (t += 1) : (r += 1)) : _ ? (s += 1) : (n += 1);
                        }),
                        { newUntrustedWithSocialProof: t, oldUntrustedWithSocialProof: s, newUntrustedWithoutSocialProof: r, oldUntrustedWithoutSocialProof: n }
                    );
                },
                V = (e) => {
                    const t = M(e, m._2.SECONDARY),
                        s = M(e, m._2.TERTIARY);
                    return t.length + s.length;
                },
                k = (e) => M(e, m._2.TERTIARY).length,
                H = (e, t, s) => (s ? t.reduce((t, { data: { conversation_id: r } }) => (j(e, r, s) ? t + 1 : t), 0) : 0),
                j = (e, t, s) => {
                    const r = (0, E.gq)(e, t),
                        n = (0, E.jT)(e, t);
                    return !!r && (0, a.T1)(r, s) && !n;
                },
                B = (e) => {
                    if (!e || 0 === e.length) return !1;
                    const t = e[0];
                    return t.proof_type === l.UN.MUTUAL_FRIENDS && 0 !== t.total;
                },
                K =
                    (e = {}) =>
                    (t, s, { api: r, featureSwitches: n }) => {
                        const a = s(),
                            o = (0, c.a5)(a),
                            _ = h({ nsfw_filtering_enabled: o, ...e }, s());
                        return d._O(t, { params: _, request: r.withEndpoint(i.Z).fetchUserInbox })({ actionTypes: v, context: "FETCH_DM_INBOX", meta: { timelineType: m.xR.Inbox } }, (e) => {
                            if (e) {
                                const { cards: t, entries: s, publishedArticles: r, tweets: n, users: i } = e.entities;
                                return te({ ...e.result.inbox_initial_state, entries: s, users: i, tweets: n, cards: t, publishedArticles: r });
                            }
                        });
                    },
                Q =
                    (e = {}) =>
                    (t, s) => {
                        const r = s(),
                            n = O(r);
                        return n !== _.ZP.LOADED && n !== _.ZP.LOADING ? t(K(e)) : Promise.resolve();
                    },
                W =
                    (e, t, s = 0) =>
                    (r, n, { api: a }) => {
                        const o = n(),
                            _ = (0, c.a5)(o),
                            { min_entry_id: u, status: E } = C(o)[e],
                            p = e === m.xR.UntrustedLowQuality ? m.xR.Untrusted : e,
                            S = { ...t, max_id: u, timelineType: p, nsfw_filtering_enabled: _ };
                        if (E !== l.To.HAS_MORE) return Promise.resolve();
                        return d
                            ._O(r, { params: S, request: a.withEndpoint(i.Z).fetchInboxHistory })({ actionTypes: v, context: "FETCH_DM_INBOX_HISTORY", meta: { timelineType: e } }, (t) => {
                                if (t) {
                                    const { cards: s, entries: r, publishedArticles: n, tweets: i, users: a } = t.entities,
                                        { inbox_timeline: o } = t.result;
                                    return te({ conversations: o.conversations, inbox_timelines: { [e]: o }, entries: r, users: a, tweets: i, cards: s, publishedArticles: n });
                                }
                            })
                            .then((n) => {
                                const i = n.result.inbox_timeline;
                                if (s < 3 && !i.conversations && i.status === l.To.HAS_MORE) return r(W(e, t, s + 1));
                            });
                    },
                X = (e) => (t, s) => {
                    const r = h(e, s(), "high");
                    return t(W(m.xR.Untrusted, r));
                },
                J = (e) => (t, s) => {
                    const r = h(e, s(), "low");
                    return t(W(m.xR.UntrustedLowQuality, r));
                },
                $ = (e) => (t, s) => {
                    const r = h(e, s());
                    return t(W(m.xR.Trusted, r));
                },
                z = "rweb/directMessages/UPDATE_INBOX",
                ee = (e) => {
                    const { inbox_timelines: t, ...s } = e;
                    return { payload: { cursors: t, lastSeenEventIds: s }, type: z };
                },
                te = (e = {}) => {
                    const { cards: t, conversations: s, cursor: r, entries: i, publishedArticles: a, tweets: o, users: d, ..._ } = e;
                    return [(0, u.dP)({ cards: t, tweets: o, users: d, publishedArticles: a }), !(0, n.Z)(s) && (0, E.tw)(s), !(0, n.Z)(i) && (0, p.I7)(i), !(0, n.Z)(r) && (0, A.NJ)(r), !(0, n.Z)(_) && ee(_)].filter((e) => e);
                },
                se = () => (e) => e(ne({ withTrusted: !0 })),
                re = () => (e) => e(ne({ withUntrusted: !0 })),
                ne =
                    ({ withTrusted: e, withUntrusted: t } = {}) =>
                    (s, r, { api: n }) => {
                        const o = r(),
                            _ = (0, E.FS)(o),
                            u = b(o),
                            { last_seen_event_id: c, trusted_last_seen_event_id: l, untrusted_last_seen_event_id: p } = u,
                            S = Object.values(_).reduce((e, { data: { sort_event_id: t, trusted: s } }) => ((e.last_seen_event_id = R(e.last_seen_event_id, t)), (e.trusted_last_seen_event_id = s ? R(e.trusted_last_seen_event_id, t) : e.trusted_last_seen_event_id), (e.untrusted_last_seen_event_id = s ? e.untrusted_last_seen_event_id : R(e.untrusted_last_seen_event_id, t)), e), { ...u });
                        if ((0, a.T1)(S.last_seen_event_id, c) || (e && (0, a.T1)(S.trusted_last_seen_event_id, l)) || (t && (0, a.T1)(S.untrusted_last_seen_event_id, p))) {
                            e || delete S.trusted_last_seen_event_id, t || delete S.untrusted_last_seen_event_id;
                            return d.AB(s, { params: S, request: n.withEndpoint(i.Z).updateLastSeenEventId })({ actionTypes: I, context: "APP_DM_UPDATE_LAST_SEEN", meta: { lastSeenEventIds: S } });
                        }
                        return Promise.resolve();
                    };
        },
        849585: (e, t, s) => {
            s.d(t, { m: () => n, t: () => r });
            const r = "rweb/directMessages/RESET",
                n = () => ({ type: r });
        },
        923965: (e, t, s) => {
            s.d(t, { H_: () => p, NJ: () => T, ZP: () => A, f9: () => m, hd: () => v, o8: () => h });
            var r = s(948322),
                n = s(917799),
                i = s(390387),
                a = s(38562),
                o = s(877848),
                d = s(275365),
                _ = s(613195),
                u = s(627279),
                c = s(720277),
                l = s(849585),
                E = s(147143);
            const p = n.dg(E.A7, "FETCH_UPDATES"),
                S = { isLoaded: !1, isLoading: !1 };
            function A(e = S, t) {
                if (!t) return e;
                switch (t.type) {
                    case p.REQUEST:
                        return { ...e, isLoading: !0 };
                    case p.FAILURE:
                        return { ...e, error: t.payload, isLoaded: !1, isLoading: !1 };
                    case p.SUCCESS: {
                        const { error: t, ...s } = e;
                        return { ...s, isLoaded: !0, isLoading: !1 };
                    }
                    case I:
                        return { ...e, cursor: t.payload };
                    case w:
                        return { ...e, tertiaryInboxStatus: t.payload };
                    case l.t:
                        return S;
                    default:
                        return e;
                }
            }
            const m =
                    (e) =>
                    (t, s, { api: d }) => {
                        const _ = s(),
                            { directMessages: u = {} } = _;
                        let { cursor: E } = u.updates || {};
                        const { polling: S, ...A } = e || {},
                            { tertiaryInboxStatus: m } = u.updates || {};
                        let v = !1;
                        const I = S ? { "x-twitter-polling": "true" } : {},
                            T = (0, a.a5)(_);
                        if (window.location.pathname.startsWith("/i/report")) return Promise.resolve();
                        const w = [(0, a.Kp)(s()) ? "on" : "off", T ? "on" : "off"].join();
                        m ? m !== w && ((E = null), (v = !0)) : (v = !0);
                        const h = (0, c.gN)({ ...A, nsfw_filtering_enabled: T, cursor: E }, s());
                        return n._O(t, { params: h, headers: I, request: d.withEndpoint(r.Z).fetchUserUpdates })({ actionTypes: p, context: "FETCH_DM_USER_UPDATES", meta: { direction: (0, o.Sj)(e) } }, (e) => {
                            if (e) {
                                const { cards: t, entries: s, publishedArticles: r, tweets: n, users: a } = e.entities,
                                    { inbox_initial_state: o, user_events: d } = e.result;
                                return [o && (0, l.m)(), ...(0, c.s0)({ ...(d || o), entries: s, users: a, tweets: n, cards: t, publishedArticles: r }), ...(d ? R(Object.values(s || []), i._h(_)) : []), v && f(w)];
                            }
                        });
                    },
                v = (e) => (t, s) => (y(s()) ? Promise.resolve() : t(m(e))),
                I = "rweb/directMessages/UPDATE_CURSOR",
                T = (e) => ({ payload: e, type: I }),
                w = "rweb/directMessages/UPDATE_TERTIARY_INBOX_STATUS",
                f = (e) => ({ payload: e, type: w }),
                R = (e = [], t) =>
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
                                        (0, u.J_)(
                                            s.conversation_id,
                                            s.messages.reduce((e, t) => [...e, ...Object.values(t)], []),
                                        ),
                                    ];
                                case d.Cr.MESSAGE_MARK_AS_NOT_SPAM:
                                case d.Cr.MESSAGE_MARK_AS_SPAM: {
                                    const t = s.type === d.Cr.MESSAGE_MARK_AS_SPAM;
                                    return [
                                        ...e,
                                        (0, u.pt)(
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
                                        .concat(t !== s.sender_id && [(0, u.Ob)(s), (0, u.rU)(s)])
                                        .concat((0, _.Ek)(s.conversation_id, s.id))
                                        .filter(Boolean);
                                case d.Cr.REACTION_DELETE:
                                    return [...e, (0, u.Ob)(s)];
                                case d.Cr.MESSAGE:
                                    return [...e, (0, _.Ek)(s.conversation_id, s.id)].filter((e) => e);
                                default:
                                    return e;
                            }
                        }, []),
                h = (e) => e[E.Yf].updates,
                y = (e) => h(e).isLoading;
        },
        147143: (e, t, s) => {
            s.d(t, { A7: () => n, Yf: () => r, _2: () => a, w1: () => i, xR: () => o });
            const r = "directMessages",
                n = `rweb/${r}`,
                i = Object.freeze({ PINNED: "Pinned", REPLY_LATER: "ReplyLater" }),
                a = Object.freeze({ PRIMARY: "primary", SECONDARY: "secondary", TERTIARY: "tertiary" }),
                o = { Inbox: "inbox", Trusted: "trusted", Untrusted: "untrusted", UntrustedLowQuality: "untrusted_low_quality" };
        },
        798538: (e, t, s) => {
            s.d(t, { Ah: () => P, Bw: () => C, De: () => G, E4: () => h, G6: () => g, Hd: () => I, Tu: () => D, W8: () => O, bG: () => T, m1: () => Y, q9: () => x, qK: () => b, rA: () => L, vb: () => f });
            s(136728);
            var r = s(468811),
                n = s.n(r),
                i = s(364837),
                a = s(450681),
                o = s(184605),
                d = s(948322),
                _ = s(705079),
                u = s(499627),
                c = s(917799),
                l = s(627279),
                E = s(720277),
                p = s(923965),
                S = s(497294);
            const A = "dmComposer",
                m = {};
            const v = (e) => {
                    const { conversation_id: t, id: s, localMediaId: r, recipient_ids: n, sender_id: i, text: a, attachment: o = {}, error: d } = e,
                        _ = Date.now().toString();
                    return { conversation_id: t, recipient_ids: n, error: d, id: s, is_draft: !0, message_data: { attachment: o, localMediaId: r, sender_id: i, text: a, time: _ }, type: "message", time: _ };
                },
                I =
                    (e) =>
                    (t, s, { api: r }) => {
                        const { conversationId: i, requestId: o = n().v1(), messageId: _ } = e || {},
                            u = { conversationId: i, requestId: o, messageId: _, text: e.text };
                        return r
                            .withEndpoint(d.Z)
                            .editMessage(u, {})
                            .then((e) => {
                                const { message_data: s } = e.result,
                                    r = (0, a.Z)([{ type: "rweb/dmComposer/EDIT_MESSAGE_SUCCESS" }, i && (0, l.s$)(i, o, s || {})]);
                                t(r);
                            });
                    },
                T =
                    (e) =>
                    (t, s, { api: r }) => {
                        const { allowVideoDownload: u, senderId: A, cardUrl: m, conversationId: I, localMediaId: T, recipients: w = [], requestId: f = n().v1(), tweetAttachment: R, quickReply: h, text: y, replyToDmId: b } = e || {};
                        t(k(I));
                        const U = s();
                        let g = T || N(s(), I);
                        null === g && (g = []);
                        const [O] = S.m3(U, g),
                            { mediaFile: x, mediaMetadata: P } = O || {},
                            M = w.length > 0 && w.join(","),
                            L = {};
                        x && x.isGif ? (L.extraInitParams = "&media_category=dm_gif") : x && x.isVideo && (L.extraInitParams = "&media_category=dm_video");
                        const Z = S.$i(g, L),
                            Y = [t(Z)],
                            q = D(U, I),
                            { found_media_origin: F } = q || {};
                        return (
                            x && x.isGif && Y.push((0, i.R)(x)),
                            Promise.all(Y).then(
                                ([[s], n]) => {
                                    const i = P?.altText || P?.defaultAltText || "",
                                        T = !!i;
                                    let w;
                                    (F || T) && (w = { media_id: s.uploadId, found_media_origin: F, ...(!!T && { alt_text: { text: i || "" } }) }), x?.isVideo && u && (w = { media_id: s.uploadId, allow_download_status: { allow_download: "true" } });
                                    return (s && w ? t(S.o6(w)) : Promise.resolve()).then(
                                        () => {
                                            const { id_str: i } = R || {},
                                                u = {};
                                            if (s) {
                                                const { mediaFile: e = {} } = s,
                                                    t = { original_info: { width: e.width, height: e.height }, sizes: [{ h: e.height, w: e.width, resize: "fit" }] };
                                                e.isImage ? (u.photo = { ...t, media_url_https: e.url }) : e.isGif ? (u.animated_gif = { ...t, media_url_https: n, type: "animated_gif" }) : e.isVideo && (u.video = { ...t, media_url_https: e.url, type: "video" });
                                            } else R && (u.tweet = { status: i });
                                            const { uploadId: S } = s || {},
                                                T = v({ attachment: u, conversation_id: I, error: !1, id: f, localMediaId: null, recipient_ids: M, sender_id: A, text: y }),
                                                w = { ...((0, _.s)(m) && { card_uri: m }), conversation_id: I, ...(!i && { media_id: S }), recipient_ids: M, request_id: f, reply_to_dm_id: b, text: e.text, tweet_id: i };
                                            h && ((w["quick_reply_response[options][id]"] = h.id), (w["quick_reply_response[options][selected_id]"] = h.selected_id));
                                            const U = (0, a.Z)([j(I), { type: p.H_.REQUEST }, { type: "rweb/dmComposer/SEND_MESSAGE_REQUEST" }, I && (0, l.px)(I, f, T)]);
                                            return (
                                                t(U),
                                                r
                                                    .withEndpoint(d.Z)
                                                    .sendMessage(w)
                                                    .then(
                                                        (s) => {
                                                            const { cards: r, entries: n, publishedArticles: i, tweets: d, users: _ } = s.entities,
                                                                { conversations: u } = s.result;
                                                            (0, o.Z)(g) && t(G(I, g));
                                                            const c = (0, a.Z)([{ type: p.H_.SUCCESS }, ...(0, E.s0)({ conversations: u, entries: n, users: _, tweets: d, cards: r, publishedArticles: i }), { type: "rweb/dmComposer/SEND_MESSAGE_SUCCESS" }, I && (0, l.MY)(I, f, e), C(I)]);
                                                            t(c);
                                                            const S = Object.values(s.entities.entries)[0].conversation_id;
                                                            return Promise.resolve({ conversationId: S });
                                                        },
                                                        (e) => {
                                                            const s = v({ attachment: u, conversation_id: I, error: !0, id: f, localMediaId: g, recipient_ids: M, sender_id: A, text: y }),
                                                                r = (0, a.Z)([{ type: p.H_.SUCCESS }, { type: "rweb/dmComposer/SEND_MESSAGE_FAILURE" }, I && (0, l.px)(I, f, s)]);
                                                            return t(r), (0, c.Vm)(t, e, "ACTION_SEND_DM");
                                                        },
                                                    )
                                            );
                                        },
                                        (e) => (t(K(I)), (e.type = "metadata"), Promise.reject(e)),
                                    );
                                },
                                (e) => (t((0, a.Z)([(0, o.Z)(g) && G(I, g), K(I)])), Promise.reject(e)),
                            )
                        );
                    },
                w = (e, t) => e[A][t],
                f = (e, t) => {
                    const s = w(e, t);
                    return s ? s.text : null;
                },
                R = "rweb/dmComposer/SAVE_TEXT",
                h = (e, t) => ({ type: R, conversationId: e, text: t }),
                y = "rweb/dmComposer/REMOVE_TEXT",
                C = (e) => ({ type: y, conversationId: e }),
                b = (e, t) => {
                    const s = w(e, t);
                    return s ? s.cardUrl : null;
                },
                U = "rweb/dmComposer/SAVE_CARD_URL",
                g = (e, t) => ({ type: U, conversationId: e, cardUrl: t }),
                N = (e, t) => {
                    const s = w(e, t);
                    return s && void 0 !== s.mediaId ? s.mediaId : null;
                },
                O = (e, t) => {
                    const s = S.m3(e, N(e, t) || []);
                    return s.length > 0 ? s[0] : null;
                },
                x = (e, t) => {
                    const s = w(e, t);
                    return !!s && s.isUploading;
                },
                P = (e, t) => S._T(e, N(e, t) || 0),
                D = (e, t) => {
                    const s = w(e, t);
                    return s && s.gifMetadata ? s.gifMetadata : null;
                },
                M = "rweb/dmComposer/ADD_MEDIA",
                L = (e, [t], s) => ({ payload: { isUploading: !1, mediaId: t, gifMetadata: s }, type: M, conversationId: e }),
                Z = "rweb/dmComposer/CANCEL_UPLOAD",
                Y = (e) => ({ type: Z, conversationId: e }),
                q = "rweb/dmComposer/REMOVE_MEDIA",
                F = (e) => ({ type: q, conversationId: e }),
                G = (e, t) => (s) => {
                    s(S.WU(t)), s([Y(e), F(e)]);
                },
                V = "rweb/dmComposer/UPLOAD_REQUEST",
                k = (e) => ({ type: V, conversationId: e }),
                H = "rweb/dmComposer/UPLOAD_SUCCESS",
                j = (e) => ({ type: H, conversationId: e }),
                B = "rweb/dmComposer/UPLOAD_FAILURE",
                K = (e) => ({ type: B, conversationId: e });
            u.Z.register({
                [A]: function (e = m, t) {
                    if (!t) return e;
                    const s = t.conversationId || "new_group",
                        r = e[s] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null };
                    switch (t.type) {
                        case M:
                            return { ...e, [s]: { ...r, ...t.payload } };
                        case V:
                            return { ...e, [s]: { ...r, isUploading: !0 } };
                        case Z:
                            return { ...e, [s]: { ...r, isUploading: !1 } };
                        case B:
                        case H:
                        case q:
                            return { ...e, [s]: { ...r, isUploading: !1, mediaId: null, gifMetadata: void 0 } };
                        case R:
                            return { ...e, [s]: { ...r, text: t.text } };
                        case U:
                            return { ...e, [s]: { ...r, cardUrl: t.cardUrl } };
                        case y:
                            return { ...e, [s]: { ...r, text: null } };
                        default:
                            return e;
                    }
                },
            });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-50b6b1eb.4871b29a.js.map
