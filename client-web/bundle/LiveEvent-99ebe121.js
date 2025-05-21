"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-99ebe121"],
    {
        365470: (e, t, i) => {
            i.r(t), i.d(t, { LiveScreen: () => Fe, default: () => We });
            var n = i(202784),
                a = i(272175),
                r = i(325686),
                s = i(688715),
                l = i(537392),
                o = i(868634),
                c = i(530525),
                d = i(439592),
                m = i(392237),
                u = i(731708),
                h = i(879113),
                p = i(332920),
                _ = i.n(p),
                v = i(123751),
                b = i(615656),
                g = i(545457),
                f = i(651930),
                E = i(572067),
                I = i(443781),
                w = i(38293),
                D = i(652904),
                S = i(382285),
                y = i(181142),
                C = i(310453),
                T = i(51525),
                Z = i(655352),
                x = i(293115),
                P = i(503229),
                L = i(10195),
                N = i(679180),
                O = i(386592),
                A = i(807896),
                B = i(666305);
            const k = n.memo(({ ...e }) => {
                    const { ref: t, style: i } = M(),
                        a = n.useMemo(() => [i, e.style], [i, e.style]);
                    return n.createElement(r.Z, (0, A.Z)({ ref: t }, e, { style: a }));
                }),
                F = 16 / 9,
                M = () => {
                    const e = n.useRef(null),
                        [t, i] = n.useState(!0),
                        a = n.useCallback(() => {
                            const t = e.current,
                                n = t?.parentElement;
                            if (!t || !n) return;
                            const a = W(n),
                                r = W(t);
                            i(r >= a);
                        }, []);
                    n.useEffect(() => {
                        const t = e.current,
                            i = t?.parentElement;
                        if (t && i)
                            return (
                                B.Z.observe(t, a),
                                B.Z.observe(i, a),
                                () => {
                                    B.Z.unobserve(t, a), B.Z.unobserve(i, a);
                                }
                            );
                    }, [a]);
                    const r = n.useMemo(() => (t ? U.widthConstrained : U.heightConstrained), [t]);
                    return { ref: e, style: r };
                },
                W = (e) => {
                    const { height: t, width: i } = e.getBoundingClientRect();
                    return i / t;
                },
                U = m.default.create((e) => {
                    const t = { aspectRatio: F, marginHorizontal: "auto", top: 0 };
                    return { widthConstrained: { ...t, width: "100%", height: "auto" }, heightConstrained: { ...t, height: "100%", width: "auto" } };
                });
            var V = i(400752),
                R = i(107267),
                j = i(154003),
                z = i(978053),
                H = i(673510),
                q = i(366635),
                G = i(360816),
                $ = i(293988),
                Y = i(23134),
                Q = i(907552),
                J = i(241304),
                K = i(125363),
                X = i(427478),
                ee = i(823180),
                te = i(449998);
            const ie = _().jade381b,
                ne = _().e44095a5,
                ae = _().j83f29dd,
                re = { section: "header", component: "user_actions" },
                se = _().daca8a2c,
                le = n.memo(({ broadcast: e, broadcastId: t, broadcaster: i, isLive: a }) => {
                    const { featureSwitches: l, viewerUserId: o } = (0, I.QZ)(),
                        c = (0, R.useHistory)(),
                        d = (0, K.I0)(),
                        m = (0, V.b9)(te.Tc),
                        h = n.useCallback(() => {
                            t && (m(t), d(X.bi(ee.N.EXPANDED)), c.goBack());
                        }, [t, d, c, m]),
                        p = n.useCallback(() => n.createElement(j.ZP, { "aria-label": se, hoverLabel: { label: se }, icon: n.createElement(G.default, null), onPress: h, type: "primaryOutlined" }), [h]),
                        _ = n.useCallback((e) => {
                            const t = new Date(),
                                i = new Date(e);
                            return t.getTime() - i.getTime() > 2592e6 ? ie(i) : z.default.formatTimeSinceDate(i);
                        }, []),
                        v = n.useMemo(() => {
                            const t = e?.end_time ?? e?.timedout_time ?? e?.start_time;
                            if (!t) return null;
                            const i = _(t);
                            return n.createElement(u.ZP, { color: "gray700", size: "subtext1" }, a ? ne({ timestamp: i }) : ae({ timestamp: i }));
                        }, [e, _, a]),
                        b = n.useCallback(() => (!i || o === i.id_str || i.blocked_by ? null : n.createElement(r.Z, { style: oe.userActionsWrapper }, n.createElement(p, null), l.isTrue("rweb_tipjar_consumption_enabled") && n.createElement(J.Z, { userId: i.id_str }), i.following && n.createElement($.Z, { allowPromptForPush: !0, isFollowing: i.notifications, userId: i.id_str }), n.createElement(Y.C, { isSuperFollowSubscriptionEnabled: l.isTrue("super_follow_android_web_subscription_enabled"), promotedContent: i.promoted_content, userId: i.id_str }))), [p, i, l, o]),
                        g = n.useMemo(() => (i ? n.createElement(r.Z, { style: oe.userNameWrapper }, n.createElement(H.ZP, { affiliateBadgeInfo: i.highlightedLabel, avatarUri: i.profile_image_url_https, decoration: b(), isBlueVerified: i.is_blue_verified, isProtected: i.protected, isVerified: i.verified, name: i.name, screenName: i.screen_name, style: oe.userCell, translatorType: i.translator_type, userId: i.id_str, verifiedType: i.verified_type, withLink: !0 })) : i?.profile_image_url && i?.screen_name ? n.createElement(r.Z, { style: oe.userNameWrapper }, n.createElement(q.Z, { name: i.screen_name, profileImageUrl: i.profile_image_url })) : void 0), [b, i]);
                    return n.createElement(r.Z, { style: oe.header }, g, n.createElement(r.Z, { style: oe.timeAndShareWrapper }, v, t && n.createElement(Q.Tz, { scribeNamespace: re, url: (0, s.ju)(`https://x.com/i/broadcasts/${t}`) })));
                }),
                oe = m.default.create((e) => ({ header: { flexDirection: "column", gap: e.spaces.space12, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, marginBottom: e.spaces.space48 }, userCell: { paddingHorizontal: 0, paddingVertical: 0, width: "100%" }, userActionsWrapper: { alignItems: "center", display: "flex", flexDirection: "row", gap: e.spaces.space8 }, userNameWrapper: { alignItems: "flex-start", flex: 1, justifyContent: "center" }, timeAndShareWrapper: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" } }));
            var ce = i(71620),
                de = i(2430),
                me = i(668214),
                ue = i(689642),
                he = i(919022),
                pe = i(312771);
            const _e = (0, de.cI)("t"),
                ve = (e, t) => {
                    const i = t.match.params.screenName;
                    if (i) return i;
                    const n = fe(e, t);
                    return n?.user_results?.result?.legacy?.screen_name || "";
                },
                be = (e, t) => {
                    const i = t.match.params.broadcastId;
                    if (i) return i;
                    const n = ge(e, t);
                    return n?.latest_broadcast?.broadcast_id;
                },
                ge = (e, t) => {
                    const i = ve(e, t);
                    if (i) return he.ZP.selectByScreenName(e, i);
                    const n = fe(e, t);
                    return n?.user ? he.ZP.select(e, n.user) : void 0;
                },
                fe = (e, t) => {
                    const i = be(e, t);
                    return i ? ue.Z.select(e, i) : void 0;
                },
                Ee = (e, t) => he.ZP.selectViewerUser(e),
                Ie = (e, t) => {
                    const i = ve(e, t);
                    return ue.Z.selectLatestBroadcastFetched(e, i);
                },
                we = (e, t) => {
                    const i = fe(e, t),
                        n = Ie(e, t),
                        a = be(e, t);
                    return i || (!a && n) ? pe.ZP.LOADED : pe.ZP.LOADING;
                },
                De = (0, me.Z)()
                    .propsFromState(() => ({ broadcast: fe, broadcastId: be, broadcaster: ge, fetchStatus: we, latestBroadcastFetched: Ie, screenName: ve, timecode: _e, viewerUser: Ee }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, ce.zr)("LIVE_SCREEN"), fetchBroadcast: ue.Z.fetchOneIfNeeded, fetchLatestBroadcast: ue.Z.fetchLatestBroadcast })),
                Se = 16 / 9,
                ye = { objectFitVideo: "contain" },
                Ce = ({ windowWidth: e }) => e >= 920,
                Te = (e) => (e ? { url: e.image_url, width: e.width, height: e.height } : null),
                Ze = _().hd0bc1eb,
                xe = _().bea1f26b,
                Pe = _().jceadc3e,
                Le = _().ab3ee97f,
                Ne = _().ac4c73d8,
                Oe = _().i9028824,
                Ae = { page: "broadcast" },
                Be = { url: "https://pbs.twimg.com/lex/placeholder_live_nomargin.png", width: 1920, height: 1080 },
                ke = (e, t) => (0, s.ju)(`https://x.com/i/broadcasts/${e}${t ? `?t=${t}` : ""}`);
            function Fe(e) {
                const { broadcast: t, broadcastId: i, broadcaster: s, createLocalApiErrorHandler: p, fetchBroadcast: P, fetchLatestBroadcast: A, fetchStatus: B, latestBroadcastFetched: F, screenName: M, timecode: W } = e,
                    U = n.useContext(I.rC),
                    { viewerUserId: V } = U,
                    R = s?.id_str === V,
                    j = (0, l.Zx)(Ce),
                    z = (0, Z.ZP)();
                (0, g.ph)(),
                    (0, g.hB)(),
                    n.useEffect(() => {
                        M && A(M);
                    }, [A, M]);
                const H = n.useCallback(() => {
                    i && P(i).catch(p({ [b.ZP.GenericNotFound]: { customAction: T.vv } }));
                }, [i, p, P]);
                n.useEffect(() => {
                    H();
                }, [H, i]);
                const q = n.useMemo(() => {
                        if (t && s) {
                            const { state: e, status: i } = t,
                                { name: n } = s;
                            if (i) return i;
                            if (n)
                                switch (e) {
                                    case O.N8.Running:
                                        return Ze({ name: n });
                                    case O.N8.Ended:
                                    case O.N8.TimedOut:
                                        return xe({ name: n });
                                    case O.N8.NotStarted:
                                    default:
                                        return Pe;
                                }
                        }
                        return Pe;
                    }, [t, s]),
                    G = _().d980e29f,
                    $ = _().fc209bb7,
                    Y = n.useCallback(() => {
                        const e = t && t.scheduled_start_time ? new Date(parseInt(t.scheduled_start_time, 10)) : void 0,
                            i = e ? G({ date: $(e) }) : void 0;
                        return i ? n.createElement(r.Z, { style: Me.labelOverlay }, n.createElement(o.ZP, null, i)) : null;
                    }, [t, $, G]),
                    Q = n.useCallback(() => {
                        const e = t && t.pre_live_slate_url ? { url: t.pre_live_slate_url, width: 600, height: 337 } : Be;
                        return n.createElement(r.Z, null, n.createElement(a.ql, { prioritizeSeoTags: !0 }, n.createElement("meta", { content: e.url, property: "og:image" }), n.createElement("meta", { content: e.width, property: "og:image:width" }), n.createElement("meta", { content: e.height, property: "og:image:height" })), n.createElement(c.Z, { "aria-label": Ne, aspectMode: d.Z.exact(m.default.theme.aspectRatios.landscape), image: e, previewMode: !1 }), Y());
                    }, [t, Y]),
                    J = n.useMemo(() => {
                        const e = t && t.media_key,
                            l = !i && s && F,
                            o = Te(t);
                        return t && t.state === O.N8.NotStarted ? Q() : l ? n.createElement(r.Z, { style: Me.offlineContainer }, n.createElement(u.ZP, { size: "title2" }, Le({ screenName: M }))) : t && s && i && o && e ? n.createElement(n.Fragment, null, n.createElement(a.ql, { prioritizeSeoTags: !0 }, n.createElement("meta", { content: o.url, property: "og:image" }), n.createElement("meta", { content: o.width, property: "og:image:width" }), n.createElement("meta", { content: o.height, property: "og:image:height" })), n.createElement(C.Z, { "aria-label": Ne, aspectRatio: Se, displayOptions: ye, poster: o, source: { variants: [], videoId: v.Z.forBroadcast(i), contentId: e }, videoType: "video" })) : null;
                    }, [t, i, s, F, Q, M]),
                    K = n.useMemo(() => n.createElement(r.Z, { style: Me.chat }, n.createElement(S.Z, { broadcastId: i ?? "", defaultChatNotice: Le({ screenName: M }) })), [i, M]),
                    X = n.useCallback(() => n.createElement(y.aM, null, n.createElement(r.Z, { style: [Me.container, z ? Me.navBorder : void 0] }, n.createElement(r.Z, { style: Me.videoContainer }, n.createElement(k, null, J), i && n.createElement(r.Z, { style: Me.title }, n.createElement(N.H, { broadcastId: i, canEdit: R, remoteTitle: q })), n.createElement(le, { broadcast: t, broadcastId: i, broadcaster: s, isLive: t?.state === O.N8.Running })), j && K)), [K, J, t, i, s, R, j, z, q]);
                return n.createElement(
                    x.nO,
                    { namespace: Ae },
                    n.createElement(
                        D.Z,
                        null,
                        ((e) => {
                            const a = s?.name,
                                r = `twitter://broadcasts/${i || ""}`,
                                l = ke(i || ""),
                                o = ke(i || "", W);
                            return s ? n.createElement(n.Fragment, null, n.createElement(E.Z, { canonical: l, description: e, title: a, type: "article" }), n.createElement(f.Z, { deepLink: r }), n.createElement(L.Z, { broadcast: t, broadcaster: s, id: i || "", timecode: W, title: e, url: o })) : null;
                        })(q),
                        n.createElement(w.Z, { title: q, withMeta: !1 }),
                        n.createElement(h.Z, { "aria-label": Oe, fetchStatus: B, onRequestRetry: H, render: X }),
                    ),
                );
            }
            const Me = m.default.create((e) => ({ container: { display: "flex", flexDirection: "row", height: "100vh", overflow: "hidden" }, chat: { borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor, height: "100vh", width: "340px" }, labelOverlay: { position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12 }, navBorder: { borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor }, title: { alignItems: "center", display: "flex", flexDirection: "row", gap: e.spaces.space12, justifyContent: "space-between", paddingHorizontal: e.spaces.space12, paddingTop: e.spaces.space12 }, offlineContainer: { aspectRatio: Se, backgroundColor: e.colors.gray0, flex: 1, justifyContent: "center", alignItems: "center" }, videoContainer: { flex: 1, WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none", overflow: "auto" } })),
                We = De((0, P.Z)(Fe));
        },
        820577: (e, t, i) => {
            i.r(t), i.d(t, { LiveEventScreen: () => be, default: () => fe });
            var n = i(202784),
                a = i(325686),
                r = i(731708),
                s = i(688715),
                l = i(392237),
                o = i(332920),
                c = i.n(o),
                d = i(337637),
                m = i(912021),
                u = i(615656),
                h = i(718e3),
                p = i(22952),
                _ = i(651930),
                v = i(983389),
                b = i(572067),
                g = i(898948),
                f = i(514029),
                E = i(252021),
                I = i(443781),
                w = i(134642),
                D = i(231035),
                S = i(652904),
                y = i(51525),
                C = i(810430),
                T = i(293115),
                Z = i(503229),
                x = i(24949),
                P = i(782578),
                L = i(309854),
                N = i(161821),
                O = i(849376),
                A = i(71620),
                B = i(668214),
                k = i(558369),
                F = i(125793),
                M = i(197914),
                W = i(312771);
            const U = (e, t) => t.match.params.eventId,
                V = (e, t) => [].concat(t.location.query?.timeline)[0],
                R = (e, t) => M.Z.select(e, U(0, t)),
                j = (e, t) => (0, C.fF)(R(e, t)),
                z = (e, t) => (0, C.vy)(R(e, t)),
                H = (e, t) => (0, C.yU)(R(e, t)),
                q = (e, t) => M.Z.selectFetchStatus(e, U(0, t)),
                G = (e, t) => {
                    const i = (M.Z.selectErrors(e) || {})[U(0, t)],
                        { errors: n = [] } = i || {},
                        a = n.find((e) => e.code === u.ZP.BlockedUserError);
                    return a && a.message && a.message.replace("@", "");
                },
                $ = (e, t) => M.Z.selectIsTOO(e, U(0, t)),
                Y = (e, t) => t.location.state?.promotedCardState,
                Q = (e, t) => (0, F.mF)(e, U(0, t)),
                J = (0, x.P1)(R, (e) => {
                    if (!e) return;
                    const { carousel: t } = e.response,
                        i = t.find((e) => !!e.selected),
                        n = i?.slate?.id || i?.fallback_slate?.id;
                    if (n) {
                        const t = e?.slates[n];
                        if (t.focus_rects) {
                            return { cropCandidate: P.Z.selectBestCropCandidate(16 / 9, t.focus_rects), image: t.variants.find((e) => "orig" === e.name) };
                        }
                        if (t.tweet_id) {
                            const i = e?.tweets?.[t.tweet_id];
                            if (i) {
                                const { extended_entities: e } = i,
                                    { media: a } = e || {};
                                if (a) {
                                    const e = a.find(({ media_key: e }) => e === n),
                                        i = e ? L.Z.getCropCandidates(e) : t.focus_rects;
                                    return { cropCandidate: i ? P.Z.selectBestCropCandidate(16 / 9, i) : void 0, image: t.variants.find((e) => "orig" === e.name), altText: e?.ext_alt_text };
                                }
                            }
                        }
                    }
                }),
                K = (0, x.P1)(U, R, (e, t) => (t ? (0, C.Op)(e, t) : { eventId: e })),
                X = (0, x.P1)(R, Y, (e, t) => (e ? (0, C.yC)(e, t) : [])),
                ee = (e) => !0 === (0, k.FG)(e, "responsive_web_live_commerce_enabled"),
                te = (0, x.P1)(U, R, V, ee, (e, t, i, n) => (t ? (0, C.a9)(e, t, i, n) : { composeDetails: { defaultText: "" }, eventId: e, timelineId: C.aE, timelineIndex: 0, timelineLinks: [] })),
                ie = (0, x.P1)(U, G, q, (e, t, i) => ((e, t, i) => ({ liveEventDetails: { eventId: e }, fetchStatus: t ? W.ZP.LOADED : i, refreshStatus: i, timelineDetails: { composeDetails: { defaultText: "" }, eventId: e, timelineId: C.aE, timelineIndex: 0, timelineLinks: [] }, hasSeenEvent: !1, interstitialOrderToDisplay: t ? (0, O.F)({ isBlockedBy: !0, screenName: t }) : void 0, isTOO: !1, isUserSuspended: !1 }))(e, t, i)),
                ne = (0, x.P1)(R, K, (e, t) => {
                    if (!e) return;
                    const { blocked_by: i, blocking: n, screen_name: a } = t.author || {},
                        { sensitive: r } = e.liveEventDetails;
                    return (0, O.F)({ isBlockedBy: i, isBlocking: n, isSensitive: r, screenName: a });
                }),
                ae = (0, B.Z)()
                    .propsFromState(() => ({ eventId: U, event: R, bettingOdds: z, scoreData: j, blockedByScreenName: G, fetchStatus: q, liveEventTimelineId: V, promotedCardState: Y, isTOO: $, isLiveCommerceEnabled: ee, hasSeenEvent: Q, serverPollingIntervalSeconds: H, eventCardImage: J, liveEventDetails: K, timelineDetails: te, carousel: X, requiredProps: ie, interstitialOrderToDisplay: ne }))
                    .adjustStateProps(({ blockedByScreenName: e, carousel: t, event: i, eventId: n, fetchStatus: a, hasSeenEvent: r, isLiveCommerceEnabled: s, liveEventDetails: l, liveEventTimelineId: o, promotedCardState: c, requiredProps: d, ...m }) => {
                        if (!i) return d;
                        const u = ((e) => {
                            const { liveEventDetails: t, users: i } = e || {},
                                { attribution_user_id: n } = t ?? {};
                            return !!n && !(0, N.Z)(i || {}).some((e) => e.id_str === n);
                        })(i);
                        return { ...d, ...m, liveEventDetails: l, fetchStatus: i ? W.ZP.LOADED : a, refreshStatus: a, isUserSuspended: u, hasSeenEvent: r, carousel: t.length > 0 ? t : void 0 };
                    })
                    .propsFromActions(() => ({ addSeenEventId: F.At, createLocalApiErrorHandler: (0, A.zr)("LIVE_EVENT_SCREEN"), fetchLiveEvent: M.Z.fetchOne, fetchSeenEventIds: F.d_, remindMeButtonSubscribe: M.Z.subscribe, remindMeButtonUnsubscribe: M.Z.unSubscribe }))
                    .withAnalytics({ page: "live_event_timeline" });
            var re = i(272175),
                se = i(276563),
                le = i(827515);
            const oe = ({ content: e, name: t }) => (e || (0, le.Z)(e) ? n.createElement("meta", { content: e, key: t, name: t }) : null),
                ce = Object.freeze({ broadcast: "broadcast", video: "video", image: "image" }),
                de = ({ carousel: e, eventCardImage: t, liveEventDetails: i, timelineDetails: a }) => {
                    const { eventId: r, title: s } = i,
                        { timelineId: l } = a,
                        { altText: o, cropCandidate: c, image: d } = t || {},
                        m = e[(0, C.Q_)(e)],
                        u = ((e) => {
                            const {
                                carouselItemInfo: { type: t },
                            } = e;
                            let i;
                            return t === C.Tr.LIVE_BROADCAST || t === C.Tr.REPLAY_BROADCAST ? (i = ce.broadcast) : t === C.Tr.VOD || t === C.Tr.GIF ? (i = ce.video) : t === C.Tr.SLATE && (i = ce.image), i;
                        })(m);
                    return s
                        ? n.createElement(
                              re.ql,
                              null,
                              (({ eventId: e, image: t, timelineId: i, title: n }) => [
                                  { name: "twitter:card", content: se.default.CardNames.LIVE_EVENT },
                                  { name: "twitter:text:event_id", content: e },
                                  { name: "twitter:text:event_title", content: n },
                                  { name: "twitter:text:event_timeline_id", content: i },
                                  { name: "twitter:image:event_thumbnail:src", content: t?.url },
                                  { name: "twitter:image:event_thumbnail:height", content: t?.height },
                                  { name: "twitter:image:event_thumbnail:width", content: t?.width },
                              ])({ title: s, eventId: r, image: d, timelineId: l }).map(oe),
                              (({ altText: e, cardMediaType: t, cropCandidate: i, image: n, liveEventDetails: a, selectedItem: r, timelineDetails: s }) => [
                                  { name: "twitter:text:event_subtitle", content: a.description },
                                  { name: "twitter:text:event_category", content: a.category },
                                  { name: "twitter:text:broadcast_id", content: r.mediaDetails?.broadcastId },
                                  { name: "twitter:text:broadcast_media_key", content: r.mediaDetails?.broadcastMediaKey },
                                  { name: "twitter:text:broadcast_media_id", content: r.mediaDetails?.broadcastId && r.mediaDetails?.mediaId },
                                  { name: "twitter:text:broadcast_title", content: r.mediaDetails?.broadcastTitle },
                                  { name: "twitter:text:broadcaster_twitter_id", content: r.mediaDetails?.broadcastTwitterId },
                                  { name: "twitter:text:broadcaster_display_name", content: r.mediaDetails?.broadcastDisplayName },
                                  { name: "twitter:text:broadcaster_username", content: r.mediaDetails?.broadcastUsername },
                                  { name: "twitter:text:broadcast_width", content: r.mediaDetails?.broadcastWidth },
                                  { name: "twitter:text:broadcast_height", content: r.mediaDetails?.broadcastHeight },
                                  { name: "twitter:text:broadcast_source", content: r.mediaDetails?.broadcastSource },
                                  { name: "twitter:text:broadcast_orientation", content: r.mediaDetails?.broadcastOrientation },
                                  { name: "twitter:user:author:id", content: a.author?.id_str },
                                  { name: "twitter:text:event_badge", content: r.slate?.label },
                                  { name: "twitter:string:media_tweet_id", content: "photo" !== r.mediaDetails?.coverMedia?.type ? r.mediaDetails?.coverTweet?.id_str : void 0 },
                                  { name: "twitter:image:square_thumbnail:src", content: n?.url },
                                  { name: "twitter:image:square_thumbnail:height", content: n?.height },
                                  { name: "twitter:image:square_thumbnail:width", content: n?.width },
                                  { name: "twitter:image:event_thumbnail:alt", content: e },
                                  { name: "twitter:text:event_thumbnail:media:size:crops:16x9:w", content: i?.w },
                                  { name: "twitter:text:event_thumbnail:media:size:crops:16x9:h", content: i?.h },
                                  { name: "twitter:text:event_thumbnail:media:size:crops:16x9:x", content: i?.x },
                                  { name: "twitter:text:event_thumbnail:media:size:crops:16x9:y", content: i?.y },
                                  { name: "twitter:text:remind_me_notification_id", content: a.remindMeSubscription?.notification_id },
                                  { name: "twitter:image:broadcast_thumbnail:src", content: r.mediaDetails?.broadcastThumbnail },
                                  { name: "twitter:string:broadcast_replay_edited_start_time", content: r.mediaDetails?.broadcastReplayStartTime },
                                  { name: "twitter:string:media_type", content: t },
                              ])({ liveEventDetails: i, timelineDetails: a, selectedItem: m, cardMediaType: u, cropCandidate: c, altText: o || "", image: d }).map(oe),
                          )
                        : null;
                };
            var me = i(907552);
            const ue = { page: "live_event_timeline", section: "live_event_header" },
                he = (e) => {
                    const { hashtag: t, id: i } = e,
                        a = (0, C.Ju)(i);
                    return n.createElement(me.ZP, { scribeNamespace: ue, shareText: t, url: a });
                },
                pe = (e) => ({ items: [_e(e)] }),
                _e = ({ carouselLength: e, carouselPosition: t, includeTimelineSource: i = !1, liveEventDetails: n, mediaDetails: a, selectedTimeline: r, tilePosition: s, timelineTabPosition: l }) => {
                    const { eventId: o, remindMeSubscription: c } = n,
                        { broadcastId: d } = a || {},
                        { timelineId: m, timelineSourceId: u, timelineSourceType: h } = r || {},
                        { notification_id: p, subscribed: _, toggle_visible: v } = c || {},
                        b = {},
                        g = {},
                        f = {};
                    return o && (g.host_event_id = o), m && (g.timeline_id = m), i && ((g.timeline_source_id = u), (g.timeline_source_type = h)), void 0 !== l && (g.timeline_tab_position = l), e && ((g.carousel_count = e), (g.carousel_position = t)), void 0 !== s && (g.tile_position = s), c && ((g.remind_me_notification_id = p), (g.remind_me_subscribed = _), (g.remind_me_toggle_visible = v)), d && (f.host_broadcast_id = d), Object.keys(g).length > 0 && (b.live_video_event_details = g), Object.keys(f).length > 0 && (b.live_broadcast_details = f), b;
                },
                ve = c().ecb3df70;
            class be extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._carouselIndexReceived = !1),
                        (this._newSegmentedControlDesign = !1),
                        (this._eventsSeenCacheEnabled = this.context.featureSwitches.isTrue("live_event_interstitial_seen_cache_enabled")),
                        (this.state = { isPlayerFullscreen: !1, selectedCarouselItemId: void 0 }),
                        (this._renderPrimaryContent = ({ isWide: e }) => {
                            const { bettingOdds: t, carousel: i, fetchStatus: a, history: r, isTOO: s, liveEventDetails: l, location: o, refreshStatus: c, remindMeButtonSubscribe: d, remindMeButtonUnsubscribe: m, scoreData: u, serverPollingIntervalSeconds: h, timelineDetails: p } = this.props,
                                { isPlayerFullscreen: _ } = this.state,
                                v = (({ featureSwitches: e, serverPollingIntervalSeconds: t = 0 }) => {
                                    const i = e.isTrue("live_event_timeline_server_controlled_refresh_rate_enabled"),
                                        n = e.getNumberValue("live_event_timeline_default_refresh_rate_interval_seconds", 30),
                                        a = e.getNumberValue("live_event_timeline_minimum_refresh_rate_interval_seconds", 10);
                                    return 1e3 * (i ? Math.max(t, a) : n);
                                })({ featureSwitches: this.context.featureSwitches, serverPollingIntervalSeconds: h }),
                                b = this._getInterstitialsToDisplay();
                            return n.createElement(g.Z, { collectionName: ve }, n.createElement(w.Z, { bettingOdds: t, carousel: i, fetchStatus: a, history: r, interstitialOrderToDisplay: b, isPlayerFullscreen: _, isTOO: s, isWide: e, liveEventDetails: l, location: o, onChildScribeAction: this._handleChildScribeAction, onFetch: this._handleInitialFetch, onFullscreenChange: this._handleFullscreenChange, onInterstitialSubmit: this._handleInterstitialSubmit, onSelectedCarouselItemChange: this._handleSelectedCarouselItemChanged, onTimelinePoll: this._handleTimelinePoll, pollingIntervalMs: v, refreshStatus: c, remindMeButtonSubscribe: d, remindMeButtonUnsubscribe: m, scoreData: u, timelineDetails: p, withFloatingComposeButton: !0 }));
                        }),
                        (this._getSelectedItem = () => {
                            const { carousel: e } = this.props,
                                { selectedCarouselItemId: t } = this.state;
                            return (0, C.to)(e, t);
                        }),
                        (this._getSelectedItemIndex = () => {
                            const { carousel: e } = this.props,
                                t = this._getSelectedItem();
                            return e && t ? (0, d.Z)(e, (e) => e.id === t.id) : void 0;
                        }),
                        (this._getScribeProviderMetadata = (0, m.Z)((e, t, i, n, a) => {
                            const { timelineId: r, timelineIndex: s, timelineLinks: l } = i,
                                { mediaDetails: o } = a || {},
                                c = l && l.find((e) => e.timelineId === r);
                            return { event_id: t.eventId, ...pe({ carouselLength: e && e.length, carouselPosition: n, liveEventDetails: t, mediaDetails: o, timelineTabPosition: s, selectedTimeline: c }) };
                        })),
                        (this._handleInitialFetch = () => {
                            this._fetchLiveEvent();
                        }),
                        (this._fetchLiveEvent = () => {
                            const {
                                createLocalApiErrorHandler: e,
                                fetchLiveEvent: t,
                                liveEventDetails: { eventId: i },
                            } = this.props;
                            return t(i).catch(e({ [u.ZP.GenericNotFound]: { customAction: y.vv } }));
                        }),
                        (this._fetchSeenIds = () => {
                            const { createLocalApiErrorHandler: e, fetchSeenEventIds: t } = this.props;
                            return t().catch(e);
                        }),
                        (this._handleInterstitialSubmit = ({ type: e }) => {
                            const {
                                addSeenEventId: t,
                                createLocalApiErrorHandler: i,
                                liveEventDetails: { eventId: n },
                            } = this.props;
                            e === p.T.SENSITIVE && this._eventsSeenCacheEnabled && t(n).catch(i);
                        }),
                        (this._handleTimelinePoll = () => {
                            this._fetchLiveEvent();
                        }),
                        (this._handleFullscreenChange = ({ isPlayerFullscreen: e }) => {
                            this.setState({ isPlayerFullscreen: e });
                        }),
                        (this._handleSelectedCarouselItemChanged = (e) => {
                            this.setState({ selectedCarouselItemId: e.id });
                        }),
                        (this._handleChildScribeAction = (e, t) => this._scribeActionWithEventItems(e, t)),
                        (this._scribeTimelineImpression = () => {
                            const {
                                    analytics: e,
                                    carousel: t,
                                    liveEventDetails: i,
                                    timelineDetails: { timelineId: n, timelineLinks: a },
                                } = this.props,
                                r = this._getSelectedItemIndex(),
                                { mediaDetails: s } = this._getSelectedItem() || {},
                                l = a.find((e) => e && e.timelineId === n);
                            l && e.scribe({ action: "impression", data: { ...pe({ liveEventDetails: i, includeTimelineSource: !0, mediaDetails: s, selectedTimeline: l, carouselLength: t && t.length, carouselPosition: r }) } });
                        });
                }
                componentDidMount() {
                    this._handleInitialFetch(), this._fetchSeenIds();
                }
                componentDidUpdate(e, t) {
                    const {
                            liveEventDetails: { eventId: i },
                            timelineDetails: { timelineId: n, timelineLinks: a },
                        } = this.props,
                        {
                            liveEventDetails: { eventId: r },
                            timelineDetails: { timelineId: s, timelineLinks: l },
                        } = e;
                    r !== i ? this._handleInitialFetch() : s !== n && (this._scribeTimelineTabChange(), this._scribeTimelineImpression()), 0 === l.length && a.length > 0 && this._scribeTimelineTabImpressions();
                }
                render() {
                    const { carousel: e, history: t, isUserSuspended: i, liveEventDetails: a, timelineDetails: s } = this.props,
                        { shortTitle: l, title: o } = a,
                        { composeDetails: c } = s,
                        { isPlayerFullscreen: d } = this.state;
                    if (i) return n.createElement(D.Z, null);
                    const m = o || C.AZ,
                        u = this._renderScoreCard(),
                        p = l ? n.createElement(r.ZP, { withHashflags: !0 }, l) : C.zd,
                        _ = n.createElement(h.Z, { withWhoToFollow: !1 }, u),
                        v = this.context.viewerUserId && !d ? this._renderRightButtons() : void 0,
                        b = this._getScribeProviderMetadata(e, a, s, this._getSelectedItemIndex(), this._getSelectedItem());
                    return n.createElement(T.nO, { data: b }, n.createElement(S.Z, null, null, n.createElement(E.Z, { backLocation: "/", composeOptions: c, documentTitle: m, headerless: d, history: t, primaryContent: this._renderPrimaryContent, rightControl: v, sidebarContent: _, title: p })));
                }
                _renderPageMeta(e) {
                    const { carousel: t, eventCardImage: i, liveEventDetails: a, timelineDetails: r } = this.props,
                        { description: l, eventId: o } = a,
                        c = o && `twitter://events/timeline/${o}`,
                        d = o && (0, s.ju)(`https://x.com/i/events/${o || ""}`);
                    return n.createElement(n.Fragment, null, l ? n.createElement(v.Z, { description: l }) : null, n.createElement(b.Z, { canonical: d, description: l, image: i?.image?.url, imageH: i?.image?.height, imageW: i?.image?.width, title: e, type: "article" }), null, n.createElement(_.Z, { deepLink: c }), t ? n.createElement(de, { carousel: t, eventCardImage: i, liveEventDetails: a, timelineDetails: r }) : null);
                }
                _renderRightButtons() {
                    const {
                        liveEventDetails: { author: e, eventId: t, title: i },
                        timelineDetails: { hashtag: r },
                    } = this.props;
                    return n.createElement(a.Z, { style: ge.rightButtonContainer }, n.createElement(he, { author: e, hashtag: r, id: t, title: i }));
                }
                _renderScoreCard() {
                    const { scoreData: e } = this.props;
                    return e ? n.createElement(f.Z, { scoreData: e, withContainer: !0, withHeader: !0 }) : null;
                }
                _getInterstitialsToDisplay() {
                    const { hasSeenEvent: e, interstitialOrderToDisplay: t } = this.props;
                    return this._eventsSeenCacheEnabled && e ? t?.filter(({ type: e }) => e !== p.T.SENSITIVE) : t;
                }
                _scribeActionWithEventItems(e, t) {
                    const {
                            analytics: i,
                            carousel: n,
                            liveEventDetails: a,
                            timelineDetails: { timelineId: r, timelineLinks: s },
                        } = this.props,
                        l = this._getSelectedItemIndex(),
                        { mediaDetails: o } = this._getSelectedItem() || {},
                        c = s.find((e) => e.timelineId === r);
                    e.action && i.scribe({ ...e, action: e.action, data: { ...pe({ liveEventDetails: a, mediaDetails: o, selectedTimeline: c, carouselLength: n && n.length, carouselPosition: l, ...t }) } });
                }
                _scribeTimelineTabChange() {
                    const {
                            analytics: e,
                            liveEventDetails: t,
                            timelineDetails: { timelineId: i, timelineIndex: n, timelineLinks: a },
                        } = this.props,
                        { mediaDetails: r } = this._getSelectedItem() || {},
                        s = a && a.find((e) => e.timelineId === i);
                    e.scribe({ component: i, element: "tab", action: "selected", data: { ...pe({ liveEventDetails: t, timelineTabPosition: n, mediaDetails: r, selectedTimeline: s, includeTimelineSource: !0 }) } });
                }
                _scribeTimelineTabImpressions() {
                    const {
                        analytics: e,
                        liveEventDetails: t,
                        timelineDetails: { timelineLinks: i },
                    } = this.props;
                    i.forEach((i) => {
                        e.scribe({ component: "tabs", element: i.timelineId, action: "impression", data: { ...pe({ liveEventDetails: t }) } });
                    });
                }
            }
            be.contextType = I.rC;
            const ge = l.default.create((e) => ({ rightButtonContainer: { flexDirection: "row" }, segmentedControl: { borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                fe = ae((0, Z.Z)(be));
        },
        152957: (e, t, i) => {
            i.d(t, { I: () => n });
            Object.freeze({ BROADCAST_MEDIA_TYPE: "broadcast", VIDEO_MEDIA_TYPE: "video" });
            const n = Object.freeze({ COMPLETED: "COMPLETED", DELAYED: "DELAYED", LIVE: "LIVE", UPCOMING: "UPCOMING" });
        },
        61675: (e, t, i) => {
            i.r(t), i.d(t, { default: () => N });
            var n = i(202784),
                a = i(325686),
                r = (i(688715), i(392237)),
                s = i(332920),
                l = i.n(s),
                o = i(615656),
                c = i(219770),
                d = i(718e3),
                m = (i(651930), i(983389), i(572067), i(898948)),
                u = i(252021),
                h = i(443781),
                p = i(652904),
                _ = i(180401),
                v = i(720275),
                b = i(51525),
                g = i(503229),
                f = i(71620),
                E = i(810430),
                I = i(668214),
                w = i(148843),
                D = i(836255),
                S = i(312771);
            const y = (e, t) => t.match.params.trendId,
                C = (e, t) => {
                    const i = w.Z.select(e, y(0, t)),
                        n = i?.page,
                        a = n?.media_carousel;
                    if (n && a && a.length > 0) {
                        const t = a.reduce((t, { media_id: i, tweet: n }) => {
                            if (i && n) {
                                const a = ((e, { media_id: t, tweet_id: i }) => {
                                    const n = D.Z.selectHydrated(e, i);
                                    if (!n) return;
                                    const { user: a } = n,
                                        r = n.extended_entities?.media?.find((e) => e.id_str === t);
                                    if (!r || !a) return;
                                    const s = { animated_gif: E.Tr.GIF, photo: E.Tr.SLATE, video: E.Tr.VOD, vine: E.Tr.VOD }[r.type] || "vod";
                                    return { id: t, selected: !1, mediaDetails: { isLive: !1, coverMedia: r, coverTweet: n }, slate: { id: t, image: { name: "cover", height: r.original_info?.height || 0, width: r.original_info?.width || 0, url: r.media_url_https }, tweetId: i }, carouselItemInfo: { verified: a.verified, is_blue_verified: a.is_blue_verified, screenName: a.screen_name, name: a.name, type: s, playbackDuration: "photo" === r.type ? void 0 : r.video_info.duration_millis, userId: a.id_str, profileImageUrl: a.profile_background_image_url_https } };
                                })(e, { media_id: i, tweet_id: n });
                                return a ? [...t, a] : t;
                            }
                            return t;
                        }, []);
                        return { ...i, page: { ...n, media_carousel: t } };
                    }
                    return n ? { ...i, page: { ...n, media_carousel: void 0 } } : void 0;
                },
                T = (e, t) => w.Z.selectFetchStatus(e, y(0, t)) || S.ZP.NONE,
                Z = (e, t) => [].concat(t.location.query?.timeline)[0],
                x = (0, I.Z)()
                    .propsFromState(() => ({ trendId: y, trendInfo: C, fetchStatus: T, timelineId: Z }))
                    .adjustStateProps(({ fetchStatus: e, timelineId: t, trendId: i, trendInfo: n }) => {
                        const { birdwatch_pivot: a, community_note_url: r, page: s } = n || {};
                        if (!s) return ((e, t) => ({ id: e, is_saved: !1, title: "", fetchStatus: t, refreshStatus: t, composerDetails: { defaultText: "" }, additionalActions: [] }))(i, S.ZP.NONE);
                        const { article: l, composer_config: o, disclaimer: c, is_saved: d, last_updated_at_ms: m, media_carousel: u, post_timelines: h, prompt_question: p } = s,
                            { article_text: _, title: v } = l || {},
                            b = (h || []).map((e) => ({ timelineId: e.post_timeline.id, label: e.label })),
                            g = { text: _?.text || "", textEntities: [] },
                            f = b?.findIndex((e) => e.timelineId === t),
                            E = f && -1 !== f ? f : 0,
                            I = b[E].timelineId,
                            w = `/i/trending/${i}`,
                            D = n?.page.available_actions ?? [],
                            y = { timelineId: I, timelineIndex: E, timelineLinks: b.map((e) => ({ isActive: () => I === e.timelineId, label: e.label, timelineId: e.timelineId, to: { pathname: w, query: { timeline: e.timelineId } } })), trendId: i };
                        return { disclaimer: c, id: i, is_saved: d || !1, title: v, trendArticle: g, fetchStatus: n ? S.ZP.LOADED : e, refreshStatus: e, birdwatchPivot: a, communityNoteUrl: r, carousel: u && u.length > 0 ? u : void 0, timelineDetails: y, last_updated_at_ms: m, trendPrompt: p || v, composerDetails: { defaultText: o?.prompt_text || "" }, additionalActions: D };
                    })
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("TRENDING_EVENT_SCREEN"), fetchTrendInfo: w.Z.fetchOne }))
                    .withAnalytics({ page: "trending_event_timeline" }),
                P = l().c3077694,
                L = r.default.create((e) => ({ rightButtonContainer: { flexDirection: "row" }, segmentedControl: { borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                N = x(
                    (0, g.Z)(({ additionalActions: e, birdwatchPivot: t, carousel: i, communityNoteUrl: r, composerDetails: s, createLocalApiErrorHandler: l, disclaimer: g, fetchStatus: f, fetchTrendInfo: E, history: I, id: w, is_saved: D, last_updated_at_ms: S, location: y, refreshStatus: C, timelineDetails: T, title: Z, trendArticle: x, trendPrompt: N }) => {
                        const [O] = n.useState(!1),
                            A = n.useContext(h.rC),
                            B = n.useCallback(() => {
                                E(w).catch(l({ [o.ZP.GenericNotFound]: { customAction: b.vv } }));
                            }, [w, l, E]);
                        n.useEffect(() => {
                            B();
                        }, [w, B]);
                        const k = n.createElement(d.Z, { withMaxHeight: !1, withWhoToFollow: !1 }, n.createElement(v.Z, { trendId: w })),
                            F = A.viewerUserId && !O ? n.createElement(a.Z, { style: L.rightButtonContainer }, n.createElement(c.Z, { additionalActions: e, communityNoteUrl: r, id: w, isSaved: D })) : void 0;
                        return n.createElement(p.Z, null, null, n.createElement(u.Z, { backLocation: "/", composeOptions: s, documentTitle: Z, headerless: O, history: I, primaryContent: (e) => (({ isWide: e }) => n.createElement(m.Z, { collectionName: P }, n.createElement(_.Z, { birdwatchPivot: t, disclaimer: g, fetchStatus: f, history: I, id: w, isWide: e, lastUpdatedAt: S, location: y, onFetch: B, pollingIntervalMs: 6e4, refreshStatus: C, timelineDetails: T, title: Z, trendArticle: x, trendPrompt: N })))(e), rightControl: F, sidebarContent: k }));
                    }),
                );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-99ebe121.c42643fa.js.map
