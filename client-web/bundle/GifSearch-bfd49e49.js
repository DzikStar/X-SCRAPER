"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GifSearch-bfd49e49"],
    {
        720277: (e, t, s) => {
            s.d(t, { $7: () => se, A4: () => re, B7: () => R, C2: () => K, Gk: () => O, Kf: () => Z, MB: () => x, Oq: () => V, Pt: () => C, Re: () => G, Sb: () => q, UD: () => U, Z3: () => F, ZI: () => H, ZP: () => f, aB: () => P, g4: () => L, gN: () => T, j7: () => X, k5: () => Y, kK: () => $, kL: () => ne, oH: () => B, s0: () => te, vC: () => J, xS: () => b });
            var r = s(161821),
                n = s(401388),
                a = s(948322),
                i = s(856674),
                o = s(234296),
                d = s(917799),
                c = s(312771),
                u = s(56519),
                _ = s(38562),
                l = s(275365),
                p = s(613195),
                E = s(627279),
                m = s(849585),
                S = s(923965),
                A = s(147143);
            const I = d.dg(A.A7, "FETCH_INBOX"),
                v = d.dg(A.A7, "UPDATE_LAST_SEEN_EVENT_ID"),
                h = { cursors: { [A.xR.Inbox]: { fetchStatus: c.ZP.NONE }, [A.xR.Trusted]: { fetchStatus: c.ZP.NONE }, [A.xR.Untrusted]: { fetchStatus: c.ZP.NONE }, [A.xR.UntrustedLowQuality]: { fetchStatus: c.ZP.NONE } }, lastSeenEventIds: {} };
            function f(e = h, t) {
                if (!t) return e;
                switch (t.type) {
                    case I.REQUEST: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], fetchStatus: c.ZP.LOADING } } };
                    }
                    case I.FAILURE: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], error: t.payload, fetchStatus: c.ZP.FAILED } } };
                    }
                    case I.SUCCESS: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], error: void 0, fetchStatus: c.ZP.LOADED } } };
                    }
                    case z:
                        return { ...e, cursors: { ...e.cursors, ...t.payload.cursors }, lastSeenEventIds: w(e.lastSeenEventIds, t.payload.lastSeenEventIds) };
                    case v.REQUEST:
                        return { ...e, lastSeenEventIds: { ...e.lastSeenEventIds, ...t.meta.lastSeenEventIds } };
                    case m.t:
                        return { ...h, cursors: { ...h.cursors, inbox: e.cursors.inbox } };
                    default:
                        return e;
                }
            }
            const w = (e, t) => ({ last_seen_event_id: y(e.last_seen_event_id, t.last_seen_event_id), trusted_last_seen_event_id: y(e.trusted_last_seen_event_id, t.trusted_last_seen_event_id), untrusted_last_seen_event_id: y(e.untrusted_last_seen_event_id, t.untrusted_last_seen_event_id) }),
                y = (e, t) => ((0, i.KH)(e, t) ? e : t),
                T = (e, t, s = "all") => {
                    const r = (0, _.Kp)(t),
                        n = (0, _.Rh)(t);
                    return r ? { ...e, filter_low_quality: n, include_quality: s } : e;
                },
                g = (e) => e[A.Yf].inbox,
                N = (e) => g(e).cursors,
                R = (e) => g(e).lastSeenEventIds,
                C = (e) => N(e)[A.xR.Inbox],
                P = (e) => N(e)[A.xR.Untrusted],
                O = (e) => N(e)[A.xR.UntrustedLowQuality],
                U = (e) => C(e).fetchStatus,
                b = (e) => U(e) === c.ZP.LOADING,
                x = (e) => U(e) === c.ZP.LOADED,
                D = { [A._2.PRIMARY]: (e) => e.trusted, [A._2.SECONDARY]: (e, t, s) => (t ? !(e.trusted || e.muted || (s && e.nsfw) || e.low_quality) : !(e.trusted || e.muted || (s && e.nsfw))), [A._2.TERTIARY]: (e, t, s) => (t ? !e.trusted && (e.muted || e.low_quality || (s && e.nsfw)) : !e.trusted && (e.muted || (s && e.nsfw))) },
                M = (e, t) => {
                    const s = (0, _.Rh)(e),
                        n = (0, _.a5)(e);
                    return (0, r.Z)((0, p.FS)(e)).filter((e) => D[t](e.data, s, n));
                },
                L = (e, t) =>
                    M(e, t)
                        .map((e) => e.data)
                        .sort(o.Z)
                        .map((e) => e.conversation_id),
                Z = (e) =>
                    M(e, A._2.PRIMARY)
                        .filter((e) => e?.data?.labels && e?.data?.labels?.find((e) => e.label_type === A.w1.PINNED))
                        .sort(o.l)
                        .map((e) => e?.data?.conversation_id),
                F = (e, { tag: t }) =>
                    M(e, A._2.PRIMARY)
                        .filter((e) => e?.data?.tag?.value && e.data.tag.value === t?.value)
                        .map((e) => e?.data?.conversation_id),
                q = (e) => {
                    const t = M(e, A._2.PRIMARY),
                        s = M(e, A._2.SECONDARY),
                        r = t.concat(s),
                        { last_seen_event_id: n } = R(e);
                    return k(e, r, n);
                },
                Y = (e) => {
                    const t = M(e, A._2.SECONDARY),
                        { untrusted_last_seen_event_id: s } = R(e);
                    return k(e, t, s);
                },
                G = (e) => {
                    let t = 0,
                        s = 0,
                        r = 0,
                        n = 0;
                    const a = M(e, A._2.SECONDARY),
                        { untrusted_last_seen_event_id: i } = R(e);
                    return (
                        a.forEach((a) => {
                            const o = a.data?.conversation_id,
                                d = i && Q(e, o, i),
                                c = j(a?.data?.social_proof);
                            d ? (c ? (t += 1) : (r += 1)) : c ? (s += 1) : (n += 1);
                        }),
                        { newUntrustedWithSocialProof: t, oldUntrustedWithSocialProof: s, newUntrustedWithoutSocialProof: r, oldUntrustedWithoutSocialProof: n }
                    );
                },
                V = (e) => {
                    const t = M(e, A._2.SECONDARY),
                        s = M(e, A._2.TERTIARY);
                    return t.length + s.length;
                },
                H = (e) => M(e, A._2.TERTIARY).length,
                k = (e, t, s) => (s ? t.reduce((t, { data: { conversation_id: r } }) => (Q(e, r, s) ? t + 1 : t), 0) : 0),
                Q = (e, t, s) => {
                    const r = (0, p.gq)(e, t),
                        n = (0, p.jT)(e, t);
                    return !!r && (0, i.T1)(r, s) && !n;
                },
                j = (e) => {
                    if (!e || 0 === e.length) return !1;
                    const t = e[0];
                    return t.proof_type === l.UN.MUTUAL_FRIENDS && 0 !== t.total;
                },
                B =
                    (e = {}) =>
                    (t, s, { api: r, featureSwitches: n }) => {
                        const i = s(),
                            o = (0, _.a5)(i),
                            c = T({ nsfw_filtering_enabled: o, ...e }, s());
                        return d._O(t, { params: c, request: r.withEndpoint(a.Z).fetchUserInbox })({ actionTypes: I, context: "FETCH_DM_INBOX", meta: { timelineType: A.xR.Inbox } }, (e) => {
                            if (e) {
                                const { cards: t, entries: s, publishedArticles: r, tweets: n, users: a } = e.entities;
                                return te({ ...e.result.inbox_initial_state, entries: s, users: a, tweets: n, cards: t, publishedArticles: r });
                            }
                        });
                    },
                K =
                    (e = {}) =>
                    (t, s) => {
                        const r = s(),
                            n = U(r);
                        return n !== c.ZP.LOADED && n !== c.ZP.LOADING ? t(B(e)) : Promise.resolve();
                    },
                W =
                    (e, t, s = 0) =>
                    (r, n, { api: i }) => {
                        const o = n(),
                            c = (0, _.a5)(o),
                            { min_entry_id: u, status: p } = N(o)[e],
                            E = e === A.xR.UntrustedLowQuality ? A.xR.Untrusted : e,
                            m = { ...t, max_id: u, timelineType: E, nsfw_filtering_enabled: c };
                        if (p !== l.To.HAS_MORE) return Promise.resolve();
                        return d
                            ._O(r, { params: m, request: i.withEndpoint(a.Z).fetchInboxHistory })({ actionTypes: I, context: "FETCH_DM_INBOX_HISTORY", meta: { timelineType: e } }, (t) => {
                                if (t) {
                                    const { cards: s, entries: r, publishedArticles: n, tweets: a, users: i } = t.entities,
                                        { inbox_timeline: o } = t.result;
                                    return te({ conversations: o.conversations, inbox_timelines: { [e]: o }, entries: r, users: i, tweets: a, cards: s, publishedArticles: n });
                                }
                            })
                            .then((n) => {
                                const a = n.result.inbox_timeline;
                                if (s < 3 && !a.conversations && a.status === l.To.HAS_MORE) return r(W(e, t, s + 1));
                            });
                    },
                $ = (e) => (t, s) => {
                    const r = T(e, s(), "high");
                    return t(W(A.xR.Untrusted, r));
                },
                X = (e) => (t, s) => {
                    const r = T(e, s(), "low");
                    return t(W(A.xR.UntrustedLowQuality, r));
                },
                J = (e) => (t, s) => {
                    const r = T(e, s());
                    return t(W(A.xR.Trusted, r));
                },
                z = "rweb/directMessages/UPDATE_INBOX",
                ee = (e) => {
                    const { inbox_timelines: t, ...s } = e;
                    return { payload: { cursors: t, lastSeenEventIds: s }, type: z };
                },
                te = (e = {}) => {
                    const { cards: t, conversations: s, cursor: r, entries: a, publishedArticles: i, tweets: o, users: d, ...c } = e;
                    return [(0, u.dP)({ cards: t, tweets: o, users: d, publishedArticles: i }), !(0, n.Z)(s) && (0, p.tw)(s), !(0, n.Z)(a) && (0, E.I7)(a), !(0, n.Z)(r) && (0, S.NJ)(r), !(0, n.Z)(c) && ee(c)].filter((e) => e);
                },
                se = () => (e) => e(ne({ withTrusted: !0 })),
                re = () => (e) => e(ne({ withUntrusted: !0 })),
                ne =
                    ({ withTrusted: e, withUntrusted: t } = {}) =>
                    (s, r, { api: n }) => {
                        const o = r(),
                            c = (0, p.FS)(o),
                            u = R(o),
                            { last_seen_event_id: _, trusted_last_seen_event_id: l, untrusted_last_seen_event_id: E } = u,
                            m = Object.values(c).reduce((e, { data: { sort_event_id: t, trusted: s } }) => ((e.last_seen_event_id = y(e.last_seen_event_id, t)), (e.trusted_last_seen_event_id = s ? y(e.trusted_last_seen_event_id, t) : e.trusted_last_seen_event_id), (e.untrusted_last_seen_event_id = s ? e.untrusted_last_seen_event_id : y(e.untrusted_last_seen_event_id, t)), e), { ...u });
                        if ((0, i.T1)(m.last_seen_event_id, _) || (e && (0, i.T1)(m.trusted_last_seen_event_id, l)) || (t && (0, i.T1)(m.untrusted_last_seen_event_id, E))) {
                            e || delete m.trusted_last_seen_event_id, t || delete m.untrusted_last_seen_event_id;
                            return d.AB(s, { params: m, request: n.withEndpoint(a.Z).updateLastSeenEventId })({ actionTypes: v, context: "APP_DM_UPDATE_LAST_SEEN", meta: { lastSeenEventIds: m } });
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
            s.d(t, { H_: () => E, NJ: () => h, ZP: () => S, f9: () => A, hd: () => I, o8: () => T });
            var r = s(948322),
                n = s(917799),
                a = s(390387),
                i = s(38562),
                o = s(877848),
                d = s(275365),
                c = s(613195),
                u = s(627279),
                _ = s(720277),
                l = s(849585),
                p = s(147143);
            const E = n.dg(p.A7, "FETCH_UPDATES"),
                m = { isLoaded: !1, isLoading: !1 };
            function S(e = m, t) {
                if (!t) return e;
                switch (t.type) {
                    case E.REQUEST:
                        return { ...e, isLoading: !0 };
                    case E.FAILURE:
                        return { ...e, error: t.payload, isLoaded: !1, isLoading: !1 };
                    case E.SUCCESS: {
                        const { error: t, ...s } = e;
                        return { ...s, isLoaded: !0, isLoading: !1 };
                    }
                    case v:
                        return { ...e, cursor: t.payload };
                    case f:
                        return { ...e, tertiaryInboxStatus: t.payload };
                    case l.t:
                        return m;
                    default:
                        return e;
                }
            }
            const A =
                    (e) =>
                    (t, s, { api: d }) => {
                        const c = s(),
                            { directMessages: u = {} } = c;
                        let { cursor: p } = u.updates || {};
                        const { polling: m, ...S } = e || {},
                            { tertiaryInboxStatus: A } = u.updates || {};
                        let I = !1;
                        const v = m ? { "x-twitter-polling": "true" } : {},
                            h = (0, i.a5)(c);
                        if (window.location.pathname.startsWith("/i/report")) return Promise.resolve();
                        const f = [(0, i.Kp)(s()) ? "on" : "off", h ? "on" : "off"].join();
                        A ? A !== f && ((p = null), (I = !0)) : (I = !0);
                        const T = (0, _.gN)({ ...S, nsfw_filtering_enabled: h, cursor: p }, s());
                        return n._O(t, { params: T, headers: v, request: d.withEndpoint(r.Z).fetchUserUpdates })({ actionTypes: E, context: "FETCH_DM_USER_UPDATES", meta: { direction: (0, o.Sj)(e) } }, (e) => {
                            if (e) {
                                const { cards: t, entries: s, publishedArticles: r, tweets: n, users: i } = e.entities,
                                    { inbox_initial_state: o, user_events: d } = e.result;
                                return [o && (0, l.m)(), ...(0, _.s0)({ ...(d || o), entries: s, users: i, tweets: n, cards: t, publishedArticles: r }), ...(d ? y(Object.values(s || []), a._h(c)) : []), I && w(f)];
                            }
                        });
                    },
                I = (e) => (t, s) => (g(s()) ? Promise.resolve() : t(A(e))),
                v = "rweb/directMessages/UPDATE_CURSOR",
                h = (e) => ({ payload: e, type: v }),
                f = "rweb/directMessages/UPDATE_TERTIARY_INBOX_STATUS",
                w = (e) => ({ payload: e, type: f }),
                y = (e = [], t) =>
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
                                    return [...e, ...(0, c.Ae)(s.conversation_id)];
                                case d.Cr.JOIN_CONVERSATION:
                                case d.Cr.PARTICIPANTS_JOIN:
                                case d.Cr.PARTICIPANTS_LEAVE:
                                    return [...e, (0, c.Ek)(s.conversation_id, s.id)];
                                case d.Cr.REACTION_CREATE:
                                    return [e]
                                        .concat(t !== s.sender_id && [(0, u.Ob)(s), (0, u.rU)(s)])
                                        .concat((0, c.Ek)(s.conversation_id, s.id))
                                        .filter(Boolean);
                                case d.Cr.REACTION_DELETE:
                                    return [...e, (0, u.Ob)(s)];
                                case d.Cr.MESSAGE:
                                    return [...e, (0, c.Ek)(s.conversation_id, s.id)].filter((e) => e);
                                default:
                                    return e;
                            }
                        }, []),
                T = (e) => e[p.Yf].updates,
                g = (e) => T(e).isLoading;
        },
        147143: (e, t, s) => {
            s.d(t, { A7: () => n, Yf: () => r, _2: () => i, w1: () => a, xR: () => o });
            const r = "directMessages",
                n = `rweb/${r}`,
                a = Object.freeze({ PINNED: "Pinned", REPLY_LATER: "ReplyLater" }),
                i = Object.freeze({ PRIMARY: "primary", SECONDARY: "secondary", TERTIARY: "tertiary" }),
                o = { Inbox: "inbox", Trusted: "trusted", Untrusted: "untrusted", UntrustedLowQuality: "untrusted_low_quality" };
        },
        798538: (e, t, s) => {
            s.d(t, { Ah: () => x, Bw: () => N, De: () => G, E4: () => T, G6: () => P, Hd: () => v, Tu: () => D, W8: () => U, bG: () => h, m1: () => F, q9: () => b, qK: () => R, rA: () => L, vb: () => w });
            s(136728);
            var r = s(468811),
                n = s.n(r),
                a = s(364837),
                i = s(450681),
                o = s(184605),
                d = s(948322),
                c = s(705079),
                u = s(499627),
                _ = s(917799),
                l = s(627279),
                p = s(720277),
                E = s(923965),
                m = s(497294);
            const S = "dmComposer",
                A = {};
            const I = (e) => {
                    const { conversation_id: t, id: s, localMediaId: r, recipient_ids: n, sender_id: a, text: i, attachment: o = {}, error: d } = e,
                        c = Date.now().toString();
                    return { conversation_id: t, recipient_ids: n, error: d, id: s, is_draft: !0, message_data: { attachment: o, localMediaId: r, sender_id: a, text: i, time: c }, type: "message", time: c };
                },
                v =
                    (e) =>
                    (t, s, { api: r }) => {
                        const { conversationId: a, requestId: o = n().v1(), messageId: c } = e || {},
                            u = { conversationId: a, requestId: o, messageId: c, text: e.text };
                        return r
                            .withEndpoint(d.Z)
                            .editMessage(u, {})
                            .then((e) => {
                                const { message_data: s } = e.result,
                                    r = (0, i.Z)([{ type: "rweb/dmComposer/EDIT_MESSAGE_SUCCESS" }, a && (0, l.s$)(a, o, s || {})]);
                                t(r);
                            });
                    },
                h =
                    (e) =>
                    (t, s, { api: r }) => {
                        const { allowVideoDownload: u, senderId: S, cardUrl: A, conversationId: v, localMediaId: h, recipients: f = [], requestId: w = n().v1(), tweetAttachment: y, quickReply: T, text: g, replyToDmId: R } = e || {};
                        t(H(v));
                        const C = s();
                        let P = h || O(s(), v);
                        null === P && (P = []);
                        const [U] = m.m3(C, P),
                            { mediaFile: b, mediaMetadata: x } = U || {},
                            M = f.length > 0 && f.join(","),
                            L = {};
                        b && b.isGif ? (L.extraInitParams = "&media_category=dm_gif") : b && b.isVideo && (L.extraInitParams = "&media_category=dm_video");
                        const Z = m.$i(P, L),
                            F = [t(Z)],
                            q = D(C, v),
                            { found_media_origin: Y } = q || {};
                        return (
                            b && b.isGif && F.push((0, a.R)(b)),
                            Promise.all(F).then(
                                ([[s], n]) => {
                                    const a = x?.altText || x?.defaultAltText || "",
                                        h = !!a;
                                    let f;
                                    (Y || h) && (f = { media_id: s.uploadId, found_media_origin: Y, ...(!!h && { alt_text: { text: a || "" } }) }), b?.isVideo && u && (f = { media_id: s.uploadId, allow_download_status: { allow_download: "true" } });
                                    return (s && f ? t(m.o6(f)) : Promise.resolve()).then(
                                        () => {
                                            const { id_str: a } = y || {},
                                                u = {};
                                            if (s) {
                                                const { mediaFile: e = {} } = s,
                                                    t = { original_info: { width: e.width, height: e.height }, sizes: [{ h: e.height, w: e.width, resize: "fit" }] };
                                                e.isImage ? (u.photo = { ...t, media_url_https: e.url }) : e.isGif ? (u.animated_gif = { ...t, media_url_https: n, type: "animated_gif" }) : e.isVideo && (u.video = { ...t, media_url_https: e.url, type: "video" });
                                            } else y && (u.tweet = { status: a });
                                            const { uploadId: m } = s || {},
                                                h = I({ attachment: u, conversation_id: v, error: !1, id: w, localMediaId: null, recipient_ids: M, sender_id: S, text: g }),
                                                f = { ...((0, c.s)(A) && { card_uri: A }), conversation_id: v, ...(!a && { media_id: m }), recipient_ids: M, request_id: w, reply_to_dm_id: R, text: e.text, tweet_id: a };
                                            T && ((f["quick_reply_response[options][id]"] = T.id), (f["quick_reply_response[options][selected_id]"] = T.selected_id));
                                            const C = (0, i.Z)([Q(v), { type: E.H_.REQUEST }, { type: "rweb/dmComposer/SEND_MESSAGE_REQUEST" }, v && (0, l.px)(v, w, h)]);
                                            return (
                                                t(C),
                                                r
                                                    .withEndpoint(d.Z)
                                                    .sendMessage(f)
                                                    .then(
                                                        (s) => {
                                                            const { cards: r, entries: n, publishedArticles: a, tweets: d, users: c } = s.entities,
                                                                { conversations: u } = s.result;
                                                            (0, o.Z)(P) && t(G(v, P));
                                                            const _ = (0, i.Z)([{ type: E.H_.SUCCESS }, ...(0, p.s0)({ conversations: u, entries: n, users: c, tweets: d, cards: r, publishedArticles: a }), { type: "rweb/dmComposer/SEND_MESSAGE_SUCCESS" }, v && (0, l.MY)(v, w, e), N(v)]);
                                                            t(_);
                                                            const m = Object.values(s.entities.entries)[0].conversation_id;
                                                            return Promise.resolve({ conversationId: m });
                                                        },
                                                        (e) => {
                                                            const s = I({ attachment: u, conversation_id: v, error: !0, id: w, localMediaId: P, recipient_ids: M, sender_id: S, text: g }),
                                                                r = (0, i.Z)([{ type: E.H_.SUCCESS }, { type: "rweb/dmComposer/SEND_MESSAGE_FAILURE" }, v && (0, l.px)(v, w, s)]);
                                                            return t(r), (0, _.Vm)(t, e, "ACTION_SEND_DM");
                                                        },
                                                    )
                                            );
                                        },
                                        (e) => (t(B(v)), (e.type = "metadata"), Promise.reject(e)),
                                    );
                                },
                                (e) => (t((0, i.Z)([(0, o.Z)(P) && G(v, P), B(v)])), Promise.reject(e)),
                            )
                        );
                    },
                f = (e, t) => e[S][t],
                w = (e, t) => {
                    const s = f(e, t);
                    return s ? s.text : null;
                },
                y = "rweb/dmComposer/SAVE_TEXT",
                T = (e, t) => ({ type: y, conversationId: e, text: t }),
                g = "rweb/dmComposer/REMOVE_TEXT",
                N = (e) => ({ type: g, conversationId: e }),
                R = (e, t) => {
                    const s = f(e, t);
                    return s ? s.cardUrl : null;
                },
                C = "rweb/dmComposer/SAVE_CARD_URL",
                P = (e, t) => ({ type: C, conversationId: e, cardUrl: t }),
                O = (e, t) => {
                    const s = f(e, t);
                    return s && void 0 !== s.mediaId ? s.mediaId : null;
                },
                U = (e, t) => {
                    const s = m.m3(e, O(e, t) || []);
                    return s.length > 0 ? s[0] : null;
                },
                b = (e, t) => {
                    const s = f(e, t);
                    return !!s && s.isUploading;
                },
                x = (e, t) => m._T(e, O(e, t) || 0),
                D = (e, t) => {
                    const s = f(e, t);
                    return s && s.gifMetadata ? s.gifMetadata : null;
                },
                M = "rweb/dmComposer/ADD_MEDIA",
                L = (e, [t], s) => ({ payload: { isUploading: !1, mediaId: t, gifMetadata: s }, type: M, conversationId: e }),
                Z = "rweb/dmComposer/CANCEL_UPLOAD",
                F = (e) => ({ type: Z, conversationId: e }),
                q = "rweb/dmComposer/REMOVE_MEDIA",
                Y = (e) => ({ type: q, conversationId: e }),
                G = (e, t) => (s) => {
                    s(m.WU(t)), s([F(e), Y(e)]);
                },
                V = "rweb/dmComposer/UPLOAD_REQUEST",
                H = (e) => ({ type: V, conversationId: e }),
                k = "rweb/dmComposer/UPLOAD_SUCCESS",
                Q = (e) => ({ type: k, conversationId: e }),
                j = "rweb/dmComposer/UPLOAD_FAILURE",
                B = (e) => ({ type: j, conversationId: e });
            u.Z.register({
                [S]: function (e = A, t) {
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
                        case j:
                        case k:
                        case q:
                            return { ...e, [s]: { ...r, isUploading: !1, mediaId: null, gifMetadata: void 0 } };
                        case y:
                            return { ...e, [s]: { ...r, text: t.text } };
                        case C:
                            return { ...e, [s]: { ...r, cardUrl: t.cardUrl } };
                        case g:
                            return { ...e, [s]: { ...r, text: null } };
                        default:
                            return e;
                    }
                },
            });
        },
        317861: (e, t, s) => {
            s.d(t, { Categories: () => E, WD: () => m, ol: () => S });
            var r = s(118717),
                n = s(174647),
                a = s(499627),
                i = s(917799),
                o = s(312771);
            const d = "gifSearch",
                c = `rweb/${d}`,
                u = {},
                _ = { cursor: {}, items: [], initialFetchStatus: o.ZP.NONE, nextFetchStatus: o.ZP.NONE },
                l = ({ defaultQuery: e, getApiMethod: t, getParams: s, localNamespace: r, mergeNewItems: n }) => {
                    const a = i.dg(`${c}/${r}`, "FETCH"),
                        l = (e, t, s) => {
                            const { fetchStatus: r, ...n } = s,
                                a = e[t] || {},
                                i = (a.cursor || {}).next ? "nextFetchStatus" : "initialFetchStatus";
                            return { ...e, [t]: { ..._, ...a, ...n, [i]: r } };
                        },
                        p =
                            ({ cursor: e, query: r }) =>
                            (n, o, { api: d }) =>
                                i._O(n, { request: t(d), params: s(e, r) })({ actionTypes: a, meta: { query: r } }),
                        E = (t, s = e) => (t[d][r] || {})[s] || {};
                    return {
                        actionTypes: a,
                        fetchInitialIfNeeded:
                            ({ query: t = e } = {}) =>
                            (e, s, { api: r }) => {
                                const n = E(s(), t);
                                return n.initialFetchStatus === o.ZP.LOADING || n.items ? Promise.resolve() : e(p({ query: t }));
                            },
                        fetchNextIfNeeded:
                            ({ query: t = e } = {}) =>
                            (e, s, { api: r }) => {
                                const n = E(s(), t),
                                    { cursor: a = {} } = n;
                                return n.nextFetchStatus !== o.ZP.LOADING && a.next ? e(p({ query: t, cursor: a.next })) : Promise.resolve();
                            },
                        reducer: (e = u, t) => {
                            if (!t) return e;
                            switch (t.type) {
                                case a.REQUEST: {
                                    const { query: s } = t.meta;
                                    return l(e, s, { fetchStatus: o.ZP.LOADING });
                                }
                                case a.FAILURE: {
                                    const { query: s } = t.meta;
                                    return l(e, s, { fetchStatus: o.ZP.FAILED });
                                }
                                case a.SUCCESS: {
                                    const { cursor: s } = t.payload,
                                        { query: r } = t.meta,
                                        a = (e[r] || {}).items || [];
                                    return l(e, r, { cursor: s, fetchStatus: o.ZP.LOADED, items: n(a, t.payload) });
                                }
                                default:
                                    return e;
                            }
                        },
                        selectInitialFetchStatus: (e, t) => E(e, t).initialFetchStatus || o.ZP.NONE,
                        selectItems: (e, t) => E(e, t).items,
                        selectNextFetchStatus: (e, t) => E(e, t).nextFetchStatus || o.ZP.NONE,
                        selectQueryState: E,
                    };
                },
                p = (e) => e.filter(({ original_image: { height: e, width: t } = {} }) => e > 0 && t > 0),
                E = l({ defaultQuery: "categories", getApiMethod: (e) => e.withEndpoint(n.Z).categories, getParams: (e) => (e ? { cursor: e } : {}), mergeNewItems: (e, t) => [...e, ...(t?.data?.groups || [])], localNamespace: "categories" }),
                m = l({ getApiMethod: (e) => e.withEndpoint(n.Z).category, getParams: (e, t) => ({ category: t, ...(e ? { cursor: e } : {}) }), mergeNewItems: (e, t) => [...e, ...p(t?.data?.items || [])], localNamespace: "category" }),
                S = l({ getApiMethod: (e) => e.withEndpoint(n.Z).search, getParams: (e, t) => ({ q: t, ...(e ? { cursor: e } : {}) }), mergeNewItems: (e, t) => [...e, ...p(t?.data?.items || [])], localNamespace: "search" }),
                A = (0, r.UY)({ categories: E.reducer, category: m.reducer, search: S.reducer });
            a.Z.register({ [d]: A });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GifSearch-bfd49e49.804002ba.js.map
