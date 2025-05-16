"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.ComposeMedia-a2dee9c7"],
    {
        873637: (e, t, a) => {
            a.d(t, { Z: () => g });
            var i = a(807896),
                n = a(202784),
                r = a(325686),
                d = a(167630),
                s = a(548485),
                l = a(392237),
                o = a(674132),
                c = a.n(o),
                u = a(205074),
                h = a(653843);
            const p = c().gff1f69e;
            class m extends n.Component {
                constructor(e) {
                    super(e), (this.state = { orientedImage: null });
                }
                componentDidMount() {
                    const { media: e } = this.props,
                        { originalMediaFile: t = {} } = e || {};
                    t &&
                        t instanceof u.ZP &&
                        (0, h.ZP)(t).then((e) =>
                            new u.ZP(e).withDimensionsAndOrientation().then((e) => {
                                this.setState({ orientedImage: e });
                            }),
                        );
                }
                render() {
                    return this.state.orientedImage ? this._renderCropper() : n.createElement(d.Z, { "aria-label": p, style: b.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: a, media: i, withAspectRatioOptions: d, withZoomControl: l } = this.props,
                        { orientedImage: o } = this.state,
                        { cropData: c, originalMediaFile: u = {} } = i || {};
                    return o ? n.createElement(r.Z, { style: b.cropper }, n.createElement(s.Z, { circle: this.props.circle, defaultAspectRatio: (a && a.aspectRatio) || (c && c.aspectRatio) || t, defaultCropData: a || c, image: { src: o.url, width: u.width, height: u.height }, ref: e, withAspectRatioOptions: d, withZoomControl: l })) : null;
                }
            }
            const b = l.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                g = n.forwardRef((e, t) => n.createElement(m, (0, i.Z)({}, e, { cropperRef: t })));
        },
        751170: (e, t, a) => {
            a.d(t, { A: () => m, Z: () => f });
            var i = a(202784),
                n = a(325686),
                r = a(167630),
                d = a(992942),
                s = a(392237),
                l = a(674132),
                o = a.n(l),
                c = a(205074),
                u = a(364837),
                h = a(908478);
            const p = o().gff1f69e,
                m = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
            class b extends i.Component {
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
                    const { borderRadius: e, enableGif: t, mediaItem: a, onClick: s, resizeMode: l } = this.props,
                        { imagePreviewUrl: o } = this.state || {},
                        c = a.mediaFile && a.mediaFile.isGif && !t && !o,
                        u = a.needsProcessing || c,
                        h = [S.root, g[e], u && S.loadingBorder],
                        m = this._getImageSrc();
                    return i.createElement(n.Z, { onClick: s, style: h }, u || !m ? i.createElement(r.Z, { "aria-label": p, style: S.activityIndicator }) : i.createElement(d.Z, { resizeMode: l, source: m, style: S.image }));
                }
            }
            b.defaultProps = { borderRadius: m.NONE, enableGif: !0, resizeMode: "cover" };
            const g = s.default.create((e) => ({ [m.INFINITE]: { borderRadius: e.borderRadii.infinite }, [m.MEDIUM]: { borderRadius: e.borderRadii.small }, [m.NONE]: { borderRadius: e.borderRadii.none } })),
                S = s.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                f = b;
        },
        304059: (e, t, a) => {
            a.d(t, { Z: () => z });
            var i = a(202784),
                n = a(325686),
                r = a(537392),
                d = a(336961),
                s = a(659651),
                l = a(154003),
                o = a(392237),
                c = a(992942),
                u = a(674132),
                h = a.n(u),
                p = a(678773),
                m = a(597237),
                b = a(254944),
                g = a(837020),
                S = a(276259),
                f = a(443781),
                y = a(10656),
                v = a(716233),
                _ = a(946208),
                A = a(540387),
                w = a(950822),
                M = a(303186),
                E = a(954300);
            class C extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: a, style: n, variants: r, ...d } = this.props,
                        s = (0, M.IM)((0, E.rD)(r), t);
                    return (0, w.Z)("video", { ...d, children: [s.map((e) => i.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: n });
                }
            }
            C.defaultProps = { dataSaverMode: !1, variants: [] };
            var I = a(959587),
                D = a(751170),
                T = a(523561),
                P = a(195560);
            const x = (0, T.Z)({
                    loader: () =>
                        Promise.all([
                            a.e("icons.16"),
                            a.e("icons.10"),
                            a.e("modules.common-e907d115"),
                            a.e("modules.common-e019dbda"),
                            a.e("icons.13"),
                            a.e("icons.22"),
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
                            a.e("icons.4"),
                            a.e("icons.26"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2d1eb5e2"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1bce2d5d"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9e2532"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b73bd0e3"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e0a7c12b"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-627162af"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-286dfed9"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-162a9ab0"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-cbd8f64c"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f943ab46"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-91216611"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
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
                Z = h().gd80afba,
                k = h().j322caee,
                B = h().abd845fe,
                F = h().df1b0708,
                R = h().cd959e5c,
                V = h().e68b09b4,
                L = h().add55c98,
                W = h().f350cf46;
            class G extends i.Component {
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
                                        layout: { height: n, width: r },
                                    },
                                } = e,
                                { height: d, width: s } = i,
                                l = s / d;
                            Math.abs(l - r / n) > 0.05 && ("width" === a ? this.setState({ mediaContainerSizeStyle: { width: n * l } }) : "height" === a && this.setState({ mediaContainerSizeStyle: { height: r / l } }));
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
                    const { "aria-label": e, enableGif: t, mediaItem: a, onEdit: o, onEditSensitiveWarning: c, onRemove: u, role: h, style: f, withAltTextLabel: v, withCloseButton: _, withDragAndDropIndicator: A, withEditButton: w, withEditIcon: M, withEditSensitiveWarningButton: E } = this.props,
                        { mediaContainerSizeStyle: C, playGif: D } = this.state,
                        T = a.externalMediaDetails && a.externalMediaDetails.mediaType === S.Re,
                        P = T || (t && a.mediaFile && a.mediaFile.isGif),
                        x = !!a.mediaFile?.isVideo;
                    return i.createElement(r.ZP, null, ({ windowWidth: t }) => {
                        const a = void 0 !== M ? M : !y.Z.isTwoColumnLayout(t);
                        return i.createElement(n.Z, { "aria-label": e || L, onLayout: this._handleMediaPreviewLayout, role: h, style: [f, O.cursor, T && O.gifPlayButton, C] }, this._renderPreview(), T && !D && i.createElement(d.Z, { "aria-label": F, onPress: this._handleGifClick, size: "small" }), P ? i.createElement(I.ZP, { type: I.AM }) : null, v && !x ? i.createElement(s.Z, { align: "left", altLabel: e }) : null, i.createElement(n.Z, { style: O.editMedia }, A ? i.createElement(l.ZP, { "aria-label": W, hoverLabel: { label: W }, icon: i.createElement(p.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, w && E ? i.createElement(l.ZP, { "aria-label": k, icon: i.createElement(m.default, { style: O.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, w ? i.createElement(l.ZP, { "aria-label": Z, icon: a ? i.createElement(b.default, null) : void 0, onPress: o, size: a ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, a ? void 0 : B) : null), _ ? i.createElement(l.ZP, { "aria-label": R, hoverLabel: { label: V }, icon: i.createElement(g.default, null), onPress: u, size: "small", style: O.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            a = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, a);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : i.createElement(n.Z, { style: o.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: a } = this.state,
                        r = { uri: a ? e : t };
                    return i.createElement(n.Z, { onClick: this._handleGifClick, style: o.default.absoluteFill }, i.createElement(c.Z, { resizeMode: "cover", source: r, style: O.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: a, mediaItem: n, onClick: r } = this.props;
                    return i.createElement(D.Z, { borderRadius: e, enableGif: t, mediaItem: n, onClick: r, resizeMode: a });
                }
                _renderVideoPreview(e, t, a, n) {
                    const { mediaItem: r } = this.props,
                        d = r.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && n instanceof A.ZP) {
                        let d = [];
                        (0, v.TO)(n.fileHandle) && (d = [{ src: t, type: e }]);
                        const s = r.mediaMetadata?.subtitles,
                            l = r?.trimData;
                        return i.createElement(x, { mediaFile: n, mediaId: String(a), mediaItem: r, subtitles: s, trimData: l, variants: d });
                    }
                    {
                        const a = (0, v.TO)(n.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return i.createElement(C, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: n instanceof A.ZP ? n.thumbnail : "", style: O.video, variants: a }, d?.upload?.mediaFile instanceof _.ZP ? i.createElement("track", { default: !0, kind: "subtitles", label: d.displayName, src: d.upload.mediaFile.vtt, srcLang: d.lang }) : null);
                    }
                }
            }
            (G.contextType = f.rC), (G.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const O = o.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                z = G;
        },
        507651: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(807896),
                n = a(202784),
                r = a(107267),
                d = a(403556),
                s = a(791632);
            const l = (e) => {
                    const t = (0, r.useHistory)();
                    return n.createElement(d.Z, (0, i.Z)({}, e, { isCompact: (0, s.HD)(t) }));
                },
                o = n.memo(l);
        },
        959587: (e, t, a) => {
            a.d(t, { AM: () => l, ZP: () => h, pX: () => o });
            var i = a(202784),
                n = a(731708),
                r = a(659651),
                d = a(392237),
                s = a(548721);
            const l = "animated_gif",
                o = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: a } = e;
                    let d;
                    if (a === l) d = i.createElement(n.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === a) d = i.createElement(s.default, { "aria-label": "Vine", style: u.icon });
                    else if (a === o && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            a = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        d = i.createElement(n.ZP, { color: "white" }, `${e}:${a}`);
                    }
                    return d ? i.createElement(r.Z, { align: "left" }, d) : null;
                },
                u = d.default.create((e) => ({ icon: { color: e.colors.white } })),
                h = i.memo(c);
        },
        536210: (e, t, a) => {
            a.d(t, { Z: () => Ct });
            var i = a(807896),
                n = a(202784),
                r = a(443781),
                d = (a(136728), a(325686)),
                s = a(154003),
                l = a(731708),
                o = a(674132),
                c = a.n(o),
                u = a(894966),
                h = a(568320),
                p = a(219229),
                m = a(415506),
                b = a(205074),
                g = a(653843),
                S = a(912021),
                f = a(193089),
                y = a(908478),
                v = a(980407),
                _ = a(873637),
                A = a(507651),
                w = a(293115),
                M = a(529356),
                E = a(392237),
                C = a(175856);
            const I = "altTextInput",
                D = "endEditingButton",
                T = "altTextEducationSheetPrimaryAction";
            var P = a(855488),
                x = a(992942),
                Z = a(167630),
                k = a(304059);
            const B = c().gff1f69e;
            const F = E.default.create((e) => ({ activityIndicator: { height: "100%", width: "100%" }, image: { width: "100%", flexGrow: 1 }, mediaContainer: { overflow: "hidden", flexGrow: 1, flexBasis: 0, width: "100%" }, mediaPreviewWrapper: { flexDirection: "column", flexGrow: 1, alignItems: "center", width: "100%", paddingVertical: 25, paddingHorizontal: 25, backgroundColor: e.colors.gray0 } })),
                R = function ({ mediaItem: e, orientedImage: t }) {
                    return n.createElement(d.Z, { style: F.mediaPreviewWrapper }, void 0 === t && e ? n.createElement(k.Z, { imageResizeMode: "contain", mediaItem: e, style: F.mediaContainer, withCloseButton: !1 }) : t ? n.createElement(x.Z, { resizeMode: "contain", source: t.url, style: F.image }) : n.createElement(Z.Z, { "aria-label": B, style: F.activityIndicator }));
                },
                V = E.default.create((e) => ({ formTextInput: { width: "100%", backgroundColor: e.colors.navigationBackground, paddingHorizontal: e.spaces.space12, paddingBottom: 0, borderTopWidth: e.spaces.space1, borderTopStyle: "solid", borderTopColor: e.colors.borderColor }, attachmentContainer: { width: "100%", height: "100%", flexGrow: 1 }, root: { display: "flex", flexDirection: "column", flexWrap: "nowrap", height: "100%", flexGrow: 1 } })),
                L = c().feabf2a0,
                W = c().e36287c6,
                G = c().cf565d08;
            class O extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderInputHelperText = () => {
                            const { onShowEducation: e } = this.props;
                            return e ? n.createElement(l.ZP, { color: "link", onPress: e, withInteractiveStyling: !0 }, G) : null;
                        }),
                        (this._handleChange = (e) => {
                            const { currentMediaId: t, mediaItem: a, onChange: i } = this.props,
                                { value: n } = e.target;
                            a ? i(n, a.id.toString()) : t && i(n, t);
                        });
                }
                render() {
                    const { autofocus: e, maxLength: t, mediaItem: a, orientedImage: i, value: r } = this.props;
                    return n.createElement(d.Z, { style: V.root }, n.createElement(d.Z, { style: V.attachmentContainer }, n.createElement(R, { mediaItem: a, orientedImage: i }), n.createElement(P.Z, { "aria-label": L, autoFocus: e, helperText: this._renderInputHelperText(), label: W, maxLength: t, maxNumberOfLines: 6, multiline: !0, name: "altTextInput", numberOfLines: 2, onChange: this._handleChange, style: V.formTextInput, testID: I, value: r })));
                }
            }
            var z = a(668214);
            const U = (e, t) => (0, C.t5)(e, C.Fs),
                N = (0, z.Z)()
                    .propsFromState(() => ({ showEducationOnMount: U }))
                    .propsFromActions(() => ({ addFlag: C.pj }))
                    .withAnalytics(),
                H = c().ffe9ec3a,
                K = c().j063b262,
                j = c().e57144f0,
                Q = c().f9f9210c;
            class q extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showAltTextEducationSheet: !1 }),
                        (this._handleOpenEducationPrompt = () => {
                            const { analytics: e } = this.props;
                            this.setState({ showAltTextEducationSheet: !0 }), e.scribe({ component: "education", action: "click" });
                        }),
                        (this._handleCloseEducationPrompt = () => {
                            this.setState({ showAltTextEducationSheet: !1 });
                        }),
                        (this._handleEducationPromptPrimaryAction = () => {
                            const { analytics: e } = this.props;
                            this._handleCloseEducationPrompt(), e.scribe({ component: "education", element: "alt_text_button", action: "click" });
                        }),
                        (this._handleEducationPromptSecondaryAction = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        });
                }
                componentDidMount() {
                    const { addFlag: e, analytics: t, showEducationOnMount: a } = this.props;
                    a && (this.setState({ showAltTextEducationSheet: !0 }), t.scribe({ component: "education", action: "open" }), e(C.Fs));
                }
                render() {
                    const { mediaItem: e, onAltTextChange: t, orientedImage: a, value: i } = this.props,
                        { showAltTextEducationSheet: r } = this.state,
                        s = e && e.id.toString();
                    return n.createElement(d.Z, { style: $.root }, r ? n.createElement(M.Z, { actionLabel: j, headline: H, onAction: this._handleEducationPromptPrimaryAction, onClose: this._handleCloseEducationPrompt, onSecondaryAction: this._handleEducationPromptSecondaryAction, primaryButtonTestID: T, secondaryActionLabel: Q, subtext: K }) : null, n.createElement(O, { autofocus: !0, currentMediaId: s, maxLength: 1e3, mediaItem: e, onChange: t, onShowEducation: this._handleOpenEducationPrompt, orientedImage: a, value: i }));
                }
            }
            const $ = E.default.create((e) => ({ root: { flexGrow: 1 } })),
                X = N(q);
            var J = a(352924),
                Y = a(844685),
                ee = a(954110),
                te = a(539432);
            const ae = c().d9f7b32a,
                ie = c().ead1b80a,
                ne = c().faf745fa,
                re = c().b96e6682,
                de = c().h2437f26,
                se = c().g5e1668a,
                le = c().fdc6a52a;
            function oe(e) {
                const { currentWarnings: t, isAllowedVideoDownload: a, mediaItem: i, onWarningChange: r, orientedImage: s, toggleIsAllowedVideoDownload: l } = e,
                    o = [
                        { label: ne, value: "adult_content" },
                        { label: re, value: "graphic_violence" },
                        { label: de, value: "other" },
                    ],
                    c = J.b(),
                    u = n.createElement(R, { mediaItem: i, orientedImage: s }),
                    h = n.useCallback(() => {
                        l?.();
                    }, [l]);
                return n.createElement(
                    d.Z,
                    { style: ce.root },
                    n.createElement(
                        d.Z,
                        { style: ce.modalContainer },
                        t?.size ? n.createElement(te.ZP, { revealableTombstoneConfig: te.ui, sensitiveMediaWarnings: t, withRoundedCorners: !1 }, u) : u,
                        n.createElement(Y.Z, { id: c, subtext: ie, text: ae }),
                        n.createElement(
                            d.Z,
                            { "aria-labelledby": c, role: "group" },
                            o.map(({ label: e, value: a }) => n.createElement(ee.Z, { checked: t && t.has(a), key: a, label: e, name: a, onChange: r })),
                        ),
                        n.createElement(d.Z, null),
                        "boolean" == typeof a && l ? n.createElement(d.Z, { role: "group", style: ce.topBorder }, n.createElement(ee.Z, { checked: a, helpText: le, label: se, name: "download", onChange: h, type: "switch" })) : null,
                    ),
                );
            }
            const ce = E.default.create((e) => ({ modalContainer: { width: "100%", height: "100%", flexGrow: 1 }, root: { display: "flex", flexDirection: "column", flexWrap: "nowrap", height: "100%", flexGrow: 1 }, topBorder: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px" } })),
                ue = E.default.create((e) => ({ root: { flexGrow: 1, flexShrink: 1, paddingBottom: e.spaces.space12 }, rightControl: { display: "flex", flexDirection: "row" }, prevButton: { marginEnd: e.spaces.space2 }, saveButton: { marginStart: e.spaces.space12 }, segmentedControlChildren: { flexGrow: 1 }, leftRightButtons: { alignItems: "center" }, videoTrimmerWrapper: { flexGrow: 1, flexShrink: 1, marginBottom: e.spaces.space20 } }));
            var he = a(513313);
            const pe = { section: "alt_text" },
                me = { section: "crop" },
                be = { section: "sensitive_media" },
                ge = c().e070024a,
                Se = c().i2209530,
                fe = c().i7d24b36,
                ye = c().f96a38a2,
                ve = c().hac7c548,
                _e = c().e3dbfba4,
                Ae = c().dd4a83a6;
            class we extends n.Component {
                constructor(e) {
                    super(e),
                        (this._cropper = n.createRef()),
                        (this._getMemoizedTabMetadata = (0, S.Z)((e, t) => (t && e === he.P.SensitiveMedia ? { namespace: be, title: Ae, renderer: this._renderSensitiveMediaTab } : e === he.P.AltText ? { namespace: pe, title: _e, renderer: this._renderAltTextTab } : { namespace: me, title: ve, renderer: this._renderCropTab }))),
                        (this._renderTabContent = (e) => {
                            const { location: t, sensitiveMediaTabEnabled: a } = this.props,
                                i = this._getMemoizedTabMetadata(e, a),
                                r = !t.state?.hideTabs,
                                s = r ? this._getTabLinks(e) : [],
                                l = i.renderer();
                            return r && s.length > 1 ? n.createElement(n.Fragment, null, n.createElement(A.Z, { "aria-label": ge, links: s }), n.createElement(d.Z, { style: ue.segmentedControlChildren }, l)) : l;
                        }),
                        (this._renderAltTextTab = () => {
                            const { history: e } = this.props,
                                { currentMediaId: t, mediaMetadata: a, orientedImage: i } = this.state,
                                r = this._getCurrentMediaItem(),
                                d = a[t] && a[t].altText;
                            return n.createElement(X, { history: e, key: t, mediaItem: r, onAltTextChange: this._handleAltTextChange, orientedImage: i.get(t), value: d });
                        }),
                        (this._renderCropTab = () => {
                            const { cropData: e, currentMediaId: t } = this.state,
                                a = this._getCurrentMediaItem();
                            return n.createElement(_.Z, { defaultCropData: e.get(t), key: t, media: a, ref: this._cropper, withAspectRatioOptions: !0 });
                        }),
                        (this._renderSensitiveMediaTab = () => {
                            const { currentMediaId: e, mediaMetadata: t, orientedImage: a } = this.state,
                                i = this._getCurrentMediaItem(),
                                r = t[e] && t[e].sensitiveMediaWarning;
                            return n.createElement(oe, { currentWarnings: r, key: e, mediaItem: i, onWarningChange: this._handleSensitiveWarningChange, orientedImage: a.get(e) });
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state,
                                t = this._getNextMediaIndex(1),
                                a = this._getNextMediaIndex(-1);
                            return n.createElement(d.Z, { style: ue.rightControl }, this._hasMediaAtIndex(a) || this._hasMediaAtIndex(t) ? n.createElement(d.Z, { style: [ue.rightControl, ue.leftRightButtons] }, n.createElement(s.ZP, { "aria-label": ye, disabled: !this._hasMediaAtIndex(a), icon: n.createElement(u.default, null), onPress: this._handleClickToMediaAtIndex(a), size: "small", style: ue.prevButton, type: "primaryOutlined" }), n.createElement(s.ZP, { "aria-label": fe, disabled: !this._hasMediaAtIndex(t), icon: n.createElement(h.default, null), onPress: this._handleClickToMediaAtIndex(t), size: "small", type: "primaryOutlined" })) : null, n.createElement(s.ZP, { disabled: e, onPress: this._handleEndEditingClick, size: "small", style: ue.saveButton, testID: D, type: "primaryFilled" }, Se));
                        }),
                        (this._handleCancelEditingClick = (e) => {
                            this._scribeWithNamespace({ action: "cancel" }), e();
                        }),
                        (this._handleClickTab = (e) => {
                            const { analytics: t } = this.props;
                            this._handleSaveCropData(), this._scribeWithNamespace({ element: e, action: "click" }), t.scribePageImpression();
                        }),
                        (this._getCurrentMediaItem = () => {
                            const { media: e } = this.props,
                                { currentMediaId: t } = this.state;
                            return e.find((e) => e.id === t);
                        }),
                        (this._getNextMediaIndex = (e) => {
                            const { media: t } = this.props,
                                a = this._getCurrentMediaItem();
                            return t.indexOf(a) + e;
                        }),
                        (this._hasMediaAtIndex = (e) => {
                            const { media: t } = this.props;
                            return e >= 0 && e < t.length;
                        }),
                        (this._handleClickToMediaAtIndex = (e) => () => {
                            const { location: t, media: a } = this.props;
                            if (this._hasMediaAtIndex(e)) {
                                this._handleSaveCropData();
                                const i = a[e],
                                    n = i.mediaFile?.isGif || i.externalMediaDetails,
                                    r = this._getCurrentTab();
                                if (n && r === he.P.Crop) {
                                    const e = he.P.AltText;
                                    t.state = { ...t.state, tab: e };
                                }
                                this.setState({ currentMediaId: i.id });
                            }
                        }),
                        (this._saveMediaMetadata = () => {
                            const { media: e, setMediaMetadata: t } = this.props,
                                { mediaMetadata: a } = this.state;
                            e.forEach((e) => {
                                t(e.id, a[e.id]);
                            });
                        }),
                        (this._handleEndEditingClick = () => {
                            const { history: e } = this.props,
                                t = this._cropper && this._cropper.current,
                                { cropData: a } = this.state;
                            if (t || a.size) {
                                const { media: e, processMedia: i, updateMediaUpload: n } = this.props,
                                    { currentMediaId: r } = this.state;
                                this.setState({ isProcessing: !0 });
                                let d = a;
                                this._getCurrentMediaItem()?.mediaFile?.isImage && t && (d = (0, f.Z)([...a, [r, t.getCropData()]]));
                                const s = e.map((e) => (d.get(e.id) ? (n({ id: e.id, cropData: d.get(e.id) }), i(e.id)) : Promise.resolve()));
                                Promise.all(s).then(() => {
                                    this._scribeWithNamespace({ action: "done" });
                                });
                            }
                            this._saveMediaMetadata(), e.goBack();
                        }),
                        (this._handleAltTextChange = (e) => {
                            this.setState((t) => ({ mediaMetadata: { ...t.mediaMetadata, [t.currentMediaId]: { ...t.mediaMetadata[t.currentMediaId], altText: e } } }));
                        }),
                        (this._handleSensitiveWarningChange = (e, t) => {
                            this.setState((a) => {
                                const i = (a.mediaMetadata[a.currentMediaId] && a.mediaMetadata[a.currentMediaId].sensitiveMediaWarning) || new Set();
                                return t ? i.add(e) : i.delete(e), { mediaMetadata: { ...a.mediaMetadata, [a.currentMediaId]: { ...a.mediaMetadata[a.currentMediaId], sensitiveMediaWarning: i } } };
                            });
                        }),
                        (this._handleSaveCropData = () => {
                            const e = this._getCurrentMediaItem();
                            if (!e?.mediaFile?.isImage) return;
                            const t = this._cropper && this._cropper.current;
                            if (t) {
                                const { currentMediaId: a } = this.state,
                                    i = t.getCropData();
                                if (e && !(0, y.Z)(i, this.state.cropData.get(a)) && (this.setState((e) => ({ orientedImage: (0, f.Z)([...e.orientedImage, [a, null]]) })), e.originalMediaFile && e.originalMediaFile instanceof b.ZP)) {
                                    const { cropData: t } = e;
                                    (0, g.ZP)(e.originalMediaFile, { cropData: i || t })
                                        .then((e) =>
                                            new b.ZP(e).withDimensionsAndOrientation().then((e) => {
                                                this.setState((t) => ({ orientedImage: (0, f.Z)([...t.orientedImage, [a, e]]), cropData: (0, f.Z)([...t.cropData, [a, i]]) }));
                                            }),
                                        )
                                        .catch(() => {
                                            this.setState((e) => ({ orientedImage: (0, f.Z)([...e.orientedImage, [a, void 0]]) }));
                                        });
                                }
                                this.setState((e) => ({ cropData: (0, f.Z)([...e.cropData, [a, i]]) }));
                            }
                        }),
                        (this._scribeWithNamespace = (e) => {
                            const { analytics: t, sensitiveMediaTabEnabled: a } = this.props,
                                i = this._getCurrentTab(),
                                n = this._getMemoizedTabMetadata(i, a);
                            t.scribe({ ...n.namespace, ...e });
                        }),
                        (this._getMediaMetadata = (e) => {
                            const t = {};
                            return e.forEach((e) => (t[e.id] = e.mediaMetadata)), t;
                        });
                    const { initialMediaId: t, media: a } = e,
                        i = this._getMediaMetadata(a);
                    this.state = { cropData: new Map(), isProcessing: !1, mediaMetadata: i, currentMediaId: t || -1, orientedImage: new Map() };
                }
                render() {
                    const { history: e, sensitiveMediaTabEnabled: t } = this.props,
                        a = this._getCurrentTab(),
                        i = this._getMemoizedTabMetadata(a, t);
                    return n.createElement(w.nO, { namespace: i.namespace }, n.createElement(v.Z, { backButtonType: "back", containerStyle: ue.root, documentTitle: i.title, history: e, onBackClick: this._handleCancelEditingClick, rightControl: this._renderAppBarRightControl(), title: i.title }, this._renderTabContent(a)));
                }
                _getCurrentTab() {
                    const { location: e, sensitiveMediaTabEnabled: t } = this.props,
                        a = e.state?.tab;
                    return t && a === he.P.SensitiveMedia ? he.P.SensitiveMedia : a === he.P.AltText ? he.P.AltText : he.P.Crop;
                }
                _getTabLinks(e) {
                    const { analytics: t, location: a, sensitiveMediaTabEnabled: i } = this.props,
                        r = this._getCurrentMediaItem(),
                        d = [];
                    return r?.originalMediaFile?.isImage && d.push({ to: { ...a, state: { ...a.state, tab: he.P.Crop } }, label: n.createElement(p.default, null), key: he.P.Crop, "aria-label": ve, isActive: () => e === he.P.Crop, onClick: () => t.scribePageImpression() }), d.push({ to: { ...a, state: { ...a.state, tab: he.P.AltText } }, label: n.createElement(l.ZP, { weight: "bold" }, "ALT"), key: he.P.AltText, "aria-label": _e, isActive: () => e === he.P.AltText, onClick: () => this._handleClickTab("alt_text_button") }), i && d.push({ to: { ...a, state: { ...a.state, tab: he.P.SensitiveMedia } }, label: n.createElement(m.default, null), key: he.P.SensitiveMedia, "aria-label": Ae, isActive: () => e === he.P.SensitiveMedia, onClick: () => this._handleClickTab("sensitive_media_tab") }), d;
                }
            }
            const Me = we;
            var Ee = a(815479),
                Ce = a(926981),
                Ie = a(804579),
                De = a(540387),
                Te = a(736063);
            var Pe = a(449161),
                xe = a(38502),
                Ze = a(946208);
            const ke = "fileInput",
                Be = n.createElement(xe.default, null),
                Fe = c().icbec4ae,
                Re = E.default.create((e) => ({ button: { alignSelf: "start" } })),
                Ve = (e) => {
                    const { icon: t = Be, size: a = "medium", style: r, withIcon: s = !0, ...l } = e,
                        o = Ze.Id.join(",");
                    return n.createElement(d.Z, null, n.createElement(Pe.Z, (0, i.Z)({}, l, { accept: o, icon: s ? t : void 0, size: a, style: [Re.button, r], testID: ke, type: "primaryFilled" }), Fe));
                };
            var Le = a(716233),
                We = a(71620),
                Ge = a(661461),
                Oe = a(497294),
                ze = a(390387);
            const Ue = (e) => {
                    const t = (0, ze.VT)(e);
                    return t && (0, Ge.ug)(e, t);
                },
                Ne = (0, z.Z)()
                    .propsFromState(() => ({ language: ze.VT, languageName: Ue }))
                    .propsFromActions(() => ({ addMedia: Oe.rA, createLocalApiErrorHandler: (0, We.zr)("VIDEO_SUBTITLES_UPLOAD"), fetchAvailableLanguagesIfNeeded: Ge.yt, removeMediaUpload: Oe.WU }))
                    .withAnalytics(),
                He = c().bf4e9d7a,
                Ke = c().j435467e,
                je = c().a6b267fa;
            class Qe extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtitlesPickerButton = () => n.createElement(Ve, { onChange: this._handleAddMediaFiles, type: "brandText" })),
                        (this._renderSubtitlesRemovalButton = () => n.createElement(s.ZP, { onPress: this._handleRemoveSubtitles, type: "destructiveOutlined" }, je)),
                        (this._handleRemoveSubtitles = () => {
                            const { onRemove: e } = this.props;
                            e();
                        }),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, analytics: a, language: i, languageName: n, onChange: r } = this.props;
                            a.scribe({ element: "subtitles_upload", action: "click" }),
                                t(e, { location: Le.vC.Tweet }).then((e) => {
                                    r(e[0], i, n);
                                });
                        });
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchAvailableLanguagesIfNeeded: t } = this.props;
                    t().catch(e());
                }
                render() {
                    const { mediaItem: e, subtitles: t } = this.props;
                    return n.createElement(d.Z, { style: qe.root }, n.createElement(d.Z, { style: qe.attachmentContainer }, n.createElement(l.ZP, { size: "title3", style: qe.header, weight: "heavy" }, `${e?.mediaFile?.name || "undefined"}: ${He}`), n.createElement(l.ZP, { size: "body", style: qe.body }, Ke), n.createElement(d.Z, { style: qe.buttonWrapper }, t ? this._renderSubtitlesRemovalButton() : this._renderSubtitlesPickerButton())));
                }
            }
            const qe = E.default.create((e) => ({ root: { display: "flex", flexDirection: "column", flexWrap: "nowrap", flex: 1 }, attachmentContainer: { flex: 1, margin: e.spaces.space16, maxHeight: "100%" }, body: { marginBottom: e.spaces.space28 }, buttonWrapper: { flexDirection: "row", alignItems: "center" }, header: { marginTop: e.spaces.space16, marginBottom: e.spaces.space8 } })),
                $e = Ne(Qe);
            var Xe,
                Je,
                Ye,
                et = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "withAllowVideoDownloadDefaultQuery",
                        selections: [
                            { kind: "RequiredField", field: (Xe = { alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "allow_video_downloads", storageKey: null }], storageKey: null }), action: "THROW" },
                            { kind: "RequiredField", field: { alias: "viewer", args: (Je = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "fetchDownloadSettingAllowed_viewer" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "withAllowVideoDownloadDefaultQuery",
                        selections: [
                            Xe,
                            {
                                alias: "viewer",
                                args: Je,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "LegacyExtendedUserProfile",
                                                                kind: "LinkedField",
                                                                name: "legacy_extended_profile",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "LegacyExtendedBirthDate",
                                                                        kind: "LinkedField",
                                                                        name: "birthdate",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (Ye = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            Ye,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "JDeOuPXWR_b1gp1KozHQ0g", metadata: {}, name: "withAllowVideoDownloadDefaultQuery", operationKind: "query", text: null },
                };
            et.hash = "113710a51cd9d43a9e5b6849142d36cf";
            const tt = et;
            a(585488);
            var at = a(712696),
                it = a.n(at),
                nt = a(111531);
            const rt = tt,
                dt = { section: "subtitles" },
                st = { section: "trimmer" },
                lt = { section: "sensitive_media" },
                ot = c().c91f83ae,
                ct = c().icbec4ae,
                ut = c().e0342f98,
                ht = c().i2209530,
                pt = c().b772cd66,
                mt = c().e0342f98,
                bt = c().e7048e74,
                gt = c().dd4a83a6,
                St = c().ga408160,
                ft = c().dc402134,
                yt = he.P.Subtitles,
                vt = he.P.Trimmer,
                _t = he.P.SensitiveMedia;
            class At extends n.Component {
                constructor(e) {
                    super(e),
                        (this._videoTrimmerRef = n.createRef()),
                        (this._getMemoizedCurrentTabMetadata = (0, S.Z)((e, t, a) => {
                            switch (e) {
                                case vt:
                                    if (t) return { namespace: st, title: ot, renderer: this._renderTrimmerTab };
                                case _t:
                                    if (a) return { namespace: lt, title: gt, renderer: this._renderSensitiveMediaTab };
                                default:
                                    return { namespace: dt, title: ct, renderer: this._renderSubtitlesTab };
                            }
                        })),
                        (this._renderSegmentedControl = () => {
                            const { isVideoTrimmerEnabled: e, location: t, sensitiveMediaTabEnabled: a } = this.props,
                                i = this._getSegmentedControlLinks(),
                                r = this._getMemoizedCurrentTabMetadata(t.state?.tab, e, a);
                            return n.createElement(n.Fragment, null, i.length > 1 ? n.createElement(A.Z, { "aria-label": ot, links: i }) : null, n.createElement(d.Z, { style: ue.segmentedControlChildren }, r.renderer()));
                        }),
                        (this._renderTrimmerTab = () => {
                            const e = this._getCurrentMediaItem(),
                                { trimData: t } = this.state;
                            if (e?.mediaFile && e.mediaFile instanceof De.ZP) {
                                const { mediaFile: a } = e,
                                    i = { duration: 1e3 * a.duration, height: a.height, variants: [{ src: a.url, type: a.type }], width: a.width };
                                return n.createElement(d.Z, { style: ue.videoTrimmerWrapper }, n.createElement(Ee.Z, { defaultTrimData: t, ref: this._videoTrimmerRef, video: i }));
                            }
                        }),
                        (this._addTrimDataToState = () => {
                            const e = this._videoTrimmerRef.current?.getTrimData();
                            e?.endTime && e?.startTime && this.setState({ trimData: { endTime: e.endTime, startTime: e.startTime } });
                        }),
                        (this._saveTrimData = () => {
                            const { processMedia: e, updateMediaUpload: t } = this.props,
                                a = this._getCurrentMediaItem(),
                                i = this._videoTrimmerRef.current?.getTrimData() || this.state.trimData;
                            i && a && (t({ ...a, trimData: { endTime: i.endTime / 1e3, startTime: i.startTime / 1e3 } }), e(a.id));
                        }),
                        (this._renderSubtitlesTab = () => {
                            const { history: e, initialMediaId: t } = this.props,
                                a = this._getCurrentMediaItem(),
                                i = a?.mediaMetadata || { subtitles: void 0 },
                                r = i?.subtitles;
                            return n.createElement($e, { history: e, key: t, mediaItem: a, onChange: this._handleSubtitlesChange, onRemove: this._handleSubtitlesRemove, subtitles: r });
                        }),
                        (this._renderSensitiveMediaTab = () => {
                            const { isUnder18: e } = this.props,
                                { isAllowedDownloadVideo: t, sensitiveMediaWarning: a } = this.state,
                                r = this._getCurrentMediaItem(),
                                d = !e && r?.mediaMetadata?.allowDownloadStatus ? { isAllowedVideoDownload: t, toggleIsAllowedVideoDownload: this._handleToggleAllowVideoDownload } : null;
                            return n.createElement(oe, (0, i.Z)({ currentWarnings: a, mediaItem: r, onWarningChange: this._handleSensitiveWarningChange }, d));
                        }),
                        (this._hasMediaAtIndex = (e) => {
                            const { media: t } = this.props;
                            return e >= 0 && e < t.length;
                        }),
                        (this._getNextMediaIndex = (e) => {
                            const { media: t } = this.props,
                                a = this._getCurrentMediaItem();
                            return t.indexOf(a) + e;
                        }),
                        (this._handleClickToMediaAtIndex = (e) => () => {
                            const { media: t } = this.props;
                            if (this._hasMediaAtIndex(e)) {
                                const a = t[e].id;
                                this.setState({ currentMediaId: a });
                            }
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isVideoTrimmerEnabled: e } = this.props,
                                t = this._getNextMediaIndex(1),
                                a = this._getNextMediaIndex(-1);
                            return n.createElement(d.Z, { style: ue.rightControl }, this._hasMediaAtIndex(a) || this._hasMediaAtIndex(t) ? n.createElement(d.Z, { style: [ue.rightControl, ue.leftRightButtons] }, n.createElement(s.ZP, { "aria-label": ft, disabled: !this._hasMediaAtIndex(a), icon: n.createElement(u.default, null), onPress: this._handleClickToMediaAtIndex(a), size: "small", style: ue.prevButton, type: "primaryOutlined" }), n.createElement(s.ZP, { "aria-label": St, disabled: !this._hasMediaAtIndex(t), icon: n.createElement(h.default, null), onPress: this._handleClickToMediaAtIndex(t), size: "small", type: "primaryOutlined" })) : null, n.createElement(s.ZP, { onPress: this._handleEndEditingClick, size: "small", style: ue.saveButton, type: "primaryFilled" }, e ? ht : pt));
                        }),
                        (this._getCurrentMediaItem = () => {
                            const { initialMediaId: e, media: t } = this.props,
                                a = this.state?.currentMediaId || e;
                            return t.find((e) => e.id === a);
                        }),
                        (this._handleEndEditingClick = () => {
                            const { history: e, isVideoTrimmerEnabled: t, sensitiveMediaTabEnabled: a } = this.props;
                            t && this._saveTrimData(), a && this._saveSensitiveMediaMetadata(), e.goBack();
                        }),
                        (this._saveSubtitles = (e) => {
                            const { setMediaMetadata: t } = this.props,
                                a = this._getCurrentMediaItem();
                            if (!a) return;
                            const i = a?.mediaMetadata || { subtitles: void 0 };
                            t(a.id, { ...i, subtitles: e });
                        }),
                        (this._handleSubtitlesChange = (e, t, a) => {
                            const { analytics: i } = this.props;
                            i.scribe({ element: "subtitles_upload", action: "add" }), this._saveSubtitles({ lang: t, upload: e, displayName: a || mt });
                        }),
                        (this._handleSubtitlesRemove = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ element: "subtitles_upload", action: "remove" }), this._saveSubtitles(void 0);
                        }),
                        (this._saveSensitiveMediaMetadata = () => {
                            const { setMediaMetadata: e } = this.props,
                                { isAllowedDownloadVideo: t, sensitiveMediaWarning: a } = this.state,
                                i = this._getCurrentMediaItem();
                            i && e(i.id, { ...i.mediaMetadata, sensitiveMediaWarning: a, allowDownloadStatus: { allowDownload: t } });
                        }),
                        (this._handleSensitiveWarningChange = (e, t) => {
                            this.setState((a) => {
                                const i = a.sensitiveMediaWarning;
                                return t ? i.add(e) : i.delete(e), { sensitiveMediaWarning: i };
                            });
                        }),
                        (this._handleToggleAllowVideoDownload = () => {
                            this.setState((e) => ({ isAllowedDownloadVideo: !e.isAllowedDownloadVideo }));
                        }),
                        (this._handleClickSensitiveMediaTab = () => {
                            const { analytics: e } = this.props;
                            this._addTrimDataToState(), e.scribePageImpression();
                        });
                    const t = this._getCurrentMediaItem();
                    if (t?.mediaFile && t.mediaFile instanceof De.ZP) {
                        const { mediaFile: a, mediaMetadata: i, trimData: n } = t,
                            r = { endTime: n?.endTime ? 1e3 * n.endTime : 1e3 * a.duration, startTime: n?.startTime ? 1e3 * n.startTime : 0 };
                        this.state = { trimData: r, sensitiveMediaWarning: i?.sensitiveMediaWarning || new Set(), isAllowedDownloadVideo: e.allowDownloadVideoDefault, currentMediaId: t.id };
                    } else this.props.history.replace("/");
                }
                render() {
                    const { history: e, isVideoTrimmerEnabled: t, location: a, sensitiveMediaTabEnabled: i } = this.props,
                        r = this._getMemoizedCurrentTabMetadata(a.state?.tab, t, i);
                    return n.createElement(w.nO, { namespace: r.namespace }, n.createElement(v.Z, { backButtonType: "back", containerStyle: ue.root, documentTitle: r.title, history: e, rightControl: this._renderAppBarRightControl(), title: r.title }, this._renderSegmentedControl()));
                }
                _getSegmentedControlLinks() {
                    const { isVideoTrimmerEnabled: e, location: t, sensitiveMediaTabEnabled: a } = this.props,
                        i = this._getCurrentMediaItem(),
                        r = [];
                    return e && i?.originalMediaFile?.isVideo && r.push({ to: { ...t, state: { ...t.state, tab: vt } }, label: n.createElement(Ce.default, null), key: vt, "aria-label": bt, isActive: () => t.state?.tab === vt }), i?.originalMediaFile?.isVideo && r.push({ to: { ...t, state: { ...t.state, tab: yt } }, label: n.createElement(Ie.default, null), key: yt, "aria-label": ut, isActive: () => t.state?.tab === yt, onClick: this._addTrimDataToState }), a && r.push({ to: { ...t, state: { ...t.state, tab: _t } }, label: n.createElement(m.default, null), key: _t, "aria-label": gt, isActive: () => t.state?.tab === _t, onClick: this._handleClickSensitiveMediaTab }), r;
                }
            }
            const wt = (function (e, t) {
                return n.forwardRef((a, r) => n.createElement(Te.H, { errorConfig: t }, n.createElement(e, (0, i.Z)({}, a, { ref: r }))));
            })(
                ((Mt = At),
                n.forwardRef((e, t) => {
                    const {
                            user_preferences: { allow_video_downloads: a },
                            viewer: r,
                        } = it()(rt, {}),
                        d = (0, nt.Xp)(r);
                    return n.createElement(Mt, (0, i.Z)({}, e, { allowDownloadVideoDefault: a ?? !0, isUnder18: d, ref: t }));
                })),
                { context: "TABBED_VIDEO_EDIT" },
            );
            var Mt;
            const Et = wt;
            const Ct = function (e) {
                const { history: t, initialMediaId: a, media: d } = e,
                    { featureSwitches: s } = n.useContext(r.rC),
                    l = d.filter((e) => e.mediaFile?.isImage || e.mediaFile?.isGif || e.externalMediaDetails),
                    o = d.filter((e) => e.mediaFile?.isVideo),
                    c = d.find((e) => e.id === a),
                    u = !!c?.mediaFile?.isVideo;
                if (d.length <= 0 || !c) return t.replace("/"), null;
                if (u) {
                    const t = s.isTrue("responsive_web_video_trimmer_enabled");
                    return n.createElement(Et, (0, i.Z)({}, e, { isVideoTrimmerEnabled: t, media: o }));
                }
                return n.createElement(Me, (0, i.Z)({}, e, { media: l }));
            };
        },
        661461: (e, t, a) => {
            a.d(t, { Nr: () => p, ug: () => m, yt: () => b });
            var i = a(759851),
                n = a(689048),
                r = a(499627),
                d = a(917799),
                s = a(312771),
                l = a(390387);
            const o = "availableLanguages",
                c = Object.freeze({ REQUEST: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_REQUEST", SUCCESS: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_SUCCESS", FAILURE: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_FAILURE" }),
                u = { fetchStatus: s.ZP.NONE, languages: [] };
            function h(e = u, t) {
                if (!t) return e;
                switch (t.type) {
                    case c.REQUEST:
                        return { ...e, fetchStatus: s.ZP.LOADING };
                    case c.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: s.ZP.FAILED };
                    case c.SUCCESS: {
                        const { meta: a, payload: i } = t,
                            n = a?.lang ? a.lang : "en",
                            r = "undefined" != typeof Intl && Intl.Collator && new Intl.Collator(n),
                            d = r ? (e, t) => r.compare(e.name, t.name) : void 0;
                        return { ...e, languages: i?.slice().sort(d) || [], fetchStatus: s.ZP.LOADED };
                    }
                    default:
                        return e;
                }
            }
            r.Z.register({ [o]: h });
            const p = (e) => e[o].languages,
                m = (e, t) => {
                    const a = (0, n.o)(t).toLowerCase(),
                        i = e[o].languages.find((e) => e.code === a);
                    return i?.name;
                },
                b = () => (e, t) => (t()[o].fetchStatus === s.ZP.LOADED ? Promise.resolve() : e(g())),
                g =
                    () =>
                    (e, t, { api: a }) =>
                        d._O(e, { request: a.withEndpoint(i.Z).fetchSupportedLanguages })({ actionTypes: c, context: "FETCH_AVAILABLE_LANGUAGES", meta: { lang: (0, l.VT)(t()) } });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.ComposeMedia-a2dee9c7.d8fcdaba.js.map
