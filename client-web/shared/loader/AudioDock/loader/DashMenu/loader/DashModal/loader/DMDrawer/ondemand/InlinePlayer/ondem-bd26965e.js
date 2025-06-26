"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bd26965e"],
    {
        433460: (e, t, i) => {
            i.d(t, { Z: () => h });
            var a = i(807896),
                n = i(202784),
                r = i(325686),
                o = i(111677),
                l = i.n(o),
                s = i(404971),
                c = i(868634),
                d = i(336373),
                u = i(181054),
                p = i(392237),
                m = i(823161);
            const h = function (e) {
                const t = d.Z.useAnalytics(),
                    [i, r] = n.useState(),
                    o = !!(i && i > 70),
                    { "aria-label": l, presenceRingType: s, spaceId: c, ...p } = e,
                    h =
                        l ||
                        (function (e, t) {
                            switch (e) {
                                case "audiospace":
                                    return f.activeAudioSpace({ screenName: t });
                                case "livevideo":
                                    return f.activeLiveVideo({ screenName: t });
                                default:
                                    return;
                            }
                        })(s, e.screenName);
                n.useEffect(() => {
                    switch (s) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [t, s]);
                const b = n.useCallback((e) => n.createElement(u.Z.Default, (0, a.Z)({}, e, { type: s })), [s]);
                return n.createElement(
                    m.default,
                    (0, a.Z)({}, p, {
                        BorderComponent: b,
                        "aria-label": h,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== i && r(t.width);
                            }
                        },
                        borderWidth: o ? "large" : "medium",
                        decoration: n.createElement(g, { isWide: o, type: s }),
                        gapWidth: o ? "space4" : "space2",
                        onClick: function () {
                            switch (s) {
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
                        return n.createElement(b, e);
                    default:
                        return null;
                }
            }
            function b(e) {
                return "livevideo" === e.type ? n.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [y.liveVideoLabelContainer, y.borderNarrow, e.isWide ? y.liveVideoLabel : y.liveVideoLabelNarrow], type: "live" }) : n.createElement(r.Z, { style: [y.root, e.isWide ? y.rootWide : y.rootNarrow] }, n.createElement(u.Z.Default, { style: [y.spaceGradient, e.isWide ? y.borderWide : y.borderNarrow] }, n.createElement(s.default, { style: y.spaceIcon })));
            }
            const y = p.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        i = "100%",
                        a = e.spacesPx.space4,
                        n = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * a, bottom: -1 * a }, rootNarrow: { end: -1 * n, bottom: -1 * n }, borderWide: { borderWidth: a }, borderNarrow: { borderWidth: n }, spaceGradient: { justifyContent: "center", width: i, height: i, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                f = { withoutUsernameFallback: l().b3688156, activeAudioSpace: l().c0eb8825, activeLiveVideo: l().d068dc6d };
        },
        238406: (e, t, i) => {
            i.d(t, { Z: () => s });
            var a = i(202784),
                n = i(731708),
                r = i(354149),
                o = i(310452),
                l = i(720283);
            const s = ({ animateIn: e, description: t, entities: i, isConcise: s, style: c, testID: d, userId: u, withheldDescription: p, withheldEntities: m }) => {
                const { description: h, entities: g } = (0, l.H)({ description: t, entities: i, withheldDescription: p, withheldEntities: m }),
                    b = o.ZP.descriptionTextParts(h, g);
                return b.length
                    ? a.createElement(
                          n.ZP,
                          { dir: "auto", numberOfLines: s ? 2 : void 0, style: c, testID: d },
                          b.map((t, i) => a.createElement(r.ZP, { animateIn: e, key: `user_${u}_textpart_${i}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, i) => {
            i.d(t, { H: () => a });
            const a = ({ description: e, entities: t, withheldDescription: i, withheldEntities: a }) => (i ? { description: i, entities: a } : { description: e, entities: t });
        },
        81400: (e, t, i) => {
            i.d(t, { Z: () => l });
            i(136728);
            var a = i(803224);
            const n = (e) => {
                    if (0 === e.length) return null;
                    const t = e[0],
                        { playbackState: i } = t.playerState;
                    if (i === a.q.FINISHED) {
                        const t = e.splice(0, 1)[0];
                        e.push(t);
                    }
                    return e[0];
                },
                r = { roundRobin: n },
                o = { autoplaySelectionPolicy: n, minimumVisibilityForAutoplay: 0.25 };
            class l {
                constructor(e = o) {
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
                        const a = this._playerQueue.findIndex((e) => void 0 !== e.mediaIndex && e.mediaIndex > t);
                        a >= 0 && (this._playerQueue.splice(a, 0, { playerState: e, mediaIndex: t }), (i = !0));
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
                        e && (e.commandHandlers.onAutoPlayRequest(), (e.playbackState = a.q.AUTO_PLAYING));
                    }
                }
                unregisterAutoplayGroupPlayer(e) {
                    const t = this._playerQueue.findIndex((t) => t.playerState === e);
                    this._playerQueue.splice(t, 1);
                }
            }
            l.policies = r;
        },
        794294: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = i(392237).default.create((e) => ({ transitionTransform: { transitionProperty: "transform", transitionDuration: "400ms", transitionTimingFunction: "cubic-bezier(0.215, 0.610, 0.355, 1.000)" } }));
        },
        707816: (e, t, i) => {
            i.d(t, { EO: () => a, M8: () => r, TN: () => n });
            const a = () => (Math.random() > 0.5 ? 1 : -1);
            function n(e = 1, t = 0) {
                return Math.random() * (e - t) + t;
            }
            const r = (e) => ({ width: e, height: e });
        },
        421158: (e, t, i) => {
            i.d(t, { Z: () => r });
            var a = i(202784),
                n = i(803224);
            const r = a.createContext({ playbackPriority: n.W.NORMAL });
        },
        425474: (e, t, i) => {
            i.d(t, { Z: () => x });
            var a = i(807896),
                n = (i(571372), i(202784)),
                r = i(325686),
                o = i(111677),
                l = i.n(o),
                s = i(38502),
                c = i(498844),
                d = i(83515),
                u = i(926628),
                p = i(520913),
                m = i(643442),
                h = i(466445),
                g = i(461756),
                b = i(731708),
                y = i(682474),
                f = i(384153),
                w = i(483677),
                v = i(530732),
                k = i(392237),
                S = i(794215),
                E = i(823161),
                C = i(272594),
                Z = i(586035);
            function x(e) {
                const [t, i] = n.useState(null);
                const o =
                    ((l = e.onPress),
                    f.Z.selectiveClickHandler((e) => {
                        "function" == typeof l && l();
                    }));
                var l;
                const s = e.withStraightBorders ? null : T.radius;
                return n.createElement(
                    v.Z,
                    {
                        "aria-label": D.voiceTweet,
                        link: e.link,
                        onLayout: function ({ nativeEvent: e }) {
                            const { width: t } = e.layout,
                                a = t < P.largeWidthBreakpoint;
                            i(a);
                        },
                        onPress: o,
                        role: "button",
                        style: [T.interactiveViewRoot, s],
                    },
                    n.createElement(r.Z, { style: s }, n.createElement(y.Z, { ratio: k.default.theme.aspectRatios.landscape }, null === t ? null : n.createElement(_, (0, a.Z)({}, e, { isNarrow: t })))),
                );
            }
            function _(e) {
                const { captionsState: t, isNarrow: i, tweet: a, withStraightBorders: o } = e,
                    [l, y] = n.useState(1);
                if (!Z.B(a) || !a.voiceInfo) throw new Error("VoiceMedia tweet prop must have voiceInfo");
                const f = a.voiceInfo,
                    _ = e.onMuteToggle,
                    { isMuted: I, isPlaying: M } = e;
                let B = k.default.theme.colors.primary;
                const A = a.user.profile_image_extensions_media_color?.palette;
                if (A) {
                    const e = w.Z.get(A);
                    e && (B = R(e.rgb));
                }
                const L = e.durationMs || x.getVoiceTweetDuration(a),
                    V = e.progressMs || 0,
                    z = Math.max(0, L - V);
                let W = 0;
                if (M) {
                    const e = f.audiowaveValues;
                    if (Array.isArray(e)) {
                        W = e[Math.floor(z) % e.length] / 100;
                    }
                }
                const N = i ? P.mobile : P.desktop,
                    H = i ? "subtext2" : "body",
                    F = [T.container, o ? null : T.radius, i ? T.containerMobile : T.containerDesktop],
                    O = [{ height: k.default.theme.fontSizesPx[H] }, T.lighter, T.white],
                    $ = i ? "subtext3" : "body",
                    j = [{ height: N.captionsIcon }, T.white],
                    G = [T.playbackToggle, { width: N.playbackToggle, height: N.playbackToggle, borderRadius: N.playbackToggle }],
                    Q = [T.white, { width: N.playbackToggleIcon, height: N.playbackToggleIcon }];
                const U = void 0 === t || t === x.CaptionsState.unavailable,
                    q = t === x.CaptionsState.on,
                    K = t === x.CaptionsState.off;
                let Y = D.captionsUnavailable;
                return (
                    q ? (Y = D.hideCaptions) : K && (Y = D.showCaptions),
                    n.createElement(
                        r.Z,
                        {
                            onLayout: function ({ nativeEvent: e }) {
                                const { height: t } = e.layout,
                                    i = 0.7 * t,
                                    a = Math.floor(i / k.default.theme.lineHeightsPx[$]);
                                y(a);
                            },
                            style: [F, { backgroundColor: B }],
                        },
                        n.createElement(r.Z, { style: T.innerContainer }, n.createElement(r.Z, { style: T.topLeft }, n.createElement(b.ZP, { color: "white", size: H, style: T.clipIndex, weight: "heavy" }, f.clipIndex, "/", f.numberOfClips)), n.createElement(v.Z, { "aria-label": Y, disabled: U, onClick: e.onCaptionsToggle, style: T.topRight, testID: "captionsToggle" }, q ? n.createElement(s.default, { style: j }) : n.createElement(c.default, { style: j })), n.createElement(r.Z, { style: T.bottomLeft }, n.createElement(b.ZP, { color: "white", size: H, style: T.lighter }, n.createElement(S.Z, { countdown: !0, timeMs: z })), n.createElement(r.Z, { style: T.muteButton }, n.createElement(v.Z, { "aria-label": I ? D.unmute : D.mute, onPress: _ }, I ? n.createElement(d.default, { style: O }) : n.createElement(u.default, { style: O })))), n.createElement(r.Z, { style: T.bottomRight }, n.createElement(p.default, { style: [...O, T.twitterIcon] }), n.createElement(b.ZP, { color: "white", size: H, style: T.lighter, weight: "heavy" }, D.voice)), n.createElement(r.Z, null, g.Z.reducedMotionEnabled ? null : n.createElement(r.Z, { style: [T.voiceIndicator, M ? T.activeVoiceIndicator : T.inactiveVoiceIndicator] }, n.createElement(C.Z, { audioLevel: W, color: k.default.theme.colors.white, paused: !M, size: N.avatar })), n.createElement(E.default, { size: "custom", style: { width: N.avatar, height: N.avatar }, uri: a.user.profile_image_url_https }), n.createElement(r.Z, { style: T.playbackToggleContainer }, n.createElement(r.Z, { style: G }, M ? n.createElement(m.default, { style: Q }) : n.createElement(h.default, { style: Q })))), q && e.caption ? n.createElement(r.Z, { style: T.captionViewer, testID: "captionsViewer" }, n.createElement(b.ZP, { align: "center", color: "whiteOnColor", numberOfLines: l, size: $ }, e.caption)) : null),
                    )
                );
            }
            x.getVoiceTweetDuration = function (e) {
                const [t] = e.extended_entities?.media || [];
                let i;
                return t && "photo" !== t.type && t.video_info && (i = t.video_info.duration_millis), void 0 !== i ? i : -1;
            };
            const P = { largeWidthBreakpoint: 400, mobile: { avatar: 90, playbackToggle: 38, playbackToggleIcon: 17, captionsIcon: 22 }, desktop: { avatar: 165, playbackToggle: 69, playbackToggleIcon: 31, captionsIcon: 40 } },
                T = k.default.create((e) => ({ interactiveViewRoot: { width: "100%", height: "100%" }, radius: { borderRadius: e.borderRadii.large }, container: { width: "100%", height: "100%" }, containerMobile: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, width: "100%", height: "100%" }, containerDesktop: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, innerContainer: { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, topLeft: { position: "absolute", top: 0, start: 0 }, topRight: { position: "absolute", top: 0, end: 0 }, captionViewer: { position: "absolute", bottom: "10%", padding: e.spaces.space8, backgroundColor: e.colors.translucentBlack77, borderRadius: e.borderRadii.small, marginHorizontal: "auto", width: "fit-content" }, bottomLeft: { position: "absolute", bottom: 0, start: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }, bottomRight: { position: "absolute", bottom: 0, end: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }, clipIndex: { letterSpacing: e.spaces.space2 }, captionsLabel: { letterSpacing: e.spaces.space2, marginTop: e.spaces.space4, textTransform: "uppercase" }, voiceIndicator: { transition: "opacity 0.2s 0s ease-in-out" }, activeVoiceIndicator: { opacity: 1 }, inactiveVoiceIndicator: { opacity: 0 }, playbackToggleContainer: { position: "absolute", top: 0, start: 0, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, playbackToggle: { backgroundColor: e.colors.translucentBlack77, justifyContent: "center", alignItems: "center" }, muteButton: { marginStart: e.spaces.space4 }, twitterIcon: { marginEnd: e.spaces.space4 }, white: { color: e.colors.white }, lighter: { opacity: 0.5 } })),
                D = { voice: l().h13ffc88, voiceTweet: l().c8c4600e, mute: l().ec8ab8b4, unmute: l().b8b6344a, play: l().de8c5eb2, pause: l().ec286028, showCaptions: l().a858b25c, hideCaptions: l().j25d7cca, captionsUnavailable: l().ad77feb6 };
            x.CaptionsState = Object.freeze({ on: "on", off: "off", unavailable: "unavailable" });
            const R = (e, t = 1) => `rgba(${e.red}, ${e.green}, ${e.blue}, ${t})`;
        },
        625881: (e, t, i) => {
            i.d(t, { S: () => u });
            var a = i(202784),
                n = i(325686),
                r = i(111677),
                o = i.n(r),
                l = i(184605),
                s = i(173739),
                c = i(392237),
                d = i(794215);
            function u(e) {
                const [t, i] = a.useState(e.progressMs),
                    [r, o] = a.useState(!1),
                    c = a.useRef(!1);
                a.useEffect(() => {
                    e.externalSeeking && (c.current = !1);
                }, [e.externalSeeking]);
                const u = (e.externalSeeking && c.current) || r ? t : e.progressMs,
                    h = a.createElement(s.Z, {
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
                            o(i);
                        },
                        onChange: function (t) {
                            r || e.onSeek(t), i(t);
                        },
                        step: "any",
                        value: u,
                        withGrayBackground: !0,
                        withHidingThumb: !0,
                    });
                if (!e.withTimes) return h;
                const g = e.durationMs - u;
                return a.createElement(n.Z, null, a.createElement(n.Z, { style: p.sliderRow }, a.createElement(n.Z, { style: p.slider }, h)), a.createElement(n.Z, { style: p.sliderTimes }, a.createElement(d.Z, { size: "subtext2", timeMs: (0, l.Z)(u) ? u : 0 }), a.createElement(d.Z, { countdown: !0, size: "subtext2", timeMs: (0, l.Z)(g) ? g : 0, withCountdownSymbol: !0 })));
            }
            const p = c.default.create((e) => ({ sliderRow: { flexDirection: "row" }, slider: { flex: 1 }, sliderTimes: { flexDirection: "row", justifyContent: "space-between" } })),
                m = { seekSlider: o().hea01798 };
        },
        118149: (e, t, i) => {
            i.d(t, { uP: () => T });
            var a = i(807896),
                n = i(202784),
                r = i(325686),
                o = i(111677),
                l = i.n(o),
                s = i(643442),
                c = i(466445),
                d = i(837020),
                u = i(731708),
                p = i(154003),
                m = i(384153),
                h = i(483677),
                g = i(530732),
                b = i(522171),
                y = i(365023),
                f = i(292627),
                w = i(470397),
                v = i(392237),
                k = i(794215),
                S = i(823161),
                E = i(366635),
                C = i(41871),
                Z = i(625881);
            function x(e) {
                const t = B(e.onDockPress),
                    i = B(e.onUserPress),
                    o = B(e.onRequestClose),
                    l = B(e.onTogglePlayback);
                return n.createElement(n.Fragment, null, n.createElement(r.Z, { style: I.sliderContainer }, n.createElement(Z.S, { durationMs: e.durationMs, externalSeeking: e.isSeeking, onSeek: e.onSeek, onSliderActive: e.onSliderActive, progressMs: e.progressMs })), n.createElement(r.Z, { style: I.dockContentRow }, n.createElement(S.default, { "aria-hidden": !0, focusable: !1, onClick: i, screenName: e.user.screen_name, size: "large", uri: e.user.profile_image_url_https, withLink: !0 }), n.createElement(r.Z, { style: I.dockContentTitle }, n.createElement(w.Z, { size: "subtext2" }, n.createElement(E.Z, { isBlueVerified: e.user.is_blue_verified, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", onLinkClick: i, screenName: e.user.screen_name, screenNameSize: "subtext2", verifiedType: e.user.verified_type, weight: "normal", withLink: !0 }), n.createElement(k.Z, { size: "subtext2", timeMs: e.durationMs })), n.createElement(u.ZP, { numberOfLines: 1, onPress: t, size: "subtext2", weight: "bold" }, e.title)), n.createElement(p.ZP, (0, a.Z)({ "aria-label": e.isPlaying ? D.pause : D.play, icon: e.isPlaying ? n.createElement(s.default, null) : n.createElement(c.default, null), onPress: l, testID: "togglePlayback" }, R)), n.createElement(r.Z, { style: I.dockContentButtonSpacer }), n.createElement(p.ZP, (0, a.Z)({ "aria-label": D.close, icon: n.createElement(d.default, null), onPress: o, testID: "close" }, R))));
            }
            function _(e) {
                const t = B(e.onDockPress),
                    i = B(e.onRequestClose),
                    o = B(e.onTogglePlayback),
                    l = B(e.onUserPress),
                    m = n.useMemo(() => {
                        const t = e.user.profile_image_extensions_media_color?.palette;
                        if (t) {
                            const e = h.Z.get(t);
                            if (e) return A(e.rgb);
                        }
                        return v.default.theme.colors.primary;
                    }, [e.user]),
                    g = e.isMuted ? D.unmute : D.mute;
                return n.createElement(r.Z, { style: [M.wideContainer, M.wideContainerBorderRadius] }, n.createElement(r.Z, { style: M.mainContentContainer }, n.createElement(r.Z, { style: [M.wideAvatarContainer, { backgroundColor: m }] }, n.createElement(S.default, { "aria-hidden": !0, focusable: !1, onClick: l, screenName: e.user.screen_name, size: "xLarge", uri: e.user.profile_image_url_https, withLink: !0 })), n.createElement(r.Z, { style: M.mainContent }, n.createElement(E.Z, { isBlueVerified: e.user.is_blue_verified, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", onLinkClick: l, screenName: e.user.screen_name, screenNameSize: "subtext2", verifiedType: e.user.verified_type, weight: "normal", withLink: !0, withScreenName: !0 }), n.createElement(u.ZP, { numberOfLines: 2, onPress: t, size: "subtext2", weight: "bold" }, e.title))), n.createElement(r.Z, { style: M.belowMainContent }, n.createElement(r.Z, { style: M.slider }, n.createElement(Z.S, { durationMs: e.durationMs, externalSeeking: e.isSeeking, onSeek: e.onSeek, onSliderActive: e.onSliderActive, progressMs: e.progressMs, withTimes: !0 })), n.createElement(r.Z, { style: M.iconRow }, n.createElement(C.Z, (0, a.Z)({ accessibilityLabelIcon: g, accessibilityLabelSlider: D.volumeSlider, isMuted: e.isMuted, onMuteToggle: e.onMuteToggle, onSliderChange: e.onVolumeChange, sliderColor: "purple500", type: void 0, volumePercent: e.volume, withGraySliderTrack: !0, withNavigationSliderBackground: !0 }, R)), n.createElement(p.ZP, (0, a.Z)({ "aria-label": e.isPlaying ? D.pause : D.play, icon: e.isPlaying ? n.createElement(s.default, null) : n.createElement(c.default, null), onPress: o, testID: "togglePlayback" }, R)))), n.createElement(p.ZP, (0, a.Z)({ "aria-label": D.close, icon: n.createElement(d.default, null), onPress: i, style: M.closeIcon, testID: "close" }, R)));
            }
            function P(e) {
                const t = n.useRef({}),
                    i = n.useRef(null),
                    a = e.isWide && M.wideContainerBorderRadius,
                    o = B(() => {
                        t.current.isSliderActive || e.onDockPress();
                    }),
                    l = n.useMemo(
                        () =>
                            function () {
                                i.current && i.current.focus();
                            },
                        [],
                    );
                n.useEffect(() => {
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
                    n.useEffect(
                        () =>
                            function () {
                                clearTimeout(t.current.onSliderActiveTimeout);
                            },
                        [],
                    );
                const s = e.title || D.untitled,
                    c = {
                        ...e,
                        title: s,
                        onSliderActive: function (e) {
                            clearTimeout(t.current.onSliderActiveTimeout),
                                e
                                    ? (t.current.isSliderActive = e)
                                    : (t.current.onSliderActiveTimeout = setTimeout(() => {
                                          t.current.isSliderActive = e;
                                      }, L));
                        },
                    };
                return n.createElement(
                    b.Z,
                    { enabled: !0, handlers: { [b.Z.shortcuts.audio.dock]: l, [b.Z.shortcuts.audio.play]: e.onTogglePlayback } },
                    n.createElement(
                        g.Z,
                        {
                            "aria-label": D.voiceDock,
                            onPress: o,
                            ref: function (e) {
                                i.current = e;
                            },
                            style: [I.container, a],
                        },
                        n.createElement(r.Z, { style: [I.innerContainer, a] }, e.isWide ? n.createElement(_, c) : n.createElement(x, c)),
                    ),
                );
            }
            function T(e) {
                const t = e.isWide ? f.Z.DesktopVoiceTweetDock : f.Z.MobileVoiceTweetDock,
                    i = [e.isWide ? [M.root, { maxWidth: e.width }] : I.root];
                return n.createElement(
                    t,
                    null,
                    n.createElement(y.Z, { id: "VoiceTweetDock" }, (t, o) => n.createElement(r.Z, (0, a.Z)({ ref: t() }, o({ style: i })), n.createElement(P, e))),
                );
            }
            const D = { untitled: l().gfaaead8, close: l().af8fa2ae, pause: l().fb236728, play: l().f17dfdb6, voiceDock: l().cfd13f46, unmute: l().b8b6344a, mute: l().ec8ab8b4, volumeSlider: l().c9a642fa, seekSlider: l().hea01798 },
                R = { borderColor: "transparent", color: "text", size: "medium" },
                I = v.default.create((e) => ({ root: {}, container: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall }, innerContainer: { backgroundColor: e.colors.navigationBackground }, sliderContainer: { position: "absolute", zIndex: 1, top: 0, start: 0, end: 0, marginTop: -1 * e.spacesPx.space20, transform: [{ translateY: e.spacesPx.space20 / 2 }] }, dockContentRow: { padding: e.spaces.space4, flexDirection: "row", justifyContent: "center", alignItems: "center" }, dockContentTitle: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4, flexDirection: "column", flex: 1 }, dockContentButtonSpacer: { width: e.spaces.space12 } })),
                M = v.default.create((e) => {
                    const t = e.spaces.space16,
                        i = e.borderRadii.xLarge,
                        a = e.spaces.space4;
                    return { root: { alignSelf: "flex-end", width: "100%", marginVertical: e.spaces.space20, marginEnd: e.spaces.space20 }, wideContainerBorderRadius: { borderRadius: i }, wideContainer: { padding: t, paddingEnd: a }, wideAvatarContainer: { borderRadius: e.borderRadii.medium, padding: e.spaces.space12 }, mainContentContainer: { flexDirection: "row" }, mainContent: { marginStart: e.spaces.space12, marginEnd: e.spaces.space40, flex: 1, flexDirection: "column" }, username: { color: e.colors.gray700 }, closeIcon: { position: "absolute", top: a, end: a }, belowMainContent: { marginTop: e.spaces.space12, flexDirection: "row" }, slider: { flex: 1 }, iconRow: { marginStart: e.spaces.space12, flexDirection: "row", justifyContent: "center" } };
                });
            function B(e) {
                return m.Z.selectiveClickHandler((t) => {
                    "function" == typeof e && e();
                });
            }
            const A = (e, t = 1) => `rgba(${e.red}, ${e.green}, ${e.blue}, ${t})`,
                L = 200;
        },
        41871: (e, t, i) => {
            i.d(t, { Z: () => w });
            var a = i(807896),
                n = i(202784),
                r = i(325686),
                o = i(111677),
                l = i.n(o),
                s = i(83515),
                c = i(926628),
                d = i(301049),
                u = i(154003),
                p = i(466792),
                m = i(173739),
                h = i(392237);
            const g = l().b3160a69;
            class b extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { showSlider: !1, isSliderActive: !1 }),
                        (this._handleButtonLayoutChange = (e) => {
                            const { containerHeight: t } = this.props,
                                { sliderMaxHeight: i } = this.state,
                                { height: a } = e.nativeEvent.layout;
                            if (t) {
                                const e = t - a - h.default.theme.spacesPx.space20 + "px";
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
                            return f["large" === t ? "xLarge" : t];
                        }),
                        (this._handleKeyDown = (e) => {
                            const { onSliderChange: t, volumePercent: i } = this.props,
                                { altKey: a, ctrlKey: n, metaKey: r } = e;
                            if (a || n || r) return;
                            const o = e.key === d.Z.ArrowUp || e.key === d.Z.ArrowRight,
                                l = e.key === d.Z.ArrowDown || e.key === d.Z.ArrowLeft;
                            if (o || l) {
                                const a = this._normalizeValue(i + 10 * (o ? 1 : -1));
                                t && t(a), e.preventDefault();
                            }
                        });
                }
                componentDidUpdate(e, t) {
                    const { onHideSlider: i, onShowSlider: a, onSliderChange: n } = this.props;
                    if (n) {
                        const e = this._shouldShowSlider(t),
                            n = this._shouldShowSlider(this.state);
                        !e && n && a && a(), e && !n && i && i();
                    }
                }
                render() {
                    const { accessibilityLabelIcon: e, accessibilityLabelSlider: t, containerHeight: i, isMuted: o, onHideSlider: l, onMuteToggle: d, onShowSlider: b, onSliderChange: f, pullRight: w, sliderColor: v, volumePercent: k, withGraySliderTrack: S, withNavigationSliderBackground: E, ...C } = this.props,
                        Z = o ? n.createElement(s.default, null) : n.createElement(c.default, null),
                        x = E ? y.sliderWithNavigationBackground : y.sliderWithDefaultBackground;
                    return n.createElement(p.Z, { disabled: !f, onFocusRingGained: f ? this._showSlider : void 0, onFocusRingLost: f ? this._hideSlider : void 0, onHoverIn: f ? this._showSlider : void 0, onHoverOut: f ? this._hideSlider : void 0 }, n.createElement(r.Z, { onKeyDown: f ? this._handleKeyDown : void 0 }, n.createElement(u.ZP, (0, a.Z)({ "aria-label": e, icon: Z, onLayout: this._handleButtonLayoutChange, onPress: d, pullRight: w, type: "onMediaText" }, C)), f && n.createElement(p.Z, { onFocusRingGained: b, onFocusRingLost: l }, ({ isFocusedWithin: e }) => n.createElement(r.Z, { style: [y.sliderBackground, x, this._getSliderMarginStyles(C.size), e || this._shouldShowSlider(this.state) ? null : h.default.visuallyHidden, !!i && { maxHeight: this.state.sliderMaxHeight }] }, n.createElement(m.Z, { accessibilityLabelValueText: g({ volumePercent: k }), "aria-label": t, color: v || "white", isVertical: !0, keyboardStep: 10, max: 100, min: 0, onActive: this._handleSliderActive, onChange: f, step: 1, value: o ? 0 : k || 0, withGrayBackground: S })))));
                }
            }
            b.defaultProps = { pullRight: !1 };
            const y = h.default.create((e) => ({ sliderBackground: { bottom: 0, borderRadius: e.borderRadii.xLarge, height: `calc(${e.spaces.space64}*2)`, start: e.spaces.space4, position: "absolute", padding: e.spaces.space12, paddingVertical: e.spaces.space16, end: e.spaces.space4 }, sliderWithDefaultBackground: { backgroundColor: e.colors.translucentBlack30 }, sliderWithNavigationBackground: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall } })),
                f = h.default.create(({ spaces: e, spacesPx: t }) => {
                    const i = `${t.space16 + t.space4 + t.space2}px`,
                        a = `${t.space20 + t.space24}px`,
                        n = `${t.space12 + t.space40}px`;
                    return { xSmall: { marginBottom: e.space24 }, small: { marginBottom: e.space32 }, medium: { marginBottom: e.space36 }, large: { marginBottom: a }, xLarge: { marginBotom: n }, smallCompact: { marginBottom: i }, DEPRECATED_normalCompact: { marginBottom: e.space32 }, DEPRECATED_normal: { marginBottom: e.space40 } };
                }),
                w = b;
        },
        67877: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = (e, t) => {
                let i = null;
                const a = () => {
                    (i = null), e();
                };
                return () => (i || (i = t(a)), i);
            };
        },
        796684: (e, t, i) => {
            i.d(t, { Z: () => p });
            var a = i(202784),
                n = i(325686),
                r = i(913973),
                o = i(516951),
                l = i(731708),
                s = i(454740),
                c = i(58881),
                d = i(530732),
                u = i(392237);
            const p = (e) => {
                    const { "aria-label": t, "aria-posinset": i, "aria-setsize": p, checked: g, containerStyle: b, decoration: y, description: f, disabled: w, label: v, name: k, onChange: S, testID: E } = e,
                        C = "string" == typeof v ? a.createElement(l.ZP, { weight: "bold" }, v) : v,
                        Z = "string" == typeof f,
                        x = f ? (Z ? a.createElement(l.ZP, { color: "gray700", style: s.W.description }, f) : a.createElement(n.Z, { style: m.descriptionComponent }, f)) : null,
                        _ = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, customHoverBackgroundColor: u.default.theme.colors.transparent, customPressedBackgroundColor: u.default.theme.colors.transparent }),
                        P = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: g ? u.default.theme.colors.primary : u.default.theme.colors.gray700, withFocusWithinFocusRing: !0 });
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(d.Z, { disabled: w, interactiveStyles: _, role: "label", style: [s.W.root, b], testID: E }, (e) => a.createElement(a.Fragment, null, y ? a.createElement(n.Z, { style: s.W.decorationContainer }, y) : null, a.createElement(n.Z, { style: s.W.content }, C, Z && x), a.createElement(n.Z, { style: m.radioContainer }, a.createElement(d.Z, { disabled: w, interactiveStyles: P, interactivityState: e, style: m.radioBackground }, a.createElement(n.Z, { style: [m.circle, g && m.circleActive, w && m.circleDisabled, g && w && m.circleCheckedAndDisabled] }, g ? a.createElement(r.default, { style: m.checkMark }) : null)), a.createElement("input", { "aria-label": t, "aria-posinset": i, "aria-setsize": p, checked: g, disabled: w, name: k, onChange: g ? o.Z : S, style: h, type: "radio" })))),
                        Z ? null : x,
                    );
                },
                m = u.default.create((e) => ({ radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space24 }, nativeControl: { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, descriptionComponent: { marginHorizontal: e.spaces.space32 } })),
                h = { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" };
        },
        896632: (e, t, i) => {
            i.d(t, { Z: () => c });
            var a = i(202784),
                n = i(325686),
                r = i(731708),
                o = i(392237);
            let l = 1;
            const s = o.default.create((e) => ({ header: { alignItems: "flex-start" }, row: { flexDirection: "row" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 }, switchVariant: { padding: e.spaces.space2, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large } })),
                c = (e) => {
                    const { "aria-label": t, backgroundStyles: i, description: o, disabled: c, horizontal: d, label: u, name: p, onChange: m, options: h, renderBorderWhenSelected: g, renderSelector: b, selectorBackgroundStyles: y, switchStyle: f, value: w } = e,
                        v = (() => {
                            const e = a.useRef("");
                            return (
                                a.useEffect(() => {
                                    (e.current = `CONTROL_${l}_LABEL`), (l += 1);
                                }, []),
                                e
                            );
                        })(),
                        k = (e) => () => {
                            m(p, e);
                        };
                    return a.createElement(
                        n.Z,
                        { "aria-label": t, "aria-labelledby": u && !t ? v.current : void 0, role: "radiogroup", style: c && s.disabled },
                        u ? a.createElement(n.Z, { id: v.current, role: "label", style: s.header }, a.createElement(r.ZP, { style: s.label, weight: "bold" }, u), o ? a.createElement(r.ZP, { color: "gray700", size: "subtext2" }, o) : null) : null,
                        a.createElement(
                            n.Z,
                            { style: [d && s.row, f && s.switchVariant, i] },
                            h.map((e, t) => b({ "aria-posinset": t + 1, "aria-setsize": h.length, checked: e.value === w, disabled: c, name: p, switchStyle: f, horizontal: d, renderBorderWhenSelected: g, selectorBackgroundStyles: y, onChange: k(e.value), ...e })),
                        ),
                    );
                };
        },
        27137: (e, t, i) => {
            i.d(t, { Z: () => n });
            var a = i(157396);
            const n = (0, i(587878).Z)({ palette: a.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bd26965e.078e5d4a.js.map
