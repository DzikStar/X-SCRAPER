"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ComposeMedia"],
    {
        751170: (e, t, a) => {
            a.d(t, { A: () => p, Z: () => y });
            var i = a(202784),
                o = a(325686),
                s = a(167630),
                r = a(992942),
                n = a(392237),
                l = a(111677),
                d = a.n(l),
                c = a(205074),
                u = a(364837),
                m = a(908478);
            const h = d().gff1f69e,
                p = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
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
                    return !(0, m.Z)(e, this.props) || !(0, m.Z)(t, this.state);
                }
                render() {
                    const { borderRadius: e, enableGif: t, mediaItem: a, onClick: n, resizeMode: l } = this.props,
                        { imagePreviewUrl: d } = this.state || {},
                        c = a.mediaFile && a.mediaFile.isGif && !t && !d,
                        u = a.needsProcessing || c,
                        m = [g.root, f[e], u && g.loadingBorder],
                        p = this._getImageSrc();
                    return i.createElement(o.Z, { onClick: n, style: m }, u || !p ? i.createElement(s.Z, { "aria-label": h, style: g.activityIndicator }) : i.createElement(r.Z, { resizeMode: l, source: p, style: g.image }));
                }
            }
            b.defaultProps = { borderRadius: p.NONE, enableGif: !0, resizeMode: "cover" };
            const f = n.default.create((e) => ({ [p.INFINITE]: { borderRadius: e.borderRadii.infinite }, [p.MEDIUM]: { borderRadius: e.borderRadii.small }, [p.NONE]: { borderRadius: e.borderRadii.none } })),
                g = n.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                y = b;
        },
        304059: (e, t, a) => {
            a.d(t, { Z: () => L });
            var i = a(202784),
                o = a(325686),
                s = a(537392),
                r = a(336961),
                n = a(659651),
                l = a(154003),
                d = a(392237),
                c = a(992942),
                u = a(111677),
                m = a.n(u),
                h = a(678773),
                p = a(597237),
                b = a(254944),
                f = a(837020),
                g = a(276259),
                y = a(443781),
                v = a(10656),
                _ = a(716233),
                M = a(946208),
                P = a(540387),
                w = a(950822),
                D = a(303186),
                E = a(954300);
            class I extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: a, style: o, variants: s, ...r } = this.props,
                        n = (0, D.IM)((0, E.rD)(s), t);
                    return (0, w.Z)("video", { ...r, children: [n.map((e) => i.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: o });
                }
            }
            I.defaultProps = { dataSaverMode: !1, variants: [] };
            var C = a(959587),
                Z = a(751170),
                S = a(523561),
                k = a(195560);
            const F = (0, S.Z)({
                    loader: () =>
                        Promise.all([a.e("icons.2"), a.e("icons.9"), a.e("modules.common-e907d115"), a.e("modules.common-e019dbda"), a.e("icons.14"), a.e("icons.5"), a.e("modules.audio-6107ac1a"), a.e("modules.audio-b953418a"), a.e("modules.audio-7c51e6a7"), a.e("modules.audio-04db59e9"), a.e("modules.audio-76583d6c"), a.e("modules.audio-b7a8a5fb"), a.e("modules.audio-51f6e793"), a.e("modules.audio-e019dbda"), a.e("modules.audio-262c94d4"), a.e("modules.audio-c6fe4ea4"), a.e("icons.17"), a.e("icons.27"), a.e("icons.19"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"), a.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"), a.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"), a.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"), a.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"), a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), a.e("loader.MediaPreviewVideoPlayer")])
                            .then(a.bind(a, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => i.createElement(k.Z, { hasError: e, onRetry: t }),
                }),
                x = m().gd80afba,
                R = m().j322caee,
                T = m().abd845fe,
                G = m().df1b0708,
                V = m().cd959e5c,
                A = m().e68b09b4,
                B = m().add55c98,
                z = m().f350cf46;
            class U extends i.Component {
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
                                        layout: { height: o, width: s },
                                    },
                                } = e,
                                { height: r, width: n } = i,
                                l = n / r;
                            Math.abs(l - s / o) > 0.05 && ("width" === a ? this.setState({ mediaContainerSizeStyle: { width: o * l } }) : "height" === a && this.setState({ mediaContainerSizeStyle: { height: s / l } }));
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
                    const { "aria-label": e, enableGif: t, mediaItem: a, onEdit: d, onEditSensitiveWarning: c, onRemove: u, role: m, style: y, withAltTextLabel: _, withCloseButton: M, withDragAndDropIndicator: P, withEditButton: w, withEditIcon: D, withEditSensitiveWarningButton: E } = this.props,
                        { mediaContainerSizeStyle: I, playGif: Z } = this.state,
                        S = a.externalMediaDetails && a.externalMediaDetails.mediaType === g.Re,
                        k = S || (t && a.mediaFile && a.mediaFile.isGif),
                        F = !!a.mediaFile?.isVideo;
                    return i.createElement(s.ZP, null, ({ windowWidth: t }) => {
                        const a = void 0 !== D ? D : !v.Z.isTwoColumnLayout(t);
                        return i.createElement(o.Z, { "aria-label": e || B, onLayout: this._handleMediaPreviewLayout, role: m, style: [y, O.cursor, S && O.gifPlayButton, I] }, this._renderPreview(), S && !Z && i.createElement(r.Z, { "aria-label": G, onPress: this._handleGifClick, size: "small" }), k ? i.createElement(C.ZP, { type: C.AM }) : null, _ && !F ? i.createElement(n.Z, { align: "left", altLabel: e }) : null, i.createElement(o.Z, { style: O.editMedia }, P ? i.createElement(l.ZP, { "aria-label": z, hoverLabel: { label: z }, icon: i.createElement(h.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, w && E ? i.createElement(l.ZP, { "aria-label": R, icon: i.createElement(p.default, { style: O.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, w ? i.createElement(l.ZP, { "aria-label": x, icon: a ? i.createElement(b.default, null) : void 0, onPress: d, size: a ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, a ? void 0 : T) : null), M ? i.createElement(l.ZP, { "aria-label": V, hoverLabel: { label: A }, icon: i.createElement(f.default, null), onPress: u, size: "small", style: O.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            a = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, a);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : i.createElement(o.Z, { style: d.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: a } = this.state,
                        s = { uri: a ? e : t };
                    return i.createElement(o.Z, { onClick: this._handleGifClick, style: d.default.absoluteFill }, i.createElement(c.Z, { resizeMode: "cover", source: s, style: O.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: a, mediaItem: o, onClick: s } = this.props;
                    return i.createElement(Z.Z, { borderRadius: e, enableGif: t, mediaItem: o, onClick: s, resizeMode: a });
                }
                _renderVideoPreview(e, t, a, o) {
                    const { mediaItem: s } = this.props,
                        r = s.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && o instanceof P.ZP) {
                        let r = [];
                        (0, _.TO)(o.fileHandle) && (r = [{ src: t, type: e }]);
                        const n = s.mediaMetadata?.subtitles,
                            l = s?.trimData;
                        return i.createElement(F, { mediaFile: o, mediaId: String(a), mediaItem: s, subtitles: n, trimData: l, variants: r });
                    }
                    {
                        const a = (0, _.TO)(o.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return i.createElement(I, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: o instanceof P.ZP ? o.thumbnail : "", style: O.video, variants: a }, r?.upload?.mediaFile instanceof M.ZP ? i.createElement("track", { default: !0, kind: "subtitles", label: r.displayName, src: r.upload.mediaFile.vtt, srcLang: r.lang }) : null);
                    }
                }
            }
            (U.contextType = y.rC), (U.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const O = d.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                L = U;
        },
        959587: (e, t, a) => {
            a.d(t, { AM: () => l, ZP: () => m, pX: () => d });
            var i = a(202784),
                o = a(731708),
                s = a(659651),
                r = a(392237),
                n = a(548721);
            const l = "animated_gif",
                d = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: a } = e;
                    let r;
                    if (a === l) r = i.createElement(o.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === a) r = i.createElement(n.default, { "aria-label": "Vine", style: u.icon });
                    else if (a === d && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            a = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        r = i.createElement(o.ZP, { color: "white" }, `${e}:${a}`);
                    }
                    return r ? i.createElement(s.Z, { align: "left" }, r) : null;
                },
                u = r.default.create((e) => ({ icon: { color: e.colors.white } })),
                m = i.memo(c);
        },
        513313: (e, t, a) => {
            a.d(t, { P: () => i });
            const i = Object.freeze({ Crop: "crop", AltText: "alt_text", SensitiveMedia: "sensitive_media", Subtitles: "subtitles", Trimmer: "trimmer" });
        },
        343362: (e, t, a) => {
            a.r(t), a.d(t, { TabbedMediaEditScreen: () => b, default: () => f });
            var i = a(807896),
                o = a(202784),
                s = a(443781),
                r = a(536210),
                n = (a(136728), a(668214)),
                l = a(497294),
                d = a(632960);
            const c = (e, t) => {
                    const a = t.location?.state?.showAllMedia;
                    return a ? u(e) : m(e);
                },
                u = (e) => {
                    const t = d.tS(e),
                        a = [];
                    for (const e of t) {
                        const t = e.mediaIds || [];
                        a.push(...t);
                    }
                    return (0, l.m3)(e, a);
                },
                m = (e) => {
                    const t = d.E_(e),
                        a = d.tS(e)[t].mediaIds || [];
                    return (0, l.m3)(e, a);
                },
                h = (e, t) => t.location?.state?.mediaId,
                p = (0, n.Z)()
                    .propsFromState(() => ({ initialMediaId: h, media: c }))
                    .propsFromActions(() => ({ setMediaMetadata: l._B, processMedia: l.C4, updateMediaUpload: l._J }))
                    .withAnalytics({ page: "tabbed_media" });
            class b extends o.Component {
                constructor(e, t) {
                    super(e, t);
                    const { history: a, initialMediaId: i, media: o } = e;
                    (o.length <= 0 || !i) && a.replace("/");
                }
                render() {
                    const e = this.context.featureSwitches.isTrue("sensitive_tweet_warnings_enabled"),
                        { match: t, staticContext: a, ...s } = this.props;
                    return o.createElement(r.Z, (0, i.Z)({}, s, { sensitiveMediaTabEnabled: e }));
                }
            }
            b.contextType = s.rC;
            const f = p(b);
        },
        583813: (e, t, a) => {
            a.r(t), a.d(t, { TabbedMediaEditScreen: () => m, default: () => h });
            var i = a(807896),
                o = a(202784),
                s = a(536210),
                r = a(668214),
                n = a(798538),
                l = a(497294);
            const d = (e, t) => t.location && t.location.state && t.location.state.mediaId,
                c = (e, t) => {
                    const a = ((e, t) => t.location?.state?.conversationId)(0, t);
                    return (0, n.W8)(e, a);
                },
                u = (0, r.Z)()
                    .propsFromState(() => ({ media: c, initialMediaId: d }))
                    .adjustStateProps(({ initialMediaId: e, media: t }) => ({ media: t ? [t] : [], initialMediaId: e }))
                    .propsFromActions(() => ({ setMediaMetadata: l._B, processMedia: l.C4, updateMediaUpload: l._J }))
                    .withAnalytics({ page: "tabbed_media_dm" });
            class m extends o.Component {
                constructor(e) {
                    super(e);
                    const { history: t, initialMediaId: a, media: i } = e;
                    (i.length <= 0 || !a) && t.replace("/");
                }
                render() {
                    const { match: e, staticContext: t, ...a } = this.props;
                    return o.createElement(s.Z, (0, i.Z)({}, a, { sensitiveMediaTabEnabled: !1 }));
                }
            }
            const h = u(m);
        },
        109006: (e, t, a) => {
            a.r(t), a.d(t, { PhotoTagsScreen: () => C, default: () => S });
            var i = a(202784),
                o = a(325686),
                s = a(834324),
                r = a(154003),
                n = a(392237),
                l = a(111677),
                d = a.n(l),
                c = a(47086),
                u = a(908478),
                m = a(625661),
                h = a(980407),
                p = a(597496),
                b = a(339110),
                f = a(161821),
                g = a(668214),
                y = a(632960),
                v = a(104140);
            const _ = (e) => {
                    const t = y.E_(e);
                    return y.tS(e)[t].mediaTags;
                },
                M = (e) => {
                    const t = ((e) => {
                        const t = (0, v.sM)(e),
                            a = (t && (0, f.Z)(t)) || [];
                        return (0, b.It)(a);
                    })(e)
                        .filter((e) => e && e.rounded_score)
                        .sort(function (e, t) {
                            return (t.rounded_score || 0) - (e.rounded_score || 0);
                        });
                    return t.slice(0, 12);
                },
                P = (0, g.Z)()
                    .propsFromState(() => ({ existingTags: _, injections: M }))
                    .propsFromActions(() => ({ updateSingleComposer: y.zi }))
                    .withAnalytics({ page: "media_tag", component: "media_tagger" }),
                w = d().b772cd66,
                D = d().c20dc654,
                E = d().d1175c78,
                I = d().ae0831ab;
            function C(e) {
                const { history: t, injections: a, existingTags: n = [], updateSingleComposer: l } = e,
                    [d, f] = i.useState(n),
                    [g, y] = i.useState(""),
                    v = (e) => {
                        f(d.filter(({ id: t }) => t !== e.id));
                    },
                    _ = () => {
                        const e = d.map((e) => e.data.id_str).sort(),
                            t = n.map((e) => e.data.id_str).sort(),
                            a = e.length === t.length && (0, u.Z)(e, t);
                        return i.createElement(o.Z, { style: Z.rightColumn }, i.createElement(r.ZP, { disabled: a, onPress: P, size: "small", type: "primaryFilled" }, w));
                    },
                    M = () => {
                        t.goBack();
                    },
                    P = () => {
                        l({ updates: { mediaTags: d } }), t.goBack();
                    };
                return i.createElement(
                    h.Z,
                    { documentTitle: E, history: t, renderHeader: () => i.createElement(m.ZP, { backButtonType: "close", history: t, onBackClick: M, rightControl: _(), title: E }) },
                    i.createElement(p.fb, {
                        getItemDisabledMessage: (e) => {
                            let t;
                            return e.type !== b.El.User || e.data.can_media_tag || (t = I({ screenName: e.data.screen_name })), t;
                        },
                        getItemIsDisabled: (e) => {
                            const t = d.length >= 10;
                            return e.type === b.El.User && (!e.data.can_media_tag || !!t);
                        },
                        injections: g ? void 0 : a,
                        onQueryChange: (e) => {
                            y(e);
                        },
                        onRemove: v,
                        onSelect: (e) => {
                            e.type === b.El.User && (d.find(({ id: t }) => t === e.id) ? v(e) : d.length < 10 && f([...d, e]));
                        },
                        renderCallout: () => (d.length >= 10 ? i.createElement(o.Z, { style: Z.inlineCallout }, i.createElement(s.Z, { Icon: c.default, headline: D, type: "warning" })) : null),
                        selectedUsers: d,
                        source: b._4.ComposeMediaTagging,
                        withCompactPills: !0,
                    }),
                );
            }
            const Z = n.default.create((e) => ({ rightColumn: { flexDirection: "row", flexGrow: 1, alignItems: "center" }, inlineCallout: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space4, paddingTop: e.spaces.space8 } })),
                S = P(C);
        },
        449161: (e, t, a) => {
            a.d(t, { Z: () => p });
            var i = a(807896),
                o = a(202784),
                s = a(111677),
                r = a.n(s),
                n = a(154003),
                l = a(950822),
                d = a(392237);
            const c = r().i5450bec,
                u = r().f7432494;
            class m extends o.Component {
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
                    const { accept: e, disabled: t, multiple: a, onChange: s, testID: r, ...d } = this.props,
                        m = !(e?.includes("video") || e?.includes("gif"));
                    return o.createElement(o.Fragment, null, o.createElement(n.ZP, (0, i.Z)({ hoverLabel: e ? { label: m ? u : c } : void 0 }, d, { disabled: t, onPress: this._handlePress })), (0, l.Z)("input", { accept: e, disabled: t, multiple: a, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: h.input, tabIndex: -1, testID: r, type: "file" }));
                }
            }
            m.defaultProps = { disabled: !1, multiple: !1 };
            const h = d.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                p = m;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ComposeMedia.a2fba85a.js.map
