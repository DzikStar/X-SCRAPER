"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"],
    {
        433460: (e, t, i) => {
            i.d(t, { Z: () => h });
            var n = i(807896),
                r = i(202784),
                a = i(325686),
                o = i(111677),
                s = i.n(o),
                l = i(404971),
                c = i(868634),
                d = i(336373),
                u = i(181054),
                p = i(392237),
                m = i(823161);
            const h = function (e) {
                const t = d.Z.useAnalytics(),
                    [i, a] = r.useState(),
                    o = !!(i && i > 70),
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
                r.useEffect(() => {
                    switch (l) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [t, l]);
                const b = r.useCallback((e) => r.createElement(u.Z.Default, (0, n.Z)({}, e, { type: l })), [l]);
                return r.createElement(
                    m.default,
                    (0, n.Z)({}, p, {
                        BorderComponent: b,
                        "aria-label": h,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== i && a(t.width);
                            }
                        },
                        borderWidth: o ? "large" : "medium",
                        decoration: r.createElement(g, { isWide: o, type: l }),
                        gapWidth: o ? "space4" : "space2",
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
                        return r.createElement(b, e);
                    default:
                        return null;
                }
            }
            function b(e) {
                return "livevideo" === e.type ? r.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [f.liveVideoLabelContainer, f.borderNarrow, e.isWide ? f.liveVideoLabel : f.liveVideoLabelNarrow], type: "live" }) : r.createElement(a.Z, { style: [f.root, e.isWide ? f.rootWide : f.rootNarrow] }, r.createElement(u.Z.Default, { style: [f.spaceGradient, e.isWide ? f.borderWide : f.borderNarrow] }, r.createElement(l.default, { style: f.spaceIcon })));
            }
            const f = p.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        i = "100%",
                        n = e.spacesPx.space4,
                        r = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * n, bottom: -1 * n }, rootNarrow: { end: -1 * r, bottom: -1 * r }, borderWide: { borderWidth: n }, borderNarrow: { borderWidth: r }, spaceGradient: { justifyContent: "center", width: i, height: i, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                y = { withoutUsernameFallback: s().b3688156, activeAudioSpace: s().c0eb8825, activeLiveVideo: s().d068dc6d };
        },
        238406: (e, t, i) => {
            i.d(t, { Z: () => l });
            var n = i(202784),
                r = i(731708),
                a = i(354149),
                o = i(310452),
                s = i(720283);
            const l = ({ animateIn: e, description: t, entities: i, isConcise: l, style: c, testID: d, userId: u, withheldDescription: p, withheldEntities: m }) => {
                const { description: h, entities: g } = (0, s.H)({ description: t, entities: i, withheldDescription: p, withheldEntities: m }),
                    b = o.ZP.descriptionTextParts(h, g);
                return b.length
                    ? n.createElement(
                          r.ZP,
                          { dir: "auto", numberOfLines: l ? 2 : void 0, style: c, testID: d },
                          b.map((t, i) => n.createElement(a.ZP, { animateIn: e, key: `user_${u}_textpart_${i}`, linkify: !0, part: t })),
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
            const r = (e) => {
                    if (0 === e.length) return null;
                    const t = e[0],
                        { playbackState: i } = t.playerState;
                    if (i === n.q.FINISHED) {
                        const t = e.splice(0, 1)[0];
                        e.push(t);
                    }
                    return e[0];
                },
                a = { roundRobin: r },
                o = { autoplaySelectionPolicy: r, minimumVisibilityForAutoplay: 0.25 };
            class s {
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
            s.policies = a;
        },
        794294: (e, t, i) => {
            i.d(t, { Z: () => n });
            const n = i(392237).default.create((e) => ({ transitionTransform: { transitionProperty: "transform", transitionDuration: "400ms", transitionTimingFunction: "cubic-bezier(0.215, 0.610, 0.355, 1.000)" } }));
        },
        707816: (e, t, i) => {
            i.d(t, { EO: () => n, M8: () => a, TN: () => r });
            const n = () => (Math.random() > 0.5 ? 1 : -1);
            function r(e = 1, t = 0) {
                return Math.random() * (e - t) + t;
            }
            const a = (e) => ({ width: e, height: e });
        },
        421158: (e, t, i) => {
            i.d(t, { Z: () => a });
            var n = i(202784),
                r = i(803224);
            const a = n.createContext({ playbackPriority: r.W.NORMAL });
        },
        425474: (e, t, i) => {
            i.d(t, { Z: () => x });
            var n = i(807896),
                r = (i(571372), i(202784)),
                a = i(325686),
                o = i(111677),
                s = i.n(o),
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
                const [t, i] = r.useState(null);
                const o =
                    ((s = e.onPress),
                    y.Z.selectiveClickHandler((e) => {
                        "function" == typeof s && s();
                    }));
                var s;
                const l = e.withStraightBorders ? null : T.radius;
                return r.createElement(
                    v.Z,
                    {
                        "aria-label": R.voiceTweet,
                        link: e.link,
                        onLayout: function ({ nativeEvent: e }) {
                            const { width: t } = e.layout,
                                n = t < _.largeWidthBreakpoint;
                            i(n);
                        },
                        onPress: o,
                        role: "button",
                        style: [T.interactiveViewRoot, l],
                    },
                    r.createElement(a.Z, { style: l }, r.createElement(f.Z, { ratio: S.default.theme.aspectRatios.landscape }, null === t ? null : r.createElement(P, (0, n.Z)({}, e, { isNarrow: t })))),
                );
            }
            function P(e) {
                const { captionsState: t, isNarrow: i, tweet: n, withStraightBorders: o } = e,
                    [s, f] = r.useState(1);
                if (!C.B(n) || !n.voiceInfo) throw new Error("VoiceMedia tweet prop must have voiceInfo");
                const y = n.voiceInfo,
                    P = e.onMuteToggle,
                    { isMuted: I, isPlaying: M } = e;
                let B = S.default.theme.colors.primary;
                const A = n.user.profile_image_extensions_media_color?.palette;
                if (A) {
                    const e = w.Z.get(A);
                    e && (B = D(e.rgb));
                }
                const L = e.durationMs || x.getVoiceTweetDuration(n),
                    V = e.progressMs || 0,
                    z = Math.max(0, L - V);
                let W = 0;
                if (M) {
                    const e = y.audiowaveValues;
                    if (Array.isArray(e)) {
                        W = e[Math.floor(z) % e.length] / 100;
                    }
                }
                const N = i ? _.mobile : _.desktop,
                    H = i ? "subtext2" : "body",
                    F = [T.container, o ? null : T.radius, i ? T.containerMobile : T.containerDesktop],
                    j = [{ height: S.default.theme.fontSizesPx[H] }, T.lighter, T.white],
                    q = i ? "subtext3" : "body",
                    G = [{ height: N.captionsIcon }, T.white],
                    $ = [T.playbackToggle, { width: N.playbackToggle, height: N.playbackToggle, borderRadius: N.playbackToggle }],
                    O = [T.white, { width: N.playbackToggleIcon, height: N.playbackToggleIcon }];
                const U = void 0 === t || t === x.CaptionsState.unavailable,
                    Q = t === x.CaptionsState.on,
                    K = t === x.CaptionsState.off;
                let Y = R.captionsUnavailable;
                return (
                    Q ? (Y = R.hideCaptions) : K && (Y = R.showCaptions),
                    r.createElement(
                        a.Z,
                        {
                            onLayout: function ({ nativeEvent: e }) {
                                const { height: t } = e.layout,
                                    i = 0.7 * t,
                                    n = Math.floor(i / S.default.theme.lineHeightsPx[q]);
                                f(n);
                            },
                            style: [F, { backgroundColor: B }],
                        },
                        r.createElement(a.Z, { style: T.innerContainer }, r.createElement(a.Z, { style: T.topLeft }, r.createElement(b.ZP, { color: "white", size: H, style: T.clipIndex, weight: "heavy" }, y.clipIndex, "/", y.numberOfClips)), r.createElement(v.Z, { "aria-label": Y, disabled: U, onClick: e.onCaptionsToggle, style: T.topRight, testID: "captionsToggle" }, Q ? r.createElement(l.default, { style: G }) : r.createElement(c.default, { style: G })), r.createElement(a.Z, { style: T.bottomLeft }, r.createElement(b.ZP, { color: "white", size: H, style: T.lighter }, r.createElement(k.Z, { countdown: !0, timeMs: z })), r.createElement(a.Z, { style: T.muteButton }, r.createElement(v.Z, { "aria-label": I ? R.unmute : R.mute, onPress: P }, I ? r.createElement(d.default, { style: j }) : r.createElement(u.default, { style: j })))), r.createElement(a.Z, { style: T.bottomRight }, r.createElement(p.default, { style: [...j, T.twitterIcon] }), r.createElement(b.ZP, { color: "white", size: H, style: T.lighter, weight: "heavy" }, R.voice)), r.createElement(a.Z, null, g.Z.reducedMotionEnabled ? null : r.createElement(a.Z, { style: [T.voiceIndicator, M ? T.activeVoiceIndicator : T.inactiveVoiceIndicator] }, r.createElement(Z.Z, { audioLevel: W, color: S.default.theme.colors.white, paused: !M, size: N.avatar })), r.createElement(E.default, { size: "custom", style: { width: N.avatar, height: N.avatar }, uri: n.user.profile_image_url_https }), r.createElement(a.Z, { style: T.playbackToggleContainer }, r.createElement(a.Z, { style: $ }, M ? r.createElement(m.default, { style: O }) : r.createElement(h.default, { style: O })))), Q && e.caption ? r.createElement(a.Z, { style: T.captionViewer, testID: "captionsViewer" }, r.createElement(b.ZP, { align: "center", color: "whiteOnColor", numberOfLines: s, size: q }, e.caption)) : null),
                    )
                );
            }
            x.getVoiceTweetDuration = function (e) {
                const [t] = e.extended_entities?.media || [];
                let i;
                return t && "photo" !== t.type && t.video_info && (i = t.video_info.duration_millis), void 0 !== i ? i : -1;
            };
            const _ = { largeWidthBreakpoint: 400, mobile: { avatar: 90, playbackToggle: 38, playbackToggleIcon: 17, captionsIcon: 22 }, desktop: { avatar: 165, playbackToggle: 69, playbackToggleIcon: 31, captionsIcon: 40 } },
                T = S.default.create((e) => ({ interactiveViewRoot: { width: "100%", height: "100%" }, radius: { borderRadius: e.borderRadii.large }, container: { width: "100%", height: "100%" }, containerMobile: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, width: "100%", height: "100%" }, containerDesktop: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, innerContainer: { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, topLeft: { position: "absolute", top: 0, start: 0 }, topRight: { position: "absolute", top: 0, end: 0 }, captionViewer: { position: "absolute", bottom: "10%", padding: e.spaces.space8, backgroundColor: e.colors.translucentBlack77, borderRadius: e.borderRadii.small, marginHorizontal: "auto", width: "fit-content" }, bottomLeft: { position: "absolute", bottom: 0, start: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }, bottomRight: { position: "absolute", bottom: 0, end: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }, clipIndex: { letterSpacing: e.spaces.space2 }, captionsLabel: { letterSpacing: e.spaces.space2, marginTop: e.spaces.space4, textTransform: "uppercase" }, voiceIndicator: { transition: "opacity 0.2s 0s ease-in-out" }, activeVoiceIndicator: { opacity: 1 }, inactiveVoiceIndicator: { opacity: 0 }, playbackToggleContainer: { position: "absolute", top: 0, start: 0, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, playbackToggle: { backgroundColor: e.colors.translucentBlack77, justifyContent: "center", alignItems: "center" }, muteButton: { marginStart: e.spaces.space4 }, twitterIcon: { marginEnd: e.spaces.space4 }, white: { color: e.colors.white }, lighter: { opacity: 0.5 } })),
                R = { voice: s().h13ffc88, voiceTweet: s().c8c4600e, mute: s().ec8ab8b4, unmute: s().b8b6344a, play: s().de8c5eb2, pause: s().ec286028, showCaptions: s().a858b25c, hideCaptions: s().j25d7cca, captionsUnavailable: s().ad77feb6 };
            x.CaptionsState = Object.freeze({ on: "on", off: "off", unavailable: "unavailable" });
            const D = (e, t = 1) => `rgba(${e.red}, ${e.green}, ${e.blue}, ${t})`;
        },
        625881: (e, t, i) => {
            i.d(t, { S: () => u });
            var n = i(202784),
                r = i(325686),
                a = i(111677),
                o = i.n(a),
                s = i(184605),
                l = i(173739),
                c = i(392237),
                d = i(794215);
            function u(e) {
                const [t, i] = n.useState(e.progressMs),
                    [a, o] = n.useState(!1),
                    c = n.useRef(!1);
                n.useEffect(() => {
                    e.externalSeeking && (c.current = !1);
                }, [e.externalSeeking]);
                const u = (e.externalSeeking && c.current) || a ? t : e.progressMs,
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
                            o(i);
                        },
                        onChange: function (t) {
                            a || e.onSeek(t), i(t);
                        },
                        step: "any",
                        value: u,
                        withGrayBackground: !0,
                        withHidingThumb: !0,
                    });
                if (!e.withTimes) return h;
                const g = e.durationMs - u;
                return n.createElement(r.Z, null, n.createElement(r.Z, { style: p.sliderRow }, n.createElement(r.Z, { style: p.slider }, h)), n.createElement(r.Z, { style: p.sliderTimes }, n.createElement(d.Z, { size: "subtext2", timeMs: (0, s.Z)(u) ? u : 0 }), n.createElement(d.Z, { countdown: !0, size: "subtext2", timeMs: (0, s.Z)(g) ? g : 0, withCountdownSymbol: !0 })));
            }
            const p = c.default.create((e) => ({ sliderRow: { flexDirection: "row" }, slider: { flex: 1 }, sliderTimes: { flexDirection: "row", justifyContent: "space-between" } })),
                m = { seekSlider: o().hea01798 };
        },
        118149: (e, t, i) => {
            i.d(t, { uP: () => T });
            var n = i(807896),
                r = i(202784),
                a = i(325686),
                o = i(111677),
                s = i.n(o),
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
                const t = B(e.onDockPress),
                    i = B(e.onUserPress),
                    o = B(e.onRequestClose),
                    s = B(e.onTogglePlayback);
                return r.createElement(r.Fragment, null, r.createElement(a.Z, { style: I.sliderContainer }, r.createElement(C.S, { durationMs: e.durationMs, externalSeeking: e.isSeeking, onSeek: e.onSeek, onSliderActive: e.onSliderActive, progressMs: e.progressMs })), r.createElement(a.Z, { style: I.dockContentRow }, r.createElement(k.default, { "aria-hidden": !0, focusable: !1, onClick: i, screenName: e.user.screen_name, size: "large", uri: e.user.profile_image_url_https, withLink: !0 }), r.createElement(a.Z, { style: I.dockContentTitle }, r.createElement(w.Z, { size: "subtext2" }, r.createElement(E.Z, { isBlueVerified: e.user.is_blue_verified, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", onLinkClick: i, screenName: e.user.screen_name, screenNameSize: "subtext2", verifiedType: e.user.verified_type, weight: "normal", withLink: !0 }), r.createElement(S.Z, { size: "subtext2", timeMs: e.durationMs })), r.createElement(u.ZP, { numberOfLines: 1, onPress: t, size: "subtext2", weight: "bold" }, e.title)), r.createElement(p.ZP, (0, n.Z)({ "aria-label": e.isPlaying ? R.pause : R.play, icon: e.isPlaying ? r.createElement(l.default, null) : r.createElement(c.default, null), onPress: s, testID: "togglePlayback" }, D)), r.createElement(a.Z, { style: I.dockContentButtonSpacer }), r.createElement(p.ZP, (0, n.Z)({ "aria-label": R.close, icon: r.createElement(d.default, null), onPress: o, testID: "close" }, D))));
            }
            function P(e) {
                const t = B(e.onDockPress),
                    i = B(e.onRequestClose),
                    o = B(e.onTogglePlayback),
                    s = B(e.onUserPress),
                    m = r.useMemo(() => {
                        const t = e.user.profile_image_extensions_media_color?.palette;
                        if (t) {
                            const e = h.Z.get(t);
                            if (e) return A(e.rgb);
                        }
                        return v.default.theme.colors.primary;
                    }, [e.user]),
                    g = e.isMuted ? R.unmute : R.mute;
                return r.createElement(a.Z, { style: [M.wideContainer, M.wideContainerBorderRadius] }, r.createElement(a.Z, { style: M.mainContentContainer }, r.createElement(a.Z, { style: [M.wideAvatarContainer, { backgroundColor: m }] }, r.createElement(k.default, { "aria-hidden": !0, focusable: !1, onClick: s, screenName: e.user.screen_name, size: "xLarge", uri: e.user.profile_image_url_https, withLink: !0 })), r.createElement(a.Z, { style: M.mainContent }, r.createElement(E.Z, { isBlueVerified: e.user.is_blue_verified, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", onLinkClick: s, screenName: e.user.screen_name, screenNameSize: "subtext2", verifiedType: e.user.verified_type, weight: "normal", withLink: !0, withScreenName: !0 }), r.createElement(u.ZP, { numberOfLines: 2, onPress: t, size: "subtext2", weight: "bold" }, e.title))), r.createElement(a.Z, { style: M.belowMainContent }, r.createElement(a.Z, { style: M.slider }, r.createElement(C.S, { durationMs: e.durationMs, externalSeeking: e.isSeeking, onSeek: e.onSeek, onSliderActive: e.onSliderActive, progressMs: e.progressMs, withTimes: !0 })), r.createElement(a.Z, { style: M.iconRow }, r.createElement(Z.Z, (0, n.Z)({ accessibilityLabelIcon: g, accessibilityLabelSlider: R.volumeSlider, isMuted: e.isMuted, onMuteToggle: e.onMuteToggle, onSliderChange: e.onVolumeChange, sliderColor: "purple500", type: void 0, volumePercent: e.volume, withGraySliderTrack: !0, withNavigationSliderBackground: !0 }, D)), r.createElement(p.ZP, (0, n.Z)({ "aria-label": e.isPlaying ? R.pause : R.play, icon: e.isPlaying ? r.createElement(l.default, null) : r.createElement(c.default, null), onPress: o, testID: "togglePlayback" }, D)))), r.createElement(p.ZP, (0, n.Z)({ "aria-label": R.close, icon: r.createElement(d.default, null), onPress: i, style: M.closeIcon, testID: "close" }, D)));
            }
            function _(e) {
                const t = r.useRef({}),
                    i = r.useRef(null),
                    n = e.isWide && M.wideContainerBorderRadius,
                    o = B(() => {
                        t.current.isSliderActive || e.onDockPress();
                    }),
                    s = r.useMemo(
                        () =>
                            function () {
                                i.current && i.current.focus();
                            },
                        [],
                    );
                r.useEffect(() => {
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
                    r.useEffect(
                        () =>
                            function () {
                                clearTimeout(t.current.onSliderActiveTimeout);
                            },
                        [],
                    );
                const l = e.title || R.untitled,
                    c = {
                        ...e,
                        title: l,
                        onSliderActive: function (e) {
                            clearTimeout(t.current.onSliderActiveTimeout),
                                e
                                    ? (t.current.isSliderActive = e)
                                    : (t.current.onSliderActiveTimeout = setTimeout(() => {
                                          t.current.isSliderActive = e;
                                      }, L));
                        },
                    };
                return r.createElement(
                    b.Z,
                    { enabled: !0, handlers: { [b.Z.shortcuts.audio.dock]: s, [b.Z.shortcuts.audio.play]: e.onTogglePlayback } },
                    r.createElement(
                        g.Z,
                        {
                            "aria-label": R.voiceDock,
                            onPress: o,
                            ref: function (e) {
                                i.current = e;
                            },
                            style: [I.container, n],
                        },
                        r.createElement(a.Z, { style: [I.innerContainer, n] }, e.isWide ? r.createElement(P, c) : r.createElement(x, c)),
                    ),
                );
            }
            function T(e) {
                const t = e.isWide ? y.Z.DesktopVoiceTweetDock : y.Z.MobileVoiceTweetDock,
                    i = [e.isWide ? [M.root, { maxWidth: e.width }] : I.root];
                return r.createElement(
                    t,
                    null,
                    r.createElement(f.Z, { id: "VoiceTweetDock" }, (t, o) => r.createElement(a.Z, (0, n.Z)({ ref: t() }, o({ style: i })), r.createElement(_, e))),
                );
            }
            const R = { untitled: s().gfaaead8, close: s().af8fa2ae, pause: s().fb236728, play: s().f17dfdb6, voiceDock: s().cfd13f46, unmute: s().b8b6344a, mute: s().ec8ab8b4, volumeSlider: s().c9a642fa, seekSlider: s().hea01798 },
                D = { borderColor: "transparent", color: "text", size: "medium" },
                I = v.default.create((e) => ({ root: {}, container: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall }, innerContainer: { backgroundColor: e.colors.navigationBackground }, sliderContainer: { position: "absolute", zIndex: 1, top: 0, start: 0, end: 0, marginTop: -1 * e.spacesPx.space20, transform: [{ translateY: e.spacesPx.space20 / 2 }] }, dockContentRow: { padding: e.spaces.space4, flexDirection: "row", justifyContent: "center", alignItems: "center" }, dockContentTitle: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4, flexDirection: "column", flex: 1 }, dockContentButtonSpacer: { width: e.spaces.space12 } })),
                M = v.default.create((e) => {
                    const t = e.spaces.space16,
                        i = e.borderRadii.xLarge,
                        n = e.spaces.space4;
                    return { root: { alignSelf: "flex-end", width: "100%", marginVertical: e.spaces.space20, marginEnd: e.spaces.space20 }, wideContainerBorderRadius: { borderRadius: i }, wideContainer: { padding: t, paddingEnd: n }, wideAvatarContainer: { borderRadius: e.borderRadii.medium, padding: e.spaces.space12 }, mainContentContainer: { flexDirection: "row" }, mainContent: { marginStart: e.spaces.space12, marginEnd: e.spaces.space40, flex: 1, flexDirection: "column" }, username: { color: e.colors.gray700 }, closeIcon: { position: "absolute", top: n, end: n }, belowMainContent: { marginTop: e.spaces.space12, flexDirection: "row" }, slider: { flex: 1 }, iconRow: { marginStart: e.spaces.space12, flexDirection: "row", justifyContent: "center" } };
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
            var n = i(807896),
                r = i(202784),
                a = i(325686),
                o = i(111677),
                s = i.n(o),
                l = i(83515),
                c = i(926628),
                d = i(301049),
                u = i(154003),
                p = i(466792),
                m = i(173739),
                h = i(392237);
            const g = s().b3160a69;
            class b extends r.PureComponent {
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
                                { altKey: n, ctrlKey: r, metaKey: a } = e;
                            if (n || r || a) return;
                            const o = e.key === d.Z.ArrowUp || e.key === d.Z.ArrowRight,
                                s = e.key === d.Z.ArrowDown || e.key === d.Z.ArrowLeft;
                            if (o || s) {
                                const n = this._normalizeValue(i + 10 * (o ? 1 : -1));
                                t && t(n), e.preventDefault();
                            }
                        });
                }
                componentDidUpdate(e, t) {
                    const { onHideSlider: i, onShowSlider: n, onSliderChange: r } = this.props;
                    if (r) {
                        const e = this._shouldShowSlider(t),
                            r = this._shouldShowSlider(this.state);
                        !e && r && n && n(), e && !r && i && i();
                    }
                }
                render() {
                    const { accessibilityLabelIcon: e, accessibilityLabelSlider: t, containerHeight: i, isMuted: o, onHideSlider: s, onMuteToggle: d, onShowSlider: b, onSliderChange: y, pullRight: w, sliderColor: v, volumePercent: S, withGraySliderTrack: k, withNavigationSliderBackground: E, ...Z } = this.props,
                        C = o ? r.createElement(l.default, null) : r.createElement(c.default, null),
                        x = E ? f.sliderWithNavigationBackground : f.sliderWithDefaultBackground;
                    return r.createElement(p.Z, { disabled: !y, onFocusRingGained: y ? this._showSlider : void 0, onFocusRingLost: y ? this._hideSlider : void 0, onHoverIn: y ? this._showSlider : void 0, onHoverOut: y ? this._hideSlider : void 0 }, r.createElement(a.Z, { onKeyDown: y ? this._handleKeyDown : void 0 }, r.createElement(u.ZP, (0, n.Z)({ "aria-label": e, icon: C, onLayout: this._handleButtonLayoutChange, onPress: d, pullRight: w, type: "onMediaText" }, Z)), y && r.createElement(p.Z, { onFocusRingGained: b, onFocusRingLost: s }, ({ isFocusedWithin: e }) => r.createElement(a.Z, { style: [f.sliderBackground, x, this._getSliderMarginStyles(Z.size), e || this._shouldShowSlider(this.state) ? null : h.default.visuallyHidden, !!i && { maxHeight: this.state.sliderMaxHeight }] }, r.createElement(m.Z, { accessibilityLabelValueText: g({ volumePercent: S }), "aria-label": t, color: v || "white", isVertical: !0, keyboardStep: 10, max: 100, min: 0, onActive: this._handleSliderActive, onChange: y, step: 1, value: o ? 0 : S || 0, withGrayBackground: k })))));
                }
            }
            b.defaultProps = { pullRight: !1 };
            const f = h.default.create((e) => ({ sliderBackground: { bottom: 0, borderRadius: e.borderRadii.xLarge, height: `calc(${e.spaces.space64}*2)`, start: e.spaces.space4, position: "absolute", padding: e.spaces.space12, paddingVertical: e.spaces.space16, end: e.spaces.space4 }, sliderWithDefaultBackground: { backgroundColor: e.colors.translucentBlack30 }, sliderWithNavigationBackground: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall } })),
                y = h.default.create(({ spaces: e, spacesPx: t }) => {
                    const i = `${t.space16 + t.space4 + t.space2}px`,
                        n = `${t.space20 + t.space24}px`,
                        r = `${t.space12 + t.space40}px`;
                    return { xSmall: { marginBottom: e.space24 }, small: { marginBottom: e.space32 }, medium: { marginBottom: e.space36 }, large: { marginBottom: n }, xLarge: { marginBotom: r }, smallCompact: { marginBottom: i }, DEPRECATED_normalCompact: { marginBottom: e.space32 }, DEPRECATED_normal: { marginBottom: e.space40 } };
                }),
                w = b;
        },
        796684: (e, t, i) => {
            i.d(t, { Z: () => p });
            var n = i(202784),
                r = i(325686),
                a = i(913973),
                o = i(516951),
                s = i(731708),
                l = i(454740),
                c = i(58881),
                d = i(530732),
                u = i(392237);
            const p = (e) => {
                    const { "aria-label": t, "aria-posinset": i, "aria-setsize": p, checked: g, containerStyle: b, decoration: f, description: y, disabled: w, label: v, name: S, onChange: k, testID: E } = e,
                        Z = "string" == typeof v ? n.createElement(s.ZP, { weight: "bold" }, v) : v,
                        C = "string" == typeof y,
                        x = y ? (C ? n.createElement(s.ZP, { color: "gray700", style: l.W.description }, y) : n.createElement(r.Z, { style: m.descriptionComponent }, y)) : null,
                        P = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, customHoverBackgroundColor: u.default.theme.colors.transparent, customPressedBackgroundColor: u.default.theme.colors.transparent }),
                        _ = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: g ? u.default.theme.colors.primary : u.default.theme.colors.gray700, withFocusWithinFocusRing: !0 });
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(d.Z, { disabled: w, interactiveStyles: P, role: "label", style: [l.W.root, b], testID: E }, (e) => n.createElement(n.Fragment, null, f ? n.createElement(r.Z, { style: l.W.decorationContainer }, f) : null, n.createElement(r.Z, { style: l.W.content }, Z, C && x), n.createElement(r.Z, { style: m.radioContainer }, n.createElement(d.Z, { disabled: w, interactiveStyles: _, interactivityState: e, style: m.radioBackground }, n.createElement(r.Z, { style: [m.circle, g && m.circleActive, w && m.circleDisabled, g && w && m.circleCheckedAndDisabled] }, g ? n.createElement(a.default, { style: m.checkMark }) : null)), n.createElement("input", { "aria-label": t, "aria-posinset": i, "aria-setsize": p, checked: g, disabled: w, name: S, onChange: g ? o.Z : k, style: h, type: "radio" })))),
                        C ? null : x,
                    );
                },
                m = u.default.create((e) => ({ radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space24 }, nativeControl: { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, descriptionComponent: { marginHorizontal: e.spaces.space32 } })),
                h = { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" };
        },
        896632: (e, t, i) => {
            i.d(t, { Z: () => c });
            var n = i(202784),
                r = i(325686),
                a = i(731708),
                o = i(392237);
            let s = 1;
            const l = o.default.create((e) => ({ header: { alignItems: "flex-start" }, row: { flexDirection: "row" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 }, switchVariant: { padding: e.spaces.space2, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large } })),
                c = (e) => {
                    const { "aria-label": t, backgroundStyles: i, description: o, disabled: c, horizontal: d, label: u, name: p, onChange: m, options: h, renderBorderWhenSelected: g, renderSelector: b, selectorBackgroundStyles: f, switchStyle: y, value: w } = e,
                        v = (() => {
                            const e = n.useRef("");
                            return (
                                n.useEffect(() => {
                                    (e.current = `CONTROL_${s}_LABEL`), (s += 1);
                                }, []),
                                e
                            );
                        })(),
                        S = (e) => () => {
                            m(p, e);
                        };
                    return n.createElement(
                        r.Z,
                        { "aria-label": t, "aria-labelledby": u && !t ? v.current : void 0, role: "radiogroup", style: c && l.disabled },
                        u ? n.createElement(r.Z, { id: v.current, role: "label", style: l.header }, n.createElement(a.ZP, { style: l.label, weight: "bold" }, u), o ? n.createElement(a.ZP, { color: "gray700", size: "subtext2" }, o) : null) : null,
                        n.createElement(
                            r.Z,
                            { style: [d && l.row, y && l.switchVariant, i] },
                            h.map((e, t) => b({ "aria-posinset": t + 1, "aria-setsize": h.length, checked: e.value === w, disabled: c, name: p, switchStyle: y, horizontal: d, renderBorderWhenSelected: g, selectorBackgroundStyles: f, onChange: S(e.value), ...e })),
                        ),
                    );
                };
        },
        27137: (e, t, i) => {
            i.d(t, { Z: () => r });
            var n = i(157396);
            const r = (0, i(587878).Z)({ palette: n.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        364837: (e, t, i) => {
            i.d(t, { R: () => c });
            var n = i(19697),
                r = i(549755),
                a = i(205074);
            const o = 1,
                s = 2,
                l = 3,
                c = (e) => {
                    if ((0, a.DS)(e)) {
                        if (e.isGif) {
                            const { height: t, img: i, orientation: a, width: o } = e;
                            return (0, n.$i)(i, o, t, a).then(
                                (e) => (0, n.q8)(e),
                                (e) => {
                                    throw new r.Z("Gif preview could not be generated", l);
                                },
                            );
                        }
                        {
                            const e = new r.Z("The provided image must be a gif", s);
                            return Promise.reject(e);
                        }
                    }
                    {
                        const e = new r.Z("The provided file is not a valid image", o);
                        return Promise.reject(e);
                    }
                };
        },
        220760: (e, t, i) => {
            i.d(t, { E: () => s });
            var n = i(202784),
                r = i(715729),
                a = i(465233),
                o = i(516951);
            function s(e) {
                const t = e || {},
                    i = (0, a.Z)(t);
                let s = (0, a.Z)(i);
                const c = new Set();
                function d(e) {
                    return (
                        c.add(e),
                        function () {
                            c.delete(e);
                        }
                    );
                }
                function u() {
                    c.forEach((e) => {
                        e(s);
                    });
                }
                function p(e) {
                    return function (t) {
                        const i = e.current.slice,
                            n = e.current.state,
                            r = e.current.selector(t);
                        e.current.equality(r, i, t, n) || ((e.current.slice = r), (e.current.state = t), e.current.onUpdate(e.current.slice));
                    };
                }
                return {
                    getState: function () {
                        return s;
                    },
                    setState: function (e) {
                        (s = (0, r.ZP)(s, (t) => e(t))), u();
                    },
                    reset: function () {
                        (s = (0, a.Z)(i)), u();
                    },
                    useSlice: function (e, t) {
                        const i = t?.equalityFn || l.equality,
                            r = o.Z,
                            a = n.useRef({ state: s, slice: e(s), selector: e, equality: i, onUpdate: r });
                        (a.current.selector = e), (a.current.equality = i);
                        const [c, u] = n.useState(() => a.current.slice);
                        return (
                            n.useEffect(() => {
                                let e = !0;
                                a.current.onUpdate = (e) => u(() => e);
                                const t = p(a);
                                function i(i) {
                                    e && t(i);
                                }
                                i(s);
                                const n = d(i);
                                return function () {
                                    (e = !1), n();
                                };
                            }, []),
                            c
                        );
                    },
                    subscribe: function (e, t, i) {
                        const n = i?.equalityFn || l.equality,
                            r = { current: { state: s, slice: e(s), selector: e, equality: n, onUpdate: t } },
                            a = d(p(r));
                        return r.current.onUpdate(r.current.slice), a;
                    },
                };
            }
            (0, r.GP)();
            const l = { equality: (e, t, i, n) => e === t };
        },
        193089: (e, t, i) => {
            i.d(t, { Z: () => n });
            const n = (e) => {
                const t = new Map();
                return (
                    e.forEach(([e, i]) => {
                        t.set(e, i);
                    }),
                    t
                );
            };
        },
        166502: (e, t, i) => {
            i.d(t, { Z: () => n });
            const n = (e, t) => {
                const i = null == e ? 0 : e.length;
                if (!i || t < 1) return [];
                let n = 0,
                    r = 0;
                const a = new Array(Math.ceil(i / t));
                for (; n < i; ) (a[r] = e.slice(n, (n += t))), (r += 1);
                return a;
            };
        },
        326399: (e, t, i) => {
            i.d(t, { Z: () => s });
            var n = i(827515),
                r = i(676145);
            const a = (e, t) => {
                if ((0, n.Z)(e) && (0, n.Z)(t)) {
                    if (e > t) return 1;
                    if (e < t) return -1;
                } else if ((0, r.Z)(e) && (0, r.Z)(t)) {
                    if (e > t) return 1;
                    if (e < t) return -1;
                } else if (o(e) && o(t)) {
                    if (e > t) return 1;
                    if (e < t) return -1;
                }
                return 0;
            };
            function o(e) {
                return "boolean" == typeof e;
            }
            const s = (e, t, i) => {
                const s = (0, r.Z)(i) ? Array(t.length).fill(i) : i,
                    l = t.map((e) =>
                        (0, r.Z)(e)
                            ? (t) => {
                                  const i = "object" == typeof t ? t?.[e] : void 0;
                                  return (0, r.Z)(i) || (0, n.Z)(i) || o(i) ? i : void 0;
                              }
                            : e,
                    );
                return e.concat().sort(
                    ((e, t) => (i, n) => {
                        for (let r = 0; r < e.length; r++) {
                            const o = e[r],
                                s = t[r] || "asc",
                                l = a(o(i), o(n));
                            if (0 !== l) return "desc" === s ? -1 * l : l;
                        }
                        return 0;
                    })(l, s),
                );
            };
        },
        822240: (e, t, i) => {
            i.d(t, { Z: () => n });
            i(136728);
            const n = (e, t, i = 1) => {
                const n = [];
                for (let r = e; i > 0 ? r < t : r > t; r += i) n.push(r);
                return n;
            };
        },
        684565: (e, t, i) => {
            i.d(t, { C: () => n });
            const n = (e, t) =>
                e.reduce((e, i) => {
                    const n = t(i);
                    return "number" == typeof n ? e + n : e;
                }, 0);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed.c72ae13a.js.map
