"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountVerification~bundle.SettingsProfile~loader.MediaPickerWithPreview~bundle.RichTextCompose"],
    {
        373554: (e, a, i) => {
            i.d(a, { Z: () => f, h: () => S });
            var t = i(807896),
                d = i(202784),
                r = i(449161),
                n = i(392237),
                l = i(674132),
                o = i.n(l),
                s = i(473026),
                c = i(276259),
                u = i(540387);
            const b = "fileInput",
                p = o().b9960f32,
                h = d.createElement(s.default, null),
                S = ({ acceptGifs: e, acceptImages: a = !0, acceptVideo: i }) => (a ? c.v5 : []).concat(e ? [c.Re] : []).concat(i ? u.jn : []);
            const m = n.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                f = function ({ "aria-label": e = p, acceptGifs: a = !0, acceptImages: i = !0, acceptVideo: n = !0, customMimeTypes: l = [], icon: o = h, size: s = "medium", style: c, withIcon: u = !0, ...f }) {
                    const v = S({ acceptGifs: a, acceptImages: i, acceptVideo: n }).concat(l).join(",");
                    return d.createElement(r.Z, (0, t.Z)({}, f, { accept: v, "aria-label": e, icon: u ? o : void 0, size: s, style: [m.root, c], testID: b }));
                };
        },
        751170: (e, a, i) => {
            i.d(a, { A: () => h, Z: () => v });
            var t = i(202784),
                d = i(325686),
                r = i(167630),
                n = i(992942),
                l = i(392237),
                o = i(674132),
                s = i.n(o),
                c = i(205074),
                u = i(364837),
                b = i(908478);
            const p = s().gff1f69e,
                h = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
            class S extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imagePreviewUrl: null }),
                        (this._getImageSrc = () => {
                            const { enableGif: e, mediaItem: a } = this.props,
                                { imagePreviewUrl: i } = this.state;
                            if (a && a.mediaFile) return a.mediaFile.isGif && !e ? i : a.mediaFile.url;
                        });
                }
                componentDidUpdate() {
                    const {
                            enableGif: e,
                            mediaItem: { mediaFile: a },
                        } = this.props,
                        { imagePreviewUrl: i } = this.state;
                    e ||
                        i ||
                        (a instanceof c.ZP &&
                            a.isGif &&
                            (0, u.R)(a).then((e) => {
                                this.setState({ imagePreviewUrl: e });
                            }));
                }
                shouldComponentUpdate(e, a) {
                    return !(0, b.Z)(e, this.props) || !(0, b.Z)(a, this.state);
                }
                render() {
                    const { borderRadius: e, enableGif: a, mediaItem: i, onClick: l, resizeMode: o } = this.props,
                        { imagePreviewUrl: s } = this.state || {},
                        c = i.mediaFile && i.mediaFile.isGif && !a && !s,
                        u = i.needsProcessing || c,
                        b = [f.root, m[e], u && f.loadingBorder],
                        h = this._getImageSrc();
                    return t.createElement(d.Z, { onClick: l, style: b }, u || !h ? t.createElement(r.Z, { "aria-label": p, style: f.activityIndicator }) : t.createElement(n.Z, { resizeMode: o, source: h, style: f.image }));
                }
            }
            S.defaultProps = { borderRadius: h.NONE, enableGif: !0, resizeMode: "cover" };
            const m = l.default.create((e) => ({ [h.INFINITE]: { borderRadius: e.borderRadii.infinite }, [h.MEDIUM]: { borderRadius: e.borderRadii.small }, [h.NONE]: { borderRadius: e.borderRadii.none } })),
                f = l.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                v = S;
        },
        304059: (e, a, i) => {
            i.d(a, { Z: () => U });
            var t = i(202784),
                d = i(325686),
                r = i(537392),
                n = i(336961),
                l = i(659651),
                o = i(154003),
                s = i(392237),
                c = i(992942),
                u = i(674132),
                b = i.n(u),
                p = i(678773),
                h = i(597237),
                S = i(254944),
                m = i(837020),
                f = i(276259),
                v = i(443781),
                D = i(10656),
                A = i(716233),
                y = i(946208),
                g = i(540387),
                w = i(950822),
                _ = i(303186),
                P = i(954300);
            class E extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: a } = this.props;
                            a && a(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: a, getVideoRef: i, style: d, variants: r, ...n } = this.props,
                        l = (0, _.IM)((0, P.rD)(r), a);
                    return (0, w.Z)("video", { ...n, children: [l.map((e) => t.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: d });
                }
            }
            E.defaultProps = { dataSaverMode: !1, variants: [] };
            var I = i(959587),
                B = i(751170),
                C = i(523561),
                Z = i(195560);
            const M = (0, C.Z)({
                    loader: () =>
                        Promise.all([
                            i.e("icons.10"),
                            i.e("icons.7"),
                            i.e("icons.5"),
                            i.e("icons.29"),
                            i.e("modules.common-e907d115"),
                            i.e("modules.common-e019dbda"),
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
                            i.e("icons.1"),
                            i.e("icons.13"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2d1eb5e2"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1bce2d5d"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9e2532"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b73bd0e3"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e0a7c12b"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-627162af"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-286dfed9"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-162a9ab0"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-cbd8f64c"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f943ab46"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-91216611"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
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
                    renderPlaceholder: (e, a) => t.createElement(Z.Z, { hasError: e, onRetry: a }),
                }),
                V = b().gd80afba,
                R = b().j322caee,
                F = b().abd845fe,
                x = b().df1b0708,
                G = b().cd959e5c,
                z = b().e68b09b4,
                k = b().add55c98,
                O = b().f350cf46;
            class L extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isVideoPaused: !0, playGif: !1 }),
                        (this._handleGifClick = () => {
                            this.setState({ playGif: !this.state.playGif });
                        }),
                        (this._handleMediaPreviewLayout = (e) => {
                            const { mediaItem: a, resizeIfNeeded: i } = this.props,
                                t = a.mediaFile || a.externalMediaDetails;
                            if (!t) return;
                            const {
                                    nativeEvent: {
                                        layout: { height: d, width: r },
                                    },
                                } = e,
                                { height: n, width: l } = t,
                                o = l / n;
                            Math.abs(o - r / d) > 0.05 && ("width" === i ? this.setState({ mediaContainerSizeStyle: { width: d * o } }) : "height" === i && this.setState({ mediaContainerSizeStyle: { height: r / o } }));
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
                    const { "aria-label": e, enableGif: a, mediaItem: i, onEdit: s, onEditSensitiveWarning: c, onRemove: u, role: b, style: v, withAltTextLabel: A, withCloseButton: y, withDragAndDropIndicator: g, withEditButton: w, withEditIcon: _, withEditSensitiveWarningButton: P } = this.props,
                        { mediaContainerSizeStyle: E, playGif: B } = this.state,
                        C = i.externalMediaDetails && i.externalMediaDetails.mediaType === f.Re,
                        Z = C || (a && i.mediaFile && i.mediaFile.isGif),
                        M = !!i.mediaFile?.isVideo;
                    return t.createElement(r.ZP, null, ({ windowWidth: a }) => {
                        const i = void 0 !== _ ? _ : !D.Z.isTwoColumnLayout(a);
                        return t.createElement(d.Z, { "aria-label": e || k, onLayout: this._handleMediaPreviewLayout, role: b, style: [v, T.cursor, C && T.gifPlayButton, E] }, this._renderPreview(), C && !B && t.createElement(n.Z, { "aria-label": x, onPress: this._handleGifClick, size: "small" }), Z ? t.createElement(I.ZP, { type: I.AM }) : null, A && !M ? t.createElement(l.Z, { align: "left", altLabel: e }) : null, t.createElement(d.Z, { style: T.editMedia }, g ? t.createElement(o.ZP, { "aria-label": O, hoverLabel: { label: O }, icon: t.createElement(p.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, w && P ? t.createElement(o.ZP, { "aria-label": R, icon: t.createElement(h.default, { style: T.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, w ? t.createElement(o.ZP, { "aria-label": V, icon: i ? t.createElement(S.default, null) : void 0, onPress: s, size: i ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, i ? void 0 : F) : null), y ? t.createElement(o.ZP, { "aria-label": G, hoverLabel: { label: z }, icon: t.createElement(m.default, null), onPress: u, size: "small", style: T.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const a = e.externalMediaDetails.previewUrl,
                            i = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(a, i);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : t.createElement(d.Z, { style: s.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, a) {
                    const { playGif: i } = this.state,
                        r = { uri: i ? e : a };
                    return t.createElement(d.Z, { onClick: this._handleGifClick, style: s.default.absoluteFill }, t.createElement(c.Z, { resizeMode: "cover", source: r, style: T.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: a, imageResizeMode: i, mediaItem: d, onClick: r } = this.props;
                    return t.createElement(B.Z, { borderRadius: e, enableGif: a, mediaItem: d, onClick: r, resizeMode: i });
                }
                _renderVideoPreview(e, a, i, d) {
                    const { mediaItem: r } = this.props,
                        n = r.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && d instanceof g.ZP) {
                        let n = [];
                        (0, A.TO)(d.fileHandle) && (n = [{ src: a, type: e }]);
                        const l = r.mediaMetadata?.subtitles,
                            o = r?.trimData;
                        return t.createElement(M, { mediaFile: d, mediaId: String(i), mediaItem: r, subtitles: l, trimData: o, variants: n });
                    }
                    {
                        const i = (0, A.TO)(d.fileHandle) ? [{ content_type: e, url: a }] : [];
                        return t.createElement(E, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: d instanceof g.ZP ? d.thumbnail : "", style: T.video, variants: i }, n?.upload?.mediaFile instanceof y.ZP ? t.createElement("track", { default: !0, kind: "subtitles", label: n.displayName, src: n.upload.mediaFile.vtt, srcLang: n.lang }) : null);
                    }
                }
            }
            (L.contextType = v.rC), (L.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const T = s.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                U = L;
        },
        959587: (e, a, i) => {
            i.d(a, { AM: () => o, ZP: () => b, pX: () => s });
            var t = i(202784),
                d = i(731708),
                r = i(659651),
                n = i(392237),
                l = i(548721);
            const o = "animated_gif",
                s = "video",
                c = (e) => {
                    const { durationInMilliseconds: a, type: i } = e;
                    let n;
                    if (i === o) n = t.createElement(d.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === i) n = t.createElement(l.default, { "aria-label": "Vine", style: u.icon });
                    else if (i === s && a) {
                        const e = Math.trunc(a / 6e4).toString(),
                            i = Math.trunc((a % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        n = t.createElement(d.ZP, { color: "white" }, `${e}:${i}`);
                    }
                    return n ? t.createElement(r.Z, { align: "left" }, n) : null;
                },
                u = n.default.create((e) => ({ icon: { color: e.colors.white } })),
                b = t.memo(c);
        },
        15038: (e, a, i) => {
            i.d(a, { ZP: () => c });
            var t = i(202784),
                d = i(325686),
                r = i(950822),
                n = i(392237);
            const l = (e) => (0, r.Z)("div", e);
            class o extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._dragEnterCount = 0),
                        (this.state = { active: !1 }),
                        (this._handleDragDrop = (e) => {
                            const { onFilesAdded: a } = this.props;
                            e.preventDefault();
                            a(Array.from(e && e.dataTransfer.files)), this._updateDragCount(0);
                        }),
                        (this._handleDragEnter = (e) => {
                            const { onDragEnter: a } = this.props;
                            e.preventDefault(), a && a(), this._updateDragCount(this._dragEnterCount + 1);
                        }),
                        (this._handleDragLeave = (e) => {
                            e.preventDefault(), this._updateDragCount(this._dragEnterCount - 1);
                        }),
                        (this._handleDragOver = (e) => {
                            e.preventDefault();
                        });
                }
                render() {
                    const { activeStyle: e, allowDragDrop: a, children: i, style: r } = this.props,
                        { active: n } = this.state,
                        o = a ? s.dragBorderValid : s.dragBorderInvalid;
                    return t.createElement(l, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [s.root, r, n && o, n && e] }, t.createElement(d.Z, { style: s.inner }, "function" == typeof i ? i(n) : i));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            o.defaultProps = { allowDragDrop: !0 };
            const s = n.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                c = o;
        },
        449161: (e, a, i) => {
            i.d(a, { Z: () => h });
            var t = i(807896),
                d = i(202784),
                r = i(674132),
                n = i.n(r),
                l = i(154003),
                o = i(950822),
                s = i(392237);
            const c = n().i5450bec,
                u = n().f7432494;
            class b extends d.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: a } = this.props;
                            a && a(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: a } = this.props,
                                i = e.target,
                                t = i.files;
                            t.length && a && a(t), (i.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: a, multiple: i, onChange: r, testID: n, ...s } = this.props,
                        b = !(e?.includes("video") || e?.includes("gif"));
                    return d.createElement(d.Fragment, null, d.createElement(l.ZP, (0, t.Z)({ hoverLabel: e ? { label: b ? u : c } : void 0 }, s, { disabled: a, onPress: this._handlePress })), (0, o.Z)("input", { accept: e, disabled: a, multiple: i, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: p.input, tabIndex: -1, testID: n, type: "file" }));
                }
            }
            b.defaultProps = { disabled: !1, multiple: !1 };
            const p = s.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                h = b;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountVerification~bundle.SettingsProfile~loader.MediaPickerWithPreview~bundle.RichTextCompose.c42ff9ea.js.map
