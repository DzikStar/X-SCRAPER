"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.immersiveTweetHandler"],
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
                u = n(187669),
                d = n(123751),
                m = n(807896),
                p = n(175993),
                h = n(688715),
                w = n(341189),
                b = n(966886),
                g = n(124964),
                y = n(966582),
                C = n(815858),
                f = n(154003),
                v = n(542610),
                E = n(155727),
                T = n(530732),
                S = n(366635),
                _ = n(366985),
                k = n(731708),
                x = n(451051),
                I = n(332920),
                P = n.n(I),
                Z = n(894966),
                A = n(899667),
                M = n(487552),
                B = n(83515),
                D = n(926628),
                L = n(643442),
                O = n(466445),
                F = n(498844),
                $ = n(38502),
                V = n(804579),
                N = n(149170),
                H = n(382880),
                W = n(609927),
                z = n(756632),
                R = n(459284),
                U = n(335636),
                G = n(443781),
                j = n(23134),
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
                    const { isTweetContentHidden: o, setTweetContentHidden: a } = (0, U.V)(),
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
                    const { featureSwitches: t } = r.useContext(G.rC),
                        { analytics: n, getTwitterAuthedHttpClient: o, onPlayerState: a, source: i } = e,
                        s = r.useMemo(() => o(), [o]),
                        l = i?.variants?.map((e) => ({ src: e.url, type: e.content_type })) || [];
                    let c;
                    if (e.cta) {
                        const { type: t, url: n } = e.cta;
                        t && n && (c = { type: t, url: n });
                    }
                    const u = r.useMemo(() => {
                            const e = { scribeContext: { ...n.contextualScribeNamespace }, enableShortFormCompleteLogging: t.isTrue("responsive_web_video_pcomplete_enabled") },
                                o = {
                                    log: (e) => {
                                        const { category: t, data: o, namespace: a } = e;
                                        a?.action && n.scribe({ ...a, data: { ...o, _category_: t } });
                                    },
                                };
                            return new J.Z(o, { log: () => {} }, s, e);
                        }, [n, t, s]),
                        d = r.useCallback(
                            (e) => {
                                a && a(e);
                            },
                            [a],
                        ),
                        m = (e.durationMs ?? 0) < 1e3 * e.maxLoopingThresholdSec ? 2 : 1;
                    return e && e.source ? r.createElement(Y.Z, { analytics: u, "aria-label": e["aria-label"], aspectRatio: e.aspectRatio, basePlayerClass: K.Y7, configType: "static", contentId: e.source.contentId, contentType: "media_entity", cta: c, durationMs: e.durationMs, enableVideoPlayerCaptionRendering: !0, eventId: e.source.eventId, featureProvider: t, geolocationPrompt: e.geolocationPrompt, httpClient: s, includeBroadcastEventAssociation: e.includeBroadcastEventAssociation, intentToPlayTime: e.intentToPlayTime, language: e.userLanguage, loop: e.loop, maxLoopCount: m, onApiReady: e.onSetPlayerApi, onStateUpdate: d, playbackSessionId: e.tweetId, poster: e.poster?.url, precache: !1, requestedTimecode: e.timecode, setPlayerApi: e.setPlayer, size: "fill", variants: l, videoId: e.source.videoId, viewCount: e.viewCount, vmapUrl: e.source.vmapUrl }, ({ playerApi: t, playerState: n }) => r.createElement(ae, { hasFocus: e.hasFocus, playerApi: t, playerState: n, tweetId: e.tweetId || "" })) : r.createElement(r.Fragment, null);
                });
            var re = n(988428);
            const se = P().ia5e7488,
                le = P().hb568af4,
                ce = P().bb1cbeb6,
                ue = P().f45bace4,
                de = P().e674c120,
                me = P().i86c2940,
                pe = P().a83d4280,
                he = P().g0048656,
                we = P().ec6907ba,
                be = { threshold: [0.98, 0.01] },
                ge = { label: se },
                ye = { label: pe },
                Ce = { label: he },
                fe = r.createElement(Z.default, null),
                ve = r.createElement(A.default, null),
                Ee = r.createElement(M.default, null),
                Te = { avatarSize: "xLarge" },
                Se = P().ic1e826e,
                _e = P().b89c5a50;
            function ke(e) {
                const { analytics: t, isActiveCreator: n, isNsfwUser: o, isPinned: a, mediaType: i, photo: l, style: c, tweet: d, userCountry: I, userLanguage: P, videoPlayerApi: Z, videoPlayerState: A, videoProps: M } = e,
                    { featureSwitches: N } = r.useContext(G.rC),
                    Y = r.useContext(p.Z),
                    J = N.isTrue("explore_relaunch_enable_immersive_web_navigation_button"),
                    { adjustFocusBy: K, currentIndex: Q, totalItems: ee } = (0, W.Y)(),
                    { forwardPivotInfo: te, hasClosedCaptioning: ne, isMuted: oe, isTweetContentHidden: ae, onMuteToggle: ke, onTweetUpdate: Pe, setBlockedOrMutedEntry: Ze, setHasClosedCaptioning: Ae } = (0, U.V)(),
                    Me = r.useRef(null),
                    [Be, De] = r.useState(!1),
                    Le = Boolean(Z) && Boolean(A),
                    Oe = A && (0, re.Ci)(A);
                (0, u.q)(() => {
                    t.scribe({ element: "tweet", action: "impression" });
                    if ("IntersectionObserver" in window) {
                        const e = new IntersectionObserver((e) => ze(e, De), be),
                            t = Me.current;
                        null != t && e.observe(t);
                        return () => {
                            e.disconnect();
                        };
                    }
                });
                const Fe = d.id_str,
                    $e = d.user.blocking,
                    Ve = d.user.muting;
                r.useEffect(() => {
                    Ze(`tweet-${Fe}`, $e || Ve || !1);
                }, [$e, Ve, Fe]),
                    r.useEffect(() => {
                        Le && oe !== A?.isMuted && (oe ? Z?.mute() : Z?.unmute());
                    }, [oe, Le, Z, A?.isMuted]),
                    r.useEffect(() => {
                        Le && Oe?.hasCaptions && ne !== A?.areCaptionsShown && Z?.toggleCaptions();
                    }, [Oe?.hasCaptions, ne, Le, Z, A?.areCaptionsShown]);
                const Ne = N.isTrue("explore_relaunch_enable_auto_play"),
                    He = r.useMemo(
                        () =>
                            (0, H.Z)(() => {
                                K && K(1);
                            }),
                        [K],
                    );
                r.useEffect(() => {
                    Ne &&
                        Z &&
                        Z.subscribe((e) => {
                            e.tracksFinished && void 0 !== Q && void 0 !== ee && Q < ee && He();
                        });
                }, [Ne, Z, K, He, Q, ee]);
                const We = r.useMemo(() => ({ pathname: (0, h.ju)(`https://x.com/${d.user.screen_name || ""}`), state: d.promoted_content ? { promotedTweetState: d.promoted_content } : void 0 }), [d.promoted_content, d.user.screen_name]),
                    ze = (e, t) => {
                        const n = e[0].intersectionRatio >= 0.98;
                        t(n), n && Pe(d);
                    },
                    Re = r.useCallback(() => {
                        Y && Y.goBack();
                    }, [Y]),
                    Ue = r.useCallback(() => {
                        t.scribe({ element: "caret", action: "click" });
                    }, [t]),
                    Ge = r.useCallback(
                        (e) => {
                            ke(!oe), e?.stopPropagation();
                        },
                        [ke, oe],
                    ),
                    je = r.useCallback(
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
                    Ye = r.useMemo(() => [xe.container, c || void 0], [c]),
                    Je = r.useMemo(() => [xe.button, xe.navigationButtonBottom], []),
                    Ke = r.useMemo(() => [xe.button, xe.navigationButtonTop], []),
                    Qe = r.useMemo(() => [xe.navigationButtonContainer, xe.topNavigationButtonContainer], []),
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
                    st = r.useMemo(() => (A?.isPlaying ? r.createElement(L.default, { testID: `immersive-tweet-pause-button-${Fe}` }) : r.createElement(O.default, { testID: `immersive-tweet-play-button-${Fe}` })), [A?.isPlaying, Fe]),
                    lt = r.useMemo(() => ({ label: A?.areCaptionsShown ? ue : de }), [A?.areCaptionsShown]),
                    ct = r.useMemo(() => (Oe?.hasCaptions ? (A?.areCaptionsShown ? r.createElement($.default, { testID: `immersive-tweet-remove-captions-icon-${Fe}` }) : r.createElement(V.default, { testID: `immersive-tweet-add-captions-icon-${Fe}` })) : r.createElement(F.default, { testID: `immersive-tweet-no-captions-icon-${Fe}` })), [Oe?.hasCaptions, A?.areCaptionsShown, Fe]),
                    ut = r.useCallback(() => {
                        t.scribe({ element: "avatar", action: "profile_click" });
                    }, [t]),
                    dt = r.useMemo(() => r.createElement(s.Z, { style: xe.screenNameSuffix }, r.createElement(b.Z, { style: xe.relativeTimestamp, timestamp: d.created_at }), r.createElement(g.Z, null), r.createElement(j.C, { isTransparent: !0, promotedContent: d.promoted_content, size: "medium", style: xe.followUserButton, userId: d.user.id_str })), [d.created_at, d.user.id_str, d.promoted_content]),
                    mt = y.Z.isPromoted(d.promoted_content);
                return r.createElement(
                    s.Z,
                    { ref: Me, style: Ye },
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
                            })({ mediaType: i, videoProps: M, hasFocus: Be, photo: l, tweetId: Fe, userLanguage: P, featureSwitches: N }),
                        ),
                        r.createElement(
                            s.Z,
                            { style: xe.tweetForegroundContainer },
                            r.createElement(s.Z, { style: xe.tweetTopContent }, J && r.createElement(s.Z, { style: Qe }, r.createElement(C.Z, { duration: "longer", show: !ae, type: "fade" }, r.createElement(f.ZP, { "aria-label": he, disabled: !nt, hoverLabel: Ce, icon: ve, onClick: it, size: "xSmall", style: Ke, testID: `immersive-tweet-previous-tweet-button-${Fe}`, type: "onMediaDominantColorFilled" }))), r.createElement(f.ZP, { "aria-label": se, hoverLabel: ge, icon: fe, onClick: Re, style: xe.backButton, testID: `immersive-tweet-back-button-${Fe}`, type: "onMediaDominantColorFilled" })),
                            r.createElement(
                                C.Z,
                                { duration: "longer", show: !ae, type: "fade" },
                                r.createElement(
                                    s.Z,
                                    { style: xe.bottomContainer, testID: `immersive-tweet-ui-content-container-${Fe}` },
                                    r.createElement(
                                        s.Z,
                                        { onLayout: Xe, style: xe.tweetContentContainer },
                                        Le && r.createElement(s.Z, { style: xe.verticalButtonContainer }, r.createElement(f.ZP, { "aria-label": oe ? ce : le, hoverLabel: et, icon: tt, onClick: Ge, size: "xSmall", style: xe.button, testID: `immersive-tweet-mute-button-${Fe}`, type: "onMediaDominantColorFilled" }), r.createElement(f.ZP, { "aria-label": A?.areCaptionsShown ? ue : de, disabled: !Oe?.hasCaptions, hoverLabel: lt, icon: ct, onClick: qe, size: "xSmall", style: xe.button, testID: `immersive-tweet-closed-captioning-button-${Fe}`, type: "onMediaDominantColorFilled" })),
                                        !!Z && r.createElement(s.Z, { style: xe.scrubberContainerWithPlayButton }, r.createElement(f.ZP, { "aria-label": A?.isPlaying ? _e : Se, icon: st, onClick: A?.isPlaying ? Z?.pause : Z?.play, size: "medium", style: xe.playPauseButton, type: "onMediaText" }), r.createElement(s.Z, { style: xe.scrubberFlexContainer }, r.createElement(v.Z, { "aria-label": me, currentTime: Oe ? (0, re.Ot)(Oe) || 0 : void 0, duration: Oe ? (0, re.MU)(Oe) : void 0, isScrubbing: !!A?.isScrubbing && A.isScrubbing, isSeeking: !!A?.isSeeking && A.isSeeking, playerApi: Z }))),
                                        r.createElement(s.Z, { style: xe.userInfoContainer }, r.createElement(s.Z, null, r.createElement(E.Z.Provider, { value: Te }, r.createElement(z.Z, { onClick: ut, promotedContent: d.promoted_content, screenName: d.user.screen_name, uri: d.user.profile_image_url_https, userId: d.user.id_str, withLink: !0 }))), r.createElement(s.Z, { style: xe.userNameContainer }, r.createElement(T.Z, { link: We }, r.createElement(S.Z, { color: "white", isBlueVerified: d.user.is_blue_verified, isVerified: d.user.verified, name: d.user.name, screenName: d.user.screen_name, screenNameSize: "body", screenNameSuffix: dt, weight: "bold", withName: !0, withScreenName: !0, withStackedLayout: !0 }))), r.createElement(s.Z, { style: xe.promotedLabel }, mt ? r.createElement(_.j, { tweet: d }, ([e]) => (e ? r.createElement(k.ZP, { "aria-label": e.promotedLabel, color: "gray700", testID: "immersive-tweet-ad-label" }, we) : null)) : null), r.createElement(s.Z, { style: xe.tweetActionMenuContainer }, r.createElement(q.g, { downloadLink: M?.source.downloadLink }, r.createElement(R.Z, { isActiveCreator: n || !1, isNsfwUser: o || !1, isPinned: a, menuControlProps: Ie, onMenuClick: Ue, promotedContent: d.promoted_content, tweet: d, userCountry: I, userLanguage: P, withMuteConversation: !1 })))),
                                        r.createElement(s.Z, { style: xe.tweetTextContainer }, r.createElement(x.Z, { displayTextRange: d.display_text_range, entities: d.entities, lang: d.lang, link: d.permalink, linkify: !0, numberOfLines: 5, onEntityClick: je, style: xe.tweetText, testID: `immersive-tweet-text-${Fe}`, text: d.text })),
                                    ),
                                    r.createElement(s.Z, { style: xe.tweetActionsBarContainer }, r.createElement(s.Z, { style: xe.primaryTweetActionsContainer }, r.createElement(X.Z, { activeColor: "white", allowBookmarkInActionsBar: !0, color: "white", forwardPivotInfo: d.softIntervention || te, style: xe.actionsBar, tweet: d, withAnalyticsAction: !0, withCount: !0 }))),
                                    J && r.createElement(s.Z, { style: xe.navigationButtonContainer }, r.createElement(f.ZP, { "aria-label": pe, disabled: !ot, hoverLabel: ye, icon: Ee, onClick: rt, size: "xSmall", style: Je, testID: `immersive-tweet-next-tweet-button-${Fe}`, type: "onMediaDominantColorFilled" })),
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
                Ie = { withDarkBackground: !1, style: xe.overflowMenuIcon, Icon: () => r.createElement(N.default, { color: "white", size: "large" }) };
            var Pe = n(499627),
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
            Pe.Z.register(
                { [Ae]: (e = De, t) => (t && t.type === Be.SETTINGS_LOADED ? { ...e, fetchStatus: Ze.ZP.LOADED, ...t.payload } : e) },
                () =>
                    (e, t, { userPersistence: n }) =>
                        n.get(Me).then((t) => {
                            e({ payload: { mobileViewCount: t?.mobileViewCount || 0 }, type: Be.SETTINGS_LOADED });
                        }),
            );
            var Fe = n(80890),
                $e = n(390387),
                Ve = n(38562),
                Ne = n(836255),
                He = n(919022);
            const We = (e, t) => t.entry.content.id,
                ze = (e, t) => (0, Fe.MW)(e, t.entry.content.id),
                Re = (e, t) => t.entry.content.promotedMetadata,
                Ue = (e, t) => {
                    const n = t.entry.content.promotedMetadata;
                    return n ? He.ZP.select(e, n.advertiserId) : null;
                },
                Ge = (e, { urtAdvertiser: t, urtPromotedContent: n }) => {
                    if (e && n) {
                        const o = e.promoted_content;
                        return { ...e, promoted_content: { adMetadataContainer: n.adMetadataContainer, disclosure_type: n.disclosureType, experiment_values: n.experimentValues, impression_id: n.impressionId, advertiser: t ? { id_str: t.id_str } : void 0, advertiser_name: t?.name || void 0, click_tracking_info: n.clickTrackingInfo, ...o } };
                    }
                    return e;
                },
                je = (0, Q.Z)()
                    .propsFromState(() => ({ tweet: Ne.Z.createHydratedTweetSelector(We), isActiveCreator: $e.WM, isNsfwUser: Ve.EF, isPinned: ze, onboardingMobileViewCount: Le, userCountry: $e.GG, userLanguage: $e.VT, urtAdvertiser: Ue, urtPromotedContent: Re }))
                    .adjustStateProps((e) => {
                        const { tweet: t, urtAdvertiser: n, urtPromotedContent: o, ...a } = e;
                        return { tweet: Ge(t, { urtPromotedContent: o, urtAdvertiser: n }), ...a };
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
                        [b, g] = r.useState(),
                        [y, C] = r.useState(),
                        [f, v] = r.useState(window.innerHeight);
                    (0, u.q)(() => {
                        window.addEventListener("resize", () => {
                            v(window.innerHeight);
                        });
                    });
                    const E = d.Z.forTweet(l ? l.id_str : ""),
                        T = h
                            ? {
                                  onPlayerState: (e) => {
                                      C(e);
                                  },
                                  onSetPlayerApi: (e) => {
                                      g(e);
                                  },
                                  ...c.Z.extractVideoProps(E, h, void 0),
                              }
                            : void 0,
                        S = r.useMemo(() => Ke(l), [l]),
                        _ = r.useMemo(() => ({ height: Xe ? "100dvh" : `${f}px`, maxHeight: Xe ? "100dvh" : `${f}px`, userSelect: "none" }), [f]);
                    return l ? r.createElement(s.Z, { style: _ }, r.createElement(ke, { analytics: e, isActiveCreator: n, isNsfwUser: o, isPinned: a, mediaType: S, photo: w, tweet: l, userCountry: m, userLanguage: p, videoPlayerApi: b, videoPlayerState: y, videoProps: T })) : null;
                },
                et = je(r.memo(Qe)),
                tt = { component: "tweet" },
                nt = (e) => a.Z.getTweetURTEntryItem(e),
                ot = (e) => i.iH({ component: et, defaultScribeNamespace: tt, isFocusable: (0, o.Z)(!0), getScribeDataItem: nt }).getHandler();
        },
        542610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                a = n(332920),
                i = n.n(a),
                r = n(2138),
                s = n(173739),
                l = n(424713);
            const c = i().f06f2e53;
            class u extends o.PureComponent {
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
                        (this._handleActive = (e) => (!this.state.isScrubbing && e && document.addEventListener("click", this._handleCaptureClick, !0), e || this._throttledPlayerSeek.flush(), this.props.playerApi.setScrubbing(e), this.setState({ isScrubbing: e }))),
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
            const d = u;
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
            n.d(t, { Ci: () => Z, Fv: () => B, MU: () => S, Ot: () => v, Ov: () => k, SY: () => T, XE: () => y, _5: () => M, aZ: () => I, c9: () => C, mr: () => D, sI: () => P, us: () => x, xB: () => A, zm: () => _ });
            n(136728);
            var o = n(332920),
                a = n.n(o),
                i = n(837880),
                r = n(891198),
                s = n(251478);
            const l = a().i3b7a017,
                c = a().ie5d110f,
                u = a().df5f11b3,
                d = a().a7cd5cf4,
                m = a().b6eb8f6a,
                p = a().dcc2b9b3,
                h = a().hf4ffd4d,
                w = a().f6e90cd7,
                b = a().e7d191ed,
                g = a().daa73df1,
                y = (e) => {
                    const { viewerCount: t } = e;
                    return t || 0 === t ? g({ viewerCount: ((n = t), "number" == typeof n ? (0, r.wl)(n) : n) }) : null;
                    var n;
                },
                C = (e) => {
                    if (!e) return "";
                    return (({ durationSeconds: e, isBroadcast: t, isLive: n, timecode: o, videoTrack: a } = {}) => {
                        const i = [],
                            r = t || n ? m : d,
                            s = n ? h : p;
                        if ((i.push(s({ locVideoType: r })), "number" == typeof e && e && !n)) {
                            const { hoursWord: t, minutesWord: n, secondsWord: o } = f(e);
                            i.push(w({ hoursWord: t, minutesWord: n, secondsWord: o }));
                        }
                        if ("number" == typeof o && o) {
                            const { hoursWord: e, minutesWord: t, secondsWord: n } = f(o);
                            i.push(b({ hoursWord: e, minutesWord: t, secondsWord: n }));
                        }
                        const l = a && y(a);
                        return l && i.push(l), i.join(". ");
                    })({ isLive: e.isLive, isBroadcast: e.contentType === s.wF.BROADCAST, durationSeconds: x(e), timecode: M(e), videoTrack: e });
                },
                f = (e) => {
                    const { hours: t, minutes: n, seconds: o } = L(e),
                        a = { hoursWord: "", minutesWord: "", secondsWord: "" };
                    return 0 === o && 0 === n && 0 === t && 0 === n ? ((a.secondsWord = l(0)), a) : ((a.hoursWord = t > 0 ? u(t) : ""), (a.minutesWord = n > 0 ? c(n) : ""), (a.secondsWord = o > 0 ? l(o) : ""), a);
                },
                v = (e) => (e ? (e.currentTimeMs || 0) / 1e3 : void 0),
                E = (e) => e.endTimeS - e.startTimeS,
                T = (e) => {
                    const t = e?.controls?.playbackTimeRange,
                        n = Z(e),
                        o = v(n);
                    if (void 0 === o) return 0;
                    if (!t) return o;
                    const a = o - t.startTimeS;
                    return (0, i.Z)(a, 0, E(t));
                },
                S = (e) => (e ? (e.durationMs || 0) / 1e3 : void 0),
                _ = (e) => {
                    const t = e?.controls?.playbackTimeRange,
                        n = Z(e),
                        o = S(n);
                    return o ? (t ? E(t) : o) : 0;
                },
                k = (e) => {
                    const t = v(e);
                    return t && Math.round(t);
                },
                x = (e) => {
                    const t = S(e);
                    return t && Math.round(t);
                },
                I = (e, t) => {
                    const n = S(Z(e));
                    if (!n) return;
                    const o = ((e?.controls?.playbackTimeRange?.startTimeS ?? 0) + t) / n;
                    return (0, i.Z)(o, 0, 1);
                },
                P = (e) => e.tracks.find((e) => 0 === e.id),
                Z = (e) => e.tracks.find((t) => t.id === e.currentTrackId),
                A = (e) => (e.controls && e.controls.isPosterShown ? P(e) : Z(e)),
                M = (e) => {
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.immersiveTweetHandler.c045650a.js.map
