"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Compose", "shared~bundle.AccountVerification~bundle.SettingsProfile~loader.MediaPickerWithPreview~bundle.RichTextCompose"],
    {
        625661: (e, t, a) => {
            a.d(t, { ZP: () => h });
            var i = a(202784),
                r = a(614983),
                n = a.n(r),
                o = a(325686),
                s = a(370006),
                d = a(786998),
                l = a(929028),
                c = a(386802);
            function u(e, t, a) {
                return e || (!t && a ? "fixed" : void 0);
            }
            class h extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            n()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: r, hideBackButton: n, isFullWidth: o, isLarge: l, leftControl: c, middleControl: h, position: p, rightControl: b, secondaryBar: m, style: S, subtitle: f, title: g, titleDomId: y, titleIconCell: _, titleIconCellSize: w, withBackground: C, withWideContainer: E } = this.props,
                        { isModal: D } = this.context,
                        v = n ? c : i.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        A = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!C, D, !!m);
                    return i.createElement(i.Fragment, null, i.createElement(d.Z, { centerTitle: t, centeredLogo: a, isFullWidth: o, isLarge: l, leftControl: v, middleControl: h, position: u(p, D, r), rightControl: b, style: S, subtitle: f, title: g, titleDomId: y, titleIconCell: _, titleIconCellSize: w, withBackground: A, withWideContainer: E }), m || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        a = l.Z.getBackgroundStyles();
                    return t ? i.createElement(o.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, a) => {
            a.d(t, { Z: () => m, w: () => p });
            var i = a(202784),
                r = a(325686),
                n = a(108362),
                o = a(386802),
                s = a(392237),
                d = a(652904),
                l = a(555079),
                c = a(625661),
                u = a(449067),
                h = a(715601);
            class p extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: a, backLocation: n, centerTitle: o, hideBackButton: s, history: d, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: m, rightControl: S, secondaryBar: f, subtitle: g, title: y } = this.props,
                                { isModal: _ } = this.context;
                            return i.createElement(r.Z, { style: _ ? [b.childViewAppBarRoot, b.appBarZindex] : b.appBarZindex }, i.createElement(c.ZP, { backButtonType: a || (_ ? "close" : "back"), backLocation: n, centerTitle: o, fixed: !_, hideBackButton: s, history: d, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: m, ref: e, rightControl: S, secondaryBar: f, style: [_ && b.appBarModal, t], subtitle: g, title: y, titleDomId: l.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: a } = this.context;
                            t && (a ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: a, containerStyle: o, documentTitle: s, isFullWidth: l, isLarge: c, renderHeader: p, title: m, withoutBottomBarMobile: S } = this.props,
                        { isModal: f } = this.context,
                        g = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return i.createElement(d.Z, null, i.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: m }), i.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [b.root, f && b.rootModal] }, !f && g, i.createElement(n.Z, { isFullWidth: l, isLarge: c, style: [b.container, f && b.containerModal, o] }, f ? i.createElement(h.Z, { style: b.viewport }, g, a) : a), t ? i.createElement(r.Z, { style: [b.bottomBarModal, !f && !S && b.bottomBarMobile] }, i.createElement(n.Z, { isFullWidth: l, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = o.Z);
            const b = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = p;
        },
        373554: (e, t, a) => {
            a.d(t, { Z: () => f, h: () => m });
            var i = a(807896),
                r = a(202784),
                n = a(449161),
                o = a(392237),
                s = a(674132),
                d = a.n(s),
                l = a(473026),
                c = a(276259),
                u = a(540387);
            const h = "fileInput",
                p = d().b9960f32,
                b = r.createElement(l.default, null),
                m = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: a }) => (t ? c.v5 : []).concat(e ? [c.Re] : []).concat(a ? u.jn : []);
            const S = o.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                f = function ({ "aria-label": e = p, acceptGifs: t = !0, acceptImages: a = !0, acceptVideo: o = !0, customMimeTypes: s = [], icon: d = b, size: l = "medium", style: c, withIcon: u = !0, ...f }) {
                    const g = m({ acceptGifs: t, acceptImages: a, acceptVideo: o }).concat(s).join(",");
                    return r.createElement(n.Z, (0, i.Z)({}, f, { accept: g, "aria-label": e, icon: u ? d : void 0, size: l, style: [S.root, c], testID: h }));
                };
        },
        751170: (e, t, a) => {
            a.d(t, { A: () => b, Z: () => g });
            var i = a(202784),
                r = a(325686),
                n = a(167630),
                o = a(992942),
                s = a(392237),
                d = a(674132),
                l = a.n(d),
                c = a(205074),
                u = a(364837),
                h = a(908478);
            const p = l().gff1f69e,
                b = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
            class m extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imagePreviewUrl: null }),
                        (this._getImageSrc = () => {
                            const { enableGif: e, mediaItem: t } = this.props,
                                { imagePreviewUrl: a } = this.state;
                            if (t && t.mediaFile) return t.mediaFile.isGif && !e ? a : t.mediaFile.url;
                        });
                }
                componentDidUpdate() {
                    const {
                            enableGif: e,
                            mediaItem: { mediaFile: t },
                        } = this.props,
                        { imagePreviewUrl: a } = this.state;
                    e ||
                        a ||
                        (t instanceof c.ZP &&
                            t.isGif &&
                            (0, u.R)(t).then((e) => {
                                this.setState({ imagePreviewUrl: e });
                            }));
                }
                shouldComponentUpdate(e, t) {
                    return !(0, h.Z)(e, this.props) || !(0, h.Z)(t, this.state);
                }
                render() {
                    const { borderRadius: e, enableGif: t, mediaItem: a, onClick: s, resizeMode: d } = this.props,
                        { imagePreviewUrl: l } = this.state || {},
                        c = a.mediaFile && a.mediaFile.isGif && !t && !l,
                        u = a.needsProcessing || c,
                        h = [f.root, S[e], u && f.loadingBorder],
                        b = this._getImageSrc();
                    return i.createElement(r.Z, { onClick: s, style: h }, u || !b ? i.createElement(n.Z, { "aria-label": p, style: f.activityIndicator }) : i.createElement(o.Z, { resizeMode: d, source: b, style: f.image }));
                }
            }
            m.defaultProps = { borderRadius: b.NONE, enableGif: !0, resizeMode: "cover" };
            const S = s.default.create((e) => ({ [b.INFINITE]: { borderRadius: e.borderRadii.infinite }, [b.MEDIUM]: { borderRadius: e.borderRadii.small }, [b.NONE]: { borderRadius: e.borderRadii.none } })),
                f = s.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                g = m;
        },
        304059: (e, t, a) => {
            a.d(t, { Z: () => G });
            var i = a(202784),
                r = a(325686),
                n = a(537392),
                o = a(336961),
                s = a(659651),
                d = a(154003),
                l = a(392237),
                c = a(992942),
                u = a(674132),
                h = a.n(u),
                p = a(678773),
                b = a(597237),
                m = a(254944),
                S = a(837020),
                f = a(276259),
                g = a(443781),
                y = a(10656),
                _ = a(716233),
                w = a(946208),
                C = a(540387),
                E = a(950822),
                D = a(303186),
                v = a(954300);
            class A extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: a, style: r, variants: n, ...o } = this.props,
                        s = (0, D.IM)((0, v.rD)(n), t);
                    return (0, E.Z)("video", { ...o, children: [s.map((e) => i.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: r });
                }
            }
            A.defaultProps = { dataSaverMode: !1, variants: [] };
            var B = a(959587),
                T = a(751170),
                R = a(523561),
                P = a(195560);
            const Z = (0, R.Z)({
                    loader: () =>
                        Promise.all([
                            a.e("icons.6"),
                            a.e("icons.25"),
                            a.e("icons.22"),
                            a.e("icons.0"),
                            a.e("modules.common-e907d115"),
                            a.e("modules.common-e019dbda"),
                            a.e("modules.audio-6107ac1a"),
                            a.e("modules.audio-b953418a"),
                            a.e("modules.audio-7c51e6a7"),
                            a.e("modules.audio-04db59e9"),
                            a.e("modules.audio-76583d6c"),
                            a.e("modules.audio-b7a8a5fb"),
                            a.e("modules.audio-51f6e793"),
                            a.e("modules.audio-e019dbda"),
                            a.e("modules.audio-262c94d4"),
                            a.e("modules.audio-c6fe4ea4"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2f4a3d25"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aeee0c9e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),
                            a.e("loader.MediaPreviewVideoPlayer"),
                        ])
                            .then(a.bind(a, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => i.createElement(P.Z, { hasError: e, onRetry: t }),
                }),
                I = h().gd80afba,
                k = h().j322caee,
                L = h().abd845fe,
                x = h().df1b0708,
                M = h().cd959e5c,
                F = h().e68b09b4,
                U = h().add55c98,
                V = h().f350cf46;
            class N extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isVideoPaused: !0, playGif: !1 }),
                        (this._handleGifClick = () => {
                            this.setState({ playGif: !this.state.playGif });
                        }),
                        (this._handleMediaPreviewLayout = (e) => {
                            const { mediaItem: t, resizeIfNeeded: a } = this.props,
                                i = t.mediaFile || t.externalMediaDetails;
                            if (!i) return;
                            const {
                                    nativeEvent: {
                                        layout: { height: r, width: n },
                                    },
                                } = e,
                                { height: o, width: s } = i,
                                d = s / o;
                            Math.abs(d - n / r) > 0.05 && ("width" === a ? this.setState({ mediaContainerSizeStyle: { width: r * d } }) : "height" === a && this.setState({ mediaContainerSizeStyle: { height: n / d } }));
                        }),
                        (this._handleVideoOnPlay = (e) => {
                            this.setState({ isVideoPaused: !1 });
                        }),
                        (this._handleVideoOnPause = (e) => {
                            this.setState({ isVideoPaused: !0 });
                        }),
                        (this._setVideoRef = (e) => {
                            this._video = e;
                        }),
                        (this.playVideo = () => {
                            if (this._video) {
                                const e = this._video.play();
                                void 0 !== e &&
                                    e
                                        .then((e) => {
                                            this._handleVideoOnPlay();
                                        })
                                        .catch();
                            }
                        }),
                        (this.pauseVideo = () => {
                            this._video && (this._video.pause(), this._handleVideoOnPause());
                        });
                }
                render() {
                    const { "aria-label": e, enableGif: t, mediaItem: a, onEdit: l, onEditSensitiveWarning: c, onRemove: u, role: h, style: g, withAltTextLabel: _, withCloseButton: w, withDragAndDropIndicator: C, withEditButton: E, withEditIcon: D, withEditSensitiveWarningButton: v } = this.props,
                        { mediaContainerSizeStyle: A, playGif: T } = this.state,
                        R = a.externalMediaDetails && a.externalMediaDetails.mediaType === f.Re,
                        P = R || (t && a.mediaFile && a.mediaFile.isGif),
                        Z = !!a.mediaFile?.isVideo;
                    return i.createElement(n.ZP, null, ({ windowWidth: t }) => {
                        const a = void 0 !== D ? D : !y.Z.isTwoColumnLayout(t);
                        return i.createElement(r.Z, { "aria-label": e || U, onLayout: this._handleMediaPreviewLayout, role: h, style: [g, O.cursor, R && O.gifPlayButton, A] }, this._renderPreview(), R && !T && i.createElement(o.Z, { "aria-label": x, onPress: this._handleGifClick, size: "small" }), P ? i.createElement(B.ZP, { type: B.AM }) : null, _ && !Z ? i.createElement(s.Z, { align: "left", altLabel: e }) : null, i.createElement(r.Z, { style: O.editMedia }, C ? i.createElement(d.ZP, { "aria-label": V, hoverLabel: { label: V }, icon: i.createElement(p.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, E && v ? i.createElement(d.ZP, { "aria-label": k, icon: i.createElement(b.default, { style: O.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, E ? i.createElement(d.ZP, { "aria-label": I, icon: a ? i.createElement(m.default, null) : void 0, onPress: l, size: a ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, a ? void 0 : L) : null), w ? i.createElement(d.ZP, { "aria-label": M, hoverLabel: { label: F }, icon: i.createElement(S.default, null), onPress: u, size: "small", style: O.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            a = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, a);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : i.createElement(r.Z, { style: l.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: a } = this.state,
                        n = { uri: a ? e : t };
                    return i.createElement(r.Z, { onClick: this._handleGifClick, style: l.default.absoluteFill }, i.createElement(c.Z, { resizeMode: "cover", source: n, style: O.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: a, mediaItem: r, onClick: n } = this.props;
                    return i.createElement(T.Z, { borderRadius: e, enableGif: t, mediaItem: r, onClick: n, resizeMode: a });
                }
                _renderVideoPreview(e, t, a, r) {
                    const { mediaItem: n } = this.props,
                        o = n.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && r instanceof C.ZP) {
                        let o = [];
                        (0, _.TO)(r.fileHandle) && (o = [{ src: t, type: e }]);
                        const s = n.mediaMetadata?.subtitles,
                            d = n?.trimData;
                        return i.createElement(Z, { mediaFile: r, mediaId: String(a), mediaItem: n, subtitles: s, trimData: d, variants: o });
                    }
                    {
                        const a = (0, _.TO)(r.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return i.createElement(A, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: r instanceof C.ZP ? r.thumbnail : "", style: O.video, variants: a }, o?.upload?.mediaFile instanceof w.ZP ? i.createElement("track", { default: !0, kind: "subtitles", label: o.displayName, src: o.upload.mediaFile.vtt, srcLang: o.lang }) : null);
                    }
                }
            }
            (N.contextType = g.rC), (N.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const O = l.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                G = N;
        },
        959587: (e, t, a) => {
            a.d(t, { AM: () => d, ZP: () => h, pX: () => l });
            var i = a(202784),
                r = a(731708),
                n = a(659651),
                o = a(392237),
                s = a(548721);
            const d = "animated_gif",
                l = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: a } = e;
                    let o;
                    if (a === d) o = i.createElement(r.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === a) o = i.createElement(s.default, { "aria-label": "Vine", style: u.icon });
                    else if (a === l && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            a = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        o = i.createElement(r.ZP, { color: "white" }, `${e}:${a}`);
                    }
                    return o ? i.createElement(n.Z, { align: "left" }, o) : null;
                },
                u = o.default.create((e) => ({ icon: { color: e.colors.white } })),
                h = i.memo(c);
        },
        231214: (e, t, a) => {
            a.d(t, { Z: () => i });
            a(202784);
            const i = (0, a(523561).Z)({
                loader: () => Promise.all([a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"), a.e("ondemand.IntentPrompt")]).then(a.bind(a, 958679)),
            });
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => c });
            var i = a(202784),
                r = a(500002),
                n = a(668214),
                o = a(997174),
                s = a(118823);
            const d = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class l extends i.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: i },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: n, search: o },
                            locationKey: s,
                        } = e;
                    let d = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (d = !0));
                    const l = r || s;
                    ((l && r !== s) || (!l && a !== n) || i !== o || d) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: i } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), i(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const c = (0, r.ZP)(d(l));
        },
        62857: (e, t, a) => {
            a.d(t, { Z: () => B });
            var i = a(807896),
                r = a(202784),
                n = a(476984),
                o = a.n(n),
                s = a(674132),
                d = a.n(s),
                l = a(615656),
                c = a(290402),
                u = a(325686),
                h = a(240089),
                p = a(663550),
                b = a(409438);
            const m = ({ displayMode: e = b.Z.UserDetailed, renderUserCell: t, userIds: a }) =>
                r.createElement(
                    u.Z,
                    { role: "list" },
                    a.map((a, i) => (t ? t(a) : r.createElement(h.ZP, { decoration: h.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: a, promotedItemType: p.bj.USER, userId: a, withFollowsYou: !0 }))),
                );
            var S = a(312771),
                f = a(71620),
                g = a(973572),
                y = a(668214),
                _ = a(919022);
            const w = (e, t) => t.userIds,
                C = (e, t) => {
                    const { filterPredicate: a = (e) => !!e, userIds: i } = t;
                    return i.filter((t) => {
                        const i = _.ZP.select(e, t);
                        return !!i && a(i);
                    });
                },
                E = (e, t) => {
                    const { userIds: a } = t;
                    return a.reduce((t, a) => {
                        const i = _.ZP.selectFetchStatus(e, a);
                        return (t[a] = i === S.ZP.NONE ? S.ZP.LOADING : i), t;
                    }, {});
                },
                D = (0, y.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, g.Z)(C, (e) => e),
                        fetchStatus: (0, g.Z)(C, E, w, (e, t, a) => {
                            let i = S.ZP.LOADED;
                            for (let r = 0; r < a.length; r++) {
                                const n = a[r];
                                if (-1 === e.indexOf(n)) {
                                    const e = t[n] || S.ZP.LOADING;
                                    i = i === S.ZP.LOADED ? e : i;
                                }
                                if (i === S.ZP.LOADED) break;
                            }
                            return i;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: _.ZP.fetchManyIfNeeded })),
                v = d().f5b426c2;
            class A extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: a, fetchUsersIfNeeded: n, filterPredicate: o, userIds: s, ...d } = this.props;
                            return r.createElement(m, (0, i.Z)({}, d, { userIds: e }));
                        }),
                        (this._handleFetch = () => {
                            this._fetchUsersIfNeeded();
                        });
                }
                componentDidMount() {
                    this._fetchUsersIfNeeded();
                }
                componentDidUpdate(e) {
                    o()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded();
                }
                render() {
                    return r.createElement(c.Z, { "aria-label": v, fetchStatus: this.state.allUsersUnavailable ? S.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: a, userIds: i } = this.props;
                    a(i).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [l.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [l.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const B = D(A);
        },
        492057: (e, t, a) => {
            a.d(t, { BL: () => r, tc: () => n });
            var i = a(491963);
            const r = (e, t) => {
                    if (t.communityId) return i.ZP.select(e, t.communityId);
                },
                n = (e, t, a) => {
                    const r = a || t.communityId;
                    if (r) return i.ZP.selectFetchStatus(e, r);
                };
        },
        964917: (e, t, a) => {
            a.d(t, { FP: () => S, Hf: () => l, Q$: () => f, UD: () => m, V2: () => u, yD: () => b });
            var i = a(439058),
                r = a(499627),
                n = a(917799),
                o = a(312771);
            const s = "scheduledTweets",
                d = { fetchStatus: o.ZP.NONE, scheduledTweets: [] },
                l = "FETCH_SCHEDULED_TWEETS",
                c = Object.freeze({ REQUEST: "rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_REQUEST", SUCCESS: "rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_SUCCESS", FAILURE: "rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_FAILURE" }),
                u = "DELETE_SCHEDULED_TWEET",
                h = Object.freeze({ REQUEST: "rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_REQUEST", SUCCESS: "rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_SUCCESS", FAILURE: "rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_FAILURE" });
            function p(e = d, t) {
                if (!t) return e;
                switch (t.type) {
                    case c.SUCCESS:
                        if (t.payload) return { ...e, fetchStatus: o.ZP.LOADED, scheduledTweets: t.payload };
                        break;
                    case c.FAILURE:
                        return { ...e, fetchStatus: o.ZP.FAILED };
                    case c.REQUEST:
                        return { ...e, fetchStatus: o.ZP.LOADING };
                    case h.SUCCESS: {
                        const { meta: r } = t;
                        return r && r.deleteScheduledTweetId ? { ...e, scheduledTweets: ((a = r.deleteScheduledTweetId), (i = e.scheduledTweets), i.filter((e) => e.rest_id !== a)) } : e;
                    }
                    default:
                        return e;
                }
                var a, i;
                return e;
            }
            r.Z.register({ [s]: p });
            const b = (e) => e[s].scheduledTweets,
                m = (e) => e[s].fetchStatus,
                S =
                    () =>
                    (e, t, { api: a }) =>
                        (0, n._O)(e, { request: a.withEndpoint(i.Z).fetchScheduledTweets, params: {} })({ actionTypes: c, context: l }).then(() => {}),
                f =
                    (e) =>
                    (t, a, { api: r }) =>
                        (0, n._O)(t, { request: r.withEndpoint(i.Z).deleteScheduledTweet, params: { scheduled_tweet_id: e } })({ actionTypes: h, context: u, meta: { deleteScheduledTweetId: e } });
        },
        108304: (e, t, a) => {
            a.r(t), a.d(t, { PlacePickerScreen: () => q, default: () => j });
            var i = a(202784),
                r = a(325686),
                n = a(470397),
                o = a(731708),
                s = a(143670),
                d = a(154003),
                l = a(371344),
                c = a(946847),
                u = a(392237),
                h = a(674132),
                p = a.n(h),
                b = a(171709),
                m = a(956272),
                S = a(264171),
                f = a(290402),
                g = a(980407),
                y = a(341276),
                _ = a(27498),
                w = a(312771),
                C = a(71620),
                E = a(668214),
                D = a(806528),
                v = a(843138),
                A = a(390387),
                B = a(38562),
                T = a(632960);
            const R = (0, E.Z)()
                .propsFromState(() => ({ autotaggedLocation: v.Xm, initialResults: v.jK, initialFetchStatus: v.ke, lastSearchResults: v.uD, lastSearchFetchStatus: v.tn, position: D.Bz, taggedLocation: T._d, userCountry: A.GG }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, C.zr)("PLACE_PICKER"), loadGeoLocation: D.iG, fetchInitialPlacesIfNeeded: v.BJ, searchPlaces: v.k6, updateLastSelectedPlace: v.T5, updateSettings: B.VP, updateSingleComposer: T.zi }))
                .withAnalytics({ page: "compose", section: "place_picker" });
            class P {
                constructor(e, t, a) {
                    (this.formatter = e), (this.fallbackFormatter = t), (this.fallbackRatio = a);
                }
                format(e) {
                    const t = Math.round(10 * e) / 10;
                    return t > 0 ? this.formatter({ distance: t }) : this.fallbackFormatter({ distance: Math.round(e * this.fallbackRatio) });
                }
            }
            const Z = new P(p().b01ed2db, p().i83e29e1, 5280),
                I = new P(p().d4b7cff7, p().b211849f, 1e3),
                k = ["lr", "mm", "uk", "us"],
                L = p().b772cd66,
                x = p().e7c766ee,
                M = p().ab68727a,
                F = p().ae4057a2,
                U = p().bf2923a6,
                V = p().d963d1b6,
                N = p().a893d602,
                O = p().e68b09b4,
                G = p().be6cc44e,
                H = p().d8ef3232,
                W = p().cce30dcc,
                z = p().fa9adac1;
            class q extends i.Component {
                constructor(e) {
                    super(e),
                        (this.state = { activeResultSet: _.Z0.initial, geoLocationError: void 0, query: "", selectedLocation: void 0, showSearchForButton: !1 }),
                        (this._appBarRef = i.createRef()),
                        (this._fetchInitialPlaces = () => {
                            const { createLocalApiErrorHandler: e, fetchInitialPlacesIfNeeded: t, taggedLocation: a } = this.props;
                            t()
                                .then(() => {
                                    const { autotaggedLocation: e } = this.props;
                                    a || this.setState({ selectedLocation: e });
                                })
                                .catch(e());
                        }),
                        (this._getActiveResults = () => {
                            const { initialResults: e, lastSearchResults: t } = this.props,
                                { activeResultSet: a } = this.state;
                            return a === _.Z0.initial ? e : t;
                        }),
                        (this._selectResults = () => {
                            const { query: e, selectedLocation: t } = this.state;
                            let a = this._getActiveResults()?.places || [];
                            return t && (a = [t, ...a.filter((e) => e.place.id !== t.place.id)]), a.filter((t) => t.place.full_name.toLowerCase().includes(e.toLowerCase()));
                        }),
                        (this._goBack = () => {
                            this._appBarRef.current?.goBack();
                        }),
                        (this._setTaggedLocation = (e) => {
                            const { updateLastSelectedPlace: t, updateSettings: a, updateSingleComposer: i } = this.props;
                            i({ updates: { taggedLocation: e } }), t(e), a({ shouldAutoTagLocation: !!e });
                        }),
                        (this._handleBack = () => this._goBack()),
                        (this._handleDone = () => {
                            const { selectedLocation: e } = this.state;
                            e && this._setTaggedLocation(e), this._goBack();
                        }),
                        (this._handleRemove = () => {
                            this._setTaggedLocation(null), this._goBack();
                        }),
                        (this._handleRetry = () => {
                            const { searchPlaces: e } = this.props,
                                { activeResultSet: t, query: a } = this.state;
                            t === _.Z0.initial ? this._fetchInitialPlaces() : e(a);
                        }),
                        (this._handleLocationDisabledPromptDismiss = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        }),
                        (this._handleChange = (e) => {
                            const { value: t } = e.currentTarget,
                                a = t.length ? this.state.activeResultSet : _.Z0.initial;
                            this.setState({ activeResultSet: a, query: t, showSearchForButton: !!t.length });
                        }),
                        (this._handleClear = () => {
                            this.setState({ activeResultSet: _.Z0.initial, query: "" });
                        }),
                        (this._handleSubmit = () => {
                            const { query: e } = this.state,
                                { searchPlaces: t } = this.props;
                            e.length && (this.setState({ activeResultSet: _.Z0.lastSearch, showSearchForButton: !1 }), t(e));
                        }),
                        (this._handlePlaceClick = (e) => () => {
                            this._setTaggedLocation(e), this._goBack();
                        }),
                        (this._renderPlaceSubtext = (e) => {
                            const { position: t, userCountry: a } = this.props,
                                {
                                    place: {
                                        attributes: { street_address: r },
                                        centroid: s,
                                    },
                                } = e;
                            if (r && s && 2 === s.length && t) {
                                const e = ((e, t) => {
                                    const a = e.lat * (Math.PI / 180),
                                        i = t.lat * (Math.PI / 180),
                                        r = i - a,
                                        n = (t.long - e.long) * (Math.PI / 180);
                                    return 7917.6 * Math.asin(Math.sqrt(Math.sin(r / 2) * Math.sin(r / 2) + Math.cos(a) * Math.cos(i) * Math.sin(n / 2) * Math.sin(n / 2)));
                                })({ lat: t.coords.latitude, long: t.coords.longitude }, { lat: s[1], long: s[0] });
                                return i.createElement(
                                    n.Z,
                                    null,
                                    i.createElement(o.ZP, null, r),
                                    i.createElement(
                                        o.ZP,
                                        null,
                                        ((e, t = "us") => {
                                            if (k.find((e) => e === t.toLowerCase())) return Z.format(e);
                                            {
                                                const t = 1.609344 * e;
                                                return I.format(t);
                                            }
                                        })(e, a),
                                    ),
                                );
                            }
                        }),
                        (this._renderPlace = (e) => {
                            const { selectedLocation: t } = this.state;
                            return i.createElement(s.Z, { actionSubText: this._renderPlaceSubtext(e), actionText: e.place.full_name, isSelected: e.place.id === t?.place.id, key: e.place.id, onClick: this._handlePlaceClick(e), selectable: !0 });
                        }),
                        (this._renderPlaces = (e) => (e.length ? e.map((e) => this._renderPlace(e)) : i.createElement(o.ZP, { align: "center", style: Q.noPlacesText }, V))),
                        (this._renderAttributionIfNeeded = () => {
                            const e = this._getActiveResults();
                            return e?.attributions.has(_.xt.foursquare) ? i.createElement(b.default, { style: Q.foursquareIcon }) : null;
                        }),
                        (this._renderResults = () => {
                            const { query: e, showSearchForButton: t } = this.state,
                                a = this._selectResults();
                            return i.createElement(r.Z, null, this._renderPlaces(a), t ? i.createElement(s.Z, { actionText: z({ query: e }), onClick: this._handleSubmit, textColor: "primary" }) : null, this._renderAttributionIfNeeded());
                        }),
                        (this._renderRightControl = () => i.createElement(r.Z, { style: Q.actionButtonContainer }, i.createElement(d.ZP, { onPress: this._handleRemove, size: "small", style: Q.actionButton, type: "primaryText" }, O), i.createElement(d.ZP, { onPress: this._handleDone, size: "small", style: Q.actionButton, type: "primaryFilled" }, L))),
                        (this._renderGeoPicker = () => {
                            const { history: e, initialFetchStatus: t, lastSearchFetchStatus: a } = this.props,
                                { activeResultSet: r } = this.state,
                                n = r === _.Z0.initial ? t : a;
                            return i.createElement(g.Z, { appBarRef: this._appBarRef, history: e, onBackClick: this._handleBack, rightControl: this._renderRightControl(), title: W }, i.createElement(l.Z, { Icon: m.default, onChange: this._handleChange, onClear: this._handleClear, onSubmitEditing: this._handleSubmit, placeholder: G, style: Q.search, withClearButton: !0 }), i.createElement(f.Z, { fetchStatus: n === w.ZP.NONE ? w.ZP.LOADING : n, onRequestRetry: this._handleRetry, render: this._renderResults, retryMessage: H }));
                        }),
                        (this._renderLocationDisabledPrompt = () => {
                            const { geoLocationError: e } = this.state;
                            let t = F,
                                a = U;
                            return e && e.code === y.M.PERMISSION_DENIED && ((t = x), (a = M)), i.createElement(c.Z, { actionLabel: N, graphic: S.default, headline: t, onAction: this._handleLocationDisabledPromptDismiss, onClose: this._handleLocationDisabledPromptDismiss, subtext: a });
                        });
                    const { autotaggedLocation: t, initialResults: a, taggedLocation: u } = e;
                    u ? (this.state.selectedLocation = u) : a && (this.state.selectedLocation = t);
                }
                componentDidMount() {
                    const { loadGeoLocation: e } = this.props;
                    return e().then(this._fetchInitialPlaces, (e) => this.setState({ geoLocationError: e }));
                }
                render() {
                    const { geoLocationError: e } = this.state;
                    return e ? this._renderLocationDisabledPrompt() : this._renderGeoPicker();
                }
            }
            const Q = u.default.create((e) => ({ search: { marginHorizontal: e.spaces.space16, flexGrow: 0 }, actionButtonContainer: { flexDirection: "row" }, actionButton: { marginStart: e.spaces.space12 }, noPlacesText: { marginVertical: e.spaces.space16 }, foursquareIcon: { marginVertical: e.spaces.space16, fill: e.colors.gray700 } })),
                j = R(q);
        },
        122421: (e, t, a) => {
            a.r(t), a.d(t, { Recipients: () => k, default: () => L });
            var i = a(202784),
                r = a(325686),
                n = a(420412),
                o = a(844685),
                s = a(96083),
                d = a(731708),
                l = a(154003),
                c = a(674132),
                u = a.n(c),
                h = a(166852),
                p = a(980407),
                b = a(240089),
                m = a(62857),
                S = a(735e3),
                f = a(293115),
                g = a(615027),
                y = a(24949),
                _ = a(47743),
                w = a(668214),
                C = a(390387),
                E = a(632960);
            const D = (e, t) => t.location.state,
                v = (e, t) => {
                    const a = D(0, t);
                    return a && a.inReplyToStatus;
                },
                A = (e, t) => {
                    const a = D(0, t);
                    return (a && a.excludedRecipients) || (0, S.o)();
                },
                B = (0, w.Z)()
                    .propsFromState(() => ({ recipientIds: (0, y.P1)(v, C._h, (e, t) => (e && t ? (0, _.YT)({ inReplyToStatus: e, viewerUserId: t, excludeReplyUser: !0 }).map((e) => e.id_str) : (0, S.o)())), initialExcludedRecipients: A, inReplyToStatus: v }))
                    .propsFromActions(() => ({ updateExcludedRecipientsV2: E.OO })),
                T = u().c55eed72,
                R = u().b772cd66,
                P = u().caca3102,
                Z = u().c6a6dc2f,
                I = { page: "compose", section: "recipients" },
                k = ({ history: e, inReplyToStatus: t, initialExcludedRecipients: a, recipientIds: c, updateExcludedRecipientsV2: u }) => {
                    const [y, _] = i.useState(a);
                    if (!t) return i.createElement(g.Z, { to: "/compose/post" });
                    const { user: w } = t.retweeted_status || t,
                        C = (e) => {
                            _(e ? (0, S.o)() : c);
                        },
                        E = (e) => () => {
                            const t = -1 !== y.indexOf(e);
                            _(t ? y.filter((t) => t !== e) : (0, h.Z)([...y, e]));
                        },
                        D = () => {
                            u(y), e.goBack();
                        },
                        v = () => (c.length > 1 ? i.createElement(s.Z, { checked: 0 === y.length, onChange: C }) : null),
                        A = ({ isBlocking: e, screenName: t }) => (e ? i.createElement(d.ZP, { color: "magenta500", size: "subtext2" }, Z({ screenName: t })) : null),
                        B = (e) => {
                            if (!t) return null;
                            const { user: a } = t.retweeted_status || t,
                                r = -1 !== y.indexOf(e),
                                n = e === a.id_str,
                                o = i.createElement(s.Z, { checked: !r, disabled: n, onChange: E(e) });
                            return i.createElement(b.ZP, { bottomControl: A, cellClickable: !n, decoration: o, isFakeButtonRoleWithListItem: !n, key: e, onClick: E(e), promotedItemType: "users", userId: e, withLink: !1 });
                        };
                    return i.createElement(f.nO, { namespace: I }, i.createElement(p.Z, { backLocation: "/compose/post", history: e, onBackClick: D, rightControl: i.createElement(l.ZP, { onPress: D, size: "xSmall", type: "brandFilled" }, R), title: T }, B(w.id_str), c.length ? i.createElement(r.Z, null, i.createElement(n.Z, null), i.createElement(o.Z, { rightControl: v(), text: P }), i.createElement(m.Z, { renderUserCell: B, userIds: c })) : null));
                },
                L = B(k);
        },
        379069: (e, t, a) => {
            a.r(t), a.d(t, { Compose: () => Ne, default: () => Ge });
            a(136728);
            var i = a(202784),
                r = a(360917),
                n = a.n(r),
                o = a(928316),
                s = a(325686),
                d = a(154003),
                l = a(822399),
                c = a(537392),
                u = a(529356),
                h = a(386802),
                p = a(392237),
                b = a(674132),
                m = a.n(b),
                S = a(912021),
                f = a(744531),
                g = a(731708);
            function y(e) {
                const t = e - new Date().getTime(),
                    a = 1e3 * Math.round(t < 0 ? 0 : t / 1e3),
                    i = new Date(a).toLocaleString("default", { minute: "numeric", second: "numeric" }),
                    [r, n] = i.split(":");
                return { minutes: +r, seconds: +n, formatted: i };
            }
            const _ = ({ "aria-label": e, expiration: t, getAccessibilityLiveLabel: a, onTimeElapsed: r }) => {
                    const n = i.useRef(a),
                        o = i.useRef(r);
                    (n.current = a), (o.current = r);
                    const [d, l] = i.useState(() => y(+t)),
                        [c, u] = i.useState(() => a?.(d));
                    i.useEffect(() => {
                        const e = setInterval(() => {
                            const a = y(+t),
                                i = n.current?.(a);
                            u(i), l(a), "00:00" === a.formatted && (clearInterval(e), o.current?.());
                        }, 500);
                        return () => clearInterval(e);
                    }, [t]);
                    const h = "function" == typeof e ? e(d) : e;
                    return i.createElement(s.Z, { style: w.root }, i.createElement(g.ZP, { "aria-label": h && `${h}`, color: "gray900", testID: "displayedCountdown", weight: "medium" }, d.formatted, c && i.createElement(s.Z, { "aria-label": c, "aria-live": "polite" })));
                },
                w = p.default.create((e) => ({ root: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space2, paddingBottom: e.spaces.space4, paddingEnd: 6, paddingStart: 6, paddingTop: e.spaces.space4 } }));
            var C = a(980407),
                E = a(231214),
                D = a(472826),
                v = a(632552),
                A = a(10656),
                B = a(96206),
                T = a(293115),
                R = a(349745),
                P = a(704279),
                Z = a(346789),
                I = a(24949),
                k = a(370751),
                L = a(71620),
                x = a(646522),
                M = a(668214),
                F = a(492057),
                U = a(669002),
                V = a(175856),
                N = a(497294),
                O = a(709318),
                G = a(872788),
                H = a(964917),
                W = a(137204),
                z = a(632960),
                q = a(836255),
                Q = a(919022);
            const j = (e) => z.tS(e, ""),
                Y = (e) => z.WQ(e, ""),
                $ = (e) => z.Gz(e, ""),
                K = (e) => z.SJ(e, ""),
                J = (e) => (t, a) => {
                    const i = ((e, t) => t.location.state)(0, a);
                    return i ? e(i) : void 0;
                },
                X = (e, t) => t.activeUser || Q.ZP.selectViewerUser(e),
                ee = (e, t) => {
                    const {
                        location: { query: a },
                    } = t;
                    return a && "string" == typeof a.in_reply_to ? a.in_reply_to : void 0;
                },
                te = J((e) => e.inReplyToStatusId),
                ae = (e, t) => {
                    const a = ee(0, t) || te(e, t);
                    return a ? q.Z.selectHydrated(e, a) : void 0;
                },
                ie = (e, t) => t.location.pathname.indexOf("/intent/") > -1,
                re = J((e) => e.defaultText),
                ne = (e, t) => {
                    const a = re(e, t);
                    return (0, x.Z)(t.location) || a;
                },
                oe = J((e) => e.quotedStatus),
                se = (e, t) => (t.quotedStatus ? t.quotedStatus : oe(e, t)),
                de = ({ cardUrl: e, mediaIds: t, ...a }) => a,
                le = J((e) => e.isSelfThreadReply),
                ce = J((e) => e.hideUnsentTweetsButton),
                ue = J((e) => e.headingSubtitle),
                he = J((e) => e.headingTitle),
                pe = J((e) => !!e.previousTweetId),
                be = J((e) => e.editableUntil);
            function me(e, t) {
                const { previousPath: a, selectedCommunityId: i } = t.location.state || {};
                let r;
                const n = (0, O.br)(e);
                if ((i ? (r = i) : a && a.includes("/home") && n.type === G.FO.COMMUNITY && (r = n.id), r)) {
                    const t = (0, F.BL)(e, { communityId: r });
                    if (t && "NonMember" !== t.role) return t;
                }
            }
            function Se(e, t) {
                const { previousPath: a, selectedCommunityId: i } = t.location.state || {},
                    r = (0, O.br)(e);
                let n;
                if ((i ? (n = i) : a && a.includes("/home") && r.type === G.FO.COMMUNITY && (n = r.id), n)) {
                    const t = (0, F.BL)(e, { communityId: n });
                    return !(!t || "NonMember" !== t.role);
                }
                return !1;
            }
            const fe = J((e) => e.trustedFriendsValue),
                ge = J((e) => e.previousTweetId),
                ye = (e, t) => {
                    const a = ge(e, t);
                    return a ? q.Z.createHydratedSelector(e)(a) : null;
                },
                _e = (e, t) => (0, V.t5)(e, V.xH),
                we = (0, M.Z)()
                    .propsFromState(() => ({
                        activeUser: X,
                        audienceControlsValue: (0, I.P1)(
                            ye,
                            (e, t) => z.oN(e, "modal"),
                            W.Ln,
                            (e, t) => z.SJ(e, "modal"),
                            (e, t, a, i) => (e ? (0, v.CB)(e, a, i) : t),
                        ),
                        broadcastCommunityTweet: K,
                        composerData: (0, I.P1)(j, ne, se, N.gz, ie, (e, t, a, i, r) =>
                            e.map((e, n) => {
                                const o = (0, k.Z)(e.mediaIds || []),
                                    s = i.filter((e) => o.has(e.id));
                                return { ...de(e), media: s, quotedStatus: 0 === n ? a : void 0, text: 0 === n && t && !r ? t : e.text };
                            }),
                        ),
                        composeSemanticCoreId: J((e) => e.composeSemanticCoreId),
                        draftTweets: U.Fq,
                        editableUntil: be,
                        hideUnsentTweetsButton: ce,
                        inReplyToStatus: ae,
                        inReplyToStatusId: ee,
                        isEdit: pe,
                        isIntentRoute: ie,
                        isSelfThreadReply: le,
                        isSending: Y,
                        isAutoSaving: $,
                        scheduledTweets: H.yD,
                        selectedCommunity: me,
                        shouldShowNonCommunityMemberPrompt: Se,
                        selectedTrustedFriendsValue: fe,
                        sendingProgress: z.ZE,
                        subtitle: ue,
                        shouldShowCommunityAudienceEducation: _e,
                        title: he,
                    }))
                    .propsFromActions(() => ({ createDraftTweetApiErrorHandler: (0, L.zr)(U.CA), createScheduledTweetApiErrorHandler: (0, L.zr)(H.Hf), fetchScheduledTweets: H.FP, fetchDraftTweets: U.Le, addCommunityAudienceEducationFlag: () => (0, V.pj)(V.xH), updateAudienceControlsValue: z.sU, setActiveParentKey: z.jr }));
            var Ce = a(837880);
            const Ee = m().e6042757,
                De = m().a4e39717,
                ve = 3e5,
                Ae = { "05:00": !0, "01:00": !0 };
            function Be({ formatted: e, minutes: t }) {
                return Ae[e] && De({ minutes: t });
            }
            function Te({ minutes: e, seconds: t }) {
                return Ee({ minutes: e, seconds: t });
            }
            const Re = "tweetButton",
                Pe = m().a609edbe,
                Ze = m().d4ebc798,
                Ie = m().j24c37b2,
                ke = m().dc295bb0,
                Le = m().e536de22,
                xe = m().cb817dae,
                Me = "compose",
                Fe = { page: Me },
                Ue = { page: Me, section: "reply" },
                Ve = { context: "compose_intent_logged_in" };
            class Ne extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isValid: !1, editCountdownShown: !1 }),
                        (this._handleEditCountdownTimeout = (e) => {
                            const t = e - Date.now() <= ve;
                            t !== this.state.editCountdownShown && this.setState({ editCountdownShown: t });
                        }),
                        (this._handleCloseModal = () => {
                            const { history: e } = this.props;
                            e.goBackThroughModals();
                        }),
                        (this._handleAppBarHeight = (0, S.Z)(() => {
                            const e = o.findDOMNode(this._appBarRef);
                            return (e && e instanceof window.Element && e.getBoundingClientRect().height) || 50;
                        })),
                        (this._handleBackClick = () => {
                            this._composeContainerRef && this._composeContainerRef.handleDismissComposer();
                        }),
                        (this._handleCloseComposer = () => {
                            this._appBarRef && this._appBarRef.goBack();
                        }),
                        (this._handleSendTweet = () => {
                            this._composeContainerRef && this._composeContainerRef.handleTweetOrRetweet();
                        }),
                        (this._handleSendTweetWithBoost = () => this._composeContainerRef?.handleTweetWithBoost() ?? Promise.resolve()),
                        (this._setValidity = (e) => {
                            e !== this.state.isValid && this.setState({ isValid: e });
                        }),
                        (this._getScribeNamespace = () => (this.props.inReplyToStatus || this.props.inReplyToStatusId ? Ue : Fe)),
                        (this._getScribeData = () => {
                            const { activeUser: e, isIntentRoute: t } = this.props;
                            return t && e ? Ve : n();
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isValid: e } = this.state,
                                { isModal: t } = this.context,
                                { activeUser: a, audienceControlsValue: r, composerData: n, inReplyToStatus: o, isEdit: l, isSelfThreadReply: c, isSending: u } = this.props,
                                h = "all" === r.conversationControlsValue,
                                p = !e || u || !a || this.is_uploading;
                            return i.createElement(s.Z, { style: Oe.rightControlContainer }, l ? this._renderCountdownTimer() : i.createElement(Z.Z, { disabled: p, isAudienceAll: h, isComposerValid: e, isEdit: !!l, isModal: t, isQuote: this.isQuoteTweet, isReply: !!o, isRetweet: !!this.isRetweet, isScheduled: this.isScheduled, isSelfThreadReply: !!c, isThread: this.isThread, onTweetWithBoostPress: this._handleSendTweetWithBoost, renderFallback: this._renderDraftsHeading, shouldShow: !t, tweetText: n[0].text, viewer: a }), t ? null : i.createElement(d.ZP, { disabled: p, onPress: this._handleSendTweet, size: "small", testID: Re, type: "brandFilled" }, (0, v.of)({ inReplyToStatus: !!o, isSelfThreadReply: !!c, isQuoteTweet: !!this.isQuoteTweet, isRetweet: !!this.isRetweet, isScheduled: !!this.isScheduled, isThread: this.isThread, isEdit: !!l })));
                        }),
                        (this._renderHeaderWithProgressBar = (e) => {
                            const { isModal: t } = this.context,
                                { isAutoSaving: a, isSending: r, sendingProgress: n } = this.props;
                            return i.createElement(i.Fragment, null, i.createElement(l.Z, { progress: r && !a ? Math.max(n, 0.02) : 0, style: [Oe.progressBar, t && Oe.progressBarModal] }), e);
                        }),
                        (this._renderDraftsHeading = () => {
                            const { hideUnsentTweetsButton: e } = this.props;
                            if (!e) return i.createElement(d.ZP, { onPress: this._handleOpenUnsent, size: "small", testID: "unsentButton", type: "brandText" }, Ze);
                        }),
                        (this._renderCountdownTimer = () => {
                            const { editableUntil: e } = this.props,
                                { editCountdownShown: t } = this.state;
                            if (!t || !e) return null;
                            return i.createElement(_, {
                                "aria-label": Te,
                                expiration: e,
                                getAccessibilityLiveLabel: Be,
                                onTimeElapsed: () => {
                                    this._composeContainerRef && this._composeContainerRef.handleEditTimeLimitExceeded();
                                },
                            });
                        }),
                        (this._handleOpenUnsent = () => {
                            const { history: e } = this.props;
                            (0, P.n)({ ...this._getScribeNamespace(), element: "unsent_tweets", action: "click" }), e.push("/compose/post/unsent/drafts");
                        }),
                        (this._setAppBarRef = (e) => {
                            this._appBarRef = e;
                        }),
                        (this._handleComposeContainerRef = (e) => {
                            this._composeContainerRef = e;
                        });
                }
                componentDidMount() {
                    const { activeUser: e, broadcastCommunityTweet: t, createDraftTweetApiErrorHandler: a, createScheduledTweetApiErrorHandler: i, editableUntil: r, fetchDraftTweets: n, fetchScheduledTweets: o, history: s, inReplyToStatus: d, isEdit: l, location: c, selectedCommunity: u, selectedTrustedFriendsValue: h, updateAudienceControlsValue: p } = this.props;
                    (this._unlockReload = B.Z.acquire()), s.setModalRouteBreakpoint(s.location), e && (o().catch(i()), n().catch(a())), u && (p({ _type: "community_members", communityIdValue: u.id_str, conversationControlsValue: "community_members", broadcast: t }, "modal"), s.replace({ pathname: c.pathname, state: (0, f.Z)(c.state || {}, "selectedCommunityId") })), h && (p({ _type: "trusted_friends_tweet", trustedFriendsValue: h, conversationControlsValue: "trusted_friends_tweet" }, "modal"), s.replace({ pathname: c.pathname, state: (0, f.Z)(c.state || {}, "trustedFriendsValue") })), d?.exclusivity_info ? p({ _type: "super_followers_exclusive", conversationControlsValue: "super_followers_exclusive", exclusivityControlValue: {} }) : d?.community_id_str ? p({ _type: "community_members", communityIdValue: d.community_id_str, conversationControlsValue: "community_members" }) : d?.trusted_friends_info && p({ _type: "trusted_friends_tweet", conversationControlsValue: "trusted_friends_tweet", trustedFriendsValue: { trusted_friends_list_id: "1482057446797373440" } });
                    const b = +r;
                    l &&
                        !this._cancelEditTimeout &&
                        b >= 0 &&
                        (this._handleEditCountdownTimeout(b),
                        (this._cancelEditTimeout = (function (e, t) {
                            const a = e - Date.now() - ve,
                                i = (0, Ce.Z)(a, 0, 2147483647),
                                r = setTimeout(t, i, e);
                            return () => clearTimeout(r);
                        })(b, this._handleEditCountdownTimeout)));
                }
                componentWillUnmount() {
                    const { history: e } = this.props;
                    e.setModalRouteBreakpoint(e.location), this._unlockReload(), this._cancelEditTimeout?.();
                }
                render() {
                    const { activeUser: e, composeHeader: t, composeSemanticCoreId: a, history: r, isEdit: n, isIntentRoute: o, location: s, quotedStatus: d, subtitle: l, title: h } = this.props,
                        p = o && !e,
                        { isModal: b } = this.context;
                    return i.createElement(
                        T.nO,
                        { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                        i.createElement(c.ZP, null, ({ containerWidth: o }) => {
                            const c = A.Z.shouldRenderAsModal(o),
                                m = (p && c) || this.showCommunityNonMemberPrompt;
                            return i.createElement(i.Fragment, null, this.showCommunityNonMemberPrompt ? i.createElement(u.Z, { actionLabel: Ie, graphicDisplayMode: "none", headline: ke, onAction: this._handleCloseModal, subtext: Le }) : null, p && i.createElement(E.Z, { history: r, location: s }), m ? null : i.createElement(C.Z, { appBarRef: this._setAppBarRef, documentTitle: Pe, hideBackButton: !1, history: r, onBackClick: this._handleBackClick, renderHeader: this._renderHeaderWithProgressBar, rightControl: this._renderAppBarRightControl(), subtitle: l, title: n ? xe : h }, i.createElement(D.Z, { activeUser: e, composeHeader: t, composeSemanticCoreId: a, containerWidth: o, history: r, isModal: b, location: s, onCloseComposer: this._handleCloseComposer, onHandleAppBarHeight: this._handleAppBarHeight, onRef: this._handleComposeContainerRef, quotedStatus: d, setValidity: this._setValidity })));
                        }),
                    );
                }
                get showCommunityNonMemberPrompt() {
                    const { inReplyToStatus: e, shouldShowNonCommunityMemberPrompt: t } = this.props,
                        a = null == e && !this.isQuoteTweet;
                    return t && a;
                }
                get isThread() {
                    return this.props.composerData.length > 1;
                }
                get isRetweet() {
                    const { composerData: e } = this.props,
                        t = 0 === e[0].media.length;
                    return !this.isThread && e[0].quotedStatus && "" === e[0].text && t;
                }
                get isQuoteTweet() {
                    const { composerData: e } = this.props;
                    return !this.isThread && !!e[0].quotedStatus;
                }
                get isScheduled() {
                    const { composerData: e } = this.props;
                    return (0, R.TO)(e[0].scheduledFor);
                }
                get is_uploading() {
                    return !!this._composeContainerRef && this._composeContainerRef.is_uploading;
                }
            }
            Ne.contextType = h.Z;
            const Oe = p.default.create((e) => ({ progressBar: { position: "fixed", borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small, zIndex: e.componentZIndices.appBarZIndex + 1 }, progressBarModal: { position: "absolute" }, rightControlContainer: { display: "inline-flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 } })),
                Ge = we(Ne);
        },
        15038: (e, t, a) => {
            a.d(t, { ZP: () => c });
            var i = a(202784),
                r = a(325686),
                n = a(950822),
                o = a(392237);
            const s = (e) => (0, n.Z)("div", e);
            class d extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._dragEnterCount = 0),
                        (this.state = { active: !1 }),
                        (this._handleDragDrop = (e) => {
                            const { onFilesAdded: t } = this.props;
                            e.preventDefault();
                            t(Array.from(e && e.dataTransfer.files)), this._updateDragCount(0);
                        }),
                        (this._handleDragEnter = (e) => {
                            const { onDragEnter: t } = this.props;
                            e.preventDefault(), t && t(), this._updateDragCount(this._dragEnterCount + 1);
                        }),
                        (this._handleDragLeave = (e) => {
                            e.preventDefault(), this._updateDragCount(this._dragEnterCount - 1);
                        }),
                        (this._handleDragOver = (e) => {
                            e.preventDefault();
                        });
                }
                render() {
                    const { activeStyle: e, allowDragDrop: t, children: a, style: n } = this.props,
                        { active: o } = this.state,
                        d = t ? l.dragBorderValid : l.dragBorderInvalid;
                    return i.createElement(s, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [l.root, n, o && d, o && e] }, i.createElement(r.Z, { style: l.inner }, "function" == typeof a ? a(o) : a));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            d.defaultProps = { allowDragDrop: !0 };
            const l = o.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                c = d;
        },
        449161: (e, t, a) => {
            a.d(t, { Z: () => b });
            var i = a(807896),
                r = a(202784),
                n = a(674132),
                o = a.n(n),
                s = a(154003),
                d = a(950822),
                l = a(392237);
            const c = o().i5450bec,
                u = o().f7432494;
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                a = e.target,
                                i = a.files;
                            i.length && t && t(i), (a.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: a, onChange: n, testID: o, ...l } = this.props,
                        h = !(e?.includes("video") || e?.includes("gif"));
                    return r.createElement(r.Fragment, null, r.createElement(s.ZP, (0, i.Z)({ hoverLabel: e ? { label: h ? u : c } : void 0 }, l, { disabled: t, onPress: this._handlePress })), (0, d.Z)("input", { accept: e, disabled: t, multiple: a, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: p.input, tabIndex: -1, testID: o, type: "file" }));
                }
            }
            h.defaultProps = { disabled: !1, multiple: !1 };
            const p = l.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                b = h;
        },
        420412: (e, t, a) => {
            a.d(t, { Z: () => d });
            var i = a(202784),
                r = a(325686),
                n = a(235902),
                o = a(885015),
                s = a(392237);
            function d({ borderColor: e = "borderColor", isSlim: t = !1, label: a }) {
                const { isWebRedesign: d } = n.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? l[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return a ? i.createElement(o.Z, { style: !t && l.root, withGutter: !0 }, i.createElement(r.Z, { style: l.gapColumn }, i.createElement(r.Z, { style: [l.gap, c] })), i.createElement(r.Z, { style: l.gapText }, a), i.createElement(r.Z, { style: l.gapColumn }, i.createElement(r.Z, { style: [l.gap, c] }))) : i.createElement(r.Z, { style: [!t && l.root, d() && l.rootRedesign, l.gap, c] });
            }
            const l = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(807896),
                r = a(202784),
                n = a(325686),
                o = a(392237);
            class s extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...o } = this.props,
                        s = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, d.column, a && d.withGutterColumn] }));
                    return r.createElement(n.Z, (0, i.Z)({ style: [t, d.root, a && d.withGutter] }, o), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const d = o.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                l = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Compose.d448b3ca.js.map
