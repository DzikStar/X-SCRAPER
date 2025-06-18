"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.immersiveTweetHandler", "icons/IconAtBold-js", "icons/IconBookmarkCloseStroke-js"],
    {
        311554: (e, t, n) => {
            n.r(t), n.d(t, { DEFAULT_SCRIBE_NAMESPACE: () => tt, default: () => ot, getScribeDataItem: () => nt });
            var o = n(459643),
                a = n(942893),
                i = n(351322),
                r = n(202784),
                s = n(325686),
                l = n(392237),
                c = n(284702),
                d = n(187669),
                u = n(123751),
                m = n(807896),
                p = n(175993),
                h = n(688715),
                w = n(341189),
                g = n(966886),
                b = n(124964),
                v = n(966582),
                y = n(815858),
                f = n(154003),
                C = n(542610),
                E = n(155727),
                T = n(530732),
                S = n(366635),
                _ = n(366985),
                k = n(731708),
                x = n(451051),
                Z = n(111677),
                I = n.n(Z),
                P = n(894966),
                M = n(899667),
                A = n(487552),
                B = n(83515),
                D = n(926628),
                L = n(643442),
                O = n(466445),
                V = n(498844),
                F = n(38502),
                $ = n(804579),
                H = n(149170),
                N = n(382880),
                W = n(609927),
                z = n(756632),
                R = n(459284),
                j = n(335636),
                U = n(443781),
                G = n(23134),
                X = n(778955),
                q = n(250165),
                Y = n(738584),
                J = n(907187),
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
                    const { isTweetContentHidden: o, setTweetContentHidden: a } = (0, j.V)(),
                        [i, l] = r.useState(!1);
                    r.useEffect(() => {
                        i &&
                            t &&
                            ((e, t) => {
                                t ? e.play() : e.pause();
                            })(t, e);
                    }, [e, t, i]),
                        r.useEffect(() => {
                            a(!1);
                        }, [a, n]),
                        r.useEffect(() => {
                            const e = setTimeout(() => {
                                a(!0);
                            }, 2e3);
                            return function () {
                                clearTimeout(e);
                            };
                        }, [a, n]),
                        i || l(!0);
                    const c = r.useCallback(() => {
                        t && a(!o);
                    }, [t, a, o]);
                    return r.createElement(s.Z, { onClick: c, style: oe.controlsContainer, testID: `immersive-video-controls-${n}` });
                },
                oe = l.default.create((e) => ({ controlsContainer: { width: "100%", height: "100%", display: "flex", flexDirection: "column" } })),
                ae = r.memo(ne),
                ie = te((e) => {
                    const { featureSwitches: t } = r.useContext(U.rC),
                        { analytics: n, getTwitterAuthedHttpClient: o, onPlayerState: a, source: i } = e,
                        s = r.useMemo(() => o(), [o]),
                        l = i?.variants?.map((e) => ({ src: e.url, type: e.content_type })) || [];
                    let c;
                    if (e.cta) {
                        const { type: t, url: n } = e.cta;
                        t && n && (c = { type: t, url: n });
                    }
                    const d = r.useMemo(() => {
                            const e = { scribeContext: { ...n.contextualScribeNamespace }, enableShortFormCompleteLogging: t.isTrue("responsive_web_video_pcomplete_enabled") },
                                o = {
                                    log: (e) => {
                                        const { category: t, data: o, namespace: a } = e;
                                        a?.action && n.scribe({ ...a, data: { ...o, _category_: t } });
                                    },
                                };
                            return new J.Z(o, { log: () => {} }, s, e);
                        }, [n, t, s]),
                        u = r.useCallback(
                            (e) => {
                                a && a(e);
                            },
                            [a],
                        ),
                        m = (e.durationMs ?? 0) < 1e3 * e.maxLoopingThresholdSec ? 2 : 1;
                    return e && e.source ? r.createElement(Y.Z, { analytics: d, "aria-label": e["aria-label"], aspectRatio: e.aspectRatio, basePlayerClass: K.Y7, configType: "static", contentId: e.source.contentId, contentType: "media_entity", cta: c, durationMs: e.durationMs, enableVideoPlayerCaptionRendering: !0, eventId: e.source.eventId, featureProvider: t, geolocationPrompt: e.geolocationPrompt, httpClient: s, includeBroadcastEventAssociation: e.includeBroadcastEventAssociation, intentToPlayTime: e.intentToPlayTime, language: e.userLanguage, loop: e.loop, maxLoopCount: m, onApiReady: e.onSetPlayerApi, onStateUpdate: u, playbackSessionId: e.tweetId, poster: e.poster?.url, precache: !1, requestedTimecode: e.timecode, setPlayerApi: e.setPlayer, size: "fill", variants: l, videoId: e.source.videoId, viewCount: e.viewCount, vmapUrl: e.source.vmapUrl }, ({ playerApi: t, playerState: n }) => r.createElement(ae, { hasFocus: e.hasFocus, playerApi: t, playerState: n, tweetId: e.tweetId || "" })) : r.createElement(r.Fragment, null);
                });
            var re = n(988428);
            const se = I().ia5e7488,
                le = I().hb568af4,
                ce = I().bb1cbeb6,
                de = I().f45bace4,
                ue = I().e674c120,
                me = I().i86c2940,
                pe = I().a83d4280,
                he = I().g0048656,
                we = I().ec6907ba,
                ge = { threshold: [0.98, 0.01] },
                be = { label: se },
                ve = { label: pe },
                ye = { label: he },
                fe = r.createElement(P.default, null),
                Ce = r.createElement(M.default, null),
                Ee = r.createElement(A.default, null),
                Te = { avatarSize: "xLarge" },
                Se = I().ic1e826e,
                _e = I().b89c5a50;
            function ke(e) {
                const { analytics: t, isActiveCreator: n, isNsfwUser: o, isPinned: a, mediaType: i, photo: l, style: c, tweet: u, userCountry: Z, userLanguage: I, videoPlayerApi: P, videoPlayerState: M, videoProps: A } = e,
                    { featureSwitches: H } = r.useContext(U.rC),
                    Y = r.useContext(p.Z),
                    J = H.isTrue("explore_relaunch_enable_immersive_web_navigation_button"),
                    { adjustFocusBy: K, currentIndex: Q, totalItems: ee } = (0, W.Y)(),
                    { forwardPivotInfo: te, hasClosedCaptioning: ne, isMuted: oe, isTweetContentHidden: ae, onMuteToggle: ke, onTweetUpdate: Ie, setBlockedOrMutedEntry: Pe, setHasClosedCaptioning: Me } = (0, j.V)(),
                    Ae = r.useRef(null),
                    [Be, De] = r.useState(!1),
                    Le = Boolean(P) && Boolean(M),
                    Oe = M && (0, re.Ci)(M);
                (0, d.q)(() => {
                    t.scribe({ element: "tweet", action: "impression" });
                    if ("IntersectionObserver" in window) {
                        const e = new IntersectionObserver((e) => ze(e, De), ge),
                            t = Ae.current;
                        null != t && e.observe(t);
                        return () => {
                            e.disconnect();
                        };
                    }
                });
                const Ve = u.id_str,
                    Fe = u.user.blocking,
                    $e = u.user.muting;
                r.useEffect(() => {
                    Pe(`tweet-${Ve}`, Fe || $e || !1);
                }, [Fe, $e, Ve]),
                    r.useEffect(() => {
                        Le && oe !== M?.isMuted && (oe ? P?.mute() : P?.unmute());
                    }, [oe, Le, P, M?.isMuted]),
                    r.useEffect(() => {
                        Le && Oe?.hasCaptions && ne !== M?.areCaptionsShown && P?.toggleCaptions();
                    }, [Oe?.hasCaptions, ne, Le, P, M?.areCaptionsShown]);
                const He = H.isTrue("explore_relaunch_enable_auto_play"),
                    Ne = r.useMemo(
                        () =>
                            (0, N.Z)(() => {
                                K && K(1);
                            }),
                        [K],
                    );
                r.useEffect(() => {
                    He &&
                        P &&
                        P.subscribe((e) => {
                            e.tracksFinished && void 0 !== Q && void 0 !== ee && Q < ee && Ne();
                        });
                }, [He, P, K, Ne, Q, ee]);
                const We = r.useMemo(() => ({ pathname: (0, h.ju)(`https://x.com/${u.user.screen_name || ""}`), state: u.promoted_content ? { promotedTweetState: u.promoted_content } : void 0 }), [u.promoted_content, u.user.screen_name]),
                    ze = (e, t) => {
                        const n = e[0].intersectionRatio >= 0.98;
                        t(n), n && Ie(u);
                    },
                    Re = r.useCallback(() => {
                        Y && Y.goBack();
                    }, [Y]),
                    je = r.useCallback(() => {
                        t.scribe({ element: "caret", action: "click" });
                    }, [t]),
                    Ue = r.useCallback(
                        (e) => {
                            ke(!oe), e?.stopPropagation();
                        },
                        [ke, oe],
                    ),
                    Ge = r.useCallback(
                        (e, n) => {
                            n === w.Z.HASHTAG ? t.scribe({ element: "hashtag", action: "search" }) : n === w.Z.URL ? t.scribe({ action: "open_link" }) : n === w.Z.TEXT && t.scribe({ element: "tweet", action: "click" });
                        },
                        [t],
                    ),
                    Xe = r.useCallback(
                        (e) => {
                            const { height: t } = e.nativeEvent.layout;
                            P?.setCaptionDefaultOffset({ bottom: t });
                        },
                        [P],
                    ),
                    qe = r.useCallback(
                        (e) => {
                            Me(!ne), e.stopPropagation();
                        },
                        [Me, ne],
                    ),
                    Ye = r.useMemo(() => [xe.container, c || void 0], [c]),
                    Je = r.useMemo(() => [xe.button, xe.navigationButtonBottom], []),
                    Ke = r.useMemo(() => [xe.button, xe.navigationButtonTop], []),
                    Qe = r.useMemo(() => [xe.navigationButtonContainer, xe.topNavigationButtonContainer], []),
                    et = r.useMemo(() => ({ label: oe ? ce : le }), [oe]),
                    tt = r.useMemo(() => (oe ? r.createElement(B.default, { testID: `immersive-tweet-unmute-icon-${Ve}` }) : r.createElement(D.default, { testID: `immersive-tweet-mute-icon-${Ve}` })), [oe, Ve]),
                    nt = r.useMemo(() => !!Q && 0 !== Q, [Q]),
                    ot = r.useMemo(() => !!ee && ee - 1 !== Q, [ee, Q]),
                    at = r.useCallback(
                        (e) => {
                            K && K(e);
                            const n = -1 === e ? "previous_tweet_button" : "next_tweet_button";
                            t.scribe({ element: n, action: "click" });
                        },
                        [K, t],
                    ),
                    it = r.useCallback(() => at(-1), [at]),
                    rt = r.useCallback(() => at(1), [at]),
                    st = r.useMemo(() => (M?.isPlaying ? r.createElement(L.default, { testID: `immersive-tweet-pause-button-${Ve}` }) : r.createElement(O.default, { testID: `immersive-tweet-play-button-${Ve}` })), [M?.isPlaying, Ve]),
                    lt = r.useMemo(() => ({ label: M?.areCaptionsShown ? de : ue }), [M?.areCaptionsShown]),
                    ct = r.useMemo(() => (Oe?.hasCaptions ? (M?.areCaptionsShown ? r.createElement(F.default, { testID: `immersive-tweet-remove-captions-icon-${Ve}` }) : r.createElement($.default, { testID: `immersive-tweet-add-captions-icon-${Ve}` })) : r.createElement(V.default, { testID: `immersive-tweet-no-captions-icon-${Ve}` })), [Oe?.hasCaptions, M?.areCaptionsShown, Ve]),
                    dt = r.useCallback(() => {
                        t.scribe({ element: "avatar", action: "profile_click" });
                    }, [t]),
                    ut = r.useMemo(() => r.createElement(s.Z, { style: xe.screenNameSuffix }, r.createElement(g.Z, { style: xe.relativeTimestamp, timestamp: u.created_at }), r.createElement(b.Z, null), r.createElement(G.C, { isTransparent: !0, promotedContent: u.promoted_content, size: "medium", style: xe.followUserButton, userId: u.user.id_str })), [u.created_at, u.user.id_str, u.promoted_content]),
                    mt = v.Z.isPromoted(u.promoted_content);
                return r.createElement(
                    s.Z,
                    { ref: Ae, style: Ye },
                    r.createElement(
                        s.Z,
                        { style: xe.immersiveBlurContainer },
                        r.createElement(
                            s.Z,
                            { style: xe.mediaContentContainer },
                            (({ featureSwitches: e, hasFocus: t, mediaType: n, photo: o, tweetId: a, userLanguage: i, videoProps: s }) => {
                                const l = { maxLoopingThresholdSec: e.getNumberValue("explore_relaunch_max_video_loop_threshold_sec", 5) };
                                switch (n) {
                                    case "video":
                                    case "animated_gif":
                                        return s ? r.createElement(ie, (0, m.Z)({}, s, l, { hasFocus: t, loop: !0, tweetId: a, userLanguage: i })) : null;
                                    default:
                                        return r.createElement(r.Fragment, null);
                                }
                            })({ mediaType: i, videoProps: A, hasFocus: Be, photo: l, tweetId: Ve, userLanguage: I, featureSwitches: H }),
                        ),
                        r.createElement(
                            s.Z,
                            { style: xe.tweetForegroundContainer },
                            r.createElement(s.Z, { style: xe.tweetTopContent }, J && r.createElement(s.Z, { style: Qe }, r.createElement(y.Z, { duration: "longer", show: !ae, type: "fade" }, r.createElement(f.ZP, { "aria-label": he, disabled: !nt, hoverLabel: ye, icon: Ce, onClick: it, size: "xSmall", style: Ke, testID: `immersive-tweet-previous-tweet-button-${Ve}`, type: "onMediaDominantColorFilled" }))), r.createElement(f.ZP, { "aria-label": se, hoverLabel: be, icon: fe, onClick: Re, style: xe.backButton, testID: `immersive-tweet-back-button-${Ve}`, type: "onMediaDominantColorFilled" })),
                            r.createElement(
                                y.Z,
                                { duration: "longer", show: !ae, type: "fade" },
                                r.createElement(
                                    s.Z,
                                    { style: xe.bottomContainer, testID: `immersive-tweet-ui-content-container-${Ve}` },
                                    r.createElement(
                                        s.Z,
                                        { onLayout: Xe, style: xe.tweetContentContainer },
                                        Le && r.createElement(s.Z, { style: xe.verticalButtonContainer }, r.createElement(f.ZP, { "aria-label": oe ? ce : le, hoverLabel: et, icon: tt, onClick: Ue, size: "xSmall", style: xe.button, testID: `immersive-tweet-mute-button-${Ve}`, type: "onMediaDominantColorFilled" }), r.createElement(f.ZP, { "aria-label": M?.areCaptionsShown ? de : ue, disabled: !Oe?.hasCaptions, hoverLabel: lt, icon: ct, onClick: qe, size: "xSmall", style: xe.button, testID: `immersive-tweet-closed-captioning-button-${Ve}`, type: "onMediaDominantColorFilled" })),
                                        !!P && r.createElement(s.Z, { style: xe.scrubberContainerWithPlayButton }, r.createElement(f.ZP, { "aria-label": M?.isPlaying ? _e : Se, icon: st, onClick: M?.isPlaying ? P?.pause : P?.play, size: "medium", style: xe.playPauseButton, type: "onMediaText" }), r.createElement(s.Z, { style: xe.scrubberFlexContainer }, r.createElement(C.Z, { "aria-label": me, currentTime: Oe ? (0, re.Ot)(Oe) || 0 : void 0, duration: Oe ? (0, re.MU)(Oe) : void 0, isScrubbing: !!M?.isScrubbing && M.isScrubbing, isSeeking: !!M?.isSeeking && M.isSeeking, playerApi: P }))),
                                        r.createElement(s.Z, { style: xe.userInfoContainer }, r.createElement(s.Z, null, r.createElement(E.Z.Provider, { value: Te }, r.createElement(z.Z, { onClick: dt, promotedContent: u.promoted_content, screenName: u.user.screen_name, uri: u.user.profile_image_url_https, userId: u.user.id_str, withLink: !0 }))), r.createElement(s.Z, { style: xe.userNameContainer }, r.createElement(T.Z, { link: We }, r.createElement(S.Z, { color: "white", isBlueVerified: u.user.is_blue_verified, isVerified: u.user.verified, name: u.user.name, screenName: u.user.screen_name, screenNameSize: "body", screenNameSuffix: ut, weight: "bold", withName: !0, withScreenName: !0, withStackedLayout: !0 }))), r.createElement(s.Z, { style: xe.promotedLabel }, mt ? r.createElement(_.j, { tweet: u }, ([e]) => (e ? r.createElement(k.ZP, { "aria-label": e.promotedLabel, color: "gray700", testID: "immersive-tweet-ad-label" }, we) : null)) : null), r.createElement(s.Z, { style: xe.tweetActionMenuContainer }, r.createElement(q.g, { downloadLink: A?.source.downloadLink }, r.createElement(R.Z, { isActiveCreator: n || !1, isNsfwUser: o || !1, isPinned: a, menuControlProps: Ze, onMenuClick: je, promotedContent: u.promoted_content, tweet: u, userCountry: Z, userLanguage: I, withMuteConversation: !1 })))),
                                        r.createElement(s.Z, { style: xe.tweetTextContainer }, r.createElement(x.Z, { displayTextRange: u.display_text_range, entities: u.entities, lang: u.lang, link: u.permalink, linkify: !0, numberOfLines: 5, onEntityClick: Ge, style: xe.tweetText, testID: `immersive-tweet-text-${Ve}`, text: u.text })),
                                    ),
                                    r.createElement(s.Z, { style: xe.tweetActionsBarContainer }, r.createElement(s.Z, { style: xe.primaryTweetActionsContainer }, r.createElement(X.Z, { activeColor: "white", allowBookmarkInActionsBar: !0, color: "white", forwardPivotInfo: u.softIntervention || te, style: xe.actionsBar, tweet: u, withAnalyticsAction: !0, withCount: !0 }))),
                                    J && r.createElement(s.Z, { style: xe.navigationButtonContainer }, r.createElement(f.ZP, { "aria-label": pe, disabled: !ot, hoverLabel: ve, icon: Ee, onClick: rt, size: "xSmall", style: Je, testID: `immersive-tweet-next-tweet-button-${Ve}`, type: "onMediaDominantColorFilled" })),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const xe = l.default.create((e) => ({
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
                Ze = { withDarkBackground: !1, style: xe.overflowMenuIcon, Icon: () => r.createElement(H.default, { color: "white", size: "large" }) };
            var Ie = n(499627),
                Pe = n(312771);
            const Me = "immersiveViewer",
                Ae = "rweb.immersiveViewer",
                Be = Object.freeze({ SETTINGS_LOADED: "rweb/immersiveViewer/SETTINGS_LOADED" }),
                De = Object.freeze({ fetchStatus: Pe.ZP.NONE, mobileViewCount: 0 }),
                Le = (e) => e[Me].mobileViewCount,
                Oe =
                    () =>
                    (e, t, { userPersistence: n }) =>
                        n.get(Ae).then((e) => {
                            const t = e?.mobileViewCount || 0;
                            n.set(Ae, { mobileViewCount: (t || 0) + 1 });
                        });
            Ie.Z.register(
                { [Me]: (e = De, t) => (t && t.type === Be.SETTINGS_LOADED ? { ...e, fetchStatus: Pe.ZP.LOADED, ...t.payload } : e) },
                () =>
                    (e, t, { userPersistence: n }) =>
                        n.get(Ae).then((t) => {
                            e({ payload: { mobileViewCount: t?.mobileViewCount || 0 }, type: Be.SETTINGS_LOADED });
                        }),
            );
            var Ve = n(80890),
                Fe = n(390387),
                $e = n(38562),
                He = n(836255),
                Ne = n(919022);
            const We = (e, t) => t.entry.content.id,
                ze = (e, t) => (0, Ve.MW)(e, t.entry.content.id),
                Re = (e, t) => t.entry.content.promotedMetadata,
                je = (e, t) => {
                    const n = t.entry.content.promotedMetadata;
                    return n ? Ne.ZP.select(e, n.advertiserId) : null;
                },
                Ue = (e, { urtAdvertiser: t, urtPromotedContent: n }) => {
                    if (e && n) {
                        const o = e.promoted_content;
                        return { ...e, promoted_content: { adMetadataContainer: n.adMetadataContainer, disclosure_type: n.disclosureType, experiment_values: n.experimentValues, impression_id: n.impressionId, advertiser: t ? { id_str: t.id_str } : void 0, advertiser_name: t?.name || void 0, click_tracking_info: n.clickTrackingInfo, ...o } };
                    }
                    return e;
                },
                Ge = (0, Q.Z)()
                    .propsFromState(() => ({ tweet: He.Z.createHydratedTweetSelector(We), isActiveCreator: Fe.WM, isNsfwUser: $e.EF, isPinned: ze, onboardingMobileViewCount: Le, userCountry: Fe.GG, userLanguage: Fe.VT, urtAdvertiser: je, urtPromotedContent: Re }))
                    .adjustStateProps((e) => {
                        const { tweet: t, urtAdvertiser: n, urtPromotedContent: o, ...a } = e;
                        return { tweet: Ue(t, { urtPromotedContent: o, urtAdvertiser: n }), ...a };
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
                Qe = ({ analytics: e, immersiveViewerOnboardingViewed: t, isActiveCreator: n, isNsfwUser: o, isPinned: a, onboardingMobileViewCount: i, tweet: l, userCountry: m, userLanguage: p }) => {
                    const h = l ? Ye(l) : null,
                        w = l ? Je(l) : null,
                        [g, b] = r.useState(),
                        [v, y] = r.useState(),
                        [f, C] = r.useState(window.innerHeight);
                    (0, d.q)(() => {
                        window.addEventListener("resize", () => {
                            C(window.innerHeight);
                        });
                    });
                    const E = u.Z.forTweet(l ? l.id_str : ""),
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
                        S = r.useMemo(() => Ke(l), [l]),
                        _ = r.useMemo(() => ({ height: Xe ? "100dvh" : `${f}px`, maxHeight: Xe ? "100dvh" : `${f}px`, userSelect: "none" }), [f]);
                    return l ? r.createElement(s.Z, { style: _ }, r.createElement(ke, { analytics: e, isActiveCreator: n, isNsfwUser: o, isPinned: a, mediaType: S, photo: w, tweet: l, userCountry: m, userLanguage: p, videoPlayerApi: g, videoPlayerState: v, videoProps: T })) : null;
                },
                et = Ge(r.memo(Qe)),
                tt = { component: "tweet" },
                nt = (e) => a.Z.getTweetURTEntryItem(e),
                ot = (e) => i.iH({ component: et, defaultScribeNamespace: tt, isFocusable: (0, o.Z)(!0), getScribeDataItem: nt }).getHandler();
        },
        542610: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                a = n(111677),
                i = n.n(a),
                r = n(2138),
                s = n(173739),
                l = n(424713);
            const c = i().f06f2e53;
            class d extends o.PureComponent {
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
                                    const o = e / t;
                                    n.scrubToFraction(o);
                                }
                            },
                            50,
                            { leading: !0, trailing: !0 },
                        )),
                        (this._handleActive = (e) => (!this.state.isScrubbing && e && document.addEventListener("click", this._handleCaptureClick, !0), e ? this.props.playerApi.setScrubbing(e) : this._throttledPlayerSeek.flush(), this.setState({ isScrubbing: e }))),
                        (this._handleCaptureClick = (e) => {
                            e.preventDefault(), e.stopPropagation(), document.removeEventListener("click", this._handleCaptureClick, !0);
                        }),
                        (this.state = { isScrubbing: !1, scrubTo: 0 });
                }
                render() {
                    const { "aria-label": e, currentTime: t, duration: n } = this.props,
                        a = this.state.isScrubbing || this.props.isSeeking ? this.state.scrubTo : t;
                    if ("number" == typeof a && "number" == typeof n && n > 0) {
                        const t = (0, l.mr)(a),
                            i = (0, l.mr)(n);
                        return o.createElement(s.Z, { accessibilityLabelValueText: c({ currentTime: t, durationTime: i }), "aria-label": e, color: "white", keepLTR: !0, keyboardStep: 5, max: n, min: 0, onActive: this._handleActive, onChange: this._handleChange, step: "any", value: a, withHidingThumb: !0 });
                    }
                    return null;
                }
            }
            const u = d;
        },
        251478: (e, t, n) => {
            n.d(t, { $2: () => o, CX: () => l, EB: () => s, Eq: () => a, ak: () => r, wF: () => i });
            const o = { VISIT: "url", WATCH: "watch" },
                a = { watch_now: "watch_now", visit_site: "visit_site", shop: "shop", see_more: "see_more", go_to: "go_to" },
                i = { MEDIA: "media_entity", GIF: "gif", VMAP: "vmap", BROADCAST: "broadcast" },
                r = { AD: "ad", CONTENT: "content" },
                s = { BROADCAST: "broadcast", DM: "dm", TWEET: "tweet" },
                l = 720;
        },
        424713: (e, t, n) => {
            n.d(t, { Ci: () => P, Fv: () => B, MU: () => S, Ot: () => C, Ov: () => k, SY: () => T, XE: () => v, _5: () => A, aZ: () => Z, c9: () => y, mr: () => D, sI: () => I, us: () => x, xB: () => M, zm: () => _ });
            n(136728);
            var o = n(111677),
                a = n.n(o),
                i = n(837880),
                r = n(891198),
                s = n(251478);
            const l = a().i3b7a017,
                c = a().ie5d110f,
                d = a().df5f11b3,
                u = a().a7cd5cf4,
                m = a().b6eb8f6a,
                p = a().dcc2b9b3,
                h = a().hf4ffd4d,
                w = a().f6e90cd7,
                g = a().e7d191ed,
                b = a().daa73df1,
                v = (e) => {
                    const { viewerCount: t } = e;
                    return t || 0 === t ? b({ viewerCount: ((n = t), "number" == typeof n ? (0, r.wl)(n) : n) }) : null;
                    var n;
                },
                y = (e) => {
                    if (!e) return "";
                    return (({ durationSeconds: e, isBroadcast: t, isLive: n, timecode: o, videoTrack: a } = {}) => {
                        const i = [],
                            r = t || n ? m : u,
                            s = n ? h : p;
                        if ((i.push(s({ locVideoType: r })), "number" == typeof e && e && !n)) {
                            const { hoursWord: t, minutesWord: n, secondsWord: o } = f(e);
                            i.push(w({ hoursWord: t, minutesWord: n, secondsWord: o }));
                        }
                        if ("number" == typeof o && o) {
                            const { hoursWord: e, minutesWord: t, secondsWord: n } = f(o);
                            i.push(g({ hoursWord: e, minutesWord: t, secondsWord: n }));
                        }
                        const l = a && v(a);
                        return l && i.push(l), i.join(". ");
                    })({ isLive: e.isLive, isBroadcast: e.contentType === s.wF.BROADCAST, durationSeconds: x(e), timecode: A(e), videoTrack: e });
                },
                f = (e) => {
                    const { hours: t, minutes: n, seconds: o } = L(e),
                        a = { hoursWord: "", minutesWord: "", secondsWord: "" };
                    return 0 === o && 0 === n && 0 === t && 0 === n ? ((a.secondsWord = l(0)), a) : ((a.hoursWord = t > 0 ? d(t) : ""), (a.minutesWord = n > 0 ? c(n) : ""), (a.secondsWord = o > 0 ? l(o) : ""), a);
                },
                C = (e) => (e ? (e.currentTimeMs || 0) / 1e3 : void 0),
                E = (e) => e.endTimeS - e.startTimeS,
                T = (e) => {
                    const t = e?.controls?.playbackTimeRange,
                        n = P(e),
                        o = C(n);
                    if (void 0 === o) return 0;
                    if (!t) return o;
                    const a = o - t.startTimeS;
                    return (0, i.Z)(a, 0, E(t));
                },
                S = (e) => (e ? (e.durationMs || 0) / 1e3 : void 0),
                _ = (e) => {
                    const t = e?.controls?.playbackTimeRange,
                        n = P(e),
                        o = S(n);
                    return o ? (t ? E(t) : o) : 0;
                },
                k = (e) => {
                    const t = C(e);
                    return t && Math.round(t);
                },
                x = (e) => {
                    const t = S(e);
                    return t && Math.round(t);
                },
                Z = (e, t) => {
                    const n = S(P(e));
                    if (!n) return;
                    const o = ((e?.controls?.playbackTimeRange?.startTimeS ?? 0) + t) / n;
                    return (0, i.Z)(o, 0, 1);
                },
                I = (e) => e.tracks.find((e) => 0 === e.id),
                P = (e) => e.tracks.find((t) => t.id === e.currentTrackId),
                M = (e) => (e.controls && e.controls.isPosterShown ? I(e) : P(e)),
                A = (e) => {
                    if (e) {
                        const t = e.requestedTimecode;
                        return t && t > 0 ? t : e.replayEditedStartTime;
                    }
                },
                B = (e) => D(Math.round(e / 1e3)),
                D = (e) => {
                    const { hours: t, minutes: n, seconds: o } = L(e),
                        a = o < 10 ? `0${o}` : o,
                        i = n < 10 && t ? `0${n}` : n;
                    return t ? `${t}:${i}:${a}` : `${i}:${a}`;
                },
                L = (e) => ({ hours: Math.floor(e / 3600), minutes: Math.floor((e % 3600) / 60), seconds: Math.floor(e % 60) });
        },
        388941: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                a = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 4.25c-4.28 0-7.75 3.47-7.75 7.75s3.47 7.75 7.75 7.75c1.499 0 2.894-.424 4.078-1.158l1.318 2.125c-1.568.972-3.418 1.534-5.396 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.75 12 1.75 22.25 6.339 22.25 12c0 .534-.032 1.061-.08 1.549-.223 2.285-2.31 3.65-4.378 3.471-1.128-.098-2.114-.621-2.817-1.396-1.008 1.136-2.467 1.802-4.077 1.576-2.748-.386-4.354-3.149-3.973-5.86s2.686-4.924 5.434-4.538c.793.111 1.491.421 2.074.87l.038-.32 2.482.298-.584 4.861c-.122 1.015.621 1.93 1.64 2.019.927.081 1.605-.515 1.674-1.223.042-.426.068-.869.068-1.306 0-4.28-3.47-7.75-7.75-7.75H12zm.01 5.026c-1.08-.152-2.377.746-2.611 2.41s.765 2.885 1.845 3.036c1.08.152 2.377-.746 2.611-2.41.234-1.664-.765-2.884-1.845-3.036z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        738398: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                a = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                a = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        155353: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                a = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        465233: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(716406);
            function a(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(a) : (0, o.Z)(e, (e) => a(e));
            }
        },
        614425: (e, t, n) => {
            n.d(t, { Y7: () => o });
            const o = n(795897).default;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.immersiveTweetHandler.e304924a.js.map
