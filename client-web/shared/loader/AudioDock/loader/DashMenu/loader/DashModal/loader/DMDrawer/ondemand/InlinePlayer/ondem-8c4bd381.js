"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-8c4bd381"],
    {
        81400: (e, t, i) => {
            i.d(t, { Z: () => l });
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
            class l {
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
            l.policies = o;
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
                l = i.n(r),
                s = i(38502),
                c = i(498844),
                u = i(83515),
                d = i(926628),
                p = i(520913),
                m = i(643442),
                g = i(466445),
                h = i(461756),
                y = i(731708),
                f = i(682474),
                b = i(384153),
                w = i(483677),
                S = i(530732),
                k = i(392237),
                v = i(794215),
                E = i(823161),
                Z = i(272594),
                C = i(586035);
            function x(e) {
                const [t, i] = a.useState(null);
                const r =
                    ((l = e.onPress),
                    b.Z.selectiveClickHandler((e) => {
                        "function" == typeof l && l();
                    }));
                var l;
                const s = e.withStraightBorders ? null : T.radius;
                return a.createElement(
                    S.Z,
                    {
                        "aria-label": M.voiceTweet,
                        link: e.link,
                        onLayout: function ({ nativeEvent: e }) {
                            const { width: t } = e.layout,
                                n = t < P.largeWidthBreakpoint;
                            i(n);
                        },
                        onPress: r,
                        role: "button",
                        style: [T.interactiveViewRoot, s],
                    },
                    a.createElement(o.Z, { style: s }, a.createElement(f.Z, { ratio: k.default.theme.aspectRatios.landscape }, null === t ? null : a.createElement(_, (0, n.Z)({}, e, { isNarrow: t })))),
                );
            }
            function _(e) {
                const { captionsState: t, isNarrow: i, tweet: n, withStraightBorders: r } = e,
                    [l, f] = a.useState(1);
                if (!C.B(n) || !n.voiceInfo) throw new Error("VoiceMedia tweet prop must have voiceInfo");
                const b = n.voiceInfo,
                    _ = e.onMuteToggle,
                    { isMuted: I, isPlaying: R } = e;
                let A = k.default.theme.colors.primary;
                const B = n.user.profile_image_extensions_media_color?.palette;
                if (B) {
                    const e = w.Z.get(B);
                    e && (A = D(e.rgb));
                }
                const L = e.durationMs || x.getVoiceTweetDuration(n),
                    V = e.progressMs || 0,
                    z = Math.max(0, L - V);
                let H = 0;
                if (R) {
                    const e = b.audiowaveValues;
                    if (Array.isArray(e)) {
                        H = e[Math.floor(z) % e.length] / 100;
                    }
                }
                const N = i ? P.mobile : P.desktop,
                    F = i ? "subtext2" : "body",
                    W = [T.container, r ? null : T.radius, i ? T.containerMobile : T.containerDesktop],
                    G = [{ height: k.default.theme.fontSizesPx[F] }, T.lighter, T.white],
                    $ = i ? "subtext3" : "body",
                    j = [{ height: N.captionsIcon }, T.white],
                    O = [T.playbackToggle, { width: N.playbackToggle, height: N.playbackToggle, borderRadius: N.playbackToggle }],
                    Q = [T.white, { width: N.playbackToggleIcon, height: N.playbackToggleIcon }];
                const q = void 0 === t || t === x.CaptionsState.unavailable,
                    U = t === x.CaptionsState.on,
                    K = t === x.CaptionsState.off;
                let Y = M.captionsUnavailable;
                return (
                    U ? (Y = M.hideCaptions) : K && (Y = M.showCaptions),
                    a.createElement(
                        o.Z,
                        {
                            onLayout: function ({ nativeEvent: e }) {
                                const { height: t } = e.layout,
                                    i = 0.7 * t,
                                    n = Math.floor(i / k.default.theme.lineHeightsPx[$]);
                                f(n);
                            },
                            style: [W, { backgroundColor: A }],
                        },
                        a.createElement(o.Z, { style: T.innerContainer }, a.createElement(o.Z, { style: T.topLeft }, a.createElement(y.ZP, { color: "white", size: F, style: T.clipIndex, weight: "heavy" }, b.clipIndex, "/", b.numberOfClips)), a.createElement(S.Z, { "aria-label": Y, disabled: q, onClick: e.onCaptionsToggle, style: T.topRight, testID: "captionsToggle" }, U ? a.createElement(s.default, { style: j }) : a.createElement(c.default, { style: j })), a.createElement(o.Z, { style: T.bottomLeft }, a.createElement(y.ZP, { color: "white", size: F, style: T.lighter }, a.createElement(v.Z, { countdown: !0, timeMs: z })), a.createElement(o.Z, { style: T.muteButton }, a.createElement(S.Z, { "aria-label": I ? M.unmute : M.mute, onPress: _ }, I ? a.createElement(u.default, { style: G }) : a.createElement(d.default, { style: G })))), a.createElement(o.Z, { style: T.bottomRight }, a.createElement(p.default, { style: [...G, T.twitterIcon] }), a.createElement(y.ZP, { color: "white", size: F, style: T.lighter, weight: "heavy" }, M.voice)), a.createElement(o.Z, null, h.Z.reducedMotionEnabled ? null : a.createElement(o.Z, { style: [T.voiceIndicator, R ? T.activeVoiceIndicator : T.inactiveVoiceIndicator] }, a.createElement(Z.Z, { audioLevel: H, color: k.default.theme.colors.white, paused: !R, size: N.avatar })), a.createElement(E.default, { size: "custom", style: { width: N.avatar, height: N.avatar }, uri: n.user.profile_image_url_https }), a.createElement(o.Z, { style: T.playbackToggleContainer }, a.createElement(o.Z, { style: O }, R ? a.createElement(m.default, { style: Q }) : a.createElement(g.default, { style: Q })))), U && e.caption ? a.createElement(o.Z, { style: T.captionViewer, testID: "captionsViewer" }, a.createElement(y.ZP, { align: "center", color: "whiteOnColor", numberOfLines: l, size: $ }, e.caption)) : null),
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
                M = { voice: l().h13ffc88, voiceTweet: l().c8c4600e, mute: l().ec8ab8b4, unmute: l().b8b6344a, play: l().de8c5eb2, pause: l().ec286028, showCaptions: l().a858b25c, hideCaptions: l().j25d7cca, captionsUnavailable: l().ad77feb6 };
            x.CaptionsState = Object.freeze({ on: "on", off: "off", unavailable: "unavailable" });
            const D = (e, t = 1) => `rgba(${e.red}, ${e.green}, ${e.blue}, ${t})`;
        },
        625881: (e, t, i) => {
            i.d(t, { S: () => d });
            var n = i(202784),
                a = i(325686),
                o = i(111677),
                r = i.n(o),
                l = i(184605),
                s = i(173739),
                c = i(392237),
                u = i(794215);
            function d(e) {
                const [t, i] = n.useState(e.progressMs),
                    [o, r] = n.useState(!1),
                    c = n.useRef(!1);
                n.useEffect(() => {
                    e.externalSeeking && (c.current = !1);
                }, [e.externalSeeking]);
                const d = (e.externalSeeking && c.current) || o ? t : e.progressMs,
                    g = n.createElement(s.Z, {
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
                        value: d,
                        withGrayBackground: !0,
                        withHidingThumb: !0,
                    });
                if (!e.withTimes) return g;
                const h = e.durationMs - d;
                return n.createElement(a.Z, null, n.createElement(a.Z, { style: p.sliderRow }, n.createElement(a.Z, { style: p.slider }, g)), n.createElement(a.Z, { style: p.sliderTimes }, n.createElement(u.Z, { size: "subtext2", timeMs: (0, l.Z)(d) ? d : 0 }), n.createElement(u.Z, { countdown: !0, size: "subtext2", timeMs: (0, l.Z)(h) ? h : 0, withCountdownSymbol: !0 })));
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
                l = i.n(r),
                s = i(643442),
                c = i(466445),
                u = i(837020),
                d = i(731708),
                p = i(154003),
                m = i(384153),
                g = i(483677),
                h = i(530732),
                y = i(522171),
                f = i(365023),
                b = i(292627),
                w = i(470397),
                S = i(392237),
                k = i(794215),
                v = i(823161),
                E = i(366635),
                Z = i(41871),
                C = i(625881);
            function x(e) {
                const t = A(e.onDockPress),
                    i = A(e.onUserPress),
                    r = A(e.onRequestClose),
                    l = A(e.onTogglePlayback);
                return a.createElement(a.Fragment, null, a.createElement(o.Z, { style: I.sliderContainer }, a.createElement(C.S, { durationMs: e.durationMs, externalSeeking: e.isSeeking, onSeek: e.onSeek, onSliderActive: e.onSliderActive, progressMs: e.progressMs })), a.createElement(o.Z, { style: I.dockContentRow }, a.createElement(v.default, { "aria-hidden": !0, focusable: !1, onClick: i, screenName: e.user.screen_name, size: "large", uri: e.user.profile_image_url_https, withLink: !0 }), a.createElement(o.Z, { style: I.dockContentTitle }, a.createElement(w.Z, { size: "subtext2" }, a.createElement(E.Z, { isBlueVerified: e.user.is_blue_verified, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", onLinkClick: i, screenName: e.user.screen_name, screenNameSize: "subtext2", verifiedType: e.user.verified_type, weight: "normal", withLink: !0 }), a.createElement(k.Z, { size: "subtext2", timeMs: e.durationMs })), a.createElement(d.ZP, { numberOfLines: 1, onPress: t, size: "subtext2", weight: "bold" }, e.title)), a.createElement(p.ZP, (0, n.Z)({ "aria-label": e.isPlaying ? M.pause : M.play, icon: e.isPlaying ? a.createElement(s.default, null) : a.createElement(c.default, null), onPress: l, testID: "togglePlayback" }, D)), a.createElement(o.Z, { style: I.dockContentButtonSpacer }), a.createElement(p.ZP, (0, n.Z)({ "aria-label": M.close, icon: a.createElement(u.default, null), onPress: r, testID: "close" }, D))));
            }
            function _(e) {
                const t = A(e.onDockPress),
                    i = A(e.onRequestClose),
                    r = A(e.onTogglePlayback),
                    l = A(e.onUserPress),
                    m = a.useMemo(() => {
                        const t = e.user.profile_image_extensions_media_color?.palette;
                        if (t) {
                            const e = g.Z.get(t);
                            if (e) return B(e.rgb);
                        }
                        return S.default.theme.colors.primary;
                    }, [e.user]),
                    h = e.isMuted ? M.unmute : M.mute;
                return a.createElement(o.Z, { style: [R.wideContainer, R.wideContainerBorderRadius] }, a.createElement(o.Z, { style: R.mainContentContainer }, a.createElement(o.Z, { style: [R.wideAvatarContainer, { backgroundColor: m }] }, a.createElement(v.default, { "aria-hidden": !0, focusable: !1, onClick: l, screenName: e.user.screen_name, size: "xLarge", uri: e.user.profile_image_url_https, withLink: !0 })), a.createElement(o.Z, { style: R.mainContent }, a.createElement(E.Z, { isBlueVerified: e.user.is_blue_verified, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", onLinkClick: l, screenName: e.user.screen_name, screenNameSize: "subtext2", verifiedType: e.user.verified_type, weight: "normal", withLink: !0, withScreenName: !0 }), a.createElement(d.ZP, { numberOfLines: 2, onPress: t, size: "subtext2", weight: "bold" }, e.title))), a.createElement(o.Z, { style: R.belowMainContent }, a.createElement(o.Z, { style: R.slider }, a.createElement(C.S, { durationMs: e.durationMs, externalSeeking: e.isSeeking, onSeek: e.onSeek, onSliderActive: e.onSliderActive, progressMs: e.progressMs, withTimes: !0 })), a.createElement(o.Z, { style: R.iconRow }, a.createElement(Z.Z, (0, n.Z)({ accessibilityLabelIcon: h, accessibilityLabelSlider: M.volumeSlider, isMuted: e.isMuted, onMuteToggle: e.onMuteToggle, onSliderChange: e.onVolumeChange, sliderColor: "purple500", type: void 0, volumePercent: e.volume, withGraySliderTrack: !0, withNavigationSliderBackground: !0 }, D)), a.createElement(p.ZP, (0, n.Z)({ "aria-label": e.isPlaying ? M.pause : M.play, icon: e.isPlaying ? a.createElement(s.default, null) : a.createElement(c.default, null), onPress: r, testID: "togglePlayback" }, D)))), a.createElement(p.ZP, (0, n.Z)({ "aria-label": M.close, icon: a.createElement(u.default, null), onPress: i, style: R.closeIcon, testID: "close" }, D)));
            }
            function P(e) {
                const t = a.useRef({}),
                    i = a.useRef(null),
                    n = e.isWide && R.wideContainerBorderRadius,
                    r = A(() => {
                        t.current.isSliderActive || e.onDockPress();
                    }),
                    l = a.useMemo(
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
                const s = e.title || M.untitled,
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
                return a.createElement(
                    y.Z,
                    { enabled: !0, handlers: { [y.Z.shortcuts.audio.dock]: l, [y.Z.shortcuts.audio.play]: e.onTogglePlayback } },
                    a.createElement(
                        h.Z,
                        {
                            "aria-label": M.voiceDock,
                            onPress: r,
                            ref: function (e) {
                                i.current = e;
                            },
                            style: [I.container, n],
                        },
                        a.createElement(o.Z, { style: [I.innerContainer, n] }, e.isWide ? a.createElement(_, c) : a.createElement(x, c)),
                    ),
                );
            }
            function T(e) {
                const t = e.isWide ? b.Z.DesktopVoiceTweetDock : b.Z.MobileVoiceTweetDock,
                    i = [e.isWide ? [R.root, { maxWidth: e.width }] : I.root];
                return a.createElement(
                    t,
                    null,
                    a.createElement(f.Z, { id: "VoiceTweetDock" }, (t, r) => a.createElement(o.Z, (0, n.Z)({ ref: t() }, r({ style: i })), a.createElement(P, e))),
                );
            }
            const M = { untitled: l().gfaaead8, close: l().af8fa2ae, pause: l().fb236728, play: l().f17dfdb6, voiceDock: l().cfd13f46, unmute: l().b8b6344a, mute: l().ec8ab8b4, volumeSlider: l().c9a642fa, seekSlider: l().hea01798 },
                D = { borderColor: "transparent", color: "text", size: "medium" },
                I = S.default.create((e) => ({ root: {}, container: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall }, innerContainer: { backgroundColor: e.colors.navigationBackground }, sliderContainer: { position: "absolute", zIndex: 1, top: 0, start: 0, end: 0, marginTop: -1 * e.spacesPx.space20, transform: [{ translateY: e.spacesPx.space20 / 2 }] }, dockContentRow: { padding: e.spaces.space4, flexDirection: "row", justifyContent: "center", alignItems: "center" }, dockContentTitle: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4, flexDirection: "column", flex: 1 }, dockContentButtonSpacer: { width: e.spaces.space12 } })),
                R = S.default.create((e) => {
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
            i.d(t, { Z: () => w });
            var n = i(807896),
                a = i(202784),
                o = i(325686),
                r = i(111677),
                l = i.n(r),
                s = i(83515),
                c = i(926628),
                u = i(301049),
                d = i(154003),
                p = i(466792),
                m = i(173739),
                g = i(392237);
            const h = l().b3160a69;
            class y extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { showSlider: !1, isSliderActive: !1 }),
                        (this._handleButtonLayoutChange = (e) => {
                            const { containerHeight: t } = this.props,
                                { sliderMaxHeight: i } = this.state,
                                { height: n } = e.nativeEvent.layout;
                            if (t) {
                                const e = t - n - g.default.theme.spacesPx.space20 + "px";
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
                            return b["large" === t ? "xLarge" : t];
                        }),
                        (this._handleKeyDown = (e) => {
                            const { onSliderChange: t, volumePercent: i } = this.props,
                                { altKey: n, ctrlKey: a, metaKey: o } = e;
                            if (n || a || o) return;
                            const r = e.key === u.Z.ArrowUp || e.key === u.Z.ArrowRight,
                                l = e.key === u.Z.ArrowDown || e.key === u.Z.ArrowLeft;
                            if (r || l) {
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
                    const { accessibilityLabelIcon: e, accessibilityLabelSlider: t, containerHeight: i, isMuted: r, onHideSlider: l, onMuteToggle: u, onShowSlider: y, onSliderChange: b, pullRight: w, sliderColor: S, volumePercent: k, withGraySliderTrack: v, withNavigationSliderBackground: E, ...Z } = this.props,
                        C = r ? a.createElement(s.default, null) : a.createElement(c.default, null),
                        x = E ? f.sliderWithNavigationBackground : f.sliderWithDefaultBackground;
                    return a.createElement(p.Z, { disabled: !b, onFocusRingGained: b ? this._showSlider : void 0, onFocusRingLost: b ? this._hideSlider : void 0, onHoverIn: b ? this._showSlider : void 0, onHoverOut: b ? this._hideSlider : void 0 }, a.createElement(o.Z, { onKeyDown: b ? this._handleKeyDown : void 0 }, a.createElement(d.ZP, (0, n.Z)({ "aria-label": e, icon: C, onLayout: this._handleButtonLayoutChange, onPress: u, pullRight: w, type: "onMediaText" }, Z)), b && a.createElement(p.Z, { onFocusRingGained: y, onFocusRingLost: l }, ({ isFocusedWithin: e }) => a.createElement(o.Z, { style: [f.sliderBackground, x, this._getSliderMarginStyles(Z.size), e || this._shouldShowSlider(this.state) ? null : g.default.visuallyHidden, !!i && { maxHeight: this.state.sliderMaxHeight }] }, a.createElement(m.Z, { accessibilityLabelValueText: h({ volumePercent: k }), "aria-label": t, color: S || "white", isVertical: !0, keyboardStep: 10, max: 100, min: 0, onActive: this._handleSliderActive, onChange: b, step: 1, value: r ? 0 : k || 0, withGrayBackground: v })))));
                }
            }
            y.defaultProps = { pullRight: !1 };
            const f = g.default.create((e) => ({ sliderBackground: { bottom: 0, borderRadius: e.borderRadii.xLarge, height: `calc(${e.spaces.space64}*2)`, start: e.spaces.space4, position: "absolute", padding: e.spaces.space12, paddingVertical: e.spaces.space16, end: e.spaces.space4 }, sliderWithDefaultBackground: { backgroundColor: e.colors.translucentBlack30 }, sliderWithNavigationBackground: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall } })),
                b = g.default.create(({ spaces: e, spacesPx: t }) => {
                    const i = `${t.space16 + t.space4 + t.space2}px`,
                        n = `${t.space20 + t.space24}px`,
                        a = `${t.space12 + t.space40}px`;
                    return { xSmall: { marginBottom: e.space24 }, small: { marginBottom: e.space32 }, medium: { marginBottom: e.space36 }, large: { marginBottom: n }, xLarge: { marginBotom: a }, smallCompact: { marginBottom: i }, DEPRECATED_normalCompact: { marginBottom: e.space32 }, DEPRECATED_normal: { marginBottom: e.space40 } };
                }),
                w = y;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-8c4bd381.907418ea.js.map
