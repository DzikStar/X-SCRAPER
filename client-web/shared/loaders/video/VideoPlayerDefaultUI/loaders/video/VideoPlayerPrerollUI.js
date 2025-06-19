"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI"],
    {
        215337: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                a = n(325686);
            class o extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, n) => {
                                    const r = t[n];
                                    let a = "";
                                    return r && (a = ` ${100 * r}%`), e + a;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: n, style: o } = this.props;
                    return r.createElement(a.Z, { style: [o, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, n);
                }
            }
            o.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const i = o;
        },
        173739: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                a = n(31501),
                o = n(879891);
            const i = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: n, onDarkBackground: i, thumbLabel: s, value: l, ...c }) => {
                const { direction: u } = (0, o.Z)(),
                    d = { ...c, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: s, onDarkBackground: i, value: [c.min, l], onChange: (e) => n(e[1]), isSingleSlider: !0, languageWritingDirection: u };
                return r.createElement(a.Z, d);
            };
        },
        314916: (e, t, n) => {
            n.d(t, { ZP: () => d });
            var r = n(202784),
                a = n(325686),
                o = n(992942),
                i = n(392237),
                s = n(870373);
            const l = { animationStage: "INITIAL", containerSize: null, imageTransform: null },
                c = (e = l, t) => {
                    switch (t.type) {
                        case "SET_TRANSFORM":
                            if ("INITIAL" === e.animationStage) {
                                const { aspectRatio: n, containerHeight: r, containerWidth: a } = t.payload,
                                    o = (0, s.K)(n),
                                    l = { width: a, height: r },
                                    c = { scaleX: o.width / a, scaleY: o.height / r, translateX: -1 * i.default.theme.spacesPx.space12, translateY: -1 * i.default.theme.spacesPx.space12 };
                                return { ...e, animationStage: "SET_TRANSFORM", containerSize: l, imageTransform: c };
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
                d = function ({ aspectRatio: e, imageSrc: t, onTransitionComplete: n }) {
                    const [s, d] = r.useReducer(c, l),
                        { animationStage: h, containerSize: m, imageTransform: p } = s,
                        f = r.useCallback(
                            (t) => {
                                if (null != t) {
                                    const { height: n, width: r } = t.getBoundingClientRect();
                                    requestAnimationFrame(() => {
                                        d({ type: "SET_TRANSFORM", payload: { aspectRatio: e, containerHeight: n, containerWidth: r } });
                                    });
                                }
                            },
                            [e],
                        ),
                        b = r.useCallback((e) => {
                            requestAnimationFrame(() => {
                                d({ type: "START_ANIMATION" });
                            });
                        }, []),
                        S = r.useCallback(() => {
                            d({ type: "FINISH_ANIMATION" });
                        }, []);
                    return (
                        r.useEffect(() => {
                            t || S();
                        }, [t, S]),
                        r.useEffect(() => {
                            "FINISH_ANIMATION" === h && n && n();
                        }, [n, h]),
                        r.useEffect(() => {
                            if ("START_ANIMATION" === h) {
                                const e = setTimeout(() => {
                                    S();
                                }, 300);
                                return function () {
                                    clearTimeout(e);
                                };
                            }
                        }, [h, S]),
                        r.createElement(
                            a.Z,
                            { ref: f, style: i.default.absoluteFill },
                            (() => {
                                if (null == m || null == p || !t) return null;
                                const e = { height: m.height, width: m.width },
                                    { scaleX: n, scaleY: a, translateX: i, translateY: s } = p,
                                    l = { transform: `matrix(${n}, 0, 0, ${a}, ${i}, ${s})` },
                                    c = { ...u.imageWrapperBaseStyles, ...e, ...l };
                                return r.createElement("div", { onTransitionEnd: S, style: c }, r.createElement(o.Z, { ref: b, source: t, style: u.imageFill }));
                            })(),
                        )
                    );
                };
        },
        401339: (e, t, n) => {
            n.d(t, { Z: () => o });
            const r = {},
                a = ["touchend", "touchmove", "touchstart"];
            const o = {
                isTouchSupported: () =>
                    a.some(
                        (e) =>
                            !!(function (e, t) {
                                if (void 0 !== r[e]) return r[e];
                                const n = document.createElement(t || "div"),
                                    a = `on${e}`;
                                let o = a in n;
                                return o || (n.setAttribute(a, "return;"), (o = "function" == typeof n[a])), (r[e] = o), o;
                            })(e),
                    ),
            };
        },
        162317: (e, t, n) => {
            n.d(t, { Z: () => K });
            var r = n(202784),
                a = n(325686),
                o = n(731708),
                i = n(908629),
                s = n(868634),
                l = n(215337),
                c = n(224162),
                u = n(819329),
                d = n(392237),
                h = n(823161),
                m = n(738584),
                p = n(864386),
                f = n(591354),
                b = n(424713),
                S = n(272879),
                g = n(643442),
                v = n(466445),
                y = n(841972),
                C = n(647174),
                T = n(323265),
                R = n(41871),
                E = n(420922),
                w = n(103849),
                x = n(70889),
                _ = n(986460),
                P = n(590901),
                A = n(516951),
                k = n(154003),
                Z = n(992942),
                B = n(530732),
                L = n(879891),
                M = n(251478),
                F = n(870373);
            const I = d.default.create((e) => ({ thumbnail: { backgroundColor: e.colors.translucentBlack77, borderRadius: e.borderRadii.small, display: "flex", overflow: "hidden", opacity: 1 }, thumbnailFocused: { boxShadow: `0 0 0 ${e.borderWidths.medium} ${e.colors.white}`, outlineStyle: "none" }, countdownTime: { paddingHorizontal: e.spaces.space4, minWidth: "1em", display: "flex", alignItems: "center", justifyContent: "center", fontVariant: "tabular-nums" }, iconMargin: { marginStart: "0.5em" }, iconMarginRtl: { marginEnd: "0.5em" } })),
                D = ({ onClick: e }) => {
                    const { aspectRatio: t, playerState: n } = r.useContext(m.Z.PeriodicContext),
                        { direction: s } = (0, L.Z)(),
                        l = "rtl" === s;
                    if (!n) return null;
                    const c = (0, b.Ci)(n);
                    if (!c || c.displayType !== M.ak.AD) return null;
                    const u = c.durationMs,
                        d = u < 7e3,
                        h = (d ? u : 5e3) - (c.currentTimeMs || 0),
                        p = h > 250,
                        S = h < 0,
                        g = (0, b.Ov)(c) || 0,
                        v = (0, b.us)(c) || 0,
                        y = (d ? v : 5) - g,
                        C = (0, f.bl)({ seconds: (0, f.Cf)(y) });
                    return r.createElement(B.Z, { "aria-label": S ? f.DP : C, focusable: !0, interactive: !0, interactiveStyles: null, onClick: S && e ? e : A.Z, role: "button", testID: "ControlBar-containerView" }, (e) => r.createElement(r.Fragment, null, !S && r.createElement(i.Z, { show: p }, r.createElement(a.Z, { style: [I.thumbnail, { flexDirection: l ? "row-reverse" : "row" }, e.isFocused && I.thumbnailFocused], testID: "ControlBar-videoThumbnail" }, r.createElement(o.ZP, { color: "white", size: "subtext2", style: I.countdownTime }, y), r.createElement(Z.Z, { source: n.posterImage, style: (0, F.K)(t) }))), r.createElement(i.Z, { show: S }, r.createElement(k.ZP, { focusable: !1, interactivityState: e, pointerEvents: "auto", size: "small", testID: "ControlBar-skipButton", type: "onMediaDominantColorFilled" }, r.createElement(o.ZP, { dir: "ltr", weight: "normal" }, f.Be, r.createElement(P.default, { style: l ? I.iconMarginRtl : I.iconMargin }))))));
                },
                O = "PrerollControlBar-",
                N = { CAPTIONS: `${O}Captions`, FULLSCREEN: `${O}Fullscreen` };
            class H extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._parentRef = r.createRef()),
                        (this._renderRightContent = (e) => {
                            const { playerApi: t, playerState: n } = this.props;
                            if (!t || !n) return null;
                            const a = T.ZP.isIOS();
                            return r.createElement(r.Fragment, null, this._renderTimePlayed(), this._renderVolumeControls(t, n), !a && r.createElement(e, { focus: !0, interactionKey: N.FULLSCREEN, interactionTimeoutMs: 0, mouseover: !0 }, this._renderFullScreenButton(t, n)));
                        }),
                        (this._renderActionButton = (e, t) => {
                            const { controls: n, isPlaying: a } = t,
                                { pause: o, play: i } = e,
                                s = (0, b.Ci)(t);
                            return !s || s.isLive ? null : a || (n && "PLAY_REQUESTED" === n.playState) ? r.createElement(w.Z, { "aria-label": _.gF, hoverLabelPreferredHorizontalOrientation: "end", icon: r.createElement(g.default, null), onPress: o }) : r.createElement(w.Z, { "aria-label": _.M2, hoverLabelPreferredHorizontalOrientation: "end", icon: r.createElement(v.default, null), onPress: i });
                        }),
                        (this._renderAdText = () => r.createElement(x.Z, null, f.DD)),
                        (this._renderTimePlayed = () =>
                            r.createElement(m.o, { periodic: !0 }, ({ playerState: e }) => {
                                const t = (0, b.Ci)(e),
                                    n = (0, b.Ov)(t),
                                    a = (0, b.us)(t);
                                return t && "number" == typeof n && a && !t.isLive ? r.createElement(x.Z, null, `${(0, b.mr)(n)} / ${(0, b.mr)(a)}`) : null;
                            })),
                        (this._renderVolumeControls = (e, t) => {
                            const { isMuted: n, volume: a } = t,
                                { mute: o, setVolume: i, unmute: s } = e,
                                l = n ? s : o,
                                c = n ? _.cm : _.GS;
                            return r.createElement(R.Z, { accessibilityLabelIcon: c, accessibilityLabelSlider: _.Nj, isMuted: n, onMuteToggle: l, onSliderChange: this._setVolumePercent(i), volumePercent: 100 * a });
                        }),
                        (this._setVolumePercent = (e) => (t) => {
                            e(t / 100);
                        }),
                        (this._renderFullScreenButton = (e, t) => {
                            const { fullscreen: n } = t;
                            return n.isFullscreen ? r.createElement(w.Z, { "aria-label": _.iG, hoverLabelPreferredHorizontalOrientation: "start", icon: r.createElement(U, { isFullscreen: n.isFullscreen }), onPress: this._exitFullScreen(e) }) : r.createElement(w.Z, { "aria-label": _.lO, hoverLabelPreferredHorizontalOrientation: "start", icon: r.createElement(U, { isFullscreen: n.isFullscreen }), onPress: this._requestFullScreen(e) });
                        }),
                        (this._requestFullScreen = (e) => () => {
                            e.fullScreen(this.props.containerRef);
                        }),
                        (this._exitFullScreen = (e) => () => e.exitFullScreen()),
                        (this._renderSkipAffordance = () => r.createElement(a.Z, { style: W.skipAffordance }, r.createElement(D, null)));
                }
                render() {
                    const { displayDismissableControls: e, playerApi: t, playerState: n, skipButton: o } = this.props;
                    return t && n ? r.createElement(p.Z.ObserverContext.Consumer, null, (i) => r.createElement(a.Z, { ref: this._parentRef, style: W.root }, r.createElement(E.Z, { actionButton: this._renderActionButton(t, n), displayDismissableControls: e, leftContent: this._renderAdText(), rightContent: this._renderRightContent(i), skipButton: o }))) : null;
                }
            }
            const W = d.default.create((e) => ({ root: { writingDirection: "ltr", cursor: "auto", width: "100%" }, skipAffordance: { marginStart: e.spaces.space12, pointEvents: "none", visibility: "hidden" } }));
            function U({ isFullscreen: e, style: t }) {
                const { hidden: n, shown: a } = G;
                return r.createElement(r.Fragment, null, r.createElement(y.default, { style: e ? n : a }), r.createElement(C.default, { style: e ? a : n }));
            }
            const G = { hidden: { display: "none", height: "1.5em" }, shown: { display: "block", height: "1.5em" } },
                Y = H;
            class z extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._buildMessage = (e, t) => {
                            switch (e) {
                                case M.Eq.watch_now:
                                    return t ? (0, f.Pr)({ advertiserName: t }) : f.iX;
                                case M.Eq.shop:
                                    return t ? (0, f.LH)({ advertiserName: t }) : f.st;
                                case M.Eq.see_more:
                                    return t ? (0, f.SH)({ advertiserName: t }) : f.C5;
                                case M.Eq.go_to:
                                    return t ? (0, f._3)({ advertiserName: t }) : f.cB;
                                case M.Eq.visit_site:
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
                    const { advertiserName: e, avatarUri: t, ctaType: n, ctaUrl: a, playerApi: o } = this.props;
                    if (!o) return null;
                    const i = this._buildMessage(n, e);
                    return r.createElement(k.ZP, { "aria-label": i, icon: t ? r.createElement(h.default, { borderColor: "white", borderWidth: "small", size: "medium", uri: t }) : void 0, link: a, onPress: this._handlePress(o), size: "xSmall", type: "onMediaDominantColorFilled" }, i);
                }
            }
            const X = z;
            class $ extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showControlBar: !1, stackedLabels: !1 }),
                        (this._durationLabelRef = r.createRef()),
                        (this._descriptionLabelRef = r.createRef()),
                        (this._handleLayout = () => {
                            const e = this._durationLabelRef?.current,
                                t = this._descriptionLabelRef?.current;
                            e &&
                                t &&
                                e.measure((e, n) => {
                                    t.measure((e, t) => {
                                        n !== t ? this.setState({ stackedLabels: !0 }) : this.setState({ stackedLabels: !1 });
                                    });
                                });
                        }),
                        (this._renderPrerollControlBar = (e) => {
                            const { containerRef: t, onSkip: n, playerApi: o, playerState: s } = this.props;
                            if (!o || !s) return null;
                            const { Observer: l, observed: u } = e,
                                d = (0, S.JN)(s, u, S.i2),
                                h = s.fullscreen.isFullscreen;
                            return r.createElement(c.ZP.Consumer, null, ({ direction: e }) => {
                                const c = "rtl" === e;
                                return r.createElement(a.Z, { style: V.bottomContentContainer }, r.createElement(a.Z, { style: [V.bottomContentRow, { flexDirection: c ? "row-reverse" : "row" }] }, r.createElement(a.Z, { style: [V.forceFullWidth, { flexDirection: c ? "row-reverse" : "row" }] }, r.createElement(l, { focus: !0, interactionKey: S.IG.A11YHook }, r.createElement(a.Z, { focusable: !0 })), r.createElement(a.Z, { style: V.flexExpand }, r.createElement(a.Z, { style: [V.labelOuterContainerBase, c ? V.labelOuterContainerRtl : V.labelOuterContainerLtr] }, r.createElement(i.Z, { show: d }, r.createElement(a.Z, { style: [V.bottomContentRow, { flexDirection: c ? "row-reverse" : "row" }, V.rowBottomSpace] }, this._renderLabels(c)))), h ? null : r.createElement(a.Z, { style: [V.bottomContentRow, { flexDirection: c ? "row-reverse" : "row" }] }, r.createElement(a.Z, { style: [V.skipThumbnail, c ? V.skipThumbnailAbsoluteRtl : V.skipThumbnailAbsolute], testID: q.floatSkipThumbnail }, r.createElement(D, { onClick: n }))), r.createElement(l, { focus: !0, interactionKey: S.IG.ControlBar, mouseover: !0, touch: !0 }, r.createElement(Y, { containerRef: t, displayDismissableControls: !d, playerApi: o, playerState: s, skipButton: h ? r.createElement(a.Z, { style: [V.skipThumbnail, c ? V.skipThumbnailRelativeRtl : V.skipThumbnailRelative], testID: q.inlineSkipThumbnail }, r.createElement(D, { onClick: n })) : null }))))));
                            });
                        }),
                        (this._renderWithIntentionContext = (e) => {
                            const { playerApi: t, playerState: n, renderPrerollActionMenu: i } = this.props;
                            if (!t || !n) return null;
                            const s = (0, b.Ci)(n),
                                c = s?.advertiserProfileImageUrl,
                                u = s?.advertiserName,
                                m = s?.cta;
                            return r.createElement(r.Fragment, null, r.createElement(l.Z, { colors: [m ? d.default.theme.colors.transparent : d.default.theme.colors.translucentBlack77, d.default.theme.colors.transparent], style: V.header }, r.createElement(a.Z, { style: V.profileContainer }, m ? r.createElement(X, { advertiserName: u, avatarUri: c, ctaType: m.type, ctaUrl: m.url, playerApi: t }) : r.createElement(r.Fragment, null, c && r.createElement(h.default, { "aria-hidden": !0, borderColor: "white", borderWidth: "small", focusable: !1, size: "medium", uri: c }), u && r.createElement(o.ZP, { color: "white", style: V.profileText, weight: "bold" }, u))), i?.()), this._renderPrerollControlBar(e));
                        }),
                        (this._renderLabels = (e) =>
                            r.createElement(m.o, { periodic: !0 }, ({ playerState: t }) => {
                                const n = (0, b.Ci)(t),
                                    i = (0, b.us)(n),
                                    l = (0, b.Ov)(n) || 0,
                                    c = i ? i - l : null,
                                    d = [V.labelContainerBase, e ? V.labelContainerRtl : V.labelContainerLtr],
                                    h = [u.W.borderRadiusLeft, this.state.stackedLabels && u.W.borderRadiusRight],
                                    m = [u.W.borderRadiusRight, this.state.stackedLabels && u.W.borderRadiusLeft],
                                    p = n && "number" == typeof c && !n.isLive ? r.createElement(a.Z, { ref: this._durationLabelRef }, r.createElement(s.ZP, { key: "PrerollVideoOverlay-DurationLabel", style: [u.W.label, e ? V.labelSpaceLeft : u.W.spaceRight, this.state.stackedLabels && V.labelBottomSpace, ...(e ? m : h)] }, r.createElement(o.ZP, { numberOfLines: 1 }, (0, b.mr)(c)))) : null,
                                    S = r.createElement(a.Z, { ref: this._descriptionLabelRef }, r.createElement(s.ZP, { key: "PrerollVideoOverlay-DescriptionLabel", style: [u.W.label, e ? V.labelSpaceLeft : u.W.spaceRight, ...(e ? h : m)] }, r.createElement(o.ZP, { numberOfLines: 1 }, f.DD)));
                                return r.createElement(a.Z, { onLayout: this._handleLayout, pointerEvents: "none", style: d }, p, S);
                            }));
                }
                render() {
                    const { playerApi: e, playerState: t } = this.props;
                    return e && t ? r.createElement(p.Z.Context.Consumer, null, this._renderWithIntentionContext) : null;
                }
            }
            const V = d.default.create((e) => ({
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
                q = { floatSkipThumbnail: "float-SkipThumbnail", inlineSkipThumbnail: "inline-SkipThumbnail" },
                K = $;
        },
        870373: (e, t, n) => {
            n.d(t, { K: () => a });
            var r = n(392237);
            const a = (e) => (1 === e ? { height: r.default.theme.spacesPx.space48, width: r.default.theme.spacesPx.space48 } : { height: r.default.theme.spacesPx.space40, width: e * r.default.theme.spacesPx.space40 });
        },
        41871: (e, t, n) => {
            n.d(t, { Z: () => v });
            var r = n(807896),
                a = n(202784),
                o = n(325686),
                i = n(111677),
                s = n.n(i),
                l = n(83515),
                c = n(926628),
                u = n(301049),
                d = n(154003),
                h = n(466792),
                m = n(173739),
                p = n(392237);
            const f = s().b3160a69;
            class b extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { showSlider: !1, isSliderActive: !1 }),
                        (this._handleButtonLayoutChange = (e) => {
                            const { containerHeight: t } = this.props,
                                { sliderMaxHeight: n } = this.state,
                                { height: r } = e.nativeEvent.layout;
                            if (t) {
                                const e = t - r - p.default.theme.spacesPx.space20 + "px";
                                e !== n && this.setState({ sliderMaxHeight: e });
                            }
                        }),
                        (this._handleSliderActive = (e) => this.setState({ isSliderActive: e })),
                        (this._showSlider = () => this.setState({ showSlider: !0 })),
                        (this._hideSlider = () => this.setState({ showSlider: !1 })),
                        (this._shouldShowSlider = (e) => e.showSlider || e.isSliderActive),
                        (this._normalizeValue = (e) => Math.max(0, Math.min(e, 100))),
                        (this._getSliderMarginStyles = (e) => {
                            const t = e ?? "medium";
                            return g["large" === t ? "xLarge" : t];
                        }),
                        (this._handleKeyDown = (e) => {
                            const { onSliderChange: t, volumePercent: n } = this.props,
                                { altKey: r, ctrlKey: a, metaKey: o } = e;
                            if (r || a || o) return;
                            const i = e.key === u.Z.ArrowUp || e.key === u.Z.ArrowRight,
                                s = e.key === u.Z.ArrowDown || e.key === u.Z.ArrowLeft;
                            if (i || s) {
                                const r = this._normalizeValue(n + 10 * (i ? 1 : -1));
                                t && t(r), e.preventDefault();
                            }
                        });
                }
                componentDidUpdate(e, t) {
                    const { onHideSlider: n, onShowSlider: r, onSliderChange: a } = this.props;
                    if (a) {
                        const e = this._shouldShowSlider(t),
                            a = this._shouldShowSlider(this.state);
                        !e && a && r && r(), e && !a && n && n();
                    }
                }
                render() {
                    const { accessibilityLabelIcon: e, accessibilityLabelSlider: t, containerHeight: n, isMuted: i, onHideSlider: s, onMuteToggle: u, onShowSlider: b, onSliderChange: g, pullRight: v, sliderColor: y, volumePercent: C, withGraySliderTrack: T, withNavigationSliderBackground: R, ...E } = this.props,
                        w = i ? a.createElement(l.default, null) : a.createElement(c.default, null),
                        x = R ? S.sliderWithNavigationBackground : S.sliderWithDefaultBackground;
                    return a.createElement(h.Z, { disabled: !g, onFocusRingGained: g ? this._showSlider : void 0, onFocusRingLost: g ? this._hideSlider : void 0, onHoverIn: g ? this._showSlider : void 0, onHoverOut: g ? this._hideSlider : void 0 }, a.createElement(o.Z, { onKeyDown: g ? this._handleKeyDown : void 0 }, a.createElement(d.ZP, (0, r.Z)({ "aria-label": e, icon: w, onLayout: this._handleButtonLayoutChange, onPress: u, pullRight: v, type: "onMediaText" }, E)), g && a.createElement(h.Z, { onFocusRingGained: b, onFocusRingLost: s }, ({ isFocusedWithin: e }) => a.createElement(o.Z, { style: [S.sliderBackground, x, this._getSliderMarginStyles(E.size), e || this._shouldShowSlider(this.state) ? null : p.default.visuallyHidden, !!n && { maxHeight: this.state.sliderMaxHeight }] }, a.createElement(m.Z, { accessibilityLabelValueText: f({ volumePercent: C }), "aria-label": t, color: y || "white", isVertical: !0, keyboardStep: 10, max: 100, min: 0, onActive: this._handleSliderActive, onChange: g, step: 1, value: i ? 0 : C || 0, withGrayBackground: T })))));
                }
            }
            b.defaultProps = { pullRight: !1 };
            const S = p.default.create((e) => ({ sliderBackground: { bottom: 0, borderRadius: e.borderRadii.xLarge, height: `calc(${e.spaces.space64}*2)`, start: e.spaces.space4, position: "absolute", padding: e.spaces.space12, paddingVertical: e.spaces.space16, end: e.spaces.space4 }, sliderWithDefaultBackground: { backgroundColor: e.colors.translucentBlack30 }, sliderWithNavigationBackground: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall } })),
                g = p.default.create(({ spaces: e, spacesPx: t }) => {
                    const n = `${t.space16 + t.space4 + t.space2}px`,
                        r = `${t.space20 + t.space24}px`,
                        a = `${t.space12 + t.space40}px`;
                    return { xSmall: { marginBottom: e.space24 }, small: { marginBottom: e.space32 }, medium: { marginBottom: e.space36 }, large: { marginBottom: r }, xLarge: { marginBotom: a }, smallCompact: { marginBottom: n }, DEPRECATED_normalCompact: { marginBottom: e.space32 }, DEPRECATED_normal: { marginBottom: e.space40 } };
                }),
                v = b;
        },
        27137: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(157396);
            const a = (0, n(587878).Z)({ palette: r.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        151624: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = n(454479).Z;
        },
        454479: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(18198),
                a = n(661841),
                o = a.Z.currentCentroidXOfTouchesChangedAfter,
                i = a.Z.currentCentroidYOfTouchesChangedAfter,
                s = a.Z.previousCentroidXOfTouchesChangedAfter,
                l = a.Z.previousCentroidYOfTouchesChangedAfter,
                c = a.Z.currentCentroidX,
                u = a.Z.currentCentroidY,
                d = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = o(t, e._accountsForMovesUpTo)), (e.moveY = i(t, e._accountsForMovesUpTo));
                        var n = e._accountsForMovesUpTo,
                            r = s(t, n),
                            a = o(t, n),
                            c = l(t, n),
                            u = i(t, n),
                            d = e.dx + (a - r),
                            h = e.dy + (u - c),
                            m = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (d - e.dx) / m), (e.vy = (h - e.dy) / m), (e.dx = d), (e.dy = h), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            n = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, n),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, n),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && d._initializeGestureState(n), (n.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, n)),
                                onMoveShouldSetResponderCapture(t) {
                                    var r = t.touchHistory;
                                    return n._accountsForMovesUpTo !== r.mostRecentTimeStamp && (d._updateGestureStateOnMove(n, r), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, n));
                                },
                                onResponderGrant: (a) => (
                                    t.handle || (t.handle = r.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (n.x0 = c(a.touchHistory)),
                                    (n.y0 = u(a.touchHistory)),
                                    (n.dx = 0),
                                    (n.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(a, n),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(a, n)
                                ),
                                onResponderReject(r) {
                                    h(t, e.onPanResponderReject, r, n);
                                },
                                onResponderRelease(r) {
                                    h(t, e.onPanResponderRelease, r, n), m(t), d._initializeGestureState(n);
                                },
                                onResponderStart(t) {
                                    var r = t.touchHistory;
                                    (n.numberActiveTouches = r.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, n);
                                },
                                onResponderMove(t) {
                                    var r = t.touchHistory;
                                    n._accountsForMovesUpTo !== r.mostRecentTimeStamp && (d._updateGestureStateOnMove(n, r), e.onPanResponderMove && e.onPanResponderMove(t, n));
                                },
                                onResponderEnd(r) {
                                    var a = r.touchHistory;
                                    (n.numberActiveTouches = a.numberActiveTouches), h(t, e.onPanResponderEnd, r, n);
                                },
                                onResponderTerminate(r) {
                                    h(t, e.onPanResponderTerminate, r, n), m(t), d._initializeGestureState(n);
                                },
                                onResponderTerminationRequest: (t) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(t, n),
                                onClickCapture: (e) => {
                                    !0 === t.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => t.handle,
                        };
                    },
                };
            function h(e, t, n, a) {
                e.handle && (r.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(n, a);
            }
            function m(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const p = d;
        },
        661841: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = {
                centroidDimension: function (e, t, n, a) {
                    var o = e.touchBank,
                        i = 0,
                        s = 0,
                        l = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                    if (null !== l) l.touchActive && l.currentTimeStamp > t && ((i += a && n ? l.currentPageX : a && !n ? l.currentPageY : !a && n ? l.previousPageX : l.previousPageY), (s = 1));
                    else
                        for (var c = 0; c < o.length; c++) {
                            var u = o[c];
                            if (null != u && u.touchActive && u.currentTimeStamp >= t) {
                                (i += a && n ? u.currentPageX : a && !n ? u.currentPageY : !a && n ? u.previousPageX : u.previousPageY), s++;
                            }
                        }
                    return s > 0 ? i / s : r.noCentroid;
                },
                currentCentroidXOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !0, !0);
                },
                currentCentroidYOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !1, !0);
                },
                previousCentroidXOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !0, !1);
                },
                previousCentroidYOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !1, !1);
                },
                currentCentroidX: function (e) {
                    return r.centroidDimension(e, 0, !0, !0);
                },
                currentCentroidY: function (e) {
                    return r.centroidDimension(e, 0, !1, !0);
                },
                noCentroid: -1,
            };
            const a = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI.f0992eba.js.map
