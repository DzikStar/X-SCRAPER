"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerHashtagHighlightUI"],
    {
        893164: (e, t, s) => {
            s.d(t, { Z: () => d });
            var r = s(202784),
                a = s(325686),
                n = s(111677),
                i = s.n(n),
                l = s(355830),
                o = s(731708),
                c = s(154003),
                u = s(992942),
                h = s(392237);
            const p = i().a9edea48;
            function d(e) {
                const { displayBackgroundImage: t = !1, errorMessage: s, iconPlayError: n, imageSrc: i, onReloadPress: d } = e;
                return r.createElement(a.Z, { style: [h.default.absoluteFill, t ? null : g.blankOverlay] }, t ? r.createElement(r.Fragment, null, r.createElement(a.Z, { style: g.backgroundImage }, i && r.createElement(u.Z, { resizeMode: "cover", source: i, style: h.default.absoluteFill })), r.createElement(a.Z, { style: g.overlay })) : null, r.createElement(a.Z, { style: g.errorContainer }, r.createElement(a.Z, null, n ? r.createElement(l.default, { style: g.playErrorIcon }) : null), r.createElement(a.Z, { focusable: !0 }, r.createElement(o.ZP, { style: t ? g.errorMsgTextWhite : g.errorMsgTextGray }, s)), d ? r.createElement(c.ZP, { onPress: d, style: g.buttonContainer, type: "brandFilled" }, p) : null));
            }
            const g = h.default.create((e) => ({ backgroundImage: { ...h.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...h.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        916692: (e, t, s) => {
            s.d(t, { Z: () => h });
            var r = s(202784),
                a = s(928316),
                n = s(325686),
                i = s(392237),
                l = s(424713),
                o = s(251478);
            class c extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { grabbing: !1 }),
                        (this._firstClick = !0),
                        (this._componentRef = r.createRef()),
                        (this._handleMouseDown = () => {
                            const { playerState: e } = this.props,
                                t = e && (0, l.Ci)(e);
                            t && t.is360 && this._setEventListener("mousemove", this._handleMouseMove), this._setEventListener("mouseup", this._handleMouseUp);
                        }),
                        (this._handleMouseMove = () => {
                            const { playerState: e } = this.props,
                                t = e && (0, l.Ci)(e);
                            t && t.is360 && (this.setState({ grabbing: !0 }), this._setEventListener("mouseup", this._handleGrabRelease)), this._unsetEventListener("mousemove", this._handleMouseMove), this._unsetEventListener("mouseup", this._handleMouseUp);
                        }),
                        (this._handleGrabRelease = () => {
                            this.setState({ grabbing: !1 }), this._unsetEventListener("mouseup", this._handleGrabRelease);
                        }),
                        (this._handleMouseUp = (e) => {
                            this._unsetEventListener("mousemove", this._handleMouseMove), this._unsetEventListener("mouseup", this._handleMouseUp), this._handleClick(e);
                        }),
                        (this._handleClick = (e) => {
                            const { hideControls: t, isTouchOnlyUI: s, onClick: r, playerApi: a, playerDisplayOptions: n, playerState: i } = this.props;
                            if (r) return a && i && i.isPlaying && a.pause(), r(e);
                            if (a && i) {
                                const e = (0, l.Ci)(i),
                                    r = e && e.contentType && e.contentType === o.wF.GIF;
                                if (this._firstClick && !r && ((this._firstClick = !1), i.isMuted)) return void a.unmute();
                                if (s && t) return;
                                const { pause: c, play: u, replay: h } = a,
                                    p = e && e.isLive,
                                    d = n && n.liveClickthrough,
                                    g = e && d && d.enabled && e.isLive && i.isPlaying && !e.is360;
                                if (s && t) return;
                                if (r) return void (i.isPlaying ? c() : u());
                                e && e.currentTimeMs === e.durationMs ? h() : i.isPlaying ? (g ? this._handleLiveClickthrough() : (p && !this.props.liveBroadcastRewindEnabled) || c()) : u();
                            }
                        }),
                        (this._setEventListener = (e, t) => {
                            const s = a.findDOMNode(this._componentRef.current);
                            s && s.addEventListener(e, t);
                        }),
                        (this._unsetEventListener = (e, t) => {
                            const s = a.findDOMNode(this._componentRef.current);
                            s && s.removeEventListener(e, t);
                        }),
                        (this._handleLiveClickthrough = () => {
                            const { playerApi: e, playerDisplayOptions: t, playerState: s } = this.props,
                                r = t && t.liveClickthrough,
                                a = s && (0, l.Ci)(s);
                            if (r && s && a && e) {
                                const t = r.url || s.eventUrl || a.broadcastShareUrl;
                                t && (window.open(t, r.target || "_blank"), e.liveClickthroughClicked());
                            }
                        });
                }
                render() {
                    const { playerState: e } = this.props,
                        { grabbing: t } = this.state,
                        s = e && (0, l.Ci)(e),
                        a = s && s.is360;
                    return r.createElement(n.Z, { onMouseDown: this._handleMouseDown, ref: this._componentRef, style: [i.default.absoluteFill, a ? (t ? u.base360grabbing : u.base360) : u.base] });
                }
            }
            const u = i.default.create((e) => ({ base: { cursor: "pointer" }, base360: { cursor: "grab" }, base360grabbing: { cursor: "grabbing" } })),
                h = c;
        },
        518406: (e, t, s) => {
            s.r(t), s.d(t, { default: () => f });
            var r = s(202784),
                a = s(325686),
                n = s(731708),
                i = s(908629),
                l = s(930751),
                o = s(868634),
                c = s(392237),
                u = s(364779),
                h = s(535814),
                p = s(424713),
                d = s(251478),
                g = s(523319),
                y = s(38660),
                m = s(916692),
                b = s(804455);
            function f(e) {
                const { hashtagHighlightProps: t, playerApi: s, playerDisplayOptions: c, playerState: f, poster: v, useKeyboardShortcuts: _ } = e;
                if (!s || !f) return null;
                const C = f && (0, p.Ci)(f);
                if (!C || C.contentType !== d.wF.GIF || !t) return null;
                if (!!f.error) return r.createElement(i.Z, { show: !0 }, r.createElement(y.Z, { imageSrc: v, playerApi: s, playerState: f }));
                const Z = !c?.hidePosterImage,
                    k = "PLAY_REQUESTED" !== f.controls?.playState,
                    M = f.tracksFinished;
                return r.createElement(h.Z, { enabled: !!_, playerApi: s, playerState: f }, r.createElement(u.Z, { playerState: f }, r.createElement(r.Fragment, null, r.createElement(m.Z, { playerApi: s, playerDisplayOptions: c, playerState: f }), Z && !M && r.createElement(b.Z, { imageSrc: v, playerApi: s, playerState: f, withPlayButton: k }), r.createElement(g.Z, { playerState: f }), r.createElement(a.Z, { style: E.root }, r.createElement(a.Z, { style: E.gifLabel }, r.createElement(o.ZP, null, r.createElement(n.ZP, { weight: "bold" }, "GIF"))), r.createElement(a.Z, { style: E.hashtagHighlight }, r.createElement(l.Z, t)), r.createElement(o.ZP, { style: [E.gifLabel, E.invisibleBadge] }, r.createElement(n.ZP, { weight: "bold" }, "GIF"))))));
            }
            const E = c.default.create((e) => ({ root: { position: "absolute", bottom: e.spaces.space12, flexDirection: "row", display: "flex", justifyContent: "space-between", width: "100%", alignItems: "flex-end" }, gifLabel: { paddingHorizontal: e.spaces.space12, maxWidth: "20%" }, hashtagHighlight: { display: "flex", maxWidth: "80%" }, invisibleBadge: { visibility: "hidden" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerHashtagHighlightUI.dafe5f2a.js.map
