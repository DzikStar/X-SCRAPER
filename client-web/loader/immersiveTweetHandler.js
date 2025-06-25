"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.immersiveTweetHandler"],
    {
        311554: (e, t, n) => {
            n.r(t), n.d(t, { DEFAULT_SCRIBE_NAMESPACE: () => tt, default: () => ot, getScribeDataItem: () => nt });
            var o = n(459643),
                r = n(942893),
                a = n(351322),
                i = n(202784),
                s = n(325686),
                l = n(392237),
                c = n(284702),
                u = n(187669),
                d = n(123751),
                m = n(807896),
                p = n(175993),
                h = n(688715),
                g = n(341189),
                b = n(966886),
                y = n(124964),
                w = n(966582),
                C = n(815858),
                f = n(154003),
                v = n(542610),
                E = n(155727),
                T = n(530732),
                S = n(366635),
                _ = n(366985),
                k = n(731708),
                x = n(451051),
                Z = n(111677),
                P = n.n(Z),
                I = n(894966),
                M = n(899667),
                A = n(487552),
                B = n(83515),
                D = n(926628),
                L = n(643442),
                O = n(466445),
                F = n(498844),
                $ = n(38502),
                V = n(804579),
                H = n(149170),
                W = n(382880),
                N = n(609927),
                z = n(756632),
                G = n(459284),
                R = n(335636),
                j = n(443781),
                U = n(23134),
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
                    const { isTweetContentHidden: o, setTweetContentHidden: r } = (0, R.V)(),
                        [a, l] = i.useState(!1);
                    i.useEffect(() => {
                        a &&
                            t &&
                            ((e, t) => {
                                t ? e.play() : e.pause();
                            })(t, e);
                    }, [e, t, a]),
                        i.useEffect(() => {
                            r(!1);
                        }, [r, n]),
                        i.useEffect(() => {
                            const e = setTimeout(() => {
                                r(!0);
                            }, 2e3);
                            return function () {
                                clearTimeout(e);
                            };
                        }, [r, n]),
                        a || l(!0);
                    const c = i.useCallback(() => {
                        t && r(!o);
                    }, [t, r, o]);
                    return i.createElement(s.Z, { onClick: c, style: oe.controlsContainer, testID: `immersive-video-controls-${n}` });
                },
                oe = l.default.create((e) => ({ controlsContainer: { width: "100%", height: "100%", display: "flex", flexDirection: "column" } })),
                re = i.memo(ne),
                ae = te((e) => {
                    const { featureSwitches: t } = i.useContext(j.rC),
                        { analytics: n, getTwitterAuthedHttpClient: o, onPlayerState: r, source: a } = e,
                        s = i.useMemo(() => o(), [o]),
                        l = a?.variants?.map((e) => ({ src: e.url, type: e.content_type })) || [];
                    let c;
                    if (e.cta) {
                        const { type: t, url: n } = e.cta;
                        t && n && (c = { type: t, url: n });
                    }
                    const u = i.useMemo(() => {
                            const e = { scribeContext: { ...n.contextualScribeNamespace }, enableShortFormCompleteLogging: t.isTrue("responsive_web_video_pcomplete_enabled") },
                                o = {
                                    log: (e) => {
                                        const { category: t, data: o, namespace: r } = e;
                                        r?.action && n.scribe({ ...r, data: { ...o, _category_: t } });
                                    },
                                };
                            return new J.Z(o, { log: () => {} }, s, e);
                        }, [n, t, s]),
                        d = i.useCallback(
                            (e) => {
                                r && r(e);
                            },
                            [r],
                        ),
                        m = (e.durationMs ?? 0) < 1e3 * e.maxLoopingThresholdSec ? 2 : 1;
                    return e && e.source ? i.createElement(Y.Z, { analytics: u, "aria-label": e["aria-label"], aspectRatio: e.aspectRatio, basePlayerClass: K.Y7, configType: "static", contentId: e.source.contentId, contentType: "media_entity", cta: c, durationMs: e.durationMs, enableVideoPlayerCaptionRendering: !0, eventId: e.source.eventId, featureProvider: t, geolocationPrompt: e.geolocationPrompt, httpClient: s, includeBroadcastEventAssociation: e.includeBroadcastEventAssociation, intentToPlayTime: e.intentToPlayTime, language: e.userLanguage, loop: e.loop, maxLoopCount: m, onApiReady: e.onSetPlayerApi, onStateUpdate: d, playbackSessionId: e.tweetId, poster: e.poster?.url, precache: !1, requestedTimecode: e.timecode, setPlayerApi: e.setPlayer, size: "fill", variants: l, videoId: e.source.videoId, viewCount: e.viewCount, vmapUrl: e.source.vmapUrl }, ({ playerApi: t, playerState: n }) => i.createElement(re, { hasFocus: e.hasFocus, playerApi: t, playerState: n, tweetId: e.tweetId || "" })) : i.createElement(i.Fragment, null);
                });
            var ie = n(988428);
            const se = P().ia5e7488,
                le = P().hb568af4,
                ce = P().bb1cbeb6,
                ue = P().f45bace4,
                de = P().e674c120,
                me = P().i86c2940,
                pe = P().a83d4280,
                he = P().g0048656,
                ge = P().ec6907ba,
                be = { threshold: [0.98, 0.01] },
                ye = { label: se },
                we = { label: pe },
                Ce = { label: he },
                fe = i.createElement(I.default, null),
                ve = i.createElement(M.default, null),
                Ee = i.createElement(A.default, null),
                Te = { avatarSize: "xLarge" },
                Se = P().ic1e826e,
                _e = P().b89c5a50;
            function ke(e) {
                const { analytics: t, isActiveCreator: n, isNsfwUser: o, isPinned: r, mediaType: a, photo: l, style: c, tweet: d, userCountry: Z, userLanguage: P, videoPlayerApi: I, videoPlayerState: M, videoProps: A } = e,
                    { featureSwitches: H } = i.useContext(j.rC),
                    Y = i.useContext(p.Z),
                    J = H.isTrue("explore_relaunch_enable_immersive_web_navigation_button"),
                    { adjustFocusBy: K, currentIndex: Q, totalItems: ee } = (0, N.Y)(),
                    { forwardPivotInfo: te, hasClosedCaptioning: ne, isMuted: oe, isTweetContentHidden: re, onMuteToggle: ke, onTweetUpdate: Pe, setBlockedOrMutedEntry: Ie, setHasClosedCaptioning: Me } = (0, R.V)(),
                    Ae = i.useRef(null),
                    [Be, De] = i.useState(!1),
                    Le = Boolean(I) && Boolean(M),
                    Oe = M && (0, ie.Ci)(M);
                (0, u.q)(() => {
                    t.scribe({ element: "tweet", action: "impression" });
                    if ("IntersectionObserver" in window) {
                        const e = new IntersectionObserver((e) => ze(e, De), be),
                            t = Ae.current;
                        null != t && e.observe(t);
                        return () => {
                            e.disconnect();
                        };
                    }
                });
                const Fe = d.id_str,
                    $e = d.user.blocking,
                    Ve = d.user.muting;
                i.useEffect(() => {
                    Ie(`tweet-${Fe}`, $e || Ve || !1);
                }, [$e, Ve, Fe]),
                    i.useEffect(() => {
                        Le && oe !== M?.isMuted && (oe ? I?.mute() : I?.unmute());
                    }, [oe, Le, I, M?.isMuted]),
                    i.useEffect(() => {
                        Le && Oe?.hasCaptions && ne !== M?.areCaptionsShown && I?.toggleCaptions();
                    }, [Oe?.hasCaptions, ne, Le, I, M?.areCaptionsShown]);
                const He = H.isTrue("explore_relaunch_enable_auto_play"),
                    We = i.useMemo(
                        () =>
                            (0, W.Z)(() => {
                                K && K(1);
                            }),
                        [K],
                    );
                i.useEffect(() => {
                    He &&
                        I &&
                        I.subscribe((e) => {
                            e.tracksFinished && void 0 !== Q && void 0 !== ee && Q < ee && We();
                        });
                }, [He, I, K, We, Q, ee]);
                const Ne = i.useMemo(() => ({ pathname: (0, h.ju)(`https://x.com/${d.user.screen_name || ""}`), state: d.promoted_content ? { promotedTweetState: d.promoted_content } : void 0 }), [d.promoted_content, d.user.screen_name]),
                    ze = (e, t) => {
                        const n = e[0].intersectionRatio >= 0.98;
                        t(n), n && Pe(d);
                    },
                    Ge = i.useCallback(() => {
                        Y && Y.goBack();
                    }, [Y]),
                    Re = i.useCallback(() => {
                        t.scribe({ element: "caret", action: "click" });
                    }, [t]),
                    je = i.useCallback(
                        (e) => {
                            ke(!oe), e?.stopPropagation();
                        },
                        [ke, oe],
                    ),
                    Ue = i.useCallback(
                        (e, n) => {
                            n === g.Z.HASHTAG ? t.scribe({ element: "hashtag", action: "search" }) : n === g.Z.URL ? t.scribe({ action: "open_link" }) : n === g.Z.TEXT && t.scribe({ element: "tweet", action: "click" });
                        },
                        [t],
                    ),
                    Xe = i.useCallback(
                        (e) => {
                            const { height: t } = e.nativeEvent.layout;
                            I?.setCaptionDefaultOffset({ bottom: t });
                        },
                        [I],
                    ),
                    qe = i.useCallback(
                        (e) => {
                            Me(!ne), e.stopPropagation();
                        },
                        [Me, ne],
                    ),
                    Ye = i.useMemo(() => [xe.container, c || void 0], [c]),
                    Je = i.useMemo(() => [xe.button, xe.navigationButtonBottom], []),
                    Ke = i.useMemo(() => [xe.button, xe.navigationButtonTop], []),
                    Qe = i.useMemo(() => [xe.navigationButtonContainer, xe.topNavigationButtonContainer], []),
                    et = i.useMemo(() => ({ label: oe ? ce : le }), [oe]),
                    tt = i.useMemo(() => (oe ? i.createElement(B.default, { testID: `immersive-tweet-unmute-icon-${Fe}` }) : i.createElement(D.default, { testID: `immersive-tweet-mute-icon-${Fe}` })), [oe, Fe]),
                    nt = i.useMemo(() => !!Q && 0 !== Q, [Q]),
                    ot = i.useMemo(() => !!ee && ee - 1 !== Q, [ee, Q]),
                    rt = i.useCallback(
                        (e) => {
                            K && K(e);
                            const n = -1 === e ? "previous_tweet_button" : "next_tweet_button";
                            t.scribe({ element: n, action: "click" });
                        },
                        [K, t],
                    ),
                    at = i.useCallback(() => rt(-1), [rt]),
                    it = i.useCallback(() => rt(1), [rt]),
                    st = i.useMemo(() => (M?.isPlaying ? i.createElement(L.default, { testID: `immersive-tweet-pause-button-${Fe}` }) : i.createElement(O.default, { testID: `immersive-tweet-play-button-${Fe}` })), [M?.isPlaying, Fe]),
                    lt = i.useMemo(() => ({ label: M?.areCaptionsShown ? ue : de }), [M?.areCaptionsShown]),
                    ct = i.useMemo(() => (Oe?.hasCaptions ? (M?.areCaptionsShown ? i.createElement($.default, { testID: `immersive-tweet-remove-captions-icon-${Fe}` }) : i.createElement(V.default, { testID: `immersive-tweet-add-captions-icon-${Fe}` })) : i.createElement(F.default, { testID: `immersive-tweet-no-captions-icon-${Fe}` })), [Oe?.hasCaptions, M?.areCaptionsShown, Fe]),
                    ut = i.useCallback(() => {
                        t.scribe({ element: "avatar", action: "profile_click" });
                    }, [t]),
                    dt = i.useMemo(() => i.createElement(s.Z, { style: xe.screenNameSuffix }, i.createElement(b.Z, { style: xe.relativeTimestamp, timestamp: d.created_at }), i.createElement(y.Z, null), i.createElement(U.C, { isTransparent: !0, promotedContent: d.promoted_content, size: "medium", style: xe.followUserButton, userId: d.user.id_str })), [d.created_at, d.user.id_str, d.promoted_content]),
                    mt = w.Z.isPromoted(d.promoted_content);
                return i.createElement(
                    s.Z,
                    { ref: Ae, style: Ye },
                    i.createElement(
                        s.Z,
                        { style: xe.immersiveBlurContainer },
                        i.createElement(
                            s.Z,
                            { style: xe.mediaContentContainer },
                            (({ featureSwitches: e, hasFocus: t, mediaType: n, photo: o, tweetId: r, userLanguage: a, videoProps: s }) => {
                                const l = { maxLoopingThresholdSec: e.getNumberValue("explore_relaunch_max_video_loop_threshold_sec", 5) };
                                switch (n) {
                                    case "video":
                                    case "animated_gif":
                                        return s ? i.createElement(ae, (0, m.Z)({}, s, l, { hasFocus: t, loop: !0, tweetId: r, userLanguage: a })) : null;
                                    default:
                                        return i.createElement(i.Fragment, null);
                                }
                            })({ mediaType: a, videoProps: A, hasFocus: Be, photo: l, tweetId: Fe, userLanguage: P, featureSwitches: H }),
                        ),
                        i.createElement(
                            s.Z,
                            { style: xe.tweetForegroundContainer },
                            i.createElement(s.Z, { style: xe.tweetTopContent }, J && i.createElement(s.Z, { style: Qe }, i.createElement(C.Z, { duration: "longer", show: !re, type: "fade" }, i.createElement(f.ZP, { "aria-label": he, disabled: !nt, hoverLabel: Ce, icon: ve, onClick: at, size: "xSmall", style: Ke, testID: `immersive-tweet-previous-tweet-button-${Fe}`, type: "onMediaDominantColorFilled" }))), i.createElement(f.ZP, { "aria-label": se, hoverLabel: ye, icon: fe, onClick: Ge, style: xe.backButton, testID: `immersive-tweet-back-button-${Fe}`, type: "onMediaDominantColorFilled" })),
                            i.createElement(
                                C.Z,
                                { duration: "longer", show: !re, type: "fade" },
                                i.createElement(
                                    s.Z,
                                    { style: xe.bottomContainer, testID: `immersive-tweet-ui-content-container-${Fe}` },
                                    i.createElement(
                                        s.Z,
                                        { onLayout: Xe, style: xe.tweetContentContainer },
                                        Le && i.createElement(s.Z, { style: xe.verticalButtonContainer }, i.createElement(f.ZP, { "aria-label": oe ? ce : le, hoverLabel: et, icon: tt, onClick: je, size: "xSmall", style: xe.button, testID: `immersive-tweet-mute-button-${Fe}`, type: "onMediaDominantColorFilled" }), i.createElement(f.ZP, { "aria-label": M?.areCaptionsShown ? ue : de, disabled: !Oe?.hasCaptions, hoverLabel: lt, icon: ct, onClick: qe, size: "xSmall", style: xe.button, testID: `immersive-tweet-closed-captioning-button-${Fe}`, type: "onMediaDominantColorFilled" })),
                                        !!I && i.createElement(s.Z, { style: xe.scrubberContainerWithPlayButton }, i.createElement(f.ZP, { "aria-label": M?.isPlaying ? _e : Se, icon: st, onClick: M?.isPlaying ? I?.pause : I?.play, size: "medium", style: xe.playPauseButton, type: "onMediaText" }), i.createElement(s.Z, { style: xe.scrubberFlexContainer }, i.createElement(v.Z, { "aria-label": me, currentTime: Oe ? (0, ie.Ot)(Oe) || 0 : void 0, duration: Oe ? (0, ie.MU)(Oe) : void 0, isScrubbing: !!M?.isScrubbing && M.isScrubbing, isSeeking: !!M?.isSeeking && M.isSeeking, playerApi: I }))),
                                        i.createElement(s.Z, { style: xe.userInfoContainer }, i.createElement(s.Z, null, i.createElement(E.Z.Provider, { value: Te }, i.createElement(z.Z, { onClick: ut, promotedContent: d.promoted_content, screenName: d.user.screen_name, uri: d.user.profile_image_url_https, userId: d.user.id_str, withLink: !0 }))), i.createElement(s.Z, { style: xe.userNameContainer }, i.createElement(T.Z, { link: Ne }, i.createElement(S.Z, { color: "white", isBlueVerified: d.user.is_blue_verified, isVerified: d.user.verified, name: d.user.name, screenName: d.user.screen_name, screenNameSize: "body", screenNameSuffix: dt, weight: "bold", withName: !0, withScreenName: !0, withStackedLayout: !0 }))), i.createElement(s.Z, { style: xe.promotedLabel }, mt ? i.createElement(_.j, { tweet: d }, ([e]) => (e ? i.createElement(k.ZP, { "aria-label": e.promotedLabel, color: "gray700", testID: "immersive-tweet-ad-label" }, ge) : null)) : null), i.createElement(s.Z, { style: xe.tweetActionMenuContainer }, i.createElement(q.g, { downloadLink: A?.source.downloadLink }, i.createElement(G.Z, { isActiveCreator: n || !1, isNsfwUser: o || !1, isPinned: r, menuControlProps: Ze, onMenuClick: Re, promotedContent: d.promoted_content, tweet: d, userCountry: Z, userLanguage: P, withMuteConversation: !1 })))),
                                        i.createElement(s.Z, { style: xe.tweetTextContainer }, i.createElement(x.Z, { displayTextRange: d.display_text_range, entities: d.entities, lang: d.lang, link: d.permalink, linkify: !0, numberOfLines: 5, onEntityClick: Ue, style: xe.tweetText, testID: `immersive-tweet-text-${Fe}`, text: d.text })),
                                    ),
                                    i.createElement(s.Z, { style: xe.tweetActionsBarContainer }, i.createElement(s.Z, { style: xe.primaryTweetActionsContainer }, i.createElement(X.Z, { activeColor: "white", allowBookmarkInActionsBar: !0, color: "white", forwardPivotInfo: d.softIntervention || te, style: xe.actionsBar, tweet: d, withAnalyticsAction: !0, withCount: !0 }))),
                                    J && i.createElement(s.Z, { style: xe.navigationButtonContainer }, i.createElement(f.ZP, { "aria-label": pe, disabled: !ot, hoverLabel: we, icon: Ee, onClick: it, size: "xSmall", style: Je, testID: `immersive-tweet-next-tweet-button-${Fe}`, type: "onMediaDominantColorFilled" })),
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
                Ze = { withDarkBackground: !1, style: xe.overflowMenuIcon, Icon: () => i.createElement(H.default, { color: "white", size: "large" }) };
            var Pe = n(499627),
                Ie = n(312771);
            const Me = "immersiveViewer",
                Ae = "rweb.immersiveViewer",
                Be = Object.freeze({ SETTINGS_LOADED: "rweb/immersiveViewer/SETTINGS_LOADED" }),
                De = Object.freeze({ fetchStatus: Ie.ZP.NONE, mobileViewCount: 0 }),
                Le = (e) => e[Me].mobileViewCount,
                Oe =
                    () =>
                    (e, t, { userPersistence: n }) =>
                        n.get(Ae).then((e) => {
                            const t = e?.mobileViewCount || 0;
                            n.set(Ae, { mobileViewCount: (t || 0) + 1 });
                        });
            Pe.Z.register(
                { [Me]: (e = De, t) => (t && t.type === Be.SETTINGS_LOADED ? { ...e, fetchStatus: Ie.ZP.LOADED, ...t.payload } : e) },
                () =>
                    (e, t, { userPersistence: n }) =>
                        n.get(Ae).then((t) => {
                            e({ payload: { mobileViewCount: t?.mobileViewCount || 0 }, type: Be.SETTINGS_LOADED });
                        }),
            );
            var Fe = n(80890),
                $e = n(390387),
                Ve = n(38562),
                He = n(836255),
                We = n(919022);
            const Ne = (e, t) => t.entry.content.id,
                ze = (e, t) => (0, Fe.MW)(e, t.entry.content.id),
                Ge = (e, t) => t.entry.content.promotedMetadata,
                Re = (e, t) => {
                    const n = t.entry.content.promotedMetadata;
                    return n ? We.ZP.select(e, n.advertiserId) : null;
                },
                je = (e, { urtAdvertiser: t, urtPromotedContent: n }) => {
                    if (e && n) {
                        const o = e.promoted_content;
                        return { ...e, promoted_content: { adMetadataContainer: n.adMetadataContainer, disclosure_type: n.disclosureType, experiment_values: n.experimentValues, impression_id: n.impressionId, advertiser: t ? { id_str: t.id_str } : void 0, advertiser_name: t?.name || void 0, click_tracking_info: n.clickTrackingInfo, ...o } };
                    }
                    return e;
                },
                Ue = (0, Q.Z)()
                    .propsFromState(() => ({ tweet: He.Z.createHydratedTweetSelector(Ne), isActiveCreator: $e.WM, isNsfwUser: Ve.EF, isPinned: ze, onboardingMobileViewCount: Le, userCountry: $e.GG, userLanguage: $e.VT, urtAdvertiser: Re, urtPromotedContent: Ge }))
                    .adjustStateProps((e) => {
                        const { tweet: t, urtAdvertiser: n, urtPromotedContent: o, ...r } = e;
                        return { tweet: je(t, { urtPromotedContent: o, urtAdvertiser: n }), ...r };
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
                Qe = ({ analytics: e, immersiveViewerOnboardingViewed: t, isActiveCreator: n, isNsfwUser: o, isPinned: r, onboardingMobileViewCount: a, tweet: l, userCountry: m, userLanguage: p }) => {
                    const h = l ? Ye(l) : null,
                        g = l ? Je(l) : null,
                        [b, y] = i.useState(),
                        [w, C] = i.useState(),
                        [f, v] = i.useState(window.innerHeight);
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
                                      y(e);
                                  },
                                  ...c.Z.extractVideoProps(E, h, void 0),
                              }
                            : void 0,
                        S = i.useMemo(() => Ke(l), [l]),
                        _ = i.useMemo(() => ({ height: Xe ? "100dvh" : `${f}px`, maxHeight: Xe ? "100dvh" : `${f}px`, userSelect: "none" }), [f]);
                    return l ? i.createElement(s.Z, { style: _ }, i.createElement(ke, { analytics: e, isActiveCreator: n, isNsfwUser: o, isPinned: r, mediaType: S, photo: g, tweet: l, userCountry: m, userLanguage: p, videoPlayerApi: b, videoPlayerState: w, videoProps: T })) : null;
                },
                et = Ue(i.memo(Qe)),
                tt = { component: "tweet" },
                nt = (e) => r.Z.getTweetURTEntryItem(e),
                ot = (e) => a.iH({ component: et, defaultScribeNamespace: tt, isFocusable: (0, o.Z)(!0), getScribeDataItem: nt }).getHandler();
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(325686),
                a = n(235902),
                i = n(885015),
                s = n(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: l } = a.ZP.useProps(),
                    u = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return n ? o.createElement(i.Z, { style: !t && c.root, withGutter: !0 }, o.createElement(r.Z, { style: c.gapColumn }, o.createElement(r.Z, { style: [c.gap, u] })), o.createElement(r.Z, { style: c.gapText }, n), o.createElement(r.Z, { style: c.gapColumn }, o.createElement(r.Z, { style: [c.gap, u] }))) : o.createElement(r.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, u] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                r = n(202784),
                a = n(325686),
                i = n(392237);
            class s extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...i } = this.props,
                        s = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, l.column, n && l.withGutterColumn] }));
                    return r.createElement(a.Z, (0, o.Z)({ style: [t, l.root, n && l.withGutter] }, i), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const l = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        542610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(111677),
                a = n.n(r),
                i = n(2138),
                s = n(173739),
                l = n(424713);
            const c = a().f06f2e53;
            class u extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._handleChange = (e) => {
                            this.setState({ scrubTo: e }), (this.scheduledSeekTargetSec = e), this._throttledPlayerSeek();
                        }),
                        (this._throttledPlayerSeek = (0, i.Z)(
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
                        r = this.state.isScrubbing || this.props.isSeeking ? this.state.scrubTo : t;
                    if ("number" == typeof r && "number" == typeof n && n > 0) {
                        const t = (0, l.mr)(r),
                            a = (0, l.mr)(n);
                        return o.createElement(s.Z, { accessibilityLabelValueText: c({ currentTime: t, durationTime: a }), "aria-label": e, color: "white", keepLTR: !0, keyboardStep: 5, max: n, min: 0, onActive: this._handleActive, onChange: this._handleChange, step: "any", value: r, withHidingThumb: !0 });
                    }
                    return null;
                }
            }
            const d = u;
        },
        251478: (e, t, n) => {
            n.d(t, { $2: () => o, CX: () => l, EB: () => s, Eq: () => r, ak: () => i, wF: () => a });
            const o = { VISIT: "url", WATCH: "watch" },
                r = { watch_now: "watch_now", visit_site: "visit_site", shop: "shop", see_more: "see_more", go_to: "go_to" },
                a = { MEDIA: "media_entity", GIF: "gif", VMAP: "vmap", BROADCAST: "broadcast" },
                i = { AD: "ad", CONTENT: "content" },
                s = { BROADCAST: "broadcast", DM: "dm", TWEET: "tweet" },
                l = 720;
        },
        424713: (e, t, n) => {
            n.d(t, { Ci: () => I, Fv: () => B, MU: () => S, Ot: () => v, Ov: () => k, SY: () => T, XE: () => w, _5: () => A, aZ: () => Z, c9: () => C, mr: () => D, sI: () => P, us: () => x, xB: () => M, zm: () => _ });
            n(136728);
            var o = n(111677),
                r = n.n(o),
                a = n(837880),
                i = n(891198),
                s = n(251478);
            const l = r().i3b7a017,
                c = r().ie5d110f,
                u = r().df5f11b3,
                d = r().a7cd5cf4,
                m = r().b6eb8f6a,
                p = r().dcc2b9b3,
                h = r().hf4ffd4d,
                g = r().f6e90cd7,
                b = r().e7d191ed,
                y = r().daa73df1,
                w = (e) => {
                    const { viewerCount: t } = e;
                    return t || 0 === t ? y({ viewerCount: ((n = t), "number" == typeof n ? (0, i.wl)(n) : n) }) : null;
                    var n;
                },
                C = (e) => {
                    if (!e) return "";
                    return (({ durationSeconds: e, isBroadcast: t, isLive: n, timecode: o, videoTrack: r } = {}) => {
                        const a = [],
                            i = t || n ? m : d,
                            s = n ? h : p;
                        if ((a.push(s({ locVideoType: i })), "number" == typeof e && e && !n)) {
                            const { hoursWord: t, minutesWord: n, secondsWord: o } = f(e);
                            a.push(g({ hoursWord: t, minutesWord: n, secondsWord: o }));
                        }
                        if ("number" == typeof o && o) {
                            const { hoursWord: e, minutesWord: t, secondsWord: n } = f(o);
                            a.push(b({ hoursWord: e, minutesWord: t, secondsWord: n }));
                        }
                        const l = r && w(r);
                        return l && a.push(l), a.join(". ");
                    })({ isLive: e.isLive, isBroadcast: e.contentType === s.wF.BROADCAST, durationSeconds: x(e), timecode: A(e), videoTrack: e });
                },
                f = (e) => {
                    const { hours: t, minutes: n, seconds: o } = L(e),
                        r = { hoursWord: "", minutesWord: "", secondsWord: "" };
                    return 0 === o && 0 === n && 0 === t && 0 === n ? ((r.secondsWord = l(0)), r) : ((r.hoursWord = t > 0 ? u(t) : ""), (r.minutesWord = n > 0 ? c(n) : ""), (r.secondsWord = o > 0 ? l(o) : ""), r);
                },
                v = (e) => (e ? (e.currentTimeMs || 0) / 1e3 : void 0),
                E = (e) => e.endTimeS - e.startTimeS,
                T = (e) => {
                    const t = e?.controls?.playbackTimeRange,
                        n = I(e),
                        o = v(n);
                    if (void 0 === o) return 0;
                    if (!t) return o;
                    const r = o - t.startTimeS;
                    return (0, a.Z)(r, 0, E(t));
                },
                S = (e) => (e ? (e.durationMs || 0) / 1e3 : void 0),
                _ = (e) => {
                    const t = e?.controls?.playbackTimeRange,
                        n = I(e),
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
                Z = (e, t) => {
                    const n = S(I(e));
                    if (!n) return;
                    const o = ((e?.controls?.playbackTimeRange?.startTimeS ?? 0) + t) / n;
                    return (0, a.Z)(o, 0, 1);
                },
                P = (e) => e.tracks.find((e) => 0 === e.id),
                I = (e) => e.tracks.find((t) => t.id === e.currentTrackId),
                M = (e) => (e.controls && e.controls.isPosterShown ? P(e) : I(e)),
                A = (e) => {
                    if (e) {
                        const t = e.requestedTimecode;
                        return t && t > 0 ? t : e.replayEditedStartTime;
                    }
                },
                B = (e) => D(Math.round(e / 1e3)),
                D = (e) => {
                    const { hours: t, minutes: n, seconds: o } = L(e),
                        r = o < 10 ? `0${o}` : o,
                        a = n < 10 && t ? `0${n}` : n;
                    return t ? `${t}:${a}:${r}` : `${a}:${r}`;
                },
                L = (e) => ({ hours: Math.floor(e / 3600), minutes: Math.floor((e % 3600) / 60), seconds: Math.floor(e % 60) });
        },
        893164: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(202784),
                r = n(325686),
                a = n(111677),
                i = n.n(a),
                s = n(355830),
                l = n(731708),
                c = n(154003),
                u = n(992942),
                d = n(392237);
            const m = i().a9edea48;
            function p(e) {
                const { displayBackgroundImage: t = !1, errorMessage: n, iconPlayError: a, imageSrc: i, onReloadPress: p } = e;
                return o.createElement(r.Z, { style: [d.default.absoluteFill, t ? null : h.blankOverlay] }, t ? o.createElement(o.Fragment, null, o.createElement(r.Z, { style: h.backgroundImage }, i && o.createElement(u.Z, { resizeMode: "cover", source: i, style: d.default.absoluteFill })), o.createElement(r.Z, { style: h.overlay })) : null, o.createElement(r.Z, { style: h.errorContainer }, o.createElement(r.Z, null, a ? o.createElement(s.default, { style: h.playErrorIcon }) : null), o.createElement(r.Z, { focusable: !0 }, o.createElement(l.ZP, { style: t ? h.errorMsgTextWhite : h.errorMsgTextGray }, n)), p ? o.createElement(c.ZP, { onPress: p, style: h.buttonContainer, type: "brandFilled" }, m) : null));
            }
            const h = d.default.create((e) => ({ backgroundImage: { ...d.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...d.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        614425: (e, t, n) => {
            n.d(t, { Y7: () => o });
            const o = n(795897).default;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.immersiveTweetHandler.c0050a0a.js.map
