"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.immersiveTweetHandler"],
    {
        311554: (e, t, a) => {
            a.r(t), a.d(t, { DEFAULT_SCRIBE_NAMESPACE: () => tt, default: () => nt, getScribeDataItem: () => at });
            var n = a(459643),
                i = a(942893),
                o = a(351322),
                r = a(202784),
                s = a(325686),
                l = a(392237),
                c = a(284702),
                d = a(187669),
                u = a(123751),
                p = a(807896),
                b = a(175993),
                m = a(688715),
                h = a(341189),
                w = a(966886),
                S = a(124964),
                y = a(966582),
                g = a(815858),
                v = a(154003),
                C = a(542610),
                f = a(155727),
                A = a(530732),
                E = a(366635),
                D = a(366985),
                _ = a(731708),
                T = a(451051),
                B = a(674132),
                x = a.n(B),
                P = a(894966),
                Z = a(899667),
                I = a(487552),
                k = a(83515),
                M = a(926628),
                L = a(643442),
                N = a(466445),
                O = a(498844),
                V = a(38502),
                F = a(804579),
                H = a(149170),
                $ = a(382880),
                U = a(609927),
                z = a(756632),
                G = a(459284),
                j = a(335636),
                R = a(443781),
                W = a(23134),
                q = a(778955),
                X = a(250165),
                Y = a(738584),
                J = a(907187),
                K = a(614425),
                Q = a(668214);
            const ee =
                    () =>
                    (e, t, { api: a }) =>
                        a.getHttpClient(),
                te = (0, Q.Z)()
                    .propsFromActions(() => ({ getTwitterAuthedHttpClient: ee }))
                    .withAnalytics(),
                ae = ({ hasFocus: e, playerApi: t, tweetId: a }) => {
                    const { isTweetContentHidden: n, setTweetContentHidden: i } = (0, j.V)(),
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
                        }, [i, a]),
                        r.useEffect(() => {
                            const e = setTimeout(() => {
                                i(!0);
                            }, 2e3);
                            return function () {
                                clearTimeout(e);
                            };
                        }, [i, a]),
                        o || l(!0);
                    const c = r.useCallback(() => {
                        t && i(!n);
                    }, [t, i, n]);
                    return r.createElement(s.Z, { onClick: c, style: ne.controlsContainer, testID: `immersive-video-controls-${a}` });
                },
                ne = l.default.create((e) => ({ controlsContainer: { width: "100%", height: "100%", display: "flex", flexDirection: "column" } })),
                ie = r.memo(ae),
                oe = te((e) => {
                    const { featureSwitches: t } = r.useContext(R.rC),
                        { analytics: a, getTwitterAuthedHttpClient: n, onPlayerState: i, source: o } = e,
                        s = r.useMemo(() => n(), [n]),
                        l = o?.variants?.map((e) => ({ src: e.url, type: e.content_type })) || [];
                    let c;
                    if (e.cta) {
                        const { type: t, url: a } = e.cta;
                        t && a && (c = { type: t, url: a });
                    }
                    const d = r.useMemo(() => {
                            const e = { scribeContext: { ...a.contextualScribeNamespace }, enableShortFormCompleteLogging: t.isTrue("responsive_web_video_pcomplete_enabled") },
                                n = {
                                    log: (e) => {
                                        const { category: t, data: n, namespace: i } = e;
                                        i?.action && a.scribe({ ...i, data: { ...n, _category_: t } });
                                    },
                                };
                            return new J.Z(n, { log: () => {} }, s, e);
                        }, [a, t, s]),
                        u = r.useCallback(
                            (e) => {
                                i && i(e);
                            },
                            [i],
                        ),
                        p = (e.durationMs ?? 0) < 1e3 * e.maxLoopingThresholdSec ? 2 : 1;
                    return e && e.source ? r.createElement(Y.Z, { analytics: d, "aria-label": e["aria-label"], aspectRatio: e.aspectRatio, basePlayerClass: K.Y7, configType: "static", contentId: e.source.contentId, contentType: "media_entity", cta: c, durationMs: e.durationMs, enableVideoPlayerCaptionRendering: !0, eventId: e.source.eventId, featureProvider: t, geolocationPrompt: e.geolocationPrompt, httpClient: s, includeBroadcastEventAssociation: e.includeBroadcastEventAssociation, intentToPlayTime: e.intentToPlayTime, language: e.userLanguage, loop: e.loop, maxLoopCount: p, onApiReady: e.onSetPlayerApi, onStateUpdate: u, playbackSessionId: e.tweetId, poster: e.poster?.url, precache: !1, requestedTimecode: e.timecode, setPlayerApi: e.setPlayer, size: "fill", variants: l, videoId: e.source.videoId, viewCount: e.viewCount, vmapUrl: e.source.vmapUrl }, ({ playerApi: t, playerState: a }) => r.createElement(ie, { hasFocus: e.hasFocus, playerApi: t, playerState: a, tweetId: e.tweetId || "" })) : r.createElement(r.Fragment, null);
                });
            var re = a(988428);
            const se = x().ia5e7488,
                le = x().hb568af4,
                ce = x().bb1cbeb6,
                de = x().f45bace4,
                ue = x().e674c120,
                pe = x().i86c2940,
                be = x().a83d4280,
                me = x().g0048656,
                he = x().ec6907ba,
                we = { threshold: [0.98, 0.01] },
                Se = { label: se },
                ye = { label: be },
                ge = { label: me },
                ve = r.createElement(P.default, null),
                Ce = r.createElement(Z.default, null),
                fe = r.createElement(I.default, null),
                Ae = { avatarSize: "xLarge" },
                Ee = x().ic1e826e,
                De = x().b89c5a50;
            function _e(e) {
                const { analytics: t, isActiveCreator: a, isNsfwUser: n, isPinned: i, mediaType: o, photo: l, style: c, tweet: u, userCountry: B, userLanguage: x, videoPlayerApi: P, videoPlayerState: Z, videoProps: I } = e,
                    { featureSwitches: H } = r.useContext(R.rC),
                    Y = r.useContext(b.Z),
                    J = H.isTrue("explore_relaunch_enable_immersive_web_navigation_button"),
                    { adjustFocusBy: K, currentIndex: Q, totalItems: ee } = (0, U.Y)(),
                    { forwardPivotInfo: te, hasClosedCaptioning: ae, isMuted: ne, isTweetContentHidden: ie, onMuteToggle: _e, onTweetUpdate: xe, setBlockedOrMutedEntry: Pe, setHasClosedCaptioning: Ze } = (0, j.V)(),
                    Ie = r.useRef(null),
                    [ke, Me] = r.useState(!1),
                    Le = Boolean(P) && Boolean(Z),
                    Ne = Z && (0, re.Ci)(Z);
                (0, d.q)(() => {
                    t.scribe({ element: "tweet", action: "impression" });
                    if ("IntersectionObserver" in window) {
                        const e = new IntersectionObserver((e) => ze(e, Me), we),
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
                    Pe(`tweet-${Oe}`, Ve || Fe || !1);
                }, [Ve, Fe, Oe]),
                    r.useEffect(() => {
                        Le && ne !== Z?.isMuted && (ne ? P?.mute() : P?.unmute());
                    }, [ne, Le, P, Z?.isMuted]),
                    r.useEffect(() => {
                        Le && Ne?.hasCaptions && ae !== Z?.areCaptionsShown && P?.toggleCaptions();
                    }, [Ne?.hasCaptions, ae, Le, P, Z?.areCaptionsShown]);
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
                        P &&
                        P.subscribe((e) => {
                            e.tracksFinished && void 0 !== Q && void 0 !== ee && Q < ee && $e();
                        });
                }, [He, P, K, $e, Q, ee]);
                const Ue = r.useMemo(() => ({ pathname: (0, m.ju)(`https://x.com/${u.user.screen_name || ""}`), state: u.promoted_content ? { promotedTweetState: u.promoted_content } : void 0 }), [u.promoted_content, u.user.screen_name]),
                    ze = (e, t) => {
                        const a = e[0].intersectionRatio >= 0.98;
                        t(a), a && xe(u);
                    },
                    Ge = r.useCallback(() => {
                        Y && Y.goBack();
                    }, [Y]),
                    je = r.useCallback(() => {
                        t.scribe({ element: "caret", action: "click" });
                    }, [t]),
                    Re = r.useCallback(
                        (e) => {
                            _e(!ne), e?.stopPropagation();
                        },
                        [_e, ne],
                    ),
                    We = r.useCallback(
                        (e, a) => {
                            a === h.Z.HASHTAG ? t.scribe({ element: "hashtag", action: "search" }) : a === h.Z.URL ? t.scribe({ action: "open_link" }) : a === h.Z.TEXT && t.scribe({ element: "tweet", action: "click" });
                        },
                        [t],
                    ),
                    qe = r.useCallback(
                        (e) => {
                            const { height: t } = e.nativeEvent.layout;
                            P?.setCaptionDefaultOffset({ bottom: t });
                        },
                        [P],
                    ),
                    Xe = r.useCallback(
                        (e) => {
                            Ze(!ae), e.stopPropagation();
                        },
                        [Ze, ae],
                    ),
                    Ye = r.useMemo(() => [Te.container, c || void 0], [c]),
                    Je = r.useMemo(() => [Te.button, Te.navigationButtonBottom], []),
                    Ke = r.useMemo(() => [Te.button, Te.navigationButtonTop], []),
                    Qe = r.useMemo(() => [Te.navigationButtonContainer, Te.topNavigationButtonContainer], []),
                    et = r.useMemo(() => ({ label: ne ? ce : le }), [ne]),
                    tt = r.useMemo(() => (ne ? r.createElement(k.default, { testID: `immersive-tweet-unmute-icon-${Oe}` }) : r.createElement(M.default, { testID: `immersive-tweet-mute-icon-${Oe}` })), [ne, Oe]),
                    at = r.useMemo(() => !!Q && 0 !== Q, [Q]),
                    nt = r.useMemo(() => !!ee && ee - 1 !== Q, [ee, Q]),
                    it = r.useCallback(
                        (e) => {
                            K && K(e);
                            const a = -1 === e ? "previous_tweet_button" : "next_tweet_button";
                            t.scribe({ element: a, action: "click" });
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
                    ut = r.useMemo(() => r.createElement(s.Z, { style: Te.screenNameSuffix }, r.createElement(w.Z, { style: Te.relativeTimestamp, timestamp: u.created_at }), r.createElement(S.Z, null), r.createElement(W.C, { isTransparent: !0, promotedContent: u.promoted_content, size: "medium", style: Te.followUserButton, userId: u.user.id_str })), [u.created_at, u.user.id_str, u.promoted_content]),
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
                            (({ featureSwitches: e, hasFocus: t, mediaType: a, photo: n, tweetId: i, userLanguage: o, videoProps: s }) => {
                                const l = { maxLoopingThresholdSec: e.getNumberValue("explore_relaunch_max_video_loop_threshold_sec", 5) };
                                switch (a) {
                                    case "video":
                                    case "animated_gif":
                                        return s ? r.createElement(oe, (0, p.Z)({}, s, l, { hasFocus: t, loop: !0, tweetId: i, userLanguage: o })) : null;
                                    default:
                                        return r.createElement(r.Fragment, null);
                                }
                            })({ mediaType: o, videoProps: I, hasFocus: ke, photo: l, tweetId: Oe, userLanguage: x, featureSwitches: H }),
                        ),
                        r.createElement(
                            s.Z,
                            { style: Te.tweetForegroundContainer },
                            r.createElement(s.Z, { style: Te.tweetTopContent }, J && r.createElement(s.Z, { style: Qe }, r.createElement(g.Z, { duration: "longer", show: !ie, type: "fade" }, r.createElement(v.ZP, { "aria-label": me, disabled: !at, hoverLabel: ge, icon: Ce, onClick: ot, size: "xSmall", style: Ke, testID: `immersive-tweet-previous-tweet-button-${Oe}`, type: "onMediaDominantColorFilled" }))), r.createElement(v.ZP, { "aria-label": se, hoverLabel: Se, icon: ve, onClick: Ge, style: Te.backButton, testID: `immersive-tweet-back-button-${Oe}`, type: "onMediaDominantColorFilled" })),
                            r.createElement(
                                g.Z,
                                { duration: "longer", show: !ie, type: "fade" },
                                r.createElement(
                                    s.Z,
                                    { style: Te.bottomContainer, testID: `immersive-tweet-ui-content-container-${Oe}` },
                                    r.createElement(
                                        s.Z,
                                        { onLayout: qe, style: Te.tweetContentContainer },
                                        Le && r.createElement(s.Z, { style: Te.verticalButtonContainer }, r.createElement(v.ZP, { "aria-label": ne ? ce : le, hoverLabel: et, icon: tt, onClick: Re, size: "xSmall", style: Te.button, testID: `immersive-tweet-mute-button-${Oe}`, type: "onMediaDominantColorFilled" }), r.createElement(v.ZP, { "aria-label": Z?.areCaptionsShown ? de : ue, disabled: !Ne?.hasCaptions, hoverLabel: lt, icon: ct, onClick: Xe, size: "xSmall", style: Te.button, testID: `immersive-tweet-closed-captioning-button-${Oe}`, type: "onMediaDominantColorFilled" })),
                                        !!P && r.createElement(s.Z, { style: Te.scrubberContainerWithPlayButton }, r.createElement(v.ZP, { "aria-label": Z?.isPlaying ? De : Ee, icon: st, onClick: Z?.isPlaying ? P?.pause : P?.play, size: "medium", style: Te.playPauseButton, type: "onMediaText" }), r.createElement(s.Z, { style: Te.scrubberFlexContainer }, r.createElement(C.Z, { "aria-label": pe, currentTime: Ne ? (0, re.Ot)(Ne) || 0 : void 0, duration: Ne ? (0, re.MU)(Ne) : void 0, isScrubbing: !!Z?.isScrubbing && Z.isScrubbing, isSeeking: !!Z?.isSeeking && Z.isSeeking, playerApi: P }))),
                                        r.createElement(s.Z, { style: Te.userInfoContainer }, r.createElement(s.Z, null, r.createElement(f.Z.Provider, { value: Ae }, r.createElement(z.Z, { onClick: dt, promotedContent: u.promoted_content, screenName: u.user.screen_name, uri: u.user.profile_image_url_https, userId: u.user.id_str, withLink: !0 }))), r.createElement(s.Z, { style: Te.userNameContainer }, r.createElement(A.Z, { link: Ue }, r.createElement(E.Z, { color: "white", isBlueVerified: u.user.is_blue_verified, isVerified: u.user.verified, name: u.user.name, screenName: u.user.screen_name, screenNameSize: "body", screenNameSuffix: ut, weight: "bold", withName: !0, withScreenName: !0, withStackedLayout: !0 }))), r.createElement(s.Z, { style: Te.promotedLabel }, pt ? r.createElement(D.j, { tweet: u }, ([e]) => (e ? r.createElement(_.ZP, { "aria-label": e.promotedLabel, color: "gray700", testID: "immersive-tweet-ad-label" }, he) : null)) : null), r.createElement(s.Z, { style: Te.tweetActionMenuContainer }, r.createElement(X.g, { downloadLink: I?.source.downloadLink }, r.createElement(G.Z, { isActiveCreator: a || !1, isNsfwUser: n || !1, isPinned: i, menuControlProps: Be, onMenuClick: je, promotedContent: u.promoted_content, tweet: u, userCountry: B, userLanguage: x, withMuteConversation: !1 })))),
                                        r.createElement(s.Z, { style: Te.tweetTextContainer }, r.createElement(T.Z, { displayTextRange: u.display_text_range, entities: u.entities, lang: u.lang, link: u.permalink, linkify: !0, numberOfLines: 5, onEntityClick: We, style: Te.tweetText, testID: `immersive-tweet-text-${Oe}`, text: u.text })),
                                    ),
                                    r.createElement(s.Z, { style: Te.tweetActionsBarContainer }, r.createElement(s.Z, { style: Te.primaryTweetActionsContainer }, r.createElement(q.Z, { activeColor: "white", allowBookmarkInActionsBar: !0, color: "white", forwardPivotInfo: u.softIntervention || te, style: Te.actionsBar, tweet: u, withAnalyticsAction: !0, withCount: !0 }))),
                                    J && r.createElement(s.Z, { style: Te.navigationButtonContainer }, r.createElement(v.ZP, { "aria-label": be, disabled: !nt, hoverLabel: ye, icon: fe, onClick: rt, size: "xSmall", style: Je, testID: `immersive-tweet-next-tweet-button-${Oe}`, type: "onMediaDominantColorFilled" })),
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
            var xe = a(499627),
                Pe = a(312771);
            const Ze = "immersiveViewer",
                Ie = "rweb.immersiveViewer",
                ke = Object.freeze({ SETTINGS_LOADED: "rweb/immersiveViewer/SETTINGS_LOADED" }),
                Me = Object.freeze({ fetchStatus: Pe.ZP.NONE, mobileViewCount: 0 }),
                Le = (e) => e[Ze].mobileViewCount,
                Ne =
                    () =>
                    (e, t, { userPersistence: a }) =>
                        a.get(Ie).then((e) => {
                            const t = e?.mobileViewCount || 0;
                            a.set(Ie, { mobileViewCount: (t || 0) + 1 });
                        });
            xe.Z.register(
                { [Ze]: (e = Me, t) => (t && t.type === ke.SETTINGS_LOADED ? { ...e, fetchStatus: Pe.ZP.LOADED, ...t.payload } : e) },
                () =>
                    (e, t, { userPersistence: a }) =>
                        a.get(Ie).then((t) => {
                            e({ payload: { mobileViewCount: t?.mobileViewCount || 0 }, type: ke.SETTINGS_LOADED });
                        }),
            );
            var Oe = a(80890),
                Ve = a(390387),
                Fe = a(38562),
                He = a(836255),
                $e = a(919022);
            const Ue = (e, t) => t.entry.content.id,
                ze = (e, t) => (0, Oe.MW)(e, t.entry.content.id),
                Ge = (e, t) => t.entry.content.promotedMetadata,
                je = (e, t) => {
                    const a = t.entry.content.promotedMetadata;
                    return a ? $e.ZP.select(e, a.advertiserId) : null;
                },
                Re = (e, { urtAdvertiser: t, urtPromotedContent: a }) => {
                    if (e && a) {
                        const n = e.promoted_content;
                        return { ...e, promoted_content: { adMetadataContainer: a.adMetadataContainer, disclosure_type: a.disclosureType, experiment_values: a.experimentValues, impression_id: a.impressionId, advertiser: t ? { id_str: t.id_str } : void 0, advertiser_name: t?.name || void 0, click_tracking_info: a.clickTrackingInfo, ...n } };
                    }
                    return e;
                },
                We = (0, Q.Z)()
                    .propsFromState(() => ({ tweet: He.Z.createHydratedTweetSelector(Ue), isActiveCreator: Ve.WM, isNsfwUser: Fe.EF, isPinned: ze, onboardingMobileViewCount: Le, userCountry: Ve.GG, userLanguage: Ve.VT, urtAdvertiser: je, urtPromotedContent: Ge }))
                    .adjustStateProps((e) => {
                        const { tweet: t, urtAdvertiser: a, urtPromotedContent: n, ...i } = e;
                        return { tweet: Re(t, { urtPromotedContent: n, urtAdvertiser: a }), ...i };
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
                Qe = ({ analytics: e, immersiveViewerOnboardingViewed: t, isActiveCreator: a, isNsfwUser: n, isPinned: i, onboardingMobileViewCount: o, tweet: l, userCountry: p, userLanguage: b }) => {
                    const m = l ? Ye(l) : null,
                        h = l ? Je(l) : null,
                        [w, S] = r.useState(),
                        [y, g] = r.useState(),
                        [v, C] = r.useState(window.innerHeight);
                    (0, d.q)(() => {
                        window.addEventListener("resize", () => {
                            C(window.innerHeight);
                        });
                    });
                    const f = u.Z.forTweet(l ? l.id_str : ""),
                        A = m
                            ? {
                                  onPlayerState: (e) => {
                                      g(e);
                                  },
                                  onSetPlayerApi: (e) => {
                                      S(e);
                                  },
                                  ...c.Z.extractVideoProps(f, m, void 0),
                              }
                            : void 0,
                        E = r.useMemo(() => Ke(l), [l]),
                        D = r.useMemo(() => ({ height: qe ? "100dvh" : `${v}px`, maxHeight: qe ? "100dvh" : `${v}px`, userSelect: "none" }), [v]);
                    return l ? r.createElement(s.Z, { style: D }, r.createElement(_e, { analytics: e, isActiveCreator: a, isNsfwUser: n, isPinned: i, mediaType: E, photo: h, tweet: l, userCountry: p, userLanguage: b, videoPlayerApi: w, videoPlayerState: y, videoProps: A })) : null;
                },
                et = We(r.memo(Qe)),
                tt = { component: "tweet" },
                at = (e) => i.Z.getTweetURTEntryItem(e),
                nt = (e) => o.iH({ component: et, defaultScribeNamespace: tt, isFocusable: (0, n.Z)(!0), getScribeDataItem: at }).getHandler();
        },
        459284: (e, t, a) => {
            a.d(t, { Z: () => n });
            a(202784);
            const n = (0, a(523561).Z)({
                loader: () =>
                    Promise.all([
                        a.e("icons.20"),
                        a.e("icons.24"),
                        a.e("icons.12"),
                        a.e("icons.29"),
                        a.e("icons.22"),
                        a.e("icons.7"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7af5e2f7"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aeee0c9e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                        a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        a.e("loader.TweetCurationActionMenu-e96e9bea"),
                        a.e("loader.TweetCurationActionMenu-b7da5e41"),
                        a.e("loader.TweetCurationActionMenu-e019dbda"),
                        a.e("loader.TweetCurationActionMenu-acb640be"),
                    ]).then(a.bind(a, 472513)),
            });
        },
        80890: (e, t, a) => {
            a.d(t, { Yd: () => p, MW: () => m, oc: () => b });
            var n = a(265617),
                i = a(988566),
                o = a(466015),
                r = a(917799),
                s = a(195250),
                l = a(919022);
            const c = "rweb/pinnedTweets",
                d = r.dg(c, "PIN"),
                u = r.dg(c, "UNPIN"),
                p =
                    (e) =>
                    (t, a, { api: c, featureSwitches: u }) =>
                        r
                            .AB(t, { params: { id: e }, request: c.withEndpoint(n.ZP).pin })({ actionTypes: d, context: "ACTION_PIN_TWEET", meta: { tweetId: e } }, (n) => {
                                const r = l.ZP.selectViewerUser(a());
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
                    (t, a, { api: i, featureSwitches: c }) =>
                        r.AB(t, { params: { id: e }, request: i.withEndpoint(n.ZP).unpin })({ actionTypes: u, context: "ACTION_UNPIN_TWEET", meta: { tweetId: e } }, (n) => {
                            const i = l.ZP.selectViewerUser(a());
                            if (void 0 === i) return;
                            const r = i.id_str;
                            return t(l.ZP.patchUser(r, { pinned_tweet_ids_str: [] })), [(0, s.ZP)(c, r, "default").removeTweets({ [e]: !0 }), (0, s.ZP)(c, r, "default").injectEntry(o.Se({ id: e, sortIndex: e }), { atTop: !1 })];
                        }),
                m = (e, t) => {
                    const a = l.ZP.selectViewerUser(e);
                    return !!a?.pinned_tweet_ids_str && a.pinned_tweet_ids_str[0] === t;
                };
        },
        420412: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                i = a(325686),
                o = a(235902),
                r = a(885015),
                s = a(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: a }) {
                const { isWebRedesign: l } = o.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return a ? n.createElement(r.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(i.Z, { style: c.gapColumn }, n.createElement(i.Z, { style: [c.gap, d] })), n.createElement(i.Z, { style: c.gapText }, a), n.createElement(i.Z, { style: c.gapColumn }, n.createElement(i.Z, { style: [c.gap, d] }))) : n.createElement(i.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(807896),
                i = a(202784),
                o = a(325686),
                r = a(392237);
            class s extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...r } = this.props,
                        s = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, l.column, a && l.withGutterColumn] }));
                    return i.createElement(o.Z, (0, n.Z)({ style: [t, l.root, a && l.withGutter] }, r), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const l = r.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        542610: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                i = a(674132),
                o = a.n(i),
                r = a(2138),
                s = a(173739),
                l = a(424713);
            const c = o().f06f2e53;
            class d extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._handleChange = (e) => {
                            this.setState({ scrubTo: e }), (this.scheduledSeekTargetSec = e), this._throttledPlayerSeek();
                        }),
                        (this._throttledPlayerSeek = (0, r.Z)(
                            () => {
                                const { scheduledSeekTargetSec: e } = this,
                                    { duration: t, playerApi: a } = this.props;
                                if (t) {
                                    const n = e / t;
                                    a.scrubToFraction(n);
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
                    const { "aria-label": e, currentTime: t, duration: a } = this.props,
                        i = this.state.isScrubbing || this.props.isSeeking ? this.state.scrubTo : t;
                    if ("number" == typeof i && "number" == typeof a && a > 0) {
                        const t = (0, l.mr)(i),
                            o = (0, l.mr)(a);
                        return n.createElement(s.Z, { accessibilityLabelValueText: c({ currentTime: t, durationTime: o }), "aria-label": e, color: "white", keepLTR: !0, keyboardStep: 5, max: a, min: 0, onActive: this._handleActive, onChange: this._handleChange, step: "any", value: i, withHidingThumb: !0 });
                    }
                    return null;
                }
            }
            const u = d;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.immersiveTweetHandler.cd43eb7a.js.map
