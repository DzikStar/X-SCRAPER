"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.immersiveTweetHandler"],
    {
        311554: (e, t, n) => {
            n.r(t), n.d(t, { DEFAULT_SCRIBE_NAMESPACE: () => tt, default: () => at, getScribeDataItem: () => nt });
            var a = n(459643),
                i = n(942893),
                o = n(351322),
                r = n(202784),
                s = n(325686),
                l = n(392237),
                c = n(284702),
                d = n(187669),
                u = n(123751),
                p = n(807896),
                b = n(175993),
                m = n(688715),
                h = n(341189),
                S = n(966886),
                w = n(124964),
                y = n(966582),
                g = n(815858),
                v = n(154003),
                C = n(542610),
                A = n(155727),
                f = n(530732),
                E = n(366635),
                D = n(366985),
                _ = n(731708),
                T = n(451051),
                B = n(674132),
                P = n.n(B),
                x = n(894966),
                Z = n(899667),
                I = n(487552),
                k = n(83515),
                M = n(926628),
                L = n(643442),
                N = n(466445),
                O = n(498844),
                V = n(38502),
                F = n(804579),
                H = n(149170),
                $ = n(382880),
                U = n(609927),
                z = n(756632),
                G = n(459284),
                R = n(335636),
                j = n(443781),
                W = n(23134),
                q = n(778955),
                X = n(250165),
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
                    const { isTweetContentHidden: a, setTweetContentHidden: i } = (0, R.V)(),
                        [o, l] = r.useState(!1);
                    r.useEffect(() => {
                        o &&
                            t &&
                            ((e, t) => {
                                t ? e.play() : e.pause();
                            })(t, e);
                    }, [e, t, o]),
                        r.useEffect(() => {
                            i(!1);
                        }, [i, n]),
                        r.useEffect(() => {
                            const e = setTimeout(() => {
                                i(!0);
                            }, 2e3);
                            return function () {
                                clearTimeout(e);
                            };
                        }, [i, n]),
                        o || l(!0);
                    const c = r.useCallback(() => {
                        t && i(!a);
                    }, [t, i, a]);
                    return r.createElement(s.Z, { onClick: c, style: ae.controlsContainer, testID: `immersive-video-controls-${n}` });
                },
                ae = l.default.create((e) => ({ controlsContainer: { width: "100%", height: "100%", display: "flex", flexDirection: "column" } })),
                ie = r.memo(ne),
                oe = te((e) => {
                    const { featureSwitches: t } = r.useContext(j.rC),
                        { analytics: n, getTwitterAuthedHttpClient: a, onPlayerState: i, source: o } = e,
                        s = r.useMemo(() => a(), [a]),
                        l = o?.variants?.map((e) => ({ src: e.url, type: e.content_type })) || [];
                    let c;
                    if (e.cta) {
                        const { type: t, url: n } = e.cta;
                        t && n && (c = { type: t, url: n });
                    }
                    const d = r.useMemo(() => {
                            const e = { scribeContext: { ...n.contextualScribeNamespace }, enableShortFormCompleteLogging: t.isTrue("responsive_web_video_pcomplete_enabled") },
                                a = {
                                    log: (e) => {
                                        const { category: t, data: a, namespace: i } = e;
                                        i?.action && n.scribe({ ...i, data: { ...a, _category_: t } });
                                    },
                                };
                            return new J.Z(a, { log: () => {} }, s, e);
                        }, [n, t, s]),
                        u = r.useCallback(
                            (e) => {
                                i && i(e);
                            },
                            [i],
                        ),
                        p = (e.durationMs ?? 0) < 1e3 * e.maxLoopingThresholdSec ? 2 : 1;
                    return e && e.source ? r.createElement(Y.Z, { analytics: d, "aria-label": e["aria-label"], aspectRatio: e.aspectRatio, basePlayerClass: K.Y7, configType: "static", contentId: e.source.contentId, contentType: "media_entity", cta: c, durationMs: e.durationMs, enableVideoPlayerCaptionRendering: !0, eventId: e.source.eventId, featureProvider: t, geolocationPrompt: e.geolocationPrompt, httpClient: s, includeBroadcastEventAssociation: e.includeBroadcastEventAssociation, intentToPlayTime: e.intentToPlayTime, language: e.userLanguage, loop: e.loop, maxLoopCount: p, onApiReady: e.onSetPlayerApi, onStateUpdate: u, playbackSessionId: e.tweetId, poster: e.poster?.url, precache: !1, requestedTimecode: e.timecode, setPlayerApi: e.setPlayer, size: "fill", variants: l, videoId: e.source.videoId, viewCount: e.viewCount, vmapUrl: e.source.vmapUrl }, ({ playerApi: t, playerState: n }) => r.createElement(ie, { hasFocus: e.hasFocus, playerApi: t, playerState: n, tweetId: e.tweetId || "" })) : r.createElement(r.Fragment, null);
                });
            var re = n(988428);
            const se = P().ia5e7488,
                le = P().hb568af4,
                ce = P().bb1cbeb6,
                de = P().f45bace4,
                ue = P().e674c120,
                pe = P().i86c2940,
                be = P().a83d4280,
                me = P().g0048656,
                he = P().ec6907ba,
                Se = { threshold: [0.98, 0.01] },
                we = { label: se },
                ye = { label: be },
                ge = { label: me },
                ve = r.createElement(x.default, null),
                Ce = r.createElement(Z.default, null),
                Ae = r.createElement(I.default, null),
                fe = { avatarSize: "xLarge" },
                Ee = P().ic1e826e,
                De = P().b89c5a50;
            function _e(e) {
                const { analytics: t, isActiveCreator: n, isNsfwUser: a, isPinned: i, mediaType: o, photo: l, style: c, tweet: u, userCountry: B, userLanguage: P, videoPlayerApi: x, videoPlayerState: Z, videoProps: I } = e,
                    { featureSwitches: H } = r.useContext(j.rC),
                    Y = r.useContext(b.Z),
                    J = H.isTrue("explore_relaunch_enable_immersive_web_navigation_button"),
                    { adjustFocusBy: K, currentIndex: Q, totalItems: ee } = (0, U.Y)(),
                    { forwardPivotInfo: te, hasClosedCaptioning: ne, isMuted: ae, isTweetContentHidden: ie, onMuteToggle: _e, onTweetUpdate: Pe, setBlockedOrMutedEntry: xe, setHasClosedCaptioning: Ze } = (0, R.V)(),
                    Ie = r.useRef(null),
                    [ke, Me] = r.useState(!1),
                    Le = Boolean(x) && Boolean(Z),
                    Ne = Z && (0, re.Ci)(Z);
                (0, d.q)(() => {
                    t.scribe({ element: "tweet", action: "impression" });
                    if ("IntersectionObserver" in window) {
                        const e = new IntersectionObserver((e) => ze(e, Me), Se),
                            t = Ie.current;
                        null != t && e.observe(t);
                        return () => {
                            e.disconnect();
                        };
                    }
                });
                const Oe = u.id_str,
                    Ve = u.user.blocking,
                    Fe = u.user.muting;
                r.useEffect(() => {
                    xe(`tweet-${Oe}`, Ve || Fe || !1);
                }, [Ve, Fe, Oe]),
                    r.useEffect(() => {
                        Le && ae !== Z?.isMuted && (ae ? x?.mute() : x?.unmute());
                    }, [ae, Le, x, Z?.isMuted]),
                    r.useEffect(() => {
                        Le && Ne?.hasCaptions && ne !== Z?.areCaptionsShown && x?.toggleCaptions();
                    }, [Ne?.hasCaptions, ne, Le, x, Z?.areCaptionsShown]);
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
                        x &&
                        x.subscribe((e) => {
                            e.tracksFinished && void 0 !== Q && void 0 !== ee && Q < ee && $e();
                        });
                }, [He, x, K, $e, Q, ee]);
                const Ue = r.useMemo(() => ({ pathname: (0, m.ju)(`https://x.com/${u.user.screen_name || ""}`), state: u.promoted_content ? { promotedTweetState: u.promoted_content } : void 0 }), [u.promoted_content, u.user.screen_name]),
                    ze = (e, t) => {
                        const n = e[0].intersectionRatio >= 0.98;
                        t(n), n && Pe(u);
                    },
                    Ge = r.useCallback(() => {
                        Y && Y.goBack();
                    }, [Y]),
                    Re = r.useCallback(() => {
                        t.scribe({ element: "caret", action: "click" });
                    }, [t]),
                    je = r.useCallback(
                        (e) => {
                            _e(!ae), e?.stopPropagation();
                        },
                        [_e, ae],
                    ),
                    We = r.useCallback(
                        (e, n) => {
                            n === h.Z.HASHTAG ? t.scribe({ element: "hashtag", action: "search" }) : n === h.Z.URL ? t.scribe({ action: "open_link" }) : n === h.Z.TEXT && t.scribe({ element: "tweet", action: "click" });
                        },
                        [t],
                    ),
                    qe = r.useCallback(
                        (e) => {
                            const { height: t } = e.nativeEvent.layout;
                            x?.setCaptionDefaultOffset({ bottom: t });
                        },
                        [x],
                    ),
                    Xe = r.useCallback(
                        (e) => {
                            Ze(!ne), e.stopPropagation();
                        },
                        [Ze, ne],
                    ),
                    Ye = r.useMemo(() => [Te.container, c || void 0], [c]),
                    Je = r.useMemo(() => [Te.button, Te.navigationButtonBottom], []),
                    Ke = r.useMemo(() => [Te.button, Te.navigationButtonTop], []),
                    Qe = r.useMemo(() => [Te.navigationButtonContainer, Te.topNavigationButtonContainer], []),
                    et = r.useMemo(() => ({ label: ae ? ce : le }), [ae]),
                    tt = r.useMemo(() => (ae ? r.createElement(k.default, { testID: `immersive-tweet-unmute-icon-${Oe}` }) : r.createElement(M.default, { testID: `immersive-tweet-mute-icon-${Oe}` })), [ae, Oe]),
                    nt = r.useMemo(() => !!Q && 0 !== Q, [Q]),
                    at = r.useMemo(() => !!ee && ee - 1 !== Q, [ee, Q]),
                    it = r.useCallback(
                        (e) => {
                            K && K(e);
                            const n = -1 === e ? "previous_tweet_button" : "next_tweet_button";
                            t.scribe({ element: n, action: "click" });
                        },
                        [K, t],
                    ),
                    ot = r.useCallback(() => it(-1), [it]),
                    rt = r.useCallback(() => it(1), [it]),
                    st = r.useMemo(() => (Z?.isPlaying ? r.createElement(L.default, { testID: `immersive-tweet-pause-button-${Oe}` }) : r.createElement(N.default, { testID: `immersive-tweet-play-button-${Oe}` })), [Z?.isPlaying, Oe]),
                    lt = r.useMemo(() => ({ label: Z?.areCaptionsShown ? de : ue }), [Z?.areCaptionsShown]),
                    ct = r.useMemo(() => (Ne?.hasCaptions ? (Z?.areCaptionsShown ? r.createElement(V.default, { testID: `immersive-tweet-remove-captions-icon-${Oe}` }) : r.createElement(F.default, { testID: `immersive-tweet-add-captions-icon-${Oe}` })) : r.createElement(O.default, { testID: `immersive-tweet-no-captions-icon-${Oe}` })), [Ne?.hasCaptions, Z?.areCaptionsShown, Oe]),
                    dt = r.useCallback(() => {
                        t.scribe({ element: "avatar", action: "profile_click" });
                    }, [t]),
                    ut = r.useMemo(() => r.createElement(s.Z, { style: Te.screenNameSuffix }, r.createElement(S.Z, { style: Te.relativeTimestamp, timestamp: u.created_at }), r.createElement(w.Z, null), r.createElement(W.C, { isTransparent: !0, promotedContent: u.promoted_content, size: "medium", style: Te.followUserButton, userId: u.user.id_str })), [u.created_at, u.user.id_str, u.promoted_content]),
                    pt = y.Z.isPromoted(u.promoted_content);
                return r.createElement(
                    s.Z,
                    { ref: Ie, style: Ye },
                    r.createElement(
                        s.Z,
                        { style: Te.immersiveBlurContainer },
                        r.createElement(
                            s.Z,
                            { style: Te.mediaContentContainer },
                            (({ featureSwitches: e, hasFocus: t, mediaType: n, photo: a, tweetId: i, userLanguage: o, videoProps: s }) => {
                                const l = { maxLoopingThresholdSec: e.getNumberValue("explore_relaunch_max_video_loop_threshold_sec", 5) };
                                switch (n) {
                                    case "video":
                                    case "animated_gif":
                                        return s ? r.createElement(oe, (0, p.Z)({}, s, l, { hasFocus: t, loop: !0, tweetId: i, userLanguage: o })) : null;
                                    default:
                                        return r.createElement(r.Fragment, null);
                                }
                            })({ mediaType: o, videoProps: I, hasFocus: ke, photo: l, tweetId: Oe, userLanguage: P, featureSwitches: H }),
                        ),
                        r.createElement(
                            s.Z,
                            { style: Te.tweetForegroundContainer },
                            r.createElement(s.Z, { style: Te.tweetTopContent }, J && r.createElement(s.Z, { style: Qe }, r.createElement(g.Z, { duration: "longer", show: !ie, type: "fade" }, r.createElement(v.ZP, { "aria-label": me, disabled: !nt, hoverLabel: ge, icon: Ce, onClick: ot, size: "xSmall", style: Ke, testID: `immersive-tweet-previous-tweet-button-${Oe}`, type: "onMediaDominantColorFilled" }))), r.createElement(v.ZP, { "aria-label": se, hoverLabel: we, icon: ve, onClick: Ge, style: Te.backButton, testID: `immersive-tweet-back-button-${Oe}`, type: "onMediaDominantColorFilled" })),
                            r.createElement(
                                g.Z,
                                { duration: "longer", show: !ie, type: "fade" },
                                r.createElement(
                                    s.Z,
                                    { style: Te.bottomContainer, testID: `immersive-tweet-ui-content-container-${Oe}` },
                                    r.createElement(
                                        s.Z,
                                        { onLayout: qe, style: Te.tweetContentContainer },
                                        Le && r.createElement(s.Z, { style: Te.verticalButtonContainer }, r.createElement(v.ZP, { "aria-label": ae ? ce : le, hoverLabel: et, icon: tt, onClick: je, size: "xSmall", style: Te.button, testID: `immersive-tweet-mute-button-${Oe}`, type: "onMediaDominantColorFilled" }), r.createElement(v.ZP, { "aria-label": Z?.areCaptionsShown ? de : ue, disabled: !Ne?.hasCaptions, hoverLabel: lt, icon: ct, onClick: Xe, size: "xSmall", style: Te.button, testID: `immersive-tweet-closed-captioning-button-${Oe}`, type: "onMediaDominantColorFilled" })),
                                        !!x && r.createElement(s.Z, { style: Te.scrubberContainerWithPlayButton }, r.createElement(v.ZP, { "aria-label": Z?.isPlaying ? De : Ee, icon: st, onClick: Z?.isPlaying ? x?.pause : x?.play, size: "medium", style: Te.playPauseButton, type: "onMediaText" }), r.createElement(s.Z, { style: Te.scrubberFlexContainer }, r.createElement(C.Z, { "aria-label": pe, currentTime: Ne ? (0, re.Ot)(Ne) || 0 : void 0, duration: Ne ? (0, re.MU)(Ne) : void 0, isScrubbing: !!Z?.isScrubbing && Z.isScrubbing, isSeeking: !!Z?.isSeeking && Z.isSeeking, playerApi: x }))),
                                        r.createElement(s.Z, { style: Te.userInfoContainer }, r.createElement(s.Z, null, r.createElement(A.Z.Provider, { value: fe }, r.createElement(z.Z, { onClick: dt, promotedContent: u.promoted_content, screenName: u.user.screen_name, uri: u.user.profile_image_url_https, userId: u.user.id_str, withLink: !0 }))), r.createElement(s.Z, { style: Te.userNameContainer }, r.createElement(f.Z, { link: Ue }, r.createElement(E.Z, { color: "white", isBlueVerified: u.user.is_blue_verified, isVerified: u.user.verified, name: u.user.name, screenName: u.user.screen_name, screenNameSize: "body", screenNameSuffix: ut, weight: "bold", withName: !0, withScreenName: !0, withStackedLayout: !0 }))), r.createElement(s.Z, { style: Te.promotedLabel }, pt ? r.createElement(D.j, { tweet: u }, ([e]) => (e ? r.createElement(_.ZP, { "aria-label": e.promotedLabel, color: "gray700", testID: "immersive-tweet-ad-label" }, he) : null)) : null), r.createElement(s.Z, { style: Te.tweetActionMenuContainer }, r.createElement(X.g, { downloadLink: I?.source.downloadLink }, r.createElement(G.Z, { isActiveCreator: n || !1, isNsfwUser: a || !1, isPinned: i, menuControlProps: Be, onMenuClick: Re, promotedContent: u.promoted_content, tweet: u, userCountry: B, userLanguage: P, withMuteConversation: !1 })))),
                                        r.createElement(s.Z, { style: Te.tweetTextContainer }, r.createElement(T.Z, { displayTextRange: u.display_text_range, entities: u.entities, lang: u.lang, link: u.permalink, linkify: !0, numberOfLines: 5, onEntityClick: We, style: Te.tweetText, testID: `immersive-tweet-text-${Oe}`, text: u.text })),
                                    ),
                                    r.createElement(s.Z, { style: Te.tweetActionsBarContainer }, r.createElement(s.Z, { style: Te.primaryTweetActionsContainer }, r.createElement(q.Z, { activeColor: "white", allowBookmarkInActionsBar: !0, color: "white", forwardPivotInfo: u.softIntervention || te, style: Te.actionsBar, tweet: u, withAnalyticsAction: !0, withCount: !0 }))),
                                    J && r.createElement(s.Z, { style: Te.navigationButtonContainer }, r.createElement(v.ZP, { "aria-label": be, disabled: !at, hoverLabel: ye, icon: Ae, onClick: rt, size: "xSmall", style: Je, testID: `immersive-tweet-next-tweet-button-${Oe}`, type: "onMediaDominantColorFilled" })),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const Te = l.default.create((e) => ({
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
                Be = { withDarkBackground: !1, style: Te.overflowMenuIcon, Icon: () => r.createElement(H.default, { color: "white", size: "large" }) };
            var Pe = n(499627),
                xe = n(312771);
            const Ze = "immersiveViewer",
                Ie = "rweb.immersiveViewer",
                ke = Object.freeze({ SETTINGS_LOADED: "rweb/immersiveViewer/SETTINGS_LOADED" }),
                Me = Object.freeze({ fetchStatus: xe.ZP.NONE, mobileViewCount: 0 }),
                Le = (e) => e[Ze].mobileViewCount,
                Ne =
                    () =>
                    (e, t, { userPersistence: n }) =>
                        n.get(Ie).then((e) => {
                            const t = e?.mobileViewCount || 0;
                            n.set(Ie, { mobileViewCount: (t || 0) + 1 });
                        });
            Pe.Z.register(
                { [Ze]: (e = Me, t) => (t && t.type === ke.SETTINGS_LOADED ? { ...e, fetchStatus: xe.ZP.LOADED, ...t.payload } : e) },
                () =>
                    (e, t, { userPersistence: n }) =>
                        n.get(Ie).then((t) => {
                            e({ payload: { mobileViewCount: t?.mobileViewCount || 0 }, type: ke.SETTINGS_LOADED });
                        }),
            );
            var Oe = n(80890),
                Ve = n(390387),
                Fe = n(38562),
                He = n(836255),
                $e = n(919022);
            const Ue = (e, t) => t.entry.content.id,
                ze = (e, t) => (0, Oe.MW)(e, t.entry.content.id),
                Ge = (e, t) => t.entry.content.promotedMetadata,
                Re = (e, t) => {
                    const n = t.entry.content.promotedMetadata;
                    return n ? $e.ZP.select(e, n.advertiserId) : null;
                },
                je = (e, { urtAdvertiser: t, urtPromotedContent: n }) => {
                    if (e && n) {
                        const a = e.promoted_content;
                        return { ...e, promoted_content: { adMetadataContainer: n.adMetadataContainer, disclosure_type: n.disclosureType, experiment_values: n.experimentValues, impression_id: n.impressionId, advertiser: t ? { id_str: t.id_str } : void 0, advertiser_name: t?.name || void 0, click_tracking_info: n.clickTrackingInfo, ...a } };
                    }
                    return e;
                },
                We = (0, Q.Z)()
                    .propsFromState(() => ({ tweet: He.Z.createHydratedTweetSelector(Ue), isActiveCreator: Ve.WM, isNsfwUser: Fe.EF, isPinned: ze, onboardingMobileViewCount: Le, userCountry: Ve.GG, userLanguage: Ve.VT, urtAdvertiser: Re, urtPromotedContent: Ge }))
                    .adjustStateProps((e) => {
                        const { tweet: t, urtAdvertiser: n, urtPromotedContent: a, ...i } = e;
                        return { tweet: je(t, { urtPromotedContent: a, urtAdvertiser: n }), ...i };
                    })
                    .propsFromActions(() => ({ immersiveViewerOnboardingViewed: Ne }))
                    .withAnalytics({ page: "gallery", section: "immersive" }),
                qe = l.default.supports("height: 100dvh"),
                Xe = Object.freeze({ VIDEO: "video", PHOTO: "photo", GIF: "animated_gif", TEXT: "text" }),
                Ye = (e) => {
                    const t = e.extended_entities?.media?.find((e) => e.type === Xe.VIDEO);
                    return t && t.type !== Xe.PHOTO ? t : null;
                },
                Je = (e) => {
                    const t = e.extended_entities?.media?.find((e) => e.type === Xe.PHOTO);
                    return t && t.type === Xe.PHOTO ? t : null;
                },
                Ke = (e) =>
                    e
                        ? Ye(e)
                            ? Xe.VIDEO
                            : Je(e)
                              ? Xe.PHOTO
                              : ((e) => {
                                      const t = e.extended_entities?.media?.find((e) => e.type === Xe.GIF);
                                      return t && t.type !== Xe.PHOTO ? t : null;
                                  })(e)
                                ? Xe.GIF
                                : Xe.TEXT
                        : Xe.TEXT,
                Qe = ({ analytics: e, immersiveViewerOnboardingViewed: t, isActiveCreator: n, isNsfwUser: a, isPinned: i, onboardingMobileViewCount: o, tweet: l, userCountry: p, userLanguage: b }) => {
                    const m = l ? Ye(l) : null,
                        h = l ? Je(l) : null,
                        [S, w] = r.useState(),
                        [y, g] = r.useState(),
                        [v, C] = r.useState(window.innerHeight);
                    (0, d.q)(() => {
                        window.addEventListener("resize", () => {
                            C(window.innerHeight);
                        });
                    });
                    const A = u.Z.forTweet(l ? l.id_str : ""),
                        f = m
                            ? {
                                  onPlayerState: (e) => {
                                      g(e);
                                  },
                                  onSetPlayerApi: (e) => {
                                      w(e);
                                  },
                                  ...c.Z.extractVideoProps(A, m, void 0),
                              }
                            : void 0,
                        E = r.useMemo(() => Ke(l), [l]),
                        D = r.useMemo(() => ({ height: qe ? "100dvh" : `${v}px`, maxHeight: qe ? "100dvh" : `${v}px`, userSelect: "none" }), [v]);
                    return l ? r.createElement(s.Z, { style: D }, r.createElement(_e, { analytics: e, isActiveCreator: n, isNsfwUser: a, isPinned: i, mediaType: E, photo: h, tweet: l, userCountry: p, userLanguage: b, videoPlayerApi: S, videoPlayerState: y, videoProps: f })) : null;
                },
                et = We(r.memo(Qe)),
                tt = { component: "tweet" },
                nt = (e) => i.Z.getTweetURTEntryItem(e),
                at = (e) => o.iH({ component: et, defaultScribeNamespace: tt, isFocusable: (0, a.Z)(!0), getScribeDataItem: nt }).getHandler();
        },
        459284: (e, t, n) => {
            n.d(t, { Z: () => a });
            n(202784);
            const a = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.29"),
                        n.e("icons.5"),
                        n.e("icons.1"),
                        n.e("icons.11"),
                        n.e("icons.6"),
                        n.e("icons.16"),
                        n.e("icons.26"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-209b0896"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ce92c4ef"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                        n.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        n.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                        n.e("loader.TweetCurationActionMenu-a2dee9c7"),
                        n.e("loader.TweetCurationActionMenu-b7da5e41"),
                        n.e("loader.TweetCurationActionMenu-e019dbda"),
                        n.e("loader.TweetCurationActionMenu-acb640be"),
                    ]).then(n.bind(n, 472513)),
            });
        },
        80890: (e, t, n) => {
            n.d(t, { Yd: () => p, MW: () => m, oc: () => b });
            var a = n(265617),
                i = n(988566),
                o = n(466015),
                r = n(917799),
                s = n(195250),
                l = n(919022);
            const c = "rweb/pinnedTweets",
                d = r.dg(c, "PIN"),
                u = r.dg(c, "UNPIN"),
                p =
                    (e) =>
                    (t, n, { api: c, featureSwitches: u }) =>
                        r
                            .AB(t, { params: { id: e }, request: c.withEndpoint(a.ZP).pin })({ actionTypes: d, context: "ACTION_PIN_TWEET", meta: { tweetId: e } }, (a) => {
                                const r = l.ZP.selectViewerUser(n());
                                if (void 0 === r) return;
                                const c = r.id_str,
                                    d = r.pinned_tweet_ids_str && r.pinned_tweet_ids_str[0];
                                t(l.ZP.patchUser(c, { pinned_tweet_ids_str: [e] }));
                                const p = (0, s.ZP)(u, c, "default");
                                return [...(d ? [p.removeTweets({ [d]: !0 }), p.injectEntry(o.Se({ id: d, sortIndex: d }), { atTop: !1 })] : []), p.removeTweets({ [e]: !0 }), p.injectEntry(o.Se({ id: e, content: { socialContext: { generalContext: i.Iv } }, sortIndex: "NOT_USED" }))];
                            })
                            .then((e) => {
                                const t = e.pin_tweet?.added_tweet_to_highlights;
                                return { addedToHighlights: t };
                            }),
                b =
                    (e) =>
                    (t, n, { api: i, featureSwitches: c }) =>
                        r.AB(t, { params: { id: e }, request: i.withEndpoint(a.ZP).unpin })({ actionTypes: u, context: "ACTION_UNPIN_TWEET", meta: { tweetId: e } }, (a) => {
                            const i = l.ZP.selectViewerUser(n());
                            if (void 0 === i) return;
                            const r = i.id_str;
                            return t(l.ZP.patchUser(r, { pinned_tweet_ids_str: [] })), [(0, s.ZP)(c, r, "default").removeTweets({ [e]: !0 }), (0, s.ZP)(c, r, "default").injectEntry(o.Se({ id: e, sortIndex: e }), { atTop: !1 })];
                        }),
                m = (e, t) => {
                    const n = l.ZP.selectViewerUser(e);
                    return !!n?.pinned_tweet_ids_str && n.pinned_tweet_ids_str[0] === t;
                };
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                i = n(325686),
                o = n(235902),
                r = n(885015),
                s = n(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: l } = o.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return n ? a.createElement(r.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(i.Z, { style: c.gapColumn }, a.createElement(i.Z, { style: [c.gap, d] })), a.createElement(i.Z, { style: c.gapText }, n), a.createElement(i.Z, { style: c.gapColumn }, a.createElement(i.Z, { style: [c.gap, d] }))) : a.createElement(i.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(807896),
                i = n(202784),
                o = n(325686),
                r = n(392237);
            class s extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...r } = this.props,
                        s = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, l.column, n && l.withGutterColumn] }));
                    return i.createElement(o.Z, (0, a.Z)({ style: [t, l.root, n && l.withGutter] }, r), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const l = r.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        542610: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(202784),
                i = n(674132),
                o = n.n(i),
                r = n(2138),
                s = n(173739),
                l = n(424713);
            const c = o().f06f2e53;
            class d extends a.PureComponent {
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
                        i = this.state.isScrubbing || this.props.isSeeking ? this.state.scrubTo : t;
                    if ("number" == typeof i && "number" == typeof n && n > 0) {
                        const t = (0, l.mr)(i),
                            o = (0, l.mr)(n);
                        return a.createElement(s.Z, { accessibilityLabelValueText: c({ currentTime: t, durationTime: o }), "aria-label": e, color: "white", keepLTR: !0, keyboardStep: 5, max: n, min: 0, onActive: this._handleActive, onChange: this._handleChange, step: "any", value: i, withHidingThumb: !0 });
                    }
                    return null;
                }
            }
            const u = d;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.immersiveTweetHandler.1221a38a.js.map
