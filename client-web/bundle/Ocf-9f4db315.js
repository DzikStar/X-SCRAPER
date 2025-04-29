"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-9f4db315"],
    {
        273919: (e, t, a) => {
            a.d(t, { OY: () => c, aw: () => s, z1: () => u });
            var i = a(506899),
                n = a(674132),
                d = a.n(n);
            const r = d().d5568440,
                l = d().d0511fe6,
                o = d().cd24fe60,
                s = new i.fK.Entity("emailValidity", {}, { processStrategy: (e) => ({ valid: e.valid, errorMessage: e.valid ? "" : e.msg }) }),
                c = new i.fK.Entity("passwordValidity", {}, { processStrategy: (e) => ({ valid: e.pass, errorMessage: e.pass ? "" : r }) }),
                u = new i.fK.Entity("phoneNumberValidity", {}, { processStrategy: (e) => ({ valid: e.valid && e.available, errorMessage: e.valid ? (e.available ? "" : l) : o }) });
        },
        121363: (e, t, a) => {
            a.d(t, { Z: () => s });
            var i = a(506899),
                n = a(676145),
                d = a(588960),
                r = a.n(d),
                l = a(318752);
            const o = (e, t, a) => {
                    const i = (0, l.Z)(e, t, a);
                    if (e && "string" == typeof i.vcard) {
                        const e = r().parse(i.vcard),
                            t = (e && e[0]) || null;
                        return { ...i, vcard: t };
                    }
                    return i;
                },
                s = new i.fK.Entity("vcards", {}, { idAttribute: (e) => ((0, n.Z)(e.id) ? e.id : e.id_str), processStrategy: o });
        },
        229333: (e, t, a) => {
            a.d(t, { Z: () => u });
            var i = a(202784),
                n = a(466999),
                d = a(325686),
                r = a(392237),
                l = a(674132);
            const o = a.n(l)().e5b0063d;
            let s = 0;
            class c extends i.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${s}`), (s += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        a = o({ title: t });
                    return i.createElement(d.Z, { "aria-labelledby": this._listDomId, role: "region" }, i.createElement(n.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: r.default.visuallyHidden }, t), i.createElement(d.Z, { "aria-label": a }, e));
                }
            }
            const u = c;
        },
        414939: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(202784),
                n = a(325686),
                d = a(392237);
            class r extends i.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return i.createElement(n.Z, { style: l.root });
                }
            }
            const l = d.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                o = r;
        },
        337069: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(202784),
                n = a(325686),
                d = a(187669);
            const r = { threshold: 0.01 },
                l = (e) => {
                    const { children: t, onImpression: a, style: l } = e,
                        o = i.useRef(null),
                        s = (e) => {
                            e.forEach((e) => {
                                e.isIntersecting && a();
                            });
                        };
                    return (
                        (0, d.q)(() => {
                            if ("IntersectionObserver" in window) {
                                const e = new IntersectionObserver(s, r),
                                    t = o.current;
                                null != t && e.observe(t);
                                const a = () => {
                                    const t = o.current;
                                    null != t && e.unobserve(t), e.disconnect();
                                };
                                return a;
                            }
                        }),
                        i.createElement(n.Z, { ref: o, style: l }, t)
                    );
                };
        },
        965245: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(807896),
                n = a(202784),
                d = a(229333),
                r = a(414939),
                l = a(334346);
            const o = ({ accessibilityTitle: e, footer: t = n.createElement(r.Z, null), ...a }) => {
                const o = n.createElement(l.C, (0, i.Z)({}, a, { footer: t }));
                return e ? n.createElement(d.Z, { title: e }, o) : o;
            };
        },
        373554: (e, t, a) => {
            a.d(t, { Z: () => v, h: () => m });
            var i = a(807896),
                n = a(202784),
                d = a(449161),
                r = a(392237),
                l = a(674132),
                o = a.n(l),
                s = a(473026),
                c = a(276259),
                u = a(540387);
            const p = "fileInput",
                b = o().b9960f32,
                h = n.createElement(s.default, null),
                m = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: a }) => (t ? c.v5 : []).concat(e ? [c.Re] : []).concat(a ? u.jn : []);
            const S = r.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                v = function ({ "aria-label": e = b, acceptGifs: t = !0, acceptImages: a = !0, acceptVideo: r = !0, customMimeTypes: l = [], icon: o = h, size: s = "medium", style: c, withIcon: u = !0, ...v }) {
                    const f = m({ acceptGifs: t, acceptImages: a, acceptVideo: r }).concat(l).join(",");
                    return n.createElement(d.Z, (0, i.Z)({}, v, { accept: f, "aria-label": e, icon: u ? o : void 0, size: s, style: [S.root, c], testID: p }));
                };
        },
        751170: (e, t, a) => {
            a.d(t, { A: () => h, Z: () => f });
            var i = a(202784),
                n = a(325686),
                d = a(167630),
                r = a(992942),
                l = a(392237),
                o = a(674132),
                s = a.n(o),
                c = a(205074),
                u = a(364837),
                p = a(908478);
            const b = s().gff1f69e,
                h = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
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
                    return !(0, p.Z)(e, this.props) || !(0, p.Z)(t, this.state);
                }
                render() {
                    const { borderRadius: e, enableGif: t, mediaItem: a, onClick: l, resizeMode: o } = this.props,
                        { imagePreviewUrl: s } = this.state || {},
                        c = a.mediaFile && a.mediaFile.isGif && !t && !s,
                        u = a.needsProcessing || c,
                        p = [v.root, S[e], u && v.loadingBorder],
                        h = this._getImageSrc();
                    return i.createElement(n.Z, { onClick: l, style: p }, u || !h ? i.createElement(d.Z, { "aria-label": b, style: v.activityIndicator }) : i.createElement(r.Z, { resizeMode: o, source: h, style: v.image }));
                }
            }
            m.defaultProps = { borderRadius: h.NONE, enableGif: !0, resizeMode: "cover" };
            const S = l.default.create((e) => ({ [h.INFINITE]: { borderRadius: e.borderRadii.infinite }, [h.MEDIUM]: { borderRadius: e.borderRadii.small }, [h.NONE]: { borderRadius: e.borderRadii.none } })),
                v = l.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                f = m;
        },
        304059: (e, t, a) => {
            a.d(t, { Z: () => U });
            var i = a(202784),
                n = a(325686),
                d = a(537392),
                r = a(336961),
                l = a(659651),
                o = a(154003),
                s = a(392237),
                c = a(992942),
                u = a(674132),
                p = a.n(u),
                b = a(678773),
                h = a(597237),
                m = a(254944),
                S = a(837020),
                v = a(276259),
                f = a(443781),
                y = a(10656),
                A = a(716233),
                w = a(946208),
                _ = a(540387),
                g = a(950822),
                D = a(303186),
                E = a(954300);
            class Z extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: a, style: n, variants: d, ...r } = this.props,
                        l = (0, D.IM)((0, E.rD)(d), t);
                    return (0, g.Z)("video", { ...r, children: [l.map((e) => i.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: n });
                }
            }
            Z.defaultProps = { dataSaverMode: !1, variants: [] };
            var P = a(959587),
                C = a(751170),
                V = a(523561),
                I = a(195560);
            const B = (0, V.Z)({
                    loader: () =>
                        Promise.all([
                            a.e("icons.9"),
                            a.e("modules.common-e907d115"),
                            a.e("modules.common-e019dbda"),
                            a.e("icons.5"),
                            a.e("icons.14"),
                            a.e("icons.2"),
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
                            a.e("icons.27"),
                            a.e("icons.19"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-00a077b2"),
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
                    renderPlaceholder: (e, t) => i.createElement(I.Z, { hasError: e, onRetry: t }),
                }),
                M = p().gd80afba,
                R = p().j322caee,
                F = p().abd845fe,
                x = p().df1b0708,
                T = p().cd959e5c,
                k = p().e68b09b4,
                G = p().add55c98,
                z = p().f350cf46;
            class O extends i.Component {
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
                                        layout: { height: n, width: d },
                                    },
                                } = e,
                                { height: r, width: l } = i,
                                o = l / r;
                            Math.abs(o - d / n) > 0.05 && ("width" === a ? this.setState({ mediaContainerSizeStyle: { width: n * o } }) : "height" === a && this.setState({ mediaContainerSizeStyle: { height: d / o } }));
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
                    const { "aria-label": e, enableGif: t, mediaItem: a, onEdit: s, onEditSensitiveWarning: c, onRemove: u, role: p, style: f, withAltTextLabel: A, withCloseButton: w, withDragAndDropIndicator: _, withEditButton: g, withEditIcon: D, withEditSensitiveWarningButton: E } = this.props,
                        { mediaContainerSizeStyle: Z, playGif: C } = this.state,
                        V = a.externalMediaDetails && a.externalMediaDetails.mediaType === v.Re,
                        I = V || (t && a.mediaFile && a.mediaFile.isGif),
                        B = !!a.mediaFile?.isVideo;
                    return i.createElement(d.ZP, null, ({ windowWidth: t }) => {
                        const a = void 0 !== D ? D : !y.Z.isTwoColumnLayout(t);
                        return i.createElement(n.Z, { "aria-label": e || G, onLayout: this._handleMediaPreviewLayout, role: p, style: [f, L.cursor, V && L.gifPlayButton, Z] }, this._renderPreview(), V && !C && i.createElement(r.Z, { "aria-label": x, onPress: this._handleGifClick, size: "small" }), I ? i.createElement(P.ZP, { type: P.AM }) : null, A && !B ? i.createElement(l.Z, { align: "left", altLabel: e }) : null, i.createElement(n.Z, { style: L.editMedia }, _ ? i.createElement(o.ZP, { "aria-label": z, hoverLabel: { label: z }, icon: i.createElement(b.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, g && E ? i.createElement(o.ZP, { "aria-label": R, icon: i.createElement(h.default, { style: L.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, g ? i.createElement(o.ZP, { "aria-label": M, icon: a ? i.createElement(m.default, null) : void 0, onPress: s, size: a ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, a ? void 0 : F) : null), w ? i.createElement(o.ZP, { "aria-label": T, hoverLabel: { label: k }, icon: i.createElement(S.default, null), onPress: u, size: "small", style: L.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            a = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, a);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : i.createElement(n.Z, { style: s.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: a } = this.state,
                        d = { uri: a ? e : t };
                    return i.createElement(n.Z, { onClick: this._handleGifClick, style: s.default.absoluteFill }, i.createElement(c.Z, { resizeMode: "cover", source: d, style: L.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: a, mediaItem: n, onClick: d } = this.props;
                    return i.createElement(C.Z, { borderRadius: e, enableGif: t, mediaItem: n, onClick: d, resizeMode: a });
                }
                _renderVideoPreview(e, t, a, n) {
                    const { mediaItem: d } = this.props,
                        r = d.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && n instanceof _.ZP) {
                        let r = [];
                        (0, A.TO)(n.fileHandle) && (r = [{ src: t, type: e }]);
                        const l = d.mediaMetadata?.subtitles,
                            o = d?.trimData;
                        return i.createElement(B, { mediaFile: n, mediaId: String(a), mediaItem: d, subtitles: l, trimData: o, variants: r });
                    }
                    {
                        const a = (0, A.TO)(n.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return i.createElement(Z, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: n instanceof _.ZP ? n.thumbnail : "", style: L.video, variants: a }, r?.upload?.mediaFile instanceof w.ZP ? i.createElement("track", { default: !0, kind: "subtitles", label: r.displayName, src: r.upload.mediaFile.vtt, srcLang: r.lang }) : null);
                    }
                }
            }
            (O.contextType = f.rC), (O.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const L = s.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                U = O;
        },
        983389: (e, t, a) => {
            a.d(t, { Z: () => d });
            var i = a(202784),
                n = a(272175);
            const d = ({ description: e }) => i.createElement(n.ql, null, i.createElement("meta", { content: e, name: "description" }));
        },
        218093: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(202784),
                n = a(420740),
                d = a(674132);
            const r = a.n(d)().b2311b70;
            function l() {
                return i.createElement(n.Z, { onRetry: null, title: r });
            }
            const o = i.memo(l);
        },
        977995: (e, t, a) => {
            a.d(t, { Z: () => S });
            var i = a(202784),
                n = a(637786),
                d = a(325686),
                r = a(731708),
                l = a(154003),
                o = a(392237),
                s = a(674132),
                c = a.n(s);
            const u = "recaptcha",
                p = c().c1df579e,
                b = c().b60eba9e,
                h = c().ba939778,
                m = c().bc6efc72;
            class S extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handlePass = (e) => {
                            const { onChange: t } = this.props;
                            t && setTimeout(() => t(e), 1e3);
                        }),
                        (this._handleConsent = () => {
                            const { onConsent: e } = this.props;
                            this.setState({ termsAccepted: !0 }), e && e();
                        }),
                        (this.state = { termsAccepted: !1 }),
                        (a.g.recaptchaOptions = { useRecaptchaNet: !0 });
                }
                _renderConsentForm() {
                    const { nextButtonDisabled: e } = this.props;
                    return i.createElement(d.Z, null, i.createElement(r.ZP, { style: v.guideCopy }, b), i.createElement(d.Z, { style: v.button }, i.createElement(l.ZP, { disabled: e, onPress: this._handleConsent, size: "xLarge", type: "brandOutlined" }, p)), i.createElement(r.ZP, { color: "gray700" }, i.createElement(c().I18NFormatMessage, { $i18n: "hc37d3bb" }, i.createElement(r.ZP, { link: "https://policies.google.com/privacy" }, m))));
                }
                _renderRecaptcha() {
                    const { withConsentForm: e } = this.props;
                    return i.createElement(i.Fragment, null, e ? i.createElement(d.Z, { style: v.recaptchaTitle }, i.createElement(r.ZP, { style: v.guideCopy }, h)) : null, i.createElement(d.Z, { style: v.container }, i.createElement(n.Z, { "data-testid": u, onChange: this._handlePass, sitekey: "6LfOP30UAAAAAFBC4jbzu890rTdXBXBNHx9eVZEX" })));
                }
                render() {
                    const { withConsentForm: e } = this.props,
                        { termsAccepted: t } = this.state;
                    return e && !t ? this._renderConsentForm() : this._renderRecaptcha();
                }
            }
            const v = o.default.create((e) => ({ container: { margin: "auto", transitionProperty: "opacity", transitionDelay: "2s" }, button: { paddingVertical: e.spaces.space20 }, guideCopy: { paddingTop: e.spaces.space12 }, recaptchaTitle: { paddingBottom: e.spaces.space20 } }));
        },
        959587: (e, t, a) => {
            a.d(t, { AM: () => o, ZP: () => p, pX: () => s });
            var i = a(202784),
                n = a(731708),
                d = a(659651),
                r = a(392237),
                l = a(548721);
            const o = "animated_gif",
                s = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: a } = e;
                    let r;
                    if (a === o) r = i.createElement(n.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === a) r = i.createElement(l.default, { "aria-label": "Vine", style: u.icon });
                    else if (a === s && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            a = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        r = i.createElement(n.ZP, { color: "white" }, `${e}:${a}`);
                    }
                    return r ? i.createElement(d.Z, { align: "left" }, r) : null;
                },
                u = r.default.create((e) => ({ icon: { color: e.colors.white } })),
                p = i.memo(c);
        },
        659492: (e, t, a) => {
            a.r(t), a.d(t, { default: () => u });
            var i = a(202784),
                n = a(99107),
                d = a(107267),
                r = a(125363),
                l = a(205253),
                o = a(390387),
                s = a(466441),
                c = a(443781);
            function u(e) {
                return (0, r.v9)(o.sJ) ? i.createElement(p, null) : i.createElement(s.default, e);
            }
            function p() {
                const e = (0, d.useHistory)(),
                    t = (0, r.I0)(),
                    a = (0, r.v9)(o.sJ),
                    s = (0, r.oR)(),
                    { featureSwitches: u } = (0, c.QZ)();
                return (
                    i.useEffect(() => {
                        if (!a) return;
                        t((0, o.Jm)("/i/conferences-room"));
                        const i = u.isTrue("responsive_web_sso_redirect_enabled") || u.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || u.isTrue("responsive_web_repeat_profile_visits_notifications_enabled");
                        t((0, o.CA)(n.Bm.Google)).then(() => {
                            const t = s.getState(),
                                d = (0, o.yl)(t),
                                { allowCookieUse: r, allowDeviceAccess: c, allowPartnerships: u, allowPersonalization: p } = l.kQ(t),
                                b = l.LP(t).is_eu_country,
                                h = (0, o.V_)(t);
                            e.replace({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: b && { allow_cookie_use: !!r, allow_device_personalization: !!c, allow_partnerships: !!u, allow_ads_personalization: !!p }, requested_variant: JSON.stringify({ id_token: a, provider: n.Bm.Google, state: d[n.Bm.Google], redirect_uri: i ? h : void 0 }) } } });
                        });
                    }, [a, t, u, e, s]),
                    null
                );
            }
        },
        53140: (e, t, a) => {
            a.d(t, { Z: () => v });
            var i = a(202784),
                n = a(325686),
                d = a(392237),
                r = a(674132),
                l = a.n(r),
                o = a(516951),
                s = a(808692),
                c = a(668214),
                u = a(390387);
            const p = (0, c.Z)().propsFromState(() => ({ language: u.VT })),
                b = l().gde8fdd7({ mention: "X" }),
                h = { text: b, created_at: new Date(Date.now() - 6e5).toString(), id: 20, id_str: "20", display_text_range: [0, b.length - 1], entities: { user_mentions: [{ id_str: "783214", name: "X", screen_name: "X", text: "X", indices: [b.indexOf("@"), b.indexOf("@") + 1 + 1] }] }, user: { id: 783214, id_str: "783214", name: "X", screen_name: "X", profile_image_url_https: "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_normal.jpg", verified: !0 } };
            class m extends i.Component {
                constructor(e) {
                    super(e),
                        (this._handleTweetAction = (e) => {
                            e && e.preventDefault && e.preventDefault();
                        });
                    const { language: t, tweet: a } = this.props;
                    this._tweet = { ...h, ...a, lang: t || "en" };
                }
                render() {
                    const { withTweetBorder: e } = this.props;
                    return i.createElement(n.Z, { "aria-hidden": !0, style: [S.width, e && S.tweetBorder] }, i.createElement(s.ZP, { enableKeyboardShortcuts: !1, onAnalyticsClick: o.Z, onAvatarClick: this._handleTweetAction, onEngagementsClick: o.Z, onEntityClick: this._handleTweetAction, onMediaClick: this._handleTweetAction, onReplyContextClick: this._handleTweetAction, tweet: this._tweet, withActions: !1, withAvatarLink: !1, withTimestampLink: !1, withUserHoverCard: !1 }), i.createElement(n.Z, { style: d.default.absoluteFill }));
                }
            }
            m.defaultProps = { tweet: h, withTweetBorder: !1 };
            const S = d.default.create((e) => ({ tweetBorder: { borderStyle: "solid", borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, outlineStyle: "none" }, width: { width: "100%" } })),
                v = p(m);
        },
        700613: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(807896),
                n = a(202784),
                d = a(872660),
                r = a(917920);
            const l = (e) => {
                const { onRef: t, ...a } = e;
                return n.createElement(d.Z, (0, i.Z)({ module: r.Z, onRef: t, type: "email" }, a));
            };
        },
        872660: (e, t, a) => {
            a.d(t, { Z: () => p });
            var i = a(202784),
                n = a(855488),
                d = a(666536),
                r = a(908478),
                l = a(71620),
                o = a(668214);
            const s = (e, t) => t.module.selectEntitiesWithFetchStatus(e),
                c = (0, o.Z)()
                    .propsFromState(() => ({ validity: s }))
                    .propsFromActions(({ module: e }) => ({ clearValidity: e.clear, createLocalApiErrorHandler: (0, l.zr)("VALIDITY_FIELD_CONTEXT"), validate: e.validate }));
            class u extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._setInputRef = (e) => {
                            this._input = e;
                        }),
                        (this._handleValueChange = (e) => {
                            const { onChange: t, validationParams: a } = this.props,
                                i = e.target.value.trim();
                            this._validateDebounced({ value: i, ...a }), this.setState({ value: i }), t && t(e);
                        }),
                        (this._getIsValid = (e, t) => !!(t && e[t] && e[t].valid));
                    const a = e.defaultValue || "";
                    (this.state = { value: a, isValid: this._getIsValid(e.validity, a) }), (this._validateDebounced = (0, d.Z)(({ value: e, ...t }) => this.props.validate(e, t).catch(this.props.createLocalApiErrorHandler()), 500));
                }
                componentWillUnmount() {
                    this.props.clearValidity(), this._validateDebounced.clear(), this.props.onRef(null);
                }
                componentDidMount() {
                    const { defaultValue: e, validationParams: t } = this.props;
                    e && this._validateDebounced({ value: e, ...t }), this.props.onValidityChange(this.state.isValid), this.props.onRef({ clear: () => this.clear(), focus: () => this.focus(), isValid: () => this.isValid(), getValue: () => this.getValue() });
                }
                UNSAFE_componentWillUpdate(e, t) {
                    const { validity: a } = this.props,
                        { value: i } = this.state;
                    if (a !== e.validity || i !== t.value) {
                        const a = this._getIsValid(e.validity, t.value);
                        this.state.isValid !== a && this.setState({ isValid: a });
                    }
                }
                componentDidUpdate(e, t) {
                    const { value: a } = this.state,
                        i = t.isValid !== this.state.isValid,
                        n = !(0, r.Z)(e.validationParams, this.props.validationParams);
                    i ? this.props.onValidityChange(this.state.isValid) : a && n && (this.props.clearValidity(), this._validateDebounced({ value: a, ...this.props.validationParams }));
                }
                render() {
                    const { autoComplete: e, autoFocus: t, editable: a, label: d, name: r, style: l, type: o, validity: s } = this.props,
                        { value: c } = this.state,
                        u = c && s[c] ? s[c].errorMessage : "";
                    return i.createElement(n.Z, { autoComplete: e, autoFocus: t, editable: a, errorText: u, invalid: !!u, label: d, name: r, onChange: this._handleValueChange, ref: this._setInputRef, style: l, type: o, value: this.state.value });
                }
                clear() {
                    this.setState({ value: "", isValid: !1 });
                }
                isValid() {
                    return this.state.isValid;
                }
                getValue() {
                    return this.state.value;
                }
                focus() {
                    this._input && this._input.focus();
                }
            }
            u.defaultProps = { label: "" };
            const p = c(u);
        },
        102516: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(807896),
                n = a(202784),
                d = a(872660),
                r = a(580134);
            const l = (e) => {
                const { countryCode: t, onRef: a, ...l } = e,
                    o = { country_code: t };
                return n.createElement(d.Z, (0, i.Z)({ module: r.Z, onRef: a, type: "tel", validationParams: o }, l));
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-9f4db315.6298ff1a.js.map
