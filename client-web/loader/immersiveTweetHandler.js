"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.immersiveTweetHandler"],
    {
        311554: (e, t, n) => {
            n.r(t), n.d(t, { DEFAULT_SCRIBE_NAMESPACE: () => tt, default: () => at, getScribeDataItem: () => nt });
            var a = n(459643),
                o = n(942893),
                i = n(351322),
                r = n(202784),
                s = n(325686),
                l = n(392237),
                c = n(284702),
                u = n(187669),
                p = n(123751),
                d = n(807896),
                m = n(175993),
                h = n(688715),
                w = n(341189),
                g = n(966886),
                b = n(124964),
                C = n(966582),
                y = n(815858),
                v = n(154003),
                f = n(542610),
                E = n(155727),
                T = n(530732),
                _ = n(366635),
                S = n(366985),
                x = n(731708),
                k = n(451051),
                P = n(674132),
                I = n.n(P),
                Z = n(894966),
                A = n(899667),
                M = n(487552),
                B = n(83515),
                D = n(926628),
                L = n(643442),
                O = n(466445),
                F = n(498844),
                V = n(38502),
                N = n(804579),
                H = n(149170),
                $ = n(382880),
                z = n(609927),
                U = n(756632),
                G = n(459284),
                j = n(335636),
                R = n(443781),
                W = n(23134),
                X = n(778955),
                q = n(250165),
                Y = n(738584),
                J = n(905996),
                K = n(614425),
                Q = n(668214);
            const ee =
                    () =>
                    (e, t, { api: n }) =>
                        n.getHttpClient(),
                te = (0, Q.Z)()
                    .propsFromActions(() => ({ getTwitterAuthedHttpClient: ee }))
                    .withAnalytics(),
                ne = ({ hasFocus: e, playerApi: t, tweetId: n }) => {
                    const { isTweetContentHidden: a, setTweetContentHidden: o } = (0, j.V)(),
                        [i, l] = r.useState(!1);
                    r.useEffect(() => {
                        i &&
                            t &&
                            ((e, t) => {
                                t ? e.play() : e.pause();
                            })(t, e);
                    }, [e, t, i]),
                        r.useEffect(() => {
                            o(!1);
                        }, [o, n]),
                        r.useEffect(() => {
                            const e = setTimeout(() => {
                                o(!0);
                            }, 2e3);
                            return function () {
                                clearTimeout(e);
                            };
                        }, [o, n]),
                        i || l(!0);
                    const c = r.useCallback(() => {
                        t && o(!a);
                    }, [t, o, a]);
                    return r.createElement(s.Z, { onClick: c, style: ae.controlsContainer, testID: `immersive-video-controls-${n}` });
                },
                ae = l.default.create((e) => ({ controlsContainer: { width: "100%", height: "100%", display: "flex", flexDirection: "column" } })),
                oe = r.memo(ne),
                ie = te((e) => {
                    const { featureSwitches: t } = r.useContext(R.rC),
                        { analytics: n, getTwitterAuthedHttpClient: a, onPlayerState: o, source: i } = e,
                        s = r.useMemo(() => a(), [a]),
                        l = i?.variants?.map((e) => ({ src: e.url, type: e.content_type })) || [];
                    let c;
                    if (e.cta) {
                        const { type: t, url: n } = e.cta;
                        t && n && (c = { type: t, url: n });
                    }
                    const u = r.useMemo(() => {
                            const e = { scribeContext: { ...n.contextualScribeNamespace }, enableShortFormCompleteLogging: t.isTrue("responsive_web_video_pcomplete_enabled") },
                                a = {
                                    log: (e) => {
                                        const { category: t, data: a, namespace: o } = e;
                                        o?.action && n.scribe({ ...o, data: { ...a, _category_: t } });
                                    },
                                };
                            return new J.Z(a, { log: () => {} }, s, e);
                        }, [n, t, s]),
                        p = r.useCallback(
                            (e) => {
                                o && o(e);
                            },
                            [o],
                        ),
                        d = (e.durationMs ?? 0) < 1e3 * e.maxLoopingThresholdSec ? 2 : 1;
                    return e && e.source ? r.createElement(Y.Z, { analytics: u, "aria-label": e["aria-label"], aspectRatio: e.aspectRatio, basePlayerClass: K.Y7, configType: "static", contentId: e.source.contentId, contentType: "media_entity", cta: c, durationMs: e.durationMs, enableVideoPlayerCaptionRendering: !0, eventId: e.source.eventId, featureProvider: t, geolocationPrompt: e.geolocationPrompt, httpClient: s, includeBroadcastEventAssociation: e.includeBroadcastEventAssociation, intentToPlayTime: e.intentToPlayTime, language: e.userLanguage, loop: e.loop, maxLoopCount: d, onApiReady: e.onSetPlayerApi, onStateUpdate: p, playbackSessionId: e.tweetId, poster: e.poster?.url, precache: !1, requestedTimecode: e.timecode, setPlayerApi: e.setPlayer, size: "fill", variants: l, videoId: e.source.videoId, viewCount: e.viewCount, vmapUrl: e.source.vmapUrl }, ({ playerApi: t, playerState: n }) => r.createElement(oe, { hasFocus: e.hasFocus, playerApi: t, playerState: n, tweetId: e.tweetId || "" })) : r.createElement(r.Fragment, null);
                });
            var re = n(988428);
            const se = I().ia5e7488,
                le = I().hb568af4,
                ce = I().bb1cbeb6,
                ue = I().f45bace4,
                pe = I().e674c120,
                de = I().i86c2940,
                me = I().a83d4280,
                he = I().g0048656,
                we = I().ec6907ba,
                ge = { threshold: [0.98, 0.01] },
                be = { label: se },
                Ce = { label: me },
                ye = { label: he },
                ve = r.createElement(Z.default, null),
                fe = r.createElement(A.default, null),
                Ee = r.createElement(M.default, null),
                Te = { avatarSize: "xLarge" },
                _e = I().ic1e826e,
                Se = I().b89c5a50;
            function xe(e) {
                const { analytics: t, isActiveCreator: n, isNsfwUser: a, isPinned: o, mediaType: i, photo: l, style: c, tweet: p, userCountry: P, userLanguage: I, videoPlayerApi: Z, videoPlayerState: A, videoProps: M } = e,
                    { featureSwitches: H } = r.useContext(R.rC),
                    Y = r.useContext(m.Z),
                    J = H.isTrue("explore_relaunch_enable_immersive_web_navigation_button"),
                    { adjustFocusBy: K, currentIndex: Q, totalItems: ee } = (0, z.Y)(),
                    { forwardPivotInfo: te, hasClosedCaptioning: ne, isMuted: ae, isTweetContentHidden: oe, onMuteToggle: xe, onTweetUpdate: Ie, setBlockedOrMutedEntry: Ze, setHasClosedCaptioning: Ae } = (0, j.V)(),
                    Me = r.useRef(null),
                    [Be, De] = r.useState(!1),
                    Le = Boolean(Z) && Boolean(A),
                    Oe = A && (0, re.Ci)(A);
                (0, u.q)(() => {
                    t.scribe({ element: "tweet", action: "impression" });
                    if ("IntersectionObserver" in window) {
                        const e = new IntersectionObserver((e) => Ue(e, De), ge),
                            t = Me.current;
                        null != t && e.observe(t);
                        return () => {
                            e.disconnect();
                        };
                    }
                });
                const Fe = p.id_str,
                    Ve = p.user.blocking,
                    Ne = p.user.muting;
                r.useEffect(() => {
                    Ze(`tweet-${Fe}`, Ve || Ne || !1);
                }, [Ve, Ne, Fe]),
                    r.useEffect(() => {
                        Le && ae !== A?.isMuted && (ae ? Z?.mute() : Z?.unmute());
                    }, [ae, Le, Z, A?.isMuted]),
                    r.useEffect(() => {
                        Le && Oe?.hasCaptions && ne !== A?.areCaptionsShown && Z?.toggleCaptions();
                    }, [Oe?.hasCaptions, ne, Le, Z, A?.areCaptionsShown]);
                const He = H.isTrue("explore_relaunch_enable_auto_play"),
                    $e = r.useMemo(
                        () =>
                            (0, $.Z)(() => {
                                K && K(1);
                            }),
                        [K],
                    );
                r.useEffect(() => {
                    He &&
                        Z &&
                        Z.subscribe((e) => {
                            e.tracksFinished && void 0 !== Q && void 0 !== ee && Q < ee && $e();
                        });
                }, [He, Z, K, $e, Q, ee]);
                const ze = r.useMemo(() => ({ pathname: (0, h.ju)(`https://x.com/${p.user.screen_name || ""}`), state: p.promoted_content ? { promotedTweetState: p.promoted_content } : void 0 }), [p.promoted_content, p.user.screen_name]),
                    Ue = (e, t) => {
                        const n = e[0].intersectionRatio >= 0.98;
                        t(n), n && Ie(p);
                    },
                    Ge = r.useCallback(() => {
                        Y && Y.goBack();
                    }, [Y]),
                    je = r.useCallback(() => {
                        t.scribe({ element: "caret", action: "click" });
                    }, [t]),
                    Re = r.useCallback(
                        (e) => {
                            xe(!ae), e?.stopPropagation();
                        },
                        [xe, ae],
                    ),
                    We = r.useCallback(
                        (e, n) => {
                            n === w.Z.HASHTAG ? t.scribe({ element: "hashtag", action: "search" }) : n === w.Z.URL ? t.scribe({ action: "open_link" }) : n === w.Z.TEXT && t.scribe({ element: "tweet", action: "click" });
                        },
                        [t],
                    ),
                    Xe = r.useCallback(
                        (e) => {
                            const { height: t } = e.nativeEvent.layout;
                            Z?.setCaptionDefaultOffset({ bottom: t });
                        },
                        [Z],
                    ),
                    qe = r.useCallback(
                        (e) => {
                            Ae(!ne), e.stopPropagation();
                        },
                        [Ae, ne],
                    ),
                    Ye = r.useMemo(() => [ke.container, c || void 0], [c]),
                    Je = r.useMemo(() => [ke.button, ke.navigationButtonBottom], []),
                    Ke = r.useMemo(() => [ke.button, ke.navigationButtonTop], []),
                    Qe = r.useMemo(() => [ke.navigationButtonContainer, ke.topNavigationButtonContainer], []),
                    et = r.useMemo(() => ({ label: ae ? ce : le }), [ae]),
                    tt = r.useMemo(() => (ae ? r.createElement(B.default, { testID: `immersive-tweet-unmute-icon-${Fe}` }) : r.createElement(D.default, { testID: `immersive-tweet-mute-icon-${Fe}` })), [ae, Fe]),
                    nt = r.useMemo(() => !!Q && 0 !== Q, [Q]),
                    at = r.useMemo(() => !!ee && ee - 1 !== Q, [ee, Q]),
                    ot = r.useCallback(
                        (e) => {
                            K && K(e);
                            const n = -1 === e ? "previous_tweet_button" : "next_tweet_button";
                            t.scribe({ element: n, action: "click" });
                        },
                        [K, t],
                    ),
                    it = r.useCallback(() => ot(-1), [ot]),
                    rt = r.useCallback(() => ot(1), [ot]),
                    st = r.useMemo(() => (A?.isPlaying ? r.createElement(L.default, { testID: `immersive-tweet-pause-button-${Fe}` }) : r.createElement(O.default, { testID: `immersive-tweet-play-button-${Fe}` })), [A?.isPlaying, Fe]),
                    lt = r.useMemo(() => ({ label: A?.areCaptionsShown ? ue : pe }), [A?.areCaptionsShown]),
                    ct = r.useMemo(() => (Oe?.hasCaptions ? (A?.areCaptionsShown ? r.createElement(V.default, { testID: `immersive-tweet-remove-captions-icon-${Fe}` }) : r.createElement(N.default, { testID: `immersive-tweet-add-captions-icon-${Fe}` })) : r.createElement(F.default, { testID: `immersive-tweet-no-captions-icon-${Fe}` })), [Oe?.hasCaptions, A?.areCaptionsShown, Fe]),
                    ut = r.useCallback(() => {
                        t.scribe({ element: "avatar", action: "profile_click" });
                    }, [t]),
                    pt = r.useMemo(() => r.createElement(s.Z, { style: ke.screenNameSuffix }, r.createElement(g.Z, { style: ke.relativeTimestamp, timestamp: p.created_at }), r.createElement(b.Z, null), r.createElement(W.C, { isTransparent: !0, promotedContent: p.promoted_content, size: "medium", style: ke.followUserButton, userId: p.user.id_str })), [p.created_at, p.user.id_str, p.promoted_content]),
                    dt = C.Z.isPromoted(p.promoted_content);
                return r.createElement(
                    s.Z,
                    { ref: Me, style: Ye },
                    r.createElement(
                        s.Z,
                        { style: ke.immersiveBlurContainer },
                        r.createElement(
                            s.Z,
                            { style: ke.mediaContentContainer },
                            (({ featureSwitches: e, hasFocus: t, mediaType: n, photo: a, tweetId: o, userLanguage: i, videoProps: s }) => {
                                const l = { maxLoopingThresholdSec: e.getNumberValue("explore_relaunch_max_video_loop_threshold_sec", 5) };
                                switch (n) {
                                    case "video":
                                    case "animated_gif":
                                        return s ? r.createElement(ie, (0, d.Z)({}, s, l, { hasFocus: t, loop: !0, tweetId: o, userLanguage: i })) : null;
                                    default:
                                        return r.createElement(r.Fragment, null);
                                }
                            })({ mediaType: i, videoProps: M, hasFocus: Be, photo: l, tweetId: Fe, userLanguage: I, featureSwitches: H }),
                        ),
                        r.createElement(
                            s.Z,
                            { style: ke.tweetForegroundContainer },
                            r.createElement(s.Z, { style: ke.tweetTopContent }, J && r.createElement(s.Z, { style: Qe }, r.createElement(y.Z, { duration: "longer", show: !oe, type: "fade" }, r.createElement(v.ZP, { "aria-label": he, disabled: !nt, hoverLabel: ye, icon: fe, onClick: it, size: "xSmall", style: Ke, testID: `immersive-tweet-previous-tweet-button-${Fe}`, type: "onMediaDominantColorFilled" }))), r.createElement(v.ZP, { "aria-label": se, hoverLabel: be, icon: ve, onClick: Ge, style: ke.backButton, testID: `immersive-tweet-back-button-${Fe}`, type: "onMediaDominantColorFilled" })),
                            r.createElement(
                                y.Z,
                                { duration: "longer", show: !oe, type: "fade" },
                                r.createElement(
                                    s.Z,
                                    { style: ke.bottomContainer, testID: `immersive-tweet-ui-content-container-${Fe}` },
                                    r.createElement(
                                        s.Z,
                                        { onLayout: Xe, style: ke.tweetContentContainer },
                                        Le && r.createElement(s.Z, { style: ke.verticalButtonContainer }, r.createElement(v.ZP, { "aria-label": ae ? ce : le, hoverLabel: et, icon: tt, onClick: Re, size: "xSmall", style: ke.button, testID: `immersive-tweet-mute-button-${Fe}`, type: "onMediaDominantColorFilled" }), r.createElement(v.ZP, { "aria-label": A?.areCaptionsShown ? ue : pe, disabled: !Oe?.hasCaptions, hoverLabel: lt, icon: ct, onClick: qe, size: "xSmall", style: ke.button, testID: `immersive-tweet-closed-captioning-button-${Fe}`, type: "onMediaDominantColorFilled" })),
                                        !!Z && r.createElement(s.Z, { style: ke.scrubberContainerWithPlayButton }, r.createElement(v.ZP, { "aria-label": A?.isPlaying ? Se : _e, icon: st, onClick: A?.isPlaying ? Z?.pause : Z?.play, size: "medium", style: ke.playPauseButton, type: "onMediaText" }), r.createElement(s.Z, { style: ke.scrubberFlexContainer }, r.createElement(f.Z, { "aria-label": de, currentTime: Oe ? (0, re.Ot)(Oe) || 0 : void 0, duration: Oe ? (0, re.MU)(Oe) : void 0, isScrubbing: !!A?.isScrubbing && A.isScrubbing, isSeeking: !!A?.isSeeking && A.isSeeking, playerApi: Z }))),
                                        r.createElement(s.Z, { style: ke.userInfoContainer }, r.createElement(s.Z, null, r.createElement(E.Z.Provider, { value: Te }, r.createElement(U.Z, { onClick: ut, promotedContent: p.promoted_content, screenName: p.user.screen_name, uri: p.user.profile_image_url_https, userId: p.user.id_str, withLink: !0 }))), r.createElement(s.Z, { style: ke.userNameContainer }, r.createElement(T.Z, { link: ze }, r.createElement(_.Z, { color: "white", isBlueVerified: p.user.is_blue_verified, isVerified: p.user.verified, name: p.user.name, screenName: p.user.screen_name, screenNameSize: "body", screenNameSuffix: pt, weight: "bold", withName: !0, withScreenName: !0, withStackedLayout: !0 }))), r.createElement(s.Z, { style: ke.promotedLabel }, dt ? r.createElement(S.j, { tweet: p }, ([e]) => (e ? r.createElement(x.ZP, { "aria-label": e.promotedLabel, color: "gray700", testID: "immersive-tweet-ad-label" }, we) : null)) : null), r.createElement(s.Z, { style: ke.tweetActionMenuContainer }, r.createElement(q.g, { downloadLink: M?.source.downloadLink }, r.createElement(G.Z, { isActiveCreator: n || !1, isNsfwUser: a || !1, isPinned: o, menuControlProps: Pe, onMenuClick: je, promotedContent: p.promoted_content, tweet: p, userCountry: P, userLanguage: I, withMuteConversation: !1 })))),
                                        r.createElement(s.Z, { style: ke.tweetTextContainer }, r.createElement(k.Z, { displayTextRange: p.display_text_range, entities: p.entities, lang: p.lang, link: p.permalink, linkify: !0, numberOfLines: 5, onEntityClick: We, style: ke.tweetText, testID: `immersive-tweet-text-${Fe}`, text: p.text })),
                                    ),
                                    r.createElement(s.Z, { style: ke.tweetActionsBarContainer }, r.createElement(s.Z, { style: ke.primaryTweetActionsContainer }, r.createElement(X.Z, { activeColor: "white", allowBookmarkInActionsBar: !0, color: "white", forwardPivotInfo: p.softIntervention || te, style: ke.actionsBar, tweet: p, withAnalyticsAction: !0, withCount: !0 }))),
                                    J && r.createElement(s.Z, { style: ke.navigationButtonContainer }, r.createElement(v.ZP, { "aria-label": me, disabled: !at, hoverLabel: Ce, icon: Ee, onClick: rt, size: "xSmall", style: Je, testID: `immersive-tweet-next-tweet-button-${Fe}`, type: "onMediaDominantColorFilled" })),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const ke = l.default.create((e) => ({
                    actionsBar: { maxWidth: "none", paddingHorizontal: e.spaces.space16 },
                    container: { height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" },
                    replyContext: { marginBottom: e.spaces.space2 },
                    socialContext: { marginBottom: e.spaces.space4 },
                    socialContextIcon: { marginBottom: e.spaces.space4 },
                    promotedIndicator: { marginTop: e.spaces.space12 },
                    absoluteFill: { width: "100%", height: "100%" },
                    immersiveBlurContainer: { position: "relative", width: "100%", height: "100%" },
                    mediaContentContainer: { position: "absolute", width: "100%", height: "100%" },
                    tweetActionsMenu: { display: "grid", gridTemplateColumns: "1fr", gridTemplateRows: `1fr repeat(4, ${e.spaces.space64})`, width: "100%", height: "100%" },
                    tweetContentContainer: { width: "100%", paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space12 },
                    tweetActionsBarContainer: { width: "100%", display: "flex", flexDirection: "row", marginBottom: e.spaces.space20, paddingTop: e.spaces.space12, pointerEvents: "all" },
                    primaryTweetActionsContainer: { flex: "4" },
                    promotedLabel: { alignSelf: "center", paddingEnd: e.spaces.space4 },
                    tweetActionMenuContainer: { alignSelf: "center", justifyContent: "center", height: e.spaces.space32, width: e.spaces.space32 },
                    tweetForegroundEmptySpace: { flex: 0, flexGrow: 1 },
                    tweetForegroundContainer: { position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "flex-end", flexDirection: "column", pointerEvents: "none" },
                    tweetTopContent: { position: "absolute", top: 0, width: "100%" },
                    backButton: { pointerEvents: "all", position: "absolute", top: e.spaces.space12, start: e.spaces.space16 },
                    backArrowIcon: { color: e.colors.white },
                    userInfoContainer: { flexDirection: "row", paddingVertical: e.spaces.space8, pointerEvents: "all", alignItems: "flex-start" },
                    screenNameSuffix: { display: "flex", flexDirection: "row" },
                    relativeTimestamp: { color: e.colors.white },
                    followUserButton: { position: "relative", height: e.spaces.space16, top: `-${e.spaces.space8}`, start: `-${e.spaces.space16}`, marginEnd: `-${e.spaces.space16}` },
                    tweetTextContainer: { pointerEvents: "all" },
                    iconStyleLarge: { color: e.colors.primary, height: e.spaces.space24, width: e.spaces.space24 },
                    userNameContainer: { justifyContent: "center", flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space8 },
                    tweetText: { color: e.colors.white },
                    playPauseButton: { height: e.spaces.space20, pointerEvents: "all", cursor: "pointer", width: e.spaces.space20, color: e.colors.white },
                    verticalButtonContainer: { alignSelf: "flex-end", gap: e.spaces.space8 },
                    overflowMenuIcon: { marginEnd: e.spaces.space4 },
                    bottomContainer: { position: "relative", bottom: l.default.iPhoneOffsetBottom, backgroundImage: `linear-gradient(${e.colors.transparent} 0%, ${e.colors.translucentBlack30} 15%, ${e.colors.translucentBlack77} 70%)`, marginTop: "auto" },
                    scrubberContainerWithPlayButton: { height: e.spaces.space28, display: "flex", flexDirection: "row", gap: e.spaces.space4, pointerEvents: "all", alignItems: "center" },
                    scrubberFlexContainer: { flexGrow: 1, pointerEvents: "all" },
                    updatedScrubberContainer: { height: e.spaces.space28, marginTop: e.spaces.space8, pointerEvents: "all" },
                    button: { height: e.spaces.space36, width: e.spaces.space36, pointerEvents: "all" },
                    navigationButtonTop: { marginTop: e.spaces.space12 },
                    navigationButtonContainer: { width: "100%", display: "flex", alignItems: "center", justifyContent: "center" },
                    topNavigationButtonContainer: { position: "absolute", top: 0 },
                    navigationButtonBottom: { marginBottom: e.spaces.space12 },
                })),
                Pe = { withDarkBackground: !1, style: ke.overflowMenuIcon, Icon: () => r.createElement(H.default, { color: "white", size: "large" }) };
            var Ie = n(499627),
                Ze = n(312771);
            const Ae = "immersiveViewer",
                Me = "rweb.immersiveViewer",
                Be = Object.freeze({ SETTINGS_LOADED: "rweb/immersiveViewer/SETTINGS_LOADED" }),
                De = Object.freeze({ fetchStatus: Ze.ZP.NONE, mobileViewCount: 0 }),
                Le = (e) => e[Ae].mobileViewCount,
                Oe =
                    () =>
                    (e, t, { userPersistence: n }) =>
                        n.get(Me).then((e) => {
                            const t = e?.mobileViewCount || 0;
                            n.set(Me, { mobileViewCount: (t || 0) + 1 });
                        });
            Ie.Z.register(
                { [Ae]: (e = De, t) => (t && t.type === Be.SETTINGS_LOADED ? { ...e, fetchStatus: Ze.ZP.LOADED, ...t.payload } : e) },
                () =>
                    (e, t, { userPersistence: n }) =>
                        n.get(Me).then((t) => {
                            e({ payload: { mobileViewCount: t?.mobileViewCount || 0 }, type: Be.SETTINGS_LOADED });
                        }),
            );
            var Fe = n(80890),
                Ve = n(390387),
                Ne = n(38562),
                He = n(836255),
                $e = n(919022);
            const ze = (e, t) => t.entry.content.id,
                Ue = (e, t) => (0, Fe.MW)(e, t.entry.content.id),
                Ge = (e, t) => t.entry.content.promotedMetadata,
                je = (e, t) => {
                    const n = t.entry.content.promotedMetadata;
                    return n ? $e.ZP.select(e, n.advertiserId) : null;
                },
                Re = (e, { urtAdvertiser: t, urtPromotedContent: n }) => {
                    if (e && n) {
                        const a = e.promoted_content;
                        return { ...e, promoted_content: { adMetadataContainer: n.adMetadataContainer, disclosure_type: n.disclosureType, experiment_values: n.experimentValues, impression_id: n.impressionId, advertiser: t ? { id_str: t.id_str } : void 0, advertiser_name: t?.name || void 0, click_tracking_info: n.clickTrackingInfo, ...a } };
                    }
                    return e;
                },
                We = (0, Q.Z)()
                    .propsFromState(() => ({ tweet: He.Z.createHydratedTweetSelector(ze), isActiveCreator: Ve.WM, isNsfwUser: Ne.EF, isPinned: Ue, onboardingMobileViewCount: Le, userCountry: Ve.GG, userLanguage: Ve.VT, urtAdvertiser: je, urtPromotedContent: Ge }))
                    .adjustStateProps((e) => {
                        const { tweet: t, urtAdvertiser: n, urtPromotedContent: a, ...o } = e;
                        return { tweet: Re(t, { urtPromotedContent: a, urtAdvertiser: n }), ...o };
                    })
                    .propsFromActions(() => ({ immersiveViewerOnboardingViewed: Oe }))
                    .withAnalytics({ page: "gallery", section: "immersive" }),
                Xe = l.default.supports("height: 100dvh"),
                qe = Object.freeze({ VIDEO: "video", PHOTO: "photo", GIF: "animated_gif", TEXT: "text" }),
                Ye = (e) => {
                    const t = e.extended_entities?.media?.find((e) => e.type === qe.VIDEO);
                    return t && t.type !== qe.PHOTO ? t : null;
                },
                Je = (e) => {
                    const t = e.extended_entities?.media?.find((e) => e.type === qe.PHOTO);
                    return t && t.type === qe.PHOTO ? t : null;
                },
                Ke = (e) =>
                    e
                        ? Ye(e)
                            ? qe.VIDEO
                            : Je(e)
                              ? qe.PHOTO
                              : ((e) => {
                                      const t = e.extended_entities?.media?.find((e) => e.type === qe.GIF);
                                      return t && t.type !== qe.PHOTO ? t : null;
                                  })(e)
                                ? qe.GIF
                                : qe.TEXT
                        : qe.TEXT,
                Qe = ({ analytics: e, immersiveViewerOnboardingViewed: t, isActiveCreator: n, isNsfwUser: a, isPinned: o, onboardingMobileViewCount: i, tweet: l, userCountry: d, userLanguage: m }) => {
                    const h = l ? Ye(l) : null,
                        w = l ? Je(l) : null,
                        [g, b] = r.useState(),
                        [C, y] = r.useState(),
                        [v, f] = r.useState(window.innerHeight);
                    (0, u.q)(() => {
                        window.addEventListener("resize", () => {
                            f(window.innerHeight);
                        });
                    });
                    const E = p.Z.forTweet(l ? l.id_str : ""),
                        T = h
                            ? {
                                  onPlayerState: (e) => {
                                      y(e);
                                  },
                                  onSetPlayerApi: (e) => {
                                      b(e);
                                  },
                                  ...c.Z.extractVideoProps(E, h, void 0),
                              }
                            : void 0,
                        _ = r.useMemo(() => Ke(l), [l]),
                        S = r.useMemo(() => ({ height: Xe ? "100dvh" : `${v}px`, maxHeight: Xe ? "100dvh" : `${v}px`, userSelect: "none" }), [v]);
                    return l ? r.createElement(s.Z, { style: S }, r.createElement(xe, { analytics: e, isActiveCreator: n, isNsfwUser: a, isPinned: o, mediaType: _, photo: w, tweet: l, userCountry: d, userLanguage: m, videoPlayerApi: g, videoPlayerState: C, videoProps: T })) : null;
                },
                et = We(r.memo(Qe)),
                tt = { component: "tweet" },
                nt = (e) => o.Z.getTweetURTEntryItem(e),
                at = (e) => i.iH({ component: et, defaultScribeNamespace: tt, isFocusable: (0, a.Z)(!0), getScribeDataItem: nt }).getHandler();
        },
        542610: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                o = n(674132),
                i = n.n(o),
                r = n(2138),
                s = n(173739),
                l = n(424713);
            const c = i().f06f2e53;
            class u extends a.PureComponent {
                constructor(e) {
                    super(e),
                        (this._handleChange = (e) => {
                            this.setState({ scrubTo: e }), (this.scheduledSeekTargetSec = e), this._throttledPlayerSeek();
                        }),
                        (this._throttledPlayerSeek = (0, r.Z)(
                            () => {
                                const { scheduledSeekTargetSec: e } = this,
                                    { duration: t, playerApi: n } = this.props;
                                if (t) {
                                    const a = e / t;
                                    n.scrubToFraction(a);
                                }
                            },
                            50,
                            { leading: !0, trailing: !0 },
                        )),
                        (this._handleActive = (e) => (!this.state.isScrubbing && e && document.addEventListener("click", this._handleCaptureClick, !0), e || this._throttledPlayerSeek.flush(), this.props.playerApi.setScrubbing(e), this.setState({ isScrubbing: e }))),
                        (this._handleCaptureClick = (e) => {
                            e.preventDefault(), e.stopPropagation(), document.removeEventListener("click", this._handleCaptureClick, !0);
                        }),
                        (this.state = { isScrubbing: !1, scrubTo: 0 });
                }
                render() {
                    const { "aria-label": e, currentTime: t, duration: n } = this.props,
                        o = this.state.isScrubbing || this.props.isSeeking ? this.state.scrubTo : t;
                    if ("number" == typeof o && "number" == typeof n && n > 0) {
                        const t = (0, l.mr)(o),
                            i = (0, l.mr)(n);
                        return a.createElement(s.Z, { accessibilityLabelValueText: c({ currentTime: t, durationTime: i }), "aria-label": e, color: "white", keepLTR: !0, keyboardStep: 5, max: n, min: 0, onActive: this._handleActive, onChange: this._handleChange, step: "any", value: o, withHidingThumb: !0 });
                    }
                    return null;
                }
            }
            const p = u;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.immersiveTweetHandler.e29ee5da.js.map
