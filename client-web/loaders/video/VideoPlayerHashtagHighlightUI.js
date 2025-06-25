"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerHashtagHighlightUI"],
    {
        916692: (e, t, s) => {
            s.d(t, { Z: () => c });
            var i = s(202784),
                n = s(928316),
                a = s(325686),
                r = s(392237),
                l = s(424713),
                o = s(251478);
            class h extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { grabbing: !1 }),
                        (this._firstClick = !0),
                        (this._componentRef = i.createRef()),
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
                            const { hideControls: t, isTouchOnlyUI: s, onClick: i, playerApi: n, playerDisplayOptions: a, playerState: r } = this.props;
                            if (i) return n && r && r.isPlaying && n.pause(), i(e);
                            if (n && r) {
                                const e = (0, l.Ci)(r),
                                    i = e && e.contentType && e.contentType === o.wF.GIF;
                                if (this._firstClick && !i && ((this._firstClick = !1), r.isMuted)) return void n.unmute();
                                if (s && t) return;
                                const { pause: h, play: p, replay: c } = n,
                                    u = e && e.isLive,
                                    d = a && a.liveClickthrough,
                                    g = e && d && d.enabled && e.isLive && r.isPlaying && !e.is360;
                                if (s && t) return;
                                if (i) return void (r.isPlaying ? h() : p());
                                e && e.currentTimeMs === e.durationMs ? c() : r.isPlaying ? (g ? this._handleLiveClickthrough() : (u && !this.props.liveBroadcastRewindEnabled) || h()) : p();
                            }
                        }),
                        (this._setEventListener = (e, t) => {
                            const s = n.findDOMNode(this._componentRef.current);
                            s && s.addEventListener(e, t);
                        }),
                        (this._unsetEventListener = (e, t) => {
                            const s = n.findDOMNode(this._componentRef.current);
                            s && s.removeEventListener(e, t);
                        }),
                        (this._handleLiveClickthrough = () => {
                            const { playerApi: e, playerDisplayOptions: t, playerState: s } = this.props,
                                i = t && t.liveClickthrough,
                                n = s && (0, l.Ci)(s);
                            if (i && s && n && e) {
                                const t = i.url || s.eventUrl || n.broadcastShareUrl;
                                t && (window.open(t, i.target || "_blank"), e.liveClickthroughClicked());
                            }
                        });
                }
                render() {
                    const { playerState: e } = this.props,
                        { grabbing: t } = this.state,
                        s = e && (0, l.Ci)(e),
                        n = s && s.is360;
                    return i.createElement(a.Z, { onMouseDown: this._handleMouseDown, ref: this._componentRef, style: [r.default.absoluteFill, n ? (t ? p.base360grabbing : p.base360) : p.base] });
                }
            }
            const p = r.default.create((e) => ({ base: { cursor: "pointer" }, base360: { cursor: "grab" }, base360grabbing: { cursor: "grabbing" } })),
                c = h;
        },
        518406: (e, t, s) => {
            s.r(t), s.d(t, { default: () => _ });
            var i = s(202784),
                n = s(325686),
                a = s(731708),
                r = s(908629),
                l = s(930751),
                o = s(868634),
                h = s(392237),
                p = s(364779),
                c = s(535814),
                u = s(424713),
                d = s(251478),
                g = s(523319),
                y = s(38660),
                b = s(916692),
                m = s(804455);
            function _(e) {
                const { hashtagHighlightProps: t, playerApi: s, playerDisplayOptions: h, playerState: _, poster: f, useKeyboardShortcuts: E } = e;
                if (!s || !_) return null;
                const C = _ && (0, u.Ci)(_);
                if (!C || C.contentType !== d.wF.GIF || !t) return null;
                if (!!_.error) return i.createElement(r.Z, { show: !0 }, i.createElement(y.Z, { imageSrc: f, playerApi: s, playerState: _ }));
                const w = !h?.hidePosterImage,
                    L = "PLAY_REQUESTED" !== _.controls?.playState,
                    M = _.tracksFinished;
                return i.createElement(c.Z, { enabled: !!E, playerApi: s, playerState: _ }, i.createElement(p.Z, { playerState: _ }, i.createElement(i.Fragment, null, i.createElement(b.Z, { playerApi: s, playerDisplayOptions: h, playerState: _ }), w && !M && i.createElement(m.Z, { imageSrc: f, playerApi: s, playerState: _, withPlayButton: L }), i.createElement(g.Z, { playerState: _ }), i.createElement(n.Z, { style: v.root }, i.createElement(n.Z, { style: v.gifLabel }, i.createElement(o.ZP, null, i.createElement(a.ZP, { weight: "bold" }, "GIF"))), i.createElement(n.Z, { style: v.hashtagHighlight }, i.createElement(l.Z, t)), i.createElement(o.ZP, { style: [v.gifLabel, v.invisibleBadge] }, i.createElement(a.ZP, { weight: "bold" }, "GIF"))))));
            }
            const v = h.default.create((e) => ({ root: { position: "absolute", bottom: e.spaces.space12, flexDirection: "row", display: "flex", justifyContent: "space-between", width: "100%", alignItems: "flex-end" }, gifLabel: { paddingHorizontal: e.spaces.space12, maxWidth: "20%" }, hashtagHighlight: { display: "flex", maxWidth: "80%" }, invisibleBadge: { visibility: "hidden" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerHashtagHighlightUI.a4192d9a.js.map
