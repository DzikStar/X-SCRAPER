"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerHashtagHighlightUI"],
    {
        893164: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(202784),
                s = r(325686),
                n = r(674132),
                l = r.n(n),
                i = r(355830),
                o = r(731708),
                c = r(154003),
                h = r(992942),
                u = r(392237);
            const p = l().a9edea48;
            function d(e) {
                const { displayBackgroundImage: t = !1, errorMessage: r, iconPlayError: n, imageSrc: l, onReloadPress: d } = e;
                return a.createElement(s.Z, { style: [u.default.absoluteFill, t ? null : g.blankOverlay] }, t ? a.createElement(a.Fragment, null, a.createElement(s.Z, { style: g.backgroundImage }, l && a.createElement(h.Z, { resizeMode: "cover", source: l, style: u.default.absoluteFill })), a.createElement(s.Z, { style: g.overlay })) : null, a.createElement(s.Z, { style: g.errorContainer }, a.createElement(s.Z, null, n ? a.createElement(i.default, { style: g.playErrorIcon }) : null), a.createElement(s.Z, { focusable: !0 }, a.createElement(o.ZP, { style: t ? g.errorMsgTextWhite : g.errorMsgTextGray }, r)), d ? a.createElement(c.ZP, { onPress: d, style: g.buttonContainer, type: "brandFilled" }, p) : null));
            }
            const g = u.default.create((e) => ({ backgroundImage: { ...u.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...u.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        916692: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(202784),
                s = r(928316),
                n = r(325686),
                l = r(392237),
                i = r(424713),
                o = r(251478);
            class c extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { grabbing: !1 }),
                        (this._firstClick = !0),
                        (this._componentRef = a.createRef()),
                        (this._handleMouseDown = () => {
                            const { playerState: e } = this.props,
                                t = e && (0, i.Ci)(e);
                            t && t.is360 && this._setEventListener("mousemove", this._handleMouseMove), this._setEventListener("mouseup", this._handleMouseUp);
                        }),
                        (this._handleMouseMove = () => {
                            const { playerState: e } = this.props,
                                t = e && (0, i.Ci)(e);
                            t && t.is360 && (this.setState({ grabbing: !0 }), this._setEventListener("mouseup", this._handleGrabRelease)), this._unsetEventListener("mousemove", this._handleMouseMove), this._unsetEventListener("mouseup", this._handleMouseUp);
                        }),
                        (this._handleGrabRelease = () => {
                            this.setState({ grabbing: !1 }), this._unsetEventListener("mouseup", this._handleGrabRelease);
                        }),
                        (this._handleMouseUp = (e) => {
                            this._unsetEventListener("mousemove", this._handleMouseMove), this._unsetEventListener("mouseup", this._handleMouseUp), this._handleClick(e);
                        }),
                        (this._handleClick = (e) => {
                            const { hideControls: t, isTouchOnlyUI: r, onClick: a, playerApi: s, playerDisplayOptions: n, playerState: l } = this.props;
                            if (a) return s && l && l.isPlaying && s.pause(), a(e);
                            if (s && l) {
                                const e = (0, i.Ci)(l),
                                    a = e && e.contentType && e.contentType === o.wF.GIF;
                                if (this._firstClick && !a && ((this._firstClick = !1), l.isMuted)) return void s.unmute();
                                if (r && t) return;
                                const { pause: c, play: h, replay: u } = s,
                                    p = e && e.isLive,
                                    d = n && n.liveClickthrough,
                                    g = e && d && d.enabled && e.isLive && l.isPlaying && !e.is360;
                                if (r && t) return;
                                if (a) return void (l.isPlaying ? c() : h());
                                e && e.currentTimeMs === e.durationMs ? u() : l.isPlaying ? (g ? this._handleLiveClickthrough() : (p && !this.props.liveBroadcastRewindEnabled) || c()) : h();
                            }
                        }),
                        (this._setEventListener = (e, t) => {
                            const r = s.findDOMNode(this._componentRef.current);
                            r && r.addEventListener(e, t);
                        }),
                        (this._unsetEventListener = (e, t) => {
                            const r = s.findDOMNode(this._componentRef.current);
                            r && r.removeEventListener(e, t);
                        }),
                        (this._handleLiveClickthrough = () => {
                            const { playerApi: e, playerDisplayOptions: t, playerState: r } = this.props,
                                a = t && t.liveClickthrough,
                                s = r && (0, i.Ci)(r);
                            if (a && r && s && e) {
                                const t = a.url || r.eventUrl || s.broadcastShareUrl;
                                t && (window.open(t, a.target || "_blank"), e.liveClickthroughClicked());
                            }
                        });
                }
                render() {
                    const { playerState: e } = this.props,
                        { grabbing: t } = this.state,
                        r = e && (0, i.Ci)(e),
                        s = r && r.is360;
                    return a.createElement(n.Z, { onMouseDown: this._handleMouseDown, ref: this._componentRef, style: [l.default.absoluteFill, s ? (t ? h.base360grabbing : h.base360) : h.base] });
                }
            }
            const h = l.default.create((e) => ({ base: { cursor: "pointer" }, base360: { cursor: "grab" }, base360grabbing: { cursor: "grabbing" } })),
                u = c;
        },
        518406: (e, t, r) => {
            r.r(t), r.d(t, { default: () => v });
            var a = r(202784),
                s = r(325686),
                n = r(731708),
                l = r(908629),
                i = r(930751),
                o = r(868634),
                c = r(392237),
                h = r(364779),
                u = r(535814),
                p = r(424713),
                d = r(251478),
                g = r(523319),
                m = r(38660),
                y = r(916692),
                b = r(804455);
            function v(e) {
                const { hashtagHighlightProps: t, playerApi: r, playerDisplayOptions: c, playerState: v, poster: E, useKeyboardShortcuts: _ } = e;
                if (!r || !v) return null;
                const C = v && (0, p.Ci)(v);
                if (!C || C.contentType !== d.wF.GIF || !t) return null;
                if (!!v.error) return a.createElement(l.Z, { show: !0 }, a.createElement(m.Z, { imageSrc: E, playerApi: r, playerState: v }));
                const Z = !c?.hidePosterImage,
                    M = "PLAY_REQUESTED" !== v.controls?.playState,
                    k = v.tracksFinished;
                return a.createElement(u.Z, { enabled: !!_, playerApi: r, playerState: v }, a.createElement(h.Z, { playerState: v }, a.createElement(a.Fragment, null, a.createElement(y.Z, { playerApi: r, playerDisplayOptions: c, playerState: v }), Z && !k && a.createElement(b.Z, { imageSrc: E, playerApi: r, playerState: v, withPlayButton: M }), a.createElement(g.Z, { playerState: v }), a.createElement(s.Z, { style: f.root }, a.createElement(s.Z, { style: f.gifLabel }, a.createElement(o.ZP, null, a.createElement(n.ZP, { weight: "bold" }, "GIF"))), a.createElement(s.Z, { style: f.hashtagHighlight }, a.createElement(i.Z, t)), a.createElement(o.ZP, { style: [f.gifLabel, f.invisibleBadge] }, a.createElement(n.ZP, { weight: "bold" }, "GIF"))))));
            }
            const f = c.default.create((e) => ({ root: { position: "absolute", bottom: e.spaces.space12, flexDirection: "row", display: "flex", justifyContent: "space-between", width: "100%", alignItems: "flex-end" }, gifLabel: { paddingHorizontal: e.spaces.space12, maxWidth: "20%" }, hashtagHighlight: { display: "flex", maxWidth: "80%" }, invisibleBadge: { visibility: "hidden" } }));
        },
        355830: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                s = r(890601),
                n = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 1.5c1.808 0 3.51.46 4.995 1.26l-1.491 1.49C14.435 3.77 13.249 3.5 12 3.5c-4.694 0-8.5 3.81-8.5 8.5 0 1.25.269 2.44.753 3.5L2.762 17C1.957 15.51 1.5 13.81 1.5 12 1.5 6.2 6.201 1.5 12 1.5zm0 19c-1.249 0-2.435-.27-3.504-.75l-1.491 1.49c1.485.8 3.187 1.26 4.995 1.26 5.799 0 10.5-4.7 10.5-10.5 0-1.81-.457-3.51-1.262-5l-1.491 1.5c.484 1.06.753 2.25.753 3.5 0 4.69-3.806 8.5-8.5 8.5zm8.5-18.41L15.086 7.5 16.5 8.91l5.414-5.41L20.5 2.09zm-4 9.91l-7-4.45v8.9l7-4.45zm-13 9.91L8.414 17 7 15.59 2.086 20.5 3.5 21.91z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const o = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerHashtagHighlightUI.6253da0a.js.map
