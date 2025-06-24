"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI~loaders.video.VideoPlayerEventsU", "icons/IconMediaExpand-js"],
    {
        420922: (e, t, s) => {
            s.d(t, { Z: () => c });
            var o = s(202784),
                i = s(325686),
                n = s(908629),
                r = s(215337),
                a = s(392237),
                l = s(445014);
            const c = ({ actionButton: e, displayDismissableControls: t = !0, leftContent: s, rightContent: c, scrubber: h, skipButton: d, viewCountGraph: u }) => o.createElement(o.Fragment, null, o.createElement(n.Z, { show: t }, o.createElement(r.Z, { colors: [a.default.theme.colors.transparent, a.default.theme.colors.translucentBlack77], style: l.ZP.absoluteContainer })), o.createElement(i.Z, { style: l.ZP.controlContainer }, o.createElement(i.Z, { style: l.ZP.flex }, o.createElement(n.Z, { show: t }, o.createElement(i.Z, { style: l.ZP.controlsBottomOffset }, u, h, o.createElement(i.Z, { style: l.A9 }, o.createElement(i.Z, { style: l.rq }, e, o.createElement(i.Z, { style: [l.ZP.flexRow, l.ZP.flexShrink] }, s)), o.createElement(i.Z, { style: l.Xo }, c))))), d && o.createElement(i.Z, { style: l.ZP.controlsBottomOffset }, d)));
        },
        103849: (e, t, s) => {
            s.d(t, { Z: () => c, g: () => l });
            var o = s(807896),
                i = s(202784),
                n = s(154003),
                r = s(336373);
            const a = (e) => {
                    const { hoverLabelPreferredHorizontalOrientation: t, hoverLabelWithExtraSpace: s, ...r } = e,
                        a = e["aria-label"] ? { label: e["aria-label"], preferredVerticalOrientation: "up", preferredHorizontalOrientation: e.hoverLabelPreferredHorizontalOrientation, withLayer: !1, withExtraSpace: e.hoverLabelWithExtraSpace } : void 0;
                    return i.createElement(n.ZP, (0, o.Z)({}, r, { hoverLabel: a, size: e.size || "medium", type: "onMediaText" }));
                },
                l = (e) => {
                    const { icon: t, onPress: s, scribeNamespace: n, size: l, testID: c, ...h } = e,
                        d = r.Z.useAnalytics();
                    return i.createElement(
                        a,
                        (0, o.Z)({}, h, {
                            icon: t,
                            onPress: (e) => {
                                s && s(e), d.scribe(n);
                            },
                            size: l,
                            testID: c,
                        }),
                    );
                },
                c = a;
        },
        70889: (e, t, s) => {
            s.d(t, { Z: () => a });
            var o = s(202784),
                i = s(731708);
            const n = (e) => o.createElement(i.ZP, { color: "white", numberOfLines: 1, style: [r.withMargin, e.style] }, e.children),
                r = s(392237).default.create((e) => ({ withMargin: { marginHorizontal: e.spaces.space4 } })),
                a = o.memo(n);
        },
        445014: (e, t, s) => {
            s.d(t, { A9: () => r, Nk: () => n, Xo: () => l, ZP: () => h, eR: () => c, i3: () => i, rq: () => a });
            const o = s(392237).default.create((e) => ({ root: { writingDirection: "ltr", position: "absolute", bottom: 0, cursor: "auto", width: "100%" }, container: { paddingHorizontal: e.spaces.space4, paddingBottom: e.spaces.space2 }, absoluteContainer: { paddingHorizontal: e.spaces.space4, paddingBottom: e.spaces.space2, width: "100%", position: "absolute", minHeight: "100%" }, scrubber: { paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4 }, bottomBar: { width: "100%", justifyContent: "space-between" }, actionContainer: { minHeight: e.spaces.space40 }, flex: { flex: 1 }, flexShrink: { flexShrink: 1 }, flexRow: { alignItems: "center", flexDirection: "row" }, rightContainer: { justifyContent: "flex-end" }, leftContainer: { justifyContent: "flex-start", flexGrow: 1 }, controlContainer: { flexDirection: "row", paddingHorizontal: e.spaces.space4 }, controlsBottomOffset: { display: "flex", paddingBottom: e.spaces.space2 }, viewCountGraph: { top: e.spaces.space12, zIndex: -1, paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4 }, liveCircle: { color: e.colors.red500, width: e.spaces.space4 }, notLiveCircle: { color: e.colors.gray100, width: e.spaces.space4 }, barGraphItem: { backgroundColor: "rgba(255, 255, 255, 0.7)", borderColor: "rgba(255, 255, 255, 0.7)", zIndex: 0 }, withMargin: { marginHorizontal: e.spaces.space2, paddingHorizontal: e.spaces.space2 }, skipButtonAffordance: { opacity: 0 }, skipAdText: { fontVariant: "tabular-nums" } })),
                i = o.root,
                n = o.container,
                r = [o.flexRow, o.bottomBar],
                a = [o.actionContainer, o.leftContainer, o.flexShrink, o.flexRow],
                l = [o.actionContainer, o.rightContainer, o.flexRow],
                c = o.skipAdText,
                h = o;
        },
        864386: (e, t, s) => {
            s.d(t, { Z: () => f });
            var o = s(807896),
                i = (s(571372), s(202784)),
                n = s(24812);
            const r = "click",
                a = "focused",
                l = "mousemove",
                c = "mouseover",
                h = "touch",
                d = (e, t) => (s) => {
                    const { observed: o } = s;
                    return o[e].add(t), { observed: o };
                },
                u = (e, t) => (s) => {
                    const { observed: o } = s;
                    return o[e].delete(t), { observed: o };
                },
                p = i.createContext({ observed: { click: new Set(), focused: new Set(), mousemove: new Set(), mouseover: new Set() }, Observer: () => null }),
                m = i.createContext(() => null);
            class f extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._timeoutCollection = { click: {}, focused: {}, mousemove: {}, mouseover: {}, touch: {} }),
                        (this._interactionWatcherRefs = {}),
                        (this.state = { observed: { click: new Set(), focused: new Set(), mousemove: new Set(), mouseover: new Set(), touch: new Set() } }),
                        (this.getContext = () => {
                            const { observed: e } = this.state;
                            return { observed: e, Observer: this._renderObserver };
                        }),
                        (this.hasActiveInteractionWatcherChildren = () =>
                            !Object.keys(this._interactionWatcherRefs).every((e) => {
                                const t = this._interactionWatcherRefs[e];
                                return !t || !t.contains(document.activeElement);
                            })),
                        (this._renderObserver = ({ children: e, interactionKey: t, click: s, focus: n, mousemove: r, mouseover: a, touch: l, interactionTimeoutMs: c = 2e3 }) => {
                            const h = {};
                            return (
                                s && (h.onClick = this._handleClick(t, c)),
                                n && ((h.onBlur = this._handleBlur(t, c)), (h.onFocus = this._handleActive(t))),
                                r && (h.onMouseMove = this._handleMouseMove(t, c)),
                                a && ((h.onMouseEnter = this._handleMouseEnter(t)), (h.onMouseLeave = this._handleMouseLeave(t))),
                                l && ((h.onTouchStart = this._handleTouchStart(t)), (h.onTouchEnd = this._handleTouchEnd(t, c))),
                                i.createElement(
                                    "div",
                                    (0, o.Z)({}, h, {
                                        ref: (e) => {
                                            if (!t) throw new Error("Observer requires an `interactionKey` prop for storing refs.");
                                            this._interactionWatcherRefs[t] = e;
                                        },
                                    }),
                                    e,
                                )
                            );
                        }),
                        (this._handleMouseEnter = (e) => () => {
                            this.setState(d(c, e));
                        }),
                        (this._handleMouseLeave = (e) => () => {
                            this.setState(u(c, e));
                        }),
                        (this._handleTouchStart = (e) => () => {
                            this.setState(d(h, e));
                        }),
                        (this._handleTouchEnd = (e, t) => () => {
                            const s = h;
                            clearTimeout(this._timeoutCollection[s][e]), t ? (this._timeoutCollection[s][e] = setTimeout(() => this.setState(u(s, e)), t)) : this.setState(u(s, e));
                        }),
                        (this._handleMouseMove = (e, t) => () => {
                            const s = l;
                            this.state.observed[s].has(e) || this.setState(d(s, e)), clearTimeout(this._timeoutCollection[s][e]), (this._timeoutCollection[s][e] = setTimeout(() => this.setState(u(s, e)), t));
                        }),
                        (this._handleClick = (e, t) => () => {
                            const s = r;
                            this.state.observed[s].has(e) || this.setState(d(s, e)), clearTimeout(this._timeoutCollection[s][e]), (this._timeoutCollection[s][e] = setTimeout(() => this.setState(u(s, e)), t));
                        }),
                        (this._handleActive = (e) => () => {
                            const t = a;
                            clearTimeout(this._timeoutCollection[t][e]);
                            const s = this.hasActiveInteractionWatcherChildren();
                            n.ZP.hadKeyboardEvent && s && this.setState(d(t, e));
                        }),
                        (this._handleBlur = (e, t) => () => {
                            const s = a;
                            clearTimeout(this._timeoutCollection[s][e]), this.state.observed[s].has(e) && (this._timeoutCollection[s][e] = setTimeout(this._handleFocusReset(e), t));
                        }),
                        (this._handleFocusReset = (e) => () => {
                            const t = a;
                            this.setState(u(t, e)), clearTimeout(this._timeoutCollection[t][e]);
                        });
                }
                componentWillUnmount() {
                    Object.keys(this._timeoutCollection).forEach((e) => {
                        const t = this._timeoutCollection[e];
                        Object.keys(t).forEach((e) => {
                            clearTimeout(t[e]);
                        });
                    });
                }
                render() {
                    const { children: e } = this.props;
                    if (!e) throw new Error("component requires children prop.");
                    const t = this._renderObserver;
                    return i.createElement(f.ObserverContext.Provider, { value: t }, i.createElement(f.Context.Provider, { value: this.getContext() }, e));
                }
            }
            (f.Context = p), (f.ObserverContext = m);
        },
        591354: (e, t, s) => {
            s.d(t, { Be: () => y, C5: () => m, Cf: () => d, DD: () => b, DP: () => g, I_: () => h, L7: () => c, LH: () => r, PN: () => v, Pr: () => n, SH: () => a, WB: () => C, _3: () => l, bl: () => _, cB: () => f, iX: () => u, st: () => p });
            var o = s(111677),
                i = s.n(o);
            const n = i().eeb64451,
                r = i().f3c268a5,
                a = i().g60001bb,
                l = i().dff1ddd9,
                c = i().b0b22805,
                h = i().e8733ed9,
                d = i().i3b7a017,
                u = i().c67e71aa,
                p = i().a6ada13e,
                m = i().j0f12222,
                f = i().f569f7c8,
                v = i().j0c6772a,
                b = i().f73003aa,
                y = i().b3112b8a,
                g = i().h6333ad0,
                _ = i().c59da417,
                C = i().c3c147cf;
        },
        896988: (e, t, s) => {
            s.d(t, { T: () => _, Z: () => E });
            var o = s(202784),
                i = s(325686),
                n = s(111677),
                r = s.n(n),
                a = s(530732),
                l = s(659651),
                c = s(537392),
                h = s(392237),
                d = s(336961),
                u = s(41871),
                p = s(738584),
                m = s(424713);
            const f = r().f17dfdb6,
                v = r().j190bf1a,
                b = r().f6dc9146,
                y = r().d30c74fe,
                g = r().c9a642fa,
                _ = Object.freeze({ LIVE_BROADCAST: "liveBroadcast", REPLAY_BROADCAST: "replayBroadcast", VOD: "vod", GIF: "gif", SLATE: "slate" });
            class C extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePlayPress = () => {
                            const { playerApi: e } = this.props;
                            e && e.play();
                        }),
                        (this._renderBottomRow = ({ isHovered: e }) => {
                            const { isPlaying: t } = this.props.playerState,
                                { isLive: s, mediaType: n } = this.props,
                                r = n === _.VOD,
                                a = e && t;
                            return o.createElement(i.Z, { style: w.bottomRow }, this._renderMediaLabel({ isVod: r, isLive: s, withRemaining: a }), o.createElement(i.Z, { style: w.right }, o.createElement(u.Z, { accessibilityLabelIcon: y, accessibilityLabelSlider: g, isMuted: this.props.playerState.isMuted, onMuteToggle: this._handleMuteToggle, onSliderChange: this._handleSliderChange, volumePercent: 100 * this.props.playerState.volume })));
                        }),
                        (this._renderMediaLabel = ({ isLive: e, isVod: t, withRemaining: s }) => (e ? o.createElement(l.Z, { align: "left", type: "live" }, v) : o.createElement(p.o, { periodic: !0 }, ({ playerState: e }) => this._renderPlaybackTime({ isVod: t, withRemaining: s, playerState: e })))),
                        (this._renderPlaybackTime = ({ isVod: e, playerState: t, withRemaining: s }) => {
                            const i = (0, m.Ci)(t),
                                n = (0, m.us)(i),
                                r = (0, m.Ov)(i),
                                a = n && r && (0, m.mr)(n - r),
                                c = n && r && `${(0, m.mr)(r)} / ${(0, m.mr)(n)}`;
                            let h;
                            return e ? c && a && (h = s ? c : a) : (h = s ? c : b), h ? o.createElement(l.Z, { align: "left", bold: !e && !s }, h) : null;
                        }),
                        (this._handleSliderChange = (e) => {
                            this.props.playerApi.setVolume(e / 100);
                        }),
                        (this._handleMuteToggle = () => {
                            const { playerApi: e, playerState: t } = this.props,
                                { isMuted: s } = t;
                            s ? e.unmute() : e.mute();
                        }),
                        (this._handleClick = () => {
                            const { playerApi: e, playerState: t } = this.props,
                                { isPlaying: s } = t;
                            s ? e.pause() : e.play();
                        });
                }
                render() {
                    const { isPlaying: e } = this.props.playerState;
                    return o.createElement(c.ZP, null, ({ containerWidth: t }) =>
                        o.createElement(a.Z, { interactiveStyles: null, pointerEvents: "box-none", style: w.overlay }, ({ isHovered: s }) => {
                            const n = t < h.default.theme.breakpoints.micro;
                            return o.createElement(o.Fragment, null, o.createElement(i.Z, { onClick: this._handleClick, style: w.overlay }, o.createElement(i.Z, { style: w.playButtonContainer }, !e && o.createElement(d.Z, { "aria-label": f, onPress: this._handlePlayPress, size: n ? "small" : "normal" }))), this._renderBottomRow({ isHovered: s }));
                        }),
                    );
                }
            }
            const w = h.default.create((e) => ({ overlay: { ...h.default.absoluteFillObject, flexGrow: 1 }, playButtonContainer: { alignItems: "center", flexGrow: 1, justifyContent: "center" }, bottomRow: { position: "absolute", bottom: 0, flexGrow: 1, zIndex: 1, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space4, width: "100%" }, controlsContainer: { alignItems: "center", justifyContent: "space-between", flexDirection: "row", flexGrow: 1, flexShrink: 0 }, left: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "flex-start" }, right: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "flex-end" }, totalTime: { paddingHorizontal: e.spaces.space4 } })),
                E = C;
        },
        916692: (e, t, s) => {
            s.d(t, { Z: () => d });
            var o = s(202784),
                i = s(928316),
                n = s(325686),
                r = s(392237),
                a = s(424713),
                l = s(251478);
            class c extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { grabbing: !1 }),
                        (this._firstClick = !0),
                        (this._componentRef = o.createRef()),
                        (this._handleMouseDown = () => {
                            const { playerState: e } = this.props,
                                t = e && (0, a.Ci)(e);
                            t && t.is360 && this._setEventListener("mousemove", this._handleMouseMove), this._setEventListener("mouseup", this._handleMouseUp);
                        }),
                        (this._handleMouseMove = () => {
                            const { playerState: e } = this.props,
                                t = e && (0, a.Ci)(e);
                            t && t.is360 && (this.setState({ grabbing: !0 }), this._setEventListener("mouseup", this._handleGrabRelease)), this._unsetEventListener("mousemove", this._handleMouseMove), this._unsetEventListener("mouseup", this._handleMouseUp);
                        }),
                        (this._handleGrabRelease = () => {
                            this.setState({ grabbing: !1 }), this._unsetEventListener("mouseup", this._handleGrabRelease);
                        }),
                        (this._handleMouseUp = (e) => {
                            this._unsetEventListener("mousemove", this._handleMouseMove), this._unsetEventListener("mouseup", this._handleMouseUp), this._handleClick(e);
                        }),
                        (this._handleClick = (e) => {
                            const { hideControls: t, isTouchOnlyUI: s, onClick: o, playerApi: i, playerDisplayOptions: n, playerState: r } = this.props;
                            if (o) return i && r && r.isPlaying && i.pause(), o(e);
                            if (i && r) {
                                const e = (0, a.Ci)(r),
                                    o = e && e.contentType && e.contentType === l.wF.GIF;
                                if (this._firstClick && !o && ((this._firstClick = !1), r.isMuted)) return void i.unmute();
                                if (s && t) return;
                                const { pause: c, play: h, replay: d } = i,
                                    u = e && e.isLive,
                                    p = n && n.liveClickthrough,
                                    m = e && p && p.enabled && e.isLive && r.isPlaying && !e.is360;
                                if (s && t) return;
                                if (o) return void (r.isPlaying ? c() : h());
                                e && e.currentTimeMs === e.durationMs ? d() : r.isPlaying ? (m ? this._handleLiveClickthrough() : (u && !this.props.liveBroadcastRewindEnabled) || c()) : h();
                            }
                        }),
                        (this._setEventListener = (e, t) => {
                            const s = i.findDOMNode(this._componentRef.current);
                            s && s.addEventListener(e, t);
                        }),
                        (this._unsetEventListener = (e, t) => {
                            const s = i.findDOMNode(this._componentRef.current);
                            s && s.removeEventListener(e, t);
                        }),
                        (this._handleLiveClickthrough = () => {
                            const { playerApi: e, playerDisplayOptions: t, playerState: s } = this.props,
                                o = t && t.liveClickthrough,
                                i = s && (0, a.Ci)(s);
                            if (o && s && i && e) {
                                const t = o.url || s.eventUrl || i.broadcastShareUrl;
                                t && (window.open(t, o.target || "_blank"), e.liveClickthroughClicked());
                            }
                        });
                }
                render() {
                    const { playerState: e } = this.props,
                        { grabbing: t } = this.state,
                        s = e && (0, a.Ci)(e),
                        i = s && s.is360;
                    return o.createElement(n.Z, { onMouseDown: this._handleMouseDown, ref: this._componentRef, style: [r.default.absoluteFill, i ? (t ? h.base360grabbing : h.base360) : h.base] });
                }
            }
            const h = r.default.create((e) => ({ base: { cursor: "pointer" }, base360: { cursor: "grab" }, base360grabbing: { cursor: "grabbing" } })),
                d = c;
        },
        272879: (e, t, s) => {
            s.d(t, { IG: () => a, JN: () => l, V4: () => c, i2: () => r });
            var o = s(323265),
                i = s(401339),
                n = s(896988);
            const r = o.ZP.isMobileOS() && i.Z.isTouchSupported(),
                a = Object.freeze({ A11YHook: "VideoPlayerDefaultUI-A11YHook", ControlBar: "VideoPlayerDefaultUI-ControlBar", HashtagHighlight: "VideoPlayerDefaultUI-HashtagHighlight", Root: "VideoPlayerDefaultUI-Root", VideoCTA: "VideoPlayerDefaultUI-VideoCTA" });
            function l(e, t, s) {
                const { isPlaying: o } = e,
                    i = !!e.error,
                    n = e.controls.isPosterShown,
                    r = i || n;
                if (s) {
                    const e = 0 !== t.click.size,
                        s = t.touch.has(a.ControlBar);
                    return r || (o && !e && !s);
                }
                const l = !t.focused.size && !t.mouseover.has(a.Root),
                    c = t.mouseover.size > 1,
                    h = 0 !== t.mousemove.size;
                return r || (o && l) || (o && !t.focused.size && !h && !c);
            }
            const c = (e, t) => {
                switch (e) {
                    case "gif":
                        return n.T.GIF;
                    case "broadcast":
                        return t ? n.T.LIVE_BROADCAST : n.T.REPLAY_BROADCAST;
                    default:
                        return n.T.VOD;
                }
            };
        },
        841972: (e, t, s) => {
            s.r(t), s.d(t, { default: () => c });
            var o = s(202784),
                i = s(890601),
                n = s(783427),
                r = s(717683),
                a = s(347101);
            const l = (e = {}) => {
                const t = o.useContext(r.Z),
                    { direction: s } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style, t && a.Z.iconRTL], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M13 3h8v8h-2V6.41l-5.043 5.05-1.414-1.42L17.586 5H13V3zm-1.543 10.96L6.414 19H11v2H3v-8h2v4.59l5.043-5.05 1.414 1.42z" })) }, { writingDirection: s });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI~loaders.video.VideoPlayerEventsU.d3fc810a.js.map
