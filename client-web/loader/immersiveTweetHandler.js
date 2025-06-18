"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.immersiveTweetHandler", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
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
                g = n(341189),
                w = n(966886),
                v = n(124964),
                b = n(966582),
                y = n(815858),
                f = n(154003),
                C = n(542610),
                E = n(155727),
                T = n(530732),
                S = n(366635),
                _ = n(366985),
                Z = n(731708),
                k = n(451051),
                x = n(111677),
                I = n.n(x),
                P = n(894966),
                M = n(899667),
                A = n(487552),
                B = n(83515),
                D = n(926628),
                L = n(643442),
                O = n(466445),
                F = n(498844),
                V = n(38502),
                $ = n(804579),
                H = n(149170),
                z = n(382880),
                N = n(609927),
                W = n(756632),
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
                ge = I().ec6907ba,
                we = { threshold: [0.98, 0.01] },
                ve = { label: se },
                be = { label: pe },
                ye = { label: he },
                fe = r.createElement(P.default, null),
                Ce = r.createElement(M.default, null),
                Ee = r.createElement(A.default, null),
                Te = { avatarSize: "xLarge" },
                Se = I().ic1e826e,
                _e = I().b89c5a50;
            function Ze(e) {
                const { analytics: t, isActiveCreator: n, isNsfwUser: o, isPinned: a, mediaType: i, photo: l, style: c, tweet: u, userCountry: x, userLanguage: I, videoPlayerApi: P, videoPlayerState: M, videoProps: A } = e,
                    { featureSwitches: H } = r.useContext(U.rC),
                    Y = r.useContext(p.Z),
                    J = H.isTrue("explore_relaunch_enable_immersive_web_navigation_button"),
                    { adjustFocusBy: K, currentIndex: Q, totalItems: ee } = (0, N.Y)(),
                    { forwardPivotInfo: te, hasClosedCaptioning: ne, isMuted: oe, isTweetContentHidden: ae, onMuteToggle: Ze, onTweetUpdate: Ie, setBlockedOrMutedEntry: Pe, setHasClosedCaptioning: Me } = (0, j.V)(),
                    Ae = r.useRef(null),
                    [Be, De] = r.useState(!1),
                    Le = Boolean(P) && Boolean(M),
                    Oe = M && (0, re.Ci)(M);
                (0, d.q)(() => {
                    t.scribe({ element: "tweet", action: "impression" });
                    if ("IntersectionObserver" in window) {
                        const e = new IntersectionObserver((e) => We(e, De), we),
                            t = Ae.current;
                        null != t && e.observe(t);
                        return () => {
                            e.disconnect();
                        };
                    }
                });
                const Fe = u.id_str,
                    Ve = u.user.blocking,
                    $e = u.user.muting;
                r.useEffect(() => {
                    Pe(`tweet-${Fe}`, Ve || $e || !1);
                }, [Ve, $e, Fe]),
                    r.useEffect(() => {
                        Le && oe !== M?.isMuted && (oe ? P?.mute() : P?.unmute());
                    }, [oe, Le, P, M?.isMuted]),
                    r.useEffect(() => {
                        Le && Oe?.hasCaptions && ne !== M?.areCaptionsShown && P?.toggleCaptions();
                    }, [Oe?.hasCaptions, ne, Le, P, M?.areCaptionsShown]);
                const He = H.isTrue("explore_relaunch_enable_auto_play"),
                    ze = r.useMemo(
                        () =>
                            (0, z.Z)(() => {
                                K && K(1);
                            }),
                        [K],
                    );
                r.useEffect(() => {
                    He &&
                        P &&
                        P.subscribe((e) => {
                            e.tracksFinished && void 0 !== Q && void 0 !== ee && Q < ee && ze();
                        });
                }, [He, P, K, ze, Q, ee]);
                const Ne = r.useMemo(() => ({ pathname: (0, h.ju)(`https://x.com/${u.user.screen_name || ""}`), state: u.promoted_content ? { promotedTweetState: u.promoted_content } : void 0 }), [u.promoted_content, u.user.screen_name]),
                    We = (e, t) => {
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
                            Ze(!oe), e?.stopPropagation();
                        },
                        [Ze, oe],
                    ),
                    Ge = r.useCallback(
                        (e, n) => {
                            n === g.Z.HASHTAG ? t.scribe({ element: "hashtag", action: "search" }) : n === g.Z.URL ? t.scribe({ action: "open_link" }) : n === g.Z.TEXT && t.scribe({ element: "tweet", action: "click" });
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
                    Ye = r.useMemo(() => [ke.container, c || void 0], [c]),
                    Je = r.useMemo(() => [ke.button, ke.navigationButtonBottom], []),
                    Ke = r.useMemo(() => [ke.button, ke.navigationButtonTop], []),
                    Qe = r.useMemo(() => [ke.navigationButtonContainer, ke.topNavigationButtonContainer], []),
                    et = r.useMemo(() => ({ label: oe ? ce : le }), [oe]),
                    tt = r.useMemo(() => (oe ? r.createElement(B.default, { testID: `immersive-tweet-unmute-icon-${Fe}` }) : r.createElement(D.default, { testID: `immersive-tweet-mute-icon-${Fe}` })), [oe, Fe]),
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
                    st = r.useMemo(() => (M?.isPlaying ? r.createElement(L.default, { testID: `immersive-tweet-pause-button-${Fe}` }) : r.createElement(O.default, { testID: `immersive-tweet-play-button-${Fe}` })), [M?.isPlaying, Fe]),
                    lt = r.useMemo(() => ({ label: M?.areCaptionsShown ? de : ue }), [M?.areCaptionsShown]),
                    ct = r.useMemo(() => (Oe?.hasCaptions ? (M?.areCaptionsShown ? r.createElement(V.default, { testID: `immersive-tweet-remove-captions-icon-${Fe}` }) : r.createElement($.default, { testID: `immersive-tweet-add-captions-icon-${Fe}` })) : r.createElement(F.default, { testID: `immersive-tweet-no-captions-icon-${Fe}` })), [Oe?.hasCaptions, M?.areCaptionsShown, Fe]),
                    dt = r.useCallback(() => {
                        t.scribe({ element: "avatar", action: "profile_click" });
                    }, [t]),
                    ut = r.useMemo(() => r.createElement(s.Z, { style: ke.screenNameSuffix }, r.createElement(w.Z, { style: ke.relativeTimestamp, timestamp: u.created_at }), r.createElement(v.Z, null), r.createElement(G.C, { isTransparent: !0, promotedContent: u.promoted_content, size: "medium", style: ke.followUserButton, userId: u.user.id_str })), [u.created_at, u.user.id_str, u.promoted_content]),
                    mt = b.Z.isPromoted(u.promoted_content);
                return r.createElement(
                    s.Z,
                    { ref: Ae, style: Ye },
                    r.createElement(
                        s.Z,
                        { style: ke.immersiveBlurContainer },
                        r.createElement(
                            s.Z,
                            { style: ke.mediaContentContainer },
                            (({ featureSwitches: e, hasFocus: t, mediaType: n, photo: o, tweetId: a, userLanguage: i, videoProps: s }) => {
                                const l = { maxLoopingThresholdSec: e.getNumberValue("explore_relaunch_max_video_loop_threshold_sec", 5) };
                                switch (n) {
                                    case "video":
                                    case "animated_gif":
                                        return s ? r.createElement(ie, (0, m.Z)({}, s, l, { hasFocus: t, loop: !0, tweetId: a, userLanguage: i })) : null;
                                    default:
                                        return r.createElement(r.Fragment, null);
                                }
                            })({ mediaType: i, videoProps: A, hasFocus: Be, photo: l, tweetId: Fe, userLanguage: I, featureSwitches: H }),
                        ),
                        r.createElement(
                            s.Z,
                            { style: ke.tweetForegroundContainer },
                            r.createElement(s.Z, { style: ke.tweetTopContent }, J && r.createElement(s.Z, { style: Qe }, r.createElement(y.Z, { duration: "longer", show: !ae, type: "fade" }, r.createElement(f.ZP, { "aria-label": he, disabled: !nt, hoverLabel: ye, icon: Ce, onClick: it, size: "xSmall", style: Ke, testID: `immersive-tweet-previous-tweet-button-${Fe}`, type: "onMediaDominantColorFilled" }))), r.createElement(f.ZP, { "aria-label": se, hoverLabel: ve, icon: fe, onClick: Re, style: ke.backButton, testID: `immersive-tweet-back-button-${Fe}`, type: "onMediaDominantColorFilled" })),
                            r.createElement(
                                y.Z,
                                { duration: "longer", show: !ae, type: "fade" },
                                r.createElement(
                                    s.Z,
                                    { style: ke.bottomContainer, testID: `immersive-tweet-ui-content-container-${Fe}` },
                                    r.createElement(
                                        s.Z,
                                        { onLayout: Xe, style: ke.tweetContentContainer },
                                        Le && r.createElement(s.Z, { style: ke.verticalButtonContainer }, r.createElement(f.ZP, { "aria-label": oe ? ce : le, hoverLabel: et, icon: tt, onClick: Ue, size: "xSmall", style: ke.button, testID: `immersive-tweet-mute-button-${Fe}`, type: "onMediaDominantColorFilled" }), r.createElement(f.ZP, { "aria-label": M?.areCaptionsShown ? de : ue, disabled: !Oe?.hasCaptions, hoverLabel: lt, icon: ct, onClick: qe, size: "xSmall", style: ke.button, testID: `immersive-tweet-closed-captioning-button-${Fe}`, type: "onMediaDominantColorFilled" })),
                                        !!P && r.createElement(s.Z, { style: ke.scrubberContainerWithPlayButton }, r.createElement(f.ZP, { "aria-label": M?.isPlaying ? _e : Se, icon: st, onClick: M?.isPlaying ? P?.pause : P?.play, size: "medium", style: ke.playPauseButton, type: "onMediaText" }), r.createElement(s.Z, { style: ke.scrubberFlexContainer }, r.createElement(C.Z, { "aria-label": me, currentTime: Oe ? (0, re.Ot)(Oe) || 0 : void 0, duration: Oe ? (0, re.MU)(Oe) : void 0, isScrubbing: !!M?.isScrubbing && M.isScrubbing, isSeeking: !!M?.isSeeking && M.isSeeking, playerApi: P }))),
                                        r.createElement(s.Z, { style: ke.userInfoContainer }, r.createElement(s.Z, null, r.createElement(E.Z.Provider, { value: Te }, r.createElement(W.Z, { onClick: dt, promotedContent: u.promoted_content, screenName: u.user.screen_name, uri: u.user.profile_image_url_https, userId: u.user.id_str, withLink: !0 }))), r.createElement(s.Z, { style: ke.userNameContainer }, r.createElement(T.Z, { link: Ne }, r.createElement(S.Z, { color: "white", isBlueVerified: u.user.is_blue_verified, isVerified: u.user.verified, name: u.user.name, screenName: u.user.screen_name, screenNameSize: "body", screenNameSuffix: ut, weight: "bold", withName: !0, withScreenName: !0, withStackedLayout: !0 }))), r.createElement(s.Z, { style: ke.promotedLabel }, mt ? r.createElement(_.j, { tweet: u }, ([e]) => (e ? r.createElement(Z.ZP, { "aria-label": e.promotedLabel, color: "gray700", testID: "immersive-tweet-ad-label" }, ge) : null)) : null), r.createElement(s.Z, { style: ke.tweetActionMenuContainer }, r.createElement(q.g, { downloadLink: A?.source.downloadLink }, r.createElement(R.Z, { isActiveCreator: n || !1, isNsfwUser: o || !1, isPinned: a, menuControlProps: xe, onMenuClick: je, promotedContent: u.promoted_content, tweet: u, userCountry: x, userLanguage: I, withMuteConversation: !1 })))),
                                        r.createElement(s.Z, { style: ke.tweetTextContainer }, r.createElement(k.Z, { displayTextRange: u.display_text_range, entities: u.entities, lang: u.lang, link: u.permalink, linkify: !0, numberOfLines: 5, onEntityClick: Ge, style: ke.tweetText, testID: `immersive-tweet-text-${Fe}`, text: u.text })),
                                    ),
                                    r.createElement(s.Z, { style: ke.tweetActionsBarContainer }, r.createElement(s.Z, { style: ke.primaryTweetActionsContainer }, r.createElement(X.Z, { activeColor: "white", allowBookmarkInActionsBar: !0, color: "white", forwardPivotInfo: u.softIntervention || te, style: ke.actionsBar, tweet: u, withAnalyticsAction: !0, withCount: !0 }))),
                                    J && r.createElement(s.Z, { style: ke.navigationButtonContainer }, r.createElement(f.ZP, { "aria-label": pe, disabled: !ot, hoverLabel: be, icon: Ee, onClick: rt, size: "xSmall", style: Je, testID: `immersive-tweet-next-tweet-button-${Fe}`, type: "onMediaDominantColorFilled" })),
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
                xe = { withDarkBackground: !1, style: ke.overflowMenuIcon, Icon: () => r.createElement(H.default, { color: "white", size: "large" }) };
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
            var Fe = n(80890),
                Ve = n(390387),
                $e = n(38562),
                He = n(836255),
                ze = n(919022);
            const Ne = (e, t) => t.entry.content.id,
                We = (e, t) => (0, Fe.MW)(e, t.entry.content.id),
                Re = (e, t) => t.entry.content.promotedMetadata,
                je = (e, t) => {
                    const n = t.entry.content.promotedMetadata;
                    return n ? ze.ZP.select(e, n.advertiserId) : null;
                },
                Ue = (e, { urtAdvertiser: t, urtPromotedContent: n }) => {
                    if (e && n) {
                        const o = e.promoted_content;
                        return { ...e, promoted_content: { adMetadataContainer: n.adMetadataContainer, disclosure_type: n.disclosureType, experiment_values: n.experimentValues, impression_id: n.impressionId, advertiser: t ? { id_str: t.id_str } : void 0, advertiser_name: t?.name || void 0, click_tracking_info: n.clickTrackingInfo, ...o } };
                    }
                    return e;
                },
                Ge = (0, Q.Z)()
                    .propsFromState(() => ({ tweet: He.Z.createHydratedTweetSelector(Ne), isActiveCreator: Ve.WM, isNsfwUser: $e.EF, isPinned: We, onboardingMobileViewCount: Le, userCountry: Ve.GG, userLanguage: Ve.VT, urtAdvertiser: je, urtPromotedContent: Re }))
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
                        g = l ? Je(l) : null,
                        [w, v] = r.useState(),
                        [b, y] = r.useState(),
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
                                      v(e);
                                  },
                                  ...c.Z.extractVideoProps(E, h, void 0),
                              }
                            : void 0,
                        S = r.useMemo(() => Ke(l), [l]),
                        _ = r.useMemo(() => ({ height: Xe ? "100dvh" : `${f}px`, maxHeight: Xe ? "100dvh" : `${f}px`, userSelect: "none" }), [f]);
                    return l ? r.createElement(s.Z, { style: _ }, r.createElement(Ze, { analytics: e, isActiveCreator: n, isNsfwUser: o, isPinned: a, mediaType: S, photo: g, tweet: l, userCountry: m, userLanguage: p, videoPlayerApi: w, videoPlayerState: b, videoProps: T })) : null;
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
            n.d(t, { Ci: () => P, Fv: () => B, MU: () => S, Ot: () => C, Ov: () => Z, SY: () => T, XE: () => b, _5: () => A, aZ: () => x, c9: () => y, mr: () => D, sI: () => I, us: () => k, xB: () => M, zm: () => _ });
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
                g = a().f6e90cd7,
                w = a().e7d191ed,
                v = a().daa73df1,
                b = (e) => {
                    const { viewerCount: t } = e;
                    return t || 0 === t ? v({ viewerCount: ((n = t), "number" == typeof n ? (0, r.wl)(n) : n) }) : null;
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
                            i.push(g({ hoursWord: t, minutesWord: n, secondsWord: o }));
                        }
                        if ("number" == typeof o && o) {
                            const { hoursWord: e, minutesWord: t, secondsWord: n } = f(o);
                            i.push(w({ hoursWord: e, minutesWord: t, secondsWord: n }));
                        }
                        const l = a && b(a);
                        return l && i.push(l), i.join(". ");
                    })({ isLive: e.isLive, isBroadcast: e.contentType === s.wF.BROADCAST, durationSeconds: k(e), timecode: A(e), videoTrack: e });
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
                Z = (e) => {
                    const t = C(e);
                    return t && Math.round(t);
                },
                k = (e) => {
                    const t = S(e);
                    return t && Math.round(t);
                },
                x = (e, t) => {
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
        58399: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                a = n(890601),
                i = n(783427),
                r = n(717683),
                s = n(347101);
            const l = (e = {}) => {
                const t = o.useContext(r.Z),
                    { direction: n } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, t && s.Z.iconRTL], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: n });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        246492: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                a = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        264171: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                a = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
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
        262009: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                a = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                a = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.immersiveTweetHandler.49d56bda.js.map
