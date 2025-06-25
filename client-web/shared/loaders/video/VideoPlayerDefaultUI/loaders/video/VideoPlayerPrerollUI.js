"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI"],
    {
        215337: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784),
                n = r(325686);
            class i extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, r) => {
                                    const a = t[r];
                                    let n = "";
                                    return a && (n = ` ${100 * a}%`), e + n;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: r, style: i } = this.props;
                    return a.createElement(n.Z, { style: [i, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, r);
                }
            }
            i.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const l = i;
        },
        314916: (e, t, r) => {
            r.d(t, { ZP: () => d });
            var a = r(202784),
                n = r(325686),
                i = r(992942),
                l = r(392237),
                s = r(870373);
            const o = { animationStage: "INITIAL", containerSize: null, imageTransform: null },
                c = (e = o, t) => {
                    switch (t.type) {
                        case "SET_TRANSFORM":
                            if ("INITIAL" === e.animationStage) {
                                const { aspectRatio: r, containerHeight: a, containerWidth: n } = t.payload,
                                    i = (0, s.K)(r),
                                    o = { width: n, height: a },
                                    c = { scaleX: i.width / n, scaleY: i.height / a, translateX: -1 * l.default.theme.spacesPx.space12, translateY: -1 * l.default.theme.spacesPx.space12 };
                                return { ...e, animationStage: "SET_TRANSFORM", containerSize: o, imageTransform: c };
                            }
                            return e;
                        case "START_ANIMATION":
                            return "SET_TRANSFORM" === e.animationStage ? { ...e, animationStage: "START_ANIMATION", imageTransform: { scaleX: 1, scaleY: 1, translateX: 0, translateY: 0 } } : e;
                        case "FINISH_ANIMATION":
                            return { ...e, animationStage: "FINISH_ANIMATION" };
                        default:
                            return e;
                    }
                };
            const u = { imageFill: { width: "100%", height: "100%" }, imageWrapperBaseStyles: { transitionDuration: "250ms", transformOrigin: "bottom right", transitionProperty: "transform", transitionTimingFunction: "ease", position: "absolute", bottom: "0", right: "0" } },
                d = function ({ aspectRatio: e, imageSrc: t, onTransitionComplete: r }) {
                    const [s, d] = a.useReducer(c, o),
                        { animationStage: m, containerSize: h, imageTransform: p } = s,
                        f = a.useCallback(
                            (t) => {
                                if (null != t) {
                                    const { height: r, width: a } = t.getBoundingClientRect();
                                    requestAnimationFrame(() => {
                                        d({ type: "SET_TRANSFORM", payload: { aspectRatio: e, containerHeight: r, containerWidth: a } });
                                    });
                                }
                            },
                            [e],
                        ),
                        b = a.useCallback((e) => {
                            requestAnimationFrame(() => {
                                d({ type: "START_ANIMATION" });
                            });
                        }, []),
                        g = a.useCallback(() => {
                            d({ type: "FINISH_ANIMATION" });
                        }, []);
                    return (
                        a.useEffect(() => {
                            t || g();
                        }, [t, g]),
                        a.useEffect(() => {
                            "FINISH_ANIMATION" === m && r && r();
                        }, [r, m]),
                        a.useEffect(() => {
                            if ("START_ANIMATION" === m) {
                                const e = setTimeout(() => {
                                    g();
                                }, 300);
                                return function () {
                                    clearTimeout(e);
                                };
                            }
                        }, [m, g]),
                        a.createElement(
                            n.Z,
                            { ref: f, style: l.default.absoluteFill },
                            (() => {
                                if (null == h || null == p || !t) return null;
                                const e = { height: h.height, width: h.width },
                                    { scaleX: r, scaleY: n, translateX: l, translateY: s } = p,
                                    o = { transform: `matrix(${r}, 0, 0, ${n}, ${l}, ${s})` },
                                    c = { ...u.imageWrapperBaseStyles, ...e, ...o };
                                return a.createElement("div", { onTransitionEnd: g, style: c }, a.createElement(i.Z, { ref: b, source: t, style: u.imageFill }));
                            })(),
                        )
                    );
                };
        },
        401339: (e, t, r) => {
            r.d(t, { Z: () => i });
            const a = {},
                n = ["touchend", "touchmove", "touchstart"];
            const i = {
                isTouchSupported: () =>
                    n.some(
                        (e) =>
                            !!(function (e, t) {
                                if (void 0 !== a[e]) return a[e];
                                const r = document.createElement(t || "div"),
                                    n = `on${e}`;
                                let i = n in r;
                                return i || (r.setAttribute(n, "return;"), (i = "function" == typeof r[n])), (a[e] = i), i;
                            })(e),
                    ),
            };
        },
        162317: (e, t, r) => {
            r.d(t, { Z: () => j });
            var a = r(202784),
                n = r(325686),
                i = r(731708),
                l = r(908629),
                s = r(868634),
                o = r(215337),
                c = r(224162),
                u = r(819329),
                d = r(392237),
                m = r(823161),
                h = r(738584),
                p = r(864386),
                f = r(591354),
                b = r(424713),
                g = r(272879),
                S = r(643442),
                y = r(466445),
                E = r(841972),
                w = r(647174),
                C = r(323265),
                v = r(41871),
                x = r(420922),
                _ = r(103849),
                T = r(70889),
                R = r(986460),
                k = r(590901),
                A = r(516951),
                Z = r(154003),
                P = r(992942),
                L = r(530732),
                B = r(879891),
                I = r(251478),
                F = r(870373);
            const D = d.default.create((e) => ({ thumbnail: { backgroundColor: e.colors.translucentBlack77, borderRadius: e.borderRadii.small, display: "flex", overflow: "hidden", opacity: 1 }, thumbnailFocused: { boxShadow: `0 0 0 ${e.borderWidths.medium} ${e.colors.white}`, outlineStyle: "none" }, countdownTime: { paddingHorizontal: e.spaces.space4, minWidth: "1em", display: "flex", alignItems: "center", justifyContent: "center", fontVariant: "tabular-nums" }, iconMargin: { marginStart: "0.5em" }, iconMarginRtl: { marginEnd: "0.5em" } })),
                N = ({ onClick: e }) => {
                    const { aspectRatio: t, playerState: r } = a.useContext(h.Z.PeriodicContext),
                        { direction: s } = (0, B.Z)(),
                        o = "rtl" === s;
                    if (!r) return null;
                    const c = (0, b.Ci)(r);
                    if (!c || c.displayType !== I.ak.AD) return null;
                    const u = c.durationMs,
                        d = u < 7e3,
                        m = (d ? u : 5e3) - (c.currentTimeMs || 0),
                        p = m > 250,
                        g = m < 0,
                        S = (0, b.Ov)(c) || 0,
                        y = (0, b.us)(c) || 0,
                        E = (d ? y : 5) - S,
                        w = (0, f.bl)({ seconds: (0, f.Cf)(E) });
                    return a.createElement(L.Z, { "aria-label": g ? f.DP : w, focusable: !0, interactive: !0, interactiveStyles: null, onClick: g && e ? e : A.Z, role: "button", testID: "ControlBar-containerView" }, (e) => a.createElement(a.Fragment, null, !g && a.createElement(l.Z, { show: p }, a.createElement(n.Z, { style: [D.thumbnail, { flexDirection: o ? "row-reverse" : "row" }, e.isFocused && D.thumbnailFocused], testID: "ControlBar-videoThumbnail" }, a.createElement(i.ZP, { color: "white", size: "subtext2", style: D.countdownTime }, E), a.createElement(P.Z, { source: r.posterImage, style: (0, F.K)(t) }))), a.createElement(l.Z, { show: g }, a.createElement(Z.ZP, { focusable: !1, interactivityState: e, pointerEvents: "auto", size: "small", testID: "ControlBar-skipButton", type: "onMediaDominantColorFilled" }, a.createElement(i.ZP, { dir: "ltr", weight: "normal" }, f.Be, a.createElement(k.default, { style: o ? D.iconMarginRtl : D.iconMargin }))))));
                },
                M = "PrerollControlBar-",
                O = { CAPTIONS: `${M}Captions`, FULLSCREEN: `${M}Fullscreen` };
            class W extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._parentRef = a.createRef()),
                        (this._renderRightContent = (e) => {
                            const { playerApi: t, playerState: r } = this.props;
                            if (!t || !r) return null;
                            const n = C.ZP.isIOS();
                            return a.createElement(a.Fragment, null, this._renderTimePlayed(), this._renderVolumeControls(t, r), !n && a.createElement(e, { focus: !0, interactionKey: O.FULLSCREEN, interactionTimeoutMs: 0, mouseover: !0 }, this._renderFullScreenButton(t, r)));
                        }),
                        (this._renderActionButton = (e, t) => {
                            const { controls: r, isPlaying: n } = t,
                                { pause: i, play: l } = e,
                                s = (0, b.Ci)(t);
                            return !s || s.isLive ? null : n || (r && "PLAY_REQUESTED" === r.playState) ? a.createElement(_.Z, { "aria-label": R.gF, hoverLabelPreferredHorizontalOrientation: "end", icon: a.createElement(S.default, null), onPress: i }) : a.createElement(_.Z, { "aria-label": R.M2, hoverLabelPreferredHorizontalOrientation: "end", icon: a.createElement(y.default, null), onPress: l });
                        }),
                        (this._renderAdText = () => a.createElement(T.Z, null, f.DD)),
                        (this._renderTimePlayed = () =>
                            a.createElement(h.o, { periodic: !0 }, ({ playerState: e }) => {
                                const t = (0, b.Ci)(e),
                                    r = (0, b.Ov)(t),
                                    n = (0, b.us)(t);
                                return t && "number" == typeof r && n && !t.isLive ? a.createElement(T.Z, null, `${(0, b.mr)(r)} / ${(0, b.mr)(n)}`) : null;
                            })),
                        (this._renderVolumeControls = (e, t) => {
                            const { isMuted: r, volume: n } = t,
                                { mute: i, setVolume: l, unmute: s } = e,
                                o = r ? s : i,
                                c = r ? R.cm : R.GS;
                            return a.createElement(v.Z, { accessibilityLabelIcon: c, accessibilityLabelSlider: R.Nj, isMuted: r, onMuteToggle: o, onSliderChange: this._setVolumePercent(l), volumePercent: 100 * n });
                        }),
                        (this._setVolumePercent = (e) => (t) => {
                            e(t / 100);
                        }),
                        (this._renderFullScreenButton = (e, t) => {
                            const { fullscreen: r } = t;
                            return r.isFullscreen ? a.createElement(_.Z, { "aria-label": R.iG, hoverLabelPreferredHorizontalOrientation: "start", icon: a.createElement($, { isFullscreen: r.isFullscreen }), onPress: this._exitFullScreen(e) }) : a.createElement(_.Z, { "aria-label": R.lO, hoverLabelPreferredHorizontalOrientation: "start", icon: a.createElement($, { isFullscreen: r.isFullscreen }), onPress: this._requestFullScreen(e) });
                        }),
                        (this._requestFullScreen = (e) => () => {
                            e.fullScreen(this.props.containerRef);
                        }),
                        (this._exitFullScreen = (e) => () => e.exitFullScreen()),
                        (this._renderSkipAffordance = () => a.createElement(n.Z, { style: H.skipAffordance }, a.createElement(N, null)));
                }
                render() {
                    const { displayDismissableControls: e, playerApi: t, playerState: r, skipButton: i } = this.props;
                    return t && r ? a.createElement(p.Z.ObserverContext.Consumer, null, (l) => a.createElement(n.Z, { ref: this._parentRef, style: H.root }, a.createElement(x.Z, { actionButton: this._renderActionButton(t, r), displayDismissableControls: e, leftContent: this._renderAdText(), rightContent: this._renderRightContent(l), skipButton: i }))) : null;
                }
            }
            const H = d.default.create((e) => ({ root: { writingDirection: "ltr", cursor: "auto", width: "100%" }, skipAffordance: { marginStart: e.spaces.space12, pointEvents: "none", visibility: "hidden" } }));
            function $({ isFullscreen: e, style: t }) {
                const { hidden: r, shown: n } = z;
                return a.createElement(a.Fragment, null, a.createElement(E.default, { style: e ? r : n }), a.createElement(w.default, { style: e ? n : r }));
            }
            const z = { hidden: { display: "none", height: "1.5em" }, shown: { display: "block", height: "1.5em" } },
                V = W;
            class U extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._buildMessage = (e, t) => {
                            switch (e) {
                                case I.Eq.watch_now:
                                    return t ? (0, f.Pr)({ advertiserName: t }) : f.iX;
                                case I.Eq.shop:
                                    return t ? (0, f.LH)({ advertiserName: t }) : f.st;
                                case I.Eq.see_more:
                                    return t ? (0, f.SH)({ advertiserName: t }) : f.C5;
                                case I.Eq.go_to:
                                    return t ? (0, f._3)({ advertiserName: t }) : f.cB;
                                case I.Eq.visit_site:
                                default:
                                    return t ? (0, f.L7)({ advertiserName: t }) : f.PN;
                            }
                        }),
                        (this._handlePress = (e) => () => {
                            e.callToActionClicked();
                        });
                }
                componentDidMount() {
                    const { playerApi: e } = this.props;
                    e && e.callToActionImpression();
                }
                render() {
                    const { advertiserName: e, avatarUri: t, ctaType: r, ctaUrl: n, playerApi: i } = this.props;
                    if (!i) return null;
                    const l = this._buildMessage(r, e);
                    return a.createElement(Z.ZP, { "aria-label": l, icon: t ? a.createElement(m.default, { borderColor: "white", borderWidth: "small", size: "medium", uri: t }) : void 0, link: n, onPress: this._handlePress(i), size: "xSmall", type: "onMediaDominantColorFilled" }, l);
                }
            }
            const G = U;
            class K extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showControlBar: !1, stackedLabels: !1 }),
                        (this._durationLabelRef = a.createRef()),
                        (this._descriptionLabelRef = a.createRef()),
                        (this._handleLayout = () => {
                            const e = this._durationLabelRef?.current,
                                t = this._descriptionLabelRef?.current;
                            e &&
                                t &&
                                e.measure((e, r) => {
                                    t.measure((e, t) => {
                                        r !== t ? this.setState({ stackedLabels: !0 }) : this.setState({ stackedLabels: !1 });
                                    });
                                });
                        }),
                        (this._renderPrerollControlBar = (e) => {
                            const { containerRef: t, onSkip: r, playerApi: i, playerState: s } = this.props;
                            if (!i || !s) return null;
                            const { Observer: o, observed: u } = e,
                                d = (0, g.JN)(s, u, g.i2),
                                m = s.fullscreen.isFullscreen;
                            return a.createElement(c.ZP.Consumer, null, ({ direction: e }) => {
                                const c = "rtl" === e;
                                return a.createElement(n.Z, { style: q.bottomContentContainer }, a.createElement(n.Z, { style: [q.bottomContentRow, { flexDirection: c ? "row-reverse" : "row" }] }, a.createElement(n.Z, { style: [q.forceFullWidth, { flexDirection: c ? "row-reverse" : "row" }] }, a.createElement(o, { focus: !0, interactionKey: g.IG.A11YHook }, a.createElement(n.Z, { focusable: !0 })), a.createElement(n.Z, { style: q.flexExpand }, a.createElement(n.Z, { style: [q.labelOuterContainerBase, c ? q.labelOuterContainerRtl : q.labelOuterContainerLtr] }, a.createElement(l.Z, { show: d }, a.createElement(n.Z, { style: [q.bottomContentRow, { flexDirection: c ? "row-reverse" : "row" }, q.rowBottomSpace] }, this._renderLabels(c)))), m ? null : a.createElement(n.Z, { style: [q.bottomContentRow, { flexDirection: c ? "row-reverse" : "row" }] }, a.createElement(n.Z, { style: [q.skipThumbnail, c ? q.skipThumbnailAbsoluteRtl : q.skipThumbnailAbsolute], testID: Y.floatSkipThumbnail }, a.createElement(N, { onClick: r }))), a.createElement(o, { focus: !0, interactionKey: g.IG.ControlBar, mouseover: !0, touch: !0 }, a.createElement(V, { containerRef: t, displayDismissableControls: !d, playerApi: i, playerState: s, skipButton: m ? a.createElement(n.Z, { style: [q.skipThumbnail, c ? q.skipThumbnailRelativeRtl : q.skipThumbnailRelative], testID: Y.inlineSkipThumbnail }, a.createElement(N, { onClick: r })) : null }))))));
                            });
                        }),
                        (this._renderWithIntentionContext = (e) => {
                            const { playerApi: t, playerState: r, renderPrerollActionMenu: l } = this.props;
                            if (!t || !r) return null;
                            const s = (0, b.Ci)(r),
                                c = s?.advertiserProfileImageUrl,
                                u = s?.advertiserName,
                                h = s?.cta;
                            return a.createElement(a.Fragment, null, a.createElement(o.Z, { colors: [h ? d.default.theme.colors.transparent : d.default.theme.colors.translucentBlack77, d.default.theme.colors.transparent], style: q.header }, a.createElement(n.Z, { style: q.profileContainer }, h ? a.createElement(G, { advertiserName: u, avatarUri: c, ctaType: h.type, ctaUrl: h.url, playerApi: t }) : a.createElement(a.Fragment, null, c && a.createElement(m.default, { "aria-hidden": !0, borderColor: "white", borderWidth: "small", focusable: !1, size: "medium", uri: c }), u && a.createElement(i.ZP, { color: "white", style: q.profileText, weight: "bold" }, u))), l?.()), this._renderPrerollControlBar(e));
                        }),
                        (this._renderLabels = (e) =>
                            a.createElement(h.o, { periodic: !0 }, ({ playerState: t }) => {
                                const r = (0, b.Ci)(t),
                                    l = (0, b.us)(r),
                                    o = (0, b.Ov)(r) || 0,
                                    c = l ? l - o : null,
                                    d = [q.labelContainerBase, e ? q.labelContainerRtl : q.labelContainerLtr],
                                    m = [u.W.borderRadiusLeft, this.state.stackedLabels && u.W.borderRadiusRight],
                                    h = [u.W.borderRadiusRight, this.state.stackedLabels && u.W.borderRadiusLeft],
                                    p = r && "number" == typeof c && !r.isLive ? a.createElement(n.Z, { ref: this._durationLabelRef }, a.createElement(s.ZP, { key: "PrerollVideoOverlay-DurationLabel", style: [u.W.label, e ? q.labelSpaceLeft : u.W.spaceRight, this.state.stackedLabels && q.labelBottomSpace, ...(e ? h : m)] }, a.createElement(i.ZP, { numberOfLines: 1 }, (0, b.mr)(c)))) : null,
                                    g = a.createElement(n.Z, { ref: this._descriptionLabelRef }, a.createElement(s.ZP, { key: "PrerollVideoOverlay-DescriptionLabel", style: [u.W.label, e ? q.labelSpaceLeft : u.W.spaceRight, ...(e ? m : h)] }, a.createElement(i.ZP, { numberOfLines: 1 }, f.DD)));
                                return a.createElement(n.Z, { onLayout: this._handleLayout, pointerEvents: "none", style: d }, p, g);
                            }));
                }
                render() {
                    const { playerApi: e, playerState: t } = this.props;
                    return e && t ? a.createElement(p.Z.Context.Consumer, null, this._renderWithIntentionContext) : null;
                }
            }
            const q = d.default.create((e) => ({
                    header: { position: "absolute", top: 0, start: 0, width: "100%", padding: e.spaces.space16, alignItems: "center", flexDirection: "row", justifyContent: "space-between" },
                    profileContainer: { flexDirection: "row", alignItems: "center", gap: e.spaces.space4, maxWidth: `calc(100% - ${e.spaces.space48})`, overflow: "hidden" },
                    profileText: { flexShrink: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
                    bottomContentContainer: { flexWrap: "wrap", position: "absolute", bottom: 0, width: "100%" },
                    bottomContentRow: { alignItems: "flex-end", flexWrap: "nowrap", flexGrow: 1, flexShrink: 0, justifyContent: "space-between", width: "100%" },
                    rowBottomSpace: { marginBottom: e.spaces.space12 },
                    forceFullWidth: { width: "100%" },
                    labelOuterContainerBase: { flexWrap: "wrap", position: "absolute", bottom: 0, maxWidth: "65%" },
                    labelOuterContainerLtr: { flexDirection: "row", start: 0 },
                    labelOuterContainerRtl: { flexDirection: "row-reverse", end: 0 },
                    labelBottomSpace: { marginBottom: e.spaces.space2 },
                    labelContainerBase: { justifyContent: "flex-start", flexWrap: "wrap", flexGrow: 1, flexShrink: 1, flexBasis: "auto" },
                    labelContainerLtr: { flexDirection: "row", marginStart: e.spaces.space12 },
                    labelContainerRtl: { flexDirection: "row-reverse", marginEnd: e.spaces.space12 },
                    labelSpaceLeft: { marginStart: e.spaces.space2 },
                    skipThumbnail: { flexGrow: 0, flexShrink: 0, flexBasis: "auto", alignItems: "flex-end" },
                    skipThumbnailRelative: { marginBottom: e.spaces.space12, marginEnd: e.spaces.space12 },
                    skipThumbnailAbsolute: { position: "absolute", bottom: e.spaces.space12, end: e.spaces.space12, maxWidth: "35%" },
                    skipThumbnailRelativeRtl: { marginBottom: e.spaces.space12, marginStart: e.spaces.space12 },
                    skipThumbnailAbsoluteRtl: { position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12, maxWidth: "35%" },
                    flexExpand: { flexGrow: 1, flexShrink: 1, flexBasis: 0 },
                    flexWrap: { flexWrap: "wrap", justifyContent: "space-between" },
                    hidden: { visibility: "hidden" },
                })),
                Y = { floatSkipThumbnail: "float-SkipThumbnail", inlineSkipThumbnail: "inline-SkipThumbnail" },
                j = K;
        },
        870373: (e, t, r) => {
            r.d(t, { K: () => n });
            var a = r(392237);
            const n = (e) => (1 === e ? { height: a.default.theme.spacesPx.space48, width: a.default.theme.spacesPx.space48 } : { height: a.default.theme.spacesPx.space40, width: e * a.default.theme.spacesPx.space40 });
        },
        41871: (e, t, r) => {
            r.d(t, { Z: () => y });
            var a = r(807896),
                n = r(202784),
                i = r(325686),
                l = r(111677),
                s = r.n(l),
                o = r(83515),
                c = r(926628),
                u = r(301049),
                d = r(154003),
                m = r(466792),
                h = r(173739),
                p = r(392237);
            const f = s().b3160a69;
            class b extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { showSlider: !1, isSliderActive: !1 }),
                        (this._handleButtonLayoutChange = (e) => {
                            const { containerHeight: t } = this.props,
                                { sliderMaxHeight: r } = this.state,
                                { height: a } = e.nativeEvent.layout;
                            if (t) {
                                const e = t - a - p.default.theme.spacesPx.space20 + "px";
                                e !== r && this.setState({ sliderMaxHeight: e });
                            }
                        }),
                        (this._handleSliderActive = (e) => this.setState({ isSliderActive: e })),
                        (this._showSlider = () => this.setState({ showSlider: !0 })),
                        (this._hideSlider = () => this.setState({ showSlider: !1 })),
                        (this._shouldShowSlider = (e) => e.showSlider || e.isSliderActive),
                        (this._normalizeValue = (e) => Math.max(0, Math.min(e, 100))),
                        (this._getSliderMarginStyles = (e) => {
                            const t = e ?? "medium";
                            return S["large" === t ? "xLarge" : t];
                        }),
                        (this._handleKeyDown = (e) => {
                            const { onSliderChange: t, volumePercent: r } = this.props,
                                { altKey: a, ctrlKey: n, metaKey: i } = e;
                            if (a || n || i) return;
                            const l = e.key === u.Z.ArrowUp || e.key === u.Z.ArrowRight,
                                s = e.key === u.Z.ArrowDown || e.key === u.Z.ArrowLeft;
                            if (l || s) {
                                const a = this._normalizeValue(r + 10 * (l ? 1 : -1));
                                t && t(a), e.preventDefault();
                            }
                        });
                }
                componentDidUpdate(e, t) {
                    const { onHideSlider: r, onShowSlider: a, onSliderChange: n } = this.props;
                    if (n) {
                        const e = this._shouldShowSlider(t),
                            n = this._shouldShowSlider(this.state);
                        !e && n && a && a(), e && !n && r && r();
                    }
                }
                render() {
                    const { accessibilityLabelIcon: e, accessibilityLabelSlider: t, containerHeight: r, isMuted: l, onHideSlider: s, onMuteToggle: u, onShowSlider: b, onSliderChange: S, pullRight: y, sliderColor: E, volumePercent: w, withGraySliderTrack: C, withNavigationSliderBackground: v, ...x } = this.props,
                        _ = l ? n.createElement(o.default, null) : n.createElement(c.default, null),
                        T = v ? g.sliderWithNavigationBackground : g.sliderWithDefaultBackground;
                    return n.createElement(m.Z, { disabled: !S, onFocusRingGained: S ? this._showSlider : void 0, onFocusRingLost: S ? this._hideSlider : void 0, onHoverIn: S ? this._showSlider : void 0, onHoverOut: S ? this._hideSlider : void 0 }, n.createElement(i.Z, { onKeyDown: S ? this._handleKeyDown : void 0 }, n.createElement(d.ZP, (0, a.Z)({ "aria-label": e, icon: _, onLayout: this._handleButtonLayoutChange, onPress: u, pullRight: y, type: "onMediaText" }, x)), S && n.createElement(m.Z, { onFocusRingGained: b, onFocusRingLost: s }, ({ isFocusedWithin: e }) => n.createElement(i.Z, { style: [g.sliderBackground, T, this._getSliderMarginStyles(x.size), e || this._shouldShowSlider(this.state) ? null : p.default.visuallyHidden, !!r && { maxHeight: this.state.sliderMaxHeight }] }, n.createElement(h.Z, { accessibilityLabelValueText: f({ volumePercent: w }), "aria-label": t, color: E || "white", isVertical: !0, keyboardStep: 10, max: 100, min: 0, onActive: this._handleSliderActive, onChange: S, step: 1, value: l ? 0 : w || 0, withGrayBackground: C })))));
                }
            }
            b.defaultProps = { pullRight: !1 };
            const g = p.default.create((e) => ({ sliderBackground: { bottom: 0, borderRadius: e.borderRadii.xLarge, height: `calc(${e.spaces.space64}*2)`, start: e.spaces.space4, position: "absolute", padding: e.spaces.space12, paddingVertical: e.spaces.space16, end: e.spaces.space4 }, sliderWithDefaultBackground: { backgroundColor: e.colors.translucentBlack30 }, sliderWithNavigationBackground: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall } })),
                S = p.default.create(({ spaces: e, spacesPx: t }) => {
                    const r = `${t.space16 + t.space4 + t.space2}px`,
                        a = `${t.space20 + t.space24}px`,
                        n = `${t.space12 + t.space40}px`;
                    return { xSmall: { marginBottom: e.space24 }, small: { marginBottom: e.space32 }, medium: { marginBottom: e.space36 }, large: { marginBottom: a }, xLarge: { marginBotom: n }, smallCompact: { marginBottom: r }, DEPRECATED_normalCompact: { marginBottom: e.space32 }, DEPRECATED_normal: { marginBottom: e.space40 } };
                }),
                y = b;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI.b8bbfc9a.js.map
