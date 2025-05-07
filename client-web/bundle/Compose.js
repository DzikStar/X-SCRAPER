"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Compose", "shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview~bundl"],
    {
        625661: (e, t, i) => {
            i.d(t, { ZP: () => h });
            var a = i(202784),
                r = i(614983),
                n = i.n(r),
                o = i(325686),
                s = i(370006),
                d = i(786998),
                l = i(929028),
                c = i(386802);
            function u(e, t, i) {
                return e || (!t && i ? "fixed" : void 0);
            }
            class h extends a.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: i, fixed: r, hideBackButton: n, isFullWidth: o, isLarge: l, leftControl: c, middleControl: h, position: p, rightControl: b, secondaryBar: m, style: S, subtitle: f, title: g, titleDomId: y, titleIconCell: _, titleIconCellSize: w, withBackground: C, withWideContainer: E } = this.props,
                        { isModal: D } = this.context,
                        v = n ? c : a.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        A = (function (e, t, i) {
                            return e && !(t && i);
                        })(!!C, D, !!m);
                    return a.createElement(a.Fragment, null, a.createElement(d.Z, { centerTitle: t, centeredLogo: i, isFullWidth: o, isLarge: l, leftControl: v, middleControl: h, position: u(p, D, r), rightControl: b, style: S, subtitle: f, title: g, titleDomId: y, titleIconCell: _, titleIconCellSize: w, withBackground: A, withWideContainer: E }), m || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        i = l.Z.getBackgroundStyles();
                    return t ? a.createElement(o.Z, { style: !!e && i }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, i) => {
            i.d(t, { Z: () => m, w: () => p });
            var a = i(202784),
                r = i(325686),
                n = i(108362),
                o = i(386802),
                s = i(392237),
                d = i(652904),
                l = i(555079),
                c = i(625661),
                u = i(449067),
                h = i(715601);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: i, backLocation: n, centerTitle: o, hideBackButton: s, history: d, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: m, rightControl: S, secondaryBar: f, subtitle: g, title: y } = this.props,
                                { isModal: _ } = this.context;
                            return a.createElement(r.Z, { style: _ ? [b.childViewAppBarRoot, b.appBarZindex] : b.appBarZindex }, a.createElement(c.ZP, { backButtonType: i || (_ ? "close" : "back"), backLocation: n, centerTitle: o, fixed: !_, hideBackButton: s, history: d, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: m, ref: e, rightControl: S, secondaryBar: f, style: [_ && b.appBarModal, t], subtitle: g, title: y, titleDomId: l.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: i } = this.context;
                            t && (i ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: i, containerStyle: o, documentTitle: s, isFullWidth: l, isLarge: c, renderHeader: p, title: m, withoutBottomBarMobile: S } = this.props,
                        { isModal: f } = this.context,
                        g = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(d.Z, null, a.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: m }), a.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [b.root, f && b.rootModal] }, !f && g, a.createElement(n.Z, { isFullWidth: l, isLarge: c, style: [b.container, f && b.containerModal, o] }, f ? a.createElement(h.Z, { style: b.viewport }, g, i) : i), t ? a.createElement(r.Z, { style: [b.bottomBarModal, !f && !S && b.bottomBarMobile] }, a.createElement(n.Z, { isFullWidth: l, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = o.Z);
            const b = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = p;
        },
        373554: (e, t, i) => {
            i.d(t, { Z: () => f, h: () => m });
            var a = i(807896),
                r = i(202784),
                n = i(449161),
                o = i(392237),
                s = i(674132),
                d = i.n(s),
                l = i(473026),
                c = i(276259),
                u = i(540387);
            const h = "fileInput",
                p = d().b9960f32,
                b = r.createElement(l.default, null),
                m = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: i }) => (t ? c.v5 : []).concat(e ? [c.Re] : []).concat(i ? u.jn : []);
            const S = o.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                f = function ({ "aria-label": e = p, acceptGifs: t = !0, acceptImages: i = !0, acceptVideo: o = !0, customMimeTypes: s = [], icon: d = b, size: l = "medium", style: c, withIcon: u = !0, ...f }) {
                    const g = m({ acceptGifs: t, acceptImages: i, acceptVideo: o }).concat(s).join(",");
                    return r.createElement(n.Z, (0, a.Z)({}, f, { accept: g, "aria-label": e, icon: u ? d : void 0, size: l, style: [S.root, c], testID: h }));
                };
        },
        751170: (e, t, i) => {
            i.d(t, { A: () => b, Z: () => g });
            var a = i(202784),
                r = i(325686),
                n = i(167630),
                o = i(992942),
                s = i(392237),
                d = i(674132),
                l = i.n(d),
                c = i(205074),
                u = i(364837),
                h = i(908478);
            const p = l().gff1f69e,
                b = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
            class m extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imagePreviewUrl: null }),
                        (this._getImageSrc = () => {
                            const { enableGif: e, mediaItem: t } = this.props,
                                { imagePreviewUrl: i } = this.state;
                            if (t && t.mediaFile) return t.mediaFile.isGif && !e ? i : t.mediaFile.url;
                        });
                }
                componentDidUpdate() {
                    const {
                            enableGif: e,
                            mediaItem: { mediaFile: t },
                        } = this.props,
                        { imagePreviewUrl: i } = this.state;
                    e ||
                        i ||
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
                    const { borderRadius: e, enableGif: t, mediaItem: i, onClick: s, resizeMode: d } = this.props,
                        { imagePreviewUrl: l } = this.state || {},
                        c = i.mediaFile && i.mediaFile.isGif && !t && !l,
                        u = i.needsProcessing || c,
                        h = [f.root, S[e], u && f.loadingBorder],
                        b = this._getImageSrc();
                    return a.createElement(r.Z, { onClick: s, style: h }, u || !b ? a.createElement(n.Z, { "aria-label": p, style: f.activityIndicator }) : a.createElement(o.Z, { resizeMode: d, source: b, style: f.image }));
                }
            }
            m.defaultProps = { borderRadius: b.NONE, enableGif: !0, resizeMode: "cover" };
            const S = s.default.create((e) => ({ [b.INFINITE]: { borderRadius: e.borderRadii.infinite }, [b.MEDIUM]: { borderRadius: e.borderRadii.small }, [b.NONE]: { borderRadius: e.borderRadii.none } })),
                f = s.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                g = m;
        },
        304059: (e, t, i) => {
            i.d(t, { Z: () => G });
            var a = i(202784),
                r = i(325686),
                n = i(537392),
                o = i(336961),
                s = i(659651),
                d = i(154003),
                l = i(392237),
                c = i(992942),
                u = i(674132),
                h = i.n(u),
                p = i(678773),
                b = i(597237),
                m = i(254944),
                S = i(837020),
                f = i(276259),
                g = i(443781),
                y = i(10656),
                _ = i(716233),
                w = i(946208),
                C = i(540387),
                E = i(950822),
                D = i(303186),
                v = i(954300);
            class A extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: i, style: r, variants: n, ...o } = this.props,
                        s = (0, D.IM)((0, v.rD)(n), t);
                    return (0, E.Z)("video", { ...o, children: [s.map((e) => a.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: r });
                }
            }
            A.defaultProps = { dataSaverMode: !1, variants: [] };
            var B = i(959587),
                T = i(751170),
                R = i(523561),
                P = i(195560);
            const Z = (0, R.Z)({
                    loader: () =>
                        Promise.all([
                            i.e("icons.8"),
                            i.e("icons.21"),
                            i.e("icons.13"),
                            i.e("icons.1"),
                            i.e("modules.common-e907d115"),
                            i.e("modules.common-e019dbda"),
                            i.e("icons.10"),
                            i.e("icons.17"),
                            i.e("modules.audio-6107ac1a"),
                            i.e("modules.audio-b953418a"),
                            i.e("modules.audio-7c51e6a7"),
                            i.e("modules.audio-04db59e9"),
                            i.e("modules.audio-76583d6c"),
                            i.e("modules.audio-b7a8a5fb"),
                            i.e("modules.audio-51f6e793"),
                            i.e("modules.audio-e019dbda"),
                            i.e("modules.audio-262c94d4"),
                            i.e("modules.audio-c6fe4ea4"),
                            i.e("icons.29"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7af5e2f7"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            i.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),
                            i.e("loader.MediaPreviewVideoPlayer"),
                        ])
                            .then(i.bind(i, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => a.createElement(P.Z, { hasError: e, onRetry: t }),
                }),
                I = h().gd80afba,
                L = h().j322caee,
                k = h().abd845fe,
                x = h().df1b0708,
                M = h().cd959e5c,
                F = h().e68b09b4,
                U = h().add55c98,
                V = h().f350cf46;
            class N extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isVideoPaused: !0, playGif: !1 }),
                        (this._handleGifClick = () => {
                            this.setState({ playGif: !this.state.playGif });
                        }),
                        (this._handleMediaPreviewLayout = (e) => {
                            const { mediaItem: t, resizeIfNeeded: i } = this.props,
                                a = t.mediaFile || t.externalMediaDetails;
                            if (!a) return;
                            const {
                                    nativeEvent: {
                                        layout: { height: r, width: n },
                                    },
                                } = e,
                                { height: o, width: s } = a,
                                d = s / o;
                            Math.abs(d - n / r) > 0.05 && ("width" === i ? this.setState({ mediaContainerSizeStyle: { width: r * d } }) : "height" === i && this.setState({ mediaContainerSizeStyle: { height: n / d } }));
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
                    const { "aria-label": e, enableGif: t, mediaItem: i, onEdit: l, onEditSensitiveWarning: c, onRemove: u, role: h, style: g, withAltTextLabel: _, withCloseButton: w, withDragAndDropIndicator: C, withEditButton: E, withEditIcon: D, withEditSensitiveWarningButton: v } = this.props,
                        { mediaContainerSizeStyle: A, playGif: T } = this.state,
                        R = i.externalMediaDetails && i.externalMediaDetails.mediaType === f.Re,
                        P = R || (t && i.mediaFile && i.mediaFile.isGif),
                        Z = !!i.mediaFile?.isVideo;
                    return a.createElement(n.ZP, null, ({ windowWidth: t }) => {
                        const i = void 0 !== D ? D : !y.Z.isTwoColumnLayout(t);
                        return a.createElement(r.Z, { "aria-label": e || U, onLayout: this._handleMediaPreviewLayout, role: h, style: [g, O.cursor, R && O.gifPlayButton, A] }, this._renderPreview(), R && !T && a.createElement(o.Z, { "aria-label": x, onPress: this._handleGifClick, size: "small" }), P ? a.createElement(B.ZP, { type: B.AM }) : null, _ && !Z ? a.createElement(s.Z, { align: "left", altLabel: e }) : null, a.createElement(r.Z, { style: O.editMedia }, C ? a.createElement(d.ZP, { "aria-label": V, hoverLabel: { label: V }, icon: a.createElement(p.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, E && v ? a.createElement(d.ZP, { "aria-label": L, icon: a.createElement(b.default, { style: O.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, E ? a.createElement(d.ZP, { "aria-label": I, icon: i ? a.createElement(m.default, null) : void 0, onPress: l, size: i ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, i ? void 0 : k) : null), w ? a.createElement(d.ZP, { "aria-label": M, hoverLabel: { label: F }, icon: a.createElement(S.default, null), onPress: u, size: "small", style: O.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            i = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, i);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : a.createElement(r.Z, { style: l.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: i } = this.state,
                        n = { uri: i ? e : t };
                    return a.createElement(r.Z, { onClick: this._handleGifClick, style: l.default.absoluteFill }, a.createElement(c.Z, { resizeMode: "cover", source: n, style: O.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: i, mediaItem: r, onClick: n } = this.props;
                    return a.createElement(T.Z, { borderRadius: e, enableGif: t, mediaItem: r, onClick: n, resizeMode: i });
                }
                _renderVideoPreview(e, t, i, r) {
                    const { mediaItem: n } = this.props,
                        o = n.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && r instanceof C.ZP) {
                        let o = [];
                        (0, _.TO)(r.fileHandle) && (o = [{ src: t, type: e }]);
                        const s = n.mediaMetadata?.subtitles,
                            d = n?.trimData;
                        return a.createElement(Z, { mediaFile: r, mediaId: String(i), mediaItem: n, subtitles: s, trimData: d, variants: o });
                    }
                    {
                        const i = (0, _.TO)(r.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return a.createElement(A, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: r instanceof C.ZP ? r.thumbnail : "", style: O.video, variants: i }, o?.upload?.mediaFile instanceof w.ZP ? a.createElement("track", { default: !0, kind: "subtitles", label: o.displayName, src: o.upload.mediaFile.vtt, srcLang: o.lang }) : null);
                    }
                }
            }
            (N.contextType = g.rC), (N.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const O = l.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                G = N;
        },
        959587: (e, t, i) => {
            i.d(t, { AM: () => d, ZP: () => h, pX: () => l });
            var a = i(202784),
                r = i(731708),
                n = i(659651),
                o = i(392237),
                s = i(548721);
            const d = "animated_gif",
                l = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: i } = e;
                    let o;
                    if (i === d) o = a.createElement(r.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === i) o = a.createElement(s.default, { "aria-label": "Vine", style: u.icon });
                    else if (i === l && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            i = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        o = a.createElement(r.ZP, { color: "white" }, `${e}:${i}`);
                    }
                    return o ? a.createElement(n.Z, { align: "left" }, o) : null;
                },
                u = o.default.create((e) => ({ icon: { color: e.colors.white } })),
                h = a.memo(c);
        },
        231214: (e, t, i) => {
            i.d(t, { Z: () => a });
            i(202784);
            const a = (0, i(523561).Z)({
                loader: () => Promise.all([i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"), i.e("ondemand.IntentPrompt")]).then(i.bind(i, 958679)),
            });
        },
        652904: (e, t, i) => {
            i.d(t, { Z: () => c });
            var a = i(202784),
                r = i(500002),
                n = i(668214),
                o = i(997174),
                s = i(118823);
            const d = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class l extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: i, search: a },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: n, search: o },
                            locationKey: s,
                        } = e;
                    let d = !1;
                    t.pathname !== i ? (this._isInBackground = !0) : this._isInBackground && t.pathname === i && ((this._isInBackground = !1), (d = !0));
                    const l = r || s;
                    ((l && r !== s) || (!l && i !== n) || a !== o || d) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: i, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), i(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const c = (0, r.ZP)(d(l));
        },
        62857: (e, t, i) => {
            i.d(t, { Z: () => B });
            var a = i(807896),
                r = i(202784),
                n = i(476984),
                o = i.n(n),
                s = i(674132),
                d = i.n(s),
                l = i(615656),
                c = i(290402),
                u = i(325686),
                h = i(240089),
                p = i(663550),
                b = i(409438);
            const m = ({ displayMode: e = b.Z.UserDetailed, renderUserCell: t, userIds: i }) =>
                r.createElement(
                    u.Z,
                    { role: "list" },
                    i.map((i, a) => (t ? t(i) : r.createElement(h.ZP, { decoration: h.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: i, promotedItemType: p.bj.USER, userId: i, withFollowsYou: !0 }))),
                );
            var S = i(312771),
                f = i(71620),
                g = i(973572),
                y = i(668214),
                _ = i(919022);
            const w = (e, t) => t.userIds,
                C = (e, t) => {
                    const { filterPredicate: i = (e) => !!e, userIds: a } = t;
                    return a.filter((t) => {
                        const a = _.ZP.select(e, t);
                        return !!a && i(a);
                    });
                },
                E = (e, t) => {
                    const { userIds: i } = t;
                    return i.reduce((t, i) => {
                        const a = _.ZP.selectFetchStatus(e, i);
                        return (t[i] = a === S.ZP.NONE ? S.ZP.LOADING : a), t;
                    }, {});
                },
                D = (0, y.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, g.Z)(C, (e) => e),
                        fetchStatus: (0, g.Z)(C, E, w, (e, t, i) => {
                            let a = S.ZP.LOADED;
                            for (let r = 0; r < i.length; r++) {
                                const n = i[r];
                                if (-1 === e.indexOf(n)) {
                                    const e = t[n] || S.ZP.LOADING;
                                    a = a === S.ZP.LOADED ? e : a;
                                }
                                if (a === S.ZP.LOADED) break;
                            }
                            return a;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: _.ZP.fetchManyIfNeeded })),
                v = d().f5b426c2;
            class A extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: i, fetchUsersIfNeeded: n, filterPredicate: o, userIds: s, ...d } = this.props;
                            return r.createElement(m, (0, a.Z)({}, d, { userIds: e }));
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
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: i, userIds: a } = this.props;
                    i(a).then(
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
        492057: (e, t, i) => {
            i.d(t, { BL: () => r, tc: () => n });
            var a = i(491963);
            const r = (e, t) => {
                    if (t.communityId) return a.ZP.select(e, t.communityId);
                },
                n = (e, t, i) => {
                    const r = i || t.communityId;
                    if (r) return a.ZP.selectFetchStatus(e, r);
                };
        },
        964917: (e, t, i) => {
            i.d(t, { FP: () => S, Hf: () => l, Q$: () => f, UD: () => m, V2: () => u, yD: () => b });
            var a = i(439058),
                r = i(499627),
                n = i(917799),
                o = i(312771);
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
                        return r && r.deleteScheduledTweetId ? { ...e, scheduledTweets: ((i = r.deleteScheduledTweetId), (a = e.scheduledTweets), a.filter((e) => e.rest_id !== i)) } : e;
                    }
                    default:
                        return e;
                }
                var i, a;
                return e;
            }
            r.Z.register({ [s]: p });
            const b = (e) => e[s].scheduledTweets,
                m = (e) => e[s].fetchStatus,
                S =
                    () =>
                    (e, t, { api: i }) =>
                        (0, n._O)(e, { request: i.withEndpoint(a.Z).fetchScheduledTweets, params: {} })({ actionTypes: c, context: l }).then(() => {}),
                f =
                    (e) =>
                    (t, i, { api: r }) =>
                        (0, n._O)(t, { request: r.withEndpoint(a.Z).deleteScheduledTweet, params: { scheduled_tweet_id: e } })({ actionTypes: h, context: u, meta: { deleteScheduledTweetId: e } });
        },
        108304: (e, t, i) => {
            i.r(t), i.d(t, { PlacePickerScreen: () => q, default: () => j });
            var a = i(202784),
                r = i(325686),
                n = i(470397),
                o = i(731708),
                s = i(143670),
                d = i(154003),
                l = i(371344),
                c = i(946847),
                u = i(392237),
                h = i(674132),
                p = i.n(h),
                b = i(171709),
                m = i(956272),
                S = i(264171),
                f = i(290402),
                g = i(980407),
                y = i(341276),
                _ = i(27498),
                w = i(312771),
                C = i(71620),
                E = i(668214),
                D = i(806528),
                v = i(843138),
                A = i(390387),
                B = i(38562),
                T = i(632960);
            const R = (0, E.Z)()
                .propsFromState(() => ({ autotaggedLocation: v.Xm, initialResults: v.jK, initialFetchStatus: v.ke, lastSearchResults: v.uD, lastSearchFetchStatus: v.tn, position: D.Bz, taggedLocation: T._d, userCountry: A.GG }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, C.zr)("PLACE_PICKER"), loadGeoLocation: D.iG, fetchInitialPlacesIfNeeded: v.BJ, searchPlaces: v.k6, updateLastSelectedPlace: v.T5, updateSettings: B.VP, updateSingleComposer: T.zi }))
                .withAnalytics({ page: "compose", section: "place_picker" });
            class P {
                constructor(e, t, i) {
                    (this.formatter = e), (this.fallbackFormatter = t), (this.fallbackRatio = i);
                }
                format(e) {
                    const t = Math.round(10 * e) / 10;
                    return t > 0 ? this.formatter({ distance: t }) : this.fallbackFormatter({ distance: Math.round(e * this.fallbackRatio) });
                }
            }
            const Z = new P(p().b01ed2db, p().i83e29e1, 5280),
                I = new P(p().d4b7cff7, p().b211849f, 1e3),
                L = ["lr", "mm", "uk", "us"],
                k = p().b772cd66,
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
            class q extends a.Component {
                constructor(e) {
                    super(e),
                        (this.state = { activeResultSet: _.Z0.initial, geoLocationError: void 0, query: "", selectedLocation: void 0, showSearchForButton: !1 }),
                        (this._appBarRef = a.createRef()),
                        (this._fetchInitialPlaces = () => {
                            const { createLocalApiErrorHandler: e, fetchInitialPlacesIfNeeded: t, taggedLocation: i } = this.props;
                            t()
                                .then(() => {
                                    const { autotaggedLocation: e } = this.props;
                                    i || this.setState({ selectedLocation: e });
                                })
                                .catch(e());
                        }),
                        (this._getActiveResults = () => {
                            const { initialResults: e, lastSearchResults: t } = this.props,
                                { activeResultSet: i } = this.state;
                            return i === _.Z0.initial ? e : t;
                        }),
                        (this._selectResults = () => {
                            const { query: e, selectedLocation: t } = this.state;
                            let i = this._getActiveResults()?.places || [];
                            return t && (i = [t, ...i.filter((e) => e.place.id !== t.place.id)]), i.filter((t) => t.place.full_name.toLowerCase().includes(e.toLowerCase()));
                        }),
                        (this._goBack = () => {
                            this._appBarRef.current?.goBack();
                        }),
                        (this._setTaggedLocation = (e) => {
                            const { updateLastSelectedPlace: t, updateSettings: i, updateSingleComposer: a } = this.props;
                            a({ updates: { taggedLocation: e } }), t(e), i({ shouldAutoTagLocation: !!e });
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
                                { activeResultSet: t, query: i } = this.state;
                            t === _.Z0.initial ? this._fetchInitialPlaces() : e(i);
                        }),
                        (this._handleLocationDisabledPromptDismiss = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        }),
                        (this._handleChange = (e) => {
                            const { value: t } = e.currentTarget,
                                i = t.length ? this.state.activeResultSet : _.Z0.initial;
                            this.setState({ activeResultSet: i, query: t, showSearchForButton: !!t.length });
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
                            const { position: t, userCountry: i } = this.props,
                                {
                                    place: {
                                        attributes: { street_address: r },
                                        centroid: s,
                                    },
                                } = e;
                            if (r && s && 2 === s.length && t) {
                                const e = ((e, t) => {
                                    const i = e.lat * (Math.PI / 180),
                                        a = t.lat * (Math.PI / 180),
                                        r = a - i,
                                        n = (t.long - e.long) * (Math.PI / 180);
                                    return 7917.6 * Math.asin(Math.sqrt(Math.sin(r / 2) * Math.sin(r / 2) + Math.cos(i) * Math.cos(a) * Math.sin(n / 2) * Math.sin(n / 2)));
                                })({ lat: t.coords.latitude, long: t.coords.longitude }, { lat: s[1], long: s[0] });
                                return a.createElement(
                                    n.Z,
                                    null,
                                    a.createElement(o.ZP, null, r),
                                    a.createElement(
                                        o.ZP,
                                        null,
                                        ((e, t = "us") => {
                                            if (L.find((e) => e === t.toLowerCase())) return Z.format(e);
                                            {
                                                const t = 1.609344 * e;
                                                return I.format(t);
                                            }
                                        })(e, i),
                                    ),
                                );
                            }
                        }),
                        (this._renderPlace = (e) => {
                            const { selectedLocation: t } = this.state;
                            return a.createElement(s.Z, { actionSubText: this._renderPlaceSubtext(e), actionText: e.place.full_name, isSelected: e.place.id === t?.place.id, key: e.place.id, onClick: this._handlePlaceClick(e), selectable: !0 });
                        }),
                        (this._renderPlaces = (e) => (e.length ? e.map((e) => this._renderPlace(e)) : a.createElement(o.ZP, { align: "center", style: Q.noPlacesText }, V))),
                        (this._renderAttributionIfNeeded = () => {
                            const e = this._getActiveResults();
                            return e?.attributions.has(_.xt.foursquare) ? a.createElement(b.default, { style: Q.foursquareIcon }) : null;
                        }),
                        (this._renderResults = () => {
                            const { query: e, showSearchForButton: t } = this.state,
                                i = this._selectResults();
                            return a.createElement(r.Z, null, this._renderPlaces(i), t ? a.createElement(s.Z, { actionText: z({ query: e }), onClick: this._handleSubmit, textColor: "primary" }) : null, this._renderAttributionIfNeeded());
                        }),
                        (this._renderRightControl = () => a.createElement(r.Z, { style: Q.actionButtonContainer }, a.createElement(d.ZP, { onPress: this._handleRemove, size: "small", style: Q.actionButton, type: "primaryText" }, O), a.createElement(d.ZP, { onPress: this._handleDone, size: "small", style: Q.actionButton, type: "primaryFilled" }, k))),
                        (this._renderGeoPicker = () => {
                            const { history: e, initialFetchStatus: t, lastSearchFetchStatus: i } = this.props,
                                { activeResultSet: r } = this.state,
                                n = r === _.Z0.initial ? t : i;
                            return a.createElement(g.Z, { appBarRef: this._appBarRef, history: e, onBackClick: this._handleBack, rightControl: this._renderRightControl(), title: W }, a.createElement(l.Z, { Icon: m.default, onChange: this._handleChange, onClear: this._handleClear, onSubmitEditing: this._handleSubmit, placeholder: G, style: Q.search, withClearButton: !0 }), a.createElement(f.Z, { fetchStatus: n === w.ZP.NONE ? w.ZP.LOADING : n, onRequestRetry: this._handleRetry, render: this._renderResults, retryMessage: H }));
                        }),
                        (this._renderLocationDisabledPrompt = () => {
                            const { geoLocationError: e } = this.state;
                            let t = F,
                                i = U;
                            return e && e.code === y.M.PERMISSION_DENIED && ((t = x), (i = M)), a.createElement(c.Z, { actionLabel: N, graphic: S.default, headline: t, onAction: this._handleLocationDisabledPromptDismiss, onClose: this._handleLocationDisabledPromptDismiss, subtext: i });
                        });
                    const { autotaggedLocation: t, initialResults: i, taggedLocation: u } = e;
                    u ? (this.state.selectedLocation = u) : i && (this.state.selectedLocation = t);
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
        122421: (e, t, i) => {
            i.r(t), i.d(t, { Recipients: () => L, default: () => k });
            var a = i(202784),
                r = i(325686),
                n = i(420412),
                o = i(844685),
                s = i(96083),
                d = i(731708),
                l = i(154003),
                c = i(674132),
                u = i.n(c),
                h = i(166852),
                p = i(980407),
                b = i(240089),
                m = i(62857),
                S = i(735e3),
                f = i(293115),
                g = i(615027),
                y = i(24949),
                _ = i(47743),
                w = i(668214),
                C = i(390387),
                E = i(632960);
            const D = (e, t) => t.location.state,
                v = (e, t) => {
                    const i = D(0, t);
                    return i && i.inReplyToStatus;
                },
                A = (e, t) => {
                    const i = D(0, t);
                    return (i && i.excludedRecipients) || (0, S.o)();
                },
                B = (0, w.Z)()
                    .propsFromState(() => ({ recipientIds: (0, y.P1)(v, C._h, (e, t) => (e && t ? (0, _.YT)({ inReplyToStatus: e, viewerUserId: t, excludeReplyUser: !0 }).map((e) => e.id_str) : (0, S.o)())), initialExcludedRecipients: A, inReplyToStatus: v }))
                    .propsFromActions(() => ({ updateExcludedRecipientsV2: E.OO })),
                T = u().c55eed72,
                R = u().b772cd66,
                P = u().caca3102,
                Z = u().c6a6dc2f,
                I = { page: "compose", section: "recipients" },
                L = ({ history: e, inReplyToStatus: t, initialExcludedRecipients: i, recipientIds: c, updateExcludedRecipientsV2: u }) => {
                    const [y, _] = a.useState(i);
                    if (!t) return a.createElement(g.Z, { to: "/compose/post" });
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
                        v = () => (c.length > 1 ? a.createElement(s.Z, { checked: 0 === y.length, onChange: C }) : null),
                        A = ({ isBlocking: e, screenName: t }) => (e ? a.createElement(d.ZP, { color: "magenta500", size: "subtext2" }, Z({ screenName: t })) : null),
                        B = (e) => {
                            if (!t) return null;
                            const { user: i } = t.retweeted_status || t,
                                r = -1 !== y.indexOf(e),
                                n = e === i.id_str,
                                o = a.createElement(s.Z, { checked: !r, disabled: n, onChange: E(e) });
                            return a.createElement(b.ZP, { bottomControl: A, cellClickable: !n, decoration: o, isFakeButtonRoleWithListItem: !n, key: e, onClick: E(e), promotedItemType: "users", userId: e, withLink: !1 });
                        };
                    return a.createElement(f.nO, { namespace: I }, a.createElement(p.Z, { backLocation: "/compose/post", history: e, onBackClick: D, rightControl: a.createElement(l.ZP, { onPress: D, size: "xSmall", type: "brandFilled" }, R), title: T }, B(w.id_str), c.length ? a.createElement(r.Z, null, a.createElement(n.Z, null), a.createElement(o.Z, { rightControl: v(), text: P }), a.createElement(m.Z, { renderUserCell: B, userIds: c })) : null));
                },
                k = B(L);
        },
        379069: (e, t, i) => {
            i.r(t), i.d(t, { Compose: () => Ne, default: () => Ge });
            i(136728);
            var a = i(202784),
                r = i(360917),
                n = i.n(r),
                o = i(928316),
                s = i(325686),
                d = i(154003),
                l = i(822399),
                c = i(537392),
                u = i(529356),
                h = i(386802),
                p = i(392237),
                b = i(674132),
                m = i.n(b),
                S = i(912021),
                f = i(744531),
                g = i(731708);
            function y(e) {
                const t = e - new Date().getTime(),
                    i = 1e3 * Math.round(t < 0 ? 0 : t / 1e3),
                    a = new Date(i).toLocaleString("default", { minute: "numeric", second: "numeric" }),
                    [r, n] = a.split(":");
                return { minutes: +r, seconds: +n, formatted: a };
            }
            const _ = ({ "aria-label": e, expiration: t, getAccessibilityLiveLabel: i, onTimeElapsed: r }) => {
                    const n = a.useRef(i),
                        o = a.useRef(r);
                    (n.current = i), (o.current = r);
                    const [d, l] = a.useState(() => y(+t)),
                        [c, u] = a.useState(() => i?.(d));
                    a.useEffect(() => {
                        const e = setInterval(() => {
                            const i = y(+t),
                                a = n.current?.(i);
                            u(a), l(i), "00:00" === i.formatted && (clearInterval(e), o.current?.());
                        }, 500);
                        return () => clearInterval(e);
                    }, [t]);
                    const h = "function" == typeof e ? e(d) : e;
                    return a.createElement(s.Z, { style: w.root }, a.createElement(g.ZP, { "aria-label": h && `${h}`, color: "gray900", testID: "displayedCountdown", weight: "medium" }, d.formatted, c && a.createElement(s.Z, { "aria-label": c, "aria-live": "polite" })));
                },
                w = p.default.create((e) => ({ root: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space2, paddingBottom: e.spaces.space4, paddingEnd: 6, paddingStart: 6, paddingTop: e.spaces.space4 } }));
            var C = i(980407),
                E = i(231214),
                D = i(472826),
                v = i(632552),
                A = i(10656),
                B = i(96206),
                T = i(293115),
                R = i(349745),
                P = i(704279),
                Z = i(346789),
                I = i(24949),
                L = i(370751),
                k = i(71620),
                x = i(646522),
                M = i(668214),
                F = i(492057),
                U = i(669002),
                V = i(175856),
                N = i(497294),
                O = i(709318),
                G = i(872788),
                H = i(964917),
                W = i(137204),
                z = i(632960),
                q = i(836255),
                Q = i(919022);
            const j = (e) => z.tS(e, ""),
                Y = (e) => z.WQ(e, ""),
                $ = (e) => z.Gz(e, ""),
                K = (e) => z.SJ(e, ""),
                J = (e) => (t, i) => {
                    const a = ((e, t) => t.location.state)(0, i);
                    return a ? e(a) : void 0;
                },
                X = (e, t) => t.activeUser || Q.ZP.selectViewerUser(e),
                ee = (e, t) => {
                    const {
                        location: { query: i },
                    } = t;
                    return i && "string" == typeof i.in_reply_to ? i.in_reply_to : void 0;
                },
                te = J((e) => e.inReplyToStatusId),
                ie = (e, t) => {
                    const i = ee(0, t) || te(e, t);
                    return i ? q.Z.selectHydrated(e, i) : void 0;
                },
                ae = (e, t) => t.location.pathname.indexOf("/intent/") > -1,
                re = J((e) => e.defaultText),
                ne = (e, t) => {
                    const i = re(e, t);
                    return (0, x.Z)(t.location) || i;
                },
                oe = J((e) => e.quotedStatus),
                se = (e, t) => (t.quotedStatus ? t.quotedStatus : oe(e, t)),
                de = ({ cardUrl: e, mediaIds: t, ...i }) => i,
                le = J((e) => e.isSelfThreadReply),
                ce = J((e) => e.hideUnsentTweetsButton),
                ue = J((e) => e.headingSubtitle),
                he = J((e) => e.headingTitle),
                pe = J((e) => !!e.previousTweetId),
                be = J((e) => e.editableUntil);
            function me(e, t) {
                const { previousPath: i, selectedCommunityId: a } = t.location.state || {};
                let r;
                const n = (0, O.br)(e);
                if ((a ? (r = a) : i && i.includes("/home") && n.type === G.FO.COMMUNITY && (r = n.id), r)) {
                    const t = (0, F.BL)(e, { communityId: r });
                    if (t && "NonMember" !== t.role) return t;
                }
            }
            function Se(e, t) {
                const { previousPath: i, selectedCommunityId: a } = t.location.state || {},
                    r = (0, O.br)(e);
                let n;
                if ((a ? (n = a) : i && i.includes("/home") && r.type === G.FO.COMMUNITY && (n = r.id), n)) {
                    const t = (0, F.BL)(e, { communityId: n });
                    return !(!t || "NonMember" !== t.role);
                }
                return !1;
            }
            const fe = J((e) => e.trustedFriendsValue),
                ge = J((e) => e.previousTweetId),
                ye = (e, t) => {
                    const i = ge(e, t);
                    return i ? q.Z.createHydratedSelector(e)(i) : null;
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
                            (e, t, i, a) => (e ? (0, v.CB)(e, i, a) : t),
                        ),
                        broadcastCommunityTweet: K,
                        composerData: (0, I.P1)(j, ne, se, N.gz, ae, (e, t, i, a, r) =>
                            e.map((e, n) => {
                                const o = (0, L.Z)(e.mediaIds || []),
                                    s = a.filter((e) => o.has(e.id));
                                return { ...de(e), media: s, quotedStatus: 0 === n ? i : void 0, text: 0 === n && t && !r ? t : e.text };
                            }),
                        ),
                        composeSemanticCoreId: J((e) => e.composeSemanticCoreId),
                        draftTweets: U.Fq,
                        editableUntil: be,
                        hideUnsentTweetsButton: ce,
                        inReplyToStatus: ie,
                        inReplyToStatusId: ee,
                        isEdit: pe,
                        isIntentRoute: ae,
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
                    .propsFromActions(() => ({ createDraftTweetApiErrorHandler: (0, k.zr)(U.CA), createScheduledTweetApiErrorHandler: (0, k.zr)(H.Hf), fetchScheduledTweets: H.FP, fetchDraftTweets: U.Le, addCommunityAudienceEducationFlag: () => (0, V.pj)(V.xH), updateAudienceControlsValue: z.sU, setActiveParentKey: z.jr }));
            var Ce = i(837880);
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
                Le = m().dc295bb0,
                ke = m().e536de22,
                xe = m().cb817dae,
                Me = "compose",
                Fe = { page: Me },
                Ue = { page: Me, section: "reply" },
                Ve = { context: "compose_intent_logged_in" };
            class Ne extends a.Component {
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
                                { activeUser: i, audienceControlsValue: r, composerData: n, inReplyToStatus: o, isEdit: l, isSelfThreadReply: c, isSending: u } = this.props,
                                h = "all" === r.conversationControlsValue,
                                p = !e || u || !i || this.is_uploading;
                            return a.createElement(s.Z, { style: Oe.rightControlContainer }, l ? this._renderCountdownTimer() : a.createElement(Z.Z, { disabled: p, isAudienceAll: h, isComposerValid: e, isEdit: !!l, isModal: t, isQuote: this.isQuoteTweet, isReply: !!o, isRetweet: !!this.isRetweet, isScheduled: this.isScheduled, isSelfThreadReply: !!c, isThread: this.isThread, onTweetWithBoostPress: this._handleSendTweetWithBoost, renderFallback: this._renderDraftsHeading, shouldShow: !t, tweetText: n[0].text, viewer: i }), t ? null : a.createElement(d.ZP, { disabled: p, onPress: this._handleSendTweet, size: "small", testID: Re, type: "brandFilled" }, (0, v.of)({ inReplyToStatus: !!o, isSelfThreadReply: !!c, isQuoteTweet: !!this.isQuoteTweet, isRetweet: !!this.isRetweet, isScheduled: !!this.isScheduled, isThread: this.isThread, isEdit: !!l })));
                        }),
                        (this._renderHeaderWithProgressBar = (e) => {
                            const { isModal: t } = this.context,
                                { isAutoSaving: i, isSending: r, sendingProgress: n } = this.props;
                            return a.createElement(a.Fragment, null, a.createElement(l.Z, { progress: r && !i ? Math.max(n, 0.02) : 0, style: [Oe.progressBar, t && Oe.progressBarModal] }), e);
                        }),
                        (this._renderDraftsHeading = () => {
                            const { hideUnsentTweetsButton: e } = this.props;
                            if (!e) return a.createElement(d.ZP, { onPress: this._handleOpenUnsent, size: "small", testID: "unsentButton", type: "brandText" }, Ze);
                        }),
                        (this._renderCountdownTimer = () => {
                            const { editableUntil: e } = this.props,
                                { editCountdownShown: t } = this.state;
                            if (!t || !e) return null;
                            return a.createElement(_, {
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
                    const { activeUser: e, broadcastCommunityTweet: t, createDraftTweetApiErrorHandler: i, createScheduledTweetApiErrorHandler: a, editableUntil: r, fetchDraftTweets: n, fetchScheduledTweets: o, history: s, inReplyToStatus: d, isEdit: l, location: c, selectedCommunity: u, selectedTrustedFriendsValue: h, updateAudienceControlsValue: p } = this.props;
                    (this._unlockReload = B.Z.acquire()), s.setModalRouteBreakpoint(s.location), e && (o().catch(a()), n().catch(i())), u && (p({ _type: "community_members", communityIdValue: u.id_str, conversationControlsValue: "community_members", broadcast: t }, "modal"), s.replace({ pathname: c.pathname, state: (0, f.Z)(c.state || {}, "selectedCommunityId") })), h && (p({ _type: "trusted_friends_tweet", trustedFriendsValue: h, conversationControlsValue: "trusted_friends_tweet" }, "modal"), s.replace({ pathname: c.pathname, state: (0, f.Z)(c.state || {}, "trustedFriendsValue") })), d?.exclusivity_info ? p({ _type: "super_followers_exclusive", conversationControlsValue: "super_followers_exclusive", exclusivityControlValue: {} }) : d?.community_id_str ? p({ _type: "community_members", communityIdValue: d.community_id_str, conversationControlsValue: "community_members" }) : d?.trusted_friends_info && p({ _type: "trusted_friends_tweet", conversationControlsValue: "trusted_friends_tweet", trustedFriendsValue: { trusted_friends_list_id: "1482057446797373440" } });
                    const b = +r;
                    l &&
                        !this._cancelEditTimeout &&
                        b >= 0 &&
                        (this._handleEditCountdownTimeout(b),
                        (this._cancelEditTimeout = (function (e, t) {
                            const i = e - Date.now() - ve,
                                a = (0, Ce.Z)(i, 0, 2147483647),
                                r = setTimeout(t, a, e);
                            return () => clearTimeout(r);
                        })(b, this._handleEditCountdownTimeout)));
                }
                componentWillUnmount() {
                    const { history: e } = this.props;
                    e.setModalRouteBreakpoint(e.location), this._unlockReload(), this._cancelEditTimeout?.();
                }
                render() {
                    const { activeUser: e, composeHeader: t, composeSemanticCoreId: i, history: r, isEdit: n, isIntentRoute: o, location: s, quotedStatus: d, subtitle: l, title: h } = this.props,
                        p = o && !e,
                        { isModal: b } = this.context;
                    return a.createElement(
                        T.nO,
                        { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                        a.createElement(c.ZP, null, ({ containerWidth: o }) => {
                            const c = A.Z.shouldRenderAsModal(o),
                                m = (p && c) || this.showCommunityNonMemberPrompt;
                            return a.createElement(a.Fragment, null, this.showCommunityNonMemberPrompt ? a.createElement(u.Z, { actionLabel: Ie, graphicDisplayMode: "none", headline: Le, onAction: this._handleCloseModal, subtext: ke }) : null, p && a.createElement(E.Z, { history: r, location: s }), m ? null : a.createElement(C.Z, { appBarRef: this._setAppBarRef, documentTitle: Pe, hideBackButton: !1, history: r, onBackClick: this._handleBackClick, renderHeader: this._renderHeaderWithProgressBar, rightControl: this._renderAppBarRightControl(), subtitle: l, title: n ? xe : h }, a.createElement(D.Z, { activeUser: e, composeHeader: t, composeSemanticCoreId: i, containerWidth: o, history: r, isModal: b, location: s, onCloseComposer: this._handleCloseComposer, onHandleAppBarHeight: this._handleAppBarHeight, onRef: this._handleComposeContainerRef, quotedStatus: d, setValidity: this._setValidity })));
                        }),
                    );
                }
                get showCommunityNonMemberPrompt() {
                    const { inReplyToStatus: e, shouldShowNonCommunityMemberPrompt: t } = this.props,
                        i = null == e && !this.isQuoteTweet;
                    return t && i;
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
        15038: (e, t, i) => {
            i.d(t, { ZP: () => c });
            var a = i(202784),
                r = i(325686),
                n = i(950822),
                o = i(392237);
            const s = (e) => (0, n.Z)("div", e);
            class d extends a.Component {
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
                    const { activeStyle: e, allowDragDrop: t, children: i, style: n } = this.props,
                        { active: o } = this.state,
                        d = t ? l.dragBorderValid : l.dragBorderInvalid;
                    return a.createElement(s, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [l.root, n, o && d, o && e] }, a.createElement(r.Z, { style: l.inner }, "function" == typeof i ? i(o) : i));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            d.defaultProps = { allowDragDrop: !0 };
            const l = o.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                c = d;
        },
        449161: (e, t, i) => {
            i.d(t, { Z: () => b });
            var a = i(807896),
                r = i(202784),
                n = i(674132),
                o = i.n(n),
                s = i(154003),
                d = i(950822),
                l = i(392237);
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
                                i = e.target,
                                a = i.files;
                            a.length && t && t(a), (i.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: i, onChange: n, testID: o, ...l } = this.props,
                        h = !(e?.includes("video") || e?.includes("gif"));
                    return r.createElement(r.Fragment, null, r.createElement(s.ZP, (0, a.Z)({ hoverLabel: e ? { label: h ? u : c } : void 0 }, l, { disabled: t, onPress: this._handlePress })), (0, d.Z)("input", { accept: e, disabled: t, multiple: i, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: p.input, tabIndex: -1, testID: o, type: "file" }));
                }
            }
            h.defaultProps = { disabled: !1, multiple: !1 };
            const p = l.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                b = h;
        },
        420412: (e, t, i) => {
            i.d(t, { Z: () => d });
            var a = i(202784),
                r = i(325686),
                n = i(235902),
                o = i(885015),
                s = i(392237);
            function d({ borderColor: e = "borderColor", isSlim: t = !1, label: i }) {
                const { isWebRedesign: d } = n.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? l[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return i ? a.createElement(o.Z, { style: !t && l.root, withGutter: !0 }, a.createElement(r.Z, { style: l.gapColumn }, a.createElement(r.Z, { style: [l.gap, c] })), a.createElement(r.Z, { style: l.gapText }, i), a.createElement(r.Z, { style: l.gapColumn }, a.createElement(r.Z, { style: [l.gap, c] }))) : a.createElement(r.Z, { style: [!t && l.root, d() && l.rootRedesign, l.gap, c] });
            }
            const l = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, i) => {
            i.d(t, { Z: () => l });
            var a = i(807896),
                r = i(202784),
                n = i(325686),
                o = i(392237);
            class s extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: i, ...o } = this.props,
                        s = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, d.column, i && d.withGutterColumn] }));
                    return r.createElement(n.Z, (0, a.Z)({ style: [t, d.root, i && d.withGutter] }, o), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const d = o.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                l = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Compose.474d886a.js.map
