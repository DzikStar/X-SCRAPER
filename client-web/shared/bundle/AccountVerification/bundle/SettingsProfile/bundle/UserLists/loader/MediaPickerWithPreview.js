"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"],
    {
        373554: (e, t, i) => {
            i.d(t, { Z: () => v, h: () => f });
            var a = i(807896),
                r = i(202784),
                s = i(449161),
                o = i(392237),
                n = i(111677),
                l = i.n(n),
                d = i(473026),
                c = i(276259),
                u = i(540387);
            const h = "fileInput",
                p = l().b9960f32,
                m = r.createElement(d.default, null),
                f = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: i }) => (t ? c.v5 : []).concat(e ? [c.Re] : []).concat(i ? u.jn : []);
            const b = o.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                v = function ({ "aria-label": e = p, acceptGifs: t = !0, acceptImages: i = !0, acceptVideo: o = !0, customMimeTypes: n = [], icon: l = m, size: d = "medium", style: c, withIcon: u = !0, ...v }) {
                    const g = f({ acceptGifs: t, acceptImages: i, acceptVideo: o }).concat(n).join(",");
                    return r.createElement(s.Z, (0, a.Z)({}, v, { accept: g, "aria-label": e, icon: u ? l : void 0, size: d, style: [b.root, c], testID: h }));
                };
        },
        751170: (e, t, i) => {
            i.d(t, { A: () => m, Z: () => g });
            var a = i(202784),
                r = i(325686),
                s = i(167630),
                o = i(992942),
                n = i(392237),
                l = i(111677),
                d = i.n(l),
                c = i(205074),
                u = i(364837),
                h = i(908478);
            const p = d().gff1f69e,
                m = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
            class f extends a.Component {
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
                    const { borderRadius: e, enableGif: t, mediaItem: i, onClick: n, resizeMode: l } = this.props,
                        { imagePreviewUrl: d } = this.state || {},
                        c = i.mediaFile && i.mediaFile.isGif && !t && !d,
                        u = i.needsProcessing || c,
                        h = [v.root, b[e], u && v.loadingBorder],
                        m = this._getImageSrc();
                    return a.createElement(r.Z, { onClick: n, style: h }, u || !m ? a.createElement(s.Z, { "aria-label": p, style: v.activityIndicator }) : a.createElement(o.Z, { resizeMode: l, source: m, style: v.image }));
                }
            }
            f.defaultProps = { borderRadius: m.NONE, enableGif: !0, resizeMode: "cover" };
            const b = n.default.create((e) => ({ [m.INFINITE]: { borderRadius: e.borderRadii.infinite }, [m.MEDIUM]: { borderRadius: e.borderRadii.small }, [m.NONE]: { borderRadius: e.borderRadii.none } })),
                v = n.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                g = f;
        },
        304059: (e, t, i) => {
            i.d(t, { Z: () => U });
            var a = i(202784),
                r = i(325686),
                s = i(537392),
                o = i(336961),
                n = i(659651),
                l = i(154003),
                d = i(392237),
                c = i(992942),
                u = i(111677),
                h = i.n(u),
                p = i(678773),
                m = i(597237),
                f = i(254944),
                b = i(837020),
                v = i(276259),
                g = i(443781),
                y = i(10656),
                _ = i(716233),
                P = i(946208),
                E = i(540387),
                w = i(950822),
                I = i(303186),
                D = i(954300);
            class C extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: i, style: r, variants: s, ...o } = this.props,
                        n = (0, I.IM)((0, D.rD)(s), t);
                    return (0, w.Z)("video", { ...o, children: [n.map((e) => a.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: r });
                }
            }
            C.defaultProps = { dataSaverMode: !1, variants: [] };
            var M = i(959587),
                Z = i(751170),
                S = i(523561),
                V = i(195560);
            const R = (0, S.Z)({
                    loader: () =>
                        Promise.all([i.e("icons.2"), i.e("icons.9"), i.e("modules.common-e907d115"), i.e("modules.common-e019dbda"), i.e("icons.14"), i.e("icons.5"), i.e("modules.audio-6107ac1a"), i.e("modules.audio-b953418a"), i.e("modules.audio-7c51e6a7"), i.e("modules.audio-04db59e9"), i.e("modules.audio-76583d6c"), i.e("modules.audio-b7a8a5fb"), i.e("modules.audio-51f6e793"), i.e("modules.audio-e019dbda"), i.e("modules.audio-262c94d4"), i.e("modules.audio-c6fe4ea4"), i.e("icons.17"), i.e("icons.27"), i.e("icons.19"), i.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-85aa903d"), i.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-c8e3a520"), i.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-658f42e4"), i.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-1f16c288"), i.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), i.e("loader.MediaPreviewVideoPlayer")])
                            .then(i.bind(i, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => a.createElement(V.Z, { hasError: e, onRetry: t }),
                }),
                F = h().gd80afba,
                G = h().j322caee,
                x = h().abd845fe,
                L = h().df1b0708,
                B = h().cd959e5c,
                z = h().e68b09b4,
                k = h().add55c98,
                O = h().f350cf46;
            class T extends a.Component {
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
                                        layout: { height: r, width: s },
                                    },
                                } = e,
                                { height: o, width: n } = a,
                                l = n / o;
                            Math.abs(l - s / r) > 0.05 && ("width" === i ? this.setState({ mediaContainerSizeStyle: { width: r * l } }) : "height" === i && this.setState({ mediaContainerSizeStyle: { height: s / l } }));
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
                    const { "aria-label": e, enableGif: t, mediaItem: i, onEdit: d, onEditSensitiveWarning: c, onRemove: u, role: h, style: g, withAltTextLabel: _, withCloseButton: P, withDragAndDropIndicator: E, withEditButton: w, withEditIcon: I, withEditSensitiveWarningButton: D } = this.props,
                        { mediaContainerSizeStyle: C, playGif: Z } = this.state,
                        S = i.externalMediaDetails && i.externalMediaDetails.mediaType === v.Re,
                        V = S || (t && i.mediaFile && i.mediaFile.isGif),
                        R = !!i.mediaFile?.isVideo;
                    return a.createElement(s.ZP, null, ({ windowWidth: t }) => {
                        const i = void 0 !== I ? I : !y.Z.isTwoColumnLayout(t);
                        return a.createElement(r.Z, { "aria-label": e || k, onLayout: this._handleMediaPreviewLayout, role: h, style: [g, A.cursor, S && A.gifPlayButton, C] }, this._renderPreview(), S && !Z && a.createElement(o.Z, { "aria-label": L, onPress: this._handleGifClick, size: "small" }), V ? a.createElement(M.ZP, { type: M.AM }) : null, _ && !R ? a.createElement(n.Z, { align: "left", altLabel: e }) : null, a.createElement(r.Z, { style: A.editMedia }, E ? a.createElement(l.ZP, { "aria-label": O, hoverLabel: { label: O }, icon: a.createElement(p.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, w && D ? a.createElement(l.ZP, { "aria-label": G, icon: a.createElement(m.default, { style: A.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, w ? a.createElement(l.ZP, { "aria-label": F, icon: i ? a.createElement(f.default, null) : void 0, onPress: d, size: i ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, i ? void 0 : x) : null), P ? a.createElement(l.ZP, { "aria-label": B, hoverLabel: { label: z }, icon: a.createElement(b.default, null), onPress: u, size: "small", style: A.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            i = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, i);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : a.createElement(r.Z, { style: d.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: i } = this.state,
                        s = { uri: i ? e : t };
                    return a.createElement(r.Z, { onClick: this._handleGifClick, style: d.default.absoluteFill }, a.createElement(c.Z, { resizeMode: "cover", source: s, style: A.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: i, mediaItem: r, onClick: s } = this.props;
                    return a.createElement(Z.Z, { borderRadius: e, enableGif: t, mediaItem: r, onClick: s, resizeMode: i });
                }
                _renderVideoPreview(e, t, i, r) {
                    const { mediaItem: s } = this.props,
                        o = s.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && r instanceof E.ZP) {
                        let o = [];
                        (0, _.TO)(r.fileHandle) && (o = [{ src: t, type: e }]);
                        const n = s.mediaMetadata?.subtitles,
                            l = s?.trimData;
                        return a.createElement(R, { mediaFile: r, mediaId: String(i), mediaItem: s, subtitles: n, trimData: l, variants: o });
                    }
                    {
                        const i = (0, _.TO)(r.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return a.createElement(C, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: r instanceof E.ZP ? r.thumbnail : "", style: A.video, variants: i }, o?.upload?.mediaFile instanceof P.ZP ? a.createElement("track", { default: !0, kind: "subtitles", label: o.displayName, src: o.upload.mediaFile.vtt, srcLang: o.lang }) : null);
                    }
                }
            }
            (T.contextType = g.rC), (T.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const A = d.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                U = T;
        },
        959587: (e, t, i) => {
            i.d(t, { AM: () => l, ZP: () => h, pX: () => d });
            var a = i(202784),
                r = i(731708),
                s = i(659651),
                o = i(392237),
                n = i(548721);
            const l = "animated_gif",
                d = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: i } = e;
                    let o;
                    if (i === l) o = a.createElement(r.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === i) o = a.createElement(n.default, { "aria-label": "Vine", style: u.icon });
                    else if (i === d && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            i = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        o = a.createElement(r.ZP, { color: "white" }, `${e}:${i}`);
                    }
                    return o ? a.createElement(s.Z, { align: "left" }, o) : null;
                },
                u = o.default.create((e) => ({ icon: { color: e.colors.white } })),
                h = a.memo(c);
        },
        15038: (e, t, i) => {
            i.d(t, { ZP: () => c });
            var a = i(202784),
                r = i(325686),
                s = i(950822),
                o = i(392237);
            const n = (e) => (0, s.Z)("div", e);
            class l extends a.Component {
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
                    const { activeStyle: e, allowDragDrop: t, children: i, style: s } = this.props,
                        { active: o } = this.state,
                        l = t ? d.dragBorderValid : d.dragBorderInvalid;
                    return a.createElement(n, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [d.root, s, o && l, o && e] }, a.createElement(r.Z, { style: d.inner }, "function" == typeof i ? i(o) : i));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            l.defaultProps = { allowDragDrop: !0 };
            const d = o.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                c = l;
        },
        449161: (e, t, i) => {
            i.d(t, { Z: () => m });
            var a = i(807896),
                r = i(202784),
                s = i(111677),
                o = i.n(s),
                n = i(154003),
                l = i(950822),
                d = i(392237);
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
                    const { accept: e, disabled: t, multiple: i, onChange: s, testID: o, ...d } = this.props,
                        h = !(e?.includes("video") || e?.includes("gif"));
                    return r.createElement(r.Fragment, null, r.createElement(n.ZP, (0, a.Z)({ hoverLabel: e ? { label: h ? u : c } : void 0 }, d, { disabled: t, onPress: this._handlePress })), (0, l.Z)("input", { accept: e, disabled: t, multiple: i, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: p.input, tabIndex: -1, testID: o, type: "file" }));
                }
            }
            h.defaultProps = { disabled: !1, multiple: !1 };
            const p = d.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                m = h;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview.372c214a.js.map
