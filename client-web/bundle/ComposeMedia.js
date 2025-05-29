"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ComposeMedia"],
    {
        751170: (e, t, i) => {
            i.d(t, { A: () => h, Z: () => v });
            var a = i(202784),
                s = i(325686),
                n = i(167630),
                o = i(992942),
                r = i(392237),
                l = i(111677),
                d = i.n(l),
                c = i(205074),
                u = i(364837),
                m = i(908478);
            const p = d().gff1f69e,
                h = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
            class b extends a.Component {
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
                    return !(0, m.Z)(e, this.props) || !(0, m.Z)(t, this.state);
                }
                render() {
                    const { borderRadius: e, enableGif: t, mediaItem: i, onClick: r, resizeMode: l } = this.props,
                        { imagePreviewUrl: d } = this.state || {},
                        c = i.mediaFile && i.mediaFile.isGif && !t && !d,
                        u = i.needsProcessing || c,
                        m = [g.root, f[e], u && g.loadingBorder],
                        h = this._getImageSrc();
                    return a.createElement(s.Z, { onClick: r, style: m }, u || !h ? a.createElement(n.Z, { "aria-label": p, style: g.activityIndicator }) : a.createElement(o.Z, { resizeMode: l, source: h, style: g.image }));
                }
            }
            b.defaultProps = { borderRadius: h.NONE, enableGif: !0, resizeMode: "cover" };
            const f = r.default.create((e) => ({ [h.INFINITE]: { borderRadius: e.borderRadii.infinite }, [h.MEDIUM]: { borderRadius: e.borderRadii.small }, [h.NONE]: { borderRadius: e.borderRadii.none } })),
                g = r.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                v = b;
        },
        304059: (e, t, i) => {
            i.d(t, { Z: () => O });
            var a = i(202784),
                s = i(325686),
                n = i(537392),
                o = i(336961),
                r = i(659651),
                l = i(154003),
                d = i(392237),
                c = i(992942),
                u = i(111677),
                m = i.n(u),
                p = i(678773),
                h = i(597237),
                b = i(254944),
                f = i(837020),
                g = i(276259),
                v = i(443781),
                y = i(10656),
                _ = i(716233),
                P = i(946208),
                E = i(540387),
                M = i(950822),
                w = i(303186),
                I = i(954300);
            class C extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: i, style: s, variants: n, ...o } = this.props,
                        r = (0, w.IM)((0, I.rD)(n), t);
                    return (0, M.Z)("video", { ...o, children: [r.map((e) => a.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: s });
                }
            }
            C.defaultProps = { dataSaverMode: !1, variants: [] };
            var Z = i(959587),
                S = i(751170),
                F = i(523561),
                x = i(195560);
            const R = (0, F.Z)({
                    loader: () =>
                        Promise.all([i.e("icons.2"), i.e("icons.9"), i.e("modules.common-e907d115"), i.e("modules.common-e019dbda"), i.e("icons.14"), i.e("icons.5"), i.e("modules.audio-6107ac1a"), i.e("modules.audio-b953418a"), i.e("modules.audio-7c51e6a7"), i.e("modules.audio-04db59e9"), i.e("modules.audio-76583d6c"), i.e("modules.audio-b7a8a5fb"), i.e("modules.audio-51f6e793"), i.e("modules.audio-e019dbda"), i.e("modules.audio-262c94d4"), i.e("modules.audio-c6fe4ea4"), i.e("icons.17"), i.e("icons.27"), i.e("icons.19"), i.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-85aa903d"), i.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-c8e3a520"), i.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-658f42e4"), i.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-1f16c288"), i.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), i.e("loader.MediaPreviewVideoPlayer")])
                            .then(i.bind(i, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => a.createElement(x.Z, { hasError: e, onRetry: t }),
                }),
                T = m().gd80afba,
                V = m().j322caee,
                D = m().abd845fe,
                G = m().df1b0708,
                B = m().cd959e5c,
                k = m().e68b09b4,
                z = m().add55c98,
                A = m().f350cf46;
            class U extends a.Component {
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
                                        layout: { height: s, width: n },
                                    },
                                } = e,
                                { height: o, width: r } = a,
                                l = r / o;
                            Math.abs(l - n / s) > 0.05 && ("width" === i ? this.setState({ mediaContainerSizeStyle: { width: s * l } }) : "height" === i && this.setState({ mediaContainerSizeStyle: { height: n / l } }));
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
                    const { "aria-label": e, enableGif: t, mediaItem: i, onEdit: d, onEditSensitiveWarning: c, onRemove: u, role: m, style: v, withAltTextLabel: _, withCloseButton: P, withDragAndDropIndicator: E, withEditButton: M, withEditIcon: w, withEditSensitiveWarningButton: I } = this.props,
                        { mediaContainerSizeStyle: C, playGif: S } = this.state,
                        F = i.externalMediaDetails && i.externalMediaDetails.mediaType === g.Re,
                        x = F || (t && i.mediaFile && i.mediaFile.isGif),
                        R = !!i.mediaFile?.isVideo;
                    return a.createElement(n.ZP, null, ({ windowWidth: t }) => {
                        const i = void 0 !== w ? w : !y.Z.isTwoColumnLayout(t);
                        return a.createElement(s.Z, { "aria-label": e || z, onLayout: this._handleMediaPreviewLayout, role: m, style: [v, L.cursor, F && L.gifPlayButton, C] }, this._renderPreview(), F && !S && a.createElement(o.Z, { "aria-label": G, onPress: this._handleGifClick, size: "small" }), x ? a.createElement(Z.ZP, { type: Z.AM }) : null, _ && !R ? a.createElement(r.Z, { align: "left", altLabel: e }) : null, a.createElement(s.Z, { style: L.editMedia }, E ? a.createElement(l.ZP, { "aria-label": A, hoverLabel: { label: A }, icon: a.createElement(p.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, M && I ? a.createElement(l.ZP, { "aria-label": V, icon: a.createElement(h.default, { style: L.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, M ? a.createElement(l.ZP, { "aria-label": T, icon: i ? a.createElement(b.default, null) : void 0, onPress: d, size: i ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, i ? void 0 : D) : null), P ? a.createElement(l.ZP, { "aria-label": B, hoverLabel: { label: k }, icon: a.createElement(f.default, null), onPress: u, size: "small", style: L.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            i = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, i);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : a.createElement(s.Z, { style: d.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: i } = this.state,
                        n = { uri: i ? e : t };
                    return a.createElement(s.Z, { onClick: this._handleGifClick, style: d.default.absoluteFill }, a.createElement(c.Z, { resizeMode: "cover", source: n, style: L.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: i, mediaItem: s, onClick: n } = this.props;
                    return a.createElement(S.Z, { borderRadius: e, enableGif: t, mediaItem: s, onClick: n, resizeMode: i });
                }
                _renderVideoPreview(e, t, i, s) {
                    const { mediaItem: n } = this.props,
                        o = n.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && s instanceof E.ZP) {
                        let o = [];
                        (0, _.TO)(s.fileHandle) && (o = [{ src: t, type: e }]);
                        const r = n.mediaMetadata?.subtitles,
                            l = n?.trimData;
                        return a.createElement(R, { mediaFile: s, mediaId: String(i), mediaItem: n, subtitles: r, trimData: l, variants: o });
                    }
                    {
                        const i = (0, _.TO)(s.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return a.createElement(C, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: s instanceof E.ZP ? s.thumbnail : "", style: L.video, variants: i }, o?.upload?.mediaFile instanceof P.ZP ? a.createElement("track", { default: !0, kind: "subtitles", label: o.displayName, src: o.upload.mediaFile.vtt, srcLang: o.lang }) : null);
                    }
                }
            }
            (U.contextType = v.rC), (U.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const L = d.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                O = U;
        },
        959587: (e, t, i) => {
            i.d(t, { AM: () => l, ZP: () => m, pX: () => d });
            var a = i(202784),
                s = i(731708),
                n = i(659651),
                o = i(392237),
                r = i(548721);
            const l = "animated_gif",
                d = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: i } = e;
                    let o;
                    if (i === l) o = a.createElement(s.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === i) o = a.createElement(r.default, { "aria-label": "Vine", style: u.icon });
                    else if (i === d && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            i = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        o = a.createElement(s.ZP, { color: "white" }, `${e}:${i}`);
                    }
                    return o ? a.createElement(n.Z, { align: "left" }, o) : null;
                },
                u = o.default.create((e) => ({ icon: { color: e.colors.white } })),
                m = a.memo(c);
        },
        513313: (e, t, i) => {
            i.d(t, { P: () => a });
            const a = Object.freeze({ Crop: "crop", AltText: "alt_text", SensitiveMedia: "sensitive_media", Subtitles: "subtitles", Trimmer: "trimmer" });
        },
        343362: (e, t, i) => {
            i.r(t), i.d(t, { TabbedMediaEditScreen: () => b, default: () => f });
            var a = i(807896),
                s = i(202784),
                n = i(443781),
                o = i(536210),
                r = (i(136728), i(668214)),
                l = i(497294),
                d = i(632960);
            const c = (e, t) => {
                    const i = t.location?.state?.showAllMedia;
                    return i ? u(e) : m(e);
                },
                u = (e) => {
                    const t = d.tS(e),
                        i = [];
                    for (const e of t) {
                        const t = e.mediaIds || [];
                        i.push(...t);
                    }
                    return (0, l.m3)(e, i);
                },
                m = (e) => {
                    const t = d.E_(e),
                        i = d.tS(e)[t].mediaIds || [];
                    return (0, l.m3)(e, i);
                },
                p = (e, t) => t.location?.state?.mediaId,
                h = (0, r.Z)()
                    .propsFromState(() => ({ initialMediaId: p, media: c }))
                    .propsFromActions(() => ({ setMediaMetadata: l._B, processMedia: l.C4, updateMediaUpload: l._J }))
                    .withAnalytics({ page: "tabbed_media" });
            class b extends s.Component {
                constructor(e, t) {
                    super(e, t);
                    const { history: i, initialMediaId: a, media: s } = e;
                    (s.length <= 0 || !a) && i.replace("/");
                }
                render() {
                    const e = this.context.featureSwitches.isTrue("sensitive_tweet_warnings_enabled"),
                        { match: t, staticContext: i, ...n } = this.props;
                    return s.createElement(o.Z, (0, a.Z)({}, n, { sensitiveMediaTabEnabled: e }));
                }
            }
            b.contextType = n.rC;
            const f = h(b);
        },
        583813: (e, t, i) => {
            i.r(t), i.d(t, { TabbedMediaEditScreen: () => m, default: () => p });
            var a = i(807896),
                s = i(202784),
                n = i(536210),
                o = i(668214),
                r = i(798538),
                l = i(497294);
            const d = (e, t) => t.location && t.location.state && t.location.state.mediaId,
                c = (e, t) => {
                    const i = ((e, t) => t.location?.state?.conversationId)(0, t);
                    return (0, r.W8)(e, i);
                },
                u = (0, o.Z)()
                    .propsFromState(() => ({ media: c, initialMediaId: d }))
                    .adjustStateProps(({ initialMediaId: e, media: t }) => ({ media: t ? [t] : [], initialMediaId: e }))
                    .propsFromActions(() => ({ setMediaMetadata: l._B, processMedia: l.C4, updateMediaUpload: l._J }))
                    .withAnalytics({ page: "tabbed_media_dm" });
            class m extends s.Component {
                constructor(e) {
                    super(e);
                    const { history: t, initialMediaId: i, media: a } = e;
                    (a.length <= 0 || !i) && t.replace("/");
                }
                render() {
                    const { match: e, staticContext: t, ...i } = this.props;
                    return s.createElement(n.Z, (0, a.Z)({}, i, { sensitiveMediaTabEnabled: !1 }));
                }
            }
            const p = u(m);
        },
        109006: (e, t, i) => {
            i.r(t), i.d(t, { PhotoTagsScreen: () => Z, default: () => F });
            var a = i(202784),
                s = i(325686),
                n = i(834324),
                o = i(154003),
                r = i(392237),
                l = i(111677),
                d = i.n(l),
                c = i(47086),
                u = i(908478),
                m = i(625661),
                p = i(980407),
                h = i(597496),
                b = i(339110),
                f = i(161821),
                g = i(668214),
                v = i(632960),
                y = i(104140);
            const _ = (e) => {
                    const t = v.E_(e);
                    return v.tS(e)[t].mediaTags;
                },
                P = (e) => {
                    const t = ((e) => {
                        const t = (0, y.sM)(e),
                            i = (t && (0, f.Z)(t)) || [];
                        return (0, b.It)(i);
                    })(e)
                        .filter((e) => e && e.rounded_score)
                        .sort(function (e, t) {
                            return (t.rounded_score || 0) - (e.rounded_score || 0);
                        });
                    return t.slice(0, 12);
                },
                E = (0, g.Z)()
                    .propsFromState(() => ({ existingTags: _, injections: P }))
                    .propsFromActions(() => ({ updateSingleComposer: v.zi }))
                    .withAnalytics({ page: "media_tag", component: "media_tagger" }),
                M = d().b772cd66,
                w = d().c20dc654,
                I = d().d1175c78,
                C = d().ae0831ab;
            function Z(e) {
                const { history: t, injections: i, existingTags: r = [], updateSingleComposer: l } = e,
                    [d, f] = a.useState(r),
                    [g, v] = a.useState(""),
                    y = (e) => {
                        f(d.filter(({ id: t }) => t !== e.id));
                    },
                    _ = () => {
                        const e = d.map((e) => e.data.id_str).sort(),
                            t = r.map((e) => e.data.id_str).sort(),
                            i = e.length === t.length && (0, u.Z)(e, t);
                        return a.createElement(s.Z, { style: S.rightColumn }, a.createElement(o.ZP, { disabled: i, onPress: E, size: "small", type: "primaryFilled" }, M));
                    },
                    P = () => {
                        t.goBack();
                    },
                    E = () => {
                        l({ updates: { mediaTags: d } }), t.goBack();
                    };
                return a.createElement(
                    p.Z,
                    { documentTitle: I, history: t, renderHeader: () => a.createElement(m.ZP, { backButtonType: "close", history: t, onBackClick: P, rightControl: _(), title: I }) },
                    a.createElement(h.fb, {
                        getItemDisabledMessage: (e) => {
                            let t;
                            return e.type !== b.El.User || e.data.can_media_tag || (t = C({ screenName: e.data.screen_name })), t;
                        },
                        getItemIsDisabled: (e) => {
                            const t = d.length >= 10;
                            return e.type === b.El.User && (!e.data.can_media_tag || !!t);
                        },
                        injections: g ? void 0 : i,
                        onQueryChange: (e) => {
                            v(e);
                        },
                        onRemove: y,
                        onSelect: (e) => {
                            e.type === b.El.User && (d.find(({ id: t }) => t === e.id) ? y(e) : d.length < 10 && f([...d, e]));
                        },
                        renderCallout: () => (d.length >= 10 ? a.createElement(s.Z, { style: S.inlineCallout }, a.createElement(n.Z, { Icon: c.default, headline: w, type: "warning" })) : null),
                        selectedUsers: d,
                        source: b._4.ComposeMediaTagging,
                        withCompactPills: !0,
                    }),
                );
            }
            const S = r.default.create((e) => ({ rightColumn: { flexDirection: "row", flexGrow: 1, alignItems: "center" }, inlineCallout: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space4, paddingTop: e.spaces.space8 } })),
                F = E(Z);
        },
        449161: (e, t, i) => {
            i.d(t, { Z: () => h });
            var a = i(807896),
                s = i(202784),
                n = i(111677),
                o = i.n(n),
                r = i(154003),
                l = i(950822),
                d = i(392237);
            const c = o().i5450bec,
                u = o().f7432494;
            class m extends s.Component {
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
                    const { accept: e, disabled: t, multiple: i, onChange: n, testID: o, ...d } = this.props,
                        m = !(e?.includes("video") || e?.includes("gif"));
                    return s.createElement(s.Fragment, null, s.createElement(r.ZP, (0, a.Z)({ hoverLabel: e ? { label: m ? u : c } : void 0 }, d, { disabled: t, onPress: this._handlePress })), (0, l.Z)("input", { accept: e, disabled: t, multiple: i, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: p.input, tabIndex: -1, testID: o, type: "file" }));
                }
            }
            m.defaultProps = { disabled: !1, multiple: !1 };
            const p = d.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                h = m;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ComposeMedia.6e039e4a.js.map
