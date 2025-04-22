"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerEventsUI"],
    {
        374749: (e, t, r) => {
            r.r(t), r.d(t, { default: () => U });
            var a = r(202784),
                n = r(325686),
                l = r(908629),
                s = r(364779),
                o = r(502089),
                p = r(864386),
                i = r(734701),
                c = r(424713),
                m = r(251478),
                u = r(867703),
                y = r(523319),
                d = r(896988),
                E = r(38660),
                f = r(971765),
                h = r(916692),
                I = r(804455),
                b = r(674132),
                Z = r.n(b),
                v = r(737691),
                A = r(731708),
                g = r(154003),
                S = r(392237),
                C = r(366635),
                D = r(336961),
                P = r(868634);
            const w = Object.freeze({ LIVE_BROADCAST: "liveBroadcast", REPLAY_BROADCAST: "replayBroadcast", AUDIOSPACE: "audiospace", VOD: "vod", GIF: "gif", SLATE: "slate" }),
                _ = Z().j190bf1a,
                x = Z().f6dc9146,
                B = ({ playbackDurationMs: e, type: t }) => {
                    switch (t) {
                        case w.LIVE_BROADCAST:
                            return a.createElement(P.ZP, { type: "live" }, _);
                        case w.REPLAY_BROADCAST:
                            return a.createElement(P.ZP, { bold: !0 }, x);
                        case w.VOD:
                            return "number" == typeof e && a.createElement(P.ZP, null, (0, c.Fv)(e) || "");
                        case w.GIF:
                            return a.createElement(P.ZP, { bold: !0 }, "GIF");
                        default:
                            return null;
                    }
                },
                O = Z().f17dfdb6,
                R = Z().e9bd453e,
                N = Z().ffeb2fc6;
            class T extends a.Component {
                render() {
                    const { hideNextItemInfo: e } = this.props;
                    return a.createElement(n.Z, { style: L.root }, a.createElement(n.Z, { style: L.wrapper }, this.props.renderImage(), e ? null : this._renderNextItemInformation(), this._renderPlayButton(), this._renderReplayButton()));
                }
                _renderNextItemInformation() {
                    const { nextItemInfo: e } = this.props;
                    if (!e) return null;
                    const { isBlueVerified: t, name: r, playbackDurationMs: l, screenName: s, type: o, verified: p, verifiedType: i } = e;
                    return a.createElement(n.Z, { style: L.nextItemInformationWrapper }, a.createElement(n.Z, { style: L.upNextWrapper }, a.createElement(A.ZP, { align: "left", color: "white" }, N)), a.createElement(C.Z, { color: "white", isBlueVerified: t, isVerified: p, name: r, screenName: s, style: L.usernameWrapper, verifiedType: i }), a.createElement(n.Z, null, a.createElement(n.Z, { style: L.badgeContainer }, a.createElement(B, { playbackDurationMs: l, type: o }))));
                }
                _renderPlayButton() {
                    const { autoAdvanceDurationMs: e, onComplete: t } = this.props;
                    return a.createElement(n.Z, { style: L.playWrapper }, a.createElement(D.Z, { "aria-label": O, duration: e, onComplete: t, onPress: t, type: "upNext" }));
                }
                _renderReplayButton() {
                    const { onReplay: e } = this.props;
                    return a.createElement(n.Z, { style: L.replayWrapper }, a.createElement(g.ZP, { "aria-label": R, icon: a.createElement(v.default, null), onPress: e, size: "medium", type: "onMediaText" }));
                }
            }
            T.defaultProps = { autoAdvanceDurationMs: 5e3 };
            const L = S.default.create((e) => ({ root: { ...S.default.absoluteFillObject, alignItems: "center", justifyContent: "center" }, wrapper: { height: "100%", position: "relative", width: "100%" }, badgeContainer: { position: "absolute" }, playWrapper: { ...S.default.absoluteFillObject, alignItems: "center", justifyContent: "center" }, replayWrapper: { bottom: e.spaces.space2, start: e.spaces.space4, position: "absolute" }, nextItemInformationWrapper: { start: 0, padding: e.spaces.space12, position: "absolute", top: 0 }, usernameWrapper: { paddingBottom: e.spaces.space4 }, upNextWrapper: { paddingBottom: e.spaces.space16 } }));
            var F = r(272879);
            class k extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = (e) => {
                            const { guestsState: t, isDocked: r, nextItemInfo: n, onUpNextComplete: o, onUpNextReplay: p, playerApi: i, playerDisplayOptions: m, playerState: u, poster: f, renderUpNextImage: b, shouldRenderUpNext: Z } = this.props;
                            if (!i || !u) return null;
                            const v = (0, c.Ci)(u),
                                A = "PLAY_REQUESTED" !== u?.controls?.playState,
                                { Observer: g, observed: S } = e,
                                C = (0, F.JN)(u, S, F.i2),
                                D = !!u.error,
                                P = !m?.hidePosterImage;
                            return a.createElement(s.Z, { playerState: u }, a.createElement(g, { click: !0, interactionKey: F.IG.Root, mousemove: !0, mouseover: !0 }, D ? null : a.createElement(a.Fragment, null, a.createElement(h.Z, { hideControls: C, isTouchOnlyUI: F.i2, playerApi: i, playerDisplayOptions: m, playerState: u }), P && a.createElement(I.Z, { imageSrc: f, playerApi: i, playerState: u, withPlayButton: A }), a.createElement(y.Z, { playerState: u }), Z ? a.createElement(T, { hideNextItemInfo: r, nextItemInfo: n, onComplete: o, onReplay: p, renderImage: b }) : r && v ? a.createElement(d.Z, { isLive: !!v.isLive, mediaType: (0, F.V4)(v.contentType, !!v.isLive), playerApi: i, playerState: u }) : this._renderDefault(u, t, i, C, g, v)), a.createElement(l.Z, { show: D }, D && a.createElement(E.Z, { imageSrc: f, playerApi: i, playerState: u }))));
                        }),
                        (this._renderDefault = (e, t, r, s, p, c) => {
                            const { containerRef: y, playerDisplayOptions: d } = this.props,
                                E = c?.contentType === m.wF.GIF,
                                h = s && e.isPreview,
                                I = !(!s || !c?.isLive),
                                b = !d?.hideLeftBadges && (E || h || I),
                                Z = !d?.hideRightBadges && s,
                                v = e?.controls?.isPosterShown;
                            return a.createElement(a.Fragment, null, a.createElement(f.Z, { guestsState: t, playerState: e }), !E && a.createElement(p, { focus: !0, interactionKey: F.IG.VideoCTA, mouseover: !0 }, a.createElement(l.Z, { show: !s }, a.createElement(i.Z, { playerApi: r, playerState: e }))), !E && !v && a.createElement(a.Fragment, null, a.createElement(p, { focus: !0, interactionKey: F.IG.A11YHook }, a.createElement(n.Z, { focusable: !0 })), a.createElement(p, { focus: !0, interactionKey: F.IG.ControlBar, mouseover: !0, touch: !0 }, a.createElement(o.Z, { containerRef: y, hideControls: s, playerApi: r, playerState: e, publisherDisplayName: c?.publisherDisplayName, publisherProfileImageUrl: c?.publisherProfileImageUrl, showScrubber: "ad" !== c?.displayType && !c?.isLive }))), a.createElement(l.Z, { show: b }, a.createElement(u.Z, { playerApi: r, playerDisplayOptions: d, playerState: e, position: "left" })), a.createElement(l.Z, { show: Z }, a.createElement(u.Z, { playerApi: r, playerDisplayOptions: d, playerState: e, position: "right" })));
                        });
                }
                render() {
                    const { playerApi: e, playerState: t } = this.props;
                    return e && t ? a.createElement(p.Z, null, a.createElement(p.Z.Context.Consumer, null, this._render)) : null;
                }
            }
            const U = k;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerEventsUI.7963613a.js.map
