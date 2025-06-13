"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"],
    {
        147143: (e, t, i) => {
            i.d(t, { A7: () => s, Yf: () => r, _2: () => d, w1: () => n, xR: () => o });
            const r = "directMessages",
                s = `rweb/${r}`,
                n = Object.freeze({ PINNED: "Pinned", REPLY_LATER: "ReplyLater" }),
                d = Object.freeze({ PRIMARY: "primary", SECONDARY: "secondary", TERTIARY: "tertiary" }),
                o = { Inbox: "inbox", Trusted: "trusted", Untrusted: "untrusted", UntrustedLowQuality: "untrusted_low_quality" };
        },
        798538: (e, t, i) => {
            i.d(t, { Ah: () => T, Bw: () => D, De: () => G, E4: () => S, G6: () => U, Hd: () => b, Tu: () => O, W8: () => R, bG: () => I, m1: () => V, q9: () => M, qK: () => A, rA: () => k, vb: () => h });
            i(136728);
            var r = i(468811),
                s = i.n(r),
                n = i(364837),
                d = i(450681),
                o = i(184605),
                a = i(948322),
                l = i(705079),
                c = i(499627),
                _ = i(917799),
                p = i(627279),
                u = i(720277),
                m = i(923965),
                v = i(497294);
            const y = "dmComposer",
                E = {};
            const w = (e) => {
                    const { conversation_id: t, id: i, localMediaId: r, recipient_ids: s, sender_id: n, text: d, attachment: o = {}, error: a } = e,
                        l = Date.now().toString();
                    return { conversation_id: t, recipient_ids: s, error: a, id: i, is_draft: !0, message_data: { attachment: o, localMediaId: r, sender_id: n, text: d, time: l }, type: "message", time: l };
                },
                b =
                    (e) =>
                    (t, i, { api: r }) => {
                        const { conversationId: n, requestId: o = s().v1(), messageId: l } = e || {},
                            c = { conversationId: n, requestId: o, messageId: l, text: e.text };
                        return r
                            .withEndpoint(a.Z)
                            .editMessage(c, {})
                            .then((e) => {
                                const { message_data: i } = e.result,
                                    r = (0, d.Z)([{ type: "rweb/dmComposer/EDIT_MESSAGE_SUCCESS" }, n && (0, p.s$)(n, o, i || {})]);
                                t(r);
                            });
                    },
                I =
                    (e) =>
                    (t, i, { api: r }) => {
                        const { allowVideoDownload: c, senderId: y, cardUrl: E, conversationId: b, localMediaId: I, recipients: g = [], requestId: h = s().v1(), tweetAttachment: f, quickReply: S, text: C, replyToDmId: A } = e || {};
                        t(Y(b));
                        const P = i();
                        let U = I || x(i(), b);
                        null === U && (U = []);
                        const [R] = v.m3(P, U),
                            { mediaFile: M, mediaMetadata: T } = R || {},
                            L = g.length > 0 && g.join(","),
                            k = {};
                        M && M.isGif ? (k.extraInitParams = "&media_category=dm_gif") : M && M.isVideo && (k.extraInitParams = "&media_category=dm_video");
                        const N = v.$i(U, k),
                            V = [t(N)],
                            Z = O(P, b),
                            { found_media_origin: q } = Z || {};
                        return (
                            M && M.isGif && V.push((0, n.R)(M)),
                            Promise.all(V).then(
                                ([[i], s]) => {
                                    const n = T?.altText || T?.defaultAltText || "",
                                        I = !!n;
                                    let g;
                                    (q || I) && (g = { media_id: i.uploadId, found_media_origin: q, ...(!!I && { alt_text: { text: n || "" } }) }), M?.isVideo && c && (g = { media_id: i.uploadId, allow_download_status: { allow_download: "true" } });
                                    return (i && g ? t(v.o6(g)) : Promise.resolve()).then(
                                        () => {
                                            const { id_str: n } = f || {},
                                                c = {};
                                            if (i) {
                                                const { mediaFile: e = {} } = i,
                                                    t = { original_info: { width: e.width, height: e.height }, sizes: [{ h: e.height, w: e.width, resize: "fit" }] };
                                                e.isImage ? (c.photo = { ...t, media_url_https: e.url }) : e.isGif ? (c.animated_gif = { ...t, media_url_https: s, type: "animated_gif" }) : e.isVideo && (c.video = { ...t, media_url_https: e.url, type: "video" });
                                            } else f && (c.tweet = { status: n });
                                            const { uploadId: v } = i || {},
                                                I = w({ attachment: c, conversation_id: b, error: !1, id: h, localMediaId: null, recipient_ids: L, sender_id: y, text: C }),
                                                g = { ...((0, l.s)(E) && { card_uri: E }), conversation_id: b, ...(!n && { media_id: v }), recipient_ids: L, request_id: h, reply_to_dm_id: A, text: e.text, tweet_id: n };
                                            S && ((g["quick_reply_response[options][id]"] = S.id), (g["quick_reply_response[options][selected_id]"] = S.selected_id));
                                            const P = (0, d.Z)([H(b), { type: m.H_.REQUEST }, { type: "rweb/dmComposer/SEND_MESSAGE_REQUEST" }, b && (0, p.px)(b, h, I)]);
                                            return (
                                                t(P),
                                                r
                                                    .withEndpoint(a.Z)
                                                    .sendMessage(g)
                                                    .then(
                                                        (i) => {
                                                            const { cards: r, entries: s, publishedArticles: n, tweets: a, users: l } = i.entities,
                                                                { conversations: c } = i.result;
                                                            (0, o.Z)(U) && t(G(b, U));
                                                            const _ = (0, d.Z)([{ type: m.H_.SUCCESS }, ...(0, u.s0)({ conversations: c, entries: s, users: l, tweets: a, cards: r, publishedArticles: n }), { type: "rweb/dmComposer/SEND_MESSAGE_SUCCESS" }, b && (0, p.MY)(b, h, e), D(b)]);
                                                            t(_);
                                                            const v = Object.values(i.entities.entries)[0].conversation_id;
                                                            return Promise.resolve({ conversationId: v });
                                                        },
                                                        (e) => {
                                                            const i = w({ attachment: c, conversation_id: b, error: !0, id: h, localMediaId: U, recipient_ids: L, sender_id: y, text: C }),
                                                                r = (0, d.Z)([{ type: m.H_.SUCCESS }, { type: "rweb/dmComposer/SEND_MESSAGE_FAILURE" }, b && (0, p.px)(b, h, i)]);
                                                            return t(r), (0, _.Vm)(t, e, "ACTION_SEND_DM");
                                                        },
                                                    )
                                            );
                                        },
                                        (e) => (t(z(b)), (e.type = "metadata"), Promise.reject(e)),
                                    );
                                },
                                (e) => (t((0, d.Z)([(0, o.Z)(U) && G(b, U), z(b)])), Promise.reject(e)),
                            )
                        );
                    },
                g = (e, t) => e[y][t],
                h = (e, t) => {
                    const i = g(e, t);
                    return i ? i.text : null;
                },
                f = "rweb/dmComposer/SAVE_TEXT",
                S = (e, t) => ({ type: f, conversationId: e, text: t }),
                C = "rweb/dmComposer/REMOVE_TEXT",
                D = (e) => ({ type: C, conversationId: e }),
                A = (e, t) => {
                    const i = g(e, t);
                    return i ? i.cardUrl : null;
                },
                P = "rweb/dmComposer/SAVE_CARD_URL",
                U = (e, t) => ({ type: P, conversationId: e, cardUrl: t }),
                x = (e, t) => {
                    const i = g(e, t);
                    return i && void 0 !== i.mediaId ? i.mediaId : null;
                },
                R = (e, t) => {
                    const i = v.m3(e, x(e, t) || []);
                    return i.length > 0 ? i[0] : null;
                },
                M = (e, t) => {
                    const i = g(e, t);
                    return !!i && i.isUploading;
                },
                T = (e, t) => v._T(e, x(e, t) || 0),
                O = (e, t) => {
                    const i = g(e, t);
                    return i && i.gifMetadata ? i.gifMetadata : null;
                },
                L = "rweb/dmComposer/ADD_MEDIA",
                k = (e, [t], i) => ({ payload: { isUploading: !1, mediaId: t, gifMetadata: i }, type: L, conversationId: e }),
                N = "rweb/dmComposer/CANCEL_UPLOAD",
                V = (e) => ({ type: N, conversationId: e }),
                Z = "rweb/dmComposer/REMOVE_MEDIA",
                q = (e) => ({ type: Z, conversationId: e }),
                G = (e, t) => (i) => {
                    i(v.WU(t)), i([V(e), q(e)]);
                },
                j = "rweb/dmComposer/UPLOAD_REQUEST",
                Y = (e) => ({ type: j, conversationId: e }),
                F = "rweb/dmComposer/UPLOAD_SUCCESS",
                H = (e) => ({ type: F, conversationId: e }),
                X = "rweb/dmComposer/UPLOAD_FAILURE",
                z = (e) => ({ type: X, conversationId: e });
            c.Z.register({
                [y]: function (e = E, t) {
                    if (!t) return e;
                    const i = t.conversationId || "new_group",
                        r = e[i] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null };
                    switch (t.type) {
                        case L:
                            return { ...e, [i]: { ...r, ...t.payload } };
                        case j:
                            return { ...e, [i]: { ...r, isUploading: !0 } };
                        case N:
                            return { ...e, [i]: { ...r, isUploading: !1 } };
                        case X:
                        case F:
                        case Z:
                            return { ...e, [i]: { ...r, isUploading: !1, mediaId: null, gifMetadata: void 0 } };
                        case f:
                            return { ...e, [i]: { ...r, text: t.text } };
                        case P:
                            return { ...e, [i]: { ...r, cardUrl: t.cardUrl } };
                        case C:
                            return { ...e, [i]: { ...r, text: null } };
                        default:
                            return e;
                    }
                },
            });
        },
        550293: (e, t, i) => {
            i.d(t, { DO: () => p, VP: () => y, bi: () => v, gw: () => l, kX: () => c });
            var r = i(499627),
                s = i(511582);
            const n = "rweb.dmDrawerVisibility",
                d = { poppedOutConversationId: null, drawerVisibility: s.S.COLLAPSED },
                o = "dmDrawer";
            const a = (e) => e[o],
                l = (e) => a(e).poppedOutConversationId,
                c = (e) => a(e).drawerVisibility,
                _ = "rweb/dmDrawer/POP_OUT_CONVERSATION",
                p =
                    (e) =>
                    (t, i, { userPersistence: r }) => (r.set(n, { visibility: s.S.EXPANDED }), t({ payload: { conversationId: e }, type: _ })),
                u = "rweb/dmDrawer/SET_DRAWER_VISIBILITY",
                m = (e) => ({ payload: { visibility: e }, type: u }),
                v =
                    (e) =>
                    (t, i, { userPersistence: r }) => (r.set(n, { visibility: e }), e === s.S.CLOSED && t({ type: _ }), t(m(e))),
                y =
                    () =>
                    (e, t, { userPersistence: i }) =>
                        i.get(n).then((t) => {
                            t && e(m(t.visibility));
                        });
            r.Z.register({
                [o]: function (e = d, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case _:
                            return t.payload ? { ...e, poppedOutConversationId: t.payload.conversationId, drawerVisibility: s.S.EXPANDED } : e;
                        case u:
                            return t.payload ? { ...e, drawerVisibility: t.payload.visibility } : e;
                        default:
                            return e;
                    }
                },
            });
        },
        511582: (e, t, i) => {
            i.d(t, { S: () => r });
            const r = Object.freeze({ CLOSED: "closed", COLLAPSED: "collapsed", EXPANDED: "expanded" });
        },
        624479: (e, t, i) => {
            i.d(t, { ZP: () => u, cY: () => p, vj: () => o });
            i(136728), i(202784);
            var r = i(787210),
                s = (i(827922), i(905710)),
                n = i(502909),
                d = i(600823);
            const o = 30,
                a = (0, n.ZP)({ namespace: "userPresence", entityIsComplete: (e) => e.expiry > Date.now() }),
                l = (0, n.tb)(a, { context: "FETCH_USER_PRESENCE", endpoint: (e) => e.withEndpoint(r.Z).fetchPresence, params: (e) => ({ userIds: e, only_spaces: !1 }) }),
                c = (0, n.Nr)(a, { context: "FETCH_USER_PRESENCE", endpoint: (e) => e.withEndpoint(r.Z).fetchPresence, params: (e) => ({ userIds: e, only_spaces: !0 }) }),
                _ = { ...a, ...l, ...c },
                p = (e, t) => {
                    const i = _.select(e, t),
                        r = i ? i.spaces : void 0;
                    return r?.live_content.livevideo ? { presenceRingType: "livevideo", link: { pathname: (0, s.s)(r.live_content.livevideo.id), state: { origin: "livevideo_ring" } }, spaceId: r.live_content.livevideo.id } : r && r.live_content.audiospace && { presenceRingType: "audiospace", link: { pathname: (0, s.e)(r.live_content.audiospace.broadcast_id), state: { origin: "audiospace_ring" } }, spaceId: r.live_content.audiospace.broadcast_id };
                };
            const u = d.Z.register(_);
        },
        162664: (e, t, i) => {
            i.d(t, { b: () => r });
            const r = (e) => {
                if (e) return { blocking: e.blocking, can_dm: e.can_dm, can_media_tag: e.can_media_tag, created_at: e.created_at, description: e.description, dm_blocked_by: e.dm_blocked_by, dm_blocking: e.dm_blocking, entities: e.entities, followed_by: e.followed_by, followers_count: e.followers_count, following: e.following, friends_count: e.friends_count, highlightedLabel: e.highlightedLabel, id_str: e.id_str, id: e.id, is_blue_verified: e.is_blue_verified, name: e.name, profile_image_url_https: e.profile_image_url_https, protected: e.protected, screen_name: e.screen_name, subscribed_by: e.subscribed_by, verified_type: e.verified_type, verified: e.verified };
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0.5904edfa.js.map
