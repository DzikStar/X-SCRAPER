"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Report-bfd49e49"],
    {
        923965: (e, t, r) => {
            r.d(t, { H_: () => E, NJ: () => v, ZP: () => A, f9: () => I, hd: () => S, o8: () => y });
            var s = r(948322),
                n = r(917799),
                i = r(390387),
                o = r(38562),
                a = r(877848),
                d = r(275365),
                c = r(613195),
                u = r(627279),
                _ = r(720277),
                l = r(849585),
                p = r(147143);
            const E = n.dg(p.A7, "FETCH_UPDATES"),
                m = { isLoaded: !1, isLoading: !1 };
            function A(e = m, t) {
                if (!t) return e;
                switch (t.type) {
                    case E.REQUEST:
                        return { ...e, isLoading: !0 };
                    case E.FAILURE:
                        return { ...e, error: t.payload, isLoaded: !1, isLoading: !1 };
                    case E.SUCCESS: {
                        const { error: t, ...r } = e;
                        return { ...r, isLoaded: !0, isLoading: !1 };
                    }
                    case C:
                        return { ...e, cursor: t.payload };
                    case w:
                        return { ...e, tertiaryInboxStatus: t.payload };
                    case l.t:
                        return m;
                    default:
                        return e;
                }
            }
            const I =
                    (e) =>
                    (t, r, { api: d }) => {
                        const c = r(),
                            { directMessages: u = {} } = c;
                        let { cursor: p } = u.updates || {};
                        const { polling: m, ...A } = e || {},
                            { tertiaryInboxStatus: I } = u.updates || {};
                        let S = !1;
                        const C = m ? { "x-twitter-polling": "true" } : {},
                            v = (0, o.a5)(c);
                        if (window.location.pathname.startsWith("/i/report")) return Promise.resolve();
                        const w = [(0, o.Kp)(r()) ? "on" : "off", v ? "on" : "off"].join();
                        I ? I !== w && ((p = null), (S = !0)) : (S = !0);
                        const y = (0, _.gN)({ ...A, nsfw_filtering_enabled: v, cursor: p }, r());
                        return n._O(t, { params: y, headers: C, request: d.withEndpoint(s.Z).fetchUserUpdates })({ actionTypes: E, context: "FETCH_DM_USER_UPDATES", meta: { direction: (0, a.Sj)(e) } }, (e) => {
                            if (e) {
                                const { cards: t, entries: r, publishedArticles: s, tweets: n, users: o } = e.entities,
                                    { inbox_initial_state: a, user_events: d } = e.result;
                                return [a && (0, l.m)(), ...(0, _.s0)({ ...(d || a), entries: r, users: o, tweets: n, cards: t, publishedArticles: s }), ...(d ? T(Object.values(r || []), i._h(c)) : []), S && f(w)];
                            }
                        });
                    },
                S = (e) => (t, r) => (g(r()) ? Promise.resolve() : t(I(e))),
                C = "rweb/directMessages/UPDATE_CURSOR",
                v = (e) => ({ payload: e, type: C }),
                w = "rweb/directMessages/UPDATE_TERTIARY_INBOX_STATUS",
                f = (e) => ({ payload: e, type: w }),
                T = (e = [], t) =>
                    e
                        .sort((e, t) => e.id - t.id)
                        .reduce((e, r) => {
                            switch (r.type) {
                                case d.Cr.CONVERSATION_AVATAR_UPDATE:
                                    return [...e, (0, c.nI)(r.conversation_id, r.conversation_avatar_image_https), (0, c.Ek)(r.conversation_id, r.id)].filter((e) => e);
                                case d.Cr.CONVERSATION_NAME_UPDATE:
                                    return [...e, (0, c.Ke)(r), (0, c.Ek)(r.conversation_id, r.id)].filter((e) => e);
                                case d.Cr.CONVERSATION_READ:
                                    return [...e, (0, c.v3)(r.conversation_id, r.last_read_event_id)];
                                case d.Cr.DISABLE_NOTIFICATIONS:
                                case d.Cr.ENABLE_NOTIFICATIONS: {
                                    const t = r.type === d.Cr.ENABLE_NOTIFICATIONS;
                                    return [...e, (0, c.$S)(r.conversation_id, t)];
                                }
                                case d.Cr.MARK_ALL_AS_READ:
                                    return [...e, (0, c.SF)(r.last_read_event_id)];
                                case d.Cr.MESSAGE_DELETE:
                                    return [
                                        ...e,
                                        (0, u.J_)(
                                            r.conversation_id,
                                            r.messages.reduce((e, t) => [...e, ...Object.values(t)], []),
                                        ),
                                    ];
                                case d.Cr.MESSAGE_MARK_AS_NOT_SPAM:
                                case d.Cr.MESSAGE_MARK_AS_SPAM: {
                                    const t = r.type === d.Cr.MESSAGE_MARK_AS_SPAM;
                                    return [
                                        ...e,
                                        (0, u.pt)(
                                            r.messages.reduce((e, t) => [...e, ...Object.values(t)], []),
                                            t,
                                        ),
                                    ];
                                }
                                case d.Cr.REMOVE_CONVERSATION:
                                    return [...e, ...(0, c.Ae)(r.conversation_id)];
                                case d.Cr.JOIN_CONVERSATION:
                                case d.Cr.PARTICIPANTS_JOIN:
                                case d.Cr.PARTICIPANTS_LEAVE:
                                    return [...e, (0, c.Ek)(r.conversation_id, r.id)];
                                case d.Cr.REACTION_CREATE:
                                    return [e]
                                        .concat(t !== r.sender_id && [(0, u.Ob)(r), (0, u.rU)(r)])
                                        .concat((0, c.Ek)(r.conversation_id, r.id))
                                        .filter(Boolean);
                                case d.Cr.REACTION_DELETE:
                                    return [...e, (0, u.Ob)(r)];
                                case d.Cr.MESSAGE:
                                    return [...e, (0, c.Ek)(r.conversation_id, r.id)].filter((e) => e);
                                default:
                                    return e;
                            }
                        }, []),
                y = (e) => e[p.Yf].updates,
                g = (e) => y(e).isLoading;
        },
        147143: (e, t, r) => {
            r.d(t, { A7: () => n, Yf: () => s, _2: () => o, w1: () => i, xR: () => a });
            const s = "directMessages",
                n = `rweb/${s}`,
                i = Object.freeze({ PINNED: "Pinned", REPLY_LATER: "ReplyLater" }),
                o = Object.freeze({ PRIMARY: "primary", SECONDARY: "secondary", TERTIARY: "tertiary" }),
                a = { Inbox: "inbox", Trusted: "trusted", Untrusted: "untrusted", UntrustedLowQuality: "untrusted_low_quality" };
        },
        798538: (e, t, r) => {
            r.d(t, { Ah: () => P, Bw: () => h, De: () => F, E4: () => y, G6: () => M, Hd: () => C, Tu: () => D, W8: () => b, bG: () => v, m1: () => V, q9: () => N, qK: () => U, rA: () => L, vb: () => f });
            r(136728);
            var s = r(468811),
                n = r.n(s),
                i = r(364837),
                o = r(450681),
                a = r(184605),
                d = r(948322),
                c = r(705079),
                u = r(499627),
                _ = r(917799),
                l = r(627279),
                p = r(720277),
                E = r(923965),
                m = r(497294);
            const A = "dmComposer",
                I = {};
            const S = (e) => {
                    const { conversation_id: t, id: r, localMediaId: s, recipient_ids: n, sender_id: i, text: o, attachment: a = {}, error: d } = e,
                        c = Date.now().toString();
                    return { conversation_id: t, recipient_ids: n, error: d, id: r, is_draft: !0, message_data: { attachment: a, localMediaId: s, sender_id: i, text: o, time: c }, type: "message", time: c };
                },
                C =
                    (e) =>
                    (t, r, { api: s }) => {
                        const { conversationId: i, requestId: a = n().v1(), messageId: c } = e || {},
                            u = { conversationId: i, requestId: a, messageId: c, text: e.text };
                        return s
                            .withEndpoint(d.Z)
                            .editMessage(u, {})
                            .then((e) => {
                                const { message_data: r } = e.result,
                                    s = (0, o.Z)([{ type: "rweb/dmComposer/EDIT_MESSAGE_SUCCESS" }, i && (0, l.s$)(i, a, r || {})]);
                                t(s);
                            });
                    },
                v =
                    (e) =>
                    (t, r, { api: s }) => {
                        const { allowVideoDownload: u, senderId: A, cardUrl: I, conversationId: C, localMediaId: v, recipients: w = [], requestId: f = n().v1(), tweetAttachment: T, quickReply: y, text: g, replyToDmId: U } = e || {};
                        t(q(C));
                        const R = r();
                        let M = v || O(r(), C);
                        null === M && (M = []);
                        const [b] = m.m3(R, M),
                            { mediaFile: N, mediaMetadata: P } = b || {},
                            x = w.length > 0 && w.join(","),
                            L = {};
                        N && N.isGif ? (L.extraInitParams = "&media_category=dm_gif") : N && N.isVideo && (L.extraInitParams = "&media_category=dm_video");
                        const Z = m.$i(M, L),
                            V = [t(Z)],
                            G = D(R, C),
                            { found_media_origin: k } = G || {};
                        return (
                            N && N.isGif && V.push((0, i.R)(N)),
                            Promise.all(V).then(
                                ([[r], n]) => {
                                    const i = P?.altText || P?.defaultAltText || "",
                                        v = !!i;
                                    let w;
                                    (k || v) && (w = { media_id: r.uploadId, found_media_origin: k, ...(!!v && { alt_text: { text: i || "" } }) }), N?.isVideo && u && (w = { media_id: r.uploadId, allow_download_status: { allow_download: "true" } });
                                    return (r && w ? t(m.o6(w)) : Promise.resolve()).then(
                                        () => {
                                            const { id_str: i } = T || {},
                                                u = {};
                                            if (r) {
                                                const { mediaFile: e = {} } = r,
                                                    t = { original_info: { width: e.width, height: e.height }, sizes: [{ h: e.height, w: e.width, resize: "fit" }] };
                                                e.isImage ? (u.photo = { ...t, media_url_https: e.url }) : e.isGif ? (u.animated_gif = { ...t, media_url_https: n, type: "animated_gif" }) : e.isVideo && (u.video = { ...t, media_url_https: e.url, type: "video" });
                                            } else T && (u.tweet = { status: i });
                                            const { uploadId: m } = r || {},
                                                v = S({ attachment: u, conversation_id: C, error: !1, id: f, localMediaId: null, recipient_ids: x, sender_id: A, text: g }),
                                                w = { ...((0, c.s)(I) && { card_uri: I }), conversation_id: C, ...(!i && { media_id: m }), recipient_ids: x, request_id: f, reply_to_dm_id: U, text: e.text, tweet_id: i };
                                            y && ((w["quick_reply_response[options][id]"] = y.id), (w["quick_reply_response[options][selected_id]"] = y.selected_id));
                                            const R = (0, o.Z)([K(C), { type: E.H_.REQUEST }, { type: "rweb/dmComposer/SEND_MESSAGE_REQUEST" }, C && (0, l.px)(C, f, v)]);
                                            return (
                                                t(R),
                                                s
                                                    .withEndpoint(d.Z)
                                                    .sendMessage(w)
                                                    .then(
                                                        (r) => {
                                                            const { cards: s, entries: n, publishedArticles: i, tweets: d, users: c } = r.entities,
                                                                { conversations: u } = r.result;
                                                            (0, a.Z)(M) && t(F(C, M));
                                                            const _ = (0, o.Z)([{ type: E.H_.SUCCESS }, ...(0, p.s0)({ conversations: u, entries: n, users: c, tweets: d, cards: s, publishedArticles: i }), { type: "rweb/dmComposer/SEND_MESSAGE_SUCCESS" }, C && (0, l.MY)(C, f, e), h(C)]);
                                                            t(_);
                                                            const m = Object.values(r.entities.entries)[0].conversation_id;
                                                            return Promise.resolve({ conversationId: m });
                                                        },
                                                        (e) => {
                                                            const r = S({ attachment: u, conversation_id: C, error: !0, id: f, localMediaId: M, recipient_ids: x, sender_id: A, text: g }),
                                                                s = (0, o.Z)([{ type: E.H_.SUCCESS }, { type: "rweb/dmComposer/SEND_MESSAGE_FAILURE" }, C && (0, l.px)(C, f, r)]);
                                                            return t(s), (0, _.Vm)(t, e, "ACTION_SEND_DM");
                                                        },
                                                    )
                                            );
                                        },
                                        (e) => (t(B(C)), (e.type = "metadata"), Promise.reject(e)),
                                    );
                                },
                                (e) => (t((0, o.Z)([(0, a.Z)(M) && F(C, M), B(C)])), Promise.reject(e)),
                            )
                        );
                    },
                w = (e, t) => e[A][t],
                f = (e, t) => {
                    const r = w(e, t);
                    return r ? r.text : null;
                },
                T = "rweb/dmComposer/SAVE_TEXT",
                y = (e, t) => ({ type: T, conversationId: e, text: t }),
                g = "rweb/dmComposer/REMOVE_TEXT",
                h = (e) => ({ type: g, conversationId: e }),
                U = (e, t) => {
                    const r = w(e, t);
                    return r ? r.cardUrl : null;
                },
                R = "rweb/dmComposer/SAVE_CARD_URL",
                M = (e, t) => ({ type: R, conversationId: e, cardUrl: t }),
                O = (e, t) => {
                    const r = w(e, t);
                    return r && void 0 !== r.mediaId ? r.mediaId : null;
                },
                b = (e, t) => {
                    const r = m.m3(e, O(e, t) || []);
                    return r.length > 0 ? r[0] : null;
                },
                N = (e, t) => {
                    const r = w(e, t);
                    return !!r && r.isUploading;
                },
                P = (e, t) => m._T(e, O(e, t) || 0),
                D = (e, t) => {
                    const r = w(e, t);
                    return r && r.gifMetadata ? r.gifMetadata : null;
                },
                x = "rweb/dmComposer/ADD_MEDIA",
                L = (e, [t], r) => ({ payload: { isUploading: !1, mediaId: t, gifMetadata: r }, type: x, conversationId: e }),
                Z = "rweb/dmComposer/CANCEL_UPLOAD",
                V = (e) => ({ type: Z, conversationId: e }),
                G = "rweb/dmComposer/REMOVE_MEDIA",
                k = (e) => ({ type: G, conversationId: e }),
                F = (e, t) => (r) => {
                    r(m.WU(t)), r([V(e), k(e)]);
                },
                j = "rweb/dmComposer/UPLOAD_REQUEST",
                q = (e) => ({ type: j, conversationId: e }),
                H = "rweb/dmComposer/UPLOAD_SUCCESS",
                K = (e) => ({ type: H, conversationId: e }),
                Y = "rweb/dmComposer/UPLOAD_FAILURE",
                B = (e) => ({ type: Y, conversationId: e });
            u.Z.register({
                [A]: function (e = I, t) {
                    if (!t) return e;
                    const r = t.conversationId || "new_group",
                        s = e[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null };
                    switch (t.type) {
                        case x:
                            return { ...e, [r]: { ...s, ...t.payload } };
                        case j:
                            return { ...e, [r]: { ...s, isUploading: !0 } };
                        case Z:
                            return { ...e, [r]: { ...s, isUploading: !1 } };
                        case Y:
                        case H:
                        case G:
                            return { ...e, [r]: { ...s, isUploading: !1, mediaId: null, gifMetadata: void 0 } };
                        case T:
                            return { ...e, [r]: { ...s, text: t.text } };
                        case R:
                            return { ...e, [r]: { ...s, cardUrl: t.cardUrl } };
                        case g:
                            return { ...e, [r]: { ...s, text: null } };
                        default:
                            return e;
                    }
                },
            });
        },
        629196: (e, t, r) => {
            r.d(t, { r: () => c });
            r(136728);
            var s = r(161821),
                n = r(390387),
                i = r(836255),
                o = r(255117),
                a = r(166506),
                d = r(919022);
            const c =
                (e, t) =>
                (r, c, { api: u, featureSwitches: _ }) =>
                    r(d.ZP.mute(e, t)).then(() => {
                        const t = c(),
                            d = (0, s.Z)(i.Z.selectAll(t)).reduce((r, s) => {
                                if (null != s)
                                    if (s.user === e) r[s.id_str] = !0;
                                    else if (s.retweeted_status) {
                                        const n = i.Z.select(t, s.retweeted_status);
                                        n?.user === e && (r[s.id_str] = !0);
                                    }
                                return r;
                            }, {}),
                            u = (0, n._h)(c()),
                            _ = u ? [(0, o.ZP)({ useLatest: !1, userId: u }).removeTweets(d), (0, o.ZP)({ useLatest: !0, userId: u }).removeTweets(d)] : [],
                            l = (0, a.k9)();
                        if (l.selectInitialFetchStatus(t) && !l.selectCanRefresh(t)) {
                            const r = (0, a.f8)(e, t, l);
                            r && _.push(r);
                        }
                        return r(_);
                    });
        },
        166506: (e, t, r) => {
            r.d(t, { du: () => u, f8: () => _, k9: () => c });
            var s = r(503768),
                n = r(750085),
                i = r(962741),
                o = r(466015),
                a = r(919022),
                d = r(218951);
            const c = () => (0, d.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                u = (e) => (t, r) => {
                    const s = r();
                    t(
                        e
                            .selectEntries(s)
                            .filter((e) => {
                                const t = e.type === i.ZP.User ? e.content.id : "",
                                    r = a.ZP.select(s, t);
                                return r && !r.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                _ = (e, t, r) => {
                    if (!r.selectEntries(t).find((t) => t.type === i.ZP.User && t.content.id === e)) {
                        const t = (0, o.OD)(e),
                            s = (0, o.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return r.injectEntry(s);
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Report-bfd49e49.482baa6a.js.map
