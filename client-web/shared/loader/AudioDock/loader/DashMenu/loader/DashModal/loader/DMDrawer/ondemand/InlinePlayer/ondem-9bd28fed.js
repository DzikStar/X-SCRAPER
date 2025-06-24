"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed", "icons/IconChevronDownNoMargin-js", "icons/IconPlus-js"],
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
                const f = r.useCallback((e) => r.createElement(u.Z.Default, (0, n.Z)({}, e, { type: l })), [l]);
                return r.createElement(
                    m.default,
                    (0, n.Z)({}, p, {
                        BorderComponent: f,
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
                        return r.createElement(f, e);
                    default:
                        return null;
                }
            }
            function f(e) {
                return "livevideo" === e.type ? r.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [b.liveVideoLabelContainer, b.borderNarrow, e.isWide ? b.liveVideoLabel : b.liveVideoLabelNarrow], type: "live" }) : r.createElement(a.Z, { style: [b.root, e.isWide ? b.rootWide : b.rootNarrow] }, r.createElement(u.Z.Default, { style: [b.spaceGradient, e.isWide ? b.borderWide : b.borderNarrow] }, r.createElement(l.default, { style: b.spaceIcon })));
            }
            const b = p.default.create((e) => {
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
                    f = o.ZP.descriptionTextParts(h, g);
                return f.length
                    ? n.createElement(
                          r.ZP,
                          { dir: "auto", numberOfLines: l ? 2 : void 0, style: c, testID: d },
                          f.map((t, i) => n.createElement(a.ZP, { animateIn: e, key: `user_${u}_textpart_${i}`, linkify: !0, part: t })),
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
                f = i(731708),
                b = i(682474),
                y = i(384153),
                v = i(483677),
                w = i(530732),
                k = i(392237),
                E = i(794215),
                S = i(823161),
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
                const l = e.withStraightBorders ? null : D.radius;
                return r.createElement(
                    w.Z,
                    {
                        "aria-label": T.voiceTweet,
                        link: e.link,
                        onLayout: function ({ nativeEvent: e }) {
                            const { width: t } = e.layout,
                                n = t < _.largeWidthBreakpoint;
                            i(n);
                        },
                        onPress: o,
                        role: "button",
                        style: [D.interactiveViewRoot, l],
                    },
                    r.createElement(a.Z, { style: l }, r.createElement(b.Z, { ratio: k.default.theme.aspectRatios.landscape }, null === t ? null : r.createElement(P, (0, n.Z)({}, e, { isNarrow: t })))),
                );
            }
            function P(e) {
                const { captionsState: t, isNarrow: i, tweet: n, withStraightBorders: o } = e,
                    [s, b] = r.useState(1);
                if (!C.B(n) || !n.voiceInfo) throw new Error("VoiceMedia tweet prop must have voiceInfo");
                const y = n.voiceInfo,
                    P = e.onMuteToggle,
                    { isMuted: M, isPlaying: R } = e;
                let A = k.default.theme.colors.primary;
                const B = n.user.profile_image_extensions_media_color?.palette;
                if (B) {
                    const e = v.Z.get(B);
                    e && (A = I(e.rgb));
                }
                const L = e.durationMs || x.getVoiceTweetDuration(n),
                    V = e.progressMs || 0,
                    z = Math.max(0, L - V);
                let W = 0;
                if (R) {
                    const e = y.audiowaveValues;
                    if (Array.isArray(e)) {
                        W = e[Math.floor(z) % e.length] / 100;
                    }
                }
                const H = i ? _.mobile : _.desktop,
                    N = i ? "subtext2" : "body",
                    F = [D.container, o ? null : D.radius, i ? D.containerMobile : D.containerDesktop],
                    j = [{ height: k.default.theme.fontSizesPx[N] }, D.lighter, D.white],
                    q = i ? "subtext3" : "body",
                    G = [{ height: H.captionsIcon }, D.white],
                    $ = [D.playbackToggle, { width: H.playbackToggle, height: H.playbackToggle, borderRadius: H.playbackToggle }],
                    O = [D.white, { width: H.playbackToggleIcon, height: H.playbackToggleIcon }];
                const U = void 0 === t || t === x.CaptionsState.unavailable,
                    Q = t === x.CaptionsState.on,
                    K = t === x.CaptionsState.off;
                let Y = T.captionsUnavailable;
                return (
                    Q ? (Y = T.hideCaptions) : K && (Y = T.showCaptions),
                    r.createElement(
                        a.Z,
                        {
                            onLayout: function ({ nativeEvent: e }) {
                                const { height: t } = e.layout,
                                    i = 0.7 * t,
                                    n = Math.floor(i / k.default.theme.lineHeightsPx[q]);
                                b(n);
                            },
                            style: [F, { backgroundColor: A }],
                        },
                        r.createElement(a.Z, { style: D.innerContainer }, r.createElement(a.Z, { style: D.topLeft }, r.createElement(f.ZP, { color: "white", size: N, style: D.clipIndex, weight: "heavy" }, y.clipIndex, "/", y.numberOfClips)), r.createElement(w.Z, { "aria-label": Y, disabled: U, onClick: e.onCaptionsToggle, style: D.topRight, testID: "captionsToggle" }, Q ? r.createElement(l.default, { style: G }) : r.createElement(c.default, { style: G })), r.createElement(a.Z, { style: D.bottomLeft }, r.createElement(f.ZP, { color: "white", size: N, style: D.lighter }, r.createElement(E.Z, { countdown: !0, timeMs: z })), r.createElement(a.Z, { style: D.muteButton }, r.createElement(w.Z, { "aria-label": M ? T.unmute : T.mute, onPress: P }, M ? r.createElement(d.default, { style: j }) : r.createElement(u.default, { style: j })))), r.createElement(a.Z, { style: D.bottomRight }, r.createElement(p.default, { style: [...j, D.twitterIcon] }), r.createElement(f.ZP, { color: "white", size: N, style: D.lighter, weight: "heavy" }, T.voice)), r.createElement(a.Z, null, g.Z.reducedMotionEnabled ? null : r.createElement(a.Z, { style: [D.voiceIndicator, R ? D.activeVoiceIndicator : D.inactiveVoiceIndicator] }, r.createElement(Z.Z, { audioLevel: W, color: k.default.theme.colors.white, paused: !R, size: H.avatar })), r.createElement(S.default, { size: "custom", style: { width: H.avatar, height: H.avatar }, uri: n.user.profile_image_url_https }), r.createElement(a.Z, { style: D.playbackToggleContainer }, r.createElement(a.Z, { style: $ }, R ? r.createElement(m.default, { style: O }) : r.createElement(h.default, { style: O })))), Q && e.caption ? r.createElement(a.Z, { style: D.captionViewer, testID: "captionsViewer" }, r.createElement(f.ZP, { align: "center", color: "whiteOnColor", numberOfLines: s, size: q }, e.caption)) : null),
                    )
                );
            }
            x.getVoiceTweetDuration = function (e) {
                const [t] = e.extended_entities?.media || [];
                let i;
                return t && "photo" !== t.type && t.video_info && (i = t.video_info.duration_millis), void 0 !== i ? i : -1;
            };
            const _ = { largeWidthBreakpoint: 400, mobile: { avatar: 90, playbackToggle: 38, playbackToggleIcon: 17, captionsIcon: 22 }, desktop: { avatar: 165, playbackToggle: 69, playbackToggleIcon: 31, captionsIcon: 40 } },
                D = k.default.create((e) => ({ interactiveViewRoot: { width: "100%", height: "100%" }, radius: { borderRadius: e.borderRadii.large }, container: { width: "100%", height: "100%" }, containerMobile: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, width: "100%", height: "100%" }, containerDesktop: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, innerContainer: { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, topLeft: { position: "absolute", top: 0, start: 0 }, topRight: { position: "absolute", top: 0, end: 0 }, captionViewer: { position: "absolute", bottom: "10%", padding: e.spaces.space8, backgroundColor: e.colors.translucentBlack77, borderRadius: e.borderRadii.small, marginHorizontal: "auto", width: "fit-content" }, bottomLeft: { position: "absolute", bottom: 0, start: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }, bottomRight: { position: "absolute", bottom: 0, end: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }, clipIndex: { letterSpacing: e.spaces.space2 }, captionsLabel: { letterSpacing: e.spaces.space2, marginTop: e.spaces.space4, textTransform: "uppercase" }, voiceIndicator: { transition: "opacity 0.2s 0s ease-in-out" }, activeVoiceIndicator: { opacity: 1 }, inactiveVoiceIndicator: { opacity: 0 }, playbackToggleContainer: { position: "absolute", top: 0, start: 0, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, playbackToggle: { backgroundColor: e.colors.translucentBlack77, justifyContent: "center", alignItems: "center" }, muteButton: { marginStart: e.spaces.space4 }, twitterIcon: { marginEnd: e.spaces.space4 }, white: { color: e.colors.white }, lighter: { opacity: 0.5 } })),
                T = { voice: s().h13ffc88, voiceTweet: s().c8c4600e, mute: s().ec8ab8b4, unmute: s().b8b6344a, play: s().de8c5eb2, pause: s().ec286028, showCaptions: s().a858b25c, hideCaptions: s().j25d7cca, captionsUnavailable: s().ad77feb6 };
            x.CaptionsState = Object.freeze({ on: "on", off: "off", unavailable: "unavailable" });
            const I = (e, t = 1) => `rgba(${e.red}, ${e.green}, ${e.blue}, ${t})`;
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
            i.d(t, { uP: () => D });
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
                f = i(522171),
                b = i(365023),
                y = i(292627),
                v = i(470397),
                w = i(392237),
                k = i(794215),
                E = i(823161),
                S = i(366635),
                Z = i(41871),
                C = i(625881);
            function x(e) {
                const t = A(e.onDockPress),
                    i = A(e.onUserPress),
                    o = A(e.onRequestClose),
                    s = A(e.onTogglePlayback);
                return r.createElement(r.Fragment, null, r.createElement(a.Z, { style: M.sliderContainer }, r.createElement(C.S, { durationMs: e.durationMs, externalSeeking: e.isSeeking, onSeek: e.onSeek, onSliderActive: e.onSliderActive, progressMs: e.progressMs })), r.createElement(a.Z, { style: M.dockContentRow }, r.createElement(E.default, { "aria-hidden": !0, focusable: !1, onClick: i, screenName: e.user.screen_name, size: "large", uri: e.user.profile_image_url_https, withLink: !0 }), r.createElement(a.Z, { style: M.dockContentTitle }, r.createElement(v.Z, { size: "subtext2" }, r.createElement(S.Z, { isBlueVerified: e.user.is_blue_verified, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", onLinkClick: i, screenName: e.user.screen_name, screenNameSize: "subtext2", verifiedType: e.user.verified_type, weight: "normal", withLink: !0 }), r.createElement(k.Z, { size: "subtext2", timeMs: e.durationMs })), r.createElement(u.ZP, { numberOfLines: 1, onPress: t, size: "subtext2", weight: "bold" }, e.title)), r.createElement(p.ZP, (0, n.Z)({ "aria-label": e.isPlaying ? T.pause : T.play, icon: e.isPlaying ? r.createElement(l.default, null) : r.createElement(c.default, null), onPress: s, testID: "togglePlayback" }, I)), r.createElement(a.Z, { style: M.dockContentButtonSpacer }), r.createElement(p.ZP, (0, n.Z)({ "aria-label": T.close, icon: r.createElement(d.default, null), onPress: o, testID: "close" }, I))));
            }
            function P(e) {
                const t = A(e.onDockPress),
                    i = A(e.onRequestClose),
                    o = A(e.onTogglePlayback),
                    s = A(e.onUserPress),
                    m = r.useMemo(() => {
                        const t = e.user.profile_image_extensions_media_color?.palette;
                        if (t) {
                            const e = h.Z.get(t);
                            if (e) return B(e.rgb);
                        }
                        return w.default.theme.colors.primary;
                    }, [e.user]),
                    g = e.isMuted ? T.unmute : T.mute;
                return r.createElement(a.Z, { style: [R.wideContainer, R.wideContainerBorderRadius] }, r.createElement(a.Z, { style: R.mainContentContainer }, r.createElement(a.Z, { style: [R.wideAvatarContainer, { backgroundColor: m }] }, r.createElement(E.default, { "aria-hidden": !0, focusable: !1, onClick: s, screenName: e.user.screen_name, size: "xLarge", uri: e.user.profile_image_url_https, withLink: !0 })), r.createElement(a.Z, { style: R.mainContent }, r.createElement(S.Z, { isBlueVerified: e.user.is_blue_verified, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", onLinkClick: s, screenName: e.user.screen_name, screenNameSize: "subtext2", verifiedType: e.user.verified_type, weight: "normal", withLink: !0, withScreenName: !0 }), r.createElement(u.ZP, { numberOfLines: 2, onPress: t, size: "subtext2", weight: "bold" }, e.title))), r.createElement(a.Z, { style: R.belowMainContent }, r.createElement(a.Z, { style: R.slider }, r.createElement(C.S, { durationMs: e.durationMs, externalSeeking: e.isSeeking, onSeek: e.onSeek, onSliderActive: e.onSliderActive, progressMs: e.progressMs, withTimes: !0 })), r.createElement(a.Z, { style: R.iconRow }, r.createElement(Z.Z, (0, n.Z)({ accessibilityLabelIcon: g, accessibilityLabelSlider: T.volumeSlider, isMuted: e.isMuted, onMuteToggle: e.onMuteToggle, onSliderChange: e.onVolumeChange, sliderColor: "purple500", type: void 0, volumePercent: e.volume, withGraySliderTrack: !0, withNavigationSliderBackground: !0 }, I)), r.createElement(p.ZP, (0, n.Z)({ "aria-label": e.isPlaying ? T.pause : T.play, icon: e.isPlaying ? r.createElement(l.default, null) : r.createElement(c.default, null), onPress: o, testID: "togglePlayback" }, I)))), r.createElement(p.ZP, (0, n.Z)({ "aria-label": T.close, icon: r.createElement(d.default, null), onPress: i, style: R.closeIcon, testID: "close" }, I)));
            }
            function _(e) {
                const t = r.useRef({}),
                    i = r.useRef(null),
                    n = e.isWide && R.wideContainerBorderRadius,
                    o = A(() => {
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
                const l = e.title || T.untitled,
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
                    f.Z,
                    { enabled: !0, handlers: { [f.Z.shortcuts.audio.dock]: s, [f.Z.shortcuts.audio.play]: e.onTogglePlayback } },
                    r.createElement(
                        g.Z,
                        {
                            "aria-label": T.voiceDock,
                            onPress: o,
                            ref: function (e) {
                                i.current = e;
                            },
                            style: [M.container, n],
                        },
                        r.createElement(a.Z, { style: [M.innerContainer, n] }, e.isWide ? r.createElement(P, c) : r.createElement(x, c)),
                    ),
                );
            }
            function D(e) {
                const t = e.isWide ? y.Z.DesktopVoiceTweetDock : y.Z.MobileVoiceTweetDock,
                    i = [e.isWide ? [R.root, { maxWidth: e.width }] : M.root];
                return r.createElement(
                    t,
                    null,
                    r.createElement(b.Z, { id: "VoiceTweetDock" }, (t, o) => r.createElement(a.Z, (0, n.Z)({ ref: t() }, o({ style: i })), r.createElement(_, e))),
                );
            }
            const T = { untitled: s().gfaaead8, close: s().af8fa2ae, pause: s().fb236728, play: s().f17dfdb6, voiceDock: s().cfd13f46, unmute: s().b8b6344a, mute: s().ec8ab8b4, volumeSlider: s().c9a642fa, seekSlider: s().hea01798 },
                I = { borderColor: "transparent", color: "text", size: "medium" },
                M = w.default.create((e) => ({ root: {}, container: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall }, innerContainer: { backgroundColor: e.colors.navigationBackground }, sliderContainer: { position: "absolute", zIndex: 1, top: 0, start: 0, end: 0, marginTop: -1 * e.spacesPx.space20, transform: [{ translateY: e.spacesPx.space20 / 2 }] }, dockContentRow: { padding: e.spaces.space4, flexDirection: "row", justifyContent: "center", alignItems: "center" }, dockContentTitle: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4, flexDirection: "column", flex: 1 }, dockContentButtonSpacer: { width: e.spaces.space12 } })),
                R = w.default.create((e) => {
                    const t = e.spaces.space16,
                        i = e.borderRadii.xLarge,
                        n = e.spaces.space4;
                    return { root: { alignSelf: "flex-end", width: "100%", marginVertical: e.spaces.space20, marginEnd: e.spaces.space20 }, wideContainerBorderRadius: { borderRadius: i }, wideContainer: { padding: t, paddingEnd: n }, wideAvatarContainer: { borderRadius: e.borderRadii.medium, padding: e.spaces.space12 }, mainContentContainer: { flexDirection: "row" }, mainContent: { marginStart: e.spaces.space12, marginEnd: e.spaces.space40, flex: 1, flexDirection: "column" }, username: { color: e.colors.gray700 }, closeIcon: { position: "absolute", top: n, end: n }, belowMainContent: { marginTop: e.spaces.space12, flexDirection: "row" }, slider: { flex: 1 }, iconRow: { marginStart: e.spaces.space12, flexDirection: "row", justifyContent: "center" } };
                });
            function A(e) {
                return m.Z.selectiveClickHandler((t) => {
                    "function" == typeof e && e();
                });
            }
            const B = (e, t = 1) => `rgba(${e.red}, ${e.green}, ${e.blue}, ${t})`,
                L = 200;
        },
        41871: (e, t, i) => {
            i.d(t, { Z: () => v });
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
            class f extends r.PureComponent {
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
                    const { accessibilityLabelIcon: e, accessibilityLabelSlider: t, containerHeight: i, isMuted: o, onHideSlider: s, onMuteToggle: d, onShowSlider: f, onSliderChange: y, pullRight: v, sliderColor: w, volumePercent: k, withGraySliderTrack: E, withNavigationSliderBackground: S, ...Z } = this.props,
                        C = o ? r.createElement(l.default, null) : r.createElement(c.default, null),
                        x = S ? b.sliderWithNavigationBackground : b.sliderWithDefaultBackground;
                    return r.createElement(p.Z, { disabled: !y, onFocusRingGained: y ? this._showSlider : void 0, onFocusRingLost: y ? this._hideSlider : void 0, onHoverIn: y ? this._showSlider : void 0, onHoverOut: y ? this._hideSlider : void 0 }, r.createElement(a.Z, { onKeyDown: y ? this._handleKeyDown : void 0 }, r.createElement(u.ZP, (0, n.Z)({ "aria-label": e, icon: C, onLayout: this._handleButtonLayoutChange, onPress: d, pullRight: v, type: "onMediaText" }, Z)), y && r.createElement(p.Z, { onFocusRingGained: f, onFocusRingLost: s }, ({ isFocusedWithin: e }) => r.createElement(a.Z, { style: [b.sliderBackground, x, this._getSliderMarginStyles(Z.size), e || this._shouldShowSlider(this.state) ? null : h.default.visuallyHidden, !!i && { maxHeight: this.state.sliderMaxHeight }] }, r.createElement(m.Z, { accessibilityLabelValueText: g({ volumePercent: k }), "aria-label": t, color: w || "white", isVertical: !0, keyboardStep: 10, max: 100, min: 0, onActive: this._handleSliderActive, onChange: y, step: 1, value: o ? 0 : k || 0, withGrayBackground: E })))));
                }
            }
            f.defaultProps = { pullRight: !1 };
            const b = h.default.create((e) => ({ sliderBackground: { bottom: 0, borderRadius: e.borderRadii.xLarge, height: `calc(${e.spaces.space64}*2)`, start: e.spaces.space4, position: "absolute", padding: e.spaces.space12, paddingVertical: e.spaces.space16, end: e.spaces.space4 }, sliderWithDefaultBackground: { backgroundColor: e.colors.translucentBlack30 }, sliderWithNavigationBackground: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall } })),
                y = h.default.create(({ spaces: e, spacesPx: t }) => {
                    const i = `${t.space16 + t.space4 + t.space2}px`,
                        n = `${t.space20 + t.space24}px`,
                        r = `${t.space12 + t.space40}px`;
                    return { xSmall: { marginBottom: e.space24 }, small: { marginBottom: e.space32 }, medium: { marginBottom: e.space36 }, large: { marginBottom: n }, xLarge: { marginBotom: r }, smallCompact: { marginBottom: i }, DEPRECATED_normalCompact: { marginBottom: e.space32 }, DEPRECATED_normal: { marginBottom: e.space40 } };
                }),
                v = f;
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
                    const { "aria-label": t, "aria-posinset": i, "aria-setsize": p, checked: g, containerStyle: f, decoration: b, description: y, disabled: v, label: w, name: k, onChange: E, testID: S } = e,
                        Z = "string" == typeof w ? n.createElement(s.ZP, { weight: "bold" }, w) : w,
                        C = "string" == typeof y,
                        x = y ? (C ? n.createElement(s.ZP, { color: "gray700", style: l.W.description }, y) : n.createElement(r.Z, { style: m.descriptionComponent }, y)) : null,
                        P = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, customHoverBackgroundColor: u.default.theme.colors.transparent, customPressedBackgroundColor: u.default.theme.colors.transparent }),
                        _ = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: g ? u.default.theme.colors.primary : u.default.theme.colors.gray700, withFocusWithinFocusRing: !0 });
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(d.Z, { disabled: v, interactiveStyles: P, role: "label", style: [l.W.root, f], testID: S }, (e) => n.createElement(n.Fragment, null, b ? n.createElement(r.Z, { style: l.W.decorationContainer }, b) : null, n.createElement(r.Z, { style: l.W.content }, Z, C && x), n.createElement(r.Z, { style: m.radioContainer }, n.createElement(d.Z, { disabled: v, interactiveStyles: _, interactivityState: e, style: m.radioBackground }, n.createElement(r.Z, { style: [m.circle, g && m.circleActive, v && m.circleDisabled, g && v && m.circleCheckedAndDisabled] }, g ? n.createElement(a.default, { style: m.checkMark }) : null)), n.createElement("input", { "aria-label": t, "aria-posinset": i, "aria-setsize": p, checked: g, disabled: v, name: k, onChange: g ? o.Z : E, style: h, type: "radio" })))),
                        C ? null : x,
                    );
                },
                m = u.default.create((e) => ({ radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space24 }, nativeControl: { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, descriptionComponent: { marginHorizontal: e.spaces.space32 } })),
                h = { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" };
        },
        63274: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                r = i(890601),
                a = i(783427),
                o = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 17 10", children: n.createElement("g", null, n.createElement("path", { d: "M.043 1.485L1.457.065 8.5 7.115l7.043-7.05 1.414 1.42L8.5 9.935.043 1.485z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 17, height: 10 };
            const l = s;
        },
        379327: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var n = i(202784),
                r = i(890601),
                a = i(783427),
                o = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
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
        465233: (e, t, i) => {
            i.d(t, { Z: () => r });
            var n = i(716406);
            function r(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(r) : (0, n.Z)(e, (e) => r(e));
            }
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed.54ff79da.js.map
