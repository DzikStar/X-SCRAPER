"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountVerification~bundle.SettingsProfile~loader.MediaPickerWithPreview"],
    {
        373554: (e, t, a) => {
            a.d(t, { Z: () => g, h: () => f });
            var i = a(807896),
                r = a(202784),
                o = a(449161),
                s = a(392237),
                l = a(111677),
                d = a.n(l),
                n = a(473026),
                c = a(276259),
                u = a(540387);
            const h = "fileInput",
                p = d().b9960f32,
                m = r.createElement(n.default, null),
                f = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: a }) => (t ? c.v5 : []).concat(e ? [c.Re] : []).concat(a ? u.jn : []);
            const b = s.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                g = function ({ "aria-label": e = p, acceptGifs: t = !0, acceptImages: a = !0, acceptVideo: s = !0, customMimeTypes: l = [], icon: d = m, size: n = "medium", style: c, withIcon: u = !0, ...g }) {
                    const v = f({ acceptGifs: t, acceptImages: a, acceptVideo: s }).concat(l).join(",");
                    return r.createElement(o.Z, (0, i.Z)({}, g, { accept: v, "aria-label": e, icon: u ? d : void 0, size: n, style: [b.root, c], testID: h }));
                };
        },
        751170: (e, t, a) => {
            a.d(t, { A: () => m, Z: () => v });
            var i = a(202784),
                r = a(325686),
                o = a(167630),
                s = a(992942),
                l = a(392237),
                d = a(111677),
                n = a.n(d),
                c = a(205074),
                u = a(364837),
                h = a(908478);
            const p = n().gff1f69e,
                m = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
            class f extends i.Component {
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
                    const { borderRadius: e, enableGif: t, mediaItem: a, onClick: l, resizeMode: d } = this.props,
                        { imagePreviewUrl: n } = this.state || {},
                        c = a.mediaFile && a.mediaFile.isGif && !t && !n,
                        u = a.needsProcessing || c,
                        h = [g.root, b[e], u && g.loadingBorder],
                        m = this._getImageSrc();
                    return i.createElement(r.Z, { onClick: l, style: h }, u || !m ? i.createElement(o.Z, { "aria-label": p, style: g.activityIndicator }) : i.createElement(s.Z, { resizeMode: d, source: m, style: g.image }));
                }
            }
            f.defaultProps = { borderRadius: m.NONE, enableGif: !0, resizeMode: "cover" };
            const b = l.default.create((e) => ({ [m.INFINITE]: { borderRadius: e.borderRadii.infinite }, [m.MEDIUM]: { borderRadius: e.borderRadii.small }, [m.NONE]: { borderRadius: e.borderRadii.none } })),
                g = l.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                v = f;
        },
        304059: (e, t, a) => {
            a.d(t, { Z: () => U });
            var i = a(202784),
                r = a(325686),
                o = a(537392),
                s = a(336961),
                l = a(659651),
                d = a(154003),
                n = a(392237),
                c = a(992942),
                u = a(111677),
                h = a.n(u),
                p = a(678773),
                m = a(597237),
                f = a(254944),
                b = a(837020),
                g = a(276259),
                v = a(443781),
                D = a(10656),
                y = a(716233),
                P = a(946208),
                _ = a(540387),
                w = a(950822),
                E = a(303186),
                M = a(954300);
            class I extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: a, style: r, variants: o, ...s } = this.props,
                        l = (0, E.IM)((0, M.rD)(o), t);
                    return (0, w.Z)("video", { ...s, children: [l.map((e) => i.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: r });
                }
            }
            I.defaultProps = { dataSaverMode: !1, variants: [] };
            var C = a(959587),
                Z = a(751170),
                k = a(523561),
                S = a(195560);
            const V = (0, k.Z)({
                    loader: () =>
                        Promise.all([a.e("icons.21"), a.e("icons.16"), a.e("icons.10"), a.e("icons.4"), a.e("modules.common-e907d115"), a.e("modules.common-e019dbda"), a.e("icons.28"), a.e("icons.24"), a.e("modules.audio-6107ac1a"), a.e("modules.audio-b953418a"), a.e("modules.audio-7c51e6a7"), a.e("modules.audio-04db59e9"), a.e("modules.audio-76583d6c"), a.e("modules.audio-b7a8a5fb"), a.e("modules.audio-51f6e793"), a.e("modules.audio-e019dbda"), a.e("modules.audio-262c94d4"), a.e("modules.audio-c6fe4ea4"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"), a.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"), a.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"), a.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"), a.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"), a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), a.e("loader.MediaPreviewVideoPlayer")])
                            .then(a.bind(a, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => i.createElement(S.Z, { hasError: e, onRetry: t }),
                }),
                G = h().gd80afba,
                R = h().j322caee,
                F = h().abd845fe,
                x = h().df1b0708,
                A = h().cd959e5c,
                B = h().e68b09b4,
                z = h().add55c98,
                O = h().f350cf46;
            class L extends i.Component {
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
                                        layout: { height: r, width: o },
                                    },
                                } = e,
                                { height: s, width: l } = i,
                                d = l / s;
                            Math.abs(d - o / r) > 0.05 && ("width" === a ? this.setState({ mediaContainerSizeStyle: { width: r * d } }) : "height" === a && this.setState({ mediaContainerSizeStyle: { height: o / d } }));
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
                    const { "aria-label": e, enableGif: t, mediaItem: a, onEdit: n, onEditSensitiveWarning: c, onRemove: u, role: h, style: v, withAltTextLabel: y, withCloseButton: P, withDragAndDropIndicator: _, withEditButton: w, withEditIcon: E, withEditSensitiveWarningButton: M } = this.props,
                        { mediaContainerSizeStyle: I, playGif: Z } = this.state,
                        k = a.externalMediaDetails && a.externalMediaDetails.mediaType === g.Re,
                        S = k || (t && a.mediaFile && a.mediaFile.isGif),
                        V = !!a.mediaFile?.isVideo;
                    return i.createElement(o.ZP, null, ({ windowWidth: t }) => {
                        const a = void 0 !== E ? E : !D.Z.isTwoColumnLayout(t);
                        return i.createElement(r.Z, { "aria-label": e || z, onLayout: this._handleMediaPreviewLayout, role: h, style: [v, T.cursor, k && T.gifPlayButton, I] }, this._renderPreview(), k && !Z && i.createElement(s.Z, { "aria-label": x, onPress: this._handleGifClick, size: "small" }), S ? i.createElement(C.ZP, { type: C.AM }) : null, y && !V ? i.createElement(l.Z, { align: "left", altLabel: e }) : null, i.createElement(r.Z, { style: T.editMedia }, _ ? i.createElement(d.ZP, { "aria-label": O, hoverLabel: { label: O }, icon: i.createElement(p.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, w && M ? i.createElement(d.ZP, { "aria-label": R, icon: i.createElement(m.default, { style: T.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, w ? i.createElement(d.ZP, { "aria-label": G, icon: a ? i.createElement(f.default, null) : void 0, onPress: n, size: a ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, a ? void 0 : F) : null), P ? i.createElement(d.ZP, { "aria-label": A, hoverLabel: { label: B }, icon: i.createElement(b.default, null), onPress: u, size: "small", style: T.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            a = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, a);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : i.createElement(r.Z, { style: n.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: a } = this.state,
                        o = { uri: a ? e : t };
                    return i.createElement(r.Z, { onClick: this._handleGifClick, style: n.default.absoluteFill }, i.createElement(c.Z, { resizeMode: "cover", source: o, style: T.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: a, mediaItem: r, onClick: o } = this.props;
                    return i.createElement(Z.Z, { borderRadius: e, enableGif: t, mediaItem: r, onClick: o, resizeMode: a });
                }
                _renderVideoPreview(e, t, a, r) {
                    const { mediaItem: o } = this.props,
                        s = o.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && r instanceof _.ZP) {
                        let s = [];
                        (0, y.TO)(r.fileHandle) && (s = [{ src: t, type: e }]);
                        const l = o.mediaMetadata?.subtitles,
                            d = o?.trimData;
                        return i.createElement(V, { mediaFile: r, mediaId: String(a), mediaItem: o, subtitles: l, trimData: d, variants: s });
                    }
                    {
                        const a = (0, y.TO)(r.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return i.createElement(I, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: r instanceof _.ZP ? r.thumbnail : "", style: T.video, variants: a }, s?.upload?.mediaFile instanceof P.ZP ? i.createElement("track", { default: !0, kind: "subtitles", label: s.displayName, src: s.upload.mediaFile.vtt, srcLang: s.lang }) : null);
                    }
                }
            }
            (L.contextType = v.rC), (L.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const T = n.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                U = L;
        },
        959587: (e, t, a) => {
            a.d(t, { AM: () => d, ZP: () => h, pX: () => n });
            var i = a(202784),
                r = a(731708),
                o = a(659651),
                s = a(392237),
                l = a(548721);
            const d = "animated_gif",
                n = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: a } = e;
                    let s;
                    if (a === d) s = i.createElement(r.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === a) s = i.createElement(l.default, { "aria-label": "Vine", style: u.icon });
                    else if (a === n && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            a = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        s = i.createElement(r.ZP, { color: "white" }, `${e}:${a}`);
                    }
                    return s ? i.createElement(o.Z, { align: "left" }, s) : null;
                },
                u = s.default.create((e) => ({ icon: { color: e.colors.white } })),
                h = i.memo(c);
        },
        15038: (e, t, a) => {
            a.d(t, { ZP: () => c });
            var i = a(202784),
                r = a(325686),
                o = a(950822),
                s = a(392237);
            const l = (e) => (0, o.Z)("div", e);
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
                    const { activeStyle: e, allowDragDrop: t, children: a, style: o } = this.props,
                        { active: s } = this.state,
                        d = t ? n.dragBorderValid : n.dragBorderInvalid;
                    return i.createElement(l, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [n.root, o, s && d, s && e] }, i.createElement(r.Z, { style: n.inner }, "function" == typeof a ? a(s) : a));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            d.defaultProps = { allowDragDrop: !0 };
            const n = s.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                c = d;
        },
        449161: (e, t, a) => {
            a.d(t, { Z: () => m });
            var i = a(807896),
                r = a(202784),
                o = a(111677),
                s = a.n(o),
                l = a(154003),
                d = a(950822),
                n = a(392237);
            const c = s().i5450bec,
                u = s().f7432494;
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
                    const { accept: e, disabled: t, multiple: a, onChange: o, testID: s, ...n } = this.props,
                        h = !(e?.includes("video") || e?.includes("gif"));
                    return r.createElement(r.Fragment, null, r.createElement(l.ZP, (0, i.Z)({ hoverLabel: e ? { label: h ? u : c } : void 0 }, n, { disabled: t, onPress: this._handlePress })), (0, d.Z)("input", { accept: e, disabled: t, multiple: a, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: p.input, tabIndex: -1, testID: s, type: "file" }));
                }
            }
            h.defaultProps = { disabled: !1, multiple: !1 };
            const p = n.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                m = h;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountVerification~bundle.SettingsProfile~loader.MediaPickerWithPreview.3cfee8ba.js.map
