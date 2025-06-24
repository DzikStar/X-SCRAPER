"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"],
    {
        433460: (e, t, i) => {
            i.d(t, { Z: () => h });
            var n = i(807896),
                a = i(202784),
                o = i(325686),
                r = i(111677),
                s = i.n(r),
                l = i(404971),
                c = i(868634),
                d = i(336373),
                u = i(181054),
                p = i(392237),
                m = i(823161);
            const h = function (e) {
                const t = d.Z.useAnalytics(),
                    [i, o] = a.useState(),
                    r = !!(i && i > 70),
                    { "aria-label": s, presenceRingType: l, spaceId: c, ...p } = e,
                    h =
                        s ||
                        (function (e, t) {
                            switch (e) {
                                case "audiospace":
                                    return y.activeAudioSpace({ screenName: t });
                                case "livevideo":
                                    return y.activeLiveVideo({ screenName: t });
                                default:
                                    return;
                            }
                        })(l, e.screenName);
                a.useEffect(() => {
                    switch (l) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [t, l]);
                const b = a.useCallback((e) => a.createElement(u.Z.Default, (0, n.Z)({}, e, { type: l })), [l]);
                return a.createElement(
                    m.default,
                    (0, n.Z)({}, p, {
                        BorderComponent: b,
                        "aria-label": h,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== i && o(t.width);
                            }
                        },
                        borderWidth: r ? "large" : "medium",
                        decoration: a.createElement(g, { isWide: r, type: l }),
                        gapWidth: r ? "space4" : "space2",
                        onClick: function () {
                            switch (l) {
                                case "audiospace":
                                    t.scribe({ action: "click", element: "audiospace_ring" });
                                    break;
                                case "livevideo":
                                    t.scribe({ action: "click", element: "livevideo_ring" });
                            }
                        },
                        withLink: !0,
                    }),
                );
            };
            function g(e) {
                switch (e.type) {
                    case "audiospace":
                    case "livevideo":
                        return a.createElement(b, e);
                    default:
                        return null;
                }
            }
            function b(e) {
                return "livevideo" === e.type ? a.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [f.liveVideoLabelContainer, f.borderNarrow, e.isWide ? f.liveVideoLabel : f.liveVideoLabelNarrow], type: "live" }) : a.createElement(o.Z, { style: [f.root, e.isWide ? f.rootWide : f.rootNarrow] }, a.createElement(u.Z.Default, { style: [f.spaceGradient, e.isWide ? f.borderWide : f.borderNarrow] }, a.createElement(l.default, { style: f.spaceIcon })));
            }
            const f = p.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        i = "100%",
                        n = e.spacesPx.space4,
                        a = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * n, bottom: -1 * n }, rootNarrow: { end: -1 * a, bottom: -1 * a }, borderWide: { borderWidth: n }, borderNarrow: { borderWidth: a }, spaceGradient: { justifyContent: "center", width: i, height: i, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                y = { withoutUsernameFallback: s().b3688156, activeAudioSpace: s().c0eb8825, activeLiveVideo: s().d068dc6d };
        },
        238406: (e, t, i) => {
            i.d(t, { Z: () => l });
            var n = i(202784),
                a = i(731708),
                o = i(354149),
                r = i(310452),
                s = i(720283);
            const l = ({ animateIn: e, description: t, entities: i, isConcise: l, style: c, testID: d, userId: u, withheldDescription: p, withheldEntities: m }) => {
                const { description: h, entities: g } = (0, s.H)({ description: t, entities: i, withheldDescription: p, withheldEntities: m }),
                    b = r.ZP.descriptionTextParts(h, g);
                return b.length
                    ? n.createElement(
                          a.ZP,
                          { dir: "auto", numberOfLines: l ? 2 : void 0, style: c, testID: d },
                          b.map((t, i) => n.createElement(o.ZP, { animateIn: e, key: `user_${u}_textpart_${i}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, i) => {
            i.d(t, { H: () => n });
            const n = ({ description: e, entities: t, withheldDescription: i, withheldEntities: n }) => (i ? { description: i, entities: n } : { description: e, entities: t });
        },
        81400: (e, t, i) => {
            i.d(t, { Z: () => s });
            i(136728);
            var n = i(803224);
            const a = (e) => {
                    if (0 === e.length) return null;
                    const t = e[0],
                        { playbackState: i } = t.playerState;
                    if (i === n.q.FINISHED) {
                        const t = e.splice(0, 1)[0];
                        e.push(t);
                    }
                    return e[0];
                },
                o = { roundRobin: a },
                r = { autoplaySelectionPolicy: a, minimumVisibilityForAutoplay: 0.25 };
            class s {
                constructor(e = r) {
                    this._playerQueue = [];
                    const { autoplaySelectionPolicy: t, minimumVisibilityForAutoplay: i } = e;
                    (this._autoplaySelectionPolicy = t), (this._minimumVisibilityForAutoplay = i);
                }
                isAutoplayGroupEligibleForAutoplay() {
                    return this._playerQueue.filter((e) => !e.playerState.placement || e.playerState.placement.visibleFraction() >= this._minimumVisibilityForAutoplay).length === this._playerQueue.length;
                }
                registerAutoplayGroupPlayer(e, t) {
                    let i = !1;
                    if (void 0 !== t) {
                        const n = this._playerQueue.findIndex((e) => void 0 !== e.mediaIndex && e.mediaIndex > t);
                        n >= 0 && (this._playerQueue.splice(n, 0, { playerState: e, mediaIndex: t }), (i = !0));
                    }
                    i || this._playerQueue.push({ playerState: e, mediaIndex: t });
                }
                signalGroupAutoplayRequest() {
                    const e = this._autoplaySelectionPolicy(this._playerQueue);
                    return e ? e.playerState : null;
                }
                signalPlaybackComplete(e) {
                    if (!e) {
                        const e = this.signalGroupAutoplayRequest();
                        e && (e.commandHandlers.onAutoPlayRequest(), (e.playbackState = n.q.AUTO_PLAYING));
                    }
                }
                unregisterAutoplayGroupPlayer(e) {
                    const t = this._playerQueue.findIndex((t) => t.playerState === e);
                    this._playerQueue.splice(t, 1);
                }
            }
            s.policies = o;
        },
        794294: (e, t, i) => {
            i.d(t, { Z: () => n });
            const n = i(392237).default.create((e) => ({ transitionTransform: { transitionProperty: "transform", transitionDuration: "400ms", transitionTimingFunction: "cubic-bezier(0.215, 0.610, 0.355, 1.000)" } }));
        },
        707816: (e, t, i) => {
            i.d(t, { EO: () => n, M8: () => o, TN: () => a });
            const n = () => (Math.random() > 0.5 ? 1 : -1);
            function a(e = 1, t = 0) {
                return Math.random() * (e - t) + t;
            }
            const o = (e) => ({ width: e, height: e });
        },
        421158: (e, t, i) => {
            i.d(t, { Z: () => o });
            var n = i(202784),
                a = i(803224);
            const o = n.createContext({ playbackPriority: a.W.NORMAL });
        },
        425474: (e, t, i) => {
            i.d(t, { Z: () => x });
            var n = i(807896),
                a = (i(571372), i(202784)),
                o = i(325686),
                r = i(111677),
                s = i.n(r),
                l = i(38502),
                c = i(498844),
                d = i(83515),
                u = i(926628),
                p = i(520913),
                m = i(643442),
                h = i(466445),
                g = i(461756),
                b = i(731708),
                f = i(682474),
                y = i(384153),
                w = i(483677),
                v = i(530732),
                S = i(392237),
                k = i(794215),
                E = i(823161),
                Z = i(272594),
                C = i(586035);
            function x(e) {
                const [t, i] = a.useState(null);
                const r =
                    ((s = e.onPress),
                    y.Z.selectiveClickHandler((e) => {
                        "function" == typeof s && s();
                    }));
                var s;
                const l = e.withStraightBorders ? null : T.radius;
                return a.createElement(
                    v.Z,
                    {
                        "aria-label": I.voiceTweet,
                        link: e.link,
                        onLayout: function ({ nativeEvent: e }) {
                            const { width: t } = e.layout,
                                n = t < P.largeWidthBreakpoint;
                            i(n);
                        },
                        onPress: r,
                        role: "button",
                        style: [T.interactiveViewRoot, l],
                    },
                    a.createElement(o.Z, { style: l }, a.createElement(f.Z, { ratio: S.default.theme.aspectRatios.landscape }, null === t ? null : a.createElement(_, (0, n.Z)({}, e, { isNarrow: t })))),
                );
            }
            function _(e) {
                const { captionsState: t, isNarrow: i, tweet: n, withStraightBorders: r } = e,
                    [s, f] = a.useState(1);
                if (!C.B(n) || !n.voiceInfo) throw new Error("VoiceMedia tweet prop must have voiceInfo");
                const y = n.voiceInfo,
                    _ = e.onMuteToggle,
                    { isMuted: M, isPlaying: R } = e;
                let L = S.default.theme.colors.primary;
                const A = n.user.profile_image_extensions_media_color?.palette;
                if (A) {
                    const e = w.Z.get(A);
                    e && (L = D(e.rgb));
                }
                const B = e.durationMs || x.getVoiceTweetDuration(n),
                    V = e.progressMs || 0,
                    z = Math.max(0, B - V);
                let W = 0;
                if (R) {
                    const e = y.audiowaveValues;
                    if (Array.isArray(e)) {
                        W = e[Math.floor(z) % e.length] / 100;
                    }
                }
                const N = i ? P.mobile : P.desktop,
                    H = i ? "subtext2" : "body",
                    F = [T.container, r ? null : T.radius, i ? T.containerMobile : T.containerDesktop],
                    G = [{ height: S.default.theme.fontSizesPx[H] }, T.lighter, T.white],
                    $ = i ? "subtext3" : "body",
                    j = [{ height: N.captionsIcon }, T.white],
                    O = [T.playbackToggle, { width: N.playbackToggle, height: N.playbackToggle, borderRadius: N.playbackToggle }],
                    Q = [T.white, { width: N.playbackToggleIcon, height: N.playbackToggleIcon }];
                const U = void 0 === t || t === x.CaptionsState.unavailable,
                    q = t === x.CaptionsState.on,
                    K = t === x.CaptionsState.off;
                let Y = I.captionsUnavailable;
                return (
                    q ? (Y = I.hideCaptions) : K && (Y = I.showCaptions),
                    a.createElement(
                        o.Z,
                        {
                            onLayout: function ({ nativeEvent: e }) {
                                const { height: t } = e.layout,
                                    i = 0.7 * t,
                                    n = Math.floor(i / S.default.theme.lineHeightsPx[$]);
                                f(n);
                            },
                            style: [F, { backgroundColor: L }],
                        },
                        a.createElement(o.Z, { style: T.innerContainer }, a.createElement(o.Z, { style: T.topLeft }, a.createElement(b.ZP, { color: "white", size: H, style: T.clipIndex, weight: "heavy" }, y.clipIndex, "/", y.numberOfClips)), a.createElement(v.Z, { "aria-label": Y, disabled: U, onClick: e.onCaptionsToggle, style: T.topRight, testID: "captionsToggle" }, q ? a.createElement(l.default, { style: j }) : a.createElement(c.default, { style: j })), a.createElement(o.Z, { style: T.bottomLeft }, a.createElement(b.ZP, { color: "white", size: H, style: T.lighter }, a.createElement(k.Z, { countdown: !0, timeMs: z })), a.createElement(o.Z, { style: T.muteButton }, a.createElement(v.Z, { "aria-label": M ? I.unmute : I.mute, onPress: _ }, M ? a.createElement(d.default, { style: G }) : a.createElement(u.default, { style: G })))), a.createElement(o.Z, { style: T.bottomRight }, a.createElement(p.default, { style: [...G, T.twitterIcon] }), a.createElement(b.ZP, { color: "white", size: H, style: T.lighter, weight: "heavy" }, I.voice)), a.createElement(o.Z, null, g.Z.reducedMotionEnabled ? null : a.createElement(o.Z, { style: [T.voiceIndicator, R ? T.activeVoiceIndicator : T.inactiveVoiceIndicator] }, a.createElement(Z.Z, { audioLevel: W, color: S.default.theme.colors.white, paused: !R, size: N.avatar })), a.createElement(E.default, { size: "custom", style: { width: N.avatar, height: N.avatar }, uri: n.user.profile_image_url_https }), a.createElement(o.Z, { style: T.playbackToggleContainer }, a.createElement(o.Z, { style: O }, R ? a.createElement(m.default, { style: Q }) : a.createElement(h.default, { style: Q })))), q && e.caption ? a.createElement(o.Z, { style: T.captionViewer, testID: "captionsViewer" }, a.createElement(b.ZP, { align: "center", color: "whiteOnColor", numberOfLines: s, size: $ }, e.caption)) : null),
                    )
                );
            }
            x.getVoiceTweetDuration = function (e) {
                const [t] = e.extended_entities?.media || [];
                let i;
                return t && "photo" !== t.type && t.video_info && (i = t.video_info.duration_millis), void 0 !== i ? i : -1;
            };
            const P = { largeWidthBreakpoint: 400, mobile: { avatar: 90, playbackToggle: 38, playbackToggleIcon: 17, captionsIcon: 22 }, desktop: { avatar: 165, playbackToggle: 69, playbackToggleIcon: 31, captionsIcon: 40 } },
                T = S.default.create((e) => ({ interactiveViewRoot: { width: "100%", height: "100%" }, radius: { borderRadius: e.borderRadii.large }, container: { width: "100%", height: "100%" }, containerMobile: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, width: "100%", height: "100%" }, containerDesktop: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, innerContainer: { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, topLeft: { position: "absolute", top: 0, start: 0 }, topRight: { position: "absolute", top: 0, end: 0 }, captionViewer: { position: "absolute", bottom: "10%", padding: e.spaces.space8, backgroundColor: e.colors.translucentBlack77, borderRadius: e.borderRadii.small, marginHorizontal: "auto", width: "fit-content" }, bottomLeft: { position: "absolute", bottom: 0, start: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }, bottomRight: { position: "absolute", bottom: 0, end: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }, clipIndex: { letterSpacing: e.spaces.space2 }, captionsLabel: { letterSpacing: e.spaces.space2, marginTop: e.spaces.space4, textTransform: "uppercase" }, voiceIndicator: { transition: "opacity 0.2s 0s ease-in-out" }, activeVoiceIndicator: { opacity: 1 }, inactiveVoiceIndicator: { opacity: 0 }, playbackToggleContainer: { position: "absolute", top: 0, start: 0, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, playbackToggle: { backgroundColor: e.colors.translucentBlack77, justifyContent: "center", alignItems: "center" }, muteButton: { marginStart: e.spaces.space4 }, twitterIcon: { marginEnd: e.spaces.space4 }, white: { color: e.colors.white }, lighter: { opacity: 0.5 } })),
                I = { voice: s().h13ffc88, voiceTweet: s().c8c4600e, mute: s().ec8ab8b4, unmute: s().b8b6344a, play: s().de8c5eb2, pause: s().ec286028, showCaptions: s().a858b25c, hideCaptions: s().j25d7cca, captionsUnavailable: s().ad77feb6 };
            x.CaptionsState = Object.freeze({ on: "on", off: "off", unavailable: "unavailable" });
            const D = (e, t = 1) => `rgba(${e.red}, ${e.green}, ${e.blue}, ${t})`;
        },
        625881: (e, t, i) => {
            i.d(t, { S: () => u });
            var n = i(202784),
                a = i(325686),
                o = i(111677),
                r = i.n(o),
                s = i(184605),
                l = i(173739),
                c = i(392237),
                d = i(794215);
            function u(e) {
                const [t, i] = n.useState(e.progressMs),
                    [o, r] = n.useState(!1),
                    c = n.useRef(!1);
                n.useEffect(() => {
                    e.externalSeeking && (c.current = !1);
                }, [e.externalSeeking]);
                const u = (e.externalSeeking && c.current) || o ? t : e.progressMs,
                    h = n.createElement(l.Z, {
                        "aria-label": m.seekSlider,
                        color: "purple500",
                        keepLTR: !0,
                        keyboardStep: 5e3,
                        max: e.durationMs,
                        min: 0,
                        onActive: function (i) {
                            if ((e.onSliderActive?.(i), !i)) {
                                const i = t;
                                e.onSeek(i), (c.current = !0);
                            }
                            r(i);
                        },
                        onChange: function (t) {
                            o || e.onSeek(t), i(t);
                        },
                        step: "any",
                        value: u,
                        withGrayBackground: !0,
                        withHidingThumb: !0,
                    });
                if (!e.withTimes) return h;
                const g = e.durationMs - u;
                return n.createElement(a.Z, null, n.createElement(a.Z, { style: p.sliderRow }, n.createElement(a.Z, { style: p.slider }, h)), n.createElement(a.Z, { style: p.sliderTimes }, n.createElement(d.Z, { size: "subtext2", timeMs: (0, s.Z)(u) ? u : 0 }), n.createElement(d.Z, { countdown: !0, size: "subtext2", timeMs: (0, s.Z)(g) ? g : 0, withCountdownSymbol: !0 })));
            }
            const p = c.default.create((e) => ({ sliderRow: { flexDirection: "row" }, slider: { flex: 1 }, sliderTimes: { flexDirection: "row", justifyContent: "space-between" } })),
                m = { seekSlider: r().hea01798 };
        },
        118149: (e, t, i) => {
            i.d(t, { uP: () => T });
            var n = i(807896),
                a = i(202784),
                o = i(325686),
                r = i(111677),
                s = i.n(r),
                l = i(643442),
                c = i(466445),
                d = i(837020),
                u = i(731708),
                p = i(154003),
                m = i(384153),
                h = i(483677),
                g = i(530732),
                b = i(522171),
                f = i(365023),
                y = i(292627),
                w = i(470397),
                v = i(392237),
                S = i(794215),
                k = i(823161),
                E = i(366635),
                Z = i(41871),
                C = i(625881);
            function x(e) {
                const t = L(e.onDockPress),
                    i = L(e.onUserPress),
                    r = L(e.onRequestClose),
                    s = L(e.onTogglePlayback);
                return a.createElement(a.Fragment, null, a.createElement(o.Z, { style: M.sliderContainer }, a.createElement(C.S, { durationMs: e.durationMs, externalSeeking: e.isSeeking, onSeek: e.onSeek, onSliderActive: e.onSliderActive, progressMs: e.progressMs })), a.createElement(o.Z, { style: M.dockContentRow }, a.createElement(k.default, { "aria-hidden": !0, focusable: !1, onClick: i, screenName: e.user.screen_name, size: "large", uri: e.user.profile_image_url_https, withLink: !0 }), a.createElement(o.Z, { style: M.dockContentTitle }, a.createElement(w.Z, { size: "subtext2" }, a.createElement(E.Z, { isBlueVerified: e.user.is_blue_verified, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", onLinkClick: i, screenName: e.user.screen_name, screenNameSize: "subtext2", verifiedType: e.user.verified_type, weight: "normal", withLink: !0 }), a.createElement(S.Z, { size: "subtext2", timeMs: e.durationMs })), a.createElement(u.ZP, { numberOfLines: 1, onPress: t, size: "subtext2", weight: "bold" }, e.title)), a.createElement(p.ZP, (0, n.Z)({ "aria-label": e.isPlaying ? I.pause : I.play, icon: e.isPlaying ? a.createElement(l.default, null) : a.createElement(c.default, null), onPress: s, testID: "togglePlayback" }, D)), a.createElement(o.Z, { style: M.dockContentButtonSpacer }), a.createElement(p.ZP, (0, n.Z)({ "aria-label": I.close, icon: a.createElement(d.default, null), onPress: r, testID: "close" }, D))));
            }
            function _(e) {
                const t = L(e.onDockPress),
                    i = L(e.onRequestClose),
                    r = L(e.onTogglePlayback),
                    s = L(e.onUserPress),
                    m = a.useMemo(() => {
                        const t = e.user.profile_image_extensions_media_color?.palette;
                        if (t) {
                            const e = h.Z.get(t);
                            if (e) return A(e.rgb);
                        }
                        return v.default.theme.colors.primary;
                    }, [e.user]),
                    g = e.isMuted ? I.unmute : I.mute;
                return a.createElement(o.Z, { style: [R.wideContainer, R.wideContainerBorderRadius] }, a.createElement(o.Z, { style: R.mainContentContainer }, a.createElement(o.Z, { style: [R.wideAvatarContainer, { backgroundColor: m }] }, a.createElement(k.default, { "aria-hidden": !0, focusable: !1, onClick: s, screenName: e.user.screen_name, size: "xLarge", uri: e.user.profile_image_url_https, withLink: !0 })), a.createElement(o.Z, { style: R.mainContent }, a.createElement(E.Z, { isBlueVerified: e.user.is_blue_verified, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", onLinkClick: s, screenName: e.user.screen_name, screenNameSize: "subtext2", verifiedType: e.user.verified_type, weight: "normal", withLink: !0, withScreenName: !0 }), a.createElement(u.ZP, { numberOfLines: 2, onPress: t, size: "subtext2", weight: "bold" }, e.title))), a.createElement(o.Z, { style: R.belowMainContent }, a.createElement(o.Z, { style: R.slider }, a.createElement(C.S, { durationMs: e.durationMs, externalSeeking: e.isSeeking, onSeek: e.onSeek, onSliderActive: e.onSliderActive, progressMs: e.progressMs, withTimes: !0 })), a.createElement(o.Z, { style: R.iconRow }, a.createElement(Z.Z, (0, n.Z)({ accessibilityLabelIcon: g, accessibilityLabelSlider: I.volumeSlider, isMuted: e.isMuted, onMuteToggle: e.onMuteToggle, onSliderChange: e.onVolumeChange, sliderColor: "purple500", type: void 0, volumePercent: e.volume, withGraySliderTrack: !0, withNavigationSliderBackground: !0 }, D)), a.createElement(p.ZP, (0, n.Z)({ "aria-label": e.isPlaying ? I.pause : I.play, icon: e.isPlaying ? a.createElement(l.default, null) : a.createElement(c.default, null), onPress: r, testID: "togglePlayback" }, D)))), a.createElement(p.ZP, (0, n.Z)({ "aria-label": I.close, icon: a.createElement(d.default, null), onPress: i, style: R.closeIcon, testID: "close" }, D)));
            }
            function P(e) {
                const t = a.useRef({}),
                    i = a.useRef(null),
                    n = e.isWide && R.wideContainerBorderRadius,
                    r = L(() => {
                        t.current.isSliderActive || e.onDockPress();
                    }),
                    s = a.useMemo(
                        () =>
                            function () {
                                i.current && i.current.focus();
                            },
                        [],
                    );
                a.useEffect(() => {
                    const t = (function (e) {
                        return function (t) {
                            if ("Space" === t.code)
                                return (
                                    (function (e) {
                                        e.preventDefault(), e.stopPropagation();
                                    })(t),
                                    e.onTogglePlayback()
                                );
                        };
                    })(e);
                    return (
                        i.current && i.current.addEventListener("keydown", t),
                        function () {
                            i.current && i.current.removeEventListener("keydown", t);
                        }
                    );
                }, [i.current, e.onTogglePlayback]),
                    a.useEffect(
                        () =>
                            function () {
                                clearTimeout(t.current.onSliderActiveTimeout);
                            },
                        [],
                    );
                const l = e.title || I.untitled,
                    c = {
                        ...e,
                        title: l,
                        onSliderActive: function (e) {
                            clearTimeout(t.current.onSliderActiveTimeout),
                                e
                                    ? (t.current.isSliderActive = e)
                                    : (t.current.onSliderActiveTimeout = setTimeout(() => {
                                          t.current.isSliderActive = e;
                                      }, B));
                        },
                    };
                return a.createElement(
                    b.Z,
                    { enabled: !0, handlers: { [b.Z.shortcuts.audio.dock]: s, [b.Z.shortcuts.audio.play]: e.onTogglePlayback } },
                    a.createElement(
                        g.Z,
                        {
                            "aria-label": I.voiceDock,
                            onPress: r,
                            ref: function (e) {
                                i.current = e;
                            },
                            style: [M.container, n],
                        },
                        a.createElement(o.Z, { style: [M.innerContainer, n] }, e.isWide ? a.createElement(_, c) : a.createElement(x, c)),
                    ),
                );
            }
            function T(e) {
                const t = e.isWide ? y.Z.DesktopVoiceTweetDock : y.Z.MobileVoiceTweetDock,
                    i = [e.isWide ? [R.root, { maxWidth: e.width }] : M.root];
                return a.createElement(
                    t,
                    null,
                    a.createElement(f.Z, { id: "VoiceTweetDock" }, (t, r) => a.createElement(o.Z, (0, n.Z)({ ref: t() }, r({ style: i })), a.createElement(P, e))),
                );
            }
            const I = { untitled: s().gfaaead8, close: s().af8fa2ae, pause: s().fb236728, play: s().f17dfdb6, voiceDock: s().cfd13f46, unmute: s().b8b6344a, mute: s().ec8ab8b4, volumeSlider: s().c9a642fa, seekSlider: s().hea01798 },
                D = { borderColor: "transparent", color: "text", size: "medium" },
                M = v.default.create((e) => ({ root: {}, container: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall }, innerContainer: { backgroundColor: e.colors.navigationBackground }, sliderContainer: { position: "absolute", zIndex: 1, top: 0, start: 0, end: 0, marginTop: -1 * e.spacesPx.space20, transform: [{ translateY: e.spacesPx.space20 / 2 }] }, dockContentRow: { padding: e.spaces.space4, flexDirection: "row", justifyContent: "center", alignItems: "center" }, dockContentTitle: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4, flexDirection: "column", flex: 1 }, dockContentButtonSpacer: { width: e.spaces.space12 } })),
                R = v.default.create((e) => {
                    const t = e.spaces.space16,
                        i = e.borderRadii.xLarge,
                        n = e.spaces.space4;
                    return { root: { alignSelf: "flex-end", width: "100%", marginVertical: e.spaces.space20, marginEnd: e.spaces.space20 }, wideContainerBorderRadius: { borderRadius: i }, wideContainer: { padding: t, paddingEnd: n }, wideAvatarContainer: { borderRadius: e.borderRadii.medium, padding: e.spaces.space12 }, mainContentContainer: { flexDirection: "row" }, mainContent: { marginStart: e.spaces.space12, marginEnd: e.spaces.space40, flex: 1, flexDirection: "column" }, username: { color: e.colors.gray700 }, closeIcon: { position: "absolute", top: n, end: n }, belowMainContent: { marginTop: e.spaces.space12, flexDirection: "row" }, slider: { flex: 1 }, iconRow: { marginStart: e.spaces.space12, flexDirection: "row", justifyContent: "center" } };
                });
            function L(e) {
                return m.Z.selectiveClickHandler((t) => {
                    "function" == typeof e && e();
                });
            }
            const A = (e, t = 1) => `rgba(${e.red}, ${e.green}, ${e.blue}, ${t})`,
                B = 200;
        },
        41871: (e, t, i) => {
            i.d(t, { Z: () => w });
            var n = i(807896),
                a = i(202784),
                o = i(325686),
                r = i(111677),
                s = i.n(r),
                l = i(83515),
                c = i(926628),
                d = i(301049),
                u = i(154003),
                p = i(466792),
                m = i(173739),
                h = i(392237);
            const g = s().b3160a69;
            class b extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { showSlider: !1, isSliderActive: !1 }),
                        (this._handleButtonLayoutChange = (e) => {
                            const { containerHeight: t } = this.props,
                                { sliderMaxHeight: i } = this.state,
                                { height: n } = e.nativeEvent.layout;
                            if (t) {
                                const e = t - n - h.default.theme.spacesPx.space20 + "px";
                                e !== i && this.setState({ sliderMaxHeight: e });
                            }
                        }),
                        (this._handleSliderActive = (e) => this.setState({ isSliderActive: e })),
                        (this._showSlider = () => this.setState({ showSlider: !0 })),
                        (this._hideSlider = () => this.setState({ showSlider: !1 })),
                        (this._shouldShowSlider = (e) => e.showSlider || e.isSliderActive),
                        (this._normalizeValue = (e) => Math.max(0, Math.min(e, 100))),
                        (this._getSliderMarginStyles = (e) => {
                            const t = e ?? "medium";
                            return y["large" === t ? "xLarge" : t];
                        }),
                        (this._handleKeyDown = (e) => {
                            const { onSliderChange: t, volumePercent: i } = this.props,
                                { altKey: n, ctrlKey: a, metaKey: o } = e;
                            if (n || a || o) return;
                            const r = e.key === d.Z.ArrowUp || e.key === d.Z.ArrowRight,
                                s = e.key === d.Z.ArrowDown || e.key === d.Z.ArrowLeft;
                            if (r || s) {
                                const n = this._normalizeValue(i + 10 * (r ? 1 : -1));
                                t && t(n), e.preventDefault();
                            }
                        });
                }
                componentDidUpdate(e, t) {
                    const { onHideSlider: i, onShowSlider: n, onSliderChange: a } = this.props;
                    if (a) {
                        const e = this._shouldShowSlider(t),
                            a = this._shouldShowSlider(this.state);
                        !e && a && n && n(), e && !a && i && i();
                    }
                }
                render() {
                    const { accessibilityLabelIcon: e, accessibilityLabelSlider: t, containerHeight: i, isMuted: r, onHideSlider: s, onMuteToggle: d, onShowSlider: b, onSliderChange: y, pullRight: w, sliderColor: v, volumePercent: S, withGraySliderTrack: k, withNavigationSliderBackground: E, ...Z } = this.props,
                        C = r ? a.createElement(l.default, null) : a.createElement(c.default, null),
                        x = E ? f.sliderWithNavigationBackground : f.sliderWithDefaultBackground;
                    return a.createElement(p.Z, { disabled: !y, onFocusRingGained: y ? this._showSlider : void 0, onFocusRingLost: y ? this._hideSlider : void 0, onHoverIn: y ? this._showSlider : void 0, onHoverOut: y ? this._hideSlider : void 0 }, a.createElement(o.Z, { onKeyDown: y ? this._handleKeyDown : void 0 }, a.createElement(u.ZP, (0, n.Z)({ "aria-label": e, icon: C, onLayout: this._handleButtonLayoutChange, onPress: d, pullRight: w, type: "onMediaText" }, Z)), y && a.createElement(p.Z, { onFocusRingGained: b, onFocusRingLost: s }, ({ isFocusedWithin: e }) => a.createElement(o.Z, { style: [f.sliderBackground, x, this._getSliderMarginStyles(Z.size), e || this._shouldShowSlider(this.state) ? null : h.default.visuallyHidden, !!i && { maxHeight: this.state.sliderMaxHeight }] }, a.createElement(m.Z, { accessibilityLabelValueText: g({ volumePercent: S }), "aria-label": t, color: v || "white", isVertical: !0, keyboardStep: 10, max: 100, min: 0, onActive: this._handleSliderActive, onChange: y, step: 1, value: r ? 0 : S || 0, withGrayBackground: k })))));
                }
            }
            b.defaultProps = { pullRight: !1 };
            const f = h.default.create((e) => ({ sliderBackground: { bottom: 0, borderRadius: e.borderRadii.xLarge, height: `calc(${e.spaces.space64}*2)`, start: e.spaces.space4, position: "absolute", padding: e.spaces.space12, paddingVertical: e.spaces.space16, end: e.spaces.space4 }, sliderWithDefaultBackground: { backgroundColor: e.colors.translucentBlack30 }, sliderWithNavigationBackground: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall } })),
                y = h.default.create(({ spaces: e, spacesPx: t }) => {
                    const i = `${t.space16 + t.space4 + t.space2}px`,
                        n = `${t.space20 + t.space24}px`,
                        a = `${t.space12 + t.space40}px`;
                    return { xSmall: { marginBottom: e.space24 }, small: { marginBottom: e.space32 }, medium: { marginBottom: e.space36 }, large: { marginBottom: n }, xLarge: { marginBotom: a }, smallCompact: { marginBottom: i }, DEPRECATED_normalCompact: { marginBottom: e.space32 }, DEPRECATED_normal: { marginBottom: e.space40 } };
                }),
                w = b;
        },
        67877: (e, t, i) => {
            i.d(t, { Z: () => n });
            const n = (e, t) => {
                let i = null;
                const n = () => {
                    (i = null), e();
                };
                return () => (i || (i = t(n)), i);
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2.6b9fa24a.js.map
